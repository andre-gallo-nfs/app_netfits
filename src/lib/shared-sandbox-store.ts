import { useSyncExternalStore } from "react";
import { toast } from "sonner";
import { operationalParamsStore } from "./operational-params-store";

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
  address?: string;
  street?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  state?: string;
  shortState?: string;
  zipcode?: string;
  sports?: string[];
  otherSport?: string;
  healthPlan?: string;
  gym?: string;
  coaching?: string;
  wearable?: string;
  loyaltyPrograms?: string[];
  loyaltyPointsEstimate?: string;
}

export interface SandboxTransaction {
  id: string;
  userId: string;
  userName: string;
  amount: number; // positive for gain, negative for spent
  description: string;
  category: "welcome" | "referral" | "like" | "share" | "shop" | "workout" | "associado_bonus" | "view" | "click" | "post";
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

export interface SandboxInteraction {
  id: string;
  timestamp: string;
  sourceRole: "atleta" | "parceiro" | "associado" | "colaborador";
  sourceName: string;
  sourceContact: string;
  channel: "email" | "chat" | "whatsapp" | "form" | "survey";
  subject: string;
  intent: "duvida" | "reclamacao" | "elogio" | "sugestao" | "negociacao" | "parceria" | "pesquisa_nps";
  content: string;
  sentiment: "positivo" | "neutro" | "critico";
  businessInsight: string;
  status: "processado" | "em_analise" | "incorporado_ao_roadmap";
  tags: string[];
}

const STORAGE_KEY = "netfits_production_db_v2";
const DEVICE_SESSION_KEY = "netfits_production_active_user_v1";
const SYNC_CHANNEL = "netfits_production_sync_channel";

export function purgeFabricatedMockData<T extends Partial<SandboxUser>>(u: T): T {
  if (!u) return u;
  const user = { ...u } as any;
  if (user.birthDate === "1983-12-05" || user.birthDate === "05/12/1983") {
    user.birthDate = "";
  }
  if (user.cpf === "256.647.308-03" || user.cpf === "25664730803") {
    user.cpf = "";
  }
  if (user.phone === "(11) 99535-1513" || user.phone === "11995351513") {
    user.phone = "";
  }
  if (typeof user.address === "string" && user.address.toLowerCase().includes("steinen")) {
    user.address = "";
    user.street = "";
    user.number = "";
    user.neighborhood = "";
    user.city = "";
    user.state = "";
    user.shortState = "";
    user.zipcode = "";
  }
  if (user.gym === "Bio Ritmo") user.gym = "";
  if (user.healthPlan === "Bradesco Saúde") user.healthPlan = "";
  if (user.wearable === "Garmin Fenix") user.wearable = "";
  return user as T;
}

// Base Definitiva e Oficial de Usuários em Produção (Go-Live)
// Contém estritamente os 3 usuários oficiais da liderança Netfits
const INITIAL_USERS: SandboxUser[] = [
  {
    id: "usr_andre",
    identifier: "aacgallo@hotmail.com.br",
    email: "aacgallo@hotmail.com.br",
    fullName: "André Gallo",
    type: "admin",
    phone: "",
    cpf: "",
    birthDate: "",
    address: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
    shortState: "",
    zipcode: "",
    sports: [],
    healthPlan: "",
    gym: "",
    wearable: "",
    nfsBalance: 50,
    referralCode: "GALLO-NETFITS",
    registeredAt: "2026-10-05T00:00:00Z",
  },
  {
    id: "usr_carlos_formigari",
    identifier: "carlos.formigari@netfits.com.br",
    email: "carlos.formigari@netfits.com.br",
    fullName: "Carlos Rodrigo Formigari",
    type: "athlete",
    nfsBalance: 50,
    referralCode: "FORMIGARI-NFS",
    registeredAt: "2026-10-06T00:00:00Z",
  },
  {
    id: "usr_cristiane_gallo",
    identifier: "cristiane.gallo@netfits.com.br",
    email: "cristiane.gallo@netfits.com.br",
    fullName: "Cristiane Queli da Silva Gallo",
    type: "athlete",
    nfsBalance: 50,
    referralCode: "CRIS-NETFITS",
    registeredAt: "2026-10-06T00:00:00Z",
  },
];

const INITIAL_PARTNERS: SandboxPartner[] = [];

const INITIAL_TRANSACTIONS: SandboxTransaction[] = [
  {
    id: "tx-welcome-andre",
    userId: "usr_andre",
    userName: "André Gallo",
    amount: 50,
    description: "🎉 Bônus de Boas-Vindas no Cadastramento Netfits",
    category: "welcome",
    timestamp: "2026-10-05T00:00:00Z",
  },
  {
    id: "tx-welcome-carlos",
    userId: "usr_carlos_formigari",
    userName: "Carlos Rodrigo Formigari",
    amount: 50,
    description: "🎉 Bônus de Boas-Vindas no Cadastramento Netfits",
    category: "welcome",
    timestamp: "2026-10-06T00:00:00Z",
  },
  {
    id: "tx-welcome-cristiane",
    userId: "usr_cristiane_gallo",
    userName: "Cristiane Queli da Silva Gallo",
    amount: 50,
    description: "🎉 Bônus de Boas-Vindas no Cadastramento Netfits",
    category: "welcome",
    timestamp: "2026-10-06T00:00:00Z",
  },
];

const INITIAL_TICKETS: SandboxTicket[] = [];

const INITIAL_ORDERS: SandboxOrder[] = [];

// Histórico de interações: estritamente vazio para refletir apenas interações reais
const INITIAL_INTERACTIONS: SandboxInteraction[] = [];

interface SandboxSchema {
  users: SandboxUser[];
  transactions: SandboxTransaction[];
  partners: SandboxPartner[];
  tickets: SandboxTicket[];
  orders: SandboxOrder[];
  interactions: SandboxInteraction[];
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

