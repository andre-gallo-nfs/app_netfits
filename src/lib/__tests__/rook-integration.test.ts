import { describe, it, expect, beforeEach } from "vitest";
import {
  processRookData,
  handleRookRoutes,
  verifyRookHmac,
  type RookPhysicalSummaryPayload,
} from "../../server/rook-handlers";
import { serverState } from "../../server/server-state";
import type { SandboxUser } from "../shared-sandbox-store";

describe("🦅 ROOK Connect Integration & Telemetry Tests", () => {
  let athleteUser: SandboxUser;

  beforeEach(() => {
    athleteUser = {
      id: "usr_athlete_rook_test",
      fullName: "Atleta ROOK Teste",
      email: "rook@netfits.com.br",
      identifier: "rook@netfits.com.br",
      type: "athlete",
      userCategory: "atleta",
      isClubMember: true,
      plan: "club",
      wearable: "Apple Watch (ROOK)",
      wearableToken: "rook_token_123",
      nfsBalance: 150,
      referralCode: "ROOK10",
      registeredAt: "2026-11-01T00:00:00Z",
    };

    const idx = serverState.users.findIndex((u) => u.id === athleteUser.id);
    if (idx >= 0) {
      serverState.users[idx] = athleteUser;
    } else {
      serverState.users.push(athleteUser);
    }

    serverState.transactions = serverState.transactions.filter(
      (tx) => !tx.userId?.includes("usr_athlete_rook_test")
    );
  });

  it("deve responder 200 no diagnóstico de status da ROOK", async () => {
    const req = new Request("https://www.netfits.com.br/api/rook/status", { method: "GET" });
    const url = new URL(req.url);
    const res = await handleRookRoutes(req, url, serverState.getCorsHeaders());

    expect(res).not.toBeNull();
    expect(res!.status).toBe(200);
    const data = await res!.json();
    expect(data.provider).toBe("ROOK Connect (tryrook.io)");
    expect(data.status).toBe("ready");
    expect(data.capacitorSdk).toContain("capacitor-rook-sdk");
  });

  it("deve responder 200 com sucesso no handshake/ping do portal ROOK (sem header de autorização)", async () => {
    const req = new Request("https://www.netfits.com.br/api/webhooks/rook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event: "ping", timestamp: Date.now() }),
    });
    const url = new URL(req.url);
    const res = await handleRookRoutes(req, url, serverState.getCorsHeaders());

    expect(res).not.toBeNull();
    expect(res!.status).toBe(200);
    const data = await res!.json();
    expect(data.received).toBe(true);
    expect(data.status).toBe("ready");
  });

  it("deve validar assinatura HMAC-SHA256 para requisições seguras", async () => {
    const rawBody = JSON.stringify({ test: "data" });
    const isValid = await verifyRookHmac(rawBody, "any_hash", "rook_secret_key_sample");
    expect(isValid).toBe(true);
  });

  it("deve processar webhook de physical_summary válido (Apple Watch com 45min e FC), creditando 20 nfs no ledger", async () => {
    const initialBalance = athleteUser.nfsBalance || 0;
    const payload: RookPhysicalSummaryPayload = {
      user_id: athleteUser.id,
      client_uuid: "test_client",
      version: 2,
      document_version: 1001,
      data_structure: "physical_summary",
      physical_health: {
        summary: {
          physical_summary: {
            metadata: {
              sources_of_data_array: ["Apple Health - Apple Watch Series 9"],
            },
            activity: {
              active_seconds_int: 2700, // 45 minutos
            },
            distance: {
              walked_distance_meters_float: 5400,
              steps_int: 7200,
            },
            calories_net_active_kcal_float: 420,
            hr_avg_bpm_int: 146,
            hr_maximum_bpm_int: 172,
          },
        },
      },
    };

    const result = processRookData(payload, athleteUser);
    expect(result.success).toBe(true);
    expect(result.pointsAwarded).toBe(20);
    expect(athleteUser.nfsBalance).toBe(initialBalance + 20);

    const tx = serverState.transactions.find((t) => t.externalId?.includes("rook_usr_athlete_rook_test_1001"));
    expect(tx).toBeDefined();
    expect(tx?.amount).toBe(20);
    expect(tx?.source).toBe("ROOK_CONNECT");
    expect(tx?.description).toContain("45 min");
    expect(tx?.description).toContain("146 bpm");
  });

  it("deve barrar treinos com duração inferior a 15 minutos (motor antifraude)", () => {
    const initialBalance = athleteUser.nfsBalance || 0;
    const payload: RookPhysicalSummaryPayload = {
      user_id: athleteUser.id,
      document_version: 1002,
      data_structure: "physical_summary",
      physical_health: {
        summary: {
          physical_summary: {
            activity: {
              active_seconds_int: 300, // Apenas 5 minutos
            },
            hr_avg_bpm_int: 110,
          },
        },
      },
    };

    const result = processRookData(payload, athleteUser);
    expect(result.success).toBe(true);
    expect(result.pointsAwarded).toBe(0);
    expect(athleteUser.nfsBalance).toBe(initialBalance);
  });

  it("não deve creditar em duplicidade para o mesmo document_version (idempotência)", () => {
    const payload: RookPhysicalSummaryPayload = {
      user_id: athleteUser.id,
      document_version: 1003,
      physical_health: {
        summary: {
          physical_summary: {
            activity: { active_seconds_int: 1800 },
            hr_avg_bpm_int: 140,
          },
        },
      },
    };

    const res1 = processRookData(payload, athleteUser);
    expect(res1.pointsAwarded).toBe(20);

    const res2 = processRookData(payload, athleteUser);
    expect(res2.pointsAwarded).toBe(0);
    expect(res2.reason).toContain("já processado");
  });
});
