import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export interface PasswordRules {
  minLength: boolean;
  hasNumber: boolean;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasSpecial: boolean;
}

export function computePasswordRules(password: string): PasswordRules {
  return {
    minLength: password.length >= 8,
    hasNumber: /\d/.test(password),
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasSpecial: /[^A-Za-z0-9]/.test(password),
  };
}

export function PasswordCheckRule({ label, valid }: { label: string; valid: boolean }) {
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

export function PasswordStrengthCard({ pwdRules }: { pwdRules: PasswordRules }) {
  const score = [
    pwdRules.minLength,
    pwdRules.hasNumber,
    pwdRules.hasUppercase,
    pwdRules.hasLowercase,
    pwdRules.hasSpecial,
  ].filter(Boolean).length;
  const percentage = (score / 5) * 100;

  return (
    <div className="bg-card border border-border rounded-xl p-3 space-y-2 text-[11px] shadow-2xs">
      {/* Dynamic Strength Gauge */}
      <div className="space-y-1 pb-1 border-b border-border">
        <div className="flex justify-between items-center text-[10px] font-extrabold uppercase">
          <span className="text-muted-foreground">Medidor de Força da Senha:</span>
          <span
            className={
              score <= 1
                ? "text-red-500 font-extrabold"
                : score <= 3
                ? "text-amber-500 font-extrabold"
                : score === 4
                ? "text-lime-600 dark:text-lime-400 font-extrabold"
                : "text-purple-600 font-black"
            }
          >
            {score <= 1
              ? "Muito Fraca 🔴"
              : score <= 3
              ? "Média 🟡"
              : score === 4
              ? "Forte 🟢"
              : "Impenetrável 🟣"}
          </span>
        </div>
        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300 rounded-full ${
              score <= 1
                ? "bg-red-500"
                : score <= 3
                ? "bg-amber-500"
                : score === 4
                ? "bg-lime-500"
                : "bg-purple-600"
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
      <p className="font-bold text-foreground text-[10px] uppercase tracking-wider">
        Requisitos de Segurança da Senha:
      </p>
      <PasswordCheckRule label="No mínimo 8 caracteres" valid={pwdRules.minLength} />
      <PasswordCheckRule label="Pelo menos 1 número (0-9)" valid={pwdRules.hasNumber} />
      <PasswordCheckRule label="Pelo menos 1 letra maiúscula (A-Z)" valid={pwdRules.hasUppercase} />
      <PasswordCheckRule label="Pelo menos 1 letra minúscula (a-z)" valid={pwdRules.hasLowercase} />
      <PasswordCheckRule label="Pelo menos 1 caractere especial (!@#$%...)" valid={pwdRules.hasSpecial} />
    </div>
  );
}
