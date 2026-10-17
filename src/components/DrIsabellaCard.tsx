import { useState, useEffect } from "react";
import { Play, X, ShieldCheck, Heart, Activity, CheckCircle2, Clock, Sparkles, Trophy, ArrowRight, AlertCircle, Lock } from "lucide-react";
import draIsabella from "@/assets/dra-isabella.jpeg";
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
    text: "Mapear biomarcadores, inflamação e recuperação celular para guiar treino e longevidade.",
    isCorrect: true,
    feedback: "Exato! O Protocolo Fibios correlaciona dados laboratoriais à rotina de treino para proteger a saúde a longo prazo.",
  },
  {
    id: "proto-opt-2",
    text: "Treinar sempre na carga máxima sem exames preventivos.",
    isCorrect: false,
    feedback: "Cargas sem monitoramento clínico elevam drasticamente o risco de lesões e sobrecarga cardiovascular.",
  },
  {
    id: "proto-opt-3",
    text: "Apenas registrar o peso na balança sem avaliar perfil metabólico.",
    isCorrect: false,
    feedback: "Peso isolado não reflete inflamação subclínica, perfil hormonal nem saúde mitocondrial.",
  },
];

export function DrIsabellaCard() {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [videoQualified, setVideoQualified] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("proto-opt-1");
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizError, setQuizError] = useState<string | null>(null);

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
      // O vídeo em si não gera pontos diretamente, mas habilita o Quizz
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
      toast.info("Você já concluiu este desafio!");
      return;
    }

    if (!videoQualified) {
      toast.warning("🚫 Regra Antifraude: Assista ao menos 90% do vídeo acima para habilitar o Quizz.");
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
      toast.success(`🎉 Resposta correta! +${points} NFs creditados na sua carteira.`);
    } else {
      setQuizError(option.feedback || "Resposta incorreta. Tente novamente após rever o conceito.");
      toast.error("Resposta incorreta. Tente novamente!");
    }
  };

  return (
    <article className="px-4 space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Parceiro · Saúde & Longevidade (Fibios)
        </span>
      </div>

      <button
        type="button"
        onClick={handleOpenVideo}
        className="block w-full text-left active:scale-[0.99] transition-transform cursor-pointer"
      >
        <div className="relative mb-3">
          <img
            src={draIsabella}
            alt="Dra. Isabella Formigari"
            loading="lazy"
            className="w-full aspect-[4/5] object-cover rounded-xl ring-1 ring-black/5"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-xl" />

          <span className="absolute top-3 left-3 bg-brand text-brand-foreground text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
            Protocolo Fibios
          </span>

          <div className="absolute inset-0 grid place-items-center">
            <div className="size-16 rounded-full bg-background/95 ring-1 ring-black/10 grid place-items-center shadow-lg group-hover:scale-105 transition-transform">
              <Play className="size-7 ml-0.5 fill-foreground text-foreground" />
            </div>
          </div>

          <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
            4:12
          </span>

          <div className="absolute bottom-3 left-3 right-3 text-white">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-90">
              Dra. Isabella Formigari
            </p>
            <p className="text-xs opacity-80">Médica · Pós Graduação em Medicina do Esporte (Einstein SP) · CRM-SP 282951</p>
          </div>
        </div>

        <h2 className="text-lg font-semibold leading-tight text-balance mb-1">
          Mesmo atleta amador precisa de acompanhamento médico.
        </h2>
        <p className="text-sm text-muted-foreground text-pretty mb-3">
          Conheça o <strong className="text-foreground">Protocolo Fibios</strong> — exames,
          biomarcadores e plano de longevidade para quem treina sério, em qualquer nível.
        </p>
      </button>

      {/* Status da Trava Antifraude */}
      {videoQualified ? (
        <div className="p-2.5 rounded-xl bg-lime-500/10 border border-lime-500/30 text-lime-700 text-xs font-bold flex items-center justify-between">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="size-4 shrink-0 text-lime-600" />
            <span>Vídeo assistido (90%+) · Quizz liberado</span>
          </span>
          <span className="text-[11px] font-mono text-lime-700">100%</span>
        </div>
      ) : (
        <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 text-[11px] font-medium flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="size-4 text-purple-600 shrink-0" />
            <span>Regra Antifraude: Assista 90% do vídeo para liberar o Quizz</span>
          </span>
          <span className="font-mono text-purple-700 font-bold">{progress}%</span>
        </div>
      )}

      <button
        type="button"
        onClick={handleOpenVideo}
        className="w-full bg-zinc-900 text-white text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-2 cursor-pointer transition hover:bg-zinc-800"
      >
        <Play className="size-4 fill-white" />
        {videoQualified ? "Reassistir vídeo · 4:12" : "Assistir vídeo · 4:12 (Habilita Quizz +5 nfs)"}
      </button>

      {/* Módulo do Quizz do Protocolo Fibios (5 NFs) */}
      <div className="bg-white border border-zinc-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="size-9 rounded-xl bg-purple-600/10 text-purple-600 grid place-items-center shrink-0">
              <Trophy className="size-4.5" />
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
          <span className="px-2.5 py-0.5 rounded-full bg-[#C8FF00] text-zinc-950 font-black text-[11px] tracking-tight shadow-xs">
            5 NFs
          </span>
        </div>

        {/* Pergunta */}
        <h4 className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug">
          No Protocolo Fibios de longevidade, qual a importância da análise de biomarcadores para quem treina?
        </h4>

        {/* Lista de Alternativas */}
        <div className="space-y-2">
          {PROTOCOLO_QUIZ_OPTIONS.map((opt) => {
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
                  className={`size-4 rounded-full border-2 grid place-items-center shrink-0 ${
                    isFinishedCorrect || isSelected
                      ? "border-lime-600 bg-lime-500/20"
                      : "border-zinc-400"
                  }`}
                >
                  {(isFinishedCorrect || isSelected) && (
                    <div className="size-1.5 rounded-full bg-lime-600" />
                  )}
                </div>
                <span className="flex-1 text-zinc-900 font-medium leading-snug">{opt.text}</span>
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
              <span>Responder e conquistar 5 NFs</span>
              <ArrowRight className="size-4" />
            </button>
          ) : (
            <div className="p-3 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs flex items-center justify-center gap-2">
              <Lock className="size-4 text-zinc-400" />
              <span>Assista ao menos 90% do vídeo acima para desbloquear este Desafio (+5 NFs).</span>
            </div>
          )
        ) : (
          <div className="p-3 rounded-xl bg-lime-500/15 border border-lime-500/40 text-zinc-900 flex items-center gap-2.5 animate-in fade-in">
            <CheckCircle2 className="size-5 text-lime-600 shrink-0" />
            <div className="flex-1 text-xs">
              <span className="font-bold text-lime-700 block">
                Desafio conquistado!
              </span>
              <span className="text-zinc-800 font-medium">+5 NFs foram creditados na sua carteira Netfits.</span>
            </div>
            <Sparkles className="size-4 text-lime-600 shrink-0" />
          </div>
        )}
      </div>

      {/* Ações Sociais: Curtir, Compartilhar (+1 nf), Salvar */}
      <FeedSocialActions
        id={VIDEO_POST_ID}
        title="Dra. Isabella Formigari — Protocolo Fibios de Longevidade"
        onOpenArticle={handleOpenVideo}
      />

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
                  ⚠️ <b>Regra Antifraude:</b> Assista ao menos 90% do vídeo para validar a retenção e liberar o Quizz (+5 NFs).
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
                  Médica · Pós Graduação em Medicina do Esporte (Einstein SP) · CRM-SP 282951
                </p>
              </div>

              <p className="text-sm text-foreground text-pretty">
                "Treinar bem é só metade do caminho. O que sustenta o atleta amador a longo prazo
                é entender o próprio corpo — inflamação, sono, hormônios, recuperação. O{" "}
                <strong>Protocolo Fibios</strong> traduz seus exames em um plano vivo de
                longevidade."
              </p>

              <div className="grid grid-cols-3 gap-2">
                <PillarStat icon={<Activity className="size-4" />} label="Performance" />
                <PillarStat icon={<Heart className="size-4" />} label="Cardio & sono" />
                <PillarStat icon={<ShieldCheck className="size-4" />} label="Prevenção" />
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
    </article>
  );
}

function PillarStat({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="bg-muted rounded-lg p-2 ring-1 ring-black/5 flex flex-col items-center gap-1 text-center">
      <span className="text-brand">{icon}</span>
      <span className="text-[10px] font-semibold leading-tight">{label}</span>
    </div>
  );
}
