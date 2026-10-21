import { trackShopView, trackProductSelect, trackAddToCart } from "@/lib/analytics";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import {
  Zap,
  ShieldCheck,
  ShoppingBag,
  ArrowLeft,
  CheckCircle2,
  Truck,
  RotateCcw,
  Sparkles,
  Check,
  BadgeCheck,
  X,
  QrCode,
  CreditCard,
  Lock,
  ArrowUpRight,
  Receipt,
  CheckCheck,
} from "lucide-react";
import productMizunoCap from "@/assets/product-mizuno-cap.jpg";
import productLiquidz from "@/assets/product-liquidz.jpg";
import asicsShoes from "@/assets/asics-novablast.jpg";
import gearWatch from "@/assets/gear-watch.jpg";
import productRing from "@/assets/product-ring.jpg";
import productPalatinose from "@/assets/product-palatinose.jpg";
import { useEffect, useState, useMemo } from "react";
import { toast } from "sonner";
import { useWallet } from "@/lib/wallet-store";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { badgesStore } from "@/lib/badges-store";
import { shopSelectionStore } from "@/lib/shop-selection-store";

export interface MarketSearch {
  product?: string;
  source?: string;
}

export const Route = createFileRoute("/market")({
  validateSearch: (search: Record<string, unknown>): MarketSearch => ({
    product: typeof search.product === "string" ? search.product : undefined,
    source: typeof search.source === "string" ? search.source : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Netfits Shop — Loja Oficial Integrada Rock Encantech" },
      {
        name: "description",
        content: "Loja Oficial Netfits integrada com autenticação unificada Rock Encantech e acúmulo de pontos nfs.",
      },
      { property: "og:title", content: "Netfits Shop" },
    ],
  }),
  component: MarketEmbeddedPage,
});

export interface ShopProductItem {
  id: string;
  sku: string;
  title: string;
  price: string;
  numericPrice: number;
  cashback: string;
  cashbackNfs: number;
  seller: string;
  brand: string;
  image: string;
  tag: string;
  description: string;
  specs: { label: string; value: string }[];
  highlights: string[];
}

