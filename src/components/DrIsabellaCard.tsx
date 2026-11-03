import { trackArticleRead } from "@/lib/analytics";
import { useState, useEffect, useMemo } from "react";
import { 
  Trophy, 
  MoreVertical, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle, 
  Sparkles, 
  HeartPulse, 
  Moon, 
  Apple, 
  BookOpen, 
  Clock, 
  X, 
  ShieldCheck, 
  Calendar, 
  Activity,
  Flame,
  Heart
} from "lucide-react";
import netfitsLogoDark from "@/assets/netfits-logo-dark.png";
import draIsabellaAvatar from "@/assets/dra-isabella-avatar.jpg";
import draIsabellaImg from "@/assets/dra-isabella.jpeg";
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

const PROTOCOLO_QUIZ_OPTIONS: QuizOption[] = [
  {
    id: "proto-opt-2",
    text: "Treinar sempre em sobrecarga máxima sem realizar estratificação de risco biológico prévia.",
    isCorrect: false,
    feedback: "Cargas destrutivas sem acompanhamento clínico elevam o risco de lesões musculoesqueléticas, miocardite e estresse oxidativo severo.",
  },
  {
    id: "proto-opt-3",
    text: "Apenas monitorar o peso na balança como único indicador de adaptação cardiovascular.",
    isCorrect: false,
    feedback: "A balança convencional não reflete perfil lipídico, sensibilidade insulínica, inflamação subclínica ou saúde endotelial.",
  },
  {
    id: "proto-opt-1",
    text: "Mapear marcadores inflamatórios, perfil metabólico e cinética hormonal para dosar a carga certa e preservar a longevidade.",
    isCorrect: true,
    feedback: "Exato! O Protocolo Fibios correlaciona dados laboratoriais precisos à carga de treino para blindar a saúde e o rendimento ao longo das décadas.",
  },
  {
    id: "proto-opt-4",
    text: "Suspender treinos aeróbicos em prol de repouso absoluto aos primeiros sinais de cansaço agudo.",
    isCorrect: false,
    feedback: "A recuperação inteligente utiliza regenerativos ativos e modulação da carga, não o abandono do estímulo fisiológico.",
  },
];

const QUIZ_POST_ID = "isabella-protocolo-quiz";
const ARTICLE_POST_ID = "isabella-protocolo-artigo";

