import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShoppingBag, ExternalLink, Zap, Truck,
  RefreshCw, Gift, CheckCircle2, Lock, ArrowLeft
} from "lucide-react";
import { useState } from "react";
import { useWallet } from "@/lib/wallet-store";
import { useOperationalParams } from "@/lib/operational-params-store";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { launchMkplaceShop } from "@/lib/integrations/mkplace-client";

export const Route = createFileRoute("/market")({
  head: () => ({
    meta: [
      { title: "Netfits Shop — Loja Oficial Rock Encantech" },
      {
        name: "description",
        content: "Loja Oficial Netfits com autenticação SSO, produtos de alta performance e cashback em pontos nfs.",
      },
      { property: "og:title", content: "Netfits Shop" },
    ],
  }),
  component: MarketGatewayPage,
});

function MarketGatewayPage() {
  const { balance } = useWallet();
  const params = useOperationalParams();
  const activeUser = sharedSandboxStore.useActiveUser();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleOpenStore = async () => {
    setIsConnecting(true);
    try {
      await launchMkplaceShop({ userId: activeUser.id });
    } finally {
      setIsConnecting(false);
    }
  };

  const cashEquivalent = (balance * (params?.cppResgateBrl || 0.1)).toFixed(2);
  const baseRate = params?.nfsEarnedPerBrlSpent || 4;
  const clubRate = params?.nfsEarnedPerBrlSpentDouble || 8;
  const firstPurchaseBonus = params?.shopFirstPurchaseBonusNfs || 100;

  return (
    <div className="px-4 py-6 space-y-6 max-w-md mx-auto">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-purple-100 text-purple-700 border border-purple-200 flex items-center gap-1">
            <Zap className="size-3 text-purple-600" />
            Loja Oficial Parceira
          </span>
          <span className="text-[10px] text-zinc-500 font-semibold">
            Powered by Rock Encantech
          </span>
        </div>
        <h1 className="text-2xl font-black tracking-tight text-zinc-900">
          shop
        </h1>
        <p className="text-xs text-zinc-600 leading-relaxed">
          O marketplace oficial da vida em movimento. Acesso unificado via Single Sign-On (SSO) com seus pontos e dados de entrega integrados.
        </p>
      </div>

      {/* Cartão de Saldo e Fidelidade do Atleta (Alto Contraste) */}
      <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-purple-950 text-white rounded-2xl p-5 shadow-xl border border-zinc-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-purple-600/30 border border-purple-500/40 grid place-items-center text-purple-300 font-bold text-xs">
                {activeUser.fullName ? activeUser.fullName.charAt(0) : "A"}
              </div>
              <div>
                <span className="text-xs font-bold text-white block">
                  {activeUser.fullName || "Atleta Netfits"}
                </span>
                <span className="text-[10px] text-lime-400 font-semibold">
                  Atleta Conectado · Saldo Ativo
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-zinc-400 block">Saldo na Carteira</span>
              <span className="text-base font-black text-lime-400 font-mono">
                {balance.toLocaleString()} nfs
              </span>
            </div>
          </div>

          <div className="p-3 bg-zinc-950/80 rounded-xl border border-zinc-800/80 grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-[10px] text-zinc-400 block">Equivalente em R$:</span>
              <span className="font-bold text-white font-mono">R$ {cashEquivalent}</span>
            </div>
            <div>
              <span className="text-[10px] text-zinc-400 block">Acúmulo no Shop:</span>
              <span className="font-bold text-purple-300 font-mono">{baseRate} a {clubRate} nfs / R$</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Card de Ação Principal */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-zinc-200 space-y-4">
        <div className="space-y-2">
          <div className="size-10 rounded-xl bg-purple-50 text-purple-600 grid place-items-center">
            <ShoppingBag className="size-5" />
          </div>
          <h2 className="text-base font-bold text-zinc-900">
            Acesse o Catálogo Oficial Completo
          </h2>
          <p className="text-xs text-zinc-600 leading-relaxed">
            Calçados de alta performance, suplementos, vestuário técnico e equipamentos esportivos com garantia de procedência oficial.
          </p>
        </div>

        {/* Vantagens com visual de alto contraste */}
        <div className="space-y-2 pt-1 border-t border-zinc-100">
          <div className="flex items-center gap-2 text-xs text-zinc-700">
            <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
            <span><strong>{baseRate} nfs por R$</strong> ({clubRate} nfs para Netfits Club)</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-700">
            <Gift className="size-4 text-amber-500 shrink-0" />
            <span><strong>+{firstPurchaseBonus} nfs de bônus</strong> no seu 1º pedido na loja</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-700">
            <Truck className="size-4 text-purple-600 shrink-0" />
            <span>Endereço de entrega preenchido automaticamente</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-700">
            <Lock className="size-4 text-zinc-600 shrink-0" />
            <span>Autenticação unificada segura (Single Sign-On)</span>
          </div>
        </div>

        {/* Botão de Ação Primário */}
        <button
          type="button"
          onClick={handleOpenStore}
          disabled={isConnecting}
          className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 transition active:scale-98 shadow-lg shadow-purple-600/20"
        >
          {isConnecting ? (
            <>
              <RefreshCw className="size-4 animate-spin" />
              <span>Conectando à Rock Encantech...</span>
            </>
          ) : (
            <>
              <span>Entrar na Loja Oficial</span>
              <ExternalLink className="size-4" />
            </>
          )}
        </button>

        <p className="text-[11px] text-center text-zinc-400">
          Você será conectado automaticamente com o seu perfil Netfits.
        </p>
      </div>

      {/* Botão de Retorno ao Feed */}
      <div className="pt-2 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition"
        >
          <ArrowLeft className="size-3.5" />
          Voltar para o Feed de Atividades
        </Link>
      </div>
    </div>
  );
}
