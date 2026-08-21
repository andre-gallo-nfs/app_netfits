import { useSyncExternalStore } from "react";
import { toast } from "sonner";
import { wallet } from "./wallet-store";
import { sharedSandboxStore } from "./shared-sandbox-store";

export type StoredUser = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  cpf: string;
  passwordHash: string;
  userCategory: "atleta" | "associado" | "especialista" | "parceiro";
  registeredAt: string;
};

// Banco de dados simulado de usuários já cadastrados
const EXISTING_DATABASE_USERS: StoredUser[] = [
  {
    id: "usr_101",
    fullName: "Kite Larsen",
    email: "atleta@netfits.com.br",
    phone: "11999998888",
    cpf: "12345678900",
    passwordHash: "Pass@1234",
    userCategory: "atleta",
    registeredAt: "2026-01-15T10:00:00Z",
  },
  {
    id: "usr_102",
    fullName: "André Gallo",
    email: "gallo@netfits.com.br",
    phone: "11987654321",
    cpf: "98765432111",
    passwordHash: "Netfits#2026",
    userCategory: "associado",
    registeredAt: "2026-02-01T14:30:00Z",
  },
  {
    id: "usr_103",
    fullName: "Dra. Isabella Santos",
    email: "isabella@netfits.com.br",
    phone: "11977776666",
    cpf: "45678912344",
    passwordHash: "Saude!2026",
    userCategory: "especialista",
    registeredAt: "2026-03-10T09:15:00Z",
  },
];

export function cleanDigits(val: string): string {
  return val.replace(/\D/g, "");
}

export function detectIdentifierType(val: string): "email" | "cpf" | "phone" | "unknown" {
  const trimmed = val.trim();
  if (trimmed.includes("@") && trimmed.includes(".")) return "email";
  const digits = cleanDigits(trimmed);
  if (digits.length === 11) {
    if (/^\d{2}9\d{8}$/.test(digits)) return "phone";
    return "cpf";
  }
  if (digits.length >= 10 && digits.length <= 11) return "phone";
  return "unknown";
}

export type PasswordRulesStatus = {
  minLength: boolean;
  hasNumber: boolean;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasSpecial: boolean;
  isValid: boolean;
};

export function validatePasswordRules(password: string): PasswordRulesStatus {
  const minLength = password.length >= 8;
  const hasNumber = /[0-9]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

  const isValid = minLength && hasNumber && hasUppercase && hasLowercase && hasSpecial;

  return {
    minLength,
    hasNumber,
    hasUppercase,
    hasLowercase,
    hasSpecial,
    isValid,
  };
}

let storedUsers: StoredUser[] = [...EXISTING_DATABASE_USERS];
let currentUser: StoredUser | null = EXISTING_DATABASE_USERS[0];

type AuthState = {
  currentUser: StoredUser | null;
  usersCount: number;
};

let authState: AuthState = {
  currentUser: EXISTING_DATABASE_USERS[0],
  usersCount: EXISTING_DATABASE_USERS.length,
};

const listeners = new Set<() => void>();

const emit = () => {
  authState = {
    currentUser,
    usersCount: storedUsers.length,
  };
  listeners.forEach((l) => l());
};

const subscribe = (fn: () => void) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

const getSnapshot = () => authState;

export const authStore = {
  getCurrentUser: () => currentUser,
  getStoredUsers: () => storedUsers,

  checkIdentifierExists(identifier: string): { exists: boolean; matchedField?: "email" | "phone" | "cpf"; matchedUser?: StoredUser } {
    const raw = identifier.trim().toLowerCase();
    const digits = cleanDigits(identifier);

    for (const u of storedUsers) {
      if (u.email.toLowerCase() === raw) {
        return { exists: true, matchedField: "email", matchedUser: u };
      }
      if (digits.length > 0) {
        if (cleanDigits(u.phone) === digits) {
          return { exists: true, matchedField: "phone", matchedUser: u };
        }
        if (cleanDigits(u.cpf) === digits) {
          return { exists: true, matchedField: "cpf", matchedUser: u };
        }
      }
    }

    return { exists: false };
  },

  registerUser({
    identifier,
    password,
    fullName = "Novo Netfiter",
    referralCode,
  }: {
    identifier: string;
    password: string;
    fullName?: string;
    referralCode?: string;
  }) {
    const check = this.checkIdentifierExists(identifier);
    if (check.exists) {
      const fieldLabel =
        check.matchedField === "email"
          ? "E-mail"
          : check.matchedField === "cpf"
          ? "CPF"
          : "Celular";

      return {
        success: false,
        error: `O ${fieldLabel} "${identifier}" já consta cadastrado em nosso banco de dados. Por favor, verifique as informações ou faça login na sua conta existente.`,
        isDuplicate: true,
        matchedField: check.matchedField,
      };
    }

    const pwdRules = validatePasswordRules(password);
    if (!pwdRules.isValid) {
      return {
        success: false,
        error: "A senha precisa ser alfanumérica com 8+ caracteres, 1 maiúscula, 1 minúscula, 1 número e 1 especial.",
      };
    }

    const type = detectIdentifierType(identifier);
    const newUser: StoredUser = {
      id: `usr_${Date.now()}`,
      fullName,
      email: type === "email" ? identifier.trim() : `${cleanDigits(identifier)}@netfits-user.com`,
      phone: type === "phone" ? cleanDigits(identifier) : "",
      cpf: type === "cpf" ? cleanDigits(identifier) : "",
      passwordHash: password,
      userCategory: "atleta",
      registeredAt: new Date().toISOString(),
    };

    storedUsers.push(newUser);
    currentUser = newUser;
    emit();

    // Sincronizar com o Banco Provisório Compartilhado
    sharedSandboxStore.registerAthlete({
      identifier,
      fullName,
      referralCode,
    });

    wallet.earn(50, "Bônus de Boas-Vindas");
    if (referralCode) {
      toast.success(`🎉 Cadastro realizado! Indicação "${referralCode.toUpperCase()}" vinculada (+50 nfs bônus).`);
    } else {
      toast.success("🎉 Cadastro realizado com sucesso! Você ganhou +50 nfs bônus.");
    }

    return { success: true, user: newUser };
  },

  loginUser(identifier: string, password: string) {
    const check = this.checkIdentifierExists(identifier);
    if (!check.exists || !check.matchedUser) {
      return {
        success: false,
        error: "Usuário não encontrado. Verifique os dados digitados ou faça seu cadastro inicial.",
      };
    }

    if (check.matchedUser.passwordHash !== password) {
      return {
        success: false,
        error: "Senha incorreta. Por favor, tente novamente.",
      };
    }

    currentUser = check.matchedUser;
    toast.success(`Bem-vindo de volta, ${currentUser.fullName}!`);
    emit();

    return { success: true, user: currentUser };
  },

  logoutUser() {
    currentUser = null;
    toast.info("Você saiu da sua conta Netfits.");
    emit();
  },
};

export function useAuth() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
