import { useState } from "react";
import { Copy, Check, Share2, Users, Sparkles, X, Gift } from "lucide-react";
import netfitsMark from "@/assets/netfits-mark.png";

const INVITE_URL = "https://netfits.app/i/kitelarsen";
const INVITE_CODE = "KITELARSEN";

const CHANNELS = [
  { key: "wpp", label: "WhatsApp", color: "bg-[#25D366]" },
  { key: "ig", label: "Instagram", color: "bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600" },
  { key: "tg", label: "Telegram", color: "bg-[#229ED9]" },
  { key: "x", label: "X", color: "bg-black" },
  { key: "tt", label: "TikTok", color: "bg-black" },
  { key: "fb", label: "Facebook", color: "bg-[#1877F2]" },
  { key: "msg", label: "Mensagens", color: "bg-emerald-500" },
  { key: "mail", label: "E-mail", color: "bg-zinc-700" },
] as const;

const SHARE_TEXT = `Bora pra netfits comigo? Cada treino seu também vira nfs pra mim 💚 ${INVITE_URL}`;

export function InviteFriendsCard() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [sentChannels, setSentChannels] = useState<string[]>([]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(INVITE_URL);
    } catch {
      /* ignore */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleChannel = (key: string) => {
    setSentChannels((prev) => (prev.includes(key) ? prev : [...prev, key]));
    const encoded = encodeURIComponent(SHARE_TEXT);
    const url =
      key === "wpp"
        ? `https://wa.me/?text=${encoded}`
        : key === "tg"
        ? `https://t.me/share/url?url=${encodeURIComponent(INVITE_URL)}&text=${encoded}`
        : key === "x"
        ? `https://twitter.com/intent/tweet?text=${encoded}`
        : key === "fb"
        ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(INVITE_URL)}`
        : key === "mail"
        ? `mailto:?subject=${encodeURIComponent("Vem pra netfits")}&body=${encoded}`
        : key === "msg"
        ? `sms:?&body=${encoded}`
        : null;
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const closeShare = () => {
    setOpen(false);
    setTimeout(() => setSentChannels([]), 200);
  };

  return (
    <section className="px-4 py-2">
      <article className="relative overflow-hidden rounded-[20px] bg-foreground text-background p-6 ring-1 ring-zinc-950/10">
        <div className="absolute -right-16 -top-16 size-56 rounded-full bg-brand/25 blur-3xl" />
        <div className="absolute -left-10 -bottom-20 size-48 rounded-full bg-brand/15 blur-3xl" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-brand text-brand-foreground text-[10px] font-bold uppercase tracking-widest">
              <Sparkles className="size-3" /> Sua tribo, seu progresso
            </span>
            <img
              src={netfitsMark}
              alt=""
              className="ml-auto w-9 h-9 object-contain rounded-lg bg-background/10 p-1 opacity-80"
            />
          </div>

          <h2 className="text-[22px] font-semibold leading-tight text-balance mb-2">
            Kite, chame sua tribo e ganhe nfs <span className="text-brand">para sempre</span>.
          </h2>
          <p className="text-sm text-zinc-400 text-pretty mb-5 max-w-[38ch]">
            Todo amigo que entrar pelo seu link vira parte da sua tribo.
            Sempre que eles acumularem netfits, você também recebe. Sem limite.
          </p>

          <div className="grid grid-cols-3 gap-2 mb-5">
            <Stat icon={<Users className="size-3.5" />} value="12" label="já entraram" />
            <Stat icon={<Gift className="size-3.5" />} value="+2.480" label="nfs gerados" />
            <Stat icon={<Sparkles className="size-3.5" />} value="∞" label="recorrente" />
          </div>

          <div className="flex items-center gap-2 bg-background/10 ring-1 ring-background/15 rounded-full pl-4 pr-1 py-1 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 shrink-0">
              Código
            </span>
            <span className="flex-1 text-sm font-bold tracking-wider truncate">
              {INVITE_CODE}
            </span>
            <button
              onClick={copyLink}
              className="shrink-0 flex items-center gap-1 bg-background text-foreground text-xs font-semibold px-3 py-1.5 rounded-full active:scale-95 transition-transform"
              aria-label="Copiar link"
            >
              {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
              {copied ? "Copiado" : "Copiar"}
            </button>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="w-full bg-brand text-brand-foreground text-sm font-bold py-3 rounded-full flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
          >
            <Share2 className="size-4" />
            Compartilhar convite
          </button>
        </div>
      </article>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 flex items-end justify-center"
          onClick={closeShare}
          role="dialog"
          aria-label="Compartilhar convite"
        >
          <div
            className="w-full max-w-md bg-white text-zinc-900 rounded-t-2xl p-5 pb-8 shadow-2xl border-t border-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto w-10 h-1 rounded-full bg-zinc-300 mb-4" />
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm font-semibold">Compartilhar convite</p>
              <button
                onClick={closeShare}
                className="size-8 grid place-items-center rounded-full hover:bg-muted"
                aria-label="Fechar"
              >
                <X className="size-4" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Cada amigo que entrar pelo seu link vira fonte de nfs.
            </p>

            <div className="flex items-center gap-2 bg-muted rounded-full pl-4 pr-1 py-1 mb-5 ring-1 ring-black/5">
              <span className="flex-1 text-xs font-medium truncate text-muted-foreground">
                {INVITE_URL}
              </span>
              <button
                onClick={copyLink}
                className="shrink-0 flex items-center gap-1 bg-foreground text-background text-xs font-semibold px-3 py-1.5 rounded-full active:scale-95"
              >
                {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                {copied ? "Copiado" : "Copiar"}
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {CHANNELS.map((c) => {
                const done = sentChannels.includes(c.key);
                return (
                  <button
                    key={c.key}
                    onClick={() => handleChannel(c.key)}
                    className="flex flex-col items-center gap-1.5 active:scale-95"
                  >
                    <div
                      className={`size-12 rounded-full grid place-items-center text-white ${c.color} ring-1 ring-black/5 relative`}
                    >
                      <Share2 className="size-5" />
                      {done && (
                        <div className="absolute -bottom-0.5 -right-0.5 size-4 rounded-full bg-brand grid place-items-center ring-2 ring-background">
                          <Check className="size-2.5 text-brand-foreground" />
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] font-medium text-center">{c.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl bg-background/10 ring-1 ring-background/10 px-2 py-2">
      <div className="flex items-center gap-1 text-brand">
        {icon}
        <span className="text-base font-bold leading-none">{value}</span>
      </div>
      <p className="text-[10px] text-zinc-400 mt-1 leading-tight">{label}</p>
    </div>
  );
}
