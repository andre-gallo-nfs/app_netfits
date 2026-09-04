import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  User, Lock, Mail, Phone, CreditCard, ShieldCheck, AlertCircle,
  CheckCircle2, XCircle, Eye, EyeOff, Sparkles, ArrowRight, KeyRound,
  LogIn, UserPlus, AlertTriangle, Award, Gift, Calendar
} from "lucide-react";
import netfitsDarkLogo from "@/assets/netfits-logo-dark.png";
import {
  authStore,
  detectIdentifierType,
  validatePasswordRules,
  useAuth,
} from "@/lib/auth-store";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { nativeBridge } from "@/lib/native-bridge";
import { toast } from "sonner";

function formatCPF(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

const EMAIL_DOMAINS = [
  "@gmail.com",
  "@hotmail.com",
  "@outlook.com",
  "@yahoo.com.br",
  "@icloud.com",
];

function applyEmailDomain(currentEmail: string, domain: string): string {
  const atIndex = currentEmail.indexOf("@");
  const username = atIndex >= 0 ? currentEmail.slice(0, atIndex) : currentEmail;
  const cleanUser = username.trim() || "usuario";
  return `${cleanUser}${domain}`;
}

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Cadastro & Login — Netfits" },
      {
        name: "description",
        content: "Crie sua conta ou faça login no aplicativo Netfits.",
      },
      { property: "og:title", content: "Cadastro & Login — Netfits" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [mode, setMode] = useState<"register" | "login">("register");

  // Campos de Cadastro Separados & Obrigatórios
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [isAutoFilledReferral, setIsAutoFilledReferral] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  // Campo Flexível para Login
  const [loginIdentifier, setLoginIdentifier] = useState("");

  // Status de Erros & Alerta de Duplicidade
  const [duplicateAlert, setDuplicateAlert] = useState<{
    show: boolean;
    message: string;
  } | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Estados para Aceite Obrigatório dos Termos e LGPD
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedLgpd, setAcceptedLgpd] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showLgpdModal, setShowLgpdModal] = useState(false);

  // Ler código de indicação vindo da URL ou de Deep Links Nativos (App Store / Universal Links)
  useEffect(() => {
    if (typeof window !== "undefined") {
      nativeBridge.initDeepLinkListener((code) => {
        setReferralCode(code);
        setIsAutoFilledReferral(true);
      });

      const params = new URLSearchParams(window.location.search);
      const codeFromUrl =
        params.get("ref") ||
        params.get("code") ||
        params.get("referral") ||
        nativeBridge.getStoredReferralCode();

      if (codeFromUrl) {
        const cleanCode = codeFromUrl.trim().toUpperCase();
        setReferralCode(cleanCode);
        setIsAutoFilledReferral(true);
        toast.info(`✨ Código de indicação "${cleanCode}" aplicado automaticamente!`);
      }
    }
  }, []);

  const loginIdentifierType = detectIdentifierType(loginIdentifier);
  const pwdRules = validatePasswordRules(password);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDuplicateAlert(null);
    setFormError(null);

    // 1. Nome Completo Obrigatório
    if (!fullName.trim() || fullName.trim().length < 3) {
      setFormError("Por favor, informe seu Nome Completo (mínimo 3 caracteres).");
      return;
    }

    // 2. E-mail Exclusivo Obrigatório
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setFormError("Por favor, informe um endereço de E-mail válido (ex: seu.nome@email.com).");
      return;
    }

    // 3. Celular com DDD Obrigatório
    const phoneDigits = phone.replace(/\D/g, "");
    if (!phone.trim() || phoneDigits.length < 10) {
      setFormError("Por favor, informe seu número de Celular com DDD (ex: (11) 98765-4321).");
      return;
    }

    // 4. CPF Obrigatório (11 dígitos)
    const cpfDigits = cpf.replace(/\D/g, "");
    if (!cpf.trim() || cpfDigits.length !== 11) {
      setFormError("Por favor, informe um CPF válido com 11 dígitos.");
      return;
    }

    // 5. Data de Nascimento Obrigatória
    if (!birthDate.trim()) {
      setFormError("Por favor, selecione sua Data de Nascimento.");
      return;
    }

    // 6. Regras de Senha Alfanumérica
    if (!pwdRules.isValid) {
      setFormError("A senha não preenche todos os critérios de segurança requeridos.");
      return;
    }

    // 7. Confirmação de Senha
    if (confirmPassword !== password) {
      setFormError("As senhas digitadas não coincidem. Verifique o campo de confirmação.");
      return;
    }

    // 8. Aceite de Termos e LGPD
    if (!acceptedTerms || !acceptedLgpd) {
      setFormError("Por favor, leia e aceite os Termos de Uso e o Consentimento LGPD para concluir seu cadastro.");
      return;
    }

    // Tentar cadastrar no sharedSandboxStore
    const res = sharedSandboxStore.registerAthlete({
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      cpf: cpf.trim(),
      birthDate: birthDate.trim(),
      referralCode: referralCode.trim(),
    });

    if (!res.success) {
      if (res.isDuplicate) {
        setDuplicateAlert({
          show: true,
          message: res.error || `O ${res.matchedField || "dado"} informado já consta cadastrado em nosso banco de dados.`,
        });
      } else {
        setFormError(res.error || "Falha ao realizar cadastro.");
      }
      return;
    }

    // Sucesso no cadastro
    toast.success("🚀 Cadastro efetuado com sucesso! Bem-vindo ao Netfits.");
    navigate({ to: "/" });
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
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

    navigate({ to: "/" });
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-center px-4 py-8 max-w-md mx-auto font-sans">
      {/* Header Branding (Logo verde no fundo preto e marca Netfits em preto no fundo branco) */}
      <div className="text-center mb-6 space-y-2">
        <div className="inline-flex items-center justify-center gap-2.5 mb-2">
          <img
            src={netfitsDarkLogo}
            alt="Netfits"
            className="h-10 w-auto object-contain shrink-0 rounded-lg shadow-sm"
          />
          <span className="font-extrabold tracking-tight text-3xl text-zinc-900">
            Netfits
          </span>
        </div>
        <h1 className="text-2xl font-black text-zinc-900 tracking-tight">
          {mode === "register" ? "Crie sua conta Netfits" : "Acesse sua conta"}
        </h1>
        <p className="text-xs text-zinc-500 max-w-xs mx-auto">
          {mode === "register"
            ? "Cadastre-se com seu E-mail, Celular ou CPF e receba +50 nfs bônus."
            : "Digite suas credenciais para continuar no aplicativo."}
        </p>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="bg-muted p-1 rounded-2xl grid grid-cols-2 gap-1 mb-6 border border-border">
        <button
          onClick={() => {
            setMode("register");
            setDuplicateAlert(null);
            setFormError(null);
          }}
          className={`py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
            mode === "register"
              ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <UserPlus className="size-4" />
          Criar Conta
        </button>
        <button
          onClick={() => {
            setMode("login");
            setDuplicateAlert(null);
            setFormError(null);
          }}
          className={`py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
            mode === "login"
              ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <LogIn className="size-4" />
          Entrar (Login)
        </button>
      </div>

      {/* Duplicate User Alert Card (BARRAR CADASTRO) */}
      {duplicateAlert && (
        <div className="mb-5 bg-red-500/10 border-2 border-red-500/40 rounded-2xl p-4 text-left space-y-3 animate-in fade-in slide-in-from-top-2">
          <div className="flex items-start gap-3">
            <div className="size-9 rounded-xl bg-red-600 text-white grid place-items-center shrink-0 font-bold shadow-md">
              <AlertTriangle className="size-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-red-600 dark:text-red-400">
                Cadastro Bloqueado: Usuário Já Existente
              </h3>
              <p className="text-xs text-foreground/80 mt-1 leading-relaxed">
                {duplicateAlert.message}
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-red-500/20 flex gap-2">
            <button
              onClick={() => {
                setMode("login");
                setDuplicateAlert(null);
              }}
              className="w-full bg-red-600 text-white text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-1.5 shadow-sm hover:bg-red-700 transition"
            >
              <LogIn className="size-3.5" />
              Efetuar Login no App
            </button>
            <button
              onClick={() => setDuplicateAlert(null)}
              className="px-3 bg-muted text-foreground text-xs font-semibold rounded-xl border border-border"
            >
              Corrigir
            </button>
          </div>
        </div>
      )}

      {/* General Form Error Alert */}
      {formError && (
        <div className="mb-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400">
          <AlertCircle className="size-4 shrink-0" />
          <span>{formError}</span>
        </div>
      )}

      {/* Registration Form */}
      {mode === "register" && (
        <form onSubmit={handleRegisterSubmit} className="space-y-4">
          {/* Nome Completo */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-foreground flex items-center justify-between">
              <span>Nome Completo *</span>
              <span className="text-[10px] font-semibold text-purple-600 uppercase tracking-wider">Obrigatório</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
                <User className="size-4 text-purple-600" />
              </div>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Digite seu nome completo"
                className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
          </div>

          {/* E-mail Exclusivo com Sugestões de Domínio Rápido */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-foreground flex items-center justify-between">
              <span>E-mail Exclusivo *</span>
              <span className="text-[10px] font-semibold text-purple-600 uppercase tracking-wider">Obrigatório</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
                <Mail className="size-4 text-purple-600" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setDuplicateAlert(null);
                  setFormError(null);
                }}
                placeholder="ex: seu.nome@email.com"
                className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>

            {/* Sugestões de Domínios Rápido (@gmail.com, @hotmail.com, @outlook.com, etc.) */}
            <div className="pt-1 space-y-1.5 bg-muted/40 p-2.5 rounded-xl border border-border/60">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="size-3 text-purple-600" /> Complete Rápido seu E-mail:
                </span>
                {email.includes("@") && (
                  <button
                    type="button"
                    onClick={() => {
                      if (email.endsWith(".br")) {
                        setEmail(email.slice(0, -3));
                      } else {
                        setEmail(`${email}.br`);
                      }
                    }}
                    className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md border transition active:scale-95 ${
                      email.endsWith(".br")
                        ? "bg-purple-600 text-white border-purple-600 shadow-xs"
                        : "bg-card text-foreground border-border hover:bg-muted"
                    }`}
                  >
                    {email.endsWith(".br") ? "Remover .br ✓" : "+ Incluir .br"}
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {EMAIL_DOMAINS.map((domain) => {
                  const suggestedEmail = applyEmailDomain(email, domain);
                  const isSelected = email.toLowerCase().endsWith(domain.toLowerCase());
                  return (
                    <button
                      key={domain}
                      type="button"
                      onClick={() => {
                        setEmail(suggestedEmail);
                        setDuplicateAlert(null);
                        setFormError(null);
                      }}
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border transition-all active:scale-95 flex items-center gap-1 ${
                        isSelected
                          ? "bg-purple-600 text-white border-purple-600 shadow-sm"
                          : "bg-card hover:bg-muted text-foreground border-border"
                      }`}
                    >
                      <span>{domain}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Celular com DDD */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-foreground flex items-center justify-between">
              <span>Celular com DDD *</span>
              <span className="text-[10px] font-semibold text-purple-600 uppercase tracking-wider">Obrigatório</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
                <Phone className="size-4 text-purple-600" />
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(formatPhone(e.target.value));
                  setDuplicateAlert(null);
                  setFormError(null);
                }}
                placeholder="(11) 98765-4321"
                className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
          </div>

          {/* CPF */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-foreground flex items-center justify-between">
              <span>CPF (Somente Números) *</span>
              <span className="text-[10px] font-semibold text-purple-600 uppercase tracking-wider">Obrigatório</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
                <CreditCard className="size-4 text-purple-600" />
              </div>
              <input
                type="text"
                value={cpf}
                onChange={(e) => {
                  setCpf(formatCPF(e.target.value));
                  setDuplicateAlert(null);
                  setFormError(null);
                }}
                placeholder="123.456.789-00"
                className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
          </div>

          {/* Data de Nascimento */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-foreground flex items-center justify-between">
              <span>Data de Nascimento *</span>
              <span className="text-[10px] font-semibold text-purple-600 uppercase tracking-wider">Obrigatório</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
                <Calendar className="size-4 text-purple-600" />
              </div>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => {
                  setBirthDate(e.target.value);
                  setFormError(null);
                }}
                className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
          </div>

          {/* Campo Código de Indicação (Não Obrigatório / Preenchido Automático se houver link) */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-foreground flex justify-between items-center">
              <span className="flex items-center gap-1">
                <Gift className="size-3.5 text-lime-500" />
                Código de Indicação / Cupom
              </span>
              <span className="text-[10px] font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded-full border border-border">
                Opcional
              </span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
                <Award className="size-4 text-lime-500" />
              </div>
              <input
                type="text"
                value={referralCode}
                onChange={(e) => {
                  setReferralCode(e.target.value.toUpperCase());
                  setIsAutoFilledReferral(false);
                }}
                placeholder="Ex: GALLO-NETFITS, MARINA-RUN..."
                className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-xs font-mono font-bold text-foreground uppercase focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            {referralCode ? (
              <p className="text-[10px] font-semibold text-lime-600 dark:text-lime-400 flex items-center gap-1 pt-0.5">
                <CheckCircle2 className="size-3" />
                {isAutoFilledReferral
                  ? `✨ Código de indicação "${referralCode}" aplicado automaticamente via link!`
                  : `Indicação vinculada: ${referralCode}`}
              </p>
            ) : (
              <p className="text-[10px] text-muted-foreground">
                Se você foi indicado por um parceiro ou amigo, insira o código acima.
              </p>
            )}
          </div>

          {/* Campo Senha com Toggle */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-foreground">Senha Alfanumérica *</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
                <Lock className="size-4" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Crie sua senha alfanumérica"
                className="w-full bg-card border border-border rounded-xl pl-10 pr-10 py-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>

          {/* Interactive Password Strength Checklist & Entropy Gauge (Sempre Visível) */}
          <div className="bg-card border border-border rounded-xl p-3 space-y-2 text-[11px] shadow-2xs">
            {/* Dynamic Strength Gauge */}
            {(() => {
              const score = [
                pwdRules.minLength,
                pwdRules.hasNumber,
                pwdRules.hasUppercase,
                pwdRules.hasLowercase,
                pwdRules.hasSpecial,
              ].filter(Boolean).length;
              const percentage = (score / 5) * 100;
              return (
                <div className="space-y-1 pb-1 border-b border-border">
                  <div className="flex justify-between items-center text-[10px] font-extrabold uppercase">
                    <span className="text-muted-foreground">Medidor de Força da Senha:</span>
                    <span className={
                      score <= 1 ? "text-red-500 font-extrabold" : score <= 3 ? "text-amber-500 font-extrabold" : score === 4 ? "text-lime-600 dark:text-lime-400 font-extrabold" : "text-purple-600 font-black"
                    }>
                      {score <= 1 ? "Muito Fraca 🔴" : score <= 3 ? "Média 🟡" : score === 4 ? "Forte 🟢" : "Impenetrável 🟣"}
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 rounded-full ${
                        score <= 1 ? "bg-red-500" : score <= 3 ? "bg-amber-500" : score === 4 ? "bg-lime-500" : "bg-purple-600"
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })()}
            <p className="font-bold text-foreground text-[10px] uppercase tracking-wider">
              Requisitos de Segurança da Senha:
            </p>
            <PasswordCheckRule label="No mínimo 8 caracteres" valid={pwdRules.minLength} />
            <PasswordCheckRule label="Pelo menos 1 número (0-9)" valid={pwdRules.hasNumber} />
            <PasswordCheckRule label="Pelo menos 1 letra maiúscula (A-Z)" valid={pwdRules.hasUppercase} />
            <PasswordCheckRule label="Pelo menos 1 letra minúscula (a-z)" valid={pwdRules.hasLowercase} />
            <PasswordCheckRule label="Pelo menos 1 caractere especial (!@#$%...)" valid={pwdRules.hasSpecial} />
          </div>

          {/* Campo Confirmar Senha com Toggle */}
          <div className="space-y-1.5 pt-1">
            <label className="text-xs font-bold text-foreground">Confirmar Senha de Acesso *</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
                <Lock className="size-4" />
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Digite novamente a mesma senha criada"
                className={`w-full bg-card border rounded-xl pl-10 pr-10 py-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 ${
                  confirmPassword.length > 0
                    ? confirmPassword === password
                      ? "border-lime-500/60 focus:ring-lime-500 ring-1 ring-lime-500/20"
                      : "border-amber-500 focus:ring-amber-500 ring-1 ring-amber-500/20"
                    : "border-border focus:ring-purple-600"
                }`}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((v) => !v)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-muted-foreground hover:text-foreground"
              >
                {showConfirmPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>

          {/* Alerta Móvel / Mensagem Dinâmica de Comparação de Senhas */}
          {confirmPassword.length > 0 && (
            <div
              className={`p-3 rounded-xl border text-[11px] font-semibold flex items-center gap-2.5 transition-all duration-300 animate-in fade-in slide-in-from-top-1 ${
                confirmPassword === password
                  ? "bg-lime-500/10 border-lime-500/30 text-lime-600 dark:text-lime-400"
                  : "bg-amber-500/10 border-amber-500/40 text-amber-600 dark:text-amber-400 shadow-sm"
              }`}
            >
              {confirmPassword === password ? (
                <>
                  <CheckCircle2 className="size-4 text-lime-500 shrink-0" />
                  <span>As senhas coincidem perfeitamente! ✓</span>
                </>
              ) : (
                <>
                  <AlertTriangle className="size-4 text-amber-500 shrink-0 animate-bounce" />
                  <span>As senhas são diferentes uma da outra. Por favor, verifique a digitação.</span>
                </>
              )}
            </div>
          )}

          {/* Card de Aceite Obrigatório dos Termos de Uso e LGPD */}
          <div className="bg-purple-600/5 border border-purple-600/20 rounded-2xl p-3.5 space-y-3 text-left">
            <div className="flex items-start gap-2.5">
              <div className="size-8 rounded-xl bg-purple-600/10 text-purple-600 grid place-items-center shrink-0">
                <ShieldCheck className="size-4" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-foreground leading-tight">
                  Aceites Obrigatórios para Cadastro
                </p>
                <p className="text-[11px] text-muted-foreground mt-0.5 leading-normal">
                  Para ativar o botão de cadastro e receber seus <b>+50 nfs bônus</b>, leia e aceite os 2 termos abaixo:
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-1 border-t border-purple-600/10">
              {/* Passo 1: Termos de Uso */}
              <div className="flex items-center justify-between bg-card p-2.5 rounded-xl border border-border">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  {acceptedTerms ? (
                    <CheckCircle2 className="size-4 text-lime-500 shrink-0" />
                  ) : (
                    <span className="size-4 rounded-full border border-zinc-400 grid place-items-center text-[10px] font-bold text-zinc-500">1</span>
                  )}
                  <span className={acceptedTerms ? "text-lime-600 dark:text-lime-400 font-bold" : "text-foreground"}>
                    Termos de Uso do Programa
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowTermsModal(true)}
                  className={`text-[11px] font-bold px-3 py-1.5 rounded-lg transition ${
                    acceptedTerms
                      ? "bg-lime-500/15 text-lime-600 dark:text-lime-400 border border-lime-500/30"
                      : "bg-purple-600 text-white hover:bg-purple-700 shadow-xs active:scale-95"
                  }`}
                >
                  {acceptedTerms ? "Concluído ✓" : "Ler & Aceitar"}
                </button>
              </div>

              {/* Passo 2: Consentimento LGPD */}
              <div className="flex items-center justify-between bg-card p-2.5 rounded-xl border border-border">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  {acceptedLgpd ? (
                    <CheckCircle2 className="size-4 text-lime-500 shrink-0" />
                  ) : (
                    <span className="size-4 rounded-full border border-zinc-400 grid place-items-center text-[10px] font-bold text-zinc-500">2</span>
                  )}
                  <span className={acceptedLgpd ? "text-lime-600 dark:text-lime-400 font-bold" : "text-foreground"}>
                    Privacidade e LGPD
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (!acceptedTerms) {
                      toast.info("Por favor, leia e aceite primeiro os Termos de Uso do Programa.");
                      setShowTermsModal(true);
                    } else {
                      setShowLgpdModal(true);
                    }
                  }}
                  className={`text-[11px] font-bold px-3 py-1.5 rounded-lg transition ${
                    acceptedLgpd
                      ? "bg-lime-500/15 text-lime-600 dark:text-lime-400 border border-lime-500/30"
                      : acceptedTerms
                      ? "bg-purple-600 text-white hover:bg-purple-700 shadow-xs active:scale-95"
                      : "bg-muted text-muted-foreground border border-border cursor-not-allowed opacity-60"
                  }`}
                >
                  {acceptedLgpd ? "Concluído ✓" : "Ler & Aceitar"}
                </button>
              </div>
            </div>
          </div>

          {/* Botão de Submissão de Cadastro */}
          <button
            type="submit"
            disabled={!acceptedTerms || !acceptedLgpd}
            className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
              acceptedTerms && acceptedLgpd
                ? "bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-600/20 active:scale-98 cursor-pointer"
                : "bg-zinc-200 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 cursor-not-allowed border border-border shadow-none opacity-70"
            }`}
          >
            <Sparkles className={`size-4 ${acceptedTerms && acceptedLgpd ? "text-lime-400" : "text-zinc-400"}`} />
            Cadastrar & Ganhar +50 nfs
            <ArrowRight className="size-4" />
          </button>
        </form>
      )}

      {/* Login Form */}
      {mode === "login" && (
        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-foreground">E-mail, Celular ou CPF *</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
                <User className="size-4" />
              </div>
              <input
                type="text"
                value={loginIdentifier}
                onChange={(e) => setLoginIdentifier(e.target.value)}
                placeholder="Seu e-mail, celular ou CPF"
                className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-foreground">Senha *</label>
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                className="text-xs font-bold text-purple-600 hover:underline flex items-center gap-1"
              >
                <KeyRound className="size-3.5" />
                Esqueceu sua senha?
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
                <Lock className="size-4" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Sua senha"
                className="w-full bg-card border border-border rounded-xl pl-10 pr-10 py-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-bold text-xs bg-purple-600 text-white hover:bg-purple-700 transition-all shadow-md shadow-purple-600/20 flex items-center justify-center gap-2"
          >
            <LogIn className="size-4" />
            Entrar no Aplicativo
          </button>

          {/* Passkeys Biometric Login Button */}
          <button
            type="button"
            onClick={async () => {
              const res = await nativeBridge.triggerBiometricAuth();
              if (res.success) {
                authStore.loginUser("atleta@netfits.com.br", "Pass@1234");
                navigate({ to: "/" });
              }
            }}
            className="w-full py-2.5 rounded-xl font-bold text-xs bg-zinc-100 dark:bg-zinc-800 text-foreground border border-border hover:bg-zinc-200 dark:hover:bg-zinc-700 transition flex items-center justify-center gap-2 active:scale-98 shadow-xs"
          >
            <ShieldCheck className="size-4 text-purple-600" />
            Entrar com Biometria / Face ID (Passkeys)
          </button>

          <div className="bg-purple-950/20 p-3 rounded-xl border border-purple-500/30 space-y-1 text-center">
            <p className="text-[11px] font-bold text-purple-300">💡 Homologação e Testes:</p>
            <p className="text-[10px] text-zinc-400">
              Cadastre sua própria conta acima com seu nome e e-mail ou utilize o <b className="text-lime-400">🧪 Painel de Homologação</b> no canto da tela para alternar sessões.
            </p>
          </div>
        </form>
      )}

      {showForgotPassword && (
        <ForgotPasswordCard onClose={() => setShowForgotPassword(false)} />
      )}

      {showTermsModal && (
        <TermsOfServiceModal
          onClose={() => setShowTermsModal(false)}
          onAgree={() => {
            setAcceptedTerms(true);
            setShowTermsModal(false);
            setShowLgpdModal(true);
          }}
        />
      )}

      {showLgpdModal && (
        <LgpdPrivacyModal
          onClose={() => setShowLgpdModal(false)}
          onAgree={() => {
            setAcceptedLgpd(true);
            setShowLgpdModal(false);
            toast.success("✨ Aceites dos Termos de Uso e LGPD registrados! O botão de cadastro está liberado.");
          }}
        />
      )}
    </div>
  );
}

function PasswordCheckRule({ label, valid }: { label: string; valid: boolean }) {
  return (
    <div className="flex items-center gap-2">
      {valid ? (
        <CheckCircle2 className="size-3.5 text-lime-500 shrink-0" />
      ) : (
        <XCircle className="size-3.5 text-muted-foreground/40 shrink-0" />
      )}
      <span className={valid ? "text-lime-600 dark:text-lime-400 font-semibold" : "text-muted-foreground"}>
        {label}
      </span>
    </div>
  );
}

function ForgotPasswordCard({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [identifier, setIdentifier] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [sport, setSport] = useState("");
  const [healthOrGym, setHealthOrGym] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [maskedEmail, setMaskedEmail] = useState("k*****@email.com");

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim()) {
      setError("Por favor, digite seu E-mail, Celular ou CPF cadastrado.");
      return;
    }

    // Validação estrita no banco de dados de cadastros
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

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!birthDate || !sport || !healthOrGym) {
      setError("Confirme todos os dados cadastrais solicitados para liberar o envio do e-mail.");
      return;
    }
    setError(null);
    setStep(3);
    toast.success("Dados cadastrais confirmados! E-mail de redefinição enviado.");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white text-zinc-900 rounded-3xl p-6 shadow-2xl border border-zinc-200 space-y-4 text-left">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-xl bg-purple-600/15 text-purple-600 grid place-items-center">
              <KeyRound className="size-4" />
            </div>
            <h2 className="text-base font-extrabold text-zinc-900">Recuperar Senha</h2>
          </div>
          <button
            onClick={onClose}
            className="size-8 rounded-full bg-zinc-100 hover:bg-zinc-200 grid place-items-center text-zinc-600 transition"
            aria-label="Fechar"
          >
            <XCircle className="size-4" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-between px-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-100 pb-2.5">
          <span className={step >= 1 ? "text-purple-600 font-extrabold" : ""}>1. Conta</span>
          <span>›</span>
          <span className={step >= 2 ? "text-purple-600 font-extrabold" : ""}>2. Dados Cadastrais</span>
          <span>›</span>
          <span className={step === 3 ? "text-purple-600 font-extrabold" : ""}>3. Envio</span>
        </div>

        {error && (
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-2 text-xs font-semibold text-amber-800">
            <AlertCircle className="size-4 shrink-0 text-amber-600" />
            <span>{error}</span>
          </div>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <form onSubmit={handleStep1Submit} className="space-y-4 pt-1">
            <p className="text-xs text-zinc-600 leading-relaxed">
              Informe seu E-mail, Celular ou CPF para darmos início à validação segura de dados cadastrais.
            </p>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-900">Identificador da Conta *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                  <User className="size-4 text-purple-600" />
                </div>
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="Ex: atleta@netfits.com.br, CPF ou celular"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-10 pr-4 py-3 text-xs font-medium text-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
                  required
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-1/3 py-3 rounded-xl font-bold text-xs bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200 transition"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="w-2/3 py-3 rounded-xl font-bold text-xs bg-purple-600 text-white hover:bg-purple-700 transition-all shadow-md shadow-purple-600/20 flex items-center justify-center gap-1.5"
              >
                Avançar
                <ArrowRight className="size-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Confirmação de Dados Cadastrais */}
        {step === 2 && (
          <form onSubmit={handleStep2Submit} className="space-y-3.5 pt-1">
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-3 flex items-start gap-2.5">
              <ShieldCheck className="size-5 text-purple-600 shrink-0 mt-0.5" />
              <p className="text-[11px] text-zinc-800 leading-snug">
                Por segurança, confirme os dados cadastrais da sua conta para liberar o link por e-mail.
              </p>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-900">Data de Nascimento *</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-900">Modalidade Esportiva Principal *</label>
              <select
                value={sport}
                onChange={(e) => setSport(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
                required
              >
                <option value="">Selecione sua modalidade principal...</option>
                <option value="corrida">Corrida de rua</option>
                <option value="maratona">Maratona</option>
                <option value="trail">Trail running</option>
                <option value="ciclismo">Ciclismo</option>
                <option value="triathlon">Triathlon</option>
                <option value="musculacao">Musculação / Funcional</option>
                <option value="natacao">Natação</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-900">Plano de Saúde ou Academia *</label>
              <select
                value={healthOrGym}
                onChange={(e) => setHealthOrGym(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
                required
              >
                <option value="">Selecione seu plano ou academia...</option>
                <option value="sulamerica">SulAmérica Saúde</option>
                <option value="bradesco">Bradesco Saúde</option>
                <option value="unimed">Unimed</option>
                <option value="amil">Amil</option>
                <option value="smartfit">Smart Fit</option>
                <option value="bioritmo">Bio Ritmo</option>
                <option value="bodytech">Bodytech</option>
                <option value="outro">Sem plano / Outro</option>
              </select>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-3 rounded-xl font-bold text-xs bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200 transition"
              >
                Voltar
              </button>
              <button
                type="submit"
                className="w-2/3 py-3 rounded-xl font-bold text-xs bg-purple-600 text-white hover:bg-purple-700 transition-all shadow-md shadow-purple-600/20 flex items-center justify-center gap-1.5"
              >
                <ShieldCheck className="size-4 text-lime-400" />
                Validar e Enviar E-mail
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Sucesso no Envio */}
        {step === 3 && (
          <div className="space-y-4 py-2 text-center">
            <div className="size-14 rounded-full bg-purple-100 text-purple-600 grid place-items-center mx-auto ring-4 ring-purple-500/20">
              <CheckCircle2 className="size-8" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-zinc-900">
                Link de Redefinição Enviado!
              </h3>
              <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                Confirmamos a validação de seus dados cadastrais. Enviamos um e-mail com o link de cadastramento de senha nova para:
              </p>
              <p className="text-xs font-mono font-bold text-purple-700 bg-purple-50 rounded-lg py-2 px-3 mt-2.5 border border-purple-200">
                {maskedEmail}
              </p>
            </div>

            <div className="bg-zinc-50 p-3.5 rounded-2xl border border-zinc-200 text-[11px] text-zinc-600 space-y-1 text-left">
              <p className="font-bold text-zinc-900">📌 Informações Importantes:</p>
              <p>• O link de cadastramento expira em <b>15 minutos</b>.</p>
              <p>• Verifique também sua caixa de Spam ou Lixo Eletrônico.</p>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-xl font-bold text-xs bg-purple-600 text-white hover:bg-purple-700 transition-all shadow-md shadow-purple-600/20"
            >
              Voltar ao Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================================================
   MODAL 1: TERMOS E CONDIÇÕES DE USO DO PROGRAMA NETFITS
   ============================================================================ */
function TermsOfServiceModal({
  onClose,
  onAgree,
}: {
  onClose: () => void;
  onAgree: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white text-zinc-900 rounded-3xl p-6 shadow-2xl border border-zinc-200 space-y-4 max-h-[88vh] flex flex-col text-left">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-3 shrink-0">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-xl bg-purple-600/10 text-purple-600 grid place-items-center">
              <Sparkles className="size-4" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-zinc-900">Termos & Condições de Uso</h2>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Passo 1 de 2 · Netfits Ltda.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="size-8 rounded-full bg-zinc-100 hover:bg-zinc-200 grid place-items-center text-zinc-600 transition font-bold"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Terms Content */}
        <div className="flex-1 overflow-y-auto space-y-3.5 pr-2 text-xs text-zinc-700 leading-relaxed border-b border-zinc-200 pb-4">
          <div className="bg-purple-50 p-3 rounded-2xl border border-purple-100 text-[11px] text-purple-900">
            <p className="font-bold">📌 Regulamento Oficial, Termos e Condições de Uso (Rev. 2.0):</p>
            <p>Este Regulamento rege a participação no Programa Netfits, o acúmulo de pontos nfs, estorno híbrido, validade FEFO e regras estritas de integridade e antifraude.</p>
          </div>

          <h3 className="font-extrabold text-zinc-900 text-sm">1. Objeto do Programa</h3>
          <p>
            O Programa Netfits é um ecossistema digital de saúde (*healthspan*) e fidelidade operado pela <b>Netfits Ltda.</b> (CNPJ/MF nº <b>68.930.455/0001-40</b>, com sede na Alameda das Embaúbas, 365, Quadra 06 Lote 19 sala 01, Alphaville, Santana de Parnaíba-SP, CEP 06.542-195), destinado a incentivar treinos, consumo de conteúdo e compras no Marketplace com acúmulo de pontos <b>nfs</b>.
          </p>

          <h3 className="font-extrabold text-zinc-900 text-sm">2. Matriz Antifraude e Retenção em Vídeos (100% Dwell Time)</h3>
          <p>
            A atribuição de pontos <b>nfs</b> por visualização de vídeos no Feed exige <b>retenção visual contínua e foco de 100% da duração do vídeo</b>. É terminantemente proibido o uso de automações, scripts, bots, emuladores, alteração de dados de GPS ou criação de contas falsas para geração indevida de pontos.
          </p>

          <h3 className="font-extrabold text-zinc-900 text-sm">3. Direito Irrevogável de Exclusão Sumária & Perda de Saldo</h3>
          <p className="font-semibold text-red-700 bg-red-50 p-2.5 rounded-xl border border-red-200">
            ⚠️ <b>A Netfits Ltda. reserva-se o direito irrevogável, incondicional e incontestável de cancelar, suspender ou excluir sumariamente a conta de qualquer Usuário</b> que descumprir este Regulamento ou em caso de suspeita fundamentada de fraude, implicando na <b>perda imediata e irreversível de 100% dos pontos nfs acumulados</b>, sem direito a qualquer indenização ou ressarcimento.
          </p>

          <h3 className="font-extrabold text-zinc-900 text-sm">4. Validade, Inatividade (360 dias) e Estorno Híbrido</h3>
          <p>
            Os pontos <b>nfs</b> possuem validade de 24 meses sob o sistema FEFO. Contas sem atividade por mais de 360 dias expiram de pleno direito. Em compras híbridas (pontos + cartão/Pix) canceladas no Marketplace, a devolução é realizada proporcionalmente na carteira e no gateway conforme o Art. 49 do CDC.
          </p>
        </div>

        {/* Footer Action */}
        <div className="shrink-0 pt-2 space-y-2">
          <button
            onClick={onAgree}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 transition shadow-md shadow-purple-600/20 active:scale-98"
          >
            <CheckCircle2 className="size-4 text-lime-400" />
            Eu concordo com o Regulamento Oficial (Ir para Passo 2)
          </button>
          <p className="text-[10px] text-center text-zinc-500">
            Ao clicar em "Eu concordo", você será direcionado para o Consentimento LGPD.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   MODAL 2: POLÍTICA DE PRIVACIDADE E CONSENTIMENTO LGPD (LEI Nº 13.709/2018)
   ============================================================================ */
function LgpdPrivacyModal({
  onClose,
  onAgree,
}: {
  onClose: () => void;
  onAgree: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white text-zinc-900 rounded-3xl p-6 shadow-2xl border border-zinc-200 space-y-4 max-h-[88vh] flex flex-col text-left">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-3 shrink-0">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-xl bg-lime-500/15 text-lime-600 grid place-items-center">
              <ShieldCheck className="size-4" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-zinc-900">Consentimento para Uso de Dados (LGPD)</h2>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Passo 2 de 2 · Lei Federal nº 13.709/2018</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="size-8 rounded-full bg-zinc-100 hover:bg-zinc-200 grid place-items-center text-zinc-600 transition font-bold"
          >
            ✕
          </button>
        </div>

        {/* Scrollable LGPD Content */}
        <div className="flex-1 overflow-y-auto space-y-3.5 pr-2 text-xs text-zinc-700 leading-relaxed border-b border-zinc-200 pb-4">
          <div className="bg-lime-50 p-3 rounded-2xl border border-lime-200 text-[11px] text-lime-950">
            <p className="font-bold">🔒 Tratamento Transparente & Proteção de Dados:</p>
            <p>Seus dados cadastrais, transacionais e de telemetria esportiva são tratados com segurança e conformidade rigorosa com a LGPD pela Netfits Ltda.</p>
          </div>

          <h3 className="font-extrabold text-zinc-900 text-sm">1. Bases Legais e Controladora</h3>
          <p>
            A <b>Netfits Ltda.</b> atua como Controladora dos dados. O tratamento baseia-se em: <b>Execução de Contrato</b> (Art. 7º, V) para gerenciamento de pontos e marketplace; <b>Obrigação Legal</b> (Art. 7º, II) para guarda de registros do Marco Civil da Internet; e <b>Consentimento Específico</b> (Art. 11, I) para dados de telemetria esportiva.
          </p>

          <h3 className="font-extrabold text-zinc-900 text-sm">2. Garantia de Não-Comercialização de Dados de Saúde</h3>
          <p>
            A Netfits compromete-se a <b>não vender, não repassar e não disponibilizar dados de frequência cardíaca, biometria ou telemetria esportiva para seguradoras de saúde ou planos médicos</b> sem sua autorização expressa.
          </p>

          <h3 className="font-extrabold text-zinc-900 text-sm">3. Direitos do Titular (Art. 18 da LGPD)</h3>
          <p>
            Você pode exercer seus direitos de confirmação, acesso, correção, anonimização, portabilidade ou revogação de consentimento contatando nosso Encarregado de Proteção de Dados (DPO) pelo e-mail <b>dpo@netfits.com.br</b>.
          </p>
        </div>

        {/* Footer Action */}
        <div className="shrink-0 pt-2 space-y-2">
          <button
            onClick={onAgree}
            className="w-full bg-lime-500 hover:bg-lime-400 text-zinc-950 font-extrabold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 transition shadow-md active:scale-98"
          >
            <CheckCircle2 className="size-4" />
            Eu concordo com o Tratamento de Dados (LGPD)
          </button>
          <p className="text-[10px] text-center text-zinc-500">
            Ao aceitar, os 2 aceites estarão validados e o cadastro será habilitado.
          </p>
        </div>
      </div>
    </div>
  );
}
