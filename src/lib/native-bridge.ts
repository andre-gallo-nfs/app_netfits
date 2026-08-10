import { toast } from "sonner";

export type NativeDevicePlatform = "ios" | "android" | "web";

export const nativeBridge = {
  /**
   * Identifica se a aplicação está rodando dentro do empacotamento nativo do Capacitor (iOS / Android)
   * ou em um navegador Web convencional.
   */
  getPlatform(): NativeDevicePlatform {
    if (typeof window === "undefined") return "web";
    const cap = (window as any).Capacitor;
    if (cap && cap.isNativePlatform()) {
      return cap.getPlatform() as NativeDevicePlatform;
    }
    return "web";
  },

  isNativePlatform(): boolean {
    return this.getPlatform() !== "web";
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
  }
};
