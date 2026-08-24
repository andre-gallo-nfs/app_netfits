import { B as BroadcastChannel } from "../_libs/unenv.mjs";
import { c as createRouter$1, a as createRootRouteWithContext, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, u as useLocation, d as useRouterState, e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { H as House, S as ShoppingBag, A as Activity, a as Award, W as Wallet, F as FlaskConical, C as ChevronDown, b as Copy, U as User, E as ExternalLink, R as RotateCcw, X, c as ArrowRight, d as Sparkles, e as Send } from "../_libs/lucide-react.mjs";





import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";

import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-BeaH-wbx.css";
const netfitsDarkLogo = "/assets/netfits-logo-dark-D0RtFoJs.png";
const STORAGE_KEY = "netfits_shared_sandbox_db_v2";
const DEVICE_SESSION_KEY = "netfits_device_active_user_id_v2";
const SYNC_CHANNEL = "netfits_sandbox_sync_channel";
const INITIAL_USERS = [
  {
    id: "user-admin",
    identifier: "admin@netfits.com.br",
    fullName: "Administrador Netfits",
    type: "admin",
    nfsBalance: 25e3,
    referralCode: "ADMIN-NETFITS",
    registeredAt: "2026-08-20T10:00:00Z"
  },
  {
    id: "user-assoc-1",
    identifier: "dr.isabella@netfits.com.br",
    fullName: "Dra. Isabella Silva",
    type: "associado",
    nfsBalance: 4200,
    referralCode: "ASSOC-SP-001",
    professionalRegister: "CRM/SP 184.920",
    specialty: "Nutrologia Esportiva",
    city: "São Paulo - SP",
    registeredAt: "2026-08-20T11:00:00Z"
  },
  {
    id: "user-athlete-1",
    identifier: "gallo@netfits.com.br",
    fullName: "André Gallo",
    type: "athlete",
    nfsBalance: 350,
    referralCode: "GALLO-NETFITS",
    registeredAt: "2026-08-20T12:00:00Z"
  },
  {
    id: "user-athlete-2",
    identifier: "marina@netfits.com.br",
    fullName: "Marina Run",
    type: "athlete",
    nfsBalance: 120,
    referralCode: "MARINA-RUN",
    referredBy: "GALLO-NETFITS",
    registeredAt: "2026-08-20T14:30:00Z"
  }
];
const INITIAL_PARTNERS = [
  {
    id: "part-1",
    tradeName: "Smart Fit Paulista",
    companyName: "Smartfit Escola de Ginástica e Dança S.A.",
    cnpj: "07.594.978/0001-78",
    category: "Academia",
    city: "São Paulo",
    state: "SP",
    email: "parceiro@smartfit.com.br",
    phone: "(11) 98888-1000",
    status: "ativo",
    registeredAt: "2026-08-20T09:00:00Z"
  },
  {
    id: "part-2",
    tradeName: "Clínica Fibios Nutrologia",
    companyName: "Fibios Medicina Esportiva Ltda.",
    cnpj: "34.123.456/0001-99",
    category: "Clínica",
    city: "São Paulo",
    state: "SP",
    email: "contato@fibios.com.br",
    phone: "(11) 97777-2200",
    status: "ativo",
    registeredAt: "2026-08-20T09:30:00Z"
  }
];
const INITIAL_TRANSACTIONS = [
  {
    id: "tx-1",
    userId: "user-athlete-1",
    userName: "André Gallo",
    amount: 50,
    description: "Bônus de Boas-Vindas no Cadastro",
    category: "welcome",
    timestamp: new Date(Date.now() - 36e5 * 24).toISOString()
  },
  {
    id: "tx-2",
    userId: "user-athlete-1",
    userName: "André Gallo",
    amount: 50,
    description: "Bônus por Indicação de Amigo (Marina Run)",
    category: "referral",
    timestamp: new Date(Date.now() - 36e5 * 12).toISOString()
  }
];
const INITIAL_TICKETS = [
  {
    id: "tkt-1",
    ticketNumber: "#NET-84920",
    name: "Carlos Eduardo",
    email: "carlos@gmail.com",
    phone: "(11) 99123-4455",
    subject: "Dúvida sobre resgate no Shop Netfits",
    category: "suporte",
    message: "Gostaria de saber o prazo de entrega do kit suplementação em São Paulo.",
    status: "aberto",
    createdAt: new Date(Date.now() - 36e5 * 5).toISOString()
  }
];
const INITIAL_ORDERS = [
  {
    id: "ord-1",
    orderNumber: "PED-2026-001",
    userId: "user-athlete-1",
    userName: "André Gallo",
    productName: "Creatina Monohidratada 100% Pura 300g",
    pointsPaid: 1200,
    status: "processando",
    createdAt: new Date(Date.now() - 36e5 * 2).toISOString()
  }
];
class HomologationSandboxStore {
  state;
  listeners = /* @__PURE__ */ new Set();
  broadcastChannel = null;
  constructor() {
    this.state = this.loadFromStorage();
    if (typeof window !== "undefined") {
      try {
        this.broadcastChannel = new BroadcastChannel(SYNC_CHANNEL);
        this.broadcastChannel.onmessage = (event) => {
          if (event.data === "sync") {
            const fresh = this.loadFromStorage();
            this.state.users = fresh.users;
            this.state.transactions = fresh.transactions;
            this.state.partners = fresh.partners;
            this.state.tickets = fresh.tickets;
            this.state.orders = fresh.orders;
            this.notify();
          }
        };
      } catch (e) {
        console.warn("BroadcastChannel not supported in this environment");
      }
      window.addEventListener("storage", (e) => {
        if (e.key === STORAGE_KEY) {
          const fresh = this.loadFromStorage();
          this.state.users = fresh.users;
          this.state.transactions = fresh.transactions;
          this.state.partners = fresh.partners;
          this.state.tickets = fresh.tickets;
          this.state.orders = fresh.orders;
          this.notify();
        }
      });
    }
  }
  loadFromStorage() {
    if (typeof window === "undefined") {
      return {
        users: INITIAL_USERS,
        transactions: INITIAL_TRANSACTIONS,
        partners: INITIAL_PARTNERS,
        tickets: INITIAL_TICKETS,
        orders: INITIAL_ORDERS,
        activeUserId: "user-athlete-1"
      };
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.error("Failed to parse sandbox storage:", e);
    }
    const defaultState = {
      users: INITIAL_USERS,
      transactions: INITIAL_TRANSACTIONS,
      partners: INITIAL_PARTNERS,
      tickets: INITIAL_TICKETS,
      orders: INITIAL_ORDERS,
      activeUserId: "user-athlete-1"
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultState));
    return defaultState;
  }
  saveToStorage() {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
      this.broadcastChannel?.postMessage("sync");
      this.notify();
    }
  }
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
  notify() {
    this.listeners.forEach((fn) => fn());
  }
  // --- GETTERS ---
  getState() {
    return this.state;
  }
  getActiveUser() {
    if (typeof window !== "undefined") {
      const deviceUserId = localStorage.getItem(DEVICE_SESSION_KEY);
      if (deviceUserId) {
        const found = this.state.users.find((u) => u.id === deviceUserId);
        if (found) return found;
      }
    }
    const fallback = this.state.users.find((u) => u.id === this.state.activeUserId) || this.state.users[this.state.users.length - 1] || INITIAL_USERS[0];
    return fallback;
  }
  useActiveUser() {
    return reactExports.useSyncExternalStore(
      (fn) => this.subscribe(fn),
      () => this.getActiveUser(),
      () => INITIAL_USERS[0]
    );
  }
  getUsers() {
    return this.state.users;
  }
  getTransactions() {
    return this.state.transactions;
  }
  getPartners() {
    return this.state.partners;
  }
  getTickets() {
    return this.state.tickets;
  }
  getOrders() {
    return this.state.orders;
  }
  // --- ACTIONS ---
  setActiveUser(userId) {
    const found = this.state.users.find((u) => u.id === userId);
    if (found) {
      if (typeof window !== "undefined") {
        localStorage.setItem(DEVICE_SESSION_KEY, found.id);
      }
      this.state.activeUserId = found.id;
      this.notify();
      toast.success(`Sessão alterada para: ${found.fullName} (${found.type.toUpperCase()})`);
    }
  }
  updateUser(userId, updates) {
    const user = this.state.users.find((u) => u.id === userId);
    if (user) {
      Object.assign(user, updates);
      this.saveToStorage();
      toast.success("Perfil atualizado com sucesso no banco de dados!");
    }
  }
  getUserTransactions(userId) {
    const id = userId || this.getActiveUser().id;
    return this.state.transactions.filter((tx) => tx.userId === id);
  }
  getUserOrders(userId) {
    const id = userId || this.getActiveUser().id;
    return this.state.orders.filter((ord) => ord.userId === id);
  }
  addTransaction(data) {
    const newTx = {
      id: `tx-${Date.now()}`,
      userId: data.userId,
      userName: data.userName,
      amount: data.amount,
      description: data.description,
      category: data.category,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.state.transactions.unshift(newTx);
    this.saveToStorage();
    return newTx;
  }
  // 3. Cadastro de Novo Atleta (Experiencia 100% Real e Limpa)
  registerAthlete(data) {
    const cleanId = data.identifier.trim().toLowerCase();
    const cleanDigits = data.identifier.replace(/\D/g, "");
    const exists = this.state.users.some((u) => {
      if (u.identifier.toLowerCase() === cleanId) return true;
      if (cleanDigits.length >= 10 && u.identifier.replace(/\D/g, "") === cleanDigits) return true;
      return false;
    });
    if (exists) {
      return {
        success: false,
        error: `O identificador "${data.identifier}" já está cadastrado.`
      };
    }
    const newId = `user-${Date.now()}`;
    const newRefCode = `NET-${Math.floor(1e3 + Math.random() * 9e3)}`;
    let referrer;
    if (data.referralCode) {
      const codeClean = data.referralCode.trim().toUpperCase();
      referrer = this.state.users.find((u) => u.referralCode.toUpperCase() === codeClean);
    }
    const initialNfs = referrer ? 50 : 0;
    const newUser = {
      id: newId,
      identifier: data.identifier,
      fullName: data.fullName,
      type: "athlete",
      nfsBalance: initialNfs,
      referralCode: newRefCode,
      referredBy: referrer ? referrer.referralCode : void 0,
      associatedWith: referrer && referrer.type === "associado" ? referrer.referralCode : void 0,
      registeredAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.state.users.push(newUser);
    if (referrer) {
      this.state.transactions.unshift({
        id: `tx-${Date.now()}-welcome`,
        userId: newUser.id,
        userName: newUser.fullName,
        amount: 50,
        description: `Bônus por Cadastro via Indicação (${referrer.referralCode})`,
        category: "referral",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
      referrer.nfsBalance += 50;
      this.state.transactions.unshift({
        id: `tx-${Date.now()}-referrer`,
        userId: referrer.id,
        userName: referrer.fullName,
        amount: 50,
        description: `Bônus por Indicar Novo Usuário (${newUser.fullName})`,
        category: "referral",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    this.setActiveUser(newUser.id);
    return { success: true, user: newUser };
  }
  // 4. Cadastro de Novo Associado
  registerAssociado(data) {
    const newId = `assoc-${Date.now()}`;
    const refCode = `ASSOC-${data.city.slice(0, 2).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
    const newAssociado = {
      id: newId,
      identifier: data.email,
      fullName: data.fullName,
      type: "associado",
      nfsBalance: 500,
      // Bônus Inicial de Parceiro Associado
      referralCode: refCode,
      professionalRegister: data.register,
      specialty: data.specialty,
      city: data.city,
      registeredAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.state.users.push(newAssociado);
    this.state.activeUserId = newAssociado.id;
    this.saveToStorage();
    toast.success(`✅ Novo Associado Cadastrado com Sucesso! Código: ${refCode}`);
    return { success: true, user: newAssociado };
  }
  // 5. Cadastro de Novo Parceiro Comercial
  registerPartner(data) {
    const newPartner = {
      ...data,
      id: `part-${Date.now()}`,
      status: "ativo",
      registeredAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.state.partners.unshift(newPartner);
    this.saveToStorage();
    toast.success(`🏢 Parceiro Comercial "${data.tradeName}" cadastrado com sucesso!`);
    return newPartner;
  }
  // 6 & 7. Curtida e Compartilhamento de Posts
  rewardEngagement(action, postTitle) {
    const active = this.getActiveUser();
    const amount = action === "like" ? 5 : 10;
    const desc = action === "like" ? `Curtida no conteúdo: ${postTitle}` : `Compartilhamento pós-visualização: ${postTitle}`;
    active.nfsBalance += amount;
    this.state.transactions.unshift({
      id: `tx-${Date.now()}`,
      userId: active.id,
      userName: active.fullName,
      amount,
      description: desc,
      category: action,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
    this.saveToStorage();
  }
  // 8. Compra no Shop com Pontos
  buyShopProduct(productName, pointsPrice) {
    const active = this.getActiveUser();
    if (active.nfsBalance < pointsPrice) {
      toast.error(`Saldo insuficiente em nfs (${active.nfsBalance} nfs). Necessário: ${pointsPrice} nfs.`);
      return false;
    }
    active.nfsBalance -= pointsPrice;
    const newOrder = {
      id: `ord-${Date.now()}`,
      orderNumber: `PED-2026-${Math.floor(100 + Math.random() * 900)}`,
      userId: active.id,
      userName: active.fullName,
      productName,
      pointsPaid: pointsPrice,
      status: "processando",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.state.orders.unshift(newOrder);
    this.state.transactions.unshift({
      id: `tx-${Date.now()}`,
      userId: active.id,
      userName: active.fullName,
      amount: -pointsPrice,
      description: `Resgate no Shop: ${productName}`,
      category: "shop",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
    this.saveToStorage();
    toast.success(`🎉 Resgate de "${productName}" realizado com sucesso! Debitado: -${pointsPrice} nfs.`);
    return true;
  }
  // 11. Envio de Ticket de Contato
  createContactTicket(data) {
    const newTicket = {
      ...data,
      id: `tkt-${Date.now()}`,
      ticketNumber: `#NET-${Math.floor(1e4 + Math.random() * 9e4)}`,
      status: "aberto",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.state.tickets.unshift(newTicket);
    this.saveToStorage();
    toast.success(`📩 Solicitação ${newTicket.ticketNumber} registrada com sucesso!`);
    return newTicket;
  }
  // RESET TOTAL DO BANCO PROVISÓRIO
  resetToDefaults() {
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(DEVICE_SESSION_KEY);
        localStorage.removeItem("netfits_auth_user");
        localStorage.removeItem("netfits_auth_user_v2");
        localStorage.removeItem("netfits_device_active_user_id");
      } catch (e) {
        console.error("Erro ao limpar storage no reset:", e);
      }
    }
    this.state = {
      users: JSON.parse(JSON.stringify(INITIAL_USERS)),
      transactions: JSON.parse(JSON.stringify(INITIAL_TRANSACTIONS)),
      partners: JSON.parse(JSON.stringify(INITIAL_PARTNERS)),
      tickets: JSON.parse(JSON.stringify(INITIAL_TICKETS)),
      orders: JSON.parse(JSON.stringify(INITIAL_ORDERS)),
      activeUserId: "user-athlete-1"
    };
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(DEVICE_SESSION_KEY, "user-athlete-1");
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
      } catch (e) {
        console.error("Erro ao salvar storage padrao no reset:", e);
      }
    }
    this.broadcastChannel?.postMessage("sync");
    this.notify();
    toast.success("🧹 Banco Provisório da Suíte de Homologação resetado com sucesso!");
    if (typeof window !== "undefined") {
      setTimeout(() => {
        window.location.reload();
      }, 400);
    }
  }
}
const sharedSandboxStore = new HomologationSandboxStore();
let state = { level: "atleta" };
const listeners$1 = /* @__PURE__ */ new Set();
const emit$1 = () => listeners$1.forEach((l) => l());
const MULTIPLIERS = {
  atleta: 1,
  prime: 1.5,
  elite: 2
};
const levelStore = {
  get: () => state.level,
  getMultiplier: () => MULTIPLIERS[state.level],
  set(level) {
    if (state.level === level) return;
    state = { level };
    emit$1();
  }
};
function formatNfs(n) {
  return n.toLocaleString("pt-BR");
}
const wallet = {
  getBalance: () => {
    return sharedSandboxStore.getActiveUser().nfsBalance;
  },
  getTransactions: () => {
    const active = sharedSandboxStore.getActiveUser();
    const sandboxTxs = sharedSandboxStore.getUserTransactions(active.id);
    return sandboxTxs.map((t) => ({
      id: t.id,
      title: t.description,
      date: new Date(t.timestamp).toLocaleDateString("pt-BR"),
      amount: `${t.amount >= 0 ? "+" : ""}${formatNfs(t.amount)} nfs`,
      positive: t.amount >= 0
    }));
  },
  /** Debita nfs (gasto numa compra) e registra a movimentação. */
  spend(amount, title) {
    if (amount <= 0) return;
    const active = sharedSandboxStore.getActiveUser();
    if (active.nfsBalance < amount) return;
    active.nfsBalance -= amount;
    sharedSandboxStore.addTransaction({
      userId: active.id,
      userName: active.fullName,
      amount: -amount,
      description: title,
      category: "shop"
    });
  },
  /** Credita nfs (cashback) e registra a movimentação. Aplica multiplicador do nível. */
  earn(amount, title) {
    if (amount <= 0) return;
    const active = sharedSandboxStore.getActiveUser();
    const multiplier = levelStore.getMultiplier();
    const credited = Math.round(amount * multiplier);
    active.nfsBalance += credited;
    sharedSandboxStore.addTransaction({
      userId: active.id,
      userName: active.fullName,
      amount: credited,
      description: title,
      category: "workout"
    });
  }
};
function subscribe$1(fn) {
  return sharedSandboxStore.subscribe(fn);
}
const SERVER_SNAPSHOT = {
  balance: 0,
  txs: []
};
let cachedSnapshot = SERVER_SNAPSHOT;
let lastActiveUserId = "";
let lastNfsBalance = -1;
let lastTxsCount = -1;
let lastTxId = "";
function getSnapshot$1() {
  if (typeof window === "undefined") {
    return SERVER_SNAPSHOT;
  }
  const activeUser = sharedSandboxStore.getActiveUser();
  const sandboxTxs = sharedSandboxStore.getUserTransactions(activeUser.id);
  const topTxId = sandboxTxs.length > 0 ? sandboxTxs[0].id : "";
  if (activeUser.id === lastActiveUserId && activeUser.nfsBalance === lastNfsBalance && sandboxTxs.length === lastTxsCount && topTxId === lastTxId) {
    return cachedSnapshot;
  }
  lastActiveUserId = activeUser.id;
  lastNfsBalance = activeUser.nfsBalance;
  lastTxsCount = sandboxTxs.length;
  lastTxId = topTxId;
  const formattedTxs = sandboxTxs.map((t) => ({
    id: t.id,
    title: t.description,
    date: new Date(t.timestamp).toLocaleDateString("pt-BR"),
    amount: `${t.amount >= 0 ? "+" : ""}${formatNfs(t.amount)} nfs`,
    positive: t.amount >= 0
  }));
  cachedSnapshot = {
    balance: activeUser.nfsBalance,
    txs: formattedTxs
  };
  return cachedSnapshot;
}
function getServerSnapshot() {
  return SERVER_SNAPSHOT;
}
function useWallet() {
  return reactExports.useSyncExternalStore(subscribe$1, getSnapshot$1, getServerSnapshot);
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
      navigator.serviceWorker.register("/sw.js").then((reg) => reg.update()).catch(() => {
      });
      window.addEventListener("error", (e) => {
        if (e.message && (e.message.includes("ReferenceError") || e.message.includes("Loading chunk"))) {
          if ("caches" in window) {
            caches.keys().then((keys) => {
              keys.forEach((k) => caches.delete(k));
            });
          }
        }
      });
    }
    nativeBridge.checkForLiveUpdates();
  }, []);
  if (path === "/auth" || path === "/admin" || path.startsWith("/associado") || path === "/home" || path === "/faq" || path === "/contato" || path === "/parceiros" || path === "/download") {
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
  const activeUser = sharedSandboxStore.useActiveUser();
  const initials = activeUser.fullName ? activeUser.fullName.trim().split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase() : "NF";
  return (
    /* Header Navigation Bar (Cor Branco Sólido Sem Transparência - bg-white) */
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 bg-white text-zinc-900 border-b border-zinc-200 px-3 py-2.5 flex items-center justify-between shadow-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/home", className: "flex items-center gap-2 shrink-0", "aria-label": "Netfits Homepage Institucional", children: [
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
            title: activeUser.fullName,
            className: "size-7 rounded-full overflow-hidden bg-purple-600 text-white font-extrabold text-[10px] flex items-center justify-center ring-2 ring-purple-500/20 shadow-xs hover:scale-105 transition shrink-0",
            children: activeUser.avatarUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: activeUser.avatarUrl, alt: activeUser.fullName, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: initials })
          }
        )
      ] })
    ] })
  );
}
const GA_MEASUREMENT_ID = "G-NETFITS2026";
function initGA4() {
  if (typeof window === "undefined") return;
  if (document.getElementById("ga4-script")) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", /* @__PURE__ */ new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
    // Desativado envio automático para termos controle total das rotas do TanStack Router
    anonymize_ip: true,
    cookie_flags: "SameSite=None;Secure"
  });
  const script = document.createElement("script");
  script.id = "ga4-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  console.log(`[GA4 Engine] Google Analytics 4 ativo com ID: ${GA_MEASUREMENT_ID}`);
}
function trackPageView(pathname, pageTitle) {
  if (typeof window === "undefined" || !window.gtag) return;
  const title = document.title || "Netfits";
  window.gtag("event", "page_view", {
    page_path: pathname,
    page_title: title,
    page_location: window.location.href
  });
  console.log(`[GA4 Track] PageView: ${pathname} (${title})`);
}
function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, {
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    ...params
  });
  console.log(`[GA4 Event] ${eventName}:`, params);
}
function trackPartnerRegistration(tradeName, category, cnpjVerified) {
  trackEvent("partner_registration_submit", {
    partner_trade_name: tradeName,
    partner_category: category,
    cnpj_verified: cnpjVerified,
    registration_fee: 0
    // Credenciamento 100% Gratuito
  });
}
function trackSupportTicket(protocol, subject) {
  trackEvent("support_ticket_created", {
    ticket_protocol: protocol,
    ticket_subject: subject
  });
}
function trackAppDownload(platform) {
  trackEvent("app_download_click", {
    target_platform: platform
  });
}
function GA4RouteTracker() {
  const location = useLocation();
  reactExports.useEffect(() => {
    initGA4();
  }, []);
  reactExports.useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);
  return null;
}
function HomologationControlPanel() {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [activeTab, setActiveTab] = reactExports.useState("users");
  const [state2, setState] = reactExports.useState(sharedSandboxStore.getState());
  const [userSearch, setUserSearch] = reactExports.useState("");
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    const unsubscribe = sharedSandboxStore.subscribe(() => {
      setState(sharedSandboxStore.getState());
    });
    return unsubscribe;
  }, []);
  const activeUser = sharedSandboxStore.getActiveUser();
  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copiado! (${text})`);
  };
  const filteredUsers = state2.users.filter((u) => {
    const q = userSearch.toLowerCase().trim();
    if (!q) return true;
    return u.fullName.toLowerCase().includes(q) || u.identifier.toLowerCase().includes(q) || u.referralCode.toLowerCase().includes(q) || u.referredBy && u.referredBy.toLowerCase().includes(q);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-4 right-4 z-50 font-sans", children: [
    !isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setIsOpen(true),
        className: "bg-gradient-to-r from-purple-700 via-purple-600 to-lime-500 text-white font-extrabold text-xs px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2.5 border border-white/20 hover:scale-105 transition-all active:scale-95 animate-pulse",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "size-4 text-lime-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🧪 Painel de Homologação" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-black/30 text-[10px] font-black px-2 py-0.5 rounded-full", children: [
            state2.users.length,
            " Usuários"
          ] })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-[420px] max-w-[calc(100vw-32px)] bg-zinc-950 text-white border border-purple-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[88vh] animate-in slide-in-from-bottom-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-900 via-purple-950 to-zinc-950 p-4 border-b border-purple-500/20 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-xl bg-purple-600/30 text-lime-400 grid place-items-center border border-purple-400/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "size-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-black uppercase tracking-wider text-white", children: "Suíte de Homologação Netfits" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400", children: "Banco Provisório em Tempo Real (Multi-Dispositivo)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIsOpen(false),
            className: "size-7 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 grid place-items-center transition",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-zinc-900/80 border-b border-zinc-800 flex items-center justify-between text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-lime-400 animate-ping shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400 font-medium leading-none", children: "Sessão Ativa:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-white truncate text-[11px] mt-0.5", children: [
              activeUser.fullName,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lime-400 font-extrabold", children: [
                "(",
                activeUser.type.toUpperCase(),
                ")"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-950 border border-purple-500/40 text-purple-300 font-mono font-bold text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          activeUser.nfsBalance,
          " nfs"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex border-b border-zinc-800 bg-zinc-900/40 text-[11px] font-bold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setActiveTab("users"),
            className: `flex-1 py-2.5 text-center border-b-2 transition ${activeTab === "users" ? "border-lime-400 text-lime-400 bg-purple-950/20" : "border-transparent text-zinc-400 hover:text-zinc-200"}`,
            children: [
              "👥 Cadastros (",
              state2.users.length,
              ")"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setActiveTab("flows"),
            className: `flex-1 py-2.5 text-center border-b-2 transition ${activeTab === "flows" ? "border-lime-400 text-lime-400 bg-purple-950/20" : "border-transparent text-zinc-400 hover:text-zinc-200"}`,
            children: "🚀 11 Fluxos"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setActiveTab("profiles"),
            className: `flex-1 py-2.5 text-center border-b-2 transition ${activeTab === "profiles" ? "border-lime-400 text-lime-400 bg-purple-950/20" : "border-transparent text-zinc-400 hover:text-zinc-200"}`,
            children: "👤 Sessão"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setActiveTab("db"),
            className: `flex-1 py-2.5 text-center border-b-2 transition ${activeTab === "db" ? "border-lime-400 text-lime-400 bg-purple-950/20" : "border-transparent text-zinc-400 hover:text-zinc-200"}`,
            children: "📊 Banco"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 space-y-2.5 overflow-y-auto flex-1 text-xs", children: [
        activeTab === "users" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] uppercase font-extrabold text-lime-400 tracking-wider", children: [
            "📸 Foto Atual do Cadastro (",
            filteredUsers.length,
            " de ",
            state2.users.length,
            ")"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: userSearch,
                onChange: (e) => setUserSearch(e.target.value),
                placeholder: "Buscar por nome, e-mail ou código de indicação...",
                className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
              }
            ),
            userSearch && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setUserSearch(""),
                className: "absolute right-2.5 top-2 text-zinc-400 hover:text-white text-xs font-bold",
                children: "✕"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: filteredUsers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 text-center text-zinc-400 bg-zinc-900 rounded-2xl border border-zinc-800 text-xs", children: [
            'Nenhum usuário encontrado com o filtro "',
            userSearch,
            '".'
          ] }) : filteredUsers.map((u) => {
            const isCurrentSession = u.id === activeUser.id;
            const typeLabel = u.type === "athlete" ? "Atleta" : u.type === "associado" ? "Associado Credenciado" : u.type === "admin" ? "Administrador Netfits" : "Parceiro Comercial";
            const badgeColor = u.type === "associado" ? "bg-purple-950 text-purple-300 border-purple-500/40" : u.type === "admin" ? "bg-amber-950 text-amber-300 border-amber-500/40" : "bg-lime-950 text-lime-400 border-lime-500/40";
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `p-3 rounded-2xl border transition space-y-2 ${isCurrentSession ? "bg-purple-950/40 border-lime-400/60 ring-1 ring-lime-400/30" : "bg-zinc-900/90 border-zinc-800 hover:border-zinc-700"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-white text-xs", children: u.fullName }),
                        isCurrentSession && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black px-1.5 py-0.5 rounded bg-lime-400 text-zinc-950 uppercase", children: "Sessão Ativa" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-400 truncate", children: u.identifier })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-black uppercase px-2 py-0.5 rounded-full border shrink-0 ${badgeColor}`, children: typeLabel })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-1.5 pt-2 border-t border-zinc-800 text-[10px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/60 p-1.5 rounded-lg border border-zinc-800/80", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500 block", children: "Código Indicação:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: () => handleCopy(u.referralCode, "Código de Indicação"),
                          className: "font-mono font-bold text-lime-400 hover:underline flex items-center gap-1 mt-0.5",
                          children: [
                            u.referralCode,
                            " ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "size-2.5" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/60 p-1.5 rounded-lg border border-zinc-800/80", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500 block", children: "Indicado Por:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-zinc-300 truncate block mt-0.5", children: u.referredBy ? /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-purple-300", children: u.referredBy }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: "Sem indicação (Direto)" }) })
                    ] }),
                    u.professionalRegister && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/60 p-1.5 rounded-lg border border-zinc-800/80 col-span-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500 block", children: "Registro Profissional & Especialidade:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-white mt-0.5 block", children: [
                        u.professionalRegister,
                        " ",
                        u.specialty ? `· ${u.specialty}` : ""
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/60 p-1.5 rounded-lg border border-zinc-800/80", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500 block", children: "Saldo Atual nfs:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-black text-lime-400 mt-0.5 block", children: [
                        u.nfsBalance,
                        " nfs"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/60 p-1.5 rounded-lg border border-zinc-800/80", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500 block", children: "Data de Cadastro:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-zinc-300 mt-0.5 block", children: u.registeredAt })
                    ] })
                  ] }),
                  !isCurrentSession && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => sharedSandboxStore.setActiveUser(u.id),
                      className: "w-full mt-1 py-1.5 rounded-xl bg-purple-600/30 hover:bg-purple-600 text-purple-200 hover:text-white font-bold text-[10px] transition border border-purple-500/30 flex items-center justify-center gap-1",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "size-3" }),
                        "Entrar na Conta deste Usuário"
                      ]
                    }
                  )
                ]
              },
              u.id
            );
          }) })
        ] }),
        activeTab === "flows" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase font-bold text-zinc-400 tracking-wider mb-2", children: "Selecione um fluxo para testar:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white text-[11px]", children: "1. Cadastro Sem Indicação" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => navigate({ to: "/auth" }),
                  className: "bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1",
                  children: [
                    "Ir para /auth ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-3" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400", children: "Cadastre um novo e-mail sem código e ganhe +50 nfs." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white text-[11px]", children: "2. Cadastro c/ Indicação de Cliente" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => handleCopy("MARINA-RUN", "Código de Amigo"),
                  className: "bg-lime-500/20 text-lime-400 border border-lime-500/30 text-[10px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1",
                  children: [
                    'Copiar "MARINA-RUN" ',
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "size-3" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400", children: 'Insira "MARINA-RUN" no cadastro para ambos ganharem +50 nfs.' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white text-[11px]", children: "3. Cadastro c/ Indicação de Associado" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => handleCopy("ASSOC-SP-001", "Código do Associado"),
                  className: "bg-lime-500/20 text-lime-400 border border-lime-500/30 text-[10px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1",
                  children: [
                    'Copiar "ASSOC-SP-001" ',
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "size-3" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400", children: "Vincule a conta do cliente à Dra. Isabella (Associada)." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white text-[11px]", children: "4. Cadastro de Novo Associado" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => navigate({ to: "/associado" }),
                  className: "bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1",
                  children: [
                    "Ir para /associado ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-3" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400", children: "Cadastre um médico/nutricionista com CRM/CRN/CREF." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white text-[11px]", children: "5. Cadastro de Parceiro Comercial" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => navigate({ to: "/parceiros" }),
                  className: "bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1",
                  children: [
                    "Ir para /parceiros ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-3" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400", children: "Cadastre academia/clínica 100% grátis (Modelo sem mensalidade)." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white text-[11px]", children: "6 & 7. Curtida e Compartilhamento Feed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => navigate({ to: "/" }),
                  className: "bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1",
                  children: [
                    "Ir para Feed / ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-3" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400", children: "Curta (+5 nfs) ou Compartilhe pós-leitura (+10 nfs) no Feed." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white text-[11px]", children: "8. Compra no Shop com Pontos" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => navigate({ to: "/market" }),
                  className: "bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1",
                  children: [
                    "Ir para Shop /market ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-3" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400", children: "Resgate produtos com saldo em nfs e veja no Admin." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white text-[11px]", children: "10. Painel Admin Realtime" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => navigate({ to: "/admin" }),
                  className: "bg-lime-500 hover:bg-lime-400 text-black text-[10px] font-black px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm",
                  children: [
                    "Ir para /admin ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-3" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400", children: "Veja o acompanhamento de vendas, cadastros e DRE FinOps." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white text-[11px]", children: "11. Envio de Mensagem de Contato" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => navigate({ to: "/contato" }),
                  className: "bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1",
                  children: [
                    "Ir para /contato ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-3" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400", children: "Envie um suporte e receba o ticket no Admin." })
          ] })
        ] }),
        activeTab === "profiles" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase font-bold text-zinc-400 tracking-wider mb-2", children: "Trocar Usuário da Sessão Atual:" }),
          state2.users.map((u) => {
            const isCurrent = u.id === activeUser.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => sharedSandboxStore.setActiveUser(u.id),
                className: `w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition ${isCurrent ? "bg-purple-900/40 border-lime-400/60 ring-1 ring-lime-400/30" : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-white text-[11px] flex items-center gap-1.5", children: [
                      u.fullName,
                      isCurrent && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime-400 font-black", children: "✓ Ativo" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-zinc-400 truncate", children: [
                      u.identifier,
                      " · Code: ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-zinc-300", children: u.referralCode })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-500/30", children: u.type }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] font-bold text-lime-400 mt-1", children: [
                      u.nfsBalance,
                      " nfs"
                    ] })
                  ] })
                ]
              },
              u.id
            );
          })
        ] }),
        activeTab === "db" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400 uppercase font-bold", children: "Atletas & Usuários" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-black text-lime-400", children: state2.users.length })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400 uppercase font-bold", children: "Parceiros Comerciais" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-black text-purple-400", children: state2.partners.length })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400 uppercase font-bold", children: "Pedidos no Shop" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-black text-amber-400", children: state2.orders.length })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400 uppercase font-bold", children: "Tickets de Suporte" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-black text-sky-400", children: state2.tickets.length })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-zinc-800 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  if (confirm("Tem certeza que deseja resetar todo o banco provisório e limpar os cadastros de teste? Essa ação restaurará os dados para o estado inicial.")) {
                    sharedSandboxStore.resetToDefaults();
                  }
                },
                className: "w-full bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/40 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-2 transition active:scale-95 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "size-4" }),
                  "Resetar Banco Provisório de Teste"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-zinc-500 text-center leading-tight", children: "Limpa cadastros de teste e restaura o banco de dados provisório para o estado inicial." })
          ] })
        ] })
      ] })
    ] })
  ] });
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
const Route$e = createRootRouteWithContext()({
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
  const { queryClient } = Route$e.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(GA4RouteTracker, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HomologationControlPanel, {})
  ] });
}
const $$splitComponentImporter$d = () => import("./index-BVGD3-Gv.mjs");
const Route$d = createFileRoute("/")({
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
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./activities-fOnPZxRL.mjs");
const Route$c = createFileRoute("/activities")({
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
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./admin-DYATO6z7.mjs");
const Route$b = createFileRoute("/admin")({
  head: () => ({
    meta: [{
      title: "Painel Administrativo — Netfits Realtime"
    }, {
      name: "description",
      content: "Indicadores em tempo real do ecossistema Netfits."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./associado-PimtNcGM.mjs");
const Route$a = createFileRoute("/associado")({
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
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./auth-DqlwWjN-.mjs");
const Route$9 = createFileRoute("/auth")({
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
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./contato-DTmSBaIN.mjs");
const Route$8 = createFileRoute("/contato")({
  head: () => ({
    meta: [{
      title: "Contato & Suporte — Netfits Tecnologia Ltda."
    }, {
      name: "description",
      content: "Entre em contato com a equipe Netfits para suporte ao usuário, parcerias comerciais, imprensa ou programa de associados."
    }, {
      property: "og:title",
      content: "Contato & Suporte — Netfits"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./download-CIU55-Ho.mjs");
const Route$7 = createFileRoute("/download")({
  head: () => ({
    meta: [{
      title: "Baixar Aplicativo Netfits — iOS, Android & Web App Instantâneo"
    }, {
      name: "description",
      content: "Baixe o aplicativo Netfits oficial para iOS na App Store, para Android no Google Play ou acesse instantaneamente via Web App PWA."
    }, {
      property: "og:title",
      content: "Baixar Aplicativo Netfits — iOS, Android & PWA"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./faq-C-THJ1mF.mjs");
const Route$6 = createFileRoute("/faq")({
  head: () => ({
    meta: [{
      title: "FAQ & Central de Ajuda — Netfits Tecnologia Ltda."
    }, {
      name: "description",
      content: "Tire suas dúvidas sobre pontos nfs, cashback no shop, cadastro de parceiros comerciais, programa de associados e integração com wearables."
    }, {
      property: "og:title",
      content: "FAQ & Central de Ajuda — Netfits"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./home-LdR2GgkF.mjs");
const Route$5 = createFileRoute("/home")({
  head: () => ({
    meta: [{
      title: "Netfits Tecnologia Ltda. — A Primeira Camada de Fidelidade para a Vida em Movimento"
    }, {
      name: "description",
      content: "Fazer cada movimento valer mais. Conheça a Netfits: feed de saúde, marketplace com cashback, ecossistema de parceiros e programa de fidelidade."
    }, {
      property: "og:title",
      content: "Netfits Tecnologia Ltda. — Fazer cada movimento valer mais"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./levels-BGsivlbL.mjs");
const Route$4 = createFileRoute("/levels")({
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
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./market-DnWuGCY4.mjs");
const Route$3 = createFileRoute("/market")({
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
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./parceiros-COPVlozz.mjs");
const Route$2 = createFileRoute("/parceiros")({
  head: () => ({
    meta: [{
      title: "Cadastro de Parceiros Comerciais — Netfits"
    }, {
      name: "description",
      content: "Cadastre sua academia, assessoria esportiva, clínica de fisioterapia, consultório de nutrição ou medicina do esporte na Netfits."
    }, {
      property: "og:title",
      content: "Cadastro de Parceiros Comerciais — Netfits"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./profile-Cg8Nxh5E.mjs");
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
const $$splitComponentImporter = () => import("./wallet-I0C7t8iL.mjs");
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
const IndexRoute = Route$d.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$e
});
const ActivitiesRoute = Route$c.update({
  id: "/activities",
  path: "/activities",
  getParentRoute: () => Route$e
});
const AdminRoute = Route$b.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$e
});
const AssociadoRoute = Route$a.update({
  id: "/associado",
  path: "/associado",
  getParentRoute: () => Route$e
});
const AuthRoute = Route$9.update({
  id: "/auth",
  path: "/auth",
  getParentRoute: () => Route$e
});
const ContatoRoute = Route$8.update({
  id: "/contato",
  path: "/contato",
  getParentRoute: () => Route$e
});
const DownloadRoute = Route$7.update({
  id: "/download",
  path: "/download",
  getParentRoute: () => Route$e
});
const FaqRoute = Route$6.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$e
});
const HomeRoute = Route$5.update({
  id: "/home",
  path: "/home",
  getParentRoute: () => Route$e
});
const LevelsRoute = Route$4.update({
  id: "/levels",
  path: "/levels",
  getParentRoute: () => Route$e
});
const MarketRoute = Route$3.update({
  id: "/market",
  path: "/market",
  getParentRoute: () => Route$e
});
const ParceirosRoute = Route$2.update({
  id: "/parceiros",
  path: "/parceiros",
  getParentRoute: () => Route$e
});
const ProfileRoute = Route$1.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => Route$e
});
const WalletRoute = Route.update({
  id: "/wallet",
  path: "/wallet",
  getParentRoute: () => Route$e
});
const rootRouteChildren = {
  IndexRoute,
  ActivitiesRoute,
  AdminRoute,
  AssociadoRoute,
  AuthRoute,
  ContatoRoute,
  DownloadRoute,
  FaqRoute,
  HomeRoute,
  LevelsRoute,
  MarketRoute,
  ParceirosRoute,
  ProfileRoute,
  WalletRoute
};
const routeTree = Route$e._addFileChildren(rootRouteChildren)._addFileTypes();
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
  nativeBridge as a,
  trackAppDownload as b,
  netfitsDarkLogo as c,
  badgesStore as d,
  useWallet as e,
  trackPartnerRegistration as f,
  netfitsLogo as n,
  parseNfs as p,
  router as r,
  sharedSandboxStore as s,
  trackSupportTicket as t,
  useBadges as u,
  wallet as w
};
