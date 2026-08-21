import { toast } from "sonner";

export interface SandboxUser {
  id: string;
  identifier: string;
  fullName: string;
  type: "athlete" | "associado" | "partner" | "admin";
  nfsBalance: number;
  referralCode: string;
  referredBy?: string;
  associatedWith?: string;
  registeredAt: string;
  avatarUrl?: string;
  professionalRegister?: string;
  specialty?: string;
  city?: string;
}

export interface SandboxTransaction {
  id: string;
  userId: string;
  userName: string;
  amount: number; // positive for gain, negative for spent
  description: string;
  category: "welcome" | "referral" | "like" | "share" | "shop" | "workout" | "associado_bonus";
  timestamp: string;
}

export interface SandboxPartner {
  id: string;
  tradeName: string;
  companyName: string;
  cnpj: string;
  category: "Academia" | "Clínica" | "Assessoria" | "Loja" | "Evento";
  city: string;
  state: string;
  email: string;
  phone: string;
  status: "ativo" | "pendente";
  registeredAt: string;
}

export interface SandboxTicket {
  id: string;
  ticketNumber: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  category: "suporte" | "comercial" | "associado" | "duvida";
  message: string;
  status: "aberto" | "em_andamento" | "resolvido";
  createdAt: string;
}

export interface SandboxOrder {
  id: string;
  orderNumber: string;
  userId: string;
  userName: string;
  productName: string;
  pointsPaid: number;
  status: "processando" | "enviado" | "entregue";
  createdAt: string;
}

const STORAGE_KEY = "netfits_shared_sandbox_db_v1";
const SYNC_CHANNEL = "netfits_sandbox_sync_channel";

// Default Seed Data for Live Testing
const INITIAL_USERS: SandboxUser[] = [
  {
    id: "user-admin",
    identifier: "admin@netfits.com.br",
    fullName: "Administrador Netfits",
    type: "admin",
    nfsBalance: 25000,
    referralCode: "ADMIN-NETFITS",
    registeredAt: "2026-08-20T10:00:00Z",
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
    registeredAt: "2026-08-20T11:00:00Z",
  },
  {
    id: "user-athlete-1",
    identifier: "gallo@netfits.com.br",
    fullName: "André Gallo",
    type: "athlete",
    nfsBalance: 350,
    referralCode: "GALLO-NETFITS",
    registeredAt: "2026-08-20T12:00:00Z",
  },
  {
    id: "user-athlete-2",
    identifier: "marina@netfits.com.br",
    fullName: "Marina Run",
    type: "athlete",
    nfsBalance: 120,
    referralCode: "MARINA-RUN",
    referredBy: "GALLO-NETFITS",
    registeredAt: "2026-08-20T14:30:00Z",
  },
];

const INITIAL_PARTNERS: SandboxPartner[] = [
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
    registeredAt: "2026-08-20T09:00:00Z",
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
    registeredAt: "2026-08-20T09:30:00Z",
  },
];

const INITIAL_TRANSACTIONS: SandboxTransaction[] = [
  {
    id: "tx-1",
    userId: "user-athlete-1",
    userName: "André Gallo",
    amount: 50,
    description: "Bônus de Boas-Vindas no Cadastro",
    category: "welcome",
    timestamp: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
  {
    id: "tx-2",
    userId: "user-athlete-1",
    userName: "André Gallo",
    amount: 50,
    description: "Bônus por Indicação de Amigo (Marina Run)",
    category: "referral",
    timestamp: new Date(Date.now() - 3600000 * 12).toISOString(),
  },
];

const INITIAL_TICKETS: SandboxTicket[] = [
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
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
  },
];

