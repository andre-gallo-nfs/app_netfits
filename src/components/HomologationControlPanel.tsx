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
  const [activeTab, setActiveTab] = useState<"profiles" | "flows" | "db" | "users">("users");
  const [state, setState] = useState(sharedSandboxStore.getState());
  const [userSearch, setUserSearch] = useState("");
  const [isSyncingCloud, setIsSyncingCloud] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    sharedSandboxStore.syncFromCloud();
    const unsubscribe = sharedSandboxStore.subscribe(() => {
      setState(sharedSandboxStore.getState());
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleManualSync = async () => {
    setIsSyncingCloud(true);
    await sharedSandboxStore.syncFromCloud();
    setIsSyncingCloud(false);
    toast.success("🔄 Usuários cadastrados no mundo todo sincronizados!");
  };

  const activeUser = sharedSandboxStore.getActiveUser();

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copiado! (${text})`);
  };

  const filteredUsers = state.users.filter((u) => {
    const q = userSearch.toLowerCase().trim();
    if (!q) return true;
    return (
      u.fullName.toLowerCase().includes(q) ||
      u.identifier.toLowerCase().includes(q) ||
      u.referralCode.toLowerCase().includes(q) ||
      (u.referredBy && u.referredBy.toLowerCase().includes(q))
    );
  });

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
        <div className="w-[420px] max-w-[calc(100vw-32px)] bg-zinc-950 text-white border border-purple-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[88vh] animate-in slide-in-from-bottom-5">
          {/* Cabeçalho do Painel */}
          <div className="bg-gradient-to-r from-purple-900 via-purple-950 to-zinc-950 p-4 border-b border-purple-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="size-8 rounded-xl bg-purple-600/30 text-lime-400 grid place-items-center border border-purple-400/30">
                <FlaskConical className="size-4" />
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-white">
                  Suíte de Homologação Netfits
                </h3>
                <p className="text-[10px] text-zinc-400">
                  Banco Provisório em Tempo Real (Multi-Dispositivo)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleManualSync}
                disabled={isSyncingCloud}
                className="text-[10px] font-bold bg-lime-400 text-black px-2.5 py-1 rounded-full hover:bg-lime-300 transition active:scale-95 flex items-center gap-1 shrink-0"
                title="Sincronizar cadastros realizados em outros dispositivos"
              >
                <RotateCcw className={`size-3 ${isSyncingCloud ? "animate-spin" : ""}`} />
                <span>{isSyncingCloud ? "Sincronizando..." : "Sincronizar Nuvem"}</span>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="size-7 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 grid place-items-center transition"
              >
                <ChevronDown className="size-4" />
              </button>
            </div>
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
              onClick={() => setActiveTab("users")}
              className={`flex-1 py-2.5 text-center border-b-2 transition ${
                activeTab === "users"
                  ? "border-lime-400 text-lime-400 bg-purple-950/20"
                  : "border-transparent text-zinc-400 hover:text-zinc-200"
              }`}
            >
              👥 Cadastros ({state.users.length})
            </button>
            <button
              onClick={() => setActiveTab("flows")}
              className={`flex-1 py-2.5 text-center border-b-2 transition ${
                activeTab === "flows"
                  ? "border-lime-400 text-lime-400 bg-purple-950/20"
                  : "border-transparent text-zinc-400 hover:text-zinc-200"
              }`}
            >
              🚀 11 Fluxos
            </button>
            <button
              onClick={() => setActiveTab("profiles")}
              className={`flex-1 py-2.5 text-center border-b-2 transition ${
                activeTab === "profiles"
                  ? "border-lime-400 text-lime-400 bg-purple-950/20"
                  : "border-transparent text-zinc-400 hover:text-zinc-200"
              }`}
            >
              👤 Sessão
            </button>
            <button
              onClick={() => setActiveTab("db")}
              className={`flex-1 py-2.5 text-center border-b-2 transition ${
                activeTab === "db"
                  ? "border-lime-400 text-lime-400 bg-purple-950/20"
                  : "border-transparent text-zinc-400 hover:text-zinc-200"
              }`}
            >
              📊 Banco
            </button>
          </div>

          {/* Conteúdo da Aba selecionada */}
          <div className="p-3.5 space-y-2.5 overflow-y-auto flex-1 text-xs">
            {/* ABA 0: FOTO ATUAL DO BANCO DE DADOS DE CADASTROS */}
            {activeTab === "users" && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] uppercase font-extrabold text-lime-400 tracking-wider">
                    📸 Foto Atual do Cadastro ({filteredUsers.length} de {state.users.length})
                  </p>
                </div>

                {/* Campo de Filtro de Busca de Usuários */}
                <div className="relative">
                  <input
                    type="text"
                    value={userSearch}
                    onChange={(e) => setUserSearch(e.target.value)}
                    placeholder="Buscar por nome, e-mail ou código de indicação..."
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
                  />
                  {userSearch && (
                    <button
                      onClick={() => setUserSearch("")}
                      className="absolute right-2.5 top-2 text-zinc-400 hover:text-white text-xs font-bold"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Lista de Cards com o Raio-X de cada usuário no Banco */}
                <div className="space-y-2">
                  {filteredUsers.length === 0 ? (
                    <div className="p-4 text-center text-zinc-400 bg-zinc-900 rounded-2xl border border-zinc-800 text-xs">
                      Nenhum usuário encontrado com o filtro "{userSearch}".
                    </div>
                  ) : (
                    filteredUsers.map((u) => {
                      const isCurrentSession = u.id === activeUser.id;
                      const typeLabel =
                        u.type === "athlete"
                          ? "Atleta"
                          : u.type === "associado"
                          ? "Associado Credenciado"
                          : u.type === "admin"
                          ? "Administrador Netfits"
                          : "Parceiro Comercial";

                      const badgeColor =
                        u.type === "associado"
                          ? "bg-purple-950 text-purple-300 border-purple-500/40"
                          : u.type === "admin"
                          ? "bg-amber-950 text-amber-300 border-amber-500/40"
                          : "bg-lime-950 text-lime-400 border-lime-500/40";

                      return (
                        <div
                          key={u.id}
                          className={`p-3 rounded-2xl border transition space-y-2 ${
                            isCurrentSession
                              ? "bg-purple-950/40 border-lime-400/60 ring-1 ring-lime-400/30"
                              : "bg-zinc-900/90 border-zinc-800 hover:border-zinc-700"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="font-extrabold text-white text-xs">{u.fullName}</span>
                                {isCurrentSession && (
                                  <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-lime-400 text-zinc-950 uppercase">
                                    Sessão Ativa
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-zinc-400 truncate">{u.identifier}</p>
                            </div>
                            <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border shrink-0 ${badgeColor}`}>
                              {typeLabel}
                            </span>
                          </div>

                          {/* Tabela com os metadados do cadastro */}
                          <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-zinc-800 text-[10px]">
                            <div className="bg-zinc-950/60 p-1.5 rounded-lg border border-zinc-800/80">
                              <span className="text-zinc-500 block">Código Indicação:</span>
                              <button
                                onClick={() => handleCopy(u.referralCode, "Código de Indicação")}
                                className="font-mono font-bold text-lime-400 hover:underline flex items-center gap-1 mt-0.5"
                              >
                                {u.referralCode} <Copy className="size-2.5" />
                              </button>
                            </div>

                            <div className="bg-zinc-950/60 p-1.5 rounded-lg border border-zinc-800/80">
                              <span className="text-zinc-500 block">Indicado Por:</span>
                              <span className="font-medium text-zinc-300 truncate block mt-0.5">
                                {u.referredBy ? (
                                  <b className="text-purple-300">{u.referredBy}</b>
                                ) : (
                                  <span className="text-zinc-500">Sem indicação (Direto)</span>
                                )}
                              </span>
                            </div>

                            {u.professionalRegister && (
                              <div className="bg-zinc-950/60 p-1.5 rounded-lg border border-zinc-800/80 col-span-2">
                                <span className="text-zinc-500 block">Registro Profissional & Especialidade:</span>
                                <span className="font-bold text-white mt-0.5 block">
                                  {u.professionalRegister} {u.specialty ? `· ${u.specialty}` : ""}
                                </span>
                              </div>
                            )}

                            <div className="bg-zinc-950/60 p-1.5 rounded-lg border border-zinc-800/80">
                              <span className="text-zinc-500 block">Saldo Atual nfs:</span>
                              <span className="font-black text-lime-400 mt-0.5 block">{u.nfsBalance} nfs</span>
                            </div>

                            <div className="bg-zinc-950/60 p-1.5 rounded-lg border border-zinc-800/80">
                              <span className="text-zinc-500 block">Data de Cadastro:</span>
                              <span className="font-medium text-zinc-300 mt-0.5 block">{u.registeredAt}</span>
                            </div>
                          </div>

                          {!isCurrentSession && (
                            <button
                              onClick={() => sharedSandboxStore.setActiveUser(u.id)}
                              className="w-full mt-1 py-1.5 rounded-xl bg-purple-600/30 hover:bg-purple-600 text-purple-200 hover:text-white font-bold text-[10px] transition border border-purple-500/30 flex items-center justify-center gap-1"
                            >
                              <User className="size-3" />
                              Entrar na Conta deste Usuário
                            </button>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}

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
                    onClick={() => {
                      if (confirm("Tem certeza que deseja resetar todo o banco provisório e limpar os cadastros de teste? Essa ação restaurará os dados para o estado inicial.")) {
                        sharedSandboxStore.resetToDefaults();
                      }
                    }}
                    className="w-full bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/40 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-2 transition active:scale-95 cursor-pointer"
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
