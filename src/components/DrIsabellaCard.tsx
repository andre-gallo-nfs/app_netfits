import { useState, useEffect, useMemo } from "react";
import { 
  Play, 
  X, 
  ShieldCheck, 
  Heart, 
  Activity, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Trophy, 
  ArrowRight, 
  AlertCircle, 
  Lock,
  MoreVertical,
  Flame,
  HeartPulse,
  Apple
} from "lucide-react";
import draIsabella from "@/assets/dra-isabella.jpeg";
import draIsabellaAvatar from "@/assets/dra-isabella-avatar.jpg";
import netfitsLogoDark from "@/assets/netfits-logo-dark.png";
import { wallet } from "@/lib/wallet-store";
import { feedAntifraud } from "@/lib/feed-antifraud";
import { FeedSocialActions } from "@/components/FeedSocialActions";
import { toast } from "sonner";

const VIDEO_POST_ID = "isabella-video-protocolo";
const QUIZ_POST_ID = "isabella-protocolo-quiz";
const VIDEO_QUALIFIED_KEY = "netfits_video_isabella_protocolo_qualified";

interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback?: string;
}

const PROTOCOLO_QUIZ_OPTIONS: QuizOption[] = [
  {
    id: "proto-opt-1",
    text: "Mapear biomarcadores, inflamação subclínica e cinética hormonal para guiar carga e longevidade.",
    isCorrect: true,
    feedback: "Exato! O Protocolo Fibios correlaciona dados laboratoriais precisos à carga de treino para blindar a saúde e o rendimento ao longo das décadas.",
  },
  {
    id: "proto-opt-2",
    text: "Treinar sempre em sobrecarga máxima sem realizar estratificação de risco biológico prévia.",
    isCorrect: false,
    feedback: "Cargas destrutivas sem acompanhamento clínico elevam o risco de lesões musculoesqueléticas, miocardite e estresse oxidativo severo.",
  },
  {
    id: "proto-opt-3",
    text: "Apenas monitorar o peso na balança como único indicador de adaptação cardiovascular.",
    isCorrect: false,
    feedback: "A balança convencional não reflete perfil lipídico, sensibilidade insulínica, inflamação ou saúde endotelial.",
  },
  {
    id: "proto-opt-4",
    text: "Suspender treinos aeróbicos em prol de repouso absoluto aos primeiros sinais de cansaço agudo.",
    isCorrect: false,
    feedback: "A recuperação inteligente utiliza regenerativos ativos e modulação da carga, não o abandono do estímulo fisiológico.",
  },
];

