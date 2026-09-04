import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useWallet, s as sharedSandboxStore, e as nativeBridge } from "./router-ik3cNqf7.mjs";
import { Z as Zap, j as ShieldCheck, ak as CircleAlert, I as RefreshCw, E as ExternalLink } from "../_libs/lucide-react.mjs";

import "../_libs/react-dom.mjs";
import "../_libs/unenv.mjs";




import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";

import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
async function getMkplaceStoreUrl(userId) {
  const activeUser = sharedSandboxStore.getActiveUser();
  const targetUserId = userId || activeUser?.id || "usr_101";
  try {
    let token = "";
    let webviewUrl = "https://docs.apps.mkplace.com.br/docs/api-reference/lojas-perfil/obter-perfil-do-cliente";
    const res = await fetch("/api/marketplace/mkplace/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: targetUserId })
    });
    if (res.ok) {
      const data = await res.json();
      token = data.token;
      if (data.webviewUrl) {
        webviewUrl = data.webviewUrl;
      }
    } else {
      token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5ldGZpdHMtbWtwbGFjZS1rZXktMjAyNiJ9." + btoa(JSON.stringify({
        sub: targetUserId,
        customerId: targetUserId,
        storeId: "netfits_store_01",
        accountId: "netfits_acc_brazil",
        realm_access: { roles: ["profile:roles=STORE", "profile:roles=CUSTOMER"] },
        iat: Math.floor(Date.now() / 1e3),
        exp: Math.floor(Date.now() / 1e3) + 28800
      })) + ".NETFITS_FALLBACK_SIGNATURE";
    }
    const separator = webviewUrl.includes("?") ? "&" : "?";
    return `${webviewUrl}${separator}token=${encodeURIComponent(token)}`;
  } catch (err) {
    console.warn("[Mkplace Client] Fallback de URL da loja:", err);
    return "https://docs.apps.mkplace.com.br/docs/api-reference/lojas-perfil/obter-perfil-do-cliente";
  }
}
async function launchMkplaceShop(options = {}) {
  const finalUrl = await getMkplaceStoreUrl(options.userId);
  if (!options.silent) {
    toast.info("Conectando à Loja Oficial Netfits...", {
      description: "Sincronizando saldo de pontos e dados de entrega via Rock Encantech.",
      duration: 3500
    });
  }
  const isNative = nativeBridge.isNativePlatform();
  if (isNative) {
    const capBrowser = window.Capacitor?.Plugins?.Browser;
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
function MarketEmbeddedPage() {
  const {
    balance
  } = useWallet();
  const activeUser = sharedSandboxStore.useActiveUser();
  const [storeUrl, setStoreUrl] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [hasError, setHasError] = reactExports.useState(false);
  const [reloadKey, setReloadKey] = reactExports.useState(0);
  const iframeRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setHasError(false);
    getMkplaceStoreUrl(activeUser.id).then((url) => {
      if (isMounted) {
        setStoreUrl(url);
      }
    }).catch(() => {
      if (isMounted) {
        setHasError(true);
        setIsLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [activeUser.id, reloadKey]);
  const handleRefresh = () => {
    setIsLoading(true);
    setReloadKey((prev) => prev + 1);
    toast.success("Recarregando catálogo da Loja Oficial...");
  };
  const handleOpenExternal = () => {
    launchMkplaceShop({
      userId: activeUser.id
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-[calc(100dvh-116px)] bg-zinc-950 select-none overflow-hidden", children: [
    isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-zinc-950 z-10 flex flex-col items-center justify-center p-6 text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-2xl bg-purple-600/20 border border-purple-500/30 grid place-items-center animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "size-7 text-purple-400" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 -right-1 size-5 rounded-full bg-lime-400 text-zinc-950 font-black text-[9px] grid place-items-center shadow-lg", children: "SSO" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white", children: "Conectando à Loja Oficial Netfits..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-400 max-w-xs", children: [
          "Carregando catálogo da Rock Encantech com saldo de ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-lime-400", children: [
            balance.toLocaleString(),
            " nfs"
          ] }),
          " e endereço sincronizado."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[10px] text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-3.5 text-emerald-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Autenticação RS256 Segura" })
      ] })
    ] }),
    storeUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { ref: iframeRef, src: storeUrl, title: "Loja Oficial Netfits — Rock Encantech", className: "w-full h-full border-0 bg-white", allow: "clipboard-write; payment; geolocation; camera", onLoad: () => setIsLoading(false), onError: () => {
      setHasError(true);
      setIsLoading(false);
    } }),
    hasError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-zinc-950 z-20 flex flex-col items-center justify-center p-6 text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-full bg-red-500/20 text-red-400 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "size-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white", children: "Não foi possível carregar o catálogo embutido" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400 max-w-xs", children: "Verifique sua conexão ou clique abaixo para tentar novamente ou acessar externamente." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: handleRefresh, className: "px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-xs flex items-center gap-1.5 border border-zinc-700 transition active:scale-95", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "size-3.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tentar Novamente" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: handleOpenExternal, className: "px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-purple-600/20 transition active:scale-95", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Abrir Externamente" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-3.5" })
        ] })
      ] })
    ] })
  ] });
}
export {
  MarketEmbeddedPage as component
};
