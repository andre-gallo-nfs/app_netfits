import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles, Crown, Medal, Check, Watch, Apple, X, CreditCard, Lock,
  ShieldCheck, Calendar, TrendingUp, Users, Zap, Gift, Trophy, ArrowRight, Star,
} from "lucide-react";
import netfitsMark from "@/assets/netfits-mark.png";
import { useLevel, levelStore, LEVEL_LABELS } from "@/lib/level-store";

export const Route = createFileRoute("/levels")({
  head: () => ({
    meta: [
      { title: "Níveis — Netfits" },
      {
        name: "description",
        content: "Programa de níveis Netfits. Atleta, Prime e Elite.",
      },
      { property: "og:title", content: "Níveis — Netfits" },
    ],
  }),
  component: LevelsPage,
});

type LevelKey = "atleta" | "prime" | "elite";

const levels: Array<{
  key: LevelKey;
  name: string;
  short: string;
  tag: string;
  icon: typeof Medal;
  multiplier: string;
  price: string;
  desc: string;
  highlight: { icon: typeof Zap; label: string; value: string }[];
  perks: { icon: typeof Check; text: string }[];
  cardClass: string;
  badgeClass: string;
  iconClass: string;
}> = [
  {
    key: "atleta",
    name: "Netfiter Atleta",
    short: "Atleta",
    tag: "Inicial · Grátis",
    icon: Medal,
    multiplier: "1×",
    price: "Grátis",
    desc: "Seu ponto de partida ao criar conta na Netfits.",
    highlight: [
      { icon: Zap, label: "nfs por compra", value: "1×" },
      { icon: Trophy, label: "Eventos parceiros", value: "Sim" },
    ],
    perks: [
      { icon: Check, text: "Acesso completo ao feed e ao marketplace" },
      { icon: Check, text: "Ganho de nfs em compras e desafios" },
      { icon: Check, text: "Participação em eventos e provas parceiras" },
    ],
    cardClass: "bg-card ring-1 ring-black/5",
    badgeClass: "bg-muted text-foreground/70",
    iconClass: "bg-muted text-foreground",
  },
  {
    key: "prime",
    name: "Netfiter Prime",
    short: "Prime",
    tag: "Assinatura · R$ 19,90/mês",
    icon: Sparkles,
    multiplier: "1,5×",
    price: "R$ 19,90/mês",
    desc: "Acelere seus ganhos e desbloqueie integrações exclusivas.",
    highlight: [
      { icon: Zap, label: "base em acúmulos", value: "1×" },
      { icon: Zap, label: "bônus Prime", value: "+50%" },
    ],
    perks: [
      { icon: Zap, text: "1,5× nfs em todas as transações de acúmulo" },
      { icon: Watch, text: "Ganhe nfs por atividade do seu wearable" },
      { icon: Users, text: "Indique amigos e ganhe 10% dos nfs deles" },
    ],
    cardClass: "bg-card ring-2 ring-brand/60 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]",
    badgeClass: "bg-brand text-brand-foreground",
    iconClass: "bg-brand text-brand-foreground",
  },
  {
    key: "elite",
    name: "Netfiter Elite",
    short: "Elite",
    tag: "Top 1% · Por mérito",
    icon: Crown,
    multiplier: "2×",
    price: "Por mérito",
    desc: "Reservado aos maiores usuários da plataforma nos últimos 3 meses.",
    highlight: [
      { icon: Zap, label: "base em créditos", value: "1×" },
      { icon: Zap, label: "bônus Elite", value: "+100%" },
    ],
    perks: [
      { icon: Zap, text: "Dobro de nfs em cada crédito recebido — sempre" },
      { icon: Star, text: "Selo Elite no perfil e prioridade em lançamentos" },
      { icon: Trophy, text: "Convites para experiências e provas exclusivas" },
    ],
    cardClass: "bg-gradient-to-br from-foreground via-foreground to-foreground/85 text-background ring-1 ring-black/20 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.45)]",
    badgeClass: "bg-background/15 text-background backdrop-blur",
    iconClass: "bg-background text-foreground",
  },
];

