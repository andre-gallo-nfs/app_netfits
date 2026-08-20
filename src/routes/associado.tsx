import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Users, DollarSign, TrendingUp, ShoppingBag, Eye, Share2, Video,
  Award, Copy, Check, Sparkles, ArrowUpRight, LogIn, Lock, Filter,
  Calendar, CheckCircle2, ChevronRight, Activity, Download, ShieldCheck,
  Percent, Coins
} from "lucide-react";
import netfitsLogo from "@/assets/netfits-logo.png";
import netfitsMark from "@/assets/netfits-mark.png";
import { toast } from "sonner";
import { useOperationalParams } from "@/lib/operational-params-store";

export const Route = createFileRoute("/associado")({
  head: () => ({
    meta: [
      { title: "Painel do Associado — Netfits" },
      {
        name: "description",
        content: "Painel de transparência financeira e gestão de carteira para Associados e Influenciadores Netfits.",
      },
      { property: "og:title", content: "Painel do Associado — Netfits" },
    ],
  }),
  component: AssociadoDashboardPage,
});

// Dados mockados do Associado logado (Influenciador Parceiro)
const MOCK_ASSOCIADO_DATA = {
  id: "assoc_001",
  name: "André Gallo",
  handle: "@gallo.influencer",
  category: "Associado Netfits · Influenciador Fitness",
  referralCode: "GALLO-NETFITS",
  exclusiveUrl: "https://netfits.app/r/GALLO-NETFITS",
  
  // Modelo Financeiro do Business Plan:
  // GMV Shopping -> Netfits Take-Rate (8%) -> Repasse ao Associado (10% da Receita Netfits)
  netfitsTakeRatePct: 8.0, // Netfits cobra 8% do GMV do Shopping
  associadoShareOfNetfitsRevenuePct: 10.0, // Associado recebe 10% da receita da Netfits
  
  totalCapturedUsers: 1428,
  activeUsersThisMonth: 1248,
  retentionRatePct: 87.4,
  monthlyGmvBrl: 184920.0,
  netfitsRevenueBrl: 27738.0, // 15% de R$ 184.920
  monthlyCommissionBrl: 8321.4, // 30% de R$ 27.738
  totalCommissionPaidBrl: 58450.0,
  pendingPaymentBrl: 8321.4,
  nextPayoutDate: "05/09/2026",

  syntheticActionsReport: {
    shopPurchasesCount: 342,
    shopGmvBrl: 148500.0,
    postsViewedCount: 12840,
    videosWatchedCount: 4920,
    contentSharesCount: 2310,
    physicalActivitiesCount: 8450,
    partnerLoyaltyDeclarations: 890,
  },

  recentCapturedUsers: [
    {
      id: "u_901",
      name: "Mariana Costa",
      email: "m.costa@gmail.com",
      joinDate: "08/08/2026",
      status: "Ativo",
      engagementLevel: "Alto (Atleta)",
      purchasesBrl: 1250.0,
      netfitsRevBrl: 187.5,
      commissionGeneratedBrl: 56.25,
    },
    {
      id: "u_902",
      name: "Lucas Fernandes",
      email: "lucas.f@hotmail.com",
      joinDate: "05/08/2026",
      status: "Ativo",
      engagementLevel: "Médio",
      purchasesBrl: 480.0,
      netfitsRevBrl: 72.0,
      commissionGeneratedBrl: 21.6,
    },
    {
      id: "u_903",
      name: "Camila Becker",
      email: "camila.becker@yahoo.com",
      joinDate: "01/08/2026",
      status: "Ativo",
      engagementLevel: "Muito Alto (Elite)",
      purchasesBrl: 3490.0,
      netfitsRevBrl: 523.5,
      commissionGeneratedBrl: 157.05,
    },
    {
      id: "u_904",
      name: "Roberto Silva",
      email: "roberto.silva@outlook.com",
      joinDate: "28/07/2026",
      status: "Ativo",
      engagementLevel: "Médio",
      purchasesBrl: 890.0,
      netfitsRevBrl: 133.5,
      commissionGeneratedBrl: 40.05,
    },
    {
      id: "u_905",
      name: "Juliana Paes",
      email: "juju.paes@gmail.com",
      joinDate: "22/07/2026",
      status: "Ativo",
      engagementLevel: "Alto",
      purchasesBrl: 1890.0,
      netfitsRevBrl: 283.5,
      commissionGeneratedBrl: 85.05,
    },
  ],

  payoutHistory: [
    { period: "Julho/2026", capturedUsers: 1350, gmvBrl: 168000.0, netfitsRevBrl: 25200.0, payoutBrl: 7560.0, status: "Pago (Pix)", date: "05/08/2026" },
    { period: "Junho/2026", capturedUsers: 1210, gmvBrl: 152500.0, netfitsRevBrl: 22875.0, payoutBrl: 6862.5, status: "Pago (Pix)", date: "05/07/2026" },
    { period: "Maio/2026", capturedUsers: 1080, gmvBrl: 141000.0, netfitsRevBrl: 21150.0, payoutBrl: 6345.0, status: "Pago (Pix)", date: "05/06/2026" },
  ],
};

function AssociadoDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginCode, setLoginCode] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [copied, setCopied] = useState(false);

  // Estados da Calculadora Interativa de Renda Passiva
  const [simulatedAthletes, setSimulatedAthletes] = useState(50);
  const [simulatedSpendBrl, setSimulatedSpendBrl] = useState(180);

  // Estado do Modal de QR Code / Social Kit
  const [showQrModal, setShowQrModal] = useState(false);
  const params = useOperationalParams();
  const associado = MOCK_ASSOCIADO_DATA;

  // Parâmetros em tempo real vindos do Admin
  const takeRatePct = params.netfitsTakeRatePctFromGmv;
  const associadoSharePct = params.associadoShareOfNetfitsRevenuePct;
  const effectivePct = ((takeRatePct / 100) * (associadoSharePct / 100) * 100).toFixed(2);

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
    if (!loginCode || !loginPassword) {
      toast.error("Informe seu código ou e-mail de Associado e sua senha.");
      return;
    }
    setIsAuthenticated(true);
    toast.success(`Bem-vindo ao Painel do Associado, ${associado.name}!`);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-center items-center px-4 py-12">
        <div className="w-full max-w-md bg-zinc-900 border border-purple-500/30 rounded-3xl p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="size-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-lime-400 p-0.5 mx-auto shadow-xl mb-3">
              <div className="w-full h-full bg-zinc-950 rounded-[14px] grid place-items-center">
                <Lock className="size-7 text-lime-400" />
              </div>
            </div>
            <h1 className="text-xl font-black text-white tracking-tight">
              Acesso do Associado — Netfits
            </h1>
            <p className="text-xs text-zinc-400">
              Digite suas credenciais de influenciador credenciado para acessar seu extrato de comissões.
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-300">Código ou E-mail do Associado *</label>
              <input
                type="text"
                value={loginCode}
                onChange={(e) => setLoginCode(e.target.value)}
                placeholder="GALLO-NETFITS"
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
              className="w-full py-3.5 rounded-xl font-bold text-xs bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2"
            >
              <LogIn className="size-4" />
              Entrar no Painel do Associado
            </button>
          </form>

          <div className="bg-zinc-950/80 p-3 rounded-2xl border border-zinc-800 text-[11px] text-zinc-400 text-center">
            <p>🔑 Credenciais de Teste Associado:</p>
            <p className="font-mono text-zinc-300 mt-0.5"><b>GALLO-NETFITS</b> | <b>Pass@1234</b></p>
          </div>
        </div>
      </div>
    );
  }

