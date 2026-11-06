import { useState, useRef, useEffect, useMemo } from "react";
import { 
  Trophy, 
  Sparkles, 
  MoreVertical, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle, 
  BookOpen, 
  Clock, 
  X, 
  Play, 
  ShieldCheck, 
  Calendar, 
  Flame, 
  Volume2,
  Heart,
  HeartPulse,
  ShoppingBag,
  BadgeCheck,
  Apple,
  Droplets,
  Moon,
  Activity,
  Lock
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
import draIsabella from "@/assets/dra-isabella.jpeg";
import andreGalloIronmanImg from "@/assets/andre-gallo-ironman.jpg";
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
  heroPills?: { label: string; icon?: string }[];
  takeaway?: string;
  articleContent: string[];
  quizQuestion: string;
  quizOptions: ScheduledPostOption[];
  videoUrl?: string;
  videoStoryboard?: ScheduledVideoScene[];
}

export const SCHEDULED_POSTS: ScheduledPostDef[] = scheduledPostsRaw as ScheduledPostDef[];

function getPostBannerSrc(post: ScheduledPostDef): string {
  const text = `${post.title} ${post.badge} ${post.line}`.toLowerCase();
  if (post.authorAvatar === "dr_franco") return drFrancoBanner;
  if (post.authorAvatar === "dra_isabella") return draIsabella;
  if (text.includes("tour") || text.includes("app")) return andreGalloIronmanImg;
  if (text.includes("sono") || text.includes("recupera") || text.includes("stress") || text.includes("cortisol")) return spotStudio;
  if (text.includes("cicl") || text.includes("bike") || text.includes("pedal")) return feedCyclist;
  if (text.includes("montanha") || text.includes("outdoor") || text.includes("trail") || text.includes("altitude")) return feedMountain;
  if (text.includes("força") || text.includes("músculo") || text.includes("hipertrofia") || text.includes("proteína")) return drFrancoBanner;
  if (text.includes("clínica") || text.includes("fibios") || text.includes("biomarcador") || text.includes("inflamação")) return clinicFibios;
  if (text.includes("tênis") || text.includes("equipamento") || text.includes("calçado")) return asicsNovablast;
  if (text.includes("relógio") || text.includes("frequência") || text.includes("cardíac") || text.includes("gps") || text.includes("zona 2")) return gearWatch;
  if (text.includes("maratona") || text.includes("prova") || text.includes("pace")) return raceMarathon;

  const mod = (post.originalDay || 1) % 4;
  if (mod === 0) return feedRunner;
  if (mod === 1) return feedVoturuna;
  if (mod === 2) return raceTrail;
  return feedMountain;
}


