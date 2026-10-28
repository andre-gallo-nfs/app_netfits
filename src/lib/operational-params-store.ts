import { useSyncExternalStore } from "react";

export type OperationalParams = {
  // Feed Rewards & Categorias Oficiais
  nfsPerOwnPost: number; // nfs por Post Próprio publicado pelo usuário - 10 nfs
  dailyRewardedPostLimit: number; // Limite diário de posts próprios pontuáveis - 1
  weeklyRewardedPostLimit: number; // Limite semanal de posts próprios pontuáveis - 7

  // Categorias de Visualização / Leitura de Posts (0 nfs - pontuação concentrada no Quiz):
  nfsPerEducationalPostView: number; // 0 nfs
  nfsPerSponsoredPostView: number;   // 0 nfs
  nfsPerPostView: number;            // 0 nfs

  // Quizzes de Conhecimento no Feed:
  nfsPerEducationalQuiz: number; // Posts próprios Netfits & Fibios: 5 nfs (subsídio Netfits)
  nfsPerSponsoredQuiz: number;   // Posts patrocinados por parceiros: 10 nfs (custeio do parceiro)
  nfsPerQuiz: number;            // Base/fallback legado (5 nfs)
  nfsPerLinkClick: number; // Clicar no link do post: 0 nfs (sem premiação)
  nfsPerLike: number;      // Curtida: 0 nfs (sem premiação)
  nfsPerShare: number;     // Compartilhamento externo: 1 nf por rede social
  nfsPerSave?: number;     // Salvar post: 0 nfs
  dailyThirdPartyInteractionsLimit: number; // limite máximo de interações com posts de terceiros - 10

  // Parâmetros legados mantidos para compatibilidade com componentes existentes
  nfsPerVideoPost?: number;
  nfsPerTextPost?: number;
  dailyMaxPointsThirdPartyInteractions?: number;

  // Travas de Segurança Antifraude & Moderação
  blockSelfEngagementRewards: boolean; // Antifraude: Bloqueia acúmulo de nfs por agir sobre o próprio post
  minDwellTimeSecondsForView: number;   // Tempo mínimo de retenção para posts estáticos (aumentado para 10s)
  requireScrollToBottomForRead: boolean; // Exige scroll down total da janela de texto para validar leitura
  minVideoCompletionPct: number;       // Antifraude Vídeos: Percentual mínimo de retenção (90%) para atribuição de nfs
  requireFullVideoCompletionForReward?: boolean; // Legado mantido para compatibilidade
  maxInteractionsPerMinute: number;     // Rate limit contra robôs/scripts (ex: máx 10 interações/min)
  duplicateMediaFilterActive: boolean;  // Filtro de hash de mídia duplicada ou spam

  // Atividades Físicas, Wearables & Regras Sweat-to-Earn
  // IMPORTANTE: Pontuação por treino realizada é SOMENTE válida para membros do Clube Netfits.
  // Mesmo essa pontuação exclusiva de membros do clube ainda está PENDENTE de aprovação da diretoria da empresa.
  nfsPerWorkout: number; // nfs por atividade executada (25 nfs para membros do clube)
  workoutRewardClubOnly: boolean; // Trava de produto: somente membros do Clube Netfits elegíveis
  workoutRewardBoardApproved: boolean; // Trava de governança: pendente de aprovação formal da diretoria
  weeklyMaxRewardedWorkouts: number; // Máximo de atividades pontuáveis por semana (5 treinos)
  dailyMaxRewardedWorkouts: number; // Máximo de atividades pontuáveis por dia (1 treino)
  minWorkoutDurationMinutes: number; // Duração mínima para modalidades gerais (30 min)
  minWorkoutDurationHiitMinutes: number; // Duração mínima para treinos HIIT (20 min)
  minWorkoutActiveCalories: number; // Gasto calórico ativo mínimo (150 kcal)
  maxRetroactiveSyncHours: number; // Janela máxima de sincronização retroativa (48 horas)
  workoutStreakBonusNfs: number; // Bônus de consistência ao completar a meta semanal de 5 treinos (20 nfs)
  requireHardwareSensorsForWorkout: boolean; // Antifraude: exige sensores de hardware (GPS/Cardíaco) e rejeita manual
  maxRunningPaceThresholdMinutesPerKm: number; // Antifraude corrida: velocidade limite (~26,6 km/h / 2:15 min/km)
  maxCyclingSpeedKmh: number; // Antifraude bike: velocidade contínua máxima sem motor (55 km/h)
  nfsPerLoyaltyDeclaration: number;

  // Economics, Indicações & Revenue Share
  netfitsTakeRatePctFromGmv: number;
  associadoShareOfNetfitsRevenuePct: number; // 10% de repasse das receitas da Carteira Compartilhada aos Associados
  normalUserNewReferralBonusNfs: number; // Pontos por indicação de novo usuário (usuário comum: 50 nfs, premiação única)
  newUserRegistrationBonusNfs: number; // Pontos por novo cadastro no app (onboarding boas-vindas: 50 nfs)
  clubMemberReferralShopPointsPct: number; // Comissão de pontos por compras no shop de indicados (assinante Netfits Club: 10%)
  normalUserReferralSharePct: number; // Legado sincronizado com clubMemberReferralShopPointsPct

  // Point Economics
  cppAcumuloBrl: number;
  cppResgateBrl: number;
  costPerProvisionedPointBrl: number;
  netfitsClubMonthlyFeeBrl: number;
  nfsEarnedPerBrlSpent: number;
  clubShopPointsMultiplier: number; // Multiplicador de pontos no Shop para assinantes do Clube (padrão atual: 1.0x, sem o dobro)
  nfsEarnedPerBrlSpentDouble: number; // Legado mantido para compatibilidade
  shopFirstPurchaseBonusNfs: number; // Bônus 1ª compra no Shop (inicialmente 0 nfs)
  pointsValidityMonths: number;
  targetBreakagePct: number;

  // Algoritmo de Resgate Justo ao Usuário (FEFO: First-Expiring, First-Out)
  redemptionPolicy: "FEFO";
  redemptionPolicyName: string;

  // FinOps & Otimização de Custos de TI
  cloudInfraMonthlyCostBrl: number;
  finOpsSavingsPct: number;
  finOpsAnnualGainBrl: number;
};

