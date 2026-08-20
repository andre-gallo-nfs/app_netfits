import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { g as useWallet } from "./router-D988PTjT.mjs";
import { n as netfitsMark } from "./netfits-mark-DN6CUhW7.mjs";
import { u as useOperationalParams } from "./operational-params-store-i_-wQLwy.mjs";
import "../_libs/sonner.mjs";
import { S as ShoppingBag, ax as ArrowDownLeft, V as ArrowUpRight } from "../_libs/lucide-react.mjs";

import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";


import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function WalletPage() {
  const {
    balance,
    txs
  } = useWallet();
  const params = useOperationalParams();
  const balanceBRL = (balance * params.cppResgateBrl).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-foreground text-background rounded-[20px] p-6 relative overflow-hidden shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: netfitsMark, alt: "", className: "absolute top-4 right-4 w-8 h-8 object-contain rounded-md bg-background/10 p-0.5 opacity-70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2", children: "Saldo netfits" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-bold tracking-tight", children: balance.toLocaleString("pt-BR") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand font-semibold", children: "nfs" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-400 mt-1", children: [
        "≈ ",
        balanceBRL,
        " em resgates"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/market", className: "w-full bg-brand text-brand-foreground text-xs font-bold py-3 rounded-full hover:brightness-110 active:scale-95 transition shadow-md flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "size-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Resgatar Pontos Netfits no Shop" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-[-10%] bottom-[-30%] w-64 h-64 bg-brand/10 blur-3xl rounded-full" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-950/40 border border-purple-500/30 rounded-2xl p-4 flex items-start gap-3 shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-xl bg-purple-600/20 text-purple-400 grid place-items-center shrink-0 mt-0.5 border border-purple-500/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "🛡️" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white text-xs", children: "Resgate Inteligente (FEFO)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-lime-400/20 text-lime-400 text-[10px] px-2 py-0.5 rounded-full font-mono font-bold border border-lime-400/30", children: "Proteção Ativa" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-zinc-300 leading-relaxed text-[11px]", children: [
          "Seus pontos prestes a vencer são ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "consumidos em 1º lugar" }),
          " em qualquer resgate no shopping ou parceiros. Isso garante que você nunca perca saldo!"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 mt-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground", children: "Lotes de Pontos & Validade" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-purple-400 font-bold font-mono", children: "FEFO Active Order" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [{
        id: "b1",
        source: "Cashback Compra Netfits Shop",
        amount: 450,
        expires: "Em 18 dias",
        days: 18,
        isNext: true
      }, {
        id: "b2",
        source: "Bônus Treino Corrida GPS (Garmin)",
        amount: 1200,
        expires: "Em 140 dias",
        days: 140,
        isNext: false
      }, {
        id: "b3",
        source: "Indicação Amigo Conectado",
        amount: 3500,
        expires: "Em 365 dias",
        days: 365,
        isNext: false
      }].map((batch) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-3 rounded-xl border flex items-center justify-between text-xs transition ${batch.isNext ? "bg-purple-950/30 border-purple-500/40 ring-1 ring-purple-500/20" : "bg-card border-border"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: batch.source }),
            batch.isNext && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold bg-lime-400 text-zinc-950 px-2 py-0.2 rounded-full", children: "🟢 1º A ser consumido" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
            "Vencimento: ",
            batch.expires
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-brand text-sm", children: [
          "+",
          batch.amount,
          " nfs"
        ] })
      ] }, batch.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3", children: "Movimentações" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: txs.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "bg-card rounded-xl p-4 flex items-center gap-3 ring-1 ring-black/5 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-9 rounded-full grid place-items-center ${t.positive ? "bg-purple-600 text-white" : "bg-muted text-foreground"}`, children: t.positive ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownLeft, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium truncate", children: t.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.date })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-bold ${t.positive ? "text-purple-600 dark:text-lime-400" : "text-muted-foreground"}`, children: t.amount })
      ] }, t.id)) })
    ] })
  ] });
}
export {
  WalletPage as component
};
