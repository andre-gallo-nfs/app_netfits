/**
 * AGENTE 20: REAL-TIME ONLINE LEDGER SENTINEL & LIVE SYNC AGENT
 * 
 * Papel Operacional:
 * 1. Interceptar e auditar toda transação no ato de criação (quizzes, boas-vindas, indicações, compras e Clube Netfits).
 * 2. Garantir a correta e pontual atribuição de benefícios do CLUBE NETFITS:
 *    - 250 nfs na adesão e a cada renovação mensal de assinatura.
 *    - 20 nfs por treino homologado com sensores/smartwatch (Terra API).
 *    - Cashback turbo de 4,8 nfs por R$ 1,00 gasto no Shop (20% a mais).
 *    - 10% de comissão MGM sobre compras realizadas por indicados do assinante.
 * 3. Auditar a integridade contábil estrita: para 100% dos clientes, nfsBalance == sum(transactions).
 * 4. Fornecer telemetria em tempo real e auto-reconciliação transparente.
 */

import { serverState } from "./server-state.ts";
import { fetchPersistentUsersAndTransactionsFromCloud, syncUsersAndTransactionsToCloud } from "../lib/persistent-orders-store.ts";

export interface LedgerAuditResult {
  auditedAt: string;
  totalUsersAudited: number;
  totalTransactionsAudited: number;
  isFullyBalanced: boolean;
  discrepanciesCount: number;
  discrepancies: Array<{
    userId: string;
    userName: string;
    email: string;
    profileBalance: number;
    ledgerSum: number;
    difference: number;
  }>;
  clubMetrics: {
    activeSubscribers: number;
    totalClubPointsAttributed: number;
    pendingWorkoutsVerified: number;
  };
  selfHealedCount: number;
}

export class RealTimeLedgerSentinel {
  private static instance: RealTimeLedgerSentinel;
  private lastAuditTimestamp: string = new Date().toISOString();

  public static getInstance(): RealTimeLedgerSentinel {
    if (!RealTimeLedgerSentinel.instance) {
      RealTimeLedgerSentinel.instance = new RealTimeLedgerSentinel();
    }
    return RealTimeLedgerSentinel.instance;
  }

  /**
   * Interceptor síncrono pré-gravação: Valida se a transação proposta é matematicamente
   * e contabilmente consistente antes de permitir a persistência no banco.
   */
  public validateProposedTransaction(userId: string, proposedAmount: number, existingBalance: number): { valid: boolean; reason?: string } {
    if (typeof proposedAmount !== "number" || isNaN(proposedAmount)) {
      return { valid: false, reason: "Valor de transação inválido (NaN ou não-numérico)." };
    }

    // Se for débito (gasto em compras), verificar saldo disponível
    if (proposedAmount < 0 && existingBalance + proposedAmount < 0) {
      return { valid: false, reason: `Saldo insuficiente para débito de ${Math.abs(proposedAmount)} nfs (Saldo: ${existingBalance} nfs).` };
    }

    return { valid: true };
  }

  /**
   * Garante a atribuição imediata e auditada de benefícios do Clube Netfits
   */
  public attributeClubSubscriptionPoints(userId: string, planName: string = "Plano Mensal Oficial"): { success: boolean; pointsAwarded: number; txId?: string } {
    const user = serverState.users.find(u => u.id === userId || u.email === userId);
    if (!user) {
      return { success: false, pointsAwarded: 0 };
    }

    const clubBonusNfs = (serverState.operationalParams as any).clubMonthlyPointsBonusNfs ?? 250;
    const txId = `tx-club-sub-${Date.now()}-${user.id}`;

    // Verificar se já não foi creditado no mesmo dia/ciclo
    const alreadyCredited = serverState.transactions.some(
      t => t.userId === user.id && t.description && t.description.includes("Adesão / Mensalidade Clube Netfits") &&
      new Date(t.timestamp).toDateString() === new Date().toDateString()
    );

    if (alreadyCredited) {
      return { success: true, pointsAwarded: 0, txId: "already_credited_today" };
    }

    user.isClubMember = true;
    user.userCategory = "associado";
    user.nfsBalance = (user.nfsBalance || 0) + clubBonusNfs;

    const tx = {
      id: txId,
      userId: user.id,
      userName: user.fullName || "Assinante Clube Netfits",
      amount: clubBonusNfs,
      description: `👑 Adesão / Mensalidade Clube Netfits — ${clubBonusNfs} nfs garantidos (${planName})`,
      category: "welcome" as const,
      timestamp: new Date().toISOString(),
    };

    serverState.transactions.unshift(tx);
    serverState.touchSync();

    console.log(`[RealTime Sentinel] 👑 +${clubBonusNfs} nfs do Clube Netfits creditados com sucesso para ${user.fullName}`);
    return { success: true, pointsAwarded: clubBonusNfs, txId };
  }

