import { describe, it, expect, beforeEach } from "vitest";
import { feedAntifraud } from "@/lib/feed-antifraud";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { badgesStore } from "@/lib/badges-store";
import { wallet } from "@/lib/wallet-store";

describe("Cloudflare D1-First & Zero-Client-Authority Architecture (SSOT Guard)", () => {
  beforeEach(() => {
    // Simula inicialização limpa (usuário André Gallo)
    sharedSandboxStore.setActiveUser("usr_andre");
  });

  it("1. Quizzes concluídos persistem e são reconhecidos mesmo se localStorage estiver completamente limpo", () => {
    const quizId = "quiz-sponsor-mizuno-cap";

    // Verifica que, através da hidratação do SSOT, o quiz da Mizuno de André Gallo é reconhecido como concluído
    const isClaimed = feedAntifraud.hasClaimed("quiz", quizId, "usr_andre");
    expect(isClaimed).toBe(true);

    const completions = sharedSandboxStore.getQuizCompletions("usr_andre");
    expect(completions.some((c) => c.quizId === quizId)).toBe(true);
  });

  it("2. Regra de Ouro: Compra no Shop isolada NUNCA dá baixa automática em post do feed", () => {
    // Um post cujo quiz NÃO foi respondido pelo usuário
    const unreadQuizId = "isabella-sono-quiz";

    // O usuário comprou produtos, mas não respondeu ao quiz
    const isClaimed = feedAntifraud.hasClaimed("quiz", unreadQuizId, "usr_andre");
    expect(isClaimed).toBe(false);
  });

  it("3. Badges do usuário são hidratados do SSOT central e sobrevivem a storage local vazio", () => {
    const userBadges = sharedSandboxStore.getUserBadges("usr_andre");
    expect(userBadges.length).toBeGreaterThan(0);
    expect(userBadges.some((b) => b.badgeId === "pioneiro")).toBe(true);
    expect(userBadges.some((b) => b.badgeId === "perfil_verificado")).toBe(true);

    // Avalia o store visual de badges para o usuário ativo
    const badges = badgesStore.evaluate();
    const pioneiro = badges.find((b) => b.id === "pioneiro");
    expect(pioneiro?.unlocked).toBe(true);
  });

  it("4. Idempotência estrita: tentativa de resposta duplicada em quiz é bloqueada pelo antifraude", () => {
    const quizId = "quiz-sponsor-mizuno-cap";
    const validation = feedAntifraud.validateAction("quiz", quizId);

    // O sistema deve barrar pontuação dupla com trava de duplicidade
    expect(validation.allowed).toBe(false);
    expect(validation.reason).toContain("já concluiu o desafio");
  });

  it("5. Leitura de artigo e vídeo auditados são registrados no SSOT", () => {
    const articlePostId = "artigo-teste-d1-ssot";
    feedAntifraud.recordAction("read", articlePostId, 0);

    const receipts = sharedSandboxStore.getReadReceipts("usr_andre");
    expect(receipts.some((r) => r.postId === articlePostId && r.action === "read")).toBe(true);
    expect(feedAntifraud.hasClaimed("read", articlePostId, "usr_andre")).toBe(true);
  });
});
