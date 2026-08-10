import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  BarChart3, Users, ShoppingBag, Activity, Rss, Handshake, ShieldAlert,
  DollarSign, Cpu, ArrowUpRight, ArrowDownRight, RefreshCw, Zap, Award,
  CheckCircle2, Clock, Filter, Eye, Heart, TrendingUp, Sparkles, Infinity,
  Share2, Video, Check, ExternalLink, Download, Search, ChevronDown, UserCheck,
  Sliders, Settings, Save, Percent, Coins, Gift, RotateCcw, Truck, Star,
  Store, ShoppingCart, Tag, Megaphone, MousePointerClick, FileText, Calendar,
  ChevronLeft, ChevronRight, Layers, LayoutGrid
} from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts";
import { toast } from "sonner";
import { wallet } from "@/lib/wallet-store";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Painel Administrativo — Netfits Realtime" },
      { name: "description", content: "Indicadores em tempo real do ecossistema Netfits." },
    ],
  }),
  component: AdminDashboardPage,
});

// Tipos e opções de períodos de tempo acumulados
type PeriodType = "1h" | "today" | "24h" | "week" | "7d" | "month" | "year";

const TIME_PERIODS: { id: PeriodType; label: string; shortLabel: string; factor: number; desc: string }[] = [
  { id: "1h", label: "⏱️ Última Hora", shortLabel: "1 hora", factor: 0.035, desc: "Acumulado nos últimos 60 minutos" },
  { id: "today", label: "📅 No Dia (Hoje)", shortLabel: "Hoje", factor: 0.12, desc: "Acumulado no dia de hoje" },
  { id: "24h", label: "⏳ Últimas 24 Horas", shortLabel: "24h", factor: 0.15, desc: "Acumulado nas últimas 24 horas" },
  { id: "week", label: "🗓️ Esta Semana", shortLabel: "Semana", factor: 0.28, desc: "Acumulado na semana corrente" },
  { id: "7d", label: "📆 Últimos 7 Dias", shortLabel: "7 dias", factor: 0.30, desc: "Acumulado nos últimos 7 dias" },
  { id: "month", label: "📊 No Mês (Agosto)", shortLabel: "Mês", factor: 1.00, desc: "Acumulado no mês de referência" },
  { id: "year", label: "🚀 No Ano (2026)", shortLabel: "Ano", factor: 11.40, desc: "Acumulado no ano de 2026" },
];

type TabType = "overview" | "associados" | "params" | "feed" | "market" | "activities" | "users" | "partners" | "controls";

const TAB_DEFINITIONS: { id: TabType; label: string; iconEmoji: string; icon: any; category: string }[] = [
  { id: "overview", label: "Visão Geral & Executivo", iconEmoji: "📊", icon: BarChart3, category: "Consolidado" },
  { id: "associados", label: "Gestão de Associados", iconEmoji: "👑", icon: Award, category: "Influenciadores" },
  { id: "params", label: "Parâmetros da Operação", iconEmoji: "⚙️", icon: Sliders, category: "Regras Operacionais" },
  { id: "feed", label: "Feed & Conteúdo", iconEmoji: "📰", icon: Rss, category: "Mídias & Anúncios" },
  { id: "market", label: "Marketplace (Shop)", iconEmoji: "🛍️", icon: ShoppingBag, category: "Vendas & Sellers" },
  { id: "activities", label: "Atividades & Sensor", iconEmoji: "⚡", icon: Activity, category: "Engajamento" },
  { id: "users", label: "Base de Usuários", iconEmoji: "👥", icon: Users, category: "Comunidade" },
  { id: "partners", label: "Parceiros & Assessorias", iconEmoji: "🤝", icon: Handshake, category: "Ecossistema" },
  { id: "controls", label: "Controles & Finanças", iconEmoji: "🛡️", icon: Cpu, category: "Governança" },
];

// Mock Realtime Data
const ENGAGEMENT_DATA = [
  { time: "08:00", usuarios: 1200, nfsEmitidos: 24000, vendasShop: 1400 },
  { time: "10:00", usuarios: 2400, nfsEmitidos: 48000, vendasShop: 3200 },
  { time: "12:00", usuarios: 3800, nfsEmitidos: 72000, vendasShop: 5800 },
  { time: "14:00", usuarios: 3100, nfsEmitidos: 62000, vendasShop: 4100 },
  { time: "16:00", usuarios: 4500, nfsEmitidos: 91000, vendasShop: 6900 },
  { time: "18:00", usuarios: 6200, nfsEmitidos: 134000, vendasShop: 9800 },
  { time: "20:00", usuarios: 5800, nfsEmitidos: 118000, vendasShop: 8400 },
];

const CATEGORY_DISTRIBUTION = [
  { name: "Corrida de Rua", value: 45, color: "#84cc16" },
  { name: "Ciclismo", value: 25, color: "#7c3aed" },
  { name: "Musculação", value: 18, color: "#3b82f6" },
  { name: "Outros", value: 12, color: "#e11d48" },
];

type AssociadoAdminItem = {
  id: string;
  name: string;
  handle: string;
  category: string;
  code: string;
  capturedUsers: number;
  retentionRatePct: number;
  gmvBrl: number;
  netfitsRevenueBrl: number;
  commissionPctOfNetfitsRev: number;
  commissionBrl: number;
  payoutStatus: "Pago" | "Pendente" | "Processando";
  syntheticActions: {
    shopPurchases: number;
    postsViewed: number;
    videosWatched: number;
    shares: number;
    activities: number;
  };
};