function LevelsPage() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const currentLevel = useLevel();
  const currentMeta = levels.find((l) => l.key === currentLevel) ?? levels[0];
  const nfsThisCycle = 2840;
  const nfsToPro = 18000;
  const progress = Math.min(100, Math.round((nfsThisCycle / nfsToPro) * 100));

  return (
    <div className="pb-6">
      {/* Hero */}
      <section className="px-4 pt-6">
        <div className="flex items-center gap-2 mb-2">
          <img
            src={netfitsMark}
            alt=""
            className="w-5 h-5 object-contain rounded bg-foreground p-0.5"
          />
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Programa Netfits
          </p>
        </div>
        <h1 className="text-3xl font-bold leading-[1.05] tracking-tight">
          Suba de nível.<br />
          <span className="text-foreground/50">Ganhe mais nfs.</span>
        </h1>
        <p className="text-sm text-foreground/70 mt-2 max-w-md">
          Três níveis, benefícios crescentes. Cada nível multiplica seus ganhos e abre novas portas no ecossistema.
        </p>
      </section>

      {/* Progress card */}
      <section className="px-4 pt-5">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-foreground to-foreground/80 text-background p-5">
          <div className="absolute -right-8 -top-8 size-32 rounded-full bg-brand/30 blur-2xl" />
          <div className="relative">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-background/60">
                  Seu nível atual
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <currentMeta.icon className="size-5 text-brand" />
                  <h2 className="text-lg font-bold">Netfiter {LEVEL_LABELS[currentLevel]}</h2>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-widest text-background/60">Multiplicador</p>
                <p className="text-2xl font-bold text-brand">{currentMeta.multiplier}</p>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-baseline justify-between text-xs mb-2">
                <span className="text-background/70">Progresso até Elite</span>
                <span className="font-bold">
                  <span className="text-brand">{nfsThisCycle.toLocaleString("pt-BR")}</span>
                  <span className="text-background/50"> / {nfsToPro.toLocaleString("pt-BR")} nfs</span>
                </span>
              </div>
              <div className="h-2 rounded-full bg-background/15 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand to-brand/70 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex items-center justify-between mt-2 text-[10px] text-background/60">
                <span>Ciclo de 3 meses</span>
                <span className="flex items-center gap-1">
                  <TrendingUp className="size-3" />
                  {progress}% concluído
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical ladder timeline */}
      <section className="px-4 pt-6">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
          A escada Netfits
        </p>
        <div className="relative space-y-3">
          {/* connector line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-muted via-brand/40 to-foreground/30" />
          {levels.map((lv, idx) => {
            const isCurrent = lv.key === currentLevel;
            return (
              <div key={lv.key} className="relative pl-16">
                {/* node */}
                <div className="absolute left-0 top-4 flex flex-col items-center">
                  <div className={`size-14 rounded-full grid place-items-center ${lv.iconClass} ring-4 ring-background relative z-10`}>
                    <lv.icon className="size-6" />
                  </div>
                  {isCurrent && (
                    <span className="absolute -bottom-1 text-[8px] font-bold uppercase tracking-widest text-brand bg-foreground px-1.5 py-0.5 rounded">
                      Você
                    </span>
                  )}
                </div>

                <div className={`rounded-2xl p-5 ${lv.cardClass}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <span className={`inline-block text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${lv.badgeClass}`}>
                        {lv.tag}
                      </span>
                      <h3 className="text-lg font-bold leading-tight mt-2">{lv.name}</h3>
                      <p className={`text-xs mt-1 ${lv.key === "elite" ? "text-background/70" : "text-foreground/70"}`}>
                        {lv.desc}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      {lv.key === "prime" ? (
                        <>
                          <p className="text-2xl font-bold leading-none">1×</p>
                          <p className="text-[9px] uppercase tracking-widest mt-1 text-brand font-bold">+50% bônus</p>
                        </>
                      ) : lv.key === "elite" ? (
                        <>
                          <p className="text-2xl font-bold leading-none">1×</p>
                          <p className="text-[9px] uppercase tracking-widest mt-1 text-brand font-bold">+100% bônus</p>
                        </>
                      ) : (
                        <>
                          <p className="text-2xl font-bold leading-none">{lv.multiplier}</p>
                          <p className="text-[9px] uppercase tracking-widest mt-1 text-muted-foreground">
                            nfs
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* highlight stats */}
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {lv.highlight.map((h) => (
                      <div
                        key={h.label}
                        className={`rounded-xl px-3 py-2 ${
                          lv.key === "elite" ? "bg-background/10" : "bg-muted"
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <h.icon className={`size-3 ${lv.key === "elite" ? "text-brand" : "text-foreground/70"}`} />
                          <p className={`text-[9px] uppercase tracking-wider ${lv.key === "elite" ? "text-background/60" : "text-muted-foreground"}`}>
                            {h.label}
                          </p>
                        </div>
                        <p className="text-sm font-bold mt-0.5">{h.value}</p>
                      </div>
                    ))}
                  </div>

                  <ul className="mt-4 space-y-2">
                    {lv.perks.map((p) => (
                      <li key={p.text} className="flex items-start gap-2 text-xs">
                      <p.icon className={`size-3.5 mt-0.5 shrink-0 ${
                          lv.key === "elite" ? "text-brand" : "text-brand"
                        }`} />
                        <span className={lv.key === "elite" ? "text-background/90" : "text-foreground/85"}>
                          {p.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {lv.key === "elite" && (
                    <div className="mt-5 flex items-center gap-2 text-[10px] text-background/70 bg-background/10 rounded-full px-3 py-2">
                      <Lock className="size-3" />
                      Acesso por mérito · atualizado mensalmente
                    </div>
                  )}
                  {lv.key === "prime" && currentLevel !== "prime" && currentLevel !== "elite" && (
                    <button
                      onClick={() => setCheckoutOpen(true)}
                      className="mt-5 w-full bg-brand text-brand-foreground text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-2"
                    >
                      <Sparkles className="size-3.5" />
                      Assinar Prime · R$ 19,90/mês
                      <ArrowRight className="size-3.5" />
                    </button>
                  )}
                  {lv.key === "prime" && currentLevel === "prime" && (
                    <div className="mt-5 flex items-center gap-2 text-[10px] text-foreground/70 bg-brand/20 rounded-full px-3 py-2">
                      <Check className="size-3" />
                      Assinatura Prime ativa · 1,5× nfs em acúmulos
                    </div>
                  )}
                  {lv.key === "atleta" && isCurrent && (
                    <div className="mt-5 flex items-center gap-2 text-[10px] text-foreground/70 bg-brand/20 rounded-full px-3 py-2">
                      <Check className="size-3" />
                      Nível ativo na sua conta
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison */}
      <section className="px-4 pt-7">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
          Comparativo rápido
        </p>
        <div className="bg-card rounded-2xl ring-1 ring-black/5 overflow-hidden">
          <div className="grid grid-cols-4 text-[10px] font-bold uppercase tracking-wider bg-muted/60 px-3 py-2">
            <span className="text-muted-foreground">Benefício</span>
            <span className="text-center text-muted-foreground">Atleta</span>
            <span className="text-center text-brand">Prime</span>
            <span className="text-center text-foreground">Elite</span>
          </div>
          {[
            ["Base em acúmulos", "1×", "1×", "1×"],
            ["Bônus do nível", "—", "+50%", "+100%"],
            ["Wearables", "—", "✓", "✓"],
            ["Indicação 10%", "—", "✓", "✓"],
            ["Eventos exclusivos", "—", "—", "✓"],
            ["Selo no perfil", "—", "Prime", "Elite"],
          ].map(([feat, a, pre, pro], i) => (
            <div
              key={feat}
              className={`grid grid-cols-4 text-xs px-3 py-2.5 items-center ${
                i % 2 === 0 ? "" : "bg-muted/30"
              }`}
            >
              <span className="text-foreground/80">{feat}</span>
              <span className="text-center text-foreground/60">{a}</span>
              <span className="text-center font-semibold text-brand">{pre}</span>
              <span className="text-center font-bold">{pro}</span>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-muted-foreground mt-3 text-center">
          nfs = netfits, a moeda do ecossistema Netfits.
        </p>
      </section>

      {checkoutOpen && (
        <CheckoutSheet
          confirmed={confirmed}
          onConfirm={() => {
            levelStore.set("prime");
            setConfirmed(true);
          }}
          onClose={() => setCheckoutOpen(false)}
        />
      )}
    </div>
  );
}

function CheckoutSheet({
  confirmed,
  onConfirm,
  onClose,
}: {
  confirmed: boolean;
  onConfirm: () => void;
  onClose: () => void;
}) {
  const [method, setMethod] = useState<"card" | "pix">("card");

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-md bg-background rounded-t-3xl max-h-[92vh] overflow-y-auto">
        <div className="sticky top-0 bg-background px-5 pt-4 pb-3 flex items-center justify-between border-b border-black/5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Checkout · Netfits Marketplace
            </p>
            <h2 className="text-base font-bold">Netfiter Prime</h2>
          </div>
          <button
            onClick={onClose}
            className="size-8 rounded-full bg-muted grid place-items-center"
          >
            <X className="size-4" />
          </button>
        </div>

        {!confirmed ? (
          <div className="px-5 py-4 space-y-5">
            <div className="bg-card rounded-2xl ring-1 ring-black/5 p-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-brand text-brand-foreground grid place-items-center">
                  <Sparkles className="size-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold">Assinatura Prime</p>
                  <p className="text-[11px] text-muted-foreground">
                    Cobrança recorrente · mensal
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-base font-bold">R$ 19,90</p>
                  <p className="text-[10px] text-muted-foreground">/mês</p>
                </div>
              </div>
              <ul className="mt-3 space-y-1.5">
                {[
                  "1,5× nfs em todas as transações de acúmulo",
                  "Wearables conectados + nfs por atividade",
                  "10% dos nfs de cada amigo indicado",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-[11px]">
                    <Check className="size-3 text-brand mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                Forma de pagamento
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setMethod("card")}
                  className={`rounded-xl ring-1 p-3 flex items-center gap-2 text-xs font-semibold ${
                    method === "card"
                      ? "ring-brand bg-brand/5"
                      : "ring-black/10 bg-card"
                  }`}
                >
                  <CreditCard className="size-4" />
                  Cartão
                </button>
                <button
                  onClick={() => setMethod("pix")}
                  className={`rounded-xl ring-1 p-3 flex items-center gap-2 text-xs font-semibold ${
                    method === "pix"
                      ? "ring-brand bg-brand/5"
                      : "ring-black/10 bg-card"
                  }`}
                >
                  <Calendar className="size-4" />
                  Pix recorrente
                </button>
              </div>
            </div>

            {method === "card" ? (
              <div className="space-y-2">
                <Field label="Número do cartão" placeholder="•••• •••• •••• 4242" />
                <div className="grid grid-cols-2 gap-2">
                  <Field label="Validade" placeholder="MM/AA" />
                  <Field label="CVV" placeholder="123" />
                </div>
                <Field label="Nome impresso" placeholder="Como está no cartão" />
              </div>
            ) : (
              <div className="bg-card rounded-2xl ring-1 ring-black/5 p-4 text-xs text-foreground/80">
                Autorize o débito automático via Pix recorrente no app do seu
                banco após confirmar.
              </div>
            )}

            <div className="bg-muted rounded-xl p-3 space-y-1.5 text-[11px] text-foreground/75">
              <Row label="Plano Prime" value="R$ 19,90" />
              <Row label="Periodicidade" value="Mensal" />
              <Row label="Próxima cobrança" value={nextChargeLabel()} />
              <div className="h-px bg-black/10 my-1" />
              <Row label="Total hoje" value="R$ 19,90" bold />
            </div>

            <button
              onClick={onConfirm}
              className="w-full bg-brand text-brand-foreground text-sm font-bold py-3 rounded-full flex items-center justify-center gap-2"
            >
              <Lock className="size-4" />
              Confirmar assinatura · R$ 19,90/mês
            </button>
            <p className="text-[10px] text-center text-muted-foreground flex items-center justify-center gap-1">
              <ShieldCheck className="size-3" />
              Pagamento processado pelo Netfits Marketplace. Cancele quando
              quiser.
            </p>
          </div>
        ) : (
          <div className="px-5 py-8 text-center space-y-4">
            <div className="mx-auto size-14 rounded-full bg-brand text-brand-foreground grid place-items-center">
              <Check className="size-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Você agora é Prime!</h3>
              <p className="text-xs text-foreground/70 mt-1">
                Cobrança recorrente de <b>R$ 19,90/mês</b> ativada. Próxima
                cobrança em {nextChargeLabel()}.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-full bg-foreground text-background text-sm font-bold py-3 rounded-full"
            >
              Concluir
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-1 w-full bg-card ring-1 ring-black/10 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-brand"
      />
    </label>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex justify-between ${bold ? "font-bold text-foreground" : ""}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function nextChargeLabel() {
  const d = new Date();
  d.setMonth(d.getMonth() + 1);
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
}