export const OFFICIAL_SHOP_CATALOG: ShopProductItem[] = [
  {
    id: "2FU-9629-205",
    sku: "2FU-9629-205",
    title: "Boné Aba Curva Mizuno Run Sky — Off White",
    brand: "Mizuno",
    price: "R$ 89,90",
    numericPrice: 89.9,
    cashback: "+360 nfs",
    cashbackNfs: 360,
    seller: "Netshoes",
    image: productMizunoCap,
    tag: "Acessórios & Corrida",
    description:
      "Boné unissex Mizuno aba curva Run Sky confeccionado em tecido leve de secagem rápida com proteção UV50+, faixa interna anti-suor e fecho ajustável. Comercializado dentro do Netfits Shop com fulfillment oficial Rock Encantech.",
    specs: [
      { label: "Material", value: "100% Poliéster Microperfurado Quick-Dry" },
      { label: "Proteção Solar", value: "FPU 50+ Certificada para Treinos Diurnos" },
      { label: "Fecho", value: "Fita ajustável com fivela de alta precisão" },
      { label: "Faixa Interna", value: "Atoalhada anti-suor para manter visão límpida" },
      { label: "Gênero", value: "Unissex" },
      { label: "Fulfillment", value: "Netshoes via Rock Encantech (StoreId: RhOFkbZJIN)" },
    ],
    highlights: [
      "Proteção UV50+ testada para corrida e treinos sob radiação solar intensa",
      "Tecido microperfurado Quick-Dry de secagem ultra-rápida",
      "Faixa interna atoalhada anti-suor que mantém a visão límpida",
      "Fecho ajustável com encaixe de alta precisão anatômica",
    ],
  },
  {
    id: "m01",
    sku: "LQZ-JAB-250",
    title: "Liquidz de Jaboticaba — Eletrólitos & Hidratação",
    brand: "Liquidz",
    price: "R$ 99,55",
    numericPrice: 99.55,
    cashback: "+199 nfs",
    cashbackNfs: 199,
    seller: "Liquidz Brasil",
    image: productLiquidz,
    tag: "Suplementação & Hidratação",
    description:
      "Fórmula isotônica avançada de rápida absorção com eletrólitos bioidênticos de Jaboticaba brasileira para manter hidratação celular contínua.",
    specs: [
      { label: "Volume", value: "Pote 300g (30 doses)" },
      { label: "Sabor", value: "Jaboticaba Natural" },
      { label: "Açúcar", value: "Zero Adição de Açúcares" },
    ],
    highlights: [
      "Repositor hidroeletrolítico premium",
      "Prevenção ativa de cãibras em treinos longos",
    ],
  },
  {
    id: "m02",
    sku: "ASICS-NOVABLAST-4",
    title: "Tênis Asics NovaBlast 4 — Performance Amortecimento",
    brand: "Asics",
    price: "R$ 1.290,00",
    numericPrice: 1290.0,
    cashback: "+1.290 nfs",
    cashbackNfs: 1290,
    seller: "Netshoes",
    image: asicsShoes,
    tag: "Calçados & Performance",
    description:
      "Entressola com espuma FF BLAST™ PLUS ECO para passadas elásticas e energéticas com resposta imediata e peso reduzido.",
    specs: [
      { label: "Drop", value: "8 mm" },
      { label: "Amortecimento", value: "FF BLAST™ PLUS ECO" },
      { label: "Peso Médio", value: "260g" },
    ],
    highlights: [
      "Geometria com efeito trampolim na pisada",
      "Cabedal em tecido engineered mesh respirável",
    ],
  },
  {
    id: "m20",
    sku: "GARMIN-FR-965",
    title: "Garmin Forerunner 965 — Smartwatch GPS AMOLED",
    brand: "Garmin",
    price: "R$ 4.299,00",
    numericPrice: 4299.0,
    cashback: "+4.299 nfs",
    cashbackNfs: 4299,
    seller: "Garmin Store Brasil",
    image: gearWatch,
    tag: "GPS & Telemetria",
    description:
      "Smartwatch esportivo de ponta com tela AMOLED touch, mapas topográficos integrados, métricas avançadas de VFC e bateria de até 23 dias.",
    specs: [
      { label: "Tela", value: "AMOLED 1.4\" Touchscreen" },
      { label: "Bateria", value: "Até 23 dias em modo smartwatch" },
      { label: "GPS", value: "Multi-banda com SatIQ™" },
    ],
    highlights: [
      "Métricas avançadas de prontidão para o treino",
      "Sincronização nativa com app Netfits",
    ],
  },
  {
    id: "m03",
    sku: "CORE-RING-TITANIUM",
    title: "Smart Ring Core — Anel Inteligente Titânio",
    brand: "Core Health",
    price: "R$ 1.890,00",
    numericPrice: 1890.0,
    cashback: "+1.890 nfs",
    cashbackNfs: 1890,
    seller: "Core Store Oficial",
    image: productRing,
    tag: "Wearables & Saúde",
    description:
      "Monitoramento discreto e contínuo de sono, temperatura corporal, oxigenação e prontidão física com construção em titânio cirúrgico.",
    specs: [
      { label: "Material", value: "Titânio Cirúrgico Leve" },
      { label: "Bateria", value: "Até 7 dias com carga rápida" },
      { label: "Resistência", value: "À prova d'água 100m" },
    ],
    highlights: [
      "Score de sono reparador e recuperação diária",
      "Totalmente integrado à Telemetria Netfits",
    ],
  },
  {
    id: "m18",
    sku: "DUX-PALATINOSE-400G",
    title: "Palatinose Endurance 400g — Dux Nutrition",
    brand: "Dux Nutrition",
    price: "R$ 139,00",
    numericPrice: 139.0,
    cashback: "+139 nfs",
    cashbackNfs: 139,
    seller: "Dux Store Oficial",
    image: productPalatinose,
    tag: "Energia & Endurance",
    description:
      "Carboidrato funcional de baixo índice glicêmico para liberação constante e gradual de energia durante provas e treinos prolongados.",
    specs: [
      { label: "Índice Glicêmico", value: "IG 32 (Baixo impacto glicêmico)" },
      { label: "Peso Líquido", value: "400g" },
      { label: "Uso", value: "Pré e intra-treino" },
    ],
    highlights: [
      "Energia sustentada sem pico de insulina",
      "Otimiza a queima de gordura em treinos aeróbicos",
    ],
  },
];

