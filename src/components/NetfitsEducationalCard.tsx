import { useState, useEffect } from "react";
import { 
  Trophy, 
  Sparkles, 
  MoreVertical, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle, 
  BookOpen, 
  Clock, 
  X, 
  Activity, 
  ShieldCheck, 
  Watch,
  Heart,
  Share2
} from "lucide-react";
import netfitsMark from "@/assets/netfits-mark.png";
import { wallet } from "@/lib/wallet-store";
import { feedAntifraud } from "@/lib/feed-antifraud";
import { FeedSocialActions } from "@/components/FeedSocialActions";
import { toast } from "sonner";

interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback?: string;
}

const PURPOSE_QUIZ_OPTIONS: QuizOption[] = [
  {
    id: "purpose-opt-1",
    text: "Viver mais anos com plena mobilidade, autonomia e saúde metabólica através do hábito diário.",
    isCorrect: true,
    feedback: "Exato! O Netfits existe para expandir o Healthspan: garantir que sua capacidade física acompanhe sua longevidade com vitalidade.",
  },
  {
    id: "purpose-opt-2",
    text: "Treinar até a exaustão máxima todos os dias sem tempo de descanso.",
    isCorrect: false,
    feedback: "Nossa abordagem rejeita o burnout. O corpo humano floresce na constância regular e consciente, não em choques destrutivos.",
  },
  {
    id: "purpose-opt-3",
    text: "Apenas acumular pontos virtuais sem necessidade de praticar exercícios reais.",
    isCorrect: false,
    feedback: "Cada ponto nfs é lastreado em suor comprovado por sensores, garantindo valor real e acesso sustentável à medicina de ponta.",
  },
];

const QUIZ_POST_ID = "netfits-purpose-longevity-quiz";
const ARTICLE_POST_ID = "netfits-purpose-longevity-artigo";

