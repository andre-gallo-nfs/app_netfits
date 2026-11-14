import { trackShopView, trackProductSelect, trackAddToCart } from "@/lib/analytics";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  ShoppingBag,
  Search,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Star,
  RefreshCw,
  ArrowRight,
  Truck,
  CheckCircle2,
} from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";
import { toast } from "sonner";
import { useWallet } from "@/lib/wallet-store";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { getMkplaceStoreUrl, launchMkplaceShop } from "@/lib/integrations/mkplace-client";
import { badgesStore } from "@/lib/badges-store";
import { appLockStore } from "@/lib/app-lock-store";
import { ProductDetailSheet, type DetailProduct } from "@/components/ProductDetailSheet";

// Importação de Imagens Oficiais dos Produtos do Catálogo Netfits
import productMizunoCap from "@/assets/product-mizuno-cap.jpg";
import apparelSocks from "@/assets/apparel-socks.jpg";
import apparelTee from "@/assets/apparel-tee.jpg";
import apparelShorts from "@/assets/apparel-shorts.jpg";
import productWhey from "@/assets/product-whey.jpg";
import productElectrolyte from "@/assets/product-electrolyte.jpg";
import productRing from "@/assets/product-ring.jpg";

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
        content: "Loja Oficial Netfits com acúmulo de 4 nfs por R$ 1,00 gasto, produtos homologados e integração direta Rock Encantech.",
      },
      { property: "og:title", content: "Netfits Shop — Loja Oficial" },
    ],
  }),
  component: MarketEmbeddedPage,
});

// Categorias Oficiais do Catálogo Netfits / Rock
const SHOP_CATEGORIES = [
  { id: "all", label: "Todos os Produtos" },
  { id: "vestuario", label: "Vestuário & Performance" },
  { id: "suplementos", label: "Suplementos & Nutrição" },
  { id: "acessorios", label: "Acessórios & Treino" },
];

