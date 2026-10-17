import { useState } from "react";
import { Handshake, ShoppingBag, DollarSign, Star } from "lucide-react";
import { toast } from "sonner";
import { KpiCard, PaginationControls } from "./admin-ui";
import { useOperationalParams } from "@/lib/operational-params-store";
import { SandboxPartner, SandboxOrder } from "@/lib/shared-sandbox-store";

export interface PartnerAdminItem {
  id: string;
  name: string;
  category: string;
  iconEmoji: string;
  status: "Ativo" | "Em Análise" | "Pendente";
  contractTier: "Master Partner" | "Seller Credenciado" | "Clínica Especialista" | "Assessoria Oficial";
  gmvBrl: number;
  netfitsRevenueBrl: number;
  activeCampaigns: number;
  npsScore: number;
  conversionRatePct: number;
  exclusiveCoupon: string;
}

export const PARTNERS_DATABASE: PartnerAdminItem[] = [
  {
    id: "partner_all",
    name: "Todos os Parceiros & Assessorias (Consolidado)",
    category: "Visão Consolidada da Rede (28 Marcas)",
    iconEmoji: "🌐",
    status: "Ativo",
    contractTier: "Master Partner",
    gmvBrl: 1849000.0,
    netfitsRevenueBrl: 277350.0,
    activeCampaigns: 42,
    npsScore: 94,
    conversionRatePct: 4.04,
    exclusiveCoupon: "NETFITS_NETWORK_30",
  },
  {
    id: "partner_centauro",
    name: "Centauro Esportes",
    category: "Varejo & Marketplace Esportivo",
    iconEmoji: "👟",
    status: "Ativo",
    contractTier: "Master Partner",
    gmvBrl: 540000.0,
    netfitsRevenueBrl: 81000.0,
    activeCampaigns: 12,
    npsScore: 96,
    conversionRatePct: 4.80,
    exclusiveCoupon: "CENTAURO_NFS15",
  },
  {
    id: "partner_decathlon",
    name: "Decathlon Brasil",
    category: "Equipamentos, Ciclismo & Outdoor",
    iconEmoji: "🚴",
    status: "Ativo",
    contractTier: "Master Partner",
    gmvBrl: 420000.0,
    netfitsRevenueBrl: 63000.0,
    activeCampaigns: 9,
    npsScore: 95,
    conversionRatePct: 4.20,
    exclusiveCoupon: "DECATHLON_NETFITS10",
  },
  {
    id: "partner_nike",
    name: "Nike Store Oficial",
    category: "Calçados & Vestuário de Alta Performance",
    iconEmoji: "🏃",
    status: "Ativo",
    contractTier: "Master Partner",
    gmvBrl: 380000.0,
    netfitsRevenueBrl: 57000.0,
    activeCampaigns: 6,
    npsScore: 98,
    conversionRatePct: 5.10,
    exclusiveCoupon: "NIKE_PROMO_NFS20",
  },
  {
    id: "partner_garmin",
    name: "Garmin Brasil",
    category: "Wearables, GPS & Telemetria",
    iconEmoji: "⌚",
    status: "Ativo",
    contractTier: "Master Partner",
    gmvBrl: 210000.0,
    netfitsRevenueBrl: 31500.0,
    activeCampaigns: 4,
    npsScore: 97,
    conversionRatePct: 3.90,
    exclusiveCoupon: "GARMIN_CLUB_NFS",
  },
  {
    id: "partner_smartfit",
    name: "Smart Fit Academias",
    category: "Rede de Academias & Fitness",
    iconEmoji: "🏋️",
    status: "Ativo",
    contractTier: "Seller Credenciado",
    gmvBrl: 145000.0,
    netfitsRevenueBrl: 21750.0,
    activeCampaigns: 5,
    npsScore: 92,
    conversionRatePct: 3.60,
    exclusiveCoupon: "SMARTFIT_NETFITS_VIP",
  },
  {
    id: "partner_liquidz",
    name: "Liquidz Hydration",
    category: "Suplementação & Hidratação",
    iconEmoji: "🥤",
    status: "Ativo",
    contractTier: "Seller Credenciado",
    gmvBrl: 84000.0,
    netfitsRevenueBrl: 12600.0,
    activeCampaigns: 3,
    npsScore: 94,
    conversionRatePct: 4.50,
    exclusiveCoupon: "LIQUIDZ_HYDRATE15",
  },
  {
    id: "partner_fibios",
    name: "Clínica Fibios",
    category: "Medicina Esportiva & Nutrologia",
    iconEmoji: "🩺",
    status: "Ativo",
    contractTier: "Clínica Especialista",
    gmvBrl: 42000.0,
    netfitsRevenueBrl: 6300.0,
    activeCampaigns: 2,
    npsScore: 99,
    conversionRatePct: 6.20,
    exclusiveCoupon: "FIBIOS_SAUDE_PURPLE",
  },
  {
    id: "partner_spotstudio",
    name: "Spot Studio Recovery",
    category: "Recovery & Crioterapia",
    iconEmoji: "🧊",
    status: "Ativo",
    contractTier: "Clínica Especialista",
    gmvBrl: 28000.0,
    netfitsRevenueBrl: 4200.0,
    activeCampaigns: 1,
    npsScore: 96,
    conversionRatePct: 5.50,
    exclusiveCoupon: "RECOVERY_SPOT_NFS",
  },
  {
    id: "partner_bioritmo",
    name: "Bio Ritmo Assessorias",
    category: "Assessoria Esportiva & Maratona",
    iconEmoji: "🚩",
    status: "Ativo",
    contractTier: "Assessoria Oficial",
    gmvBrl: 56000.0,
    netfitsRevenueBrl: 8400.0,
    activeCampaigns: 3,
    npsScore: 93,
    conversionRatePct: 4.10,
    exclusiveCoupon: "BIORITMO_RUN50",
  },
  {
    id: "partner_mpr",
    name: "MPR Run Assessorias",
    category: "Treinamento Personalizado de Corrida",
    iconEmoji: "🏃‍♂️",
    status: "Ativo",
    contractTier: "Assessoria Oficial",
    gmvBrl: 49000.0,
    netfitsRevenueBrl: 7350.0,
    activeCampaigns: 2,
    npsScore: 95,
    conversionRatePct: 4.40,
    exclusiveCoupon: "MPRRUN_NETFITS2026",
  },
];