const ASSOCIADOS_DATABASE: AssociadoAdminItem[] = [
  {
    id: "assoc_all",
    name: "Visão Consolidada (Todos os Associados)",
    handle: "18 Associados Ativos",
    category: "Geral",
    code: "TODOS",
    capturedUsers: 12450,
    retentionRatePct: 86.2,
    gmvBrl: 1840000.0,
    netfitsRevenueBrl: 276000.0,
    commissionPctOfNetfitsRev: 30.0,
    commissionBrl: 82800.0,
    payoutStatus: "Pago",
    syntheticActions: {
      shopPurchases: 3410,
      postsViewed: 128400,
      videosWatched: 49200,
      shares: 23100,
      activities: 84500,
    },
  },
  {
    id: "assoc_01",
    name: "André Gallo",
    handle: "@gallo.influencer",
    category: "Influenciador Master",
    code: "GALLO-NETFITS",
    capturedUsers: 1428,
    retentionRatePct: 87.4,
    gmvBrl: 184920.0,
    netfitsRevenueBrl: 27738.0,
    commissionPctOfNetfitsRev: 30.0,
    commissionBrl: 8321.4,
    payoutStatus: "Pendente",
    syntheticActions: {
      shopPurchases: 342,
      postsViewed: 12840,
      videosWatched: 4920,
      shares: 2310,
      activities: 8450,
    },
  },
  {
    id: "assoc_02",
    name: "Marina Duarte",
    handle: "@marina.fitness",
    category: "Embaixadora Corrida",
    code: "MARINA-RUN",
    capturedUsers: 2850,
    retentionRatePct: 89.1,
    gmvBrl: 380000.0,
    netfitsRevenueBrl: 57000.0,
    commissionPctOfNetfitsRev: 30.0,
    commissionBrl: 17100.0,
    payoutStatus: "Pendente",
    syntheticActions: {
      shopPurchases: 780,
      postsViewed: 29400,
      videosWatched: 11200,
      shares: 5400,
      activities: 19800,
    },
  },
  {
    id: "assoc_03",
    name: "Lucas Silva",
    handle: "@lucas.runner",
    category: "Atleta Elite Trail",
    code: "LUCAS-TRAIL",
    capturedUsers: 1920,
    retentionRatePct: 84.5,
    gmvBrl: 245000.0,
    netfitsRevenueBrl: 36750.0,
    commissionPctOfNetfitsRev: 30.0,
    commissionBrl: 11025.0,
    payoutStatus: "Pago",
    syntheticActions: {
      shopPurchases: 490,
      postsViewed: 18900,
      videosWatched: 7400,
      shares: 3200,
      activities: 14200,
    },
  },
  {
    id: "assoc_04",
    name: "Dra. Isabella Santos",
    handle: "@dra.isabella",
    category: "Especialista Médica",
    code: "DRA-ISABELLA",
    capturedUsers: 1150,
    retentionRatePct: 91.2,
    gmvBrl: 195000.0,
    netfitsRevenueBrl: 29250.0,
    commissionPctOfNetfitsRev: 30.0,
    commissionBrl: 8775.0,
    payoutStatus: "Pago",
    syntheticActions: {
      shopPurchases: 410,
      postsViewed: 15200,
      videosWatched: 9800,
      shares: 2900,
      activities: 6900,
    },
  },
  {
    id: "assoc_05",
    name: "Rafael Souza",
    handle: "@rafa.crossfit",
    category: "Head Coach Fitness",
    code: "RAFA-CROSS",
    capturedUsers: 890,
    retentionRatePct: 82.0,
    gmvBrl: 112000.0,
    netfitsRevenueBrl: 16800.0,
    commissionPctOfNetfitsRev: 30.0,
    commissionBrl: 5040.0,
    payoutStatus: "Pendente",
    syntheticActions: {
      shopPurchases: 220,
      postsViewed: 9100,
      videosWatched: 3900,
      shares: 1600,
      activities: 6200,
    },
  },
];

type SellerMarketplaceItem = {
  id: string;
  name: string;
  category: string;
  totalOrders: number;
  gmvBrl: number;
  takeRatePct: number;
  netfitsRevenueBrl: number;
  averageTicketBrl: number;
  nfsRedemptionRatePct: number;
  nfsBurnedTotal: number;
  fulfillmentSlaDays: number;
  fulfillmentOnTimePct: number;
  npsScore: number;
  topProduct: string;
};

const SELLERS_MARKETPLACE_DATABASE: SellerMarketplaceItem[] = [
  {
    id: "seller_all",
    name: "Visão Geral (Consolidado Marketplace)",
    category: "Todos os Parceiros Credenciados",
    totalOrders: 7440,
    gmvBrl: 1849000.0,
    takeRatePct: 15.0,
    netfitsRevenueBrl: 277350.0,
    averageTicketBrl: 248.5,
    nfsRedemptionRatePct: 42.5,
    nfsBurnedTotal: 3680000,
    fulfillmentSlaDays: 2.8,
    fulfillmentOnTimePct: 98.4,
    npsScore: 92,
    topProduct: "Tênis Asics Novablast 4 & Suplementos",
  },
  {
    id: "seller_centauro",
    name: "Centauro Oficial",
    category: "Calçados, Vestuário & Equipamentos",
    totalOrders: 2740,
    gmvBrl: 680000.0,
    takeRatePct: 15.0,
    netfitsRevenueBrl: 102000.0,
    averageTicketBrl: 248.17,
    nfsRedemptionRatePct: 44.2,
    nfsBurnedTotal: 1420000,
    fulfillmentSlaDays: 2.5,
    fulfillmentOnTimePct: 99.1,
    npsScore: 94,
    topProduct: "Tênis Asics Novablast 4 & Mizuno Wave",
  },
  {
    id: "seller_netshoes",
    name: "Netshoes Brasil",
    category: "Performance & Artigos Esportivos",
    totalOrders: 2180,
    gmvBrl: 540000.0,
    takeRatePct: 15.0,
    netfitsRevenueBrl: 81000.0,
    averageTicketBrl: 247.7,
    nfsRedemptionRatePct: 41.8,
    nfsBurnedTotal: 1080000,
    fulfillmentSlaDays: 2.9,
    fulfillmentOnTimePct: 97.8,
    npsScore: 90,
    topProduct: "Kit Camisetas Dri-FIT & Meias Técnicas",
  },
  {
    id: "seller_decathlon",
    name: "Decathlon",
    category: "Multi-Esportes, Ciclismo & Outdoor",
    totalOrders: 1120,
    gmvBrl: 280000.0,
    takeRatePct: 14.0,
    netfitsRevenueBrl: 39200.0,
    averageTicketBrl: 250.0,
    nfsRedemptionRatePct: 39.5,
    nfsBurnedTotal: 540000,
    fulfillmentSlaDays: 3.1,
    fulfillmentOnTimePct: 97.5,
    npsScore: 89,
    topProduct: "Mochila de Hidratação Kalenji & GPS",
  },
  {
    id: "seller_nike",
    name: "Nike Store Oficial",
    category: "Snkrs, Elite Running & Accessories",
    totalOrders: 820,
    gmvBrl: 245000.0,
    takeRatePct: 16.0,
    netfitsRevenueBrl: 39200.0,
    averageTicketBrl: 298.78,
    nfsRedemptionRatePct: 46.0,
    nfsBurnedTotal: 480000,
    fulfillmentSlaDays: 2.4,
    fulfillmentOnTimePct: 99.4,
    npsScore: 96,
    topProduct: "Nike Pegasus 41 & Vaporfly 3",
  },
  {
    id: "seller_garmin",
    name: "Garmin Brasil",
    category: "Smartwatches, GPS & Telemetria",
    totalOrders: 580,
    gmvBrl: 104000.0,
    takeRatePct: 15.0,
    netfitsRevenueBrl: 15600.0,
    averageTicketBrl: 179.31,
    nfsRedemptionRatePct: 38.0,
    nfsBurnedTotal: 160000,
    fulfillmentSlaDays: 2.2,
    fulfillmentOnTimePct: 99.8,
    npsScore: 97,
    topProduct: "Cinta Cardíaca HRM-Pro & Forerunner 265",
  },
];

