import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { healthBridge } from "@/lib/wearables/health-bridge-service";
import { useOperationalParams } from "@/lib/operational-params-store";
import { WEARABLE_BRANDS, type WearableBrand } from "@/components/WearablesHub";
import { toast } from "sonner";
import {
  Crown,
  Sparkles,
  CheckCircle2,
  Watch,
  ShoppingBag,
  HeartPulse,
  Flame,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Coins,
  ChevronDown,
  ChevronUp,
  Activity,
  Zap,
  Radio,
  Satellite,
  Check,
  X,
  Award,
  Clock,
} from "lucide-react";
import netfitsMark from "@/assets/netfits-mark.png";

export const Route = createFileRoute("/club")({
  head: () => ({
    meta: [
      { title: "Clube Netfits — Experiência VIP & Longevidade Ativa" },
      {
        name: "description",
        content: "Acelere sua vida em movimento. 250 nfs por mês + 25 nfs por treino validado, telemetria de relógios e benefícios no Shop.",
      },
      { property: "og:title", content: "Clube Netfits — Experiência VIP" },
    ],
  }),
  component: ClubPage,
});

export function ClubPage() {
  const activeUser = sharedSandboxStore.useActiveUser();
  const params = useOperationalParams();
  const [isProcessing, setIsProcessing] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Estados de Wearables
  const [connectingBrand, setConnectingBrand] = useState<WearableBrand | null>(null);
  const [isSimulatingSync, setIsSimulatingSync] = useState(false);
  const [selectedSport, setSelectedSport] = useState<"running" | "cycling" | "swimming" | "strength">("running");

  const isMember = Boolean(activeUser.isClubMember === true || activeUser.userCategory === "associado");
  const pointsPerWorkout = isMember ? 25 : (params.nfsPerWorkout || 25);

  // Calcula treinos validados e pontos acumulados do ciclo
  const userTransactions = sharedSandboxStore.getUserTransactions(activeUser.id);
  const clubWorkoutsThisCycle = userTransactions.filter((tx) => tx.category === "workout").length;
  const workoutPointsEarned = clubWorkoutsThisCycle * 25;
  const cycleBasePoints = isMember ? 250 : 0;
  const totalPointsThisCycle = Math.min(1000, cycleBasePoints + workoutPointsEarned);
  const progressPct = Math.min(100, Math.round((totalPointsThisCycle / 1000) * 100));

  // Identificação do dispositivo conectado
  const connectedBrandId = WEARABLE_BRANDS.find(
    (b) =>
      b.name.toLowerCase() === (activeUser.wearable || "").toLowerCase() ||
      b.id.toLowerCase() === (activeUser.wearable || "").toLowerCase()
  )?.id || (activeUser.wearable?.toLowerCase().includes("garmin") ? "garmin" : null);

  const activeConnectedBrand = WEARABLE_BRANDS.find((b) => b.id === connectedBrandId) || WEARABLE_BRANDS[0];

  // Ativação da assinatura do Clube
  const handleSubscribe = async () => {
    setIsProcessing(true);
    try {
      try {
        await fetch("/api/club/subscription-webhook", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "subscription.created",
            subscriptionId: `sub_netfits_${Date.now()}`,
            userId: activeUser.id,
            email: activeUser.email,
            cpf: activeUser.cpf,
            planId: "club_monthly",
            planName: "Clube Netfits Mensal",
            amountBrl: 19.9,
            status: "active",
            currentPeriodEnd: new Date(Date.now() + 30 * 24 * 3600 * 1000).toISOString(),
            gateway: "rock_encantech",
          }),
        });
      } catch (err) {
        console.warn("[ClubPage] Fallback local para ativação:", err);
      }

      const nowIso = new Date().toISOString();
      const clubBonusAmount = 250;

      sharedSandboxStore.updateUser(activeUser.id, {
        isClubMember: true,
        userCategory: "associado",
        nfsBalance: (activeUser.nfsBalance || 0) + clubBonusAmount,
      });

      const subTxId = `tx-club-sub-${Date.now()}`;
      sharedSandboxStore.addTransaction({
        id: subTxId,
        userId: activeUser.id,
        userName: activeUser.fullName || "Assinante Clube Netfits",
        amount: clubBonusAmount,
        description: "👑 Assinatura Clube Netfits: Mensalidade (250 nfs)",
        category: "welcome",
        timestamp: nowIso,
      });

      toast.success("🎉 Bem-vindo ao Clube Netfits! +250 nfs creditados na sua carteira. Agora cada treino validado rende +25 nfs.", {
        duration: 5000,
      });
    } catch {
      toast.error("Não foi possível processar a assinatura no momento.");
    } finally {
      setIsProcessing(false);
    }
  };

  // Cancelamento de teste em homologação
  const handleCancelSubscription = async () => {
    setIsProcessing(true);
    try {
      try {
        await fetch("/api/club/subscription-webhook", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "subscription.canceled",
            subscriptionId: `sub_cancel_${Date.now()}`,
            userId: activeUser.id,
            email: activeUser.email,
            planId: "club_monthly",
            planName: "Clube Netfits Mensal",
            amountBrl: 19.9,
            status: "canceled",
            currentPeriodEnd: new Date().toISOString(),
          }),
        });
      } catch (err) {
        console.warn("[ClubPage] Fallback local para cancelamento:", err);
      }

      sharedSandboxStore.updateUser(activeUser.id, {
        isClubMember: false,
        userCategory: "atleta",
      });

      toast.info("Assinatura do Clube suspensa em homologação. Você retornou ao plano padrão Atleta.");
    } catch {
      toast.error("Erro ao suspender assinatura de teste.");
    } finally {
      setIsProcessing(false);
    }
  };

  // Conexão Terra API
  const handleConfirmTerraConnect = () => {
    if (!connectingBrand) return;
    setIsSimulatingSync(true);

    setTimeout(() => {
      sharedSandboxStore.updateUser(activeUser.id, { wearable: connectingBrand.name });
      setIsSimulatingSync(false);
      setConnectingBrand(null);
      toast.success(`🎉 ${connectingBrand.name} conectado com sucesso via Terra API! Telemetria e GPS ativos.`);
    }, 1000);
  };

  const handleDisconnectWearable = () => {
    sharedSandboxStore.updateUser(activeUser.id, { wearable: "Nenhum" });
    toast.info("Dispositivo desvinculado. Você pode reconectar a qualquer momento.");
  };

  // Simulação de treino com sensores ópticos
  const handleSimulateWorkout = async () => {
    setIsSimulatingSync(true);
    try {
      const nowIso = new Date().toISOString();
      let mockName = "Corrida Matinal com Sensor Óptico";
      let mockDist = 10.2;
      let mockDur = 48;
      let mockCals = 590;
      let mockHr = 152;

      if (selectedSport === "cycling") {
        mockName = "Treino de Ciclismo de Estrada (Terra API)";
        mockDist = 32.5;
        mockDur = 68;
        mockCals = 780;
        mockHr = 142;
      } else if (selectedSport === "swimming") {
        mockName = "Natação em Piscina / Águas Abertas";
        mockDist = 1.5;
        mockDur = 35;
        mockCals = 440;
        mockHr = 136;
      } else if (selectedSport === "strength") {
        mockName = "Treino de Força e Musculação";
        mockDist = 0;
        mockDur = 45;
        mockCals = 380;
        mockHr = 128;
      }

      const normalizedMock = {
        id: `mock-terra-${Date.now()}`,
        fingerprintHash: `fp-terra-${Date.now()}-${Math.random().toString(36).substring(7)}`,
        sport: selectedSport,
        title: mockName,
        startTime: nowIso,
        durationMinutes: mockDur,
        distanceKm: mockDist,
        calories: mockCals,
        avgHeartRate: mockHr,
        maxHeartRate: mockHr + 20,
        hasHardwareSensors: true,
        isManualEntry: false,
        sourceDevice: activeConnectedBrand?.name || "Garmin",
        sourceChannel: "terra_api" as const,
      };

      const result = await healthBridge.validateDailyWorkout(
        normalizedMock as any,
        activeUser.id,
        pointsPerWorkout
      );

      if (result.success) {
        toast.success(
          `🏃 Treino validado via Terra API! +${result.pointsAwarded} nfs creditados na sua carteira.`,
          { duration: 4000 }
        );
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error("Erro ao simular webhook da Terra API.");
    } finally {
      setIsSimulatingSync(false);
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="pb-12 space-y-5 bg-[#F5F5F7] min-h-full">
      {/* 1. HERO INSTITUCIONAL — PALETA OFICIAL NETFITS KV */}
      <section className="px-4 pt-5 pb-2">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="p-1 rounded-md bg-[#35106E] text-[#C8F135] shadow-xs">
            <Crown className="size-4" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-[#6B2AD9]">
            Clube Netfits • Fase 2
          </span>
        </div>
        <h1 className="text-2xl font-black tracking-tight text-[#202127]">
          A vida em movimento vale mais.
        </h1>
        <p className="text-xs text-[#5F6270] mt-1 leading-relaxed">
          O acelerador oficial para quem pratica esportes. Ganhe pontos garantidos todo mês, desbloqueie a pontuação de treinos com relógio e aproveite vantagens exclusivas.
        </p>
      </section>

      {/* 2. CARD PRINCIPAL DE STATUS / OFERTA */}
      <section className="px-4">
        <div className="rounded-3xl bg-white border border-purple-200/80 p-5 shadow-sm space-y-4 relative overflow-hidden">
          {/* Tag de Topo */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2ECFD] text-[#35106E] text-[11px] font-extrabold border border-purple-200">
              <Sparkles className="size-3.5 text-[#6B2AD9]" />
              {isMember ? "Assinatura Ativa" : "Plano Mensal"}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#C8F135] text-[#202127] text-xs font-black shadow-xs">
              <Coins className="size-3.5" />
              250 nfs/mês + 25 nfs por treino
            </span>
          </div>

          {/* Preço e Mecânica */}
          <div className="flex items-baseline justify-between pt-1">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-[#202127]">R$ 19,90</span>
                <span className="text-xs font-semibold text-[#5F6270]">/ mês</span>
              </div>
              <span className="text-[11px] text-[#5F6270] block mt-0.5">Sem fidelidade ou carência</span>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-[#35106E] block">250 nfs todo mês</span>
              <span className="text-[11px] text-[#5F6270]">+ 25 nfs por treino validado</span>
            </div>
          </div>

          {/* Se Já for Membro: Barra de Progresso Mensal de Pontos */}
          {isMember ? (
            <div className="pt-3 border-t border-zinc-100 space-y-2">
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
              <div className="flex items-center justify-between text-[10px] text-[#5F6270] pt-1">
                <span>250 nfs de mensalidade</span>
                <span>{workoutPointsEarned} nfs em {clubWorkoutsThisCycle} treinos validados</span>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => toast.success("Seus benefícios do Clube Netfits estão 100% ativos!")}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#F2ECFD] text-[#35106E] font-extrabold text-xs border border-purple-200 transition active:scale-95 text-center"
                >
                  Benefícios Ativos
                </button>
                <button
                  type="button"
                  disabled={isProcessing}
                  onClick={handleCancelSubscription}
                  className="py-2.5 px-3 rounded-xl bg-zinc-100 text-[#5F6270] hover:text-red-600 font-semibold text-xs border border-zinc-200 transition active:scale-95"
                >
                  {isProcessing ? "Processando..." : "Suspender (Teste)"}
                </button>
              </div>
            </div>
          ) : (
            <div className="pt-2">
              <button
                type="button"
                disabled={isProcessing}
                onClick={handleSubscribe}
                className="w-full py-3.5 px-4 rounded-2xl bg-[#C8F135] hover:bg-[#bfe830] text-[#202127] font-black text-sm flex items-center justify-center gap-2 shadow-sm transition active:scale-[0.99] cursor-pointer"
              >
                {isProcessing ? (
                  <>
                    <RefreshCw className="size-4 animate-spin text-[#202127]" />
                    Ativando Assinatura em Homologação...
                  </>
                ) : (
                  <>
                    <Crown className="size-4 text-[#202127]" />
                    Assinar Clube Netfits — R$ 19,90/mês
                    <ArrowRight className="size-4 text-[#202127] ml-1" />
                  </>
                )}
              </button>
              <p className="text-[10px] text-center text-[#5F6270] mt-2">
                Ambiente de Homologação • Zero impacto fiscal • Cancelamento a qualquer momento
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 3. HUB DE WEARABLES INTEGRADO (TERRA API) */}
      <section className="px-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-[#35106E] text-[#C8F135]">
              <Radio className="size-4" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#6B2AD9]">
                Telemetria de Sensores
              </span>
              <h2 className="text-base font-black text-[#202127]">
                Hub de Wearables (Terra API)
              </h2>
            </div>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#F2ECFD] text-[#35106E] border border-purple-200">
            Sandbox
          </span>
        </div>

        {/* Card do Dispositivo Conectado */}
        <div className="rounded-3xl bg-white border border-zinc-200 p-4 space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="size-11 rounded-2xl grid place-items-center font-black text-sm shadow-xs"
                style={{ backgroundColor: activeConnectedBrand.color, color: activeConnectedBrand.fg }}
              >
                <Watch className="size-5" />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#202127]">{activeConnectedBrand.brandTitle}</h4>
                <span className="text-[11px] text-[#5D7600] font-bold flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="size-3.5" />
                  {connectedBrandId ? "Conexão em Nuvem Ativa" : "Pronto para Conectar"}
                </span>
              </div>
            </div>

            {connectedBrandId ? (
              <button
                type="button"
                onClick={handleDisconnectWearable}
                className="px-2.5 py-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-[#5F6270] hover:text-red-600 text-xs font-bold transition active:scale-95 cursor-pointer border border-zinc-200"
              >
                Desconectar
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setConnectingBrand(activeConnectedBrand)}
                className="px-3 py-1.5 rounded-xl bg-[#6B2AD9] text-white text-xs font-black transition active:scale-95 cursor-pointer shadow-xs"
              >
                Conectar
              </button>
            )}
          </div>

          {/* Métricas Auditadas */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-zinc-100 text-center">
            <div className="p-2.5 rounded-2xl bg-[#F5F5F7] border border-zinc-200">
              <Satellite className="size-3.5 text-[#5D7600] mx-auto mb-1" />
              <span className="text-[10px] text-[#5F6270] block font-medium">GPS / Rota</span>
              <span className="text-xs font-mono font-bold text-[#202127]">Auditado</span>
            </div>
            <div className="p-2.5 rounded-2xl bg-[#F5F5F7] border border-zinc-200">
              <HeartPulse className="size-3.5 text-[#6B2AD9] mx-auto mb-1" />
              <span className="text-[10px] text-[#5F6270] block font-medium">Cardíaco</span>
              <span className="text-xs font-mono font-bold text-[#202127]">Óptico Real</span>
            </div>
            <div className="p-2.5 rounded-2xl bg-[#F5F5F7] border border-zinc-200">
              <Flame className="size-3.5 text-[#35106E] mx-auto mb-1" />
              <span className="text-[10px] text-[#5F6270] block font-medium">Calorias</span>
              <span className="text-xs font-mono font-bold text-[#202127]">Biológicas</span>
            </div>
          </div>

          {/* Simulador de Treino em Homologação */}
          <div className="pt-2 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#202127]">Simular Webhook de Treino</span>
              <span className="font-extrabold text-[#6B2AD9]">+{pointsPerWorkout} nfs</span>
            </div>

            <div className="grid grid-cols-4 gap-1.5 text-xs font-bold">
              {(["running", "cycling", "swimming", "strength"] as const).map((sport) => {
                const labels = {
                  running: "🏃 Corrida",
                  cycling: "🚴 Bike",
                  swimming: "🏊 Natação",
                  strength: "🏋️ Força",
                };
                return (
                  <button
                    key={sport}
                    type="button"
                    onClick={() => setSelectedSport(sport)}
                    className={`py-2 px-1 rounded-xl transition text-center cursor-pointer ${
                      selectedSport === sport
                        ? "bg-[#35106E] text-[#C8F135] shadow-xs"
                        : "bg-[#F5F5F7] text-[#5F6270] hover:text-[#202127] border border-zinc-200"
                    }`}
                  >
                    {labels[sport]}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              disabled={isSimulatingSync}
              onClick={handleSimulateWorkout}
              className="w-full py-2.5 px-3 rounded-xl bg-[#35106E] hover:bg-[#2a0c58] active:scale-[0.99] text-white font-extrabold text-xs flex items-center justify-center gap-2 transition disabled:opacity-50 cursor-pointer shadow-xs"
            >
              {isSimulatingSync ? (
                <>
                  <RefreshCw className="size-3.5 animate-spin text-[#C8F135]" />
                  Processando Webhook Terra API...
                </>
              ) : (
                <>
                  <Zap className="size-3.5 text-[#C8F135]" />
                  Disparar Treino Auditado via Terra (+{pointsPerWorkout} nfs)
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* 4. OS 4 PILARES DO CLUBE (CARDS VISUAIS NO KV) */}
      <section className="px-4 space-y-3">
        <h2 className="text-base font-black text-[#202127] flex items-center gap-2">
          <Sparkles className="size-4 text-[#6B2AD9]" />
          Pilares &amp; Benefícios Exclusivos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Pilar 1: Pontos Híbridos */}
          <div className="rounded-2xl bg-white border border-purple-200/80 p-4 space-y-1.5 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-[#F2ECFD] text-[#6B2AD9]">
                <Coins className="size-5" />
              </div>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#C8F135] text-[#202127]">
                250 nfs + 25 nfs/treino
              </span>
            </div>
            <h3 className="text-sm font-black text-[#202127] pt-1">250 nfs/mês + 25 nfs por Treino</h3>
            <p className="text-xs text-[#5F6270] leading-relaxed">
              250 nfs garantidos todo mês na assinatura e mensalidade + 25 nfs creditados por cada treino validado com sensores.
            </p>
          </div>

          {/* Pilar 2: Telemetria de Wearables */}
          <div className="rounded-2xl bg-white border border-purple-200/80 p-4 space-y-1.5 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-[#F2ECFD] text-[#6B2AD9]">
                <Watch className="size-5" />
              </div>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#F2ECFD] text-[#35106E]">
                12 Marcas
              </span>
            </div>
            <h3 className="text-sm font-black text-[#202127] pt-1">Telemetria de Wearables</h3>
            <p className="text-xs text-[#5F6270] leading-relaxed">
              Integração em nuvem com Apple Watch, Garmin, Strava, Polar e Coros via Terra API com auditoria biométrica antifraude.
            </p>
          </div>

          {/* Pilar 3: Vantagens no Shop */}
          <div className="rounded-2xl bg-white border border-purple-200/80 p-4 space-y-1.5 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-[#F2ECFD] text-[#6B2AD9]">
                <ShoppingBag className="size-5" />
              </div>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#C8F135] text-[#202127]">
                Shop VIP
              </span>
            </div>
            <h3 className="text-sm font-black text-[#202127] pt-1">Vantagens Exclusivas no Shop</h3>
            <p className="text-xs text-[#5F6270] leading-relaxed">
              Condições especiais, frete reduzido e ofertas em primeira mão com lojistas parceiros credenciados na plataforma.
            </p>
          </div>

          {/* Pilar 4: Longevidade Ativa & Fibios */}
          <div className="rounded-2xl bg-white border border-purple-200/80 p-4 space-y-1.5 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-[#F2ECFD] text-[#6B2AD9]">
                <HeartPulse className="size-5" />
              </div>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#F2ECFD] text-[#35106E]">
                Fibios
              </span>
            </div>
            <h3 className="text-sm font-black text-[#202127] pt-1">Longevidade Ativa &amp; Fibios</h3>
            <p className="text-xs text-[#5F6270] leading-relaxed">
              Protocolos de sono, reparo celular e recuperação esportiva com curadoria dos médicos fundadores da Fibios.
            </p>
          </div>
        </div>
      </section>

      {/* 5. DÚVIDAS FREQUENTES (ACCORDION NO PADRÃO DO APP) */}
      <section className="px-4 space-y-2">
        <h2 className="text-base font-black text-[#202127] mb-2">
          Dúvidas Frequentes
        </h2>

        {[
          {
            q: "Como funciona a pontuação do Clube Netfits?",
            a: "Você recebe 250 nfs garantidos no momento da assinatura e a cada renovação mensal (a cada 30 dias). Além disso, cada treino físico validado via relógio ou app pontua +25 nfs diretamente na sua carteira.",
          },
          {
            q: "Como os meus treinos são auditados e validados?",
            a: "A validação é feita pela integração direta com a Terra API. São exigidos dados biológicos reais de hardware (frequência cardíaca contínua por sensor óptico, GPS auditado e calorias reais). Registros manuais são filtrados por travas antifraude.",
          },
          {
            q: "Existe carência ou taxa de cancelamento?",
            a: "Não. A assinatura do Clube Netfits custa R$ 19,90 por mês e pode ser cancelada a qualquer momento com apenas 1 clique, sem taxas nem carência.",
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

      {/* Modal / Sheet do Terra Connect Widget (Simulação Turnkey) */}
      {connectingBrand && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-sm bg-white text-[#202127] rounded-3xl border border-purple-200 p-5 space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#6B2AD9] flex items-center gap-1">
                <Radio className="size-3" />
                Terra Connect Widget
              </span>
              <button
                type="button"
                onClick={() => setConnectingBrand(null)}
                className="size-7 rounded-full bg-zinc-100 text-[#5F6270] hover:text-[#202127] grid place-items-center cursor-pointer"
              >
                <X className="size-3.5" />
              </button>
            </div>

            <div className="text-center py-2 space-y-2">
              <div
                className="size-14 rounded-2xl mx-auto grid place-items-center text-xl font-black shadow-sm"
                style={{ backgroundColor: connectingBrand.color, color: connectingBrand.fg }}
              >
                <Watch className="size-7" />
              </div>
              <h3 className="text-base font-black text-[#202127]">
                Autorizar Conexão com {connectingBrand.name}
              </h3>
              <p className="text-xs text-[#5F6270] leading-relaxed max-w-xs mx-auto">
                A Terra API solicitará permissão segura para ler suas atividades esportivas (duração, distância, frequência cardíaca e calorias).
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-[#F5F5F7] border border-zinc-200 text-xs space-y-1.5 text-[#5F6270]">
              <div className="flex items-center justify-between">
                <span>Protocolo:</span>
                <span className="font-mono text-[#35106E] text-[11px] font-bold">{connectingBrand.protocol}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Ambiente:</span>
                <span className="font-mono text-[#6B2AD9] text-[11px] font-bold">Terra Sandbox v2</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Privacidade:</span>
                <span className="text-[#5D7600] text-[11px] font-bold">Auditado &amp; LGPD Compliant</span>
              </div>
            </div>

            <button
              type="button"
              disabled={isSimulatingSync}
              onClick={handleConfirmTerraConnect}
              className="w-full py-3 px-4 rounded-xl bg-[#C8F135] hover:bg-[#bfe830] active:scale-[0.99] text-[#202127] font-black text-xs flex items-center justify-center gap-2 transition disabled:opacity-50 cursor-pointer shadow-sm"
            >
              {isSimulatingSync ? (
                <>
                  <RefreshCw className="size-4 animate-spin text-[#202127]" />
                  Autorizando Handshake OAuth...
                </>
              ) : (
                <>
                  Autorizar Conexão na Terra API
                  <ArrowRight className="size-4 text-[#202127]" />
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
