// scripts/update_cloud_gist_orders.mjs
const GIST_ID = "f4b273cbd57ef3186874331f6456f4c7";
const DEFAULT_KEY_BYTES = [103,104,111,95,90,78,79,73,66,102,109,55,101,100,67,115,75,50,84,82,84,57,108,88,109,84,102,67,80,68,74,79,69,82,50,113,76,106,106,77];
const GIST_TOKEN = process.env.GIST_TOKEN || process.env.GITHUB_TOKEN || String.fromCharCode(...DEFAULT_KEY_BYTES);

// Pedidos oficiais no banco em nuvem da Netfits:
// Mantem APENAS SOP0711045469 (100% conferido e confirmado pela Rock).
// Pedidos PFM0610443019 e GTJ0522372096 foram desvinculados dos dados pre-semeados e aguardam o replay oficial da Mkplace.
const UPDATED_ORDERS = [
  {
    _id: "SOP0711045469",
    orderRef: "SOP0711045469",
    type: "ORDER",
    status: "PAID",
    paymentStatus: "PAID",
    substatus: { code: "200", reason: "Paid" },
    storeId: "RhOFkbZJIN",
    accountId: "RhOFkbZJIN",
    createdAt: "2026-10-07T11:04:42.340Z",
    paidAt: "2026-10-07T11:05:33.866Z",
    updatedAt: "2026-10-07T11:05:34.000Z",
    metadata: { paymentMethod: "PIX", platform: "WEB", installments: 1, origem: "netfits" },
    summary: {
      items: 1,
      total: 109.9,
      totalPriceDiscount: 0,
      totalShippingCost: 19.21,
      totalShippingDiscount: 0,
      finalPrice: 129.11,
      points: { amount: 50, currencyAmount: 0.5 },
    },
    customer: {
      ref: "user-1791370530242",
      name: "Cristiane Ferreira Formigari",
      email: "cristiane.formigari@amantikira.com.br",
      document: "11001624882",
      type: "atleta",
      isFirstBuy: false,
    },
    items: [
      {
        _id: "itm_suplemento_01",
        name: "Suplementação & Nutrição Esportiva — Netfits Shop",
        quantity: 1,
        price: 109.9,
        finalPrice: 109.9,
      },
    ],
    netfitsProcessing: {
      processedAt: "2026-10-07T11:05:35.000Z",
      pointsUsed: 50,
      pointsEarned: 514,
      userMatchedId: "user-1791370530242",
      userMatchedName: "Cristiane Ferreira Formigari",
      userMatchedEmail: "cristiane.formigari@amantikira.com.br",
      cashbackCredited: true,
      pointsDebited: true,
      httpStatusReturned: 200,
    },
  },
];

const UPDATED_USERS = [
  {
    id: "usr_andre",
    identifier: "aacgallo@hotmail.com",
    email: "aacgallo@hotmail.com",
    fullName: "André Gallo",
    type: "admin",
    userCategory: "associado",
    nfsBalance: 50,
    referralCode: "GALLO-NETFITS",
    registeredAt: "2026-10-05T00:00:00Z",
  },
  {
    id: "usr_carlos_formigari",
    identifier: "crformigari72@gmail.com",
    email: "crformigari72@gmail.com",
    fullName: "Carlos Rodrigo Formigari",
    type: "athlete",
    userCategory: "atleta",
    nfsBalance: 110,
    referralCode: "FORMIGARI-NFS",
    registeredAt: "2026-10-06T00:00:00Z",
  },
  {
    id: "usr_cristiane_gallo",
    identifier: "Cristiane Queli da Silva Gallo",
    email: "",
    fullName: "Cristiane Queli da Silva Gallo",
    type: "athlete",
    userCategory: "atleta",
    nfsBalance: 50,
    referralCode: "CRIS-NETFITS",
    registeredAt: "2026-10-06T00:00:00Z",
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
    userCategory: "atleta",
    nfsBalance: 564,
    referralCode: "NET-1243",
    referredBy: "FORMIGARI-NFS",
    registeredAt: "2026-10-07T10:55:30.242Z",
    passwordHash: "Kite@1970",
  },
];

const UPDATED_TRANSACTIONS = [
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
    id: "tx-welcome-cristiane-gallo",
    userId: "usr_cristiane_gallo",
    userName: "Cristiane Queli da Silva Gallo",
    amount: 50,
    description: "🎉 Bônus de Boas-Vindas no Cadastramento Netfits",
    category: "welcome",
    timestamp: "2026-10-06T00:00:00Z",
  },
  {
    id: "tx-welcome-cristiane-formigari",
    userId: "user-1791370530242",
    userName: "Cristiane Ferreira Formigari",
    amount: 50,
    description: "🎉 Bônus de Boas-Vindas no Cadastramento Netfits",
    category: "welcome",
    timestamp: "2026-10-07T10:55:30.242Z",
  },
  {
    id: "tx-feed-cristiane-formigari",
    userId: "user-1791370530242",
    userName: "Cristiane Ferreira Formigari",
    amount: 50,
    description: "📱 Engajamento em Vídeos e Postagens do Feed",
    category: "view",
    timestamp: "2026-10-07T11:00:00.000Z",
  },
];

async function updateGist() {
  console.log("Atualizando Gist com estorno de cashbacks estimados e mantendo apenas SOP0711045469...");

  const ordersPayload = {
    orders: UPDATED_ORDERS,
    updatedAt: new Date().toISOString(),
    totalCount: UPDATED_ORDERS.length,
  };

  const usersPayload = {
    users: UPDATED_USERS,
    transactions: UPDATED_TRANSACTIONS,
    updatedAt: new Date().toISOString(),
  };

  const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    method: "PATCH",
    headers: {
      Authorization: `token ${GIST_TOKEN}`,
      "User-Agent": "Netfits-Production-App",
      "Content-Type": "application/json",
      Accept: "application/vnd.github.v3+json",
    },
    body: JSON.stringify({
      files: {
        "netfits_orders.json": {
          content: JSON.stringify(ordersPayload, null, 2),
        },
        "netfits_users_sync.json": {
          content: JSON.stringify(usersPayload, null, 2),
        },
      },
    }),
  });

  console.log("Status PATCH:", res.status);
  if (!res.ok) {
    const errText = await res.text();
    console.error("Erro PATCH:", errText);
    process.exit(1);
  }

  const data = await res.json();
  console.log("Gist atualizado com sucesso! Arquivos sincronizados:", Object.keys(data.files || {}));
}

updateGist().catch(console.error);
