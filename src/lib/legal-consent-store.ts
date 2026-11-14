/**
 * NETFITS — LEGAL CONSENT & LGPD GOVERNANCE STORE
 * Art. 8º da LGPD (Lei nº 13.709/2018) & Apple App Store Guideline 1.2 (EULA)
 * Registra e audita formalmente a persistência de consentimento de Termos de Uso e LGPD.
 */

export interface LegalConsentRecord {
  termsAcceptedAt?: string;
  termsVersion: string;
  lgpdAcceptedAt?: string;
  lgpdVersion: string;
  userId?: string;
  updatedAt: string;
}

const STORAGE_PREFIX = "netfits_legal_consent_";

function getStorage(): Storage | null {
  if (typeof window !== "undefined" && window.localStorage) {
    return window.localStorage;
  }
  if (typeof globalThis !== "undefined" && (globalThis as any).localStorage) {
    return (globalThis as any).localStorage;
  }
  return null;
}

export function getLegalConsent(userId?: string): LegalConsentRecord | null {
  const storage = getStorage();
  if (!storage) return null;

  try {
    if (userId) {
      const userKey = `${STORAGE_PREFIX}${userId}`;
      const rawUser = storage.getItem(userKey);
      if (rawUser) return JSON.parse(rawUser);
    }
    // Fallback para chave geral do dispositivo
    const rawDefault = storage.getItem(`${STORAGE_PREFIX}default`);
    return rawDefault ? JSON.parse(rawDefault) : null;
  } catch {
    return null;
  }
}

export function saveLegalConsent(
  userId?: string,
  updates: Partial<LegalConsentRecord> = {}
): LegalConsentRecord {
  const current = getLegalConsent(userId) || {
    termsVersion: "1.0",
    lgpdVersion: "1.0",
    updatedAt: new Date().toISOString(),
  };

  const now = new Date().toISOString();
  const record: LegalConsentRecord = {
    ...current,
    ...updates,
    userId: userId || current.userId,
    termsVersion: updates.termsVersion || current.termsVersion || "1.0",
    lgpdVersion: updates.lgpdVersion || current.lgpdVersion || "1.0",
    updatedAt: now,
  };

  const storage = getStorage();
  if (storage) {
    try {
      if (userId) {
        storage.setItem(`${STORAGE_PREFIX}${userId}`, JSON.stringify(record));
      }
      storage.setItem(`${STORAGE_PREFIX}default`, JSON.stringify(record));
    } catch (e) {
      console.warn("[LegalConsent] Falha ao persistir no storage:", e);
    }
  }

  return record;
}

export function formatConsentDate(isoDate?: string | null): string {
  if (!isoDate) return "";
  try {
    const d = new Date(isoDate);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");
    return `${day}/${month}/${year} às ${hours}:${minutes}`;
  } catch {
    return "";
  }
}
