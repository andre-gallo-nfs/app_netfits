import { describe, it, expect, beforeEach } from "vitest";
import {
  processVitalWorkout,
  handleVitalRoutes,
  type VitalWebhookEvent,
} from "../../server/vital-handlers";
import {
  processStravaActivity,
  handleStravaRoutes,
  type StravaWebhookEvent,
  type StravaActivitySummary,
} from "../../server/strava-handlers";
import { serverState } from "../../server/server-state";
import type { SandboxUser } from "../shared-sandbox-store";

describe("⚡ Wearables Aggregator & Direct Integration Tests (Vital & Strava)", () => {
  let athleteUser: SandboxUser;

  beforeEach(() => {
    athleteUser = {
      id: "usr_athlete_vital_strava",
      fullName: "Atleta Wearables Test",
      email: "wearables@netfits.com.br",
      identifier: "wearables@netfits.com.br",
      type: "athlete",
      userCategory: "atleta",
      isClubMember: true,
      plan: "club",
      wearable: "Strava",
      wearableToken: "strava_athlete_998877",
      nfsBalance: 200,
      referralCode: "WEAR10",
      registeredAt: "2026-11-01T00:00:00Z",
    };

    const idx = serverState.users.findIndex((u) => u.id === athleteUser.id);
    if (idx >= 0) {
      serverState.users[idx] = athleteUser;
    } else {
      serverState.users.push(athleteUser);
    }

    serverState.transactions = serverState.transactions.filter(
      (tx) => !tx.userId?.includes("usr_athlete_vital_strava")
    );
  });

  describe("Plano A: Vital API (Junction)", () => {
    it("deve responder 200 no diagnóstico de status do conector Vital", async () => {
      const req = new Request("https://www.netfits.com.br/api/vital/status", { method: "GET" });
      const url = new URL(req.url);
      const res = await handleVitalRoutes(req, url, serverState.getCorsHeaders());

      expect(res).not.toBeNull();
      expect(res!.status).toBe(200);
      const data = await res!.json();
      expect(data.provider).toBe("Vital API (Junction)");
      expect(data.status).toBe("ready");
    });

    it("deve gerar link token para abertura do Vital Link widget em modo sandbox", async () => {
      const req = new Request("https://www.netfits.com.br/api/vital/link-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: athleteUser.id }),
      });
      const url = new URL(req.url);
      const res = await handleVitalRoutes(req, url, serverState.getCorsHeaders());

      expect(res).not.toBeNull();
      expect(res!.status).toBe(200);
      const data = await res!.json();
      expect(data.link_token).toBeDefined();
    });

    it("deve processar webhook de treino válido (>=15min com FC), creditando 20 nfs no ledger", () => {
      const initialBalance = athleteUser.nfsBalance || 0;
      const event: VitalWebhookEvent = {
        event_type: "daily.data.workout.created",
        data: {
          user_id: "vital_user_abc",
          client_user_id: athleteUser.id,
          provider: "apple",
          workout: {
            id: "vital_wkt_101",
            title: "Treino Funcional Apple Watch",
            moving_time: 1800, // 30 min
            calories: 320,
            average_heart_rate: 142,
            sport: { name: "Funcional", slug: "functional_training" },
          },
        },
      };

      const result = processVitalWorkout(event, athleteUser);
      expect(result.success).toBe(true);
      expect(result.pointsAwarded).toBe(20);
      expect(athleteUser.nfsBalance).toBe(initialBalance + 20);

      const tx = serverState.transactions.find((t) => t.externalId === "vital_vital_wkt_101");
      expect(tx).toBeDefined();
      expect(tx?.amount).toBe(20);
      expect(tx?.source).toBe("VITAL_CLOUD_API");
    });

    it("deve barrar treino com duração inferior ao mínimo exigido (antifraude)", () => {
      const initialBalance = athleteUser.nfsBalance || 0;
      const event: VitalWebhookEvent = {
        event_type: "daily.data.workout.created",
        data: {
          user_id: "vital_user_abc",
          client_user_id: athleteUser.id,
          provider: "garmin",
          workout: {
            id: "vital_wkt_short",
            moving_time: 300, // 5 min
            average_heart_rate: 130,
            sport: { name: "Caminhada Rápida" },
          },
        },
      };

      const result = processVitalWorkout(event, athleteUser);
      expect(result.success).toBe(true);
      expect(result.pointsAwarded).toBe(0);
      expect(athleteUser.nfsBalance).toBe(initialBalance);
    });
  });

  describe("Plano B: Strava API Direta", () => {
    it("deve responder 200 no diagnóstico de status do Strava", async () => {
      const req = new Request("https://www.netfits.com.br/api/strava/status", { method: "GET" });
      const url = new URL(req.url);
      const res = await handleStravaRoutes(req, url, serverState.getCorsHeaders());

      expect(res).not.toBeNull();
      expect(res!.status).toBe(200);
      const data = await res!.json();
      expect(data.provider).toBe("Strava API (Direct)");
      expect(data.status).toBe("ready");
    });

    it("deve responder com sucesso ao handshake de subscrição de webhook do Strava (hub.challenge)", async () => {
      const challengeToken = "strava_challenge_random_123456";
      const req = new Request(
        `https://www.netfits.com.br/api/webhooks/strava?hub.mode=subscribe&hub.challenge=${challengeToken}&hub.verify_token=netfits_strava_webhook_secret_token`,
        { method: "GET" }
      );
      const url = new URL(req.url);
      const res = await handleStravaRoutes(req, url, serverState.getCorsHeaders());

      expect(res).not.toBeNull();
      expect(res!.status).toBe(200);
      const data = await res!.json();
      expect(data["hub.challenge"]).toBe(challengeToken);
    });

    it("deve rejeitar handshake com verify_token incorreto", async () => {
      const req = new Request(
        `https://www.netfits.com.br/api/webhooks/strava?hub.mode=subscribe&hub.challenge=test&hub.verify_token=token_invalido`,
        { method: "GET" }
      );
      const url = new URL(req.url);
      const res = await handleStravaRoutes(req, url, serverState.getCorsHeaders());

      expect(res).not.toBeNull();
      expect(res!.status).toBe(403);
    });

    it("deve processar atividade do Strava válida e creditar 20 nfs no ledger", () => {
      const initialBalance = athleteUser.nfsBalance || 0;
      const activity: StravaActivitySummary = {
        id: 77665544,
        name: "Corrida na Lagoa do Taquaral",
        distance: 6000,
        moving_time: 2100, // 35 min
        elapsed_time: 2150,
        total_elevation_gain: 40,
        type: "Run",
        start_date: new Date().toISOString(),
        has_heartrate: true,
        average_heartrate: 155,
        manual: false,
      };

      const result = processStravaActivity(activity, 998877, athleteUser);
      expect(result.success).toBe(true);
      expect(result.pointsAwarded).toBe(20);
      expect(athleteUser.nfsBalance).toBe(initialBalance + 20);

      const tx = serverState.transactions.find((t) => t.externalId === "strava_77665544");
      expect(tx).toBeDefined();
      expect(tx?.amount).toBe(20);
      expect(tx?.source).toBe("STRAVA_API_DIRECT");
    });
  });
});
