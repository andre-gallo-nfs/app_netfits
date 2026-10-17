import React, { useState } from "react";
import {
  Users, ShoppingBag, Coins, DollarSign, UserPlus, Filter, CheckCircle2, Share2, Award, Phone, Mail, Send
} from "lucide-react";
import { toast } from "sonner";
import { useOperationalParams } from "@/lib/operational-params-store";
import { SandboxUser, SandboxOrder } from "@/lib/shared-sandbox-store";
import { KpiCard, PaginationControls } from "./admin-ui";

export interface AssociadoAdminItem {
  id: string;
  name: string;
  handle: string;
  category: string;
  code: string;
  referralCode?: string;
  exclusiveUrl?: string;
  activeUsers?: number;
  isVerifiedSpecialist?: boolean;
  specialistBadgeLabel?: string;
  capturedUsers: number;
  retentionRatePct: number;
  gmvBrl: number;
  netfitsRevenueBrl: number;
  commissionPctOfNetfitsRev?: number;
  commissionBrl: number;
  payoutStatus?: "Pago" | "Pendente" | "Processando";
  syntheticActions?: {
    shopPurchases: number;
    postsViewed: number;
    videosWatched: number;
    shares: number;
    activities: number;
  };
}

export const ASSOCIADOS_MOCK_DATABASE: AssociadoAdminItem[] = [
  {
    id: "assoc_all",
    name: "Visão Consolidada (Todos os Associados)",
    handle: "18 Associados Ativos",
    category: "Geral",
    code: "TODOS",
    capturedUsers: 12450,
    retentionRatePct: 86.2,
    gmvBrl: 1840000.0,
    netfitsRevenueBrl: 276000.0,
    commissionPctOfNetfitsRev: 30.0,
    commissionBrl: 82800.0,
    payoutStatus: "Pago",
    syntheticActions: {
      shopPurchases: 3410,
      postsViewed: 128400,
      videosWatched: 49200,
      shares: 23100,
      activities: 84500,
    },
  },
  {
    id: "assoc_01",
    name: "André Gallo",
    handle: "@gallo.influencer",
    category: "Influenciador Master",
    code: "GALLO-NETFITS",
    isVerifiedSpecialist: true,
    specialistBadgeLabel: "Especialista Educação Física",
    capturedUsers: 1428,
    retentionRatePct: 87.4,
    gmvBrl: 184920.0,
    netfitsRevenueBrl: 27738.0,
    commissionPctOfNetfitsRev: 30.0,
    commissionBrl: 8321.4,
    payoutStatus: "Pendente",
    syntheticActions: {
      shopPurchases: 342,
      postsViewed: 12840,
      videosWatched: 4920,
      shares: 2310,
      activities: 8450,
    },
  },
  {
    id: "assoc_02",
    name: "Marina Duarte",
    handle: "@marina.fitness",
    category: "Embaixadora Corrida",
    code: "MARINA-RUN",
    isVerifiedSpecialist: false,
    specialistBadgeLabel: "Embaixadora Corrida",
    capturedUsers: 2850,
    retentionRatePct: 89.1,
    gmvBrl: 380000.0,
    netfitsRevenueBrl: 57000.0,
    commissionPctOfNetfitsRev: 30.0,
    commissionBrl: 17100.0,
    payoutStatus: "Pendente",
    syntheticActions: {
      shopPurchases: 780,
      postsViewed: 31200,
      videosWatched: 12400,
      shares: 5800,
      activities: 21300,
    },
  },
];

interface AdminAssociadosTabProps {
  isReal?: boolean;
  realAssociadosCount: number;
  realAssociadosList: SandboxUser[];
  realOrders: SandboxOrder[];
  sandboxUsersList: SandboxUser[];
  realUsersCount: number;
  pf: number;
  shortLabel: string;
  onOpenNewAssociadoModal?: () => void;
}

