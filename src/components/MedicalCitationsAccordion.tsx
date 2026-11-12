import { useState } from "react";
import { BookOpen, ChevronDown, ChevronUp, ExternalLink, ShieldCheck } from "lucide-react";

export interface CitationItem {
  title: string;
  source: string;
  url: string;
  pmid?: string;
  doi?: string;
}

export interface MedicalCitationsProps {
  citations: CitationItem[];
  disclaimer?: string;
  defaultOpen?: boolean;
}

export function MedicalCitationsAccordion({
  citations,
  disclaimer,
  defaultOpen = false,
}: MedicalCitationsProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (!citations || citations.length === 0) return null;

  return (
    <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 overflow-hidden text-xs my-3 transition-all shadow-xs">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3.5 flex items-center justify-between text-left hover:bg-zinc-100/70 dark:hover:bg-zinc-800/70 transition cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2">
          <div className="size-6 rounded-lg bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 grid place-items-center">
            <BookOpen className="size-3.5" />
          </div>
          <span className="font-extrabold text-zinc-900 dark:text-zinc-100 text-[11px] sm:text-xs">
            Evidências Científicas &amp; Diretrizes Médicas ({citations.length})
          </span>
        </div>
        {isOpen ? (
          <ChevronUp className="size-4 text-purple-600 dark:text-purple-400 shrink-0" />
        ) : (
          <ChevronDown className="size-4 text-zinc-400 shrink-0" />
        )}
      </button>

      {isOpen && (
        <div className="px-4 pb-4 pt-1 space-y-3 border-t border-zinc-200/80 dark:border-zinc-800/80 text-[11px] leading-relaxed text-zinc-600 dark:text-zinc-400">
          <ul className="space-y-2.5">
            {citations.map((c, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="font-bold text-purple-600 dark:text-purple-400 shrink-0 mt-0.5">
                  [{idx + 1}]
                </span>
                <div className="flex-1">
                  <p className="font-semibold text-zinc-800 dark:text-zinc-200">
                    {c.title}
                  </p>
                  <p className="text-[10px] text-zinc-500 italic mt-0.5">
                    {c.source}
                  </p>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 font-bold hover:underline mt-1 cursor-pointer"
                  >
                    <span>Ver artigo / diretriz original</span>
                    {c.pmid && <span className="font-mono text-[9px] bg-purple-100 dark:bg-purple-950 px-1 rounded">PMID: {c.pmid}</span>}
                    <ExternalLink className="size-3" />
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 text-[10px] text-zinc-500 dark:text-zinc-500 leading-normal flex items-start gap-1.5">
            <ShieldCheck className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
            <p>
              {disclaimer ||
                "Aviso Regulatório CFM: Conteúdo estritamente educativo e de promoção de saúde preventiva, fundamentado na literatura médica indexada. Não substitui consulta, diagnóstico ou conduta clínica médica presencial e individualizada (Resoluções CFM nº 2.314/2022 e 2.336/2023)."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
