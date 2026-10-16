import { describe, it, expect } from "vitest";
import { validateUserData, type UserSignupData } from "@/lib/user-schema";

describe("Validação de Cadastro de Usuário (UserSignupSchema)", () => {
  const validUserPayload: UserSignupData = {
    id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    fullName: "Carlos Silva Atleta",
    email: "carlos.silva@netfits.com.br",
    phone: "+55 11 98765-4321",
    birthDate: "1992-05-14",
    address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
    sports: ["Corrida", "Musculação"],
    healthPlan: "Bradesco Saúde",
    gym: "Smart Fit",
    wearable: "Garmin Forerunner 965",
    declaredLoyaltyPrograms: ["Livelo", "Esfera"],
    declaredPointsRange: "10.000 - 50.000",
    consentTermsAccepted: true,
    consentWearablesData: true,
    consentPartnersOffers: true,
    consentTimestamp: "2026-10-16T12:00:00.000Z",
    userCategory: "atleta",
    walletBalanceNfs: 50,
    level: "starter",
    createdAt: "2026-10-16T12:00:00.000Z",
    updatedAt: "2026-10-16T12:00:00.000Z",
  };

  it("deve validar com sucesso um payload completo e em conformidade", () => {
    const result = validateUserData(validUserPayload);
    expect(result.isValid).toBe(true);
    expect(result.errors).toBeNull();
    expect(result.sanitizedData?.email).toBe("carlos.silva@netfits.com.br");
  });

  it("deve rejeitar cadastro sem aceitação dos termos de uso (consentTermsAccepted = false)", () => {
    const invalidPayload = {
      ...validUserPayload,
      consentTermsAccepted: false,
    };

    const result = validateUserData(invalidPayload);
    expect(result.isValid).toBe(false);
    expect(result.errors).toBeDefined();
    expect(result.errors?.consentTermsAccepted).toBeDefined();
  });

  it("deve rejeitar telefones fora do formato padrão nacional (+55 11 98765-4321)", () => {
    const invalidPayload = {
      ...validUserPayload,
      phone: "11987654321", // Sem prefixo +55 e sem formatação
    };

    const result = validateUserData(invalidPayload);
    expect(result.isValid).toBe(false);
    expect(result.errors?.phone).toBeDefined();
  });

  it("deve exigir pelo menos 1 esporte de preferência", () => {
    const invalidPayload = {
      ...validUserPayload,
      sports: [], // Lista vazia
    };

    const result = validateUserData(invalidPayload);
    expect(result.isValid).toBe(false);
    expect(result.errors?.sports).toBeDefined();
  });

  it("deve rejeitar e-mails em formato inválido", () => {
    const invalidPayload = {
      ...validUserPayload,
      email: "email-invalido-sem-arroba",
    };

    const result = validateUserData(invalidPayload);
    expect(result.isValid).toBe(false);
    expect(result.errors?.email).toBeDefined();
  });

  it("deve aceitar perfis de usuário válidos como 'associado'", () => {
    const associadoPayload: UserSignupData = {
      ...validUserPayload,
      userCategory: "associado",
      exclusiveReferralLink: "https://netfits.com.br/convite/carlos-coach",
      associadoStats: {
        capturedUsersCount: 15,
        activeUsersCount: 12,
        totalCommissionNfs: 1800,
      },
    };

    const result = validateUserData(associadoPayload);
    expect(result.isValid).toBe(true);
    expect(result.sanitizedData?.userCategory).toBe("associado");
    expect(result.sanitizedData?.associadoStats?.capturedUsersCount).toBe(15);
  });
});
