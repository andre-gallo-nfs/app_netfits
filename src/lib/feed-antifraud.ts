import { operationalParamsStore } from "./operational-params-store";
import { toast } from "sonner";

export type FeedActionType = "read" | "video_view" | "quiz" | "like" | "share" | "link_click";

export interface FeedActionValidation {
  allowed: boolean;
  reason?: string;
  dailyCount: number;
  dailyLimit: number;
}

const STORAGE_KEY_FEED_ACTIONS = "netfits_feed_actions_log_v1";
const STORAGE_KEY_RATE_LIMIT = "netfits_feed_rate_limit_timestamps";

export interface FeedActionRecord {
  id: string;
  action: FeedActionType;
  postId: string;
  timestamp: string; // ISO String
  points: number;
}

function getTodayString(): string {
  return new Date().toISOString().split("T")[0]; // YYYY-MM-DD
}

function getActionLogKey(): string {
  try {
    const uid = localStorage.getItem("netfits_production_active_user_v1") || "anon";
    return `netfits_feed_actions_log_v2_${uid}`;
  } catch {
    return "netfits_feed_actions_log_v2_anon";
  }
}

function loadActionLog(): FeedActionRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(getActionLogKey());
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error("Erro ao carregar log antifraude do feed:", e);
  }
  return [];
}

function saveActionLog(log: FeedActionRecord[]) {
  if (typeof window === "undefined") return;
  try {
    // Manter apenas os últimos 14 dias para evitar acúmulo no localStorage
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 14);
    const filtered = log.filter((item) => new Date(item.timestamp) >= cutoff);
    localStorage.setItem(getActionLogKey(), JSON.stringify(filtered));
  } catch (e) {
    console.error("Erro ao salvar log antifraude do feed:", e);
  }
}

export const feedAntifraud = {
  /**
   * Obtém as configurações operacionais oficiais atuais da Tabela Mestre
   */
  getRules() {
    const params = operationalParamsStore.getParams();
    return {
      dailyInteractionLimit: params.dailyThirdPartyInteractionsLimit ?? 10,
      pointsPerView: params.nfsPerPostView ?? 10,
      pointsPerVideo: params.nfsPerPostView ?? 10,
      pointsPerLinkClick: params.nfsPerLinkClick ?? 10,
      minVideoCompletionPct: params.minVideoCompletionPct ?? 90, // Regra oficial: 90% de retenção mínima do vídeo
      minDwellTimeSeconds: params.minDwellTimeSecondsForView ?? 3,
      maxInteractionsPerMinute: params.maxInteractionsPerMinute ?? 10,
      blockSelfEngagement: params.blockSelfEngagementRewards ?? true,
    };
  },

  /**
   * Quantidade de interações premiadas realizadas no dia civil corrente
   */
  getTodayInteractionsCount(): number {
    const today = getTodayString();
    const log = loadActionLog();
    return log.filter((item) => item.timestamp.startsWith(today)).length;
  },

  /**
   * Verifica se o usuário já coletou a recompensa desta ação específica neste post
   */
  hasClaimed(action: FeedActionType, postId: string): boolean {
    const log = loadActionLog();
    return log.some((item) => item.action === action && item.postId === postId);
  },

  /**
   * Trava de Rate-Limiting contra scripts e robôs (máx X interações por minuto)
   */
  checkRateLimit(): boolean {
    if (typeof window === "undefined") return true;
    try {
      const now = Date.now();
      const raw = localStorage.getItem(STORAGE_KEY_RATE_LIMIT);
      let timestamps: number[] = raw ? JSON.parse(raw) : [];

      // Filtra os últimos 60 segundos
      timestamps = timestamps.filter((t) => now - t < 60000);

      const rules = this.getRules();
      if (timestamps.length >= rules.maxInteractionsPerMinute) {
        return false;
      }

      timestamps.push(now);
      localStorage.setItem(STORAGE_KEY_RATE_LIMIT, JSON.stringify(timestamps));
      return true;
    } catch {
      return true;
    }
  },

  /**
   * Valida se uma ação de feed está apta a receber pontos conforme todas as travas antifraude
   */
  validateAction(
    action: FeedActionType,
    postId: string,
    extraContext?: { dwellTimeSeconds?: number; videoProgressPct?: number; isOwnPost?: boolean }
  ): FeedActionValidation {
    const rules = this.getRules();
    const dailyCount = this.getTodayInteractionsCount();

    // 1. Trava Anti-Autoengajamento
    if (extraContext?.isOwnPost && rules.blockSelfEngagement) {
      return {
        allowed: false,
        reason: "🔒 Antifraude: Auto-engajamento em publicações próprias não gera pontos nfs.",
        dailyCount,
        dailyLimit: rules.dailyInteractionLimit,
      };
    }

    // 2. Trava de Duplicidade (Idempotência por post)
    if (this.hasClaimed(action, postId)) {
      return {
        allowed: false,
        reason: "🔒 Antifraude: Você já coletou a recompensa desta ação nesta publicação.",
        dailyCount,
        dailyLimit: rules.dailyInteractionLimit,
      };
    }

    // 3. Trava de Rate-Limiting (Anti-Bot)
    if (!this.checkRateLimit()) {
      return {
        allowed: false,
        reason: "⚠️ Antifraude: Limite de requisições por minuto excedido. Aguarde alguns instantes.",
        dailyCount,
        dailyLimit: rules.dailyInteractionLimit,
      };
    }

    // 4. Trava de Dwell Time em Leitura
    if (action === "read" && typeof extraContext?.dwellTimeSeconds === "number") {
      if (extraContext.dwellTimeSeconds < rules.minDwellTimeSeconds) {
        return {
          allowed: false,
          reason: `⏳ Antifraude: Permaneça na leitura por ao menos ${rules.minDwellTimeSeconds}s para validar o aprendizado.`,
          dailyCount,
          dailyLimit: rules.dailyInteractionLimit,
        };
      }
    }

    // 5. Trava de Retenção em Vídeo (Mínimo de 90%)
    if (action === "video_view" && typeof extraContext?.videoProgressPct === "number") {
      if (extraContext.videoProgressPct < rules.minVideoCompletionPct) {
        return {
          allowed: false,
          reason: `🚫 Antifraude: É necessário assistir ao menos ${rules.minVideoCompletionPct}% do vídeo para pontuar.`,
          dailyCount,
          dailyLimit: rules.dailyInteractionLimit,
        };
      }
    }

    // 6. Trava de Teto Diário de Interações com Terceiros (máx 10 interações = 100 nfs/dia)
    if (dailyCount >= rules.dailyInteractionLimit) {
      return {
        allowed: false,
        reason: `🛑 Antifraude: Teto diário de interações no feed atingido (${rules.dailyInteractionLimit}/${rules.dailyInteractionLimit} hoje). Volte amanhã para pontuar novamente.`,
        dailyCount,
        dailyLimit: rules.dailyInteractionLimit,
      };
    }

    return {
      allowed: true,
      dailyCount,
      dailyLimit: rules.dailyInteractionLimit,
    };
  },

  /**
   * Registra a ação no log de segurança após a bonificação bem-sucedida
   */
  recordAction(
    action: FeedActionType,
    postId: string,
    points: number
  ) {
    const log = loadActionLog();
    const newRecord: FeedActionRecord = {
      id: `act-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      action,
      postId,
      timestamp: new Date().toISOString(),
      points,
    };
    log.push(newRecord);
    saveActionLog(log);
  },
};
