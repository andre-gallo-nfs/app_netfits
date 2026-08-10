import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  BarChart3, Users, ShoppingBag, Activity, Rss, Handshake, ShieldAlert,
  DollarSign, Cpu, ArrowUpRight, ArrowDownRight, RefreshCw, Zap, Award,
  CheckCircle2, Clock, Filter, Eye, Heart, TrendingUp, Sparkles, Infinity,
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

type TabType = "overview" | "feed" | "market" | "activities" | "users" | "partners" | "controls";

function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [isLive, setIsLive] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString());

  // Simulação de atualização realtime
  useEffect(() => {
    const interval = setInterval(() => {
      if (isLive) {
        setLastUpdated(new Date().toLocaleTimeString());
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isLive]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans pb-12">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
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

      {/* Main Tab Bar Navigation */}
      <nav className="bg-zinc-900/50 border-b border-zinc-800 px-4 flex gap-1 overflow-x-auto no-scrollbar py-2 text-xs font-semibold">
        {[
          { id: "overview", label: "Visão Geral", icon: BarChart3 },
          { id: "feed", label: "Feed & Conteúdo", icon: Rss },
          { id: "market", label: "Marketplace (Shop)", icon: ShoppingBag },
          { id: "activities", label: "Atividades & Sensor", icon: Activity },
          { id: "users", label: "Usuários & Associados", icon: Users },
          { id: "partners", label: "Parceiros & Assessorias", icon: Handshake },
          { id: "controls", label: "Controles & Finanças", icon: Cpu },
        ].map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl shrink-0 transition-all ${
                active
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30 font-bold"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60"
              }`}
            >
              <Icon className="size-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Main Body Container */}
      <main className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6">
        {/* KPI Recommendation Bar */}
        <section className="bg-gradient-to-r from-purple-950/80 via-zinc-900 to-zinc-900 border border-purple-500/30 rounded-2xl p-4 shadow-xl flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-lime-400/10 border border-lime-400/30 grid place-items-center text-lime-400 font-bold">
              <Sparkles className="size-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">Guia de Indicadores Recomendados (Manifesto v2.0)</h2>
              <p className="text-xs text-zinc-400 max-w-2xl">
                Acompanhe o equilíbrio entre **Retenção de Hábitos** (DAU/MAU), **Economia de NFS** (Emissão vs Queima) e **Captação por Associados**.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="text-[10px] bg-purple-900/60 text-purple-200 border border-purple-700/50 font-mono px-2.5 py-1 rounded-md">
              Healthspan Score: 94.8%
            </span>
            <span className="text-[10px] bg-lime-400/20 text-lime-300 border border-lime-400/30 font-mono px-2.5 py-1 rounded-md">
              Retenção 30d: 78.2%
            </span>
          </div>
        </section>

        {/* Tab 1: Visão Geral */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Top Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <KpiCard
                title="Usuários Ativos (DAU)"
                value="48.290"
                change="+14.2%"
                positive={true}
                icon={Users}
                subtext="78.2% em atividade frequente"
              />
              <KpiCard
                title="NFS Emitidos Hoje"
                value="1.482.000"
                change="+8.9%"
                positive={true}
                icon={Zap}
                subtext="Multiplicador médio: 1.4x"
              />
              <KpiCard
                title="GMV Marketplace (Shop)"
                value="R$ 184.900"
                change="+22.5%"
                positive={true}
                icon={ShoppingBag}
                subtext="Resgates via nfs: 42%"
              />
              <KpiCard
                title="Captação via Associados"
                value="14.820 novos"
                change="+31.0%"
                positive={true}
                icon={Award}
                subtext="892 associados VIP ativos"
              />
            </div>

            {/* Chart Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-bold text-white">Engajamento & Emissão de Netfits (Realtime)</h3>
                    <p className="text-xs text-zinc-400">Atividades físicas sincronizadas vs Distribuição de moedas nfs</p>
                  </div>
                  <span className="text-xs font-mono text-lime-400 bg-lime-400/10 px-2 py-0.5 rounded border border-lime-400/20">
                    Ao Vivo
                  </span>
                </div>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={ENGAGEMENT_DATA}>
                      <defs>
                        <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#84cc16" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#84cc16" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                      <XAxis dataKey="time" stroke="#71717a" fontSize={11} />
                      <YAxis stroke="#71717a" fontSize={11} />
                      <Tooltip contentStyle={{ backgroundColor: "#18181b", borderColor: "#27272a", borderRadius: "12px" }} />
                      <Area type="monotone" dataKey="usuarios" stroke="#84cc16" strokeWidth={2} fillOpacity={1} fill="url(#colorUsers)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Modalidades populares */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Distribuição por Esporte</h3>
                  <p className="text-xs text-zinc-400 mb-4">Participação no ecossistema ativo</p>
                  <div className="h-44 w-full flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={CATEGORY_DISTRIBUTION} innerRadius={45} outerRadius={70} dataKey="value">
                          {CATEGORY_DISTRIBUTION.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: "#18181b", borderColor: "#27272a" }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {CATEGORY_DISTRIBUTION.map((c) => (
                    <div key={c.name} className="flex items-center gap-2">
                      <span className="size-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                      <span className="text-zinc-300 truncate">{c.name}: {c.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Feed */}
        {activeTab === "feed" && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-4">
            <h3 className="text-base font-bold text-white">Métricas de Feed & Conteúdo Curado</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <span className="text-xs text-zinc-400">Total de Interações Hoje</span>
                <p className="text-2xl font-extrabold text-white mt-1">128.400</p>
                <span className="text-[10px] text-lime-400">+18% vs média semanal</span>
              </div>
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <span className="text-xs text-zinc-400">CTR em Posts de Parceiros</span>
                <p className="text-2xl font-extrabold text-lime-400 mt-1">14.8%</p>
                <span className="text-[10px] text-zinc-400">Dra. Isabella & Smart Fit lideram</span>
              </div>
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <span className="text-xs text-zinc-400">NFS Recompensados no Feed</span>
                <p className="text-2xl font-extrabold text-purple-400 mt-1">642.000 nfs</p>
                <span className="text-[10px] text-zinc-400">Via curtidas e compartilhamentos</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Marketplace */}
        {activeTab === "market" && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-4">
            <h3 className="text-base font-bold text-white">Indicadores de Vendas & Marketplace (Netfits Shop)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <span className="text-xs text-zinc-400">Ticket Médio em Compras</span>
                <p className="text-2xl font-extrabold text-white mt-1">R$ 248,50</p>
              </div>
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <span className="text-xs text-zinc-400">Taxa de Resgate com NFS</span>
                <p className="text-2xl font-extrabold text-lime-400 mt-1">42.5%</p>
              </div>
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <span className="text-xs text-zinc-400">Produto Mais Vendido</span>
                <p className="text-sm font-bold text-purple-300 mt-1">Asics Novablast & Liquidz</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Atividades */}
        {activeTab === "activities" && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-4">
            <h3 className="text-base font-bold text-white">Telemetria & Treinos Sincronizados</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <span className="text-xs text-zinc-400">Horas de Treino Hoje</span>
                <p className="text-2xl font-extrabold text-white mt-1">18.420 hrs</p>
              </div>
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <span className="text-xs text-zinc-400">Dispositivo Mais Conectado</span>
                <p className="text-lg font-bold text-lime-400 mt-1">Garmin (54%) / Apple Watch (38%)</p>
              </div>
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <span className="text-xs text-zinc-400">Consistência Média Semanal</span>
                <p className="text-2xl font-extrabold text-purple-400 mt-1">4.2 treinos/semana</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Usuários & Associados */}
        {activeTab === "users" && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-4">
            <h3 className="text-base font-bold text-white">Gestão da Base de Atletas & ASSOCIADOS VIP</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <span className="text-xs text-zinc-400">Total de Associados VIP</span>
                <p className="text-2xl font-extrabold text-lime-400 mt-1">892 Associados</p>
              </div>
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <span className="text-xs text-zinc-400">Média de Captação / Associado</span>
                <p className="text-2xl font-extrabold text-white mt-1">16.6 membros</p>
              </div>
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <span className="text-xs text-zinc-400">Comissões em NFS Pagas</span>
                <p className="text-2xl font-extrabold text-purple-400 mt-1">1.482.000 nfs</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 6: Parceiros */}
        {activeTab === "partners" && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-4">
            <h3 className="text-base font-bold text-white">Desempenho de Parceiros Credenciados</h3>
            <p className="text-xs text-zinc-400">Smart Fit, Dra. Isabella, Clínica Fibios e Lojas Parceiras.</p>
          </div>
        )}

        {/* Tab 7: Controles Administrativos, Tecnológicos & Financeiros */}
        {activeTab === "controls" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                <ShieldAlert className="size-4" />
                Controles Administrativos
              </div>
              <ul className="text-xs text-zinc-300 space-y-2">
                <li className="flex justify-between"><span>Moderação de Posts:</span> <span className="font-bold text-lime-400">0 pendentes</span></li>
                <li className="flex justify-between"><span>Conformidade LGPD:</span> <span className="font-bold text-lime-400">100% OK</span></li>
                <li className="flex justify-between"><span>Auditoria de Consentimentos:</span> <span className="font-bold text-zinc-400">Ativa</span></li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-lime-400 font-bold text-sm">
                <Cpu className="size-4" />
                Controles Tecnológicos
              </div>
              <ul className="text-xs text-zinc-300 space-y-2">
                <li className="flex justify-between"><span>Latência de API:</span> <span className="font-bold text-lime-400">24ms</span></li>
                <li className="flex justify-between"><span>Uptime dos Serviços:</span> <span className="font-bold text-lime-400">99.99%</span></li>
                <li className="flex justify-between"><span>Taxa de Erros Wearables:</span> <span className="font-bold text-zinc-400">0.02%</span></li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <DollarSign className="size-4" />
                Controles Financeiros
              </div>
              <ul className="text-xs text-zinc-300 space-y-2">
                <li className="flex justify-between"><span>Reserva de Garantia NFS:</span> <span className="font-bold text-lime-400">100% Coberta</span></li>
                <li className="flex justify-between"><span>Burn Rate de Moedas:</span> <span className="font-bold text-zinc-300">Sustentável</span></li>
                <li className="flex justify-between"><span>Margem Operacional Shop:</span> <span className="font-bold text-lime-400">28.4%</span></li>
              </ul>
            </div>
          </div>
        )}
      </main>
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
}: {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: any;
  subtext: string;
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-xl relative overflow-hidden group hover:border-purple-500/50 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-zinc-400">{title}</span>
        <div className="size-8 rounded-lg bg-zinc-800 grid place-items-center text-lime-400">
          <Icon className="size-4" />
        </div>
      </div>
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-2xl font-extrabold text-white tracking-tight">{value}</span>
        <span className={`text-xs font-bold flex items-center ${positive ? "text-lime-400" : "text-rose-400"}`}>
          {positive ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
          {change}
        </span>
      </div>
      <p className="text-[11px] text-zinc-500">{subtext}</p>
    </div>
  );
}
