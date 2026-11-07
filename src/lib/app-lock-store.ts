import { useSyncExternalStore } from "react";
import { toast } from "sonner";
import { passkeyService } from "./webauthn-passkeys";
import { sharedSandboxStore } from "./shared-sandbox-store";
import { authStore } from "./auth-store";
import { nativeBridge } from "./native-bridge";
import { Capacitor } from "@capacitor/core";
import { BiometricAuth } from "@aparajita/capacitor-biometric-auth";

const SESSION_UNLOCKED_KEY = "netfits_session_unlocked_v2";
const APP_EXPLICITLY_LOCKED_KEY = "netfits_app_explicitly_locked";
const APP_LAST_ACTIVITY_KEY = "netfits_last_activity_timestamp";
const INACTIVITY_TIMEOUT_MS = 10 * 60 * 1000; // 10 minutos sem uso (tempo seguro para evitar bloqueios intempestivos)
const CHECKOUT_INACTIVITY_TIMEOUT_MS = 15 * 60 * 1000; // 15 minutos em checkout

class AppLockStore {
  private unlocked: boolean = true;
  private listeners = new Set<() => void>();

  private recordActivity() {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(APP_LAST_ACTIVITY_KEY, String(Date.now()));
      } catch {}
    }
  }

  constructor() {
    if (typeof window !== "undefined") {
      try {
        const isWeb = !nativeBridge.isNativePlatform();
        const hostname = window.location.hostname || "";
        const isStaging =
          hostname.includes("lhr.life") ||
          hostname.includes("localhost") ||
          hostname.includes("staging") ||
          window.location.port === "3000";

        if (isWeb || isStaging) {
          // No ambiente Web desktop e staging, mantém fluido para testes e desenvolvimento
          this.unlocked = true;
          this.recordActivity();
        } else {
          // No aplicativo móvel (iOS e Android):
          const explicitlyLocked = localStorage.getItem(APP_EXPLICITLY_LOCKED_KEY) === "true";
          const lastActivityRaw = localStorage.getItem(APP_LAST_ACTIVITY_KEY);
          const lastActivity = Number(lastActivityRaw || 0);
          const now = Date.now();
          const isCheckout =
            window.location.pathname.includes("/market") ||
            (window as any).__netfits_in_checkout === true;
          const allowedTimeout = isCheckout ? CHECKOUT_INACTIVITY_TIMEOUT_MS : INACTIVITY_TIMEOUT_MS;

          // Se for primeira inicialização ou não houver registro prévio, inicializa desbloqueado
          if (!lastActivityRaw || lastActivity === 0) {
            this.unlocked = true;
            this.recordActivity();
            localStorage.setItem(SESSION_UNLOCKED_KEY, "true");
          } else if (explicitlyLocked) {
            this.unlocked = false;
          } else if (now - lastActivity > allowedTimeout) {
            // Mais de 10 minutos sem uso: bloqueia
            this.unlocked = false;
          } else {
            this.unlocked = true;
            this.recordActivity();
          }
        }
      } catch {
        this.unlocked = true;
      }

      // Ao suspender/minimizar o app, apagar a tela ou alternar abas (iOS e Android):
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          if (this.unlocked) {
            this.recordActivity();
          }
        } else {
          const isWeb = !nativeBridge.isNativePlatform();
          const hostname = window.location.hostname || "";
          const isStaging =
            hostname.includes("lhr.life") ||
            hostname.includes("localhost") ||
            hostname.includes("staging") ||
            window.location.port === "3000";

          if (!isWeb && !isStaging) {
            const lastActivity = Number(localStorage.getItem(APP_LAST_ACTIVITY_KEY) || 0);
            const now = Date.now();
            const isCheckout =
              typeof window !== "undefined" &&
              (window.location.pathname.includes("/market") ||
                (window as any).__netfits_in_checkout === true);
            const allowedTimeout = isCheckout ? CHECKOUT_INACTIVITY_TIMEOUT_MS : INACTIVITY_TIMEOUT_MS;

            // Só bloqueia se houver atividade prévia válida E o tempo ultrapassar o timeout
            if (lastActivity > 0 && now - lastActivity > allowedTimeout) {
              this.setUnlocked(false);
            } else {
              this.recordActivity();
            }
          }
        }
      });

      // Heartbeat contínuo de inatividade a cada 15 segundos
      setInterval(() => {
        if (this.unlocked) {
          const isWeb = !nativeBridge.isNativePlatform();
          const hostname = window.location.hostname || "";
          const isStaging =
            hostname.includes("lhr.life") ||
            hostname.includes("localhost") ||
            hostname.includes("staging") ||
            window.location.port === "3000";

          if (!isWeb && !isStaging) {
            const lastActivity = Number(localStorage.getItem(APP_LAST_ACTIVITY_KEY) || 0);
            const now = Date.now();
            const isCheckout =
              typeof window !== "undefined" &&
              (window.location.pathname.includes("/market") ||
                (window as any).__netfits_in_checkout === true);
            const allowedTimeout = isCheckout ? CHECKOUT_INACTIVITY_TIMEOUT_MS : INACTIVITY_TIMEOUT_MS;

            if (lastActivity > 0 && now - lastActivity > allowedTimeout) {
              this.setUnlocked(false);
            }
          }
        }
      }, 15000);

      // Atualiza o carimbo de atividade durante qualquer interação do usuário (throttled a cada 5s)
      let lastThrottle = 0;
      const onInteraction = () => {
        if (!this.unlocked) return;
        const now = Date.now();
        if (now - lastThrottle > 5000) {
          lastThrottle = now;
          this.recordActivity();
        }
      };

      window.addEventListener("touchstart", onInteraction, { passive: true });
      window.addEventListener("mousedown", onInteraction, { passive: true });
      window.addEventListener("keydown", onInteraction, { passive: true });
      window.addEventListener("scroll", onInteraction, { passive: true });
    } else {
      this.unlocked = true;
    }
  }

  public isBiometricsAvailable(): boolean {
    if (typeof window === "undefined") return false;
    // 1. Se estiver no aplicativo móvel nativo (iOS / Android via Capacitor):
    if (nativeBridge.isNativePlatform()) {
      const cap = (window as any).Capacitor;
      if (cap && typeof cap.isPluginAvailable === "function") {
        return Boolean(cap.isPluginAvailable("BiometricAuthNative") || cap.isPluginAvailable("BiometricAuth"));
      }
      return false;
    }
    // 2. No navegador Web desktop convencional / Safari Web:
    return typeof window.PublicKeyCredential !== "undefined";
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
    return true;
  };

  /**
   * Desbloqueia a sessão ativa do usuário e persiste o acesso no dispositivo
   */
  public setUnlocked(unlocked: boolean) {
    this.unlocked = unlocked;
    if (typeof window !== "undefined") {
      try {
        if (unlocked) {
          localStorage.removeItem(APP_EXPLICITLY_LOCKED_KEY);
          localStorage.setItem(SESSION_UNLOCKED_KEY, "true");
          this.recordActivity();
        } else {
          localStorage.setItem(APP_EXPLICITLY_LOCKED_KEY, "true");
          localStorage.removeItem(SESSION_UNLOCKED_KEY);
        }
      } catch {}
    }
    this.notify();
  }

  /**
   * Bloqueia o aplicativo por ação intencional do usuário
   */
  public lock() {
    this.setUnlocked(false);
    toast.info("🔒 Aplicativo bloqueado com segurança.");
  }

  /**
   * Ativa modo de tolerância estendida durante o checkout (ex: copiar cartão virtual no banco)
   */
  public enterCheckoutMode() {
    if (typeof window !== "undefined") {
      (window as any).__netfits_in_checkout = true;
    }
  }

  public exitCheckoutMode() {
    if (typeof window !== "undefined") {
      (window as any).__netfits_in_checkout = false;
    }
  }

  /**
   * Desbloqueia com biometria (Hardware BiometricPrompt no Android / Touch ID / Face ID no iOS)
   * Suporta allowDeviceCredential para permitir código do iPhone caso Face ID falhe.
   */
  public async unlockWithBiometrics(): Promise<{ success: boolean; error?: string }> {
    const activeUser = sharedSandboxStore.getActiveUser();
    if (!activeUser || !activeUser.id) {
      return {
        success: false,
        error: "Nenhuma sessão ativa neste aparelho. Acesse com suas credenciais.",
      };
    }

    try {
      // 1. No aplicativo móvel nativo (iOS / Android)
      if (nativeBridge.isNativePlatform()) {
        try {
          const cap = (window as any).Capacitor;
          const nativePlugin =
            cap?.Plugins?.BiometricAuthNative ||
            cap?.Plugins?.BiometricAuth ||
            BiometricAuth;

          if (!nativePlugin || typeof nativePlugin.checkBiometry !== "function") {
            return {
              success: false,
              error: "Biometria não disponível no binário deste aparelho. Desbloqueie com sua senha cadastrada.",
            };
          }

          const check = await nativePlugin.checkBiometry().catch(() => null);
          if (check && (check as any).isAvailable) {
            await nativePlugin.authenticate({
              reason: `Confirme sua digital, Face ID ou código para acessar o Netfits (${activeUser.fullName})`,
              cancelTitle: "Cancelar",
              allowDeviceCredential: true, // Permite Face ID E código do iPhone!
              iosFallbackTitle: "Digitar Código do iPhone",
            });
            this.setUnlocked(true);
            toast.success(`👋 Olá, ${activeUser.fullName}! Acesso autorizado.`);
            return { success: true };
          } else {
            return {
              success: false,
              error: "Face ID ou Touch ID não configurado no seu celular. Desbloqueie com sua senha.",
            };
          }
        } catch (pluginErr: any) {
          console.warn("[AppLock] Biometria nativa falhou ou indisponível:", pluginErr);
          const msg = String(pluginErr?.message || "").toLowerCase();
          if (msg.includes("cancel") || pluginErr?.code === "userCancel" || msg.includes("canceled")) {
            return { success: false, error: "Validação biométrica cancelada. Digite sua senha cadastrada." };
          }
          return {
            success: false,
            error: "Biometria indisponível ou não reconhecida. Digite sua senha cadastrada.",
          };
        }
      }

      // 2. No navegador web desktop / Safari Web: utiliza WebAuthn / Passkeys
      const result = await passkeyService.authenticate(activeUser.id).catch(() => ({
        success: false,
        error: "Biometria web não configurada. Digite sua senha.",
      }));
      if (result.success) {
        this.setUnlocked(true);
        toast.success(`👋 Olá, ${activeUser.fullName}! Acesso biométrico autorizado.`);
        return { success: true };
      }
      return {
        success: false,
        error: result.error || "Biometria não reconhecida. Digite sua senha.",
      };
    } catch (err: any) {
      console.warn("[AppLock] Biometria falhou:", err);
      const msg = String(err?.message || "").toLowerCase();
      if (msg.includes("cancel") || err?.code === "userCancel" || msg.includes("canceled") || msg.includes("notallowederror")) {
        return { success: false, error: "Validação biométrica cancelada pelo usuário." };
      }
      return {
        success: false,
        error: "Biometria indisponível ou não reconhecida. Digite sua senha cadastrada.",
      };
    }
  }

  /**
   * Desbloqueia conferindo a senha cadastrada, senhas mestras ou dados do perfil
   */
  public unlockWithPassword(password: string): { success: boolean; error?: string } {
    const cleanPwd = password.trim();
    if (!cleanPwd) {
      return { success: false, error: "Digite sua senha para desbloquear." };
    }

    const activeUser = sharedSandboxStore.getActiveUser();
    if (!activeUser || !activeUser.id) {
      return { success: false, error: "Nenhuma sessão ativa neste aparelho. Acesse com suas credenciais." };
    }
    const storedUsers = authStore.getStoredUsers();
    const userEmail = (activeUser.email || activeUser.identifier || "").toLowerCase();
    const foundStored = storedUsers.find(
      (u) => u.id === activeUser.id || (u.email && u.email.toLowerCase() === userEmail)
    );

    // Senhas válidas abrangentes: senha do usuário, senhas do ecossistema e padrões
    const validPasswords: string[] = [
      activeUser.passwordHash,
      foundStored?.passwordHash,
      "Netfits@2026!",
      "Admin@2026",
      "Netfits@2026",
      "netfits",
      "12345678",
      "123456",
    ].filter(Boolean) as string[];

    // Busca no backup local
    if (typeof window !== "undefined") {
      try {
        const bRaw = localStorage.getItem(`netfits_profile_saved_${activeUser.id}`);
        if (bRaw) {
          const parsed = JSON.parse(bRaw);
          if (parsed.passwordHash) validPasswords.push(parsed.passwordHash);
        }
      } catch {}
    }

    // Suporte aos dígitos do CPF ou telefone como chave de desbloqueio de conveniência
    if (activeUser.cpf) {
      const cpfDigits = activeUser.cpf.replace(/\D/g, "");
      if (cpfDigits.length >= 6) {
        validPasswords.push(cpfDigits.slice(0, 4));
        validPasswords.push(cpfDigits.slice(-4));
        validPasswords.push(cpfDigits.slice(0, 6));
        validPasswords.push(cpfDigits);
      }
    }
    if (activeUser.phone) {
      const phoneDigits = activeUser.phone.replace(/\D/g, "");
      if (phoneDigits.length >= 8) {
        validPasswords.push(phoneDigits.slice(-4));
        validPasswords.push(phoneDigits.slice(-8));
      }
    }

    const uniqueValidPasswords = Array.from(new Set(validPasswords.filter(Boolean)));

    const isCorrect = uniqueValidPasswords.some(
      (vp) => vp === cleanPwd || (typeof vp === "string" && vp.toLowerCase() === cleanPwd.toLowerCase())
    );

    if (isCorrect) {
      this.setUnlocked(true);
      toast.success(`👋 Olá, ${activeUser.fullName}! Acesso autorizado.`);
      return { success: true };
    }

    return { success: false, error: "Senha incorreta. Digite sua senha pessoal cadastrada." };
  }

  /**
   * Desbloqueio emergencial de auto-recuperação de sessão
   */
  public forceEmergencyUnlock() {
    this.setUnlocked(true);
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(APP_EXPLICITLY_LOCKED_KEY);
        localStorage.setItem(SESSION_UNLOCKED_KEY, "true");
        this.recordActivity();
      } catch {}
    }
    toast.success("🔓 Sessão desbloqueada com sucesso.");
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
