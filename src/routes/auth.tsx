import { trackRegistrationAccess } from "@/lib/analytics";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  User, Lock, Mail, Phone, CreditCard, ShieldCheck, AlertCircle,
  CheckCircle2, XCircle, Eye, EyeOff, Sparkles, ArrowRight, KeyRound,
  LogIn, UserPlus, AlertTriangle, Award, Gift, Calendar, Fingerprint,
  MapPin
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
import { passkeyService } from "@/lib/webauthn-passkeys";
import { appLockStore } from "@/lib/app-lock-store";
import { dispatchWelcomeEmailSafe, dispatchPasswordResetEmailSafe } from "@/lib/emails/email-service";
import { badgesStore } from "@/lib/badges-store";
import { toast } from "sonner";

import {
  formatCPF,
  isValidCPF,
  formatPhone,
  formatBirthDateMask,
  isValidBirthDate,
  formatCepMask,
  EMAIL_DOMAINS,
  applyEmailDomain,
} from "@/lib/auth-helpers";
import { ForgotPasswordCard } from "@/components/auth/ForgotPasswordCard";
import { TermsModal as TermsOfServiceModal, LgpdPrivacyModal } from "@/components/auth/AuthLegalModals";
import { PasswordStrengthCard, PasswordCheckRule } from "@/components/auth/PasswordStrengthCard";

