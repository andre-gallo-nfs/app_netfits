import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useOperationalParams, o as operationalParamsStore } from "./operational-params-store-CIc3l6mH.mjs";
import { n as netfitsLogo } from "./router-aT13-6xB.mjs";
import { I as InstitutionalWebHeader } from "./InstitutionalWebHeader-DthzFWJ0.mjs";
import { m as ChartColumn, n as FileText, a as Award, o as Coins, p as SlidersVertical, q as Rss, S as ShoppingBag, A as Activity, h as Users, r as Handshake, s as Cpu, D as DollarSign, t as ShieldAlert, T as TrendingUp, u as RefreshCw, v as Layers, C as ChevronDown, w as Clock, x as Download, Z as Zap, y as Megaphone, z as MousePointerClick, k as Eye, I as Store, J as Tag, G as Gift, K as Truck, N as Star, O as ShoppingCart, Q as Funnel, R as RotateCcw, d as Sparkles, V as Save, j as ShieldCheck, Y as Percent, _ as UserCheck, $ as CircleCheck, g as Share2, a0 as ArrowUpRight, a1 as ArrowDownRight, a2 as ChevronLeft, a3 as ChevronRight } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, P as PieChart, a as Pie, C as Cell, T as Tooltip } from "../_libs/recharts.mjs";

import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";




import "../_libs/seroval-plugins.mjs";