const TOP_FEED_CONTENTS = [
  {
    id: "post_01",
    title: "Guia Avançado de Hidratação para Maratonas",
    author: "Smart Fit & Liquidz",
    category: "Nutrição & Performance",
    viewsCount: 28400,
    clicksCount: 4120,
    sharesCount: 3890,
    nfsIssuedTotal: 189000,
    revenueBrl: 42500.0,
  },
  {
    id: "post_02",
    title: "Treino Intervalado HIIT de Alta Densidade",
    author: "Dra. Isabella Santos",
    category: "Fisiologia Esportiva",
    viewsCount: 22100,
    clicksCount: 3450,
    sharesCount: 2980,
    nfsIssuedTotal: 148000,
    revenueBrl: 38000.0,
  },
  {
    id: "post_03",
    title: "Lançamento Exclusivo: Asics Novablast 4",
    author: "Centauro Oficial",
    category: "Anúncio / Equipamentos",
    viewsCount: 19800,
    clicksCount: 5120,
    sharesCount: 2450,
    nfsIssuedTotal: 162000,
    revenueBrl: 68400.0,
  },
  {
    id: "post_04",
    title: "Como Aumentar seu VO2 Max em 6 Semanas",
    author: "Lucas Silva (@lucas.runner)",
    category: "Treinamento Corrida",
    viewsCount: 17400,
    clicksCount: 2890,
    sharesCount: 2100,
    nfsIssuedTotal: 114000,
    revenueBrl: 24500.0,
  },
  {
    id: "post_05",
    title: "Smartwatches Garmin: Análise do Sensor HRM-Pro",
    author: "Garmin Brasil",
    category: "Tecnologia Esportiva",
    viewsCount: 14900,
    clicksCount: 3980,
    sharesCount: 1890,
    nfsIssuedTotal: 129000,
    revenueBrl: 51200.0,
  },
];

