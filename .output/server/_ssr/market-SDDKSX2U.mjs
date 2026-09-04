import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useWallet, a as useOperationalParams, s as sharedSandboxStore, l as launchMkplaceShop } from "./router-BCCA7P-k.mjs";
import "../_libs/sonner.mjs";
import { Z as Zap, S as ShoppingBag, J as CircleCheck, G as Gift, T as Truck, q as Lock, I as RefreshCw, E as ExternalLink, aw as ArrowLeft } from "../_libs/lucide-react.mjs";

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
function MarketGatewayPage() {
  const {
    balance
  } = useWallet();
  const params = useOperationalParams();
  const activeUser = sharedSandboxStore.useActiveUser();
  const [isConnecting, setIsConnecting] = reactExports.useState(false);
  const handleOpenStore = async () => {
    setIsConnecting(true);
    try {
      await launchMkplaceShop({
        userId: activeUser.id
      });
    } finally {
      setIsConnecting(false);
    }
  };
  const cashEquivalent = (balance * (params?.cppResgateBrl || 0.1)).toFixed(2);
  const baseRate = params?.nfsEarnedPerBrlSpent || 4;
  const clubRate = params?.nfsEarnedPerBrlSpentDouble || 8;
  const firstPurchaseBonus = params?.shopFirstPurchaseBonusNfs || 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-6 space-y-6 max-w-md mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-purple-100 text-purple-700 border border-purple-200 flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "size-3 text-purple-600" }),
          "Loja Oficial Parceira"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-zinc-500 font-semibold", children: "Powered by Rock Encantech" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-black tracking-tight text-zinc-900", children: "shop" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-600 leading-relaxed", children: "O marketplace oficial da vida em movimento. Acesso unificado via Single Sign-On (SSO) com seus pontos e dados de entrega integrados." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-zinc-900 via-zinc-900 to-purple-950 text-white rounded-2xl p-5 shadow-xl border border-zinc-800 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-full bg-purple-600/30 border border-purple-500/40 grid place-items-center text-purple-300 font-bold text-xs", children: activeUser.fullName ? activeUser.fullName.charAt(0) : "A" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-white block", children: activeUser.fullName || "Atleta Netfits" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-lime-400 font-semibold", children: "Atleta Conectado · Saldo Ativo" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-zinc-400 block", children: "Saldo na Carteira" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-black text-lime-400 font-mono", children: [
              balance.toLocaleString(),
              " nfs"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-zinc-950/80 rounded-xl border border-zinc-800/80 grid grid-cols-2 gap-3 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-zinc-400 block", children: "Equivalente em R$:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-white font-mono", children: [
              "R$ ",
              cashEquivalent
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-zinc-400 block", children: "Acúmulo no Shop:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-purple-300 font-mono", children: [
              baseRate,
              " a ",
              clubRate,
              " nfs / R$"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl p-5 shadow-sm border border-zinc-200 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-purple-50 text-purple-600 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "size-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold text-zinc-900", children: "Acesse o Catálogo Oficial Completo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-600 leading-relaxed", children: "Calçados de alta performance, suplementos, vestuário técnico e equipamentos esportivos com garantia de procedência oficial." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-1 border-t border-zinc-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-zinc-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-emerald-600 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
              baseRate,
              " nfs por R$"
            ] }),
            " (",
            clubRate,
            " nfs para Netfits Club)"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-zinc-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "size-4 text-amber-500 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
              "+",
              firstPurchaseBonus,
              " nfs de bônus"
            ] }),
            " no seu 1º pedido na loja"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-zinc-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "size-4 text-purple-600 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Endereço de entrega preenchido automaticamente" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-zinc-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "size-4 text-zinc-600 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Autenticação unificada segura (Single Sign-On)" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: handleOpenStore, disabled: isConnecting, className: "w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 transition active:scale-98 shadow-lg shadow-purple-600/20", children: isConnecting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "size-4 animate-spin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Conectando à Rock Encantech..." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Entrar na Loja Oficial" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-4" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-center text-zinc-400", children: "Você será conectado automaticamente com o seu perfil Netfits." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-3.5" }),
      "Voltar para o Feed de Atividades"
    ] }) })
  ] });
}
export {
  MarketGatewayPage as component
};
