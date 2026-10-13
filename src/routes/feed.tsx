import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Lock, Heart, Bookmark, Share2, Play, X, ShoppingBag, Sparkles, Check, Watch, Activity, Building2, Eye, ShieldCheck, ExternalLink, Copy } from "lucide-react";
import { useState, useEffect } from "react";
import { feedItems, type FeedItem } from "@/lib/feed-data";
import { useBadges, badgesStore } from "@/lib/badges-store";
import { ProductDetailSheet } from "@/components/ProductDetailSheet";
import { InviteFriendsCard } from "@/components/InviteFriendsCard";
import { DrIsabellaCard } from "@/components/DrIsabellaCard";
import { DrFrancoQuizCard } from "@/components/DrFrancoQuizCard";
import { DraIsabellaQuizCard } from "@/components/DraIsabellaQuizCard";
import { NetfitsEducationalCard } from "@/components/NetfitsEducationalCard";
import { FeedSocialActions } from "@/components/FeedSocialActions";
import { WearableSyncSheet } from "@/components/WearableSyncSheet";
import netfitsMark from "@/assets/netfits-mark.png";
import { wallet } from "@/lib/wallet-store";
import { toast } from "sonner";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { useOperationalParams } from "@/lib/operational-params-store";
import { feedAntifraud } from "@/lib/feed-antifraud";

export const Route = createFileRoute("/feed")({
  head: () => ({
    meta: [
      { title: "Feed — Netfits" },
      {
        name: "description",
        content: "Feed oficial de saúde, medicina do esporte e longevidade curado pela Fibios.",
      },
      { property: "og:title", content: "Feed — Netfits" },
    ],
  }),
  component: FeedPage,
});

const FEED_CATEGORIES = [
  "Para você",
  "Em movimento",
  "Nutrição",
  "Saúde",
  "Longevidade",
] as const;

export function FeedPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Para você");

  useEffect(() => {
    badgesStore.evaluate();
  }, []);

  return (
    <div className="pb-8 space-y-4">
      {/* Abas Superiores de Filtro do Feed (Conforme Design Oficial) */}
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-md border-b border-border/40 py-2.5 px-4 overflow-x-auto scrollbar-none flex items-center gap-2">
        {FEED_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                if (cat !== "Para você") {
                  toast.info(`Filtrando feed por: ${cat}`);
                }
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-foreground text-background shadow-xs font-bold ring-1 ring-foreground"
                  : "bg-muted/70 text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Lista Principal de Publicações do Feed — Exclusivo FIBIOS */}
      <div className="space-y-6 pt-1">
        {/* 1. Card Obrigatório em 1º Lugar: Member Get Member (+50 nfs por amigo) */}
        <InviteFriendsCard />

        {/* 2. Desafio Diário Fibios: Dr. Franco Merici (Força & Longevidade) — Topo do Feed com Quiz Ativo 24h (5 NFs) */}
        <DrFrancoQuizCard isDailyChallenge={true} />

        {/* 3. Educacional da Plataforma: O Propósito Netfits & Healthspan (Time Netfits) */}
        <NetfitsEducationalCard />

        {/* 4. Conteúdo Permanente Fibios: Dra. Isabella Formigari (Biomarcadores & Sono — Artigo Histórico sem Quiz) */}
        <DraIsabellaQuizCard isDailyChallenge={false} />

        {/* 5. Protocolo Fibios: Dra. Isabella Formigari (Vídeo 4:12 & Agendamento) */}
        <DrIsabellaCard />

        {/* 6. Clínica & Especialistas Fibios */}
        {feedItems.map((item) => (
          <FeedCard key={item.id} item={item} />
        ))}

        <div className="px-4 py-8 text-center text-xs text-muted-foreground font-medium">
          Você viu todos os conteúdos curados pela Fibios e pelo Educacional Netfits por hoje. Novas atualizações em breve.
        </div>
      </div>
    </div>
  );
}

