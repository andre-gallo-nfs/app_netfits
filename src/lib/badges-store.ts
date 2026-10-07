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
    title: "Primeiro Cashback",
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

const BADGES_STORAGE_KEY = "netfits_user_badges_v3";

function loadBadges(): BadgeItem[] {
  if (typeof window !== "undefined") {
    try {
      const raw = localStorage.getItem(BADGES_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Atualiza as recompensas proporcionais mantendo o progresso e estado desbloqueado
          return INITIAL_BADGES.map((initBadge) => {
            const found = parsed.find((b: any) => b.id === initBadge.id);
            if (found) {
              return {
                ...initBadge,
                unlocked: Boolean(found.unlocked),
                unlockedAt: found.unlockedAt || initBadge.unlockedAt,
                currentProgress: typeof found.currentProgress === "number" ? found.currentProgress : initBadge.currentProgress,
              };
            }
            return { ...initBadge };
          });
        }
      }
    } catch {}
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
 * Inspeciona o usuário logado, seus dados cadastrais, histórico de compras e transações
 */
export function evaluateRealtimeBadges(user?: any, userTxs?: any[]): BadgeItem[] {
  const activeUser = user || (typeof window !== "undefined" ? sharedSandboxStore.getActiveUser() : null);
  const txs = userTxs || (activeUser?.id && typeof window !== "undefined" ? sharedSandboxStore.getUserTransactions(activeUser.id) : []);

  if (!activeUser || !activeUser.id) {
    return badgesList;
  }

  let hasChanged = false;
  const nowStr = new Date().toLocaleDateString("pt-BR");

  // 1. Pioneiro: usuário tem conta criada no ecossistema
  const isPioneiro = Boolean(activeUser.id);

  // 2. Perfil Verificado: dados cadastrais preenchidos e validados
  const hasName = Boolean(activeUser.fullName && activeUser.fullName.trim().length >= 3);
  const hasEmail = Boolean(activeUser.email && activeUser.email.includes("@"));
  const hasCpf = Boolean(activeUser.cpf && activeUser.cpf.replace(/\D/g, "").length === 11);
  const hasAdditionalData = Boolean(
    activeUser.birthDate ||
    activeUser.phone ||
    activeUser.city ||
    activeUser.address ||
    activeUser.street ||
    activeUser.zipcode
  );
  // Se preencheu nome, e-mail e CPF e dados complementares, ou possui confirmação de cadastro
  const isPerfilVerificado = hasName && (hasEmail || hasCpf) && (hasCpf || hasAdditionalData);

  // 3. Colecionador de Pontos: programas parceiros declarados
  const hasLoyalty = Boolean(
    activeUser.loyaltyPrograms &&
    Array.isArray(activeUser.loyaltyPrograms) &&
    activeUser.loyaltyPrograms.length > 0
  );

  // 4. Atleta de Alta Performance: modalidades esportivas
  const sportsCount = Array.isArray(activeUser.sports) ? activeUser.sports.length : 0;
  const isAtleta = sportsCount >= 1;

  // 5. Primeira Compra e Mestre do Cashback: apurado pelas compras reais no shop
  const shopPurchases = txs.filter((t: any) =>
    t.category === "shop" ||
    (t.description && /compra|cashback|pedido|mkplace/i.test(t.description))
  );
  const purchasesCount = shopPurchases.length;
  const isPrimeiraCompra = purchasesCount >= 1;
  const isMestreCashback = purchasesCount >= 3;

  // 6. Engajamento e Compartilhamento
  let shareCount = 0;
  let feedLikeCount = 0;
  let feedReadCount = 0;
  if (typeof window !== "undefined") {
    try {
      shareCount = parseInt(localStorage.getItem("netfits_shares_count") || "0", 10);
      feedLikeCount = parseInt(localStorage.getItem("netfits_likes_count") || "0", 10);
      feedReadCount = parseInt(localStorage.getItem("netfits_reads_count") || "0", 10);
    } catch {}
  }
  const isVozDaTribo = shareCount >= 1;
  const isLeitor = feedReadCount >= 5;
  const isSuperCurtidor = feedLikeCount >= 10;

  // 7. Indicações (Embaixador & Associado VIP)
  const referralTxs = txs.filter((t: any) =>
    t.category === "referral" ||
    (t.description && /indica|amigo|indicado/i.test(t.description))
  );
  const referralCount = referralTxs.length;
  const isEmbaixador = referralCount >= 1;
  const isAssociadoVip = referralCount >= 10;

  badgesList = badgesList.map((badge) => {
    let shouldUnlock = badge.unlocked;
    let newProgress = badge.currentProgress;

    switch (badge.id) {
      case "pioneiro":
        if (isPioneiro) {
          shouldUnlock = true;
          newProgress = 1;
        }
        break;
      case "perfil_verificado":
        if (isPerfilVerificado) {
          shouldUnlock = true;
          newProgress = 1;
        }
        break;
      case "colecionador_pontos":
        if (hasLoyalty) {
          shouldUnlock = true;
          newProgress = 1;
        }
        break;
      case "atleta_conectado":
        newProgress = Math.min(badge.maxProgress, sportsCount);
        if (isAtleta) shouldUnlock = true;
        break;
      case "primeira_compra":
        if (isPrimeiraCompra) {
          shouldUnlock = true;
          newProgress = 1;
        }
        break;
      case "mestre_cashback":
        newProgress = Math.min(badge.maxProgress, purchasesCount);
        if (isMestreCashback) shouldUnlock = true;
        break;
      case "explorador_shop":
        if (typeof window !== "undefined" && localStorage.getItem("netfits_shop_visited") === "true") {
          shouldUnlock = true;
          newProgress = 1;
        } else if (isPrimeiraCompra) {
          shouldUnlock = true;
          newProgress = 1;
        }
        break;
      case "voz_da_tribo":
        newProgress = Math.min(badge.maxProgress, shareCount);
        if (isVozDaTribo) shouldUnlock = true;
        break;
      case "leitor_assiduo":
        newProgress = Math.min(badge.maxProgress, feedReadCount);
        if (isLeitor) shouldUnlock = true;
        break;
      case "super_likes":
        newProgress = Math.min(badge.maxProgress, feedLikeCount);
        if (isSuperCurtidor) shouldUnlock = true;
        break;
      case "embaixador_netfits":
        newProgress = Math.min(badge.maxProgress, referralCount);
        if (isEmbaixador) shouldUnlock = true;
        break;
      case "associado_vip":
        newProgress = Math.min(badge.maxProgress, referralCount);
        if (isAssociadoVip) shouldUnlock = true;
        break;
    }

    if (shouldUnlock !== badge.unlocked || newProgress !== badge.currentProgress) {
      hasChanged = true;
      return {
        ...badge,
        unlocked: shouldUnlock,
        unlockedAt: shouldUnlock ? (badge.unlockedAt || nowStr) : undefined,
        currentProgress: shouldUnlock ? badge.maxProgress : newProgress,
      };
    }
    return badge;
  });

  if (hasChanged) {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(BADGES_STORAGE_KEY, JSON.stringify(badgesList));
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
        localStorage.setItem(BADGES_STORAGE_KEY, JSON.stringify(badgesList));
      } catch {}
    }

    wallet.earn(item.rewardNfs, `Selo Desbloqueado: ${item.title}`);
    toast.success(`🎉 Selo Desbloqueado: "${item.title}"! (+${item.rewardNfs} nfs creditados)`);
    emit();
  },
  recordShare() {
    if (typeof window !== "undefined") {
      try {
        const count = parseInt(localStorage.getItem("netfits_shares_count") || "0", 10) + 1;
        localStorage.setItem("netfits_shares_count", String(count));
      } catch {}
    }
    evaluateRealtimeBadges();
  },
  recordShopVisit() {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("netfits_shop_visited", "true");
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
        localStorage.setItem(BADGES_STORAGE_KEY, JSON.stringify(badgesList));
      } catch {}
    }

    if (shouldUnlock) {
      wallet.earn(item.rewardNfs, `Selo Desbloqueado: ${item.title}`);
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
