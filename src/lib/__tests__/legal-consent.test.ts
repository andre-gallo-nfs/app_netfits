import { describe, it, expect, beforeEach } from "vitest";
import {
  getLegalConsent,
  saveLegalConsent,
  formatConsentDate,
} from "../legal-consent-store";
import { sharedSandboxStore } from "../shared-sandbox-store";

describe("Legal Consent & LGPD Governance Store (Art. 8º LGPD / Apple Guideline 1.2)", () => {
  const store = new Map<string, string>();

  beforeEach(() => {
    store.clear();
    const mockLocalStorage = {
      getItem: (k: string) => store.get(k) || null,
      setItem: (k: string, v: string) => store.set(k, String(v)),
      removeItem: (k: string) => store.delete(k),
      clear: () => store.clear(),
      key: (i: number) => Array.from(store.keys())[i] || null,
      length: store.size,
    };
    (globalThis as any).localStorage = mockLocalStorage;
    if (typeof window !== "undefined") {
      (window as any).localStorage = mockLocalStorage;
    }
  });

  it("salva e recupera consentimento legal com versionamento por usuário", () => {
    const userId = "user-claudia-test";
    const acceptedAt = new Date().toISOString();

    const saved = saveLegalConsent(userId, {
      termsAcceptedAt: acceptedAt,
      termsVersion: "1.2",
      lgpdAcceptedAt: acceptedAt,
      lgpdVersion: "1.0",
    });

    expect(saved.userId).toBe(userId);
    expect(saved.termsAcceptedAt).toBe(acceptedAt);
    expect(saved.termsVersion).toBe("1.2");
    expect(saved.lgpdAcceptedAt).toBe(acceptedAt);
    expect(saved.lgpdVersion).toBe("1.0");

    const retrieved = getLegalConsent(userId);
    expect(retrieved).not.toBeNull();
    expect(retrieved?.termsAcceptedAt).toBe(acceptedAt);
    expect(retrieved?.lgpdAcceptedAt).toBe(acceptedAt);
    expect(retrieved?.termsVersion).toBe("1.2");
  });

  it("recupera fallback para consentimento global quando userId não for informado", () => {
    const acceptedAt = new Date().toISOString();

    saveLegalConsent(undefined, {
      termsAcceptedAt: acceptedAt,
      termsVersion: "1.2",
    });

    const fallback = getLegalConsent();
    expect(fallback).not.toBeNull();
    expect(fallback?.termsAcceptedAt).toBe(acceptedAt);
    expect(fallback?.termsVersion).toBe("1.2");
  });

  it("formata a data de consentimento no padrão oficial legível brasileiro", () => {
    const dateStr = "2026-11-14T15:48:00.000Z";
    const formatted = formatConsentDate(dateStr);
    expect(formatted).toContain("/11/2026");
    expect(formatted).toContain("às");
  });

  it("retorna string vazia para datas inválidas ou nulas", () => {
    expect(formatConsentDate(null)).toBe("");
    expect(formatConsentDate(undefined)).toBe("");
  });

  it("persiste consentimento legal no cadastro via sharedSandboxStore.registerAthlete", () => {
    const now = new Date().toISOString();
    const result = sharedSandboxStore.registerAthlete({
      fullName: "Atleta Consentimento Teste",
      email: `atleta.consent.${Date.now()}@netfits.com.br`,
      phone: `11999${Math.floor(100000 + Math.random() * 900000)}`,
      cpf: `${Math.floor(10000000000 + Math.random() * 90000000000)}`,
      birthDate: "1990-01-01",
      termsAcceptedAt: now,
      termsVersion: "1.2",
      lgpdAcceptedAt: now,
      lgpdVersion: "1.0",
    });

    expect(result.success).toBe(true);
    expect(result.user).toBeDefined();
    expect(result.user?.termsAcceptedAt).toBe(now);
    expect(result.user?.termsVersion).toBe("1.2");
    expect(result.user?.lgpdAcceptedAt).toBe(now);
    expect(result.user?.lgpdVersion).toBe("1.0");
  });
});
