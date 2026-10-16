import { useSyncExternalStore, useEffect } from "react";
import { wallet } from "./wallet-store";
import { sharedSandboxStore } from "./shared-sandbox-store";
import { toast } from "sonner";

export type BadgeCategory = "engajamento" | "tribo" | "shop" | "perfil";

export type BadgeItem = {
  id: string;
  category: BadgeCategory;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
  rewardNfs: number;
  currentProgress: number;
  maxProgress: number;
  taskInstruction: string;
};

// Base Real e Definitiva de Conquistas
// Pontuação proporcional com Teto Máximo rigoroso de 50 NFS por badge
export const INITIAL_BADGES: BadgeItem[] = [
  {
    id: "pioneiro",
    category: "perfil",
    title: "Pioneiro Netfits",
    description: "Criou sua conta e ingressou na comunidade de longevidade ativa.",
    icon: "🌟",
    unlocked: false,
    rewardNfs: 25,
    currentProgress: 0,
    maxProgress: 1,
    taskInstruction: "Completar o cadastro inicial no Netfits",
  },
  {
    id: "perfil_verificado",
    category: "perfil",
    title: "Perfil Verificado",
    description: "Preencheu todos os dados cadastrais (nome, CPF, e-mail, data de nascimento e endereço completo) e concordou com a LGPD.",
    icon: "🛡️",
    unlocked: false,
    rewardNfs: 30,
    currentProgress: 0,
    maxProgress: 1,
    taskInstruction: "Preencher dados cadastrais completos no perfil",
  },
  {
    id: "colecionador_pontos",
    category: "perfil",
    title: "Colecionador de Pontos",
    description: "Declarou seus programas de fidelidade e bancos parceiros no perfil.",
    icon: "💳",
    unlocked: false,
    rewardNfs: 20,
    currentProgress: 0,
    maxProgress: 1,
    taskInstruction: "Declarar programas de pontos no perfil",
  },
  {
    id: "atleta_conectado",
    category: "perfil",
    title: "Atleta de Alta Performance",
    description: "Completou seu perfil de modalidades esportivas e hábitos saudáveis.",
    icon: "🏃",
    unlocked: false,
    rewardNfs: 30,
    currentProgress: 0,
    maxProgress: 4,
    taskInstruction: "Selecionar modalidades esportivas no seu perfil",
  },
  {
    id: "explorador_shop",
    category: "shop",
    title: "Explorador do Shop",
    description: "Navegou pelo marketplace e conheceu as ofertas e marcas parceiras.",
    icon: "🛍️",
    unlocked: false,
    rewardNfs: 10,
    currentProgress: 0,
    maxProgress: 1,
    taskInstruction: "Visitar a aba Shop do Netfits",
  },
  {
    id: "primeira_compra",
    category: "shop",
    title: "Primeira Compra Pontuada",
    description: "Realizou sua primeira compra confirmada em um lojista parceiro do Netfits Shop.",
    icon: "🏷️",
    unlocked: false,
    rewardNfs: 40,
    currentProgress: 0,
    maxProgress: 1,
    taskInstruction: "Realizar uma compra em lojas parceiras do Shop",
  },
  {
    id: "mestre_cashback",
    category: "shop",
    title: "Mestre do Acúmulo",
    description: "Acumulou saldo de nfs em 3 compras diferentes no marketplace.",
    icon: "💰",
    unlocked: false,
    rewardNfs: 45,
    currentProgress: 0,
    maxProgress: 3,
    taskInstruction: "Acumular nfs em 3 compras em parceiros do Shop",
  },
  {
    id: "voz_da_tribo",
    category: "engajamento",
    title: "Voz da Tribo",
    description: "Compartilhou conteúdos do Feed ou link de convite com amigos ou grupos.",
    icon: "📢",
    unlocked: false,
    rewardNfs: 25,
    currentProgress: 0,
    maxProgress: 3,
    taskInstruction: "Compartilhar no WhatsApp ou redes",
  },
  {
    id: "leitor_assiduo",
    category: "engajamento",
    title: "Leitor Assíduo",
    description: "Visualizou e consumiu artigos e guias editoriais de longevidade no Feed.",
    icon: "📖",
    unlocked: false,
    rewardNfs: 10,
    currentProgress: 0,
    maxProgress: 5,
    taskInstruction: "Ver 5 postagens editoriais no Feed",
  },
  {
    id: "super_likes",
    category: "engajamento",
    title: "Super Curtidor",
    description: "Curtiu 10 publicações no feed de saúde e esportes.",
    icon: "❤️",
    unlocked: false,
    rewardNfs: 15,
    currentProgress: 0,
    maxProgress: 10,
    taskInstruction: "Dar 10 curtidas em conteúdos do feed",
  },
  {
    id: "embaixador_netfits",
    category: "tribo",
    title: "Embaixador Netfits",
    description: "Convidou e indicou novos amigos para o ecossistema com seu código.",
    icon: "🤝",
    unlocked: false,
    rewardNfs: 35,
    currentProgress: 0,
    maxProgress: 3,
    taskInstruction: "Indicar amigos com seu código exclusivo",
  },
  {
    id: "associado_vip",
    category: "tribo",
    title: "Associado VIP",
    description: "Captou mais de 10 novos usuários através do seu link exclusivo de associado.",
    icon: "👑",
    unlocked: false,
    rewardNfs: 50, // Teto máximo rigoroso de 50 NFS
    currentProgress: 0,
    maxProgress: 10,
    taskInstruction: "Captar 10 novos usuários pelo seu link exclusivo",
  },
];

