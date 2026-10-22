import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { toast } from "sonner";
import { useState } from "react";
import {
  X,
  Watch,
  Activity,
  Moon,
  HeartPulse,
  Check,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Lock,
  RefreshCw,
  CheckCircle2,
  Trash2,
} from "lucide-react";

export type Wearable = {
  id: string;
  name: string;
  brand: string;
  initials: string;
  color: string;
  fg: string;
  authMethod: "oauth_cloud" | "health_hub" | "hybrid";
};

export const WEARABLES: Wearable[] = [
  { id: "garmin", name: "Garmin", brand: "Garmin Connect™", initials: "Gn", color: "#000000", fg: "#00A6E0", authMethod: "hybrid" },
  { id: "apple", name: "Apple Watch", brand: "Apple HealthKit", initials: "", color: "#000000", fg: "#ffffff", authMethod: "health_hub" },
  { id: "strava", name: "Strava", brand: "Strava Cloud API", initials: "St", color: "#FC4C02", fg: "#ffffff", authMethod: "oauth_cloud" },
  { id: "polar", name: "Polar", brand: "Polar Flow API", initials: "Po", color: "#E2231A", fg: "#ffffff", authMethod: "oauth_cloud" },
  { id: "whoop", name: "Whoop", brand: "Whoop 4.0 / MG", initials: "Wh", color: "#0A0A0A", fg: "#ffffff", authMethod: "oauth_cloud" },
  { id: "oura", name: "Oura Ring", brand: "Oura Cloud API", initials: "Ou", color: "#1A1A1A", fg: "#D4AF7A", authMethod: "oauth_cloud" },
  { id: "samsung", name: "Galaxy Watch", brand: "Samsung Health / Health Connect", initials: "Sm", color: "#1428A0", fg: "#ffffff", authMethod: "health_hub" },
  { id: "coros", name: "Coros", brand: "Coros App Cloud", initials: "Co", color: "#F04E23", fg: "#ffffff", authMethod: "oauth_cloud" },
  { id: "fitbit", name: "Fitbit", brand: "Google Fitbit", initials: "Fb", color: "#00B0B9", fg: "#ffffff", authMethod: "oauth_cloud" },
  { id: "suunto", name: "Suunto", brand: "Suunto Cloud API", initials: "Su", color: "#000000", fg: "#ffffff", authMethod: "oauth_cloud" },
  { id: "amazfit", name: "Amazfit", brand: "Zepp Health API", initials: "Az", color: "#FF3C28", fg: "#ffffff", authMethod: "oauth_cloud" },
  { id: "google", name: "Google Fit", brand: "Android Health Connect", initials: "GF", color: "#4285F4", fg: "#ffffff", authMethod: "health_hub" },
];

const BENEFITS = [
  { icon: Activity, label: "Atividade física auditada", desc: "Corrida, ciclismo, força e natação", value: "+20 nfs/dia" },
  { icon: Moon, label: "Sono & Reparo Mitocondrial", desc: "Duração e consistência do sono", value: "+5 nfs/dia" },
  { icon: HeartPulse, label: "Cardio & Zonas de Treino", desc: "Frequência cardíaca e gasto calórico real", value: "Auditado" },
];

