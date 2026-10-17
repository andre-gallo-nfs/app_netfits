/**
 * Netfits Ecosystem User Domain Adapters
 * Unificação de modelos conceituais:
 * - SandboxUser (Runtime Mock / LocalStore / Protótipo)
 * - UserSignupData (Zod Validation / Onboarding Form)
 * - DatabaseUser (PostgreSQL / Supabase Schema)
 */

import { SandboxUser } from "./shared-sandbox-store";
import { UserSignupData } from "./user-schema";

export type UserCategory = "atleta" | "associado" | "especialista" | "parceiro";
export type LoyaltyLevel = "starter" | "pro" | "prime" | "elite";

export interface DatabaseUser {
  id: string;
  full_name: string;
  email: string;
  phone?: string | null;
  birth_date?: string | null;
  address?: string | null;
  sports?: string[];
  health_plan?: string;
  gym?: string;
  wearable?: string;
  coaching?: string | null;
  referral_code?: string | null;
  referred_by_user_id?: string | null;
  user_category: UserCategory;
  exclusive_referral_link?: string | null;
  wallet_balance_nfs: number;
  level: LoyaltyLevel;
  created_at?: string;
  updated_at?: string;
}

/**
 * Normaliza a categoria do usuário entre os modelos legados e oficiais
 */
export function normalizeUserCategory(
  categoryOrType?: string
): UserCategory {
  if (!categoryOrType) return "atleta";
  const normalized = categoryOrType.toLowerCase();
  if (normalized === "athlete" || normalized === "atleta") return "atleta";
  if (normalized === "associado") return "associado";
  if (normalized === "especialista" || normalized === "specialist") return "especialista";
  if (normalized === "partner" || normalized === "parceiro") return "parceiro";
  return "atleta";
}

/**
 * Converte categoria de banco para tipo de sandbox legado
 */
export function toSandboxType(
  category: UserCategory
): "athlete" | "associado" | "partner" | "admin" {
  if (category === "associado") return "associado";
  if (category === "parceiro") return "partner";
  return "athlete";
}

/**
 * Monta o endereço formatado a partir de partes isoladas
 */
export function formatStructuredAddress(parts: {
  street?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  address?: string;
}): string {
  if (parts.address && parts.address.trim()) return parts.address.trim();

  const segments: string[] = [];
  if (parts.street) {
    segments.push(parts.number ? `${parts.street}, ${parts.number}` : parts.street);
  }
  if (parts.complement) segments.push(parts.complement);
  if (parts.neighborhood) segments.push(parts.neighborhood);
  if (parts.city && parts.state) {
    segments.push(`${parts.city} - ${parts.state}`);
  } else if (parts.city) {
    segments.push(parts.city);
  }
  if (parts.zipcode) segments.push(`CEP ${parts.zipcode}`);

  return segments.join(", ") || "Endereço não informado";
}

/**
 * Converte SandboxUser para DatabaseUser (PostgreSQL)
 */
export function sandboxToDatabaseUser(u: SandboxUser): DatabaseUser {
  return {
    id: u.id,
    full_name: u.fullName,
    email: u.email || `${u.identifier}@netfits.com.br`,
    phone: u.phone || null,
    birth_date: u.birthDate || null,
    address: formatStructuredAddress(u),
    sports: u.sports || ["Corrida"],
    health_plan: u.healthPlan || "Sem plano",
    gym: u.gym || "Não frequento",
    wearable: u.wearable || "Não uso",
    coaching: u.coaching || null,
    referral_code: u.referralCode || null,
    referred_by_user_id: u.referredBy || null,
    user_category: normalizeUserCategory(u.type),
    exclusive_referral_link: u.referralCode ? `https://app.netfits.com.br/r/${u.referralCode}` : null,
    wallet_balance_nfs: u.nfsBalance || 0,
    level: "starter",
    created_at: u.registeredAt || new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
}

/**
 * Converte DatabaseUser para SandboxUser
 */
export function databaseToSandboxUser(db: DatabaseUser): SandboxUser {
  return {
    id: db.id,
    identifier: db.email.split("@")[0],
    fullName: db.full_name,
    email: db.email,
    phone: db.phone || undefined,
    birthDate: db.birth_date || undefined,
    type: toSandboxType(db.user_category),
    nfsBalance: db.wallet_balance_nfs || 0,
    referralCode: db.referral_code || `NF-${db.id.slice(0, 6).toUpperCase()}`,
    referredBy: db.referred_by_user_id || undefined,
    registeredAt: db.created_at || new Date().toISOString(),
    address: db.address || undefined,
    sports: db.sports,
    healthPlan: db.health_plan,
    gym: db.gym,
    wearable: db.wearable,
    coaching: db.coaching || undefined,
    plan: "free",
    isClubSubscriber: false,
  };
}

/**
 * Converte UserSignupData (Zod Onboarding) para DatabaseUser
 */
export function signupToDatabaseUser(data: UserSignupData): DatabaseUser {
  return {
    id: data.id,
    full_name: data.fullName,
    email: data.email,
    phone: data.phone,
    birth_date: data.birthDate,
    address: data.address,
    sports: data.sports,
    health_plan: data.healthPlan,
    gym: data.gym,
    wearable: data.wearable,
    coaching: data.coaching || null,
    referral_code: data.referralCode || null,
    referred_by_user_id: data.referredByUserId || null,
    user_category: data.userCategory,
    exclusive_referral_link: data.exclusiveReferralLink || null,
    wallet_balance_nfs: data.walletBalanceNfs || 0,
    level: data.level || "starter",
    created_at: data.createdAt,
    updated_at: data.updatedAt,
  };
}
