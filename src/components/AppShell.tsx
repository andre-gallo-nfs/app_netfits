import { Link, useRouterState } from "@tanstack/react-router";
import { Home, ShoppingBag, Activity, Wallet, Award } from "lucide-react";
import type { ReactNode } from "react";
import netfitsLogo from "@/assets/netfits-logo.png";
import netfitsMark from "@/assets/netfits-mark.png";
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

export function AppShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });

  if (path === "/admin" || path.startsWith("/associado")) {
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

  return (
    /* Header Navigation Bar (Cor Branco Sólido Sem Transparência - bg-white) */
    <header className="sticky top-0 z-30 bg-white text-zinc-900 border-b border-zinc-200 px-4 py-3 flex items-center justify-between shadow-sm">
      <Link to="/" className="flex items-center gap-2" aria-label="netfits">
        <img
          src={netfitsMark}
          alt=""
          className="h-9 w-9 object-contain rounded-lg bg-purple-600 p-1 shadow-lg shadow-purple-600/20"
        />
        <img
          src={netfitsLogo}
          alt="netfits"
          className="h-[29px] w-auto object-contain [filter:brightness(0)]"
        />
      </Link>
      <div className="flex items-center gap-2">
        <Link
          to="/wallet"
          className="bg-zinc-100 text-zinc-900 rounded-full pl-2 pr-3 py-1 flex items-center gap-1.5 ring-1 ring-zinc-200 hover:bg-zinc-200 transition"
        >
          <div className="size-4 bg-brand rounded-full flex items-center justify-center">
            <span className="text-[7px] font-extrabold text-white">nfs</span>
          </div>
          <span className="text-xs font-mono font-bold tracking-wider text-purple-700">{balance.toLocaleString("pt-BR")}</span>
        </Link>

        <Link
          to="/levels"
          className="bg-purple-50 text-purple-700 rounded-full pl-2 pr-3 py-1 flex items-center gap-1.5 ring-1 ring-purple-200 font-bold hover:bg-purple-100 transition-all"
        >
          <Award className="size-3.5 text-purple-600" />
          <span className="text-[10px] tracking-wide font-extrabold">{unlockedCount}/{totalCount} Badges</span>
        </Link>

        <Link
          to="/profile"
          aria-label="Meu perfil"
          className="size-8 rounded-full overflow-hidden ring-1 ring-zinc-200 shadow-sm hover:ring-purple-500 transition"
        >
          <img
            src={profileAvatar}
            alt="Meu perfil"
            width={32}
            height={32}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
    </header>
  );
}
