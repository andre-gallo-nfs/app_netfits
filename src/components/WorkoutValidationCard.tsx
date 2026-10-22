import { useState, useEffect } from "react";
import { healthBridge } from "@/lib/wearables/health-bridge-service";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { useOperationalParams } from "@/lib/operational-params-store";
import { toast } from "sonner";
import type { NormalizedWorkout, WorkoutValidationResult } from "@/types/wearables";
import {
  Activity,
  Flame,
  ShieldCheck,
  CheckCircle2,
  Watch,
  HeartPulse,
  Sparkles,
  ArrowRight,
  RefreshCw,
  AlertCircle,
  Clock,
  Compass,
} from "lucide-react";

export function WorkoutValidationCard({ onValidated }: { onValidated?: () => void }) {
  const activeUser = sharedSandboxStore.useActiveUser();
  const params = useOperationalParams();
  const [workouts, setWorkouts] = useState<NormalizedWorkout[]>([]);
  const [selectedWorkout, setSelectedWorkout] = useState<NormalizedWorkout | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<WorkoutValidationResult | null>(null);

  const pointsPerWorkout = params.nfsPerWorkout || 20;

  // Verifica se o usuário já validou um treino hoje
  const userTxs = sharedSandboxStore.getUserTransactions(activeUser.id);
  const todayStr = new Date().toDateString();
  const alreadyValidatedToday = userTxs.some((tx) => {
    if (tx.category !== "workout") return false;
    return new Date(tx.timestamp).toDateString() === todayStr;
  });

  const lastTodayTx = userTxs.find((tx) => {
    if (tx.category !== "workout") return false;
    return new Date(tx.timestamp).toDateString() === todayStr;
  });

  useEffect(() => {
    loadWorkouts();
  }, [activeUser.wearable, activeUser.id]);

  const loadWorkouts = async () => {
    setIsLoading(true);
    try {
      const list = await healthBridge.getRecentWorkouts(activeUser.id, activeUser.wearable || "garmin");
      setWorkouts(list);
      if (list.length > 0) {
        setSelectedWorkout(list[0]);
      }
    } catch (e) {
      console.error("[WorkoutValidationCard] Erro ao carregar treinos:", e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleValidate = async () => {
    if (!selectedWorkout) return;
    setIsValidating(true);
    try {
      const res = await healthBridge.validateDailyWorkout(
        selectedWorkout,
        activeUser.id,
        pointsPerWorkout
      );
      setValidationResult(res);

      if (res.success) {
        toast.success(`Treino validado! +${res.pointsAwarded} nfs creditados na sua conta.`);
        if (onValidated) onValidated();
      } else {
        toast.error(res.message);
      }
    } catch (e: any) {
      toast.error("Falha ao comunicar com o validador de telemetria.");
    } finally {
      setIsValidating(false);
    }
  };

  // CASO 1: Usuário já cumpriu o ritual de hoje
  if (alreadyValidatedToday) {
    return (
      <div className="bg-gradient-to-br from-emerald-950/80 via-zinc-900 to-zinc-950 border border-emerald-500/40 rounded-3xl p-5 text-white shadow-xl space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5 text-emerald-400" />
            Ritual Diário Concluído
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/30">
            +{pointsPerWorkout} nfs Hoje
          </span>
        </div>

        <div>
          <h2 className="text-lg font-black text-white">Treino de Hoje Validado com Sucesso!</h2>
          <p className="text-xs text-zinc-300 mt-0.5">
            {lastTodayTx?.description || "Atividade esportiva auditada por sensores ópticos."}
          </p>
        </div>

        {/* Pílula de Recuperação Fibios */}
        <div className="p-3 rounded-2xl bg-emerald-900/30 border border-emerald-500/20 text-xs text-emerald-200 space-y-1">
          <p className="text-[11px] leading-relaxed">
            🩺 <b>Curadoria Fibios Recovery:</b> Treino registrado com frequência cardíaca controlada. Hidrate-se bem e descanse para manter seu <b>Golden Streak</b> ativo amanhã!
          </p>
        </div>

        <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1 border-t border-zinc-800">
          <span className="flex items-center gap-1">
            <Flame className="size-3.5 text-lime-400" />
            <span>Golden Streak Mantido</span>
          </span>
          <span className="text-zinc-500">Próxima validação disponível amanhã</span>
        </div>
      </div>
    );
  }

  // CASO 2: Treino Detectado nas últimas 24h pronto para validação
  return (
    <div className="bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 border-2 border-lime-400/40 rounded-3xl p-5 text-white shadow-2xl space-y-4 relative overflow-hidden">
      {/* Glow de destaque */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-lime-400/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-lime-400 animate-ping" />
          <span className="text-[10px] font-black uppercase tracking-widest text-lime-400">
            Ritual Diário de Validação
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-lime-400/20 text-lime-300 font-mono text-xs font-black border border-lime-400/40">
          +{pointsPerWorkout} nfs disponíveis
        </span>
      </div>

      <div>
        <h2 className="text-lg font-black tracking-tight text-white flex items-center gap-2">
          <span>Treino Detectado no Wearable</span>
        </h2>
        <p className="text-xs text-zinc-400 mt-0.5">
          Sincronizado via {selectedWorkout?.sourceDevice || "Relógio Esportivo"} nas últimas 24 horas.
        </p>
      </div>

      {isLoading ? (
        <div className="py-6 text-center text-xs text-zinc-400 space-y-2">
          <RefreshCw className="size-5 mx-auto animate-spin text-lime-400" />
          <p>Consultando sensores ópticos e GPS...</p>
        </div>
      ) : selectedWorkout ? (
        <div className="space-y-3">
          {/* Card com os dados do treino */}
          <div className="bg-zinc-950/80 rounded-2xl p-3.5 border border-zinc-800 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <span className="text-base">🏃</span>
                <span>{selectedWorkout.sportLabel}</span>
              </span>
              <span className="text-[10px] font-mono bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-md">
                {new Date(selectedWorkout.startTime).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1 border-t border-zinc-900">
              <div className="p-2 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <span className="text-[10px] text-zinc-500 block">Duração</span>
                <span className="font-mono font-bold text-white text-sm">
                  {selectedWorkout.durationMinutes} min
                </span>
              </div>
              <div className="p-2 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <span className="text-[10px] text-zinc-500 block">FC Média</span>
                <span className="font-mono font-bold text-rose-400 text-sm flex items-center justify-center gap-1">
                  <HeartPulse className="size-3" />
                  {selectedWorkout.avgHeartRate} bpm
                </span>
              </div>
              <div className="p-2 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <span className="text-[10px] text-zinc-500 block">Calorias</span>
                <span className="font-mono font-bold text-amber-400 text-sm">
                  {selectedWorkout.activeCalories} kcal
                </span>
              </div>
            </div>

            {/* Selo Antifraude */}
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400/90 pt-1">
              <ShieldCheck className="size-3.5 text-emerald-400 shrink-0" />
              <span>Telemetria de hardware auditada • Sensores de FC e GPS comprovados</span>
            </div>
          </div>

          {/* Botão de Ação: Validar Treino */}
          <button
            type="button"
            onClick={handleValidate}
            disabled={isValidating}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400 hover:from-lime-300 hover:to-emerald-300 text-zinc-950 font-black text-sm tracking-wide shadow-lg shadow-lime-400/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isValidating ? (
              <>
                <RefreshCw className="size-4 animate-spin text-zinc-950" />
                <span>Auditando Telemetria no Core Engine...</span>
              </>
            ) : (
              <>
                <Sparkles className="size-4 text-zinc-950" />
                <span>Validar Treino de Hoje &amp; Resgatar +{pointsPerWorkout} nfs</span>
                <ArrowRight className="size-4 text-zinc-950" />
              </>
            )}
          </button>
        </div>
      ) : (
        <div className="bg-zinc-950/60 rounded-2xl p-4 text-center border border-zinc-800 space-y-2">
          <Watch className="size-6 text-zinc-500 mx-auto" />
          <p className="text-xs text-zinc-300 font-bold">Nenhum treino encontrado nas últimas 24 horas</p>
          <p className="text-[11px] text-zinc-400 max-w-xs mx-auto">
            Grave uma atividade física no seu relógio ou selecione outro dispositivo para validar seu esforço.
          </p>
          <button
            type="button"
            onClick={loadWorkouts}
            className="mt-2 text-xs font-bold text-lime-400 hover:underline flex items-center gap-1 mx-auto cursor-pointer"
          >
            <RefreshCw className="size-3" />
            <span>Atualizar Leitura de Sensores</span>
          </button>
        </div>
      )}
    </div>
  );
}
