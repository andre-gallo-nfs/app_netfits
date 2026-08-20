/**
 * Institutional Web Header Component — Netfits Tecnologia Ltda.
 * Menu fixo e unificado para todas as páginas web (Home, Admin, Associados, Parceiros, FAQ, Contato, Download)
 */

import { Link, useLocation } from "@tanstack/react-router";
import { 
  Building2, 
  Users, 
  HelpCircle, 
  Mail, 
  Lock, 
  Download, 
  Home, 
  Activity 
} from "lucide-react";
import netfitsDarkLogo from "@/assets/netfits-logo-dark.png";

export function InstitutionalWebHeader() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { to: "/home", label: "Home", icon: Home, color: "hover:text-purple-400" },
    { to: "/admin", label: "Admin", icon: Lock, color: "hover:text-purple-400" },
    { to: "/associado", label: "Associados", icon: Users, color: "hover:text-amber-400" },
    { to: "/parceiros", label: "Parceiros", icon: Building2, color: "hover:text-lime-400" },
    { to: "/faq", label: "FAQ", icon: HelpCircle, color: "hover:text-cyan-400" },
    { to: "/contato", label: "Contato", icon: Mail, color: "hover:text-indigo-400" },
    { to: "/download", label: "Download App", icon: Download, color: "hover:text-lime-400" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80 px-6 py-4 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo & Marca */}
        <Link to="/home" className="flex items-center gap-2.5 shrink-0 group">
          <img
            src={netfitsDarkLogo}
            alt="Netfits"
            className="h-9 w-auto object-contain rounded-lg bg-zinc-900 p-1 border border-zinc-800 group-hover:border-purple-500/50 transition"
          />
          <span className="font-extrabold tracking-tight text-xl text-white flex items-center gap-1">
            Netfits <span className="text-xs font-bold text-lime-400 font-mono">WEB</span>
          </span>
        </Link>

        {/* Links de Navegação Fixos & Unificados (Desktop) */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold text-zinc-300">
          {navLinks.map((item) => {
            const isActive = currentPath === item.to || (item.to === "/home" && currentPath === "/");
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`transition-all flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg ${
                  isActive
                    ? "text-white font-extrabold bg-zinc-900 border border-zinc-700 shadow-sm"
                    : `text-zinc-400 ${item.color} hover:bg-zinc-900/50`
                }`}
              >
                <Icon className={`size-3.5 ${isActive ? "text-lime-400" : ""}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* CTA Direct App Access */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs px-4 py-2.5 rounded-full shadow-lg shadow-purple-600/30 transition-all duration-200 flex items-center gap-1.5"
          >
            <Activity className="size-4" />
            Abrir App Netfits →
          </Link>
        </div>
      </div>

      {/* Subbar de Navegação Responsiva (Mobile / Tablet) */}
      <div className="lg:hidden flex items-center justify-around pt-3 mt-3 border-t border-zinc-900 text-[11px] font-semibold text-zinc-400 overflow-x-auto no-scrollbar gap-2">
        {navLinks.map((item) => {
          const isActive = currentPath === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`px-2 py-1 rounded transition-colors whitespace-nowrap ${
                isActive ? "text-lime-400 font-bold bg-zinc-900" : "hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
