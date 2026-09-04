import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/react-start/server";
import {
  generateMkplaceJwt,
  verifyMkplaceJwt,
  buildMkplaceProfile,
  buildMkplaceLoyaltyWallet,
  processMkplaceOrderNotification,
  getMkplaceConfig,
  getMkplaceWebviewUrl,
} from "./lib/integrations/mkplace";

// Cache de Sincronização em Nuvem / Servidor para Testes Multi-Dispositivo
const DEFAULT_PRESEEDED_USERS = [
  {
    id: "usr_101",
    fullName: "Kite Larsen",
    email: "atleta@netfits.com.br",
    phone: "11999998888",
    cpf: "12345678900",
    nfsBalance: 1850,
    userCategory: "atleta",
    street: "Rua Oscar Freire",
    number: "500",
    complement: "Apto 42",
    neighborhood: "Cerqueira César",
    city: "São Paulo",
    state: "São Paulo",
    shortState: "SP",
    zipcode: "01426-001",
    registeredAt: "2026-01-15T10:00:00Z",
  },
  {
    id: "usr_102",
    fullName: "André Gallo",
    email: "andre.gallo@netfits.com.br",
    phone: "11987654321",
    cpf: "98765432111",
    nfsBalance: 12500,
    userCategory: "associado",
    street: "Av. Brigadeiro Faria Lima",
    number: "2000",
    complement: "Conjunto 81",
    neighborhood: "Itaim Bibi",
    city: "São Paulo",
    state: "São Paulo",
    shortState: "SP",
    zipcode: "01452-000",
    registeredAt: "2026-02-01T14:30:00Z",
  },
  {
    id: "usr_104",
    fullName: "Luísa Formigari",
    email: "luisa.formigari@netfits.com.br",
    phone: "11988887777",
    cpf: "98765432122",
    nfsBalance: 8400,
    userCategory: "associado",
    street: "Rua Bela Cintra",
    number: "1200",
    complement: "Apto 91",
    neighborhood: "Consolação",
    city: "São Paulo",
    state: "São Paulo",
    shortState: "SP",
    zipcode: "01415-000",
    registeredAt: "2026-02-01T14:30:00Z",
  },
  {
    id: "usr_103",
    fullName: "Dra. Isabella Santos",
    email: "isabella@netfits.com.br",
    phone: "11977776666",
    cpf: "45678912344",
    nfsBalance: 4200,
    userCategory: "especialista",
    street: "Alameda Santos",
    number: "1800",
    complement: "Consultório 12",
    neighborhood: "Cerqueira César",
    city: "São Paulo",
    state: "São Paulo",
    shortState: "SP",
    zipcode: "01418-102",
    registeredAt: "2026-03-10T09:15:00Z",
  },
];

let globalServerUsers: any[] = [...DEFAULT_PRESEEDED_USERS];
let lastSyncTimestamp = new Date().toISOString();

const handler = createStartHandler(defaultStreamHandler);

function getCorsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Netfits-Signature, X-Netfits-Merchant-Id, Idempotency-Key",
    "Content-Type": "application/json",
  };
}

function resolveUserFromToken(token?: string | null): any | null {
  if (!token) return null;
  const cleanToken = token.replace(/^Bearer\s+/i, "").trim();
  const verification = verifyMkplaceJwt(cleanToken);
  const payload = verification.payload;
  if (!payload) return null;

  const customerId = payload.customerId || payload.sub;
  const user = globalServerUsers.find(
    (u) => u.id === customerId || u.email === payload.email || u.cpf === customerId
  );
  if (user) return user;

  // Fallback se não estiver no array de cache
  return {
    id: customerId,
    fullName: payload.name || "Atleta Netfits",
    email: payload.email || `${customerId}@netfits.com.br`,
    phone: "11999998888",
    cpf: "12345678900",
    nfsBalance: 1500,
    userCategory: "atleta",
  };
}

