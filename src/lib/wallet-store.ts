import { useSyncExternalStore } from "react";
import { sharedSandboxStore, type SandboxTransaction } from "@/lib/shared-sandbox-store";
import { levelStore } from "@/lib/level-store";

export type WalletTx = {
  id: string;
  title: string;
  displayCategory: string;
  rawDescription: string;
  date: string;
  fullDate: string;
  amount: string; // e.g. "+199 nfs" / "-1.290 nfs"
  amountNum: number;
  positive: boolean;
  category: SandboxTransaction["category"];
  orderRef?: string;
  orderTotalBrl?: string;
  badgeName?: string;
  contentTitle?: string;
};

function formatNfs(n: number) {
  return n.toLocaleString("pt-BR");
}

export function formatFriendlyTx(t: SandboxTransaction): WalletTx {
  const desc = t.description || "";
  let title = "Atividade Netfits";
  let displayCategory = "Atividade";
  let orderRef: string | undefined;
  let orderTotalBrl: string | undefined;
  let badgeName: string | undefined;
  let contentTitle: string | undefined;

  // 1. SHOPPING / RESGATE / COMPRA
  if (t.category === "shop" || /compra|cashback|pedido|mkplace|resgate/i.test(desc)) {
    displayCategory = "Shopping";
    if (t.amount < 0 || /resgate/i.test(desc)) {
      title = "Resgate no Shopping";
    } else {
      title = "Compra no Shopping";
    }

    const orderMatch = desc.match(/#([a-zA-Z0-9_\-]+)/);
    if (orderMatch) {
      orderRef = `#${orderMatch[1]}`;
    }

    const priceMatch = desc.match(/R\$\s*([\d.,]+)/i);
    if (priceMatch) {
      orderTotalBrl = priceMatch[1];
    }
  }
  // 2. BOAS-VINDAS
  else if (t.category === "welcome" || /boas-vindas|cadastramento|novo cadastro/i.test(desc)) {
    title = "Bônus de Boas-Vindas";
    displayCategory = "Boas-Vindas";
  }
  // 3. INDICAÇÃO / MGM
  else if (t.category === "referral" || /indica|convid|amigo/i.test(desc)) {
    title = "Indicação de Amigo";
    displayCategory = "Tribo & Amigos";
  }
  // 4. SELOS & CONQUISTAS
  else if (/selo|conquista/i.test(desc)) {
    displayCategory = "Conquistas";
    const cleanedBadge = desc.replace(/^.*(?:Selo Conquistado|Selo Desbloqueado|Conquista):\s*/i, "").trim();
    badgeName = cleanedBadge || "Selo Netfits";
    title = `Selo: ${badgeName}`;
  }
  // 5. ARTIGOS & LEITURAS
  else if (/leitura|artigo/i.test(desc)) {
    displayCategory = "Conteúdo & Feed";
    title = "Leitura de Artigo";
    contentTitle = desc.replace(/^.*(?:Leitura Completa de Artigo:\s*|Artigo:\s*)/i, "").trim();
  }
  // 6. COMPARTILHAMENTO
  else if (t.category === "share" || /compartilhamento/i.test(desc)) {
    displayCategory = "Comunidade";
    title = "Compartilhamento de Conteúdo";
    contentTitle = desc.replace(/^.*(?:Compartilhamento pós-visualização:\s*|Compartilhamento:\s*)/i, "").trim();
  }
  // 7. VÍDEO EDUCATIVO
  else if (/vídeo|video/i.test(desc)) {
    displayCategory = "Conteúdo & Feed";
    title = "Vídeo Educativo";
    contentTitle = desc.replace(/^.*(?:Visualização de Vídeo[^:]*:\s*)/i, "").trim();
  }
  // 8. CURTIDAS / INTERAÇÕES
  else if (t.category === "like" || /curtida/i.test(desc)) {
    displayCategory = "Comunidade";
    title = "Curtida no Feed";
    contentTitle = desc.replace(/^.*(?:Curtida no conteúdo:\s*)/i, "").trim();
  }
  // 9. DESAFIOS
  else if (/desafio/i.test(desc)) {
    displayCategory = "Saúde & Longevidade";
    title = "Desafio Concluído";
    contentTitle = desc.replace(/^.*(?:Desafio Netfits:\s*)/i, "").trim();
  }
  // 10. VISUALIZAÇÕES GERAIS
  else if (t.category === "view" || /visualização|engajamento/i.test(desc)) {
    displayCategory = "Conteúdo & Feed";
    title = "Engajamento no Feed";
    contentTitle = desc.replace(/^.*(?:Visualização completa:\s*)/i, "").trim();
  } else {
    title = desc.replace(/^[^\w\s]+/g, "").trim() || "Atividade Netfits";
  }

  const txDate = new Date(t.timestamp);
  const dateStr = !isNaN(txDate.getTime()) ? txDate.toLocaleDateString("pt-BR") : "Data indisponível";
  const timeStr = !isNaN(txDate.getTime())
    ? txDate.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
    : "";
  const fullDateStr = timeStr ? `${dateStr} às ${timeStr}` : dateStr;

  return {
    id: t.id,
    title,
    displayCategory,
    rawDescription: desc,
    date: dateStr,
    fullDate: fullDateStr,
    amount: `${t.amount >= 0 ? "+" : ""}${formatNfs(t.amount)} nfs`,
    amountNum: t.amount,
    positive: t.amount >= 0,
    category: t.category,
    orderRef,
    orderTotalBrl,
    badgeName,
    contentTitle,
  };
}

export const wallet = {
  getBalance: () => {
    return sharedSandboxStore.getActiveUser().nfsBalance;
  },

  getTransactions: (): WalletTx[] => {
    const active = sharedSandboxStore.getActiveUser();
    const sandboxTxs = sharedSandboxStore.getUserTransactions(active.id);
    return sandboxTxs.map(formatFriendlyTx);
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
  earn(amount: number, title: string, category: SandboxTransaction["category"] = "workout") {
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
      category,
    });
  },
};

