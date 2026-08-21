import { useMemo, useState } from "react";
import {
  X,
  Check,
  CreditCard,
  Lock,
  ShieldCheck,
  QrCode,
  Truck,
  Tag,
  Sparkles,
} from "lucide-react";
import { useWallet, wallet, parseNfs } from "@/lib/wallet-store";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";

export type CheckoutProduct = {
  id: string;
  title: string;
  price: string;
  image?: string;
  cashback?: string;
  badge?: string;
};

// Conversão fixa: 1 nfs = R$ 0,02
const NFS_RATE = 0.02;

function parseBRL(price: string): number {
  // "R$ 199,90" -> 199.90
  const cleaned = price
    .replace(/[^\d,.-]/g, "")
    .replace(/\./g, "")
    .replace(",", ".");
  const n = parseFloat(cleaned);
  return isNaN(n) ? 0 : n;
}

function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function ProductCheckoutSheet({
  product,
  onClose,
}: {
  product: CheckoutProduct;
  onClose: () => void;
}) {
  const [method, setMethod] = useState<"card" | "pix">("card");
  const [confirmed, setConfirmed] = useState(false);
  const { balance: NFS_BALANCE } = useWallet();

  const priceNum = useMemo(() => parseBRL(product.price), [product.price]);

  // Máximo de nfs aplicáveis: o que cobre o produto inteiro, limitado ao saldo
  const maxNfs = Math.min(NFS_BALANCE, Math.ceil(priceNum / NFS_RATE));
  const [nfsToUse, setNfsToUse] = useState(0);

  const useNfs = nfsToUse > 0;
  const nfsDiscount = Math.min(nfsToUse * NFS_RATE, priceNum);
  const remaining = Math.max(0, priceNum - nfsDiscount);
  const fullyPaidWithNfs = remaining === 0 && useNfs;

  const cashbackNfs = parseNfs(product.cashback);

  function handleConfirm() {
    if (nfsToUse > 0) {
      wallet.spend(nfsToUse, `Resgate compra ${product.title}`);
      sharedSandboxStore.buyShopProduct(product.title, nfsToUse);
    } else {
      sharedSandboxStore.buyShopProduct(product.title, Math.ceil(priceNum / NFS_RATE));
    }
    if (cashbackNfs > 0) {
      wallet.earn(cashbackNfs, `Cashback compra ${product.title}`);
    }
    setConfirmed(true);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white text-zinc-900 rounded-t-3xl max-h-[92vh] overflow-y-auto shadow-2xl border-t border-zinc-200">
        <div className="sticky top-0 bg-white text-zinc-900 px-5 pt-4 pb-3 flex items-center justify-between border-b border-zinc-200 z-10">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Checkout · Netfits Marketplace
            </p>
            <h2 className="text-base font-bold truncate">{product.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="size-8 rounded-full bg-muted grid place-items-center shrink-0 ml-2"
            aria-label="Fechar"
          >
            <X className="size-4" />
          </button>
        </div>

        {!confirmed ? (
          <div className="px-5 py-4 space-y-5">
            <div className="bg-card rounded-2xl ring-1 ring-black/5 p-4 flex gap-3">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="size-16 rounded-xl object-cover bg-white ring-1 ring-black/5 shrink-0"
                />
              ) : (
                <div className="size-16 rounded-xl bg-muted grid place-items-center shrink-0">
                  <Tag className="size-5 text-muted-foreground" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold leading-tight">{product.title}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  Pagamento único · 1x compra
                </p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-base font-bold">{product.price}</span>
                  {product.cashback && (
                    <span className="text-[10px] font-bold text-brand-foreground bg-brand px-1.5 py-0.5 rounded">
                      {product.cashback}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Slider de uso de netfits */}
            <div
              className={`w-full rounded-2xl p-4 ring-1 transition-colors ${
                useNfs ? "bg-brand/10 ring-brand" : "bg-card ring-black/5"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`size-10 rounded-xl grid place-items-center shrink-0 ${
                    useNfs ? "bg-brand text-brand-foreground" : "bg-muted text-foreground"
                  }`}
                >
                  <Sparkles className="size-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold leading-tight">
                    Usar netfits no pagamento
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    Saldo: <b>{NFS_BALANCE.toLocaleString("pt-BR")} nfs</b>
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-base font-bold text-brand leading-none">
                    − {formatBRL(nfsDiscount)}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-1">
                    {nfsToUse.toLocaleString("pt-BR")} nfs
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <input
                  type="range"
                  min={0}
                  max={maxNfs}
                  step={1}
                  value={nfsToUse}
                  onChange={(e) => setNfsToUse(Number(e.target.value))}
                  className="w-full accent-brand"
                  aria-label="Quantidade de netfits a usar"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                  <span>0</span>
                  <button
                    type="button"
                    onClick={() => setNfsToUse(maxNfs)}
                    className="font-bold text-brand hover:underline"
                  >
                    usar máximo · {formatBRL(Math.min(NFS_BALANCE * NFS_RATE, priceNum))}
                  </button>
                </div>
              </div>
            </div>


            <div className="bg-muted/60 rounded-xl p-3 flex items-center gap-2 text-[11px] text-foreground/75">
              <Truck className="size-3.5 shrink-0" />
              Entrega estimada em 3–5 dias úteis para SP capital.
            </div>

            {!fullyPaidWithNfs && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  {useNfs ? "Pagar o restante com" : "Forma de pagamento"}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <MethodBtn
                    active={method === "card"}
                    onClick={() => setMethod("card")}
                    icon={<CreditCard className="size-4" />}
                    label="Cartão"
                  />
                  <MethodBtn
                    active={method === "pix"}
                    onClick={() => setMethod("pix")}
                    icon={<QrCode className="size-4" />}
                    label="Pix"
                  />
                </div>
              </div>
            )}

            {!fullyPaidWithNfs && method === "card" && (
              <div className="space-y-2">
                <Field label="Número do cartão" placeholder="•••• •••• •••• 4242" />
                <div className="grid grid-cols-2 gap-2">
                  <Field label="Validade" placeholder="MM/AA" />
                  <Field label="CVV" placeholder="123" />
                </div>
                <Field label="Nome impresso" placeholder="Como está no cartão" />
                <div className="flex items-center justify-between text-[11px] text-foreground/75 pt-1">
                  <span>Parcelamento</span>
                  <span className="font-semibold">Em até 6x sem juros</span>
                </div>
              </div>
            )}

            {!fullyPaidWithNfs && method === "pix" && (
              <div className="bg-card rounded-2xl ring-1 ring-black/5 p-4 flex items-center gap-3">
                <div className="size-20 rounded-xl bg-foreground/90 grid place-items-center">
                  <QrCode className="size-10 text-background" />
                </div>
                <div className="text-xs text-foreground/80">
                  Escaneie o QR Code no app do seu banco. A compra é confirmada
                  em segundos.
                </div>
              </div>
            )}

            {fullyPaidWithNfs && (
              <div className="bg-brand/10 ring-1 ring-brand/40 rounded-2xl p-4 flex items-center gap-3">
                <Sparkles className="size-5 text-brand shrink-0" />
                <div className="text-xs text-foreground/85">
                  Seu saldo cobre 100% da compra. Pague tudo com{" "}
                  <b>{nfsToUse.toLocaleString("pt-BR")} nfs</b> sem usar cartão
                  ou Pix.
                </div>
              </div>
            )}

            <div className="bg-muted rounded-xl p-3 space-y-1.5 text-[11px] text-foreground/75">
              <Row label="Produto" value={formatBRL(priceNum)} />
              <Row label="Frete" value="Grátis" />
              {useNfs && (
                <Row
                  label={`Desconto netfits (${nfsToUse.toLocaleString("pt-BR")} nfs)`}
                  value={`− ${formatBRL(nfsDiscount)}`}
                />
              )}
              {product.cashback && (
                <Row label="Cashback" value={product.cashback} />
              )}
              <div className="h-px bg-black/10 my-1" />
              <Row
                label="Total a pagar"
                value={
                  fullyPaidWithNfs
                    ? `${nfsToUse.toLocaleString("pt-BR")} nfs`
                    : formatBRL(remaining)
                }
                bold
              />
            </div>

            <button
              onClick={handleConfirm}
              className="w-full bg-brand text-brand-foreground text-sm font-bold py-3 rounded-full flex items-center justify-center gap-2"
            >
              <Lock className="size-4" />
              {fullyPaidWithNfs
                ? `Pagar ${nfsToUse.toLocaleString("pt-BR")} nfs`
                : `Pagar ${formatBRL(remaining)}`}
            </button>
            <p className="text-[10px] text-center text-muted-foreground flex items-center justify-center gap-1">
              <ShieldCheck className="size-3" />
              Pagamento seguro pelo Netfits Marketplace.
            </p>
          </div>
        ) : (
          <div className="px-5 py-8 text-center space-y-4">
            <div className="mx-auto size-14 rounded-full bg-brand text-brand-foreground grid place-items-center">
              <Check className="size-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Compra confirmada!</h3>
              <p className="text-xs text-foreground/70 mt-1">
                <b>{product.title}</b>
                {useNfs && (
                  <>
                    {" "}— você usou{" "}
                    <b>{nfsToUse.toLocaleString("pt-BR")} nfs</b> (
                    {formatBRL(nfsDiscount)} de desconto)
                    {!fullyPaidWithNfs && <> e pagou {formatBRL(remaining)}</>}.
                  </>
                )}
                {!useNfs && <> · {formatBRL(priceNum)}</>}
                {product.cashback && (
                  <>
                    {" "}Você ainda ganhou <b>{product.cashback}</b> de volta na
                    carteira.
                  </>
                )}
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-full bg-foreground text-background text-sm font-bold py-3 rounded-full"
            >
              Concluir
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function MethodBtn({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl ring-1 p-3 flex flex-col items-center gap-1 text-[11px] font-semibold ${
        active ? "ring-brand bg-brand/5" : "ring-black/10 bg-card"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-1 w-full bg-card ring-1 ring-black/10 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-brand"
      />
    </label>
  );
}

function Row({
  label,
  value,
  bold,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <div className={`flex justify-between ${bold ? "font-bold text-foreground" : ""}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