const INITIAL_ORDERS: SandboxOrder[] = [
  {
    id: "ord-1",
    orderNumber: "PED-2026-001",
    userId: "user-athlete-1",
    userName: "André Gallo",
    productName: "Creatina Monohidratada 100% Pura 300g",
    pointsPaid: 1200,
    status: "processando",
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
];

interface SandboxSchema {
  users: SandboxUser[];
  transactions: SandboxTransaction[];
  partners: SandboxPartner[];
  tickets: SandboxTicket[];
  orders: SandboxOrder[];
  activeUserId: string;
}

class HomologationSandboxStore {
  private state: SandboxSchema;
  private listeners: Set<() => void> = new Set();
  private broadcastChannel: BroadcastChannel | null = null;

  constructor() {
    this.state = this.loadFromStorage();
    if (typeof window !== "undefined") {
      try {
        this.broadcastChannel = new BroadcastChannel(SYNC_CHANNEL);
        this.broadcastChannel.onmessage = (event) => {
          if (event.data === "sync") {
            this.state = this.loadFromStorage();
            this.notify();
          }
        };
      } catch (e) {
        console.warn("BroadcastChannel not supported in this environment");
      }

      window.addEventListener("storage", (e) => {
        if (e.key === STORAGE_KEY) {
          this.state = this.loadFromStorage();
          this.notify();
        }
      });
    }
  }

  private loadFromStorage(): SandboxSchema {
    if (typeof window === "undefined") {
      return {
        users: INITIAL_USERS,
        transactions: INITIAL_TRANSACTIONS,
        partners: INITIAL_PARTNERS,
        tickets: INITIAL_TICKETS,
        orders: INITIAL_ORDERS,
        activeUserId: "user-athlete-1",
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

    const defaultState: SandboxSchema = {
      users: INITIAL_USERS,
      transactions: INITIAL_TRANSACTIONS,
      partners: INITIAL_PARTNERS,
      tickets: INITIAL_TICKETS,
      orders: INITIAL_ORDERS,
      activeUserId: "user-athlete-1",
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultState));
    return defaultState;
  }

  private saveToStorage() {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
      this.broadcastChannel?.postMessage("sync");
      this.notify();
    }
  }

  public subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach((fn) => fn());
  }

  // --- GETTERS ---
  public getState() {
    return this.state;
  }

  public getActiveUser(): SandboxUser {
    return (
      this.state.users.find((u) => u.id === this.state.activeUserId) ||
      this.state.users[0]
    );
  }

  public getUsers() {
    return this.state.users;
  }

  public getTransactions() {
    return this.state.transactions;
  }

  public getPartners() {
    return this.state.partners;
  }

  public getTickets() {
    return this.state.tickets;
  }

  public getOrders() {
    return this.state.orders;
  }

  // --- ACTIONS ---
  public setActiveUser(userId: string) {
    const found = this.state.users.find((u) => u.id === userId);
    if (found) {
      this.state.activeUserId = found.id;
      this.saveToStorage();
      toast.success(`Sessão alterada para: ${found.fullName} (${found.type.toUpperCase()})`);
    }
  }

  // 1, 2, 3: Cadastros de Atletas (Sem indicação, Com Indicação de Amigo, Com Indicação de Associado)
  public registerAthlete(data: {
    identifier: string;
    fullName: string;
    referralCode?: string;
  }): { success: boolean; user?: SandboxUser; error?: string } {
    const cleanId = data.identifier.trim().toLowerCase();
    const existing = this.state.users.find((u) => u.identifier.toLowerCase() === cleanId);
    if (existing) {
      return { success: false, error: "Identificador (E-mail/CPF/Celular) já consta cadastrado." };
    }

    const cleanRef = (data.referralCode || "").trim().toUpperCase();
    let referrer: SandboxUser | undefined = undefined;

    if (cleanRef) {
      referrer = this.state.users.find((u) => u.referralCode.toUpperCase() === cleanRef);
    }

    const newUserId = `user-${Date.now()}`;
    const newRefCode = `${data.fullName.split(" ")[0].toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

    const newUser: SandboxUser = {
      id: newUserId,
      identifier: data.identifier,
      fullName: data.fullName,
      type: "athlete",
      nfsBalance: 50, // Bônus Boas-Vindas
      referralCode: newRefCode,
      referredBy: referrer ? referrer.referralCode : undefined,
      associatedWith: referrer && referrer.type === "associado" ? referrer.referralCode : undefined,
      registeredAt: new Date().toISOString(),
    };

    this.state.users.push(newUser);

    // Registrar transação de Boas-Vindas (+50 nfs)
    this.state.transactions.unshift({
      id: `tx-${Date.now()}-welcome`,
      userId: newUser.id,
      userName: newUser.fullName,
      amount: 50,
      description: "Bônus de Boas-Vindas no Cadastro",
      category: "welcome",
      timestamp: new Date().toISOString(),
    });

    // Se houve indicação de Amigo ou Associado, bonificar quem indicou (+50 nfs)
    if (referrer) {
      referrer.nfsBalance += 50;
      this.state.transactions.unshift({
        id: `tx-${Date.now()}-referral`,
        userId: referrer.id,
        userName: referrer.fullName,
        amount: 50,
        description: `Bônus por Indicação de Novo Usuário (${newUser.fullName})`,
        category: "referral",
        timestamp: new Date().toISOString(),
      });
      toast.success(`🎉 Bônus de +50 nfs creditado para quem indicou (${referrer.fullName})!`);
    }

    this.state.activeUserId = newUser.id;
    this.saveToStorage();
    return { success: true, user: newUser };
  }

  // 4. Cadastro de Novo Associado
  public registerAssociado(data: {
    fullName: string;
    email: string;
    phone: string;
    register: string;
    specialty: string;
    city: string;
  }): { success: boolean; user?: SandboxUser } {
    const newId = `assoc-${Date.now()}`;
    const refCode = `ASSOC-${data.city.slice(0, 2).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

    const newAssociado: SandboxUser = {
      id: newId,
      identifier: data.email,
      fullName: data.fullName,
      type: "associado",
      nfsBalance: 500, // Bônus Inicial de Parceiro Associado
      referralCode: refCode,
      professionalRegister: data.register,
      specialty: data.specialty,
      city: data.city,
      registeredAt: new Date().toISOString(),
    };

    this.state.users.push(newAssociado);
    this.state.activeUserId = newAssociado.id;
    this.saveToStorage();
    toast.success(`✅ Novo Associado Cadastrado com Sucesso! Código: ${refCode}`);
    return { success: true, user: newAssociado };
  }

  // 5. Cadastro de Novo Parceiro Comercial
  public registerPartner(data: Omit<SandboxPartner, "id" | "status" | "registeredAt">): SandboxPartner {
    const newPartner: SandboxPartner = {
      ...data,
      id: `part-${Date.now()}`,
      status: "ativo",
      registeredAt: new Date().toISOString(),
    };

    this.state.partners.unshift(newPartner);
    this.saveToStorage();
    toast.success(`🏢 Parceiro Comercial "${data.tradeName}" cadastrado com sucesso!`);
    return newPartner;
  }

  // 6 & 7. Curtida e Compartilhamento de Posts
  public rewardEngagement(action: "like" | "share", postTitle: string) {
    const active = this.getActiveUser();
    const amount = action === "like" ? 5 : 10;
    const desc = action === "like"
      ? `Curtida no conteúdo: ${postTitle}`
      : `Compartilhamento pós-visualização: ${postTitle}`;

    active.nfsBalance += amount;
    this.state.transactions.unshift({
      id: `tx-${Date.now()}`,
      userId: active.id,
      userName: active.fullName,
      amount,
      description: desc,
      category: action,
      timestamp: new Date().toISOString(),
    });

    this.saveToStorage();
  }

  // 8. Compra no Shop com Pontos
  public buyShopProduct(productName: string, pointsPrice: number): boolean {
    const active = this.getActiveUser();
    if (active.nfsBalance < pointsPrice) {
      toast.error(`Saldo insuficiente em nfs (${active.nfsBalance} nfs). Necessário: ${pointsPrice} nfs.`);
      return false;
    }

    active.nfsBalance -= pointsPrice;

    const newOrder: SandboxOrder = {
      id: `ord-${Date.now()}`,
      orderNumber: `PED-2026-${Math.floor(100 + Math.random() * 900)}`,
      userId: active.id,
      userName: active.fullName,
      productName,
      pointsPaid: pointsPrice,
      status: "processando",
      createdAt: new Date().toISOString(),
    };

    this.state.orders.unshift(newOrder);
    this.state.transactions.unshift({
      id: `tx-${Date.now()}`,
      userId: active.id,
      userName: active.fullName,
      amount: -pointsPrice,
      description: `Resgate no Shop: ${productName}`,
      category: "shop",
      timestamp: new Date().toISOString(),
    });

    this.saveToStorage();
    toast.success(`🎉 Resgate de "${productName}" realizado com sucesso! Debitado: -${pointsPrice} nfs.`);
    return true;
  }

  // 11. Envio de Ticket de Contato
  public createContactTicket(data: Omit<SandboxTicket, "id" | "ticketNumber" | "status" | "createdAt">): SandboxTicket {
    const newTicket: SandboxTicket = {
      ...data,
      id: `tkt-${Date.now()}`,
      ticketNumber: `#NET-${Math.floor(10000 + Math.random() * 90000)}`,
      status: "aberto",
      createdAt: new Date().toISOString(),
    };

    this.state.tickets.unshift(newTicket);
    this.saveToStorage();
    toast.success(`📩 Solicitação ${newTicket.ticketNumber} registrada com sucesso!`);
    return newTicket;
  }

  // RESET TOTAL DO BANCO PROVISÓRIO
  public resetToDefaults() {
    this.state = {
      users: INITIAL_USERS,
      transactions: INITIAL_TRANSACTIONS,
      partners: INITIAL_PARTNERS,
      tickets: INITIAL_TICKETS,
      orders: INITIAL_ORDERS,
      activeUserId: "user-athlete-1",
    };
    this.saveToStorage();
    toast.info("🧹 Banco Provisório da Suíte de Homologação resetado com sucesso!");
  }
}

export const sharedSandboxStore = new HomologationSandboxStore();
