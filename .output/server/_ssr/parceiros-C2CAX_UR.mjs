import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { n as netfitsMark } from "./netfits-mark-DN6CUhW7.mjs";
import { g as trackPartnerRegistration, s as sharedSandboxStore } from "./router-CAyunvuo.mjs";
import { I as InstitutionalWebHeader } from "./InstitutionalWebHeader-DdWs_jsW.mjs";
import "../_libs/sonner.mjs";
import { aq as Dumbbell, i as Users, ah as Apple, ar as HeartPulse, as as Flame, at as Stethoscope, j as ShieldCheck, d as Sparkles, a0 as CircleCheck, h as Check, ak as Search, ag as CircleX, ab as CircleAlert, a2 as Mail, a1 as Phone, k as MapPin, au as Instagram, e as Send } from "../_libs/lucide-react.mjs";

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
const PARTNER_CATEGORIES = [{
  id: "academias",
  title: "Academias, Studios & Pilates",
  subtitle: "Musculação, CrossFit, Pilates, Lutas, Dança e Functional Training",
  icon: Dumbbell,
  badge: "Fitness & Treino",
  boardName: "CNPJ / PJ ou CREF",
  boardExample: "CNPJ 12.345.678/0001-90 ou CREF 123456-G/SP",
  color: "from-lime-500/20 to-lime-950/40 border-lime-500/30 text-lime-400"
}, {
  id: "personais",
  title: "Personal Trainers & Preparadores",
  subtitle: "Treinadores individuais, Consultores fitness e Preparadores físicos",
  icon: Users,
  badge: "Treinamento Individual",
  boardName: "CREF (Educação Física)",
  boardExample: "CREF 123456-G/SP",
  color: "from-emerald-500/20 to-emerald-950/40 border-emerald-500/30 text-emerald-400"
}, {
  id: "nutricao",
  title: "Nutricionistas & Nutrólogos",
  subtitle: "Nutrição esportiva, Emagrecimento, Suplementação e Performance",
  icon: Apple,
  badge: "Saúde & Nutrição",
  boardName: "CRN / CRM",
  boardExample: "CRN-3 45678 ou CRM/SP 123456",
  color: "from-purple-500/20 to-purple-950/40 border-purple-500/30 text-purple-400"
}, {
  id: "fisioterapia",
  title: "Fisioterapeutas & Recovery",
  subtitle: "Reabilitação esportiva, Crioterapia, Bota de compressão e Osteopatia",
  icon: HeartPulse,
  badge: "Recovery & Prevenção",
  boardName: "CREFITO (Fisioterapia)",
  boardExample: "CREFITO-3 123456-F",
  color: "from-cyan-500/20 to-cyan-950/40 border-cyan-500/30 text-cyan-400"
}, {
  id: "assessorias",
  title: "Assessorias Esportivas & Grupos",
  subtitle: "Corrida de rua, Triatlo, Ciclismo, Natação e Trail Running",
  icon: Flame,
  badge: "Endurance & Outdoor",
  boardName: "CNPJ / PJ ou CREF",
  boardExample: "CNPJ 12.345.678/0001-90 ou CREF 098765-G/SP",
  color: "from-amber-500/20 to-amber-950/40 border-amber-500/30 text-amber-400"
}, {
  id: "medicina",
  title: "Clínicas, Lojas & Eventos",
  subtitle: "Clínicas integradas, Lojas de suplemento, Massoterapia e Provas de corrida",
  icon: Stethoscope,
  badge: "Comércio & Saúde",
  boardName: "CNPJ / Registro Profissional",
  boardExample: "CNPJ 12.345.678/0001-90",
  color: "from-blue-500/20 to-blue-950/40 border-blue-500/30 text-blue-400"
}];
function validateCNPJ(cnpj) {
  const clean = cnpj.replace(/\D/g, "");
  if (clean.length !== 14) return false;
  if (/^(\d)\1{13}$/.test(clean)) return false;
  let size = clean.length - 2;
  let numbers = clean.substring(0, size);
  const digits = clean.substring(size);
  let sum = 0;
  let pos = size - 7;
  for (let i = size; i >= 1; i--) {
    sum += Number(numbers.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
  if (result !== Number(digits.charAt(0))) return false;
  size = size + 1;
  numbers = clean.substring(0, size);
  sum = 0;
  pos = size - 7;
  for (let i = size; i >= 1; i--) {
    sum += Number(numbers.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  result = sum % 11 < 2 ? 0 : 11 - sum % 11;
  if (result !== Number(digits.charAt(1))) return false;
  return true;
}
function formatCNPJ(val) {
  const v = val.replace(/\D/g, "").slice(0, 14);
  return v.replace(/^(\d{2})(\d)/, "$1.$2").replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3").replace(/\.(\d{3})(\d)/, ".$1/$2").replace(/(\d{4})(\d)/, "$1-$2");
}
const FEATURED_PARTNERS = [{
  id: "p_101",
  protocol: "NFS-PARTNER-2026-9012",
  companyName: "Smart Fit Escola de Ginástica e Dança S.A.",
  tradeName: "Smart Fit Academias",
  category: "academias",
  categoryName: "Academias & Studios",
  cityState: "São Paulo / SP",
  responsibleName: "Diretoria de Parcerias B2B",
  email: "parcerias@smartfit.com.br",
  phone: "(11) 98765-4321",
  documentValidated: "CNPJ: 07.594.978/0001-78 (Ativo - Receita Federal)",
  benefitProposed: "Matrícula grátis + 10% de cashback em pontos nfs nas mensalidades",
  status: "approved",
  createdAt: "15/08/2026"
}, {
  id: "p_102",
  protocol: "NFS-PARTNER-2026-8841",
  companyName: "Fibios Fisioterapia e Recovery Esportivo Ltda",
  tradeName: "Clínica Fibios Health & Recovery",
  category: "fisioterapia",
  categoryName: "Fisioterapia & Recovery",
  cityState: "São Paulo / SP",
  responsibleName: "Dr. Roberto Alves",
  email: "contato@fibios.com.br",
  phone: "(11) 97123-4567",
  documentValidated: "CREFITO-3 189421-F (Verificado & Ativo)",
  benefitProposed: "15% de desconto em sessões de recovery com bota de compressão",
  status: "approved",
  createdAt: "18/08/2026"
}, {
  id: "p_103",
  protocol: "NFS-PARTNER-2026-7612",
  companyName: "Dra. Isabella Silva Nutrologia Esportiva",
  tradeName: "Dra. Isabella Silva — Medicina & Nutrologia",
  category: "nutricao",
  categoryName: "Nutricionistas & Nutrologia",
  cityState: "Campinas / SP",
  responsibleName: "Dra. Isabella Silva",
  email: "dra.isabella@nutrologia.com.br",
  phone: "(19) 99887-1122",
  documentValidated: "CRM/SP 145902 (Verificado & Ativo)",
  benefitProposed: "Bioimpedância cortesia na primeira consulta de check-up esportivo",
  status: "approved",
  createdAt: "19/08/2026"
}];
function ParceirosRegistrationPage() {
  const [selectedCategory, setSelectedCategory] = reactExports.useState("academias");
  const [docType, setDocType] = reactExports.useState("cnpj");
  const [formData, setFormData] = reactExports.useState({
    tradeName: "",
    companyName: "",
    document: "",
    // CNPJ or Registry (CRM, CRN, CREF, CREFITO)
    responsibleName: "",
    email: "",
    phone: "",
    city: "",
    state: "SP",
    neighborhood: "",
    websiteOrInstagram: "",
    benefitType: "cashback_points",
    benefitDescription: ""
  });
  const [validationState, setValidationState] = reactExports.useState({
    status: "idle",
    message: ""
  });
  const [partnersList, setPartnersList] = reactExports.useState(FEATURED_PARTNERS);
  const [submittedProtocol, setSubmittedProtocol] = reactExports.useState(null);
  const selectedCategoryObj = PARTNER_CATEGORIES.find((c) => c.id === selectedCategory);
  const handleCategorySelect = (catId) => {
    setSelectedCategory(catId);
    setValidationState({
      status: "idle",
      message: ""
    });
    if (catId === "medicina" || catId === "nutricao" || catId === "fisioterapia") {
      setDocType("council");
    } else {
      setDocType("cnpj");
    }
  };
  const handleDocumentChange = (e) => {
    const raw = e.target.value;
    if (docType === "cnpj") {
      const formatted = formatCNPJ(raw);
      setFormData({
        ...formData,
        document: formatted
      });
    } else {
      setFormData({
        ...formData,
        document: raw.toUpperCase()
      });
    }
    setValidationState({
      status: "idle",
      message: ""
    });
  };
  const handleVerifyDocument = async () => {
    if (!formData.document) {
      setValidationState({
        status: "invalid",
        message: "Por favor, digite o número do documento para validação."
      });
      return;
    }
    setValidationState({
      status: "validating",
      message: "Consultando bases oficiais..."
    });
    setTimeout(() => {
      if (docType === "cnpj") {
        const isValid = validateCNPJ(formData.document);
        if (isValid) {
          setValidationState({
            status: "valid",
            message: "CNPJ VÁLIDO — Receita Federal do Brasil (Situação: ATIVA).",
            verifiedDetails: "CNPJ Ativo & Regularizado na Receita Federal"
          });
        } else {
          setValidationState({
            status: "invalid",
            message: "CNPJ INVÁLIDO — Formato ou dígito verificador incorreto. Verifique o número digitado."
          });
        }
      } else {
        const cleanDoc = formData.document.replace(/\s/g, "");
        if (cleanDoc.length >= 4) {
          setValidationState({
            status: "valid",
            message: `REGISTRO DE CLASSE VÁLIDO — Conselho Profissional (${selectedCategoryObj?.badge}). Status: HABILITADO.`,
            verifiedDetails: `Profissional Habilitado no Conselho (${selectedCategoryObj?.badge})`
          });
        } else {
          setValidationState({
            status: "invalid",
            message: "Registro Profissional inválido. Informe a sigla do conselho e o número (Ex: CRM-SP 123456)."
          });
        }
      }
    }, 1200);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.tradeName || !formData.email || !formData.phone) {
      alert("Por favor, preencha todos os campos obrigatórios (Nome Fantasia, E-mail e Telefone).");
      return;
    }
    if (!formData.benefitDescription.trim()) {
      alert("Por favor, descreva a proposta de benefício ou desconto exclusivo que seu estabelecimento/consultório oferecerá aos usuários Netfits.");
      return;
    }
    if (validationState.status !== "valid") {
      alert("Por favor, clique em 'Verificar Registro / CNPJ' para validar os dados junto aos órgãos competentes antes de enviar.");
      return;
    }
    const randomNum = Math.floor(1e3 + Math.random() * 9e3);
    const newProtocol = `NFS-PARTNER-2026-${randomNum}`;
    const newPartner = {
      id: `p_${Date.now()}`,
      protocol: newProtocol,
      companyName: formData.companyName || formData.tradeName,
      tradeName: formData.tradeName,
      category: selectedCategory,
      categoryName: selectedCategoryObj?.title || "Parceiro Comercial",
      cityState: `${formData.city || "São Paulo"} / ${formData.state}`,
      responsibleName: formData.responsibleName || "Responsável Comercial",
      email: formData.email,
      phone: formData.phone,
      documentValidated: validationState.verifiedDetails || `${docType.toUpperCase()}: ${formData.document} (Verificado)`,
      benefitProposed: formData.benefitDescription,
      status: "analysis",
      createdAt: (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR")
    };
    setPartnersList([newPartner, ...partnersList]);
    setSubmittedProtocol(newProtocol);
    trackPartnerRegistration(formData.tradeName, selectedCategory, validationState.status === "valid");
    sharedSandboxStore.registerPartner({
      tradeName: formData.tradeName,
      companyName: formData.companyName || formData.tradeName,
      cnpj: formData.document,
      category: selectedCategory === "academias" ? "Academia" : selectedCategory === "fisioterapia" ? "Clínica" : "Assessoria",
      city: formData.city || "São Paulo",
      state: formData.state || "SP",
      email: formData.email,
      phone: formData.phone,
      benefitOffer: formData.benefitDescription
    });
    setFormData({
      tradeName: "",
      companyName: "",
      document: "",
      responsibleName: "",
      email: "",
      phone: "",
      city: "",
      state: "SP",
      neighborhood: "",
      websiteOrInstagram: "",
      benefitType: "cashback_points",
      benefitDescription: ""
    });
    setValidationState({
      status: "idle",
      message: ""
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-zinc-950 text-white font-sans selection:bg-purple-500 selection:text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(InstitutionalWebHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden bg-gradient-to-b from-purple-950/70 via-zinc-950 to-zinc-950 border-b border-purple-500/20 py-8 md:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 md:px-8 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: netfitsMark, alt: "", className: "size-6 object-contain rounded-md bg-purple-500/20 p-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] md:text-xs font-extrabold uppercase tracking-widest text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20 flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-3.5 text-lime-400" }),
          "Credenciamento & Verificação Oficial B2B"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15]", children: "Conecte sua marca a milhares de praticantes ativos de esportes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-base text-zinc-300 max-w-2xl leading-relaxed", children: "Quer ser um parceiro Netfits e fazer cada movimento valer mais você também? Ofereça seu produto/serviço aos nossos associados." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-900/80 via-zinc-900 to-lime-950/40 border border-purple-500/30 rounded-2xl p-4 md:p-5 shadow-lg flex items-center gap-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 md:size-12 rounded-xl bg-lime-400 text-black grid place-items-center shrink-0 font-black shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-5 md:size-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm md:text-base font-bold text-white leading-relaxed", children: "Ofereça um benefício exclusivo aos atletas e tenha acesso a um público engajado e alinhado com seus objetivos!" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "max-w-5xl mx-auto px-4 md:px-8 py-8 space-y-10", children: [
      submittedProtocol && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-emerald-950 via-zinc-900 to-zinc-950 border-2 border-emerald-500/40 rounded-3xl p-6 shadow-2xl space-y-3 relative overflow-hidden animate-in fade-in slide-in-from-top-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-7 text-emerald-400 shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-emerald-400", children: "Cadastro & Registro Validados com Sucesso!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg md:text-xl font-black text-white", children: [
              "Protocolo: ",
              submittedProtocol
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs md:text-sm text-zinc-300 leading-relaxed pt-1", children: [
              "O cadastro do seu estabelecimento foi recebido pela nossa equipe comercial. Em até ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "48 horas úteis" }),
              ", entraremos em contato via WhatsApp/E-mail para liberar seu selo oficial de parceiro credenciado."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 border-t border-emerald-500/20 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setSubmittedProtocol(null), className: "text-xs font-bold text-emerald-400 hover:text-emerald-300 underline cursor-pointer", children: "+ Cadastrar outro estabelecimento comercial" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-zinc-800 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-500/30", children: "Passo 1 de 3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl md:text-2xl font-black text-white mt-2", children: "Selecione a Categoria do seu Negócio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-zinc-400", children: "Escolha o segmento comercial do seu estabelecimento ou consultório profissional." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5", children: PARTNER_CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => handleCategorySelect(cat.id), className: `text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between cursor-pointer active:scale-[0.98] ${isSelected ? `bg-gradient-to-br ${cat.color} ring-2 ring-purple-500 shadow-xl border-purple-400` : "bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 rounded-xl bg-zinc-950/80 border border-white/10 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5 text-white" }) }),
              isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-lime-400 text-black flex items-center gap-1 shadow-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3 stroke-[3]" }),
                "Selecionado"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-zinc-300", children: cat.badge })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm md:text-base font-bold text-white mb-1", children: cat.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400 leading-snug", children: cat.subtitle })
            ] })
          ] }, cat.id);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "bg-zinc-900/90 border border-zinc-800 rounded-3xl p-5 md:p-8 space-y-6 shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-zinc-800/80 pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-500/30", children: "Passo 2 de 3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl md:text-2xl font-black text-white mt-2", children: "Informações do Estabelecimento & Validação" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-zinc-400", children: "Preencha os dados e valide a autenticidade do CNPJ ou Conselho Profissional." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs md:text-sm font-bold text-zinc-200 mb-1.5", children: "Nome Fantasia / Nome do Estabelecimento *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "Ex: Bio Ritmo Jardins ou Clínica Fisioterapia Recovery", value: formData.tradeName, onChange: (e) => setFormData({
              ...formData,
              tradeName: e.target.value
            }), className: "w-full min-h-[48px] bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 border border-purple-500/30 rounded-2xl p-4 md:p-5 space-y-3.5 shadow-inner", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs md:text-sm font-bold text-white flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4 text-lime-400 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Validação de Autenticidade Cadastral *" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-800 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
                  setDocType("cnpj");
                  setValidationState({
                    status: "idle",
                    message: ""
                  });
                }, className: `px-3 py-1.5 text-xs font-bold rounded-lg transition cursor-pointer ${docType === "cnpj" ? "bg-purple-600 text-white shadow-sm" : "text-zinc-400 hover:text-white"}`, children: "CNPJ (Receita)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
                  setDocType("council");
                  setValidationState({
                    status: "idle",
                    message: ""
                  });
                }, className: `px-3 py-1.5 text-xs font-bold rounded-lg transition cursor-pointer ${docType === "council" ? "bg-purple-600 text-white shadow-sm" : "text-zinc-400 hover:text-white"}`, children: "Órgão de Classe" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: docType === "cnpj" ? "00.000.000/0001-00 (CNPJ Oficial)" : selectedCategoryObj?.boardExample || "Ex: CRM/SP 123456", value: formData.document, onChange: handleDocumentChange, className: "flex-1 min-h-[48px] bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: handleVerifyDocument, disabled: validationState.status === "validating", className: "min-h-[48px] px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs md:text-sm flex items-center justify-center gap-2 shrink-0 transition active:scale-95 cursor-pointer shadow-md disabled:opacity-50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "size-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: validationState.status === "validating" ? "Consultando..." : "Verificar Registro" })
              ] })
            ] }),
            validationState.status !== "idle" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-3.5 rounded-xl border text-xs md:text-sm flex items-start gap-2.5 animate-in fade-in slide-in-from-top-2 ${validationState.status === "valid" ? "bg-emerald-950/70 border-emerald-500/50 text-emerald-200" : validationState.status === "invalid" ? "bg-red-950/70 border-red-500/50 text-red-200" : "bg-purple-950/70 border-purple-500/50 text-purple-200"}`, children: [
              validationState.status === "valid" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-5 text-emerald-400 shrink-0 mt-0.5" }) : validationState.status === "invalid" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "size-5 text-red-400 shrink-0 mt-0.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "size-5 text-purple-400 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", children: validationState.message }),
                validationState.verifiedDetails && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-emerald-300 font-medium", children: validationState.verifiedDetails })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs md:text-sm font-bold text-zinc-200 mb-1.5", children: "Razão Social / Titular do Registro" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Nome empresarial completo ou nome do médico/nutricionista", value: formData.companyName, onChange: (e) => setFormData({
                ...formData,
                companyName: e.target.value
              }), className: "w-full min-h-[48px] bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs md:text-sm font-bold text-zinc-200 mb-1.5", children: "Nome do Responsável Comercial" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Ex: Dr. Carlos Silva ou Amanda Melo", value: formData.responsibleName, onChange: (e) => setFormData({
                ...formData,
                responsibleName: e.target.value
              }), className: "w-full min-h-[48px] bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs md:text-sm font-bold text-zinc-200 mb-1.5 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-3.5 text-zinc-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "E-mail Comercial de Atendimento *" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, placeholder: "parcerias@suaempresa.com.br", value: formData.email, onChange: (e) => setFormData({
                ...formData,
                email: e.target.value
              }), className: "w-full min-h-[48px] bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs md:text-sm font-bold text-zinc-200 mb-1.5 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-3.5 text-zinc-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "WhatsApp / Telefone Comercial *" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", required: true, placeholder: "(11) 99999-8888", value: formData.phone, onChange: (e) => setFormData({
                ...formData,
                phone: e.target.value
              }), className: "w-full min-h-[48px] bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs md:text-sm font-bold text-zinc-200 mb-1.5 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-3.5 text-zinc-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cidade" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "São Paulo", value: formData.city, onChange: (e) => setFormData({
                ...formData,
                city: e.target.value
              }), className: "w-full min-h-[48px] bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs md:text-sm font-bold text-zinc-200 mb-1.5", children: "Estado" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: formData.state, onChange: (e) => setFormData({
                ...formData,
                state: e.target.value
              }), className: "w-full min-h-[48px] bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-3 text-sm md:text-base text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition cursor-pointer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "SP", children: "São Paulo (SP)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "RJ", children: "Rio de Janeiro (RJ)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "MG", children: "Minas Gerais (MG)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PR", children: "Paraná (PR)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "RS", children: "Rio Grande do Sul (RS)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "SC", children: "Santa Catarina (SC)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "DF", children: "Distrito Federal (DF)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "BA", children: "Bahia (BA)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "OUTROS", children: "Outros Estados" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs md:text-sm font-bold text-zinc-200 mb-1.5 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "size-3.5 text-zinc-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Instagram / Website da Empresa" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "@suaempresa ou www.suaempresa.com.br", value: formData.websiteOrInstagram, onChange: (e) => setFormData({
              ...formData,
              websiteOrInstagram: e.target.value
            }), className: "w-full min-h-[48px] bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-6 border-t border-zinc-800/80 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-lime-400 bg-lime-950/60 px-2.5 py-1 rounded-full border border-lime-500/30", children: "Passo 3 de 3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl md:text-2xl font-black text-white mt-2", children: "Proposta de Benefício para Atletas Netfits *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-zinc-400", children: "Informe a vantagem, desconto exclusivo ou bônus de cashback em nfs que seu estabelecimento oferecerá." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs md:text-sm font-bold text-zinc-200 mb-1.5", children: "Tipo de Benefício Proposto *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: formData.benefitType, onChange: (e) => setFormData({
              ...formData,
              benefitType: e.target.value
            }), className: "w-full min-h-[48px] bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-3 text-sm md:text-base text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "discount_pct", children: "Desconto Percentual Exclusivo (ex: 15% a 25%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cashback_points", children: "Pontuação / Cashback em nfs para os Atletas" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "free_session", children: "Sessão / Aula Experimental Cortesia" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "free_assessment", children: "Avaliação Física ou Bioimpedância Cortesia" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "voucher", children: "Voucher / Brinde de Boas-Vindas" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-zinc-400", children: "Sugestões rápidas (Clique para aplicar):" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["15% de Desconto em Mensalidades ou Consultas", "1ª Sessão de Avaliação de Bioimpedância Grátis", "Isenção Total da Taxa de Matrícula", "Acúmulo de +50 nfs por treino ou consulta declarada", "20% de Desconto em Tratamentos de Recovery", "Squeeze / Brinde Exclusivo no Primeiro Mês"].map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setFormData({
              ...formData,
              benefitDescription: preset
            }), className: `px-3 py-2 text-xs md:text-sm font-medium rounded-xl border transition cursor-pointer active:scale-95 ${formData.benefitDescription === preset ? "bg-lime-400 text-zinc-950 border-lime-400 font-extrabold shadow-sm" : "bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-600"}`, children: [
              "+ ",
              preset
            ] }, preset)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs md:text-sm font-bold text-zinc-200 mb-1.5", children: "Detalhamento da Proposta de Benefício *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 3, placeholder: "Ex: Oferecemos 15% de desconto nas mensalidades + 1ª avaliação de bioimpedância gratuita para todos os atletas cadastrados no Netfits.", value: formData.benefitDescription, onChange: (e) => setFormData({
              ...formData,
              benefitDescription: e.target.value
            }), className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-sm md:text-base text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full min-h-[54px] rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-sm md:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-purple-600/30 transition-all duration-200 active:scale-[0.98] cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Enviar Cadastro de Parceiro Comercial Validado" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4 pt-4 border-t border-zinc-800/80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-lime-400 bg-lime-950/60 px-2.5 py-1 rounded-full border border-lime-500/30", children: "Rede Credenciada" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl md:text-2xl font-black text-white mt-2", children: "Parceiros em Destaque" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800 self-start sm:self-auto", children: [
            partnersList.length,
            " cadastrados"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: partnersList.map((partner) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900/90 border border-zinc-800 rounded-2xl p-5 space-y-3.5 hover:border-zinc-700 transition flex flex-col justify-between shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-extrabold uppercase tracking-wider text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-500/20", children: partner.categoryName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-extrabold px-2.5 py-1 rounded-full border ${partner.status === "approved" ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-amber-500/10 border-amber-500/30 text-amber-400"}`, children: partner.status === "approved" ? "Credenciado" : "Em Análise" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base md:text-lg font-bold text-white leading-tight", children: partner.tradeName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-400 flex items-center gap-1 mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-3.5 text-zinc-500 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: partner.cityState })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-xs text-zinc-300 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-emerald-400 font-semibold text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: partner.documentValidated })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-zinc-200 leading-snug", children: partner.benefitProposed })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] text-zinc-500 pt-2 border-t border-zinc-800/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Protocolo: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-zinc-300", children: partner.protocol })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Cadastrado em: ",
              partner.createdAt
            ] })
          ] })
        ] }, partner.id)) })
      ] })
    ] })
  ] });
}
export {
  ParceirosRegistrationPage as component
};