export type PointBatch = {
  id: string;
  source: string; // ex: "Cashback Shop", "Workout Garmin", "Indicação"
  amount: number;
  earnedDate: string;
  expirationDate: string; // ISO String ou YYYY-MM-DD
  daysRemaining: number;
};

/**
 * Função utilitária para consumo de pontos seguindo o Algoritmo FEFO
 * (First-Expiring, First-Out). Ordena os lotes de pontos pela data de expiração
 * mais próxima e consome os pontos daquele lote antes dos lotes mais novos.
 */
export function deductPointsFEFO(
  batches: PointBatch[],
  pointsToDeduct: number
): { updatedBatches: PointBatch[]; deductedLog: { batchId: string; source: string; amountDeducted: number }[] } {
  // Ordena os lotes por dias restantes para expiração (crescente -> o mais próximo de vencer vem primeiro)
  const sortedBatches = [...batches].sort((a, b) => a.daysRemaining - b.daysRemaining);
  let remainingToDeduct = pointsToDeduct;
  const deductedLog: { batchId: string; source: string; amountDeducted: number }[] = [];

  const updatedBatches = sortedBatches.map((batch) => {
    if (remainingToDeduct <= 0 || batch.amount <= 0) return batch;

    const amountDeducted = Math.min(batch.amount, remainingToDeduct);
    remainingToDeduct -= amountDeducted;

    deductedLog.push({
      batchId: batch.id,
      source: batch.source,
      amountDeducted,
    });

    return {
      ...batch,
      amount: batch.amount - amountDeducted,
    };
  }).filter((batch) => batch.amount > 0);

  return { updatedBatches, deductedLog };
}

