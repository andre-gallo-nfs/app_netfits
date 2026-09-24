/**
 * Netfits — Rock Encantech (Mkplace) Integration Service
 * 
 * Implementação técnica turnkey para a integração de Lojas (Stores) conforme
 * a documentação oficial da Mkplace (https://docs.apps.mkplace.com.br):
 * - Autenticação JWT RS256 com claims customizadas e kid
 * - Endpoints de Perfil do Cliente (/customer/profile)
 * - Endpoints de Carteira de Pontos (/loyalty/wallet)
 * - Processamento de Webhooks de Pedidos e Pagamentos
 * - Parâmetros operacionais 2026 (4.0 nfs/R$, 5% amigo, 6% take rate, 1.0x Clube, 0 nfs 1ª compra)
 */

import crypto from "node:crypto";

// ==========================================
// 1. CONFIGURAÇÕES & CHAVES RSA DE HOMOLOGAÇÃO
// ==========================================

const DEFAULT_DEV_PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCbjuornMIroe1d
VhSIFO+YZz6nUOzoka1aU09g2RJvctgOXeWfSXpnBqFvDTMQxnu2/YPKrEdw2e6a
zjQ9YwsrDmOUBco6MJqMh7aPdcH40Ayc6jE1L9X1TK/qP39oilxtb5c61x5Ez4pv
DryB5+Tz66QV5CsXsoYVEf41EqWJwpFmBewGWCLO28sPsmdp1RXxj5xiUJTBbV9j
mujPKGsuYo4U3pNWr89YAUwMD9PVQ9oAbbWXQhie62uhnVrNHMJJT+7mbWKL8eb8
P4Bq0mV2YqB7BP6415M7c9lwatAT0PcgmesOZG695qjyhROov+q+7+YA6WVguEGM
5x3Mc4yVAgMBAAECggEAFcQPe/65JIXJwq+Su9/CDp8TozGtlHUdvm+9wZ1d+P4m
wQveX0VWvSeuWu2L4aMEGHysfiVQ8bdsrXiA0r4TB/lBcarFuxKl7Vfn8XbWp0vl
F+ek7v48f9A1JR+xYh1KBX4BuRf0gkhP5G45bivWW1LzaKS+atht7nDQEvkC9J1v
BJO5Wdk7agIFaRhBgOiKMWZmANpT4IyOR3N8I7LDpxLclHPNslxN3vFfal8Ak4Gb
GbHYPt6o3zdpJ7FWXR29Vw5w94xVeeaaGlQAUNNoJoTPG+fbG45yFkMB9i4BFNSe
SXvDpfKTuf39plYXbjhvqDkD4NyrQ1taq+Nrpmcy2QKBgQDKx/Xzd26QkhY4Z82s
ojP5ioQg/2Hty+fGLP8jqrWyVkpqIGFAvV/9edEFj2ZMmw8KHlGuUbNtiUnFMjBY
5kAt4dyJKP09OraGYeIkLCEynvWOxOIjHZ7vBZN3x7TxhvP+wOObR6T8FjqgNuRC
+2CADV4zv7oFYcx4UBV67CSJowKBgQDEYj5CcFrS29v6iD6pcE2p8aot9xtpLpKH
ZulkIBFdgPqAjB/oZcbaGLlWoVVqWMxilE5WM42rpXPbDl9FR/RaM920hbwp1VVl
YPbUqADYyG+JSdi8zV90yZVVgoVQbcWZrRjT1RdIw2302Mfn1vkTdk9rEcQ5v6TD
npUDXNnkZwKBgBJavxxmdw+G6ZP5cVhq5iF0NDl4ZDjN+BCsCfwEe6XEwb+RZrwh
aArdd9n0/OF6N4ZG8EXDB2amwpKi1FV3od+FThzsJN/h7JuFSJ7Vj7uxP7DIiV98
UuJ3sr1oyiwCdxtcAj4P4hMfP/c4gLi/YCC3FQvCEuhhzcwmE4uozDXZAoGAWqOd
aLzCrp+bID7R7RJQRiesDBsJI7rDFouBHR1P5oApHjuOXozbAr52jG1aJwNlEfqx
TUfuE1MB7hDsF+Xl+dwGb9NpzUURbQEb63q/KU8Za5wR1NJVRGnl6tma/kwr74nc
86heXs8UaPXFDlRCEaGBdkF099JkEYWX8T1hs/ECgYAa4hMQPcuNOiIE8gOGdiMB
K9t3FBviOiYBy8ZTVjLu698RYidb0Eysfv9hk82xiShtTQhgX+zeUDFPRxILbB0C
TygmeiKljoT4GUJPpZ/e3UPK98UVILLDYr4EE2i4U8XA9f38Ecw/RyDG4Cmc8lYm
/okb6u0MAAZ2ETxrdxv6wA==
-----END PRIVATE KEY-----`;

const DEFAULT_DEV_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAm47qK5zCK6HtXVYUiBTv
mGc+p1Ds6JGtWlNPYNkSb3LYDl3ln0l6Zwahbw0zEMZ7tv2DyqxHcNnums40PWML
Kw5jlAXKOjCajIe2j3XB+NAMnOoxNS/V9Uyv6j9/aIpcbW+XOtceRM+Kbw68gefk
8+ukFeQrF7KGFRH+NRKlicKRZgXsBlgiztvLD7JnadUV8Y+cYlCUwW1fY5rozyhr
LmKOFN6TVq/PWAFMDA/T1UPaAG21l0IYnutroZ1azRzCSU/u5m1ii/Hm/D+AatJl
dmKgewT+uNeTO3PZcGrQE9D3IJnrDmRuveao8oUTqL/qvu/mAOllYLhBjOcdzHOM
lQIDAQAB
-----END PUBLIC KEY-----`;

