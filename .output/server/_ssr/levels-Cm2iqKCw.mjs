import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { n as netfitsMark } from "./netfits-mark-DN6CUhW7.mjs";
import { d as useBadges, e as badgesStore } from "./router-DWJenD7q.mjs";
import "../_libs/sonner.mjs";
import { a as Award, a0 as CircleCheck, a7 as Lock } from "../_libs/lucide-react.mjs";

import "../_libs/unenv.mjs";




import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";

import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const CATEGORIES = [{
  id: "all",
  label: "Todos os Selos"
}, {
  id: "engajamento",
  label: "Engajamento & Leitura"
}, {
  id: "tribo",
  label: "Tribo & Indicações"
}, {
  id: "shop",
  label: "Shop & Compras"
}, {
  id: "perfil",
  label: "Perfil & Longevidade"
}];
function BadgesPage() {
  const badges = useBadges();
  const [activeTab, setActiveTab] = reactExports.useState("all");
  const unlockedCount = badgesStore.getUnlockedCount();
  const totalCount = badgesStore.getTotalCount();
  const completionPercentage = Math.round(unlockedCount / totalCount * 100);
  const totalBonusEarned = badges.filter((b) => b.unlocked).reduce((acc, b) => acc + b.rewardNfs, 0);
  const filteredBadges = badges.filter((b) => activeTab === "all" || b.category === activeTab);
  const unlockedBadges = filteredBadges.filter((b) => b.unlocked);
  const lockedBadges = filteredBadges.filter((b) => !b.unlocked);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 pt-6 pb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: netfitsMark, alt: "", className: "w-5 h-5 object-contain rounded bg-foreground p-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400", children: "Galeria de Conquistas" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-bold leading-[1.05] tracking-tight", children: [
        "Selos de Conquista.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/50", children: "Desbloqueie & Ganhe nfs." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/70 mt-2 max-w-md", children: "Execute tarefas de engajamento, compartilhe conteúdos, indique amigos e acumule compras para desbloquear selos exclusivos." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900 via-purple-950 to-zinc-950 text-white p-5 shadow-xl border border-purple-500/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-8 -top-8 size-32 rounded-full bg-lime-400/20 blur-2xl pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-purple-300", children: "Progresso da sua Galeria" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "size-5 text-lime-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-bold text-white", children: [
                unlockedCount,
                " de ",
                totalCount,
                " Selos Conquistados"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-purple-300", children: "Bônus Acumulado" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-extrabold text-lime-400", children: [
              "+",
              totalBonusEarned,
              " nfs"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between text-xs mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-purple-200", children: [
              completionPercentage,
              "% concluído"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-lime-400 font-bold", children: [
              totalCount - unlockedCount,
              " selos restantes"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 rounded-full bg-purple-950/80 border border-purple-800 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-to-r from-purple-500 via-purple-400 to-lime-400 rounded-full transition-all duration-500", style: {
            width: `${completionPercentage}%`
          } }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-5 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 overflow-x-auto px-4 no-scrollbar", children: CATEGORIES.map((cat) => {
      const active = activeTab === cat.id;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab(cat.id), className: `text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap transition-all flex items-center gap-1 ${active ? "bg-purple-600 text-white shadow-md shadow-purple-600/20" : "bg-muted text-muted-foreground hover:text-foreground"}`, children: cat.label }, cat.id);
    }) }) }),
    unlockedBadges.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 pt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-lime-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs font-extrabold uppercase tracking-widest text-foreground", children: [
          "Selos Conquistados (",
          unlockedBadges.length,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: unlockedBadges.map((badge) => /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCard, { badge }, badge.id)) })
    ] }),
    lockedBadges.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 pt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "size-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs font-extrabold uppercase tracking-widest text-muted-foreground", children: [
          "Selos a Conquistar (",
          lockedBadges.length,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: lockedBadges.map((badge) => /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCard, { badge }, badge.id)) })
    ] })
  ] });
}
function BadgeCard({
  badge
}) {
  const isUnlocked = badge.unlocked;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl p-4 transition-all border relative overflow-hidden flex flex-col justify-between ${isUnlocked ? "bg-card border-purple-600/30 ring-1 ring-purple-600/10 shadow-sm" : "bg-muted/40 border-border opacity-90"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-11 rounded-2xl grid place-items-center text-xl shadow-inner ${isUnlocked ? "bg-gradient-to-tr from-purple-600 to-lime-400 text-white ring-2 ring-lime-400/40" : "bg-muted text-muted-foreground border border-border"}`, children: badge.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm text-foreground leading-tight", children: badge.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground font-semibold", children: isUnlocked ? `Conquistado em ${badge.unlockedAt}` : "Em progresso" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[10px] font-extrabold px-2 py-0.5 rounded-full shrink-0 ${isUnlocked ? "bg-lime-400/20 text-lime-700 dark:text-lime-400 border border-lime-400/30" : "bg-purple-600/10 text-purple-600 border border-purple-600/20"}`, children: [
          "+",
          badge.rewardNfs,
          " nfs"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3 leading-relaxed", children: badge.description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      !isUnlocked && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2 border-t border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-[10px] font-semibold text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: badge.taskInstruction }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-purple-600 font-bold", children: [
            badge.currentProgress,
            "/",
            badge.maxProgress
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-purple-600 rounded-full transition-all", style: {
          width: `${Math.min(100, Math.round(badge.currentProgress / badge.maxProgress * 100))}%`
        } }) })
      ] }),
      isUnlocked && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-purple-600/20 flex items-center justify-between text-[11px] font-bold text-purple-600", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-lime-600 dark:text-lime-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-3.5" }),
          "Selo Desbloqueado"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: "Recompensa Paga" })
      ] })
    ] })
  ] });
}
export {
  BadgesPage as component
};
