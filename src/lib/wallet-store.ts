import { useSyncExternalStore } from "react";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { levelStore } from "@/lib/level-store";

export type WalletTx = {
  id: string;
  title: string;
  date: string;
  amount: string; // e.g. "+199 nfs" / "-1.290 nfs"
  positive: boolean;
};

function formatNfs(n: number) {
  return n.toLocaleString("pt-BR");
}

export const wallet = {
  getBalance: () => {
    return sharedSandboxStore.getActiveUser().nfsBalance;
  },

  getTransactions: (): WalletTx[] => {
    const active = sharedSandboxStore.getActiveUser();
    const sandboxTxs = sharedSandboxStore.getUserTransactions(active.id);
    return sandboxTxs.map((t) => ({
      id: t.id,
      title: t.description,
      date: new Date(t.timestamp).toLocaleDateString("pt-BR"),
      amount: `${t.amount >= 0 ? "+" : ""}${formatNfs(t.amount)} nfs`,
      positive: t.amount >= 0,
    }));
  },

  /** Debita nfs (gasto numa compra) e registra a movimentação. */
  spend(amount: number, title: string) {
    if (amount <= 0) return;
    const active = sharedSandboxStore.getActiveUser();
    if (active.nfsBalance < amount) return;
    active.nfsBalance -= amount;
    sharedSandboxStore.addTransaction({
      userId: active.id,
      userName: active.fullName,
      amount: -amount,
      description: title,
      category: "shop",
    });
  },

  /** Credita nfs (cashback) e registra a movimentação. Aplica multiplicador do nível. */
  earn(amount: number, title: string) {
    if (amount <= 0) return;
    const active = sharedSandboxStore.getActiveUser();
    const multiplier = levelStore.getMultiplier();
    const credited = Math.round(amount * multiplier);
    active.nfsBalance += credited;
    sharedSandboxStore.addTransaction({
      userId: active.id,
      userName: active.fullName,
      amount: credited,
      description: title,
      category: "workout",
    });
  },
};

function subscribe(fn: () => void) {
  return sharedSandboxStore.subscribe(fn);
}

function getSnapshot() {
  const activeUser = sharedSandboxStore.getActiveUser();
  const sandboxTxs = sharedSandboxStore.getUserTransactions(activeUser.id);
  const formattedTxs: WalletTx[] = sandboxTxs.map((t) => ({
    id: t.id,
    title: t.description,
    date: new Date(t.timestamp).toLocaleDateString("pt-BR"),
    amount: `${t.amount >= 0 ? "+" : ""}${formatNfs(t.amount)} nfs`,
    positive: t.amount >= 0,
  }));

  return {
    balance: activeUser.nfsBalance,
    txs: formattedTxs,
  };
}

export function useWallet() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

/** Extrai o número de nfs de strings tipo "+199 nfs" / "1.290 nfs". */
export function parseNfs(raw?: string): number {
  if (!raw) return 0;
  const cleaned = raw.replace(/[^\d]/g, "");
  return cleaned ? parseInt(cleaned, 10) : 0;
}
