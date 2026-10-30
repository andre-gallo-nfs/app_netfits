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
  Film,
  Calendar,
  Zap,
  Volume2,
  ArrowRight,
  Flame,
} from "lucide-react";
import netfitsLogoDark from "@/assets/netfits-logo-dark.png";
import netfitsMark from "@/assets/netfits-mark.png";
import clinicFibios from "@/assets/clinic-fibios.jpg";
import spotStudio from "@/assets/spot-studio.jpg";
import feedRunner from "@/assets/feed-runner.jpg";
import feedCyclist from "@/assets/feed-cyclist.jpg";
import feedMountain from "@/assets/feed-mountain-video.jpg";
import feedVoturuna from "@/assets/feed-voturuna.jpg";
import asicsNovablast from "@/assets/asics-novablast.jpg";
import raceMarathon from "@/assets/race-marathon.jpg";
import raceTrail from "@/assets/race-trail.jpg";
import gearWatch from "@/assets/gear-watch.jpg";
import drFrancoAvatar from "@/assets/dr-franco-avatar.png";
import drFrancoBanner from "@/assets/dr-franco-banner.png";
import draIsabellaAvatar from "@/assets/dra-isabella-avatar.jpg";
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
  publishDate: string;
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

function getPostBannerSrc(post: ScheduledPostDef): string {
  const text = `${post.title} ${post.badge} ${post.line}`.toLowerCase();
  if (text.includes("sono") || text.includes("recupera") || text.includes("stress")) return spotStudio;
  if (text.includes("cicl") || text.includes("bike") || text.includes("pedal")) return feedCyclist;
  if (text.includes("montanha") || text.includes("outdoor") || text.includes("trail") || text.includes("altitude")) return feedMountain;
  if (text.includes("força") || text.includes("músculo") || text.includes("hipertrofia") || text.includes("franco")) return drFrancoBanner;
  if (text.includes("clínica") || text.includes("fibios") || text.includes("biomarcador") || text.includes("isabella")) return clinicFibios;
  if (text.includes("tênis") || text.includes("equipamento") || text.includes("calçado")) return asicsNovablast;
  if (text.includes("relógio") || text.includes("frequência") || text.includes("cardíac") || text.includes("gps")) return gearWatch;
  if (text.includes("maratona") || text.includes("prova") || text.includes("pace")) return raceMarathon;

  const mod = (post.originalDay || 1) % 4;
  if (mod === 0) return feedRunner;
  if (mod === 1) return feedVoturuna;
  if (mod === 2) return raceTrail;
  return feedMountain;
}

interface ScheduledFeedCardProps {
  post: ScheduledPostDef;
  isDailyChallenge?: boolean;
}