export interface MkplaceConfig {
  storeId: string;
  accountId: string;
  keyId: string;
  privateKey: string;
  publicKey: string;
  webviewUrl: string;
  webhookSecret: string;
  isMock: boolean;
}

export function getMkplaceConfig(): MkplaceConfig {
  const env = typeof process !== "undefined" && process.env ? process.env : {};
  const hasRealKey = Boolean(env.MKPLACE_PRIVATE_KEY && env.MKPLACE_PRIVATE_KEY.length > 50);
  const privateKey = hasRealKey
    ? env.MKPLACE_PRIVATE_KEY!.replace(/\\n/g, "\n")
    : DEFAULT_DEV_PRIVATE_KEY;

  // Auto-detecta o KID correto com base no par de chaves RSA utilizado
  let detectedKeyId = "mulOAaj5iTIAWtzvYBstH24efBhTbD7tISvBTVJCvBA"; // Default: Staging
  if (privateKey.includes("MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCbBxVJ2tk1vLo1")) {
    detectedKeyId = "PUQ4cwt2n3Czt4aiW-DaXHttZIYebVUmhJVfZK1zgDw"; // Chave de Produção Oficial
  } else if (privateKey.includes("MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCbjuornMIroe1d")) {
    detectedKeyId = "mulOAaj5iTIAWtzvYBstH24efBhTbD7tISvBTVJCvBA"; // Chave de Homologação (Staging)
  }

  const finalKeyId = env.MKPLACE_KEY_ID && env.MKPLACE_KEY_ID !== "nfs-mkplace-rsa-v1"
    ? env.MKPLACE_KEY_ID
    : detectedKeyId;

  return {
    storeId: env.MKPLACE_STORE_ID || "RhOFkbZJIN",
    accountId: env.MKPLACE_ACCOUNT_ID || "RhOFkbZJIN",
    keyId: finalKeyId,
    privateKey,
    publicKey: env.MKPLACE_PUBLIC_KEY
      ? env.MKPLACE_PUBLIC_KEY.replace(/\\n/g, "\n")
      : DEFAULT_DEV_PUBLIC_KEY,
    webviewUrl: env.MKPLACE_WEBVIEW_URL || "https://netfits-ruddy.vercel.app",
    webhookSecret: env.MKPLACE_WEBHOOK_SECRET || "sec_nfs_mkplace_default_2026",
    isMock: !hasRealKey,
  };
}

// ==========================================
// 2. MOTOR CRIPTOGRÁFICO JWT RS256
// ==========================================

function base64UrlEncode(str: string | Buffer): string {
  const buf = typeof str === "string" ? Buffer.from(str, "utf8") : str;
  return buf
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function base64UrlDecode(str: string): string {
  let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) {
    base64 += "=";
  }
  return Buffer.from(base64, "base64").toString("utf8");
}

export interface MkplaceTokenUser {
  id: string;
  fullName: string;
  email: string;
  cpf?: string;
  phone?: string;
}

export interface MkplaceJwtHeader {
  alg: "RS256";
  typ: "JWT";
  kid: string;
}

export interface MkplaceJwtPayload {
  exp: number;
  iat: number;
  sub: string;
  typ: "Bearer";
  azp: "customer-services";
  realm_access: {
    roles: string[];
  };
  scope: "email openid profile";
  email_verified: boolean;
  clientId: "customer-services";
  customerId: string;
  name: string;
  preferred_username: string;
  storeId: string;
  email: string;
}

