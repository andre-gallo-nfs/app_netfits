import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "br.com.netfits.app",
  appName: "Netfits",
  webDir: "dist",
  bundledWebRuntime: false,
  server: {
    // Em produção, os arquivos web residem no pacote nativo do celular
    // com suporte a atualizações transparentes Over-The-Air (Capgo / Live Updates)
    androidScheme: "https",
    iosScheme: "https",
    allowNavigation: [
      "netfits.com.br",
      "*.vercel.app",
      "*.pages.dev",
      "*.supabase.co"
    ]
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    },
    SplashScreen: {
      launchShowDuration: 1500,
      launchAutoHide: true,
      backgroundColor: "#ffffff",
      androidSplashResourceName: "splash",
      showSpinner: false
    },
    StatusBar: {
      style: "DARK",
      backgroundColor: "#ffffff"
    },
    Biometric: {
      reason: "Autentique-se com Face ID / Digital para acessar sua conta Netfits"
    }
  }
};

export default config;
