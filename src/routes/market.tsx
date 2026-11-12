import { trackShopView, trackProductSelect } from "@/lib/analytics";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  ShoppingBag,
  ArrowLeft,
  Search,
  Zap,
  Star,
  Tag,
  CheckCircle2,
  Globe,
  SlidersHorizontal,
} from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";
import { toast } from "sonner";
import { useWallet } from "@/lib/wallet-store";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { getMkplaceStoreUrl, launchMkplaceShop } from "@/lib/integrations/mkplace-client";
import { badgesStore } from "@/lib/badges-store";
import { shopSelectionStore } from "@/lib/shop-selection-store";
import { appLockStore } from "@/lib/app-lock-store";
import { ProductDetailSheet, type DetailProduct } from "@/components/ProductDetailSheet";

// Importações de Imagens Oficiais dos Produtos Bundladas
import productLiquidz from "@/assets/product-liquidz.jpg";
import productShoes from "@/assets/product-shoes.jpg";
import productRing from "@/assets/product-ring.jpg";
import productGel from "@/assets/product-gel.jpg";
import productMizunoCap from "@/assets/product-mizuno-cap.jpg";
import apparelTee from "@/assets/apparel-tee.jpg";
import apparelShorts from "@/assets/apparel-shorts.jpg";
import apparelSocks from "@/assets/apparel-socks.jpg";
import gearVest from "@/assets/gear-vest.jpg";
import productBike from "@/assets/product-bike.jpg";
import productHelmet from "@/assets/product-helmet.jpg";
import productSwim from "@/assets/product-swim.jpg";
import productGlasses from "@/assets/product-glasses.jpg";
import productWhey from "@/assets/product-whey.jpg";
import productPalatinose from "@/assets/product-palatinose.jpg";
import productCreatine from "@/assets/product-creatine.jpg";
import productAppleWatch from "@/assets/product-applewatch.jpg";
import productJblBone from "@/assets/product-jbl-bone.jpg";

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
      { title: "Netfits Shop — Loja Oficial & Catálogo Integrado" },
      {
        name: "description",
        content: "Loja Oficial Netfits com acúmulo de 4 nfs por R$ 1,00 gasto, produtos curados e integração Rock Encantech.",
      },
      { property: "og:title", content: "Netfits Shop — Loja Oficial" },
    ],
  }),
  component: MarketEmbeddedPage,
});

// Categorias Oficiais do Catálogo
const SHOP_CATEGORIES = [
  { id: "all", label: "Todos os Produtos" },
  { id: "nutricao", label: "Nutrição & Suplementos" },
  { id: "corrida", label: "Calçados & Corrida" },
  { id: "vestuario", label: "Vestuário Esportivo" },
  { id: "tech", label: "Tecnologia & Wearables" },
  { id: "equipamentos", label: "Equipamentos & Acessórios" },
];

