import { describe, it, expect } from "vitest";
import {
  normalizeUserCategory,
  toSandboxType,
  formatStructuredAddress,
  sandboxToDatabaseUser,
  databaseToSandboxUser,
  signupToDatabaseUser,
  DatabaseUser,
} from "../user-adapter";
import { SandboxUser } from "../shared-sandbox-store";
import { UserSignupData } from "../user-schema";

describe("User Domain Adapters (Unificação de Modelos)", () => {
  it("normaliza categorias de usuário entre Sandbox e Banco", () => {
    expect(normalizeUserCategory("athlete")).toBe("atleta");
    expect(normalizeUserCategory("atleta")).toBe("atleta");
    expect(normalizeUserCategory("associado")).toBe("associado");
    expect(normalizeUserCategory("especialista")).toBe("especialista");
    expect(normalizeUserCategory("specialist")).toBe("especialista");
    expect(normalizeUserCategory("partner")).toBe("parceiro");
    expect(normalizeUserCategory("parceiro")).toBe("parceiro");
    expect(normalizeUserCategory(undefined)).toBe("atleta");
  });

  it("converte categoria de banco para tipo de sandbox", () => {
    expect(toSandboxType("atleta")).toBe("athlete");
    expect(toSandboxType("associado")).toBe("associado");
    expect(toSandboxType("parceiro")).toBe("partner");
  });

  it("formata endereço estruturado a partir de campos isolados", () => {
    const formatted = formatStructuredAddress({
      street: "Av. Paulista",
      number: "1000",
      neighborhood: "Bela Vista",
      city: "São Paulo",
      state: "SP",
      zipcode: "01310-100",
    });
    expect(formatted).toBe("Av. Paulista, 1000, Bela Vista, São Paulo - SP, CEP 01310-100");
  });

  it("converte bidirecionalmente SandboxUser <-> DatabaseUser mantendo saldo e integridade", () => {
    const mockSandbox: SandboxUser = {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      identifier: "andregallo",
      fullName: "André Gallo",
      email: "andre.gallo@netfits.com.br",
      phone: "+55 11 98765-4321",
      birthDate: "1988-05-12",
      type: "athlete",
      nfsBalance: 1250,
      referralCode: "GALLO-NETFITS",
      registeredAt: "2026-01-10T10:00:00Z",
      sports: ["Corrida", "Crossfit"],
      healthPlan: "Bradesco Saúde",
      gym: "Bio Ritmo",
      wearable: "Garmin Forerunner 965",
    };

    const dbUser = sandboxToDatabaseUser(mockSandbox);
    expect(dbUser.full_name).toBe("André Gallo");
    expect(dbUser.user_category).toBe("atleta");
    expect(dbUser.wallet_balance_nfs).toBe(1250);

    const backToSandbox = databaseToSandboxUser(dbUser);
    expect(backToSandbox.fullName).toBe(mockSandbox.fullName);
    expect(backToSandbox.type).toBe("athlete");
    expect(backToSandbox.nfsBalance).toBe(1250);
  });

  it("converte UserSignupData validada para DatabaseUser", () => {
    const signupData: UserSignupData = {
      id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      fullName: "Mariana Souza",
      email: "mariana@gmail.com",
      phone: "+55 11 98765-4321",
      birthDate: "1995-08-20",
      address: "Rua Oscar Freire, 500, Jardins, São Paulo - SP",
      sports: ["Ciclismo"],
      healthPlan: "SulAmérica",
      gym: "Smart Fit",
      wearable: "Apple Watch Ultra 2",
      declaredLoyaltyPrograms: ["Livelo"],
      declaredPointsRange: "10.000 - 50.000",
      referralCode: "MARI-2026",
      consentTermsAccepted: true,
      consentWearablesData: true,
      consentPartnersOffers: true,
      consentTimestamp: "2026-03-01T14:00:00Z",
      userCategory: "atleta",
      walletBalanceNfs: 50,
      level: "starter",
      createdAt: "2026-03-01T14:00:00Z",
      updatedAt: "2026-03-01T14:00:00Z",
    };

    const db = signupToDatabaseUser(signupData);
    expect(db.id).toBe(signupData.id);
    expect(db.user_category).toBe("atleta");
    expect(db.wallet_balance_nfs).toBe(50);
    expect(db.address).toBe(signupData.address);
  });
});
