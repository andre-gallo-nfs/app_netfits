import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, ArrowDownLeft, ArrowUpRight, Landmark, X, ArrowRight } from "lucide-react";
import { useWallet } from "@/lib/wallet-store";
import netfitsMark from "@/assets/netfits-mark.png";

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

type BankPartner = {
  id: string;
  name: string;
  program: string;
  initials: string;
  color: string;
  fg: string;
  url: string;
};

const BANK_PARTNERS: BankPartner[] = [
  { id: "itau", name: "Itaú", program: "Pontos Itaú", initials: "It", color: "#EC7000", fg: "#ffffff", url: "https://www.itau.com.br/cartoes/programa-de-pontos" },
  { id: "esfera", name: "Santander", program: "Esfera", initials: "Es", color: "#EC0000", fg: "#ffffff", url: "https://www.esfera.com.vc/" },
  { id: "livelo", name: "Bradesco / BB", program: "Livelo", initials: "Lv", color: "#FF0099", fg: "#ffffff", url: "https://www.livelo.com.br/" },
  { id: "c6", name: "C6 Bank", program: "Átomos", initials: "C6", color: "#1A1A1A", fg: "#ffffff", url: "https://www.c6bank.com.br/atomos" },
  { id: "safra", name: "Safra", program: "Safra Rewards", initials: "Sf", color: "#0A2240", fg: "#ffffff", url: "https://www.safra.com.br/cartoes/programa-de-pontos.htm" },
  { id: "nubank", name: "Nubank", program: "Rewards / Ultravioleta", initials: "Nu", color: "#820AD1", fg: "#ffffff", url: "https://nubank.com.br/rewards/" },
  { id: "inter", name: "Inter", program: "Loop", initials: "In", color: "#FF7A00", fg: "#ffffff", url: "https://www.bancointer.com.br/loop/" },
  { id: "btg", name: "BTG Pactual", program: "BTG+ Pontos", initials: "BG", color: "#003B5C", fg: "#ffffff", url: "https://www.btgpactual.com/banking/cartoes" },
  
  { id: "picpay", name: "PicPay", program: "PicPay Pontos", initials: "Pp", color: "#11C76F", fg: "#ffffff", url: "https://www.picpay.com/" },
  { id: "original", name: "Banco Original", program: "Original Rewards", initials: "Or", color: "#00E64D", fg: "#0A0A0A", url: "https://www.original.com.br/" },
  { id: "next", name: "Next", program: "Next Joy", initials: "Nx", color: "#00FF5F", fg: "#0A0A0A", url: "https://next.me/" },
];


function WalletPage() {
  const [banksOpen, setBanksOpen] = useState(false);
  const { balance, txs } = useWallet();
  const balanceBRL = (balance * 0.02).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <div className="pb-4">
      <section className="px-4 pt-6">
        <div className="bg-foreground text-background rounded-[20px] p-6 relative overflow-hidden">
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
          <div className="grid grid-cols-2 gap-2 mt-5">
            <button className="bg-brand text-brand-foreground text-xs font-bold py-2.5 rounded-full">
              Resgatar
            </button>
            <button className="bg-white/10 text-background text-xs font-semibold py-2.5 rounded-full ring-1 ring-white/10">
              Enviar
            </button>
          </div>
          <div className="absolute right-[-10%] bottom-[-30%] w-64 h-64 bg-brand/10 blur-3xl rounded-full" />
        </div>
      </section>

      {/* Parceria com Bancos — entry point */}
      <section className="px-4 mt-3">
        <button
          onClick={() => setBanksOpen(true)}
          className="w-full bg-card rounded-2xl p-4 ring-1 ring-black/5 flex items-center gap-3 text-left active:scale-[0.99] transition-transform"
        >
          <div className="size-10 rounded-xl bg-brand/15 grid place-items-center shrink-0">
            <Landmark className="size-5 text-brand" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold leading-tight">Parceria com Bancos</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              Troque pontos do seu banco por netfits · 1 pt = 1 nft
            </p>
          </div>
          <ArrowRight className="size-4 text-muted-foreground shrink-0" />
        </button>
      </section>


      <section className="px-4 mt-8">
        <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
          Movimentações
        </h2>
        <ul className="space-y-2">
          {txs.map((t) => (
            <li
              key={t.id}
              className="bg-card rounded-xl p-4 flex items-center gap-3 ring-1 ring-black/5"
            >
              <div
                className={`size-9 rounded-full grid place-items-center ${
                  t.positive ? "bg-brand text-brand-foreground" : "bg-muted text-foreground"
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
                  t.positive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {t.amount}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {banksOpen && <BanksSheet onClose={() => setBanksOpen(false)} />}
    </div>
  );
}

function BanksSheet({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-end justify-center"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-background rounded-t-3xl max-h-[88vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-brand/15 grid place-items-center">
              <Landmark className="size-4 text-brand" />
            </div>
            <h2 className="text-base font-semibold">Parceria com Bancos</h2>
          </div>
          <button
            onClick={onClose}
            className="size-8 rounded-full bg-muted grid place-items-center"
            aria-label="Fechar"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="px-5 pb-3">
          <p className="text-sm text-foreground/80 leading-snug">
            Transforme os pontos do seu banco em mais saúde e longevidade com a netfits.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 bg-brand/15 ring-1 ring-brand/40 rounded-full px-3 py-1">
            <Sparkles className="size-3.5 text-brand" />
            <span className="text-[11px] font-bold tracking-wide">1 pt = 1 nft</span>
          </div>
        </div>

        <ul className="px-3 pb-6 overflow-y-auto space-y-2">
          {BANK_PARTNERS.map((b) => (
            <li key={b.id}>
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-card rounded-2xl p-3 ring-1 ring-black/5 flex items-center gap-3 active:scale-[0.99] transition-transform"
              >
                <div
                  className="size-11 rounded-xl grid place-items-center text-sm font-bold shrink-0"
                  style={{ background: b.color, color: b.fg }}
                >
                  {b.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold leading-tight truncate">{b.name}</p>
                  <p className="text-[11px] text-muted-foreground truncate">{b.program}</p>
                </div>
                <ArrowRight className="size-4 text-muted-foreground shrink-0" />
              </a>
            </li>
          ))}
          <li className="px-2 pt-2">
            <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
              Você será direcionado ao app do seu banco para concluir a troca de pontos.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}


