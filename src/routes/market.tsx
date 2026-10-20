import { trackShopView } from "@/lib/analytics";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Zap, RefreshCw, ExternalLink, ShieldCheck, AlertCircle, ShoppingBag, ArrowLeft, CheckCircle2
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { useWallet } from "@/lib/wallet-store";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { getMkplaceStoreUrl, launchMkplaceShop } from "@/lib/integrations/mkplace-client";
import { badgesStore } from "@/lib/badges-store";

export interface MarketSearchParams {
  product?: string;
  title?: string;
  price?: string;
  seller?: string;
  cashback?: string;
  q?: string;
  query?: string;
}

export const Route = createFileRoute("/market")({
  validateSearch: (search: Record<string, unknown>): MarketSearchParams => ({
    product: typeof search.product === "string" ? search.product : undefined,
    title: typeof search.title === "string" ? search.title : undefined,
    price: typeof search.price === "string" ? search.price : undefined,
    seller: typeof search.seller === "string" ? search.seller : undefined,
    cashback: typeof search.cashback === "string" ? search.cashback : undefined,
    q: typeof search.q === "string" ? search.q : undefined,
    query: typeof search.query === "string" ? search.query : undefined,
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
  const { balance } = useWallet();
  const activeUser = sharedSandboxStore.useActiveUser();

  const search = Route.useSearch();
  const targetProduct = search?.product || "";
  const targetTitle = search?.title || "";
  const targetQuery = search?.q || search?.query || targetTitle;
  const targetPrice = search?.price || "";
  const targetSeller = search?.seller || "";
  const targetCashback = search?.cashback || "";

  const [storeUrl, setStoreUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [reloadKey, setReloadKey] = useState<number>(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const isPlaceholderUrl = false;

  // Carrega a URL com o token SSO assim que a tela abre e registra a visita para o selo de explorador
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setHasError(false);

    // Registra a visita no Shop para desbloquear o selo Explorador do Shop
    badgesStore.recordShopVisit();
    trackShopView("all");

    getMkplaceStoreUrl(activeUser.id, targetQuery)
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

    // Watchdog timer para evitar travamento em carregamentos lentos de iframes
    const timer = setTimeout(() => {
      if (isMounted && isLoading) {
        setIsLoading(false);
      }
    }, 5000);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [activeUser.id, reloadKey, targetQuery]);

  const handleRefresh = () => {
    setIsLoading(true);
    setReloadKey((prev) => prev + 1);
    toast.success("Recarregando catálogo da Loja Oficial...");
  };

  const handleOpenExternal = () => {
    launchMkplaceShop({ userId: activeUser.id });
  };

  return (
    <div className="relative w-full min-h-[calc(100dvh-116px)] bg-zinc-950 select-none overflow-y-auto">
      {/* Visualização de Prontidão enquanto a Rock fornece a Webview definitiva */}
      {isPlaceholderUrl ? (
        <div className="p-4 max-w-md mx-auto space-y-4 pt-6">
          {/* Header Card de Saldo e Paridade */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-5 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-xl bg-purple-600/20 text-purple-400 grid place-items-center">
                  <ShoppingBag className="size-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white leading-tight">Netfits Shop</h2>
                  <p className="text-[10px] text-zinc-400">Integração Rock Encantech</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Credenciais Ativas</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-zinc-800/80">
              <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-1">
                Saldo Disponível para Resgate
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-white tracking-tight">
                  {balance.toLocaleString("pt-BR")}
                </span>
                <span className="text-sm font-bold text-lime-400">nfs</span>
              </div>
            </div>
          </div>

          {/* Card de Status da Integração & Regras */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 space-y-3">
            <div className="flex items-start gap-2.5">
              <div className="size-8 rounded-xl bg-lime-400/10 text-lime-400 grid place-items-center shrink-0 mt-0.5">
                <ShieldCheck className="size-4" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-white">Chaves & SSO Homologados</h3>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  As chaves criptográficas RSA (RS256) e a esteira de pedidos da Rock Encantech (StoreId <strong className="text-zinc-200">RhOFkbZJIN</strong>) estão 100% ativas no backend.
                </p>
              </div>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-zinc-800/60 text-[11px] text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-lime-400 shrink-0" />
                <span>Ganhe Netfits: <strong>4,00 nfs por R$ 1,00</strong> em todo o catálogo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-lime-400 shrink-0" />
                <span>Use seus Netfits como abatimento direto no carrinho</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-lime-400 shrink-0" />
                <span>Endereço e dados sincronizados via SSO sem redigitação</span>
              </div>
            </div>
          </div>

          {/* Informação sobre a Webview da Rock */}
          <div className="bg-purple-950/20 border border-purple-500/20 rounded-2xl p-4 text-center space-y-2">
            <div className="size-9 rounded-full bg-purple-600/20 text-purple-400 mx-auto grid place-items-center">
              <Zap className="size-4.5" />
            </div>
            <h4 className="text-xs font-bold text-white">Aguardando URL de Homologação da Rock</h4>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              O catálogo de produtos será renderizado diretamente aqui dentro assim que a equipe técnica da Rock nos fornecer a URL do catálogo white-label.
            </p>
          </div>

          {/* Ações de Navegação */}
          <div className="space-y-2 pt-2">
            <Link
              to="/admin"
              className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20 transition active:scale-98"
            >
              <Zap className="size-3.5" />
              <span>Acessar Simulador de Compras Rock no Admin</span>
            </Link>
            <Link
              to="/wallet"
              className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-semibold text-xs flex items-center justify-center gap-1.5 border border-zinc-800 transition"
            >
              <ArrowLeft className="size-3.5" />
              <span>Voltar para a Carteira de Pontos</span>
            </Link>
          </div>
        </div>
      ) : (
        <>
          {/* Loader Enquanto Conecta */}
          {isLoading && (
            <div className="absolute inset-0 bg-zinc-950 z-10 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <div className="relative">
                <div className="size-14 rounded-2xl bg-purple-600/20 border border-purple-500/30 grid place-items-center animate-pulse">
                  <Zap className="size-7 text-purple-400" />
                </div>
                <div className="absolute -bottom-1 -right-1 size-5 rounded-full bg-lime-400 text-zinc-950 font-black text-[9px] grid place-items-center shadow-lg">
                  SSO
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white">
                  Conectando à Loja Oficial Netfits...
                </h3>
                <p className="text-xs text-zinc-400 max-w-xs">
                  Carregando catálogo da Rock Encantech com saldo de <strong className="text-lime-400">{balance.toLocaleString()} nfs</strong> e endereço sincronizado.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">
                <ShieldCheck className="size-3.5 text-emerald-400" />
                <span>Autenticação RS256 Segura</span>
              </div>
            </div>
          )}

          {/* Banner de Destaque / Deep Link de Produto Selecionado do Feed */}
          {targetTitle && (
            <div className="w-full bg-gradient-to-r from-purple-950 via-zinc-900 to-zinc-950 border-b border-purple-500/30 px-3.5 py-2.5 flex items-center justify-between gap-3 text-xs sticky top-0 z-20 shadow-md">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="size-8 rounded-xl bg-purple-600/30 border border-purple-500/40 text-purple-300 grid place-items-center shrink-0 shadow-inner">
                  <ShoppingBag className="size-4 text-purple-300" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-extrabold uppercase text-purple-400 tracking-wider">
                      Produto Selecionado
                    </span>
                    <span className="text-[10px] text-zinc-500">·</span>
                    <span className="text-[10px] font-bold text-zinc-300">
                      Vendido por {targetSeller || "Netshoes"}
                    </span>
                  </div>
                  <p className="font-bold text-white text-xs truncate">
                    {targetTitle}
                  </p>
                </div>
              </div>
              <div className="shrink-0 text-right">
                <span className="text-xs font-black text-white block">
                  {targetPrice || "R$ 89,90"}
                </span>
                <span className="text-[10px] font-extrabold text-lime-400 bg-lime-400/10 px-2 py-0.5 rounded-full border border-lime-400/20 inline-block">
                  {targetCashback || "+360 nfs"}
                </span>
              </div>
            </div>
          )}

          {/* Barra Superior da Loja Oficial */}
          <div className="w-full bg-zinc-900 border-b border-zinc-800 px-3.5 py-2 flex items-center justify-between text-xs sticky top-0 z-10">
            <div className="flex items-center gap-2">
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

          {/* Iframe Embutido da Loja Oficial */}
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
                  Não foi possível carregar o catálogo embutido
                </h3>
                <p className="text-xs text-zinc-400 max-w-xs">
                  Verifique sua conexão ou clique abaixo para tentar novamente ou acessar externamente.
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
        </>
      )}
    </div>
  );
}