export function DrIsabellaCard() {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [articleOpen, setArticleOpen] = useState<boolean>(false);
  const [readClaimed, setReadClaimed] = useState<boolean>(false);
  const [dwellTimeSeconds, setDwellTimeSeconds] = useState<number>(0);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState<boolean>(false);

  const shuffledOptions = useMemo(() => {
    const arr = [...PROTOCOLO_QUIZ_OPTIONS];
    let seed = 99;
    for (let i = arr.length - 1; i > 0; i--) {
      seed = (seed * 16807 + i) % 2147483647;
      const j = seed % (i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (feedAntifraud.hasClaimed("quiz", QUIZ_POST_ID)) {
        setHasSubmitted(true);
      }
      if (feedAntifraud.hasClaimed("read", ARTICLE_POST_ID)) {
        setReadClaimed(true);
        trackArticleRead(ARTICLE_POST_ID, "Protocolo Fibios: Biomarcadores & Longevidade (Dra. Isabella Formigari)", dwellTimeSeconds);
      }
    }
  }, []);

  // Monitoramento de leitura ativa
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
    if (target.scrollHeight - target.scrollTop <= target.clientHeight + 40) {
      setHasScrolledToBottom(true);
    }
  };

  const handleSubmit = () => {
    if (hasSubmitted) {
      toast.info("Você já concluiu este desafio e conquistou seus netfits!");
      return;
    }

    if (!selectedOption) {
      toast.warning("Selecione uma alternativa antes de confirmar!");
      return;
    }

    const option = PROTOCOLO_QUIZ_OPTIONS.find((o) => o.id === selectedOption);
    if (!option) return;

    if (option.isCorrect) {
      const validation = feedAntifraud.validateAction("quiz", QUIZ_POST_ID);
      if (!validation.allowed) {
        toast.warning(validation.reason || "Ação não autorizada.");
        return;
      }

      const points = feedAntifraud.getRules().pointsPerEducationalQuiz ?? 5;
      setErrorMsg(null);
      setHasSubmitted(true);
      wallet.earn(points, "Quizz Netfits: Protocolo Fibios (Dra. Isabella Formigari)");
      feedAntifraud.recordAction("quiz", QUIZ_POST_ID, points);
      toast.success(`🎉 Resposta correta! +${points} netfits creditados na sua carteira digital.`);
    } else {
      setErrorMsg(option.feedback || "Resposta incorreta. Tente novamente após rever o conceito.");
      toast.error("Resposta incorreta! Leia o feedback com atenção.");
    }
  };

  const handleClaimRead = () => {
    if (readClaimed) return;
    const validation = feedAntifraud.validateAction("read", ARTICLE_POST_ID, {
      dwellTimeSeconds,
      hasScrolledToBottom,
    });

    if (validation.allowed) {
      feedAntifraud.recordAction("read", ARTICLE_POST_ID, 0);
      setReadClaimed(true);
      trackArticleRead(ARTICLE_POST_ID, "Protocolo Fibios: Biomarcadores & Longevidade (Dra. Isabella Formigari)", dwellTimeSeconds);
      toast.success("📖 Leitura completa validada com sucesso! O Quizz Netfits (+5 netfits) foi liberado.");
      setArticleOpen(false);
    } else {
      toast.warning(validation.reason || "Complete a leitura e role até o fim para validar.");
    }
  };

  return (
    <>
      <article className="px-4 space-y-3.5 min-h-[560px] w-full max-w-full overflow-x-hidden">
        {/* 1. Header do Especialista com Compliance CFM */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={draIsabellaAvatar}
              alt="Dra. Isabella Formigari"
              className="size-11 rounded-full object-cover ring-2 ring-purple-500/30 cursor-pointer"
              onClick={() => setArticleOpen(true)}
            />
            <div className="cursor-pointer" onClick={() => setArticleOpen(true)}>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white leading-tight hover:text-purple-600 transition-colors">
                  Dra. Isabella Formigari
                </h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-400 text-[10px] font-black uppercase tracking-tight">
                  <Activity className="size-3 text-purple-600" />
                  Protocolo Fibios
                </span>
              </div>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-400 font-medium">
                Médica (CRM-SP 282951) sócia fundadora da Fibios
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-auto bg-black rounded-lg px-2 py-0.5 flex items-center justify-center border border-zinc-800 shadow-xs">
              <img src={netfitsLogoDark} alt="Netfits" className="h-3.5 w-auto object-contain" />
            </div>
            <button
              type="button"
              onClick={() => toast.info("Publicação oficial curada pela Fibios")}
              className="text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 p-1 rounded-full transition"
              aria-label="Opções"
            >
              <MoreVertical className="size-4" />
            </button>
          </div>
        </div>

        {/* 2. Título & Subtítulo */}
        <div className="space-y-1">
          <h2 
            onClick={() => setArticleOpen(true)}
            className="text-base sm:text-lg font-black text-zinc-950 dark:text-white tracking-tight leading-snug hover:text-purple-600 transition-colors cursor-pointer"
          >
            Protocolo Fibios: Como Mapear Biomarcadores Blinda a Sua Longevidade no Esporte
          </h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
            A medicina preventiva aplicada ao movimento: por que exames periódicos e cinética hormonal separam a evolução atlética do desgaste crônico.
          </p>
        </div>

        {/* 3. Hero Banner Fotográfico Editorial (4:5 Mobile-First) */}
        <div
          onClick={() => setArticleOpen(true)}
          className="relative overflow-hidden rounded-2xl shadow-md border border-zinc-200 dark:border-zinc-800 bg-zinc-950 cursor-pointer group active:scale-[0.99] transition-all aspect-[4/5] max-h-[480px]"
          role="button"
          tabIndex={0}
          aria-label="Toque para ler o Protocolo Clínico Fibios"
        >
          <img
            src={draIsabellaImg}
            alt="Dra. Isabella Formigari - Protocolo Fibios"
            className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

          {/* Pílulas de Contexto Científico no Topo */}
          <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-1.5 z-10 pointer-events-none">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-bold text-white shadow-xs">
              <Activity className="size-3 text-[#C8F135]" />
              BIOMARCADORES
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-bold text-white shadow-xs">
              <ShieldCheck className="size-3 text-[#C8F135]" />
              INFLAMAÇÃO CONTROLADA
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-bold text-white shadow-xs">
              <HeartPulse className="size-3 text-[#C8F135]" />
              MEDICINA FIBIOS
            </span>
          </div>

          {/* Botão de Ação Tátil no Rodapé da Imagem */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
            <span className="text-[11px] font-semibold text-zinc-200 flex items-center gap-1.5 drop-shadow-md">
              <Clock className="size-3.5 text-[#C8F135]" />
              Leitura de 3 min
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 hover:bg-white text-zinc-950 font-bold text-xs shadow-lg backdrop-blur-xs transition">
              <BookOpen className="size-3.5 text-purple-700" />
              Ler Protocolo Completo
            </span>
          </div>
        </div>

        {/* 4. Pílula de Leitura Rápida */}
        <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-950 dark:text-purple-200 leading-relaxed font-medium">
          💡 <b>Diretriz Clínica:</b> Treinar forte sem entender seus exames acelera o estresse oxidativo. O Protocolo Fibios traduz seus dados em saúde para as próximas décadas.
        </div>

        {/* 5. Barra Bipartida Institucional Netfits */}
        <div className="h-0.5 w-full rounded-full flex overflow-hidden">
          <div className="w-1/2 bg-[#6B2AD9]" />
          <div className="w-1/2 bg-[#C8F135]" />
        </div>

        {/* 6. Módulo Interativo: QUIZZ NETFITS (+5 netfits) */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-purple-600/10 text-purple-600 dark:text-purple-400 grid place-items-center shrink-0">
                <Trophy className="size-5" />
              </div>
              <div>
                <span className="text-[10px] font-black tracking-widest text-purple-600 dark:text-purple-400 uppercase block">
                  QUIZZ NETFITS
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                    Responda e ganhe
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#C8F135] text-zinc-950 font-black text-[11px] tracking-tight shadow-xs">
                    5 netfits
                  </span>
                </div>
              </div>
            </div>

            {hasSubmitted ? (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                <CheckCircle2 className="size-3.5" /> Concluído
              </span>
            ) : (
              <span className="text-[11px] text-zinc-500 font-medium flex items-center gap-1">
                <Clock className="size-3" /> Fixação Diária
              </span>
            )}
          </div>

          <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white leading-snug break-words">
            No Protocolo Fibios de longevidade, qual a importância da análise de biomarcadores para quem treina com frequência?
          </h4>

          {/* Opções de Resposta */}
          <div className="space-y-2">
            {shuffledOptions.map((opt) => {
              const isSelected = selectedOption === opt.id;
              let itemStyle = "border-zinc-200 dark:border-zinc-700 bg-zinc-50/60 dark:bg-zinc-800/40 text-zinc-800 dark:text-zinc-200 hover:border-purple-300";

              if (hasSubmitted) {
                if (opt.isCorrect) {
                  itemStyle = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 font-semibold";
                } else if (isSelected && !opt.isCorrect) {
                  itemStyle = "border-rose-400 bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200";
                }
              } else if (isSelected) {
                itemStyle = "border-purple-600 bg-purple-50/70 dark:bg-purple-950/30 text-purple-950 dark:text-purple-100 font-medium ring-1 ring-purple-600/30";
              }

              return (
                <button
                  key={opt.id}
                  type="button"
                  disabled={hasSubmitted}
                  onClick={() => setSelectedOption(opt.id)}
                  className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition flex items-start gap-3 min-h-[44px] ${itemStyle}`}
                >
                  <span className={`size-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                    isSelected ? "border-purple-600 bg-purple-600 text-white" : "border-zinc-300 text-zinc-500"
                  }`}>
                    {hasSubmitted && opt.isCorrect ? "✓" : ""}
                  </span>
                  <span className="flex-1 break-words leading-relaxed">{opt.text}</span>
                </button>
              );
            })}
          </div>

          {/* Feedback Educativo */}
          {hasSubmitted && (
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                <span>Quizz Concluído (+5 netfits creditados)</span>
              </div>
              <p className="text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed">
                {PROTOCOLO_QUIZ_OPTIONS.find((o) => o.isCorrect)?.feedback}
              </p>
            </div>
          )}

          {errorMsg && !hasSubmitted && (
            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/25 space-y-1">
              <div className="flex items-center gap-1.5 text-rose-800 dark:text-rose-300 text-xs font-bold">
                <AlertCircle className="size-4 text-rose-600 shrink-0" />
                <span>Resposta Incorreta</span>
              </div>
              <p className="text-xs text-rose-900 dark:text-rose-200 leading-relaxed">
                {errorMsg}
              </p>
            </div>
          )}

          {!hasSubmitted && (
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-[#6B2AD9] hover:bg-[#581c87] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition shadow-sm active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Confirmar Resposta</span>
              <ArrowRight className="size-4" />
            </button>
          )}
        </div>

        {/* 7. Ações Sociais */}
        <FeedSocialActions
          id={ARTICLE_POST_ID}
          title="Protocolo Fibios: Biomarcadores & Longevidade no Esporte"
          onOpenArticle={() => setArticleOpen(true)}
        />

        <div className="h-px bg-zinc-200/80 dark:bg-zinc-800/80 my-4" />
      </article>

      {/* Modal com o Artigo Clínico Completo */}
      {articleOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in"
          onClick={() => setArticleOpen(false)}
          role="dialog"
          aria-label="Artigo Protocolo Fibios"
        >
          <div
            className="w-full max-w-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-t-2xl sm:rounded-2xl max-h-[92vh] flex flex-col shadow-2xl border border-zinc-200 dark:border-zinc-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do Modal */}
            <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="size-8 rounded-full bg-purple-600/10 text-purple-600 flex items-center justify-center">
                  <Activity className="size-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-zinc-900 dark:text-white">
                    Protocolo Clínico Fibios
                  </h3>
                  <p className="text-[10px] text-zinc-500">
                    Dra. Isabella Formigari · CRM-SP 282951
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setArticleOpen(false)}
                className="size-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 grid place-items-center hover:bg-zinc-200"
                aria-label="Fechar"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Conteúdo do Artigo com Scroll */}
            <div 
              onScroll={handleScroll}
              className="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Medicina do Estilo de Vida
                </span>
                <h2 className="text-base sm:text-lg font-black text-zinc-950 dark:text-white mt-1">
                  Como Mapear Biomarcadores Blinda a Sua Longevidade no Esporte
                </h2>
              </div>

              <p>
                Treinar com disciplina é indispensável para a saúde cardiovascular e musculoesquelética. No entanto, treinar no escuro — sem saber o que acontece no ambiente celular — pode se transformar em uma armadilha biológica.
              </p>

              <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/50 space-y-1">
                <h4 className="font-bold text-purple-900 dark:text-purple-200 text-xs">
                  O Ponto Cego do Atleta Amador
                </h4>
                <p className="text-xs text-purple-950/80 dark:text-purple-300">
                  Muitos praticantes que se queixam de estagnação, cansaço crônico e dores persistentes acreditam que precisam apenas "treinar mais forte". Na maioria das vezes, o corpo já está emitindo sinais subclínicos de estresse oxidativo descontrolado e inflamação crônica.
                </p>
              </div>

              <h4 className="font-bold text-zinc-950 dark:text-white text-xs uppercase tracking-wider pt-2">
                Os 3 Eixos Centrais do Protocolo Fibios
              </h4>

              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60">
                  <p className="font-bold text-zinc-900 dark:text-white text-xs mb-1">
                    1. Painel Metabólico e Inflamatório
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    Acompanhamento rigoroso de Proteína C-Reativa ultrassensível (PCR-us), homocisteína, ferritina, glicemia de jejum e perfil lipídico fracionado. Esses dados mostram se o endotélio vascular está protegido ou sob sobrecarga.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60">
                  <p className="font-bold text-zinc-900 dark:text-white text-xs mb-1">
                    2. Cinética Hormonal e Eixo de Estresse
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    Análise da relação entre cortisol matinal e testosterona livre, além de DHEA e perfil tireoidiano. Essa proporção revela se o corpo está em anabolismo saudável ou em catabolismo destrutivo (síndrome REDs / overtraining).
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60">
                  <p className="font-bold text-zinc-900 dark:text-white text-xs mb-1">
                    3. Sono Reparador e Recuperação Celular
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    É durante o sono de ondas lentas que ocorre o pico de secreção do hormônio do crescimento (GH) e a síntese de colágeno para tendões e ligamentos. Sem sono regenerador, o estímulo do treino vira lesão articular precoce.
                  </p>
                </div>
              </div>

              <h4 className="font-bold text-zinc-950 dark:text-white text-xs uppercase tracking-wider pt-2">
                Da Teoria ao Hábito Sustentável
              </h4>

              <p>
                Com os biomarcadores estratificados, a periodização dos treinos deixa de ser uma adivinhação. O atleta sabe exatamente quando pode buscar um novo recorde pessoal e quando precisa modular a carga para regenerar.
              </p>

              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                A verdadeira longevidade ativa nasce dessa harmonia: treinar com máxima eficiência, recuperar com profundidade e acompanhar a evolução biológica ano após ano.
              </p>

              {/* Botão de Conclusão da Leitura */}
              <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">
                <button
                  type="button"
                  onClick={handleClaimRead}
                  className="w-full bg-[#6B2AD9] hover:bg-[#581c87] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition shadow-sm active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CheckCircle2 className="size-4" />
                  <span>Concluir Leitura e Ir para o Quizz</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