import { InstitutionalWebHeader } from "@/components/InstitutionalWebHeader";

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans pb-16">
      {/* Header Corporativo Unificado */}
      <InstitutionalWebHeader />
      {/* Top Navigation */}
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
            className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-300 border border-zinc-700 transition"
          >
            Sair
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
        {/* Banner do Influenciador / Associado & Regra de Repasse */}
        <section className="bg-gradient-to-r from-purple-950 via-zinc-900 to-zinc-900 border border-purple-500/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute right-[-5%] bottom-[-20%] size-80 bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="size-12 rounded-2xl bg-purple-600 text-white font-black text-lg grid place-items-center shadow-lg">
                  AG
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
                  • A Netfits retém <b>{takeRatePct}% do GMV do Shopping</b> como receita bruta de marketplace.
                </p>
                <p>
                  • Você recebe <b className="text-lime-400">{associadoSharePct}% sobre essa receita da Netfits</b> gerada pela sua carteira de usuários!
                </p>
              </div>
            </div>

            {/* Link Exclusivo Box + Botão QR Code */}
            <div className="bg-zinc-950/80 border border-purple-500/30 rounded-2xl p-4 min-w-[320px] space-y-3 shadow-xl">
              <div className="flex justify-between items-center text-[10px] uppercase font-bold text-zinc-400">
                <span>Seu Link Exclusivo de Captação</span>
                <span className="text-lime-400">{associadoSharePct}% da Receita Netfits</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-zinc-900 rounded-xl px-3 py-2 text-xs font-mono text-white truncate border border-zinc-800">
                  {associado.exclusiveUrl}
                </div>
                <button
                  onClick={handleCopyLink}
                  className="bg-lime-400 hover:bg-lime-300 text-zinc-950 font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition shrink-0"
                >
                  {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                  {copied ? "Copiado!" : "Copiar"}
                </button>
              </div>

              <button
                onClick={() => setShowQrModal(true)}
                className="w-full py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 font-bold text-xs border border-purple-500/30 flex items-center justify-center gap-2 transition"
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
            subtext={`${associado.activeUsersThisMonth} ativos neste mês (${associado.retentionRatePct}% retenção)`}
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
            subtext="Valor bruto retido pela plataforma"
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

        {/* 🧮 SIMULADOR INTERATIVO DE RENDA PASSIVA EM TEMPO REAL */}
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
              Comissão Líquida: {effectivePct}% do GMV
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-5">
              {/* Slider 1: Atletas Ativos na Tribo */}
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

              {/* Slider 2: Gasto Médio no Shop por Atleta */}
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

            {/* Display do Resultado Calculado */}
            <div className="lg:col-span-5 bg-zinc-950/90 border border-purple-500/40 rounded-2xl p-5 text-center space-y-3 shadow-2xl">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400">
                Sua Renda Passiva Mensal Estimada
              </span>
              <div className="text-3xl font-black text-lime-400 tracking-tight">
                R$ {simulatedAssociadoCommission.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}<span className="text-xs font-medium text-zinc-400"> /mês</span>
              </div>

              <div className="pt-2 border-t border-zinc-800 text-[11px] text-zinc-400 space-y-1 text-left">
                <div className="flex justify-between">
                  <span>GMV Total Gerado:</span>
                  <b className="text-white font-mono">R$ {simulatedGmv.toLocaleString("pt-BR")}</b>
                </div>
                <div className="flex justify-between">
                  <span>Receita Retida Netfits ({takeRatePct}%):</span>
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
                  className="size-8 rounded-full bg-zinc-100 hover:bg-zinc-200 grid place-items-center text-zinc-600 transition font-bold"
                >
                  ✕
                </button>
              </div>

              {/* QR Code Container */}
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
                    toast.success("QR Code exclusivo de Associado baixado em PNG alta resolução!");
                    setShowQrModal(false);
                  }}
                  className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30"
                >
                  <Download className="size-4 text-lime-400" />
                  Baixar QR Code para Impressão (PNG HD)
                </button>
                <button
                  onClick={() => {
                    toast.success("Kit de artes para Instagram Stories e WhatsApp copiado!");
                    setShowQrModal(false);
                  }}
                  className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-xs border border-zinc-700 transition flex items-center justify-center gap-2"
                >
                  <Sparkles className="size-4 text-purple-400" />
                  Baixar Artes para Stories & WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Relatório Sintético do Comportamento da Carteira */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400">
                Relatório Sintético Executivo
              </span>
              <h3 className="text-lg font-bold text-white">
                Resumo de Ações da Carteira do Associado
              </h3>
              <p className="text-xs text-zinc-400">
                Acompanhe o engajamento e as interações transacionais dos usuários captados.
              </p>
            </div>
            <button
              onClick={() => toast.success("Relatório sintético exportado em PDF com sucesso!")}
              className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 border border-zinc-700 flex items-center gap-1.5 self-start sm:self-auto"
            >
              <Download className="size-4" />
              Exportar Relatório PDF
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SyntheticActionTile
              icon={<ShoppingBag className="size-5 text-lime-400" />}
              title="Compras no Marketplace"
              metric={`${associado.syntheticActionsReport.shopPurchasesCount} Compras Realizadas`}
              detail={`Volume GMV: R$ ${associado.syntheticActionsReport.shopGmvBrl.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
            />

            <SyntheticActionTile
              icon={<Eye className="size-5 text-purple-400" />}
              title="Visualizações de Posts & Guias"
              metric={`${associado.syntheticActionsReport.postsViewedCount.toLocaleString("pt-BR")} Consumos no Feed`}
              detail="Usuários consumindo conteúdos editoriais e de parceiros"
            />

            <SyntheticActionTile
              icon={<Video className="size-5 text-purple-400" />}
              title="Aulas & Vídeos Assistidos"
              metric={`${associado.syntheticActionsReport.videosWatchedCount.toLocaleString("pt-BR")} Aulas Concluídas`}
              detail="Engajamento com especialistas e profissionais de saúde"
            />

            <SyntheticActionTile
              icon={<Share2 className="size-5 text-lime-400" />}
              title="Compartilhamentos & Difusão"
              metric={`${associado.syntheticActionsReport.contentSharesCount.toLocaleString("pt-BR")} Compartilhamentos`}
              detail="Viralização da marca Netfits por sua base de indicados"
            />

            <SyntheticActionTile
              icon={<Activity className="size-5 text-purple-400" />}
              title="Atividades & Provas Esportivas"
              metric={`${associado.syntheticActionsReport.physicalActivitiesCount.toLocaleString("pt-BR")} Treinos Registrados`}
              detail="Frequência ativa de esportes e longevidade monitorada"
            />

            <SyntheticActionTile
              icon={<Award className="size-5 text-lime-400" />}
              title="Declaração de Pontos Bancários"
              metric={`${associado.syntheticActionsReport.partnerLoyaltyDeclarations} Usuários Declarantes`}
              detail="Potencial de cashback e conversão em milhas e pontos"
            />
          </div>
        </section>

        {/* Tabela de Usuários Recentes da Carteira */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Usuários Recentes na sua Carteira</h3>
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
                  <th className="py-3 px-4">Usuário Captado</th>
                  <th className="py-3 px-4">Data de Entrada</th>
                  <th className="py-3 px-4">Engajamento</th>
                  <th className="py-3 px-4 text-right">GMV Compras (R$)</th>
                  <th className="py-3 px-4 text-right">Receita Netfits ({takeRatePct}%)</th>
                  <th className="py-3 px-4 text-right">Comissão Associado ({associadoSharePct}%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 font-medium">
                {associado.recentCapturedUsers.map((u) => {
                  const uNetfitsRev = u.purchasesBrl * (takeRatePct / 100);
                  const uCommission = uNetfitsRev * (associadoSharePct / 100);
                  return (
                    <tr key={u.id} className="hover:bg-zinc-800/40 transition">
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-bold text-white">{u.name}</p>
                          <p className="text-[10px] text-zinc-500">{u.email}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-zinc-400">{u.joinDate}</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-950 text-purple-300 border border-purple-800">
                          {u.engagementLevel}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right font-bold text-white">
                        R$ {u.purchasesBrl.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </td>
                      <td className="py-3 px-4 text-right text-purple-300">
                        R$ {uNetfitsRev.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </td>
                      <td className="py-3 px-4 text-right font-bold text-lime-400">
                        +R$ {uCommission.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Extrato de Repasses Mensais em R$ */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4">
          <h3 className="text-base font-bold text-white">Histórico de Repasses Financeiros (R$)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {associado.payoutHistory.map((p) => (
              <div key={p.period} className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-white">{p.period}</span>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-lime-400/20 text-lime-400 border border-lime-400/30">
                    {p.status}
                  </span>
                </div>
                <p className="text-xl font-extrabold text-lime-400">
                  R$ {p.payoutBrl.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </p>
                <div className="text-[10px] text-zinc-400 flex justify-between border-t border-zinc-900 pt-2">
                  <span>GMV: R$ {p.gmvBrl.toLocaleString("pt-BR")}</span>
                  <span>Data: {p.date}</span>
                </div>
              </div>
            ))}
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
  highlightColor,
  badgeText,
}: {
  title: string;
  value: string;
  subtext: string;
  icon: React.ReactNode;
  highlightColor: string;
  badgeText?: string;
}) {
  return (
    <div className={`bg-zinc-900 border rounded-3xl p-5 shadow-xl space-y-3 relative overflow-hidden ${highlightColor}`}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-zinc-400">{title}</span>
        <div className="p-2 bg-zinc-950 rounded-xl border border-zinc-800">{icon}</div>
      </div>
      <div>
        <h3 className="text-2xl font-black text-white tracking-tight">{value}</h3>
        <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">{subtext}</p>
      </div>
      {badgeText && (
        <span className="absolute top-3 right-14 text-[9px] font-extrabold px-2 py-0.5 rounded bg-lime-400 text-zinc-950 uppercase">
          {badgeText}
        </span>
      )}
    </div>
  );
}

function SyntheticActionTile({
  icon,
  title,
  metric,
  detail,
}: {
  icon: React.ReactNode;
  title: string;
  metric: string;
  detail: string;
}) {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 space-y-2 hover:border-purple-500/40 transition">
      <div className="flex items-center gap-2.5">
        <div className="p-2 bg-zinc-900 rounded-xl border border-zinc-800">{icon}</div>
        <h4 className="font-bold text-xs text-white">{title}</h4>
      </div>
      <div>
        <p className="text-sm font-extrabold text-lime-400">{metric}</p>
        <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">{detail}</p>
      </div>
    </div>
  );
}
