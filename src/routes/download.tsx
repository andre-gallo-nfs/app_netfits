import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  Smartphone, 
  Globe, 
  ArrowRight, 
  QrCode, 
  CheckCircle2, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Download,
  Apple
} from "lucide-react";
import netfitsDarkLogo from "@/assets/netfits-logo-dark.png";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: "Baixar Aplicativo Netfits — iOS, Android & Web App Instantâneo" },
      {
        name: "description",
        content:
          "Baixe o aplicativo Netfits oficial para iOS na App Store, para Android no Google Play ou acesse instantaneamente via Web App PWA.",
      },
      { property: "og:title", content: "Baixar Aplicativo Netfits — iOS, Android & PWA" },
    ],
  }),
  component: DownloadAppPage,
});

function DownloadAppPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-purple-500 selection:text-white">
      {/* Header Corporativo */}
      <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/home" className="flex items-center gap-2.5">
            <img
              src={netfitsDarkLogo}
              alt="Netfits"
              className="h-9 w-auto object-contain rounded-lg bg-zinc-900 p-1 border border-zinc-800"
            />
            <span className="font-extrabold tracking-tight text-xl text-white">
              Netfits <span className="text-xs font-bold text-lime-400 font-mono">App</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-zinc-300">
            <Link to="/home" className="hover:text-white transition">Homepage</Link>
            <Link to="/parceiros" className="hover:text-lime-400 transition">Parceiros</Link>
            <Link to="/associado" className="hover:text-amber-400 transition">Associados</Link>
            <Link to="/faq" className="hover:text-cyan-400 transition">FAQ</Link>
            <Link to="/contato" className="hover:text-indigo-400 transition">Contato</Link>
          </nav>

          <Link
            to="/"
            className="text-xs font-bold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full transition"
          >
            Acesso Direto Web →
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-purple-950/40 via-zinc-950 to-zinc-950 border-b border-zinc-800/60">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20">
            Download & Acesso Oficial
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white">
            Escolha como deseja acessar a Netfits
          </h1>
          <p className="text-sm md:text-base text-zinc-300 max-w-xl mx-auto leading-relaxed">
            Baixe nosso aplicativo oficial nas lojas do seu smartphone ou entre instantaneamente através da nossa versão Web App PWA.
          </p>
        </div>
      </section>

      {/* 3 Download Cards Grid */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Apple App Store */}
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between space-y-6 hover:border-purple-500/50 transition-all duration-300 shadow-xl group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="size-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-white group-hover:scale-110 transition">
                  <Apple className="size-6 text-white" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-500/30">
                  iOS / iPhone
                </span>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-white">Apple App Store</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Compatível com iPhone e iPad. Requer iOS 16.0 ou superior.
                </p>
              </div>

              <div className="space-y-2 pt-2 text-xs text-zinc-300">
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-lime-400 shrink-0" />
                  Sincronização com Apple Health
                </p>
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-lime-400 shrink-0" />
                  Notificações push em tempo real
                </p>
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-lime-400 shrink-0" />
                  Carteira nfs com Face ID
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-800">
              <a
                href="https://apps.apple.com/app/netfits"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-2xl bg-white hover:bg-zinc-200 text-zinc-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg transition"
              >
                <Apple className="size-4" />
                Baixar na App Store
              </a>
              <p className="text-[10px] text-center text-zinc-500">Versão 2.4.0 · 48.5 MB</p>
            </div>
          </div>

          {/* Card 2: Google Play Store */}
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between space-y-6 hover:border-lime-500/50 transition-all duration-300 shadow-xl group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="size-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-lime-400 group-hover:scale-110 transition">
                  <Smartphone className="size-6 text-lime-400" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-lime-400 bg-lime-950/60 px-2.5 py-1 rounded-full border border-lime-500/30">
                  Android
                </span>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-white">Google Play Store</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Compatível com smartphones Android. Requer Android 10.0 ou superior.
                </p>
              </div>

              <div className="space-y-2 pt-2 text-xs text-zinc-300">
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-lime-400 shrink-0" />
                  Integração com Google Fit
                </p>
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-lime-400 shrink-0" />
                  Sincronização Garmin & Strava
                </p>
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-lime-400 shrink-0" />
                  Desempenho otimizado Android
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-800">
              <a
                href="https://play.google.com/store/apps/details?id=com.netfits.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-2xl bg-lime-400 hover:bg-lime-300 text-zinc-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg transition"
              >
                <Download className="size-4" />
                Disponível no Google Play
              </a>
              <p className="text-[10px] text-center text-zinc-500">Versão 2.4.0 · 34.2 MB</p>
            </div>
          </div>

          {/* Card 3: Web App Instantâneo PWA */}
          <div className="bg-gradient-to-b from-purple-950/40 via-zinc-900 to-zinc-900 border border-purple-500/30 rounded-3xl p-6 flex flex-col justify-between space-y-6 hover:border-purple-400 transition-all duration-300 shadow-xl group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="size-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition">
                  <Globe className="size-6 text-purple-400" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-500/30">
                  Instantâneo PWA
                </span>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-white">Web App (Navegador)</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Acesse imediatamente pelo navegador de qualquer celular ou computador, sem instalar nada.
                </p>
              </div>

              <div className="space-y-2 pt-2 text-xs text-zinc-300">
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-lime-400 shrink-0" />
                  Acesso instantâneo sem download
                </p>
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-lime-400 shrink-0" />
                  PWA Instalável na tela inicial
                </p>
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-lime-400 shrink-0" />
                  Funciona offline e em qualquer tela
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-800">
              <Link
                to="/"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 transition"
              >
                <Activity className="size-4" />
                Abrir Versão Web Instantânea →
              </Link>
              <p className="text-[10px] text-center text-purple-300 font-semibold">Recomendado para teste imediato</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-900 text-center text-xs text-zinc-500 space-y-2">
        <p>© 2026 Netfits Tecnologia S.A. Todos os direitos reservados.</p>
        <p><Link to="/home" className="text-zinc-400 hover:underline">Voltar para a Homepage Institucional</Link></p>
      </footer>
    </div>
  );
}
