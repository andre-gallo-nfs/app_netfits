import { createFileRoute } from "@tanstack/react-router";
import {
  Zap, RefreshCw, ExternalLink, ShieldCheck, Coins, Sparkles, AlertCircle
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { useWallet } from "@/lib/wallet-store";
import { useOperationalParams } from "@/lib/operational-params-store";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { getMkplaceStoreUrl, launchMkplaceShop } from "@/lib/integrations/mkplace-client";

export const Route = createFileRoute("/market")({
  head: () => ({
    meta: [
      { title: "Netfits Shop — Loja Oficial Rock Encantech" },
      {
        name: "description",
        content: "Loja Oficial Netfits integrada com a Rock Encantech. Compre com autenticação unificada e acumule pontos nfs.",
      },
      { property: "og:title", content: "Netfits Shop" },
    ],
  }),
  component: MarketEmbeddedPage,
});

function MarketEmbeddedPage() {
  const { balance } = useWallet();
  const params = useOperationalParams();
  const activeUser = sharedSandboxStore.useActiveUser();

  const [storeUrl, setStoreUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [reloadKey, setReloadKey] = useState<number>(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Carrega a URL com o token SSO assim que a tela abre
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setHasError(false);

    getMkplaceStoreUrl(activeUser.id)
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
    launchMkplaceShop({ userId: activeUser.id });
  };

  const cashEquivalent = (balance * (params?.cppResgateBrl || 0.1)).toFixed(2);
  const baseRate = params?.nfsEarnedPerBrlSpent || 4;
  const clubRate = params?.nfsEarnedPerBrlSpentDouble || 8;

  return (
    <div className="flex flex-col h-full w-full bg-zinc-950 select-none overflow-hidden">
      {/* 1. Barra de Contexto & Fidelidade (Sticky Top da Loja) */}
      <div className="bg-zinc-900 border-b border-zinc-800 px-3 py-2 flex items-center justify-between gap-2 shrink-0 z-20">
        <div className="flex items-center gap-2 min-w-0">
          <div className="size-6 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center shrink-0">
            <Zap className="size-3.5 text-purple-400" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-black text-white tracking-tight truncate">
                Loja Oficial
              </span>
              <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 shrink-0">
                Rock Encantech
              </span>
            </div>
            <span className="text-[10px] text-zinc-400 block truncate">
              {baseRate} a {clubRate} nfs/R$ · +100 nfs 1ª compra
            </span>
          </div>
        </div>

        {/* Saldo de Pontos & Ações */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="px-2.5 py-1 rounded-full bg-zinc-950 border border-zinc-800 flex items-center gap-1">
            <div className="size-2 rounded-full bg-lime-400 animate-pulse" />
            <span className="text-[11px] font-mono font-black text-lime-400">
              {balance.toLocaleString("pt-BR")} nfs
            </span>
            <span className="text-[9px] text-zinc-400 font-medium hidden sm:inline">
              (R$ {cashEquivalent})
            </span>
          </div>

          <button
            type="button"
            onClick={handleRefresh}
            title="Recarregar catálogo"
            className="size-7 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 grid place-items-center transition active:scale-95 border border-zinc-700"
            aria-label="Recarregar catálogo"
          >
            <RefreshCw className={`size-3.5 ${isLoading ? "animate-spin text-purple-400" : ""}`} />
          </button>

          <button
            type="button"
            onClick={handleOpenExternal}
            title="Abrir em tela cheia externa"
            className="size-7 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 grid place-items-center transition active:scale-95 border border-zinc-700"
            aria-label="Abrir em nova aba"
          >
            <ExternalLink className="size-3.5" />
          </button>
        </div>
      </div>

      {/* 2. Área do Catálogo Embutido na Mesma Tela */}
      <div className="relative flex-1 w-full h-[calc(100dvh-125px)] bg-zinc-950 overflow-hidden">
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

        {/* Iframe Embutido da Loja Oficial */}
        {storeUrl && (
          <iframe
            ref={iframeRef}
            src={storeUrl}
            title="Loja Oficial Netfits — Rock Encantech"
            className="w-full h-full border-0 bg-white"
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
                Verifique sua conexão ou clique abaixo para acessar a loja diretamente.
              </p>
            </div>
            <button
              type="button"
              onClick={handleOpenExternal}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-purple-600/20"
            >
              <span>Abrir Catálogo Completo</span>
              <ExternalLink className="size-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
