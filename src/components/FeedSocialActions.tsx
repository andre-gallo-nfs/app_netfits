import { useState, useEffect } from "react";
import { Eye, ExternalLink, Heart, Share2, Bookmark, Check, Copy, X } from "lucide-react";
import { useOperationalParams } from "@/lib/operational-params-store";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { feedAntifraud } from "@/lib/feed-antifraud";
import { badgesStore } from "@/lib/badges-store";
import { toast } from "sonner";
import {
  WhatsAppIcon,
  InstagramIcon,
  TelegramIcon,
  XIcon,
  FacebookIcon,
  TikTokIcon,
  MessagesIcon,
  MailIcon,
} from "@/components/BrandIcons";

const SHARE_CHANNELS = [
  { key: "wpp", label: "WhatsApp", color: "bg-[#25D366]", Icon: WhatsAppIcon },
  { key: "ig", label: "Instagram", color: "bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600", Icon: InstagramIcon },
  { key: "tg", label: "Telegram", color: "bg-[#229ED9]", Icon: TelegramIcon },
  { key: "x", label: "X", color: "bg-black", Icon: XIcon },
  { key: "tt", label: "TikTok", color: "bg-black", Icon: TikTokIcon },
  { key: "fb", label: "Facebook", color: "bg-[#1877F2]", Icon: FacebookIcon },
  { key: "msg", label: "Mensagens", color: "bg-emerald-500", Icon: MessagesIcon },
  { key: "mail", label: "E-mail", color: "bg-zinc-700", Icon: MailIcon },
] as const;

export interface FeedSocialActionsProps {
  id: string;
  title: string;
  showViewButton?: boolean;
  showLinkButton?: boolean;
  externalLink?: string;
  isOwnPost?: boolean;
  postCategory?: "educational" | "sponsored";
  onOpenArticle?: () => void;
}