/**
 * Gera um token JWT assinado com algoritmo RS256 em estrita conformidade com
 * o contrato exigido pela Rock Encantech (Mkplace).
 */
export function generateMkplaceJwt(user: MkplaceTokenUser, expiresInSeconds = 86400): string {
  const config = getMkplaceConfig();
  const now = Math.floor(Date.now() / 1000);

  const header: MkplaceJwtHeader = {
    alg: "RS256",
    typ: "JWT",
    kid: config.keyId,
  };

  const customerId = user.id;

  const payload: MkplaceJwtPayload = {
    exp: now + expiresInSeconds,
    iat: now,
    sub: customerId,
    typ: "Bearer",
    azp: "customer-services",
    realm_access: {
      roles: [
        "profile:roles=STORE",
        `profile:accountId=${config.accountId}`,
        `profile:storeId=${config.storeId}`,
        `profile:customerId=${customerId}`,
      ],
    },
    scope: "email openid profile",
    email_verified: true,
    clientId: "customer-services",
    customerId,
    name: user.fullName || "Atleta Netfits",
    preferred_username: user.email,
    storeId: config.storeId,
    email: user.email,
  };

  const headerEncoded = base64UrlEncode(JSON.stringify(header));
  const payloadEncoded = base64UrlEncode(JSON.stringify(payload));
  const signingInput = `${headerEncoded}.${payloadEncoded}`;

  const signer = crypto.createSign("RSA-SHA256");
  signer.update(signingInput);
  signer.end();

  const signature = signer.sign(config.privateKey);
  const signatureEncoded = base64UrlEncode(signature);

  return `${signingInput}.${signatureEncoded}`;
}

/**
 * Valida a assinatura de um token JWT RS256 da Mkplace e extrai o payload.
 */
export function verifyMkplaceJwt(token: string): { valid: boolean; payload?: MkplaceJwtPayload; error?: string } {
  try {
    const parts = token.trim().split(".");
    if (parts.length !== 3) {
      return { valid: false, error: "Formato de JWT inválido (esperado header.payload.signature)" };
    }

    const [headerB64, payloadB64, signatureB64] = parts;
    const config = getMkplaceConfig();

    const verifier = crypto.createVerify("RSA-SHA256");
    verifier.update(`${headerB64}.${payloadB64}`);
    verifier.end();

    const signatureBuf = Buffer.from(signatureB64.replace(/-/g, "+").replace(/_/g, "/"), "base64");
    const isSignatureValid = verifier.verify(config.publicKey, signatureBuf);

    if (!isSignatureValid) {
      return { valid: false, error: "Assinatura RS256 inválida para a chave pública registrada." };
    }

    const payloadJson = JSON.parse(base64UrlDecode(payloadB64));
    const now = Math.floor(Date.now() / 1000);

    if (payloadJson.exp && payloadJson.exp < now) {
      return { valid: false, error: "Token expirado.", payload: payloadJson };
    }

    return { valid: true, payload: payloadJson };
  } catch (err: any) {
    return { valid: false, error: err.message || "Erro ao verificar JWT" };
  }
}

/**
 * Decodifica o payload de um token sem validar a assinatura criptográfica
 * (útil para extração rápida de claims e inspeção de customerId).
 */
export function decodeMkplaceJwtWithoutVerification(token: string): MkplaceJwtPayload | null {
  try {
    const parts = token.trim().split(".");
    if (parts.length < 2) return null;
    return JSON.parse(base64UrlDecode(parts[1]));
  } catch {
    return null;
  }
}

/**
 * Gera a URL completa para abertura da Webview do Marketplace acoplada com o token SSO.
 */
export function getMkplaceWebviewUrl(user: MkplaceTokenUser): string {
  const config = getMkplaceConfig();
  const token = generateMkplaceJwt(user);
  const baseUrl = config.webviewUrl.replace(/\/+$/, "");
  return `${baseUrl}?token=${encodeURIComponent(token)}`;
}

// ==========================================
// 3. CONTRATOS DO PERFIL DO CLIENTE (/customer/profile)
// ==========================================

export interface MkplaceAddress {
  isPrimary?: boolean;
  receiverName: string;
  street: string;
  number: string;
  complement?: string | null;
  neighborhood: string;
  city: string;
  state: string;
  shortState: string;
  zipcode: string;
  countryCode?: string;
  type?: string;
  metadata?: Record<string, any>;
}

export interface MkplacePhone {
  countryCode: string;
  areaCode: string;
  number: string;
  isWhatsapp?: boolean;
}

