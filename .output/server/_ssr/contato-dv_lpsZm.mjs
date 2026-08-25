import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as trackSupportTicket, s as sharedSandboxStore } from "./router-IHnf7dwE.mjs";
import { I as InstitutionalWebHeader } from "./InstitutionalWebHeader-B3xulSH4.mjs";
import "../_libs/sonner.mjs";
import { a2 as Mail, k as MapPin, a0 as CircleCheck, e as Send } from "../_libs/lucide-react.mjs";

import "../_libs/unenv.mjs";




import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";

import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function ContatoPage() {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    subject: "suporte",
    // suporte | parceiros | associados | imprensa | outros
    message: ""
  });
  const [submittedTicket, setSubmittedTicket] = reactExports.useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Mensagem).");
      return;
    }
    const randomNum = Math.floor(1e3 + Math.random() * 9e3);
    const newTicket = `NFS-TICKET-2026-${randomNum}`;
    setSubmittedTicket(newTicket);
    trackSupportTicket(newTicket, formData.subject);
    sharedSandboxStore.createContactTicket({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "(11) 98888-0000",
      subject: formData.subject,
      category: formData.subject === "parceiros" ? "comercial" : formData.subject === "associados" ? "associado" : "suporte",
      message: formData.message
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "suporte",
      message: ""
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-zinc-950 text-white font-sans selection:bg-indigo-500 selection:text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(InstitutionalWebHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-6 bg-gradient-to-b from-indigo-950/40 via-zinc-950 to-zinc-950 border-b border-zinc-800/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-extrabold uppercase tracking-widest text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full border border-indigo-400/20", children: "Fale com a Nossa Equipe" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-5xl font-black text-white", children: "Contato & Atendimento Institucional" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-zinc-400", children: "Estamos à disposição para atender usuários, parceiros comerciais, imprensa e investidores." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-bold text-white flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-5 text-indigo-400" }),
            "Canais Oficiais"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-xs text-zinc-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-zinc-500 uppercase tracking-wider block", children: "E-mail Corporativo" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-white", children: "suporte@netfits.com.br" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-zinc-500 uppercase tracking-wider block", children: "WhatsApp Oficial" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-white", children: "(11) 99876-5432" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-zinc-500 uppercase tracking-wider block", children: "Horário de Atendimento" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-white", children: "Segunda a Sexta, das 09h às 18h" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-white flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4 text-purple-400" }),
            "Sede Corporativa"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-400 leading-relaxed", children: [
            "Netfits Tecnologia Ltda.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Av. Brigadeiro Faria Lima, 3477 — Itaim Bibi",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "São Paulo / SP — Brasil"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: submittedTicket ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-emerald-950 to-zinc-900 border border-emerald-500/40 rounded-3xl p-8 space-y-4 shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-8 text-emerald-400 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-emerald-400", children: "Mensagem Enviada!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-white", children: [
              "Protocolo: ",
              submittedTicket
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-300 leading-relaxed", children: "Sua mensagem foi registrada em nosso sistema de suporte. Um de nossos especialistas retornará no seu e-mail em até **24 horas úteis**." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSubmittedTicket(null), className: "px-5 py-2.5 rounded-xl bg-emerald-500 text-zinc-950 font-bold text-xs hover:bg-emerald-400 transition", children: "+ Enviar outra mensagem" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-extrabold text-white", children: "Formulário de Atendimento" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "Preencha o formulário abaixo e nossa equipe entrará em contato." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-zinc-300 mb-1", children: "Assunto da Mensagem *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: formData.subject, onChange: (e) => setFormData({
              ...formData,
              subject: e.target.value
            }), className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "suporte", children: "Suporte ao Usuário / Dúvidas sobre Pontos nfs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "parceiros", children: "Comercial & Credenciamento de Parceiros B2B" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "associados", children: "Programa de Associados & Criadores" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "imprensa", children: "Imprensa & Relações Públicas" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "outros", children: "Outros Assuntos" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-zinc-300 mb-1", children: "Seu Nome Completo *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "Ex: Gabriel Souza", value: formData.name, onChange: (e) => setFormData({
                ...formData,
                name: e.target.value
              }), className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-zinc-300 mb-1", children: "Seu E-mail *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, placeholder: "seu.email@exemplo.com", value: formData.email, onChange: (e) => setFormData({
                ...formData,
                email: e.target.value
              }), className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-zinc-300 mb-1", children: "WhatsApp / Telefone para Contato" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", placeholder: "(11) 99999-8888", value: formData.phone, onChange: (e) => setFormData({
              ...formData,
              phone: e.target.value
            }), className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-zinc-300 mb-1", children: "Sua Mensagem *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, required: true, placeholder: "Descreva detalhadamente sua dúvida, sugestão ou solicitação...", value: formData.message, onChange: (e) => setFormData({
              ...formData,
              message: e.target.value
            }), className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all duration-200 active:scale-[0.98]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-4" }),
          "Enviar Mensagem de Contato"
        ] })
      ] }) })
    ] })
  ] });
}
export {
  ContatoPage as component
};
