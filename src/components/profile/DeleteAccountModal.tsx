import React, { useState } from "react";
import { AlertTriangle, Trash2, X } from "lucide-react";
import { authStore } from "@/lib/auth-store";
import { appLockStore } from "@/lib/app-lock-store";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

interface DeleteAccountModalProps {
  onClose: () => void;
  activeUser: any;
}

export function DeleteAccountModal({ onClose, activeUser }: DeleteAccountModalProps) {
  const navigate = useNavigate();
  const [deleteConfirmText, setDeleteConfirmText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    if (deleteConfirmText.trim().toUpperCase() !== "EXCLUIR") return;
    setIsDeleting(true);
    try {
      authStore.deleteAccount(activeUser.id);
      appLockStore.setUnlocked(false);
      onClose();
      navigate({ to: "/auth" });
    } catch {
      toast.error("Erro ao excluir conta. Tente novamente.");
      setIsDeleting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-zinc-900 border border-red-500/30 text-white rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-full bg-zinc-800/50 cursor-pointer"
        >
          <X className="size-5" />
        </button>

        <div className="text-center space-y-2">
          <div className="size-12 rounded-full bg-red-500/20 text-red-400 mx-auto grid place-items-center mb-1">
            <AlertTriangle className="size-6 text-red-500" />
          </div>
          <h3 className="text-lg font-bold text-white">Excluir Conta & Dados Pessoais</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Esta ação é irreversível e atende ao Artigo 18 da LGPD (Lei nº 13.709/2018) e às diretrizes obrigatórias da Apple Store e Google Play.
          </p>
        </div>

        <div className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-3.5 space-y-2 text-[11px] text-zinc-300">
          <div className="flex items-start gap-2">
            <span className="text-red-400 font-bold">•</span>
            <span><b>Remoção Imediata:</b> Seu perfil, preferências, foto e credenciais biométricas serão permanentemente apagados deste e de qualquer aparelho.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-400 font-bold">•</span>
            <span><b>Cancelamento de Saldo:</b> Quaisquer pontos <b>nfs</b> e conquistas associadas a esta conta serão cancelados sem direito a resgate posterior.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-zinc-400 font-bold">•</span>
            <span><b>Preservação Legal / Fiscal:</b> Registros de compras físicas já faturadas no Marketplace serão mantidos pelo prazo estritamente legal para cumprimento de obrigações tributárias (Art. 16 da LGPD).</span>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
            Digite <strong className="text-red-400">EXCLUIR</strong> para confirmar:
          </label>
          <input
            type="text"
            value={deleteConfirmText}
            onChange={(e) => setDeleteConfirmText(e.target.value)}
            placeholder="EXCLUIR"
            className="w-full bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-3.5 py-2.5 text-xs font-mono tracking-wider focus:outline-none focus:border-red-500 transition"
          />
        </div>

        <div className="flex items-center gap-2 pt-1">
          <button
            type="button"
            onClick={onClose}
            disabled={isDeleting}
            className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs py-3 rounded-xl transition cursor-pointer"
          >
            Cancelar
          </button>
          <button
            type="button"
            disabled={deleteConfirmText.trim().toUpperCase() !== "EXCLUIR" || isDeleting}
            onClick={handleDelete}
            className={`flex-1 font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer ${
              deleteConfirmText.trim().toUpperCase() === "EXCLUIR" && !isDeleting
                ? "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30"
                : "bg-red-600/30 text-zinc-500 cursor-not-allowed"
            }`}
          >
            <Trash2 className="size-3.5" />
            <span>{isDeleting ? "Excluindo..." : "Confirmar Exclusão"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
