import { useSyncExternalStore } from "react";
import { toast } from "sonner";

export interface SandboxUser {
  id: string;
  identifier: string;
  email?: string;
  phone?: string;
  cpf?: string;
  birthDate?: string;
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
  benefitOffer?: string;
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

const STORAGE_KEY = "netfits_shared_sandbox_db_v2";
const DEVICE_SESSION_KEY = "netfits_device_active_user_id_v2";
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

const CLOUD_SYNC_ENDPOINT = "https://api.restful-api.dev/objects/ff8081819ff5b11001a0398235171e14";

class HomologationSandboxStore {
  private state: SandboxSchema;
  private listeners: Set<() => void> = new Set();
  private broadcastChannel: BroadcastChannel | null = null;
  private isSyncingCloud = false;

  constructor() {
    this.state = this.loadFromStorage();
    if (typeof window !== "undefined") {
      try {
        this.broadcastChannel = new BroadcastChannel(SYNC_CHANNEL);
        this.broadcastChannel.onmessage = (event) => {
          if (event.data === "sync") {
            const fresh = this.loadFromStorage();
            // Atualiza coleções compartilhadas preservando sessão deste dispositivo
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

      // Sincronização inicial em nuvem e pooling periódico a cada 12 segundos
      setTimeout(() => this.syncFromCloud(), 300);
      setInterval(() => this.syncFromCloud(), 12000);
    }
  }

  public async syncFromCloud(): Promise<SandboxUser[]> {
    if (typeof window === "undefined" || this.isSyncingCloud) return this.state.users;
    this.isSyncingCloud = true;
    try {
      const res = await fetch(CLOUD_SYNC_ENDPOINT, { cache: "no-store" });
      if (res.ok) {
        const json = await res.json();
        const cloudUsers: SandboxUser[] = json?.data?.users || [];
        if (Array.isArray(cloudUsers) && cloudUsers.length > 0) {
          let hasChanges = false;
          for (const cu of cloudUsers) {
            const idx = this.state.users.findIndex(
              (u) =>
                u.id === cu.id ||
                (u.email && cu.email && u.email.trim().toLowerCase() === cu.email.trim().toLowerCase()) ||
                (u.identifier && cu.identifier && u.identifier.trim().toLowerCase() === cu.identifier.trim().toLowerCase())
            );
            if (idx >= 0) {
              const prev = JSON.stringify(this.state.users[idx]);
              this.state.users[idx] = { ...this.state.users[idx], ...cu };
              if (prev !== JSON.stringify(this.state.users[idx])) {
                hasChanges = true;
              }
            } else {
              this.state.users.push(cu);
              hasChanges = true;
            }
          }

          if (hasChanges) {
            this.saveToStorageLocally();
            this.notify();
          }
        }
      }
    } catch (err) {
      console.warn("[CloudSync Fetch Warning]", err);
    } finally {
      this.isSyncingCloud = false;
    }
    return this.state.users;
  }

  public async syncToCloud(): Promise<void> {
    if (typeof window === "undefined") return;
    try {
      await fetch(CLOUD_SYNC_ENDPOINT, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Netfits Cloud Users",
          data: {
            users: this.state.users,
            transactions: this.state.transactions.slice(0, 50),
          },
        }),
      });
    } catch (err) {
      console.warn("[CloudSync Push Warning]", err);
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

  private saveToStorageLocally() {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    }
  }

  private saveToStorage() {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
      this.broadcastChannel?.postMessage("sync");
      this.notify();
      // Transmite cadastro/atualização para a nuvem global assincronamente
      this.syncToCloud();
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
    if (typeof window !== "undefined") {
      const deviceUserId = localStorage.getItem(DEVICE_SESSION_KEY);
      if (deviceUserId) {
        const found = this.state.users.find((u) => u.id === deviceUserId);
        if (found) return found;
      }
    }
    const fallback =
      this.state.users.find((u) => u.id === this.state.activeUserId) ||
      this.state.users[this.state.users.length - 1] ||
      INITIAL_USERS[0];
    return fallback;
  }

  public useActiveUser(): SandboxUser {
    return useSyncExternalStore(
      (fn) => this.subscribe(fn),
      () => this.getActiveUser(),
      () => INITIAL_USERS[0]
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
      if (typeof window !== "undefined") {
        localStorage.setItem(DEVICE_SESSION_KEY, found.id);
      }
      this.state.activeUserId = found.id;
      this.notify();
      toast.success(`Sessão alterada para: ${found.fullName} (${found.type.toUpperCase()})`);
    }
  }

  public updateUser(userId: string, updates: Partial<SandboxUser>) {
    const user = this.state.users.find((u) => u.id === userId);
    if (user) {
      Object.assign(user, updates);
      this.saveToStorage();
      toast.success("Perfil atualizado com sucesso no banco de dados!");
    }
  }

  public getUserTransactions(userId?: string): SandboxTransaction[] {
    const id = userId || this.getActiveUser().id;
    return this.state.transactions.filter((tx) => tx.userId === id);
  }

  public getUserOrders(userId?: string): SandboxOrder[] {
    const id = userId || this.getActiveUser().id;
    return this.state.orders.filter((ord) => ord.userId === id);
  }

  public addTransaction(data: {
    userId: string;
    userName: string;
    amount: number;
    description: string;
    category: "welcome" | "referral" | "like" | "share" | "shop" | "workout" | "associado_bonus";
  }) {
    const newTx: SandboxTransaction = {
      id: `tx-${Date.now()}`,
      userId: data.userId,
      userName: data.userName,
      amount: data.amount,
      description: data.description,
      category: data.category,
      timestamp: new Date().toISOString(),
    };
    this.state.transactions.unshift(newTx);
    this.saveToStorage();
    return newTx;
  }

  // 3. Cadastro de Novo Atleta (Campos Separados Obrigatórios: E-mail, Celular, CPF, Data de Nascimento)
  public registerAthlete(data: {
    fullName: string;
    email: string;
    phone: string;
    cpf: string;
    birthDate: string;
    referralCode?: string;
  }): { success: boolean; user?: SandboxUser; error?: string; isDuplicate?: boolean; matchedField?: string } {
    const cleanEmail = data.email.trim().toLowerCase();
    const cleanPhoneDigits = data.phone.replace(/\D/g, "");
    const cleanCpfDigits = data.cpf.replace(/\D/g, "");

    // Checar duplicidade em E-mail, Celular e CPF
    for (const u of this.state.users) {
      if (u.email && u.email.trim().toLowerCase() === cleanEmail) {
        return { success: false, error: `O E-mail "${data.email}" já consta cadastrado.`, isDuplicate: true, matchedField: "E-mail" };
      }
      if (u.identifier && u.identifier.trim().toLowerCase() === cleanEmail) {
        return { success: false, error: `O E-mail "${data.email}" já consta cadastrado.`, isDuplicate: true, matchedField: "E-mail" };
      }
      if (u.phone && u.phone.replace(/\D/g, "") === cleanPhoneDigits) {
        return { success: false, error: `O Celular "${data.phone}" já consta cadastrado.`, isDuplicate: true, matchedField: "Celular" };
      }
      if (u.cpf && u.cpf.replace(/\D/g, "") === cleanCpfDigits) {
        return { success: false, error: `O CPF "${data.cpf}" já consta cadastrado.`, isDuplicate: true, matchedField: "CPF" };
      }
    }

    const newId = `user-${Date.now()}`;
    const newRefCode = `NET-${Math.floor(1000 + Math.random() * 9000)}`;

    let referrer: SandboxUser | undefined;
    if (data.referralCode) {
      const codeClean = data.referralCode.trim().toUpperCase();
      referrer = this.state.users.find((u) => u.referralCode.toUpperCase() === codeClean);
    }

    // Regra da Experiencia Real:
    // - Sem codigo de indicacao: Saldo ZERO, ZERO historico de compras ou transacoes.
    // - Com codigo de indicacao valido: +50 nfs bonus de boas-vindas da indicacao.
    const initialNfs = referrer ? 50 : 0;

    const newUser: SandboxUser = {
      id: newId,
      identifier: data.email,
      email: data.email,
      phone: data.phone,
      cpf: data.cpf,
      birthDate: data.birthDate,
      fullName: data.fullName,
      type: "athlete",
      nfsBalance: initialNfs,
      referralCode: newRefCode,
      referredBy: referrer ? referrer.referralCode : undefined,
      associatedWith: referrer && referrer.type === "associado" ? referrer.referralCode : undefined,
      registeredAt: new Date().toISOString(),
    };

    this.state.users.push(newUser);

    // Se houve indicacao valida, criar a transacao inicial de bonus
    if (referrer) {
      this.state.transactions.unshift({
        id: `tx-${Date.now()}-welcome`,
        userId: newUser.id,
        userName: newUser.fullName,
        amount: 50,
        description: `Bônus por Cadastro via Indicação (${referrer.referralCode})`,
        category: "referral",
        timestamp: new Date().toISOString(),
      });

      // Creditar quem indicou (+50 nfs)
      referrer.nfsBalance += 50;
      this.state.transactions.unshift({
        id: `tx-${Date.now()}-referrer`,
        userId: referrer.id,
        userName: referrer.fullName,
        amount: 50,
        description: `Bônus por Indicar Novo Usuário (${newUser.fullName})`,
        category: "referral",
        timestamp: new Date().toISOString(),
      });
    }

    this.saveToStorage();
    this.setActiveUser(newUser.id);
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
      activeUserId: "user-athlete-1",
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

export const sharedSandboxStore = new HomologationSandboxStore();
