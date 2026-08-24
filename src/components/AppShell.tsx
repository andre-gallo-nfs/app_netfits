import { Link, useRouterState } from "@tanstack/react-router";
import { Home, ShoppingBag, Activity, Wallet, Award, Building2 } from "lucide-react";
import type { ReactNode } from "react";
import netfitsDarkLogo from "@/assets/netfits-logo-dark.png";
import profileAvatar from "@/assets/profile-avatar.jpg";
import { useWallet } from "@/lib/wallet-store";
import { useBadges, badgesStore } from "@/lib/badges-store";
import { NetfitAiAssistant } from "./NetfitAiAssistant";

const tabs = [
  { to: "/", label: "Feed", icon: Home },
  { to: "/market", label: "Shop", icon: ShoppingBag },
  { to: "/activities", label: "Atividades", icon: Activity },
  { to: "/levels", label: "Badges", icon: Award },
  { to: "/wallet", label: "Carteira", icon: Wallet },
] as const;

import { useEffect } from "react";
import { nativeBridge } from "@/lib/native-bridge";

import { sharedSandboxStore } from "@/lib/shared-sandbox-store";

export function AppShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });

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
    // Checagem de atualizações transparentes em nuvem (Over-The-Air)
    nativeBridge.checkForLiveUpdates();
  }, []);

  if (
    path === "/auth" ||
    path === "/admin" || 
    path.startsWith("/associado") || 
    path === "/home" || 
    path === "/faq" || 
    path === "/contato" || 
    path === "/parceiros" ||
    path === "/download"
  ) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen w-full flex justify-center bg-zinc-200/40">
      <div className="w-full max-w-md min-h-screen bg-background flex flex-col relative shadow-2xl ring-1 ring-black/5">
        <TopBar />
        <main className="flex-1 overflow-y-auto pb-28">{children}</main>
        <NetfitAiAssistant />
        {/* Footer Navigation Bar (Cor Branco Sólido Sem Transparência - bg-white) */}
        <nav className="fixed bottom-0 w-full max-w-md bg-white text-zinc-500 border-t border-zinc-200 px-6 pt-3 pb-8 flex items-center justify-between z-40 shadow-lg">
          {tabs.map((t) => {
            const active = path === t.to;
            const Icon = t.icon;
            return (
              <Link
                key={t.to}
                to={t.to}
                className={`flex flex-col items-center gap-1 transition-all active:scale-95 ${
                  active ? "text-purple-600 font-bold" : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                <Icon className="size-5 shrink-0" strokeWidth={active ? 2.5 : 2} />
                <span className="text-[10px] font-medium">{t.label}</span>
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
    /* Header Navigation Bar (Cor Branco Sólido Sem Transparência - bg-white) */
    <header className="sticky top-0 z-30 bg-white text-zinc-900 border-b border-zinc-200 px-3 py-2.5 flex items-center justify-between shadow-xs">
      <Link to="/home" className="flex items-center gap-2 shrink-0" aria-label="Netfits Homepage Institucional">
        <img
          src={netfitsDarkLogo}
          alt="Netfits"
          className="h-8 w-auto object-contain shrink-0 rounded-lg shadow-sm"
        />
        <span className="font-extrabold tracking-tight text-xl text-zinc-900">
          Netfits
        </span>
      </Link>
      <div className="flex items-center gap-1.5 shrink-0">
        <Link
          to="/wallet"
          className="bg-zinc-100 text-zinc-900 rounded-full px-2 py-0.5 flex items-center gap-1 ring-1 ring-zinc-200 hover:bg-zinc-200 transition"
        >
          <div className="size-3.5 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-[6px] font-extrabold text-white">nfs</span>
          </div>
          <span className="text-[11px] font-mono font-extrabold tracking-wider text-purple-700">{balance.toLocaleString("pt-BR")}</span>
        </Link>

        <Link
          to="/levels"
          className="bg-purple-50 text-purple-700 rounded-full px-2 py-0.5 flex items-center gap-1 ring-1 ring-purple-200 font-bold hover:bg-purple-100 transition-all text-[9px]"
        >
          <Award className="size-3 text-purple-600 shrink-0" />
          <span className="font-extrabold">{unlockedCount}/{totalCount} Badges</span>
        </Link>

        <Link
          to="/profile"
          aria-label="Meu perfil"
          title={activeUser.fullName}
          className="size-7 rounded-full bg-purple-600 text-white font-extrabold text-[10px] flex items-center justify-center ring-2 ring-purple-500/20 shadow-xs hover:scale-105 transition shrink-0"
        >
          <span>{initials}</span>
        </Link>
      </div>
    </header>
  );
}
