// scripts/test_badges_dynamic_flow.mjs
import { INITIAL_BADGES, evaluateRealtimeBadges } from "../src/lib/badges-store.ts";
import { sharedSandboxStore } from "../src/lib/shared-sandbox-store.ts";

console.log("=== TESTE DE VALIDAÇÃO DA ESTEIRA DINÂMICA DE BADGES ===");

// 1. Testa INITIAL_BADGES: todos devem começar bloqueados
const anyUnlocked = INITIAL_BADGES.some(b => b.unlocked || b.currentProgress > 0);
if (anyUnlocked) {
  console.error("ERRO: INITIAL_BADGES possui selos desbloqueados!");
  process.exit(1);
}
console.log("✔ Passo 1: INITIAL_BADGES 100% zerados por padrão (0/12 selos).");

// 2. Simula novo usuário cadastrado
const mockNewUser = {
  id: "user-test-cris",
  fullName: "Cristiane Queli da Silva Gallo",
  email: "cristiane@teste.com",
  phone: "11999999999",
  cpf: "",
  type: "athlete",
  nfsBalance: 50,
  sports: [],
  loyaltyPrograms: [],
};

// Transações do novo usuário: apenas o bônus de boas-vindas
const initialTxs = [
  {
    id: "tx-welcome-test-cris",
    userId: "user-test-cris",
    userName: "Cristiane Queli da Silva Gallo",
    amount: 50,
    description: "🎉 Bônus de Boas-Vindas no Cadastramento Netfits",
    category: "welcome",
    timestamp: new Date().toISOString(),
  }
];

// 3. Avalia selos do novo usuário recém-criado
const evaluatedInitial = evaluateRealtimeBadges(mockNewUser, initialTxs);
const unlockedInitial = evaluatedInitial.filter(b => b.unlocked);

console.log(`- Selos desbloqueados do novo usuário: ${unlockedInitial.length}/12`);
if (unlockedInitial.length !== 0) {
  console.error("ERRO: Novo usuário não deveria ter nenhum selo desbloqueado na entrada!", unlockedInitial.map(b => b.title));
  process.exit(1);
}
console.log("✔ Passo 2: Novo usuário inicia rigorosamente com 0 selos e saldo de 50 NFS.");

// 4. Simula o usuário selecionando modalidades esportivas
const userWithSports = {
  ...mockNewUser,
  sports: ["Corrida", "Funcional"],
};
const evaluatedWithSports = evaluateRealtimeBadges(userWithSports, initialTxs);
const unlockedSports = evaluatedWithSports.filter(b => b.unlocked);
console.log(`- Selos após adicionar esportes: ${unlockedSports.length}/12 (Esperado: 1 - Atleta de Alta Performance)`);
const hasAtleta = unlockedSports.some(b => b.id === "atleta_conectado");
if (!hasAtleta) {
  console.error("ERRO: Selo atleta_conectado deveria ter sido desbloqueado!");
  process.exit(1);
}
console.log("✔ Passo 3: Adicionar esportes desbloqueou com sucesso o selo 'Atleta de Alta Performance' (+30 NFS).");

// 5. Simula o usuário adicionando programas de fidelidade
const userWithLoyalty = {
  ...userWithSports,
  loyaltyPrograms: ["livelo", "esfera"],
};
const evaluatedWithLoyalty = evaluateRealtimeBadges(userWithLoyalty, initialTxs);
const hasLoyalty = evaluatedWithLoyalty.some(b => b.id === "colecionador_pontos" && b.unlocked);
if (!hasLoyalty) {
  console.error("ERRO: Selo colecionador_pontos deveria ter sido desbloqueado!");
  process.exit(1);
}
console.log("✔ Passo 4: Adicionar fidelidade desbloqueou com sucesso o selo 'Colecionador de Pontos' (+20 NFS).");

// 6. Simula compra no Shop (Primeiro Cashback)
const txsWithPurchase = [
  ...initialTxs,
  {
    id: "tx-shop-1",
    userId: "user-test-cris",
    userName: "Cristiane Queli da Silva Gallo",
    amount: 130,
    description: "✨ Cashback compra Mkplace Pedido #TEST12345",
    category: "shop",
    timestamp: new Date().toISOString(),
  }
];
const evaluatedWithPurchase = evaluateRealtimeBadges(userWithLoyalty, txsWithPurchase);
const hasPurchase = evaluatedWithPurchase.some(b => b.id === "primeira_compra" && b.unlocked);
if (!hasPurchase) {
  console.error("ERRO: Selo primeira_compra deveria ter sido desbloqueado!");
  process.exit(1);
}
console.log("✔ Passo 5: Compra no marketplace desbloqueou com sucesso o selo 'Primeiro Cashback' (+40 NFS).");

// 7. Validação do André (fundador): deve manter seus 7 selos originais
const mockAndre = {
  id: "usr_andre",
  fullName: "André Gallo",
  sports: ["Futebol", "Corrida"],
  loyaltyPrograms: ["livelo"],
};
const evaluatedAndre = evaluateRealtimeBadges(mockAndre, [
  { id: "tx-badge-usr_andre-pioneiro", userId: "usr_andre", amount: 25, description: "🏆 Selo Conquistado: Pioneiro Netfits", category: "workout" },
  { id: "tx-badge-usr_andre-perfil_verificado", userId: "usr_andre", amount: 30, description: "🏆 Selo Conquistado: Perfil Verificado", category: "workout" },
  { id: "tx-badge-usr_andre-colecionador_pontos", userId: "usr_andre", amount: 20, description: "🏆 Selo Conquistado: Colecionador de Pontos", category: "workout" },
  { id: "tx-badge-usr_andre-atleta_conectado", userId: "usr_andre", amount: 30, description: "🏆 Selo Conquistado: Atleta de Alta Performance", category: "workout" },
  { id: "tx-badge-usr_andre-explorador_shop", userId: "usr_andre", amount: 10, description: "🏆 Selo Conquistado: Explorador do Shop", category: "workout" },
  { id: "tx-badge-usr_andre-primeira_compra", userId: "usr_andre", amount: 40, description: "🏆 Selo Conquistado: Primeiro Cashback", category: "workout" },
  { id: "tx-badge-usr_andre-voz_da_tribo", userId: "usr_andre", amount: 25, description: "🏆 Selo Conquistado: Voz da Tribo", category: "workout" },
]);
const andreUnlockedCount = evaluatedAndre.filter(b => b.unlocked).length;
console.log(`- Selos desbloqueados de André Gallo: ${andreUnlockedCount}/12 (Esperado: 7)`);
if (andreUnlockedCount < 7) {
  console.error("ERRO: André perdeu selos!");
  process.exit(1);
}
console.log("✔ Passo 6: Selos de André Gallo preservados integralmente (7/12).");

console.log("\n🎉 TODOS OS TESTES PASSARAM COM SUCESSO!");
