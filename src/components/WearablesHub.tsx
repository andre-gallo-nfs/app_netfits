import { useState, useEffect } from "react";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { useOperationalParams } from "@/lib/operational-params-store";
import { clubModalStore } from "@/lib/club-modal-store";
import { nativeBridge } from "@/lib/native-bridge";
import { toast } from "sonner";
import {
  Watch,
  HeartPulse,
  Flame,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Crown,
  Satellite,
  Clock,
  Lock,
  Check,
  X,
  Radio,
  Copy,
  RefreshCw,
} from "lucide-react";

export interface WearableBrand {
  id: string;
  name: string;
  category: "endurance" | "smartwatch" | "health_ring" | "cycling";
  brandTitle: string;
  color: string;
  fg: string;
  badge: "Oficial & Ativo" | "Em Breve";
  protocol: string;
  popularIn: string;
}

export const WEARABLE_BRANDS: WearableBrand[] = [
  {
    id: "garmin",
    name: "Garmin",
    category: "endurance",
    brandTitle: "Garmin Connect™",
    color: "#000000",
    fg: "#00A6E0",
    badge: "Oficial & Ativo",
    protocol: "Garmin Developer Program (Cloud OAuth 2.0)",
    popularIn: "Corrida, Ciclismo, Triathlon",
  },
  {
    id: "apple",
    name: "Apple Watch",
    category: "smartwatch",
    brandTitle: "Apple HealthKit & Vital",
    color: "#000000",
    fg: "#ffffff",
    badge: "Oficial & Ativo",
    protocol: "Apple HealthKit / Vital Hub",
    popularIn: "Dia a dia, Corrida, Funcional",
  },
  {
    id: "strava",
    name: "Strava",
    category: "endurance",
    brandTitle: "Strava API Hub",
    color: "#FC4C02",
    fg: "#ffffff",
    badge: "Oficial & Ativo",
    protocol: "Strava API Direct (Cloud OAuth 2.0)",
    popularIn: "Comunidade Esportiva Global",
  },
  {
    id: "polar",
    name: "Polar",
    category: "endurance",
    brandTitle: "Polar Flow API",
    color: "#E2231A",
    fg: "#ffffff",
    badge: "Em Breve",
    protocol: "Polar Flow Cloud",
    popularIn: "Frequencímetros & Zonas Cardíacas",
  },
  {
    id: "coros",
    name: "Coros",
    category: "endurance",
    brandTitle: "Coros Cloud Training",
    color: "#F04E23",
    fg: "#ffffff",
    badge: "Em Breve",
    protocol: "Coros API",
    popularIn: "Maratona & Ultra Trail Running",
  },
  {
    id: "suunto",
    name: "Suunto",
    category: "endurance",
    brandTitle: "Suunto Cloud API",
    color: "#1A1A1A",
    fg: "#ffffff",
    badge: "Em Breve",
    protocol: "Suunto Cloud",
    popularIn: "Montanha & Esportes Outdoor",
  },
  {
    id: "wahoo",
    name: "Wahoo",
    category: "cycling",
    brandTitle: "Wahoo ELEMNT Cloud",
    color: "#002B49",
    fg: "#00B2E2",
    badge: "Em Breve",
    protocol: "Wahoo Cloud",
    popularIn: "Ciclocomputadores & Smart Trainers",
  },
  {
    id: "whoop",
    name: "WHOOP",
    category: "health_ring",
    brandTitle: "WHOOP 4.0 Life Telemetry",
    color: "#0A0A0A",
    fg: "#ffffff",
    badge: "Em Breve",
    protocol: "WHOOP API",
    popularIn: "Strain, HRV & Recuperação Celular",
  },
  {
    id: "oura",
    name: "Oura Ring",
    category: "health_ring",
    brandTitle: "Oura Cloud Health API",
    color: "#232323",
    fg: "#D4AF7A",
    badge: "Em Breve",
    protocol: "Oura Cloud",
    popularIn: "Sono, Temperatura & Prontidão",
  },
  {
    id: "samsung",
    name: "Samsung Galaxy",
    category: "smartwatch",
    brandTitle: "Samsung Health / Health Connect",
    color: "#1428A0",
    fg: "#ffffff",
    badge: "Em Breve",
    protocol: "Health Connect Nativo",
    popularIn: "Smartwatches Galaxy",
  },
  {
    id: "google",
    name: "Google Health",
    category: "smartwatch",
    brandTitle: "Android Health Connect",
    color: "#4285F4",
    fg: "#ffffff",
    badge: "Em Breve",
    protocol: "Health Connect Nativo",
    popularIn: "Ecossistema Android",
  },
  {
    id: "fitbit",
    name: "Fitbit",
    category: "smartwatch",
    brandTitle: "Google Fitbit API",
    color: "#00B0B9",
    fg: "#ffffff",
    badge: "Em Breve",
    protocol: "Fitbit Cloud",
    popularIn: "Saúde & Atividade Contínua",
  },
];

