import { useState, useEffect, useRef, useMemo } from "react";
import {
  Trophy,
  Sparkles,
  BookOpen,
  Clock,
  X,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Play,
  RotateCcw,
  Film,
  Calendar,
  Zap,
  Volume2,
} from "lucide-react";
import netfitsMark from "@/assets/netfits-mark.png";
import clinicFibios from "@/assets/clinic-fibios.jpg";
import draIsabellaAvatar from "@/assets/dra-isabella-avatar.jpg";
import drFrancoAvatar from "@/assets/dr-franco-avatar.png";
import { wallet } from "@/lib/wallet-store";
import { feedAntifraud } from "@/lib/feed-antifraud";
import { FeedSocialActions } from "@/components/FeedSocialActions";
import { toast } from "sonner";
import scheduledPostsRaw from "@/lib/scheduled-posts-data.json";

export interface ScheduledPostOption {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback?: string;
}

export interface ScheduledVideoScene {
  sceneNumber: number;
  startSec: number;
  endSec: number;
  title: string;
  visual: string;
  voiceover: string;
  icon?: string;
  tag?: string;
  graphicType?: string;
}

export interface ScheduledPostDef {
  id: string;
  quizPostId: string;
  articlePostId: string;
  originalDay: number;
  publishDate: string; // ISO 8601 string
  formattedDate: string;
  line: string;
  author: string;
  authorRole: string;
  authorAvatar: "netfits" | "dr_franco" | "dra_isabella" | "fibios";
  badge: string;
  title: string;
  subtitle: string;
  format: "article" | "video_animation";
  duration?: string;
  readTime: string;
  pillText: string;
  articleContent: string[];
  quizQuestion: string;
  quizOptions: ScheduledPostOption[];
  videoUrl?: string;
  videoStoryboard?: ScheduledVideoScene[];
}

export const SCHEDULED_POSTS: ScheduledPostDef[] = scheduledPostsRaw as ScheduledPostDef[];

interface ScheduledFeedCardProps {
  post: ScheduledPostDef;
  isDailyChallenge?: boolean;
}

