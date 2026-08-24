import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Lock, Heart, Bookmark, Share2, Play, X, ShoppingBag, Sparkles, Check, Watch, Activity, Building2, Eye } from "lucide-react";
import { useState } from "react";
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
    <div>
      <WearableSurveyHero />
      <BadgesBanner />
      {/* Rewards Banner */}
      <div className="mx-4 mb-3 p-3.5 bg-purple-600/10 border border-purple-600/30 rounded-2xl flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="size-8 rounded-xl bg-purple-600 text-white grid place-items-center font-black text-xs shadow-sm shrink-0">
            nfs
          </div>
          <div>
            <p className="text-xs font-bold text-foreground">
              Recompensas por Engajamento Real
            </p>
            <p className="text-[10px] text-muted-foreground font-medium">
              Visualização Completa (+5 nfs) · Compartilhamento Pós-Visualização (+10 nfs)
            </p>
          </div>
        </div>
      </div>

      {/* Parceiros Banner */}
      <div className="mx-4 mb-4 p-3.5 bg-gradient-to-r from-zinc-900 via-purple-950 to-zinc-900 border border-purple-500/30 rounded-2xl flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="size-8 rounded-xl bg-lime-400 text-black grid place-items-center font-black text-xs shadow-sm shrink-0">
            <Building2 className="size-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-white">
              É dono de Academia, Assessoria ou Clínica?
            </p>
            <p className="text-[10px] text-zinc-300">
              Cadastre seu estabelecimento e ofereça benefícios
            </p>
          </div>
        </div>
        <Link
          to="/parceiros"
          className="bg-lime-400 text-black hover:bg-lime-300 font-extrabold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full shrink-0 shadow-sm transition"
        >
          Cadastrar →
        </Link>
      </div>
      <div className="space-y-8 pt-2">
        <SponsorCard />
        <InviteFriendsCard />
        <DrIsabellaCard />
        <SmartFitCard />
        {feedItems.map((item) => (
          <FeedCard key={item.id} item={item} />
        ))}
        <div className="px-4 py-8 text-center text-xs text-muted-foreground">
          Carregando mais conteúdo…
        </div>
      </div>
    </div>
  );
}

function WearableSurveyHero() {
  const [selectedDevice, setSelectedDevice] = useState<string>("Garmin");
  const [voted, setVoted] = useState(false);

  const devices = [
    { id: "Garmin", name: "Garmin", icon: "⌚" },
    { id: "AppleWatch", name: "Apple Watch", icon: "🍏" },
    { id: "Strava", name: "Strava", icon: "🏃" },
    { id: "SamsungHealth", name: "Samsung / Wear OS", icon: "📱" },
    { id: "Outro", name: "Outro Dispositivo", icon: "🎯" },
  ];

  const handleVote = () => {
    if (voted) return;
    setVoted(true);
    wallet.earn(10, `Pesquisa de Sincronia: ${selectedDevice}`);
    toast.success(`Voto registrado para ${selectedDevice}! (+10 nfs creditados)`);
  };

  return (
    <section className="px-4 py-6">
      <div className="bg-foreground rounded-[22px] p-6 text-background relative overflow-hidden ring-1 ring-zinc-950/10 shadow-xl">
        <img
          src={netfitsMark}
          alt=""
          className="absolute top-4 right-4 w-10 h-10 object-contain rounded-lg bg-background/10 p-1 opacity-80"
        />
        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-600/30 text-purple-300 border border-purple-400/30 text-[10px] font-bold uppercase tracking-widest mb-3">
            <Sparkles className="size-3 text-lime-400" />
            Pesquisa de Intenção
          </span>
          <h2 className="text-xl font-bold leading-tight text-balance mb-2">
            Você gostaria de conectar seu relógio ou app de treino à Netfits?
          </h2>
          <p className="text-xs text-zinc-300 max-w-[38ch] leading-relaxed mb-4">
            Ajude-nos a definir a próxima grande funcionalidade! Qual dispositivo você mais usa para registrar seus treinos?
          </p>

          {!voted ? (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                {devices.map((dev) => {
                  const isSelected = selectedDevice === dev.id;
                  return (
                    <button
                      key={dev.id}
                      onClick={() => setSelectedDevice(dev.id)}
                      className={`p-2.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2 transition-all ${
                        isSelected
                          ? "bg-purple-600 text-white border-lime-400 ring-2 ring-lime-400/40"
                          : "bg-background/10 border-white/10 text-zinc-300 hover:bg-background/20"
                      }`}
                    >
                      <span className="text-sm">{dev.icon}</span>
                      <span className="truncate">{dev.name}</span>
                    </button>
                  );
                })}
              </div>

              <button
                onClick={handleVote}
                className="w-full mt-2 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-purple-900/40 active:scale-98 transition-all"
              >
                <Sparkles className="size-4 text-lime-400" />
                Votar & Quero Conectar (+10 nfs)
                <ArrowRight className="size-4" />
              </button>
            </div>
          ) : (
            <div className="bg-purple-950/60 border border-lime-400/40 rounded-xl p-4 text-center space-y-2">
              <div className="size-9 rounded-full bg-lime-400 text-zinc-950 grid place-items-center mx-auto shadow-md">
                <Check className="size-5 font-black" />
              </div>
              <p className="text-xs font-bold text-white">Voto Registrado: {selectedDevice}</p>
              <p className="text-[11px] text-zinc-300 leading-relaxed">
                Muito obrigado! Sua resposta foi enviada com sucesso e ajudará nossa equipe a priorizar a integração com {selectedDevice}.
              </p>
              <span className="inline-block text-[10px] font-extrabold text-lime-400 pt-1">
                +10 nfs creditados na sua carteira!
              </span>
            </div>
          )}
        </div>
        <div className="absolute right-[-10%] bottom-[-20%] w-64 h-64 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />
      </div>
    </section>
  );
}

