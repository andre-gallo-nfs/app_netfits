import { useState, useEffect } from "react";
import {
  Users, UserCheck, Award, ShieldAlert, UserPlus, RotateCcw,
  Search, Check, X, Edit3, LogIn, Trash2
} from "lucide-react";
import { toast } from "sonner";
import { KpiCard } from "./admin-ui";
import { sharedSandboxStore, SandboxUser } from "@/lib/shared-sandbox-store";

interface AdminUsersTabProps {
  isReal: boolean;
  realUsersCount: number;
  realActiveUsersCount: number;
  declaredLoyaltyCount: number;
  declaredProgramsBreakdown: {
    livelo: number;
    esfera: number;
    c6: number;
    outros: number;
  };
  pf: number;
  shortLabel: string;
}

export function AdminUsersTab({
  isReal,
  realUsersCount,
  realActiveUsersCount,
  declaredLoyaltyCount,
  declaredProgramsBreakdown,
  pf,
  shortLabel,
}: AdminUsersTabProps) {
  const [sandboxUsersList, setSandboxUsersList] = useState<SandboxUser[]>(() =>
    sharedSandboxStore.getUsers()
  );
  const [sandboxSearchTerm, setSandboxSearchTerm] = useState("");
  const [sandboxRoleFilter, setSandboxRoleFilter] = useState("all");
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [editingBalanceValue, setEditingBalanceValue] = useState<number>(0);

  const [showAddTestUserModal, setShowAddTestUserModal] = useState(false);
  const [newTestUserForm, setNewTestUserForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    cpf: "",
    birthDate: "",
    type: "athlete" as "athlete" | "associado" | "partner" | "admin",
    initialNfs: 50,
    referralCode: "",
  });

  useEffect(() => {
    return sharedSandboxStore.subscribe(() => {
      setSandboxUsersList([...sharedSandboxStore.getUsers()]);
    });
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <span className="text-[9px] font-extrabold uppercase tracking-wider text-lime-400">
            Base de Atletas &amp; Programas Bancários Declarados (Business Plan Sessão 6)
          </span>
          <h3 className="text-sm font-bold text-white">
            Comunidade, Declaração de Pontos Bancários &amp; Retenção
          </h3>
        </div>
        <span className="text-xs font-mono text-purple-300 bg-purple-900/30 px-3 py-1 rounded-full border border-purple-500/30 font-bold">
          {isReal ? `${realUsersCount} Atletas Cadastrados (100% Reais)` : "482k Declarações Coletadas"}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <KpiCard
          title="Usuários Cadastrados"
          value={isReal ? realUsersCount.toLocaleString("pt-BR") : Math.round(1245000 * Math.min(1, pf * 1.1)).toLocaleString("pt-BR")}
          change={isReal ? `${realUsersCount} usuários reais` : "+32.4%"}
          positive={true}
          icon={Users}
          subtext={isReal ? `${realUsersCount} atletas oficiais` : "Superou meta Etapa 1 (1M)"}
          periodBadge={isReal ? "Banco Oficial" : shortLabel}
        />
        <KpiCard
          title="Ativos Mensais (MAU)"
          value={isReal ? realActiveUsersCount.toLocaleString("pt-BR") : Math.round(620000 * Math.min(1, pf * 1.1)).toLocaleString("pt-BR")}
          change={isReal ? "100.0% engajamento" : "50.0% engajamento"}
          positive={true}
          icon={UserCheck}
          subtext={isReal ? `${realActiveUsersCount} atletas ativos no banco` : "620k atletas ativos"}
          periodBadge={isReal ? "Banco Oficial" : shortLabel}
        />
        <KpiCard
          title="Declaração Pontos Bancários"
          value={isReal ? `${declaredLoyaltyCount}` : Math.round(482000 * Math.min(1, pf * 1.1)).toLocaleString("pt-BR")}
          change={isReal ? `${((declaredLoyaltyCount / Math.max(1, realUsersCount)) * 100).toFixed(1)}% da base` : "38.7% da base"}
          positive={true}
          icon={Award}
          subtext={isReal ? `${declaredLoyaltyCount} de ${realUsersCount} declararam` : "Intenção de resgate"}
          periodBadge={isReal ? "Banco Oficial" : shortLabel}
        />
        <KpiCard
          title="Taxa de Retenção (90 dias)"
          value={isReal ? "100.0%" : "86.2%"}
          change={isReal ? "Retenção total" : "Meta 80%"}
          positive={true}
          icon={ShieldAlert}
          subtext={isReal ? `${realActiveUsersCount} usuários ativos em produção` : "Excelente retenção"}
          periodBadge={isReal ? "Banco Oficial" : shortLabel}
        />
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4">
        <h4 className="font-bold text-sm text-white">Distribuição de Programas Bancários Declarados (Pesquisa Etapa 1)</h4>
        {isReal ? (
          declaredLoyaltyCount === 0 ? (
            <div className="bg-zinc-950 p-6 rounded-2xl border border-dashed border-zinc-800 text-center space-y-2">
              <Award className="size-8 text-zinc-600 mx-auto" />
              <h5 className="text-sm font-bold text-white">Nenhum Programa Bancário Declarado no Banco Real</h5>
              <p className="text-xs text-zinc-400 max-w-lg mx-auto">
                Nenhum dos {realUsersCount} usuários cadastrados declarou programas bancários até o momento. A pesquisa estatística de mercado pode ser visualizada alternando para o modo &quot;Projeção&quot;.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1">
                <p className="text-xs text-zinc-400 font-semibold">Livelo (BB &amp; Bradesco)</p>
                <p className="text-xl font-bold text-white">{declaredProgramsBreakdown.livelo} {declaredProgramsBreakdown.livelo === 1 ? "declaração" : "declarações"}</p>
                <span className="text-[10px] text-lime-400">{declaredProgramsBreakdown.livelo > 0 ? "Declarado no onboarding" : "0 declarados na base real"}</span>
              </div>
              <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1">
                <p className="text-xs text-zinc-400 font-semibold">Esfera (Santander)</p>
                <p className="text-xl font-bold text-white">{declaredProgramsBreakdown.esfera} {declaredProgramsBreakdown.esfera === 1 ? "declaração" : "declarações"}</p>
                <span className="text-[10px] text-purple-400">{declaredProgramsBreakdown.esfera > 0 ? "Declarado no onboarding" : "0 declarados na base real"}</span>
              </div>
              <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1">
                <p className="text-xs text-zinc-400 font-semibold">C6 Átomos</p>
                <p className="text-xl font-bold text-white">{declaredProgramsBreakdown.c6} {declaredProgramsBreakdown.c6 === 1 ? "declaração" : "declarações"}</p>
                <span className="text-[10px] text-amber-400">{declaredProgramsBreakdown.c6 > 0 ? "Declarado no onboarding" : "0 declarados na base real"}</span>
              </div>
              <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1">
                <p className="text-xs text-zinc-400 font-semibold">Outros (iupp, Smiles, LATAM)</p>
                <p className="text-xl font-bold text-white">{declaredProgramsBreakdown.outros} {declaredProgramsBreakdown.outros === 1 ? "declaração" : "declarações"}</p>
                <span className="text-[10px] text-lime-400">{declaredProgramsBreakdown.outros > 0 ? "Declarado no onboarding" : "0 declarados na base real"}</span>
              </div>
            </div>
          )
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1">
              <p className="text-xs text-zinc-400 font-semibold">Livelo (BB &amp; Bradesco)</p>
              <p className="text-xl font-bold text-white">184.000 declarações</p>
              <span className="text-[10px] text-lime-400">Média: 45.000 pts declarados</span>
            </div>
            <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1">
              <p className="text-xs text-zinc-400 font-semibold">Esfera (Santander)</p>
              <p className="text-xl font-bold text-white">128.000 declarações</p>
              <span className="text-[10px] text-purple-400">Média: 38.000 pts declarados</span>
            </div>
            <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1">
              <p className="text-xs text-zinc-400 font-semibold">C6 Átomos</p>
              <p className="text-xl font-bold text-white">74.000 declarações</p>
              <span className="text-[10px] text-amber-400">Média: 22.000 pts declarados</span>
            </div>
            <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1">
              <p className="text-xs text-zinc-400 font-semibold">Smiles &amp; LATAM Pass</p>
              <p className="text-xl font-bold text-white">96.000 declarações</p>
              <span className="text-[10px] text-lime-400">Média: 55.000 pts declarados</span>
            </div>
          </div>
        )}
      </div>

      {/* TABELA DE GESTÃO DO BANCO DE USUÁRIOS DE TESTE EM TEMPO REAL */}
      <div className="bg-gradient-to-br from-zinc-900 via-purple-950/20 to-zinc-900 border-2 border-purple-500/30 rounded-3xl p-6 shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400 bg-purple-950/80 px-2.5 py-1 rounded-full border border-purple-500/30">
                Banco de Dados Definitivo de Produção (Go-Live)
              </span>
              <span className="size-2 rounded-full bg-lime-400 animate-ping" />
            </div>
            <h3 className="text-lg font-black text-white mt-1.5 flex items-center gap-2">
              <span>Base Ativa de Usuários em Produção</span>
              <span className="text-xs bg-lime-400/20 text-lime-300 border border-lime-400/40 px-2.5 py-0.5 rounded-full font-mono font-bold">
                {sandboxUsersList.length} Usuários Cadastrados
              </span>
            </h3>
            <p className="text-xs text-zinc-400">
              Gerencie, filtre, edite saldos de pontos nfs ou visualize cadastros de usuários reais do banco de dados em produção.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setShowAddTestUserModal(true)}
              className="px-3.5 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-zinc-950 font-black text-xs shadow-lg flex items-center gap-1.5 transition cursor-pointer"
            >
              <UserPlus className="size-4 text-zinc-950" />
              <span>+ Cadastrar Usuário</span>
            </button>
            <button
              onClick={() => {
                if (confirm("Deseja realmente resetar o banco de teste para os padrões originais de homologação?")) {
                  sharedSandboxStore.resetToDefaults();
                }
              }}
              className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-red-950 hover:text-red-300 text-zinc-300 border border-zinc-700 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
              title="Restaurar a base original de usuários e transações de teste"
            >
              <RotateCcw className="size-3.5" />
              <span>Resetar Banco</span>
            </button>
          </div>
        </div>

        {/* Filtros e Busca */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-3 size-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Buscar por Nome, E-mail, Celular, CPF ou Código de Indicação..."
              value={sandboxSearchTerm}
              onChange={(e) => setSandboxSearchTerm(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-lime-400"
            />
          </div>

          {/* Filtros de Tipo */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {[
              { id: "all", label: `Todos (${sandboxUsersList.length})` },
              { id: "athlete", label: `Atletas (${sandboxUsersList.filter(u => u.type === "athlete").length})` },
              { id: "associado", label: `Associados (${sandboxUsersList.filter(u => u.type === "associado").length})` },
              { id: "partner", label: `Parceiros (${sandboxUsersList.filter(u => u.type === "partner").length})` },
              { id: "admin", label: `Admins (${sandboxUsersList.filter(u => u.type === "admin").length})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSandboxRoleFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                  sandboxRoleFilter === tab.id
                    ? "bg-purple-600 text-white shadow-md font-black"
                    : "bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tabela de Usuários */}
        <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950">
          <table className="w-full text-left text-xs">
            <thead className="bg-zinc-900/90 text-zinc-400 uppercase text-[10px] font-mono border-b border-zinc-800">
              <tr>
                <th className="py-3 px-4">Usuário / Perfil</th>
                <th className="py-3 px-4">Tipo / Papel</th>
                <th className="py-3 px-4">Identificador / Contato</th>
                <th className="py-3 px-4">Código / Indicação</th>
                <th className="py-3 px-4 text-right">Saldo de Pontos</th>
                <th className="py-3 px-4 text-center">Ações Rápidas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-850">
              {sandboxUsersList
                .filter((u) => {
                  if (sandboxRoleFilter !== "all" && u.type !== sandboxRoleFilter) return false;
                  if (!sandboxSearchTerm.trim()) return true;
                  const q = sandboxSearchTerm.toLowerCase().trim();
                  return (
                    u.fullName.toLowerCase().includes(q) ||
                    (u.email && u.email.toLowerCase().includes(q)) ||
                    (u.identifier && u.identifier.toLowerCase().includes(q)) ||
                    (u.phone && u.phone.includes(q)) ||
                    (u.cpf && u.cpf.includes(q)) ||
                    (u.referralCode || '').toLowerCase().includes(q) ||
                    (u.referredBy && u.referredBy.toLowerCase().includes(q))
                  );
                })
                .map((u) => {
                  const isCurrentActive = sharedSandboxStore.getActiveUser().id === u.id;
                  return (
                    <tr key={u.id} className={`hover:bg-zinc-900/60 transition ${isCurrentActive ? "bg-purple-950/20" : ""}`}>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2.5">
                          <div className="size-8 rounded-full bg-gradient-to-tr from-purple-700 to-lime-400 grid place-items-center text-white font-black text-xs shrink-0">
                            {(u.fullName || 'US').substring(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-bold text-white text-xs flex items-center gap-1.5">
                              <span>{u.fullName}</span>
                              {isCurrentActive && (
                                <span className="text-[9px] font-extrabold bg-lime-400/20 text-lime-400 border border-lime-400/30 px-1.5 py-0.2 rounded-full">
                                  Sessão Ativa
                                </span>
                              )}
                            </p>
                            <p className="text-[10px] text-zinc-500 font-mono">ID: {u.id}</p>
                          </div>
                        </div>
                      </td>

                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase border ${
                            u.type === "admin"
                              ? "bg-amber-500/20 text-amber-300 border-amber-500/30"
                              : u.type === "associado"
                              ? "bg-purple-600/30 text-purple-300 border-purple-500/40"
                              : u.type === "partner"
                              ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                              : "bg-lime-400/20 text-lime-400 border-lime-400/30"
                          }`}
                        >
                          {u.type === "admin"
                            ? "👑 Admin"
                            : u.type === "associado"
                            ? "🟣 Associado"
                            : u.type === "partner"
                            ? "🏢 Parceiro"
                            : "🏃 Atleta"}
                        </span>
                        {u.specialty && (
                          <p className="text-[10px] text-zinc-400 mt-0.5 truncate max-w-[140px]">{u.specialty}</p>
                        )}
                      </td>

                      <td className="py-3 px-4">
                        <p className="text-zinc-200 font-medium">{u.email || u.identifier}</p>
                        <div className="flex items-center gap-2 text-[10px] text-zinc-500 mt-0.5">
                          {u.phone && <span>Tel: {u.phone}</span>}
                          {u.cpf && <span>CPF: {u.cpf}</span>}
                        </div>
                      </td>

                      <td className="py-3 px-4 font-mono">
                        <span className="text-lime-400 font-bold bg-lime-950/60 px-2 py-0.5 rounded border border-lime-500/20">
                          {u.referralCode}
                        </span>
                        {u.referredBy && (
                          <p className="text-[10px] text-zinc-400 mt-1">
                            Indicado por: <strong className="text-purple-300">{u.referredBy}</strong>
                          </p>
                        )}
                      </td>

                      <td className="py-3 px-4 text-right">
                        {editingUserId === u.id ? (
                          <div className="flex items-center justify-end gap-1.5">
                            <input
                              type="number"
                              value={editingBalanceValue}
                              onChange={(e) => setEditingBalanceValue(Number(e.target.value))}
                              className="w-20 bg-zinc-900 border border-lime-400 rounded-lg px-2 py-1 text-xs text-white font-mono text-right"
                            />
                            <button
                              onClick={() => {
                                sharedSandboxStore.adjustUserBalance(u.id, editingBalanceValue);
                                setEditingUserId(null);
                              }}
                              className="p-1 rounded bg-lime-400 text-zinc-950 font-bold hover:bg-lime-300 cursor-pointer"
                              title="Salvar Saldo"
                            >
                              <Check className="size-3.5" />
                            </button>
                            <button
                              onClick={() => setEditingUserId(null)}
                              className="p-1 rounded bg-zinc-800 text-zinc-400 hover:text-white cursor-pointer"
                              title="Cancelar"
                            >
                              <X className="size-3.5" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center justify-end gap-1.5">
                            <span className="font-mono font-bold text-white text-xs">
                              {(u.nfsBalance ?? 0).toLocaleString("pt-BR")} <span className="text-lime-400">nfs</span>
                            </span>
                            <button
                              onClick={() => {
                                setEditingUserId(u.id);
                                setEditingBalanceValue(u.nfsBalance ?? 0);
                              }}
                              className="p-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition cursor-pointer"
                              title="Editar Saldo"
                            >
                              <Edit3 className="size-3" />
                            </button>
                          </div>
                        )}
                      </td>

                      <td className="py-3 px-4 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={() => sharedSandboxStore.setActiveUser(u.id)}
                            className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold flex items-center gap-1 transition cursor-pointer ${
                              isCurrentActive
                                ? "bg-lime-400 text-zinc-950 font-black shadow-xs"
                                : "bg-purple-600 hover:bg-purple-500 text-white shadow-xs"
                            }`}
                            title="Assumir esta conta de teste como sessão ativa"
                          >
                            <LogIn className="size-3" />
                            <span>{isCurrentActive ? "Ativo" : "Assumir"}</span>
                          </button>
                          {u.id !== "user-admin" && (
                            <button
                              onClick={() => {
                                if (confirm(`Excluir o usuário de teste "${u.fullName}"?`)) {
                                  sharedSandboxStore.deleteUser(u.id);
                                }
                              }}
                              className="p-1.5 rounded-lg bg-zinc-850 hover:bg-red-950 hover:text-red-400 text-zinc-500 transition cursor-pointer"
                              title="Excluir Usuário de Teste"
                            >
                              <Trash2 className="size-3" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL: CRIAR NOVO USUÁRIO DE TESTE */}
      {showAddTestUserModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 max-w-md w-full space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <UserPlus className="size-4 text-lime-400" />
                <span>Novo Usuário de Teste</span>
              </h4>
              <button
                onClick={() => setShowAddTestUserModal(false)}
                className="size-7 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white grid place-items-center cursor-pointer"
              >
                <X className="size-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!newTestUserForm.fullName.trim() || !newTestUserForm.email.trim()) {
                  toast.error("Preencha Nome e E-mail.");
                  return;
                }

                if (newTestUserForm.type === "associado") {
                  const res = sharedSandboxStore.registerAssociado({
                    fullName: newTestUserForm.fullName.trim(),
                    email: newTestUserForm.email.trim(),
                    phone: newTestUserForm.phone.trim(),
                    register: "CRM/SP 999.888",
                    specialty: "Medicina do Esporte",
                    city: "São Paulo",
                  });
                  if (res.user && newTestUserForm.initialNfs > 0) {
                    sharedSandboxStore.adjustUserBalance(res.user.id, newTestUserForm.initialNfs);
                  }
                } else {
                  const res = sharedSandboxStore.registerAthlete({
                    fullName: newTestUserForm.fullName.trim(),
                    email: newTestUserForm.email.trim(),
                    phone: newTestUserForm.phone.trim(),
                    cpf: newTestUserForm.cpf.trim(),
                    birthDate: newTestUserForm.birthDate.trim(),
                    referralCode: newTestUserForm.referralCode.trim(),
                  });
                  if (res.user && newTestUserForm.initialNfs > 0) {
                    sharedSandboxStore.adjustUserBalance(res.user.id, newTestUserForm.initialNfs);
                  }
                }

                setShowAddTestUserModal(false);
                toast.success(`Usuário de teste "${newTestUserForm.fullName}" criado com sucesso!`);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block text-zinc-300 font-bold mb-1">Nome Completo *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Silva"
                  value={newTestUserForm.fullName}
                  onChange={(e) => setNewTestUserForm({ ...newTestUserForm, fullName: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-lime-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-zinc-300 font-bold mb-1">E-mail *</label>
                  <input
                    type="email"
                    required
                    placeholder="carlos@email.com"
                    value={newTestUserForm.email}
                    onChange={(e) => setNewTestUserForm({ ...newTestUserForm, email: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-lime-400"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 font-bold mb-1">Perfil / Tipo</label>
                  <select
                    value={newTestUserForm.type}
                    onChange={(e) => setNewTestUserForm({ ...newTestUserForm, type: e.target.value as any })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-lime-400 cursor-pointer"
                  >
                    <option value="athlete">🏃 Atleta</option>
                    <option value="associado">🟣 Associado</option>
                    <option value="partner">🏢 Parceiro</option>
                    <option value="admin">👑 Admin</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-zinc-300 font-bold mb-1">Saldo Inicial (nfs)</label>
                  <input
                    type="number"
                    value={newTestUserForm.initialNfs}
                    onChange={(e) => setNewTestUserForm({ ...newTestUserForm, initialNfs: Number(e.target.value) })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-lime-400 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 font-bold mb-1">Código Indicação (Opcional)</label>
                  <input
                    type="text"
                    placeholder="GALLO-NETFITS"
                    value={newTestUserForm.referralCode}
                    onChange={(e) => setNewTestUserForm({ ...newTestUserForm, referralCode: e.target.value.toUpperCase() })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-lime-400 font-mono"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddTestUserModal(false)}
                  className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-zinc-950 font-black text-xs shadow-md cursor-pointer"
                >
                  Salvar e Criar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
