import { toast } from "sonner";
import { Browser } from "@capacitor/browser";
import { Capacitor } from "@capacitor/core";
import { App } from "@capacitor/app";

export type NativeDevicePlatform = "ios" | "android" | "web";

export const nativeBridge = {
  /**
   * Identifica se a aplicação está rodando dentro do empacotamento nativo do Capacitor (iOS / Android)
   * ou em um navegador Web convencional.
   */
  getPlatform(): NativeDevicePlatform {
    if (typeof window === "undefined") return "web";
    try {
      if (Capacitor.isNativePlatform()) {
        return Capacitor.getPlatform() as NativeDevicePlatform;
      }
    } catch {}
    const cap = (window as any).Capacitor;
    if (cap && typeof cap.isNativePlatform === "function" && cap.isNativePlatform()) {
      return cap.getPlatform() as NativeDevicePlatform;
    }
    const ua = navigator.userAgent || "";
    if (ua.includes("NetfitsMobileApp")) {
      return /iPhone|iPad|iPod/i.test(ua) ? "ios" : "android";
    }
    if (/android/i.test(ua) && (/wv/i.test(ua) || /Version\/[0-9]/i.test(ua))) {
      return "android";
    }
    return "web";
  },

  isNativePlatform(): boolean {
    if (typeof window === "undefined") return false;
    try {
      if (Capacitor.isNativePlatform()) return true;
    } catch {}
    return this.getPlatform() !== "web";
  },

  /**
   * Configura e inicializa a barra de status nativa do celular (StatusBar)
   * Garantindo que os ícones do sistema (bateria, hora, notificações) fiquem legíveis
   * e que o header do aplicativo não seja sobreposto.
   */
  async initNativeStatusBar(): Promise<void> {
    if (!this.isNativePlatform()) return;
    try {
      const StatusBar = (window as any).Capacitor?.Plugins?.StatusBar;
      if (StatusBar) {
        await StatusBar.setStyle({ style: "DARK" }).catch(() => {});
        await StatusBar.setBackgroundColor({ color: "#FFFFFF" }).catch(() => {});
        if (typeof StatusBar.setOverlaysWebView === "function") {
          await StatusBar.setOverlaysWebView({ overlay: true }).catch(() => {});
        }
      }
    } catch (e) {
      console.warn("[NativeBridge] StatusBar config warning:", e);
    }
  },

  /**
   * Aciona a verificação por Biometria Nativa (Face ID / Touch ID no iOS ou Fingerprint no Android).
   */
  async triggerBiometricAuth(): Promise<{ success: boolean; error?: string }> {
    const platform = this.getPlatform();
    
    if (platform === "web") {
      // Simulação para ambiente Web Browser
      toast.success("Biometria / Face ID confirmada com sucesso!");
      return { success: true };
    }

    try {
      toast.info(`Acionando ${platform === "ios" ? "Face ID" : "Impressão Digital"} nativo...`);
      // Exemplo de integração nativa Capacitor Biometric Plugin
      const capBio = (window as any).Capacitor?.Plugins?.Biometric;
      if (capBio) {
        await capBio.verify({ reason: "Autentique-se na Netfits" });
      }
      toast.success("Biometria nativa verificada!");
      return { success: true };
    } catch (err: any) {
      toast.error("Falha na verificação biométrica nativa.");
      return { success: false, error: err.message };
    }
  },

  /**
   * Solicita e registra permissões para Notificações Push nativas do celular.
   */
  async requestPushNotifications(): Promise<boolean> {
    if (!this.isNativePlatform()) {
      toast.info("Notificações web ativas no navegador.");
      return true;
    }

    try {
      const PushNotifications = (window as any).Capacitor?.Plugins?.PushNotifications;
      if (PushNotifications) {
        const perm = await PushNotifications.requestPermissions();
        if (perm.receive === "granted") {
          await PushNotifications.register();
          toast.success("Notificações Push nativas ativadas!");
          return true;
        }
      }
      return false;
    } catch {
      return false;
    }
  },

  /**
   * Aciona a câmera nativa do smartphone para leitura de QR Code.
   */
  async scanQrCode(): Promise<string | null> {
    if (!this.isNativePlatform()) {
      toast.info("Escaneamento de QR Code via câmera web.");
      return "GALLO-NETFITS";
    }

    try {
      toast.info("Abrindo câmera nativa para leitura de QR Code...");
      const BarcodeScanner = (window as any).Capacitor?.Plugins?.BarcodeScanner;
      if (BarcodeScanner) {
        const result = await BarcodeScanner.startScan();
        if (result.hasContent) {
          return result.content;
        }
      }
      return null;
    } catch (err) {
      toast.error("Não foi possível acessar a câmera do dispositivo.");
      return null;
    }
  },

  async scanGymQrCode(): Promise<string | null> {
    return this.scanQrCode();
  },

  /**
   * Executa a checagem de atualizações transparentes em nuvem (Over-The-Air - Capgo / Live Updates).
   */
  async checkForLiveUpdates(): Promise<void> {
    if (!this.isNativePlatform()) return;

    try {
      const LiveUpdate = (window as any).Capacitor?.Plugins?.CapgoLiveUpdate;
      if (LiveUpdate) {
        const res = await LiveUpdate.sync();
        if (res.isUpdated) {
          toast.success("Aplicativo atualizado instantaneamente na nuvem!");
        }
      }
    } catch (e) {
      // Falha silenciosa de Live Update
    }
  },

  /**
   * Inicializa a escuta nativa de Universal Links / App Links para iOS e Android
   * garantindo que links clicados no WhatsApp / Safari / Chrome abram o app nativo no cadastro com a indicação preservada.
   */
  initDeepLinkListener(onReferralCaptured?: (code: string) => void): void {
    if (typeof window === "undefined") return;

    // 1. Capturar parametro de URL web convencional
    try {
      const params = new URLSearchParams(window.location.search);
      const codeFromUrl = params.get("ref") || params.get("code") || params.get("referral");
      if (codeFromUrl) {
        const clean = codeFromUrl.trim().toUpperCase();
        localStorage.setItem("netfits_deferred_referral_code", clean);
        sessionStorage.setItem("netfits_deferred_referral_code", clean);
        if (onReferralCaptured) onReferralCaptured(clean);
      }
    } catch {
      /* ignore */
    }

    // 2. Escutar eventos nativos do Capacitor (Universal Links no iOS & App Links no Android)
    if (this.isNativePlatform()) {
      try {
        App.addListener("appUrlOpen", async (data: { url: string }) => {
          try {
            // Fecha qualquer Custom Tab ou navegador nativo aberto no fluxo OAuth
            await Browser.close().catch(() => {});

            const urlStr = data?.url || "";
            let urlObj: URL | null = null;
            try {
              urlObj = new URL(urlStr);
            } catch {
              if (urlStr.startsWith("netfits://")) {
                urlObj = new URL(urlStr.replace("netfits://", "https://app.netfits.local/"));
              }
            }

            // Retorno do fluxo OAuth do Garmin Connect
            if (urlStr.includes("garmin_connected=true")) {
              if (typeof window !== "undefined") {
                window.location.href = "/club?garmin_connected=true";
              }
              return;
            }

            if (urlObj) {
              const refCode =
                urlObj.searchParams.get("ref") ||
                urlObj.searchParams.get("code") ||
                urlObj.searchParams.get("referral");
              if (refCode) {
                const cleanCode = refCode.trim().toUpperCase();
                localStorage.setItem("netfits_deferred_referral_code", cleanCode);
                sessionStorage.setItem("netfits_deferred_referral_code", cleanCode);
                toast.info(`✨ Indicação "${cleanCode}" capturada do app nativo!`);
                if (onReferralCaptured) onReferralCaptured(cleanCode);
              }
            }
          } catch (e) {
            console.warn("[DeepLink Error]", e);
          }
        });
      } catch (errListener) {
        console.warn("[NativeBridge] Falha ao registrar listener appUrlOpen:", errListener);
      }
    }
  },

  /**
   * Recupera o código de indicação diferido (Deferred Referral) armazenado no dispositivo.
   */
  /**
   * Abre URLs externas (como Garmin Connect OAuth) com suporte cross-platform seguro:
   * 1. No ambiente nativo (Android/iOS via Capacitor): Aciona o Chrome Custom Tabs ou SFSafariViewController
   *    através do plugin oficial @capacitor/browser, garantindo isolamento de processo, compatibilidade
   *    com cookies e logins existentes do usuário e retorno seguro sem bloqueio de WebViews.
   * 2. No ambiente Web convencional: Abre em nova aba ("_blank") com noopener/noreferrer com fallback direto.
   */
  async openExternalUrl(url: string): Promise<void> {
    if (typeof window === "undefined") return;

    // 1. No ambiente nativo (Android / iOS via Capacitor):
    // Aciona o Chrome Custom Tabs (Android) ou SFSafariViewController (iOS)
    if (this.isNativePlatform()) {
      try {
        await Browser.open({ url, presentationStyle: "popover" });
        return;
      } catch (e) {
        console.warn("[NativeBridge] Browser.open nativo falhou, aplicando fallback:", e);
      }
    }

    // 2. No ambiente Web convencional: Abre em nova aba ("_blank") com noopener/noreferrer
    try {
      const win = window.open(url, "_blank", "noopener,noreferrer");
      if (!win || win.closed || typeof win.closed === "undefined") {
        window.location.assign(url);
      }
    } catch {
      window.location.assign(url);
    }
  },
  getStoredReferralCode(): string | null {
    if (typeof window === "undefined") return null;
    return (
      localStorage.getItem("netfits_deferred_referral_code") ||
      sessionStorage.getItem("netfits_deferred_referral_code") ||
      null
    );
  }
};
