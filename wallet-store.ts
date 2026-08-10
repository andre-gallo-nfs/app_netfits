import { useSyncExternalStore } from "react";
import { walletTxs as seedTxs } from "@/lib/feed-data";
import { levelStore } from "@/lib/level-store";

export type WalletTx = {
  id: string;
  title: string;
  date: string;
  amount: string; // e.g. "+199 nfs" / "-1.290 nfs"
  positive: boolean;
};

type WalletState = {
  balance: number; // in nfs
  txs: WalletTx[];
};

const INITIAL_BALANCE = 25575;

let state: WalletState = {
  balance: INITIAL_BALANCE,
  txs: [...seedTxs],
};

const listeners = new Set<() => void>();

function emit() {
  for (const l of listeners) l();
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function getSnapshot() {
  return state;
}

function formatNfs(n: number) {
  return n.toLocaleString("pt-BR");
}

function todayLabel() {
  return "Hoje";
}

export const wallet = {
  getBalance: () => state.balance,
  /** Debita nfs (gasto numa compra) e registra a movimentação. */
  spend(amount: number, title: string) {
    if (amount <= 0) return;
    const tx: WalletTx = {
      id: `tx-${Date.now()}-d`,
      title,
      date: todayLabel(),
      amount: `-${formatNfs(amount)} nfs`,
      positive: false,
    };
    state = {
      balance: Math.max(0, state.balance - amount),
      txs: [tx, ...state.txs],
    };
    emit();
  },
  /** Credita nfs (cashback) e registra a movimentação. Aplica multiplicador do nível. */
  earn(amount: number, title: string) {
    if (amount <= 0) return;
    const multiplier = levelStore.getMultiplier();
    const credited = Math.round(amount * multiplier);
    const tx: WalletTx = {
      id: `tx-${Date.now()}-c`,
      title,
      date: todayLabel(),
      amount: `+${formatNfs(credited)} nfs`,
      positive: true,
    };
    state = {
      balance: state.balance + credited,
      txs: [tx, ...state.txs],
    };
    emit();
  },
};

export function useWallet() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

/** Extrai o número de nfs de strings tipo "+199 nfs" / "1.290 nfs". */
export function parseNfs(raw?: string): number {
  if (!raw) return 0;
  const cleaned = raw.replace(/[^\d]/g, "");
  return cleaned ? parseInt(cleaned, 10) : 0;
}
