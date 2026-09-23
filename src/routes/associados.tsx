import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Users, DollarSign, TrendingUp, ShoppingBag, Eye, Share2, Video,
  Award, Copy, Check, Sparkles, ArrowUpRight, LogIn, Lock, Filter,
  Calendar, CheckCircle2, ChevronRight, Activity, Download, ShieldCheck,
  Percent, Coins, UserPlus
} from "lucide-react";
import netfitsLogo from "@/assets/netfits-logo.png";
import netfitsMark from "@/assets/netfits-mark.png";
import { toast } from "sonner";
import { useOperationalParams } from "@/lib/operational-params-store";
import { InstitutionalWebHeader } from "@/components/InstitutionalWebHeader";
import { sharedSandboxStore, type SandboxUser } from "@/lib/shared-sandbox-store";

export const Route = createFileRoute("/associados")({
  head: () => ({
    meta: [
      { title: "Painel do Associado — Netfits" },
      {
        name: "description",
        content: "Painel exclusivo para Associados e Prescritores credenciados Netfits.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AssociadosDashboardPage,
});

export function AssociadosDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginCode, setLoginCode] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [copied, setCopied] = useState(false);

  // Estados da Calculadora Interativa de Projeção
  const [simulatedAthletes, setSimulatedAthletes] = useState(50);
  const [simulatedSpendBrl, setSimulatedSpendBrl] = useState(180);

  // Estado do Modal de QR Code / Social Kit
  const [showQrModal, setShowQrModal] = useState(false);
  const params = useOperationalParams();

  // Parâmetros em tempo real vindos do Admin
  const takeRatePct = params.netfitsTakeRatePctFromGmv;
  const associadoSharePct = params.associadoShareOfNetfitsRevenuePct;
  const effectivePct = ((takeRatePct / 100) * (associadoSharePct / 100) * 100).toFixed(2);

  // Localizar usuário cadastrado no store compartilhado ou usar perfil autenticado limpo
  const registeredUser = sharedSandboxStore.getUsers().find(
    (u: SandboxUser) =>
      u.referralCode?.toLowerCase() === loginCode.trim().toLowerCase() ||
      u.email?.toLowerCase() === loginCode.trim().toLowerCase()
  );

  const associado = {
    id: registeredUser?.id || "assoc_session",
    name: registeredUser?.fullName || (loginCode ? `Associado ${loginCode.toUpperCase()}` : "Associado Netfits"),
    handle: `@${(registeredUser?.fullName || loginCode || "associado").toLowerCase().replace(/\s+/g, ".")}`,
    category: registeredUser?.specialty || "Associado Credenciado · Prescritor de Saúde",
    referralCode: registeredUser?.referralCode || (loginCode.trim().toUpperCase() || "ASSOC-NFS"),
    exclusiveUrl: `https://www.netfits.com.br/?ref=${registeredUser?.referralCode || loginCode.trim().toUpperCase() || "ASSOC-NFS"}`,
    
    // Dados reais e definitivos (zerados para contas novas, sem valores fictícios/mockados)
    totalCapturedUsers: 0,
    activeUsersThisMonth: 0,
    retentionRatePct: 0,
    monthlyGmvBrl: 0,
    netfitsRevenueBrl: 0,
    monthlyCommissionBrl: 0,
    totalCommissionPaidBrl: 0,
    pendingPaymentBrl: 0,
    nextPayoutDate: "05 do próximo mês",

    syntheticActionsReport: {
      shopPurchasesCount: 0,
      shopGmvBrl: 0,
      postsViewedCount: 0,
      videosWatchedCount: 0,
      contentSharesCount: 0,
      physicalActivitiesCount: 0,
      partnerLoyaltyDeclarations: 0,
    },

    recentCapturedUsers: [] as Array<{
      id: string;
      name: string;
      email: string;
      joinDate: string;
      status: string;
      engagementLevel: string;
      purchasesBrl: number;
      netfitsRevBrl: number;
      commissionGeneratedBrl: number;
    }>,

    payoutHistory: [] as Array<{
      period: string;
      capturedUsers: number;
      gmvBrl: number;
      netfitsRevBrl: number;
      payoutBrl: number;
      status: string;
      date: string;
    }>,
  };

  const netfitsRevenueBrl = associado.monthlyGmvBrl * (takeRatePct / 100);
  const monthlyCommissionBrl = netfitsRevenueBrl * (associadoSharePct / 100);

  // Cálculo da Projeção de Renda Passiva Mensal
  const simulatedGmv = simulatedAthletes * simulatedSpendBrl;
  const simulatedNetfitsRevenue = simulatedGmv * (takeRatePct / 100);
  const simulatedAssociadoCommission = simulatedNetfitsRevenue * (associadoSharePct / 100);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(associado.exclusiveUrl);
    setCopied(true);
    toast.success("Link exclusivo de Associado copiado para a área de transferência!");
    setTimeout(() => setCopied(false), 2500);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginCode.trim() || !loginPassword.trim()) {
      toast.error("Informe seu código ou e-mail de Associado e sua senha.");
      return;
    }
    setIsAuthenticated(true);
    toast.success(`Bem-vindo ao Painel do Associado!`);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
        <InstitutionalWebHeader />
        <div className="flex-1 flex flex-col justify-center items-center px-4 py-12">
          <div className="w-full max-w-md bg-zinc-900 border border-purple-500/30 rounded-3xl p-8 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <div className="size-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-lime-400 p-0.5 mx-auto shadow-xl mb-3">
                <div className="w-full h-full bg-zinc-950 rounded-[14px] grid place-items-center">
                  <Lock className="size-7 text-lime-400" />
                </div>
              </div>
              <h1 className="text-xl font-black text-white tracking-tight">
                Programa de Associados (Acesso Restrito)
              </h1>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Área exclusiva para parceiros estratégicos e associados credenciados pela Netfits.
              </p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-300">Código ou E-mail do Associado *</label>
                <input
                  type="text"
                  value={loginCode}
                  onChange={(e) => setLoginCode(e.target.value)}
                  placeholder="Digite seu código ou e-mail credenciado"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-300">Senha de Acesso *</label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-xs bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <LogIn className="size-4" />
                Entrar no Painel do Associado
              </button>
            </form>

            <div className="pt-4 border-t border-zinc-800 text-center space-y-2">
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                🔒 <strong>Cadastro Restrito:</strong> Os cadastros de novos Associados são homologados exclusivamente pela equipe executiva Netfits.
              </p>
              <p className="text-[10px] text-zinc-500">
                Caso tenha dúvidas sobre o seu credenciamento, entre em contato através dos canais oficiais.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans pb-16">
      <InstitutionalWebHeader />

      <header className="sticky top-0 z-40 bg-zinc-900 border-b border-zinc-800 px-4 sm:px-6 py-3.5 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 bg-foreground px-2.5 py-1.5 rounded-xl">
            <img src={netfitsMark} alt="" className="size-6 object-contain" />
            <img src={netfitsLogo} alt="Netfits" className="h-4 w-auto filter brightness-0 invert" />
          </div>
          <span className="hidden sm:inline-block text-xs bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full border border-purple-500/20 font-semibold">
            Painel do Associado Netfits
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-xs text-zinc-400">
            <span className="size-2 rounded-full bg-lime-400 animate-pulse" />
            <span>Código: <b className="text-white font-mono">{associado.referralCode}</b></span>
          </div>

          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-300 border border-zinc-700 transition cursor-pointer"
          >
            Sair
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
        {/* Banner do Associado & Regra de Repasse */}
        <section className="bg-gradient-to-r from-purple-950 via-zinc-900 to-zinc-900 border border-purple-500/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute right-[-5%] bottom-[-20%] size-80 bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="size-12 rounded-2xl bg-purple-600 text-white font-black text-lg grid place-items-center shadow-lg">
                  {associado.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h2 className="text-xl font-black text-white">{associado.name}</h2>
                  <p className="text-xs text-lime-400 font-semibold">{associado.category}</p>
                </div>
              </div>
              <div className="bg-zinc-950/60 p-3 rounded-2xl border border-zinc-800 text-xs text-zinc-300 max-w-xl space-y-1">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <Percent className="size-3.5 text-lime-400" />
                  Regra de Comissionamento Transparente:
                </p>
                <p>
                  • A Netfits retém <b>{takeRatePct}% do GMV do Shopping</b> como receita de marketplace.
                </p>
                <p>
                  • Você recebe <b className="text-lime-400">{associadoSharePct}% sobre a receita líquida da Netfits</b> gerada pela sua carteira de usuários!
                </p>
              </div>
            </div>

            {/* Link Exclusivo Box + Botão QR Code */}
            <div className="bg-zinc-950/80 border border-purple-500/30 rounded-2xl p-4 min-w-[320px] space-y-3 shadow-xl">
              <div className="flex justify-between items-center text-[10px] uppercase font-bold text-zinc-400">
                <span>Seu Link Exclusivo de Indicação</span>
                <span className="text-lime-400">{associadoSharePct}% da Receita</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-zinc-900 rounded-xl px-3 py-2 text-xs font-mono text-white truncate border border-zinc-800">
                  {associado.exclusiveUrl}
                </div>
                <button
                  onClick={handleCopyLink}
                  className="bg-lime-400 hover:bg-lime-300 text-zinc-950 font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition shrink-0 cursor-pointer"
                >
                  {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                  {copied ? "Copiado!" : "Copiar"}
                </button>
              </div>

              <button
                onClick={() => setShowQrModal(true)}
                className="w-full py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 font-bold text-xs border border-purple-500/30 flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <Share2 className="size-3.5 text-lime-400" />
                Gerar QR Code & Kit de Mídia Social
              </button>
            </div>
          </div>
        </section>

        {/* 4 Cards Principais com a Cadeia de Valor Financeira */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard
            title="Usuários na Carteira"
            value={associado.totalCapturedUsers.toLocaleString("pt-BR")}
            subtext={`${associado.activeUsersThisMonth} ativos neste mês`}
            icon={<Users className="size-5 text-purple-400" />}
            highlightColor="border-purple-500/30"
          />

          <KpiCard
            title="GMV do Shopping (R$)"
            value={`R$ ${associado.monthlyGmvBrl.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
            subtext="Vendas totais de produtos na sua carteira"
            icon={<ShoppingBag className="size-5 text-purple-400" />}
            highlightColor="border-purple-500/30"
          />

          <KpiCard
            title={`Receita Netfits (${takeRatePct}% GMV)`}
            value={`R$ ${netfitsRevenueBrl.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
            subtext="Valor retido pela plataforma"
            icon={<Coins className="size-5 text-purple-400" />}
            highlightColor="border-purple-500/30"
          />

          <KpiCard
            title={`Sua Comissão (${associadoSharePct}% Receita)`}
            value={`R$ ${monthlyCommissionBrl.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
            subtext="Seu repasse líquido a receber este mês"
            icon={<DollarSign className="size-5 text-lime-400" />}
            highlightColor="border-lime-400 ring-1 ring-lime-400/20 bg-lime-400/5"
            badgeText="A Receber"
          />
        </section>

        {/* 🧮 SIMULADOR INTERATIVO DE PROJEÇÃO DE GANHOS */}
        <section className="bg-gradient-to-r from-zinc-900 via-purple-950/40 to-zinc-900 border border-purple-500/30 rounded-3xl p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-2xl bg-purple-600/20 text-purple-400 grid place-items-center border border-purple-500/30">
                <Sparkles className="size-5 text-lime-400" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400">
                  Simulador de Ganhos em Tempo Real
                </span>
                <h3 className="text-base font-bold text-white">
                  Calculadora de Projeção de Comissões PIX
                </h3>
              </div>
            </div>
            <span className="text-xs bg-lime-400/10 text-lime-400 px-3 py-1 rounded-full border border-lime-400/20 font-bold hidden sm:inline-block">
              Comissão Efetiva: {effectivePct}% do GMV
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold text-zinc-200">Atletas Ativos na Carteira:</label>
                  <span className="font-extrabold text-lime-400 text-sm font-mono">{simulatedAthletes} atletas</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="1000"
                  step="5"
                  value={simulatedAthletes}
                  onChange={(e) => setSimulatedAthletes(Number(e.target.value))}
                  className="w-full accent-purple-500 bg-zinc-950 rounded-lg cursor-pointer h-2"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                  <span>5 atletas</span>
                  <span>500 atletas</span>
                  <span>1.000 atletas</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold text-zinc-200">Gasto Médio Mensal por Atleta no Shop:</label>
                  <span className="font-extrabold text-purple-400 text-sm font-mono">R$ {simulatedSpendBrl}/mês</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="10"
                  value={simulatedSpendBrl}
                  onChange={(e) => setSimulatedSpendBrl(Number(e.target.value))}
                  className="w-full accent-lime-400 bg-zinc-950 rounded-lg cursor-pointer h-2"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                  <span>R$ 50/mês</span>
                  <span>R$ 250/mês</span>
                  <span>R$ 500/mês</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-zinc-950/90 border border-purple-500/40 rounded-2xl p-5 text-center space-y-3 shadow-2xl">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400">
                Sua Renda Mensal Estimada
              </span>
              <div className="text-3xl font-black text-lime-400 tracking-tight">
                R$ {simulatedAssociadoCommission.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}<span className="text-xs font-medium text-zinc-400"> /mês</span>
              </div>

              <div className="pt-2 border-t border-zinc-800 text-[11px] text-zinc-400 space-y-1 text-left">
                <div className="flex justify-between">
                  <span>GMV Estimado Gerado:</span>
                  <b className="text-white font-mono">R$ {simulatedGmv.toLocaleString("pt-BR")}</b>
                </div>
                <div className="flex justify-between">
                  <span>Receita Netfits ({takeRatePct}%):</span>
                  <b className="text-purple-400 font-mono">R$ {simulatedNetfitsRevenue.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</b>
                </div>
                <div className="flex justify-between">
                  <span>Seu Repasse ({associadoSharePct}% da Receita):</span>
                  <b className="text-lime-400 font-mono">R$ {simulatedAssociadoCommission.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal de QR Code e Social Marketing Kit */}
        {showQrModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white text-zinc-900 border border-zinc-200 rounded-3xl p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 text-left">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                <div className="flex items-center gap-2">
                  <Share2 className="size-5 text-purple-600" />
                  <h3 className="text-base font-extrabold text-zinc-900">QR Code & Kit de Mídia</h3>
                </div>
                <button
                  onClick={() => setShowQrModal(false)}
                  className="size-8 rounded-full bg-zinc-100 hover:bg-zinc-200 grid place-items-center text-zinc-600 transition font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="bg-white p-6 rounded-2xl text-center space-y-3 shadow-xl max-w-xs mx-auto">
                <div className="size-44 bg-zinc-950 p-3 rounded-xl mx-auto flex items-center justify-center border-4 border-purple-600">
                  <div className="grid grid-cols-5 gap-1.5 w-full h-full p-1 bg-white rounded-lg place-items-center">
                    <div className="size-6 bg-purple-600 rounded-xs" />
                    <div className="size-6 bg-zinc-950 rounded-xs" />
                    <div className="size-6 bg-purple-600 rounded-xs" />
                    <div className="size-6 bg-zinc-950 rounded-xs" />
                    <div className="size-6 bg-purple-600 rounded-xs" />
                    <div className="size-6 bg-zinc-950 rounded-xs" />
                    <div className="size-6 bg-lime-400 rounded-xs" />
                    <div className="size-6 bg-purple-600 rounded-xs" />
                    <div className="size-6 bg-lime-400 rounded-xs" />
                    <div className="size-6 bg-zinc-950 rounded-xs" />
                    <div className="size-6 bg-purple-600 rounded-xs" />
                    <div className="size-6 bg-zinc-950 rounded-xs" />
                    <div className="size-6 bg-purple-600 rounded-xs" />
                    <div className="size-6 bg-zinc-950 rounded-xs" />
                    <div className="size-6 bg-lime-400 rounded-xs" />
                  </div>
                </div>
                <p className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-widest">
                  {associado.referralCode}
                </p>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    toast.success("QR Code exclusivo de Associado pronto para compartilhamento!");
                    setShowQrModal(false);
                  }}
                  className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 cursor-pointer"
                >
                  <Download className="size-4 text-lime-400" />
                  Salvar QR Code
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tabela de Usuários Recentes da Carteira */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Usuários Vinculados à sua Carteira</h3>
              <p className="text-xs text-zinc-400">Detalhamento individual das conversões: GMV &rarr; Receita Netfits ({takeRatePct}%) &rarr; Comissão ({associadoSharePct}%)</p>
            </div>
            <span className="text-xs font-semibold text-purple-400 bg-purple-950 px-3 py-1 rounded-full border border-purple-800">
              Total: {associado.totalCapturedUsers} usuários
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-zinc-300">
              <thead className="bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800">
                <tr>
                  <th className="py-3 px-4">Usuário Indicado</th>
                  <th className="py-3 px-4">Data de Cadastro</th>
                  <th className="py-3 px-4">Engajamento</th>
                  <th className="py-3 px-4 text-right">GMV Compras (R$)</th>
                  <th className="py-3 px-4 text-right">Receita Netfits ({takeRatePct}%)</th>
                  <th className="py-3 px-4 text-right">Comissão Associado ({associadoSharePct}%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 font-medium">
                {associado.recentCapturedUsers.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-zinc-500">
                      Nenhum usuário indicado ainda na sua carteira. Compartilhe seu link exclusivo para iniciar a geração de comissões.
                    </td>
                  </tr>
                ) : (
                  associado.recentCapturedUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-zinc-800/50 transition">
                      <td className="py-3 px-4">
                        <div className="font-bold text-white">{user.name}</div>
                        <div className="text-[10px] text-zinc-500">{user.email}</div>
                      </td>
                      <td className="py-3 px-4">{user.joinDate}</td>
                      <td className="py-3 px-4">
                        <span className="bg-zinc-800 px-2 py-0.5 rounded text-[10px] text-zinc-300">
                          {user.engagementLevel}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right font-mono">
                        R$ {user.purchasesBrl.toFixed(2)}
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-purple-400">
                        R$ {user.netfitsRevBrl.toFixed(2)}
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-lime-400 font-bold">
                        R$ {user.commissionGeneratedBrl.toFixed(2)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Histórico Financeiro de Repasses PIX */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Histórico de Repasses Financeiros (PIX)</h3>
              <p className="text-xs text-zinc-400">Extrato detalhado de comissões creditadas e liquidadas</p>
            </div>
            <span className="text-xs font-mono font-bold text-lime-400 bg-lime-950 px-3 py-1 rounded-full border border-lime-800">
              Total Pago: R$ {associado.totalCommissionPaidBrl.toFixed(2)}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-zinc-300">
              <thead className="bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800">
                <tr>
                  <th className="py-3 px-4">Competência</th>
                  <th className="py-3 px-4">Base Indicados</th>
                  <th className="py-3 px-4 text-right">GMV Carteira</th>
                  <th className="py-3 px-4 text-right">Receita Netfits</th>
                  <th className="py-3 px-4 text-right">Comissão Paga</th>
                  <th className="py-3 px-4 text-center">Status</th>
                  <th className="py-3 px-4">Data Pagamento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 font-medium">
                {associado.payoutHistory.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-zinc-500">
                      Nenhum repasse anterior registrado no momento.
                    </td>
                  </tr>
                ) : (
                  associado.payoutHistory.map((p, idx) => (
                    <tr key={idx} className="hover:bg-zinc-800/50 transition">
                      <td className="py-3 px-4 font-bold text-white">{p.period}</td>
                      <td className="py-3 px-4">{p.capturedUsers} usuários</td>
                      <td className="py-3 px-4 text-right font-mono">R$ {p.gmvBrl.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                      <td className="py-3 px-4 text-right font-mono text-purple-400">R$ {p.netfitsRevBrl.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                      <td className="py-3 px-4 text-right font-mono text-lime-400 font-bold">R$ {p.payoutBrl.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                      <td className="py-3 px-4 text-center">
                        <span className="bg-emerald-950/80 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold border border-emerald-800">
                          {p.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-zinc-400">{p.date}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

function KpiCard({
  title,
  value,
  subtext,
  icon,
  highlightColor = "border-zinc-800",
  badgeText,
}: {
  title: string;
  value: string;
  subtext: string;
  icon: React.ReactNode;
  highlightColor?: string;
  badgeText?: string;
}) {
  return (
    <div className={`bg-zinc-900 border ${highlightColor} rounded-3xl p-5 space-y-3 shadow-lg relative`}>
      {badgeText && (
        <span className="absolute top-4 right-4 text-[10px] font-extrabold uppercase bg-lime-400 text-zinc-950 px-2 py-0.5 rounded-full">
          {badgeText}
        </span>
      )}
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-zinc-400">{title}</span>
        <div className="size-8 rounded-xl bg-zinc-800 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <div className="text-2xl font-black text-white tracking-tight">{value}</div>
        <p className="text-[11px] text-zinc-400 mt-1">{subtext}</p>
      </div>
    </div>
  );
}