// 10 PRODUTOS REAIS HOMOLOGADOS NO CATÁLOGO NETFITS / ROCK ENCANTECH
// Todos possuem link direto para a página real do produto com autenticação SSO
const CURATED_PRODUCTS: DetailProduct[] = [
  {
    id: "bone-aba-curva-mizuno-run-sky",
    title: "Boné Aba Curva Mizuno Run Sky — Off White",
    price: "R$ 89,46",
    image: productMizunoCap,
    cashback: "+358 nfs",
    badge: "Oficial Mizuno",
    tag: "vestuario",
    seller: "Mizuno Oficial",
    sellerId: "mizuno",
    sellerInitials: "MZ",
    rating: 4.9,
    reviews: "348",
    sold: "1.2k",
    targetPath: "bone-aba-curva-mizuno-run-sky",
    description: "Boné de corrida respirável com proteção UV50+ certificada e drenagem rápida de suor, essencial para termorregulação craniana em treinos longos.",
    highlights: ["Proteção UV50+ certificada", "Tecido ultra-leve 54g", "Faixa interna anti-sudorese"],
  },
  {
    id: "meia-soquete-puma-invisivel-c-3-pares",
    title: "Meia Soquete Puma Invisível c/ 3 Pares",
    price: "R$ 32,62",
    image: apparelSocks,
    cashback: "+130 nfs",
    badge: "Kit 3 Pares",
    tag: "vestuario",
    seller: "Puma / Netshoes",
    sellerId: "netshoes",
    sellerInitials: "PM",
    rating: 4.9,
    reviews: "520",
    sold: "2.8k",
    targetPath: "meia-soquete-puma-invisivel-c-3-pares",
    description: "Meias soquete invisíveis Puma com costura ultrafina, calcanhar anatômico e tecido de alta ventilação que previne atrito e bolhas.",
    highlights: ["Kit com 3 pares", "Algodão penteado e poliamida", "Ajuste anatômico anti-deslizamento"],
  },
  {
    id: "toalha-de-academia-100-algodao-30x80cm-400g-m-atlantica-azul-marinho",
    title: "Toalha de Academia 100% Algodão Atlântica Azul Marinho",
    price: "R$ 26,90",
    image: "https://cdn.luxuryloyalty.com/media/product/detail/48421a9d-1403-41b1-9495-6387be8bb54b-1.jpg",
    cashback: "+108 nfs",
    badge: "100% Algodão",
    tag: "acessorios",
    seller: "Atlântica Oficial",
    sellerId: "atlantica",
    sellerInitials: "AT",
    rating: 4.8,
    reviews: "190",
    sold: "940",
    targetPath: "toalha-de-academia-100-algodao-30x80cm-400g-m-atlantica-azul-marinho",
    description: "Toalha esportiva compacta 30x80cm com gramatura de 400g/m², ideal para higienização em esteiras, musculação e treinos funcionais.",
    highlights: ["100% Algodão felpudo", "Dimensões 30x80cm ideais para treino", "Toque macio e alta absorção"],
  },
  {
    id: "camiseta-maratona-do-rio-stickers",
    title: "Camiseta Maratona do Rio Stickers",
    price: "R$ 52,62",
    image: apparelTee,
    cashback: "+210 nfs",
    badge: "Edição Oficial",
    tag: "vestuario",
    seller: "Maratona do Rio Oficial",
    sellerId: "netshoes",
    sellerInitials: "MR",
    rating: 5.0,
    reviews: "410",
    sold: "1.5k",
    targetPath: "camiseta-maratona-do-rio-stickers",
    description: "Camiseta técnica da Maratona do Rio desenvolvida em poliamida com tecnologia de alta evaporação térmica e estampa exclusiva.",
    highlights: ["Tecido 100% poliamida respirável", "Secagem ultra-rápida", "Licenciamento Maratona do Rio"],
  },
  {
    id: "camiseta-hering-premium-fresh-feminina-006",
    title: "Camiseta Hering Premium Fresh Feminina",
    price: "R$ 34,99",
    image: "https://cdn.luxuryloyalty.com/media/product/detail/c3f55f36-c52c-4693-a6e9-142f3ce35be5-1.jpg",
    cashback: "+140 nfs",
    badge: "Tecido Frescor",
    tag: "vestuario",
    seller: "Hering Oficial",
    sellerId: "hering",
    sellerInitials: "HR",
    rating: 4.8,
    reviews: "280",
    sold: "1.1k",
    targetPath: "camiseta-hering-premium-fresh-feminina-006",
    description: "Camiseta básica feminina de modelagem impecável, toque suave e caimento leve para treinos e uso casual esportivo.",
    highlights: ["Modelagem feminina regular", "Toque macio natural", "Versatilidade para treino e dia a dia"],
  },
  {
    id: "barra-de-proteina-black-skull-whey-bar-gourmet-zero-12-un",
    title: "Barra de Proteína Black Skull Whey Bar Gourmet Zero (12 Un)",
    price: "R$ 109,90",
    image: productElectrolyte,
    cashback: "+440 nfs",
    badge: "Display 12 Unidades",
    tag: "suplementos",
    seller: "Black Skull Oficial",
    sellerId: "blackskull",
    sellerInitials: "BS",
    rating: 4.9,
    reviews: "380",
    sold: "1.9k",
    targetPath: "barra-de-proteina-black-skull-whey-bar-gourmet-zero-12-un",
    description: "Caixa com 12 barras de proteína gourmet zero açúcar, fornecendo 16g de proteína de alto valor biológico por barra para suporte pós-treino.",
    highlights: ["16g de proteína por unidade", "Zero adição de açúcares", "Textura gourmet macia"],
  },
  {
    id: "meia-cano-medio-puma-logo-c-3-pares",
    title: "Meia Cano Médio Puma Logo c/ 3 Pares",
    price: "R$ 42,09",
    image: apparelSocks,
    cashback: "+168 nfs",
    badge: "Cano Médio",
    tag: "vestuario",
    seller: "Puma / Webcontinental",
    sellerId: "webcontinental",
    sellerInitials: "PM",
    rating: 4.9,
    reviews: "310",
    sold: "1.4k",
    targetPath: "meia-cano-medio-puma-logo-c-3-pares",
    description: "Meias cano médio com logo Puma bordado, suporte elástico no arco plantar e reforço no calcanhar e ponta para maior durabilidade.",
    highlights: ["Kit com 3 pares", "Suporte elástico no arco", "Cano médio esportivo clássico"],
  },
  {
    id: "calcao-infantil-sport-recife-shadow",
    title: "Calção Infantil Sport Recife Shadow",
    price: "R$ 9,99",
    image: apparelShorts,
    cashback: "+40 nfs",
    badge: "Linha Infantil",
    tag: "vestuario",
    seller: "Sport Recife / Umbro",
    sellerId: "umbro",
    sellerInitials: "SR",
    rating: 4.7,
    reviews: "140",
    sold: "620",
    targetPath: "calcao-infantil-sport-recife-shadow",
    description: "Calção oficial de futebol infantil com tecido leve em poliéster, cós elástico com cordão de ajuste e escudo do clube em destaque.",
    highlights: ["Poliéster respirável", "Cós elástico ajustável", "Licenciamento oficial do clube"],
  },
  {
    id: "kit-pin-disney-marvel-pixar-esmaltado-c-3-unidades",
    title: "Kit Pin Disney Marvel Pixar Esmaltado c/ 3 Unidades",
    price: "R$ 9,99",
    image: productRing,
    cashback: "+40 nfs",
    badge: "Colecionável",
    tag: "acessorios",
    seller: "Disney / Marvel Oficial",
    sellerId: "disney",
    sellerInitials: "DS",
    rating: 4.8,
    reviews: "95",
    sold: "410",
    targetPath: "kit-pin-disney-marvel-pixar-esmaltado-c-3-unidades",
    description: "Kit de pins metálicos colecionáveis com acabamento esmaltado premium dos universos Disney, Marvel e Pixar para vestuário e mochilas.",
    highlights: ["Metal esmaltado de alta durabilidade", "Fecho seguro borboleta", "Kit com 3 peças originais"],
  },
  {
    id: "whey-protein-isolado-dux-nutrition-900g",
    title: "Whey Protein Isolado Dux Nutrition 900g — Baunilha",
    price: "R$ 249,00",
    image: productWhey,
    cashback: "+996 nfs",
    badge: "Padrão Ouro",
    tag: "suplementos",
    seller: "Dux Nutrition Oficial",
    sellerId: "dux",
    sellerInitials: "DX",
    rating: 5.0,
    reviews: "820",
    sold: "3.7k",
    targetPath: "whey-protein-isolado-dux-nutrition-900g",
    description: "Proteína 100% isolada e microfiltrada com baixíssimo teor de carboidratos e gorduras, fornecendo 24g de proteína pura e 5.5g de BCAAs por porção.",
    highlights: ["Matéria-prima importada", "Rápida absorção pós-treino", "Certificação de pureza biológica"],
  },
];

function MarketEmbeddedPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const { balance } = useWallet();
  const activeUser = sharedSandboxStore.useActiveUser();

  // Estados de Interface
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"native" | "web">("native");
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<DetailProduct | null>(null);
  const [isConnectingStore, setIsConnectingStore] = useState<boolean>(false);

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
          p.targetPath?.toLowerCase() === search.product?.toLowerCase() ||
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
          toast.info("Acessando Catálogo Oficial Netfits.");
          setViewMode("native");
          setIsIframeLoading(false);
        });
    }
  }, [viewMode, activeUser.id, reloadKey]);

  // Produtos filtrados por categoria e busca
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

  // Abre a loja oficial completa da Rock Encantech
  const handleOpenFullStore = async () => {
    if (isConnectingStore) return;
    setIsConnectingStore(true);
    try {
      await launchMkplaceShop({
        userId: activeUser.id,
      });
    } finally {
      setTimeout(() => setIsConnectingStore(false), 2500);
    }
  };

  // Abre diretamente a página do produto na loja oficial da Rock
  const handleDirectBuy = async (prod: DetailProduct, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    trackAddToCart(prod.id, prod.title, prod.price, prod.cashback);
    toast.success(`Abrindo "${prod.title}" na Loja Oficial...`, {
      description: `Conectando via Rock Encantech com saldo de ${balance.toLocaleString()} nfs.`,
    });
    await launchMkplaceShop({
      userId: activeUser.id,
      targetQueryOrPath: prod.targetPath || prod.id,
    });
  };

  const handleSelectProduct = (prod: DetailProduct) => {
    trackProductSelect(prod.id, prod.title, prod.price, prod.seller);
    setSelectedDetailProduct(prod);
  };

  return (
    <div className="relative w-full min-h-[calc(100dvh-116px)] bg-zinc-950 text-white select-none overflow-y-auto pb-12">
      {/* 1. Header do Shop: Saldo, Troca de Modo & Ação de Loja Completa */}
      <div className="sticky top-0 z-20 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800 px-4 py-3 space-y-3">
        <div className="flex items-center justify-between gap-2">
          {/* Lado Esquerdo: Identificação e Saldo */}
          <div className="flex items-center gap-2.5">
            <div className="size-8 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 grid place-items-center shrink-0">
              <ShoppingBag className="size-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm text-white">Netfits Shop</span>
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-[11px] text-zinc-400">
                Saldo: <strong className="text-lime-400 font-mono">{balance.toLocaleString()} nfs</strong>
              </p>
            </div>
          </div>

          {/* Lado Direito: Acesso Direto à Loja Completa */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleOpenFullStore}
              disabled={isConnectingStore}
              className="px-3 py-1.5 rounded-xl bg-lime-400 hover:bg-lime-300 disabled:opacity-60 text-zinc-950 font-black text-xs flex items-center gap-1.5 transition active:scale-95 shadow-sm cursor-pointer"
              title="Acessar Loja Oficial Completa Rock Encantech com SSO"
            >
              {isConnectingStore ? (
                <>
                  <RefreshCw className="size-3.5 animate-spin" />
                  <span>Conectando...</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="size-3.5" />
                  <span>Loja Completa</span>
                  <ExternalLink className="size-3" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* 2. Barra de Busca de Produtos */}
        {viewMode === "native" && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por produto no catálogo (Mizuno, Puma, Dux)..."
              className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-purple-500"
            />
          </div>
        )}
      </div>

      {/* 3. CONTEÚDO PRINCIPAL: MODO CATÁLOGO NATIVO OU LOJA WEB */}
      {viewMode === "native" ? (
        <div className="px-4 py-4 space-y-4">
          {/* Banner de Cashback Oficial Rock Encantech */}
          {/* Banner Hero de Acesso à Loja Oficial Rock Encantech */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-900/80 via-zinc-900 to-purple-950/80 border border-purple-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-lime-400/20 text-lime-400 grid place-items-center shrink-0 border border-lime-400/30">
                <Sparkles className="size-5" />
              </div>
              <div>
                <span className="text-xs font-black text-white flex items-center gap-1.5">
                  Loja Oficial Netfits &bull; <strong className="text-lime-400">4 nfs por R$ 1,00 gasto</strong>
                </span>
                <p className="text-[11px] text-zinc-300">
                  Mais de 10.000 produtos esportivos homologados com cashback e entrega garantida.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleOpenFullStore}
              disabled={isConnectingStore}
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 disabled:opacity-60 text-zinc-950 font-black text-xs flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer shadow-md shrink-0"
            >
              {isConnectingStore ? (
                <>
                  <RefreshCw className="size-3.5 animate-spin" />
                  <span>Conectando à Loja...</span>
                </>
              ) : (
                <>
                  <span>Acessar Loja Completa</span>
                  <ExternalLink className="size-3.5" />
                </>
              )}
            </button>
          </div>

          {/* Categorias em Pílulas */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {SHOP_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-purple-600 text-white shadow-xs shadow-purple-600/30"
                    : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid de 10 Produtos Reais com Links Diretos de Compra */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => handleDirectBuy(prod)}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-purple-500/50 transition duration-200 cursor-pointer group shadow-sm"
                >
                  {/* Imagem do Produto com Badge de Cashback */}
                  <div className="relative aspect-square bg-zinc-950 overflow-hidden">
                    {prod.image && (
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    {prod.badge && (
                      <span className="absolute top-2 left-2 text-[9px] font-black bg-zinc-950/80 backdrop-blur-xs text-white px-2 py-0.5 rounded-full border border-white/10">
                        {prod.badge}
                      </span>
                    )}
                    <span className="absolute bottom-2 right-2 text-[10px] font-extrabold bg-lime-400 text-zinc-950 px-2 py-0.5 rounded-full shadow-md font-mono">
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

                    <div className="pt-2 border-t border-zinc-800/80 flex items-baseline justify-between gap-1">
                      <div>
                        <span className="text-[10px] text-zinc-400 block">Preço</span>
                        <span className="text-sm font-black text-white">{prod.price}</span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => handleDirectBuy(prod, e)}
                        className="px-2.5 py-1.5 rounded-lg bg-[#C8F135] hover:bg-[#b8e025] text-zinc-950 font-black text-[11px] flex items-center gap-1 transition active:scale-95 shadow-xs cursor-pointer shrink-0"
                        title="Ir direto para a compra na Loja Oficial Rock Encantech"
                      >
                        <span>Comprar no Shop</span>
                        <ArrowRight className="size-3" />
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
              <p className="text-xs text-zinc-300 font-bold">Conectando à Loja Oficial Rock Encantech...</p>
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
                toast.info("Exibindo Catálogo Oficial Netfits.");
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

      {/* Modal / Sheet Detalhado do Produto */}
      {selectedDetailProduct && (
        <ProductDetailSheet
          product={selectedDetailProduct}
          onClose={() => setSelectedDetailProduct(null)}
        />
      )}
    </div>
  );
}
