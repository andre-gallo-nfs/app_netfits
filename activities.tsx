import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Watch } from "lucide-react";
import { activities } from "@/lib/feed-data";
import netfitsMark from "@/assets/netfits-mark.png";
import { WearableSyncSheet } from "@/components/WearableSyncSheet";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Atividades — Netfits" },
      {
        name: "description",
        content: "Suas atividades, sono e hábitos. Cada hábito vira netfits.",
      },
      { property: "og:title", content: "Atividades — Netfits" },
    ],
  }),
  component: ActivitiesPage,
});

function ActivitiesPage() {
  const [syncOpen, setSyncOpen] = useState(false);
  return (
    <div className="pb-4">

      <section className="px-4 pt-6 pb-4">
        <h1 className="text-2xl font-semibold tracking-tight">Atividades</h1>
        <p className="text-sm text-muted-foreground">
          Treino, sono, nutrição, prevenção. Tudo vira netfits.
        </p>
      </section>

      <section className="px-4 pb-6">
        <div className="bg-foreground text-background rounded-2xl p-5 relative overflow-hidden">
          <img
            src={netfitsMark}
            alt=""
            className="absolute top-3 right-3 w-7 h-7 object-contain rounded-md bg-background/10 p-0.5 opacity-70"
          />
          <div className="flex items-center gap-2 mb-2">
            <Watch className="size-4 text-brand" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand">
              Conectar wearable
            </span>
          </div>
          <p className="text-base font-semibold mb-3 max-w-[28ch]">
            Sincronize Garmin, Apple Watch ou Strava em 1 toque.
          </p>
          <button
            onClick={() => setSyncOpen(true)}
            className="bg-brand text-brand-foreground text-xs font-bold py-2 px-4 rounded-full"
          >
            Conectar agora
          </button>

        </div>
      </section>

      <section className="px-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
          Histórico recente
        </h2>
        <ul className="space-y-2">
          {activities.map((a) => (
            <li
              key={a.id}
              className="bg-card rounded-xl p-4 flex items-center gap-3 ring-1 ring-black/5"
            >
              <div className="size-10 rounded-full bg-muted grid place-items-center text-lg">
                {a.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">{a.title}</p>
                <p className="text-xs text-muted-foreground">{a.date}</p>
              </div>
              <span className="text-xs font-bold text-brand-foreground bg-brand px-2 py-1 rounded">
                {a.reward}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {syncOpen && <WearableSyncSheet onClose={() => setSyncOpen(false)} />}
    </div>
  );
}