function renderHeroPillIcon(iconName?: string) {
  switch (iconName) {
    case "Heart":
      return <Heart className="size-3 text-[#C8F135]" />;
    case "HeartPulse":
      return <HeartPulse className="size-3 text-[#C8F135]" />;
    case "Flame":
      return <Flame className="size-3 text-orange-400" />;
    case "Activity":
      return <Activity className="size-3 text-[#38BDF8]" />;
    case "ShieldCheck":
      return <ShieldCheck className="size-3 text-[#C8F135]" />;
    case "Clock":
      return <Clock className="size-3 text-purple-400" />;
    case "Sparkles":
      return <Sparkles className="size-3 text-[#C8F135]" />;
    case "ShoppingBag":
      return <ShoppingBag className="size-3 text-emerald-400" />;
    case "BadgeCheck":
      return <BadgeCheck className="size-3 text-[#38BDF8]" />;
    case "AlertCircle":
      return <AlertCircle className="size-3 text-amber-400" />;
    case "Apple":
      return <Apple className="size-3 text-lime-400" />;
    case "Calendar":
      return <Calendar className="size-3 text-purple-400" />;
    case "Trophy":
      return <Trophy className="size-3 text-amber-400" />;
    case "BookOpen":
      return <BookOpen className="size-3 text-[#C8F135]" />;
    case "Droplets":
      return <Droplets className="size-3 text-blue-400" />;
    case "Moon":
      return <Moon className="size-3 text-indigo-400" />;
    default:
      return <Sparkles className="size-3 text-[#C8F135]" />;
  }
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

  const isHomologEnv = useMemo(() => {
    if (typeof window === "undefined") return false;
    const h = window.location.hostname;
    return (
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

  const handleSubmitQuiz = () => {
    if (hasSubmitted) return;

    if (!selectedOption) {
      toast.warning("Selecione uma das alternativas antes de confirmar.");
      return;
    }

    const selectedOptObj = post.quizOptions.find((opt) => opt.id === selectedOption);
    if (!selectedOptObj) return;

    if (selectedOptObj.isCorrect) {
      const validation = feedAntifraud.validateAction("quiz", post.quizPostId);
      if (!validation.allowed) {
        toast.warning(validation.reason || "Ação bloqueada pelas regras antifraude.");
        return;
      }

      const amount = 5;
      wallet.earn(amount, `Quiz Diário: ${post.title} (${post.author})`, "feed");
      feedAntifraud.recordAction("quiz", post.quizPostId, amount);
      setHasSubmitted(true);
      setErrorMsg(null);
      toast.success(`🎉 Parabéns! Resposta correta (+${amount} nfs creditados na sua carteira)`, {
        description: selectedOptObj.feedback || "Netfits creditados na sua carteira com sucesso.",
      });
    } else {
      setErrorMsg(
        selectedOptObj.feedback ||
          "Resposta incorreta. Revise o conteúdo do post e tente novamente para absorver o aprendizado."
      );
      toast.error("Resposta incorreta. Leia o feedback e tente novamente!", {
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
    if (!isVideo && dwellTimeSeconds >= 10 && hasScrolledToBottom && !readClaimed) {
      setReadClaimed(true);
      feedAntifraud.recordAction("read", post.articlePostId, 0);
      toast.success("📖 Leitura completa validada! O Desafio Quiz (+5 netfits) foi liberado.");
    }
    setModalOpen(false);
  };

  return (
    <>
      <article className="px-4 space-y-3.5 min-h-[560px] w-full max-w-full overflow-x-hidden">
        {/* 1. Header do Especialista / Autor com Marca Canônica Netfits */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              onClick={handleOpenContent}
              className="size-11 rounded-full ring-2 ring-[#6B2AD9]/30 flex items-center justify-center cursor-pointer hover:ring-[#6B2AD9] transition-all bg-card overflow-hidden shadow-sm shrink-0"
            >
              <img src={getAvatarSrc()} alt={post.author} className="w-full h-full object-cover" />
            </div>
            <div className="cursor-pointer" onClick={handleOpenContent}>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white leading-tight hover:text-[#6B2AD9] transition-colors">
                  {post.author}
                </h3>
                {isDailyChallenge && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-400 text-[10px] font-black uppercase tracking-tight">
                    <Flame className="size-3 text-amber-500 fill-amber-500 animate-pulse" />
                    Desafio do Dia
                  </span>
                )}
              </div>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-400 font-medium">
                por {post.line || "Fibios"} · {post.formattedDate}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-6 w-auto bg-black rounded-lg px-2 py-0.5 flex items-center justify-center border border-zinc-800 shadow-xs">
              <img src={netfitsLogoDark} alt="Netfits" className="h-3.5 w-auto object-contain" />
            </div>
            <button
              type="button"
              onClick={() => toast.info(`Publicação oficial curada pela Fibios & Netfits`)}
              className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 p-1 rounded-full transition"
              aria-label="Opções"
            >
              <MoreVertical className="size-4" />
            </button>
          </div>
        </div>

        {/* 2. Hero Banner Fotográfico Editorial (4:5 Mobile-First - Padrão Ouro de Poster) */}
        <div
          onClick={handleOpenContent}
          className="relative overflow-hidden rounded-2xl shadow-md border border-zinc-200 dark:border-zinc-800 bg-zinc-950 cursor-pointer group active:scale-[0.99] transition-all aspect-[4/5] max-h-[480px] w-full max-w-full"
          role="button"
          tabIndex={0}
          aria-label={`Toque para ver o conteúdo completo: ${post.title}`}
        >
          <img
            src={getPostBannerSrc(post)}
            alt={post.title}
            className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
            loading="lazy"
          />
          {/* Gradiente Escuro Profundo para Contraste Máximo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/35" />

          {/* Botão de Ação Central em Vídeos */}
          {isVideo && (
            <div className="absolute inset-0 grid place-items-center z-10 pointer-events-none">
              <div className="size-16 rounded-full bg-white/95 text-zinc-950 shadow-2xl grid place-items-center ring-4 ring-[#C8F135]/60 group-hover:scale-110 transition-transform">
                <Play className="size-7 ml-1 text-zinc-950 fill-zinc-950" />
              </div>
            </div>
          )}

          {/* Conteúdo Editorial Sobreposto (Contraste Máximo & Vidro Fosco) */}
          <div className="absolute inset-0 p-5 flex flex-col justify-between text-white z-20 pointer-events-none">
            {/* Topo do Poster */}
            <div className="flex items-center justify-between gap-2">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#C8F135] text-[#202127] text-[10px] font-black uppercase tracking-widest shadow-sm font-mono">
                {post.badge}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold shadow-sm">
                {isVideo ? (
                  <>
                    <Play className="size-3 text-[#C8F135] fill-[#C8F135]" />
                    <span>Vídeo ({post.duration || `${videoTotalDuration}s`})</span>
                  </>
                ) : (
                  <>
                    <BookOpen className="size-3 text-[#C8F135]" />
                    <span>Artigo ({post.readTime})</span>
                  </>
                )}
              </span>
            </div>

            {/* Centro / Título e Gancho Editorial */}
            <div className="space-y-2 my-auto min-w-0 w-full">
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-md break-words">
                {post.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-100 font-medium leading-snug drop-shadow-md line-clamp-3 break-words">
                {post.subtitle}
              </p>
            </div>

            {/* Rodapé do Poster: Pílulas Temáticas & Assinatura */}
            <div className="space-y-3">
              {/* Pílulas de Conceitos-Chave (Glassmorphism) */}
              {post.heroPills && post.heroPills.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {post.heroPills.map((pill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-900/90 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white shadow-sm"
                    >
                      {renderHeroPillIcon(pill.icon)}
                      <span>{pill.label}</span>
                    </span>
                  ))}
                </div>
              )}

              {/* Assinatura Médica / Institucional com Barra de Acento */}
              <div className="flex items-center gap-2 pt-1.5 border-t border-white/20">
                <div className="w-1 h-7 bg-[#C8F135] rounded-full shrink-0" />
                <div className="min-w-0">
                  <span className="font-bold text-xs text-white block truncate">
                    {post.author}
                  </span>
                  <span className="text-[10px] text-zinc-300 block truncate">
                    {post.authorRole}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Bipartida Institucional Netfits (Roxo #6B2AD9 + Verde-Limão #C8F135) */}
        <div className="h-0.5 w-full rounded-full flex overflow-hidden">
          <div className="w-1/2 bg-[#6B2AD9]" />
          <div className="w-1/2 bg-[#C8F135]" />
        </div>

        {/* 4. Módulo Interativo: Desafio do Dia / Quiz de Fixação Pedagógica (+5 NFs) */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
          {/* Cabeçalho do Quiz */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-purple-600/10 text-purple-600 dark:text-purple-400 grid place-items-center shrink-0">
                <Trophy className="size-5" />
              </div>
              <div>
                <span className="text-[10px] font-black tracking-widest text-purple-600 dark:text-purple-400 uppercase block">
                  QUIZZ NETFITS
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                    Responda e ganhe
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#C8F135] text-zinc-950 font-black text-[11px] tracking-tight shadow-xs">
                    5 netfits
                  </span>
                </div>
              </div>
            </div>

            {hasSubmitted ? (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                <CheckCircle2 className="size-3.5" /> Concluído
              </span>
            ) : !readClaimed ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                <Lock className="size-3" /> Bloqueado
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] font-black text-[#6B2AD9] dark:text-purple-400">
                <Sparkles className="size-3.5" /> +5 netfits
              </span>
            )}
          </div>

          {!readClaimed ? (
            /* Estado Bloqueado: Exige leitura ou vídeo */
            <div className="p-4 rounded-xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-900/40 text-center space-y-3">
              <div className="size-11 rounded-full bg-purple-100 dark:bg-purple-900/40 text-[#6B2AD9] dark:text-purple-300 grid place-items-center mx-auto">
                <Lock className="size-5" />
              </div>
              <div className="space-y-1">
                <h5 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">
                  {isVideo ? "Assista ao vídeo para liberar o Quizz" : "Leia o artigo para liberar o Quizz"}
                </h5>
                <p className="text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
                  {isVideo
                    ? "Para garantir a retenção pedagógica, assista a ao menos 90% do vídeo didático para destravar o desafio (+5 netfits)."
                    : "Para garantir o aprendizado real, abra o artigo e complete a leitura atenta (mínimo 10s e rolagem até o fim)."}
                </p>
              </div>
              <button
                type="button"
                onClick={handleOpenContent}
                className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 active:scale-[0.99] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-purple-600/20 transition cursor-pointer touch-manipulation"
              >
                {isVideo ? <Play className="size-4" /> : <BookOpen className="size-4" />}
                <span>{isVideo ? "Assistir ao Vídeo (Liberar Quiz)" : "Ler Artigo Completo (Liberar Quiz)"}</span>
              </button>
            </div>
          ) : (
            /* Estado Desbloqueado: Exibe Pergunta e Alternativas */
            <>
              {/* Pergunta */}
              <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white leading-snug break-words">
                {post.quizQuestion}
              </h4>

              {/* Lista de Alternativas (Radio Buttons) */}
              <div className="space-y-2.5">
                {shuffledOptions.map((opt) => {
                  const isSelected = selectedOption === opt.id;
                  const isFinishedCorrect = hasSubmitted && opt.isCorrect;

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        if (!hasSubmitted) {
                          setSelectedOption(opt.id);
                          setErrorMsg(null);
                        }
                      }}
                      disabled={hasSubmitted}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center gap-3 cursor-pointer min-h-[48px] touch-manipulation select-none ${
                        isFinishedCorrect
                          ? "bg-lime-500/15 border-lime-500 text-zinc-950 dark:text-white font-semibold"
                          : isSelected
                          ? "bg-lime-50 dark:bg-lime-950/30 border-lime-500/80 text-zinc-950 dark:text-white font-semibold shadow-xs"
                          : "bg-zinc-50/90 dark:bg-zinc-800/60 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-600"
                      } ${hasSubmitted ? "cursor-default" : ""}`}
                    >
                      <div
                        className={`size-5 rounded-full border-2 grid place-items-center shrink-0 transition-colors ${
                          isFinishedCorrect || isSelected
                            ? "border-lime-600 bg-lime-500/20"
                            : "border-zinc-400 dark:border-zinc-500"
                        }`}
                      >
                        {(isFinishedCorrect || isSelected) && (
                          <div className="size-2 rounded-full bg-lime-600" />
                        )}
                      </div>
                      <span className="flex-1 font-medium break-words text-xs sm:text-sm">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Mensagem de Erro / Feedback Educativo */}
              {errorMsg && (
                <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs animate-in fade-in">
                  <AlertCircle className="size-4 shrink-0 mt-0.5" />
                  <p>{errorMsg}</p>
                </div>
              )}

              {/* Botão de Ação / Conclusão */}
              {!hasSubmitted ? (
                <button
                  type="button"
                  onClick={handleSubmitQuiz}
                  className="w-full py-3.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 active:scale-[0.99] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-purple-600/20 transition cursor-pointer min-h-[48px] touch-manipulation"
                >
                  <span>Responder e conquistar 5 netfits</span>
                  <ArrowRight className="size-4" />
                </button>
              ) : (
                <div className="p-3.5 rounded-xl bg-lime-500/15 border border-lime-500/40 text-zinc-900 dark:text-white flex items-center gap-2.5 animate-in fade-in">
                  <CheckCircle2 className="size-5 text-lime-600 shrink-0" />
                  <div className="flex-1 text-xs">
                    <span className="font-bold text-lime-700 dark:text-lime-400 block">
                      Desafio conquistado!
                    </span>
                    <span className="text-zinc-800 dark:text-zinc-200 font-medium">
                      +5 netfits foram creditados na sua carteira Netfits.
                    </span>
                  </div>
                  <Sparkles className="size-4 text-lime-600 shrink-0" />
                </div>
              )}
            </>
          )}
        </div>

        {/* 5. Pílula de Sabedoria / Takeaway no Rodapé */}
        <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-purple-950 border border-zinc-800 rounded-2xl p-4 text-white flex items-center gap-3.5 shadow-sm">
          <div className="size-9 rounded-full bg-lime-400/10 border border-lime-400/20 grid place-items-center shrink-0">
            <Sparkles className="size-4 text-lime-400" />
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 leading-snug break-words min-w-0 flex-1">
            <strong className="text-lime-400 font-semibold block text-[10px] uppercase tracking-wider mb-0.5">
              Pílula de Sabedoria
            </strong>
            "{post.takeaway || post.pillText || 'A constância diária é o maior investimento na sua longevidade ativa.'}"
          </p>
        </div>

        {/* 6. Ações Sociais: Curtir, Compartilhar (+1 nf), Salvar */}
        <FeedSocialActions
          id={post.articlePostId || post.id}
          title={`${post.author} — ${post.title}`}
          onOpenArticle={handleOpenContent}
        />

        {/* Divisor Elegante de Postagem */}
        <div className="h-px bg-zinc-200/80 dark:bg-zinc-800/80 my-4" />
      </article>

      {/* Modal de Conteúdo Expandido (Vídeo 9:16 ou Artigo Completo) */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
        >
          {isVideo ? (
            <div
              className="bg-zinc-950 w-full max-w-lg rounded-t-3xl sm:rounded-3xl border border-emerald-500/30 shadow-2xl flex flex-col overflow-hidden text-white max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header do Player com Logo Verde em Fundo Preto */}
              <div className="p-3.5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/90 shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="h-6 w-auto bg-black rounded-lg px-2 py-0.5 flex items-center justify-center border border-zinc-800">
                    <img src={netfitsLogoDark} alt="Netfits" className="h-4 w-auto object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white line-clamp-1">{post.title}</h3>
                    <p className="text-[10px] text-zinc-400 flex items-center gap-1">
                      <Volume2 className="size-3 text-emerald-400" /> Vídeo Narrativo Imersivo
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

              {/* Reprodutor de Vídeo HTML5 (Formato 9:16 Vertical Imersivo Mobile-First) */}
              <div className="relative aspect-[9/16] max-h-[62vh] w-full bg-black overflow-hidden border-b border-zinc-800 flex items-center justify-center mx-auto">
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
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[11px] text-zinc-400">
                      Assista até 90% para validar o dwell time e liberar a pontuação.
                    </p>
                    {isHomologEnv && (
                      <button
                        type="button"
                        onClick={handleSkipVideoDemo}
                        className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-600/40 px-2.5 py-1 rounded-lg shrink-0 cursor-pointer transition active:scale-95"
                      >
                        ⚡ Avançar 90% (Demo)
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div
              className="bg-white dark:bg-zinc-900 w-full max-w-lg rounded-t-3xl sm:rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col overflow-hidden max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header do Artigo */}
              <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-[#F5F5F7] dark:bg-zinc-800/80 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="h-7 w-auto bg-black rounded-lg px-2 py-1 flex items-center justify-center border border-zinc-800">
                    <img src={netfitsLogoDark} alt="Netfits" className="h-4.5 w-auto object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#202127] dark:text-white line-clamp-1">{post.title}</h3>
                    <p className="text-[10px] text-[#5F6270] dark:text-zinc-400">{post.author} · {post.authorRole}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="size-8 rounded-full bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-zinc-700 dark:text-zinc-200 grid place-items-center transition cursor-pointer"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Conteúdo com scroll */}
              <div onScroll={handleScrollArticle} className="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm leading-relaxed">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-black text-[#6B2AD9] tracking-wider uppercase">{post.badge}</span>
                  <h2 className="text-base sm:text-lg font-black text-[#202127] dark:text-white leading-snug">{post.title}</h2>
                </div>

                {/* Banner de apoio dentro do artigo (Proporção Vertical 4:5) */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[380px] border border-zinc-200 dark:border-zinc-800">
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
                      <Sparkles className="size-3 text-[#6B2AD9]" /> Pílula de Sabedoria
                    </span>
                    <p className="text-xs font-semibold italic text-[#202127] dark:text-zinc-200 leading-snug">"{post.pillText}"</p>
                  </div>
                </div>
              </div>

              {/* Footer do Artigo */}
              <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-[#F5F5F7] dark:bg-zinc-800/60 flex items-center justify-between text-xs gap-3">
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-[#6B2AD9]" />
                  <span className="text-[#5F6270] dark:text-zinc-400">
                    Tempo lido: <strong className="text-[#202127] dark:text-white">{dwellTimeSeconds}s</strong> / 10s
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition cursor-pointer"
                >
                  Concluir Leitura
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
