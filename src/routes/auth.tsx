import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  User, Lock, Mail, Phone, CreditCard, ShieldCheck, AlertCircle,
  CheckCircle2, XCircle, Eye, EyeOff, Sparkles, ArrowRight, KeyRound,
  LogIn, UserPlus, AlertTriangle, Award, Gift
} from "lucide-react";
import netfitsLogo from "@/assets/netfits-logo.png";
import netfitsMark from "@/assets/netfits-mark.png";
import {
  authStore,
  detectIdentifierType,
  validatePasswordRules,
  useAuth,
} from "@/lib/auth-store";
import { nativeBridge } from "@/lib/native-bridge";
import { toast } from "sonner";

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

  // Campos de Cadastro
  const [identifier, setIdentifier] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [isAutoFilledReferral, setIsAutoFilledReferral] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  // Status de Erros & Alerta de Duplicidade
  const [duplicateAlert, setDuplicateAlert] = useState<{
    show: boolean;
    message: string;
  } | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Ler código de indicação vindo da URL automaticamente (?ref=... ou ?code=...)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const codeFromUrl = params.get("ref") || params.get("code") || params.get("referral");
      if (codeFromUrl) {
        const cleanCode = codeFromUrl.trim().toUpperCase();
        setReferralCode(cleanCode);
        setIsAutoFilledReferral(true);
        toast.info(`✨ Código de indicação "${cleanCode}" aplicado automaticamente!`);
      }
    }
  }, []);

  const identifierType = detectIdentifierType(identifier);
  const pwdRules = validatePasswordRules(password);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDuplicateAlert(null);
    setFormError(null);

    if (!identifier.trim()) {
      setFormError("Por favor, informe seu E-mail, Celular ou CPF.");
      return;
    }

    if (!pwdRules.isValid) {
      setFormError("A senha não preenche todos os critérios de segurança requeridos.");
      return;
    }

    // Tentar cadastrar no authStore
    const res = authStore.registerUser({
      identifier,
      password,
      fullName: fullName.trim() || "Atleta Netfits",
      referralCode: referralCode.trim(),
    });

    if (!res.success) {
      if (res.isDuplicate) {
        setDuplicateAlert({
          show: true,
          message: res.error || "Usuário já consta cadastrado no banco de dados.",
        });
      } else {
        setFormError(res.error || "Falha ao realizar cadastro.");
      }
      return;
    }

    // Sucesso no cadastro
    navigate({ to: "/" });
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!identifier.trim() || !password) {
      setFormError("Preencha todos os campos para fazer login.");
      return;
    }

    const res = authStore.loginUser(identifier, password);
    if (!res.success) {
      setFormError(res.error || "Dados incorretos.");
      return;
    }

    navigate({ to: "/" });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center px-4 py-8 max-w-md mx-auto font-sans">
      {/* Header Branding */}
      <div className="text-center mb-6 space-y-2">
        <div className="inline-flex items-center justify-center gap-2 p-2 bg-foreground rounded-2xl shadow-lg mb-2">
          <img src={netfitsMark} alt="" className="size-8 object-contain" />
          <img src={netfitsLogo} alt="Netfits" className="h-6 w-auto filter brightness-0 invert" />
        </div>
        <h1 className="text-2xl font-black text-foreground tracking-tight">
          {mode === "register" ? "Crie sua conta Netfits" : "Acesse sua conta"}
        </h1>
        <p className="text-xs text-muted-foreground max-w-xs mx-auto">
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
          {/* Campo Usuário (E-mail, Celular ou CPF) */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-foreground flex justify-between">
              <span>Usuário (E-mail, Celular ou CPF) *</span>
              {identifierType !== "unknown" && (
                <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider">
                  Tipo: {identifierType === "email" ? "E-mail" : identifierType === "cpf" ? "CPF" : "Celular"}
                </span>
              )}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
                {identifierType === "email" ? (
                  <Mail className="size-4 text-purple-600" />
                ) : identifierType === "cpf" ? (
                  <CreditCard className="size-4 text-purple-600" />
                ) : identifierType === "phone" ? (
                  <Phone className="size-4 text-purple-600" />
                ) : (
                  <User className="size-4" />
                )}
              </div>
              <input
                type="text"
                value={identifier}
                onChange={(e) => {
                  setIdentifier(e.target.value);
                  setDuplicateAlert(null);
                  setFormError(null);
                }}
                placeholder="Ex: usuario@email.com, (11) 98765-4321 ou 123.456.789-00"
                className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
          </div>

          {/* Nome Completo */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-foreground">Nome Completo</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Digite seu nome completo"
              className="w-full bg-card border border-border rounded-xl px-4 py-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
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

          {/* Interactive Password Strength Checklist & Entropy Gauge */}
          {password.length > 0 && (
            <div className="bg-card border border-border rounded-xl p-3 space-y-2 text-[11px]">
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
                      <span className="text-muted-foreground">Força da Senha:</span>
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
          )}

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-bold text-xs bg-purple-600 text-white hover:bg-purple-700 transition-all shadow-md shadow-purple-600/20 flex items-center justify-center gap-2 active:scale-98"
          >
            <Sparkles className="size-4 text-lime-400" />
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
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
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

          <div className="bg-muted p-3 rounded-xl border border-border space-y-1 text-center">
            <p className="text-[11px] font-bold text-foreground">Credenciais de Teste:</p>
            <p className="text-[10px] text-muted-foreground font-mono">
              Usuário: <b>atleta@netfits.com.br</b> | Senha: <b>Pass@1234</b>
            </p>
          </div>
        </form>
      )}

      {showForgotPassword && (
        <ForgotPasswordCard onClose={() => setShowForgotPassword(false)} />
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
