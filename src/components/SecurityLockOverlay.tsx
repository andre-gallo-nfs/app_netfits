import { useState } from "react";
import {
  Lock,
  Fingerprint,
  KeyRound,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
  LogOut,
  Sparkles,
} from "lucide-react";
import netfitsDarkLogo from "@/assets/netfits-logo-dark.png";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { appLockStore } from "@/lib/app-lock-store";
import { authStore } from "@/lib/auth-store";

export function SecurityLockOverlay() {
  const activeUser = sharedSandboxStore.useActiveUser();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticatingBio, setIsAuthenticatingBio] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleBiometricUnlock = async () => {
    setErrorMessage(null);
    setIsAuthenticatingBio(true);
    try {
      const res = await appLockStore.unlockWithBiometrics();
      if (!res.success && res.error) {
        setErrorMessage(res.error);
      }
    } finally {
      setIsAuthenticatingBio(false);
    }
  };

  const handlePasswordUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    const res = appLockStore.unlockWithPassword(password);
    if (!res.success && res.error) {
      setErrorMessage(res.error);
    }
  };

  const initials = activeUser.fullName
    ? activeUser.fullName
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "NF";

  const handleLogout = () => {
    sharedSandboxStore.clearActiveSession();
    authStore.logoutUser();
    appLockStore.setUnlocked(false);
    window.location.href = "/auth";
  };

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950 text-white flex flex-col items-center justify-between p-6 select-none overflow-y-auto">
      {/* Top Header */}
      <div className="w-full max-w-sm flex items-center justify-between pt-4">
        <div className="flex items-center gap-2">
          <img src={netfitsDarkLogo} alt="Netfits" className="h-7 w-auto object-contain" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400 font-medium">
          <ShieldCheck className="size-3.5 text-lime-400" />
          <span>Proteção Ativa</span>
        </div>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-sm my-auto py-6 space-y-6 text-center">
        {/* User Avatar & Lock Badge */}
        <div className="relative mx-auto size-20">
          <div className="size-20 rounded-3xl bg-gradient-to-tr from-purple-700 via-purple-600 to-lime-400 p-0.5 shadow-2xl shadow-purple-900/40">
            <div className="size-full bg-zinc-900 rounded-[22px] flex items-center justify-center text-white text-2xl font-black">
              {initials}
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 size-7 rounded-xl bg-lime-400 text-zinc-950 grid place-items-center shadow-lg ring-2 ring-zinc-950">
            <Lock className="size-3.5 stroke-[2.5]" />
          </div>
        </div>

        {/* User Info */}
        <div className="space-y-1">
          <h1 className="text-xl font-bold text-white tracking-tight">
            Olá, {activeUser.fullName || "Atleta Netfits"}
          </h1>
          <p className="text-xs text-zinc-400 font-mono">
            {activeUser.identifier || activeUser.email || ""}
          </p>
        </div>

        {/* Error Feedback */}
        {errorMessage && (
          <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium animate-shake">
            {errorMessage}
          </div>
        )}

        {/* Action 1: Desbloquear com Biometria */}
        <div className="space-y-2">
          <button
            type="button"
            onClick={handleBiometricUnlock}
            disabled={isAuthenticatingBio}
            className="w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 active:scale-98 text-white font-bold text-sm shadow-xl shadow-purple-600/30 flex items-center justify-center gap-3 transition cursor-pointer"
          >
            <Fingerprint className={`size-6 ${isAuthenticatingBio ? "animate-pulse" : ""}`} />
            <span>
              {isAuthenticatingBio ? "Aguardando sensor biométrico..." : "Desbloquear com Biometria"}
            </span>
            <Sparkles className="size-4 text-lime-300 ml-auto" />
          </button>
          <p className="text-[11px] text-zinc-500">
            Validação oficial via Impressão Digital ou Reconhecimento Facial do celular
          </p>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-800" />
          </div>
          <span className="relative bg-zinc-950 px-3 text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">
            ou digite sua senha
          </span>
        </div>

        {/* Action 2: Formulário de Senha */}
        <form onSubmit={handlePasswordUnlock} className="space-y-3">
          <div className="relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500">
              <KeyRound className="size-4" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha cadastrada"
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 transition"
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition"
            >
              {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 active:scale-98 text-zinc-200 font-semibold text-xs flex items-center justify-center gap-2 border border-zinc-800 transition cursor-pointer"
          >
            <span>Desbloquear com Senha</span>
            <ArrowRight className="size-3.5" />
          </button>
        </form>
      </div>

      {/* Bottom Footer Options */}
      <div className="w-full max-w-sm pt-4 pb-2 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-500">
        <button
          type="button"
          onClick={handleLogout}
          className="hover:text-zinc-300 flex items-center gap-1.5 transition cursor-pointer"
        >
          <LogOut className="size-3.5" />
          <span>Trocar de Conta / Sair</span>
        </button>

        <span className="text-[10px] text-zinc-600">
          Netfits Guard v1.0
        </span>
      </div>
    </div>
  );
}
