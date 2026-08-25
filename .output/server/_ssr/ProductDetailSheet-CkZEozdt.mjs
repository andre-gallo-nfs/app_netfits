import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { f as useWallet, p as parseNfs, w as wallet, s as sharedSandboxStore } from "./router-K71vNqap.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { X, f as Heart, N as Star, ao as BadgeCheck, K as Truck, R as RotateCcw, h as Check, j as ShieldCheck, Z as Zap, S as ShoppingBag, E as ExternalLink, J as Tag, d as Sparkles, ac as CreditCard, ap as QrCode, a7 as Lock } from "../_libs/lucide-react.mjs";
const NFS_RATE = 0.02;
function parseBRL(price) {
  const cleaned = price.replace(/[^\d,.-]/g, "").replace(/\./g, "").replace(",", ".");
  const n = parseFloat(cleaned);
  return isNaN(n) ? 0 : n;
}
function formatBRL(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}
function ProductCheckoutSheet({
  product,
  onClose
}) {
  const [method, setMethod] = reactExports.useState("card");
  const [confirmed, setConfirmed] = reactExports.useState(false);
  const { balance: NFS_BALANCE } = useWallet();
  const priceNum = reactExports.useMemo(() => parseBRL(product.price), [product.price]);
  const maxNfs = Math.min(NFS_BALANCE, Math.ceil(priceNum / NFS_RATE));
  const [nfsToUse, setNfsToUse] = reactExports.useState(0);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-end justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-xs", onClick: onClose }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-md bg-white text-zinc-900 rounded-t-3xl max-h-[92vh] overflow-y-auto shadow-2xl border-t border-zinc-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 bg-white text-zinc-900 px-5 pt-4 pb-3 flex items-center justify-between border-b border-zinc-200 z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: "Checkout · Netfits Marketplace" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold truncate", children: product.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            className: "size-8 rounded-full bg-muted grid place-items-center shrink-0 ml-2",
            "aria-label": "Fechar",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" })
          }
        )
      ] }),
      !confirmed ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl ring-1 ring-black/5 p-4 flex gap-3", children: [
          product.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.image,
              alt: product.title,
              className: "size-16 rounded-xl object-cover bg-white ring-1 ring-black/5 shrink-0"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 rounded-xl bg-muted grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "size-5 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold leading-tight", children: product.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-0.5", children: "Pagamento único · 1x compra" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-bold", children: product.price }),
              product.cashback && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-brand-foreground bg-brand px-1.5 py-0.5 rounded", children: product.cashback })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `w-full rounded-2xl p-4 ring-1 transition-colors ${useNfs ? "bg-brand/10 ring-brand" : "bg-card ring-black/5"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `size-10 rounded-xl grid place-items-center shrink-0 ${useNfs ? "bg-brand text-brand-foreground" : "bg-muted text-foreground"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold leading-tight", children: "Usar netfits no pagamento" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground mt-0.5", children: [
                    "Saldo: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
                      NFS_BALANCE.toLocaleString("pt-BR"),
                      " nfs"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base font-bold text-brand leading-none", children: [
                    "− ",
                    formatBRL(nfsDiscount)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mt-1", children: [
                    nfsToUse.toLocaleString("pt-BR"),
                    " nfs"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "range",
                    min: 0,
                    max: maxNfs,
                    step: 1,
                    value: nfsToUse,
                    onChange: (e) => setNfsToUse(Number(e.target.value)),
                    className: "w-full accent-brand",
                    "aria-label": "Quantidade de netfits a usar"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-muted-foreground mt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setNfsToUse(maxNfs),
                      className: "font-bold text-brand hover:underline",
                      children: [
                        "usar máximo · ",
                        formatBRL(Math.min(NFS_BALANCE * NFS_RATE, priceNum))
                      ]
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/60 rounded-xl p-3 flex items-center gap-2 text-[11px] text-foreground/75", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "size-3.5 shrink-0" }),
          "Entrega estimada em 3–5 dias úteis para SP capital."
        ] }),
        !fullyPaidWithNfs && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2", children: useNfs ? "Pagar o restante com" : "Forma de pagamento" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              MethodBtn,
              {
                active: method === "card",
                onClick: () => setMethod("card"),
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "size-4" }),
                label: "Cartão"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              MethodBtn,
              {
                active: method === "pix",
                onClick: () => setMethod("pix"),
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "size-4" }),
                label: "Pix"
              }
            )
          ] })
        ] }),
        !fullyPaidWithNfs && method === "card" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Número do cartão", placeholder: "•••• •••• •••• 4242" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Validade", placeholder: "MM/AA" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "CVV", placeholder: "123" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nome impresso", placeholder: "Como está no cartão" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] text-foreground/75 pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Parcelamento" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Em até 6x sem juros" })
          ] })
        ] }),
        !fullyPaidWithNfs && method === "pix" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl ring-1 ring-black/5 p-4 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-20 rounded-xl bg-foreground/90 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "size-10 text-background" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-foreground/80", children: "Escaneie o QR Code no app do seu banco. A compra é confirmada em segundos." })
        ] }),
        fullyPaidWithNfs && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-brand/10 ring-1 ring-brand/40 rounded-2xl p-4 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-5 text-brand shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-foreground/85", children: [
            "Seu saldo cobre 100% da compra. Pague tudo com",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
              nfsToUse.toLocaleString("pt-BR"),
              " nfs"
            ] }),
            " sem usar cartão ou Pix."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted rounded-xl p-3 space-y-1.5 text-[11px] text-foreground/75", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Produto", value: formatBRL(priceNum) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Frete", value: "Grátis" }),
          useNfs && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Row,
            {
              label: `Desconto netfits (${nfsToUse.toLocaleString("pt-BR")} nfs)`,
              value: `− ${formatBRL(nfsDiscount)}`
            }
          ),
          product.cashback && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Cashback", value: product.cashback }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-black/10 my-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Row,
            {
              label: "Total a pagar",
              value: fullyPaidWithNfs ? `${nfsToUse.toLocaleString("pt-BR")} nfs` : formatBRL(remaining),
              bold: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleConfirm,
            className: "w-full bg-brand text-brand-foreground text-sm font-bold py-3 rounded-full flex items-center justify-center gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "size-4" }),
              fullyPaidWithNfs ? `Pagar ${nfsToUse.toLocaleString("pt-BR")} nfs` : `Pagar ${formatBRL(remaining)}`
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-center text-muted-foreground flex items-center justify-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-3" }),
          "Pagamento seguro pelo Netfits Marketplace."
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-8 text-center space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto size-14 rounded-full bg-brand text-brand-foreground grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Compra confirmada!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-foreground/70 mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: product.title }),
            useNfs && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              " ",
              "— você usou",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
                nfsToUse.toLocaleString("pt-BR"),
                " nfs"
              ] }),
              " (",
              formatBRL(nfsDiscount),
              " de desconto)",
              !fullyPaidWithNfs && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                " e pagou ",
                formatBRL(remaining)
              ] }),
              "."
            ] }),
            !useNfs && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              " · ",
              formatBRL(priceNum)
            ] }),
            product.cashback && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              " ",
              "Você ainda ganhou ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: product.cashback }),
              " de volta na carteira."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            className: "w-full bg-foreground text-background text-sm font-bold py-3 rounded-full",
            children: "Concluir"
          }
        )
      ] })
    ] })
  ] });
}
function MethodBtn({
  active,
  onClick,
  icon,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick,
      className: `rounded-xl ring-1 p-3 flex flex-col items-center gap-1 text-[11px] font-semibold ${active ? "ring-brand bg-brand/5" : "ring-black/10 bg-card"}`,
      children: [
        icon,
        label
      ]
    }
  );
}
function Field({ label, placeholder }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "text",
        placeholder,
        className: "mt-1 w-full bg-card ring-1 ring-black/10 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-brand"
      }
    )
  ] });
}
function Row({
  label,
  value,
  bold
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex justify-between ${bold ? "font-bold text-foreground" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: value })
  ] });
}
const PARTNER_MERCHANTS = {
  centauro: {
    id: "centauro",
    name: "Centauro Oficial",
    initials: "CT",
    rating: 4.9,
    fulfillmentType: "AFFILIATE_OUTBOUND",
    avgDeliveryDays: "2 a 4 dias úteis",
    returnPolicyDays: 30,
    apiWebhookEndpoint: "https://api.centauro.com.br/v1/netfits/orders"
  },
  netshoes: {
    id: "netshoes",
    name: "Netshoes Direct",
    initials: "NS",
    rating: 4.8,
    fulfillmentType: "PARTNER_DROPSHIP_API",
    avgDeliveryDays: "1 a 3 dias úteis",
    returnPolicyDays: 30,
    apiWebhookEndpoint: "https://api.netshoes.com.br/v1/netfits/orders"
  },
  decathlon: {
    id: "decathlon",
    name: "Decathlon Brasil",
    initials: "DC",
    rating: 4.9,
    fulfillmentType: "AFFILIATE_OUTBOUND",
    avgDeliveryDays: "3 a 5 dias úteis",
    returnPolicyDays: 30,
    apiWebhookEndpoint: "https://api.decathlon.com.br/v1/netfits/orders"
  },
  nike: {
    id: "nike",
    name: "Nike Store Brasil",
    initials: "NK",
    rating: 5,
    fulfillmentType: "AFFILIATE_OUTBOUND",
    avgDeliveryDays: "2 a 4 dias úteis",
    returnPolicyDays: 30,
    apiWebhookEndpoint: "https://api.nike.com.br/v1/netfits/orders"
  },
  garmin: {
    id: "garmin",
    name: "Garmin Brasil",
    initials: "GM",
    rating: 4.9,
    fulfillmentType: "DIRECT_VENDOR",
    avgDeliveryDays: "1 a 2 dias úteis",
    returnPolicyDays: 30,
    apiWebhookEndpoint: "https://api.garmin.com.br/v1/netfits/orders"
  }
};
function generatePartnerAffiliateUrl(partnerId, productTitle, basePrice) {
  const cleanTitle = encodeURIComponent(productTitle.toLowerCase().replace(/[^a-z0-9]/g, "-"));
  return `https://www.${partnerId}.com.br/p/${cleanTitle}?utm_source=netfits&utm_medium=affiliate_shop&utm_campaign=cashback_nfs&netfits_ref=user_123`;
}
function ProductDetailSheet({
  product,
  onClose
}) {
  const [checkout, setCheckout] = reactExports.useState(false);
  const [liked, setLiked] = reactExports.useState(false);
  const sellerKey = (product.sellerId || "centauro").toLowerCase();
  const merchantInfo = PARTNER_MERCHANTS[sellerKey] || {
    id: sellerKey,
    name: product.seller || "Parceiro Oficial Netfits",
    initials: product.sellerInitials || "PO",
    rating: 4.9,
    avgDeliveryDays: "2 a 4 dias úteis",
    returnPolicyDays: 30
  };
  const handleExternalAffiliateBuy = () => {
    const trackingUrl = product.affiliateUrl || generatePartnerAffiliateUrl(merchantInfo.id, product.title, product.price);
    toast.info(`Redirecionando para ${merchantInfo.name} com rastreio de cashback Netfits...`);
    window.open(trackingUrl, "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-end justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-xs", onClick: onClose }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-md bg-white text-zinc-900 rounded-t-3xl max-h-[92vh] overflow-y-auto shadow-2xl border-t border-zinc-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 bg-white text-zinc-900 px-5 pt-4 pb-3 flex items-center justify-between border-b border-zinc-200 z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-lime-500 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: [
              "Fulfillment por ",
              merchantInfo.name
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onClose,
              className: "size-8 rounded-full bg-muted grid place-items-center",
              "aria-label": "Fechar",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 space-y-5", children: [
          product.image && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: product.image,
                alt: product.title,
                className: "w-full aspect-square object-cover rounded-2xl ring-1 ring-black/5 bg-zinc-100"
              }
            ),
            product.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 text-[10px] font-bold tracking-widest text-white bg-lime-500 px-2 py-0.5 rounded", children: product.badge }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setLiked((v) => !v),
                className: `absolute top-3 right-3 size-9 rounded-full grid place-items-center ring-1 ring-black/5 ${liked ? "bg-brand text-brand-foreground" : "bg-background/90 text-foreground"}`,
                "aria-label": "Favoritar",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: `size-4 ${liked ? "fill-current" : ""}` })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            product.tag && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1", children: product.tag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold leading-tight", children: product.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1.5 text-xs text-muted-foreground flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5 text-amber-500", children: [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-3 fill-current" }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                (product.rating ?? merchantInfo.rating).toFixed(1),
                " · ",
                product.reviews ?? "1.284",
                " avaliações"
              ] }),
              product.sold && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/50", children: "·" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: product.sold })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-600/10 border border-purple-600/30 rounded-2xl p-3.5 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-xl bg-purple-600 text-white font-black text-xs grid place-items-center", children: merchantInfo.initials }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-foreground flex items-center gap-1", children: [
                    merchantInfo.name,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "size-3.5 text-purple-600 fill-purple-100" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Parceiro Oficial de Fulfillment & Entrega" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-extrabold px-2 py-0.5 rounded bg-lime-400 text-zinc-950 uppercase", children: "Estoque OK" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground pt-1 border-t border-purple-600/10 grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "size-3.5 text-purple-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Entrega: ",
                  merchantInfo.avgDeliveryDays
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "size-3.5 text-purple-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Troca: ",
                  merchantInfo.returnPolicyDays,
                  " dias no parceiro"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground", children: "À vista" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold leading-none", children: product.price }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-1", children: "ou em até 6x sem juros no parceiro" })
            ] }),
            product.cashback && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-white bg-purple-600 px-3 py-1 rounded-full shadow-sm", children: product.cashback })
          ] }),
          product.highlights && product.highlights.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2", children: "Destaques" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: product.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-foreground/85", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 text-white bg-purple-600 rounded-full p-0.5 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: h })
            ] }, h)) })
          ] }),
          product.description && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5", children: "Descrição" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 leading-relaxed", children: product.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Spec, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "size-4 text-purple-600" }), label: "Frete grátis" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Spec, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "size-4 text-purple-600" }), label: "Troca 30d" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Spec, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4 text-purple-600" }), label: "Garantia" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted rounded-2xl p-3 flex items-start gap-2 text-[11px] text-foreground/75", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "size-3.5 shrink-0 mt-0.5 text-white bg-purple-600 rounded-full p-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Compre via Netfits e receba ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: product.cashback ?? "cashback nfs" }),
              " diretamente na sua carteira após a validação da entrega pelo parceiro."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky bottom-0 bg-white border-t border-zinc-200 px-5 py-3 pb-5 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setCheckout(true),
              className: "w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold py-3.5 rounded-full flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-md shadow-purple-600/20",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "size-4" }),
                "Comprar & Ganhar ",
                product.cashback ?? "nfs",
                " · ",
                product.price
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: handleExternalAffiliateBuy,
              className: "w-full bg-muted hover:bg-muted/80 text-foreground text-xs font-semibold py-2.5 rounded-full flex items-center justify-center gap-1.5 border border-border",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-3.5 text-muted-foreground" }),
                "Ir direto para a loja ",
                merchantInfo.name
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-center text-muted-foreground flex items-center justify-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-3" }),
            "Fulfillment & Logística geridos exclusivamente por ",
            merchantInfo.name
          ] })
        ] })
      ] })
    ] }),
    checkout && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductCheckoutSheet,
      {
        product,
        onClose: () => {
          setCheckout(false);
          onClose();
        }
      }
    )
  ] });
}
function Spec({ icon, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl ring-1 ring-black/5 p-2.5 flex flex-col items-center gap-1 text-[10px] font-semibold text-foreground/80", children: [
    icon,
    label
  ] });
}
export {
  ProductDetailSheet as P,
  generatePartnerAffiliateUrl as g
};