const BADGES_STORAGE_KEY_PREFIX = "netfits_user_badges_v4_";

function getBadgesStorageKey(userId?: string): string {
  const uid =
    userId ||
    (typeof window !== "undefined"
      ? localStorage.getItem("netfits_production_session_v2") || "anon"
      : "anon");
  return `${BADGES_STORAGE_KEY_PREFIX}${uid}`;
}

function loadBadges(userId?: string): BadgeItem[] {
  const uid =
    userId ||
    (typeof window !== "undefined"
      ? localStorage.getItem("netfits_production_session_v2") || "anon"
      : "anon");

  if (typeof window !== "undefined") {
    try {
      const key = getBadgesStorageKey(uid);
      const raw = localStorage.getItem(key);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return INITIAL_BADGES.map((initBadge) => {
            const found = parsed.find((b: any) => b.id === initBadge.id);
            if (found) {
              return {
                ...initBadge,
                unlocked: Boolean(found.unlocked),
                unlockedAt: found.unlockedAt || undefined,
                currentProgress: typeof found.currentProgress === "number" ? found.currentProgress : 0,
              };
            }
            return { ...initBadge };
          });
        }
      }
    } catch {}
  }

  // Se for o André (fundador) em inicialização limpa, preserva seus selos originais
  if (uid === "usr_andre") {
    const ANDRE_UNLOCKED_IDS = new Set([
      "pioneiro",
      "perfil_verificado",
      "colecionador_pontos",
      "atleta_conectado",
      "explorador_shop",
      "primeira_compra",
      "voz_da_tribo",
    ]);
    return INITIAL_BADGES.map((b) => ({
      ...b,
      unlocked: ANDRE_UNLOCKED_IDS.has(b.id),
      unlockedAt: ANDRE_UNLOCKED_IDS.has(b.id) ? "05/10/2026" : undefined,
      currentProgress: ANDRE_UNLOCKED_IDS.has(b.id) ? b.maxProgress : 0,
    }));
  }

  return INITIAL_BADGES.map((b) => ({ ...b }));
}

let badgesList = loadBadges();
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

const subscribe = (fn: () => void) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

const getSnapshot = () => badgesList;

/**
 * Motor de Apuração de Conquistas em Tempo Real
 * Inspeciona o usuário logado, seus dados cadastrais, histórico de compras e transações.
 * Garante que os selos só sejam desbloqueados quando as ações forem genuinamente executadas.
 */
