import { useState, useRef, useEffect } from "react";
import { Sparkles, Send, X, ArrowRight, Wallet, ShoppingBag, Activity, Share2, ShieldCheck, KeyRound } from "lucide-react";
import netfitsLogo from "@/assets/netfits-logo.png";
import { toast } from "sonner";
import { useWallet } from "@/lib/wallet-store";
import { useNavigate } from "@tanstack/react-router";

export type Message = {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
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

  const resolveSmartResponse = (query: string): { text: string; actionLabel?: string; route?: string } => {
    const q = query.toLowerCase().trim();

    // 1. Saldo e Extrato em Tempo Real
    if (q.includes("saldo") || q.includes("quanto tenho") || q.includes("meus pontos") || q.includes("extrato") || q.includes("carteira")) {
      return {
        text: `Você possui atualmente **${nfsBalance.toLocaleString("pt-BR")} nfs** acumulados na sua carteira (equivalente a aproximadamente **${balanceBRL}** em resgates no Netfits Shop)!`,
        actionLabel: "Abrir Minha Carteira",
        route: "/wallet"
      };
    }

    // 2. Cotação do Netfits (nfs)
    if (q.includes("quanto vale") || q.includes("valor") || q.includes("conversão") || q.includes("cotação") || q.includes("1 nfs")) {
      return {
        text: "Cada ponto **1 nfs equivale a R$ 0,02** em resgates reais (ex: 50 nfs = R$ 1,00 | 1.000 nfs = R$ 20,00). No Netfits Shop você pode pagar 100% de um produto com nfs ou usá-los para obter descontos em marcas parceiras como Asics, Netshoes e Liquidz!",
        actionLabel: "Explorar o Shop",
        route: "/market"
      };
    }

    // 3. Shop, Produtos e Suplementos
    if (q.includes("loja") || q.includes("shop") || q.includes("comprar") || q.includes("tênis") || q.includes("suplemento") || q.includes("desconto") || q.includes("asics") || q.includes("gel")) {
      return {
        text: "No Netfits Shop você encontra tênis de alta performance (Asics Novablast com placa de carbono), isotônicos Liquidz, géis de carboidrato Gu Energy e relógios smartwatch com até 100% de desconto usando seus pontos nfs!",
        actionLabel: "Ir para o Netfits Shop",
        route: "/market"
      };
    }

    // 4. Código de Indicação & Bônus de Amigos
    if (q.includes("indicação") || q.includes("indicar") || q.includes("convite") || q.includes("amigo") || q.includes("código") || q.includes("ganhar pontos")) {
      return {
        text: "Para cada amigo que se cadastrar com seu código de indicação, ambos ganham **+50 nfs bônus** instantaneamente na carteira! Você também pode acompanhar comissões em PIX de até 10% no Portal de Associados.",
        actionLabel: "Ver Portal de Associados",
        route: "/associado"
      };
    }

    // 5. Wearables & Sincronização
    if (q.includes("wearable") || q.includes("garmin") || q.includes("strava") || q.includes("apple watch") || q.includes("relógio") || q.includes("sincronizar")) {
      return {
        text: "Você pode conectar seu relógio ou aplicativo (Garmin Connect, Apple Watch, Strava, Fitbit, Polar, Samsung Health) na aba de Atividades para transformar seus km percorridos, frequência cardíaca e sono em pontos nfs todos os dias!",
        actionLabel: "Ver Minhas Atividades",
        route: "/activities"
      };
    }

    // 6. Smart Fit & Academias
    if (q.includes("smart fit") || q.includes("academia") || q.includes("presença") || q.includes("treino")) {
      return {
        text: "Ao vincular sua conta da Smart Fit no app Netfits, você ganha **+15 nfs por cada treino validado** por catraca na academia, acumulando pontos automáticos todo mês!",
        actionLabel: "Ver Atividades",
        route: "/activities"
      };
    }

    // 7. Senha, Login & Segurança / Biometria
    if (q.includes("senha") || q.includes("esqueceu") || q.includes("login") || q.includes("biometria") || q.includes("face id") || q.includes("passkey")) {
      return {
        text: "Para recuperar sua senha, acesse a tela de Login e clique em 'Esqueceu sua senha?'. Você também pode ativar a autenticação nativa por Biometria / Face ID (Passkeys) para acessar a conta em 1 toque de forma ultra segura!",
        actionLabel: "Ir para Login / Cadastro",
        route: "/auth"
      };
    }

    // 8. Nutrologia e Especialistas
    if (q.includes("nutrição") || q.includes("nutri") || q.includes("isabella") || q.includes("consulta") || q.includes("alimentação")) {
      return {
        text: "Temos a Dra. Isabella Formigari (Nutrologia Esportiva) em nossa rede de especialistas credenciados. Você pode agendar orientações nutricionais focadas em longevidade e saúde esportiva diretamente no Feed e Shop!",
        actionLabel: "Ver no Feed",
        route: "/"
      };
    }

    // 9. Como Ganhar Pontos / Como Funciona
    if (q.includes("funciona") || q.includes("como ganho") || q.includes("o que é") || q.includes("propósito") || q.includes("netfits")) {
      return {
        text: "A Netfits transforma seus hábitos saudáveis em moedas digitais (nfs)! Você ganha pontos de 4 formas: 1) Curtindo e postando no Feed; 2) Mantendo treinos semanais; 3) Conectando seu wearable/Smart Fit; 4) Indicando novos amigos com seu código.",
        actionLabel: "Ver minha Carteira",
        route: "/wallet"
      };
    }

    // Resposta padrão inteligente
    return {
      text: `Entendi sua dúvida sobre "${query}". Posso orientar você sobre seu saldo atual (${nfsBalance.toLocaleString("pt-BR")} nfs), cotação dos pontos, resgates no Shop ou como ganhar bônus indicando amigos! O que deseja saber?`,
      actionLabel: "Explorar o Shop",
      route: "/market"
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
    }, 500);
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
          <img src={netfitsLogo} alt="Netfits" className="h-6 w-auto object-contain" />
          <span className="absolute -top-1 -right-1 size-2.5 bg-lime-400 rounded-full ring-2 ring-purple-900 animate-pulse" />
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
                className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Quick Chips */}
            <div className="p-3 border-b border-zinc-800/60 bg-zinc-900/40 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
              <button
                onClick={() => handleSend("Qual o meu saldo?")}
                className="shrink-0 bg-purple-950/80 border border-purple-500/50 text-purple-200 font-semibold rounded-full px-3 py-1.5 transition-colors flex items-center gap-1"
              >
                <Wallet className="size-3.5 text-lime-400" />
                Meu Saldo
              </button>
              <button
                onClick={() => handleSend("Quanto vale 1 nfs?")}
                className="shrink-0 bg-zinc-800 hover:bg-purple-950/60 border border-zinc-700/60 text-zinc-300 rounded-full px-3 py-1.5 transition-colors"
              >
                💵 Cotação do nfs
              </button>
              <button
                onClick={() => handleSend("Como funciona o bônus de indicação?")}
                className="shrink-0 bg-zinc-800 hover:bg-purple-950/60 border border-zinc-700/60 text-zinc-300 rounded-full px-3 py-1.5 transition-colors"
              >
                🎁 Indicar Amigos (+50 nfs)
              </button>
              <button
                onClick={() => handleSend("Como ganho netfits?")}
                className="shrink-0 bg-zinc-800 hover:bg-purple-950/60 border border-zinc-700/60 text-zinc-300 rounded-full px-3 py-1.5 transition-colors"
              >
                💡 Como ganho nfs?
              </button>
              <button
                onClick={() => handleSend("Recomende produtos do Netfits Shop")}
                className="shrink-0 bg-zinc-800 hover:bg-purple-950/60 border border-zinc-700/60 text-zinc-300 rounded-full px-3 py-1.5 transition-colors"
              >
                👟 Sugestões no Shop
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