export const DEFAULT_OPERATIONAL_PARAMS: OperationalParams = {
  // Feed Rewards - Categorias Oficiais
  nfsPerOwnPost: 10,
  dailyRewardedPostLimit: 1, // Limite diário de posts próprios pontuáveis
  weeklyRewardedPostLimit: 7, // Limite semanal de posts próprios pontuáveis

  // Categorias de Visualização / Leitura de Posts (0 nfs - pontuação no Quiz):
  nfsPerEducationalPostView: 0,
  nfsPerSponsoredPostView: 0,
  nfsPerPostView: 0,

  // Quizzes de Conhecimento no Feed:
  nfsPerEducationalQuiz: 5,  // Posts próprios Netfits & Fibios: 5 nfs (subsídio Netfits)
  nfsPerSponsoredQuiz: 10,   // Posts patrocinados por parceiros: 10 nfs (custeio do parceiro)
  nfsPerQuiz: 5,             // Base/fallback legado (5 nfs)
  nfsPerLinkClick: 0,  // Clicar no link: 0 nfs (sem premiação)
  nfsPerLike: 0,       // Curtida: 0 nfs (sem premiação)
  nfsPerShare: 1,      // 1 nf por compartilhamento em rede social
  nfsPerSave: 0,
  dailyThirdPartyInteractionsLimit: 10, // limite máximo de interações com posts de terceiros
  dailyMaxPointsThirdPartyInteractions: 100,

  // Campos legados sincronizados
  nfsPerVideoPost: 0,
  nfsPerTextPost: 0,

  blockSelfEngagementRewards: true, // Auto-engajamento sempre bloqueado
  minDwellTimeSecondsForView: 10,   // Dwell time aumentado para 10s
  requireScrollToBottomForRead: true, // Exige scroll down total da janela de texto
  minVideoCompletionPct: 90,        // Antifraude Vídeos: 90% de retenção mínima do vídeo
  requireFullVideoCompletionForReward: true, // Legado mantido para compatibilidade
  maxInteractionsPerMinute: 10,
  duplicateMediaFilterActive: true,

  // Atividades Físicas, Wearables & Regras Sweat-to-Earn
  nfsPerWorkout: 25, // 25 nfs por atividade executada (somente Clube Netfits)
  workoutRewardClubOnly: true, // Trava: exclusivo para assinantes do Clube
  workoutRewardBoardApproved: false, // Governança: PENDENTE DE APROVAÇÃO DA DIRETORIA
  weeklyMaxRewardedWorkouts: 5, // Limite de 5 treinos por semana
  dailyMaxRewardedWorkouts: 1, // Limite de 1 treino por dia
  minWorkoutDurationMinutes: 30, // 30 minutos mínimos para treinos gerais
  minWorkoutDurationHiitMinutes: 20, // 20 minutos para HIIT
  minWorkoutActiveCalories: 150, // 150 kcal ativas mínimas
  maxRetroactiveSyncHours: 48, // 48 horas retroativas
  workoutStreakBonusNfs: 20, // Bônus de consistência de +20 nfs ao completar 5 treinos na semana
  requireHardwareSensorsForWorkout: true, // Rejeita entradas manuais sem sensores ópticos/GPS
  maxRunningPaceThresholdMinutesPerKm: 2.25, // Trava veículos motorizados em corrida (2:15 min/km)
  maxCyclingSpeedKmh: 55, // Trava velocidade contínua de bike acima de 55 km/h
  nfsPerLoyaltyDeclaration: 20,

  netfitsTakeRatePctFromGmv: 6.0,
  associadoShareOfNetfitsRevenuePct: 10.0,
  normalUserNewReferralBonusNfs: 50,
  newUserRegistrationBonusNfs: 50,
  clubMemberReferralShopPointsPct: 0.0, // Desativada (0%). Será avaliada exclusivamente no futuro lançamento do Clube Netfits.
  normalUserReferralSharePct: 0.0, // Desativada (0%). Usuário comum NÃO recebe comissão sobre compras de amigos.

  cppAcumuloBrl: 0.015, // R$ 0,015 por ponto de acúmulo (atualizado conforme diretriz executiva)
  cppResgateBrl: 0.01,
  costPerProvisionedPointBrl: 0.01, // R$ 0,010 por ponto provisionado
  netfitsClubMonthlyFeeBrl: 19.90,
  nfsEarnedPerBrlSpent: 4.0,
  clubShopPointsMultiplier: 1.0, // Neste momento o assinante do clube NÃO ganha o dobro no Shop (1.0x = 4 nfs/R$)
  nfsEarnedPerBrlSpentDouble: 4.0, // Legado alinhado com 1.0x
  shopFirstPurchaseBonusNfs: 0, // Bônus 1ª compra inicialmente zerado (0 nfs)
  pointsValidityMonths: 24, // Expiração de 24 meses (730 dias)
  targetBreakagePct: 5.0, // Taxa de expiração estimada (Breakage CPC 47): 5,0% a.a.

  redemptionPolicy: "FEFO",
  redemptionPolicyName: "FEFO — First-Expiring, First-Out (Consumo Prioritário do Ponto Mais Próximo do Vencimento)",

  cloudInfraMonthlyCostBrl: 7260.0,
  finOpsSavingsPct: 61.5,
  finOpsAnnualGainBrl: 138930.0,
};