export function ScheduledFeedCard({ post, isDailyChallenge = true }: ScheduledFeedCardProps) {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalView, setModalView] = useState<"content" | "quiz">("content");

  const [readClaimed, setReadClaimed] = useState<boolean>(false);
  const [dwellTimeSeconds, setDwellTimeSeconds] = useState<number>(0);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState<boolean>(false);

  const shuffledOptions = useMemo(() => {
    const arr = [...post.quizOptions];
    let seed = 0;
    for (let i = 0; i < post.id.length; i++) {
      seed = (seed * 31 + post.id.charCodeAt(i)) % 2147483647;
    }
    for (let i = arr.length - 1; i > 0; i--) {
      seed = (seed * 16807 + i) % 2147483647;
      const j = seed % (i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [post.id, post.quizOptions]);

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

  useEffect(() => {
    if (modalOpen && modalView === "content" && isVideo && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [modalOpen, modalView, isVideo]);

  const handleVideoTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = Math.floor(videoRef.current.currentTime);
    setVideoElapsedSec(current);
    const duration = Math.floor(videoRef.current.duration) || videoTotalDuration;

    if (duration > 0 && current / duration >= 0.9 && !readClaimed) {
      setReadClaimed(true);
      feedAntifraud.recordAction("video_view", post.id, 0);
      toast.success("🎬 Vídeo concluído (90%+ de retenção)! O Quiz foi liberado.");
    }
  };

  const handleVideoLoadedMetadata = () => {
    if (videoRef.current && videoRef.current.duration) {
      setVideoTotalDuration(Math.floor(videoRef.current.duration));
    }
  };

  const handleVideoEnded = () => {
    if (!readClaimed) {
      setReadClaimed(true);
      feedAntifraud.recordAction("video_view", post.id, 0);
      toast.success("🎬 Vídeo concluído! O Quiz foi liberado.");
    }
  };

  const handleSkipVideoDemo = () => {
    if (videoRef.current) {
      const targetTime = videoTotalDuration * 0.92;
      videoRef.current.currentTime = targetTime;
      setVideoElapsedSec(Math.floor(targetTime));
    }
    setReadClaimed(true);
    feedAntifraud.recordAction("video_view", post.id, 0);
    toast.success("⚡ [Modo Demo/Staging]: 90% do vídeo validado com sucesso! Quiz desbloqueado.");
  };

  useEffect(() => {
    let timer: any = null;
    if (modalOpen && modalView === "content" && !isVideo && !readClaimed) {
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
  }, [modalOpen, modalView, isVideo, readClaimed, hasScrolledToBottom, post.articlePostId]);

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

  const handleGoToQuiz = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setModalView("quiz");
    setModalOpen(true);
  };

  const handleSubmitQuiz = () => {
    if (hasSubmitted) return;

    if (!selectedOption) {
      toast.warning("Selecione uma das alternativas antes de confirmar.");
      return;
    }

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
      toast.success(`🎉 Parabéns! Você acertou e ganhou +${amount} netfits!`, {
        description: selectedOptObj.feedback || "Netfits creditados na sua carteira com sucesso.",
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
    setModalView("content");
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    if (isVideo && modalView === "content" && !readClaimed && videoProgressPct < 90) {
      toast.warning("⚠️ Antifraude: Você precisa assistir ao menos 90% do vídeo para destravar o Quiz de +5 netfits.");
    }
    setModalOpen(false);
  };

  return (
    <>
      <article className="mx-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-5 shadow-sm space-y-4 min-h-[560px]">
        {/* 1. Header Canônico: Logo Verde no Fundo Preto + Tag Editorial + Pílula Verde-Limão */}
        <div className="flex items-center justify-between pb-1">
          <div className="flex items-center gap-2">
            <div className="h-7 w-auto bg-black rounded-lg px-2 py-1 flex items-center justify-center border border-zinc-800 shadow-sm shrink-0">
              <img src={netfitsLogoDark} alt="Netfits" className="h-4.5 w-auto object-contain" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-wider text-[#6B2AD9] bg-[#F2ECFD] px-2.5 py-0.5 rounded-md border border-purple-200">
              {post.line || "Curadoria Fibios"}
            </span>
          </div>

          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#C8F135] text-[#202127] text-xs font-black shadow-xs tracking-tight">
            <Sparkles className="size-3.5" />
            +5 netfits
          </span>
        </div>

        {/* Barra Bipartida Institucional Netfits (Roxo #6B2AD9 + Verde-Limão #C8F135) */}
        <div className="h-1 w-full rounded-full flex overflow-hidden">
          <div className="w-1/2 bg-[#6B2AD9]" />
          <div className="w-1/2 bg-[#C8F135]" />
        </div>

        {/* 2. Header do Autor com Avatar e Status */}
        <div className="flex items-center justify-between pt-0.5">
          <div className="flex items-center gap-3">
            <div
              onClick={handleOpenContent}
              className="size-11 rounded-full ring-2 ring-[#6B2AD9]/30 flex items-center justify-center cursor-pointer hover:ring-[#6B2AD9] transition-all bg-card overflow-hidden shadow-sm"
            >
              <img src={getAvatarSrc()} alt={post.author} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4
                  onClick={handleOpenContent}
                  className="text-sm font-bold text-[#202127] dark:text-white hover:text-[#6B2AD9] transition-colors cursor-pointer"
                >
                  {post.author}
                </h4>
                {isDailyChallenge && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-[10px] font-black uppercase tracking-tight">
                    <Flame className="size-3 text-amber-500 fill-amber-500 animate-pulse" />
                    Desafio do Dia
                  </span>
                )}
              </div>
              <p className="text-[11px] text-[#5F6270] dark:text-zinc-400 line-clamp-1">{post.authorRole}</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#5F6270] dark:text-zinc-400 bg-[#F5F5F7] dark:bg-zinc-800/80 px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-700">
            <Calendar className="size-3 text-[#6B2AD9]" />
            <span>{post.formattedDate}</span>
          </div>
        </div>

        {/* 3. Hero Banner Fotográfico em Alta Resolução (Proporção 16:9) */}
        <div
          onClick={handleOpenContent}
          className="relative overflow-hidden rounded-2xl shadow-sm border border-zinc-200/90 dark:border-zinc-800 bg-zinc-950 cursor-pointer group active:scale-[0.99] transition-all aspect-[16/9]"
          role="button"
          tabIndex={0}
        >
          <img
            src={getPostBannerSrc(post)}
            alt={post.title}
            className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          {/* Badge Flutuante Superior */}
          <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg group-hover:bg-[#6B2AD9] transition-colors">
            {isVideo ? (
              <>
                <Play className="size-3 text-[#C8F135] fill-[#C8F135] group-hover:text-white group-hover:fill-white" />
                <span className="text-[10px] font-bold">Assistir ({post.duration || `${videoTotalDuration}s`})</span>
              </>
            ) : (
              <>
                <BookOpen className="size-3 text-[#C8F135] group-hover:text-white" />
                <span className="text-[10px] font-bold">Ler artigo ({post.readTime})</span>
              </>
            )}
          </div>

          {/* Destaque Inferior sobre a Imagem */}
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-[#C8F135] text-[#202127] font-mono tracking-wider shadow">
              {post.badge}
            </span>
            <h3 className="text-sm sm:text-base font-black mt-1.5 leading-snug drop-shadow line-clamp-2">
              {post.title}
            </h3>
          </div>
        </div>

        {/* 4. Subtítulo / Lead Explicativo */}
        <p className="text-xs sm:text-sm text-[#5F6270] dark:text-zinc-300 leading-relaxed font-normal">
          {post.subtitle}
        </p>

        {/* 5. Ações Sociais */}
        <FeedSocialActions
          id={post.id}
          title={post.title}
          postCategory="educational"
          showViewButton={true}
          onOpenArticle={handleOpenContent}
        />

        {/* 6. Módulo de Desafio Quiz Diário (+5 netfits) com Microinterações e Feedback */}
        <div className="rounded-2xl border border-purple-200/80 dark:border-purple-900/60 bg-[#F2ECFD]/50 dark:bg-purple-950/20 p-4 sm:p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="size-9 rounded-xl bg-[#35106E] text-[#C8F135] flex items-center justify-center font-bold text-xs shadow-xs">
                <Trophy className="size-4.5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs sm:text-sm font-black text-[#202127] dark:text-white">
                    Desafio do Dia {String(post.originalDay).padStart(2, "0")}
                  </h4>
                  {isDailyChallenge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30">
                      24h
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-[#5F6270] dark:text-zinc-400">
                  Acerte para creditar <strong className="text-[#35106E] dark:text-[#C8F135]">+5 netfits</strong> na sua carteira
                </p>
              </div>
            </div>

            {hasSubmitted ? (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                <CheckCircle2 className="size-3.5" /> Concluído
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] font-black text-[#6B2AD9] dark:text-purple-400">
                <Sparkles className="size-3.5" /> +5 netfits
              </span>
            )}
          </div>

          <div className="text-xs sm:text-sm font-bold text-[#202127] dark:text-white leading-snug">
            {post.quizQuestion}
          </div>

          {/* Opções de Resposta Embaralhadas */}
          <div className="space-y-2">
            {shuffledOptions.map((opt) => {
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
                  className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 ${
                    isSelected
                      ? "border-[#6B2AD9] bg-white dark:bg-zinc-800 text-[#202127] dark:text-white font-bold shadow-sm ring-1 ring-[#6B2AD9]/30"
                      : "border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 hover:bg-white dark:hover:bg-zinc-800 text-[#5F6270] dark:text-zinc-300"
                  } ${hasSubmitted ? "cursor-default" : "cursor-pointer"}`}
                >
                  <div
                    className={`size-4.5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${
                      isSelected ? "border-[#6B2AD9] bg-[#6B2AD9] text-white" : "border-zinc-400 dark:border-zinc-600"
                    }`}
                  >
                    {isSelected && <div className="size-1.5 rounded-full bg-white" />}
                  </div>
                  <span className="leading-relaxed flex-1">{opt.text}</span>
                </button>
              );
            })}
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20 flex items-start gap-2 text-xs text-destructive">
              <AlertCircle className="size-4 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {!readClaimed && !hasSubmitted && (
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-700 dark:text-amber-400 font-medium flex items-center gap-2">
              <AlertCircle className="size-3.5 shrink-0 text-amber-500" />
              <span>
                {isVideo
                  ? "Assista ao menos 90% do vídeo para destravar o botão de pontuação."
                  : "Abra e leia o artigo completo por 10s para destravar o botão de pontuação."}
              </span>
            </div>
          )}

          {!hasSubmitted ? (
            <button
              onClick={handleSubmitQuiz}
              disabled={!readClaimed || !selectedOption}
              className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 ${
                readClaimed && selectedOption
                  ? "bg-[#6B2AD9] hover:bg-[#581c87] text-white active:scale-[0.99] cursor-pointer shadow-purple-500/20"
                  : "bg-zinc-200 dark:bg-zinc-800 text-zinc-400 cursor-not-allowed opacity-60"
              }`}
            >
              <CheckCircle2 className="size-4" /> Confirmar Resposta & Pontuar (+5 netfits)
            </button>
          ) : (
            <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-xs text-emerald-800 dark:text-emerald-300 font-bold flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
              <span>Netfits creditados com sucesso! Revise sempre para consolidar seus hábitos.</span>
            </div>
          )}
        </div>
      </article>

      {/* MODAL GLOBAL: CONTEÚDO (VÍDEO/ARTIGO) E TRANSIÇÃO AUTOMÁTICA PARA O QUIZ */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-4 animate-in fade-in">
          {modalView === "quiz" ? (
            <div className="bg-zinc-950 w-full max-w-lg rounded-3xl border border-[#6B2AD9]/40 shadow-2xl flex flex-col overflow-hidden text-white max-h-[92vh]">
              {/* Header do Quiz Modal com Logo Verde em Fundo Preto */}
              <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/90 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="h-7 w-auto bg-black rounded-lg px-2 py-1 flex items-center justify-center border border-zinc-800">
                    <img src={netfitsLogoDark} alt="Netfits" className="h-4.5 w-auto object-contain" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>Desafio Quiz Netfits · Dia {String(post.originalDay).padStart(2, "0")}</span>
                      <span className="text-[10px] bg-[#C8F135] text-[#202127] px-2 py-0.5 rounded-full font-black">
                        +5 netfits
                      </span>
                    </h3>
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

              {/* Corpo do Quiz no Modal */}
              <div className="p-5 overflow-y-auto space-y-4 text-left">
                <div className="p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-xs sm:text-sm font-semibold text-zinc-100 leading-snug">
                  {post.quizQuestion}
                </div>

                <div className="space-y-2.5">
                  <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Selecione a alternativa correta:
                  </label>
                  {shuffledOptions.map((opt, i) => {
                    const isSelected = selectedOption === opt.id;
                    const letter = String.fromCharCode(65 + i);
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        disabled={hasSubmitted}
                        onClick={() => {
                          setSelectedOption(opt.id);
                          setErrorMsg(null);
                        }}
                        className={`w-full text-left p-3.5 rounded-2xl border text-xs sm:text-sm transition-all flex items-start gap-3 ${
                          isSelected
                            ? "border-[#6B2AD9] bg-[#6B2AD9]/20 text-white font-medium shadow-md shadow-purple-900/20"
                            : "border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 text-zinc-300"
                        } ${hasSubmitted ? "cursor-default" : "cursor-pointer active:scale-[0.99]"}`}
                      >
                        <span
                          className={`size-6 rounded-lg text-xs font-black grid place-items-center shrink-0 border ${
                            isSelected
                              ? "bg-[#C8F135] border-[#C8F135] text-zinc-950 font-black"
                              : "border-zinc-700 bg-zinc-800 text-zinc-400"
                          }`}
                        >
                          {letter}
                        </span>
                        <span className="leading-relaxed flex-1 mt-0.5">{opt.text}</span>
                      </button>
                    );
                  })}
                </div>

                {errorMsg && (
                  <div className="p-3.5 rounded-2xl bg-destructive/15 border border-destructive/30 flex items-start gap-2.5 text-xs text-red-300">
                    <AlertCircle className="size-4 shrink-0 mt-0.5 text-red-400" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {hasSubmitted && (
                  <div className="p-3.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-xs text-emerald-300 font-medium flex items-center gap-2.5">
                    <CheckCircle2 className="size-5 text-emerald-400 shrink-0" />
                    <span>🎉 Parabéns! Seus +5 netfits já foram adicionados com sucesso ao seu extrato.</span>
                  </div>
                )}
              </div>

              {/* Footer do Quiz Modal */}
              <div className="p-4 border-t border-zinc-800 bg-zinc-900/90 flex items-center justify-between gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setModalView("content")}
                  className="py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold transition cursor-pointer"
                >
                  Voltar ao Conteúdo
                </button>

                {!hasSubmitted ? (
                  <button
                    type="button"
                    onClick={handleSubmitQuiz}
                    disabled={!selectedOption}
                    className={`flex-1 py-2.5 px-4 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition active:scale-[0.98] ${
                      selectedOption
                        ? "bg-[#C8F135] text-zinc-950 hover:bg-[#b5db2e] shadow-lime-500/20 cursor-pointer"
                        : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                    }`}
                  >
                    <CheckCircle2 className="size-4" />
                    <span>Confirmar Resposta (+5 netfits)</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/20 cursor-pointer"
                  >
                    <span>Concluir & Voltar ao Feed</span>
                  </button>
                )}
              </div>
            </div>
          ) : isVideo ? (
            <div className="bg-zinc-950 w-full max-w-lg rounded-3xl border border-emerald-500/30 shadow-2xl flex flex-col overflow-hidden text-white max-h-[92vh]">
              {/* Header do Player com Logo Verde em Fundo Preto */}
              <div className="p-3.5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/90 shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="h-6 w-auto bg-black rounded-lg px-2 py-0.5 flex items-center justify-center border border-zinc-800">
                    <img src={netfitsLogoDark} alt="Netfits" className="h-4 w-auto object-contain" />
                  </div>
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

              {/* Reprodutor de Vídeo HTML5 */}
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

              {/* Painel Antifraude & Ações */}
              <div className="p-4 bg-zinc-900/90 space-y-3.5 shrink-0">
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
                          : "bg-gradient-to-r from-emerald-500 to-[#C8F135]"
                      }`}
                      style={{ width: `${videoProgressPct}%` }}
                    />
                  </div>
                </div>

                {readClaimed ? (
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="size-4 shrink-0 text-emerald-400" />
                      <span>🎉 Retenção de 90% validada! Quiz liberado.</span>
                    </div>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-md font-mono">
                      +5 netfits
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

                <div className="flex items-center gap-2 pt-1">
                  {isStaging && !readClaimed && (
                    <button
                      type="button"
                      onClick={handleSkipVideoDemo}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-400 border border-amber-500/30 text-xs font-bold flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer"
                    >
                      <Zap className="size-3.5 fill-amber-400" />
                      <span>⚡ Pular 90% (Demo)</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={readClaimed ? handleGoToQuiz : handleCloseModal}
                    className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-black flex items-center justify-center gap-2 shadow-lg transition active:scale-95 cursor-pointer ${
                      readClaimed
                        ? "bg-[#C8F135] hover:bg-[#b5db2e] text-zinc-950 shadow-lime-500/20"
                        : "bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                    }`}
                  >
                    {readClaimed ? (
                      <>
                        <Trophy className="size-4" />
                        <span>Abrir o Quiz (+5 netfits)</span>
                        <ArrowRight className="size-3.5 ml-0.5" />
                      </>
                    ) : (
                      <span>Fechar Player</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* TELA C: LEITURA COMPLETA DO ARTIGO EM FORMATO REVISTA */
            <div className="bg-white dark:bg-zinc-900 w-full max-w-lg rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden text-[#202127] dark:text-white">
              {/* Header do Artigo */}
              <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-[#F5F5F7] dark:bg-zinc-800/60">
                <div className="flex items-center gap-2.5">
                  <div className="h-7 w-auto bg-black rounded-lg px-2 py-1 flex items-center justify-center border border-zinc-800">
                    <img src={netfitsLogoDark} alt="Netfits" className="h-4.5 w-auto object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#202127] dark:text-white line-clamp-1">{post.author}</h3>
                    <p className="text-[10px] text-[#5F6270] dark:text-zinc-400">{post.authorRole}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="p-1.5 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition cursor-pointer"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Barra Bipartida */}
              <div className="h-1 w-full flex overflow-hidden">
                <div className="w-1/2 bg-[#6B2AD9]" />
                <div className="w-1/2 bg-[#C8F135]" />
              </div>

              {/* Conteúdo com scroll */}
              <div onScroll={handleScrollArticle} className="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm leading-relaxed">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-black text-[#6B2AD9] tracking-wider uppercase">{post.badge}</span>
                  <h2 className="text-base sm:text-lg font-black text-[#202127] dark:text-white leading-snug">{post.title}</h2>
                </div>

                {/* Banner de apoio dentro do artigo */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-zinc-200 dark:border-zinc-800">
                  <img src={getPostBannerSrc(post)} alt={post.title} className="w-full h-full object-cover" />
                </div>

                {post.articleContent.map((paragraph, idx) => (
                  <p key={idx} className="text-[#5F6270] dark:text-zinc-300 leading-relaxed font-normal">
                    {paragraph}
                  </p>
                ))}

                <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="p-3.5 rounded-2xl bg-[#F2ECFD] dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-800/60 space-y-1">
                    <span className="text-[10px] font-black text-[#35106E] dark:text-purple-300 flex items-center gap-1 uppercase tracking-wide">
                      <Sparkles className="size-3 text-[#6B2AD9]" /> Pílula de Sabedoria Netfits
                    </span>
                    <p className="text-xs font-semibold italic text-[#202127] dark:text-zinc-200 leading-snug">"{post.pillText}"</p>
                  </div>
                </div>
              </div>

              {/* Footer do Artigo com Validação Antifraude e Botão para o Quiz */}
              <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-[#F5F5F7] dark:bg-zinc-800/60 flex items-center justify-between text-xs gap-3">
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-[#6B2AD9]" />
                  <span className="text-[#5F6270] dark:text-zinc-400">
                    Tempo lido: <strong className="text-[#202127] dark:text-white">{dwellTimeSeconds}s</strong> / 10s
                  </span>
                </div>

                {readClaimed ? (
                  <button
                    type="button"
                    onClick={handleGoToQuiz}
                    className="px-4 py-2 rounded-xl bg-[#C8F135] text-[#202127] font-black hover:brightness-105 transition cursor-pointer flex items-center gap-1.5 shadow-md"
                  >
                    <Trophy className="size-4 text-[#202127]" /> Abrir o Quiz (+5 netfits)
                  </button>
                ) : (
                  <span className="text-[11px] text-amber-600 dark:text-amber-400 font-bold flex items-center gap-1">
                    <AlertCircle className="size-3.5" /> Role até o final (10s)
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
