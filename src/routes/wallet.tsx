import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowDownLeft,
  ArrowUpRight,
  ShoppingBag,
  X,
  CheckCircle2,
  Award,
  Sparkles,
  BookOpen,
  Share2,
  Heart,
  Users,
  ChevronRight,
  Info,
  Calendar,
  Receipt,
} from "lucide-react";
import { useWallet, type WalletTx } from "@/lib/wallet-store";
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
  const [selectedTx, setSelectedTx] = useState<WalletTx | null>(null);

  const balanceBRL = (balance * params.cppResgateBrl).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="pb-8">
      {/* Cards de Saldo Netfits */}
      <section className="px-4 pt-6">
        <div className="bg-foreground text-background rounded-[20px] p-6 relative overflow-hidden shadow-xl">
          <img
            src={netfitsMark}
            alt=""
            className="absolute top-4 right-4 w-8 h-8 object-contain rounded-md bg-background/10 p-0.5 opacity-70 pointer-events-none"
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
          <div className="mt-5 relative z-10">
            <Link
              to="/market"
              aria-label="Usar pontos Netfits no Shop Oficial"
              className="w-full bg-brand text-brand-foreground text-xs font-bold py-3 rounded-full hover:brightness-110 active:scale-95 transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="size-4" />
              <span>Use seus Netfits no Shop</span>
            </Link>
          </div>
          <div className="absolute right-[-10%] bottom-[-30%] w-64 h-64 bg-brand/10 blur-3xl rounded-full pointer-events-none" />
        </div>
      </section>

      {/* Detalhamento dos Lotes de Pontos & Validade */}
      <section className="px-4 mt-5">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Lotes de Pontos & Validade
          </h2>
        </div>
        
        {balance === 0 ? (
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 text-center space-y-1">
            <p className="text-xs font-bold text-zinc-300">Nenhum lote de pontos ativo no momento</p>
            <p className="text-[11px] text-zinc-400">
              Pratique atividades físicas ou interaja no feed para receber seus primeiros pontos nfs!
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {[
              { id: "b1", source: "Lote de Pontos Ativos", amount: balance, expires: "Em 24 meses", days: 730, isNext: true },
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
                      <span className="text-[9px] font-bold bg-lime-400 text-zinc-950 px-2 py-0.5 rounded-full">
                        🟢 Lote Ativo
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
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Extrato de Movimentações
          </h2>
          <span className="text-[11px] text-muted-foreground">
            {txs.length} {txs.length === 1 ? "lançamento" : "lançamentos"}
          </span>
        </div>

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
                onClick={() => setSelectedTx(t)}
                className="bg-card rounded-xl p-4 flex items-center gap-3 ring-1 ring-black/5 shadow-sm cursor-pointer hover:bg-muted/40 transition active:scale-[0.99] group"
              >
                <div
                  className={`size-9 rounded-full grid place-items-center shrink-0 ${
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
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-semibold truncate text-foreground group-hover:text-purple-600 dark:group-hover:text-lime-400 transition">
                      {t.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-muted-foreground">{t.date}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted font-medium text-muted-foreground">
                      {t.displayCategory}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`text-sm font-bold font-mono ${
                      t.positive ? "text-purple-600 dark:text-lime-400" : "text-muted-foreground"
                    }`}
                  >
                    {t.amount}
                  </span>
                  <ChevronRight className="size-4 text-muted-foreground/40 group-hover:text-foreground transition" />
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Modal Pop-up de Detalhamento do Lançamento */}
      {selectedTx && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-tx-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedTx(null)}
        >
          <div
            className="bg-card text-card-foreground border border-border rounded-3xl p-6 w-full max-w-sm shadow-2xl relative space-y-5 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar (X) */}
            <button
              onClick={() => setSelectedTx(null)}
              aria-label="Fechar detalhamento"
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition cursor-pointer"
            >
              <X className="size-5" />
            </button>

            {/* Cabeçalho do Modal */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20">
                  {selectedTx.displayCategory}
                </span>
                <span className="text-[11px] text-emerald-500 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="size-3.5" /> Confirmado
                </span>
              </div>
              <h3 id="modal-tx-title" className="text-xl font-bold text-foreground pt-1">
                {selectedTx.title}
              </h3>
            </div>

            {/* Bloco de Destaque de Pontuação */}
            <div className="bg-muted/40 border border-border/60 rounded-2xl p-4 text-center space-y-1">
              <p className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
                {selectedTx.positive ? "Pontos Recebidos" : "Pontos Utilizados"}
              </p>
              <div
                className={`text-3xl font-extrabold font-mono tracking-tight ${
                  selectedTx.positive ? "text-purple-600 dark:text-lime-400" : "text-foreground"
                }`}
              >
                {selectedTx.amount}
              </div>
              <p className="text-xs text-muted-foreground">
                ≈ {Math.abs(selectedTx.amountNum * params.cppResgateBrl).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })} em poder de resgate
              </p>
            </div>

            {/* Linhas de Detalhamento Técnico & Transparência */}
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-border/40">
                <span className="text-muted-foreground flex items-center gap-1.5">
                  <Calendar className="size-3.5" /> Data e Horário
                </span>
                <span className="font-semibold text-foreground">{selectedTx.fullDate}</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-border/40">
                <span className="text-muted-foreground flex items-center gap-1.5">
                  <Receipt className="size-3.5" /> Tipo da Operação
                </span>
                <span className="font-semibold text-foreground">
                  {selectedTx.positive ? "Crédito (Acúmulo)" : "Débito (Resgate)"}
                </span>
              </div>

              {selectedTx.orderRef && (
                <div className="flex items-center justify-between py-1 border-b border-border/40">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <ShoppingBag className="size-3.5" /> Pedido Shop
                  </span>
                  <span className="font-mono font-bold text-purple-600 dark:text-lime-400">
                    {selectedTx.orderRef}
                  </span>
                </div>
              )}

              {selectedTx.orderTotalBrl && (
                <div className="flex items-center justify-between py-1 border-b border-border/40">
                  <span className="text-muted-foreground">Valor Total da Compra</span>
                  <span className="font-semibold text-foreground">R$ {selectedTx.orderTotalBrl}</span>
                </div>
              )}

              {selectedTx.badgeName && (
                <div className="flex items-center justify-between py-1 border-b border-border/40">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <Award className="size-3.5" /> Selo Desbloqueado
                  </span>
                  <span className="font-semibold text-foreground">{selectedTx.badgeName}</span>
                </div>
              )}

              {selectedTx.contentTitle && (
                <div className="flex items-center justify-between py-1 border-b border-border/40">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <BookOpen className="size-3.5" /> Conteúdo
                  </span>
                  <span className="font-semibold text-foreground truncate max-w-[20ch]">
                    {selectedTx.contentTitle}
                  </span>
                </div>
              )}

              <div className="pt-1">
                <span className="text-[10px] text-muted-foreground block mb-0.5">Descrição Registrada:</span>
                <p className="text-[11px] text-foreground/80 bg-muted/60 p-2.5 rounded-xl border border-border/40 leading-relaxed">
                  {selectedTx.rawDescription}
                </p>
              </div>

              <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1">
                <span>ID do Lançamento:</span>
                <span className="font-mono truncate max-w-[22ch]">{selectedTx.id}</span>
              </div>
            </div>

            {/* Botão de Fechar */}
            <button
              onClick={() => setSelectedTx(null)}
              className="w-full bg-foreground text-background text-xs font-bold py-3.5 rounded-full hover:opacity-90 active:scale-95 transition cursor-pointer shadow-md"
            >
              Fechar Detalhamento
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
