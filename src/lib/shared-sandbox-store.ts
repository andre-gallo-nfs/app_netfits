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
  bankData?: {
    bank: string;
    agency: string;
    account: string;
    accountType?: string;
    pixKeyType: string;
    pixKey: string;
  };
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

const STORAGE_KEY = "netfits_production_db_v1";
const DEVICE_SESSION_KEY = "netfits_production_active_user_v1";
const SYNC_CHANNEL = "netfits_production_sync_channel";

// Base Definitiva de Usuários em Produção (Go-Live)
const INITIAL_USERS: SandboxUser[] = [
  {
    id: "usr_andre",
    identifier: "aacgallo@hotmail.com.br",
    email: "aacgallo@hotmail.com.br",
    fullName: "André Gallo",
    type: "admin",
    nfsBalance: 50, // Saldo inicial oficial de 50 nfs pelo cadastramento
    referralCode: "GALLO-NETFITS",
    registeredAt: "2026-10-05T00:00:00Z",
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
    id: "tx-welcome-andre",
    userId: "usr_andre",
    userName: "André Gallo",
    amount: 50,
    description: "🎉 Bônus de Boas-Vindas no Cadastramento Netfits",
    category: "welcome",
    timestamp: "2026-10-05T00:00:00Z",
  },
];

const INITIAL_TICKETS: SandboxTicket[] = [];

const INITIAL_ORDERS: SandboxOrder[] = [];

