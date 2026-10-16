import { useState } from "react";
import {
  BarChart3, Sparkles, FileText, Download, Search, X, Send
} from "lucide-react";
import {
  ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip
} from "recharts";
import { toast } from "sonner";
import { sharedSandboxStore, type SandboxInteraction } from "@/lib/shared-sandbox-store";
import { type PeriodType, TIME_PERIODS } from "./admin-types";

interface AdminInteractionsTabProps {
  selectedPeriod: PeriodType;
  isReal?: boolean;
}

export function AdminInteractionsTab({ selectedPeriod, isReal }: AdminInteractionsTabProps) {
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [channelFilter, setChannelFilter] = useState<string>("all");
  const [sentimentFilter, setSentimentFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedInteraction, setSelectedInteraction] = useState<SandboxInteraction | null>(null);

  const interactions = sharedSandboxStore.getInteractions();

  // Scale data factor based on selected period
  const periodFactor = isReal ? 1 : (TIME_PERIODS.find((p) => p.id === selectedPeriod)?.factor || 1);

  // Filtered interactions
  const filtered = interactions.filter((item) => {
    if (roleFilter !== "all" && item.sourceRole !== roleFilter) return false;
    if (channelFilter !== "all" && item.channel !== channelFilter) return false;
    if (sentimentFilter !== "all" && item.sentiment !== sentimentFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match =
        item.sourceName.toLowerCase().includes(q) ||
        item.subject.toLowerCase().includes(q) ||
        item.content.toLowerCase().includes(q) ||
        item.businessInsight.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });

  // Calculate Metrics
  const totalCount = isReal ? filtered.length : Math.round(filtered.length * (selectedPeriod === "24h" ? 0.3 : selectedPeriod === "7d" ? 0.8 : periodFactor));
  const positiveCount = filtered.filter((i) => i.sentiment === "positivo").length;
  const positivePercent = filtered.length ? ((positiveCount / filtered.length) * 100).toFixed(1) : (isReal ? "N/A" : "0.0");
  const totalInsights = filtered.filter((i) => i.businessInsight).length;

  // Chart data: Distribution by Channel
  const channelData = [
    { name: "Chat AI", count: filtered.filter((i) => i.channel === "chat").length, color: "#818cf8" },
    { name: "E-mail", count: filtered.filter((i) => i.channel === "email").length, color: "#38bdf8" },
    { name: "WhatsApp", count: filtered.filter((i) => i.channel === "whatsapp").length, color: "#4ade80" },
    { name: "Formulários", count: filtered.filter((i) => i.channel === "form").length, color: "#facc15" },
    { name: "Pesquisas / NPS", count: filtered.filter((i) => i.channel === "survey").length, color: "#f472b6" },
  ];

  const exportReportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(filtered, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `relatorio_insights_interacoes_netfits_${selectedPeriod}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    toast.success("Relatório de Insights exportado em JSON com sucesso!");
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-950/80 via-zinc-900 to-indigo-950/80 p-6 rounded-3xl border border-purple-500/30 space-y-3 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-widest text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20">
                Omnichannel BI & Strategic Analytics
              </span>
              <span className="text-xs font-mono text-lime-400 bg-lime-400/10 px-2.5 py-0.5 rounded-full border border-lime-400/20">
                Data Mining Ativo
              </span>
            </div>
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <span>💡 Central de Inteligência de Interações & Insights</span>
            </h2>
            <p className="text-xs text-zinc-300 max-w-3xl">
              Todas as interações de Usuários, Parceiros, Associados VIP e Colaboradores (via E-mail, Chat AI, WhatsApp, Formulários e Pesquisas) tabuladas e estruturadas em tempo real para geração de decisões táticas e diretrizes do roadmap Netfits.
            </p>
          </div>

          <button
            onClick={exportReportJSON}
            className="self-start md:self-auto bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl border border-purple-400/30 flex items-center gap-2 transition shadow-lg shrink-0 cursor-pointer"
          >
            <Download className="size-4" />
            <span>Exportar Relatório (JSON)</span>
          </button>
        </div>

        {/* Executive Metric Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-purple-500/20">
          <div className="bg-zinc-950/80 p-3 rounded-2xl border border-zinc-800 space-y-1">
            <p className="text-[10px] font-bold text-zinc-400 uppercase">Interações Tabuladas</p>
            <p className="text-xl font-black text-white">{totalCount.toLocaleString("pt-BR")}</p>
            <p className="text-[10px] text-purple-400 font-medium">{isReal ? "Banco Real" : "100% estruturadas no BI"}</p>
          </div>
          <div className="bg-zinc-950/80 p-3 rounded-2xl border border-zinc-800 space-y-1">
            <p className="text-[10px] font-bold text-zinc-400 uppercase">Sentimento Positivo</p>
            <p className="text-xl font-black text-lime-400">{positivePercent}{positivePercent !== "N/A" ? "%" : ""}</p>
            <p className="text-[10px] text-zinc-400 font-medium">Satisfação global apurada</p>
          </div>
          <div className="bg-zinc-950/80 p-3 rounded-2xl border border-zinc-800 space-y-1">
            <p className="text-[10px] font-bold text-zinc-400 uppercase">Insights Estratégicos</p>
            <p className="text-xl font-black text-cyan-400">{totalInsights} Gerados</p>
            <p className="text-[10px] text-cyan-300 font-medium">Mapeados para o Roadmap</p>
          </div>
          <div className="bg-zinc-950/80 p-3 rounded-2xl border border-zinc-800 space-y-1">
            <p className="text-[10px] font-bold text-zinc-400 uppercase">Canais Integrados</p>
            <p className="text-xl font-black text-amber-400">
              {isReal ? `${channelData.filter((c) => c.count > 0).length} de 5 Canais` : "5 de 5 Canais"}
            </p>
            <p className="text-[10px] text-zinc-400 font-medium">
              {isReal ? (channelData.some((c) => c.count > 0) ? "Omnichannel Ativo" : "Aguardando Logs") : "Omnichannel Ativo"}
            </p>
          </div>
        </div>
      </div>

      {/* Control Bar: Filters & Mining Inputs */}
      <div className="bg-zinc-900/90 p-4 rounded-2xl border border-zinc-800 space-y-4 shadow-xl">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="size-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por palavra-chave, insight, nome ou tag (ex: Strava, Garmin, Shop, Pix)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950 text-xs text-white pl-9 pr-4 py-2.5 rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-zinc-500"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 shrink-0">
            {/* Filter 1: Público / Role */}
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="bg-zinc-950 text-xs font-bold text-zinc-200 px-3 py-2.5 rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
            >
              <option value="all">👥 Todos os Públicos</option>
              <option value="atleta">🏃 Usuários (Atletas)</option>
              <option value="parceiro">🤝 Parceiros B2B</option>
              <option value="associado">👑 Associados VIP</option>
              <option value="colaborador">🛡️ Colaboradores</option>
            </select>

            {/* Filter 2: Canal */}
            <select
              value={channelFilter}
              onChange={(e) => setChannelFilter(e.target.value)}
              className="bg-zinc-950 text-xs font-bold text-zinc-200 px-3 py-2.5 rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
            >
              <option value="all">📡 Todos os Canais</option>
              <option value="chat">💬 Chat AI Assistant</option>
              <option value="email">✉️ E-mail Suporte</option>
              <option value="whatsapp">📱 WhatsApp Direct</option>
              <option value="form">📑 Formulários Site</option>
              <option value="survey">📋 Pesquisas (NPS)</option>
            </select>

            {/* Filter 3: Sentimento */}
            <select
              value={sentimentFilter}
              onChange={(e) => setSentimentFilter(e.target.value)}
              className="bg-zinc-950 text-xs font-bold text-zinc-200 px-3 py-2.5 rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
            >
              <option value="all">🎭 Todo Sentimento</option>
              <option value="positivo">🟢 Positivo (Elogios)</option>
              <option value="neutro">🟡 Neutro (Dúvidas)</option>
              <option value="critico">🔴 Crítico (Atritos)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Analytics Charts & High-Impact Insights Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Visual Chart 1: Interações por Canal */}
        <div className="bg-zinc-900/90 p-5 rounded-2xl border border-zinc-800 space-y-3 shadow-xl">
          <h3 className="text-xs font-black uppercase text-purple-300 tracking-wider flex items-center gap-2">
            <BarChart3 className="size-4 text-purple-400" />
            <span>Volume de Interações por Canal</span>
          </h3>
          <div className="h-48 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={channelData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" horizontal={false} />
                <XAxis type="number" stroke="#71717a" tick={{ fontSize: 10 }} />
                <YAxis dataKey="name" type="category" stroke="#a1a1aa" tick={{ fontSize: 10 }} width={95} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#09090b", borderColor: "#3f3f46", borderRadius: "12px", fontSize: "12px" }}
                  formatter={(val: any) => [`${val} interações`, "Volume"]}
                />
                <Bar dataKey="count" fill="#a855f7" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* High Impact Strategic Insights (Tops Minerados) */}
        <div className="lg:col-span-2 bg-zinc-900/90 p-5 rounded-2xl border border-zinc-800 space-y-3 shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <h3 className="text-xs font-black uppercase text-lime-400 tracking-wider flex items-center gap-2">
              <Sparkles className="size-4 text-lime-400" />
              <span>Principais Insights Táticos Extraídos (Diretrizes de Negócio)</span>
            </h3>
            <span className="text-[10px] font-mono text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-full">
              Minerados do Omnichannel
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 overflow-y-auto max-h-52 pr-1">
            {filtered.length === 0 ? (
              <div className="col-span-2 p-6 text-center text-zinc-500 text-xs italic">
                Nenhum insight estratégico registrado no banco de dados até o momento.
              </div>
            ) : (
              filtered.slice(0, 4).map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedInteraction(item)}
                  className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 hover:border-purple-500/50 transition cursor-pointer space-y-1.5 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-purple-950 text-purple-300 border border-purple-800/40">
                      {item.sourceRole} • {item.channel.toUpperCase()}
                    </span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      item.sentiment === "positivo" ? "bg-lime-950 text-lime-400 border border-lime-800/40" :
                      item.sentiment === "critico" ? "bg-red-950 text-red-400 border border-red-800/40" :
                      "bg-zinc-800 text-zinc-300"
                    }`}>
                      {item.sentiment}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-white group-hover:text-purple-300 transition line-clamp-1">
                    {item.subject}
                  </p>
                  <p className="text-[11px] text-zinc-400 line-clamp-2 italic">
                    "{item.businessInsight}"
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Main Tabulated Interactions Table */}
      <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl space-y-4">
        <div className="p-4 border-b border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-zinc-950/50">
          <div>
            <h3 className="text-sm font-black text-white flex items-center gap-2">
              <FileText className="size-4 text-purple-400" />
              <span>Base Tabulada & Estruturada de Interações</span>
            </h3>
            <p className="text-xs text-zinc-400">
              {filtered.length} registro(s) encontrado(s) • Clique em qualquer linha para abrir a síntese do insight.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-400">
            <span className="inline-block size-2 rounded-full bg-lime-400 animate-ping" />
            <span>Sincronização em Tempo Real Ativa</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-zinc-950 text-zinc-400 uppercase tracking-wider text-[10px] font-extrabold border-b border-zinc-800">
                <th className="p-3">Data / Hora</th>
                <th className="p-3">Público / Origem</th>
                <th className="p-3">Canal</th>
                <th className="p-3">Assunto & Intenção</th>
                <th className="p-3">Sentimento</th>
                <th className="p-3">Insight Estratégico Derivado</th>
                <th className="p-3 text-right">Ação / Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 font-sans">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-zinc-500">
                    Nenhuma interação encontrada para os filtros selecionados.
                  </td>
                </tr>
              ) : (
                filtered.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => setSelectedInteraction(item)}
                    className="hover:bg-purple-950/20 transition cursor-pointer group"
                  >
                    <td className="p-3 text-zinc-400 font-mono text-[11px] whitespace-nowrap">
                      {new Date(item.timestamp).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" })}
                    </td>
                    <td className="p-3">
                      <div className="font-bold text-white group-hover:text-purple-300 transition">{item.sourceName}</div>
                      <div className="text-[10px] text-zinc-400">{item.sourceContact}</div>
                      <span className="inline-block mt-0.5 text-[9px] font-black uppercase px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-300">
                        {item.sourceRole}
                      </span>
                    </td>
                    <td className="p-3 whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1 font-bold text-[11px] px-2 py-0.5 rounded-full border ${
                        item.channel === "chat" ? "bg-indigo-950/80 text-indigo-300 border-indigo-700/50" :
                        item.channel === "email" ? "bg-sky-950/80 text-sky-300 border-sky-700/50" :
                        item.channel === "whatsapp" ? "bg-emerald-950/80 text-emerald-300 border-emerald-700/50" :
                        item.channel === "form" ? "bg-amber-950/80 text-amber-300 border-amber-700/50" :
                        "bg-pink-950/80 text-pink-300 border-pink-700/50"
                      }`}>
                        {item.channel === "chat" ? "💬 Chat AI" :
                         item.channel === "email" ? "✉️ E-mail" :
                         item.channel === "whatsapp" ? "📱 WhatsApp" :
                         item.channel === "form" ? "📑 Form" : "📋 Survey"}
                      </span>
                    </td>
                    <td className="p-3 max-w-xs">
                      <div className="font-bold text-white line-clamp-1">{item.subject}</div>
                      <div className="text-[11px] text-zinc-400 line-clamp-1 italic">"{item.content}"</div>
                    </td>
                    <td className="p-3 whitespace-nowrap">
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase border ${
                        item.sentiment === "positivo" ? "bg-lime-950/90 text-lime-400 border-lime-700/60" :
                        item.sentiment === "critico" ? "bg-red-950/90 text-red-400 border-red-700/60" :
                        "bg-zinc-800 text-zinc-300 border-zinc-700"
                      }`}>
                        {item.sentiment === "positivo" ? "🟢 Positivo" : item.sentiment === "critico" ? "🔴 Crítico" : "🟡 Neutro"}
                      </span>
                    </td>
                    <td className="p-3 max-w-md">
                      <div className="text-xs text-lime-300 font-semibold line-clamp-2 bg-zinc-950/60 p-1.5 rounded-lg border border-zinc-800">
                        🎯 {item.businessInsight}
                      </div>
                    </td>
                    <td className="p-3 text-right whitespace-nowrap">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-lg ${
                        item.status === "incorporado_ao_roadmap" ? "bg-purple-950 text-purple-300 border border-purple-700/50" :
                        item.status === "processado" ? "bg-emerald-950 text-emerald-300 border border-emerald-700/50" :
                        "bg-amber-950 text-amber-300 border border-amber-700/50"
                      }`}>
                        {item.status === "incorporado_ao_roadmap" ? "🚀 No Roadmap" : item.status === "processado" ? "✓ Processado" : "⏳ Em Análise"}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Popup com Detalhes da Interação & Insight */}
      {selectedInteraction && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-purple-500/40 rounded-3xl max-w-2xl w-full p-6 space-y-5 shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-start justify-between border-b border-zinc-800 pb-3">
              <div>
                <span className="text-[10px] font-black uppercase text-purple-400 bg-purple-400/10 px-2.5 py-1 rounded-full border border-purple-400/20">
                  {selectedInteraction.sourceRole} • {selectedInteraction.channel.toUpperCase()}
                </span>
                <h3 className="text-lg font-black text-white mt-1">{selectedInteraction.subject}</h3>
              </div>
              <button
                onClick={() => setSelectedInteraction(null)}
                className="text-zinc-400 hover:text-white bg-zinc-800 p-1.5 rounded-full transition cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3 bg-zinc-950 p-3 rounded-2xl border border-zinc-800">
                <div>
                  <span className="text-zinc-500 block font-bold">Origem / Contato:</span>
                  <span className="text-white font-bold">{selectedInteraction.sourceName}</span>
                  <span className="text-zinc-400 block text-[11px]">{selectedInteraction.sourceContact}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block font-bold">Data & Sentimento:</span>
                  <span className="text-white font-mono">{new Date(selectedInteraction.timestamp).toLocaleString("pt-BR")}</span>
                  <span className="text-lime-400 font-bold block uppercase">{selectedInteraction.sentiment}</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-zinc-400 font-bold uppercase text-[10px]">Conteúdo Transcrito da Interação:</span>
                <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 text-zinc-200 italic leading-relaxed">
                  "{selectedInteraction.content}"
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-lime-400 font-bold uppercase text-[10px] flex items-center gap-1">
                  <Sparkles className="size-3 text-lime-400" />
                  <span>Insight Estratégico de Negócio Derivado:</span>
                </span>
                <div className="bg-gradient-to-r from-purple-950/60 to-zinc-950 p-3.5 rounded-xl border border-purple-500/40 text-purple-200 font-bold leading-relaxed">
                  💡 {selectedInteraction.businessInsight}
                </div>
              </div>

              {selectedInteraction.tags && selectedInteraction.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedInteraction.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-zinc-800 pt-3">
              <span className="text-[10px] text-zinc-500 font-mono">ID: {selectedInteraction.id}</span>
              <button
                onClick={() => setSelectedInteraction(null)}
                className="bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs px-4 py-2 rounded-xl transition cursor-pointer"
              >
                Fechar Detalhes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