function MarketEmbeddedPage() {
  const navigate = useNavigate();
  const search = Route.useSearch();
  const { balance } = useWallet();
  const activeUser = sharedSandboxStore.useActiveUser();
  const storeSelectedProduct = shopSelectionStore.useSelectedProduct();

  // Modal de Checkout Oficial Rock Encantech
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card">("pix");
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<{
    orderId: string;
    productTitle: string;
    productPrice: string;
    cashbackNfs: number;
    seller: string;
    date: string;
  } | null>(null);

  // Resolução determinística do produto ativo
  const activeProduct: ShopProductItem | null = useMemo(() => {
    const targetId = search.product || storeSelectedProduct?.id;

    if (targetId) {
      const lower = targetId.toLowerCase();
      if (
        lower === "2fu-9629-205" ||
        lower.includes("mizuno") ||
        lower.includes("bone") ||
        lower.includes("cap")
      ) {
        return OFFICIAL_SHOP_CATALOG[0];
      }

      const match = OFFICIAL_SHOP_CATALOG.find((p) => p.id === targetId || p.sku === targetId);
      if (match) return match;
    }

    if (storeSelectedProduct) {
      return {
        id: storeSelectedProduct.id,
        sku: storeSelectedProduct.id,
        title: storeSelectedProduct.title || "Boné Aba Curva Mizuno Run Sky — Off White",
        price: storeSelectedProduct.price || "R$ 89,90",
        numericPrice: 89.9,
        cashback: storeSelectedProduct.cashback || "+360 nfs",
        cashbackNfs: 360,
        seller: storeSelectedProduct.seller || "Netshoes",
        brand: storeSelectedProduct.seller || "Netshoes",
        image: storeSelectedProduct.image || productMizunoCap,
        tag: "Item Homologado",
        description:
          "Produto homologado comercializado na Loja Oficial Netfits com fulfillment Rock Encantech.",
        specs: [
          { label: "Vendedor", value: storeSelectedProduct.seller || "Netshoes" },
          { label: "Cashback", value: storeSelectedProduct.cashback || "+360 nfs" },
          { label: "Fulfillment", value: "Rock Encantech (StoreId: RhOFkbZJIN)" },
        ],
        highlights: [
          "Item oficial comercializado dentro do Netfits Shop",
          "Cashback garantido de 4,00 nfs por R$ 1,00 gasto",
        ],
      };
    }

    return null;
  }, [search.product, storeSelectedProduct]);

  useEffect(() => {
    badgesStore.recordShopVisit();
    trackShopView("all");
    if (activeProduct) {
      trackProductSelect(activeProduct.id, activeProduct.title, activeProduct.price, activeProduct.seller);
    }
  }, [activeProduct]);

  const handleClearSelection = () => {
    shopSelectionStore.clear();
    navigate({ to: "/market", search: {} });
    toast.info("Retornando ao catálogo geral da Loja Oficial");
  };

  const handleSelectProduct = (product: ShopProductItem) => {
    trackProductSelect(product.id, product.title, product.price, product.seller);
    shopSelectionStore.setProduct({
      id: product.id,
      title: product.title,
      price: product.price,
      cashback: product.cashback,
      seller: product.seller,
      image: product.image,
    });
    navigate({
      to: "/market",
      search: { product: product.id },
    });
  };

  const handleOpenCheckout = () => {
    if (!activeProduct) return;
    trackAddToCart(activeProduct.id, activeProduct.title, activeProduct.price, activeProduct.cashback);
    setIsCheckoutOpen(true);
  };

  const handleConfirmRockOrder = async () => {
    if (!activeProduct) return;
    setIsProcessingOrder(true);

    try {
      const orderId = `ped_rock_${Date.now().toString().slice(-6)}`;
      const earnedNfs = activeProduct.cashbackNfs;

      // Persistência imediata no livro-razão (Sandbox Store Ledger)
      sharedSandboxStore.addTransaction({
        id: `tx-mkp-${Date.now()}`,
        userId: activeUser.id,
        userName: activeUser.fullName,
        amount: earnedNfs,
        description: `Cashback Compra ${activeProduct.title} — Loja Oficial Netfits (${activeProduct.seller}) [Pedido #${orderId}]`,
        category: "shop",
        timestamp: new Date().toISOString(),
      });

      // Avaliação de Badges de Compra
      badgesStore.evaluate();

      setConfirmedOrder({
        orderId,
        productTitle: activeProduct.title,
        productPrice: activeProduct.price,
        cashbackNfs: earnedNfs,
        seller: activeProduct.seller,
        date: new Date().toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

      toast.success(`Pedido #${orderId} aprovado na Rock Encantech!`, {
        description: `+${earnedNfs} nfs creditados imediatamente na sua carteira.`,
        duration: 5000,
      });
    } catch {
      toast.error("Ocorreu uma instabilidade na conexão com a Rock Encantech.");
    } finally {
      setIsProcessingOrder(false);
    }
  };

  const handleCloseCheckoutModal = () => {
    setIsCheckoutOpen(false);
    setConfirmedOrder(null);
  };

  // =========================================================================
  // CENÁRIO 1: PRODUTO SELECIONADO — RENDERIZA A PÁGINA DEDICADA DO PRODUTO NO SHOP
  // =========================================================================
  if (activeProduct) {
    return (
      <div className="relative w-full min-h-[calc(100dvh-116px)] bg-zinc-950 text-white select-none pb-28 overflow-y-auto">
        {/* TopBar do Produto no Shop */}
        <div className="w-full bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800 px-4 py-3 flex items-center justify-between sticky top-0 z-20 shadow-md">
          <button
            type="button"
            onClick={handleClearSelection}
            className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition cursor-pointer"
          >
            <ArrowLeft className="size-4 text-purple-400" />
            <span>Ver Catálogo Geral</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-zinc-400">Saldo:</span>
            <span className="text-xs font-black text-lime-400">{balance.toLocaleString()} nfs</span>
          </div>
        </div>

        {/* Conteúdo Principal da Página do Produto */}
        <div className="p-4 max-w-md mx-auto space-y-4">
          {/* Card da Foto */}
          <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl group">
            <img
              src={activeProduct.image}
              alt={activeProduct.title}
              className="w-full aspect-square object-cover"
            />
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 font-extrabold text-[10px] uppercase tracking-wider backdrop-blur-sm">
                Item Homologado
              </span>
              <span className="px-2.5 py-1 rounded-full bg-lime-400/90 text-zinc-950 font-black text-[10px] uppercase tracking-wider">
                {activeProduct.cashback}
              </span>
            </div>

            <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-[10px] text-zinc-300">
              Vendido por {activeProduct.seller}
            </div>
          </div>

          {/* Título, Preço e Cashback */}
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 space-y-2">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-purple-400 uppercase tracking-wider">
              <span>{activeProduct.seller}</span>
              <span>·</span>
              <span>Parceiro Oficial Rock Encantech</span>
            </div>

            <h1 className="text-base font-extrabold text-white leading-tight">
              {activeProduct.title}
            </h1>

            <div className="flex items-baseline justify-between pt-1 border-t border-zinc-800/80">
              <div>
                <span className="text-[10px] text-zinc-400 block font-semibold">Preço Oficial</span>
                <span className="text-2xl font-black text-lime-400">{activeProduct.price}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-zinc-400 block font-semibold">Cashback Garantido</span>
                <span className="text-xs font-extrabold text-purple-300 bg-purple-950/60 px-2 py-1 rounded-lg border border-purple-500/30">
                  {activeProduct.cashback} (4 nfs / R$ 1)
                </span>
              </div>
            </div>
          </div>

          {/* Selos de Confiança e Benefícios */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2.5 bg-zinc-900/60 border border-zinc-800 rounded-xl space-y-1">
              <Truck className="size-4 text-purple-400 mx-auto" />
              <span className="text-[10px] font-bold text-zinc-300 block">Frete Grátis</span>
              <span className="text-[9px] text-zinc-500 block">Assinantes Club</span>
            </div>
            <div className="p-2.5 bg-zinc-900/60 border border-zinc-800 rounded-xl space-y-1">
              <RotateCcw className="size-4 text-purple-400 mx-auto" />
              <span className="text-[10px] font-bold text-zinc-300 block">30 Dias Troca</span>
              <span className="text-[9px] text-zinc-500 block">Garantia Netshoes</span>
            </div>
            <div className="p-2.5 bg-zinc-900/60 border border-zinc-800 rounded-xl space-y-1">
              <ShieldCheck className="size-4 text-lime-400 mx-auto" />
              <span className="text-[10px] font-bold text-zinc-300 block">Autenticidade</span>
              <span className="text-[9px] text-zinc-500 block">100% Original</span>
            </div>
          </div>

          {/* Destaques Técnicos do Produto */}
          {activeProduct.highlights && activeProduct.highlights.length > 0 && (
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 space-y-2.5">
              <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-lime-400" />
                Destaques Técnicos do Produto
              </h3>

              <ul className="space-y-1.5 text-[11px] text-zinc-300">
                {activeProduct.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="size-3.5 text-lime-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Especificações Técnicas */}
          {activeProduct.specs && activeProduct.specs.length > 0 && (
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-4 space-y-2">
              <h4 className="text-xs font-bold text-zinc-300">Especificações Técnicas</h4>
              <div className="divide-y divide-zinc-800/60 text-[11px]">
                {activeProduct.specs.map((spec, idx) => (
                  <div key={idx} className="py-1.5 flex items-center justify-between">
                    <span className="text-zinc-400">{spec.label}</span>
                    <span className="text-zinc-200 font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fulfillment Oficial Rock Encantech */}
          <div className="bg-purple-950/20 border border-purple-500/20 rounded-2xl p-3.5 flex items-start gap-3">
            <BadgeCheck className="size-5 text-purple-400 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <p className="text-xs font-bold text-white">Catálogo Integrado Rock Encantech</p>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                Produto comercializado dentro do <strong className="text-zinc-200">Netfits Shop</strong> com fulfillment parceiro ({activeProduct.seller}) e entregue com nota fiscal. Toda compra acumula <strong className="text-lime-400">4,00 nfs por R$ 1,00</strong> diretamente na sua conta.
              </p>
            </div>
          </div>
        </div>

        {/* Barra Fixa Inferior com CTA de Compra Direta */}
        <div className="fixed bottom-[calc(env(safe-area-inset-bottom,0px)+3.75rem)] left-0 right-0 max-w-md mx-auto px-4 z-30">
          <div className="bg-zinc-900/95 backdrop-blur-md border border-zinc-800 rounded-2xl p-3 shadow-2xl flex items-center justify-between gap-3">
            <div>
              <span className="text-[9px] uppercase font-bold text-zinc-400 block">Total</span>
              <span className="text-base font-black text-lime-400">{activeProduct.price}</span>
            </div>

            <button
              type="button"
              onClick={handleOpenCheckout}
              className="flex-1 py-3 px-4 rounded-xl bg-lime-400 hover:bg-lime-500 text-zinc-950 font-black text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <ShoppingBag className="size-4" />
              <span>Comprar no Shop Netfits ({activeProduct.cashback})</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODAL DE CHECKOUT OFICIAL ROCK ENCANTECH (STOREID: RhOFkbZJIN) */}
        {/* ========================================================================= */}
        {isCheckoutOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
            <div className="bg-zinc-950 border border-zinc-800 w-full max-w-md rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
              {/* Header do Checkout */}
              <div className="px-5 py-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-7 rounded-lg bg-purple-600/20 text-purple-400 grid place-items-center">
                    <Lock className="size-3.5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-white leading-tight">
                      Checkout Oficial Rock Encantech
                    </h3>
                    <p className="text-[10px] text-zinc-400 flex items-center gap-1">
                      <span>StoreId: <strong className="text-purple-300">RhOFkbZJIN</strong></span>
                      <span>·</span>
                      <span className="text-emerald-400 font-bold">SSO Federado</span>
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCloseCheckoutModal}
                  className="size-8 rounded-full bg-zinc-800/80 text-zinc-400 hover:text-white flex items-center justify-center transition cursor-pointer"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Corpo do Checkout */}
              <div className="p-5 space-y-4 overflow-y-auto">
                {confirmedOrder ? (
                  /* Tela de Confirmação de Sucesso */
                  <div className="space-y-4 text-center py-4">
                    <div className="size-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto grid place-items-center ring-4 ring-emerald-500/10">
                      <CheckCheck className="size-8" />
                    </div>

                    <div className="space-y-1">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Pedido Concluído com Sucesso
                      </span>
                      <h4 className="text-base font-extrabold text-white">
                        Compra Confirmada no Shop Netfits!
                      </h4>
                      <p className="text-xs text-zinc-400">
                        Seu pedido foi transmitido para a esteira oficial do parceiro <strong>{confirmedOrder.seller}</strong> via Rock Encantech.
                      </p>
                    </div>

                    {/* Recibo do Pedido */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-left space-y-2.5 text-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                        <span className="text-zinc-400">Identificador do Pedido:</span>
                        <span className="font-mono font-bold text-purple-300">{confirmedOrder.orderId}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-400">Item Adquirido:</span>
                        <span className="font-semibold text-white truncate max-w-[200px]">{confirmedOrder.productTitle}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-400">Valor Total Pago:</span>
                        <span className="font-black text-white">{confirmedOrder.productPrice}</span>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
                        <span className="text-zinc-400 font-semibold">Cashback Instantâneo:</span>
                        <span className="font-black text-lime-400 bg-lime-400/10 px-2 py-0.5 rounded-md border border-lime-400/20">
                          +{confirmedOrder.cashbackNfs} nfs creditados
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <Link
                        to="/wallet"
                        className="w-full py-3 rounded-xl bg-lime-400 hover:bg-lime-500 text-zinc-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg transition active:scale-98"
                      >
                        <Receipt className="size-4" />
                        <span>Ver Saldo Atualizado na Carteira</span>
                      </Link>

                      <button
                        type="button"
                        onClick={handleCloseCheckoutModal}
                        className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-semibold text-xs transition"
                      >
                        Continuar Comprando
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Formulário de Conclusão do Pedido */
                  <>
                    {/* Resumo do Produto */}
                    <div className="flex items-center gap-3 p-3 bg-zinc-900 border border-zinc-800 rounded-2xl">
                      <img
                        src={activeProduct.image}
                        alt={activeProduct.title}
                        className="size-14 rounded-xl object-cover border border-zinc-800 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-white truncate">
                          {activeProduct.title}
                        </h4>
                        <p className="text-[10px] text-zinc-400">
                          Vendido e entregue por <strong className="text-zinc-300">{activeProduct.seller}</strong>
                        </p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs font-black text-lime-400">{activeProduct.price}</span>
                          <span className="text-[10px] font-extrabold text-purple-300 bg-purple-950/80 px-1.5 py-0.5 rounded border border-purple-500/30">
                            {activeProduct.cashback}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Dados Sincronizados via SSO (JWT RS256) */}
                    <div className="p-3.5 bg-zinc-900/60 border border-zinc-800 rounded-2xl space-y-1.5 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                          Dados de Entrega (SSO Netfits)
                        </span>
                        <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="size-3" />
                          Sincronizado
                        </span>
                      </div>
                      <p className="font-semibold text-white">{activeUser.fullName}</p>
                      <p className="text-zinc-400 text-[11px]">
                        CPF: {activeUser.cpf || "129.044.128-67"} · {activeUser.email || "atleta@netfits.com.br"}
                      </p>
                      <p className="text-zinc-400 text-[11px]">
                        Entrega: {activeUser.street ? `${activeUser.street}, ${activeUser.number}` : "Av. Brigadeiro Faria Lima, 3477"} — São Paulo/SP
                      </p>
                    </div>

                    {/* Regra de Cashback & Margem */}
                    <div className="p-3 bg-purple-950/20 border border-purple-500/20 rounded-2xl text-[11px] text-zinc-300 space-y-1">
                      <div className="flex items-center justify-between font-bold text-white">
                        <span>Cashback Garantido</span>
                        <span className="text-lime-400 font-black">{activeProduct.cashback}</span>
                      </div>
                      <p className="text-zinc-400 text-[10px] leading-relaxed">
                        Compra quitada em dinheiro (Pix/Cartão): Acúmulo pleno de <strong>4,00 nfs por R$ 1,00</strong> provisionado e auditado conforme o Business Case Oficial.
                      </p>
                    </div>

                    {/* Escolha do Meio de Pagamento */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                        Forma de Pagamento Oficial Rock
                      </span>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("pix")}
                          className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition cursor-pointer ${
                            paymentMethod === "pix"
                              ? "bg-purple-950/40 border-purple-500 text-white"
                              : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
                          }`}
                        >
                          <QrCode className="size-4 text-purple-400" />
                          <div>
                            <span className="text-xs font-bold block">Pix Oficial</span>
                            <span className="text-[9px] text-zinc-400">Aprovação imediata</span>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setPaymentMethod("card")}
                          className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition cursor-pointer ${
                            paymentMethod === "card"
                              ? "bg-purple-950/40 border-purple-500 text-white"
                              : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
                          }`}
                        >
                          <CreditCard className="size-4 text-purple-400" />
                          <div>
                            <span className="text-xs font-bold block">Cartão de Crédito</span>
                            <span className="text-[9px] text-zinc-400">Gateway Rock</span>
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* CTA de Finalização */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleConfirmRockOrder}
                        disabled={isProcessingOrder}
                        className="w-full py-3.5 rounded-xl bg-lime-400 hover:bg-lime-500 disabled:opacity-50 text-zinc-950 font-black text-xs shadow-xl transition flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                      >
                        {isProcessingOrder ? (
                          <span>Transmitindo à esteira Rock Encantech...</span>
                        ) : (
                          <>
                            <ShoppingBag className="size-4" />
                            <span>Confirmar Compra ({activeProduct.price})</span>
                          </>
                        )}
                      </button>
                      <p className="text-[9px] text-zinc-500 text-center mt-2">
                        Transação protegida por criptografia RS256 e esteira antifraude Rock Encantech.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // CENÁRIO 2: CATÁLOGO GERAL DO SHOP (QUANDO NENHUM PRODUTO ESPECÍFICO ESTÁ SELECIONADO)
  // =========================================================================
  const featuredCap = OFFICIAL_SHOP_CATALOG[0];

  return (
    <div className="relative w-full min-h-[calc(100dvh-116px)] bg-zinc-950 select-none overflow-y-auto">
      <div className="p-4 max-w-md mx-auto space-y-4 pt-4 pb-20">
        {/* Header Card de Saldo e Paridade */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-5 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-xl bg-purple-600/20 text-purple-400 grid place-items-center">
                <ShoppingBag className="size-4" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white leading-tight">Netfits Shop</h2>
                <p className="text-[10px] text-zinc-400">Loja Oficial & Rock Encantech</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>SSO Ativo</span>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-zinc-800/80 flex items-baseline justify-between">
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-0.5">
                Saldo na Carteira
              </p>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-black text-white tracking-tight">
                  {balance.toLocaleString("pt-BR")}
                </span>
                <span className="text-xs font-bold text-lime-400">nfs</span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] text-zinc-400 block font-semibold">Regra de Cashback</span>
              <span className="text-xs font-black text-purple-300">4,00 nfs / R$ 1,00</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BANNER DE DESTAQUE HOMOLOGADO: BONÉ MIZUNO RUN SKY OFF WHITE */}
        {/* ========================================================================= */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-950/40 via-zinc-900 to-zinc-950 border border-purple-500/40 p-4 shadow-xl space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 font-extrabold text-[10px] uppercase tracking-wider">
              Destaque Homologado
            </span>
            <span className="text-[10px] font-bold text-zinc-400">
              Vendido por Netshoes
            </span>
          </div>

          <div className="flex items-center gap-3">
            <img
              src={featuredCap.image}
              alt={featuredCap.title}
              className="size-20 rounded-2xl object-cover border border-purple-500/30 shrink-0 shadow-md"
            />
            <div className="space-y-1 min-w-0">
              <h3 className="text-xs font-extrabold text-white leading-snug">
                {featuredCap.title}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-base font-black text-lime-400">{featuredCap.price}</span>
                <span className="text-[10px] font-bold text-purple-300 bg-purple-950/80 px-1.5 py-0.5 rounded border border-purple-500/30">
                  {featuredCap.cashback}
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleSelectProduct(featuredCap)}
            className="w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <span>Ver Detalhes do Produto (+360 nfs)</span>
            <ArrowUpRight className="size-3.5" />
          </button>
        </div>

        {/* Seção do Catálogo com Todos os Produtos */}
        <div className="space-y-3 pt-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
              Catálogo Oficial do Shop
            </h3>
            <span className="text-[10px] text-zinc-500">
              {OFFICIAL_SHOP_CATALOG.length} produtos credenciados
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {OFFICIAL_SHOP_CATALOG.map((prod) => (
              <div
                key={prod.id}
                onClick={() => handleSelectProduct(prod)}
                className="bg-zinc-900/80 border border-zinc-800 hover:border-purple-500/40 rounded-2xl overflow-hidden p-2.5 space-y-2 cursor-pointer transition-all active:scale-98 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-zinc-950 mb-2">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <span className="absolute top-1.5 right-1.5 text-[9px] font-black px-1.5 py-0.5 rounded-md bg-lime-400 text-zinc-950">
                      {prod.cashback}
                    </span>
                  </div>

                  <span className="text-[9px] font-bold text-purple-400 block truncate">
                    {prod.brand} · {prod.seller}
                  </span>
                  <h4 className="text-[11px] font-bold text-white line-clamp-2 leading-tight">
                    {prod.title}
                  </h4>
                </div>

                <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-xs font-black text-lime-400">{prod.price}</span>
                  <span className="text-[10px] text-purple-400 font-bold group-hover:translate-x-0.5 transition">
                    Ver →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card de Regras Oficiais do Shop */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 space-y-2 text-xs">
          <div className="flex items-center gap-2 text-white font-bold">
            <ShieldCheck className="size-4 text-lime-400" />
            <span>Garantias & Regras Operacionais</span>
          </div>
          <ul className="space-y-1 text-[11px] text-zinc-400">
            <li>• Acúmulo direto de 4 nfs por cada R$ 1,00 gasto no Shop.</li>
            <li>• Compras pagas em Pix ou Cartão recebem cashback imediato.</li>
            <li>• Fulfillment garantido por marcas oficiais com nota fiscal.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