const INITIAL_INTERACTIONS: SandboxInteraction[] = [
  {
    id: "int-001",
    timestamp: "2026-08-27T13:10:00Z",
    sourceRole: "atleta",
    sourceName: "André Gallo",
    sourceContact: "gallo@netfits.com.br",
    channel: "chat",
    subject: "Dúvida sobre sincronização de wearable Garmin e Strava",
    intent: "duvida",
    content: "Como faço para garantir que meus treinos de corrida do Garmin Connect enviem os pontos nfs automaticamente sem precisar abrir o app toda vez?",
    sentiment: "positivo",
    businessInsight: "Demanda por webhook background automático de sync de wearables em segundo plano para atrito zero na conversão de pontos.",
    status: "incorporado_ao_roadmap",
    tags: ["Wearables", "Garmin", "Automação", "UX"],
  },
  {
    id: "int-002",
    timestamp: "2026-08-27T11:45:00Z",
    sourceRole: "parceiro",
    sourceName: "Academia Velocity Club",
    sourceContact: "contato@velocityclub.com.br",
    channel: "whatsapp",
    subject: "Aumento de fluxo de alunos credenciados Netfits na unidade Jardins",
    intent: "elogio",
    content: "Registramos um aumento de 34% no fluxo de novos alunos esta semana apresentando o QR Code da Netfits. Queremos ampliar para as unidades Moema e Barra da Tijuca.",
    sentiment: "positivo",
    businessInsight: "Alta eficiência da rede credenciada parceira B2B; oportunidade imediata de expansão de unidades físicas.",
    status: "incorporado_ao_roadmap",
    tags: ["Parceiros", "Academias", "Expansão B2B", "Credenciamento"],
  },
  {
    id: "int-003",
    timestamp: "2026-08-27T10:20:00Z",
    sourceRole: "associado",
    sourceName: "Dra. Isabella Silva",
    sourceContact: "dr.isabella@netfits.com.br",
    channel: "form",
    subject: "Solicitação de material impresso com QR Code para consultório",
    intent: "sugestao",
    content: "Meus pacientes de nutrologia adoraram o aplicativo, mas pediram um totem de balcão com QR Code físico para baixarem o app com meu cupom de indicação durante a consulta.",
    sentiment: "positivo",
    businessInsight: "Kit físico de Onboarding (Totens & QR Codes) para consultórios de médicos e nutricionistas Associados VIP acelera conversão presencial.",
    status: "incorporado_ao_roadmap",
    tags: ["Associados VIP", "Kit Presencial", "Growth Orgânico", "CAC Zero"],
  },
  {
    id: "int-004",
    timestamp: "2026-08-27T09:15:00Z",
    sourceRole: "colaborador",
    sourceName: "Lucas Mendes (Suporte Operacional)",
    sourceContact: "suporte.lucas@netfits.com.br",
    channel: "email",
    subject: "Relatório de atrito no resgate de suplementos com nfs + Pix",
    intent: "reclamacao",
    content: "Notei que 12% das chamadas de suporte são de usuários que tentam combinar pontos nfs com Pix e não encontram o botão claro no carrinho mobile.",
    sentiment: "critico",
    businessInsight: "Necessidade de destacar visualmente o badge 'Pagamento Híbrido (nfs + Pix)' no resumo do checkout no Shop.",
    status: "processado",
    tags: ["Checkout", "UX", "Suporte Interno", "Conversão Shop"],
  },
  {
    id: "int-005",
    timestamp: "2026-08-26T18:30:00Z",
    sourceRole: "atleta",
    sourceName: "Marina Run",
    sourceContact: "marina@netfits.com.br",
    channel: "survey",
    subject: "Pesquisa NPS Trimestral — Nota 10",
    intent: "pesquisa_nps",
    content: "Nota: 10/10. O Netfits é o único app que me paga por correr e me motivou a treinar 5 dias por semana. Adorei os cupons de desconto no tênis Nike!",
    sentiment: "positivo",
    businessInsight: "Forte alinhamento da proposta de valor 'Treine e Ganhe' como impulsionadora de mudança comportamental em atletas amadores.",
    status: "processado",
    tags: ["NPS 10", "Feedback Atleta", "Motivação", "Shop Nike"],
  },
  {
    id: "int-006",
    timestamp: "2026-08-26T16:10:00Z",
    sourceRole: "parceiro",
    sourceName: "Bio Ritmo / Smart Fit Partner Group",
    sourceContact: "parcerias@bioritmo.com.br",
    channel: "email",
    subject: "Proposta de integração API de catracas eletrônicas",
    intent: "negociacao",
    content: "Queremos validar se o webhook do Netfits pode disparar nfs no momento em que o aluno passa a catraca com RFID na academia.",
    sentiment: "positivo",
    businessInsight: "Automação de check-in em academias via API de catracas nativas eleva a retenção diária e reduz fraude.",
    status: "em_analise",
    tags: ["Integração B2B", "Catracas", "Checkin", "Anti-Fraude"],
  },
  {
    id: "int-007",
    timestamp: "2026-08-26T14:00:00Z",
    sourceRole: "associado",
    sourceName: "Dr. Marcelo Prado",
    sourceContact: "dr.marcelo@netfits.com.br",
    channel: "whatsapp",
    subject: "Sugestão de aba exclusiva para artigos científicos de longevidade",
    intent: "sugestao",
    content: "Gostaria de publicar artigos semanais sobre hipertrofia e longevidade no feed da Netfits com link direto para agendamento de consultas.",
    sentiment: "positivo",
    businessInsight: "Conteúdo técnico assinado por médicos Associados aumenta a autoridade científica da marca Netfits e gera leads qualificados.",
    status: "incorporado_ao_roadmap",
    tags: ["Feed de Conteúdo", "Artigos Médicos", "Autoridade", "Leads"],
  },
  {
    id: "int-008",
    timestamp: "2026-08-26T11:20:00Z",
    sourceRole: "colaborador",
    sourceName: "Camila Rocha (Engenharia de Dados)",
    sourceContact: "dados.camila@netfits.com.br",
    channel: "email",
    subject: "Análise de latência do motor de busca do Marketplace",
    intent: "sugestao",
    content: "Recomendo aplicar indexação de busca por sinônimos (ex: 'creatina', 'whey', 'tênis de corrida') para reduzir a taxa de busca sem resultado no Shop.",
    sentiment: "neutro",
    businessInsight: "Otimização de busca interna no Shop eleva o GMV em aproximadamente 8% com menor taxa de abandono.",
    status: "processado",
    tags: ["Infraestrutura", "Engenharia", "Search UX", "GMV"],
  },
];

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
          for (const su of serverUsers) {
            if (!su || !su.id) continue;
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
                  (merged as any)[key] = val;
                }
              }
              this.state.users[idx] = merged;
            } else {
              this.state.users.push(su);
              hasNew = true;
            }
          }
          if (hasNew) {
            this.saveToStorageLocally();
          }
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
        activeUserId: "usr_andre",
      };
    }

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const stored: SandboxSchema = JSON.parse(raw);
        const mergedUsers = [...stored.users];
        let hasNewUsers = false;
        for (const initUser of INITIAL_USERS) {
          if (!mergedUsers.some((u) => u.id === initUser.id || (u.identifier && u.identifier.toLowerCase() === initUser.identifier.toLowerCase()) || (u.email && initUser.email && u.email.toLowerCase() === initUser.email.toLowerCase()))) {
            mergedUsers.push(initUser);
            hasNewUsers = true;
          }
        }
        stored.users = mergedUsers.map((u) => {
          try {
            const bRaw = localStorage.getItem(`netfits_profile_saved_${u.id}`);
            if (bRaw) {
              const backup = JSON.parse(bRaw);
              return { ...u, ...backup };
            }
          } catch {}
          return u;
        });
        if (!stored.interactions || stored.interactions.length === 0) {
          stored.interactions = INITIAL_INTERACTIONS;
          hasNewUsers = true;
        }
        if (hasNewUsers) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
        }
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
        const active = this.getActiveUser();
        if (active && active.id) {
          localStorage.setItem(`netfits_profile_saved_${active.id}`, JSON.stringify(active));
        }
      } catch (err) {
        console.warn("[saveToStorage] Quota warning:", err);
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

    // Reconhecimento do André Gallo completando/atualizando seus dados cadastrais
    const isAndre =
      cleanEmail === "aacgallo@hotmail.com" ||
      cleanEmail === "aacgallo@hotmail.com.br" ||
      cleanEmail === "andre.gallo@netfits.com.br";

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
      activeUserId: "usr_andre",
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
