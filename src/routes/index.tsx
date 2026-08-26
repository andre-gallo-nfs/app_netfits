import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Lock, Heart, Bookmark, Share2, Play, X, ShoppingBag, Sparkles, Check, Watch, Activity, Building2, Eye, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { feedItems, type FeedItem } from "@/lib/feed-data";
import { useBadges } from "@/lib/badges-store";
import { ProductDetailSheet } from "@/components/ProductDetailSheet";
import { InviteFriendsCard } from "@/components/InviteFriendsCard";
import { DrIsabellaCard } from "@/components/DrIsabellaCard";
import { SmartFitCard } from "@/components/SmartFitCard";
import { SponsorCard } from "@/components/SponsorCard";
import { WearableSyncSheet } from "@/components/WearableSyncSheet";
import netfitsMark from "@/assets/netfits-mark.png";
import { wallet } from "@/lib/wallet-store";
import { toast } from "sonner";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { useOperationalParams } from "@/lib/operational-params-store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Feed — Netfits" },
      {
        name: "description",
        content: "Feed infinito de saúde, esporte, marcas, assessorias e profissionais.",
      },
      { property: "og:title", content: "Feed — Netfits" },
    ],
  }),
  component: FeedPage,
});

function FeedPage() {
  return (
    <div className="pb-8 space-y-4">
      {/* Pesquisa de Conexão Wearables (Visual Limpo & Monocromático) */}
      <WearableSurveyHero />

      {/* Lista Principal de Publicações do Feed */}
      <div className="space-y-6 pt-1">
        <SponsorCard />
        <InviteFriendsCard />
        <DrIsabellaCard />
        <SmartFitCard />
        {feedItems.map((item) => (
          <FeedCard key={item.id} item={item} />
        ))}
        <div className="px-4 py-8 text-center text-xs text-muted-foreground font-medium">
          Você chegou ao fim do feed. Novas atualizações em breve.
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
            <span className="block text-[10px] text-muted-foreground">Cashback em consultas</span>
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
  return (
    <>
      <article className="px-4">
        <button
          onClick={() => setOpen(true)}
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
          onClick={() => setOpen(true)}
          className="w-full mb-3 bg-foreground text-background text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-2"
        >
          <ShoppingBag className="size-4" />
          Ver produto · {item.price}
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
    let timer: any = null;
    if (isPlayingModalOpen && !isCompleted) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
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
      setRewarded(true);
      const points = params.nfsPerPostView || 15;
      wallet.earn(points, `Visualização 100% Completa de Vídeo: ${item.title}`);
      sharedSandboxStore.rewardEngagement("view", item.title);
      toast.success(`🎉 Retenção de 100% atingida! +${points} nfs creditados na sua carteira!`);
    }
  }, [isCompleted, rewarded, item.title, params.nfsPerPostView]);

  const handleCloseModal = () => {
    if (!isCompleted) {
      toast.error(
        "🚫 Antifraude Netfits: Premiação cancelada. O vídeo precisa ser visto 100% até o final para pontuar."
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
            <span>🛡️ Antifraude: 100% Dwell Time</span>
          </span>
        </div>

        <h2 className="text-lg font-semibold leading-tight text-balance mb-1">{item.title}</h2>
        <p className="text-sm text-muted-foreground text-pretty mb-2">{item.excerpt}</p>
        
        {rewarded ? (
          <div className="mb-3 p-2.5 rounded-xl bg-lime-500/10 border border-lime-500/30 text-lime-400 text-xs font-bold flex items-center gap-2">
            <Check className="size-4 shrink-0" />
            <span>Vídeo assistido por completo (100% de retenção) — +{params.nfsPerPostView || 15} nfs creditados</span>
          </div>
        ) : (
          <div className="mb-3 p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300 text-[11px] font-medium flex items-center gap-2">
            <ShieldCheck className="size-4 text-lime-400 shrink-0" />
            <span>Regra Antifraude: Assista 100% do vídeo ({item.duration}) para receber +{params.nfsPerPostView || 15} nfs</span>
          </div>
        )}

        <SocialActions id={item.id} title={item.title} />
      </article>

      {/* MODAL PLAYER DE VÍDEO COM ANTIFRAUDE 100% RETENÇÃO */}
      {isPlayingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-purple-500/30 rounded-3xl p-6 max-w-lg w-full shadow-2xl space-y-4 text-left animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-5 text-lime-400" />
                <div>
                  <h3 className="text-sm font-extrabold text-white">Player Antifraude Netfits</h3>
                  <p className="text-[10px] text-zinc-400">Dwell time total obrigatório (100% da duração)</p>
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
                <span className="font-mono font-bold text-lime-400">{progress}% {isCompleted ? "✔ (100%)" : ""}</span>
              </div>
              <div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden border border-zinc-700 p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-lime-400 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              {!isCompleted ? (
                <p className="text-[11px] text-amber-400 bg-amber-950/40 border border-amber-500/30 rounded-xl p-2.5 leading-snug">
                  ⚠️ <b>Antifraude Ativo:</b> Não feche o player antes do fim. Sair com menos de 100% do vídeo assistido cancela a premiação.
                </p>
              ) : (
                <p className="text-[11px] text-lime-400 bg-lime-950/40 border border-lime-500/30 rounded-xl p-2.5 leading-snug font-bold">
                  🎉 Vídeo 100% concluído! +{params.nfsPerPostView || 15} nfs creditados com sucesso na sua carteira!
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

const WPP_CONTACTS = [
  { name: "Ana Beatriz", phone: "+55 11 98123-4421", initials: "AB" },
  { name: "Bruno Carvalho", phone: "+55 21 99812-7733", initials: "BC" },
  { name: "Camila Duarte", phone: "+55 11 97712-0098", initials: "CD" },
  { name: "Diego Ferraz", phone: "+55 31 98455-1290", initials: "DF" },
  { name: "Equipe Trail RJ", phone: "Grupo · 28 membros", initials: "TR" },
  { name: "Fernanda Lima", phone: "+55 11 99001-7766", initials: "FL" },
  { name: "Gustavo Reis", phone: "+55 41 98221-0090", initials: "GR" },
  { name: "Helena Souza", phone: "+55 11 99887-1145", initials: "HS" },
  { name: "Run Club Faria Lima", phone: "Grupo · 124 membros", initials: "RC" },
  { name: "Igor Tavares", phone: "+55 11 98344-2210", initials: "IT" },
];

const IG_CONTACTS = [
  { name: "anabia.runs", sub: "Ana Beatriz", initials: "AB" },
  { name: "brunocrv", sub: "Bruno Carvalho", initials: "BC" },
  { name: "cami.duarte", sub: "Camila Duarte", initials: "CD" },
  { name: "diego.ferraz", sub: "Seguindo você", initials: "DF" },
  { name: "fer.lima", sub: "Fernanda Lima", initials: "FL" },
  { name: "gus.reis42", sub: "Gustavo Reis", initials: "GR" },
  { name: "helenasz", sub: "Helena Souza", initials: "HS" },
  { name: "igortvrs", sub: "Igor Tavares", initials: "IT" },
];

const TG_CONTACTS = [
  { name: "Ana Beatriz", sub: "online", initials: "AB" },
  { name: "Trail RJ", sub: "Grupo · 28 membros", initials: "TR" },
  { name: "Bruno Carvalho", sub: "visto há 5 min", initials: "BC" },
  { name: "Camila Duarte", sub: "online", initials: "CD" },
  { name: "Run Club FL", sub: "Canal · 1,2k", initials: "RC" },
  { name: "Helena Souza", sub: "visto há 1 h", initials: "HS" },
];

const MSG_CONTACTS = [
  { name: "Ana Beatriz", phone: "+55 11 98123-4421", initials: "AB" },
  { name: "Bruno Carvalho", phone: "+55 21 99812-7733", initials: "BC" },
  { name: "Diego Ferraz", phone: "+55 31 98455-1290", initials: "DF" },
  { name: "Helena Souza", phone: "+55 11 99887-1145", initials: "HS" },
  { name: "Mãe", phone: "+55 11 99000-1122", initials: "MM" },
];

const FB_AUDIENCES = [
  { key: "public", label: "Público" },
  { key: "friends", label: "Amigos" },
  { key: "close", label: "Amigos próximos" },
  { key: "only", label: "Somente eu" },
];

type Step = "channels" | "wpp" | "ig" | "x" | "tt" | "fb" | "tg" | "msg" | "mail";

function SocialActions({ id, title, isOwnPost = false }: { id: string; title: string; isOwnPost?: boolean }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [step, setStep] = useState<Step>("channels");
  const [sent, setSent] = useState<string[]>([]);
  const [posted, setPosted] = useState(false);
  const [composeText, setComposeText] = useState("");
  const params = useOperationalParams();

  const closeShare = () => {
    setShareOpen(false);
    setTimeout(() => {
      setStep("channels");
      setSent([]);
      setPosted(false);
      setComposeText("");
    }, 200);
  };

  const goBack = () => {
    setStep("channels");
    setPosted(false);
    setComposeText("");
  };

  const channels: { key: Step; label: string; color: string }[] = [
    { key: "wpp", label: "WhatsApp", color: "bg-[#25D366]" },
    { key: "ig", label: "Instagram", color: "bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600" },
    { key: "x", label: "X", color: "bg-black" },
    { key: "tt", label: "TikTok", color: "bg-black" },
    { key: "fb", label: "Facebook", color: "bg-[#1877F2]" },
    { key: "tg", label: "Telegram", color: "bg-[#229ED9]" },
    { key: "msg", label: "Mensagens", color: "bg-emerald-500" },
    { key: "mail", label: "E-mail", color: "bg-zinc-700" },
  ];

  const titles: Record<Step, string> = {
    channels: "Compartilhar",
    wpp: "Enviar via WhatsApp",
    ig: "Enviar no Instagram",
    x: "Postar no X",
    tt: "Enviar no TikTok",
    fb: "Compartilhar no Facebook",
    tg: "Encaminhar no Telegram",
    msg: "Enviar SMS",
    mail: "Enviar por e-mail",
  };

  const handleLike = () => {
    setLiked((v) => {
      const next = !v;
      if (next) {
        if (isOwnPost || params.blockSelfEngagementRewards) {
          toast.warning("🔒 Antifraude: Curtir seu próprio post não acumula pontos nfs.");
        } else {
          wallet.earn(params.nfsPerLike, `Curtida em post de terceiro: ${title}`);
          sharedSandboxStore.rewardEngagement("like", title);
          toast.success(`+${params.nfsPerLike} nfs acumulados por curtir post de terceiro!`);
        }
      }
      return next;
    });
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

  const [viewed, setViewed] = useState(false);

  const handleCompleteView = () => {
    if (!viewed) {
      setViewed(true);
      if (isOwnPost) {
        toast.warning("🔒 Antifraude: Visualizar seu próprio post não acumula pontos nfs.");
      } else {
        wallet.earn(params.nfsPerPostView, `Visualização completa: ${title}`);
        toast.success(`+${params.nfsPerPostView} nfs por visualizar post de terceiro!`);
      }
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={handleCompleteView}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ring-1 transition-colors active:scale-95 ${
            viewed
              ? "bg-purple-600 text-white ring-purple-600 shadow-sm"
              : "bg-purple-500/10 text-purple-400 ring-purple-500/30 hover:bg-purple-500/20"
          }`}
        >
          <Eye className="size-4" />
          {viewed ? "Lido (+5 nfs)" : "Concluir Leitura (+5 nfs)"}
        </button>
        <button
          onClick={handleLike}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ring-1 transition-colors active:scale-95 ${
            liked
              ? "bg-brand text-brand-foreground ring-brand"
              : "bg-muted text-foreground ring-black/5"
          }`}
          aria-pressed={liked}
          aria-label="Curtir"
        >
          <Heart className={`size-4 ${liked ? "fill-current" : ""}`} />
          Curtir
        </button>
        <button
          onClick={() => setShareOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-muted text-foreground ring-1 ring-black/5 active:scale-95"
          aria-label="Compartilhar"
        >
          <Share2 className="size-4 text-lime-400" />
          Compartilhar (+10 nfs)
        </button>
        <button
          onClick={handleSave}
          className={`ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ring-1 active:scale-95 ${
            saved
              ? "bg-foreground text-background ring-foreground"
              : "bg-muted text-foreground ring-black/5"
          }`}
          aria-pressed={saved}
          aria-label="Salvar"
        >
          <Bookmark className={`size-4 ${saved ? "fill-current" : ""}`} />
          Salvar
        </button>
      </div>

      {shareOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 flex items-end justify-center"
          onClick={closeShare}
          role="dialog"
          aria-label="Compartilhar"
        >
          <div
            className="w-full max-w-md bg-white text-zinc-900 rounded-t-2xl p-5 pb-8 max-h-[85vh] flex flex-col shadow-2xl border-t border-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto w-10 h-1 rounded-full bg-zinc-300 mb-4" />
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold">{titles[step]}</p>
              <button
                onClick={closeShare}
                className="size-7 rounded-full bg-muted grid place-items-center"
                aria-label="Fechar"
              >
                <X className="size-4" />
              </button>
            </div>

            {step === "channels" && (
              <>
                <p className="text-xs text-muted-foreground mb-4 line-clamp-1">{title}</p>
                <div className="grid grid-cols-4 gap-y-4 gap-x-2">
                  {channels.map((c) => (
                    <button
                      key={`${id}-${c.key}`}
                      onClick={() => setStep(c.key)}
                      className="flex flex-col items-center gap-2 active:scale-95"
                    >
                      <span
                        className={`size-12 rounded-full ${c.color} text-white grid place-items-center text-sm font-bold ring-1 ring-black/10`}
                      >
                        {c.label[0]}
                      </span>
                      <span className="text-[10px] font-medium">{c.label}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step !== "channels" && (
              <button
                onClick={goBack}
                className="text-xs text-muted-foreground mb-3 self-start"
              >
                ← Voltar
              </button>
            )}

            {(step === "wpp" || step === "tg" || step === "msg" || step === "ig") && (
              <ContactSendList title={title} step={step} sent={sent} setSent={setSent} isOwnPost={isOwnPost} />
            )}
            {step === "x" && (
              <ComposerX title={title} posted={posted} setPosted={setPosted} text={composeText} setText={setComposeText} />
            )}
            {step === "tt" && <ComposerTikTok title={title} sent={sent} setSent={setSent} />}
            {step === "fb" && (
              <ComposerFacebook title={title} posted={posted} setPosted={setPosted} text={composeText} setText={setComposeText} />
            )}
            {step === "mail" && <ComposerMail title={title} posted={posted} setPosted={setPosted} />}
          </div>
        </div>
      )}
    </div>
  );
}

function ContactSendList({
  title,
  step,
  sent,
  setSent,
  isOwnPost = false,
}: {
  title: string;
  step: "wpp" | "tg" | "msg" | "ig";
  sent: string[];
  setSent: React.Dispatch<React.SetStateAction<string[]>>;
  isOwnPost?: boolean;
}) {
  const params = useOperationalParams();
  const cfg = {
    wpp: {
      list: WPP_CONTACTS.map((c) => ({ name: c.name, sub: c.phone, initials: c.initials })),
      avatar: "bg-[#25D366]/15 text-[#128C45]",
      activeBtn: "bg-[#25D366] text-white ring-[#25D366]",
      placeholder: "Buscar contatos",
    },
    tg: {
      list: TG_CONTACTS,
      avatar: "bg-[#229ED9]/15 text-[#1c7eb0]",
      activeBtn: "bg-[#229ED9] text-white ring-[#229ED9]",
      placeholder: "Buscar no Telegram",
    },
    msg: {
      list: MSG_CONTACTS.map((c) => ({ name: c.name, sub: c.phone, initials: c.initials })),
      avatar: "bg-emerald-500/15 text-emerald-700",
      activeBtn: "bg-emerald-500 text-white ring-emerald-500",
      placeholder: "Para:",
    },
    ig: {
      list: IG_CONTACTS,
      avatar: "bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 text-white",
      activeBtn: "bg-gradient-to-r from-pink-500 to-purple-600 text-white ring-pink-500",
      placeholder: "Buscar",
    },
  }[step];

  return (
    <>
      <div className="flex items-center gap-2 bg-muted rounded-full px-3 py-2 mb-3">
        <span className="text-xs text-muted-foreground">🔍</span>
        <input
          placeholder={cfg.placeholder}
          className="bg-transparent text-xs outline-none flex-1"
        />
      </div>
      <div className="bg-muted/60 rounded-lg px-3 py-2 mb-3">
        <p className="text-[11px] text-muted-foreground line-clamp-2">📎 {title}</p>
      </div>
      <div className="overflow-y-auto -mx-5 px-5 flex-1">
        <ul className="divide-y divide-black/5">
          {cfg.list.map((c) => {
            const isSent = sent.includes(c.name);
            return (
              <li key={c.name} className="py-2.5 flex items-center gap-3">
                <div className={`size-10 rounded-full grid place-items-center text-xs font-bold ${cfg.avatar}`}>
                  {c.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{c.name}</p>
                  <p className="text-[11px] text-muted-foreground truncate">{c.sub}</p>
                </div>
                <button
                  onClick={() => {
                    if (!isSent) {
                      if (isOwnPost) {
                        toast.warning("🔒 Antifraude: Compartilhar seu próprio post não gera acúmulo de nfs.");
                      } else {
                        wallet.earn(params.nfsPerShare, `Compartilhamento pós-visualização: ${title}`);
                        sharedSandboxStore.rewardEngagement("share", title);
                        toast.success(`+${params.nfsPerShare} nfs acumulados por compartilhar post de terceiro!`);
                      }
                    }
                    setSent((prev) => (prev.includes(c.name) ? prev : [...prev, c.name]));
                  }}
                  className={`text-[11px] font-semibold px-3 py-1.5 rounded-full ring-1 active:scale-95 ${
                    isSent ? cfg.activeBtn : "bg-muted text-foreground ring-black/5"
                  }`}
                >
                  {isSent ? "Enviado" : "Enviar"}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

function ComposerX({
  title,
  posted,
  setPosted,
  text,
  setText,
}: {
  title: string;
  posted: boolean;
  setPosted: (v: boolean) => void;
  text: string;
  setText: (v: string) => void;
}) {
  const defaultText = `${title} — via @netfits`;
  const value = text || defaultText;
  const remaining = 280 - value.length;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <div className="size-10 rounded-full bg-zinc-800 text-white grid place-items-center text-xs font-bold shrink-0">
          EU
        </div>
        <textarea
          value={value}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          className="flex-1 resize-none text-sm bg-transparent outline-none placeholder:text-muted-foreground"
          placeholder="O que está acontecendo?"
        />
      </div>
      <div className="flex items-center justify-between">
        <span className={`text-[11px] ${remaining < 0 ? "text-red-500" : "text-muted-foreground"}`}>
          {remaining}
        </span>
        <button
          onClick={() => setPosted(true)}
          disabled={posted || remaining < 0}
          className="bg-black text-white text-xs font-bold px-5 py-2 rounded-full disabled:opacity-60 active:scale-95"
        >
          {posted ? "Postado ✓" : "Postar"}
        </button>
      </div>
    </div>
  );
}

function ComposerTikTok({
  title,
  sent,
  setSent,
}: {
  title: string;
  sent: string[];
  setSent: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const friends = ["anabia", "brunocrv", "cami.d", "diegof", "gusreis", "helenasz", "igortvrs", "fer.lima"];
  return (
    <>
      <div className="flex gap-2 mb-4">
        {["DM", "Story", "Repost"].map((t, i) => (
          <button
            key={t}
            className={`text-[11px] font-semibold px-3 py-1.5 rounded-full ring-1 ${
              i === 0 ? "bg-black text-white ring-black" : "bg-muted text-foreground ring-black/5"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="bg-muted/60 rounded-lg px-3 py-2 mb-3">
        <p className="text-[11px] text-muted-foreground line-clamp-2">🎬 {title}</p>
      </div>
      <div className="grid grid-cols-4 gap-3 overflow-y-auto">
        {friends.map((f) => {
          const isSent = sent.includes(f);
          return (
            <button
              key={f}
              onClick={() => setSent((p) => (p.includes(f) ? p : [...p, f]))}
              className="flex flex-col items-center gap-1.5 active:scale-95"
            >
              <div className="size-14 rounded-full bg-gradient-to-br from-zinc-700 to-black text-white grid place-items-center text-xs font-bold">
                {f.slice(0, 2).toUpperCase()}
              </div>
              <span className="text-[10px] truncate w-full text-center">@{f}</span>
              <span
                className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${
                  isSent ? "bg-black text-white" : "bg-muted text-foreground"
                }`}
              >
                {isSent ? "Enviado" : "Enviar"}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}

function ComposerFacebook({
  title,
  posted,
  setPosted,
  text,
  setText,
}: {
  title: string;
  posted: boolean;
  setPosted: (v: boolean) => void;
  text: string;
  setText: (v: string) => void;
}) {
  const [audience, setAudience] = useState("friends");
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="size-10 rounded-full bg-[#1877F2] text-white grid place-items-center text-xs font-bold">
          EU
        </div>
        <div>
          <p className="text-sm font-semibold">Você</p>
          <select
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            className="text-[11px] bg-muted rounded-full px-2 py-0.5 outline-none"
          >
            {FB_AUDIENCES.map((a) => (
              <option key={a.key} value={a.key}>
                {a.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        placeholder="Escreva algo sobre isso…"
        className="resize-none text-sm bg-transparent outline-none placeholder:text-muted-foreground"
      />
      <div className="bg-muted/60 rounded-lg px-3 py-2">
        <p className="text-[11px] text-muted-foreground line-clamp-2">🔗 {title}</p>
        <p className="text-[10px] text-muted-foreground">netfits.app</p>
      </div>
      <button
        onClick={() => setPosted(true)}
        disabled={posted}
        className="bg-[#1877F2] text-white text-sm font-bold py-2.5 rounded-md disabled:opacity-60 active:scale-95"
      >
        {posted ? "Publicado ✓" : "Publicar"}
      </button>
    </div>
  );
}

function ComposerMail({
  title,
  posted,
  setPosted,
}: {
  title: string;
  posted: boolean;
  setPosted: (v: boolean) => void;
}) {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState(title);
  const [body, setBody] = useState(
    `Olha o que encontrei no Netfits:\n\n${title}\n\nhttps://netfits.app`
  );
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 border-b border-black/5 py-2">
        <span className="text-[11px] text-muted-foreground w-14">Para</span>
        <input
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="exemplo@email.com"
          className="text-sm bg-transparent outline-none flex-1"
        />
      </div>
      <div className="flex items-center gap-2 border-b border-black/5 py-2">
        <span className="text-[11px] text-muted-foreground w-14">Assunto</span>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="text-sm bg-transparent outline-none flex-1"
        />
      </div>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={6}
        className="text-sm bg-transparent outline-none resize-none py-2"
      />
      <button
        onClick={() => setPosted(true)}
        disabled={posted || !to}
        className="bg-zinc-800 text-white text-sm font-bold py-2.5 rounded-md disabled:opacity-60 active:scale-95"
      >
        {posted ? "Enviado ✓" : "Enviar"}
      </button>
    </div>
  );
}
