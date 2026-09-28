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
  CheckCircle2,
  Cpu
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
  category: "pontos" | "shop" | "parceiros" | "wearables" | "club" | "legal";
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
    question: "Como funciona o acúmulo de 4 nfs a cada R$ 1,00 gasto no Netfits Shop?",
    answer:
      "Nas compras realizadas no Netfits Shop através de nossos agregadores parceiros, o usuário ganha 4,00 pontos nfs para cada R$ 1,00 pago em dinheiro. O valor do cashback entra como pendente e é liberado na carteira após o prazo legal de arrependimento (7 a 14 dias)."
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
      "O Regulamento Geral do Programa Netfits (com as regras antifraude de 100% de dwell time em vídeos e a cláusula irrevogável de exclusão sumária por descumprimento) e o Termo de Consentimento LGPD (Lei nº 13.709/2018) estão unificados em um único documento oficial consolidado, disponível para consulta e download em formato PDF na seção de Documentos Oficiais abaixo nesta página."
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
    id: "faq_6",
    category: "wearables",
    categoryLabel: "Dispositivos & Wearables",
    question: "Como conectar smartwatches e wearables como Garmin, Strava ou Apple Watch?",
    answer:
      "No aplicativo Netfits, acesse a aba 'Atividades' (/activities) e clique em 'Conectar Wearable'. O app permite a sincronização com 1 toque das suas métricas de treino (corrida, ciclismo, musculação) concedendo bônus automáticos de +20 nfs por treino validado."
  },
  {
    id: "faq_7",
    category: "club",
    categoryLabel: "Netfits Club",
    question: "O que é o Netfits Club e quais são as vantagens da assinatura de R$ 19,90/mês?",
    answer:
      "O Netfits Club é o clube de benefícios e saúde da Fase 2 do ecossistema Netfits. Por R$ 19,90/mês, os membros contam com benefícios exclusivos, descontos em exames de check-up e prioridade em inscrições de corridas de rua e eventos esportivos credenciados."
  }
];

function FaqPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>("faq_8");

  // Modal de Documentos Legais Unificado
  const [showLegalModal, setShowLegalModal] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<"regulamento" | "lgpd" | "pdf">("regulamento");

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
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-lime-400 selection:text-zinc-950">
      {/* 1. Header Web Corporativo Unificado */}
      <InstitutionalWebHeader />

      {/* Hero Section */}
      <section className="py-12 px-6 bg-gradient-to-b from-purple-950/40 via-zinc-950 to-zinc-950 border-b border-zinc-800/60">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20">
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
              className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl pl-12 pr-4 py-3.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-lime-400 shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="max-w-4xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-2">
        {[
          { id: "all", label: "Todas as Dúvidas" },
          { id: "legal", label: "Documentos Legais & LGPD" },
          { id: "pontos", label: "Pontos nfs & FEFO" },
          { id: "shop", label: "Shop & Cashback" },
          { id: "parceiros", label: "Parceiros Comerciais" },
          { id: "wearables", label: "Wearables & GPS" },
          { id: "club", label: "Netfits Club" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition border cursor-pointer ${
              activeCategory === tab.id
                ? "bg-lime-400 border-lime-300 text-zinc-950 shadow-md font-black"
                : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </section>

      {/* Section: Documentos Legais e Termos Oficiais (Banner Unificado) */}
      <section className="max-w-4xl mx-auto px-6 pb-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-purple-950/40 to-zinc-900 border-2 border-purple-500/30 hover:border-lime-500/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl transition duration-300">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Banner Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-5">
            <div className="flex items-center gap-3.5">
              <div className="size-12 rounded-2xl bg-gradient-to-br from-purple-600/30 to-lime-500/20 text-purple-400 border border-purple-500/40 grid place-items-center shrink-0 shadow-inner">
                <Scale className="size-6 text-lime-400" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-extrabold uppercase bg-purple-500/20 text-lime-400 border border-purple-500/40 px-2.5 py-0.5 rounded-full">
                    Minuta Consolidada Oficial
                  </span>
                  <span className="text-[10px] font-extrabold uppercase bg-zinc-800 text-zinc-300 border border-zinc-700 px-2 py-0.5 rounded-full">
                    CNPJ 68.930.455/0001-40
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Regulamento Oficial, Matriz Antifraude & Termos LGPD
                </h3>
              </div>
            </div>
          </div>

          {/* Main Description */}
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-3xl">
            Acesse o documento jurídico unificado da <b>Netfits Ltda.</b> que consolida todas as normas de adesão,
            parâmetros de acúmulo e expiração FEFO de pontos <b>nfs</b>, a regra de <b>100% de dwell time em vídeos</b>,
            a cláusula irrevogável de <b>exclusão sumária por suspeita de fraude</b> e o <b>Consentimento para Tratamento de Dados (LGPD - Lei nº 13.709/2018)</b> com blindagem de telemetria esportiva.
          </p>

          {/* Key Pillars Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-3.5 space-y-1">
              <div className="flex items-center gap-2 text-purple-400 font-extrabold text-xs">
                <Zap className="size-4 text-purple-400" />
                <span>Pontos nfs & FEFO</span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                100% de solvência em caixa (R$ 0,01/ponto) e consumo prioritário por vencimento (12 a 24 meses).
              </p>
            </div>

            <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-3.5 space-y-1">
              <div className="flex items-center gap-2 text-lime-400 font-extrabold text-xs">
                <ShieldCheck className="size-4 text-lime-400" />
                <span>Matriz Antifraude</span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                100% de dwell time contínuo em vídeos e exclusão sumária com perda imediata de saldo em infrações.
              </p>
            </div>

            <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-3.5 space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 font-extrabold text-xs">
                <Lock className="size-4 text-cyan-400" />
                <span>Termo LGPD & DPO</span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                Telemetria sensível (HealthKit/Garmin) protegida, sem venda de dados e canal DPO: <span className="text-zinc-300">dpo@netfits.com.br</span>.
              </p>
            </div>
          </div>

          {/* Centralized Actions Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-zinc-800/60 pt-5">
            <button
              onClick={() => {
                setLegalModalTab("regulamento");
                setShowLegalModal(true);
              }}
              className="py-3 px-5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 hover:border-zinc-600 font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <BookOpen className="size-4 text-purple-400" />
              <span>Ler Documento na Tela</span>
            </button>

            <a
              href="/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
              download="Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl bg-lime-500 hover:bg-lime-400 text-zinc-950 font-black text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-lg shadow-lime-500/20 active:scale-98"
              title="Baixar Regulamento Oficial, Matriz Antifraude e Termo LGPD em formato PDF"
            >
              <Download className="size-4" />
              <span>Baixar Documento Oficial (.PDF)</span>
              <span className="text-[10px] bg-zinc-950/20 px-1.5 py-0.5 rounded text-zinc-900 font-extrabold">3.2 MB</span>
            </a>
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
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-lime-400 bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-500/20">
                      {faq.categoryLabel}
                    </span>
                    <h3 className="text-base font-bold text-white leading-snug">{faq.question}</h3>
                  </div>

                  {isOpen ? (
                    <ChevronUp className="size-5 text-lime-400 shrink-0" />
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

      {/* Modal Unificado: Regulamento Geral & Termo LGPD */}
      {showLegalModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-4xl bg-zinc-900 border border-purple-500/40 rounded-3xl p-6 shadow-2xl space-y-4 max-h-[92vh] flex flex-col text-left">
            {/* Modal Header */}
            <div className="flex justify-between items-center pb-3 border-b border-zinc-800 shrink-0">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-purple-600/20 text-lime-400 border border-purple-500/30 grid place-items-center">
                  <Scale className="size-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">
                    Documento Jurídico Oficial Consolidado — Netfits Ltda.
                  </h3>
                  <p className="text-[10px] text-zinc-400">
                    Regulamento Geral · Matriz Antifraude · Validade FEFO · Termo de Consentimento LGPD
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowLegalModal(false)}
                className="text-zinc-400 hover:text-white font-bold size-8 rounded-full bg-zinc-800 hover:bg-zinc-700 grid place-items-center cursor-pointer transition"
                title="Fechar"
              >
                ✕
              </button>
            </div>

            {/* Navigation Tabs inside modal */}
            <div className="flex items-center gap-2 shrink-0 border-b border-zinc-800/80 pb-2 overflow-x-auto">
              <button
                onClick={() => setLegalModalTab("regulamento")}
                className={`py-2 px-3.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  legalModalTab === "regulamento"
                    ? "bg-purple-600 text-white shadow-md font-extrabold"
                    : "bg-zinc-800/60 text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                <FileText className="size-3.5" />
                <span>Parte I: Regulamento & Antifraude</span>
              </button>

              <button
                onClick={() => setLegalModalTab("lgpd")}
                className={`py-2 px-3.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  legalModalTab === "lgpd"
                    ? "bg-lime-500 text-zinc-950 shadow-md font-black"
                    : "bg-zinc-800/60 text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                <ShieldCheck className="size-3.5" />
                <span>Parte II: Termos LGPD</span>
              </button>

              <button
                onClick={() => setLegalModalTab("pdf")}
                className={`py-2 px-3.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  legalModalTab === "pdf"
                    ? "bg-zinc-700 text-white shadow-md font-extrabold"
                    : "bg-zinc-800/60 text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                <BookOpen className="size-3.5" />
                <span>Visualizador PDF Integrado</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto space-y-5 text-xs text-zinc-300 leading-relaxed pr-3 border-b border-zinc-800 pb-4">
              {legalModalTab === "regulamento" && (
                <>
                  {/* Header Box */}
                  <div className="bg-purple-950/40 border border-purple-500/30 p-4 rounded-2xl text-[11px] text-purple-200 space-y-1">
                    <p className="font-bold text-white text-xs">PARTE I — REGULAMENTO GERAL DO PROGRAMA NETFITS</p>
                    <p>NETFITS LTDA. · CNPJ/MF nº 68.930.455/0001-40 · Alameda das Embaúbas, 365, Santana de Parnaíba/SP - CEP 06.542-195.</p>
                    <p className="text-[10px] text-purple-300 pt-1">Este Regulamento estabelece as regras oficiais de adesão, acúmulo de pontos nfs, regras antifraude e exclusão do Programa Netfits.</p>
                  </div>

                  {/* Cláusula 1 */}
                  <div className="space-y-1.5">
                    <h4 className="font-extrabold text-purple-400 text-sm">CLÁUSULA PRIMEIRA — DO OBJETO E DA ADESÃO</h4>
                    <p>1.1. O presente Regulamento estabelece as regras, os termos e as condições para a adesão, participação e utilização do <b>PROGRAMA NETFITS</b>, um ecossistema digital integrado de promoção da saúde (healthspan), engajamento esportivo, produção e consumo de conteúdo e programa de fidelidade com recompensa em pontos sob a denominação <b>nfs</b>.</p>
                    <p>1.2. A adesão ao Programa é voluntária e se efetiva no momento em que o Usuário conclui o seu cadastro no aplicativo ou web da NETFITS, declarando ter lido, compreendido e aceito integralmente este Regulamento e o Termo LGPD.</p>
                    <p>1.3. A utilização de qualquer funcionalidade do ecossistema Netfits implica a ratificação automática da aceitação deste Regulamento.</p>
                  </div>

                  {/* Cláusula 2 */}
                  <div className="space-y-1.5">
                    <h4 className="font-extrabold text-purple-400 text-sm">CLÁUSULA SEGUNDA — DA ELEGIBILIDADE E CADASTRO DE USUÁRIOS</h4>
                    <p>2.1. Poderão participar pessoas físicas plenamente capazes, com idade igual ou superior a 18 anos completos (ou menores emancipados), residentes no Brasil e inscritos no CPF/MF.</p>
                    <p>2.2. O cadastro é pessoal, único e intransferível, sendo vedada a criação de mais de uma conta por CPF/MF ou uso de contas falsas.</p>
                    <p>2.3. O Usuário compromete-se a fornecer informações exatas, precisas e verdadeiras referente à sua identidade, e-mail, telefone celular, CPF e nascimento.</p>
                  </div>

                  {/* Cláusula 3 */}
                  <div className="space-y-1.5">
                    <h4 className="font-extrabold text-purple-400 text-sm">CLÁUSULA TERCEIRA — DO ACÚMULO DE PONTOS nfs</h4>
                    <p>3.1. Os pontos <b>nfs</b> constituem uma unidade de recompensa e fidelidade exclusiva do Programa NETFITS, sem cotação em moeda corrente, insuscetíveis de cessão, venda, permuta, doação ou penhora.</p>
                    <p>3.2. Modalidades autorizadas de acúmulo:</p>
                    <ul className="list-disc pl-5 space-y-1 text-zinc-300">
                      <li><b>Prática de Atividades Físicas:</b> Validação de treinos via Apple Health, Google Fit, Garmin e GPS;</li>
                      <li><b>Consumo de Conteúdos no Feed:</b> Visualização e interações válidas com publicações e vídeos;</li>
                      <li><b>Compras no Netfits Shop:</b> Cashback de 4,00 nfs por R$ 1,00 gasto junto a sellers credenciados;</li>
                      <li><b>Indicação de Novos Usuários:</b> Bônus de boas-vindas via código de indicação do Usuário ou Associados;</li>
                      <li><b>Interação com Parceiros:</b> Check-in e desafios em academias, clínicas e assessorias esportivas.</li>
                    </ul>
                  </div>

                  {/* Cláusula 4 */}
                  <div className="space-y-1.5">
                    <h4 className="font-extrabold text-purple-400 text-sm">CLÁUSULA QUARTA — DA MATRIZ ANTIFRAUDE E REGRAS DE INTEGRIDADE</h4>
                    <p>4.1. A NETFITS aplica uma Matriz Antifraude Avançada para garantir a equidade e a solidez do ecossistema.</p>
                    <p>4.2. <b>Regra de Retenção Integral de Vídeos (100% Dwell Time):</b></p>
                    <p className="pl-3 border-l-2 border-purple-500/40 text-purple-200">
                      4.2.1. A atribuição de pontos nfs decorrente da visualização de vídeos está estritamente condicionada à <b>retenção visual contínua e completa de 100% da duração total do arquivo de vídeo</b> (100% de dwell time).<br/>
                      4.2.2. É vedada qualquer tentativa de burla, aceleração do player, avanço rápido (fast-forward), minimização da tela, reprodução em segundo plano sem foco ativo, ou interrupção do vídeo. Caso o vídeo seja interrompido antes dos 100%, <b>nenhum ponto nfs será emitido</b>.
                    </p>
                    <p>4.3. <b>Condutas Vedadas:</b> Uso de scripts, bots, automações, emuladores, falsificação de GPS (GPS spoofing), root/jailbreak, injeção de pacotes HTTP/API ou criação de contas múltiplas.</p>
                  </div>

                  {/* Cláusula 5 - Alerta de Exclusão Sumária */}
                  <div className="bg-red-950/70 border-2 border-red-500/60 p-4 rounded-2xl space-y-2 text-red-200">
                    <h4 className="font-black text-red-400 text-sm uppercase">⚠️ CLÁUSULA QUINTA — DIREITO IRREVOGÁVEL DE SUSPENSÃO E EXCLUSÃO SUMÁRIA</h4>
                    <p className="font-bold">5.1. DIREITO IRREVOGÁVEL E INCONTESTÁVEL DE EXCLUSÃO SUMÁRIA:</p>
                    <p className="text-[11px]">
                      A NETFITS LTDA. RESERVA-SE O DIREITO IRREVOGÁVEL, INCONTESTÁVEL, EXPRESSO E INCONDICIONAL DE, A QUALQUER TEMPO, SUSPENDER PREVENTIVAMENTE OU CANCELAR DEFINITIVAMENTE A CONTA DE QUALQUER USUÁRIO, PROMOVENDO SUA EXCLUSÃO SUMÁRIA E DEFINITIVA DO PROGRAMA, SEM A NECESSIDADE DE PRÉVIA NOTIFICAÇÃO JUDICIAL OU EXTRAJUDICIAL, CASO CONSTATADA A PRÁTICA DE QUALQUER CONDUTA VEDADA, SUSPEITA FUNDAMENTADA DE FRAUDE, DESCUMPRIMENTO DAS REGRAS ANTIFRAUDE OU INOBSERVÂNCIA DE QUALQUER DISPOSIÇÃO DESTE REGULAMENTO.
                    </p>
                    <p className="font-bold pt-1">5.2. PERDA INTEGRAL E IRREVERSÍVEL DOS PONTOS nfs:</p>
                    <p className="text-[11px]">
                      O CANCELAMENTO DA CONTA DO USUÁRIO EM DECORRÊNCIA DE VIOLAÇÃO A ESTE REGULAMENTO OU PRÁTICA FRAUDULENTA IMPLICARÁ A PERDA IMEDIATA, AUTOMÁTICA E DEFINITIVA DA TOTALIDADE DOS PONTOS nfs ACUMULADOS NA CONTA DO USUÁRIO, BEM COMO O CANCELAMENTO DE RESGATES EM ANDAMENTO, SEM DIREITO A QUALQUER TIPO DE REEMBOLSO, RESSARCIMENTO, CONVERSÃO FINANCEIRA OU INDENIZAÇÃO POR PERDAS E DANOS MATERIAL OU MORAL.
                    </p>
                  </div>

                  {/* Cláusula 6 e 7 */}
                  <div className="space-y-1.5">
                    <h4 className="font-extrabold text-purple-400 text-sm">CLÁUSULA SEXTA — VALIDADE DOS PONTOS (POLÍTICA FEFO)</h4>
                    <p>6.1. Os pontos nfs expiram em 12 a 24 meses contados da disponibilização.<br/>
                    6.2. O resgate obedece à ordem cronológica de expiração (FEFO - First-Expiring, First-Out), consumindo prioritariamente os lotes mais próximos do vencimento.</p>
                    
                    <h4 className="font-extrabold text-purple-400 text-sm pt-2">CLÁUSULA SÉTIMA — DO FORO DE ELEIÇÃO</h4>
                    <p>7.1. Fica eleito o Foro da Comarca de São Paulo/SP para dirimir quaisquer controvérsias deste Regulamento.</p>
                  </div>
                </>
              )}

              {legalModalTab === "lgpd" && (
                <>
                  {/* Header Box */}
                  <div className="bg-lime-950/40 border border-lime-500/30 p-4 rounded-2xl text-[11px] text-lime-200 space-y-1">
                    <p className="font-bold text-white text-xs">PARTE II — TERMO DE CONSENTIMENTO E PRIVACIDADE (LGPD)</p>
                    <p>NETFITS LTDA. · CNPJ/MF nº 68.930.455/0001-40 · Controladora de Dados Pessoais.</p>
                    <p className="text-[10px] text-lime-300 pt-1">Este Termo formaliza o consentimento livre, informado e inequívoco do Titular para o tratamento e armazenamento de dados pessoais e sensíveis (Lei Federal nº 13.709/2018).</p>
                  </div>

                  {/* Seção 1 */}
                  <div className="space-y-1.5">
                    <h4 className="font-extrabold text-lime-400 text-sm">1. DA IDENTIFICAÇÃO DA CONTROLADORA</h4>
                    <p>NETFITS LTDA., pessoa jurídica de direito privado, inscrita no CNPJ/MF sob o nº 68.930.455/0001-40, com sede na Alameda das Embaúbas, 365, Quadra 06 Lote 19 sala 01, Alphaville, Santana de Parnaíba/SP, CEP 06.542-195, doravante denominada "Controladora".</p>
                  </div>

                  {/* Seção 2 */}
                  <div className="space-y-1.5">
                    <h4 className="font-extrabold text-lime-400 text-sm">2. DO OBJETO E MANIFESTAÇÃO DE CONSENTIMENTO</h4>
                    <p>Ao criar sua conta e utilizar a Plataforma Netfits, o Titular fornece seu CONSENTIMENTO LIVRE, INFORMADO, EXPRESSO E INEQUÍVOCO para que a Controladora realize o tratamento de seus dados pessoais e sensíveis para as finalidades descritas neste Termo, conforme a Lei nº 13.709/2018 (LGPD).</p>
                  </div>

                  {/* Seção 3 */}
                  <div className="space-y-1.5">
                    <h4 className="font-extrabold text-lime-400 text-sm">3. CATEGORIAS DE DADOS PESSOAIS TRATADOS</h4>
                    <ul className="list-disc pl-5 space-y-1 text-zinc-300">
                      <li><b>Dados Cadastrais e de Identificação:</b> Nome completo, CPF, e-mail, telefone celular/WhatsApp, data de nascimento e endereço;</li>
                      <li><b>Dados de Atividade Física e Saúde (Sensíveis):</b> Passos, distância, treinos, frequência cardíaca e calorias capturadas via Apple Health, Google Fit e Garmin;</li>
                      <li><b>Dados de Localização & GPS:</b> Coordenadas de GPS gravadas unicamente durante a gravação ativa de corridas ou caminhadas;</li>
                      <li><b>Dados de Uso e Navegação:</b> IP, modelo do celular, retenção visual em vídeos (100% dwell time) e histórico de compras no Shop;</li>
                      <li><b>Dados Transacionais:</b> Extrato de pontos nfs acumulados, cupons e cashback.</li>
                    </ul>
                  </div>

                  {/* Seção 4 */}
                  <div className="space-y-1.5">
                    <h4 className="font-extrabold text-lime-400 text-sm">4. FINALIDADES ESPECÍFICAS DO TRATAMENTO</h4>
                    <p>I. Permitir o funcionamento regular do Programa Netfits e atribuição do saldo correto de pontos nfs;<br/>
                    II. Executar os algoritmos da Matriz Antifraude, auditando o tempo de permanência em vídeos (100% dwell time) e a autenticidade dos treinos;<br/>
                    III. Operacionalizar os resgates de benefícios e compras junto a sellers parceiros credenciados;<br/>
                    IV. Personalizar a experiência do Titular com recomendações de saúde (healthspan);<br/>
                    V. Cumprir obrigações fiscais, tributárias e regulatórias perante órgãos públicos estaduais e federais.</p>
                  </div>

                  {/* Seção 5 e 6 */}
                  <div className="space-y-1.5">
                    <h4 className="font-extrabold text-lime-400 text-sm">5. DIREITOS DO TITULAR DOS DADOS (ARTIGO 18 DA LGPD)</h4>
                    <p>5.1. O Titular pode solicitar a qualquer tempo: confirmação do tratamento, acesso aos dados, correção de erros, anonimização, eliminação de dados ou revogação do consentimento via e-mail <b>dpo@netfits.com.br</b>.</p>

                    <h4 className="font-extrabold text-lime-400 text-sm pt-2">6. CANAL DE ATENDIMENTO E DPO OFICIAL</h4>
                    <p>Encarregado pelo Tratamento de Dados (DPO): <b>dpo@netfits.com.br</b> ou <b>contato@netfits.com.br</b>.<br/>Endereço: Alameda das Embaúbas, 365, Quadra 06 Lote 19 sala 01, Alphaville, Santana de Parnaíba/SP - CEP 06.542-195.</p>
                  </div>
                </>
              )}

              {legalModalTab === "pdf" && (
                <div className="pt-2">
                  <p className="font-bold text-white mb-2 flex items-center gap-1.5">
                    <span>Visualização do PDF Oficial com Marca d'Água:</span>
                  </p>
                  <iframe
                    src="/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf#toolbar=0"
                    className="w-full h-96 rounded-2xl border border-purple-500/30 bg-zinc-950"
                    title="PDF Oficial Netfits Regulamento e LGPD"
                  />
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1 shrink-0">
              <a
                href="/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
                download="Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-lime-500 hover:bg-lime-400 text-zinc-950 font-extrabold text-xs flex items-center justify-center gap-2 transition shadow-md active:scale-98"
                title="Baixar Regulamento e Termo LGPD em PDF"
              >
                <Download className="size-4" />
                <span>Baixar Documento Oficial (.PDF)</span>
                <span className="text-[10px] bg-zinc-950/20 px-1.5 py-0.5 rounded text-zinc-900 font-black">3.2 MB</span>
              </a>
              <button
                onClick={() => setShowLegalModal(false)}
                className="py-2.5 px-6 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-xs transition cursor-pointer"
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
