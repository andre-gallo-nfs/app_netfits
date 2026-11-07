const fs = require('fs');

const path = 'C:\\Users\\aacga\\Projetos\\app_netfits\\src\\lib\\app-lock-store.ts';
let code = fs.readFileSync(path, 'utf8');

// Patch unlockWithBiometrics
const oldUnlock = `      // 1. No aplicativo móvel nativo (iOS / Android)
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
              error: "Biometria não disponível no binário deste aparelho. Desbloqueie com sua senha ou toque em Desbloquear Acesso.",
            };
          }

          const check = await nativePlugin.checkBiometry().catch(() => null);
          if (check && (check as any).isAvailable) {
            await nativePlugin.authenticate({
              reason: \`Confirme sua digital, Face ID ou código para acessar o Netfits (\${activeUser.fullName})\`,
              cancelTitle: "Cancelar",
              allowDeviceCredential: true, // Permite Face ID E código do iPhone!
              iosFallbackTitle: "Digitar Código do iPhone",
            });
            this.setUnlocked(true);
            toast.success(\`👋 Olá, \${activeUser.fullName}! Acesso autorizado.\`);
            return { success: true };
          } else {
            return {
              success: false,
              error: "Face ID ou Touch ID não configurado no seu celular. Desbloqueie com sua senha.",
            };
          }
        } catch (pluginErr: any) {`;

const newUnlock = `      // 1. No aplicativo móvel nativo (iOS / Android)
      if (nativeBridge.isNativePlatform()) {
        if (!this.isBiometricsAvailable()) {
          return {
            success: false,
            error: "Biometria nativa não suportada neste aparelho. Toque em 'Desbloquear e Acessar' ou digite sua senha.",
          };
        }

        try {
          const cap = (window as any).Capacitor;
          const nativePlugin =
            cap?.Plugins?.BiometricAuthNative ||
            cap?.Plugins?.BiometricAuth ||
            BiometricAuth;

          if (!nativePlugin || typeof nativePlugin.checkBiometry !== "function") {
            return {
              success: false,
              error: "Biometria não disponível no binário deste aparelho. Desbloqueie com sua senha ou toque em Desbloquear Acesso.",
            };
          }

          const checkPromise = nativePlugin.checkBiometry().catch(() => null);
          const timeoutPromise = new Promise((resolve) => setTimeout(() => resolve(null), 2500));
          const check = await Promise.race([checkPromise, timeoutPromise]);

          if (check && (check as any).isAvailable) {
            const authPromise = nativePlugin.authenticate({
              reason: \`Confirme sua digital, Face ID ou código para acessar o Netfits (\${activeUser.fullName})\`,
              cancelTitle: "Cancelar",
              allowDeviceCredential: true,
              iosFallbackTitle: "Digitar Código do iPhone",
            });
            const authTimeoutPromise = new Promise((_, reject) =>
              setTimeout(() => reject(new Error("Timeout")), 15000)
            );
            await Promise.race([authPromise, authTimeoutPromise]);

            this.setUnlocked(true);
            toast.success(\`👋 Olá, \${activeUser.fullName}! Acesso autorizado.\`);
            return { success: true };
          } else {
            return {
              success: false,
              error: "Face ID ou Touch ID não configurado no seu celular. Desbloqueie com sua senha.",
            };
          }
        } catch (pluginErr: any) {`;

if (code.includes('if (!nativePlugin || typeof nativePlugin.checkBiometry !== "function")')) {
  code = code.replace(oldUnlock, newUnlock);
  fs.writeFileSync(path, code, 'utf8');
  console.log('Successfully updated unlockWithBiometrics in app-lock-store.ts');
} else {
  console.error('Could not find oldUnlock in app-lock-store.ts');
}