import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/lodash.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
const TIME_PERIODS = [{
  id: "1h",
  label: "⏱️ Última Hora",
  shortLabel: "1 hora",
  factor: 0.035,
  desc: "Acumulado nos últimos 60 minutos"
}, {
  id: "today",
  label: "📅 No Dia (Hoje)",
  shortLabel: "Hoje",
  factor: 0.12,
  desc: "Acumulado no dia de hoje"
}, {
  id: "24h",
  label: "⏳ Últimas 24 Horas",
  shortLabel: "24h",
  factor: 0.15,
  desc: "Acumulado nas últimas 24 horas"
}, {
  id: "week",
  label: "🗓️ Esta Semana",
  shortLabel: "Semana",
  factor: 0.28,
  desc: "Acumulado na semana corrente"
}, {
  id: "7d",
  label: "📆 Últimos 7 Dias",
  shortLabel: "7 dias",
  factor: 0.3,
  desc: "Acumulado nos últimos 7 dias"
}, {
  id: "month",
  label: "📊 No Mês (Agosto)",
  shortLabel: "Mês",
  factor: 1,
  desc: "Acumulado no mês de referência"
}, {
  id: "year",
  label: "🚀 No Ano (2026)",
  shortLabel: "Ano",
  factor: 11.4,
  desc: "Acumulado no ano de 2026"
}];
const TAB_DEFINITIONS = [{
  id: "overview",
  label: "Visão Geral & Executivo",
  iconEmoji: "📊",
  icon: ChartColumn,
  category: "Consolidado"
}, {
  id: "xml",
  label: "Arquivos XML Contábeis",
  iconEmoji: "📑",
  icon: FileText,
  category: "Fiscal & Contabilidade"
}, {
  id: "associados",
  label: "Gestão de Associados",
  iconEmoji: "👑",
  icon: Award,
  category: "Influenciadores"
}, {
  id: "points",
  label: "Programa de Pontos",
  iconEmoji: "🪙",
  icon: Coins,
  category: "Fidelidade & Passivo"
}, {
  id: "params",
  label: "Parâmetros da Operação",
  iconEmoji: "⚙️",
  icon: SlidersVertical,
  category: "Regras Operacionais"
}, {
  id: "feed",
  label: "Feed & Conteúdo",
  iconEmoji: "📰",
  icon: Rss,
  category: "Mídias & Anúncios"
}, {
  id: "market",
  label: "Marketplace (Shop)",
  iconEmoji: "🛍️",
  icon: ShoppingBag,
  category: "Vendas & Sellers"
}, {
  id: "activities",
  label: "Atividades & Sensor",
  iconEmoji: "⚡",
  icon: Activity,
  category: "Engajamento"
}, {
  id: "users",
  label: "Base de Usuários",
  iconEmoji: "👥",
  icon: Users,
  category: "Comunidade"
}, {
  id: "partners",
  label: "Parceiros & Assessorias",
  iconEmoji: "🤝",
  icon: Handshake,
  category: "Ecossistema"
}, {
  id: "controls",
  label: "Controles & OPEX TI",
  iconEmoji: "🛡️",
  icon: Cpu,
  category: "Governança"
}, {
  id: "results",
  label: "Resultados & DRE",
  iconEmoji: "📈",
  icon: DollarSign,
  category: "Demonstrações Financeiras"
}];
const ASSOCIADOS_DATABASE = [{
  id: "assoc_all",
  name: "Visão Consolidada (Todos os Associados)",
  handle: "18 Associados Ativos",
  category: "Geral",
  code: "TODOS",
  capturedUsers: 12450,
  retentionRatePct: 86.2,
  gmvBrl: 184e4,
  netfitsRevenueBrl: 276e3,
  commissionPctOfNetfitsRev: 30,
  commissionBrl: 82800,
  payoutStatus: "Pago",
  syntheticActions: {
    shopPurchases: 3410,
    postsViewed: 128400,
    videosWatched: 49200,
    shares: 23100,
    activities: 84500
  }
}, {
  id: "assoc_01",
  name: "André Gallo",
  handle: "@gallo.influencer",
  category: "Influenciador Master",
  code: "GALLO-NETFITS",
  isVerifiedSpecialist: true,
  specialistBadgeLabel: "Especialista Educação Física",
  capturedUsers: 1428,
  retentionRatePct: 87.4,
  gmvBrl: 184920,
  netfitsRevenueBrl: 27738,
  commissionPctOfNetfitsRev: 30,
  commissionBrl: 8321.4,
  payoutStatus: "Pendente",
  syntheticActions: {
    shopPurchases: 342,
    postsViewed: 12840,
    videosWatched: 4920,
    shares: 2310,
    activities: 8450
  }
}, {
  id: "assoc_02",
  name: "Marina Duarte",
  handle: "@marina.fitness",
  category: "Embaixadora Corrida",
  code: "MARINA-RUN",
  isVerifiedSpecialist: false,
  specialistBadgeLabel: "Embaixadora Corrida",
  capturedUsers: 2850,
  retentionRatePct: 89.1,
  gmvBrl: 38e4,
  netfitsRevenueBrl: 57e3,
  commissionPctOfNetfitsRev: 30,
  commissionBrl: 17100,
  payoutStatus: "Pendente",
  syntheticActions: {
    shopPurchases: 780,
    postsViewed: 29400,
    videosWatched: 11200,
    shares: 5400,
    activities: 19800
  }
}, {
  id: "assoc_03",
  name: "Lucas Silva",
  handle: "@lucas.runner",
  category: "Atleta Elite Trail",
  code: "LUCAS-TRAIL",
  isVerifiedSpecialist: false,
  capturedUsers: 1920,
  retentionRatePct: 84.5,
  gmvBrl: 245e3,
  netfitsRevenueBrl: 36750,
  commissionPctOfNetfitsRev: 30,
  commissionBrl: 11025,
  payoutStatus: "Pago",
  syntheticActions: {
    shopPurchases: 490,
    postsViewed: 18900,
    videosWatched: 7400,
    shares: 3200,
    activities: 14200
  }
}, {
  id: "assoc_04",
  name: "Dra. Isabella Santos",
  handle: "@dra.isabella",
  category: "Especialista Médica",
  code: "DRA-ISABELLA",
  isVerifiedSpecialist: true,
  specialistBadgeLabel: "Dra. Nutrologia Esportiva",
  capturedUsers: 1150,
  retentionRatePct: 91.2,
  gmvBrl: 195e3,
  netfitsRevenueBrl: 29250,
  commissionPctOfNetfitsRev: 30,
  commissionBrl: 8775,
  payoutStatus: "Pago",
  syntheticActions: {
    shopPurchases: 410,
    postsViewed: 15200,
    videosWatched: 9800,
    shares: 2900,
    activities: 6900
  }
}, {
  id: "assoc_05",
  name: "Rafael Souza",
  handle: "@rafa.crossfit",
  category: "Head Coach Fitness",
  code: "RAFA-CROSS",
  isVerifiedSpecialist: true,
  specialistBadgeLabel: "Head Coach Fisiologia",
  capturedUsers: 890,
  retentionRatePct: 82,
  gmvBrl: 112e3,
  netfitsRevenueBrl: 16800,
  commissionPctOfNetfitsRev: 30,
  commissionBrl: 5040,
  payoutStatus: "Pendente",
  syntheticActions: {
    shopPurchases: 220,
    postsViewed: 9100,
    videosWatched: 3900,
    shares: 1600,
    activities: 6200
  }
}];
const SELLERS_MARKETPLACE_DATABASE = [{
  id: "seller_all",
  name: "Visão Geral (Consolidado Marketplace)",
  category: "Todos os Parceiros Credenciados",
  totalOrders: 7440,
  gmvBrl: 1849e3,
  takeRatePct: 15,
  netfitsRevenueBrl: 277350,
  averageTicketBrl: 248.5,
  nfsRedemptionRatePct: 42.5,
  nfsBurnedTotal: 368e4,
  fulfillmentSlaDays: 2.8,
  fulfillmentOnTimePct: 98.4,
  npsScore: 92,
  topProduct: "Tênis Asics Novablast 4 & Suplementos"
}, {
  id: "seller_centauro",
  name: "Centauro Oficial",
  category: "Calçados, Vestuário & Equipamentos",
  totalOrders: 2740,
  gmvBrl: 68e4,
  takeRatePct: 15,
  netfitsRevenueBrl: 102e3,
  averageTicketBrl: 248.17,
  nfsRedemptionRatePct: 44.2,
  nfsBurnedTotal: 142e4,
  fulfillmentSlaDays: 2.5,
  fulfillmentOnTimePct: 99.1,
  npsScore: 94,
  topProduct: "Tênis Asics Novablast 4 & Mizuno Wave"
}, {
  id: "seller_netshoes",
  name: "Netshoes Brasil",
  category: "Performance & Artigos Esportivos",
  totalOrders: 2180,
  gmvBrl: 54e4,
  takeRatePct: 15,
  netfitsRevenueBrl: 81e3,
  averageTicketBrl: 247.7,
  nfsRedemptionRatePct: 41.8,
  nfsBurnedTotal: 108e4,
  fulfillmentSlaDays: 2.9,
  fulfillmentOnTimePct: 97.8,
  npsScore: 90,
  topProduct: "Kit Camisetas Dri-FIT & Meias Técnicas"
}, {
  id: "seller_decathlon",
  name: "Decathlon",
  category: "Multi-Esportes, Ciclismo & Outdoor",
  totalOrders: 1120,
  gmvBrl: 28e4,
  takeRatePct: 14,
  netfitsRevenueBrl: 39200,
  averageTicketBrl: 250,
  nfsRedemptionRatePct: 39.5,
  nfsBurnedTotal: 54e4,
  fulfillmentSlaDays: 3.1,
  fulfillmentOnTimePct: 97.5,
  npsScore: 89,
  topProduct: "Mochila de Hidratação Kalenji & GPS"
}, {
  id: "seller_nike",
  name: "Nike Store Oficial",
  category: "Snkrs, Elite Running & Accessories",
  totalOrders: 820,
  gmvBrl: 245e3,
  takeRatePct: 16,
  netfitsRevenueBrl: 39200,
  averageTicketBrl: 298.78,
  nfsRedemptionRatePct: 46,
  nfsBurnedTotal: 48e4,
  fulfillmentSlaDays: 2.4,
  fulfillmentOnTimePct: 99.4,
  npsScore: 96,
  topProduct: "Nike Pegasus 41 & Vaporfly 3"
}, {
  id: "seller_garmin",
  name: "Garmin Brasil",
  category: "Smartwatches, GPS & Telemetria",
  totalOrders: 580,
  gmvBrl: 104e3,
  takeRatePct: 15,
  netfitsRevenueBrl: 15600,
  averageTicketBrl: 179.31,
  nfsRedemptionRatePct: 38,
  nfsBurnedTotal: 16e4,
  fulfillmentSlaDays: 2.2,
  fulfillmentOnTimePct: 99.8,
  npsScore: 97,
  topProduct: "Cinta Cardíaca HRM-Pro & Forerunner 265"
}];
const PARTNERS_DATABASE = [{
  id: "partner_all",
  name: "Todos os Parceiros & Assessorias (Consolidado)",
  category: "Visão Consolidada da Rede (28 Marcas)",
  iconEmoji: "🌐",
  status: "Ativo",
  contractTier: "Master Partner",
  gmvBrl: 1849e3,
  netfitsRevenueBrl: 277350,
  activeCampaigns: 42,
  npsScore: 94,
  conversionRatePct: 4.04,
  exclusiveCoupon: "NETFITS_NETWORK_30"
}, {
  id: "partner_centauro",
  name: "Centauro Esportes",
  category: "Varejo & Marketplace Esportivo",
  iconEmoji: "👟",
  status: "Ativo",
  contractTier: "Master Partner",
  gmvBrl: 54e4,
  netfitsRevenueBrl: 81e3,
  activeCampaigns: 12,
  npsScore: 96,
  conversionRatePct: 4.8,
  exclusiveCoupon: "CENTAURO_NFS15"
}, {
  id: "partner_decathlon",
  name: "Decathlon Brasil",
  category: "Equipamentos, Ciclismo & Outdoor",
  iconEmoji: "🚴",
  status: "Ativo",
  contractTier: "Master Partner",
  gmvBrl: 42e4,
  netfitsRevenueBrl: 63e3,
  activeCampaigns: 9,
  npsScore: 95,
  conversionRatePct: 4.2,
  exclusiveCoupon: "DECATHLON_NETFITS10"
}, {
  id: "partner_nike",
  name: "Nike Store Oficial",
  category: "Calçados & Vestuário de Alta Performance",
  iconEmoji: "🏃",
  status: "Ativo",
  contractTier: "Master Partner",
  gmvBrl: 38e4,
  netfitsRevenueBrl: 57e3,
  activeCampaigns: 6,
  npsScore: 98,
  conversionRatePct: 5.1,
  exclusiveCoupon: "NIKE_PROMO_NFS20"
}, {
  id: "partner_garmin",
  name: "Garmin Brasil",
  category: "Wearables, GPS & Telemetria",
  iconEmoji: "⌚",
  status: "Ativo",
  contractTier: "Master Partner",
  gmvBrl: 21e4,
  netfitsRevenueBrl: 31500,
  activeCampaigns: 4,
  npsScore: 97,
  conversionRatePct: 3.9,
  exclusiveCoupon: "GARMIN_CLUB_NFS"
}, {
  id: "partner_smartfit",
  name: "Smart Fit Academias",
  category: "Rede de Academias & Fitness",
  iconEmoji: "🏋️",
  status: "Ativo",
  contractTier: "Seller Credenciado",
  gmvBrl: 145e3,
  netfitsRevenueBrl: 21750,
  activeCampaigns: 5,
  npsScore: 92,
  conversionRatePct: 3.6,
  exclusiveCoupon: "SMARTFIT_NETFITS_VIP"
}, {
  id: "partner_liquidz",
  name: "Liquidz Hydration",
  category: "Suplementação & Hidratação",
  iconEmoji: "🥤",
  status: "Ativo",
  contractTier: "Seller Credenciado",
  gmvBrl: 84e3,
  netfitsRevenueBrl: 12600,
  activeCampaigns: 3,
  npsScore: 94,
  conversionRatePct: 4.5,
  exclusiveCoupon: "LIQUIDZ_HYDRATE15"
}, {
  id: "partner_fibios",
  name: "Clínica Fibios",
  category: "Medicina Esportiva & Nutrologia",
  iconEmoji: "🩺",
  status: "Ativo",
  contractTier: "Clínica Especialista",
  gmvBrl: 42e3,
  netfitsRevenueBrl: 6300,
  activeCampaigns: 2,
  npsScore: 99,
  conversionRatePct: 6.2,
  exclusiveCoupon: "FIBIOS_SAUDE_PURPLE"
}, {
  id: "partner_spotstudio",
  name: "Spot Studio Recovery",
  category: "Recovery & Crioterapia",
  iconEmoji: "🧊",
  status: "Ativo",
  contractTier: "Clínica Especialista",
  gmvBrl: 28e3,
  netfitsRevenueBrl: 4200,
  activeCampaigns: 1,
  npsScore: 96,
  conversionRatePct: 5.5,
  exclusiveCoupon: "RECOVERY_SPOT_NFS"
}, {
  id: "partner_bioritmo",
  name: "Bio Ritmo Assessorias",
  category: "Assessoria Esportiva & Maratona",
  iconEmoji: "🚩",
  status: "Ativo",
  contractTier: "Assessoria Oficial",
  gmvBrl: 56e3,
  netfitsRevenueBrl: 8400,
  activeCampaigns: 3,
  npsScore: 93,
  conversionRatePct: 4.1,
  exclusiveCoupon: "BIORITMO_RUN50"
}, {
  id: "partner_mpr",
  name: "MPR Run Assessorias",
  category: "Treinamento Personalizado de Corrida",
  iconEmoji: "🏃‍♂️",
  status: "Ativo",
  contractTier: "Assessoria Oficial",
  gmvBrl: 49e3,
  netfitsRevenueBrl: 7350,
  activeCampaigns: 2,
  npsScore: 95,
  conversionRatePct: 4.4,
  exclusiveCoupon: "MPRRUN_NETFITS2026"
}];
const TOP_FEED_CONTENTS = [{
  id: "post_01",
  title: "Guia Avançado de Hidratação para Maratonas",
  author: "Smart Fit & Liquidz",
  category: "Nutrição & Performance",
  viewsCount: 28400,
  clicksCount: 4120,
  sharesCount: 3890,
  nfsIssuedTotal: 189e3,
  revenueBrl: 42500
}, {
  id: "post_02",
  title: "Treino Intervalado HIIT de Alta Densidade",
  author: "Dra. Isabella Santos",
  category: "Fisiologia Esportiva",
  viewsCount: 22100,
  clicksCount: 3450,
  sharesCount: 2980,
  nfsIssuedTotal: 148e3,
  revenueBrl: 38e3
}, {
  id: "post_03",
  title: "Lançamento Exclusivo: Asics Novablast 4",
  author: "Centauro Oficial",
  category: "Anúncio / Equipamentos",
  viewsCount: 19800,
  clicksCount: 5120,
  sharesCount: 2450,
  nfsIssuedTotal: 162e3,
  revenueBrl: 68400
}, {
  id: "post_04",
  title: "Como Aumentar seu VO2 Max em 6 Semanas",
  author: "Lucas Silva (@lucas.runner)",
  category: "Treinamento Corrida",
  viewsCount: 17400,
  clicksCount: 2890,
  sharesCount: 2100,
  nfsIssuedTotal: 114e3,
  revenueBrl: 24500
}, {
  id: "post_05",
  title: "Smartwatches Garmin: Análise do Sensor HRM-Pro",
  author: "Garmin Brasil",
  category: "Tecnologia Esportiva",
  viewsCount: 14900,
  clicksCount: 3980,
  sharesCount: 1890,
  nfsIssuedTotal: 129e3,
  revenueBrl: 51200
}];
function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = reactExports.useState(true);
  const [adminUser, setAdminUser] = reactExports.useState("admin@netfits.com.br");
  const [adminPassword, setAdminPassword] = reactExports.useState("Admin@2026");
  const [activeTab, setActiveTab] = reactExports.useState("params");
  const [isLive, setIsLive] = reactExports.useState(true);
  const [lastUpdated, setLastUpdated] = reactExports.useState((/* @__PURE__ */ new Date()).toLocaleTimeString());
  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (!adminUser || !adminPassword) {
      toast.error("Informe seu e-mail de administrador e sua senha.");
      return;
    }
    setIsAuthenticated(true);
    toast.success("Acesso administrativo executivo concedido!");
  };
  const [selectedPeriod, setSelectedPeriod] = reactExports.useState("month");
  const currentPeriodObj = TIME_PERIODS.find((p) => p.id === selectedPeriod) || TIME_PERIODS[5];
  const currentTabObj = TAB_DEFINITIONS.find((t) => t.id === activeTab) || TAB_DEFINITIONS[0];
  const pf = currentPeriodObj.factor;
  const [feedPage, setFeedPage] = reactExports.useState(1);
  const [marketPage, setMarketPage] = reactExports.useState(1);
  const [associadosPage, setAssociadosPage] = reactExports.useState(1);
  const itemsPerPage = 3;
  const [associadosList, setAssociadosList] = reactExports.useState(ASSOCIADOS_DATABASE);
  const toggleSpecialistBadge = (id) => {
    setAssociadosList((prev) => prev.map((item) => {
      if (item.id === id) {
        const nextState = !item.isVerifiedSpecialist;
        toast.success(nextState ? `🟣 Selo Roxo de Verificado (Especialista Credenciado) ATIVADO para ${item.name}!` : `⚪ Selo Roxo de Verificado DESATIVADO para ${item.name}.`);
        return {
          ...item,
          isVerifiedSpecialist: nextState
        };
      }
      return item;
    }));
  };
  const [showNewAssociadoModal, setShowNewAssociadoModal] = reactExports.useState(false);
  const [newAssocName, setNewAssocName] = reactExports.useState("");
  const [newAssocEmail, setNewAssocEmail] = reactExports.useState("");
  const [newAssocPhone, setNewAssocPhone] = reactExports.useState("");
  const [newAssocHandle, setNewAssocHandle] = reactExports.useState("");
  const [newAssocSpecialty, setNewAssocSpecialty] = reactExports.useState("Médico / Nutrologia Esportiva");
  const [newAssocCity, setNewAssocCity] = reactExports.useState("São Paulo - SP");
  const [createdInviteLinks, setCreatedInviteLinks] = reactExports.useState(null);
  const handleCreateAssociadoByAdminSubmit = (e) => {
    e.preventDefault();
    if (!newAssocName.trim() || !newAssocEmail.trim()) {
      toast.error("Preencha ao menos o Nome e E-mail oficial do Associado.");
      return;
    }
    const cityPrefix = newAssocCity.slice(0, 2).toUpperCase() || "SP";
    const randomNum = Math.floor(100 + Math.random() * 900);
    const assocCode = `ASSOC-${cityPrefix}-${randomNum}`;
    const cleanHandle = newAssocHandle.trim() ? newAssocHandle.startsWith("@") ? newAssocHandle.trim() : `@${newAssocHandle.trim()}` : `@${newAssocName.toLowerCase().replace(/\s+/g, ".")}`;
    const appLink = `https://app-netfits.vercel.app/auth?ref=${assocCode}`;
    const portalLink = `https://app-netfits.vercel.app/associado?code=${assocCode}`;
    const newAssociadoItem = {
      id: `assoc_${Date.now()}`,
      name: newAssocName.trim(),
      handle: cleanHandle,
      category: newAssocSpecialty,
      referralCode: assocCode,
      exclusiveUrl: portalLink,
      capturedUsers: 0,
      activeUsers: 0,
      retentionRatePct: 100,
      gmvBrl: 0,
      netfitsRevenueBrl: 0,
      commissionBrl: 0,
      isVerifiedSpecialist: true
    };
    setAssociadosList([newAssociadoItem, ...associadosList]);
    setSelectedAssociadoId(newAssociadoItem.id);
    sharedSandboxStore.registerAssociado({
      fullName: newAssocName.trim(),
      email: newAssocEmail.trim(),
      phone: newAssocPhone.trim(),
      register: "CRM/CRN-ADMIN",
      specialty: newAssocSpecialty,
      city: newAssocCity
    });
    setCreatedInviteLinks({
      associadoName: newAssocName.trim(),
      associadoCode: assocCode,
      appLink,
      portalLink,
      email: newAssocEmail.trim(),
      phone: newAssocPhone.trim()
    });
    setNewAssocName("");
    setNewAssocEmail("");
    setNewAssocPhone("");
    setNewAssocHandle("");
    setShowNewAssociadoModal(false);
    toast.success(`🎉 Associado "${newAssocName}" cadastrado pelo Time Admin! Código: ${assocCode}`);
  };
  const [selectedAssociadoId, setSelectedAssociadoId] = reactExports.useState("assoc_all");
  const selectedAssociado = associadosList.find((a) => a.id === selectedAssociadoId) || associadosList[0];
  const [selectedSellerId, setSelectedSellerId] = reactExports.useState("seller_all");
  const selectedSeller = SELLERS_MARKETPLACE_DATABASE.find((s) => s.id === selectedSellerId) || SELLERS_MARKETPLACE_DATABASE[0];
  const [selectedPartnerId, setSelectedPartnerId] = reactExports.useState("partner_all");
  const selectedPartner = PARTNERS_DATABASE.find((p) => p.id === selectedPartnerId) || PARTNERS_DATABASE[0];
  const [partnersPage, setPartnersPage] = reactExports.useState(1);
  const [drePhase, setDrePhase] = reactExports.useState("fase1");
  const [showPitchDeckModal, setShowPitchDeckModal] = reactExports.useState(false);
  const [pitchSlide, setPitchSlide] = reactExports.useState(1);
  const storedParams = useOperationalParams();
  const [operationalParams, setOperationalParams] = reactExports.useState(storedParams);
  reactExports.useEffect(() => {
    setOperationalParams(storedParams);
  }, [storedParams]);
  const feedMetrics = {
    totalAds: Math.max(1, Math.round(142 * Math.min(1, pf * 1.5))),
    totalAdvertisers: 28,
    adsPerAdvertiser: 5.07,
    totalAdRevenueBrl: 384500 * pf,
    revenuePerAdBrl: 2707.74,
    totalClicks: Math.round(184200 * pf),
    clicksPerPost: 14.34,
    viewsPerPost: 1e3,
    totalFeedNfsIssued: Math.round(1284e3 * pf),
    nfsIssuedForClicks: Math.round(736800 * pf),
    nfsIssuedForViews: Math.round(547200 * pf)
  };
  const handleSaveParams = (e) => {
    e.preventDefault();
    operationalParamsStore.updateParams(operationalParams);
    toast.success("🎉 Parâmetros operacionais salvos e sincronizados em tempo real com o Painel do Associado, Feed, Shop e Wallet!");
  };
  const handleResetParams = () => {
    operationalParamsStore.resetParams();
    toast.info("🔄 Parâmetros operacionais restaurados para os valores padrão do Business Plan.");
  };
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      if (isLive) {
        setLastUpdated((/* @__PURE__ */ new Date()).toLocaleTimeString());
      }
    }, 4e3);
    return () => clearInterval(interval);
  }, [isLive]);
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-center items-center px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-zinc-900 border border-purple-500/40 rounded-3xl p-8 shadow-2xl space-y-6 text-left animate-in fade-in zoom-in-95", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-lime-400 p-0.5 mx-auto shadow-xl mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-zinc-950 rounded-[14px] grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "size-7 text-lime-400" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-black text-white tracking-tight", children: "Acesso Restrito — Netfits ADMIN" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "Autenticação obrigatória para acesso às métricas executivas e parâmetros da operação." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAdminLogin, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-zinc-300", children: "E-mail Administrativo *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: adminUser, onChange: (e) => setAdminUser(e.target.value), placeholder: "admin@netfits.com.br", className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-purple-600", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-zinc-300", children: "Senha Master *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: adminPassword, onChange: (e) => setAdminPassword(e.target.value), placeholder: "••••••••••••", className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-purple-600", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full py-3.5 rounded-xl font-bold text-xs bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 active:scale-98", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "size-4 text-lime-400" }),
            "Autenticar Acesso Executivo"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/80 p-3 rounded-2xl border border-zinc-800 text-[11px] text-zinc-400 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "🔒 Credenciais de Teste Admin:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-zinc-300 mt-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "admin@netfits.com.br" }),
            " | ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Admin@2026" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto pt-3 flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none", children: TAB_DEFINITIONS.map((tab) => {
        const isActive = activeTab === tab.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          setActiveTab(tab.id);
          toast.info(`Navegando para: ${tab.label}`);
        }, className: `px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${isActive ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30 ring-1 ring-purple-400" : "bg-zinc-950 text-zinc-400 border border-zinc-800 hover:bg-zinc-800 hover:text-zinc-200"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tab.iconEmoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tab.label })
        ] }, tab.id);
      }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen max-w-full overflow-x-hidden bg-zinc-950 text-zinc-100 font-sans pb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(InstitutionalWebHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 bg-zinc-900 border-b border-zinc-800 px-4 py-3 flex items-center justify-between flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-lg bg-zinc-900 border border-purple-500/30 grid place-items-center p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: netfitsLogo, alt: "Netfits", className: "h-full w-auto object-contain" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-extrabold tracking-tight text-lg text-white", children: [
            "Netfits ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime-400 text-xs uppercase tracking-widest font-mono", children: "ADMIN" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline-block text-xs bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded-full border border-zinc-700", children: "Painel Executivo v2.0" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `size-2 rounded-full ${isLive ? "bg-lime-400 animate-pulse" : "bg-zinc-500"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-zinc-300", children: isLive ? "REALTIME ON" : "PAUSADO" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-zinc-500", children: [
            "• ",
            lastUpdated
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          setShowPitchDeckModal(true);
          toast.info("Apresentação de Investidores (Pitch Deck Seed/Series A) aberta!");
        }, className: "px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-purple-600/30 flex items-center gap-2 transition cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "size-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🚀 Pitch Deck Investidores" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setIsLive((v) => !v);
          toast.info(isLive ? "Atualização realtime pausada" : "Realtime reativado!");
        }, className: "p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors", title: "Alternar modo Realtime", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `size-4 ${isLive ? "animate-spin" : ""}` }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-zinc-900 border-b border-zinc-800 px-4 py-3.5 sticky top-[57px] z-30 shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-2 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs font-extrabold text-zinc-300 flex items-center gap-1.5 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "size-4 text-purple-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Seção Executiva:" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: activeTab, onChange: (e) => {
            const nextTab = e.target.value;
            setActiveTab(nextTab);
            const tabObj = TAB_DEFINITIONS.find((t) => t.id === nextTab);
            toast.info(`Navegando para: ${tabObj?.label || nextTab}`);
          }, className: "w-full bg-zinc-950 text-white font-extrabold text-xs rounded-xl px-3.5 py-2.5 border border-zinc-700 hover:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 appearance-none cursor-pointer pr-10 shadow-inner", children: TAB_DEFINITIONS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: tab.id, className: "bg-zinc-900 text-white font-medium py-1", children: [
            tab.iconEmoji,
            " ",
            tab.label,
            " — [",
            tab.category,
            "]"
          ] }, tab.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-2 flex-1 md:justify-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs font-extrabold text-zinc-300 flex items-center gap-1.5 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-4 text-lime-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Período Acumulado:" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: selectedPeriod, onChange: (e) => {
            const nextPeriod = e.target.value;
            setSelectedPeriod(nextPeriod);
            const periodObj = TIME_PERIODS.find((p) => p.id === nextPeriod);
            toast.info(`Período alterado para: ${periodObj?.label}`);
          }, className: "w-full bg-zinc-950 text-lime-400 font-extrabold text-xs rounded-xl px-3.5 py-2.5 border border-zinc-700 hover:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/50 appearance-none cursor-pointer pr-10 shadow-inner", children: TIME_PERIODS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: p.id, className: "bg-zinc-900 text-white font-medium py-1", children: [
            p.label,
            " (",
            p.desc,
            ")"
          ] }, p.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center gap-2 text-xs font-mono bg-zinc-950 px-3.5 py-2 rounded-xl border border-zinc-800 shrink-0 shadow-inner", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-purple-400 font-bold", children: [
          currentTabObj?.iconEmoji,
          " ",
          currentTabObj?.label
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-600", children: "›" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime-400 font-bold", children: currentPeriodObj.shortLabel })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "p-4 sm:p-6 max-w-7xl mx-auto w-full space-y-6 overflow-x-hidden", children: [
      activeTab === "xml" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-950/60 via-zinc-900 to-zinc-950 border border-purple-500/30 rounded-3xl p-6 shadow-2xl space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-lime-400 bg-lime-400/10 px-2.5 py-1 rounded-full border border-lime-400/20", children: "Integração Fiscal & Contábil Oficial" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xl font-extrabold text-white mt-1 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-6 text-purple-400" }),
            "Exportação de Arquivos XML para o Escritório de Contabilidade"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-300", children: "Pacotes de arquivos XML padronizados (NFS-e ABRASF v2.04, Ledger de Solvência de Pontos nfs e Fechamento Mensal SPED Consolidado)." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/80 border border-zinc-800 rounded-2xl p-5 space-y-4 flex flex-col justify-between hover:border-purple-500/40 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded", children: "NFS-e ABRASF v2.04" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-sm font-bold text-white pt-1", children: "Take-Rate Marketplace (8%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "XML de Nota Fiscal de Serviços de intermediação de vendas do Netfits Shop." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/docs/xml_contabilidade/xml_nfse_take_rate_marketplace.xml", download: "xml_nfse_take_rate_marketplace.xml", className: "w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-4" }),
              "Baixar XML Take-Rate"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/80 border border-zinc-800 rounded-2xl p-5 space-y-4 flex flex-col justify-between hover:border-lime-500/40 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider text-lime-400 bg-lime-400/10 px-2 py-0.5 rounded", children: "NFS-e ABRASF v2.04" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-sm font-bold text-white pt-1", children: "Serviços / Eventos Parceiros" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "XML de taxa de intermediação por contratação por evento (sem mensalidade)." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/docs/xml_contabilidade/xml_nfse_servicos_eventos.xml", download: "xml_nfse_servicos_eventos.xml", className: "w-full py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-4" }),
              "Baixar XML Serviços"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/80 border border-zinc-800 rounded-2xl p-5 space-y-4 flex flex-col justify-between hover:border-cyan-500/40 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded", children: "Ledger Audit XML" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-sm font-bold text-white pt-1", children: "Solvência Atuarial nfs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "Extrato auditável do passivo de pontos (reserva R$ 0,01/ponto e expiração FEFO)." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/docs/xml_contabilidade/xml_ledger_pontos_solvencia.xml", download: "xml_ledger_pontos_solvencia.xml", className: "w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-4" }),
              "Baixar XML Ledger"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/80 border border-zinc-800 rounded-2xl p-5 space-y-4 flex flex-col justify-between hover:border-amber-500/40 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded", children: "Fechamento SPED" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-sm font-bold text-white pt-1", children: "Fechamento Mensal Consolidado" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "Integração direta com Domínio, Contmatic, Alterdata e Totvs." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/docs/xml_contabilidade/xml_fechamento_mensal_contabil.xml", download: "xml_fechamento_mensal_contabil.xml", className: "w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-4" }),
              "Baixar Fechamento XML"
            ] })
          ] })
        ] })
      ] }) }),
      activeTab === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-950/80 via-zinc-900 to-zinc-950 border border-purple-500/40 rounded-3xl p-5 shadow-xl flex flex-col justify-between space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-lime-400 bg-lime-400/10 px-2.5 py-0.5 rounded-full border border-lime-400/20", children: "Integração Fiscal & Contábil" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-base font-extrabold text-white flex items-center gap-2 pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-5 text-purple-400" }),
                "Arquivos XML para Contabilidade"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "NFS-e ABRASF v2.04 (Take-Rate e Serviços por Evento), Extrato Ledger de Solvência de Pontos e Fechamento SPED." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("xml"), className: "w-full py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-lg shadow-purple-600/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-4" }),
              "Abrir Central de XMLs →"
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-lime-950/60 via-zinc-900 to-zinc-950 border border-lime-500/40 rounded-3xl p-5 shadow-xl flex flex-col justify-between space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-lime-400 bg-lime-400/10 px-2.5 py-0.5 rounded-full border border-lime-400/20", children: "FinOps Implantação Ativa (-51,4%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-base font-extrabold text-white flex items-center gap-2 pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "size-5 text-lime-400" }),
                "Custos de Nuvem Otimizados: R$ 23.500/mês"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-300", children: [
                "Redução de R$ 56.000 para R$ 23.500/mês (Cloud Run CUDs + PgBouncer + FCM Push + OpenTelemetry Sampling), gerando ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-lime-400", children: "+R$ 294.000,00/ano de EBITDA adicional" }),
                "."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/docs/plano_otimizacao_custos_finops_netfits.md", target: "_blank", className: "w-full py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-zinc-950 font-extrabold text-xs flex items-center justify-center gap-1.5 transition shadow-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-4" }),
              "Ver Plano FinOps Completo"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Usuários Ativos (DAU/MAU)", value: Math.round(48290 * Math.min(1, pf * 1.2)).toLocaleString("pt-BR"), change: "+14.2%", positive: true, icon: Users, subtext: "Atletas em atividade frequente", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "NFS Emitidos no Período", value: Math.round(1482e3 * pf).toLocaleString("pt-BR"), change: "+8.9%", positive: true, icon: Zap, subtext: "Pontos distribuídos por hábitos", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "GMV Marketplace (Shop)", value: `R$ ${(184900 * pf).toLocaleString("pt-BR", {
            minimumFractionDigits: 2
          })}`, change: "+22.5%", positive: true, icon: ShoppingBag, subtext: "Resgates via nfs: 42%", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Captação via Associados", value: `${Math.round(14820 * pf).toLocaleString("pt-BR")} novos`, change: "+31.0%", positive: true, icon: Award, subtext: "Associados VIP ativos", periodBadge: currentPeriodObj.shortLabel })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-purple-500/30 rounded-3xl p-6 shadow-xl space-y-6 bg-gradient-to-r from-purple-950/40 via-zinc-900 to-zinc-900", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-zinc-800 pb-4 flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-lime-400", children: "Acompanhamento Tático — Business Plan Netfits v2.0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-extrabold text-white flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🎯 Painel de OKRs & Objetivos Estratégicos do Negócio" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-lime-400/20 text-lime-300 border border-lime-400/30 px-2 py-0.5 rounded-full font-mono", children: "100% On-Track (Etapa 1)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-xl border border-zinc-800", children: [
              "Janela: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: currentPeriodObj.label })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-5 rounded-2xl border border-zinc-800 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-purple-300 uppercase tracking-wider", children: "OKR 1: Tração, Aquisição & Engajamento de Atletas" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-lime-400/20 text-lime-300 font-extrabold px-2 py-0.5 rounded-full border border-lime-400/30", children: "Superado 🚀" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "Objetivo: Consolidar a plataforma líder de longevidade e economia de benefícios esportivos." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2 border-t border-zinc-900", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-medium mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "KR 1.1 Base Total de Atletas (Meta: 1.000.000)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime-400 font-mono font-bold", children: "1.245.000 (124.5%)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full bg-zinc-900 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-to-r from-purple-500 to-lime-400 w-full" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-medium mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "KR 1.2 Engajamento Ativo MAU (Meta: >50%)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime-400 font-mono font-bold", children: "620.000 (50.0%)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full bg-zinc-900 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-lime-400 w-[100%]" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-medium mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "KR 1.3 Retenção de 90 dias (Meta: >80%)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime-400 font-mono font-bold", children: "86.2% (Superou)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full bg-zinc-900 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-purple-500 w-[100%]" }) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-5 rounded-2xl border border-zinc-800 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-purple-300 uppercase tracking-wider", children: "OKR 2: Rede de ASSOCIADOS VIP & Eficiência de CAC" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-lime-400/20 text-lime-300 font-extrabold px-2 py-0.5 rounded-full border border-lime-400/30", children: "No Alvo ✅" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "Objetivo: Transformar influenciadores na principal alavanca orgânica de baixíssimo CAC." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2 border-t border-zinc-900", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-medium mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "KR 2.1 Captação via Associados (Meta: >70%)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime-400 font-mono font-bold", children: "78.4% da base" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full bg-zinc-900 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-lime-400 w-[100%]" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-medium mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "KR 2.2 Rede Credenciada Master (Meta: 20)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-300 font-mono font-bold", children: "18 Ativos (90%)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full bg-zinc-900 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-purple-500 w-[90%]" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-medium mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "KR 2.3 CAC Médio Orgânico (Meta: <R$ 2,00)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime-400 font-mono font-bold", children: "R$ 1,42 / usuário" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full bg-zinc-900 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-lime-400 w-[100%]" }) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-5 rounded-2xl border border-zinc-800 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-purple-300 uppercase tracking-wider", children: "OKR 3: GMV do Marketplace & Utilização de nfs" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-lime-400/20 text-lime-300 font-extrabold px-2 py-0.5 rounded-full border border-lime-400/30", children: "Superado 🚀" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "Objetivo: Construir ecossistema transacional curado com alta frequência de compras e resgates." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2 border-t border-zinc-900", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-medium mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "KR 3.1 GMV Shopping (Meta: R$ 1.500.000)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime-400 font-mono font-bold", children: "R$ 1.849.000 (123.2%)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full bg-zinc-900 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-to-r from-purple-500 to-lime-400 w-full" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-medium mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "KR 3.2 Taxa de Resgate com nfs (Meta: >80%)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime-400 font-mono font-bold", children: "88.0% Resgatados" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full bg-zinc-900 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-lime-400 w-[100%]" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-medium mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "KR 3.3 Conversão de Cliques do Feed (Meta: >3.5%)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-300 font-mono font-bold", children: "4.04% Conversão" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full bg-zinc-900 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-purple-500 w-[100%]" }) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-5 rounded-2xl border border-zinc-800 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-purple-300 uppercase tracking-wider", children: "OKR 4: Otimização de TI & Margens EBITDA/Líquida" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-lime-400/20 text-lime-300 font-extrabold px-2 py-0.5 rounded-full border border-lime-400/30", children: "No Alvo ✅" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "Objetivo: Escalar a nuvem/IA com ultra-eficiência operacional e alta rentabilidade." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2 border-t border-zinc-900", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-medium mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "KR 4.1 Economia de Custos TI (Meta: >50%)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime-400 font-mono font-bold", children: "-61.5% Redução" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full bg-zinc-900 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-lime-400 w-[100%]" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-medium mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "KR 4.2 Margem EBITDA Anual (Meta: >50%)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime-400 font-mono font-bold", children: "54.1% EBITDA" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full bg-zinc-900 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-lime-400 w-[100%]" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-medium mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "KR 4.3 Margem Líquida DRE (Meta: >40%)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-300 font-mono font-bold", children: "45.8% Líquida" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full bg-zinc-900 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-purple-500 w-[100%]" }) })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      activeTab === "feed" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-extrabold uppercase tracking-wider text-lime-400", children: [
              "Planejamento Estratégico & Mídia (",
              currentPeriodObj.shortLabel,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white", children: "Indicadores de Feed, Anúncios & Emissão de Pontos" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toast.success(`Relatório do Feed (${currentPeriodObj.shortLabel}) exportado!`), className: "px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 self-start md:self-auto shadow-md transition cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-3.5" }),
            "Exportar Relatório"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Quantidade de Anúncios", value: feedMetrics.totalAds.toString(), change: "+18 novos", positive: true, icon: Megaphone, subtext: "Anúncios ativos no feed", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Quantidade de Anunciantes", value: feedMetrics.totalAdvertisers.toString(), change: "+4 este mês", positive: true, icon: BuildingIcon, subtext: "Marcas patrocinadoras", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Anúncios por Anunciante", value: feedMetrics.adsPerAdvertiser.toFixed(2), change: "Média 5.0", positive: true, icon: ChartColumn, subtext: "Peças por marca", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Receita Total de Anúncios", value: `R$ ${feedMetrics.totalAdRevenueBrl.toLocaleString("pt-BR", {
            minimumFractionDigits: 2
          })}`, change: "+24.5%", positive: true, icon: DollarSign, subtext: "Faturamento bruto com mídias", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Receita por Anúncio", value: `R$ ${feedMetrics.revenuePerAdBrl.toLocaleString("pt-BR", {
            minimumFractionDigits: 2
          })}`, change: "+6.2%", positive: true, icon: Coins, subtext: "Ticket médio por peça", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Quantidade Total de Clicks", value: feedMetrics.totalClicks.toLocaleString("pt-BR"), change: "+31.0%", positive: true, icon: MousePointerClick, subtext: "Cliques acumulados em links", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Clicks por Postagem", value: `${feedMetrics.clicksPerPost.toFixed(2)} clicks`, change: "+12.4%", positive: true, icon: TrendingUp, subtext: "Taxa média de engajamento", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Views por Postagem", value: `${feedMetrics.viewsPerPost.toLocaleString("pt-BR")} views`, change: "+15.0%", positive: true, icon: Eye, subtext: "Visualizações médias por post", periodBadge: currentPeriodObj.shortLabel })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-950 via-zinc-900 to-zinc-900 border border-purple-500/30 rounded-3xl p-6 shadow-xl space-y-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-zinc-800 pb-3 flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-lime-400", children: [
                "Balanço Monetário do Feed (",
                currentPeriodObj.shortLabel,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold text-white", children: "Distribuição de Netfits Emitidos no Período" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono font-bold text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20", children: [
              "Total: ",
              feedMetrics.totalFeedNfsIssued.toLocaleString("pt-BR"),
              " nfs"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-zinc-400 font-semibold", children: [
                "Total NFS Emitidos (",
                currentPeriodObj.shortLabel,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-white", children: [
                feedMetrics.totalFeedNfsIssued.toLocaleString("pt-BR"),
                " nfs"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-purple-400 font-semibold", children: "Economia total no período" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-zinc-400 font-semibold", children: "NFS Emitidos para Clicks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-lime-400", children: [
                feedMetrics.nfsIssuedForClicks.toLocaleString("pt-BR"),
                " nfs"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-lime-400 font-semibold", children: [
                (feedMetrics.nfsIssuedForClicks / Math.max(1, feedMetrics.totalFeedNfsIssued) * 100).toFixed(1),
                "% do total"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-zinc-400 font-semibold", children: "NFS Emitidos para Views" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-purple-400", children: [
                feedMetrics.nfsIssuedForViews.toLocaleString("pt-BR"),
                " nfs"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-purple-300 font-semibold", children: [
                (feedMetrics.nfsIssuedForViews / Math.max(1, feedMetrics.totalFeedNfsIssued) * 100).toFixed(1),
                "% do total"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-base font-bold text-white", children: [
                "Ranking de Conteúdos (",
                currentPeriodObj.shortLabel,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "Tabela com paginação adaptada para ajuste lateral perfeito" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-lime-400 font-bold bg-lime-400/10 px-3 py-1 rounded-xl border border-lime-400/20", children: [
              "Página ",
              feedPage,
              " de ",
              Math.ceil(TOP_FEED_CONTENTS.length / itemsPerPage)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto w-full max-w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs text-zinc-300 min-w-[640px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4", children: "Título do Conteúdo" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4", children: "Autor / Anunciante" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "py-3 px-4 text-right", children: [
                "Views (",
                currentPeriodObj.shortLabel,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "Clicks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "Compartilhamentos" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "NFS Emitidos" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "Receita (R$)" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-zinc-800 font-medium", children: TOP_FEED_CONTENTS.slice((feedPage - 1) * itemsPerPage, feedPage * itemsPerPage).map((c, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-white", children: [
                  "#",
                  (feedPage - 1) * itemsPerPage + idx + 1,
                  " ",
                  c.title
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400", children: c.category })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-bold text-zinc-300", children: c.author }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right font-bold text-white", children: Math.round(c.viewsCount * pf).toLocaleString("pt-BR") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right font-bold text-lime-400", children: Math.round(c.clicksCount * pf).toLocaleString("pt-BR") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right text-purple-300 font-bold", children: Math.round(c.sharesCount * pf).toLocaleString("pt-BR") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right text-zinc-300 font-mono", children: [
                Math.round(c.nfsIssuedTotal * pf).toLocaleString("pt-BR"),
                " nfs"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-bold text-lime-400", children: [
                "R$ ",
                (c.revenueBrl * pf).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2
                })
              ] })
            ] }, c.id)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationControls, { currentPage: feedPage, totalPages: Math.ceil(TOP_FEED_CONTENTS.length / itemsPerPage), onPageChange: setFeedPage, totalItems: TOP_FEED_CONTENTS.length, itemsPerPage })
        ] })
      ] }),
      activeTab === "market" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-extrabold uppercase tracking-wider text-lime-400", children: [
              "Plano Estratégico de Marketplace (",
              currentPeriodObj.shortLabel,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white", children: "Indicadores de Acompanhamento do Shopping" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-zinc-950 p-2 rounded-2xl border border-zinc-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Store, { className: "size-4 text-lime-400 ml-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: selectedSellerId, onChange: (e) => setSelectedSellerId(e.target.value), className: "bg-transparent text-xs font-bold text-white focus:outline-none pr-4 cursor-pointer", children: SELLERS_MARKETPLACE_DATABASE.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s.id, className: "bg-zinc-900 text-white", children: s.name }, s.id)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "GMV Bruto das Vendas", value: `R$ ${(selectedSeller.gmvBrl * pf).toLocaleString("pt-BR", {
            minimumFractionDigits: 2
          })}`, change: "+22.4%", positive: true, icon: ShoppingBag, subtext: "Volume negociado", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Receita Netfits (Take-Rate)", value: `R$ ${(selectedSeller.netfitsRevenueBrl * pf).toLocaleString("pt-BR", {
            minimumFractionDigits: 2
          })}`, change: "+22.4%", positive: true, icon: Coins, subtext: `Comissão: ${selectedSeller.takeRatePct}%`, periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Ticket Médio por Pedido", value: `R$ ${selectedSeller.averageTicketBrl.toLocaleString("pt-BR", {
            minimumFractionDigits: 2
          })}`, change: "+5.8%", positive: true, icon: Tag, subtext: "Média por carrinho", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Taxa de Resgate com NFS", value: `${selectedSeller.nfsRedemptionRatePct}%`, change: "+4.2%", positive: true, icon: Gift, subtext: "Vendas com nfs", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Volume de NFS Queimados", value: `${Math.round(selectedSeller.nfsBurnedTotal * pf).toLocaleString("pt-BR")} nfs`, change: "+18.5%", positive: true, icon: Zap, subtext: "Pontos resgatados", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Fulfillment SLA & Prazo", value: `${selectedSeller.fulfillmentSlaDays} dias`, change: "98.4% no prazo", positive: true, icon: Truck, subtext: `Entrega no prazo: ${selectedSeller.fulfillmentOnTimePct}%`, periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "NPS / Satisfação Atleta", value: `${selectedSeller.npsScore} / 100`, change: "Excelência", positive: true, icon: Star, subtext: "Avaliação pós-entrega", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Pedidos Concluídos", value: Math.round(selectedSeller.totalOrders * pf).toLocaleString("pt-BR"), change: "+14.2%", positive: true, icon: ShoppingCart, subtext: `Produto top: ${selectedSeller.topProduct.split("&")[0]}`, periodBadge: currentPeriodObj.shortLabel })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold text-white", children: "Desempenho Estratégico Comparativo por Seller" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "Tabela de fulfillment com paginação ajustada" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-lime-400 font-bold bg-lime-400/10 px-3 py-1 rounded-xl border border-lime-400/20", children: [
              "Página ",
              marketPage,
              " de ",
              Math.ceil(SELLERS_MARKETPLACE_DATABASE.filter((s) => s.id !== "seller_all").length / itemsPerPage)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto w-full max-w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs text-zinc-300 min-w-[640px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4", children: "Seller Credenciado" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "Pedidos" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "GMV Bruto (R$)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "Take-Rate Netfits" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "Ticket Médio" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "Resgate NFS %" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-center", children: "Fulfillment SLA" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-center", children: "NPS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-center", children: "Ação" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-zinc-800 font-medium", children: SELLERS_MARKETPLACE_DATABASE.filter((s) => s.id !== "seller_all").slice((marketPage - 1) * itemsPerPage, marketPage * itemsPerPage).map((seller) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-white", children: seller.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400", children: seller.category })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right font-bold text-white", children: Math.round(seller.totalOrders * pf).toLocaleString("pt-BR") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-bold text-white", children: [
                "R$ ",
                (seller.gmvBrl * pf).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2
                })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right text-purple-400 font-bold", children: [
                "R$ ",
                (seller.netfitsRevenueBrl * pf).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2
                }),
                " (",
                seller.takeRatePct,
                "%)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right text-zinc-300", children: [
                "R$ ",
                seller.averageTicketBrl.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2
                })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-bold text-lime-400", children: [
                seller.nfsRedemptionRatePct,
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-center text-zinc-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
                  seller.fulfillmentSlaDays,
                  "d"
                ] }),
                " (",
                seller.fulfillmentOnTimePct,
                "%)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-lime-400/20 text-lime-400 border border-lime-400/30", children: [
                seller.npsScore,
                " / 100"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                setSelectedSellerId(seller.id);
                toast.success(`Filtrado o seller ${seller.name}`);
              }, className: "px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-[11px] font-bold text-zinc-200 border border-zinc-700", children: "Filtrar" }) })
            ] }, seller.id)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationControls, { currentPage: marketPage, totalPages: Math.ceil(SELLERS_MARKETPLACE_DATABASE.filter((s) => s.id !== "seller_all").length / itemsPerPage), onPageChange: setMarketPage, totalItems: SELLERS_MARKETPLACE_DATABASE.filter((s) => s.id !== "seller_all").length, itemsPerPage })
        ] })
      ] }),
      activeTab === "associados" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-extrabold uppercase tracking-wider text-lime-400", children: [
              "Desempenho de Influenciadores (",
              currentPeriodObj.shortLabel,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white", children: "Módulo de Acompanhamento das Carteiras de Associados" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setShowNewAssociadoModal(true), className: "px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-lg shadow-purple-600/20 transition active:scale-95", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "size-4" }),
              "➕ Cadastrar Novo Associado (Time Admin)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-zinc-950 p-2 rounded-2xl border border-zinc-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "size-4 text-purple-400 ml-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: selectedAssociadoId, onChange: (e) => setSelectedAssociadoId(e.target.value), className: "bg-transparent text-xs font-bold text-white focus:outline-none pr-4 cursor-pointer", children: associadosList.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: a.id, className: "bg-zinc-900 text-white", children: [
                a.name,
                " (",
                a.handle,
                ") ",
                a.isVerifiedSpecialist ? "🟣 Especialista" : ""
              ] }, a.id)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Tamanho da Carteira", value: Math.round(selectedAssociado.capturedUsers * Math.min(1, pf * 1.1)).toLocaleString("pt-BR"), change: "+12.4%", positive: true, icon: Users, subtext: `Retenção ativa: ${selectedAssociado.retentionRatePct}%`, periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "GMV do Shopping (R$)", value: `R$ ${(selectedAssociado.gmvBrl * pf).toLocaleString("pt-BR", {
            minimumFractionDigits: 2
          })}`, change: "+18.2%", positive: true, icon: ShoppingBag, subtext: "Vendas na carteira", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Receita Netfits (15% GMV)", value: `R$ ${(selectedAssociado.netfitsRevenueBrl * pf).toLocaleString("pt-BR", {
            minimumFractionDigits: 2
          })}`, change: "+18.2%", positive: true, icon: Coins, subtext: "Comissão bruta", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Comissão do Associado (30%)", value: `R$ ${(selectedAssociado.commissionBrl * pf).toLocaleString("pt-BR", {
            minimumFractionDigits: 2
          })}`, change: "+18.2%", positive: true, icon: DollarSign, subtext: "30% da receita Netfits", highlightColor: "border-lime-400 ring-1 ring-lime-400/20 bg-lime-400/5", periodBadge: currentPeriodObj.shortLabel })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold text-white", children: "Desempenho Comparativo dos Associados" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "Gerencie a carteira e ative o Selo Roxo de Especialista Credenciado" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-lime-400 font-bold bg-lime-400/10 px-3 py-1 rounded-xl border border-lime-400/20", children: [
              "Página ",
              associadosPage,
              " de ",
              Math.ceil(associadosList.filter((a) => a.id !== "assoc_all").length / itemsPerPage)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto w-full max-w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs text-zinc-300 min-w-[720px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4", children: "Associado / Influenciador" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4", children: "Código Unique" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-center", children: "Selo Especialista" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "Carteira (Atletas)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "GMV Gerado (R$)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "Receita Netfits (15%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "Comissão R$ (30%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-center", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-center", children: "Ação" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-zinc-800 font-medium", children: associadosList.filter((a) => a.id !== "assoc_all").slice((associadosPage - 1) * itemsPerPage, associadosPage * itemsPerPage).map((assoc) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-white flex items-center gap-1.5", children: [
                  assoc.name,
                  assoc.isVerifiedSpecialist && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-extrabold bg-purple-600/30 text-purple-300 border border-purple-500/50 px-1.5 py-0.5 rounded-full flex items-center gap-0.5", children: "🟣 Especialista" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-purple-400", children: assoc.handle })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-mono text-zinc-400", children: assoc.code }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggleSpecialistBadge(assoc.id), className: `px-2.5 py-1 rounded-full text-[10px] font-extrabold flex items-center justify-center gap-1 transition mx-auto ${assoc.isVerifiedSpecialist ? "bg-purple-600/30 text-purple-300 border border-purple-500/50 hover:bg-purple-600/50 shadow-xs" : "bg-zinc-800 text-zinc-400 border border-zinc-700 hover:bg-purple-950 hover:text-purple-300 opacity-60 hover:opacity-100"}`, title: "Clique para alterar a concessão do Selo Roxo", children: assoc.isVerifiedSpecialist ? "🟣 Verificado" : "⚪ Ativar Selo" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right font-bold text-white", children: Math.round(assoc.capturedUsers * Math.min(1, pf * 1.1)).toLocaleString("pt-BR") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-bold text-white", children: [
                "R$ ",
                (assoc.gmvBrl * pf).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2
                })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-bold text-purple-300", children: [
                "R$ ",
                (assoc.netfitsRevenueBrl * pf).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2
                })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-bold text-lime-400", children: [
                "R$ ",
                (assoc.commissionBrl * pf).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2
                })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded-full text-[10px] font-extrabold ${assoc.payoutStatus === "Pago" ? "bg-lime-400/20 text-lime-400 border border-lime-400/30" : "bg-amber-500/20 text-amber-400 border border-amber-500/30"}`, children: assoc.payoutStatus }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                setSelectedAssociadoId(assoc.id);
                toast.success(`Filtrada carteira de ${assoc.name}`);
              }, className: "px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-[11px] font-bold text-zinc-200 border border-zinc-700", children: "Filtrar" }) })
            ] }, assoc.id)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationControls, { currentPage: associadosPage, totalPages: Math.ceil(ASSOCIADOS_DATABASE.filter((a) => a.id !== "assoc_all").length / itemsPerPage), onPageChange: setAssociadosPage, totalItems: ASSOCIADOS_DATABASE.filter((a) => a.id !== "assoc_all").length, itemsPerPage })
        ] })
      ] }),
      activeTab === "points" && (() => {
        const totalEmitidos = Math.round(1284e4 * pf);
        const totalResgatados = Math.round(2415e3 * pf);
        const totalExpirados = Math.round(1540800 * pf);
        const baldeValidos = totalEmitidos - totalResgatados - totalExpirados;
        const provisaoBrl = baldeValidos * (operationalParams.costPerProvisionedPointBrl ?? 8e-3);
        const emissaoBreakdown = [{
          key: "shop",
          label: "Cashback por Compras no Shopping",
          count: Math.round(412e4 * pf),
          pct: 32.1,
          icon: "🛍️",
          color: "#84cc16"
        }, {
          key: "referral",
          label: "Indicação de Amigos (Member Get Member)",
          count: Math.round(284e4 * pf),
          pct: 22.1,
          icon: "👥",
          color: "#7c3aed"
        }, {
          key: "views",
          label: "Visualização de Anúncios no Feed",
          count: Math.round(215e4 * pf),
          pct: 16.7,
          icon: "👁️",
          color: "#3b82f6"
        }, {
          key: "clicks",
          label: "Cliques em Conteúdos Patrocinados",
          count: Math.round(185e4 * pf),
          pct: 14.4,
          icon: "🖱️",
          color: "#e11d48"
        }, {
          key: "workouts",
          label: "Treinos & Atividades Físicas (GPS/Smart Fit)",
          count: Math.round(128e4 * pf),
          pct: 10,
          icon: "🏃",
          color: "#f59e0b"
        }, {
          key: "loyalty",
          label: "Vínculo com Programa de Fidelidade",
          count: Math.round(6e5 * pf),
          pct: 4.7,
          icon: "🤝",
          color: "#10b981"
        }];
        const resgateBreakdown = [{
          key: "shop",
          label: "Desconto em Compras no Marketplace Netfits",
          count: Math.round(118e4 * pf),
          pct: 48.9,
          icon: "🛒",
          color: "#84cc16"
        }, {
          key: "health",
          label: "Consultas Médicas & Especialistas (Fibios/Spot)",
          count: Math.round(54e4 * pf),
          pct: 22.4,
          icon: "🩺",
          color: "#7c3aed"
        }, {
          key: "gym",
          label: "Mensalidades & Passes em Academias (Smart Fit)",
          count: Math.round(42e4 * pf),
          pct: 17.4,
          icon: "🏋️",
          color: "#3b82f6"
        }, {
          key: "races",
          label: "Inscrições em Assessorias & Provas (MPR Run)",
          count: Math.round(275e3 * pf),
          pct: 11.3,
          icon: "🏃‍♂️",
          color: "#f59e0b"
        }];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-amber-950/60 via-zinc-900 to-zinc-900 border border-amber-500/30 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-extrabold uppercase tracking-wider text-amber-400", children: [
                "Módulo de Gestão do Programa de Pontos (",
                currentPeriodObj.shortLabel,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-white flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🪙 Balanço de Emissão, Resgate & Provisão Passiva do Programa nfs" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2.5 py-0.5 rounded-full font-mono font-bold", children: [
                  "Breakage: ",
                  operationalParams.targetBreakagePct,
                  "%"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 self-start md:self-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toast.success("Relatório de pontos exportado com sucesso!"), className: "px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-md flex items-center gap-2 transition cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-3.5" }),
              "Exportar Extrato (PDF)"
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-950/40 border border-purple-500/30 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-purple-600/20 text-purple-400 grid place-items-center shrink-0 border border-purple-500/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "size-5 text-lime-400" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold text-white", children: "Algoritmo de Resgate Justo ao Usuário (Regra FEFO)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold font-mono bg-lime-400/20 text-lime-400 border border-lime-400/30 px-2 py-0.5 rounded-full", children: "ATIVADO (100% dos Resgates)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-300 mt-0.5", children: [
                  "Garantia de Fidelidade: Resgates consomem prioritariamente os lotes de pontos com ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "data de expiração mais próxima (First-Expiring, First-Out)" }),
                  "."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-zinc-400 font-mono block", children: "Economia em Expirações" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold font-mono text-lime-400", children: "84,2% dos resgates salvam pontos" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Total Pontos Emitidos", value: `${totalEmitidos.toLocaleString("pt-BR")} nfs`, change: "+28.4%", positive: true, icon: Coins, subtext: "Cashback, feed e treinos", periodBadge: currentPeriodObj.shortLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Total Pontos Resgatados", value: `${totalResgatados.toLocaleString("pt-BR")} nfs`, change: "18.8% de resgate", positive: true, icon: Gift, subtext: "Shopping e parceiros", periodBadge: currentPeriodObj.shortLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Pontos Expirados", value: `${totalExpirados.toLocaleString("pt-BR")} nfs`, change: `${operationalParams.targetBreakagePct}% breakage`, positive: false, icon: RotateCcw, subtext: "Validade 24 meses", periodBadge: currentPeriodObj.shortLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Balde Final (Válidos)", value: `${baldeValidos.toLocaleString("pt-BR")} nfs`, change: "Em circulação", positive: true, icon: Sparkles, subtext: "Saldo ativo acumulado", highlightColor: "border-lime-400 ring-1 ring-lime-400/20 bg-lime-400/5", periodBadge: currentPeriodObj.shortLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Provisão Passivo (R$)", value: `R$ ${provisaoBrl.toLocaleString("pt-BR", {
              minimumFractionDigits: 2
            })}`, change: `CPP R$ ${operationalParams.costPerProvisionedPointBrl}`, positive: true, icon: ShieldAlert, subtext: "Retido na DRE", highlightColor: "border-purple-500/40 ring-1 ring-purple-500/20 bg-purple-950/20", periodBadge: currentPeriodObj.shortLabel })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between border-b border-zinc-800 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { className: "size-5 text-lime-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold text-white", children: "Estratificação de Emissão por Origem" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-400", children: [
                    "Total: ",
                    totalEmitidos.toLocaleString("pt-BR"),
                    " nfs emitidos"
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-12 gap-4 items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-5 h-48", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: emissaoBreakdown, dataKey: "count", nameKey: "label", cx: "50%", cy: "50%", innerRadius: 45, outerRadius: 65, paddingAngle: 3, children: emissaoBreakdown.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: item.color }, `cell-e-${idx}`)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (value) => [`${Number(value).toLocaleString("pt-BR")} nfs`, "Pontos"], contentStyle: {
                    backgroundColor: "#18181b",
                    borderColor: "#27272a",
                    borderRadius: "12px",
                    fontSize: "11px"
                  } })
                ] }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-7 space-y-2", children: emissaoBreakdown.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/80 p-2.5 rounded-xl border border-zinc-800 flex items-center justify-between text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0 pr-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base shrink-0", children: item.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-zinc-300 truncate", children: item.label })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-white block", children: [
                      item.count.toLocaleString("pt-BR"),
                      " nfs"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-lime-400 font-bold", children: [
                      item.pct,
                      "%"
                    ] })
                  ] })
                ] }, item.key)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between border-b border-zinc-800 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "size-5 text-purple-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold text-white", children: "Estratificação de Resgate por Destino" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-400", children: [
                    "Total: ",
                    totalResgatados.toLocaleString("pt-BR"),
                    " nfs resgatados"
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-12 gap-4 items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-5 h-48", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: resgateBreakdown, dataKey: "count", nameKey: "label", cx: "50%", cy: "50%", innerRadius: 45, outerRadius: 65, paddingAngle: 3, children: resgateBreakdown.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: item.color }, `cell-r-${idx}`)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (value) => [`${Number(value).toLocaleString("pt-BR")} nfs`, "Pontos"], contentStyle: {
                    backgroundColor: "#18181b",
                    borderColor: "#27272a",
                    borderRadius: "12px",
                    fontSize: "11px"
                  } })
                ] }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-7 space-y-2", children: resgateBreakdown.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/80 p-2.5 rounded-xl border border-zinc-800 flex items-center justify-between text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0 pr-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base shrink-0", children: item.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-zinc-300 truncate", children: item.label })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-white block", children: [
                      item.count.toLocaleString("pt-BR"),
                      " nfs"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-purple-400 font-bold", children: [
                      item.pct,
                      "%"
                    ] })
                  ] })
                ] }, item.key)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-950 via-zinc-900 to-zinc-900 border border-purple-500/40 rounded-3xl p-6 shadow-2xl space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-2xl bg-purple-600/20 text-purple-400 grid place-items-center border border-purple-500/30 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "size-6 text-lime-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-lime-400", children: "Balanço Financeiro de Passivo do Programa de Lealdade" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white", children: "Equação do Balde de Pontos & Valoração do Passivo" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/90 px-4 py-2 rounded-2xl border border-purple-500/30 text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-zinc-400 uppercase font-bold block", children: "Passivo Financeiro Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl font-black text-lime-400 font-mono", children: [
                  "R$ ",
                  provisaoBrl.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/80 p-4 rounded-2xl border border-zinc-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-zinc-400 uppercase font-bold", children: "1. Pontos Emitidos Válidos" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-black text-white font-mono mt-1", children: [
                  "+",
                  totalEmitidos.toLocaleString("pt-BR")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-zinc-500", children: "Acumulado no Período" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/80 p-4 rounded-2xl border border-zinc-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-zinc-400 uppercase font-bold", children: "2. Pontos Resgatados" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-black text-rose-400 font-mono mt-1", children: [
                  "-",
                  totalResgatados.toLocaleString("pt-BR")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-zinc-500", children: "Baixados em Benefícios" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/80 p-4 rounded-2xl border border-zinc-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-zinc-400 uppercase font-bold", children: "3. Pontos Expirados (Breakage)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-black text-amber-400 font-mono mt-1", children: [
                  "-",
                  totalExpirados.toLocaleString("pt-BR")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-zinc-500", children: "Baixados por Validade" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-lime-400/10 p-4 rounded-2xl border border-lime-400/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-lime-400 uppercase font-bold", children: "4. Balde Final em Circulação" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-black text-lime-400 font-mono mt-1", children: [
                  "=",
                  baldeValidos.toLocaleString("pt-BR")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-lime-300 font-semibold", children: "Pontos Válidos Ativos" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/90 p-4 rounded-2xl border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4 text-purple-400 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Custo Unitário da Provisão: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-white font-mono", children: [
                    "R$ ",
                    operationalParams.costPerProvisionedPointBrl,
                    " / nfs"
                  ] }),
                  " (Parametrizado via Admin)."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-lime-400 font-bold bg-lime-400/10 px-3 py-1 rounded-xl border border-lime-400/20 shrink-0", children: "✓ Sincronizado com a linha redutora da DRE" })
            ] })
          ] })
        ] });
      })(),
      activeTab === "params" && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSaveParams, className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-extrabold uppercase tracking-wider text-lime-400", children: "Configuração Global da Operação" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white", children: "Parâmetros Operacionais & Economia do Programa de Pontos" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 self-start md:self-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: handleResetParams, className: "px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer border border-zinc-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "size-3.5 text-zinc-400" }),
              "Restaurar Padrões"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 shadow-md transition cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "size-3.5" }),
              "Salvar Parâmetros"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-purple-500/30 rounded-3xl p-6 shadow-xl space-y-6 lg:col-span-2 bg-gradient-to-r from-purple-950/40 via-zinc-900 to-zinc-900", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-zinc-800 pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Rss, { className: "size-5 text-purple-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-lime-400", children: "Diretrizes do Feed & Moderação Antifraude" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-base text-white", children: "Recompensas de Mídia & Limites Diferenciados de Conteúdo" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-3.5 text-lime-400" }),
                "Sistema Antifraude Ativo"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-xs font-black text-lime-400 uppercase tracking-wider flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📌 Publicação de Conteúdo Próprio (Posts do Próprio Usuário)" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "nfs por VÍDEO PRÓPRIO", unit: "nfs / vídeo", value: operationalParams.nfsPerVideoPost, onChange: (v) => setOperationalParams((p) => ({
                  ...p,
                  nfsPerVideoPost: Number(v)
                })) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "nfs por TEXTO / FOTO PRÓPRIA", unit: "nfs / post", value: operationalParams.nfsPerTextPost, onChange: (v) => setOperationalParams((p) => ({
                  ...p,
                  nfsPerTextPost: Number(v)
                })) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "Limite DIÁRIO de Posts Próprios", unit: "posts / dia", value: operationalParams.dailyRewardedPostLimit, onChange: (v) => setOperationalParams((p) => ({
                  ...p,
                  dailyRewardedPostLimit: Number(v)
                })) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "Limite SEMANAL de Posts Próprios", unit: "posts / semana", value: operationalParams.weeklyRewardedPostLimit, onChange: (v) => setOperationalParams((p) => ({
                  ...p,
                  weeklyRewardedPostLimit: Number(v)
                })) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-xs font-black text-purple-300 uppercase tracking-wider flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "👥 Interação em Conteúdo de Terceiros (Posts de Outros Usuários)" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "nfs por View em Post de Terceiro", unit: "nfs / view", value: operationalParams.nfsPerPostView, onChange: (v) => setOperationalParams((p) => ({
                  ...p,
                  nfsPerPostView: Number(v)
                })) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "nfs por Like em Post de Terceiro", unit: "nfs / like", value: operationalParams.nfsPerLike, onChange: (v) => setOperationalParams((p) => ({
                  ...p,
                  nfsPerLike: Number(v)
                })) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "nfs por Share de Post de Terceiro", unit: "nfs / share", value: operationalParams.nfsPerShare, onChange: (v) => setOperationalParams((p) => ({
                  ...p,
                  nfsPerShare: Number(v)
                })) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "nfs por Post Salvo de Terceiro", unit: "nfs / save", value: operationalParams.nfsPerSave, onChange: (v) => setOperationalParams((p) => ({
                  ...p,
                  nfsPerSave: Number(v)
                })) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "Limite DIÁRIO Interações Terceiros", unit: "interações / dia", value: operationalParams.dailyThirdPartyInteractionsLimit, onChange: (v) => setOperationalParams((p) => ({
                  ...p,
                  dailyThirdPartyInteractionsLimit: Number(v)
                })) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "Teto Máximo DIÁRIO nfs Terceiros", unit: "nfs máx / dia", value: operationalParams.dailyMaxPointsThirdPartyInteractions, onChange: (v) => setOperationalParams((p) => ({
                  ...p,
                  dailyMaxPointsThirdPartyInteractions: Number(v)
                })) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 bg-purple-950/30 p-4 rounded-2xl border border-purple-500/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "text-xs font-black text-white uppercase tracking-wider flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4 text-lime-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Matriz de Regras Antifraude & Anti-Bot do Feed" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900/90 p-3 rounded-xl border border-zinc-800 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-red-400 block", children: "🚫 Bloqueio Auto-Engajamento" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-zinc-400 leading-snug", children: [
                    "Usuário ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "jamais recebe pontos" }),
                    " ao curtir, visualizar, salvar ou compartilhar posts da sua própria autoria."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900/90 p-3 rounded-xl border border-zinc-800 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-amber-400 block", children: "⏱️ Dwell Time Mínimo" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-zinc-400 leading-snug", children: [
                    "Exige permanência mínima de ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
                      operationalParams.minDwellTimeSecondsForView || 3,
                      "s"
                    ] }),
                    " para considerar visualização válida."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900/90 p-3 rounded-xl border border-zinc-800 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-blue-400 block", children: "⚡ Rate Limit de Robôs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-zinc-400 leading-snug", children: [
                    "Limite de ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
                      operationalParams.maxInteractionsPerMinute || 10,
                      " ações/minuto"
                    ] }),
                    " para prevenir automação por scripts."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900/90 p-3 rounded-xl border border-zinc-800 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-lime-400 block", children: "🔍 Hash Mídia Duplicada" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-400 leading-snug", children: "Bloqueio automático de uploads repetidos ou spams do mesmo arquivo de vídeo/imagem." })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-zinc-800 pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "size-5 text-lime-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm text-white", children: "Engajamento, Treinos & Indicações" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "nfs por Treino Validadog (Smart Fit/GPS)", unit: "nfs / treino", value: operationalParams.nfsPerWorkout, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                nfsPerWorkout: Number(v)
              })) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "Bônus de Indicação de Amigo", unit: "nfs / amigo", value: operationalParams.normalUserNewReferralBonusNfs, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                normalUserNewReferralBonusNfs: Number(v)
              })) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "Comissão de Indicação de Amigo", unit: "% das compras", value: operationalParams.normalUserReferralSharePct, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                normalUserReferralSharePct: Number(v)
              })) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "nfs por Vínculo de Programa Fidelidade", unit: "nfs / vínculo", value: operationalParams.nfsPerLoyaltyDeclaration, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                nfsPerLoyaltyDeclaration: Number(v)
              })) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-zinc-800 pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Percent, { className: "size-5 text-purple-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm text-white", children: "Atribuição do Marketplace & Repasses" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "Take-Rate Netfits no Shopping", unit: "% do GMV", value: operationalParams.netfitsTakeRatePctFromGmv, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                netfitsTakeRatePctFromGmv: Number(v)
              })) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "Comissão Padrão do Associado Netfits", unit: "% da Receita Netfits", value: operationalParams.associadoShareOfNetfitsRevenuePct, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                associadoShareOfNetfitsRevenuePct: Number(v)
              })) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "Bônus 1ª Compra no Shopping", unit: "nfs bônus", value: operationalParams.shopFirstPurchaseBonusNfs, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                shopFirstPurchaseBonusNfs: Number(v)
              })) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 lg:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-zinc-800 pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { className: "size-5 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm text-white", children: "Economia do Programa de Pontos & Validade" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "CPP de Resgate (Cotação R$)", unit: "R$ / nfs", value: operationalParams.cppResgateBrl, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                cppResgateBrl: Number(v)
              })) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "Custo Provisão Pontos Válidos", unit: "R$ / nfs", value: operationalParams.costPerProvisionedPointBrl, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                costPerProvisionedPointBrl: Number(v)
              })) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "Netfits por R$ 1,00 Gasto", unit: "nfs / R$", value: operationalParams.nfsEarnedPerBrlSpent, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                nfsEarnedPerBrlSpent: Number(v)
              })) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "Validade dos Pontos nfs", unit: "meses", value: operationalParams.pointsValidityMonths, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                pointsValidityMonths: Number(v)
              })) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "Expiração Estimada (Breakage)", unit: "% ao ano", value: operationalParams.targetBreakagePct, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                targetBreakagePct: Number(v)
              })) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-950/40 p-4 rounded-2xl border border-purple-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-300 mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "🛡️" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white block", children: "Algoritmo de Priorização de Resgate: FEFO (First-Expiring, First-Out)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-zinc-400", children: "O sistema consome prioritariamente os lotes de pontos com a data de expiração mais próxima, evitando a perda indevida de saldo ativo pelo usuário." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold font-mono bg-lime-400 text-zinc-950 px-2.5 py-1 rounded-lg shrink-0", children: "ATIVADO (FEFO System)" })
            ] })
          ] })
        ] })
      ] }),
      activeTab === "activities" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-extrabold uppercase tracking-wider text-lime-400", children: "Sensor de Movimento & Validação Esportiva (Etapa 1 & 2)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white", children: "Métricas de Engajamento Físico & Pontuação por Treino" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20 font-bold", children: "+50 nfs / treino validado" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Treinos Validados Total", value: Math.round(84500 * pf).toLocaleString("pt-BR"), change: "+24.8%", positive: true, icon: Activity, subtext: "Presenças & registros", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Check-ins Smart Fit", value: Math.round(48200 * pf).toLocaleString("pt-BR"), change: "+18.5%", positive: true, icon: Zap, subtext: "Totens de validação", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Pontos Emitidos via Treino", value: `${Math.round(4225e3 * pf).toLocaleString("pt-BR")} nfs`, change: "+24.8%", positive: true, icon: Coins, subtext: "4.2M nfs distribuídos", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Média de Treinos / Atleta", value: `${(3.8 * pf).toFixed(1)} treinos`, change: "+12.0%", positive: true, icon: TrendingUp, subtext: "Frequência semanal", periodBadge: currentPeriodObj.shortLabel })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm text-white", children: "Transição Tecnológica para Etapa 2 (Roadmap Business Plan)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-zinc-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-lime-400", children: "Etapa 1 (Atual)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-400", children: "Validação manual via QR Code em academias parceiras (Smart Fit) e registros em fotos do feed. Baixa complexidade e custo zero de API." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-purple-500/30 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-purple-300", children: "Etapa 2 (9 a 18 meses)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-400", children: "Integração nativa com Strava & Garmin API. Sincronização automática de corridas, pedaladas e métricas cardíacas." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-amber-400", children: "Etapa 3 (18 a 36 meses)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-400", children: "Plano corporativo B2B com desafios empresariais e marketplace de serviços de longevidade (fisioterapia, nutrologia)." })
            ] })
          ] })
        ] })
      ] }),
      activeTab === "users" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-extrabold uppercase tracking-wider text-lime-400", children: "Base de Atletas & Programas Bancários Declarados (Business Plan Sessão 6)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white", children: "Comunidade, Declaração de Pontos Bancários & Retenção" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-purple-300 bg-purple-900/30 px-3 py-1 rounded-full border border-purple-500/30 font-bold", children: "482k Declarações Coletadas" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Usuários Cadastrados", value: Math.round(1245e3 * Math.min(1, pf * 1.1)).toLocaleString("pt-BR"), change: "+32.4%", positive: true, icon: Users, subtext: "Superou meta Etapa 1 (1M)", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Ativos Mensais (MAU)", value: Math.round(62e4 * Math.min(1, pf * 1.1)).toLocaleString("pt-BR"), change: "50.0% engajamento", positive: true, icon: UserCheck, subtext: "620k atletas ativos", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Declaração Pontos Bancários", value: Math.round(482e3 * Math.min(1, pf * 1.1)).toLocaleString("pt-BR"), change: "38.7% da base", positive: true, icon: Award, subtext: "Intenção de resgate", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Taxa de Retenção (90 dias)", value: "86.2%", change: "Meta 80%", positive: true, icon: ShieldAlert, subtext: "Excelente retenção", periodBadge: currentPeriodObj.shortLabel })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm text-white", children: "Distribuição de Programas Bancários Declarados (Pesquisa Etapa 1)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400 font-semibold", children: "Livelo (BB & Bradesco)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-white", children: "184.000 declarações" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-lime-400", children: "Média: 45.000 pts declarados" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400 font-semibold", children: "Esfera (Santander)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-white", children: "128.000 declarações" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-purple-400", children: "Média: 38.000 pts declarados" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400 font-semibold", children: "C6 Átomos" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-white", children: "74.000 declarações" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-400", children: "Média: 22.000 pts declarados" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400 font-semibold", children: "Smiles & LATAM Pass" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-white", children: "96.000 declarações" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-cyan-400", children: "Média: 55.000 pts declarados" })
            ] })
          ] })
        ] })
      ] }),
      activeTab === "partners" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-extrabold uppercase tracking-wider text-lime-400", children: "Rede Credenciada & Ecossistema de Saúde (Sessão 6 & 10)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white", children: "Parceiros Comerciais, Sellers do Shopping & Assessorias Esportivas" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-zinc-950 p-2 rounded-2xl border border-zinc-800 self-start md:self-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Handshake, { className: "size-4 text-lime-400 ml-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: selectedPartnerId, onChange: (e) => {
              setSelectedPartnerId(e.target.value);
              const partner = PARTNERS_DATABASE.find((p) => p.id === e.target.value);
              toast.info(`Filtro alterado para: ${partner?.name}`);
            }, className: "bg-transparent text-xs font-bold text-white focus:outline-none pr-4 cursor-pointer", children: PARTNERS_DATABASE.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: p.id, className: "bg-zinc-900 text-white font-medium py-1", children: [
              p.iconEmoji,
              " ",
              p.name,
              " [",
              p.contractTier,
              "]"
            ] }, p.id)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Filtro Selecionado", value: selectedPartner.name.split(" ")[0] + (selectedPartner.name.split(" ")[1] ? " " + selectedPartner.name.split(" ")[1] : ""), change: selectedPartner.contractTier, positive: true, icon: Handshake, subtext: selectedPartner.category, periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "GMV Transacionado", value: `R$ ${(selectedPartner.gmvBrl * pf).toLocaleString("pt-BR", {
            minimumFractionDigits: 2
          })}`, change: "+22.4%", positive: true, icon: ShoppingBag, subtext: "Vendas via plataforma", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Comissão Netfits (15%)", value: `R$ ${(selectedPartner.netfitsRevenueBrl * pf).toLocaleString("pt-BR", {
            minimumFractionDigits: 2
          })}`, change: "+24.5%", positive: true, icon: DollarSign, subtext: "Receita direta gerada", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "NPS & Conversão", value: `${selectedPartner.npsScore} / 100`, change: `${selectedPartner.conversionRatePct}% conv.`, positive: true, icon: Star, subtext: `Cupom: ${selectedPartner.exclusiveCoupon}`, periodBadge: currentPeriodObj.shortLabel })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-zinc-800 pb-3 flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold text-white", children: "Tabela de Parceiros & Assessorias Credenciadas" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: selectedPartnerId === "partner_all" ? "Exibindo visão consolidada de todas as 28 marcas credenciadas no ecossistema" : `Exibindo desempenho individualizado de ${selectedPartner.name}` })
            ] }),
            selectedPartnerId !== "partner_all" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              setSelectedPartnerId("partner_all");
              toast.info("Filtro resetado para Visão Consolidada!");
            }, className: "px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-lime-400 font-bold text-xs border border-zinc-700 transition flex items-center gap-1.5 cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🌐 Voltar para Consolidado" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto w-full max-w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs text-zinc-300 min-w-[720px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4", children: "Parceiro / Assessoria" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4", children: "Categoria / Segmento" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-center", children: "Nível do Contrato" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "GMV Transacionado (R$)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "Comissão Netfits (R$)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-center", children: "Conversão" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-center", children: "Cupom Exclusivo" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-center", children: "Ações" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-zinc-800/80 font-medium", children: PARTNERS_DATABASE.filter((p) => p.id !== "partner_all").filter((p) => selectedPartnerId === "partner_all" || p.id === selectedPartnerId).slice((partnersPage - 1) * itemsPerPage, partnersPage * itemsPerPage).map((partner) => {
              const isSelected = selectedPartnerId === partner.id;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: `transition ${isSelected ? "bg-purple-950/40 border-l-4 border-l-lime-400" : "hover:bg-zinc-800/40"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 font-bold text-white flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: partner.iconEmoji }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-white", children: partner.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-lime-400 font-mono", children: [
                      "NPS ",
                      partner.npsScore,
                      "/100"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-zinc-400 text-xs", children: partner.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-bold px-2 py-0.5 rounded-full border font-mono ${partner.contractTier === "Master Partner" ? "bg-purple-900/40 text-purple-300 border-purple-500/40" : partner.contractTier === "Clínica Especialista" ? "bg-lime-900/40 text-lime-300 border-lime-500/40" : "bg-zinc-800 text-zinc-300 border-zinc-700"}`, children: partner.contractTier }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-mono font-bold text-white", children: [
                  "R$ ",
                  (partner.gmvBrl * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-mono font-bold text-lime-400", children: [
                  "R$ ",
                  (partner.netfitsRevenueBrl * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-center font-mono font-bold text-purple-300", children: [
                  partner.conversionRatePct,
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-[10px] bg-zinc-950 px-2 py-1 rounded text-lime-400 border border-zinc-800 font-mono font-bold", children: partner.exclusiveCoupon }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                  setSelectedPartnerId(partner.id);
                  toast.success(`Filtro individual ativado para: ${partner.name}`);
                }, className: `px-2.5 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${isSelected ? "bg-lime-400 text-zinc-950 shadow" : "bg-zinc-800 hover:bg-purple-600 text-white"}`, children: isSelected ? "✓ Selecionado" : "Filtrar" }) })
              ] }, partner.id);
            }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationControls, { currentPage: partnersPage, totalPages: Math.ceil(PARTNERS_DATABASE.filter((p) => p.id !== "partner_all").filter((p) => selectedPartnerId === "partner_all" || p.id === selectedPartnerId).length / itemsPerPage), onPageChange: setPartnersPage, totalItems: PARTNERS_DATABASE.filter((p) => p.id !== "partner_all").filter((p) => selectedPartnerId === "partner_all" || p.id === selectedPartnerId).length, itemsPerPage })
        ] })
      ] }),
      activeTab === "controls" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-purple-500/30 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3 bg-gradient-to-r from-purple-950/40 via-zinc-900 to-zinc-900", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-extrabold uppercase tracking-wider text-lime-400", children: "Demonstrativo Financeiro & Engenharia de Custos (1.000.000 de Usuários)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white", children: "OPEX de TI Otimizado (-61.5% Redução de Custos) & Unit Economics" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-lime-400 bg-lime-400/10 px-3.5 py-1.5 rounded-full border border-lime-400/30 font-extrabold", children: "Economia de -61,5% (US$ 1.320 / R$ 7.260 /mês)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Custo TI Mensal (1M Usuários)", value: "R$ 7.260 /mês", change: "-61.5% economia", positive: true, icon: Cpu, subtext: "US$ 1.320,00 /mês", highlightColor: "border-lime-400 ring-1 ring-lime-400/20 bg-lime-400/5", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Custo por Usuário Cadastrado", value: "R$ 0,007 /mês", change: "Ultra-eficiente", positive: true, icon: DollarSign, subtext: "R$ 0,08 / ano", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Custo por Usuário Ativo (MAU)", value: "R$ 0,012 /mês", change: "R$ 0,14 / ano", positive: true, icon: Users, subtext: "620k MAU ativos", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Margem EBITDA da Operação", value: "84.2%", change: "Alta Lucratividade", positive: true, icon: TrendingUp, subtext: "Operação escalável", periodBadge: currentPeriodObj.shortLabel })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-zinc-800 pb-3 flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold text-white", children: "Detalhamento da Arquitetura de Custos Otimizada (1M Usuários)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "Comparativo do plano de engenharia de custo (Anterior vs Otimizado)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-lime-400 font-bold bg-lime-400/10 px-3 py-1 rounded-xl border border-lime-400/20", children: "Câmbio: US$ 1.00 = R$ 5,50" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto w-full max-w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs text-zinc-300 min-w-[680px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4", children: "Componente de Infraestrutura" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "Custo Anterior (USD)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "Custo Otimizado (USD)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "Custo Otimizado (BRL)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-center", children: "Economia %" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-zinc-800 font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-bold text-white", children: "🤖 IA (Vertex Gemini + Cache Vetorial Redis)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right text-zinc-500 line-through", children: "US$ 405,00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right font-bold text-lime-400", children: "US$ 180,00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right font-bold text-white", children: "R$ 990,00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center text-lime-400 font-bold", children: "-55.5%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-bold text-white", children: "🗄️ Banco de Dados (Firestore Offline Cache)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right text-zinc-500 line-through", children: "US$ 520,00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right font-bold text-lime-400", children: "US$ 280,00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right font-bold text-white", children: "R$ 1.540,00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center text-lime-400 font-bold", children: "-46.1%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-bold text-white", children: "🖼️ Armazenamento Mídia (Cloudflare R2 Zero Egress)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right text-zinc-500 line-through", children: "US$ 310,00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right font-bold text-lime-400", children: "US$ 110,00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right font-bold text-white", children: "R$ 605,00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center text-lime-400 font-bold", children: "-64.5%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-bold text-white", children: "🌐 Servidores & API (Bun / Cloud Run Concurrency 80)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right text-zinc-500 line-through", children: "US$ 850,00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right font-bold text-lime-400", children: "US$ 380,00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right font-bold text-white", children: "R$ 2.090,00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center text-lime-400 font-bold", children: "-55.3%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-bold text-white", children: "⚡ CDN & Tráfego (Cloudflare Tiered Cache)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right text-zinc-500 line-through", children: "US$ 450,00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right font-bold text-lime-400", children: "US$ 90,00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right font-bold text-white", children: "R$ 495,00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center text-lime-400 font-bold", children: "-80.0%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-bold text-white", children: "🔐 Autenticação (WhatsApp OTP + Magic Links)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right text-zinc-500 line-through", children: "US$ 650,00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right font-bold text-lime-400", children: "US$ 190,00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right font-bold text-white", children: "R$ 1.045,00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center text-lime-400 font-bold", children: "-70.7%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-bold text-white", children: "🔔 Notificações Push & Logs" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right text-zinc-500 line-through", children: "US$ 240,00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right font-bold text-lime-400", children: "US$ 90,00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right font-bold text-white", children: "R$ 495,00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center text-lime-400 font-bold", children: "-62.5%" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tfoot", { className: "bg-zinc-950 font-bold border-t-2 border-zinc-700 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-4", children: "TOTAL MENSAL OTIMIZADO (1M USUÁRIOS)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-4 text-right text-zinc-400", children: "US$ 3.425,00" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-4 text-right text-lime-400 font-mono text-sm", children: "US$ 1.320,00" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-4 text-right text-lime-400 font-mono text-sm", children: "R$ 7.260,00" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-4 text-center text-lime-400 font-black", children: "-61.5% REDUÇÃO" })
            ] }) })
          ] }) })
        ] })
      ] }),
      (activeTab === "results" || activeTab === "controls") && (() => {
        const isFase2 = drePhase === "fase2";
        const takeRatePct = operationalParams.netfitsTakeRatePctFromGmv ?? 8;
        const clubMonthlyFeeBrl = operationalParams.netfitsClubMonthlyFeeBrl ?? 19.9;
        const provisionCostPerPoint = operationalParams.costPerProvisionedPointBrl ?? 0.01;
        const dreRevMarketplace = 4e6 * (takeRatePct / 100) * pf;
        const dreRevMedia = 25e4 * pf;
        const dreRevEvents = 2e5 * pf;
        const dreRevB2b = 123850 * pf;
        const dreRevClub = isFase2 ? 45e3 * clubMonthlyFeeBrl * 12 / 12 * pf : 0;
        const dreGrossRev = dreRevMarketplace + dreRevMedia + dreRevEvents + dreRevB2b + dreRevClub;
        const dreSalesTaxes = dreGrossRev * 0.06;
        const dreGrossNetRev = dreGrossRev - dreSalesTaxes;
        const validIssuedPointsCount = Math.round(10272e3 * pf);
        const drePointsProvision = validIssuedPointsCount * provisionCostPerPoint;
        const provisionPctOfGross = drePointsProvision / dreGrossRev * 100;
        const expiredPointsCount = Math.round(1232640 * pf);
        const drePointsProvisionReversal = expiredPointsCount * provisionCostPerPoint;
        const reversalPctOfGross = drePointsProvisionReversal / dreGrossRev * 100;
        const dreAdjustedNetRev = dreGrossNetRev - drePointsProvision + drePointsProvisionReversal;
        const adjustedNetRevPctOfGross = dreAdjustedNetRev / dreGrossRev * 100;
        const dreShoppingRedemptionCost = 12e4 * pf;
        const dreAssociadoCommissionCost = 65e3 * pf;
        const dreAcquiringFeesCost = 35e3 * pf;
        const dreTotalCsp = dreShoppingRedemptionCost + dreAssociadoCommissionCost + dreAcquiringFeesCost;
        const dreAdjustedGrossProfit = dreAdjustedNetRev - dreTotalCsp;
        const adjustedGrossMarginPct = dreAdjustedGrossProfit / dreGrossRev * 100;
        const dreCloudCost = 72600 * pf;
        const drePayrollCost = (isFase2 ? 32e4 : 24e4) * pf;
        const dreMarketingCost = (isFase2 ? 15e4 : 1e5) * pf;
        const dreGaCost = (isFase2 ? 8e4 : 5e4) * pf;
        const dreTotalOpex = dreCloudCost + drePayrollCost + dreMarketingCost + dreGaCost;
        const dreAdjustedEbitda = dreAdjustedGrossProfit - dreTotalOpex;
        const adjustedEbitdaMarginPct = dreAdjustedEbitda / dreGrossRev * 100;
        const dreDepreciation = 24e3 * pf;
        const dreEbit = dreAdjustedEbitda - dreDepreciation;
        const dreFinancialResult = 18400 * pf;
        const dreEbt = dreEbit + dreFinancialResult;
        const dreIncomeTaxes = Math.round(dreEbt * 0.15);
        const dreAdjustedNetProfit = dreEbt - dreIncomeTaxes;
        const adjustedNetMarginPct = dreAdjustedNetProfit / dreGrossRev * 100;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-950/60 via-zinc-900 to-zinc-900 border border-purple-500/30 rounded-2xl p-4 shadow-lg flex flex-col lg:flex-row lg:items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-extrabold uppercase tracking-wider text-lime-400", children: [
                "Demonstração do Resultado do Exercício — Business Case v1.xlsx (",
                currentPeriodObj.shortLabel,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-white flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📈 DRE Financeiro Proforma — Netfits Fidelidade Ltda." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs bg-lime-400/20 text-lime-300 border border-lime-400/30 px-2.5 py-0.5 rounded-full font-mono font-bold", children: [
                  "EBITDA: ",
                  adjustedEbitdaMarginPct.toFixed(1),
                  "% (",
                  isFase2 ? "Fase 2 Com Clube" : "Fase 1 Launch",
                  ")"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-zinc-950/80 p-1.5 rounded-xl border border-zinc-800 self-start lg:self-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                setDrePhase("fase1");
                toast.info("DRE alternado para Fase 1: Launch Inicial (Sem Clube)");
              }, className: `px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${!isFase2 ? "bg-lime-400 text-zinc-950 shadow font-black" : "text-zinc-400 hover:text-white hover:bg-zinc-800"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🚀 Fase 1 (Launch)" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                setDrePhase("fase2");
                toast.success("DRE alternado para Fase 2: Com Netfits Club (R$ 29,90/mês)");
              }, className: `px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${isFase2 ? "bg-purple-600 text-white shadow font-black" : "text-zinc-400 hover:text-white hover:bg-zinc-800"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⭐ Fase 2 (Com Clube)" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Receita Bruta Inicial", value: `R$ ${dreGrossRev.toLocaleString("pt-BR", {
              minimumFractionDigits: 2
            })}`, change: "Fase 1 (Sem Clube)", positive: true, icon: DollarSign, subtext: "Marketplace + Feed + Eventos", periodBadge: currentPeriodObj.shortLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Receita Líquida Ajustada", value: `R$ ${dreAdjustedNetRev.toLocaleString("pt-BR", {
              minimumFractionDigits: 2
            })}`, change: `${adjustedNetRevPctOfGross.toFixed(1)}% da Bruta`, positive: true, icon: Coins, subtext: "Após tributos e provisão de pontos", periodBadge: currentPeriodObj.shortLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "EBITDA Inicial da Operação", value: `R$ ${dreAdjustedEbitda.toLocaleString("pt-BR", {
              minimumFractionDigits: 2
            })}`, change: `${adjustedEbitdaMarginPct.toFixed(1)}% Margem`, positive: true, icon: TrendingUp, subtext: "Lucro operacional no launch", highlightColor: "border-lime-400 ring-1 ring-lime-400/20 bg-lime-400/5", periodBadge: currentPeriodObj.shortLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Lucro Líquido do Exercício", value: `R$ ${dreAdjustedNetProfit.toLocaleString("pt-BR", {
              minimumFractionDigits: 2
            })}`, change: `${adjustedNetMarginPct.toFixed(1)}% Margem Líq.`, positive: true, icon: Award, subtext: "Lucro final distribuível", periodBadge: currentPeriodObj.shortLabel })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-zinc-800 pb-3 flex-wrap gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold text-white", children: "Demonstração Estruturada do Resultado — Momento Inicial (Fase 1 Launch)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-400", children: [
                  "Valores em R$ para o lançamento inicial (",
                  currentPeriodObj.shortLabel,
                  "). Clube de Assinaturas reservado para Etapa 2."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-lime-400 font-bold bg-lime-400/10 px-3 py-1 rounded-xl border border-lime-400/20", children: "Fase 1: Launch Sem Clube" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto w-full max-w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs text-zinc-300 min-w-[640px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4", children: "Linha da DRE (Conta Contábil)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "Valor no Período (R$)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "Análise Vertical (% Rec. Bruta)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-center", children: "Status / Etapa" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-zinc-800/80 font-medium", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-purple-950/20 hover:bg-purple-950/40 transition font-bold text-white", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-purple-300", children: "(+) RECEITA OPERACIONAL BRUTA (FASE 1 LAUNCH)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right text-purple-300 font-mono text-sm", children: [
                    "R$ ",
                    dreGrossRev.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right text-purple-300", children: "100.0%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center text-lime-400 font-bold", children: "▲ Momento Inicial" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-6", children: [
                    "└─ Comissões Marketplace (",
                    operationalParams.netfitsTakeRatePctFromGmv,
                    "% Take-Rate GMV)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "R$ ",
                    dreRevMarketplace.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right", children: [
                    (dreRevMarketplace / dreGrossRev * 100).toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-500", children: "Ativo no Launch" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-6", children: "└─ Receita de Mídias & Anúncios Patrocinados (Feed)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "R$ ",
                    dreRevMedia.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right", children: [
                    (dreRevMedia / dreGrossRev * 100).toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-500", children: "Ativo no Launch" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-6", children: "└─ Inscrições em Provas & Eventos Esportivos Credenciados" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "R$ ",
                    dreRevEvents.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right", children: [
                    (dreRevEvents / dreGrossRev * 100).toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-500", children: "Ativo no Launch" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-500 bg-zinc-950/40", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-6 text-zinc-400 font-semibold", children: "└─ Assinaturas Netfits Club (Clube de Benefícios — Lançamento Futuro)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right font-mono text-zinc-500 font-bold", children: "R$ 0,00" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right text-zinc-500 font-bold", children: "0.0%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-purple-400 font-bold", children: "🔮 Lançamento Etapa 2" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-rose-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4", children: "(-) DEDUÇÕES E IMPOSTOS SOBRE VENDAS (DAS / ISS / PIS / COFINS)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "(R$ ",
                    dreSalesTaxes.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    }),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "-6.0%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-rose-400", children: "Tributário (-6%)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-zinc-950 font-bold text-white border-y border-zinc-800", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 font-bold", children: "(=) RECEITA OPERACIONAL LÍQUIDA (BRUTA DA PROVISÃO)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono text-zinc-200 text-xs font-bold", children: [
                    "R$ ",
                    dreGrossNetRev.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right text-zinc-300", children: "94.0%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-400 font-semibold", children: "Antes da Provisão" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-purple-950/30 hover:bg-purple-950/50 transition text-purple-300 font-bold border-y border-purple-500/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-purple-300", children: [
                    "(-) PROVISÃO DE PASSIVO DE PONTOS EMITIDOS VÁLIDOS NÃO RESGATADOS",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-[10px] text-purple-400 font-normal mt-0.5", children: [
                      "└─ ",
                      validIssuedPointsCount.toLocaleString("pt-BR"),
                      " nfs emitidos válidos × R$ ",
                      provisionCostPerPoint.toFixed(3),
                      " (Custo da Provisão)"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-mono text-purple-300 text-sm font-bold", children: [
                    "(R$ ",
                    drePointsProvision.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    }),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right text-purple-300", children: [
                    "-",
                    provisionPctOfGross.toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center text-purple-400 font-bold", children: "🛡️ Redutora da Rec. Líquida" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-lime-950/20 hover:bg-lime-950/40 transition text-lime-400 font-bold border-y border-lime-500/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-lime-300", children: [
                    "(+) REVERSÃO DE PROVISÃO (PONTOS EXPIRADOS / BREAKAGE)",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-[10px] text-lime-400 font-normal mt-0.5", children: [
                      "└─ ",
                      expiredPointsCount.toLocaleString("pt-BR"),
                      " nfs expirados × R$ ",
                      provisionCostPerPoint.toFixed(3),
                      " (Baixa de Passivo por Expiração)"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-mono text-lime-400 text-sm font-bold", children: [
                    "+R$ ",
                    drePointsProvisionReversal.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right text-lime-400", children: [
                    "+",
                    reversalPctOfGross.toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center text-lime-400 font-bold", children: "♻️ Reversão do Passivo (Breakage)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-zinc-950 font-bold text-white border-y border-zinc-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-black", children: "(=) RECEITA OPERACIONAL LÍQUIDA AJUSTADA" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-mono text-lime-400 text-sm font-black", children: [
                    "R$ ",
                    dreAdjustedNetRev.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right text-lime-400 font-black", children: [
                    adjustedNetRevPctOfGross.toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center text-lime-400 font-bold", children: "Base Líquida Final" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-rose-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4", children: "(-) CUSTOS DOS SERVIÇOS PRESTADOS & RESGATES DE PONTOS (CSP)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "(R$ ",
                    dreTotalCsp.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    }),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right", children: [
                    "-",
                    (dreTotalCsp / dreGrossRev * 100).toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-400", children: "Custo Direto" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-6", children: [
                    "└─ Custo de Resgate de Pontos nfs no Shopping (CPP R$ ",
                    operationalParams.cppResgateBrl,
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "(R$ ",
                    dreShoppingRedemptionCost.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    }),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right", children: [
                    "-",
                    (dreShoppingRedemptionCost / dreGrossRev * 100).toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-500", children: "Resgate Shopping" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-6", children: [
                    "└─ Repasse de Comissões em Dinheiro aos Associados (",
                    operationalParams.associadoShareOfNetfitsRevenuePct,
                    "%)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "(R$ ",
                    dreAssociadoCommissionCost.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    }),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right", children: [
                    "-",
                    (dreAssociadoCommissionCost / dreGrossRev * 100).toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-500", children: "Comissão Captação" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-6", children: "└─ Taxas de Meios de Pagamento & Gateway de Adquirencia" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "(R$ ",
                    dreAcquiringFeesCost.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    }),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right", children: [
                    "-",
                    (dreAcquiringFeesCost / dreGrossRev * 100).toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-500", children: "Adquirencia" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-zinc-950 font-bold text-white border-y border-zinc-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-black", children: "(=) LUCRO BRUTO AJUSTADO INICIAL" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-mono text-white text-sm font-black", children: [
                    "R$ ",
                    dreAdjustedGrossProfit.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right text-white font-black", children: [
                    adjustedGrossMarginPct.toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-center text-lime-400 font-bold", children: [
                    "Margem Bruta ",
                    adjustedGrossMarginPct.toFixed(1),
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-rose-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4", children: "(-) DESPESAS OPERACIONAIS ENXUTAS (OPEX MOMENTO INICIAL)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "(R$ ",
                    dreTotalOpex.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    }),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right", children: [
                    "-",
                    (dreTotalOpex / dreGrossRev * 100).toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-rose-400", children: "OPEX Enxuto Launch" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-6", children: "└─ Infraestrutura de TI & Cloud Otimizada (1M Usuários)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "(R$ ",
                    dreCloudCost.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    }),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right", children: [
                    "-",
                    (dreCloudCost / dreGrossRev * 100).toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-lime-400 font-bold", children: "R$ 7.260/mês (-61.5%)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-6", children: "└─ Pessoal Core, Engenharia de Software & Suporte" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "(R$ ",
                    drePayrollCost.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    }),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right", children: [
                    "-",
                    (drePayrollCost / dreGrossRev * 100).toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-500", children: "Equipe Core Initial" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-6", children: "└─ Marketing de Aquisição (CAC Orgânico & Parcerias)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "(R$ ",
                    dreMarketingCost.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    }),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right", children: [
                    "-",
                    (dreMarketingCost / dreGrossRev * 100).toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-500", children: "Mídia Launch" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-6", children: "└─ Despesas Gerais, Administrativas & Contabilidade (G&A)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "(R$ ",
                    dreGaCost.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    }),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right", children: [
                    "-",
                    (dreGaCost / dreGrossRev * 100).toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-500", children: "Fixas G&A" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-lime-400/10 font-bold text-white border-y-2 border-lime-400/40", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-4 text-lime-300 font-black", children: "(=) EBITDA AJUSTADO INICIAL (MOMENTO LAUNCH)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3.5 px-4 text-right font-mono text-lime-400 text-base font-black", children: [
                    "R$ ",
                    dreAdjustedEbitda.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3.5 px-4 text-right text-lime-400 font-black text-sm", children: [
                    adjustedEbitdaMarginPct.toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3.5 px-4 text-center text-lime-400 font-black", children: [
                    "★ Margem EBITDA ",
                    adjustedEbitdaMarginPct.toFixed(1),
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 font-semibold text-zinc-300", children: "(-) Depreciação e Amortização de Ativos Tecnológicos" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "(R$ ",
                    dreDepreciation.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    }),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right", children: [
                    "-",
                    (dreDepreciation / dreGrossRev * 100).toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-500", children: "Amortização P&D" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-300 font-bold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4", children: "(=) EBIT (RESULTADO OPERACIONAL ANTES DOS IMPOSTOS)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono text-white", children: [
                    "R$ ",
                    dreEbit.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right", children: [
                    (dreEbit / dreGrossRev * 100).toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-center text-zinc-400", children: [
                    "EBIT ",
                    (dreEbit / dreGrossRev * 100).toFixed(1),
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 font-semibold text-zinc-300", children: "(+/-) Resultado Financeiro Líquido (Rendimentos de Caixa)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "R$ ",
                    dreFinancialResult.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right", children: [
                    "+",
                    (dreFinancialResult / dreGrossRev * 100).toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-lime-400", children: "Rendimento CDI" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-300 font-bold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4", children: "(=) LAIR (LUCRO ANTES DO IMPOSTO DE RENDA E CSLL)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono text-white", children: [
                    "R$ ",
                    dreEbt.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right", children: [
                    (dreEbt / dreGrossRev * 100).toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-center text-zinc-400", children: [
                    "LAIR ",
                    (dreEbt / dreGrossRev * 100).toFixed(1),
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-rose-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4", children: "(-) IMPOSTO DE RENDA & CSLL (IRPJ / CSLL Lucro Presumido/Real)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "(R$ ",
                    dreIncomeTaxes.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    }),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right", children: [
                    "-",
                    (dreIncomeTaxes / dreGrossRev * 100).toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-rose-400", children: "Tributação IRPJ/CSLL" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-purple-900/40 font-bold text-white border-t-2 border-purple-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-4 text-purple-200 font-black text-sm", children: "(=) LUCRO LÍQUIDO DO EXERCÍCIO (NETFITS FIDELIDADE LTDA.)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-4 px-4 text-right font-mono text-lime-400 text-lg font-black", children: [
                    "R$ ",
                    dreAdjustedNetProfit.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-4 px-4 text-right text-lime-400 font-black text-base", children: [
                    adjustedNetMarginPct.toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-4 px-4 text-center text-lime-400 font-black", children: [
                    "★ Margem Líquida ",
                    adjustedNetMarginPct.toFixed(1),
                    "%"
                  ] })
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between border-b border-zinc-800 pb-3 flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-base font-bold text-white flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📊 DRE Sintética Comparativa — Business Case v1.xlsx" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2.5 py-0.5 rounded-full font-mono", children: "Planilha Modelo Oficial" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "Comparativo direto da estrutura da DRE do Launch Inicial (Fase 1) versus Expansão com Clube de Benefícios (Fase 2 R$29,90/mês)." })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto w-full max-w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs text-zinc-300 min-w-[700px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4", children: "Linha DRE Sintética" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right text-lime-400", children: "Fase 1 Launch (R$)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right text-lime-400", children: "Fase 1 (%)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right text-purple-400", children: "Fase 2 Clube (R$)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right text-purple-400", children: "Fase 2 (%)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-center", children: "Variação / Impacto" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-zinc-800/80 font-medium", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 font-bold text-white", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-purple-300", children: "Receita Bruta Total" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-mono text-lime-400", children: [
                    "R$ ",
                    (1173850 * pf).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right text-lime-400", children: "100,0%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-mono text-purple-300", children: [
                    "R$ ",
                    (2510850 * pf).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right text-purple-300", children: "100,0%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center text-lime-400 font-bold", children: "+113,9% 🚀" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 text-rose-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4", children: "Deduções Fiscais (-6%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "(R$ ",
                    (70431 * pf).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    }),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "-6,0%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "(R$ ",
                    (150651 * pf).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    }),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "-6,0%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-rose-400", children: "Impostos s/ Vendas" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 font-semibold text-zinc-200", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4", children: "Receita Líquida Bruta" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "R$ ",
                    (1103419 * pf).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "94,0%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "R$ ",
                    (2360199 * pf).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "94,0%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-400", children: "Pré-Provisão" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 text-purple-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4", children: "Provisão Líquida de Pontos (Provisão - Reversão)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "(R$ ",
                    (90393.6 * pf).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    }),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "-7,7%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "(R$ ",
                    (90393.6 * pf).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    }),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "-3,6%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-purple-400 font-bold", children: "Diluição do Passivo" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 font-bold text-lime-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: "Receita Líquida Ajustada" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-mono", children: [
                    "R$ ",
                    (10130254e-1 * pf).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right", children: "86,3%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-mono", children: [
                    "R$ ",
                    (22698054e-1 * pf).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right", children: "90,4%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center text-lime-400 font-bold", children: "+124,1% Base Líquida" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 text-rose-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4", children: "Custos Diretos (CSP)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "(R$ ",
                    (277605 * pf).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    }),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "-23,6%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "(R$ ",
                    (277605 * pf).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    }),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "-11,1%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-400", children: "Ganhos de Escala" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 font-bold text-white", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-purple-300", children: "Lucro Bruto Ajustado" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-mono text-lime-400", children: [
                    "R$ ",
                    (735420.4 * pf).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right text-lime-400", children: "62,6%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-mono text-purple-300", children: [
                    "R$ ",
                    (19922004e-1 * pf).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right text-purple-300", children: "79,3%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center text-lime-400 font-bold", children: "+170,9% Lucro Bruto" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 text-rose-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4", children: "Despesas Operacionais (OPEX)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "(R$ ",
                    (551120 * pf).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    }),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "-46,9%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                    "(R$ ",
                    (723120 * pf).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    }),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "-28,8%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-rose-400", children: "Escala de Equipe" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-lime-400/10 font-black text-white border-y border-lime-400/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-4 text-lime-300", children: "EBITDA Ajustado do Exercício" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3.5 px-4 text-right font-mono text-lime-400 text-sm", children: [
                    "R$ ",
                    (184300.4 * pf).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-4 text-right text-lime-400", children: "15,7%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3.5 px-4 text-right font-mono text-purple-300 text-sm", children: [
                    "R$ ",
                    (12690804e-1 * pf).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-4 text-right text-purple-300", children: "50,5%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-4 text-center text-lime-400 font-extrabold", children: "+588,6% EBITDA 🚀" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-purple-950/40 font-black text-white border-t border-purple-500/40", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-4 text-purple-200", children: "Lucro Líquido do Exercício" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3.5 px-4 text-right font-mono text-lime-400 text-sm", children: [
                    "R$ ",
                    (151895.34 * pf).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-4 text-right text-lime-400", children: "12,9%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3.5 px-4 text-right font-mono text-purple-300 text-sm", children: [
                    "R$ ",
                    (107395834e-2 * pf).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2
                    })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-4 text-right text-purple-300", children: "42,8%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-4 text-center text-lime-400 font-extrabold", children: "+607,0% Lucro Líq. ⭐" })
                ] })
              ] })
            ] }) })
          ] })
        ] });
      })()
    ] }),
    showPitchDeckModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-purple-500/30 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-2xl flex flex-col justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-zinc-800 pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-lime-400", children: "Investor Pitch Deck — Rodada Seed / Series A" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-black text-white flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🚀 Netfits Fidelidade Ltda." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full font-mono", children: [
              "Slide ",
              pitchSlide,
              " de 12"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowPitchDeckModal(false), className: "p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition cursor-pointer", children: "✕" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none pb-2 border-b border-zinc-800/80", children: ["1. Capa", "2. Problema", "3. Solução", "4. Mercado TAM", "5. Modelo de Negócio", "6. Programa nfs", "7. DRE Proforma", "8. Unit Economics", "9. Canais B2B2C", "10. Moat Tech", "11. Captação", "12. Equipe & Visão"].map((name, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPitchSlide(idx + 1), className: `px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition cursor-pointer ${pitchSlide === idx + 1 ? "bg-purple-600 text-white font-black shadow-md shadow-purple-600/30" : "bg-zinc-950 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"}`, children: name }, idx)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-4 space-y-4", children: [
        pitchSlide === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-center py-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block p-4 rounded-3xl bg-zinc-900 border border-purple-500/40 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: netfitsLogo, alt: "Netfits", className: "h-16 w-auto mx-auto object-contain" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-black text-white", children: "NETFITS FIDELIDADE LTDA." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-mono text-lime-400 font-bold uppercase tracking-widest", children: 'Slogan Oficial: "Fazer cada movimento valer mais."' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-zinc-300 max-w-xl mx-auto font-medium", children: "Plataforma de benefícios, hábitos e longevidade para quem escolhe viver de forma ativa — hoje e ao longo da vida." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 flex items-center justify-center gap-3 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-purple-500/20 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full text-xs font-bold", children: "1. Benefícios (Imediato)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-lime-400/10 text-lime-300 border border-lime-400/30 px-3 py-1 rounded-full text-xs font-bold", children: "2. Hábitos (Recorrente)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-zinc-800 text-zinc-300 border border-zinc-700 px-3 py-1 rounded-full text-xs font-bold", children: "3. Longevidade (Para Sempre)" })
          ] })
        ] }),
        pitchSlide === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-rose-400 flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⚠️ O Problema do Mercado (The Problem)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-rose-500/20 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-white text-sm", children: "1. Churn Elevado (>65%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "Mais de 65% dos praticantes abandonam academias/apps nos primeiros 90 dias por falta de incentivos tangíveis." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-rose-500/20 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-white text-sm", children: "2. CAC Explosivo" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "Marcas esportivas e clínicas gastam fortunas em mídia paga tradicional com conversão cada vez menor." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-rose-500/20 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-white text-sm", children: "3. Pontos Tradicionais Quebrados" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "Pontos expirados sem aviso e regras punitivas desestimulam a fidelização do consumidor." })
            ] })
          ] })
        ] }),
        pitchSlide === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-lime-400 flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "💡 A Solução Netfits (The Solution)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-lime-400/20 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-white text-sm", children: "SuperApp 4 em 1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "GPS de treino inteligente, Feed Social com anúncios remunerados, Marketplace e Clube de Benefícios." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-lime-400/20 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-white text-sm", children: "Algoritmo FEFO Protegido" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "First-Expiring, First-Out: o ponto mais próximo da expiração é resgatado primeiro, gerando a maior taxa de satisfação do setor." })
            ] })
          ] })
        ] }),
        pitchSlide === 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-purple-300", children: "📊 O Mercado Endereçável (TAM / SAM / SOM)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-zinc-800 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-zinc-400 uppercase", children: "TAM Brasil" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-black text-white mt-1", children: "R$ 85 Bilhões" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-500 mt-1", children: "Mercado total de saúde, academias, suplementos e nutrição no Brasil." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-zinc-800 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-purple-400 uppercase", children: "SAM Operacional" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-black text-purple-300 mt-1", children: "R$ 18 Bilhões" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-500 mt-1", children: "14 Milhões de brasileiros com wearables e apps de corrida/academia." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-lime-400/30 text-center bg-lime-400/5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-lime-400 uppercase", children: "SOM Meta 3 Anos" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-black text-lime-300 mt-1", children: "R$ 450M GMV" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-400 mt-1", children: "1 Milhão de usuários ativos transacionando no ecossistema Netfits." })
            ] })
          ] })
        ] }),
        pitchSlide === 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white", children: "💰 Modelo de Negócios & Monetização Multirreceptora" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-3.5 rounded-xl border border-zinc-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-lime-400", children: "1. Take-Rate Marketplace (Shop):" }),
              " 8,0% padrão cobrado sobre o GMV dos sellers credenciados."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-3.5 rounded-xl border border-zinc-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-lime-400", children: "2. Feed & Mídia Patrocinada:" }),
              " CPM/CPC cobrado por anúncios e conteúdos no feed."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-3.5 rounded-xl border border-zinc-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-lime-400", children: "3. Inscrições em Provas:" }),
              " Comissão por intermediação de inscrições em eventos de corrida."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-3.5 rounded-xl border border-purple-500/30 bg-purple-950/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-purple-300", children: "4. Netfits Club (Fase 2):" }),
              " Assinatura de R$ 19,90/mês para benefícios exclusivos (50,0% da receita na Fase 2)."
            ] })
          ] })
        ] }),
        pitchSlide === 6 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-purple-300", children: "🪙 Engenharia do Programa de Pontos & Breakage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-purple-500/30 text-xs space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-zinc-800 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-400", children: "Custo de Acúmulo por Ponto (CPP Emitido):" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-lime-400 font-bold", children: "R$ 0,02 / nfs" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-zinc-800 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-400", children: "Custo de Resgate por Ponto (CPP Consumido):" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-lime-300 font-bold", children: "R$ 0,01 / nfs" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-zinc-800 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-400", children: "Custo de Provisão do Passivo:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-purple-300 font-bold", children: "R$ 0,01 / nfs (retido em caixa)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-zinc-800 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-400", children: "Taxa de Breakage (Expiração Estimada):" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-white font-bold", children: "12,0% ao ano (24 meses validade)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between pt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-400", children: "Passivo Total Provisionado em Caixa:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-lime-300 font-bold", children: "R$ 88.842,00 (100% Solvente)" })
            ] })
          ] })
        ] }),
        pitchSlide === 7 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white", children: "📈 DRE Proforma — Fase 1 (Launch) vs Fase 2 com FinOps (-51,4% Custos TI)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-lime-400 font-bold", children: "FASE 1: LAUNCH INICIAL (COM FINOPS)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-400", children: [
                "Receita Bruta: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "R$ 1.173.850,00" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-400", children: [
                "EBITDA: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-lime-400", children: "R$ 208.800,40 (17,8% MARGEM)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-400", children: [
                "Lucro Líquido: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "R$ 176.395,34 (15,0%)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-purple-500/40 bg-purple-950/20 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-purple-300 font-bold", children: "FASE 2: EXPANSÃO COM CLUBE (COM FINOPS)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-300", children: [
                "Receita Bruta: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "R$ 2.869.500,00" }),
                " (+144,4%)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-300", children: [
                "EBITDA: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-lime-400", children: "R$ 1.199.325,00 (41,8% MARGEM EBITDA)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-300", children: [
                "Lucro Líquido: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-purple-300", children: "R$ 1.098.458,34 (38,3%)" })
              ] })
            ] })
          ] })
        ] }),
        pitchSlide === 8 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-lime-400", children: "🎯 Unit Economics & Eficiência Operacional" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-400", children: "CAC Orgânico / B2B2C:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-mono text-lime-400 font-bold", children: "R$ 18,50 / usuário ativo" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-500", children: "Aquisição por rede de Associados e indicação de amigos (MGM)." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-400", children: "LTV Estimado:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-mono text-purple-300 font-bold", children: "R$ 380,00 / usuário" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-500", children: "Recorrência do Netfits Club + compras no Shop + serviços." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-3.5 rounded-xl border border-lime-400/30 text-xs flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white", children: "Relação LTV / CAC:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-lime-400 font-black text-sm", children: "> 20x | Payback < 2,5 meses" })
          ] })
        ] }),
        pitchSlide === 9 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white", children: "🤝 Canais B2B2C, Associados Netfits & MGM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-3.5 rounded-xl border border-zinc-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-purple-300", children: "Categoria Única de Associados Netfits:" }),
              " 10,0% de comissão padrão sobre receitas atreladas à sua rede."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-3.5 rounded-xl border border-zinc-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-purple-300", children: "Atribuição Vitalícia de Carteira:" }),
              " Remuneração contínua para criadores, treinadores e médicos esportivos."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-3.5 rounded-xl border border-zinc-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-lime-400", children: "Programa Member-Get-Member (MGM):" }),
              " Bônus de 50 nfs no cadastro de amigo + 150 nfs na 1ª compra."
            ] })
          ] })
        ] }),
        pitchSlide === 10 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-purple-300", children: "🛡️ Moat Competitivo & Defensabilidade Tecnológica" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-3 rounded-xl border border-zinc-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white", children: "1. Verticalização no Esporte:" }),
              " Foco 100% no esportista amador e no estilo de vida ativo."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-3 rounded-xl border border-zinc-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white", children: "2. Algoritmo FEFO Protegido:" }),
              " Gestão atuarial de passivos e expiração inteligente sem risco de caixa."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-3 rounded-xl border border-zinc-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white", children: "3. Efeito de Rede B2B2C:" }),
              " Carteiras compartilhadas com Associados criam barreira de saída inigualável."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-3 rounded-xl border border-zinc-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white", children: "4. Transição para Longevidade:" }),
              " Extensão do LTV do usuário por toda a vida consciente."
            ] })
          ] })
        ] }),
        pitchSlide === 11 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-lime-400", children: "💰 Alocação dos Recursos Solicitados (R$ 4,0M a R$ 8,0M)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-3 rounded-xl border border-lime-400/30 flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white", children: "🛠️ 40% — Produto e Tecnologia:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime-300 font-mono", children: "Native-shell, FEFO & Data Pipeline" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-3 rounded-xl border border-purple-500/30 flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white", children: "🚀 25% — Aquisição e Crescimento:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-300 font-mono", children: "MKT de comunidade, Eventos & MGM" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-3 rounded-xl border border-zinc-800 flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white", children: "🤝 15% — Parcerias & Associados:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-300 font-mono", children: "Expansão B2B2C & Comissão 10%" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-3 rounded-xl border border-zinc-800 flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white", children: "📊 10% — BI, Antifraude & Wearables:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-300 font-mono", children: "Ingestão Garmin/Apple & IA" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-3 rounded-xl border border-zinc-800 flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white", children: "⚖️ 10% — Jurídico & Operações:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-300 font-mono", children: "Regulatório & Governança" })
            ] })
          ] })
        ] }),
        pitchSlide === 12 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-center py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white", children: "🌟 O Código Netfits & Visão de Longo Prazo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-4 rounded-2xl border border-purple-500/40 max-w-xl mx-auto space-y-2 text-xs text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-purple-300", children: "O Código Netfits (Nossos Valores):" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-300", children: "• 1. Usuário antes do ego" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-300", children: "• 2. Clareza antes da complexidade" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-300", children: "• 3. Evidência antes da convicção" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-300", children: "• 4. Velocidade com responsabilidade" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-lime-400 font-mono font-bold", children: "Netfits Fidelidade Ltda. — diretoria@netfits.com.br — www.netfits.com.br" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-zinc-800 pt-4 gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: pitchSlide === 1, onClick: () => setPitchSlide((s) => Math.max(1, s - 1)), className: "px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-white font-bold text-xs transition cursor-pointer", children: "← Anterior" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: pitchSlide === 12, onClick: () => setPitchSlide((s) => Math.min(12, s + 1)), className: "px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-bold text-xs transition cursor-pointer", children: "Próximo →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          toast.success("Apresentação de Investidores exportada em Word!");
        }, className: "px-4 py-2 rounded-xl bg-lime-400 text-zinc-950 hover:bg-lime-300 font-extrabold text-xs shadow-md transition cursor-pointer flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-3.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Baixar Apresentação (.docx)" })
        ] }) })
      ] })
    ] }) }),
    showNewAssociadoModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-purple-500/30 rounded-3xl p-6 max-w-lg w-full shadow-2xl space-y-5 animate-in fade-in zoom-in-95 text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-zinc-800 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-xl bg-purple-500/20 text-purple-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-extrabold text-white", children: "Cadastrar Novo Associado (Time Admin)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-400", children: "O associado receberá os links de acesso via E-mail e WhatsApp." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowNewAssociadoModal(false), className: "text-zinc-400 hover:text-white text-lg font-bold", children: "✕" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleCreateAssociadoByAdminSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-zinc-300 mb-1", children: "Nome Completo do Associado *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "Ex: Dr. Fernando Costa ou Embaixador Lucas", value: newAssocName, onChange: (e) => setNewAssocName(e.target.value), className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-zinc-300 mb-1", children: "E-mail Oficial *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, placeholder: "associado@netfits.com.br", value: newAssocEmail, onChange: (e) => setNewAssocEmail(e.target.value), className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-zinc-300 mb-1", children: "WhatsApp / Celular *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", required: true, placeholder: "(11) 99887-6655", value: newAssocPhone, onChange: (e) => setNewAssocPhone(e.target.value), className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-zinc-300 mb-1", children: "@Handle / Instagram (opcional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "@dr.fernando", value: newAssocHandle, onChange: (e) => setNewAssocHandle(e.target.value), className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-zinc-300 mb-1", children: "Cidade / Estado" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "São Paulo - SP", value: newAssocCity, onChange: (e) => setNewAssocCity(e.target.value), className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-zinc-300 mb-1", children: "Especialidade / Categoria de Expansão" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: newAssocSpecialty, onChange: (e) => setNewAssocSpecialty(e.target.value), className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Médico / Nutrologia Esportiva", children: "Médico / Nutrologia Esportiva" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Embaixador Esportivo / Influenciador VIP", children: "Embaixador Esportivo / Influenciador VIP" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Sócio Regional de Expansão Netfits", children: "Sócio Regional de Expansão Netfits" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Líder de Rede Esportiva", children: "Líder de Rede Esportiva" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 border-t border-zinc-800 flex items-center justify-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowNewAssociadoModal(false), className: "px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold transition", children: "Cancelar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs shadow-lg shadow-purple-600/30 transition flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-3.5" }),
            "Gerar Links & Finalizar Cadastro"
          ] })
        ] })
      ] })
    ] }) }),
    createdInviteLinks && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-lime-500/40 rounded-3xl p-6 max-w-lg w-full shadow-2xl space-y-5 animate-in fade-in zoom-in-95 text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-zinc-800 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-xl bg-lime-500/20 text-lime-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-lime-400", children: [
              "Código Gerado: ",
              createdInviteLinks.associadoCode
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base font-extrabold text-white", children: [
              "Links de Acesso Criados para ",
              createdInviteLinks.associadoName
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setCreatedInviteLinks(null), className: "text-zinc-400 hover:text-white text-lg font-bold", children: "✕" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 bg-zinc-950/80 border border-zinc-800 rounded-2xl p-4 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-extrabold uppercase tracking-wider text-purple-400 flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "size-3" }),
            "Link 1 — Acesso ao App Netfits (Atleta / Indicação)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", readOnly: true, value: createdInviteLinks.appLink, className: "flex-1 bg-transparent text-white font-mono text-[11px] outline-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              navigator.clipboard.writeText(createdInviteLinks.appLink);
              toast.success("Link do App Netfits copiado!");
            }, className: "px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-lime-400 font-bold text-[10px]", children: "Copiar" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 pt-2 border-t border-zinc-900", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-extrabold uppercase tracking-wider text-lime-400 flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "size-3" }),
            "Link 2 — Acesso Exclusivo ao Portal do Associado"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", readOnly: true, value: createdInviteLinks.portalLink, className: "flex-1 bg-transparent text-white font-mono text-[11px] outline-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              navigator.clipboard.writeText(createdInviteLinks.portalLink);
              toast.success("Link do Portal do Associado copiado!");
            }, className: "px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-lime-400 font-bold text-[10px]", children: "Copiar" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-zinc-300", children: "Disparo de Convites em 1-Clique:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
            const text = encodeURIComponent(`Olá ${createdInviteLinks.associadoName}! Você foi cadastrado como Associado Netfits.

