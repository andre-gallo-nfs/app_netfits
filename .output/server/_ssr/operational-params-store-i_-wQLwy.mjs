import { r as reactExports } from "../_libs/react.mjs";
const DEFAULT_OPERATIONAL_PARAMS = {
  nfsPerVideoPost: 15,
  nfsPerTextPost: 10,
  dailyRewardedPostLimit: 3,
  weeklyRewardedPostLimit: 15,
  nfsPerPostView: 5,
  nfsPerLike: 5,
  nfsPerSave: 10,
  nfsPerShare: 10,
  nfsPerWorkout: 50,
  nfsPerLoyaltyDeclaration: 20,
  netfitsTakeRatePctFromGmv: 8,
  associadoShareOfNetfitsRevenuePct: 10,
  normalUserReferralSharePct: 10,
  normalUserNewReferralBonusNfs: 50,
  cppAcumuloBrl: 0.02,
  cppResgateBrl: 0.01,
  costPerProvisionedPointBrl: 0.01,
  netfitsClubMonthlyFeeBrl: 19.9,
  nfsEarnedPerBrlSpent: 0.5,
  nfsEarnedPerBrlSpentDouble: 1,
  shopFirstPurchaseBonusNfs: 150,
  pointsValidityMonths: 24,
  targetBreakagePct: 12,
  redemptionPolicy: "FEFO",
  redemptionPolicyName: "FEFO — First-Expiring, First-Out (Consumo Prioritário do Ponto Mais Próximo do Vencimento)"
};
const STORAGE_KEY = "netfits_operational_params_v3";
function loadInitialParams() {
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
let currentParams = loadInitialParams();
const listeners = /* @__PURE__ */ new Set();
function emit() {
  for (const l of listeners) l();
}
function subscribe(fn) {
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
const operationalParamsStore = {
  getParams: () => currentParams,
  updateParams: (newParams) => {
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
  }
};
function useOperationalParams() {
  return reactExports.useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
export {
  operationalParamsStore as o,
  useOperationalParams as u
};
