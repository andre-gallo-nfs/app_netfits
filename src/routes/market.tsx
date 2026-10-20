import { trackShopView, trackProductSelect } from "@/lib/analytics";
import { createFileRoute, Link } from "@tanstack/react-router";
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
} from "lucide-react";
import productMizunoCap from "@/assets/product-mizuno-cap.jpg";
import { useEffect } from "react";
import { toast } from "sonner";
import { useWallet } from "@/lib/wallet-store";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { badgesStore } from "@/lib/badges-store";
import { shopSelectionStore } from "@/lib/shop-selection-store";
import { launchMkplaceShop } from "@/lib/integrations/mkplace-client";

export const Route = createFileRoute("/market")({
  head: () => ({
    meta: [
      { title: "Netfits Shop — Loja Oficial" },
      {
        name: "description",
        content: "Loja Oficial Netfits integrada com autenticação unificada e acúmulo de pontos nfs.",
      },
      { property: "og:title", content: "Netfits Shop" },
    ],
  }),
  component: MarketEmbeddedPage,
});

function MarketEmbeddedPage() {
  const { balance } = useWallet();
  const activeUser = sharedSandboxStore.useActiveUser();
  const selectedProduct = shopSelectionStore.useSelectedProduct();

  useEffect(() => {
    badgesStore.recordShopVisit();
    trackShopView("all");
    if (selectedProduct) {
      trackProductSelect(selectedProduct.id, selectedProduct.title, selectedProduct.price);
    }
  }, [selectedProduct]);

  const handleClearSelection = () => {
    shopSelectionStore.clear();
    toast.info("Retornando ao catálogo geral da Loja Oficial");
  };

  const handleBuyInShop = () => {
    toast.success("Conectando ao checkout oficial da Rock Encantech...", {
      description: "Seu saldo de nfs e endereço já estão sincronizados via SSO.",
    });
    launchMkplaceShop({ userId: activeUser.id });
  };

  // Se houver produto selecionado pelo card do feed/vídeo, renderiza a Página do Produto dentro do Shop
  if (selectedProduct) {
    const productImage = selectedProduct.image || productMizunoCap;
    const productTitle = selectedProduct.title || "Boné Aba Curva Mizuno Run Sky — Off White";
    const productPrice = selectedProduct.price || "R$ 89,90";
    const productCashback = selectedProduct.cashback || "+360 nfs";
    const productSeller = selectedProduct.seller || "Netshoes";

    return (
      <div className="relative w-full min-h-[calc(100dvh-116px)] bg-zinc-950 text-white select-none pb-24 overflow-y-auto">
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
              src={productImage}
              alt={productTitle}
              className="w-full aspect-square object-cover"
            />
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 font-extrabold text-[10px] uppercase tracking-wider backdrop-blur-sm">
                Item Homologado
              </span>
              <span className="px-2.5 py-1 rounded-full bg-lime-400/90 text-zinc-950 font-black text-[10px] uppercase tracking-wider">
                {productCashback}
              </span>
            </div>

            <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-[10px] text-zinc-300">
              Vendido por {productSeller}
            </div>
          </div>

          {/* Título, Preço e Cashback */}
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 space-y-2">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-purple-400 uppercase tracking-wider">
              <span>{productSeller}</span>
              <span>·</span>
              <span>Parceiro Oficial Rock Encantech</span>
            </div>

            <h1 className="text-base font-extrabold text-white leading-tight">
              {productTitle}
            </h1>

            <div className="flex items-baseline justify-between pt-1 border-t border-zinc-800/80">
              <div>
                <span className="text-[10px] text-zinc-400 block font-semibold">Preço Oficial</span>
                <span className="text-2xl font-black text-lime-400">{productPrice}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-zinc-400 block font-semibold">Cashback Garantido</span>
                <span className="text-xs font-extrabold text-purple-300 bg-purple-950/60 px-2 py-1 rounded-lg border border-purple-500/30">
                  {productCashback} (4 nfs / R$ 1)
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

          {/* Especificações Técnicas do Produto */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 space-y-2.5">
            <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-lime-400" />
              Destaques Técnicos do Produto
            </h3>

            <ul className="space-y-1.5 text-[11px] text-zinc-300">
              <li className="flex items-start gap-2">
                <Check className="size-3.5 text-lime-400 shrink-0 mt-0.5" />
                <span>Proteção UV50+ testada para corrida e treinos sob radiação solar intensa</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-3.5 text-lime-400 shrink-0 mt-0.5" />
                <span>Tecido microperfurado Quick-Dry de secagem ultra-rápida</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-3.5 text-lime-400 shrink-0 mt-0.5" />
                <span>Faixa interna atoalhada anti-suor que mantém a visão límpida</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-3.5 text-lime-400 shrink-0 mt-0.5" />
                <span>Fecho ajustável com encaixe de alta precisão anatômica</span>
              </li>
            </ul>
          </div>

          {/* Fulfillment Oficial Rock Encantech */}
          <div className="bg-purple-950/20 border border-purple-500/20 rounded-2xl p-3.5 flex items-start gap-3">
            <BadgeCheck className="size-5 text-purple-400 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <p className="text-xs font-bold text-white">Catálogo Integrado Rock Encantech</p>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                Produto comercializado dentro do <strong className="text-zinc-200">Netfits Shop</strong> com fulfillment parceiro ({productSeller}) e entregue com nota fiscal. Toda compra acumula <strong className="text-lime-400">4,00 nfs por R$ 1,00</strong> diretamente na sua conta.
              </p>
            </div>
          </div>
        </div>

        {/* Barra Fixa Inferior com CTA de Compra */}
        <div className="fixed bottom-[calc(env(safe-area-inset-bottom,0px)+3.75rem)] left-0 right-0 max-w-md mx-auto px-4 z-30">
          <div className="bg-zinc-900/95 backdrop-blur-md border border-zinc-800 rounded-2xl p-3 shadow-2xl flex items-center justify-between gap-3">
            <div>
              <span className="text-[9px] uppercase font-bold text-zinc-400 block">Total</span>
              <span className="text-base font-black text-lime-400">{productPrice}</span>
            </div>

            <button
              type="button"
              onClick={handleBuyInShop}
              className="flex-1 py-3 px-4 rounded-xl bg-lime-400 hover:bg-lime-500 text-zinc-950 font-black text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <ShoppingBag className="size-4" />
              <span>Comprar no Shop Netfits ({productCashback})</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Visualização padrão do Shop quando nenhum produto específico foi selecionado
  return (
    <div className="relative w-full min-h-[calc(100dvh-116px)] bg-zinc-950 select-none overflow-y-auto">
      <div className="p-4 max-w-md mx-auto space-y-4 pt-6 pb-20">
        {/* Header Card de Saldo e Paridade */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-5 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-xl bg-purple-600/20 text-purple-400 grid place-items-center">
                <ShoppingBag className="size-4" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white leading-tight">Netfits Shop</h2>
                <p className="text-[10px] text-zinc-400">Integração Rock Encantech</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Credenciais Ativas</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-zinc-800/80">
            <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-1">
              Saldo Disponível para Resgate
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-white tracking-tight">
                {balance.toLocaleString("pt-BR")}
              </span>
              <span className="text-sm font-bold text-lime-400">nfs</span>
            </div>
          </div>
        </div>

        {/* Card de Status da Integração & Regras */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 space-y-3">
          <div className="flex items-start gap-2.5">
            <div className="size-8 rounded-xl bg-lime-400/10 text-lime-400 grid place-items-center shrink-0 mt-0.5">
              <ShieldCheck className="size-4" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-white">Chaves & SSO Homologados</h3>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                As chaves criptográficas RSA (RS256) e a esteira de pedidos da Rock Encantech (StoreId <strong className="text-zinc-200">RhOFkbZJIN</strong>) estão 100% ativas no backend.
              </p>
            </div>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-zinc-800/60 text-[11px] text-zinc-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-3.5 text-lime-400 shrink-0" />
              <span>Ganhe Netfits: <strong>4,00 nfs por R$ 1,00</strong> em todo o catálogo</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-3.5 text-lime-400 shrink-0" />
              <span>Use seus Netfits como abatimento direto no carrinho</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-3.5 text-lime-400 shrink-0" />
              <span>Endereço e dados sincronizados via SSO sem redigitação</span>
            </div>
          </div>
        </div>

        {/* Informação sobre a Conexão da Rock */}
        <div className="bg-purple-950/20 border border-purple-500/20 rounded-2xl p-4 text-center space-y-2">
          <div className="size-9 rounded-full bg-purple-600/20 text-purple-400 mx-auto grid place-items-center">
            <Zap className="size-4.5" />
          </div>
          <h4 className="text-xs font-bold text-white">Loja Oficial Integrada</h4>
          <p className="text-[11px] text-zinc-400 leading-relaxed">
            Selecione produtos nos cards e vídeos do Feed para visualizar as páginas oficiais no Shop com acúmulo de pontos garantido.
          </p>
        </div>

        {/* Ações de Navegação */}
        <div className="space-y-2 pt-2">
          <Link
            to="/admin"
            className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20 transition active:scale-98"
          >
            <Zap className="size-3.5" />
            <span>Acessar Simulador de Compras Rock no Admin</span>
          </Link>
          <Link
            to="/feed"
            className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-semibold text-xs flex items-center justify-center gap-1.5 border border-zinc-800 transition"
          >
            <ArrowLeft className="size-3.5" />
            <span>Explorar Produtos no Feed</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
