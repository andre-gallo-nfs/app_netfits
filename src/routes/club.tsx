import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { healthBridge } from "@/lib/wearables/health-bridge-service";
import { useOperationalParams } from "@/lib/operational-params-store";
import { WEARABLE_BRANDS, type WearableBrand } from "@/components/WearablesHub";
import { toast } from "sonner";
import {
  Crown,
  Users,
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Modais de Governança & Blindagem de Produção
  const [showCheckoutPendingModal, setShowCheckoutPendingModal] = useState(false);
  const [wearableModalState, setWearableModalState] = useState<"no_wearable" | "no_workout" | null>(null);

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
  const hasRealWearable = Boolean(
    activeUser.wearable &&
    activeUser.wearable !== "Nenhum" &&
    activeUser.wearable.trim().length > 0
  );

  const connectedBrandId = hasRealWearable
    ? WEARABLE_BRANDS.find(
        (b) =>
          b.name.toLowerCase() === (activeUser.wearable || "").toLowerCase() ||
          b.id.toLowerCase() === (activeUser.wearable || "").toLowerCase()
      )?.id || null
    : null;

  const activeConnectedBrand = connectedBrandId
    ? (WEARABLE_BRANDS.find((b) => b.id === connectedBrandId) || WEARABLE_BRANDS[0])
    : null;

  // Clique no botão de Assinar: Checkout pendente de definição
  const handleSubscribe = () => {
    setShowCheckoutPendingModal(true);
  };

  // Clique no Box/Banner de Wearables: Avalia presença de hardware e treinos reais
  const handleWearableInteraction = () => {
    if (!hasRealWearable) {
      setWearableModalState("no_wearable");
    } else {
      setWearableModalState("no_workout");
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
            Clube Netfits • Assinatura Oficial
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
                  onClick={() => toast.success("Seus benefícios do Clube Netfits estão ativos!")}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#F2ECFD] text-[#35106E] font-extrabold text-xs border border-purple-200 transition active:scale-95 text-center cursor-pointer"
                >
                  Benefícios Ativos
                </button>
                <button
                  type="button"
                  onClick={() => toast.info("A gestão de cobrança da assinatura estará disponível na central de pagamentos no lançamento oficial em 14 de Novembro.")}
                  className="py-2.5 px-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-[#5F6270] hover:text-[#202127] font-semibold text-xs border border-zinc-200 transition active:scale-95 cursor-pointer"
                >
                  Gerenciar Plano
                </button>
              </div>
            </div>
          ) : (
            <div className="pt-2">
              <button
                type="button"
                onClick={handleSubscribe}
                className="w-full py-3.5 px-4 rounded-2xl bg-[#C8F135] hover:bg-[#bfe830] text-[#202127] font-black text-sm flex items-center justify-center gap-2 shadow-sm transition active:scale-[0.99] cursor-pointer"
              >
                <Crown className="size-4 text-[#202127]" />
                Assinar Clube Netfits — R$ 19,90/mês
                <ArrowRight className="size-4 text-[#202127] ml-1" />
              </button>
              <p className="text-[10px] text-center text-[#5F6270] mt-2">
                Lançamento Oficial em 14 de Novembro • Pagamento Seguro • Sem Fidelidade
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
            Terra API Cloud
          </span>
        </div>

        {/* Card do Dispositivo & Status de Telemetria (Clicável para Verificação) */}
        <div
          onClick={handleWearableInteraction}
          className="rounded-3xl bg-white border border-purple-200/80 p-4 space-y-3 shadow-xs cursor-pointer hover:border-purple-400 transition"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="size-11 rounded-2xl grid place-items-center font-black text-sm shadow-xs"
                style={{
                  backgroundColor: activeConnectedBrand ? activeConnectedBrand.color : "#35106E",
                  color: activeConnectedBrand ? activeConnectedBrand.fg : "#C8F135",
                }}
              >
                <Watch className="size-5" />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#202127]">
                  {activeConnectedBrand ? activeConnectedBrand.brandTitle : "Dispositivos Esportivos"}
                </h4>
                <span className="text-[11px] text-[#5F6270] font-bold flex items-center gap-1 mt-0.5">
                  {hasRealWearable ? (
                    <>
                      <CheckCircle2 className="size-3.5 text-[#5D7600]" />
                      <span className="text-[#5D7600]">Dispositivo Registrado</span>
                    </>
                  ) : (
                    <>
                      <Clock className="size-3.5 text-[#6B2AD9]" />
                      <span>Nenhum Dispositivo Integrado</span>
                    </>
                  )}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleWearableInteraction();
              }}
              className="px-3 py-1.5 rounded-xl bg-[#6B2AD9] hover:bg-[#5821b5] text-white text-xs font-black transition active:scale-95 cursor-pointer shadow-xs"
            >
              {hasRealWearable ? "Sincronizar" : "Conectar"}
            </button>
          </div>

          {/* Marcas Homologadas na Nuvem */}
          <div className="pt-1 flex items-center justify-between text-[11px] text-[#5F6270] bg-[#F5F5F7] px-3 py-2 rounded-xl border border-zinc-200">
            <span>Compatibilidade:</span>
            <span className="font-extrabold text-[#35106E]">Apple Watch • Garmin • Strava • Polar • Coros</span>
          </div>

          {/* Métricas Auditadas por Hardware */}
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
                Sensores &amp; GPS
              </span>
            </div>
            <h3 className="text-sm font-black text-[#202127] pt-1">Telemetria de Wearables</h3>
            <p className="text-xs text-[#5F6270] leading-relaxed">
              Integração em nuvem com relógios e monitores esportivos via Terra API com auditoria biométrica antifraude.
            </p>
          </div>

          {/* Pilar 3: Vantagens no Shop */}
          <div className="rounded-2xl bg-white border border-purple-200/80 p-4 space-y-1.5 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-[#F2ECFD] text-[#6B2AD9]">
                <ShoppingBag className="size-5" />
              </div>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#C8F135] text-[#202127]">
                +20% Pontos
              </span>
            </div>
            <h3 className="text-sm font-black text-[#202127] pt-1">Vantagens Exclusivas no Shop</h3>
            <p className="text-xs text-[#202127] leading-relaxed font-bold">
              20% mais pontos a cada compra.
            </p>
          </div>

          {/* Pilar 4: Bônus por Compras de Indicados */}
          <div className="rounded-2xl bg-white border border-purple-200/80 p-4 space-y-1.5 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-[#F2ECFD] text-[#6B2AD9]">
                <Users className="size-5" />
              </div>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#C8F135] text-[#202127]">
                10% Indicados
              </span>
            </div>
            <h3 className="text-sm font-black text-[#202127] pt-1">Indicações no Shop</h3>
            <p className="text-xs text-[#202127] leading-relaxed font-bold">
              10% dos pontos ganhos nas compras no shop de todos os seus indicados.
            </p>
          </div>

          {/* Pilar 5: Longevidade Ativa & Fibios */}
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

      {/* Modal 1: Aviso de Checkout da Assinatura Pendente de Definição */}
      {showCheckoutPendingModal && (
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
                <span className="text-[10px] font-black uppercase tracking-widest text-[#6B2AD9]">
                  Assinatura do Clube Netfits
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowCheckoutPendingModal(false)}
                className="size-7 rounded-full bg-zinc-100 text-[#5F6270] hover:text-[#202127] grid place-items-center cursor-pointer"
                aria-label="Fechar modal"
              >
                <X className="size-3.5" />
              </button>
            </div>

            <div className="text-center py-2 space-y-2">
              <div className="size-14 rounded-2xl mx-auto grid place-items-center text-xl font-black bg-[#F2ECFD] text-[#6B2AD9] shadow-sm">
                <Crown className="size-7" />
              </div>
              <h3 className="text-base font-black text-[#202127]">
                Checkout em Fase de Integração
              </h3>
              <p className="text-xs text-[#5F6270] leading-relaxed max-w-xs mx-auto">
                A tela oficial de pagamento da assinatura mensal (R$ 19,90/mês) está pendente de definição dos gateways bancários para o lançamento oficial em 14 de Novembro de 2026.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-[#F5F5F7] border border-zinc-200 text-xs space-y-2 text-[#5F6270]">
              <div className="flex items-start gap-2">
                <ShieldCheck className="size-4 text-[#5D7600] shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed">
                  Nenhum valor será cobrado no momento. A atribuição de todos os benefícios (inclusive os <b>250 nfs garantidos</b>) ocorrerá exclusivamente após a confirmação do pagamento no checkout oficial.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowCheckoutPendingModal(false)}
              className="w-full py-3 px-4 rounded-xl bg-[#35106E] hover:bg-[#2a0c58] active:scale-[0.99] text-white font-black text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-sm"
            >
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* Modal 2: Aviso de Wearables (Nenhum Integrado OU Nenhum Treino Novo) */}
      {wearableModalState && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-sm bg-white text-[#202127] rounded-3xl border border-purple-200 p-6 space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#6B2AD9] flex items-center gap-1">
                <Radio className="size-3" />
                Telemetria de Wearables
              </span>
              <button
                type="button"
                onClick={() => setWearableModalState(null)}
                className="size-7 rounded-full bg-zinc-100 text-[#5F6270] hover:text-[#202127] grid place-items-center cursor-pointer"
                aria-label="Fechar aviso"
              >
                <X className="size-3.5" />
              </button>
            </div>

            {wearableModalState === "no_wearable" ? (
              <>
                <div className="text-center py-2 space-y-2">
                  <div className="size-14 rounded-2xl mx-auto grid place-items-center text-xl font-black bg-[#F2ECFD] text-[#6B2AD9] shadow-sm">
                    <Watch className="size-7" />
                  </div>
                  <h3 className="text-base font-black text-[#202127]">
                    Nenhum Wearable Integrado
                  </h3>
                  <p className="text-xs text-[#5F6270] leading-relaxed max-w-xs mx-auto">
                    Você ainda não possui nenhum relógio esportivo ou monitor cardíaco vinculado à sua conta.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-[#F5F5F7] border border-zinc-200 text-xs space-y-2 text-[#5F6270]">
                  <p className="text-[11px] leading-relaxed">
                    Para validar treinos e pontuar no Clube (+25 nfs), é necessário integrar um dispositivo compatível (Apple Watch, Garmin, Strava, Polar ou Coros) com sensores ópticos de frequência cardíaca e GPS auditado.
                  </p>
                  <p className="text-[11px] font-bold text-[#35106E] border-t border-zinc-200 pt-1.5">
                    As conexões estarão disponíveis com a integração oficial da Terra API no lançamento da plataforma.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="text-center py-2 space-y-2">
                  <div className="size-14 rounded-2xl mx-auto grid place-items-center text-xl font-black bg-[#F2ECFD] text-[#6B2AD9] shadow-sm">
                    <Activity className="size-7" />
                  </div>
                  <h3 className="text-base font-black text-[#202127]">
                    Nenhum Treino Novo para Validar
                  </h3>
                  <p className="text-xs text-[#5F6270] leading-relaxed max-w-xs mx-auto">
                    Não foram encontrados novos treinos auditados nas últimas 24 horas para o seu dispositivo {activeUser.wearable}.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-[#F5F5F7] border border-zinc-200 text-xs space-y-2 text-[#5F6270]">
                  <p className="text-[11px] leading-relaxed">
                    Pratique sua atividade esportiva utilizando seu relógio com monitoramento de frequência cardíaca contínuo para que o treino seja sincronizado e auditado automaticamente pela plataforma.
                  </p>
                </div>
              </>
            )}

            <button
              type="button"
              onClick={() => setWearableModalState(null)}
              className="w-full py-3 px-4 rounded-xl bg-[#35106E] hover:bg-[#2a0c58] active:scale-[0.99] text-white font-black text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-sm"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
