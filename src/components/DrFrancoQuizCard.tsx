import { useState, useEffect } from "react";
import { 
  Trophy, 
  Leaf, 
  MoreVertical, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle, 
  Sparkles, 
  BookOpen, 
  Clock, 
  X, 
  Activity, 
  ShieldCheck, 
  Heart,
  Calendar,
  Share2
} from "lucide-react";
import drFrancoAvatar from "@/assets/dr-franco-avatar.png";
import drFrancoBanner from "@/assets/dr-franco-banner.png";
import { wallet } from "@/lib/wallet-store";
import { feedAntifraud } from "@/lib/feed-antifraud";
import { toast } from "sonner";

interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback?: string;
}

const QUIZ_OPTIONS: QuizOption[] = [
  {
    id: "opt-1",
    text: "Treinar força regularmente.",
    isCorrect: true,
    feedback: "Exato! O treinamento resistido estimula a síntese proteica, preserva a densidade óssea e mantém a autonomia funcional.",
  },
  {
    id: "opt-2",
    text: "Evitar qualquer esforço físico.",
    isCorrect: false,
    feedback: "O repouso excessivo acelera a perda de massa muscular (sarcopenia) e reduz a capacidade cardiorrespiratória.",
  },
  {
    id: "opt-3",
    text: "Tomar suplementos sem orientação.",
    isCorrect: false,
    feedback: "Suplementação sem acompanhamento médico e nutricional não substitui o estímulo mecânico do treinamento de força.",
  },
];

const QUIZ_POST_ID = "franco-forca-quiz";
const ARTICLE_POST_ID = "franco-forca-artigo";