export function AdminAssociadosTab({
  isReal,
  realAssociadosCount,
  realAssociadosList,
  realOrders,
  sandboxUsersList,
  realUsersCount,
  pf,
  shortLabel,
  onOpenNewAssociadoModal,
}: AdminAssociadosTabProps) {
  const operationalParams = useOperationalParams();
  const [showNewAssociadoModal, setShowNewAssociadoModal] = useState(false);
  const [newAssocName, setNewAssocName] = useState("");
  const [newAssocEmail, setNewAssocEmail] = useState("");
  const [newAssocPhone, setNewAssocPhone] = useState("");
  const [newAssocHandle, setNewAssocHandle] = useState("");
  const [newAssocSpecialty, setNewAssocSpecialty] = useState("Médico / Nutrologia Esportiva");
  const [newAssocCity, setNewAssocCity] = useState("São Paulo - SP");
  const [createdInviteLinks, setCreatedInviteLinks] = useState<{
    associadoName: string;
    code: string;
    associadoCode: string;
    appLink: string;
    portalLink: string;
    phone: string;
    email: string;
  } | null>(null);

  const handleCreateAssociadoByAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAssocName.trim() || !newAssocEmail.trim()) {
      toast.error("Preencha ao menos o Nome e E-mail oficial do Associado.");
      return;
    }

    const cleanName = newAssocName.trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
    const assocCode = `${cleanName.slice(0, 6) || "ASSOC"}-NETFITS`;
    const appLink = `https://app.netfits.com.br/r/${assocCode}`;
    const portalLink = `https://app.netfits.com.br/associados/painel?code=${assocCode}`;

    const newAssoc: AssociadoAdminItem = {
      id: `assoc_admin_${Date.now()}`,
      name: newAssocName.trim(),
      handle: newAssocHandle.trim() || `@${newAssocName.toLowerCase().replace(/[^a-z0-9]/g, "")}`,
      category: newAssocSpecialty,
      code: assocCode,
      referralCode: assocCode,
      exclusiveUrl: appLink,
      isVerifiedSpecialist: newAssocSpecialty.includes("Médico") || newAssocSpecialty.includes("Nutricionista"),
      specialistBadgeLabel: newAssocSpecialty,
      capturedUsers: 0,
      retentionRatePct: 100.0,
      gmvBrl: 0,
      netfitsRevenueBrl: 0,
      commissionPctOfNetfitsRev: operationalParams.associadoShareOfNetfitsRevenuePct ?? 10.0,
      commissionBrl: 0,
      payoutStatus: "Pendente",
      syntheticActions: {
        shopPurchases: 0,
        postsViewed: 0,
        videosWatched: 0,
        shares: 0,
        activities: 0,
      },
    };

    setAssociadosList((prev) => [newAssoc, ...prev]);

    setCreatedInviteLinks({
      associadoName: newAssocName.trim(),
      code: assocCode,
      associadoCode: assocCode,
      appLink,
      portalLink,
      email: newAssocEmail.trim(),
      phone: newAssocPhone.trim(),
    });

    setNewAssocName("");
    setNewAssocEmail("");
    setNewAssocPhone("");
    setNewAssocHandle("");
    setShowNewAssociadoModal(false);
    toast.success(`🎉 Associado "${newAssocName}" cadastrado com sucesso! Código: ${assocCode}`);
  };

  const [selectedAssociadoId, setSelectedAssociadoId] = useState<string>("assoc_all");
  const [associadosList, setAssociadosList] = useState<AssociadoAdminItem[]>(ASSOCIADOS_MOCK_DATABASE);
  const [associadosPage, setAssociadosPage] = useState<number>(1);
  const itemsPerPage = 8;

  const toggleSpecialistBadge = (id: string) => {
    setAssociadosList((prev) =>
      prev.map((a) => {
        if (a.id === id) {
          const newVal = !a.isVerifiedSpecialist;
          toast.success(
            newVal
              ? `🟣 Selo Roxo de Especialista Credenciado concedido a ${a.name}!`
              : `⚪ Selo Roxo de Especialista revogado para ${a.name}.`
          );
          return { ...a, isVerifiedSpecialist: newVal };
        }
        return a;
      })
    );
  };

  const selectedAssociado = associadosList.find((a) => a.id === selectedAssociadoId) || associadosList[0];

  const selectedAssocOrders = isReal
    ? realOrders.filter((o: SandboxOrder) => {
        if (selectedAssociadoId === "none" || !selectedAssociadoId) return false;
        const curAssoc = realAssociadosList.find((a) => a.id === selectedAssociadoId);
        if (!curAssoc) return false;
        const buyer = sandboxUsersList.find((u) => u.id === o.userId);
        return buyer?.referredBy === curAssoc.referralCode || o.referralCode === curAssoc.referralCode;
      })
    : [];

  const selectedAssocGmv = selectedAssocOrders.reduce(
    (acc, o: SandboxOrder) => acc + Number(o.amountBrl ?? o.summary?.finalPrice ?? 0),
    0
  );
  const selectedAssocNetfitsRev =
    selectedAssocGmv * ((operationalParams.netfitsTakeRatePctFromGmv ?? 6.0) / 100);
  const selectedAssocCommission =
    selectedAssocNetfitsRev * ((operationalParams.associadoShareOfNetfitsRevenuePct ?? 10.0) / 100);

  return (
    <div className="space-y-6">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <span className="text-[9px] font-extrabold uppercase tracking-wider text-lime-400">
            Desempenho de Influenciadores ({shortLabel})
          </span>
          <h3 className="text-sm font-bold text-white">
            Módulo de Acompanhamento das Carteiras de Associados
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onOpenNewAssociadoModal || (() => setShowNewAssociadoModal(true))}
            className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-lg shadow-purple-600/20 transition active:scale-95 cursor-pointer"
          >
            <UserPlus className="size-4" />
            ➕ Cadastrar Novo Associado (Time Admin)
          </button>

          <div className="flex items-center gap-2 bg-zinc-950 p-2 rounded-2xl border border-zinc-800">
            <Filter className="size-4 text-purple-400 ml-2" />
            <select
              value={selectedAssociadoId}
              onChange={(e) => setSelectedAssociadoId(e.target.value)}
              className="bg-transparent text-xs font-bold text-white focus:outline-none pr-4 cursor-pointer"
            >
              {isReal ? (
                realAssociadosCount === 0 ? (
                  <option value="none" className="bg-zinc-900 text-white">
                    Nenhum associado no Banco Real
                  </option>
                ) : (
                  realAssociadosList.map((a) => (
                    <option key={a.id} value={a.id} className="bg-zinc-900 text-white">
                      {a.fullName} ({a.email || a.id})
                    </option>
                  ))
                )
              ) : (
                associadosList.map((a) => (
                  <option key={a.id} value={a.id} className="bg-zinc-900 text-white">
                    {a.name} ({a.handle}) {a.isVerifiedSpecialist ? "🟣 Especialista" : ""}
                  </option>
                ))
              )}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <KpiCard
          title="Tamanho da Carteira"
          value={
            isReal
              ? realAssociadosCount.toLocaleString("pt-BR")
              : Math.round((selectedAssociado?.capturedUsers ?? 0) * Math.min(1, pf * 1.1)).toLocaleString("pt-BR")
          }
          change={isReal ? `${realAssociadosCount} associados reais` : "+12.4%"}
          positive={true}
          icon={Users}
          subtext={isReal ? "Cadastrados no banco de dados" : `Retenção ativa: ${selectedAssociado.retentionRatePct}%`}
          periodBadge={shortLabel}
        />
        <KpiCard
          title="GMV do Shopping (R$)"
          value={
            isReal
              ? `R$ ${selectedAssocGmv.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
              : `R$ ${((selectedAssociado?.gmvBrl ?? 0) * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
          }
          change={isReal ? `${selectedAssocOrders.length} compras vinculadas` : "+18.2%"}
          positive={true}
          icon={ShoppingBag}
          subtext={isReal ? `${selectedAssocOrders.length} vendas na carteira` : "Vendas na carteira"}
          periodBadge={shortLabel}
        />
        <KpiCard
          title="Receita Netfits (Take-Rate)"
          value={
            isReal
              ? `R$ ${selectedAssocNetfitsRev.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
              : `R$ ${((selectedAssociado?.netfitsRevenueBrl ?? 0) * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
          }
          change={isReal ? `${operationalParams.netfitsTakeRatePctFromGmv ?? 6}% comissão` : "+18.2%"}
          positive={true}
          icon={Coins}
          subtext={isReal ? "Comissão bruta real" : "Comissão bruta"}
          periodBadge={shortLabel}
        />
        <KpiCard
          title="Comissão do Associado"
          value={
            isReal
              ? `R$ ${selectedAssocCommission.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
              : `R$ ${((selectedAssociado?.commissionBrl ?? 0) * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
          }
          change={isReal ? `${operationalParams.associadoShareOfNetfitsRevenuePct ?? 10}% repasse` : "+18.2%"}
          positive={true}
          icon={DollarSign}
          subtext={isReal ? "Repasse real acumulado" : "10% da receita Netfits"}
          highlightColor="border-lime-400 ring-1 ring-lime-400/20 bg-lime-400/5"
          periodBadge={shortLabel}
        />
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 w-full">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h4 className="text-base font-bold text-white">Desempenho Comparativo dos Associados</h4>
            <p className="text-xs text-zinc-400">
              {isReal
                ? "Visualização dos associados e influenciadores cadastrados no banco real"
                : "Gerencie a carteira e ative o Selo Roxo de Especialista Credenciado"}
            </p>
          </div>
          <button
              onClick={() => setShowNewAssociadoModal(true)}
              className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition cursor-pointer"
            >
              <UserPlus className="size-3.5" />
              <span>Novo Associado</span>
            </button>
          {!isReal && (
            <span className="text-xs text-lime-400 font-bold bg-lime-400/10 px-3 py-1 rounded-xl border border-lime-400/20">
              Página {associadosPage} de{" "}
              {Math.ceil(associadosList.filter((a) => a.id !== "assoc_all").length / itemsPerPage)}
            </span>
          )}
        </div>

        {isReal ? (
          realAssociadosCount === 0 ? (
            <div className="p-8 text-center bg-zinc-950/60 rounded-2xl border border-dashed border-zinc-800 space-y-3">
              <Users className="size-10 text-zinc-600 mx-auto" />
              <h5 className="text-sm font-bold text-white">Nenhum associado cadastrado no banco real</h5>
              <p className="text-xs text-zinc-400 max-w-md mx-auto">
                Os {realUsersCount} usuários cadastrados no banco de dados são alunos/administradores. Para cadastrar um
                associado real, utilize o botão acima <b>➕ Cadastrar Novo Associado</b>.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto w-full max-w-full">
              <table className="w-full text-left text-xs text-zinc-300 min-w-[720px]">
                <thead className="bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800">
                  <tr>
                    <th className="py-3 px-4">Associado / Influenciador</th>
                    <th className="py-3 px-4">Código Unique</th>
                    <th className="py-3 px-4 text-center">Tipo / Papel</th>
                    <th className="py-3 px-4 text-right">Saldo NFS</th>
                    <th className="py-3 px-4 text-right">GMV Gerado (R$)</th>
                    <th className="py-3 px-4 text-right">Comissão R$</th>
                    <th className="py-3 px-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800 font-medium">
                  {realAssociadosList.map((assoc) => {
                    const assocOrders = realOrders.filter((o: SandboxOrder) => {
                      const buyer = sandboxUsersList.find((u) => u.id === o.userId);
                      return (
                        buyer?.referredBy === assoc.referralCode || o.referralCode === assoc.referralCode
                      );
                    });
                    const assocGmv = assocOrders.reduce(
                      (acc, o: SandboxOrder) => acc + Number(o.amountBrl ?? o.summary?.finalPrice ?? 0),
                      0
                    );
                    const assocNetfitsRev =
                      assocGmv * ((operationalParams.netfitsTakeRatePctFromGmv ?? 6.0) / 100);
                    const assocCommission =
                      assocNetfitsRev *
                      ((operationalParams.associadoShareOfNetfitsRevenuePct ?? 10.0) / 100);
                    return (
                      <tr key={assoc.id} className="hover:bg-zinc-800/40 transition">
                        <td className="py-3 px-4">
                          <p className="font-bold text-white">{assoc.fullName}</p>
                          <p className="text-[10px] text-purple-400">{assoc.email || assoc.identifier}</p>
                        </td>
                        <td className="py-3 px-4 font-mono text-zinc-400">{assoc.referralCode}</td>
                        <td className="py-3 px-4 text-center">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-purple-900/40 text-purple-300 border border-purple-500/40">
                            Associado Oficial
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right font-bold text-lime-400">
                          {(assoc.nfsBalance || 0).toLocaleString("pt-BR")} nfs
                        </td>
                        <td className="py-3 px-4 text-right font-bold text-white font-mono">
                          R$ {assocGmv.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </td>
                        <td className="py-3 px-4 text-right font-bold text-purple-400 font-mono">
                          R$ {assocCommission.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-lime-400/20 text-lime-400 border border-lime-400/30">
                            ATIVO
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )
        ) : (
          <>
            <div className="overflow-x-auto w-full max-w-full">
              <table className="w-full text-left text-xs text-zinc-300 min-w-[720px]">
                <thead className="bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800">
                  <tr>
                    <th className="py-3 px-4">Associado / Influenciador</th>
                    <th className="py-3 px-4">Código Unique</th>
                    <th className="py-3 px-4 text-center">Selo Especialista</th>
                    <th className="py-3 px-4 text-right">Carteira (Atletas)</th>
                    <th className="py-3 px-4 text-right">GMV Gerado (R$)</th>
                    <th className="py-3 px-4 text-right">Receita Netfits</th>
                    <th className="py-3 px-4 text-right">Comissão R$</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-center">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800 font-medium">
                  {associadosList
                    .filter((a) => a.id !== "assoc_all")
                    .slice((associadosPage - 1) * itemsPerPage, associadosPage * itemsPerPage)
                    .map((assoc) => (
                      <tr key={assoc.id} className="hover:bg-zinc-800/40 transition">
                        <td className="py-3 px-4">
                          <div>
                            <p className="font-bold text-white flex items-center gap-1.5">
                              {assoc.name}
                              {assoc.isVerifiedSpecialist && (
                                <span className="text-[9px] font-extrabold bg-purple-600/30 text-purple-300 border border-purple-500/50 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                                  🟣 Especialista
                                </span>
                              )}
                            </p>
                            <p className="text-[10px] text-purple-400">{assoc.handle}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4 font-mono text-zinc-400">{assoc.code}</td>
                        <td className="py-3 px-4 text-center">
                          <button
                            onClick={() => toggleSpecialistBadge(assoc.id)}
                            className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold flex items-center justify-center gap-1 transition mx-auto cursor-pointer ${
                              assoc.isVerifiedSpecialist
                                ? "bg-purple-600/30 text-purple-300 border border-purple-500/50 hover:bg-purple-600/50 shadow-xs"
                                : "bg-zinc-800 text-zinc-400 border border-zinc-700 hover:bg-purple-950 hover:text-purple-300 opacity-60 hover:opacity-100"
                            }`}
                            title="Clique para alterar a concessão do Selo Roxo"
                          >
                            {assoc.isVerifiedSpecialist ? "🟣 Verificado" : "⚪ Ativar Selo"}
                          </button>
                        </td>
                        <td className="py-3 px-4 text-right font-bold text-white">
                          {Math.round(assoc.capturedUsers * Math.min(1, pf * 1.1)).toLocaleString("pt-BR")}
                        </td>
                        <td className="py-3 px-4 text-right font-bold text-white">
                          R$ {(assoc.gmvBrl * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </td>
                        <td className="py-3 px-4 text-right font-bold text-purple-300">
                          R$ {(assoc.netfitsRevenueBrl * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </td>
                        <td className="py-3 px-4 text-right font-bold text-lime-400">
                          R$ {(assoc.commissionBrl * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                              assoc.payoutStatus === "Pago"
                                ? "bg-lime-400/20 text-lime-400 border border-lime-400/30"
                                : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                            }`}
                          >
                            {assoc.payoutStatus}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <button
                            onClick={() => {
                              setSelectedAssociadoId(assoc.id);
                              toast.success(`Filtrada carteira de ${assoc.name}`);
                            }}
                            className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-[11px] font-bold text-zinc-200 border border-zinc-700 cursor-pointer"
                          >
                            Filtrar
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <PaginationControls
              currentPage={associadosPage}
              totalPages={Math.ceil(associadosList.filter((a) => a.id !== "assoc_all").length / itemsPerPage)}
              onPageChange={setAssociadosPage}
              totalItems={associadosList.filter((a) => a.id !== "assoc_all").length}
              itemsPerPage={itemsPerPage}
            />
          </>
        )}
      </div>
{/* MODAL 1: Cadastrar Novo Associado pelo Time Admin */}
      {showNewAssociadoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-purple-500/30 rounded-3xl p-6 max-w-lg w-full shadow-2xl space-y-5 animate-in fade-in zoom-in-95 text-left">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                  <UserPlus className="size-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">Cadastrar Novo Associado (Time Admin)</h3>
                  <p className="text-[11px] text-zinc-400">O associado receberá os links de acesso via E-mail e WhatsApp.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowNewAssociadoModal(false)}
                className="text-zinc-400 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateAssociadoByAdminSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Nome Completo do Associado *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Dr. Fernando Costa ou Embaixador Lucas"
                  value={newAssocName}
                  onChange={(e) => setNewAssocName(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    E-mail Oficial *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="associado@netfits.com.br"
                    value={newAssocEmail}
                    onChange={(e) => setNewAssocEmail(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    WhatsApp / Celular *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99887-6655"
                    value={newAssocPhone}
                    onChange={(e) => setNewAssocPhone(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    @Handle / Instagram (opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="@dr.fernando"
                    value={newAssocHandle}
                    onChange={(e) => setNewAssocHandle(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    Cidade / Estado
                  </label>
                  <input
                    type="text"
                    placeholder="São Paulo - SP"
                    value={newAssocCity}
                    onChange={(e) => setNewAssocCity(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Especialidade / Categoria de Expansão
                </label>
                <select
                  value={newAssocSpecialty}
                  onChange={(e) => setNewAssocSpecialty(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="Médico / Nutrologia Esportiva">Médico / Nutrologia Esportiva</option>
                  <option value="Embaixador Esportivo / Influenciador VIP">Embaixador Esportivo / Influenciador VIP</option>
                  <option value="Sócio Regional de Expansão Netfits">Sócio Regional de Expansão Netfits</option>
                  <option value="Líder de Rede Esportiva">Líder de Rede Esportiva</option>
                </select>
              </div>

              <div className="pt-3 border-t border-zinc-800 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowNewAssociadoModal(false)}
                  className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs shadow-lg shadow-purple-600/30 transition flex items-center gap-1.5"
                >
                  <Send className="size-3.5" />
                  Gerar Links & Finalizar Cadastro
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: Links de Acesso Gerados & Disparo de Convite */}
      {createdInviteLinks && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-lime-500/40 rounded-3xl p-6 max-w-lg w-full shadow-2xl space-y-5 animate-in fade-in zoom-in-95 text-left">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-lime-500/20 text-lime-400">
                  <CheckCircle2 className="size-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400">
                    Código Gerado: {createdInviteLinks.associadoCode}
                  </span>
                  <h3 className="text-base font-extrabold text-white">
                    Links de Acesso Criados para {createdInviteLinks.associadoName}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setCreatedInviteLinks(null)}
                className="text-zinc-400 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 bg-zinc-950/80 border border-zinc-800 rounded-2xl p-4 text-xs">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-400 flex items-center gap-1">
                  <Share2 className="size-3" />
                  Link 1 — Acesso ao App Netfits (Atleta / Indicação)
                </span>
                <div className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800">
                  <input
                    type="text"
                    readOnly
                    value={createdInviteLinks.appLink}
                    className="flex-1 bg-transparent text-white font-mono text-[11px] outline-none"
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(createdInviteLinks.appLink);
                      toast.success("Link do App Netfits copiado!");
                    }}
                    className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-lime-400 font-bold text-[10px]"
                  >
                    Copiar
                  </button>
                </div>
              </div>

              <div className="space-y-1 pt-2 border-t border-zinc-900">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-lime-400 flex items-center gap-1">
                  <Award className="size-3" />
                  Link 2 — Acesso Exclusivo ao Portal do Associado
                </span>
                <div className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800">
                  <input
                    type="text"
                    readOnly
                    value={createdInviteLinks.portalLink}
                    className="flex-1 bg-transparent text-white font-mono text-[11px] outline-none"
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(createdInviteLinks.portalLink);
                      toast.success("Link do Portal do Associado copiado!");
                    }}
                    className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-lime-400 font-bold text-[10px]"
                  >
                    Copiar
                  </button>
                </div>
              </div>
            </div>

            {/* Ações Rápidas de Envio */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-zinc-300">Disparo de Convites em 1-Clique:</span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const text = encodeURIComponent(
                      `Olá ${createdInviteLinks.associadoName}! Você foi cadastrado como Associado Netfits.\n\n📱 Baixe/Acesse o App: ${createdInviteLinks.appLink}\n👑 Acesse seu Portal do Associado: ${createdInviteLinks.portalLink}`
                    );
                    window.open(`https://wa.me/?text=${text}`, "_blank");
                    toast.success("Redirecionando para envio no WhatsApp!");
                  }}
                  className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Phone className="size-3.5" />
                  WhatsApp
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const subject = encodeURIComponent("Bem-vindo ao Programa de Associados Netfits!");
                    const body = encodeURIComponent(
                      `Olá ${createdInviteLinks.associadoName},\n\nSeu cadastro no Programa de Associados Netfits foi concluído pelo nosso Time Admin!\n\nLink do App Netfits: ${createdInviteLinks.appLink}\nPortal do Associado: ${createdInviteLinks.portalLink}\n\nAtenciosamente,\nTime Admin Netfits`
                    );
                    window.open(`mailto:${createdInviteLinks.email}?subject=${subject}&body=${body}`, "_blank");
                    toast.success("Abrindo cliente de e-mail!");
                  }}
                  className="py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Mail className="size-3.5" />
                  E-mail Oficial
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-zinc-800 text-center">
              <button
                onClick={() => setCreatedInviteLinks(null)}
                className="text-xs font-bold text-zinc-400 hover:text-white"
              >
                Fechar janela
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
