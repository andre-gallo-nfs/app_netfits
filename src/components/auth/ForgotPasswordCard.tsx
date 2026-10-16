import React, { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { authStore } from "@/lib/auth-store";
import { appLockStore } from "@/lib/app-lock-store";
import { badgesStore } from "@/lib/badges-store";
import { toast } from "sonner";
import { dispatchPasswordResetEmailSafe } from "@/lib/emails/email-service";
import {
  KeyRound,
  XCircle,
  AlertCircle,
  User,
  ArrowRight,
  ShieldCheck,
  Eye,
  EyeOff,
  CheckCircle2,
} from "lucide-react";

export function ForgotPasswordCard({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [identifier, setIdentifier] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [matchedUserName, setMatchedUserName] = useState("");
  const [maskedEmail, setMaskedEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim()) {
      setError("Por favor, digite seu E-mail, Celular ou CPF cadastrado.");
      return;
    }

    const check = authStore.checkIdentifierExists(identifier);
    if (!check.exists || !check.matchedUser) {
      setError(`O e-mail ou dado "${identifier}" não foi localizado em nossa base. Verifique a digitação ou crie sua conta.`);
      return;
    }

    setError(null);
    const targetEmail = check.matchedUser.email || (identifier.includes("@") ? identifier : "usuario@netfits.com.br");
    const parts = targetEmail.split("@");
    const masked = parts.length === 2 ? `${parts[0].slice(0, 2)}*****@${parts[1]}` : targetEmail;

    setMatchedUserName(check.matchedUser.fullName);
    setMaskedEmail(masked);
    setStep(2);
  };

  const handleResetPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!newPassword || newPassword.trim().length < 6) {
      setError("A nova senha deve ter no mínimo 6 caracteres.");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError("As senhas digitadas não coincidem. Digite a mesma senha nos dois campos.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = authStore.resetUserPassword(identifier, newPassword);
      if (!res.success) {
        setError(res.error || "Não foi possível redefinir a senha.");
        setIsSubmitting(false);
        return;
      }

      toast.success(`🎉 Senha atualizada com sucesso! Bem-vindo de volta, ${matchedUserName || "Atleta"}!`);
      appLockStore.setUnlocked(true);
      if (res.user) {
        badgesStore.evaluate(res.user);
      }
      onClose();
      navigate({ to: "/feed" });
    } catch {
      setError("Erro ao redefinir senha. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendEmailLink = () => {
    setError(null);
    const check = authStore.checkIdentifierExists(identifier);
    const targetEmail = check.matchedUser?.email || (identifier.includes("@") ? identifier : "");
    const targetName = check.matchedUser?.fullName || matchedUserName || "Atleta";
    const resetToken = Math.random().toString(36).substring(2, 12);
    const resetLink = `https://www.netfits.com.br/auth?action=reset&token=${resetToken}`;

    if (targetEmail) {
      dispatchPasswordResetEmailSafe(targetEmail, targetName, maskedEmail, resetLink);
    }

    setStep(3);
    toast.success("Link de redefinição enviado para seu e-mail!");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-zinc-200 space-y-4 text-left animate-in fade-in zoom-in-95">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-xl bg-purple-100 text-purple-600 grid place-items-center">
              <KeyRound className="size-4" />
            </div>
            <div>
              <h2 className="text-sm font-extrabold text-zinc-900">Redefinição de Senha</h2>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Acesso Seguro Netfits</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="size-8 rounded-full bg-zinc-100 hover:bg-zinc-200 grid place-items-center text-zinc-600 transition cursor-pointer"
            aria-label="Fechar"
          >
            <XCircle className="size-4" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-between px-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-100 pb-2.5">
          <span className={step >= 1 ? "text-purple-600 font-extrabold" : ""}>1. Conta</span>
          <span>›</span>
          <span className={step >= 2 ? "text-purple-600 font-extrabold" : ""}>2. Nova Senha</span>
          <span>›</span>
          <span className={step === 3 ? "text-purple-600 font-extrabold" : ""}>3. Concluído</span>
        </div>

        {error && (
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-2 text-xs font-semibold text-amber-800">
            <AlertCircle className="size-4 shrink-0 text-amber-600" />
            <span>{error}</span>
          </div>
        )}

        {/* STEP 1: Identificação */}
        {step === 1 && (
          <form onSubmit={handleStep1Submit} className="space-y-4 pt-1">
            <p className="text-xs text-zinc-600 leading-relaxed">
              Digite seu E-mail, Celular ou CPF para localizarmos sua conta e redefinir sua senha com segurança.
            </p>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-900">E-mail, Celular ou CPF *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                  <User className="size-4 text-purple-600" />
                </div>
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="Ex: seu.email@exemplo.com ou CPF"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-10 pr-4 py-3 text-xs font-medium text-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
                  required
                  autoFocus
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-1/3 py-3 rounded-xl font-bold text-xs bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200 transition cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="w-2/3 py-3 rounded-xl font-bold text-xs bg-purple-600 text-white hover:bg-purple-700 transition-all shadow-md shadow-purple-600/20 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Avançar
                <ArrowRight className="size-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Redefinição Imediata da Senha */}
        {step === 2 && (
          <form onSubmit={handleResetPasswordSubmit} className="space-y-3.5 pt-1">
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-3 flex items-start gap-2.5">
              <ShieldCheck className="size-5 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-zinc-900">
                  Conta localizada: {matchedUserName}
                </p>
                <p className="text-[11px] text-zinc-600 mt-0.5">
                  Crie sua nova senha abaixo para acessar seu aplicativo imediatamente.
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-900">Nova Senha *</label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Digite sua nova senha (mínimo 6 caracteres)"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 pr-10 text-xs font-medium text-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-zinc-600 cursor-pointer"
                  tabIndex={-1}
                >
                  {showNewPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-900">Confirmar Nova Senha *</label>
              <input
                type={showNewPassword ? "text" : "password"}
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                placeholder="Repita a nova senha"
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
                required
              />
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-3 rounded-xl font-bold text-xs bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200 transition cursor-pointer"
              >
                Voltar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-2/3 py-3 rounded-xl font-bold text-xs bg-purple-600 text-white hover:bg-purple-700 transition-all shadow-md shadow-purple-600/20 flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <CheckCircle2 className="size-4 text-lime-400" />
                Salvar Senha e Entrar
              </button>
            </div>

            <div className="pt-2 text-center border-t border-zinc-100">
              <button
                type="button"
                onClick={handleSendEmailLink}
                className="text-[11px] font-semibold text-purple-600 hover:underline cursor-pointer"
              >
                Prefere receber um link por e-mail ({maskedEmail})?
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Confirmação de Envio por E-mail */}
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
                Enviamos as instruções e o link seguro de acesso para o seu endereço:
              </p>
              <p className="text-xs font-mono font-bold text-purple-700 bg-purple-50 rounded-lg py-2 px-3 mt-2.5 border border-purple-200">
                {maskedEmail}
              </p>
            </div>

            <div className="bg-zinc-50 p-3.5 rounded-2xl border border-zinc-200 text-[11px] text-zinc-600 space-y-1 text-left">
              <p className="font-bold text-zinc-900">📌 Dica Rápida:</p>
              <p>• Você também pode redefinir sua senha diretamente na tela anterior com 1 clique.</p>
              <p>• Verifique sua caixa de entrada ou aba Promoções/Spam.</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setStep(2)}
                className="w-1/2 py-3 rounded-xl font-bold text-xs bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200 transition cursor-pointer"
              >
                Definir Senha Aqui
              </button>
              <button
                onClick={onClose}
                className="w-1/2 py-3 rounded-xl font-bold text-xs bg-purple-600 text-white hover:bg-purple-700 transition-all shadow-md shadow-purple-600/20 cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
