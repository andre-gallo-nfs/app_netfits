import { Activity, Zap, Coins, TrendingUp, AlertTriangle } from "lucide-react";
import { KpiCard } from "./admin-ui";
import { useOperationalParams } from "@/lib/operational-params-store";

interface AdminActivitiesTabProps {
  isReal: boolean;
  realWorkoutCount: number;
  realWorkoutPoints: number;
  realUsersCount: number;
  pf: number;
  shortLabel: string;
}

export function AdminActivitiesTab({
  isReal,
  realWorkoutCount,
  realWorkoutPoints,
  realUsersCount,
  pf,
  shortLabel,
}: AdminActivitiesTabProps) {
  const operationalParams = useOperationalParams();

  return (
    <div className="space-y-6">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[9px] font-extrabold uppercase tracking-wider text-lime-400">
              Sensor de Movimento &amp; Validação Esportiva (Etapa 1 &amp; 2)
            </span>
            <span className="text-[9px] font-extrabold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
              <AlertTriangle className="size-3 text-amber-400" />
              Exclusivo Clube • Pendente Diretoria
            </span>
          </div>
          <h3 className="text-sm font-bold text-white">
            Métricas de Engajamento Físico &amp; Pontuação por Treino
          </h3>
        </div>
        <span className="text-xs font-mono text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20 font-bold">
          +{operationalParams.nfsPerWorkout || 25} nfs / treino validado
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <KpiCard
          title="Treinos Validados Total"
          value={isReal ? realWorkoutCount.toLocaleString("pt-BR") : Math.round(84500 * pf).toLocaleString("pt-BR")}
          change={isReal ? `${realWorkoutCount} treinos reais` : "+24.8%"}
          positive={true}
          icon={Activity}
          subtext={isReal ? "Presenças & registros reais" : "Presenças & registros"}
          periodBadge={shortLabel}
        />
        <KpiCard
          title="Check-ins Smart Fit"
          value={isReal ? "0" : Math.round(48200 * pf).toLocaleString("pt-BR")}
          change={isReal ? "0 check-ins integrados" : "+18.5%"}
          positive={true}
          icon={Zap}
          subtext={isReal ? "Totens físicos em piloto" : "Totens de validação"}
          periodBadge={shortLabel}
        />
        <KpiCard
          title="Pontos Emitidos via Treino"
          value={isReal ? `${realWorkoutPoints.toLocaleString("pt-BR")} nfs` : `${Math.round(4225000 * pf).toLocaleString("pt-BR")} nfs`}
          change={isReal ? `${realWorkoutPoints} nfs reais` : "+24.8%"}
          positive={true}
          icon={Coins}
          subtext={isReal ? "Pontos creditados por treino" : "4.2M nfs distribuídos"}
          periodBadge={shortLabel}
        />
        <KpiCard
          title="Média de Treinos / Atleta"
          value={isReal ? (realUsersCount > 0 ? (realWorkoutCount / realUsersCount).toFixed(1) : "0.0") : `${(3.8 * pf).toFixed(1)} treinos`}
          change={isReal ? `Base de ${realUsersCount} atletas` : "+12.0%"}
          positive={true}
          icon={TrendingUp}
          subtext={isReal ? "Frequência real" : "Frequência semanal"}
          periodBadge={shortLabel}
        />
      </div>

      {isReal && realWorkoutCount === 0 && (
        <div className="p-6 text-center bg-zinc-950/60 rounded-2xl border border-dashed border-zinc-800 space-y-2">
          <Activity className="size-8 text-zinc-600 mx-auto" />
          <h5 className="text-sm font-bold text-white">Nenhum treino com validação esportiva no Banco Real</h5>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Os {realUsersCount} usuários oficiais cadastrados ainda não registraram sessões de treino validadas no aplicativo.
          </p>
        </div>
      )}

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4">
        <h4 className="font-bold text-sm text-white">Transição Tecnológica para Etapa 2 (Roadmap Business Plan)</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-zinc-300">
          <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-2">
            <p className="font-bold text-lime-400">Etapa 1 (Atual)</p>
            <p className="text-zinc-400">Validação manual via QR Code em academias parceiras (Smart Fit) e registros em fotos do feed. Baixa complexidade e custo zero de API.</p>
          </div>
          <div className="bg-zinc-950 p-4 rounded-2xl border border-purple-500/30 space-y-2">
            <p className="font-bold text-purple-300">Etapa 2 (9 a 18 meses)</p>
            <p className="text-zinc-400">Integração nativa com Strava &amp; Garmin API. Sincronização automática de corridas, pedaladas e métricas cardíacas.</p>
          </div>
          <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-2">
            <p className="font-bold text-amber-400">Etapa 3 (18 a 36 meses)</p>
            <p className="text-zinc-400">Plano corporativo B2B com desafios empresariais e marketplace de serviços de longevidade (fisioterapia, nutrologia).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