export function DrFrancoQuizCard() {
  const [selectedOption, setSelectedOption] = useState<string>("opt-1");
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [articleOpen, setArticleOpen] = useState<boolean>(false);
  const [readClaimed, setReadClaimed] = useState<boolean>(false);
  const [dwellTimeSeconds, setDwellTimeSeconds] = useState<number>(0);

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

  // Monitoramento contínuo de tempo de retenção ativa (Dwell Time Antifraude)
  useEffect(() => {
    let timer: any = null;
    if (articleOpen && !readClaimed) {
      timer = setInterval(() => {
        setDwellTimeSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [articleOpen, readClaimed]);

  const handleSubmit = () => {
    if (hasSubmitted) {
      toast.info("Você já concluiu este desafio e conquistou seus 10 nfs!");
      return;
    }

    const option = QUIZ_OPTIONS.find((o) => o.id === selectedOption);
    if (!option) return;

    if (option.isCorrect) {
      const validation = feedAntifraud.validateAction("quiz", QUIZ_POST_ID);
      if (!validation.allowed) {
        toast.warning(validation.reason || "Ação bloqueada pelas regras antifraude.");
        return;
      }

      setErrorMsg(null);
      setHasSubmitted(true);
      wallet.earn(10, "Desafio Netfits: Força & Longevidade (Dr. Franco Merici — Fibios)");
      feedAntifraud.recordAction("quiz", QUIZ_POST_ID, 10);
      toast.success("🎉 Parabéns! Resposta correta (+10 nfs creditados na sua carteira)");
    } else {
      setErrorMsg(option.feedback || "Resposta incorreta. Tente novamente para conquistar seus 10 NFs!");
      toast.error("Resposta incorreta. Leia a dica e tente novamente!");
    }
  };

  const handleClaimRead = () => {
    if (readClaimed) {
      toast.info("Você já coletou a recompensa de leitura deste artigo.");
      return;
    }

    const minDwell = feedAntifraud.getRules().minDwellTimeSeconds;
    const validation = feedAntifraud.validateAction("read", ARTICLE_POST_ID, {
      dwellTimeSeconds,
    });

    if (!validation.allowed) {
      toast.warning(validation.reason || "Tempo mínimo de retenção não atingido.");
      return;
    }

    setReadClaimed(true);
    const points = feedAntifraud.getRules().pointsPerView; // 10 nfs oficiais
    wallet.earn(points, "Leitura Completa de Artigo: Força & Longevidade (Dr. Franco Merici)");
    feedAntifraud.recordAction("read", ARTICLE_POST_ID, points);
    toast.success(`👏 Leitura validada por Dwell Time! (+${points} nfs creditados na sua carteira)`);
  };

  const minDwellRequired = feedAntifraud.getRules().minDwellTimeSeconds;
  const isDwellQualified = dwellTimeSeconds >= minDwellRequired;

  return (
    <>
      <article className="px-4 space-y-3.5">
        {/* 1. Header do Especialista */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={drFrancoAvatar}
              alt="Dr. Franco Merici"
              className="size-11 rounded-full object-cover ring-2 ring-purple-500/30 cursor-pointer"
              onClick={() => setArticleOpen(true)}
            />
            <div className="cursor-pointer" onClick={() => setArticleOpen(true)}>
              <h3 className="text-sm font-bold text-zinc-900 leading-tight hover:text-purple-600 transition-colors">
                Dr. Franco responde
              </h3>
              <p className="text-[11px] text-zinc-600 font-medium">
                por Fibios · há 2 horas
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => toast.info("Publicação oficial curada pela Fibios")}
            className="text-zinc-500 hover:text-zinc-800 p-1 rounded-full transition"
            aria-label="Opções"
          >
            <MoreVertical className="size-4" />
          </button>
        </div>

        {/* 2. Banner Principal em Alta Resolução (Clicável para abrir postagem completa) */}
        <div
          onClick={() => setArticleOpen(true)}
          className="relative overflow-hidden rounded-2xl shadow-sm border border-zinc-200 bg-zinc-950 cursor-pointer group active:scale-[0.99] transition-all"
          role="button"
          tabIndex={0}
          aria-label="Toque para ler o conteúdo completo do Dr. Franco"
        >
          <img
            src={drFrancoBanner}
            alt="Dr. Franco Merici - Por que a força muscular importa para a longevidade?"
            className="w-full object-cover aspect-[524/450] group-hover:scale-[1.01] transition-transform duration-300"
            loading="lazy"
          />

          {/* Badge Indicador de Artigo Clicável */}
          <div className="absolute top-3 right-3 bg-zinc-950/85 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg group-hover:bg-purple-600 group-hover:border-purple-500 transition-colors">
            <BookOpen className="size-3.5 text-lime-400 group-hover:text-white" />
            <span className="text-[11px] font-bold">Ler artigo (+10 nfs)</span>
          </div>
        </div>

        {/* 3. Módulo Interativo Desafio Netfits (Quiz-to-Earn) */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
          {/* Cabeçalho do Quiz */}
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-purple-600/10 text-purple-600 grid place-items-center shrink-0">
              <Trophy className="size-5" />
            </div>
            <div>
              <span className="text-[10px] font-black tracking-widest text-purple-600 uppercase block">
                DESAFIO NETFITS
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-xs font-bold text-zinc-800">
                  Responda e ganhe
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#C8FF00] text-zinc-950 font-black text-[11px] tracking-tight shadow-xs">
                  10 NFs
                </span>
              </div>
            </div>
          </div>

          {/* Pergunta */}
          <h4 className="text-sm sm:text-base font-bold text-zinc-900 leading-snug">
            Qual hábito ajuda mais a preservar a força ao longo da vida?
          </h4>

          {/* Lista de Alternativas (Radio Buttons) */}
          <div className="space-y-2.5">
            {QUIZ_OPTIONS.map((opt) => {
              const isSelected = selectedOption === opt.id;
              const isFinishedCorrect = hasSubmitted && opt.isCorrect;

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    if (!hasSubmitted) {
                      setSelectedOption(opt.id);
                      setErrorMsg(null);
                    }
                  }}
                  disabled={hasSubmitted}
                  className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center gap-3 cursor-pointer ${
                    isFinishedCorrect
                      ? "bg-lime-500/15 border-lime-500 text-zinc-950 font-semibold"
                      : isSelected
                      ? "bg-lime-50 border-lime-500/80 text-zinc-950 font-semibold shadow-xs"
                      : "bg-zinc-50/90 border-zinc-200 text-zinc-900 hover:border-zinc-300"
                  } ${hasSubmitted ? "cursor-default" : ""}`}
                >
                  <div
                    className={`size-5 rounded-full border-2 grid place-items-center shrink-0 transition-colors ${
                      isFinishedCorrect || isSelected
                        ? "border-lime-600 bg-lime-500/20"
                        : "border-zinc-400"
                    }`}
                  >
                    {(isFinishedCorrect || isSelected) && (
                      <div className="size-2 rounded-full bg-lime-600" />
                    )}
                  </div>
                  <span className="flex-1 text-zinc-900 font-medium">{opt.text}</span>
                </button>
              );
            })}
          </div>

          {/* Mensagem de Erro Educativo se errar */}
          {errorMsg && (
            <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs animate-in fade-in">
              <AlertCircle className="size-4 shrink-0 mt-0.5" />
              <p>{errorMsg}</p>
            </div>
          )}

          {/* Botão de Ação / Conclusão */}
          {!hasSubmitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 active:scale-[0.99] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-purple-600/20 transition cursor-pointer"
            >
              <span>Responder e conquistar 10 NFs</span>
              <ArrowRight className="size-4" />
            </button>
          ) : (
            <div className="p-3 rounded-xl bg-lime-500/15 border border-lime-500/40 text-zinc-900 flex items-center gap-2.5 animate-in fade-in">
              <CheckCircle2 className="size-5 text-lime-600 shrink-0" />
              <div className="flex-1 text-xs">
                <span className="font-bold text-lime-700 block">
                  Desafio conquistado!
                </span>
                <span className="text-zinc-800 font-medium">+10 NFs foram creditados na sua carteira Netfits.</span>
              </div>
              <Sparkles className="size-4 text-lime-600 shrink-0" />
            </div>
          )}
        </div>

        {/* 4. Pílula de Sabedoria / Takeaway no Rodapé */}
        <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-purple-950 border border-zinc-800 rounded-2xl p-4 text-white flex items-center gap-3.5 shadow-sm">
          <div className="size-9 rounded-full bg-lime-400/10 border border-lime-400/20 grid place-items-center shrink-0">
            <Leaf className="size-4 text-lime-400" />
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 leading-snug">
            Força não é apenas desempenho.{" "}
            <strong className="text-lime-400 font-semibold block">
              É autonomia para viver bem em todas as fases da vida.
            </strong>
          </p>
        </div>
      </article>

      {/* 5. Modal de Leitura Completa da Postagem */}
      {articleOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setArticleOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-lg bg-white text-zinc-900 rounded-t-3xl sm:rounded-3xl max-h-[92vh] overflow-y-auto shadow-2xl border border-zinc-200 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Topo do Modal com a Imagem */}
            <div className="relative">
              <img
                src={drFrancoBanner}
                alt="Dr. Franco Merici"
                className="w-full aspect-[524/300] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/30" />
              
              <button
                type="button"
                onClick={() => setArticleOpen(false)}
                className="absolute top-3 right-3 size-9 rounded-full bg-black/60 text-white backdrop-blur-md grid place-items-center hover:bg-black/80 transition cursor-pointer"
                aria-label="Fechar"
              >
                <X className="size-5" />
              </button>

              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="px-2 py-0.5 rounded bg-lime-400 text-zinc-950 font-black text-[10px] uppercase tracking-wider">
                  Postagem Oficial Fibios
                </span>
                <h2 className="text-lg sm:text-xl font-black mt-1 leading-tight text-white drop-shadow-sm">
                  Por que a força muscular importa para a longevidade?
                </h2>
              </div>
            </div>

            {/* Trava Antifraude de Dwell Time no Header do Modal */}
            <div className="px-5 py-2.5 bg-zinc-100 border-b border-zinc-200 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-zinc-700 font-medium">
                <ShieldCheck className="size-4 text-lime-600" />
                <span>Auditoria Antifraude de Leitura (Dwell Time):</span>
              </span>
              <span className="font-mono font-bold text-purple-700">
                {dwellTimeSeconds}s / {minDwellRequired}s {isDwellQualified ? "✔" : ""}
              </span>
            </div>

            {/* Corpo do Artigo */}
            <div className="p-5 sm:p-6 space-y-4 text-xs sm:text-sm leading-relaxed text-zinc-800">
              {/* Metadados */}
              <div className="flex items-center justify-between py-2 border-b border-zinc-200 text-xs text-zinc-600">
                <div className="flex items-center gap-2">
                  <img src={drFrancoAvatar} alt="" className="size-7 rounded-full object-cover" />
                  <div>
                    <span className="font-bold text-zinc-900 block">Dr. Franco Merici</span>
                    <span className="text-[10px] text-zinc-500">Médico · Sócio-Fundador Fibios</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-zinc-600">
                    <Clock className="size-3.5" /> 3 min
                  </span>
                  <span className="text-purple-700 font-bold font-mono">
                    +10 nfs leitura
                  </span>
                </div>
              </div>

              {/* Parágrafos Médicos Didáticos */}
              <p className="text-zinc-800 font-medium">
                Muito além de estética corporal ou performance em corridas, a <strong>massa muscular é hoje considerada o principal biomarcador de longevidade saudável (healthspan)</strong>. A ciência médica comprova: quanto maior a reserva muscular e força funcional, menor a taxa de mortalidade por todas as causas.
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 space-y-1.5">
                <span className="text-xs font-bold text-purple-800 flex items-center gap-1.5">
                  <ShieldCheck className="size-4 text-purple-700" /> 1. O Músculo como Órgão Endócrino
                </span>
                <p className="text-xs text-zinc-700">
                  Quando se contrai contra resistência, o tecido muscular libera <strong>miocinas</strong> — substâncias sinalizadoras que reduzem a inflamação sistêmica, aumentam a captação de glicose sem sobrecarregar a insulina e protegem a saúde cardiovascular e neurológica.
                </p>
              </div>

              <div className="bg-lime-50 border border-lime-200 rounded-xl p-4 space-y-1.5">
                <span className="text-xs font-bold text-lime-800 flex items-center gap-1.5">
                  <Activity className="size-4 text-lime-700" /> 2. O Risco Silencioso da Sarcopenia
                </span>
                <p className="text-xs text-zinc-700">
                  A partir dos 30 anos, perde-se entre <strong>3% a 8% de massa muscular por década</strong> se não houver treino resistido contínuo. Essa perda de potência é o gatilho primário de dores articulares crônicas, desaceleração metabólica e perda de independência na maturidade.
                </p>
              </div>

              <div className="bg-zinc-100 rounded-xl p-4 space-y-2">
                <span className="text-xs font-bold text-zinc-900 flex items-center gap-1.5">
                  <Heart className="size-4 text-purple-600" /> Prescrição Prática da Fibios:
                </span>
                <ul className="text-xs text-zinc-700 space-y-1 list-disc pl-4">
                  <li><strong>Frequência</strong>: Mínimo de 2 a 3 sessões semanais de treinamento de força.</li>
                  <li><strong>Exercícios-chave</strong>: Priorize padrões multiarticulares (agachamento, levantamento terra, remadas e desenvolvimentos).</li>
                  <li><strong>Aporte Proteico</strong>: 1,6g a 2,2g de proteína por kg corporal distribuídos ao longo do dia.</li>
                  <li><strong>Acompanhamento Médico</strong>: Avaliação clínica para adequar volumes e prevenir lesões tendíneas.</li>
                </ul>
              </div>

              {/* Botão de Bonificação por Leitura Concluída com Trava Antifraude */}
              <div className="pt-2">
                {!readClaimed ? (
                  <button
                    type="button"
                    onClick={handleClaimRead}
                    disabled={!isDwellQualified}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition cursor-pointer ${
                      isDwellQualified
                        ? "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-600/20 active:scale-[0.99]"
                        : "bg-zinc-200 text-zinc-500 cursor-not-allowed"
                    }`}
                  >
                    <BookOpen className="size-4" />
                    <span>
                      {isDwellQualified
                        ? "Concluir Leitura (+10 nfs de recompensa)"
                        : `Aguarde ${minDwellRequired - dwellTimeSeconds}s para validar leitura`}
                    </span>
                  </button>
                ) : (
                  <div className="p-3 rounded-xl bg-lime-500/15 border border-lime-500/40 text-zinc-900 flex items-center justify-center gap-2 text-xs font-bold">
                    <CheckCircle2 className="size-4 text-lime-600" />
                    <span>Leitura auditada e confirmada (+10 nfs acumulados)</span>
                  </div>
                )}
              </div>

              {/* CTA Agendamento na Fibios */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setArticleOpen(false);
                    toast.success("Redirecionando para agendamento de consulta médica com a equipe Fibios...");
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <Calendar className="size-4" />
                  <span>Agendar Consulta com Dr. Franco na Fibios</span>
                </button>
                <p className="text-[10px] text-center text-zinc-600 mt-1.5 font-medium">
                  Consultas com cashback exclusivo em pontos Netfits
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
