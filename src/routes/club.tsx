import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { wallet } from "@/lib/wallet-store";
import { nativeBridge } from "@/lib/native-bridge";
import { toast } from "sonner";
import {
  Crown,
  Watch,
  Sparkles,
  CheckCircle2,
  ShoppingBag,
  Users,
  Coins,
  Activity,
  Satellite,
  HeartPulse,
  Flame,
  ArrowRight,
  X,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Copy,
  ExternalLink,
  RefreshCw,
  Radio,
  Check,
  AlertCircle,
  Clock,
  Bell,
  Layers,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/club")({
  head: () => ({
    meta: [
      { title: "Clube Netfits — Experiência VIP & Longevidade Ativa" },
      {
        name: "description",
        content:
          "Acelere sua vida em movimento. 250 nfs por mês garantidos + 20 nfs por treino validado, telemetria de sensores e benefícios exclusivos no Shop.",
      },
      { property: "og:title", content: "Clube Netfits — Experiência VIP" },
    ],
  }),
  component: ClubPage,
});

interface WearableDeviceOption {
  id: string;
  name: string;
  brandTitle: string;
  subtitle: string;
  badge: string;
  color: string;
  fg: string;
  category: string;
}

const WEARABLE_OPTIONS: WearableDeviceOption[] = [
  {
    id: "garmin",
    name: "Garmin",
    brandTitle: "Garmin Connect™",
    subtitle: "Conexão oficial via Garmin Developer Program",
    badge: "Oficial & Ativo",
    color: "#000000",
    fg: "#00A6E0",
    category: "Corrida, Ciclismo, Triathlon",
  },
  {
    id: "apple",
    name: "Apple Watch",
    brandTitle: "Apple HealthKit",
    subtitle: "Sincronização com o app Saúde da Apple",
    badge: "Em Breve",
    color: "#000000",
    fg: "#FFFFFF",
    category: "Dia a dia, Corrida, Funcional",
  },
  {
    id: "strava",
    name: "Strava",
    brandTitle: "Strava API Hub",
    subtitle: "Integração direta com suas atividades no Strava",
    badge: "Em Breve",
    color: "#FC4C02",
    fg: "#FFFFFF",
    category: "Comunidade Esportiva Global",
  },
  {
    id: "polar",
    name: "Polar",
    brandTitle: "Polar Flow API",
    subtitle: "Frequencímetros e zonas cardíacas de precisão",
    badge: "Em Breve",
    color: "#E2231A",
    fg: "#FFFFFF",
    category: "Frequência Cardíaca & Zonas",
  },
];