export function FeedSocialActions({
  id,
  title,
  showViewButton = false,
  showLinkButton = false,
  externalLink,
  isOwnPost = false,
  postCategory = "educational",
  onOpenArticle,
}: FeedSocialActionsProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [viewed, setViewed] = useState(false);
  const [linkClicked, setLinkClicked] = useState(false);
  const params = useOperationalParams();

  const sharePoints = params.nfsPerShare ?? 1;
  const viewPoints = 0; // Leitura de texto/vídeo sempre 0 nfs (pontuação concentrada no Quiz - GEMINI.md)
  const linkPoints = params.nfsPerLinkClick ?? 0;
  const likePoints = params.nfsPerLike ?? 0;

  const postUrl = typeof window !== "undefined" ? `${window.location.origin}/feed#${id}` : `https://www.netfits.com.br/feed#${id}`;
  const shareText = `Confira no Netfits: ${title} — ${postUrl}`;

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (feedAntifraud.hasClaimed("like", id)) setLiked(true);
      if (feedAntifraud.hasClaimed("read", id)) setViewed(true);
      if (feedAntifraud.hasClaimed("link_click", `link-${id}`)) setLinkClicked(true);
    }
  }, [id]);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      toast.info("Curtida removida.");
      return;
    }

    setLiked(true);
    badgesStore.recordLike();
    if (likePoints > 0) {
      const validation = feedAntifraud.validateAction("like", id, { isOwnPost });
      if (!validation.allowed) {
        toast.warning(validation.reason || "Ação não pontuada pelas regras antifraude.");
        return;
      }
      sharedSandboxStore.rewardEngagement("like", title, likePoints);
      feedAntifraud.recordAction("like", id, likePoints);
      toast.success(`+${likePoints} nfs acumulados por curtir post! (${validation.dailyCount + 1}/${validation.dailyLimit} hoje)`);
    } else {
      toast.success("Publicação curtida!");
    }
  };

  const handleSave = () => {
    setSaved((v) => {
      const next = !v;
      if (next) {
        if (isOwnPost) {
          toast.info("Post próprio salvo! (Ações próprias não geram pontos)");
        } else {
          toast.info("Post adicionado aos salvos.");
        }
      } else {
        toast.info("Post removido dos salvos.");
      }
      return next;
    });
  };

  const handleCompleteView = () => {
    badgesStore.recordRead();
    if (onOpenArticle) {
      onOpenArticle();
      return;
    }

    if (viewed) {
      toast.info("Você já confirmou a leitura desta publicação.");
      return;
    }

    const validation = feedAntifraud.validateAction("read", id, {
      dwellTimeSeconds: 3,
      isOwnPost,
    });
    if (!validation.allowed) {
      toast.warning(validation.reason || "Ação não permitida pelas regras antifraude.");
      return;
    }

    setViewed(true);
    if (viewPoints > 0) {
      sharedSandboxStore.rewardEngagement("view", title, viewPoints);
      feedAntifraud.recordAction("read", id, viewPoints);
      toast.success(`+${viewPoints} nfs por leitura de post! (${validation.dailyCount + 1}/${validation.dailyLimit} hoje)`);
    } else {
      feedAntifraud.recordAction("read", id, 0);
      toast.success("👏 Leitura confirmada! Responda o Quizz deste post para pontuar.");
    }
  };

  const handleLinkClick = () => {
    if (linkPoints <= 0) {
      if (externalLink) window.open(externalLink, "_blank", "noopener,noreferrer");
      return;
    }

    if (linkClicked) {
      if (externalLink) window.open(externalLink, "_blank", "noopener,noreferrer");
      toast.info("Você já recebeu a bonificação deste link.");
      return;
    }

    const validation = feedAntifraud.validateAction("link_click", `link-${id}`, { isOwnPost });
    if (!validation.allowed) {
      if (externalLink) window.open(externalLink, "_blank", "noopener,noreferrer");
      toast.warning(validation.reason || "Ação não permitida pelas regras antifraude.");
      return;
    }

    setLinkClicked(true);
    sharedSandboxStore.rewardEngagement("click", title, linkPoints);
    feedAntifraud.recordAction("link_click", `link-${id}`, linkPoints);
    toast.success(`+${linkPoints} nfs por clicar no link! (${validation.dailyCount + 1}/${validation.dailyLimit} hoje)`);
    if (externalLink) window.open(externalLink, "_blank", "noopener,noreferrer");
  };

  const handleCopyPostLink = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      toast.success("📋 Link do post copiado para a área de transferência!");
    } catch {
      /* ignore */
    }
    setCopied(true);
    triggerShareReward("copy_link");
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerShareReward = (channelKey: string) => {
    const shareKey = `share-${channelKey}-${id}`;
    const validation = feedAntifraud.validateAction("share", shareKey, { isOwnPost });
    if (validation.allowed) {
      sharedSandboxStore.rewardEngagement("share", title, sharePoints);
      feedAntifraud.recordAction("share", shareKey, sharePoints);
      badgesStore.recordShare();
      toast.success(
        `+${sharePoints} ${sharePoints === 1 ? "nf" : "nfs"} por compartilhar no ${channelKey.toUpperCase()}! (${validation.dailyCount + 1}/${validation.dailyLimit} hoje)`
      );
    } else {
      badgesStore.recordShare();
    }
  };

  const handleShareChannel = async (key: string) => {
    triggerShareReward(key);
    const encoded = encodeURIComponent(shareText);

    if (key === "ig" || key === "tt") {
      try {
        await navigator.clipboard.writeText(shareText);
        toast.success(`📋 Texto copiado! Abra o ${key === "ig" ? "Instagram" : "TikTok"} para compartilhar.`);
      } catch {
        /* ignore */
      }
      const targetUrl = key === "ig" ? "https://instagram.com" : "https://tiktok.com";
      window.open(targetUrl, "_blank", "noopener,noreferrer");
      setShareOpen(false);
      return;
    }

    const url =
      key === "wpp"
        ? `https://api.whatsapp.com/send?text=${encoded}`
        : key === "tg"
        ? `https://t.me/share/url?url=${encodeURIComponent(postUrl)}&text=${encoded}`
        : key === "x"
        ? `https://twitter.com/intent/tweet?text=${encoded}`
        : key === "fb"
        ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`
        : key === "mail"
        ? `mailto:?subject=${encodeURIComponent(title)}&body=${encoded}`
        : key === "msg"
        ? `sms:?&body=${encoded}`
        : null;

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
    setShareOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2 flex-wrap">
        {showViewButton && (
          <button
            onClick={handleCompleteView}
            aria-label={viewed ? "Leitura concluída" : "Concluir leitura do artigo"}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ring-1 transition-colors active:scale-95 cursor-pointer ${
              viewed
                ? "bg-purple-600 text-white ring-purple-600 shadow-sm"
                : "bg-purple-500/10 text-purple-400 ring-purple-500/30 hover:bg-purple-500/20"
            }`}
          >
            <Eye className="size-4" />
            {viewed
              ? viewPoints > 0
                ? `Lido (+${viewPoints} nfs)`
                : "Leitura Concluída"
              : viewPoints > 0
              ? `Concluir Leitura (+${viewPoints} nfs)`
              : "Confirmar Leitura"}
          </button>
        )}

        {showLinkButton && (
          <button
            onClick={handleLinkClick}
            aria-label={linkClicked ? "Link do parceiro acessado" : "Acessar link externo"}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ring-1 transition-colors active:scale-95 cursor-pointer ${
              linkClicked
                ? "bg-emerald-600 text-white ring-emerald-600 shadow-sm"
                : "bg-muted text-foreground ring-black/5 hover:bg-emerald-500/10 hover:text-emerald-400"
            }`}
            title="Acessar link externo / parceiro recomendado"
          >
            <ExternalLink className="size-4" />
            {linkPoints > 0
              ? (linkClicked ? `Link Aberto (+${linkPoints} nfs)` : `Ver Link (+${linkPoints} nfs)`)
              : "Ver Link"}
          </button>
        )}

        <button
          onClick={handleLike}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ring-1 transition-colors active:scale-95 cursor-pointer ${
            liked
              ? "bg-brand text-brand-foreground ring-brand"
              : "bg-muted text-foreground ring-black/5 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          }`}
          aria-pressed={liked}
          aria-label="Curtir publicação"
        >
          <Heart className={`size-4 ${liked ? "fill-current text-rose-500" : ""}`} />
          Curtir
        </button>

        <button
          onClick={() => setShareOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-muted text-foreground ring-1 ring-black/5 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95 cursor-pointer"
          aria-label="Compartilhar publicação"
        >
          <Share2 className="size-4 text-lime-500" />
          <span>Compartilhar (+{sharePoints} nf)</span>
        </button>

        <button
          onClick={handleSave}
          className={`ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ring-1 active:scale-95 cursor-pointer ${
            saved
              ? "bg-foreground text-background ring-foreground"
              : "bg-muted text-foreground ring-black/5 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          }`}
          aria-pressed={saved}
          aria-label="Salvar publicação nos favoritos"
        >
          <Bookmark className={`size-4 ${saved ? "fill-current" : ""}`} />
          Salvar
        </button>
      </div>

      {shareOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end justify-center animate-in fade-in duration-150"
          onClick={() => setShareOpen(false)}
          role="dialog"
          aria-label="Compartilhar"
        >
          <div
            className="w-full max-w-md bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-t-3xl p-5 pb-[calc(env(safe-area-inset-bottom,0px)+2rem)] shadow-2xl border-t border-zinc-200 dark:border-zinc-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto w-10 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 mb-4" />
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">Compartilhar publicação</span>
                <span className="px-2 py-0.5 rounded-full bg-[#C8FF00] text-zinc-950 font-black text-[10px]">
                  +{sharePoints} NF
                </span>
              </div>
              <button
                onClick={() => setShareOpen(false)}
                className="size-7 rounded-full bg-zinc-100 dark:bg-zinc-800 grid place-items-center cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700"
                aria-label="Fechar"
              >
                <X className="size-4" />
              </button>
            </div>

            <p className="text-xs text-muted-foreground mb-4 line-clamp-1">{title}</p>

            <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 rounded-2xl pl-4 pr-1.5 py-1.5 mb-5 ring-1 ring-black/5">
              <span className="flex-1 text-xs font-medium truncate text-muted-foreground">
                {postUrl}
              </span>
              <button
                onClick={handleCopyPostLink}
                className="shrink-0 flex items-center gap-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-semibold px-3 py-1.5 rounded-xl active:scale-95 cursor-pointer shadow-xs"
              >
                {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                {copied ? "Copiado" : "Copiar"}
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {SHARE_CHANNELS.map((c) => {
                const IconComponent = c.Icon;
                return (
                  <button
                    key={`${id}-${c.key}`}
                    onClick={() => handleShareChannel(c.key)}
                    className="flex flex-col items-center gap-1.5 active:scale-95 cursor-pointer group"
                  >
                    <div
                      className={`size-12 rounded-2xl grid place-items-center text-white ${c.color} ring-1 ring-black/10 shadow-sm group-hover:scale-105 transition-transform`}
                    >
                      <IconComponent className="size-5" />
                    </div>
                    <span className="text-[10px] font-semibold text-center">{c.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
