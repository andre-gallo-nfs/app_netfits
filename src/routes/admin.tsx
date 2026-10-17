import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState, useEffect, useMemo } from "react";
import {
  Activity,
  Award,
  BarChart3,
  Check,
  ChevronDown,
  Coins,
  Cpu,
  Database,
  DollarSign,
  FileText,
  Handshake,
  Lock,
  Rss,
  Send,
  ShoppingBag,
  Sliders,
  Sparkles,
  Store,
  TrendingUp,
  Users
} from "lucide-react";
import { toast } from "sonner";
import { wallet } from "@/lib/wallet-store";
import { operationalParamsStore, useOperationalParams } from "@/lib/operational-params-store";
import { useColdTier, coldTierStore } from "@/lib/cold-tier-store";
import { sharedSandboxStore, SandboxInteraction, classifyTransactionCategory, SandboxUser, SandboxOrder } from "@/lib/shared-sandbox-store";
import { qaEngine, QaTestRunResult } from "@/lib/qa-autonomous-engine";
import netfitsLogo from "@/assets/netfits-logo.png";
import { AdminAuthGuard } from "@/components/admin/AdminAuthGuard";
import { AdminMkplaceIntegrationTab } from "@/components/admin/AdminMkplaceIntegrationTab";
import { AdminInteractionsTab } from "@/components/admin/AdminInteractionsTab";
import { AdminXmlAccountingTab } from "@/components/admin/AdminXmlAccountingTab";
import { AdminQaEngineTab } from "@/components/admin/AdminQaEngineTab";
import { AdminOperationalParamsTab } from "@/components/admin/AdminOperationalParamsTab";
import { AdminOverviewTab } from "@/components/admin/AdminOverviewTab";
import { AdminDreFinOpsTab } from "@/components/admin/AdminDreFinOpsTab";
import { AdminPointsFefoTab } from "@/components/admin/AdminPointsFefoTab";
import { AdminAssociadosTab, ASSOCIADOS_MOCK_DATABASE } from "@/components/admin/AdminAssociadosTab";
import { AdminActivitiesTab } from "@/components/admin/AdminActivitiesTab";
import { AdminFeedTab } from "@/components/admin/AdminFeedTab";
import { AdminMarketplaceTab } from "@/components/admin/AdminMarketplaceTab";
import { AdminPartnersTab } from "@/components/admin/AdminPartnersTab";
import { AdminUsersTab } from "@/components/admin/AdminUsersTab";


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

const MONTH_NAMES_PT = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

export const getDynamicTimePeriods = (): { id: PeriodType; label: string; shortLabel: string; factor: number; desc: string }[] => {
  const now = new Date();
  const currentMonth = MONTH_NAMES_PT[now.getMonth()] || "Mês Corrente";
  const currentYear = now.getFullYear();

  return [
    { id: "1h", label: "⏱️ Última Hora", shortLabel: "1 hora", factor: 0.035, desc: "Acumulado nos últimos 60 minutos" },
    { id: "today", label: "📅 No Dia (Hoje)", shortLabel: "Hoje", factor: 0.12, desc: "Acumulado no dia de hoje" },
    { id: "24h", label: "⏳ Últimas 24 Horas", shortLabel: "24h", factor: 0.15, desc: "Acumulado nas últimas 24 horas" },
    { id: "week", label: "🗓️ Esta Semana", shortLabel: "Semana", factor: 0.28, desc: "Acumulado na semana corrente" },
    { id: "7d", label: "📆 Últimos 7 Dias", shortLabel: "7 dias", factor: 0.30, desc: "Acumulado nos últimos 7 dias" },
    { id: "month", label: `📊 No Mês (${currentMonth})`, shortLabel: "Mês", factor: 1.00, desc: `Acumulado no mês de referência (${currentMonth})` },
    { id: "year", label: `🚀 No Ano (${currentYear})`, shortLabel: "Ano", factor: 11.40, desc: `Acumulado no ano de ${currentYear}` },
  ];
};

const TIME_PERIODS = getDynamicTimePeriods();

export function normalizeOrderPaymentMethod(raw?: string | null): "CREDIT_CARD" | "PIX" | "UNKNOWN" {
  if (!raw) return "UNKNOWN";
  const str = String(raw)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
  if (str.includes("CREDIT") || str.includes("CARTAO") || str.includes("CARD")) {
    return "CREDIT_CARD";
  }
  if (str.includes("PIX")) {
    return "PIX";
  }
  return "UNKNOWN";
}