export function ClubPage() {
  const activeUser = sharedSandboxStore.useActiveUser();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Estado de Assinatura do Clube
  const isMember = Boolean(
    activeUser.isClubMember === true ||
    activeUser.plan === "club"
  );

  // Modais de Controle
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [showGarminModal, setShowGarminModal] = useState(false);
  const [selectedBrandToConnect, setSelectedBrandToConnect] = useState<WearableDeviceOption | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);

  // Identificação do Dispositivo Conectado com Persistência Segura
  // Apenas Garmin possui integração oficial ativa
  const [connectedBrandId, setConnectedBrandId] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(`netfits_connected_wearable_${activeUser.id}`);
      if (saved === "garmin") return "garmin";
      if (saved) localStorage.removeItem(`netfits_connected_wearable_${activeUser.id}`);
    }
    const userWearable = (activeUser as any).connectedWearable || activeUser.wearable || "";
    return userWearable.toLowerCase().includes("garmin") ? "garmin" : null;
  });

  // Escuta retorno do OAuth da Garmin via URL (?garmin_connected=true)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (url.searchParams.get("garmin_connected") === "true") {
        setConnectedBrandId("garmin");
        localStorage.setItem(`netfits_connected_wearable_${activeUser.id}`, "garmin");
        sharedSandboxStore.updateUser(activeUser.id, {
          connectedWearable: "garmin",
          wearable: "Garmin Connect",
        } as any);
        toast.success(
          "🎉 Seu Garmin Connect™ foi conectado com sucesso à Netfits! Seus treinos serão auditados e pontuados automaticamente (+20 nfs por treino)."
        );
        url.searchParams.delete("garmin_connected");
        window.history.replaceState(
          {},
          document.title,
          url.pathname + (url.searchParams.toString() ? "?" + url.searchParams.toString() : "")
        );
      }
    }
  }, [activeUser.id]);

  
  // Escuta retorno ou retomada de foco do aplicativo (garante ativação instantânea no retorno ao app)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkCloudGarminStatus = async () => {
      try {
        const res = await fetch(`/api/garmin/status?userId=${activeUser.id}`);
        if (res.ok) {
          const data = await res.json();
          if (data.userConnected && connectedBrandId !== "garmin") {
            setConnectedBrandId("garmin");
            localStorage.setItem(`netfits_connected_wearable_${activeUser.id}`, "garmin");
            sharedSandboxStore.updateUser(activeUser.id, {
              connectedWearable: "garmin",
              wearable: "Garmin Connect",
            } as any);
            toast.success(
              "🎉 Seu Garmin Connect™ foi conectado com sucesso à Netfits! Seus treinos serão auditados e pontuados automaticamente (+20 nfs por treino)."
            );
          }
        }
      } catch {
        // silent
      }
    };

    window.addEventListener("focus", checkCloudGarminStatus);
    const onVis = () => {
      if (document.visibilityState === "visible") checkCloudGarminStatus();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      window.removeEventListener("focus", checkCloudGarminStatus);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [activeUser.id, connectedBrandId]);

  const activeConnectedDevice = useMemo(() => {
    if (!connectedBrandId) return null;
    return WEARABLE_OPTIONS.find((b) => b.id === connectedBrandId) || {
      id: connectedBrandId,
      name: connectedBrandId,
      brandTitle: connectedBrandId.toUpperCase(),
      subtitle: "Dispositivo integrado à telemetria",
      badge: "Conectado",
      color: "#35106E",
      fg: "#C8F135",
      category: "Esporte & Movimento",
    };
  }, [connectedBrandId]);

  // Cálculo de Treinos Validados e Pontos do Ciclo
  const userTransactions = sharedSandboxStore.getUserTransactions(activeUser.id);
  const clubWorkoutsThisCycle = userTransactions.filter((tx) => tx.category === "workout").length;
  const workoutPointsEarned = clubWorkoutsThisCycle * 20;
  const cycleBasePoints = isMember ? 250 : 0;
  const totalPointsThisCycle = Math.min(1000, cycleBasePoints + workoutPointsEarned);
  const progressPct = Math.min(100, Math.round((totalPointsThisCycle / 1000) * 100));

  // Geração de URL de autorização Garmin com suporte cross-platform
  const getGarminAuthUrl = () => {
    return `https://app-netfits.andre-gallo.workers.dev/api/garmin/authorize?userId=${encodeURIComponent(
      activeUser.id
    )}&redirect=/club`;
  };

  const getDirectGarminUrl = () => {
    const statePayload =
      typeof window !== "undefined"
        ? btoa(JSON.stringify({ userId: activeUser.id, redirectTarget: "/club" }))
        : activeUser.id;

    return `https://connect.garmin.com/oauthConfirm?client_id=e654043f-8094-4d1f-af62-970df6a17ab2&response_type=code&redirect_uri=${encodeURIComponent(
      "https://www.netfits.com.br/api/garmin/oauth/callback"
    )}&state=${encodeURIComponent(statePayload)}`;
  };

  const handleOpenGarminBrowser = async (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const authUrl = getGarminAuthUrl();
    toast.info("Abrindo login oficial da Garmin Connect...");
    setShowGarminModal(false);
    await nativeBridge.openExternalUrl(authUrl);
  };

  const handleCopyGarminLink = () => {
    const authUrl = getDirectGarminUrl();
    if (typeof navigator !== "undefined" && navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(authUrl);
      toast.success("Link copiado com sucesso! Abra o Google Chrome e cole para autorizar.");
    } else {
      toast.info("Acesse: " + authUrl);
    }
  };

  const handleDisconnect = () => {
    setConnectedBrandId(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem(`netfits_connected_wearable_${activeUser.id}`);
    }
    sharedSandboxStore.updateUser(activeUser.id, {
      connectedWearable: undefined,
      wearable: "Nenhum",
    } as any);
    toast.info("Dispositivo desvinculado com sucesso.");
  };

  

  const handleConfirmSubscribe = () => {
    sharedSandboxStore.updateUser(activeUser.id, {
      isClubMember: true,
      isClubSubscriber: true,
      plan: "club",
    } as any);
    wallet.earn(250, "Adesão ao Clube Netfits — Bônus Mensal Garantido", "welcome");
    setShowSubscribeModal(false);
    toast.success("👑 Parabéns! Sua assinatura do Clube Netfits está ativa! +250 nfs creditados.");
  };

  const handleToggleMembership = () => {
    if (isMember) {
      sharedSandboxStore.updateUser(activeUser.id, {
        isClubMember: false,
        isClubSubscriber: false,
        plan: "free",
      } as any);
      toast.info("Assinatura do Clube pausada para testes.");
    } else {
      setShowSubscribeModal(true);
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="pb-16 space-y-5 bg-[#F5F5F7] min-h-full hyphens-none break-normal">
      {/* 0. BANNER EM PRIMEIRO PLANO: EM BREVE */}
      <section className="px-4 pt-4">
        <div className="rounded-3xl bg-gradient-to-br from-[#35106E] via-[#2D0D5E] to-[#1E0840] border-2 border-[#C8F135]/80 p-6 sm:p-8 shadow-2xl relative overflow-hidden text-white flex flex-col items-center justify-center text-center">
          <div className="absolute -top-12 -right-12 size-48 bg-[#C8F135]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 size-48 bg-[#6B2AD9]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center justify-center space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8F135] text-[#202127] text-xs font-black uppercase tracking-wider shadow-md">
              <Clock className="size-4 text-[#202127] animate-pulse" />
              <span>Em Breve</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Clube Netfits • Em Breve
            </h2>
          </div>
        </div>
      </section>

      {/* 1. HERO INSTITUCIONAL */}
      <section className="px-4 pt-5 pb-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1 rounded-md bg-[#35106E] text-[#C8F135] shadow-xs">
            <Crown className="size-4" />
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-[#6B2AD9]">
            Clube Netfits • Assinatura Oficial
          </span>
        </div>
        <h1 className="text-2xl font-black tracking-tight text-[#202127] leading-tight">
          Acelere sua vida em movimento
        </h1>
        <p className="text-xs text-[#5F6270] mt-1.5 leading-relaxed">
          O acelerador oficial para atletas e praticantes. Ganhe 250 nfs todo mês, desbloqueie a pontuação de treinos com seu relógio e multiplique benefícios no Shop.
        </p>
      </section>

      {/* 2. CARD PRINCIPAL: STATUS DO MEMBRO OU OFERTA DE ADESÃO */}
      <section className="px-4">
        <div className="rounded-3xl bg-white border border-purple-200/80 p-5 shadow-xs space-y-4">
          {/* Header do Card */}
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2ECFD] text-[#35106E] text-xs font-black border border-purple-200">
              <Sparkles className="size-3.5 text-[#6B2AD9]" />
              {isMember ? "Assinatura VIP Ativa" : "Plano Oficial"}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#C8F135] text-[#202127] text-xs font-black shadow-xs">
              <Coins className="size-3.5 text-[#202127]" />
              250 nfs/mês + 20 nfs/treino
            </span>
          </div>

          {/* Preço e Resumo */}
          <div className="flex items-baseline justify-between pt-1">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-black text-[#202127]">R$ 19,90</span>
                <span className="text-xs font-semibold text-[#5F6270]">/ mês</span>
              </div>
              <span className="text-xs text-[#5F6270] block mt-0.5">Sem carência ou fidelidade</span>
            </div>
            <div className="text-right">
              <span className="text-xs font-black text-[#35106E] block">250 nfs todo mês</span>
              <span className="text-xs text-[#5F6270]">+ 20 nfs por treino validado</span>
            </div>
          </div>

          {/* Estado de Membro: Progresso do Ciclo Mensal */}
          {isMember ? (
            <div className="pt-3 border-t border-zinc-100 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#202127] flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-[#5D7600]" />
                  Pontos Acumulados no Ciclo
                </span>
                <span className="font-mono font-black text-[#6B2AD9]">
                  {totalPointsThisCycle} nfs acumulados
                </span>
              </div>

              <div className="w-full bg-[#F5F5F7] h-2.5 rounded-full overflow-hidden p-0.5 border border-zinc-200">
                <div
                  className="bg-[#C8F135] h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPct}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#5F6270]">
                <span>250 nfs de mensalidade</span>
                <span>{workoutPointsEarned} nfs em {clubWorkoutsThisCycle} treinos validados</span>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <div className="flex-1 py-2.5 px-3 rounded-xl bg-[#F2ECFD] text-[#35106E] font-extrabold text-xs border border-purple-200 text-center">
                  Benefícios VIP Ativos
                </div>
                <button
                  type="button"
                  onClick={handleToggleMembership}
                  className="py-2.5 px-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-[#5F6270] hover:text-[#202127] font-semibold text-xs border border-zinc-200 transition active:scale-95 cursor-pointer"
                >
                  Pausar Plano
                </button>
              </div>
            </div>
          ) : (
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  toast.info("⏳ O Clube Netfits estará disponível em breve!", { duration: 3000 });
                }}
                className="w-full py-3.5 px-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white font-black text-sm flex items-center justify-center gap-2 shadow-sm transition active:scale-[0.99] cursor-pointer border border-zinc-700"
              >
                <Clock className="size-4 text-[#C8F135]" />
                <span>Em Breve</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. HUB DE WEARABLES INTEGRADO (EXCLUSIVO PARA O CLUBE) */}
      <section className="px-4 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-[#35106E] text-[#C8F135]">
              <Watch className="size-4" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#6B2AD9]">
                Telemetria de Sensores
              </span>
              <h2 className="text-base font-black text-[#202127]">
                Conexão de Wearables &amp; Sweat-and-Earn
              </h2>
            </div>
          </div>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#F2ECFD] text-[#35106E] border border-purple-200">
            Exclusivo Clube
          </span>
        </div>

        {/* CENÁRIO 1: USUÁRIO NÃO É MEMBRO DO CLUBE */}
        {!isMember ? (
          <div className="rounded-3xl bg-white border border-purple-200/80 p-5 space-y-4 shadow-xs">
            <div className="flex items-start gap-3">
              <div className="size-11 rounded-2xl bg-[#F2ECFD] text-[#6B2AD9] grid place-items-center shrink-0">
                <Radio className="size-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-black text-[#202127]">
                  Pontue +20 nfs a Cada Treino Concluído
                </h3>
                <p className="text-xs text-[#5F6270] leading-relaxed">
                  A sincronização com relógios esportivos para ganhar 20 nfs por treino físico auditado é um benefício exclusivo dos assinantes do Clube Netfits.
                </p>
              </div>
            </div>

            {/* Grid de Dispositivos Compatíveis */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              {WEARABLE_OPTIONS.map((dev) => (
                <div
                  key={dev.id}
                  className="p-3 rounded-2xl bg-[#F5F5F7] border border-zinc-200 flex items-center justify-between"
                >
                  <span className="text-xs font-black text-[#202127]">{dev.name}</span>
                  <span className="text-[10px] font-bold text-[#6B2AD9]">Disponível</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setShowSubscribeModal(true)}
              className="w-full py-3 px-4 rounded-xl bg-[#35106E] hover:bg-[#280c55] text-white text-xs font-black flex items-center justify-center gap-2 transition active:scale-[0.99] cursor-pointer shadow-xs"
            >
              <Crown className="size-3.5 text-[#C8F135]" />
              Assinar Clube para Conectar Dispositivos
            </button>
          </div>
        ) : (
          /* CENÁRIO 2: USUÁRIO É MEMBRO DO CLUBE */
          <div className="rounded-3xl bg-white border border-purple-200/80 p-5 space-y-4 shadow-xs">
            {activeConnectedDevice ? (
              /* ESTADO A: DISPOSITIVO CONECTADO */
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="size-12 rounded-2xl grid place-items-center font-black text-sm shadow-xs"
                      style={{
                        backgroundColor: activeConnectedDevice.color,
                        color: activeConnectedDevice.fg,
                      }}
                    >
                      <Watch className="size-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-sm font-black text-[#202127]">
                          {activeConnectedDevice.brandTitle}
                        </h3>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-black">
                          <CheckCircle2 className="size-3" />
                          Conectado &amp; Auditado
                        </span>
                      </div>
                      <p className="text-xs text-[#5F6270] mt-0.5">
                        {activeConnectedDevice.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Métricas Auditadas por Hardware */}
                <div className="grid grid-cols-3 gap-2 py-1 text-center">
                  <div className="p-2.5 rounded-2xl bg-[#F5F5F7] border border-zinc-200">
                    <Satellite className="size-4 text-[#5D7600] mx-auto mb-1" />
                    <span className="text-[10px] text-[#5F6270] block font-medium">GPS / Rota</span>
                    <span className="text-xs font-mono font-bold text-[#202127]">Auditado</span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-[#F5F5F7] border border-zinc-200">
                    <HeartPulse className="size-4 text-[#6B2AD9] mx-auto mb-1" />
                    <span className="text-[10px] text-[#5F6270] block font-medium">Cardíaco</span>
                    <span className="text-xs font-mono font-bold text-[#202127]">Óptico Real</span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-[#F5F5F7] border border-zinc-200">
                    <Flame className="size-4 text-[#35106E] mx-auto mb-1" />
                    <span className="text-[10px] text-[#5F6270] block font-medium">Calorias</span>
                    <span className="text-xs font-mono font-bold text-[#202127]">Biológicas</span>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex items-center gap-2 pt-1">
                  <div className="w-full space-y-2">
                  <div className="p-3 rounded-2xl bg-[#F5F5F7] border border-zinc-200 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-[#202127]">
                      <ShieldCheck className="size-3.5 text-[#5D7600]" />
                      <span>Sincronização Contínua em Nuvem</span>
                    </div>
                    <p className="text-[11px] text-[#5F6270] leading-relaxed">
                      Seus treinos são auditados e validados automaticamente via nuvem Garmin Connect™ e Terra API. Nenhuma ação manual é necessária para pontuar.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleDisconnect}
                    className="w-full py-2.5 px-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-[#5F6270] hover:text-[#202127] text-xs font-bold border border-zinc-200 transition active:scale-95 cursor-pointer text-center"
                  >
                    Desconectar Dispositivo
                  </button>
                </div>
                </div>
              </div>
            ) : (
              /* ESTADO B: NENHUM DISPOSITIVO CONECTADO AINDA */
              <div className="space-y-3">
                <div>
                  <h3 className="text-sm font-black text-[#202127]">
                    Conecte seu Relógio ou Plataforma
                  </h3>
                  <p className="text-xs text-[#5F6270] mt-0.5 leading-relaxed">
                    Escolha seu dispositivo abaixo para ativar a leitura de frequência cardíaca e GPS. Cada treino validado gera 20 nfs na sua carteira.
                  </p>
                </div>

                {/* Lista de Dispositivos para Conexão */}
                <div className="space-y-2">
                  {WEARABLE_OPTIONS.map((dev) => (
                    <div
                      key={dev.id}
                      className="p-3.5 rounded-2xl bg-[#F5F5F7] border border-zinc-200 flex items-center justify-between gap-3 hover:border-purple-300 transition"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="size-10 rounded-xl grid place-items-center font-bold text-xs shrink-0 shadow-xs"
                          style={{ backgroundColor: dev.color, color: dev.fg }}
                        >
                          <Watch className="size-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-black text-[#202127]">
                              {dev.brandTitle}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white text-[#35106E] border border-zinc-200 font-bold">
                              {dev.badge}
                            </span>
                          </div>
                          <span className="text-[11px] text-[#5F6270] block">
                            {dev.category}
                          </span>
                        </div>
                      </div>

                      {dev.id === "garmin" ? (
                        <button
                          type="button"
                          onClick={() => setShowGarminModal(true)}
                          className="py-2 px-3.5 rounded-xl bg-[#00A6E0] hover:bg-[#0094c9] text-white text-xs font-black transition active:scale-95 cursor-pointer shadow-xs shrink-0"
                        >
                          Conectar
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setSelectedBrandToConnect(dev)}
                          className="py-1.5 px-3 rounded-xl bg-zinc-200 text-[#5F6270] hover:text-[#202127] text-xs font-bold transition cursor-pointer shrink-0"
                        >
                          Em Breve
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* 4. OS 4 PILARES OFICIAIS DO CLUBE NETFITS */}
      <section className="px-4 space-y-3">
        <h2 className="text-base font-black text-[#202127] flex items-center gap-2">
          <Sparkles className="size-4 text-[#6B2AD9]" />
          Pilares &amp; Benefícios Exclusivos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Pilar 1: 250 nfs Mensais Garantidos */}
          <div className="rounded-2xl bg-white border border-purple-200/80 p-4 space-y-2 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-[#F2ECFD] text-[#6B2AD9]">
                <Coins className="size-5" />
              </div>
              <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-[#C8F135] text-[#202127]">
                250 nfs garantidos
              </span>
            </div>
            <h3 className="text-sm font-black text-[#202127]">250 nfs Todo Mês</h3>
            <p className="text-xs text-[#5F6270] leading-relaxed">
              Crédito automático de 250 nfs na ativação e a cada renovação mensal para resgatar no Shop ou acumular na carteira.
            </p>
          </div>

          {/* Pilar 2: 20 nfs por Treino Validado */}
          <div className="rounded-2xl bg-white border border-purple-200/80 p-4 space-y-2 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-[#F2ECFD] text-[#6B2AD9]">
                <Activity className="size-5" />
              </div>
              <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-[#F2ECFD] text-[#35106E]">
                Sweat-and-Earn
              </span>
            </div>
            <h3 className="text-sm font-black text-[#202127]">20 nfs por Treino Validado</h3>
            <p className="text-xs text-[#5F6270] leading-relaxed">
              Treine com seu relógio e acumule 20 nfs a cada treino auditado com dados reais de frequência cardíaca e GPS.
            </p>
          </div>

          {/* Pilar 3: +20% de Pontos no Shop */}
          <div className="rounded-2xl bg-white border border-purple-200/80 p-4 space-y-2 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-[#F2ECFD] text-[#6B2AD9]">
                <ShoppingBag className="size-5" />
              </div>
              <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-[#C8F135] text-[#202127]">
                +20% no Shop
              </span>
            </div>
            <h3 className="text-sm font-black text-[#202127]">Multiplicador VIP no Shop</h3>
            <p className="text-xs text-[#5F6270] leading-relaxed">
              Acumule 4,8 nfs para cada R$ 1,00 gasto no Shop oficial da Netfits (20% mais pontos que planos gratuitos).
            </p>
          </div>

          {/* Pilar 4: 10% Bônus em Compras de Indicados */}
          <div className="rounded-2xl bg-white border border-purple-200/80 p-4 space-y-2 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-[#F2ECFD] text-[#6B2AD9]">
                <Users className="size-5" />
              </div>
              <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-[#F2ECFD] text-[#35106E]">
                10% MGM Clube
              </span>
            </div>
            <h3 className="text-sm font-black text-[#202127]">Comissão MGM de Compras</h3>
            <p className="text-xs text-[#5F6270] leading-relaxed">
              Receba 10% de todos os pontos gerados em compras na loja feitas por amigos que se cadastraram com seu código.
            </p>
          </div>
        </div>
      </section>

      {/* 5. DÚVIDAS FREQUENTES (FAQ ACCORDION) */}
      <section className="px-4 space-y-2">
        <h2 className="text-base font-black text-[#202127] mb-2">
          Dúvidas Frequentes
        </h2>

        {[
          {
            q: "Como funciona a pontuação do Clube Netfits?",
            a: "Você recebe 250 nfs creditados no momento da adesão e a cada renovação mensal (a cada 30 dias). Além disso, cada treino físico validado via relógio ou app pontua +20 nfs diretamente na sua carteira digital.",
          },
          {
            q: "Como meus treinos com relógio são validados?",
            a: "A validação exige dados biológicos reais de sensores (frequência cardíaca contínua por sensor óptico, rota de GPS auditada e calorias reais). Registros manuais sem telemetria de sensores são bloqueados pelo sistema antifraude.",
          },
          {
            q: "Existe carência ou taxa de cancelamento?",
            a: "Não. A assinatura do Clube Netfits custa R$ 19,90 por mês e pode ser cancelada a qualquer momento sem taxas, multas ou fidelidade contratual.",
          },
        ].map((faq, i) => {
          const isOpen = openFaq === i;
          return (
            <div
              key={i}
              className="rounded-2xl bg-white border border-zinc-200 overflow-hidden transition-all shadow-xs"
            >
              <button
                type="button"
                onClick={() => toggleFaq(i)}
                className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs font-extrabold text-[#202127] cursor-pointer"
              >
                <span>{faq.q}</span>
                {isOpen ? (
                  <ChevronUp className="size-4 text-[#6B2AD9] shrink-0" />
                ) : (
                  <ChevronDown className="size-4 text-[#5F6270] shrink-0" />
                )}
              </button>
              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-xs text-[#5F6270] leading-relaxed border-t border-zinc-100">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* MODAL 1: CHECKOUT / ADESÃO AO CLUBE */}
      {showSubscribeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-sm bg-white text-[#202127] rounded-3xl border border-purple-200 p-6 space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-md bg-[#35106E] text-[#C8F135]">
                  <Crown className="size-4" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#6B2AD9]">
                  Assinatura do Clube Netfits
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowSubscribeModal(false)}
                className="size-7 rounded-full bg-zinc-100 text-[#5F6270] hover:text-[#202127] grid place-items-center cursor-pointer"
                aria-label="Fechar modal"
              >
                <X className="size-3.5" />
              </button>
            </div>

            <div className="text-center py-2 space-y-2">
              <div className="size-14 rounded-2xl mx-auto grid place-items-center text-xl font-black bg-[#F2ECFD] text-[#6B2AD9] shadow-xs">
                <Crown className="size-7" />
              </div>
              <h3 className="text-base font-black text-[#202127]">
                Ativar Clube Netfits VIP
              </h3>
              <p className="text-xs text-[#5F6270] leading-relaxed max-w-xs mx-auto">
                Desbloqueie agora mesmo 250 nfs na carteira, pontuação de 20 nfs por treino físico com relógio e benefícios VIP no Shop.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F5F5F7] border border-zinc-200 space-y-2">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-bold text-[#5F6270]">Valor da Mensalidade:</span>
                <span className="text-base font-black text-[#202127]">R$ 19,90 / mês</span>
              </div>
              <div className="flex items-baseline justify-between border-t border-zinc-200 pt-1.5">
                <span className="text-xs font-bold text-[#5F6270]">Pontos Imediatos:</span>
                <span className="text-xs font-black text-[#6B2AD9]">+250 nfs garantidos</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setShowSubscribeModal(false);
                toast.success("🔔 Você foi cadastrado na Lista VIP do Clube! Avisaremos assim que a cobrança for liberada.", { duration: 4000 });
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-black text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-sm active:scale-[0.99] border border-zinc-700"
            >
              <Clock className="size-4 text-[#C8F135]" />
              Entrar na Lista VIP (Aguardando Lançamento)
            </button>
          </div>
        </div>
      )}

      {/* MODAL 2: CONEXÃO GARMIN CONNECT (COM SUPORTE ANDROID CHROME & IOS) */}
      {showGarminModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-sm bg-white text-[#202127] rounded-3xl border border-purple-200 p-6 space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-md bg-black text-[#00A6E0]">
                  <Watch className="size-4" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#202127]">
                  Garmin Connect™ Oficial
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowGarminModal(false)}
                className="size-7 rounded-full bg-zinc-100 text-[#5F6270] hover:text-[#202127] grid place-items-center cursor-pointer"
                aria-label="Fechar modal"
              >
                <X className="size-3.5" />
              </button>
            </div>

            <div className="text-center py-2 space-y-2">
              <div className="size-14 rounded-2xl mx-auto grid place-items-center text-xl font-black bg-black text-[#00A6E0] shadow-xs">
                <Watch className="size-7" />
              </div>
              <h3 className="text-base font-black text-[#202127]">
                Autorizar Conexão Garmin Connect™
              </h3>
              <p className="text-xs text-[#5F6270] leading-relaxed max-w-xs mx-auto">
                Integração oficial via Garmin Developer Program. Você autorizará a sincronização automática de treinos, frequência cardíaca contínua e GPS.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-[#F5F5F7] border border-zinc-200 text-xs space-y-2 text-[#5F6270]">
              <div className="flex items-start gap-2">
                <ShieldCheck className="size-4 text-[#5D7600] shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed">
                  Compatível com <b>Android (Google Chrome)</b> e <b>iOS (Safari)</b>. Webhooks oficiais ativos na nuvem Netfits.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <a
                href={getGarminAuthUrl()}
                target="_system"
                rel="noopener noreferrer"
                onClick={() => {
                  toast.info("Abrindo Google Chrome para autorizar Garmin...");
                  setTimeout(() => {
                    setShowGarminModal(false);
                  }, 1200);
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-black hover:bg-zinc-800 text-white font-black text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-sm active:scale-[0.99] text-center"
              >
                <ExternalLink className="size-4 text-[#00A6E0]" />
                Abrir Autorização Garmin no Navegador
              </a>

              <button
                type="button"
                onClick={handleCopyGarminLink}
                className="w-full py-2.5 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-[#202127] font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer border border-zinc-200"
              >
                <Copy className="size-3.5 text-[#5F6270]" />
                Copiar Link para o Google Chrome
              </button>


            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: INFORMAÇÃO DE INTEGRAÇÃO EM DESENVOLVIMENTO (EM BREVE) */}
      {selectedBrandToConnect && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-sm bg-white text-[#202127] rounded-3xl border border-purple-200 p-6 space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#6B2AD9] flex items-center gap-1">
                <Clock className="size-3 text-[#6B2AD9]" />
                Em Breve
              </span>
              <button
                type="button"
                onClick={() => setSelectedBrandToConnect(null)}
                className="size-7 rounded-full bg-zinc-100 text-[#5F6270] hover:text-[#202127] grid place-items-center cursor-pointer"
                aria-label="Fechar modal"
              >
                <X className="size-3.5" />
              </button>
            </div>

            <div className="text-center py-2 space-y-2">
              <div
                className="size-14 rounded-2xl mx-auto grid place-items-center text-xl font-black shadow-xs"
                style={{
                  backgroundColor: selectedBrandToConnect.color,
                  color: selectedBrandToConnect.fg,
                }}
              >
                <Watch className="size-7" />
              </div>
              <h3 className="text-base font-black text-[#202127]">
                {selectedBrandToConnect.name} • Em Breve
              </h3>
              <p className="text-xs text-[#5F6270] leading-relaxed max-w-xs mx-auto">
                A conexão com <b>{selectedBrandToConnect.name}</b> está em desenvolvimento e será liberada em breve.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F2ECFD] border border-purple-200 text-xs space-y-1.5 text-[#35106E]">
              <p className="text-[11px] font-bold">
                ⚠️ Conexão Ativa no Momento:
              </p>
              <p className="text-[11px] text-[#5F6270] leading-relaxed">
                Atualmente, a única integração oficial e ativa para sincronização automática de treinos na Netfits é a <b>Garmin Connect™</b>.
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <button
                type="button"
                onClick={() => {
                  setSelectedBrandToConnect(null);
                  setShowGarminModal(true);
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-black hover:bg-zinc-800 text-white font-black text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-sm active:scale-[0.99]"
              >
                <ExternalLink className="size-4 text-[#00A6E0]" />
                Conectar com Garmin Connect™
              </button>

              <button
                type="button"
                onClick={() => setSelectedBrandToConnect(null)}
                className="w-full py-2.5 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-[#202127] font-bold text-xs flex items-center justify-center transition cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
