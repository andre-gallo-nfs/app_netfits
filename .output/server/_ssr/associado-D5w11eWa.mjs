import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useOperationalParams, n as netfitsLogo, s as sharedSandboxStore } from "./router-CIllG4M_.mjs";
import { n as netfitsMark } from "./netfits-mark-DN6CUhW7.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { I as InstitutionalWebHeader } from "./InstitutionalWebHeader-DpSeUw7x.mjs";
import { a7 as Lock, a8 as LogIn, _ as Percent, h as Check, b as Copy, g as Share2, i as Users, S as ShoppingBag, o as Coins, D as DollarSign, d as Sparkles, x as Download, l as Eye, a9 as Video, A as Activity, a as Award } from "../_libs/lucide-react.mjs";

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
const MOCK_ASSOCIADO_DATA = {
  name: "André Gallo",
  category: "Associado Netfits · Influenciador Fitness",
  referralCode: "GALLO-NETFITS",
  exclusiveUrl: "https://netfits.app/r/GALLO-NETFITS",
  // Associado recebe 10% da receita da Netfits
  totalCapturedUsers: 1428,
  activeUsersThisMonth: 1248,
  retentionRatePct: 87.4,
  monthlyGmvBrl: 184920,
  syntheticActionsReport: {
    shopPurchasesCount: 342,
    shopGmvBrl: 148500,
    postsViewedCount: 12840,
    videosWatchedCount: 4920,
    contentSharesCount: 2310,
    physicalActivitiesCount: 8450,
    partnerLoyaltyDeclarations: 890
  },
  recentCapturedUsers: [{
    id: "u_901",
    name: "Mariana Costa",
    email: "m.costa@gmail.com",
    joinDate: "08/08/2026",
    status: "Ativo",
    engagementLevel: "Alto (Atleta)",
    purchasesBrl: 1250,
    netfitsRevBrl: 187.5,
    commissionGeneratedBrl: 56.25
  }, {
    id: "u_902",
    name: "Lucas Fernandes",
    email: "lucas.f@hotmail.com",
    joinDate: "05/08/2026",
    status: "Ativo",
    engagementLevel: "Médio",
    purchasesBrl: 480,
    netfitsRevBrl: 72,
    commissionGeneratedBrl: 21.6
  }, {
    id: "u_903",
    name: "Camila Becker",
    email: "camila.becker@yahoo.com",
    joinDate: "01/08/2026",
    status: "Ativo",
    engagementLevel: "Muito Alto (Elite)",
    purchasesBrl: 3490,
    netfitsRevBrl: 523.5,
    commissionGeneratedBrl: 157.05
  }, {
    id: "u_904",
    name: "Roberto Silva",
    email: "roberto.silva@outlook.com",
    joinDate: "28/07/2026",
    status: "Ativo",
    engagementLevel: "Médio",
    purchasesBrl: 890,
    netfitsRevBrl: 133.5,
    commissionGeneratedBrl: 40.05
  }, {
    id: "u_905",
    name: "Juliana Paes",
    email: "juju.paes@gmail.com",
    joinDate: "22/07/2026",
    status: "Ativo",
    engagementLevel: "Alto",
    purchasesBrl: 1890,
    netfitsRevBrl: 283.5,
    commissionGeneratedBrl: 85.05
  }],
  payoutHistory: [{
    period: "Julho/2026",
    capturedUsers: 1350,
    gmvBrl: 168e3,
    netfitsRevBrl: 25200,
    payoutBrl: 7560,
    status: "Pago (Pix)",
    date: "05/08/2026"
  }, {
    period: "Junho/2026",
    capturedUsers: 1210,
    gmvBrl: 152500,
    netfitsRevBrl: 22875,
    payoutBrl: 6862.5,
    status: "Pago (Pix)",
    date: "05/07/2026"
  }, {
    period: "Maio/2026",
    capturedUsers: 1080,
    gmvBrl: 141e3,
    netfitsRevBrl: 21150,
    payoutBrl: 6345,
    status: "Pago (Pix)",
    date: "05/06/2026"
  }]
};
function AssociadoDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = reactExports.useState(false);
  const [loginCode, setLoginCode] = reactExports.useState("");
  const [loginPassword, setLoginPassword] = reactExports.useState("");
  const [copied, setCopied] = reactExports.useState(false);
  const [simulatedAthletes, setSimulatedAthletes] = reactExports.useState(50);
  const [simulatedSpendBrl, setSimulatedSpendBrl] = reactExports.useState(180);
  const [showQrModal, setShowQrModal] = reactExports.useState(false);
  const params = useOperationalParams();
  const associado = MOCK_ASSOCIADO_DATA;
  const takeRatePct = params.netfitsTakeRatePctFromGmv;
  const associadoSharePct = params.associadoShareOfNetfitsRevenuePct;
  const effectivePct = (takeRatePct / 100 * (associadoSharePct / 100) * 100).toFixed(2);
  const netfitsRevenueBrl = associado.monthlyGmvBrl * (takeRatePct / 100);
  const monthlyCommissionBrl = netfitsRevenueBrl * (associadoSharePct / 100);
  const simulatedGmv = simulatedAthletes * simulatedSpendBrl;
  const simulatedNetfitsRevenue = simulatedGmv * (takeRatePct / 100);
  const simulatedAssociadoCommission = simulatedNetfitsRevenue * (associadoSharePct / 100);
  const handleCopyLink = () => {
    navigator.clipboard.writeText(associado.exclusiveUrl);
    setCopied(true);
    toast.success("Link exclusivo de Associado copiado para a área de transferência!");
    setTimeout(() => setCopied(false), 2500);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginCode || !loginPassword) {
      toast.error("Informe seu código ou e-mail de Associado e sua senha.");
      return;
    }
    setIsAuthenticated(true);
    toast.success(`Bem-vindo ao Painel do Associado, ${associado.name}!`);
  };
  const [showRegModal, setShowRegModal] = reactExports.useState(false);
  const [regName, setRegName] = reactExports.useState("");
  const [regEmail, setRegEmail] = reactExports.useState("");
  const [regPhone, setRegPhone] = reactExports.useState("");
  const [regRegister, setRegRegister] = reactExports.useState("");
  const [regSpecialty, setRegSpecialty] = reactExports.useState("");
  const [regCity, setRegCity] = reactExports.useState("São Paulo - SP");
  const handleRegisterAssociadoSubmit = (e) => {
    e.preventDefault();
    if (!regName.trim() || !regEmail.trim() || !regRegister.trim()) {
      toast.error("Preencha todos os campos obrigatórios do credenciamento.");
      return;
    }
    sharedSandboxStore.registerAssociado({
      fullName: regName.trim(),
      email: regEmail.trim(),
      phone: regPhone.trim(),
      register: regRegister.trim(),
      specialty: regSpecialty.trim() || "Nutrologia Esportiva",
      city: regCity.trim()
    });
    setShowRegModal(false);
    setIsAuthenticated(true);
  };
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-center items-center px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-zinc-900 border border-purple-500/30 rounded-3xl p-8 shadow-2xl space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-lime-400 p-0.5 mx-auto shadow-xl mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-zinc-950 rounded-[14px] grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "size-7 text-lime-400" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-black text-white tracking-tight", children: "Programa de Associados (Grupo Restrito)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-400 leading-relaxed", children: [
            "O Programa de Associados é restrito a parceiros estratégicos de expansão e sócios da rede.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime-400 font-semibold mt-1 block", children: "Academia, Personal, Nutri, Fisio ou Clínica? Cadastre-se como Parceiro Comercial 100% grátis na aba Parceiros." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLoginSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-zinc-300", children: "Código ou E-mail do Associado *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: loginCode, onChange: (e) => setLoginCode(e.target.value), placeholder: "ASSOC-SP-001 ou GALLO-NETFITS", className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-purple-600", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-zinc-300", children: "Senha de Acesso *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: loginPassword, onChange: (e) => setLoginPassword(e.target.value), placeholder: "••••••••••••", className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-purple-600", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full py-3.5 rounded-xl font-bold text-xs bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "size-4" }),
            "Entrar no Painel do Associado"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-zinc-800 text-center space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-zinc-400 leading-relaxed", children: [
            "🔒 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cadastro Restrito:" }),
            " Os cadastros de Associados são realizados exclusivamente pelo ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Time Admin Netfits" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-500", children: "Caso tenha sido convidado, consulte os links de acesso enviados para o seu e-mail e WhatsApp." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/80 p-3 rounded-2xl border border-zinc-800 text-[11px] text-zinc-400 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "🔑 Credenciais de Teste Rápidas:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-zinc-300 mt-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "ASSOC-SP-001" }),
            " ou ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "GALLO-NETFITS" })
          ] })
        ] })
      ] }),
      showRegModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-zinc-900 border border-purple-500/40 rounded-3xl p-6 shadow-2xl space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pb-2 border-b border-zinc-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-extrabold text-white", children: "Credenciamento de Novo Associado" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowRegModal(false), className: "text-zinc-400 hover:text-white", children: "✕" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleRegisterAssociadoSubmit, className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] font-bold text-zinc-300", children: "Nome Completo *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: regName, onChange: (e) => setRegName(e.target.value), placeholder: "Ex: Dra. Juliana Medeiros", className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] font-bold text-zinc-300", children: "E-mail Profissional *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: regEmail, onChange: (e) => setRegEmail(e.target.value), placeholder: "dra.juliana@netfits.com.br", className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] font-bold text-zinc-300", children: "Registro Profissional *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: regRegister, onChange: (e) => setRegRegister(e.target.value), placeholder: "CRM/CRN/CREF 12345", className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white", required: true })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] font-bold text-zinc-300", children: "Telefone / WhatsApp" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: regPhone, onChange: (e) => setRegPhone(e.target.value), placeholder: "(11) 98888-0000", className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] font-bold text-zinc-300", children: "Especialidade" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: regSpecialty, onChange: (e) => setRegSpecialty(e.target.value), placeholder: "Nutrologia / Personal", className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] font-bold text-zinc-300", children: "Cidade / Estado" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: regCity, onChange: (e) => setRegCity(e.target.value), placeholder: "São Paulo - SP", className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full py-3 rounded-xl font-extrabold text-xs bg-purple-600 text-white hover:bg-purple-500 shadow-md", children: "Concluir Credenciamento & Gerar Código" })
        ] })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-zinc-950 text-zinc-100 font-sans pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(InstitutionalWebHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 bg-zinc-900 border-b border-zinc-800 px-4 sm:px-6 py-3.5 flex items-center justify-between shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-foreground px-2.5 py-1.5 rounded-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: netfitsMark, alt: "", className: "size-6 object-contain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: netfitsLogo, alt: "Netfits", className: "h-4 w-auto filter brightness-0 invert" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline-block text-xs bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full border border-purple-500/20 font-semibold", children: "Painel do Associado Netfits" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-2 text-xs text-zinc-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-lime-400 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Código: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-white font-mono", children: associado.referralCode })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsAuthenticated(false), className: "px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-300 border border-zinc-700 transition", children: "Sair" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 pt-8 space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-purple-950 via-zinc-900 to-zinc-900 border border-purple-500/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-[-5%] bottom-[-20%] size-80 bg-purple-600/10 blur-3xl rounded-full pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-2xl bg-purple-600 text-white font-black text-lg grid place-items-center shadow-lg", children: "AG" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-black text-white", children: associado.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-lime-400 font-semibold", children: associado.category })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/60 p-3 rounded-2xl border border-zinc-800 text-xs text-zinc-300 max-w-xl space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-white flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Percent, { className: "size-3.5 text-lime-400" }),
                "Regra de Comissionamento Transparente:"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "• A Netfits retém ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
                  takeRatePct,
                  "% do GMV do Shopping"
                ] }),
                " como receita bruta de marketplace."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "• Você recebe ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-lime-400", children: [
                  associadoSharePct,
                  "% sobre essa receita da Netfits"
                ] }),
                " gerada pela sua carteira de usuários!"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/80 border border-purple-500/30 rounded-2xl p-4 min-w-[320px] space-y-3 shadow-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-[10px] uppercase font-bold text-zinc-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Seu Link Exclusivo de Captação" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lime-400", children: [
                associadoSharePct,
                "% da Receita Netfits"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-zinc-900 rounded-xl px-3 py-2 text-xs font-mono text-white truncate border border-zinc-800", children: associado.exclusiveUrl }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleCopyLink, className: "bg-lime-400 hover:bg-lime-300 text-zinc-950 font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition shrink-0", children: [
                copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "size-4" }),
                copied ? "Copiado!" : "Copiar"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowQrModal(true), className: "w-full py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 font-bold text-xs border border-purple-500/30 flex items-center justify-center gap-2 transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "size-3.5 text-lime-400" }),
              "Gerar QR Code & Kit de Mídia Social"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Usuários na Carteira", value: associado.totalCapturedUsers.toLocaleString("pt-BR"), subtext: `${associado.activeUsersThisMonth} ativos neste mês (${associado.retentionRatePct}% retenção)`, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-5 text-purple-400" }), highlightColor: "border-purple-500/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "GMV do Shopping (R$)", value: `R$ ${associado.monthlyGmvBrl.toLocaleString("pt-BR", {
          minimumFractionDigits: 2
        })}`, subtext: "Vendas totais de produtos na sua carteira", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "size-5 text-purple-400" }), highlightColor: "border-purple-500/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: `Receita Netfits (${takeRatePct}% GMV)`, value: `R$ ${netfitsRevenueBrl.toLocaleString("pt-BR", {
          minimumFractionDigits: 2
        })}`, subtext: "Valor bruto retido pela plataforma", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { className: "size-5 text-purple-400" }), highlightColor: "border-purple-500/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: `Sua Comissão (${associadoSharePct}% Receita)`, value: `R$ ${monthlyCommissionBrl.toLocaleString("pt-BR", {
          minimumFractionDigits: 2
        })}`, subtext: "Seu repasse líquido a receber este mês", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "size-5 text-lime-400" }), highlightColor: "border-lime-400 ring-1 ring-lime-400/20 bg-lime-400/5", badgeText: "A Receber" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-zinc-900 via-purple-950/40 to-zinc-900 border border-purple-500/30 rounded-3xl p-6 shadow-xl space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-zinc-800 pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-2xl bg-purple-600/20 text-purple-400 grid place-items-center border border-purple-500/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-5 text-lime-400" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-lime-400", children: "Simulador de Ganhos em Tempo Real" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-white", children: "Calculadora de Projeção de Comissões PIX" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs bg-lime-400/10 text-lime-400 px-3 py-1 rounded-full border border-lime-400/20 font-bold hidden sm:inline-block", children: [
            "Comissão Líquida: ",
            effectivePct,
            "% do GMV"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-bold text-zinc-200", children: "Atletas Ativos na Carteira:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-extrabold text-lime-400 text-sm font-mono", children: [
                  simulatedAthletes,
                  " atletas"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "5", max: "1000", step: "5", value: simulatedAthletes, onChange: (e) => setSimulatedAthletes(Number(e.target.value)), className: "w-full accent-purple-500 bg-zinc-950 rounded-lg cursor-pointer h-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-zinc-500 font-mono", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "5 atletas" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "500 atletas" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "1.000 atletas" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-bold text-zinc-200", children: "Gasto Médio Mensal por Atleta no Shop:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-extrabold text-purple-400 text-sm font-mono", children: [
                  "R$ ",
                  simulatedSpendBrl,
                  "/mês"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "50", max: "500", step: "10", value: simulatedSpendBrl, onChange: (e) => setSimulatedSpendBrl(Number(e.target.value)), className: "w-full accent-lime-400 bg-zinc-950 rounded-lg cursor-pointer h-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-zinc-500 font-mono", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "R$ 50/mês" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "R$ 250/mês" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "R$ 500/mês" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 bg-zinc-950/90 border border-purple-500/40 rounded-2xl p-5 text-center space-y-3 shadow-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-wider text-zinc-400", children: "Sua Renda Passiva Mensal Estimada" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-black text-lime-400 tracking-tight", children: [
              "R$ ",
              simulatedAssociadoCommission.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-zinc-400", children: " /mês" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-zinc-800 text-[11px] text-zinc-400 space-y-1 text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GMV Total Gerado:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-white font-mono", children: [
                  "R$ ",
                  simulatedGmv.toLocaleString("pt-BR")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Receita Retida Netfits (",
                  takeRatePct,
                  "%):"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-purple-400 font-mono", children: [
                  "R$ ",
                  simulatedNetfitsRevenue.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Seu Repasse (",
                  associadoSharePct,
                  "% da Receita):"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-lime-400 font-mono", children: [
                  "R$ ",
                  simulatedAssociadoCommission.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      showQrModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-white text-zinc-900 border border-zinc-200 rounded-3xl p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-zinc-200 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "size-5 text-purple-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-extrabold text-zinc-900", children: "QR Code & Kit de Mídia" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowQrModal(false), className: "size-8 rounded-full bg-zinc-100 hover:bg-zinc-200 grid place-items-center text-zinc-600 transition font-bold", children: "✕" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-6 rounded-2xl text-center space-y-3 shadow-xl max-w-xs mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-44 bg-zinc-950 p-3 rounded-xl mx-auto flex items-center justify-center border-4 border-purple-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-5 gap-1.5 w-full h-full p-1 bg-white rounded-lg place-items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-6 bg-purple-600 rounded-xs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-6 bg-zinc-950 rounded-xs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-6 bg-purple-600 rounded-xs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-6 bg-zinc-950 rounded-xs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-6 bg-purple-600 rounded-xs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-6 bg-zinc-950 rounded-xs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-6 bg-lime-400 rounded-xs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-6 bg-purple-600 rounded-xs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-6 bg-lime-400 rounded-xs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-6 bg-zinc-950 rounded-xs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-6 bg-purple-600 rounded-xs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-6 bg-zinc-950 rounded-xs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-6 bg-purple-600 rounded-xs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-6 bg-zinc-950 rounded-xs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-6 bg-lime-400 rounded-xs" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono font-bold text-zinc-900 uppercase tracking-widest", children: associado.referralCode })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
            toast.success("QR Code exclusivo de Associado baixado em PNG alta resolução!");
            setShowQrModal(false);
          }, className: "w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-4 text-lime-400" }),
            "Baixar QR Code para Impressão (PNG HD)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
            toast.success("Kit de artes para Instagram Stories e WhatsApp copiado!");
            setShowQrModal(false);
          }, className: "w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-xs border border-zinc-700 transition flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4 text-purple-400" }),
            "Baixar Artes para Stories & WhatsApp"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-lime-400", children: "Relatório Sintético Executivo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white", children: "Resumo de Ações da Carteira do Associado" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "Acompanhe o engajamento e as interações transacionais dos usuários captados." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toast.success("Relatório sintético exportado em PDF com sucesso!"), className: "px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 border border-zinc-700 flex items-center gap-1.5 self-start sm:self-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-4" }),
            "Exportar Relatório PDF"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SyntheticActionTile, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "size-5 text-lime-400" }), title: "Compras no Marketplace", metric: `${associado.syntheticActionsReport.shopPurchasesCount} Compras Realizadas`, detail: `Volume GMV: R$ ${associado.syntheticActionsReport.shopGmvBrl.toLocaleString("pt-BR", {
            minimumFractionDigits: 2
          })}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SyntheticActionTile, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "size-5 text-purple-400" }), title: "Visualizações de Posts & Guias", metric: `${associado.syntheticActionsReport.postsViewedCount.toLocaleString("pt-BR")} Consumos no Feed`, detail: "Usuários consumindo conteúdos editoriais e de parceiros" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SyntheticActionTile, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "size-5 text-purple-400" }), title: "Aulas & Vídeos Assistidos", metric: `${associado.syntheticActionsReport.videosWatchedCount.toLocaleString("pt-BR")} Aulas Concluídas`, detail: "Engajamento com especialistas e profissionais de saúde" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SyntheticActionTile, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "size-5 text-lime-400" }), title: "Compartilhamentos & Difusão", metric: `${associado.syntheticActionsReport.contentSharesCount.toLocaleString("pt-BR")} Compartilhamentos`, detail: "Viralização da marca Netfits por sua base de indicados" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SyntheticActionTile, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "size-5 text-purple-400" }), title: "Atividades & Provas Esportivas", metric: `${associado.syntheticActionsReport.physicalActivitiesCount.toLocaleString("pt-BR")} Treinos Registrados`, detail: "Frequência ativa de esportes e longevidade monitorada" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SyntheticActionTile, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "size-5 text-lime-400" }), title: "Declaração de Pontos Bancários", metric: `${associado.syntheticActionsReport.partnerLoyaltyDeclarations} Usuários Declarantes`, detail: "Potencial de cashback e conversão em milhas e pontos" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-white", children: "Usuários Recentes na sua Carteira" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-400", children: [
              "Detalhamento individual das conversões: GMV → Receita Netfits (",
              takeRatePct,
              "%) → Comissão (",
              associadoSharePct,
              "%)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-purple-400 bg-purple-950 px-3 py-1 rounded-full border border-purple-800", children: [
            "Total: ",
            associado.totalCapturedUsers,
            " usuários"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs text-zinc-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4", children: "Usuário Captado" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4", children: "Data de Entrada" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4", children: "Engajamento" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "GMV Compras (R$)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "py-3 px-4 text-right", children: [
              "Receita Netfits (",
              takeRatePct,
              "%)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "py-3 px-4 text-right", children: [
              "Comissão Associado (",
              associadoSharePct,
              "%)"
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-zinc-800 font-medium", children: associado.recentCapturedUsers.map((u) => {
            const uNetfitsRev = u.purchasesBrl * (takeRatePct / 100);
            const uCommission = uNetfitsRev * (associadoSharePct / 100);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-white", children: u.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-500", children: u.email })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-zinc-400", children: u.joinDate }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-950 text-purple-300 border border-purple-800", children: u.engagementLevel }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-bold text-white", children: [
                "R$ ",
                u.purchasesBrl.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2
                })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right text-purple-300", children: [
                "R$ ",
                uNetfitsRev.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2
                })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-bold text-lime-400", children: [
                "+R$ ",
                uCommission.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2
                })
              ] })
            ] }, u.id);
          }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-white", children: "Histórico de Repasses Financeiros (R$)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: associado.payoutHistory.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 border border-zinc-800 rounded-2xl p-4 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-white", children: p.period }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold px-2 py-0.5 rounded bg-lime-400/20 text-lime-400 border border-lime-400/30", children: p.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-extrabold text-lime-400", children: [
            "R$ ",
            p.payoutBrl.toLocaleString("pt-BR", {
              minimumFractionDigits: 2
            })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-zinc-400 flex justify-between border-t border-zinc-900 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "GMV: R$ ",
              p.gmvBrl.toLocaleString("pt-BR")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Data: ",
              p.date
            ] })
          ] })
        ] }, p.period)) })
      ] })
    ] })
  ] });
}
function KpiCard({
  title,
  value,
  subtext,
  icon,
  highlightColor,
  badgeText
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-zinc-900 border rounded-3xl p-5 shadow-xl space-y-3 relative overflow-hidden ${highlightColor}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-zinc-400", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-zinc-950 rounded-xl border border-zinc-800", children: icon })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black text-white tracking-tight", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-400 mt-1 leading-relaxed", children: subtext })
    ] }),
    badgeText && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-14 text-[9px] font-extrabold px-2 py-0.5 rounded bg-lime-400 text-zinc-950 uppercase", children: badgeText })
  ] });
}
function SyntheticActionTile({
  icon,
  title,
  metric,
  detail
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 border border-zinc-800 rounded-2xl p-4 space-y-2 hover:border-purple-500/40 transition", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-zinc-900 rounded-xl border border-zinc-800", children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs text-white", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-extrabold text-lime-400", children: metric }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-400 mt-0.5 leading-relaxed", children: detail })
    ] })
  ] });
}
export {
  AssociadoDashboardPage as component
};
