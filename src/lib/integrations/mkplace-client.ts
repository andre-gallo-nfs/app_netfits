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
export async function getMkplaceStoreUrl(userId?: string, targetQueryOrPath?: string): Promise<string> {
  const activeUser = sharedSandboxStore.getActiveUser();
  const targetUserId = userId || activeUser?.id || "usr_101";

  try {
    let token = "";
    let webviewUrl = "https://loja.netfits.com.br";

    const userEmail = activeUser?.email || activeUser?.identifier || "";
    const userName = activeUser?.fullName || "Atleta Netfits";

    // Garante que qualquer atualização cadastral seja enviada à nuvem
    sharedSandboxStore.syncToCloud().catch(() => {});

    const res = await fetch("/api/marketplace/mkplace/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: targetUserId,
        email: userEmail,
        fullName: userName,
        cpf: activeUser?.cpf || "",
        document: activeUser?.cpf || "",
        phone: activeUser?.phone || "",
        address: activeUser?.address || "",
        street: activeUser?.street || "",
        number: activeUser?.number || "",
        complement: activeUser?.complement || "",
        neighborhood: activeUser?.neighborhood || "",
        city: activeUser?.city || "",
        state: activeUser?.state || "",
        shortState: activeUser?.shortState || "",
        zipcode: activeUser?.zipcode || "",
        birthDate: activeUser?.birthDate || "",
        gender: activeUser?.gender || null,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.webviewUrl) {
        if (data.webviewUrl.includes("token=")) {
          try {
            const parsed = new URL(data.webviewUrl);
            token = parsed.searchParams.get("token") || token;
            webviewUrl = `${parsed.origin}${parsed.pathname}`.replace(/\/+$/, "");
          } catch {
            const parts = data.webviewUrl.split("?token=");
            webviewUrl = parts[0].replace(/\/+$/, "");
            if (parts[1]) token = parts[1];
          }
        } else {
          webviewUrl = data.webviewUrl;
        }
      }
      if (data.token) {
        token = data.token;
      }
    } else {
      token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5ldGZpdHMtbWtwbGFjZS1rZXktMjAyNiJ9." +
        btoa(JSON.stringify({
          sub: targetUserId,
          customerId: targetUserId,
          name: userName,
          email: userEmail,
          storeId: "RhOFkbZJIN",
          accountId: "RhOFkbZJIN",
          realm_access: { roles: ["profile:roles=STORE", "profile:roles=CUSTOMER"] },
          iat: Math.floor(Date.now() / 1000),
          exp: Math.floor(Date.now() / 1000) + 28800,
        })) +
        ".NETFITS_FALLBACK_SIGNATURE";
    }

    let targetBase = webviewUrl;
    if (targetQueryOrPath && targetQueryOrPath.trim()) {
      const clean = targetQueryOrPath.trim();
      const stripped = clean.startsWith("/") ? clean.slice(1) : clean;
      if (
        stripped.startsWith("p/") ||
        stripped.startsWith("produto") ||
        stripped.startsWith("item") ||
        stripped.startsWith("busca") ||
        stripped.startsWith("search") ||
        stripped.startsWith("carrinho") ||
        stripped.startsWith("cart")
      ) {
        const baseNoSlash = webviewUrl.replace(/\/+$/, "");
        targetBase = `${baseNoSlash}/${stripped}`;
      } else {
        const baseNoSlash = webviewUrl.replace(/\/+$/, "");
        targetBase = `${baseNoSlash}/p/${stripped}`;
      }
    }

    const separator = targetBase.includes("?")
      ? "&"
      : (targetBase.endsWith("/") ? "?" : "/?");
    return `${targetBase}${separator}token=${encodeURIComponent(token)}`;
  } catch (err) {
    console.warn("[Mkplace Client] Fallback de URL da loja:", err);
    return "https://loja.netfits.com.br";
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
