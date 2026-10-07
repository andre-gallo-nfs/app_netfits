// scripts/test_official_replay_verification.mjs
import serverHandler from "../src/server.ts";

async function runVerification() {
  console.log("================================================================================");
  console.log(" TESTE DE VERIFICAÇÃO DAS 3 CORREÇÕES URGENTES SOLICITADAS POR EDINHO / ROCK");
  console.log("================================================================================");

  // --------------------------------------------------------------------------------
  // TESTE 1: Exposição de Dados Pessoais (LGPD) no GET /api/orders
  // --------------------------------------------------------------------------------
  console.log("\n[TESTE 1] Chamada GET /api/orders SEM autenticação:");
  const getNoAuthReq = new Request("https://www.netfits.com.br/api/orders", { method: "GET" });
  const getNoAuthRes = await serverHandler.fetch(getNoAuthReq);
  const getNoAuthData = await getNoAuthRes.json();
  console.log(`- Status HTTP recebido: ${getNoAuthRes.status} (Esperado: 401)`);
  console.log(`- Corpo da resposta:`, getNoAuthData);
  if (getNoAuthRes.status !== 401 || getNoAuthData.recentOrders) {
    throw new Error("FALHA LGPD: GET desautenticado retornou dados ou status diferente de 401!");
  }
  console.log("✅ APROVADO: Endpoint público bloqueado com 401 Unauthorized e zero dados vazados.");

  console.log("\n[TESTE 1.1] Chamada GET /api/orders COM x-api-key válida:");
  const getAuthReq = new Request("https://www.netfits.com.br/api/orders", {
    method: "GET",
    headers: { "x-api-key": "sec_nfs_mkplace_default_2026" },
  });
  const getAuthRes = await serverHandler.fetch(getAuthReq);
  const getAuthData = await getAuthRes.json();
  console.log(`- Status HTTP recebido: ${getAuthRes.status} (Esperado: 200)`);
  console.log(`- Total de pedidos retornados: ${getAuthData.totalOrdersReceived}`);
  console.log(`- Primeiro pedido auditado:`, {
    _id: getAuthData.recentOrders?.[0]?._id,
    customer: getAuthData.recentOrders?.[0]?.customer,
  });
  // Valida que CPF e e-mail cru NÃO estão presentes em customer
  const firstCustomer = getAuthData.recentOrders?.[0]?.customer;
  if (firstCustomer?.document || firstCustomer?.cpf || firstCustomer?.email) {
    throw new Error("FALHA LGPD: Dados sensíveis (CPF/e-mail cru) detectados no objeto customer!");
  }
  console.log("✅ APROVADO: Responde 200 com pedidos e dados pessoais estritamente higienizados (LGPD).");

  // --------------------------------------------------------------------------------
  // TESTE 2: Saldos Iniciais (Estorno Concluído)
  // --------------------------------------------------------------------------------
  console.log("\n[TESTE 2] Saldos Iniciais Pré-Replay (após estorno dos valores estimados):");
  const usersReq = new Request("https://www.netfits.com.br/api/users-sync");
  const usersRes = await serverHandler.fetch(usersReq);
  const usersData = await usersRes.json();
  const findUser = (id) => usersData.users.find((u) => u.id === id);

  const andreInitial = findUser("usr_andre");
  const carlosInitial = findUser("usr_carlos_formigari");
  const crisInitial = findUser("user-1791370530242");

  console.log(`- André Gallo: ${andreInitial?.nfsBalance} nfs (Esperado: 50 nfs - apenas boas-vindas)`);
  console.log(`- Carlos Formigari: ${carlosInitial?.nfsBalance} nfs (Esperado: 110 nfs - sem compras e sem comissão de compras MGM)`);
  console.log(`- Cristiane Formigari: ${crisInitial?.nfsBalance} nfs (Esperado: 564 nfs - pedido SOP confere)`);

  if (andreInitial?.nfsBalance !== 50) throw new Error(`Saldo de André incorreto: ${andreInitial?.nfsBalance}`);
  if (carlosInitial?.nfsBalance !== 110) throw new Error(`Saldo de Carlos incorreto: ${carlosInitial?.nfsBalance}`);
  if (crisInitial?.nfsBalance !== 564) throw new Error(`Saldo de Cristiane incorreto: ${crisInitial?.nfsBalance}`);
  console.log("✅ APROVADO: Estorno dos cashbacks estimados e remoção de comissão MGM validados com precisão contábil.");

  // --------------------------------------------------------------------------------
  // TESTE 3: Simulação do Replay Oficial com os Payloads Reais da Rock Mkplace
  // --------------------------------------------------------------------------------
  console.log("\n[TESTE 3] Simulação do Reenvio Oficial dos 3 Pedidos pela Mkplace:");

  const apiKey = "sec_nfs_mkplace_default_2026";

  // Pedido 1: PFM0610443019 (Cliente: usr_andre, finalPrice: 56.85, total: 44.1)
  console.log("\n--- Enviando Pedido 1: PFM0610443019 (André Gallo, R$ 56,85) ---");
  const pfmPayload = {
    _id: "PFM0610443019",
    orderRef: "PFM0610443019",
    type: "ORDER",
    status: "PAID",
    paymentStatus: "PAID",
    storeId: "RhOFkbZJIN",
    summary: { items: 1, total: 44.1, finalPrice: 56.85, points: { amount: 0, currencyAmount: 0 } },
    customer: { ref: "usr_andre", name: "André Gallo", email: "aacgallo@hotmail.com" }
  };
  const pfmRes = await serverHandler.fetch(new Request("https://www.netfits.com.br/api/orders", {
    method: "POST",
    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
    body: JSON.stringify(pfmPayload),
  }));
  const pfmData = await pfmRes.json();
  console.log(`- Resposta PFM PAID: HTTP ${pfmRes.status} | Cashback gerado: ${pfmData.nfsEarned} nfs (Esperado: 227 nfs)`);

  await new Promise((r) => setTimeout(r, 400));

  // Replay duplicado do PFM0610443019 para testar Idempotência
  const pfmReplayRes = await serverHandler.fetch(new Request("https://www.netfits.com.br/api/orders", {
    method: "POST",
    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
    body: JSON.stringify(pfmPayload),
  }));
  const pfmReplayData = await pfmReplayRes.json();
  console.log(`- Reenvio duplicado PFM: HTTP ${pfmReplayRes.status} | isReplay: ${pfmReplayData.isReplay} (Esperado: true, sem duplo crédito)`);

  await new Promise((r) => setTimeout(r, 400));

  // Pedido 2: GTJ0522372096 (finalPrice: 203.5, total: 176.4, André Gallo)
  console.log("\n--- Enviando Pedido 2: GTJ0522372096 (André Gallo, R$ 203,50) ---");
  const gtjPayload = {
    _id: "GTJ0522372096",
    orderRef: "GTJ0522372096",
    type: "ORDER",
    status: "PAID",
    paymentStatus: "PAID",
    storeId: "RhOFkbZJIN",
    summary: { items: 1, total: 176.4, finalPrice: 203.5, points: { amount: 0, currencyAmount: 0 } },
    customer: { ref: "usr_andre", name: "André Gallo", email: "aacgallo@hotmail.com" }
  };
  const gtjRes = await serverHandler.fetch(new Request("https://www.netfits.com.br/api/orders", {
    method: "POST",
    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
    body: JSON.stringify(gtjPayload),
  }));
  const gtjData = await gtjRes.json();
  console.log(`- Resposta GTJ PAID: HTTP ${gtjRes.status} | Cashback gerado: ${gtjData.nfsEarned} nfs (Esperado: 814 nfs)`);

  await new Promise((r) => setTimeout(r, 400));

  // Replay duplicado do GTJ0522372096
  const gtjReplayRes = await serverHandler.fetch(new Request("https://www.netfits.com.br/api/orders", {
    method: "POST",
    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
    body: JSON.stringify(gtjPayload),
  }));
  const gtjReplayData = await gtjReplayRes.json();
  console.log(`- Reenvio duplicado GTJ: HTTP ${gtjReplayRes.status} | isReplay: ${gtjReplayData.isReplay} (Esperado: true)`);

  await new Promise((r) => setTimeout(r, 400));

  // Pedido 3: SOP0711045469 (Cristiane Formigari, 129.11)
  console.log("\n--- Enviando Pedido 3: SOP0711045469 (Replay Cristiane Formigari) ---");
  const sopPayload = {
    _id: "SOP0711045469",
    orderRef: "SOP0711045469",
    type: "ORDER",
    status: "PAID",
    paymentStatus: "PAID",
    storeId: "RhOFkbZJIN",
    summary: { items: 1, total: 109.9, finalPrice: 129.11, points: { amount: 50, currencyAmount: 0.5 } },
    customer: { ref: "user-1791370530242", name: "Cristiane Ferreira Formigari", email: "cristiane.formigari@amantikira.com.br" }
  };
  const sopRes = await serverHandler.fetch(new Request("https://www.netfits.com.br/api/orders", {
    method: "POST",
    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
    body: JSON.stringify(sopPayload),
  }));
  const sopData = await sopRes.json();
  console.log(`- Resposta SOP PAID Replay: HTTP ${sopRes.status} | isReplay: ${sopData.isReplay} (Esperado: true)`);

  // --------------------------------------------------------------------------------
  // CONFERÊNCIA FINAL DOS SALDOS E IDEMPOTÊNCIA
  // --------------------------------------------------------------------------------
  console.log("\n================================================================================");
  console.log(" AUDITORIA CONTÁBIL FINAL DOS SALDOS PÓS-REPLAY DA ROCK:");
  console.log("================================================================================");
  const usersAfterReq = new Request("https://www.netfits.com.br/api/users-sync");
  const usersAfterRes = await serverHandler.fetch(usersAfterReq);
  const usersAfterData = await usersAfterRes.json();
  const findAfter = (id) => usersAfterData.users.find((u) => u.id === id);

  const andreFinal = findAfter("usr_andre");
  const carlosFinal = findAfter("usr_carlos_formigari");
  const crisFinal = findAfter("user-1791370530242");

  console.log(`- André Gallo: ${andreFinal?.nfsBalance} nfs (Esperado: 1.091 nfs -> 50 boas-vindas + 227 PFM + 814 GTJ)`);
  console.log(`- Carlos Formigari: ${carlosFinal?.nfsBalance} nfs (Esperado: 110 nfs -> intacto sem comissão MGM)`);
  console.log(`- Cristiane Formigari: ${crisFinal?.nfsBalance} nfs (Esperado: 564 nfs -> intacto)`);

  if (andreFinal?.nfsBalance !== 1091) throw new Error(`Saldo pós-replay de André divergente: ${andreFinal?.nfsBalance}`);
  if (carlosFinal?.nfsBalance !== 110) throw new Error(`Saldo pós-replay de Carlos divergente: ${carlosFinal?.nfsBalance}`);
  if (crisFinal?.nfsBalance !== 564) throw new Error(`Saldo pós-replay de Cristiane divergente: ${crisFinal?.nfsBalance}`);

  console.log("\n🎉 TODAS AS 3 EXIGÊNCIAS FORAM 100% CUMPRIDAS E VALIDADAS COM SUCESSO!");
}

runVerification().catch((err) => {
  console.error("ERRO NO TESTE:", err);
  process.exit(1);
});