const STORAGE_KEY = "netfits_operational_params_v14";

function loadInitialParams(): OperationalParams {
  if (typeof window === "undefined") return DEFAULT_OPERATIONAL_PARAMS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...DEFAULT_OPERATIONAL_PARAMS, ...parsed, nfsPerEducationalPostView: 0, nfsPerSponsoredPostView: 0, nfsPerPostView: 0 };
    }
  } catch (e) {
    console.error("Error loading operational params from localStorage:", e);
  }
  return DEFAULT_OPERATIONAL_PARAMS;
}

let currentParams: OperationalParams = loadInitialParams();

const listeners = new Set<() => void>();

function emit() {
  for (const l of listeners) l();
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function getSnapshot() {
  return currentParams;
}

export async function syncOperationalParamsWithServer(): Promise<OperationalParams> {
  if (typeof window === "undefined") return currentParams;
  try {
    const res = await fetch("/api/operational-params");
    if (res.ok) {
      const data = await res.json();
      if (data?.params) {
        currentParams = { ...DEFAULT_OPERATIONAL_PARAMS, ...data.params };
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(currentParams));
        } catch {
          // Ignora falha de persistência no localStorage
        }
        emit();
        return currentParams;
      }
    }
  } catch (err) {
    // Modo offline ou fallback local
  }
  return currentParams;
}

if (typeof window !== "undefined") {
  syncOperationalParamsWithServer();
  window.addEventListener("focus", () => syncOperationalParamsWithServer());

  window.addEventListener("storage", (e) => {
    if (e.key === STORAGE_KEY && e.newValue) {
      try {
        currentParams = { ...DEFAULT_OPERATIONAL_PARAMS, ...JSON.parse(e.newValue) };
        emit();
      } catch (err) {
        console.error(err);
      }
    }
  });
}

export const operationalParamsStore = {
  getParams: () => currentParams,
  syncWithServer: syncOperationalParamsWithServer,
  updateParams: async (newParams: Partial<OperationalParams>) => {
    currentParams = { ...currentParams, ...newParams };
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentParams));
      } catch (e) {
        console.error(e);
      }
      try {
        await fetch("/api/operational-params", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(currentParams),
        });
      } catch (err) {
        console.warn("Failed to sync operational params with server:", err);
      }
    }
    emit();
  },
  resetParams: async () => {
    currentParams = { ...DEFAULT_OPERATIONAL_PARAMS };
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {
        console.error(e);
      }
      try {
        await fetch("/api/operational-params", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(DEFAULT_OPERATIONAL_PARAMS),
        });
      } catch (err) {
        console.warn("Failed to reset operational params on server:", err);
      }
    }
    emit();
  },
};

export const subscribeOperationalParams = subscribe;

export function getOperationalParams(): OperationalParams {
  return operationalParamsStore.getParams();
}

export function updateOperationalParams(newParams: Partial<OperationalParams>) {
  return operationalParamsStore.updateParams(newParams);
}

export function resetOperationalParams() {
  return operationalParamsStore.resetParams();
}

export function useOperationalParams(): OperationalParams {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

