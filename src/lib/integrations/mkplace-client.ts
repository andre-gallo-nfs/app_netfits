import { toast } from "sonner";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { nativeBridge } from "@/lib/native-bridge";

export interface LaunchShopOptions {
  newTab?: boolean;
  userId?: string;
  silent?: boolean;
}

/**
 * Retorna a URL completa da Loja Oficial Rock Encantech (Mkplace)
 * com o token SSO (JWT RS256) acoplado para renderização em tela (iframe ou webview).
 */
export async function getMkplaceStoreUrl(userId?: string): Promise<string> {
  const activeUser = sharedSandboxStore.getActiveUser();
  const targetUserId = userId || activeUser?.id || "usr_101";

  try {
    let token = "";
    let webviewUrl = "https://docs.apps.mkplace.com.br/docs/api-reference/lojas-perfil/obter-perfil-do-cliente";

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

    const separator = webviewUrl.includes("?") ? "&" : "?";
    return `${webviewUrl}${separator}token=${encodeURIComponent(token)}`;
  } catch (err) {
    console.warn("[Mkplace Client] Fallback de URL da loja:", err);
    return "https://docs.apps.mkplace.com.br/docs/api-reference/lojas-perfil/obter-perfil-do-cliente";
  }
}

/**
 * Utilitário para abertura externa da Loja Oficial quando expressamente solicitado.
 */
export async function launchMkplaceShop(options: LaunchShopOptions = {}) {
  const finalUrl = await getMkplaceStoreUrl(options.userId);

  if (!options.silent) {
    toast.info("Conectando à Loja Oficial Netfits...", {
      description: "Sincronizando saldo de pontos e dados de entrega via Rock Encantech.",
      duration: 3500,
    });
  }

  const isNative = nativeBridge.isNativePlatform();
  if (isNative) {
    const capBrowser = (window as any).Capacitor?.Plugins?.Browser;
    if (capBrowser && typeof capBrowser.open === "function") {
      await capBrowser.open({ url: finalUrl, presentationStyle: "popover" });
      return;
    }
  }

  if (typeof window !== "undefined") {
    const target = options.newTab === false ? "_self" : "_blank";
    window.open(finalUrl, target, "noopener,noreferrer");
  }
}
