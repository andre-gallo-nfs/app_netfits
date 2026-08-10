import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Award, Lock, CheckCircle2, Sparkles, ChevronRight, Zap, Trophy,
  ArrowUpRight, Target, Share2, Users, ShoppingBag, BookOpen, Heart,
  ShieldCheck, Filter
} from "lucide-react";
import netfitsMark from "@/assets/netfits-mark.png";
import { useBadges, badgesStore, type BadgeCategory, type BadgeItem } from "@/lib/badges-store";

export const Route = createFileRoute("/levels")({
  head: () => ({
    meta: [
      { title: "Badges & Conquistas — Netfits" },
      {
        name: "description",
        content: "Conquiste selos de engajamento, leitura, compras e indicações. Ganhe bônus em nfs.",
      },
      { property: "og:title", content: "Badges & Conquistas — Netfits" },
    ],
  }),
  component: BadgesPage,
});

const CATEGORIES: { id: BadgeCategory | "all"; label: string }[] = [
  { id: "all", label: "Todos os Selos" },
  { id: "engajamento", label: "Engajamento & Leitura" },
  { id: "tribo", label: "Tribo & Indicações" },
  { id: "shop", label: "Shop & Compras" },
  { id: "perfil", label: "Perfil & Longevidade" },
];

function BadgesPage() {
  const badges = useBadges();
  const [activeTab, setActiveTab] = useState<BadgeCategory | "all">("all");

  const unlockedCount = badgesStore.getUnlockedCount();
  const totalCount = badgesStore.getTotalCount();
  const completionPercentage = Math.round((unlockedCount / totalCount) * 100);
  const totalBonusEarned = badges
    .filter((b) => b.unlocked)
    .reduce((acc, b) => acc + b.rewardNfs, 0);

  const filteredBadges = badges.filter(
    (b) => activeTab === "all" || b.category === activeTab
  );

  const unlockedBadges = filteredBadges.filter((b) => b.unlocked);
  const lockedBadges = filteredBadges.filter((b) => !b.unlocked);

  return (
    <div className="pb-8">
      {/* Hero Header */}
      <section className="px-4 pt-6 pb-2">
        <div className="flex items-center gap-2 mb-2">
          <img
            src={netfitsMark}
            alt=""
            className="w-5 h-5 object-contain rounded bg-foreground p-0.5"
          />
          <p className="text-[10px] font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
            Galeria de Conquistas
          </p>
        </div>
        <h1 className="text-3xl font-bold leading-[1.05] tracking-tight">
          Selos de Conquista.<br />
          <span className="text-foreground/50">Desbloqueie & Ganhe nfs.</span>
        </h1>
        <p className="text-xs text-foreground/70 mt-2 max-w-md">
          Execute tarefas de engajamento, compartilhe conteúdos, indique amigos e acumule compras para desbloquear selos exclusivos.
        </p>
      </section>

      {/* Progress Card */}
      <section className="px-4 pt-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900 via-purple-950 to-zinc-950 text-white p-5 shadow-xl border border-purple-500/30">
          <div className="absolute -right-8 -top-8 size-32 rounded-full bg-lime-400/20 blur-2xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-purple-300">
                  Progresso da sua Galeria
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <Award className="size-5 text-lime-400" />
                  <h2 className="text-lg font-bold text-white">
                    {unlockedCount} de {totalCount} Selos Conquistados
                  </h2>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-widest text-purple-300">Bônus Acumulado</p>
                <p className="text-xl font-extrabold text-lime-400">+{totalBonusEarned} nfs</p>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-baseline justify-between text-xs mb-2">
                <span className="text-purple-200">{completionPercentage}% concluído</span>
                <span className="font-mono text-lime-400 font-bold">
                  {totalCount - unlockedCount} selos restantes
                </span>
              </div>
              <div className="h-2.5 rounded-full bg-purple-950/80 border border-purple-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 via-purple-400 to-lime-400 rounded-full transition-all duration-500"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Chips */}
      <section className="pt-5 pb-2">
        <div className="flex gap-1.5 overflow-x-auto px-4 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const active = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap transition-all flex items-center gap-1 ${
                  active
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Unlocked Badges Section */}
      {unlockedBadges.length > 0 && (
        <section className="px-4 pt-4">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="size-4 text-lime-500" />
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-foreground">
              Selos Conquistados ({unlockedBadges.length})
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {unlockedBadges.map((badge) => (
              <BadgeCard key={badge.id} badge={badge} />
            ))}
          </div>
        </section>
      )}

      {/* Locked Badges Section */}
      {lockedBadges.length > 0 && (
        <section className="px-4 pt-6">
          <div className="flex items-center gap-2 mb-3">
            <Lock className="size-4 text-muted-foreground" />
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
              Selos a Conquistar ({lockedBadges.length})
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {lockedBadges.map((badge) => (
              <BadgeCard key={badge.id} badge={badge} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function BadgeCard({ badge }: { badge: BadgeItem }) {
  const isUnlocked = badge.unlocked;

  return (
    <div
      className={`rounded-2xl p-4 transition-all border relative overflow-hidden flex flex-col justify-between ${
        isUnlocked
          ? "bg-card border-purple-600/30 ring-1 ring-purple-600/10 shadow-sm"
          : "bg-muted/40 border-border opacity-90"
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-3">
            <div
              className={`size-11 rounded-2xl grid place-items-center text-xl shadow-inner ${
                isUnlocked
                  ? "bg-gradient-to-tr from-purple-600 to-lime-400 text-white ring-2 ring-lime-400/40"
                  : "bg-muted text-muted-foreground border border-border"
              }`}
            >
              {badge.icon}
            </div>
            <div>
              <h4 className="font-bold text-sm text-foreground leading-tight">{badge.title}</h4>
              <span className="text-[10px] text-muted-foreground font-semibold">
                {isUnlocked ? `Conquistado em ${badge.unlockedAt}` : "Em progresso"}
              </span>
            </div>
          </div>
          <span
            className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full shrink-0 ${
              isUnlocked
                ? "bg-lime-400/20 text-lime-700 dark:text-lime-400 border border-lime-400/30"
                : "bg-purple-600/10 text-purple-600 border border-purple-600/20"
            }`}
          >
            +{badge.rewardNfs} nfs
          </span>
        </div>

        <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{badge.description}</p>
      </div>

      <div>
        {/* Progress bar for locked badges */}
        {!isUnlocked && (
          <div className="space-y-2 pt-2 border-t border-border/60">
            <div className="flex justify-between items-center text-[10px] font-semibold text-muted-foreground">
              <span>{badge.taskInstruction}</span>
              <span className="font-mono text-purple-600 font-bold">
                {badge.currentProgress}/{badge.maxProgress}
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
              <div
                className="h-full bg-purple-600 rounded-full transition-all"
                style={{
                  width: `${Math.min(
                    100,
                    Math.round((badge.currentProgress / badge.maxProgress) * 100)
                  )}%`,
                }}
              />
            </div>
          </div>
        )}

        {isUnlocked && (
          <div className="pt-2 border-t border-purple-600/20 flex items-center justify-between text-[11px] font-bold text-purple-600">
            <span className="flex items-center gap-1 text-lime-600 dark:text-lime-400">
              <CheckCircle2 className="size-3.5" />
              Selo Desbloqueado
            </span>
            <span className="text-muted-foreground font-normal">Recompensa Paga</span>
          </div>
        )}
      </div>
    </div>
  );
}
