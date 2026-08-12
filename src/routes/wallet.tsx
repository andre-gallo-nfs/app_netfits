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

      {/* Histórico de Movimentações */}
      <section className="px-4 mt-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
          Movimentações
        </h2>
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
      </section>
    </div>
  );
}
