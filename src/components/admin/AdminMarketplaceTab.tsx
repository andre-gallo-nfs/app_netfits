import { useState, useMemo } from "react";
import {
  ShoppingBag, BarChart3, Store, Package, Truck, Server, RefreshCw,
  Sparkles, Filter, Search, ChevronLeft, ChevronRight, CheckCircle2,
  Clock, Flame, Coins, Check, AlertCircle, Copy, ExternalLink, Code2,
  DollarSign, Layers, Play, Key, Zap, Tag, Gift, ShoppingCart, Receipt, Boxes
} from "lucide-react";
import { toast } from "sonner";
import { KpiCard, PaginationControls } from "./admin-ui";
import { AdminMkplaceIntegrationTab } from "./AdminMkplaceIntegrationTab";
import { useOperationalParams } from "@/lib/operational-params-store";
import { SandboxOrder, SandboxOrderItem } from "@/lib/shared-sandbox-store";
import { normalizeOrderPaymentMethod } from "./admin-types";

type SellerMarketplaceItem = {
  id: string;
  name: string;
  category: string;
  totalOrders: number;
  gmvBrl: number;
  takeRatePct: number;
  netfitsRevenueBrl: number;
  averageTicketBrl: number;
  nfsRedemptionRatePct: number;
  nfsBurnedTotal: number;
  fulfillmentSlaDays: number;
  fulfillmentOnTimePct: number;
  npsScore: number;
  topProduct: string;
};

const SELLERS_MARKETPLACE_DATABASE: SellerMarketplaceItem[] = [
  {
    id: "seller_all",
    name: "Visão Geral (Consolidado Marketplace Rock Encantech)",
    category: "Todos os Parceiros Credenciados",
    totalOrders: 7440,
    gmvBrl: 1849000.0,
    takeRatePct: 6.0,
    netfitsRevenueBrl: 110940.0,
    averageTicketBrl: 248.5,
    nfsRedemptionRatePct: 42.5,
    nfsBurnedTotal: 3680000,
    fulfillmentSlaDays: 2.8,
    fulfillmentOnTimePct: 98.4,
    npsScore: 92,
    topProduct: "Boné Aba Curva Mizuno Run Sky e Acessórios UV50+",
  },
  {
    id: "seller_mizuno",
    name: "Mizuno Brasil (Rock Encantech)",
    category: "Calçados, Bonés e Performance Run",
    totalOrders: 2740,
    gmvBrl: 680000.0,
    takeRatePct: 6.0,
    netfitsRevenueBrl: 40800.0,
    averageTicketBrl: 248.17,
    nfsRedemptionRatePct: 44.2,
    nfsBurnedTotal: 1420000,
    fulfillmentSlaDays: 2.5,
    fulfillmentOnTimePct: 99.1,
    npsScore: 94,
    topProduct: "Boné Aba Curva Mizuno Run Sky",
  },
  {
    id: "seller_rock_store",
    name: "Loja Netfits (Rock Encantech)",
    category: "Performance, Vestuário e Artigos Esportivos",
    totalOrders: 2180,
    gmvBrl: 540000.0,
    takeRatePct: 6.0,
    netfitsRevenueBrl: 32400.0,
    averageTicketBrl: 247.7,
    nfsRedemptionRatePct: 41.8,
    nfsBurnedTotal: 1080000,
    fulfillmentSlaDays: 2.9,
    fulfillmentOnTimePct: 97.8,
    npsScore: 90,
    topProduct: "Kit Camisetas Dry-Tech e Meias de Compressão",
  },
  {
    id: "seller_fibios_nutrition",
    name: "Fibios Longevidade e Nutrição",
    category: "Suplementação Esportiva e Saúde Celular",
    totalOrders: 1120,
    gmvBrl: 280000.0,
    takeRatePct: 6.0,
    netfitsRevenueBrl: 16800.0,
    averageTicketBrl: 250.0,
    nfsRedemptionRatePct: 39.5,
    nfsBurnedTotal: 540000,
    fulfillmentSlaDays: 3.1,
    fulfillmentOnTimePct: 97.5,
    npsScore: 89,
    topProduct: "Creatina Creapure e Whey Isolado Fibios",
  },
  {
    id: "seller_accessories",
    name: "Netfits Gear e Equipamentos",
    category: "Acessórios, Hidratação e Outdoor",
    totalOrders: 820,
    gmvBrl: 245000.0,
    takeRatePct: 6.0,
    netfitsRevenueBrl: 14700.0,
    averageTicketBrl: 298.78,
    nfsRedemptionRatePct: 46.0,
    nfsBurnedTotal: 480000,
    fulfillmentSlaDays: 2.4,
    fulfillmentOnTimePct: 99.4,
    npsScore: 96,
    topProduct: "Cinto de Hidratação e Viseiras de Corrida",
  },
  {
    id: "seller_telemetry",
    name: "Wearables e Telemetria Integrada",
    category: "Monitores Cardíacos, GPS e Sensores",
    totalOrders: 580,
    gmvBrl: 104000.0,
    takeRatePct: 6.0,
    netfitsRevenueBrl: 6240.0,
    averageTicketBrl: 179.31,
    nfsRedemptionRatePct: 38.0,
    nfsBurnedTotal: 160000,
    fulfillmentSlaDays: 2.2,
    fulfillmentOnTimePct: 99.8,
    npsScore: 97,
    topProduct: "Sensores de Cadência e Cintas Cardíacas",
  },
];
const CATEGORY_DISTRIBUTION = [
  { name: "Corrida de Rua", value: 45, color: "#84cc16" },
  { name: "Ciclismo", value: 25, color: "#7c3aed" },
  { name: "Musculação & Cross", value: 20, color: "#06b6d4" },
  { name: "Beach Tennis & Outros", value: 10, color: "#f59e0b" },
];



interface AdminMarketplaceTabProps {
  isReal: boolean;
  pf: number;
  shortLabel: string;
  realOrders: SandboxOrder[];
  itemsPerPage?: number;
}

