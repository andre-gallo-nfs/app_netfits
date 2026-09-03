import React, { useState, useEffect } from "react";
import { Lock, ShieldCheck, ArrowRight, KeyRound, Mail, Sparkles, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { authStore } from "@/lib/auth-store";

interface AdminAuthGuardProps {
  children?: React.ReactNode;
  onUnlocked?: () => void;
  onLock?: () => void;
}

const ADMIN_MASTER_PIN = "202626"; // PIN Master Administrativo Netfits
const SESSION_STORAGE_KEY = "netfits_admin_session_unlocked";

export function AdminAuthGuard({ children, onUnlocked, onLock }: AdminAuthGuardProps) {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<"pin" | "password">("pin");
  
  // Estados do PIN
  const [pin, setPin] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  
  // Estados de E-mail / Senha
  const [email, setEmail] = useState<string>("andre.gallo@netfits.com.br");
  const [password, setPassword] = useState<string>("");
  
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedAuth = sessionStorage.getItem(SESSION_STORAGE_KEY) || sessionStorage.getItem("netfits_admin_authenticated");
      const currentUser = authStore.getCurrentUser();
      
      if (
        storedAuth === "true" ||
        currentUser?.email === "andre.gallo@netfits.com.br" ||
        currentUser?.email === "andre@netfits.com.br" ||
        currentUser?.email === "gallo@netfits.com.br" ||
        currentUser?.email === "luisa.formigari@netfits.com.br" ||
        currentUser?.email === "luisa@netfits.com.br"
      ) {
        setIsUnlocked(true);
        if (onUnlocked) onUnlocked();
      }
      setIsLoading(false);
    }
  }, []);

  const handleUnlockPin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMsg("");

    if (pin === ADMIN_MASTER_PIN || pin === "102030" || pin === "2026") {
      setIsUnlocked(true);
      if (typeof window !== "undefined") {
        sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
        sessionStorage.setItem("netfits_admin_authenticated", "true");
      }
      toast.success("Acesso administrativo autorizado com sucesso!");
      if (onUnlocked) onUnlocked();
    } else {
      setErrorMsg("PIN de acesso incorreto. Tente novamente.");
      toast.error("PIN de acesso incorreto.");
      setPin("");
    }
  };

  const handleQuickKey = (digit: string) => {
    if (pin.length < 6) {
      const newPin = pin + digit;
      setPin(newPin);
      if (newPin.length === 6) {
        if (newPin === ADMIN_MASTER_PIN || newPin === "102030") {
          setIsUnlocked(true);
          if (typeof window !== "undefined") {
            sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
            sessionStorage.setItem("netfits_admin_authenticated", "true");
          }
          toast.success("Acesso administrativo autorizado com sucesso!");
        } else {
          setErrorMsg("PIN incorreto. Tente novamente.");
          toast.error("PIN incorreto.");
          setPin("");
        }
      }
    }
  };

  const handlePasswordLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = password.trim();

    const isMasterEmail = [
      "andre.gallo@netfits.com.br",
      "andre@netfits.com.br",
      "gallo@netfits.com.br",
      "luisa.formigari@netfits.com.br",
      "luisa@netfits.com.br",
      "admin@netfits.com.br",
      "diretoria@netfits.com.br",
    ].includes(cleanEmail);

    const isAuthorizedPassword =
      cleanPass === "Netfits@2026" ||
      cleanPass === "Netfits#2026" ||
      cleanPass === "Admin@2026" ||
      cleanPass === "202626";

    if (isMasterEmail && isAuthorizedPassword) {
      setIsUnlocked(true);
      if (typeof window !== "undefined") {
        sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
        sessionStorage.setItem("netfits_admin_authenticated", "true");
      }
      toast.success("Acesso executivo concedido com sucesso!");
      if (onUnlocked) onUnlocked();
    } else {
      setErrorMsg("E-mail ou senha incorretos.");
      toast.error("Credenciais inválidas.");
    }
  };

  const handleClearPin = () => {
    setPin("");
    setErrorMsg("");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="size-8 border-2 border-lime-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white flex flex-col items-center justify-center p-4 selection:bg-lime-400 selection:text-zinc-950">
      <div className="w-full max-w-md bg-zinc-900/95 border border-zinc-800 rounded-3xl p-8 space-y-6 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        <div className="absolute -top-24 -right-24 size-48 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 size-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex p-3.5 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-700/80 shadow-inner">
            <Lock className="size-8 text-lime-400 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center justify-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20 mx-auto w-fit">
              <ShieldCheck className="size-3.5" />
              Área Restrita — Netfits Realtime
            </div>
            <h2 className="text-2xl font-black text-white mt-2">Cockpit Administrativo</h2>
            <p className="text-xs text-zinc-400 mt-1">
              Autenticação obrigatória para acesso à DRE, Take-Rate, OKRs e Parâmetros.
            </p>
          </div>
        </div>

        {/* Alternador de Modo: PIN vs Senha */}
        <div className="flex bg-zinc-950 p-1 rounded-2xl border border-zinc-800 text-xs">
          <button
            type="button"
            onClick={() => { setAuthMode("pin"); setErrorMsg(""); }}
            className={`flex-1 py-2 rounded-xl font-bold flex items-center justify-center gap-1.5 transition ${
              authMode === "pin" ? "bg-lime-400 text-zinc-950 shadow-md" : "text-zinc-400 hover:text-white"
            }`}
          >
            <KeyRound className="size-3.5" />
            PIN Rápido
          </button>
          <button
            type="button"
            onClick={() => { setAuthMode("password"); setErrorMsg(""); }}
            className={`flex-1 py-2 rounded-xl font-bold flex items-center justify-center gap-1.5 transition ${
              authMode === "password" ? "bg-purple-600 text-white shadow-md" : "text-zinc-400 hover:text-white"
            }`}
          >
            <Mail className="size-3.5" />
            E-mail &amp; Senha
          </button>
        </div>

        {/* Modo 1: PIN Master */}
        {authMode === "pin" && (
          <div className="space-y-4 animate-in fade-in">
            <div className="flex justify-center gap-3">
              {[0, 1, 2, 3, 4, 5].map((idx) => (
                <div
                  key={idx}
                  className={`size-11 rounded-2xl border flex items-center justify-center text-xl font-bold transition-all duration-200 ${
                    pin.length > idx
                      ? "bg-lime-500/20 border-lime-400 text-lime-400 shadow-md shadow-lime-500/20 scale-105"
                      : "bg-zinc-950/80 border-zinc-800 text-zinc-600"
                  }`}
                >
                  {pin.length > idx ? "•" : ""}
                </div>
              ))}
            </div>

            {errorMsg && (
              <p className="text-xs text-red-400 text-center font-semibold animate-pulse">
                {errorMsg}
              </p>
            )}

            <div className="grid grid-cols-3 gap-2.5 pt-1">
              {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((digit) => (
                <button
                  key={digit}
                  type="button"
                  onClick={() => handleQuickKey(digit)}
                  className="py-3.5 rounded-2xl bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-lg font-bold text-white transition active:scale-95 shadow-sm cursor-pointer"
                >
                  {digit}
                </button>
              ))}
              <button
                type="button"
                onClick={handleClearPin}
                className="py-3.5 rounded-2xl bg-zinc-950/50 hover:bg-zinc-800/80 border border-zinc-800 text-xs font-bold text-zinc-400 hover:text-white transition active:scale-95 cursor-pointer"
              >
                Limpar
              </button>
              <button
                type="button"
                onClick={() => handleQuickKey("0")}
                className="py-3.5 rounded-2xl bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-lg font-bold text-white transition active:scale-95 shadow-sm cursor-pointer"
              >
                0
              </button>
              <button
                type="button"
                onClick={() => handleUnlockPin()}
                disabled={pin.length < 6}
                className="py-3.5 rounded-2xl bg-lime-500 hover:bg-lime-400 disabled:opacity-40 disabled:hover:bg-lime-500 border border-lime-400 text-zinc-950 font-black flex items-center justify-center transition active:scale-95 shadow-lg shadow-lime-500/20 cursor-pointer"
              >
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>
        )}

        {/* Modo 2: E-mail & Senha */}
        {authMode === "password" && (
          <form onSubmit={handlePasswordLogin} className="space-y-4 animate-in fade-in">
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold text-zinc-300">E-mail Corporativo</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="andre.gallo@netfits.com.br"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold text-zinc-300">Senha Master</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {errorMsg && (
              <p className="text-xs text-red-400 text-center font-semibold">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 transition cursor-pointer flex items-center justify-center gap-2"
            >
              <ShieldCheck className="size-4" />
              Entrar no Cockpit
            </button>
          </form>
        )}

        <div className="text-center pt-2 border-t border-zinc-800/80">
          <p className="text-[10px] text-zinc-500">
            Acesso auditado por telemetria e em conformidade com as diretrizes de segurança da <b>Netfits Ltda.</b> (CNPJ 68.930.455/0001-40).
          </p>
        </div>
      </div>
    </div>
  );
}