📱 Baixe/Acesse o App: ${createdInviteLinks.appLink}
👑 Acesse seu Portal do Associado: ${createdInviteLinks.portalLink}`);
            window.open(`https://wa.me/?text=${text}`, "_blank");
            toast.success("Redirecionando para envio no WhatsApp!");
          }, className: "py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-3.5" }),
            "WhatsApp"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
            const subject = encodeURIComponent("Bem-vindo ao Programa de Associados Netfits!");
            const body = encodeURIComponent(`Olá ${createdInviteLinks.associadoName},

Seu cadastro no Programa de Associados Netfits foi concluído pelo nosso Time Admin!

Link do App Netfits: ${createdInviteLinks.appLink}
Portal do Associado: ${createdInviteLinks.portalLink}

Atenciosamente,
Time Admin Netfits`);
            window.open(`mailto:${createdInviteLinks.email}?subject=${subject}&body=${body}`, "_blank");
            toast.success("Abrindo cliente de e-mail!");
          }, className: "py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-3.5" }),
            "E-mail Oficial"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 border-t border-zinc-800 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCreatedInviteLinks(null), className: "text-xs font-bold text-zinc-400 hover:text-white", children: "Fechar janela" }) })
    ] }) })
  ] });
}
function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage
}) {
  if (totalPages <= 1) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-zinc-800 pt-3 text-xs text-zinc-400 font-medium flex-wrap gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      "Exibindo ",
      Math.min(totalItems, (currentPage - 1) * itemsPerPage + 1),
      "–",
      Math.min(totalItems, currentPage * itemsPerPage),
      " de ",
      totalItems,
      " registros"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { disabled: currentPage === 1, onClick: () => onPageChange(currentPage - 1), className: "px-3 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed border border-zinc-700 transition flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-3.5" }),
        " Anterior"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-white font-bold px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800", children: [
        currentPage,
        " / ",
        totalPages
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { disabled: currentPage === totalPages, onClick: () => onPageChange(currentPage + 1), className: "px-3 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed border border-zinc-700 transition flex items-center gap-1", children: [
        "Próximo ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-3.5" })
      ] })
    ] })
  ] });
}
function BuildingIcon(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 22v-4h6v4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 6h.01" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 6h.01" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 6h.01" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 10h.01" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 14h.01" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 10h.01" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 14h.01" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 10h.01" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 14h.01" })
  ] });
}
function ParamInput({
  label,
  unit,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 p-3 rounded-2xl border border-zinc-800 space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] font-semibold text-zinc-300 block truncate", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", step: "any", value, onChange: (e) => onChange(e.target.value), className: "w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-1.5 text-xs text-white font-mono font-bold focus:outline-none focus:ring-1 focus:ring-purple-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-zinc-500 font-mono shrink-0", children: unit })
    ] })
  ] });
}
function KpiCard({
  title,
  value,
  change,
  positive,
  icon: Icon,
  subtext,
  highlightColor,
  periodBadge
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-xl relative overflow-hidden group hover:border-purple-500/50 transition-colors ${highlightColor || ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-zinc-300 leading-snug", children: title }),
        periodBadge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold px-1.5 py-0.5 rounded bg-zinc-800 text-purple-300 border border-zinc-700 font-mono shrink-0", children: periodBadge })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-lg bg-zinc-800 grid place-items-center text-lime-400 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2 mb-1 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-extrabold text-white tracking-tight", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs font-bold flex items-center ${positive ? "text-lime-400" : "text-rose-400"}`, children: [
        positive ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownRight, { className: "size-3" }),
        change
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-400 leading-tight", children: subtext })
  ] });
}
export {
  AdminDashboardPage as component
};
