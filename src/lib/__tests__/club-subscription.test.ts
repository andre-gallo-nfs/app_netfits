import { describe, it, expect, beforeEach } from "vitest";
import { handleClubSubscriptionRoutes } from "../../server/club-subscription-handlers.ts";
import { serverState } from "../../server/server-state.ts";

describe("Clube Netfits Lifecycle Webhooks & Service", () => {
  beforeEach(() => {
    serverState.users = [
      {
        id: "usr_athlete_sub_1",
        email: "athlete.sub@netfits.com.br",
        cpf: "33344455566",
        fullName: "Atleta Assinatura Teste",
        nfsBalance: 200,
        userCategory: "atleta",
        isClubMember: false,
      },
    ];
    serverState.transactions = [];
  });

  it("deve ativar o Clube Netfits preservando a categoria institucional original do usuário (LL-017)", async () => {
    const payload = {
      event: "subscription.created",
      subscriptionId: "sub_live_12345",
      userId: "usr_athlete_sub_1",
      planId: "club_annual",
      planName: "Clube Netfits Anual",
      amountBrl: 358.80,
      status: "active",
      currentPeriodEnd: "2027-10-16T18:00:00Z",
    };

    const req = new Request("http://localhost/api/club/subscription-webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const res = await handleClubSubscriptionRoutes(req, new URL(req.url), {});
    expect(res).not.toBeNull();
    expect(res?.status).toBe(200);

    const data = await res?.json();
    expect(data.isClubMember).toBe(true);
    expect(data.plan).toBe("club");
    expect(data.userCategory).toBe("atleta");

    const user = serverState.users.find((u) => u.id === "usr_athlete_sub_1");
    expect(user?.isClubMember).toBe(true);
    expect(user?.plan).toBe("club");
    expect(user?.userCategory).toBe("atleta");
  });

  it("deve suspender benefícios do Clube Netfits mantendo a categoria institucional intacta (LL-017)", async () => {
    // Primeiro ativa
    const user = serverState.users.find((u) => u.id === "usr_athlete_sub_1");
    if (user) {
      user.isClubMember = true;
      user.plan = "club";
      user.userCategory = "atleta";
    }

    const payload = {
      event: "subscription.canceled",
      subscriptionId: "sub_live_12345",
      userId: "usr_athlete_sub_1",
      planId: "club_annual",
      planName: "Clube Netfits Anual",
      amountBrl: 358.80,
      status: "canceled",
      currentPeriodEnd: "2026-10-16T18:00:00Z",
    };

    const req = new Request("http://localhost/api/club/subscription-webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const res = await handleClubSubscriptionRoutes(req, new URL(req.url), {});
    expect(res?.status).toBe(200);

    const data = await res?.json();
    expect(data.isClubMember).toBe(false);
    expect(data.plan).toBe("free");
    expect(data.userCategory).toBe("atleta");

    expect(user?.isClubMember).toBe(false);
    expect(user?.plan).toBe("free");
    expect(user?.userCategory).toBe("atleta");
  });

  it("deve retornar o status de assinatura correto via endpoint /api/club/subscription-status", async () => {
    const user = serverState.users.find((u) => u.id === "usr_athlete_sub_1");
    if (user) {
      user.isClubMember = true;
      user.userCategory = "associado";
    }

    const req = new Request("http://localhost/api/club/subscription-status?userId=usr_athlete_sub_1");
    const res = await handleClubSubscriptionRoutes(req, new URL(req.url), {});
    expect(res?.status).toBe(200);

    const data = await res?.json();
    expect(data.isClubMember).toBe(true);
    expect(data.commissionRatePct).toBe(10.0);
  });
});