interface AdminPartnersTabProps {
  isReal: boolean;
  realPartners: SandboxPartner[];
  realOrders: SandboxOrder[];
  realUsersCount: number;
  shortLabel: string;
  pf: number;
  itemsPerPage?: number;
}

export function AdminPartnersTab({
  isReal,
  realPartners,
  realOrders,
  realUsersCount,
  shortLabel,
  pf,
  itemsPerPage = 10,
}: AdminPartnersTabProps) {
  const operationalParams = useOperationalParams();
  const [selectedPartnerId, setSelectedPartnerId] = useState<string>("partner_all");
  const [partnersPage, setPartnersPage] = useState<number>(1);

  const selectedPartner =
    PARTNERS_DATABASE.find((p) => p.id === selectedPartnerId) || PARTNERS_DATABASE[0];

  const selectedPartnerObj = realPartners.find((p) => p.id === selectedPartnerId);
  const partnerFilterName = selectedPartnerObj ? (selectedPartnerObj.tradeName || selectedPartnerObj.companyName || "").toLowerCase() : "";
  const selectedPartnerOrders = isReal
    ? realOrders.filter((o: SandboxOrder) => {
        if (selectedPartnerId === "none" || !selectedPartnerId) return false;
        if (!partnerFilterName) return true; // all
        return (o.sellerName || "").toLowerCase().includes(partnerFilterName);
      })
    : [];
  const selectedPartnerGmv = selectedPartnerOrders.reduce((acc, o: SandboxOrder) => acc + Number(o.amountBrl ?? o.summary?.finalPrice ?? 0), 0);
  const selectedPartnerNetfitsRev = selectedPartnerGmv * ((operationalParams.netfitsTakeRatePctFromGmv ?? 6.0) / 100);

  return (
    <div className="space-y-6">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <span className="text-[9px] font-extrabold uppercase tracking-wider text-lime-400">
            Rede Credenciada &amp; Ecossistema de Saúde (Sessão 6 &amp; 10)
          </span>
          <h3 className="text-sm font-bold text-white">
            Parceiros Comerciais, Sellers do Shopping &amp; Assessorias Esportivas
          </h3>
        </div>

        {/* Seletor de Parceiro (Consolidado vs Individual) */}
        <div className="flex items-center gap-2 bg-zinc-950 p-2 rounded-2xl border border-zinc-800 self-start md:self-auto">
          <Handshake className="size-4 text-lime-400 ml-2" />
          <select
            value={selectedPartnerId}
            onChange={(e) => {
              setSelectedPartnerId(e.target.value);
              if (!isReal) {
                const partner = PARTNERS_DATABASE.find((p) => p.id === e.target.value);
                toast.info(`Filtro alterado para: ${partner?.name}`);
              }
            }}
            className="bg-transparent text-xs font-bold text-white focus:outline-none pr-4 cursor-pointer"
          >
            {isReal ? (
              realPartners.length === 0 ? (
                <option value="none" className="bg-zinc-900 text-white font-medium py-1">
                  Nenhum parceiro no Banco Real
                </option>
              ) : (
                realPartners.map((p) => (
                  <option key={p.id} value={p.id} className="bg-zinc-900 text-white font-medium py-1">
                    {p.tradeName || p.companyName}
                  </option>
                ))
              )
            ) : (
              PARTNERS_DATABASE.map((p) => (
                <option key={p.id} value={p.id} className="bg-zinc-900 text-white font-medium py-1">
                  {p.iconEmoji} {p.name} [{p.contractTier}]
                </option>
              ))
            )}
          </select>
        </div>
      </div>

      {/* KPIs do Filtro de Parceiro */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <KpiCard
          title="Filtro Selecionado"
          value={isReal ? (realPartners.length > 0 ? "Parceiros Reais" : "Banco Real") : (selectedPartner.name.split(" ")[0] + (selectedPartner.name.split(" ")[1] ? " " + selectedPartner.name.split(" ")[1] : ""))}
          change={isReal ? `${realPartners.length} parceiros` : selectedPartner.contractTier}
          positive={true}
          icon={Handshake}
          subtext={isReal ? "Rede credenciada real" : selectedPartner.category}
          periodBadge={shortLabel}
        />
        <KpiCard
          title="GMV Transacionado"
          value={isReal ? `R$ ${selectedPartnerGmv.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}` : `R$ ${((selectedPartner?.gmvBrl ?? 0) * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
          change={isReal ? `${selectedPartnerOrders.length} pedidos reais` : "+22.4%"}
          positive={true}
          icon={ShoppingBag}
          subtext={isReal ? (selectedPartnerOrders.length > 0 ? "Vendas computadas no banco real" : "0 vendas via parceiros") : "Vendas via plataforma"}
          periodBadge={shortLabel}
        />
        <KpiCard
          title="Comissão Netfits (15%)"
          value={isReal ? `R$ ${selectedPartnerNetfitsRev.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}` : `R$ ${((selectedPartner?.netfitsRevenueBrl ?? 0) * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
          change={isReal ? `${operationalParams.netfitsTakeRatePctFromGmv ?? 6.0}% take-rate` : "+24.5%"}
          positive={true}
          icon={DollarSign}
          subtext={isReal ? "Receita bruta apurada" : "Receita direta gerada"}
          periodBadge={shortLabel}
        />
        <KpiCard
          title="NPS &amp; Conversão"
          value={isReal ? "N/A" : `${selectedPartner.npsScore} / 100`}
          change={isReal ? (selectedPartnerOrders.length > 0 ? `${((selectedPartnerOrders.length / Math.max(1, realUsersCount)) * 100).toFixed(1)}% conv.` : "Sem transações") : `${selectedPartner.conversionRatePct}% conv.`}
          positive={true}
          icon={Star}
          subtext={isReal ? "Sem avaliações de NPS" : `Cupom: ${selectedPartner.exclusiveCoupon}`}
          periodBadge={shortLabel}
        />
      </div>

      {/* Tabela do Ecossistema de Parceiros & Assessorias */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 w-full">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3 flex-wrap gap-2">
          <div>
            <h4 className="text-base font-bold text-white">Tabela de Parceiros &amp; Assessorias Credenciadas</h4>
            <p className="text-xs text-zinc-400">
              {isReal
                ? "Visualização dos parceiros e redes credenciadas no banco real"
                : selectedPartnerId === "partner_all"
                ? "Exibindo visão consolidada de todas as 28 marcas credenciadas no ecossistema"
                : `Exibindo desempenho individualizado de ${selectedPartner.name}`}
            </p>
          </div>

          {!isReal && selectedPartnerId !== "partner_all" && (
            <button
              onClick={() => {
                setSelectedPartnerId("partner_all");
                toast.info("Filtro resetado para Visão Consolidada!");
              }}
              className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-lime-400 font-bold text-xs border border-zinc-700 transition flex items-center gap-1.5 cursor-pointer"
            >
              <span>🌐 Voltar para Consolidado</span>
            </button>
          )}
        </div>

        {isReal ? (
          realPartners.length === 0 ? (
            <div className="p-8 text-center bg-zinc-950/60 rounded-2xl border border-dashed border-zinc-800 space-y-3">
              <Handshake className="size-10 text-zinc-600 mx-auto" />
              <h5 className="text-sm font-bold text-white">Nenhum parceiro ou assessoria cadastrada no banco real</h5>
              <p className="text-xs text-zinc-400 max-w-md mx-auto">
                As 28 marcas credenciadas (Smart Fit, Bio Ritmo, Dux, Spot, etc.) pertencem ao ecossistema simulado da Etapa 1. No modo Banco Real, apenas parceiros efetivamente cadastrados e homologados serão listados aqui.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto w-full max-w-full">
              <table className="w-full text-left text-xs text-zinc-300 min-w-[720px]">
                <thead className="bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800">
                  <tr>
                    <th className="py-3 px-4">Parceiro / Assessoria</th>
                    <th className="py-3 px-4">Categoria / Segmento</th>
                    <th className="py-3 px-4">CNPJ</th>
                    <th className="py-3 px-4">Cidade / UF</th>
                    <th className="py-3 px-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/80 font-medium">
                  {realPartners.map((partner) => (
                    <tr key={partner.id} className="hover:bg-zinc-800/40 transition">
                      <td className="py-3 px-4 font-bold text-white">
                        {partner.tradeName || partner.companyName}
                      </td>
                      <td className="py-3 px-4 text-zinc-400 text-xs">{partner.category}</td>
                      <td className="py-3 px-4 font-mono text-zinc-400 text-xs">{partner.cnpj}</td>
                      <td className="py-3 px-4 text-zinc-400 text-xs">{partner.city}/{partner.state}</td>
                      <td className="py-3 px-4 text-center">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {partner.status}
                        </span>
                      </td>
                    </tr>
                  ))}
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
                    <th className="py-3 px-4">Parceiro / Assessoria</th>
                    <th className="py-3 px-4">Categoria / Segmento</th>
                    <th className="py-3 px-4 text-right">GMV Vendas</th>
                    <th className="py-3 px-4 text-right">Comissão Netfits</th>
                    <th className="py-3 px-4 text-center">Cupom Exclusivo</th>
                    <th className="py-3 px-4 text-center">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/80 font-medium">
                  {PARTNERS_DATABASE.filter((p) => p.id !== "partner_all")
                    .filter((p) => selectedPartnerId === "partner_all" || p.id === selectedPartnerId)
                    .slice((partnersPage - 1) * itemsPerPage, partnersPage * itemsPerPage)
                    .map((partner) => {
                      const isSelected = selectedPartnerId === partner.id;
                      return (
                        <tr
                          key={partner.id}
                          className={`transition ${isSelected ? "bg-purple-950/20 border-l-2 border-purple-500" : "hover:bg-zinc-800/40"}`}
                        >
                          <td className="py-3 px-4 font-bold text-white flex items-center gap-2">
                            <span>{partner.iconEmoji}</span>
                            <span>{partner.name}</span>
                          </td>
                          <td className="py-3 px-4 text-zinc-400">{partner.category}</td>
                          <td className="py-3 px-4 text-right font-mono text-zinc-200">
                            R$ {((partner.gmvBrl || 0) * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                          </td>
                          <td className="py-3 px-4 text-right font-mono text-lime-400 font-bold">
                            R$ {((partner.netfitsRevenueBrl || 0) * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                          </td>
                          <td className="py-3 px-4 text-center">
                            <code className="text-[10px] bg-zinc-950 px-2 py-1 rounded text-lime-400 border border-zinc-800 font-mono font-bold">
                              {partner.exclusiveCoupon}
                            </code>
                          </td>
                          <td className="py-3 px-4 text-center">
                            <button
                              onClick={() => {
                                setSelectedPartnerId(partner.id);
                                toast.success(`Filtro individual ativado para: ${partner.name}`);
                              }}
                              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                                isSelected
                                  ? "bg-lime-400 text-zinc-950 shadow"
                                  : "bg-zinc-800 hover:bg-purple-600 text-white"
                              }`}
                            >
                              {isSelected ? "✓ Selecionado" : "Filtrar"}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>

            <PaginationControls
              currentPage={partnersPage}
              totalPages={Math.ceil(
                PARTNERS_DATABASE.filter((p) => p.id !== "partner_all").filter(
                  (p) => selectedPartnerId === "partner_all" || p.id === selectedPartnerId
                ).length / itemsPerPage
              )}
              onPageChange={setPartnersPage}
              totalItems={
                PARTNERS_DATABASE.filter((p) => p.id !== "partner_all").filter(
                  (p) => selectedPartnerId === "partner_all" || p.id === selectedPartnerId
                ).length
              }
              itemsPerPage={itemsPerPage}
            />
          </>
        )}
      </div>
    </div>
  );
}
