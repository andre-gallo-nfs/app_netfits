import { describe, it, expect, beforeEach } from "vitest";
import {
  processGarminActivities,
  handleGarminRoutes,
  type GarminActivityItem,
} from "../../server/garmin-handlers";
import { serverState } from "../../server/server-state";
import type { SandboxUser } from "../shared-sandbox-store";

describe("🏃 Garmin Connect Frictionless Integration & Antifraud Guard (LL-017 / GEMINI.md)", () => {
  let athleteUser: SandboxUser;

  beforeEach(() => {
    // Restaurar usuário atleta para estado inicial
    athleteUser = {
      id: "usr_athlete_test",
      fullName: "Atleta Teste",
      email: "atleta@netfits.com.br",
      identifier: "atleta@netfits.com.br",
      type: "athlete",
      userCategory: "atleta",
      isClubMember: true,
      plan: "club",
      wearable: "Garmin Connect",
      garminUserId: "garmin_athlete_123",
      wearableToken: "mock_garmin_access_token",
      nfsBalance: 100,
      referralCode: "ATLETA10",
      registeredAt: "2026-11-01T00:00:00Z",
    };

    // Registrar no serverState
    const idx = serverState.users.findIndex((u) => u.id === athleteUser.id);
    if (idx >= 0) {
      serverState.users[idx] = athleteUser;
    } else {
      serverState.users.push(athleteUser);
    }

    // Limpar transações de teste
    serverState.transactions = serverState.transactions.filter(
      (tx) => !tx.userId?.includes("usr_athlete_test")
    );
  });

  it("deve homologar treino com mais de 15min e sensores ópticos, creditando exatamente 20 nfs no ledger", () => {
    const validWorkout: GarminActivityItem = {
      userId: athleteUser.garminUserId!,
      summaryId: "test_workout_001",
      activityId: "act_99901",
      activityType: "RUNNING",
      durationInSeconds: 1800, // 30 minutos
      startTimeInSeconds: Math.floor(Date.now() / 1000) - 3600,
      averageHeartRateInBeatsPerMinute: 148,
      distanceInMeters: 5200,
      deviceName: "Forerunner 965",
      manual: false,
    };

    const initialBalance = athleteUser.nfsBalance || 0;
    const { processedCount, pointsAwarded, results } = processGarminActivities(
      [validWorkout],
      athleteUser
    );

    expect(processedCount).toBe(1);
    expect(pointsAwarded).toBe(20);
    expect(athleteUser.nfsBalance).toBe(initialBalance + 20);
    expect(results[0].status).toBe("approved");

    // Verificar partidas dobradas no Ledger
    const tx = serverState.transactions.find(
      (t) => t.externalId === "garmin_act_99901"
    );
    expect(tx).toBeDefined();
    expect(tx?.amount).toBe(20);
    expect(tx?.category).toBe("CLUB_WORKOUT_VALIDATED");
    expect(tx?.source).toBe("GARMIN_CONNECT_CLOUD");

    // Substrato Universal: Categoria DEVE continuar estritamente "atleta" (LL-017)
    expect(athleteUser.userCategory).toBe("atleta");
  });

  it("deve garantir idempotência estrita: reprocessar o mesmo treino não deve duplicar pontos", () => {
    const workout: GarminActivityItem = {
      userId: athleteUser.garminUserId!,
      summaryId: "test_workout_idem",
      activityId: "act_idem_123",
      activityType: "CYCLING",
      durationInSeconds: 2400, // 40 minutos
      startTimeInSeconds: Math.floor(Date.now() / 1000) - 7200,
      averageHeartRateInBeatsPerMinute: 135,
      distanceInMeters: 18500,
      deviceName: "Edge 840",
      manual: false,
    };

    // 1ª Execução
    const firstRun = processGarminActivities([workout], athleteUser);
    expect(firstRun.processedCount).toBe(1);
    expect(firstRun.pointsAwarded).toBe(20);
    const balanceAfterFirst = athleteUser.nfsBalance;

    // 2ª Execução (mesmo activityId)
    const secondRun = processGarminActivities([workout], athleteUser);
    expect(secondRun.processedCount).toBe(0);
    expect(secondRun.pointsAwarded).toBe(0);
    expect(athleteUser.nfsBalance).toBe(balanceAfterFirst);
  });

  it("deve barrar por antifraude treinos manuais ou sem sensores ópticos/GPS comprovados", () => {
    const manualWorkout: GarminActivityItem = {
      userId: athleteUser.garminUserId!,
      summaryId: "test_workout_fake",
      activityId: "act_fake_001",
      activityType: "RUNNING",
      durationInSeconds: 3600, // 60 minutos
      startTimeInSeconds: Math.floor(Date.now() / 1000),
      manual: true, // Inserção manual
    };

    const initialBalance = athleteUser.nfsBalance || 0;
    const { processedCount, pointsAwarded, results } = processGarminActivities(
      [manualWorkout],
      athleteUser
    );

    expect(processedCount).toBe(1);
    expect(pointsAwarded).toBe(0);
    expect(athleteUser.nfsBalance).toBe(initialBalance);
    expect(results[0].status).toBe("rejected_antifraud");
  });

  it("deve responder ao status da Garmin e fornecer endpoint de sincronização sob demanda", async () => {
    const corsHeaders = { "Access-Control-Allow-Origin": "*" };

    // 1. Status da integração
    const statusUrl = new URL("https://www.netfits.com.br/api/garmin/status?userId=" + athleteUser.id);
    const statusReq = new Request(statusUrl.toString(), { method: "GET" });
    const statusRes = await handleGarminRoutes(statusReq, statusUrl, corsHeaders);

    expect(statusRes).not.toBeNull();
    expect(statusRes?.status).toBe(200);
    const statusData = await statusRes?.json();
    expect(statusData.status).toBe("ready");
    expect(statusData.userConnected).toBe(true);

    // 2. Endpoint de sync sob demanda
    const syncUrl = new URL("https://www.netfits.com.br/api/garmin/sync-recent-workouts?userId=" + athleteUser.id);
    const syncReq = new Request(syncUrl.toString(), { method: "GET" });
    const syncRes = await handleGarminRoutes(syncReq, syncUrl, corsHeaders);

    expect(syncRes).not.toBeNull();
    expect(syncRes?.status).toBe(200);
    const syncData = await syncRes?.json();
    expect(syncData.success).toBe(true);
  });

  it("deve emitir redirecionamento HTTP 302 canônico no endpoint /api/garmin/authorize sem HTML intermediário ou intent://", async () => {
    const corsHeaders = { "Access-Control-Allow-Origin": "*" };
    const authUrl = new URL("https://www.netfits.com.br/api/garmin/authorize?userId=usr_andre&redirect=/club");
    const authReq = new Request(authUrl.toString(), { method: "GET" });
    const authRes = await handleGarminRoutes(authReq, authUrl, corsHeaders);

    expect(authRes).not.toBeNull();
    // HTTP 302 - Redirecionamento Direto para o OAuth Garmin oficial
    expect(authRes?.status).toBe(302);

    const redirectLocation = authRes?.headers.get("location");
    expect(redirectLocation).toBeDefined();
    expect(redirectLocation).toContain("https://connect.garmin.com/oauth2Confirm");
    expect(redirectLocation).toContain("client_id=e654043f-8094-4d1f-af62-970df6a17ab2");
    expect(redirectLocation).toContain("code_challenge=");
    expect(redirectLocation).toContain("code_challenge_method=S256");
    expect(redirectLocation).toContain("redirect_uri=https%3A%2F%2Fwww.netfits.com.br%2Fapi%2Fgarmin%2Foauth%2Fcallback");

    // Garantir que NÃO existe HTML intermediário, nem intent:// nem botões mortos
    const contentType = authRes?.headers.get("content-type") || "";
    expect(contentType).not.toContain("text/html");
    expect(redirectLocation).not.toContain("intent://");
  });

  it("deve retornar requiresAuth: true quando o atleta tentar sincronizar sem token ativo no servidor", async () => {
    const corsHeaders = { "Access-Control-Allow-Origin": "*" };
    const userNoToken: SandboxUser = {
      id: "usr_sem_token",
      fullName: "Atleta Sem Token",
      email: "semtoken@netfits.com.br",
      identifier: "semtoken@netfits.com.br",
      type: "athlete",
      userCategory: "atleta",
      isClubMember: true,
      plan: "club",
      wearable: "Nenhum",
      nfsBalance: 50,
      referralCode: "SEMTOKEN",
      registeredAt: "2026-11-01T00:00:00Z",
    };
    serverState.users.push(userNoToken);

    // 1. Checar status
    const statusUrl = new URL("https://www.netfits.com.br/api/garmin/status?userId=" + userNoToken.id);
    const statusReq = new Request(statusUrl.toString(), { method: "GET" });
    const statusRes = await handleGarminRoutes(statusReq, statusUrl, corsHeaders);
    const statusData = await statusRes?.json();
    expect(statusData.hasWearableToken).toBe(false);
    expect(statusData.userConnected).toBe(false);

    // 2. Tentar sincronizar sem token -> deve exigir autorização explícita
    const syncUrl = new URL("https://www.netfits.com.br/api/garmin/sync-recent-workouts?userId=" + userNoToken.id);
    const syncReq = new Request(syncUrl.toString(), { method: "GET" });
    const syncRes = await handleGarminRoutes(syncReq, syncUrl, corsHeaders);
    const syncData = await syncRes?.json();
    expect(syncData.success).toBe(false);
    expect(syncData.requiresAuth).toBe(true);
  });

  it("deve consultar treinos pendentes via /api/garmin/pending-workouts e responder com estrutura válida", async () => {
    const corsHeaders = { "Access-Control-Allow-Origin": "*" };
    const pendingUrl = new URL("https://www.netfits.com.br/api/garmin/pending-workouts?userId=" + athleteUser.id);
    const pendingReq = new Request(pendingUrl.toString(), { method: "GET" });
    const pendingRes = await handleGarminRoutes(pendingReq, pendingUrl, corsHeaders);
    expect(pendingRes?.status).toBe(200);
    const pendingData = await pendingRes?.json();
    expect(pendingData.success).toBe(true);
    expect(Array.isArray(pendingData.workouts)).toBe(true);
  });

  it("deve validar e resgatar treino pendente via /api/garmin/claim-workout com idempotência e partidas dobradas", async () => {
    const corsHeaders = { "Access-Control-Allow-Origin": "*" };
    const claimUrl = new URL("https://www.netfits.com.br/api/garmin/claim-workout");
    const claimReq = new Request(claimUrl.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ workoutId: "non_existent_workout", userId: athleteUser.id }),
    });
    const claimRes = await handleGarminRoutes(claimReq, claimUrl, corsHeaders);
    expect(claimRes?.status).toBe(400);
    const claimData = await claimRes?.json();
    expect(claimData.success).toBe(false);
  });
});
