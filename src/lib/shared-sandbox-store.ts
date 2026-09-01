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

const STORAGE_KEY = "netfits_shared_sandbox_db_v2";
const DEVICE_SESSION_KEY = "netfits_device_active_user_id_v2";
const SYNC_CHANNEL = "netfits_sandbox_sync_channel";

// Default Seed Data for Live Testing (Base Completa de Homologação com 24 Usuários de Teste)
const INITIAL_USERS: SandboxUser[] = [
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
    nfsBalance: 25000,
    referralCode: "ADMIN-NETFITS",
    registeredAt: "2026-08-01T10:00:00Z",
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
    nfsBalance: 20000,
    referralCode: "DIRETORIA-NFS",
    registeredAt: "2026-08-01T10:30:00Z",
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
    registeredAt: "2026-08-05T11:00:00Z",
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
    registeredAt: "2026-08-06T09:00:00Z",
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
    registeredAt: "2026-08-08T08:30:00Z",
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
    registeredAt: "2026-08-10T14:15:00Z",
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
    registeredAt: "2026-08-12T10:00:00Z",
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
    registeredAt: "2026-08-14T16:20:00Z",
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
    registeredAt: "2026-08-16T11:45:00Z",
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
    registeredAt: "2026-08-01T12:00:00Z",
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
    registeredAt: "2026-08-02T14:30:00Z",
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
    registeredAt: "2026-08-03T10:15:00Z",
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
    registeredAt: "2026-08-04T14:00:00Z",
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
    registeredAt: "2026-08-05T11:45:00Z",
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
    registeredAt: "2026-08-06T15:30:00Z",
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
    registeredAt: "2026-08-07T09:10:00Z",
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
    registeredAt: "2026-08-09T17:00:00Z",
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
    registeredAt: "2026-08-11T13:20:00Z",
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
    registeredAt: "2026-08-13T08:00:00Z",
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
    registeredAt: "2026-08-15T18:40:00Z",
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
    nfsBalance: 15000,
    referralCode: "PARTNER-SMART",
    registeredAt: "2026-08-01T09:00:00Z",
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
    registeredAt: "2026-08-01T09:30:00Z",
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
    nfsBalance: 14000,
    referralCode: "PARTNER-BIORITMO",
    registeredAt: "2026-08-02T10:00:00Z",
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
    nfsBalance: 11000,
    referralCode: "PARTNER-BODYTECH",
    registeredAt: "2026-08-03T11:00:00Z",
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
      setTimeout(() => this.syncFromCloud(), 500);
    }
  }

  public async syncFromCloud(): Promise<SandboxUser[]> {
    if (typeof window === "undefined" || this.isSyncingCloud) return this.state.users;
    this.isSyncingCloud = true;
    try {
      // Recarrega do localStorage e sincroniza entre abas/janelas
      const fresh = this.loadFromStorage();
      if (fresh && Array.isArray(fresh.users)) {
        this.state.users = fresh.users;
        this.state.transactions = fresh.transactions;
        this.state.partners = fresh.partners;
        this.state.tickets = fresh.tickets;
        this.state.orders = fresh.orders;
        this.notify();
      }
    } catch (err) {
      console.warn("[LocalSync Warning]", err);
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
    } catch (err) {
      console.warn("[LocalSync Broadcast Warning]", err);
    }
  }

  public deleteUser(userId: string): boolean {
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
        activeUserId: "user-athlete-1",
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

    const defaultState: SandboxSchema = {
      users: INITIAL_USERS,
      transactions: INITIAL_TRANSACTIONS,
      partners: INITIAL_PARTNERS,
      tickets: INITIAL_TICKETS,
      orders: INITIAL_ORDERS,
      interactions: INITIAL_INTERACTIONS,
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
