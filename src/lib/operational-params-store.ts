import { useSyncExternalStore } from "react";

export type OperationalParams = {
  // Feed Rewards & Anti-Fraud (Criação de Conteúdo Próprio)
  nfsPerVideoPost: number;
  nfsPerTextPost: number;
  dailyRewardedPostLimit: number;
  weeklyRewardedPostLimit: number;

  // Engajamento em Posts de Terceiros
  nfsPerPostView: number;
  nfsPerLike: number;
  nfsPerSave: number;
  nfsPerShare: number;
  dailyThirdPartyInteractionsLimit: number;
  dailyMaxPointsThirdPartyInteractions: number;

  // Travas de Segurança Antifraude & Moderação
  blockSelfEngagementRewards: boolean; // Antifraude: Bloqueia acúmulo de nfs por agir sobre o próprio post
  minDwellTimeSecondsForView: number;   // Tempo mínimo de retenção (ex: 3s) para considerar visualização válida
  maxInteractionsPerMinute: number;     // Rate limit contra robôs/scripts (ex: máx 10 interações/min)
  duplicateMediaFilterActive: boolean;  // Filtro de hash de mídia duplicada ou spam

  nfsPerWorkout: number;
  nfsPerLoyaltyDeclaration: number;

  // Economics & Revenue Share
  netfitsTakeRatePctFromGmv: number;
  associadoShareOfNetfitsRevenuePct: number;
  normalUserReferralSharePct: number;
  normalUserNewReferralBonusNfs: number;

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
  nfsPerVideoPost: 15,
  nfsPerTextPost: 10,
  dailyRewardedPostLimit: 1, // 1 post próprio premiado por dia
  weeklyRewardedPostLimit: 7,

  nfsPerPostView: 5,
  nfsPerLike: 5,
  nfsPerSave: 10,
  nfsPerShare: 10,
  dailyThirdPartyInteractionsLimit: 10,
  dailyMaxPointsThirdPartyInteractions: 50,

  blockSelfEngagementRewards: true, // Auto-engajamento sempre bloqueado
  minDwellTimeSecondsForView: 3,
  maxInteractionsPerMinute: 10,
  duplicateMediaFilterActive: true,

  nfsPerWorkout: 50,
  nfsPerLoyaltyDeclaration: 20,

  netfitsTakeRatePctFromGmv: 8.0,
  associadoShareOfNetfitsRevenuePct: 10.0,
  normalUserReferralSharePct: 10.0,
  normalUserNewReferralBonusNfs: 50,

  cppAcumuloBrl: 0.02,
  cppResgateBrl: 0.01,
  costPerProvisionedPointBrl: 0.01,
  netfitsClubMonthlyFeeBrl: 19.90,
  nfsEarnedPerBrlSpent: 0.50,
  nfsEarnedPerBrlSpentDouble: 1.00,
  shopFirstPurchaseBonusNfs: 150,
  pointsValidityMonths: 24,
  targetBreakagePct: 12.0,

  redemptionPolicy: "FEFO",
  redemptionPolicyName: "FEFO — First-Expiring, First-Out (Consumo Prioritário do Ponto Mais Próximo do Vencimento)",

  cloudInfraMonthlyCostBrl: 23500.0,
  finOpsSavingsPct: 51.4,
  finOpsAnnualGainBrl: 294000.0,
};

const STORAGE_KEY = "netfits_operational_params_v4";

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

if (typeof window !== "undefined") {
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
  updateParams: (newParams: Partial<OperationalParams>) => {
    currentParams = { ...currentParams, ...newParams };
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentParams));
      } catch (e) {
        console.error(e);
      }
    }
    emit();
  },
  resetParams: () => {
    currentParams = DEFAULT_OPERATIONAL_PARAMS;
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {
        console.error(e);
      }
    }
    emit();
  },
};

export function useOperationalParams(): OperationalParams {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
