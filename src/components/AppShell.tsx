import { Link, useRouterState } from "@tanstack/react-router";
import { Home, ShoppingBag, Activity, Wallet, Award, Building2, Lock } from "lucide-react";
import type { ReactNode } from "react";
import netfitsDarkLogo from "@/assets/netfits-logo-dark.png";
import profileAvatar from "@/assets/profile-avatar.jpg";
import { useWallet } from "@/lib/wallet-store";
import { useBadges, badgesStore } from "@/lib/badges-store";
import { NetfitAiAssistant } from "./NetfitAiAssistant";

const tabs = [
  { to: "/feed", label: "Feed", icon: Home },
  { to: "/market", label: "Shop", icon: ShoppingBag },
  { to: "/levels", label: "Badges", icon: Award },
  { to: "/wallet", label: "Carteira", icon: Wallet },
] as const;

import { useEffect } from "react";
import { nativeBridge } from "@/lib/native-bridge";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { SecurityLockOverlay } from "./SecurityLockOverlay";
import { useAppLock, appLockStore } from "@/lib/app-lock-store";

export function AppShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const isUnlocked = useAppLock();

  useEffect(() => {
    // Registrar Service Worker com invalidação automática de cache em deploys novos
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => reg.update())
        .catch(() => {});

      // Forçar limpeza de caches legados se o navegador carregar um bundle antigo com erro
      window.addEventListener("error", (e) => {
        if (e.message && (e.message.includes("ReferenceError") || e.message.includes("Loading chunk"))) {
          if ("caches" in window) {
            caches.keys().then((keys) => {
              keys.forEach((k) => caches.delete(k));
            });
          }
        }
      });
    }
    // Inicializar status bar nativa do celular (evita sobreposição)
    nativeBridge.initNativeStatusBar();
    // Checagem de atualizações transparentes em nuvem (Over-The-Air)
    nativeBridge.checkForLiveUpdates();
  }, []);

  const isPublicRoute =
    path === "/" ||
    path === "/home" ||
    path === "/auth" ||
    path === "/admin" ||
    path.startsWith("/associado") ||
    path === "/faq" ||
    path === "/contato" ||
    path === "/parceiros" ||
    path === "/download";

  // 1. A tela de Cadastro / Login (/auth) é SEMPRE acessível e NUNCA bloqueada
  if (path === "/auth") {
    return <>{children}</>;
  }

  // 2. Se o dispositivo NÃO possui conta autenticada (primeiro acesso de novos usuários):
  // no app nativo ou em rotas privadas, redireciona diretamente para a tela de boas-vindas/cadastro (/auth)
  const hasSession = sharedSandboxStore.hasActiveSession();
  if (!hasSession) {
    if (nativeBridge.isNativePlatform() || !isPublicRoute) {
      if (typeof window !== "undefined" && path !== "/auth") {
        window.location.replace("/auth");
        return null;
      }
    }
  }

  // 3. Se o dispositivo JÁ possui conta autenticada e o app estiver bloqueado:
  // EXIGE BIOMETRIA REAL OU SENHA DO PRÓPRIO USUÁRIO LOGADO
  if (!isUnlocked) {
    if (nativeBridge.isNativePlatform() || !isPublicRoute) {
      return <SecurityLockOverlay />;
    }
  }

  // 4. Rotas públicas no navegador web (landing page, FAQ, parceiros, etc.)
  if (isPublicRoute) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen w-full flex justify-center bg-zinc-200/40">
      <div className="w-full max-w-md min-h-screen bg-background flex flex-col relative shadow-2xl ring-1 ring-black/5">
        {path !== "/profile" && <TopBar />}
        <main className={`flex-1 ${path === "/market" ? "overflow-hidden pb-16" : "overflow-y-auto pb-28"}`}>{children}</main>
        <NetfitAiAssistant />
        {/* Footer Navigation Bar (Cor Branco Sólido com Safe Area Inferior para Gestos e Home Bar) */}
        <nav
          className="fixed bottom-0 w-full max-w-md bg-white text-zinc-600 border-t border-zinc-200 px-6 pt-2.5 pb-[calc(env(safe-area-inset-bottom,0px)+0.75rem)] flex items-center justify-between z-40 shadow-lg"
          aria-label="Navegação Principal do Aplicativo"
        >
          {tabs.map((t) => {
            const active = path === t.to;
            const Icon = t.icon;
            return (
              <Link
                key={t.to}
                to={t.to}
                aria-label={`Aba ${t.label}`}
                aria-current={active ? "page" : undefined}
                className={`flex flex-col items-center justify-center min-h-[44px] min-w-[48px] gap-1 transition-all active:scale-95 ${
                  active ? "text-purple-600 font-bold" : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                <Icon className="size-5 shrink-0" strokeWidth={active ? 2.5 : 2} aria-hidden="true" />
                <span className="text-[10px] font-medium leading-none">{t.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

function TopBar() {
  const { balance } = useWallet();
  const badges = useBadges();
  const unlockedCount = badgesStore.getUnlockedCount();
  const totalCount = badgesStore.getTotalCount();
  const activeUser = sharedSandboxStore.useActiveUser();
  
  const initials = activeUser.fullName
    ? activeUser.fullName
        .trim()
        .split(" ")
        .map((n) => n[0])
        .join("")
        .substring(0, 2)
        .toUpperCase()
    : "NF";

  return (
    /* Header Navigation Bar (Protegido por Safe Area Superior para nunca ser sobreposto pela barra de status) */
    <header
      className="sticky top-0 z-30 bg-white text-zinc-900 border-b border-zinc-200 px-3.5 pt-[calc(env(safe-area-inset-top,0px)+0.625rem)] pb-2.5 flex items-center justify-between shadow-xs transition-all"
      role="banner"
    >
      <Link
        to="/feed"
        className="flex items-center gap-2 shrink-0 py-1 min-h-[44px]"
        aria-label="Ir para o Feed Principal Netfits"
      >
        <img
          src={netfitsDarkLogo}
          alt="Netfits Logo"
          className="h-8 w-auto object-contain shrink-0 rounded-lg shadow-sm"
        />
        <span className="font-extrabold tracking-tight text-xl text-zinc-900">
          Netfits
        </span>
        {typeof import.meta !== "undefined" && import.meta.env?.VITE_APP_ENV === "staging" && (
          <span className="text-[9px] font-black uppercase tracking-wider bg-amber-500/15 text-amber-700 border border-amber-500/30 px-1.5 py-0.5 rounded-full ml-1">
            Homolog
          </span>
        )}
      </Link>
      <div className="flex items-center gap-1.5 shrink-0">
        <Link
          to="/wallet"
          aria-label={`Carteira Netfits: ${balance.toLocaleString("pt-BR")} nfs`}
          className="bg-zinc-100 text-zinc-900 rounded-full px-2.5 py-1 min-h-[36px] flex items-center gap-1.5 ring-1 ring-zinc-200 hover:bg-zinc-200 active:scale-95 transition"
        >
          <div className="size-4 bg-purple-600 rounded-full flex items-center justify-center shrink-0">
            <span className="text-[7px] font-extrabold text-white">nfs</span>
          </div>
          <span className="text-[11px] font-mono font-extrabold tracking-wider text-purple-700">{balance.toLocaleString("pt-BR")}</span>
        </Link>

        <Link
          to="/levels"
          aria-label={`Galeria de Selos: ${unlockedCount} de ${totalCount} badges`}
          className="bg-purple-50 text-purple-700 rounded-full px-2.5 py-1 min-h-[36px] flex items-center gap-1 ring-1 ring-purple-200 font-bold hover:bg-purple-100 active:scale-95 transition-all text-[9.5px]"
        >
          <Award className="size-3.5 text-purple-600 shrink-0" aria-hidden="true" />
          <span className="font-extrabold">{unlockedCount}/{totalCount} Badges</span>
        </Link>

        <button
          type="button"
          onClick={() => appLockStore.lock()}
          title="Bloquear aplicativo (Exigir Biometria/Senha)"
          aria-label="Bloquear aplicativo e exigir biometria ou senha"
          className="size-9 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-950 grid place-items-center transition cursor-pointer active:scale-95"
        >
          <Lock className="size-4" aria-hidden="true" />
        </button>

        <Link
          to="/profile"
          aria-label={`Acessar Perfil de ${activeUser.fullName}`}
          title={activeUser.fullName}
          className="size-9 rounded-full overflow-hidden bg-purple-600 text-white font-extrabold text-[11px] flex items-center justify-center ring-2 ring-purple-500/20 shadow-xs hover:scale-105 active:scale-95 transition shrink-0"
        >
          {activeUser.avatarUrl ? (
            <img src={activeUser.avatarUrl} alt={activeUser.fullName} className="w-full h-full object-cover" />
          ) : (
            <span>{initials}</span>
          )}
        </Link>
      </div>
    </header>
  );
}
