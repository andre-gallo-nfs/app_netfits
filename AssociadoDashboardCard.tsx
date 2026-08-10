import { useState } from "react";
import { Link2, Copy, Check, Share2, Users, TrendingUp, Award, Sparkles, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { wallet } from "@/lib/wallet-store";

export function AssociadoDashboardCard() {
  const [isAssociado, setIsAssociado] = useState(true);
  const [copied, setCopied] = useState(false);

  // Dados mockados do perfil de Associado
  const exclusiveLink = "https://netfits.app/r/gallo-associado-01";
  const [stats, setStats] = useState({
    capturedUsers: 142,
    activeUsers: 118,
    totalCommissionNfs: 14200,
  });

  const handleCopyLink = () => {
    navigator.clipboard.writeText(exclusiveLink);
    setCopied(true);
    toast.success("Link exclusivo de associado copiado para a área de transferência!");
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSimulateNewCapture = () => {
    setStats((prev) => ({
      capturedUsers: prev.capturedUsers + 1,
      activeUsers: prev.activeUsers + 1,
      totalCommissionNfs: prev.totalCommissionNfs + 100,
    }));
    wallet.earn(100, "Comissão de captação de usuário via link exclusivo");
    toast.success("🎉 Novo usuário cadastrado pelo seu link! +100 nfs creditados!");
  };

  if (!isAssociado) {
    return (
      <div className="bg-gradient-to-br from-zinc-900 via-purple-950 to-zinc-900 text-zinc-100 rounded-2xl p-5 border border-purple-500/30 shadow-xl relative overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <Award className="size-5 text-lime-400" />
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400 bg-lime-400/10 px-2 py-0.5 rounded border border-lime-400/20">
            Programa de Associados
          </span>
        </div>
        <h3 className="text-lg font-bold mb-1">Seja um Associado Netfits</h3>
        <p className="text-xs text-zinc-300 mb-4 leading-relaxed">
          Tenha um link exclusivo de captação, convide atletas e ganhe comissão contínua em nfs para cada novo membro ativo na comunidade!
        </p>
        <button
          onClick={() => {
            setIsAssociado(true);
            toast.success("Parabéns! Sua conta agora é uma conta de ASSOCIADO!");
          }}
          className="w-full bg-lime-400 hover:bg-lime-300 text-zinc-950 font-extrabold text-xs py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-lime-400/20"
        >
          <Sparkles className="size-4" />
          Ativar Conta de Associado
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-purple-950 via-zinc-900 to-zinc-950 text-zinc-100 rounded-2xl p-5 border border-purple-500/40 shadow-2xl relative overflow-hidden">
      {/* Top Header Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-lime-400 grid place-items-center text-zinc-950 font-black shadow-inner">
            <Award className="size-5" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400">
              Categoria VIP
            </span>
            <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
              Painel do Associado
            </h3>
          </div>
        </div>
        <span className="text-[10px] font-bold text-lime-400 bg-lime-400/10 border border-lime-400/30 px-2.5 py-1 rounded-full">
          Link Ativo
        </span>
      </div>

      {/* Link Exclusivo Display */}
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-3 mb-4">
        <label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block mb-1.5 flex items-center justify-between">
          <span>Seu Link Exclusivo de Captação</span>
          <span className="text-lime-400 font-bold">100 nfs / cadastro</span>
        </label>
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-zinc-950 rounded-lg px-3 py-2 text-xs font-mono text-zinc-200 truncate border border-zinc-800 flex items-center gap-2">
            <Link2 className="size-3.5 text-purple-400 shrink-0" />
            <span className="truncate">{exclusiveLink}</span>
          </div>
          <button
            onClick={handleCopyLink}
            className="bg-lime-400 hover:bg-lime-300 text-zinc-950 text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 shrink-0 transition-colors"
          >
            {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
            {copied ? "Copiado!" : "Copiar"}
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2.5 text-center">
          <span className="text-[10px] text-zinc-400 block font-medium">Captados</span>
          <span className="text-base font-extrabold text-white">{stats.capturedUsers}</span>
          <span className="text-[9px] text-lime-400 block font-semibold">+12 este mês</span>
        </div>

        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2.5 text-center">
          <span className="text-[10px] text-zinc-400 block font-medium">Ativos</span>
          <span className="text-base font-extrabold text-white">{stats.activeUsers}</span>
          <span className="text-[9px] text-purple-400 block font-semibold">83% retenção</span>
        </div>

        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2.5 text-center">
          <span className="text-[10px] text-zinc-400 block font-medium">Comissão</span>
          <span className="text-base font-extrabold text-lime-400">{stats.totalCommissionNfs.toLocaleString("pt-BR")}</span>
          <span className="text-[9px] text-zinc-400 block font-semibold">nfs acumulados</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={handleSimulateNewCapture}
          className="flex-1 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold py-2.5 rounded-xl border border-purple-400/30 flex items-center justify-center gap-1.5 transition-colors shadow-md"
        >
          <Sparkles className="size-3.5 text-lime-400" />
          Simular Nova Captação
        </button>
      </div>
    </div>
  );
}
