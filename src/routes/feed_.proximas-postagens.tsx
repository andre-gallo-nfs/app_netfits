import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import {
  Calendar,
  ArrowLeft,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Filter,
  Layers,
  ChevronRight,
  Eye,
} from "lucide-react";
import { SCHEDULED_POSTS, ScheduledFeedCard, type ScheduledPostDef } from "@/components/ScheduledFeedCard";
import netfitsMark from "@/assets/netfits-mark.png";

export const Route = createFileRoute("/feed_/proximas-postagens")({
  head: () => ({
    meta: [
      { title: "Próximas Postagens (Homologação) — Netfits" },
      {
        name: "description",
        content: "Curadoria e pré-visualização de posts agendados no ambiente de homologação da Netfits.",
      },
      { property: "og:title", content: "Próximas Postagens — Homologação Netfits" },
    ],
  }),
  component: ProximasPostagensPage,
});

function ProximasPostagensPage() {
  const navigate = useNavigate();
  const [filterMode, setFilterMode] = useState<"upcoming" | "all">("upcoming");

  const now = useMemo(() => new Date(), []);

  // Classifica os posts entre já publicados e próximos da fila
  const { upcomingPosts, publishedPosts } = useMemo(() => {
    const upcoming: ScheduledPostDef[] = [];
    const published: ScheduledPostDef[] = [];

    for (const post of SCHEDULED_POSTS) {
      const pubDate = new Date(post.publishDate);
      if (now >= pubDate) {
        published.push(post);
      } else {
        upcoming.push(post);
      }
    }

    return { upcomingPosts: upcoming, publishedPosts: published };
  }, [now]);

  const displayedPosts = filterMode === "upcoming" ? upcomingPosts : SCHEDULED_POSTS;

  const isStaging = useMemo(() => {
    if (typeof window === "undefined") return true;
    const hostname = window.location.hostname;
    return (
      hostname.includes("staging") ||
      hostname.includes("trycloudflare.com") ||
      hostname.includes("localhost") ||
      hostname.includes("lhr.life") ||
      window.location.port === "3000" ||
      window.location.search.includes("homolog=true") ||
      (typeof import.meta !== "undefined" && import.meta.env?.VITE_APP_ENV === "staging")
    );
  }, []);

  // Blindagem de Produção: Se alguém acessar em produção (www.netfits.com.br), redireciona imediatamente para o feed
  useEffect(() => {
    if (typeof window !== "undefined" && !isStaging) {
      navigate({ to: "/feed", replace: true });
    }
  }, [isStaging, navigate]);

  if (!isStaging) {
    return null;
  }

  return (
    <div className="w-full max-w-md mx-auto min-h-screen bg-zinc-950 text-white flex flex-col pb-32">
      {/* Top Header com Voltar */}
      <header className="sticky top-0 z-30 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
        <Link
          to="/feed"
          className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-white transition active:scale-95"
          aria-label="Voltar para o Feed Principal"
        >
          <ArrowLeft className="size-4" />
          <span>Voltar ao Feed</span>
        </Link>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-black uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/40 px-2 py-0.5 rounded-full">
            Homologação
          </span>
          <img src={netfitsMark} alt="Netfits Mark" className="size-5 object-contain" />
        </div>
      </header>

      {/* Hero Banner de Curadoria */}
      <section className="px-4 pt-4 pb-2">
        <div className="bg-gradient-to-br from-purple-900/40 via-zinc-900 to-zinc-900 border border-purple-500/30 rounded-2xl p-4 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 size-24 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-start gap-3">
            <div className="size-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center shrink-0">
              <Calendar className="size-5 text-purple-300" />
            </div>
            <div className="flex-1">
              <h1 className="text-base font-extrabold text-white tracking-tight flex items-center gap-1.5">
                <span>Fila de Próximas Postagens</span>
                <Sparkles className="size-3.5 text-lime-400" />
              </h1>
              <p className="text-[11px] text-zinc-400 leading-relaxed mt-1">
                Ambiente isolado de homologação para validação prévia de copy, artigos, dwells e quizzes antes do disparo oficial em produção.
              </p>
            </div>
          </div>

          {/* Métricas Rápidas da Fila */}
          <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-zinc-800">
            <div className="bg-zinc-950/60 rounded-xl p-2.5 border border-zinc-800/80">
              <p className="text-[10px] text-zinc-400 font-medium">Próximos na Fila</p>
              <p className="text-base font-black text-lime-400">{upcomingPosts.length} posts</p>
              <p className="text-[9px] text-zinc-400">Até 05/11 às 06h</p>
            </div>
            <div className="bg-zinc-950/60 rounded-xl p-2.5 border border-zinc-800/80">
              <p className="text-[10px] text-zinc-400 font-medium">Já Ativos em Prod</p>
              <p className="text-base font-black text-purple-400">{publishedPosts.length} posts</p>
              <p className="text-[9px] text-zinc-400">Liberados às 06h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seletor de Filtro */}
      <section className="px-4 py-2">
        <div className="bg-zinc-900 border border-zinc-800 p-1 rounded-xl flex items-center gap-1">
          <button
            type="button"
            onClick={() => setFilterMode("upcoming")}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
              filterMode === "upcoming"
                ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Clock className="size-3.5" />
            <span>Apenas Próximos ({upcomingPosts.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setFilterMode("all")}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
              filterMode === "all"
                ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Layers className="size-3.5" />
            <span>Todos da Fila ({SCHEDULED_POSTS.length})</span>
          </button>
        </div>
      </section>

      {/* Lista de Cards da Fila */}
      <main className="px-4 space-y-4 pt-2">
        {displayedPosts.length === 0 ? (
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 text-center">
            <CheckCircle2 className="size-10 text-lime-400 mx-auto mb-2 opacity-80" />
            <h3 className="text-sm font-bold text-white">Fila Vazia</h3>
            <p className="text-xs text-zinc-400 mt-1">Todos os posts agendados já foram publicados!</p>
          </div>
        ) : (
          displayedPosts.map((post, idx) => {
            const pubDate = new Date(post.publishDate);
            const isFuture = now < pubDate;
            const dateFormatted = pubDate.toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              weekday: "short",
            });
            const timeFormatted = pubDate.toLocaleTimeString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit",
            });

            return (
              <div key={post.id} className="relative group">
                {/* Header de Metadados de Homologação em cada Card */}
                <div
                  className={`mb-2 px-3 py-2 rounded-xl border flex items-center justify-between text-[11px] font-semibold ${
                    isFuture
                      ? "bg-amber-500/10 border-amber-500/30 text-amber-300"
                      : "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <Calendar className="size-3.5" />
                    <span>
                      {isFuture ? "🗓️ Estreia em" : "🟢 Já no Ar desde"}{" "}
                      <strong className="text-white font-black">{dateFormatted} às {timeFormatted}</strong>
                    </span>
                  </div>
                  <span className="text-[10px] font-mono opacity-80 uppercase">
                    Dia {post.originalDay} · {post.line}
                  </span>
                </div>

                {/* Card Completo Interativo (Artigo, Carrossel, Dwell Time e Quiz) */}
                <ScheduledFeedCard post={post} isDailyChallenge={true} />
              </div>
            );
          })
        )}
      </main>
    </div>
  );
}
