import { useSyncExternalStore } from "react";
import { toast } from "sonner";
import { operationalParamsStore } from "./operational-params-store";
import { dispatchPointsCreditedEmailSafe, dispatchShopOrderEmailSafe } from "./emails/email-service";

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
  otherHealthPlan?: string;
  gym?: string;
  coaching?: string;
  wearable?: string;
  otherWearable?: string;
  loyaltyPrograms?: string[];
  loyaltyPointsEstimate?: string;
  gender?: string | null;
  passwordHash?: string;
}

export interface SandboxTransaction {
  id: string;
  userId: string;
  userName: string;
  amount: number; // positive for gain, negative for spent
  description: string;
  category: "welcome" | "referral" | "like" | "share" | "shop" | "workout" | "associado_bonus" | "view" | "click" | "post" | "badge" | "feed";
  timestamp: string;
}

export type TransactionOriginCategory =
  | "badge"
  | "shop"
  | "referral"
  | "welcome"
  | "feed"
  | "workout"
  | "other";

/**
 * Classificador determinístico e mutuamente exclusivo de transações por origem.
 * Garante 100% de reconciliação contábil (soma das origens == total emitido, diferença 0).
 */
export function classifyTransactionCategory(t: {
  id?: string;
  category?: string;
  type?: string;
  description?: string;
  amount?: number;
}): TransactionOriginCategory {
  const desc = t.description || "";
  const id = t.id || "";
  const cat = (t.category || "").toLowerCase();
  const type = (t.type || "").toLowerCase();

  // 1. Selos & Badges Oficiais (Prioridade sobre menções contextuais como 'cashback' em 'Primeiro Cashback')
  const isBadge =
    id.startsWith("tx-badge-") ||
    id.includes("badge") ||
    cat === "badge" ||
    type === "badge" ||
    /selo|conquista|badge/i.test(desc);
  if (isBadge) return "badge";

  // 2. Indicação de Amigos (MGM — Exclusivamente no Cadastro Inicial de Novo Membro)
  const isReferral =
    cat === "referral" ||
    type === "referral" ||
    id.startsWith("tx-referral-") ||
    /indica|mgm|member get member/i.test(desc);
  if (isReferral) return "referral";

  // 3. Boas-Vindas / Cadastro Inicial
  const isWelcome =
    cat === "welcome" ||
    type === "welcome" ||
    id.includes("welcome") ||
    /boas-vindas|cadastramento|novo cadastro/i.test(desc);
  if (isWelcome) return "welcome";

  // 4. Compras no Shopping / Marketplace Netfits (Cashback)
  const isShop =
    cat === "shop" ||
    type === "shop" ||
    id.startsWith("tx-mkp-") ||
    /cashback|compra|shopping|pedido|mkplace/i.test(desc);
  if (isShop) return "shop";

  // 5. Engajamento no Feed & Conteúdo Mídia (Leituras, Vídeos, Desafios, Quizzes, Curtidas, Shares, Cliques)
  const isFeed =
    ["feed", "view", "like", "share", "click", "post"].includes(cat) ||
    ["feed", "view", "like", "share", "click", "post"].includes(type) ||
    id.includes("feed") ||
    /leitura|artigo|desafio|quiz|vídeo|video|curtida|like|click|clique|visualização|visualizacao|compartilhamento|feed|fibios|franco|isabella/i.test(desc);
  if (isFeed) return "feed";

  // 6. Treinos & Atividades Físicas Validadas (GPS, Strava, Garmin, etc.)
  const isWorkout =
    cat === "workout" ||
    type === "workout" ||
    /treino|corrida|pedal|ciclismo|musculação|musculacao|strava|garmin|gps/i.test(desc);
  if (isWorkout) return "workout";

  return "other";
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
  amountBrl?: number;
  pointsPaid: number;
  status: "processando" | "enviado" | "entregue" | "PAID" | "PENDING" | "DELIVERED" | "SENT" | "PARTIALLY-DELIVERED" | string;
  createdAt: string;
  paidAt?: string;
  summary?: any;
  customer?: any;
  items?: any[];
  sellerName?: string;
  sellerId?: string;
  brand?: string;
  category?: string;
  carrier?: string;
  slaDays?: number;
  trackingCode?: string;
  cashbackEarned?: number;
  paymentMethod?: string;
  metadata?: any;
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
const DEVICE_SESSION_KEY = "netfits_production_session_v2";
const SYNC_CHANNEL = "netfits_production_sync_channel";

// Purgar de forma permanente chaves legadas anteriores que contaminavam sessões e perfis entre dispositivos
if (typeof window !== "undefined") {
  try {
    localStorage.removeItem("netfits_production_active_user_v1");
    localStorage.removeItem("netfits_user_profile_form_backup");
  } catch {}
}

export const ANONYMOUS_GUEST_USER: SandboxUser = {
  id: "",
  identifier: "",
  fullName: "Visitante",
  email: "",
  type: "associado",
  nfsBalance: 0,
  referralCode: "",
  registeredAt: "",
  sports: [],
};

export function purgeFabricatedMockData<T extends Partial<SandboxUser>>(u: T): T {
  // Desativado: preserva integralmente os dados informados pelos usuários (CPF, telefone, endereço, etc.)
  return u;
}

// Base Definitiva e Oficial de Usuários em Produção (Go-Live)
// Contém estritamente os usuários oficiais da liderança e membros ativos Netfits
const INITIAL_USERS: SandboxUser[] = [
  {
    id: "usr_andre",
    identifier: "aacgallo@hotmail.com",
    email: "aacgallo@hotmail.com",
    fullName: "André Gallo",
    type: "admin",
    phone: "11995351513",
    cpf: "25664730803",
    birthDate: "13/11/1975",
    address: "Rua Carlos Steinen, 193 (Apto 121) - Paraíso, São Paulo · SP",
    street: "Rua Carlos Steinen",
    number: "193",
    complement: "Apto 121",
    neighborhood: "Paraíso",
    city: "São Paulo",
    state: "São Paulo",
    shortState: "SP",
    zipcode: "04004011",
    sports: ["Corrida de rua", "Trail running", "Maratona", "Triathlon", "Ciclismo", "Natação", "Musculação"],
    healthPlan: "Sem plano",
    gym: "Academia local / Independente",
    coaching: "Limite Team",
    wearable: "Garmin Forerunner",
    loyaltyPrograms: ["livelo", "esfera"],
    nfsBalance: 1184,
    referralCode: "GALLO-NETFITS",
    registeredAt: "2026-10-05T00:00:00Z",
    passwordHash: "Admin@2026",
  },
  {
    id: "usr_carlos_formigari",
    identifier: "crformigari72@gmail.com",
    email: "crformigari72@gmail.com",
    fullName: "Carlos Rodrigo Formigari",
    type: "athlete",
    phone: "(11) 98426-4116",
    cpf: "11553412877",
    birthDate: "05/12/1972",
    address: "Alameda das Embaúbas, 365 - Alphaville, Santana de Parnaíba · SP",
    street: "Alameda das Embaúbas",
    number: "365",
    neighborhood: "Alphaville",
    city: "Santana de Parnaíba",
    state: "São Paulo",
    shortState: "SP",
    zipcode: "06542195",
    nfsBalance: 110,
    referralCode: "FORMIGARI-NFS",
    registeredAt: "2026-10-06T00:00:00Z",
    passwordHash: "Kite@1972",
  },
  {
    id: "user-1791370530242",
    identifier: "cristiane.formigari@amantikira.com.br",
    email: "cristiane.formigari@amantikira.com.br",
    fullName: "Cristiane Ferreira Formigari",
    phone: "(11) 98381-7390",
    cpf: "11001624882",
    birthDate: "24/05/1970",
    type: "athlete",
    nfsBalance: 564,
    referralCode: "NET-1243",
    referredBy: "FORMIGARI-NFS",
    registeredAt: "2026-10-07T10:55:30.242Z",
    passwordHash: "Kite@1970",
  },
  {
    id: "user-1791568907378",
    identifier: "edsonsilvafilho@gmail.com",
    email: "edsonsilvafilho@gmail.com",
    phone: "(81) 98541-0874",
    cpf: "04905769400",
    birthDate: "18/04/1983",
    fullName: "Edson Silva Filho",
    zipcode: "53130330",
    street: "Rua Tertuliano Francisco Feitosa",
    number: "140",
    complement: "Apto 602",
    neighborhood: "Casa Caiada",
    city: "Olinda",
    state: "Pernambuco",
    shortState: "PE",
    address: "Rua Tertuliano Francisco Feitosa, 140 (Apto 602) - Casa Caiada, Olinda · PE",
    type: "athlete",
    nfsBalance: 50,
    referralCode: "NET-1431",
    registeredAt: "2026-10-09T18:01:47.378Z",
    passwordHash: "C6yK]rh5,~j_\"Mt",
    loyaltyPrograms: ["esfera", "iupp"],
    loyaltyPointsEstimate: "10.000 a 50.000 pts",
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
    id: "tx-mkp-earn-GTJ0522372096",
    userId: "usr_andre",
    userName: "André Gallo",
    amount: 814,
    description: "✨ Cashback compra Mkplace Pedido #GTJ0522372096 (R$ 203,50)",
    category: "shop",
    timestamp: "2026-10-05T22:38:35Z",
  },
  {
    id: "tx-mkp-earn-AHK0918295258",
    userId: "usr_andre",
    userName: "André Gallo",
    amount: 130,
    description: "✨ Cashback compra Mkplace Pedido #AHK0918295258 (R$ 42,52)",
    category: "shop",
    timestamp: "2026-10-15T13:20:00Z",
  },
  {
    id: "tx-1791415135742",
    userId: "usr_andre",
    userName: "André Gallo",
    amount: 10,
    description: "Compartilhamento pós-visualização: Fibios Medicina e Saúde",
    category: "share",
    timestamp: "2026-10-07T23:18:55.742Z",
  },
  {
    id: "tx-badge-usr_andre-pioneiro",
    userId: "usr_andre",
    userName: "André Gallo",
    amount: 25,
    description: "🏆 Selo Conquistado: Pioneiro Netfits",
    category: "badge",
    timestamp: "2026-10-05T00:00:00Z",
  },
  {
    id: "tx-badge-usr_andre-perfil_verificado",
    userId: "usr_andre",
    userName: "André Gallo",
    amount: 30,
    description: "🏆 Selo Conquistado: Perfil Verificado",
    category: "badge",
    timestamp: "2026-10-05T00:00:00Z",
  },
  {
    id: "tx-badge-usr_andre-colecionador_pontos",
    userId: "usr_andre",
    userName: "André Gallo",
    amount: 20,
    description: "🏆 Selo Conquistado: Colecionador de Pontos",
    category: "badge",
    timestamp: "2026-10-05T00:00:00Z",
  },
  {
    id: "tx-badge-usr_andre-atleta_conectado",
    userId: "usr_andre",
    userName: "André Gallo",
    amount: 30,
    description: "🏆 Selo Conquistado: Atleta de Alta Performance",
    category: "badge",
    timestamp: "2026-10-05T00:00:00Z",
  },
  {
    id: "tx-badge-usr_andre-explorador_shop",
    userId: "usr_andre",
    userName: "André Gallo",
    amount: 10,
    description: "🏆 Selo Conquistado: Explorador do Shop",
    category: "badge",
    timestamp: "2026-10-05T22:00:00Z",
  },
  {
    id: "tx-badge-usr_andre-primeira_compra",
    userId: "usr_andre",
    userName: "André Gallo",
    amount: 40,
    description: "🏆 Selo Conquistado: Primeira Compra Pontuada",
    category: "badge",
    timestamp: "2026-10-05T22:38:35Z",
  },
  {
    id: "tx-badge-usr_andre-voz_da_tribo",
    userId: "usr_andre",
    userName: "André Gallo",
    amount: 25,
    description: "🏆 Selo Conquistado: Voz da Tribo",
    category: "badge",
    timestamp: "2026-10-07T23:18:55.742Z",
  },
  {
    id: "tx-mkp-spend-SOP0711045469",
    userId: "user-1791370530242",
    userName: "Cristiane Ferreira Formigari",
    amount: -50,
    description: "🛍️ Resgate compra Mkplace Pedido #SOP0711045469",
    category: "shop",
    timestamp: "2026-10-07T11:04:47Z",
  },
  {
    id: "tx-mkp-earn-SOP0711045469",
    userId: "user-1791370530242",
    userName: "Cristiane Ferreira Formigari",
    amount: 514,
    description: "✨ Cashback compra Mkplace Pedido #SOP0711045469",
    category: "shop",
    timestamp: "2026-10-07T11:05:34Z",
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
    id: "tx-referral-carlos",
    userId: "usr_carlos_formigari",
    userName: "Carlos Rodrigo Formigari",
    amount: 50,
    description: "🤝 Bônus por Indicar Novo Usuário (Cristiane Ferreira Formigari)",
    category: "referral",
    timestamp: "2026-10-07T10:55:30.242Z",
  },
  {
    id: "tx-feed-carlos",
    userId: "usr_carlos_formigari",
    userName: "Carlos Rodrigo Formigari",
    amount: 10,
    description: "📱 Engajamento no Feed de Conteúdo",
    category: "view",
    timestamp: "2026-10-06T18:00:00Z",
  },
  {
    id: "tx-welcome-cristiane-formigari",
    userId: "user-1791370530242",
    userName: "Cristiane Ferreira Formigari",
    amount: 50,
    description: "🎉 Bônus de Boas-Vindas — Novo Cadastro no App Netfits",
    category: "welcome",
    timestamp: "2026-10-07T10:55:30.242Z",
  },
  {
    id: "tx-feed-cristiane-1",
    userId: "user-1791370530242",
    userName: "Cristiane Ferreira Formigari",
    amount: 10,
    description: "📱 Leitura Completa de Artigo no Feed",
    category: "view",
    timestamp: "2026-10-07T11:05:00Z",
  },
  {
    id: "tx-feed-cristiane-2",
    userId: "user-1791370530242",
    userName: "Cristiane Ferreira Formigari",
    amount: 10,
    description: "🧠 Desafio Netfits: Longevidade & Especialistas Fibios",
    category: "view",
    timestamp: "2026-10-07T11:15:00Z",
  },
  {
    id: "tx-feed-cristiane-3",
    userId: "user-1791370530242",
    userName: "Cristiane Ferreira Formigari",
    amount: 10,
    description: "🔗 Acesso a Conteúdo e Link Oficial",
    category: "click",
    timestamp: "2026-10-07T11:22:00Z",
  },
  {
    id: "tx-feed-cristiane-4",
    userId: "user-1791370530242",
    userName: "Cristiane Ferreira Formigari",
    amount: 10,
    description: "❤️ Interação em Conteúdo da Comunidade",
    category: "like",
    timestamp: "2026-10-07T11:30:00Z",
  },
  {
    id: "tx-feed-cristiane-5",
    userId: "user-1791370530242",
    userName: "Cristiane Ferreira Formigari",
    amount: 10,
    description: "📱 Engajamento no Feed Social",
    category: "view",
    timestamp: "2026-10-07T11:35:40Z",
  },
  {
    id: "tx-1791568907385-welcome",
    userId: "user-1791568907378",
    userName: "Edson Silva Filho",
    amount: 50,
    description: "🎉 Bônus de Boas-Vindas — Novo Cadastro no App Netfits",
    category: "welcome",
    timestamp: "2026-10-09T18:01:47.385Z",
  },
];

const INITIAL_TICKETS: SandboxTicket[] = [];

const INITIAL_ORDERS: SandboxOrder[] = [
  {
    id: "AHK0918295258",
    orderNumber: "AHK0918295258",
    userId: "usr_andre",
    userName: "André Gallo",
    productName: "Meia Soquete Puma Invisível c/ 3 Pares",
    amountBrl: 42.52,
    pointsPaid: 0,
    status: "DELIVERED",
    createdAt: "2026-10-10T18:18:00.000Z",
    paidAt: "2026-10-10T18:18:56.355Z",
    paymentMethod: "Cartão de Crédito",
    metadata: { paymentMethod: "CREDITCARD", platform: "WEB", installments: 1, origem: "netfits" },
    sellerName: "Netshoes",
    sellerId: "51rrnR3ToE",
    brand: "Puma",
    category: "Moda Fitness",
    carrier: "Total Express / Netshoes",
    slaDays: 2,
    trackingCode: "TX-AHK0918295-BR",
    cashbackEarned: 170,
    items: [
      {
        skuId: "MKU-1cdK93sA2Ryzq",
        name: "Meia Soquete Puma Invisível c/ 3 Pares",
        quantity: 1,
        price: 32.62,
        brand: "Puma",
        category: "Moda Fitness",
        sellerName: "Netshoes",
      },
    ],
    summary: { total: 32.62, totalShippingCost: 9.9, finalPrice: 42.52, points: { amount: 0, currencyAmount: 0 } },
  },
  {
    id: "SOP0711045469",
    orderNumber: "SOP0711045469",
    userId: "user-1791370530242",
    userName: "Cristiane Ferreira Formigari",
    productName: "Barra de Proteína Black Skull Whey Bar Gourmet Zero 12 Un",
    amountBrl: 129.11,
    pointsPaid: 50,
    status: "DELIVERED",
    createdAt: "2026-10-07T11:04:42.340Z",
    paidAt: "2026-10-07T11:05:33.866Z",
    paymentMethod: "PIX",
    metadata: { paymentMethod: "PIX", platform: "WEB", installments: 1, origem: "netfits" },
    sellerName: "Webcontinental",
    sellerId: "Jahjp6EsHf",
    brand: "Black Skull",
    category: "Suplementação & Nutrição",
    carrier: "Transportadora Mandaê",
    slaDays: 14,
    trackingCode: "MD-SOP0711045-BR",
    cashbackEarned: 437,
    items: [
      {
        skuId: "MKU-0y9HQfmOGgfzs",
        name: "Barra de Proteína Black Skull Whey Bar Gourmet Zero 12 Un",
        quantity: 1,
        price: 109.9,
        brand: "Black Skull",
        category: "Suplementação & Nutrição",
        sellerName: "Webcontinental",
      },
    ],
    summary: { total: 109.9, totalShippingCost: 19.21, finalPrice: 129.11, points: { amount: 50, currencyAmount: 0.5 } },
  },
  {
    id: "SXZ0918365463",
    orderNumber: "SXZ0918365463",
    userId: "usr_carlos_formigari",
    userName: "Carlos Rodrigo Formigari",
    productName: "Toalha de Academia Atlântica + Meia Cano Médio Puma",
    amountBrl: 93.5,
    pointsPaid: 0,
    status: "PARTIALLY-DELIVERED",
    createdAt: "2026-10-09T18:36:05.980Z",
    paidAt: "2026-10-09T18:36:45.818Z",
    paymentMethod: "Cartão de Crédito",
    metadata: { paymentMethod: "CREDITCARD", platform: "WEB", installments: 1, origem: "netfits" },
    sellerName: "Webcontinental / Netshoes",
    sellerId: "seller_webcont",
    brand: "Atlântica / Puma",
    category: "Acessórios de Treino",
    carrier: "Total Express / Correios",
    slaDays: 14,
    trackingCode: "TX-SXZ0918365-BR",
    cashbackEarned: 374,
    items: [
      {
        skuId: "MKU-TOALHA-ATL-01",
        name: "Toalha De Academia 100% Algodão 30x80cm 400g-m² Atlântica Azul Marinho",
        quantity: 1,
        price: 26.9,
        brand: "Atlântica",
        category: "Acessórios de Treino",
        sellerName: "Webcontinental",
      },
      {
        skuId: "MKU-MEIA-PUMA-MID",
        name: "Meia Cano Médio Puma Logo c/ 3 Pares",
        quantity: 1,
        price: 42.09,
        brand: "Puma",
        category: "Moda Fitness",
        sellerName: "Netshoes",
      },
    ],
    summary: { total: 68.99, totalShippingCost: 24.51, finalPrice: 93.5, points: { amount: 0, currencyAmount: 0 } },
  },
  {
    id: "WQB0918281690",
    orderNumber: "WQB0918281690",
    userId: "user-1791568907378",
    userName: "Edson Silva Filho",
    productName: "Kit Pin Disney Marvel Pixar Esmaltado C/ 3 Unidades",
    amountBrl: 19.89,
    pointsPaid: 0,
    status: "DELIVERED",
    createdAt: "2026-10-09T18:28:00.000Z",
    paidAt: "2026-10-09T18:28:47.515Z",
    paymentMethod: "Cartão de Crédito",
    metadata: { paymentMethod: "CREDITCARD", platform: "WEB", installments: 1, origem: "netfits" },
    sellerName: "Netshoes",
    sellerId: "51rrnR3ToE",
    brand: "Disney / Marvel",
    category: "Acessórios",
    carrier: "Correios SEDEX",
    slaDays: 3,
    trackingCode: "SEDEX-WQB0918281-BR",
    cashbackEarned: 80,
    items: [
      {
        skuId: "MKU-PIN-DISNEY-01",
        name: "Kit Pin Disney Marvel Pixar Esmaltado C/ 3 Unidades",
        quantity: 1,
        price: 9.99,
        brand: "Disney / Marvel",
        category: "Acessórios",
        sellerName: "Netshoes",
      },
    ],
    summary: { total: 9.99, totalShippingCost: 9.9, finalPrice: 19.89, points: { amount: 0, currencyAmount: 0 } },
  },
  {
    id: "DOJ0918218027",
    orderNumber: "DOJ0918218027",
    userId: "user-1791568907378",
    userName: "Edson Silva Filho",
    productName: "Calção Infantil Sport Recife Shadow",
    amountBrl: 19.89,
    pointsPaid: 0,
    status: "SENT",
    createdAt: "2026-10-09T18:21:00.000Z",
    paidAt: "2026-10-09T18:22:15.584Z",
    paymentMethod: "Cartão de Crédito",
    metadata: { paymentMethod: "CREDITCARD", platform: "WEB", installments: 1, origem: "netfits" },
    sellerName: "Netshoes",
    sellerId: "51rrnR3ToE",
    brand: "Sport Recife / Umbro",
    category: "Moda Fitness",
    carrier: "Loggi Logística",
    slaDays: 5,
    trackingCode: "LG-DOJ0918218-BR",
    cashbackEarned: 80,
    items: [
      {
        skuId: "MKU-RxBLQxJONXK7i",
        name: "Calção Infantil Sport Recife Shadow",
        quantity: 1,
        price: 9.99,
        brand: "Sport Recife / Umbro",
        category: "Moda Fitness",
        sellerName: "Netshoes",
      },
    ],
    summary: { total: 9.99, totalShippingCost: 9.9, finalPrice: 19.89, points: { amount: 0, currencyAmount: 0 } },
  },
  {
    id: "GTJ0522372096",
    orderNumber: "GTJ0522372096",
    userId: "usr_andre",
    userName: "André Gallo",
    productName: "Item não detalhado pela Rock (1 item)",
    amountBrl: 203.5,
    pointsPaid: 0,
    status: "PAID",
    createdAt: "2026-10-05T22:37:00.000Z",
    paidAt: "2026-10-05T22:38:00.000Z",
    paymentMethod: "-",
    metadata: undefined,
    sellerName: "Aguardando Rock",
    sellerId: "RhOFkbZJIN",
    brand: "-",
    category: "Aguardando Rock",
    carrier: "-",
    slaDays: 0,
    trackingCode: "-",
    cashbackEarned: 814,
    items: [],
    summary: { total: 176.4, totalShippingCost: 27.1, finalPrice: 203.5, points: { amount: 0, currencyAmount: 0 } },
  },
  {
    id: "PFM0610443019",
    orderNumber: "PFM0610443019",
    userId: "usr_andre",
    userName: "André Gallo",
    productName: "Item não detalhado pela Rock (1 item)",
    amountBrl: 56.85,
    pointsPaid: 0,
    status: "PAID",
    createdAt: "2026-10-06T10:44:00.000Z",
    paidAt: "2026-10-06T10:45:00.000Z",
    paymentMethod: "-",
    metadata: undefined,
    sellerName: "Aguardando Rock",
    sellerId: "RhOFkbZJIN",
    brand: "-",
    category: "Aguardando Rock",
    carrier: "-",
    slaDays: 0,
    trackingCode: "-",
    cashbackEarned: 227,
    items: [],
    summary: { total: 44.1, totalShippingCost: 12.75, finalPrice: 56.85, points: { amount: 0, currencyAmount: 0 } },
  },
];

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

      // Sincronização inicial pontual ao carregar (apenas pull da nuvem, nunca push de defaults)
      setTimeout(() => {
        this.syncFromCloud();
      }, 500);

      // Polling periódico automático (a cada 15s) para buscar cadastros, ações e saldo em tempo real
      setInterval(() => {
        this.syncFromCloud();
      }, 15000);

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
                  if (key === "nfsBalance") {
                    (merged as any)[key] = Number(val) ?? (current as any)[key];
                  } else if (key === "passwordHash") {
                    (merged as any)[key] = val || (current as any)[key];
                  } else {
                    (merged as any)[key] = val;
                  }
                }
              }
              this.state.users[idx] = purgeFabricatedMockData(merged);
            } else {
              this.state.users.push(su);
            }
          }

          // Alinha a lista de usuários local estritamente com os usuários válidos do servidor
          // removendo personas legadas que foram expurgadas da nuvem permanente
          const validServerIds = new Set(serverUsers.map((su) => su.id));
          const validServerEmails = new Set(
            serverUsers.map((su) => su.email?.trim().toLowerCase()).filter(Boolean)
          );
          const localActive = this.getActiveUser();
          this.state.users = this.state.users.filter((u) => {
            if (validServerIds.has(u.id)) return true;
            if (u.email && validServerEmails.has(u.email.trim().toLowerCase())) return true;
            // Preserva se for um novo usuário local ativo aguardando sincronização
            if (localActive && (localActive.id === u.id || (localActive.email && localActive.email === u.email))) {
              return true;
            }
            return false;
          });

          this.saveToStorageLocally();

          // Auto-recuperação resiliente: Se o usuário ativo deste dispositivo ainda não consta
          // no servidor central (caso de cadastros prévios à liberação do sync), envia automaticamente
          if (
            localActive &&
            localActive.email &&
            !serverUsers.some(
              (su) =>
                (su.email && su.email.trim().toLowerCase() === localActive.email?.trim().toLowerCase()) ||
                su.id === localActive.id
            )
          ) {
            this.syncToCloud(localActive);
          }
        }

        // 3. Sincronização em tempo real de extrato de transações e histórico de ações
        const serverTxs: SandboxTransaction[] = json?.transactions || [];
        if (Array.isArray(serverTxs) && serverTxs.length > 0) {
          const txMap = new Map<string, SandboxTransaction>();
          for (const tx of this.state.transactions) {
            if (tx && tx.id && tx.amount !== 1080 && !tx.description?.includes("1080")) {
              txMap.set(tx.id, tx);
            }
          }
          let hasNewTx = false;
          for (const stx of serverTxs) {
            if (stx && stx.id && stx.amount !== 1080 && !stx.description?.includes("1080")) {
              txMap.set(stx.id, stx);
              hasNewTx = true;
            }
          }

          // Sanitização e segregação contábil oficial de badges, feed e treinos
          for (const tx of txMap.values()) {
            const desc = tx.description || "";
            const isPrimeiraCompra =
              tx.id.includes("primeira_compra") ||
              /primeiro cashback/i.test(desc) ||
              (tx.amount === 40 && !desc.includes("#") && !/gtj|ahk|pfm|sop|doj|wqb|sxz/i.test(desc));

            if (isPrimeiraCompra) {
              tx.id = `tx-badge-${tx.userId}-primeira_compra`;
              tx.description = "🏆 Selo Conquistado: Primeira Compra Pontuada";
              tx.category = "badge";
            } else if (tx.id.startsWith("tx-badge-") || tx.id.includes("badge") || /selo|conquista/i.test(desc)) {
              tx.category = "badge";
            } else if (
              ["view", "click", "like", "share"].includes(tx.category) ||
              /leitura|artigo|desafio|quiz|vídeo|video|curtida|like|click|clique|visualização|feed|fibios|franco|isabella/i.test(desc) ||
              tx.id.includes("feed")
            ) {
              if (tx.category === "workout" || !tx.category) {
                tx.category = "feed";
              }
            }
          }

          this.state.transactions = Array.from(txMap.values()).sort(
            (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          );

          // Atualiza saldo de todos os usuários com a soma de suas transações
          for (const u of this.state.users) {
            const userTxTotal = this.state.transactions
              .filter((t) => t.userId === u.id)
              .reduce((acc, t) => acc + (t.amount || 0), 0);
            if (userTxTotal > 0) {
              u.nfsBalance = userTxTotal;
            }
          }

          this.saveToStorageLocally();
        }

        // 4. Sincronização em tempo real de pedidos reais do Marketplace (Rock Encantech)
        const serverOrders = json?.orders || [];
        if (Array.isArray(serverOrders) && serverOrders.length > 0) {
          const mappedOrders: SandboxOrder[] = serverOrders.map((ord: any) => {
            const rawSeller = ord.sellerName || ord.items?.[0]?.sellerName || "";
            let cleanSeller = rawSeller;
            if (/netshoes/i.test(rawSeller)) cleanSeller = "Netshoes";
            else if (/webcontinental/i.test(rawSeller)) cleanSeller = "Webcontinental";
            else if (/centauro/i.test(rawSeller)) cleanSeller = "Centauro";
            else if (/fila/i.test(rawSeller)) cleanSeller = "Fila";
            else if (/new balance|newbalance/i.test(rawSeller)) cleanSeller = "New Balance";
            else if (!cleanSeller || cleanSeller === "RhOFkbZJIN") cleanSeller = "Aguardando Rock";

            if (ord.items && ord.items.length > 1) {
              const distinctSellers = Array.from(new Set(ord.items.map((it: any) => it.sellerName).filter(Boolean)));
              if (distinctSellers.length > 1) {
                cleanSeller = distinctSellers.join(" / ");
              }
            }

            const pName = ord.productName || (ord.items && ord.items.length > 0
              ? (ord.items.length === 1 ? (ord.items[0].name || ord.items[0].productName) : `${ord.items[0].name || ord.items[0].productName} (+${ord.items.length - 1} item)`)
              : (cleanSeller === "Aguardando Rock" ? `Item não detalhado pela Rock (1 item)` : `Produto Esportivo Netfits`));

            const ptsEarned = Number(ord.cashbackEarned ?? ord.netfitsProcessing?.pointsEarned ?? Math.round(Number(ord.summary?.finalPrice ?? ord.summary?.total ?? 0) * 4));

            const rawPaymentMethod = ord.paymentMethod || ord.metadata?.paymentMethod || ord.rawPayload?.metadata?.paymentMethod;
            let cleanPaymentMethod = "-";
            if (rawPaymentMethod === "CREDITCARD" || rawPaymentMethod === "CREDIT_CARD" || rawPaymentMethod === "Cartão de Crédito") cleanPaymentMethod = "Cartão de Crédito";
            else if (rawPaymentMethod === "PIX") cleanPaymentMethod = "PIX";
            else if (rawPaymentMethod && rawPaymentMethod !== "-") cleanPaymentMethod = String(rawPaymentMethod);

            return {
              id: ord._id || ord.orderRef,
              orderNumber: ord.orderRef || ord._id,
              userId: ord.customer?.ref || ord.userId || "",
              userName: ord.customer?.name || ord.userName || "Cliente Netfits",
              productName: pName,
              amountBrl: Number(ord.summary?.finalPrice ?? ord.summary?.total ?? ord.amountBrl ?? 0),
              pointsPaid: Number(ord.summary?.points?.amount ?? ord.pointsPaid ?? 0),
              status: ord.status || "PAID",
              createdAt: ord.paidAt || ord.createdAt || new Date().toISOString(),
              paidAt: ord.paidAt,
              summary: ord.summary,
              customer: ord.customer,
              items: ord.items || [],
              metadata: ord.metadata || ord.rawPayload?.metadata,
              paymentMethod: cleanPaymentMethod,
              sellerName: cleanSeller,
              sellerId: ord.items?.[0]?.sellerId || ord.sellerId || ord.storeId || "RhOFkbZJIN",
              brand: ord.items?.[0]?.brand || ord.brand || "-",
              category: ord.items?.[0]?.category || ord.category || (cleanSeller === "Aguardando Rock" ? "Aguardando Rock" : "Artigos Esportivos"),
              carrier: ord.shipping?.carrier || ord.carrier || "-",
              slaDays: ord.shipping?.slaDays || ord.slaDays || 0,
              trackingCode: ord.shipping?.trackingCode || ord.trackingCode || "-",
              cashbackEarned: ptsEarned,
            };
          });
          this.state.orders = mappedOrders;
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

  public async syncToCloud(specificUser?: SandboxUser): Promise<void> {
    try {
      this.saveToStorageLocally();
      this.broadcastChannel?.postMessage("sync");

      // Transmite cadastro, atualização de saldos E extrato completo de ações para o servidor global assincronamente
      const payload = specificUser
        ? { user: specificUser, transactions: this.state.transactions.slice(0, 10) }
        : {
            users: this.state.users,
            transactions: this.state.transactions,
          };

      await fetch("/api/users-sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
        this.state.activeUserId = "";
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
          } else {
            // Mescla atributos estruturais preservando dados salvos
            mergedUsers[existingIdx] = {
              ...initUser,
              ...mergedUsers[existingIdx],
            };
          }
        }
        // Purgar transações antigas obsoletas se houver
        stored.transactions = (stored.transactions || []).filter(
          (tx) => tx && tx.amount !== 1080 && !tx.description?.includes("1080")
        );

        // Injetar transações oficiais que faltarem
        const existingTxIds = new Set(stored.transactions.map((t) => t.id));
        for (const initTx of INITIAL_TRANSACTIONS) {
          if (!existingTxIds.has(initTx.id)) {
            stored.transactions.push(initTx);
            existingTxIds.add(initTx.id);
          }
        }

        // Sanitização e segregação contábil oficial de badges, feed e treinos no carregamento local:
        for (const tx of stored.transactions) {
          const desc = tx.description || "";
          const isPrimeiraCompra =
            tx.id.includes("primeira_compra") ||
            /primeiro cashback/i.test(desc) ||
            (tx.amount === 40 && !desc.includes("#") && !/gtj|ahk|pfm|sop|doj|wqb|sxz/i.test(desc));

          if (isPrimeiraCompra) {
            tx.id = `tx-badge-${tx.userId}-primeira_compra`;
            tx.description = "🏆 Selo Conquistado: Primeira Compra Pontuada";
            tx.category = "badge";
          } else if (tx.id.startsWith("tx-badge-") || tx.id.includes("badge") || /selo|conquista/i.test(desc)) {
            tx.category = "badge";
          } else if (
            ["view", "click", "like", "share"].includes(tx.category) ||
            /leitura|artigo|desafio|quiz|vídeo|video|curtida|like|click|clique|visualização|feed|fibios|franco|isabella/i.test(desc) ||
            tx.id.includes("feed")
          ) {
            if (tx.category === "workout" || !tx.category) {
              tx.category = "feed";
            }
          }
        }

        // Ordena por data decrescente
        stored.transactions.sort(
          (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );

        // Reconciliação contábil legítima e genérica para TODOS os usuários
        for (const u of mergedUsers) {
          const userTxTotal = stored.transactions
            .filter((t) => t.userId === u.id)
            .reduce((acc, t) => acc + (t.amount || 0), 0);
          if (userTxTotal > 0) {
            u.nfsBalance = userTxTotal;
          }
          // Carrega backup individual salvo estritamente pelo ID do usuário
          try {
            const bRaw = localStorage.getItem(`netfits_profile_saved_${u.id}`);
            if (bRaw) {
              const backup = JSON.parse(bRaw);
              Object.assign(u, backup);
            }
          } catch {}
        }

        stored.users = mergedUsers;

        // Reabilitar e fundir pedidos com INITIAL_ORDERS (garantindo que itens, sellers e meios de pagamento oficiais não sejam perdidos por caches legados)
        if (!stored.orders || stored.orders.length === 0) {
          stored.orders = [...INITIAL_ORDERS];
        } else {
          stored.orders = stored.orders.map((so) => {
            const initMatch = INITIAL_ORDERS.find((io) => io.id === so.id || io.orderNumber === so.orderNumber);
            if (initMatch) {
              const needsHeal = !so.items || so.items.length === 0 || !so.sellerName || so.sellerName === "Aguardando Rock" || !so.paymentMethod || so.paymentMethod === "-";
              if (needsHeal && initMatch.sellerName !== "Aguardando Rock") {
                return {
                  ...initMatch,
                  ...so,
                  items: (so.items && so.items.length > 0) ? so.items : initMatch.items,
                  sellerName: (so.sellerName && so.sellerName !== "Aguardando Rock") ? so.sellerName : initMatch.sellerName,
                  sellerId: so.sellerId || initMatch.sellerId,
                  brand: (so.brand && so.brand !== "-") ? so.brand : initMatch.brand,
                  category: (so.category && so.category !== "Aguardando Rock") ? so.category : initMatch.category,
                  productName: (so.productName && !so.productName.includes("Item não detalhado")) ? so.productName : initMatch.productName,
                  paymentMethod: (so.paymentMethod && so.paymentMethod !== "-") ? so.paymentMethod : initMatch.paymentMethod,
                  carrier: (so.carrier && so.carrier !== "-") ? so.carrier : initMatch.carrier,
                  trackingCode: (so.trackingCode && so.trackingCode !== "-") ? so.trackingCode : initMatch.trackingCode,
                  slaDays: so.slaDays || initMatch.slaDays,
                  metadata: so.metadata || initMatch.metadata,
                };
              }
            }
            return so;
          });

          // Garantir que nenhum pedido de INITIAL_ORDERS falte no stored.orders
          const storedOrderIds = new Set(stored.orders.map((o) => o.id || o.orderNumber));
          for (const initOrd of INITIAL_ORDERS) {
            if (!storedOrderIds.has(initOrd.id) && !storedOrderIds.has(initOrd.orderNumber)) {
              stored.orders.push(initOrd);
              storedOrderIds.add(initOrd.id);
            }
          }
        }

        stored.interactions = (stored.interactions || []).filter((i) => !i.id.startsWith("int-00"));
        if (!stored.activeUserId) {
          stored.activeUserId = "";
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
      activeUserId: "",
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
      // 1. Suporte a simulação por parâmetro de URL (ex: ?user=usr_andre ou ?sim=usr_andre)
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const simUserId = urlParams.get("user") || urlParams.get("sim");
        if (simUserId) {
          const foundSim = this.state.users.find(
            (u) =>
              u.id === simUserId ||
              (u.email && u.email.toLowerCase() === simUserId.toLowerCase()) ||
              u.identifier === simUserId
          );
          if (foundSim) {
            localStorage.setItem(DEVICE_SESSION_KEY, foundSim.id);
            this.state.activeUserId = foundSim.id;
            return foundSim;
          }
        }
      } catch {}

      const deviceUserId = localStorage.getItem(DEVICE_SESSION_KEY);
      if (deviceUserId) {
        const found = this.state.users.find((u) => u.id === deviceUserId);
        if (found) return found;
      }

    }
    if (this.state.activeUserId) {
      const found = this.state.users.find((u) => u.id === this.state.activeUserId);
      if (found) return found;
    }
    return ANONYMOUS_GUEST_USER;
  }

  public useActiveUser(): SandboxUser {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useSyncExternalStore(
      (fn) => this.subscribe(fn),
      () => this.getActiveUser(),
      () => this.getActiveUser()
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
      if (updates.address && (!user.street || !user.number)) {
        const parts = updates.address.split(/[,\-·]/).map((s) => s.trim()).filter(Boolean);
        if (parts[0] && !user.street) user.street = parts[0];
        if (parts[1] && !user.number) user.number = parts[1];
        if (parts[2] && !user.neighborhood) user.neighborhood = parts[2];
        if (parts[3] && !user.city) user.city = parts[3];
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
    id?: string;
    userId: string;
    userName: string;
    amount: number;
    description: string;
    category: SandboxTransaction["category"];
    timestamp?: string;
  }) {
    if (data.id && this.state.transactions.some((t) => t.id === data.id)) {
      return this.state.transactions.find((t) => t.id === data.id)!;
    }
    const newTx: SandboxTransaction = {
      id: data.id || `tx-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      userId: data.userId,
      userName: data.userName,
      amount: data.amount,
      description: data.description,
      category: data.category,
      timestamp: data.timestamp || new Date().toISOString(),
    };
    this.state.transactions.unshift(newTx);
    const targetUser = this.state.users.find((u) => u.id === data.userId);
    if (targetUser) {
      targetUser.nfsBalance = (targetUser.nfsBalance || 0) + data.amount;
    }
    this.saveToStorage();
    return newTx;
  }

  public removeTransaction(txId: string): boolean {
    const idx = this.state.transactions.findIndex((t) => t.id === txId);
    if (idx >= 0) {
      const removed = this.state.transactions.splice(idx, 1)[0];
      const targetUser = this.state.users.find((u) => u.id === removed.userId);
      if (targetUser) {
        targetUser.nfsBalance = Math.max(0, (targetUser.nfsBalance || 0) - removed.amount);
      }
      this.saveToStorage();
      return true;
    }
    return false;
  }

  public recalculateUserBalance(userId: string): number {
    const targetUser = this.state.users.find((u) => u.id === userId);
    if (targetUser) {
      const sum = this.state.transactions
        .filter((t) => t.userId === userId)
        .reduce((acc, t) => acc + (t.amount || 0), 0);
      targetUser.nfsBalance = Math.max(0, sum);
      this.saveToStorage();
      return targetUser.nfsBalance;
    }
    return 0;
  }

  // 3. Cadastro de Novo Atleta (Campos Obrigatórios: Nome, E-mail, Celular, CPF, Data de Nascimento e Endereço Completo)
  public registerAthlete(data: {
    fullName: string;
    email: string;
    phone: string;
    cpf: string;
    birthDate: string;
    zipcode?: string;
    street?: string;
    number?: string;
    complement?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    shortState?: string;
    address?: string;
    password?: string;
    referralCode?: string;
  }): { success: boolean; user?: SandboxUser; error?: string; isDuplicate?: boolean; matchedField?: string } {
    const cleanEmail = data.email.trim().toLowerCase();
    const cleanPhoneDigits = data.phone.replace(/\D/g, "");
    const cleanCpfDigits = data.cpf.replace(/\D/g, "");

    // Reconhecimento universal: se o usuário já existe na base (por CPF de 11 dígitos ou E-mail único),
    // atualiza seus dados cadastrais sem duplicar registro nem colidir por nomes de família.
    const existingUser = this.state.users.find((u) => {
      const uCpf = u.cpf ? u.cpf.replace(/\D/g, "") : "";
      const uEmail = (u.email || u.identifier || "").trim().toLowerCase();
      const matchCpf = Boolean(cleanCpfDigits && cleanCpfDigits.length === 11 && uCpf === cleanCpfDigits);
      const matchEmail = Boolean(cleanEmail && cleanEmail.includes("@") && uEmail === cleanEmail);
      return matchCpf || matchEmail;
    });

    if (existingUser) {
      if (data.fullName?.trim()) existingUser.fullName = data.fullName.trim();
      if (data.email?.trim()) {
        existingUser.email = data.email.trim();
        existingUser.identifier = data.email.trim();
      }
      if (data.phone?.trim()) existingUser.phone = data.phone.trim();
      if (data.cpf?.trim()) existingUser.cpf = data.cpf.trim();
      if (data.birthDate?.trim()) existingUser.birthDate = data.birthDate.trim();
      if (data.zipcode?.trim()) existingUser.zipcode = data.zipcode.trim();
      if (data.street?.trim()) existingUser.street = data.street.trim();
      if (data.number?.trim()) existingUser.number = data.number.trim();
      if (data.complement !== undefined) existingUser.complement = data.complement.trim();
      if (data.neighborhood?.trim()) existingUser.neighborhood = data.neighborhood.trim();
      if (data.city?.trim()) existingUser.city = data.city.trim();
      if (data.state?.trim()) existingUser.state = data.state.trim();
      if (data.shortState?.trim()) existingUser.shortState = data.shortState.trim();
      if (data.address?.trim()) existingUser.address = data.address.trim();
      if (data.password?.trim()) existingUser.passwordHash = data.password.trim();
      this.saveToStorage();
      this.setActiveUser(existingUser.id);
      return { success: true, user: existingUser };
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

    const fullAddr = data.address?.trim() || (data.street ? `${data.street}${data.number ? `, ${data.number}` : ""}${data.neighborhood ? ` - ${data.neighborhood}` : ""}${data.city ? `, ${data.city}` : ""}${data.shortState ? ` · ${data.shortState}` : ""}` : undefined);

    const newUser: SandboxUser = {
      id: newId,
      identifier: data.email,
      email: data.email,
      phone: data.phone,
      cpf: data.cpf,
      birthDate: data.birthDate,
      fullName: data.fullName,
      zipcode: data.zipcode?.trim(),
      street: data.street?.trim(),
      number: data.number?.trim(),
      complement: data.complement?.trim(),
      neighborhood: data.neighborhood?.trim(),
      city: data.city?.trim(),
      state: data.state?.trim(),
      shortState: data.shortState?.trim(),
      address: fullAddr,
      type: "athlete",
      nfsBalance: initialNfs,
      referralCode: newRefCode,
      referredBy: referrer ? referrer.referralCode : undefined,
      associatedWith: referrer && referrer.type === "associado" ? referrer.referralCode : undefined,
      registeredAt: new Date().toISOString(),
      passwordHash: data.password?.trim() || "",
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
      const refTxId = `tx-${Date.now()}-referrer`;
      this.state.transactions.unshift({
        id: refTxId,
        userId: referrer.id,
        userName: referrer.fullName,
        amount: referralBonus,
        description: `Bônus por Indicar Novo Usuário (${newUser.fullName})`,
        category: "referral",
        timestamp: new Date().toISOString(),
      });

      if (referrer.email && referrer.email.includes("@")) {
        dispatchPointsCreditedEmailSafe(referrer.email, {
          nomeUsuario: referrer.fullName,
          pontos: referralBonus,
          origem: `Indicação de Amigo: ${newUser.fullName} se cadastrou na Netfits`,
          saldoTotal: referrer.nfsBalance,
          dataHora: new Date().toLocaleString("pt-BR"),
        }).catch((err) => console.warn("[registerAthlete] Falha ao notificar indicação:", err));
      }
    }

    this.saveToStorage();
    this.setActiveUser(newUser.id);
    this.syncToCloud(newUser);
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
    this.syncToCloud(newAssociado);
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

    if (active.email && active.email.includes("@")) {
      dispatchShopOrderEmailSafe(active.email, {
        nomeUsuario: active.fullName,
        numeroPedido: newOrder.orderNumber,
        produto: productName,
        parceiro: "Netfits Shop",
        quantidade: 1,
        pontosUtilizados: pointsPrice,
        valorDescontoPontos: (pointsPrice * 0.01).toFixed(2),
        formaPagamento: "Saldo Netfits (nfs)",
        saldoRestante: active.nfsBalance,
        dataCompra: new Date().toLocaleDateString("pt-BR"),
      }).catch((err) => {
        console.warn("[buyShopProduct] Falha no disparo de confirmação:", err);
      });
    }

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
        localStorage.removeItem(DEVICE_SESSION_KEY);
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