export function DrIsabellaCard() {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [videoQualified, setVideoQualified] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizError, setQuizError] = useState<string | null>(null);

  const shuffledOptions = useMemo(() => {
    const arr = [...PROTOCOLO_QUIZ_OPTIONS];
    let seed = 99;
    for (let i = arr.length - 1; i > 0; i--) {
      seed = (seed * 16807 + i) % 2147483647;
      const j = seed % (i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem(VIDEO_QUALIFIED_KEY) === "true" || feedAntifraud.hasClaimed("video_view", VIDEO_POST_ID)) {
        setVideoQualified(true);
        setProgress(100);
      }
      if (feedAntifraud.hasClaimed("quiz", QUIZ_POST_ID)) {
        setQuizSubmitted(true);
      }
    }
  }, []);

  // Simulação realista de reprodução de vídeo com medição de retenção antifraude (90% dwell time)
  useEffect(() => {
    let timer: any = null;
    if (open && isPlaying && progress < 100) {
      timer = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 5;
          if (next >= 90 && !videoQualified) {
            handleQualifyVideo(next);
          }
          if (next >= 100) {
            clearInterval(timer);
            setIsPlaying(false);
            return 100;
          }
          return next;
        });
      }, 500);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [open, isPlaying, progress, videoQualified]);

  const handleQualifyVideo = (currentProgress: number) => {
    const validation = feedAntifraud.validateAction("video_view", VIDEO_POST_ID, {
      videoProgressPct: currentProgress,
    });

    if (validation.allowed) {
      setVideoQualified(true);
      if (typeof window !== "undefined") {
        localStorage.setItem(VIDEO_QUALIFIED_KEY, "true");
      }
      feedAntifraud.recordAction("video_view", VIDEO_POST_ID, 0);
      toast.success("🎉 Retenção de 90% aprovada pela auditoria antifraude! Desafio liberado.");
    } else if (validation.reason) {
      toast.warning(validation.reason);
    }
  };

  const handleOpenVideo = () => {
    setOpen(true);
    setIsPlaying(true);
  };

  const handleClose = () => {
    if (!videoQualified && progress < 90) {
      toast.error(
        "🚫 Antifraude Netfits: É obrigatório assistir ao menos 90% do vídeo para habilitar o Quizz."
      );
    }
    setOpen(false);
    setIsPlaying(false);
  };

  const handleQuizSubmit = () => {
    if (quizSubmitted) {
      toast.info("Você já concluiu este desafio e conquistou seus netfits!");
      return;
    }

    if (!videoQualified) {
      toast.warning("🚫 Regra Antifraude: Assista ao menos 90% do vídeo acima para habilitar o Quizz.");
      return;
    }

    if (!selectedOption) {
      toast.warning("Selecione uma alternativa antes de confirmar sua resposta!");
      return;
    }

    const option = PROTOCOLO_QUIZ_OPTIONS.find((o) => o.id === selectedOption);
    if (!option) return;

    if (option.isCorrect) {
      const validation = feedAntifraud.validateAction("quiz", QUIZ_POST_ID, {
        videoProgressPct: progress >= 90 ? progress : 100,
      });

      if (!validation.allowed) {
        toast.warning(validation.reason || "Ação bloqueada pelas regras antifraude.");
        return;
      }

      const points = feedAntifraud.getRules().pointsPerEducationalQuiz || 5;
      setQuizError(null);
      setQuizSubmitted(true);
      wallet.earn(points, "Desafio Vídeo Protocolo Fibios — Dra. Isabella Formigari");
      feedAntifraud.recordAction("quiz", QUIZ_POST_ID, points);
      toast.success(`🎉 Resposta correta! +${points} netfits creditados na sua carteira digital.`);
    } else {
      setQuizError(option.feedback || "Resposta incorreta. Tente novamente após rever o conceito.");
      toast.error("Resposta incorreta. Tente novamente!");
    }
  };

  return (
    <>
      <article className="px-4 space-y-3.5 min-h-[560px]">
        {/* 1. Header do Especialista */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={draIsabellaAvatar}
              alt="Dra. Isabella Formigari"
              className="size-11 rounded-full object-cover ring-2 ring-purple-500/30 cursor-pointer"
              onClick={handleOpenVideo}
            />
            <div className="cursor-pointer" onClick={handleOpenVideo}>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-zinc-900 leading-tight hover:text-purple-600 transition-colors">
                  Dra. Isabella responde
                </h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-700 text-[10px] font-black uppercase tracking-tight">
                  <Flame className="size-3 text-purple-600 fill-purple-600 animate-pulse" />
                  Vídeo Exclusivo
                </span>
              </div>
              <p className="text-[11px] text-zinc-600 font-medium">
                por Fibios · há 8 horas
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-auto bg-black rounded-lg px-2 py-0.5 flex items-center justify-center border border-zinc-800 shadow-xs">
              <img src={netfitsLogoDark} alt="Netfits" className="h-3.5 w-auto object-contain" />
            </div>
            <button
              type="button"
              onClick={() => toast.info("Publicação oficial curada pela Fibios")}
              className="text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 p-1 rounded-full transition"
              aria-label="Opções"
            >
              <MoreVertical className="size-4" />
            </button>
          </div>
        </div>

        {/* 2. Hero Banner Fotográfico Editorial (4:5 Mobile-First - Padrão Ouro de Poster) */}
        <div
          onClick={handleOpenVideo}
          className="relative overflow-hidden rounded-2xl shadow-md border border-zinc-200 bg-zinc-950 cursor-pointer group active:scale-[0.99] transition-all aspect-[4/5] max-h-[480px]"
          role="button"
          tabIndex={0}
          aria-label="Toque para assistir ao vídeo do Protocolo Fibios"
        >
          <img
            src={draIsabella}
            alt="Dra. Isabella Formigari - Protocolo Fibios"
            className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
            loading="lazy"
          />
          {/* Gradiente Escuro Profundo para Contraste Máximo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/35" />

          {/* Botão de Play Central */}
          <div className="absolute inset-0 grid place-items-center z-10 pointer-events-none">
            <div className="size-16 rounded-full bg-white/95 text-zinc-950 shadow-2xl grid place-items-center ring-4 ring-[#C8F135]/60 group-hover:scale-110 transition-transform">
              <Play className="size-7 ml-1 text-zinc-950 fill-zinc-950" />
            </div>
          </div>

          {/* Conteúdo Editorial Sobreposto */}
          <div className="absolute inset-0 p-5 flex flex-col justify-between text-white z-20 pointer-events-none">
            {/* Topo do Poster */}
            <div className="flex items-center justify-between gap-2">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#C8F135] text-[#202127] text-[10px] font-black uppercase tracking-widest shadow-sm font-mono">
                PROTOCOLO FIBIOS
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold shadow-sm">
                <Play className="size-3 text-[#C8F135] fill-[#C8F135]" />
                <span>Assistir vídeo (4:12)</span>
              </span>
            </div>

            {/* Centro / Título e Subtítulo */}
            <div className="space-y-2 my-auto">
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-md">
                Mesmo atleta amador precisa de acompanhamento médico.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-100 font-medium leading-snug drop-shadow-md line-clamp-3">
                Conheça o Protocolo Fibios: exames, biomarcadores e plano de longevidade para quem treina sério em qualquer nível.
              </p>
            </div>

            {/* Rodapé do Poster: Pílulas Temáticas & Assinatura */}
            <div className="space-y-3">
              <div className="flex flex-wrap gap-1.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-900/90 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white shadow-sm">
                  <HeartPulse className="size-3 text-[#C8F135]" />
                  <span>BIOMARCADORES</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-900/90 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white shadow-sm">
                  <Activity className="size-3 text-[#38BDF8]" />
                  <span>RECUPERAÇÃO CELULAR</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-900/90 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white shadow-sm">
                  <ShieldCheck className="size-3 text-purple-400" />
                  <span>PREVENÇÃO</span>
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1.5 border-t border-white/20">
                <div className="w-1 h-7 bg-[#C8F135] rounded-full shrink-0" />
                <div className="min-w-0">
                  <span className="font-bold text-xs text-white block truncate">
                    Dra. Isabella Formigari
                  </span>
                  <span className="text-[10px] text-zinc-300 block truncate">
                    Médica (CRM-SP 282951) · Sócia Fundadora da Fibios
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Bipartida Institucional Netfits */}
        <div className="h-0.5 w-full rounded-full flex overflow-hidden">
          <div className="w-1/2 bg-[#6B2AD9]" />
          <div className="w-1/2 bg-[#C8F135]" />
        </div>

        {/* Status da Trava Antifraude */}
        {videoQualified ? (
          <div className="p-3 rounded-xl bg-lime-500/10 border border-lime-500/30 text-lime-800 text-xs font-bold flex items-center justify-between shadow-xs">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0 text-lime-600" />
              <span>Vídeo assistido (90%+) · Desafio Quiz liberado</span>
            </span>
            <span className="text-[11px] font-mono text-lime-700">100% ✔</span>
          </div>
        ) : (
          <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 text-xs font-medium flex items-center justify-between shadow-xs">
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-purple-600 shrink-0" />
              <span>Assista 90% do vídeo para liberar o Quiz (+5 netfits)</span>
            </span>
            <span className="font-mono text-purple-700 font-bold">{progress}%</span>
          </div>
        )}

        {/* 3. Módulo Interativo: Desafio Quiz (+5 netfits) */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="size-10 rounded-xl bg-purple-600/10 text-purple-600 grid place-items-center shrink-0">
                <Trophy className="size-5" />
              </div>
              <div>
                <span className="text-[10px] font-black tracking-widest text-purple-600 uppercase block">
                  DESAFIO FIBIOS & NETFITS
                </span>
                <span className="text-xs font-bold text-zinc-900">
                  Protocolo Clínico de Longevidade
                </span>
              </div>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-[#C8F135] text-zinc-950 font-black text-[11px] tracking-tight shadow-xs">
              5 netfits
            </span>
          </div>

          <h4 className="text-sm sm:text-base font-bold text-zinc-900 leading-snug">
            No Protocolo Fibios de longevidade, qual a importância da análise de biomarcadores para quem treina?
          </h4>

          <div className="space-y-2.5">
            {shuffledOptions.map((opt) => {
              const isSelected = selectedOption === opt.id;
              const isFinishedCorrect = quizSubmitted && opt.isCorrect;

              return (
                <button
                  key={opt.id}
                  type="button"
                  disabled={quizSubmitted || !videoQualified}
                  onClick={() => {
                    setSelectedOption(opt.id);
                    setQuizError(null);
                  }}
                  className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center gap-3 cursor-pointer ${
                    isFinishedCorrect
                      ? "bg-lime-500/15 border-lime-500 text-zinc-950 font-semibold"
                      : isSelected
                      ? "bg-lime-50 border-lime-500/80 text-zinc-950 font-semibold shadow-xs"
                      : "bg-zinc-50/90 border-zinc-200 text-zinc-900 hover:border-zinc-300"
                  } ${quizSubmitted || !videoQualified ? "cursor-default" : ""}`}
                >
                  <div
                    className={`size-5 rounded-full border-2 grid place-items-center shrink-0 transition-colors ${
                      isFinishedCorrect || isSelected
                        ? "border-lime-600 bg-lime-500/20"
                        : "border-zinc-400"
                    }`}
                  >
                    {(isFinishedCorrect || isSelected) && (
                      <div className="size-2 rounded-full bg-lime-600" />
                    )}
                  </div>
                  <span className="flex-1 font-medium">{opt.text}</span>
                </button>
              );
            })}
          </div>

          {quizError && (
            <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs animate-in fade-in">
              <AlertCircle className="size-4 shrink-0 mt-0.5" />
              <p>{quizError}</p>
            </div>
          )}

          {!quizSubmitted ? (
            videoQualified ? (
              <button
                type="button"
                onClick={handleQuizSubmit}
                className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 active:scale-[0.99] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-purple-600/20 transition cursor-pointer"
              >
                <span>Responder e conquistar 5 netfits</span>
                <ArrowRight className="size-4" />
              </button>
            ) : (
              <div className="p-3.5 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs flex items-center justify-center gap-2">
                <Lock className="size-4 text-zinc-400" />
                <span>Assista ao menos 90% do vídeo acima para destravar este Desafio (+5 netfits).</span>
              </div>
            )
          ) : (
            <div className="p-3 rounded-xl bg-lime-500/15 border border-lime-500/40 text-zinc-900 flex items-center gap-2.5 animate-in fade-in">
              <CheckCircle2 className="size-5 text-lime-600 shrink-0" />
              <div className="flex-1 text-xs">
                <span className="font-bold text-lime-700 block">
                  Desafio conquistado!
                </span>
                <span className="text-zinc-800 font-medium">+5 netfits foram creditados na sua carteira Netfits.</span>
              </div>
              <Sparkles className="size-4 text-lime-600 shrink-0" />
            </div>
          )}
        </div>

        {/* 4. Pílula de Sabedoria / Takeaway no Rodapé */}
        <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-purple-950 border border-zinc-800 rounded-2xl p-4 text-white flex items-center gap-3.5 shadow-sm">
          <div className="size-9 rounded-full bg-lime-400/10 border border-lime-400/20 grid place-items-center shrink-0">
            <Sparkles className="size-4 text-lime-400" />
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 leading-snug">
            <strong className="text-lime-400 font-semibold block text-[10px] uppercase tracking-wider mb-0.5">
              Pílula de Sabedoria Fibios & Netfits
            </strong>
            "O acompanhamento médico preventivo não é luxo de atleta olímpico: é a chave biológica para treinar sem desgaste celular precoce."
          </p>
        </div>

        {/* 5. Ações Sociais */}
        <FeedSocialActions
          id={VIDEO_POST_ID}
          title="Dra. Isabella Formigari — Protocolo Fibios de Longevidade"
          onOpenArticle={handleOpenVideo}
        />

        {/* Divisor Elegante de Postagem */}
        <div className="h-px bg-zinc-200/80 dark:bg-zinc-800/80 my-4" />
      </article>

      {/* Modal Player com Medição Antifraude 90% */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in"
          onClick={handleClose}
          role="dialog"
          aria-label="Vídeo Dra. Isabella Formigari"
        >
          <div
            className="w-full max-w-md bg-white text-zinc-900 rounded-t-2xl sm:rounded-2xl max-h-[92vh] overflow-y-auto shadow-2xl border border-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Player de Vídeo com Barra de Retenção */}
            <div className="relative">
              <img
                src={draIsabella}
                alt="Dra. Isabella Formigari"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              
              <div className="absolute inset-0 grid place-items-center">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="size-16 rounded-full bg-white/95 grid place-items-center shadow-lg cursor-pointer hover:scale-105 transition"
                  aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                >
                  <Play className={`size-7 ml-0.5 fill-zinc-900 text-zinc-900 ${isPlaying ? "opacity-50" : ""}`} />
                </button>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="absolute top-3 right-3 size-9 rounded-full bg-white/90 text-zinc-900 grid place-items-center cursor-pointer hover:bg-white"
                aria-label="Fechar"
              >
                <X className="size-5" />
              </button>

              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
                4:12
              </span>

              <div className="absolute top-3 left-3 bg-zinc-900/90 text-white border border-purple-500/40 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                <ShieldCheck className="size-3 text-lime-400" />
                <span>Antifraude: 90% Dwell Time</span>
              </div>
            </div>

            {/* Barra de Retenção Visual */}
            <div className="p-4 bg-zinc-50 border-b border-zinc-200 space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-zinc-700">Retenção de Vídeo Auditada:</span>
                <span className="font-mono font-bold text-purple-700">
                  {progress}% {progress >= 90 ? "✔ (Mínimo 90% atingido)" : ""}
                </span>
              </div>

              <div className="h-2.5 w-full bg-zinc-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-600 to-lime-400 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {progress < 90 ? (
                <p className="text-[11px] text-amber-800 font-medium">
                  ⚠️ <b>Regra Antifraude:</b> Assista ao menos 90% do vídeo para validar a retenção e liberar o Quizz (+5 netfits).
                </p>
              ) : (
                <p className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="size-3.5 text-emerald-600" />
                  Parabéns! Retenção de 90% validada e Quizz liberado abaixo!
                </p>
              )}
            </div>

            <div className="p-5 space-y-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand mb-1">
                  Protocolo Fibios · Longevidade
                </p>
                <h3 className="text-lg font-semibold leading-tight mb-1">
                  Dra. Isabella Formigari
                </h3>
                <p className="text-xs text-muted-foreground">
                  Médica (CRM-SP 282951) · Sócia Fundadora da Fibios
                </p>
              </div>

              <p className="text-sm text-foreground text-pretty">
                "Treinar bem é só metade do caminho. O que sustenta o atleta amador a longo prazo
                é entender o próprio corpo — inflamação, sono, hormônios, recuperação. O{" "}
                <strong>Protocolo Fibios</strong> traduz seus exames em um plano vivo de
                longevidade."
              </p>

              <div className="grid grid-cols-3 gap-2">
                <div className="bg-muted rounded-lg p-2 ring-1 ring-black/5 flex flex-col items-center gap-1 text-center">
                  <Activity className="size-4 text-brand" />
                  <span className="text-[10px] font-semibold leading-tight">Performance</span>
                </div>
                <div className="bg-muted rounded-lg p-2 ring-1 ring-black/5 flex flex-col items-center gap-1 text-center">
                  <Heart className="size-4 text-brand" />
                  <span className="text-[10px] font-semibold leading-tight">Cardio & sono</span>
                </div>
                <div className="bg-muted rounded-lg p-2 ring-1 ring-black/5 flex flex-col items-center gap-1 text-center">
                  <ShieldCheck className="size-4 text-brand" />
                  <span className="text-[10px] font-semibold leading-tight">Prevenção</span>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-3 ring-1 ring-black/5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                  Inclui no protocolo
                </p>
                <ul className="text-xs text-foreground space-y-1">
                  <li>· Painel completo de biomarcadores</li>
                  <li>· Avaliação cardiorrespiratória e composição corporal</li>
                  <li>· Plano individual de suplementação e recuperação</li>
                  <li>· Acompanhamento trimestral com a equipe Fibios</li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  toast.success("Redirecionando para agendamento do Protocolo Fibios...");
                }}
                className="w-full bg-brand text-brand-foreground text-sm font-bold py-3 rounded-full cursor-pointer hover:opacity-90 transition"
              >
                Agendar avaliação Fibios
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