export interface MkplaceCustomerProfile {
  _id?: string;
  storeId?: string;
  name: string;
  email: string;
  document: string;
  type: "individual" | "company";
  addresses: MkplaceAddress[];
  phones: MkplacePhone[];
  gender?: string | null;
  verifyToken: string;
}

export interface MkplaceUpdateProfileRequest {
  name: string;
  phones?: MkplacePhone[];
  addresses?: MkplaceAddress[];
  gender?: string | null;
}

/**
 * Mapeia um usuário Netfits para o contrato oficial da Mkplace de Perfil do Cliente.
 */
export function buildMkplaceProfile(user: any): MkplaceCustomerProfile {
  const config = getMkplaceConfig();
  const rawPhone = user.phone || "11999998888";
  const digits = rawPhone.replace(/\D/g, "");
  const areaCode = digits.length >= 10 ? digits.slice(-11, -9) : "11";
  const number = digits.length >= 10 ? digits.slice(-9) : digits;

  const rawCpf = (user.cpf || "12345678900").replace(/\D/g, "");

  return {
    _id: String(user.id || "usr_101"),
    storeId: config.storeId,
    name: user.fullName || "Atleta Netfits",
    email: user.email || "atleta@netfits.com.br",
    document: rawCpf,
    type: "individual",
    addresses: [
      {
        isPrimary: true,
        receiverName: user.fullName || "Atleta Netfits",
        street: user.street || "Av. Paulista",
        number: user.number || "1000",
        complement: user.complement || "Apto Netfits",
        neighborhood: user.neighborhood || "Bela Vista",
        city: user.city || "São Paulo",
        state: user.state || "São Paulo",
        shortState: user.shortState || "SP",
        zipcode: user.zipcode || "01310-100",
        countryCode: "BR",
        type: "residential",
      },
    ],
    phones: [
      {
        countryCode: "55",
        areaCode: areaCode || "11",
        number: number || "999998888",
        isWhatsapp: true,
      },
    ],
    gender: user.gender || null,
    verifyToken: `vrf_${crypto.createHash("sha256").update(String(user.id || "") + String(user.email || "")).digest("hex").slice(0, 16)}`,
  };
}

// ==========================================
// 4. CONTRATOS DA CARTEIRA DE PONTOS (/loyalty/wallet)
// ==========================================

/**
 * Contrato oficial do endpoint de wallet consumido pelo checkoutSimulation da Mkplace (wallet-checkoutSimulation.pdf).
 * Tipo de retorno: CustomerPointWallet (um único objeto JSON, NÃO um array/lista).
 */
export interface CustomerPointWallet {
  activeUnits: number; // Saldo de pontos ativos do cliente (OBRIGATÓRIO)
  pointConversionRate?: number; // Quanto vale 1 ponto na moeda (opcional, para Netfits: 0.01)
  currency?: string; // Moeda dos pontos (opcional, default "BRL")
  ref?: string; // Identificador do seu programa/provedor (opcional)
  _id?: string; // Id da wallet do cliente (opcional)
}

export type MkplaceLoyaltyWalletResponse = CustomerPointWallet;

/**
 * Mapeia o saldo e parâmetros da carteira para o contrato oficial da Mkplace (wallet-checkoutSimulation.pdf).
 * Exemplo retornado:
 * {
 *   "activeUnits": 1850,
 *   "pointConversionRate": 0.01,
 *   "currency": "BRL",
 *   "ref": "netfits",
 *   "_id": "wallet_usr_101"
 * }
 */
export function buildMkplaceLoyaltyWallet(nfsBalance: number, userRef = "usr_101"): CustomerPointWallet {
  const activeUnits = Math.max(0, nfsBalance);
  return {
    activeUnits,
    pointConversionRate: 0.01,
    currency: "BRL",
    ref: "netfits",
    _id: `wallet_${userRef}`,
  };
}

// ==========================================
// 5. PROCESSAMENTO DE WEBHOOKS DE PEDIDOS (MKPLACE ORDER)
// ==========================================

export type MkplaceOrderStatus =
  | "PRE-ORDER"
  | "CREATED"
  | "PAYMENT-PENDING"
  | "PAYMENT-APPROVED"
  | "INVOICED"
  | "SHIPPED"
  | "DELIVERED"
  | "COMPLETED"
  | "CANCELED"
  | "EXPIRED"
  | "REFUNDED";

