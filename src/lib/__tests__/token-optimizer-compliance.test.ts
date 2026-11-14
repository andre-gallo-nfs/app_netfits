import { describe, it, expect } from "vitest";
import { tokenOptimizer } from "../ai/token-optimizer";
import { DEFAULT_OPERATIONAL_PARAMS } from "../operational-params-store";

describe("TokenOptimizer Compliance & Business Rules (Carlos Formigari Directives)", () => {
  const dummyContext = {
    nfsBalance: 1196,
    cppResgateBrl: 0.01,
    userCategory: "atleta",
    user: {
      id: "usr-carlos",
      fullName: "Carlos Formigari",
      email: "carlos@example.com",
      referralCode: "CARLOS2026",
      referralsCount: 3,
      transactionsCount: 12,
      plan: "free",
      isClubMember: false,
    },
    params: DEFAULT_OPERATIONAL_PARAMS,
  };

  it("1. 'O que ganho aqui?' deve distinguir Atleta Free vs Clube Netfits sem cotação em reais", () => {
    const res = tokenOptimizer.evaluateQuery("O que ganho aqui?", dummyContext);
    expect(res.handled).toBe(true);

    // Deve conter divisão clara entre Cadastro Gratuito e Clube Netfits
    expect(res.text).toContain("No Cadastro Gratuito (Atleta Free):");
    expect(res.text).toContain("No Clube Netfits (Assinatura de R$ 19,90/mês");

    // Deve conter benefícios do plano gratuito
    expect(res.text).toContain("+50 nfs");
    expect(res.text).toContain("Quizzes pedagógicos");
    expect(res.text).toContain("4 nfs por R$ 1,00 gasto");

    // Deve conter benefícios exclusivos do Clube Netfits
    expect(res.text).toContain("250 nfs garantidos todo mês");
    expect(res.text).toContain("+20 nfs por treino validado");
    expect(res.text).toContain("4,8 nfs por R$ 1,00 gasto");

    // PROIBIDO: NUNCA citar R$ 0,01 ou 100 nfs = R$ 1,00 ou saldo em R$
    expect(res.text).not.toContain("R$ 0,01");
    expect(res.text).not.toContain("100 nfs = R$ 1,00");
    expect(res.text).not.toContain("100 nfs equivalem a R$ 1,00");
    expect(res.text).not.toContain("R$ 11,96");
  });

  it("2. Consulta sobre treinos e wearables deve reforçar exclusividade do Clube Netfits", () => {
    const res = tokenOptimizer.evaluateQuery("Quantos pontos ganho por treino com meu Garmin?", dummyContext);
    expect(res.handled).toBe(true);
    expect(res.text).toContain("exclusivo para assinantes do Clube Netfits");
    expect(res.text).toContain("+20 nfs por treino validado");
    expect(res.route).toBe("/club");

    // Nenhuma paridade fixa
    expect(res.text).not.toContain("R$ 0,01");
    expect(res.text).not.toContain("100 nfs = R$ 1,00");
  });

  it("3. Consulta sobre Feed deve especificar Quizzes pedagógicos e 0 nfs na leitura simples", () => {
    const res = tokenOptimizer.evaluateQuery("Como ganhar pontos lendo artigos no feed?", dummyContext);
    expect(res.handled).toBe(true);
    expect(res.text).toContain("Quizzes Pedagógicos de Fixação");
    expect(res.text).toContain("+5 nfs");
    expect(res.text).toContain("+10 nfs");
    expect(res.text).toContain("não gera pontos diretamente");
    expect(res.text).not.toContain("+10 nfs por leitura de post");
  });

  it("4. Consulta sobre Clube Netfits deve listar os 4 pilares oficiais", () => {
    const res = tokenOptimizer.evaluateQuery("Quais os benefícios do Clube Netfits?", dummyContext);
    expect(res.handled).toBe(true);
    expect(res.text).toContain("250 nfs garantidos todo mês");
    expect(res.text).toContain("+20 nfs por treino");
    expect(res.text).toContain("4,8 nfs por R$ 1,00 gasto");
    expect(res.text).toContain("comissão em pontos");
    expect(res.route).toBe("/club");
  });

  it("5. Fallback para perguntas não mapeadas não deve conter saldo em R$ nem 100 nfs = R$ 1,00", () => {
    const res = tokenOptimizer.evaluateQuery("Pergunta aleatória sobre o futuro da longevidade", dummyContext);
    expect(res.handled).toBe(false);
    expect(res.text).toContain("1.196 nfs");
    expect(res.text).toContain("Clube Netfits");

    // Verifica remoção de conversão em dinheiro
    expect(res.text).not.toContain("R$ 11,96");
    expect(res.text).not.toContain("100 nfs equivalem a R$ 1,00");
    expect(res.text).not.toContain("lendo artigos no Feed (+10 nfs)");
  });

  it("6. Todas as respostas determinísticas devem estar livres de 'R$ 0,01' e '100 nfs = R$ 1,00'", () => {
    const testQueries = [
      "Qual meu saldo?",
      "Quanto vale 1 nfs?",
      "Quero comprar um tênis no shop",
      "Como assinar o clube?",
      "Posso treinar na esteira?",
      "Como indicar um amigo?",
      "O que tem no feed?",
      "Quem é a Dra Isabella?",
      "Quando vencem meus pontos?",
      "Como funciona a biometria?",
      "O que ganho aqui?",
    ];

    for (const q of testQueries) {
      const response = tokenOptimizer.evaluateQuery(q, dummyContext);
      expect(response.text).not.toContain("R$ 0,01");
      expect(response.text).not.toContain("100 nfs = R$ 1,00");
      expect(response.text).not.toContain("100 nfs equivalem a R$ 1,00");
      expect(response.text).not.toContain("R$ 11,96");
    }
  });
});