export function AdminMarketplaceTab({
  isReal,
  pf,
  shortLabel,
  realOrders,
  itemsPerPage = 10,
}: AdminMarketplaceTabProps) {
  const operationalParams = useOperationalParams();

  // Filtro de Sellers do Marketplace
  const [selectedSellerId, setSelectedSellerId] = useState<string>("seller_all");
  const selectedSeller =
    SELLERS_MARKETPLACE_DATABASE.find((s) => s.id === selectedSellerId) ||
    SELLERS_MARKETPLACE_DATABASE[0];
  const [ordersPage, setOrdersPage] = useState<number>(1);
  const [marketPage, setMarketPage] = useState<number>(1);
  const [marketSubTab, setMarketSubTab] = useState<"cockpit" | "sellers" | "skus" | "orders" | "rock_tech">("cockpit");
  const [orderStatusFilter, setOrderStatusFilter] = useState<string>("all");
  const [orderSearchTerm, setOrderSearchTerm] = useState<string>("");
  const [skuCategoryFilter, setSkuCategoryFilter] = useState<string>("all");

  const realMarketMetrics = useMemo(() => {
    const ordersList = realOrders || [];
    const count = ordersList.length;
    const totalGmv = ordersList.reduce((acc, o: SandboxOrder) => {
      const v = Number(o.amountBrl ?? o.summary?.finalPrice ?? o.summary?.total ?? 0);
      return acc + (isNaN(v) ? 0 : v);
    }, 0);
    const totalShipping = ordersList.reduce((acc, o: SandboxOrder) => {
      const sh = Number(o.summary?.totalShippingCost ?? 0);
      return acc + (isNaN(sh) ? 0 : sh);
    }, 0);
    const totalPointsBurned = ordersList.reduce((acc, o: SandboxOrder) => {
      const pts = Number(o.pointsPaid ?? o.summary?.points?.amount ?? 0);
      return acc + (isNaN(pts) ? 0 : pts);
    }, 0);
    const totalCashbackEarned = ordersList.reduce((acc, o: SandboxOrder) => {
      const cb = Number(o.cashbackEarned ?? o.netfitsProcessing?.pointsEarned ?? (o.amountBrl ? Math.round(o.amountBrl * 4) : 0));
      return acc + (isNaN(cb) ? 0 : cb);
    }, 0);
    const takeRatePct = operationalParams.netfitsTakeRatePctFromGmv ?? 6.0;
    const totalTakeRateBrl = totalGmv * (takeRatePct / 100);
    const avgTicket = count > 0 ? totalGmv / count : 0;
    const deliveredCount = ordersList.filter((o: SandboxOrder) => o.status === "DELIVERED" || o.status === "entregue").length;
    const sentCount = ordersList.filter((o: SandboxOrder) => o.status === "SENT" || o.status === "enviado").length;
    const partialCount = ordersList.filter((o: SandboxOrder) => o.status === "PARTIALLY-DELIVERED").length;
    const avgSlaDays = ordersList.reduce((acc, o: SandboxOrder) => acc + (o.slaDays || 2), 0) / (count || 1);

    // Agrupamento por Seller
    const sellerMap = new Map<string, {
      id: string;
      name: string;
      category: string;
      ordersCount: number;
      gmv: number;
      takeRateBrl: number;
      avgTicket: number;
      onTimePct: number;
      avgSlaDays: number;
      delivered: number;
      sent: number;
      partial: number;
    }>();

    // Agrupamento por SKU
    const skuMap = new Map<string, {
      skuId: string;
      name: string;
      brand: string;
      category: string;
      sellerName: string;
      unitsSold: number;
      unitPrice: number;
      totalGmv: number;
      pointsBurned: number;
      cashbackEarned: number;
    }>();

    // Agrupamento por Categoria de Produto Oficial
    const categoryMap = new Map<string, {
      name: string;
      gmv: number;
      ordersCount: number;
      sellers: Set<string>;
    }>();

    // Cálculo dinâmico do Mix Real de Meios de Pagamento
    let creditCardOrdersCount = 0;
    let creditCardGmv = 0;
    let pixOrdersCount = 0;
    let pixGmv = 0;
    let unspecPaymentCount = 0;
    let unspecPaymentGmv = 0;

    ordersList.forEach((ord: SandboxOrder) => {
      const pmType = normalizeOrderPaymentMethod(ord.paymentMethod || ord.metadata?.paymentMethod || ord.rawPayload?.metadata?.paymentMethod);
      const val = Number(ord.amountBrl ?? ord.summary?.finalPrice ?? 0);
      if (pmType === "CREDIT_CARD") {
        creditCardOrdersCount += 1;
        creditCardGmv += val;
      } else if (pmType === "PIX") {
        pixOrdersCount += 1;
        pixGmv += val;
      } else {
        unspecPaymentCount += 1;
        unspecPaymentGmv += val;
      }

      const items = ord.items && ord.items.length > 0 ? ord.items : [
        {
          name: ord.productName || "Item não detalhado pela Rock (1 item)",
          price: Number(ord.amountBrl ?? ord.summary?.finalPrice ?? 0),
          quantity: 1,
          sellerName: ord.sellerName || "Aguardando Rock",
          brand: ord.brand || "-",
          category: ord.category || "Aguardando Rock",
        }
      ];

      items.forEach((item: SandboxOrderItem) => {
        const rawSeller = item.sellerName || ord.sellerName || "";
        let cleanSeller = rawSeller;
        if (/netshoes/i.test(rawSeller)) cleanSeller = "Netshoes";
        else if (/webcontinental/i.test(rawSeller)) cleanSeller = "Webcontinental";
        else if (/centauro/i.test(rawSeller)) cleanSeller = "Centauro";
        else if (/fila/i.test(rawSeller)) cleanSeller = "Fila";
        else if (/new balance|newbalance/i.test(rawSeller)) cleanSeller = "New Balance";
        else if (!cleanSeller) cleanSeller = "Aguardando Rock";

        const itemVal = Number(item.finalPrice ?? item.price ?? (Number(ord.amountBrl ?? ord.summary?.finalPrice ?? 0) / items.length));
        const itemCat = item.category || ord.category || (cleanSeller === "Aguardando Rock" ? "Aguardando Rock" : "Artigos Esportivos");

        // Seller aggregation por loja oficial parceira
        if (!sellerMap.has(cleanSeller)) {
          sellerMap.set(cleanSeller, {
            id: `seller_${cleanSeller.toLowerCase().replace(/\s+/g, '_')}`,
            name: cleanSeller,
            category: itemCat,
            ordersCount: 0,
            gmv: 0,
            takeRateBrl: 0,
            avgTicket: 0,
            onTimePct: 100,
            avgSlaDays: ord.slaDays || 2,
            delivered: 0,
            sent: 0,
            partial: 0,
          });
        }
        const sData = sellerMap.get(cleanSeller)!;
        sData.ordersCount += 1;
        sData.gmv += itemVal;
        sData.takeRateBrl += itemVal * (takeRatePct / 100);
        sData.avgTicket = sData.gmv / sData.ordersCount;
        if (ord.status === "DELIVERED" || ord.status === "entregue") sData.delivered += 1;
        else if (ord.status === "SENT" || ord.status === "enviado") sData.sent += 1;
        else if (ord.status === "PARTIALLY-DELIVERED") sData.partial += 1;

        // Categoria aggregation oficial
        if (!categoryMap.has(itemCat)) {
          categoryMap.set(itemCat, {
            name: itemCat,
            gmv: 0,
            ordersCount: 0,
            sellers: new Set<string>(),
          });
        }
        const cData = categoryMap.get(itemCat)!;
        cData.gmv += itemVal;
        cData.ordersCount += 1;
        if (cleanSeller && cleanSeller !== "Aguardando Rock") {
          cData.sellers.add(cleanSeller);
        }

        // SKU / Produto aggregation com nome comercial descritivo em vez de códigos
        const prodName = item.name || item.productName || ord.productName || "Item não detalhado pela Rock (1 item)";
        const skuKey = prodName;
        if (!skuMap.has(skuKey)) {
          skuMap.set(skuKey, {
            skuId: item.skuId || `SKU-${skuKey.slice(0, 8)}`,
            name: prodName,
            brand: item.brand || ord.brand || (cleanSeller === "Aguardando Rock" ? "-" : cleanSeller),
            category: itemCat,
            sellerName: cleanSeller,
            unitsSold: 0,
            unitPrice: Number(item.price || item.unitPrice || itemVal),
            totalGmv: 0,
            pointsBurned: 0,
            cashbackEarned: 0,
          });
        }
        const skuData = skuMap.get(skuKey)!;
        skuData.unitsSold += Number(item.quantity || 1);
        skuData.totalGmv += itemVal;
        skuData.pointsBurned += Number(ord.pointsPaid ?? 0);
        skuData.cashbackEarned += Math.round(itemVal * 4);
      });
    });

    const knownPaymentTotal = creditCardGmv + pixGmv;
    const creditCardPct = knownPaymentTotal > 0 ? Number(((creditCardGmv / knownPaymentTotal) * 100).toFixed(1)) : 0;
    const pixPct = knownPaymentTotal > 0 ? Number(((pixGmv / knownPaymentTotal) * 100).toFixed(1)) : 0;
    const dominantPaymentLabel = creditCardOrdersCount >= pixOrdersCount ? "Cartão de Crédito Dominante" : "PIX Dominante";

    return {
      count,
      totalGmv,
      totalShipping,
      totalPointsBurned,
      totalCashbackEarned,
      takeRatePct,
      totalTakeRateBrl,
      avgTicket,
      deliveredCount,
      sentCount,
      partialCount,
      avgSlaDays: Number(avgSlaDays.toFixed(1)),
      onTimePct: 100.0,
      sellers: Array.from(sellerMap.values()),
      skus: Array.from(skuMap.values()).sort((a, b) => b.totalGmv - a.totalGmv),
      categories: Array.from(categoryMap.values()).map((c) => ({
        name: c.name,
        gmv: c.gmv,
        ordersCount: c.ordersCount,
        sellersList: Array.from(c.sellers).join(" / ") || "Lojistas Oficiais",
      })).sort((a, b) => b.gmv - a.gmv),
      creditCardOrdersCount,
      creditCardGmv,
      pixOrdersCount,
      pixGmv,
      unspecPaymentCount,
      unspecPaymentGmv,
      creditCardPct,
      pixPct,
      dominantPaymentLabel,
    };
  }, [realOrders, operationalParams.netfitsTakeRatePctFromGmv]);

  const filteredOrders = useMemo(() => {
    let list = realOrders;
    if (orderStatusFilter !== "all") {
      list = list.filter((o: SandboxOrder) => o.status === orderStatusFilter);
    }
    if (orderSearchTerm.trim()) {
      const q = orderSearchTerm.toLowerCase();
      list = list.filter((o: SandboxOrder) =>
        (o.orderNumber || o.id || "").toLowerCase().includes(q) ||
        (o.userName || "").toLowerCase().includes(q) ||
        (o.sellerName || "").toLowerCase().includes(q) ||
        (o.productName || "").toLowerCase().includes(q) ||
        (o.trackingCode || "").toLowerCase().includes(q)
      );
    }
    return list;
  }, [realOrders, orderStatusFilter, orderSearchTerm]);

  const filteredSkus = useMemo(() => {
    let list = realMarketMetrics.skus;
    if (skuCategoryFilter !== "all") {
      list = list.filter((s) => s.category.toLowerCase().includes(skuCategoryFilter.toLowerCase()));
    }
    return list;
  }, [realMarketMetrics.skus, skuCategoryFilter]);


  return (
          <div className="space-y-6">
            {/* Header Executivo do Marketplace */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-lime-400 bg-lime-950/60 border border-lime-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <ShoppingBag className="size-3 text-lime-400" />
                    {isReal ? "Shopping Netfits Oficial (Rock Encantech)" : `Plano Estratégico Shopping (${shortLabel})`}
                  </span>
                  <span className="text-[10px] font-bold text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded-full">
                    {isReal ? `${realMarketMetrics.count} Pedidos Auditados` : "28 Marcas & Sellers"}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  Marketplace &amp; Shop Netfits
                </h3>
                <p className="text-xs text-zinc-400">
                  Gestão integrada de vendas, sellers credenciados, curva ABC de produtos, fulfillment e infraestrutura Rock Encantech.
                </p>
              </div>

              {/* Sub-navegação do Cockpit de Marketplace */}
              <div className="flex items-center gap-1.5 bg-zinc-950 p-1.5 rounded-xl border border-zinc-800 overflow-x-auto max-w-full">
                <button
                  type="button"
                  onClick={() => setMarketSubTab("cockpit")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    marketSubTab === "cockpit"
                      ? "bg-lime-400 text-zinc-950 shadow-md shadow-lime-400/20"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  <BarChart3 className="size-3.5" />
                  <span>Cockpit &amp; Vendas</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMarketSubTab("sellers")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    marketSubTab === "sellers"
                      ? "bg-lime-400 text-zinc-950 shadow-md shadow-lime-400/20"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  <Store className="size-3.5" />
                  <span>Sellers &amp; SLA</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMarketSubTab("skus")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    marketSubTab === "skus"
                      ? "bg-lime-400 text-zinc-950 shadow-md shadow-lime-400/20"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  <Package className="size-3.5" />
                  <span>Catálogo &amp; SKUs</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMarketSubTab("orders")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    marketSubTab === "orders"
                      ? "bg-lime-400 text-zinc-950 shadow-md shadow-lime-400/20"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  <Truck className="size-3.5" />
                  <span>Pedidos &amp; Rastreamento</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMarketSubTab("rock_tech")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    marketSubTab === "rock_tech"
                      ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  <Zap className="size-3.5 text-amber-400" />
                  <span>Conexão Rock (Sandbox)</span>
                </button>
              </div>
            </div>

            {/* SUB-ABA 1: COCKPIT EXECUTIVO & VENDAS */}
            {marketSubTab === "cockpit" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                  <KpiCard
                    title="GMV Bruto Transacionado"
                    value={
                      isReal
                        ? `R$ ${realMarketMetrics.totalGmv.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
                        : `R$ ${((selectedSeller?.gmvBrl ?? 0) * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
                    }
                    change={isReal ? (realMarketMetrics.totalGmv > 0 ? "+100%" : "0%") : "+22.4%"}
                    positive={true}
                    icon={ShoppingBag}
                    subtext={isReal ? `${realMarketMetrics.count} pedidos reais auditados` : "Volume transacionado projetado"}
                    periodBadge={isReal ? "Banco Oficial" : shortLabel}
                  />

                  <KpiCard
                    title="Receita Netfits (Take-Rate)"
                    value={
                      isReal
                        ? `R$ ${realMarketMetrics.totalTakeRateBrl.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
                        : `R$ ${((selectedSeller?.netfitsRevenueBrl ?? 0) * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
                    }
                    change={isReal ? `${realMarketMetrics.takeRatePct}% comissão contratual` : `Comissão: ${selectedSeller.takeRatePct}%`}
                    positive={true}
                    icon={Coins}
                    subtext={isReal ? "Receita líquida retida do shopping" : "Take-rate de marketplace"}
                    periodBadge={isReal ? "Banco Oficial" : shortLabel}
                  />

                  <KpiCard
                    title="Ticket Médio por Pedido"
                    value={
                      isReal
                        ? `R$ ${realMarketMetrics.avgTicket.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
                        : `R$ ${(selectedSeller?.averageTicketBrl ?? 0).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
                    }
                    change={isReal ? "Média real ponderada" : "+5.8%"}
                    positive={true}
                    icon={Tag}
                    subtext={isReal ? "Média real por carrinho" : "Ticket médio projetado"}
                    periodBadge={isReal ? "Banco Oficial" : shortLabel}
                  />

                  <KpiCard
                    title="Economia com NFS (Queima)"
                    value={
                      isReal
                        ? `${realMarketMetrics.totalPointsBurned.toLocaleString("pt-BR")} nfs`
                        : `${Math.round((selectedSeller?.nfsBurnedTotal ?? 0) * pf).toLocaleString("pt-BR")} nfs`
                    }
                    change={isReal ? `R$ ${(realMarketMetrics.totalPointsBurned * 0.01).toFixed(2)} economizados` : "+18.5%"}
                    positive={true}
                    icon={Flame}
                    subtext={isReal ? "Desconto concedido em compras" : "Pontos queimados no shopping"}
                    periodBadge={isReal ? "Banco Oficial" : shortLabel}
                  />

                  <KpiCard
                    title="Cashback Emitido aos Atletas"
                    value={
                      isReal
                        ? `${realMarketMetrics.totalCashbackEarned.toLocaleString("pt-BR")} nfs`
                        : `${Math.round(7396000 * pf).toLocaleString("pt-BR")} nfs`
                    }
                    change={isReal ? "4 nfs por R$ faturado" : "+16.8%"}
                    positive={true}
                    icon={Gift}
                    subtext={isReal ? "Fidelidade e retenção gerada" : "Incentivo gamificado"}
                    periodBadge={isReal ? "Banco Oficial" : shortLabel}
                  />

                  <KpiCard
                    title="Fulfillment Médio & SLA"
                    value={isReal ? `${realMarketMetrics.avgSlaDays} dias úteis` : `${selectedSeller.fulfillmentSlaDays} dias`}
                    change={isReal ? "100.0% no prazo contratado" : `${selectedSeller.fulfillmentOnTimePct}% no prazo`}
                    positive={true}
                    icon={Truck}
                    subtext={isReal ? "Lead time de ponta a ponta" : "Entrega garantida"}
                    periodBadge={isReal ? "Banco Oficial" : shortLabel}
                  />

                  <KpiCard
                    title="Status da Malha de Entregas"
                    value={
                      isReal
                        ? `${realMarketMetrics.deliveredCount} Entregues · ${realMarketMetrics.sentCount} Em Trânsito`
                        : "98.4% Concluídos"
                    }
                    change={isReal ? `${realMarketMetrics.partialCount} Entrega Parcial` : "Excelência Logística"}
                    positive={true}
                    icon={CheckCircle2}
                    subtext={isReal ? "Rastreamento em tempo real" : "Baixo índice de avarias"}
                    periodBadge={isReal ? "Banco Oficial" : shortLabel}
                  />

                  <KpiCard
                    title="Total de Pedidos Realizados"
                    value={
                      isReal
                        ? realMarketMetrics.count.toString()
                        : Math.round((selectedSeller?.totalOrders ?? 0) * pf).toLocaleString("pt-BR")
                    }
                    change={isReal ? "Pedidos oficiais" : "+14.2%"}
                    positive={true}
                    icon={ShoppingCart}
                    subtext={isReal ? "Sincronizados via Webhook Rock" : `Top produto: ${selectedSeller.topProduct.split("&")[0]}`}
                    periodBadge={isReal ? "Banco Oficial" : shortLabel}
                  />
                </div>

                {/* Painel Estratégico Bipartite: Meios de Pagamento & Categorias */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Card 1: Mix de Meios de Pagamento */}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                          <Receipt className="size-4 text-lime-400" />
                          Mix de Meios de Pagamento
                        </h4>
                        <p className="text-xs text-zinc-400">Distribuição financeira por modalidade de checkout oficial</p>
                      </div>
                      <span className="text-[10px] font-mono text-lime-400 bg-lime-950/60 border border-lime-500/30 px-2 py-0.5 rounded font-bold">
                        {isReal ? realMarketMetrics.dominantPaymentLabel : "PIX Dominante"}
                      </span>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div>
                        <div className="flex items-center justify-between text-xs font-bold mb-1">
                          <span className="text-zinc-300 flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-purple-500" />
                            Cartão de Crédito
                          </span>
                          <span className="text-white font-mono">
                            {isReal ? `${realMarketMetrics.creditCardPct}% (${realMarketMetrics.creditCardOrdersCount} pedidos)` : "28.2%"}
                          </span>
                        </div>
                        <div className="w-full h-2 bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                          <div className="h-full bg-purple-500 rounded-full" style={{ width: `${isReal ? realMarketMetrics.creditCardPct : 28.2}%` }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between text-xs font-bold mb-1">
                          <span className="text-zinc-300 flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-lime-400" />
                            PIX Instantâneo
                          </span>
                          <span className="text-white font-mono">
                            {isReal ? `${realMarketMetrics.pixPct}% (${realMarketMetrics.pixOrdersCount} pedidos)` : "68.4%"}
                          </span>
                        </div>
                        <div className="w-full h-2 bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                          <div className="h-full bg-lime-400 rounded-full" style={{ width: `${isReal ? realMarketMetrics.pixPct : 68.4}%` }} />
                        </div>
                      </div>

                      {isReal && realMarketMetrics.unspecPaymentCount > 0 && (
                        <div>
                          <div className="flex items-center justify-between text-xs font-bold mb-1">
                            <span className="text-zinc-400 flex items-center gap-1.5">
                              <span className="size-2 rounded-full bg-zinc-600" />
                              Não informado pela Rock (Pioneiros)
                            </span>
                            <span className="text-zinc-400 font-mono">
                              {realMarketMetrics.unspecPaymentCount} pedidos (GTJ e PFM)
                            </span>
                          </div>
                          <div className="w-full h-2 bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                            <div className="h-full bg-zinc-700 rounded-full" style={{ width: `${(realMarketMetrics.unspecPaymentCount / (realMarketMetrics.count || 1)) * 100}%` }} />
                          </div>
                        </div>
                      )}

                      {!isReal && (
                        <div>
                          <div className="flex items-center justify-between text-xs font-bold mb-1">
                            <span className="text-zinc-300 flex items-center gap-1.5">
                              <span className="size-2 rounded-full bg-amber-400" />
                              Boleto Bancário
                            </span>
                            <span className="text-white font-mono">3.4%</span>
                          </div>
                          <div className="w-full h-2 bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                            <div className="h-full bg-amber-400 rounded-full" style={{ width: "3.4%" }} />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card 2: Participação por Categoria Esportiva */}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                          <Boxes className="size-4 text-purple-400" />
                          Categorias de Produtos no Shopping
                        </h4>
                        <p className="text-xs text-zinc-400">Concentração de vendas e preferência dos atletas</p>
                      </div>
                      <span className="text-[10px] font-mono text-purple-400 bg-purple-950/60 border border-purple-500/30 px-2 py-0.5 rounded">
                        {isReal ? `${realMarketMetrics.categories.length} Categorias` : "5 Categorias"}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                      {isReal ? (
                        realMarketMetrics.categories.length === 0 ? (
                          <div className="col-span-2 p-4 text-center text-zinc-500 text-xs italic bg-zinc-950 rounded-xl border border-zinc-800">
                            Nenhuma categoria transacionada no Banco Real até o momento.
                          </div>
                        ) : (
                          realMarketMetrics.categories.map((cat) => (
                            <div key={cat.name} className="p-3 bg-zinc-950 rounded-xl border border-zinc-800/80 space-y-1">
                              <span className="text-[10px] text-zinc-400 font-bold uppercase truncate block">{cat.name}</span>
                              <div className="text-base font-bold text-white font-mono">
                                R$ {cat.gmv.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                              </div>
                              <div className="text-[10px] text-lime-400 font-medium truncate">
                                {cat.sellersList} ({cat.ordersCount} {cat.ordersCount === 1 ? "pedido" : "pedidos"})
                              </div>
                            </div>
                          ))
                        )
                      ) : (
                        CATEGORY_DISTRIBUTION.map((cat) => (
                          <div key={cat.name} className="p-3 bg-zinc-950 rounded-xl border border-zinc-800/80 space-y-1">
                            <span className="text-[10px] text-zinc-400 font-bold uppercase truncate block">{cat.name}</span>
                            <div className="text-base font-bold text-white font-mono">
                              R$ {((cat.value * 1849000 / 100) * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                            </div>
                            <div className="text-[10px] text-lime-400 font-medium">{cat.value}% do GMV projetado</div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SUB-ABA 2: SELLERS & FULFILLMENT (SLA) */}
            {marketSubTab === "sellers" && (
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <Store className="size-5 text-lime-400" />
                      {isReal ? "Lojistas Auditados em Produção (Sellers Rock Encantech)" : "Desempenho Estratégico Comparativo por Seller"}
                    </h4>
                    <p className="text-xs text-zinc-400">
                      {isReal
                        ? `${realMarketMetrics.sellers.length} sellers credenciados com pedidos transacionados e validados`
                        : "Ranking de parceiros lojistas com controle de pontualidade e take-rate"}
                    </p>
                  </div>

                  {!isReal && (
                    <div className="flex items-center gap-2 bg-zinc-950 p-2 rounded-xl border border-zinc-800 text-xs">
                      <Store className="size-4 text-lime-400" />
                      <select
                        value={selectedSellerId}
                        onChange={(e) => setSelectedSellerId(e.target.value)}
                        className="bg-transparent font-bold text-white focus:outline-none cursor-pointer"
                      >
                        {SELLERS_MARKETPLACE_DATABASE.map((s) => (
                          <option key={s.id} value={s.id} className="bg-zinc-900 text-white">
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                <div className="overflow-x-auto w-full max-w-full">
                  <table className="w-full text-left text-xs text-zinc-300 min-w-[760px]">
                    <thead className="bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800">
                      <tr>
                        <th className="py-3 px-4">Seller / Lojista</th>
                        <th className="py-3 px-4">Categoria Oficial</th>
                        <th className="py-3 px-4 text-right">Pedidos</th>
                        <th className="py-3 px-4 text-right">GMV Bruto (R$)</th>
                        <th className="py-3 px-4 text-right">Take-Rate Netfits</th>
                        <th className="py-3 px-4 text-right">Ticket Médio</th>
                        <th className="py-3 px-4 text-center">Lead Time Médio</th>
                        <th className="py-3 px-4 text-center">Pontualidade</th>
                        <th className="py-3 px-4 text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800 font-medium">
                      {isReal ? (
                        realMarketMetrics.sellers.map((seller) => (
                          <tr key={seller.id} className="hover:bg-zinc-800/40 transition">
                            <td className="py-3 px-4">
                              <p className="font-bold text-white flex items-center gap-1.5">
                                <Store className="size-3.5 text-lime-400" />
                                {seller.name}
                              </p>
                              <p className="text-[10px] text-zinc-400 font-mono">ID: {seller.id}</p>
                            </td>
                            <td className="py-3 px-4 text-zinc-300">
                              <span className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] font-medium text-zinc-300">
                                {seller.category}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-right font-bold text-white font-mono">
                              {seller.ordersCount}
                            </td>
                            <td className="py-3 px-4 text-right font-bold text-white font-mono">
                              R$ {seller.gmv.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                            </td>
                            <td className="py-3 px-4 text-right text-purple-400 font-bold font-mono">
                              R$ {seller.takeRateBrl.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} ({realMarketMetrics.takeRatePct}%)
                            </td>
                            <td className="py-3 px-4 text-right text-zinc-300 font-mono">
                              R$ {seller.avgTicket.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                            </td>
                            <td className="py-3 px-4 text-center font-mono text-zinc-300">
                              {seller.avgSlaDays} dias úteis
                            </td>
                            <td className="py-3 px-4 text-center">
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                                {seller.onTimePct}% no prazo
                              </span>
                            </td>
                            <td className="py-3 px-4 text-center">
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-lime-400/20 text-lime-400 border border-lime-400/30">
                                {seller.sent > 0 ? "EM TRÂNSITO" : seller.partial > 0 ? "PARCIAL" : "ENTREGUE"}
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        SELLERS_MARKETPLACE_DATABASE.filter((s) => s.id !== "seller_all")
                          .slice((marketPage - 1) * itemsPerPage, marketPage * itemsPerPage)
                          .map((seller) => (
                            <tr key={seller.id} className="hover:bg-zinc-800/40 transition">
                              <td className="py-3 px-4">
                                <p className="font-bold text-white">{seller.name}</p>
                                <p className="text-[10px] text-zinc-400">{seller.category}</p>
                              </td>
                              <td className="py-3 px-4 text-zinc-300">
                                <span className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] font-medium text-zinc-300">
                                  {seller.category}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-right font-bold text-white font-mono">
                                {Math.round(seller.totalOrders * pf).toLocaleString("pt-BR")}
                              </td>
                              <td className="py-3 px-4 text-right font-bold text-white font-mono">
                                R$ {(seller.gmvBrl * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                              </td>
                              <td className="py-3 px-4 text-right text-purple-400 font-bold font-mono">
                                R$ {(seller.netfitsRevenueBrl * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })} ({seller.takeRatePct}%)
                              </td>
                              <td className="py-3 px-4 text-right text-zinc-300 font-mono">
                                R$ {seller.averageTicketBrl.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                              </td>
                              <td className="py-3 px-4 text-center font-mono text-zinc-300">
                                {seller.fulfillmentSlaDays} dias
                              </td>
                              <td className="py-3 px-4 text-center">
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                                  {seller.fulfillmentOnTimePct}%
                                </span>
                              </td>
                              <td className="py-3 px-4 text-center">
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-lime-400/20 text-lime-400 border border-lime-400/30">
                                  ATIVO
                                </span>
                              </td>
                            </tr>
                          ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* SUB-ABA 3: CATÁLOGO, SKUS & CURVA ABC DE PRODUTOS */}
            {marketSubTab === "skus" && (
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <Package className="size-5 text-purple-400" />
                      Catálogo de SKUs &amp; Curva ABC de Produtos
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Relação de itens específicos transacionados na loja com volume faturado, marcas e lojistas responsáveis
                    </p>
                  </div>

                  {/* Filtro por Categoria de SKU */}
                  <div className="flex items-center gap-2 bg-zinc-950 p-2 rounded-xl border border-zinc-800 text-xs">
                    <Filter className="size-4 text-purple-400" />
                    <select
                      value={skuCategoryFilter}
                      onChange={(e) => setSkuCategoryFilter(e.target.value)}
                      className="bg-transparent font-bold text-white focus:outline-none cursor-pointer"
                    >
                      <option value="all" className="bg-zinc-900 text-white">Todas as Categorias</option>
                      <option value="Calçados" className="bg-zinc-900 text-white">Calçados de Corrida</option>
                      <option value="Suplementação" className="bg-zinc-900 text-white">Suplementação &amp; Nutrição</option>
                      <option value="Hidratação" className="bg-zinc-900 text-white">Hidratação &amp; Performance</option>
                      <option value="Vestuário" className="bg-zinc-900 text-white">Vestuário Esportivo</option>
                      <option value="Acessórios" className="bg-zinc-900 text-white">Acessórios &amp; Compressão</option>
                      <option value="Equipamentos" className="bg-zinc-900 text-white">Equipamentos &amp; Aventura</option>
                    </select>
                  </div>
                </div>

                <div className="overflow-x-auto w-full max-w-full">
                  <table className="w-full text-left text-xs text-zinc-300 min-w-[760px]">
                    <thead className="bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800">
                      <tr>
                        <th className="py-3 px-4">Produto &amp; Descrição</th>
                        <th className="py-3 px-4">Lojista Parceiro (Loja)</th>
                        <th className="py-3 px-4">Marca</th>
                        <th className="py-3 px-4 text-right">Preço Unitário</th>
                        <th className="py-3 px-4 text-right">Qtd Vendida</th>
                        <th className="py-3 px-4 text-right">GMV Faturado</th>
                        <th className="py-3 px-4 text-center">Curva ABC</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800 font-medium">
                      {filteredSkus.map((sku, idx) => {
                        const abcClass = idx === 0 ? "Classe A" : idx <= 3 ? "Classe B" : "Classe C";
                        const abcColor =
                          abcClass === "Classe A"
                            ? "bg-lime-400/20 text-lime-400 border-lime-400/30"
                            : abcClass === "Classe B"
                            ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
                            : "bg-zinc-800 text-zinc-400 border-zinc-700";

                        return (
                          <tr key={sku.skuId} className="hover:bg-zinc-800/40 transition">
                            <td className="py-3 px-4">
                              <p className="font-bold text-white text-xs">{sku.name}</p>
                              <p className="text-[10px] text-zinc-400">{sku.category}</p>
                            </td>
                            <td className="py-3 px-4">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-zinc-800 text-zinc-200 border border-zinc-700">
                                <Store className="size-3 text-lime-400" />
                                {sku.sellerName}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-zinc-200 font-semibold">
                              {sku.brand}
                            </td>
                            <td className="py-3 px-4 text-right font-mono text-zinc-300">
                              R$ {sku.unitPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                            </td>
                            <td className="py-3 px-4 text-right font-mono font-bold text-white">
                              {sku.unitsSold}
                            </td>
                            <td className="py-3 px-4 text-right font-mono font-bold text-white">
                              R$ {sku.totalGmv.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                            </td>
                            <td className="py-3 px-4 text-center">
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold border ${abcColor}`}>
                                {abcClass}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* SUB-ABA 4: MONITOR ANALÍTICO DE PEDIDOS (TRACK & TRACE) */}
            {marketSubTab === "orders" && (
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-5">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <Truck className="size-5 text-lime-400" />
                      Monitor Analítico de Pedidos &amp; Rastreamento
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Histórico permanente com validação de status, atletas, sellers, valores e códigos de rastreamento
                    </p>
                  </div>

                  {/* Filtros de Status & Busca */}
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="relative">
                      <Search className="size-3.5 text-zinc-500 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="Buscar pedido, atleta, SKU..."
                        value={orderSearchTerm}
                        onChange={(e) => setOrderSearchTerm(e.target.value)}
                        className="bg-zinc-950 border border-zinc-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-500 w-48 sm:w-56"
                      />
                    </div>

                    <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-xl border border-zinc-800 text-xs">
                      <button
                        type="button"
                        onClick={() => setOrderStatusFilter("all")}
                        className={`px-2.5 py-1 rounded-lg font-bold transition ${
                          orderStatusFilter === "all" ? "bg-lime-400 text-zinc-950" : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        Todos ({realOrders.length})
                      </button>
                      <button
                        type="button"
                        onClick={() => setOrderStatusFilter("DELIVERED")}
                        className={`px-2.5 py-1 rounded-lg font-bold transition ${
                          orderStatusFilter === "DELIVERED" ? "bg-lime-400 text-zinc-950" : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        Entregues
                      </button>
                      <button
                        type="button"
                        onClick={() => setOrderStatusFilter("SENT")}
                        className={`px-2.5 py-1 rounded-lg font-bold transition ${
                          orderStatusFilter === "SENT" ? "bg-amber-400 text-zinc-950" : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        Em Trânsito
                      </button>
                      <button
                        type="button"
                        onClick={() => setOrderStatusFilter("PARTIALLY-DELIVERED")}
                        className={`px-2.5 py-1 rounded-lg font-bold transition ${
                          orderStatusFilter === "PARTIALLY-DELIVERED" ? "bg-purple-600 text-white" : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        Parciais
                      </button>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto w-full max-w-full">
                  <table className="w-full text-left text-xs text-zinc-300 min-w-[840px]">
                    <thead className="bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800">
                      <tr>
                        <th className="py-3 px-4">Produto &amp; Item Adquirido</th>
                        <th className="py-3 px-4">Lojista Parceiro (Loja)</th>
                        <th className="py-3 px-4">Meio de Pagamento</th>
                        <th className="py-3 px-4">Atleta / Comprador</th>
                        <th className="py-3 px-4 text-right">Data &amp; Hora</th>
                        <th className="py-3 px-4 text-right">Valor Pago</th>
                        <th className="py-3 px-4 text-right">Cashback NFS</th>
                        <th className="py-3 px-4 text-right">Take-Rate</th>
                        <th className="py-3 px-4 text-center">Rastreio &amp; Envio</th>
                        <th className="py-3 px-4 text-center">Status Oficial</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800 font-medium">
                      {filteredOrders.length === 0 ? (
                        <tr>
                          <td colSpan={10} className="py-8 text-center text-zinc-500">
                            Nenhum pedido encontrado com os filtros selecionados.
                          </td>
                        </tr>
                      ) : (
                        filteredOrders.map((ord: SandboxOrder) => {
                          const orderVal = Number(ord.amountBrl ?? ord.summary?.finalPrice ?? ord.summary?.total ?? 0);
                          const takeRateVal = orderVal * ((operationalParams.netfitsTakeRatePctFromGmv ?? 6.0) / 100);
                          const ptsEarned = Number(ord.cashbackEarned ?? ord.netfitsProcessing?.pointsEarned ?? Math.round(orderVal * 4));
                          const tracking = ord.trackingCode && ord.trackingCode !== "-" ? ord.trackingCode : "-";
                          const statusStr = String(ord.status || "PAID").toUpperCase();

                          let statusBadge = "bg-blue-500/20 text-blue-300 border-blue-500/30";
                          let statusLabel = "PAID (CONFIRMADO)";
                          if (statusStr === "DELIVERED" || statusStr === "ENTREGUE") {
                            statusBadge = "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
                            statusLabel = "DELIVERED (ENTREGUE)";
                          } else if (statusStr === "SENT" || statusStr === "ENVIADO") {
                            statusBadge = "bg-amber-500/20 text-amber-300 border-amber-500/30";
                            statusLabel = "SENT (EM TRÂNSITO)";
                          } else if (statusStr === "PARTIALLY-DELIVERED") {
                            statusBadge = "bg-purple-500/20 text-purple-300 border-purple-500/30";
                            statusLabel = "PARTIALLY DELIVERED";
                          }

                          // Resolução limpa e confiável do Lojista Parceiro (Loja real)
                          const rawSeller = ord.sellerName || ord.items?.[0]?.sellerName || "";
                          let storeName = rawSeller;
                          if (/netshoes/i.test(rawSeller)) storeName = "Netshoes";
                          else if (/webcontinental/i.test(rawSeller)) storeName = "Webcontinental";
                          else if (/centauro/i.test(rawSeller)) storeName = "Centauro";
                          else if (/fila/i.test(rawSeller)) storeName = "Fila";
                          else if (/new balance|newbalance/i.test(rawSeller)) storeName = "New Balance";
                          else if (!storeName || storeName === "RhOFkbZJIN") storeName = "Aguardando Rock";

                          if (ord.items && ord.items.length > 1) {
                            const distinctSellers = Array.from(new Set(ord.items.map((it: SandboxOrderItem) => it.sellerName).filter(Boolean)));
                            if (distinctSellers.length > 1) {
                              storeName = distinctSellers.join(" / ");
                            }
                          }

                          let storeBadgeStyle = "bg-zinc-800 text-zinc-400 border-zinc-700";
                          if (storeName === "Netshoes" || storeName.includes("Netshoes")) storeBadgeStyle = "bg-amber-500/20 text-amber-300 border-amber-500/30";
                          else if (storeName === "Webcontinental" || storeName.includes("Webcontinental")) storeBadgeStyle = "bg-purple-500/20 text-purple-300 border-purple-500/30";
                          else if (storeName === "Centauro") storeBadgeStyle = "bg-red-500/20 text-red-300 border-red-500/30";
                          else if (storeName === "Fila") storeBadgeStyle = "bg-sky-500/20 text-sky-300 border-sky-500/30";
                          else if (storeName === "New Balance") storeBadgeStyle = "bg-rose-500/20 text-rose-300 border-rose-500/30";

                          // Meio de pagamento oficial
                          const pmType = normalizeOrderPaymentMethod(ord.paymentMethod || ord.metadata?.paymentMethod || ord.rawPayload?.metadata?.paymentMethod);
                          let pmBadge = "bg-zinc-800 text-zinc-500 border-zinc-700";
                          let pmLabel = storeName === "Aguardando Rock" ? "Aguardando Rock" : "Não informado";
                          if (pmType === "CREDIT_CARD") {
                            pmBadge = "bg-purple-500/20 text-purple-300 border-purple-500/30";
                            pmLabel = "Cartão de Crédito";
                          } else if (pmType === "PIX") {
                            pmBadge = "bg-lime-400/20 text-lime-400 border-lime-400/30";
                            pmLabel = "PIX";
                          } else if (ord.paymentMethod && ord.paymentMethod !== "-" && storeName !== "Aguardando Rock") {
                            pmLabel = String(ord.paymentMethod);
                          }

                          // Nome do produto limpo e legível
                          let itemName = ord.productName || ord.items?.[0]?.name;
                          if (!itemName || (itemName.includes("Item não detalhado") && ord.items && ord.items.length > 0)) {
                            const firstItemName = ord.items?.[0]?.name || "Item";
                            itemName = ord.items?.length === 1 ? firstItemName : `${firstItemName} (+${(ord.items?.length || 1) - 1} item)`;
                          } else if (!itemName) {
                            itemName = storeName === "Aguardando Rock" ? "Item não detalhado pela Rock (1 item)" : "Produto Esportivo Netfits";
                          }
                          const itemBrand = ord.brand && ord.brand !== "-" ? ord.brand : ord.items?.[0]?.brand;
                          const itemCat = ord.category && ord.category !== "Aguardando Rock" ? ord.category : ord.items?.[0]?.category;

                          return (
                            <tr key={ord.id || ord.orderNumber} className="hover:bg-zinc-800/40 transition">
                              {/* 1. Produto & Descrição do Item (Foco Principal) */}
                              <td className="py-3 px-4 max-w-[280px]">
                                <p className="font-bold text-white text-xs line-clamp-1">{itemName}</p>
                                <div className="flex items-center gap-1.5 mt-0.5 text-[10px] text-zinc-400">
                                  <span className="font-mono text-lime-400 font-semibold">#{ord.orderNumber || ord.id}</span>
                                  {itemBrand && (
                                    <>
                                      <span>•</span>
                                      <span className="text-zinc-300 font-medium">{itemBrand}</span>
                                    </>
                                  )}
                                  {itemCat && (
                                    <>
                                      <span>•</span>
                                      <span className="text-zinc-500">{itemCat}</span>
                                    </>
                                  )}
                                </div>
                              </td>

                              {/* 2. Lojista Parceiro (Loja Oficial onde a compra foi feita) */}
                              <td className="py-3 px-4">
                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border ${storeBadgeStyle}`}>
                                  <Store className="size-3" />
                                  {storeName}
                                </span>
                              </td>

                              {/* 3. Meio de Pagamento */}
                              <td className="py-3 px-4">
                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold border ${pmBadge}`}>
                                  {pmLabel}
                                </span>
                              </td>

                              {/* 4. Atleta / Comprador */}
                              <td className="py-3 px-4">
                                <p className="font-bold text-white">{ord.userName || ord.customer?.name || "Atleta Netfits"}</p>
                                <p className="text-[10px] text-zinc-400">{ord.customer?.email || ord.userId || "Cadastrado no App"}</p>
                              </td>

                              {/* 5. Data & Hora */}
                              <td className="py-3 px-4 text-right text-zinc-400 font-mono text-[11px]">
                                {ord.paidAt || ord.createdAt ? new Date(ord.paidAt || ord.createdAt).toLocaleString("pt-BR") : "15/10/2026"}
                              </td>

                              {/* 6. Valor Pago */}
                              <td className="py-3 px-4 text-right font-bold text-white font-mono">
                                R$ {orderVal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                              </td>

                              {/* 7. Cashback NFS */}
                              <td className="py-3 px-4 text-right font-bold text-lime-400 font-mono">
                                +{ptsEarned.toLocaleString("pt-BR")} nfs
                              </td>

                              {/* 8. Take-Rate */}
                              <td className="py-3 px-4 text-right font-bold text-purple-400 font-mono">
                                R$ {takeRateVal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                              </td>

                              {/* 9. Rastreio & Envio */}
                              <td className="py-3 px-4 text-center">
                                <div className="flex flex-col items-center gap-0.5">
                                  <span className="px-2 py-0.5 rounded bg-zinc-950 font-mono text-[10px] text-zinc-300 border border-zinc-800">
                                    {tracking}
                                  </span>
                                  {ord.carrier && ord.carrier !== "-" && <span className="text-[9px] text-zinc-500">{ord.carrier}</span>}
                                </div>
                              </td>

                              {/* 10. Status Oficial */}
                              <td className="py-3 px-4 text-center">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold border ${statusBadge}`}>
                                  {statusLabel}
                                </span>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* SUB-ABA 5: ENGENHARIA & CONEXÃO ROCK ENCANTECH (SANDBOX & FERRAMENTAS TÉCNICAS) */}
            {marketSubTab === "rock_tech" && (
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-950/40 via-zinc-900 to-zinc-900 border border-purple-500/30 rounded-2xl p-4 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-purple-950 border border-purple-500/40 grid place-items-center">
                      <Zap className="size-5 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Módulo Técnico Rock Encantech (Mkplace API Suite)</h4>
                      <p className="text-xs text-zinc-400">
                        Ambiente de homologação, emissão de tokens JWT RS256, simulador de webhooks e endpoints oficiais.
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Endpoint /api/orders Operacional
                  </span>
                </div>

                {/* Renderiza o componente técnico de integração Rock Encantech */}
                <AdminMkplaceIntegrationTab />
              </div>
            )}
          </div>
  );
}