type TabType = "overview" | "results" | "xml" | "qa" | "controls" | "activities" | "users" | "associados" | "partners" | "params" | "points" | "feed" | "market" | "mkplace" | "interactions";

export interface AdminPillarDef {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  color: string;
  tabIds: TabType[];
}

export const ADMIN_PILLARS: AdminPillarDef[] = [
  {
    id: "finances",
    title: "1. Estratégia & Finanças",
    subtitle: "DRE, Cockpit Executivo & SPED Contábil",
    emoji: "📊",
    color: "text-purple-400 border-purple-500/30 bg-purple-950/40",
    tabIds: ["overview", "results", "xml"],
  },
  {
    id: "ai_tech",
    title: "2. IA, Tecnologia & QA",
    subtitle: "Squads de IA, Health Check & FinOps Cloud",
    emoji: "🤖",
    color: "text-lime-400 border-lime-500/30 bg-lime-950/40",
    tabIds: ["qa", "controls", "activities"],
  },
  {
    id: "community",
    title: "3. Ecossistema & Usuários",
    subtitle: "Base Oficial de Usuários & Sócios",
    emoji: "👥",
    color: "text-amber-400 border-amber-500/30 bg-amber-950/40",
    tabIds: ["users", "associados", "partners"],
  },
  {
    id: "operations",
    title: "4. Governança & Operação",
    subtitle: "Parâmetros, Shop, Feed & Interações",
    emoji: "⚙️",
    color: "text-cyan-400 border-cyan-500/30 bg-cyan-950/40",
    tabIds: ["params", "points", "feed", "market", "interactions"],
  },
];

