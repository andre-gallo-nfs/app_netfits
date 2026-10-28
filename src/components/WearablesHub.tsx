import { useState } from "react";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { healthBridge } from "@/lib/wearables/health-bridge-service";
import { useOperationalParams } from "@/lib/operational-params-store";
import { clubModalStore } from "@/lib/club-modal-store";
import { toast } from "sonner";
import {
  Watch,
  Activity,
  HeartPulse,
  Flame,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight,
  ExternalLink,
  Crown,
  Satellite,
  Clock,
  Compass,
  Check,
  X,
  Radio,
} from "lucide-react";

export interface WearableBrand {
  id: string;
  name: string;
  category: "endurance" | "smartwatch" | "health_ring" | "cycling";
  brandTitle: string;
  color: string;
  fg: string;
  protocol: "Terra API Cloud OAuth" | "Health Hub Nativo";
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
    protocol: "Terra API Cloud OAuth",
    popularIn: "Corrida, Ciclismo, Triathlon",
  },
  {
    id: "apple",
    name: "Apple Watch",
    category: "smartwatch",
    brandTitle: "Apple HealthKit",
    color: "#000000",
    fg: "#ffffff",
    protocol: "Health Hub Nativo",
    popularIn: "Dia a dia, Corrida, Funcional",
  },
  {
    id: "strava",
    name: "Strava",
    category: "endurance",
    brandTitle: "Strava API Hub",
    color: "#FC4C02",
    fg: "#ffffff",
    protocol: "Terra API Cloud OAuth",
    popularIn: "Comunidade Esportiva Global",
  },
  {
    id: "polar",
    name: "Polar",
    category: "endurance",
    brandTitle: "Polar Flow API",
    color: "#E2231A",
    fg: "#ffffff",
    protocol: "Terra API Cloud OAuth",
    popularIn: "Frequencímetros & Zonas Cardíacas",
  },
  {
    id: "coros",
    name: "Coros",
    category: "endurance",
    brandTitle: "Coros Cloud Training",
    color: "#F04E23",
    fg: "#ffffff",
    protocol: "Terra API Cloud OAuth",
    popularIn: "Maratona & Ultra Trail Running",
  },
  {
    id: "suunto",
    name: "Suunto",
    category: "endurance",
    brandTitle: "Suunto Cloud API",
    color: "#1A1A1A",
    fg: "#ffffff",
    protocol: "Terra API Cloud OAuth",
    popularIn: "Montanha & Esportes Outdoor",
  },
  {
    id: "wahoo",
    name: "Wahoo",
    category: "cycling",
    brandTitle: "Wahoo ELEMNT Cloud",
    color: "#002B49",
    fg: "#00B2E2",
    protocol: "Terra API Cloud OAuth",
    popularIn: "Ciclocomputadores & Smart Trainers",
  },
  {
    id: "whoop",
    name: "WHOOP",
    category: "health_ring",
    brandTitle: "WHOOP 4.0 Life Telemetry",
    color: "#0A0A0A",
    fg: "#ffffff",
    protocol: "Terra API Cloud OAuth",
    popularIn: "Strain, HRV & Recuperação Celular",
  },
  {
    id: "oura",
    name: "Oura Ring",
    category: "health_ring",
    brandTitle: "Oura Cloud Health API",
    color: "#232323",
    fg: "#D4AF7A",
    protocol: "Terra API Cloud OAuth",
    popularIn: "Sono, Temperatura & Prontidão",
  },
  {
    id: "samsung",
    name: "Samsung Galaxy",
    category: "smartwatch",
    brandTitle: "Samsung Health / Health Connect",
    color: "#1428A0",
    fg: "#ffffff",
    protocol: "Health Hub Nativo",
    popularIn: "Smartwatches Galaxy",
  },
  {
    id: "google",
    name: "Google Health",
    category: "smartwatch",
    brandTitle: "Android Health Connect",
    color: "#4285F4",
    fg: "#ffffff",
    protocol: "Health Hub Nativo",
    popularIn: "Ecossistema Android",
  },
  {
    id: "fitbit",
    name: "Fitbit",
    category: "smartwatch",
    brandTitle: "Google Fitbit API",
    color: "#00B0B9",
    fg: "#ffffff",
    protocol: "Terra API Cloud OAuth",
    popularIn: "Saúde & Atividade Contínua",
  },
];

