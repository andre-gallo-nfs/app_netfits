import { useSyncExternalStore } from "react";
import { toast } from "sonner";
import { wallet } from "./wallet-store";
import { sharedSandboxStore } from "./shared-sandbox-store";
import { passkeyService } from "./webauthn-passkeys";

export type StoredUser = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  cpf: string;
  birthDate?: string;
  zipcode?: string;
  street?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  shortState?: string;
  address?: string;
  passwordHash?: string;
  userCategory?: "atleta" | "associado" | "especialista" | "parceiro";
  registeredAt?: string;
};

// Banco de dados definitivo de usuários em Produção (Go-Live)
const EXISTING_DATABASE_USERS: StoredUser[] = [
  {
    id: "usr_andre",
    fullName: "André Gallo",
    email: "aacgallo@hotmail.com",
    phone: "11995351513",
    cpf: "25664730803",
    birthDate: "13/11/1975",
    address: "Rua Carlos Steinen, 193 (Apto 121) - Paraíso, São Paulo · SP",
    street: "Rua Carlos Steinen",
    number: "193",
    complement: "Apto 121",
    neighborhood: "Paraíso",
    city: "São Paulo",
    state: "São Paulo",
    shortState: "SP",
    zipcode: "04004011",
    passwordHash: "Admin@2026",
    userCategory: "associado",
    registeredAt: "2026-10-05T00:00:00Z",
  },
  {
    id: "usr_carlos_formigari",
    fullName: "Carlos Rodrigo Formigari",
    email: "crformigari72@gmail.com",
    phone: "(11) 98426-4116",
    cpf: "11553412877",
    birthDate: "05/12/1972",
    address: "Alameda das Embaúbas, 365 - Alphaville, Santana de Parnaíba · SP",
    street: "Alameda das Embaúbas",
    number: "365",
    zipcode: "06542195",
    city: "Santana de Parnaíba",
    state: "São Paulo",
    shortState: "SP",
    passwordHash: "Kite@1972",
    userCategory: "atleta",
    registeredAt: "2026-10-06T00:00:00Z",
  },
  {
    id: "user-1791370530242",
    fullName: "Cristiane Ferreira Formigari",
    email: "cristiane.formigari@amantikira.com.br",
    phone: "(11) 98381-7390",
    cpf: "11001624882",
    passwordHash: "Kite@1970",
    userCategory: "atleta",
    registeredAt: "2026-10-07T10:55:30.242Z",
  },
  {
    id: "usr_cristiane_gallo",
    fullName: "Cristiane Queli da Silva Gallo",
    email: "",
    phone: "",
    cpf: "",
    passwordHash: "",
    userCategory: "atleta",
    registeredAt: "2026-10-06T00:00:00Z",
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
  const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

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

const AUTH_USERS_KEY = "netfits_auth_stored_users_v2";

function loadStoredUsers(): StoredUser[] {
  if (typeof window === "undefined") return [...EXISTING_DATABASE_USERS];
  try {
    const raw = localStorage.getItem(AUTH_USERS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const merged: StoredUser[] = [...parsed];
        for (const existing of EXISTING_DATABASE_USERS) {
          if (!merged.some((u) => u.id === existing.id || (u.email && existing.email && u.email.toLowerCase() === existing.email.toLowerCase()))) {
            merged.push(existing);
          }
        }
        return merged;
      }
    }
  } catch (e) {
    console.warn("[authStore] Erro ao carregar usuários salvos:", e);
  }
  return [...EXISTING_DATABASE_USERS];
}

function saveStoredUsers(users: StoredUser[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
  } catch (e) {
    console.warn("[authStore] Erro ao salvar usuários:", e);
  }
}

const storedUsers: StoredUser[] = loadStoredUsers();
let currentUser: StoredUser | null = null;

type AuthState = {
  currentUser: StoredUser | null;
  usersCount: number;
};

let authState: AuthState = {
  currentUser: null,
  usersCount: storedUsers.length,
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

const SERVER_AUTH_STATE: AuthState = {
  currentUser: null,
  usersCount: 0,
};

const getServerSnapshot = () => SERVER_AUTH_STATE;

export const authStore = {
  getCurrentUser: (): StoredUser | null => {
    const active = sharedSandboxStore.getActiveUser();
    if (!active || !active.id) {
      return null;
    }
    return {
      id: active.id,
      fullName: active.fullName,
      email: active.email || active.identifier,
      phone: active.phone || (active.identifier.includes("@") ? "" : active.identifier),
      cpf: active.cpf || "",
      passwordHash: active.passwordHash || "",
      userCategory: active.type === "associado" ? "associado" : "atleta",
      registeredAt: active.registeredAt,
    };
  },
  getStoredUsers: () => storedUsers,

  checkIdentifierExists(identifier: string): { exists: boolean; matchedField?: "email" | "phone" | "cpf"; matchedUser?: StoredUser } {
    const raw = identifier.trim().toLowerCase();
    const digits = cleanDigits(identifier);

    // 0. Reconhecer instantaneamente os usuários fundadores/oficiais da Netfits por identificador único
    if (
      raw === "aacgallo@hotmail.com" ||
      raw === "aacgallo@hotmail.com.br" ||
      raw === "usr_andre" ||
      digits === "25664730803"
    ) {
      const andreUser = storedUsers.find((u) => u.id === "usr_andre");
      if (andreUser) {
        return { exists: true, matchedField: digits === "25664730803" ? "cpf" : "email", matchedUser: andreUser };
      }
    }

    if (
      raw === "crformigari72@gmail.com" ||
      raw === "usr_carlos_formigari" ||
      digits === "11553412877"
    ) {
      const carlosUser = storedUsers.find((u) => u.id === "usr_carlos_formigari");
      if (carlosUser) {
        return { exists: true, matchedField: digits === "11553412877" ? "cpf" : "email", matchedUser: carlosUser };
      }
    }

    if (
      raw === "cristiane.formigari@amantikira.com.br" ||
      raw === "user-1791370530242" ||
      digits === "11001624882"
    ) {
      const crisFormigari = storedUsers.find((u) => u.id === "user-1791370530242") ||
        storedUsers.find((u) => u.email?.toLowerCase() === "cristiane.formigari@amantikira.com.br");
      if (crisFormigari) {
        return { exists: true, matchedField: digits === "11001624882" ? "cpf" : "email", matchedUser: crisFormigari };
      }
    }

    if (raw === "usr_cristiane_gallo") {
      const crisUser = storedUsers.find((u) => u.id === "usr_cristiane_gallo");
      if (crisUser) return { exists: true, matchedField: "email", matchedUser: crisUser };
    }

    // 1. Checar lista local de usuários salvos
    for (const u of storedUsers) {
      if (u.email && u.email.toLowerCase() === raw) {
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

    // 2. Checar lista do Banco Provisório Compartilhado
    const sandboxUsers = sharedSandboxStore.getUsers();
    for (const su of sandboxUsers) {
      const uEmail = (su.email || su.identifier || "").toLowerCase().trim();
      const uPhone = cleanDigits(su.phone || su.identifier || "");
      const uCpf = cleanDigits(su.cpf || "");

      const isEmailMatch = uEmail.length > 0 && uEmail === raw;
      const isPhoneMatch = digits.length > 0 && uPhone.length > 0 && uPhone === digits;
      const isCpfMatch = digits.length > 0 && uCpf.length > 0 && uCpf === digits;

      if (isEmailMatch || isPhoneMatch || isCpfMatch) {
        const adaptedUser: StoredUser = {
          id: su.id,
          fullName: su.fullName,
          email: su.email || su.identifier,
          phone: su.phone || "",
          cpf: su.cpf || "",
          passwordHash: su.passwordHash || "",
          userCategory: su.type === "associado" ? "associado" : "atleta",
          registeredAt: su.registeredAt,
        };
        return {
          exists: true,
          matchedField: isEmailMatch ? "email" : isPhoneMatch ? "phone" : "cpf",
          matchedUser: adaptedUser,
        };
      }
    }

    return { exists: false };
  },

  /**
   * Salva e sincroniza um usuário recém-cadastrado na lista persistida do authStore
   */
  recordRegisteredUser(user: Partial<StoredUser> & { id: string; fullName: string }) {
    let existingIdx = storedUsers.findIndex((u) => u.id === user.id);
    if (existingIdx === -1) {
      existingIdx = storedUsers.findIndex(
        (u) =>
          (u.email && user.email && u.email.toLowerCase() === user.email.toLowerCase()) ||
          (u.cpf && user.cpf && cleanDigits(u.cpf) === cleanDigits(user.cpf))
      );
    }
    let resolvedUser: StoredUser;
    if (existingIdx >= 0) {
      storedUsers[existingIdx] = { ...storedUsers[existingIdx], ...user };
      resolvedUser = storedUsers[existingIdx];
    } else {
      resolvedUser = {
        id: user.id,
        fullName: user.fullName,
        email: user.email || "",
        phone: user.phone || "",
        cpf: user.cpf || "",
        passwordHash: user.passwordHash || "",
        userCategory: user.userCategory || "atleta",
        registeredAt: user.registeredAt || new Date().toISOString(),
      };
      storedUsers.push(resolvedUser);
    }
    saveStoredUsers(storedUsers);
    currentUser = resolvedUser;
    emit();
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

    // Cadastrar no Banco Provisório Compartilhado e definir como ativo deste dispositivo
    const isEmail = identifier.includes("@");
    const regResult = sharedSandboxStore.registerAthlete({
      fullName,
      email: isEmail ? identifier : `${identifier.replace(/\D/g, "")}@user.netfits.com.br`,
      phone: isEmail ? "(11) 99999-0000" : identifier,
      cpf: "000.000.000-00",
      birthDate: "1990-01-01",
      password,
      referralCode,
    });

    if (!regResult.success || !regResult.user) {
      return { success: false, error: regResult.error || "Erro ao efetuar cadastro." };
    }

    const newUser: StoredUser = {
      id: regResult.user.id,
      fullName: regResult.user.fullName,
      email: regResult.user.identifier,
      phone: regResult.user.identifier.includes("@") ? "" : regResult.user.identifier,
      cpf: "",
      passwordHash: password,
      userCategory: "atleta",
      registeredAt: regResult.user.registeredAt,
    };

    storedUsers.push(newUser);
    saveStoredUsers(storedUsers);
    currentUser = newUser;
    sharedSandboxStore.setActiveUser(regResult.user.id);
    emit();

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

    const cleanPwd = password.trim();
    const validPasswords: string[] = [];

    // 1. Senha gravada no perfil do usuário
    if (check.matchedUser.passwordHash) {
      validPasswords.push(check.matchedUser.passwordHash);
    }

    // 2. Busca senha salva no sharedSandboxStore se houver
    const sbUser = sharedSandboxStore.getUsers().find((u) => u.id === check.matchedUser!.id);
    if (sbUser?.passwordHash) {
      validPasswords.push(sbUser.passwordHash);
    }

    // 3. Busca senha salva no backup local se houver
    if (typeof window !== "undefined") {
      try {
        const bRaw = localStorage.getItem(`netfits_profile_saved_${check.matchedUser.id}`);
        if (bRaw) {
          const parsedBackup = JSON.parse(bRaw);
          if (parsedBackup.passwordHash) validPasswords.push(parsedBackup.passwordHash);
        }
      } catch {}
    }

    // 4. Senhas reais e individuais cadastradas pelos usuários fundadores
    if (
      check.matchedUser.id === "usr_carlos_formigari" ||
      check.matchedUser.email?.toLowerCase().includes("crformigari")
    ) {
      validPasswords.push("Kite@1972", "kite@1972");
    }

    if (
      check.matchedUser.id === "user-1791370530242" ||
      check.matchedUser.email?.toLowerCase().includes("cristiane.formigari")
    ) {
      validPasswords.push("Kite@1970", "kite@1970");
    }

    if (
      check.matchedUser.id === "usr_andre" ||
      check.matchedUser.email?.toLowerCase().includes("aacgallo")
    ) {
      validPasswords.push("Admin@2026");
    }

    const uniqueValidPasswords = Array.from(new Set(validPasswords.filter(Boolean)));

    const isCorrect = uniqueValidPasswords.some(
      (vp) => vp === cleanPwd || (typeof vp === "string" && vp.toLowerCase() === cleanPwd.toLowerCase())
    );

    if (!isCorrect) {
      return {
        success: false,
        error: "Senha incorreta. Digite sua senha pessoal cadastrada.",
      };
    }

    currentUser = check.matchedUser;
    sharedSandboxStore.setActiveUser(check.matchedUser.id);
    toast.success(`Bem-vindo de volta, ${check.matchedUser.fullName}!`);
    emit();

    return { success: true, user: currentUser };
  },

  resetUserPassword(identifier: string, newPassword: string): { success: boolean; error?: string; user?: StoredUser } {
    const check = this.checkIdentifierExists(identifier);
    if (!check.exists || !check.matchedUser) {
      return {
        success: false,
        error: "Conta não localizada. Verifique o identificador digitado.",
      };
    }

    const cleanPwd = newPassword.trim();
    if (!cleanPwd || cleanPwd.length < 6) {
      return {
        success: false,
        error: "A nova senha deve ter no mínimo 6 caracteres.",
      };
    }

    const user = check.matchedUser;
    user.passwordHash = cleanPwd;

    // Atualiza nos storedUsers locais
    const idx = storedUsers.findIndex((u) => u.id === user.id);
    if (idx >= 0) {
      storedUsers[idx].passwordHash = cleanPwd;
    } else {
      storedUsers.push(user);
    }
    saveStoredUsers(storedUsers);

    // Atualiza no sharedSandboxStore
    sharedSandboxStore.updateUser(user.id, { passwordHash: cleanPwd });

    // Salva backup local
    if (typeof window !== "undefined") {
      try {
        const backupRaw = localStorage.getItem(`netfits_profile_saved_${user.id}`);
        const backup = backupRaw ? JSON.parse(backupRaw) : {};
        backup.passwordHash = cleanPwd;
        localStorage.setItem(`netfits_profile_saved_${user.id}`, JSON.stringify(backup));
      } catch {}
    }

    // Define sessão ativa
    currentUser = user;
    sharedSandboxStore.setActiveUser(user.id);
    emit();

    // Sincroniza com servidor em background
    sharedSandboxStore.syncToCloud();

    return { success: true, user };
  },

  logoutUser() {
    currentUser = null;
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem("netfits_production_active_user_v1");
        localStorage.removeItem("netfits_last_authenticated_user_id");
        sessionStorage.removeItem("netfits_session_unlocked_v1");
      } catch {}
    }
    sharedSandboxStore.clearActiveSession();
    toast.info("Você saiu da sua conta Netfits.");
    emit();
  },

  async loginWithPasskey(expectedUserId?: string) {
    const res = await passkeyService.authenticate(expectedUserId);
    if (!res.success) {
      return { success: false, error: res.error || "Falha na validação biométrica." };
    }

    let targetUser: StoredUser | null = null;
    if (res.credential?.userId) {
      targetUser = storedUsers.find((u) => u.id === res.credential?.userId) || null;
    }
    if (!targetUser) {
      targetUser = currentUser || storedUsers[0];
    }

    currentUser = targetUser;
    sharedSandboxStore.setActiveUser(targetUser.id);
    toast.success(`🎉 Biometria reconhecida: Bem-vindo(a), ${targetUser.fullName}!`);
    emit();
    return { success: true, user: targetUser };
  },

  async registerPasskeyForCurrentUser() {
    const user = this.getCurrentUser();
    if (!user) throw new Error("Usuário não autenticado.");
    return await passkeyService.registerPasskey(user.id, user.fullName, user.email);
  },
};

export function useAuth() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
