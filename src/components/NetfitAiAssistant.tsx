import { useState, useRef, useEffect } from "react";
import { Sparkles, Send, X, ArrowRight, Wallet, ShoppingBag, Activity, Share2, ShieldCheck, KeyRound } from "lucide-react";
import netfitsLogo from "@/assets/netfits-logo.png";
import { toast } from "sonner";
import { useWallet } from "@/lib/wallet-store";
import { useNavigate } from "@tanstack/react-router";

import { tokenOptimizer } from "@/lib/ai/token-optimizer";

export type Message = {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
  finopsBadge?: string;
  action?: {
    label: string;
    targetRoute?: string;
    onClick?: () => void;
  };
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: "msg-1",
    sender: "ai",
    text: "Olá! Sou a Netfit AI v2.0, sua assistente inteligente no ecossistema esportivo. Como posso ajudar você hoje?",
    timestamp: "Agora",
  },
];

import { useOperationalParams } from "@/lib/operational-params-store";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";
import { useAuth } from "@/lib/auth-store";

export function NetfitAiAssistant() {
  const { currentUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  
  const { balance: nfsBalance } = useWallet();
  const params = useOperationalParams();
  const balanceBRL = (nfsBalance * params.cppResgateBrl).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const activeUser = sharedSandboxStore.useActiveUser();

  const resolveSmartResponse = (query: string): { text: string; actionLabel?: string; route?: string; finopsBadge?: string } => {
    const allUsers = sharedSandboxStore.getUsers();
    const myReferrals = allUsers.filter(
      (u) =>
        u.id !== activeUser.id &&
        ((u.referredBy && u.referredBy === activeUser.referralCode) ||
          (u.associatedWith && u.associatedWith === activeUser.referralCode))
    );
    const txCount = sharedSandboxStore.getUserTransactions(activeUser.id).length;

    // Avaliação pelo FinOps Token Optimizer 100% Realtime com Parâmetros Oficiais
    const fastPath = tokenOptimizer.evaluateQuery(query, {
      nfsBalance,
      balanceBRL,
      cppResgateBrl: params.cppResgateBrl,
      userCategory: currentUser?.userCategory || activeUser.type,
      params,
      user: {
        id: activeUser.id,
        fullName: activeUser.fullName,
        email: activeUser.email || activeUser.identifier || "",
        userCategory: currentUser?.userCategory || activeUser.type,
        referralCode: activeUser.referralCode,
        referredBy: activeUser.referredBy,
        sports: activeUser.sports,
        wearable: activeUser.wearable,
        healthPlan: activeUser.healthPlan,
        gym: activeUser.gym,
        referralsCount: myReferrals.length,
        transactionsCount: txCount,
      },
    });

    return {
      text: fastPath.text,
      actionLabel: fastPath.actionLabel,
      route: fastPath.route,
      finopsBadge: fastPath.handled ? "⚡ Zero-Token Fast Path (<5ms)" : "✨ Gemini Flash (Realtime Grounded)",
    };
  };

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

    // Tabulação automática da pergunta do usuário para a Central de Inteligência
    const senderRole = currentUser?.userCategory === "associado" ? "associado" : currentUser?.userCategory === "parceiro" ? "parceiro" : "atleta";
    const senderName = currentUser?.fullName || "Atleta Netfits";
    const senderContact = currentUser?.email || currentUser?.phone || "chat-anonimo";

    sharedSandboxStore.addInteraction({
      sourceRole: senderRole,
      sourceName: senderName,
      sourceContact: senderContact,
      channel: "chat",
      subject: `Consulta AI: ${query.slice(0, 40)}...`,
      intent: "duvida",
      content: query,
      sentiment: "neutro",
      businessInsight: `Interação via Chat AI assistente virtual. Dúvida/Intenção do usuário sobre: "${query.slice(0, 80)}".`,
      status: "processado",
      tags: ["Chat AI", "Assistente Virtual", "Tempo Real"],
    });

    setTimeout(() => {
      const resolved = resolveSmartResponse(query);

      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: resolved.text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        finopsBadge: resolved.finopsBadge,
        action: resolved.actionLabel && resolved.route
          ? {
              label: resolved.actionLabel,
              targetRoute: resolved.route,
              onClick: () => {
                toast.info(`Navegando para: ${resolved.actionLabel}`);
                setIsOpen(false);
                navigate({ to: resolved.route as any });
              },
            }
          : undefined,
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 400);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-[calc(env(safe-area-inset-bottom,0px)+4.75rem)] right-4 z-50 bg-gradient-to-tr from-purple-700 to-purple-600 text-white p-3.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 ring-2 ring-lime-400/80 group cursor-pointer"
        aria-label="Abrir assistente virtual Netfit AI"
      >
        <div className="relative">
          <img src={netfitsLogo} alt="Netfits" className="h-6 w-auto object-contain" />
          <span className="absolute -top-1 -right-1 size-2.5 bg-lime-400 rounded-full ring-2 ring-purple-900 animate-pulse" />
        </div>
        <span className="text-xs font-bold tracking-wide pr-1 hidden sm:inline">Netfit AI</span>
      </button>

      {/* Chat Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-md bg-zinc-950 text-zinc-100 h-full flex flex-col shadow-2xl border-l border-zinc-800 animate-in slide-in-from-right duration-300">
            {/* Header com Safe Area Superior */}
            <div className="p-4 pt-[calc(env(safe-area-inset-top,0px)+1rem)] border-b border-zinc-800 bg-zinc-900/90 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-zinc-900 border border-purple-500/30 grid place-items-center shadow-inner p-1.5">
                  <img src={netfitsLogo} alt="Netfits" className="h-full w-auto object-contain" />
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
                aria-label="Fechar assistente Netfit AI"
                className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Quick Chips 100% Realtime */}
            <div className="p-3 border-b border-zinc-800/60 bg-zinc-900/40 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
              <button
                onClick={() => handleSend("Qual o meu saldo e quanto tenho em reais?")}
                className="shrink-0 bg-purple-950/80 border border-purple-500/50 text-purple-200 font-semibold rounded-full px-3 py-1.5 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Wallet className="size-3.5 text-lime-400" />
                Meu Saldo ({nfsBalance.toLocaleString()} nfs)
              </button>
              <button
                onClick={() => handleSend("Quanto vale 1 nfs em resgates no Shop?")}
                className="shrink-0 bg-zinc-800 hover:bg-purple-950/60 border border-zinc-700/60 text-zinc-300 rounded-full px-3 py-1.5 transition-colors cursor-pointer"
              >
                💵 1 nfs = R$ {(params.cppResgateBrl || 0.01).toFixed(2)}
              </button>
              <button
                onClick={() => handleSend("Quantos pontos ganho por treino com relógio ou na Smart Fit?")}
                className="shrink-0 bg-zinc-800 hover:bg-purple-950/60 border border-zinc-700/60 text-zinc-300 rounded-full px-3 py-1.5 transition-colors cursor-pointer"
              >
                🏃 Treinos (+{params.nfsPerWorkout || 20} nfs)
              </button>
              <button
                onClick={() => handleSend("Como funciona o bônus de indicação e qual meu código?")}
                className="shrink-0 bg-zinc-800 hover:bg-purple-950/60 border border-zinc-700/60 text-zinc-300 rounded-full px-3 py-1.5 transition-colors cursor-pointer"
              >
                🎁 Indicar Amigos (+{params.normalUserNewReferralBonusNfs || 50} nfs)
              </button>
              <button
                onClick={() => handleSend("Quais são os médicos e especialistas da Fibios?")}
                className="shrink-0 bg-zinc-800 hover:bg-purple-950/60 border border-zinc-700/60 text-zinc-300 rounded-full px-3 py-1.5 transition-colors cursor-pointer"
              >
                🩺 Dra. Isabella & Fibios
              </button>
              <button
                onClick={() => handleSend("Como funciona o cashback e resgates no Netfits Shop?")}
                className="shrink-0 bg-zinc-800 hover:bg-purple-950/60 border border-zinc-700/60 text-zinc-300 rounded-full px-3 py-1.5 transition-colors cursor-pointer"
              >
                🛍️ Shop ({params.nfsEarnedPerBrlSpent || 4.0} nfs/R$)
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

            {/* Input Bar com Safe Area Inferior */}
            <div className="p-3 pb-[calc(env(safe-area-inset-bottom,0px)+0.75rem)] border-t border-zinc-800 bg-zinc-900">
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
                  aria-label="Enviar mensagem para o assistente Netfit AI"
                  className="bg-lime-400 hover:bg-lime-300 disabled:opacity-50 text-zinc-950 p-2.5 rounded-full transition-colors font-bold shrink-0 cursor-pointer"
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
