import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  Building2, 
  Dumbbell, 
  Flame, 
  Stethoscope, 
  Apple, 
  HeartPulse, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Award, 
  Activity,
  ShoppingBag,
  HelpCircle,
  Mail,
  Lock,
  ChevronRight,
  Zap,
  Globe,
  TrendingUp,
  CheckCircle2
} from "lucide-react";
import netfitsDarkLogo from "@/assets/netfits-logo-dark.png";
import netfitsMark from "@/assets/netfits-mark.png";

import { InstitutionalWebHeader } from "@/components/InstitutionalWebHeader";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Netfits Ltda. — A Primeira Camada de Fidelidade para a Vida em Movimento" },
      {
        name: "description",
        content:
          "Fazer cada movimento valer mais. Conheça a Netfits: feed de saúde, marketplace com cashback, ecossistema de parceiros e programa de fidelidade.",
      },
      { property: "og:title", content: "Netfits Ltda. — Fazer cada movimento valer mais" },
    ],
  }),
  component: InstitutionalHomePage,
});

function InstitutionalHomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-purple-500 selection:text-white">
      {/* 1. Header Web Corporativo Unificado */}
      <InstitutionalWebHeader />

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 px-6 border-b border-zinc-800/60 bg-gradient-to-b from-purple-950/40 via-zinc-950 to-zinc-950">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-3 bg-zinc-900/90 border-2 border-lime-400/80 rounded-2xl px-5 py-2.5 shadow-xl shadow-purple-950/40 backdrop-blur-md">
            <img src={netfitsDarkLogo} alt="Netfits Logo" className="h-9 w-auto object-contain shrink-0" />
            <div className="h-4 w-px bg-zinc-700" />
            <span className="text-xs sm:text-sm font-extrabold tracking-wider text-lime-400 uppercase">
              Netfits Ltda. — Healthspan & Loyalty
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Fazer cada movimento <br />
            <span className="bg-gradient-to-r from-lime-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              valer mais.
            </span>
          </h1>

          <p className="text-base md:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            A primeira camada de valor e fidelidade verticalizada para a vida em movimento. Recompensamos seus treinos, leitura e compras com cashback em pontos <code className="text-lime-400 font-mono">nfs</code> e conectamos você às melhores academias, clínicas e especialistas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              to="/download"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-zinc-950 hover:bg-zinc-200 font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl transition"
            >
              <Activity className="size-4" />
              Entrar no Aplicativo & Feed
            </Link>
            <Link
              to="/parceiros"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 transition"
            >
              <Building2 className="size-4 text-lime-400" />
              Cadastre seu Estabelecimento
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Os 4 Pilares do Ecossistema */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-purple-400">Ecossistema Integrado</span>
          <h2 className="text-3xl font-extrabold text-white">4 Pilares da Plataforma Netfits</h2>
          <p className="text-sm text-zinc-400">Como unificamos saúde, conteúdo, marketplace e serviços de prevenção em uma só moeda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 space-y-4 hover:border-purple-500/40 transition">
            <div className="size-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 grid place-items-center text-purple-400">
              <Zap className="size-6" />
            </div>
            <h3 className="text-xl font-bold text-white">1. Feed Editorial & Recompensas</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Leitura curada de artigos esportivos, postagens de treinos com GPS de wearables (Garmin, Strava) e acúmulo de pontos por engajamento (+5 nfs por ler, +10 nfs por compartilhar, +50 nfs por treino).
            </p>
          </div>

          <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 space-y-4 hover:border-lime-500/40 transition">
            <div className="size-12 rounded-2xl bg-lime-400/20 border border-lime-400/30 grid place-items-center text-lime-400">
              <ShoppingBag className="size-6" />
            </div>
            <h3 className="text-xl font-bold text-white">2. Netfits Shop com 2 nfs / R$</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Marketplace integrado com os maiores agregadores de e-commerce esportivo do Brasil. Ganhe 2,00 nfs por R$ 1,00 gasto no Shop com pagamento parcial/total com pontos e rastreabilidade total.
            </p>
          </div>

          <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 space-y-4 hover:border-amber-500/40 transition">
            <div className="size-12 rounded-2xl bg-amber-400/20 border border-amber-400/30 grid place-items-center text-amber-400">
              <Award className="size-6" />
            </div>
            <h3 className="text-xl font-bold text-white">3. Netfits Club (Fase 2)</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Assinatura por R$ 19,90/mês que dobra seus pontos em todas as compras no Shop (4,00 nfs por R$ 1,00) e concede cupons e acessos VIP a eventos e corridas de rua.
            </p>
          </div>

          <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 space-y-4 hover:border-cyan-500/40 transition">
            <div className="size-12 rounded-2xl bg-cyan-400/20 border border-cyan-400/30 grid place-items-center text-cyan-400">
              <ShieldCheck className="size-6" />
            </div>
            <h3 className="text-xl font-bold text-white">4. Rede Credenciada de Saúde</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Parceria com Academias, Assessorias Esportivas, Fisioterapia, Nutricionistas e Médicos do Esporte com verificação oficial no CNPJ, CRM, CRN, CREF e CREFITO.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Banner Chamativo para Parceiros Comerciais */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-950 via-zinc-900 to-zinc-950 border-y border-purple-500/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20">
              Credenciamento 100% Gratuito · Zero Mensalidade
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Sua Academia, Clínica ou Assessoria no ecossistema Netfits
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Sem mensalidades ou taxas fixas. Conecte seus serviços à nossa comunidade e seja remunerado diretamente por cada evento ou consulta contratada pelos nossos usuários.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              to="/parceiros"
              className="px-8 py-4 rounded-2xl bg-lime-400 hover:bg-lime-300 text-zinc-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl transition"
            >
              <Building2 className="size-4" />
              Cadastrar Minha Unidade / Consultório →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Seção Para Associados */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-lg">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">Programa de Afiliados & Criadores</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Programa de Associados Netfits</h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Treinadores, atletas e criadores de conteúdo esportivo recebem <strong className="text-amber-400">10,0% de comissão padrão</strong> sobre as receitas geradas a partir de seus links de indicação.
            </p>
          </div>

          <Link
            to="/associado"
            className="px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-extrabold text-xs flex items-center justify-center gap-2 shrink-0 transition"
          >
            <Users className="size-4" />
            Conhecer o Painel do Associado →
          </Link>
        </div>
      </section>

      {/* 6. Footer Corporativo Institucional */}
      <footer className="bg-zinc-950 border-t border-zinc-800 pt-16 pb-12 px-6 text-xs text-zinc-400">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img src={netfitsDarkLogo} alt="Netfits" className="h-7 w-auto rounded bg-zinc-900 p-0.5" />
              <span className="font-extrabold text-sm text-white">Netfits Ltda.</span>
            </div>
            <p className="text-zinc-500 leading-relaxed">
              Primeira plataforma de saúde preventiva, loyalty e healthspan para a vida em movimento no Brasil.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider mb-2">Navegação Web</h4>
            <p><Link to="/home" className="hover:text-white transition">Homepage Institucional</Link></p>
            <p><Link to="/parceiros" className="hover:text-white transition">Cadastro de Parceiros</Link></p>
            <p><Link to="/associado" className="hover:text-white transition">Programa de Associados</Link></p>
            <p><Link to="/faq" className="hover:text-white transition">FAQ / Central de Ajuda</Link></p>
            <p><Link to="/contato" className="hover:text-white transition">Contato & Suporte</Link></p>
          </div>

          <div className="space-y-2">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider mb-2">Ecossistema App</h4>
            <p><Link to="/" className="hover:text-white transition">App Feed de Notícias</Link></p>
            <p><Link to="/market" className="hover:text-white transition">Netfits Shop</Link></p>
            <p><Link to="/activities" className="hover:text-white transition">Atividades & Wearables</Link></p>
            <p><Link to="/wallet" className="hover:text-white transition">Carteira nfs</Link></p>
          </div>

          <div className="space-y-2">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider mb-2">Contato Corporativo</h4>
            <p className="text-zinc-400">Netfits Ltda.</p>
            <p className="text-zinc-400">suporte@netfits.com.br</p>
            <p className="text-zinc-400">São Paulo, SP — Brasil</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-600 text-[11px]">
          <p>© 2026 Netfits Ltda. Todos os direitos reservados.</p>
          <p>Slogan Oficial: "Fazer cada movimento valer mais."</p>
        </div>
      </footer>
    </div>
  );
}