function WearableSurveyHero() {
  const [wantsToConnect, setWantsToConnect] = useState<"sim" | "nao">("sim");
  const [selectedDevice, setSelectedDevice] = useState<string>("Garmin");
  const [customDevice, setCustomDevice] = useState<string>("");
  const [voted, setVoted] = useState(false);

  const devices = [
    { id: "Garmin", name: "Garmin" },
    { id: "AppleWatch", name: "Apple Watch" },
    { id: "Strava", name: "Strava" },
    { id: "SamsungHealth", name: "Samsung / Wear OS" },
    { id: "Outro", name: "Outro Dispositivo" },
  ];

  const handleVote = () => {
    if (voted) return;
    setVoted(true);
    let deviceName = selectedDevice;
    if (selectedDevice === "Outro" && customDevice.trim()) {
      deviceName = customDevice.trim();
    }
    const voteDesc = wantsToConnect === "sim" ? `Sim (${deviceName})` : "Não";
    wallet.earn(10, `Pesquisa de Sincronia: ${voteDesc}`);
    toast.success("Voto registrado! (+10 nfs creditados)");
  };

  const finalDeviceLabel =
    selectedDevice === "Outro" && customDevice.trim()
      ? customDevice.trim()
      : selectedDevice;

  return (
    <section className="px-4 pt-4">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-white shadow-sm space-y-3.5">
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-0.5 rounded-full bg-purple-950/80 text-purple-300 border border-purple-500/30 text-[10px] font-bold uppercase tracking-wider">
            Pesquisa de Integração
          </span>
          <span className="text-[10px] font-bold text-purple-400 font-mono">
            +10 nfs bônus
          </span>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-bold text-white leading-snug">
            Gostaria de conectar seu relógio ou app de treino?
          </h2>

          {!voted && (
            <div className="flex items-center gap-2 pt-0.5">
              <button
                type="button"
                onClick={() => setWantsToConnect("sim")}
                className={`flex-1 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                  wantsToConnect === "sim"
                    ? "bg-purple-600 text-white border-purple-500 shadow-sm"
                    : "bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white"
                }`}
              >
                Sim
              </button>
              <button
                type="button"
                onClick={() => setWantsToConnect("nao")}
                className={`flex-1 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                  wantsToConnect === "nao"
                    ? "bg-purple-600 text-white border-purple-500 shadow-sm"
                    : "bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white"
                }`}
              >
                Não
              </button>
            </div>
          )}
        </div>

        {!voted ? (
          <div className="space-y-3 pt-1">
            {wantsToConnect === "sim" && (
              <div className="space-y-2.5">
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Qual dispositivo você mais usa para registrar suas atividades físicas?
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {devices.map((dev) => {
                    const isSelected = selectedDevice === dev.id;
                    return (
                      <button
                        key={dev.id}
                        type="button"
                        onClick={() => setSelectedDevice(dev.id)}
                        className={`px-3 py-2 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? "bg-purple-600 text-white border-purple-500 shadow-sm"
                            : "bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white"
                        }`}
                      >
                        <span className="truncate">{dev.name}</span>
                      </button>
                    );
                  })}
                </div>

                {selectedDevice === "Outro" && (
                  <div className="pt-1">
                    <input
                      type="text"
                      value={customDevice}
                      onChange={(e) => setCustomDevice(e.target.value)}
                      placeholder="Qual o nome do relógio/app? (ex: Coros, Polar, Suunto...)"
                      className="w-full bg-zinc-950/80 border border-zinc-700 focus:border-purple-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none transition"
                    />
                  </div>
                )}
              </div>
            )}

            <button
              type="button"
              onClick={handleVote}
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-sm active:scale-98 transition-all cursor-pointer"
            >
              <span>Votar</span>
              <ArrowRight className="size-3.5" />
            </button>
          </div>
        ) : (
          <div className="bg-zinc-950 border border-purple-500/30 rounded-xl p-3.5 text-center space-y-1.5 animate-in fade-in">
            <div className="size-7 rounded-full bg-purple-600 text-white grid place-items-center mx-auto shadow-sm">
              <Check className="size-4 stroke-[3]" />
            </div>
            <p className="text-xs font-bold text-white">
              Voto Registrado: {wantsToConnect === "sim" ? `Sim (${finalDeviceLabel})` : "Não"}
            </p>
            <p className="text-[11px] text-zinc-400">
              Obrigado! Sua resposta foi gravada com sucesso e +10 nfs foram creditados.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function FeedCard({ item }: { item: FeedItem }) {
  if (item.type === "story") {
    return (
      <article className="px-4">
        <CardHeader name={item.author} initials={item.authorInitials} timeAgo={item.timeAgo} />
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full aspect-[4/5] object-cover rounded-xl ring-1 ring-black/5 mb-3"
        />
        <h2 className="text-lg font-semibold leading-tight text-balance mb-1">{item.title}</h2>
        <p className="text-sm text-muted-foreground text-pretty mb-3">{item.excerpt}</p>
        <SocialActions id={item.id} title={item.title} postCategory="educational" />
      </article>
    );
  }
  if (item.type === "video") {
    return <VideoFeedCard item={item} />;
  }
  if (item.type === "product") {
    return <ProductFeedCard item={item} />;
  }
  if (item.type === "spot") {
    return (
      <article className="px-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Parceiro Patrocinado · Clínica médica
          </span>
        </div>
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full aspect-video object-cover rounded-xl ring-1 ring-black/5 mb-3"
        />
        <div className="flex justify-between items-start mb-3">
          <div>
            <h2 className="text-lg font-semibold leading-tight">{item.title}</h2>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <MapPin className="size-3" /> {item.location}
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold text-brand">{item.tier}</span>
            <span className="block text-[10px] text-muted-foreground">Ganhe Netfits em consultas</span>
          </div>
        </div>
        <SocialActions id={item.id} title={item.title} postCategory="sponsored" />
      </article>
    );
  }

  // expert
  return (
    <article className="px-4">
      <div className="bg-card rounded-2xl p-5 ring-1 ring-black/5">
        <div className="flex gap-4 mb-4">
          <div className="size-16 shrink-0 rounded-xl bg-brand grid place-items-center text-brand-foreground font-bold text-lg">
            {item.name
              .split(" ")
              .slice(0, 2)
              .map((s: string) => s[0])
              .join("")}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold text-brand uppercase tracking-widest">
              Profissional verificado · Patrocinado
            </p>
            <h3 className="text-base font-semibold leading-tight">{item.name}</h3>
            <p className="text-xs text-muted-foreground mb-2">{item.role}</p>
            <p className="text-sm text-muted-foreground text-pretty mb-3">{item.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">
                {item.price}{" "}
                <span className="text-[10px] font-medium text-brand">{item.cashback}</span>
              </span>
              <button className="bg-foreground text-background text-xs font-semibold px-4 py-2 rounded-full">
                Agendar
              </button>
            </div>
          </div>
        </div>
        <SocialActions id={item.id} title={item.name} postCategory="sponsored" />
      </div>
    </article>
  );
}
function ProductFeedCard({
  item,
}: {
  item: Extract<FeedItem, { type: "product" }>;
}) {
  const [open, setOpen] = useState(false);
  const [linkRewarded, setLinkRewarded] = useState(false);
  const params = useOperationalParams();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (feedAntifraud.hasClaimed("link_click", item.id)) {
        setLinkRewarded(true);
      }
    }
  }, [item.id]);

  const handleOpenProduct = () => {
    if (!linkRewarded) {
      const validation = feedAntifraud.validateAction("link_click", item.id);
      if (validation.allowed) {
        setLinkRewarded(true);
        const points = params.nfsPerLinkClick || 10;
        sharedSandboxStore.rewardEngagement("click", item.title, points);
        feedAntifraud.recordAction("link_click", item.id, points);
        toast.success(`🎉 +${points} nfs acumulados por acessar o link do produto! (${validation.dailyCount + 1}/${validation.dailyLimit} hoje)`);
      } else if (validation.reason) {
        toast.warning(validation.reason);
      }
    }
    setOpen(true);
  };

  return (
    <>
      <article className="px-4">
        <button
          onClick={handleOpenProduct}
          className="block w-full text-left active:scale-[0.99] transition-transform"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              {item.tag}
            </span>
            <span className="text-[10px] font-bold text-brand-foreground bg-brand px-2 py-0.5 rounded">
              {item.cashback}
            </span>
          </div>
          {item.badge && (
            <div className="mb-3">
              <span className="inline-block text-[10px] font-bold tracking-widest text-white bg-lime-500 px-2 py-0.5 rounded">
                {item.badge}
              </span>
            </div>
          )}
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full aspect-[4/5] object-cover rounded-xl ring-1 ring-black/5 mb-3"
          />
          <h2 className="text-lg font-semibold leading-tight text-balance mb-1">{item.title}</h2>
          <p className="text-sm text-muted-foreground text-pretty mb-3">{item.description}</p>
          <span className="text-sm font-semibold block mb-3">{item.price}</span>
        </button>
        <button
          onClick={handleOpenProduct}
          className="w-full mb-3 bg-foreground text-background text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
        >
          <ShoppingBag className="size-4" />
          Ver produto · {item.price} (+{params.nfsPerLinkClick || 10} nfs)
        </button>
        <SocialActions id={item.id} title={item.title} />
      </article>
      {open && (
        <ProductDetailSheet
          product={{
            id: item.id,
            title: item.title,
            price: item.price,
            image: item.image,
            cashback: item.cashback,
            badge: item.badge,
            description: item.description,
            tag: item.tag,
          }}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

function VideoFeedCard({
  item,
}: {
  item: Extract<FeedItem, { type: "video" }>;
}) {
  const params = useOperationalParams();
  const [isPlayingModalOpen, setIsPlayingModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [rewarded, setRewarded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (feedAntifraud.hasClaimed("video_view", item.id)) {
        setRewarded(true);
        setIsCompleted(true);
        setProgress(100);
      }
    }
  }, [item.id]);

  useEffect(() => {
    let timer: any = null;
    if (isPlayingModalOpen && !isCompleted) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(timer);
            setIsCompleted(true);
            return 100;
          }
          return prev + 10;
        });
      }, 400);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlayingModalOpen, isCompleted]);

  useEffect(() => {
    if (isCompleted && !rewarded) {
      const validation = feedAntifraud.validateAction("video_view", item.id, {
        videoProgressPct: 100,
      });

      if (validation.allowed) {
        setRewarded(true);
        const points = feedAntifraud.getRules().pointsPerEducationalView;
        sharedSandboxStore.rewardEngagement("view", item.title, points);
        feedAntifraud.recordAction("video_view", item.id, points);
        toast.success(`🎉 Retenção mínima de 90% atingida! +${points} nfs creditados na sua carteira! (${validation.dailyCount + 1}/${validation.dailyLimit} hoje)`);
      } else if (validation.reason) {
        toast.warning(validation.reason);
      }
    }
  }, [isCompleted, rewarded, item.id, item.title]);

  const handleCloseModal = () => {
    if (!isCompleted && progress < 90) {
      toast.error(
        "🚫 Antifraude Netfits: Premiação cancelada. O vídeo precisa ser assistido em ao menos 90% para pontuar."
      );
    }
    setIsPlayingModalOpen(false);
    setProgress(0);
  };

  const videoPoints = params.nfsPerEducationalPostView || 5;

  return (
    <>
      <article className="px-4">
        <CardHeader name={item.author} initials={item.authorInitials} timeAgo={item.timeAgo} />
        
        <div
          onClick={() => setIsPlayingModalOpen(true)}
          className="relative mb-3 cursor-pointer group rounded-xl overflow-hidden"
        >
          <img
            src={item.poster}
            alt={item.title}
            loading="lazy"
            className="w-full aspect-video object-cover rounded-xl ring-1 ring-black/5 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/30 grid place-items-center group-hover:bg-black/40 transition-colors">
            <div className="size-14 rounded-full bg-background/95 ring-1 ring-black/10 grid place-items-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="size-6 ml-0.5 fill-foreground text-foreground" />
            </div>
          </div>
          <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md backdrop-blur-sm">
            {item.duration}
          </span>
          <span className="absolute top-2 left-2 bg-purple-950/90 text-purple-200 border border-purple-500/40 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md backdrop-blur-sm flex items-center gap-1">
            <span>🛡️ Antifraude: 90% Dwell Time</span>
          </span>
        </div>

        <h2 className="text-lg font-semibold leading-tight text-balance mb-1">{item.title}</h2>
        <p className="text-sm text-muted-foreground text-pretty mb-2">{item.excerpt}</p>
        
        {rewarded ? (
          <div className="mb-3 p-2.5 rounded-xl bg-lime-500/10 border border-lime-500/30 text-lime-400 text-xs font-bold flex items-center gap-2">
            <Check className="size-4 shrink-0" />
            <span>Vídeo assistido (90%+ de retenção) — +{videoPoints} nfs creditados</span>
          </div>
        ) : (
          <div className="mb-3 p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300 text-[11px] font-medium flex items-center gap-2">
            <ShieldCheck className="size-4 text-lime-400 shrink-0" />
            <span>Regra Antifraude: Assista ao menos 90% do vídeo ({item.duration}) para receber +{videoPoints} nfs</span>
          </div>
        )}

        <SocialActions id={item.id} title={item.title} postCategory="educational" />
      </article>

      {/* MODAL PLAYER DE VÍDEO COM ANTIFRAUDE 90% RETENÇÃO */}
      {isPlayingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-purple-500/30 rounded-3xl p-6 max-w-lg w-full shadow-2xl space-y-4 text-left animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-5 text-lime-400" />
                <div>
                  <h3 className="text-sm font-extrabold text-white">Player Antifraude Netfits</h3>
                  <p className="text-[10px] text-zinc-400">Dwell time auditado (mínimo 90% de retenção)</p>
                </div>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-1.5 rounded-full bg-zinc-800 text-zinc-400 hover:text-white cursor-pointer"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 bg-black">
              <img src={item.poster} alt={item.title} className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <div className="size-12 rounded-full bg-purple-600 text-white grid place-items-center mb-2 animate-pulse">
                  <Play className="size-6 ml-0.5 fill-white" />
                </div>
                <p className="text-xs font-bold text-white max-w-xs">{item.title}</p>
                <p className="text-[10px] text-purple-300 font-mono mt-1">Duração Total: {item.duration}</p>
              </div>
            </div>

            {/* Barra de Progresso de Retenção */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-zinc-300">Progresso de Assistência:</span>
                <span className="font-mono font-bold text-lime-400">{progress}% {isCompleted ? "✔ (90%+)" : ""}</span>
              </div>
              <div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden border border-zinc-700 p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-lime-400 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              {!isCompleted ? (
                <p className="text-[11px] text-amber-400 bg-amber-950/40 border border-amber-500/30 rounded-xl p-2.5 leading-snug">
                  ⚠️ <b>Antifraude Ativo:</b> Não feche o player antes do fim. Sair com menos de 90% do vídeo assistido cancela a premiação.
                </p>
              ) : (
                <p className="text-[11px] text-lime-400 bg-lime-950/40 border border-lime-500/30 rounded-xl p-2.5 leading-snug font-bold">
                  🎉 Vídeo assistido (90%+ concluído)! +{videoPoints} nfs creditados com sucesso na sua carteira!
                </p>
              )}
            </div>

            <div className="pt-2">
              <button
                onClick={handleCloseModal}
                className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition cursor-pointer"
              >
                {isCompleted ? "Concluir e Voltar ao Feed" : "Fechar (Interromper sem Pontuar)"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


function CardHeader({
  name,
  initials,
  timeAgo,
}: {
  name: string;
  initials: string;
  timeAgo: string;
}) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="size-6 rounded-full bg-zinc-300 grid place-items-center text-[9px] font-bold ring-1 ring-black/5">
        {initials}
      </div>
      <span className="text-xs font-medium">{name}</span>
      <span className="text-xs text-muted-foreground">• {timeAgo}</span>
    </div>
  );
}

function SocialActions({
  id,
  title,
  isOwnPost = false,
  postCategory = "educational",
}: {
  id: string;
  title: string;
  isOwnPost?: boolean;
  postCategory?: "educational" | "sponsored";
}) {
  return (
    <FeedSocialActions
      id={id}
      title={title}
      isOwnPost={isOwnPost}
      postCategory={postCategory}
      showViewButton={true}
      showLinkButton={true}
    />
  );
}
