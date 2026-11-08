/**
 * ==============================================================================
 * NETFITS D1 DATABASE SERVICE (Cloudflare D1 Relational Engine)
 * ==============================================================================
 * Provedor oficial de persistência relacional ACID para Users, Ledger, Quizzes e Pedidos.
 * Em conformidade estrita com GEMINI.md (Regras 1, 2, 3 e 8 - LL-011).
 */

import { serverState } from "./server-state.ts";

export interface D1UserRecord {
  id: string;
  email: string | null;
  cpf: string | null;
  fullName: string;
  phone: string | null;
  nfsBalance: number;
  clubStatus: string;
  clubPlanId?: string | null;
  clubSubscriptionId?: string | null;
  referralCode?: string | null;
  referredBy?: string | null;
  address?: string | null;
  zipcode?: string | null;
  street?: string | null;
  number?: string | null;
  neighborhood?: string | null;
  city?: string | null;
  state?: string | null;
  createdAt: string;
  updatedAt: string;
  metadata?: string | null;
}

export class D1Service {
  private get db(): any {
    return serverState.db;
  }

  public isAvailable(): boolean {
    return Boolean(this.db && typeof this.db.prepare === "function");
  }

  /**
   * Localiza usuário por ID, E-mail ou CPF no Cloudflare D1
   */
  public async findUser(identifier?: string | null): Promise<D1UserRecord | null> {
    if (!identifier) return null;
    const clean = String(identifier).trim();
    if (!clean) return null;

    if (this.isAvailable()) {
      try {
        const cleanDigits = clean.replace(/\D/g, "");
        const query = `
          SELECT * FROM users 
          WHERE id = ? 
             OR LOWER(email) = LOWER(?) 
             OR (cpf IS NOT NULL AND (cpf = ? OR replace(replace(replace(cpf, '.', ''), '-', ''), '/', '') = ?))
          LIMIT 1
        `;
        const res = await this.db.prepare(query).bind(clean, clean, clean, cleanDigits).first();
        if (res) return res as D1UserRecord;
      } catch (err) {
        console.warn("[D1Service.findUser] Erro ao consultar D1:", err);
      }
    }

    // Fallback gracioso para a memória (serverState) se D1 indisponível
    const found = serverState.users.find((u) => {
      if (!u) return false;
      const cleanDigits = clean.replace(/\D/g, "");
      const uCpfDigits = (u.cpf || u.document || "").replace(/\D/g, "");
      return (
        u.id === clean ||
        (u.email && u.email.toLowerCase() === clean.toLowerCase()) ||
        (cleanDigits && uCpfDigits && cleanDigits === uCpfDigits)
      );
    });
    return found ? (found as D1UserRecord) : null;
  }

  /**
   * Retorna todos os usuários gravados no D1
   */
  public async getAllUsers(): Promise<D1UserRecord[]> {
    if (!this.isAvailable()) return [];
    try {
      const res = await this.db.prepare("SELECT * FROM users ORDER BY createdAt DESC").all();
      return (res?.results || []) as D1UserRecord[];
    } catch (err) {
      console.warn("[D1Service.getAllUsers] Erro:", err);
      return [];
    }
  }

  /**
   * Retorna as últimas transações do Ledger D1
   */
  public async getAllTransactions(limit = 100): Promise<any[]> {
    if (!this.isAvailable()) return [];
    try {
      const res = await this.db.prepare("SELECT * FROM transactions ORDER BY timestamp DESC LIMIT ?").bind(limit).all();
      return res?.results || [];
    } catch (err) {
      console.warn("[D1Service.getAllTransactions] Erro:", err);
      return [];
    }
  }

  /**
   * Consulta saldo oficial em tempo real para o checkout da Rock Encantech
   */
  public async getBalance(identifier: string): Promise<number> {
    const user = await this.findUser(identifier);
    return user ? Number(user.nfsBalance || 0) : 0;
  }

