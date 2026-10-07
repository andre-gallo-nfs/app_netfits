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
import { WearableSyncSheet } from "@/components/WearableSyncSheet";
import {
  WhatsAppIcon,
  InstagramIcon,
  TelegramIcon,
  XIcon,
  FacebookIcon,
  TikTokIcon,
  MessagesIcon,
  MailIcon,
} from "@/components/BrandIcons";
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

        {/* 2. Desafio Diário Fibios: Dr. Franco Merici (Força & Longevidade) */}
        <DrFrancoQuizCard />

        {/* 3. Desafio Diário Fibios: Dra. Isabella Formigari (Biomarcadores & Sono) */}
        <DraIsabellaQuizCard />

        {/* 4. Protocolo Fibios: Dra. Isabella Formigari (Vídeo 4:12 & Agendamento) */}
        <DrIsabellaCard />

        {/* 5. Clínica & Especialistas Fibios */}
        {feedItems.map((item) => (
          <FeedCard key={item.id} item={item} />
        ))}

        <div className="px-4 py-8 text-center text-xs text-muted-foreground font-medium">
          Você viu todos os conteúdos curados pela Fibios por hoje. Novas atualizações em breve.
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
        <SocialActions id={item.id} title={item.title} />
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
            Parceiro · Clínica médica
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
        <SocialActions id={item.id} title={item.title} />
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
              Profissional verificado
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
        <SocialActions id={item.id} title={item.name} />
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
        const points = feedAntifraud.getRules().pointsPerVideo;
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
            <span>Vídeo assistido (90%+ de retenção) — +{params.nfsPerPostView || 10} nfs creditados</span>
          </div>
        ) : (
          <div className="mb-3 p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300 text-[11px] font-medium flex items-center gap-2">
            <ShieldCheck className="size-4 text-lime-400 shrink-0" />
            <span>Regra Antifraude: Assista ao menos 90% do vídeo ({item.duration}) para receber +{params.nfsPerPostView || 10} nfs</span>
          </div>
        )}

        <SocialActions id={item.id} title={item.title} />
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
                  🎉 Vídeo assistido (90%+ concluído)! +{params.nfsPerPostView || 10} nfs creditados com sucesso na sua carteira!
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

const SHARE_CHANNELS = [
  { key: "wpp", label: "WhatsApp", color: "bg-[#25D366]", Icon: WhatsAppIcon },
  { key: "ig", label: "Instagram", color: "bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600", Icon: InstagramIcon },
  { key: "tg", label: "Telegram", color: "bg-[#229ED9]", Icon: TelegramIcon },
  { key: "x", label: "X", color: "bg-black", Icon: XIcon },
  { key: "tt", label: "TikTok", color: "bg-black", Icon: TikTokIcon },
  { key: "fb", label: "Facebook", color: "bg-[#1877F2]", Icon: FacebookIcon },
  { key: "msg", label: "Mensagens", color: "bg-emerald-500", Icon: MessagesIcon },
  { key: "mail", label: "E-mail", color: "bg-zinc-700", Icon: MailIcon },
] as const;

