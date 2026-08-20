import { Link, useRouterState } from "@tanstack/react-router";
import { Home, ShoppingBag, Activity, Wallet, Trophy, Medal, Sparkles, Crown } from "lucide-react";
import type { ReactNode } from "react";
import netfitsLogo from "@/assets/netfits-logo.png";
import netfitsMark from "@/assets/netfits-mark.png";
import profileAvatar from "@/assets/profile-avatar.jpg";
import { useWallet } from "@/lib/wallet-store";
import { useLevel, LEVEL_LABELS } from "@/lib/level-store";
import { NetfitAiAssistant } from "./NetfitAiAssistant";

const tabs = [
  { to: "/", label: "Feed", icon: Home },
  { to: "/market", label: "Shop", icon: ShoppingBag },
  { to: "/activities", label: "Atividades", icon: Activity },
  { to: "/levels", label: "Níveis", icon: Trophy },
  { to: "/wallet", label: "Carteira", icon: Wallet },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen w-full flex justify-center bg-zinc-200/40">
      <div className="w-full max-w-md min-h-screen bg-background flex flex-col relative shadow-2xl ring-1 ring-black/5">
        <TopBar />
        <main className="flex-1 overflow-y-auto pb-28">{children}</main>
        <NetfitAiAssistant />
        <nav className="fixed bottom-0 w-full max-w-md bg-background/90 backdrop-blur-md border-t border-zinc-950/5 px-6 pt-3 pb-8 flex items-center justify-between z-40">
          {tabs.map((t) => {
            const active = path === t.to;
            const Icon = t.icon;
            return (
              <Link
                key={t.to}
                to={t.to}
                className={`flex flex-col items-center gap-1 transition-transform active:scale-95 ${
                  active ? "text-foreground" : "text-muted-foreground"
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
  const level = useLevel();
  const LevelIcon = level === "elite" ? Crown : level === "prime" ? Sparkles : Medal;
  const levelTone =
    level === "elite"
      ? "bg-foreground text-background"
      : level === "prime"
      ? "bg-brand text-brand-foreground"
      : "bg-brand/15 text-brand";
  return (
    <header className="sticky top-0 z-30 bg-background/90 backdrop-blur-md px-4 py-3 border-b border-zinc-950/5 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2" aria-label="netfits">
        <img
          src={netfitsMark}
          alt=""
          className="h-9 w-9 object-contain rounded-lg bg-foreground p-1 shadow-lg shadow-foreground/10"
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
          className="bg-muted rounded-full pl-2 pr-3 py-1 flex items-center gap-1.5 ring-1 ring-black/5"
        >
          <div className="size-4 bg-brand rounded-full flex items-center justify-center">
            <span className="text-[7px] font-bold text-brand-foreground">nfs</span>
          </div>
          <span className="text-xs font-semibold tracking-wider">{balance.toLocaleString("pt-BR")}</span>
        </Link>

        <Link
          to="/levels"
          className="bg-muted rounded-full pl-1.5 pr-2.5 py-1 flex items-center gap-1 ring-1 ring-black/5"
        >
          <div className={`size-4 rounded-full flex items-center justify-center ${levelTone}`}>
            <LevelIcon className="size-2.5" />
          </div>
          <span className="text-[10px] font-bold tracking-wide">{LEVEL_LABELS[level]}</span>
        </Link>

        <Link
          to="/parceiros"
          aria-label="Seja um Parceiro Comercial"
          className="bg-lime-400/10 text-lime-600 dark:text-lime-400 hover:bg-lime-400 hover:text-black px-2 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest transition-colors ring-1 ring-lime-400/30"
        >
          Parceiros
        </Link>
        <Link
          to="/admin"
          aria-label="Painel Admin"
          className="bg-purple-600/10 text-purple-600 hover:bg-purple-600 hover:text-white px-2 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest transition-colors ring-1 ring-purple-600/30"
        >
          Admin
        </Link>
        <Link
          to="/profile"
          aria-label="Meu perfil"
          className="size-8 rounded-full overflow-hidden ring-1 ring-black/10 shadow-sm hover:ring-foreground/30 transition"
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