export function ScheduledFeedCard({ post, isDailyChallenge = true }: ScheduledFeedCardProps) {
  const [selectedOption, setSelectedOption] = useState<string>(post.quizOptions[0]?.id || "");
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [readClaimed, setReadClaimed] = useState<boolean>(false);
  const [dwellTimeSeconds, setDwellTimeSeconds] = useState<number>(0);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState<boolean>(false);

  // Estados do Player de Vídeo Real HTML5
  const isVideo = post.format === "video_animation";
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoElapsedSec, setVideoElapsedSec] = useState<number>(0);
  const [videoTotalDuration, setVideoTotalDuration] = useState<number>(() => {
    if (!post.duration) return 50;
    const match = post.duration.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 50;
  });

  const isStaging = useMemo(() => {
    if (typeof window === "undefined") return true;
    const h = window.location.hostname;
    return (
      h.includes("staging") ||
      h.includes("trycloudflare.com") ||
      h.includes("localhost") ||
      h.includes("lhr.life") ||
      window.location.port === "3000" ||
      window.location.search.includes("homolog=true") ||
      (typeof import.meta !== "undefined" && import.meta.env?.VITE_APP_ENV === "staging")
    );
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (feedAntifraud.hasClaimed("quiz", post.quizPostId)) {
        setHasSubmitted(true);
      }
      if (feedAntifraud.hasClaimed("read", post.articlePostId) || feedAntifraud.hasClaimed("video_view", post.id)) {
        setReadClaimed(true);
      }
    }
  }, [post.quizPostId, post.articlePostId, post.id]);

  // Autoplay suave quando abrir o modal de vídeo
  useEffect(() => {
    if (modalOpen && isVideo && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay com som no mobile pode exigir toque direto do usuário
      });
    }
  }, [modalOpen, isVideo]);

  // Listener de progresso do vídeo
  const handleVideoTimeUpdate = () => {
    if (!videoRef.current) return;
    const v = videoRef.current;
    if (v.duration && v.duration > 0) {
      setVideoTotalDuration(Math.round(v.duration));
      setVideoElapsedSec(Math.round(v.currentTime));
      const pct = Math.min(100, Math.round((v.currentTime / v.duration) * 100));

      if (pct >= 90 && !readClaimed) {
        setReadClaimed(true);
        feedAntifraud.recordAction("read", post.articlePostId, 0);
        feedAntifraud.recordAction("video_view", post.id, 0);
        toast.success("🎉 Retenção de 90% do vídeo atingida! O Desafio Quiz (+5 netfits) foi destravado.");
      }
    }
  };

  const handleVideoLoadedMetadata = () => {
    if (videoRef.current && videoRef.current.duration) {
      setVideoTotalDuration(Math.round(videoRef.current.duration));
    }
  };

  const handleVideoEnded = () => {
    if (!readClaimed) {
      setReadClaimed(true);
      feedAntifraud.recordAction("read", post.articlePostId, 0);
      feedAntifraud.recordAction("video_view", post.id, 0);
      toast.success("🎉 Vídeo completo! O Desafio Quiz (+5 netfits) foi destravado.");
    }
  };

  // Atalho exclusivo de Homologação (Demo)
  const handleSkipVideoDemo = () => {
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = videoRef.current.duration * 0.91;
    }
    setVideoElapsedSec(Math.round(videoTotalDuration * 0.91));
    setReadClaimed(true);
    feedAntifraud.recordAction("read", post.articlePostId, 0);
    feedAntifraud.recordAction("video_view", post.id, 0);
    toast.success("⚡ [Homologação Demo] Retenção de 90% validada! Quiz liberado.");
  };

  // Trava Antifraude de Leitura (Para Artigos)
  useEffect(() => {
    let timer: any = null;
    if (modalOpen && !isVideo && !readClaimed) {
      timer = setInterval(() => {
        setDwellTimeSeconds((prev) => {
          const next = prev + 1;
          if (next >= 10 && hasScrolledToBottom) {
            setReadClaimed(true);
            feedAntifraud.recordAction("read", post.articlePostId, 0);
            toast.success("📖 Leitura completa validada! O Desafio Quiz (+5 netfits) foi liberado.");
            clearInterval(timer);
          }
          return next;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [modalOpen, isVideo, readClaimed, hasScrolledToBottom, post.articlePostId]);

  const handleScrollArticle = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const isAtBottom = target.scrollHeight - target.scrollTop <= target.clientHeight + 40;
    if (isAtBottom && !hasScrolledToBottom) {
      setHasScrolledToBottom(true);
      if (dwellTimeSeconds >= 10 && !readClaimed) {
        setReadClaimed(true);
        feedAntifraud.recordAction("read", post.articlePostId, 0);
        toast.success("📖 Leitura completa validada! O Desafio Quiz (+5 netfits) foi liberado.");
      }
    }
  };

  const handleSubmitQuiz = () => {
    if (hasSubmitted) return;

    if (!readClaimed) {
      toast.error(
        isVideo
          ? "🚫 Antifraude Netfits: Assista ao menos 90% do vídeo para liberar a resposta do Quiz."
          : "🚫 Antifraude Netfits: Você precisa ler o artigo completo por pelo menos 10 segundos antes de responder."
      );
      setErrorMsg("Conclua a visualização do conteúdo para destravar a pontuação.");
      return;
    }

    const selectedOptObj = post.quizOptions.find((opt) => opt.id === selectedOption);
    if (!selectedOptObj) return;

    if (selectedOptObj.isCorrect) {
      const amount = 5;
      wallet.earn(amount, `Quiz Diário Netfits - Dia ${post.originalDay}`, "feed");
      feedAntifraud.recordAction("quiz", post.quizPostId, amount);
      setHasSubmitted(true);
      setErrorMsg(null);
      toast.success(`🎉 Parabéns! Você acertou e ganhou +${amount} nfs!`, {
        description: selectedOptObj.feedback || "Pontos creditados na sua carteira com sucesso.",
      });
    } else {
      setErrorMsg(
        selectedOptObj.feedback ||
          "Resposta incorreta. Revise o conteúdo do post e tente novamente para absorver o aprendizado."
      );
      toast.error("Ops! Resposta incorreta.", {
        description: selectedOptObj.feedback,
      });
    }
  };

  const getAvatarSrc = () => {
    switch (post.authorAvatar) {
      case "dr_franco":
        return drFrancoAvatar;
      case "dra_isabella":
        return draIsabellaAvatar;
      case "fibios":
        return clinicFibios;
      case "netfits":
      default:
        return netfitsMark;
    }
  };

  const videoProgressPct = Math.min(
    100,
    videoTotalDuration > 0 ? Math.round((videoElapsedSec / videoTotalDuration) * 100) : 0
  );

  const handleOpenContent = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    if (isVideo && !readClaimed && videoProgressPct < 90) {
      toast.warning("⚠️ Antifraude: Você precisa assistir ao menos 90% do vídeo para destravar o Quiz de +5 netfits.");
    }
    setModalOpen(false);
  };

  return (
    <>
      <article className="px-4 space-y-3.5">
        {/* Header Oficial do Autor */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              onClick={handleOpenContent}
              className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all bg-card overflow-hidden"
            >
              <img src={getAvatarSrc()} alt={post.author} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span
                  onClick={handleOpenContent}
                  className="text-sm font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {post.author}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                  {post.line}
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground line-clamp-1">{post.authorRole}</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground bg-muted/40 px-2 py-0.5 rounded-md border border-border/50">
            <Calendar className="w-3 h-3 text-primary" />
            <span>{post.formattedDate}</span>
          </div>
        </div>

        {/* Card Visual / Thumbnail */}
        <div
          onClick={handleOpenContent}
          className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-4 sm:p-5 cursor-pointer shadow-sm hover:border-primary/40 transition-all"
        >
          {/* Tag de Formato & Duração */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-primary/10 text-primary border border-primary/20">
              {isVideo ? (
                <Film className="w-3 h-3 text-primary" />
              ) : (
                <BookOpen className="w-3 h-3 text-primary" />
              )}
              {post.badge}
            </span>

            <span className="text-[11px] text-muted-foreground flex items-center gap-1 font-mono">
              <Clock className="w-3 h-3" />
              {isVideo ? (post.duration || `${videoTotalDuration}s`) : post.readTime}
            </span>
          </div>

          {/* Banner Preview para Vídeos com Botão de Play Real */}
          {isVideo && (
            <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black border border-emerald-500/30 group-hover:border-emerald-500/60 transition-all flex flex-col items-center justify-center p-4 text-center shadow-lg">
              <div className="size-14 rounded-full bg-emerald-500 text-zinc-950 grid place-items-center shadow-2xl group-hover:scale-110 transition-transform ring-4 ring-emerald-500/30 mb-2">
                <Play className="size-7 ml-0.5 fill-zinc-950 text-zinc-950" />
              </div>
              <span className="text-xs sm:text-sm font-black text-white tracking-tight drop-shadow">
                Assistir Vídeo Oficial Netfits ({post.duration || `${videoTotalDuration}s`})
              </span>
              <span className="text-[10px] text-emerald-300 font-medium mt-0.5 flex items-center gap-1">
                <Volume2 className="size-3 text-emerald-400" /> Áudio & Locução Narrativa com Voz Real
              </span>
              <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm text-lime-400 text-[9px] font-bold px-2 py-0.5 rounded-md border border-lime-500/30">
                🛡️ Antifraude: 90% Dwell
              </div>
            </div>
          )}

          <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors mb-2">
            {post.title}
          </h3>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
            {post.subtitle}
          </p>

          <div className="flex items-center justify-between pt-2 border-t border-border/40 text-xs font-semibold text-primary">
            <span className="flex items-center gap-1.5">
              {isVideo ? (
                <>
                  <Play className="w-3.5 h-3.5 fill-primary" /> Abrir Player de Vídeo
                </>
              ) : (
                <>
                  <BookOpen className="w-3.5 h-3.5" /> Ler Artigo Completo
                </>
              )}
            </span>
            <span className="text-[11px] text-muted-foreground font-normal">
              {readClaimed ? "✓ Conteúdo validado" : isVideo ? "Trava 90% antifraude" : "Trava 10s antifraude"}
            </span>
          </div>
        </div>

        {/* Social Actions */}
        <FeedSocialActions
          id={post.id}
          title={post.title}
          postCategory="educational"
          showViewButton={false}
          onOpenArticle={handleOpenContent}
        />

        {/* Card do Desafio Quiz Diário (+5 netfits) */}
        <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-4 sm:p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs sm:text-sm font-bold text-foreground">
                    Desafio do Dia {String(post.originalDay).padStart(2, "0")}
                  </h4>
                  {isDailyChallenge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      24h
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-muted-foreground">
                  Acerte para creditar <strong className="text-foreground">+5 netfits</strong> na carteira
                </p>
              </div>
            </div>

            {hasSubmitted ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" /> Concluído
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-primary">
                <Sparkles className="w-3 h-3" /> +5 netfits
              </span>
            )}
          </div>

          <div className="text-xs sm:text-sm font-medium text-foreground leading-snug">
            {post.quizQuestion}
          </div>

          {/* Opções de Resposta */}
          <div className="space-y-2">
            {post.quizOptions.map((opt) => {
              const isSelected = selectedOption === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  disabled={hasSubmitted}
                  onClick={() => {
                    setSelectedOption(opt.id);
                    setErrorMsg(null);
                  }}
                  className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 ${
                    isSelected
                      ? "border-primary bg-primary/10 text-foreground font-medium shadow-sm"
                      : "border-border/70 hover:border-border hover:bg-muted/30 text-muted-foreground"
                  } ${hasSubmitted ? "cursor-default" : "cursor-pointer"}`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${
                      isSelected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40"
                    }`}
                  >
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <span className="leading-relaxed flex-1">{opt.text}</span>
                </button>
              );
            })}
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20 flex items-start gap-2 text-xs text-destructive">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {!readClaimed && !hasSubmitted && (
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300 font-medium flex items-center gap-2">
              <AlertCircle className="size-3.5 shrink-0 text-amber-400" />
              <span>
                {isVideo
                  ? "Assista ao menos 90% do vídeo acima para destravar o botão de confirmação."
                  : "Abra e leia o artigo completo acima para destravar o botão de confirmação."}
              </span>
            </div>
          )}

          {!hasSubmitted ? (
            <button
              onClick={handleSubmitQuiz}
              disabled={!readClaimed}
              className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 ${
                readClaimed
                  ? "bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.99] cursor-pointer"
                  : "bg-muted text-muted-foreground cursor-not-allowed opacity-60"
              }`}
            >
              <CheckCircle2 className="w-4 h-4" /> Confirmar Resposta & Pontuar (+5 netfits)
            </button>
          ) : (
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-700 dark:text-emerald-400 font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Pontos creditados com sucesso! Revise sempre para consolidar seus hábitos.</span>
            </div>
          )}
        </div>
      </article>

      {/* MODAL 1: PLAYER DE VÍDEO NATIVO MP4 COM SOM E VOZ REAL */}
      {modalOpen && isVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-4 animate-in fade-in">
          <div className="bg-zinc-950 w-full max-w-lg rounded-3xl border border-emerald-500/30 shadow-2xl flex flex-col overflow-hidden text-white max-h-[92vh]">
            {/* Header do Player */}
            <div className="p-3.5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/90 shrink-0">
              <div className="flex items-center gap-2">
                <span className="size-7 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 grid place-items-center text-xs font-black">
                  <Film className="size-3.5" />
                </span>
                <div>
                  <h3 className="text-xs font-bold text-white line-clamp-1">{post.title}</h3>
                  <p className="text-[10px] text-zinc-400 flex items-center gap-1">
                    <Volume2 className="size-3 text-emerald-400" /> Vídeo com Áudio Narrativo & Locução Oficial
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCloseModal}
                className="size-7 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white grid place-items-center transition cursor-pointer"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Reprodutor de Vídeo HTML5 Nativo */}
            <div className="relative aspect-video w-full bg-black overflow-hidden border-b border-zinc-800 flex items-center justify-center">
              <video
                ref={videoRef}
                src={post.videoUrl}
                playsInline
                controls
                className="w-full h-full object-contain"
                onTimeUpdate={handleVideoTimeUpdate}
                onLoadedMetadata={handleVideoLoadedMetadata}
                onEnded={handleVideoEnded}
              />
            </div>

            {/* Painel Antifraude & Controles de Homologação */}
            <div className="p-4 bg-zinc-900/90 space-y-3.5 shrink-0">
              {/* Barra de Retenção Antifraude */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-zinc-300 font-bold flex items-center gap-1">
                    <ShieldCheck className={`size-3.5 ${readClaimed ? "text-emerald-400" : "text-amber-400"}`} />
                    <span>Retenção Auditada: {videoProgressPct}% (Meta: 90%)</span>
                  </span>
                  <span className="font-mono text-xs font-bold text-emerald-400">
                    {Math.floor(videoElapsedSec / 60)}:{String(videoElapsedSec % 60).padStart(2, "0")} / {Math.floor(videoTotalDuration / 60)}:{String(videoTotalDuration % 60).padStart(2, "0")}
                  </span>
                </div>

                <div className="h-2.5 w-full bg-zinc-800 rounded-full overflow-hidden p-0.5 border border-zinc-700">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      readClaimed
                        ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                        : "bg-gradient-to-r from-emerald-500 to-lime-400"
                    }`}
                    style={{ width: `${videoProgressPct}%` }}
                  />
                </div>
              </div>

              {/* Status do Antifraude */}
              {readClaimed ? (
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-400" />
                    <span>🎉 Retenção de 90% validada! Quiz liberado.</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-md font-mono">
                    +5 netfits Prontos
                  </span>
                </div>
              ) : (
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] leading-snug flex items-center justify-between">
                  <span>⚠️ Assista ao menos 90% do vídeo com som para destravar o Quiz.</span>
                  <span className="font-mono font-bold text-amber-400 shrink-0 ml-2">
                    Faltam {Math.max(0, Math.round(videoTotalDuration * 0.9 - videoElapsedSec))}s
                  </span>
                </div>
              )}

              {/* Ações do Modal: Pular Demo (Staging) & Fechar / Ir para o Quiz */}
              <div className="flex items-center gap-2 pt-1">
                {isStaging && !readClaimed && (
                  <button
                    type="button"
                    onClick={handleSkipVideoDemo}
                    className="flex-1 py-2 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-400 border border-amber-500/30 text-xs font-bold flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer"
                  >
                    <Zap className="size-3.5 fill-amber-400" />
                    <span>⚡ Pular 90% (Demo)</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 py-2 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 text-xs font-black flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/20 transition active:scale-95 cursor-pointer"
                >
                  {readClaimed ? (
                    <>
                      <Trophy className="size-3.5" />
                      <span>Ir para o Quiz (+5 netfits)</span>
                    </>
                  ) : (
                    <span>Fechar Player</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: LEITURA COMPLETA DO ARTIGO (Para posts com format === "article") */}
      {modalOpen && !isVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-card w-full max-w-lg rounded-3xl border border-border shadow-2xl flex flex-col max-h-[90vh] overflow-hidden text-card-foreground">
            {/* Header do Modal */}
            <div className="p-4 border-b border-border flex items-center justify-between bg-muted/30">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center overflow-hidden">
                  <img src={getAvatarSrc()} alt={post.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-foreground line-clamp-1">{post.author}</h3>
                  <p className="text-[10px] text-muted-foreground">{post.authorRole}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Conteúdo com scroll */}
            <div onScroll={handleScrollArticle} className="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm leading-relaxed">
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-primary tracking-wider uppercase">{post.badge}</span>
                <h2 className="text-base sm:text-lg font-bold text-foreground leading-snug">{post.title}</h2>
              </div>

              {post.articleContent.map((paragraph, idx) => (
                <p key={idx} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-border/60">
                <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 space-y-1">
                  <span className="text-[10px] font-bold text-primary flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Pílula de Sabedoria Netfits
                  </span>
                  <p className="text-xs font-medium italic text-foreground/90 leading-snug">"{post.pillText}"</p>
                </div>
              </div>
            </div>

            {/* Footer do Modal com Validação Antifraude */}
            <div className="p-4 border-t border-border bg-muted/20 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">
                  Tempo lido: <strong className="text-foreground">{dwellTimeSeconds}s</strong> / 10s
                </span>
              </div>

              {readClaimed ? (
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition cursor-pointer flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" /> Desafio Liberado
                </button>
              ) : (
                <span className="text-[11px] text-amber-500 font-medium flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> Role até o final (10s)
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
