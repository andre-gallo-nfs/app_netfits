import { useState } from "react";
import { Play, X, ShieldCheck, Heart, Activity } from "lucide-react";
import draIsabella from "@/assets/dra-isabella.jpeg";

export function DrIsabellaCard() {
  const [open, setOpen] = useState(false);

  return (
    <article className="px-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Parceiro · Saúde & Longevidade
        </span>
      </div>

      <button
        onClick={() => setOpen(true)}
        className="block w-full text-left active:scale-[0.99] transition-transform"
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
            <div className="size-16 rounded-full bg-background/95 ring-1 ring-black/10 grid place-items-center shadow-lg">
              <Play className="size-7 ml-0.5 fill-foreground text-foreground" />
            </div>
          </div>

          <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
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

      <button
        onClick={() => setOpen(true)}
        className="w-full bg-foreground text-background text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-2"
      >
        <Play className="size-4 fill-background" />
        Assistir vídeo · 4:12
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-end sm:items-center justify-center"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-label="Vídeo Dra. Isabella Formigari"
        >
          <div
            className="w-full max-w-md bg-background rounded-t-2xl sm:rounded-2xl max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={draIsabella}
                alt="Dra. Isabella Formigari"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="size-16 rounded-full bg-background/95 grid place-items-center shadow-lg">
                  <Play className="size-7 ml-0.5 fill-foreground text-foreground" />
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 size-9 rounded-full bg-background/90 grid place-items-center"
                aria-label="Fechar"
              >
                <X className="size-5" />
              </button>
              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
                4:12
              </span>
            </div>

            <div className="p-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand mb-1">
                Protocolo Fibios · Longevidade
              </p>
              <h3 className="text-lg font-semibold leading-tight mb-1">
                Dra. Isabella Formigari
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                Médica · Pós Graduação em Medicina do Esporte (Einstein SP) · CRM-SP 282951
              </p>

              <p className="text-sm text-foreground text-pretty mb-4">
                "Treinar bem é só metade do caminho. O que sustenta o atleta amador a longo prazo
                é entender o próprio corpo — inflamação, sono, hormônios, recuperação. O{" "}
                <strong>Protocolo Fibios</strong> traduz seus exames em um plano vivo de
                longevidade."
              </p>

              <div className="grid grid-cols-3 gap-2 mb-5">
                <PillarStat icon={<Activity className="size-4" />} label="Performance" />
                <PillarStat icon={<Heart className="size-4" />} label="Cardio & sono" />
                <PillarStat icon={<ShieldCheck className="size-4" />} label="Prevenção" />
              </div>

              <div className="bg-muted rounded-xl p-3 mb-4 ring-1 ring-black/5">
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

              <button className="w-full bg-brand text-brand-foreground text-sm font-bold py-3 rounded-full">
                Agendar avaliação Fibios
              </button>
              <p className="text-[10px] text-center text-muted-foreground mt-2">
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
