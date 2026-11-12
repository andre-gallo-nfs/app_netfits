import { useState } from "react";
import {
  ShieldAlert,
  Flag,
  UserX,
  X,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { ugcSafetyStore } from "@/lib/ugc-safety-store";

export interface UgcSafetyProps {
  contentId: string;
  contentTitle: string;
  authorId: string;
  authorName: string;
  contentType?: "post" | "comment" | "quiz";
  onBlocked?: () => void;
}

const REPORT_REASONS = [
  { id: "spam", label: "Spam ou publicidade não autorizada" },
  { id: "harassment", label: "Assédio, ódio, ofensa ou bullying" },
  { id: "misinformation", label: "Desinformação médica ou perigo à saúde" },
  { id: "inappropriate", label: "Conteúdo sexual, nudez ou impróprio" },
  { id: "violence", label: "Violência, ameaça ou incitação a crimes" },
  { id: "other", label: "Outra violação dos Termos de Uso" },
];

export function UgcSafetyMenuModal({
  contentId,
  contentTitle,
  authorId,
  authorName,
  contentType = "post",
  onBlocked,
}: UgcSafetyProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [blockModalOpen, setBlockModalOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState(REPORT_REASONS[0].id);
  const [details, setDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleReportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const reasonObj = REPORT_REASONS.find((r) => r.id === selectedReason);
      await ugcSafetyStore.reportContent({
        contentId,
        contentType,
        contentTitle,
        authorId,
        authorName,
        reason: reasonObj ? reasonObj.label : selectedReason,
        details,
      });
      setReportModalOpen(false);
      setDetails("");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConfirmBlock = async () => {
    setIsSubmitting(true);
    try {
      await ugcSafetyStore.blockUser(authorId, authorName, "Bloqueado pelo usuário no feed");
      setBlockModalOpen(false);
      if (onBlocked) {
        onBlocked();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Botão de Moderação & Segurança (Apple Guideline 1.2) */}
      <div className="relative inline-block">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-1.5 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-700 transition cursor-pointer"
          title="Opções de segurança e moderação"
          aria-label="Opções de segurança e denúncia"
        >
          <Flag className="size-3.5" />
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setMenuOpen(false)}
            />
            <div className="absolute right-0 bottom-full mb-1 w-48 bg-white rounded-2xl shadow-xl border border-zinc-200 py-1.5 z-50 text-xs font-semibold text-zinc-800 animate-in fade-in zoom-in-95 duration-100">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  setReportModalOpen(true);
                }}
                className="w-full px-3 py-2 text-left flex items-center gap-2 hover:bg-zinc-50 text-red-600 cursor-pointer"
              >
                <Flag className="size-3.5 text-red-500" />
                <span>Denunciar Conteúdo</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  setBlockModalOpen(true);
                }}
                className="w-full px-3 py-2 text-left flex items-center gap-2 hover:bg-zinc-50 text-zinc-700 cursor-pointer border-t border-zinc-100"
              >
                <UserX className="size-3.5 text-zinc-500" />
                <span>Bloquear {authorName || "Autor"}</span>
              </button>
            </div>
          </>
        )}
      </div>

      {/* MODAL 1: DENUNCIAR CONTEÚDO IMPRÓPRIO */}
      {reportModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md bg-white text-zinc-900 rounded-3xl border border-zinc-200 p-6 space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-xl bg-red-100 text-red-600">
                  <ShieldAlert className="size-4" />
                </div>
                <h3 className="text-sm font-black text-zinc-900">
                  Denunciar Conteúdo Impróprio
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setReportModalOpen(false)}
                className="size-7 rounded-full bg-zinc-100 text-zinc-500 hover:text-zinc-900 grid place-items-center cursor-pointer"
                aria-label="Fechar"
              >
                <X className="size-3.5" />
              </button>
            </div>

            {/* Compromisso de Moderação em 24h (Apple Guideline 1.2) */}
            <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
              <div className="flex items-center gap-1.5 font-bold">
                <Clock className="size-3.5 text-amber-600 shrink-0" />
                <span>Compromisso de Análise em até 24 Horas</span>
              </div>
              <p className="text-[11px] leading-relaxed text-amber-800">
                A Netfits aplica tolerância zero para abusos. Conteúdos denunciados são avaliados em até 24h e o usuário infrator é permanentemente ejetado da plataforma.
              </p>
            </div>

            <form onSubmit={handleReportSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                  Motivo da denúncia:
                </label>
                <div className="space-y-1.5">
                  {REPORT_REASONS.map((r) => (
                    <label
                      key={r.id}
                      className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs cursor-pointer transition ${
                        selectedReason === r.id
                          ? "bg-purple-50 border-purple-500 text-purple-900 font-bold"
                          : "border-zinc-200 hover:bg-zinc-50 text-zinc-700"
                      }`}
                    >
                      <input
                        type="radio"
                        name="reportReason"
                        value={r.id}
                        checked={selectedReason === r.id}
                        onChange={() => setSelectedReason(r.id)}
                        className="accent-purple-600"
                      />
                      <span>{r.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Detalhes adicionais (opcional):
                </label>
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Descreva o problema para acelerar a moderação..."
                  rows={2}
                  className="w-full p-2.5 text-xs rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-zinc-800"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setReportModalOpen(false)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-bold text-xs transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition shadow-sm active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Denúncia"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: BLOQUEAR USUÁRIO */}
      {blockModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-sm bg-white text-zinc-900 rounded-3xl border border-zinc-200 p-6 space-y-4 shadow-2xl relative">
            <div className="size-12 rounded-2xl bg-red-100 text-red-600 grid place-items-center mx-auto">
              <UserX className="size-6" />
            </div>

            <div className="text-center space-y-1.5">
              <h3 className="text-base font-black text-zinc-900">
                Bloquear {authorName}?
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Ao bloquear este autor, <strong>todas as postagens dele serão removidas imediatamente do seu feed</strong>. O desenvolvedor será notificado automaticamente para moderação (Apple Guideline 1.2).
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-[11px] text-zinc-600 flex items-center gap-2">
              <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
              <span>Você pode gerenciar ou desbloquear usuários na aba Meu Perfil.</span>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => setBlockModalOpen(false)}
                className="flex-1 py-2.5 px-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-bold text-xs transition"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleConfirmBlock}
                disabled={isSubmitting}
                className="flex-1 py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition shadow-sm active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? "Bloqueando..." : "Bloquear Usuário"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
