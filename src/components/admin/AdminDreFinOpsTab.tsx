import React, { useState } from "react";
import {
  Cpu,
  Archive,
  Database,
  RefreshCw,
  TrendingUp,
  Download,
  Sparkles,
  Award,
  DollarSign,
  Users,
  Coins,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { toast } from "sonner";
import { KpiCard } from "./admin-ui";
import { useColdTier, coldTierStore } from "@/lib/cold-tier-store";
import { useOperationalParams } from "@/lib/operational-params-store";

export interface AdminDreFinOpsTabProps {
  activeTab: "controls" | "results";
  isReal: boolean;
  realUsersCount: number;
  realActiveUsersCount?: number;
  realOrders: any[];
  realNfsInCirculation: number;
  realTotalPointsRedeemed?: number;
  realGmvBrl: number;
  realClubSubscribersCount: number;
  currentPeriodObj: { id: string; label: string; shortLabel: string; factor: number };
  pf: number;
  drePhase: "fase1" | "fase2";
  setDrePhase: (phase: "fase1" | "fase2") => void;
  netfitsLogo?: string;
}

export function AdminDreFinOpsTab({
  activeTab,
  isReal,
  realUsersCount,
  realActiveUsersCount = 0,
  realOrders,
  realNfsInCirculation,
  realTotalPointsRedeemed = 0,
  realGmvBrl,
  realClubSubscribersCount,
  currentPeriodObj,
  pf,
  drePhase,
  setDrePhase,
  netfitsLogo = "/brand/netfits-icon.svg",
}: AdminDreFinOpsTabProps) {
  const coldTier = useColdTier();
  const operationalParams = useOperationalParams();
  const [showPitchDeckModal, setShowPitchDeckModal] = useState<boolean>(false);
  const [pitchSlide, setPitchSlide] = useState<number>(1);

  return (
    <>
      {activeTab === "controls" && (
        <div className="space-y-6">
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-purple-500/30 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3 bg-gradient-to-r from-purple-950/40 via-zinc-900 to-zinc-900">
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-lime-400">
                  {isReal
                    ? `Infraestrutura Serverless em Produção (${realUsersCount} Usuários Reais)`
                    : "Demonstrativo Financeiro & Engenharia de Custos (1.000.000 de Usuários)"}
                </span>
                <h3 className="text-sm font-bold text-white">
                  {isReal
                    ? "Custo Efetivo de Nuvem (Free Tier & Desenvolvimento)"
                    : "OPEX de TI Otimizado (-61.5% Redução de Custos) & Unit Economics"}
                </h3>
              </div>
              <span className="text-xs font-mono text-lime-400 bg-lime-400/10 px-3.5 py-1.5 rounded-full border border-lime-400/30 font-extrabold">
                {isReal ? "Custo Zero Efetivo (Free Tier Serverless)" : "Economia de -61,5% (US$ 1.320 / R$ 7.260 /mês)"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              <KpiCard
                title={isReal ? "Custo TI Mensal Real" : "Custo TI Mensal (1M Usuários)"}
                value={isReal ? "R$ 0,00 /mês" : "R$ 7.260 /mês"}
                change={isReal ? "Free Tier Ativo" : "-61.5% economia"}
                positive={true}
                icon={Cpu}
                subtext={isReal ? "Cloudflare Pages & Worker" : "US$ 1.320,00 /mês"}
                highlightColor="border-lime-400 ring-1 ring-lime-400/20 bg-lime-400/5"
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Custo por Usuário Cadastrado"
                value={isReal ? "R$ 0,00 /mês" : "R$ 0,007 /mês"}
                change={isReal ? "Sem custo fixo" : "Ultra-eficiente"}
                positive={true}
                icon={DollarSign}
                subtext={isReal ? `${realUsersCount} usuários reais` : "R$ 0,08 / ano"}
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Custo por Usuário Ativo (MAU)"
                value={isReal ? "R$ 0,00 /mês" : "R$ 0,012 /mês"}
                change={isReal ? "Sem custo por MAU" : "R$ 0,14 / ano"}
                positive={true}
                icon={Users}
                subtext={isReal ? `${realActiveUsersCount} usuários ativos` : "620k MAU ativos"}
                periodBadge={currentPeriodObj.shortLabel}
              />
              <KpiCard
                title="Margem EBITDA da Operação"
                value={isReal ? "N/A" : "84.2%"}
                change={isReal ? "Fase Piloto / Testes" : "Alta Lucratividade"}
                positive={true}
                icon={TrendingUp}
                subtext={isReal ? "Sem cobrança recorrente" : "Operação escalável"}
                periodBadge={currentPeriodObj.shortLabel}
              />
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 w-full">
              {isReal && (
                <div className="p-3 bg-zinc-950/80 rounded-xl border border-zinc-800 text-xs text-zinc-400 flex items-center gap-2">
                  <Cpu className="size-4 text-lime-400 shrink-0" />
                  <span>
                    <b>Status de Infraestrutura no Banco Real</b>: O ambiente opera na camada gratuita (Free Tier) para os {realUsersCount} usuários reais cadastrados. A planilha detalhada abaixo apresenta a projeção de engenharia de custos otimizada para o escalonamento até 1.000.000 de usuários.
                  </span>
                </div>
              )}
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

            {/* Painel Estrutural: Squad dos 8 Agentes de IA Autônomos Netfits */}
            <div className="bg-gradient-to-r from-purple-950/60 via-zinc-900 to-indigo-950/60 border border-purple-500/30 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-3 flex-wrap gap-2">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20">
                    Arquitetura Recomendada de Operação IA (8 Agentes Autônomos)
                  </span>
                  <h4 className="text-base font-black text-white mt-1 flex items-center gap-2">
                    <span>🤖 O Octógono de Inteligência Operacional Netfits</span>
                  </h4>
                  <p className="text-xs text-zinc-300">
                    Squad desacoplado de micro-serviços de IA especialistas operando de ponta a ponta (do B2C à Contabilidade DRE).
                  </p>
                </div>
                <span className="text-xs font-mono text-lime-400 bg-lime-400/10 px-3 py-1.5 rounded-full border border-lime-400/30 font-bold">
                  SLA &lt; 200ms • Custo US$ 180 /mês
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="bg-zinc-950/90 p-3.5 rounded-2xl border border-zinc-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-purple-400">🛍️ 1. Shop Recommender</span>
                    <span className="text-[9px] font-mono bg-purple-950 text-purple-300 px-1.5 py-0.5 rounded">Flash</span>
                  </div>
                  <p className="text-[11px] font-bold text-white">Personalização & Vendas</p>
                  <p className="text-[10px] text-zinc-400">Sugere produtos no Shop conforme perfil de treino (Asics, Whey, Liquidz).</p>
                </div>

                <div className="bg-zinc-950/90 p-3.5 rounded-2xl border border-zinc-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-purple-400">📰 2. Feed Curator</span>
                    <span className="text-[9px] font-mono bg-purple-950 text-purple-300 px-1.5 py-0.5 rounded">Lite</span>
                  </div>
                  <p className="text-[11px] font-bold text-white">Curadoria Algorítmica</p>
                  <p className="text-[10px] text-zinc-400">Ranqueia treinos, artigos e anúncios por afinidade e dwell time.</p>
                </div>

                <div className="bg-zinc-950/90 p-3.5 rounded-2xl border border-zinc-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-red-400">🛡️ 3. Sentinel Fraud Shield</span>
                    <span className="text-[9px] font-mono bg-red-950 text-red-300 px-1.5 py-0.5 rounded">Flash + Rules</span>
                  </div>
                  <p className="text-[11px] font-bold text-white">Anti-Fraude & Passivo nfs</p>
                  <p className="text-[10px] text-zinc-400">Bloqueia GPS spoofing, treinos manipulados e retenção preventiva.</p>
                </div>

                <div className="bg-zinc-950/90 p-3.5 rounded-2xl border border-zinc-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-lime-400">📑 4. Tax & DRE Auditor</span>
                    <span className="text-[9px] font-mono bg-lime-950 text-lime-300 px-1.5 py-0.5 rounded">Gemini Pro</span>
                  </div>
                  <p className="text-[11px] font-bold text-white">Fiscal & Contabilidade</p>
                  <p className="text-[10px] text-zinc-400">Lê XMLs de NFe, classifica despesas por centro de custo e fecha a DRE.</p>
                </div>

                <div className="bg-zinc-950/90 p-3.5 rounded-2xl border border-zinc-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-cyan-400">💬 5. Omnichannel CS</span>
                    <span className="text-[9px] font-mono bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded">Flash</span>
                  </div>
                  <p className="text-[11px] font-bold text-white">Atendimento 24/7</p>
                  <p className="text-[10px] text-zinc-400">Resolve dúvidas no Chat, E-mail, Whats e Forms (SLA &lt; 30s).</p>
                </div>

                <div className="bg-zinc-950/90 p-3.5 rounded-2xl border border-zinc-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-amber-400">👑 6. Partner & VIP Co-Pilot</span>
                    <span className="text-[9px] font-mono bg-amber-950 text-amber-300 px-1.5 py-0.5 rounded">Flash</span>
                  </div>
                  <p className="text-[11px] font-bold text-white">Growth B2B & Associados</p>
                  <p className="text-[10px] text-zinc-400">Dispara relatórios para Academias e gerencia comissões de Associados.</p>
                </div>

                <div className="bg-zinc-950/90 p-3.5 rounded-2xl border border-zinc-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-emerald-400">⚡ 7. Sensor Telemetry AI</span>
                    <span className="text-[9px] font-mono bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded">Worker + Lite</span>
                  </div>
                  <p className="text-[11px] font-bold text-white">Validação de Wearables</p>
                  <p className="text-[10px] text-zinc-400">Normaliza dados do Garmin, Strava e Apple Health em pontos nfs.</p>
                </div>

                <div className="bg-zinc-950/90 p-3.5 rounded-2xl border border-zinc-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-pink-400">📈 8. Executive BI Miner</span>
                    <span className="text-[9px] font-mono bg-pink-950 text-pink-300 px-1.5 py-0.5 rounded">Gemini Pro</span>
                  </div>
                  <p className="text-[11px] font-bold text-white">Mineração de Insights BI</p>
                  <p className="text-[10px] text-zinc-400">Sintetiza feedbacks omnichannel em diretrizes de produto/roadmap.</p>
                </div>
              </div>
            </div>

            {/* Painel FinOps: Cold Data Tiering & Particionamento Histórico */}
            <div className="bg-zinc-900 border border-cyan-500/30 rounded-3xl p-6 shadow-xl space-y-5 w-full bg-gradient-to-r from-cyan-950/30 via-zinc-900 to-blue-950/30">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-cyan-500/20 pb-4 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20 flex items-center gap-1.5">
                      <Archive className="size-3 text-cyan-400" />
                      Estratégia FinOps: Armazenamento & Banco de Dados
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2.5 py-0.5 rounded-full border border-emerald-400/20 font-bold">
                      SLA Ledger &lt; 10ms
                    </span>
                  </div>
                  <h4 className="text-base font-black text-white flex items-center gap-2">
                    <Database className="size-5 text-cyan-400" />
                    Cold Data Tiering: Ledger de NFS &gt; 24 Meses (PostgreSQL + Cloudflare R2)
                  </h4>
                  <p className="text-xs text-zinc-300">
                    Expurgo automatizado e arquivamento a frio de transações com mais de 24 meses. Previne inchaço de RAM/IOPS na nuvem e preserva trilha imutável no R2 a custo quase zero.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 shrink-0">
                  <button
                    type="button"
                    disabled={coldTier.isArchiving}
                    onClick={async () => {
                      await coldTierStore.triggerColdArchiving();
                    }}
                    className={`px-4 py-2.5 rounded-xl font-extrabold text-xs flex items-center gap-2 transition-all shadow-md cursor-pointer ${
                      coldTier.isArchiving
                        ? "bg-zinc-800 text-zinc-500 border border-zinc-700"
                        : "bg-cyan-500 hover:bg-cyan-400 text-black shadow-cyan-500/20 active:scale-95"
                    }`}
                  >
                    <RefreshCw className={`size-4 ${coldTier.isArchiving ? "animate-spin text-zinc-500" : "text-black"}`} />
                    <span>{coldTier.isArchiving ? "Arquivando Lotes..." : "Executar Cold Tiering Agora"}</span>
                  </button>
                </div>
              </div>

              {/* Grid de KPIs do Cold Tiering */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="bg-zinc-950/80 p-4 rounded-2xl border border-zinc-800 space-y-1">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    🔥 Hot Ledger (&lt; 24 Meses)
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg font-black text-white font-mono">
                      {coldTier.hotLedgerRows.toLocaleString("pt-BR")}
                    </span>
                    <span className="text-[11px] font-mono text-cyan-400 font-bold">
                      {coldTier.hotStorageMb} MB
                    </span>
                  </div>
                  <p className="text-[10px] text-zinc-500">Na RAM do PostgreSQL com B-Tree ativa.</p>
                </div>

                <div className="bg-zinc-950/80 p-4 rounded-2xl border border-zinc-800 space-y-1">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    🧊 Cold Archive (&gt; 24 Meses)
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg font-black text-white font-mono">
                      {coldTier.coldArchivedRows.toLocaleString("pt-BR")}
                    </span>
                    <span className="text-[11px] font-mono text-lime-400 font-bold">
                      {coldTier.coldStorageMb} MB
                    </span>
                  </div>
                  <p className="text-[10px] text-zinc-500">Tiering comprimido Cloudflare R2 (US$ 0,015/GB).</p>
                </div>

                <div className="bg-zinc-950/80 p-4 rounded-2xl border border-zinc-800 space-y-1">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    ⚡ Latência do Ledger
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg font-black text-emerald-400 font-mono">
                      {coldTier.queryLatencyMs} ms
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 line-through">
                      {coldTier.unoptimizedLatencyMs} ms
                    </span>
                  </div>
                  <p className="text-[10px] text-zinc-500">Aceleração de 95% sem varreduras full-scan.</p>
                </div>

                <div className="bg-zinc-950/80 p-4 rounded-2xl border border-zinc-800 space-y-1">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    💰 Economia FinOps Mensal
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg font-black text-lime-400 font-mono">
                      R$ {coldTier.costSavedMonthlyBrl.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </span>
                    <span className="text-[10px] font-mono bg-lime-950 text-lime-300 px-1.5 py-0.5 rounded">
                      -{coldTier.ramSavedMb} MB RAM
                    </span>
                  </div>
                  <p className="text-[10px] text-zinc-500">Economia acumulada em instâncias cloud menores.</p>
                </div>
              </div>

              {/* Status da Rotina e Políticas */}
              <div className="bg-black/40 border border-zinc-800/80 rounded-2xl p-3.5 text-xs text-zinc-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span>
                    <b>Rotina Periódica:</b> Execução mensal automática ({coldTier.runsCount} ciclos realizados). Último ciclo:{" "}
                    <span className="font-mono text-cyan-300">
                      {coldTier.lastRunAt ? new Date(coldTier.lastRunAt).toLocaleDateString("pt-BR") : "Recente"}
                    </span>
                  </span>
                </div>
                <div className="text-[11px] text-zinc-400">
                  Políticas ativas: <code className="text-purple-300 bg-purple-950/50 px-1.5 py-0.5 rounded">archive_expired_wallet_transactions()</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {(activeTab === "results" || activeTab === "controls") && (() => {
          const isFase2 = drePhase === "fase2";

          const takeRatePct = operationalParams.netfitsTakeRatePctFromGmv ?? 6.0;
          const clubMonthlyFeeBrl = operationalParams.netfitsClubMonthlyFeeBrl ?? 19.90;
          const provisionCostPerPoint = operationalParams.costPerProvisionedPointBrl ?? 0.01;

          // Receitas por Fonte (Banco Real vs Projeção)
          // No Banco Real: comissões reais do GMV transacionado + mensalidades reais do clube
          const dreRevMarketplace = isReal
            ? realGmvBrl * (takeRatePct / 100)
            : (4000000 * (takeRatePct / 100)) * pf;
          const dreRevMedia = isReal ? 0 : 250000 * pf;       // Receita Mídias & Anúncios Patrocinados (Feed)
          const dreRevEvents = isReal ? 0 : 200000 * pf;      // Inscrições em Provas & Eventos Esportivos Credenciados
          const dreRevB2b = isReal ? 0 : 123850 * pf;         // Parcerias & Licenciamento B2B
          const dreRevClub = isReal
            ? realClubSubscribersCount * clubMonthlyFeeBrl
            : (isFase2 ? (45000 * clubMonthlyFeeBrl * 12 / 12) * pf : 0);

          // Receita Operacional Bruta
          const dreGrossRev = dreRevMarketplace + dreRevMedia + dreRevEvents + dreRevB2b + dreRevClub;
          const dreSalesTaxes = dreGrossRev * 0.060; // -6.0% DAS/ISS/PIS/COFINS
          const dreGrossNetRev = dreGrossRev - dreSalesTaxes;

          const safePct = (val: number) => dreGrossRev > 0 ? ((val / dreGrossRev) * 100).toFixed(1) : "0.0";

          // Provisão do Passivo de Pontos Emitidos Válidos Não Resgatados (R$ 0,01 por ponto)
          const validIssuedPointsCount = isReal ? realNfsInCirculation : Math.round(18000000 * pf);
          const drePointsProvision = validIssuedPointsCount * provisionCostPerPoint;
          const provisionPctOfGross = dreGrossRev > 0 ? (drePointsProvision / dreGrossRev) * 100 : 0;

          // Reversão de Provisão referente a Pontos Expirados:
          // IMPORTANTE: No Banco Real, o ciclo de expiração é de 24 meses e nenhum ponto expirou ainda (0 nfs expirados).
          // Portanto, a reversão realizada é estritamente R$ 0,00 no momento.
          const expiredPointsCount = isReal ? 0 : Math.round(validIssuedPointsCount * ((operationalParams.targetBreakagePct ?? 5.0) / 100));
          const drePointsProvisionReversal = expiredPointsCount * provisionCostPerPoint;
          const reversalPctOfGross = dreGrossRev > 0 ? (drePointsProvisionReversal / dreGrossRev) * 100 : 0;

          // Receita Operacional Líquida Ajustada (após a Provisão e a Reversão de Pontos Expirados)
          const dreAdjustedNetRev = dreGrossNetRev - drePointsProvision + drePointsProvisionReversal;
          const adjustedNetRevPctOfGross = dreGrossRev > 0 ? (dreAdjustedNetRev / dreGrossRev) * 100 : 0;

          // Custos Diretos dos Serviços & Resgates (CSP - Base de Resgate e Repasses)
          const dreShoppingRedemptionCost = isReal
            ? realTotalPointsRedeemed * (operationalParams.cppResgateBrl ?? 0.01)
            : Math.round((4000000 * (operationalParams.nfsEarnedPerBrlSpent ?? 4.0) * 0.25 * (operationalParams.cppResgateBrl ?? 0.01)) * pf);
          const dreAssociadoCommissionCost = Math.round(dreRevMarketplace * ((operationalParams.associadoShareOfNetfitsRevenuePct ?? 10.0) / 100));
          const dreAcquiringFeesCost = isReal ? realGmvBrl * 0.025 : 35000 * pf;
          const dreTotalCsp = dreShoppingRedemptionCost + dreAssociadoCommissionCost + dreAcquiringFeesCost;

          // Lucro Bruto Ajustado
          const dreAdjustedGrossProfit = dreAdjustedNetRev - dreTotalCsp;
          const adjustedGrossMarginPct = dreGrossRev > 0 ? (dreAdjustedGrossProfit / dreGrossRev) * 100 : 0;

          // OPEX (Banco Real vs Projeção)
          const dreCloudCost = isReal ? 0 : (operationalParams.cloudInfraMonthlyCostBrl ?? 7260) * pf;
          const drePayrollCost = isReal ? 0 : (isFase2 ? 320000 : 240000) * pf;
          const dreMarketingCost = isReal ? 0 : (isFase2 ? 150000 : 100000) * pf;
          const dreGaCost = isReal ? 0 : (isFase2 ? 80000 : 50000) * pf;
          const dreTotalOpex = dreCloudCost + drePayrollCost + dreMarketingCost + dreGaCost;

          // EBITDA Ajustado
          const dreAdjustedEbitda = dreAdjustedGrossProfit - dreTotalOpex;
          const adjustedEbitdaMarginPct = dreGrossRev > 0 ? (dreAdjustedEbitda / dreGrossRev) * 100 : 0;

          // EBIT & LAIR
          const dreDepreciation = isReal ? 0 : 24000 * pf;
          const dreEbit = dreAdjustedEbitda - dreDepreciation;
          const dreFinancialResult = isReal ? 0 : 18400 * pf;
          const dreEbt = dreEbit + dreFinancialResult;
          const dreIncomeTaxes = Math.max(0, Math.round(dreEbt * 0.150)); // 15% tributos IRPJ/CSLL
          const dreAdjustedNetProfit = dreEbt - dreIncomeTaxes;
          const adjustedNetMarginPct = dreGrossRev > 0 ? (dreAdjustedNetProfit / dreGrossRev) * 100 : 0;

          return (
            <div className="space-y-6">
              {/* CARD DE VINCULAÇÃO E DOWNLOAD DA PLANILHA REAL X ORÇADO (2026 - 2030) */}
              <div className="bg-gradient-to-r from-purple-950/90 via-zinc-900 to-zinc-950 border border-purple-500/50 rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400 bg-lime-400/10 px-2.5 py-0.5 rounded-full border border-lime-400/30">
                        MODELO FINANCEIRO OFICIAL (51 MESES: OUT/2026 A DEZ/2030)
                      </span>
                      <span className="text-[10px] font-mono text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-500/30">
                        VPL: R$ 117,9M • TIR: 248%
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-white flex items-center gap-2">
                      <TrendingUp className="size-6 text-lime-400" />
                      <span>Planilha Corporativa: Acompanhamento Real x Orçado</span>
                    </h3>
                    <p className="text-xs text-zinc-300 max-w-3xl leading-relaxed">
                      Planilha mestre contábil e orçamentária parametrizada mês a mês para input dos resultados contábeis reais, cálculo automático de variâncias (<strong className="text-lime-400">R$ e %</strong>) e consolidação do DRE gerencial da Netfits com as 3 frentes FinOps incorporadas.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                    <a
                      href="/docs/real x orçado.xlsx"
                      download="real x orçado.xlsx"
                      onClick={() => toast.success("Download da planilha 'real x orçado.xlsx' iniciado!")}
                      className="px-5 py-3 rounded-2xl bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-300 hover:to-emerald-300 text-zinc-950 font-black text-xs shadow-xl shadow-lime-400/20 flex items-center justify-center gap-2 transition cursor-pointer active:scale-98"
                    >
                      <Download className="size-4" />
                      <span>Baixar Planilha Real x Orçado (.xlsx)</span>
                    </a>
                  </div>
                </div>

                {/* Grade dos 5 Anos Consolidados (2026 a 2030) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-2 border-t border-zinc-800/80">
                  <div className="bg-zinc-950/80 p-3 rounded-2xl border border-zinc-800 space-y-1">
                    <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase">2026 (Launch)</span>
                    <p className="text-xs font-bold text-zinc-300">1k usuários</p>
                    <p className="text-xs font-black text-lime-400">EBITDA: +R$ 1,7k</p>
                    <span className="text-[9px] text-zinc-500 block">3 meses (Setup FinOps)</span>
                  </div>

                  <div className="bg-zinc-950/80 p-3 rounded-2xl border border-zinc-800 space-y-1">
                    <span className="text-[10px] font-mono font-bold text-lime-400 uppercase">2027 (Scale)</span>
                    <p className="text-xs font-bold text-zinc-300">1,0M usuários</p>
                    <p className="text-xs font-black text-lime-400">EBITDA: +R$ 6,31M</p>
                    <span className="text-[9px] text-zinc-500 block">Margem 60,4%</span>
                  </div>

                  <div className="bg-zinc-950/80 p-3 rounded-2xl border border-zinc-800 space-y-1">
                    <span className="text-[10px] font-mono font-bold text-lime-400 uppercase">2028 (Growth)</span>
                    <p className="text-xs font-bold text-zinc-300">2,0M usuários</p>
                    <p className="text-xs font-black text-lime-400">EBITDA: +R$ 29,45M</p>
                    <span className="text-[9px] text-zinc-500 block">Margem 74,7%</span>
                  </div>

                  <div className="bg-zinc-950/80 p-3 rounded-2xl border border-zinc-800 space-y-1">
                    <span className="text-[10px] font-mono font-bold text-purple-400 uppercase">2029 (Expansion)</span>
                    <p className="text-xs font-bold text-zinc-300">2,6M usuários</p>
                    <p className="text-xs font-black text-purple-400">EBITDA: +R$ 48,86M</p>
                    <span className="text-[9px] text-zinc-500 block">Margem 71,2%</span>
                  </div>

                  <div className="bg-zinc-950/80 p-3 rounded-2xl border border-zinc-800 space-y-1">
                    <span className="text-[10px] font-mono font-bold text-purple-400 uppercase">2030 (Maturity)</span>
                    <p className="text-xs font-bold text-zinc-300">3,0M usuários</p>
                    <p className="text-xs font-black text-purple-400">EBITDA: +R$ 68,87M</p>
                    <span className="text-[9px] text-zinc-500 block">Margem 65,6%</span>
                  </div>

                  <div className="bg-gradient-to-br from-lime-950/60 to-purple-950/60 p-3 rounded-2xl border border-lime-500/40 space-y-1">
                    <span className="text-[10px] font-mono font-black text-lime-400 uppercase">51 Meses Total</span>
                    <p className="text-xs font-bold text-white">Receita R$ 241,0M</p>
                    <p className="text-xs font-black text-lime-400">EBITDA: R$ 153,5M</p>
                    <span className="text-[9px] text-purple-300 block">Margem 69,0% (+R$ 810k)</span>
                  </div>
                </div>

                {/* Descritivo das Abas da Planilha */}
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-zinc-400 pt-1 font-medium">
                  <span className="text-zinc-500 font-bold">Abas da Planilha:</span>
                  <span className="bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800 text-zinc-300">📌 1. Premissas &amp; Parâmetros</span>
                  <span className="bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800 text-zinc-300">📊 2. Orçado (DRE Mês a Mês)</span>
                  <span className="bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800 text-zinc-300">📝 3. Realizado (Input Contábil)</span>
                  <span className="bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800 text-zinc-300">⚖️ 4. Variação Real x Orçado</span>
                  <span className="bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800 text-zinc-300">🚀 5. Dashboard Executivo</span>
                </div>
              </div>

              {/* Header Card com Seletor de Cenários (Launch Sem Clube vs Com Clube Netfits) */}
              <div className="bg-gradient-to-r from-purple-950/60 via-zinc-900 to-zinc-900 border border-purple-500/30 rounded-2xl p-4 shadow-lg flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-lime-400">
                    {isReal
                      ? `Demonstração do Resultado Realizado — Banco Oficial (${currentPeriodObj.shortLabel})`
                      : `Demonstração do Resultado do Exercício — Proforma (${currentPeriodObj.shortLabel})`}
                  </span>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>{isReal ? "📊 DRE Realizado — Netfits Ltda." : "📈 DRE Financeiro Proforma — Netfits Ltda."}</span>
                    <span className="text-xs bg-lime-400/20 text-lime-300 border border-lime-400/30 px-2.5 py-0.5 rounded-full font-mono font-bold">
                      {isReal ? "Banco de Dados em Produção" : `EBITDA: ${adjustedEbitdaMarginPct.toFixed(1)}% (${isFase2 ? "Com Clube Netfits" : "Sem Clube"})`}
                    </span>
                  </h3>
                </div>

                {/* Seletor de Fase do Business Case */}
                <div className="flex items-center gap-2 bg-zinc-950/80 p-1.5 rounded-xl border border-zinc-800 self-start lg:self-auto">
                  <button
                    onClick={() => {
                      setDrePhase("fase1");
                      toast.info("DRE alternado para Cenário Base (Sem Clube)");
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                      !isFase2
                        ? "bg-lime-400 text-zinc-950 shadow font-black"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                    }`}
                  >
                    <span>🚀 Sem Clube (Base)</span>
                  </button>
                  <button
                    onClick={() => {
                      setDrePhase("fase2");
                      toast.success("DRE alternado para Cenário com Clube Netfits (R$ 19,90/mês)");
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                      isFase2
                        ? "bg-purple-600 text-white shadow font-black"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                    }`}
                  >
                    <span>⭐ Com Clube Netfits</span>
                  </button>
                </div>
              </div>

              {/* Banner de Impacto FinOps do Squad Multiagêntico Incorporado à DRE */}
              <div className="bg-gradient-to-r from-purple-950/80 via-zinc-900 to-indigo-950/80 p-4 rounded-2xl border border-lime-400/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-lime-400/10 border border-lime-400/30 text-lime-400 shrink-0">
                    <Sparkles className="size-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-lime-400">
                      {isReal
                        ? "Governança FinOps & Eficiência de Custos em Produção"
                        : "Impacto FinOps Incorporado à DRE (+R$ 1.586.418,16 /ano Economizados)"}
                    </span>
                    <p className="text-xs text-white font-bold">
                      {isReal
                        ? "Arquitetura serverless de baixo custo ativo: Fast-Path IA, cache distribuído Cloudflare e persistência transacional com passkeys FIDO2."
                        : "Otimizações FinOps Ativas: -55.5% em Tokens de IA (Fast-Path/Cache), -70.7% em Auth/OTP (Passkeys FIDO2) e -46.1% em Banco de Dados (Cold Tiering R2)."}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-black text-lime-400 bg-lime-400/10 px-3 py-1.5 rounded-xl border border-lime-400/30 shrink-0">
                  {isReal ? "FinOps Ativo" : "EBITDA: 84.2% (KR 4.2)"}
                </span>
              </div>

              {/* KPIs Financeiros de Topo do DRE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                <KpiCard
                  title={isReal ? "Receita Bruta Real" : "Receita Bruta Inicial"}
                  value={`R$ ${dreGrossRev.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                  change={isReal ? "Banco Oficial" : "Fase 1 (Sem Clube)"}
                  positive={dreGrossRev >= 0}
                  icon={DollarSign}
                  subtext={isReal ? "Marketplace + Assinaturas reais" : "Marketplace + Feed + Eventos"}
                  periodBadge={isReal ? "Banco Oficial" : currentPeriodObj.shortLabel}
                />
                <KpiCard
                  title="Receita Líquida Ajustada"
                  value={`R$ ${dreAdjustedNetRev.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                  change={dreGrossRev > 0 ? `${adjustedNetRevPctOfGross.toFixed(1)}% da Bruta` : "Líquido pós-provisão"}
                  positive={dreAdjustedNetRev >= 0}
                  icon={Coins}
                  subtext="Após tributos e provisão de pontos"
                  periodBadge={isReal ? "Banco Oficial" : currentPeriodObj.shortLabel}
                />
                <KpiCard
                  title={isReal ? "EBITDA da Operação" : "EBITDA Inicial da Operação"}
                  value={`R$ ${dreAdjustedEbitda.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                  change={dreGrossRev > 0 ? `${adjustedEbitdaMarginPct.toFixed(1)}% Margem` : "Resultado Operacional"}
                  positive={dreAdjustedEbitda >= 0}
                  icon={TrendingUp}
                  subtext={isReal ? "Lucro operacional apurado" : "Lucro operacional no launch"}
                  highlightColor="border-lime-400 ring-1 ring-lime-400/20 bg-lime-400/5"
                  periodBadge={isReal ? "Banco Oficial" : currentPeriodObj.shortLabel}
                />
                <KpiCard
                  title="Lucro Líquido do Exercício"
                  value={`R$ ${dreAdjustedNetProfit.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                  change={dreGrossRev > 0 ? `${adjustedNetMarginPct.toFixed(1)}% Margem Líq.` : "Resultado Líquido"}
                  positive={dreAdjustedNetProfit >= 0}
                  icon={Award}
                  subtext="Lucro final distribuível"
                  periodBadge={isReal ? "Banco Oficial" : currentPeriodObj.shortLabel}
                />
              </div>

              {/* Tabela Estruturada do DRE Contábil */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 w-full">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3 flex-wrap gap-2">
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {isReal
                        ? `Demonstração Estruturada do Resultado — Banco Oficial (${currentPeriodObj.shortLabel})`
                        : "Demonstração Estruturada do Resultado — Momento Inicial (Fase 1 Launch)"}
                    </h4>
                    <p className="text-xs text-zinc-400">
                      {isReal
                        ? `Valores contábeis apurados a partir dos dados transacionais reais (${currentPeriodObj.shortLabel}).`
                        : `Valores em R$ para o lançamento inicial (${currentPeriodObj.shortLabel}). Clube de Assinaturas reservado para Etapa 2.`}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-lime-400 font-bold bg-lime-400/10 px-3 py-1 rounded-xl border border-lime-400/20">
                    {isReal ? "Banco Oficial Ativo" : (isFase2 ? "Com Clube Netfits" : "Sem Clube")}
                  </span>
                </div>

                <div className="overflow-x-auto w-full max-w-full">
                  <table className="w-full text-left text-xs text-zinc-300 min-w-[640px]">
                    <thead className="bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800">
                      <tr>
                        <th className="py-3 px-4">Linha da DRE (Conta Contábil)</th>
                        <th className="py-3 px-4 text-right">Valor no Período (R$)</th>
                        <th className="py-3 px-4 text-right">Análise Vertical (% Rec. Bruta)</th>
                        <th className="py-3 px-4 text-center">Status / Etapa</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/80 font-medium">
                      {/* RECEITA BRUTA */}
                      <tr className="bg-purple-950/20 hover:bg-purple-950/40 transition font-bold text-white">
                        <td className="py-3 px-4 text-purple-300">
                          {isReal ? "(+) RECEITA OPERACIONAL BRUTA REAL" : "(+) RECEITA OPERACIONAL BRUTA (FASE 1 LAUNCH)"}
                        </td>
                        <td className="py-3 px-4 text-right text-purple-300 font-mono text-sm">
                          R$ {dreGrossRev.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </td>
                        <td className="py-3 px-4 text-right text-purple-300">{dreGrossRev > 0 ? "100.0%" : "0.0%"}</td>
                        <td className="py-3 px-4 text-center text-lime-400 font-bold">{isReal ? "▲ Banco Real" : "▲ Momento Inicial"}</td>
                      </tr>
                      <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                        <td className="py-2.5 px-6">└─ Comissões Marketplace ({takeRatePct}% Take-Rate GMV)</td>
                        <td className="py-2.5 px-4 text-right font-mono">R$ {dreRevMarketplace.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                        <td className="py-2.5 px-4 text-right">{safePct(dreRevMarketplace)}%</td>
                        <td className="py-2.5 px-4 text-center text-zinc-500">{isReal ? (realOrders.length > 0 ? "Vendas Reais" : "Sem vendas") : "Ativo no Launch"}</td>
                      </tr>
                      <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                        <td className="py-2.5 px-6">└─ Receita de Mídias & Anúncios Patrocinados (Feed)</td>
                        <td className="py-2.5 px-4 text-right font-mono">R$ {dreRevMedia.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                        <td className="py-2.5 px-4 text-right">{safePct(dreRevMedia)}%</td>
                        <td className="py-2.5 px-4 text-center text-zinc-500">{isReal ? "Sem campanhas" : "Ativo no Launch"}</td>
                      </tr>
                      <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                        <td className="py-2.5 px-6">└─ Inscrições em Provas & Eventos Esportivos Credenciados</td>
                        <td className="py-2.5 px-4 text-right font-mono">R$ {dreRevEvents.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                        <td className="py-2.5 px-4 text-right">{safePct(dreRevEvents)}%</td>
                        <td className="py-2.5 px-4 text-center text-zinc-500">{isReal ? "Sem eventos" : "Ativo no Launch"}</td>
                      </tr>
                      <tr className="hover:bg-zinc-800/40 transition text-zinc-500 bg-zinc-950/40">
                        <td className="py-2.5 px-6 text-zinc-400 font-semibold">
                          └─ Assinaturas Netfits Club (Clube de Benefícios)
                        </td>
                        <td className="py-2.5 px-4 text-right font-mono text-zinc-400 font-bold">
                          R$ {dreRevClub.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </td>
                        <td className="py-2.5 px-4 text-right text-zinc-400 font-bold">{safePct(dreRevClub)}%</td>
                        <td className="py-2.5 px-4 text-center text-purple-400 font-bold">
                          {isReal ? (realClubSubscribersCount > 0 ? "⭐ Assinantes Reais" : "Sem assinantes") : "🔮 Lançamento Etapa 2"}
                        </td>
                      </tr>

                      {/* DEDUÇÕES FISCAIS */}
                      <tr className="hover:bg-zinc-800/40 transition text-rose-300">
                        <td className="py-2.5 px-4">(-) DEDUÇÕES E IMPOSTOS SOBRE VENDAS (DAS / ISS / PIS / COFINS)</td>
                        <td className="py-2.5 px-4 text-right font-mono">(R$ {dreSalesTaxes.toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                        <td className="py-2.5 px-4 text-right">{dreGrossRev > 0 ? "-6.0%" : "0.0%"}</td>
                        <td className="py-2.5 px-4 text-center text-rose-400">Tributário (-6%)</td>
                      </tr>

                      {/* RECEITA LÍQUIDA BRUTA */}
                      <tr className="bg-zinc-950 font-bold text-white border-y border-zinc-800">
                        <td className="py-2.5 px-4 font-bold">(=) RECEITA OPERACIONAL LÍQUIDA (BRUTA DA PROVISÃO)</td>
                        <td className="py-2.5 px-4 text-right font-mono text-zinc-200 text-xs font-bold">
                          R$ {dreGrossNetRev.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </td>
                        <td className="py-2.5 px-4 text-right text-zinc-300">{dreGrossRev > 0 ? "94.0%" : "0.0%"}</td>
                        <td className="py-2.5 px-4 text-center text-zinc-400 font-semibold">Antes da Provisão</td>
                      </tr>

                      {/* PROVISÃO DE PONTOS VÁLIDOS NÃO RESGATADOS */}
                      <tr className="bg-purple-950/30 hover:bg-purple-950/50 transition text-purple-300 font-bold border-y border-purple-500/30">
                        <td className="py-3 px-4 text-purple-300">
                          (-) PROVISÃO DE PASSIVO DE PONTOS EMITIDOS VÁLIDOS NÃO RESGATADOS
                          <span className="block text-[10px] text-purple-400 font-normal mt-0.5">
                            {isReal
                              ? `└─ ${validIssuedPointsCount.toLocaleString("pt-BR")} nfs emitidos em circulação × R$ ${provisionCostPerPoint.toFixed(3)} (Passivo de Pontos Banco Oficial)`
                              : `└─ ${validIssuedPointsCount.toLocaleString("pt-BR")} nfs emitidos válidos × R$ ${provisionCostPerPoint.toFixed(3)} (Custo da Provisão)`}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right font-mono text-purple-300 text-sm font-bold">
                          (R$ {drePointsProvision.toLocaleString("pt-BR", { minimumFractionDigits: 2 })})
                        </td>
                        <td className="py-3 px-4 text-right text-purple-300">-{provisionPctOfGross.toFixed(1)}%</td>
                        <td className="py-3 px-4 text-center text-purple-400 font-bold">🛡️ Redutora da Rec. Líquida</td>
                      </tr>

                      {/* REVERSÃO DE PROVISÃO: PONTOS EXPIRADOS (BREAKAGE) */}
                      <tr className="bg-lime-950/20 hover:bg-lime-950/40 transition text-lime-400 font-bold border-y border-lime-500/30">
                        <td className="py-3 px-4 text-lime-300">
                          (+) REVERSÃO DE PROVISÃO (PONTOS EXPIRADOS / BREAKAGE)
                          <span className="block text-[10px] text-lime-400 font-normal mt-0.5">
                            {isReal
                              ? "└─ 0 nfs expirados (ciclo de validade de 24 meses em vigor — nenhum ponto expirado no momento)"
                              : `└─ ${expiredPointsCount.toLocaleString("pt-BR")} nfs expirados × R$ ${provisionCostPerPoint.toFixed(3)} (Baixa de Passivo por Expiração)`}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right font-mono text-lime-400 text-sm font-bold">
                          +R$ {drePointsProvisionReversal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </td>
                        <td className="py-3 px-4 text-right text-lime-400">+{reversalPctOfGross.toFixed(1)}%</td>
                        <td className="py-3 px-4 text-center text-lime-400 font-bold">♻️ Reversão do Passivo (Breakage)</td>
                      </tr>

                      {/* RECEITA LÍQUIDA AJUSTADA */}
                      <tr className="bg-zinc-950 font-bold text-white border-y border-zinc-700">
                        <td className="py-3 px-4 font-black">(=) RECEITA OPERACIONAL LÍQUIDA AJUSTADA</td>
                        <td className="py-3 px-4 text-right font-mono text-lime-400 text-sm font-black">
                          R$ {dreAdjustedNetRev.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </td>
                        <td className="py-3 px-4 text-right text-lime-400 font-black">{adjustedNetRevPctOfGross.toFixed(1)}%</td>
                        <td className="py-3 px-4 text-center text-lime-400 font-bold">Base Líquida Final</td>
                      </tr>

                      {/* CUSTOS DE SERVIÇOS / RESGATES */}
                      <tr className="hover:bg-zinc-800/40 transition text-rose-300">
                        <td className="py-2.5 px-4">(-) CUSTOS DOS SERVIÇOS PRESTADOS & RESGATES DE PONTOS (CSP)</td>
                        <td className="py-2.5 px-4 text-right font-mono">(R$ {dreTotalCsp.toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                        <td className="py-2.5 px-4 text-right">-{safePct(dreTotalCsp)}%</td>
                        <td className="py-2.5 px-4 text-center text-zinc-400">Custo Direto</td>
                      </tr>
                      <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                        <td className="py-2.5 px-6">└─ Custo de Resgate de Pontos nfs no Shopping (CPP R$ {operationalParams.cppResgateBrl})</td>
                        <td className="py-2.5 px-4 text-right font-mono">(R$ {dreShoppingRedemptionCost.toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                        <td className="py-2.5 px-4 text-right">-{safePct(dreShoppingRedemptionCost)}%</td>
                        <td className="py-2.5 px-4 text-center text-zinc-500">Resgate Shopping</td>
                      </tr>
                      <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                        <td className="py-2.5 px-6">└─ Repasse de Comissões em Dinheiro aos Associados ({operationalParams.associadoShareOfNetfitsRevenuePct}%)</td>
                        <td className="py-2.5 px-4 text-right font-mono">(R$ {dreAssociadoCommissionCost.toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                        <td className="py-2.5 px-4 text-right">-{safePct(dreAssociadoCommissionCost)}%</td>
                        <td className="py-2.5 px-4 text-center text-zinc-500">Comissão Captação</td>
                      </tr>
                      <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                        <td className="py-2.5 px-6">└─ Taxas de Meios de Pagamento & Gateway de Adquirencia</td>
                        <td className="py-2.5 px-4 text-right font-mono">(R$ {dreAcquiringFeesCost.toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                        <td className="py-2.5 px-4 text-right">-{safePct(dreAcquiringFeesCost)}%</td>
                        <td className="py-2.5 px-4 text-center text-zinc-500">Adquirencia</td>
                      </tr>

                      {/* LUCRO BRUTO AJUSTADO */}
                      <tr className="bg-zinc-950 font-bold text-white border-y border-zinc-700">
                        <td className="py-3 px-4 font-black">(=) LUCRO BRUTO AJUSTADO INICIAL</td>
                        <td className="py-3 px-4 text-right font-mono text-white text-sm font-black">
                          R$ {dreAdjustedGrossProfit.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </td>
                        <td className="py-3 px-4 text-right text-white font-black">{adjustedGrossMarginPct.toFixed(1)}%</td>
                        <td className="py-3 px-4 text-center text-lime-400 font-bold">Margem Bruta {adjustedGrossMarginPct.toFixed(1)}%</td>
                      </tr>

                      {/* OPEX */}
                      <tr className="hover:bg-zinc-800/40 transition text-rose-300">
                        <td className="py-2.5 px-4">(-) DESPESAS OPERACIONAIS ENXUTAS (OPEX MOMENTO INICIAL)</td>
                        <td className="py-2.5 px-4 text-right font-mono">(R$ {dreTotalOpex.toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                        <td className="py-2.5 px-4 text-right">-{safePct(dreTotalOpex)}%</td>
                        <td className="py-2.5 px-4 text-center text-rose-400">OPEX Enxuto Launch</td>
                      </tr>
                      <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                        <td className="py-2.5 px-6">└─ Infraestrutura de TI & Cloud Otimizada</td>
                        <td className="py-2.5 px-4 text-right font-mono">(R$ {dreCloudCost.toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                        <td className="py-2.5 px-4 text-right">-{safePct(dreCloudCost)}%</td>
                        <td className="py-2.5 px-4 text-center text-lime-400 font-bold">{isReal ? "Serverless Base" : "R$ 7.260/mês (-61.5%)"}</td>
                      </tr>
                      <tr className="hover:bg-purple-950/20 transition text-purple-300 font-semibold">
                        <td className="py-2.5 px-8">├─ Agentes de IA Autônomos (Squad de 8 Agentes)</td>
                        <td className="py-2.5 px-4 text-right font-mono text-purple-300">
                          (R$ {(isReal ? 0 : 990 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })})
                        </td>
                        <td className="py-2.5 px-4 text-right text-purple-300">
                          -{isReal ? "0.00" : (dreGrossRev > 0 ? (((990 * pf) / dreGrossRev) * 100).toFixed(2) : "0.00")}%
                        </td>
                        <td className="py-2.5 px-4 text-center text-lime-400 font-extrabold">{isReal ? "IA Integrada" : "R$ 990/mês (-95.2% IA)"}</td>
                      </tr>
                      <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                        <td className="py-2.5 px-6">└─ Pessoal Core, Engenharia de Software & Suporte</td>
                        <td className="py-2.5 px-4 text-right font-mono">(R$ {drePayrollCost.toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                        <td className="py-2.5 px-4 text-right">-{safePct(drePayrollCost)}%</td>
                        <td className="py-2.5 px-4 text-center text-zinc-500">{isReal ? "Sem custo alocado" : "Equipe Core Initial"}</td>
                      </tr>
                      <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                        <td className="py-2.5 px-6">└─ Marketing de Aquisição (CAC Orgânico & Parcerias)</td>
                        <td className="py-2.5 px-4 text-right font-mono">(R$ {dreMarketingCost.toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                        <td className="py-2.5 px-4 text-right">-{safePct(dreMarketingCost)}%</td>
                        <td className="py-2.5 px-4 text-center text-zinc-500">{isReal ? "CAC Orgânico" : "Mídia Launch"}</td>
                      </tr>
                      <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                        <td className="py-2.5 px-6">└─ Despesas Gerais, Administrativas & Contabilidade (G&A)</td>
                        <td className="py-2.5 px-4 text-right font-mono">(R$ {dreGaCost.toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                        <td className="py-2.5 px-4 text-right">-{safePct(dreGaCost)}%</td>
                        <td className="py-2.5 px-4 text-center text-lime-400 font-bold">{isReal ? "G&A Integrado" : "Fixas G&A (-85.7% Tax AI)"}</td>
                      </tr>

                      {/* EBITDA */}
                      <tr className="bg-lime-400/10 font-bold text-white border-y-2 border-lime-400/40">
                        <td className="py-3.5 px-4 text-lime-300 font-black">
                          {isReal ? "(=) EBITDA REAL DA OPERAÇÃO" : "(=) EBITDA AJUSTADO INICIAL (MOMENTO LAUNCH)"}
                        </td>
                        <td className="py-3.5 px-4 text-right font-mono text-lime-400 text-base font-black">
                          R$ {dreAdjustedEbitda.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </td>
                        <td className="py-3.5 px-4 text-right text-lime-400 font-black text-sm">{adjustedEbitdaMarginPct.toFixed(1)}%</td>
                        <td className="py-3.5 px-4 text-center text-lime-400 font-black">★ Margem EBITDA {adjustedEbitdaMarginPct.toFixed(1)}%</td>
                      </tr>

                      {/* EBIT & LAIR */}
                      <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                        <td className="py-2.5 px-4 font-semibold text-zinc-300">(-) Depreciação e Amortização de Ativos Tecnológicos</td>
                        <td className="py-2.5 px-4 text-right font-mono">(R$ {dreDepreciation.toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                        <td className="py-2.5 px-4 text-right">-{safePct(dreDepreciation)}%</td>
                        <td className="py-2.5 px-4 text-center text-zinc-500">{isReal ? "Sem amortização" : "Amortização P&D"}</td>
                      </tr>
                      <tr className="hover:bg-zinc-800/40 transition text-zinc-300 font-bold">
                        <td className="py-2.5 px-4">(=) EBIT (RESULTADO OPERACIONAL ANTES DOS IMPOSTOS)</td>
                        <td className="py-2.5 px-4 text-right font-mono text-white">R$ {dreEbit.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                        <td className="py-2.5 px-4 text-right">{safePct(dreEbit)}%</td>
                        <td className="py-2.5 px-4 text-center text-zinc-400">EBIT {safePct(dreEbit)}%</td>
                      </tr>
                      <tr className="hover:bg-zinc-800/40 transition text-zinc-400">
                        <td className="py-2.5 px-4 font-semibold text-zinc-300">(+/-) Resultado Financeiro Líquido (Rendimentos de Caixa)</td>
                        <td className="py-2.5 px-4 text-right font-mono">R$ {dreFinancialResult.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                        <td className="py-2.5 px-4 text-right">+{safePct(dreFinancialResult)}%</td>
                        <td className="py-2.5 px-4 text-center text-lime-400">{isReal ? "Rendimento 0" : "Rendimento CDI"}</td>
                      </tr>
                      <tr className="hover:bg-zinc-800/40 transition text-zinc-300 font-bold">
                        <td className="py-2.5 px-4">(=) LAIR (LUCRO ANTES DO IMPOSTO DE RENDA E CSLL)</td>
                        <td className="py-2.5 px-4 text-right font-mono text-white">R$ {dreEbt.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                        <td className="py-2.5 px-4 text-right">{safePct(dreEbt)}%</td>
                        <td className="py-2.5 px-4 text-center text-zinc-400">LAIR {safePct(dreEbt)}%</td>
                      </tr>

                      {/* IMPOSTO DE RENDA */}
                      <tr className="hover:bg-zinc-800/40 transition text-rose-300">
                        <td className="py-2.5 px-4">(-) IMPOSTO DE RENDA & CSLL (IRPJ / CSLL Lucro Presumido/Real)</td>
                        <td className="py-2.5 px-4 text-right font-mono">(R$ {dreIncomeTaxes.toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                        <td className="py-2.5 px-4 text-right">-{safePct(dreIncomeTaxes)}%</td>
                        <td className="py-2.5 px-4 text-center text-rose-400">Tributação IRPJ/CSLL</td>
                      </tr>

                      {/* LUCRO LÍQUIDO */}
                      <tr className="bg-purple-900/40 font-bold text-white border-t-2 border-purple-500">
                        <td className="py-4 px-4 text-purple-200 font-black text-sm">(=) LUCRO LÍQUIDO DO EXERCÍCIO (NETFITS LTDA.)</td>
                        <td className="py-4 px-4 text-right font-mono text-lime-400 text-lg font-black">
                          R$ {dreAdjustedNetProfit.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </td>
                        <td className="py-4 px-4 text-right text-lime-400 font-black text-base">{adjustedNetMarginPct.toFixed(1)}%</td>
                        <td className="py-4 px-4 text-center text-lime-400 font-black">★ Margem Líquida {adjustedNetMarginPct.toFixed(1)}%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Tabela Sintética Comparativa do Business Case v1 (Sem Clube vs Com Clube) */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 w-full">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3 flex-wrap gap-2">
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <span>📊 DRE Sintética Comparativa — Business Case v1.xlsx</span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2.5 py-0.5 rounded-full font-mono">
                        Planilha Modelo Oficial
                      </span>
                    </h4>
                    <p className="text-xs text-zinc-400">Comparativo direto da estrutura da DRE do Launch Inicial versus Expansão com Clube de Benefícios (R$ 19,90/mês).</p>
                  </div>
                </div>

                <div className="overflow-x-auto w-full max-w-full">
                  <table className="w-full text-left text-xs text-zinc-300 min-w-[700px]">
                    <thead className="bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800">
                      <tr>
                        <th className="py-3 px-4">Linha DRE Sintética</th>
                        <th className="py-3 px-4 text-right text-lime-400">Fase 1 Launch (R$)</th>
                        <th className="py-3 px-4 text-right text-lime-400">Fase 1 (%)</th>
                        <th className="py-3 px-4 text-right text-purple-400">Com Clube Netfits (R$)</th>
                        <th className="py-3 px-4 text-right text-purple-400">Com Clube (%)</th>
                        <th className="py-3 px-4 text-center">Variação / Impacto</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/80 font-medium">
                      <tr className="hover:bg-zinc-800/40 font-bold text-white">
                        <td className="py-3 px-4 text-purple-300">Receita Bruta Total</td>
                        <td className="py-3 px-4 text-right font-mono text-lime-400">R$ {(1173850 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                        <td className="py-3 px-4 text-right text-lime-400">100,0%</td>
                        <td className="py-3 px-4 text-right font-mono text-purple-300">R$ {(2510850 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                        <td className="py-3 px-4 text-right text-purple-300">100,0%</td>
                        <td className="py-3 px-4 text-center text-lime-400 font-bold">+113,9% 🚀</td>
                      </tr>
                      <tr className="hover:bg-zinc-800/40 text-rose-300">
                        <td className="py-2.5 px-4">Deduções Fiscais (-6%)</td>
                        <td className="py-2.5 px-4 text-right font-mono">(R$ {(70431 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                        <td className="py-2.5 px-4 text-right">-6,0%</td>
                        <td className="py-2.5 px-4 text-right font-mono">(R$ {(150651 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                        <td className="py-2.5 px-4 text-right">-6,0%</td>
                        <td className="py-2.5 px-4 text-center text-rose-400">Impostos s/ Vendas</td>
                      </tr>
                      <tr className="hover:bg-zinc-800/40 font-semibold text-zinc-200">
                        <td className="py-2.5 px-4">Receita Líquida Bruta</td>
                        <td className="py-2.5 px-4 text-right font-mono">R$ {(1103419 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                        <td className="py-2.5 px-4 text-right">94,0%</td>
                        <td className="py-2.5 px-4 text-right font-mono">R$ {(2360199 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                        <td className="py-2.5 px-4 text-right">94,0%</td>
                        <td className="py-2.5 px-4 text-center text-zinc-400">Pré-Provisão</td>
                      </tr>
                      <tr className="hover:bg-zinc-800/40 text-purple-300">
                        <td className="py-2.5 px-4">Provisão Líquida de Pontos (Provisão - Reversão)</td>
                        <td className="py-2.5 px-4 text-right font-mono">(R$ {(90393.60 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                        <td className="py-2.5 px-4 text-right">-7,7%</td>
                        <td className="py-2.5 px-4 text-right font-mono">(R$ {(90393.60 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                        <td className="py-2.5 px-4 text-right">-3,6%</td>
                        <td className="py-2.5 px-4 text-center text-purple-400 font-bold">Diluição do Passivo</td>
                      </tr>
                      <tr className="hover:bg-zinc-800/40 font-bold text-lime-400">
                        <td className="py-3 px-4">Receita Líquida Ajustada</td>
                        <td className="py-3 px-4 text-right font-mono">R$ {(1013025.40 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                        <td className="py-3 px-4 text-right">86,3%</td>
                        <td className="py-3 px-4 text-right font-mono">R$ {(2269805.40 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                        <td className="py-3 px-4 text-right">90,4%</td>
                        <td className="py-3 px-4 text-center text-lime-400 font-bold">+124,1% Base Líquida</td>
                      </tr>
                      <tr className="hover:bg-zinc-800/40 text-rose-300">
                        <td className="py-2.5 px-4">Custos Diretos (CSP)</td>
                        <td className="py-2.5 px-4 text-right font-mono">(R$ {(277605 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                        <td className="py-2.5 px-4 text-right">-23,6%</td>
                        <td className="py-2.5 px-4 text-right font-mono">(R$ {(277605 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                        <td className="py-2.5 px-4 text-right">-11,1%</td>
                        <td className="py-2.5 px-4 text-center text-zinc-400">Ganhos de Escala</td>
                      </tr>
                      <tr className="hover:bg-zinc-800/40 font-bold text-white">
                        <td className="py-3 px-4 text-purple-300">Lucro Bruto Ajustado</td>
                        <td className="py-3 px-4 text-right font-mono text-lime-400">R$ {(735420.40 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                        <td className="py-3 px-4 text-right text-lime-400">62,6%</td>
                        <td className="py-3 px-4 text-right font-mono text-purple-300">R$ {(1992200.40 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                        <td className="py-3 px-4 text-right text-purple-300">79,3%</td>
                        <td className="py-3 px-4 text-center text-lime-400 font-bold">+170,9% Lucro Bruto</td>
                      </tr>
                      <tr className="hover:bg-zinc-800/40 text-rose-300">
                        <td className="py-2.5 px-4">Despesas Operacionais (OPEX)</td>
                        <td className="py-2.5 px-4 text-right font-mono">(R$ {(551120 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                        <td className="py-2.5 px-4 text-right">-46,9%</td>
                        <td className="py-2.5 px-4 text-right font-mono">(R$ {(723120 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })})</td>
                        <td className="py-2.5 px-4 text-right">-28,8%</td>
                        <td className="py-2.5 px-4 text-center text-rose-400">Escala de Equipe</td>
                      </tr>
                      <tr className="bg-lime-400/10 font-black text-white border-y border-lime-400/30">
                        <td className="py-3.5 px-4 text-lime-300">EBITDA Ajustado do Exercício</td>
                        <td className="py-3.5 px-4 text-right font-mono text-lime-400 text-sm">R$ {(184300.40 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                        <td className="py-3.5 px-4 text-right text-lime-400">15,7%</td>
                        <td className="py-3.5 px-4 text-right font-mono text-purple-300 text-sm">R$ {(1269080.40 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                        <td className="py-3.5 px-4 text-right text-purple-300">50,5%</td>
                        <td className="py-3.5 px-4 text-center text-lime-400 font-extrabold">+588,6% EBITDA 🚀</td>
                      </tr>
                      <tr className="bg-purple-950/40 font-black text-white border-t border-purple-500/40">
                        <td className="py-3.5 px-4 text-purple-200">Lucro Líquido do Exercício</td>
                        <td className="py-3.5 px-4 text-right font-mono text-lime-400 text-sm">R$ {(151895.34 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                        <td className="py-3.5 px-4 text-right text-lime-400">12,9%</td>
                        <td className="py-3.5 px-4 text-right font-mono text-purple-300 text-sm">R$ {(1073958.34 * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                        <td className="py-3.5 px-4 text-right text-purple-300">42,8%</td>
                        <td className="py-3.5 px-4 text-center text-lime-400 font-extrabold">+607,0% Lucro Líq. ⭐</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
      })()}

      {/* Modal Interativo de Apresentação de Investidores (Pitch Deck) */}
      {showPitchDeckModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-zinc-950 border border-purple-500/30 rounded-3xl w-full max-w-5xl lg:max-w-6xl max-h-[92vh] overflow-y-auto p-6 md:p-8 space-y-6 shadow-2xl flex flex-col justify-between">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 px-3 rounded-2xl bg-black border border-lime-400/40 flex items-center justify-center shrink-0 shadow-inner">
                  <img src={netfitsLogo} alt="Netfits Logo" className="h-6 w-auto object-contain" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-lime-400">
                    Executive Pitch Deck — Rodada Seed
                  </span>
                  <h3 className="text-xl font-black text-white">
                    Netfits Ltda.
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setShowPitchDeckModal(false)}
                className="size-9 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white grid place-items-center transition cursor-pointer font-bold border border-zinc-800"
              >
                ✕
              </button>
            </div>

            {/* Slide Navigation Bar */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none pb-2 border-b border-zinc-800/80">
              {[
                "1. Capa & Flywheel", "2. O Problema", "3. Engagement Loop", "4. Tração & MVP",
                "5. Rede de Associados", "6. Mercado Bottom-Up", "7. Monetização Multi-Stream", "8. Unit Economics",
                "9. Arquitetura AI-First", "10. Moat Tecnológico", "11. Time & Founder Fit", "12. Roadmap 18M",
                "13. The Ask (Seed R$ 5M-8M)", "14. Apêndice Tokenomics"
              ].map((name, idx) => (
                <button
                  key={idx}
                  onClick={() => setPitchSlide(idx + 1)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                    pitchSlide === idx + 1
                      ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white font-black shadow-md shadow-purple-600/30 border border-purple-400/40"
                      : "bg-zinc-900/80 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 border border-zinc-800"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>

            {/* Slide Content Dynamic Viewer */}
            <div className="py-2 min-h-[380px]">
              {/* SLIDE 1: CAPA & FLYWHEEL */}
              {pitchSlide === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7 space-y-5 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-bold">
                      <span className="size-2 rounded-full bg-lime-400 animate-pulse" />
                      Apresentação Executiva de Investimentos
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                      Fazer cada movimento <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-300 to-purple-400">
                        valer mais.
                      </span>
                    </h1>
                    <p className="text-sm text-zinc-300 font-medium leading-relaxed max-w-lg">
                      A primeira plataforma de engajamento, cashback e dados de longevidade para a vida em movimento na América Latina.
                    </p>
                    <div className="p-4 rounded-2xl bg-zinc-900/90 border border-lime-400/30 space-y-2">
                      <span className="text-[10px] font-mono text-lime-400 font-bold uppercase tracking-wider">O Flywheel da Longevidade Netfits</span>
                      <p className="text-xs text-white font-bold leading-relaxed">
                        Movimento ➔ Recompensa Imediata ➔ Hábito Recorrente ➔ Dados de Saúde ➔ Longevidade
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-5 relative">
                    <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl group">
                      <img
                        src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80"
                        alt="Maratona e Longevidade Netfits"
                        className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-5 text-left">
                        <img src={netfitsLogo} alt="Netfits" className="h-9 w-auto object-contain mb-2 self-start" />
                        <p className="text-xs text-lime-400 font-mono font-bold">Netfits Ltda. · São Paulo, SP</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 2: O PROBLEMA */}
              {pitchSlide === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative">
                    <div className="rounded-3xl overflow-hidden border border-rose-500/30 shadow-2xl relative">
                      <img
                        src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80"
                        alt="Atleta Desestimulado"
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent flex items-end p-5">
                        <span className="bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold px-3 py-1 rounded-full">
                          Fricção no Mercado de Fitness &amp; Saúde
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-7 space-y-4 text-left">
                    <div>
                      <span className="text-xs font-mono text-rose-400 font-bold uppercase tracking-wider">Market Friction</span>
                      <h2 className="text-2xl font-black text-white mt-1">O Desafio: Falta de Retenção no Estilo de Vida Ativo</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-zinc-900/90 p-4 rounded-2xl border border-rose-500/20 space-y-1">
                        <h4 className="font-bold text-rose-400 text-xs">Atleta Amador</h4>
                        <p className="text-xs text-zinc-400">Esforço físico diário sem reconhecimento tangível. Falta de motivação constante.</p>
                      </div>
                      <div className="bg-zinc-900/90 p-4 rounded-2xl border border-rose-500/20 space-y-1">
                        <h4 className="font-bold text-rose-400 text-xs">Academias &amp; Estúdios</h4>
                        <p className="text-xs text-zinc-400">Taxa de cancelamento (churn) de 60% a 65% em até 90 dias após a primeira matrícula.</p>
                      </div>
                      <div className="bg-zinc-900/90 p-4 rounded-2xl border border-rose-500/20 space-y-1">
                        <h4 className="font-bold text-rose-400 text-xs">Marcas Esportivas</h4>
                        <p className="text-xs text-zinc-400">Custos de aquisição (CAC) disparando a dois dígitos ao ano e baixa retenção pós-compra.</p>
                      </div>
                      <div className="bg-zinc-900/90 p-4 rounded-2xl border border-rose-500/20 space-y-1">
                        <h4 className="font-bold text-rose-400 text-xs">Programas de Pontos</h4>
                        <p className="text-xs text-zinc-400">Desconectados da rotina esportiva, com resgates burocráticos e expiração punitiva.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 3: A SOLUÇÃO & ENGAGEMENT LOOP */}
              {pitchSlide === 3 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7 space-y-4 text-left">
                    <div>
                      <span className="text-xs font-mono text-lime-400 font-bold uppercase tracking-wider">The Product Mechanics</span>
                      <h2 className="text-2xl font-black text-white mt-1">A Solução: O Engagement Loop da Netfits</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-zinc-900 p-3.5 rounded-2xl border border-lime-400/30 space-y-1">
                        <span className="text-lime-400 font-mono font-bold text-xs">1. Movimentou-se</span>
                        <p className="text-[11px] text-zinc-400">Atividade física realizada e registrada no aplicativo.</p>
                      </div>
                      <div className="bg-zinc-900 p-3.5 rounded-2xl border border-lime-400/30 space-y-1">
                        <span className="text-lime-400 font-mono font-bold text-xs">2. Ganhou nfs</span>
                        <p className="text-[11px] text-zinc-400">Pontos creditados instantaneamente na carteira digital.</p>
                      </div>
                      <div className="bg-zinc-900 p-3.5 rounded-2xl border border-purple-500/30 space-y-1">
                        <span className="text-purple-300 font-mono font-bold text-xs">3. Interagiu no Feed</span>
                        <p className="text-[11px] text-zinc-400">Engajamento social, desafios e artigos de especialistas.</p>
                      </div>
                      <div className="bg-zinc-900 p-3.5 rounded-2xl border border-purple-500/30 space-y-1">
                        <span className="text-purple-300 font-mono font-bold text-xs">4. Oferta Relevante</span>
                        <p className="text-[11px] text-zinc-400">IA Recommender exibe a oferta exata para a rotina.</p>
                      </div>
                      <div className="bg-zinc-900 p-3.5 rounded-2xl border border-emerald-400/30 space-y-1">
                        <span className="text-emerald-300 font-mono font-bold text-xs">5. Resgatou/Comprou</span>
                        <p className="text-[11px] text-zinc-400">Cashback aplicado direto no checkout do Shop B2C.</p>
                      </div>
                      <div className="bg-zinc-900 p-3.5 rounded-2xl border border-emerald-400/30 space-y-1">
                        <span className="text-emerald-300 font-mono font-bold text-xs">6. Voltou a Treinar</span>
                        <p className="text-[11px] text-zinc-400">Recompensa imediata gera retenção diária (WAU/MAU 89%).</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="rounded-3xl overflow-hidden border border-lime-400/30 shadow-2xl relative">
                      <img
                        src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80"
                        alt="Smartwatch e Habito Netfits"
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent flex items-end p-5">
                        <span className="bg-lime-400/20 border border-lime-400/40 text-lime-300 text-xs font-bold px-3 py-1 rounded-full">
                          Engajamento Diário no Treino
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 4: TRAÇÃO INICIAL & MVP */}
              {pitchSlide === 4 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
                  <div className="md:col-span-7 space-y-4">
                    <div>
                      <span className="text-xs font-mono text-lime-400 font-bold uppercase tracking-wider">Traction &amp; Validation</span>
                      <h2 className="text-2xl font-black text-white mt-1">Tração Inicial &amp; Validação do MVP</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-zinc-900 p-4 rounded-2xl border border-lime-400/30">
                        <h3 className="text-2xl font-black text-lime-400">100+ Atletas</h3>
                        <p className="text-xs text-zinc-400 mt-1">89% Retenção Semanal (WAU/MAU)</p>
                      </div>
                      <div className="bg-zinc-900 p-4 rounded-2xl border border-purple-500/30">
                        <h3 className="text-2xl font-black text-purple-300">15+ Academias</h3>
                        <p className="text-xs text-zinc-400 mt-1">Pré-credenciadas para lançamento</p>
                      </div>
                      <div className="bg-zinc-900 p-4 rounded-2xl border border-emerald-400/30">
                        <h3 className="text-2xl font-black text-emerald-300">100% Mensagens</h3>
                        <p className="text-xs text-zinc-400 mt-1">Tabuladas na Central de Insights BI</p>
                      </div>
                      <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-700">
                        <h3 className="text-2xl font-black text-white">LOIs Marcas</h3>
                        <p className="text-xs text-zinc-400 mt-1">Parcerias em negociação no Shop</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl relative">
                      <img
                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
                        alt="Treino em Academia Credenciada"
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent flex items-end p-5">
                        <span className="bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-bold px-3 py-1 rounded-full">
                          Validação de Campo com Atletas
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 5: REDE DE ASSOCIADOS INFLUENCIADORES */}
              {pitchSlide === 5 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
                  <div className="md:col-span-5">
                    <div className="rounded-3xl overflow-hidden border border-lime-400/40 shadow-2xl relative">
                      <img
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                        alt="Nutricionista Esportiva e Associados Netfits"
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent flex items-end p-5">
                        <span className="bg-lime-400/20 border border-lime-400/40 text-lime-300 text-xs font-bold px-3 py-1 rounded-full">
                          Canal Exclusivo B2B2C
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <div>
                      <span className="text-xs font-mono text-lime-400 font-bold uppercase tracking-wider">Acquisition Moat</span>
                      <h2 className="text-2xl font-black text-white mt-0.5">Rede de Associados Influenciadores</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="bg-zinc-900 p-4 rounded-2xl border border-lime-400/30 space-y-1">
                        <h4 className="font-bold text-lime-400 text-xs">Prescritores com Contato Direto</h4>
                        <p className="text-zinc-400">Médicos do esporte, nutricionistas, personal trainers e creators de saúde.</p>
                      </div>
                      <div className="bg-zinc-900 p-4 rounded-2xl border border-purple-500/30 space-y-1">
                        <h4 className="font-bold text-purple-300 text-xs">Alcance a Milhões de Atletas</h4>
                        <p className="text-zinc-400">Prescrição de suplementos e vestuário direto no momento da consulta ou treino.</p>
                      </div>
                      <div className="bg-zinc-900 p-4 rounded-2xl border border-emerald-400/30 space-y-1">
                        <h4 className="font-bold text-emerald-300 text-xs">Comissionamento em PIX</h4>
                        <p className="text-zinc-400">Remuneração transparente por vendas e cupons de indicação utilizados.</p>
                      </div>
                      <div className="bg-zinc-900 p-4 rounded-2xl border border-lime-400/30 space-y-1">
                        <h4 className="font-bold text-lime-400 text-xs">Efeito de Rede Viral (MGM)</h4>
                        <p className="text-zinc-400">Custo de aquisição (CAC) drasticamente reduzido frente ao tráfego pago.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 6: MERCADO BOTTOM-UP */}
              {pitchSlide === 6 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
                  <div className="md:col-span-7 space-y-3">
                    <div>
                      <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">Market Opportunity</span>
                      <h2 className="text-2xl font-black text-white mt-0.5">Oportunidade de Mercado &amp; Funil Bottom-Up</h2>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-zinc-900 p-3.5 rounded-xl border border-purple-500/30 flex justify-between items-center">
                        <span className="text-xs text-zinc-400">Público Praticante no Brasil:</span>
                        <span className="text-sm font-black text-purple-300">30,7 Milhões de Pessoas</span>
                      </div>
                      <div className="bg-zinc-900 p-3.5 rounded-xl border border-lime-400/30 flex justify-between items-center">
                        <span className="text-xs text-zinc-400">SOM Target (Meta 36 Meses):</span>
                        <span className="text-sm font-black text-lime-400">1.000.000 de MAU</span>
                      </div>
                      <div className="bg-zinc-900 p-3.5 rounded-xl border border-emerald-400/30 flex justify-between items-center">
                        <span className="text-xs text-zinc-400">GMV Médio / Usuário no Shop:</span>
                        <span className="text-sm font-black text-emerald-300">R$ 200,00 /mês</span>
                      </div>
                      <div className="bg-gradient-to-r from-purple-950/60 to-zinc-900 p-3.5 rounded-xl border border-lime-400/50 flex justify-between items-center">
                        <span className="text-xs font-bold text-white">Receita Bruta (6,0% Take-Rate):</span>
                        <span className="text-sm font-black text-lime-300">R$ 12,0 Milhões /mês (R$ 144M /ano)</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl relative">
                      <img
                        src="https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=800&q=80"
                        alt="Maratona Urbana no Brasil"
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent flex items-end p-5">
                        <span className="bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-bold px-3 py-1 rounded-full">
                          Escala do Mercado no Brasil
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 7: MONETIZAÇÃO MULTI-STREAM */}
              {pitchSlide === 7 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
                  <div className="md:col-span-7 space-y-4">
                    <div>
                      <span className="text-xs font-mono text-lime-400 font-bold uppercase tracking-wider">Business Model</span>
                      <h2 className="text-2xl font-black text-white mt-0.5">Modelo de Negócio Multi-Stream</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-zinc-900 p-4 rounded-2xl border border-lime-400/30 space-y-1">
                        <h4 className="font-bold text-lime-400 text-xs">Marketplace Take-Rate</h4>
                        <p className="text-zinc-400">8,0% sobre o GMV de vendas de produtos e suplementos no Shop B2C.</p>
                      </div>
                      <div className="bg-zinc-900 p-4 rounded-2xl border border-purple-500/30 space-y-1">
                        <h4 className="font-bold text-purple-300 text-xs">Mídia &amp; Anúncios Feed</h4>
                        <p className="text-zinc-400">Monetização de artigos patrocinados de marcas e Associados VIP.</p>
                      </div>
                      <div className="bg-zinc-900 p-4 rounded-2xl border border-emerald-400/30 space-y-1">
                        <h4 className="font-bold text-emerald-300 text-xs">Inscrições em Eventos</h4>
                        <p className="text-zinc-400">Taxa de conveniência em ingressos de corridas e provas esportivas.</p>
                      </div>
                      <div className="bg-zinc-900 p-4 rounded-2xl border border-lime-400/30 space-y-1">
                        <h4 className="font-bold text-lime-400 text-xs">Clube Netfits</h4>
                        <p className="text-zinc-400">R$ 19,90/mês por clube premium de pontos multiplicados.</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="rounded-3xl overflow-hidden border border-lime-400/30 shadow-2xl relative">
                      <img
                        src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
                        alt="Produtos Esportivos Netfits Shop"
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent flex items-end p-5">
                        <span className="bg-lime-400/20 border border-lime-400/40 text-lime-300 text-xs font-bold px-3 py-1 rounded-full">
                          Diversificação de Receitas
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 8: UNIT ECONOMICS */}
              {pitchSlide === 8 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
                  <div className="md:col-span-7 space-y-3">
                    <div>
                      <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">Unit Economics</span>
                      <h2 className="text-2xl font-black text-white mt-0.5">Unit Economics &amp; Hipóteses Testáveis</h2>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800 flex justify-between">
                        <span className="text-zinc-400 font-bold">CAC Atleta:</span>
                        <span className="text-lime-400 font-mono">MVP R$ 12,50 ➔ Meta 18M: &lt; R$ 8,00</span>
                      </div>
                      <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800 flex justify-between">
                        <span className="text-zinc-400 font-bold">ARPU Múltiplo:</span>
                        <span className="text-purple-300 font-mono">Sem Clube: R$ 1,78/mês ➔ Com Clube: R$ 3,58/mês</span>
                      </div>
                      <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800 flex justify-between">
                        <span className="text-zinc-400 font-bold">Custo TI / MAU:</span>
                        <span className="text-emerald-300 font-mono">R$ 0,15 ➔ R$ 0,007 /user/mês (1M MAU)</span>
                      </div>
                      <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800 flex justify-between">
                        <span className="text-zinc-400 font-bold">Margem EBITDA:</span>
                        <span className="text-lime-400 font-mono font-black">84,2% (Com FinOps Enxuto)</span>
                      </div>
                      <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800 flex justify-between">
                        <span className="text-zinc-400 font-bold">Payback do Atleta:</span>
                        <span className="text-purple-300 font-mono">&lt; 3,5 Meses</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl relative">
                      <img
                        src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                        alt="Inteligencia Financeira Netfits"
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent flex items-end p-5">
                        <span className="bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-bold px-3 py-1 rounded-full">
                          Eficiência de Capital Testada
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 9: ARQUITETURA MULTIAGÊNTICA (AI FIRST) */}
              {pitchSlide === 9 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
                  <div className="md:col-span-7 space-y-3">
                    <div>
                      <span className="text-xs font-mono text-lime-400 font-bold uppercase tracking-wider">Autonomous Multi-Agent AI</span>
                      <h2 className="text-2xl font-black text-white mt-0.5">Operação Nativamente AI-First</h2>
                    </div>
                    <div className="p-3 rounded-xl bg-purple-950/50 border border-lime-400/40 text-xs space-y-1">
                      <span className="text-lime-400 font-bold font-mono">DNA AI-FIRST DE PONTA A PONTA</span>
                      <p className="text-zinc-300">Infraestrutura autônoma com Squad de 8 Agentes especializados, gerando eficiência FinOps de -95,2% (R$ 990/mês vs R$ 20.900/mês).</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="bg-zinc-900 p-2.5 rounded-xl border border-lime-400/20">
                        <span className="text-lime-400 font-bold block">1. Shop Recommender AI</span>
                        <span className="text-zinc-400">Ofertas pós-treino por telemetria.</span>
                      </div>
                      <div className="bg-zinc-900 p-2.5 rounded-xl border border-purple-500/20">
                        <span className="text-purple-300 font-bold block">2. Feed Curator AI</span>
                        <span className="text-zinc-400">Ranqueamento social contextual.</span>
                      </div>
                      <div className="bg-zinc-900 p-2.5 rounded-xl border border-emerald-400/20">
                        <span className="text-emerald-300 font-bold block">3. Fraud Shield AI</span>
                        <span className="text-zinc-400">Prevenção a GPS spoofing.</span>
                      </div>
                      <div className="bg-zinc-900 p-2.5 rounded-xl border border-lime-400/20">
                        <span className="text-lime-400 font-bold block">4. Tax &amp; Accounting AI</span>
                        <span className="text-zinc-400">Auditoria contábil e FEFO real.</span>
                      </div>
                      <div className="bg-zinc-900 p-2.5 rounded-xl border border-purple-500/20">
                        <span className="text-purple-300 font-bold block">5. CS 24/7 Agent</span>
                        <span className="text-zinc-400">Atendimento autônomo humanizado.</span>
                      </div>
                      <div className="bg-zinc-900 p-2.5 rounded-xl border border-emerald-400/20">
                        <span className="text-emerald-300 font-bold block">6. Partner Co-Pilot</span>
                        <span className="text-zinc-400">Onboarding de academias B2B.</span>
                      </div>
                      <div className="bg-zinc-900 p-2.5 rounded-xl border border-lime-400/20">
                        <span className="text-lime-400 font-bold block">7. Sensor Telemetry AI</span>
                        <span className="text-zinc-400">Validação de esforço cardíaco.</span>
                      </div>
                      <div className="bg-zinc-900 p-2.5 rounded-xl border border-purple-500/20">
                        <span className="text-purple-300 font-bold block">8. BI Miner AI</span>
                        <span className="text-zinc-400">Tabulação de 100% dos canais.</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="rounded-3xl overflow-hidden border border-lime-400/30 shadow-2xl relative">
                      <img
                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
                        alt="Inteligencia Artificial Multiagente Netfits"
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent flex items-end p-5">
                        <span className="bg-lime-400/20 border border-lime-400/40 text-lime-300 text-xs font-bold px-3 py-1 rounded-full">
                          Squad de 8 Agentes Autônomos
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 10: MOAT TECH */}
              {pitchSlide === 10 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
                  <div className="md:col-span-7 space-y-4">
                    <div>
                      <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">Defensability</span>
                      <h2 className="text-2xl font-black text-white mt-0.5">Moat Tecnológico &amp; Barreiras Defensáveis</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-zinc-900 p-3.5 rounded-2xl border border-lime-400/30 space-y-1">
                        <h4 className="font-bold text-lime-400 text-xs">Verticalização no Esporte</h4>
                        <p className="text-zinc-400">Foco estrito no estilo de vida do atleta amador e hábitos saudáveis.</p>
                      </div>
                      <div className="bg-zinc-900 p-3.5 rounded-2xl border border-emerald-400/30 space-y-1">
                        <h4 className="font-bold text-emerald-300 text-xs">FinOps IA Eficiente</h4>
                        <p className="text-zinc-400">Escalabilidade para 1M MAU sem inchaço de folha de pagamento.</p>
                      </div>
                      <div className="bg-zinc-900 p-3.5 rounded-2xl border border-purple-500/30 space-y-1">
                        <h4 className="font-bold text-purple-300 text-xs">Algoritmo FEFO</h4>
                        <p className="text-zinc-400">Solvência contábil e liquidez garantida da moeda nfs.</p>
                      </div>
                      <div className="bg-zinc-900 p-3.5 rounded-2xl border border-lime-400/30 space-y-1">
                        <h4 className="font-bold text-lime-400 text-xs">Lock-in B2B2C</h4>
                        <p className="text-zinc-400">Integração com médicos, nutricionistas, academias e marcas.</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl relative">
                      <img
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                        alt="Servidores e Seguranca Netfits"
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent flex items-end p-5">
                        <span className="bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-bold px-3 py-1 rounded-full">
                          Defensabilidade Estrutural
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 11: TIME DE FUNDADORES & FOUNDER-MARKET FIT */}
              {pitchSlide === 11 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
                  <div className="md:col-span-7 space-y-3">
                    <div>
                      <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">Leadership &amp; Founder-Market Fit</span>
                      <h2 className="text-2xl font-black text-white mt-0.5">Time de Fundadores — Founder-Market Fit Autêntico</h2>
                    </div>
                    <div className="bg-gradient-to-br from-purple-950/60 via-zinc-900 to-zinc-900 p-4 rounded-2xl border border-lime-400/40 space-y-2">
                      <span className="text-lime-400 font-bold font-mono text-sm block">ANDRÉ GALLO · CEO &amp; FUNDADOR</span>
                      <p className="text-xs text-white font-bold leading-snug">
                        • Gestor de Produtos &amp; Especialista em Loyalty, Fidelização de Clientes e Estratégia de Negócios.
                      </p>
                      <p className="text-xs text-zinc-300 leading-snug">
                        • <strong className="text-lime-300">Triatleta Amador · Finisher Ironman 70.3 Florianópolis (out/25)</strong>: vivência direta e profunda da rotina, esforço e necessidades do praticante de esportes.
                      </p>
                      <p className="text-xs text-zinc-300 leading-snug">
                        • <strong className="text-purple-300">Diabético Tipo 1 há mais de 30 anos</strong>: compreensão visceral da telemetria de saúde, controle glicêmico, nutrição esportiva e do papel indispensável do movimento diário na longevidade.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-zinc-900 p-3 rounded-xl border border-purple-500/30">
                        <span className="text-purple-300 font-bold block">Diretoria de Operações</span>
                        <p className="text-zinc-400 text-[11px] mt-0.5">Expansão de e-commerce e parcerias com grandes redes de academias.</p>
                      </div>
                      <div className="bg-zinc-900 p-3 rounded-xl border border-emerald-400/30">
                        <span className="text-emerald-300 font-bold block">Conselho Médico</span>
                        <p className="text-zinc-400 text-[11px] mt-0.5">Médicos do esporte e nutricionistas conectados à rede de Associados VIP.</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="rounded-3xl overflow-hidden border border-lime-400/40 shadow-2xl relative">
                      <img
                        src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80"
                        alt="Triatleta e Founder Fit Netfits"
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent flex items-end p-5">
                        <span className="bg-lime-400/20 border border-lime-400/40 text-lime-300 text-xs font-bold px-3 py-1 rounded-full">
                          Experiência Real no Ironman &amp; Saúde
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 12: ROADMAP 18M */}
              {pitchSlide === 12 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
                  <div className="md:col-span-7 space-y-3">
                    <div>
                      <span className="text-xs font-mono text-lime-400 font-bold uppercase tracking-wider">Execution Plan</span>
                      <h2 className="text-2xl font-black text-white mt-0.5">Roadmap Executivo (Próximos 18 Meses)</h2>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="bg-zinc-900 p-3.5 rounded-2xl border border-lime-400/30 space-y-1">
                        <span className="text-lime-400 font-bold">Fase 1: Go-Live &amp; Tração Inicial (Meses 1 a 6)</span>
                        <p className="text-zinc-400">10.000 MAU │ 50 Academias Credenciadas │ App Web/PWA &amp; Squad IA Ativos.</p>
                      </div>
                      <div className="bg-zinc-900 p-3.5 rounded-2xl border border-purple-500/30 space-y-1">
                        <span className="text-purple-300 font-bold">Lançamento: Wearables &amp; Clube (14 de Novembro)</span>
                        <p className="text-zinc-400">100.000 MAU │ Conexão Smartwatches (Garmin/Strava/Apple) │ Netfits Club (R$ 19,90/mês).</p>
                      </div>
                      <div className="bg-zinc-900 p-3.5 rounded-2xl border border-emerald-400/30 space-y-1">
                        <span className="text-emerald-300 font-bold">Fase 3: Breakeven &amp; Escala Nacional (Meses 13 a 18)</span>
                        <p className="text-zinc-400">500.000 MAU │ Breakeven Operacional │ Preparação para Rodada Series A (1M MAU).</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="rounded-3xl overflow-hidden border border-lime-400/30 shadow-2xl relative">
                      <img
                        src="https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=800&q=80"
                        alt="Linha de Chegada e Vitoria"
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent flex items-end p-5">
                        <span className="bg-lime-400/20 border border-lime-400/40 text-lime-300 text-xs font-bold px-3 py-1 rounded-full">
                          Execução com Disciplina
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 13: THE ASK */}
              {pitchSlide === 13 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
                  <div className="md:col-span-7 space-y-4">
                    <div>
                      <span className="text-xs font-mono text-lime-400 font-bold uppercase tracking-wider">Investment Request</span>
                      <h2 className="text-2xl font-black text-white mt-0.5">The Ask — Rodada Seed R$ 5,0M a R$ 8,0M</h2>
                    </div>
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/60 to-zinc-900 border border-lime-400/40 text-xs space-y-1">
                      <span className="text-lime-400 font-black font-mono text-sm">RODADA SEED: R$ 5,0M A R$ 8,0M</span>
                      <p className="text-zinc-300 font-medium">Runway: 18 a 24 Meses │ Instrumento: Nota Conversível (SAFE / Múltiplo)</p>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center bg-zinc-900 p-2.5 rounded-xl border border-zinc-800">
                        <span className="text-zinc-300">40% — Produto &amp; Engenharia Native-Shell</span>
                        <span className="text-lime-400 font-mono font-bold">R$ 2,0M a R$ 3,2M</span>
                      </div>
                      <div className="flex justify-between items-center bg-zinc-900 p-2.5 rounded-xl border border-zinc-800">
                        <span className="text-zinc-300">25% — Aquisição, Growth &amp; Comunidade (MGM)</span>
                        <span className="text-purple-300 font-mono font-bold">R$ 1,25M a R$ 2,0M</span>
                      </div>
                      <div className="flex justify-between items-center bg-zinc-900 p-2.5 rounded-xl border border-zinc-800">
                        <span className="text-zinc-300">15% — Expansão de Academias &amp; Associados</span>
                        <span className="text-lime-400 font-mono font-bold">R$ 750k a R$ 1,2M</span>
                      </div>
                      <div className="flex justify-between items-center bg-zinc-900 p-2.5 rounded-xl border border-zinc-800">
                        <span className="text-zinc-300">10% — Cloud, Telemetria &amp; Security</span>
                        <span className="text-emerald-300 font-mono font-bold">R$ 500k a R$ 800k</span>
                      </div>
                      <div className="flex justify-between items-center bg-zinc-900 p-2.5 rounded-xl border border-zinc-800">
                        <span className="text-zinc-300">10% — Governança Jurídica, LGPD &amp; Operações</span>
                        <span className="text-zinc-400 font-mono font-bold">R$ 500k a R$ 800k</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="rounded-3xl overflow-hidden border border-lime-400/40 shadow-2xl relative">
                      <img
                        src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80"
                        alt="Parceria e Investimento Netfits"
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent flex items-end p-5">
                        <span className="bg-lime-400/20 border border-lime-400/40 text-lime-300 text-xs font-bold px-3 py-1 rounded-full">
                          Rodada Seed para 500k MAU
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 14: APÊNDICE TOKENOMICS */}
              {pitchSlide === 14 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
                  <div className="md:col-span-7 space-y-4">
                    <div>
                      <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">Appendix</span>
                      <h2 className="text-2xl font-black text-white mt-0.5">Solvência Contábil &amp; Governança do Ponto nfs</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-zinc-900 p-3.5 rounded-2xl border border-lime-400/30 space-y-1">
                        <span className="text-lime-400 font-bold block">Acúmulo: R$ 0,015 | Resgate: R$ 0,01</span>
                        <p className="text-zinc-400 text-[11px]">CPP de emissão R$ 0,015 e conversão no Shop a R$ 0,01.</p>
                      </div>
                      <div className="bg-zinc-900 p-3.5 rounded-2xl border border-purple-500/30 space-y-1">
                        <span className="text-purple-300 font-bold block">Provisão R$ 0,01</span>
                        <p className="text-zinc-400 text-[11px]">Fundo de liquidez para 100% dos pontos válidos.</p>
                      </div>
                      <div className="bg-zinc-900 p-3.5 rounded-2xl border border-emerald-400/30 space-y-1">
                        <span className="text-emerald-300 font-bold block">Breakage (5% a.a.)</span>
                        <p className="text-zinc-400 text-[11px]">Baixa contábil de pontos expirados auditada por IA.</p>
                      </div>
                      <div className="bg-zinc-900 p-3.5 rounded-2xl border border-zinc-700 space-y-1">
                        <span className="text-white font-bold block">PDFs Oficiais</span>
                        <p className="text-zinc-400 text-[11px]">Regulamento e Termo LGPD assinados com marca d'água.</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl relative">
                      <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                        alt="Reuniao Executiva e Governanca Netfits"
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent flex items-end p-5">
                        <span className="bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-bold px-3 py-1 rounded-full">
                          Governança &amp; Compliance LGPD
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer Controls */}
            <div className="flex items-center justify-between border-t border-zinc-800 pt-4 gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <button
                  disabled={pitchSlide === 1}
                  onClick={() => setPitchSlide((s) => Math.max(1, s - 1))}
                  className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-white font-bold text-xs transition cursor-pointer"
                >
                  ← Anterior
                </button>
                <button
                  disabled={pitchSlide === 14}
                  onClick={() => setPitchSlide((s) => Math.min(14, s + 1))}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-bold text-xs transition cursor-pointer"
                >
                  Próximo →
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    toast.success("Apresentação de Investidores exportada em Word!");
                  }}
                  className="px-4 py-2 rounded-xl bg-lime-400 text-zinc-950 hover:bg-lime-300 font-extrabold text-xs shadow-md transition cursor-pointer flex items-center gap-2"
                >
                  <Download className="size-3.5" />
                  <span>Baixar Apresentação (.docx)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
