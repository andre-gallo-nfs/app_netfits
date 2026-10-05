import { useSyncExternalStore } from "react";
import { wallet } from "./wallet-store";
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

// Base Real e Definitiva de Conquistas (Todas iniciam bloqueadas com progresso zero)
const INITIAL_BADGES: BadgeItem[] = [
  {
    id: "pioneiro",
    category: "perfil",
    title: "Pioneiro Netfits",
    description: "Criou sua conta e ingressou na comunidade de longevidade ativa.",
    icon: "🌟",
    unlocked: false,
    rewardNfs: 50,
    currentProgress: 0,
    maxProgress: 1,
    taskInstruction: "Completar o cadastro inicial no Netfits",
  },
  {
    id: "perfil_verificado",
    category: "perfil",
    title: "Perfil Verificado",
    description: "Preencheu todos os dados cadastrais e concordou com os termos LGPD.",
    icon: "🛡️",
    unlocked: false,
    rewardNfs: 50,
    currentProgress: 0,
    maxProgress: 1,
    taskInstruction: "Salvar dados de cadastro no perfil",
  },
  {
    id: "colecionador_pontos",
    category: "perfil",
    title: "Colecionador de Pontos",
    description: "Declarou seus programas de fidelidade de bancos parceiros no perfil.",
    icon: "💳",
    unlocked: false,
    rewardNfs: 40,
    currentProgress: 0,
    maxProgress: 1,
    taskInstruction: "Declarar programas de pontos no perfil",
  },
  {
    id: "leitor_assiduo",
    category: "engajamento",
    title: "Leitor Assíduo",
    description: "Visualizou e consumiu 5 artigos e guias editoriais no Feed.",
    icon: "📖",
    unlocked: false,
    rewardNfs: 20,
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
    rewardNfs: 30,
    currentProgress: 0,
    maxProgress: 10,
    taskInstruction: "Dar 10 curtidas em conteúdos do feed",
  },
  {
    id: "explorador_shop",
    category: "shop",
    title: "Explorador do Shop",
    description: "Navegou pelo marketplace e conheceu as ofertas parceiras.",
    icon: "🛍️",
    unlocked: false,
    rewardNfs: 20,
    currentProgress: 0,
    maxProgress: 1,
    taskInstruction: "Visitar a aba Shop do Netfits",
  },
  {
    id: "voz_da_tribo",
    category: "engajamento",
    title: "Voz da Tribo",
    description: "Compartilhou conteúdos do Feed com amigos ou grupos.",
    icon: "📢",
    unlocked: false,
    rewardNfs: 50,
    currentProgress: 0,
    maxProgress: 5,
    taskInstruction: "Compartilhar publicações no WhatsApp ou redes",
  },
  {
    id: "embaixador_netfits",
    category: "tribo",
    title: "Embaixador Netfits",
    description: "Convidou e indicou novos amigos para o ecossistema.",
    icon: "🤝",
    unlocked: false,
    rewardNfs: 100,
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
    rewardNfs: 500,
    currentProgress: 0,
    maxProgress: 50,
    taskInstruction: "Captar novos usuários pelo seu link exclusivo de Associado",
  },
  {
    id: "primeira_compra",
    category: "shop",
    title: "Primeiro Cashback",
    description: "Realizou sua primeira compra em um lojista parceiro do Netfits Shop.",
    icon: "🏷️",
    unlocked: false,
    rewardNfs: 150,
    currentProgress: 0,
    maxProgress: 1,
    taskInstruction: "Comprar qualquer item em lojas parceiras do Shop",
  },
  {
    id: "mestre_cashback",
    category: "shop",
    title: "Mestre do Acúmulo",
    description: "Acumulou saldo de nfs em 3 compras diferentes no marketplace.",
    icon: "💰",
    unlocked: false,
    rewardNfs: 200,
    currentProgress: 0,
    maxProgress: 3,
    taskInstruction: "Acumular nfs em 3 compras em parceiros do Shop",
  },
  {
    id: "atleta_conectado",
    category: "perfil",
    title: "Atleta de Alta Performance",
    description: "Completou seu perfil de modalidades esportivas e hábitos saudáveis.",
    icon: "🏃",
    unlocked: false,
    rewardNfs: 80,
    currentProgress: 0,
    maxProgress: 4,
    taskInstruction: "Selecionar modalidades esportivas no seu perfil",
  },
];

const BADGES_STORAGE_KEY = "netfits_user_badges_v2";

function loadBadges(): BadgeItem[] {
  if (typeof window !== "undefined") {
    try {
      const raw = localStorage.getItem(BADGES_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length === INITIAL_BADGES.length) {
          return parsed;
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

export const badgesStore = {
  get: () => badgesList,
  getUnlockedCount: () => badgesList.filter((b) => b.unlocked).length,
  getTotalCount: () => badgesList.length,
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
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
