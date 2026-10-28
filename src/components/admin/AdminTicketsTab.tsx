import { useState, useMemo } from "react";
import {
  MessageSquare,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
  Mail,
  Phone,
  Send,
  ExternalLink,
  Trash2,
  Download,
  Plus,
  User,
  Tag,
  Calendar,
  Sparkles,
  ChevronRight,
  X,
  FileText
} from "lucide-react";
import { toast } from "sonner";
import { sharedSandboxStore, type SandboxTicket } from "@/lib/shared-sandbox-store";
import { KpiCard } from "./admin-ui";

interface AdminTicketsTabProps {
  shortLabel?: string;
}

export function AdminTicketsTab({ shortLabel = "Tempo Real" }: AdminTicketsTabProps) {
  // State
  const [tickets, setTickets] = useState<SandboxTicket[]>(() => sharedSandboxStore.getTickets());
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [selectedTicket, setSelectedTicket] = useState<SandboxTicket | null>(null);
  const [replyNoteInput, setReplyNoteInput] = useState("");
  const [isNewTicketModalOpen, setIsNewTicketModalOpen] = useState(false);

  // New ticket form state
  const [newTicketForm, setNewTicketForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "suporte" as "suporte" | "comercial" | "associado" | "duvida",
    message: "",
  });

  const refreshTickets = () => {
    setTickets([...sharedSandboxStore.getTickets()]);
  };

  // Filtered tickets
  const filteredTickets = useMemo(() => {
    return tickets.filter((t) => {
      if (statusFilter !== "all" && t.status !== statusFilter) return false;
      if (categoryFilter !== "all" && t.category !== categoryFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match =
          t.ticketNumber.toLowerCase().includes(q) ||
          t.name.toLowerCase().includes(q) ||
          t.email.toLowerCase().includes(q) ||
          t.phone.toLowerCase().includes(q) ||
          t.subject.toLowerCase().includes(q) ||
          t.message.toLowerCase().includes(q) ||
          (t.replyNote && t.replyNote.toLowerCase().includes(q));
        if (!match) return false;
      }
      return true;
    });
  }, [tickets, statusFilter, categoryFilter, searchQuery]);

  // Metrics
  const totalCount = tickets.length;
  const openCount = tickets.filter((t) => t.status === "aberto").length;
  const inProgressCount = tickets.filter((t) => t.status === "em_andamento").length;
  const resolvedCount = tickets.filter((t) => t.status === "resolvido").length;
  const resolutionRate = totalCount > 0 ? ((resolvedCount / totalCount) * 100).toFixed(0) : "100";

  // Actions
  const handleStatusChange = (
    ticketId: string,
    newStatus: "aberto" | "em_andamento" | "resolvido",
    note?: string
  ) => {
    sharedSandboxStore.updateTicketStatus(ticketId, newStatus, note);
    refreshTickets();
    if (selectedTicket && selectedTicket.id === ticketId) {
      setSelectedTicket((prev) => (prev ? { ...prev, status: newStatus, replyNote: note || prev.replyNote } : null));
    }
  };

  const handleDeleteTicket = (ticketId: string) => {
    if (confirm("Deseja realmente remover este chamado do sistema?")) {
      sharedSandboxStore.deleteTicket(ticketId);
      refreshTickets();
      if (selectedTicket && selectedTicket.id === ticketId) {
        setSelectedTicket(null);
      }
    }
  };

  const handleCreateManualTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTicketForm.name || !newTicketForm.email || !newTicketForm.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    sharedSandboxStore.createContactTicket(newTicketForm);
    refreshTickets();
    setIsNewTicketModalOpen(false);
    setNewTicketForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      category: "suporte",
      message: "",
    });
    toast.success("Novo chamado registrado com sucesso na Central!");
  };

  const exportTicketsJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(tickets, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `chamados_sac_netfits_${new Date().toISOString().split("T")[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    toast.success("Arquivo de chamados exportado em JSON com sucesso!");
  };

  // Helper formatting phone to whatsapp
  const getWhatsAppLink = (phoneStr: string, name: string, ticketNum: string) => {
    const cleanDigits = phoneStr.replace(/\D/g, "");
    const number = cleanDigits.startsWith("55") ? cleanDigits : `55${cleanDigits}`;
    const text = encodeURIComponent(
      `Olá ${name}! Aqui é da equipe de atendimento e relacionamento Netfits. Estamos entrando em contato referente à sua solicitação protocolo ${ticketNum}.`
    );
    return `https://wa.me/${number}?text=${text}`;
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950/80 via-zinc-900 to-cyan-950/80 p-6 rounded-3xl border border-emerald-500/30 space-y-3 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                Atendimento & Relacionamento Oficial
              </span>
              <span className="text-xs font-mono text-lime-400 bg-lime-400/10 px-2.5 py-0.5 rounded-full border border-lime-400/20">
                Fila de SAC & B2B Ativa
              </span>
            </div>
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <span>💬 Central de Chamados, SAC & Contatos de Parceiros</span>
            </h2>
            <p className="text-xs text-zinc-300 max-w-3xl">
              Gerencie todas as mensagens e solicitações enviadas através do portal institucional, formulários de credenciamento e aplicativo. Responda diretamente via WhatsApp, e-mail e registre notas de resolução para o histórico de governança.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setIsNewTicketModalOpen(true)}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl border border-emerald-400/30 flex items-center gap-2 transition shadow-lg cursor-pointer"
            >
              <Plus className="size-4" />
              <span>Registrar Chamado</span>
            </button>
            <button
              onClick={exportTicketsJSON}
              className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-extrabold text-xs px-4 py-2.5 rounded-xl border border-zinc-700 flex items-center gap-2 transition shadow cursor-pointer"
            >
              <Download className="size-4" />
              <span>Exportar JSON</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title="Total de Chamados"
          value={totalCount.toString()}
          change={`${totalCount} registrados`}
          positive={true}
          icon={MessageSquare}
          subtext="Protocolos gerados no SAC"
          periodBadge={shortLabel}
        />
        <KpiCard
          title="Chamados em Aberto"
          value={openCount.toString()}
          change={openCount > 0 ? "Ação imediata necessária" : "Fila zerada"}
          positive={openCount === 0}
          icon={AlertCircle}
          subtext="Aguardando primeira triagem"
          highlightColor={openCount > 0 ? "border-amber-500/50 bg-amber-950/20" : ""}
          periodBadge={shortLabel}
        />
        <KpiCard
          title="Em Atendimento"
          value={inProgressCount.toString()}
          change="Em negociação / suporte"
          positive={true}
          icon={Clock}
          subtext="Com tratativa em andamento"
          periodBadge={shortLabel}
        />
        <KpiCard
          title="Taxa de Resolução"
          value={`${resolutionRate}%`}
          change={`${resolvedCount} resolvidos`}
          positive={true}
          icon={CheckCircle2}
          subtext="Eficiência no atendimento"
          periodBadge={shortLabel}
        />
      </div>

      {/* Filtros e Busca */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="relative w-full md:w-96">
          <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por protocolo, nome, e-mail ou assunto..."
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto flex-wrap">
          {/* Status Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-zinc-400">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              <option value="all">Todos os Status</option>
              <option value="aberto">🔴 Abertos</option>
              <option value="em_andamento">🟡 Em Andamento</option>
              <option value="resolvido">🟢 Resolvidos</option>
            </select>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-zinc-400">Categoria:</span>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              <option value="all">Todas as Categorias</option>
              <option value="suporte">Atleta / Suporte</option>
              <option value="comercial">Comercial / Lojista</option>
              <option value="associado">Associado (10%)</option>
              <option value="duvida">Dúvidas Gerais</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid de Chamados e Painel de Detalhes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Lista de Chamados */}
        <div className={`${selectedTicket ? "lg:col-span-7" : "lg:col-span-12"} space-y-3`}>
          {filteredTickets.length === 0 ? (
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center space-y-3">
              <MessageSquare className="size-10 text-zinc-600 mx-auto" />
              <h3 className="text-base font-bold text-zinc-300">Nenhum chamado encontrado</h3>
              <p className="text-xs text-zinc-500 max-w-md mx-auto">
                Não há mensagens que correspondam aos filtros selecionados. Novos chamados enviados na página pública de Contato aparecerão automaticamente aqui.
              </p>
            </div>
          ) : (
            filteredTickets.map((t) => {
              const isSelected = selectedTicket?.id === t.id;
              const statusColor =
                t.status === "aberto"
                  ? "bg-rose-500/10 text-rose-400 border-rose-500/30"
                  : t.status === "em_andamento"
                  ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                  : "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";

              const categoryLabel =
                t.category === "suporte"
                  ? "Suporte Atleta"
                  : t.category === "comercial"
                  ? "Comercial / Shop"
                  : t.category === "associado"
                  ? "Programa Associado"
                  : "Dúvida Geral";

              return (
                <div
                  key={t.id}
                  onClick={() => {
                    setSelectedTicket(t);
                    setReplyNoteInput(t.replyNote || "");
                  }}
                  className={`bg-zinc-900 border rounded-2xl p-4 transition cursor-pointer hover:border-emerald-500/50 ${
                    isSelected ? "border-emerald-500 shadow-lg shadow-emerald-500/10 bg-zinc-900/90" : "border-zinc-800"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-xs font-black text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                          {t.ticketNumber}
                        </span>
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${statusColor}`}>
                          {t.status.replace("_", " ")}
                        </span>
                        <span className="text-[10px] font-semibold text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700">
                          {categoryLabel}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white hover:text-emerald-400 transition">
                        {t.subject}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-zinc-400 flex-wrap">
                        <span className="flex items-center gap-1 font-medium text-zinc-300">
                          <User className="size-3 text-zinc-500" /> {t.name}
                        </span>
                        <span className="flex items-center gap-1 text-zinc-500">
                          <Mail className="size-3" /> {t.email}
                        </span>
                        <span className="flex items-center gap-1 text-zinc-500">
                          <Phone className="size-3" /> {t.phone}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[10px] text-zinc-500 flex items-center gap-1">
                        <Calendar className="size-3" />
                        {new Date(t.createdAt).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>

                  <p className="mt-2.5 text-xs text-zinc-400 line-clamp-2 leading-relaxed bg-zinc-950/40 p-2 rounded-lg border border-zinc-800/60">
                    {t.message}
                  </p>

                  {t.replyNote && (
                    <div className="mt-2 text-[11px] text-emerald-300/90 bg-emerald-950/20 border border-emerald-500/20 p-2 rounded-lg flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate"><strong>Tratativa:</strong> {t.replyNote}</span>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Detalhes do Chamado Selecionado */}
        {selectedTicket && (
          <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 space-y-5 shadow-2xl relative">
            <div className="flex items-start justify-between gap-3 border-b border-zinc-800 pb-4">
              <div className="space-y-1">
                <span className="font-mono text-xs font-black text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded border border-emerald-400/20">
                  {selectedTicket.ticketNumber}
                </span>
                <h3 className="text-lg font-black text-white leading-snug">
                  {selectedTicket.subject}
                </h3>
              </div>
              <button
                onClick={() => setSelectedTicket(null)}
                className="text-zinc-500 hover:text-zinc-300 p-1 rounded-lg hover:bg-zinc-800 transition cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Informações do Solicitante */}
            <div className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-4 space-y-2.5 text-xs">
              <span className="text-[10px] font-black uppercase text-zinc-500 tracking-wider">Dados do Solicitante</span>
              <div className="flex justify-between py-1 border-b border-zinc-800/60">
                <span className="text-zinc-400 font-medium">Nome Completo:</span>
                <span className="text-white font-bold">{selectedTicket.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-800/60">
                <span className="text-zinc-400 font-medium">E-mail:</span>
                <a href={`mailto:${selectedTicket.email}`} className="text-cyan-400 hover:underline flex items-center gap-1">
                  {selectedTicket.email} <ExternalLink className="size-3" />
                </a>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-800/60">
                <span className="text-zinc-400 font-medium">Telefone / WhatsApp:</span>
                <span className="text-zinc-200 font-mono">{selectedTicket.phone}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-400 font-medium">Data de Abertura:</span>
                <span className="text-zinc-400">
                  {new Date(selectedTicket.createdAt).toLocaleString("pt-BR")}
                </span>
              </div>
            </div>

            {/* Mensagem Completa */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-black uppercase text-zinc-500 tracking-wider">Mensagem da Solicitação</span>
              <div className="bg-zinc-950 border border-zinc-800 p-3.5 rounded-2xl text-xs text-zinc-200 leading-relaxed max-h-48 overflow-y-auto">
                {selectedTicket.message}
              </div>
            </div>

            {/* Ações Imediatas de Contato */}
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase text-zinc-500 tracking-wider">Canais de Contato Direto</span>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={getWhatsAppLink(selectedTicket.phone, selectedTicket.name, selectedTicket.ticketNumber)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition shadow"
                >
                  <Send className="size-3.5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`mailto:${selectedTicket.email}?subject=Atendimento Netfits — Protocolo ${selectedTicket.ticketNumber}`}
                  className="bg-zinc-800 hover:bg-zinc-700 text-cyan-300 font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition border border-zinc-700 shadow"
                >
                  <Mail className="size-3.5" />
                  <span>E-mail</span>
                </a>
              </div>
            </div>

            {/* Gestão do Status e Resolução */}
            <div className="space-y-2 border-t border-zinc-800 pt-4">
              <span className="text-[10px] font-black uppercase text-zinc-500 tracking-wider">Atualizar Status & Nota Interna</span>
              
              <textarea
                value={replyNoteInput}
                onChange={(e) => setReplyNoteInput(e.target.value)}
                placeholder="Insira notas de tratativa ou parecer interno (ex: enviado contrato de parceria)..."
                rows={2}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition"
              />

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => handleStatusChange(selectedTicket.id, "em_andamento", replyNoteInput)}
                  className={`text-xs font-bold px-3 py-2 rounded-xl border transition cursor-pointer ${
                    selectedTicket.status === "em_andamento"
                      ? "bg-amber-500 text-black border-amber-400"
                      : "bg-zinc-800 text-amber-300 border-zinc-700 hover:bg-zinc-700"
                  }`}
                >
                  Em Andamento
                </button>
                <button
                  onClick={() => handleStatusChange(selectedTicket.id, "resolvido", replyNoteInput)}
                  className={`text-xs font-bold px-3 py-2 rounded-xl border transition cursor-pointer ${
                    selectedTicket.status === "resolvido"
                      ? "bg-emerald-500 text-black border-emerald-400"
                      : "bg-zinc-800 text-emerald-300 border-zinc-700 hover:bg-zinc-700"
                  }`}
                >
                  Marcar como Resolvido
                </button>
                <button
                  onClick={() => handleStatusChange(selectedTicket.id, "aberto", replyNoteInput)}
                  className={`text-xs font-bold px-3 py-2 rounded-xl border transition cursor-pointer ${
                    selectedTicket.status === "aberto"
                      ? "bg-rose-500 text-white border-rose-400"
                      : "bg-zinc-800 text-zinc-400 border-zinc-700 hover:bg-zinc-700"
                  }`}
                >
                  Reabrir
                </button>
                <button
                  onClick={() => handleDeleteTicket(selectedTicket.id)}
                  title="Excluir chamado"
                  className="ml-auto text-zinc-500 hover:text-rose-400 p-2 rounded-xl hover:bg-rose-950/20 transition cursor-pointer"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal: Novo Chamado Manual */}
      {isNewTicketModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <h3 className="text-base font-black text-white flex items-center gap-2">
                <Plus className="size-5 text-emerald-400" />
                <span>Registrar Novo Chamado Manual</span>
              </h3>
              <button
                onClick={() => setIsNewTicketModalOpen(false)}
                className="text-zinc-500 hover:text-zinc-300 p-1 rounded-lg"
              >
                <X className="size-5" />
              </button>
            </div>

            <form onSubmit={handleCreateManualTicket} className="space-y-3 text-xs">
              <div>
                <label className="block text-zinc-400 font-bold mb-1">Nome do Solicitante *</label>
                <input
                  type="text"
                  required
                  value={newTicketForm.name}
                  onChange={(e) => setNewTicketForm({ ...newTicketForm, name: e.target.value })}
                  placeholder="Nome do atleta, lojista ou treinador..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-400 font-bold mb-1">E-mail *</label>
                  <input
                    type="email"
                    required
                    value={newTicketForm.email}
                    onChange={(e) => setNewTicketForm({ ...newTicketForm, email: e.target.value })}
                    placeholder="contato@exemplo.com.br"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 font-bold mb-1">Telefone / WhatsApp</label>
                  <input
                    type="text"
                    value={newTicketForm.phone}
                    onChange={(e) => setNewTicketForm({ ...newTicketForm, phone: e.target.value })}
                    placeholder="(11) 98888-0000"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-400 font-bold mb-1">Categoria *</label>
                  <select
                    value={newTicketForm.category}
                    onChange={(e) => setNewTicketForm({ ...newTicketForm, category: e.target.value as any })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="suporte">Atleta / Suporte</option>
                    <option value="comercial">Comercial / Lojista</option>
                    <option value="associado">Associado (10%)</option>
                    <option value="duvida">Dúvida Geral</option>
                  </select>
                </div>
                <div>
                  <label className="block text-zinc-400 font-bold mb-1">Assunto *</label>
                  <input
                    type="text"
                    required
                    value={newTicketForm.subject}
                    onChange={(e) => setNewTicketForm({ ...newTicketForm, subject: e.target.value })}
                    placeholder="Ex: Parceria com assessoria"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 font-bold mb-1">Mensagem / Demanda *</label>
                <textarea
                  required
                  rows={3}
                  value={newTicketForm.message}
                  onChange={(e) => setNewTicketForm({ ...newTicketForm, message: e.target.value })}
                  placeholder="Descreva a dúvida, demanda comercial ou solicitação recebida..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setIsNewTicketModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 font-bold hover:bg-zinc-700 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-500 transition shadow"
                >
                  Criar Chamado
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
