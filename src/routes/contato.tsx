import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Building2, 
  Users, 
  HelpCircle, 
  Clock, 
  ShieldCheck,
  Star,
  ThumbsUp,
  Heart,
  ArrowRight,
  ShoppingBag,
  Sparkles
} from "lucide-react";
import { toast } from "sonner";
import { trackSupportTicket } from "@/lib/analytics";
import { InstitutionalWebHeader } from "@/components/InstitutionalWebHeader";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { authStore } from "@/lib/auth-store";

export interface ContatoSearchParams {
  nps?: string | number;
  source?: string;
  pedido?: string;
}

export const Route = createFileRoute("/contato")({
  validateSearch: (search: Record<string, unknown>): ContatoSearchParams => ({
    nps: typeof search.nps === "string" || typeof search.nps === "number" ? String(search.nps) : undefined,
    source: typeof search.source === "string" ? String(search.source) : undefined,
    pedido: typeof search.pedido === "string" ? String(search.pedido) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contato & Avaliação — Netfits Ltda." },
      {
        name: "description",
        content:
          "Entre em contato com a equipe Netfits para suporte ao usuário, parcerias comerciais, imprensa ou avaliação de pedidos.",
      },
      { property: "og:title", content: "Contato & Avaliação — Netfits" },
    ],
    links: [
      { rel: "canonical", href: "https://www.netfits.com.br/contato" },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const search = Route.useSearch();

  // 1. Extração segura da nota NPS e pedido (via TanStack Router e fallback de URL)
  const [npsScore] = useState<number | null>(() => {
    if (search?.nps !== undefined && search?.nps !== "") {
      const parsed = parseInt(String(search.nps), 10);
      if (!isNaN(parsed) && parsed >= 0 && parsed <= 10) return parsed;
    }
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const val = urlParams.get("nps");
      if (val !== null) {
        const parsed = parseInt(val, 10);
        if (!isNaN(parsed) && parsed >= 0 && parsed <= 10) return parsed;
      }
    }
    return null;
  });

  const [orderRef] = useState<string | null>(() => {
    if (search?.pedido) return String(search.pedido);
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get("pedido") || null;
    }
    return null;
  });

  // Estados do fluxo de NPS
  const [npsRecorded, setNpsRecorded] = useState(false);
  const [npsComment, setNpsComment] = useState("");
  const [npsCommentSent, setNpsCommentSent] = useState(false);
  const [showSupportFallback, setShowSupportFallback] = useState(false);

  // Estados do formulário de atendimento padrão
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "suporte",
    message: "",
  });

  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [cooldownSeconds, setCooldownSeconds] = useState<number>(0);

  // 2. Registro automático da avaliação de NPS no CRM / Sandbox ao carregar a página
  useEffect(() => {
    if (npsScore !== null && !npsRecorded) {
      setNpsRecorded(true);
      const currentUser = authStore.getCurrentUser();
      const userName = currentUser?.fullName || "Cliente Netfits";
      const userContact = currentUser?.email || "";

      sharedSandboxStore.addInteraction({
        sourceRole: "atleta",
        sourceName: userName,
        sourceContact: userContact,
        channel: "survey",
        subject: `Avaliação NPS Shop: Nota ${npsScore}/10${orderRef ? ` (Pedido #${orderRef})` : ""}`,
        intent: "pesquisa_nps",
        content: `Avaliação de compra via e-mail registrada automaticamente. Nota: ${npsScore}/10. Pedido: ${orderRef || "N/A"}.`,
        sentiment: npsScore >= 9 ? "positivo" : npsScore >= 7 ? "neutro" : "critico",
        businessInsight: `Pesquisa NPS pós-entrega Netfits Shop. Nota ${npsScore}/10 gravada no sistema.`,
        status: "processado",
        tags: ["NPS", `Nota-${npsScore}`, "Email Survey", ...(orderRef ? [`Pedido-${orderRef}`] : ["Shop"])],
      });

      trackSupportTicket(`NPS-${npsScore}-${orderRef || "shop"}`, "pesquisa_nps");
    }
  }, [npsScore, orderRef, npsRecorded]);

  // Envio de comentário adicional de NPS
  const handleNpsCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!npsComment.trim()) return;

    const currentUser = authStore.getCurrentUser();
    const userName = currentUser?.fullName || "Cliente Netfits";
    const userContact = currentUser?.email || "";

    sharedSandboxStore.addInteraction({
      sourceRole: "atleta",
      sourceName: userName,
      sourceContact: userContact,
      channel: "survey",
      subject: `Comentário NPS Pedido #${orderRef || "Shop"} (Nota ${npsScore})`,
      intent: npsScore !== null && npsScore >= 9 ? "elogio" : npsScore !== null && npsScore <= 6 ? "reclamacao" : "sugestao",
      content: npsComment.trim(),
      sentiment: npsScore !== null && npsScore >= 9 ? "positivo" : npsScore !== null && npsScore >= 7 ? "neutro" : "critico",
      businessInsight: `Comentário detalhado de cliente pós-avaliação NPS: "${npsComment.trim()}"`,
      status: "em_analise",
      tags: ["NPS Comentário", `Nota-${npsScore}`, ...(orderRef ? [`Pedido-${orderRef}`] : ["Shop"])],
    });

    setNpsCommentSent(true);
    toast.success("Comentário registrado com sucesso!");
  };

  useEffect(() => {
    if (cooldownSeconds > 0) {
      const timer = setTimeout(() => setCooldownSeconds((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldownSeconds]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cooldownSeconds > 0) {
      alert(`Por favor, aguarde ${cooldownSeconds} segundos antes de enviar uma nova mensagem.`);
      return;
    }
    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Mensagem).");
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newTicket = `NFS-TICKET-2026-${randomNum}`;

    setSubmittedTicket(newTicket);
    setCooldownSeconds(30);
    trackSupportTicket(newTicket, formData.subject);

    // Sincronizar com o Banco Provisório Compartilhado
    sharedSandboxStore.createContactTicket({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "(11) 98888-0000",
      subject: formData.subject,
      category: formData.subject === "parceiros" ? "comercial" : formData.subject === "associados" ? "associado" : "suporte",
      message: formData.message,
    });

    sharedSandboxStore.addInteraction({
      sourceRole: formData.subject === "associados" ? "associado" : formData.subject === "parceiros" ? "parceiro" : "atleta",
      sourceName: formData.name,
      sourceContact: formData.email,
      channel: "form",
      subject: `Fale Conosco — ${formData.subject.toUpperCase()}`,
      intent: formData.subject === "parceiros" ? "parceria" : formData.subject === "associados" ? "negociacao" : "duvida",
      content: formData.message,
      sentiment: "neutro",
      businessInsight: `Atendimento gerado pelo formulário público do site sobre ${formData.subject}. Protocolo: ${newTicket}.`,
      status: "em_analise",
      tags: ["Contato Site", formData.subject, "Formulário Público"],
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "suporte",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-indigo-500 selection:text-white">
      {/* 1. Header Web Corporativo Unificado */}
      <InstitutionalWebHeader />

      {/* Hero Section */}
      <section className="py-12 px-6 bg-gradient-to-b from-indigo-950/40 via-zinc-950 to-zinc-950 border-b border-zinc-800/60">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          {npsScore !== null ? (
            <>
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-lime-400 bg-lime-400/10 px-4 py-1.5 rounded-full border border-lime-400/30">
                <Star className="size-3.5 fill-lime-400" />
                Pesquisa de Satisfação &bull; Netfits Shop
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-white">Avaliação Registrada com Sucesso!</h1>
              <p className="text-sm text-zinc-400">
                Sua nota é o combustível para aperfeiçoarmos continuamente nossos produtos, curadoria e logística.
              </p>
            </>
          ) : (
            <>
              <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full border border-indigo-400/20">
                Fale com a Nossa Equipe
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-white">Contato & Atendimento Institucional</h1>
              <p className="text-sm text-zinc-400">Estamos à disposição para atender usuários, parceiros comerciais, imprensa e investidores.</p>
            </>
          )}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info Sidebar */}
        <div className="space-y-6">
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Mail className="size-5 text-indigo-400" />
              Canais Oficiais
            </h3>

            <div className="space-y-3 text-xs text-zinc-300">
              <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">E-mail Corporativo & Suporte</span>
                <p className="font-semibold text-white">contato@netfits.com.br</p>
              </div>

              <a
                href="https://wa.me/5511934981311"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-lime-500/50 transition-all block space-y-1 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block group-hover:text-lime-400 transition-colors">WhatsApp Oficial</span>
                  <span className="text-[9px] font-bold text-lime-400 bg-lime-950/60 px-2 py-0.5 rounded-full border border-lime-500/30">Chamar no WhatsApp →</span>
                </div>
                <p className="font-semibold text-white">+55 (11) 93498-1311</p>
              </a>

              <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">Horário de Atendimento</span>
                <p className="font-semibold text-white">Segunda a Sexta, das 09h às 18h</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <MapPin className="size-4 text-purple-400" />
              Sede Corporativa
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              <strong className="text-white">Netfits Ltda.</strong><br />
              <span className="font-mono text-purple-300 text-[11px]">CNPJ: 68.930.455/0001-40</span><br />
              Alameda das Embaúbas, 365, Quadra 06 Lote 19 sala 01<br />
              Alphaville — Santana de Parnaíba / SP<br />
              CEP: 06.542-195
            </p>
          </div>
        </div>

        {/* Main Content Area: NPS Card ou Formulário de Suporte */}
        <div className="md:col-span-2 space-y-8">
          {npsScore !== null && !showSupportFallback ? (
            /* Card Dedicado de Avaliação NPS */
            <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-purple-950/30 border border-zinc-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative overflow-hidden">
              {/* Luz sutil de destaque no fundo */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header do Card de Avaliação */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-2xl bg-lime-400/10 border border-lime-400/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="size-6 text-lime-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-lime-400 uppercase tracking-widest flex items-center gap-1">
                      <Sparkles className="size-3" />
                      Avaliação Confirmada
                    </span>
                    <h2 className="text-xl font-black text-white">Obrigado pelo seu retorno!</h2>
                  </div>
                </div>

                {/* Badge da Nota */}
                <div className="flex items-center gap-2 self-start sm:self-auto bg-zinc-950/80 border border-zinc-800 rounded-2xl px-4 py-2">
                  <span className="text-xs text-zinc-400 font-semibold">Sua nota:</span>
                  <div className={`text-2xl font-black ${npsScore >= 9 ? "text-lime-400" : npsScore >= 7 ? "text-amber-400" : "text-orange-400"}`}>
                    {npsScore}
                  </div>
                  <span className="text-xs text-zinc-500">/ 10</span>
                </div>
              </div>

              {/* Mensagem Personalizada de Acordo com a Faixa NPS */}
              <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-5 space-y-2">
                <div className="flex items-center gap-2">
                  {npsScore >= 9 ? (
                    <>
                      <ThumbsUp className="size-4 text-lime-400" />
                      <span className="text-xs font-bold text-lime-400 uppercase tracking-wider">Experiência Excelente &bull; Promotor Netfits</span>
                    </>
                  ) : npsScore >= 7 ? (
                    <>
                      <Star className="size-4 text-amber-400" />
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Boa Experiência &bull; Foco em Melhoria</span>
                    </>
                  ) : (
                    <>
                      <Heart className="size-4 text-orange-400" />
                      <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">Atenção Prioritária &bull; Ouvidoria Ativa</span>
                    </>
                  )}
                </div>

                <p className="text-sm text-zinc-200 leading-relaxed">
                  {npsScore >= 9
                    ? "Ficamos muito felizes em saber que sua experiência de compra e entrega foi nota 10! A sua confiança nos impulsiona a manter o mais alto padrão de qualidade em cada parceiro credenciado e produto do nosso catálogo."
                    : npsScore >= 7
                    ? "Agradecemos pela sua nota! Estamos trabalhando continuamente para tornar sua experiência cada vez mais fluida e vantajosa."
                    : "Sentimos muito que algo não tenha correspondido integralmente à sua expectativa. Nossa equipe de operações analisará o ocorrido para corrigir qualquer gargalo."}
                </p>

                {orderRef && (
                  <div className="pt-2 flex items-center gap-2 text-xs text-zinc-400">
                    <ShoppingBag className="size-3.5 text-zinc-500" />
                    <span>Pedido vinculado: <strong className="text-white font-mono">#{orderRef}</strong></span>
                  </div>
                )}
              </div>

              {/* Formulário de Comentário Opcional */}
              {!npsCommentSent ? (
                <form onSubmit={handleNpsCommentSubmit} className="space-y-3 pt-2">
                  <label className="block text-xs font-bold text-zinc-300">
                    Deseja deixar algum elogio ou comentário adicional? <span className="text-zinc-500 font-normal">(Opcional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Conte o que você mais gostou ou sugestões para nossas próximas entregas..."
                    value={npsComment}
                    onChange={(e) => setNpsComment(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-lime-500 transition-colors"
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={!npsComment.trim()}
                      className="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 disabled:opacity-40 disabled:cursor-not-allowed text-zinc-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-lime-500/20"
                    >
                      <Send className="size-3.5" />
                      Enviar Comentário
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-4 rounded-2xl bg-lime-950/40 border border-lime-500/30 text-xs text-lime-300 flex items-center gap-2">
                  <CheckCircle2 className="size-4 shrink-0 text-lime-400" />
                  <span>Comentário registrado com sucesso! Nossa diretoria agradece seu feedback.</span>
                </div>
              )}

              {/* Botões de Ação Rápida */}
              <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/feed"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 transition-all"
                >
                  Ir para o Feed de Treinos &amp; Saúde
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  to="/market"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <ShoppingBag className="size-3.5" />
                  Ver Mais Produtos no Shop
                </Link>
              </div>

              {/* Link para Suporte caso precise */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setShowSupportFallback(true)}
                  className="text-[11px] text-zinc-500 hover:text-zinc-300 underline transition cursor-pointer"
                >
                  Precisa de suporte ou tem alguma dúvida operacional? Clique aqui para abrir um chamado.
                </button>
              </div>
            </div>
          ) : submittedTicket ? (
            <div className="bg-gradient-to-r from-emerald-950 to-zinc-900 border border-emerald-500/40 rounded-3xl p-8 space-y-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="size-8 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Mensagem Enviada!</span>
                  <h3 className="text-xl font-bold text-white">Protocolo: {submittedTicket}</h3>
                </div>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Sua mensagem foi registrada em nosso sistema de suporte. Um de nossos especialistas retornará no seu e-mail em até **24 horas úteis**.
              </p>
              <button
                onClick={() => setSubmittedTicket(null)}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 text-zinc-950 font-bold text-xs hover:bg-emerald-400 transition"
              >
                + Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-extrabold text-white">Formulário de Atendimento</h2>
                  <p className="text-xs text-zinc-400">Preencha o formulário abaixo e nossa equipe entrará em contato.</p>
                </div>
                {npsScore !== null && showSupportFallback && (
                  <button
                    type="button"
                    onClick={() => setShowSupportFallback(false)}
                    className="text-xs text-lime-400 hover:underline"
                  >
                    &larr; Voltar para minha avaliação
                  </button>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    Assunto da Mensagem *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="suporte">Suporte ao Usuário / Dúvidas sobre Pontos nfs</option>
                    <option value="parceiros">Comercial & Credenciamento de Parceiros B2B</option>
                    <option value="associados">Programa de Associados & Criadores</option>
                    <option value="imprensa">Imprensa & Relações Públicas</option>
                    <option value="outros">Outros Assuntos</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Gabriel Souza"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1">
                      Seu E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seu.email@exemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    WhatsApp / Telefone para Contato
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-8888"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    Sua Mensagem *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Descreva detalhadamente sua dúvida, sugestão ou solicitação..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all duration-200 active:scale-[0.98]"
              >
                <Send className="size-4" />
                Enviar Mensagem de Contato
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