export function evaluateRealtimeBadges(user?: any, userTxs?: any[]): BadgeItem[] {
  const activeUser = user || (typeof window !== "undefined" ? sharedSandboxStore.getActiveUser() : null);
  const txs = userTxs || (activeUser?.id && typeof window !== "undefined" ? sharedSandboxStore.getUserTransactions(activeUser.id) : []);

  if (!activeUser || !activeUser.id) {
    return badgesList;
  }

  // Carrega e avalia a lista de conquistas estritamente isolada deste usuário
  badgesList = loadBadges(activeUser.id);

  let hasChanged = false;
  const nowStr = new Date().toLocaleDateString("pt-BR");

  // 1. Pioneiro: Concedido ao fundador André ou a usuários com atividade esportiva/treino iniciada
  const hasWorkoutActivity = txs.some(
    (t: any) => t.category === "workout" && !t.id.startsWith("tx-badge")
  );
  const isPioneiro = activeUser.id === "usr_andre" || hasWorkoutActivity;

  // 2. Perfil Verificado: Dados cadastrais completos preenchidos e salvos no perfil
  const hasName = Boolean(activeUser.fullName && activeUser.fullName.trim().length >= 3);
  const hasEmail = Boolean(activeUser.email && activeUser.email.includes("@"));
  const cleanCpf = (activeUser.cpf || "").replace(/\D/g, "");
  const hasValidCpf = cleanCpf.length === 11 && !/^(\d)\1{10}$/.test(cleanCpf);
  const hasValidAddress = Boolean(
    (activeUser.address && activeUser.address.trim().length > 5) ||
    (activeUser.street && activeUser.street.trim().length > 2 && activeUser.city && activeUser.city.trim().length > 2)
  );
  const isPerfilVerificado = hasName && hasEmail && hasValidCpf && hasValidAddress;

  // 3. Colecionador de Pontos: Programas parceiros declarados e salvos
  const hasLoyalty = Boolean(
    (activeUser.loyaltyPrograms &&
      Array.isArray(activeUser.loyaltyPrograms) &&
      activeUser.loyaltyPrograms.length > 0) ||
    activeUser.id === "usr_andre"
  );

  // 4. Atleta de Alta Performance: Modalidades esportivas selecionadas
  const sportsCount = Array.isArray(activeUser.sports) ? activeUser.sports.length : 0;
  const isAtleta = sportsCount >= 1;

  // 5. Primeira Compra e Mestre do Cashback: Apurado por compras reais no Shop
  const shopPurchases = txs.filter((t: any) =>
    t.category === "shop" ||
    (t.description && /compra|cashback|pedido|mkplace/i.test(t.description))
  );
  const purchasesCount = shopPurchases.length;
  const isPrimeiraCompra = purchasesCount >= 1;
  const isMestreCashback = purchasesCount >= 3;

  // 6. Explorador do Shop: Visita real à aba Shop registrada
  const hasVisitedShop =
    (typeof window !== "undefined" &&
      localStorage.getItem(`netfits_shop_visited_${activeUser.id}`) === "true") ||
    isPrimeiraCompra ||
    activeUser.id === "usr_andre";
  const isExploradorShop = Boolean(hasVisitedShop);

  // 7. Engajamento no Feed (Compartilhamentos, Leituras e Curtidas)
  let shareCount = 0;
  let feedLikeCount = 0;
  let feedReadCount = 0;
  if (typeof window !== "undefined") {
    try {
      const uid = activeUser.id;
      shareCount = parseInt(
        localStorage.getItem(`netfits_shares_count_${uid}`) || "0",
        10
      );
      feedLikeCount = parseInt(
        localStorage.getItem(`netfits_likes_count_${uid}`) || "0",
        10
      );
      feedReadCount = parseInt(
        localStorage.getItem(`netfits_reads_count_${uid}`) || "0",
        10
      );
    } catch {}
  }
  const txShareCount = txs.filter((t: any) => t.category === "share" || /compartilhamento/i.test(t.description || "")).length;
  const txReadCount = txs.filter((t: any) => /leitura|artigo/i.test(t.description || "")).length;
  const txLikeCount = txs.filter((t: any) => t.category === "like" || /curtida/i.test(t.description || "")).length;

  const totalShares = Math.max(shareCount, txShareCount);
  const totalReads = Math.max(feedReadCount, txReadCount);
  const totalLikes = Math.max(feedLikeCount, txLikeCount);

  const isVozDaTribo = totalShares >= 1;
  const isLeitor = totalReads >= 5;
  const isSuperCurtidor = totalLikes >= 10;

  // 8. Indicações (Embaixador & Associado VIP)
  const referralTxs = txs.filter((t: any) =>
    t.category === "referral" ||
    (t.description && /indica|amigo|indicado/i.test(t.description))
  );
  const referralCount = referralTxs.length;
  const isEmbaixador = referralCount >= 1;
  const isAssociadoVip = referralCount >= 10;

  // Validação selo por selo
  badgesList = badgesList.map((badge) => {
    let meetsCriteria = false;
    let newProgress = 0;

    switch (badge.id) {
      case "pioneiro":
        meetsCriteria = isPioneiro;
        newProgress = isPioneiro ? 1 : 0;
        break;
      case "perfil_verificado":
        meetsCriteria = isPerfilVerificado;
        newProgress = isPerfilVerificado ? 1 : 0;
        break;
      case "colecionador_pontos":
        meetsCriteria = hasLoyalty;
        newProgress = hasLoyalty ? 1 : 0;
        break;
      case "atleta_conectado":
        newProgress = Math.min(badge.maxProgress, sportsCount);
        meetsCriteria = isAtleta;
        break;
      case "primeira_compra":
        meetsCriteria = isPrimeiraCompra;
        newProgress = isPrimeiraCompra ? 1 : 0;
        break;
      case "mestre_cashback":
        newProgress = Math.min(badge.maxProgress, purchasesCount);
        meetsCriteria = isMestreCashback;
        break;
      case "explorador_shop":
        meetsCriteria = isExploradorShop;
        newProgress = isExploradorShop ? 1 : 0;
        break;
      case "voz_da_tribo":
        newProgress = Math.min(badge.maxProgress, totalShares);
        meetsCriteria = isVozDaTribo;
        break;
      case "leitor_assiduo":
        newProgress = Math.min(badge.maxProgress, totalReads);
        meetsCriteria = isLeitor;
        break;
      case "super_likes":
        newProgress = Math.min(badge.maxProgress, totalLikes);
        meetsCriteria = isSuperCurtidor;
        break;
      case "embaixador_netfits":
        newProgress = Math.min(badge.maxProgress, referralCount);
        meetsCriteria = isEmbaixador;
        break;
      case "associado_vip":
        newProgress = Math.min(badge.maxProgress, referralCount);
        meetsCriteria = isAssociadoVip;
        break;
    }

    const isAndreLegit =
      activeUser.id === "usr_andre" &&
      [
        "pioneiro",
        "perfil_verificado",
        "colecionador_pontos",
        "atleta_conectado",
        "explorador_shop",
        "primeira_compra",
        "voz_da_tribo",
      ].includes(badge.id);

    const shouldUnlock = meetsCriteria || isAndreLegit;
    const badgeTxId = `tx-badge-${activeUser.id}-${badge.id}`;

    // Auto-correção (Self-healing): se o usuário tinha uma transação indevida de um selo
    // que não cumpre os critérios, expurga a transação
    if (!shouldUnlock && activeUser.id !== "usr_andre") {
      const phantomTx = txs.find((t: any) => t.id === badgeTxId);
      if (phantomTx) {
        sharedSandboxStore.removeTransaction(badgeTxId);
        hasChanged = true;
      }
    }

    if (shouldUnlock !== badge.unlocked || newProgress !== badge.currentProgress) {
      hasChanged = true;
      badge = {
        ...badge,
        unlocked: shouldUnlock,
        unlockedAt: shouldUnlock ? (badge.unlockedAt || nowStr) : undefined,
        currentProgress: shouldUnlock ? badge.maxProgress : newProgress,
      };
    }

    // Nota: O cálculo de exibição em tempo real apenas atualiza o estado visual.
    // Transações financeiras de selos no extrato NÃO devem ser geradas em loop passivo,
    // mas sim de forma estrita em eventos pontuais de conclusão real.
    return badge;
  });

  if (hasChanged) {
    if (activeUser.id !== "usr_andre") {
      sharedSandboxStore.recalculateUserBalance(activeUser.id);
    }
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(getBadgesStorageKey(activeUser.id), JSON.stringify(badgesList));
      } catch {}
    }
    emit();
  }

  return badgesList;
}

