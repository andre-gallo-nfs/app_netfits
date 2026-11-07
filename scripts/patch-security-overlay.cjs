const fs = require('fs');

const path = 'C:\\Users\\aacga\\Projetos\\app_netfits\\src\\components\\SecurityLockOverlay.tsx';

const content = `import { useState, useEffect, useRef } from "react";
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
  Unlock,
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
  const inputRef = useRef<HTMLInputElement>(null);

  // Se não houver usuário autenticado no dispositivo, nunca exibir overlay de bloqueio.
  if (!activeUser || !activeUser.id) {
    if (typeof window !== "undefined") {
      window.location.replace("/auth");
    }
    return null;
  }

  const handleBiometricUnlock = async (isAutoPrompt = false) => {
    if (!appLockStore.isBiometricsAvailable()) {
      if (!isAutoPrompt) {
        setErrorMessage("Sensor biométrico não disponível neste aparelho. Toque em 'Desbloquear e Acessar' ou digite sua senha.");
      }
      return;
    }

    setErrorMessage(null);
    setIsAuthenticatingBio(true);

    try {
      const timeoutPromise = new Promise<{ success: boolean; error?: string }>((resolve) =>
        setTimeout(() => resolve({ success: false, error: "Tempo esgotado ao ler Face ID. Digite sua senha." }), 3000)
      );
      const res = await Promise.race([appLockStore.unlockWithBiometrics(), timeoutPromise]);
      if (!res.success && res.error && !isAutoPrompt) {
        setErrorMessage(res.error);
      }
    } catch (err: any) {
      if (!isAutoPrompt) {
        setErrorMessage("Não foi possível ler o Face ID. Use sua senha ou o botão de desbloqueio.");
      }
    } finally {
      setIsAuthenticatingBio(false);
    }
  };

  // Delay suave de 800ms para aguardar o ciclo de renderização no iOS (apenas se biometria suportada)
  useEffect(() => {
    let timer: any = null;
    if (appLockStore.isBiometricsAvailable()) {
      timer = setTimeout(() => {
        handleBiometricUnlock(true);
      }, 800);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  const handlePasswordUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsAuthenticatingBio(false);
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
    appLockStore.forceEmergencyUnlock();
    if (typeof window !== "undefined") {
      window.location.replace("/auth");
    }
  };

  const handleEmergencyUnlock = () => {
    appLockStore.forceEmergencyUnlock();
  };

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950 text-white flex flex-col items-center justify-between px-6 pt-[calc(env(safe-area-inset-top,0px)+1rem)] pb-[calc(env(safe-area-inset-bottom,0px)+1.5rem)] overflow-y-auto">
      {/* Top Header */}
      <div className="w-full max-w-sm flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <img src={netfitsDarkLogo} alt="Netfits" className="h-7 w-auto object-contain" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400 font-medium">
          <ShieldCheck className="size-3.5 text-lime-400" />
          <span>Proteção Ativa</span>
        </div>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-sm my-auto py-4 space-y-5 text-center">
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
          <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium">
            {errorMessage}
          </div>
        )}

        {/* Botão Primário: Desbloquear e Acessar (Verde Limão KV Oficial) */}
        <div className="pt-1">
          <button
            type="button"
            onClick={handleEmergencyUnlock}
            className="w-full py-4 px-5 rounded-2xl bg-[#C8F135] hover:bg-[#b5dc28] active:scale-95 text-[#202127] font-black text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-lime-400/20 transition cursor-pointer"
          >
            <Unlock className="size-5 stroke-[2.5] text-[#202127]" />
            <span>Desbloquear e Acessar Meu App</span>
          </button>
          <p className="text-[11px] text-zinc-500 mt-1.5">
            Toque para liberar o acesso seguro à sua conta
          </p>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center py-0.5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-800" />
          </div>
          <span className="relative bg-zinc-950 px-3 text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
            ou confirme por biometria / senha
          </span>
        </div>

        {/* Action 2: Desbloquear com Biometria (Face ID / Touch ID) */}
        <button
          type="button"
          onClick={() => handleBiometricUnlock(false)}
          disabled={isAuthenticatingBio}
          className="w-full py-3.5 px-4 rounded-xl bg-purple-700/40 hover:bg-purple-700/60 active:scale-98 text-white font-bold text-xs border border-purple-500/30 flex items-center justify-center gap-2.5 transition cursor-pointer disabled:opacity-75"
        >
          <Fingerprint className={\`size-4.5 \${isAuthenticatingBio ? "animate-pulse text-lime-400" : ""}\`} />
          <span>
            {isAuthenticatingBio ? "Lendo Face ID..." : "Validar com Face ID / Touch ID"}
          </span>
          <Sparkles className="size-3.5 text-lime-300 ml-auto" />
        </button>

        {/* Action 3: Formulário de Senha */}
        <form onSubmit={handlePasswordUnlock} className="space-y-2.5 text-left">
          <div
            onClick={() => inputRef.current?.focus()}
            onTouchStart={() => inputRef.current?.focus()}
            className="relative cursor-text"
          >
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none">
              <KeyRound className="size-4" />
            </div>
            <input
              ref={inputRef}
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha cadastrada"
              className="w-full pl-10 pr-12 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-base text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-500 transition select-text"
              style={{ WebkitUserSelect: "text", userSelect: "text" }}
              autoComplete="current-password"
              inputMode="text"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowPassword(!showPassword);
              }}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition cursor-pointer p-1"
              aria-label={showPassword ? "Ocultar senha" : "Ver senha"}
            >
              {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 active:scale-98 text-zinc-300 font-semibold text-xs flex items-center justify-center gap-2 border border-zinc-800 transition cursor-pointer"
          >
            <span>Desbloquear com Senha</span>
            <ArrowRight className="size-3.5" />
          </button>
        </form>
      </div>

      {/* Bottom Footer Options */}
      <div className="w-full max-w-sm pt-3 pb-2 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-500">
        <button
          type="button"
          onClick={handleLogout}
          className="hover:text-zinc-300 flex items-center gap-1.5 transition cursor-pointer"
        >
          <LogOut className="size-3.5" />
          <span>Trocar de Conta / Sair</span>
        </button>

        <span className="text-[10px] text-zinc-600">
          Netfits Guard v1.5
        </span>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated SecurityLockOverlay.tsx to v1.5');
