import { useSyncExternalStore } from "react";

export type OperationalParams = {
  // Feed Rewards & Regras Oficiais (Nova Tabela)
  nfsPerOwnPost: number; // nfs por Post Próprio (vídeo, foto ou texto) - 10 nfs
  dailyRewardedPostLimit: number; // Limite diário de posts próprios pontuáveis - 1
  weeklyRewardedPostLimit: number; // Limite semanal de posts próprios pontuáveis - 7
  nfsPerPostView: number; // nfs por view de posts - 10 nfs
  nfsPerLinkClick: number; // nfs por click em link de posts - 10 nfs
  dailyThirdPartyInteractionsLimit: number; // limite máximo de interações com posts de terceiros - 10

  // Parâmetros legados mantidos para compatibilidade com componentes existentes
  nfsPerVideoPost?: number;
  nfsPerTextPost?: number;
  nfsPerLike?: number;
  nfsPerSave?: number;
  nfsPerShare?: number;
  dailyMaxPointsThirdPartyInteractions?: number;

  // Travas de Segurança Antifraude & Moderação
  blockSelfEngagementRewards: boolean; // Antifraude: Bloqueia acúmulo de nfs por agir sobre o próprio post
  minDwellTimeSecondsForView: number;   // Tempo mínimo de retenção para posts estáticos (3s)
  requireFullVideoCompletionForReward: boolean; // Antifraude Vídeos: Exige 100% de retenção (dwell time total) para atribuição de nfs
  maxInteractionsPerMinute: number;     // Rate limit contra robôs/scripts (ex: máx 10 interações/min)
  duplicateMediaFilterActive: boolean;  // Filtro de hash de mídia duplicada ou spam

  nfsPerWorkout: number;
  nfsPerLoyaltyDeclaration: number;

  // Economics, Indicações & Revenue Share
  netfitsTakeRatePctFromGmv: number;
  associadoShareOfNetfitsRevenuePct: number; // 10% de repasse das receitas da Carteira Compartilhada aos Associados
  normalUserNewReferralBonusNfs: number; // Pontos por indicação de novo usuário (usuário comum: 50 nfs, premiação única)
  clubMemberReferralShopPointsPct: number; // Comissão de pontos por compras no shop de indicados (assinante Netfits Club: 10%)
  normalUserReferralSharePct: number; // Legado sincronizado com clubMemberReferralShopPointsPct

  // Point Economics
  cppAcumuloBrl: number;
  cppResgateBrl: number;
  costPerProvisionedPointBrl: number;
  netfitsClubMonthlyFeeBrl: number;
  nfsEarnedPerBrlSpent: number;
  nfsEarnedPerBrlSpentDouble: number;
  shopFirstPurchaseBonusNfs: number;
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
  // Feed Rewards - Nova Tabela Oficial (10 nfs unificado)
  nfsPerOwnPost: 10,
  dailyRewardedPostLimit: 1, // Limite diário de posts próprios pontuáveis
  weeklyRewardedPostLimit: 7, // Limite semanal de posts próprios pontuáveis

  nfsPerPostView: 10, // nfs por view de posts
  nfsPerLinkClick: 10, // nfs por click em link de posts
  dailyThirdPartyInteractionsLimit: 10, // limite máximo de interações com posts de terceiros

  // Campos legados sincronizados
  nfsPerVideoPost: 10,
  nfsPerTextPost: 10,
  nfsPerLike: 10,
  nfsPerSave: 10,
  nfsPerShare: 10,
  dailyMaxPointsThirdPartyInteractions: 100,

  blockSelfEngagementRewards: true, // Auto-engajamento sempre bloqueado
  minDwellTimeSecondsForView: 3,
  requireFullVideoCompletionForReward: true, // Vídeos do feed precisam ser vistos 100% por completo (dwell time = 100% da duração)
  maxInteractionsPerMinute: 10,
  duplicateMediaFilterActive: true,

  nfsPerWorkout: 25,
  nfsPerLoyaltyDeclaration: 20,

  netfitsTakeRatePctFromGmv: 6.0,
  associadoShareOfNetfitsRevenuePct: 10.0,
  normalUserNewReferralBonusNfs: 50,
  clubMemberReferralShopPointsPct: 10.0,
  normalUserReferralSharePct: 10.0,

  cppAcumuloBrl: 0.02,
  cppResgateBrl: 0.01,
  costPerProvisionedPointBrl: 0.01, // R$ 0,010 por ponto provisionado
  netfitsClubMonthlyFeeBrl: 19.90,
  nfsEarnedPerBrlSpent: 4.0,
  nfsEarnedPerBrlSpentDouble: 8.0,
  shopFirstPurchaseBonusNfs: 100,
  pointsValidityMonths: 24, // Expiração de 24 meses (730 dias)
  targetBreakagePct: 12.0,

  redemptionPolicy: "FEFO",
  redemptionPolicyName: "FEFO — First-Expiring, First-Out (Consumo Prioritário do Ponto Mais Próximo do Vencimento)",

  cloudInfraMonthlyCostBrl: 7260.0,
  finOpsSavingsPct: 61.5,
  finOpsAnnualGainBrl: 138930.0,
};

const STORAGE_KEY = "netfits_operational_params_v7";

function loadInitialParams(): OperationalParams {
  if (typeof window === "undefined") return DEFAULT_OPERATIONAL_PARAMS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...DEFAULT_OPERATIONAL_PARAMS, ...parsed };
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

export function useOperationalParams(): OperationalParams {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
