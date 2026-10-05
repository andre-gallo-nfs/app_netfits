import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useOperationalParams } from "@/lib/operational-params-store";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { WearableSyncSheet } from "@/components/WearableSyncSheet";
import {
  Activity, Flame, ShieldCheck, Award, Sparkles, Clock, HeartPulse,
  CheckCircle2, Watch, Check, ChevronRight, Zap, Plus
} from "lucide-react";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Atividades & Sweat-to-Earn — Netfits" },
      {
        name: "description",
        content: "Suas atividades físicas validadas por sensores geram netfits reais.",
      },
      { property: "og:title", content: "Atividades & Sweat-to-Earn — Netfits" },
    ],
  }),
  component: ActivitiesPage,
});

function ActivitiesPage() {
  const params = useOperationalParams();
  const activeUser = sharedSandboxStore.useActiveUser();
  const [showSyncSheet, setShowSyncSheet] = useState(false);

  // Obtém exclusivamente as atividades reais registradas para o usuário ativo (zero dados mockados)
  const userWorkoutTxs = sharedSandboxStore
    .getUserTransactions(activeUser.id)
    .filter((tx) => tx.category === "workout");

  const currentWeekWorkouts = userWorkoutTxs.length;
  const maxWeeklyWorkouts = params.weeklyMaxRewardedWorkouts || 5;
  const pointsPerWorkout = params.nfsPerWorkout || 20;
  const streakBonus = params.workoutStreakBonusNfs || 20;
  const progressPct = Math.min(100, Math.round((currentWeekWorkouts / maxWeeklyWorkouts) * 100));

  const userWearable = (activeUser.wearable || "").toLowerCase();
  const hasAppleWatch = userWearable.includes("apple");
  const hasGarmin = userWearable.includes("garmin");
  const hasStrava = userWearable.includes("strava");
  const hasAnyWearable = hasAppleWatch || hasGarmin || hasStrava || (userWearable.length > 0 && userWearable !== "não uso");

  return (
    <div className="pb-10 space-y-5">
      {/* Cabeçalho da Página */}
      <section className="px-4 pt-6 pb-2">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="size-2 rounded-full bg-lime-400 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-lime-500 dark:text-lime-400">
                Sweat-to-Earn Oficial
              </span>
            </div>
            <h1 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-white">
              Atividades & Hábitos
            </h1>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              Esforço biológico real auditado por sensores ópticos e GPS.
            </p>
          </div>
          <div className="p-2.5 rounded-2xl bg-lime-400/10 border border-lime-400/20 text-lime-600 dark:text-lime-400">
            <Activity className="size-6" />
          </div>
        </div>
      </section>

      {/* Card 1: Meta Semanal de Consistência (Gamificação & Streak) */}
      <section className="px-4">
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white rounded-3xl p-5 border border-zinc-800 shadow-xl space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400 flex items-center gap-1.5">
                <Flame className="size-3.5 text-lime-400" />
                Ciclo Semanal em Andamento
              </span>
              <h2 className="text-lg font-black mt-0.5">
                {currentWeekWorkouts} de {maxWeeklyWorkouts} Treinos Validados
              </h2>
            </div>
            <span className="px-3 py-1 rounded-full bg-lime-400/15 border border-lime-400/30 text-lime-400 text-xs font-mono font-black">
              +{currentWeekWorkouts * pointsPerWorkout} nfs
            </span>
          </div>

          {/* Barra de Progresso Semanal */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] font-bold text-zinc-400">
              <span>Progresso da semana ({progressPct}%)</span>
              <span className="text-lime-400">Meta: {maxWeeklyWorkouts} treinos</span>
            </div>
            <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden p-0.5 border border-zinc-700/50">
              <div
                className="h-full bg-gradient-to-r from-purple-500 via-lime-400 to-lime-300 rounded-full transition-all duration-500 shadow-sm"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          {/* Chamada para o Golden Streak */}
          <div className="bg-purple-950/40 border border-purple-500/30 rounded-2xl p-3.5 flex items-center gap-3">
            <div className="size-8 rounded-xl bg-purple-500/20 grid place-items-center shrink-0">
              <Sparkles className="size-4 text-purple-300" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-purple-200">
                Faltam {Math.max(0, maxWeeklyWorkouts - currentWeekWorkouts)} treinos para o Golden Streak!
              </p>
              <p className="text-[10px] text-purple-300/80 leading-tight">
                Complete a meta de 5 treinos na semana e receba um bônus adicional de <b>+{streakBonus} nfs</b>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Card 2: Diretrizes & Parâmetros Oficiais de Validação */}
      <section className="px-4">
        <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2.5">
            <span className="text-xs font-black uppercase tracking-wider text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-lime-500 dark:text-lime-400" />
              Regras do Programa Sweat-to-Earn
            </span>
            <span className="text-[10px] font-bold text-zinc-500 bg-zinc-200 dark:bg-zinc-800 px-2 py-0.5 rounded">
              Auditoria Ativa
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 space-y-0.5">
              <span className="text-[10px] text-zinc-500 block font-medium">Recompensa / Treino</span>
              <span className="font-black text-lime-600 dark:text-lime-400 font-mono text-sm">
                +{pointsPerWorkout} nfs
              </span>
              <span className="text-[9px] text-zinc-400 block">Até {maxWeeklyWorkouts} treinos/semana</span>
            </div>

            <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 space-y-0.5">
              <span className="text-[10px] text-zinc-500 block font-medium">Critério de Duração</span>
              <span className="font-black text-zinc-900 dark:text-white font-mono text-sm">
                ≥ {params.minWorkoutDurationMinutes || 30} min
              </span>
              <span className="text-[9px] text-zinc-400 block">≥ {params.minWorkoutDurationHiitMinutes || 20} min para treinos HIIT</span>
            </div>

            <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 space-y-0.5">
              <span className="text-[10px] text-zinc-500 block font-medium">Gasto Calórico</span>
              <span className="font-black text-zinc-900 dark:text-white font-mono text-sm">
                ≥ {params.minWorkoutActiveCalories || 150} kcal
              </span>
              <span className="text-[9px] text-zinc-400 block">Calorias ativas por biometria</span>
            </div>

            <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 space-y-0.5">
              <span className="text-[10px] text-zinc-500 block font-medium">Janela de Sincronia</span>
              <span className="font-black text-purple-600 dark:text-purple-400 font-mono text-sm">
                Até {params.maxRetroactiveSyncHours || 48}h
              </span>
              <span className="text-[9px] text-zinc-400 block">Ingestão máxima retroativa</span>
            </div>
          </div>

          <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-tight pt-1">
            🛡️ <b>Antifraude de Sensores:</b> Apenas atividades registradas por hardware (sensores de GPS e frequência cardíaca) pontuam. Entradas manuais sem sensores são rejeitadas.
          </p>
        </div>
      </section>

      {/* Card 3: Dispositivos & Wearables Conectados */}
      <section className="px-4">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Dispositivos & Sensores
            </h2>
            <button
              type="button"
              onClick={() => setShowSyncSheet(true)}
              className="text-[11px] font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1 cursor-pointer"
            >
              <Plus className="size-3" />
              <span>Conectar Novo</span>
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 ${
              hasAppleWatch
                ? "bg-purple-600/10 border-purple-500/40 ring-1 ring-purple-500/20"
                : "bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 opacity-70"
            }`}>
              <span className="text-base">⌚</span>
              <span className="font-bold text-[11px] text-zinc-800 dark:text-zinc-200">Apple Watch</span>
              <span className={`text-[9px] font-medium ${hasAppleWatch ? "text-lime-500" : "text-zinc-400"}`}>
                {hasAppleWatch ? "● Conectado" : "Disponível"}
              </span>
            </div>
            <div className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 ${
              hasGarmin
                ? "bg-purple-600/10 border-purple-500/40 ring-1 ring-purple-500/20"
                : "bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 opacity-70"
            }`}>
              <span className="text-base">🧭</span>
              <span className="font-bold text-[11px] text-zinc-800 dark:text-zinc-200">Garmin</span>
              <span className={`text-[9px] font-medium ${hasGarmin ? "text-lime-500" : "text-zinc-400"}`}>
                {hasGarmin ? "● Conectado" : "Disponível"}
              </span>
            </div>
            <div className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 ${
              hasStrava
                ? "bg-purple-600/10 border-purple-500/40 ring-1 ring-purple-500/20"
                : "bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 opacity-70"
            }`}>
              <span className="text-base">🏃</span>
              <span className="font-bold text-[11px] text-zinc-800 dark:text-zinc-200">Strava</span>
              <span className={`text-[9px] font-medium ${hasStrava ? "text-lime-500" : "text-zinc-400"}`}>
                {hasStrava ? "● Conectado" : "Disponível"}
              </span>
            </div>
          </div>
          {!hasAnyWearable && (
            <p className="text-[10px] text-zinc-400 text-center pt-1">
              Nenhum wearable vinculado ainda. Clique em "Conectar Novo" para parear seus dispositivos.
            </p>
          )}
        </div>
      </section>

      {/* Card 4: Histórico Recente de Atividades */}
      <section className="px-4 space-y-2.5">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Histórico Recente Auditado
          </h2>
          <span className="text-[10px] font-mono text-zinc-400">
            Últimos 7 dias
          </span>
        </div>

        {userWorkoutTxs.length === 0 ? (
          <div className="bg-card rounded-2xl p-6 text-center border border-border shadow-xs space-y-3">
            <div className="size-12 rounded-2xl bg-purple-600/10 text-purple-600 mx-auto grid place-items-center">
              <Activity className="size-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Nenhum treino auditado nos últimos 7 dias</h3>
              <p className="text-xs text-muted-foreground mt-1 max-w-xs mx-auto leading-relaxed">
                Suas atividades físicas monitoradas por GPS ou sensores cardíacos aparecerão aqui automaticamente gerando nfs reais.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowSyncSheet(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition cursor-pointer"
            >
              <Watch className="size-3.5" />
              <span>Conectar Dispositivo / Wearable</span>
            </button>
          </div>
        ) : (
          <ul className="space-y-2">
            {userWorkoutTxs.map((tx) => (
              <li
                key={tx.id}
                className="bg-card rounded-2xl p-3.5 flex items-center gap-3 ring-1 ring-black/5 dark:ring-zinc-800 shadow-xs hover:border-lime-500/30 transition"
              >
                <div className="size-11 rounded-2xl bg-zinc-100 dark:bg-zinc-800 grid place-items-center text-xl shrink-0">
                  🏃
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-zinc-900 dark:text-white truncate">{tx.description}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400">
                      {new Date(tx.timestamp).toLocaleDateString("pt-BR")}
                    </span>
                    <span className="text-[9px] font-mono bg-lime-500/10 text-lime-600 dark:text-lime-400 px-1.5 py-0.2 rounded font-bold">
                      GPS / FC OK
                    </span>
                  </div>
                </div>
                <span className="text-xs font-black font-mono text-white bg-purple-600 dark:bg-purple-600 px-2.5 py-1 rounded-xl shadow-xs">
                  +{tx.amount} nfs
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Sheet de Conexão de Wearables */}
      {showSyncSheet && (
        <WearableSyncSheet onClose={() => setShowSyncSheet(false)} />
      )}
    </div>
  );
}
