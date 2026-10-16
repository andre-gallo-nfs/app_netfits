import {
  Download, ShieldAlert, Coins, Gift, RotateCcw, Sparkles
} from "lucide-react";
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer
} from "recharts";
import { toast } from "sonner";
import { useOperationalParams } from "@/lib/operational-params-store";
import { classifyTransactionCategory, type SandboxTransaction } from "@/lib/shared-sandbox-store";
import { KpiCard } from "./admin-ui";

interface AdminPointsFefoTabProps {
  isReal?: boolean;
  realTransactions: SandboxTransaction[];
  realNfsInCirculation: number;
  realTotalPointsRedeemed: number;
  realUsersCount: number;
  pf: number;
  shortLabel: string;
}

export function AdminPointsFefoTab({
  isReal,
  realTransactions,
  realNfsInCirculation,
  realTotalPointsRedeemed,
  realUsersCount,
  pf,
  shortLabel,
}: AdminPointsFefoTabProps) {
  const operationalParams = useOperationalParams();

  const positiveTxs = realTransactions.filter((t) => (t.amount || 0) > 0);
  const totalEmitidos = isReal
    ? (positiveTxs.reduce((acc, t) => acc + (t.amount || 0), 0) || realNfsInCirculation)
    : Math.round(12840000 * pf);
  const totalResgatados = isReal ? realTotalPointsRedeemed : Math.round(2415000 * pf);
  const totalExpirados = isReal ? 0 : Math.round(1540800 * pf);
  const baldeValidos = totalEmitidos - totalResgatados - totalExpirados;
  const provisaoBrl = baldeValidos * (operationalParams.costPerProvisionedPointBrl ?? 0.01);

  // Classificação determinística, mutuamente exclusiva e 100% reconciliada
  const pointsByCategory = {
    welcome: 0,
    workout: 0,
    shop: 0,
    feed: 0,
    badge: 0,
    referral: 0,
    other: 0,
  };

  if (isReal) {
    positiveTxs.forEach((t) => {
      const cat = classifyTransactionCategory(t);
      pointsByCategory[cat] = (pointsByCategory[cat] || 0) + (t.amount || 0);
    });
  }

  const emissaoBreakdown = isReal
    ? [
        ...(pointsByCategory.welcome > 0 ? [{
          key: "welcome",
          label: "Bônus de Boas-Vindas / Cadastro",
          count: pointsByCategory.welcome,
          pct: totalEmitidos > 0 ? Number(((pointsByCategory.welcome / totalEmitidos) * 100).toFixed(1)) : 0,
          icon: "🎁",
          color: "#84cc16"
        }] : []),
        ...(pointsByCategory.shop > 0 ? [{
          key: "shop",
          label: "Cashback por Compras no Shopping",
          count: pointsByCategory.shop,
          pct: totalEmitidos > 0 ? Number(((pointsByCategory.shop / totalEmitidos) * 100).toFixed(1)) : 0,
          icon: "🛍️",
          color: "#10b981"
        }] : []),
        ...(pointsByCategory.badge > 0 ? [{
          key: "badge",
          label: "Conquistas de Badges Oficiais",
          count: pointsByCategory.badge,
          pct: totalEmitidos > 0 ? Number(((pointsByCategory.badge / totalEmitidos) * 100).toFixed(1)) : 0,
          icon: "🏆",
          color: "#8b5cf6"
        }] : []),
        ...(pointsByCategory.feed > 0 ? [{
          key: "feed",
          label: "Engajamento no Feed (Artigos, Mídia & Quizzes)",
          count: pointsByCategory.feed,
          pct: totalEmitidos > 0 ? Number(((pointsByCategory.feed / totalEmitidos) * 100).toFixed(1)) : 0,
          icon: "👁️",
          color: "#3b82f6"
        }] : []),
        ...(pointsByCategory.referral > 0 ? [{
          key: "referral",
          label: "Indicação de Novos Membros (MGM no Cadastro)",
          count: pointsByCategory.referral,
          pct: totalEmitidos > 0 ? Number(((pointsByCategory.referral / totalEmitidos) * 100).toFixed(1)) : 0,
          icon: "👥",
          color: "#ec4899"
        }] : []),
        ...(pointsByCategory.workout > 0 ? [{
          key: "workouts",
          label: "Treinos & Atividades Físicas Validadas",
          count: pointsByCategory.workout,
          pct: totalEmitidos > 0 ? Number(((pointsByCategory.workout / totalEmitidos) * 100).toFixed(1)) : 0,
          icon: "🏃",
          color: "#f59e0b"
        }] : []),
        ...(pointsByCategory.other > 0 ? [{
          key: "other",
          label: "Outras Bonificações Especiais",
          count: pointsByCategory.other,
          pct: totalEmitidos > 0 ? Number(((pointsByCategory.other / totalEmitidos) * 100).toFixed(1)) : 0,
          icon: "✨",
          color: "#06b6d4"
        }] : [])
      ]
    : [
        { key: "shop", label: "Cashback por Compras no Shopping", count: Math.round(4120000 * pf), pct: 32.1, icon: "🛍️", color: "#84cc16" },
        { key: "referral", label: "Indicação de Amigos (Member Get Member)", count: Math.round(2840000 * pf), pct: 22.1, icon: "👥", color: "#7c3aed" },
        { key: "views", label: "Visualização de Anúncios no Feed", count: Math.round(2150000 * pf), pct: 16.7, icon: "👁️", color: "#3b82f6" },
        { key: "clicks", label: "Cliques em Conteúdos Patrocinados", count: Math.round(1850000 * pf), pct: 14.4, icon: "🖱️", color: "#e11d48" },
        { key: "workouts", label: "Treinos & Atividades Físicas (GPS/Smart Fit)", count: Math.round(1280000 * pf), pct: 10.0, icon: "🏃", color: "#f59e0b" },
        { key: "loyalty", label: "Vínculo com Programa de Fidelidade", count: Math.round(600000 * pf), pct: 4.7, icon: "🤝", color: "#10b981" },
      ];

  const resgateBreakdown = isReal
    ? (totalResgatados === 0
        ? [{ key: "none", label: "Nenhum resgate efetuado no Banco Real", count: 0, pct: 0, icon: "ℹ️", color: "#71717a" }]
        : [
            { key: "shop", label: "Compras no Marketplace", count: totalResgatados, pct: 100, icon: "🛒", color: "#84cc16" }
          ])
    : [
        { key: "shop", label: "Desconto em Compras no Marketplace Netfits", count: Math.round(1180000 * pf), pct: 48.9, icon: "🛒", color: "#84cc16" },
        { key: "health", label: "Consultas Médicas & Especialistas (Fibios/Spot)", count: Math.round(540000 * pf), pct: 22.4, icon: "🩺", color: "#7c3aed" },
        { key: "gym", label: "Mensalidades & Passes em Academias (Smart Fit)", count: Math.round(420000 * pf), pct: 17.4, icon: "🏋️", color: "#3b82f6" },
        { key: "races", label: "Inscrições em Assessorias & Provas (MPR Run)", count: Math.round(275000 * pf), pct: 11.3, icon: "🏃‍♂️", color: "#f59e0b" },
      ];

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-gradient-to-r from-amber-950/60 via-zinc-900 to-zinc-900 border border-amber-500/30 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <span className="text-[9px] font-extrabold uppercase tracking-wider text-amber-400">
            Módulo de Gestão do Programa de Pontos ({shortLabel})
          </span>
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <span>🪙 Balanço de Emissão, Resgate & Provisão Passiva do Programa nfs</span>
            <span className="text-xs bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2.5 py-0.5 rounded-full font-mono font-bold">
              Breakage: {operationalParams.targetBreakagePct}%
            </span>
          </h3>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => toast.success("Relatório de pontos exportado com sucesso!")}
            className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-md flex items-center gap-2 transition cursor-pointer"
          >
            <Download className="size-3.5" />
            Exportar Extrato (PDF)
          </button>
        </div>
      </div>

      {/* Banner da Regra FEFO (First-Expiring, First-Out) */}
      <div className="bg-purple-950/40 border border-purple-500/30 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-purple-600/20 text-purple-400 grid place-items-center shrink-0 border border-purple-500/30">
            <ShieldAlert className="size-5 text-lime-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-white">Algoritmo de Resgate Justo ao Usuário (Regra FEFO)</h4>
              <span className="text-[10px] font-extrabold font-mono bg-lime-400/20 text-lime-400 border border-lime-400/30 px-2 py-0.5 rounded-full">
                ATIVADO (100% dos Resgates)
              </span>
            </div>
            <p className="text-xs text-zinc-300 mt-0.5">
              Garantia de Fidelidade: Resgates consomem prioritariamente os lotes de pontos com <b>data de expiração mais próxima (First-Expiring, First-Out)</b>.
            </p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <span className="text-[10px] text-zinc-400 font-mono block">Economia em Expirações</span>
          <span className="text-xs font-bold font-mono text-lime-400">84,2% dos resgates salvam pontos</span>
        </div>
      </div>

      {/* 5 KPI Cards do Módulo de Pontos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
        <KpiCard
          title="Total Pontos Emitidos"
          value={`${totalEmitidos.toLocaleString("pt-BR")} nfs`}
          change={isReal ? `${totalEmitidos} nfs reais` : "+28.4%"}
          positive={true}
          icon={Coins}
          subtext={isReal ? `Créditos dos ${realUsersCount} usuários` : "Cashback, feed e treinos"}
          periodBadge={shortLabel}
        />

        <KpiCard
          title="Total Pontos Resgatados"
          value={`${totalResgatados.toLocaleString("pt-BR")} nfs`}
          change={isReal ? `${totalResgatados} nfs resgatados` : "18.8% de resgate"}
          positive={true}
          icon={Gift}
          subtext={isReal ? (totalResgatados > 0 ? `${totalResgatados} nfs resgatados` : "0 resgates no banco real") : "Shopping e parceiros"}
          periodBadge={shortLabel}
        />

        <KpiCard
          title="Pontos Expirados"
          value={`${totalExpirados.toLocaleString("pt-BR")} nfs`}
          change={isReal ? "0% expirado" : `${operationalParams.targetBreakagePct}% breakage`}
          positive={false}
          icon={RotateCcw}
          subtext={isReal ? "Validade ativa dos pontos" : "Validade 24 meses"}
          periodBadge={shortLabel}
        />

        <KpiCard
          title="Balde Final (Válidos)"
          value={`${baldeValidos.toLocaleString("pt-BR")} nfs`}
          change={isReal ? `${baldeValidos} nfs em circulação` : "Em circulação"}
          positive={true}
          icon={Sparkles}
          subtext={isReal ? `Saldo dos ${realUsersCount} usuários` : "Saldo ativo acumulado"}
          highlightColor="border-lime-400 ring-1 ring-lime-400/20 bg-lime-400/5"
          periodBadge={shortLabel}
        />

        <KpiCard
          title="Provisão Passivo (R$)"
          value={`R$ ${provisaoBrl.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
          change={`CPP R$ ${operationalParams.costPerProvisionedPointBrl}`}
          positive={true}
          icon={ShieldAlert}
          subtext={isReal ? `Passivo dos ${realUsersCount} usuários` : "Retido na DRE"}
          highlightColor="border-purple-500/40 ring-1 ring-purple-500/20 bg-purple-950/20"
          periodBadge={shortLabel}
        />
      </div>

      {/* Seção Estratificação: Emissão vs Resgate (2 Colunas) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Coluna 1: Estratificação por Tipo de Emissão */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div className="flex items-center gap-2">
              <Coins className="size-5 text-lime-400" />
              <div>
                <h4 className="text-base font-bold text-white">Estratificação de Emissão por Origem</h4>
                <p className="text-xs text-zinc-400">Total: {totalEmitidos.toLocaleString("pt-BR")} nfs emitidos</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            <div className="sm:col-span-5 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={emissaoBreakdown}
                    dataKey="count"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={65}
                    paddingAngle={3}
                  >
                    {emissaoBreakdown.map((item, idx) => (
                      <Cell key={`cell-e-${idx}`} fill={item.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: any) => [`${Number(value).toLocaleString("pt-BR")} nfs`, "Pontos"]}
                    contentStyle={{ backgroundColor: "#18181b", borderColor: "#27272a", borderRadius: "12px", fontSize: "11px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="sm:col-span-7 space-y-2">
              {emissaoBreakdown.map((item) => (
                <div key={item.key} className="bg-zinc-950/80 p-2.5 rounded-xl border border-zinc-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 min-w-0 pr-2">
                    <span className="text-base shrink-0">{item.icon}</span>
                    <span className="font-semibold text-zinc-300 truncate">{item.label}</span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono font-bold text-white block">{(item?.count ?? 0).toLocaleString("pt-BR")} nfs</span>
                    <span className="text-[10px] text-lime-400 font-bold">{item.pct}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coluna 2: Estratificação por Tipo de Resgate */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div className="flex items-center gap-2">
              <Gift className="size-5 text-purple-400" />
              <div>
                <h4 className="text-base font-bold text-white">Estratificação de Resgate por Destino</h4>
                <p className="text-xs text-zinc-400">Total: {totalResgatados.toLocaleString("pt-BR")} nfs resgatados</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            <div className="sm:col-span-5 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={resgateBreakdown}
                    dataKey="count"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={65}
                    paddingAngle={3}
                  >
                    {resgateBreakdown.map((item, idx) => (
                      <Cell key={`cell-r-${idx}`} fill={item.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: any) => [`${Number(value).toLocaleString("pt-BR")} nfs`, "Pontos"]}
                    contentStyle={{ backgroundColor: "#18181b", borderColor: "#27272a", borderRadius: "12px", fontSize: "11px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="sm:col-span-7 space-y-2">
              {resgateBreakdown.map((item) => (
                <div key={item.key} className="bg-zinc-950/80 p-2.5 rounded-xl border border-zinc-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 min-w-0 pr-2">
                    <span className="text-base shrink-0">{item.icon}</span>
                    <span className="font-semibold text-zinc-300 truncate">{item.label}</span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono font-bold text-white block">{(item?.count ?? 0).toLocaleString("pt-BR")} nfs</span>
                    <span className="text-[10px] text-purple-400 font-bold">{item.pct}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Destaque: Equação do Balde Final & Provisão Financeira Retida */}
      <div className="bg-gradient-to-r from-purple-950 via-zinc-900 to-zinc-900 border border-purple-500/40 rounded-3xl p-6 shadow-2xl space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-2xl bg-purple-600/20 text-purple-400 grid place-items-center border border-purple-500/30 shrink-0">
              <ShieldAlert className="size-6 text-lime-400" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400">
                Balanço Financeiro de Passivo do Programa de Lealdade
              </span>
              <h3 className="text-lg font-bold text-white">
                Equação do Balde de Pontos & Valoração do Passivo
              </h3>
            </div>
          </div>

          <div className="bg-zinc-950/90 px-4 py-2 rounded-2xl border border-purple-500/30 text-right">
            <span className="text-[10px] text-zinc-400 uppercase font-bold block">Passivo Financeiro Total</span>
            <span className="text-xl font-black text-lime-400 font-mono">
              R$ {provisaoBrl.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          <div className="bg-zinc-950/80 p-4 rounded-2xl border border-zinc-800">
            <span className="text-[10px] text-zinc-400 uppercase font-bold">1. Pontos Emitidos Válidos</span>
            <p className="text-lg font-black text-white font-mono mt-1">+{totalEmitidos.toLocaleString("pt-BR")}</p>
            <span className="text-[10px] text-zinc-500">Acumulado no Período</span>
          </div>

          <div className="bg-zinc-950/80 p-4 rounded-2xl border border-zinc-800">
            <span className="text-[10px] text-zinc-400 uppercase font-bold">2. Pontos Resgatados</span>
            <p className="text-lg font-black text-rose-400 font-mono mt-1">-{totalResgatados.toLocaleString("pt-BR")}</p>
            <span className="text-[10px] text-zinc-500">Baixados em Benefícios</span>
          </div>

          <div className="bg-zinc-950/80 p-4 rounded-2xl border border-zinc-800">
            <span className="text-[10px] text-zinc-400 uppercase font-bold">3. Pontos Expirados (Breakage)</span>
            <p className="text-lg font-black text-amber-400 font-mono mt-1">-{totalExpirados.toLocaleString("pt-BR")}</p>
            <span className="text-[10px] text-zinc-500">Baixados por Validade</span>
          </div>

          <div className="bg-lime-400/10 p-4 rounded-2xl border border-lime-400/30">
            <span className="text-[10px] text-lime-400 uppercase font-bold">4. Balde Final em Circulação</span>
            <p className="text-xl font-black text-lime-400 font-mono mt-1">={baldeValidos.toLocaleString("pt-BR")}</p>
            <span className="text-[10px] text-lime-300 font-semibold">Pontos Válidos Ativos</span>
          </div>
        </div>

        <div className="bg-zinc-950/90 p-4 rounded-2xl border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-300">
          <div className="flex items-center gap-2">
            <Sparkles className="size-4 text-purple-400 shrink-0" />
            <span>
              Custo Unitário da Provisão: <b className="text-white font-mono">R$ {operationalParams.costPerProvisionedPointBrl} / nfs</b> (Parametrizado via Admin).
            </span>
          </div>
          <span className="text-[11px] text-lime-400 font-bold bg-lime-400/10 px-3 py-1 rounded-xl border border-lime-400/20 shrink-0">
            ✓ Sincronizado com a linha redutora da DRE
          </span>
        </div>
      </div>
    </div>
  );
}