  /**
   * Atualiza o saldo atômico de um usuário no D1
   */
  public async updateUserBalance(userId: string, newBalance: number): Promise<void> {
    if (!this.isAvailable()) return;
    try {
      const now = new Date().toISOString();
      await this.db
        .prepare("UPDATE users SET nfsBalance = ?, updatedAt = ? WHERE id = ?")
        .bind(newBalance, now, userId)
        .run();
    } catch (err) {
      console.warn("[D1Service.updateUserBalance] Erro:", err);
    }
  }

  /**
   * Insere ou atualiza um usuário no D1
   */
  public async upsertUser(u: any): Promise<void> {
    if (!this.isAvailable() || !u || !u.id) return;
    try {
      const now = new Date().toISOString();
      const query = `
        INSERT OR REPLACE INTO users (
          id, email, cpf, fullName, phone, nfsBalance, clubStatus, clubPlanId, 
          clubSubscriptionId, referralCode, referredBy, address, zipcode, street, 
          number, neighborhood, city, state, createdAt, updatedAt, metadata
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      await this.db
        .prepare(query)
        .bind(
          u.id,
          u.email || null,
          u.cpf || u.document || null,
          u.fullName || u.name || "Usuário Netfits",
          u.phone || null,
          Number(u.nfsBalance || 0),
          u.clubStatus || "inactive",
          u.clubPlanId || null,
          u.clubSubscriptionId || null,
          u.referralCode || null,
          u.referredBy || null,
          u.address || null,
          u.zipcode || u.cep || null,
          u.street || null,
          u.number || null,
          u.neighborhood || u.bairro || null,
          u.city || null,
          u.state || u.uf || null,
          u.createdAt || now,
          now,
          JSON.stringify(u)
        )
        .run();
    } catch (err) {
      console.warn("[D1Service.upsertUser] Erro:", err);
    }
  }

  /**
   * Insere uma transação contábil no Ledger D1
   */
  public async insertTransaction(tx: {
    id: string;
    userId: string;
    userName?: string;
    amount: number;
    description: string;
    category: string;
    timestamp?: string;
    orderRef?: string;
  }): Promise<void> {
    if (!this.isAvailable()) return;
    try {
      const now = tx.timestamp || new Date().toISOString();
      await this.db
        .prepare(
          "INSERT OR REPLACE INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
        )
        .bind(tx.id, tx.userId, tx.userName || null, tx.amount, tx.description, tx.category, now, tx.orderRef || null)
        .run();
    } catch (err) {
      console.warn("[D1Service.insertTransaction] Erro:", err);
    }
  }

  /**
   * Credita pontuação atômica de Quizzes ou Interações de Feed com trava de idempotência
   */
  public async creditFeedReward(params: {
    userId: string;
    action: "quiz" | "read" | "share" | "like";
    quizId?: string;
    postTitle: string;
    points: number;
  }): Promise<{ success: boolean; newBalance: number; alreadyCompleted: boolean; message: string }> {
    const { userId, action, quizId, postTitle, points } = params;
    const now = new Date().toISOString();

    if (this.isAvailable()) {
      try {
        // 1. Trava de Idempotência: Se for quiz, verifica se já foi respondido
        if (action === "quiz" && quizId) {
          const existing = await this.db
            .prepare("SELECT id FROM quiz_completions WHERE userId = ? AND quizId = ? LIMIT 1")
            .bind(userId, quizId)
            .first();

          if (existing) {
            const currentBal = await this.getBalance(userId);
            return {
              success: false,
              newBalance: currentBal,
              alreadyCompleted: true,
              message: "Desafio/Quiz já pontuado anteriormente por este usuário.",
            };
          }
        }

        // 2. Transação atômica em batch no D1
        const txId = `tx-feed-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        const quizCompId = `qc-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        const description =
          action === "quiz"
            ? `Desafio Quiz Concluído: ${postTitle}`
            : action === "share"
            ? `Compartilhamento de Conteúdo: ${postTitle}`
            : action === "like"
            ? `Curtida em Conteúdo: ${postTitle}`
            : `Leitura Validada: ${postTitle}`;

        const batchStatements = [];

        // Atualiza saldo na tabela users
        batchStatements.push(
          this.db
            .prepare("UPDATE users SET nfsBalance = nfsBalance + ?, updatedAt = ? WHERE id = ?")
            .bind(points, now, userId)
        );

        // Registra transação no extrato
        batchStatements.push(
          this.db
            .prepare(
              "INSERT INTO transactions (id, userId, amount, description, category, timestamp) VALUES (?, ?, ?, ?, ?, ?)"
            )
            .bind(txId, userId, points, description, "feed", now)
        );

        // Se for quiz, registra conclusão na tabela de quizzes
        if (action === "quiz" && quizId) {
          batchStatements.push(
            this.db
              .prepare(
                "INSERT INTO quiz_completions (id, userId, quizId, postTitle, pointsAwarded, completedAt) VALUES (?, ?, ?, ?, ?, ?)"
              )
              .bind(quizCompId, userId, quizId, postTitle, points, now)
          );
        }

        await this.db.batch(batchStatements);

        // Busca saldo atualizado
        const updatedUser = await this.findUser(userId);
        const newBal = updatedUser ? Number(updatedUser.nfsBalance) : points;

        // Atualiza também o cache de memória do servidor para consistência
        const memUser = serverState.users.find((u) => u.id === userId);
        if (memUser) {
          memUser.nfsBalance = newBal;
        }

        return {
          success: true,
          newBalance: newBal,
          alreadyCompleted: false,
          message: `Pontuação creditada com sucesso (+${points} nfs).`,
        };
      } catch (err) {
        console.error("[D1Service.creditFeedReward] Erro na transação D1:", err);
      }
    }

    // Fallback para memória se D1 estiver inativo
    const user = serverState.users.find((u) => u.id === userId);
    if (user) {
      user.nfsBalance = (user.nfsBalance || 0) + points;
      serverState.transactions.unshift({
        id: `tx-feed-${Date.now()}`,
        userId: user.id,
        userName: user.fullName,
        amount: points,
        description: `Desafio Feed: ${postTitle}`,
        category: "feed",
        timestamp: now,
      });
      return {
        success: true,
        newBalance: user.nfsBalance,
        alreadyCompleted: false,
        message: "Pontuação creditada na memória.",
      };
    }

    return { success: false, newBalance: 0, alreadyCompleted: false, message: "Usuário não encontrado." };
  }

  /**
   * Salva ou atualiza pedido da Rock Encantech no D1
   */
  public async upsertOrder(order: any): Promise<void> {
    if (!this.isAvailable() || !order) return;
    try {
      const orderRef = order.orderRef || order._id;
      const now = new Date().toISOString();
      const query = `
        INSERT OR REPLACE INTO orders (
          id, orderRef, type, status, paymentStatus, storeId, customerId, 
          customerCpf, customerEmail, customerName, totalBrl, finalPrice, 
          pointsDiscountBrl, pointsRedeemed, cashbackNfs, rawPayload, createdAt, updatedAt
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      await this.db
        .prepare(query)
        .bind(
          orderRef,
          orderRef,
          order.type || "ORDER",
          order.status || "CONFIRMED",
          order.paymentStatus || "PAID",
          order.storeId || null,
          order.customer?.ref || order.customerId || null,
          order.customer?.document || order.customerCpf || null,
          order.customer?.email || order.customerEmail || null,
          order.customer?.name || order.customerName || null,
          Number(order.summary?.total || order.totalBrl || 0),
          Number(order.summary?.finalPrice || order.finalPrice || 0),
          Number(order.summary?.points?.currencyAmount || 0),
          Number(order.summary?.points?.amount || 0),
          Number(order.cashbackNfs || 0),
          JSON.stringify(order),
          order.createdAt || now,
          now
        )
        .run();
    } catch (err) {
      console.warn("[D1Service.upsertOrder] Erro ao salvar pedido no D1:", err);
    }
  }
}

export const d1Service = new D1Service();
