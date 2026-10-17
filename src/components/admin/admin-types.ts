export type PeriodType = "1h" | "today" | "24h" | "week" | "7d" | "month" | "year";

export const MONTH_NAMES_PT = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

export interface TimePeriodOption {
  id: PeriodType;
  label: string;
  shortLabel: string;
  factor: number;
  desc: string;
}

export const getDynamicTimePeriods = (): TimePeriodOption[] => {
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

export const TIME_PERIODS = getDynamicTimePeriods();

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

export type TabType =
  | "overview"
  | "results"
  | "xml"
  | "qa"
  | "controls"
  | "activities"
  | "users"
  | "associados"
  | "partners"
  | "params"
  | "points"
  | "feed"
  | "market"
  | "mkplace"
  | "interactions";

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