      // Sincronização inicial pontual ao carregar
      setTimeout(() => {
        this.syncToCloud();
        this.syncFromCloud();
      }, 500);

      // Polling periódico automático (a cada 6s) para buscar cadastros feitos em outros celulares
      setInterval(() => {
        this.syncFromCloud();
      }, 6000);

      window.addEventListener("focus", () => {
        this.syncFromCloud();
      });
    }
  }

  public async syncFromCloud(): Promise<SandboxUser[]> {
    if (typeof window === "undefined" || this.isSyncingCloud) return this.state.users;
    this.isSyncingCloud = true;
    try {
      // 1. Recarrega do localStorage e sincroniza entre abas locais
      const fresh = this.loadFromStorage();
      if (fresh && Array.isArray(fresh.users)) {
        this.state.users = fresh.users;
        this.state.transactions = fresh.transactions;
        this.state.partners = fresh.partners;
        this.state.tickets = fresh.tickets;
        this.state.orders = fresh.orders;
      }

      // 2. Busca do servidor de sincronização global /api/users-sync
      const res = await fetch("/api/users-sync", { cache: "no-store" });
      if (res.ok) {
        const json = await res.json();
        const serverUsers: SandboxUser[] = json?.users || [];
        if (Array.isArray(serverUsers) && serverUsers.length > 0) {
          let hasNew = false;
          for (const rawSu of serverUsers) {
            if (!rawSu || !rawSu.id) continue;
            const su = purgeFabricatedMockData(rawSu);
            const idx = this.state.users.findIndex(
              (u) =>
                u.id === su.id ||
                (u.email && su.email && u.email.trim().toLowerCase() === su.email.trim().toLowerCase()) ||
                (u.identifier && su.identifier && u.identifier.trim().toLowerCase() === su.identifier.trim().toLowerCase())
            );
            if (idx >= 0) {
              const current = this.state.users[idx];
              const merged: SandboxUser = { ...current };
              for (const [key, val] of Object.entries(su)) {
                if (val !== undefined && val !== null && val !== "") {
                  const currVal = (current as any)[key];
                  if (currVal === undefined || currVal === "" || (Array.isArray(currVal) && currVal.length === 0)) {
                    (merged as any)[key] = val;
                  }
                }
              }
              this.state.users[idx] = purgeFabricatedMockData(merged);
            } else {
              this.state.users.push(su);
            }
          }
          this.saveToStorageLocally();
        }
      }
      this.notify();
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
      this.saveToStorageLocally();
      this.broadcastChannel?.postMessage("sync");

      // Transmite cadastro/atualização para o servidor global assincronamente
      await fetch("/api/users-sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ users: this.state.users }),
      });
    } catch (err) {
      console.warn("[CloudSync Push Warning]", err);
    }
  }

  public deleteUser(userId: string): boolean {
    const idx = this.state.users.findIndex((u) => u.id === userId);
    if (idx >= 0) {
      const removed = this.state.users.splice(idx, 1)[0];
      if (this.state.activeUserId === userId) {
        this.state.activeUserId = this.state.users[0]?.id || "usr_andre";
      }
      this.saveToStorage();
      toast.success(`Usuário "${removed.fullName}" excluído com sucesso!`);
      return true;
    }
    return false;
  }

  public adjustUserBalance(userId: string, newBalance: number): boolean {
    const user = this.state.users.find((u) => u.id === userId);
    if (user) {
      const diff = newBalance - user.nfsBalance;
      user.nfsBalance = Math.max(0, newBalance);
      if (diff !== 0) {
        this.state.transactions.unshift({
          id: `tx-${Date.now()}-adj`,
          userId: user.id,
          userName: user.fullName,
          amount: diff,
          description: `Ajuste Administrativo de Saldo (${diff > 0 ? "+" : ""}${diff} nfs)`,
          category: "associado_bonus",
          timestamp: new Date().toISOString(),
        });
      }
      this.saveToStorage();
      toast.success(`Saldo de ${user.fullName} ajustado para ${user.nfsBalance} nfs!`);
      return true;
    }
    return false;
  }

  private loadFromStorage(): SandboxSchema {
    if (typeof window === "undefined") {
      return {
        users: INITIAL_USERS,
        transactions: INITIAL_TRANSACTIONS,
        partners: INITIAL_PARTNERS,
        tickets: INITIAL_TICKETS,
        orders: INITIAL_ORDERS,
        interactions: INITIAL_INTERACTIONS,
        activeUserId: "",
      };
    }

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const stored: SandboxSchema = JSON.parse(raw);
        const mergedUsers = [...stored.users];
        let hasNewUsers = false;
        for (const initUser of INITIAL_USERS) {
          const existingIdx = mergedUsers.findIndex(
            (u) =>
              u.id === initUser.id ||
              (u.identifier && u.identifier.toLowerCase() === initUser.identifier.toLowerCase()) ||
              (u.email && initUser.email && u.email.toLowerCase() === initUser.email.toLowerCase())
          );
          if (existingIdx === -1) {
            mergedUsers.push(initUser);
            hasNewUsers = true;
          }
        }
        stored.users = mergedUsers.map((u) => {
          let userWithBackup = { ...u };
          try {
            const bRaw = localStorage.getItem(`netfits_profile_saved_${u.id}`);
            if (bRaw) {
              const backup = JSON.parse(bRaw);
              userWithBackup = { ...userWithBackup, ...backup };
            }
          } catch {}
          const cleaned = purgeFabricatedMockData(userWithBackup);
          try {
            localStorage.setItem(`netfits_profile_saved_${u.id}`, JSON.stringify(cleaned));
          } catch {}
          return cleaned;
        });
        stored.interactions = (stored.interactions || []).filter((i) => !i.id.startsWith("int-00"));
        if (!stored.activeUserId) {
          stored.activeUserId = "usr_andre";
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
        return stored;
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
      interactions: INITIAL_INTERACTIONS,
      activeUserId: "usr_andre",
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultState));
    return defaultState;
  }

  private saveToStorageLocally() {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
      } catch (err) {
        console.warn("[saveToStorageLocally] Quota warning:", err);
      }
    }
  }

  private saveToStorage() {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
      } catch (err) {
        console.warn("[saveToStorage] Quota warning on full state:", err);
      }
      try {
        const active = this.getActiveUser();
        if (active && active.id) {
          localStorage.setItem(`netfits_profile_saved_${active.id}`, JSON.stringify(active));
        }
      } catch (err) {
        console.warn("[saveToStorage] Profile backup warning:", err);
      }
      this.broadcastChannel?.postMessage("sync");
      this.notify();
      // Transmite cadastro/atualização para a nuvem global assincronamente
      this.syncToCloud();
    }
  }

  public subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => fn());
  }

  public hasActiveSession(): boolean {
    if (typeof window !== "undefined") {
      const deviceUserId = localStorage.getItem(DEVICE_SESSION_KEY);
      if (deviceUserId) {
        return this.state.users.some((u) => u.id === deviceUserId);
      }
    }
    return false;
  }

  public clearActiveSession() {
    if (typeof window !== "undefined") {
      localStorage.removeItem(DEVICE_SESSION_KEY);
    }
    this.state.activeUserId = "";
    this.notify();
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
      this.state.users.find((u) => u.id === "usr_andre") ||
      this.state.users[0] ||
      INITIAL_USERS[0];
    return fallback;
  }

  public useActiveUser(): SandboxUser {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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

  public getInteractions() {
    if (!this.state.interactions || this.state.interactions.length === 0) {
      this.state.interactions = INITIAL_INTERACTIONS;
    }
    return this.state.interactions;
  }

  public addInteraction(data: Omit<SandboxInteraction, "id" | "timestamp">) {
    if (!this.state.interactions) {
      this.state.interactions = [...INITIAL_INTERACTIONS];
    }
    const newInt: SandboxInteraction = {
      ...data,
      id: `int-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      timestamp: new Date().toISOString(),
    };
    this.state.interactions.unshift(newInt);
    this.saveToStorage();
    return newInt;
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
      if (updates.address) {
        const parts = updates.address.split(/[,\-·]/).map((s) => s.trim()).filter(Boolean);
        if (parts[0]) user.street = parts[0];
        if (parts[1]) user.number = parts[1];
        if (parts[2]) user.neighborhood = parts[2];
        if (parts[3]) user.city = parts[3];
      }
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(`netfits_profile_saved_${user.id}`, JSON.stringify(user));
        } catch (e) {
          console.warn("[updateUser] Isolated profile backup warning:", e);
        }
      }
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
    category: SandboxTransaction["category"];
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

    // 1. Reconhecimento do André Gallo completando/atualizando seus dados cadastrais
    const isAndre =
      cleanEmail === "aacgallo@hotmail.com" ||
      cleanEmail === "aacgallo@hotmail.com.br" ||
      cleanEmail === "andre.gallo@netfits.com.br" ||
      (data.fullName && data.fullName.toLowerCase().includes("andré gallo"));

    if (isAndre) {
      const existingAndre = this.state.users.find((u) => u.id === "usr_andre");
      if (existingAndre) {
        if (data.fullName?.trim()) existingAndre.fullName = data.fullName.trim();
        existingAndre.email = data.email.trim();
        existingAndre.identifier = data.email.trim();
        if (data.phone?.trim()) existingAndre.phone = data.phone.trim();
        if (data.cpf?.trim()) existingAndre.cpf = data.cpf.trim();
        if (data.birthDate?.trim()) existingAndre.birthDate = data.birthDate.trim();
        this.saveToStorage();
        this.setActiveUser("usr_andre");
        return { success: true, user: existingAndre };
      }
    }

    // 2. Reconhecimento do Carlos Rodrigo Formigari completando/ativando seu cadastro
    const isCarlos =
      cleanEmail === "carlos.formigari@netfits.com.br" ||
      cleanEmail.includes("formigari") ||
      (data.fullName && data.fullName.toLowerCase().includes("formigari"));

    if (isCarlos) {
      const existingCarlos = this.state.users.find((u) => u.id === "usr_carlos_formigari");
      if (existingCarlos) {
        if (data.fullName?.trim()) existingCarlos.fullName = data.fullName.trim();
        existingCarlos.email = data.email.trim();
        existingCarlos.identifier = data.email.trim();
        if (data.phone?.trim()) existingCarlos.phone = data.phone.trim();
        if (data.cpf?.trim()) existingCarlos.cpf = data.cpf.trim();
        if (data.birthDate?.trim()) existingCarlos.birthDate = data.birthDate.trim();
        this.saveToStorage();
        this.setActiveUser("usr_carlos_formigari");
        return { success: true, user: existingCarlos };
      }
    }

    // 3. Reconhecimento da Cristiane Queli da Silva Gallo completando/ativando seu cadastro
    const isCris =
      cleanEmail === "cristiane.gallo@netfits.com.br" ||
      cleanEmail.includes("cristiane") ||
      (data.fullName && data.fullName.toLowerCase().includes("cristiane"));

    if (isCris) {
      const existingCris = this.state.users.find((u) => u.id === "usr_cristiane_gallo");
      if (existingCris) {
        if (data.fullName?.trim()) existingCris.fullName = data.fullName.trim();
        existingCris.email = data.email.trim();
        existingCris.identifier = data.email.trim();
        if (data.phone?.trim()) existingCris.phone = data.phone.trim();
        if (data.cpf?.trim()) existingCris.cpf = data.cpf.trim();
        if (data.birthDate?.trim()) existingCris.birthDate = data.birthDate.trim();
        this.saveToStorage();
        this.setActiveUser("usr_cristiane_gallo");
        return { success: true, user: existingCris };
      }
    }

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

    // Regra Operacional 2026:
    // - Todo novo cadastro no app ganha o bônus de boas-vindas: 50 nfs (newUserRegistrationBonusNfs)
    const welcomeBonus = operationalParamsStore.getParams().newUserRegistrationBonusNfs ?? 50;
    const initialNfs = welcomeBonus;

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

    // Registra a transação inicial de boas-vindas do novo usuário
    if (welcomeBonus > 0) {
      this.state.transactions.unshift({
        id: `tx-${Date.now()}-welcome`,
        userId: newUser.id,
        userName: newUser.fullName,
        amount: welcomeBonus,
        description: "Bônus de Boas-Vindas — Novo Cadastro no App Netfits",
        category: "welcome",
        timestamp: new Date().toISOString(),
      });
    }

    // Se houve indicação válida, creditar o indicador (+50 nfs / normalUserNewReferralBonusNfs)
    if (referrer) {
      const referralBonus = operationalParamsStore.getParams().normalUserNewReferralBonusNfs ?? 50;
      referrer.nfsBalance += referralBonus;
      this.state.transactions.unshift({
        id: `tx-${Date.now()}-referrer`,
        userId: referrer.id,
        userName: referrer.fullName,
        amount: referralBonus,
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

  // 6 & 7. Curtida, Compartilhamento e Visualização de Posts
  // 6 & 7. Interações do Feed (Visualização, Clique em Link, Curtida, Compartilhamento)
  public rewardEngagement(action: "like" | "share" | "view" | "click", postTitle: string, customAmount?: number) {
    const active = this.getActiveUser();
    const amount = customAmount ?? (action === "click" ? 10 : action === "view" ? 10 : action === "share" ? 10 : 10);
    const desc = action === "like"
      ? `Curtida no conteúdo: ${postTitle}`
      : action === "share"
      ? `Compartilhamento pós-visualização: ${postTitle}`
      : action === "click"
      ? `Clique em link do post: ${postTitle}`
      : `Visualização completa: ${postTitle}`;

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
      interactions: JSON.parse(JSON.stringify(INITIAL_INTERACTIONS)),
      activeUserId: "",
    };

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(DEVICE_SESSION_KEY, "usr_andre");
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