function BadgesBanner() {
  const badges = useBadges();
  const unlockedCount = badges.filter((b) => b.unlocked).length;
  const totalCount = badges.length;
  const progressPct = Math.round((unlockedCount / totalCount) * 100);

  return (
    <section className="px-4 pb-4">
      <Link to="/levels" className="block bg-purple-900/10 border border-purple-600/30 hover:bg-purple-900/20 transition-all rounded-2xl p-4 ring-1 ring-black/5">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-2xl bg-purple-600 text-white grid place-items-center font-bold text-lg shrink-0 shadow-md">
            🏅
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-foreground flex items-center gap-1.5">
                Galeria de Badges & Selos
              </p>
              <span className="text-[10px] font-extrabold font-mono text-purple-600">
                {unlockedCount}/{totalCount} Selos
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              Execute tarefas de engajamento e desbloqueie bônus em nfs.
            </p>
            <div className="h-1.5 w-full bg-purple-950/20 rounded-full overflow-hidden mt-2">
              <div className="h-full bg-gradient-to-r from-purple-600 to-lime-400 rounded-full" style={{ width: `${progressPct}%` }} />
            </div>
          </div>
        </div>
      </Link>
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
    return (
      <article className="px-4">
        <CardHeader name={item.author} initials={item.authorInitials} timeAgo={item.timeAgo} />
        <div className="relative mb-3">
          <img
            src={item.poster}
            alt={item.title}
            loading="lazy"
            className="w-full aspect-video object-cover rounded-xl ring-1 ring-black/5"
          />
          <div className="absolute inset-0 grid place-items-center">
            <div className="size-14 rounded-full bg-background/95 ring-1 ring-black/10 grid place-items-center shadow-lg">
              <Play className="size-6 ml-0.5 fill-foreground text-foreground" />
            </div>
          </div>
          <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
            {item.duration}
          </span>
          <span className="absolute top-2 left-2 bg-brand text-brand-foreground text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
            Filme
          </span>
        </div>
        <h2 className="text-lg font-semibold leading-tight text-balance mb-1">{item.title}</h2>
        <p className="text-sm text-muted-foreground text-pretty mb-3">{item.excerpt}</p>
        <SocialActions id={item.id} title={item.title} />
      </article>
    );
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
