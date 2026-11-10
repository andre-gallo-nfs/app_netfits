import { describe, it, expect, beforeEach } from "vitest";
import { handleClubSubscriptionRoutes } from "../../server/club-subscription-handlers.ts";
import { realTimeLedgerSentinel } from "../../server/ledger-sentinel.ts";
import { serverState } from "../../server/server-state.ts";

describe("LL-017: Orthogonal User Roles & Universal Athlete Substrate Guard", () => {
  beforeEach(() => {
    serverState.users = [
      {
        id: "usr_athlete_1",
        email: "atleta@netfits.com.br",
        cpf: "11122233344",
        fullName: "Corredor Amador",
        nfsBalance: 100,
        userCategory: "atleta",
        isClubMember: false,
        plan: "free",
        wearable: "Garmin Forerunner",
      },
      {
        id: "usr_andre",
        email: "aacgallo@hotmail.com",
        cpf: "25664730803",
        fullName: "André Gallo (CEO & Atleta)",
        nfsBalance: 461,
        userCategory: "atleta",
        isClubMember: false,
        plan: "free",
        wearable: "Garmin Connect",
      },
      {
        id: "usr_treinador_associado",
        email: "coach.roberto@assessoria.com.br",
        cpf: "99988877766",
        fullName: "Coach Roberto (Treinador & Associado B2B)",
        nfsBalance: 500,
        userCategory: "associado",
        isClubMember: false,
        plan: "free",
        wearable: "Garmin Forerunner",
      },
      {
        id: "usr_franco_especialista",
        email: "franco.merici@fibios.com.br",
        cpf: "44455566677",
        fullName: "Dr. Franco Merici",
        nfsBalance: 300,
        userCategory: "especialista",
        isClubMember: false,
        plan: "free",
        wearable: "Apple Watch Ultra",
      },
      {
        id: "usr_partner_seller",
        email: "seller@lojaesportiva.com.br",
        cpf: "77788899900",
        fullName: "Loja Parceira Shop",
        nfsBalance: 50,
        userCategory: "parceiro",
        isClubMember: false,
        plan: "free",
      },
    ];
    serverState.transactions = [];
  });

  it("1. Atleta que assina o Clube mantém userCategory='atleta' e ativa isClubMember=true", async () => {
    const payload = {
      event: "subscription.created",
      subscriptionId: "sub_ath_01",
      userId: "usr_athlete_1",
      planId: "club_monthly",
      planName: "Clube Netfits Mensal",
      amountBrl: 19.9,
      status: "active",
      currentPeriodEnd: "2026-12-10T00:00:00Z",
    };

    const req = new Request("http://localhost/api/club/subscription-webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const res = await handleClubSubscriptionRoutes(req, new URL(req.url), {});
    expect(res?.status).toBe(200);

    const user = serverState.users.find((u) => u.id === "usr_athlete_1");
    expect(user?.isClubMember).toBe(true);
    expect(user?.plan).toBe("club");
    expect(user?.userCategory).toBe("atleta");
  });

  it("2. Associado B2B2C (Coach Roberto) que assina o Clube mantém userCategory='associado' e ativa isClubMember=true", async () => {
    const payload = {
      event: "subscription.created",
      subscriptionId: "sub_assoc_01",
      userId: "usr_treinador_associado",
      planId: "club_monthly",
      planName: "Clube Netfits Mensal",
      amountBrl: 19.9,
      status: "active",
      currentPeriodEnd: "2026-12-10T00:00:00Z",
    };

    const req = new Request("http://localhost/api/club/subscription-webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const res = await handleClubSubscriptionRoutes(req, new URL(req.url), {});
    expect(res?.status).toBe(200);

    const user = serverState.users.find((u) => u.id === "usr_treinador_associado");
    expect(user?.isClubMember).toBe(true);
    expect(user?.plan).toBe("club");
    expect(user?.userCategory).toBe("associado");
  });

  it("2b. Fundador & Atleta (André Gallo) que assina o Clube mantém userCategory='atleta' com wearable Garmin Connect", async () => {
    const payload = {
      event: "subscription.created",
      subscriptionId: "sub_andre_01",
      userId: "usr_andre",
      planId: "club_monthly",
      planName: "Clube Netfits Mensal",
      amountBrl: 19.9,
      status: "active",
      currentPeriodEnd: "2026-12-10T00:00:00Z",
    };

    const req = new Request("http://localhost/api/club/subscription-webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const res = await handleClubSubscriptionRoutes(req, new URL(req.url), {});
    expect(res?.status).toBe(200);

    const user = serverState.users.find((u) => u.id === "usr_andre");
    expect(user?.isClubMember).toBe(true);
    expect(user?.plan).toBe("club");
    expect(user?.userCategory).toBe("atleta");
    expect(user?.wearable).toBe("Garmin Connect");
  });

  it("3. Especialista (Dr. Franco Merici) como Atleta Universal pode assinar o Clube mantendo papel institucional", async () => {
    const payload = {
      event: "subscription.created",
      subscriptionId: "sub_esp_01",
      userId: "usr_franco_especialista",
      planId: "club_monthly",
      planName: "Clube Netfits Mensal",
      amountBrl: 19.9,
      status: "active",
      currentPeriodEnd: "2026-12-10T00:00:00Z",
    };

    const req = new Request("http://localhost/api/club/subscription-webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const res = await handleClubSubscriptionRoutes(req, new URL(req.url), {});
    expect(res?.status).toBe(200);

    const user = serverState.users.find((u) => u.id === "usr_franco_especialista");
    expect(user?.isClubMember).toBe(true);
    expect(user?.plan).toBe("club");
    expect(user?.userCategory).toBe("especialista");
  });

  it("4. Suspensão ou cancelamento do Clube nunca altera userCategory de nenhuma categoria", async () => {
    // Associado B2B com clube ativo
    const user = serverState.users.find((u) => u.id === "usr_treinador_associado");
    if (user) {
      user.isClubMember = true;
      user.plan = "club";
      user.userCategory = "associado";
    }

    const payload = {
      event: "subscription.canceled",
      subscriptionId: "sub_assoc_01",
      userId: "usr_treinador_associado",
      planId: "club_monthly",
      planName: "Clube Netfits Mensal",
      amountBrl: 19.9,
      status: "canceled",
      currentPeriodEnd: "2026-12-10T00:00:00Z",
    };

    const req = new Request("http://localhost/api/club/subscription-webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const res = await handleClubSubscriptionRoutes(req, new URL(req.url), {});
    expect(res?.status).toBe(200);

    expect(user?.isClubMember).toBe(false);
    expect(user?.plan).toBe("free");
    expect(user?.userCategory).toBe("associado");
  });

  it("5. RealTimeLedgerSentinel atribui pontos do Clube sem mutar userCategory", () => {
    const user = serverState.users.find((u) => u.id === "usr_franco_especialista");
    expect(user?.userCategory).toBe("especialista");

    const result = realTimeLedgerSentinel.attributeClubSubscriptionPoints("usr_franco_especialista", "Plano Oficial");
    expect(result.success).toBe(true);
    expect(result.pointsAwarded).toBe(250);

    expect(user?.isClubMember).toBe(true);
    expect(user?.plan).toBe("club");
    expect(user?.userCategory).toBe("especialista"); // Nunca mutado para associado!
  });
});
