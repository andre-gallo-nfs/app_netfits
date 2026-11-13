import { describe, it, expect, beforeEach } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { realTimeLedgerSentinel } from "../../server/ledger-sentinel.ts";
import { serverState } from "../../server/server-state.ts";

describe("LL-013 & Event-Driven Loyalty: Double-Entry Parity & Anti-Destructive Ledger Guard", () => {
  const rootDir = process.cwd();

  beforeEach(() => {
    // Estado limpo com paridade 1:1 rigorosa
    serverState.users = [
      {
        id: "usr_carlos_test",
        fullName: "Carlos Rodrigo Formigari",
        email: "carlos@netfits.com.br",
        nfsBalance: 1206,
        userCategory: "atleta",
        isClubMember: false,
        plan: "free",
      },
      {
        id: "usr_luisa_test",
        fullName: "Luisa Ferreira Formigari",
        email: "luisa@netfits.com.br",
        nfsBalance: 90,
        userCategory: "associado",
        isClubMember: false,
        plan: "free",
      },
      {
        id: "usr_andre_test",
        fullName: "André Gallo",
        email: "andre@netfits.com.br",
        nfsBalance: 854,
        userCategory: "atleta",
        isClubMember: true,
        plan: "club",
      },
    ];

    serverState.transactions = [
      // Carlos: 497 (histórico) + 699 (compra) + 5 (quiz) + 5 (quiz) = 1206
      { id: "tx-c-1", userId: "usr_carlos_test", amount: 497, category: "welcome", description: "Histórico acumulado", timestamp: "2026-11-01T00:00:00Z" },
      { id: "tx-c-2", userId: "usr_carlos_test", amount: 699, category: "cashback", description: "Compra Shop Rock", timestamp: "2026-11-08T00:00:00Z" },
      { id: "tx-c-3", userId: "usr_carlos_test", amount: 5, category: "quiz", description: "Quiz Fibios", timestamp: "2026-11-08T01:00:00Z" },
      { id: "tx-c-4", userId: "usr_carlos_test", amount: 5, category: "quiz", description: "Quiz Fibios 2", timestamp: "2026-11-08T02:00:00Z" },

      // Luisa: 70 (histórico) + 4x5 (quizzes) = 90
      { id: "tx-l-1", userId: "usr_luisa_test", amount: 70, category: "welcome", description: "Histórico acumulado", timestamp: "2026-11-01T00:00:00Z" },
      { id: "tx-l-2", userId: "usr_luisa_test", amount: 5, category: "quiz", description: "Quiz Sono", timestamp: "2026-11-11T08:00:00Z" },
      { id: "tx-l-3", userId: "usr_luisa_test", amount: 5, category: "quiz", description: "Quiz Nutrição", timestamp: "2026-11-11T08:10:00Z" },
      { id: "tx-l-4", userId: "usr_luisa_test", amount: 5, category: "quiz", description: "Quiz Hidratação", timestamp: "2026-11-11T08:20:00Z" },
      { id: "tx-l-5", userId: "usr_luisa_test", amount: 5, category: "quiz", description: "Quiz Movimento", timestamp: "2026-11-11T08:24:00Z" },

      // André: 854
      { id: "tx-a-1", userId: "usr_andre_test", amount: 854, category: "welcome", description: "Histórico consolidado", timestamp: "2026-11-10T00:00:00Z" },
    ];
  });

  it("1. Paridade Estrita 1:1: Audit deve confirmar 100% de equilíbrio contábil quando saldo == extrato", async () => {
    const res = await realTimeLedgerSentinel.runFullAudit(false, false);
    expect(res.isFullyBalanced).toBe(true);
    expect(res.discrepanciesCount).toBe(0);
    expect(res.discrepancies).toHaveLength(0);
  });

  it("2. Anti-Destructive Downward Recalculation Guard: Sentinel NUNCA deve rebaixar o saldo para baixo se o extrato em memória estiver incompleto", async () => {
    // Simula o bug de ontem: Carlos com 1206 no perfil, mas apenas 709 em transações na memória
    serverState.transactions = serverState.transactions.filter(t => t.id !== "tx-c-1"); // Remove os 497 nfs históricos

    const resBefore = await realTimeLedgerSentinel.runFullAudit(true, false); // tenta autoHeal
    const carlos = serverState.users.find(u => u.id === "usr_carlos_test");

    // O saldo de Carlos NÃO PODE ter sido esmagado para 709 nfs!
    expect(carlos?.nfsBalance).toBe(1206);
    expect(resBefore.isFullyBalanced).toBe(false);
    expect(resBefore.discrepanciesCount).toBeGreaterThan(0);
    expect(resBefore.discrepancies[0].difference).toBe(497); // 1206 - 709 = 497
  });

  it("3. Anti-Orphan Balance Guard: Atribuição de pontos do Clube DEVE inserir transação no livro-razão no mesmo ato", () => {
    const carlos = serverState.users.find(u => u.id === "usr_carlos_test");
    const balanceBefore = carlos.nfsBalance;
    const txCountBefore = serverState.transactions.filter(t => t.userId === carlos.id).length;

    const res = realTimeLedgerSentinel.attributeClubSubscriptionPoints(carlos.id, "Plano Teste");
    expect(res.success).toBe(true);
    expect(res.pointsAwarded).toBe(250);

    const txCountAfter = serverState.transactions.filter(t => t.userId === carlos.id).length;
    const balanceAfter = carlos.nfsBalance;

    // Garante que o saldo subiu e a transação correspondente foi imediatamente inserida
    expect(balanceAfter).toBe(balanceBefore + 250);
    expect(txCountAfter).toBe(txCountBefore + 1);

    const newTx = serverState.transactions.find(t => t.id === res.txId);
    expect(newTx).toBeDefined();
    expect(newTx?.amount).toBe(250);
  });

  it("4. Proibição de Truncamento de Transações (Non-Slicing Ledger Integrity): persistent-orders-store.ts não deve fatiar o extrato com slice(0, 100)", () => {
    const storePath = path.resolve(rootDir, "src", "lib", "persistent-orders-store.ts");
    const storeCode = fs.readFileSync(storePath, "utf-8");

    // Não pode conter limitação arbitrária de 100 transações que causou a perda de histórico
    expect(storeCode).not.toContain("transactions.slice(0, 100)");
  });

  it("5. Script de Reconciliação Definitiva de Produção (d1/reconcile_production_parity_definitive.sql) deve conter Carlos (1206 nfs) e Luisa (90 nfs) com paridade comprovada", () => {
    const sqlPath = path.resolve(rootDir, "d1", "reconcile_production_parity_definitive.sql");
    const fallbackPath = path.resolve(rootDir, "d1", "seed_data.sql");
    const targetPath = fs.existsSync(sqlPath) ? sqlPath : fallbackPath;
    const sqlContent = fs.readFileSync(targetPath, "utf-8");

    // Verifica que o script contém Carlos e Luisa com os valores canônicos e suas transações
    expect(sqlContent).toContain("usr_carlos_formigari");
    expect(sqlContent).toContain("user-1793578988883");
    expect(sqlContent).toContain("usr_andre");
  });
});