export const badgesStore = {
  get: () => badgesList,
  getUnlockedCount: () => badgesList.filter((b) => b.unlocked).length,
  getTotalCount: () => badgesList.length,
  evaluate: evaluateRealtimeBadges,
  unlockBadge(id: string) {
    const item = badgesList.find((b) => b.id === id);
    if (!item || item.unlocked) return;

    badgesList = badgesList.map((b) =>
      b.id === id
        ? {
            ...b,
            unlocked: true,
            unlockedAt: new Date().toLocaleDateString("pt-BR"),
            currentProgress: b.maxProgress,
          }
        : b
    );

    if (typeof window !== "undefined") {
      try {
        const activeUser = sharedSandboxStore.getActiveUser();
        localStorage.setItem(getBadgesStorageKey(activeUser?.id), JSON.stringify(badgesList));
        if (activeUser && activeUser.id) {
          sharedSandboxStore.addTransaction({
            id: `tx-badge-${activeUser.id}-${item.id}`,
            userId: activeUser.id,
            userName: activeUser.fullName,
            amount: item.rewardNfs,
            description: `🏆 Selo Conquistado: ${item.title}`,
            category: "badge",
          });
        }
      } catch {}
    }

    toast.success(`🎉 Selo Desbloqueado: "${item.title}"! (+${item.rewardNfs} nfs creditados)`);
    emit();
  },
  recordShare() {
    if (typeof window !== "undefined") {
      try {
        const activeUser = sharedSandboxStore.getActiveUser();
        const uid = activeUser?.id || "anon";
        const key = `netfits_shares_count_${uid}`;
        const count = parseInt(localStorage.getItem(key) || "0", 10) + 1;
        localStorage.setItem(key, String(count));
      } catch {}
    }
    evaluateRealtimeBadges();
  },
  recordShopVisit() {
    if (typeof window !== "undefined") {
      try {
        const activeUser = sharedSandboxStore.getActiveUser();
        const uid = activeUser?.id || "anon";
        localStorage.setItem(`netfits_shop_visited_${uid}`, "true");
      } catch {}
    }
    evaluateRealtimeBadges();
  },
  recordLike() {
    if (typeof window !== "undefined") {
      try {
        const activeUser = sharedSandboxStore.getActiveUser();
        const uid = activeUser?.id || "anon";
        const key = `netfits_likes_count_${uid}`;
        const count = parseInt(localStorage.getItem(key) || "0", 10) + 1;
        localStorage.setItem(key, String(count));
      } catch {}
    }
    evaluateRealtimeBadges();
  },
  recordRead() {
    if (typeof window !== "undefined") {
      try {
        const activeUser = sharedSandboxStore.getActiveUser();
        const uid = activeUser?.id || "anon";
        const key = `netfits_reads_count_${uid}`;
        const count = parseInt(localStorage.getItem(key) || "0", 10) + 1;
        localStorage.setItem(key, String(count));
      } catch {}
    }
    evaluateRealtimeBadges();
  },
  incrementProgress(id: string, amount: number = 1) {
    const item = badgesList.find((b) => b.id === id);
    if (!item || item.unlocked) return;

    const newProgress = Math.min(item.maxProgress, item.currentProgress + amount);
    const shouldUnlock = newProgress >= item.maxProgress;

    badgesList = badgesList.map((b) =>
      b.id === id
        ? {
            ...b,
            currentProgress: newProgress,
            unlocked: shouldUnlock,
            unlockedAt: shouldUnlock ? new Date().toLocaleDateString("pt-BR") : b.unlockedAt,
          }
        : b
    );

    if (typeof window !== "undefined") {
      try {
        const activeUser = sharedSandboxStore.getActiveUser();
        localStorage.setItem(getBadgesStorageKey(activeUser?.id), JSON.stringify(badgesList));
      } catch {}
    }

    if (shouldUnlock) {
      const activeUser = sharedSandboxStore.getActiveUser();
      if (activeUser && activeUser.id) {
        sharedSandboxStore.addTransaction({
          id: `tx-badge-${activeUser.id}-${item.id}`,
          userId: activeUser.id,
          userName: activeUser.fullName,
          amount: item.rewardNfs,
          description: `🏆 Selo Conquistado: ${item.title}`,
          category: "badge",
        });
      }
      toast.success(`🎉 Selo Desbloqueado: "${item.title}"! (+${item.rewardNfs} nfs creditados)`);
    }
    emit();
  },
};

export function useBadges() {
  const activeUser = sharedSandboxStore.useActiveUser();

  useEffect(() => {
    evaluateRealtimeBadges(activeUser);
  }, [activeUser]);

  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
