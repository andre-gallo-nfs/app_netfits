import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { f as feedItems } from "./feed-data-CXusMQi4.mjs";
import { P as ProductDetailSheet } from "./ProductDetailSheet-Cp8x4zzo.mjs";
import { n as netfitsMark } from "./netfits-mark-DN6CUhW7.mjs";
import { s as sharedSandboxStore, w as wallet, u as useOperationalParams } from "./router-Be3QCRrd.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { c as ArrowRight, h as Check, P as Play, g as Share2, X, d as Sparkles, G as Gift, i as Users, b as Copy, A as Activity, f as Heart, j as ShieldCheck, L as Link2, k as MapPin, l as Eye, B as Bookmark, S as ShoppingBag } from "../_libs/lucide-react.mjs";

import "../_libs/unenv.mjs";




import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";

import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const CHANNELS$1 = [
  { key: "wpp", label: "WhatsApp", color: "bg-[#25D366]" },
  { key: "ig", label: "Instagram", color: "bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600" },
  { key: "tg", label: "Telegram", color: "bg-[#229ED9]" },
  { key: "x", label: "X", color: "bg-black" },
  { key: "tt", label: "TikTok", color: "bg-black" },
  { key: "fb", label: "Facebook", color: "bg-[#1877F2]" },
  { key: "msg", label: "Mensagens", color: "bg-emerald-500" },
  { key: "mail", label: "E-mail", color: "bg-zinc-700" }
];
function InviteFriendsCard() {
  const activeUser = sharedSandboxStore.useActiveUser();
  const inviteCode = activeUser.referralCode;
  const inviteUrl = `https://app-netfits.vercel.app/auth?ref=${inviteCode}`;
  const shareText = `Vem pro Netfits comigo! Cadastre-se pelo meu link de convite e ganhe +50 nfs bônus de boas-vindas: ${inviteUrl}`;
  const [open, setOpen] = reactExports.useState(false);
  const [copied, setCopied] = reactExports.useState(false);
  const [sentChannels, setSentChannels] = reactExports.useState([]);
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(inviteUrl);
      toast.success(`📋 Link direto de cadastro copiado! (${inviteUrl})`);
    } catch {
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  const handleChannel = (key) => {
    setSentChannels((prev) => prev.includes(key) ? prev : [...prev, key]);
    const encoded = encodeURIComponent(shareText);
    const url = key === "wpp" ? `https://wa.me/?text=${encoded}` : key === "tg" ? `https://t.me/share/url?url=${encodeURIComponent(inviteUrl)}&text=${encoded}` : key === "x" ? `https://twitter.com/intent/tweet?text=${encoded}` : key === "fb" ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(inviteUrl)}` : key === "mail" ? `mailto:?subject=${encodeURIComponent("Vem pro Netfits")}&body=${encoded}` : key === "msg" ? `sms:?&body=${encoded}` : null;
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };
  const closeShare = () => {
    setOpen(false);
    setTimeout(() => setSentChannels([]), 200);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "relative overflow-hidden rounded-[20px] bg-foreground text-background p-6 ring-1 ring-zinc-950/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-16 -top-16 size-56 rounded-full bg-brand/25 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-10 -bottom-20 size-48 rounded-full bg-brand/15 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded bg-brand text-brand-foreground text-[10px] font-bold uppercase tracking-widest", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3" }),
            " Sua tribo, seu progresso"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: netfitsMark,
              alt: "",
              className: "ml-auto w-9 h-9 object-contain rounded-lg bg-background/10 p-1 opacity-80"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-[22px] font-semibold leading-tight text-balance mb-2", children: [
          activeUser.fullName.split(" ")[0],
          ", chame sua tribo e ganhe nfs ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "para sempre" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-zinc-400 text-pretty mb-5 max-w-[38ch]", children: "Todo amigo que entrar pelo seu link vira parte da sua tribo. Sempre que eles acumularem netfits, você também recebe. Sem limite." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat$1, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-3.5" }), value: "12", label: "já entraram" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat$1, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "size-3.5" }), value: "+2.480", label: "nfs gerados" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat$1, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3.5" }), value: "∞", label: "recorrente" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-background/10 ring-1 ring-background/15 rounded-full pl-4 pr-1 py-1 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-widest text-zinc-400 shrink-0", children: "Código" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-sm font-bold tracking-wider truncate", children: inviteCode }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: copyLink,
              className: "shrink-0 flex items-center gap-1 bg-background text-foreground text-xs font-semibold px-3 py-1.5 rounded-full active:scale-95 transition-transform",
              "aria-label": "Copiar link",
              children: [
                copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "size-3.5" }),
                copied ? "Copiado" : "Copiar"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setOpen(true),
            className: "w-full bg-brand text-brand-foreground text-sm font-bold py-3 rounded-full flex items-center justify-center gap-2 active:scale-[0.98] transition-transform",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "size-4" }),
              "Compartilhar convite"
            ]
          }
        )
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/40 flex items-end justify-center",
        onClick: closeShare,
        role: "dialog",
        "aria-label": "Compartilhar convite",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "w-full max-w-md bg-white text-zinc-900 rounded-t-2xl p-5 pb-8 shadow-2xl border-t border-zinc-200",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-10 h-1 rounded-full bg-zinc-300 mb-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Compartilhar convite" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: closeShare,
                    className: "size-8 grid place-items-center rounded-full hover:bg-muted",
                    "aria-label": "Fechar",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Cada amigo que entrar pelo seu link vira fonte de nfs." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-muted rounded-full pl-4 pr-1 py-1 mb-5 ring-1 ring-black/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-xs font-medium truncate text-muted-foreground", children: INVITE_URL }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: copyLink,
                    className: "shrink-0 flex items-center gap-1 bg-foreground text-background text-xs font-semibold px-3 py-1.5 rounded-full active:scale-95",
                    children: [
                      copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "size-3.5" }),
                      copied ? "Copiado" : "Copiar"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-3", children: CHANNELS$1.map((c) => {
                const done = sentChannels.includes(c.key);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => handleChannel(c.key),
                    className: "flex flex-col items-center gap-1.5 active:scale-95",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: `size-12 rounded-full grid place-items-center text-white ${c.color} ring-1 ring-black/5 relative`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "size-5" }),
                            done && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-0.5 -right-0.5 size-4 rounded-full bg-brand grid place-items-center ring-2 ring-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-2.5 text-brand-foreground" }) })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium text-center", children: c.label })
                    ]
                  },
                  c.key
                );
              }) })
            ]
          }
        )
      }
    )
  ] });
}
function Stat$1({
  icon,
  value,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-background/10 ring-1 ring-background/10 px-2 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-brand", children: [
      icon,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-bold leading-none", children: value })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400 mt-1 leading-tight", children: label })
  ] });
}
const draIsabella = "/assets/dra-isabella-MfvObR2M.jpeg";
function DrIsabellaCard() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground", children: "Parceiro · Saúde & Longevidade" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setOpen(true),
        className: "block w-full text-left active:scale-[0.99] transition-transform",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: draIsabella,
                alt: "Dra. Isabella Formigari",
                loading: "lazy",
                className: "w-full aspect-[4/5] object-cover rounded-xl ring-1 ring-black/5"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 bg-brand text-brand-foreground text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded", children: "Protocolo Fibios" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 rounded-full bg-background/95 ring-1 ring-black/10 grid place-items-center shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-7 ml-0.5 fill-foreground text-foreground" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded", children: "4:12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 right-3 text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest opacity-90", children: "Dra. Isabella Formigari" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-80", children: "Médica · Pós Graduação em Medicina do Esporte (Einstein SP) · CRM-SP 282951" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold leading-tight text-balance mb-1", children: "Mesmo atleta amador precisa de acompanhamento médico." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground text-pretty mb-3", children: [
            "Conheça o ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Protocolo Fibios" }),
            " — exames, biomarcadores e plano de longevidade para quem treina sério, em qualquer nível."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setOpen(true),
        className: "w-full bg-foreground text-background text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-4 fill-background" }),
          "Assistir vídeo · 4:12"
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/80 flex items-end sm:items-center justify-center",
        onClick: () => setOpen(false),
        role: "dialog",
        "aria-label": "Vídeo Dra. Isabella Formigari",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "w-full max-w-md bg-white text-zinc-900 rounded-t-2xl sm:rounded-2xl max-h-[92vh] overflow-y-auto shadow-2xl border border-zinc-200",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: draIsabella,
                    alt: "Dra. Isabella Formigari",
                    className: "w-full aspect-video object-cover"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 rounded-full bg-background/95 grid place-items-center shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-7 ml-0.5 fill-foreground text-foreground" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setOpen(false),
                    className: "absolute top-3 right-3 size-9 rounded-full bg-background/90 grid place-items-center",
                    "aria-label": "Fechar",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded", children: "4:12" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-brand mb-1", children: "Protocolo Fibios · Longevidade" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold leading-tight mb-1", children: "Dra. Isabella Formigari" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Médica · Pós Graduação em Medicina do Esporte (Einstein SP) · CRM-SP 282951" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground text-pretty mb-4", children: [
                  '"Treinar bem é só metade do caminho. O que sustenta o atleta amador a longo prazo é entender o próprio corpo — inflamação, sono, hormônios, recuperação. O',
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Protocolo Fibios" }),
                  ' traduz seus exames em um plano vivo de longevidade."'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 mb-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PillarStat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "size-4" }), label: "Performance" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PillarStat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-4" }), label: "Cardio & sono" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PillarStat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4" }), label: "Prevenção" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted rounded-xl p-3 mb-4 ring-1 ring-black/5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1", children: "Inclui no protocolo" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs text-foreground space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "· Painel completo de biomarcadores" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "· Avaliação cardiorrespiratória e composição corporal" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "· Plano individual de suplementação e recuperação" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "· Acompanhamento trimestral com a equipe Fibios" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full bg-brand text-brand-foreground text-sm font-bold py-3 rounded-full", children: "Agendar avaliação Fibios" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-center text-muted-foreground mt-2", children: "Cashback Netfits em consultas · 5% nfs" })
              ] })
            ]
          }
        )
      }
    )
  ] });
}
function PillarStat({ icon, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted rounded-lg p-2 ring-1 ring-black/5 flex flex-col items-center gap-1 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold leading-tight", children: label })
  ] });
}
const smartfitLogo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201546%20564.07'%3e%3cg%3e%3cpath%20fill='%23fbba00'%20fill-rule='evenodd'%20d='M1010.65,401.58V105.18c0-100.59,105.71-122.19,181.17-93.5V68c-51.86-21.13-110.13-16.26-110.13,49.33H1166V173.6h-84.31V400.48Z'/%3e%3cpath%20fill='%23fbba00'%20fill-rule='evenodd'%20d='M1345.34,73.37h52.5l10.78,44h65.3V173.6h-57.51v131q0,39.36,34,39.4h36v56.24h-70.28q-70.78,0-70.78-75.81Z'/%3e%3crect%20fill='%23fbba00'%20x='1220.16'%20y='117.35'%20width='71.04'%20height='282.85'/%3e%3crect%20fill='%23fbba00'%20x='1220.16'%20y='14.98'%20width='71.04'%20height='58.39'/%3e%3cpath%20fill='%23fbba00'%20fill-rule='evenodd'%20d='M1546,400.28c-62.42,98.42-172.33,163.78-297.49,163.78s-235-65.36-297.45-163.79c73.35,67.56,179.46,110,297.45,110s224.13-42.47,297.49-110'/%3e%3cpath%20fill='%23ffffff'%20d='M8.77,335.21V296.57q30.72,12.3,70.93,12.29,30,0,30-19.29c0-11.74-6.77-17.55-20.19-17.55H56.14Q0,272,0,215.8,0,158,82,158a201.1,201.1,0,0,1,65.48,10.48v38.64c-20.5-8.21-42.69-12.27-66.72-12.27-25.18,0-37.7,6.41-37.7,19.29Q43,231.61,65,231.63H94.77q61.38,0,61.42,56.13,0,58-78.25,57.94-38.46,0-69.17-10.49M188.65,344V159.68h36l5.44,23.18c21.14-15.45,42.18-23.18,63-23.18q34.79,0,49.36,25.28,35.22-25.32,66.12-25.28,58.32,0,58.31,70V344H420.31v-116q0-30.64-25.93-30.68-20.76,0-43.39,23.85V344H304.52V228.46q0-31.19-25.63-31.22-22.14,0-43.67,23.85V344Zm311.89-57.39q0-56.68,80-56.66a236.5,236.5,0,0,1,42.85,3.46v-12.1q0-24.71-47.93-24.73a211.31,211.31,0,0,0-60,8.79v-36.9a212.69,212.69,0,0,1,60-8.75q94.46,0,94.4,60.7V344H646.34l-20-13a105.4,105.4,0,0,1-51.2,13q-74.61,0-74.58-57.39m122.86-18.1c-11.75-2.33-26-3.46-42.85-3.46Q547,265,547,286t28.11,21.09q28.38,0,48.28-14.38ZM715.17,344V159.68h36l5.74,23.49q24.29-23.44,51.3-23.49v37.56q-26,0-46.5,23.3V344ZM837,129.85H871.4l7.07,29.83h42.78v36.86H883.57V281.3q0,25.79,22.28,25.82h15.4V344H883.4Q837,344,837,294.29Z'/%3e%3c/g%3e%3c/svg%3e";
const MENSALIDADE = 109.9;
function SmartFitCard() {
  const [open, setOpen] = reactExports.useState(false);
  const [linked, setLinked] = reactExports.useState(false);
  const [requesting, setRequesting] = reactExports.useState(false);
  const nfsPerMonth = Math.round(MENSALIDADE);
  const handleRequest = () => {
    if (linked || requesting) return;
    setRequesting(true);
    setTimeout(() => {
      setRequesting(false);
      setLinked(true);
    }, 1200);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground", children: "Parceiro · Rede de academias" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl overflow-hidden ring-1 ring-black/5 bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-black p-5 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 right-0 w-1.5 bg-[#FBBA00]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -bottom-10 size-44 rounded-full bg-[#FBBA00]/10 blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: smartfitLogo,
                alt: "Smart Fit",
                className: "h-8 w-auto mb-3"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-extrabold leading-tight text-white text-balance", children: [
              "1 nf por real ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "da ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FBBA00]", children: "mensalidade" }),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/70 mt-2 max-w-[28ch]", children: "Vincule sua matrícula uma vez. Cada mensalidade paga vira netfits, automaticamente." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 bg-[#FBBA00] text-black text-[10px] font-extrabold uppercase tracking-widest px-2 py-1 rounded", children: "Parceiro" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "1:1", label: "real → nf" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: `+${nfsPerMonth}`, label: "nfs / mês" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "Auto", label: "recorrente" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-2 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { n: 1, text: "Solicite o vínculo da sua matrícula.", done: linked }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { n: 2, text: "Pague a mensalidade como sempre.", done: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { n: 3, text: "Receba os nfs no mesmo dia da fatura.", done: false })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setOpen(true),
            className: `w-full text-sm font-bold py-3 rounded-full flex items-center justify-center gap-2 ${linked ? "bg-emerald-500 text-white" : "bg-foreground text-background"}`,
            children: linked ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4" }),
              "Matrícula vinculada"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "size-4" }),
              "Solicitar vínculo da matrícula"
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-center text-muted-foreground mt-2", children: "Funciona em qualquer unidade Smart Fit do Brasil." })
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/60 flex items-end sm:items-center justify-center",
        onClick: () => setOpen(false),
        role: "dialog",
        "aria-label": "Vincular Smart Fit",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "w-full max-w-md bg-white text-zinc-900 rounded-t-2xl sm:rounded-2xl max-h-[92vh] overflow-y-auto shadow-2xl border border-zinc-200",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-black/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 px-2 rounded bg-black grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: smartfitLogo, alt: "Smart Fit", className: "h-4 w-auto" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: "Parceiro" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold leading-none", children: "Smart Fit" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setOpen(false),
                    className: "size-9 rounded-full bg-muted grid place-items-center",
                    "aria-label": "Fechar",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black rounded-xl p-4 mb-4 text-white relative overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 right-0 w-1.5 bg-[#FBBA00]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest mb-1 text-[#FBBA00]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3" }),
                    "Recompensa"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-extrabold leading-tight", children: [
                    "1 nf por ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FBBA00]", children: "real pago" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/70 mt-1", children: "Acumulado em toda mensalidade confirmada." })
                ] }),
                !linked ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold mb-1.5", children: "CPF do titular da matrícula" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      inputMode: "numeric",
                      placeholder: "000.000.000-00",
                      className: "w-full bg-muted ring-1 ring-black/5 rounded-lg px-3 py-2.5 text-sm mb-3 outline-none focus:ring-foreground"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold mb-1.5", children: "Número da matrícula Smart Fit" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      inputMode: "numeric",
                      placeholder: "Ex.: 8821-7",
                      className: "w-full bg-muted ring-1 ring-black/5 rounded-lg px-3 py-2.5 text-sm mb-3 outline-none focus:ring-foreground"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold mb-1.5", children: "Unidade" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      className: "w-full bg-muted ring-1 ring-black/5 rounded-lg px-3 py-2.5 text-sm mb-4 outline-none focus:ring-foreground",
                      defaultValue: "",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Selecione sua unidade" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Smart Fit Faria Lima" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Smart Fit Paulista" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Smart Fit Vila Mariana" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Smart Fit Pinheiros" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: handleRequest,
                      disabled: requesting,
                      className: "w-full bg-foreground text-background text-sm font-bold py-3 rounded-full flex items-center justify-center gap-2 disabled:opacity-60",
                      children: requesting ? "Vinculando…" : "Confirmar e vincular"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-center text-muted-foreground mt-2", children: "Validamos com a Smart Fit em até 24 h." })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-full bg-emerald-500 grid place-items-center mx-auto mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-7 text-white" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold mb-1", children: "Matrícula vinculada!" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground text-pretty mb-4", children: [
                    "A partir da sua próxima mensalidade, você ganha",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-foreground", children: [
                      nfsPerMonth,
                      " nfs"
                    ] }),
                    " automaticamente."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setOpen(false),
                      className: "w-full bg-foreground text-background text-sm font-bold py-3 rounded-full",
                      children: "Fechar"
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      }
    )
  ] });
}
function Stat({ value, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted rounded-lg p-2 ring-1 ring-black/5 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-extrabold leading-none", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-1", children: label })
  ] });
}
function Step({ n, text, done }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: `shrink-0 size-6 rounded-full grid place-items-center text-[11px] font-bold ${done ? "bg-emerald-500 text-white" : "bg-muted text-foreground ring-1 ring-black/5"}`,
        children: done ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5" }) : n
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground pt-0.5", children: text })
  ] });
}
const asicsHero = "/assets/asics-novablast-qmC10-ut.jpg";
const CHANNELS = [
  { key: "ig", label: "Instagram", color: "bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600" },
  { key: "wpp", label: "WhatsApp", color: "bg-[#25D366]" },
  { key: "tt", label: "TikTok", color: "bg-black" },
  { key: "x", label: "X", color: "bg-black" },
  { key: "fb", label: "Facebook", color: "bg-[#1877F2]" },
  { key: "tg", label: "Telegram", color: "bg-[#229ED9]" }
];
function SponsorCard() {
  const [videoOpen, setVideoOpen] = reactExports.useState(false);
  const [watched, setWatched] = reactExports.useState(false);
  const [progress, setProgress] = reactExports.useState(0);
  const [shareOpen, setShareOpen] = reactExports.useState(false);
  const [shared, setShared] = reactExports.useState([]);
  const [bonus, setBonus] = reactExports.useState(false);
  const timer = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!videoOpen) return;
    setProgress(0);
    const start = Date.now();
    const tick = () => {
      const elapsed = (Date.now() - start) / 1e3;
      const pct = Math.min(100, elapsed / 30 * 100);
      setProgress(pct);
      if (pct >= 100) {
        setWatched((prev) => {
          if (!prev) wallet.earn(10, "Assistiu filme ASICS Novablast™ 5");
          return true;
        });
        return;
      }
      timer.current = window.setTimeout(tick, 100);
    };
    tick();
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [videoOpen]);
  const handleShare = (key) => {
    if (!shared.includes(key)) {
      const next = [...shared, key];
      setShared(next);
      if (!bonus) {
        setBonus(true);
        wallet.earn(10, "Compartilhou filme ASICS Novablast™ 5");
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 pb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[20px] overflow-hidden ring-1 ring-black/5 bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-end px-4 py-2.5 bg-[#0A1A4F] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AsicsLogo, { className: "h-3.5 w-auto text-white" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-semibold tracking-[0.2em] text-white/70 uppercase hidden sm:inline", children: "Sound Mind, Sound Body" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setVideoOpen(true),
          className: "block w-full text-left relative active:scale-[0.99] transition-transform",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-video w-full relative overflow-hidden bg-[#0A1A4F]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: asicsHero,
                alt: "Campanha ASICS Novablast 5",
                className: "absolute inset-0 w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white text-[#0A1A4F] text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded", children: "Filme · 30s" }),
              watched && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3" }),
                " Assistido"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 bg-[#0A1A4F]/85 rounded px-1.5 py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AsicsLogo, { className: "h-3.5 w-auto text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 right-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-white/80", children: "Novablast™ 5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black leading-tight text-white text-balance drop-shadow", children: "Sinta o conforto, encontre a energia." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 rounded-full bg-white/95 ring-1 ring-black/10 grid place-items-center shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-7 ml-1 fill-[#0A1A4F] text-[#0A1A4F]" }) }) })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold leading-tight text-balance mb-1", children: "Assista ao novo filme da ASICS e ganhe netfits." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-pretty mb-4", children: "30 segundos da campanha Novablast™ 5 — mais energia para movimentar corpo e mente. Assista, compartilhe e acumule." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `rounded-xl p-3 ring-1 transition-colors ${watched ? "bg-brand/10 ring-brand/30" : "bg-muted ring-black/5"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-3.5 text-brand" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: "Assistir" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold", children: [
                  "+10 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "nfs" })
                ] }),
                watched && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-emerald-600 font-semibold mt-0.5 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3" }),
                  " Creditados"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `rounded-xl p-3 ring-1 transition-colors ${bonus ? "bg-brand/10 ring-brand/30" : "bg-muted ring-black/5"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "size-3.5 text-brand" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: "Compartilhar" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold", children: [
                  "+10 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "nfs" })
                ] }),
                bonus && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-emerald-600 font-semibold mt-0.5 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3" }),
                  " Bônus liberado"
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setVideoOpen(true),
              className: "flex-1 bg-foreground text-background text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-2 active:scale-95",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-4 fill-current" }),
                watched ? "Assistir novamente" : "Assistir · 30s"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setShareOpen(true),
              disabled: !watched,
              className: "flex-1 bg-brand text-brand-foreground text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-2 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "size-4" }),
                "Compartilhar"
              ]
            }
          )
        ] }),
        !watched && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-2 text-center", children: "Assista o filme completo para liberar o compartilhamento." })
      ] })
    ] }),
    videoOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4",
        onClick: () => setVideoOpen(false),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "w-full max-w-md bg-black rounded-2xl overflow-hidden relative",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setVideoOpen(false),
                  className: "absolute top-3 right-3 z-10 size-9 rounded-full bg-white/15 grid place-items-center text-white",
                  "aria-label": "Fechar",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-video w-full relative overflow-hidden bg-[#0A1A4F]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: asicsHero,
                    alt: "Campanha ASICS Novablast 5",
                    className: "absolute inset-0 w-full h-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-5 right-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-white/80", children: "Novablast™ 5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-black leading-tight text-white drop-shadow", children: "Sinta o conforto, encontre a energia." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-white/80 mt-1", children: "Apresentado por ASICS" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 bg-[#0A1A4F]/85 rounded px-2 py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AsicsLogo, { className: "h-4 w-auto text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-white/95 text-[#0A1A4F] text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded", children: [
                  Math.min(30, Math.round(progress / 100 * 30)),
                  "s / 30s"
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-full bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full bg-brand transition-[width] duration-100",
                  style: { width: `${progress}%` }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-zinc-950 text-white", children: watched ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-full bg-brand grid place-items-center text-brand-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold", children: "+10 nfs creditados!" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/60", children: "Compartilhe e ganhe +10" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => {
                      setVideoOpen(false);
                      setTimeout(() => setShareOpen(true), 150);
                    },
                    className: "bg-brand text-brand-foreground text-xs font-bold px-4 py-2 rounded-full",
                    children: "Compartilhar"
                  }
                )
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/70", children: "Assistindo… continue até o fim para ganhar 10 nfs." }) })
            ]
          }
        )
      }
    ),
    shareOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/40 flex items-end justify-center",
        onClick: () => setShareOpen(false),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "w-full max-w-md bg-white text-zinc-900 rounded-t-2xl p-5 pb-8 shadow-2xl border-t border-zinc-200",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold", children: "Compartilhar o filme" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setShareOpen(false),
                    className: "size-8 rounded-full bg-muted grid place-items-center",
                    "aria-label": "Fechar",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-4", children: [
                "Poste em qualquer rede e ganhe ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand font-bold", children: "+10 nfs" }),
                " ",
                "(bônus único por filme)."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-3 mb-4", children: CHANNELS.map((c) => {
                const done = shared.includes(c.key);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => handleShare(c.key),
                    className: "flex flex-col items-center gap-1.5 active:scale-95",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: `size-12 rounded-full ${c.color} grid place-items-center text-white relative ring-1 ring-black/5`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: c.label[0] }),
                            done && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-0.5 -right-0.5 size-4 rounded-full bg-emerald-500 ring-2 ring-background grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-2.5 text-white" }) })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: c.label })
                    ]
                  },
                  c.key
                );
              }) }),
              bonus && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-brand/10 ring-1 ring-brand/30 p-3 flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "size-4 text-brand" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold", children: "Bônus de +10 nfs creditado pelo compartilhamento!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setShareOpen(false),
                  className: "w-full bg-foreground text-background text-xs font-bold py-2.5 rounded-full",
                  children: "Pronto"
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
function AsicsLogo({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      viewBox: "0 0 120 24",
      className,
      "aria-label": "ASICS",
      role: "img",
      fill: "currentColor",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "text",
        {
          x: "0",
          y: "19",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: "22",
          fontWeight: "900",
          fontStyle: "italic",
          letterSpacing: "1",
          children: "ASICS"
        }
      )
    }
  );
}
function FeedPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-8 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(WearableSurveyHero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SponsorCard, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InviteFriendsCard, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DrIsabellaCard, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SmartFitCard, {}),
      feedItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(FeedCard, { item }, item.id)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-8 text-center text-xs text-muted-foreground font-medium", children: "Você chegou ao fim do feed. Novas atualizações em breve." })
    ] })
  ] });
}
function WearableSurveyHero() {
  const [wantsToConnect, setWantsToConnect] = reactExports.useState("sim");
  const [selectedDevice, setSelectedDevice] = reactExports.useState("Garmin");
  const [customDevice, setCustomDevice] = reactExports.useState("");
  const [voted, setVoted] = reactExports.useState(false);
  const devices = [{
    id: "Garmin",
    name: "Garmin"
  }, {
    id: "AppleWatch",
    name: "Apple Watch"
  }, {
    id: "Strava",
    name: "Strava"
  }, {
    id: "SamsungHealth",
    name: "Samsung / Wear OS"
  }, {
    id: "Outro",
    name: "Outro Dispositivo"
  }];
  const handleVote = () => {
    if (voted) return;
    setVoted(true);
    let deviceName = selectedDevice;
    if (selectedDevice === "Outro" && customDevice.trim()) {
      deviceName = customDevice.trim();
    }
    const voteDesc = wantsToConnect === "sim" ? `Sim (${deviceName})` : "Não";
    wallet.earn(10, `Pesquisa de Sincronia: ${voteDesc}`);
    toast.success("Voto registrado! (+10 nfs creditados)");
  };
  const finalDeviceLabel = selectedDevice === "Outro" && customDevice.trim() ? customDevice.trim() : selectedDevice;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-white shadow-sm space-y-3.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 rounded-full bg-purple-950/80 text-purple-300 border border-purple-500/30 text-[10px] font-bold uppercase tracking-wider", children: "Pesquisa de Integração" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-purple-400 font-mono", children: "+10 nfs bônus" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold text-white leading-snug", children: "Gostaria de conectar seu relógio ou app de treino?" }),
      !voted && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pt-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setWantsToConnect("sim"), className: `flex-1 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${wantsToConnect === "sim" ? "bg-purple-600 text-white border-purple-500 shadow-sm" : "bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white"}`, children: "Sim" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setWantsToConnect("nao"), className: `flex-1 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${wantsToConnect === "nao" ? "bg-purple-600 text-white border-purple-500 shadow-sm" : "bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white"}`, children: "Não" })
      ] })
    ] }),
    !voted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-1", children: [
      wantsToConnect === "sim" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400 leading-relaxed", children: "Qual dispositivo você mais usa para registrar suas atividades físicas?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: devices.map((dev) => {
          const isSelected = selectedDevice === dev.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setSelectedDevice(dev.id), className: `px-3 py-2 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${isSelected ? "bg-purple-600 text-white border-purple-500 shadow-sm" : "bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: dev.name }) }, dev.id);
        }) }),
        selectedDevice === "Outro" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: customDevice, onChange: (e) => setCustomDevice(e.target.value), placeholder: "Qual o nome do relógio/app? (ex: Coros, Polar, Suunto...)", className: "w-full bg-zinc-950/80 border border-zinc-700 focus:border-purple-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none transition" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: handleVote, className: "w-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-sm active:scale-98 transition-all cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Votar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 border border-purple-500/30 rounded-xl p-3.5 text-center space-y-1.5 animate-in fade-in", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-7 rounded-full bg-purple-600 text-white grid place-items-center mx-auto shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 stroke-[3]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-white", children: [
        "Voto Registrado: ",
        wantsToConnect === "sim" ? `Sim (${finalDeviceLabel})` : "Não"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-400", children: "Obrigado! Sua resposta foi gravada com sucesso e +10 nfs foram creditados." })
    ] })
  ] }) });
}
function FeedCard({
  item
}) {
  if (item.type === "story") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { name: item.author, initials: item.authorInitials, timeAgo: item.timeAgo }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.title, loading: "lazy", className: "w-full aspect-[4/5] object-cover rounded-xl ring-1 ring-black/5 mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold leading-tight text-balance mb-1", children: item.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-pretty mb-3", children: item.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SocialActions, { id: item.id, title: item.title })
    ] });
  }
  if (item.type === "video") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(VideoFeedCard, { item });
  }
  if (item.type === "product") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ProductFeedCard, { item });
  }
  if (item.type === "spot") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground", children: "Parceiro · Clínica médica" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.title, loading: "lazy", className: "w-full aspect-video object-cover rounded-xl ring-1 ring-black/5 mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold leading-tight", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-3" }),
            " ",
            item.location
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-brand", children: item.tier }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] text-muted-foreground", children: "Cashback em consultas" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SocialActions, { id: item.id, title: item.title })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl p-5 ring-1 ring-black/5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 shrink-0 rounded-xl bg-brand grid place-items-center text-brand-foreground font-bold text-lg", children: item.name.split(" ").slice(0, 2).map((s) => s[0]).join("") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-brand uppercase tracking-widest", children: "Profissional verificado" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold leading-tight", children: item.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: item.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-pretty mb-3", children: item.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold", children: [
            item.price,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium text-brand", children: item.cashback })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-foreground text-background text-xs font-semibold px-4 py-2 rounded-full", children: "Agendar" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SocialActions, { id: item.id, title: item.name })
  ] }) });
}
function ProductFeedCard({
  item
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(true), className: "block w-full text-left active:scale-[0.99] transition-transform", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground", children: item.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-brand-foreground bg-brand px-2 py-0.5 rounded", children: item.cashback })
        ] }),
        item.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-[10px] font-bold tracking-widest text-white bg-lime-500 px-2 py-0.5 rounded", children: item.badge }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.title, loading: "lazy", className: "w-full aspect-[4/5] object-cover rounded-xl ring-1 ring-black/5 mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold leading-tight text-balance mb-1", children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-pretty mb-3", children: item.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold block mb-3", children: item.price })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(true), className: "w-full mb-3 bg-foreground text-background text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "size-4" }),
        "Ver produto · ",
        item.price
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SocialActions, { id: item.id, title: item.title })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(ProductDetailSheet, { product: {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      cashback: item.cashback,
      badge: item.badge,
      description: item.description,
      tag: item.tag
    }, onClose: () => setOpen(false) })
  ] });
}
function VideoFeedCard({
  item
}) {
  const params = useOperationalParams();
  const [isPlayingModalOpen, setIsPlayingModalOpen] = reactExports.useState(false);
  const [progress, setProgress] = reactExports.useState(0);
  const [isCompleted, setIsCompleted] = reactExports.useState(false);
  const [rewarded, setRewarded] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let timer = null;
    if (isPlayingModalOpen && !isCompleted) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setIsCompleted(true);
            return 100;
          }
          return prev + 10;
        });
      }, 400);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlayingModalOpen, isCompleted]);
  reactExports.useEffect(() => {
    if (isCompleted && !rewarded) {
      setRewarded(true);
      const points = params.nfsPerPostView || 15;
      wallet.earn(points, `Visualização 100% Completa de Vídeo: ${item.title}`);
      sharedSandboxStore.rewardEngagement("view", item.title);
      toast.success(`🎉 Retenção de 100% atingida! +${points} nfs creditados na sua carteira!`);
    }
  }, [isCompleted, rewarded, item.title, params.nfsPerPostView]);
  const handleCloseModal = () => {
    if (!isCompleted) {
      toast.error("🚫 Antifraude Netfits: Premiação cancelada. O vídeo precisa ser visto 100% até o final para pontuar.");
    }
    setIsPlayingModalOpen(false);
    setProgress(0);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { name: item.author, initials: item.authorInitials, timeAgo: item.timeAgo }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => setIsPlayingModalOpen(true), className: "relative mb-3 cursor-pointer group rounded-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.poster, alt: item.title, loading: "lazy", className: "w-full aspect-video object-cover rounded-xl ring-1 ring-black/5 group-hover:scale-105 transition-transform duration-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/30 grid place-items-center group-hover:bg-black/40 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-full bg-background/95 ring-1 ring-black/10 grid place-items-center shadow-lg group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-6 ml-0.5 fill-foreground text-foreground" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md backdrop-blur-sm", children: item.duration }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 left-2 bg-purple-950/90 text-purple-200 border border-purple-500/40 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md backdrop-blur-sm flex items-center gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🛡️ Antifraude: 100% Dwell Time" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold leading-tight text-balance mb-1", children: item.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-pretty mb-2", children: item.excerpt }),
      rewarded ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 p-2.5 rounded-xl bg-lime-500/10 border border-lime-500/30 text-lime-400 text-xs font-bold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Vídeo assistido por completo (100% de retenção) — +",
          params.nfsPerPostView || 15,
          " nfs creditados"
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300 text-[11px] font-medium flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4 text-lime-400 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Regra Antifraude: Assista 100% do vídeo (",
          item.duration,
          ") para receber +",
          params.nfsPerPostView || 15,
          " nfs"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SocialActions, { id: item.id, title: item.title })
    ] }),
    isPlayingModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-purple-500/30 rounded-3xl p-6 max-w-lg w-full shadow-2xl space-y-4 text-left animate-in fade-in zoom-in-95", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-zinc-800 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-5 text-lime-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-extrabold text-white", children: "Player Antifraude Netfits" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400", children: "Dwell time total obrigatório (100% da duração)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleCloseModal, className: "p-1.5 rounded-full bg-zinc-800 text-zinc-400 hover:text-white cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 bg-black", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.poster, alt: item.title, className: "w-full h-full object-cover opacity-60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-full bg-purple-600 text-white grid place-items-center mb-2 animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-6 ml-0.5 fill-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-white max-w-xs", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-purple-300 font-mono mt-1", children: [
            "Duração Total: ",
            item.duration
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-zinc-300", children: "Progresso de Assistência:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-lime-400", children: [
            progress,
            "% ",
            isCompleted ? "✔ (100%)" : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-full bg-zinc-800 rounded-full overflow-hidden border border-zinc-700 p-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-to-r from-purple-500 to-lime-400 rounded-full transition-all duration-300", style: {
          width: `${progress}%`
        } }) }),
        !isCompleted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-amber-400 bg-amber-950/40 border border-amber-500/30 rounded-xl p-2.5 leading-snug", children: [
          "⚠️ ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Antifraude Ativo:" }),
          " Não feche o player antes do fim. Sair com menos de 100% do vídeo assistido cancela a premiação."
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-lime-400 bg-lime-950/40 border border-lime-500/30 rounded-xl p-2.5 leading-snug font-bold", children: [
          "🎉 Vídeo 100% concluído! +",
          params.nfsPerPostView || 15,
          " nfs creditados com sucesso na sua carteira!"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleCloseModal, className: "w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition cursor-pointer", children: isCompleted ? "Concluir e Voltar ao Feed" : "Fechar (Interromper sem Pontuar)" }) })
    ] }) })
  ] });
}
function CardHeader({
  name,
  initials,
  timeAgo
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-6 rounded-full bg-zinc-300 grid place-items-center text-[9px] font-bold ring-1 ring-black/5", children: initials }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: name }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
      "• ",
      timeAgo
    ] })
  ] });
}
const WPP_CONTACTS = [{
  name: "Ana Beatriz",
  phone: "+55 11 98123-4421",
  initials: "AB"
}, {
  name: "Bruno Carvalho",
  phone: "+55 21 99812-7733",
  initials: "BC"
}, {
  name: "Camila Duarte",
  phone: "+55 11 97712-0098",
  initials: "CD"
}, {
  name: "Diego Ferraz",
  phone: "+55 31 98455-1290",
  initials: "DF"
}, {
  name: "Equipe Trail RJ",
  phone: "Grupo · 28 membros",
  initials: "TR"
}, {
  name: "Fernanda Lima",
  phone: "+55 11 99001-7766",
  initials: "FL"
}, {
  name: "Gustavo Reis",
  phone: "+55 41 98221-0090",
  initials: "GR"
}, {
  name: "Helena Souza",
  phone: "+55 11 99887-1145",
  initials: "HS"
}, {
  name: "Run Club Faria Lima",
  phone: "Grupo · 124 membros",
  initials: "RC"
}, {
  name: "Igor Tavares",
  phone: "+55 11 98344-2210",
  initials: "IT"
}];
const IG_CONTACTS = [{
  name: "anabia.runs",
  sub: "Ana Beatriz",
  initials: "AB"
}, {
  name: "brunocrv",
  sub: "Bruno Carvalho",
  initials: "BC"
}, {
  name: "cami.duarte",
  sub: "Camila Duarte",
  initials: "CD"
}, {
  name: "diego.ferraz",
  sub: "Seguindo você",
  initials: "DF"
}, {
  name: "fer.lima",
  sub: "Fernanda Lima",
  initials: "FL"
}, {
  name: "gus.reis42",
  sub: "Gustavo Reis",
  initials: "GR"
}, {
  name: "helenasz",
  sub: "Helena Souza",
  initials: "HS"
}, {
  name: "igortvrs",
  sub: "Igor Tavares",
  initials: "IT"
}];
const TG_CONTACTS = [{
  name: "Ana Beatriz",
  sub: "online",
  initials: "AB"
}, {
  name: "Trail RJ",
  sub: "Grupo · 28 membros",
  initials: "TR"
}, {
  name: "Bruno Carvalho",
  sub: "visto há 5 min",
  initials: "BC"
}, {
  name: "Camila Duarte",
  sub: "online",
  initials: "CD"
}, {
  name: "Run Club FL",
  sub: "Canal · 1,2k",
  initials: "RC"
}, {
  name: "Helena Souza",
  sub: "visto há 1 h",
  initials: "HS"
}];
const MSG_CONTACTS = [{
  name: "Ana Beatriz",
  phone: "+55 11 98123-4421",
  initials: "AB"
}, {
  name: "Bruno Carvalho",
  phone: "+55 21 99812-7733",
  initials: "BC"
}, {
  name: "Diego Ferraz",
  phone: "+55 31 98455-1290",
  initials: "DF"
}, {
  name: "Helena Souza",
  phone: "+55 11 99887-1145",
  initials: "HS"
}, {
  name: "Mãe",
  phone: "+55 11 99000-1122",
  initials: "MM"
}];
const FB_AUDIENCES = [{
  key: "public",
  label: "Público"
}, {
  key: "friends",
  label: "Amigos"
}, {
  key: "close",
  label: "Amigos próximos"
}, {
  key: "only",
  label: "Somente eu"
}];
function SocialActions({
  id,
  title,
  isOwnPost = false
}) {
  const [liked, setLiked] = reactExports.useState(false);
  const [saved, setSaved] = reactExports.useState(false);
  const [shareOpen, setShareOpen] = reactExports.useState(false);
  const [step, setStep] = reactExports.useState("channels");
  const [sent, setSent] = reactExports.useState([]);
  const [posted, setPosted] = reactExports.useState(false);
  const [composeText, setComposeText] = reactExports.useState("");
  const params = useOperationalParams();
  const closeShare = () => {
    setShareOpen(false);
    setTimeout(() => {
      setStep("channels");
      setSent([]);
      setPosted(false);
      setComposeText("");
    }, 200);
  };
  const goBack = () => {
    setStep("channels");
    setPosted(false);
    setComposeText("");
  };
  const channels = [{
    key: "wpp",
    label: "WhatsApp",
    color: "bg-[#25D366]"
  }, {
    key: "ig",
    label: "Instagram",
    color: "bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600"
  }, {
    key: "x",
    label: "X",
    color: "bg-black"
  }, {
    key: "tt",
    label: "TikTok",
    color: "bg-black"
  }, {
    key: "fb",
    label: "Facebook",
    color: "bg-[#1877F2]"
  }, {
    key: "tg",
    label: "Telegram",
    color: "bg-[#229ED9]"
  }, {
    key: "msg",
    label: "Mensagens",
    color: "bg-emerald-500"
  }, {
    key: "mail",
    label: "E-mail",
    color: "bg-zinc-700"
  }];
  const titles = {
    channels: "Compartilhar",
    wpp: "Enviar via WhatsApp",
    ig: "Enviar no Instagram",
    x: "Postar no X",
    tt: "Enviar no TikTok",
    fb: "Compartilhar no Facebook",
    tg: "Encaminhar no Telegram",
    msg: "Enviar SMS",
    mail: "Enviar por e-mail"
  };
  const handleLike = () => {
    setLiked((v) => {
      const next = !v;
      if (next) {
        if (isOwnPost || params.blockSelfEngagementRewards) {
          toast.warning("🔒 Antifraude: Curtir seu próprio post não acumula pontos nfs.");
        } else {
          wallet.earn(params.nfsPerLike, `Curtida em post de terceiro: ${title}`);
          sharedSandboxStore.rewardEngagement("like", title);
          toast.success(`+${params.nfsPerLike} nfs acumulados por curtir post de terceiro!`);
        }
      }
      return next;
    });
  };
  const handleSave = () => {
    setSaved((v) => {
      const next = !v;
      if (next) {
        if (isOwnPost) {
          toast.info("Post próprio salvo! (Ações próprias não geram pontos)");
        } else {
          toast.info("Post de terceiro adicionado aos salvos.");
        }
      } else {
        toast.info("Post removido dos salvos.");
      }
      return next;
    });
  };
  const [viewed, setViewed] = reactExports.useState(false);
  const handleCompleteView = () => {
    if (!viewed) {
      setViewed(true);
      if (isOwnPost) {
        toast.warning("🔒 Antifraude: Visualizar seu próprio post não acumula pontos nfs.");
      } else {
        wallet.earn(params.nfsPerPostView, `Visualização completa: ${title}`);
        toast.success(`+${params.nfsPerPostView} nfs por visualizar post de terceiro!`);
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleCompleteView, className: `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ring-1 transition-colors active:scale-95 ${viewed ? "bg-purple-600 text-white ring-purple-600 shadow-sm" : "bg-purple-500/10 text-purple-400 ring-purple-500/30 hover:bg-purple-500/20"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "size-4" }),
        viewed ? "Lido (+5 nfs)" : "Concluir Leitura (+5 nfs)"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleLike, className: `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ring-1 transition-colors active:scale-95 ${liked ? "bg-brand text-brand-foreground ring-brand" : "bg-muted text-foreground ring-black/5"}`, "aria-pressed": liked, "aria-label": "Curtir", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: `size-4 ${liked ? "fill-current" : ""}` }),
        "Curtir"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShareOpen(true), className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-muted text-foreground ring-1 ring-black/5 active:scale-95", "aria-label": "Compartilhar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "size-4 text-lime-400" }),
        "Compartilhar (+10 nfs)"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleSave, className: `ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ring-1 active:scale-95 ${saved ? "bg-foreground text-background ring-foreground" : "bg-muted text-foreground ring-black/5"}`, "aria-pressed": saved, "aria-label": "Salvar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: `size-4 ${saved ? "fill-current" : ""}` }),
        "Salvar"
      ] })
    ] }),
    shareOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/40 flex items-end justify-center", onClick: closeShare, role: "dialog", "aria-label": "Compartilhar", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-white text-zinc-900 rounded-t-2xl p-5 pb-8 max-h-[85vh] flex flex-col shadow-2xl border-t border-zinc-200", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-10 h-1 rounded-full bg-zinc-300 mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: titles[step] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: closeShare, className: "size-7 rounded-full bg-muted grid place-items-center", "aria-label": "Fechar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" }) })
      ] }),
      step === "channels" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4 line-clamp-1", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-y-4 gap-x-2", children: channels.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setStep(c.key), className: "flex flex-col items-center gap-2 active:scale-95", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `size-12 rounded-full ${c.color} text-white grid place-items-center text-sm font-bold ring-1 ring-black/10`, children: c.label[0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium", children: c.label })
        ] }, `${id}-${c.key}`)) })
      ] }),
      step !== "channels" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: goBack, className: "text-xs text-muted-foreground mb-3 self-start", children: "← Voltar" }),
      (step === "wpp" || step === "tg" || step === "msg" || step === "ig") && /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSendList, { title, step, sent, setSent, isOwnPost }),
      step === "x" && /* @__PURE__ */ jsxRuntimeExports.jsx(ComposerX, { title, posted, setPosted, text: composeText, setText: setComposeText }),
      step === "tt" && /* @__PURE__ */ jsxRuntimeExports.jsx(ComposerTikTok, { title, sent, setSent }),
      step === "fb" && /* @__PURE__ */ jsxRuntimeExports.jsx(ComposerFacebook, { title, posted, setPosted, text: composeText, setText: setComposeText }),
      step === "mail" && /* @__PURE__ */ jsxRuntimeExports.jsx(ComposerMail, { title, posted, setPosted })
    ] }) })
  ] });
}
function ContactSendList({
  title,
  step,
  sent,
  setSent,
  isOwnPost = false
}) {
  const params = useOperationalParams();
  const cfg = {
    wpp: {
      list: WPP_CONTACTS.map((c) => ({
        name: c.name,
        sub: c.phone,
        initials: c.initials
      })),
      avatar: "bg-[#25D366]/15 text-[#128C45]",
      activeBtn: "bg-[#25D366] text-white ring-[#25D366]",
      placeholder: "Buscar contatos"
    },
    tg: {
      list: TG_CONTACTS,
      avatar: "bg-[#229ED9]/15 text-[#1c7eb0]",
      activeBtn: "bg-[#229ED9] text-white ring-[#229ED9]",
      placeholder: "Buscar no Telegram"
    },
    msg: {
      list: MSG_CONTACTS.map((c) => ({
        name: c.name,
        sub: c.phone,
        initials: c.initials
      })),
      avatar: "bg-emerald-500/15 text-emerald-700",
      activeBtn: "bg-emerald-500 text-white ring-emerald-500",
      placeholder: "Para:"
    },
    ig: {
      list: IG_CONTACTS,
      avatar: "bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 text-white",
      activeBtn: "bg-gradient-to-r from-pink-500 to-purple-600 text-white ring-pink-500",
      placeholder: "Buscar"
    }
  }[step];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-muted rounded-full px-3 py-2 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "🔍" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: cfg.placeholder, className: "bg-transparent text-xs outline-none flex-1" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/60 rounded-lg px-3 py-2 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground line-clamp-2", children: [
      "📎 ",
      title
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-y-auto -mx-5 px-5 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-black/5", children: cfg.list.map((c) => {
      const isSent = sent.includes(c.name);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-2.5 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-10 rounded-full grid place-items-center text-xs font-bold ${cfg.avatar}`, children: c.initials }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium truncate", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground truncate", children: c.sub })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          if (!isSent) {
            if (isOwnPost) {
              toast.warning("🔒 Antifraude: Compartilhar seu próprio post não gera acúmulo de nfs.");
            } else {
              wallet.earn(params.nfsPerShare, `Compartilhamento pós-visualização: ${title}`);
              sharedSandboxStore.rewardEngagement("share", title);
              toast.success(`+${params.nfsPerShare} nfs acumulados por compartilhar post de terceiro!`);
            }
          }
          setSent((prev) => prev.includes(c.name) ? prev : [...prev, c.name]);
        }, className: `text-[11px] font-semibold px-3 py-1.5 rounded-full ring-1 active:scale-95 ${isSent ? cfg.activeBtn : "bg-muted text-foreground ring-black/5"}`, children: isSent ? "Enviado" : "Enviar" })
      ] }, c.name);
    }) }) })
  ] });
}
function ComposerX({
  title,
  posted,
  setPosted,
  text,
  setText
}) {
  const defaultText = `${title} — via @netfits`;
  const value = text || defaultText;
  const remaining = 280 - value.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-full bg-zinc-800 text-white grid place-items-center text-xs font-bold shrink-0", children: "EU" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value, onChange: (e) => setText(e.target.value), rows: 5, className: "flex-1 resize-none text-sm bg-transparent outline-none placeholder:text-muted-foreground", placeholder: "O que está acontecendo?" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[11px] ${remaining < 0 ? "text-red-500" : "text-muted-foreground"}`, children: remaining }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPosted(true), disabled: posted || remaining < 0, className: "bg-black text-white text-xs font-bold px-5 py-2 rounded-full disabled:opacity-60 active:scale-95", children: posted ? "Postado ✓" : "Postar" })
    ] })
  ] });
}
function ComposerTikTok({
  title,
  sent,
  setSent
}) {
  const friends = ["anabia", "brunocrv", "cami.d", "diegof", "gusreis", "helenasz", "igortvrs", "fer.lima"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-4", children: ["DM", "Story", "Repost"].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `text-[11px] font-semibold px-3 py-1.5 rounded-full ring-1 ${i === 0 ? "bg-black text-white ring-black" : "bg-muted text-foreground ring-black/5"}`, children: t }, t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/60 rounded-lg px-3 py-2 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground line-clamp-2", children: [
      "🎬 ",
      title
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-3 overflow-y-auto", children: friends.map((f) => {
      const isSent = sent.includes(f);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSent((p) => p.includes(f) ? p : [...p, f]), className: "flex flex-col items-center gap-1.5 active:scale-95", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-full bg-gradient-to-br from-zinc-700 to-black text-white grid place-items-center text-xs font-bold", children: f.slice(0, 2).toUpperCase() }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] truncate w-full text-center", children: [
          "@",
          f
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-semibold px-2 py-0.5 rounded-full ${isSent ? "bg-black text-white" : "bg-muted text-foreground"}`, children: isSent ? "Enviado" : "Enviar" })
      ] }, f);
    }) })
  ] });
}
function ComposerFacebook({
  title,
  posted,
  setPosted,
  text,
  setText
}) {
  const [audience, setAudience] = reactExports.useState("friends");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-full bg-[#1877F2] text-white grid place-items-center text-xs font-bold", children: "EU" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Você" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: audience, onChange: (e) => setAudience(e.target.value), className: "text-[11px] bg-muted rounded-full px-2 py-0.5 outline-none", children: FB_AUDIENCES.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: a.key, children: a.label }, a.key)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: text, onChange: (e) => setText(e.target.value), rows: 3, placeholder: "Escreva algo sobre isso…", className: "resize-none text-sm bg-transparent outline-none placeholder:text-muted-foreground" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/60 rounded-lg px-3 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground line-clamp-2", children: [
        "🔗 ",
        title
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "netfits.app" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPosted(true), disabled: posted, className: "bg-[#1877F2] text-white text-sm font-bold py-2.5 rounded-md disabled:opacity-60 active:scale-95", children: posted ? "Publicado ✓" : "Publicar" })
  ] });
}
function ComposerMail({
  title,
  posted,
  setPosted
}) {
  const [to, setTo] = reactExports.useState("");
  const [subject, setSubject] = reactExports.useState(title);
  const [body, setBody] = reactExports.useState(`Olha o que encontrei no Netfits:

${title}

https://netfits.app`);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-black/5 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground w-14", children: "Para" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: to, onChange: (e) => setTo(e.target.value), placeholder: "exemplo@email.com", className: "text-sm bg-transparent outline-none flex-1" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-black/5 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground w-14", children: "Assunto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: subject, onChange: (e) => setSubject(e.target.value), className: "text-sm bg-transparent outline-none flex-1" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: body, onChange: (e) => setBody(e.target.value), rows: 6, className: "text-sm bg-transparent outline-none resize-none py-2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPosted(true), disabled: posted || !to, className: "bg-zinc-800 text-white text-sm font-bold py-2.5 rounded-md disabled:opacity-60 active:scale-95", children: posted ? "Enviado ✓" : "Enviar" })
  ] });
}
export {
  FeedPage as component
};
