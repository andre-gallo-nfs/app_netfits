import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
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
  Filter,
} from "lucide-react";
import { useWallet, type WalletTx } from "@/lib/wallet-store";
import { useWalletData } from "@/lib/queries/user-queries";
import netfitsMark from "@/assets/netfits-mark.png";
import { useOperationalParams } from "@/lib/operational-params-store";
import { badgesStore } from "@/lib/badges-store";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";

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

type PeriodFilter = "last5" | "today" | "week" | "month" | "all";

function WalletPage() {
  const { balance: localBalance, txs: localTxs } = useWallet();
  const activeUser = sharedSandboxStore.useActiveUser();
  const { data: remoteWallet } = useWalletData(activeUser.id);
  const balance = remoteWallet?.balance ?? localBalance;
  const txs = remoteWallet?.transactions ?? localTxs;
  const params = useOperationalParams();
  const [selectedTx, setSelectedTx] = useState<WalletTx | null>(null);
  const [filterPeriod, setFilterPeriod] = useState<PeriodFilter>("last5");

  useEffect(() => {
    badgesStore.evaluate();
  }, []);

  useEffect(() => {
    if (selectedTx) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedTx(null);
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener("keydown", onKeyDown);
      };
    }
  }, [selectedTx]);

  const displayedTxs = useMemo(() => {
    if (filterPeriod === "last5") {
      return txs.slice(0, 5);
    }
    const now = Date.now();
    return txs.filter((t) => {
      if (filterPeriod === "all") return true;
      const txTime = new Date(t.timestamp).getTime();
      if (isNaN(txTime)) return true;
      const diffMs = now - txTime;
      if (filterPeriod === "today") {
        return diffMs <= 24 * 60 * 60 * 1000;
      }
      if (filterPeriod === "week") {
        return diffMs <= 7 * 24 * 60 * 60 * 1000;
      }
      if (filterPeriod === "month") {
        return diffMs <= 30 * 24 * 60 * 60 * 1000;
      }
      return true;
    });
  }, [txs, filterPeriod]);

  return (
    <div className="pb-8">
      {/* Cards de Saldo Netfits - Altura compacta e sem equivalência financeira */}
      <section className="px-4 pt-4">
        <div className="bg-foreground text-background rounded-[20px] p-5 relative overflow-hidden shadow-xl">
          <img
            src={netfitsMark}
            alt=""
            className="absolute top-4 right-4 w-8 h-8 object-contain rounded-md bg-background/10 p-0.5 opacity-70 pointer-events-none"
          />
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1.5 flex items-center justify-between">
            <span>Saldo netfits</span>
            <span className="text-[9px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-full font-medium">
              {activeUser.fullName || "Atleta Netfits"}
            </span>
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold tracking-tight">{balance.toLocaleString("pt-BR")}</span>
            <span className="text-brand font-semibold">nfs</span>
          </div>
          <div className="mt-4 relative z-10">
            <Link
              to="/market"
              aria-label="Usar pontos Netfits no Shop Oficial"
              className="w-full bg-brand text-brand-foreground text-xs font-bold py-2.5 rounded-full hover:brightness-110 active:scale-95 transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
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
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
            <Receipt className="size-3.5" /> Extrato de Movimentações
          </h2>
          <span className="text-[11px] text-muted-foreground font-mono">
            {displayedTxs.length} de {txs.length}
          </span>
        </div>

        {/* Filtros Rápidos de Período */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-1 no-scrollbar">
          {[
            { id: "last5", label: "Últimos 5" },
            { id: "today", label: "Hoje" },
            { id: "week", label: "7 Dias" },
            { id: "month", label: "30 Dias" },
            { id: "all", label: "Todos" },
          ].map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilterPeriod(f.id as PeriodFilter)}
              className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition cursor-pointer ${
                filterPeriod === f.id
                  ? "bg-purple-600 text-white shadow-xs"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {displayedTxs.length === 0 ? (
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 text-center space-y-2">
            <div className="size-10 rounded-full bg-zinc-800 text-zinc-400 mx-auto grid place-items-center font-bold text-base">
              📊
            </div>
            <p className="text-xs font-bold text-white">Nenhuma movimentação neste período</p>
            <p className="text-[11px] text-zinc-400 max-w-[32ch] mx-auto leading-relaxed">
              Tente selecionar outro filtro acima para visualizar movimentações anteriores.
            </p>
          </div>
        ) : (
          <div className="max-h-[380px] overflow-y-auto space-y-2 pr-1 rounded-xl">
            <ul className="space-y-2">
              {displayedTxs.map((t) => (
                <li key={t.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedTx(t)}
                    className="w-full text-left bg-card rounded-xl p-3.5 flex items-center gap-3 ring-1 ring-black/5 shadow-sm cursor-pointer hover:bg-muted/40 transition active:scale-[0.98] group focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Modal Pop-up de Detalhamento do Lançamento — Padrão Feed Card Netfits */}
      {selectedTx && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-tx-title"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedTx(null)}
        >
          <div
            className="relative w-full max-w-sm sm:max-w-md bg-zinc-950 text-white border border-purple-500/30 rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4 text-left animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Topo: Categoria + Status + Botão Fechar X */}
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {selectedTx.displayCategory}
                </span>
                <span className="text-[10px] text-lime-400 font-semibold flex items-center gap-1 bg-lime-400/10 px-2.5 py-0.5 rounded-full border border-lime-400/20">
                  <CheckCircle2 className="size-3 text-lime-400" /> Confirmado
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTx(null)}
                aria-label="Fechar detalhamento"
                className="size-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition cursor-pointer"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Título do Evento & Data */}
            <div className="space-y-1">
              <h3 id="modal-tx-title" className="text-lg sm:text-xl font-extrabold text-white leading-snug">
                {selectedTx.title}
              </h3>
              <p className="text-xs text-zinc-400 flex items-center gap-1.5 pt-0.5">
                <Calendar className="size-3.5 text-purple-400 shrink-0" />
                <span>{selectedTx.fullDate}</span>
              </p>
            </div>

            {/* Bloco de Destaque da Pontuação Recebida ou Utilizada */}
            <div className="bg-gradient-to-br from-zinc-900 via-purple-950/40 to-zinc-900 border border-purple-500/25 rounded-2xl p-4 text-center space-y-1">
              <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">
                {selectedTx.positive ? "Pontuação Recebida" : "Pontuação Utilizada"}
              </p>
              <div
                className={`text-3xl sm:text-4xl font-black font-mono tracking-tight ${
                  selectedTx.positive ? "text-lime-400" : "text-amber-400"
                }`}
              >
                {selectedTx.amount}
              </div>
              <p className="text-[10px] text-zinc-500 font-medium">
                {selectedTx.positive ? "Crédito direto na sua carteira" : "Débito efetuado no saldo da carteira"}
              </p>
            </div>

            {/* Detalhes Específicos para Pedidos de Compra no Shop (Número e Valor em Reais) */}
            {(selectedTx.orderRef || selectedTx.orderTotalBrl) && (
              <div className="grid grid-cols-2 gap-2 text-xs">
                {selectedTx.orderRef && (
                  <div className="bg-zinc-900/90 border border-zinc-800/80 rounded-2xl p-3.5 space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 flex items-center gap-1.5">
                      <ShoppingBag className="size-3.5 text-purple-400" /> Número do Pedido
                    </span>
                    <p className="font-mono font-extrabold text-sm text-purple-300">
                      {selectedTx.orderRef}
                    </p>
                  </div>
                )}
                {selectedTx.orderTotalBrl && (
                  <div className="bg-zinc-900/90 border border-zinc-800/80 rounded-2xl p-3.5 space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 flex items-center gap-1.5">
                      <Receipt className="size-3.5 text-lime-400" /> Valor do Pedido
                    </span>
                    <p className="font-mono font-extrabold text-sm text-lime-400">
                      R$ {selectedTx.orderTotalBrl}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Detalhes dos Produtos Comprados no Shop */}
            {selectedTx.orderItems && selectedTx.orderItems.length > 0 ? (
              <div className="bg-zinc-900/90 border border-zinc-800/80 rounded-2xl p-3.5 space-y-2 text-xs">
                <span className="text-[10px] uppercase font-bold tracking-wider text-purple-400 flex items-center gap-1.5">
                  <ShoppingBag className="size-3.5 text-purple-400" />
                  {selectedTx.orderItems.length > 1 ? "Produtos Comprados no Shop" : "Produto Comprado no Shop"}
                </span>
                <div className="space-y-2 divide-y divide-zinc-800/60">
                  {selectedTx.orderItems.map((item, idx) => (
                    <div key={idx} className="pt-2 first:pt-0 flex items-start justify-between gap-2">
                      <div className="space-y-0.5 min-w-0">
                        <p className="font-bold text-white text-xs leading-snug">{item.name}</p>
                        {item.sellerName && (
                          <p className="text-[10px] text-zinc-400">
                            Loja / Seller: <span className="text-zinc-200 font-semibold">{item.sellerName}</span>
                          </p>
                        )}
                      </div>
                      {item.quantity && item.quantity > 1 && (
                        <span className="text-[10px] font-mono font-bold bg-zinc-800 text-purple-300 border border-purple-500/30 px-1.5 py-0.5 rounded shrink-0">
                          {item.quantity}x
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : selectedTx.orderProductName ? (
              <div className="bg-zinc-900/90 border border-zinc-800/80 rounded-2xl p-3.5 space-y-1 text-xs">
                <span className="text-[10px] uppercase font-bold tracking-wider text-purple-400 flex items-center gap-1.5">
                  <ShoppingBag className="size-3.5 text-purple-400" /> Produto Comprado no Shop
                </span>
                <p className="font-bold text-white text-xs">{selectedTx.orderProductName}</p>
              </div>
            ) : null}

            {/* Amigo Indicado / Adicionado à Tribo */}
            {selectedTx.friendName && (
              <div className="bg-gradient-to-r from-purple-950/40 via-zinc-900 to-zinc-900 border border-purple-500/30 rounded-2xl p-3.5 space-y-1.5 text-xs">
                <span className="text-[10px] uppercase font-bold tracking-wider text-purple-400 flex items-center gap-1.5">
                  <Users className="size-3.5 text-purple-400" /> Amigo Adicionado à Tribo
                </span>
                <div className="flex items-center justify-between gap-2">
                  <p className="font-extrabold text-sm text-white">{selectedTx.friendName}</p>
                  <span className="text-[9px] bg-lime-400/10 text-lime-400 border border-lime-400/20 px-2 py-0.5 rounded-full font-bold">
                    Novo Membro da Tribo
                  </span>
                </div>
              </div>
            )}

            {/* Selo Conquistado (se aplicável) */}
            {selectedTx.badgeName && (
              <div className="bg-zinc-900/90 border border-zinc-800/80 rounded-2xl p-3.5 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 flex items-center gap-1.5">
                  <Award className="size-3.5 text-lime-400" /> Selo Oficial
                </span>
                <span className="font-bold text-xs text-lime-300">
                  {selectedTx.badgeName}
                </span>
              </div>
            )}

            {/* Bloco de Descrição do Evento (sem título conforme solicitado) */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4">
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                {selectedTx.eventDescription}
              </p>
            </div>

            {/* Botão de Fechar */}
            <button
              type="button"
              onClick={() => setSelectedTx(null)}
              className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20 transition-all active:scale-[0.99] cursor-pointer"
            >
              <span>Fechar</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
