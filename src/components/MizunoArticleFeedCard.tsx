import { useState, useEffect } from "react";
import {
  Trophy,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  Clock,
  X,
  ShieldCheck,
  ShoppingBag,
  BadgeCheck,
  Sun,
  Flame,
  Droplets,
  ExternalLink,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import productMizunoCap from "@/assets/product-mizuno-cap.jpg";
import { wallet } from "@/lib/wallet-store";
import { feedAntifraud } from "@/lib/feed-antifraud";
import { FeedSocialActions } from "@/components/FeedSocialActions";
import { shopSelectionStore } from "@/lib/shop-selection-store";
import { trackProductSelect } from "@/lib/analytics";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback: string;
}

const MIZUNO_QUIZ_OPTIONS: QuizOption[] = [
  {
    id: "mz-opt-1",
    text: "Auxiliar na termorregulação craniana, reduzir a fadiga térmica do sistema nervoso central e absorver o suor antes que atinja os olhos.",
    isCorrect: true,
    feedback:
      "Perfeito! A proteção solar na cabeça combinada ao tecido de rápida evaporação estabiliza a temperatura craniana, protege os olhos e preserva o foco do atleta.",
  },
  {
    id: "mz-opt-2",
    text: "Reter o calor corporal no topo da cabeça para acelerar a queima calórica forçada.",
    isCorrect: false,
    feedback:
      "Incorreto. A retenção de calor na cabeça provoca superaquecimento (hipertermia), colapso precoce de pace e risco à saúde. O objetivo do boné técnico é dissipar calor.",
  },
  {
    id: "mz-opt-3",
    text: "Substituir o consumo de água e eletrólitos ao longo de treinos longos de corrida.",
    isCorrect: false,
    feedback:
      "Incorreto. A hidratação oral contínua com reposição de sódio e minerais é insubstituível em atividades ao ar livre.",
  },
];

const QUIZ_POST_ID = "quiz-sponsor-mizuno-cap";
const ARTICLE_POST_ID = "artigo-mizuno-bone-uv50";

