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
  CheckCircle2,
  Briefcase,
  Quote
} from "lucide-react";
import netfitsDarkLogo from "@/assets/netfits-logo-dark.png";
import netfitsMark from "@/assets/netfits-mark.png";
import andreGalloIronmanImg from "@/assets/andre-gallo-ironman.jpg";

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

export function InstitutionalHomePage() {
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
              to="/feed"
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
              Leitura curada de artigos esportivos, postagens de treinos com GPS de wearables (Garmin, Strava e Apple Health) e acúmulo de pontos nfs por engajamento ao ler, compartilhar e registrar suas atividades físicas.
            </p>
          </div>

          <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 space-y-4 hover:border-lime-500/40 transition">
            <div className="size-12 rounded-2xl bg-lime-400/20 border border-lime-400/30 grid place-items-center text-lime-400">
              <ShoppingBag className="size-6" />
            </div>
            <h3 className="text-xl font-bold text-white">2. Netfits Shop & Recompensas</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Marketplace integrado com os maiores agregadores de e-commerce esportivo do Brasil. Ganhe pontos nfs em todas as compras no Shop, com opção de resgate com pontos e rastreabilidade total de pedidos.
            </p>
          </div>

          <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 space-y-4 hover:border-amber-500/40 transition">
            <div className="size-12 rounded-2xl bg-amber-400/20 border border-amber-400/30 grid place-items-center text-amber-400">
              <Award className="size-6" />
            </div>
            <h3 className="text-xl font-bold text-white">3. Netfits Club (Fase 2)</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Clube de vantagens por assinatura mensal que concede cupons exclusivos, condições especiais no marketplace, conteúdos aprofundados e acessos VIP a eventos e corridas de rua.
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

      {/* 4. Carta do Fundador: Origem & Propósito */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border border-purple-500/30 p-8 md:p-12 shadow-2xl space-y-10">
          {/* Header da Carta */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-lime-400 bg-lime-400/10 px-3.5 py-1 rounded-full border border-lime-400/20 flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-lime-400" />
                Origem &amp; Propósito · Carta do Fundador
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
              Da negação à linha de chegada do Ironman:{" "}
              <span className="bg-gradient-to-r from-lime-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                por que criamos a Netfits.
              </span>
            </h2>
          </div>

          {/* Grid de 2 Colunas: Foto e Badges à Esquerda / Texto da Carta à Direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Coluna da Esquerda: Foto Oficial Ironman 70.3 + Badges */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative group rounded-3xl overflow-hidden border-2 border-lime-400/40 shadow-2xl shadow-purple-950/50 bg-zinc-950">
                <img
                  src={andreGalloIronmanImg}
                  alt="André Gallo na linha de chegada do Ironman 70.3 Florianópolis"
                  className="w-full h-auto object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />
                
                {/* Plaqueta de Vidro Translúcido sobre a Foto */}
                <div className="absolute bottom-3 left-3 right-3 bg-zinc-950/85 backdrop-blur-md border border-lime-400/40 rounded-2xl p-3.5 space-y-1 text-white shadow-xl">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider text-lime-400 flex items-center gap-1">
                      <Award className="size-3.5 text-lime-400" />
                      Ironman 70.3 Finisher
                    </span>
                    <span className="text-[10px] font-mono font-bold text-zinc-300 bg-zinc-900/90 px-2 py-0.5 rounded border border-zinc-700">
                      Peito 1563 · André
                    </span>
                  </div>
                  <p className="text-xs font-bold text-zinc-200">
                    Florianópolis, SC · Latin American Championship
                  </p>
                  <p className="text-[10px] text-zinc-400 leading-tight">
                    1,9 km Natação · 90 km Ciclismo · 21,1 km Corrida
                  </p>
                </div>
              </div>

              {/* 3 Badges de Vivência e Autoridade */}
              <div className="space-y-2.5 pt-1">
                <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-3.5 flex items-center gap-3.5 hover:border-purple-500/40 transition">
                  <div className="size-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <HeartPulse className="size-5 text-purple-400" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold text-zinc-400 uppercase block">Resiliência &amp; Saúde</span>
                    <p className="text-xs sm:text-sm font-black text-white">30+ Anos com Diabetes Tipo 1</p>
                  </div>
                </div>

                <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-3.5 flex items-center gap-3.5 hover:border-lime-500/40 transition">
                  <div className="size-10 rounded-xl bg-lime-950/60 border border-lime-500/30 flex items-center justify-center text-lime-400 shrink-0">
                    <Briefcase className="size-5 text-lime-400" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold text-zinc-400 uppercase block">Trajetória Executiva</span>
                    <p className="text-xs sm:text-sm font-black text-white">25+ Anos Mercado Fin. &amp; Loyalty</p>
                  </div>
                </div>

                <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-3.5 flex items-center gap-3.5 hover:border-amber-500/40 transition">
                  <div className="size-10 rounded-xl bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Award className="size-5 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold text-zinc-400 uppercase block">Superação Esportiva</span>
                    <p className="text-xs sm:text-sm font-black text-white">Finisher Ironman 70.3 Floripa (Out/25)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna da Direita: Narrativa da Carta */}
            <div className="lg:col-span-7 space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                Recebi o diagnóstico de Diabetes Tipo 1 há mais de 30 anos. Se você me perguntasse lá atrás, na juventude, se eu já acordava pensando em disciplina, hábitos saudáveis e longevidade, a resposta sincera seria: <strong className="text-white">não</strong>. Quando somos jovens, carregamos uma sensação ilusória de invencibilidade. Eu demorei a entender o que realmente precisava mudar na minha rotina diária. Não era por falta de informação médica — era quase um bloqueio emocional em aceitar aquela nova condição e encarar de frente as consequências de uma doença crônica silenciosa.
              </p>

              <p>
                A virada não aconteceu em um passe de mágica. Foi um processo longo, construído no convívio diário com a doença, em incontáveis consultas com endocrinologistas e, acima de tudo, com <strong className="text-white">o amadurecimento e a paternidade</strong>. Olhar nos olhos dos meus filhos e desejar com todas as forças estar presente, forte e com saúde nas próximas décadas foi o meu grande divisor de águas. Foi ali que a obrigação clínica se transformou em estilo de vida.
              </p>

              <p>
                E o que começou como disciplina virou paixão. Descobri no esporte uma fonte inesgotável de energia, amizades verdadeiras no asfalto e nas trilhas, e uma vontade constante de me desafiar. Participei de inúmeras provas até cruzar, em outubro de 2025, a linha de chegada do <strong className="text-lime-400">Ironman 70.3 de Florianópolis</strong> (1,9 km de natação em mar aberto, 90 km de ciclismo e 21,1 km de corrida). Quem convive com DM1 sabe o que representa dosar insulina, carboidratos e esforço no limite da exaustão sob sol e adrenalina.
              </p>

              <p>
                Em paralelo a essa jornada nas pistas, construí uma carreira de <strong className="text-white">mais de 25 anos como executivo no mercado financeiro e no setor de fidelidade (loyalty)</strong>. Se há algo que aprendi liderando grandes operações, é que colocar o cliente de verdade no centro dos negócios é a única forma de criar algo perene. Olhando ao redor, via uma comunidade de atletas amadores que não para de crescer ano após ano — pessoas determinadas que investem tempo, suor e recursos para cuidar do corpo e da mente —, mas que continuavam completamente órfãs de uma plataforma pensada sob medida para as suas necessidades.
              </p>

              {/* Pull Quote da Brincadeira dos Corredores */}
              <div className="my-6 p-6 rounded-2xl bg-gradient-to-r from-purple-950/70 via-zinc-950 to-indigo-950/70 border-l-4 border-lime-400 shadow-xl space-y-2">
                <Quote className="size-6 text-lime-400/80 mb-1" />
                <p className="text-base md:text-lg font-extrabold text-white italic leading-snug">
                  &ldquo;A gente paga a inscrição, acorda quando ainda está escuro, se esforça até o limite... para no final ganhar uma medalha e uma fruta.&rdquo;
                </p>
                <p className="text-xs text-zinc-400">
                  A famosa piada entre os corredores de rua que escancarou a nossa grande oportunidade: transformar suor em valor real.
                </p>
              </div>

              <p>
                A gente ri porque é verdade, mas no fundo isso sempre me incomodou. Por que a atitude mais nobre que um ser humano pode ter — que é cuidar ativamente da própria saúde e da longevidade — não gera nenhum retorno tangível de volta? <strong className="text-white">Por que ganhamos pontos nas compras no cartão de crédito, mas ninguém recompensa o seu suor de cada dia?</strong>
              </p>

              <p>
                A <strong className="text-lime-400 font-bold">Netfits</strong> nasceu exatamente para mudar esse cenário.
              </p>

              <p className="bg-zinc-950/60 p-5 rounded-2xl border border-zinc-800 text-zinc-200">
                <strong className="text-white">Não somos apenas mais um aplicativo de pontos.</strong> Somos a primeira camada de valor criada para sua saúde e sua longevidade. Queremos que o seu treino, a sua constância e a sua disciplina se transformem em descontos reais nos melhores tênis e suplementos, consultas com especialistas de ponta e eventos que impulsionam a sua vida. Compartilharemos informações importantes sobre tudo o que cerca a atividade física, seja nutrição, recuperação, fisioterapia, medicina do esporte, técnicas, sugestões de treinos e até mesmo onde fazer aquela prova dos sonhos.
              </p>

              <p className="text-base md:text-lg font-bold text-white pt-2">
                O nosso lema nunca foi uma frase de efeito de marketing:{" "}
                <span className="text-lime-400 underline decoration-lime-400/50 decoration-2 underline-offset-4">
                  Fazer cada movimento valer mais
                </span>{" "}
                é a nossa missão de vida e o compromisso que assumimos com você.
              </p>

              <p className="text-sm font-semibold text-zinc-400">
                Bem-vindo à Netfits. Vamos juntos.
              </p>

              {/* Assinatura do Fundador */}
              <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-2xl bg-gradient-to-br from-lime-400 to-emerald-500 p-0.5 shadow-lg shadow-lime-400/20 shrink-0">
                    <div className="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center font-black text-lg text-lime-400">
                      AG
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-black text-white">André Gallo</h4>
                    <p className="text-xs font-bold text-lime-400">CEO e Cofundador da Netfits</p>
                    <p className="text-[11px] text-zinc-400">São Paulo, Brasil · NETFITS LTDA.</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-950/80 px-4 py-2 rounded-xl border border-zinc-800 shrink-0">
                  <ShieldCheck className="size-4 text-lime-400" />
                  <span>Manifesto Oficial Netfits 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Banner Chamativo para Parceiros Comerciais */}
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

      {/* 5. Footer Corporativo Institucional */}
      <footer className="bg-zinc-950 border-t border-zinc-800 pt-16 pb-12 px-6 text-xs text-zinc-400">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
            <p><Link to="/faq" className="hover:text-white transition">FAQ / Central de Ajuda</Link></p>
            <p><Link to="/contato" className="hover:text-white transition">Contato & Suporte</Link></p>
            <p><Link to="/download" className="hover:text-white transition">Download do Aplicativo</Link></p>
          </div>

          <div className="space-y-2">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider mb-2">Contato Corporativo & Suporte</h4>
            <p className="text-zinc-400">Netfits Ltda.</p>
            <p className="text-zinc-400">contato@netfits.com.br</p>
            <p>
              <a 
                href="https://wa.me/5511934981311" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lime-400 hover:text-lime-300 font-semibold transition flex items-center gap-1.5"
              >
                WhatsApp Oficial: +55 (11) 93498-1311
              </a>
            </p>
            <p className="text-zinc-400">Santana de Parnaíba / SP — Brasil</p>
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
