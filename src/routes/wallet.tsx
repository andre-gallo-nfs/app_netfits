import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownLeft, ArrowUpRight, ShoppingBag } from "lucide-react";
import { useWallet } from "@/lib/wallet-store";
import netfitsMark from "@/assets/netfits-mark.png";

import { useOperationalParams } from "@/lib/operational-params-store";

export const Route = createFileRoute("/wallet")({
  head: () => ({
    meta: [
      { title: "Carteira — Netfits" },
      {
        name: "description",
        content: "Sua carteira netfits. Saldo, cashback, indicações e resgates.",
      },
      { property: "og:title", content: "Carteira — Netfits" },
    ],
  }),
  component: WalletPage,
});

function WalletPage() {
  const { balance, txs } = useWallet();
  const params = useOperationalParams();
  const balanceBRL = (balance * params.cppResgateBrl).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="pb-4">
      {/* Cards de Saldo Netfits */}
      <section className="px-4 pt-6">
        <div className="bg-foreground text-background rounded-[20px] p-6 relative overflow-hidden shadow-xl">
          <img
            src={netfitsMark}
            alt=""
            className="absolute top-4 right-4 w-8 h-8 object-contain rounded-md bg-background/10 p-0.5 opacity-70"
          />
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
            Saldo netfits
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold tracking-tight">{balance.toLocaleString("pt-BR")}</span>
            <span className="text-brand font-semibold">nfs</span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            ≈ {balanceBRL} em resgates
          </p>
          <div className="mt-5">
            <Link
              to="/market"
              className="w-full bg-brand text-brand-foreground text-xs font-bold py-3 rounded-full hover:brightness-110 active:scale-95 transition shadow-md flex items-center justify-center gap-2"
            >
              <ShoppingBag className="size-4" />
              <span>Resgatar Pontos Netfits no Shop</span>
            </Link>
          </div>
          <div className="absolute right-[-10%] bottom-[-30%] w-64 h-64 bg-brand/10 blur-3xl rounded-full" />
        </div>
      </section>

      {/* Banner da Regra de Resgate Justo (FEFO) */}
      <section className="px-4 mt-4">
        <div className="bg-purple-950/40 border border-purple-500/30 rounded-2xl p-4 flex items-start gap-3 shadow-md">
          <div className="size-8 rounded-xl bg-purple-600/20 text-purple-400 grid place-items-center shrink-0 mt-0.5 border border-purple-500/30">
            <span className="text-base">🛡️</span>
          </div>
          <div className="text-xs space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-xs">Resgate Inteligente (FEFO)</span>
              <span className="bg-lime-400/20 text-lime-400 text-[10px] px-2 py-0.5 rounded-full font-mono font-bold border border-lime-400/30">
                Proteção Ativa
              </span>
            </div>
            <p className="text-zinc-300 leading-relaxed text-[11px]">
              Seus pontos prestes a vencer são <b>consumidos em 1º lugar</b> em qualquer resgate no shopping ou parceiros. Isso garante que você nunca perca saldo!
            </p>
          </div>
        </div>
      </section>

      {/* Detalhamento dos Lotes de Pontos (FEFO Queue) */}
      <section className="px-4 mt-5">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Lotes de Pontos & Validade
          </h2>
          <span className="text-[10px] text-purple-400 font-bold font-mono">FEFO Active Order</span>
        </div>
        
        {balance === 0 ? (
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 text-center space-y-1">
            <p className="text-xs font-bold text-zinc-300">Nenhum lote de pontos ativo no momento</p>
            <p className="text-[11px] text-zinc-500">
              Pratique atividades físicas ou interaja no feed para receber seus primeiros pontos nfs!
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {[
              { id: "b1", source: "Lote de Pontos Ativos (FEFO)", amount: balance, expires: "Em 365 dias", days: 365, isNext: true },
            ].map((batch) => (
              <div
                key={batch.id}
                className={`p-3 rounded-xl border flex items-center justify-between text-xs transition ${
                  batch.isNext
                    ? "bg-purple-950/30 border-purple-500/40 ring-1 ring-purple-500/20"
                    : "bg-card border-border"
                }`}
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{batch.source}</span>
                    {batch.isNext && (
                      <span className="text-[9px] font-bold bg-lime-400 text-zinc-950 px-2 py-0.2 rounded-full">
                        🟢 1º A ser consumido
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-muted-foreground">Vencimento: {batch.expires}</p>
                </div>
                <span className="font-mono font-bold text-brand text-sm">
                  +{batch.amount.toLocaleString("pt-BR")} nfs
                </span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Histórico de Movimentações */}
      <section className="px-4 mt-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
          Movimentações
        </h2>
        {txs.length === 0 ? (
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 text-center space-y-2">
            <div className="size-10 rounded-full bg-zinc-800 text-zinc-400 mx-auto grid place-items-center font-bold text-base">
              📊
            </div>
            <p className="text-xs font-bold text-white">Nenhuma movimentação registrada ainda</p>
            <p className="text-[11px] text-zinc-400 max-w-[32ch] mx-auto leading-relaxed">
              Sua carteira está zerada e pronta para o seu primeiro uso real no Netfits.
            </p>
          </div>
        ) : (
          <ul className="space-y-2">
            {txs.map((t) => (
              <li
                key={t.id}
                className="bg-card rounded-xl p-4 flex items-center gap-3 ring-1 ring-black/5 shadow-sm"
              >
                <div
                  className={`size-9 rounded-full grid place-items-center ${
                    t.positive ? "bg-purple-600 text-white" : "bg-muted text-foreground"
                  }`}
                >
                  {t.positive ? (
                    <ArrowDownLeft className="size-4" />
                  ) : (
                    <ArrowUpRight className="size-4" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{t.title}</p>
                  <p className="text-xs text-muted-foreground">{t.date}</p>
                </div>
                <span
                  className={`text-sm font-bold ${
                    t.positive ? "text-purple-600 dark:text-lime-400" : "text-muted-foreground"
                  }`}
                >
                  {t.amount}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
