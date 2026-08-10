import { createFileRoute } from "@tanstack/react-router";
import { activities } from "@/lib/feed-data";

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
  return (
    <div className="pb-4">

      <section className="px-4 pt-6 pb-4">
        <h1 className="text-2xl font-semibold tracking-tight">Atividades</h1>
        <p className="text-sm text-muted-foreground">
          Treino, sono, nutrição, prevenção. Tudo vira netfits.
        </p>
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

    </div>
  );
}
