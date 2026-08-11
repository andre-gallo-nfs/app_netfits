import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { n as netfitsMark, b as netfitsLogo } from "./router-v4fmk8Ak.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { _ as Lock, K as Percent, C as Check, f as Copy, e as Share2, U as Users, S as ShoppingBag, t as Coins, D as DollarSign, c as Sparkles, r as Download, E as Eye, $ as Video, A as Activity, a as Award } from "../_libs/lucide-react.mjs";

import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";


import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const MOCK_ASSOCIADO_DATA = {
  name: "André Gallo",
  category: "Associado Master · Influenciador Fitness",
  referralCode: "GALLO-NETFITS",
  exclusiveUrl: "https://netfits.app/r/GALLO-NETFITS",
  // Modelo Financeiro do Business Plan:
  // GMV Shopping -> Netfits Take-Rate (15%) -> Repasse ao Associado (30% da Receita Netfits)
  netfitsTakeRatePct: 15,
  // Netfits cobra 15% do GMV do Shopping
  associadoShareOfNetfitsRevenuePct: 30,
  // Associado recebe 30% da receita da Netfits
  totalCapturedUsers: 1428,
  activeUsersThisMonth: 1248,
  retentionRatePct: 87.4,
  monthlyGmvBrl: 184920,
  netfitsRevenueBrl: 27738,
  // 15% de R$ 184.920
  monthlyCommissionBrl: 8321.4,
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
  const associado = MOCK_ASSOCIADO_DATA;
  const simulatedGmv = simulatedAthletes * simulatedSpendBrl;
  const simulatedNetfitsRevenue = simulatedGmv * (associado.netfitsTakeRatePct / 100);
  const simulatedAssociadoCommission = simulatedNetfitsRevenue * (associado.associadoShareOfNetfitsRevenuePct / 100);
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
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-center items-center px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-zinc-900 border border-purple-500/30 rounded-3xl p-8 shadow-2xl space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 p-2.5 bg-foreground rounded-2xl shadow-xl mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: netfitsMark, alt: "", className: "size-8 object-contain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: netfitsLogo, alt: "Netfits", className: "h-6 w-auto filter brightness-0 invert" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-black text-white tracking-tight", children: "Portal do Associado & Influenciador" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400 max-w-xs mx-auto", children: "Acesso exclusivo para associados credenciados acompanharem a receita e carteira de atletas." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLoginSubmit, className: "space-y-4 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-zinc-300", children: "Código ou E-mail do Associado *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: loginCode, onChange: (e) => setLoginCode(e.target.value), placeholder: "Ex: GALLO-NETFITS ou gallo@netfits.com.br", className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-purple-600", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-zinc-300", children: "Senha de Acesso *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: loginPassword, onChange: (e) => setLoginPassword(e.target.value), placeholder: "Sua senha de Associado", className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-purple-600", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full py-3.5 rounded-xl font-bold text-xs bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "size-4" }),
          "Acessar Painel Financeiro"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/80 p-3 rounded-2xl border border-zinc-800 text-[11px] text-zinc-400 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "🔒 Login de Teste Associado:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-zinc-300 mt-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "GALLO-NETFITS" }),
          " | ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Pass@1234" })
        ] })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-zinc-950 text-zinc-100 font-sans pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 bg-zinc-900 border-b border-zinc-800 px-4 sm:px-6 py-3.5 flex items-center justify-between shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-foreground px-2.5 py-1.5 rounded-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: netfitsMark, alt: "", className: "size-6 object-contain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: netfitsLogo, alt: "Netfits", className: "h-4 w-auto filter brightness-0 invert" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline-block text-xs bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full border border-purple-500/20 font-semibold", children: "Painel do Associado Master" })
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
                  associado.netfitsTakeRatePct,
                  "% do GMV do Shopping"
                ] }),
                " como receita bruta de marketplace."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "• Você recebe ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-lime-400", children: [
                  associado.associadoShareOfNetfitsRevenuePct,
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
                associado.associadoShareOfNetfitsRevenuePct,
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Receita Netfits (15% GMV)", value: `R$ ${associado.netfitsRevenueBrl.toLocaleString("pt-BR", {
          minimumFractionDigits: 2
        })}`, subtext: "Valor bruto retido pela plataforma", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { className: "size-5 text-purple-400" }), highlightColor: "border-purple-500/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Sua Comissão (30% Receita)", value: `R$ ${associado.monthlyCommissionBrl.toLocaleString("pt-BR", {
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-lime-400/10 text-lime-400 px-3 py-1 rounded-full border border-lime-400/20 font-bold hidden sm:inline-block", children: "Comissão Líquida: 4.5% do GMV" })
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Receita Retida Netfits (15%):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-purple-400 font-mono", children: [
                  "R$ ",
                  simulatedNetfitsRevenue.toLocaleString("pt-BR")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Seu Repasse (30% da Receita):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-lime-400 font-mono", children: [
                  "R$ ",
                  simulatedAssociadoCommission.toLocaleString("pt-BR")
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "Detalhamento individual das conversões: GMV → Receita Netfits (15%) → Comissão (30%)" })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "Receita Netfits (15%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-right", children: "Comissão Associado (30%)" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-zinc-800 font-medium", children: associado.recentCapturedUsers.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-800/40 transition", children: [
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
              u.netfitsRevBrl.toLocaleString("pt-BR", {
                minimumFractionDigits: 2
              })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-right font-bold text-lime-400", children: [
              "+R$ ",
              u.commissionGeneratedBrl.toLocaleString("pt-BR", {
                minimumFractionDigits: 2
              })
            ] })
          ] }, u.id)) })
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