export interface MkplaceOrderWebhookEvent {
  eventId: string;
  eventType: "order.created" | "order.status_changed" | "order.payment_approved" | "payment.updated";
  timestamp: string;
  storeId: string;
  order: {
    orderId: string;
    orderRef?: string;
    status: MkplaceOrderStatus;
    customerId: string;
    customerEmail: string;
    customerName?: string;
    totals: {
      subtotalBrl: number;
      discountBrl: number;
      pointsDiscountBrl?: number;
      pointsUsed?: number;
      shippingBrl: number;
      totalPaidBrl: number;
    };
    items?: Array<{
      sku: string;
      name: string;
      quantity: number;
      priceBrl: number;
    }>;
    referralCode?: string;
    isFirstPurchase?: boolean;
  };
}

export interface MkplaceWebhookResult {
  success: boolean;
  statusCode: number;
  message: string;
  orderId: string;
  status: string;
  nfsEarned: number;
  pointsUsed: number;
  cashbackRate: string;
  firstPurchaseBonusNfs: number;
  friendCommissionNfs: number;
  netfitsTakeRateBrl: number;
  netfitsTakeRatePct: number;
  auditLogId: string;
  settlementDate: string;
}

/**
 * Processa a notificação de compra da Mkplace aplicando as regras econômicas de 2026:
 * - 4.0 nfs por R$ (Normal e Club 1.0x neste momento)
 * - 0 nfs de bônus na 1ª compra (parametrizável)
 * - 5% de comissão de indicação em pontos
 * - 6.0% de Take Rate Netfits sobre o valor faturado
 */
export function processMkplaceOrderNotification(
  event: any,
  isClubMember: boolean = false,
  customParams?: {
    baseRate?: number;
    clubMultiplier?: number;
    firstPurchaseBonus?: number;
    takeRatePct?: number;
  }
): MkplaceWebhookResult {
  // Suporta tanto o objeto Order direto da Mkplace quanto o payload envelopado em event.order
  const rawOrder = event?.order ? event.order : event;
  const orderId = rawOrder?._id || rawOrder?.orderId || rawOrder?.orderRef || `ORD-${Date.now()}`;
  const status = rawOrder?.status || "PAID";

  const totalPaid = Number(
    rawOrder?.summary?.finalPrice ??
    rawOrder?.summary?.total ??
    rawOrder?.totals?.totalPaidBrl ??
    0
  );

  const pointsUsed = Number(
    rawOrder?.points?.[0]?.amount ??
    rawOrder?.totals?.pointsUsed ??
    0
  );

  // Diretrizes Operacionais de 2026
  const baseRate = customParams?.baseRate ?? 4.0;
  const clubMultiplier = isClubMember ? (customParams?.clubMultiplier ?? 1.0) : 1.0;
  const effectiveRate = baseRate * clubMultiplier;

  // Se a Mkplace já informou os pontos ganhos no summary.points.amount, priorizamos
  const reportedPointsEarned = rawOrder?.summary?.points?.amount;
  const baseCashback = reportedPointsEarned !== undefined && reportedPointsEarned !== null
    ? Number(reportedPointsEarned)
    : Math.floor(totalPaid * effectiveRate);

  // Bônus de Primeira Compra (inicialmente 0 nfs)
  const firstPurchaseBonus = rawOrder?.isFirstPurchase ? (customParams?.firstPurchaseBonus ?? 0) : 0;
  const totalNfsEarned = baseCashback + firstPurchaseBonus;

  // Comissão de Indicação de Amigo (5% em nfs)
  const friendCommissionNfs = rawOrder?.referralCode ? Math.floor(baseCashback * 0.05) : 0;

  // Take Rate Netfits de 6.0%
  const takeRatePct = 6.0;
  const netfitsTakeRateBrl = Number((totalPaid * (takeRatePct / 100)).toFixed(2));

  // Prazo atuarial de liquidação (14 dias CDC)
  const settlement = new Date();
  settlement.setDate(settlement.getDate() + 14);

  const auditLogId = `AUDIT-MKP-${Date.now()}-${Math.floor(Math.random() * 100000)}`;

  return {
    success: true,
    statusCode: 200,
    message: `Pedido Mkplace ${orderId} (Status: ${status}) processado com sucesso.`,
    orderId,
    status,
    nfsEarned: totalNfsEarned,
    pointsUsed,
    cashbackRate: `${effectiveRate.toFixed(2)} nfs por R$ 1,00`,
    firstPurchaseBonusNfs: firstPurchaseBonus,
    friendCommissionNfs,
    netfitsTakeRateBrl,
    netfitsTakeRatePct: takeRatePct,
    auditLogId,
    settlementDate: settlement.toLocaleDateString("pt-BR"),
  };
}