export function WearablesHub() {
  const activeUser = sharedSandboxStore.useActiveUser();
  const params = useOperationalParams();

  const isClubMember = Boolean(activeUser.isClubMember === true || activeUser.plan === "club");

  const [connectingBrand, setConnectingBrand] = useState<WearableBrand | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (url.searchParams.get("garmin_connected") === "true") {
        sharedSandboxStore.updateUser(activeUser.id, { wearable: "Garmin" });
        toast.success("🎉 Seu Garmin Connect™ foi conectado com sucesso à Netfits! Seus próximos treinos serão pontuados automaticamente.");
        url.searchParams.delete("garmin_connected");
        window.history.replaceState({}, document.title, url.pathname + (url.searchParams.toString() ? "?" + url.searchParams.toString() : ""));
      }
      if (url.searchParams.get("strava_connected") === "true") {
        sharedSandboxStore.updateUser(activeUser.id, { wearable: "Strava" });
        toast.success("🎉 Sua conta Strava foi conectada com sucesso à Netfits! Seus treinos serão validados no Clube.");
        url.searchParams.delete("strava_connected");
        window.history.replaceState({}, document.title, url.pathname + (url.searchParams.toString() ? "?" + url.searchParams.toString() : ""));
      }
      if (url.searchParams.get("vital_connected") === "true") {
        sharedSandboxStore.updateUser(activeUser.id, { wearable: "Apple Watch (Vital)" });
        toast.success("🎉 Seu dispositivo foi vinculado via Vital Hub! Treinos ativos pontuarão automaticamente.");
        url.searchParams.delete("vital_connected");
        window.history.replaceState({}, document.title, url.pathname + (url.searchParams.toString() ? "?" + url.searchParams.toString() : ""));
      }
    }
  }, [activeUser.id]);

  const handleOpenStrava = async (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    try {
      const res = await fetch(`/api/strava/auth-url?userId=${encodeURIComponent(activeUser.id)}`);
      if (res.ok) {
        const data = await res.json();
        if (data.authUrl) {
          toast.info("Abrindo login oficial do Strava...");
          setConnectingBrand(null);
          await nativeBridge.openExternalUrl(data.authUrl);
          return;
        }
      }
      toast.error("Falha ao gerar link do Strava.");
    } catch {
      toast.error("Erro ao conectar com Strava.");
    }
  };

  const handleOpenVital = async (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    try {
      toast.info("Iniciando conexão com Vital Hub...");
      const res = await fetch(`/api/vital/link-token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: activeUser.id }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.link_web_url) {
          toast.info("Abrindo tela de conexão de dispositivos...");
          setConnectingBrand(null);
          await nativeBridge.openExternalUrl(data.link_web_url);
          return;
        }
      }
      toast.error("Falha ao inicializar Vital Link.");
    } catch {
      toast.error("Erro de conexão com Vital API.");
    }
  };

  const getGarminAuthUrl = () => {
    return `https://www.netfits.com.br/api/garmin/authorize?userId=${encodeURIComponent(
      activeUser.id
    )}&redirect=/club`;
  };

  const getDirectGarminUrl = () => {
    const statePayload =
      typeof window !== "undefined"
        ? btoa(JSON.stringify({ userId: activeUser.id, redirectTarget: "/activities" }))
        : activeUser.id;

    return `https://connect.garmin.com/oauth2Confirm?client_id=e654043f-8094-4d1f-af62-970df6a17ab2&response_type=code&redirect_uri=${encodeURIComponent(
      "https://www.netfits.com.br/api/garmin/oauth/callback"
    )}&state=${encodeURIComponent(statePayload)}`;
  };

  const handleOpenGarmin = async (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const authUrl = getGarminAuthUrl();
    toast.info("Abrindo login oficial da Garmin Connect...");
    setConnectingBrand(null);
    await nativeBridge.openExternalUrl(authUrl);
  };

  const handleCopyGarminLink = (e: React.MouseEvent) => {
    e.preventDefault();
    const authUrl = getDirectGarminUrl();
    if (typeof navigator !== "undefined" && navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(authUrl);
      toast.success("Link copiado! Cole no Google Chrome para autorizar.");
    } else {
      toast.info("Acesse: " + authUrl);
    }
  };

  const [isSyncing, setIsSyncing] = useState(false);

  const handleManualSync = async () => {
    setIsSyncing(true);
    try {
      let res: Response;
      if (connectedBrandId === "apple") {
        res = await fetch(`/api/vital/sync-recent-workouts?userId=${activeUser.id}`);
      } else {
        res = await fetch(`/api/garmin/sync-recent-workouts?userId=${activeUser.id}&hours=72`);
      }

      if (res.ok) {
        const data = await res.json();
        if (data.requiresAuth) {
          toast.info("Vincule sua conta para sincronizar seus treinos.");
          setConnectingBrand(WEARABLE_BRANDS.find((b) => b.id === (connectedBrandId || "garmin")) || null);
          return;
        }
        if (data.processedCount > 0) {
          sharedSandboxStore.updateUser(activeUser.id, {
            nfsBalance: (activeUser.nfsBalance || 0) + (data.pointsAwarded || 0),
          });
          toast.success(`🎉 ${data.processedCount} novo(s) treino(s) validado(s)! (+${data.pointsAwarded} nfs)`);
        } else {
          toast.info("Tudo em dia! Nenhum novo treino pendente de validação.");
        }
      } else {
        toast.error("Não foi possível sincronizar no momento. Tente novamente em instantes.");
      }
    } catch {
      toast.error("Erro de conexão ao buscar treinos na nuvem.");
    } finally {
      setIsSyncing(false);
    }
  };

  // APENAS Garmin é uma conexão real e ativa no momento
  
  // Escuta retorno ou retomada de foco do aplicativo (garante ativação instantânea no retorno ao app)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkCloudGarminStatus = async () => {
      try {
        const res = await fetch(`/api/garmin/status?userId=${activeUser.id}`);
        if (res.ok) {
          const data = await res.json();
          if (data.userConnected) {
            const wasConnected = Boolean(activeUser.wearable && activeUser.wearable.toLowerCase().includes("garmin"));
            if (!wasConnected) {
              sharedSandboxStore.updateUser(activeUser.id, { wearable: "Garmin Connect" });
              toast.success("🎉 Seu Garmin Connect™ foi conectado com sucesso à Netfits!");
            }

            // Sincronização passiva silenciosa de treinos recentes (frictionless)
            try {
              const syncRes = await fetch(`/api/garmin/sync-recent-workouts?userId=${activeUser.id}&hours=72`);
              if (syncRes.ok) {
                const syncData = await syncRes.json();
                if (syncData.pointsAwarded > 0) {
                  sharedSandboxStore.updateUser(activeUser.id, {
                    nfsBalance: (activeUser.nfsBalance || 0) + syncData.pointsAwarded,
                  });
                  toast.success(`🏃 ${syncData.processedCount} novo(s) treino(s) Garmin sincronizado(s)! (+${syncData.pointsAwarded} nfs)`);
                }
              }
            } catch {}
          }
        }
      } catch {
        // silent
      }
    };

    // Executa verificação ativa imediatamente no carregamento do Hub
    checkCloudGarminStatus();

    window.addEventListener("focus", checkCloudGarminStatus);
    const onVis = () => {
      if (document.visibilityState === "visible") checkCloudGarminStatus();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      window.removeEventListener("focus", checkCloudGarminStatus);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [activeUser.id, activeUser.wearable, activeUser.nfsBalance]);

  const userWearableStr = (activeUser.wearable || "").toLowerCase();
  const isGarminConnected = userWearableStr.includes("garmin");
  const isStravaConnected = userWearableStr.includes("strava");
  const isAppleConnected = userWearableStr.includes("apple") || userWearableStr.includes("vital");

  const connectedBrandId = isGarminConnected ? "garmin" : isStravaConnected ? "strava" : isAppleConnected ? "apple" : null;
  const activeConnectedBrand = WEARABLE_BRANDS.find((b) => b.id === connectedBrandId) || WEARABLE_BRANDS[0];

  const handleConnectBrand = (brand: WearableBrand) => {
    if (!isClubMember) {
      clubModalStore.open();
      toast.info("A sincronização de relógios para ganhar pontos por treino é exclusiva para assinantes do Clube Netfits.");
      return;
    }
    setConnectingBrand(brand);
  };

  const handleDisconnect = () => {
    sharedSandboxStore.updateUser(activeUser.id, { wearable: "Nenhum" });
    toast.info("Dispositivo desvinculado com sucesso.");
  };

  return (
    <div className="space-y-4">
      {/* Banner de Status da Conexão */}
      <div className="rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-sky-500/30 p-4 shadow-xl text-white relative overflow-hidden">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#00A6E0] flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-[#00A6E0] animate-pulse" />
              {connectedBrandId === "strava"
                ? "Strava API Direct • Conexão Oficial Ativa"
                : connectedBrandId === "apple"
                ? "Vital Hub • Conexão Oficial Ativa"
                : connectedBrandId === "garmin"
                ? "Garmin Developer Program • Conexão Oficial Ativa"
                : "Telemetria Multidispositivos em Nuvem"}
            </span>
            <h3 className="text-base font-black text-white">
              {connectedBrandId === "strava"
                ? "Strava Conectado"
                : connectedBrandId === "apple"
                ? "Apple Watch / Vital Conectado"
                : connectedBrandId === "garmin"
                ? "Garmin Connect™ Conectado"
                : "Nenhum Wearable Vinculado"}
            </h3>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              {connectedBrandId
                ? `Integração de nuvem ativa com ${activeConnectedBrand.name}. Seus treinos físicos com dados ópticos e GPS são validados e pontuados no Clube Netfits.`
                : "Conecte seu Garmin, Strava ou Apple Watch para validar seus treinos diários e pontuar 20 nfs no Clube Netfits."}
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-[#00A6E0] shrink-0">
            <Radio className="size-5" />
          </div>
        </div>

        {/* Status de Membro do Clube Netfits */}
        <div className="mt-3 pt-3 border-t border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Crown className={`size-4 ${isClubMember ? "text-amber-400" : "text-zinc-500"}`} />
            <span className="text-xs font-bold text-zinc-300">
              {isClubMember ? (
                <span className="text-amber-300">Membro do Clube • Pontuação de Treinos Liberada (20 nfs/treino)</span>
              ) : (
                <span className="text-zinc-400">Pontuação de treinos exclusiva do Clube Netfits</span>
              )}
            </span>
          </div>

          {!isClubMember && (
            <button
              type="button"
              onClick={() => clubModalStore.open()}
              className="text-xs font-black text-amber-400 hover:text-amber-300 flex items-center gap-1 underline underline-offset-2 cursor-pointer"
            >
              Conhecer Clube
              <ArrowRight className="size-3" />
            </button>
          )}
        </div>
      </div>

      {/* Dispositivo Ativo Conectado */}
      {connectedBrandId && (
        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="size-10 rounded-xl grid place-items-center font-black text-sm shadow-md"
                style={{ backgroundColor: activeConnectedBrand.color, color: activeConnectedBrand.fg }}
              >
                <Watch className="size-5" />
              </div>
              <div>
                <h4 className="text-sm font-black text-white">{activeConnectedBrand.brandTitle}</h4>
                <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="size-3" />
                  Sincronização em Nuvem Oficial Ativa
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleManualSync}
                disabled={isSyncing}
                className="px-3 py-1.5 rounded-lg bg-lime-400 hover:bg-lime-300 text-zinc-950 text-xs font-black transition active:scale-95 cursor-pointer disabled:opacity-50 flex items-center gap-1.5 shadow-sm"
              >
                <RefreshCw className={`size-3.5 ${isSyncing ? "animate-spin" : ""}`} />
                {isSyncing ? "Buscando..." : "Sincronizar"}
              </button>
              <button
                type="button"
                onClick={handleDisconnect}
                className="px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-red-400 text-xs font-bold transition active:scale-95 cursor-pointer"
              >
                Desconectar
              </button>
            </div>
          </div>

          {/* Painel de Métricas Sincronizadas */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-zinc-800 text-center">
            <div className="p-2 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
              <Satellite className="size-3.5 text-lime-400 mx-auto mb-1" />
              <span className="text-[10px] text-zinc-400 block font-medium">GPS / Trajeto</span>
              <span className="text-xs font-mono font-bold text-white">Auditado</span>
            </div>
            <div className="p-2 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
              <HeartPulse className="size-3.5 text-rose-400 mx-auto mb-1" />
              <span className="text-[10px] text-zinc-400 block font-medium">FC &amp; Zonas</span>
              <span className="text-xs font-mono font-bold text-white">Sensor Óptico</span>
            </div>
            <div className="p-2 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
              <Flame className="size-3.5 text-amber-400 mx-auto mb-1" />
              <span className="text-[10px] text-zinc-400 block font-medium">Calorias Ativas</span>
              <span className="text-xs font-mono font-bold text-white">Algoritmo Real</span>
            </div>
          </div>
        </div>
      )}

      {/* Grade com as Marcas de Wearables */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <h4 className="text-xs font-black uppercase tracking-wider text-zinc-400">
            Marcas de Dispositivos Esportivos
          </h4>
          <span className="text-[10px] text-zinc-500 font-mono">1 Oficial Ativa • 11 Em Breve</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {WEARABLE_BRANDS.map((brand) => {
            const isConnected = brand.id === connectedBrandId;
            const isConnectable = brand.id === "garmin" || brand.id === "strava" || brand.id === "apple";

            return (
              <div
                key={brand.id}
                className={`p-3 rounded-2xl border transition flex items-center justify-between ${
                  isConnected
                    ? "bg-zinc-900 border-[#00A6E0]/60 shadow-md ring-1 ring-[#00A6E0]/30"
                    : "bg-zinc-900/60 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="size-9 rounded-xl grid place-items-center font-bold text-xs shrink-0"
                    style={{ backgroundColor: brand.color, color: brand.fg }}
                  >
                    {brand.name.substring(0, 2)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h5 className="text-xs font-bold text-white flex items-center gap-1.5">
                        {brand.name}
                        {isConnected && (
                          <span className="size-1.5 rounded-full bg-emerald-400" />
                        )}
                      </h5>
                      <span
                        className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${
                          isConnectable
                            ? "bg-sky-500/20 text-[#00A6E0] border border-sky-500/30"
                            : "bg-zinc-800 text-zinc-400 border border-zinc-700/50"
                        }`}
                      >
                        {brand.badge}
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-400 block mt-0.5">
                      {brand.popularIn}
                    </span>
                  </div>
                </div>

                <div>
                  {isConnected ? (
                    <span className="px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/30 text-[10px] font-black flex items-center gap-1">
                      <Check className="size-3" />
                      Conectado
                    </span>
                  ) : isConnectable ? (
                    isClubMember ? (
                      <button
                        type="button"
                        onClick={() => handleConnectBrand(brand)}
                        className="px-3 py-1.5 rounded-full bg-[#00A6E0] hover:bg-[#0094c9] text-white text-[11px] font-black transition active:scale-95 cursor-pointer shadow-sm"
                      >
                        Conectar
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleConnectBrand(brand)}
                        className="px-2.5 py-1 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-[10px] font-bold transition active:scale-95 cursor-pointer border border-zinc-700 flex items-center gap-1"
                      >
                        <Lock className="size-3 text-amber-400" />
                        <span>Clube</span>
                      </button>
                    )
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleConnectBrand(brand)}
                      className="px-2.5 py-1 rounded-full bg-zinc-800/80 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 text-[10px] font-bold transition active:scale-95 cursor-pointer border border-zinc-700/50"
                    >
                      Em Breve
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal de Conexão Oficial Garmin, Strava ou Vital */}
      {connectingBrand && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-sm bg-zinc-900 text-white rounded-3xl border border-zinc-800 p-5 space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-lime-400 flex items-center gap-1">
                <Radio className="size-3" />
                {connectingBrand.id === "garmin"
                  ? "Garmin Connect™ OAuth 2.0"
                  : connectingBrand.id === "strava"
                  ? "Strava API Direct OAuth"
                  : connectingBrand.id === "apple"
                  ? "Apple Watch / Vital Hub"
                  : "Integração em Desenvolvimento"}
              </span>
              <button
                type="button"
                onClick={() => setConnectingBrand(null)}
                className="size-7 rounded-full bg-zinc-800 text-zinc-400 hover:text-white grid place-items-center cursor-pointer"
                aria-label="Fechar"
              >
                <X className="size-3.5" />
              </button>
            </div>

            <div className="text-center py-2 space-y-2">
              <div
                className="size-14 rounded-2xl mx-auto grid place-items-center text-xl font-black shadow-lg"
                style={{ backgroundColor: connectingBrand.color, color: connectingBrand.fg }}
              >
                <Watch className="size-7" />
              </div>
              <h3 className="text-base font-black text-white">{connectingBrand.brandTitle}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-xs mx-auto">
                {connectingBrand.id === "garmin"
                  ? "A Netfits solicitará permissão segura diretamente na nuvem da Garmin Connect™ para ler suas atividades esportivas (duração, distância, frequência cardíaca e calorias)."
                  : connectingBrand.id === "strava"
                  ? "A Netfits conectará diretamente com a API do Strava para importar suas corridas, pedaladas e treinos com dados de GPS e esforço."
                  : connectingBrand.id === "apple"
                  ? "A Netfits conectará via Vital Hub para ler os treinos registrados pelo seu Apple Watch no Apple Saúde."
                  : `A sincronização oficial com ${connectingBrand.name} está em fase de homologação e será liberada em breve.`}
              </p>
            </div>

            {connectingBrand.id === "garmin" ? (
              <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Protocolo</span>
                  <span className="font-mono text-zinc-200">Garmin Connect™ Cloud OAuth</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Ambiente</span>
                  <span className="font-mono text-emerald-400 font-bold">Garmin Developer Program (Oficial)</span>
                </div>
              </div>
            ) : connectingBrand.id === "strava" ? (
              <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Protocolo</span>
                  <span className="font-mono text-zinc-200">Strava API Direct (OAuth 2.0)</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Ambiente</span>
                  <span className="font-mono text-[#FC4C02] font-bold">Strava Developers (Direto)</span>
                </div>
              </div>
            ) : connectingBrand.id === "apple" ? (
              <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Protocolo</span>
                  <span className="font-mono text-zinc-200">Vital Link / HealthKit</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Ambiente</span>
                  <span className="font-mono text-purple-400 font-bold">Vital Cloud Aggregator</span>
                </div>
              </div>
            ) : (
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-1.5 text-amber-200">
                <p className="font-bold flex items-center gap-1.5 text-amber-400">
                  <Clock className="size-3.5" />
                  Conexão em Desenvolvimento
                </p>
                <p className="text-[11px] text-zinc-300 leading-relaxed">
                  Atualmente, as integrações ativas no Clube Netfits são <b>Garmin Connect™</b>, <b>Strava</b> e <b>Apple Watch</b>.
                </p>
              </div>
            )}

            {connectingBrand.id === "garmin" ? (
              <div className="space-y-2 pt-1">
                <a
                  href={getGarminAuthUrl()}
                  onClick={handleOpenGarmin}
                  className="w-full py-3 px-4 rounded-xl bg-[#00A6E0] hover:bg-[#0094c9] active:scale-[0.99] text-white font-black text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-md text-center"
                >
                  <ExternalLink className="size-4" />
                  Conectar com Garmin Connect™
                </a>
                <button
                  type="button"
                  onClick={handleCopyGarminLink}
                  className="w-full py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <Copy className="size-3.5" />
                  Copiar Link para o Google Chrome
                </button>
              </div>
            ) : connectingBrand.id === "strava" ? (
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={handleOpenStrava}
                  className="w-full py-3 px-4 rounded-xl bg-[#FC4C02] hover:bg-[#e04300] active:scale-[0.99] text-white font-black text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-md text-center"
                >
                  <ExternalLink className="size-4" />
                  Conectar com Strava Oficial
                </button>
                <button
                  type="button"
                  onClick={() => setConnectingBrand(null)}
                  className="w-full py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs flex items-center justify-center transition cursor-pointer"
                >
                  Voltar
                </button>
              </div>
            ) : connectingBrand.id === "apple" ? (
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={handleOpenVital}
                  className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 active:scale-[0.99] text-white font-black text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-md text-center"
                >
                  <ExternalLink className="size-4" />
                  Conectar Apple Watch via Vital Hub
                </button>
                <button
                  type="button"
                  onClick={() => setConnectingBrand(null)}
                  className="w-full py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs flex items-center justify-center transition cursor-pointer"
                >
                  Voltar
                </button>
              </div>
            ) : (
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    const garmin = WEARABLE_BRANDS.find((b) => b.id === "garmin");
                    if (garmin) setConnectingBrand(garmin);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-[#00A6E0] hover:bg-[#0094c9] active:scale-[0.99] text-white font-black text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-md text-center"
                >
                  <ExternalLink className="size-4" />
                  Conectar com Garmin Connect™
                </button>
                <button
                  type="button"
                  onClick={() => setConnectingBrand(null)}
                  className="w-full py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs flex items-center justify-center transition cursor-pointer"
                >
                  Entendido
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