export function WearableSyncSheet({ onClose }: { onClose: () => void }) {
  const activeUser = sharedSandboxStore.useActiveUser();

  const initiallyConnected = WEARABLES.find(
    (w) =>
      w.name.toLowerCase() === (activeUser.wearable || "").toLowerCase() ||
      w.id.toLowerCase() === (activeUser.wearable || "").toLowerCase()
  )?.id || (activeUser.wearable?.toLowerCase().includes("garmin") ? "garmin" : null);

  const [connectedId, setConnectedId] = useState<string | null>(initiallyConnected);
  const [authorizingDevice, setAuthorizingDevice] = useState<Wearable | null>(null);
  const [isAuthorizing, setIsAuthorizing] = useState(false);

  // Iniciar fluxo de conexão/autorização
  const handleSelectDevice = (device: Wearable) => {
    setAuthorizingDevice(device);
  };

  // Concluir autorização simulando handshake OAuth 2.0 / HealthKit
  const handleConfirmAuthorization = () => {
    if (!authorizingDevice) return;
    setIsAuthorizing(true);

    setTimeout(() => {
      setConnectedId(authorizingDevice.id);
      setIsAuthorizing(false);
      setAuthorizingDevice(null);

      const active = sharedSandboxStore.getActiveUser();
      if (active?.id) {
        sharedSandboxStore.updateUser(active.id, { wearable: authorizingDevice.name });
      }

      toast.success(`${authorizingDevice.name} conectado com sucesso! Telemetria óptica e GPS ativos.`);
    }, 1100);
  };

  // Desconectar dispositivo
  const handleDisconnect = () => {
    const active = sharedSandboxStore.getActiveUser();
    if (active?.id) {
      sharedSandboxStore.updateUser(active.id, { wearable: "Nenhum" });
    }
    setConnectedId(null);
    toast.info("Dispositivo desvinculado. Você pode conectar outro wearable a qualquer momento.");
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end justify-center"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-zinc-950 text-white rounded-t-3xl max-h-[92vh] flex flex-col shadow-2xl border-t border-zinc-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* TELA 1: MODAL DE AUTORIZAÇÃO OAUTH / HEALTH HUB */}
        {authorizingDevice ? (
          <div className="flex flex-col h-full max-h-[90vh]">
            {/* Header de Autorização */}
            <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-zinc-800">
              <button
                type="button"
                onClick={() => setAuthorizingDevice(null)}
                className="size-8 rounded-full bg-zinc-900 border border-zinc-800 grid place-items-center text-zinc-300 hover:text-white cursor-pointer"
                aria-label="Voltar"
              >
                <ArrowLeft className="size-4" />
              </button>
              <div className="text-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                  Handshake Criptográfico
                </span>
                <h2 className="text-sm font-bold text-white">Autorizar {authorizingDevice.name}</h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="size-8 rounded-full bg-zinc-900 border border-zinc-800 grid place-items-center text-zinc-400 hover:text-white cursor-pointer"
                aria-label="Fechar"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-5 space-y-4 text-xs">
              {/* Card Visual de Conexão */}
              <div className="bg-zinc-900/90 rounded-2xl p-4 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="size-12 rounded-xl grid place-items-center font-bold text-base shadow-sm"
                    style={{ background: authorizingDevice.color, color: authorizingDevice.fg }}
                  >
                    {authorizingDevice.initials || <Watch className="size-6" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">{authorizingDevice.name}</h3>
                    <p className="text-[11px] text-zinc-400">{authorizingDevice.brand}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  <Lock className="size-3" />
                  <span>OAuth 2.0 / SSL</span>
                </div>
              </div>

              {/* Termos de Consentimento e Acesso a Dados Sensíveis (LGPD) */}
              <div className="bg-zinc-900/60 rounded-2xl p-4 border border-zinc-800 space-y-3">
                <h4 className="text-xs font-bold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="size-4 text-lime-400" />
                  Permissões de Leitura Requeridas
                </h4>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Para auditar treinos contínuos (mínimo de 30 minutos) e emitir pontos nfs sem risco de fraudes, a Netfits solicita permissão de leitura para:
                </p>

                <ul className="space-y-2 pt-1 text-zinc-300 text-[11px]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-lime-400 shrink-0 mt-0.5" />
                    <span><b>Atividades Físicas &amp; GPS:</b> data/hora de início e fim, modalidade esportiva, distância e altimetria.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-lime-400 shrink-0 mt-0.5" />
                    <span><b>Telemetria Cardíaca Óptica:</b> frequência cardíaca contínua (mín/máx/média) comprovando esforço biológico real.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-lime-400 shrink-0 mt-0.5" />
                    <span><b>Gasto Energético:</b> calorias ativas estimadas pelos sensores de hardware do relógio.</span>
                  </li>
                </ul>
              </div>

              {/* Explicação da Arquitetura Híbrida (Caminho 1 + Caminho 2) */}
              <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 text-[11px] text-purple-200 space-y-1">
                <p className="font-bold flex items-center gap-1.5 text-purple-300">
                  <Sparkles className="size-3.5" />
                  Sincronização Híbrida Automática
                </p>
                <p className="text-purple-300/80 leading-relaxed text-[10px]">
                  No seu celular, os treinos registrados no {authorizingDevice.name} são sincronizados tanto pelo hub local de saúde quanto pelos webhooks na nuvem, com desduplicação criptográfica determinística instantânea.
                </p>
              </div>

              {/* Botão de Ação: Autorizar */}
              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  disabled={isAuthorizing}
                  onClick={handleConfirmAuthorization}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400 hover:from-lime-300 hover:to-emerald-300 text-zinc-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-lime-400/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isAuthorizing ? (
                    <>
                      <RefreshCw className="size-4 animate-spin" />
                      <span>Conectando e Validando Token...</span>
                    </>
                  ) : (
                    <>
                      <Check className="size-4" />
                      <span>Autorizar Conexão com {authorizingDevice.name}</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setAuthorizingDevice(null)}
                  className="w-full py-2.5 text-center text-xs font-semibold text-zinc-400 hover:text-white cursor-pointer"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* TELA PRINCIPAL: LISTA DE WEARABLES */
          <>
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-3 shrink-0 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-lime-400/20 border border-lime-400/30 grid place-items-center">
                  <Watch className="size-4 text-lime-400" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">Sincronizar Wearable</h2>
                  <p className="text-[10px] text-zinc-400">Integração de Telemetria com Smartwatches</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="size-8 rounded-full bg-zinc-900 border border-zinc-800 grid place-items-center text-zinc-400 hover:text-white cursor-pointer"
                aria-label="Fechar"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="overflow-y-auto px-5 pb-6">
              {/* Hero Banner de Ganhos */}
              <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 text-white rounded-2xl p-4.5 mt-4 relative overflow-hidden border border-zinc-800 shadow-md">
                <span className="inline-block px-2 py-0.5 rounded bg-lime-400 text-zinc-950 text-[10px] font-black uppercase tracking-widest mb-2.5">
                  Sweat-to-Earn Oficial
                </span>
                <h3 className="text-lg font-black leading-tight mb-1">
                  Até <span className="text-lime-400">+20 nfs</span> por treino validado
                </h3>
                <p className="text-xs text-zinc-400 mb-3.5">
                  ≈ <span className="font-bold text-white">600 nfs/mês</span> treinando 30 minutos por dia com constância.
                </p>

                <ul className="space-y-2">
                  {BENEFITS.map((b) => (
                    <li
                      key={b.label}
                      className="bg-zinc-950/60 rounded-xl p-2.5 flex items-start gap-2.5 border border-zinc-800/80"
                    >
                      <div className="size-7 rounded-lg bg-lime-400/10 grid place-items-center shrink-0">
                        <b.icon className="size-3.5 text-lime-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2">
                          <p className="text-xs font-bold text-zinc-200">{b.label}</p>
                          <span className="text-[10px] font-mono font-bold text-lime-400 whitespace-nowrap">
                            {b.value}
                          </span>
                        </div>
                        <p className="text-[10px] text-zinc-400 truncate">{b.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Status do Dispositivo Ativo */}
              {connectedId && (
                <div className="mt-4 bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                      <p className="text-xs font-bold text-emerald-200">
                        Dispositivo Conectado: <span className="text-white capitalize">{activeUser.wearable || connectedId}</span>
                      </p>
                      <p className="text-[10px] text-emerald-300/70">
                        Telemetria ativa • Treinos prontos para validação diária
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleDisconnect}
                    className="p-1.5 rounded-lg bg-zinc-900 hover:bg-red-950/50 text-zinc-400 hover:text-red-400 transition cursor-pointer"
                    title="Desconectar dispositivo"
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                </div>
              )}

              {/* Lista de Dispositivos */}
              <div className="mt-5 flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Selecione seu Dispositivo
                </h3>
                <span className="text-[10px] font-mono font-bold text-zinc-500">
                  {WEARABLES.length} Marcas Compatíveis
                </span>
              </div>

              <ul className="mt-3 space-y-2">
                {WEARABLES.map((w) => {
                  const isConnected =
                    connectedId === w.id ||
                    (activeUser.wearable || "").toLowerCase().includes(w.id);

                  return (
                    <li key={w.id}>
                      <button
                        type="button"
                        onClick={() => handleSelectDevice(w)}
                        className={`w-full rounded-2xl p-3 border flex items-center gap-3 transition cursor-pointer ${
                          isConnected
                            ? "bg-lime-400/10 border-lime-400/40 ring-1 ring-lime-400/20"
                            : "bg-zinc-900 border-zinc-800 hover:border-zinc-700 active:scale-[0.99]"
                        }`}
                      >
                        <div
                          className="size-10 rounded-xl grid place-items-center text-xs font-bold shrink-0 shadow-sm"
                          style={{ background: w.color, color: w.fg }}
                        >
                          {w.initials || <Watch className="size-4" />}
                        </div>
                        <div className="flex-1 min-w-0 text-left">
                          <p className="text-xs font-bold text-white truncate">{w.name}</p>
                          <p className="text-[10px] text-zinc-400 truncate">{w.brand}</p>
                        </div>
                        {isConnected ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-lime-400 bg-lime-400/10 px-2 py-0.5 rounded-full border border-lime-400/30">
                            <Check className="size-3" /> Conectado
                          </span>
                        ) : (
                          <div className="flex items-center gap-1 text-[11px] font-medium text-zinc-400 group-hover:text-white">
                            <span>Conectar</span>
                            <ArrowRight className="size-3 text-zinc-500 shrink-0" />
                          </div>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Botão de Fechar */}
              <div className="mt-5">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 hover:text-white transition cursor-pointer"
                >
                  Concluir e Voltar
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
