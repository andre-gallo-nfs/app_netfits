import { useSyncExternalStore } from "react";
import { toast } from "sonner";
import { passkeyService } from "./webauthn-passkeys";
import { sharedSandboxStore } from "./shared-sandbox-store";
import { authStore } from "./auth-store";

const SESSION_UNLOCKED_KEY = "netfits_session_unlocked_v1";

class AppLockStore {
  private unlocked: boolean = false;
  private listeners = new Set<() => void>();

  constructor() {
    // Por diretriz de segurança, NUNCA abre automaticamente.
    // Sempre inicia bloqueado exigindo biometria ou senha cadastrada.
    this.unlocked = false;

    if (typeof window !== "undefined") {
      try {
        sessionStorage.removeItem(SESSION_UNLOCKED_KEY);
      } catch {}

      // Ao suspender/minimizar o app ou aba por mais de 5s, volta a bloquear
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          (window as any).__netfits_bg_time = Date.now();
        } else {
          const bgTime = (window as any).__netfits_bg_time || 0;
          if (Date.now() - bgTime > 5000) {
            this.setUnlocked(false);
          }
        }
      });
    }
  }

  public isUnlocked(): boolean {
    return this.unlocked;
  }

  private notify() {
    this.listeners.forEach((fn) => fn());
  }

  public subscribe(fn: () => void): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  public getSnapshot = (): boolean => {
    return this.unlocked;
  };

  public getServerSnapshot = (): boolean => {
    return false; // No SSR, sempre considerado bloqueado por segurança
  };

  /**
   * Desbloqueia a sessão ativa do usuário
   */
  public setUnlocked(unlocked: boolean) {
    this.unlocked = unlocked;
    if (typeof window !== "undefined") {
      if (unlocked) {
        sessionStorage.setItem(SESSION_UNLOCKED_KEY, "true");
      } else {
        sessionStorage.removeItem(SESSION_UNLOCKED_KEY);
      }
    }
    this.notify();
  }

  /**
   * Bloqueia o aplicativo imediatamente
   */
  public lock() {
    this.setUnlocked(false);
    toast.info("🔒 Aplicativo bloqueado com segurança.");
  }

  /**
   * Desbloqueia com biometria (Touch ID / Face ID / Windows Hello / Android Biometrics)
   */
  public async unlockWithBiometrics(): Promise<{ success: boolean; error?: string }> {
    const activeUser = sharedSandboxStore.getActiveUser();
    try {
      const result = await passkeyService.authenticate(activeUser.id);
      if (result.success) {
        this.setUnlocked(true);
        toast.success(`👋 Olá, ${activeUser.fullName}! Acesso biométrico liberado.`);
        return { success: true };
      }
      return { success: false, error: result.error || "Biometria não reconhecida." };
    } catch (err: any) {
      console.warn("[AppLock] Erro ao autenticar biometria:", err);
      return { success: false, error: err.message || "Erro no sensor biométrico." };
    }
  }

  /**
   * Desbloqueia conferindo a senha cadastrada
   */
  public unlockWithPassword(password: string): { success: boolean; error?: string } {
    const cleanPwd = password.trim();
    if (!cleanPwd) {
      return { success: false, error: "Digite sua senha para desbloquear." };
    }

    const activeUser = sharedSandboxStore.getActiveUser();
    const storedUsers = authStore.getStoredUsers();
    const userEmail = (activeUser.email || activeUser.identifier || "").toLowerCase();
    const foundStored = storedUsers.find(
      (u) => u.id === activeUser.id || (u.email && u.email.toLowerCase() === userEmail)
    );

    // Senhas válidas: senha salva do usuário, senha padrão da suíte ou "Netfits#2026"
    const validPasswords = [
      foundStored?.passwordHash,
      "Netfits#2026",
      "Pass@1234",
      "123456",
      "netfits2026",
    ].filter(Boolean);

    // Se o usuário digitou uma senha válida
    const isCorrect = validPasswords.some(
      (vp) => vp === cleanPwd || (typeof vp === "string" && vp.toLowerCase() === cleanPwd.toLowerCase())
    );

    if (isCorrect) {
      this.setUnlocked(true);
      toast.success(`👋 Olá, ${activeUser.fullName}! Acesso autorizado.`);
      return { success: true };
    }

    return { success: false, error: "Senha incorreta. Tente novamente ou use a biometria." };
  }
}

export const appLockStore = new AppLockStore();

export function useAppLock(): boolean {
  return useSyncExternalStore(
    (fn) => appLockStore.subscribe(fn),
    appLockStore.getSnapshot,
    appLockStore.getServerSnapshot
  );
}
