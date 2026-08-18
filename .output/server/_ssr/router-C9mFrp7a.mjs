import { c as createRouter$1, a as createRootRouteWithContext, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, u as useRouterState, d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { H as House, S as ShoppingBag, A as Activity, a as Award, W as Wallet, X, b as ArrowRight, c as Sparkles, d as Send } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";



import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-DR0Yy-HZ.css";
const netfitsDarkLogo = "/assets/netfits-logo-dark-D0RtFoJs.png";
const profileAvatar = "/assets/profile-avatar-BoojUtAr.jpg";
const runner = "/assets/feed-runner-CCML8scl.jpg";
const cyclist = "/assets/feed-cyclist-eSoC9Il9.jpg";
const clinicFibios = "/assets/clinic-fibios-rZItzhet.jpg";
const mountainVideo = "/assets/feed-voturuna-DP-oQCwr.jpg";
const liquidz = "/assets/product-liquidz-Cj2dR76l.jpg";
const shoes = "/assets/product-shoes-CUzDX92n.jpg";
const ring = "/assets/product-ring-Bwo5Qd-4.jpg";
const raceSerraFina = "/assets/race-serra-fina-BvXw670x.jpg";
const raceParaty = "/assets/race-paraty-BwDctZiL.jpg";
const raceBerlin = "/assets/race-berlin-CD4pj62D.jpg";
const raceNyc = "/assets/race-nyc-DsHtzJD5.jpg";
const apparelTee = "/assets/apparel-tee-Q_guZjsU.jpg";
const apparelShorts = "/assets/apparel-shorts-BogQtink.jpg";
const apparelSocks = "/assets/apparel-socks-BVqyprxp.jpg";
const gearVest = "/assets/gear-vest-CAbiKTT5.jpg";
const productGel = "/assets/product-gel-DMuC9e-t.jpg";
const productBike = "/assets/product-bike-BESuKQ8H.jpg";
const productHelmet = "/assets/product-helmet-BeQCwc7p.jpg";
const productSwim = "/assets/product-swim-TYX_7gsi.jpg";
const productGlasses = "/assets/product-glasses-BLSG7VXv.jpg";
const productWhey = "/assets/product-whey-Wor1ExrG.jpg";
const productPalatinose = "/assets/product-palatinose-DwQY1yxt.jpg";
const productCreatine = "/assets/product-creatine-B5HXc3oE.jpg";
const productAppleWatch = "/assets/product-applewatch-LmhKu1MM.jpg";
const productJblBone = "/assets/product-jbl-bone-BkrYMGlK.jpg";
const feedItems = [
  {
    type: "story",
    id: "s1",
    author: "Kite Larsen",
    authorInitials: "KL",
    timeAgo: "2h",
    image: runner,
    title: "Ritual matinal no Rio: por que eu nunca pulo o nascer do sol.",
    excerpt: "Não é sobre o pace. É sobre aparecer antes que a cidade acorde — e construir consistência que dura décadas."
  },
  {
    type: "video",
    id: "v1",
    author: "Trail Lab",
    authorInitials: "TL",
    timeAgo: "3h",
    poster: mountainVideo,
    duration: "6:42",
    title: "Subida em montanha: 5 técnicas que mudam o seu pace.",
    excerpt: "Power-hiking, cadência curta, uso de bastões e respiração ritmada. Filme com Kite Larsen no Voturuna Life Park (SP)."
  },
  {
    type: "product",
    id: "p1",
    image: liquidz,
    tag: "Em alta no marketplace",
    title: "Liquidz de Jaboticaba",
    description: "Energia natural da jaboticaba brasileira com eletrólitos e vitaminas do complexo B.",
    price: "R$ 99,55",
    cashback: "+199 nfs",
    badge: "nfs em dobro"
  },
  {
    type: "spot",
    id: "sp1",
    image: clinicFibios,
    title: "Fibios Medicina e Saúde",
    location: "Pinheiros, São Paulo",
    tier: "Clínica parceira"
  },
  {
    type: "expert",
    id: "e1",
    name: "Dra. Isabella Formigari",
    role: "Medicina e Saúde — Fibios",
    excerpt: "Avaliação clínica integrada, longevidade e protocolos de recovery para atletas amadores e profissionais.",
    price: "R$ 500,00",
    cashback: "+500 nfs"
  },
  {
    type: "story",
    id: "s2",
    author: "Rafael Mendes",
    authorInitials: "RM",
    timeAgo: "5h",
    image: cyclist,
    title: "200km de bike por semana sem destruir os joelhos.",
    excerpt: "Volume sem inteligência é receita pra lesão. Compartilho meu plano de zonas de FC e como integro com o Garmin."
  },
  {
    type: "product",
    id: "p2",
    image: shoes,
    tag: "Drop da semana",
    title: "NovaBlast 4 Kinetic",
    description: "Tênis de corrida com placa de carbono e cashback estendido.",
    price: "R$ 1.290,00",
    cashback: "+1.290 nfs"
  },
  {
    type: "product",
    id: "p3",
    image: ring,
    tag: "Wearable parceiro",
    title: "Netfits Core Ring",
    description: "Anel de tracking com sincronia nativa de sono e atividade.",
    price: "R$ 1.890,00",
    cashback: "+1.890 nfs"
  }
];
const marketCategories = [
  { id: "sup", name: "Suplementos", count: 124 },
  { id: "gear", name: "Equipamentos", count: 86 },
  { id: "med", name: "Consultas médicas", count: 42 },
  { id: "nut", name: "Nutricionistas", count: 31 },
  { id: "ass", name: "Assessorias", count: 18 },
  { id: "lab", name: "Exames", count: 27 },
  { id: "trips", name: "Viagens", count: 22 },
  { id: "apparel", name: "Vestuário", count: 68 },
  { id: "tech", name: "Tecnologia", count: 35 },
  { id: "wellness", name: "Bem-estar", count: 29 }
];
const marketProducts = [
  { id: "m01", image: liquidz, title: "Liquidz de Jaboticaba", price: "R$ 99,55", cashback: "+199 nfs" },
  { id: "m02", image: shoes, title: "NovaBlast 4", price: "R$ 1.290", cashback: "+1.290 nfs" },
  { id: "m03", image: ring, title: "Core Ring", price: "R$ 1.890", cashback: "+1.890 nfs" },
  { id: "m04", image: productGel, title: "Energy Gel Pack x12", price: "R$ 168", cashback: "+168 nfs" },
  { id: "m05", image: raceSerraFina, title: "La Mision Brasil — Serra Fina", price: "R$ 980", cashback: "+980 nfs" },
  { id: "m06", image: raceNyc, title: "Maratona de Nova York 2026", price: "US$ 295", cashback: "+1.500 nfs" },
  { id: "m07", image: raceParaty, title: "UTMB Paraty — Centro Histórico", price: "R$ 720", cashback: "+720 nfs" },
  { id: "m08", image: raceBerlin, title: "Maratona de Berlim 2026", price: "€ 198", cashback: "+1.100 nfs" },
  { id: "m09", image: apparelTee, title: "Camiseta Tech Dry FT", price: "R$ 219", cashback: "+219 nfs" },
  { id: "m10", image: apparelShorts, title: 'Short Stride 5"', price: "R$ 259", cashback: "+259 nfs" },
  { id: "m11", image: apparelSocks, title: "Meias Compress Run", price: "R$ 89", cashback: "+89 nfs" },
  { id: "m12", image: gearVest, title: "Colete Hidratação 5L", price: "R$ 690", cashback: "+690 nfs" },
  { id: "m13", image: productBike, title: "Speed Carbon Aero R10", price: "R$ 18.900", cashback: "+18.900 nfs" },
  { id: "m14", image: productHelmet, title: "Capacete Aero Vent Pro", price: "R$ 899", cashback: "+899 nfs" },
  { id: "m15", image: productSwim, title: "Kit Natação Pro Swim", price: "R$ 349", cashback: "+349 nfs" },
  { id: "m16", image: productGlasses, title: "Óculos Bike Photochromic", price: "R$ 549", cashback: "+549 nfs" },
  { id: "m17", image: productWhey, title: "Whey Isolate 900g — Chocolate", price: "R$ 249", cashback: "+249 nfs" },
  { id: "m18", image: productPalatinose, title: "Palatinose Endurance 400g", price: "R$ 139", cashback: "+139 nfs" },
  { id: "m19", image: productCreatine, title: "Creatina Monohidratada 300g", price: "R$ 179", cashback: "+179 nfs" },
  { id: "m20", image: productAppleWatch, title: "Apple Watch Series 10 GPS 46mm", price: "R$ 4.299", cashback: "+4.299 nfs" },
  { id: "m21", image: productJblBone, title: "JBL Soundgear Sense — fone por indução", price: "R$ 1.199", cashback: "+2.398 nfs", doubleNfs: true }
];
const activities = [
  { id: "a1", icon: "🏃", title: "Corrida — 12,4 km", date: "Hoje, 06:12", reward: "+10 nfs" },
  { id: "a2", icon: "😴", title: "Sono 7h42 registrado", date: "Hoje, 07:00", reward: "+10 nfs" },
  { id: "a3", icon: "🥗", title: "Check-in nutricional", date: "Ontem, 20:30", reward: "+15 nfs" },
  { id: "a4", icon: "🚴", title: "Bike — 38,1 km", date: "Ontem, 17:50", reward: "+10 nfs" },
  { id: "a5", icon: "🩺", title: "Consulta Dra. Isabella Formigari", date: "12 mai", reward: "+500 nfs" }
];
const walletTxs = [
  { id: "w1", title: "Cashback compra Liquidz de Jaboticaba", date: "Hoje", amount: "+199 nfs", positive: true },
  { id: "w2", title: "Bônus convite — Rafael M.", date: "Ontem", amount: "+120 nfs", positive: true },
  { id: "w3", title: "Resgate consulta Dra. Isabella Formigari", date: "12 mai", amount: "-500 nfs", positive: false },
  { id: "w4", title: "Sincronia Garmin (semana)", date: "10 mai", amount: "+210 nfs", positive: true },
  { id: "w5", title: "Resgate compra NovaBlast 4", date: "08 mai", amount: "-1.290 nfs", positive: false }
];
let state$1 = { level: "atleta" };
const listeners$2 = /* @__PURE__ */ new Set();
const emit$2 = () => listeners$2.forEach((l) => l());
const MULTIPLIERS = {
  atleta: 1,
  prime: 1.5,
  elite: 2
};
const levelStore = {
  get: () => state$1.level,
  getMultiplier: () => MULTIPLIERS[state$1.level],
  set(level) {
    if (state$1.level === level) return;
    state$1 = { level };
    emit$2();
  }
};
const INITIAL_BALANCE = 25575;
let state = {
  balance: INITIAL_BALANCE,
  txs: [...walletTxs]
};
const listeners$1 = /* @__PURE__ */ new Set();
function emit$1() {
  for (const l of listeners$1) l();
}
function subscribe$1(fn) {
  listeners$1.add(fn);
  return () => listeners$1.delete(fn);
}
function getSnapshot$1() {
  return state;
}
function formatNfs(n) {
  return n.toLocaleString("pt-BR");
}
function todayLabel() {
  return "Hoje";
}
const wallet = {
  getBalance: () => state.balance,
  /** Debita nfs (gasto numa compra) e registra a movimentação. */
  spend(amount, title) {
    if (amount <= 0) return;
    const tx = {
      id: `tx-${Date.now()}-d`,
      title,
      date: todayLabel(),
      amount: `-${formatNfs(amount)} nfs`,
      positive: false
    };
    state = {
      balance: Math.max(0, state.balance - amount),
      txs: [tx, ...state.txs]
    };
    emit$1();
  },
  /** Credita nfs (cashback) e registra a movimentação. Aplica multiplicador do nível. */
  earn(amount, title) {
    if (amount <= 0) return;
    const multiplier = levelStore.getMultiplier();
    const credited = Math.round(amount * multiplier);
    const tx = {
      id: `tx-${Date.now()}-c`,
      title,
      date: todayLabel(),
      amount: `+${formatNfs(credited)} nfs`,
      positive: true
    };
    state = {
      balance: state.balance + credited,
      txs: [tx, ...state.txs]
    };
    emit$1();
  }
};
function useWallet() {
  return reactExports.useSyncExternalStore(subscribe$1, getSnapshot$1, getSnapshot$1);
}
function parseNfs(raw) {
  if (!raw) return 0;
  const cleaned = raw.replace(/[^\d]/g, "");
  return cleaned ? parseInt(cleaned, 10) : 0;
}
const INITIAL_BADGES = [
  {
    id: "pioneiro",
    category: "perfil",
    title: "Pioneiro Netfits",
    description: "Criou sua conta e ingressou na comunidade de longevidade ativa.",
    icon: "🌟",
    unlocked: true,
    unlockedAt: "10/08/2026",
    rewardNfs: 50,
    currentProgress: 1,
    maxProgress: 1,
    taskInstruction: "Completar o cadastro inicial no Netfits"
  },
  {
    id: "perfil_verificado",
    category: "perfil",
    title: "Perfil Verificado",
    description: "Preencheu todos os dados cadastrais e concordou com os termos LGPD.",
    icon: "🛡️",
    unlocked: true,
    unlockedAt: "10/08/2026",
    rewardNfs: 50,
    currentProgress: 1,
    maxProgress: 1,
    taskInstruction: "Salvar dados de cadastro no perfil"
  },
  {
    id: "colecionador_pontos",
    category: "perfil",
    title: "Colecionador de Pontos",
    description: "Declarou seus programas de fidelidade de bancos parceiros no perfil.",
    icon: "💳",
    unlocked: true,
    unlockedAt: "10/08/2026",
    rewardNfs: 40,
    currentProgress: 1,
    maxProgress: 1,
    taskInstruction: "Declarar programas de pontos no perfil"
  },
  {
    id: "leitor_assiduo",
    category: "engajamento",
    title: "Leitor Assíduo",
    description: "Visualizou e consumiu 5 artigos e guias editoriais no Feed.",
    icon: "📖",
    unlocked: true,
    unlockedAt: "10/08/2026",
    rewardNfs: 20,
    currentProgress: 5,
    maxProgress: 5,
    taskInstruction: "Ver 5 postagens editoriais no Feed"
  },
  {
    id: "super_likes",
    category: "engajamento",
    title: "Super Curtidor",
    description: "Curtiu 10 publicações no feed de saúde e esportes.",
    icon: "❤️",
    unlocked: true,
    unlockedAt: "10/08/2026",
    rewardNfs: 30,
    currentProgress: 10,
    maxProgress: 10,
    taskInstruction: "Dar 10 curtidas em conteúdos do feed"
  },
  {
    id: "explorador_shop",
    category: "shop",
    title: "Explorador do Shop",
    description: "Navegou pelo marketplace e conheceu as ofertas parceiras.",
    icon: "🛍️",
    unlocked: true,
    unlockedAt: "10/08/2026",
    rewardNfs: 20,
    currentProgress: 1,
    maxProgress: 1,
    taskInstruction: "Visitar a aba Shop do Netfits"
  },
  {
    id: "voz_da_tribo",
    category: "engajamento",
    title: "Voz da Tribo",
    description: "Compartilhou conteúdos do Feed com amigos ou grupos.",
    icon: "📢",
    unlocked: false,
    rewardNfs: 50,
    currentProgress: 3,
    maxProgress: 5,
    taskInstruction: "Compartilhar mais 2 publicações no WhatsApp ou redes"
  },
  {
    id: "embaixador_netfits",
    category: "tribo",
    title: "Embaixador Netfits",
    description: "Convidou e indicou novos amigos para o ecossistema.",
    icon: "🤝",
    unlocked: false,
    rewardNfs: 100,
    currentProgress: 1,
    maxProgress: 3,
    taskInstruction: "Indicar mais 2 amigos com seu código exclusivo"
  },
  {
    id: "associado_vip",
    category: "tribo",
    title: "Associado VIP",
    description: "Captou mais de 10 novos usuários através do seu link exclusivo de associado.",
    icon: "👑",
    unlocked: false,
    rewardNfs: 500,
    currentProgress: 12,
    maxProgress: 50,
    taskInstruction: "Captar novos usuários pelo seu link exclusivo de Associado"
  },
  {
    id: "primeira_compra",
    category: "shop",
    title: "Primeiro Cashback",
    description: "Realizou sua primeira compra em um lojista parceiro do Netfits Shop.",
    icon: "🏷️",
    unlocked: false,
    rewardNfs: 150,
    currentProgress: 0,
    maxProgress: 1,
    taskInstruction: "Comprar qualquer item em lojas parceiras do Shop"
  },
  {
    id: "mestre_cashback",
    category: "shop",
    title: "Mestre do Acúmulo",
    description: "Acumulou saldo de nfs em 3 compras diferentes no marketplace.",
    icon: "💰",
    unlocked: false,
    rewardNfs: 200,
    currentProgress: 0,
    maxProgress: 3,
    taskInstruction: "Acumular nfs em 3 compras em parceiros do Shop"
  },
  {
    id: "atleta_conectado",
    category: "perfil",
    title: "Atleta de Alta Performance",
    description: "Completou seu perfil de modalidades esportivas e hábitos saudáveis.",
    icon: "🏃",
    unlocked: false,
    rewardNfs: 80,
    currentProgress: 2,
    maxProgress: 4,
    taskInstruction: "Selecionar mais modalidades esportivas no seu perfil"
  }
];
let badgesList = [...INITIAL_BADGES];
const listeners = /* @__PURE__ */ new Set();
const emit = () => listeners.forEach((l) => l());
const subscribe = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};
const getSnapshot = () => badgesList;
const badgesStore = {
  get: () => badgesList,
  getUnlockedCount: () => badgesList.filter((b) => b.unlocked).length,
  getTotalCount: () => badgesList.length,
  unlockBadge(id) {
    const item = badgesList.find((b) => b.id === id);
    if (!item || item.unlocked) return;
    badgesList = badgesList.map(
      (b) => b.id === id ? {
        ...b,
        unlocked: true,
        unlockedAt: (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR"),
        currentProgress: b.maxProgress
      } : b
    );
    wallet.earn(item.rewardNfs, `Selo Desbloqueado: ${item.title}`);
    toast.success(`🎉 Selo Desbloqueado: "${item.title}"! (+${item.rewardNfs} nfs creditados)`);
    emit();
  }
};
function useBadges() {
  return reactExports.useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
const netfitsLogo = "/assets/netfits-logo-ewIUGvXh.png";
const INITIAL_MESSAGES = [
  {
    id: "msg-1",
    sender: "ai",
    text: "Olá! Sou a Netfit AI v2.0, sua assistente inteligente no ecossistema esportivo. Como posso ajudar você hoje?",
    timestamp: "Agora"
  }
];
function NetfitAiAssistant() {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [messages, setMessages] = reactExports.useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = reactExports.useState("");
  const [isTyping, setIsTyping] = reactExports.useState(false);
  const chatEndRef = reactExports.useRef(null);
  const { balance: nfsBalance, balanceBRL } = useWallet();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);
  const resolveSmartResponse = (query) => {
    const q = query.toLowerCase().trim();
    if (q.includes("saldo") || q.includes("quanto tenho") || q.includes("meus pontos") || q.includes("extrato") || q.includes("carteira")) {
      return {
        text: `Você possui atualmente **${nfsBalance.toLocaleString("pt-BR")} nfs** acumulados na sua carteira (equivalente a aproximadamente **${balanceBRL}** em resgates no Netfits Shop)!`,
        actionLabel: "Abrir Minha Carteira",
        route: "/wallet"
      };
    }
    if (q.includes("quanto vale") || q.includes("valor") || q.includes("conversão") || q.includes("cotação") || q.includes("1 nfs")) {
      return {
        text: "Cada ponto **1 nfs equivale a R$ 0,02** em resgates reais (ex: 50 nfs = R$ 1,00 | 1.000 nfs = R$ 20,00). No Netfits Shop você pode pagar 100% de um produto com nfs ou usá-los para obter descontos em marcas parceiras como Asics, Netshoes e Liquidz!",
        actionLabel: "Explorar o Shop",
        route: "/market"
      };
    }
    if (q.includes("loja") || q.includes("shop") || q.includes("comprar") || q.includes("tênis") || q.includes("suplemento") || q.includes("desconto") || q.includes("asics") || q.includes("gel")) {
      return {
        text: "No Netfits Shop você encontra tênis de alta performance (Asics Novablast com placa de carbono), isotônicos Liquidz, géis de carboidrato Gu Energy e relógios smartwatch com até 100% de desconto usando seus pontos nfs!",
        actionLabel: "Ir para o Netfits Shop",
        route: "/market"
      };
    }
    if (q.includes("indicação") || q.includes("indicar") || q.includes("convite") || q.includes("amigo") || q.includes("código") || q.includes("ganhar pontos")) {
      return {
        text: "Para cada amigo que se cadastrar com seu código de indicação, ambos ganham **+50 nfs bônus** instantaneamente na carteira! Você também pode acompanhar comissões em PIX de até 10% no Portal de Associados.",
        actionLabel: "Ver Portal de Associados",
        route: "/associado"
      };
    }
    if (q.includes("wearable") || q.includes("garmin") || q.includes("strava") || q.includes("apple watch") || q.includes("relógio") || q.includes("sincronizar")) {
      return {
        text: "Você pode conectar seu relógio ou aplicativo (Garmin Connect, Apple Watch, Strava, Fitbit, Polar, Samsung Health) na aba de Atividades para transformar seus km percorridos, frequência cardíaca e sono em pontos nfs todos os dias!",
        actionLabel: "Ver Minhas Atividades",
        route: "/activities"
      };
    }
    if (q.includes("smart fit") || q.includes("academia") || q.includes("presença") || q.includes("treino")) {
      return {
        text: "Ao vincular sua conta da Smart Fit no app Netfits, você ganha **+15 nfs por cada treino validado** por catraca na academia, acumulando pontos automáticos todo mês!",
        actionLabel: "Ver Atividades",
        route: "/activities"
      };
    }
    if (q.includes("senha") || q.includes("esqueceu") || q.includes("login") || q.includes("biometria") || q.includes("face id") || q.includes("passkey")) {
      return {
        text: "Para recuperar sua senha, acesse a tela de Login e clique em 'Esqueceu sua senha?'. Você também pode ativar a autenticação nativa por Biometria / Face ID (Passkeys) para acessar a conta em 1 toque de forma ultra segura!",
        actionLabel: "Ir para Login / Cadastro",
        route: "/auth"
      };
    }
    if (q.includes("nutrição") || q.includes("nutri") || q.includes("isabella") || q.includes("consulta") || q.includes("alimentação")) {
      return {
        text: "Temos a Dra. Isabella Formigari (Nutrologia Esportiva) em nossa rede de especialistas credenciados. Você pode agendar orientações nutricionais focadas em longevidade e saúde esportiva diretamente no Feed e Shop!",
        actionLabel: "Ver no Feed",
        route: "/"
      };
    }
    if (q.includes("funciona") || q.includes("como ganho") || q.includes("o que é") || q.includes("propósito") || q.includes("netfits")) {
      return {
        text: "A Netfits transforma seus hábitos saudáveis em moedas digitais (nfs)! Você ganha pontos de 4 formas: 1) Curtindo e postando no Feed; 2) Mantendo treinos semanais; 3) Conectando seu wearable/Smart Fit; 4) Indicando novos amigos com seu código.",
        actionLabel: "Ver minha Carteira",
        route: "/wallet"
      };
    }
    return {
      text: `Entendi sua dúvida sobre "${query}". Posso orientar você sobre seu saldo atual (${nfsBalance.toLocaleString("pt-BR")} nfs), cotação dos pontos, resgates no Shop ou como ganhar bônus indicando amigos! O que deseja saber?`,
      actionLabel: "Explorar o Shop",
      route: "/market"
    };
  };
  const handleSend = (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;
    const userMsg = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);
    setTimeout(() => {
      const resolved = resolveSmartResponse(query);
      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: resolved.text,
        timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        action: resolved.actionLabel && resolved.route ? {
          label: resolved.actionLabel,
          targetRoute: resolved.route,
          onClick: () => {
            toast.info(`Navegando para: ${resolved.actionLabel}`);
            setIsOpen(false);
            navigate({ to: resolved.route });
          }
        } : void 0
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setIsOpen(true),
        className: "fixed bottom-20 right-4 z-50 bg-gradient-to-tr from-purple-700 to-purple-600 text-white p-3.5 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-2 ring-2 ring-lime-400/80 group",
        "aria-label": "Abrir Netfit AI",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: netfitsLogo, alt: "Netfits", className: "h-6 w-auto object-contain" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 size-2.5 bg-lime-400 rounded-full ring-2 ring-purple-900 animate-pulse" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold tracking-wide pr-1 hidden sm:inline", children: "Netfit AI" })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-zinc-950 text-zinc-100 h-full flex flex-col shadow-2xl border-l border-zinc-800 animate-in slide-in-from-right duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-zinc-800 bg-zinc-900/90 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-full bg-zinc-900 border border-purple-500/30 grid place-items-center shadow-inner p-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: netfitsLogo, alt: "Netfits", className: "h-full w-auto object-contain" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold flex items-center gap-1.5 text-zinc-50", children: [
              "Netfit AI",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-lime-400/20 text-lime-400 font-extrabold px-1.5 py-0.5 rounded border border-lime-400/30", children: "v2.0" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-400", children: "Assistente da Vida em Movimento" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIsOpen(false),
            className: "p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border-b border-zinc-800/60 bg-zinc-900/40 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleSend("Qual o meu saldo?"),
            className: "shrink-0 bg-purple-950/80 border border-purple-500/50 text-purple-200 font-semibold rounded-full px-3 py-1.5 transition-colors flex items-center gap-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "size-3.5 text-lime-400" }),
              "Meu Saldo"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => handleSend("Quanto vale 1 nfs?"),
            className: "shrink-0 bg-zinc-800 hover:bg-purple-950/60 border border-zinc-700/60 text-zinc-300 rounded-full px-3 py-1.5 transition-colors",
            children: "💵 Cotação do nfs"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => handleSend("Como funciona o bônus de indicação?"),
            className: "shrink-0 bg-zinc-800 hover:bg-purple-950/60 border border-zinc-700/60 text-zinc-300 rounded-full px-3 py-1.5 transition-colors",
            children: "🎁 Indicar Amigos (+50 nfs)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => handleSend("Como ganho netfits?"),
            className: "shrink-0 bg-zinc-800 hover:bg-purple-950/60 border border-zinc-700/60 text-zinc-300 rounded-full px-3 py-1.5 transition-colors",
            children: "💡 Como ganho nfs?"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => handleSend("Recomende produtos do Netfits Shop"),
            className: "shrink-0 bg-zinc-800 hover:bg-purple-950/60 border border-zinc-700/60 text-zinc-300 rounded-full px-3 py-1.5 transition-colors",
            children: "👟 Sugestões no Shop"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [
        messages.map((msg) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `max-w-[85%] rounded-2xl p-3.5 text-sm ${msg.sender === "user" ? "bg-purple-600 text-white rounded-br-none" : "bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-bl-none"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed text-pretty", children: msg.text }),
                  msg.action && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: msg.action.onClick,
                      className: "mt-3 w-full bg-lime-400 hover:bg-lime-300 text-zinc-950 text-xs font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors",
                      children: [
                        msg.action.label,
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `block text-[10px] mt-1.5 text-right ${msg.sender === "user" ? "text-purple-200" : "text-zinc-500"}`,
                      children: msg.timestamp
                    }
                  )
                ]
              }
            )
          },
          msg.id
        )),
        isTyping && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-2xl p-3 text-xs flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4 text-lime-400 animate-spin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Netfit AI está digitando..." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: chatEndRef })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 border-t border-zinc-800 bg-zinc-900", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: (e) => {
            e.preventDefault();
            handleSend();
          },
          className: "flex items-center gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: inputValue,
                onChange: (e) => setInputValue(e.target.value),
                placeholder: "Pergunte sobre treinos, nfs ou produtos...",
                className: "flex-1 bg-zinc-950 border border-zinc-800 text-zinc-100 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500 placeholder:text-zinc-500"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                disabled: !inputValue.trim(),
                className: "bg-lime-400 hover:bg-lime-300 disabled:opacity-50 text-zinc-950 p-2.5 rounded-full transition-colors font-bold shrink-0",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-4" })
              }
            )
          ]
        }
      ) })
    ] }) })
  ] });
}
const nativeBridge = {
  /**
   * Identifica se a aplicação está rodando dentro do empacotamento nativo do Capacitor (iOS / Android)
   * ou em um navegador Web convencional.
   */
  getPlatform() {
    if (typeof window === "undefined") return "web";
    const cap = window.Capacitor;
    if (cap && cap.isNativePlatform()) {
      return cap.getPlatform();
    }
    return "web";
  },
  isNativePlatform() {
    return this.getPlatform() !== "web";
  },
  /**
   * Aciona a verificação por Biometria Nativa (Face ID / Touch ID no iOS ou Fingerprint no Android).
   */
  async triggerBiometricAuth() {
    const platform = this.getPlatform();
    if (platform === "web") {
      toast.success("Biometria / Face ID confirmada com sucesso!");
      return { success: true };
    }
    try {
      toast.info(`Acionando ${platform === "ios" ? "Face ID" : "Impressão Digital"} nativo...`);
      const capBio = window.Capacitor?.Plugins?.Biometric;
      if (capBio) {
        await capBio.verify({ reason: "Autentique-se na Netfits" });
      }
      toast.success("Biometria nativa verificada!");
      return { success: true };
    } catch (err) {
      toast.error("Falha na verificação biométrica nativa.");
      return { success: false, error: err.message };
    }
  },
  /**
   * Solicita e registra permissões para Notificações Push nativas do celular.
   */
  async requestPushNotifications() {
    if (!this.isNativePlatform()) {
      toast.info("Notificações web ativas no navegador.");
      return true;
    }
    try {
      const PushNotifications = window.Capacitor?.Plugins?.PushNotifications;
      if (PushNotifications) {
        const perm = await PushNotifications.requestPermissions();
        if (perm.receive === "granted") {
          await PushNotifications.register();
          toast.success("Notificações Push nativas ativadas!");
          return true;
        }
      }
      return false;
    } catch {
      return false;
    }
  },
  /**
   * Aciona a câmera nativa do smartphone para leitura de QR Code.
   */
  async scanQrCode() {
    if (!this.isNativePlatform()) {
      toast.info("Escaneamento de QR Code via câmera web.");
      return "GALLO-NETFITS";
    }
    try {
      toast.info("Abrindo câmera nativa para leitura de QR Code...");
      const BarcodeScanner = window.Capacitor?.Plugins?.BarcodeScanner;
      if (BarcodeScanner) {
        const result = await BarcodeScanner.startScan();
        if (result.hasContent) {
          return result.content;
        }
      }
      return null;
    } catch (err) {
      toast.error("Não foi possível acessar a câmera do dispositivo.");
      return null;
    }
  },
  /**
   * Executa a checagem de atualizações transparentes em nuvem (Over-The-Air - Capgo / Live Updates).
   */
  async checkForLiveUpdates() {
    if (!this.isNativePlatform()) return;
    try {
      const LiveUpdate = window.Capacitor?.Plugins?.CapgoLiveUpdate;
      if (LiveUpdate) {
        const res = await LiveUpdate.sync();
        if (res.isUpdated) {
          toast.success("Aplicativo atualizado instantaneamente na nuvem!");
        }
      }
    } catch (e) {
    }
  }
};
const tabs = [
  { to: "/", label: "Feed", icon: House },
  { to: "/market", label: "Shop", icon: ShoppingBag },
  { to: "/activities", label: "Atividades", icon: Activity },
  { to: "/levels", label: "Badges", icon: Award },
  { to: "/wallet", label: "Carteira", icon: Wallet }
];
function AppShell({ children }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  reactExports.useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
      });
    }
    nativeBridge.checkForLiveUpdates();
  }, []);
  if (path === "/admin" || path.startsWith("/associado")) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen w-full flex justify-center bg-zinc-200/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md min-h-screen bg-background flex flex-col relative shadow-2xl ring-1 ring-black/5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 overflow-y-auto pb-28", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NetfitAiAssistant, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "fixed bottom-0 w-full max-w-md bg-white text-zinc-500 border-t border-zinc-200 px-6 pt-3 pb-8 flex items-center justify-between z-40 shadow-lg", children: tabs.map((t) => {
      const active = path === t.to;
      const Icon = t.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: t.to,
          className: `flex flex-col items-center gap-1 transition-all active:scale-95 ${active ? "text-purple-600 font-bold" : "text-zinc-500 hover:text-zinc-900"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5 shrink-0", strokeWidth: active ? 2.5 : 2 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium", children: t.label })
          ]
        },
        t.to
      );
    }) })
  ] }) });
}
function TopBar() {
  const { balance } = useWallet();
  useBadges();
  const unlockedCount = badgesStore.getUnlockedCount();
  const totalCount = badgesStore.getTotalCount();
  return (
    /* Header Navigation Bar (Cor Branco Sólido Sem Transparência - bg-white) */
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 bg-white text-zinc-900 border-b border-zinc-200 px-3 py-2.5 flex items-center justify-between shadow-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 shrink-0", "aria-label": "Netfits", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: netfitsDarkLogo,
            alt: "Netfits",
            className: "h-8 w-auto object-contain shrink-0 rounded-lg shadow-sm"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold tracking-tight text-xl text-zinc-900", children: "Netfits" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/wallet",
            className: "bg-zinc-100 text-zinc-900 rounded-full px-2 py-0.5 flex items-center gap-1 ring-1 ring-zinc-200 hover:bg-zinc-200 transition",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-3.5 bg-purple-600 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[6px] font-extrabold text-white", children: "nfs" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono font-extrabold tracking-wider text-purple-700", children: balance.toLocaleString("pt-BR") })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/levels",
            className: "bg-purple-50 text-purple-700 rounded-full px-2 py-0.5 flex items-center gap-1 ring-1 ring-purple-200 font-bold hover:bg-purple-100 transition-all text-[9px]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "size-3 text-purple-600 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-extrabold", children: [
                unlockedCount,
                "/",
                totalCount,
                " Badges"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/profile",
            "aria-label": "Meu perfil",
            className: "size-7 rounded-full overflow-hidden ring-1 ring-zinc-200 shadow-xs hover:ring-purple-500 transition shrink-0",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: profileAvatar,
                alt: "Foto do perfil",
                className: "w-full h-full object-cover"
              }
            )
          }
        )
      ] })
    ] })
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Página não encontrada." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "mt-6 inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background",
        children: "Voltar ao feed"
      }
    )
  ] }) });
}
function ErrorComponent({ error }) {
  console.error(error);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "Algo deu errado" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: error.message })
  ] }) });
}
const Route$9 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "Netfits — A rede da longevidade ativa" },
      {
        name: "description",
        content: "Netfits: feed de saúde e esporte, marketplace, sistema de níveis e wallet com moeda netfits. Treine, compre, ganhe."
      },
      { property: "og:title", content: "Netfits — A rede da longevidade ativa" },
      { property: "og:description", content: "Netfits: Your Health Hub connects users to health, sports content, a marketplace, and a loyalty program." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Netfits — A rede da longevidade ativa" },
      { name: "description", content: "Netfits: Your Health Hub connects users to health, sports content, a marketplace, and a loyalty program." },
      { name: "twitter:description", content: "Netfits: Your Health Hub connects users to health, sports content, a marketplace, and a loyalty program." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/295aaa4b-9612-4c80-a12d-847461b2a624/id-preview-869ab5db--3baa86c4-050f-4c79-a96b-d89f72afa2ed.lovable.app-1779568961248.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/295aaa4b-9612-4c80-a12d-847461b2a624/id-preview-869ab5db--3baa86c4-050f-4c79-a96b-d89f72afa2ed.lovable.app-1779568961248.png" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "pt-BR", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "link",
        {
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
          rel: "stylesheet"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$9.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) });
}
const $$splitComponentImporter$8 = () => import("./index-Beb2xv1r.mjs");
const Route$8 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Feed — Netfits"
    }, {
      name: "description",
      content: "Feed infinito de saúde, esporte, marcas, assessorias e profissionais."
    }, {
      property: "og:title",
      content: "Feed — Netfits"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./activities-D3go3vrp.mjs");
const Route$7 = createFileRoute("/activities")({
  head: () => ({
    meta: [{
      title: "Atividades — Netfits"
    }, {
      name: "description",
      content: "Suas atividades, sono e hábitos. Cada hábito vira netfits."
    }, {
      property: "og:title",
      content: "Atividades — Netfits"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./admin--1v7nWnD.mjs");
const Route$6 = createFileRoute("/admin")({
  head: () => ({
    meta: [{
      title: "Painel Administrativo — Netfits Realtime"
    }, {
      name: "description",
      content: "Indicadores em tempo real do ecossistema Netfits."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./associado-CGIyBmgy.mjs");
const Route$5 = createFileRoute("/associado")({
  head: () => ({
    meta: [{
      title: "Painel do Associado — Netfits"
    }, {
      name: "description",
      content: "Painel de transparência financeira e gestão de carteira para Associados e Influenciadores Netfits."
    }, {
      property: "og:title",
      content: "Painel do Associado — Netfits"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./auth-CMqroHhe.mjs");
const Route$4 = createFileRoute("/auth")({
  head: () => ({
    meta: [{
      title: "Cadastro & Login — Netfits"
    }, {
      name: "description",
      content: "Crie sua conta ou faça login no aplicativo Netfits."
    }, {
      property: "og:title",
      content: "Cadastro & Login — Netfits"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./levels-BJNcVEp7.mjs");
const Route$3 = createFileRoute("/levels")({
  head: () => ({
    meta: [{
      title: "Badges & Conquistas — Netfits"
    }, {
      name: "description",
      content: "Conquiste selos de engajamento, leitura, compras e indicações. Ganhe bônus em nfs."
    }, {
      property: "og:title",
      content: "Badges & Conquistas — Netfits"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./market-CTMVrUf9.mjs");
const Route$2 = createFileRoute("/market")({
  head: () => ({
    meta: [{
      title: "shop"
    }, {
      name: "description",
      content: "Produtos, consultas e serviços. Compre e ganhe netfits de volta."
    }, {
      property: "og:title",
      content: "shop"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./profile-CYKGzuKC.mjs");
const Route$1 = createFileRoute("/profile")({
  head: () => ({
    meta: [{
      title: "Meu Perfil — Netfits"
    }, {
      name: "description",
      content: "Gerencie seus dados Netfits."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./wallet-CfVFz7DG.mjs");
const Route = createFileRoute("/wallet")({
  head: () => ({
    meta: [{
      title: "Carteira — Netfits"
    }, {
      name: "description",
      content: "Sua carteira netfits. Saldo, cashback, indicações e resgates."
    }, {
      property: "og:title",
      content: "Carteira — Netfits"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$8.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
});
const ActivitiesRoute = Route$7.update({
  id: "/activities",
  path: "/activities",
  getParentRoute: () => Route$9
});
const AdminRoute = Route$6.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$9
});
const AssociadoRoute = Route$5.update({
  id: "/associado",
  path: "/associado",
  getParentRoute: () => Route$9
});
const AuthRoute = Route$4.update({
  id: "/auth",
  path: "/auth",
  getParentRoute: () => Route$9
});
const LevelsRoute = Route$3.update({
  id: "/levels",
  path: "/levels",
  getParentRoute: () => Route$9
});
const MarketRoute = Route$2.update({
  id: "/market",
  path: "/market",
  getParentRoute: () => Route$9
});
const ProfileRoute = Route$1.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => Route$9
});
const WalletRoute = Route.update({
  id: "/wallet",
  path: "/wallet",
  getParentRoute: () => Route$9
});
const rootRouteChildren = {
  IndexRoute,
  ActivitiesRoute,
  AdminRoute,
  AssociadoRoute,
  AuthRoute,
  LevelsRoute,
  MarketRoute,
  ProfileRoute,
  WalletRoute
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
function createRouter() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1e3 * 60 * 5
      }
    }
  });
  const router2 = createRouter$1({
    routeTree,
    context: {
      queryClient
    },
    defaultPreload: "intent"
  });
  return router2;
}
const getRouter = () => createRouter();
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createRouter,
  default: createRouter,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  activities as a,
  nativeBridge as b,
  badgesStore as c,
  marketCategories as d,
  useWallet as e,
  feedItems as f,
  profileAvatar as g,
  marketProducts as m,
  netfitsLogo as n,
  parseNfs as p,
  router as r,
  useBadges as u,
  wallet as w
};
