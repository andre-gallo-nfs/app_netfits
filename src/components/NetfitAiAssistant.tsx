import { useState, useRef, useEffect } from "react";
import { Sparkles, Send, X, ArrowRight, Infinity } from "lucide-react";
import { toast } from "sonner";

export type Message = {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
  action?: {
    label: string;
    onClick?: () => void;
  };
};

const KNOWLEDGE_RESPONSES: Array<{
  keywords: string[];
  response: string;
  actionLabel?: string;
}> = [
  {
    keywords: ["netfit", "netfits", "moeda", "ganhar", "pontos", "funciona", "como"],
    response:
      "A Netfits transforma sua vida em movimento em valor real! Você ganha netfits (nfs) ao interagir no Feed, ao manter consistência semanal de atividades e ao conectar seu wearable. Cada nível desbloqueia multiplicadores de pontos maiores (até 2x nfs)!",
    actionLabel: "Ver minha Carteira",
  },
  {
    keywords: ["loja", "market", "produto", "comprar", "tênis", "suplemento", "desconto", "shop"],
    response:
      "No Netfits Shop você troca seus netfits por produtos de alta performance (Asics Novablast, géis Gu, smartwatch, fones JBL) e serviços de especialistas credenciados da nossa rede!",
    actionLabel: "Ir para o Netfits Shop",
  },
  {
    keywords: ["nutrição", "nutri", "recuperação", "isabella", "alimentação", "comida", "pós-treino"],
    response:
      "A nutrição orientada ao healthspan foca em refeições equilibradas com carboidratos de absorção gradual e proteínas de qualidade pós-treino. Temos a Dra. Isabella (Nutrologia Esportiva) em nossa rede de especialistas parceiros!",
    actionLabel: "Ver especialista no Feed",
  },
  {
    keywords: ["wearable", "garmin", "strava", "apple watch", "sincronizar", "relogio"],
    response:
      "Conecte seu relógio ou app em 1 toque na aba de Atividades. O consentimento de dados é 100% transparente — usamos suas zonas de Frequência Cardíaca apenas para reconhecer sua consistência com bônus de nfs!",
    actionLabel: "Conectar Wearable",
  },
  {
    keywords: ["longevidade", "manifesto", "saúde", "propósito", "healthspan"],
    response:
      "Nosso propósito é fazer cada movimento valer mais! A jornada Netfits evolui em 3 etapas: Benefícios imediatos -> Hábitos recorrentes -> Longevidade ao longo da vida com autonomia e vitalidade.",
  },
];

const INITIAL_MESSAGES: Message[] = [
  {
    id: "msg-1",
    sender: "ai",
    text: "Olá! Sou a Netfit AI, sua assistente no ecossistema esportivo. Como posso ajudar sua jornada hoje?",
    timestamp: "Agora",
  },
];

export function NetfitAiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg: Message = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      const matched = KNOWLEDGE_RESPONSES.find((item) =>
        item.keywords.some((kw) => lowerQuery.includes(kw))
      );

      const responseText =
        matched?.response ||
        "Com a Netfits, cada movimento e hábito saudável traz recompensas reais em nfs. Como posso ajudar com seus treinos, saldo ou produtos no Netfits Shop?";

      const actionLabel = matched?.actionLabel;

      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        action: actionLabel
          ? {
              label: actionLabel,
              onClick: () => {
                toast.info(`Navegando para: ${actionLabel}`);
                setIsOpen(false);
              },
            }
          : undefined,
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 z-50 bg-gradient-to-tr from-purple-700 to-purple-600 text-white p-3.5 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-2 ring-2 ring-lime-400/80 group"
        aria-label="Abrir Netfit AI"
      >
        <div className="relative">
          <Infinity className="size-6 text-lime-400 animate-pulse" />
          <span className="absolute -top-1 -right-1 size-2.5 bg-lime-400 rounded-full ring-2 ring-purple-900" />
        </div>
        <span className="text-xs font-bold tracking-wide pr-1 hidden sm:inline">Netfit AI</span>
      </button>

      {/* Chat Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-md bg-zinc-950 text-zinc-100 h-full flex flex-col shadow-2xl border-l border-zinc-800 animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="p-4 border-b border-zinc-800 bg-zinc-900/90 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-to-br from-purple-600 to-lime-500 grid place-items-center shadow-inner">
                  <Infinity className="size-5 text-zinc-950" />
                </div>
                <div>
                  <h3 className="text-sm font-bold flex items-center gap-1.5 text-zinc-50">
                    Netfit AI
                    <span className="text-[10px] bg-lime-400/20 text-lime-400 font-extrabold px-1.5 py-0.5 rounded border border-lime-400/30">
                      v2.0
                    </span>
                  </h3>
                  <p className="text-[11px] text-zinc-400">
                    Assistente da Vida em Movimento
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Quick Chips */}
            <div className="p-3 border-b border-zinc-800/60 bg-zinc-900/40 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
              <button
                onClick={() => handleSend("Como ganho netfits?")}
                className="shrink-0 bg-zinc-800 hover:bg-purple-950/60 hover:border-purple-500/50 border border-zinc-700/60 text-zinc-300 rounded-full px-3 py-1.5 transition-colors"
              >
                💡 Como ganho nfs?
              </button>
              <button
                onClick={() => handleSend("Recomende produtos do Netfits Shop")}
                className="shrink-0 bg-zinc-800 hover:bg-purple-950/60 hover:border-purple-500/50 border border-zinc-700/60 text-zinc-300 rounded-full px-3 py-1.5 transition-colors"
              >
                👟 Sugestões no Shop
              </button>
              <button
                onClick={() => handleSend("O que é a visão de Longevidade?")}
                className="shrink-0 bg-zinc-800 hover:bg-purple-950/60 hover:border-purple-500/50 border border-zinc-700/60 text-zinc-300 rounded-full px-3 py-1.5 transition-colors"
              >
                ♾️ Longevidade
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 text-sm ${
                      msg.sender === "user"
                        ? "bg-purple-600 text-white rounded-br-none"
                        : "bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-bl-none"
                    }`}
                  >
                    <p className="leading-relaxed text-pretty">{msg.text}</p>
                    {msg.action && (
                      <button
                        onClick={msg.action.onClick}
                        className="mt-3 w-full bg-lime-400 hover:bg-lime-300 text-zinc-950 text-xs font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                      >
                        {msg.action.label}
                        <ArrowRight className="size-3.5" />
                      </button>
                    )}
                    <span
                      className={`block text-[10px] mt-1.5 text-right ${
                        msg.sender === "user" ? "text-purple-200" : "text-zinc-500"
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-2xl p-3 text-xs flex items-center gap-2">
                    <Sparkles className="size-4 text-lime-400 animate-spin" />
                    <span>Netfit AI está digitando...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t border-zinc-800 bg-zinc-900">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Pergunte sobre treinos, nfs ou produtos..."
                  className="flex-1 bg-zinc-950 border border-zinc-800 text-zinc-100 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500 placeholder:text-zinc-500"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="bg-lime-400 hover:bg-lime-300 disabled:opacity-50 text-zinc-950 p-2.5 rounded-full transition-colors font-bold shrink-0"
                >
                  <Send className="size-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
