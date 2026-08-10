import { useEffect, useRef, useState } from "react";
import { Play, X, Check, Share2, Gift, Sparkles } from "lucide-react";
import asicsHero from "@/assets/asics-novablast.jpg";
import { wallet } from "@/lib/wallet-store";

const CHANNELS = [
  { key: "ig", label: "Instagram", color: "bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600" },
  { key: "wpp", label: "WhatsApp", color: "bg-[#25D366]" },
  { key: "tt", label: "TikTok", color: "bg-black" },
  { key: "x", label: "X", color: "bg-black" },
  { key: "fb", label: "Facebook", color: "bg-[#1877F2]" },
  { key: "tg", label: "Telegram", color: "bg-[#229ED9]" },
];

export function SponsorCard() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [watched, setWatched] = useState(false);
  const [progress, setProgress] = useState(0);
  const [shareOpen, setShareOpen] = useState(false);
  const [shared, setShared] = useState<string[]>([]);
  const [bonus, setBonus] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (!videoOpen) return;
    setProgress(0);
    const start = Date.now();
    const tick = () => {
      const elapsed = (Date.now() - start) / 1000;
      const pct = Math.min(100, (elapsed / 30) * 100);
      setProgress(pct);
      if (pct >= 100) {
        setWatched((prev) => {
          if (!prev) wallet.earn(10, "Assistiu filme ASICS Novablast™ 5");
          return true;
        });
        return;
      }
      timer.current = window.setTimeout(tick, 100);
    };
    tick();
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [videoOpen]);

  const handleShare = (key: string) => {
    if (!shared.includes(key)) {
      const next = [...shared, key];
      setShared(next);
      if (!bonus) {
        setBonus(true);
        wallet.earn(10, "Compartilhou filme ASICS Novablast™ 5");
      }
    }
  };

  return (
    <section className="px-4 pb-4">
      <div className="rounded-[20px] overflow-hidden ring-1 ring-black/5 bg-card">
        {/* Sponsor strip */}
        <div className="flex items-center justify-end px-4 py-2.5 bg-[#0A1A4F] text-white">
          <div className="flex items-center gap-2">
            <AsicsLogo className="h-3.5 w-auto text-white" />
            <span className="text-[9px] font-semibold tracking-[0.2em] text-white/70 uppercase hidden sm:inline">
              Sound Mind, Sound Body
            </span>
          </div>
        </div>

        {/* Video poster */}
        <button
          onClick={() => setVideoOpen(true)}
          className="block w-full text-left relative active:scale-[0.99] transition-transform"
        >
          <div className="aspect-video w-full relative overflow-hidden bg-[#0A1A4F]">
            <img
              src={asicsHero}
              alt="Campanha ASICS Novablast 5"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute top-3 left-3 flex items-center gap-1.5">
              <span className="bg-white text-[#0A1A4F] text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                Filme · 30s
              </span>
              {watched && (
                <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded flex items-center gap-1">
                  <Check className="size-3" /> Assistido
                </span>
              )}
            </div>
            <div className="absolute top-3 right-3 bg-[#0A1A4F]/85 rounded px-1.5 py-1">
              <AsicsLogo className="h-3.5 w-auto text-white" />
            </div>
            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                Novablast™ 5
              </p>
              <p className="text-2xl font-black leading-tight text-white text-balance drop-shadow">
                Sinta o conforto, encontre a energia.
              </p>
            </div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="size-16 rounded-full bg-white/95 ring-1 ring-black/10 grid place-items-center shadow-xl">
                <Play className="size-7 ml-1 fill-[#0A1A4F] text-[#0A1A4F]" />
              </div>
            </div>
          </div>
        </button>

        {/* Body */}
        <div className="p-4">
          <h2 className="text-lg font-semibold leading-tight text-balance mb-1">
            Assista ao novo filme da ASICS e ganhe netfits.
          </h2>
          <p className="text-sm text-muted-foreground text-pretty mb-4">
            30 segundos da campanha Novablast™ 5 — mais energia para movimentar corpo e mente. Assista, compartilhe e acumule.
          </p>

          {/* Rewards */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div
              className={`rounded-xl p-3 ring-1 transition-colors ${
                watched ? "bg-brand/10 ring-brand/30" : "bg-muted ring-black/5"
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <Play className="size-3.5 text-brand" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Assistir
                </span>
              </div>
              <p className="text-sm font-bold">
                +10 <span className="text-brand">nfs</span>
              </p>
              {watched && (
                <p className="text-[10px] text-emerald-600 font-semibold mt-0.5 flex items-center gap-1">
                  <Check className="size-3" /> Creditados
                </p>
              )}
            </div>
            <div
              className={`rounded-xl p-3 ring-1 transition-colors ${
                bonus ? "bg-brand/10 ring-brand/30" : "bg-muted ring-black/5"
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <Share2 className="size-3.5 text-brand" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Compartilhar
                </span>
              </div>
              <p className="text-sm font-bold">
                +10 <span className="text-brand">nfs</span>
              </p>
              {bonus && (
                <p className="text-[10px] text-emerald-600 font-semibold mt-0.5 flex items-center gap-1">
                  <Check className="size-3" /> Bônus liberado
                </p>
              )}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex gap-2">
            <button
              onClick={() => setVideoOpen(true)}
              className="flex-1 bg-foreground text-background text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-2 active:scale-95"
            >
              <Play className="size-4 fill-current" />
              {watched ? "Assistir novamente" : "Assistir · 30s"}
            </button>
            <button
              onClick={() => setShareOpen(true)}
              disabled={!watched}
              className="flex-1 bg-brand text-brand-foreground text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-2 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Share2 className="size-4" />
              Compartilhar
            </button>
          </div>
          {!watched && (
            <p className="text-[10px] text-muted-foreground mt-2 text-center">
              Assista o filme completo para liberar o compartilhamento.
            </p>
          )}
        </div>
      </div>

      {/* Video modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="w-full max-w-md bg-black rounded-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-3 right-3 z-10 size-9 rounded-full bg-white/15 grid place-items-center text-white"
              aria-label="Fechar"
            >
              <X className="size-4" />
            </button>
            <div className="aspect-video w-full relative overflow-hidden bg-[#0A1A4F]">
              <img
                src={asicsHero}
                alt="Campanha ASICS Novablast 5"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute bottom-6 left-5 right-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                  Novablast™ 5
                </p>
                <p className="text-3xl font-black leading-tight text-white drop-shadow">
                  Sinta o conforto, encontre a energia.
                </p>
                <p className="text-sm font-semibold text-white/80 mt-1">
                  Apresentado por ASICS
                </p>
              </div>
              <div className="absolute top-3 right-3 bg-[#0A1A4F]/85 rounded px-2 py-1">
                <AsicsLogo className="h-4 w-auto text-white" />
              </div>
              <div className="absolute top-3 left-3">
                <span className="bg-white/95 text-[#0A1A4F] text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                  {Math.min(30, Math.round((progress / 100) * 30))}s / 30s
                </span>
              </div>
            </div>
            {/* progress bar */}
            <div className="h-1 w-full bg-white/10">
              <div
                className="h-full bg-brand transition-[width] duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="p-4 bg-zinc-950 text-white">
              {watched ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-9 rounded-full bg-brand grid place-items-center text-brand-foreground">
                      <Sparkles className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">+10 nfs creditados!</p>
                      <p className="text-[11px] text-white/60">Compartilhe e ganhe +10</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setVideoOpen(false);
                      setTimeout(() => setShareOpen(true), 150);
                    }}
                    className="bg-brand text-brand-foreground text-xs font-bold px-4 py-2 rounded-full"
                  >
                    Compartilhar
                  </button>
                </div>
              ) : (
                <p className="text-xs text-white/70">
                  Assistindo… continue até o fim para ganhar 10 nfs.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Share modal */}
      {shareOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 flex items-end justify-center"
          onClick={() => setShareOpen(false)}
        >
          <div
            className="w-full max-w-md bg-background rounded-t-2xl p-5 pb-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-semibold">Compartilhar o filme</h3>
              <button
                onClick={() => setShareOpen(false)}
                className="size-8 rounded-full bg-muted grid place-items-center"
                aria-label="Fechar"
              >
                <X className="size-4" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Poste em qualquer rede e ganhe <span className="text-brand font-bold">+10 nfs</span>{" "}
              (bônus único por filme).
            </p>

            <div className="grid grid-cols-4 gap-3 mb-4">
              {CHANNELS.map((c) => {
                const done = shared.includes(c.key);
                return (
                  <button
                    key={c.key}
                    onClick={() => handleShare(c.key)}
                    className="flex flex-col items-center gap-1.5 active:scale-95"
                  >
                    <div
                      className={`size-12 rounded-full ${c.color} grid place-items-center text-white relative ring-1 ring-black/5`}
                    >
                      <span className="text-xs font-bold">{c.label[0]}</span>
                      {done && (
                        <span className="absolute -bottom-0.5 -right-0.5 size-4 rounded-full bg-emerald-500 ring-2 ring-background grid place-items-center">
                          <Check className="size-2.5 text-white" />
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-muted-foreground">{c.label}</span>
                  </button>
                );
              })}
            </div>

            {bonus && (
              <div className="rounded-xl bg-brand/10 ring-1 ring-brand/30 p-3 flex items-center gap-2 mb-3">
                <Gift className="size-4 text-brand" />
                <p className="text-xs font-semibold">
                  Bônus de +10 nfs creditado pelo compartilhamento!
                </p>
              </div>
            )}

            <button
              onClick={() => setShareOpen(false)}
              className="w-full bg-foreground text-background text-xs font-bold py-2.5 rounded-full"
            >
              Pronto
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function AsicsLogo({ className }: { className?: string }) {
  // Stylized ASICS wordmark in italic, evoking the brand's signature look.
  return (
    <svg
      viewBox="0 0 120 24"
      className={className}
      aria-label="ASICS"
      role="img"
      fill="currentColor"
    >
      <text
        x="0"
        y="19"
        fontFamily="Helvetica, Arial, sans-serif"
        fontSize="22"
        fontWeight="900"
        fontStyle="italic"
        letterSpacing="1"
      >
        ASICS
      </text>
    </svg>
  );
}
