import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { g as profileAvatar, w as wallet } from "./router-C9mFrp7a.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { ag as ArrowLeft, $ as LogIn, ah as Camera, a1 as UserPlus, U as Users, a7 as User, ai as Calendar, a6 as Phone, a4 as Mail, M as MapPin, A as Activity, C as Check, aj as Plus, g as Heart, ak as Dumbbell, al as Watch, J as Save, a as Award, c as Sparkles, L as Link2, f as Copy, a5 as CreditCard, am as CircleCheckBig, Y as ChevronRight } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType, e as enumType, n as numberType, b as booleanType, l as literalType, a as arrayType } from "../_libs/zod.mjs";

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
const UserSignupSchema = objectType({
  id: stringType().uuid("ID de usuário inválido"),
  fullName: stringType().min(3, "Nome deve conter no mínimo 3 caracteres").max(100, "Nome muito longo"),
  email: stringType().email("Endereço de e-mail inválido"),
  phone: stringType().regex(/^\+55\s\d{2}\s9?\d{4}-\d{4}$/, "Telefone deve estar no formato +55 11 98765-4321"),
  birthDate: stringType().refine((dateStr) => !isNaN(Date.parse(dateStr)), {
    message: "Data de nascimento inválida"
  }),
  address: stringType().min(5, "Endereço deve conter rua, número e cidade"),
  // Dados do Ecossistema Esportivo
  sports: arrayType(stringType()).min(1, "Selecione ao menos 1 esporte de preferência"),
  healthPlan: stringType().default("Sem plano"),
  gym: stringType().default("Não frequento"),
  wearable: stringType().default("Não uso"),
  coaching: stringType().optional(),
  // Programas de Fidelidade Declarados (Etapa 1 - Business Plan Sessão 6)
  declaredLoyaltyPrograms: arrayType(stringType()).default([]),
  declaredPointsRange: stringType().default("0 - 10.000"),
  // Origem do Cadastro & Indicação (Tribo)
  referralCode: stringType().optional(),
  referredByUserId: stringType().uuid().optional(),
  // Consentimento como Produto (LGPD & Manifesto Netfits v2.0)
  consentTermsAccepted: literalType(true, {
    errorMap: () => ({ message: "É necessário aceitar os termos de uso da Netfits" })
  }),
  consentWearablesData: booleanType().default(false),
  consentPartnersOffers: booleanType().default(true),
  consentTimestamp: stringType().default(() => (/* @__PURE__ */ new Date()).toISOString()),
  // Categoria de Usuário (Novo: ASSOCIADOS)
  userCategory: enumType(["atleta", "associado", "especialista", "parceiro"]).default("atleta"),
  exclusiveReferralLink: stringType().optional(),
  associadoStats: objectType({
    capturedUsersCount: numberType().default(0),
    activeUsersCount: numberType().default(0),
    totalCommissionNfs: numberType().default(0)
  }).optional(),
  // Saldo e Nível de Fidelidade
  walletBalanceNfs: numberType().int().nonnegative().default(0),
  level: enumType(["starter", "pro", "prime", "elite"]).default("starter"),
  createdAt: stringType().default(() => (/* @__PURE__ */ new Date()).toISOString()),
  updatedAt: stringType().default(() => (/* @__PURE__ */ new Date()).toISOString())
});
function validateUserData(data) {
  const result = UserSignupSchema.safeParse(data);
  if (!result.success) {
    return {
      isValid: false,
      errors: result.error.flatten().fieldErrors,
      sanitizedData: null
    };
  }
  return {
    isValid: true,
    errors: null,
    sanitizedData: result.data
  };
}
function AssociadoDashboardCard() {
  const [isAssociado, setIsAssociado] = reactExports.useState(true);
  const [copied, setCopied] = reactExports.useState(false);
  const exclusiveLink = "https://netfits.app/r/gallo-associado-01";
  const [stats, setStats] = reactExports.useState({
    capturedUsers: 142,
    activeUsers: 118,
    totalCommissionNfs: 14200
  });
  const handleCopyLink = () => {
    navigator.clipboard.writeText(exclusiveLink);
    setCopied(true);
    toast.success("Link exclusivo de associado copiado para a área de transferência!");
    setTimeout(() => setCopied(false), 2500);
  };
  const handleSimulateNewCapture = () => {
    setStats((prev) => ({
      capturedUsers: prev.capturedUsers + 1,
      activeUsers: prev.activeUsers + 1,
      totalCommissionNfs: prev.totalCommissionNfs + 100
    }));
    wallet.earn(100, "Comissão de captação de usuário via link exclusivo");
    toast.success("🎉 Novo usuário cadastrado pelo seu link! +100 nfs creditados!");
  };
  if (!isAssociado) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-zinc-900 via-purple-950 to-zinc-900 text-zinc-100 rounded-2xl p-5 border border-purple-500/30 shadow-xl relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "size-5 text-lime-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-lime-400 bg-lime-400/10 px-2 py-0.5 rounded border border-lime-400/20", children: "Programa de Associados" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold mb-1", children: "Seja um Associado Netfits" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-300 mb-4 leading-relaxed", children: "Tenha um link exclusivo de captação, convide atletas e ganhe comissão contínua em nfs para cada novo membro ativo na comunidade!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => {
            setIsAssociado(true);
            toast.success("Parabéns! Sua conta agora é uma conta de ASSOCIADO!");
          },
          className: "w-full bg-lime-400 hover:bg-lime-300 text-zinc-950 font-extrabold text-xs py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-lime-400/20",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4" }),
            "Ativar Conta de Associado"
          ]
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-950 via-zinc-900 to-zinc-950 text-zinc-100 rounded-2xl p-5 border border-purple-500/40 shadow-2xl relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-lg bg-lime-400 grid place-items-center text-zinc-950 font-black shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "size-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-extrabold tracking-tight text-lime-400", children: "Minhas Indicações" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-lime-400 bg-lime-400/10 border border-lime-400/30 px-2.5 py-1 rounded-full", children: "Link Ativo" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900/90 border border-zinc-800 rounded-xl p-3 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block mb-1.5 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Seu Link Exclusivo de Captação" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime-400 font-bold", children: "100 nfs / cadastro" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-zinc-950 rounded-lg px-3 py-2 text-xs font-mono text-zinc-200 truncate border border-zinc-800 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "size-3.5 text-purple-400 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: exclusiveLink })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleCopyLink,
            className: "bg-lime-400 hover:bg-lime-300 text-zinc-950 text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 shrink-0 transition-colors",
            children: [
              copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "size-3.5" }),
              copied ? "Copiado!" : "Copiar"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2.5 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-zinc-400 block font-medium", children: "Captados" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-extrabold text-white", children: stats.capturedUsers }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-lime-400 block font-semibold", children: "+12 este mês" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2.5 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-zinc-400 block font-medium", children: "Ativos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-extrabold text-white", children: stats.activeUsers }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-purple-400 block font-semibold", children: "83% retenção" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2.5 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-zinc-400 block font-medium", children: "Comissão" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-extrabold text-lime-400", children: stats.totalCommissionNfs.toLocaleString("pt-BR") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-zinc-400 block font-semibold", children: "nfs acumulados" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: handleSimulateNewCapture,
        className: "flex-1 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold py-2.5 rounded-xl border border-purple-400/30 flex items-center justify-center gap-1.5 transition-colors shadow-md",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3.5 text-lime-400" }),
          "Simular Nova Captação"
        ]
      }
    ) })
  ] });
}
const PARTNER_PROGRAMS = [
  { id: "livelo", name: "Livelo", category: "Banco do Brasil & Bradesco", color: "bg-pink-500/10 text-pink-600 border-pink-500/30" },
  { id: "esfera", name: "Esfera", category: "Santander", color: "bg-red-500/10 text-red-600 border-red-500/30" },
  { id: "iupp", name: "Itaú / iupp", category: "Itaú Unibanco", color: "bg-orange-500/10 text-orange-600 border-orange-500/30" },
  { id: "atomos", name: "Átomos C6", category: "C6 Bank", color: "bg-zinc-800/10 text-zinc-800 dark:text-zinc-200 border-zinc-500/30" },
  { id: "nucoin", name: "Nucoin / Nubank", category: "Nubank", color: "bg-purple-500/10 text-purple-600 border-purple-500/30" },
  { id: "interloop", name: "Inter Loop", category: "Banco Inter", color: "bg-amber-500/10 text-amber-600 border-amber-500/30" },
  { id: "btgloop", name: "BTG Loop", category: "BTG Pactual", color: "bg-blue-600/10 text-blue-600 border-blue-600/30" },
  { id: "caixa", name: "Pontos CAIXA", category: "Caixa Econômica", color: "bg-cyan-500/10 text-cyan-600 border-cyan-500/30" },
  { id: "smiles", name: "Smiles", category: "GOL Aéreo", color: "bg-orange-600/10 text-orange-700 border-orange-600/30" },
  { id: "latampass", name: "LATAM Pass", category: "LATAM Aéreo", color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/30" },
  { id: "azul", name: "Azul Fidelidade", category: "Azul Aéreo", color: "bg-sky-500/10 text-sky-600 border-sky-500/30" },
  { id: "curtai", name: "CurtaÍ BRB", category: "BRB - Banco de Brasília", color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30" },
  { id: "banriclube", name: "Banriclube", category: "Banrisul", color: "bg-blue-700/10 text-blue-700 border-blue-700/30" },
  { id: "sicredi", name: "Sicredi / Sicoob", category: "Cooperativas de Crédito", color: "bg-teal-500/10 text-teal-600 border-teal-500/30" }
];
function LoyaltyProgramsCard() {
  const [selectedPrograms, setSelectedPrograms] = reactExports.useState(["livelo", "smiles", "iupp"]);
  const [pointsEstimate, setPointsEstimate] = reactExports.useState("10.000 a 50.000 pts");
  const [isSaved, setIsSaved] = reactExports.useState(false);
  const toggleProgram = (id) => {
    setSelectedPrograms(
      (prev) => prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
    setIsSaved(false);
  };
  const handleSave = () => {
    setIsSaved(true);
    toast.success("Programas de pontos declarados com sucesso! (+20 nfs bônus de perfil)");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5 shadow-sm space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-xl bg-purple-600/10 text-purple-600 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "size-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground", children: "Meus Programas de Fidelidade" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Declare onde possui pontos para receber campanhas exclusivas de transferência e acúmulo duplo." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 pt-1 max-h-72 overflow-y-auto pr-1 no-scrollbar", children: PARTNER_PROGRAMS.map((prog) => {
      const isSelected = selectedPrograms.includes(prog.id);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => toggleProgram(prog.id),
          className: `p-3 rounded-xl border text-left transition-all flex items-center justify-between ${isSelected ? "bg-purple-600/10 border-purple-600/40 ring-1 ring-purple-600/20" : "bg-muted/40 border-border hover:bg-muted"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-xs text-foreground", children: prog.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: prog.category })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `size-5 rounded-full grid place-items-center transition-colors ${isSelected ? "bg-purple-600 text-white" : "border border-muted-foreground/30"}`,
                children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "size-3.5" })
              }
            )
          ]
        },
        prog.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-border flex flex-col gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs font-semibold text-foreground flex justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Estimativa total de pontos acumulados nos bancos:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-600 font-bold", children: pointsEstimate })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          value: pointsEstimate,
          onChange: (e) => {
            setPointsEstimate(e.target.value);
            setIsSaved(false);
          },
          className: "w-full bg-muted border border-border rounded-xl px-3 py-2 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Até 10.000 pts", children: "Até 10.000 pts" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "10.000 a 50.000 pts", children: "10.000 a 50.000 pts" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "50.000 a 100.000 pts", children: "50.000 a 100.000 pts" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Acima de 100.000 pts", children: "Acima de 100.000 pts" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: handleSave,
        disabled: isSaved,
        className: `w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${isSaved ? "bg-zinc-800 text-zinc-400 cursor-not-allowed" : "bg-purple-600 text-white hover:bg-purple-700 shadow-md shadow-purple-600/20 active:scale-98"}`,
        children: isSaved ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "size-4 text-lime-400" }),
          "Programas Declarados (+20 nfs Creditados)"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4 text-lime-400" }),
          "Salvar Declaração de Pontos",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4" })
        ] })
      }
    ) })
  ] });
}
const RUNNING_SPORTS = ["Corrida de rua", "Trail running", "Maratona", "Triathlon", "Ciclismo", "Natação", "Caminhada", "Treino funcional", "Musculação", "Yoga"];
const HEALTH_PLANS = ["Sem plano", "Amil", "Bradesco Saúde", "SulAmérica", "Unimed", "Hapvida / NotreDame", "Porto Seguro Saúde", "Allianz Saúde", "Care Plus", "Omint"];
const GYMS = ["Não frequento", "Smart Fit", "Bio Ritmo", "Bodytech", "Companhia Athletica", "Selfit", "Just Fit", "Pratique", "Academia local / Independente"];
const WEARABLES = ["Não uso", "Apple Watch", "Garmin Forerunner", "Garmin Fenix", "Samsung Galaxy Watch", "Fitbit", "Polar", "Coros", "Suunto", "Amazfit", "Xiaomi Mi Band", "Outro"];
function ProfilePage() {
  const [form, setForm] = reactExports.useState({
    name: "Karina Lima",
    email: "karina.lima@email.com",
    phone: "+55 11 98765-4321",
    address: "Rua Augusta, 1200 — Consolação, São Paulo · SP",
    birthDate: "1985-03-14",
    sports: ["Corrida de rua", "Maratona", "Ciclismo", "Musculação"],
    otherSport: "",
    healthPlan: "SulAmérica",
    gym: "Smart Fit",
    coaching: "Pace Assessoria Esportiva — Treinador Rafael Souza",
    wearable: "Apple Watch"
  });
  const signup = {
    referrerName: "Kite Larsen",
    referrerCode: "KITE-7X2",
    date: "12/03/2026"
  };
  const myReferrals = {
    total: 12,
    active: 9,
    pending: 3,
    nfsEarned: 4820,
    bySource: [{
      label: "Compras no shop",
      value: 1840
    }, {
      label: "Atividades físicas",
      value: 1250
    }, {
      label: "Sono monitorado",
      value: 720
    }, {
      label: "Consultas e saúde",
      value: 610
    }, {
      label: "Vídeos e conteúdos",
      value: 400
    }],
    recent: [{
      name: "Marina Duarte",
      initials: "MD",
      date: "02/07/2026",
      status: "ativo"
    }, {
      name: "Rafael Souza",
      initials: "RS",
      date: "24/06/2026",
      status: "ativo"
    }, {
      name: "Bruno Tavares",
      initials: "BT",
      date: "11/06/2026",
      status: "pendente"
    }]
  };
  const [saved, setSaved] = reactExports.useState(false);
  function toggleSport(s) {
    setForm((f) => ({
      ...f,
      sports: f.sports.includes(s) ? f.sports.filter((x) => x !== s) : [...f.sports, s]
    }));
  }
  function handleSave(e) {
    e.preventDefault();
    const payload = {
      id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
      fullName: form.name,
      email: form.email,
      phone: form.phone,
      birthDate: form.birthDate,
      address: form.address,
      sports: form.sports.length > 0 ? form.sports : ["Corrida de rua"],
      healthPlan: form.healthPlan,
      gym: form.gym,
      wearable: form.wearable,
      coaching: form.coaching,
      consentTermsAccepted: true,
      consentWearablesData: true,
      consentPartnersOffers: true
    };
    const validation = validateUserData(payload);
    if (!validation.isValid) {
      toast.error("Erro na validação de dados de cadastro");
      return;
    }
    setSaved(true);
    toast.success("Dados de cadastro validados e salvos com integridade!");
    setTimeout(() => setSaved(false), 2400);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative bg-gradient-to-br from-foreground to-foreground/80 text-background px-4 pt-5 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "size-9 rounded-full bg-background/15 backdrop-blur grid place-items-center", "aria-label": "Voltar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-background/70", children: "Meu Perfil" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/auth", className: "text-[10px] font-bold px-3 py-1.5 rounded-full bg-purple-600 text-white flex items-center gap-1 shadow-sm hover:bg-purple-700 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "size-3" }),
        "Login / Sair"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 -mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-2xl ring-1 ring-black/5 p-5 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profileAvatar, alt: "Foto de Karina Lima", width: 88, height: 88, className: "size-22 w-22 h-22 rounded-full object-cover ring-4 ring-background shadow-lg", style: {
          width: 88,
          height: 88
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "absolute bottom-0 right-0 size-7 rounded-full bg-brand text-brand-foreground grid place-items-center ring-2 ring-background", "aria-label": "Alterar foto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "size-3.5" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-bold leading-tight truncate", children: form.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: form.email }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-widest bg-brand text-brand-foreground px-2 py-0.5 rounded-full", children: "Atleta" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-widest bg-muted text-foreground/70 px-2 py-0.5 rounded-full", children: "25.575 nfs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full flex items-center gap-1 ${"bg-foreground text-background"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "size-2.5" }),
            "Indicado"
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AssociadoDashboardCard, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoyaltyProgramsCard, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSave, className: "px-4 pt-5 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Origem do cadastro", icon: UserPlus, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-10 shrink-0 rounded-xl grid place-items-center ${"bg-brand text-brand-foreground"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold", children: "Cadastro por indicação" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Indicado por",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: signup.referrerName }),
              " ",
              "· código",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-semibold text-foreground", children: signup.referrerCode })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground mt-1", children: [
              "Entrou em ",
              signup.date
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground bg-muted rounded-xl px-3 py-2", children: [
          "Faz parte da tribo de ",
          signup.referrerName,
          " — sempre que você acumula netfits, ela também recebe."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Sua tribo", icon: Users, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground -mt-1", children: "Netfiters cadastrados a partir da sua indicação." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: myReferrals.total, label: "Indicados", highlight: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: myReferrals.active, label: "Ativos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: myReferrals.pending, label: "Pendentes" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted rounded-xl px-3 py-3 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: "Seus nfs gerados pelas atividades da tribo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold", children: [
              myReferrals.nfsEarned.toLocaleString("pt-BR"),
              " nfs"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 pt-1 border-t border-black/5", children: myReferrals.bySource.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-foreground/70", children: s.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-semibold tabular-nums", children: [
              "+",
              s.value.toLocaleString("pt-BR"),
              " nfs"
            ] })
          ] }, s.label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: myReferrals.recent.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-full bg-foreground text-background grid place-items-center text-[10px] font-bold", children: r.initials }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold truncate", children: r.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
              "Entrou em ",
              r.date
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${r.status === "ativo" ? "bg-brand text-brand-foreground" : "bg-muted text-foreground/60"}`, children: r.status })
        ] }, r.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Dados pessoais", icon: User, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nome completo", icon: User, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: form.name, onChange: (e) => setForm({
          ...form,
          name: e.target.value
        }), className: inputClass }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Data de nascimento", icon: Calendar, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: form.birthDate, onChange: (e) => setForm({
            ...form,
            birthDate: e.target.value
          }), className: inputClass }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Telefone", icon: Phone, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", value: form.phone, onChange: (e) => setForm({
            ...form,
            phone: e.target.value
          }), className: inputClass }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "E-mail", icon: Mail, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: form.email, onChange: (e) => setForm({
          ...form,
          email: e.target.value
        }), className: inputClass }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Endereço", icon: MapPin, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: form.address, onChange: (e) => setForm({
          ...form,
          address: e.target.value
        }), placeholder: "Rua, número, bairro, cidade · UF", className: inputClass }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Esportes praticados", icon: Activity, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground -mt-1 mb-1", children: "Selecione todos os esportes ligados à corrida e endurance que você pratica." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: RUNNING_SPORTS.map((s) => {
          const active = form.sports.includes(s);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => toggleSport(s), className: `text-xs font-semibold px-3 py-1.5 rounded-full ring-1 transition flex items-center gap-1 ${active ? "bg-brand text-brand-foreground ring-brand" : "bg-card text-foreground/80 ring-black/10 hover:ring-foreground/30"}`, children: [
            active && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3" }),
            s
          ] }, s);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Outro esporte", icon: Plus, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: form.otherSport, onChange: (e) => setForm({
          ...form,
          otherSport: e.target.value
        }), placeholder: "Ex.: escalada, remo, surf...", className: inputClass }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Plano de saúde", icon: Heart, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectChips, { options: HEALTH_PLANS, value: form.healthPlan, onChange: (v) => setForm({
        ...form,
        healthPlan: v
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Academia", icon: Dumbbell, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectChips, { options: GYMS, value: form.gym, onChange: (v) => setForm({
        ...form,
        gym: v
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Wearable", icon: Watch, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectChips, { options: WEARABLES, value: form.wearable, onChange: (v) => setForm({
        ...form,
        wearable: v
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Assessoria esportiva", icon: Users, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nome da assessoria e treinador", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 2, value: form.coaching, onChange: (e) => setForm({
        ...form,
        coaching: e.target.value
      }), placeholder: "Ex.: Pace Assessoria — Treinador João Silva", className: `${inputClass} resize-none` }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky bottom-24 pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full bg-foreground text-background text-sm font-bold py-3.5 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-foreground/20", children: saved ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4" }),
        "Salvo!"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "size-4" }),
        "Salvar perfil"
      ] }) }) })
    ] })
  ] });
}
const inputClass = "w-full bg-card ring-1 ring-black/10 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-brand transition";
function Card({
  title,
  icon: Icon,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-card rounded-2xl ring-1 ring-black/5 p-4 space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-7 rounded-lg bg-muted grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-3.5 text-foreground/70" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold", children: title })
    ] }),
    children
  ] });
}
function Field({
  label,
  icon: Icon,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1 mb-1", children: [
      Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-3" }),
      label
    ] }),
    children
  ] });
}
function SelectChips({
  options,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: options.map((o) => {
    const active = value === o;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => onChange(o), className: `text-xs font-semibold px-3 py-1.5 rounded-full ring-1 transition flex items-center gap-1 ${active ? "bg-foreground text-background ring-foreground" : "bg-card text-foreground/80 ring-black/10 hover:ring-foreground/30"}`, children: [
      active && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3" }),
      o
    ] }, o);
  }) });
}
function Stat({
  value,
  label,
  highlight
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl px-2 py-2.5 text-center ring-1 ${highlight ? "bg-brand text-brand-foreground ring-brand" : "bg-muted ring-black/5"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold leading-none", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold uppercase tracking-widest mt-1 opacity-70", children: label })
  ] });
}
export {
  ProfilePage as component
};