const TAB_DEFINITIONS: { id: TabType; label: string; iconEmoji: string; icon: React.ComponentType<{ className?: string }>; category: string; pillarId: string }[] = [
  { id: "overview", label: "Visão Geral & Cockpit", iconEmoji: "📊", icon: BarChart3, category: "Consolidado", pillarId: "finances" },
  { id: "results", label: "Resultados & DRE Projetada", iconEmoji: "📈", icon: DollarSign, category: "Demonstrações Financeiras", pillarId: "finances" },
  { id: "xml", label: "Arquivos XML & SPED", iconEmoji: "📑", icon: FileText, category: "Fiscal & Contabilidade", pillarId: "finances" },
  
  { id: "qa", label: "Squad QA Autônomo & Health Check", iconEmoji: "🤖", icon: Sparkles, category: "Inteligência & Qualidade", pillarId: "ai_tech" },
  { id: "controls", label: "Controles & FinOps TI", iconEmoji: "🛡️", icon: Cpu, category: "Governança TI", pillarId: "ai_tech" },
  { id: "activities", label: "Atividades & Wearables", iconEmoji: "⚡", icon: Activity, category: "Engajamento", pillarId: "ai_tech" },

  { id: "users", label: "Base de Usuários Oficiais", iconEmoji: "👥", icon: Users, category: "Comunidade", pillarId: "community" },
  { id: "associados", label: "Gestão de Associados (10%)", iconEmoji: "👑", icon: Award, category: "Prescritores", pillarId: "community" },
  { id: "partners", label: "Parceiros & Assessorias B2B", iconEmoji: "🤝", icon: Handshake, category: "Ecossistema", pillarId: "community" },

  { id: "params", label: "Parâmetros da Operação", iconEmoji: "⚙️", icon: Sliders, category: "Regras de Negócio", pillarId: "operations" },
  { id: "points", label: "Programa de Pontos nfs", iconEmoji: "🪙", icon: Coins, category: "Fidelidade & Passivo", pillarId: "operations" },
  { id: "feed", label: "Feed & Retail Media", iconEmoji: "📰", icon: Rss, category: "Mídias & Anúncios", pillarId: "operations" },
  { id: "market", label: "Marketplace & Shop Netfits", iconEmoji: "🛍️", icon: ShoppingBag, category: "Vendas & Sellers", pillarId: "operations" },
  { id: "interactions", label: "Central de Interações & Insights", iconEmoji: "💡", icon: Send, category: "Omnichannel BI", pillarId: "operations" },
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
  referralCode?: string;
  exclusiveUrl?: string;
  activeUsers?: number;
  isVerifiedSpecialist?: boolean;
  specialistBadgeLabel?: string;
  capturedUsers: number;
  retentionRatePct: number;
  gmvBrl: number;
  netfitsRevenueBrl: number;
  commissionPctOfNetfitsRev?: number;
  commissionBrl: number;
  payoutStatus?: "Pago" | "Pendente" | "Processando";
  syntheticActions?: {
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


function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("netfits_admin_authenticated") === "true";
    }
    return false;
  });
  const [adminUser, setAdminUser] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const [activeTab, setActiveTab] = useState<TabType>("params");
  const [isLive, setIsLive] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    sharedSandboxStore.syncFromCloud();
    const timer = setInterval(() => {
      sharedSandboxStore.syncFromCloud();
      setLastUpdated(new Date().toLocaleTimeString());
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUser = adminUser.trim().toLowerCase();
    const cleanPass = adminPassword.trim();

    if (!cleanUser || !cleanPass) {
      toast.error("Informe seu e-mail de administrador e sua senha.");
      return;
    }

    if (
      (cleanUser === "admin@netfits.com.br" || cleanUser === "diretoria@netfits.com.br") &&
      (cleanPass === "Admin@2026" || cleanPass === "Netfits#2026")
    ) {
      setIsAuthenticated(true);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("netfits_admin_authenticated", "true");
      }
      toast.success("Acesso administrativo executivo concedido!");
    } else {
      toast.error("Credenciais incorretas! Verifique o e-mail e a Senha Master.");
    }
  };

  // Filtro Global de Período de Tempo Acumulado
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>("month");
  const currentPeriodObj = TIME_PERIODS.find((p) => p.id === selectedPeriod) || TIME_PERIODS[5];
  const currentTabObj = TAB_DEFINITIONS.find((t) => t.id === activeTab) || TAB_DEFINITIONS[0];
  const pf = currentPeriodObj.factor;

  // Estado dos Parâmetros da Operação (Sincronizado via Store Reativo Global)
  const storedParams = useOperationalParams();
  const [operationalParams, setOperationalParams] = useState(storedParams);
  const coldTier = useColdTier();

  useEffect(() => {
    setOperationalParams(storedParams);
  }, [storedParams]);

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

  // Modal de Cadastrar Novo Associado pelo Time Admin

  // Estados para Gestão Completa da Base de Usuários Teste (sharedSandboxStore)
  const [sandboxUsersList, setSandboxUsersList] = useState(() => sharedSandboxStore.getUsers());
  const [sandboxSearchTerm, setSandboxSearchTerm] = useState("");
  const [sandboxRoleFilter, setSandboxRoleFilter] = useState<string>("all");
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [editingBalanceValue, setEditingBalanceValue] = useState<number>(0);
  const [showAddTestUserModal, setShowAddTestUserModal] = useState(false);
  const [newTestUserForm, setNewTestUserForm] = useState({
    fullName: "",
    email: "",
    phone: "(11) 98888-7766",
    cpf: "123.456.789-00",
    birthDate: "1995-05-10",
    type: "athlete" as "athlete" | "associado" | "partner" | "admin",
    initialNfs: 50,
    referralCode: "",
  });

  useEffect(() => {
    setSandboxUsersList(sharedSandboxStore.getUsers());
    const unsub = sharedSandboxStore.subscribe(() => {
      setSandboxUsersList([...sharedSandboxStore.getUsers()]);
    });
    return () => unsub();
  }, []);

  // Modo de visualização dos relatórios: "real" (Banco Definitivo em Produção) vs "projection" (Projeção Business Plan)
  const [adminDataSource, setAdminDataSource] = useState<"real" | "projection">("real");
  const isReal = adminDataSource === "real";

  // Métricas extraídas diretamente do Banco de Dados Definitivo de Produção (sharedSandboxStore)
  const realUsersCount = sandboxUsersList.length;
  const realActiveUsersCount = sandboxUsersList.filter(u => (u.nfsBalance || 0) > 0).length || realUsersCount;
  const realNfsInCirculation = sandboxUsersList.reduce((acc, u) => acc + (u.nfsBalance || 0), 0);
  const realOrders = sharedSandboxStore.getOrders();
  const realGmvBrl = realOrders.reduce((acc, o: SandboxOrder) => {
    const val = Number(o.amountBrl ?? o.summary?.finalPrice ?? o.summary?.total ?? (o.pointsPaid ? o.pointsPaid * 0.01 : 0));
    return acc + (isNaN(val) ? 0 : val);
  }, 0);
  const realAssociadosList = sandboxUsersList.filter((u) => u.type === "associado");
  const realAssociadosCount = realAssociadosList.length;
  const realClubSubscribersCount = sandboxUsersList.filter((u: SandboxUser) => u.plan === "club" || Boolean((u as SandboxUser & { isClubSubscriber?: boolean }).isClubSubscriber)).length;
  const realTotalPointsRedeemed = realOrders.reduce((acc, o: SandboxOrder) => acc + (o.pointsPaid ?? o.summary?.points?.amount ?? 0), 0);
  const realTransactions = sharedSandboxStore.getTransactions();
  const realPartners = sharedSandboxStore.getPartners();
  const realWorkoutTransactions = realTransactions.filter((t) => classifyTransactionCategory(t) === "workout");
  const realWorkoutCount = realWorkoutTransactions.length;
  const realWorkoutPoints = realWorkoutTransactions.reduce((acc, t) => acc + (t.amount || 0), 0);
  const declaredLoyaltyUsers = sandboxUsersList.filter(u => u.loyaltyPrograms && u.loyaltyPrograms.length > 0);
  const declaredLoyaltyCount = declaredLoyaltyUsers.length;
  const declaredProgramsBreakdown = {
    livelo: sandboxUsersList.filter(u => u.loyaltyPrograms?.some(p => p.toLowerCase().includes("livelo"))).length,
    esfera: sandboxUsersList.filter(u => u.loyaltyPrograms?.some(p => p.toLowerCase().includes("esfera"))).length,
    c6: sandboxUsersList.filter(u => u.loyaltyPrograms?.some(p => p.toLowerCase().includes("c6"))).length,
    outros: sandboxUsersList.filter(u => u.loyaltyPrograms?.some(p => !p.toLowerCase().includes("livelo") && !p.toLowerCase().includes("esfera") && !p.toLowerCase().includes("c6"))).length,
  };

  // Transações de Feed & Incentivo Mídia Netfits (Apuradas Diretamente da Base de Dados)
  const realFeedTransactions = useMemo(() => {
    return realTransactions.filter((t) => classifyTransactionCategory(t) === "feed");
  }, [realTransactions]);

  const realFeedNfsIssued = useMemo(() => {
    return realFeedTransactions.reduce((acc, t) => acc + (t.amount || 0), 0);
  }, [realFeedTransactions]);

  const realFeedReadsTxs = useMemo(() => {
    return realFeedTransactions.filter((t) => /leitura|artigo/i.test(t.description || ""));
  }, [realFeedTransactions]);
  const realFeedReadsCount = realFeedReadsTxs.length;
  const realFeedReadsNfs = realFeedReadsTxs.reduce((acc, t) => acc + (t.amount || 0), 0);

  const realFeedQuizzesTxs = useMemo(() => {
    return realFeedTransactions.filter((t) => /desafio|quiz/i.test(t.description || ""));
  }, [realFeedTransactions]);
  const realFeedQuizzesCount = realFeedQuizzesTxs.length;
  const realFeedQuizzesNfs = realFeedQuizzesTxs.reduce((acc, t) => acc + (t.amount || 0), 0);

  const realFeedSharesTxs = useMemo(() => {
    return realFeedTransactions.filter((t) => t.category === "share" || /compartilhamento/i.test(t.description || ""));
  }, [realFeedTransactions]);
  const realFeedSharesCount = realFeedSharesTxs.length;
  const realFeedSharesNfs = realFeedSharesTxs.reduce((acc, t) => acc + (t.amount || 0), 0);

  const realFeedSocialTxs = useMemo(() => {
    return realFeedTransactions.filter((t) => ["like", "click", "view"].includes(t.category) || /curtida|like|click|engajamento|vídeo/i.test(t.description || ""));
  }, [realFeedTransactions]);
  const realFeedSocialCount = realFeedSocialTxs.length;
  const realFeedSocialNfs = realFeedSocialTxs.reduce((acc, t) => acc + (t.amount || 0), 0);

  const realFeedEngagedUsers = useMemo(() => {
    return new Set(realFeedTransactions.map((t) => t.userId)).size;
  }, [realFeedTransactions]);

  // Custo contábil do passivo de incentivo (1 NFS = R$ 0,01 de passivo de resgate)
  const realFeedExpenseBrl = realFeedNfsIssued * 0.01;

  // Telemetria e última atividade no banco real
  const latestTx = useMemo(() => {
    if (!realTransactions || realTransactions.length === 0) return null;
    return realTransactions.slice().sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())[0];
  }, [realTransactions]);

  const realLastAccessStr = useMemo(() => {
    if (!latestTx) return "Sem acessos";
    const diffHours = Math.max(0, (Date.now() - new Date(latestTx.timestamp).getTime()) / (1000 * 60 * 60));
    if (diffHours < 1) return `${Math.max(1, Math.round(diffHours * 60))} min`;
    if (diffHours < 24) return `${diffHours.toFixed(1)} horas`;
    return `${Math.round(diffHours / 24)} dias`;
  }, [latestTx]);

  // EBITDA e Margem Real calculados da base oficial
  const realTakeRateRev = realGmvBrl * ((operationalParams.netfitsTakeRatePctFromGmv ?? 6.0) / 100);
  const realClubRev = realClubSubscribersCount * (operationalParams.netfitsClubMonthlyFeeBrl ?? 19.90);
  const realGrossRevenue = realTakeRateRev + realClubRev;
  const realSalesTaxes = realGrossRevenue * 0.06;
  const realPointsCost = realNfsInCirculation * (operationalParams.costPerProvisionedPointBrl ?? 0.01);
  const realRedemptionsCost = realTotalPointsRedeemed * (operationalParams.cppResgateBrl ?? 0.01);
  const realAcquiringCost = realGmvBrl * 0.025;
  const realEbitdaVal = realGrossRevenue - realSalesTaxes - realPointsCost - realRedemptionsCost - realAcquiringCost;
  const realEbitdaMarginPct = realGrossRevenue > 0 ? (realEbitdaVal / realGrossRevenue) * 100 : 0;
  const realOrdersConvPct = realUsersCount > 0 ? Number(((realOrders.length / realUsersCount) * 100).toFixed(2)) : 0;

  
  const [selectedAssociadoId, setSelectedAssociadoId] = useState<string>("assoc_all");
  const selectedAssociado =
    associadosList.find((a) => a.id === selectedAssociadoId) || associadosList[0];

  // Filtro de Sellers do Marketplace
  const [drePhase, setDrePhase] = useState<"fase1" | "fase2">("fase1");

  // Estado do Modal de Apresentação de Investidores (Pitch Deck)
  const [showPitchDeckModal, setShowPitchDeckModal] = useState<boolean>(false);
  const [pitchSlide, setPitchSlide] = useState<number>(1);

  // Métricas Detalhadas do Marketplace (Banco Real)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isLive) {
        setLastUpdated(new Date().toLocaleTimeString());
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isLive]);

  if (!isAuthenticated) {
    return <AdminAuthGuard onUnlocked={() => setIsAuthenticated(true)} />;
  }

  const activePillar = ADMIN_PILLARS.find((p) => p.tabIds.includes(activeTab)) || ADMIN_PILLARS[0];

  return (
    <div className="min-h-screen max-w-full overflow-x-hidden bg-zinc-950 text-zinc-100 font-sans">
      {/* 1. Header Executivo Interno Netfits Admin (Exclusivo, sem menu público) */}
      <header className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80 px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5">
            <div className="size-8 rounded-lg bg-zinc-900 border border-purple-500/40 grid place-items-center p-1 shadow-md">
              <img src={netfitsLogo} alt="Netfits" className="h-full w-auto object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-black tracking-tight text-base text-white flex items-center gap-1.5 leading-none">
                Netfits <span className="text-lime-400 text-[10px] uppercase tracking-widest font-mono bg-lime-950/60 border border-lime-500/30 px-1.5 py-0.5 rounded">ADMIN COCKPIT</span>
              </span>
              <span className="text-[10px] text-zinc-400 font-medium">Governança &amp; Inteligência Interna</span>
            </div>
          </div>
        </div>

        {/* Controles de Topo: Fonte de Dados (Banco Real vs Projeção), Realtime, Período, Pitch Deck e Logout */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-end">
          {/* Seletor Fonte de Dados: Banco Definitivo em Produção vs Projeção Business Plan */}
          <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-800 shadow-inner">
            <button
              onClick={() => {
                setAdminDataSource("real");
                toast.success("Painel conectado ao Banco de Dados Definitivo de Produção (Vida Real)");
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                adminDataSource === "real"
                  ? "bg-lime-400 text-zinc-950 shadow-sm shadow-lime-400/20"
                  : "text-zinc-400 hover:text-white"
              }`}
              title="Exibir apenas os dados reais em produção (André Gallo, 50 nfs)"
            >
              <Database className="size-3.5" />
              <span>Banco Real</span>
            </button>
            <button
              onClick={() => {
                setAdminDataSource("projection");
                toast.info("Painel exibindo Projeções Financeiras do Business Plan");
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                adminDataSource === "projection"
                  ? "bg-purple-600 text-white shadow-sm shadow-purple-600/30"
                  : "text-zinc-400 hover:text-white"
              }`}
              title="Exibir projeções estratégicas do modelo financeiro (48k usuários)"
            >
              <TrendingUp className="size-3.5" />
              <span className="hidden sm:inline">Projeção</span>
            </button>
          </div>

          {/* Seletor Rápido de Período */}
          <div className="relative hidden md:block">
            <select
              value={selectedPeriod}
              onChange={(e) => {
                const nextPeriod = e.target.value as PeriodType;
                setSelectedPeriod(nextPeriod);
                const periodObj = TIME_PERIODS.find((p) => p.id === nextPeriod);
                toast.info(`Período alterado para: ${periodObj?.label}`);
              }}
              className="bg-zinc-900 text-lime-400 font-bold text-xs rounded-xl px-3 py-1.5 border border-zinc-800 hover:border-lime-400/50 focus:outline-none appearance-none cursor-pointer pr-8 shadow-inner"
            >
              {TIME_PERIODS.map((p) => (
                <option key={p.id} value={p.id} className="bg-zinc-900 text-white font-medium py-1">
                  {p.label}
                </option>
              ))}
            </select>
            <ChevronDown className="size-3.5 text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="flex items-center gap-1.5 bg-zinc-900 px-2.5 py-1.5 rounded-xl border border-zinc-800 text-[11px]">
            <span className={`size-2 rounded-full ${isLive ? "bg-lime-400 animate-pulse" : "bg-zinc-500"}`} />
            <span className="font-mono text-zinc-300 font-bold hidden sm:inline">{isLive ? "REALTIME" : "PAUSA"}</span>
          </div>

          <button
            onClick={() => {
              setShowPitchDeckModal(true);
              toast.info("Pitch Deck Estratégico para Investidores aberto!");
            }}
            className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md shadow-purple-600/30 flex items-center gap-1.5 transition cursor-pointer"
          >
            <TrendingUp className="size-3.5" />
            <span className="hidden sm:inline">Pitch Deck</span>
          </button>

          <button
            onClick={() => {
              setIsAuthenticated(false);
              if (typeof window !== "undefined") {
                sessionStorage.removeItem("netfits_admin_authenticated");
              }
              toast.info("Sessão administrativa encerrada.");
            }}
            className="px-2.5 py-1.5 rounded-xl bg-zinc-900 hover:bg-red-950/60 hover:border-red-500/40 text-zinc-400 hover:text-red-300 border border-zinc-800 text-xs font-bold transition cursor-pointer flex items-center gap-1"
            title="Encerrar Sessão Admin"
          >
            <Lock className="size-3.5" />
            <span className="hidden sm:inline">Sair</span>
          </button>
        </div>
      </header>

      {/* 2. Layout Dividido: Sidebar Lateral com 4 Pilares + Conteúdo Principal */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-57px)] w-full">
        {/* SIDEBAR LATERAL (4 PILARES ESTRATÉGICOS) */}
        <aside className="w-full lg:w-72 bg-zinc-900/90 border-r border-zinc-800/80 p-4 space-y-5 shrink-0 overflow-y-auto">
          <div className="flex items-center justify-between border-b border-zinc-800/60 pb-3">
            <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-wider">
              4 Pilares de Gestão
            </span>
            <span className="text-[10px] font-mono text-purple-400 font-bold bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
              14 Módulos
            </span>
          </div>

          <nav className="space-y-4">
            {ADMIN_PILLARS.map((pillar) => {
              const isPillarActive = pillar.tabIds.includes(activeTab);
              return (
                <div key={pillar.id} className="space-y-1.5">
                  <div className="flex items-center justify-between px-2 py-1">
                    <span className="text-xs font-black text-white flex items-center gap-1.5">
                      <span>{pillar.emoji}</span>
                      <span>{pillar.title}</span>
                    </span>
                  </div>
                  <div className="space-y-1 pl-1">
                    {pillar.tabIds.map((tabId) => {
                      const tab = TAB_DEFINITIONS.find((t) => t.id === tabId);
                      if (!tab) return null;
                      const isSelected = activeTab === tabId;
                      const IconComponent = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => {
                            setActiveTab(tab.id);
                            toast.info(`Módulo ativo: ${tab.label}`);
                          }}
                          className={`w-full px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30 ring-1 ring-purple-400"
                              : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
                          }`}
                        >
                          <span className="flex items-center gap-2 truncate">
                            <IconComponent className={`size-3.5 ${isSelected ? "text-lime-400" : "text-zinc-500"}`} />
                            <span className="truncate">{tab.label}</span>
                          </span>
                          {isSelected && <span className="size-1.5 rounded-full bg-lime-400 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Card Inferior de Status de Nuvem & Dossiê */}
          <div className="bg-zinc-950/80 p-3.5 rounded-2xl border border-zinc-800/80 space-y-2 mt-6">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-lime-400 uppercase tracking-widest">
                Sync Nuvem Ativo
              </span>
              <span className="size-2 rounded-full bg-lime-400 animate-pulse"></span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-snug">
              Base de 24 personas e cadastros mobile sincronizados via <code className="text-purple-300 font-mono">/api/users-sync</code>.
            </p>
          </div>
        </aside>

        {/* ÁREA DE CONTEÚDO PRINCIPAL (MAIN CONTENT) */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full space-y-6 overflow-x-hidden">
          {/* Header da Seção Ativa & Sub-menu Horizontal */}
          <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                <span className="text-purple-400 font-bold">{activePillar.title}</span>
                <span>&rsaquo;</span>
                <span className="text-white font-extrabold">{currentTabObj?.label}</span>
              </div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <span>{currentTabObj?.iconEmoji}</span>
                <span>{currentTabObj?.label}</span>
              </h2>
            </div>

            {/* Abas Rápidas do Mesmo Pilar */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scrollbar-none">
              {activePillar.tabIds.map((tid) => {
                const tObj = TAB_DEFINITIONS.find((t) => t.id === tid);
                if (!tObj) return null;
                const isCur = activeTab === tid;
                return (
                  <button
                    key={tid}
                    onClick={() => setActiveTab(tid)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                      isCur
                        ? "bg-zinc-800 text-lime-400 border border-lime-500/30"
                        : "bg-zinc-950 text-zinc-400 hover:text-zinc-200 border border-zinc-800"
                    }`}
                  >
                    {tObj.label}
                  </button>
                );
              })}
            </div>
          </div>

        {/* Tab XML Contábeis Dedicada */}
        {activeTab === "xml" && <AdminXmlAccountingTab />}


        {/* Tab: Squad QA Autônomo & Health Check */}
        {activeTab === "qa" && <AdminQaEngineTab />}


        {/* Tab 1: Visão Geral (Modularizado) */}
        {activeTab === "overview" && (
          <AdminOverviewTab
            adminDataSource={adminDataSource}
            isReal={isReal}
            selectedPeriod={selectedPeriod}
            currentPeriodObj={currentPeriodObj}
            pf={pf}
            realUsersCount={realUsersCount}
            realActiveUsersCount={realActiveUsersCount}
            realAssociadosCount={realAssociadosCount}
            realPartners={realPartners}
            realOrders={realOrders}
            realTransactions={realTransactions}
            realNfsInCirculation={realNfsInCirculation}
            realTotalPointsRedeemed={realTotalPointsRedeemed}
            realClubSubscribersCount={realClubSubscribersCount}
            realGmvBrl={realGmvBrl}
            setActiveTab={setActiveTab}
            setDrePhase={setDrePhase}
          />
        )}

        {/* TAB: INTELIGÊNCIA DE INTERAÇÕES & INSIGHTS */}
        {activeTab === "interactions" && (
          <AdminInteractionsTab selectedPeriod={selectedPeriod} isReal={isReal} />
        )}

        {/* Tab: Feed & Conteúdo */}
        {activeTab === "feed" && (
          <AdminFeedTab
            isReal={isReal}
            pf={pf}
            shortLabel={currentPeriodObj.shortLabel}
            realFeedNfsIssued={realFeedNfsIssued}
            realFeedExpenseBrl={realFeedExpenseBrl}
            realFeedReadsNfs={realFeedReadsNfs}
            realFeedReadsCount={realFeedReadsCount}
            realFeedQuizzesNfs={realFeedQuizzesNfs}
            realFeedQuizzesCount={realFeedQuizzesCount}
            realFeedSharesNfs={realFeedSharesNfs}
            realFeedSharesCount={realFeedSharesCount}
            realFeedSocialNfs={realFeedSocialNfs}
            realFeedEngagedUsers={realFeedEngagedUsers}
            realFeedTransactions={realFeedTransactions}
          />
        )}

        {/* Tab: Marketplace & Shop Netfits */}
        {(activeTab === "market" || activeTab === "mkplace") && (
          <AdminMarketplaceTab
            isReal={isReal}
            pf={pf}
            shortLabel={currentPeriodObj.shortLabel}
            realOrders={realOrders}
          />
        )}

        {activeTab === "associados" && (
          <AdminAssociadosTab
            isReal={isReal}
            realAssociadosCount={realAssociadosCount}
            realAssociadosList={realAssociadosList}
            realOrders={realOrders}
            sandboxUsersList={sandboxUsersList}
            realUsersCount={realUsersCount}
            pf={pf}
            shortLabel={currentPeriodObj.shortLabel}
          />
        )}


        {/* Tab: Programa de Pontos (Fidelidade, Emissão, Resgate & Provisão Passiva) */}
        {activeTab === "points" && (
          <AdminPointsFefoTab
            isReal={isReal}
            realTransactions={realTransactions}
            realNfsInCirculation={realNfsInCirculation}
            realTotalPointsRedeemed={realTotalPointsRedeemed}
            realUsersCount={realUsersCount}
            pf={pf}
            shortLabel={currentPeriodObj.shortLabel}
          />
        )}


        {/* Tab: Parâmetros da Operação */}
        {activeTab === "params" && <AdminOperationalParamsTab />}

        {/* Tab: Atividades & Sensor Esportivo */}
        {activeTab === "activities" && (
          <AdminActivitiesTab
            isReal={isReal}
            realWorkoutCount={realWorkoutCount}
            realWorkoutPoints={realWorkoutPoints}
            realUsersCount={realUsersCount}
            pf={pf}
            shortLabel={currentPeriodObj.shortLabel}
          />
        )}

        {/* Tab: Base de Usuários & Declaração de Pontos Bancários */}
        {activeTab === "users" && (
          <AdminUsersTab
            isReal={isReal}
            realUsersCount={realUsersCount}
            realActiveUsersCount={realActiveUsersCount}
            declaredLoyaltyCount={declaredLoyaltyCount}
            declaredProgramsBreakdown={declaredProgramsBreakdown}
            pf={pf}
            shortLabel={currentPeriodObj.shortLabel}
          />
        )}

        {/* Tab: Parceiros & Assessorias */}
        {activeTab === "partners" && (
          <AdminPartnersTab
            isReal={isReal}
            realPartners={realPartners}
            realOrders={realOrders}
            realUsersCount={realUsersCount}
            shortLabel={currentPeriodObj.shortLabel}
            pf={pf}
          />
        )}

        {(activeTab === "controls" || activeTab === "results") && (
          <AdminDreFinOpsTab
            activeTab={activeTab as "controls" | "results"}
            isReal={isReal}
            realUsersCount={realUsersCount}
            realActiveUsersCount={realActiveUsersCount}
            realOrders={realOrders}
            realNfsInCirculation={realNfsInCirculation}
            realTotalPointsRedeemed={realTotalPointsRedeemed}
            realGmvBrl={realGmvBrl}
            realClubSubscribersCount={realClubSubscribersCount}
            currentPeriodObj={currentPeriodObj}
            pf={pf}
            drePhase={drePhase}
            setDrePhase={setDrePhase}
            netfitsLogo={netfitsLogo}
          />
        )}
      </main>
      </div>
    </div>
  );
}
