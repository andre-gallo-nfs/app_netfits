import { useState } from "react";
import { X, Watch, Activity, Moon, HeartPulse, Check, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

type Wearable = {
  id: string;
  name: string;
  brand: string;
  initials: string;
  color: string;
  fg: string;
};

const WEARABLES: Wearable[] = [
  { id: "apple", name: "Apple Watch", brand: "Apple Health", initials: "", color: "#000000", fg: "#ffffff" },
  { id: "garmin", name: "Garmin", brand: "Garmin Connect", initials: "Gn", color: "#000000", fg: "#00A6E0" },
  { id: "whoop", name: "Whoop", brand: "Whoop 4.0 / MG", initials: "Wh", color: "#0A0A0A", fg: "#ffffff" },
  { id: "oura", name: "Oura Ring", brand: "Oura Cloud", initials: "Ou", color: "#1A1A1A", fg: "#D4AF7A" },
  { id: "fitbit", name: "Fitbit", brand: "Google Fitbit", initials: "Fb", color: "#00B0B9", fg: "#ffffff" },
  { id: "samsung", name: "Galaxy Watch", brand: "Samsung Health", initials: "Sm", color: "#1428A0", fg: "#ffffff" },
  { id: "polar", name: "Polar", brand: "Polar Flow", initials: "Po", color: "#E2231A", fg: "#ffffff" },
  { id: "coros", name: "Coros", brand: "Coros App", initials: "Co", color: "#F04E23", fg: "#ffffff" },
  { id: "suunto", name: "Suunto", brand: "Suunto App", initials: "Su", color: "#000000", fg: "#ffffff" },
  { id: "amazfit", name: "Amazfit", brand: "Zepp Health", initials: "Az", color: "#FF3C28", fg: "#ffffff" },
  { id: "xiaomi", name: "Xiaomi Mi Band", brand: "Mi Fitness", initials: "Mi", color: "#FF6900", fg: "#ffffff" },
  { id: "strava", name: "Strava", brand: "Strava API", initials: "St", color: "#FC4C02", fg: "#ffffff" },
  { id: "google", name: "Google Fit", brand: "Health Connect", initials: "GF", color: "#4285F4", fg: "#ffffff" },
];

const BENEFITS = [
  { icon: Activity, label: "Atividade esportiva", desc: "Corrida, ciclismo, treino de força e mais", value: "+10 nfs/dia" },
  { icon: Moon, label: "Sono", desc: "Duração, qualidade e estágios do sono", value: "+10 nfs/dia" },
  { icon: HeartPulse, label: "Dados de saúde", desc: "FC, HRV, SpO₂, temperatura e recovery", value: "+10 nfs/dia" },
];

export function WearableSyncSheet({ onClose }: { onClose: () => void }) {
  const [connectedId, setConnectedId] = useState<string | null>(null);
  const [pendingId, setPendingId] = useState<string | null>(null);

  const connect = (id: string) => {
    setPendingId(id);
    setTimeout(() => {
      setConnectedId(id);
      setPendingId(null);
    }, 900);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-end justify-center"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white text-zinc-900 rounded-t-3xl max-h-[92vh] flex flex-col shadow-2xl border-t border-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3 shrink-0">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-brand/15 grid place-items-center">
              <Watch className="size-4 text-brand" />
            </div>
            <h2 className="text-base font-semibold">Sincronizar wearable</h2>
          </div>
          <button
            onClick={onClose}
            className="size-8 rounded-full bg-muted grid place-items-center"
            aria-label="Fechar"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="overflow-y-auto px-5 pb-6">
          {/* Hero benefits */}
          <div className="bg-foreground text-background rounded-2xl p-5 relative overflow-hidden">
            <span className="inline-block px-2 py-0.5 rounded bg-brand text-brand-foreground text-[10px] font-bold uppercase tracking-widest mb-3">
              Ganhos diários
            </span>
            <h3 className="text-xl font-semibold leading-tight text-balance mb-1">
              Até <span className="text-brand">30 nfs</span> por dia
            </h3>
            <p className="text-xs text-zinc-400 mb-4">
              ≈ <span className="font-semibold text-background">1.000 nfs/mês</span> apenas sincronizando seu wearable.
            </p>

            <ul className="space-y-2">
              {BENEFITS.map((b) => (
                <li
                  key={b.label}
                  className="bg-background/10 rounded-xl p-3 flex items-start gap-3 ring-1 ring-white/5"
                >
                  <div className="size-8 rounded-lg bg-brand/20 grid place-items-center shrink-0">
                    <b.icon className="size-4 text-brand" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold leading-tight">{b.label}</p>
                      <span className="text-[11px] font-bold text-brand whitespace-nowrap">
                        {b.value}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-snug mt-0.5">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="absolute right-[-10%] bottom-[-30%] w-48 h-48 bg-brand/20 blur-3xl rounded-full" />
          </div>

          {/* Privacidade */}
          <div className="mt-4 bg-muted rounded-xl p-3 flex items-start gap-2.5 ring-1 ring-black/5">
            <ShieldCheck className="size-4 text-brand shrink-0 mt-0.5" />
            <p className="text-[11px] text-muted-foreground leading-snug">
              Seus dados são criptografados e usados apenas para calcular netfits. Você pode revogar o acesso a qualquer momento.
            </p>
          </div>

          {/* Lista de wearables */}
          <div className="mt-5 flex items-center justify-between">
            <h3 className="text-sm font-semibold">Escolha seu dispositivo</h3>
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              {WEARABLES.length} opções
            </span>
          </div>

          <ul className="mt-3 space-y-2">
            {WEARABLES.map((w) => {
              const isConnected = connectedId === w.id;
              const isPending = pendingId === w.id;
              const isDisabled = !!connectedId && !isConnected;
              return (
                <li key={w.id}>
                  <button
                    type="button"
                    disabled={isDisabled || isPending}
                    onClick={() => !isConnected && connect(w.id)}
                    className={`w-full rounded-2xl p-3 ring-1 flex items-center gap-3 transition ${
                      isConnected
                        ? "bg-brand/10 ring-brand/40"
                        : "bg-card ring-black/5 active:scale-[0.99]"
                    } ${isDisabled ? "opacity-40" : ""}`}
                  >
                    <div
                      className="size-11 rounded-xl grid place-items-center text-sm font-bold shrink-0"
                      style={{ background: w.color, color: w.fg }}
                    >
                      {w.initials || <Watch className="size-5" />}
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <p className="text-sm font-semibold leading-tight truncate">{w.name}</p>
                      <p className="text-[11px] text-muted-foreground truncate">{w.brand}</p>
                    </div>
                    {isConnected ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand">
                        <Check className="size-3.5" /> Conectado
                      </span>
                    ) : isPending ? (
                      <span className="text-[11px] font-semibold text-muted-foreground">
                        Conectando…
                      </span>
                    ) : (
                      <ArrowRight className="size-4 text-muted-foreground shrink-0" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Footer CTA */}
          {connectedId && (
            <div className="mt-5 bg-brand/10 ring-1 ring-brand/40 rounded-2xl p-4 flex items-start gap-3">
              <Sparkles className="size-4 text-brand shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-semibold leading-tight">
                  Sincronia ativada!
                </p>
                <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">
                  A partir de amanhã você começa a acumular até 30 nfs por dia automaticamente.
                </p>
                <button
                  onClick={onClose}
                  className="mt-3 bg-brand text-brand-foreground text-xs font-bold py-2 px-4 rounded-full"
                >
                  Concluir
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
