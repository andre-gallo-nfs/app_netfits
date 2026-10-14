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
const INACTIVITY_TIMEOUT_MS = 5 * 60 * 1000; // 5 minutos sem uso (300 segundos)
const CHECKOUT_INACTIVITY_TIMEOUT_MS = 10 * 60 * 1000; // 10 minutos em checkout

class AppLockStore {
  private unlocked: boolean = false;
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
        const explicitlyLocked = localStorage.getItem(APP_EXPLICITLY_LOCKED_KEY) === "true";
        const sessionUnlocked = localStorage.getItem(SESSION_UNLOCKED_KEY) === "true";
        const lastActivityRaw = localStorage.getItem(APP_LAST_ACTIVITY_KEY);
        const lastActivity = Number(lastActivityRaw || 0);
        const now = Date.now();
        const isCheckout =
          window.location.pathname.includes("/market") ||
          (window as any).__netfits_in_checkout === true;
        const allowedTimeout = isCheckout ? CHECKOUT_INACTIVITY_TIMEOUT_MS : INACTIVITY_TIMEOUT_MS;

        // Se bloqueado explicitamente, sem sessão desbloqueada, sem carimbo prévio ou se inativo > 5 min:
        if (explicitlyLocked || !sessionUnlocked || !lastActivityRaw || lastActivity === 0) {
          this.unlocked = false;
        } else if (now - lastActivity > allowedTimeout) {
          // Mais de 5 minutos sem uso: exige autenticação biométrica ou por senha
          this.unlocked = false;
        } else {
          // Dentro dos 5 minutos E com autenticação prévia válida: mantém fluido
          this.unlocked = true;
          this.recordActivity();
        }
      } catch {
        this.unlocked = false;
      }

      // Ao suspender/minimizar o app ou alternar telas/abas:
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          // Quando o app é minimizado ou a tela apaga, carimba o momento exato se estiver desbloqueado
          if (this.unlocked) {
            this.recordActivity();
          }
        } else {
          // Ao retornar para o app, verifica se ultrapassou o timer de inatividade de 5 minutos
          const lastActivity = Number(localStorage.getItem(APP_LAST_ACTIVITY_KEY) || 0);
          const now = Date.now();
          const isCheckout =
            typeof window !== "undefined" &&
            (window.location.pathname.includes("/market") ||
              (window as any).__netfits_in_checkout === true);
          const allowedTimeout = isCheckout ? CHECKOUT_INACTIVITY_TIMEOUT_MS : INACTIVITY_TIMEOUT_MS;

          if (lastActivity === 0 || now - lastActivity > allowedTimeout) {
            this.setUnlocked(false);
          } else {
            this.recordActivity();
          }
        }
      });

      // Heartbeat contínuo de inatividade em tempo real (mesmo com a tela aberta sem minimizar)
      // Se o usuário ficar 5 minutos sem qualquer interação, bloqueia automaticamente na tela
      setInterval(() => {
        if (this.unlocked) {
          const lastActivity = Number(localStorage.getItem(APP_LAST_ACTIVITY_KEY) || 0);
          const now = Date.now();
          const isCheckout =
            typeof window !== "undefined" &&
            (window.location.pathname.includes("/market") ||
              (window as any).__netfits_in_checkout === true);
          const allowedTimeout = isCheckout ? CHECKOUT_INACTIVITY_TIMEOUT_MS : INACTIVITY_TIMEOUT_MS;

          if (lastActivity === 0 || now - lastActivity > allowedTimeout) {
            this.setUnlocked(false);
          }
        }
      }, 5000);

      // Atualiza o carimbo de atividade durante a interação natural do usuário (throttled a cada 10s)
      let lastThrottle = 0;
      const onInteraction = () => {
        if (!this.unlocked) return; // Se estiver bloqueado, toques não contam como atividade de sessão
        const now = Date.now();
        if (now - lastThrottle > 10000) {
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
   * Bloqueia o aplicativo apenas por ação intencional do usuário
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
   * Desbloqueia com biometria (Hardware BiometricPrompt no Android / Touch ID / Face ID)
   * Possui proteção rigorosa de Timeout e detecção de versão instalada para NUNCA travar a tela.
   */
  public async unlockWithBiometrics(): Promise<{ success: boolean; error?: string }> {
    const activeUser = sharedSandboxStore.getActiveUser();
    if (!activeUser || !activeUser.id) {
      return {
        success: false,
        error: "Nenhuma sessão ativa neste aparelho. Acesse com suas credenciais.",
      };
    }

    // Guardião de Timeout: se qualquer chamada de hardware demorar mais de 6s, aborta
    const withTimeout = <T>(promise: Promise<T>, timeoutMs = 6000): Promise<T> => {
      return Promise.race([
        promise,
        new Promise<T>((_, reject) =>
          setTimeout(() => reject(new Error("TIMEOUT_SENSOR")), timeoutMs)
        ),
      ]);
    };

    try {
      // 1. No aplicativo móvel (Android / iOS)
      if (nativeBridge.isNativePlatform()) {
        // Checar se o APK instalado no celular já possui o plugin nativo compilado (v1.0.4+)
        const hasNativePlugin =
          typeof Capacitor !== "undefined" &&
          (Capacitor.isPluginAvailable("BiometricAuthNative") ||
            Capacitor.isPluginAvailable("BiometricAuth"));

        if (!hasNativePlugin) {
          return {
            success: false,
            error:
              "O leitor de biometria nativo exige a versão 1.0.4 da Google Play Store. Por favor, digite sua senha para entrar agora.",
          };
        }

        const check = await withTimeout(BiometricAuth.checkBiometry(), 3000);
        if (!check || !check.isAvailable) {
          return {
            success: false,
            error:
              "Sensor biométrico não cadastrado nas configurações do seu celular. Desbloqueie com sua senha.",
          };
        }

        // Abre o diálogo nativo do Android / iOS (BiometricPrompt)
        await withTimeout(
          BiometricAuth.authenticate({
            reason: `Confirme sua digital ou Face ID para acessar sua conta Netfits (${activeUser.fullName})`,
            cancelTitle: "Cancelar",
          }),
          8000
        );

        this.setUnlocked(true);
        toast.success(`👋 Olá, ${activeUser.fullName}! Acesso biométrico autorizado.`);
        return { success: true };
      }

      // 2. No navegador web desktop
      const result = await withTimeout(passkeyService.authenticate(activeUser.id), 5000);
      if (result.success) {
        this.setUnlocked(true);
        toast.success(`👋 Olá, ${activeUser.fullName}! Acesso liberado.`);
        return { success: true };
      }
      return { success: false, error: result.error || "Biometria não reconhecida." };
    } catch (err: any) {
      console.warn("[AppLock] Biometria falhou ou expirou:", err);
      const msg = String(err?.message || "").toLowerCase();
      if (msg.includes("timeout")) {
        return {
          success: false,
          error:
            "O sensor biométrico demorou para responder. Por favor, desbloqueie com sua senha cadastrada.",
        };
      }
      if (msg.includes("cancel") || err?.code === "userCancel" || msg.includes("canceled")) {
        return { success: false, error: "Validação biométrica cancelada pelo usuário." };
      }
      return {
        success: false,
        error: "Biometria não reconhecida. Tente novamente ou digite sua senha cadastrada.",
      };
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
    if (!activeUser || !activeUser.id) {
      return { success: false, error: "Nenhuma sessão ativa neste aparelho. Acesse com suas credenciais." };
    }
    const storedUsers = authStore.getStoredUsers();
    const userEmail = (activeUser.email || activeUser.identifier || "").toLowerCase();
    const foundStored = storedUsers.find(
      (u) => u.id === activeUser.id || (u.email && u.email.toLowerCase() === userEmail)
    );

    // Senhas válidas: estritamente a senha cadastrada do próprio usuário ativo
    const validPasswords: string[] = [
      activeUser.passwordHash,
      foundStored?.passwordHash,
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
}

export const appLockStore = new AppLockStore();

export function useAppLock(): boolean {
  return useSyncExternalStore(
    (fn) => appLockStore.subscribe(fn),
    appLockStore.getSnapshot,
    appLockStore.getServerSnapshot
  );
}
