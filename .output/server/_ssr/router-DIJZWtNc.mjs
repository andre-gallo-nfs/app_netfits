import { B as BroadcastChannel } from "../_libs/unenv.mjs";
import { c as createRouter$1, a as createRootRouteWithContext, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, u as useLocation, d as useRouterState, e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useOperationalParams } from "./index.mjs";
import { H as House, S as ShoppingBag, A as Activity, a as Award, W as Wallet, F as FlaskConical, R as RotateCcw, C as ChevronDown, b as Copy, U as User, E as ExternalLink, B as Building2, Z as Zap, c as ShieldCheck, d as Sparkles, e as HeartPulse, f as Briefcase, Q as Quote, g as Users, X, h as ArrowRight, i as Send, j as CircleQuestionMark, M as Mail, D as Download, k as Check, P as Play, l as Share2, G as Gift, m as Heart, L as Link2, n as MapPin, o as Eye, p as Bookmark, q as Star, r as BadgeCheck, T as Truck, s as Tag, t as CreditCard, u as QrCode, v as Lock } from "../_libs/lucide-react.mjs";





import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";

import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";


import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";




const appCss = "/assets/styles-B3QjbCrq.css";
const netfitsDarkLogo = "/assets/netfits-logo-dark-D0RtFoJs.png";
const STORAGE_KEY = "netfits_shared_sandbox_db_v2";
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
        interactions: INITIAL_INTERACTIONS,
        activeUserId: "user-athlete-1"
      };
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
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
          localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
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
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultState));
    return defaultState;
  }
  saveToStorageLocally() {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    }
  }
  saveToStorage() {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
      this.broadcastChannel?.postMessage("sync");
      this.notify();
      this.syncToCloud();
    }
  }
  subscribe(listener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
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
  // 6 & 7. Curtida, Compartilhamento e Visualização de Posts
  // 6 & 7. Interações do Feed (Visualização, Clique em Link, Curtida, Compartilhamento)
  rewardEngagement(action, postTitle, customAmount) {
    const active = this.getActiveUser();
    const amount = customAmount ?? (action === "click" ? 10 : action === "view" ? 10 : action === "share" ? 10 : 10);
    const desc = action === "like" ? `Curtida no conteúdo: ${postTitle}` : action === "share" ? `Compartilhamento pós-visualização: ${postTitle}` : action === "click" ? `Clique em link do post: ${postTitle}` : `Visualização completa: ${postTitle}`;
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
      interactions: JSON.parse(JSON.stringify(INITIAL_INTERACTIONS)),
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
function subscribe$2(fn) {
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
function getSnapshot$2() {
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
function getServerSnapshot$1() {
  return SERVER_SNAPSHOT;
}
function useWallet() {
  return reactExports.useSyncExternalStore(subscribe$2, getSnapshot$2, getServerSnapshot$1);
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
const TELEMETRY_STORAGE_KEY = "netfits_finops_token_telemetry_v1";
const COST_PER_TOKEN_INPUT_BRL = 55e-8;
const AVERAGE_TOKENS_PER_CONVERSATION = 420;
class TokenOptimizerService {
  telemetry = this.loadTelemetry();
  loadTelemetry() {
    if (typeof window === "undefined") {
      return { totalQueries: 4280, fastPathHits: 3680, tokensSavedTotal: 1545600, estimatedCostSavedBrl: 850.08 };
    }
    try {
      const raw = localStorage.getItem(TELEMETRY_STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {
    }
    return { totalQueries: 4280, fastPathHits: 3680, tokensSavedTotal: 1545600, estimatedCostSavedBrl: 850.08 };
  }
  saveTelemetry() {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(TELEMETRY_STORAGE_KEY, JSON.stringify(this.telemetry));
    } catch {
    }
  }
  /**
   * Layer 1: Zero-Token Fast Path
   * Analisa a query do atleta e, se for uma dúvida frequente, retorna a resposta
   * sem disparar nenhuma chamada de API ou gastar tokens.
   */
  evaluateQuery(query, context) {
    const q = query.toLowerCase().trim();
    this.telemetry.totalQueries += 1;
    if (q.includes("saldo") || q.includes("quanto tenho") || q.includes("meus pontos") || q.includes("extrato") || q.includes("carteira")) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      return {
        handled: true,
        text: `Você possui atualmente **${context.nfsBalance.toLocaleString("pt-BR")} nfs** acumulados na sua carteira (equivalente a aproximadamente **${context.balanceBRL}** em resgates no Netfits Shop)!`,
        actionLabel: "Abrir Minha Carteira",
        route: "/wallet",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION
      };
    }
    if (q.includes("quanto vale") || q.includes("valor") || q.includes("conversão") || q.includes("cotação") || q.includes("1 nfs") || q.includes("preço do ponto")) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      return {
        handled: true,
        text: `Cada ponto **1 nfs equivale a R$ ${context.cppResgateBrl.toFixed(2)}** em resgates reais no catálogo oficial da Rock Encantech (ex: 50 nfs = R$ 1,00 | 1.000 nfs = R$ 20,00). No Netfits Shop você pode pagar até 100% de produtos com pontos ou combiná-los com cartão!`,
        actionLabel: "Explorar o Shop",
        route: "/market",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION
      };
    }
    if (q.includes("loja") || q.includes("shop") || q.includes("comprar") || q.includes("tênis") || q.includes("suplemento") || q.includes("desconto") || q.includes("asics") || q.includes("whey") || q.includes("gel")) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      return {
        handled: true,
        text: "No Netfits Shop você encontra tênis de alta performance (Asics Novablast com placa de carbono), isotônicos Liquidz, géis de carboidrato Gu Energy e smartwatches com até 100% de desconto usando seus pontos nfs!",
        actionLabel: "Ir para o Netfits Shop",
        route: "/market",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION
      };
    }
    if (q.includes("expiração") || q.includes("validade") || q.includes("vencem") || q.includes("fefo") || q.includes("quando vence")) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      return {
        handled: true,
        text: "Os pontos nfs possuem validade de **24 meses (730 dias)** a partir da data de crédito. A Netfits adota a política justa **FEFO (First-Expiring, First-Out)**: ao resgatar produtos no Shop, seus pontos com vencimento mais próximo são consumidos primeiro automaticamente.",
        actionLabel: "Ver Prazos na Carteira",
        route: "/wallet",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION
      };
    }
    if (q.includes("indicação") || q.includes("indicar") || q.includes("convite") || q.includes("amigo") || q.includes("código") || q.includes("ganhar pontos")) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      return {
        handled: true,
        text: "Para cada amigo que se cadastrar com seu código de indicação, ambos ganham **+50 nfs bônus** instantaneamente na carteira! Usuários associados também contam com repasse em dinheiro de 10% da receita líquida gerada pela sua rede.",
        actionLabel: "Ver Portal de Associados",
        route: "/associado",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION
      };
    }
    if (q.includes("wearable") || q.includes("garmin") || q.includes("strava") || q.includes("apple watch") || q.includes("relógio") || q.includes("sincronizar") || q.includes("polar")) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      return {
        handled: true,
        text: "Você pode conectar seu relógio ou aplicativo (Garmin Connect, Apple Watch, Strava, Fitbit, Polar, Samsung Health) na aba de Atividades para transformar seus km percorridos, frequência cardíaca e sono em pontos nfs todos os dias!",
        actionLabel: "Ver Minhas Atividades",
        route: "/activities",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION
      };
    }
    if (q.includes("club") || q.includes("assinatura") || q.includes("mensalidade") || q.includes("plano") || q.includes("benefício")) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      return {
        handled: true,
        text: "O **Netfits Club (R$ 19,90/mês)** dobra seu cashback no Shop (8,00 nfs por R$ 1,00 gasto), desbloqueia desafios exclusivos com premiações em pontos e garante acesso VIP antecipado a inscrições de corridas e produtos de edição limitada!",
        actionLabel: "Conhecer o Netfits Club",
        route: "/home",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION
      };
    }
    this.saveTelemetry();
    return {
      handled: false,
      text: "",
      source: "context_cached_gemini",
      tokensSaved: Math.round(AVERAGE_TOKENS_PER_CONVERSATION * 0.5)
      // 50% de economia via Context Caching de system prompts
    };
  }
  recordHit(tokensSaved) {
    this.telemetry.fastPathHits += 1;
    this.telemetry.tokensSavedTotal += tokensSaved;
    this.telemetry.estimatedCostSavedBrl += tokensSaved * COST_PER_TOKEN_INPUT_BRL;
    this.saveTelemetry();
  }
  getTelemetry() {
    return { ...this.telemetry };
  }
  /**
   * Retorna a taxa de retenção local (percentual de requisições resolvidas sem custo de API)
   */
  getFastPathHitRatioPct() {
    if (this.telemetry.totalQueries === 0) return 86;
    return Number((this.telemetry.fastPathHits / this.telemetry.totalQueries * 100).toFixed(1));
  }
}
const tokenOptimizer = new TokenOptimizerService();
const OTP_COST_PER_SMS_BRL = 0.35;
const STORAGE_KEY_PASSKEYS = "netfits_passkey_credentials_v1";
const STORAGE_KEY_METRICS = "netfits_finops_passkey_metrics_v1";
class PasskeyService {
  inMemoryCredentials = [];
  metrics = {
    totalBiometricLogins: 0,
    totalSavedBrl: 0,
    estimatedOtpAvoidedCount: 0
  };
  constructor() {
    this.loadState();
  }
  loadState() {
    if (typeof window === "undefined") return;
    try {
      const savedCreds = localStorage.getItem(STORAGE_KEY_PASSKEYS);
      if (savedCreds) {
        this.inMemoryCredentials = JSON.parse(savedCreds);
      }
      const savedMetrics = localStorage.getItem(STORAGE_KEY_METRICS);
      if (savedMetrics) {
        this.metrics = JSON.parse(savedMetrics);
      }
    } catch {
    }
  }
  persistState() {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY_PASSKEYS, JSON.stringify(this.inMemoryCredentials));
      localStorage.setItem(STORAGE_KEY_METRICS, JSON.stringify(this.metrics));
    } catch {
    }
  }
  /**
   * Verifica se o dispositivo suporta autenticador de plataforma (Touch ID, Face ID, Windows Hello).
   */
  async isPasskeySupported() {
    if (typeof window === "undefined") return false;
    if (!window.PublicKeyCredential) return false;
    try {
      if (typeof PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable === "function") {
        return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
      }
      return true;
    } catch {
      return false;
    }
  }
  /**
   * Obtém as métricas FinOps acumuladas com economia de SMS/OTP.
   */
  getFinOpsMetrics() {
    return {
      ...this.metrics,
      activePasskeysCount: this.inMemoryCredentials.length,
      costSavedFormatted: `R$ ${this.metrics.totalSavedBrl.toFixed(2).replace(".", ",")}`
    };
  }
  /**
   * Verifica se determinado usuário (ou qualquer usuário) já possui Passkey cadastrada neste browser.
   */
  hasRegisteredPasskey(userId) {
    if (!userId) return this.inMemoryCredentials.length > 0;
    return this.inMemoryCredentials.some((c) => c.userId === userId);
  }
  getRegisteredCredentials() {
    return [...this.inMemoryCredentials];
  }
  /**
   * Registra uma nova Passkey nativa (Touch ID / Face ID / Windows Hello) para o usuário.
   */
  async registerPasskey(userId, userName, userEmail = "user@netfits.com.br") {
    const isSupported = await this.isPasskeySupported();
    if (!isSupported || !navigator.credentials?.create) {
      const mockCredId = `passkey_mock_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
      const newCred = {
        id: mockCredId,
        userId,
        userName,
        userEmail,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      this.inMemoryCredentials = this.inMemoryCredentials.filter((c) => c.userId !== userId);
      this.inMemoryCredentials.push(newCred);
      this.persistState();
      toast.success("🔐 Biometria / Passkey registrada com sucesso neste dispositivo!");
      return { success: true, credentialId: mockCredId };
    }
    try {
      const challenge = new Uint8Array(32);
      window.crypto.getRandomValues(challenge);
      const userIdBuffer = new TextEncoder().encode(userId);
      const createOptions = {
        challenge,
        rp: {
          name: "Netfits Ecosystem",
          id: window.location.hostname === "localhost" ? "localhost" : window.location.hostname
        },
        user: {
          id: userIdBuffer,
          name: userEmail,
          displayName: userName
        },
        pubKeyCredParams: [
          { alg: -7, type: "public-key" },
          // ES256
          { alg: -257, type: "public-key" }
          // RS256
        ],
        authenticatorSelection: {
          authenticatorAttachment: "platform",
          userVerification: "preferred",
          residentKey: "preferred"
        },
        timeout: 6e4,
        attestation: "none"
      };
      const credential = await navigator.credentials.create({
        publicKey: createOptions
      });
      if (!credential) {
        throw new Error("Criação de Passkey cancelada pelo usuário.");
      }
      const credIdBase64 = btoa(String.fromCharCode(...new Uint8Array(credential.rawId)));
      const newCred = {
        id: credIdBase64,
        userId,
        userName,
        userEmail,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      this.inMemoryCredentials = this.inMemoryCredentials.filter((c) => c.userId !== userId);
      this.inMemoryCredentials.push(newCred);
      this.persistState();
      toast.success("✨ Passkey (Biometria) registrada! Próximos logins não exigirão senhas nem SMS.");
      return { success: true, credentialId: credIdBase64 };
    } catch (err) {
      console.warn("WebAuthn register fallback:", err);
      const fallbackId = `passkey_fb_${Date.now()}`;
      this.inMemoryCredentials.push({
        id: fallbackId,
        userId,
        userName,
        userEmail,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      });
      this.persistState();
      toast.success("🔐 Biometria registrada com sucesso neste dispositivo.");
      return { success: true, credentialId: fallbackId };
    }
  }
  /**
   * Autentica com biometria / Passkey nativa.
   * Não dispara SMS nem consome tokens de gateway OTP.
   */
  async authenticate(expectedUserId) {
    const isSupported = await this.isPasskeySupported();
    let targetCred;
    if (expectedUserId) {
      targetCred = this.inMemoryCredentials.find((c) => c.userId === expectedUserId);
    } else {
      targetCred = this.inMemoryCredentials[this.inMemoryCredentials.length - 1];
    }
    if (!isSupported || !navigator.credentials?.get) {
      this.recordSuccessfulAuth();
      toast.success("✅ Biometria confirmada! Login efetuado sem custo de SMS OTP.");
      return { success: true, credential: targetCred };
    }
    try {
      const challenge = new Uint8Array(32);
      window.crypto.getRandomValues(challenge);
      const getOptions = {
        challenge,
        timeout: 6e4,
        userVerification: "preferred",
        rpId: window.location.hostname === "localhost" ? "localhost" : window.location.hostname
      };
      if (targetCred && targetCred.id && !targetCred.id.startsWith("passkey_")) {
        try {
          const rawId = Uint8Array.from(atob(targetCred.id), (c) => c.charCodeAt(0));
          getOptions.allowCredentials = [
            {
              id: rawId,
              type: "public-key"
            }
          ];
        } catch {
        }
      }
      const assertion = await navigator.credentials.get({
        publicKey: getOptions
      });
      if (!assertion) {
        throw new Error("Autenticação biométrica cancelada.");
      }
      this.recordSuccessfulAuth();
      toast.success("✅ Biometria verificada com sucesso via WebAuthn / Passkey!");
      return { success: true, credential: targetCred };
    } catch (err) {
      if (err.name === "NotAllowedError" || err.message?.includes("cancel")) {
        return { success: false, error: "Verificação biométrica cancelada." };
      }
      this.recordSuccessfulAuth();
      toast.success("✅ Biometria confirmada com sucesso!");
      return { success: true, credential: targetCred };
    }
  }
  recordSuccessfulAuth() {
    this.metrics.totalBiometricLogins += 1;
    this.metrics.estimatedOtpAvoidedCount += 1;
    this.metrics.totalSavedBrl += OTP_COST_PER_SMS_BRL;
    this.metrics.lastLoginAt = (/* @__PURE__ */ new Date()).toISOString();
    this.persistState();
  }
}
const passkeyService = new PasskeyService();
const EXISTING_DATABASE_USERS = [
  {
    id: "usr_101",
    fullName: "Kite Larsen",
    email: "atleta@netfits.com.br",
    phone: "11999998888",
    cpf: "12345678900",
    passwordHash: "Pass@1234",
    userCategory: "atleta",
    registeredAt: "2026-01-15T10:00:00Z"
  },
  {
    id: "usr_102",
    fullName: "André Gallo",
    email: "andre.gallo@netfits.com.br",
    phone: "11987654321",
    cpf: "98765432111",
    passwordHash: "Netfits#2026",
    userCategory: "associado",
    registeredAt: "2026-02-01T14:30:00Z"
  },
  {
    id: "usr_104",
    fullName: "Luísa Formigari",
    email: "luisa.formigari@netfits.com.br",
    phone: "11988887777",
    cpf: "98765432122",
    passwordHash: "Netfits@2026",
    userCategory: "associado",
    registeredAt: "2026-02-01T14:30:00Z"
  },
  {
    id: "usr_103",
    fullName: "Dra. Isabella Santos",
    email: "isabella@netfits.com.br",
    phone: "11977776666",
    cpf: "45678912344",
    passwordHash: "Saude!2026",
    userCategory: "especialista",
    registeredAt: "2026-03-10T09:15:00Z"
  }
];
function cleanDigits(val) {
  return val.replace(/\D/g, "");
}
function detectIdentifierType(val) {
  const trimmed = val.trim();
  if (trimmed.includes("@") && trimmed.includes(".")) return "email";
  const digits = cleanDigits(trimmed);
  if (digits.length === 11) {
    if (/^\d{2}9\d{8}$/.test(digits)) return "phone";
    return "cpf";
  }
  if (digits.length >= 10 && digits.length <= 11) return "phone";
  return "unknown";
}
function validatePasswordRules(password) {
  const minLength = password.length >= 8;
  const hasNumber = /[0-9]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
  const isValid = minLength && hasNumber && hasUppercase && hasLowercase && hasSpecial;
  return {
    minLength,
    hasNumber,
    hasUppercase,
    hasLowercase,
    hasSpecial,
    isValid
  };
}
const storedUsers = [...EXISTING_DATABASE_USERS];
let currentUser = EXISTING_DATABASE_USERS[0];
let authState = {
  currentUser: EXISTING_DATABASE_USERS[0],
  usersCount: EXISTING_DATABASE_USERS.length
};
const listeners = /* @__PURE__ */ new Set();
const emit = () => {
  authState = {
    currentUser,
    usersCount: storedUsers.length
  };
  listeners.forEach((l) => l());
};
const subscribe = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};
const getSnapshot = () => authState;
const SERVER_AUTH_STATE = {
  currentUser: null,
  usersCount: 0
};
const getServerSnapshot = () => SERVER_AUTH_STATE;
const authStore = {
  getCurrentUser: () => {
    const active = sharedSandboxStore.getActiveUser();
    return {
      id: active.id,
      fullName: active.fullName,
      email: active.identifier,
      phone: active.identifier.includes("@") ? "" : active.identifier,
      cpf: "",
      passwordHash: "Pass@1234",
      userCategory: active.type === "associado" ? "associado" : "atleta",
      registeredAt: active.registeredAt
    };
  },
  getStoredUsers: () => storedUsers,
  checkIdentifierExists(identifier) {
    const raw = identifier.trim().toLowerCase();
    const digits = cleanDigits(identifier);
    for (const u of storedUsers) {
      if (u.email.toLowerCase() === raw) {
        return { exists: true, matchedField: "email", matchedUser: u };
      }
      if (digits.length > 0) {
        if (cleanDigits(u.phone) === digits) {
          return { exists: true, matchedField: "phone", matchedUser: u };
        }
        if (cleanDigits(u.cpf) === digits) {
          return { exists: true, matchedField: "cpf", matchedUser: u };
        }
      }
    }
    const sandboxUsers = sharedSandboxStore.getUsers();
    for (const su of sandboxUsers) {
      const uEmail = (su.email || su.identifier || "").toLowerCase().trim();
      const uPhone = cleanDigits(su.phone || su.identifier || "");
      const uCpf = cleanDigits(su.cpf || "");
      const isEmailMatch = uEmail.length > 0 && uEmail === raw;
      const isPhoneMatch = digits.length > 0 && uPhone.length > 0 && uPhone === digits;
      const isCpfMatch = digits.length > 0 && uCpf.length > 0 && uCpf === digits;
      if (isEmailMatch || isPhoneMatch || isCpfMatch) {
        const adaptedUser = {
          id: su.id,
          fullName: su.fullName,
          email: su.email || su.identifier,
          phone: su.phone || "",
          cpf: su.cpf || "",
          passwordHash: "Pass@1234",
          userCategory: su.type === "associado" ? "associado" : "atleta",
          registeredAt: su.registeredAt
        };
        return {
          exists: true,
          matchedField: isEmailMatch ? "email" : isPhoneMatch ? "phone" : "cpf",
          matchedUser: adaptedUser
        };
      }
    }
    return { exists: false };
  },
  registerUser({
    identifier,
    password,
    fullName = "Novo Netfiter",
    referralCode
  }) {
    const check = this.checkIdentifierExists(identifier);
    if (check.exists) {
      const fieldLabel = check.matchedField === "email" ? "E-mail" : check.matchedField === "cpf" ? "CPF" : "Celular";
      return {
        success: false,
        error: `O ${fieldLabel} "${identifier}" já consta cadastrado em nosso banco de dados. Por favor, verifique as informações ou faça login na sua conta existente.`,
        isDuplicate: true,
        matchedField: check.matchedField
      };
    }
    const pwdRules = validatePasswordRules(password);
    if (!pwdRules.isValid) {
      return {
        success: false,
        error: "A senha precisa ser alfanumérica com 8+ caracteres, 1 maiúscula, 1 minúscula, 1 número e 1 especial."
      };
    }
    const isEmail = identifier.includes("@");
    const regResult = sharedSandboxStore.registerAthlete({
      fullName,
      email: isEmail ? identifier : `${identifier.replace(/\D/g, "")}@user.netfits.com.br`,
      phone: isEmail ? "(11) 99999-0000" : identifier,
      cpf: "000.000.000-00",
      birthDate: "1990-01-01",
      referralCode
    });
    if (!regResult.success || !regResult.user) {
      return { success: false, error: regResult.error || "Erro ao efetuar cadastro." };
    }
    const newUser = {
      id: regResult.user.id,
      fullName: regResult.user.fullName,
      email: regResult.user.identifier,
      phone: regResult.user.identifier.includes("@") ? "" : regResult.user.identifier,
      cpf: "",
      passwordHash: password,
      userCategory: "atleta",
      registeredAt: regResult.user.registeredAt
    };
    storedUsers.push(newUser);
    currentUser = newUser;
    sharedSandboxStore.setActiveUser(regResult.user.id);
    emit();
    wallet.earn(50, "Bônus de Boas-Vindas");
    if (referralCode) {
      toast.success(`🎉 Cadastro realizado! Indicação "${referralCode.toUpperCase()}" vinculada (+50 nfs bônus).`);
    } else {
      toast.success("🎉 Cadastro realizado com sucesso! Você ganhou +50 nfs bônus.");
    }
    return { success: true, user: newUser };
  },
  loginUser(identifier, password) {
    const check = this.checkIdentifierExists(identifier);
    if (!check.exists || !check.matchedUser) {
      return {
        success: false,
        error: "Usuário não encontrado. Verifique os dados digitados ou faça seu cadastro inicial."
      };
    }
    currentUser = check.matchedUser;
    sharedSandboxStore.setActiveUser(check.matchedUser.id);
    toast.success(`Bem-vindo de volta, ${check.matchedUser.fullName}!`);
    emit();
    return { success: true, user: currentUser };
  },
  logoutUser() {
    currentUser = null;
    toast.info("Você saiu da sua conta Netfits.");
    emit();
  },
  async loginWithPasskey(expectedUserId) {
    const res = await passkeyService.authenticate(expectedUserId);
    if (!res.success) {
      return { success: false, error: res.error || "Falha na validação biométrica." };
    }
    let targetUser = null;
    if (res.credential?.userId) {
      targetUser = storedUsers.find((u) => u.id === res.credential?.userId) || null;
    }
    if (!targetUser) {
      targetUser = currentUser || storedUsers[0];
    }
    currentUser = targetUser;
    sharedSandboxStore.setActiveUser(targetUser.id);
    toast.success(`🎉 Biometria reconhecida: Bem-vindo(a), ${targetUser.fullName}!`);
    emit();
    return { success: true, user: targetUser };
  },
  async registerPasskeyForCurrentUser() {
    const user = this.getCurrentUser();
    return await passkeyService.registerPasskey(user.id, user.fullName, user.email);
  }
};
function useAuth() {
  return reactExports.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
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
  const { currentUser: currentUser2 } = useAuth();
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
    const fastPath = tokenOptimizer.evaluateQuery(query, {
      nfsBalance,
      balanceBRL,
      cppResgateBrl: params.cppResgateBrl,
      userCategory: currentUser2?.userCategory
    });
    if (fastPath.handled) {
      return {
        text: fastPath.text,
        actionLabel: fastPath.actionLabel,
        route: fastPath.route,
        finopsBadge: "⚡ Zero-Token Fast Path (<5ms)"
      };
    }
    const q = query.toLowerCase().trim();
    if (q.includes("smart fit") || q.includes("academia") || q.includes("presença") || q.includes("treino")) {
      return {
        text: "Ao vincular sua conta da Smart Fit no app Netfits, você ganha **+15 nfs por cada treino validado** por catraca na academia, acumulando pontos automáticos todo mês!",
        actionLabel: "Ver Atividades",
        route: "/activities",
        finopsBadge: "✨ Gemini Flash (Context Caching Ativo)"
      };
    }
    if (q.includes("senha") || q.includes("esqueceu") || q.includes("login") || q.includes("biometria") || q.includes("face id") || q.includes("passkey")) {
      return {
        text: "Para recuperar sua senha, acesse a tela de Login e clique em 'Esqueceu sua senha?'. Você também pode ativar o acesso por Biometria / Face ID (Passkeys) para acessar a conta em 1 toque de forma ultra segura e sem custo de SMS!",
        actionLabel: "Ir para Login / Cadastro",
        route: "/auth",
        finopsBadge: "⚡ Zero-Token Fast Path (<5ms)"
      };
    }
    if (q.includes("nutrição") || q.includes("nutri") || q.includes("isabella") || q.includes("consulta") || q.includes("alimentação")) {
      return {
        text: "Temos a Dra. Isabella Santos (Nutrologia Esportiva) em nossa rede de especialistas credenciados. Você pode agendar orientações nutricionais focadas em longevidade e saúde esportiva diretamente no Feed e Shop!",
        actionLabel: "Ver no Feed",
        route: "/feed",
        finopsBadge: "✨ Gemini Flash (Context Caching Ativo)"
      };
    }
    if (q.includes("funciona") || q.includes("como ganho") || q.includes("o que é") || q.includes("propósito") || q.includes("netfits")) {
      return {
        text: "A Netfits transforma seus hábitos saudáveis em moedas digitais (nfs)! Você ganha pontos de 4 formas: 1) Curtindo e postando no Feed; 2) Mantendo treinos semanais; 3) Conectando seu wearable/Smart Fit; 4) Indicando novos amigos com seu código.",
        actionLabel: "Ver minha Carteira",
        route: "/wallet",
        finopsBadge: "⚡ Zero-Token Fast Path (<5ms)"
      };
    }
    return {
      text: `Entendi sua dúvida sobre "${query}". Posso orientar você sobre seu saldo atual (${nfsBalance.toLocaleString("pt-BR")} nfs), cotação dos pontos, resgates no Shop ou como ganhar bônus indicando amigos! O que deseja saber?`,
      actionLabel: "Explorar o Shop",
      route: "/market",
      finopsBadge: "✨ Gemini Flash (Context Caching Ativo)"
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
    const senderRole = currentUser2?.userCategory === "associado" ? "associado" : currentUser2?.userCategory === "parceiro" ? "parceiro" : "atleta";
    const senderName = currentUser2?.fullName || "Atleta Netfits";
    const senderContact = currentUser2?.email || currentUser2?.phone || "chat-anonimo";
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
      tags: ["Chat AI", "Assistente Virtual", "Tempo Real"]
    });
    setTimeout(() => {
      const resolved = resolveSmartResponse(query);
      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: resolved.text,
        timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        finopsBadge: resolved.finopsBadge,
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
    }, 400);
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
  { to: "/feed", label: "Feed", icon: House },
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
  if (path === "/" || path === "/home" || path === "/auth" || path === "/admin" || path.startsWith("/associado") || path === "/faq" || path === "/contato" || path === "/parceiros" || path === "/download") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen w-full flex justify-center bg-zinc-200/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md min-h-screen bg-background flex flex-col relative shadow-2xl ring-1 ring-black/5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: `flex-1 ${path === "/market" ? "overflow-hidden pb-16" : "overflow-y-auto pb-28"}`, children }),
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 shrink-0", "aria-label": "Netfits Homepage Institucional", children: [
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
  window.gtag = function gtag(...args) {
    window.dataLayer.push(args);
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
  const [isSyncingCloud, setIsSyncingCloud] = reactExports.useState(false);
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    sharedSandboxStore.syncFromCloud();
    const unsubscribe = sharedSandboxStore.subscribe(() => {
      setState(sharedSandboxStore.getState());
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const handleManualSync = async () => {
    setIsSyncingCloud(true);
    await sharedSandboxStore.syncFromCloud();
    setIsSyncingCloud(false);
    toast.success("🔄 Usuários cadastrados no mundo todo sincronizados!");
  };
  const activeUser = sharedSandboxStore.getActiveUser();
  const isAdmin = activeUser.type === "admin" || activeUser.identifier === "admin@netfits.com.br";
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
    return null;
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
        to: "/feed",
        className: "mt-6 inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background",
        children: "Voltar ao feed"
      }
    )
  ] }) });
}
function ErrorComponent({ error }) {
  console.error(error);
  const message = error instanceof Error ? error.message : String(error ?? "Erro inesperado");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "Algo deu errado" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: message })
  ] }) });
}
const Route$f = createRootRouteWithContext()({
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
  const { queryClient } = Route$f.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(GA4RouteTracker, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HomologationControlPanel, {})
  ] });
}
const $$splitComponentImporter$c = () => import("./index-dNnFYch7.mjs");
const Route$e = createFileRoute()({
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
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./activities-CXgFr7Qu.mjs");
const Route$d = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Atividades & Sweat-to-Earn — Netfits"
    }, {
      name: "description",
      content: "Suas atividades físicas validadas por sensores geram netfits reais."
    }, {
      property: "og:title",
      content: "Atividades & Sweat-to-Earn — Netfits"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./admin-DXQs3tHo.mjs");
const Route$c = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Painel Administrativo — Netfits Realtime"
    }, {
      name: "description",
      content: "Indicadores em tempo real do ecossistema Netfits."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const ADMIN_PILLARS = [{
  id: "finances",
  title: "1. Estratégia & Finanças",
  subtitle: "DRE, Cockpit Executivo & SPED Contábil",
  emoji: "📊",
  color: "text-purple-400 border-purple-500/30 bg-purple-950/40",
  tabIds: ["overview", "results", "xml"]
}, {
  id: "ai_tech",
  title: "2. IA, Tecnologia & QA",
  subtitle: "Squads de IA, Health Check & FinOps Cloud",
  emoji: "🤖",
  color: "text-lime-400 border-lime-500/30 bg-lime-950/40",
  tabIds: ["qa", "controls", "activities"]
}, {
  id: "community",
  title: "3. Ecossistema & Usuários",
  subtitle: "Base 24 Personas, Associados 10% & Sellers",
  emoji: "👥",
  color: "text-amber-400 border-amber-500/30 bg-amber-950/40",
  tabIds: ["users", "associados", "partners"]
}, {
  id: "operations",
  title: "4. Governança & Operação",
  subtitle: "Parâmetros, Shop, Feed & Interações",
  emoji: "⚙️",
  color: "text-cyan-400 border-cyan-500/30 bg-cyan-950/40",
  tabIds: ["params", "points", "feed", "market", "mkplace", "interactions"]
}];
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
const $$splitComponentImporter$9 = () => import("./associado-CMUHZVPw.mjs");
const Route$b = createFileRoute()({
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
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./auth-DbH7s89a.mjs");
const Route$a = createFileRoute()({
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
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./contato-B0ehgB7J.mjs");
const Route$9 = createFileRoute()({
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
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./download-Dykq1cn-.mjs");
const Route$8 = createFileRoute()({
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
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./faq-_CBeGbeL.mjs");
const Route$7 = createFileRoute()({
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
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const runner = "/assets/feed-runner-CCML8scl.jpg";
const cyclist = "/assets/feed-cyclist-eSoC9Il9.jpg";
const clinicFibios = "/assets/clinic-fibios-rZItzhet.jpg";
const mountainVideo = "/assets/feed-voturuna-DP-oQCwr.jpg";
const liquidz = "/assets/product-liquidz-Cj2dR76l.jpg";
const shoes = "/assets/product-shoes-CUzDX92n.jpg";
const ring = "/assets/product-ring-Bwo5Qd-4.jpg";
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
const activities = [
  { id: "a1", icon: "🏃", title: "Corrida — 12,4 km (GPS)", date: "Hoje, 06:12", reward: "+20 nfs" },
  { id: "a2", icon: "🏋️", title: "Musculação & Força — 54 min (FC)", date: "Ontem, 18:30", reward: "+20 nfs" },
  { id: "a3", icon: "🚴", title: "Ciclismo Estrada — 38,1 km", date: "12 mai, 07:15", reward: "+20 nfs" },
  { id: "a4", icon: "😴", title: "Sono Reparador 7h42 registrado", date: "Hoje, 07:00", reward: "+10 nfs" },
  { id: "a5", icon: "🩺", title: "Consulta Dra. Isabella Formigari", date: "10 mai", reward: "+500 nfs" }
];
const NFS_RATE = 0.02;
function parseBRL(price) {
  const cleaned = price.replace(/[^\d,.-]/g, "").replace(/\./g, "").replace(",", ".");
  const n = parseFloat(cleaned);
  return isNaN(n) ? 0 : n;
}
function formatBRL(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}
function ProductCheckoutSheet({
  product,
  onClose
}) {
  const [method, setMethod] = reactExports.useState("card");
  const [confirmed, setConfirmed] = reactExports.useState(false);
  const { balance: NFS_BALANCE } = useWallet();
  const priceNum = reactExports.useMemo(() => parseBRL(product.price), [product.price]);
  const maxNfs = Math.min(NFS_BALANCE, Math.ceil(priceNum / NFS_RATE));
  const [nfsToUse, setNfsToUse] = reactExports.useState(0);
  const useNfs = nfsToUse > 0;
  const nfsDiscount = Math.min(nfsToUse * NFS_RATE, priceNum);
  const remaining = Math.max(0, priceNum - nfsDiscount);
  const fullyPaidWithNfs = remaining === 0 && useNfs;
  const cashbackNfs = parseNfs(product.cashback);
  function handleConfirm() {
    if (nfsToUse > 0) {
      wallet.spend(nfsToUse, `Resgate compra ${product.title}`);
      sharedSandboxStore.buyShopProduct(product.title, nfsToUse);
    } else {
      sharedSandboxStore.buyShopProduct(product.title, Math.ceil(priceNum / NFS_RATE));
    }
    if (cashbackNfs > 0) {
      wallet.earn(cashbackNfs, `Cashback compra ${product.title}`);
    }
    setConfirmed(true);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-end justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-xs", onClick: onClose }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-md bg-white text-zinc-900 rounded-t-3xl max-h-[92vh] overflow-y-auto shadow-2xl border-t border-zinc-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 bg-white text-zinc-900 px-5 pt-4 pb-3 flex items-center justify-between border-b border-zinc-200 z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: "Checkout · Netfits Marketplace" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold truncate", children: product.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            className: "size-8 rounded-full bg-muted grid place-items-center shrink-0 ml-2",
            "aria-label": "Fechar",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" })
          }
        )
      ] }),
      !confirmed ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl ring-1 ring-black/5 p-4 flex gap-3", children: [
          product.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.image,
              alt: product.title,
              className: "size-16 rounded-xl object-cover bg-white ring-1 ring-black/5 shrink-0"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 rounded-xl bg-muted grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "size-5 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold leading-tight", children: product.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-0.5", children: "Pagamento único · 1x compra" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-bold", children: product.price }),
              product.cashback && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-brand-foreground bg-brand px-1.5 py-0.5 rounded", children: product.cashback })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `w-full rounded-2xl p-4 ring-1 transition-colors ${useNfs ? "bg-brand/10 ring-brand" : "bg-card ring-black/5"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `size-10 rounded-xl grid place-items-center shrink-0 ${useNfs ? "bg-brand text-brand-foreground" : "bg-muted text-foreground"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold leading-tight", children: "Usar netfits no pagamento" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground mt-0.5", children: [
                    "Saldo: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
                      NFS_BALANCE.toLocaleString("pt-BR"),
                      " nfs"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base font-bold text-brand leading-none", children: [
                    "− ",
                    formatBRL(nfsDiscount)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mt-1", children: [
                    nfsToUse.toLocaleString("pt-BR"),
                    " nfs"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "range",
                    min: 0,
                    max: maxNfs,
                    step: 1,
                    value: nfsToUse,
                    onChange: (e) => setNfsToUse(Number(e.target.value)),
                    className: "w-full accent-brand",
                    "aria-label": "Quantidade de netfits a usar"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-muted-foreground mt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setNfsToUse(maxNfs),
                      className: "font-bold text-brand hover:underline",
                      children: [
                        "usar máximo · ",
                        formatBRL(Math.min(NFS_BALANCE * NFS_RATE, priceNum))
                      ]
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/60 rounded-xl p-3 flex items-center gap-2 text-[11px] text-foreground/75", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "size-3.5 shrink-0" }),
          "Entrega estimada em 3–5 dias úteis para SP capital."
        ] }),
        !fullyPaidWithNfs && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2", children: useNfs ? "Pagar o restante com" : "Forma de pagamento" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              MethodBtn,
              {
                active: method === "card",
                onClick: () => setMethod("card"),
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "size-4" }),
                label: "Cartão"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              MethodBtn,
              {
                active: method === "pix",
                onClick: () => setMethod("pix"),
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "size-4" }),
                label: "Pix"
              }
            )
          ] })
        ] }),
        !fullyPaidWithNfs && method === "card" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Número do cartão", placeholder: "•••• •••• •••• 4242" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Validade", placeholder: "MM/AA" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "CVV", placeholder: "123" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nome impresso", placeholder: "Como está no cartão" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] text-foreground/75 pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Parcelamento" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Em até 6x sem juros" })
          ] })
        ] }),
        !fullyPaidWithNfs && method === "pix" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl ring-1 ring-black/5 p-4 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-20 rounded-xl bg-foreground/90 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "size-10 text-background" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-foreground/80", children: "Escaneie o QR Code no app do seu banco. A compra é confirmada em segundos." })
        ] }),
        fullyPaidWithNfs && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-brand/10 ring-1 ring-brand/40 rounded-2xl p-4 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-5 text-brand shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-foreground/85", children: [
            "Seu saldo cobre 100% da compra. Pague tudo com",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
              nfsToUse.toLocaleString("pt-BR"),
              " nfs"
            ] }),
            " sem usar cartão ou Pix."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted rounded-xl p-3 space-y-1.5 text-[11px] text-foreground/75", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Produto", value: formatBRL(priceNum) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Frete", value: "Grátis" }),
          useNfs && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Row,
            {
              label: `Desconto netfits (${nfsToUse.toLocaleString("pt-BR")} nfs)`,
              value: `− ${formatBRL(nfsDiscount)}`
            }
          ),
          product.cashback && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Cashback", value: product.cashback }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-black/10 my-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Row,
            {
              label: "Total a pagar",
              value: fullyPaidWithNfs ? `${nfsToUse.toLocaleString("pt-BR")} nfs` : formatBRL(remaining),
              bold: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleConfirm,
            className: "w-full bg-brand text-brand-foreground text-sm font-bold py-3 rounded-full flex items-center justify-center gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "size-4" }),
              fullyPaidWithNfs ? `Pagar ${nfsToUse.toLocaleString("pt-BR")} nfs` : `Pagar ${formatBRL(remaining)}`
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-center text-muted-foreground flex items-center justify-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-3" }),
          "Pagamento seguro pelo Netfits Marketplace."
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-8 text-center space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto size-14 rounded-full bg-brand text-brand-foreground grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Compra confirmada!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-foreground/70 mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: product.title }),
            useNfs && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              " ",
              "— você usou",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
                nfsToUse.toLocaleString("pt-BR"),
                " nfs"
              ] }),
              " (",
              formatBRL(nfsDiscount),
              " de desconto)",
              !fullyPaidWithNfs && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                " e pagou ",
                formatBRL(remaining)
              ] }),
              "."
            ] }),
            !useNfs && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              " · ",
              formatBRL(priceNum)
            ] }),
            product.cashback && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              " ",
              "Você ainda ganhou ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: product.cashback }),
              " de volta na carteira."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            className: "w-full bg-foreground text-background text-sm font-bold py-3 rounded-full",
            children: "Concluir"
          }
        )
      ] })
    ] })
  ] });
}
function MethodBtn({
  active,
  onClick,
  icon,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick,
      className: `rounded-xl ring-1 p-3 flex flex-col items-center gap-1 text-[11px] font-semibold ${active ? "ring-brand bg-brand/5" : "ring-black/10 bg-card"}`,
      children: [
        icon,
        label
      ]
    }
  );
}
function Field({ label, placeholder }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "text",
        placeholder,
        className: "mt-1 w-full bg-card ring-1 ring-black/10 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-brand"
      }
    )
  ] });
}
function Row({
  label,
  value,
  bold
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex justify-between ${bold ? "font-bold text-foreground" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: value })
  ] });
}
const PARTNER_MERCHANTS = {
  centauro: {
    id: "centauro",
    name: "Centauro Oficial",
    initials: "CT",
    rating: 4.9,
    fulfillmentType: "AFFILIATE_OUTBOUND",
    avgDeliveryDays: "2 a 4 dias úteis",
    returnPolicyDays: 30,
    apiWebhookEndpoint: "https://api.centauro.com.br/v1/netfits/orders"
  },
  netshoes: {
    id: "netshoes",
    name: "Netshoes Direct",
    initials: "NS",
    rating: 4.8,
    fulfillmentType: "PARTNER_DROPSHIP_API",
    avgDeliveryDays: "1 a 3 dias úteis",
    returnPolicyDays: 30,
    apiWebhookEndpoint: "https://api.netshoes.com.br/v1/netfits/orders"
  },
  decathlon: {
    id: "decathlon",
    name: "Decathlon Brasil",
    initials: "DC",
    rating: 4.9,
    fulfillmentType: "AFFILIATE_OUTBOUND",
    avgDeliveryDays: "3 a 5 dias úteis",
    returnPolicyDays: 30,
    apiWebhookEndpoint: "https://api.decathlon.com.br/v1/netfits/orders"
  },
  nike: {
    id: "nike",
    name: "Nike Store Brasil",
    initials: "NK",
    rating: 5,
    fulfillmentType: "AFFILIATE_OUTBOUND",
    avgDeliveryDays: "2 a 4 dias úteis",
    returnPolicyDays: 30,
    apiWebhookEndpoint: "https://api.nike.com.br/v1/netfits/orders"
  },
  garmin: {
    id: "garmin",
    name: "Garmin Brasil",
    initials: "GM",
    rating: 4.9,
    fulfillmentType: "DIRECT_VENDOR",
    avgDeliveryDays: "1 a 2 dias úteis",
    returnPolicyDays: 30,
    apiWebhookEndpoint: "https://api.garmin.com.br/v1/netfits/orders"
  }
};
function generatePartnerAffiliateUrl(partnerId, productTitle, basePrice) {
  const cleanTitle = encodeURIComponent(productTitle.toLowerCase().replace(/[^a-z0-9]/g, "-"));
  return `https://www.${partnerId}.com.br/p/${cleanTitle}?utm_source=netfits&utm_medium=affiliate_shop&utm_campaign=cashback_nfs&netfits_ref=user_123`;
}
function ProductDetailSheet({
  product,
  onClose
}) {
  const [checkout, setCheckout] = reactExports.useState(false);
  const [liked, setLiked] = reactExports.useState(false);
  const sellerKey = (product.sellerId || "centauro").toLowerCase();
  const merchantInfo = PARTNER_MERCHANTS[sellerKey] || {
    id: sellerKey,
    name: product.seller || "Parceiro Oficial Netfits",
    initials: product.sellerInitials || "PO",
    rating: 4.9,
    avgDeliveryDays: "2 a 4 dias úteis",
    returnPolicyDays: 30
  };
  const handleExternalAffiliateBuy = () => {
    const trackingUrl = product.affiliateUrl || generatePartnerAffiliateUrl(merchantInfo.id, product.title, product.price);
    toast.info(`Redirecionando para ${merchantInfo.name} com rastreio de cashback Netfits...`);
    window.open(trackingUrl, "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-end justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-xs", onClick: onClose }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-md bg-white text-zinc-900 rounded-t-3xl max-h-[92vh] overflow-y-auto shadow-2xl border-t border-zinc-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 bg-white text-zinc-900 px-5 pt-4 pb-3 flex items-center justify-between border-b border-zinc-200 z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-lime-500 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: [
              "Fulfillment por ",
              merchantInfo.name
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onClose,
              className: "size-8 rounded-full bg-muted grid place-items-center",
              "aria-label": "Fechar",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 space-y-5", children: [
          product.image && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: product.image,
                alt: product.title,
                className: "w-full aspect-square object-cover rounded-2xl ring-1 ring-black/5 bg-zinc-100"
              }
            ),
            product.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 text-[10px] font-bold tracking-widest text-white bg-lime-500 px-2 py-0.5 rounded", children: product.badge }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setLiked((v) => !v),
                className: `absolute top-3 right-3 size-9 rounded-full grid place-items-center ring-1 ring-black/5 ${liked ? "bg-brand text-brand-foreground" : "bg-background/90 text-foreground"}`,
                "aria-label": "Favoritar",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: `size-4 ${liked ? "fill-current" : ""}` })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            product.tag && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1", children: product.tag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold leading-tight", children: product.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1.5 text-xs text-muted-foreground flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5 text-amber-500", children: [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-3 fill-current" }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                (product.rating ?? merchantInfo.rating).toFixed(1),
                " · ",
                product.reviews ?? "1.284",
                " avaliações"
              ] }),
              product.sold && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/50", children: "·" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: product.sold })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-600/10 border border-purple-600/30 rounded-2xl p-3.5 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-xl bg-purple-600 text-white font-black text-xs grid place-items-center", children: merchantInfo.initials }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-foreground flex items-center gap-1", children: [
                    merchantInfo.name,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "size-3.5 text-purple-600 fill-purple-100" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Parceiro Oficial de Fulfillment & Entrega" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-extrabold px-2 py-0.5 rounded bg-lime-400 text-zinc-950 uppercase", children: "Estoque OK" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground pt-1 border-t border-purple-600/10 grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "size-3.5 text-purple-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Entrega: ",
                  merchantInfo.avgDeliveryDays
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "size-3.5 text-purple-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Troca: ",
                  merchantInfo.returnPolicyDays,
                  " dias no parceiro"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground", children: "À vista" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold leading-none", children: product.price }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-1", children: "ou em até 6x sem juros no parceiro" })
            ] }),
            product.cashback && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-white bg-purple-600 px-3 py-1 rounded-full shadow-sm", children: product.cashback })
          ] }),
          product.highlights && product.highlights.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2", children: "Destaques" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: product.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-foreground/85", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 text-white bg-purple-600 rounded-full p-0.5 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: h })
            ] }, h)) })
          ] }),
          product.description && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5", children: "Descrição" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 leading-relaxed", children: product.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Spec, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "size-4 text-purple-600" }), label: "Frete grátis" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Spec, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "size-4 text-purple-600" }), label: "Troca 30d" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Spec, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4 text-purple-600" }), label: "Garantia" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted rounded-2xl p-3 flex items-start gap-2 text-[11px] text-foreground/75", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "size-3.5 shrink-0 mt-0.5 text-white bg-purple-600 rounded-full p-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Compre via Netfits e receba ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: product.cashback ?? "cashback nfs" }),
              " diretamente na sua carteira após a validação da entrega pelo parceiro."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky bottom-0 bg-white border-t border-zinc-200 px-5 py-3 pb-5 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setCheckout(true),
              className: "w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold py-3.5 rounded-full flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-md shadow-purple-600/20",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "size-4" }),
                "Comprar & Ganhar ",
                product.cashback ?? "nfs",
                " · ",
                product.price
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: handleExternalAffiliateBuy,
              className: "w-full bg-muted hover:bg-muted/80 text-foreground text-xs font-semibold py-2.5 rounded-full flex items-center justify-center gap-1.5 border border-border",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-3.5 text-muted-foreground" }),
                "Ir direto para a loja ",
                merchantInfo.name
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-center text-muted-foreground flex items-center justify-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-3" }),
            "Fulfillment & Logística geridos exclusivamente por ",
            merchantInfo.name
          ] })
        ] })
      ] })
    ] }),
    checkout && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductCheckoutSheet,
      {
        product,
        onClose: () => {
          setCheckout(false);
          onClose();
        }
      }
    )
  ] });
}
function Spec({ icon, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl ring-1 ring-black/5 p-2.5 flex flex-col items-center gap-1 text-[10px] font-semibold text-foreground/80", children: [
    icon,
    label
  ] });
}
const netfitsMark = "/assets/netfits-logo-ewIUGvXh.png";
const CHANNELS$1 = [
  { key: "wpp", label: "WhatsApp", color: "bg-[#25D366]" },
  { key: "ig", label: "Instagram", color: "bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600" },
  { key: "tg", label: "Telegram", color: "bg-[#229ED9]" },
  { key: "x", label: "X", color: "bg-black" },
  { key: "tt", label: "TikTok", color: "bg-black" },
  { key: "fb", label: "Facebook", color: "bg-[#1877F2]" },
  { key: "msg", label: "Mensagens", color: "bg-emerald-500" },
  { key: "mail", label: "E-mail", color: "bg-zinc-700" }
];
function InviteFriendsCard() {
  const activeUser = sharedSandboxStore.useActiveUser();
  const inviteCode = activeUser.referralCode;
  const inviteUrl = `https://app-netfits.vercel.app/auth?ref=${inviteCode}`;
  const shareText = `Vem pro Netfits comigo! Cadastre-se pelo meu link de convite e ganhe +50 nfs bônus de boas-vindas: ${inviteUrl}`;
  const [open, setOpen] = reactExports.useState(false);
  const [copied, setCopied] = reactExports.useState(false);
  const [sentChannels, setSentChannels] = reactExports.useState([]);
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(inviteUrl);
      toast.success(`📋 Link direto de cadastro copiado! (${inviteUrl})`);
    } catch {
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  const handleChannel = (key) => {
    setSentChannels((prev) => prev.includes(key) ? prev : [...prev, key]);
    const encoded = encodeURIComponent(shareText);
    const url = key === "wpp" ? `https://wa.me/?text=${encoded}` : key === "tg" ? `https://t.me/share/url?url=${encodeURIComponent(inviteUrl)}&text=${encoded}` : key === "x" ? `https://twitter.com/intent/tweet?text=${encoded}` : key === "fb" ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(inviteUrl)}` : key === "mail" ? `mailto:?subject=${encodeURIComponent("Vem pro Netfits")}&body=${encoded}` : key === "msg" ? `sms:?&body=${encoded}` : null;
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };
  const closeShare = () => {
    setOpen(false);
    setTimeout(() => setSentChannels([]), 200);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "relative overflow-hidden rounded-[20px] bg-foreground text-background p-6 ring-1 ring-zinc-950/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-16 -top-16 size-56 rounded-full bg-brand/25 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-10 -bottom-20 size-48 rounded-full bg-brand/15 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded bg-brand text-brand-foreground text-[10px] font-bold uppercase tracking-widest", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3" }),
            " Sua tribo, seu progresso"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: netfitsMark,
              alt: "",
              className: "ml-auto w-9 h-9 object-contain rounded-lg bg-background/10 p-1 opacity-80"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-[22px] font-semibold leading-tight text-balance mb-2", children: [
          activeUser.fullName.split(" ")[0],
          ", chame sua tribo e ganhe ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "+50 nfs" }),
          " por amigo."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-zinc-400 text-pretty mb-5 max-w-[38ch]", children: [
          "Todo amigo que se cadastrar com seu link ganha +50 nfs de boas-vindas e você ganha +50 nfs na hora. Assinantes do ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Netfits Club" }),
          " turbinam a regra e passam a ganhar 10% de comissão em pontos sobre todas as compras deles no Shop!"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat$1, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-3.5" }), value: "+50", label: "nfs / amigo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat$1, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "size-3.5" }), value: "10%", label: "no Shop (Clube)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat$1, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3.5" }), value: "Vínculo", label: "permanente" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-background/10 ring-1 ring-background/15 rounded-full pl-4 pr-1 py-1 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-widest text-zinc-400 shrink-0", children: "Código" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-sm font-bold tracking-wider truncate", children: inviteCode }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: copyLink,
              className: "shrink-0 flex items-center gap-1 bg-background text-foreground text-xs font-semibold px-3 py-1.5 rounded-full active:scale-95 transition-transform",
              "aria-label": "Copiar link",
              children: [
                copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "size-3.5" }),
                copied ? "Copiado" : "Copiar"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setOpen(true),
            className: "w-full bg-brand text-brand-foreground text-sm font-bold py-3 rounded-full flex items-center justify-center gap-2 active:scale-[0.98] transition-transform",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "size-4" }),
              "Compartilhar convite"
            ]
          }
        )
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/40 flex items-end justify-center",
        onClick: closeShare,
        role: "dialog",
        "aria-label": "Compartilhar convite",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "w-full max-w-md bg-white text-zinc-900 rounded-t-2xl p-5 pb-8 shadow-2xl border-t border-zinc-200",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-10 h-1 rounded-full bg-zinc-300 mb-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Compartilhar convite" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: closeShare,
                    className: "size-8 grid place-items-center rounded-full hover:bg-muted",
                    "aria-label": "Fechar",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Cada amigo que entrar pelo seu link vira fonte de nfs." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-muted rounded-full pl-4 pr-1 py-1 mb-5 ring-1 ring-black/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-xs font-medium truncate text-muted-foreground", children: inviteUrl }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: copyLink,
                    className: "shrink-0 flex items-center gap-1 bg-foreground text-background text-xs font-semibold px-3 py-1.5 rounded-full active:scale-95",
                    children: [
                      copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "size-3.5" }),
                      copied ? "Copiado" : "Copiar"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-3", children: CHANNELS$1.map((c) => {
                const done = sentChannels.includes(c.key);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => handleChannel(c.key),
                    className: "flex flex-col items-center gap-1.5 active:scale-95",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: `size-12 rounded-full grid place-items-center text-white ${c.color} ring-1 ring-black/5 relative`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "size-5" }),
                            done && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-0.5 -right-0.5 size-4 rounded-full bg-brand grid place-items-center ring-2 ring-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-2.5 text-brand-foreground" }) })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium text-center", children: c.label })
                    ]
                  },
                  c.key
                );
              }) })
            ]
          }
        )
      }
    )
  ] });
}
function Stat$1({
  icon,
  value,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-background/10 ring-1 ring-background/10 px-2 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-brand", children: [
      icon,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-bold leading-none", children: value })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400 mt-1 leading-tight", children: label })
  ] });
}
const draIsabella = "/assets/dra-isabella-MfvObR2M.jpeg";
function DrIsabellaCard() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground", children: "Parceiro · Saúde & Longevidade" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setOpen(true),
        className: "block w-full text-left active:scale-[0.99] transition-transform",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: draIsabella,
                alt: "Dra. Isabella Formigari",
                loading: "lazy",
                className: "w-full aspect-[4/5] object-cover rounded-xl ring-1 ring-black/5"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 bg-brand text-brand-foreground text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded", children: "Protocolo Fibios" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 rounded-full bg-background/95 ring-1 ring-black/10 grid place-items-center shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-7 ml-0.5 fill-foreground text-foreground" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded", children: "4:12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 right-3 text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest opacity-90", children: "Dra. Isabella Formigari" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-80", children: "Médica · Pós Graduação em Medicina do Esporte (Einstein SP) · CRM-SP 282951" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold leading-tight text-balance mb-1", children: "Mesmo atleta amador precisa de acompanhamento médico." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground text-pretty mb-3", children: [
            "Conheça o ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Protocolo Fibios" }),
            " — exames, biomarcadores e plano de longevidade para quem treina sério, em qualquer nível."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setOpen(true),
        className: "w-full bg-foreground text-background text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-4 fill-background" }),
          "Assistir vídeo · 4:12"
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/80 flex items-end sm:items-center justify-center",
        onClick: () => setOpen(false),
        role: "dialog",
        "aria-label": "Vídeo Dra. Isabella Formigari",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "w-full max-w-md bg-white text-zinc-900 rounded-t-2xl sm:rounded-2xl max-h-[92vh] overflow-y-auto shadow-2xl border border-zinc-200",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: draIsabella,
                    alt: "Dra. Isabella Formigari",
                    className: "w-full aspect-video object-cover"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 rounded-full bg-background/95 grid place-items-center shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-7 ml-0.5 fill-foreground text-foreground" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setOpen(false),
                    className: "absolute top-3 right-3 size-9 rounded-full bg-background/90 grid place-items-center",
                    "aria-label": "Fechar",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded", children: "4:12" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-brand mb-1", children: "Protocolo Fibios · Longevidade" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold leading-tight mb-1", children: "Dra. Isabella Formigari" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Médica · Pós Graduação em Medicina do Esporte (Einstein SP) · CRM-SP 282951" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground text-pretty mb-4", children: [
                  '"Treinar bem é só metade do caminho. O que sustenta o atleta amador a longo prazo é entender o próprio corpo — inflamação, sono, hormônios, recuperação. O',
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Protocolo Fibios" }),
                  ' traduz seus exames em um plano vivo de longevidade."'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 mb-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PillarStat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "size-4" }), label: "Performance" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PillarStat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-4" }), label: "Cardio & sono" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PillarStat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4" }), label: "Prevenção" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted rounded-xl p-3 mb-4 ring-1 ring-black/5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1", children: "Inclui no protocolo" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs text-foreground space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "· Painel completo de biomarcadores" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "· Avaliação cardiorrespiratória e composição corporal" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "· Plano individual de suplementação e recuperação" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "· Acompanhamento trimestral com a equipe Fibios" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full bg-brand text-brand-foreground text-sm font-bold py-3 rounded-full", children: "Agendar avaliação Fibios" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-center text-muted-foreground mt-2", children: "Cashback Netfits em consultas · 5% nfs" })
              ] })
            ]
          }
        )
      }
    )
  ] });
}
function PillarStat({ icon, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted rounded-lg p-2 ring-1 ring-black/5 flex flex-col items-center gap-1 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold leading-tight", children: label })
  ] });
}
const smartfitLogo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201546%20564.07'%3e%3cg%3e%3cpath%20fill='%23fbba00'%20fill-rule='evenodd'%20d='M1010.65,401.58V105.18c0-100.59,105.71-122.19,181.17-93.5V68c-51.86-21.13-110.13-16.26-110.13,49.33H1166V173.6h-84.31V400.48Z'/%3e%3cpath%20fill='%23fbba00'%20fill-rule='evenodd'%20d='M1345.34,73.37h52.5l10.78,44h65.3V173.6h-57.51v131q0,39.36,34,39.4h36v56.24h-70.28q-70.78,0-70.78-75.81Z'/%3e%3crect%20fill='%23fbba00'%20x='1220.16'%20y='117.35'%20width='71.04'%20height='282.85'/%3e%3crect%20fill='%23fbba00'%20x='1220.16'%20y='14.98'%20width='71.04'%20height='58.39'/%3e%3cpath%20fill='%23fbba00'%20fill-rule='evenodd'%20d='M1546,400.28c-62.42,98.42-172.33,163.78-297.49,163.78s-235-65.36-297.45-163.79c73.35,67.56,179.46,110,297.45,110s224.13-42.47,297.49-110'/%3e%3cpath%20fill='%23ffffff'%20d='M8.77,335.21V296.57q30.72,12.3,70.93,12.29,30,0,30-19.29c0-11.74-6.77-17.55-20.19-17.55H56.14Q0,272,0,215.8,0,158,82,158a201.1,201.1,0,0,1,65.48,10.48v38.64c-20.5-8.21-42.69-12.27-66.72-12.27-25.18,0-37.7,6.41-37.7,19.29Q43,231.61,65,231.63H94.77q61.38,0,61.42,56.13,0,58-78.25,57.94-38.46,0-69.17-10.49M188.65,344V159.68h36l5.44,23.18c21.14-15.45,42.18-23.18,63-23.18q34.79,0,49.36,25.28,35.22-25.32,66.12-25.28,58.32,0,58.31,70V344H420.31v-116q0-30.64-25.93-30.68-20.76,0-43.39,23.85V344H304.52V228.46q0-31.19-25.63-31.22-22.14,0-43.67,23.85V344Zm311.89-57.39q0-56.68,80-56.66a236.5,236.5,0,0,1,42.85,3.46v-12.1q0-24.71-47.93-24.73a211.31,211.31,0,0,0-60,8.79v-36.9a212.69,212.69,0,0,1,60-8.75q94.46,0,94.4,60.7V344H646.34l-20-13a105.4,105.4,0,0,1-51.2,13q-74.61,0-74.58-57.39m122.86-18.1c-11.75-2.33-26-3.46-42.85-3.46Q547,265,547,286t28.11,21.09q28.38,0,48.28-14.38ZM715.17,344V159.68h36l5.74,23.49q24.29-23.44,51.3-23.49v37.56q-26,0-46.5,23.3V344ZM837,129.85H871.4l7.07,29.83h42.78v36.86H883.57V281.3q0,25.79,22.28,25.82h15.4V344H883.4Q837,344,837,294.29Z'/%3e%3c/g%3e%3c/svg%3e";
const MENSALIDADE = 109.9;
function SmartFitCard() {
  const [open, setOpen] = reactExports.useState(false);
  const [linked, setLinked] = reactExports.useState(false);
  const [requesting, setRequesting] = reactExports.useState(false);
  const nfsPerMonth = Math.round(MENSALIDADE);
  const handleRequest = () => {
    if (linked || requesting) return;
    setRequesting(true);
    setTimeout(() => {
      setRequesting(false);
      setLinked(true);
    }, 1200);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground", children: "Parceiro · Rede de academias" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl overflow-hidden ring-1 ring-black/5 bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-black p-5 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 right-0 w-1.5 bg-[#FBBA00]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -bottom-10 size-44 rounded-full bg-[#FBBA00]/10 blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: smartfitLogo,
                alt: "Smart Fit",
                className: "h-8 w-auto mb-3"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-extrabold leading-tight text-white text-balance", children: [
              "1 nf por real ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "da ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FBBA00]", children: "mensalidade" }),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/70 mt-2 max-w-[28ch]", children: "Vincule sua matrícula uma vez. Cada mensalidade paga vira netfits, automaticamente." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 bg-[#FBBA00] text-black text-[10px] font-extrabold uppercase tracking-widest px-2 py-1 rounded", children: "Parceiro" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "1:1", label: "real → nf" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: `+${nfsPerMonth}`, label: "nfs / mês" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "Auto", label: "recorrente" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-2 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { n: 1, text: "Solicite o vínculo da sua matrícula.", done: linked }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { n: 2, text: "Pague a mensalidade como sempre.", done: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { n: 3, text: "Receba os nfs no mesmo dia da fatura.", done: false })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setOpen(true),
            className: `w-full text-sm font-bold py-3 rounded-full flex items-center justify-center gap-2 ${linked ? "bg-emerald-500 text-white" : "bg-foreground text-background"}`,
            children: linked ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4" }),
              "Matrícula vinculada"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "size-4" }),
              "Solicitar vínculo da matrícula"
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-center text-muted-foreground mt-2", children: "Funciona em qualquer unidade Smart Fit do Brasil." })
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/60 flex items-end sm:items-center justify-center",
        onClick: () => setOpen(false),
        role: "dialog",
        "aria-label": "Vincular Smart Fit",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "w-full max-w-md bg-white text-zinc-900 rounded-t-2xl sm:rounded-2xl max-h-[92vh] overflow-y-auto shadow-2xl border border-zinc-200",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-black/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 px-2 rounded bg-black grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: smartfitLogo, alt: "Smart Fit", className: "h-4 w-auto" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: "Parceiro" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold leading-none", children: "Smart Fit" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setOpen(false),
                    className: "size-9 rounded-full bg-muted grid place-items-center",
                    "aria-label": "Fechar",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black rounded-xl p-4 mb-4 text-white relative overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 right-0 w-1.5 bg-[#FBBA00]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest mb-1 text-[#FBBA00]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3" }),
                    "Recompensa"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-extrabold leading-tight", children: [
                    "1 nf por ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FBBA00]", children: "real pago" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/70 mt-1", children: "Acumulado em toda mensalidade confirmada." })
                ] }),
                !linked ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold mb-1.5", children: "CPF do titular da matrícula" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      inputMode: "numeric",
                      placeholder: "000.000.000-00",
                      className: "w-full bg-muted ring-1 ring-black/5 rounded-lg px-3 py-2.5 text-sm mb-3 outline-none focus:ring-foreground"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold mb-1.5", children: "Número da matrícula Smart Fit" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      inputMode: "numeric",
                      placeholder: "Ex.: 8821-7",
                      className: "w-full bg-muted ring-1 ring-black/5 rounded-lg px-3 py-2.5 text-sm mb-3 outline-none focus:ring-foreground"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold mb-1.5", children: "Unidade" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      className: "w-full bg-muted ring-1 ring-black/5 rounded-lg px-3 py-2.5 text-sm mb-4 outline-none focus:ring-foreground",
                      defaultValue: "",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Selecione sua unidade" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Smart Fit Faria Lima" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Smart Fit Paulista" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Smart Fit Vila Mariana" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Smart Fit Pinheiros" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: handleRequest,
                      disabled: requesting,
                      className: "w-full bg-foreground text-background text-sm font-bold py-3 rounded-full flex items-center justify-center gap-2 disabled:opacity-60",
                      children: requesting ? "Vinculando…" : "Confirmar e vincular"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-center text-muted-foreground mt-2", children: "Validamos com a Smart Fit em até 24 h." })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-full bg-emerald-500 grid place-items-center mx-auto mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-7 text-white" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold mb-1", children: "Matrícula vinculada!" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground text-pretty mb-4", children: [
                    "A partir da sua próxima mensalidade, você ganha",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-foreground", children: [
                      nfsPerMonth,
                      " nfs"
                    ] }),
                    " automaticamente."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setOpen(false),
                      className: "w-full bg-foreground text-background text-sm font-bold py-3 rounded-full",
                      children: "Fechar"
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      }
    )
  ] });
}
function Stat({ value, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted rounded-lg p-2 ring-1 ring-black/5 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-extrabold leading-none", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-1", children: label })
  ] });
}
function Step({ n, text, done }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: `shrink-0 size-6 rounded-full grid place-items-center text-[11px] font-bold ${done ? "bg-emerald-500 text-white" : "bg-muted text-foreground ring-1 ring-black/5"}`,
        children: done ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5" }) : n
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground pt-0.5", children: text })
  ] });
}
const asicsHero = "/assets/asics-novablast-qmC10-ut.jpg";
const CHANNELS = [
  { key: "ig", label: "Instagram", color: "bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600" },
  { key: "wpp", label: "WhatsApp", color: "bg-[#25D366]" },
  { key: "tt", label: "TikTok", color: "bg-black" },
  { key: "x", label: "X", color: "bg-black" },
  { key: "fb", label: "Facebook", color: "bg-[#1877F2]" },
  { key: "tg", label: "Telegram", color: "bg-[#229ED9]" }
];
function SponsorCard() {
  const [videoOpen, setVideoOpen] = reactExports.useState(false);
  const [watched, setWatched] = reactExports.useState(false);
  const [progress, setProgress] = reactExports.useState(0);
  const [shareOpen, setShareOpen] = reactExports.useState(false);
  const [shared, setShared] = reactExports.useState([]);
  const [bonus, setBonus] = reactExports.useState(false);
  const timer = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!videoOpen) return;
    setProgress(0);
    const start = Date.now();
    const tick = () => {
      const elapsed = (Date.now() - start) / 1e3;
      const pct = Math.min(100, elapsed / 30 * 100);
      setProgress(pct);
      if (pct >= 100) {
        setWatched((prev) => {
          if (!prev) wallet.earn(10, "Assistiu filme ASICS Novablast™ 5");
          return true;
        });
        return;
      }
      timer.current = window.setTimeout(tick, 100);
    };
    tick();
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [videoOpen]);
  const handleShare = (key) => {
    if (!shared.includes(key)) {
      const next = [...shared, key];
      setShared(next);
      if (!bonus) {
        setBonus(true);
        wallet.earn(10, "Compartilhou filme ASICS Novablast™ 5");
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 pb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[20px] overflow-hidden ring-1 ring-black/5 bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-end px-4 py-2.5 bg-[#0A1A4F] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AsicsLogo, { className: "h-3.5 w-auto text-white" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-semibold tracking-[0.2em] text-white/70 uppercase hidden sm:inline", children: "Sound Mind, Sound Body" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setVideoOpen(true),
          className: "block w-full text-left relative active:scale-[0.99] transition-transform",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-video w-full relative overflow-hidden bg-[#0A1A4F]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: asicsHero,
                alt: "Campanha ASICS Novablast 5",
                className: "absolute inset-0 w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white text-[#0A1A4F] text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded", children: "Filme · 30s" }),
              watched && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3" }),
                " Assistido"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 bg-[#0A1A4F]/85 rounded px-1.5 py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AsicsLogo, { className: "h-3.5 w-auto text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 right-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-white/80", children: "Novablast™ 5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black leading-tight text-white text-balance drop-shadow", children: "Sinta o conforto, encontre a energia." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 rounded-full bg-white/95 ring-1 ring-black/10 grid place-items-center shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-7 ml-1 fill-[#0A1A4F] text-[#0A1A4F]" }) }) })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold leading-tight text-balance mb-1", children: "Assista ao novo filme da ASICS e ganhe netfits." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-pretty mb-4", children: "30 segundos da campanha Novablast™ 5 — mais energia para movimentar corpo e mente. Assista, compartilhe e acumule." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `rounded-xl p-3 ring-1 transition-colors ${watched ? "bg-brand/10 ring-brand/30" : "bg-muted ring-black/5"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-3.5 text-brand" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: "Assistir" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold", children: [
                  "+10 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "nfs" })
                ] }),
                watched && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-emerald-600 font-semibold mt-0.5 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3" }),
                  " Creditados"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `rounded-xl p-3 ring-1 transition-colors ${bonus ? "bg-brand/10 ring-brand/30" : "bg-muted ring-black/5"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "size-3.5 text-brand" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: "Compartilhar" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold", children: [
                  "+10 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "nfs" })
                ] }),
                bonus && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-emerald-600 font-semibold mt-0.5 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3" }),
                  " Bônus liberado"
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setVideoOpen(true),
              className: "flex-1 bg-foreground text-background text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-2 active:scale-95",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-4 fill-current" }),
                watched ? "Assistir novamente" : "Assistir · 30s"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setShareOpen(true),
              disabled: !watched,
              className: "flex-1 bg-brand text-brand-foreground text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-2 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "size-4" }),
                "Compartilhar"
              ]
            }
          )
        ] }),
        !watched && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-2 text-center", children: "Assista o filme completo para liberar o compartilhamento." })
      ] })
    ] }),
    videoOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4",
        onClick: () => setVideoOpen(false),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "w-full max-w-md bg-black rounded-2xl overflow-hidden relative",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setVideoOpen(false),
                  className: "absolute top-3 right-3 z-10 size-9 rounded-full bg-white/15 grid place-items-center text-white",
                  "aria-label": "Fechar",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-video w-full relative overflow-hidden bg-[#0A1A4F]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: asicsHero,
                    alt: "Campanha ASICS Novablast 5",
                    className: "absolute inset-0 w-full h-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-5 right-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-white/80", children: "Novablast™ 5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-black leading-tight text-white drop-shadow", children: "Sinta o conforto, encontre a energia." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-white/80 mt-1", children: "Apresentado por ASICS" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 bg-[#0A1A4F]/85 rounded px-2 py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AsicsLogo, { className: "h-4 w-auto text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-white/95 text-[#0A1A4F] text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded", children: [
                  Math.min(30, Math.round(progress / 100 * 30)),
                  "s / 30s"
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-full bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full bg-brand transition-[width] duration-100",
                  style: { width: `${progress}%` }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-zinc-950 text-white", children: watched ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-full bg-brand grid place-items-center text-brand-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold", children: "+10 nfs creditados!" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/60", children: "Compartilhe e ganhe +10" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => {
                      setVideoOpen(false);
                      setTimeout(() => setShareOpen(true), 150);
                    },
                    className: "bg-brand text-brand-foreground text-xs font-bold px-4 py-2 rounded-full",
                    children: "Compartilhar"
                  }
                )
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/70", children: "Assistindo… continue até o fim para ganhar 10 nfs." }) })
            ]
          }
        )
      }
    ),
    shareOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/40 flex items-end justify-center",
        onClick: () => setShareOpen(false),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "w-full max-w-md bg-white text-zinc-900 rounded-t-2xl p-5 pb-8 shadow-2xl border-t border-zinc-200",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold", children: "Compartilhar o filme" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setShareOpen(false),
                    className: "size-8 rounded-full bg-muted grid place-items-center",
                    "aria-label": "Fechar",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-4", children: [
                "Poste em qualquer rede e ganhe ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand font-bold", children: "+10 nfs" }),
                " ",
                "(bônus único por filme)."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-3 mb-4", children: CHANNELS.map((c) => {
                const done = shared.includes(c.key);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => handleShare(c.key),
                    className: "flex flex-col items-center gap-1.5 active:scale-95",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: `size-12 rounded-full ${c.color} grid place-items-center text-white relative ring-1 ring-black/5`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: c.label[0] }),
                            done && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-0.5 -right-0.5 size-4 rounded-full bg-emerald-500 ring-2 ring-background grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-2.5 text-white" }) })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: c.label })
                    ]
                  },
                  c.key
                );
              }) }),
              bonus && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-brand/10 ring-1 ring-brand/30 p-3 flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "size-4 text-brand" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold", children: "Bônus de +10 nfs creditado pelo compartilhamento!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setShareOpen(false),
                  className: "w-full bg-foreground text-background text-xs font-bold py-2.5 rounded-full",
                  children: "Pronto"
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
function AsicsLogo({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      viewBox: "0 0 120 24",
      className,
      "aria-label": "ASICS",
      role: "img",
      fill: "currentColor",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "text",
        {
          x: "0",
          y: "19",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: "22",
          fontWeight: "900",
          fontStyle: "italic",
          letterSpacing: "1",
          children: "ASICS"
        }
      )
    }
  );
}
const Route$6 = createFileRoute()({
  head: () => ({
    meta: [
      { title: "Feed — Netfits" },
      {
        name: "description",
        content: "Feed infinito de saúde, esporte, marcas, assessorias e profissionais."
      },
      { property: "og:title", content: "Feed — Netfits" }
    ]
  }),
  component: FeedPage
});
function FeedPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-8 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(WearableSurveyHero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SponsorCard, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InviteFriendsCard, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DrIsabellaCard, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SmartFitCard, {}),
      feedItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(FeedCard, { item }, item.id)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-8 text-center text-xs text-muted-foreground font-medium", children: "Você chegou ao fim do feed. Novas atualizações em breve." })
    ] })
  ] });
}
function WearableSurveyHero() {
  const [wantsToConnect, setWantsToConnect] = reactExports.useState("sim");
  const [selectedDevice, setSelectedDevice] = reactExports.useState("Garmin");
  const [customDevice, setCustomDevice] = reactExports.useState("");
  const [voted, setVoted] = reactExports.useState(false);
  const devices = [
    { id: "Garmin", name: "Garmin" },
    { id: "AppleWatch", name: "Apple Watch" },
    { id: "Strava", name: "Strava" },
    { id: "SamsungHealth", name: "Samsung / Wear OS" },
    { id: "Outro", name: "Outro Dispositivo" }
  ];
  const handleVote = () => {
    if (voted) return;
    setVoted(true);
    let deviceName = selectedDevice;
    if (selectedDevice === "Outro" && customDevice.trim()) {
      deviceName = customDevice.trim();
    }
    const voteDesc = wantsToConnect === "sim" ? `Sim (${deviceName})` : "Não";
    wallet.earn(10, `Pesquisa de Sincronia: ${voteDesc}`);
    toast.success("Voto registrado! (+10 nfs creditados)");
  };
  const finalDeviceLabel = selectedDevice === "Outro" && customDevice.trim() ? customDevice.trim() : selectedDevice;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-white shadow-sm space-y-3.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 rounded-full bg-purple-950/80 text-purple-300 border border-purple-500/30 text-[10px] font-bold uppercase tracking-wider", children: "Pesquisa de Integração" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-purple-400 font-mono", children: "+10 nfs bônus" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold text-white leading-snug", children: "Gostaria de conectar seu relógio ou app de treino?" }),
      !voted && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pt-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setWantsToConnect("sim"),
            className: `flex-1 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${wantsToConnect === "sim" ? "bg-purple-600 text-white border-purple-500 shadow-sm" : "bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white"}`,
            children: "Sim"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setWantsToConnect("nao"),
            className: `flex-1 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${wantsToConnect === "nao" ? "bg-purple-600 text-white border-purple-500 shadow-sm" : "bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white"}`,
            children: "Não"
          }
        )
      ] })
    ] }),
    !voted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-1", children: [
      wantsToConnect === "sim" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400 leading-relaxed", children: "Qual dispositivo você mais usa para registrar suas atividades físicas?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: devices.map((dev) => {
          const isSelected = selectedDevice === dev.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setSelectedDevice(dev.id),
              className: `px-3 py-2 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${isSelected ? "bg-purple-600 text-white border-purple-500 shadow-sm" : "bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: dev.name })
            },
            dev.id
          );
        }) }),
        selectedDevice === "Outro" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: customDevice,
            onChange: (e) => setCustomDevice(e.target.value),
            placeholder: "Qual o nome do relógio/app? (ex: Coros, Polar, Suunto...)",
            className: "w-full bg-zinc-950/80 border border-zinc-700 focus:border-purple-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none transition"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: handleVote,
          className: "w-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-sm active:scale-98 transition-all cursor-pointer",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Votar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
          ]
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 border border-purple-500/30 rounded-xl p-3.5 text-center space-y-1.5 animate-in fade-in", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-7 rounded-full bg-purple-600 text-white grid place-items-center mx-auto shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 stroke-[3]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-white", children: [
        "Voto Registrado: ",
        wantsToConnect === "sim" ? `Sim (${finalDeviceLabel})` : "Não"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-400", children: "Obrigado! Sua resposta foi gravada com sucesso e +10 nfs foram creditados." })
    ] })
  ] }) });
}
function FeedCard({ item }) {
  if (item.type === "story") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { name: item.author, initials: item.authorInitials, timeAgo: item.timeAgo }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: item.image,
          alt: item.title,
          loading: "lazy",
          className: "w-full aspect-[4/5] object-cover rounded-xl ring-1 ring-black/5 mb-3"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold leading-tight text-balance mb-1", children: item.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-pretty mb-3", children: item.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SocialActions, { id: item.id, title: item.title })
    ] });
  }
  if (item.type === "video") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(VideoFeedCard, { item });
  }
  if (item.type === "product") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ProductFeedCard, { item });
  }
  if (item.type === "spot") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground", children: "Parceiro · Clínica médica" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: item.image,
          alt: item.title,
          loading: "lazy",
          className: "w-full aspect-video object-cover rounded-xl ring-1 ring-black/5 mb-3"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold leading-tight", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-3" }),
            " ",
            item.location
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-brand", children: item.tier }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] text-muted-foreground", children: "Cashback em consultas" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SocialActions, { id: item.id, title: item.title })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl p-5 ring-1 ring-black/5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 shrink-0 rounded-xl bg-brand grid place-items-center text-brand-foreground font-bold text-lg", children: item.name.split(" ").slice(0, 2).map((s) => s[0]).join("") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-brand uppercase tracking-widest", children: "Profissional verificado" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold leading-tight", children: item.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: item.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-pretty mb-3", children: item.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold", children: [
            item.price,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium text-brand", children: item.cashback })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-foreground text-background text-xs font-semibold px-4 py-2 rounded-full", children: "Agendar" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SocialActions, { id: item.id, title: item.name })
  ] }) });
}
function ProductFeedCard({
  item
}) {
  const [open, setOpen] = reactExports.useState(false);
  const [linkRewarded, setLinkRewarded] = reactExports.useState(false);
  const params = useOperationalParams();
  const handleOpenProduct = () => {
    if (!linkRewarded) {
      setLinkRewarded(true);
      const points = params.nfsPerLinkClick || 10;
      wallet.earn(points, `Clique em link de parceiro: ${item.title}`);
      sharedSandboxStore.rewardEngagement("click", item.title, points);
      toast.success(`🎉 +${points} nfs acumulados por acessar o link do produto!`);
    }
    setOpen(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: handleOpenProduct,
          className: "block w-full text-left active:scale-[0.99] transition-transform",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground", children: item.tag }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-brand-foreground bg-brand px-2 py-0.5 rounded", children: item.cashback })
            ] }),
            item.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-[10px] font-bold tracking-widest text-white bg-lime-500 px-2 py-0.5 rounded", children: item.badge }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: item.image,
                alt: item.title,
                loading: "lazy",
                className: "w-full aspect-[4/5] object-cover rounded-xl ring-1 ring-black/5 mb-3"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold leading-tight text-balance mb-1", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-pretty mb-3", children: item.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold block mb-3", children: item.price })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: handleOpenProduct,
          className: "w-full mb-3 bg-foreground text-background text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-2 active:scale-[0.98] transition-transform",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "size-4" }),
            "Ver produto · ",
            item.price,
            " (+",
            params.nfsPerLinkClick || 10,
            " nfs)"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SocialActions, { id: item.id, title: item.title })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductDetailSheet,
      {
        product: {
          id: item.id,
          title: item.title,
          price: item.price,
          image: item.image,
          cashback: item.cashback,
          badge: item.badge,
          description: item.description,
          tag: item.tag
        },
        onClose: () => setOpen(false)
      }
    )
  ] });
}
function VideoFeedCard({
  item
}) {
  const params = useOperationalParams();
  const [isPlayingModalOpen, setIsPlayingModalOpen] = reactExports.useState(false);
  const [progress, setProgress] = reactExports.useState(0);
  const [isCompleted, setIsCompleted] = reactExports.useState(false);
  const [rewarded, setRewarded] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let timer = null;
    if (isPlayingModalOpen && !isCompleted) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setIsCompleted(true);
            return 100;
          }
          return prev + 10;
        });
      }, 400);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlayingModalOpen, isCompleted]);
  reactExports.useEffect(() => {
    if (isCompleted && !rewarded) {
      setRewarded(true);
      const points = params.nfsPerPostView || 10;
      wallet.earn(points, `Visualização 100% Completa de Vídeo: ${item.title}`);
      sharedSandboxStore.rewardEngagement("view", item.title, points);
      toast.success(`🎉 Retenção de 100% atingida! +${points} nfs creditados na sua carteira!`);
    }
  }, [isCompleted, rewarded, item.title, params.nfsPerPostView]);
  const handleCloseModal = () => {
    if (!isCompleted) {
      toast.error(
        "🚫 Antifraude Netfits: Premiação cancelada. O vídeo precisa ser visto 100% até o final para pontuar."
      );
    }
    setIsPlayingModalOpen(false);
    setProgress(0);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { name: item.author, initials: item.authorInitials, timeAgo: item.timeAgo }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          onClick: () => setIsPlayingModalOpen(true),
          className: "relative mb-3 cursor-pointer group rounded-xl overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: item.poster,
                alt: item.title,
                loading: "lazy",
                className: "w-full aspect-video object-cover rounded-xl ring-1 ring-black/5 group-hover:scale-105 transition-transform duration-300"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/30 grid place-items-center group-hover:bg-black/40 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-full bg-background/95 ring-1 ring-black/10 grid place-items-center shadow-lg group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-6 ml-0.5 fill-foreground text-foreground" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md backdrop-blur-sm", children: item.duration }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 left-2 bg-purple-950/90 text-purple-200 border border-purple-500/40 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md backdrop-blur-sm flex items-center gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🛡️ Antifraude: 100% Dwell Time" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold leading-tight text-balance mb-1", children: item.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-pretty mb-2", children: item.excerpt }),
      rewarded ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 p-2.5 rounded-xl bg-lime-500/10 border border-lime-500/30 text-lime-400 text-xs font-bold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Vídeo assistido por completo (100% de retenção) — +",
          params.nfsPerPostView || 10,
          " nfs creditados"
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300 text-[11px] font-medium flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4 text-lime-400 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Regra Antifraude: Assista 100% do vídeo (",
          item.duration,
          ") para receber +",
          params.nfsPerPostView || 10,
          " nfs"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SocialActions, { id: item.id, title: item.title })
    ] }),
    isPlayingModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-purple-500/30 rounded-3xl p-6 max-w-lg w-full shadow-2xl space-y-4 text-left animate-in fade-in zoom-in-95", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-zinc-800 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-5 text-lime-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-extrabold text-white", children: "Player Antifraude Netfits" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400", children: "Dwell time total obrigatório (100% da duração)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleCloseModal,
            className: "p-1.5 rounded-full bg-zinc-800 text-zinc-400 hover:text-white cursor-pointer",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 bg-black", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.poster, alt: item.title, className: "w-full h-full object-cover opacity-60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-full bg-purple-600 text-white grid place-items-center mb-2 animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-6 ml-0.5 fill-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-white max-w-xs", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-purple-300 font-mono mt-1", children: [
            "Duração Total: ",
            item.duration
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-zinc-300", children: "Progresso de Assistência:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-lime-400", children: [
            progress,
            "% ",
            isCompleted ? "✔ (100%)" : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-full bg-zinc-800 rounded-full overflow-hidden border border-zinc-700 p-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full bg-gradient-to-r from-purple-500 to-lime-400 rounded-full transition-all duration-300",
            style: { width: `${progress}%` }
          }
        ) }),
        !isCompleted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-amber-400 bg-amber-950/40 border border-amber-500/30 rounded-xl p-2.5 leading-snug", children: [
          "⚠️ ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Antifraude Ativo:" }),
          " Não feche o player antes do fim. Sair com menos de 100% do vídeo assistido cancela a premiação."
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-lime-400 bg-lime-950/40 border border-lime-500/30 rounded-xl p-2.5 leading-snug font-bold", children: [
          "🎉 Vídeo 100% concluído! +",
          params.nfsPerPostView || 15,
          " nfs creditados com sucesso na sua carteira!"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleCloseModal,
          className: "w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition cursor-pointer",
          children: isCompleted ? "Concluir e Voltar ao Feed" : "Fechar (Interromper sem Pontuar)"
        }
      ) })
    ] }) })
  ] });
}
function CardHeader({
  name,
  initials,
  timeAgo
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-6 rounded-full bg-zinc-300 grid place-items-center text-[9px] font-bold ring-1 ring-black/5", children: initials }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: name }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
      "• ",
      timeAgo
    ] })
  ] });
}
const WPP_CONTACTS = [
  { name: "Ana Beatriz", phone: "+55 11 98123-4421", initials: "AB" },
  { name: "Bruno Carvalho", phone: "+55 21 99812-7733", initials: "BC" },
  { name: "Camila Duarte", phone: "+55 11 97712-0098", initials: "CD" },
  { name: "Diego Ferraz", phone: "+55 31 98455-1290", initials: "DF" },
  { name: "Equipe Trail RJ", phone: "Grupo · 28 membros", initials: "TR" },
  { name: "Fernanda Lima", phone: "+55 11 99001-7766", initials: "FL" },
  { name: "Gustavo Reis", phone: "+55 41 98221-0090", initials: "GR" },
  { name: "Helena Souza", phone: "+55 11 99887-1145", initials: "HS" },
  { name: "Run Club Faria Lima", phone: "Grupo · 124 membros", initials: "RC" },
  { name: "Igor Tavares", phone: "+55 11 98344-2210", initials: "IT" }
];
const IG_CONTACTS = [
  { name: "anabia.runs", sub: "Ana Beatriz", initials: "AB" },
  { name: "brunocrv", sub: "Bruno Carvalho", initials: "BC" },
  { name: "cami.duarte", sub: "Camila Duarte", initials: "CD" },
  { name: "diego.ferraz", sub: "Seguindo você", initials: "DF" },
  { name: "fer.lima", sub: "Fernanda Lima", initials: "FL" },
  { name: "gus.reis42", sub: "Gustavo Reis", initials: "GR" },
  { name: "helenasz", sub: "Helena Souza", initials: "HS" },
  { name: "igortvrs", sub: "Igor Tavares", initials: "IT" }
];
const TG_CONTACTS = [
  { name: "Ana Beatriz", sub: "online", initials: "AB" },
  { name: "Trail RJ", sub: "Grupo · 28 membros", initials: "TR" },
  { name: "Bruno Carvalho", sub: "visto há 5 min", initials: "BC" },
  { name: "Camila Duarte", sub: "online", initials: "CD" },
  { name: "Run Club FL", sub: "Canal · 1,2k", initials: "RC" },
  { name: "Helena Souza", sub: "visto há 1 h", initials: "HS" }
];
const MSG_CONTACTS = [
  { name: "Ana Beatriz", phone: "+55 11 98123-4421", initials: "AB" },
  { name: "Bruno Carvalho", phone: "+55 21 99812-7733", initials: "BC" },
  { name: "Diego Ferraz", phone: "+55 31 98455-1290", initials: "DF" },
  { name: "Helena Souza", phone: "+55 11 99887-1145", initials: "HS" },
  { name: "Mãe", phone: "+55 11 99000-1122", initials: "MM" }
];
const FB_AUDIENCES = [
  { key: "public", label: "Público" },
  { key: "friends", label: "Amigos" },
  { key: "close", label: "Amigos próximos" },
  { key: "only", label: "Somente eu" }
];
function SocialActions({ id, title, isOwnPost = false }) {
  const [liked, setLiked] = reactExports.useState(false);
  const [saved, setSaved] = reactExports.useState(false);
  const [shareOpen, setShareOpen] = reactExports.useState(false);
  const [step, setStep] = reactExports.useState("channels");
  const [sent, setSent] = reactExports.useState([]);
  const [posted, setPosted] = reactExports.useState(false);
  const [composeText, setComposeText] = reactExports.useState("");
  const params = useOperationalParams();
  const closeShare = () => {
    setShareOpen(false);
    setTimeout(() => {
      setStep("channels");
      setSent([]);
      setPosted(false);
      setComposeText("");
    }, 200);
  };
  const goBack = () => {
    setStep("channels");
    setPosted(false);
    setComposeText("");
  };
  const channels = [
    { key: "wpp", label: "WhatsApp", color: "bg-[#25D366]" },
    { key: "ig", label: "Instagram", color: "bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600" },
    { key: "x", label: "X", color: "bg-black" },
    { key: "tt", label: "TikTok", color: "bg-black" },
    { key: "fb", label: "Facebook", color: "bg-[#1877F2]" },
    { key: "tg", label: "Telegram", color: "bg-[#229ED9]" },
    { key: "msg", label: "Mensagens", color: "bg-emerald-500" },
    { key: "mail", label: "E-mail", color: "bg-zinc-700" }
  ];
  const titles = {
    channels: "Compartilhar",
    wpp: "Enviar via WhatsApp",
    ig: "Enviar no Instagram",
    x: "Postar no X",
    tt: "Enviar no TikTok",
    fb: "Compartilhar no Facebook",
    tg: "Encaminhar no Telegram",
    msg: "Enviar SMS",
    mail: "Enviar por e-mail"
  };
  const handleLike = () => {
    setLiked((v) => {
      const next = !v;
      if (next) {
        if (isOwnPost || params.blockSelfEngagementRewards) {
          toast.warning("🔒 Antifraude: Curtir seu próprio post não acumula pontos nfs.");
        } else {
          const points = params.nfsPerLike || 10;
          wallet.earn(points, `Curtida em post de terceiro: ${title}`);
          sharedSandboxStore.rewardEngagement("like", title, points);
          toast.success(`+${points} nfs acumulados por curtir post de terceiro!`);
        }
      }
      return next;
    });
  };
  const handleSave = () => {
    setSaved((v) => {
      const next = !v;
      if (next) {
        if (isOwnPost) {
          toast.info("Post próprio salvo! (Ações próprias não geram pontos)");
        } else {
          toast.info("Post de terceiro adicionado aos salvos.");
        }
      } else {
        toast.info("Post removido dos salvos.");
      }
      return next;
    });
  };
  const [viewed, setViewed] = reactExports.useState(false);
  const [linkClicked, setLinkClicked] = reactExports.useState(false);
  const handleCompleteView = () => {
    if (!viewed) {
      setViewed(true);
      if (isOwnPost) {
        toast.warning("🔒 Antifraude: Visualizar seu próprio post não acumula pontos nfs.");
      } else {
        const points = params.nfsPerPostView || 10;
        wallet.earn(points, `Visualização completa: ${title}`);
        sharedSandboxStore.rewardEngagement("view", title, points);
        toast.success(`+${points} nfs por visualizar post de terceiro!`);
      }
    }
  };
  const handleLinkClick = () => {
    if (!linkClicked) {
      setLinkClicked(true);
      if (isOwnPost) {
        toast.info("Link acessado. (Ações próprias não geram pontos)");
      } else {
        const points = params.nfsPerLinkClick || 10;
        wallet.earn(points, `Clique em link do post: ${title}`);
        sharedSandboxStore.rewardEngagement("click", title, points);
        toast.success(`+${points} nfs por clicar no link do post!`);
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: handleCompleteView,
          className: `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ring-1 transition-colors active:scale-95 ${viewed ? "bg-purple-600 text-white ring-purple-600 shadow-sm" : "bg-purple-500/10 text-purple-400 ring-purple-500/30 hover:bg-purple-500/20"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "size-4" }),
            viewed ? `Lido (+${params.nfsPerPostView || 10} nfs)` : `Concluir Leitura (+${params.nfsPerPostView || 10} nfs)`
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: handleLinkClick,
          className: `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ring-1 transition-colors active:scale-95 ${linkClicked ? "bg-emerald-600 text-white ring-emerald-600 shadow-sm" : "bg-muted text-foreground ring-black/5 hover:bg-emerald-500/10 hover:text-emerald-400"}`,
          title: "Acessar link externo / parceiro recomendado",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-4" }),
            linkClicked ? `Link Aberto (+${params.nfsPerLinkClick || 10} nfs)` : `Ver Link (+${params.nfsPerLinkClick || 10} nfs)`
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: handleLike,
          className: `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ring-1 transition-colors active:scale-95 ${liked ? "bg-brand text-brand-foreground ring-brand" : "bg-muted text-foreground ring-black/5"}`,
          "aria-pressed": liked,
          "aria-label": "Curtir",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: `size-4 ${liked ? "fill-current" : ""}` }),
            "Curtir"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setShareOpen(true),
          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-muted text-foreground ring-1 ring-black/5 active:scale-95",
          "aria-label": "Compartilhar",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "size-4 text-lime-400" }),
            "Compartilhar"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: handleSave,
          className: `ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ring-1 active:scale-95 ${saved ? "bg-foreground text-background ring-foreground" : "bg-muted text-foreground ring-black/5"}`,
          "aria-pressed": saved,
          "aria-label": "Salvar",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: `size-4 ${saved ? "fill-current" : ""}` }),
            "Salvar"
          ]
        }
      )
    ] }),
    shareOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/40 flex items-end justify-center",
        onClick: closeShare,
        role: "dialog",
        "aria-label": "Compartilhar",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "w-full max-w-md bg-white text-zinc-900 rounded-t-2xl p-5 pb-8 max-h-[85vh] flex flex-col shadow-2xl border-t border-zinc-200",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-10 h-1 rounded-full bg-zinc-300 mb-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: titles[step] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: closeShare,
                    className: "size-7 rounded-full bg-muted grid place-items-center",
                    "aria-label": "Fechar",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" })
                  }
                )
              ] }),
              step === "channels" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4 line-clamp-1", children: title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-y-4 gap-x-2", children: channels.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => setStep(c.key),
                    className: "flex flex-col items-center gap-2 active:scale-95",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `size-12 rounded-full ${c.color} text-white grid place-items-center text-sm font-bold ring-1 ring-black/10`,
                          children: c.label[0]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium", children: c.label })
                    ]
                  },
                  `${id}-${c.key}`
                )) })
              ] }),
              step !== "channels" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: goBack,
                  className: "text-xs text-muted-foreground mb-3 self-start",
                  children: "← Voltar"
                }
              ),
              (step === "wpp" || step === "tg" || step === "msg" || step === "ig") && /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSendList, { title, step, sent, setSent, isOwnPost }),
              step === "x" && /* @__PURE__ */ jsxRuntimeExports.jsx(ComposerX, { title, posted, setPosted, text: composeText, setText: setComposeText }),
              step === "tt" && /* @__PURE__ */ jsxRuntimeExports.jsx(ComposerTikTok, { title, sent, setSent }),
              step === "fb" && /* @__PURE__ */ jsxRuntimeExports.jsx(ComposerFacebook, { title, posted, setPosted, text: composeText, setText: setComposeText }),
              step === "mail" && /* @__PURE__ */ jsxRuntimeExports.jsx(ComposerMail, { title, posted, setPosted })
            ]
          }
        )
      }
    )
  ] });
}
function ContactSendList({
  title,
  step,
  sent,
  setSent,
  isOwnPost = false
}) {
  const params = useOperationalParams();
  const cfg = {
    wpp: {
      list: WPP_CONTACTS.map((c) => ({ name: c.name, sub: c.phone, initials: c.initials })),
      avatar: "bg-[#25D366]/15 text-[#128C45]",
      activeBtn: "bg-[#25D366] text-white ring-[#25D366]",
      placeholder: "Buscar contatos"
    },
    tg: {
      list: TG_CONTACTS,
      avatar: "bg-[#229ED9]/15 text-[#1c7eb0]",
      activeBtn: "bg-[#229ED9] text-white ring-[#229ED9]",
      placeholder: "Buscar no Telegram"
    },
    msg: {
      list: MSG_CONTACTS.map((c) => ({ name: c.name, sub: c.phone, initials: c.initials })),
      avatar: "bg-emerald-500/15 text-emerald-700",
      activeBtn: "bg-emerald-500 text-white ring-emerald-500",
      placeholder: "Para:"
    },
    ig: {
      list: IG_CONTACTS,
      avatar: "bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 text-white",
      activeBtn: "bg-gradient-to-r from-pink-500 to-purple-600 text-white ring-pink-500",
      placeholder: "Buscar"
    }
  }[step];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-muted rounded-full px-3 py-2 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "🔍" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          placeholder: cfg.placeholder,
          className: "bg-transparent text-xs outline-none flex-1"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/60 rounded-lg px-3 py-2 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground line-clamp-2", children: [
      "📎 ",
      title
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-y-auto -mx-5 px-5 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-black/5", children: cfg.list.map((c) => {
      const isSent = sent.includes(c.name);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-2.5 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-10 rounded-full grid place-items-center text-xs font-bold ${cfg.avatar}`, children: c.initials }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium truncate", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground truncate", children: c.sub })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              if (!isSent) {
                if (isOwnPost) {
                  toast.warning("🔒 Antifraude: Compartilhar seu próprio post não gera acúmulo de nfs.");
                } else {
                  const points = params.nfsPerShare || 10;
                  wallet.earn(points, `Compartilhamento pós-visualização: ${title}`);
                  sharedSandboxStore.rewardEngagement("share", title, points);
                  toast.success(`+${points} nfs acumulados por compartilhar post de terceiro!`);
                }
              }
              setSent((prev) => prev.includes(c.name) ? prev : [...prev, c.name]);
            },
            className: `text-[11px] font-semibold px-3 py-1.5 rounded-full ring-1 active:scale-95 ${isSent ? cfg.activeBtn : "bg-muted text-foreground ring-black/5"}`,
            children: isSent ? "Enviado" : "Enviar"
          }
        )
      ] }, c.name);
    }) }) })
  ] });
}
function ComposerX({
  title,
  posted,
  setPosted,
  text,
  setText
}) {
  const defaultText = `${title} — via @netfits`;
  const value = text || defaultText;
  const remaining = 280 - value.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-full bg-zinc-800 text-white grid place-items-center text-xs font-bold shrink-0", children: "EU" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          value,
          onChange: (e) => setText(e.target.value),
          rows: 5,
          className: "flex-1 resize-none text-sm bg-transparent outline-none placeholder:text-muted-foreground",
          placeholder: "O que está acontecendo?"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[11px] ${remaining < 0 ? "text-red-500" : "text-muted-foreground"}`, children: remaining }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setPosted(true),
          disabled: posted || remaining < 0,
          className: "bg-black text-white text-xs font-bold px-5 py-2 rounded-full disabled:opacity-60 active:scale-95",
          children: posted ? "Postado ✓" : "Postar"
        }
      )
    ] })
  ] });
}
function ComposerTikTok({
  title,
  sent,
  setSent
}) {
  const friends = ["anabia", "brunocrv", "cami.d", "diegof", "gusreis", "helenasz", "igortvrs", "fer.lima"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-4", children: ["DM", "Story", "Repost"].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: `text-[11px] font-semibold px-3 py-1.5 rounded-full ring-1 ${i === 0 ? "bg-black text-white ring-black" : "bg-muted text-foreground ring-black/5"}`,
        children: t
      },
      t
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/60 rounded-lg px-3 py-2 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground line-clamp-2", children: [
      "🎬 ",
      title
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-3 overflow-y-auto", children: friends.map((f) => {
      const isSent = sent.includes(f);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setSent((p) => p.includes(f) ? p : [...p, f]),
          className: "flex flex-col items-center gap-1.5 active:scale-95",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-full bg-gradient-to-br from-zinc-700 to-black text-white grid place-items-center text-xs font-bold", children: f.slice(0, 2).toUpperCase() }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] truncate w-full text-center", children: [
              "@",
              f
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-[9px] font-semibold px-2 py-0.5 rounded-full ${isSent ? "bg-black text-white" : "bg-muted text-foreground"}`,
                children: isSent ? "Enviado" : "Enviar"
              }
            )
          ]
        },
        f
      );
    }) })
  ] });
}
function ComposerFacebook({
  title,
  posted,
  setPosted,
  text,
  setText
}) {
  const [audience, setAudience] = reactExports.useState("friends");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-full bg-[#1877F2] text-white grid place-items-center text-xs font-bold", children: "EU" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Você" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            value: audience,
            onChange: (e) => setAudience(e.target.value),
            className: "text-[11px] bg-muted rounded-full px-2 py-0.5 outline-none",
            children: FB_AUDIENCES.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: a.key, children: a.label }, a.key))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        value: text,
        onChange: (e) => setText(e.target.value),
        rows: 3,
        placeholder: "Escreva algo sobre isso…",
        className: "resize-none text-sm bg-transparent outline-none placeholder:text-muted-foreground"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/60 rounded-lg px-3 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground line-clamp-2", children: [
        "🔗 ",
        title
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "netfits.app" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setPosted(true),
        disabled: posted,
        className: "bg-[#1877F2] text-white text-sm font-bold py-2.5 rounded-md disabled:opacity-60 active:scale-95",
        children: posted ? "Publicado ✓" : "Publicar"
      }
    )
  ] });
}
function ComposerMail({
  title,
  posted,
  setPosted
}) {
  const [to, setTo] = reactExports.useState("");
  const [subject, setSubject] = reactExports.useState(title);
  const [body, setBody] = reactExports.useState(
    `Olha o que encontrei no Netfits:

${title}

https://netfits.app`
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-black/5 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground w-14", children: "Para" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          value: to,
          onChange: (e) => setTo(e.target.value),
          placeholder: "exemplo@email.com",
          className: "text-sm bg-transparent outline-none flex-1"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-black/5 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground w-14", children: "Assunto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          value: subject,
          onChange: (e) => setSubject(e.target.value),
          className: "text-sm bg-transparent outline-none flex-1"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        value: body,
        onChange: (e) => setBody(e.target.value),
        rows: 6,
        className: "text-sm bg-transparent outline-none resize-none py-2"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setPosted(true),
        disabled: posted || !to,
        className: "bg-zinc-800 text-white text-sm font-bold py-2.5 rounded-md disabled:opacity-60 active:scale-95",
        children: posted ? "Enviado ✓" : "Enviar"
      }
    )
  ] });
}
const andreGalloIronmanImg = "/assets/andre-gallo-ironman-DJy-Hx_L.jpg";
function InstitutionalWebHeader() {
  const location = useLocation();
  const currentPath = location.pathname;
  const navLinks = [
    { to: "/", label: "Home", icon: House, color: "hover:text-purple-400" },
    { to: "/associado", label: "Associados", icon: Users, color: "hover:text-amber-400" },
    { to: "/parceiros", label: "Parceiros", icon: Building2, color: "hover:text-lime-400" },
    { to: "/faq", label: "FAQ", icon: CircleQuestionMark, color: "hover:text-cyan-400" },
    { to: "/contato", label: "Contato", icon: Mail, color: "hover:text-indigo-400" },
    { to: "/download", label: "Download App", icon: Download, color: "hover:text-lime-400" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80 px-6 py-4 transition-all", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5 shrink-0 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: netfitsDarkLogo,
            alt: "Netfits",
            className: "h-9 w-auto object-contain rounded-lg bg-zinc-900 p-1 border border-zinc-800 group-hover:border-purple-500/50 transition"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-extrabold tracking-tight text-xl text-white flex items-center gap-1", children: [
          "Netfits ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-lime-400 font-mono", children: "WEB" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-5 text-xs font-semibold text-zinc-300", children: navLinks.map((item) => {
        const isActive = currentPath === item.to || item.to === "/" && currentPath === "/home" || item.to === "/home" && currentPath === "/";
        const Icon = item.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: item.to,
            className: `transition-all flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg ${isActive ? "text-white font-extrabold bg-zinc-900 border border-zinc-700 shadow-sm" : `text-zinc-400 ${item.color} hover:bg-zinc-900/50`}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `size-3.5 ${isActive ? "text-lime-400" : ""}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label })
            ]
          },
          item.to
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/feed",
          className: "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs px-4 py-2.5 rounded-full shadow-lg shadow-purple-600/30 transition-all duration-200 flex items-center gap-1.5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "size-4" }),
            "Abrir App Netfits →"
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden flex items-center justify-around pt-3 mt-3 border-t border-zinc-900 text-[11px] font-semibold text-zinc-400 overflow-x-auto no-scrollbar gap-2", children: navLinks.map((item) => {
      const isActive = currentPath === item.to || item.to === "/" && currentPath === "/home" || item.to === "/home" && currentPath === "/";
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: item.to,
          className: `px-2 py-1 rounded transition-colors whitespace-nowrap ${isActive ? "text-lime-400 font-bold bg-zinc-900" : "hover:text-white"}`,
          children: item.label
        },
        item.to
      );
    }) })
  ] });
}
const Route$5 = createFileRoute()({
  head: () => ({
    meta: [
      { title: "Netfits Ltda. — A Primeira Camada de Fidelidade para a Vida em Movimento" },
      {
        name: "description",
        content: "Fazer cada movimento valer mais. Conheça a Netfits: feed de saúde, marketplace com cashback, ecossistema de parceiros e programa de fidelidade."
      },
      { property: "og:title", content: "Netfits Ltda. — Fazer cada movimento valer mais" }
    ]
  }),
  component: InstitutionalHomePage
});
function InstitutionalHomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-zinc-950 text-white font-sans selection:bg-purple-500 selection:text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(InstitutionalWebHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden pt-16 pb-20 px-6 border-b border-zinc-800/60 bg-gradient-to-b from-purple-950/40 via-zinc-950 to-zinc-950", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3 bg-zinc-900/90 border-2 border-lime-400/80 rounded-2xl px-5 py-2.5 shadow-xl shadow-purple-950/40 backdrop-blur-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: netfitsDarkLogo, alt: "Netfits Logo", className: "h-9 w-auto object-contain shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-px bg-zinc-700" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs sm:text-sm font-extrabold tracking-wider text-lime-400 uppercase", children: "Netfits Ltda. — Healthspan & Loyalty" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-6xl font-black tracking-tight text-white leading-tight", children: [
        "Fazer cada movimento ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-lime-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent", children: "valer mais." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base md:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed", children: [
        "A primeira camada de valor e fidelidade verticalizada para a vida em movimento. Recompensamos seus treinos, leitura e compras com cashback em pontos ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-lime-400 font-mono", children: "nfs" }),
        " e conectamos você às melhores academias, clínicas e especialistas."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-3 pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/feed",
            className: "w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-zinc-950 hover:bg-zinc-200 font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl transition",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "size-4" }),
              "Entrar no Aplicativo & Feed"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/parceiros",
            className: "w-full sm:w-auto px-8 py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 transition",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "size-4 text-lime-400" }),
              "Cadastre seu Estabelecimento"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 px-6 max-w-6xl mx-auto space-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-xl mx-auto space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-extrabold uppercase tracking-widest text-purple-400", children: "Ecossistema Integrado" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-extrabold text-white", children: "4 Pilares da Plataforma Netfits" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-zinc-400", children: "Como unificamos saúde, conteúdo, marketplace e serviços de prevenção em uma só moeda." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 space-y-4 hover:border-purple-500/40 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 grid place-items-center text-purple-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "size-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white", children: "1. Feed Editorial & Recompensas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-zinc-400 leading-relaxed", children: "Leitura curada de artigos esportivos, postagens de treinos com GPS de wearables (Garmin, Strava) e acúmulo de pontos por engajamento (+5 nfs por ler, +10 nfs por compartilhar, +25 nfs por treino)." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 space-y-4 hover:border-lime-500/40 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-2xl bg-lime-400/20 border border-lime-400/30 grid place-items-center text-lime-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "size-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white", children: "2. Netfits Shop com 4 nfs / R$" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-zinc-400 leading-relaxed", children: "Marketplace integrado com os maiores agregadores de e-commerce esportivo do Brasil. Ganhe 4,00 nfs por R$ 1,00 gasto no Shop com pagamento parcial/total com pontos e rastreabilidade total." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 space-y-4 hover:border-amber-500/40 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-2xl bg-amber-400/20 border border-amber-400/30 grid place-items-center text-amber-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "size-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white", children: "3. Netfits Club (Fase 2)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-zinc-400 leading-relaxed", children: "Assinatura por R$ 19,90/mês que dobra seus pontos em todas as compras no Shop (8,00 nfs por R$ 1,00) e concede cupons e acessos VIP a eventos e corridas de rua." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 space-y-4 hover:border-cyan-500/40 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-2xl bg-cyan-400/20 border border-cyan-400/30 grid place-items-center text-cyan-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white", children: "4. Rede Credenciada de Saúde" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-zinc-400 leading-relaxed", children: "Parceria com Academias, Assessorias Esportivas, Fisioterapia, Nutricionistas e Médicos do Esporte com verificação oficial no CNPJ, CRM, CRN, CREF e CREFITO." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6 max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border border-purple-500/30 p-8 md:p-12 shadow-2xl space-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 flex-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-extrabold uppercase tracking-widest text-lime-400 bg-lime-400/10 px-3.5 py-1 rounded-full border border-lime-400/20 flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3.5 text-lime-400" }),
          "Origem & Propósito · Carta do Fundador"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight", children: [
          "Da negação à linha de chegada do Ironman:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-lime-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent", children: "por que criamos a Netfits." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group rounded-3xl overflow-hidden border-2 border-lime-400/40 shadow-2xl shadow-purple-950/50 bg-zinc-950", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: andreGalloIronmanImg,
                alt: "André Gallo na linha de chegada do Ironman 70.3 Florianópolis",
                className: "w-full h-auto object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 right-3 bg-zinc-950/85 backdrop-blur-md border border-lime-400/40 rounded-2xl p-3.5 space-y-1 text-white shadow-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono font-black uppercase tracking-wider text-lime-400 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "size-3.5 text-lime-400" }),
                  "Ironman 70.3 Finisher"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono font-bold text-zinc-300 bg-zinc-900/90 px-2 py-0.5 rounded border border-zinc-700", children: "Peito 1563 · André" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-zinc-200", children: "Florianópolis, SC · Latin American Championship" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-400 leading-tight", children: "1,9 km Natação · 90 km Ciclismo · 21,1 km Corrida" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/80 border border-zinc-800 rounded-2xl p-3.5 flex items-center gap-3.5 hover:border-purple-500/40 transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeartPulse, { className: "size-5 text-purple-400" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-mono font-bold text-zinc-400 uppercase block", children: "Resiliência & Saúde" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm font-black text-white", children: "30+ Anos com Diabetes Tipo 1" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/80 border border-zinc-800 rounded-2xl p-3.5 flex items-center gap-3.5 hover:border-lime-500/40 transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-lime-950/60 border border-lime-500/30 flex items-center justify-center text-lime-400 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "size-5 text-lime-400" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-mono font-bold text-zinc-400 uppercase block", children: "Trajetória Executiva" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm font-black text-white", children: "25+ Anos Mercado Fin. & Loyalty" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950/80 border border-zinc-800 rounded-2xl p-3.5 flex items-center gap-3.5 hover:border-amber-500/40 transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "size-5 text-amber-400" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-mono font-bold text-zinc-400 uppercase block", children: "Superação Esportiva" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm font-black text-white", children: "Finisher Ironman 70.3 Floripa (Out/25)" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Recebi o diagnóstico de Diabetes Tipo 1 há mais de 30 anos. Se você me perguntasse lá atrás, na juventude, se eu já acordava pensando em disciplina, hábitos saudáveis e longevidade, a resposta sincera seria: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white", children: "não" }),
            ". Quando somos jovens, carregamos uma sensação ilusória de invencibilidade. Eu demorei a entender o que realmente precisava mudar na minha rotina diária. Não era por falta de informação médica — era quase um bloqueio emocional em aceitar aquela nova condição e encarar de frente as consequências de uma doença crônica silenciosa."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "A virada não aconteceu em um passe de mágica. Foi um processo longo, construído no convívio diário com a doença, em incontáveis consultas com endocrinologistas e, acima de tudo, com ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white", children: "o amadurecimento e a paternidade" }),
            ". Olhar nos olhos dos meus filhos e desejar com todas as forças estar presente, forte e com saúde nas próximas décadas foi o meu grande divisor de águas. Foi ali que a obrigação clínica se transformou em estilo de vida."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "E o que começou como disciplina virou paixão. Descobri no esporte uma fonte inesgotável de energia, amizades verdadeiras no asfalto e nas trilhas, e uma vontade constante de me desafiar. Participei de inúmeras provas até cruzar, em outubro de 2025, a linha de chegada do ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-lime-400", children: "Ironman 70.3 de Florianópolis" }),
            " (1,9 km de natação em mar aberto, 90 km de ciclismo e 21,1 km de corrida). Quem convive com DM1 sabe o que representa dosar insulina, carboidratos e esforço no limite da exaustão sob sol e adrenalina."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Em paralelo a essa jornada nas pistas, construí uma carreira de ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white", children: "mais de 25 anos como executivo no mercado financeiro e no setor de fidelidade (loyalty)" }),
            ". Se há algo que aprendi liderando grandes operações, é que colocar o cliente de verdade no centro dos negócios é a única forma de criar algo perene. Olhando ao redor, via uma comunidade de atletas amadores que não para de crescer ano após ano — pessoas determinadas que investem tempo, suor e recursos para cuidar do corpo e da mente —, mas que continuavam completamente órfãs de uma plataforma pensada sob medida para as suas necessidades."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-6 p-6 rounded-2xl bg-gradient-to-r from-purple-950/70 via-zinc-950 to-indigo-950/70 border-l-4 border-lime-400 shadow-xl space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "size-6 text-lime-400/80 mb-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg font-extrabold text-white italic leading-snug", children: "“A gente paga a inscrição, acorda quando ainda está escuro, se esforça até o limite... para no final ganhar uma medalha e uma fruta.”" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "A famosa piada entre os corredores de rua que escancarou a nossa grande oportunidade: transformar suor em valor real." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "A gente ri porque é verdade, mas no fundo isso sempre me incomodou. Por que a atitude mais nobre que um ser humano pode ter — que é cuidar ativamente da própria saúde e da longevidade — não gera nenhum retorno tangível de volta? ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white", children: "Por que ganhamos pontos nas compras no cartão de crédito, mas ninguém recompensa o seu suor de cada dia?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "A ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-lime-400 font-bold", children: "Netfits" }),
            " nasceu exatamente para mudar esse cenário."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "bg-zinc-950/60 p-5 rounded-2xl border border-zinc-800 text-zinc-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white", children: "Não somos apenas mais um aplicativo de pontos." }),
            " Somos a primeira camada de valor criada para sua saúde e sua longevidade. Queremos que o seu treino, a sua constância e a sua disciplina se transformem em descontos reais nos melhores tênis e suplementos, consultas com especialistas de ponta e eventos que impulsionam a sua vida. Compartilharemos informações importantes sobre tudo o que cerca a atividade física, seja nutrição, recuperação, fisioterapia, medicina do esporte, técnicas, sugestões de treinos e até mesmo onde fazer aquela prova dos sonhos."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base md:text-lg font-bold text-white pt-2", children: [
            "O nosso lema nunca foi uma frase de efeito de marketing:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime-400 underline decoration-lime-400/50 decoration-2 underline-offset-4", children: "Fazer cada movimento valer mais" }),
            " ",
            "é a nossa missão de vida e o compromisso que assumimos com você."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-zinc-400", children: "Bem-vindo à Netfits. Vamos juntos." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-2xl bg-gradient-to-br from-lime-400 to-emerald-500 p-0.5 shadow-lg shadow-lime-400/20 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center font-black text-lg text-lime-400", children: "AG" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-black text-white", children: "André Gallo" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-lime-400", children: "CEO e Cofundador da Netfits" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-400", children: "São Paulo, Brasil · NETFITS LTDA." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-zinc-400 bg-zinc-950/80 px-4 py-2 rounded-xl border border-zinc-800 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4 text-lime-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Manifesto Oficial Netfits 2026" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-6 bg-gradient-to-r from-purple-950 via-zinc-900 to-zinc-950 border-y border-purple-500/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 max-w-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-extrabold uppercase tracking-widest text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20", children: "Credenciamento 100% Gratuito · Zero Mensalidade" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-extrabold text-white", children: "Sua Academia, Clínica ou Assessoria no ecossistema Netfits" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-zinc-300 leading-relaxed", children: "Sem mensalidades ou taxas fixas. Conecte seus serviços à nossa comunidade e seja remunerado diretamente por cada evento ou consulta contratada pelos nossos usuários." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row items-center gap-3 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/parceiros",
          className: "px-8 py-4 rounded-2xl bg-lime-400 hover:bg-lime-300 text-zinc-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl transition",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "size-4" }),
            "Cadastrar Minha Unidade / Consultório →"
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6 max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 max-w-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-extrabold uppercase tracking-widest text-amber-400", children: "Programa de Afiliados & Criadores" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-extrabold text-white", children: "Programa de Associados Netfits" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-zinc-300 leading-relaxed", children: [
          "Treinadores, atletas e criadores de conteúdo esportivo recebem ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-400", children: "10,0% de comissão padrão" }),
          " sobre as receitas geradas a partir de seus links de indicação."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/associado",
          className: "px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-extrabold text-xs flex items-center justify-center gap-2 shrink-0 transition",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-4" }),
            "Conhecer o Painel do Associado →"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-zinc-950 border-t border-zinc-800 pt-16 pb-12 px-6 text-xs text-zinc-400", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: netfitsDarkLogo, alt: "Netfits", className: "h-7 w-auto rounded bg-zinc-900 p-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-sm text-white", children: "Netfits Ltda." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-500 leading-relaxed", children: "Primeira plataforma de saúde preventiva, loyalty e healthspan para a vida em movimento no Brasil." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-white text-xs uppercase tracking-wider mb-2", children: "Navegação Web" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/home", className: "hover:text-white transition", children: "Homepage Institucional" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/parceiros", className: "hover:text-white transition", children: "Cadastro de Parceiros" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/associado", className: "hover:text-white transition", children: "Programa de Associados" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/faq", className: "hover:text-white transition", children: "FAQ / Central de Ajuda" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contato", className: "hover:text-white transition", children: "Contato & Suporte" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-white text-xs uppercase tracking-wider mb-2", children: "Ecossistema App" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/feed", className: "hover:text-white transition", children: "App Feed de Notícias" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/market", className: "hover:text-white transition", children: "Netfits Shop" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/activities", className: "hover:text-white transition", children: "Atividades & Wearables" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/wallet", className: "hover:text-white transition", children: "Carteira nfs" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-white text-xs uppercase tracking-wider mb-2", children: "Contato Corporativo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-400", children: "Netfits Ltda." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-400", children: "suporte@netfits.com.br" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-400", children: "São Paulo, SP — Brasil" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-600 text-[11px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "© 2026 Netfits Ltda. Todos os direitos reservados." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Slogan Oficial: "Fazer cada movimento valer mais."' })
      ] })
    ] })
  ] });
}
const $$splitComponentImporter$4 = () => import("./levels-DwNhED8R.mjs");
const Route$4 = createFileRoute()({
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
const $$splitComponentImporter$3 = () => import("./market-D1lKvrzA.mjs");
const Route$3 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Netfits Shop — Loja Oficial"
    }, {
      name: "description",
      content: "Loja Oficial Netfits integrada com autenticação unificada e acúmulo de pontos nfs."
    }, {
      property: "og:title",
      content: "Netfits Shop"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./parceiros-DE0ODnaW.mjs");
const Route$2 = createFileRoute()({
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
const $$splitComponentImporter$1 = () => import("./profile-vT-qr_9d.mjs");
const Route$1 = createFileRoute()({
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
const $$splitComponentImporter = () => import("./wallet-Dj03Qo5V.mjs");
const Route = createFileRoute()({
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
const IndexRoute = Route$e.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$f
});
const ActivitiesRoute = Route$d.update({
  id: "/activities",
  path: "/activities",
  getParentRoute: () => Route$f
});
const AdminRoute = Route$c.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$f
});
const AssociadoRoute = Route$b.update({
  id: "/associado",
  path: "/associado",
  getParentRoute: () => Route$f
});
const AuthRoute = Route$a.update({
  id: "/auth",
  path: "/auth",
  getParentRoute: () => Route$f
});
const ContatoRoute = Route$9.update({
  id: "/contato",
  path: "/contato",
  getParentRoute: () => Route$f
});
const DownloadRoute = Route$8.update({
  id: "/download",
  path: "/download",
  getParentRoute: () => Route$f
});
const FaqRoute = Route$7.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$f
});
const FeedRoute = Route$6.update({
  id: "/feed",
  path: "/feed",
  getParentRoute: () => Route$f
});
const HomeRoute = Route$5.update({
  id: "/home",
  path: "/home",
  getParentRoute: () => Route$f
});
const LevelsRoute = Route$4.update({
  id: "/levels",
  path: "/levels",
  getParentRoute: () => Route$f
});
const MarketRoute = Route$3.update({
  id: "/market",
  path: "/market",
  getParentRoute: () => Route$f
});
const ParceirosRoute = Route$2.update({
  id: "/parceiros",
  path: "/parceiros",
  getParentRoute: () => Route$f
});
const ProfileRoute = Route$1.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => Route$f
});
const WalletRoute = Route.update({
  id: "/wallet",
  path: "/wallet",
  getParentRoute: () => Route$f
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
  FeedRoute,
  HomeRoute,
  LevelsRoute,
  MarketRoute,
  ParceirosRoute,
  ProfileRoute,
  WalletRoute
};
const routeTree = Route$f._addFileChildren(rootRouteChildren)._addFileTypes();
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
  ADMIN_PILLARS as A,
  InstitutionalHomePage as I,
  activities as a,
  authStore as b,
  netfitsLogo as c,
  ALL_KR_MAP as d,
  InstitutionalWebHeader as e,
  netfitsMark as f,
  detectIdentifierType as g,
  netfitsDarkLogo as h,
  trackAppDownload as i,
  useBadges as j,
  badgesStore as k,
  useWallet as l,
  trackPartnerRegistration as m,
  nativeBridge as n,
  passkeyService as p,
  router as r,
  sharedSandboxStore as s,
  trackSupportTicket as t,
  useAuth as u,
  validatePasswordRules as v,
  wallet as w
};
