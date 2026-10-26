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
  Pause,
  RotateCcw,
  Film,
  Calendar,
  Zap,
  ShoppingBag,
  Coins,
  Receipt,
  Layers,
  ChevronRight,
  ChevronLeft,
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

  // Estados do Player de Vídeo Motion
  const isVideo = post.format === "video_animation";
  const durationSec = useMemo(() => {
    if (!post.duration) return 55;
    const match = post.duration.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 55;
  }, [post.duration]);

  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);
  const [videoElapsedSec, setVideoElapsedSec] = useState<number>(0);
  const videoIntervalRef = useRef<any>(null);

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

  // Cronômetro do Vídeo Motion
  useEffect(() => {
    if (modalOpen && isVideo && isVideoPlaying) {
      videoIntervalRef.current = setInterval(() => {
        setVideoElapsedSec((prev) => {
          const next = prev + 1;
          const pct = Math.min(100, Math.round((next / durationSec) * 100));

          // Antifraude 90%
          if (pct >= 90 && !readClaimed) {
            setReadClaimed(true);
            feedAntifraud.recordAction("read", post.articlePostId, 0);
            feedAntifraud.recordAction("video_view", post.id, 0);
            toast.success("🎉 Retenção de 90% da animação atingida! O Desafio Quiz (+5 nfs) foi destravado.");
          }

          if (next >= durationSec) {
            setIsVideoPlaying(false);
            if (videoIntervalRef.current) clearInterval(videoIntervalRef.current);
            return durationSec;
          }

          return next;
        });
      }, 1000);
    } else {
      if (videoIntervalRef.current) clearInterval(videoIntervalRef.current);
    }

    return () => {
      if (videoIntervalRef.current) clearInterval(videoIntervalRef.current);
    };
  }, [modalOpen, isVideo, isVideoPlaying, durationSec, readClaimed, post.articlePostId, post.id]);

  // Cronômetro de Leitura para Artigos de Texto
  useEffect(() => {
    let timer: any = null;
    if (modalOpen && !isVideo && !readClaimed) {
      setHasScrolledToBottom(false);
      setDwellTimeSeconds(0);
      timer = setInterval(() => {
        setDwellTimeSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [modalOpen, isVideo, readClaimed]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (target.scrollHeight - target.scrollTop <= target.clientHeight + 35) {
      setHasScrolledToBottom(true);
    }
  };

  const handleClaimRead = () => {
    if (readClaimed) {
      toast.info("Você já concluiu a leitura e destravou o desafio!");
      return;
    }

    const minDwell = feedAntifraud.getRules().minDwellTimeSeconds ?? 10;
    if (dwellTimeSeconds < minDwell) {
      toast.warning(`Permaneça mais ${minDwell - dwellTimeSeconds}s no conteúdo para validar sua atenção.`);
      return;
    }

    if (feedAntifraud.getRules().requireScrollToBottom && !hasScrolledToBottom) {
      toast.warning("Role até o final do conteúdo para confirmar a leitura completa.");
      return;
    }

    setReadClaimed(true);
    feedAntifraud.recordAction("read", post.articlePostId, 0);
    toast.success("👏 Leitura validada! O Desafio Quiz está destravado (0 nfs por leitura / +5 nfs no acerto).");
  };

  const handleSubmitQuiz = () => {
    if (hasSubmitted) {
      toast.info("Você já respondeu este desafio com sucesso!");
      return;
    }

    if (!readClaimed) {
      if (isVideo) {
        toast.warning("🚫 Assista ao menos 90% da animação didática para liberar o Quiz.");
      } else {
        toast.warning("🚫 Abra e leia o artigo completo com a regra de atenção para liberar o Quiz.");
      }
      return;
    }

    const option = post.quizOptions.find((o) => o.id === selectedOption);
    if (!option) return;

    if (option.isCorrect) {
      const validation = feedAntifraud.validateAction("quiz", post.quizPostId);
      if (!validation.allowed) {
        toast.warning(validation.reason || "Ação bloqueada pelas regras antifraude.");
        return;
      }

      const points = feedAntifraud.getRules().pointsPerEducationalQuiz ?? 5;
      setErrorMsg(null);
      setHasSubmitted(true);
      wallet.earn(points, `Quiz Diário: ${post.title}`);
      feedAntifraud.recordAction("quiz", post.quizPostId, points);
      toast.success(`🎉 Parabéns! Resposta correta (+${points} nfs creditados na sua carteira)`);
    } else {
      setErrorMsg(option.feedback || "Resposta incorreta. Revise o conteúdo e tente novamente!");
      toast.error("Resposta incorreta. Revise o conteúdo e tente novamente!");
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

  // Cálculo da Cena Atual do Vídeo
  const scenes = post.videoStoryboard || [];
  const currentScene = useMemo(() => {
    if (!scenes.length) return null;
    return scenes.find((s) => videoElapsedSec >= s.startSec && videoElapsedSec < s.endSec) || scenes[scenes.length - 1];
  }, [scenes, videoElapsedSec]);

  const videoProgressPct = Math.min(100, Math.round((videoElapsedSec / durationSec) * 100));

  const handleOpenContent = () => {
    setModalOpen(true);
    if (isVideo) {
      setIsVideoPlaying(true);
    }
  };

  const handleCloseModal = () => {
    if (isVideo && !readClaimed && videoProgressPct < 90) {
      toast.warning("⚠️ Antifraude: Você precisa assistir ao menos 90% da animação para destravar o Quiz de +5 nfs.");
    }
    setModalOpen(false);
    setIsVideoPlaying(false);
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

            <span className="text-[11px] text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {isVideo ? (post.duration || "55s") : post.readTime}
            </span>
          </div>

          {/* Player Banner Preview para Vídeos */}
          {isVideo && (
            <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-gradient-to-br from-zinc-950 via-purple-950 to-zinc-900 border border-purple-500/20 group-hover:border-purple-500/40 transition-all flex flex-col items-center justify-center p-4 text-center shadow-inner">
              <div className="size-12 rounded-full bg-purple-600 text-white grid place-items-center shadow-lg group-hover:scale-110 transition-transform ring-4 ring-purple-600/30 mb-2">
                <Play className="size-6 ml-0.5 fill-white text-white" />
              </div>
              <span className="text-xs font-black text-white tracking-tight drop-shadow">
                Assistir Animação Didática ({post.duration || "55s"})
              </span>
              <span className="text-[10px] text-purple-300 font-mono mt-0.5">
                Motion Design 2D · 4 Cenas Explicativas
              </span>
              <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-lime-400 text-[9px] font-bold px-2 py-0.5 rounded-md border border-lime-500/30">
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

        {/* Card do Desafio Quiz Diário (+5 nfs) */}
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
                  Acerte para creditar <strong className="text-foreground">+5 nfs</strong> na carteira
                </p>
              </div>
            </div>

            {hasSubmitted ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" /> Concluído
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-primary">
                <Sparkles className="w-3 h-3" /> +5 nfs
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
                  ? "Assista ao menos 90% da animação acima para destravar o botão de confirmação."
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
              <CheckCircle2 className="w-4 h-4" /> Confirmar Resposta & Pontuar (+5 nfs)
            </button>
          ) : (
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-700 dark:text-emerald-400 font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Pontos creditados com sucesso! Revise sempre para consolidar seus hábitos.</span>
            </div>
          )}
        </div>
      </article>

      {/* MODAL 1: PLAYER DE VÍDEO ANIMADO (Para posts com format === "video_animation") */}
      {modalOpen && isVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-4 animate-in fade-in">
          <div className="bg-zinc-950 w-full max-w-md rounded-3xl border border-purple-500/30 shadow-2xl flex flex-col overflow-hidden text-white max-h-[92vh]">
            {/* Header do Player */}
            <div className="p-3.5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/80 shrink-0">
              <div className="flex items-center gap-2">
                <span className="size-7 rounded-lg bg-purple-600/30 text-purple-300 border border-purple-500/30 grid place-items-center text-xs font-black">
                  <Film className="size-3.5" />
                </span>
                <div>
                  <h3 className="text-xs font-bold text-white line-clamp-1">{post.title}</h3>
                  <p className="text-[10px] text-zinc-400">Animação Didática Motion 2D</p>
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

            {/* Tela de Exibição da Animação (Motion Scene Box) */}
            <div className="relative aspect-[9/14] sm:aspect-square w-full bg-gradient-to-b from-zinc-950 via-purple-950/60 to-zinc-950 p-4 flex flex-col justify-between overflow-hidden border-b border-zinc-800">
              {/* Efeitos de fundo animados */}
              <div className="absolute -top-12 -right-12 size-40 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 size-40 bg-lime-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Tag Topo da Cena Atual */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="bg-purple-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="size-3 text-lime-400" />
                  <span>Cena {currentScene?.sceneNumber || 1} de {scenes.length || 4}</span>
                </span>
                <span className="bg-black/60 backdrop-blur-md text-zinc-300 font-mono text-[10px] px-2 py-0.5 rounded-full border border-white/10">
                  {Math.floor(videoElapsedSec / 60)}:{String(videoElapsedSec % 60).padStart(2, "0")} / {Math.floor(durationSec / 60)}:{String(durationSec % 60).padStart(2, "0")}
                </span>
              </div>

              {/* Elementos Visuais Dinâmicos da Cena */}
              <div className="relative z-10 my-auto text-center space-y-4">
                {/* Ícone / Ilustração Central da Cena */}
                <div className="size-20 sm:size-24 mx-auto rounded-3xl bg-gradient-to-tr from-purple-600/30 to-lime-400/20 border border-purple-500/40 p-4 grid place-items-center shadow-2xl relative group">
                  {currentScene?.graphicType === "cashback_formula" ? (
                    <div className="flex items-center gap-2 animate-bounce">
                      <Receipt className="size-8 text-white" />
                      <span className="text-xl font-black text-lime-400">&rarr;</span>
                      <Coins className="size-8 text-yellow-400" />
                    </div>
                  ) : currentScene?.graphicType === "order_simulation" ? (
                    <div className="text-center">
                      <ShoppingBag className="size-7 text-lime-300 mx-auto mb-1 animate-pulse" />
                      <span className="text-[10px] font-mono font-black text-white bg-purple-600 px-1.5 py-0.5 rounded">R$ 250</span>
                    </div>
                  ) : currentScene?.graphicType === "quiz_unlock" ? (
                    <Trophy className="size-10 text-yellow-400 animate-pulse" />
                  ) : (
                    <Film className="size-9 text-purple-300" />
                  )}
                  <div className="absolute -bottom-2 bg-zinc-900 border border-purple-500/40 text-[9px] font-bold text-lime-300 px-2 py-0.5 rounded-full shadow">
                    {currentScene?.tag || "Netfits Motion"}
                  </div>
                </div>

                {/* Título e Descrição Visual da Cena */}
                <div>
                  <h4 className="text-base sm:text-lg font-black text-white tracking-tight">
                    {currentScene?.title || post.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-zinc-300 max-w-xs mx-auto mt-1 leading-relaxed">
                    {currentScene?.visual || post.subtitle}
                  </p>
                </div>
              </div>

              {/* Legenda de Locução Sincronizada (Closed Caption) */}
              <div className="relative z-10 bg-black/85 backdrop-blur-md border border-purple-500/30 rounded-2xl p-3 shadow-xl text-left">
                <div className="flex items-center gap-1.5 mb-1 text-[9px] font-bold text-lime-400 uppercase tracking-widest">
                  <span className="size-1.5 rounded-full bg-lime-400 animate-ping" />
                  <span>Locução Oficial (Áudio Narrativo)</span>
                </div>
                <p className="text-[11px] sm:text-xs text-white font-medium leading-relaxed italic">
                  "{currentScene?.voiceover || post.subtitle}"
                </p>
              </div>
            </div>

            {/* Controles de Reprodução & Barra de Retenção Antifraude */}
            <div className="p-4 bg-zinc-900/90 space-y-3 shrink-0">
              {/* Barra de Progresso com Meta de 90% */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-zinc-300 font-bold flex items-center gap-1">
                    <ShieldCheck className={`size-3.5 ${readClaimed ? "text-lime-400" : "text-purple-400"}`} />
                    <span>Retenção Antifraude: {videoProgressPct}%</span>
                  </span>
                  <span className="font-mono text-lime-400 font-bold">
                    {readClaimed ? "✓ Destravado (90%+)" : "Meta: 90% (50s)"}
                  </span>
                </div>
                <div className="relative w-full h-2.5 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700">
                  <div
                    className={`h-full transition-all duration-300 ${
                      readClaimed
                        ? "bg-gradient-to-r from-lime-400 to-emerald-500"
                        : "bg-gradient-to-r from-purple-500 to-lime-400"
                    }`}
                    style={{ width: `${videoProgressPct}%` }}
                  />
                  <div className="absolute top-0 bottom-0 w-0.5 bg-yellow-400 z-10" style={{ left: "90%" }} title="Meta 90%" />
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 transition active:scale-95 cursor-pointer"
                  >
                    {isVideoPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5 fill-white" />}
                    <span>{isVideoPlaying ? "Pausar" : "Assistir"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setVideoElapsedSec(0);
                      setIsVideoPlaying(true);
                    }}
                    className="p-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition cursor-pointer"
                    title="Reiniciar Animação"
                  >
                    <RotateCcw className="size-3.5" />
                  </button>
                </div>

                {/* Atalho Demo Exclusivo para Homologação */}
                {isStaging && !readClaimed && (
                  <button
                    type="button"
                    onClick={() => {
                      const targetSec = Math.round(durationSec * 0.92);
                      setVideoElapsedSec(targetSec);
                      setReadClaimed(true);
                      feedAntifraud.recordAction("read", post.articlePostId, 0);
                      feedAntifraud.recordAction("video_view", post.id, 0);
                      toast.success("⚡ Atalho Homologação: 90% atingido! Desafio Quiz destravado.");
                    }}
                    className="px-2.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-[10px] font-extrabold flex items-center gap-1 transition cursor-pointer active:scale-95"
                  >
                    <Zap className="size-3 text-yellow-400 fill-yellow-400" />
                    <span>Pular 90% (Demo)</span>
                  </button>
                )}
              </div>

              {/* Botão de Fechar / Ir para o Quiz */}
              <button
                type="button"
                onClick={handleCloseModal}
                className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs transition cursor-pointer active:scale-98"
              >
                {readClaimed ? "✓ Retenção Aprovada — Responder Desafio Quiz" : "Continuar Assistindo"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: LEITOR DE ARTIGO DE TEXTO (Para posts com format === "article") */}
      {modalOpen && !isVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-card w-full max-w-lg max-h-[88vh] rounded-2xl border border-border shadow-2xl flex flex-col overflow-hidden">
            {/* Header Modal */}
            <div className="p-4 border-b border-border flex items-center justify-between bg-muted/20">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-primary/10 text-primary uppercase tracking-wide">
                  {post.line}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conteúdo com Scroll Listener */}
            <div onScroll={handleScroll} className="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm leading-relaxed text-foreground/90">
              <h2 className="text-base sm:text-xl font-bold text-foreground leading-snug">{post.title}</h2>
              <p className="text-xs sm:text-sm text-primary font-medium">{post.subtitle}</p>

              <div className="space-y-3 pt-2 text-foreground/80">
                {post.articleContent.map((paragraph, idx) => (
                  <p key={idx} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Pílula de Fixação */}
              <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
                💡 <strong>Dica de Longevidade:</strong> {post.pillText}
              </div>
            </div>

            {/* Footer com Trava Antifraude */}
            <div className="p-4 border-t border-border bg-muted/20 space-y-3">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className={`w-4 h-4 ${readClaimed ? "text-emerald-500" : "text-amber-500"}`} />
                  <span>
                    {readClaimed ? (
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Leitura Auditada & Aprovada</span>
                    ) : (
                      <span>Atenção Mínima: {dwellTimeSeconds}/10s {dwellTimeSeconds < 10 && "(aguarde)"}</span>
                    )}
                  </span>
                </div>
                {!readClaimed && feedAntifraud.getRules().requireScrollToBottom && (
                  <span className={hasScrolledToBottom ? "text-emerald-600 dark:text-emerald-400 font-medium" : "text-muted-foreground"}>
                    {hasScrolledToBottom ? "✓ Rolagem completa" : "Role até o fim"}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleClaimRead}
                  disabled={readClaimed || dwellTimeSeconds < 10 || (feedAntifraud.getRules().requireScrollToBottom && !hasScrolledToBottom)}
                  className={`flex-1 py-2.5 px-4 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                    readClaimed
                      ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 cursor-default"
                      : dwellTimeSeconds >= 10 && (!feedAntifraud.getRules().requireScrollToBottom || hasScrolledToBottom)
                      ? "bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.99] cursor-pointer shadow-sm"
                      : "bg-muted text-muted-foreground cursor-not-allowed opacity-60"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  {readClaimed ? "Leitura Concluída" : "Validar Leitura & Destravar Quiz"}
                </button>

                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="py-2.5 px-3 rounded-xl border border-border bg-card text-foreground font-semibold text-xs hover:bg-muted transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
