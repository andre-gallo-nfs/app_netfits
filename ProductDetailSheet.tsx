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
} from "lucide-react";
import { ProductCheckoutSheet, type CheckoutProduct } from "./ProductCheckoutSheet";

export type DetailProduct = CheckoutProduct & {
  description?: string;
  tag?: string;
  seller?: string;
  sellerInitials?: string;
  sellerType?: string;
  rating?: number;
  reviews?: string;
  sold?: string;
  highlights?: string[];
  specs?: { label: string; value: string }[];
  shippingEta?: string;
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

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-end justify-center">
        <div className="absolute inset-0 bg-black/50" onClick={onClose} />
        <div className="relative w-full max-w-md bg-background rounded-t-3xl max-h-[92vh] overflow-y-auto">
          <div className="sticky top-0 bg-background/95 backdrop-blur px-5 pt-4 pb-3 flex items-center justify-between border-b border-black/5 z-10">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Detalhe do produto
            </p>
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
                  {(product.rating ?? 4.9).toFixed(1)} · {product.reviews ?? "1.284"} avaliações
                </span>
                {product.sold && (
                  <>
                    <span className="text-muted-foreground/50">·</span>
                    <span>{product.sold}</span>
                  </>
                )}
              </div>
            </div>

            {product.seller && (
              <button className="w-full bg-card rounded-2xl ring-1 ring-black/5 p-3 flex items-center gap-3 text-left active:scale-[0.99] transition-transform">
                <div className="size-10 rounded-full bg-foreground text-brand grid place-items-center text-xs font-bold ring-1 ring-black/10 shrink-0">
                  {product.sellerInitials ?? product.seller.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-bold truncate">{product.seller}</p>
                    <BadgeCheck className="size-3.5 text-brand-foreground bg-brand rounded-full p-0.5 shrink-0" />
                  </div>
                  <p className="text-[11px] text-muted-foreground truncate">
                    {product.sellerType ?? "Parceiro netfits"}
                  </p>
                </div>
                <ChevronRight className="size-4 text-muted-foreground shrink-0" />
              </button>
            )}

            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  À vista
                </p>
                <p className="text-2xl font-bold leading-none">{product.price}</p>
                <p className="text-[11px] text-muted-foreground mt-1">
                  ou em até 6x sem juros
                </p>
              </div>
              {product.cashback && (
                <span className="text-xs font-bold text-brand-foreground bg-brand px-2.5 py-1 rounded-full">
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
                      <Check className="size-4 text-brand-foreground bg-brand rounded-full p-0.5 shrink-0 mt-0.5" />
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

            {product.specs && product.specs.length > 0 && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  Especificações
                </p>
                <div className="bg-card rounded-2xl ring-1 ring-black/5 divide-y divide-black/5">
                  {product.specs.map((s) => (
                    <div key={s.label} className="flex justify-between px-3 py-2.5 text-xs">
                      <span className="text-muted-foreground">{s.label}</span>
                      <span className="font-semibold text-foreground/90 text-right">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-3 gap-2">
              <Spec icon={<Truck className="size-4" />} label="Frete grátis" />
              <Spec icon={<RotateCcw className="size-4" />} label="Troca 30d" />
              <Spec icon={<ShieldCheck className="size-4" />} label="Garantia" />
            </div>

            {product.shippingEta && (
              <div className="bg-muted/60 rounded-xl p-3 flex items-center gap-2 text-[11px] text-foreground/75">
                <Truck className="size-3.5 shrink-0" />
                {product.shippingEta}
              </div>
            )}

            <div className="bg-muted rounded-2xl p-3 flex items-start gap-2 text-[11px] text-foreground/75">
              <Zap className="size-3.5 shrink-0 mt-0.5 text-brand-foreground bg-brand rounded-full p-0.5" />
              <span>
                Compre agora e receba <b>{product.cashback ?? "cashback"}</b> de
                volta na sua carteira netfits após a confirmação.
              </span>
            </div>
          </div>

          <div className="sticky bottom-0 bg-background/95 backdrop-blur border-t border-black/5 px-5 py-3 pb-5">
            <button
              onClick={() => setCheckout(true)}
              className="w-full bg-brand text-brand-foreground text-sm font-bold py-3.5 rounded-full flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
            >
              <ShoppingBag className="size-4" />
              Comprar agora · {product.price}
            </button>
            <p className="text-[10px] text-center text-muted-foreground mt-2 flex items-center justify-center gap-1">
              <ShieldCheck className="size-3" />
              Pagamento seguro pelo Netfits Marketplace
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
