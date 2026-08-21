import { useState, useEffect } from "react";
import {
  FlaskConical, User, ShieldCheck, Users, ShoppingBag, Heart, Share2,
  Building2, MessageSquare, RotateCcw, ChevronUp, ChevronDown, Check,
  Zap, Copy, Sparkles, ExternalLink
} from "lucide-react";
import { sharedSandboxStore, type SandboxUser } from "@/lib/shared-sandbox-store";
import { toast } from "sonner";
import { Link, useNavigate } from "@tanstack/react-router";

export function HomologationControlPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"profiles" | "flows" | "db">("flows");
  const [state, setState] = useState(sharedSandboxStore.getState());
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = sharedSandboxStore.subscribe(() => {
      setState(sharedSandboxStore.getState());
    });
    return unsubscribe;
  }, []);

  const activeUser = sharedSandboxStore.getActiveUser();

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copiado! (${text})`);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 font-sans">
      {/* Botão Principal Flutuante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-purple-700 via-purple-600 to-lime-500 text-white font-extrabold text-xs px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2.5 border border-white/20 hover:scale-105 transition-all active:scale-95 animate-pulse"
        >
          <FlaskConical className="size-4 text-lime-300" />
          <span>🧪 Painel de Homologação</span>
          <span className="bg-black/30 text-[10px] font-black px-2 py-0.5 rounded-full">
            {state.users.length} Usuários
          </span>
        </button>
      )}

      {/* Painel Expansível de Testes */}
      {isOpen && (
        <div className="w-[380px] max-w-[calc(100vw-32px)] bg-zinc-950 text-white border border-purple-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in slide-in-from-bottom-5">
          {/* Cabeçalho do Painel */}
          <div className="bg-gradient-to-r from-purple-900 via-purple-950 to-zinc-950 p-4 border-b border-purple-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="size-8 rounded-xl bg-purple-600/30 text-lime-400 grid place-items-center border border-purple-400/30">
                <FlaskConical className="size-4" />
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-white">
                  Suíte de Homologação & Testes
                </h3>
                <p className="text-[10px] text-zinc-400">
                  Banco Provisório em Tempo Real (Multi-Dispositivo)
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="size-7 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 grid place-items-center transition"
            >
              <ChevronDown className="size-4" />
            </button>
          </div>

          {/* User Session Switcher Bar */}
          <div className="p-3 bg-zinc-900/80 border-b border-zinc-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 min-w-0">
              <span className="size-2 rounded-full bg-lime-400 animate-ping shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] text-zinc-400 font-medium leading-none">Sessão Ativa:</p>
                <p className="font-bold text-white truncate text-[11px] mt-0.5">
                  {activeUser.fullName} <span className="text-lime-400 font-extrabold">({activeUser.type.toUpperCase()})</span>
                </p>
              </div>
            </div>
            <div className="bg-purple-950 border border-purple-500/40 text-purple-300 font-mono font-bold text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1">
              <span>{activeUser.nfsBalance} nfs</span>
            </div>
          </div>

          {/* Aba Tabs */}
          <div className="flex border-b border-zinc-800 bg-zinc-900/40 text-[11px] font-bold">
            <button
              onClick={() => setActiveTab("flows")}
              className={`flex-1 py-2.5 text-center border-b-2 transition ${
                activeTab === "flows"
                  ? "border-lime-400 text-lime-400 bg-purple-950/20"
                  : "border-transparent text-zinc-400 hover:text-zinc-200"
              }`}
            >
              🚀 11 Fluxos de Teste
            </button>
            <button
              onClick={() => setActiveTab("profiles")}
              className={`flex-1 py-2.5 text-center border-b-2 transition ${
                activeTab === "profiles"
                  ? "border-lime-400 text-lime-400 bg-purple-950/20"
                  : "border-transparent text-zinc-400 hover:text-zinc-200"
              }`}
            >
              👤 Trocar Perfil
            </button>
            <button
              onClick={() => setActiveTab("db")}
              className={`flex-1 py-2.5 text-center border-b-2 transition ${
                activeTab === "db"
                  ? "border-lime-400 text-lime-400 bg-purple-950/20"
                  : "border-transparent text-zinc-400 hover:text-zinc-200"
              }`}
            >
              📊 Banco ({state.users.length})
            </button>
          </div>

          {/* Conteúdo da Aba selecionada */}
          <div className="p-3.5 space-y-2.5 overflow-y-auto flex-1 text-xs">
            {/* ABA 1: 11 FLUXOS */}
            {activeTab === "flows" && (
              <div className="space-y-2">
                <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider mb-2">
                  Selecione um fluxo para testar:
                </p>

                {/* Fluxo 1 */}
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-[11px]">1. Cadastro Sem Indicação</span>
                    <button
                      onClick={() => navigate({ to: "/auth" })}
                      className="bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1"
                    >
                      Ir para /auth <ExternalLink className="size-3" />
                    </button>
                  </div>
                  <p className="text-[10px] text-zinc-400">Cadastre um novo e-mail sem código e ganhe +50 nfs.</p>
                </div>

                {/* Fluxo 2 */}
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-[11px]">2. Cadastro c/ Indicação de Cliente</span>
                    <button
                      onClick={() => handleCopy("MARINA-RUN", "Código de Amigo")}
                      className="bg-lime-500/20 text-lime-400 border border-lime-500/30 text-[10px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1"
                    >
                      Copiar "MARINA-RUN" <Copy className="size-3" />
                    </button>
                  </div>
                  <p className="text-[10px] text-zinc-400">Insira "MARINA-RUN" no cadastro para ambos ganharem +50 nfs.</p>
                </div>

                {/* Fluxo 3 */}
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-[11px]">3. Cadastro c/ Indicação de Associado</span>
                    <button
                      onClick={() => handleCopy("ASSOC-SP-001", "Código do Associado")}
                      className="bg-lime-500/20 text-lime-400 border border-lime-500/30 text-[10px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1"
                    >
                      Copiar "ASSOC-SP-001" <Copy className="size-3" />
                    </button>
                  </div>
                  <p className="text-[10px] text-zinc-400">Vincule a conta do cliente à Dra. Isabella (Associada).</p>
                </div>

                {/* Fluxo 4 */}
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-[11px]">4. Cadastro de Novo Associado</span>
                    <button
                      onClick={() => navigate({ to: "/associado" })}
                      className="bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1"
                    >
                      Ir para /associado <ExternalLink className="size-3" />
                    </button>
                  </div>
                  <p className="text-[10px] text-zinc-400">Cadastre um médico/nutricionista com CRM/CRN/CREF.</p>
                </div>

                {/* Fluxo 5 */}
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-[11px]">5. Cadastro de Parceiro Comercial</span>
                    <button
                      onClick={() => navigate({ to: "/parceiros" })}
                      className="bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1"
                    >
                      Ir para /parceiros <ExternalLink className="size-3" />
                    </button>
                  </div>
                  <p className="text-[10px] text-zinc-400">Cadastre academia/clínica 100% grátis (Modelo sem mensalidade).</p>
                </div>

                {/* Fluxo 6 & 7 */}
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-[11px]">6 & 7. Curtida e Compartilhamento Feed</span>
                    <button
                      onClick={() => navigate({ to: "/" })}
                      className="bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1"
                    >
                      Ir para Feed / <ExternalLink className="size-3" />
                    </button>
                  </div>
                  <p className="text-[10px] text-zinc-400">Curta (+5 nfs) ou Compartilhe pós-leitura (+10 nfs) no Feed.</p>
                </div>

                {/* Fluxo 8 */}
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-[11px]">8. Compra no Shop com Pontos</span>
                    <button
                      onClick={() => navigate({ to: "/market" })}
                      className="bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1"
                    >
                      Ir para Shop /market <ExternalLink className="size-3" />
                    </button>
                  </div>
                  <p className="text-[10px] text-zinc-400">Resgate produtos com saldo em nfs e veja no Admin.</p>
                </div>

                {/* Fluxo 10 */}
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-[11px]">10. Painel Admin Realtime</span>
                    <button
                      onClick={() => navigate({ to: "/admin" })}
                      className="bg-lime-500 hover:bg-lime-400 text-black text-[10px] font-black px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm"
                    >
                      Ir para /admin <ExternalLink className="size-3" />
                    </button>
                  </div>
                  <p className="text-[10px] text-zinc-400">Veja o acompanhamento de vendas, cadastros e DRE FinOps.</p>
                </div>

                {/* Fluxo 11 */}
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-[11px]">11. Envio de Mensagem de Contato</span>
                    <button
                      onClick={() => navigate({ to: "/contato" })}
                      className="bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1"
                    >
                      Ir para /contato <ExternalLink className="size-3" />
                    </button>
                  </div>
                  <p className="text-[10px] text-zinc-400">Envie um suporte e receba o ticket no Admin.</p>
                </div>
              </div>
            )}

            {/* ABA 2: PROFILES */}
            {activeTab === "profiles" && (
              <div className="space-y-2">
                <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider mb-2">
                  Trocar Usuário da Sessão Atual:
                </p>
                {state.users.map((u) => {
                  const isCurrent = u.id === activeUser.id;
                  return (
                    <button
                      key={u.id}
                      onClick={() => sharedSandboxStore.setActiveUser(u.id)}
                      className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition ${
                        isCurrent
                          ? "bg-purple-900/40 border-lime-400/60 ring-1 ring-lime-400/30"
                          : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
                      }`}
                    >
                      <div>
                        <p className="font-bold text-white text-[11px] flex items-center gap-1.5">
                          {u.fullName}
                          {isCurrent && <span className="text-lime-400 font-black">✓ Ativo</span>}
                        </p>
                        <p className="text-[10px] text-zinc-400 truncate">
                          {u.identifier} · Code: <span className="font-mono text-zinc-300">{u.referralCode}</span>
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-500/30">
                          {u.type}
                        </span>
                        <p className="text-[10px] font-bold text-lime-400 mt-1">{u.nfsBalance} nfs</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* ABA 3: DATABASE STATUS & RESET */}
            {activeTab === "db" && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl">
                    <p className="text-[10px] text-zinc-400 uppercase font-bold">Atletas & Usuários</p>
                    <p className="text-base font-black text-lime-400">{state.users.length}</p>
                  </div>
                  <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl">
                    <p className="text-[10px] text-zinc-400 uppercase font-bold">Parceiros Comerciais</p>
                    <p className="text-base font-black text-purple-400">{state.partners.length}</p>
                  </div>
                  <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl">
                    <p className="text-[10px] text-zinc-400 uppercase font-bold">Pedidos no Shop</p>
                    <p className="text-base font-black text-amber-400">{state.orders.length}</p>
                  </div>
                  <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl">
                    <p className="text-[10px] text-zinc-400 uppercase font-bold">Tickets de Suporte</p>
                    <p className="text-base font-black text-sky-400">{state.tickets.length}</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-800 space-y-2">
                  <button
                    onClick={() => sharedSandboxStore.resetToDefaults()}
                    className="w-full bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/40 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-2 transition"
                  >
                    <RotateCcw className="size-4" />
                    Resetar Banco Provisório de Teste
                  </button>
                  <p className="text-[9px] text-zinc-500 text-center leading-tight">
                    Limpa cadastros de teste e restaura o banco de dados provisório para o estado inicial.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
