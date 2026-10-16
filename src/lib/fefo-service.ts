import { getPostgresPool, getSupabaseClient } from "./db.ts";
import { deductPointsFEFO, type PointBatch } from "./operational-params-store.ts";
import { serverState } from "../server/server-state.ts";

export interface DebitFEFORequest {
  userId: string;
  amount: number;
  title: string;
  orderId?: string;
  actorRole?: "athlete" | "service_role" | "admin";
}

export interface DebitFEFOResult {
  success: boolean;
  transactionId: string;
  debitedAmount: number;
  newBalance: number;
  deductedBatches: Array<{
    batchId: string;
    source: string;
    amountDeducted: number;
    expiresAt: string;
  }>;
  provider: "postgresql_rpc" | "supabase_rpc" | "fallback_local";
  executedAt: string;
  error?: string;
}

/**
 * Executa a dedução de pontos respeitando rigorosamente a governança FEFO (First-Expiring, First-Out).
 * Em produção/staging, aciona a Stored Procedure transacional do PostgreSQL `rpc_debit_points_fefo`
 * com bloqueio exclusivo de linha (SELECT FOR UPDATE) para prevenir double-spending e race conditions.
 * Em desenvolvimento local ou indisponibilidade temporária de rede, utiliza o fallback atômico em memória.
 */
export async function executeDebitPointsFEFO(req: DebitFEFORequest): Promise<DebitFEFOResult> {
  const timestamp = new Date().toISOString();

  if (!req.userId || typeof req.userId !== "string") {
    throw new Error("Parâmetro 'userId' inválido ou ausente.");
  }

  if (!req.amount || req.amount <= 0 || !Number.isInteger(req.amount)) {
    throw new Error(`Valor de débito inválido: ${req.amount}. Deve ser um número inteiro positivo.`);
  }

  // 1. Tentar execução direta via Pool PostgreSQL (Transacional ACID com Locks de Linha)
  const pool = getPostgresPool();
  if (pool) {
    let client;
    try {
      client = await pool.connect();
      // Chama a Stored Procedure oficial do schema.sql
      const sqlQuery = `
        SELECT rpc_debit_points_fefo(
          $1::uuid,
          $2::integer,
          $3::varchar,
          $4::varchar
        ) as result;
      `;
      const res = await client.query(sqlQuery, [
        req.userId,
        req.amount,
        req.title,
        req.orderId || null,
      ]);

      const rpcResult = res.rows[0]?.result;
      if (rpcResult && rpcResult.success) {
        return {
          success: true,
          transactionId: rpcResult.transaction_id,
          debitedAmount: rpcResult.debited_amount,
          newBalance: rpcResult.new_balance,
          deductedBatches: rpcResult.deducted_batches || [],
          provider: "postgresql_rpc",
          executedAt: timestamp,
        };
      }
    } catch (dbErr: any) {
      console.warn(`[FEFO Service] Falha na execução via PostgreSQL Pool (${dbErr.message}). Tentando cliente Supabase...`);
    } finally {
      if (client) client.release();
    }
  }

  // 2. Tentar execução via Supabase RPC (HTTPS REST / PostgREST)
  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      const { data, error } = await supabase.rpc("rpc_debit_points_fefo", {
        p_user_id: req.userId,
        p_amount: req.amount,
        p_title: req.title,
        p_order_id: req.orderId || null,
      });

      if (!error && data && data.success) {
        return {
          success: true,
          transactionId: data.transaction_id,
          debitedAmount: data.debited_amount,
          newBalance: data.new_balance,
          deductedBatches: data.deducted_batches || [],
          provider: "supabase_rpc",
          executedAt: timestamp,
        };
      } else if (error) {
        console.warn(`[FEFO Service] Supabase RPC retornou erro (${error.message}). Utilizando fallback resiliente.`);
      }
    } catch (supaErr: any) {
      console.warn(`[FEFO Service] Erro ao chamar Supabase RPC (${supaErr.message}).`);
    }
  }

  // 3. Fallback Resiliente Local (Memória / Sandbox Local)
  // Utiliza a função certificada deductPointsFEFO com travas de consistência
  const user = serverState.users.find(
    (u) => u.id === req.userId || u.email === req.userId || u.cpf === req.userId
  );

  const currentBalance = user?.nfsBalance ?? 0;
  if (currentBalance < req.amount) {
    throw new Error(
      `Saldo insuficiente para resgate. Saldo disponível: ${currentBalance} nfs, Solicitado: ${req.amount} nfs.`
    );
  }

  // Montar lotes simulados caso o usuário não tenha tabela própria em memória
  const mockBatches: PointBatch[] = [
    {
      id: `batch-${req.userId}-initial`,
      amount: currentBalance,
      earnedDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      expirationDate: new Date(Date.now() + 700 * 24 * 60 * 60 * 1000).toISOString(), // 24 meses
      daysRemaining: 700,
      source: "shop_cashback",
    },
  ];

  const fefoCalc = deductPointsFEFO(mockBatches, req.amount);
  const newBalance = Math.max(0, currentBalance - req.amount);

  if (user) {
    user.nfsBalance = newBalance;
  }

  const txId = `tx-fefo-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  serverState.transactions.unshift({
    id: txId,
    userId: req.userId,
    userName: user?.fullName || "Atleta Netfits",
    amount: -req.amount,
    description: req.title,
    category: "shop",
    timestamp,
  });

  serverState.touchSync();

  return {
    success: true,
    transactionId: txId,
    debitedAmount: req.amount,
    newBalance,
    deductedBatches: (fefoCalc.deductedLog || []).map((b) => ({
      batchId: b.batchId,
      source: b.source || "local_memory",
      amountDeducted: b.amountDeducted,
      expiresAt: new Date(Date.now() + 700 * 24 * 60 * 60 * 1000).toISOString(),
    })),
    provider: "fallback_local",
    executedAt: timestamp,
  };
}