function subscribe(fn: () => void) {
  return sharedSandboxStore.subscribe(fn);
}

type WalletSnapshot = {
  balance: number;
  txs: WalletTx[];
};

const SERVER_SNAPSHOT: WalletSnapshot = {
  balance: 0,
  txs: [],
};

let cachedSnapshot: WalletSnapshot = SERVER_SNAPSHOT;
let lastActiveUserId = "";
let lastNfsBalance = -1;
let lastTxsCount = -1;
let lastTxId = "";

function getSnapshot(): WalletSnapshot {
  if (typeof window === "undefined") {
    return SERVER_SNAPSHOT;
  }

  const activeUser = sharedSandboxStore.getActiveUser();
  const sandboxTxs = sharedSandboxStore.getUserTransactions(activeUser.id);
  const topTxId = sandboxTxs.length > 0 ? sandboxTxs[0].id : "";

  // Retorna rigorosamente a MESMA referência de objeto se não houve alteração nos dados do usuário ativo
  if (
    activeUser.id === lastActiveUserId &&
    activeUser.nfsBalance === lastNfsBalance &&
    sandboxTxs.length === lastTxsCount &&
    topTxId === lastTxId
  ) {
    return cachedSnapshot;
  }

  lastActiveUserId = activeUser.id;
  lastNfsBalance = activeUser.nfsBalance;
  lastTxsCount = sandboxTxs.length;
  lastTxId = topTxId;

  const formattedTxs: WalletTx[] = sandboxTxs.map(formatFriendlyTx);

  cachedSnapshot = {
    balance: activeUser.nfsBalance,
    txs: formattedTxs,
  };

  return cachedSnapshot;
}

function getServerSnapshot(): WalletSnapshot {
  return SERVER_SNAPSHOT;
}

export function useWallet() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Extrai o número de nfs de strings tipo "+199 nfs" / "1.290 nfs". */
export function parseNfs(raw?: string): number {
  if (!raw) return 0;
  const cleaned = raw.replace(/[^\d]/g, "");
  return cleaned ? parseInt(cleaned, 10) : 0;
}