export function NetfitsEducationalCard() {
  const [selectedOption, setSelectedOption] = useState<string>("purpose-opt-1");
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [articleOpen, setArticleOpen] = useState<boolean>(false);
  const [readClaimed, setReadClaimed] = useState<boolean>(false);
  const [dwellTimeSeconds, setDwellTimeSeconds] = useState<number>(0);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (feedAntifraud.hasClaimed("quiz", QUIZ_POST_ID)) {
        setHasSubmitted(true);
      }
      if (feedAntifraud.hasClaimed("read", ARTICLE_POST_ID)) {
        setReadClaimed(true);
      }
    }
  }, []);

  // Monitoramento contínuo de Dwell Time Antifraude
  useEffect(() => {
    let timer: any = null;
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
    if (target.scrollHeight - target.scrollTop <= target.clientHeight + 30) {
      setHasScrolledToBottom(true);
    }
  };

  const handleSubmit = () => {
    if (hasSubmitted) {
      toast.info("Você já concluiu este desafio e conquistou seus pontos!");
      return;
    }

    const option = PURPOSE_QUIZ_OPTIONS.find((o) => o.id === selectedOption);
    if (!option) return;

    if (option.isCorrect) {
      const validation = feedAntifraud.validateAction("quiz", QUIZ_POST_ID);
      if (!validation.allowed) {
        toast.warning(validation.reason || "Ação bloqueada pelas regras antifraude.");
        return;
      }

      const points = feedAntifraud.getRules().pointsPerEducationalQuiz ?? 5;
      setErrorMsg(null);
      setHasSubmitted(true);
      wallet.earn(points, "Desafio Netfits: Propósito, Longevidade & Bem-Estar");
      feedAntifraud.recordAction("quiz", QUIZ_POST_ID, points);
      toast.success(`🎉 Parabéns! Resposta correta (+${points} nfs creditados na sua carteira)`);
    } else {
      setErrorMsg(option.feedback || "Resposta incorreta. Leia a dica e tente novamente!");
      toast.error("Resposta incorreta. Leia a dica e tente novamente!");
    }
  };

  const handleClaimRead = () => {
    if (readClaimed) {
      toast.info("Você já concluiu a validação de leitura deste manifesto.");
      return;
    }

    const validation = feedAntifraud.validateAction("read", ARTICLE_POST_ID, {
      dwellTimeSeconds,
      hasScrolledToBottom,
      postCategory: "educational",
    });

    if (!validation.allowed) {
      toast.warning(validation.reason || "Requisitos de leitura e rolagem não atingidos.");
      return;
    }

    setReadClaimed(true);
    feedAntifraud.recordAction("read", ARTICLE_POST_ID, 0);
    toast.success("👏 Leitura e rolagem validadas com sucesso! Agora responda ao Desafio para pontuar.");
  };

  const minDwellRequired = feedAntifraud.getRules().minDwellTimeSeconds;
  const requireScroll = feedAntifraud.getRules().requireScrollToBottom;
  const isDwellQualified = dwellTimeSeconds >= minDwellRequired;
  const isScrollQualified = !requireScroll || hasScrolledToBottom;
  const canClaim = isDwellQualified && isScrollQualified;

  return (
    <>
      <article className="px-4 space-y-3.5">
        {/* 1. Header Oficial do Netfits */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              onClick={() => setArticleOpen(true)}
              className="size-11 rounded-full bg-purple-950/80 border border-purple-500/30 flex items-center justify-center p-1.5 ring-2 ring-purple-500/20 cursor-pointer shadow-sm"
            >
              <img
                src={netfitsMark}
                alt="Netfits"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="cursor-pointer" onClick={() => setArticleOpen(true)}>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white leading-tight hover:text-purple-600 transition-colors">
                  Netfits · Propósito & Longevidade
                </h3>
                <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-lime-400/10 text-lime-400 border border-lime-400/20">
                  Manifesto
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Nossa abordagem de bem-estar · há 3 horas
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => toast.info("Publicação oficial sobre o propósito e princípios do Netfits")}
            className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 p-1 rounded-full transition"
            aria-label="Opções"
          >
            <MoreVertical className="size-4" />
          </button>
        </div>

        {/* 2. Banner Visual 4:5 estilo Editorial da Plataforma */}
        <div 
          onClick={() => setArticleOpen(true)}
          className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg border border-purple-500/25 bg-gradient-to-br from-zinc-900 via-purple-950/60 to-black text-white p-6 flex flex-col justify-between group cursor-pointer hover:border-purple-500/50 transition-all"
        >
          {/* Topo do Banner: Badges */}
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400 bg-lime-400/10 px-2.5 py-1 rounded-full border border-lime-400/30 flex items-center gap-1">
              <Sparkles className="size-3 text-lime-400" />
              <span>Healthspan Ativo</span>
            </span>
            <span className="text-[10px] font-bold text-zinc-400 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 flex items-center gap-1">
              <Clock className="size-3 text-purple-400" />
              <span>2 min leitura</span>
            </span>
          </div>

          {/* Centro do Banner: Pergunta Gancho Provocativa */}
          <div className="space-y-3 z-10 my-auto text-left">
            <span className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
              <Activity className="size-3.5 text-lime-400" />
              <span>O Propósito do Netfits</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
              Você está treinando para o próximo mês ou para os seus 80 anos?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-snug line-clamp-3">
              A verdadeira riqueza não é financeira: é a autonomia do seu corpo no futuro. Entenda como o Netfits premia a consistência diária sem burnout.
            </p>

            {/* Pílulas de Palavras-Chave */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[9px] font-black uppercase tracking-wider bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md text-zinc-200 border border-white/10">
                HEALTHSPAN
              </span>
              <span className="text-[9px] font-black uppercase tracking-wider bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md text-zinc-200 border border-white/10">
                CONSISTÊNCIA 5/5
              </span>
              <span className="text-[9px] font-black uppercase tracking-wider bg-lime-400/20 backdrop-blur-md px-2.5 py-1 rounded-md text-lime-300 border border-lime-400/30">
                VALOR DO SUOR
              </span>
            </div>
          </div>

          {/* Rodapé do Banner */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-400 z-10">
            <span className="flex items-center gap-1 text-purple-300 font-medium">
              <BookOpen className="size-3.5 text-lime-400" />
              <span>Toque para ler nosso manifesto</span>
            </span>
            <span className="font-mono text-[10px] text-zinc-500">Netfits Longevity</span>
          </div>

          <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/80 pointer-events-none" />
        </div>

        {/* 3. Módulo Interativo "Desafio Netfits" (Quiz-to-Earn) */}
        <div className="bg-zinc-950 border border-purple-500/25 rounded-2xl p-4 sm:p-5 shadow-sm text-left space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div className="flex items-center gap-2">
              <div className="size-7 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <Trophy className="size-4 text-lime-400" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-white">
                Desafio de Bem-Estar
              </span>
            </div>
            <span className="text-[11px] font-bold text-lime-400 bg-lime-400/10 border border-lime-400/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <Sparkles className="size-3" />
              <span>Responda e ganhe 5 NFs</span>
            </span>
          </div>

          <div className="space-y-1.5">
            <h4 className="text-sm font-bold text-white leading-snug">
              Qual é a essência do conceito de Longevidade Ativa (Healthspan) promovido pelo Netfits?
            </h4>
            <p className="text-[11px] text-zinc-400">
              Reflita sobre o verdadeiro valor do seu esforço físico diário:
            </p>
          </div>

          {/* Opções de Múltipla Escolha */}
          <div className="space-y-2">
            {PURPOSE_QUIZ_OPTIONS.map((option) => {
              const isSelected = selectedOption === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  disabled={hasSubmitted}
                  onClick={() => {
                    setSelectedOption(option.id);
                    setErrorMsg(null);
                  }}
                  className={`w-full p-3 rounded-xl text-left text-xs font-semibold flex items-center gap-3 transition-all cursor-pointer border ${
                    isSelected
                      ? "bg-purple-950/60 border-purple-500 text-white shadow-xs"
                      : "bg-zinc-900/70 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900"
                  } ${hasSubmitted ? "cursor-default opacity-85" : "active:scale-[0.99]"}`}
                >
                  <div
                    className={`size-4 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected
                        ? "border-purple-400 bg-purple-500 text-white"
                        : "border-zinc-600 bg-zinc-800"
                    }`}
                  >
                    {isSelected && <div className="size-1.5 rounded-full bg-white" />}
                  </div>
                  <span className="leading-snug flex-1">{option.text}</span>
                </button>
              );
            })}
          </div>

          {/* Mensagem de Erro / Dica */}
          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs flex items-start gap-2 animate-in fade-in">
              <AlertCircle className="size-4 shrink-0 text-red-400 mt-0.5" />
              <p className="leading-relaxed">{errorMsg}</p>
            </div>
          )}

          {/* Botão de Envio / Feedback de Sucesso */}
          {hasSubmitted ? (
            <div className="p-3 rounded-xl bg-lime-500/10 border border-lime-500/30 text-lime-400 text-xs font-bold flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-lime-400" />
                <span>Desafio concluído com sucesso! (+5 nfs creditados)</span>
              </div>
              <span className="text-[10px] bg-lime-400/20 px-2 py-0.5 rounded text-lime-300 font-mono">
                Carteira Atualizada
              </span>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20 transition-all active:scale-[0.99] cursor-pointer"
            >
              <span>Responder e conquistar 5 NFs</span>
              <ArrowRight className="size-4" />
            </button>
          )}
        </div>

        {/* 4. Pílula de Sabedoria de Longevidade (Takeaway) */}
        <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/20 flex items-start gap-2.5 text-left">
          <div className="size-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
            <Heart className="size-3.5 text-lime-400" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-300 block mb-0.5">
              Pílula de Longevidade Netfits
            </span>
            <p className="text-xs text-zinc-300 leading-snug">
              Treinar hoje é o único investimento cujo dividendo real é a sua própria liberdade e autonomia física amanhã.
            </p>
          </div>
        </div>

        {/* 5. Ações Sociais: Curtir, Compartilhar (+1 nf), Salvar */}
        <FeedSocialActions
          id={ARTICLE_POST_ID}
          title="Netfits — O Propósito: Longevidade, Saúde & Bem-Estar"
          onOpenArticle={() => setArticleOpen(true)}
        />
      </article>

      {/* MODAL DE LEITURA COMPLETA COM AUDITORIA DWELL TIME E SCROLL TOTAL */}
      {articleOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div 
            onScroll={handleScroll}
            className="bg-zinc-950 border border-purple-500/30 rounded-3xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl space-y-4 text-left animate-in fade-in zoom-in-95"
          >
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="size-5 text-lime-400" />
                <div>
                  <h3 className="text-sm font-extrabold text-white">Manifesto Netfits: O Porquê Treinamos</h3>
                  <p className="text-[10px] text-zinc-400">Nossa Abordagem de Longevidade, Saúde Integral & Bem-Estar</p>
                </div>
              </div>
              <button
                onClick={() => setArticleOpen(false)}
                className="p-1.5 rounded-full bg-zinc-800 text-zinc-400 hover:text-white cursor-pointer"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs text-zinc-300 leading-relaxed">
              <p className="font-bold text-white text-sm">
                Viver mais é inevitável. Viver bem e com independência é uma escolha.
              </p>
              <p>
                A medicina moderna conseguiu estender a expectativa de vida humana, mas criou um dilema: milhões de pessoas passam os últimos 20 anos de suas vidas dependentes, com perda severa de massa muscular (sarcopenia), fragilidade óssea e dores crônicas.
              </p>
              
              <div className="bg-zinc-900/80 p-3.5 rounded-2xl border border-zinc-800 space-y-2">
                <h5 className="font-extrabold text-white text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                  <Activity className="size-3.5 text-lime-400" />
                  <span>Os 3 Pilares da Nossa Abordagem:</span>
                </h5>
                <ul className="space-y-2 text-zinc-400 text-[11px]">
                  <li>
                    <b className="text-zinc-200">1. Healthspan Acima de Tudo:</b> O objetivo não é viver 100 anos em um leito, mas chegar aos 80 anos correndo, viajando e brincando no chão com seus netos sem limitações.
                  </li>
                  <li>
                    <b className="text-zinc-200">2. Consistência sem Burnout:</b> O corpo não se transforma em choques heroicos de fim de semana. 30 minutos de movimento regular, 5 vezes por semana, é a dose ideal para regeneração celular e saúde cardiovascular.
                  </li>
                  <li>
                    <b className="text-zinc-200">3. Seu Suor Tem Valor Real:</b> A disciplina diária é a decisão mais nobre da sua vida. No Netfits, cada treino auditado por sensores ópticos e GPS vira pontos nfs para você cuidar da sua saúde com os melhores médicos, exames e benefícios.
                  </li>
                </ul>
              </div>

              <p>
                Quando você abre o Netfits e sincroniza seu Garmin, Apple Watch ou Strava, você não está alimentando um aplicativo. Você está assinando um compromisso com o seu futuro.
              </p>
            </div>

            {/* Painel de Recompensa de Leitura (Dwell Time & Scroll Total) */}
            <div className="pt-2 border-t border-zinc-800 space-y-3">
              <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-400">
                <div className="bg-zinc-900 p-2 rounded-xl border border-zinc-800 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Clock className="size-3 text-purple-400" />
                    <span>Dwell Time:</span>
                  </span>
                  <span className={isDwellQualified ? "text-lime-400 font-bold" : "text-amber-400 font-mono"}>
                    {dwellTimeSeconds}s / {minDwellRequired}s {isDwellQualified ? "✔" : ""}
                  </span>
                </div>
                <div className="bg-zinc-900 p-2 rounded-xl border border-zinc-800 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <ArrowRight className="size-3 text-purple-400 rotate-90" />
                    <span>Rolagem:</span>
                  </span>
                  <span className={isScrollQualified ? "text-lime-400 font-bold" : "text-amber-400 font-medium"}>
                    {hasScrolledToBottom ? "Fim do texto ✔" : "Role até o fim ⬇"}
                  </span>
                </div>
              </div>

              {readClaimed ? (
                <div className="p-3 rounded-xl bg-lime-500/10 border border-lime-500/30 text-lime-400 text-xs font-bold text-center">
                  ✅ Leitura e rolagem validadas! Responda o Desafio no card para conquistar +5 NFs.
                </div>
              ) : (
                <button
                  type="button"
                  disabled={!canClaim}
                  onClick={handleClaimRead}
                  className={`w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
                    canClaim
                      ? "bg-purple-600 hover:bg-purple-500 text-white shadow-lg active:scale-98"
                      : "bg-zinc-800 text-zinc-500 cursor-not-allowed opacity-70"
                  }`}
                >
                  <BookOpen className="size-4" />
                  <span>
                    {!isDwellQualified
                      ? `Aguarde ${Math.max(0, minDwellRequired - dwellTimeSeconds)}s de leitura`
                      : !isScrollQualified
                      ? "Role o texto até o final para validar a leitura ⬇"
                      : "Validar Leitura do Manifesto"}
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
