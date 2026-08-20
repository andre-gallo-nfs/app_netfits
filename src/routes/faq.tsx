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
  ArrowRight
} from "lucide-react";
import netfitsDarkLogo from "@/assets/netfits-logo-dark.png";
import { InstitutionalWebHeader } from "@/components/InstitutionalWebHeader";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ & Central de Ajuda — Netfits Tecnologia Ltda." },
      {
        name: "description",
        content:
          "Tire suas dúvidas sobre pontos nfs, cashback no shop, cadastro de parceiros comerciais, programa de associados e integração com wearables.",
      },
      { property: "og:title", content: "FAQ & Central de Ajuda — Netfits" },
    ],
  }),
  component: FaqPage,
});

interface FaqItem {
  id: string;
  category: "pontos" | "shop" | "parceiros" | "associados" | "wearables" | "club";
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
      "Os pontos nfs são a moeda de fidelidade do ecossistema Netfits. Cada ponto emitido é provisionado com 100% de solvência atuarial em caixa (R$ 0,01 por nfs). Os pontos possuem validade de 24 meses e utilizam o algoritmo protegido FEFO (First-Expiring, First-Out), garantindo que os lotes de pontos mais próximos do vencimento sejam consumidos primeiro em seus resgates."
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
  const [expandedId, setExpandedId] = useState<string | null>("faq_1");

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
            Central de Ajuda & Suporte
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white">Perguntas Frequentes (FAQ)</h1>
          <p className="text-sm text-zinc-400">Tudo o que você precisa saber sobre o ecossistema Netfits, pontos, cashback e parcerias.</p>

          {/* Search Input */}
          <div className="relative max-w-xl mx-auto pt-4">
            <Search className="absolute left-4 top-7 size-5 text-zinc-500" />
            <input
              type="text"
              placeholder="Busque por palavra-chave (ex: cashback, pontos, parceiros, wearable)..."
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
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition border ${
              activeCategory === tab.id
                ? "bg-cyan-500 border-cyan-400 text-zinc-950 shadow-md"
                : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
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
                  className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-zinc-850 transition"
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
    </div>
  );
}
