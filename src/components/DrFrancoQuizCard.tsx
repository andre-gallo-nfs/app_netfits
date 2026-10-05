import { useState, useEffect } from "react";
import { Trophy, Leaf, MoreVertical, CheckCircle2, ArrowRight, AlertCircle, Sparkles } from "lucide-react";
import drFrancoAvatar from "@/assets/dr-franco-avatar.png";
import drFrancoBanner from "@/assets/dr-franco-banner.png";
import { wallet } from "@/lib/wallet-store";
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

const STORAGE_KEY = "netfits_quiz_franco_forca_answered";

export function DrFrancoQuizCard() {
  const [selectedOption, setSelectedOption] = useState<string>("opt-1");
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "true") {
        setHasSubmitted(true);
      }
    }
  }, []);

  const handleSubmit = () => {
    if (hasSubmitted) {
      toast.info("Você já concluiu este desafio e conquistou seus 10 nfs!");
      return;
    }

    const option = QUIZ_OPTIONS.find((o) => o.id === selectedOption);
    if (!option) return;

    if (option.isCorrect) {
      setErrorMsg(null);
      setHasSubmitted(true);
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, "true");
      }
      wallet.earn(10, "Desafio Netfits: Força & Longevidade (Dr. Franco Merici - Fibios)");
      toast.success("🎉 Parabéns! Resposta correta (+10 nfs creditados na sua carteira)");
    } else {
      setErrorMsg(option.feedback || "Resposta incorreta. Tente novamente para conquistar seus 10 NFs!");
      toast.error("Resposta incorreta. Leia a dica e tente novamente!");
    }
  };

  return (
    <article className="px-4 space-y-3.5">
      {/* 1. Header do Especialista */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={drFrancoAvatar}
            alt="Dr. Franco Merici"
            className="size-11 rounded-full object-cover ring-2 ring-purple-500/30"
          />
          <div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white leading-tight">
              Dr. Franco responde
            </h3>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
              por Fibios · há 2 horas
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => toast.info("Publicação oficial curada pela Fibios")}
          className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 p-1 rounded-full transition"
          aria-label="Opções"
        >
          <MoreVertical className="size-4" />
        </button>
      </div>

      {/* 2. Banner Principal em Alta Resolução */}
      <div className="relative overflow-hidden rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-950">
        <img
          src={drFrancoBanner}
          alt="Dr. Franco Merici - Por que a força muscular importa para a longevidade?"
          className="w-full object-cover aspect-[524/450]"
          loading="lazy"
        />
      </div>

      {/* 3. Módulo Interativo Desafio Netfits (Quiz-to-Earn) */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
        {/* Cabeçalho do Quiz */}
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-purple-600/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300 grid place-items-center shrink-0">
            <Trophy className="size-5" />
          </div>
          <div>
            <span className="text-[10px] font-black tracking-widest text-purple-600 dark:text-purple-400 uppercase block">
              DESAFIO NETFITS
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                Responda e ganhe
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#C8FF00] text-zinc-950 font-black text-[11px] tracking-tight shadow-xs">
                10 NFs
              </span>
            </div>
          </div>
        </div>

        {/* Pergunta */}
        <h4 className="text-sm sm:text-base font-bold text-zinc-950 dark:text-white leading-snug">
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
                    ? "bg-lime-500/10 border-lime-500 text-zinc-900 dark:text-white"
                    : isSelected
                    ? "bg-lime-50 dark:bg-lime-950/20 border-lime-500/80 text-zinc-950 dark:text-white shadow-xs"
                    : "bg-zinc-50/60 dark:bg-zinc-950/40 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700"
                } ${hasSubmitted ? "cursor-default" : ""}`}
              >
                <div
                  className={`size-5 rounded-full border-2 grid place-items-center shrink-0 transition-colors ${
                    isFinishedCorrect || isSelected
                      ? "border-lime-500 bg-lime-500/20"
                      : "border-zinc-400 dark:border-zinc-600"
                  }`}
                >
                  {(isFinishedCorrect || isSelected) && (
                    <div className="size-2 rounded-full bg-lime-500" />
                  )}
                </div>
                <span className="flex-1">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Mensagem de Erro Educativo se errar */}
        {errorMsg && (
          <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs animate-in fade-in">
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
          <div className="p-3 rounded-xl bg-lime-500/15 border border-lime-500/40 text-zinc-900 dark:text-white flex items-center gap-2.5 animate-in fade-in">
            <CheckCircle2 className="size-5 text-lime-500 shrink-0" />
            <div className="flex-1 text-xs">
              <span className="font-bold text-lime-600 dark:text-lime-400 block">
                Desafio conquistado!
              </span>
              <span>+10 NFs foram creditados na sua carteira Netfits.</span>
            </div>
            <Sparkles className="size-4 text-lime-500 shrink-0" />
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
  );
}
