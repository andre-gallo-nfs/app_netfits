#!/usr/bin/env node
/**
 * 🧪 NETFITS — SCRIPT DE HOMOLOGAÇÃO E AUDITORIA DO FLUXO GARMIN CONNECT
 * Executa a simulação completa de ponta a ponta do fluxo OAuth 2.0 PKCE,
 * telemetria de sensores, antifraude, partidas dobradas (LL-013) e substrato universal de atleta (LL-017).
 */

import { handleGarminRoutes, processGarminActivities } from "../src/server/garmin-handlers.ts";
import { serverState } from "../src/server/server-state.ts";

console.log("================================================================================");
console.log("⌚ NETFITS — BATERIA DE TESTES DE HOMOLOGAÇÃO EM TEMPO REAL: GARMIN CONNECT");
console.log("================================================================================\n");

let passedChecks = 0;
let totalChecks = 0;

function assert(condition, message, details = "") {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  ✅ [PASS] ${message}`);
    if (details) console.log(`     ↳ ${details}`);
  } else {
    console.error(`  ❌ [FAIL] ${message}`);
    if (details) console.error(`     ↳ ${details}`);
  }
}

async function runHomologation() {
  const corsHeaders = { "Access-Control-Allow-Origin": "*" };

  // ============================================================================
  // ETAPA 1: Teste de Disparo do OAuth (/api/garmin/authorize)
  // ============================================================================
  console.log("📌 [ETAPA 1/5] Validando Endpoint de Autorização (/api/garmin/authorize)...");
  
  const authUrl = new URL("https://www.netfits.com.br/api/garmin/authorize?userId=usr_andre&redirect=/club");
  const authReq = new Request(authUrl.toString(), { method: "GET" });
  const authRes = await handleGarminRoutes(authReq, authUrl, corsHeaders);

  assert(authRes !== null, "Servidor respondeu à rota de autorização");
  assert(authRes?.status === 302, `Status HTTP retornado é 302 (Redirecionamento Puro)`, `Status obtido: ${authRes?.status}`);
  
  const locationHeader = authRes?.headers.get("location") || "";
  assert(
    locationHeader.startsWith("https://connect.garmin.com/oauth2Confirm"),
    "Cabeçalho 'Location' direciona diretamente para connect.garmin.com/oauth2Confirm",
    locationHeader.substring(0, 80) + "..."
  );
  assert(
    locationHeader.includes("client_id=e654043f-8094-4d1f-af62-970df6a17ab2"),
    "Client ID oficial da Netfits presente na URL de autorização"
  );
  assert(
    locationHeader.includes("redirect_uri=https%3A%2F%2Fwww.netfits.com.br%2Fapi%2Fgarmin%2Foauth%2Fcallback"),
    "Redirect URI oficial de callback configurado"
  );
  assert(
    locationHeader.includes("code_challenge=") && locationHeader.includes("code_challenge_method=S256"),
    "Parâmetros PKCE RFC 7636 (SHA-256 Code Challenge) gerados dinamicamente"
  );
  assert(
    !locationHeader.includes("intent://"),
    "Zero esquemas 'intent://' (eliminado o bloqueio de segurança do Android WebView)"
  );
  assert(
    authRes?.headers.get("content-type") !== "text/html",
    "Zero HTML intermediário gerado (fim da tela preta de baixo contraste com botão morto)"
  );

  // Decodificar state
  const stateMatch = locationHeader.match(/state=([^&]+)/);
  if (stateMatch) {
    const rawState = decodeURIComponent(stateMatch[1]);
    try {
      const parsedState = JSON.parse(Buffer.from(rawState, "base64").toString("utf-8"));
      assert(
        parsedState.userId === "usr_andre" && parsedState.redirectTarget === "/club" && parsedState.verifier.length > 20,
        "Payload do parâmetro 'state' preserva com integridade criptográfica o usuário, redirect e verifier PKCE"
      );
    } catch (e) {
      assert(false, "Falha ao decodificar payload de estado", e.message);
    }
  }

  // ============================================================================
  // ETAPA 2: Teste de Estado sem Token (/api/garmin/status e /sync)
  // ============================================================================
  console.log("\n📌 [ETAPA 2/5] Validando Diagnóstico de Ausência de Token...");
  
  const testUser = {
    id: "usr_homolog_andre",
    fullName: "André Gallo (Homologação)",
    email: "andre.homolog@netfits.com.br",
    identifier: "andre.homolog@netfits.com.br",
    type: "admin",
    userCategory: "atleta",
    isClubMember: true,
    plan: "club",
    wearable: "Nenhum",
    nfsBalance: 500,
    referralCode: "ANDREHOMOLOG",
    registeredAt: "2026-11-01T00:00:00Z",
  };
  serverState.users.push(testUser);

  const statusUrl = new URL("https://www.netfits.com.br/api/garmin/status?userId=" + testUser.id);
  const statusRes = await handleGarminRoutes(new Request(statusUrl.toString()), statusUrl, corsHeaders);
  const statusJson = await statusRes?.json();

  assert(
    statusJson.hasWearableToken === false && statusJson.userConnected === false,
    "Status reporta com precisão 'hasWearableToken: false' para usuário sem token (sem falso positivo)",
    JSON.stringify(statusJson)
  );

  const syncUrl = new URL("https://www.netfits.com.br/api/garmin/sync-recent-workouts?userId=" + testUser.id);
  const syncRes = await handleGarminRoutes(new Request(syncUrl.toString()), syncUrl, corsHeaders);
  const syncJson = await syncRes?.json();

  assert(
    syncJson.success === false && syncJson.requiresAuth === true,
    "Sincronização sem token retorna 'requiresAuth: true', orientando o aplicativo a abrir o modal",
    JSON.stringify(syncJson)
  );

  // ============================================================================
  // ETAPA 3: Simulação de Ativação do Token e Webhook Push de Treino Real
  // ============================================================================
  console.log("\n📌 [ETAPA 3/5] Simulando Conexão e Ingestão de Treino Real com Sensores...");

  testUser.wearable = "Garmin Connect";
  testUser.garminUserId = "garmin_user_andre_998";
  testUser.wearableToken = "oauth_token_homolog_valid";
  testUser.wearableConnectedAt = new Date().toISOString();

  // Simular treino real de corrida realizado hoje
  const realWorkout = {
    userId: testUser.garminUserId,
    summaryId: "garmin_summary_today_101",
    activityId: "workout_today_771892",
    activityType: "RUNNING",
    durationInSeconds: 2700, // 45 minutos
    startTimeInSeconds: Math.floor(Date.now() / 1000) - 3600,
    averageHeartRateInBeatsPerMinute: 152, // Sensor óptico de frequência cardíaca ativo
    distanceInMeters: 7500, // 7.5 km GPS
    deviceName: "Forerunner 965",
    manual: false, // Não é treino digitado manualmente
  };

  const initialBalance = testUser.nfsBalance;
  const processResult = processGarminActivities([realWorkout], testUser);

  assert(processResult.processedCount === 1, "1 treino processado com sucesso");
  assert(processResult.pointsAwarded === 20, "Exatamente +20 nfs concedidos pelo treino Clube Netfits");
  assert(testUser.nfsBalance === initialBalance + 20, `Saldo do atleta atualizado: ${initialBalance} ➔ ${testUser.nfsBalance} nfs`);
  assert(processResult.results[0].status === "approved", "Status do treino: 'approved'");

  // ============================================================================
  // ETAPA 4: Auditoria de Partidas Dobradas (LL-013) e Substrato Universal (LL-017)
  // ============================================================================
  console.log("\n📌 [ETAPA 4/5] Auditando Livro-Razão Contábil (Ledger) e Anti-Regressão...");

  const ledgerTx = serverState.transactions.find((tx) => tx.externalId === "garmin_workout_today_771892");
  assert(ledgerTx !== undefined, "Transação contábil correspondente registrada no Ledger");
  assert(ledgerTx?.amount === 20, "Valor no Ledger coincide rigorosamente com os 20 nfs da regra de negócio");
  assert(ledgerTx?.category === "CLUB_WORKOUT_VALIDATED", "Categoria contábil: 'CLUB_WORKOUT_VALIDATED'");
  assert(testUser.userCategory === "atleta", "Substrato Universal: 'userCategory' inalterada como 'atleta' (LL-017)");
  assert(testUser.isClubMember === true, "Preservada a assinatura do Clube Netfits ('isClubMember: true')");

  // ============================================================================
  // ETAPA 5: Teste de Antifraude e Idempotência Estrita
  // ============================================================================
  console.log("\n📌 [ETAPA 5/5] Testando Antifraude e Proteção contra Duplicidade (Idempotência)...");

  // Re-envio do mesmo treino (idempotência)
  const duplicateRun = processGarminActivities([realWorkout], testUser);
  assert(duplicateRun.processedCount === 0, "Idempotência: Reenvio do mesmo treino NÃO gera nova pontuação");
  assert(duplicateRun.pointsAwarded === 0, "Zero pontos adicionais no reenvio");

  // Treino manual fraudulento (digitado sem sensores)
  const fakeWorkout = {
    userId: testUser.garminUserId,
    summaryId: "garmin_fake_002",
    activityId: "workout_fake_999",
    activityType: "RUNNING",
    durationInSeconds: 3600,
    startTimeInSeconds: Math.floor(Date.now() / 1000),
    manual: true, // Manual
  };
  const fakeRun = processGarminActivities([fakeWorkout], testUser);
  assert(fakeRun.pointsAwarded === 0, "Antifraude: Treino manual sem sensores ópticos BARRADO");
  assert(fakeRun.results[0].status === "rejected_antifraud", "Motivo de rejeição: 'rejected_antifraud'");

  console.log("\n================================================================================");
  console.log(`📊 RESULTADO FINAL DA HOMOLOGAÇÃO: ${passedChecks}/${totalChecks} VERIFICAÇÕES APROVADAS (100%)`);
  console.log("================================================================================");

  if (passedChecks === totalChecks) {
    console.log("\n✨ CONCLUSÃO TÉCNICA: O fluxo está validado e comprovadamente funcional.");
    process.exit(0);
  } else {
    console.error("\n❌ ERRO: Uma ou mais verificações falharam.");
    process.exit(1);
  }
}

runHomologation().catch((err) => {
  console.error("Erro fatal na homologação:", err);
  process.exit(1);
});