export default {
  async fetch(req: Request) {
    const url = new URL(req.url);
    const corsHeaders = getCorsHeaders();

    if (req.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    // ==========================================
    // ENDPOINTS ROCK ENCANTECH / MKPLACE
    // ==========================================

    // 1. Perfil do Cliente (GET/PUT /customer/profile)
    if (url.pathname === "/customer/profile" || url.pathname === "/customer/profile/") {
      const authHeader = req.headers.get("Authorization");
      if (!authHeader) {
        return new Response(
          JSON.stringify({
            exceptionType: "ForbiddenError",
            message: "You have not permission for this operation (customer/customer/get)",
          }),
          { status: 403, headers: corsHeaders }
        );
      }

      const user = resolveUserFromToken(authHeader);
      if (!user) {
        return new Response(
          JSON.stringify({
            exceptionType: "NotFoundError",
            message: "Customer profile not found",
          }),
          { status: 404, headers: corsHeaders }
        );
      }

      if (req.method === "GET") {
        const profile = buildMkplaceProfile(user);
        return new Response(JSON.stringify(profile), { status: 200, headers: corsHeaders });
      }

      if (req.method === "PUT") {
        try {
          const body = await req.json();
          if (body.name) user.fullName = body.name;
          if (Array.isArray(body.phones) && body.phones[0]?.number) {
            user.phone = `${body.phones[0].areaCode || "11"}${body.phones[0].number}`;
          }
          if (Array.isArray(body.addresses) && body.addresses[0]) {
            const addr = body.addresses[0];
            if (addr.street) user.street = addr.street;
            if (addr.number) user.number = addr.number;
            if (addr.complement !== undefined) user.complement = addr.complement;
            if (addr.neighborhood) user.neighborhood = addr.neighborhood;
            if (addr.city) user.city = addr.city;
            if (addr.state) user.state = addr.state;
            if (addr.shortState) user.shortState = addr.shortState;
            if (addr.zipcode) user.zipcode = addr.zipcode;
          }
          if (body.gender !== undefined) user.gender = body.gender;

          const updatedProfile = buildMkplaceProfile(user);
          return new Response(JSON.stringify(updatedProfile), { status: 200, headers: corsHeaders });
        } catch (err: any) {
          return new Response(
            JSON.stringify({ exceptionType: "BadRequestError", message: err.message || "Invalid payload" }),
            { status: 400, headers: corsHeaders }
          );
        }
      }
    }

    // 2. Carteira de Fidelidade (GET /loyalty/wallet)
    if (url.pathname === "/loyalty/wallet" || url.pathname === "/loyalty/wallet/") {
      const authHeader = req.headers.get("Authorization");
      if (!authHeader) {
        return new Response(
          JSON.stringify({
            exceptionType: "ForbiddenError",
            message: "Autenticação obrigatória para consulta de carteira",
          }),
          { status: 403, headers: corsHeaders }
        );
      }

      const user = resolveUserFromToken(authHeader);
      const balance = user ? (user.nfsBalance ?? 1500) : 1500;
      const walletResponse = buildMkplaceLoyaltyWallet(balance);
      return new Response(JSON.stringify(walletResponse), { status: 200, headers: corsHeaders });
    }

    // 3. Webhook de Pedidos & Pagamentos da Mkplace (/api/marketplace/mkplace/webhook)
    if (url.pathname === "/api/marketplace/mkplace/webhook" || url.pathname === "/api/marketplace/mkplace/webhook/") {
      if (req.method === "POST") {
        try {
          const body = await req.json();
          const customerId = body?.order?.customerId;
          const user = globalServerUsers.find((u) => u.id === customerId || u.email === body?.order?.customerEmail);
          const isClubMember = user?.userCategory === "associado" || user?.isClubMember === true;

          const result = processMkplaceOrderNotification(body, isClubMember);

          // Credita cashback no usuário se for status aprovado/faturado
          if (user && result.nfsEarned > 0) {
            user.nfsBalance = (user.nfsBalance || 0) + result.nfsEarned;
            lastSyncTimestamp = new Date().toISOString();
          }

          return new Response(JSON.stringify(result), { status: 200, headers: corsHeaders });
        } catch (err: any) {
          return new Response(
            JSON.stringify({ success: false, error: err.message || "Erro no processamento do webhook" }),
            { status: 400, headers: corsHeaders }
          );
        }
      }
    }

    // 4. Emissor de Token SSO Mkplace (/api/marketplace/mkplace/token)
    if (url.pathname === "/api/marketplace/mkplace/token" || url.pathname === "/api/marketplace/mkplace/token/") {
      let targetUser = globalServerUsers[0]; // Kite Larsen padrão

      if (req.method === "POST") {
        try {
          const body = await req.json();
          if (body?.userId) {
            const found = globalServerUsers.find((u) => u.id === body.userId || u.email === body.userId);
            if (found) targetUser = found;
          }
        } catch {}
      } else if (req.method === "GET") {
        const userId = url.searchParams.get("userId") || url.searchParams.get("email");
        if (userId) {
          const found = globalServerUsers.find((u) => u.id === userId || u.email === userId);
          if (found) targetUser = found;
        }
      }

      const token = generateMkplaceJwt(targetUser);
      const webviewUrl = getMkplaceWebviewUrl(targetUser);
      const config = getMkplaceConfig();

      return new Response(
        JSON.stringify({
          success: true,
          user: {
            id: targetUser.id,
            fullName: targetUser.fullName,
            email: targetUser.email,
          },
          token,
          webviewUrl,
          expiresInSeconds: 86400,
          keyId: config.keyId,
          storeId: config.storeId,
          accountId: config.accountId,
          isMock: config.isMock,
        }),
        { status: 200, headers: corsHeaders }
      );
    }

    // 5. Diagnóstico de Prontidão da Mkplace (/api/marketplace/mkplace/status)
    if (url.pathname === "/api/marketplace/mkplace/status" || url.pathname === "/api/marketplace/mkplace/status/") {
      const config = getMkplaceConfig();
      return new Response(
        JSON.stringify({
          status: "ready",
          partner: "Rock Encantech / Mkplace",
          mode: config.isMock ? "sandbox_mock_keys" : "live_credentials",
          config: {
            storeId: config.storeId,
            accountId: config.accountId,
            keyId: config.keyId,
            webviewUrl: config.webviewUrl,
          },
          endpoints: [
            { method: "GET", path: "/customer/profile", description: "Obter perfil do cliente (Bearer RS256)" },
            { method: "PUT", path: "/customer/profile", description: "Atualizar perfil do cliente (Bearer RS256)" },
            { method: "GET", path: "/loyalty/wallet", description: "Consultar carteira de pontos (Bearer RS256)" },
            { method: "POST", path: "/api/marketplace/mkplace/webhook", description: "Recebimento de webhooks de pedidos/pagamentos" },
            { method: "POST", path: "/api/marketplace/mkplace/token", description: "Emissão interna de token SSO para Webview" },
          ],
          operationalRules: {
            cashbackNormalNfsPerBrl: 4.0,
            cashbackClubNfsPerBrl: 8.0,
            firstPurchaseBonusNfs: 100,
            friendCommissionPct: 5.0,
            netfitsTakeRatePct: 6.0,
            settlementPeriodDays: 14,
          },
        }),
        { status: 200, headers: corsHeaders }
      );
    }

    // ==========================================
    // ENDPOINTS DE SINCRONIZAÇÃO DE USUÁRIOS
    // ==========================================
    if (url.pathname === "/api/users-sync" || url.pathname === "/api/users-sync/") {
      if (req.method === "POST") {
        try {
          const body = await req.json();
          const incomingUsers = Array.isArray(body?.users)
            ? body.users
            : body?.user
            ? [body.user]
            : [];

          const userMap = new Map<string, any>();
          for (const u of globalServerUsers) {
            if (u && u.id) userMap.set(u.id, u);
          }
          for (const u of incomingUsers) {
            if (u && u.id) {
              const existing = userMap.get(u.id);
              userMap.set(u.id, { ...existing, ...u });
            }
          }
          globalServerUsers = Array.from(userMap.values());
          lastSyncTimestamp = new Date().toISOString();

          return new Response(
            JSON.stringify({
              success: true,
              count: globalServerUsers.length,
              users: globalServerUsers,
              updatedAt: lastSyncTimestamp,
            }),
            { status: 200, headers: corsHeaders }
          );
        } catch (err) {
          return new Response(
            JSON.stringify({ success: false, error: String(err) }),
            { status: 400, headers: corsHeaders }
          );
        }
      }

      // GET: Retornar todos os usuários sincronizados no servidor
      return new Response(
        JSON.stringify({
          success: true,
          count: globalServerUsers.length,
          users: globalServerUsers,
          updatedAt: lastSyncTimestamp,
        }),
        { status: 200, headers: corsHeaders }
      );
    }

    return handler(req);
  },
};
