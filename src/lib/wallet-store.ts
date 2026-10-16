import { useSyncExternalStore } from "react";
import { sharedSandboxStore, type SandboxTransaction } from "@/lib/shared-sandbox-store";
import { levelStore } from "@/lib/level-store";

export type WalletTx = {
  id: string;
  title: string;
  displayCategory: string;
  rawDescription: string;
  eventDescription: string;
  date: string;
  fullDate: string;
  timestamp: string;
  amount: string; // e.g. "+199 nfs" / "-1.290 nfs"
  amountNum: number;
  positive: boolean;
  category: SandboxTransaction["category"];
  orderRef?: string;
  orderTotalBrl?: string;
  orderProductName?: string;
  orderItems?: Array<{
    name: string;
    quantity?: number;
    price?: number;
    sellerName?: string;
    brand?: string;
  }>;
  friendName?: string;
  badgeName?: string;
  contentTitle?: string;
};

function formatNfs(n: number) {
  return n.toLocaleString("pt-BR");
}

function formatFullDate(isoString: string): string {
  const d = new Date(isoString);
  if (isNaN(d.getTime())) return "Data não informada";

  const dateFormatted = d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const timeFormatted = d.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${dateFormatted} às ${timeFormatted}`;
}

export function formatFriendlyTx(t: SandboxTransaction): WalletTx {
  const desc = t.description || "";
  let title = "Atividade Netfits";
  let displayCategory = "Atividade";
  let orderRef: string | undefined;
  let orderTotalBrl: string | undefined;
  let orderProductName: string | undefined;
  let orderItems: Array<{
    name: string;
    quantity?: number;
    price?: number;
    sellerName?: string;
    brand?: string;
  }> | undefined;
  let friendName: string | undefined;
  let badgeName: string | undefined;
  let contentTitle: string | undefined;
  let eventDescription = "";

  // 1. SELOS & CONQUISTAS (Avaliados com máxima prioridade para garantir que selos nunca sejam rotulados como compras)
  const isPrimeiraCompraBadge =
    t.id.includes("primeira_compra") ||
    /primeir[ao] (?:compra|cashback)|primeira compra pontuada/i.test(desc) ||
    (t.amount === 40 && !desc.includes("#") && !/gtj|ahk|pfm|sop|doj|wqb|sxz/i.test(desc));

  const isGenericBadge =
    t.category === "badge" ||
    t.id.startsWith("tx-badge-") ||
    t.id.includes("badge") ||
    /selo|conquista/i.test(desc);

  if (isPrimeiraCompraBadge || isGenericBadge) {
    displayCategory = "Conquistas";
    if (isPrimeiraCompraBadge) {
      badgeName = "Primeira Compra Pontuada";
    } else {
      const cleanedBadge = desc.replace(/^.*(?:Selo Conquistado|Selo Desbloqueado|Conquista):\s*/i, "").trim();
      badgeName = cleanedBadge || "Selo Netfits";
      if (/primeiro cashback/i.test(badgeName)) {
        badgeName = "Primeira Compra Pontuada";
      }
    }
    title = `Selo: ${badgeName}`;
    eventDescription = `Recompensa pelo desbloqueio e conquista do selo oficial "${badgeName}" na plataforma Netfits. Parabéns pela consistência e dedicação à sua longevidade!`;
  }
  // 2. BOAS-VINDAS
  else if (t.category === "welcome" || /boas-vindas|cadastramento|novo cadastro/i.test(desc)) {
    title = "Bônus de Boas-Vindas";
    displayCategory = "Boas-Vindas";
    eventDescription = "Bônus comemorativo de boas-vindas creditado pela ativação da sua conta no Netfits. Bem-vindo à sua jornada de longevidade ativa e saúde integral!";
  }
  // 3. INDICAÇÃO / MGM (Tribo)
  else if (t.category === "referral" || /indica|convid|amigo|tribo/i.test(desc)) {
    title = "Indicação de Amigo";
    displayCategory = "Tribo & Amigos";

    // Extrair o nome do amigo indicado
    const friendMatch = desc.match(/\(([^)]+)\)/);
    if (friendMatch) {
      friendName = friendMatch[1].trim();
    } else {
      const matchName = desc.match(/indicar\s+(?:novo\s+usu[áa]rio\s+)?([A-Za-zÀ-ÿ\s]+)/i);
      if (matchName) {
        friendName = matchName[1].trim();
      } else {
        try {
          const active = sharedSandboxStore.getActiveUser();
          const referredUser = sharedSandboxStore.getUsers().find((u) => u.referredBy === active.referralCode);
          if (referredUser) {
            friendName = referredUser.fullName;
          }
        } catch {}
      }
    }

    if (friendName) {
      eventDescription = `Bônus de indicação creditado! Seu amigo(a) ${friendName} acabou de se cadastrar no app Netfits e foi adicionado(a) à sua Tribo. Continue convidando amigos para expandir sua comunidade e acumular mais pontos!`;
    } else {
      eventDescription = "Bônus de indicação creditado pela entrada de um novo membro convidado por você na plataforma Netfits e adicionado com sucesso à sua Tribo.";
    }
  }
  // 4. SHOP / RESGATE / COMPRA
  else if (t.category === "shop" || /compra|cashback|pedido|mkplace|resgate|shop/i.test(desc)) {
    displayCategory = "Shop";
    const orderMatch = desc.match(/#([a-zA-Z0-9_\-]+)/);
    let foundOrder: any = null;
    if (orderMatch) {
      orderRef = `#${orderMatch[1]}`;
      try {
        foundOrder = sharedSandboxStore.getOrders().find(
          (o) => o.orderNumber === orderMatch[1] || o.id === orderMatch[1]
        );
      } catch {}
    } else {
      try {
        const orderIdCandidate = (t as any).orderId || (t as any).orderNumber;
        if (orderIdCandidate) {
          foundOrder = sharedSandboxStore.getOrders().find(
            (o) => o.orderNumber === orderIdCandidate || o.id === orderIdCandidate
          );
          if (foundOrder) {
            orderRef = `#${foundOrder.orderNumber || foundOrder.id}`;
          }
        }
      } catch {}
    }

    const priceMatch = desc.match(/R\$\s*([\d.,]+)/i);
    if (priceMatch) {
      orderTotalBrl = priceMatch[1];
    } else if (foundOrder && typeof foundOrder.amountBrl === "number") {
      orderTotalBrl = foundOrder.amountBrl.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    if (foundOrder) {
      if (foundOrder.items && foundOrder.items.length > 0) {
        const mappedItems = foundOrder.items.map((i: any) => ({
          name: i.name || "Item do pedido",
          quantity: i.quantity || 1,
          price: i.price,
          sellerName: i.sellerName || foundOrder.sellerName,
          brand: i.brand || foundOrder.brand,
        }));
        orderItems = mappedItems;
        orderProductName = mappedItems.map((i: any) => `${i.name}${i.quantity && i.quantity > 1 ? ` (${i.quantity}x)` : ""}`).join(", ");
      } else if (foundOrder.productName) {
        orderProductName = foundOrder.productName;
        orderItems = [
          {
            name: foundOrder.productName,
            quantity: 1,
            sellerName: foundOrder.sellerName,
            brand: foundOrder.brand,
          }
        ];
      }
    }

    const itemsText = orderProductName ? ` Produto(s): ${orderProductName}.` : "";

    if (t.amount < 0 || /resgate/i.test(desc)) {
      title = "Resgate no Shop";
      eventDescription = orderRef
        ? `Resgate de produto realizado no Shop Netfits (Pedido ${orderRef}).${itemsText} A pontuação foi utilizada como pagamento e debitada do seu saldo.`
        : `Resgate de produto realizado no Shop Netfits utilizando seu saldo de pontos.${itemsText}`;
    } else {
      title = "Compra no Shop";
      const orderPart = orderRef
        ? ` (Pedido ${orderRef}${orderTotalBrl ? ` no valor de R$ ${orderTotalBrl}` : ""})`
        : orderTotalBrl
        ? ` (Valor: R$ ${orderTotalBrl})`
        : "";
      eventDescription = `Compra confirmada no Shop Netfits${orderPart}.${itemsText} A pontuação recebida pelo pedido foi creditada diretamente na sua carteira de pontos.`;
    }
  }
  // 5. ARTIGOS & LEITURAS
  else if (/leitura|artigo/i.test(desc)) {
    displayCategory = "Conteúdo & Feed";
    title = "Leitura de Artigo";
    contentTitle = desc.replace(/^.*(?:Leitura Completa de Artigo:\s*|Artigo:\s*)/i, "").trim();
    eventDescription = contentTitle
      ? `Pontuação creditada pela leitura do artigo editorial "${contentTitle}" no Feed Netfits com validação de leitura e tempo de tela.`
      : "Pontuação creditada pela leitura e validação de artigo editorial no Feed Netfits.";
  }
  // 6. COMPARTILHAMENTO
  else if (t.category === "share" || /compartilhamento/i.test(desc)) {
    displayCategory = "Comunidade";
    title = "Compartilhamento";
    contentTitle = desc.replace(/^.*(?:Compartilhamento pós-visualização:\s*|Compartilhamento:\s*)/i, "").trim();
    eventDescription = contentTitle
      ? `Recompensa pelo compartilhamento do conteúdo editorial "${contentTitle}" com a sua rede.`
      : "Recompensa pelo compartilhamento de conteúdo editorial e científico com a sua rede.";
  }
  // 7. VÍDEO EDUCATIVO
  else if (/vídeo|video/i.test(desc)) {
    displayCategory = "Conteúdo & Feed";
    title = "Vídeo Educativo";
    contentTitle = desc.replace(/^.*(?:Visualização de Vídeo[^:]*:\s*)/i, "").trim();
    eventDescription = contentTitle
      ? `Pontuação creditada pela visualização e engajamento com o vídeo "${contentTitle}" no Feed.`
      : "Pontuação creditada pela visualização de vídeo educativo sobre saúde e bem-estar no Feed.";
  }
  // 8. CURTIDAS / INTERAÇÕES
  else if (t.category === "like" || /curtida/i.test(desc)) {
    displayCategory = "Comunidade";
    title = "Curtida no Feed";
    contentTitle = desc.replace(/^.*(?:Curtida no conteúdo:\s*)/i, "").trim();
    eventDescription = contentTitle
      ? `Pontuação de engajamento social creditada por curtir o conteúdo "${contentTitle}" no Feed.`
      : "Pontuação de engajamento creditada por curtir uma publicação oficial no Feed da comunidade.";
  }
  // 9. DESAFIOS
  else if (/desafio/i.test(desc)) {
    displayCategory = "Saúde & Longevidade";
    title = "Desafio Concluído";
    contentTitle = desc.replace(/^.*(?:Desafio Netfits:\s*)/i, "").trim();
    eventDescription = contentTitle
      ? `Pontuação conquistada pela participação e resposta correta no "${contentTitle}" no Feed.`
      : "Pontuação conquistada pela participação e acerto no Desafio de Bem-Estar e Longevidade no Feed.";
  }
  // 10. VISUALIZAÇÕES GERAIS
  else if (t.category === "view" || /visualização|engajamento/i.test(desc)) {
    displayCategory = "Conteúdo & Feed";
    title = "Engajamento no Feed";
    contentTitle = desc.replace(/^.*(?:Visualização completa:\s*)/i, "").trim();
    eventDescription = contentTitle
      ? `Pontuação creditada pela visualização do conteúdo "${contentTitle}" no Feed.`
      : "Pontuação creditada por engajamento e visualização de conteúdo no Feed Netfits.";
  }
  // 10.5. CONTEÚDO EDITORIAL & FEED
  else if (t.category === "feed") {
    displayCategory = "Conteúdo & Feed";
    title = "Incentivo Feed & Mídia";
    eventDescription = "Pontuação de incentivo à longevidade e aprendizado creditada por interação, leitura ou resposta de quiz no Feed Netfits.";
  }
  // 11. TREINO / ATIVIDADE FÍSICA
  else if (
    (t.category === "workout" && !isGenericBadge && !isPrimeiraCompraBadge) ||
    /treino|corrida|pedal|caminhada|exercício/i.test(desc)
  ) {
    displayCategory = "Atividade Física";
    title = "Treino Sincronizado";
    eventDescription = "Pontuação creditada pela realização de atividade física auditada e sincronizada através de seus dispositivos de saúde (Garmin / Apple Watch / Strava).";
  }
  // 12. BÔNUS DE ASSOCIADO
  else if (t.category === "associado_bonus" || /associado/i.test(desc)) {
    displayCategory = "Associação";
    title = "Bônus de Associado";
    eventDescription = "Bônus comemorativo creditado pelo seu plano de associado na plataforma Netfits.";
  } else {
    title = desc.replace(/^[^\w\s]+/g, "").trim() || "Atividade Netfits";
    eventDescription = t.amount >= 0
      ? `Pontuação de atividade creditada na sua carteira Netfits: ${desc}.`
      : `Pontuação utilizada em operações na plataforma Netfits: ${desc}.`;
  }

  const txDate = new Date(t.timestamp);
  const dateStr = !isNaN(txDate.getTime()) ? txDate.toLocaleDateString("pt-BR") : "Data indisponível";
  const fullDateStr = formatFullDate(t.timestamp);

  return {
    id: t.id,
    title,
    displayCategory,
    rawDescription: desc,
    eventDescription,
    date: dateStr,
    fullDate: fullDateStr,
    timestamp: t.timestamp || new Date().toISOString(),
    amount: `${t.amount >= 0 ? "+" : ""}${formatNfs(t.amount)} nfs`,
    amountNum: t.amount,
    positive: t.amount >= 0,
    category: t.category,
    orderRef,
    orderTotalBrl,
    orderProductName,
    orderItems,
    friendName,
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
    sharedSandboxStore.addTransaction({
      userId: active.id,
      userName: active.fullName,
      amount: -amount,
      description: title,
      category: "shop",
    });
  },

  /** Credita nfs (cashback) e registra a movimentação. Aplica multiplicador do nível. */
  earn(amount: number, title: string, category: SandboxTransaction["category"] = "feed") {
    if (amount <= 0) return;
    const active = sharedSandboxStore.getActiveUser();
    const multiplier = levelStore.getMultiplier();
    const credited = Math.round(amount * multiplier);
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
  try {
    const activeUser = sharedSandboxStore.getActiveUser();
    const sandboxTxs = sharedSandboxStore.getUserTransactions(activeUser.id);
    return {
      balance: activeUser.nfsBalance,
      txs: sandboxTxs.map(formatFriendlyTx),
    };
  } catch {
    return SERVER_SNAPSHOT;
  }
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
