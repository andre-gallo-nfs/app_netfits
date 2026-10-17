import { useState, useEffect } from "react";
import {
  Rss, ShieldCheck, Users, Sparkles, Activity, Zap, Coins, RotateCcw, Save
} from "lucide-react";
import { toast } from "sonner";
import {
  operationalParamsStore,
  useOperationalParams,
  type OperationalParams
} from "@/lib/operational-params-store";

function ParamInput({
  label,
  unit,
  value,
  onChange,
}: {
  label: string;
  unit: string;
  value: number;
  onChange: (v: string) => void;
}) {
  return (
    <div className="bg-zinc-950 p-3 rounded-2xl border border-zinc-800 space-y-1">
      <label className="text-[11px] font-semibold text-zinc-300 block truncate">{label}</label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          step="any"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-1.5 text-xs text-white font-mono font-bold focus:outline-none focus:ring-1 focus:ring-purple-600"
        />
        <span className="text-[10px] text-zinc-500 font-mono shrink-0">{unit}</span>
      </div>
    </div>
  );
}

export function AdminOperationalParamsTab() {
  const syncedParams = useOperationalParams();
  const [params, setParams] = useState<OperationalParams>(syncedParams);

  useEffect(() => {
    setParams(syncedParams);
  }, [syncedParams]);

  const handleSaveParams = async (e: React.FormEvent) => {
    e.preventDefault();
    await operationalParamsStore.updateParams(params);
    toast.success("🎉 Parâmetros atualizados na Tabela de Dados Mestres (system_parameters) com reflexo imediato em tempo real!");
  };

  const handleResetParams = async () => {
    await operationalParamsStore.resetParams();
    toast.info("🔄 Parâmetros operacionais restaurados para os valores padrão do Business Plan.");
  };

  return (
    <form onSubmit={handleSaveParams} className="space-y-6">
      <div className="bg-zinc-900 border border-purple-500/30 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3 bg-gradient-to-r from-purple-950/40 via-zinc-900 to-zinc-900">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[9px] font-extrabold uppercase tracking-wider text-lime-400 bg-lime-400/10 px-2 py-0.5 rounded border border-lime-400/20">
              Tabela de Dados Mestres (system_parameters)
            </span>
            <span className="text-[9px] font-bold text-emerald-400 flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Sincronização Realtime Online
            </span>
          </div>
          <h3 className="text-sm font-bold text-white">
            Ponto Central de Parametrização Operacional & Economia dos Pontos
          </h3>
          <p className="text-[11px] text-zinc-400 mt-0.5">
            Qualquer alteração salva aqui atualiza a tabela de dados mestres em tempo real e reflete instantaneamente no Feed, Shop, Carteira e DRE.
          </p>
        </div>
        <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
          <button
            type="button"
            onClick={handleResetParams}
            className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer border border-zinc-700"
          >
            <RotateCcw className="size-3.5 text-zinc-400" />
            Restaurar Padrões
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 shadow-md transition cursor-pointer"
          >
            <Save className="size-3.5" />
            Salvar na Tabela Mestre
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1: Recompensas do Feed & Moderação Antifraude Detalhada */}
        <div className="bg-zinc-900 border border-purple-500/30 rounded-3xl p-6 shadow-xl space-y-6 lg:col-span-2 bg-gradient-to-r from-purple-950/40 via-zinc-900 to-zinc-900">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div className="flex items-center gap-2">
              <Rss className="size-5 text-purple-400" />
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400">
                  Diretrizes do Feed & Moderação Antifraude
                </span>
                <h4 className="font-bold text-base text-white">Recompensas de Mídia & Limites Diferenciados de Conteúdo</h4>
              </div>
            </div>
            <span className="text-xs font-bold text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-lime-400" />
              Sistema Antifraude Ativo
            </span>
          </div>

          {/* Subseção A: Publicação de Conteúdo Próprio */}
          <div className="space-y-3 bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800">
            <h5 className="text-xs font-black text-lime-400 uppercase tracking-wider flex items-center gap-2">
              <span>📌 Publicação de Conteúdo Próprio (Posts do Próprio Usuário)</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <ParamInput
                label="nfs por Post Próprio (vídeo, foto ou texto)"
                unit="nfs / post"
                value={params.nfsPerOwnPost ?? 10}
                onChange={(v) =>
                  setParams((p) => ({
                    ...p,
                    nfsPerOwnPost: Number(v),
                    nfsPerVideoPost: Number(v),
                    nfsPerTextPost: Number(v),
                  }))
                }
              />
              <ParamInput
                label="Limite diário de posts próprios pontuáveis"
                unit="post / dia"
                value={params.dailyRewardedPostLimit}
                onChange={(v) => setParams((p) => ({ ...p, dailyRewardedPostLimit: Number(v) }))}
              />
              <ParamInput
                label="Limite semanal de posts próprios pontuáveis"
                unit="posts / semana"
                value={params.weeklyRewardedPostLimit}
                onChange={(v) => setParams((p) => ({ ...p, weeklyRewardedPostLimit: Number(v) }))}
              />
            </div>
          </div>

          {/* Subseção B: Categorias de Posts & Interações do Feed */}
          <div className="space-y-4 bg-zinc-950/60 p-5 rounded-2xl border border-zinc-800">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h5 className="text-xs font-black text-purple-300 uppercase tracking-wider flex items-center gap-2">
                <span>🏷️ Categorias de Posts, Ações Sociais & Moderação Antifraude</span>
              </h5>
              <span className="text-[10px] font-bold text-lime-400 bg-lime-500/10 px-2.5 py-0.5 rounded-full border border-lime-500/20">
                Tabela Dinâmica Editável
              </span>
            </div>

            {/* 1. Quizzes de Conhecimento & Leitura */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                1. Pontuação de Quizzes & Leitura no Feed
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <ParamInput
                  label="Quiz em Posts Próprios Netfits & Fibios"
                  unit="nfs / acerto"
                  value={params.nfsPerEducationalQuiz ?? 5}
                  onChange={(v) =>
                    setParams((p) => ({
                      ...p,
                      nfsPerEducationalQuiz: Number(v),
                    }))
                  }
                />
                <ParamInput
                  label="Quiz em Posts Patrocinados por Parceiros"
                  unit="nfs / acerto"
                  value={params.nfsPerSponsoredQuiz ?? 10}
                  onChange={(v) => setParams((p) => ({ ...p, nfsPerSponsoredQuiz: Number(v) }))}
                />
                <ParamInput
                  label="Leitura Passiva de Posts (Sem premiação)"
                  unit="nfs / view"
                  value={params.nfsPerEducationalPostView ?? 0}
                  onChange={(v) =>
                    setParams((p) => ({
                      ...p,
                      nfsPerEducationalPostView: Number(v),
                      nfsPerSponsoredPostView: Number(v),
                      nfsPerPostView: Number(v),
                    }))
                  }
                />
              </div>
            </div>

            {/* 2. Ações Sociais */}
            <div className="space-y-2 pt-2 border-t border-zinc-900">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                2. Ações Sociais no Feed (Engajamento)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <ParamInput
                  label="Compartilhamento Externo (por Rede Social)"
                  unit="nf / rede"
                  value={params.nfsPerShare ?? 1}
                  onChange={(v) => setParams((p) => ({ ...p, nfsPerShare: Number(v) }))}
                />
                <ParamInput
                  label="Clique em Link do Post (Sem premiação)"
                  unit="nfs / clique"
                  value={params.nfsPerLinkClick ?? 0}
                  onChange={(v) => setParams((p) => ({ ...p, nfsPerLinkClick: Number(v) }))}
                />
                <ParamInput
                  label="Curtida em Posts (Sem premiação)"
                  unit="nfs / like"
                  value={params.nfsPerLike ?? 0}
                  onChange={(v) => setParams((p) => ({ ...p, nfsPerLike: Number(v) }))}
                />
              </div>
            </div>

            {/* 3. Travas de Leitura, Dwell Time e Antifraude */}
            <div className="space-y-2 pt-2 border-t border-zinc-900">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                3. Travas de Leitura, Retenção & Antifraude
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <ParamInput
                  label="Dwell Time Mínimo de Leitura"
                  unit="segundos"
                  value={params.minDwellTimeSecondsForView ?? 10}
                  onChange={(v) => setParams((p) => ({ ...p, minDwellTimeSecondsForView: Number(v) }))}
                />
                <div className="bg-zinc-950 p-3 rounded-2xl border border-zinc-800 space-y-1">
                  <label className="text-[11px] font-semibold text-zinc-300 block truncate">
                    Exigir Scroll Total da Janela de Texto
                  </label>
                  <select
                    value={params.requireScrollToBottomForRead ? "true" : "false"}
                    onChange={(e) =>
                      setParams((p) => ({
                        ...p,
                        requireScrollToBottomForRead: e.target.value === "true",
                      }))
                    }
                    className="bg-zinc-900 border border-zinc-700 rounded-xl px-2.5 py-1.5 text-xs font-bold text-white outline-none w-full focus:border-purple-500 cursor-pointer"
                  >
                    <option value="true">Sim (100% Scroll Obrigatório)</option>
                    <option value="false">Não (Apenas Dwell Time)</option>
                  </select>
                </div>
                <ParamInput
                  label="Retenção Mínima em Vídeo"
                  unit="% do vídeo"
                  value={params.minVideoCompletionPct ?? 90}
                  onChange={(v) => setParams((p) => ({ ...p, minVideoCompletionPct: Number(v) }))}
                />
                <ParamInput
                  label="Limite Diário de Interações no Feed"
                  unit="interações / dia"
                  value={params.dailyThirdPartyInteractionsLimit ?? 10}
                  onChange={(v) => setParams((p) => ({ ...p, dailyThirdPartyInteractionsLimit: Number(v) }))}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Programa de Indicação & Regras de Comissionamento */}
        <div className="bg-zinc-900 border border-purple-500/30 rounded-3xl p-6 shadow-xl space-y-5 lg:col-span-2 bg-gradient-to-r from-purple-950/30 via-zinc-900 to-zinc-900">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 pb-3 gap-2">
            <div className="flex items-center gap-2">
              <Users className="size-5 text-lime-400" />
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400">
                  Regras Diferenciadas de Remuneração
                </span>
                <h4 className="font-bold text-base text-white">Programa de Indicação & Comissionamento de Indicados</h4>
              </div>
            </div>
            <span className="text-xs font-bold text-lime-300 bg-lime-500/10 px-3 py-1 rounded-full border border-lime-500/20 flex items-center gap-1.5 self-start sm:self-auto">
              <Sparkles className="size-3.5 text-lime-400" />
              Regra Estrutural de Negócio
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="space-y-1.5 p-3 rounded-xl bg-blue-500/5 border border-blue-500/20">
              <div className="flex items-center gap-1.5 text-blue-400 font-black uppercase text-[10px] tracking-wider">
                <span>👤</span> Usuário Comum (Atleta Free)
              </div>
              <p className="text-[11px] text-zinc-300 leading-snug">
                O indicador recebe <b>50 nfs</b> uma única vez por cada novo usuário cadastrado usando seu código. Embora a marcação seja <b>permanente</b> no banco, <b>esta premiação será a única</b> que o indicador comum receberá.
              </p>
            </div>

            <div className="space-y-1.5 p-3 rounded-xl bg-amber-500/5 border border-amber-500/20">
              <div className="flex items-center gap-1.5 text-amber-400 font-black uppercase text-[10px] tracking-wider">
                <span>⭐</span> Assinante Netfits Club (Upgrade)
              </div>
              <p className="text-[11px] text-zinc-300 leading-snug">
                A regra só se altera se o usuário <b>assinar o Clube</b>. Ao virar assinante, passa aí sim a ganhar <b>10% de comissão em pontos</b> sobre todos os pontos ganhos nas compras do shop feitas pelos seus indicados.
              </p>
            </div>

            <div className="space-y-1.5 p-3 rounded-xl bg-purple-500/5 border border-purple-500/20">
              <div className="flex items-center gap-1.5 text-purple-400 font-black uppercase text-[10px] tracking-wider">
                <span>🏢</span> Associados (Carteira Compartilhada)
              </div>
              <p className="text-[11px] text-zinc-300 leading-snug">
                <b>Esta limitação NÃO se aplica aos Associados</b>. Seus indicados estão sempre presentes na sua <b>Carteira Compartilhada perpétua</b>, recebendo repasse contínuo de <b>10% das receitas</b> geradas por eles.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ParamInput
              label="Bônus por Novo Cadastro no App (Boas-Vindas)"
              unit="nfs / novo cadastro"
              value={params.newUserRegistrationBonusNfs ?? 50}
              onChange={(v) => setParams((p) => ({ ...p, newUserRegistrationBonusNfs: Number(v) }))}
            />
            <ParamInput
              label="Pontos por indicação de novo usuário (comum)"
              unit="nfs / amigo indicado"
              value={params.normalUserNewReferralBonusNfs ?? 50}
              onChange={(v) => setParams((p) => ({ ...p, normalUserNewReferralBonusNfs: Number(v) }))}
            />
            <ParamInput
              label="Comissão pontos shop indicados (assinante Clube)"
              unit="% dos pontos do shop"
              value={params.clubMemberReferralShopPointsPct ?? 0.0}
              onChange={(v) =>
                setParams((p) => ({
                  ...p,
                  clubMemberReferralShopPointsPct: Number(v),
                  normalUserReferralSharePct: Number(v),
                }))
              }
            />
            <ParamInput
              label="Repasse receitas Carteira Compartilhada (Associados)"
              unit="% da receita gerada"
              value={params.associadoShareOfNetfitsRevenuePct}
              onChange={(v) => setParams((p) => ({ ...p, associadoShareOfNetfitsRevenuePct: Number(v) }))}
            />
          </div>
        </div>

        {/* Card 3: Atividades Físicas, Wearables & Regras Sweat-to-Earn */}
        <div className="bg-zinc-900 border border-lime-500/30 rounded-3xl p-6 shadow-xl space-y-5 lg:col-span-2 bg-gradient-to-r from-lime-950/20 via-zinc-900 to-zinc-900">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 pb-3 gap-2">
            <div className="flex items-center gap-2">
              <Activity className="size-5 text-lime-400" />
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400">
                  Motor Biométrico & Sweat-to-Earn
                </span>
                <h4 className="font-bold text-base text-white">Atividades Físicas, Wearables & Regras de Treino</h4>
              </div>
            </div>
            <span className="text-xs font-bold text-lime-400 bg-lime-500/10 px-3 py-1 rounded-full border border-lime-500/20 flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-lime-400" />
              Validação Biometria / GPS Ativa
            </span>
          </div>

          {/* Governança Específica: Clube & Aprovação da Diretoria */}
          <div className="bg-amber-950/30 p-4 rounded-2xl border border-amber-500/40 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <span className="text-[10px] font-black uppercase text-amber-400">
                Trava de Elegibilidade: Apenas Membros do Clube
              </span>
              <p className="text-xs text-zinc-300">
                Pontuação de treino restrita exclusivamente aos assinantes do Netfits Club.
              </p>
              <div className="pt-1">
                <span className="text-xs font-mono font-bold bg-amber-900/60 text-amber-200 px-2.5 py-1 rounded-lg border border-amber-700/50">
                  {params.workoutRewardClubOnly ? "🔒 EXCLUSIVO CLUBE (ATIVADO)" : "🔓 PÚBLICO GERAL"}
                </span>
              </div>
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-black uppercase text-amber-400">
                Status de Governança: Aprovação da Diretoria
              </span>
              <p className="text-xs text-zinc-300">
                A pontuação de treinos de membros do clube aguarda deliberação executiva.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <select
                  value={params.workoutRewardBoardApproved ? "true" : "false"}
                  onChange={(e) =>
                    setParams((p) => ({
                      ...p,
                      workoutRewardBoardApproved: e.target.value === "true",
                    }))
                  }
                  className="bg-zinc-950 border border-amber-500/50 rounded-xl px-3 py-1.5 text-xs font-bold text-amber-300 outline-none cursor-pointer"
                >
                  <option value="false">⏳ PENDENTE DE APROVAÇÃO DA DIRETORIA</option>
                  <option value="true">✅ APROVADO PELA DIRETORIA (LIBERAR PONTOS)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Subseção A: Parâmetros Centrais de Pontuação */}
          <div className="space-y-3 bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800">
            <h5 className="text-xs font-black text-lime-400 uppercase tracking-wider flex items-center gap-2">
              <span>🏃 Parâmetros de Recompensa & Limites de Frequência</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <ParamInput
                label="nfs por Atividade Executada (GPS/Sensores)"
                unit="nfs / treino"
                value={params.nfsPerWorkout ?? 20}
                onChange={(v) => setParams((p) => ({ ...p, nfsPerWorkout: Number(v) }))}
              />
              <ParamInput
                label="Limite semanal de treinos pontuáveis"
                unit="treinos / semana"
                value={params.weeklyMaxRewardedWorkouts ?? 5}
                onChange={(v) => setParams((p) => ({ ...p, weeklyMaxRewardedWorkouts: Number(v) }))}
              />
              <ParamInput
                label="Limite diário de treinos pontuáveis"
                unit="treino / dia"
                value={params.dailyMaxRewardedWorkouts ?? 1}
                onChange={(v) => setParams((p) => ({ ...p, dailyMaxRewardedWorkouts: Number(v) }))}
              />
              <ParamInput
                label="Bônus Semanal de Consistência (Streak)"
                unit="nfs bônus"
                value={params.workoutStreakBonusNfs ?? 20}
                onChange={(v) => setParams((p) => ({ ...p, workoutStreakBonusNfs: Number(v) }))}
              />
            </div>
          </div>

          {/* Subseção B: Critérios Mínimos de Elegibilidade */}
          <div className="space-y-3 bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800">
            <h5 className="text-xs font-black text-purple-300 uppercase tracking-wider flex items-center gap-2">
              <span>⏱️ Critérios de Duração, Biometria & Ingestão</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <ParamInput
                label="Duração Mínima Treino Geral"
                unit="minutos"
                value={params.minWorkoutDurationMinutes ?? 30}
                onChange={(v) => setParams((p) => ({ ...p, minWorkoutDurationMinutes: Number(v) }))}
              />
              <ParamInput
                label="Duração Mínima Treino HIIT"
                unit="minutos"
                value={params.minWorkoutDurationHiitMinutes ?? 20}
                onChange={(v) => setParams((p) => ({ ...p, minWorkoutDurationHiitMinutes: Number(v) }))}
              />
              <ParamInput
                label="Gasto Calórico Mínimo Ativo"
                unit="kcal ativas"
                value={params.minWorkoutActiveCalories ?? 150}
                onChange={(v) => setParams((p) => ({ ...p, minWorkoutActiveCalories: Number(v) }))}
              />
              <ParamInput
                label="Janela Máx. Sincronia Retroativa"
                unit="horas"
                value={params.maxRetroactiveSyncHours ?? 48}
                onChange={(v) => setParams((p) => ({ ...p, maxRetroactiveSyncHours: Number(v) }))}
              />
            </div>
          </div>
        </div>

        {/* Card 4: Atribuição Comercial & Shopping (Take-Rate e Fidelidade) */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 lg:col-span-2">
          <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
            <Zap className="size-5 text-amber-400" />
            <h4 className="font-bold text-sm text-white">Atribuição Comercial, Fidelidade Bancária & Shopping</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ParamInput
              label="nfs por Vínculo Fidelidade (Stix/Livelo)"
              unit="nfs / vínculo"
              value={params.nfsPerLoyaltyDeclaration}
              onChange={(v) => setParams((p) => ({ ...p, nfsPerLoyaltyDeclaration: Number(v) }))}
            />
            <ParamInput
              label="Take-Rate Netfits no Shopping"
              unit="% do GMV"
              value={params.netfitsTakeRatePctFromGmv}
              onChange={(v) => setParams((p) => ({ ...p, netfitsTakeRatePctFromGmv: Number(v) }))}
            />
            <ParamInput
              label="Multiplicador Clube no Shop"
              unit="x (1.0 = sem dobro)"
              value={params.clubShopPointsMultiplier ?? 1.0}
              onChange={(v) =>
                setParams((p) => ({
                  ...p,
                  clubShopPointsMultiplier: Number(v),
                  nfsEarnedPerBrlSpentDouble: (p.nfsEarnedPerBrlSpent || 4.0) * Number(v),
                }))
              }
            />
            <ParamInput
              label="Bônus 1ª Compra no Shopping"
              unit="nfs bônus (0 = inativo)"
              value={params.shopFirstPurchaseBonusNfs ?? 0}
              onChange={(v) => setParams((p) => ({ ...p, shopFirstPurchaseBonusNfs: Number(v) }))}
            />
          </div>
        </div>

        {/* Card 5: Economia, Resgate & Validade dos Pontos */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 lg:col-span-2">
          <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
            <Coins className="size-5 text-amber-400" />
            <h4 className="font-bold text-sm text-white">Economia do Programa de Pontos & Validade</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            <ParamInput
              label="CPP de Acúmulo (Emissão)"
              unit="R$ / nfs"
              value={params.cppAcumuloBrl ?? 0.015}
              onChange={(v) => setParams((p) => ({ ...p, cppAcumuloBrl: Number(v) }))}
            />
            <ParamInput
              label="CPP de Resgate (Cotação R$)"
              unit="R$ / nfs"
              value={params.cppResgateBrl}
              onChange={(v) => setParams((p) => ({ ...p, cppResgateBrl: Number(v) }))}
            />
            <ParamInput
              label="Custo Provisão Pontos Válidos"
              unit="R$ / nfs"
              value={params.costPerProvisionedPointBrl}
              onChange={(v) => setParams((p) => ({ ...p, costPerProvisionedPointBrl: Number(v) }))}
            />
            <ParamInput
              label="Netfits por R$ 1,00 Gasto"
              unit="nfs / R$"
              value={params.nfsEarnedPerBrlSpent}
              onChange={(v) =>
                setParams((p) => ({
                  ...p,
                  nfsEarnedPerBrlSpent: Number(v),
                  nfsEarnedPerBrlSpentDouble: Number(v) * (p.clubShopPointsMultiplier ?? 1.0),
                }))
              }
            />
            <ParamInput
              label="Validade dos Pontos nfs"
              unit="meses"
              value={params.pointsValidityMonths}
              onChange={(v) => setParams((p) => ({ ...p, pointsValidityMonths: Number(v) }))}
            />
            <ParamInput
              label="Expiração Estimada (Breakage)"
              unit="% ao ano"
              value={params.targetBreakagePct}
              onChange={(v) => setParams((p) => ({ ...p, targetBreakagePct: Number(v) }))}
            />
          </div>

          <div className="bg-purple-950/40 p-4 rounded-2xl border border-purple-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-300 mt-2">
            <div className="flex items-center gap-2">
              <span className="text-base">🛡️</span>
              <div>
                <span className="font-bold text-white block">Algoritmo de Priorização de Resgate: FEFO (First-Expiring, First-Out)</span>
                <span className="text-[11px] text-zinc-400">
                  O sistema consome prioritariamente os lotes de pontos com a data de expiração mais próxima, evitando a perda indevida de saldo ativo pelo usuário.
                </span>
              </div>
            </div>
            <span className="text-[10px] font-extrabold font-mono bg-lime-400 text-zinc-950 px-2.5 py-1 rounded-lg shrink-0">
              ATIVADO (FEFO System)
            </span>
          </div>
        </div>
      </div>
    </form>
  );
}