export function WearablesHub() {
  const activeUser = sharedSandboxStore.useActiveUser();
  const params = useOperationalParams();

  const isClubMember = Boolean(activeUser.isClubMember === true || activeUser.userCategory === "associado");
  const pointsPerWorkout = params.nfsPerWorkout || 20;

  const [connectingBrand, setConnectingBrand] = useState<WearableBrand | null>(null);
  const [isSimulatingSync, setIsSimulatingSync] = useState(false);
  const [selectedSport, setSelectedSport] = useState<"running" | "cycling" | "swimming" | "strength">("running");

  const connectedBrandId = WEARABLE_BRANDS.find(
    (b) =>
      b.name.toLowerCase() === (activeUser.wearable || "").toLowerCase() ||
      b.id.toLowerCase() === (activeUser.wearable || "").toLowerCase()
  )?.id || (activeUser.wearable?.toLowerCase().includes("garmin") ? "garmin" : null);

  const activeConnectedBrand = WEARABLE_BRANDS.find((b) => b.id === connectedBrandId) || WEARABLE_BRANDS[0];

  // Simula o fluxo do Terra Connect Widget
  const handleConnectBrand = (brand: WearableBrand) => {
    setConnectingBrand(brand);
  };

  const handleConfirmTerraConnect = () => {
    if (!connectingBrand) return;
    setIsSimulatingSync(true);

    setTimeout(() => {
      sharedSandboxStore.updateUser(activeUser.id, { wearable: connectingBrand.name });
      setIsSimulatingSync(false);
      setConnectingBrand(null);
      toast.success(`🎉 ${connectingBrand.name} conectado com sucesso via Terra API! Telemetria e GPS ativos.`);
    }, 1200);
  };

  const handleDisconnect = () => {
    sharedSandboxStore.updateUser(activeUser.id, { wearable: "Nenhum" });
    toast.info("Dispositivo desvinculado. Você pode reconectar a qualquer momento.");
  };

  // Disparo do Simulador de Treino em Homologação
  const handleSimulateTerraWorkout = async () => {
    setIsSimulatingSync(true);
    try {
      const nowIso = new Date().toISOString();
      let mockName = "Corrida Matinal com Garmin Forerunner";
      let mockDist = 10.4;
      let mockDur = 51;
      let mockCals = 620;
      let mockHr = 154;

      if (selectedSport === "cycling") {
        mockName = "Treino de Ciclismo de Estrada (Terra API)";
        mockDist = 34.8;
        mockDur = 72;
        mockCals = 810;
        mockHr = 144;
      } else if (selectedSport === "swimming") {
        mockName = "Natação Águas Abertas / Piscina";
        mockDist = 1.6;
        mockDur = 38;
        mockCals = 460;
        mockHr = 138;
      } else if (selectedSport === "strength") {
        mockName = "Treino de Força e Potência Muscular";
        mockDist = 0;
        mockDur = 45;
        mockCals = 390;
        mockHr = 129;
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
        maxHeartRate: mockHr + 22,
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

  return (
    <div className="space-y-4">
      {/* Banner de Status da Conexão Terra API */}
      <div className="rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-lime-500/30 p-4 shadow-xl text-white relative overflow-hidden">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-lime-400 flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-lime-400 animate-pulse" />
              Terra API • Hub de Wearables em Homologação
            </span>
            <h3 className="text-base font-black text-white">
              {connectedBrandId ? `${activeConnectedBrand.name} Conectado` : "Nenhum Wearable Vinculado"}
            </h3>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Telemetria óptica e GPS conectada via Terra API. Suas atividades geram histórico de constância e pontos no Clube Netfits.
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-lime-400/10 border border-lime-400/30 text-lime-400 shrink-0">
            <Radio className="size-5" />
          </div>
        </div>

        {/* Status de Membro do Clube Netfits */}
        <div className="mt-3 pt-3 border-t border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Crown className={`size-4 ${isClubMember ? "text-amber-400" : "text-zinc-500"}`} />
            <span className="text-xs font-bold text-zinc-300">
              {isClubMember ? (
                <span className="text-amber-300">Membro do Clube • Pontuação de Treinos Liberada</span>
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
                  Sincronização em Nuvem Ativa
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleDisconnect}
              className="px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-red-400 text-xs font-bold transition active:scale-95 cursor-pointer"
            >
              Desconectar
            </button>
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

      {/* 🧪 Simulador de Webhooks Terra API (Homologação) */}
      <div className="rounded-2xl bg-zinc-900/90 border border-purple-500/30 p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
              <Zap className="size-4" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-purple-400">
                Homologação de Telemetria
              </span>
              <h4 className="text-xs font-black text-white">Simulador de Webhooks Terra API</h4>
            </div>
          </div>
          <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
            Sandbox
          </span>
        </div>

        <p className="text-xs text-zinc-400 leading-relaxed">
          Dispare um treino simulado com telemetria óptica real e GPS para homologar as travas antifraude e o crédito de pontos no extrato.
        </p>

        {/* Seletor de Modalidade */}
        <div className="grid grid-cols-4 gap-1.5 text-xs font-bold">
          <button
            type="button"
            onClick={() => setSelectedSport("running")}
            className={`py-2 px-1 rounded-xl transition text-center ${
              selectedSport === "running"
                ? "bg-purple-600 text-white shadow-sm"
                : "bg-zinc-800 text-zinc-400 hover:text-white"
            }`}
          >
            🏃 Corrida 10k
          </button>
          <button
            type="button"
            onClick={() => setSelectedSport("cycling")}
            className={`py-2 px-1 rounded-xl transition text-center ${
              selectedSport === "cycling"
                ? "bg-purple-600 text-white shadow-sm"
                : "bg-zinc-800 text-zinc-400 hover:text-white"
            }`}
          >
            🚴 Ciclismo 35k
          </button>
          <button
            type="button"
            onClick={() => setSelectedSport("swimming")}
            className={`py-2 px-1 rounded-xl transition text-center ${
              selectedSport === "swimming"
                ? "bg-purple-600 text-white shadow-sm"
                : "bg-zinc-800 text-zinc-400 hover:text-white"
            }`}
          >
            🏊 Natação
          </button>
          <button
            type="button"
            onClick={() => setSelectedSport("strength")}
            className={`py-2 px-1 rounded-xl transition text-center ${
              selectedSport === "strength"
                ? "bg-purple-600 text-white shadow-sm"
                : "bg-zinc-800 text-zinc-400 hover:text-white"
            }`}
          >
            🏋️ Força
          </button>
        </div>

        <button
          type="button"
          disabled={isSimulatingSync}
          onClick={handleSimulateTerraWorkout}
          className="w-full py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 active:scale-[0.99] text-white font-bold text-xs flex items-center justify-center gap-2 transition disabled:opacity-50 cursor-pointer shadow-md"
        >
          {isSimulatingSync ? (
            <>
              <RefreshCw className="size-3.5 animate-spin" />
              Processando Webhook Terra API...
            </>
          ) : (
            <>
              <Sparkles className="size-3.5" />
              Simular Envio de Treino via Webhook da Terra (+{pointsPerWorkout} nfs)
            </>
          )}
        </button>
      </div>

      {/* Grade com as 12 Marcas de Wearables */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <h4 className="text-xs font-black uppercase tracking-wider text-zinc-400">
            12 Marcas Integradas via Terra API
          </h4>
          <span className="text-[10px] text-zinc-500 font-mono">100% Cobertura</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {WEARABLE_BRANDS.map((brand) => {
            const isConnected = brand.id === connectedBrandId;

            return (
              <div
                key={brand.id}
                className={`p-3 rounded-2xl border transition flex items-center justify-between ${
                  isConnected
                    ? "bg-zinc-900 border-lime-500/50 shadow-md ring-1 ring-lime-500/20"
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
                    <h5 className="text-xs font-bold text-white flex items-center gap-1.5">
                      {brand.name}
                      {isConnected && (
                        <span className="size-1.5 rounded-full bg-lime-400" />
                      )}
                    </h5>
                    <span className="text-[10px] text-zinc-400 block">
                      {brand.popularIn}
                    </span>
                  </div>
                </div>

                <div>
                  {isConnected ? (
                    <span className="px-2.5 py-1 rounded-full bg-lime-400/10 text-lime-400 border border-lime-400/30 text-[10px] font-black flex items-center gap-1">
                      <Check className="size-3" />
                      Ativo
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleConnectBrand(brand)}
                      className="px-2.5 py-1 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[11px] font-bold transition active:scale-95 cursor-pointer"
                    >
                      Conectar
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal / Sheet do Terra Connect Widget (Simulação Turnkey) */}
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
                Terra Connect Widget
              </span>
              <button
                type="button"
                onClick={() => setConnectingBrand(null)}
                className="size-7 rounded-full bg-zinc-800 text-zinc-400 hover:text-white grid place-items-center cursor-pointer"
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
              <h3 className="text-base font-black text-white">
                Autorizar Conexão com {connectingBrand.name}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-xs mx-auto">
                A Terra API solicitará permissão segura para ler suas atividades esportivas (duração, distância, frequência cardíaca e calorias).
              </p>
            </div>

            <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs space-y-1.5 text-zinc-300">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Protocolo:</span>
                <span className="font-mono text-lime-400 text-[11px] font-bold">{connectingBrand.protocol}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Ambiente:</span>
                <span className="font-mono text-purple-400 text-[11px] font-bold">Terra Sandbox v2</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Privacidade:</span>
                <span className="text-emerald-400 text-[11px] font-bold">Auditado &amp; LGPD Compliant</span>
              </div>
            </div>

            <button
              type="button"
              disabled={isSimulatingSync}
              onClick={handleConfirmTerraConnect}
              className="w-full py-3 px-4 rounded-xl bg-lime-400 hover:bg-lime-300 active:scale-[0.99] text-zinc-950 font-black text-xs flex items-center justify-center gap-2 transition disabled:opacity-50 cursor-pointer shadow-lg shadow-lime-500/20"
            >
              {isSimulatingSync ? (
                <>
                  <RefreshCw className="size-4 animate-spin" />
                  Autorizando Handshake OAuth...
                </>
              ) : (
                <>
                  Autorizar Conexão na Terra API
                  <ArrowRight className="size-4" />
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
