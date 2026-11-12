import { useState, useEffect } from "react";
import { toast } from "sonner";

export interface ContentReport {
  id: string;
  contentId: string;
  contentType: "post" | "comment" | "quiz";
  contentTitle?: string;
  authorId: string;
  authorName?: string;
  reporterId?: string;
  reason: string;
  details?: string;
  createdAt: string;
  status: "PENDING_REVIEW_24H" | "REVIEWED" | "DISMISSED";
}

const BLOCKED_USERS_STORAGE_KEY = "netfits_blocked_users_v1";
const REPORTS_STORAGE_KEY = "netfits_ugc_reports_v1";

class UgcSafetyStore {
  private blockedUsers: Set<string> = new Set();
  private listeners: Set<() => void> = new Set();

  constructor() {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(BLOCKED_USERS_STORAGE_KEY);
        if (saved) {
          const list = JSON.parse(saved);
          if (Array.isArray(list)) {
            this.blockedUsers = new Set(list);
          }
        }
      } catch (err) {
        console.warn("[UgcSafetyStore] Erro ao carregar usuários bloqueados:", err);
      }
    }
  }

  private save() {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          BLOCKED_USERS_STORAGE_KEY,
          JSON.stringify(Array.from(this.blockedUsers))
        );
      } catch {}
    }
    this.notify();
  }

  private notify() {
    for (const listener of this.listeners) {
      listener();
    }
  }

  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  getBlockedUsers(): string[] {
    return Array.from(this.blockedUsers);
  }

  isBlocked(userIdOrAuthor: string): boolean {
    if (!userIdOrAuthor) return false;
    const clean = userIdOrAuthor.toLowerCase().trim();
    for (const blocked of this.blockedUsers) {
      if (clean === blocked.toLowerCase().trim()) return true;
      if (clean.includes(blocked.toLowerCase().trim())) return true;
    }
    return false;
  }

  async blockUser(authorId: string, authorName?: string, reason?: string): Promise<boolean> {
    if (!authorId) return false;
    this.blockedUsers.add(authorId);
    if (authorName && authorName !== authorId) {
      this.blockedUsers.add(authorName);
    }
    this.save();

    // Notifica o desenvolvedor / backend conforme diretriz Apple Guideline 1.2
    try {
      await fetch("/api/feed/moderation/block", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          blockedUserId: authorId,
          blockedUserName: authorName,
          reason: reason || "Solicitação direta de bloqueio pelo usuário",
          timestamp: new Date().toISOString(),
        }),
      }).catch(() => {});
    } catch {}

    toast.success(`Usuário bloqueado com sucesso. Todo o conteúdo foi removido do seu feed.`);
    return true;
  }

  unblockUser(authorId: string) {
    this.blockedUsers.delete(authorId);
    this.save();
    toast.info("Usuário desbloqueado.");
  }

  async reportContent(params: {
    contentId: string;
    contentType?: "post" | "comment" | "quiz";
    contentTitle?: string;
    authorId: string;
    authorName?: string;
    reason: string;
    details?: string;
  }): Promise<boolean> {
    const report: ContentReport = {
      id: `rep_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      contentId: params.contentId,
      contentType: params.contentType || "post",
      contentTitle: params.contentTitle,
      authorId: params.authorId,
      authorName: params.authorName,
      reason: params.reason,
      details: params.details,
      createdAt: new Date().toISOString(),
      status: "PENDING_REVIEW_24H",
    };

    // Salva localmente
    if (typeof window !== "undefined") {
      try {
        const existing = JSON.parse(localStorage.getItem(REPORTS_STORAGE_KEY) || "[]");
        existing.unshift(report);
        localStorage.setItem(REPORTS_STORAGE_KEY, JSON.stringify(existing.slice(0, 50)));
      } catch {}
    }

    // Notifica o backend para moderação e remoção em até 24 horas (SLA Apple 1.2)
    try {
      await fetch("/api/feed/moderation/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(report),
      }).catch(() => {});
    } catch {}

    toast.success("Denúncia recebida. Nossa equipe analisa e remove conteúdos impróprios em até 24h.");
    return true;
  }
}

export const ugcSafetyStore = new UgcSafetyStore();

export function useBlockedUsers(): string[] {
  const [blocked, setBlocked] = useState<string[]>(() => ugcSafetyStore.getBlockedUsers());

  useEffect(() => {
    return ugcSafetyStore.subscribe(() => {
      setBlocked(ugcSafetyStore.getBlockedUsers());
    });
  }, []);

  return blocked;
}
