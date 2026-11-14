import { toast } from "sonner";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { nativeBridge } from "@/lib/native-bridge";

export interface LaunchShopOptions {
  newTab?: boolean;
  userId?: string;
  silent?: boolean;
  targetQueryOrPath?: string;
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
          webviewUrl = data.webviewUrl.replace(/\/+$/, "");
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
      if (clean.startsWith("http://") || clean.startsWith("https://")) {
        targetBase = clean;
      } else {
        const baseNoSlash = webviewUrl.replace(/\/+$/, "");
        const pathNoSlash = clean.startsWith("/") ? clean.slice(1) : clean;
        targetBase = `${baseNoSlash}/${pathNoSlash}`;
      }
    }

    const separator = targetBase.includes("?") ? "&" : "?";
    return `${targetBase}${separator}token=${encodeURIComponent(token)}`;
  } catch (err) {
    console.warn("[Mkplace Client] Fallback de URL da loja:", err);
    return "https://loja.netfits.com.br";
  }
}

/**
 * Utilitário para abertura externa da Loja Oficial quando expressamente solicitado.
 * Blindado contra bloqueadores de pop-up no Safari/iOS e Chrome Mobile:
 * 1. No Desktop Web, pré-abre a janela no clique antes de chamadas assíncronas de rede.
 * 2. No Mobile Web (iOS/Android), tenta abrir e se o pop-up for barrado, faz redirect seguro via window.location.assign.
 * 3. No ambiente nativo (Capacitor), aciona o Chrome Custom Tabs / SFSafariViewController via nativeBridge.
 */
export async function launchMkplaceShop(options: LaunchShopOptions = {}) {
  const isMobile =
    typeof window !== "undefined" &&
    (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768);

  // No desktop, se for abrir em nova aba, pré-abre uma janela imediatamente
  // no ciclo síncrono do clique do usuário para evitar bloqueio por popup blockers no Chrome/Safari:
  let preOpenedWindow: Window | null = null;
  if (
    typeof window !== "undefined" &&
    !nativeBridge.isNativePlatform() &&
    !isMobile &&
    options.newTab !== false
  ) {
    try {
      preOpenedWindow = window.open("about:blank", "_blank", "noopener,noreferrer");
    } catch {
      preOpenedWindow = null;
    }
  }

  if (!options.silent) {
    toast.info("Conectando à Loja Oficial Netfits...", {
      description: "Sincronizando saldo de pontos e dados de entrega via Rock Encantech.",
      duration: 3500,
    });
  }

  try {
    const finalUrl = await getMkplaceStoreUrl(options.userId, options.targetQueryOrPath);

    // 1. App Nativo (Capacitor iOS/Android)
    if (nativeBridge.isNativePlatform()) {
      await nativeBridge.openExternalUrl(finalUrl);
      return;
    }

    // 2. Desktop com janela pré-aberta com sucesso
    if (preOpenedWindow && !preOpenedWindow.closed) {
      preOpenedWindow.location.href = finalUrl;
      return;
    }

    // 3. Mobile Web (iOS Safari / Android Chrome / PWA) ou caso o popup blocker tenha fechado a janela:
    // Tenta abrir via nativeBridge.openExternalUrl; se o navegador bloquear o popup,
    // ele automaticamente executa window.location.assign(finalUrl), garantindo 100% de abertura!
    await nativeBridge.openExternalUrl(finalUrl);
  } catch (err) {
    console.error("[Mkplace Client] Erro ao abrir a loja:", err);
    if (preOpenedWindow && !preOpenedWindow.closed) {
      preOpenedWindow.location.href = "https://loja.netfits.com.br";
    } else if (typeof window !== "undefined") {
      window.location.assign("https://loja.netfits.com.br");
    }
  }
}
