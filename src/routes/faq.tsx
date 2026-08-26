import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  Users, 
  Lock, 
  Mail, 
  Activity, 
  ShoppingBag, 
  Zap, 
  ShieldCheck, 
  Award,
  ArrowRight,
  FileText,
  Scale,
  Download,
  BookOpen,
  Sparkles,
  AlertTriangle,
  CheckCircle2
} from "lucide-react";
import netfitsDarkLogo from "@/assets/netfits-logo-dark.png";
import { InstitutionalWebHeader } from "@/components/InstitutionalWebHeader";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ & Central de Ajuda — Netfits Ltda." },
      {
        name: "description",
        content:
          "Tire suas dúvidas sobre pontos nfs, cashback no shop, cadastro de parceiros comerciais, programa de associados, regulamento e termo LGPD.",
      },
      { property: "og:title", content: "FAQ & Central de Ajuda — Netfits Ltda." },
    ],
  }),
  component: FaqPage,
});

interface FaqItem {
  id: string;
  category: "pontos" | "shop" | "parceiros" | "associados" | "wearables" | "club" | "legal";
  categoryLabel: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq_1",
    category: "pontos",
    categoryLabel: "Programa de Pontos nfs",
    question: "O que são os pontos nfs e como funciona a validade e a regra FEFO?",
    answer:
      "Os pontos nfs são a moeda de fidelidade do ecossistema Netfits. Cada ponto emitido é provisionado com 100% de solvência atuarial em caixa (R$ 0,01 por nfs). Os pontos possuem validade de 12 a 24 meses e utilizam o algoritmo protegido FEFO (First-Expiring, First-Out), garantindo que os lotes de pontos mais próximos do vencimento sejam consumidos primeiro em seus resgates."
  },
  {
    id: "faq_2",
    category: "shop",
    categoryLabel: "Netfits Shop & Cashback",
    question: "Como funciona o acúmulo de 2 nfs a cada R$ 1,00 gasto no Netfits Shop?",
    answer:
      "Nas compras realizadas no Netfits Shop através de nossos agregadores parceiros, o usuário ganha 2,00 pontos nfs para cada R$ 1,00 pago em dinheiro. O valor do cashback entra como pendente e é liberado na carteira após o prazo legal de arrependimento (7 a 14 dias). Usuários do Netfits Club recebem o dobro (4,00 nfs por R$ 1,00)."
  },
  {
    id: "faq_3",
    category: "shop",
    categoryLabel: "Netfits Shop & Cashback",
    question: "Posso utilizar meus pontos nfs como pagamento parcial ou total no Shop?",
    answer:
      "Sim! Você pode utilizar seus pontos nfs como desconto direto no valor da compra (cotação de R$ 0,01 por nfs). A transação utiliza um protocolo seguro de reserva em duas fases (Two-Phase Lock) que trava os pontos por 15 minutos e gera um voucher token assinado e 100% rastreável no Ledger de Auditoria imutável da Netfits."
  },
  {
    id: "faq_8",
    category: "legal",
    categoryLabel: "Termos & Conformidade Legal",
    question: "Onde posso consultar o Regulamento Oficial, Regras Antifraude e o Termo LGPD?",
    answer:
      "O Regulamento Geral do Programa Netfits (com as regras antifraude de 100% de dwell time em vídeos e a cláusula irrevogável de exclusão sumária por descumprimento) e o Termo de Consentimento LGPD (Lei nº 13.709/2018) estão disponíveis para consulta integral e download em formato Word (.docx) na seção de Documentos Oficiais abaixo nesta página."
  },
  {
    id: "faq_4",
    category: "parceiros",
    categoryLabel: "Parceiros Comerciais",
    question: "Como academias, assessorias, clínicas, nutricionistas e médicos se cadastram?",
    answer:
      "Basta acessar a página de Parceiros (/parceiros), selecionar a categoria do seu negócio e preencher os dados de identificação. O formulário possui validador oficial de CNPJ na Receita Federal e verificador de registros profissionais (CRM, CRN, CREF, CREFITO). Após o envio, nossa equipe comercial entra em contato em até 48h úteis para ativar seu selo credenciado."
  },
  {
    id: "faq_5",
    category: "associados",
    categoryLabel: "Programa de Associados",
    question: "Como funciona o repasse de 10% do Programa de Associados Netfits?",
    answer:
      "Treinadores, atletas e criadores de conteúdo esportivo cadastrados como Associados Netfits recebem um link único de indicação (referralCode). O associado recebe 10,0% de comissão padrão sobre todas as receitas geradas pelos usuários indicados na plataforma, com painel transparente em tempo real (/associado) e solicitação de saque."
  },
  {
    id: "faq_6",
    category: "wearables",
    categoryLabel: "Dispositivos & Wearables",
    question: "Como conectar smartwatches e wearables como Garmin, Strava ou Apple Watch?",
    answer:
      "No aplicativo Netfits, acesse a aba 'Atividades' (/activities) e clique em 'Conectar Wearable'. O app permite a sincronização com 1 toque das suas métricas de treino (corrida, ciclismo, musculação) concedendo bônus automáticos de +50 nfs por treino validado."
  },
  {
    id: "faq_7",
    category: "club",
    categoryLabel: "Netfits Club",
    question: "O que é o Netfits Club e quais são as vantagens da assinatura de R$ 19,90/mês?",
    answer:
      "O Netfits Club é o clube de benefícios e saúde da Fase 2 do ecossistema Netfits. Por R$ 19,90/mês, os membros ganham cashback em dobro no Shop (4,00 nfs por R$ 1,00 gasto), bônus de 150 nfs na 1ª compra, desconto em exames de check-up e prioridade em inscrições de corridas de rua."
  }
];

function FaqPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>("faq_8");

  // Modais de Documentos Legais
  const [showRegulamentoModal, setShowRegulamentoModal] = useState(false);
  const [showLgpdModal, setShowLgpdModal] = useState(false);

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-cyan-500 selection:text-white">
      {/* 1. Header Web Corporativo Unificado */}
      <InstitutionalWebHeader />

      {/* Hero Section */}
      <section className="py-12 px-6 bg-gradient-to-b from-cyan-950/40 via-zinc-950 to-zinc-950 border-b border-zinc-800/60">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
            Central de Ajuda & Termos Legais
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white">Perguntas Frequentes (FAQ)</h1>
          <p className="text-sm text-zinc-400">Tudo o que você precisa saber sobre o ecossistema Netfits Ltda., pontos, regras antifraude e LGPD.</p>

          {/* Search Input */}
          <div className="relative max-w-xl mx-auto pt-4">
            <Search className="absolute left-4 top-7 size-5 text-zinc-500" />
            <input
              type="text"
              placeholder="Busque por palavra-chave (ex: regulamento, lgpd, cashback, pontos)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl pl-12 pr-4 py-3.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500 shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="max-w-4xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-2">
        {[
          { id: "all", label: "Todas as Dúvidas" },
          { id: "legal", label: "📄 Documentos Legais & LGPD" },
          { id: "pontos", label: "Pontos nfs & FEFO" },
          { id: "shop", label: "Shop & Cashback" },
          { id: "parceiros", label: "Parceiros Comerciais" },
          { id: "associados", label: "Associados Netfits" },
          { id: "wearables", label: "Wearables & GPS" },
          { id: "club", label: "Netfits Club" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition border cursor-pointer ${
              activeCategory === tab.id
                ? "bg-cyan-500 border-cyan-400 text-zinc-950 shadow-md"
                : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </section>

      {/* Section: Documentos Legais e Termos Oficiais */}
      <section className="max-w-4xl mx-auto px-6 pb-8">
        <div className="bg-gradient-to-br from-zinc-900 via-purple-950/30 to-zinc-900 border-2 border-purple-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-5">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-2xl bg-purple-600/20 text-purple-400 border border-purple-500/30 grid place-items-center shrink-0">
                <Scale className="size-6 text-lime-400" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white tracking-tight flex items-center gap-2 flex-wrap">
                  <span>Documentos Oficiais & Termos Legais</span>
                  <span className="text-[10px] font-extrabold uppercase bg-purple-500/20 text-lime-400 border border-purple-500/40 px-2 py-0.5 rounded-full">
                    Netfits Ltda.
                  </span>
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Consulte a minuta oficial do Regulamento Geral do Programa, Matriz Antifraude e a Política LGPD.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1: Regulamento Geral */}
            <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-5 space-y-4 flex flex-col justify-between hover:border-purple-500/40 transition">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-500/30">
                    Parte I · Regulamento Geral
                  </span>
                  <FileText className="size-4 text-purple-400" />
                </div>
                <h4 className="font-extrabold text-white text-sm">
                  Regulamento do Programa & Regras Antifraude
                </h4>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Termos e condições de participação, acúmulo de pontos nfs, regra de 100% dwell time em vídeos e cláusula irrevogável de exclusão sumária por descumprimento.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={() => setShowRegulamentoModal(true)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer shadow-md"
                >
                  <BookOpen className="size-3.5" />
                  <span>Ler Regulamento</span>
                </button>
                <a
                  href="/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
                  download="Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
                  className="py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                  title="Baixar Minuta Oficial em Word (.docx)"
                >
                  <Download className="size-3.5 text-lime-400" />
                  <span>.DOCX</span>
                </a>
              </div>
            </div>

            {/* Card 2: Consentimento LGPD */}
            <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-5 space-y-4 flex flex-col justify-between hover:border-lime-500/40 transition">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-lime-400 bg-lime-950/60 px-2 py-0.5 rounded-full border border-lime-500/30">
                    Parte II · Lei Federal nº 13.709/2018
                  </span>
                  <ShieldCheck className="size-4 text-lime-400" />
                </div>
                <h4 className="font-extrabold text-white text-sm">
                  Termo de Consentimento & Armazenamento (LGPD)
                </h4>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Direitos do titular, finalidades de tratamento de dados cadastrais e telemetria sensível (passos, treinos, GPS), sigilo e DPO oficial.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={() => setShowLgpdModal(true)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-lime-500 hover:bg-lime-400 text-zinc-950 font-black text-xs flex items-center justify-center gap-1.5 transition cursor-pointer shadow-md"
                >
                  <BookOpen className="size-3.5" />
                  <span>Ler Termo LGPD</span>
                </button>
                <a
                  href="/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
                  download="Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
                  className="py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                  title="Baixar Minuta Oficial em Word (.docx)"
                >
                  <Download className="size-3.5 text-lime-400" />
                  <span>.DOCX</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="max-w-4xl mx-auto px-6 pb-20 space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8">
            <HelpCircle className="size-10 text-zinc-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white mb-1">Nenhuma pergunta encontrada</h3>
            <p className="text-xs text-zinc-400">Tente buscar por outro termo ou navegue pelas categorias acima.</p>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-zinc-850 transition cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-500/20">
                      {faq.categoryLabel}
                    </span>
                    <h3 className="text-base font-bold text-white leading-snug">{faq.question}</h3>
                  </div>

                  {isOpen ? (
                    <ChevronUp className="size-5 text-cyan-400 shrink-0" />
                  ) : (
                    <ChevronDown className="size-5 text-zinc-500 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-zinc-800/60 text-xs text-zinc-300 leading-relaxed space-y-3">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        )}

        {/* CTA Section for unanswered questions */}
        <div className="pt-8 text-center bg-zinc-900 border border-zinc-800 rounded-3xl p-8 space-y-3">
          <h3 className="text-lg font-extrabold text-white">Ainda tem dúvidas?</h3>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Nossa equipe de suporte e parcerias está pronta para te atender de forma personalizada.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs shadow-lg transition"
          >
            <Mail className="size-4" />
            Falar com a Equipe de Atendimento →
          </Link>
        </div>
      </section>

      {/* Modal 1: Regulamento Geral */}
      {showRegulamentoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-zinc-900 border border-purple-500/40 rounded-3xl p-6 shadow-2xl space-y-4 max-h-[85vh] flex flex-col text-left">
            <div className="flex justify-between items-center pb-3 border-b border-zinc-800 shrink-0">
              <div className="flex items-center gap-2">
                <FileText className="size-5 text-purple-400" />
                <h3 className="text-base font-extrabold text-white">
                  Regulamento Geral do Programa — Netfits Ltda.
                </h3>
              </div>
              <button
                onClick={() => setShowRegulamentoModal(false)}
                className="text-zinc-400 hover:text-white font-bold size-8 rounded-full bg-zinc-800 grid place-items-center cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 text-xs text-zinc-300 leading-relaxed pr-2 border-b border-zinc-800 pb-4">
              <div className="bg-purple-950/40 border border-purple-500/30 p-3 rounded-2xl text-[11px] text-purple-200">
                <p className="font-bold text-white mb-0.5">📌 Razão Social da Organizadora:</p>
                <p><b>NETFITS LTDA.</b> (CNPJ nº 00.000.000/0001-00) — Av. Brigadeiro Faria Lima, 3477, Itaim Bibi, São Paulo/SP.</p>
              </div>

              <h4 className="font-extrabold text-white text-sm">Cláusula 1ª — Do Objeto e da Adesão</h4>
              <p>O Regulamento rege a participação no Programa Netfits, ecossistema digital de longevidade, treino e acúmulo de pontos nfs. A adesão se consolida ao cadastrar-se no app ou web.</p>

              <h4 className="font-extrabold text-white text-sm">Cláusula 4ª — Matriz Antifraude e Retenção de Vídeos (100% Dwell Time)</h4>
              <p>A atribuição de pontos nfs por vídeos exige <b>retenção visual contínua de 100% do tempo de duração do arquivo</b>. É proibido o uso de robôs, scripts, emuladores de GPS, automações ou contas falsas.</p>

              <div className="bg-red-950/60 border border-red-500/50 p-3 rounded-2xl text-[11px] text-red-200 space-y-1">
                <p className="font-black text-red-400">⚠️ Cláusula 5ª — DIREITO IRREVOGÁVEL DE EXCLUSÃO SUMÁRIA:</p>
                <p>A NETFITS LTDA. reserva-se o direito incondicional e inalienável de <b>cancelar ou excluir sumariamente qualquer conta de Usuário</b> em caso de descumprimento do Regulamento ou suspeita de fraude, resultando na <b>perda imediata e irreversível de 100% dos pontos nfs acumulados</b>, sem qualquer direito a reembolso ou indenização.</p>
              </div>

              <h4 className="font-extrabold text-white text-sm">Cláusula 6ª — Validade dos Pontos (Política FEFO)</h4>
              <p>Os pontos nfs expiram em 12 a 24 meses sob o algoritmo FEFO (First-Expiring, First-Out), priorizando o consumo dos lotes com vencimento mais próximo.</p>
            </div>

            <div className="flex items-center justify-between gap-3 pt-1 shrink-0">
              <a
                href="/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
                download="Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
                className="py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-bold text-xs flex items-center gap-2 transition"
              >
                <Download className="size-4 text-lime-400" />
                <span>Baixar Minuta em Word (.docx)</span>
              </a>
              <button
                onClick={() => setShowRegulamentoModal(false)}
                className="py-2.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs transition shadow-md"
              >
                Fechar Visualizador
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: Termo LGPD */}
      {showLgpdModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-zinc-900 border border-lime-500/40 rounded-3xl p-6 shadow-2xl space-y-4 max-h-[85vh] flex flex-col text-left">
            <div className="flex justify-between items-center pb-3 border-b border-zinc-800 shrink-0">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-5 text-lime-400" />
                <h3 className="text-base font-extrabold text-white">
                  Termo de Consentimento & LGPD — Netfits Ltda.
                </h3>
              </div>
              <button
                onClick={() => setShowLgpdModal(false)}
                className="text-zinc-400 hover:text-white font-bold size-8 rounded-full bg-zinc-800 grid place-items-center cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 text-xs text-zinc-300 leading-relaxed pr-2 border-b border-zinc-800 pb-4">
              <div className="bg-lime-950/40 border border-lime-500/30 p-3 rounded-2xl text-[11px] text-lime-200">
                <p className="font-bold text-white mb-0.5">🔒 Conformidade com a Lei Federal nº 13.709/2018:</p>
                <p>A <b>NETFITS LTDA.</b> atua como Controladora responsável pelo tratamento seguro dos dados pessoais e sensíveis do Titular.</p>
              </div>

              <h4 className="font-extrabold text-white text-sm">1. Categorias de Dados Coletados</h4>
              <p>Tratamento de dados cadastrais (Nome, CPF, E-mail, Celular, Nascimento), dados de atividade física/saúde (passos, treinos, GPS via Apple Health/Google Fit/Garmin) e dados de navegação (dwell time em vídeos e IP).</p>

              <h4 className="font-extrabold text-white text-sm">2. Finalidades do Tratamento</h4>
              <p>Atribuição de pontos nfs, auditoria da Matriz Antifraude, emissão de comprovantes contábeis e fiscais, e oferta personalizada de benefícios esportivos.</p>

              <h4 className="font-extrabold text-white text-sm">3. Direitos do Titular (Art. 18 da LGPD)</h4>
              <p>Confirmação, acesso, correção, anonimização, bloqueio ou eliminação de dados solicitados através do canal oficial do Encarregado de Dados pelo e-mail <b>dpo@netfits.com.br</b>.</p>
            </div>

            <div className="flex items-center justify-between gap-3 pt-1 shrink-0">
              <a
                href="/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
                download="Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
                className="py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-bold text-xs flex items-center gap-2 transition"
              >
                <Download className="size-4 text-lime-400" />
                <span>Baixar Minuta em Word (.docx)</span>
              </a>
              <button
                onClick={() => setShowLgpdModal(false)}
                className="py-2.5 px-6 rounded-xl bg-lime-500 hover:bg-lime-400 text-zinc-950 font-black text-xs transition shadow-md"
              >
                Fechar Visualizador
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