export { isValidCPF, formatCepMask };

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

  useEffect(() => {
    if (mode === "register") {
      trackRegistrationAccess("landing");
    }
  }, []);

  // Campos de Cadastro Separados & Obrigatórios
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthDate, setBirthDate] = useState("");

  // Campos de Endereço Completo Mandatórios
  const [zipcode, setZipcode] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [shortState, setShortState] = useState("SP");
  const [state, setState] = useState("São Paulo");
  const [isLoadingCep, setIsLoadingCep] = useState(false);

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

  const handleCepChange = async (cepInput: string) => {
    const masked = formatCepMask(cepInput);
    setZipcode(masked);
    setFormError(null);

    const digits = masked.replace(/\D/g, "");
    if (digits.length === 8) {
      setIsLoadingCep(true);
      try {
        const res = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
        if (res.ok) {
          const data = await res.json();
          if (!data.erro) {
            if (data.logradouro) setStreet(data.logradouro);
            if (data.bairro) setNeighborhood(data.bairro);
            if (data.localidade) setCity(data.localidade);
            if (data.uf) setShortState(data.uf.toUpperCase());
            if (data.estado) setState(data.estado);
            toast.success(`📍 Endereço preenchido via CEP: ${data.localidade}/${data.uf}!`);
          } else {
            toast.error("CEP não localizado. Preencha os campos de rua e bairro manualmente.");
          }
        }
      } catch {
        // Ignora se indisponível momentaneamente
      } finally {
        setIsLoadingCep(false);
      }
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDuplicateAlert(null);
    setFormError(null);

    // 1. Nome Completo Obrigatório
    if (!fullName.trim() || fullName.trim().length < 3) {
      setFormError("Por favor, informe seu Nome Completo (mínimo 3 caracteres).");
      return;
    }

    // 2. CPF Obrigatório e Válido matematicamente (11 dígitos oficiais)
    if (!cpf.trim() || !isValidCPF(cpf)) {
      setFormError("Por favor, informe um CPF válido com 11 dígitos para emissão e segurança cadastral.");
      return;
    }

    // 3. E-mail Exclusivo Obrigatório
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setFormError("Por favor, informe um endereço de E-mail válido (ex: seu.nome@email.com).");
      return;
    }

    // 4. Data de Nascimento Obrigatória
    if (!birthDate.trim() || !isValidBirthDate(birthDate)) {
      setFormError("Por favor, informe sua Data de Nascimento no formato DD/MM/AAAA (ex: 15/08/1988).");
      return;
    }

    // 5. Celular com DDD Obrigatório
    const phoneDigits = phone.replace(/\D/g, "");
    if (!phone.trim() || phoneDigits.length < 10) {
      setFormError("Por favor, informe seu número de Celular com DDD (ex: (11) 98765-4321).");
      return;
    }

    // 6. Endereço Completo Mandatório (CEP, Rua, Número, Bairro, Cidade, UF)
    const cleanCep = zipcode.replace(/\D/g, "");
    if (!zipcode.trim() || cleanCep.length !== 8) {
      setFormError("O CEP é mandatório. Por favor, informe um CEP válido com 8 dígitos (ex: 01426-001).");
      return;
    }
    if (!street.trim() || street.trim().length < 2) {
      setFormError("A Rua / Logradouro é obrigatória no endereço completo de entrega.");
      return;
    }
    if (!number.trim()) {
      setFormError("O Número do endereço é obrigatório (caso não possua número, informe 'S/N').");
      return;
    }
    if (!neighborhood.trim() || neighborhood.trim().length < 2) {
      setFormError("O Bairro é obrigatório no endereço completo.");
      return;
    }
    if (!city.trim() || city.trim().length < 2) {
      setFormError("A Cidade é obrigatória no endereço completo.");
      return;
    }
    if (!shortState.trim() || shortState.trim().length !== 2) {
      setFormError("A UF (Estado) é obrigatória com 2 letras (ex: SP, RJ, MG).");
      return;
    }

    // 7. Regras de Senha Alfanumérica
    if (!pwdRules.isValid) {
      setFormError("A senha não preenche todos os critérios de segurança requeridos.");
      return;
    }

    // 8. Confirmação de Senha
    if (confirmPassword !== password) {
      setFormError("As senhas digitadas não coincidem. Verifique o campo de confirmação.");
      return;
    }

    // 9. Aceite de Termos e LGPD
    if (!acceptedTerms || !acceptedLgpd) {
      setFormError("Por favor, leia e aceite os Termos de Uso e o Consentimento LGPD para concluir seu cadastro.");
      return;
    }

    const calculatedAddress = `${street.trim()}, ${number.trim()}${complement.trim() ? ` (${complement.trim()})` : ""}${neighborhood.trim() ? ` - ${neighborhood.trim()}` : ""}, ${city.trim()} · ${shortState.trim().toUpperCase()}`;

    // Tentar cadastrar no sharedSandboxStore com persistência de dados completos
    const res = sharedSandboxStore.registerAthlete({
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      cpf: cpf.trim(),
      birthDate: birthDate.trim(),
      zipcode: zipcode.trim(),
      street: street.trim(),
      number: number.trim(),
      complement: complement.trim(),
      neighborhood: neighborhood.trim(),
      city: city.trim(),
      state: state.trim() || shortState.trim().toUpperCase(),
      shortState: shortState.trim().toUpperCase(),
      address: calculatedAddress,
      password: password.trim(),
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

    // Sucesso no cadastro: salvar também no authStore persistido
    if (res.user) {
      authStore.recordRegisteredUser({
        id: res.user.id,
        fullName: res.user.fullName,
        email: res.user.email || email.trim(),
        phone: res.user.phone || phone.trim(),
        cpf: res.user.cpf || cpf.trim(),
        birthDate: birthDate.trim(),
        zipcode: zipcode.trim(),
        street: street.trim(),
        number: number.trim(),
        complement: complement.trim(),
        neighborhood: neighborhood.trim(),
        city: city.trim(),
        state: state.trim(),
        shortState: shortState.trim().toUpperCase(),
        address: calculatedAddress,
        passwordHash: password.trim(),
        userCategory: "atleta",
        registeredAt: res.user.registeredAt,
      });
      passkeyService.registerPasskey(res.user.id, res.user.fullName, res.user.email || email);

      // Sincronização imediata garantida do novo usuário no servidor de produção
      fetch("/api/users-sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: res.user }),
      }).catch((err) => console.warn("[Register Cloud Sync Warning]", err));
    }

    // Disparo imediato do E-mail Oficial de Boas-Vindas (+50 nfs) via Resend
    const recipientEmail = (res.user?.email || email).trim();
    const recipientName = (res.user?.fullName || fullName).trim();
    dispatchWelcomeEmailSafe(recipientEmail, recipientName);

    toast.success("🚀 Cadastro efetuado com sucesso! Bem-vindo ao Netfits.");
    badgesStore.evaluate(res.user);
    appLockStore.setUnlocked(true);
    navigate({ to: "/feed" });
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

    appLockStore.setUnlocked(true);
    badgesStore.evaluate(res.user);
    navigate({ to: "/feed" });
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-center px-4 pt-[calc(env(safe-area-inset-top,0px)+1.5rem)] pb-[calc(env(safe-area-inset-bottom,0px)+2rem)] max-w-md mx-auto font-sans">
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
    trackRegistrationAccess("tab_toggle");
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
          {/* 1. Nome Completo */}
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
                onChange={(e) => {
                  setFullName(e.target.value);
                  setFormError(null);
                }}
                placeholder="Digite seu nome completo"
                className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
          </div>

          {/* 2. CPF */}
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

          {/* 3. E-mail Exclusivo com Sugestões de Domínio Rápido */}
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

          {/* 4. Data de Nascimento */}
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
                type="text"
                inputMode="numeric"
                maxLength={10}
                placeholder="DD/MM/AAAA (ex: 15/08/1988)"
                value={birthDate}
                onChange={(e) => {
                  setBirthDate(formatBirthDateMask(e.target.value));
                  setFormError(null);
                }}
                className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
          </div>

          {/* 5. Bloco de Endereço Completo Mandatório (Com CEP e Preenchimento Automático) */}
          <div className="pt-2 pb-1 border-t border-border/80 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                <MapPin className="size-3.5 text-purple-600" /> Endereço Completo de Entrega & Cobrança *
              </span>
              <span className="text-[10px] font-semibold text-purple-600 uppercase tracking-wider">Obrigatório</span>
            </div>
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              Necessário para validação cadastral e envio de produtos na Loja Oficial (MKPlace).
            </p>

            {/* CEP e Rua / Logradouro */}
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center justify-between">
                  <span>CEP *</span>
                  {isLoadingCep && <span className="text-[9px] text-purple-600 animate-pulse font-normal">Buscando...</span>}
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={9}
                  value={zipcode}
                  onChange={(e) => handleCepChange(e.target.value)}
                  placeholder="00000-000"
                  className="w-full bg-card border border-border rounded-xl px-3 py-2.5 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div className="col-span-2 space-y-1">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                  Rua / Logradouro *
                </label>
                <input
                  type="text"
                  value={street}
                  onChange={(e) => {
                    setStreet(e.target.value);
                    setFormError(null);
                  }}
                  placeholder="Av. Paulista, Rua..."
                  className="w-full bg-card border border-border rounded-xl px-3 py-2.5 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
            </div>

            {/* Número e Complemento */}
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                  Número *
                </label>
                <input
                  type="text"
                  value={number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                    setFormError(null);
                  }}
                  placeholder="100 ou S/N"
                  className="w-full bg-card border border-border rounded-xl px-3 py-2.5 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div className="col-span-2 space-y-1">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center justify-between">
                  <span>Complemento</span>
                  <span className="text-[9px] text-muted-foreground font-normal">Opcional</span>
                </label>
                <input
                  type="text"
                  value={complement}
                  onChange={(e) => setComplement(e.target.value)}
                  placeholder="Apto 42, Bloco B (opcional)"
                  className="w-full bg-card border border-border rounded-xl px-3 py-2.5 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>

            {/* Bairro, Cidade e UF */}
            <div className="grid grid-cols-5 gap-2">
              <div className="col-span-2 space-y-1">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                  Bairro *
                </label>
                <input
                  type="text"
                  value={neighborhood}
                  onChange={(e) => {
                    setNeighborhood(e.target.value);
                    setFormError(null);
                  }}
                  placeholder="Bairro"
                  className="w-full bg-card border border-border rounded-xl px-3 py-2.5 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div className="col-span-2 space-y-1">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                  Cidade *
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                    setFormError(null);
                  }}
                  placeholder="Cidade"
                  className="w-full bg-card border border-border rounded-xl px-3 py-2.5 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div className="col-span-1 space-y-1">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                  UF *
                </label>
                <input
                  type="text"
                  maxLength={2}
                  value={shortState}
                  onChange={(e) => {
                    const uf = e.target.value.toUpperCase();
                    setShortState(uf);
                    if (uf === "SP") setState("São Paulo");
                    else if (uf === "RJ") setState("Rio de Janeiro");
                    else if (uf === "MG") setState("Minas Gerais");
                    else if (uf === "PR") setState("Paraná");
                    else if (uf === "SC") setState("Santa Catarina");
                    else if (uf === "RS") setState("Rio Grande do Sul");
                    else setState(uf);
                    setFormError(null);
                  }}
                  placeholder="SP"
                  className="w-full bg-card border border-border rounded-xl px-3 py-2.5 text-xs font-bold text-foreground text-center uppercase focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
            </div>
          </div>

          {/* 6. Celular com DDD */}
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
                placeholder="Ex: CÓDIGO-DO-AMIGO..."
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
          <div className="space-y-2 pt-1">
            <button
              type="button"
              onClick={async () => {
                const res = await authStore.loginWithPasskey();
                if (res.success) {
                  const finops = passkeyService.getFinOpsMetrics();
                  toast.success(`⚡ FinOps: Login biométrico realizado sem custo de SMS OTP (Economia: ${finops.costSavedFormatted})`);
                  appLockStore.setUnlocked(true);
                  navigate({ to: "/feed" });
                } else if (res.error) {
                  toast.error(res.error);
                }
              }}
              className="w-full py-3 rounded-xl font-bold text-xs bg-zinc-900 dark:bg-zinc-800 text-white border border-purple-500/40 hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-all flex items-center justify-center gap-2 active:scale-98 shadow-md cursor-pointer"
            >
              <Fingerprint className="size-4 text-purple-400" />
              <span>Entrar com Biometria / Passkey (Face ID / Touch ID)</span>
            </button>
            <div className="flex items-center justify-between px-1 text-[10px] text-zinc-500">
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                <ShieldCheck className="size-3" /> FIDO2 / WebAuthn (Sem SMS OTP)
              </span>
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                Economia: {passkeyService.getFinOpsMetrics().costSavedFormatted}
              </span>
            </div>
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