// Catálogo Canônico com Cashback 4 nfs / R$ 1,00 (Regra Oficial GEMINI.md)
const CURATED_PRODUCTS: DetailProduct[] = [
  {
    id: "mizuno-run-sky-cap",
    title: "Boné Aba Curva Mizuno Run Sky — Off White",
    price: "R$ 89,46",
    image: productMizunoCap,
    cashback: "+358 nfs",
    badge: "Oficial Mizuno",
    tag: "vestuario",
    seller: "Mizuno Brasil",
    sellerId: "mizuno",
    sellerInitials: "MZ",
    rating: 4.9,
    reviews: "348",
    sold: "1.2k",
    description: "Boné de corrida respirável com tecnologia UV50+ e drenagem rápida de suor, essencial para termorregulação craniana em treinos longos.",
    highlights: ["Proteção UV50+ certificada", "Tecido ultra-leve 54g", "Faixa interna anti-sudorese"],
  },
  {
    id: "asics-novablast-4",
    title: "Tênis Asics NovaBlast 4 — Masculino / Feminino",
    price: "R$ 1.290,00",
    image: productShoes,
    cashback: "+5.160 nfs",
    badge: "Mais Vendido",
    tag: "corrida",
    seller: "Centauro Oficial",
    sellerId: "centauro",
    sellerInitials: "CT",
    rating: 5.0,
    reviews: "892",
    sold: "3.4k",
    description: "Amortecimento responsivo FF BLAST™ PLUS ECO com geometria de sola inspirada em trampolim para máxima devolução de energia e proteção articular.",
    highlights: ["Espuma bio-based sustentável", "Drop 8mm para passadas dinâmicas", "Cabedal em mesh respirável"],
  },
  {
    id: "liquidz-jaboticaba",
    title: "Liquidz Energético Natural de Jaboticaba 250ml (Pack x6)",
    price: "R$ 99,55",
    image: productLiquidz,
    cashback: "+398 nfs",
    badge: "Super Cashback",
    tag: "nutricao",
    seller: "Liquidz Oficial",
    sellerId: "liquidz",
    sellerInitials: "LQ",
    rating: 4.8,
    reviews: "215",
    sold: "980",
    description: "Bebida funcional à base de superfrutas brasileiras, cafeína natural do guaraná e eletrólitos balanceados sem adição de açúcares refinados.",
    highlights: ["100% natural e vegano", "Eletrólitos biodisponíveis", "Energia limpa sem crash"],
  },
  {
    id: "dux-whey-isolate",
    title: "Whey Protein Isolate 900g — Baunilha Suíça",
    price: "R$ 249,00",
    image: productWhey,
    cashback: "+996 nfs",
    badge: "Alta Pureza",
    tag: "nutricao",
    seller: "Netshoes Saúde",
    sellerId: "netshoes",
    sellerInitials: "NS",
    rating: 4.9,
    reviews: "1.4k",
    sold: "5.1k",
    description: "Proteína isolada do soro do leite com 24g de proteína por dose, rápida absorção, zero gordura e baixíssimo teor de carboidratos.",
    highlights: ["24g de proteína por porção", "5.5g de BCAAs naturais", "Livre de glúten e corantes"],
  },
  {
    id: "creatina-monohidratada",
    title: "Creatina Creapure® Monohidratada 300g 100% Pura",
    price: "R$ 179,00",
    image: productCreatine,
    cashback: "+716 nfs",
    badge: "Essencial Longevidade",
    tag: "nutricao",
    seller: "Rock Encantech",
    sellerId: "rock",
    sellerInitials: "RE",
    rating: 5.0,
    reviews: "956",
    sold: "4.2k",
    description: "Selo Creapure alemão. Aumenta a potência muscular, regeneração de ATP, força em treinos resistidos e preservação cognitiva na maturidade.",
    highlights: ["Matéria-prima alemã Creapure", "Zero sódio e solventes", "Solubilidade instantânea"],
  },
  {
    id: "palatinose-endurance",
    title: "Palatinose™ Endurance Carboidrato Lento 400g",
    price: "R$ 139,00",
    image: productPalatinose,
    cashback: "+556 nfs",
    badge: "Baixo Índice Glicêmico",
    tag: "nutricao",
    seller: "Probiótica Hub",
    sellerId: "probiotica",
    sellerInitials: "PB",
    rating: 4.8,
    reviews: "312",
    sold: "1.5k",
    description: "Isomaltulose pura que fornece fluxo constante de energia durante treinos de endurance acima de 60 minutos sem gerar picos de insulina.",
    highlights: ["Baixo índice glicêmico (IG 32)", "Oxidação eficiente de gorduras", "Tolerância gástrica excelente"],
  },
  {
    id: "apple-watch-s10",
    title: "Apple Watch Series 10 GPS 46mm Alumínio",
    price: "R$ 4.299,00",
    image: productAppleWatch,
    cashback: "+17.196 nfs",
    badge: "Hardware Oficial",
    tag: "tech",
    seller: "iPlace / Fast Shop",
    sellerId: "iplace",
    sellerInitials: "IP",
    rating: 5.0,
    reviews: "420",
    sold: "850",
    description: "Smartwatch com ECG, medição contínua de oxigênio, sensores ópticos de FC de 3ª geração e sincronização automática de treinos na Netfits.",
    highlights: ["Sincronização Apple Health", "Tela OLED sempre ativa", "Resistente à água 50m"],
  },
  {
    id: "core-ring-sensor",
    title: "Core Ring Biomarkers & Sleep Smart Ring",
    price: "R$ 1.890,00",
    image: productRing,
    cashback: "+7.560 nfs",
    badge: "Biomarcadores",
    tag: "tech",
    seller: "Netfits Tech Labs",
    sellerId: "netfits_labs",
    sellerInitials: "NL",
    rating: 4.9,
    reviews: "180",
    sold: "410",
    description: "Anel inteligente ultra-discreto em titânio aeroespacial para monitoramento de variabilidade de frequência cardíaca (VFC), sono REM e temperatura.",
    highlights: ["Bateria para 7 dias", "Titânio grau cirúrgico", "VFC e temperatura dérmica"],
  },
  {
    id: "jbl-soundgear-sense",
    title: "JBL Soundgear Sense Fone por Condução de Ar Aberto",
    price: "R$ 1.199,00",
    image: productJblBone,
    cashback: "+4.796 nfs",
    badge: "Segurança na Corrida",
    tag: "tech",
    seller: "Centauro Oficial",
    sellerId: "centauro",
    sellerInitials: "CT",
    rating: 4.8,
    reviews: "340",
    sold: "1.1k",
    description: "Tecnologia OpenSound que preserva a percepção auditiva do trânsito ao redor durante corridas de rua e ciclismo, com som de alta definição.",
    highlights: ["Design de orelha aberta", "Proteção IP54 contra chuva e suor", "Até 24h de bateria"],
  },
  {
    id: "camiseta-tech-dry",
    title: "Camiseta Tech Dry UV50+ Anti-Fadiga",
    price: "R$ 219,00",
    image: apparelTee,
    cashback: "+876 nfs",
    badge: "Vestuário Pro",
    tag: "vestuario",
    seller: "Track&Field Parceiro",
    sellerId: "tf",
    sellerInitials: "TF",
    rating: 4.8,
    reviews: "520",
    sold: "2.3k",
    description: "Tecido tecnológico com microfilamentos que aceleram a evaporação da umidade e impedem a proliferação bacteriana causadora de odores.",
    highlights: ["Secagem 3x mais rápida", "Costuras planas anti-atrito", "Tratamento bacteriostático"],
  },
  {
    id: "short-stride-5",
    title: "Short Stride 5\" Running com Bolso para Celular",
    price: "R$ 259,00",
    image: apparelShorts,
    cashback: "+1.036 nfs",
    badge: "Mais Confortável",
    tag: "vestuario",
    seller: "Centauro Oficial",
    sellerId: "centauro",
    sellerInitials: "CT",
    rating: 4.9,
    reviews: "410",
    sold: "1.8k",
    description: "Short leve com forro elástico compressivo embutido e bolso impermeável que impede o celular de balançar durante sprints ou maratonas.",
    highlights: ["Bolso interno anti-balanço", "Cós com ajuste anatômico", "Detalhes refletivos 360°"],
  },
  {
    id: "meias-compress-run",
    title: "Meias Compress Run Cano Médio Graduada",
    price: "R$ 89,00",
    image: apparelSocks,
    cashback: "+356 nfs",
    badge: "Recuperação",
    tag: "vestuario",
    seller: "Netfits Shop",
    sellerId: "netfits_shop",
    sellerInitials: "NF",
    rating: 4.9,
    reviews: "680",
    sold: "3.9k",
    description: "Compressão gradual de 15-20 mmHg que estimula o retorno venoso, reduz a vibração muscular na panturrilha e previne bolhas na planta do pé.",
    highlights: ["Compressão 15-20 mmHg", "Arco plantar reforçado", "Ponteira sem costura"],
  },
  {
    id: "colete-hidratacao-5l",
    title: "Colete de Hidratação Trail Running 5L com 2 Soft Flasks",
    price: "R$ 690,00",
    image: gearVest,
    cashback: "+2.760 nfs",
    badge: "Endurance",
    tag: "equipamentos",
    seller: "Salomon Brasil",
    sellerId: "salomon",
    sellerInitials: "SL",
    rating: 5.0,
    reviews: "290",
    sold: "740",
    description: "Ajuste elástico SensiFit™ que abraça o tórax sem restringir a expansão pulmonar. Acompanha duas garrafas flexíveis de 500ml.",
    highlights: ["Inclui 2x Soft Flask 500ml", "Peso pluma de 190g", "Compartimento para bastões"],
  },
  {
    id: "speed-carbon-aero",
    title: "Bicicleta Speed Carbon Aero R10 Shimano Ultegra Di2",
    price: "R$ 18.900,00",
    image: productBike,
    cashback: "+75.600 nfs",
    badge: "Alta Performance",
    tag: "equipamentos",
    seller: "Semexe / D2C",
    sellerId: "semexe",
    sellerInitials: "SX",
    rating: 5.0,
    reviews: "64",
    sold: "120",
    description: "Quadro aerodinâmico em fibra de carbono Toray T800 com câmbio eletrônico sem fio Shimano Ultegra Di2 de 12 velocidades e freios a disco hidráulicos.",
    highlights: ["Câmbio Shimano Di2 Eletrônico", "Rodas Carbono Perfil 50mm", "Cabeamento 100% integrado"],
  },
  {
    id: "capacete-aero-vent",
    title: "Capacete Ciclismo Aero Vent Pro MIPS",
    price: "R$ 899,00",
    image: productHelmet,
    cashback: "+3.596 nfs",
    badge: "Segurança Máxima",
    tag: "equipamentos",
    seller: "Centauro Oficial",
    sellerId: "centauro",
    sellerInitials: "CT",
    rating: 4.9,
    reviews: "155",
    sold: "530",
    description: "Tecnologia sueca MIPS de proteção contra forças rotacionais em impactos oblíquos com túnel de vento otimizado para refrigeração da calota craniana.",
    highlights: ["Sistema de segurança MIPS", "21 aberturas de ventilação", "Ajuste milimétrico BOA"],
  },
  {
    id: "kit-natacao-pro-swim",
    title: "Kit Natação Pro Swim: Óculos Espelhado + Touca Silicone",
    price: "R$ 349,00",
    image: productSwim,
    cashback: "+1.396 nfs",
    badge: "Triathlon & Natação",
    tag: "equipamentos",
    seller: "Speedo Parceiro",
    sellerId: "speedo",
    sellerInitials: "SP",
    rating: 4.8,
    reviews: "230",
    sold: "910",
    description: "Lentes curvas hidrodinâmicas com tratamento antiembaçante duradouro e vedação em silicone macio que impede marcas ao redor dos olhos.",
    highlights: ["Tratamento Anti-Fog Pro", "Visão panorâmica 180°", "Proteção UVA/UVB total"],
  },
  {
    id: "oculos-bike-photochromic",
    title: "Óculos Ciclismo Photochromic UV400 com Lente Inteligente",
    price: "R$ 549,00",
    image: productGlasses,
    cashback: "+2.196 nfs",
    badge: "Lente Fotossensível",
    tag: "equipamentos",
    seller: "Oakley Parceiro",
    sellerId: "oakley",
    sellerInitials: "OK",
    rating: 4.9,
    reviews: "310",
    sold: "1.4k",
    description: "Lentes fotossensíveis que escurecem e clareiam automaticamente conforme a intensidade da luz solar em segundos, ideal para pedais ao amanhecer.",
    highlights: ["Transição rápida de luz", "Lente em policarbonato balístico", "Hastes emborrachadas anti-queda"],
  },
  {
    id: "energy-gel-pack-12",
    title: "Energy Gel Pack x12 Sachês Baunilha & Cafeína",
    price: "R$ 168,00",
    image: productGel,
    cashback: "+672 nfs",
    badge: "Reposição Imediata",
    tag: "nutricao",
    seller: "Gu Energy Parceiro",
    sellerId: "gu",
    sellerInitials: "GU",
    rating: 4.9,
    reviews: "450",
    sold: "3.1k",
    description: "Mistura ideal de maltodextrina e frutose (proporção 2:1) com sódio, potássio e 20mg de cafeína para absorção rápida sem desconforto gastrointestinal.",
    highlights: ["22g de carboidratos por sachê", "20mg cafeína para foco", "Sódio para retenção hídrica"],
  },
];

function MarketEmbeddedPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const { balance } = useWallet();
  const activeUser = sharedSandboxStore.useActiveUser();

  // Modos de Visualização: "native" (Catálogo Nativo Oficial) e "web" (Loja Integrada Iframe)
  const [viewMode, setViewMode] = useState<"native" | "web">("native");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<DetailProduct | null>(null);

  // Estados da Loja Iframe
  const [storeUrl, setStoreUrl] = useState<string>("");
  const [isIframeLoading, setIsIframeLoading] = useState<boolean>(false);
  const [reloadKey, setReloadKey] = useState<number>(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Tolerância de checkout ativa enquanto na tela do Shop
  useEffect(() => {
    appLockStore.enterCheckoutMode();
    return () => {
      appLockStore.exitCheckoutMode();
    };
  }, []);

  // Registra visualização e visita no Shop
  useEffect(() => {
    badgesStore.recordShopVisit();
    trackShopView(selectedCategory);
  }, [selectedCategory]);

  // Se o usuário veio com um produto na URL, busca o produto no catálogo nativo
  useEffect(() => {
    if (search.product) {
      const found = CURATED_PRODUCTS.find(
        (p) =>
          p.id.toLowerCase() === search.product?.toLowerCase() ||
          p.title.toLowerCase().includes(search.product?.toLowerCase() || "")
      );
      if (found) {
        setSelectedDetailProduct(found);
      }
    }
  }, [search.product]);

  // Carrega URL da loja Rock Encantech quando o modo Web for acionado
  useEffect(() => {
    if (viewMode === "web") {
      setIsIframeLoading(true);
      getMkplaceStoreUrl(activeUser.id)
        .then((url) => {
          setStoreUrl(url);
          setIsIframeLoading(false);
        })
        .catch(() => {
          // Se a loja web falhar ou for bloqueada, retorna suavemente para o catálogo nativo sem travar o usuário
          toast.info("Acessando Catálogo Oficial Netfits.");
          setViewMode("native");
          setIsIframeLoading(false);
        });
    }
  }, [viewMode, activeUser.id, reloadKey]);

  // Produtos filtrados por categoria e termo de busca
  const filteredProducts = useMemo(() => {
    return CURATED_PRODUCTS.filter((prod) => {
      const matchesCategory =
        selectedCategory === "all" || prod.tag === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        prod.title.toLowerCase().includes(q) ||
        (prod.seller && prod.seller.toLowerCase().includes(q)) ||
        (prod.badge && prod.badge.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenExternal = () => {
    launchMkplaceShop({
      userId: activeUser.id,
    });
  };

  const handleSelectProduct = (prod: DetailProduct) => {
    trackProductSelect(prod.id, prod.title, prod.price, prod.seller);
    setSelectedDetailProduct(prod);
  };

  return (
    <div className="relative w-full min-h-[calc(100dvh-116px)] bg-zinc-950 text-white select-none overflow-y-auto pb-12">
      {/* 1. Header do Shop: Saldo, Troca de Modo & Ações */}
      <div className="sticky top-0 z-20 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800 px-4 py-3 space-y-3">
        <div className="flex items-center justify-between gap-2">
          {/* Lado Esquerdo: Identificação e Saldo */}
          <div className="flex items-center gap-2.5">
            <div className="size-8 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 grid place-items-center">
              <ShoppingBag className="size-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm text-white">Netfits Shop</span>
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-[11px] text-zinc-400">
                Seu Saldo: <strong className="text-lime-400 font-mono">{balance.toLocaleString()} nfs</strong>
              </p>
            </div>
          </div>

          {/* Lado Direito: Alternador de Visualização & Abertura Externa */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setViewMode(viewMode === "native" ? "web" : "native")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition active:scale-95 cursor-pointer border ${
                viewMode === "native"
                  ? "bg-purple-600 text-white border-purple-500 shadow-sm"
                  : "bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700"
              }`}
            >
              {viewMode === "native" ? (
                <>
                  <ShoppingBag className="size-3.5" />
                  <span>Catálogo</span>
                </>
              ) : (
                <>
                  <Globe className="size-3.5" />
                  <span>Loja Web</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleOpenExternal}
              className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 transition cursor-pointer"
              title="Abrir no Navegador"
              aria-label="Abrir loja oficial no navegador"
            >
              <ExternalLink className="size-3.5" />
            </button>
          </div>
        </div>

        {/* 2. Banner Oficial de Cashback (Regra GEMINI.md: 4 nfs por R$ 1,00) */}
        {viewMode === "native" && (
          <div className="bg-gradient-to-r from-purple-900/60 via-zinc-900 to-lime-950/60 border border-purple-500/30 rounded-2xl p-2.5 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-lg bg-lime-400 text-zinc-950 font-black text-[10px]">
                4x
              </span>
              <span className="text-[11px] text-zinc-300">
                Ganhe <strong>4 nfs a cada R$ 1,00</strong> em todo o catálogo oficial.
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-lime-400 font-bold shrink-0">
              <ShieldCheck className="size-3.5" />
              <span>Garantido</span>
            </div>
          </div>
        )}

        {/* 3. Barra de Busca e Filtros de Categoria (Apenas no Modo Nativo) */}
        {viewMode === "native" && (
          <div className="space-y-2 pt-1">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por produto, marca ou parceiro (Mizuno, Asics, Liquidz)..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Carrossel de Categorias */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {SHOP_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold shrink-0 transition active:scale-95 cursor-pointer border ${
                      isActive
                        ? "bg-purple-600 text-white border-purple-500 shadow-sm"
                        : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:bg-zinc-800 hover:text-zinc-200"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* 4. CONTEÚDO PRINCIPAL: MODO CATÁLOGO NATIVO OU MODO LOJA INTEGRADA */}
      {viewMode === "native" ? (
        <div className="px-4 pt-4 space-y-4 max-w-5xl mx-auto">
          {/* Grid de Produtos */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => handleSelectProduct(prod)}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-purple-500/50 transition duration-200 cursor-pointer group shadow-sm"
                >
                  {/* Imagem do Produto com Badge */}
                  <div className="relative aspect-square bg-zinc-950 overflow-hidden">
                    {prod.image && (
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    )}
                    {prod.badge && (
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-zinc-950/80 backdrop-blur-md text-lime-400 text-[9px] font-black uppercase tracking-wider border border-lime-400/30">
                        {prod.badge}
                      </span>
                    )}
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-purple-600/90 text-white font-black text-[10px] shadow-md">
                      {prod.cashback}
                    </span>
                  </div>

                  {/* Informações do Produto */}
                  <div className="p-3 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-1">
                        <span className="truncate font-semibold">{prod.seller || "Oficial"}</span>
                        <div className="flex items-center gap-0.5 text-amber-400 font-bold shrink-0">
                          <Star className="size-3 fill-amber-400" />
                          <span>{prod.rating || 4.9}</span>
                        </div>
                      </div>
                      <h3 className="text-xs font-bold text-white line-clamp-2 leading-snug group-hover:text-purple-300 transition">
                        {prod.title}
                      </h3>
                    </div>

                    <div className="pt-2 border-t border-zinc-800/80 flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] text-zinc-400 block">Preço</span>
                        <span className="text-sm font-black text-white">{prod.price}</span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectProduct(prod);
                        }}
                        className="px-2.5 py-1.5 rounded-lg bg-zinc-800 group-hover:bg-purple-600 text-zinc-200 group-hover:text-white font-bold text-[11px] transition"
                      >
                        Ver
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center space-y-3 bg-zinc-900/50 rounded-3xl border border-zinc-800 p-8">
              <ShoppingBag className="size-10 text-zinc-600 mx-auto" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">Nenhum produto encontrado</h4>
                <p className="text-xs text-zinc-400">
                  Tente buscar por outro termo ou escolha outra categoria acima.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="px-4 py-2 rounded-xl bg-purple-600 text-white font-bold text-xs"
              >
                Ver Todos os Produtos
              </button>
            </div>
          )}
        </div>
      ) : (
        /* MODO LOJA INTEGRADA VIA IFRAME COM FALLBACK AUTOMÁTICO */
        <div className="relative w-full h-[calc(100dvh-180px)]">
          {isIframeLoading && (
            <div className="absolute inset-0 bg-zinc-950/90 z-20 flex flex-col items-center justify-center space-y-3 p-6 text-center">
              <RefreshCw className="size-8 text-purple-500 animate-spin" />
              <p className="text-xs text-zinc-300 font-bold">Conectando à Loja Integrada...</p>
            </div>
          )}

          {storeUrl ? (
            <iframe
              ref={iframeRef}
              src={storeUrl}
              title="Loja Integrada Netfits"
              className="w-full h-full border-0 bg-white"
              allow="clipboard-write; payment; geolocation; camera"
              onLoad={() => setIsIframeLoading(false)}
              onError={() => {
                // Em caso de falha de iframe, retorna automaticamente para o catálogo nativo com aviso amigável
                toast.info("Exibindo Catálogo Nativo Oficial Netfits.");
                setViewMode("native");
                setIsIframeLoading(false);
              }}
            />
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-6 text-center space-y-4">
              <ShoppingBag className="size-10 text-purple-400" />
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white">Catálogo Nativo Pronto</h3>
                <p className="text-xs text-zinc-400 max-w-xs">
                  Acesse nosso catálogo completo com garantia de cashback em pontos nfs.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setViewMode("native")}
                className="px-4 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs"
              >
                Voltar para o Catálogo Nativo
              </button>
            </div>
          )}
        </div>
      )}

      {/* Sheet de Detalhes do Produto Selecionado */}
      {selectedDetailProduct && (
        <ProductDetailSheet
          product={selectedDetailProduct}
          onClose={() => {
            setSelectedDetailProduct(null);
            shopSelectionStore.clear();
          }}
        />
      )}
    </div>
  );
}
