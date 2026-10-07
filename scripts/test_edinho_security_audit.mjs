// scripts/test_edinho_security_audit.mjs
import serverHandler from "../src/server.ts";
import { timingSafeEqualString } from "../src/lib/persistent-orders-store.ts";

async function runSecurityAudit() {
  console.log("================================================================================");
  console.log(" TESTE DE AUDITORIA DE SEGURANÇA E VALIDAÇÃO TIMING-SAFE DO /api/orders");
  console.log(" Especificação: Edinho / Rock Encantech (07/10/2026)");
  console.log("================================================================================");

  // 1. Teste de comparação de tempo constante em baixo nível
  console.log("\n[TESTE 1] Motor Criptográfico timingSafeEqualString:");
  const cmp1 = timingSafeEqualString("sec_nfs_mkplace_default_2026", "sec_nfs_mkplace_default_2026");
  const cmp2 = timingSafeEqualString("chave-invalida-teste", "sec_nfs_mkplace_default_2026");
  const cmp3 = timingSafeEqualString("a", "sec_nfs_mkplace_default_2026");
  const cmp4 = timingSafeEqualString("qualquer", "sec_nfs_mkplace_default_2026");
  console.log(`- Chave correta == correta: ${cmp1} (esperado: true)`);
  console.log(`- Chave errada 1 == correta: ${cmp2} (esperado: false)`);
  console.log(`- Chave curta == correta: ${cmp3} (esperado: false)`);
  console.log(`- Chave qualquer == correta: ${cmp4} (esperado: false)`);
  if (!cmp1 || cmp2 || cmp3 || cmp4) {
    throw new Error("Falha no teste criptográfico timingSafeEqualString!");
  }
  console.log("✅ APROVADO: timingSafeEqualString funciona com precisão constante.");

  // Casos de teste de segurança no GET
  const getCases = [
    { name: "GET sem header de autenticação", headers: {}, expectedStatus: 401 },
    { name: "GET com x-api-key: a (curta)", headers: { "x-api-key": "a" }, expectedStatus: 401 },
    { name: "GET com x-api-key: chave-invalida-teste", headers: { "x-api-key": "chave-invalida-teste" }, expectedStatus: 401 },
    { name: "GET com Authorization: Bearer qualquer", headers: { "Authorization": "Bearer qualquer" }, expectedStatus: 401 },
    { name: "GET com Authorization: ApiKey qualquer", headers: { "Authorization": "ApiKey qualquer" }, expectedStatus: 401 },
    { name: "GET com x-api-key oficial (sec_nfs_mkplace_default_2026)", headers: { "x-api-key": "sec_nfs_mkplace_default_2026" }, expectedStatus: 200 },
  ];

  console.log("\n[TESTE 2] Casos de Aceite de Autenticação no GET /api/orders:");
  for (const tc of getCases) {
    const req = new Request("https://www.netfits.com.br/api/orders", {
      method: "GET",
      headers: tc.headers,
    });
    const res = await serverHandler.fetch(req);
    const data = await res.json();
    console.log(`- ${tc.name} -> HTTP ${res.status} (Esperado: ${tc.expectedStatus})`);
    if (res.status !== tc.expectedStatus) {
      throw new Error(`Falha no caso '${tc.name}': esperado ${tc.expectedStatus}, recebido ${res.status}`);
    }
    if (res.status === 401 && (data.recentOrders || data.status === "ready")) {
      throw new Error(`Falha de segurança: 401 vazou dados em '${tc.name}'!`);
    }
    if (res.status === 200) {
      if (!Array.isArray(data.recentOrders)) {
        throw new Error(`Resposta 200 não contém recentOrders válido`);
      }
      if (!data.acceptedAuth || data.acceptedAuth.includes("qualquer")) {
        throw new Error(`acceptedAuth inválido`);
      }
      console.log(`  acceptedAuth: ${JSON.stringify(data.acceptedAuth)} | totalOrders: ${data.totalOrdersReceived}`);
    }
  }
  console.log("✅ APROVADO: Todos os casos de GET passaram com sucesso estrito (401 para chave inválida, 200 para correta).");

  // Casos de teste de segurança no POST
  const dummyPayload = JSON.stringify({
    _id: "TEST_SECURITY_ORDER",
    status: "PAID",
    summary: { total: 10, finalPrice: 10 }
  });

  const postCases = [
    { name: "POST sem header de autenticação", headers: { "Content-Type": "application/json" }, expectedStatus: 401 },
    { name: "POST com x-api-key: a", headers: { "Content-Type": "application/json", "x-api-key": "a" }, expectedStatus: 401 },
    { name: "POST com x-api-key: chave-invalida-teste", headers: { "Content-Type": "application/json", "x-api-key": "chave-invalida-teste" }, expectedStatus: 401 },
    { name: "POST com Authorization: Bearer qualquer", headers: { "Content-Type": "application/json", "Authorization": "Bearer qualquer" }, expectedStatus: 401 },
    { name: "POST com Authorization: ApiKey qualquer", headers: { "Content-Type": "application/json", "Authorization": "ApiKey qualquer" }, expectedStatus: 401 },
  ];

  console.log("\n[TESTE 3] Casos de Aceite de Autenticação no POST /api/orders (Rejeição Estrita):");
  for (const tc of postCases) {
    const req = new Request("https://www.netfits.com.br/api/orders", {
      method: "POST",
      headers: tc.headers,
      body: dummyPayload,
    });
    const res = await serverHandler.fetch(req);
    const data = await res.json();
    console.log(`- ${tc.name} -> HTTP ${res.status} (Esperado: ${tc.expectedStatus})`);
    if (res.status !== tc.expectedStatus) {
      throw new Error(`Falha no caso '${tc.name}': esperado ${tc.expectedStatus}, recebido ${res.status}`);
    }
    if (data.status === "received" || data.persisted === true) {
      throw new Error(`Falha de segurança: POST não autenticado processou pedido em '${tc.name}'!`);
    }
  }
  console.log("✅ APROVADO: POST bloqueia estritamente qualquer chave inválida com 401.");

  console.log("\n[TESTE 4] Caso de Aceite no POST com Chave Correta Oficial:");
  const validPostReq = new Request("https://www.netfits.com.br/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "sec_nfs_mkplace_default_2026",
    },
    body: JSON.stringify({
      _id: "SOP0711045469",
      orderRef: "SOP0711045469",
      type: "ORDER",
      status: "PAID",
      paymentStatus: "PAID",
      storeId: "RhOFkbZJIN",
      summary: { items: 1, total: 109.9, finalPrice: 129.11, points: { amount: 50, currencyAmount: 0.5 } },
      customer: { ref: "user-1791370530242", name: "Cristiane Ferreira Formigari", email: "cristiane.formigari@amantikira.com.br" },
    }),
  });
  const validPostRes = await serverHandler.fetch(validPostReq);
  const validPostData = await validPostRes.json();
  console.log(`- POST com chave oficial -> HTTP ${validPostRes.status} (Esperado: 200)`);
  console.log(`  Resposta: success=${validPostData.success}, _id=${validPostData._id}, status=${validPostData.status}, isReplay=${validPostData.isReplay}`);
  if (validPostRes.status !== 200 || !validPostData.success) {
    throw new Error(`POST com chave oficial falhou! Status: ${validPostRes.status}`);
  }
  console.log("✅ APROVADO: POST com chave oficial autoriza e responde 200 com sucesso.");

  console.log("\n================================================================================");
  console.log(" TODOS OS TESTES DE AUDITORIA DE SEGURANÇA FORAM APROVADOS COM 100% DE SUCESSO!");
  console.log("================================================================================");
}

runSecurityAudit().catch((err) => {
  console.error("ERRO NA AUDITORIA:", err);
  process.exit(1);
});
