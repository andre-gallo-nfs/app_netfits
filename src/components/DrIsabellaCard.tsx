import { useState, useEffect } from "react";
import { Play, X, ShieldCheck, Heart, Activity, CheckCircle2, Clock, Sparkles } from "lucide-react";
import draIsabella from "@/assets/dra-isabella.jpeg";
import { wallet } from "@/lib/wallet-store";
import { feedAntifraud } from "@/lib/feed-antifraud";
import { toast } from "sonner";

const VIDEO_STORAGE_KEY = "netfits_video_isabella_protocolo_rewarded";

export function DrIsabellaCard() {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [rewarded, setRewarded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem(VIDEO_STORAGE_KEY) === "true") {
        setRewarded(true);
        setIsCompleted(true);
        setProgress(100);
      }
    }
  }, []);

  // Simulação realista de reprodução de vídeo com medição de retenção antifraude
  useEffect(() => {
    let timer: any = null;
    if (open && isPlaying && progress < 100) {
      timer = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 5;
          if (next >= 90 && !rewarded) {
            handleQualifyReward(next);
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
  }, [open, isPlaying, progress, rewarded]);

  const handleQualifyReward = (currentProgress: number) => {
    const validation = feedAntifraud.validateAction("video_view", "isabella-video-protocolo", {
      videoProgressPct: currentProgress,
    });

    if (validation.allowed) {
      setRewarded(true);
      setIsCompleted(true);
      if (typeof window !== "undefined") {
        localStorage.setItem(VIDEO_STORAGE_KEY, "true");
      }
      const points = feedAntifraud.getRules().pointsPerVideo;
      wallet.earn(points, "Visualização de Vídeo (90%+ de Retenção): Protocolo Fibios — Dra. Isabella");
      feedAntifraud.recordAction("video_view", "isabella-video-protocolo", points);
      toast.success(`🎉 Regra Antifraude Aprovada: 90% do vídeo assistido! (+${points} nfs creditados)`);
    } else if (validation.reason) {
      toast.warning(validation.reason);
    }
  };

  const handleOpenVideo = () => {
    setOpen(true);
    setIsPlaying(true);
  };

  const handleClose = () => {
    if (!rewarded && progress < 90) {
      toast.error(
        "🚫 Antifraude Netfits: Premiação cancelada. É obrigatório assistir ao menos 90% do vídeo para pontuar."
      );
    }
    setOpen(false);
    setIsPlaying(false);
  };

  return (
    <article className="px-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Parceiro · Saúde & Longevidade
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

      {/* Status da Trava Antifraude no Card */}
      {rewarded ? (
        <div className="mb-3 p-2.5 rounded-xl bg-lime-500/10 border border-lime-500/30 text-lime-600 dark:text-lime-400 text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="size-4 shrink-0" />
          <span>Vídeo assistido (90%+ de retenção) — +10 nfs creditados</span>
        </div>
      ) : (
        <div className="mb-3 p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300 text-[11px] font-medium flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="size-4 text-lime-400 shrink-0" />
            <span>Regra Antifraude: Assista 90% do vídeo para receber +10 nfs</span>
          </span>
          <span className="font-mono text-lime-400 font-bold">{progress}%</span>
        </div>
      )}

      <button
        type="button"
        onClick={handleOpenVideo}
        className="w-full bg-foreground text-background text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-2 cursor-pointer transition hover:opacity-90"
      >
        <Play className="size-4 fill-background" />
        Assistir vídeo · 4:12 (+10 nfs)
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in"
          onClick={handleClose}
          role="dialog"
          aria-label="Vídeo Dra. Isabella Formigari"
        >
          <div
            className="w-full max-w-md bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-t-2xl sm:rounded-2xl max-h-[92vh] overflow-y-auto shadow-2xl border border-zinc-200 dark:border-zinc-800"
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
                  className="size-16 rounded-full bg-background/95 grid place-items-center shadow-lg cursor-pointer hover:scale-105 transition"
                  aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                >
                  <Play className={`size-7 ml-0.5 fill-foreground text-foreground ${isPlaying ? "opacity-50" : ""}`} />
                </button>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="absolute top-3 right-3 size-9 rounded-full bg-background/90 grid place-items-center cursor-pointer"
                aria-label="Fechar"
              >
                <X className="size-5" />
              </button>

              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
                4:12
              </span>

              {/* Tag Antifraude no Player */}
              <div className="absolute top-3 left-3 bg-zinc-900/90 text-white border border-purple-500/40 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                <ShieldCheck className="size-3 text-lime-400" />
                <span>Antifraude: 90% Dwell Time</span>
              </div>
            </div>

            {/* Barra de Retenção Visual */}
            <div className="p-4 bg-zinc-100 dark:bg-zinc-800/80 border-b border-zinc-200 dark:border-zinc-700/60 space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-zinc-600 dark:text-zinc-300">Retenção de Vídeo Auditada:</span>
                <span className="font-mono font-bold text-purple-600 dark:text-lime-400">
                  {progress}% {progress >= 90 ? "✔ (Mínimo 90% atingido)" : ""}
                </span>
              </div>

              <div className="h-2.5 w-full bg-zinc-300 dark:bg-zinc-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-600 to-lime-400 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {progress < 90 ? (
                <p className="text-[11px] text-amber-700 dark:text-amber-400 font-medium">
                  ⚠️ <b>Regra Antifraude:</b> Assista ao menos 90% do vídeo para validar a retenção e liberar os 10 nfs.
                </p>
              ) : (
                <p className="text-[11px] text-lime-600 dark:text-lime-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="size-3.5" />
                  Parabéns! Retenção de 90% validada e +10 nfs creditados com sucesso.
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
              <p className="text-[10px] text-center text-muted-foreground">
                Cashback Netfits em consultas · 5% nfs
              </p>
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
