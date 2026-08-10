import { useSyncExternalStore } from "react";

export type LevelKey = "atleta" | "prime" | "elite";

type LevelState = { level: LevelKey };

let state: LevelState = { level: "atleta" };

const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());
const subscribe = (fn: () => void) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};
const getSnapshot = () => state;

export const MULTIPLIERS: Record<LevelKey, number> = {
  atleta: 1,
  prime: 1.5,
  elite: 2,
};

export const LEVEL_LABELS: Record<LevelKey, string> = {
  atleta: "Atleta",
  prime: "Prime",
  elite: "Elite",
};

export const levelStore = {
  get: () => state.level,
  getMultiplier: () => MULTIPLIERS[state.level],
  set(level: LevelKey) {
    if (state.level === level) return;
    state = { level };
    emit();
  },
};

export function useLevel() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot).level;
}
