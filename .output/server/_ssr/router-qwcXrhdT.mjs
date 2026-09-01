import { B as BroadcastChannel } from "../_libs/unenv.mjs";
import { c as createRouter$1, a as createRootRouteWithContext, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, u as useLocation, d as useRouterState, e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { H as House, S as ShoppingBag, A as Activity, a as Award, W as Wallet, F as FlaskConical, R as RotateCcw, C as ChevronDown, b as Copy, U as User, E as ExternalLink, X, c as ArrowRight, d as Sparkles, e as Send, f as Heart, g as Share2, Z as Zap, M as MessageSquare, h as Check } from "../_libs/lucide-react.mjs";





import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";

import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-74B6U6Uz.css";
const netfitsDarkLogo = "/assets/netfits-logo-dark-D0RtFoJs.png";
const STORAGE_KEY$1 = "netfits_shared_sandbox_db_v2";
const DEVICE_SESSION_KEY = "netfits_device_active_user_id_v2";
const SYNC_CHANNEL = "netfits_sandbox_sync_channel";
const INITIAL_USERS = [
  // 1. ADMINS
  {
    id: "user-admin",
    identifier: "admin@netfits.com.br",
    email: "admin@netfits.com.br",
    phone: "(11) 98000-1000",
    cpf: "000.111.222-33",
    birthDate: "1988-03-12",
    fullName: "Administrador Netfits Master",
    type: "admin",
    nfsBalance: 25e3,
    referralCode: "ADMIN-NETFITS",
    registeredAt: "2026-08-01T10:00:00Z"
  },
  {
    id: "user-admin-2",
    identifier: "diretoria@netfits.com.br",
    email: "diretoria@netfits.com.br",
    phone: "(11) 98000-2000",
    cpf: "000.222.333-44",
    birthDate: "1985-07-20",
    fullName: "Diretoria Executiva Netfits",
    type: "admin",
    nfsBalance: 2e4,
    referralCode: "DIRETORIA-NFS",
    registeredAt: "2026-08-01T10:30:00Z"
  },
  // 2. ASSOCIADOS & ESPECIALISTAS CREDENCIADOS
  {
    id: "user-assoc-1",
    identifier: "dr.isabella@netfits.com.br",
    email: "dr.isabella@netfits.com.br",
    phone: "(11) 97777-6666",
    cpf: "456.789.123-44",
    birthDate: "1990-04-15",
    fullName: "Dra. Isabella Silva",
    type: "associado",
    nfsBalance: 4200,
    referralCode: "ASSOC-SP-001",
    professionalRegister: "CRM/SP 184.920",
    specialty: "Nutrologia Esportiva & Longevidade",
    city: "São Paulo - SP",
    registeredAt: "2026-08-05T11:00:00Z"
  },
  {
    id: "user-assoc-2",
    identifier: "dr.marcelo@netfits.com.br",
    email: "dr.marcelo@netfits.com.br",
    phone: "(11) 97777-5555",
    cpf: "567.890.123-55",
    birthDate: "1986-09-18",
    fullName: "Dr. Marcelo Prado",
    type: "associado",
    nfsBalance: 3100,
    referralCode: "ASSOC-SP-002",
    professionalRegister: "CRM/SP 210.450",
    specialty: "Medicina do Esporte & Ortopedia",
    city: "São Paulo - SP",
    registeredAt: "2026-08-06T09:00:00Z"
  },
  {
    id: "user-assoc-3",
    identifier: "camila.nutri@netfits.com.br",
    email: "camila.nutri@netfits.com.br",
    phone: "(21) 98888-4444",
    cpf: "678.901.234-66",
    birthDate: "1992-11-25",
    fullName: "Dra. Camila Nutrição",
    type: "associado",
    nfsBalance: 1800,
    referralCode: "ASSOC-RJ-003",
    professionalRegister: "CRN-3 48.910",
    specialty: "Nutrição Esportiva & Performance",
    city: "Rio de Janeiro - RJ",
    registeredAt: "2026-08-08T08:30:00Z"
  },
  {
    id: "user-assoc-4",
    identifier: "rafa.crossfit@netfits.com.br",
    email: "rafa.crossfit@netfits.com.br",
    phone: "(11) 99111-2233",
    cpf: "789.012.345-77",
    birthDate: "1989-02-14",
    fullName: "Rafael Souza (Head Coach)",
    type: "associado",
    nfsBalance: 2750,
    referralCode: "RAFA-CROSS",
    professionalRegister: "CREF 089.412-G/SP",
    specialty: "Head Coach & Fisiologia do Exercício",
    city: "São Paulo - SP",
    registeredAt: "2026-08-10T14:15:00Z"
  },
  {
    id: "user-assoc-5",
    identifier: "juliana.coach@netfits.com.br",
    email: "juliana.coach@netfits.com.br",
    phone: "(11) 99222-3344",
    cpf: "890.123.456-88",
    birthDate: "1993-08-30",
    fullName: "Juliana Personal Trainer",
    type: "associado",
    nfsBalance: 1950,
    referralCode: "ASSOC-SP-005",
    professionalRegister: "CREF 104.552-G/SP",
    specialty: "Treinamento Funcional & Corrida Feminina",
    city: "São Paulo - SP",
    registeredAt: "2026-08-12T10:00:00Z"
  },
  {
    id: "user-assoc-6",
    identifier: "dr.roberto@netfits.com.br",
    email: "dr.roberto@netfits.com.br",
    phone: "(11) 99333-4455",
    cpf: "901.234.567-99",
    birthDate: "1983-12-05",
    fullName: "Dr. Roberto Cardiologia",
    type: "associado",
    nfsBalance: 3800,
    referralCode: "ASSOC-SP-006",
    professionalRegister: "CRM/SP 177.300",
    specialty: "Cardiologia do Esporte & Testes Ergométricos",
    city: "São Paulo - SP",
    registeredAt: "2026-08-14T16:20:00Z"
  },
  {
    id: "user-assoc-7",
    identifier: "mariana.nutri@netfits.com.br",
    email: "mariana.nutri@netfits.com.br",
    phone: "(11) 99444-5566",
    cpf: "012.345.678-10",
    birthDate: "1994-06-22",
    fullName: "Nutricionista Mariana Costa",
    type: "associado",
    nfsBalance: 2100,
    referralCode: "ASSOC-SP-007",
    professionalRegister: "CRN-3 52.180",
    specialty: "Nutrição Clínica & Fitoterapia",
    city: "São Paulo - SP",
    registeredAt: "2026-08-16T11:45:00Z"
  },
  // 3. ATLETAS & USUÁRIOS
  {
    id: "user-athlete-1",
    identifier: "gallo@netfits.com.br",
    email: "gallo@netfits.com.br",
    phone: "(11) 98765-4321",
    cpf: "987.654.321-11",
    birthDate: "1980-05-15",
    fullName: "André Gallo",
    type: "athlete",
    nfsBalance: 350,
    referralCode: "GALLO-NETFITS",
    registeredAt: "2026-08-01T12:00:00Z"
  },
  {
    id: "user-athlete-2",
    identifier: "marina@netfits.com.br",
    email: "marina@netfits.com.br",
    phone: "(11) 98111-2222",
    cpf: "234.567.890-12",
    birthDate: "1996-03-28",
    fullName: "Marina Duarte (Marina Run)",
    type: "athlete",
    nfsBalance: 120,
    referralCode: "MARINA-RUN",
    referredBy: "GALLO-NETFITS",
    registeredAt: "2026-08-02T14:30:00Z"
  },
  {
    id: "user-athlete-3",
    identifier: "lucas.triathlon@netfits.com.br",
    email: "lucas.triathlon@netfits.com.br",
    phone: "(11) 98222-3333",
    cpf: "345.678.901-23",
    birthDate: "1991-10-12",
    fullName: "Lucas Mendes (Lucas Triathlon)",
    type: "athlete",
    nfsBalance: 1250,
    referralCode: "LUCAS-TRI",
    referredBy: "GALLO-NETFITS",
    registeredAt: "2026-08-03T10:15:00Z"
  },
  {
    id: "user-athlete-4",
    identifier: "carla.bike@netfits.com.br",
    email: "carla.bike@netfits.com.br",
    phone: "(11) 98333-4444",
    cpf: "456.789.012-34",
    birthDate: "1995-01-08",
    fullName: "Carla Ciclismo",
    type: "athlete",
    nfsBalance: 890,
    referralCode: "CARLA-BIKE",
    referredBy: "ASSOC-SP-001",
    registeredAt: "2026-08-04T14:00:00Z"
  },
  {
    id: "user-athlete-5",
    identifier: "thiago.trail@netfits.com.br",
    email: "thiago.trail@netfits.com.br",
    phone: "(11) 98444-5555",
    cpf: "567.890.123-45",
    birthDate: "1988-12-19",
    fullName: "Thiago Trail Run",
    type: "athlete",
    nfsBalance: 450,
    referralCode: "THIAGO-TRAIL",
    referredBy: "GALLO-NETFITS",
    registeredAt: "2026-08-05T11:45:00Z"
  },
  {
    id: "user-athlete-6",
    identifier: "atleta@netfits.com.br",
    email: "atleta@netfits.com.br",
    phone: "(11) 99999-8888",
    cpf: "123.456.789-00",
    birthDate: "1992-07-04",
    fullName: "Kite Larsen",
    type: "athlete",
    nfsBalance: 780,
    referralCode: "KITE-TRAIL",
    referredBy: "ASSOC-SP-002",
    registeredAt: "2026-08-06T15:30:00Z"
  },
  {
    id: "user-athlete-7",
    identifier: "bruno.tavares@netfits.com.br",
    email: "bruno.tavares@netfits.com.br",
    phone: "(11) 98555-6666",
    cpf: "678.901.234-56",
    birthDate: "1997-09-14",
    fullName: "Bruno Tavares",
    type: "athlete",
    nfsBalance: 210,
    referralCode: "BRUNO-RUN",
    referredBy: "GALLO-NETFITS",
    registeredAt: "2026-08-07T09:10:00Z"
  },
  {
    id: "user-athlete-8",
    identifier: "felipe.swimmer@netfits.com.br",
    email: "felipe.swimmer@netfits.com.br",
    phone: "(11) 98666-7777",
    cpf: "789.012.345-67",
    birthDate: "1990-02-27",
    fullName: "Felipe Natação",
    type: "athlete",
    nfsBalance: 620,
    referralCode: "FELIPE-SWIM",
    referredBy: "LUCAS-TRI",
    registeredAt: "2026-08-09T17:00:00Z"
  },
  {
    id: "user-athlete-9",
    identifier: "beatriz.yoga@netfits.com.br",
    email: "beatriz.yoga@netfits.com.br",
    phone: "(11) 98777-8888",
    cpf: "890.123.456-78",
    birthDate: "1998-05-31",
    fullName: "Beatriz Yoga & Wellness",
    type: "athlete",
    nfsBalance: 530,
    referralCode: "BEA-YOGA",
    referredBy: "ASSOC-SP-001",
    registeredAt: "2026-08-11T13:20:00Z"
  },
  {
    id: "user-athlete-10",
    identifier: "rodrigo.iron@netfits.com.br",
    email: "rodrigo.iron@netfits.com.br",
    phone: "(11) 98888-9999",
    cpf: "901.234.567-89",
    birthDate: "1984-11-03",
    fullName: "Rodrigo IronMan",
    type: "athlete",
    nfsBalance: 1650,
    referralCode: "RODRIGO-IRON",
    referredBy: "GALLO-NETFITS",
    registeredAt: "2026-08-13T08:00:00Z"
  },
  {
    id: "user-athlete-11",
    identifier: "fernanda.cross@netfits.com.br",
    email: "fernanda.cross@netfits.com.br",
    phone: "(11) 98999-0000",
    cpf: "012.345.678-90",
    birthDate: "1995-04-18",
    fullName: "Fernanda Treino Funcional",
    type: "athlete",
    nfsBalance: 490,
    referralCode: "FER-CROSS",
    referredBy: "RAFA-CROSS",
    registeredAt: "2026-08-15T18:40:00Z"
  },
  // 4. PARCEIROS COMERCIAIS & GESTORES DE REDES
  {
    id: "user-partner-1",
    identifier: "parceiro.smartfit@netfits.com.br",
    email: "parceiro.smartfit@netfits.com.br",
    phone: "(11) 98888-1000",
    cpf: "111.222.333-44",
    birthDate: "1985-01-01",
    fullName: "Gestão Smart Fit Paulista",
    type: "partner",
    nfsBalance: 15e3,
    referralCode: "PARTNER-SMART",
    registeredAt: "2026-08-01T09:00:00Z"
  },
  {
    id: "user-partner-2",
    identifier: "contato@fibios.com.br",
    email: "contato@fibios.com.br",
    phone: "(11) 97777-2200",
    cpf: "222.333.444-55",
    birthDate: "1982-06-15",
    fullName: "Clínica Fibios Medicina Esportiva",
    type: "partner",
    nfsBalance: 12500,
    referralCode: "PARTNER-FIBIOS",
    registeredAt: "2026-08-01T09:30:00Z"
  },
  {
    id: "user-partner-3",
    identifier: "parceiro.bioritmo@netfits.com.br",
    email: "parceiro.bioritmo@netfits.com.br",
    phone: "(11) 97666-3300",
    cpf: "333.444.555-66",
    birthDate: "1987-10-10",
    fullName: "Bio Ritmo Jardins",
    type: "partner",
    nfsBalance: 14e3,
    referralCode: "PARTNER-BIORITMO",
    registeredAt: "2026-08-02T10:00:00Z"
  },
  {
    id: "user-partner-4",
    identifier: "parceiro.bodytech@netfits.com.br",
    email: "parceiro.bodytech@netfits.com.br",
    phone: "(11) 97555-4400",
    cpf: "444.555.666-77",
    birthDate: "1984-04-20",
    fullName: "Bodytech Iguatemi",
    type: "partner",
    nfsBalance: 11e3,
    referralCode: "PARTNER-BODYTECH",
    registeredAt: "2026-08-03T11:00:00Z"
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
const INITIAL_INTERACTIONS = [
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
    tags: ["Wearables", "Garmin", "Automação", "UX"]
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
    tags: ["Parceiros", "Academias", "Expansão B2B", "Credenciamento"]
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
    tags: ["Associados VIP", "Kit Presencial", "Growth Orgânico", "CAC Zero"]
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
    tags: ["Checkout", "UX", "Suporte Interno", "Conversão Shop"]
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
    tags: ["NPS 10", "Feedback Atleta", "Motivação", "Shop Nike"]
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
    tags: ["Integração B2B", "Catracas", "Checkin", "Anti-Fraude"]
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
    tags: ["Feed de Conteúdo", "Artigos Médicos", "Autoridade", "Leads"]
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
    tags: ["Infraestrutura", "Engenharia", "Search UX", "GMV"]
  }
];
class HomologationSandboxStore {
  state;
  listeners = /* @__PURE__ */ new Set();
  broadcastChannel = null;
  isSyncingCloud = false;
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
        if (e.key === STORAGE_KEY$1) {
          const fresh = this.loadFromStorage();
          this.state.users = fresh.users;
          this.state.transactions = fresh.transactions;
          this.state.partners = fresh.partners;
          this.state.tickets = fresh.tickets;
          this.state.orders = fresh.orders;
          this.notify();
        }
      });
      setTimeout(() => {
        this.syncToCloud();
        this.syncFromCloud();
      }, 500);
      setInterval(() => {
        this.syncFromCloud();
      }, 6e3);
      window.addEventListener("focus", () => {
        this.syncFromCloud();
      });
    }
  }
  async syncFromCloud() {
    if (typeof window === "undefined" || this.isSyncingCloud) return this.state.users;
    this.isSyncingCloud = true;
    try {
      const fresh = this.loadFromStorage();
      if (fresh && Array.isArray(fresh.users)) {
        this.state.users = fresh.users;
        this.state.transactions = fresh.transactions;
        this.state.partners = fresh.partners;
        this.state.tickets = fresh.tickets;
        this.state.orders = fresh.orders;
      }
      const res = await fetch("/api/users-sync", { cache: "no-store" });
      if (res.ok) {
        const json = await res.json();
        const serverUsers = json?.users || [];
        if (Array.isArray(serverUsers) && serverUsers.length > 0) {
          let hasNew = false;
          for (const su of serverUsers) {
            if (!su || !su.id) continue;
            const idx = this.state.users.findIndex(
              (u) => u.id === su.id || u.email && su.email && u.email.trim().toLowerCase() === su.email.trim().toLowerCase() || u.identifier && su.identifier && u.identifier.trim().toLowerCase() === su.identifier.trim().toLowerCase()
            );
            if (idx >= 0) {
              this.state.users[idx] = { ...this.state.users[idx], ...su };
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
  async syncToCloud() {
    if (typeof window === "undefined") return;
    try {
      this.saveToStorageLocally();
      this.broadcastChannel?.postMessage("sync");
      await fetch("/api/users-sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ users: this.state.users })
      });
    } catch (err) {
      console.warn("[CloudSync Push Warning]", err);
    }
  }
  deleteUser(userId) {
    const idx = this.state.users.findIndex((u) => u.id === userId);
    if (idx >= 0) {
      const removed = this.state.users.splice(idx, 1)[0];
      if (this.state.activeUserId === userId) {
        this.state.activeUserId = this.state.users[0]?.id || "user-athlete-1";
      }
      this.saveToStorage();
      toast.success(`Usuário "${removed.fullName}" excluído com sucesso!`);
      return true;
    }
    return false;
  }
  adjustUserBalance(userId, newBalance) {
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
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
      this.saveToStorage();
      toast.success(`Saldo de ${user.fullName} ajustado para ${user.nfsBalance} nfs!`);
      return true;
    }
    return false;
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
      const raw = localStorage.getItem(STORAGE_KEY$1);
      if (raw) {
        const stored = JSON.parse(raw);
        const mergedUsers = [...stored.users];
        let hasNewUsers = false;
        for (const initUser of INITIAL_USERS) {
          if (!mergedUsers.some((u) => u.id === initUser.id || u.identifier && u.identifier.toLowerCase() === initUser.identifier.toLowerCase() || u.email && initUser.email && u.email.toLowerCase() === initUser.email.toLowerCase())) {
            mergedUsers.push(initUser);
            hasNewUsers = true;
          }
        }
        stored.users = mergedUsers;
        if (!stored.interactions || stored.interactions.length === 0) {
          stored.interactions = INITIAL_INTERACTIONS;
          hasNewUsers = true;
        }
        if (hasNewUsers) {
          localStorage.setItem(STORAGE_KEY$1, JSON.stringify(stored));
        }
        return stored;
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
      interactions: INITIAL_INTERACTIONS,
      activeUserId: "user-athlete-1"
    };
    localStorage.setItem(STORAGE_KEY$1, JSON.stringify(defaultState));
    return defaultState;
  }
  saveToStorageLocally() {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY$1, JSON.stringify(this.state));
    }
  }
  saveToStorage() {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY$1, JSON.stringify(this.state));
      this.broadcastChannel?.postMessage("sync");
      this.notify();
      this.syncToCloud();
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
  getInteractions() {
    if (!this.state.interactions || this.state.interactions.length === 0) {
      this.state.interactions = INITIAL_INTERACTIONS;
    }
    return this.state.interactions;
  }
  addInteraction(data) {
    if (!this.state.interactions) {
      this.state.interactions = [...INITIAL_INTERACTIONS];
    }
    const newInt = {
      ...data,
      id: `int-${Date.now()}-${Math.floor(Math.random() * 1e3)}`,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.state.interactions.unshift(newInt);
    this.saveToStorage();
    return newInt;
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
  // 3. Cadastro de Novo Atleta (Campos Separados Obrigatórios: E-mail, Celular, CPF, Data de Nascimento)
  registerAthlete(data) {
    const cleanEmail = data.email.trim().toLowerCase();
    const cleanPhoneDigits = data.phone.replace(/\D/g, "");
    const cleanCpfDigits = data.cpf.replace(/\D/g, "");
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
    const newRefCode = `NET-${Math.floor(1e3 + Math.random() * 9e3)}`;
    let referrer;
    if (data.referralCode) {
      const codeClean = data.referralCode.trim().toUpperCase();
      referrer = this.state.users.find((u) => u.referralCode.toUpperCase() === codeClean);
    }
    const initialNfs = referrer ? 50 : 0;
    const newUser = {
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
    this.saveToStorage();
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
        localStorage.removeItem(STORAGE_KEY$1);
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
        localStorage.setItem(STORAGE_KEY$1, JSON.stringify(this.state));
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
const sharedSandboxStore$1 = new HomologationSandboxStore();
let state = { level: "atleta" };
const listeners$2 = /* @__PURE__ */ new Set();
const emit$2 = () => listeners$2.forEach((l) => l());
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
    emit$2();
  }
};
function formatNfs(n) {
  return n.toLocaleString("pt-BR");
}
const wallet = {
  getBalance: () => {
    return sharedSandboxStore$1.getActiveUser().nfsBalance;
  },
  getTransactions: () => {
    const active = sharedSandboxStore$1.getActiveUser();
    const sandboxTxs = sharedSandboxStore$1.getUserTransactions(active.id);
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
    const active = sharedSandboxStore$1.getActiveUser();
    if (active.nfsBalance < amount) return;
    active.nfsBalance -= amount;
    sharedSandboxStore$1.addTransaction({
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
    const active = sharedSandboxStore$1.getActiveUser();
    const multiplier = levelStore.getMultiplier();
    const credited = Math.round(amount * multiplier);
    active.nfsBalance += credited;
    sharedSandboxStore$1.addTransaction({
      userId: active.id,
      userName: active.fullName,
      amount: credited,
      description: title,
      category: "workout"
    });
  }
};
function subscribe$2(fn) {
  return sharedSandboxStore$1.subscribe(fn);
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
function getSnapshot$2() {
  if (typeof window === "undefined") {
    return SERVER_SNAPSHOT;
  }
  const activeUser2 = sharedSandboxStore$1.getActiveUser();
  const sandboxTxs = sharedSandboxStore$1.getUserTransactions(activeUser2.id);
  const topTxId = sandboxTxs.length > 0 ? sandboxTxs[0].id : "";
  if (activeUser2.id === lastActiveUserId && activeUser2.nfsBalance === lastNfsBalance && sandboxTxs.length === lastTxsCount && topTxId === lastTxId) {
    return cachedSnapshot;
  }
  lastActiveUserId = activeUser2.id;
  lastNfsBalance = activeUser2.nfsBalance;
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
    balance: activeUser2.nfsBalance,
    txs: formattedTxs
  };
  return cachedSnapshot;
}
function getServerSnapshot() {
  return SERVER_SNAPSHOT;
}
function useWallet() {
  return reactExports.useSyncExternalStore(subscribe$2, getSnapshot$2, getServerSnapshot);
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
const listeners$1 = /* @__PURE__ */ new Set();
const emit$1 = () => listeners$1.forEach((l) => l());
const subscribe$1 = (fn) => {
  listeners$1.add(fn);
  return () => listeners$1.delete(fn);
};
const getSnapshot$1 = () => badgesList;
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
    emit$1();
  }
};
function useBadges() {
  return reactExports.useSyncExternalStore(subscribe$1, getSnapshot$1, getSnapshot$1);
}
const netfitsLogo = "/assets/netfits-logo-ewIUGvXh.png";
const DEFAULT_OPERATIONAL_PARAMS = {
  nfsPerVideoPost: 15,
  nfsPerTextPost: 10,
  dailyRewardedPostLimit: 1,
  // 1 post próprio premiado por dia
  weeklyRewardedPostLimit: 7,
  nfsPerPostView: 5,
  nfsPerLike: 5,
  nfsPerSave: 10,
  nfsPerShare: 10,
  dailyThirdPartyInteractionsLimit: 10,
  dailyMaxPointsThirdPartyInteractions: 50,
  blockSelfEngagementRewards: true,
  // Auto-engajamento sempre bloqueado
  minDwellTimeSecondsForView: 3,
  requireFullVideoCompletionForReward: true,
  // Vídeos do feed precisam ser vistos 100% por completo (dwell time = 100% da duração)
  maxInteractionsPerMinute: 10,
  duplicateMediaFilterActive: true,
  nfsPerWorkout: 50,
  nfsPerLoyaltyDeclaration: 20,
  netfitsTakeRatePctFromGmv: 8,
  associadoShareOfNetfitsRevenuePct: 10,
  normalUserReferralSharePct: 10,
  normalUserNewReferralBonusNfs: 50,
  cppAcumuloBrl: 0.02,
  cppResgateBrl: 0.01,
  costPerProvisionedPointBrl: 0.01,
  netfitsClubMonthlyFeeBrl: 19.9,
  nfsEarnedPerBrlSpent: 0.5,
  nfsEarnedPerBrlSpentDouble: 1,
  shopFirstPurchaseBonusNfs: 150,
  pointsValidityMonths: 24,
  targetBreakagePct: 12,
  redemptionPolicy: "FEFO",
  redemptionPolicyName: "FEFO — First-Expiring, First-Out (Consumo Prioritário do Ponto Mais Próximo do Vencimento)",
  cloudInfraMonthlyCostBrl: 23500,
  finOpsSavingsPct: 51.4,
  finOpsAnnualGainBrl: 294e3
};
const STORAGE_KEY = "netfits_operational_params_v4";
function loadInitialParams() {
  if (typeof window === "undefined") return DEFAULT_OPERATIONAL_PARAMS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...DEFAULT_OPERATIONAL_PARAMS, ...parsed };
    }
  } catch (e) {
    console.error("Error loading operational params from localStorage:", e);
  }
  return DEFAULT_OPERATIONAL_PARAMS;
}
let currentParams = loadInitialParams();
const listeners = /* @__PURE__ */ new Set();
function emit() {
  for (const l of listeners) l();
}
function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
function getSnapshot() {
  return currentParams;
}
if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key === STORAGE_KEY && e.newValue) {
      try {
        currentParams = { ...DEFAULT_OPERATIONAL_PARAMS, ...JSON.parse(e.newValue) };
        emit();
      } catch (err) {
        console.error(err);
      }
    }
  });
}
const operationalParamsStore = {
  getParams: () => currentParams,
  updateParams: (newParams) => {
    currentParams = { ...currentParams, ...newParams };
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentParams));
      } catch (e) {
        console.error(e);
      }
    }
    emit();
  },
  resetParams: () => {
    currentParams = DEFAULT_OPERATIONAL_PARAMS;
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {
        console.error(e);
      }
    }
    emit();
  }
};
function useOperationalParams() {
  return reactExports.useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
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
  const { balance: nfsBalance } = useWallet();
  const params = useOperationalParams();
  const balanceBRL = (nfsBalance * params.cppResgateBrl).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
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
    sharedSandboxStore.addInteraction({
      sourceRole: activeUser.type === "associado" ? "associado" : activeUser.type === "partner" ? "parceiro" : "atleta",
      sourceName: activeUser.fullName,
      sourceContact: activeUser.identifier,
      channel: "chat",
      subject: `Consulta AI: ${query.slice(0, 40)}...`,
      intent: "duvida",
      content: query,
      sentiment: "neutro",
      businessInsight: `Interação via Chat AI assistente virtual. Dúvida/Intenção do usuário sobre: "${query.slice(0, 80)}".`,
      status: "processado",
      tags: ["Chat AI", "Assistente Virtual", "Tempo Real"]
    });
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
  },
  /**
   * Inicializa a escuta nativa de Universal Links / App Links para iOS e Android
   * garantindo que links clicados no WhatsApp / Safari / Chrome abram o app nativo no cadastro com a indicação preservada.
   */
  initDeepLinkListener(onReferralCaptured) {
    if (typeof window === "undefined") return;
    try {
      const params = new URLSearchParams(window.location.search);
      const codeFromUrl = params.get("ref") || params.get("code") || params.get("referral");
      if (codeFromUrl) {
        const clean = codeFromUrl.trim().toUpperCase();
        localStorage.setItem("netfits_deferred_referral_code", clean);
        sessionStorage.setItem("netfits_deferred_referral_code", clean);
        if (onReferralCaptured) onReferralCaptured(clean);
      }
    } catch {
    }
    if (this.isNativePlatform()) {
      const App = window.Capacitor?.Plugins?.App;
      if (App) {
        App.addListener("appUrlOpen", (data) => {
          try {
            const urlObj = new URL(data.url);
            const refCode = urlObj.searchParams.get("ref") || urlObj.searchParams.get("code") || urlObj.searchParams.get("referral");
            if (refCode) {
              const cleanCode = refCode.trim().toUpperCase();
              localStorage.setItem("netfits_deferred_referral_code", cleanCode);
              sessionStorage.setItem("netfits_deferred_referral_code", cleanCode);
              toast.info(`✨ Indicação "${cleanCode}" capturada do app nativo!`);
              if (onReferralCaptured) onReferralCaptured(cleanCode);
            }
          } catch (e) {
            console.warn("[DeepLink Error]", e);
          }
        });
      }
    }
  },
  /**
   * Recupera o código de indicação diferido (Deferred Referral) armazenado no dispositivo.
   */
  getStoredReferralCode() {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("netfits_deferred_referral_code") || sessionStorage.getItem("netfits_deferred_referral_code") || null;
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
  const activeUser2 = sharedSandboxStore$1.useActiveUser();
  const initials = activeUser2.fullName ? activeUser2.fullName.trim().split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase() : "NF";
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
            title: activeUser2.fullName,
            className: "size-7 rounded-full overflow-hidden bg-purple-600 text-white font-extrabold text-[10px] flex items-center justify-center ring-2 ring-purple-500/20 shadow-xs hover:scale-105 transition shrink-0",
            children: activeUser2.avatarUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: activeUser2.avatarUrl, alt: activeUser2.fullName, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: initials })
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
  const [state2, setState] = reactExports.useState(sharedSandboxStore$1.getState());
  const [userSearch, setUserSearch] = reactExports.useState("");
  const [isSyncingCloud, setIsSyncingCloud] = reactExports.useState(false);
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    sharedSandboxStore$1.syncFromCloud();
    const unsubscribe = sharedSandboxStore$1.subscribe(() => {
      setState(sharedSandboxStore$1.getState());
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const handleManualSync = async () => {
    setIsSyncingCloud(true);
    await sharedSandboxStore$1.syncFromCloud();
    setIsSyncingCloud(false);
    toast.success("🔄 Usuários cadastrados no mundo todo sincronizados!");
  };
  const activeUser2 = sharedSandboxStore$1.getActiveUser();
  const isAdmin = activeUser2.type === "admin" || activeUser2.identifier === "admin@netfits.com.br";
  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copiado! (${text})`);
  };
  const filteredUsers = state2.users.filter((u) => {
    const q = userSearch.toLowerCase().trim();
    if (!q) return true;
    return u.fullName.toLowerCase().includes(q) || u.identifier.toLowerCase().includes(q) || u.referralCode.toLowerCase().includes(q) || u.referredBy && u.referredBy.toLowerCase().includes(q);
  });
  if (!isAdmin) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-4 right-4 z-50 font-sans", children: [
      !isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setIsOpen(true),
          className: "bg-gradient-to-r from-purple-700 via-purple-600 to-lime-500 text-white font-extrabold text-xs px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2.5 border border-white/20 hover:scale-105 transition-all active:scale-95 animate-pulse",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "size-4 text-lime-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📋 Roteiro de Homologação" })
          ]
        }
      ),
      isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
        UserTestingScriptModal,
        {
          activeUser: activeUser2,
          onClose: () => setIsOpen(false),
          navigate
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-4 right-4 z-50 font-sans", children: [
    !isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setIsOpen(true),
        className: "bg-gradient-to-r from-purple-700 via-purple-600 to-lime-500 text-white font-extrabold text-xs px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2.5 border border-white/20 hover:scale-105 transition-all active:scale-95 animate-pulse",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "size-4 text-lime-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🧪 Painel de Homologação (Admin)" }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleManualSync,
              disabled: isSyncingCloud,
              className: "text-[10px] font-bold bg-lime-400 text-black px-2.5 py-1 rounded-full hover:bg-lime-300 transition active:scale-95 flex items-center gap-1 shrink-0",
              title: "Sincronizar cadastros realizados em outros dispositivos",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: `size-3 ${isSyncingCloud ? "animate-spin" : ""}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isSyncingCloud ? "Sincronizando..." : "Sincronizar Nuvem" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setIsOpen(false),
              className: "size-7 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 grid place-items-center transition",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-zinc-900/80 border-b border-zinc-800 flex items-center justify-between text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-lime-400 animate-ping shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400 font-medium leading-none", children: "Sessão Ativa:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-white truncate text-[11px] mt-0.5", children: [
              activeUser2.fullName,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lime-400 font-extrabold", children: [
                "(",
                activeUser2.type.toUpperCase(),
                ")"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-950 border border-purple-500/40 text-purple-300 font-mono font-bold text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          activeUser2.nfsBalance,
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
            const isCurrentSession = u.id === activeUser2.id;
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
                      onClick: () => sharedSandboxStore$1.setActiveUser(u.id),
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
            const isCurrent = u.id === activeUser2.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => sharedSandboxStore$1.setActiveUser(u.id),
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
                    sharedSandboxStore$1.resetToDefaults();
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
function UserTestingScriptModal({
  activeUser: activeUser2,
  onClose,
  navigate
}) {
  const [completedSteps, setCompletedSteps] = reactExports.useState(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("netfits_homologation_checklist");
        if (saved) return JSON.parse(saved);
      } catch {
      }
    }
    return ["step-1"];
  });
  const toggleStep = (id) => {
    setCompletedSteps((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      if (typeof window !== "undefined") {
        localStorage.setItem("netfits_homologation_checklist", JSON.stringify(next));
      }
      return next;
    });
  };
  const steps = [
    {
      id: "step-1",
      title: "1. Conhecer o Feed Esportivo Social",
      desc: "Navegue pelas publicações da comunidade, curta treinos e comente nos posts dos atletas.",
      path: "/",
      btnLabel: "Ir para o Feed",
      icon: Heart
    },
    {
      id: "step-2",
      title: "2. Explorar o Shop Netfits",
      desc: "Veja os suplementos e equipamentos com descontos exclusivos em nfs e simule uma compra.",
      path: "/market",
      btnLabel: "Ir para o Shop",
      icon: ShoppingBag
    },
    {
      id: "step-3",
      title: "3. Testar o Indique e Ganhe (MGM)",
      desc: "Acesse seu perfil, copie seu Link Direto de Cadastro e envie para um amigo via WhatsApp.",
      path: "/profile",
      btnLabel: "Ver meu Link de Indicação",
      icon: Share2
    },
    {
      id: "step-4",
      title: "4. Consultar a Carteira nfs",
      desc: "Verifique seu saldo de pontos nfs, extrato detalhado e bônus acumulados de treino.",
      path: "/wallet",
      btnLabel: "Abrir Carteira",
      icon: Zap
    },
    {
      id: "step-5",
      title: "5. Acompanhar Atividades & Treinos",
      desc: "Confira seu painel de corrida, ciclismo e monitoramento de metas esportivas.",
      path: "/activities",
      btnLabel: "Ver Atividades",
      icon: Sparkles
    },
    {
      id: "step-6",
      title: "6. Atendimento & IA Netfits",
      desc: "Tire dúvidas sobre seus pontos com o assistente inteligente Netfits AI ou envie um ticket de suporte.",
      path: "/contato",
      btnLabel: "Testar Atendimento",
      icon: MessageSquare
    }
  ];
  const progressPct = Math.round(completedSteps.length / steps.length * 100);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-[400px] max-w-[calc(100vw-32px)] bg-zinc-950 text-white border border-purple-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[88vh] animate-in slide-in-from-bottom-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-900 via-purple-950 to-zinc-950 p-4 border-b border-purple-500/20 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-xl bg-purple-600/30 text-lime-400 grid place-items-center border border-purple-400/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "size-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-black uppercase tracking-wider text-white flex items-center gap-1.5", children: "Roteiro de Homologação" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400", children: "Guia de Testes para Validar a Experiência Netfits" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onClose,
          className: "size-7 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 grid place-items-center transition",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 bg-zinc-900/90 border-b border-zinc-800 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold text-zinc-200", children: [
          "Olá, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-lime-400", children: activeUser2.fullName.split(" ")[0] }),
          "! 👋"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-extrabold text-lime-400 bg-lime-950/60 px-2 py-0.5 rounded-full border border-lime-500/30", children: [
          completedSteps.length,
          " de ",
          steps.length,
          " concluídos (",
          progressPct,
          "%)"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-full bg-gradient-to-r from-purple-500 to-lime-400 transition-all duration-300 rounded-full",
          style: { width: `${progressPct}%` }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3.5 space-y-3 overflow-y-auto max-h-[60vh]", children: steps.map((step) => {
      const isDone = completedSteps.includes(step.id);
      const Icon = step.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `p-3 rounded-2xl border transition-all ${isDone ? "bg-purple-950/15 border-purple-500/30" : "bg-zinc-900/60 border-zinc-800 hover:border-zinc-700"}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => toggleStep(step.id),
                className: `size-5 rounded-lg border grid place-items-center mt-0.5 shrink-0 transition active:scale-95 ${isDone ? "bg-lime-400 border-lime-400 text-black font-black" : "border-zinc-600 hover:border-lime-400 text-transparent"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5 stroke-[3]" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `text-xs font-bold ${isDone ? "line-through text-zinc-400" : "text-white"}`, children: step.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-3.5 text-purple-400 shrink-0" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-400 leading-snug", children: step.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-1 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      navigate({ to: step.path });
                      onClose();
                    },
                    className: "text-[10px] font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1 group",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: step.btnLabel }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-3 group-hover:translate-x-0.5 transition-transform" })
                    ]
                  }
                ),
                isDone && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-extrabold text-lime-400 uppercase tracking-wider", children: "Concluído ✓" })
              ] })
            ] })
          ] })
        },
        step.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            sharedSandboxStore$1.setActiveUser("user-admin");
            toast.success("Sessão alterada para Administrador! O painel completo de testes foi liberado.");
          },
          className: "text-[10px] font-bold text-lime-400 hover:text-lime-300 flex items-center gap-1 cursor-pointer",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "👑 Assumir Perfil Admin" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/admin",
          onClick: onClose,
          className: "text-[10px] font-bold text-zinc-400 hover:text-white cursor-pointer",
          children: "Base de Usuários (/admin) →"
        }
      )
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
const $$splitComponentImporter$d = () => import("./index-DrrlL8jn.mjs");
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
const $$splitComponentImporter$b = () => import("./admin-jvrIbowt.mjs");
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
const ALL_KR_MAP = {
  "KR 1.1": {
    code: "KR 1.1",
    title: "Base Total de Atletas",
    okrTitle: "OKR 1: Tração, Aquisição & Engajamento de Atletas",
    target: "1.000.000",
    currentValue: "1.245.000",
    unit: "atletas",
    targetNum: 1e6,
    currentNum: 1245e3,
    badge: "Superado 🚀"
  },
  "KR 1.2": {
    code: "KR 1.2",
    title: "Engajamento Ativo MAU",
    okrTitle: "OKR 1: Tração, Aquisição & Engajamento de Atletas",
    target: ">50.0%",
    currentValue: "50.0%",
    unit: "%",
    targetNum: 50,
    currentNum: 50,
    badge: "No Alvo ✅"
  },
  "KR 1.3": {
    code: "KR 1.3",
    title: "Retenção de 90 Dias",
    okrTitle: "OKR 1: Tração, Aquisição & Engajamento de Atletas",
    target: ">80.0%",
    currentValue: "86.2%",
    unit: "%",
    targetNum: 80,
    currentNum: 86.2,
    badge: "Superado 🚀"
  },
  "KR 2.1": {
    code: "KR 2.1",
    title: "Captação via Associados",
    okrTitle: "OKR 2: Rede de ASSOCIADOS VIP & Eficiência de CAC",
    target: ">70.0%",
    currentValue: "78.4%",
    unit: "% da base",
    targetNum: 70,
    currentNum: 78.4,
    badge: "No Alvo ✅"
  },
  "KR 2.2": {
    code: "KR 2.2",
    title: "Rede Credenciada Master",
    okrTitle: "OKR 2: Rede de ASSOCIADOS VIP & Eficiência de CAC",
    target: "20 parceiros",
    currentValue: "18 ativos",
    unit: "parceiros",
    targetNum: 20,
    currentNum: 18,
    badge: "Em Progresso ⏳"
  },
  "KR 2.3": {
    code: "KR 2.3",
    title: "CAC Médio Orgânico",
    okrTitle: "OKR 2: Rede de ASSOCIADOS VIP & Eficiência de CAC",
    target: "< R$ 2,00",
    currentValue: "R$ 1,42",
    unit: "R$",
    targetNum: 2,
    currentNum: 1.42,
    badge: "Excelente 🚀",
    isReverse: true
  },
  "KR 3.1": {
    code: "KR 3.1",
    title: "GMV Shopping Marketplace",
    okrTitle: "OKR 3: GMV do Marketplace & Utilização de nfs",
    target: "R$ 1.500.000,00",
    currentValue: "R$ 1.849.000,00",
    unit: "R$",
    targetNum: 15e5,
    currentNum: 1849e3,
    badge: "Superado 🚀"
  },
  "KR 3.2": {
    code: "KR 3.2",
    title: "Taxa de Resgate com nfs",
    okrTitle: "OKR 3: GMV do Marketplace & Utilização de nfs",
    target: ">80.0%",
    currentValue: "88.0%",
    unit: "%",
    targetNum: 80,
    currentNum: 88,
    badge: "Superado 🚀"
  },
  "KR 3.3": {
    code: "KR 3.3",
    title: "Conversão de Cliques do Feed",
    okrTitle: "OKR 3: GMV do Marketplace & Utilização de nfs",
    target: ">3.50%",
    currentValue: "4.04%",
    unit: "%",
    targetNum: 3.5,
    currentNum: 4.04,
    badge: "Superado 🚀"
  },
  "KR 4.1": {
    code: "KR 4.1",
    title: "Economia de Custos TI (Cloud/IA)",
    okrTitle: "OKR 4: Otimização de TI & Margens EBITDA/Líquida",
    target: ">50.0%",
    currentValue: "-61.5%",
    unit: "%",
    targetNum: 50,
    currentNum: 61.5,
    badge: "No Alvo ✅",
    isReverse: true
  },
  "KR 4.2": {
    code: "KR 4.2",
    title: "Margem EBITDA Anual",
    okrTitle: "OKR 4: Otimização de TI & Margens EBITDA/Líquida",
    target: ">50.0%",
    currentValue: "54.1%",
    unit: "%",
    targetNum: 50,
    currentNum: 54.1,
    badge: "No Alvo ✅"
  },
  "KR 4.3": {
    code: "KR 4.3",
    title: "Margem Líquida DRE",
    okrTitle: "OKR 4: Otimização de TI & Margens EBITDA/Líquida",
    target: ">40.0%",
    currentValue: "45.8%",
    unit: "%",
    targetNum: 40,
    currentNum: 45.8,
    badge: "No Alvo ✅"
  },
  "KR 5.1": {
    code: "KR 5.1",
    title: "Tempo Médio de Sessão Ativa",
    okrTitle: "OKR 5: Audiência do App, Retenção & Funil de Conversão",
    target: "> 12.0 min",
    currentValue: "16,4 min",
    unit: "minutos",
    targetNum: 12,
    currentNum: 16.4,
    badge: "Superado 🚀"
  },
  "KR 5.2": {
    code: "KR 5.2",
    title: "Taxa de Bounce Back (Rejeição <15s)",
    okrTitle: "OKR 5: Audiência do App, Retenção & Funil de Conversão",
    target: "< 15.0%",
    currentValue: "9,8%",
    unit: "%",
    targetNum: 15,
    currentNum: 9.8,
    badge: "Excelente 🚀",
    isReverse: true
  },
  "KR 5.3": {
    code: "KR 5.3",
    title: "Tempo Médio Desde Último Acesso",
    okrTitle: "OKR 5: Audiência do App, Retenção & Funil de Conversão",
    target: "< 18.0h",
    currentValue: "8,4 horas",
    unit: "horas",
    targetNum: 18,
    currentNum: 8.4,
    badge: "Alta Recorrência 🚀",
    isReverse: true
  },
  "KR 5.4": {
    code: "KR 5.4",
    title: "Cliques ➔ Visualização 100% (Dwell Time)",
    okrTitle: "OKR 5: Audiência do App, Retenção & Funil de Conversão",
    target: "> 75.0%",
    currentValue: "84,2%",
    unit: "%",
    targetNum: 75,
    currentNum: 84.2,
    badge: "Superado 🚀"
  },
  "KR 5.5": {
    code: "KR 5.5",
    title: "Visualização ➔ Compra no Shop",
    okrTitle: "OKR 5: Audiência do App, Retenção & Funil de Conversão",
    target: "> 5.0%",
    currentValue: "6,18%",
    unit: "%",
    targetNum: 5,
    currentNum: 6.18,
    badge: "Superado 🚀"
  }
};
const $$splitComponentImporter$a = () => import("./associado-BSbFhryM.mjs");
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
const $$splitComponentImporter$9 = () => import("./auth-BI9OTbJN.mjs");
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
const $$splitComponentImporter$8 = () => import("./contato-Dn-x6HyZ.mjs");
const Route$8 = createFileRoute("/contato")({
  head: () => ({
    meta: [{
      title: "Contato & Suporte — Netfits Ltda."
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
const $$splitComponentImporter$7 = () => import("./download-BiWXwyeA.mjs");
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
const $$splitComponentImporter$6 = () => import("./faq-CCv834On.mjs");
const Route$6 = createFileRoute("/faq")({
  head: () => ({
    meta: [{
      title: "FAQ & Central de Ajuda — Netfits Ltda."
    }, {
      name: "description",
      content: "Tire suas dúvidas sobre pontos nfs, cashback no shop, cadastro de parceiros comerciais, programa de associados, regulamento e termo LGPD."
    }, {
      property: "og:title",
      content: "FAQ & Central de Ajuda — Netfits Ltda."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./home-srRCzkFn.mjs");
const Route$5 = createFileRoute("/home")({
  head: () => ({
    meta: [{
      title: "Netfits Ltda. — A Primeira Camada de Fidelidade para a Vida em Movimento"
    }, {
      name: "description",
      content: "Fazer cada movimento valer mais. Conheça a Netfits: feed de saúde, marketplace com cashback, ecossistema de parceiros e programa de fidelidade."
    }, {
      property: "og:title",
      content: "Netfits Ltda. — Fazer cada movimento valer mais"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./levels-CsLLACvQ.mjs");
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
const $$splitComponentImporter$3 = () => import("./market-PkRtXIYO.mjs");
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
const $$splitComponentImporter$2 = () => import("./parceiros-BNMsyytG.mjs");
const Route$2 = createFileRoute("/parceiros")({
  head: () => ({
    meta: [{
      title: "Cadastro de Parceiros Comerciais & Marketplace — Netfits"
    }, {
      name: "description",
      content: "Cadastre sua academia, assessoria esportiva, clínica de fisioterapia, consultório de nutrição ou e-commerce no ecossistema Netfits."
    }, {
      property: "og:title",
      content: "Cadastro de Parceiros Comerciais & Marketplace — Netfits"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./profile-CEGSZ8ys.mjs");
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
const $$splitComponentImporter = () => import("./wallet-Cl9dOdPa.mjs");
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
  ALL_KR_MAP as A,
  nativeBridge as a,
  netfitsDarkLogo as b,
  trackAppDownload as c,
  useBadges as d,
  badgesStore as e,
  useWallet as f,
  trackPartnerRegistration as g,
  netfitsLogo as n,
  operationalParamsStore as o,
  parseNfs as p,
  router as r,
  sharedSandboxStore$1 as s,
  trackSupportTicket as t,
  useOperationalParams as u,
  wallet as w
};
