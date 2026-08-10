import { useState } from "react";
import { Check, Link2, Sparkles, X } from "lucide-react";
import smartfitLogo from "@/assets/smartfit-logo.svg";

const MENSALIDADE = 109.9;

export function SmartFitCard() {
  const [open, setOpen] = useState(false);
  const [linked, setLinked] = useState(false);
  const [requesting, setRequesting] = useState(false);

  const nfsPerMonth = Math.round(MENSALIDADE);

  const handleRequest = () => {
    if (linked || requesting) return;
    setRequesting(true);
    setTimeout(() => {
      setRequesting(false);
      setLinked(true);
    }, 1200);
  };

  return (
    <article className="px-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Parceiro · Rede de academias
        </span>
      </div>

      <div className="rounded-2xl overflow-hidden ring-1 ring-black/5 bg-card">
        <div className="relative bg-black p-5 overflow-hidden">
          <div className="absolute inset-y-0 right-0 w-1.5 bg-[#FBBA00]" />
          <div className="absolute -right-10 -bottom-10 size-44 rounded-full bg-[#FBBA00]/10 blur-2xl" />
          <div className="relative flex items-start justify-between gap-3">
            <div>
              <img
                src={smartfitLogo}
                alt="Smart Fit"
                className="h-8 w-auto mb-3"
              />
              <h2 className="text-2xl font-extrabold leading-tight text-white text-balance">
                1 nf por real <br />da <span className="text-[#FBBA00]">mensalidade</span>.
              </h2>
              <p className="text-xs text-white/70 mt-2 max-w-[28ch]">
                Vincule sua matrícula uma vez. Cada mensalidade paga vira netfits, automaticamente.
              </p>
            </div>
            <div className="shrink-0 bg-[#FBBA00] text-black text-[10px] font-extrabold uppercase tracking-widest px-2 py-1 rounded">
              Parceiro
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-3 gap-2 mb-4">
            <Stat value="1:1" label="real → nf" />
            <Stat value={`+${nfsPerMonth}`} label="nfs / mês" />
            <Stat value="Auto" label="recorrente" />
          </div>

          <ol className="space-y-2 mb-5">
            <Step n={1} text="Solicite o vínculo da sua matrícula." done={linked} />
            <Step n={2} text="Pague a mensalidade como sempre." done={false} />
            <Step n={3} text="Receba os nfs no mesmo dia da fatura." done={false} />
          </ol>

          <button
            onClick={() => setOpen(true)}
            className={`w-full text-sm font-bold py-3 rounded-full flex items-center justify-center gap-2 ${
              linked
                ? "bg-emerald-500 text-white"
                : "bg-foreground text-background"
            }`}
          >
            {linked ? (
              <>
                <Check className="size-4" />
                Matrícula vinculada
              </>
            ) : (
              <>
                <Link2 className="size-4" />
                Solicitar vínculo da matrícula
              </>
            )}
          </button>
          <p className="text-[10px] text-center text-muted-foreground mt-2">
            Funciona em qualquer unidade Smart Fit do Brasil.
          </p>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-end sm:items-center justify-center"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-label="Vincular Smart Fit"
        >
          <div
            className="w-full max-w-md bg-background rounded-t-2xl sm:rounded-2xl max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-black/5">
              <div className="flex items-center gap-2">
                <div className="h-9 px-2 rounded bg-black grid place-items-center">
                  <img src={smartfitLogo} alt="Smart Fit" className="h-4 w-auto" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Parceiro
                  </p>
                  <p className="text-sm font-semibold leading-none">Smart Fit</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="size-9 rounded-full bg-muted grid place-items-center"
                aria-label="Fechar"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="p-5">
              <div className="bg-black rounded-xl p-4 mb-4 text-white relative overflow-hidden">
                <div className="absolute inset-y-0 right-0 w-1.5 bg-[#FBBA00]" />
                <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest mb-1 text-[#FBBA00]">
                  <Sparkles className="size-3" />
                  Recompensa
                </div>
                <p className="text-2xl font-extrabold leading-tight">
                  1 nf por <span className="text-[#FBBA00]">real pago</span>
                </p>
                <p className="text-xs text-white/70 mt-1">
                  Acumulado em toda mensalidade confirmada.
                </p>
              </div>

              {!linked ? (
                <>
                  <label className="block text-xs font-semibold mb-1.5">
                    CPF do titular da matrícula
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="000.000.000-00"
                    className="w-full bg-muted ring-1 ring-black/5 rounded-lg px-3 py-2.5 text-sm mb-3 outline-none focus:ring-foreground"
                  />
                  <label className="block text-xs font-semibold mb-1.5">
                    Número da matrícula Smart Fit
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Ex.: 8821-7"
                    className="w-full bg-muted ring-1 ring-black/5 rounded-lg px-3 py-2.5 text-sm mb-3 outline-none focus:ring-foreground"
                  />
                  <label className="block text-xs font-semibold mb-1.5">
                    Unidade
                  </label>
                  <select
                    className="w-full bg-muted ring-1 ring-black/5 rounded-lg px-3 py-2.5 text-sm mb-4 outline-none focus:ring-foreground"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione sua unidade
                    </option>
                    <option>Smart Fit Faria Lima</option>
                    <option>Smart Fit Paulista</option>
                    <option>Smart Fit Vila Mariana</option>
                    <option>Smart Fit Pinheiros</option>
                  </select>

                  <button
                    onClick={handleRequest}
                    disabled={requesting}
                    className="w-full bg-foreground text-background text-sm font-bold py-3 rounded-full flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {requesting ? "Vinculando…" : "Confirmar e vincular"}
                  </button>
                  <p className="text-[10px] text-center text-muted-foreground mt-2">
                    Validamos com a Smart Fit em até 24 h.
                  </p>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="size-14 rounded-full bg-emerald-500 grid place-items-center mx-auto mb-3">
                    <Check className="size-7 text-white" />
                  </div>
                  <h3 className="text-base font-semibold mb-1">
                    Matrícula vinculada!
                  </h3>
                  <p className="text-sm text-muted-foreground text-pretty mb-4">
                    A partir da sua próxima mensalidade, você ganha{" "}
                    <strong className="text-foreground">{nfsPerMonth} nfs</strong> automaticamente.
                  </p>
                  <button
                    onClick={() => setOpen(false)}
                    className="w-full bg-foreground text-background text-sm font-bold py-3 rounded-full"
                  >
                    Fechar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-muted rounded-lg p-2 ring-1 ring-black/5 text-center">
      <p className="text-sm font-extrabold leading-none">{value}</p>
      <p className="text-[10px] text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

function Step({ n, text, done }: { n: number; text: string; done: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className={`shrink-0 size-6 rounded-full grid place-items-center text-[11px] font-bold ${
          done ? "bg-emerald-500 text-white" : "bg-muted text-foreground ring-1 ring-black/5"
        }`}
      >
        {done ? <Check className="size-3.5" /> : n}
      </span>
      <span className="text-sm text-foreground pt-0.5">{text}</span>
    </li>
  );
}

