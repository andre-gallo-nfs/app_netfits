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
import { operationalParamsStore, useOperationalParams } from "@/lib/operational-params-store";

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

type TabType = "overview" | "associados" | "params" | "feed" | "market" | "activities" | "users" | "partners" | "controls" | "results";

const TAB_DEFINITIONS: { id: TabType; label: string; iconEmoji: string; icon: any; category: string }[] = [
  { id: "overview", label: "Visão Geral & Executivo", iconEmoji: "📊", icon: BarChart3, category: "Consolidado" },
  { id: "associados", label: "Gestão de Associados", iconEmoji: "👑", icon: Award, category: "Influenciadores" },
  { id: "params", label: "Parâmetros da Operação", iconEmoji: "⚙️", icon: Sliders, category: "Regras Operacionais" },
  { id: "feed", label: "Feed & Conteúdo", iconEmoji: "📰", icon: Rss, category: "Mídias & Anúncios" },
  { id: "market", label: "Marketplace (Shop)", iconEmoji: "🛍️", icon: ShoppingBag, category: "Vendas & Sellers" },
  { id: "activities", label: "Atividades & Sensor", iconEmoji: "⚡", icon: Activity, category: "Engajamento" },
  { id: "users", label: "Base de Usuários", iconEmoji: "👥", icon: Users, category: "Comunidade" },
  { id: "partners", label: "Parceiros & Assessorias", iconEmoji: "🤝", icon: Handshake, category: "Ecossistema" },
  { id: "controls", label: "Controles & OPEX TI", iconEmoji: "🛡️", icon: Cpu, category: "Governança" },
  { id: "results", label: "Resultados & DRE", iconEmoji: "📈", icon: DollarSign, category: "Demonstrações Financeiras" },
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
  isVerifiedSpecialist?: boolean;
  specialistBadgeLabel?: string;
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
    isVerifiedSpecialist: true,
    specialistBadgeLabel: "Especialista Educação Física",
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
    isVerifiedSpecialist: false,
    specialistBadgeLabel: "Embaixadora Corrida",
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
    isVerifiedSpecialist: false,
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
    isVerifiedSpecialist: true,
    specialistBadgeLabel: "Dra. Nutrologia Esportiva",
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
    isVerifiedSpecialist: true,
    specialistBadgeLabel: "Head Coach Fisiologia",
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

interface PartnerAdminItem {
  id: string;
  name: string;
  category: string;
  iconEmoji: string;
  status: "Ativo" | "Em Integração" | "Pendente";
  contractTier: "Master Partner" | "Seller Credenciado" | "Assessoria Oficial" | "Clínica Especialista";
  gmvBrl: number;
  netfitsRevenueBrl: number;
  activeCampaigns: number;
  npsScore: number;
  conversionRatePct: number;
  exclusiveCoupon: string;
}

const PARTNERS_DATABASE: PartnerAdminItem[] = [
  {
    id: "partner_all",
    name: "Todos os Parceiros & Assessorias (Consolidado)",
    category: "Visão Consolidada da Rede (28 Marcas)",
    iconEmoji: "🌐",
    status: "Ativo",
    contractTier: "Master Partner",
    gmvBrl: 1849000.0,
    netfitsRevenueBrl: 277350.0,
    activeCampaigns: 42,
    npsScore: 94,
    conversionRatePct: 4.04,
    exclusiveCoupon: "NETFITS_NETWORK_30",
  },
  {
    id: "partner_centauro",
    name: "Centauro Esportes",
    category: "Varejo & Marketplace Esportivo",
    iconEmoji: "👟",
    status: "Ativo",
    contractTier: "Master Partner",
    gmvBrl: 540000.0,
    netfitsRevenueBrl: 81000.0,
    activeCampaigns: 12,
    npsScore: 96,
    conversionRatePct: 4.80,
    exclusiveCoupon: "CENTAURO_NFS15",
  },
  {
    id: "partner_decathlon",
    name: "Decathlon Brasil",
    category: "Equipamentos, Ciclismo & Outdoor",
    iconEmoji: "🚴",
    status: "Ativo",
    contractTier: "Master Partner",
    gmvBrl: 420000.0,
    netfitsRevenueBrl: 63000.0,
    activeCampaigns: 9,
    npsScore: 95,
    conversionRatePct: 4.20,
    exclusiveCoupon: "DECATHLON_NETFITS10",
  },
  {
    id: "partner_nike",
    name: "Nike Store Oficial",
    category: "Calçados & Vestuário de Alta Performance",
    iconEmoji: "🏃",
    status: "Ativo",
    contractTier: "Master Partner",
    gmvBrl: 380000.0,
    netfitsRevenueBrl: 57000.0,
    activeCampaigns: 6,
    npsScore: 98,
    conversionRatePct: 5.10,
    exclusiveCoupon: "NIKE_PROMO_NFS20",
  },
  {
    id: "partner_garmin",
    name: "Garmin Brasil",
    category: "Wearables, GPS & Telemetria",
    iconEmoji: "⌚",
    status: "Ativo",
    contractTier: "Master Partner",
    gmvBrl: 210000.0,
    netfitsRevenueBrl: 31500.0,
    activeCampaigns: 4,
    npsScore: 97,
    conversionRatePct: 3.90,
    exclusiveCoupon: "GARMIN_CLUB_NFS",
  },
  {
    id: "partner_smartfit",
    name: "Smart Fit Academias",
    category: "Rede de Academias & Fitness",
    iconEmoji: "🏋️",
    status: "Ativo",
    contractTier: "Seller Credenciado",
    gmvBrl: 145000.0,
    netfitsRevenueBrl: 21750.0,
    activeCampaigns: 5,
    npsScore: 92,
    conversionRatePct: 3.60,
    exclusiveCoupon: "SMARTFIT_NETFITS_VIP",
  },
  {
    id: "partner_liquidz",
    name: "Liquidz Hydration",
    category: "Suplementação & Hidratação",
    iconEmoji: "🥤",
    status: "Ativo",
    contractTier: "Seller Credenciado",
    gmvBrl: 84000.0,
    netfitsRevenueBrl: 12600.0,
    activeCampaigns: 3,
    npsScore: 94,
    conversionRatePct: 4.50,
    exclusiveCoupon: "LIQUIDZ_HYDRATE15",
  },
  {
    id: "partner_fibios",
    name: "Clínica Fibios",
    category: "Medicina Esportiva & Nutrologia",
    iconEmoji: "🩺",
    status: "Ativo",
    contractTier: "Clínica Especialista",
    gmvBrl: 42000.0,
    netfitsRevenueBrl: 6300.0,
    activeCampaigns: 2,
    npsScore: 99,
    conversionRatePct: 6.20,
    exclusiveCoupon: "FIBIOS_SAUDE_PURPLE",
  },
  {
    id: "partner_spotstudio",
    name: "Spot Studio Recovery",
    category: "Recovery & Crioterapia",
    iconEmoji: "🧊",
    status: "Ativo",
    contractTier: "Clínica Especialista",
    gmvBrl: 28000.0,
    netfitsRevenueBrl: 4200.0,
    activeCampaigns: 1,
    npsScore: 96,
    conversionRatePct: 5.50,
    exclusiveCoupon: "RECOVERY_SPOT_NFS",
  },
  {
    id: "partner_bioritmo",
    name: "Bio Ritmo Assessorias",
    category: "Assessoria Esportiva & Maratona",
    iconEmoji: "🚩",
    status: "Ativo",
    contractTier: "Assessoria Oficial",
    gmvBrl: 56000.0,
    netfitsRevenueBrl: 8400.0,
    activeCampaigns: 3,
    npsScore: 93,
    conversionRatePct: 4.10,
    exclusiveCoupon: "BIORITMO_RUN50",
  },
  {
    id: "partner_mpr",
    name: "MPR Run Assessorias",
    category: "Treinamento Personalizado de Corrida",
    iconEmoji: "🏃‍♂️",
    status: "Ativo",
    contractTier: "Assessoria Oficial",
    gmvBrl: 49000.0,
    netfitsRevenueBrl: 7350.0,
    activeCampaigns: 2,
    npsScore: 95,
    conversionRatePct: 4.40,
    exclusiveCoupon: "MPRRUN_NETFITS2026",
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
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [adminUser, setAdminUser] = useState("admin@netfits.com.br");
  const [adminPassword, setAdminPassword] = useState("Admin@2026");

  const [activeTab, setActiveTab] = useState<TabType>("params");
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

  // Lista editável de Associados (para alteração do Selo Roxo em tempo real)
  const [associadosList, setAssociadosList] = useState<AssociadoAdminItem[]>(ASSOCIADOS_DATABASE);

  const toggleSpecialistBadge = (id: string) => {
    setAssociadosList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextState = !item.isVerifiedSpecialist;
          toast.success(
            nextState
              ? `🟣 Selo Roxo de Verificado (Especialista Credenciado) ATIVADO para ${item.name}!`
              : `⚪ Selo Roxo de Verificado DESATIVADO para ${item.name}.`
          );
          return { ...item, isVerifiedSpecialist: nextState };
        }
        return item;
      })
    );
  };

  // Filtro de Associados
  const [selectedAssociadoId, setSelectedAssociadoId] = useState<string>("assoc_all");
  const selectedAssociado =
    associadosList.find((a) => a.id === selectedAssociadoId) || associadosList[0];

  // Filtro de Sellers do Marketplace
  const [selectedSellerId, setSelectedSellerId] = useState<string>("seller_all");
  const selectedSeller =
    SELLERS_MARKETPLACE_DATABASE.find((s) => s.id === selectedSellerId) || SELLERS_MARKETPLACE_DATABASE[0];

  // Filtro de Parceiros & Assessorias
  const [selectedPartnerId, setSelectedPartnerId] = useState<string>("partner_all");
  const selectedPartner =
    PARTNERS_DATABASE.find((p) => p.id === selectedPartnerId) || PARTNERS_DATABASE[0];
  const [partnersPage, setPartnersPage] = useState<number>(1);

  // Estado dos Parâmetros da Operação (Sincronizado via Store Reativo Global)
  const storedParams = useOperationalParams();
  const [operationalParams, setOperationalParams] = useState(storedParams);

  useEffect(() => {
    setOperationalParams(storedParams);
  }, [storedParams]);

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
    operationalParamsStore.updateParams(operationalParams);
    toast.success("🎉 Parâmetros operacionais salvos e sincronizados em tempo real com o Painel do Associado, Feed, Shop e Wallet!");
  };

  const handleResetParams = () => {
    operationalParamsStore.resetParams();
    toast.info("🔄 Parâmetros operacionais restaurados para os valores padrão do Business Plan.");
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

        {/* Atalhos Rápidos de Abas (Pills Nav) */}
        <div className="max-w-7xl mx-auto pt-3 flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none">
          {TAB_DEFINITIONS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  toast.info(`Navegando para: ${tab.label}`);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30 ring-1 ring-purple-400"
                    : "bg-zinc-950 text-zinc-400 border border-zinc-800 hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <span>{tab.iconEmoji}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
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

            {/* PAINEL DE OKRs ESTRATÉGICOS DO NEGÓCIO (BUSINESS PLAN NETFITS) */}
            <div className="bg-zinc-900 border border-purple-500/30 rounded-3xl p-6 shadow-xl space-y-6 bg-gradient-to-r from-purple-950/40 via-zinc-900 to-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 flex-wrap gap-2">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400">
                    Acompanhamento Tático — Business Plan Netfits v2.0
                  </span>
                  <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                    <span>🎯 Painel de OKRs & Objetivos Estratégicos do Negócio</span>
                    <span className="text-xs bg-lime-400/20 text-lime-300 border border-lime-400/30 px-2 py-0.5 rounded-full font-mono">
                      100% On-Track (Etapa 1)
                    </span>
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-xl border border-zinc-800">
                  Janela: <b>{currentPeriodObj.label}</b>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* OKR 1 */}
                <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                      OKR 1: Tração, Aquisição & Engajamento de Atletas
                    </span>
                    <span className="text-[10px] bg-lime-400/20 text-lime-300 font-extrabold px-2 py-0.5 rounded-full border border-lime-400/30">
                      Superado 🚀
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400">Objetivo: Consolidar a plataforma líder de longevidade e economia de benefícios esportivos.</p>
                  
                  <div className="space-y-2 pt-2 border-t border-zinc-900">
                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-white">KR 1.1 Base Total de Atletas (Meta: 1.000.000)</span>
                        <span className="text-lime-400 font-mono font-bold">1.245.000 (124.5%)</span>
                      </div>
                      <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-lime-400 w-full" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-white">KR 1.2 Engajamento Ativo MAU (Meta: &gt;50%)</span>
                        <span className="text-lime-400 font-mono font-bold">620.000 (50.0%)</span>
                      </div>
                      <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-lime-400 w-[100%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-white">KR 1.3 Retenção de 90 dias (Meta: &gt;80%)</span>
                        <span className="text-lime-400 font-mono font-bold">86.2% (Superou)</span>
                      </div>
                      <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 w-[100%]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* OKR 2 */}
                <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                      OKR 2: Rede de ASSOCIADOS VIP & Eficiência de CAC
                    </span>
                    <span className="text-[10px] bg-lime-400/20 text-lime-300 font-extrabold px-2 py-0.5 rounded-full border border-lime-400/30">
                      No Alvo ✅
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400">Objetivo: Transformar influenciadores na principal alavanca orgânica de baixíssimo CAC.</p>
                  
                  <div className="space-y-2 pt-2 border-t border-zinc-900">
                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-white">KR 2.1 Captação via Associados (Meta: &gt;70%)</span>
                        <span className="text-lime-400 font-mono font-bold">78.4% da base</span>
                      </div>
                      <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-lime-400 w-[100%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-white">KR 2.2 Rede Credenciada Master (Meta: 20)</span>
                        <span className="text-purple-300 font-mono font-bold">18 Ativos (90%)</span>
                      </div>
                      <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 w-[90%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-white">KR 2.3 CAC Médio Orgânico (Meta: &lt;R$ 2,00)</span>
                        <span className="text-lime-400 font-mono font-bold">R$ 1,42 / usuário</span>
                      </div>
                      <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-lime-400 w-[100%]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* OKR 3 */}
                <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                      OKR 3: GMV do Marketplace & Utilização de nfs
                    </span>
                    <span className="text-[10px] bg-lime-400/20 text-lime-300 font-extrabold px-2 py-0.5 rounded-full border border-lime-400/30">
                      Superado 🚀
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400">Objetivo: Construir ecossistema transacional curado com alta frequência de compras e resgates.</p>
                  
                  <div className="space-y-2 pt-2 border-t border-zinc-900">
                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-white">KR 3.1 GMV Shopping (Meta: R$ 1.500.000)</span>
                        <span className="text-lime-400 font-mono font-bold">R$ 1.849.000 (123.2%)</span>
                      </div>
                      <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-lime-400 w-full" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-white">KR 3.2 Taxa de Resgate com nfs (Meta: &gt;80%)</span>
                        <span className="text-lime-400 font-mono font-bold">88.0% Resgatados</span>
                      </div>
                      <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-lime-400 w-[100%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-white">KR 3.3 Conversão de Cliques do Feed (Meta: &gt;3.5%)</span>
                        <span className="text-purple-300 font-mono font-bold">4.04% Conversão</span>
                      </div>
                      <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 w-[100%]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* OKR 4 */}
                <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                      OKR 4: Otimização de TI & Margens EBITDA/Líquida
                    </span>
                    <span className="text-[10px] bg-lime-400/20 text-lime-300 font-extrabold px-2 py-0.5 rounded-full border border-lime-400/30">
                      No Alvo ✅
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400">Objetivo: Escalar a nuvem/IA com ultra-eficiência operacional e alta rentabilidade.</p>
                  
                  <div className="space-y-2 pt-2 border-t border-zinc-900">
                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-white">KR 4.1 Economia de Custos TI (Meta: &gt;50%)</span>
                        <span className="text-lime-400 font-mono font-bold">-61.5% Redução</span>
                      </div>
                      <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-lime-400 w-[100%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-white">KR 4.2 Margem EBITDA Anual (Meta: &gt;50%)</span>
                        <span className="text-lime-400 font-mono font-bold">54.1% EBITDA</span>
                      </div>
                      <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-lime-400 w-[100%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-white">KR 4.3 Margem Líquida DRE (Meta: &gt;40%)</span>
                        <span className="text-purple-300 font-mono font-bold">45.8% Líquida</span>
                      </div>
                      <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 w-[100%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Feed & Conteúdo */}
        {activeTab === "feed" && (
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-lime-400">
                  Planejamento Estratégico & Mídia ({currentPeriodObj.shortLabel})
                </span>
                <h3 className="text-sm font-bold text-white">
                  Indicadores de Feed, Anúncios & Emissão de Pontos
                </h3>
              </div>
              <button
                onClick={() => toast.success(`Relatório do Feed (${currentPeriodObj.shortLabel}) exportado!`)}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 self-start md:self-auto shadow-md transition cursor-pointer"
              >
                <Download className="size-3.5" />
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
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-lime-400">
                  Plano Estratégico de Marketplace ({currentPeriodObj.shortLabel})
                </span>
                <h3 className="text-sm font-bold text-white">
                  Indicadores de Acompanhamento do Shopping
                </h3>
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
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-lime-400">
                  Desempenho de Influenciadores ({currentPeriodObj.shortLabel})
                </span>
                <h3 className="text-sm font-bold text-white">
                  Módulo de Acompanhamento das Carteiras de Associados
                </h3>
              </div>

              <div className="flex items-center gap-2 bg-zinc-950 p-2 rounded-2xl border border-zinc-800">
                <Filter className="size-4 text-purple-400 ml-2" />
                <select
                  value={selectedAssociadoId}
                  onChange={(e) => setSelectedAssociadoId(e.target.value)}
                  className="bg-transparent text-xs font-bold text-white focus:outline-none pr-4 cursor-pointer"
                >
                  {associadosList.map((a) => (
                    <option key={a.id} value={a.id} className="bg-zinc-900 text-white">
                      {a.name} ({a.handle}) {a.isVerifiedSpecialist ? "🟣 Especialista" : ""}
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
                  <p className="text-xs text-zinc-400">Gerencie a carteira e ative o Selo Roxo de Especialista Credenciado</p>
                </div>
                <span className="text-xs text-lime-400 font-bold bg-lime-400/10 px-3 py-1 rounded-xl border border-lime-400/20">
                  Página {associadosPage} de {Math.ceil(associadosList.filter((a) => a.id !== "assoc_all").length / itemsPerPage)}
                </span>
              </div>

              <div className="overflow-x-auto w-full max-w-full">
                <table className="w-full text-left text-xs text-zinc-300 min-w-[720px]">
                  <thead className="bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800">
                    <tr>
                      <th className="py-3 px-4">Associado / Influenciador</th>
                      <th className="py-3 px-4">Código Unique</th>
                      <th className="py-3 px-4 text-center">Selo Especialista</th>
                      <th className="py-3 px-4 text-right">Carteira (Atletas)</th>
                      <th className="py-3 px-4 text-right">GMV Gerado (R$)</th>
                      <th className="py-3 px-4 text-right">Receita Netfits (15%)</th>
                      <th className="py-3 px-4 text-right">Comissão R$ (30%)</th>
                      <th className="py-3 px-4 text-center">Status</th>
                      <th className="py-3 px-4 text-center">Ação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800 font-medium">
                    {associadosList.filter((a) => a.id !== "assoc_all")
                      .slice((associadosPage - 1) * itemsPerPage, associadosPage * itemsPerPage)
                      .map((assoc) => (
                        <tr key={assoc.id} className="hover:bg-zinc-800/40 transition">
                          <td className="py-3 px-4">
                            <div>
                              <p className="font-bold text-white flex items-center gap-1.5">
                                {assoc.name}
                                {assoc.isVerifiedSpecialist && (
                                  <span className="text-[9px] font-extrabold bg-purple-600/30 text-purple-300 border border-purple-500/50 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                                    🟣 Especialista
                                  </span>
                                )}
                              </p>
                              <p className="text-[10px] text-purple-400">{assoc.handle}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4 font-mono text-zinc-400">{assoc.code}</td>
                          <td className="py-3 px-4 text-center">
                            <button
                              onClick={() => toggleSpecialistBadge(assoc.id)}
                              className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold flex items-center justify-center gap-1 transition mx-auto ${
                                assoc.isVerifiedSpecialist
                                  ? "bg-purple-600/30 text-purple-300 border border-purple-500/50 hover:bg-purple-600/50 shadow-xs"
                                  : "bg-zinc-800 text-zinc-400 border border-zinc-700 hover:bg-purple-950 hover:text-purple-300 opacity-60 hover:opacity-100"
                              }`}
                              title="Clique para alterar a concessão do Selo Roxo"
                            >
                              {assoc.isVerifiedSpecialist ? "🟣 Verificado" : "⚪ Ativar Selo"}
                            </button>
                          </td>
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
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-lime-400">
                  Configuração Global da Operação
                </span>
                <h3 className="text-sm font-bold text-white">
                  Parâmetros Operacionais & Economia do Programa de Pontos
                </h3>
              </div>
              <div className="flex items-center gap-2 self-start md:self-auto">
                <button
                  type="button"
                  onClick={handleResetParams}
                  className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer border border-zinc-700"
                >
                  <RotateCcw className="size-3.5 text-zinc-400" />
                  Restaurar Padrões
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 shadow-md transition cursor-pointer"
                >
                  <Save className="size-3.5" />
                  Salvar Parâmetros
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Card 1: Recompensas do Feed & Limites Antifraude */}
              <div className="bg-zinc-900 border border-purple-500/30 rounded-3xl p-6 shadow-xl space-y-4 lg:col-span-2 bg-gradient-to-r from-purple-950/40 via-zinc-900 to-zinc-900">
                <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
                  <Rss className="size-5 text-purple-400" />
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400">
                      Diretrizes do Feed & Moderação Antifraude
                    </span>
                    <h4 className="font-bold text-base text-white">Recompensas de Mídia & Limites de Postagem</h4>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <ParamInput
                    label="Pontos nfs por Post de VÍDEO"
                    unit="nfs / vídeo"
                    value={operationalParams.nfsPerVideoPost}
                    onChange={(v) => setOperationalParams((p) => ({ ...p, nfsPerVideoPost: Number(v) }))}
                  />
                  <ParamInput
                    label="Pontos nfs por TEXTO / FOTO"
                    unit="nfs / post"
                    value={operationalParams.nfsPerTextPost}
                    onChange={(v) => setOperationalParams((p) => ({ ...p, nfsPerTextPost: Number(v) }))}
                  />
                  <ParamInput
                    label="Limite DIÁRIO de Posts Premiados"
                    unit="posts / dia"
                    value={operationalParams.dailyRewardedPostLimit}
                    onChange={(v) => setOperationalParams((p) => ({ ...p, dailyRewardedPostLimit: Number(v) }))}
                  />
                  <ParamInput
                    label="Limite SEMANAL de Posts Premiados"
                    unit="posts / semana"
                    value={operationalParams.weeklyRewardedPostLimit}
                    onChange={(v) => setOperationalParams((p) => ({ ...p, weeklyRewardedPostLimit: Number(v) }))}
                  />
                  <ParamInput
                    label="nfs por Visualização de Post"
                    unit="nfs / view"
                    value={operationalParams.nfsPerPostView}
                    onChange={(v) => setOperationalParams((p) => ({ ...p, nfsPerPostView: Number(v) }))}
                  />
                  <ParamInput
                    label="nfs por Curtida (Like)"
                    unit="nfs / like"
                    value={operationalParams.nfsPerLike}
                    onChange={(v) => setOperationalParams((p) => ({ ...p, nfsPerLike: Number(v) }))}
                  />
                  <ParamInput
                    label="nfs por Compartilhamento"
                    unit="nfs / share"
                    value={operationalParams.nfsPerShare}
                    onChange={(v) => setOperationalParams((p) => ({ ...p, nfsPerShare: Number(v) }))}
                  />
                  <ParamInput
                    label="nfs por Post Salvo"
                    unit="nfs / save"
                    value={operationalParams.nfsPerSave}
                    onChange={(v) => setOperationalParams((p) => ({ ...p, nfsPerSave: Number(v) }))}
                  />
                </div>
              </div>

              {/* Card 2: Engajamento, Treinos & Indicações */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4">
                <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
                  <Zap className="size-5 text-lime-400" />
                  <h4 className="font-bold text-sm text-white">Engajamento, Treinos & Indicações</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <ParamInput
                    label="nfs por Treino Validadog (Smart Fit/GPS)"
                    unit="nfs / treino"
                    value={operationalParams.nfsPerWorkout}
                    onChange={(v) => setOperationalParams((p) => ({ ...p, nfsPerWorkout: Number(v) }))}
                  />
                  <ParamInput
                    label="Bônus de Indicação de Amigo"
                    unit="nfs / amigo"
                    value={operationalParams.normalUserNewReferralBonusNfs}
                    onChange={(v) => setOperationalParams((p) => ({ ...p, normalUserNewReferralBonusNfs: Number(v) }))}
                  />
                  <ParamInput
                    label="Comissão de Indicação de Amigo"
                    unit="% das compras"
                    value={operationalParams.normalUserReferralSharePct}
                    onChange={(v) => setOperationalParams((p) => ({ ...p, normalUserReferralSharePct: Number(v) }))}
                  />
                  <ParamInput
                    label="nfs por Vínculo de Programa Fidelidade"
                    unit="nfs / vínculo"
                    value={operationalParams.nfsPerLoyaltyDeclaration}
                    onChange={(v) => setOperationalParams((p) => ({ ...p, nfsPerLoyaltyDeclaration: Number(v) }))}
                  />
                </div>
              </div>

              {/* Card 3: Comissões do Marketplace & Associados */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4">
                <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
                  <Percent className="size-5 text-purple-400" />
                  <h4 className="font-bold text-sm text-white">Atribuição do Marketplace & Repasses</h4>
                </div>
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
                  <ParamInput
                    label="Repasse Ao Associado Master"
                    unit="% da Receita Netfits"
                    value={operationalParams.associadoMasterShareOfNetfitsRevenuePct}
                    onChange={(v) => setOperationalParams((p) => ({ ...p, associadoMasterShareOfNetfitsRevenuePct: Number(v) }))}
                  />
                  <ParamInput
                    label="Bônus 1ª Compra no Shopping"
                    unit="nfs bônus"
                    value={operationalParams.shopFirstPurchaseBonusNfs}
                    onChange={(v) => setOperationalParams((p) => ({ ...p, shopFirstPurchaseBonusNfs: Number(v) }))}
                  />
                </div>
              </div>

              {/* Card 4: Economia, Resgate & Validade dos Pontos */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 lg:col-span-2">
                <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
                  <Coins className="size-5 text-amber-400" />
                  <h4 className="font-bold text-sm text-white">Economia do Programa de Pontos & Validade</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <ParamInput
                    label="CPP de Resgate (Cotação R$)"
                    unit="R$ / nfs"
                    value={operationalParams.cppResgateBrl}
                    onChange={(v) => setOperationalParams((p) => ({ ...p, cppResgateBrl: Number(v) }))}
                  />
                  <ParamInput
                    label="Netfits Ganhos por R$ 1,00 Gasto"
                    unit="nfs / R$"
                    value={operationalParams.nfsEarnedPerBrlSpent}
                    onChange={(v) => setOperationalParams((p) => ({ ...p, nfsEarnedPerBrlSpent: Number(v) }))}
                  />
                  <ParamInput
                    label="Validade dos Pontos nfs"
                    unit="meses"
                    value={operationalParams.pointsValidityMonths}
                    onChange={(v) => setOperationalParams((p) => ({ ...p, pointsValidityMonths: Number(v) }))}
                  />
                  <ParamInput
                    label="Taxa Estimada de Expiração (Breakage)"
                    unit="% ao ano"
                    value={operationalParams.targetBreakagePct}
                    onChange={(v) => setOperationalParams((p) => ({ ...p, targetBreakagePct: Number(v) }))}
                  />
                </div>
              </div>
            </div>
          </form>
        )}

        {/* Tab: Atividades & Sensor Esportivo */}
        {activeTab === "activities" && (
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-lime-400">
                  Sensor de Movimento & Validação Esportiva (Etapa 1 & 2)
                </span>
                <h3 className="text-sm font-bold text-white">
                  Métricas de Engajamento Físico & Pontuação por Treino
                </h3>
              </div>
              <span className="text-xs font-mono text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20 font-bold">
                +50 nfs / treino validado
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              <KpiCard
                title="Treinos Validados Total"
                value={Math.round(84500 * pf).toLocaleString("pt-BR")}
                change="+24.8%"
                positive={true}
                icon={Activity}
                subtext="Presenças & registros"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Check-ins Smart Fit"
                value={Math.round(48200 * pf).toLocaleString("pt-BR")}
                change="+18.5%"
                positive={true}
                icon={Zap}
                subtext="Totens de validação"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Pontos Emitidos via Treino"
                value={`${Math.round(4225000 * pf).toLocaleString("pt-BR")} nfs`}
                change="+24.8%"
                positive={true}
                icon={Coins}
                subtext="4.2M nfs distribuídos"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Média de Treinos / Atleta"
                value={`${(3.8 * pf).toFixed(1)} treinos`}
                change="+12.0%"
                positive={true}
                icon={TrendingUp}
                subtext="Frequência semanal"
                periodBadge={currentPeriodObj.shortLabel}
              />
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4">
              <h4 className="font-bold text-sm text-white">Transição Tecnológica para Etapa 2 (Roadmap Business Plan)</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-zinc-300">
                <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-2">
                  <p className="font-bold text-lime-400">Etapa 1 (Atual)</p>
                  <p className="text-zinc-400">Validação manual via QR Code em academias parceiras (Smart Fit) e registros em fotos do feed. Baixa complexidade e custo zero de API.</p>
                </div>
                <div className="bg-zinc-950 p-4 rounded-2xl border border-purple-500/30 space-y-2">
                  <p className="font-bold text-purple-300">Etapa 2 (9 a 18 meses)</p>
                  <p className="text-zinc-400">Integração nativa com Strava & Garmin API. Sincronização automática de corridas, pedaladas e métricas cardíacas.</p>
                </div>
                <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-2">
                  <p className="font-bold text-amber-400">Etapa 3 (18 a 36 meses)</p>
                  <p className="text-zinc-400">Plano corporativo B2B com desafios empresariais e marketplace de serviços de longevidade (fisioterapia, nutrologia).</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Base de Usuários & Declaração de Pontos Bancários */}
        {activeTab === "users" && (
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-lime-400">
                  Base de Atletas & Programas Bancários Declarados (Business Plan Sessão 6)
                </span>
                <h3 className="text-sm font-bold text-white">
                  Comunidade, Declaração de Pontos Bancários & Retenção
                </h3>
              </div>
              <span className="text-xs font-mono text-purple-300 bg-purple-900/30 px-3 py-1 rounded-full border border-purple-500/30 font-bold">
                482k Declarações Coletadas
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              <KpiCard
                title="Usuários Cadastrados"
                value={Math.round(1245000 * Math.min(1, pf * 1.1)).toLocaleString("pt-BR")}
                change="+32.4%"
                positive={true}
                icon={Users}
                subtext="Superou meta Etapa 1 (1M)"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Ativos Mensais (MAU)"
                value={Math.round(620000 * Math.min(1, pf * 1.1)).toLocaleString("pt-BR")}
                change="50.0% engajamento"
                positive={true}
                icon={UserCheck}
                subtext="620k atletas ativos"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Declaração Pontos Bancários"
                value={Math.round(482000 * Math.min(1, pf * 1.1)).toLocaleString("pt-BR")}
                change="38.7% da base"
                positive={true}
                icon={Award}
                subtext="Intenção de resgate"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Taxa de Retenção (90 dias)"
                value="86.2%"
                change="Meta 80%"
                positive={true}
                icon={ShieldAlert}
                subtext="Excelente retenção"
                periodBadge={currentPeriodObj.shortLabel}
              />
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4">
              <h4 className="font-bold text-sm text-white">Distribuição de Programas Bancários Declarados (Pesquisa Etapa 1)</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1">
                  <p className="text-xs text-zinc-400 font-semibold">Livelo (BB & Bradesco)</p>
                  <p className="text-xl font-bold text-white">184.000 declarações</p>
                  <span className="text-[10px] text-lime-400">Média: 45.000 pts declarados</span>
                </div>
                <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1">
                  <p className="text-xs text-zinc-400 font-semibold">Esfera (Santander)</p>
                  <p className="text-xl font-bold text-white">128.000 declarações</p>
                  <span className="text-[10px] text-purple-400">Média: 38.000 pts declarados</span>
                </div>
                <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1">
                  <p className="text-xs text-zinc-400 font-semibold">C6 Átomos</p>
                  <p className="text-xl font-bold text-white">74.000 declarações</p>
                  <span className="text-[10px] text-amber-400">Média: 22.000 pts declarados</span>
                </div>
                <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1">
                  <p className="text-xs text-zinc-400 font-semibold">Smiles & LATAM Pass</p>
                  <p className="text-xl font-bold text-white">96.000 declarações</p>
                  <span className="text-[10px] text-cyan-400">Média: 55.000 pts declarados</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Parceiros & Assessorias */}
        {activeTab === "partners" && (
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-lime-400">
                  Rede Credenciada & Ecossistema de Saúde (Sessão 6 & 10)
                </span>
                <h3 className="text-sm font-bold text-white">
                  Parceiros Comerciais, Sellers do Shopping & Assessorias Esportivas
                </h3>
              </div>

              {/* Seletor de Parceiro (Consolidado vs Individual) */}
              <div className="flex items-center gap-2 bg-zinc-950 p-2 rounded-2xl border border-zinc-800 self-start md:self-auto">
                <Handshake className="size-4 text-lime-400 ml-2" />
                <select
                  value={selectedPartnerId}
                  onChange={(e) => {
                    setSelectedPartnerId(e.target.value);
                    const partner = PARTNERS_DATABASE.find((p) => p.id === e.target.value);
                    toast.info(`Filtro alterado para: ${partner?.name}`);
                  }}
                  className="bg-transparent text-xs font-bold text-white focus:outline-none pr-4 cursor-pointer"
                >
                  {PARTNERS_DATABASE.map((p) => (
                    <option key={p.id} value={p.id} className="bg-zinc-900 text-white font-medium py-1">
                      {p.iconEmoji} {p.name} [{p.contractTier}]
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* KPIs do Filtro de Parceiro */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              <KpiCard
                title="Filtro Selecionado"
                value={selectedPartner.name.split(" ")[0] + (selectedPartner.name.split(" ")[1] ? " " + selectedPartner.name.split(" ")[1] : "")}
                change={selectedPartner.contractTier}
                positive={true}
                icon={Handshake}
                subtext={selectedPartner.category}
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="GMV Transacionado"
                value={`R$ ${(selectedPartner.gmvBrl * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                change="+22.4%"
                positive={true}
                icon={ShoppingBag}
                subtext="Vendas via plataforma"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Comissão Netfits (15%)"
                value={`R$ ${(selectedPartner.netfitsRevenueBrl * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                change="+24.5%"
                positive={true}
                icon={DollarSign}
                subtext="Receita direta gerada"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="NPS & Conversão"
                value={`${selectedPartner.npsScore} / 100`}
                change={`${selectedPartner.conversionRatePct}% conv.`}
                positive={true}
                icon={Star}
                subtext={`Cupom: ${selectedPartner.exclusiveCoupon}`}
                periodBadge={currentPeriodObj.shortLabel}
              />
            </div>

            {/* Tabela do Ecossistema de Parceiros & Assessorias */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 w-full">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 flex-wrap gap-2">
                <div>
                  <h4 className="text-base font-bold text-white">Tabela de Parceiros & Assessorias Credenciadas</h4>
                  <p className="text-xs text-zinc-400">
                    {selectedPartnerId === "partner_all"
                      ? "Exibindo visão consolidada de todas as 28 marcas credenciadas no ecossistema"
                      : `Exibindo desempenho individualizado de ${selectedPartner.name}`}
                  </p>
                </div>

                {selectedPartnerId !== "partner_all" && (
                  <button
                    onClick={() => {
                      setSelectedPartnerId("partner_all");
                      toast.info("Filtro resetado para Visão Consolidada!");
                    }}
                    className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-lime-400 font-bold text-xs border border-zinc-700 transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>🌐 Voltar para Consolidado</span>
                  </button>
                )}
              </div>

              <div className="overflow-x-auto w-full max-w-full">
                <table className="w-full text-left text-xs text-zinc-300 min-w-[720px]">
                  <thead className="bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800">
                    <tr>
                      <th className="py-3 px-4">Parceiro / Assessoria</th>
                      <th className="py-3 px-4">Categoria / Segmento</th>
                      <th className="py-3 px-4 text-center">Nível do Contrato</th>
                      <th className="py-3 px-4 text-right">GMV Transacionado (R$)</th>
                      <th className="py-3 px-4 text-right">Comissão Netfits (R$)</th>
                      <th className="py-3 px-4 text-center">Conversão</th>
                      <th className="py-3 px-4 text-center">Cupom Exclusivo</th>
                      <th className="py-3 px-4 text-center">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/80 font-medium">
                    {PARTNERS_DATABASE.filter((p) => p.id !== "partner_all")
                      .filter((p) => selectedPartnerId === "partner_all" || p.id === selectedPartnerId)
                      .slice((partnersPage - 1) * itemsPerPage, partnersPage * itemsPerPage)
                      .map((partner) => {
                        const isSelected = selectedPartnerId === partner.id;
                        return (
                          <tr
                            key={partner.id}
                            className={`transition ${
                              isSelected ? "bg-purple-950/40 border-l-4 border-l-lime-400" : "hover:bg-zinc-800/40"
                            }`}
                          >
                            <td className="py-3 px-4 font-bold text-white flex items-center gap-2">
                              <span className="text-base">{partner.iconEmoji}</span>
                              <div>
                                <p className="text-xs font-bold text-white">{partner.name}</p>
                                <span className="text-[10px] text-lime-400 font-mono">NPS {partner.npsScore}/100</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-zinc-400 text-xs">{partner.category}</td>
                            <td className="py-3 px-4 text-center">
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full border font-mono ${
                                  partner.contractTier === "Master Partner"
                                    ? "bg-purple-900/40 text-purple-300 border-purple-500/40"
                                    : partner.contractTier === "Clínica Especialista"
                                    ? "bg-lime-900/40 text-lime-300 border-lime-500/40"
                                    : "bg-zinc-800 text-zinc-300 border-zinc-700"
                                }`}
                              >
                                {partner.contractTier}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-right font-mono font-bold text-white">
                              R$ {(partner.gmvBrl * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                            </td>
                            <td className="py-3 px-4 text-right font-mono font-bold text-lime-400">
                              R$ {(partner.netfitsRevenueBrl * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                            </td>
                            <td className="py-3 px-4 text-center font-mono font-bold text-purple-300">
                              {partner.conversionRatePct}%
                            </td>
                            <td className="py-3 px-4 text-center">
                              <code className="text-[10px] bg-zinc-950 px-2 py-1 rounded text-lime-400 border border-zinc-800 font-mono font-bold">
                                {partner.exclusiveCoupon}
                              </code>
                            </td>
                            <td className="py-3 px-4 text-center">
                              <button
                                onClick={() => {
                                  setSelectedPartnerId(partner.id);
                                  toast.success(`Filtro individual ativado para: ${partner.name}`);
                                }}
                                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                                  isSelected
                                    ? "bg-lime-400 text-zinc-950 shadow"
                                    : "bg-zinc-800 hover:bg-purple-600 text-white"
                                }`}
                              >
                                {isSelected ? "✓ Selecionado" : "Filtrar"}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>

              <PaginationControls
                currentPage={partnersPage}
                totalPages={Math.ceil(
                  PARTNERS_DATABASE.filter((p) => p.id !== "partner_all").filter(
                    (p) => selectedPartnerId === "partner_all" || p.id === selectedPartnerId
                  ).length / itemsPerPage
                )}
                onPageChange={setPartnersPage}
                totalItems={
                  PARTNERS_DATABASE.filter((p) => p.id !== "partner_all").filter(
                    (p) => selectedPartnerId === "partner_all" || p.id === selectedPartnerId
                  ).length
                }
                itemsPerPage={itemsPerPage}
              />
            </div>
          </div>
        )}

        {/* Tab: Controles, Finanças & OPEX de Infraestrutura Otimizado (1M Usuários) */}
        {activeTab === "controls" && (
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-purple-500/30 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3 bg-gradient-to-r from-purple-950/40 via-zinc-900 to-zinc-900">
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-lime-400">
                  Demonstrativo Financeiro & Engenharia de Custos (1.000.000 de Usuários)
                </span>
                <h3 className="text-sm font-bold text-white">
                  OPEX de TI Otimizado (-61.5% Redução de Custos) & Unit Economics
                </h3>
              </div>
              <span className="text-xs font-mono text-lime-400 bg-lime-400/10 px-3.5 py-1.5 rounded-full border border-lime-400/30 font-extrabold">
                Economia de -61,5% (US$ 1.320 / R$ 7.260 /mês)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              <KpiCard
                title="Custo TI Mensal (1M Usuários)"
                value="R$ 7.260 /mês"
                change="-61.5% economia"
                positive={true}
                icon={Cpu}
                subtext="US$ 1.320,00 /mês"
                highlightColor="border-lime-400 ring-1 ring-lime-400/20 bg-lime-400/5"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Custo por Usuário Cadastrado"
                value="R$ 0,007 /mês"
                change="Ultra-eficiente"
                positive={true}
                icon={DollarSign}
                subtext="R$ 0,08 / ano"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Custo por Usuário Ativo (MAU)"
                value="R$ 0,012 /mês"
                change="R$ 0,14 / ano"
                positive={true}
                icon={Users}
                subtext="620k MAU ativos"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Margem EBITDA da Operação"
                value="84.2%"
                change="Alta Lucratividade"
                positive={true}
                icon={TrendingUp}
                subtext="Operação escalável"
                periodBadge={currentPeriodObj.shortLabel}
              />
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 w-full">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 flex-wrap gap-2">
                <div>
                  <h4 className="text-base font-bold text-white">Detalhamento da Arquitetura de Custos Otimizada (1M Usuários)</h4>
                  <p className="text-xs text-zinc-400">Comparativo do plano de engenharia de custo (Anterior vs Otimizado)</p>
                </div>
                <span className="text-xs text-lime-400 font-bold bg-lime-400/10 px-3 py-1 rounded-xl border border-lime-400/20">
                  Câmbio: US$ 1.00 = R$ 5,50
                </span>
              </div>

              <div className="overflow-x-auto w-full max-w-full">
                <table className="w-full text-left text-xs text-zinc-300 min-w-[680px]">
                  <thead className="bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800">
                    <tr>
                      <th className="py-3 px-4">Componente de Infraestrutura</th>
                      <th className="py-3 px-4 text-right">Custo Anterior (USD)</th>
                      <th className="py-3 px-4 text-right">Custo Otimizado (USD)</th>
                      <th className="py-3 px-4 text-right">Custo Otimizado (BRL)</th>
                      <th className="py-3 px-4 text-center">Economia %</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800 font-medium">
                    <tr className="hover:bg-zinc-800/40 transition">
                      <td className="py-3 px-4 font-bold text-white">🤖 IA (Vertex Gemini + Cache Vetorial Redis)</td>
                      <td className="py-3 px-4 text-right text-zinc-500 line-through">US$ 405,00</td>
                      <td className="py-3 px-4 text-right font-bold text-lime-400">US$ 180,00</td>
                      <td className="py-3 px-4 text-right font-bold text-white">R$ 990,00</td>
                      <td className="py-3 px-4 text-center text-lime-400 font-bold">-55.5%</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/40 transition">
                      <td className="py-3 px-4 font-bold text-white">🗄️ Banco de Dados (Firestore Offline Cache)</td>
                      <td className="py-3 px-4 text-right text-zinc-500 line-through">US$ 520,00</td>
                      <td className="py-3 px-4 text-right font-bold text-lime-400">US$ 280,00</td>
                      <td className="py-3 px-4 text-right font-bold text-white">R$ 1.540,00</td>
                      <td className="py-3 px-4 text-center text-lime-400 font-bold">-46.1%</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/40 transition">
                      <td className="py-3 px-4 font-bold text-white">🖼️ Armazenamento Mídia (Cloudflare R2 Zero Egress)</td>
                      <td className="py-3 px-4 text-right text-zinc-500 line-through">US$ 310,00</td>
                      <td className="py-3 px-4 text-right font-bold text-lime-400">US$ 110,00</td>
                      <td className="py-3 px-4 text-right font-bold text-white">R$ 605,00</td>
                      <td className="py-3 px-4 text-center text-lime-400 font-bold">-64.5%</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/40 transition">
                      <td className="py-3 px-4 font-bold text-white">🌐 Servidores & API (Bun / Cloud Run Concurrency 80)</td>
                      <td className="py-3 px-4 text-right text-zinc-500 line-through">US$ 850,00</td>
                      <td className="py-3 px-4 text-right font-bold text-lime-400">US$ 380,00</td>
                      <td className="py-3 px-4 text-right font-bold text-white">R$ 2.090,00</td>
                      <td className="py-3 px-4 text-center text-lime-400 font-bold">-55.3%</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/40 transition">
                      <td className="py-3 px-4 font-bold text-white">⚡ CDN & Tráfego (Cloudflare Tiered Cache)</td>
                      <td className="py-3 px-4 text-right text-zinc-500 line-through">US$ 450,00</td>
                      <td className="py-3 px-4 text-right font-bold text-lime-400">US$ 90,00</td>
                      <td className="py-3 px-4 text-right font-bold text-white">R$ 495,00</td>
                      <td className="py-3 px-4 text-center text-lime-400 font-bold">-80.0%</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/40 transition">
                      <td className="py-3 px-4 font-bold text-white">🔐 Autenticação (WhatsApp OTP + Magic Links)</td>
                      <td className="py-3 px-4 text-right text-zinc-500 line-through">US$ 650,00</td>
                      <td className="py-3 px-4 text-right font-bold text-lime-400">US$ 190,00</td>
                      <td className="py-3 px-4 text-right font-bold text-white">R$ 1.045,00</td>
                      <td className="py-3 px-4 text-center text-lime-400 font-bold">-70.7%</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/40 transition">
                      <td className="py-3 px-4 font-bold text-white">🔔 Notificações Push & Logs</td>
                      <td className="py-3 px-4 text-right text-zinc-500 line-through">US$ 240,00</td>
                      <td className="py-3 px-4 text-right font-bold text-lime-400">US$ 90,00</td>
                      <td className="py-3 px-4 text-right font-bold text-white">R$ 495,00</td>
                      <td className="py-3 px-4 text-center text-lime-400 font-bold">-62.5%</td>
                    </tr>
                  </tbody>
                  <tfoot className="bg-zinc-950 font-bold border-t-2 border-zinc-700 text-white">
                    <tr>
                      <td className="py-3.5 px-4">TOTAL MENSAL OTIMIZADO (1M USUÁRIOS)</td>
                      <td className="py-3.5 px-4 text-right text-zinc-400">US$ 3.425,00</td>
                      <td className="py-3.5 px-4 text-right text-lime-400 font-mono text-sm">US$ 1.320,00</td>
                      <td className="py-3.5 px-4 text-right text-lime-400 font-mono text-sm">R$ 7.260,00</td>
                      <td className="py-3.5 px-4 text-center text-lime-400 font-black">-61.5% REDUÇÃO</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Resultados & DRE (Demonstração do Resultado do Exercício) */}
        {(activeTab === "results" || activeTab === "controls") && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-950/60 via-zinc-900 to-zinc-900 border border-purple-500/30 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-lime-400">
                  Demonstração do Resultado do Exercício (DRE Proforma 2026)
                </span>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>📈 DRE Financeiro — Netfits Tecnologia S.A.</span>
                  <span className="text-xs bg-lime-400/20 text-lime-300 border border-lime-400/30 px-2 py-0.5 rounded-full font-mono">
                    Margem EBITDA: 54.1%
                  </span>
                </h3>
              </div>

              <div className="flex items-center gap-2 self-start md:self-auto">
                <button
                  onClick={() => toast.success("DRE Proforma exportado com sucesso em PDF/Excel!")}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md flex items-center gap-2 transition cursor-pointer"
                >
                  <Download className="size-3.5" />
                  Exportar DRE (Excel/PDF)
                </button>
              </div>
            </div>

            {/* KPIs Financeiros de Topo do DRE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              <KpiCard
                title="Receita Operacional Bruta"
                value={`R$ ${(2510850 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                change="+34.2%"
                positive={true}
                icon={DollarSign}
                subtext="GMV + Mídias + Provas"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Receita Operacional Líquida"
                value={`R$ ${(2360199 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                change="94.0% da Bruta"
                positive={true}
                icon={Coins}
                subtext="Após tributos (-6%)"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="EBITDA da Operação"
                value={`R$ ${(1359474 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                change="54.1% Margem"
                positive={true}
                icon={TrendingUp}
                subtext="Lucro antes de impostos/juros"
                highlightColor="border-lime-400 ring-1 ring-lime-400/20 bg-lime-400/5"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Lucro Líquido do Exercício"
                value={`R$ ${(1150793 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                change="45.8% Margem Líq."
                positive={true}
                icon={Award}
                subtext="Lucro final distribuível"
                periodBadge={currentPeriodObj.shortLabel}
              />
            </div>

            {/* Tabela Estruturada do DRE Contábil */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 w-full">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 flex-wrap gap-2">
                <div>
                  <h4 className="text-base font-bold text-white">Demonstração Estruturada do Resultado (DRE)</h4>
                  <p className="text-xs text-zinc-400">Valores em R$ ajustados para o período acumulado ({currentPeriodObj.shortLabel})</p>
                </div>
                <span className="text-xs font-mono text-lime-400 font-bold bg-lime-400/10 px-3 py-1 rounded-xl border border-lime-400/20">
                  Exercício Proforma 2026
                </span>
              </div>

              <div className="overflow-x-auto w-full max-w-full">
                <table className="w-full text-left text-xs text-zinc-300 min-w-[640px]">
                  <thead className="bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800">
                    <tr>
                      <th className="py-3 px-4">Linha da DRE (Conta Contábil)</th>
                      <th className="py-3 px-4 text-right">Valor no Período (R$)</th>
                      <th className="py-3 px-4 text-right">Análise Vertical (% Rec. Bruta)</th>
                      <th className="py-3 px-4 text-center">Status / Tendência</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/80 font-medium">
                    {/* RECEITA BRUTA */}
                    <tr className="bg-purple-950/20 hover:bg-purple-950/40 transition font-bold text-white">
                      <td className="py-3 px-4 text-purple-300">(+) RECEITA OPERACIONAL BRUTA</td>
                      <td className="py-3 px-4 text-right text-purple-300 font-mono text-sm">
                        R$ {(2510850 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </td>
                      <td className="py-3 px-4 text-right text-purple-300">100.0%</td>
                      <td className="py-3 px-4 text-center text-lime-400 font-bold">▲ Forte Crescimento</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                      <td className="py-2.5 px-6">└─ Comissões Marketplace (15% Take-Rate GMV)</td>
                      <td className="py-2.5 px-4 text-right font-mono">R$ {(277350 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                      <td className="py-2.5 px-4 text-right">11.0%</td>
                      <td className="py-2.5 px-4 text-center text-zinc-500">Recorrente</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                      <td className="py-2.5 px-6">└─ Receita de Mídias & Anúncios Patrocinados (Feed)</td>
                      <td className="py-2.5 px-4 text-right font-mono">R$ {(384500 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                      <td className="py-2.5 px-4 text-right">15.3%</td>
                      <td className="py-2.5 px-4 text-center text-zinc-500">Recorrente</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                      <td className="py-2.5 px-6">└─ Inscrições em Provas & Eventos Esportivos Credenciados</td>
                      <td className="py-2.5 px-4 text-right font-mono">R$ {(512000 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                      <td className="py-2.5 px-4 text-right">20.4%</td>
                      <td className="py-2.5 px-4 text-center text-zinc-500">Sazonal / Provas</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                      <td className="py-2.5 px-6">└─ Assinaturas Netfits Club (Etapa 2 Projeção R$29/mês)</td>
                      <td className="py-2.5 px-4 text-right font-mono">R$ {(1337000 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                      <td className="py-2.5 px-4 text-right">53.3%</td>
                      <td className="py-2.5 px-4 text-center text-purple-400">Recorrente (SaaS)</td>
                    </tr>

                    {/* DEDUÇÕES */}
                    <tr className="hover:bg-zinc-800/40 transition text-rose-300">
                      <td className="py-2.5 px-4">(-) DEDUÇÕES E IMPOSTOS SOBRE VENDAS (DAS / ISS / PIS / COFINS)</td>
                      <td className="py-2.5 px-4 text-right font-mono">(R$ {(150651 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                      <td className="py-2.5 px-4 text-right">-6.0%</td>
                      <td className="py-2.5 px-4 text-center text-rose-400">Tributário</td>
                    </tr>

                    {/* RECEITA LÍQUIDA */}
                    <tr className="bg-zinc-950 font-bold text-white border-y border-zinc-700">
                      <td className="py-3 px-4 font-black">(=) RECEITA OPERACIONAL LÍQUIDA</td>
                      <td className="py-3 px-4 text-right font-mono text-lime-400 text-sm font-black">
                        R$ {(2360199 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </td>
                      <td className="py-3 px-4 text-right text-lime-400 font-black">94.0%</td>
                      <td className="py-3 px-4 text-center text-lime-400 font-bold">Base Líquida</td>
                    </tr>

                    {/* CUSTOS DE SERVIÇOS / RESGATES */}
                    <tr className="hover:bg-zinc-800/40 transition text-rose-300">
                      <td className="py-2.5 px-4">(-) CUSTOS DOS SERVIÇOS PRESTADOS & RESGATES DE PONTOS (CSP)</td>
                      <td className="py-2.5 px-4 text-right font-mono">(R$ {(277605 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                      <td className="py-2.5 px-4 text-right">-11.1%</td>
                      <td className="py-2.5 px-4 text-center text-zinc-400">Custo Direto</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                      <td className="py-2.5 px-6">└─ Custo de Resgate de Pontos nfs no Shopping (CPP R$ 0,02)</td>
                      <td className="py-2.5 px-4 text-right font-mono">(R$ {(147200 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                      <td className="py-2.5 px-4 text-right">-5.9%</td>
                      <td className="py-2.5 px-4 text-center text-zinc-500">Resgate Shopping</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                      <td className="py-2.5 px-6">└─ Repasse de Comissões em Dinheiro aos Associados VIP (30%)</td>
                      <td className="py-2.5 px-4 text-right font-mono">(R$ {(83205 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                      <td className="py-2.5 px-4 text-right">-3.3%</td>
                      <td className="py-2.5 px-4 text-center text-zinc-500">Comissão Captação</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                      <td className="py-2.5 px-6">└─ Taxas de Meios de Pagamento & Gateway de Adquirencia</td>
                      <td className="py-2.5 px-4 text-right font-mono">(R$ {(47200 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                      <td className="py-2.5 px-4 text-right">-1.9%</td>
                      <td className="py-2.5 px-4 text-center text-zinc-500">Adquirencia</td>
                    </tr>

                    {/* LUCRO BRUTO */}
                    <tr className="bg-zinc-950 font-bold text-white border-y border-zinc-700">
                      <td className="py-3 px-4 font-black">(=) LUCRO BRUTO</td>
                      <td className="py-3 px-4 text-right font-mono text-white text-sm font-black">
                        R$ {(2082594 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </td>
                      <td className="py-3 px-4 text-right text-white font-black">82.9%</td>
                      <td className="py-3 px-4 text-center text-lime-400 font-bold">Margem Bruta 82,9%</td>
                    </tr>

                    {/* OPEX */}
                    <tr className="hover:bg-zinc-800/40 transition text-rose-300">
                      <td className="py-2.5 px-4">(-) DESPESAS OPERACIONAIS (OPEX MENSAL / ANUAL)</td>
                      <td className="py-2.5 px-4 text-right font-mono">(R$ {(723120 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                      <td className="py-2.5 px-4 text-right">-28.8%</td>
                      <td className="py-2.5 px-4 text-center text-rose-400">Despesas Operacionais</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                      <td className="py-2.5 px-6">└─ Infraestrutura de TI & Cloud Otimizada (1M Usuários)</td>
                      <td className="py-2.5 px-4 text-right font-mono">(R$ {(87120 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                      <td className="py-2.5 px-4 text-right">-3.5%</td>
                      <td className="py-2.5 px-4 text-center text-lime-400 font-bold">R$ 7.260/mês (-61.5%)</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                      <td className="py-2.5 px-6">└─ Pessoal, Engenharia de Software & Suporte Atleta</td>
                      <td className="py-2.5 px-4 text-right font-mono">(R$ {(360000 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                      <td className="py-2.5 px-4 text-right">-14.3%</td>
                      <td className="py-2.5 px-4 text-center text-zinc-500">Equipe Core</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                      <td className="py-2.5 px-6">└─ Marketing de Performance & Aquisição (CAC Orgânico)</td>
                      <td className="py-2.5 px-4 text-right font-mono">(R$ {(180000 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                      <td className="py-2.5 px-4 text-right">-7.2%</td>
                      <td className="py-2.5 px-4 text-center text-zinc-500">Mídia de Alta Eficiência</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                      <td className="py-2.5 px-6">└─ Despesas Gerais, Administrativas & Contabilidade (G&A)</td>
                      <td className="py-2.5 px-4 text-right font-mono">(R$ {(96000 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                      <td className="py-2.5 px-4 text-right">-3.8%</td>
                      <td className="py-2.5 px-4 text-center text-zinc-500">Fixas G&A</td>
                    </tr>

                    {/* EBITDA */}
                    <tr className="bg-lime-400/10 font-bold text-white border-y-2 border-lime-400/40">
                      <td className="py-3.5 px-4 text-lime-300 font-black">(=) EBITDA (LUCRO ANTES DE JUROS, IMPOSTOS E DEPRECIAÇÃO)</td>
                      <td className="py-3.5 px-4 text-right font-mono text-lime-400 text-base font-black">
                        R$ {(1359474 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </td>
                      <td className="py-3.5 px-4 text-right text-lime-400 font-black text-sm">54.1%</td>
                      <td className="py-3.5 px-4 text-center text-lime-400 font-black">★ Margem EBITDA 54,1%</td>
                    </tr>

                    {/* EBIT & LAIR */}
                    <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                      <td className="py-2.5 px-4 font-semibold text-zinc-300">(-) Depreciação e Amortização de Ativos Tecnológicos</td>
                      <td className="py-2.5 px-4 text-right font-mono">(R$ {(24000 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                      <td className="py-2.5 px-4 text-right">-1.0%</td>
                      <td className="py-2.5 px-4 text-center text-zinc-500">Amortização P&D</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/40 transition text-zinc-300 font-bold">
                      <td className="py-2.5 px-4">(=) EBIT (RESULTADO OPERACIONAL ANTES DOS IMPOSTOS)</td>
                      <td className="py-2.5 px-4 text-right font-mono text-white">R$ {(1335474 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                      <td className="py-2.5 px-4 text-right">53.1%</td>
                      <td className="py-2.5 px-4 text-center text-zinc-400">EBIT 53,1%</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                      <td className="py-2.5 px-4 font-semibold text-zinc-300">(+/-) Resultado Financeiro Líquido (Rendimentos de Caixa)</td>
                      <td className="py-2.5 px-4 text-right font-mono">R$ {(18400 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                      <td className="py-2.5 px-4 text-right">+0.7%</td>
                      <td className="py-2.5 px-4 text-center text-lime-400">Rendimento CDI</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/40 transition text-zinc-300 font-bold">
                      <td className="py-2.5 px-4">(=) LAIR (LUCRO ANTES DO IMPOSTO DE RENDA E CSLL)</td>
                      <td className="py-2.5 px-4 text-right font-mono text-white">R$ {(1353874 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                      <td className="py-2.5 px-4 text-right">53.9%</td>
                      <td className="py-2.5 px-4 text-center text-zinc-400">LAIR 53,9%</td>
                    </tr>

                    {/* IMPOSTO DE RENDA */}
                    <tr className="hover:bg-zinc-800/40 transition text-rose-300">
                      <td className="py-2.5 px-4">(-) IMPOSTO DE RENDA & CSLL (IRPJ / CSLL Lucro Presumido)</td>
                      <td className="py-2.5 px-4 text-right font-mono">(R$ {(203081 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                      <td className="py-2.5 px-4 text-right">-8.1%</td>
                      <td className="py-2.5 px-4 text-center text-rose-400">Tributação IRPJ/CSLL</td>
                    </tr>

                    {/* LUCRO LÍQUIDO */}
                    <tr className="bg-purple-900/40 font-bold text-white border-t-2 border-purple-500">
                      <td className="py-4 px-4 text-purple-200 font-black text-sm">(=) LUCRO LÍQUIDO DO EXERCÍCIO (NETFITS TECNOLOGIA S.A.)</td>
                      <td className="py-4 px-4 text-right font-mono text-lime-400 text-lg font-black">
                        R$ {(1150793 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </td>
                      <td className="py-4 px-4 text-right text-lime-400 font-black text-base">45.8%</td>
                      <td className="py-4 px-4 text-center text-lime-400 font-black">★ Margem Líquida 45,8%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
