import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as activities } from "./router-DaDBMgHi.mjs";
import { u as useOperationalParams } from "./index.mjs";
import "../_libs/sonner.mjs";


import "../_libs/seroval.mjs";
import { A as Activity, w as Flame, d as Sparkles, c as ShieldCheck, k as Check } from "../_libs/lucide-react.mjs";

import "../_libs/unenv.mjs";




import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";

import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";




function ActivitiesPage() {
  const params = useOperationalParams();
  const currentWeekWorkouts = 3;
  const maxWeeklyWorkouts = params.weeklyMaxRewardedWorkouts || 5;
  const pointsPerWorkout = params.nfsPerWorkout || 20;
  const streakBonus = params.workoutStreakBonusNfs || 20;
  const progressPct = Math.min(100, Math.round(currentWeekWorkouts / maxWeeklyWorkouts * 100));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-10 space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pt-6 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-lime-400 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-lime-500 dark:text-lime-400", children: "Sweat-to-Earn Oficial" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-black tracking-tight text-zinc-900 dark:text-white", children: "Atividades & Hábitos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-500 dark:text-zinc-400 mt-0.5", children: "Esforço biológico real auditado por sensores ópticos e GPS." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 rounded-2xl bg-lime-400/10 border border-lime-400/20 text-lime-600 dark:text-lime-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "size-6" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-zinc-900 to-zinc-950 text-white rounded-3xl p-5 border border-zinc-800 shadow-xl space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-lime-400 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "size-3.5 text-lime-400" }),
            "Ciclo Semanal em Andamento"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-black mt-0.5", children: [
            currentWeekWorkouts,
            " de ",
            maxWeeklyWorkouts,
            " Treinos Validados"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-3 py-1 rounded-full bg-lime-400/15 border border-lime-400/30 text-lime-400 text-xs font-mono font-black", children: [
          "+",
          currentWeekWorkouts * pointsPerWorkout,
          " nfs"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[11px] font-bold text-zinc-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Progresso da semana (",
            progressPct,
            "%)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lime-400", children: [
            "Meta: ",
            maxWeeklyWorkouts,
            " treinos"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-3 bg-zinc-800 rounded-full overflow-hidden p-0.5 border border-zinc-700/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-to-r from-purple-500 via-lime-400 to-lime-300 rounded-full transition-all duration-500 shadow-sm", style: {
          width: `${progressPct}%`
        } }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-950/40 border border-purple-500/30 rounded-2xl p-3.5 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-xl bg-purple-500/20 grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4 text-purple-300" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-purple-200", children: [
            "Faltam apenas ",
            Math.max(0, maxWeeklyWorkouts - currentWeekWorkouts),
            " treinos para o Golden Streak!"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-purple-300/80 leading-tight", children: [
            "Complete a meta de 5 treinos na semana e receba um bônus adicional de ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
              "+",
              streakBonus,
              " nfs"
            ] }),
            "."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-black uppercase tracking-wider text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4 text-lime-500 dark:text-lime-400" }),
          "Regras do Programa Sweat-to-Earn"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-zinc-500 bg-zinc-200 dark:bg-zinc-800 px-2 py-0.5 rounded", children: "Auditoria Ativa" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-white dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 space-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-zinc-500 block font-medium", children: "Recompensa Base" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-black text-lime-600 dark:text-lime-400 font-mono text-sm", children: [
            "+",
            pointsPerWorkout,
            " nfs / treino"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-zinc-400 block", children: "Máx. 1 treino/dia (até 5/sem)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-white dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 space-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-zinc-500 block font-medium", children: "Critério de Duração" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-black text-zinc-900 dark:text-white font-mono text-sm", children: [
            "≥ ",
            params.minWorkoutDurationMinutes || 30,
            " min"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-zinc-400 block", children: [
            "≥ ",
            params.minWorkoutDurationHiitMinutes || 20,
            " min para treinos HIIT"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-white dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 space-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-zinc-500 block font-medium", children: "Gasto Calórico" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-black text-zinc-900 dark:text-white font-mono text-sm", children: [
            "≥ ",
            params.minWorkoutActiveCalories || 150,
            " kcal"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-zinc-400 block", children: "Calorias ativas por biometria" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-white dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 space-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-zinc-500 block font-medium", children: "Janela de Sincronia" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-black text-purple-600 dark:text-purple-400 font-mono text-sm", children: [
            "Até ",
            params.maxRetroactiveSyncHours || 48,
            "h"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-zinc-400 block", children: "Ingestão máxima retroativa" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-zinc-500 dark:text-zinc-400 leading-tight pt-1", children: [
        "🛡️ ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Antifraude de Sensores:" }),
        " Apenas atividades registradas por hardware (sensores de GPS e frequência cardíaca) pontuam. Entradas manuais sem sensores são rejeitadas."
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 space-y-3 shadow-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Dispositivos Conectados" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-lime-600 dark:text-lime-400 font-semibold flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3" }),
          " Sincronizado"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 text-center text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex flex-col items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "⌚" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[11px] text-zinc-800 dark:text-zinc-200", children: "Apple Watch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-zinc-400", children: "HealthKit" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex flex-col items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "🧭" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[11px] text-zinc-800 dark:text-zinc-200", children: "Garmin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-zinc-400", children: "Connect API" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex flex-col items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "🏃" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[11px] text-zinc-800 dark:text-zinc-200", children: "Strava" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-zinc-400", children: "OAuth 2.0" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 space-y-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400", children: "Histórico Recente Auditado" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-zinc-400", children: "Últimos 7 dias" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: activities.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "bg-card rounded-2xl p-3.5 flex items-center gap-3 ring-1 ring-black/5 dark:ring-zinc-800 shadow-xs hover:border-lime-500/30 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-11 rounded-2xl bg-zinc-100 dark:bg-zinc-800 grid place-items-center text-xl shrink-0", children: a.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-zinc-900 dark:text-white truncate", children: a.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-zinc-500 dark:text-zinc-400", children: a.date }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-mono bg-lime-500/10 text-lime-600 dark:text-lime-400 px-1.5 py-0.2 rounded font-bold", children: "GPS / FC OK" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black font-mono text-white bg-purple-600 dark:bg-purple-600 px-2.5 py-1 rounded-xl shadow-xs", children: a.reward })
      ] }, a.id)) })
    ] })
  ] });
}
export {
  ActivitiesPage as component
};