function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [isLive, setIsLive] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString());

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminUser || !adminPassword) {
      toast.error("Informe seu e-mail de administrador e sua senha.");
      return;
    }
    setIsAuthenticated(true);
    toast.success("Acesso administrativo executivo concedido!");
  };

  // Filtro Global de Período de Tempo Acumulado
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>("month");
  const currentPeriodObj = TIME_PERIODS.find((p) => p.id === selectedPeriod) || TIME_PERIODS[5];
  const currentTabObj = TAB_DEFINITIONS.find((t) => t.id === activeTab) || TAB_DEFINITIONS[0];
  const pf = currentPeriodObj.factor;

  // Estados de Paginação para Tabelas
  const [feedPage, setFeedPage] = useState(1);
  const [marketPage, setMarketPage] = useState(1);
  const [associadosPage, setAssociadosPage] = useState(1);
  const itemsPerPage = 3;

  // Filtro de Associados
  const [selectedAssociadoId, setSelectedAssociadoId] = useState<string>("assoc_all");
  const selectedAssociado =
    ASSOCIADOS_DATABASE.find((a) => a.id === selectedAssociadoId) || ASSOCIADOS_DATABASE[0];

  // Filtro de Sellers do Marketplace
  const [selectedSellerId, setSelectedSellerId] = useState<string>("seller_all");
  const selectedSeller =
    SELLERS_MARKETPLACE_DATABASE.find((s) => s.id === selectedSellerId) || SELLERS_MARKETPLACE_DATABASE[0];

  // Estado dos Parâmetros da Operação
  const [operationalParams, setOperationalParams] = useState({
    nfsPerPostView: 5,
    nfsPerLike: 5,
    nfsPerSave: 10,
    nfsPerShare: 10,
    nfsPerWorkout: 50,
    nfsPerLoyaltyDeclaration: 20,

    netfitsTakeRatePctFromGmv: 15.0,
    associadoStandardShareOfNetfitsRevenuePct: 30.0,
    associadoMasterShareOfNetfitsRevenuePct: 35.0,
    normalUserReferralSharePct: 10.0,
    normalUserNewReferralBonusNfs: 50,

    cppResgateBrl: 0.02,
    nfsEarnedPerBrlSpent: 0.50,
    nfsEarnedPerBrlSpentDouble: 1.00,
    shopFirstPurchaseBonusNfs: 150,
    pointsValidityMonths: 24,
    targetBreakagePct: 12.0,
  });

  // Métricas do Feed ajustadas pelo fator de período (pf)
  const feedMetrics = {
    totalAds: Math.max(1, Math.round(142 * Math.min(1, pf * 1.5))),
    totalAdvertisers: 28,
    adsPerAdvertiser: 5.07,
    totalAdRevenueBrl: 384500.0 * pf,
    revenuePerAdBrl: 2707.74,
    totalClicks: Math.round(184200 * pf),
    clicksPerPost: 14.34,
    viewsPerPost: 1000.0,
    totalFeedNfsIssued: Math.round(1284000 * pf),
    nfsIssuedForClicks: Math.round(736800 * pf),
    nfsIssuedForViews: Math.round(547200 * pf),
  };

  const handleSaveParams = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("🎉 Parâmetros operacionais salvos com sucesso!");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isLive) {
        setLastUpdated(new Date().toLocaleTimeString());
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isLive]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-center items-center px-4 py-12">
        <div className="w-full max-w-md bg-zinc-900 border border-purple-500/40 rounded-3xl p-8 shadow-2xl space-y-6 text-left animate-in fade-in zoom-in-95">
          <div className="text-center space-y-2">
            <div className="size-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-lime-400 p-0.5 mx-auto shadow-xl mb-3">
              <div className="w-full h-full bg-zinc-950 rounded-[14px] grid place-items-center">
                <ShieldAlert className="size-7 text-lime-400" />
              </div>
            </div>
            <h1 className="text-xl font-black text-white tracking-tight">
              Acesso Restrito — Netfits ADMIN
            </h1>
            <p className="text-xs text-zinc-400">
              Autenticação obrigatória para acesso às métricas executivas e parâmetros da operação.
            </p>
          </div>

          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-300">E-mail Administrativo *</label>
              <input
                type="text"
                value={adminUser}
                onChange={(e) => setAdminUser(e.target.value)}
                placeholder="admin@netfits.com.br"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-300">Senha Master *</label>
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-xs bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 active:scale-98"
            >
              <ShieldAlert className="size-4 text-lime-400" />
              Autenticar Acesso Executivo
            </button>
          </form>

          <div className="bg-zinc-950/80 p-3 rounded-2xl border border-zinc-800 text-[11px] text-zinc-400 text-center">
            <p>🔒 Credenciais de Teste Admin:</p>
            <p className="font-mono text-zinc-300 mt-0.5"><b>admin@netfits.com.br</b> | <b>Admin@2026</b></p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-full overflow-x-hidden bg-zinc-950 text-zinc-100 font-sans pb-12">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 bg-zinc-900 border-b border-zinc-800 px-4 py-3 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-gradient-to-tr from-purple-600 to-lime-400 grid place-items-center font-black text-zinc-950 text-xs">
              <Infinity className="size-5" />
            </div>
            <span className="font-extrabold tracking-tight text-lg text-white">
              Netfits <span className="text-lime-400 text-xs uppercase tracking-widest font-mono">ADMIN</span>
            </span>
          </Link>
          <span className="hidden sm:inline-block text-xs bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded-full border border-zinc-700">
            Painel Executivo v2.0
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800 text-xs">
            <span className={`size-2 rounded-full ${isLive ? "bg-lime-400 animate-pulse" : "bg-zinc-500"}`} />
            <span className="font-mono text-zinc-300">{isLive ? "REALTIME ON" : "PAUSADO"}</span>
            <span className="text-[10px] text-zinc-500">• {lastUpdated}</span>
          </div>

          <button
            onClick={() => {
              setIsLive((v) => !v);
              toast.info(isLive ? "Atualização realtime pausada" : "Realtime reativado!");
            }}
            className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
            title="Alternar modo Realtime"
          >
            <RefreshCw className={`size-4 ${isLive ? "animate-spin" : ""}`} />
          </button>
        </div>
      </header>

      {/* BARRA DE CONTROLES DRILL-DOWN (SUBSTITUINDO OS MENUS POR SELETORES HIERÁRQUICOS) */}
      <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-3.5 sticky top-[57px] z-30 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Seletor Drill-Down 1: Módulo / Seção da Página */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-1">
            <label className="text-xs font-extrabold text-zinc-300 flex items-center gap-1.5 shrink-0">
              <Layers className="size-4 text-purple-400" />
              <span>Seção Executiva:</span>
            </label>

            <div className="relative flex-1 max-w-xs">
              <select
                value={activeTab}
                onChange={(e) => {
                  const nextTab = e.target.value as TabType;
                  setActiveTab(nextTab);
                  const tabObj = TAB_DEFINITIONS.find((t) => t.id === nextTab);
                  toast.info(`Navegando para: ${tabObj?.label || nextTab}`);
                }}
                className="w-full bg-zinc-950 text-white font-extrabold text-xs rounded-xl px-3.5 py-2.5 border border-zinc-700 hover:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 appearance-none cursor-pointer pr-10 shadow-inner"
              >
                {TAB_DEFINITIONS.map((tab) => (
                  <option key={tab.id} value={tab.id} className="bg-zinc-900 text-white font-medium py-1">
                    {tab.iconEmoji} {tab.label} — [{tab.category}]
                  </option>
                ))}
              </select>
              <ChevronDown className="size-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Seletor Drill-Down 2: Período Temporal Acumulado */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-1 md:justify-end">
            <label className="text-xs font-extrabold text-zinc-300 flex items-center gap-1.5 shrink-0">
              <Clock className="size-4 text-lime-400" />
              <span>Período Acumulado:</span>
            </label>

            <div className="relative flex-1 max-w-xs">
              <select
                value={selectedPeriod}
                onChange={(e) => {
                  const nextPeriod = e.target.value as PeriodType;
                  setSelectedPeriod(nextPeriod);
                  const periodObj = TIME_PERIODS.find((p) => p.id === nextPeriod);
                  toast.info(`Período alterado para: ${periodObj?.label}`);
                }}
                className="w-full bg-zinc-950 text-lime-400 font-extrabold text-xs rounded-xl px-3.5 py-2.5 border border-zinc-700 hover:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/50 appearance-none cursor-pointer pr-10 shadow-inner"
              >
                {TIME_PERIODS.map((p) => (
                  <option key={p.id} value={p.id} className="bg-zinc-900 text-white font-medium py-1">
                    {p.label} ({p.desc})
                  </option>
                ))}
              </select>
              <ChevronDown className="size-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Breadcrumb Trail de Navegação Ativa */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono bg-zinc-950 px-3.5 py-2 rounded-xl border border-zinc-800 shrink-0 shadow-inner">
            <span className="text-purple-400 font-bold">{currentTabObj?.iconEmoji} {currentTabObj?.label}</span>
            <span className="text-zinc-600">&rsaquo;</span>
            <span className="text-lime-400 font-bold">{currentPeriodObj.shortLabel}</span>
          </div>

        </div>
      </div>

      {/* Main Body Container */}
      <main className="p-4 sm:p-6 max-w-7xl mx-auto w-full space-y-6 overflow-x-hidden">
        {/* KPI Recommendation Bar com Destaque do Período */}
        <section className="bg-gradient-to-r from-purple-950/80 via-zinc-900 to-zinc-900 border border-purple-500/30 rounded-2xl p-4 shadow-xl flex items-center justify-between flex-wrap gap-4 w-full">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-lime-400/10 border border-lime-400/30 grid place-items-center text-lime-400 font-bold shrink-0">
              <Sparkles className="size-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white flex items-center gap-2 flex-wrap">
                <span>Visualização Drill-Down: {currentTabObj.iconEmoji} {currentTabObj.label}</span>
                <span className="text-xs bg-purple-900 text-purple-200 px-2 py-0.5 rounded-full border border-purple-700 font-mono">
                  {currentPeriodObj.label}
                </span>
              </h2>
              <p className="text-xs text-zinc-400 max-w-2xl">
                Seletor drill-down ativo para a seção <b>{currentTabObj.label}</b> no período acumulado <b>{currentPeriodObj.desc}</b>.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="text-[10px] bg-purple-900/60 text-purple-200 border border-purple-700/50 font-mono px-2.5 py-1 rounded-md">
              Fator: {pf.toFixed(3)}x
            </span>
            <span className="text-[10px] bg-lime-400/20 text-lime-300 border border-lime-400/30 font-mono px-2.5 py-1 rounded-md">
              Janela: {currentPeriodObj.shortLabel}
            </span>
          </div>
        </section>

        {/* Tab 1: Visão Geral */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              <KpiCard
                title="Usuários Ativos (DAU/MAU)"
                value={Math.round(48290 * Math.min(1, pf * 1.2)).toLocaleString("pt-BR")}
                change="+14.2%"
                positive={true}
                icon={Users}
                subtext="Atletas em atividade frequente"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="NFS Emitidos no Período"
                value={Math.round(1482000 * pf).toLocaleString("pt-BR")}
                change="+8.9%"
                positive={true}
                icon={Zap}
                subtext="Pontos distribuídos por hábitos"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="GMV Marketplace (Shop)"
                value={`R$ ${(184900 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                change="+22.5%"
                positive={true}
                icon={ShoppingBag}
                subtext="Resgates via nfs: 42%"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Captação via Associados"
                value={`${Math.round(14820 * pf).toLocaleString("pt-BR")} novos`}
                change="+31.0%"
                positive={true}
                icon={Award}
                subtext="Associados VIP ativos"
                periodBadge={currentPeriodObj.shortLabel}
              />
            </div>
          </div>
        )}

        {/* Tab: Feed & Conteúdo */}
        {activeTab === "feed" && (
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400">
                  Planejamento Estratégico & Mídia ({currentPeriodObj.shortLabel})
                </span>
                <h3 className="text-xl font-extrabold text-white">
                  Indicadores de Feed, Anúncios & Emissão de Pontos
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Valores acumulados para a janela: <b>{currentPeriodObj.desc}</b>.
                </p>
              </div>
              <button
                onClick={() => toast.success(`Relatório do Feed (${currentPeriodObj.shortLabel}) exportado!`)}
                className="px-4 py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 transition self-start md:self-auto"
              >
                <Download className="size-4" />
                Exportar Relatório
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              <KpiCard
                title="Quantidade de Anúncios"
                value={feedMetrics.totalAds.toString()}
                change="+18 novos"
                positive={true}
                icon={Megaphone}
                subtext="Anúncios ativos no feed"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Quantidade de Anunciantes"
                value={feedMetrics.totalAdvertisers.toString()}
                change="+4 este mês"
                positive={true}
                icon={BuildingIcon}
                subtext="Marcas patrocinadoras"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Anúncios por Anunciante"
                value={feedMetrics.adsPerAdvertiser.toFixed(2)}
                change="Média 5.0"
                positive={true}
                icon={BarChart3}
                subtext="Peças por marca"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Receita Total de Anúncios"
                value={`R$ ${feedMetrics.totalAdRevenueBrl.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                change="+24.5%"
                positive={true}
                icon={DollarSign}
                subtext="Faturamento bruto com mídias"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Receita por Anúncio"
                value={`R$ ${feedMetrics.revenuePerAdBrl.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                change="+6.2%"
                positive={true}
                icon={Coins}
                subtext="Ticket médio por peça"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Quantidade Total de Clicks"
                value={feedMetrics.totalClicks.toLocaleString("pt-BR")}
                change="+31.0%"
                positive={true}
                icon={MousePointerClick}
                subtext="Cliques acumulados em links"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Clicks por Postagem"
                value={`${feedMetrics.clicksPerPost.toFixed(2)} clicks`}
                change="+12.4%"
                positive={true}
                icon={TrendingUp}
                subtext="Taxa média de engajamento"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Views por Postagem"
                value={`${feedMetrics.viewsPerPost.toLocaleString("pt-BR")} views`}
                change="+15.0%"
                positive={true}
                icon={Eye}
                subtext="Visualizações médias por post"
                periodBadge={currentPeriodObj.shortLabel}
              />
            </div>

            <div className="bg-gradient-to-r from-purple-950 via-zinc-900 to-zinc-900 border border-purple-500/30 rounded-3xl p-6 shadow-xl space-y-4 w-full">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 flex-wrap gap-2">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400">
                    Balanço Monetário do Feed ({currentPeriodObj.shortLabel})
                  </span>
                  <h4 className="text-base font-bold text-white">
                    Distribuição de Netfits Emitidos no Período
                  </h4>
                </div>
                <span className="text-xs font-mono font-bold text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20">
                  Total: {feedMetrics.totalFeedNfsIssued.toLocaleString("pt-BR")} nfs
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1">
                  <span className="text-xs text-zinc-400 font-semibold">Total NFS Emitidos ({currentPeriodObj.shortLabel})</span>
                  <p className="text-2xl font-black text-white">
                    {feedMetrics.totalFeedNfsIssued.toLocaleString("pt-BR")} nfs
                  </p>
                  <span className="text-[10px] text-purple-400 font-semibold">Economia total no período</span>
                </div>

                <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1">
                  <span className="text-xs text-zinc-400 font-semibold">NFS Emitidos para Clicks</span>
                  <p className="text-2xl font-black text-lime-400">
                    {feedMetrics.nfsIssuedForClicks.toLocaleString("pt-BR")} nfs
                  </p>
                  <span className="text-[10px] text-lime-400 font-semibold">
                    {((feedMetrics.nfsIssuedForClicks / Math.max(1, feedMetrics.totalFeedNfsIssued)) * 100).toFixed(1)}% do total
                  </span>
                </div>

                <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1">
                  <span className="text-xs text-zinc-400 font-semibold">NFS Emitidos para Views</span>
                  <p className="text-2xl font-black text-purple-400">
                    {feedMetrics.nfsIssuedForViews.toLocaleString("pt-BR")} nfs
                  </p>
                  <span className="text-[10px] text-purple-300 font-semibold">
                    {((feedMetrics.nfsIssuedForViews / Math.max(1, feedMetrics.totalFeedNfsIssued)) * 100).toFixed(1)}% do total
                  </span>
                </div>
              </div>
            </div>

            {/* Tabela Paginada de Conteúdos */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 w-full">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h4 className="text-base font-bold text-white">Ranking de Conteúdos ({currentPeriodObj.shortLabel})</h4>
                  <p className="text-xs text-zinc-400">Tabela com paginação adaptada para ajuste lateral perfeito</p>
                </div>
                <span className="text-xs text-lime-400 font-bold bg-lime-400/10 px-3 py-1 rounded-xl border border-lime-400/20">
                  Página {feedPage} de {Math.ceil(TOP_FEED_CONTENTS.length / itemsPerPage)}
                </span>
              </div>

              <div className="overflow-x-auto w-full max-w-full">
                <table className="w-full text-left text-xs text-zinc-300 min-w-[640px]">
                  <thead className="bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800">
                    <tr>
                      <th className="py-3 px-4">Título do Conteúdo</th>
                      <th className="py-3 px-4">Autor / Anunciante</th>
                      <th className="py-3 px-4 text-right">Views ({currentPeriodObj.shortLabel})</th>
                      <th className="py-3 px-4 text-right">Clicks</th>
                      <th className="py-3 px-4 text-right">Compartilhamentos</th>
                      <th className="py-3 px-4 text-right">NFS Emitidos</th>
                      <th className="py-3 px-4 text-right">Receita (R$)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800 font-medium">
                    {TOP_FEED_CONTENTS.slice((feedPage - 1) * itemsPerPage, feedPage * itemsPerPage).map((c, idx) => (
                      <tr key={c.id} className="hover:bg-zinc-800/40 transition">
                        <td className="py-3 px-4">
                          <p className="font-bold text-white">#{(feedPage - 1) * itemsPerPage + idx + 1} {c.title}</p>
                          <p className="text-[10px] text-zinc-400">{c.category}</p>
                        </td>
                        <td className="py-3 px-4 font-bold text-zinc-300">{c.author}</td>
                        <td className="py-3 px-4 text-right font-bold text-white">
                          {Math.round(c.viewsCount * pf).toLocaleString("pt-BR")}
                        </td>
                        <td className="py-3 px-4 text-right font-bold text-lime-400">
                          {Math.round(c.clicksCount * pf).toLocaleString("pt-BR")}
                        </td>
                        <td className="py-3 px-4 text-right text-purple-300 font-bold">
                          {Math.round(c.sharesCount * pf).toLocaleString("pt-BR")}
                        </td>
                        <td className="py-3 px-4 text-right text-zinc-300 font-mono">
                          {Math.round(c.nfsIssuedTotal * pf).toLocaleString("pt-BR")} nfs
                        </td>
                        <td className="py-3 px-4 text-right font-bold text-lime-400">
                          R$ {(c.revenueBrl * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <PaginationControls
                currentPage={feedPage}
                totalPages={Math.ceil(TOP_FEED_CONTENTS.length / itemsPerPage)}
                onPageChange={setFeedPage}
                totalItems={TOP_FEED_CONTENTS.length}
                itemsPerPage={itemsPerPage}
              />
            </div>
          </div>
        )}

        {/* Tab: Marketplace */}
        {activeTab === "market" && (
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400">
                  Plano Estratégico de Marketplace ({currentPeriodObj.shortLabel})
                </span>
                <h3 className="text-xl font-extrabold text-white">
                  Indicadores de Acompanhamento do Shopping
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Valores acumulados para o período: <b>{currentPeriodObj.desc}</b>.
                </p>
              </div>

              <div className="flex items-center gap-2 bg-zinc-950 p-2 rounded-2xl border border-zinc-800">
                <Store className="size-4 text-lime-400 ml-2" />
                <select
                  value={selectedSellerId}
                  onChange={(e) => setSelectedSellerId(e.target.value)}
                  className="bg-transparent text-xs font-bold text-white focus:outline-none pr-4 cursor-pointer"
                >
                  {SELLERS_MARKETPLACE_DATABASE.map((s) => (
                    <option key={s.id} value={s.id} className="bg-zinc-900 text-white">
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              <KpiCard
                title="GMV Bruto das Vendas"
                value={`R$ ${(selectedSeller.gmvBrl * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                change="+22.4%"
                positive={true}
                icon={ShoppingBag}
                subtext="Volume negociado"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Receita Netfits (Take-Rate)"
                value={`R$ ${(selectedSeller.netfitsRevenueBrl * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                change="+22.4%"
                positive={true}
                icon={Coins}
                subtext={`Comissão: ${selectedSeller.takeRatePct}%`}
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Ticket Médio por Pedido"
                value={`R$ ${selectedSeller.averageTicketBrl.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                change="+5.8%"
                positive={true}
                icon={Tag}
                subtext="Média por carrinho"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Taxa de Resgate com NFS"
                value={`${selectedSeller.nfsRedemptionRatePct}%`}
                change="+4.2%"
                positive={true}
                icon={Gift}
                subtext="Vendas com nfs"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Volume de NFS Queimados"
                value={`${Math.round(selectedSeller.nfsBurnedTotal * pf).toLocaleString("pt-BR")} nfs`}
                change="+18.5%"
                positive={true}
                icon={Zap}
                subtext="Pontos resgatados"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Fulfillment SLA & Prazo"
                value={`${selectedSeller.fulfillmentSlaDays} dias`}
                change="98.4% no prazo"
                positive={true}
                icon={Truck}
                subtext={`Entrega no prazo: ${selectedSeller.fulfillmentOnTimePct}%`}
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="NPS / Satisfação Atleta"
                value={`${selectedSeller.npsScore} / 100`}
                change="Excelência"
                positive={true}
                icon={Star}
                subtext="Avaliação pós-entrega"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Pedidos Concluídos"
                value={Math.round(selectedSeller.totalOrders * pf).toLocaleString("pt-BR")}
                change="+14.2%"
                positive={true}
                icon={ShoppingCart}
                subtext={`Produto top: ${selectedSeller.topProduct.split("&")[0]}`}
                periodBadge={currentPeriodObj.shortLabel}
              />
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 w-full">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h4 className="text-base font-bold text-white">Desempenho Estratégico Comparativo por Seller</h4>
                  <p className="text-xs text-zinc-400">Tabela de fulfillment com paginação ajustada</p>
                </div>
                <span className="text-xs text-lime-400 font-bold bg-lime-400/10 px-3 py-1 rounded-xl border border-lime-400/20">
                  Página {marketPage} de {Math.ceil(SELLERS_MARKETPLACE_DATABASE.filter((s) => s.id !== "seller_all").length / itemsPerPage)}
                </span>
              </div>

              <div className="overflow-x-auto w-full max-w-full">
                <table className="w-full text-left text-xs text-zinc-300 min-w-[640px]">
                  <thead className="bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800">
                    <tr>
                      <th className="py-3 px-4">Seller Credenciado</th>
                      <th className="py-3 px-4 text-right">Pedidos</th>
                      <th className="py-3 px-4 text-right">GMV Bruto (R$)</th>
                      <th className="py-3 px-4 text-right">Take-Rate Netfits</th>
                      <th className="py-3 px-4 text-right">Ticket Médio</th>
                      <th className="py-3 px-4 text-right">Resgate NFS %</th>
                      <th className="py-3 px-4 text-center">Fulfillment SLA</th>
                      <th className="py-3 px-4 text-center">NPS</th>
                      <th className="py-3 px-4 text-center">Ação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800 font-medium">
                    {SELLERS_MARKETPLACE_DATABASE.filter((s) => s.id !== "seller_all")
                      .slice((marketPage - 1) * itemsPerPage, marketPage * itemsPerPage)
                      .map((seller) => (
                        <tr key={seller.id} className="hover:bg-zinc-800/40 transition">
                          <td className="py-3 px-4">
                            <div>
                              <p className="font-bold text-white">{seller.name}</p>
                              <p className="text-[10px] text-zinc-400">{seller.category}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-right font-bold text-white">
                            {Math.round(seller.totalOrders * pf).toLocaleString("pt-BR")}
                          </td>
                          <td className="py-3 px-4 text-right font-bold text-white">
                            R$ {(seller.gmvBrl * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                          </td>
                          <td className="py-3 px-4 text-right text-purple-400 font-bold">
                            R$ {(seller.netfitsRevenueBrl * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })} ({seller.takeRatePct}%)
                          </td>
                          <td className="py-3 px-4 text-right text-zinc-300">
                            R$ {seller.averageTicketBrl.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                          </td>
                          <td className="py-3 px-4 text-right font-bold text-lime-400">
                            {seller.nfsRedemptionRatePct}%
                          </td>
                          <td className="py-3 px-4 text-center text-zinc-300">
                            <span className="font-mono">{seller.fulfillmentSlaDays}d</span> ({seller.fulfillmentOnTimePct}%)
                          </td>
                          <td className="py-3 px-4 text-center">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-lime-400/20 text-lime-400 border border-lime-400/30">
                              {seller.npsScore} / 100
                            </span>
                          </td>
                          <td className="py-3 px-4 text-center">
                            <button
                              onClick={() => {
                                setSelectedSellerId(seller.id);
                                toast.success(`Filtrado o seller ${seller.name}`);
                              }}
                              className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-[11px] font-bold text-zinc-200 border border-zinc-700"
                            >
                              Filtrar
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              <PaginationControls
                currentPage={marketPage}
                totalPages={Math.ceil(SELLERS_MARKETPLACE_DATABASE.filter((s) => s.id !== "seller_all").length / itemsPerPage)}
                onPageChange={setMarketPage}
                totalItems={SELLERS_MARKETPLACE_DATABASE.filter((s) => s.id !== "seller_all").length}
                itemsPerPage={itemsPerPage}
              />
            </div>
          </div>
        )}

        {/* Tab: Gestão de Associados */}
        {activeTab === "associados" && (
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400">
                  Desempenho de Influenciadores ({currentPeriodObj.shortLabel})
                </span>
                <h3 className="text-xl font-extrabold text-white">
                  Módulo de Acompanhamento das Carteiras de Associados
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Valores acumulados referentes ao período: <b>{currentPeriodObj.desc}</b>.
                </p>
              </div>

              <div className="flex items-center gap-2 bg-zinc-950 p-2 rounded-2xl border border-zinc-800">
                <Filter className="size-4 text-purple-400 ml-2" />
                <select
                  value={selectedAssociadoId}
                  onChange={(e) => setSelectedAssociadoId(e.target.value)}
                  className="bg-transparent text-xs font-bold text-white focus:outline-none pr-4 cursor-pointer"
                >
                  {ASSOCIADOS_DATABASE.map((a) => (
                    <option key={a.id} value={a.id} className="bg-zinc-900 text-white">
                      {a.name} ({a.handle})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              <KpiCard
                title="Tamanho da Carteira"
                value={Math.round(selectedAssociado.capturedUsers * Math.min(1, pf * 1.1)).toLocaleString("pt-BR")}
                change="+12.4%"
                positive={true}
                icon={Users}
                subtext={`Retenção ativa: ${selectedAssociado.retentionRatePct}%`}
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="GMV do Shopping (R$)"
                value={`R$ ${(selectedAssociado.gmvBrl * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                change="+18.2%"
                positive={true}
                icon={ShoppingBag}
                subtext="Vendas na carteira"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Receita Netfits (15% GMV)"
                value={`R$ ${(selectedAssociado.netfitsRevenueBrl * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                change="+18.2%"
                positive={true}
                icon={Coins}
                subtext="Comissão bruta"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Comissão do Associado (30%)"
                value={`R$ ${(selectedAssociado.commissionBrl * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                change="+18.2%"
                positive={true}
                icon={DollarSign}
                subtext="30% da receita Netfits"
                highlightColor="border-lime-400 ring-1 ring-lime-400/20 bg-lime-400/5"
                periodBadge={currentPeriodObj.shortLabel}
              />
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 w-full">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h4 className="text-base font-bold text-white">Desempenho Comparativo dos Associados</h4>
                  <p className="text-xs text-zinc-400">Tabela de associados com paginação para ajuste lateral</p>
                </div>
                <span className="text-xs text-lime-400 font-bold bg-lime-400/10 px-3 py-1 rounded-xl border border-lime-400/20">
                  Página {associadosPage} de {Math.ceil(ASSOCIADOS_DATABASE.filter((a) => a.id !== "assoc_all").length / itemsPerPage)}
                </span>
              </div>

              <div className="overflow-x-auto w-full max-w-full">
                <table className="w-full text-left text-xs text-zinc-300 min-w-[640px]">
                  <thead className="bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800">
                    <tr>
                      <th className="py-3 px-4">Associado / Influenciador</th>
                      <th className="py-3 px-4">Código Unique</th>
                      <th className="py-3 px-4 text-right">Carteira (Atletas)</th>
                      <th className="py-3 px-4 text-right">GMV Gerado (R$)</th>
                      <th className="py-3 px-4 text-right">Receita Netfits (15%)</th>
                      <th className="py-3 px-4 text-right">Comissão R$ (30%)</th>
                      <th className="py-3 px-4 text-center">Status</th>
                      <th className="py-3 px-4 text-center">Ação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800 font-medium">
                    {ASSOCIADOS_DATABASE.filter((a) => a.id !== "assoc_all")
                      .slice((associadosPage - 1) * itemsPerPage, associadosPage * itemsPerPage)
                      .map((assoc) => (
                        <tr key={assoc.id} className="hover:bg-zinc-800/40 transition">
                          <td className="py-3 px-4">
                            <div>
                              <p className="font-bold text-white">{assoc.name}</p>
                              <p className="text-[10px] text-purple-400">{assoc.handle}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4 font-mono text-zinc-400">{assoc.code}</td>
                          <td className="py-3 px-4 text-right font-bold text-white">
                            {Math.round(assoc.capturedUsers * Math.min(1, pf * 1.1)).toLocaleString("pt-BR")}
                          </td>
                          <td className="py-3 px-4 text-right font-bold text-white">
                            R$ {(assoc.gmvBrl * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                          </td>
                          <td className="py-3 px-4 text-right font-bold text-purple-300">
                            R$ {(assoc.netfitsRevenueBrl * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                          </td>
                          <td className="py-3 px-4 text-right font-bold text-lime-400">
                            R$ {(assoc.commissionBrl * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                          </td>
                          <td className="py-3 px-4 text-center">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                                assoc.payoutStatus === "Pago"
                                  ? "bg-lime-400/20 text-lime-400 border border-lime-400/30"
                                  : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                              }`}
                            >
                              {assoc.payoutStatus}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-center">
                            <button
                              onClick={() => {
                                setSelectedAssociadoId(assoc.id);
                                toast.success(`Filtrada carteira de ${assoc.name}`);
                              }}
                              className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-[11px] font-bold text-zinc-200 border border-zinc-700"
                            >
                              Filtrar
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              <PaginationControls
                currentPage={associadosPage}
                totalPages={Math.ceil(ASSOCIADOS_DATABASE.filter((a) => a.id !== "assoc_all").length / itemsPerPage)}
                onPageChange={setAssociadosPage}
                totalItems={ASSOCIADOS_DATABASE.filter((a) => a.id !== "assoc_all").length}
                itemsPerPage={itemsPerPage}
              />
            </div>
          </div>
        )}

        {/* Tab: Parâmetros da Operação */}
        {activeTab === "params" && (
          <form onSubmit={handleSaveParams} className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400">
                  Configuração Global da Operação
                </span>
                <h3 className="text-xl font-extrabold text-white">
                  Parâmetros Operacionais & Economia do Programa de Pontos
                </h3>
              </div>
              <button
                type="submit"
                className="px-5 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 self-start md:self-auto"
              >
                <Save className="size-4" />
                Salvar Parâmetros
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4">
                <h4 className="font-bold text-sm text-white">Atribuição de Pontos & Comissões</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <ParamInput
                    label="Take-Rate Netfits no Shopping"
                    unit="% do GMV"
                    value={operationalParams.netfitsTakeRatePctFromGmv}
                    onChange={(v) => setOperationalParams((p) => ({ ...p, netfitsTakeRatePctFromGmv: Number(v) }))}
                  />
                  <ParamInput
                    label="Repasse Ao Associado Padrão"
                    unit="% da Receita Netfits"
                    value={operationalParams.associadoStandardShareOfNetfitsRevenuePct}
                    onChange={(v) => setOperationalParams((p) => ({ ...p, associadoStandardShareOfNetfitsRevenuePct: Number(v) }))}
                  />
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4">
                <h4 className="font-bold text-sm text-white">Economia do Programa de Pontos</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <ParamInput
                    label="CPP de Resgate em R$"
                    unit="R$ / nfs"
                    value={operationalParams.cppResgateBrl}
                    onChange={(v) => setOperationalParams((p) => ({ ...p, cppResgateBrl: Number(v) }))}
                  />
                  <ParamInput
                    label="Netfits Ganhos por R$ 1,00"
                    unit="nfs / R$"
                    value={operationalParams.nfsEarnedPerBrlSpent}
                    onChange={(v) => setOperationalParams((p) => ({ ...p, nfsEarnedPerBrlSpent: Number(v) }))}
                  />
                </div>
              </div>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}

function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (p: number) => void;
  totalItems: number;
  itemsPerPage: number;
}) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center justify-between border-t border-zinc-800 pt-3 text-xs text-zinc-400 font-medium flex-wrap gap-2">
      <span>
        Exibindo {Math.min(totalItems, (currentPage - 1) * itemsPerPage + 1)}–
        {Math.min(totalItems, currentPage * itemsPerPage)} de {totalItems} registros
      </span>
      <div className="flex items-center gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-3 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed border border-zinc-700 transition flex items-center gap-1"
        >
          <ChevronLeft className="size-3.5" /> Anterior
        </button>
        <span className="font-mono text-white font-bold px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800">
          {currentPage} / {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="px-3 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed border border-zinc-700 transition flex items-center gap-1"
        >
          Próximo <ChevronRight className="size-3.5" />
        </button>
      </div>
    </div>
  );
}

function BuildingIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function ParamInput({
  label,
  unit,
  value,
  onChange,
}: {
  label: string;
  unit: string;
  value: number;
  onChange: (v: string) => void;
}) {
  return (
    <div className="bg-zinc-950 p-3 rounded-2xl border border-zinc-800 space-y-1">
      <label className="text-[11px] font-semibold text-zinc-300 block truncate">{label}</label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          step="any"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-1.5 text-xs text-white font-mono font-bold focus:outline-none focus:ring-1 focus:ring-purple-600"
        />
        <span className="text-[10px] text-zinc-500 font-mono shrink-0">{unit}</span>
      </div>
    </div>
  );
}

function KpiCard({
  title,
  value,
  change,
  positive,
  icon: Icon,
  subtext,
  highlightColor,
  periodBadge,
}: {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: any;
  subtext: string;
  highlightColor?: string;
  periodBadge?: string;
}) {
  return (
    <div className={`bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-xl relative overflow-hidden group hover:border-purple-500/50 transition-colors ${highlightColor || ""}`}>
      <div className="flex items-center justify-between mb-3 gap-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-bold text-zinc-300 leading-snug">{title}</span>
          {periodBadge && (
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-zinc-800 text-purple-300 border border-zinc-700 font-mono shrink-0">
              {periodBadge}
            </span>
          )}
        </div>
        <div className="size-8 rounded-lg bg-zinc-800 grid place-items-center text-lime-400 shrink-0">
          <Icon className="size-4" />
        </div>
      </div>
      <div className="flex items-baseline gap-2 mb-1 flex-wrap">
        <span className="text-2xl font-extrabold text-white tracking-tight">{value}</span>
        <span className={`text-xs font-bold flex items-center ${positive ? "text-lime-400" : "text-rose-400"}`}>
          {positive ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
          {change}
        </span>
      </div>
      <p className="text-[11px] text-zinc-400 leading-tight">{subtext}</p>
    </div>
  );
}
