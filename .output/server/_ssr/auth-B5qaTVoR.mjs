import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { a as nativeBridge, b as netfitsDarkLogo, s as sharedSandboxStore, w as wallet } from "./router-Dc9zLKRh.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { Q as UserPlus, a8 as LogIn, aa as TriangleAlert, ab as CircleAlert, U as User, a2 as Mail, d as Sparkles, a1 as Phone, ac as CreditCard, ad as Calendar, G as Gift, a as Award, a0 as CircleCheck, a7 as Lock, ae as EyeOff, l as Eye, j as ShieldCheck, c as ArrowRight, af as KeyRound, ag as CircleX } from "../_libs/lucide-react.mjs";

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
const EXISTING_DATABASE_USERS = [
  {
    id: "usr_101",
    fullName: "Kite Larsen",
    email: "atleta@netfits.com.br",
    phone: "11999998888",
    cpf: "12345678900",
    passwordHash: "Pass@1234",
    userCategory: "atleta",
    registeredAt: "2026-01-15T10:00:00Z"
  },
  {
    id: "usr_102",
    fullName: "André Gallo",
    email: "gallo@netfits.com.br",
    phone: "11987654321",
    cpf: "98765432111",
    passwordHash: "Netfits#2026",
    userCategory: "associado",
    registeredAt: "2026-02-01T14:30:00Z"
  },
  {
    id: "usr_103",
    fullName: "Dra. Isabella Santos",
    email: "isabella@netfits.com.br",
    phone: "11977776666",
    cpf: "45678912344",
    passwordHash: "Saude!2026",
    userCategory: "especialista",
    registeredAt: "2026-03-10T09:15:00Z"
  }
];
function cleanDigits(val) {
  return val.replace(/\D/g, "");
}
function detectIdentifierType(val) {
  const trimmed = val.trim();
  if (trimmed.includes("@") && trimmed.includes(".")) return "email";
  const digits = cleanDigits(trimmed);
  if (digits.length === 11) {
    if (/^\d{2}9\d{8}$/.test(digits)) return "phone";
    return "cpf";
  }
  if (digits.length >= 10 && digits.length <= 11) return "phone";
  return "unknown";
}
function validatePasswordRules(password) {
  const minLength = password.length >= 8;
  const hasNumber = /[0-9]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  const isValid = minLength && hasNumber && hasUppercase && hasLowercase && hasSpecial;
  return {
    minLength,
    hasNumber,
    hasUppercase,
    hasLowercase,
    hasSpecial,
    isValid
  };
}
let storedUsers = [...EXISTING_DATABASE_USERS];
let currentUser = EXISTING_DATABASE_USERS[0];
let authState = {
  currentUser: EXISTING_DATABASE_USERS[0],
  usersCount: EXISTING_DATABASE_USERS.length
};
const listeners = /* @__PURE__ */ new Set();
const emit = () => {
  authState = {
    currentUser,
    usersCount: storedUsers.length
  };
  listeners.forEach((l) => l());
};
const subscribe = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};
const getSnapshot = () => authState;
const SERVER_AUTH_STATE = {
  currentUser: null,
  usersCount: 0
};
const getServerSnapshot = () => SERVER_AUTH_STATE;
const authStore = {
  getCurrentUser: () => {
    const active = sharedSandboxStore.getActiveUser();
    return {
      id: active.id,
      fullName: active.fullName,
      email: active.identifier,
      phone: active.identifier.includes("@") ? "" : active.identifier,
      cpf: "",
      passwordHash: "Pass@1234",
      userCategory: active.type === "associado" ? "associado" : "atleta",
      registeredAt: active.registeredAt
    };
  },
  getStoredUsers: () => storedUsers,
  checkIdentifierExists(identifier) {
    const raw = identifier.trim().toLowerCase();
    const digits = cleanDigits(identifier);
    for (const u of storedUsers) {
      if (u.email.toLowerCase() === raw) {
        return { exists: true, matchedField: "email", matchedUser: u };
      }
      if (digits.length > 0) {
        if (cleanDigits(u.phone) === digits) {
          return { exists: true, matchedField: "phone", matchedUser: u };
        }
        if (cleanDigits(u.cpf) === digits) {
          return { exists: true, matchedField: "cpf", matchedUser: u };
        }
      }
    }
    const sandboxUsers = sharedSandboxStore.getUsers();
    for (const su of sandboxUsers) {
      if (su.identifier.toLowerCase() === raw || su.identifier.replace(/\D/g, "") === digits) {
        const adaptedUser = {
          id: su.id,
          fullName: su.fullName,
          email: su.identifier,
          phone: su.identifier.includes("@") ? "" : su.identifier,
          cpf: "",
          passwordHash: "Pass@1234",
          // senha padrao de homologacao
          userCategory: su.type === "associado" ? "associado" : "atleta",
          registeredAt: su.registeredAt
        };
        return { exists: true, matchedField: "email", matchedUser: adaptedUser };
      }
    }
    return { exists: false };
  },
  registerUser({
    identifier,
    password,
    fullName = "Novo Netfiter",
    referralCode
  }) {
    const check = this.checkIdentifierExists(identifier);
    if (check.exists) {
      const fieldLabel = check.matchedField === "email" ? "E-mail" : check.matchedField === "cpf" ? "CPF" : "Celular";
      return {
        success: false,
        error: `O ${fieldLabel} "${identifier}" já consta cadastrado em nosso banco de dados. Por favor, verifique as informações ou faça login na sua conta existente.`,
        isDuplicate: true,
        matchedField: check.matchedField
      };
    }
    const pwdRules = validatePasswordRules(password);
    if (!pwdRules.isValid) {
      return {
        success: false,
        error: "A senha precisa ser alfanumérica com 8+ caracteres, 1 maiúscula, 1 minúscula, 1 número e 1 especial."
      };
    }
    const regResult = sharedSandboxStore.registerAthlete({
      identifier,
      fullName,
      referralCode
    });
    if (!regResult.success || !regResult.user) {
      return { success: false, error: regResult.error || "Erro ao efetuar cadastro." };
    }
    const newUser = {
      id: regResult.user.id,
      fullName: regResult.user.fullName,
      email: regResult.user.identifier,
      phone: regResult.user.identifier.includes("@") ? "" : regResult.user.identifier,
      cpf: "",
      passwordHash: password,
      userCategory: "atleta",
      registeredAt: regResult.user.registeredAt
    };
    storedUsers.push(newUser);
    currentUser = newUser;
    sharedSandboxStore.setActiveUser(regResult.user.id);
    emit();
    wallet.earn(50, "Bônus de Boas-Vindas");
    if (referralCode) {
      toast.success(`🎉 Cadastro realizado! Indicação "${referralCode.toUpperCase()}" vinculada (+50 nfs bônus).`);
    } else {
      toast.success("🎉 Cadastro realizado com sucesso! Você ganhou +50 nfs bônus.");
    }
    return { success: true, user: newUser };
  },
  loginUser(identifier, password) {
    const check = this.checkIdentifierExists(identifier);
    if (!check.exists || !check.matchedUser) {
      return {
        success: false,
        error: "Usuário não encontrado. Verifique os dados digitados ou faça seu cadastro inicial."
      };
    }
    currentUser = check.matchedUser;
    sharedSandboxStore.setActiveUser(check.matchedUser.id);
    toast.success(`Bem-vindo de volta, ${check.matchedUser.fullName}!`);
    emit();
    return { success: true, user: currentUser };
  },
  logoutUser() {
    currentUser = null;
    toast.info("Você saiu da sua conta Netfits.");
    emit();
  }
};
function useAuth() {
  return reactExports.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
function formatCPF(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
}
function formatPhone(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}
const EMAIL_DOMAINS = ["@gmail.com", "@hotmail.com", "@outlook.com", "@yahoo.com.br", "@icloud.com"];
function applyEmailDomain(currentEmail, domain) {
  const atIndex = currentEmail.indexOf("@");
  const username = atIndex >= 0 ? currentEmail.slice(0, atIndex) : currentEmail;
  const cleanUser = username.trim() || "usuario";
  return `${cleanUser}${domain}`;
}
function AuthPage() {
  const navigate = useNavigate();
  const {
    currentUser: currentUser2
  } = useAuth();
  const [mode, setMode] = reactExports.useState("register");
  const [fullName, setFullName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [cpf, setCpf] = reactExports.useState("");
  const [birthDate, setBirthDate] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [confirmPassword, setConfirmPassword] = reactExports.useState("");
  const [referralCode, setReferralCode] = reactExports.useState("");
  const [isAutoFilledReferral, setIsAutoFilledReferral] = reactExports.useState(false);
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = reactExports.useState(false);
  const [showForgotPassword, setShowForgotPassword] = reactExports.useState(false);
  const [loginIdentifier, setLoginIdentifier] = reactExports.useState("");
  const [duplicateAlert, setDuplicateAlert] = reactExports.useState(null);
  const [formError, setFormError] = reactExports.useState(null);
  const [acceptedTerms, setAcceptedTerms] = reactExports.useState(false);
  const [acceptedLgpd, setAcceptedLgpd] = reactExports.useState(false);
  const [showTermsModal, setShowTermsModal] = reactExports.useState(false);
  const [showLgpdModal, setShowLgpdModal] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      nativeBridge.initDeepLinkListener((code) => {
        setReferralCode(code);
        setIsAutoFilledReferral(true);
      });
      const params = new URLSearchParams(window.location.search);
      const codeFromUrl = params.get("ref") || params.get("code") || params.get("referral") || nativeBridge.getStoredReferralCode();
      if (codeFromUrl) {
        const cleanCode = codeFromUrl.trim().toUpperCase();
        setReferralCode(cleanCode);
        setIsAutoFilledReferral(true);
        toast.info(`✨ Código de indicação "${cleanCode}" aplicado automaticamente!`);
      }
    }
  }, []);
  detectIdentifierType(loginIdentifier);
  const pwdRules = validatePasswordRules(password);
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setDuplicateAlert(null);
    setFormError(null);
    if (!fullName.trim() || fullName.trim().length < 3) {
      setFormError("Por favor, informe seu Nome Completo (mínimo 3 caracteres).");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setFormError("Por favor, informe um endereço de E-mail válido (ex: seu.nome@email.com).");
      return;
    }
    const phoneDigits = phone.replace(/\D/g, "");
    if (!phone.trim() || phoneDigits.length < 10) {
      setFormError("Por favor, informe seu número de Celular com DDD (ex: (11) 98765-4321).");
      return;
    }
    const cpfDigits = cpf.replace(/\D/g, "");
    if (!cpf.trim() || cpfDigits.length !== 11) {
      setFormError("Por favor, informe um CPF válido com 11 dígitos.");
      return;
    }
    if (!birthDate.trim()) {
      setFormError("Por favor, selecione sua Data de Nascimento.");
      return;
    }
    if (!pwdRules.isValid) {
      setFormError("A senha não preenche todos os critérios de segurança requeridos.");
      return;
    }
    if (confirmPassword !== password) {
      setFormError("As senhas digitadas não coincidem. Verifique o campo de confirmação.");
      return;
    }
    if (!acceptedTerms || !acceptedLgpd) {
      setFormError("Por favor, leia e aceite os Termos de Uso e o Consentimento LGPD para concluir seu cadastro.");
      return;
    }
    const res = sharedSandboxStore.registerAthlete({
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      cpf: cpf.trim(),
      birthDate: birthDate.trim(),
      referralCode: referralCode.trim()
    });
    if (!res.success) {
      if (res.isDuplicate) {
        setDuplicateAlert({
          show: true,
          message: res.error || `O ${res.matchedField || "dado"} informado já consta cadastrado em nosso banco de dados.`
        });
      } else {
        setFormError(res.error || "Falha ao realizar cadastro.");
      }
      return;
    }
    toast.success("🚀 Cadastro efetuado com sucesso! Bem-vindo ao Netfits.");
    navigate({
      to: "/"
    });
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setFormError(null);
    if (!loginIdentifier.trim() || !password) {
      setFormError("Preencha todos os campos para fazer login.");
      return;
    }
    const res = authStore.loginUser(loginIdentifier, password);
    if (!res.success) {
      setFormError(res.error || "Dados incorretos.");
      return;
    }
    navigate({
      to: "/"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background flex flex-col justify-center px-4 py-8 max-w-md mx-auto font-sans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-zinc-200 dark:bg-zinc-800 border-2 border-lime-400 rounded-2xl shadow-md mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: netfitsDarkLogo, alt: "Netfits", className: "h-9 w-auto object-contain shrink-0 rounded-lg shadow-xs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold tracking-tight text-2xl text-zinc-900 dark:text-white", children: "Netfits" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-black text-foreground tracking-tight", children: mode === "register" ? "Crie sua conta Netfits" : "Acesse sua conta" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground max-w-xs mx-auto", children: mode === "register" ? "Cadastre-se com seu E-mail, Celular ou CPF e receba +50 nfs bônus." : "Digite suas credenciais para continuar no aplicativo." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted p-1 rounded-2xl grid grid-cols-2 gap-1 mb-6 border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
        setMode("register");
        setDuplicateAlert(null);
        setFormError(null);
      }, className: `py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${mode === "register" ? "bg-purple-600 text-white shadow-md shadow-purple-600/20" : "text-muted-foreground hover:text-foreground"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "size-4" }),
        "Criar Conta"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
        setMode("login");
        setDuplicateAlert(null);
        setFormError(null);
      }, className: `py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${mode === "login" ? "bg-purple-600 text-white shadow-md shadow-purple-600/20" : "text-muted-foreground hover:text-foreground"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "size-4" }),
        "Entrar (Login)"
      ] })
    ] }),
    duplicateAlert && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 bg-red-500/10 border-2 border-red-500/40 rounded-2xl p-4 text-left space-y-3 animate-in fade-in slide-in-from-top-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-xl bg-red-600 text-white grid place-items-center shrink-0 font-bold shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "size-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-sm text-red-600 dark:text-red-400", children: "Cadastro Bloqueado: Usuário Já Existente" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/80 mt-1 leading-relaxed", children: duplicateAlert.message })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-red-500/20 flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          setMode("login");
          setDuplicateAlert(null);
        }, className: "w-full bg-red-600 text-white text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-1.5 shadow-sm hover:bg-red-700 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "size-3.5" }),
          "Efetuar Login no App"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setDuplicateAlert(null), className: "px-3 bg-muted text-foreground text-xs font-semibold rounded-xl border border-border", children: "Corrigir" })
      ] })
    ] }),
    formError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "size-4 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formError })
    ] }),
    mode === "register" && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleRegisterSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs font-bold text-foreground flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Nome Completo *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-purple-600 uppercase tracking-wider", children: "Obrigatório" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "size-4 text-purple-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: fullName, onChange: (e) => setFullName(e.target.value), placeholder: "Digite seu nome completo", className: "w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600", required: true })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs font-bold text-foreground flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "E-mail Exclusivo *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-purple-600 uppercase tracking-wider", children: "Obrigatório" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4 text-purple-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: email, onChange: (e) => {
            setEmail(e.target.value);
            setDuplicateAlert(null);
            setFormError(null);
          }, placeholder: "ex: seu.nome@email.com", className: "w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-1 space-y-1.5 bg-muted/40 p-2.5 rounded-xl border border-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-extrabold text-muted-foreground uppercase tracking-wider flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3 text-purple-600" }),
              " Complete Rápido seu E-mail:"
            ] }),
            email.includes("@") && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
              if (email.endsWith(".br")) {
                setEmail(email.slice(0, -3));
              } else {
                setEmail(`${email}.br`);
              }
            }, className: `text-[10px] font-extrabold px-2 py-0.5 rounded-md border transition active:scale-95 ${email.endsWith(".br") ? "bg-purple-600 text-white border-purple-600 shadow-xs" : "bg-card text-foreground border-border hover:bg-muted"}`, children: email.endsWith(".br") ? "Remover .br ✓" : "+ Incluir .br" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: EMAIL_DOMAINS.map((domain) => {
            const suggestedEmail = applyEmailDomain(email, domain);
            const isSelected = email.toLowerCase().endsWith(domain.toLowerCase());
            return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
              setEmail(suggestedEmail);
              setDuplicateAlert(null);
              setFormError(null);
            }, className: `text-[10px] font-bold px-2.5 py-1 rounded-lg border transition-all active:scale-95 flex items-center gap-1 ${isSelected ? "bg-purple-600 text-white border-purple-600 shadow-sm" : "bg-card hover:bg-muted text-foreground border-border"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: domain }) }, domain);
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs font-bold text-foreground flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Celular com DDD *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-purple-600 uppercase tracking-wider", children: "Obrigatório" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4 text-purple-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", value: phone, onChange: (e) => {
            setPhone(formatPhone(e.target.value));
            setDuplicateAlert(null);
            setFormError(null);
          }, placeholder: "(11) 98765-4321", className: "w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600", required: true })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs font-bold text-foreground flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "CPF (Somente Números) *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-purple-600 uppercase tracking-wider", children: "Obrigatório" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "size-4 text-purple-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: cpf, onChange: (e) => {
            setCpf(formatCPF(e.target.value));
            setDuplicateAlert(null);
            setFormError(null);
          }, placeholder: "123.456.789-00", className: "w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600", required: true })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs font-bold text-foreground flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Data de Nascimento *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-purple-600 uppercase tracking-wider", children: "Obrigatório" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "size-4 text-purple-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: birthDate, onChange: (e) => {
            setBirthDate(e.target.value);
            setFormError(null);
          }, className: "w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600", required: true })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs font-bold text-foreground flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "size-3.5 text-lime-500" }),
            "Código de Indicação / Cupom"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded-full border border-border", children: "Opcional" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "size-4 text-lime-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: referralCode, onChange: (e) => {
            setReferralCode(e.target.value.toUpperCase());
            setIsAutoFilledReferral(false);
          }, placeholder: "Ex: GALLO-NETFITS, MARINA-RUN...", className: "w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-xs font-mono font-bold text-foreground uppercase focus:outline-none focus:ring-2 focus:ring-purple-600" })
        ] }),
        referralCode ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] font-semibold text-lime-600 dark:text-lime-400 flex items-center gap-1 pt-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-3" }),
          isAutoFilledReferral ? `✨ Código de indicação "${referralCode}" aplicado automaticamente via link!` : `Indicação vinculada: ${referralCode}`
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Se você foi indicado por um parceiro ou amigo, insira o código acima." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-foreground", children: "Senha Alfanumérica *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "size-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: showPassword ? "text" : "password", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Crie sua senha alfanumérica", className: "w-full bg-card border border-border rounded-xl pl-10 pr-10 py-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowPassword((v) => !v), className: "absolute inset-y-0 right-0 pr-3.5 flex items-center text-muted-foreground hover:text-foreground", children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "size-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-3 space-y-2 text-[11px] shadow-2xs", children: [
        (() => {
          const score = [pwdRules.minLength, pwdRules.hasNumber, pwdRules.hasUppercase, pwdRules.hasLowercase, pwdRules.hasSpecial].filter(Boolean).length;
          const percentage = score / 5 * 100;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 pb-1 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-[10px] font-extrabold uppercase", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Medidor de Força da Senha:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: score <= 1 ? "text-red-500 font-extrabold" : score <= 3 ? "text-amber-500 font-extrabold" : score === 4 ? "text-lime-600 dark:text-lime-400 font-extrabold" : "text-purple-600 font-black", children: score <= 1 ? "Muito Fraca 🔴" : score <= 3 ? "Média 🟡" : score === 4 ? "Forte 🟢" : "Impenetrável 🟣" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full transition-all duration-300 rounded-full ${score <= 1 ? "bg-red-500" : score <= 3 ? "bg-amber-500" : score === 4 ? "bg-lime-500" : "bg-purple-600"}`, style: {
              width: `${percentage}%`
            } }) })
          ] });
        })(),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground text-[10px] uppercase tracking-wider", children: "Requisitos de Segurança da Senha:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordCheckRule, { label: "No mínimo 8 caracteres", valid: pwdRules.minLength }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordCheckRule, { label: "Pelo menos 1 número (0-9)", valid: pwdRules.hasNumber }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordCheckRule, { label: "Pelo menos 1 letra maiúscula (A-Z)", valid: pwdRules.hasUppercase }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordCheckRule, { label: "Pelo menos 1 letra minúscula (a-z)", valid: pwdRules.hasLowercase }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordCheckRule, { label: "Pelo menos 1 caractere especial (!@#$%...)", valid: pwdRules.hasSpecial })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-foreground", children: "Confirmar Senha de Acesso *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "size-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: showConfirmPassword ? "text" : "password", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), placeholder: "Digite novamente a mesma senha criada", className: `w-full bg-card border rounded-xl pl-10 pr-10 py-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 ${confirmPassword.length > 0 ? confirmPassword === password ? "border-lime-500/60 focus:ring-lime-500 ring-1 ring-lime-500/20" : "border-amber-500 focus:ring-amber-500 ring-1 ring-amber-500/20" : "border-border focus:ring-purple-600"}`, required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowConfirmPassword((v) => !v), className: "absolute inset-y-0 right-0 pr-3.5 flex items-center text-muted-foreground hover:text-foreground", children: showConfirmPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "size-4" }) })
        ] })
      ] }),
      confirmPassword.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-3 rounded-xl border text-[11px] font-semibold flex items-center gap-2.5 transition-all duration-300 animate-in fade-in slide-in-from-top-1 ${confirmPassword === password ? "bg-lime-500/10 border-lime-500/30 text-lime-600 dark:text-lime-400" : "bg-amber-500/10 border-amber-500/40 text-amber-600 dark:text-amber-400 shadow-sm"}`, children: confirmPassword === password ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-lime-500 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "As senhas coincidem perfeitamente! ✓" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "size-4 text-amber-500 shrink-0 animate-bounce" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "As senhas são diferentes uma da outra. Por favor, verifique a digitação." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-600/5 border border-purple-600/20 rounded-2xl p-3.5 space-y-3 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-xl bg-purple-600/10 text-purple-600 grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-extrabold text-foreground leading-tight", children: "Aceites Obrigatórios para Cadastro" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground mt-0.5 leading-normal", children: [
              "Para ativar o botão de cadastro e receber seus ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "+50 nfs bônus" }),
              ", leia e aceite os 2 termos abaixo:"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-1 border-t border-purple-600/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between bg-card p-2.5 rounded-xl border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold", children: [
              acceptedTerms ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-lime-500 shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-4 rounded-full border border-zinc-400 grid place-items-center text-[10px] font-bold text-zinc-500", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: acceptedTerms ? "text-lime-600 dark:text-lime-400 font-bold" : "text-foreground", children: "Termos de Uso do Programa" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowTermsModal(true), className: `text-[11px] font-bold px-3 py-1.5 rounded-lg transition ${acceptedTerms ? "bg-lime-500/15 text-lime-600 dark:text-lime-400 border border-lime-500/30" : "bg-purple-600 text-white hover:bg-purple-700 shadow-xs active:scale-95"}`, children: acceptedTerms ? "Concluído ✓" : "Ler & Aceitar" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between bg-card p-2.5 rounded-xl border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold", children: [
              acceptedLgpd ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-lime-500 shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-4 rounded-full border border-zinc-400 grid place-items-center text-[10px] font-bold text-zinc-500", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: acceptedLgpd ? "text-lime-600 dark:text-lime-400 font-bold" : "text-foreground", children: "Privacidade e LGPD" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
              if (!acceptedTerms) {
                toast.info("Por favor, leia e aceite primeiro os Termos de Uso do Programa.");
                setShowTermsModal(true);
              } else {
                setShowLgpdModal(true);
              }
            }, className: `text-[11px] font-bold px-3 py-1.5 rounded-lg transition ${acceptedLgpd ? "bg-lime-500/15 text-lime-600 dark:text-lime-400 border border-lime-500/30" : acceptedTerms ? "bg-purple-600 text-white hover:bg-purple-700 shadow-xs active:scale-95" : "bg-muted text-muted-foreground border border-border cursor-not-allowed opacity-60"}`, children: acceptedLgpd ? "Concluído ✓" : "Ler & Aceitar" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: !acceptedTerms || !acceptedLgpd, className: `w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${acceptedTerms && acceptedLgpd ? "bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-600/20 active:scale-98 cursor-pointer" : "bg-zinc-200 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 cursor-not-allowed border border-border shadow-none opacity-70"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: `size-4 ${acceptedTerms && acceptedLgpd ? "text-lime-400" : "text-zinc-400"}` }),
        "Cadastrar & Ganhar +50 nfs",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
      ] })
    ] }),
    mode === "login" && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLoginSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-foreground", children: "E-mail, Celular ou CPF *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "size-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: loginIdentifier, onChange: (e) => setLoginIdentifier(e.target.value), placeholder: "Seu e-mail, celular ou CPF", className: "w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600", required: true })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-foreground", children: "Senha *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setShowForgotPassword(true), className: "text-xs font-bold text-purple-600 hover:underline flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { className: "size-3.5" }),
            "Esqueceu sua senha?"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "size-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: showPassword ? "text" : "password", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Sua senha", className: "w-full bg-card border border-border rounded-xl pl-10 pr-10 py-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowPassword((v) => !v), className: "absolute inset-y-0 right-0 pr-3.5 flex items-center text-muted-foreground hover:text-foreground", children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "size-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full py-3.5 rounded-xl font-bold text-xs bg-purple-600 text-white hover:bg-purple-700 transition-all shadow-md shadow-purple-600/20 flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "size-4" }),
        "Entrar no Aplicativo"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: async () => {
        const res = await nativeBridge.triggerBiometricAuth();
        if (res.success) {
          authStore.loginUser("atleta@netfits.com.br", "Pass@1234");
          navigate({
            to: "/"
          });
        }
      }, className: "w-full py-2.5 rounded-xl font-bold text-xs bg-zinc-100 dark:bg-zinc-800 text-foreground border border-border hover:bg-zinc-200 dark:hover:bg-zinc-700 transition flex items-center justify-center gap-2 active:scale-98 shadow-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4 text-purple-600" }),
        "Entrar com Biometria / Face ID (Passkeys)"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-950/20 p-3 rounded-xl border border-purple-500/30 space-y-1 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold text-purple-300", children: "💡 Homologação e Testes:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-zinc-400", children: [
          "Cadastre sua própria conta acima com seu nome e e-mail ou utilize o ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-lime-400", children: "🧪 Painel de Homologação" }),
          " no canto da tela para alternar sessões."
        ] })
      ] })
    ] }),
    showForgotPassword && /* @__PURE__ */ jsxRuntimeExports.jsx(ForgotPasswordCard, { onClose: () => setShowForgotPassword(false) }),
    showTermsModal && /* @__PURE__ */ jsxRuntimeExports.jsx(TermsOfServiceModal, { onClose: () => setShowTermsModal(false), onAgree: () => {
      setAcceptedTerms(true);
      setShowTermsModal(false);
      setShowLgpdModal(true);
    } }),
    showLgpdModal && /* @__PURE__ */ jsxRuntimeExports.jsx(LgpdPrivacyModal, { onClose: () => setShowLgpdModal(false), onAgree: () => {
      setAcceptedLgpd(true);
      setShowLgpdModal(false);
      toast.success("✨ Aceites dos Termos de Uso e LGPD registrados! O botão de cadastro está liberado.");
    } })
  ] });
}
function PasswordCheckRule({
  label,
  valid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    valid ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-3.5 text-lime-500 shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "size-3.5 text-muted-foreground/40 shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: valid ? "text-lime-600 dark:text-lime-400 font-semibold" : "text-muted-foreground", children: label })
  ] });
}
function ForgotPasswordCard({
  onClose
}) {
  const [step, setStep] = reactExports.useState(1);
  const [identifier, setIdentifier] = reactExports.useState("");
  const [birthDate, setBirthDate] = reactExports.useState("");
  const [sport, setSport] = reactExports.useState("");
  const [healthOrGym, setHealthOrGym] = reactExports.useState("");
  const [error, setError] = reactExports.useState(null);
  const [maskedEmail, setMaskedEmail] = reactExports.useState("k*****@email.com");
  const handleStep1Submit = (e) => {
    e.preventDefault();
    if (!identifier.trim()) {
      setError("Por favor, digite seu E-mail, Celular ou CPF cadastrado.");
      return;
    }
    const check = authStore.checkIdentifierExists(identifier);
    if (!check.exists) {
      setError(`O e-mail/identificador "${identifier}" não consta em nossa base de cadastros. Verifique o dado digitado ou faça o seu cadastro.`);
      return;
    }
    setError(null);
    const targetEmail = check.matchedUser?.email || (identifier.includes("@") ? identifier : "atleta@netfits.com.br");
    const parts = targetEmail.split("@");
    setMaskedEmail(`${parts[0].slice(0, 2)}*****@${parts[1]}`);
    setStep(2);
  };
  const handleStep2Submit = (e) => {
    e.preventDefault();
    if (!birthDate || !sport || !healthOrGym) {
      setError("Confirme todos os dados cadastrais solicitados para liberar o envio do e-mail.");
      return;
    }
    setError(null);
    setStep(3);
    toast.success("Dados cadastrais confirmados! E-mail de redefinição enviado.");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-white text-zinc-900 rounded-3xl p-6 shadow-2xl border border-zinc-200 space-y-4 text-left", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-zinc-100 pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-xl bg-purple-600/15 text-purple-600 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { className: "size-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-extrabold text-zinc-900", children: "Recuperar Senha" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "size-8 rounded-full bg-zinc-100 hover:bg-zinc-200 grid place-items-center text-zinc-600 transition", "aria-label": "Fechar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "size-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-100 pb-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: step >= 1 ? "text-purple-600 font-extrabold" : "", children: "1. Conta" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "›" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: step >= 2 ? "text-purple-600 font-extrabold" : "", children: "2. Dados Cadastrais" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "›" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: step === 3 ? "text-purple-600 font-extrabold" : "", children: "3. Envio" })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-2 text-xs font-semibold text-amber-800", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "size-4 shrink-0 text-amber-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: error })
    ] }),
    step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleStep1Submit, className: "space-y-4 pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-600 leading-relaxed", children: "Informe seu E-mail, Celular ou CPF para darmos início à validação segura de dados cadastrais." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-zinc-900", children: "Identificador da Conta *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "size-4 text-purple-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: identifier, onChange: (e) => setIdentifier(e.target.value), placeholder: "Ex: atleta@netfits.com.br, CPF ou celular", className: "w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-10 pr-4 py-3 text-xs font-medium text-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white", required: true })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClose, className: "w-1/3 py-3 rounded-xl font-bold text-xs bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200 transition", children: "Cancelar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-2/3 py-3 rounded-xl font-bold text-xs bg-purple-600 text-white hover:bg-purple-700 transition-all shadow-md shadow-purple-600/20 flex items-center justify-center gap-1.5", children: [
          "Avançar",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
        ] })
      ] })
    ] }),
    step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleStep2Submit, className: "space-y-3.5 pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 border border-purple-200 rounded-2xl p-3 flex items-start gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-5 text-purple-600 shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-800 leading-snug", children: "Por segurança, confirme os dados cadastrais da sua conta para liberar o link por e-mail." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-zinc-900", children: "Data de Nascimento *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: birthDate, onChange: (e) => setBirthDate(e.target.value), className: "w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white", required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-zinc-900", children: "Modalidade Esportiva Principal *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: sport, onChange: (e) => setSport(e.target.value), className: "w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white", required: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Selecione sua modalidade principal..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "corrida", children: "Corrida de rua" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "maratona", children: "Maratona" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "trail", children: "Trail running" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ciclismo", children: "Ciclismo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "triathlon", children: "Triathlon" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "musculacao", children: "Musculação / Funcional" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "natacao", children: "Natação" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-zinc-900", children: "Plano de Saúde ou Academia *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: healthOrGym, onChange: (e) => setHealthOrGym(e.target.value), className: "w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white", required: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Selecione seu plano ou academia..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "sulamerica", children: "SulAmérica Saúde" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "bradesco", children: "Bradesco Saúde" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "unimed", children: "Unimed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "amil", children: "Amil" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "smartfit", children: "Smart Fit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "bioritmo", children: "Bio Ritmo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "bodytech", children: "Bodytech" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "outro", children: "Sem plano / Outro" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setStep(1), className: "w-1/3 py-3 rounded-xl font-bold text-xs bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200 transition", children: "Voltar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-2/3 py-3 rounded-xl font-bold text-xs bg-purple-600 text-white hover:bg-purple-700 transition-all shadow-md shadow-purple-600/20 flex items-center justify-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4 text-lime-400" }),
          "Validar e Enviar E-mail"
        ] })
      ] })
    ] }),
    step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-full bg-purple-100 text-purple-600 grid place-items-center mx-auto ring-4 ring-purple-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-8" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-extrabold text-zinc-900", children: "Link de Redefinição Enviado!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-600 mt-1.5 leading-relaxed", children: "Confirmamos a validação de seus dados cadastrais. Enviamos um e-mail com o link de cadastramento de senha nova para:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono font-bold text-purple-700 bg-purple-50 rounded-lg py-2 px-3 mt-2.5 border border-purple-200", children: maskedEmail })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-50 p-3.5 rounded-2xl border border-zinc-200 text-[11px] text-zinc-600 space-y-1 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-zinc-900", children: "📌 Informações Importantes:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "• O link de cadastramento expira em ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "15 minutos" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Verifique também sua caixa de Spam ou Lixo Eletrônico." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "w-full py-3.5 rounded-xl font-bold text-xs bg-purple-600 text-white hover:bg-purple-700 transition-all shadow-md shadow-purple-600/20", children: "Voltar ao Login" })
    ] })
  ] }) });
}
function TermsOfServiceModal({
  onClose,
  onAgree
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-lg bg-white text-zinc-900 rounded-3xl p-6 shadow-2xl border border-zinc-200 space-y-4 max-h-[88vh] flex flex-col text-left", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-zinc-200 pb-3 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-xl bg-purple-600/10 text-purple-600 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-extrabold text-zinc-900", children: "Termos & Condições de Uso" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-500 font-bold uppercase tracking-wider", children: "Passo 1 de 2 · Programa Netfits" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "size-8 rounded-full bg-zinc-100 hover:bg-zinc-200 grid place-items-center text-zinc-600 transition font-bold", children: "✕" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto space-y-3.5 pr-2 text-xs text-zinc-700 leading-relaxed border-b border-zinc-200 pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 p-3 rounded-2xl border border-purple-100 text-[11px] text-purple-900", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", children: "📌 Resumo dos Termos:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Este documento estabelece as regras de participação no Programa de Recompensas Netfits, acúmulo e resgate de pontos (nfs)." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-zinc-900 text-sm", children: "1. Objeto do Programa" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "O Programa Netfits é um ecossistema digital de recompensas operado pela Netfits Fidelidade Ltda., destinado a incentivar a prática regular de atividades físicas, a nutrição saudável e hábitos de longevidade." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-zinc-900 text-sm", children: "2. Regras de Acúmulo de Pontos (nfs)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Os pontos denominados ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: '"netfits" (nfs)' }),
        " são concedidos aos atletas cadastrados mediante:"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Interações válidas e publicações no Feed do aplicativo;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Manutenção de consistência em treinos e rotinas de prevenção;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Validação presencial por catracas em redes de academias parceiras (ex: Smart Fit);" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Sincronização voluntária de dados esportivos via wearables (Garmin, Apple Watch, Strava);" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Indicação de novos usuários cadastrados com seu código pessoal (+50 nfs)." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-zinc-900 text-sm", children: "3. Regras de Resgate no Netfits Shop" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Cada ponto ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "1 nfs equivale a R$ 0,02 (dois centavos)" }),
        " para fins de abatimento ou pagamento no Netfits Shop. Os pontos acumulados não possuem valor em moeda corrente fora da plataforma, não geram rendimentos financeiros e são inalienáveis e intransferíveis entre contas pessoais."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-zinc-900 text-sm", children: "4. Código de Conduta e Fraudes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Fica estritamente proibida a utilização de robôs, rotinas automatizadas, adulteração de dados GPS ou contas falsas para geração indevida de nfs. O descumprimento resultará no cancelamento imediato dos pontos e no banimento definitivo da conta." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-zinc-900 text-sm", children: "5. Alterações nos Termos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A Netfits reserva-se o direito de ajustar as regras de multiplicadores e elegibilidade do programa mediante notificação prévia de 30 dias na plataforma." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 pt-2 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onAgree, className: "w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 transition shadow-md shadow-purple-600/20 active:scale-98", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-lime-400" }),
        "Eu concordo com os Termos de Uso (Ir para Passo 2)"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-center text-zinc-500", children: 'Ao clicar em "Eu concordo", você será direcionado para o Consentimento LGPD.' })
    ] })
  ] }) });
}
function LgpdPrivacyModal({
  onClose,
  onAgree
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-lg bg-white text-zinc-900 rounded-3xl p-6 shadow-2xl border border-zinc-200 space-y-4 max-h-[88vh] flex flex-col text-left", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-zinc-200 pb-3 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-xl bg-lime-500/15 text-lime-600 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-extrabold text-zinc-900", children: "Consentimento LGPD & Privacidade" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-500 font-bold uppercase tracking-wider", children: "Passo 2 de 2 · Lei Federal nº 13.709/2018" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "size-8 rounded-full bg-zinc-100 hover:bg-zinc-200 grid place-items-center text-zinc-600 transition font-bold", children: "✕" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto space-y-3.5 pr-2 text-xs text-zinc-700 leading-relaxed border-b border-zinc-200 pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-lime-50 p-3 rounded-2xl border border-lime-200 text-[11px] text-lime-950", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", children: "🔒 Transparência com seus Dados:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Respeitamos sua privacidade. Seus dados cadastrais e métricas esportivas são tratados com sigilo rigoroso e segurança de nível bancário." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-zinc-900 text-sm", children: "1. Controlador e Finalidade do Tratamento" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "A ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Netfits Fidelidade Ltda." }),
        " atua como Controladora dos dados pessoais coletados. Os dados fornecidos no cadastro (Nome, E-mail, Celular, CPF e Senha) são tratados com as finalidades de:"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Autenticação segura da conta e prevenção contra acessos não autorizados;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Cálculo preciso do saldo de pontos netfits (nfs) e auditoria de recompensas;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Emissão de comprovantes de resgate e entrega de produtos no Netfits Shop." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-zinc-900 text-sm", children: "2. Tratamento de Dados Esportivos e de Saúde" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "A sincronização de métricas esportivas (frequência cardíaca, distância, zonas de treino e sono) via relógios e apps parceiros (Garmin, Apple Watch, Strava) ocorre ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "exclusivamente mediante consentimento explícito" }),
        " do titular, sendo utilizada unicamente para atestar a consistência esportiva e conceder nfs bônus."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-zinc-900 text-sm", children: "3. Não Compartilhamento Sem Autorização" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "A Netfits ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "não vende, não aluga e não compartilha" }),
        " seus dados pessoais ou históricos de treino com corretores de seguros, empresas de telemarketing ou terceiros não relacionados. O compartilhamento ocorre apenas com parceiros logísticos de entrega (ex: Netshoes, Asics) estritamente necessários para o despacho de pedidos realizados por você no Shop."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-zinc-900 text-sm", children: "4. Direitos do Titular (Art. 18 da LGPD)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Como titular dos dados, você pode a qualquer momento: a) Confirmar a existência de tratamento; b) Acessar e corrigir seus dados; c) Revogar este consentimento; d) Solicitar a exclusão definitiva de sua conta e dados dos nossos servidores pelo canal dpo@netfits.com.br." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 pt-2 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onAgree, className: "w-full bg-lime-500 hover:bg-lime-400 text-zinc-950 font-extrabold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 transition shadow-md active:scale-98", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4" }),
        "Eu concordo com o Tratamento de Dados (LGPD)"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-center text-zinc-500", children: "Ao aceitar, os 2 aceites estarão validados e o cadastro será habilitado." })
    ] })
  ] }) });
}
export {
  AuthPage as component
};