export function MizunoArticleFeedCard() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string>("mz-opt-1");
  const [hasSubmittedQuiz, setHasSubmittedQuiz] = useState<boolean>(false);
  const [quizErrorMsg, setQuizErrorMsg] = useState<string | null>(null);
  const [articleOpen, setArticleOpen] = useState<boolean>(false);
  const [readClaimed, setReadClaimed] = useState<boolean>(false);
  const [dwellTimeSeconds, setDwellTimeSeconds] = useState<number>(0);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (feedAntifraud.hasClaimed("quiz", QUIZ_POST_ID)) {
        setHasSubmittedQuiz(true);
      }
      if (feedAntifraud.hasClaimed("read", ARTICLE_POST_ID)) {
        setReadClaimed(true);
      }
    }
  }, []);

  // Monitoramento contínuo de Dwell Time Antifraude da Leitura
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (articleOpen && !readClaimed) {
      setHasScrolledToBottom(false);
      setDwellTimeSeconds(0);
      timer = setInterval(() => {
        setDwellTimeSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [articleOpen, readClaimed]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (target.scrollHeight - target.scrollTop <= target.clientHeight + 40) {
      setHasScrolledToBottom(true);
    }
  };

  const handleCloseArticle = () => {
    // Validação antifraude de leitura: mínimo 12s de leitura e scroll até o fim
    if (dwellTimeSeconds >= 12 && hasScrolledToBottom && !readClaimed) {
      feedAntifraud.recordAction("read", ARTICLE_POST_ID, 0); // 0 nfs conforme regra de leitura GEMINI.md
      setReadClaimed(true);
      toast.success("✓ Leitura técnica concluída e auditada no ecossistema Netfits!");
    }
    setArticleOpen(false);
  };

  const handleQuizSubmit = () => {
    if (hasSubmittedQuiz) {
      toast.info("Você já concluiu este desafio patrocinado e conquistou seus pontos!");
      return;
    }

    const opt = MIZUNO_QUIZ_OPTIONS.find((o) => o.id === selectedOption);
    if (!opt) return;

    if (opt.isCorrect) {
      // 10 nfs para post patrocinado (conforme GEMINI.md)
      wallet.earn(10, "Quiz Patrocinado: Mizuno Running");
      feedAntifraud.recordAction("quiz", QUIZ_POST_ID, 10);
      setHasSubmittedQuiz(true);
      setQuizErrorMsg(null);
      toast.success("🎉 Resposta correta! +10 nfs adicionados à sua carteira digital.");
    } else {
      setQuizErrorMsg(opt.feedback);
      toast.error("Resposta incorreta. Leia o artigo técnico acima e tente novamente!");
    }
  };

  const handleBuyProduct = () => {
    trackProductSelect("2FU-9629-205", "Boné Aba Curva Mizuno Run Sky — Off White", "R$ 89,90");
    toast.success("Abrindo produto no Shop Netfits...", {
      description: "Mizuno Run Sky · Ganhe +360 nfs (4 nfs por R$ 1,00)",
    });

    shopSelectionStore.setProduct({
      id: "2FU-9629-205",
      title: "Boné Aba Curva Mizuno Run Sky — Off White",
      price: "R$ 89,90",
      cashback: "+360 nfs",
      seller: "Mizuno Oficial",
      image: productMizunoCap,
      targetPath: "https://loja.netfits.com.br/bone-aba-curva-mizuno-run-sky",
    });

    navigate({
      to: "/market",
      search: { product: "bone-aba-curva-mizuno-run-sky" },
    });
  };

  return (
    <>
      <article className="mx-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-5 shadow-sm space-y-5">
        {/* 1. Header do Card: Identificação da Marca e Badge de Patrocínio */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-11 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center p-2 text-white font-black text-xs shadow-inner">
              MIZ
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                  Mizuno Running
                </h3>
                <BadgeCheck className="size-4 text-purple-600 dark:text-purple-400 fill-purple-600/20" />
                <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  Post Patrocinado
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Ciência da Corrida & Performance · há 15 min
              </p>
            </div>
          </div>

          <span className="text-[10px] font-bold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/50 px-2.5 py-1 rounded-full border border-purple-200 dark:border-purple-800">
            Quiz: +10 nfs
          </span>
        </div>

        {/* 2. Chamada Principal e Introdução */}
        <div className="space-y-2">
          <h2 className="text-lg sm:text-xl font-black text-zinc-950 dark:text-white leading-tight">
            Por que atletas de alta performance usam boné técnico com proteção UV50+?
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
            Termorregulação craniana, controle de sudorese e reflexo solar: entenda a ciência por trás da proteção da cabeça em treinos diurnos e como evitar a queda precoce de rendimento.
          </p>
        </div>

        {/* 3. Imagem de Alta Qualidade do Produto em Estúdio com Badge Informativo */}
        <div className="relative rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 aspect-[16/9] sm:aspect-[21/9]">
          <img
            src={productMizunoCap}
            alt="Boné Aba Curva Mizuno Run Sky com proteção UV50+"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Destaque do Produto sobre a Imagem */}
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 text-white">
            <div>
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-lime-400 text-zinc-950 font-mono tracking-wider shadow">
                Tecnologia Quick-Dry & UV50+
              </span>
              <h4 className="text-sm sm:text-base font-bold mt-1 drop-shadow">
                Boné Mizuno Run Sky — Off White
              </h4>
            </div>

            <button
              type="button"
              onClick={handleBuyProduct}
              className="shrink-0 px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg transition active:scale-95 cursor-pointer"
            >
              <ShoppingBag className="size-3.5" />
              <span>Ver no Shop (+360 nfs)</span>
            </button>
          </div>
        </div>

        {/* 4. Destaques Fisiológicos Rápidos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60 space-y-1">
            <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold text-xs">
              <Sun className="size-4" />
              <span>Bloqueio UV50+</span>
            </div>
            <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-snug">
              Filtra até 98% da radiação ultravioleta incidente no couro cabeludo e face.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60 space-y-1">
            <div className="flex items-center gap-1.5 text-orange-600 dark:text-orange-400 font-bold text-xs">
              <Flame className="size-4" />
              <span>Termorregulação</span>
            </div>
            <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-snug">
              Microperfurações de ar que dissipam calor contínuo por convecção térmica.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60 space-y-1">
            <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold text-xs">
              <Droplets className="size-4" />
              <span>Faixa Anti-Suor</span>
            </div>
            <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-snug">
              Absorve o excesso de transpiração salina antes que atinja os olhos do corredor.
            </p>
          </div>
        </div>

        {/* 5. Ação de Leitura do Artigo Técnico */}
        <div className="flex items-center justify-between p-3.5 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-900/40">
          <div className="flex items-center gap-2.5">
            <BookOpen className="size-5 text-purple-600 dark:text-purple-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-zinc-900 dark:text-white">
                Artigo Técnico de Fisiologia Esportiva
              </p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                {readClaimed
                  ? "✓ Leitura concluída e auditada"
                  : "Tempo estimado: 2 min · Leitura sem pressa"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setArticleOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer active:scale-95 shadow-sm"
          >
            <span>Ler Artigo</span>
            <ChevronRight className="size-3.5" />
          </button>
        </div>

        {/* 6. Quiz Patrocinado Integrado (+10 nfs) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="size-4 text-purple-600 dark:text-purple-400" />
              <span className="text-xs font-extrabold text-zinc-900 dark:text-white uppercase tracking-wider">
                Desafio Técnico Mizuno
              </span>
            </div>
            <span className="text-[10px] font-extrabold text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
              Vale +10 nfs
            </span>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">
            Qual é a principal função fisiológica do Boné Técnico Mizuno com tecido respirável e proteção UV em treinos diurnos de corrida?
          </p>

          <div className="space-y-2">
            {MIZUNO_QUIZ_OPTIONS.map((option) => {
              const isSelected = selectedOption === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => {
                    if (!hasSubmittedQuiz) {
                      setSelectedOption(option.id);
                      setQuizErrorMsg(null);
                    }
                  }}
                  disabled={hasSubmittedQuiz}
                  className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 cursor-pointer ${
                    isSelected
                      ? "border-purple-600 bg-purple-50/80 dark:bg-purple-950/40 text-purple-950 dark:text-purple-100 font-medium"
                      : "border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-600"
                  } ${hasSubmittedQuiz ? "opacity-90 cursor-default" : ""}`}
                >
                  <div
                    className={`size-4 rounded-full border mt-0.5 shrink-0 flex items-center justify-center ${
                      isSelected
                        ? "border-purple-600 bg-purple-600 text-white"
                        : "border-zinc-300 dark:border-zinc-600"
                    }`}
                  >
                    {isSelected && <div className="size-1.5 rounded-full bg-white" />}
                  </div>
                  <span className="flex-1">{option.text}</span>
                </button>
              );
            })}
          </div>

          {quizErrorMsg && (
            <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs flex items-start gap-2">
              <AlertCircle className="size-4 shrink-0 mt-0.5" />
              <span>{quizErrorMsg}</span>
            </div>
          )}

          {hasSubmittedQuiz ? (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2 font-medium">
              <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Parabéns! Você concluiu este desafio e garantiu seus +10 nfs.</span>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleQuizSubmit}
              className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow transition active:scale-98 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Confirmar Resposta (+10 nfs)</span>
              <ArrowRight className="size-3.5" />
            </button>
          )}
        </div>

        {/* 7. Card de Conversão Direto no Shop Netfits */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-900/10 via-zinc-50 to-zinc-50 dark:from-purple-950/40 dark:via-zinc-800/60 dark:to-zinc-800/60 border border-purple-200/80 dark:border-purple-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              src={productMizunoCap}
              alt="Mizuno Cap Mini"
              className="size-12 rounded-xl object-cover border border-zinc-200 dark:border-zinc-700 shadow-sm"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-zinc-900 dark:text-white">
                  Boné Aba Curva Mizuno Run Sky
                </span>
                <span className="text-[9px] font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/50 px-1.5 py-0.5 rounded">
                  Oficial Shop
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                <strong className="text-zinc-900 dark:text-white font-bold">R$ 89,90</strong> · Ganhe <strong className="text-purple-600 dark:text-purple-400 font-bold">+360 nfs</strong> (4 nfs por R$ 1)
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleBuyProduct}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm transition-all cursor-pointer active:scale-98 shrink-0"
          >
            <ShoppingBag className="size-3.5" />
            <span>Comprar no Shop Netfits</span>
          </button>
        </div>

        {/* 8. Ações Sociais (Curtir, Comentar, Compartilhar = +1 nf) */}
        <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
          <FeedSocialActions
            id="mizuno-bone-artigo-uv50"
            title="Por que atletas de alta performance usam boné técnico com proteção UV50+?"
            postCategory="sponsored"
          />
        </div>
      </article>

      {/* ========================================================================= */}
      {/* MODAL DE LEITURA TÉCNICA COM AUDITORIA ANTIFRAUDE & SCROLL */}
      {/* ========================================================================= */}
      {articleOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto max-h-[90vh]">
            {/* Header Fixo */}
            <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-2">
                <span className="size-8 rounded-xl bg-purple-600 text-white grid place-items-center text-xs font-black">
                  MIZ
                </span>
                <div>
                  <h3 className="text-xs font-bold text-zinc-900 dark:text-white">
                    Artigo Técnico · Mizuno Running
                  </h3>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400">
                    Fisiologia da Termorregulação na Corrida
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCloseArticle}
                className="size-8 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 flex items-center justify-center transition cursor-pointer"
                aria-label="Fechar artigo"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Conteúdo do Artigo */}
            <div
              onScroll={handleScroll}
              className="flex-1 p-5 sm:p-6 overflow-y-auto space-y-5 text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed"
            >
              <div className="space-y-2 border-b border-zinc-100 dark:border-zinc-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-200 dark:border-purple-800">
                    Curadoria Científica Netfits
                  </span>
                  <span className="text-[10px] text-zinc-400">Leitura técnica recomendada</span>
                </div>
                <h1 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white leading-tight">
                  Por que atletas de alta performance usam boné técnico com proteção UV50+?
                </h1>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Como a proteção térmica craniana sustenta a volemia, protege o sistema nervoso central e evita a queda de pace.
                </p>
              </div>

              {/* Seção 1 */}
              <div className="space-y-2">
                <h2 className="text-sm font-bold text-zinc-950 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Sun className="size-4 text-amber-500" />
                  <span>1. A Cabeça como Radiador Térmico do Corpo</span>
                </h2>
                <p>
                  O cérebro humano é o órgão com maior consumo relativo de oxigênio e glicose do corpo, gerando uma quantidade massiva de calor metabólico a cada minuto de corrida. Em condições normais, a circulação sanguínea craniana atua dissipando esse calor para a atmosfera.
                </p>
                <p>
                  No entanto, quando um corredor treina sob radiação solar direta sem proteção, o topo da cabeça recebe uma carga térmica exógena brutal. O hipotálamo (centro regulador da temperatura corporal) detecta o aumento da temperatura central craniana e aciona mecanismos de emergência: desvia sangue oxigenado dos músculos periféricos da passada para a pele na tentativa de resfriar a cabeça. O resultado é imediato: <strong>aumento abrupto da frequência cardíaca, perda de potência muscular e sensação precoce de fadiga extrema</strong>.
                </p>
              </div>

              {/* Seção 2 */}
              <div className="space-y-2">
                <h2 className="text-sm font-bold text-zinc-950 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="size-4 text-orange-500" />
                  <span>2. Tecido Técnico Quick-Dry vs. Boné Comum de Algodão</span>
                </h2>
                <p>
                  Muitos atletas amadores cometem o erro de correr com bonés casuais de algodão ou tecidos pesados. O algodão é altamente higroscópico: ele absorve o suor, fica pesado, encharcado e fecha a passagem de ar. Em vez de refrescar, cria um <em>efeito estufa</em> sobre o couro cabeludo.
                </p>
                <p>
                  O <strong>Boné Mizuno Run Sky</strong> foi desenvolvido com poliéster técnico levíssimo com microperfurações a laser. A trama acelera a evaporação pela convecção do vento gerado pelo próprio deslocamento da corrida. O calor e o vapor de água são expelidos continuamente, mantendo o topo da cabeça até 3°C a 4°C mais fresco do que com bonés tradicionais.
                </p>
              </div>

              {/* Seção 3 */}
              <div className="space-y-2">
                <h2 className="text-sm font-bold text-zinc-950 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Droplets className="size-4 text-blue-500" />
                  <span>3. Controle de Suor e Acuidade Visual</span>
                </h2>
                <p>
                  O suor da corrida é rico em cloreto de sódio e minerais. Quando esse fluido escorre pela testa e atinge a córnea, causa ardência química severa, forçando o atleta a piscar excessivamente, fechar os olhos ou perder a concentração na trajetória e no piso.
                </p>
                <p>
                  A faixa interna atoalhada anti-suor canaliza a transpiração para as laterais, impedindo que o sal entre nos olhos e garantindo visão panorâmica límpida mesmo nos quilômetros finais de provas de 10k, 21k ou maratonas.
                </p>
              </div>

              {/* Seção 4 */}
              <div className="space-y-2">
                <h2 className="text-sm font-bold text-zinc-950 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="size-4 text-emerald-500" />
                  <span>4. Proteção Celular UV50+ e Longevidade</span>
                </h2>
                <p>
                  A exposição crônica à radiação ultravioleta UVA/UVB danifica o DNA das células cutâneas, acelerando o fotoenvelhecimento e elevando o risco de lesões dermatológicas severas. O acabamento com tecnologia UV50+ bloqueia 98% dos raios solares nocivos, permitindo treinos diurnos com máxima tranquilidade biológica.
                </p>
              </div>

              {/* Box de Produto no Final do Artigo */}
              <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                <div>
                  <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                    Equipamento Recomendado
                  </span>
                  <h4 className="text-sm font-bold text-zinc-950 dark:text-white mt-0.5">
                    Boné Aba Curva Mizuno Run Sky — Off White
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Disponível no Shop Netfits com entrega oficial e pontuação quadruplicada.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    handleCloseArticle();
                    handleBuyProduct();
                  }}
                  className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow transition active:scale-95 cursor-pointer shrink-0"
                >
                  <ShoppingBag className="size-3.5" />
                  <span>Comprar por R$ 89,90 (+360 nfs)</span>
                </button>
              </div>
            </div>

            {/* Footer Fixo do Modal */}
            <div className="p-3.5 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 flex items-center justify-between">
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                {dwellTimeSeconds >= 12 && hasScrolledToBottom
                  ? "✓ Artigo lido e auditado com sucesso"
                  : `Role até o final e leia atentamente (${dwellTimeSeconds}s)`}
              </span>

              <button
                type="button"
                onClick={handleCloseArticle}
                className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white font-bold text-xs transition cursor-pointer"
              >
                Concluir Leitura
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
