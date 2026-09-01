import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { I as InstitutionalWebHeader } from "./InstitutionalWebHeader-D_kuA_GT.mjs";
import "../_libs/sonner.mjs";
import { a6 as Search, al as Scale, n as FileText, am as BookOpen, y as Download, j as ShieldCheck, s as Cpu, an as CircleQuestionMark, ao as ChevronUp, C as ChevronDown, a3 as Mail } from "../_libs/lucide-react.mjs";

import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";




import "../_libs/seroval-plugins.mjs";

import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "./router-BOoqb8oj.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const FAQ_ITEMS = [{
  id: "faq_1",
  category: "pontos",
  categoryLabel: "Programa de Pontos nfs",
  question: "O que são os pontos nfs e como funciona a validade e a regra FEFO?",
  answer: "Os pontos nfs são a moeda de fidelidade do ecossistema Netfits. Cada ponto emitido é provisionado com 100% de solvência atuarial em caixa (R$ 0,01 por nfs). Os pontos possuem validade de 12 a 24 meses e utilizam o algoritmo protegido FEFO (First-Expiring, First-Out), garantindo que os lotes de pontos mais próximos do vencimento sejam consumidos primeiro em seus resgates."
}, {
  id: "faq_2",
  category: "shop",
  categoryLabel: "Netfits Shop & Cashback",
  question: "Como funciona o acúmulo de 2 nfs a cada R$ 1,00 gasto no Netfits Shop?",
  answer: "Nas compras realizadas no Netfits Shop através de nossos agregadores parceiros, o usuário ganha 2,00 pontos nfs para cada R$ 1,00 pago em dinheiro. O valor do cashback entra como pendente e é liberado na carteira após o prazo legal de arrependimento (7 a 14 dias). Usuários do Netfits Club recebem o dobro (4,00 nfs por R$ 1,00)."
}, {
  id: "faq_3",
  category: "shop",
  categoryLabel: "Netfits Shop & Cashback",
  question: "Posso utilizar meus pontos nfs como pagamento parcial ou total no Shop?",
  answer: "Sim! Você pode utilizar seus pontos nfs como desconto direto no valor da compra (cotação de R$ 0,01 por nfs). A transação utiliza um protocolo seguro de reserva em duas fases (Two-Phase Lock) que trava os pontos por 15 minutos e gera um voucher token assinado e 100% rastreável no Ledger de Auditoria imutável da Netfits."
}, {
  id: "faq_8",
  category: "legal",
  categoryLabel: "Termos & Conformidade Legal",
  question: "Onde posso consultar o Regulamento Oficial, Regras Antifraude e o Termo LGPD?",
  answer: "O Regulamento Geral do Programa Netfits (com as regras antifraude de 100% de dwell time em vídeos e a cláusula irrevogável de exclusão sumária por descumprimento) e o Termo de Consentimento LGPD (Lei nº 13.709/2018) estão disponíveis para consulta integral e download em formato Word (.docx) na seção de Documentos Oficiais abaixo nesta página."
}, {
  id: "faq_4",
  category: "parceiros",
  categoryLabel: "Parceiros Comerciais",
  question: "Como academias, assessorias, clínicas, nutricionistas e médicos se cadastram?",
  answer: "Basta acessar a página de Parceiros (/parceiros), selecionar a categoria do seu negócio e preencher os dados de identificação. O formulário possui validador oficial de CNPJ na Receita Federal e verificador de registros profissionais (CRM, CRN, CREF, CREFITO). Após o envio, nossa equipe comercial entra em contato em até 48h úteis para ativar seu selo credenciado."
}, {
  id: "faq_5",
  category: "associados",
  categoryLabel: "Programa de Associados",
  question: "Como funciona o repasse de 10% do Programa de Associados Netfits?",
  answer: "Treinadores, atletas e criadores de conteúdo esportivo cadastrados como Associados Netfits recebem um link único de indicação (referralCode). O associado recebe 10,0% de comissão padrão sobre todas as receitas geradas pelos usuários indicados na plataforma, com painel transparente em tempo real (/associado) e solicitação de saque."
}, {
  id: "faq_6",
  category: "wearables",
  categoryLabel: "Dispositivos & Wearables",
  question: "Como conectar smartwatches e wearables como Garmin, Strava ou Apple Watch?",
  answer: "No aplicativo Netfits, acesse a aba 'Atividades' (/activities) e clique em 'Conectar Wearable'. O app permite a sincronização com 1 toque das suas métricas de treino (corrida, ciclismo, musculação) concedendo bônus automáticos de +50 nfs por treino validado."
}, {
  id: "faq_7",
  category: "club",
  categoryLabel: "Netfits Club",
  question: "O que é o Netfits Club e quais são as vantagens da assinatura de R$ 19,90/mês?",
  answer: "O Netfits Club é o clube de benefícios e saúde da Fase 2 do ecossistema Netfits. Por R$ 19,90/mês, os membros ganham cashback em dobro no Shop (4,00 nfs por R$ 1,00 gasto), bônus de 150 nfs na 1ª compra, desconto em exames de check-up e prioridade em inscrições de corridas de rua."
}];
function FaqPage() {
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [activeCategory, setActiveCategory] = reactExports.useState("all");
  const [expandedId, setExpandedId] = reactExports.useState("faq_8");
  const [showRegulamentoModal, setShowRegulamentoModal] = reactExports.useState(false);
  const [showLgpdModal, setShowLgpdModal] = reactExports.useState(false);
  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-zinc-950 text-white font-sans selection:bg-lime-400 selection:text-zinc-950", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(InstitutionalWebHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-6 bg-gradient-to-b from-purple-950/40 via-zinc-950 to-zinc-950 border-b border-zinc-800/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-extrabold uppercase tracking-widest text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20", children: "Central de Ajuda & Termos Legais" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-5xl font-black text-white", children: "Perguntas Frequentes (FAQ)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-zinc-400", children: "Tudo o que você precisa saber sobre o ecossistema Netfits Ltda., pontos, regras antifraude e LGPD." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-xl mx-auto pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-7 size-5 text-zinc-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Busque por palavra-chave (ex: regulamento, lgpd, cashback, pontos)...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full bg-zinc-900 border border-zinc-700 rounded-2xl pl-12 pr-4 py-3.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-lime-400 shadow-xl" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-4xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-2", children: [{
      id: "all",
      label: "Todas as Dúvidas"
    }, {
      id: "legal",
      label: "Documentos Legais & LGPD"
    }, {
      id: "pontos",
      label: "Pontos nfs & FEFO"
    }, {
      id: "shop",
      label: "Shop & Cashback"
    }, {
      id: "parceiros",
      label: "Parceiros Comerciais"
    }, {
      id: "associados",
      label: "Associados Netfits"
    }, {
      id: "wearables",
      label: "Wearables & GPS"
    }, {
      id: "club",
      label: "Netfits Club"
    }].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveCategory(tab.id), className: `px-3.5 py-1.5 rounded-full text-xs font-bold transition border cursor-pointer ${activeCategory === tab.id ? "bg-lime-400 border-lime-300 text-zinc-950 shadow-md font-black" : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"}`, children: tab.label }, tab.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-4xl mx-auto px-6 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-zinc-900 via-purple-950/30 to-zinc-900 border-2 border-purple-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-2xl bg-purple-600/20 text-purple-400 border border-purple-500/30 grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { className: "size-6 text-lime-400" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-black text-white tracking-tight flex items-center gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Documentos Oficiais & Termos Legais" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase bg-purple-500/20 text-lime-400 border border-purple-500/40 px-2 py-0.5 rounded-full", children: "Netfits Ltda." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400 mt-0.5", children: "Consulte a minuta oficial do Regulamento Geral do Programa, Matriz Antifraude e a Política LGPD." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/80 border border-zinc-800 rounded-2xl p-5 space-y-4 flex flex-col justify-between hover:border-purple-500/40 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-wider text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-500/30", children: "Parte I · Regulamento Geral" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-4 text-purple-400" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-white text-sm", children: "Regulamento do Programa & Regras Antifraude" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-400 leading-relaxed", children: "Termos e condições de participação, acúmulo de pontos nfs, regra de 100% dwell time em vídeos e cláusula irrevogável de exclusão sumária por descumprimento." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowRegulamentoModal(true), className: "flex-1 py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer shadow-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "size-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Ler Regulamento" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf", download: "Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf", target: "_blank", rel: "noopener noreferrer", className: "py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer", title: "Baixar Minuta Oficial em PDF (.pdf) com Marca d'Água", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-3.5 text-lime-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ".PDF" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/80 border border-zinc-800 rounded-2xl p-5 space-y-4 flex flex-col justify-between hover:border-lime-500/40 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-wider text-lime-400 bg-lime-950/60 px-2 py-0.5 rounded-full border border-lime-500/30", children: "Parte II · Lei Federal nº 13.709/2018" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4 text-lime-400" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-white text-sm", children: "Termo de Consentimento & Armazenamento (LGPD)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-400 leading-relaxed", children: "Direitos do titular, finalidades de tratamento de dados cadastrais e telemetria sensível (passos, treinos, GPS), sigilo e DPO oficial." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowLgpdModal(true), className: "flex-1 py-2.5 px-3 rounded-xl bg-lime-500 hover:bg-lime-400 text-zinc-950 font-black text-xs flex items-center justify-center gap-1.5 transition cursor-pointer shadow-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "size-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Ler Termo LGPD" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf", download: "Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf", target: "_blank", rel: "noopener noreferrer", className: "py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer", title: "Baixar Minuta Oficial em PDF (.pdf) com Marca d'Água", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-3.5 text-lime-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ".PDF" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/80 border border-zinc-800 rounded-2xl p-5 space-y-4 flex flex-col justify-between hover:border-purple-500/40 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-wider text-lime-400 bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-500/30", children: "Proposta Estratégica · IA 2026.2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "size-4 text-lime-400" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-white text-sm", children: "Arquitetura do Squad de 8 Agentes de IA" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-400 leading-relaxed", children: "Especificação executiva completa da operação de IA autônoma omnichannel, recomendação de modelos (Gemini Pro/Flash/Lite), KPIs e governança fiscal contábil." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/docs/arquitetura_squad_agentes_ia_netfits.pdf", download: "arquitetura_squad_agentes_ia_netfits.pdf", target: "_blank", rel: "noopener noreferrer", className: "flex-1 py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer shadow-md", title: "Baixar Arquitetura em PDF com Marca d'Água", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-3.5 text-lime-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ".PDF Marca d'Água" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/docs/arquitetura_squad_agentes_ia_netfits.docx", download: "arquitetura_squad_agentes_ia_netfits.docx", target: "_blank", rel: "noopener noreferrer", className: "py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer", title: "Baixar Documento Editável Word (.docx)", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-3.5 text-lime-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ".DOCX" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-4xl mx-auto px-6 pb-20 space-y-3", children: [
      filteredFaqs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "size-10 text-zinc-600 mx-auto mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-white mb-1", children: "Nenhuma pergunta encontrada" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "Tente buscar por outro termo ou navegue pelas categorias acima." })
      ] }) : filteredFaqs.map((faq) => {
        const isOpen = expandedId === faq.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toggleExpand(faq.id), className: "w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-zinc-850 transition cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-extrabold uppercase tracking-wider text-lime-400 bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-500/20", children: faq.categoryLabel }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-white leading-snug", children: faq.question })
            ] }),
            isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "size-5 text-lime-400 shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-5 text-zinc-500 shrink-0" })
          ] }),
          isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 pt-1 border-t border-zinc-800/60 text-xs text-zinc-300 leading-relaxed space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: faq.answer }) })
        ] }, faq.id);
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-8 text-center bg-zinc-900 border border-zinc-800 rounded-3xl p-8 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-extrabold text-white", children: "Ainda tem dúvidas?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400 max-w-md mx-auto", children: "Nossa equipe de suporte e parcerias está pronta para te atender de forma personalizada." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contato", className: "inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs shadow-lg transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4" }),
          "Falar com a Equipe de Atendimento →"
        ] })
      ] })
    ] }),
    showRegulamentoModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-3xl bg-zinc-900 border border-purple-500/40 rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90vh] flex flex-col text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pb-3 border-b border-zinc-800 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-5 text-purple-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-extrabold text-white", children: "Regulamento Geral do Programa — Netfits Ltda." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400", children: "Minuta Oficial Íntegra · Validade & Matriz Antifraude" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowRegulamentoModal(false), className: "text-zinc-400 hover:text-white font-bold size-8 rounded-full bg-zinc-800 grid place-items-center cursor-pointer", children: "✕" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto space-y-5 text-xs text-zinc-300 leading-relaxed pr-3 border-b border-zinc-800 pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-950/40 border border-purple-500/30 p-4 rounded-2xl text-[11px] text-purple-200 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-white text-xs", children: "NETFITS LTDA. — ORGANIZADORA E PROMOTORA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "CNPJ/MF nº 00.000.000/0001-00 · Av. Brigadeiro Faria Lima, 3477, Itaim Bibi, São Paulo/SP - CEP 04538-133." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-purple-300 pt-1", children: "Este Regulamento estabelece as regras oficiais de adesão, acúmulo de pontos nfs, regras antifraude e exclusão do Programa Netfits." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-purple-400 text-sm", children: "CLÁUSULA PRIMEIRA — DO OBJETO E DA ADESÃO" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "1.1. O presente Regulamento estabelece as regras, os termos e as condições para a adesão, participação e utilização do ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "PROGRAMA NETFITS" }),
            ", um ecossistema digital integrado de promoção da saúde (healthspan), engajamento esportivo, produção e consumo de conteúdo e programa de fidelidade com recompensa em pontos sob a denominação ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "nfs" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "1.2. A adesão ao Programa é voluntária e se efetiva no momento em que o Usuário conclui o seu cadastro no aplicativo ou web da NETFITS, declarando ter lido, compreendido e aceito integralmente este Regulamento e o Termo LGPD." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "1.3. A utilização de qualquer funcionalidade do ecossistema Netfits implica a ratificação automática da aceitação deste Regulamento." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-purple-400 text-sm", children: "CLÁUSULA SEGUNDA — DA ELEGIBILIDADE E CADASTRO DE USUÁRIOS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "2.1. Poderão participar pessoas físicas plenamente capazes, com idade igual ou superior a 18 anos completos (ou menores emancipados), residentes no Brasil e inscritos no CPF/MF." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "2.2. O cadastro é pessoal, único e intransferível, sendo vedada a criação de mais de uma conta por CPF/MF ou uso de contas falsas." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "2.3. O Usuário compromete-se a fornecer informações exatas, precisas e verdadeiras referente à sua identidade, e-mail, telefone celular, CPF e nascimento." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-purple-400 text-sm", children: "CLÁUSULA TERCEIRA — DO ACÚMULO DE PONTOS nfs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "3.1. Os pontos ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "nfs" }),
            " constituem uma unidade de recompensa e fidelidade exclusiva do Programa NETFITS, sem cotação em moeda corrente, insuscetíveis de cessão, venda, permuta, doação ou penhora."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "3.2. Modalidades autorizadas de acúmulo:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-5 space-y-1 text-zinc-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Prática de Atividades Físicas:" }),
              " Validação de treinos via Apple Health, Google Fit, Garmin e GPS;"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Consumo de Conteúdos no Feed:" }),
              " Visualização e interações válidas com publicações e vídeos;"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Compras no Netfits Shop:" }),
              " Cashback de 2,00 nfs por R$ 1,00 gasto junto a sellers credenciados;"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Indicação de Novos Usuários:" }),
              " Bônus de boas-vindas via código de indicação do Usuário ou Associados;"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Interação com Parceiros:" }),
              " Check-in e desafios em academias, clínicas e assessorias esportivas."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-purple-400 text-sm", children: "CLÁUSULA QUARTA — DA MATRIZ ANTIFRAUDE E REGRAS DE INTEGRIDADE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "4.1. A NETFITS aplica uma Matriz Antifraude Avançada para garantir a equidade e a solidez do ecossistema." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "4.2. ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Regra de Retenção Integral de Vídeos (100% Dwell Time):" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "pl-3 border-l-2 border-purple-500/40 text-purple-200", children: [
            "4.2.1. A atribuição de pontos nfs decorrente da visualização de vídeos está estritamente condicionada à ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "retenção visual contínua e completa de 100% da duração total do arquivo de vídeo" }),
            " (100% de dwell time).",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "4.2.2. É vedada qualquer tentativa de burla, aceleração do player, avanço rápido (fast-forward), minimização da tela, reprodução em segundo plano sem foco ativo, ou interrupção do vídeo. Caso o vídeo seja interrompido antes dos 100%, ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "nenhum ponto nfs será emitido" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "4.3. ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Condutas Vedadas:" }),
            " Uso de scripts, bots, automações, emuladores, falsificação de GPS (GPS spoofing), root/jailbreak, injeção de pacotes HTTP/API ou criação de contas múltiplas."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-950/70 border-2 border-red-500/60 p-4 rounded-2xl space-y-2 text-red-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-black text-red-400 text-sm uppercase", children: "⚠️ CLÁUSULA QUINTA — DIREITO IRREVOGÁVEL DE SUSPENSÃO E EXCLUSÃO SUMÁRIA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", children: "5.1. DIREITO IRREVOGÁVEL E INCONTESTÁVEL DE EXCLUSÃO SUMÁRIA:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px]", children: "A NETFITS LTDA. RESERVA-SE O DIREITO IRREVOGÁVEL, INCONTESTÁVEL, EXPRESSO E INCONDICIONAL DE, A QUALQUER TEMPO, SUSPENDER PREVENTIVAMENTE OU CANCELAR DEFINITIVAMENTE A CONTA DE QUALQUER USUÁRIO, PROMOVENDO SUA EXCLUSÃO SUMÁRIA E DEFINITIVA DO PROGRAMA, SEM A NECESSIDADE DE PRÉVIA NOTIFICAÇÃO JUDICIAL OU EXTRAJUDICIAL, CASO CONSTATADA A PRÁTICA DE QUALQUER CONDUTA VEDADA, SUSPEITA FUNDAMENTADA DE FRAUDE, DESCUMPRIMENTO DAS REGRAS ANTIFRAUDE OU INOBSERVÂNCIA DE QUALQUER DISPOSIÇÃO DESTE REGULAMENTO." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold pt-1", children: "5.2. PERDA INTEGRAL E IRREVERSÍVEL DOS PONTOS nfs:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px]", children: "O CANCELAMENTO DA CONTA DO USUÁRIO EM DECORRÊNCIA DE VIOLAÇÃO A ESTE REGULAMENTO OU PRÁTICA FRAUDULENTA IMPLICARÁ A PERDA IMEDIATA, AUTOMÁTICA E DEFINITIVA DA TOTALIDADE DOS PONTOS nfs ACUMULADOS NA CONTA DO USUÁRIO, BEM COMO O CANCELAMENTO DE RESGATES EM ANDAMENTO, SEM DIREITO A QUALQUER TIPO DE REEMBOLSO, RESSARCIMENTO, CONVERSÃO FINANCEIRA OU INDENIZAÇÃO POR PERDAS E DANOS MATERIAL OU MORAL." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-purple-400 text-sm", children: "CLÁUSULA SEXTA — VALIDADE DOS PONTOS (POLÍTICA FEFO)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "6.1. Os pontos nfs expiram em 12 a 24 meses contados da disponibilização.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "6.2. O resgate obedece à ordem cronológica de expiração (FEFO - First-Expiring, First-Out), consumindo prioritariamente os lotes mais próximos do vencimento."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-purple-400 text-sm pt-2", children: "CLÁUSULA SÉTIMA — DO FORO DE ELEIÇÃO" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "7.1. Fica eleito o Foro da Comarca de São Paulo/SP para dirimir quaisquer controvérsias deste Regulamento." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-white mb-2 flex items-center gap-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Visualização do PDF Oficial com Marca d'Água:" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf#toolbar=0", className: "w-full h-80 rounded-2xl border border-purple-500/30 bg-zinc-950", title: "PDF Oficial Netfits Regulamento" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 pt-1 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf", download: "Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf", target: "_blank", rel: "noopener noreferrer", className: "py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-bold text-xs flex items-center gap-2 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-4 text-lime-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Baixar Minuta Completa em PDF (.pdf)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowRegulamentoModal(false), className: "py-2.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs transition shadow-md", children: "Fechar Visualizador" })
      ] })
    ] }) }),
    showLgpdModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-3xl bg-zinc-900 border border-lime-500/40 rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90vh] flex flex-col text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pb-3 border-b border-zinc-800 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-5 text-lime-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-extrabold text-white", children: "Termo de Consentimento & LGPD — Netfits Ltda." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400", children: "Minuta Oficial Íntegra · Lei Federal nº 13.709/2018" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowLgpdModal(false), className: "text-zinc-400 hover:text-white font-bold size-8 rounded-full bg-zinc-800 grid place-items-center cursor-pointer", children: "✕" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto space-y-5 text-xs text-zinc-300 leading-relaxed pr-3 border-b border-zinc-800 pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-lime-950/40 border border-lime-500/30 p-4 rounded-2xl text-[11px] text-lime-200 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-white text-xs", children: "NETFITS LTDA. — CONTROLADORA DE DADOS PESSOAIS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "CNPJ/MF nº 00.000.000/0001-00 · Av. Brigadeiro Faria Lima, 3477, Itaim Bibi, São Paulo/SP - CEP 04538-133." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-lime-300 pt-1", children: "Este Termo formaliza o consentimento livre, informado e inequívoco do Titular para o tratamento e armazenamento de dados pessoais e sensíveis." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-lime-400 text-sm", children: "1. DA IDENTIFICAÇÃO DA CONTROLADORA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'NETFITS LTDA., pessoa jurídica de direito privado, inscrita no CNPJ/MF sob o nº 00.000.000/0001-00, com sede na Av. Brigadeiro Faria Lima, 3477, Itaim Bibi, São Paulo/SP, doravante denominada "Controladora".' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-lime-400 text-sm", children: "2. DO OBJETO E MANIFESTAÇÃO DE CONSENTIMENTO" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Ao criar sua conta e utilizar a Plataforma Netfits, o Titular fornece seu CONSENTIMENTO LIVRE, INFORMADO, EXPRESSO E INEQUÍVOCO para que a Controladora realize o tratamento de seus dados pessoais e sensíveis para as finalidades descritas neste Termo, conforme a Lei nº 13.709/2018 (LGPD)." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-lime-400 text-sm", children: "3. CATEGORIAS DE DADOS PESSOAIS TRATADOS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-5 space-y-1 text-zinc-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Dados Cadastrais e de Identificação:" }),
              " Nome completo, CPF, e-mail, telefone celular/WhatsApp, data de nascimento e endereço;"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Dados de Atividade Física e Saúde (Sensíveis):" }),
              " Passos, distância, treinos, frequência cardíaca e calorias capturadas via Apple Health, Google Fit e Garmin;"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Dados de Localização & GPS:" }),
              " Coordenadas de GPS gravadas unicamente durante a gravação ativa de corridas ou caminhadas;"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Dados de Uso e Navegação:" }),
              " IP, modelo do celular, retenção visual em vídeos (100% dwell time) e histórico de compras no Shop;"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Dados Transacionais:" }),
              " Extrato de pontos nfs acumulados, cupons e cashback."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-lime-400 text-sm", children: "4. FINALIDADES ESPECÍFICAS DO TRATAMENTO" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "I. Permitir o funcionamento regular do Programa Netfits e atribuição do saldo correto de pontos nfs;",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "II. Executar os algoritmos da Matriz Antifraude, auditando o tempo de permanência em vídeos (100% dwell time) e a autenticidade dos treinos;",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "III. Operacionalizar os resgates de benefícios e compras junto a sellers parceiros credenciados;",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "IV. Personalizar a experiência do Titular com recomendações de saúde (healthspan);",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "V. Cumprir obrigações fiscais, tributárias e regulatórias perante órgãos públicos estaduais e federais."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-lime-400 text-sm", children: "5. DIREITOS DO TITULAR DOS DADOS (ARTIGO 18 DA LGPD)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "5.1. O Titular pode solicitar a qualquer tempo: confirmação do tratamento, acesso aos dados, correção de erros, anonimização, eliminação de dados ou revogação do consentimento via e-mail ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "dpo@netfits.com.br" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-lime-400 text-sm pt-2", children: "6. CANAL DE ATENDIMENTO E DPO OFICIAL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Encarregado pelo Tratamento de Dados (DPO): ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "dpo@netfits.com.br" }),
            " ou ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "suporte@netfits.com.br" }),
            ".",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Endereço: Av. Brigadeiro Faria Lima, 3477, Itaim Bibi, São Paulo/SP - CEP 04538-133."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-white mb-2 flex items-center gap-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Visualização do PDF Oficial com Marca d'Água:" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf#toolbar=0", className: "w-full h-80 rounded-2xl border border-lime-500/30 bg-zinc-950", title: "PDF Oficial Netfits Termo LGPD" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 pt-1 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf", download: "Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf", target: "_blank", rel: "noopener noreferrer", className: "py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-bold text-xs flex items-center gap-2 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-4 text-lime-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Baixar Minuta Completa em PDF (.pdf)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowLgpdModal(false), className: "py-2.5 px-6 rounded-xl bg-lime-500 hover:bg-lime-400 text-zinc-950 font-black text-xs transition shadow-md", children: "Fechar Visualizador" })
      ] })
    ] }) })
  ] });
}
export {
  FaqPage as component
};
