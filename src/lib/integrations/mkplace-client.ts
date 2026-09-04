import { toast } from "sonner";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { nativeBridge } from "@/lib/native-bridge";

export interface LaunchShopOptions {
  newTab?: boolean;
  userId?: string;
  silent?: boolean;
}

/**
 * Utilitário cliente para disparo de sessão Single Sign-On (SSO)
 * e abertura imediata do catálogo oficial da Rock Encantech (Mkplace).
 */
export async function launchMkplaceShop(options: LaunchShopOptions = {}) {
  const activeUser = sharedSandboxStore.getActiveUser();
  const targetUserId = options.userId || activeUser?.id || "usr_101";

  if (!options.silent) {
    toast.info("Conectando à Loja Oficial Netfits...", {
      description: "Sincronizando saldo de pontos e dados de entrega via Rock Encantech.",
      duration: 3500,
    });
  }

  try {
    let token = "";
    let webviewUrl = "https://docs.apps.mkplace.com.br";

    // 1. Tenta obter o token gerado pelo servidor oficial da Netfits
    const res = await fetch("/api/marketplace/mkplace/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: targetUserId }),
    });

    if (res.ok) {
      const data = await res.json();
      token = data.token;
      if (data.webviewUrl) {
        webviewUrl = data.webviewUrl;
      }
    } else {
      // Fallback local se estiver offline ou em simulação
      token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5ldGZpdHMtbWtwbGFjZS1rZXktMjAyNiJ9." +
        btoa(JSON.stringify({
          sub: targetUserId,
          customerId: targetUserId,
          storeId: "netfits_store_01",
          accountId: "netfits_acc_brazil",
          realm_access: { roles: ["profile:roles=STORE", "profile:roles=CUSTOMER"] },
          iat: Math.floor(Date.now() / 1000),
          exp: Math.floor(Date.now() / 1000) + 28800,
        })) +
        ".NETFITS_FALLBACK_SIGNATURE";
    }

    // 2. Monta a URL de destino com o token SSO acoplado
    const separator = webviewUrl.includes("?") ? "&" : "?";
    const finalUrl = `${webviewUrl}${separator}token=${encodeURIComponent(token)}`;

    // 3. Verifica se está rodando em app nativo Capacitor (iOS / Android)
    const isNative = nativeBridge.isNativePlatform();

    if (isNative) {
      // Em ambiente nativo, abre via Browser nativo / In-App WebView
      const capBrowser = (window as any).Capacitor?.Plugins?.Browser;
      if (capBrowser && typeof capBrowser.open === "function") {
        await capBrowser.open({ url: finalUrl, presentationStyle: "popover" });
        return;
      }
    }

    // 4. Em ambiente Web convencional, abre em nova aba (ou mesma janela se solicitado)
    if (typeof window !== "undefined") {
      const target = options.newTab === false ? "_self" : "_blank";
      window.open(finalUrl, target, "noopener,noreferrer");
    }
  } catch (err: any) {
    console.error("[Mkplace Client] Erro ao abrir loja parceira:", err);
    // Em caso de falha de rede, abre a URL base diretamente
    if (typeof window !== "undefined") {
      window.open("https://docs.apps.mkplace.com.br", "_blank", "noopener,noreferrer");
    }
  }
}
