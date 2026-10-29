import { useState } from "react";
import { useClubModal, clubModalStore } from "@/lib/club-modal-store";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { toast } from "sonner";
import {
  X,
  Crown,
  Sparkles,
  CheckCircle2,
  Watch,
  ShoppingBag,
  HeartPulse,
  Award,
  Users,
  Flame,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Coins,
  ChevronRight,
  Zap,
} from "lucide-react";

export function ClubMembershipModal() {
  const isOpen = useClubModal();
  const activeUser = sharedSandboxStore.useActiveUser();
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState<"benefits" | "faq">("benefits");

  if (!isOpen) return null;

  const isMember = Boolean(activeUser.isClubMember === true || activeUser.userCategory === "associado");

  // Ativação da assinatura do Clube (simulação completa de homologação)
  const handleSubscribe = async () => {
    setIsProcessing(true);
    try {
      // 1. Tenta notificar o webhook oficial de assinatura do servidor
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
        console.warn("[ClubModal] Fallback local para ativação do clube:", err);
      }

      // 2. Atualiza o estado do usuário no store local/nuvem
      const nowIso = new Date().toISOString();
      const clubBonusAmount = 250;

      sharedSandboxStore.updateUser(activeUser.id, {
        isClubMember: true,
        userCategory: "associado",
        nfsBalance: (activeUser.nfsBalance || 0) + clubBonusAmount,
      });

      // 3. Adiciona a transação no extrato
      const subTxId = `tx-club-sub-${Date.now()}`;
      sharedSandboxStore.addTransaction({
        id: subTxId,
        userId: activeUser.id,
        userName: activeUser.fullName || "Assinante Clube Netfits",
        amount: clubBonusAmount,
        description: "👑 Assinatura Clube Netfits: Mensalidade (250 nfs)",
        category: "welcome", // Categoria mapeada para créditos garantidos
        timestamp: nowIso,
      });

      toast.success("🎉 Bem-vindo ao Clube Netfits! +250 nfs creditados na sua carteira. Agora cada treino validado rende +25 nfs.", {
        duration: 5000,
      });

      // Fecha o modal após pequeno delay
      setTimeout(() => {
        clubModalStore.close();
      }, 1200);
    } catch (e: any) {
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
        console.warn("[ClubModal] Fallback local para cancelamento:", err);
      }

      sharedSandboxStore.updateUser(activeUser.id, {
        isClubMember: false,
        userCategory: "atleta",
      });

      toast.info("Assinatura do Clube suspensa em homologação. Você retornou ao plano padrão Atleta.");
      clubModalStore.close();
    } catch {
      toast.error("Erro ao suspender assinatura de teste.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="club-modal-title"
    >
      <div
        className="w-full max-w-lg max-h-[92vh] sm:max-h-[88vh] bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-white rounded-t-3xl sm:rounded-3xl border border-amber-500/30 shadow-2xl flex flex-col overflow-hidden relative"
      >
        {/* Glow Dourado de Fundo */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-amber-500/20 via-purple-600/10 to-transparent pointer-events-none" />

        {/* Topo com Fechar */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2 z-10">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 grid place-items-center shadow-inner">
              <Crown className="size-4" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 flex items-center gap-1">
                <Sparkles className="size-3" />
                Experiência VIP
              </span>
              <h2 id="club-modal-title" className="text-lg font-black tracking-tight text-white">
                Clube Netfits
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={() => clubModalStore.close()}
            className="size-8 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white grid place-items-center transition active:scale-95 cursor-pointer"
            aria-label="Fechar modal do clube"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Corpo com Scroll */}
        <div className="flex-1 overflow-y-auto px-5 py-3 space-y-4 z-10 text-zinc-200">
          {/* Card Principal de Oferta / Status */}
          <div className="rounded-2xl bg-gradient-to-br from-amber-500/15 via-zinc-900 to-zinc-900/90 border border-amber-500/40 p-4 space-y-3 relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-300">
                  {isMember ? "Seu Plano Atual" : "Assinatura Mensal"}
                </span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-2xl font-black text-white">R$ 19,90</span>
                  <span className="text-xs text-zinc-400">/ mês</span>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-black">
                  <Coins className="size-3.5" />
                  Até +1.000 nfs / mês
                </span>
                <p className="text-[10px] text-zinc-400 mt-1">250 na mensalidade + 25 por treino</p>
              </div>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              O acelerador oficial para quem vive em movimento. Ganhe até +1.000 nfs por mês (250 nfs na assinatura e a cada pagamento de mensalidade + 25 nfs por treino validado) e aproveite benefícios exclusivos.
            </p>

            {isMember && (
              <div className="pt-2 border-t border-amber-500/20 flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="size-4" />
                  Assinatura Ativa
                </span>
                <span className="text-zinc-400 text-[11px]">
                  Renovação em 30 dias
                </span>
              </div>
            )}
          </div>

          {/* Seletor de Abas */}
          <div className="flex rounded-xl bg-zinc-900/80 p-1 border border-zinc-800 text-xs font-bold">
            <button
              type="button"
              onClick={() => setActiveTab("benefits")}
              className={`flex-1 py-1.5 rounded-lg transition ${
                activeTab === "benefits"
                  ? "bg-amber-400/20 text-amber-300 border border-amber-400/30 shadow-xs"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Benefícios do Clube
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("faq")}
              className={`flex-1 py-1.5 rounded-lg transition ${
                activeTab === "faq"
                  ? "bg-amber-400/20 text-amber-300 border border-amber-400/30 shadow-xs"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Dúvidas Frequentes
            </button>
          </div>

          {/* Conteúdo: Benefícios */}
          {activeTab === "benefits" && (
            <div className="space-y-2.5">
              {/* Benefício 1: 1.000 nfs mensais */}
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 shrink-0 mt-0.5">
                  <Coins className="size-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">Até +1.000 netfits por mês</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed mt-0.5">
                    250 nfs na assinatura e a cada pagamento de mensalidade + 25 nfs por treino validado via relógio ou app, direto na sua carteira.
                  </p>
                </div>
              </div>

              {/* Benefício 2: Pontuação de Treinos Wearables */}
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-lime-400/10 text-lime-400 shrink-0 mt-0.5">
                  <Watch className="size-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">+25 nfs por Treino Validado</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed mt-0.5">
                    Sincronização de corridas, pedaladas e treinos com Garmin, Strava e Apple Watch (via Terra API) com +25 nfs por treino auditado por sensores ópticos.
                  </p>
                </div>
              </div>

              {/* Benefício 3: Vantagens no Shop */}
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-400/10 text-purple-400 shrink-0 mt-0.5">
                  <ShoppingBag className="size-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">Vantagens Exclusivas no Shop</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed mt-0.5">
                    Condições especiais, frete reduzido e ofertas em primeira mão com nossos lojistas parceiros (Netshoes, Webcontinental).
                  </p>
                </div>
              </div>

              {/* Benefício 4: Curadoria Fibios */}
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-400/10 text-blue-400 shrink-0 mt-0.5">
                  <HeartPulse className="size-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">Longevidade Ativa &amp; Fibios</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed mt-0.5">
                    Acesso exclusivo a protocolos de recuperação, sono, reparo celular e prevenção médica esportiva com a curadoria da Fibios.
                  </p>
                </div>
              </div>

              {/* Benefício 5: Eventos & Assessorias */}
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-rose-400/10 text-rose-400 shrink-0 mt-0.5">
                  <Flame className="size-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">Corridas, Assessorias &amp; Desafios</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed mt-0.5">
                    Descontos e prioridade em inscrições de corridas de rua credenciadas, além de benefícios com assessorias esportivas parceiras.
                  </p>
                </div>
              </div>

              {/* Benefício 6: Indicação Turbinada */}
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-400/10 text-emerald-400 shrink-0 mt-0.5">
                  <Users className="size-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">Comissão de Indicação (10%)</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed mt-0.5">
                    Membros do clube ganham 10% de comissão em pontos sobre todas as compras que os amigos indicados fizerem no Shop.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Conteúdo: FAQ */}
          {activeTab === "faq" && (
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <h5 className="font-bold text-white mb-1">Como funciona a cobrança?</h5>
                <p className="text-zinc-400 leading-relaxed">
                  A assinatura do Clube custa R$ 19,90 cobrados mensalmente no cartão de crédito cadastrado na plataforma ou via Pix recorrente.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <h5 className="font-bold text-white mb-1">Como funciona a pontuação do Clube?</h5>
                <p className="text-zinc-400 leading-relaxed">
                  Você recebe 250 nfs na confirmação da assinatura e a cada pagamento de mensalidade. Além disso, cada treino validado com relógio ou app credita +25 nfs na sua carteira, totalizando até +1.000 nfs por mês.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <h5 className="font-bold text-white mb-1">Existe fidelidade ou multa de cancelamento?</h5>
                <p className="text-zinc-400 leading-relaxed">
                  Não. Você pode cancelar sua assinatura a qualquer momento com apenas 1 clique pelo próprio aplicativo.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Rodapé / Botão de Ação */}
        <div className="p-4 bg-zinc-950 border-t border-zinc-800 z-10 space-y-2">
          {!isMember ? (
            <button
              type="button"
              disabled={isProcessing}
              onClick={handleSubscribe}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-zinc-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:brightness-105 active:scale-[0.99] transition disabled:opacity-50 cursor-pointer"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="size-4 animate-spin" />
                  Ativando Assinatura em Homologação...
                </>
              ) : (
                <>
                  <Crown className="size-4 text-zinc-950" />
                  Assinar Clube Netfits — R$ 19,90/mês
                  <ArrowRight className="size-4 text-zinc-950 ml-1" />
                </>
              )}
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  toast.success("Seus benefícios do Clube Netfits estão 100% ativos!");
                  clubModalStore.close();
                }}
                className="flex-1 py-2.5 px-3 rounded-xl bg-amber-400/20 border border-amber-400/30 text-amber-300 font-bold text-xs hover:bg-amber-400/30 active:scale-95 transition"
              >
                Benefícios Ativos
              </button>
              <button
                type="button"
                disabled={isProcessing}
                onClick={handleCancelSubscription}
                className="py-2.5 px-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-red-400 font-medium text-xs hover:bg-zinc-800 active:scale-95 transition"
              >
                {isProcessing ? "Cancelando..." : "Suspender (Teste)"}
              </button>
            </div>
          )}

          <p className="text-[10px] text-center text-zinc-500">
            Ambiente de Homologação • Zero impacto fiscal • Cancelamento sem fidelidade
          </p>
        </div>
      </div>
    </div>
  );
}
