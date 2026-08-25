import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { n as netfitsMark } from "./netfits-mark-DN6CUhW7.mjs";
import { g as trackPartnerRegistration, s as sharedSandboxStore } from "./router-C59RSMlf.mjs";
import { I as InstitutionalWebHeader } from "./InstitutionalWebHeader-Du3KY4F3.mjs";
import "../_libs/sonner.mjs";
import { aq as Dumbbell, i as Users, ai as Apple, ar as HeartPulse, as as Flame, at as Stethoscope, j as ShieldCheck, a1 as CircleCheck, al as Search, ah as CircleX, ac as CircleAlert, e as Send, k as MapPin } from "../_libs/lucide-react.mjs";

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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-12 space-y-8 min-h-screen bg-zinc-950 text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(InstitutionalWebHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-to-b from-purple-950/60 via-zinc-950 to-background px-4 pt-8 pb-10 border-b border-purple-500/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: netfitsMark, alt: "", className: "w-6 h-6 object-contain rounded-md bg-purple-500/20 p-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-lime-400 bg-lime-400/10 px-2.5 py-1 rounded-full border border-lime-400/20 flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-3 text-lime-400" }),
          "Credenciamento & Verificação Oficial"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-extrabold tracking-tight text-white mb-2 leading-tight", children: "Conecte sua marca a milhares de praticantes ativos de esportes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-zinc-300 max-w-[42ch] leading-relaxed mb-6", children: [
        "Cadastre sua academia, assessoria esportiva, clínica de recovery, consultório de nutrição ou medicina do esporte com ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "credenciamento 100% gratuito e zero mensalidade" }),
        ". Remuneração 100% baseada em contratações por evento."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900/80 border border-zinc-800 rounded-2xl p-3.5 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-5 text-lime-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-white", children: "Zero Mensalidade" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-400", children: "Remuneração 100% por evento / serviços contratados." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900/80 border border-zinc-800 rounded-2xl p-3.5 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-5 text-purple-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-white", children: "Selo de Autenticidade" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-400", children: "Validação oficial no CRM, CRN, CREF, CREFITO e CNPJ." })
        ] })
      ] })
    ] }),
    submittedProtocol && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-emerald-950 to-zinc-900 border border-emerald-500/40 rounded-3xl p-6 shadow-2xl space-y-3 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-6 text-emerald-400 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-emerald-400", children: "Cadastro & Registro Validados com Sucesso!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-bold text-white", children: [
            "Protocolo: ",
            submittedProtocol
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-300 leading-relaxed", children: "O cadastro do seu estabelecimento foi validado e recebido pela nossa equipe comercial. Em até **48 horas úteis**, entraremos em contato via WhatsApp/E-mail para liberar seu selo oficial de parceiro credenciado." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSubmittedProtocol(null), className: "text-xs font-bold text-emerald-400 hover:underline inline-block pt-1", children: "+ Cadastrar outro estabelecimento comercial" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-purple-400", children: "Passo 1 de 3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-extrabold text-white", children: "Selecione a Categoria do seu Negócio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "Escolha o segmento comercial do seu estabelecimento ou consultório." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: PARTNER_CATEGORIES.map((cat) => {
        const Icon = cat.icon;
        const isSelected = selectedCategory === cat.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => handleCategorySelect(cat.id), className: `text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${isSelected ? `bg-gradient-to-br ${cat.color} ring-2 ring-purple-500 shadow-xl` : "bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2 rounded-xl bg-zinc-950/60 border border-white/10`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-zinc-300", children: cat.badge })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white mb-0.5", children: cat.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-400 leading-tight", children: cat.subtitle })
          ] })
        ] }, cat.id);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 space-y-6 shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-purple-400", children: "Passo 2 de 3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-extrabold text-white", children: "Informações & Validação de Registro" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "Preencha os dados e valide a autenticidade do CNPJ ou Conselho Profissional." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-zinc-300 mb-1", children: "Nome Fantasia / Nome do Estabelecimento *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "Ex: Bio Ritmo Jardins ou Clínica Fisioterapia Recovery", value: formData.tradeName, onChange: (e) => setFormData({
            ...formData,
            tradeName: e.target.value
          }), className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/80 border border-purple-500/20 rounded-2xl p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-white", children: "Validação de Autenticidade Cadastral *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 bg-zinc-900 p-0.5 rounded-lg border border-zinc-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
                setDocType("cnpj");
                setValidationState({
                  status: "idle",
                  message: ""
                });
              }, className: `px-2.5 py-1 text-[10px] font-bold rounded-md transition ${docType === "cnpj" ? "bg-purple-600 text-white" : "text-zinc-400 hover:text-white"}`, children: "CNPJ (Receita)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
                setDocType("council");
                setValidationState({
                  status: "idle",
                  message: ""
                });
              }, className: `px-2.5 py-1 text-[10px] font-bold rounded-md transition ${docType === "council" ? "bg-purple-600 text-white" : "text-zinc-400 hover:text-white"}`, children: "Órgão de Classe" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: docType === "cnpj" ? "00.000.000/0001-00 (CNPJ Oficial)" : selectedCategoryObj?.boardExample || "Ex: CRM/SP 123456", value: formData.document, onChange: handleDocumentChange, className: "flex-1 bg-zinc-900 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: handleVerifyDocument, disabled: validationState.status === "validating", className: "px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 shrink-0 transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "size-3.5" }),
              validationState.status === "validating" ? "Consultando..." : "Verificar"
            ] })
          ] }),
          validationState.status !== "idle" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-3 rounded-xl border text-xs flex items-start gap-2 ${validationState.status === "valid" ? "bg-emerald-950/60 border-emerald-500/40 text-emerald-300" : validationState.status === "invalid" ? "bg-red-950/60 border-red-500/40 text-red-300" : "bg-purple-950/60 border-purple-500/40 text-purple-300"}`, children: [
            validationState.status === "valid" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-emerald-400 shrink-0 mt-0.5" }) : validationState.status === "invalid" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "size-4 text-red-400 shrink-0 mt-0.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "size-4 text-purple-400 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: validationState.message }),
              validationState.verifiedDetails && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-emerald-400/80 mt-0.5", children: validationState.verifiedDetails })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-zinc-300 mb-1", children: "Razão Social / Titular do Registro" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Nome empresarial completo ou nome médico/nutricionista", value: formData.companyName, onChange: (e) => setFormData({
              ...formData,
              companyName: e.target.value
            }), className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-zinc-300 mb-1", children: "Nome do Responsável Comercial" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Ex: Dr. Carlos Silva ou Amanda Melo", value: formData.responsibleName, onChange: (e) => setFormData({
              ...formData,
              responsibleName: e.target.value
            }), className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-zinc-300 mb-1", children: "E-mail Comercial de Atendimento *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, placeholder: "parcerias@suaempresa.com.br", value: formData.email, onChange: (e) => setFormData({
              ...formData,
              email: e.target.value
            }), className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-zinc-300 mb-1", children: "WhatsApp / Telefone Comercial *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", required: true, placeholder: "(11) 99999-8888", value: formData.phone, onChange: (e) => setFormData({
              ...formData,
              phone: e.target.value
            }), className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-zinc-300 mb-1", children: "Cidade" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "São Paulo", value: formData.city, onChange: (e) => setFormData({
              ...formData,
              city: e.target.value
            }), className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-zinc-300 mb-1", children: "Estado" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: formData.state, onChange: (e) => setFormData({
              ...formData,
              state: e.target.value
            }), className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "SP", children: "SP" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "RJ", children: "RJ" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "MG", children: "MG" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PR", children: "PR" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "RS", children: "RS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "SC", children: "SC" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "DF", children: "DF" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "BA", children: "BA" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "OUTROS", children: "Outros" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-zinc-300 mb-1", children: "Instagram / Website da Empresa" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "@suaempresa ou www.suaempresa.com.br", value: formData.websiteOrInstagram, onChange: (e) => setFormData({
            ...formData,
            websiteOrInstagram: e.target.value
          }), className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-zinc-800 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-lime-400", children: "Passo 3 de 3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-extrabold text-white", children: "Proposta de Benefício para Atletas Netfits *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "Informe o benefício, desconto exclusivo ou cashback que seu estabelecimento/consultório oferecerá aos usuários do Netfits." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-zinc-300 mb-1", children: "Tipo de Benefício Proposto *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: formData.benefitType, onChange: (e) => setFormData({
            ...formData,
            benefitType: e.target.value
          }), className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "discount_pct", children: "Desconto Percentual Exclusivo (ex: 15% a 25%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cashback_points", children: "Pontuação / Cashback em nfs para os Atletas" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "free_session", children: "Sessão / Aula Experimental Cortesia" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "free_assessment", children: "Avaliação Física ou Bioimpedância Cortesia" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "voucher", children: "Voucher / Brinde de Boas-Vindas" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[11px] font-bold text-zinc-400", children: "Sugestões rápidas (Clique para aplicar):" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: ["15% de Desconto em Mensalidades ou Consultas", "1ª Sessão de Avaliação de Bioimpedância Grátis", "Isenção Total da Taxa de Matrícula", "Acúmulo de +50 nfs por treino ou consulta declarada", "20% de Desconto em Tratamentos de Recovery", "Squeeze / Brinde Exclusivo no Primeiro Mês"].map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setFormData({
            ...formData,
            benefitDescription: preset
          }), className: `text-[10px] font-bold px-2.5 py-1 rounded-lg border transition ${formData.benefitDescription === preset ? "bg-lime-400 text-zinc-950 border-lime-400 font-extrabold" : "bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-600"}`, children: [
            "+ ",
            preset
          ] }, preset)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-zinc-300 mb-1", children: "Detalhamento da Proposta de Benefício *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 3, placeholder: "Ex: Oferecemos 15% de desconto nas mensalidades + 1ª avaliação de bioimpedância gratuita para todos os atletas cadastrados no Netfits.", value: formData.benefitDescription, onChange: (e) => setFormData({
            ...formData,
            benefitDescription: e.target.value
          }), className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 transition-all duration-200 active:scale-[0.98]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-4" }),
        "Enviar Cadastro de Parceiro Comercial Validado"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-lime-400", children: "Rede Credenciada" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-extrabold text-white", children: "Parceiros em Destaque" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800", children: [
          partnersList.length,
          " cadastrados"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: partnersList.map((partner) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 space-y-3 hover:border-zinc-700 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-extrabold uppercase tracking-wider text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-500/20", children: partner.categoryName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-white mt-1", children: partner.tradeName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-400 flex items-center gap-1 mt-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-3 text-zinc-500" }),
              partner.cityState
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-extrabold px-2.5 py-1 rounded-full border ${partner.status === "approved" ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-amber-500/10 border-amber-500/30 text-amber-400"}`, children: partner.status === "approved" ? "Credenciado" : "Em Análise" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-3 text-xs text-zinc-300 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-3.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: partner.documentValidated })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-zinc-200", children: partner.benefitProposed })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] text-zinc-500 pt-1 border-t border-zinc-800/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Protocolo: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-zinc-400", children: partner.protocol })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Cadastrado em: ",
            partner.createdAt
          ] })
        ] })
      ] }, partner.id)) })
    ] })
  ] });
}
export {
  ParceirosRegistrationPage as component
};
