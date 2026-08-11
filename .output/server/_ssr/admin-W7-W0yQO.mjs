import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { i as ChartColumn, a as Award, j as SlidersVertical, R as Rss, S as ShoppingBag, A as Activity, U as Users, k as Handshake, l as Cpu, D as DollarSign, m as ShieldAlert, I as Infinity, n as RefreshCw, o as Layers, p as ChevronDown, q as Clock, Z as Zap, r as Download, s as Megaphone, t as Coins, u as MousePointerClick, T as TrendingUp, E as Eye, v as Store, w as Tag, G as Gift, x as Truck, y as Star, z as ShoppingCart, F as Funnel, J as Save, K as Percent, N as UserCheck, O as ArrowUpRight, Q as ArrowDownRight, V as ChevronLeft, Y as ChevronRight } from "../_libs/lucide-react.mjs";

import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";


import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
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
  id: "associados",
  label: "Gestão de Associados",
  iconEmoji: "👑",
  icon: Award,
  category: "Influenciadores"
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
  const [selectedAssociadoId, setSelectedAssociadoId] = reactExports.useState("assoc_all");
  const selectedAssociado = associadosList.find((a) => a.id === selectedAssociadoId) || associadosList[0];
  const [selectedSellerId, setSelectedSellerId] = reactExports.useState("seller_all");
  const selectedSeller = SELLERS_MARKETPLACE_DATABASE.find((s) => s.id === selectedSellerId) || SELLERS_MARKETPLACE_DATABASE[0];
  const [operationalParams, setOperationalParams] = reactExports.useState({
    nfsPerVideoPost: 15,
    nfsPerTextPost: 10,
    dailyRewardedPostLimit: 3,
    weeklyRewardedPostLimit: 15,
    nfsPerPostView: 5,
    nfsPerLike: 5,
    nfsPerSave: 10,
    nfsPerShare: 10,
    nfsPerWorkout: 50,
    nfsPerLoyaltyDeclaration: 20,
    netfitsTakeRatePctFromGmv: 15,
    associadoStandardShareOfNetfitsRevenuePct: 30,
    associadoMasterShareOfNetfitsRevenuePct: 35,
    normalUserReferralSharePct: 10,
    normalUserNewReferralBonusNfs: 50,
    cppResgateBrl: 0.02,
    nfsEarnedPerBrlSpent: 0.5,
    nfsEarnedPerBrlSpentDouble: 1,
    shopFirstPurchaseBonusNfs: 150,
    pointsValidityMonths: 24,
    targetBreakagePct: 12
  });
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
    toast.success("🎉 Parâmetros operacionais salvos com sucesso!");
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 bg-zinc-900 border-b border-zinc-800 px-4 py-3 flex items-center justify-between flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-lg bg-gradient-to-tr from-purple-600 to-lime-400 grid place-items-center font-black text-zinc-950 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Infinity, { className: "size-5" }) }),
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
      activeTab === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-lime-400", children: [
              "Planejamento Estratégico & Mídia (",
              currentPeriodObj.shortLabel,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-extrabold text-white", children: "Indicadores de Feed, Anúncios & Emissão de Pontos" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-400 mt-0.5", children: [
              "Valores acumulados para a janela: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: currentPeriodObj.desc }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toast.success(`Relatório do Feed (${currentPeriodObj.shortLabel}) exportado!`), className: "px-4 py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 transition self-start md:self-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-4" }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-lime-400", children: [
              "Plano Estratégico de Marketplace (",
              currentPeriodObj.shortLabel,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-extrabold text-white", children: "Indicadores de Acompanhamento do Shopping" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-400 mt-0.5", children: [
              "Valores acumulados para o período: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: currentPeriodObj.desc }),
              "."
            ] })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-5 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-lime-400", children: [
              "Desempenho de Influenciadores (",
              currentPeriodObj.shortLabel,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-extrabold text-white", children: "Módulo de Acompanhamento das Carteiras de Associados" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-400 mt-0.5", children: [
              "Valores acumulados referentes ao período: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: currentPeriodObj.desc }),
              "."
            ] })
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
      activeTab === "params" && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSaveParams, className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-extrabold uppercase tracking-wider text-lime-400", children: "Configuração Global da Operação" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white", children: "Parâmetros Operacionais & Economia do Programa de Pontos" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 self-start md:self-auto shadow-md transition cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "size-3.5" }),
            "Salvar Parâmetros"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-purple-500/30 rounded-3xl p-6 shadow-xl space-y-4 lg:col-span-2 bg-gradient-to-r from-purple-950/40 via-zinc-900 to-zinc-900", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-zinc-800 pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Rss, { className: "size-5 text-purple-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-lime-400", children: "Diretrizes do Feed & Moderação Antifraude" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-base text-white", children: "Recompensas de Mídia & Limites de Postagem" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "Pontos nfs por Post de VÍDEO", unit: "nfs / vídeo", value: operationalParams.nfsPerVideoPost, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                nfsPerVideoPost: Number(v)
              })) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "Pontos nfs por TEXTO / FOTO", unit: "nfs / post", value: operationalParams.nfsPerTextPost, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                nfsPerTextPost: Number(v)
              })) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "Limite DIÁRIO de Posts Premiados", unit: "posts / dia", value: operationalParams.dailyRewardedPostLimit, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                dailyRewardedPostLimit: Number(v)
              })) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "Limite SEMANAL de Posts Premiados", unit: "posts / semana", value: operationalParams.weeklyRewardedPostLimit, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                weeklyRewardedPostLimit: Number(v)
              })) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "nfs por Visualização de Post", unit: "nfs / view", value: operationalParams.nfsPerPostView, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                nfsPerPostView: Number(v)
              })) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "nfs por Curtida (Like)", unit: "nfs / like", value: operationalParams.nfsPerLike, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                nfsPerLike: Number(v)
              })) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "nfs por Compartilhamento", unit: "nfs / share", value: operationalParams.nfsPerShare, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                nfsPerShare: Number(v)
              })) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "nfs por Post Salvo", unit: "nfs / save", value: operationalParams.nfsPerSave, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                nfsPerSave: Number(v)
              })) })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "Repasse Ao Associado Padrão", unit: "% da Receita Netfits", value: operationalParams.associadoStandardShareOfNetfitsRevenuePct, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                associadoStandardShareOfNetfitsRevenuePct: Number(v)
              })) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "Repasse Ao Associado Master", unit: "% da Receita Netfits", value: operationalParams.associadoMasterShareOfNetfitsRevenuePct, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                associadoMasterShareOfNetfitsRevenuePct: Number(v)
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "CPP de Resgate (Cotação R$)", unit: "R$ / nfs", value: operationalParams.cppResgateBrl, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                cppResgateBrl: Number(v)
              })) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "Netfits Ganhos por R$ 1,00 Gasto", unit: "nfs / R$", value: operationalParams.nfsEarnedPerBrlSpent, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                nfsEarnedPerBrlSpent: Number(v)
              })) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "Validade dos Pontos nfs", unit: "meses", value: operationalParams.pointsValidityMonths, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                pointsValidityMonths: Number(v)
              })) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParamInput, { label: "Taxa Estimada de Expiração (Breakage)", unit: "% ao ano", value: operationalParams.targetBreakagePct, onChange: (v) => setOperationalParams((p) => ({
                ...p,
                targetBreakagePct: Number(v)
              })) })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20 font-bold", children: "28 Marcas & Parceiros" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Parceiros Credenciados", value: "28 Marcas", change: "+4 este mês", positive: true, icon: Handshake, subtext: "Centauro, Decathlon, Nike...", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "GMV Enviado aos Parceiros", value: `R$ ${(1849e3 * pf).toLocaleString("pt-BR", {
            minimumFractionDigits: 2
          })}`, change: "+22.4%", positive: true, icon: ShoppingBag, subtext: "Vendas no Shopping", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Receita de Mídia Patrocinada", value: `R$ ${(384500 * pf).toLocaleString("pt-BR", {
            minimumFractionDigits: 2
          })}`, change: "+24.5%", positive: true, icon: Megaphone, subtext: "Posts & Banners de marcas", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "NPS Média dos Parceiros", value: "94 / 100", change: "Excelente", positive: true, icon: Star, subtext: "Satisfação dos Sellers", periodBadge: currentPeriodObj.shortLabel })
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
      (activeTab === "results" || activeTab === "controls") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-950/60 via-zinc-900 to-zinc-900 border border-purple-500/30 rounded-2xl p-5 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-extrabold uppercase tracking-widest text-lime-400", children: "Demonstração do Resultado do Exercício (DRE Proforma 2026)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-extrabold text-white flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📈 DRE Financeiro — Netfits Tecnologia S.A." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-lime-400/20 text-lime-300 border border-lime-400/30 px-2 py-0.5 rounded-full font-mono", children: "Margem EBITDA: 54.1%" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-400 mt-0.5", children: [
              "Demonstrativo contábil proforma ajustado pelo fator temporal (",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: currentPeriodObj.desc }),
              ")."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 self-start md:self-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toast.success("DRE Proforma exportado com sucesso em PDF/Excel!"), className: "px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md flex items-center gap-2 transition cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-3.5" }),
            "Exportar DRE (Excel/PDF)"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Receita Operacional Bruta", value: `R$ ${(2510850 * pf).toLocaleString("pt-BR", {
            minimumFractionDigits: 2
          })}`, change: "+34.2%", positive: true, icon: DollarSign, subtext: "GMV + Mídias + Provas", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Receita Operacional Líquida", value: `R$ ${(2360199 * pf).toLocaleString("pt-BR", {
            minimumFractionDigits: 2
          })}`, change: "94.0% da Bruta", positive: true, icon: Coins, subtext: "Após tributos (-6%)", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "EBITDA da Operação", value: `R$ ${(1359474 * pf).toLocaleString("pt-BR", {
            minimumFractionDigits: 2
          })}`, change: "54.1% Margem", positive: true, icon: TrendingUp, subtext: "Lucro antes de impostos/juros", highlightColor: "border-lime-400 ring-1 ring-lime-400/20 bg-lime-400/5", periodBadge: currentPeriodObj.shortLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Lucro Líquido do Exercício", value: `R$ ${(1150793 * pf).toLocaleString("pt-BR", {
            minimumFractionDigits: 2
          })}`, change: "45.8% Margem Líq.", positive: true, icon: Award, subtext: "Lucro final distribuível", periodBadge: currentPeriodObj.shortLabel })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-zinc-800 pb-3 flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold text-white", children: "Demonstração Estruturada do Resultado (DRE)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-400", children: [
                "Valores em R$ ajustados para o período acumulado (",
                currentPeriodObj.shortLabel,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-lime-400 font-bold bg-lime-400/10 px-3 py-1 rounded-xl border border-lime-400/20", children: "Exercício Proforma 2026" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto w-full max-w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs text-zinc-300 min-w-[640px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4", children: "Linha da DRE (Conta Contábil)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "Valor no Período (R$)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "Análise Vertical (% Rec. Bruta)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-center", children: "Status / Tendência" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-zinc-800/80 font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-purple-950/20 hover:bg-purple-950/40 transition font-bold text-white", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-purple-300", children: "(+) RECEITA OPERACIONAL BRUTA" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right text-purple-300 font-mono text-sm", children: [
                  "R$ ",
                  (2510850 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right text-purple-300", children: "100.0%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center text-lime-400 font-bold", children: "▲ Forte Crescimento" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-6", children: "└─ Comissões Marketplace (15% Take-Rate GMV)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                  "R$ ",
                  (277350 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "11.0%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-500", children: "Recorrente" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-6", children: "└─ Receita de Mídias & Anúncios Patrocinados (Feed)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                  "R$ ",
                  (384500 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "15.3%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-500", children: "Recorrente" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-6", children: "└─ Inscrições em Provas & Eventos Esportivos Credenciados" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                  "R$ ",
                  (512e3 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "20.4%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-500", children: "Sazonal / Provas" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-6", children: "└─ Assinaturas Netfits Club (Etapa 2 Projeção R$29/mês)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                  "R$ ",
                  (1337e3 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "53.3%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-purple-400", children: "Recorrente (SaaS)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-rose-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4", children: "(-) DEDUÇÕES E IMPOSTOS SOBRE VENDAS (DAS / ISS / PIS / COFINS)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                  "(R$ ",
                  (150651 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  }),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "-6.0%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-rose-400", children: "Tributário" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-zinc-950 font-bold text-white border-y border-zinc-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-black", children: "(=) RECEITA OPERACIONAL LÍQUIDA" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-mono text-lime-400 text-sm font-black", children: [
                  "R$ ",
                  (2360199 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right text-lime-400 font-black", children: "94.0%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center text-lime-400 font-bold", children: "Base Líquida" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-rose-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4", children: "(-) CUSTOS DOS SERVIÇOS PRESTADOS & RESGATES DE PONTOS (CSP)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                  "(R$ ",
                  (277605 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  }),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "-11.1%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-400", children: "Custo Direto" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-6", children: "└─ Custo de Resgate de Pontos nfs no Shopping (CPP R$ 0,02)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                  "(R$ ",
                  (147200 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  }),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "-5.9%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-500", children: "Resgate Shopping" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-6", children: "└─ Repasse de Comissões em Dinheiro aos Associados VIP (30%)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                  "(R$ ",
                  (83205 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  }),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "-3.3%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-500", children: "Comissão Captação" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-6", children: "└─ Taxas de Meios de Pagamento & Gateway de Adquirencia" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                  "(R$ ",
                  (47200 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  }),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "-1.9%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-500", children: "Adquirencia" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-zinc-950 font-bold text-white border-y border-zinc-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-black", children: "(=) LUCRO BRUTO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-mono text-white text-sm font-black", children: [
                  "R$ ",
                  (2082594 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right text-white font-black", children: "82.9%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center text-lime-400 font-bold", children: "Margem Bruta 82,9%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-rose-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4", children: "(-) DESPESAS OPERACIONAIS (OPEX MENSAL / ANUAL)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                  "(R$ ",
                  (723120 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  }),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "-28.8%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-rose-400", children: "Despesas Operacionais" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-6", children: "└─ Infraestrutura de TI & Cloud Otimizada (1M Usuários)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                  "(R$ ",
                  (87120 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  }),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "-3.5%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-lime-400 font-bold", children: "R$ 7.260/mês (-61.5%)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-6", children: "└─ Pessoal, Engenharia de Software & Suporte Atleta" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                  "(R$ ",
                  (36e4 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  }),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "-14.3%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-500", children: "Equipe Core" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-6", children: "└─ Marketing de Performance & Aquisição (CAC Orgânico)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                  "(R$ ",
                  (18e4 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  }),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "-7.2%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-500", children: "Mídia de Alta Eficiência" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-6", children: "└─ Despesas Gerais, Administrativas & Contabilidade (G&A)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                  "(R$ ",
                  (96e3 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  }),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "-3.8%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-500", children: "Fixas G&A" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-lime-400/10 font-bold text-white border-y-2 border-lime-400/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-4 text-lime-300 font-black", children: "(=) EBITDA (LUCRO ANTES DE JUROS, IMPOSTOS E DEPRECIAÇÃO)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3.5 px-4 text-right font-mono text-lime-400 text-base font-black", children: [
                  "R$ ",
                  (1359474 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-4 text-right text-lime-400 font-black text-sm", children: "54.1%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-4 text-center text-lime-400 font-black", children: "★ Margem EBITDA 54,1%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 font-semibold text-zinc-300", children: "(-) Depreciação e Amortização de Ativos Tecnológicos" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                  "(R$ ",
                  (24e3 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  }),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "-1.0%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-500", children: "Amortização P&D" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-300 font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4", children: "(=) EBIT (RESULTADO OPERACIONAL ANTES DOS IMPOSTOS)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono text-white", children: [
                  "R$ ",
                  (1335474 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "53.1%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-400", children: "EBIT 53,1%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 font-semibold text-zinc-300", children: "(+/-) Resultado Financeiro Líquido (Rendimentos de Caixa)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                  "R$ ",
                  (18400 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "+0.7%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-lime-400", children: "Rendimento CDI" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-zinc-300 font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4", children: "(=) LAIR (LUCRO ANTES DO IMPOSTO DE RENDA E CSLL)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono text-white", children: [
                  "R$ ",
                  (1353874 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "53.9%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-zinc-400", children: "LAIR 53,9%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition text-rose-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4", children: "(-) IMPOSTO DE RENDA & CSLL (IRPJ / CSLL Lucro Presumido)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-right font-mono", children: [
                  "(R$ ",
                  (203081 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  }),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: "-8.1%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-center text-rose-400", children: "Tributação IRPJ/CSLL" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-purple-900/40 font-bold text-white border-t-2 border-purple-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-4 text-purple-200 font-black text-sm", children: "(=) LUCRO LÍQUIDO DO EXERCÍCIO (NETFITS TECNOLOGIA S.A.)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-4 px-4 text-right font-mono text-lime-400 text-lg font-black", children: [
                  "R$ ",
                  (1150793 * pf).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                  })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-4 text-right text-lime-400 font-black text-base", children: "45.8%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-4 text-center text-lime-400 font-black", children: "★ Margem Líquida 45,8%" })
              ] })
            ] })
          ] }) })
        ] })
      ] })
    ] })
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
