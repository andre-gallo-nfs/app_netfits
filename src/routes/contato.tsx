import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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
  ShieldCheck
} from "lucide-react";
import netfitsDarkLogo from "@/assets/netfits-logo-dark.png";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato & Suporte — Netfits Tecnologia S.A." },
      {
        name: "description",
        content:
          "Entre em contato com a equipe Netfits para suporte ao usuário, parcerias comerciais, imprensa ou programa de associados.",
      },
      { property: "og:title", content: "Contato & Suporte — Netfits" },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "suporte", // suporte | parceiros | associados | imprensa | outros
    message: "",
  });

  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Mensagem).");
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newTicket = `NFS-TICKET-2026-${randomNum}`;

    setSubmittedTicket(newTicket);
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
      {/* Header Corporativo */}
      <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/home" className="flex items-center gap-2.5">
            <img
              src={netfitsDarkLogo}
              alt="Netfits"
              className="h-9 w-auto object-contain rounded-lg bg-zinc-900 p-1 border border-zinc-800"
            />
            <span className="font-extrabold tracking-tight text-xl text-white">
              Netfits <span className="text-xs font-bold text-indigo-400 font-mono">Contato</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-zinc-300">
            <Link to="/home" className="hover:text-white transition">Home</Link>
            <Link to="/admin" className="hover:text-purple-400 transition">Admin</Link>
            <Link to="/parceiros" className="hover:text-lime-400 transition">Parceiros</Link>
            <Link to="/associado" className="hover:text-amber-400 transition">Associados</Link>
            <Link to="/faq" className="hover:text-cyan-400 transition">FAQ</Link>
          </nav>

          <Link
            to="/download"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs px-4 py-2.5 rounded-full transition shadow-lg shadow-purple-600/30"
          >
            Abrir App →
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-6 bg-gradient-to-b from-indigo-950/40 via-zinc-950 to-zinc-950 border-b border-zinc-800/60">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full border border-indigo-400/20">
            Fale com a Nossa Equipe
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white">Contato & Atendimento Institucional</h1>
          <p className="text-sm text-zinc-400">Estamos à disposição para atender usuários, parceiros comerciais, imprensa e investidores.</p>
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
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">E-mail Corporativo</span>
                <p className="font-semibold text-white">suporte@netfits.com.br</p>
              </div>

              <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">WhatsApp Oficial</span>
                <p className="font-semibold text-white">(11) 99876-5432</p>
              </div>

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
            <p className="text-xs text-zinc-400 leading-relaxed">
              Netfits Tecnologia S.A.<br />
              Av. Brigadeiro Faria Lima, 3477 — Itaim Bibi<br />
              São Paulo / SP — Brasil
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          {submittedTicket ? (
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
              <div>
                <h2 className="text-xl font-extrabold text-white">Formulário de Atendimento</h2>
                <p className="text-xs text-zinc-400">Preencha o formulário abaixo e nossa equipe entrará em contato.</p>
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
