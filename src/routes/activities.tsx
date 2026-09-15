import { createFileRoute } from "@tanstack/react-router";
import { activities } from "@/lib/feed-data";
import { useOperationalParams } from "@/lib/operational-params-store";
import {
  Activity, Flame, ShieldCheck, Award, Sparkles, Clock, HeartPulse,
  CheckCircle2, Watch, Check, ChevronRight, Zap
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
  
  // Mock representativo de progresso semanal (3 de 5 treinos concluídos)
  const currentWeekWorkouts = 3;
  const maxWeeklyWorkouts = params.weeklyMaxRewardedWorkouts || 5;
  const pointsPerWorkout = params.nfsPerWorkout || 20;
  const streakBonus = params.workoutStreakBonusNfs || 20;
  const progressPct = Math.min(100, Math.round((currentWeekWorkouts / maxWeeklyWorkouts) * 100));

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
                Faltam apenas {Math.max(0, maxWeeklyWorkouts - currentWeekWorkouts)} treinos para o Golden Streak!
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
              <span className="text-[10px] text-zinc-500 block font-medium">Recompensa Base</span>
              <span className="font-black text-lime-600 dark:text-lime-400 font-mono text-sm">
                +{pointsPerWorkout} nfs / treino
              </span>
              <span className="text-[9px] text-zinc-400 block">Máx. 1 treino/dia (até 5/sem)</span>
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
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
            <span>Dispositivos Conectados</span>
            <span className="text-[10px] text-lime-600 dark:text-lime-400 font-semibold flex items-center gap-1">
              <Check className="size-3" /> Sincronizado
            </span>
          </h2>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex flex-col items-center gap-1">
              <span className="text-base">⌚</span>
              <span className="font-bold text-[11px] text-zinc-800 dark:text-zinc-200">Apple Watch</span>
              <span className="text-[9px] text-zinc-400">HealthKit</span>
            </div>
            <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex flex-col items-center gap-1">
              <span className="text-base">🧭</span>
              <span className="font-bold text-[11px] text-zinc-800 dark:text-zinc-200">Garmin</span>
              <span className="text-[9px] text-zinc-400">Connect API</span>
            </div>
            <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex flex-col items-center gap-1">
              <span className="text-base">🏃</span>
              <span className="font-bold text-[11px] text-zinc-800 dark:text-zinc-200">Strava</span>
              <span className="text-[9px] text-zinc-400">OAuth 2.0</span>
            </div>
          </div>
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
        <ul className="space-y-2">
          {activities.map((a) => (
            <li
              key={a.id}
              className="bg-card rounded-2xl p-3.5 flex items-center gap-3 ring-1 ring-black/5 dark:ring-zinc-800 shadow-xs hover:border-lime-500/30 transition"
            >
              <div className="size-11 rounded-2xl bg-zinc-100 dark:bg-zinc-800 grid place-items-center text-xl shrink-0">
                {a.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-zinc-900 dark:text-white truncate">{a.title}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400">{a.date}</span>
                  <span className="text-[9px] font-mono bg-lime-500/10 text-lime-600 dark:text-lime-400 px-1.5 py-0.2 rounded font-bold">
                    GPS / FC OK
                  </span>
                </div>
              </div>
              <span className="text-xs font-black font-mono text-white bg-purple-600 dark:bg-purple-600 px-2.5 py-1 rounded-xl shadow-xs">
                {a.reward}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
