import { useState } from "react";
import {
  X,
  ShoppingBag,
  ShieldCheck,
  Truck,
  Star,
  Heart,
  RotateCcw,
  Zap,
  BadgeCheck,
  ChevronRight,
  Check,
  ExternalLink,
  Store,
} from "lucide-react";
import { ProductCheckoutSheet, type CheckoutProduct } from "./ProductCheckoutSheet";
import { PARTNER_MERCHANTS, generatePartnerAffiliateUrl } from "@/lib/shop-partner-schema";
import { toast } from "sonner";

export type DetailProduct = CheckoutProduct & {
  description?: string;
  tag?: string;
  seller?: string;
  sellerInitials?: string;
  sellerType?: string;
  sellerId?: string;
  rating?: number;
  reviews?: string;
  sold?: string;
  highlights?: string[];
  specs?: { label: string; value: string }[];
  shippingEta?: string;
  affiliateUrl?: string;
};

export function ProductDetailSheet({
  product,
  onClose,
}: {
  product: DetailProduct;
  onClose: () => void;
}) {
  const [checkout, setCheckout] = useState(false);
  const [liked, setLiked] = useState(false);

  const sellerKey = (product.sellerId || "centauro").toLowerCase();
  const merchantInfo = PARTNER_MERCHANTS[sellerKey] || {
    id: sellerKey,
    name: product.seller || "Parceiro Oficial Netfits",
    initials: product.sellerInitials || "PO",
    rating: 4.9,
    fulfillmentType: "AFFILIATE_OUTBOUND",
    avgDeliveryDays: "2 a 4 dias úteis",
    returnPolicyDays: 30,
  };

  const handleExternalAffiliateBuy = () => {
    const trackingUrl =
      product.affiliateUrl ||
      generatePartnerAffiliateUrl(merchantInfo.id, product.title, product.price);
    
    toast.info(`Redirecionando para ${merchantInfo.name} com rastreio de cashback Netfits...`);
    window.open(trackingUrl, "_blank");
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-end justify-center">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />
        <div className="relative w-full max-w-md bg-white text-zinc-900 rounded-t-3xl max-h-[92vh] overflow-y-auto shadow-2xl border-t border-zinc-200">
          <div className="sticky top-0 bg-white text-zinc-900 px-5 pt-4 pb-3 flex items-center justify-between border-b border-zinc-200 z-10">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-lime-500 animate-pulse" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Fulfillment por {merchantInfo.name}
              </p>
            </div>
            <button
              onClick={onClose}
              className="size-8 rounded-full bg-muted grid place-items-center"
              aria-label="Fechar"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="px-5 py-4 space-y-5">
            {product.image && (
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full aspect-square object-cover rounded-2xl ring-1 ring-black/5 bg-zinc-100"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 text-[10px] font-bold tracking-widest text-white bg-lime-500 px-2 py-0.5 rounded">
                    {product.badge}
                  </span>
                )}
                <button
                  onClick={() => setLiked((v) => !v)}
                  className={`absolute top-3 right-3 size-9 rounded-full grid place-items-center ring-1 ring-black/5 ${
                    liked ? "bg-brand text-brand-foreground" : "bg-background/90 text-foreground"
                  }`}
                  aria-label="Favoritar"
                >
                  <Heart className={`size-4 ${liked ? "fill-current" : ""}`} />
                </button>
              </div>
            )}

            <div>
              {product.tag && (
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                  {product.tag}
                </p>
              )}
              <h2 className="text-xl font-bold leading-tight">{product.title}</h2>
              <div className="flex items-center gap-2 mt-1.5 text-xs text-muted-foreground flex-wrap">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="size-3 fill-current" />
                  ))}
                </div>
                <span>
                  {(product.rating ?? merchantInfo.rating).toFixed(1)} · {product.reviews ?? "1.284"} avaliações
                </span>
                {product.sold && (
                  <>
                    <span className="text-muted-foreground/50">·</span>
                    <span>{product.sold}</span>
                  </>
                )}
              </div>
            </div>

            {/* Merchant Fulfillment Card */}
            <div className="bg-purple-600/10 border border-purple-600/30 rounded-2xl p-3.5 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="size-9 rounded-xl bg-purple-600 text-white font-black text-xs grid place-items-center">
                    {merchantInfo.initials}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground flex items-center gap-1">
                      {merchantInfo.name}
                      <BadgeCheck className="size-3.5 text-purple-600 fill-purple-100" />
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      Parceiro Oficial de Fulfillment & Entrega
                    </p>
                  </div>
                </div>
                <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-lime-400 text-zinc-950 uppercase">
                  Estoque OK
                </span>
              </div>

              <div className="text-[11px] text-muted-foreground pt-1 border-t border-purple-600/10 grid grid-cols-2 gap-2">
                <div className="flex items-center gap-1.5">
                  <Truck className="size-3.5 text-purple-600" />
                  <span>Entrega: {merchantInfo.avgDeliveryDays}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RotateCcw className="size-3.5 text-purple-600" />
                  <span>Troca: {merchantInfo.returnPolicyDays} dias no parceiro</span>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  À vista
                </p>
                <p className="text-2xl font-bold leading-none">{product.price}</p>
                <p className="text-[11px] text-muted-foreground mt-1">
                  ou em até 6x sem juros no parceiro
                </p>
              </div>
              {product.cashback && (
                <span className="text-xs font-bold text-white bg-purple-600 px-3 py-1 rounded-full shadow-sm">
                  {product.cashback}
                </span>
              )}
            </div>

            {product.highlights && product.highlights.length > 0 && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  Destaques
                </p>
                <ul className="space-y-1.5">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-foreground/85">
                      <Check className="size-4 text-white bg-purple-600 rounded-full p-0.5 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.description && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                  Descrição
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            <div className="grid grid-cols-3 gap-2">
              <Spec icon={<Truck className="size-4 text-purple-600" />} label="Frete grátis" />
              <Spec icon={<RotateCcw className="size-4 text-purple-600" />} label="Troca 30d" />
              <Spec icon={<ShieldCheck className="size-4 text-purple-600" />} label="Garantia" />
            </div>

            <div className="bg-muted rounded-2xl p-3 flex items-start gap-2 text-[11px] text-foreground/75">
              <Zap className="size-3.5 shrink-0 mt-0.5 text-white bg-purple-600 rounded-full p-0.5" />
              <span>
                Compre via Netfits e receba <b>{product.cashback ?? "cashback nfs"}</b> diretamente na sua carteira após a validação da entrega pelo parceiro.
              </span>
            </div>
          </div>

          <div className="sticky bottom-0 bg-white border-t border-zinc-200 px-5 py-3 pb-5 space-y-2">
            <button
              onClick={() => setCheckout(true)}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold py-3.5 rounded-full flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-md shadow-purple-600/20"
            >
              <ShoppingBag className="size-4" />
              Comprar & Ganhar {product.cashback ?? "nfs"} · {product.price}
            </button>

            <button
              onClick={handleExternalAffiliateBuy}
              className="w-full bg-muted hover:bg-muted/80 text-foreground text-xs font-semibold py-2.5 rounded-full flex items-center justify-center gap-1.5 border border-border"
            >
              <ExternalLink className="size-3.5 text-muted-foreground" />
              Ir direto para a loja {merchantInfo.name}
            </button>

            <p className="text-[10px] text-center text-muted-foreground flex items-center justify-center gap-1">
              <ShieldCheck className="size-3" />
              Fulfillment & Logística geridos exclusivamente por {merchantInfo.name}
            </p>
          </div>
        </div>
      </div>

      {checkout && (
        <ProductCheckoutSheet
          product={product}
          onClose={() => {
            setCheckout(false);
            onClose();
          }}
        />
      )}
    </>
  );
}

function Spec({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="bg-card rounded-xl ring-1 ring-black/5 p-2.5 flex flex-col items-center gap-1 text-[10px] font-semibold text-foreground/80">
      {icon}
      {label}
    </div>
  );
}
