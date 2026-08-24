import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useLocation, L as Link } from "../_libs/tanstack__react-router.mjs";
import { d as netfitsDarkLogo } from "./router-BFFZWipM.mjs";
import { H as House, a3 as Lock, h as Users, B as Building2, ak as CircleQuestionMark, a9 as Mail, x as Download, A as Activity } from "../_libs/lucide-react.mjs";
function InstitutionalWebHeader() {
  const location = useLocation();
  const currentPath = location.pathname;
  const navLinks = [
    { to: "/home", label: "Home", icon: House, color: "hover:text-purple-400" },
    { to: "/admin", label: "Admin", icon: Lock, color: "hover:text-purple-400" },
    { to: "/associado", label: "Associados", icon: Users, color: "hover:text-amber-400" },
    { to: "/parceiros", label: "Parceiros", icon: Building2, color: "hover:text-lime-400" },
    { to: "/faq", label: "FAQ", icon: CircleQuestionMark, color: "hover:text-cyan-400" },
    { to: "/contato", label: "Contato", icon: Mail, color: "hover:text-indigo-400" },
    { to: "/download", label: "Download App", icon: Download, color: "hover:text-lime-400" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80 px-6 py-4 transition-all", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/home", className: "flex items-center gap-2.5 shrink-0 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: netfitsDarkLogo,
            alt: "Netfits",
            className: "h-9 w-auto object-contain rounded-lg bg-zinc-900 p-1 border border-zinc-800 group-hover:border-purple-500/50 transition"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-extrabold tracking-tight text-xl text-white flex items-center gap-1", children: [
          "Netfits ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-lime-400 font-mono", children: "WEB" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-5 text-xs font-semibold text-zinc-300", children: navLinks.map((item) => {
        const isActive = currentPath === item.to || item.to === "/home" && currentPath === "/";
        const Icon = item.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: item.to,
            className: `transition-all flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg ${isActive ? "text-white font-extrabold bg-zinc-900 border border-zinc-700 shadow-sm" : `text-zinc-400 ${item.color} hover:bg-zinc-900/50`}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `size-3.5 ${isActive ? "text-lime-400" : ""}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label })
            ]
          },
          item.to
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/",
          className: "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs px-4 py-2.5 rounded-full shadow-lg shadow-purple-600/30 transition-all duration-200 flex items-center gap-1.5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "size-4" }),
            "Abrir App Netfits →"
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden flex items-center justify-around pt-3 mt-3 border-t border-zinc-900 text-[11px] font-semibold text-zinc-400 overflow-x-auto no-scrollbar gap-2", children: navLinks.map((item) => {
      const isActive = currentPath === item.to;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: item.to,
          className: `px-2 py-1 rounded transition-colors whitespace-nowrap ${isActive ? "text-lime-400 font-bold bg-zinc-900" : "hover:text-white"}`,
          children: item.label
        },
        item.to
      );
    }) })
  ] });
}
export {
  InstitutionalWebHeader as I
};