function SocialActions({ id, title, isOwnPost = false }: { id: string; title: string; isOwnPost?: boolean }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [viewed, setViewed] = useState(false);
  const [linkClicked, setLinkClicked] = useState(false);
  const params = useOperationalParams();

  const postUrl = typeof window !== "undefined" ? `${window.location.origin}/feed#${id}` : `https://www.netfits.com.br/feed#${id}`;
  const shareText = `Confira no Netfits: ${title} — ${postUrl}`;

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (feedAntifraud.hasClaimed("like", id)) setLiked(true);
      if (feedAntifraud.hasClaimed("read", id)) setViewed(true);
      if (feedAntifraud.hasClaimed("link_click", `link-${id}`)) setLinkClicked(true);
    }
  }, [id]);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      toast.info("Curtida removida.");
      return;
    }

    const validation = feedAntifraud.validateAction("like", id, { isOwnPost });
    if (!validation.allowed) {
      toast.warning(validation.reason || "Ação não pontuada pelas regras antifraude.");
      return;
    }

    setLiked(true);
    const points = params.nfsPerLike || 10;
    sharedSandboxStore.rewardEngagement("like", title, points);
    feedAntifraud.recordAction("like", id, points);
    toast.success(`+${points} nfs acumulados por curtir post! (${validation.dailyCount + 1}/${validation.dailyLimit} hoje)`);
  };

  const handleSave = () => {
    setSaved((v) => {
      const next = !v;
      if (next) {
        if (isOwnPost) {
          toast.info("Post próprio salvo! (Ações próprias não geram pontos)");
        } else {
          toast.info("Post de terceiro adicionado aos salvos.");
        }
      } else {
        toast.info("Post removido dos salvos.");
      }
      return next;
    });
  };

  const handleCompleteView = () => {
    if (viewed) {
      toast.info("Você já confirmou a leitura desta publicação.");
      return;
    }

    const validation = feedAntifraud.validateAction("read", id, {
      dwellTimeSeconds: 3,
      isOwnPost,
    });
    if (!validation.allowed) {
      toast.warning(validation.reason || "Ação não permitida pelas regras antifraude.");
      return;
    }

    setViewed(true);
    const points = params.nfsPerPostView || 10;
    sharedSandboxStore.rewardEngagement("view", title, points);
    feedAntifraud.recordAction("read", id, points);
    toast.success(`+${points} nfs por leitura de post! (${validation.dailyCount + 1}/${validation.dailyLimit} hoje)`);
  };

  const handleLinkClick = () => {
    if (linkClicked) {
      toast.info("Você já recebeu a bonificação deste link.");
      return;
    }

    const validation = feedAntifraud.validateAction("link_click", `link-${id}`, { isOwnPost });
    if (!validation.allowed) {
      toast.warning(validation.reason || "Ação não permitida pelas regras antifraude.");
      return;
    }

    setLinkClicked(true);
    const points = params.nfsPerLinkClick || 10;
    sharedSandboxStore.rewardEngagement("click", title, points);
    feedAntifraud.recordAction("link_click", `link-${id}`, points);
    toast.success(`+${points} nfs por clicar no link! (${validation.dailyCount + 1}/${validation.dailyLimit} hoje)`);
  };

  const handleCopyPostLink = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      toast.success("📋 Link do post copiado para a área de transferência!");
    } catch {
      /* ignore */
    }
    setCopied(true);
    triggerShareReward("copy_link");
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerShareReward = (channelKey: string) => {
    const shareKey = `share-${channelKey}-${id}`;
    const validation = feedAntifraud.validateAction("share", shareKey, { isOwnPost });
    if (validation.allowed) {
      const points = params.nfsPerShare || 10;
      sharedSandboxStore.rewardEngagement("share", title, points);
      feedAntifraud.recordAction("share", shareKey, points);
      badgesStore.recordShare();
      toast.success(`+${points} nfs por compartilhar no ${channelKey.toUpperCase()}! (${validation.dailyCount + 1}/${validation.dailyLimit} hoje)`);
    } else {
      badgesStore.recordShare();
    }
  };

  const handleShareChannel = async (key: string) => {
    triggerShareReward(key);
    const encoded = encodeURIComponent(shareText);

    if (key === "ig" || key === "tt") {
      try {
        await navigator.clipboard.writeText(shareText);
        toast.success(`📋 Texto copiado! Abra o ${key === "ig" ? "Instagram" : "TikTok"} para compartilhar.`);
      } catch {
        /* ignore */
      }
      const targetUrl = key === "ig" ? "https://instagram.com" : "https://tiktok.com";
      window.open(targetUrl, "_blank", "noopener,noreferrer");
      setShareOpen(false);
      return;
    }

    const url =
      key === "wpp"
        ? `https://api.whatsapp.com/send?text=${encoded}`
        : key === "tg"
        ? `https://t.me/share/url?url=${encodeURIComponent(postUrl)}&text=${encoded}`
        : key === "x"
        ? `https://twitter.com/intent/tweet?text=${encoded}`
        : key === "fb"
        ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`
        : key === "mail"
        ? `mailto:?subject=${encodeURIComponent(title)}&body=${encoded}`
        : key === "msg"
        ? `sms:?&body=${encoded}`
        : null;

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
    setShareOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={handleCompleteView}
          aria-label={viewed ? "Leitura concluída" : "Concluir leitura do artigo e ganhar pontos"}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ring-1 transition-colors active:scale-95 cursor-pointer ${
            viewed
              ? "bg-purple-600 text-white ring-purple-600 shadow-sm"
              : "bg-purple-500/10 text-purple-400 ring-purple-500/30 hover:bg-purple-500/20"
          }`}
        >
          <Eye className="size-4" />
          {viewed ? `Lido (+${params.nfsPerPostView || 10} nfs)` : `Concluir Leitura (+${params.nfsPerPostView || 10} nfs)`}
        </button>
        <button
          onClick={handleLinkClick}
          aria-label={linkClicked ? "Link do parceiro acessado" : "Acessar link do parceiro e ganhar pontos"}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ring-1 transition-colors active:scale-95 cursor-pointer ${
            linkClicked
              ? "bg-emerald-600 text-white ring-emerald-600 shadow-sm"
              : "bg-muted text-foreground ring-black/5 hover:bg-emerald-500/10 hover:text-emerald-400"
          }`}
          title="Acessar link externo / parceiro recomendado"
        >
          <ExternalLink className="size-4" />
          {linkClicked ? `Link Aberto (+${params.nfsPerLinkClick || 10} nfs)` : `Ver Link (+${params.nfsPerLinkClick || 10} nfs)`}
        </button>
        <button
          onClick={handleLike}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ring-1 transition-colors active:scale-95 cursor-pointer ${
            liked
              ? "bg-brand text-brand-foreground ring-brand"
              : "bg-muted text-foreground ring-black/5"
          }`}
          aria-pressed={liked}
          aria-label="Curtir publicação"
        >
          <Heart className={`size-4 ${liked ? "fill-current" : ""}`} />
          Curtir
        </button>
        <button
          onClick={() => setShareOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-muted text-foreground ring-1 ring-black/5 active:scale-95 cursor-pointer"
          aria-label="Compartilhar publicação"
        >
          <Share2 className="size-4 text-lime-400" />
          Compartilhar
        </button>
        <button
          onClick={handleSave}
          className={`ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ring-1 active:scale-95 cursor-pointer ${
            saved
              ? "bg-foreground text-background ring-foreground"
              : "bg-muted text-foreground ring-black/5"
          }`}
          aria-pressed={saved}
          aria-label="Salvar publicação nos favoritos"
        >
          <Bookmark className={`size-4 ${saved ? "fill-current" : ""}`} />
          Salvar
        </button>
      </div>

      {shareOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end justify-center"
          onClick={() => setShareOpen(false)}
          role="dialog"
          aria-label="Compartilhar"
        >
          <div
            className="w-full max-w-md bg-white text-zinc-900 rounded-t-2xl p-5 pb-[calc(env(safe-area-inset-bottom,0px)+2rem)] shadow-2xl border-t border-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto w-10 h-1 rounded-full bg-zinc-300 mb-4" />
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold">Compartilhar publicação</p>
              <button
                onClick={() => setShareOpen(false)}
                className="size-7 rounded-full bg-muted grid place-items-center cursor-pointer hover:bg-zinc-200"
                aria-label="Fechar"
              >
                <X className="size-4" />
              </button>
            </div>

            <p className="text-xs text-muted-foreground mb-4 line-clamp-1">{title}</p>

            <div className="flex items-center gap-2 bg-muted rounded-full pl-4 pr-1 py-1 mb-5 ring-1 ring-black/5">
              <span className="flex-1 text-xs font-medium truncate text-muted-foreground">
                {postUrl}
              </span>
              <button
                onClick={handleCopyPostLink}
                className="shrink-0 flex items-center gap-1 bg-foreground text-background text-xs font-semibold px-3 py-1.5 rounded-full active:scale-95 cursor-pointer"
              >
                {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                {copied ? "Copiado" : "Copiar"}
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {SHARE_CHANNELS.map((c) => {
                const IconComponent = c.Icon;
                return (
                  <button
                    key={`${id}-${c.key}`}
                    onClick={() => handleShareChannel(c.key)}
                    className="flex flex-col items-center gap-1.5 active:scale-95 cursor-pointer group"
                  >
                    <div
                      className={`size-12 rounded-full grid place-items-center text-white ${c.color} ring-1 ring-black/10 shadow-sm group-hover:scale-105 transition-transform`}
                    >
                      <IconComponent className="size-5" />
                    </div>
                    <span className="text-[10px] font-medium text-center">{c.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
