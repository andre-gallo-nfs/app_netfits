import { trackShopView } from "@/lib/analytics";
import { createFileRoute } from "@tanstack/react-router";
import {
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  ShoppingBag,
  ArrowLeft,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { useWallet } from "@/lib/wallet-store";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { getMkplaceStoreUrl, launchMkplaceShop } from "@/lib/integrations/mkplace-client";
import { badgesStore } from "@/lib/badges-store";
import { shopSelectionStore } from "@/lib/shop-selection-store";

export interface MarketSearch {
  product?: string;
  source?: string;
}

export const Route = createFileRoute("/market")({
  validateSearch: (search: Record<string, unknown>): MarketSearch => ({
    product: typeof search.product === "string" ? search.product : undefined,
    source: typeof search.source === "string" ? search.source : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Netfits Shop — Loja Oficial" },
      {
        name: "description",
        content: "Loja Oficial Netfits integrada com autenticação unificada e acúmulo de pontos nfs.",
      },
      { property: "og:title", content: "Netfits Shop" },
    ],
  }),
  component: MarketEmbeddedPage,
});

function MarketEmbeddedPage() {
  const search = Route.useSearch();
  const { balance } = useWallet();
  const activeUser = sharedSandboxStore.useActiveUser();
  const storeSelectedProduct = shopSelectionStore.useSelectedProduct();

  const [storeUrl, setStoreUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [reloadKey, setReloadKey] = useState<number>(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Determina o caminho específico do produto se houver seleção
  const targetProductPath = (() => {
    const raw = search.product || storeSelectedProduct?.targetPath || storeSelectedProduct?.id;
    if (!raw) return undefined;
    const lower = raw.toLowerCase();
    if (
      lower.includes("mizuno") ||
      lower.includes("bone") ||
      lower.includes("2fu-9629")
    ) {
      return "https://loja.netfits.com.br/bone-aba-curva-mizuno-run-sky";
    }
    return raw;
  })();

  // Carrega a URL com o token SSO e o produto específico
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setHasError(false);

    // Registra a visita no Shop para desbloquear o selo Explorador do Shop
    badgesStore.recordShopVisit();
    trackShopView("all");

    getMkplaceStoreUrl(activeUser.id, targetProductPath)
      .then((url) => {
        if (isMounted) {
          setStoreUrl(url);
        }
      })
      .catch(() => {
        if (isMounted) {
          setHasError(true);
          setIsLoading(false);
        }
      });

    // Watchdog timer para evitar travamento em carregamentos de iframes
    const timer = setTimeout(() => {
      if (isMounted && isLoading) {
        setIsLoading(false);
      }
    }, 4000);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [activeUser.id, targetProductPath, reloadKey]);

  const handleRefresh = () => {
    setIsLoading(true);
    setReloadKey((prev) => prev + 1);
    toast.success("Recarregando catálogo da Loja Oficial...");
  };

  const handleOpenExternal = () => {
    launchMkplaceShop({
      userId: activeUser.id,
      targetQueryOrPath: targetProductPath,
    });
  };

  const handleBackToAllProducts = () => {
    shopSelectionStore.clear();
    window.location.href = "/market";
  };

  return (
    <div className="relative w-full min-h-[calc(100dvh-116px)] bg-zinc-950 select-none overflow-y-auto">
      {/* Loading Overlay com animação de conexão SSO */}
      {isLoading && (
        <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-6 text-center space-y-4">
          <div className="relative">
            <div className="size-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-lime-400 p-0.5 animate-spin">
              <div className="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center">
                <ShoppingBag className="size-6 text-purple-400" />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 size-5 rounded-full bg-lime-400 text-zinc-950 font-black text-[9px] grid place-items-center shadow-lg">
              SSO
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white">
              {targetProductPath ? "Abrindo Produto na Loja Oficial Netfits..." : "Conectando à Loja Oficial Netfits..."}
            </h3>
            <p className="text-xs text-zinc-400 max-w-xs">
              Carregando catálogo da Rock Encantech com saldo de <strong className="text-lime-400">{balance.toLocaleString()} nfs</strong> e dados sincronizados.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">
            <ShieldCheck className="size-3.5 text-emerald-400" />
            <span>Autenticação RS256 Segura</span>
          </div>
        </div>
      )}

      {/* Barra Superior da Loja Oficial (Idêntica à Produção) */}
      <div className="w-full bg-zinc-900 border-b border-zinc-800 px-3.5 py-2 flex items-center justify-between text-xs sticky top-0 z-10">
        <div className="flex items-center gap-2">
          {targetProductPath && (
            <button
              type="button"
              onClick={handleBackToAllProducts}
              className="p-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition cursor-pointer mr-1"
              title="Ver Todo o Catálogo"
            >
              <ArrowLeft className="size-3.5 text-purple-400" />
            </button>
          )}
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-white text-[11px]">Loja Oficial Netfits</span>
          <span className="text-[10px] text-zinc-400 hidden sm:inline">· Saldo:</span>
          <span className="text-[11px] font-extrabold text-lime-400">{balance.toLocaleString()} nfs</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleRefresh}
            className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition cursor-pointer"
            title="Recarregar Loja"
            aria-label="Recarregar catálogo da loja oficial"
          >
            <RefreshCw className="size-3.5" />
          </button>
          <button
            type="button"
            onClick={handleOpenExternal}
            className="px-2.5 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-[11px] flex items-center gap-1.5 transition active:scale-95 shadow-sm cursor-pointer"
            title="Abrir em Nova Aba"
            aria-label="Abrir loja oficial em nova aba"
          >
            <span>Nova Aba</span>
            <ExternalLink className="size-3" />
          </button>
        </div>
      </div>

      {/* Iframe Embutido da Loja Oficial (Exatamente como em Produção) */}
      {storeUrl && (
        <iframe
          ref={iframeRef}
          src={storeUrl}
          title="Loja Oficial Netfits — Rock Encantech"
          className="w-full h-[calc(100dvh-156px)] border-0 bg-white"
          allow="clipboard-write; payment; geolocation; camera"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
        />
      )}

      {/* Fallback de Erro / Timeout */}
      {hasError && (
        <div className="absolute inset-0 bg-zinc-950 z-20 flex flex-col items-center justify-center p-6 text-center space-y-4">
          <div className="size-12 rounded-full bg-red-500/20 text-red-400 grid place-items-center">
            <AlertCircle className="size-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white">
              Não foi possível carregar a Loja Oficial
            </h3>
            <p className="text-xs text-zinc-400 max-w-xs">
              Verifique sua conexão ou clique abaixo para recarregar ou abrir externamente na Rock Encantech.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleRefresh}
              className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-xs flex items-center gap-1.5 border border-zinc-700 transition active:scale-95"
            >
              <RefreshCw className="size-3.5" />
              <span>Tentar Novamente</span>
            </button>
            <button
              type="button"
              onClick={handleOpenExternal}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-purple-600/20 transition active:scale-95"
            >
              <span>Abrir Externamente</span>
              <ExternalLink className="size-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