  /**
   * Garante a atribuição auditada de treinos do Clube Netfits (+20 nfs por treino via Terra API)
   */
  public attributeClubWorkoutPoints(userId: string, workoutDetails: { activityType: string; durationMinutes: number; calories?: number; source: string }): { success: boolean; pointsAwarded: number; reason?: string } {
    const user = serverState.users.find(u => u.id === userId || u.email === userId);
    if (!user) {
      return { success: false, pointsAwarded: 0, reason: "Usuário não localizado." };
    }

    if (!user.isClubMember) {
      return { success: false, pointsAwarded: 0, reason: "A pontuação de 20 nfs por treino é exclusiva para membros ativos do Clube Netfits." };
    }

    const workoutBonusNfs = serverState.operationalParams.nfsPerWorkout ?? 20;

    // Trava de governança: limite de treinos pontuados por dia (máximo 1 treino pontuado/dia)
    const todayStr = new Date().toDateString();
    const workoutsToday = serverState.transactions.filter(
      t => t.userId === user.id && t.category === "workout" && new Date(t.timestamp).toDateString() === todayStr
    );

    if (workoutsToday.length >= 1) {
      return { success: false, pointsAwarded: 0, reason: "Limite diário de 1 treino pontuado pelo Clube atingido para hoje." };
    }

    user.nfsBalance = (user.nfsBalance || 0) + workoutBonusNfs;
    const txId = `tx-club-workout-${Date.now()}-${user.id}`;
    const tx = {
      id: txId,
      userId: user.id,
      userName: user.fullName || "Atleta do Clube",
      amount: workoutBonusNfs,
      description: `🏃 Treino Validado Clube Netfits (${workoutDetails.activityType}, ${workoutDetails.durationMinutes} min via ${workoutDetails.source}) — +${workoutBonusNfs} nfs`,
      category: "workout" as const,
      timestamp: new Date().toISOString(),
    };

    serverState.transactions.unshift(tx);
    serverState.touchSync();

    console.log(`[RealTime Sentinel] 🏃 +${workoutBonusNfs} nfs de treino Clube atribuídos para ${user.fullName}`);
    return { success: true, pointsAwarded: workoutBonusNfs };
  }

  /**
   * Varredura contínua de auditoria em 100% da base ativa:
   * Compara o saldo do perfil de cada usuário com o somatório exato de suas transações no ledger.
   * Se autoHeal for true, repara instantaneamente o saldo do cliente defasado.
   */
  public async runFullAudit(autoHeal: boolean = true): Promise<LedgerAuditResult> {
    // 1. Assegurar sincronização com nuvem
    try {
      const freshCloud = await fetchPersistentUsersAndTransactionsFromCloud();
      if (freshCloud && Array.isArray(freshCloud.users) && freshCloud.users.length > 0) {
        serverState.users = freshCloud.users;
        serverState.transactions = freshCloud.transactions || [];
      }
    } catch (e) {
      console.warn("[Ledger Sentinel] Aviso ao consultar nuvem:", e);
    }

    const discrepancies: LedgerAuditResult["discrepancies"] = [];
    let selfHealedCount = 0;
    let totalClubPoints = 0;
    let activeSubscribers = 0;

    for (const u of serverState.users) {
      if (!u || !u.id) continue;
      if (u.isClubMember) activeSubscribers++;

      const uTxs = serverState.transactions.filter(t => t.userId === u.id);
      const ledgerSum = uTxs.reduce((acc, t) => acc + (t.amount || 0), 0);
      const profileBalance = Number(u.nfsBalance) || 0;
      const diff = profileBalance - ledgerSum;

      if (diff !== 0) {
        discrepancies.push({
          userId: u.id,
          userName: u.fullName || "Desconhecido",
          email: u.email || "",
          profileBalance,
          ledgerSum,
          difference: diff
        });

        if (autoHeal) {
          u.nfsBalance = ledgerSum;
          selfHealedCount++;
          console.log(`[Sentinel Auto-Heal] Saldo de ${u.fullName} corrigido de ${profileBalance} para ${ledgerSum} nfs.`);
        }
      }

      // Contabilizar pontos gerados pelo clube
      const clubTxs = uTxs.filter(t => t.description && t.description.includes("Clube Netfits"));
      totalClubPoints += clubTxs.reduce((acc, t) => acc + (t.amount || 0), 0);
    }

    if (selfHealedCount > 0) {
      try {
        await syncUsersAndTransactionsToCloud(serverState.users, serverState.transactions);
      } catch (err) {
        console.warn("[Sentinel] Aviso ao salvar correções na nuvem:", err);
      }
    }

    this.lastAuditTimestamp = new Date().toISOString();

    return {
      auditedAt: this.lastAuditTimestamp,
      totalUsersAudited: serverState.users.length,
      totalTransactionsAudited: serverState.transactions.length,
      isFullyBalanced: discrepancies.length === 0,
      discrepanciesCount: discrepancies.length,
      discrepancies,
      clubMetrics: {
        activeSubscribers,
        totalClubPointsAttributed: totalClubPoints,
        pendingWorkoutsVerified: 0,
      },
      selfHealedCount,
    };
  }
}

export const realTimeLedgerSentinel = RealTimeLedgerSentinel.getInstance();
