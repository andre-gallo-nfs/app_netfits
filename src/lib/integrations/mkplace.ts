/**
 * Netfits — Rock Encantech (Mkplace) Integration Service
 * 
 * Implementação técnica turnkey para a integração de Lojas (Stores) conforme
 * a documentação oficial da Mkplace (https://docs.apps.mkplace.com.br):
 * - Autenticação JWT RS256 com claims customizadas e kid
 * - Endpoints de Perfil do Cliente (/customer/profile)
 * - Endpoints de Carteira de Pontos (/loyalty/wallet)
 * - Processamento de Webhooks de Pedidos e Pagamentos
 * - Parâmetros operacionais 2026 (4.0 nfs/R$, 8.0 nfs/R$ Club, 100 nfs 1ª compra, 5% amigo, 6% take rate)
 */

import crypto from "node:crypto";

// ==========================================
// 1. CONFIGURAÇÕES & CHAVES RSA DE HOMOLOGAÇÃO
// ==========================================

const DEFAULT_DEV_PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCPXPvtJvFAshot
ugqXTex0iQLzhjNuA6/asTQOTNShZBq3rT2/T6/nVGzL04RoA/n6IfMHki4tJ3mE
Rt+/DGKW8mOcdTtqjNVuAEc9YCiWub3mTmO4ACzCJ9aD7EaqekxOhOOMRsJI7ZUh
0ZaFtJT7cd8ipPtEj/UYHmWRskmHAKdXQXokEAVVeD0UGrKVaf+D0jOO50X4Ion7
E9zIV0oHeEYWTl9kYWyMn9jiRGQjKkNx6a6rjV0amrhurkiJ8Sq7AY000ipJWCiq
HzEcAzT0/NDmDhvVgTrbFDa17JNZ8SYKQOwIHD58Va2MGjRVUYwOnYOAR5YwgUo+
z77R6n3lAgMBAAECggEAFF/gpemc69bkBY+lJa+7ZSx7sORntsDrYydAALBGn9E8
QtJqLiBDHZtQAv/Cl43JHxVoFrFdwqkTigsQjXRTJqS4J2o50YDGbGW5ui1KV3F6
XZrSbToJImbLA+C2gk/zPE2CkVMVFYw+X5oLzGDHs5yRW7kaxLm42X6obLZr4LWu
npIlcsf2c0LiAkd8kFPAPpTXgbGgpffqakvRBD8hIdHiyh29JRd7JIPlVGr/+z5A
kcZsXNlqYvqPVxB/GHtT70HSElskmM9sR87UC68D41QLdWTL31FhVOgFvCYYn/hp
sMwO+Q6zezTBIu5LRfK31TSQwhSpBF+sd2kIYk5ZGQKBgQC/rxTnlHKIYUQgK64+
FqE2wYQ/9++P9JbP8/WYZ2oYZiqUjVG1U8NhZFf1Xi1+YE6pO7miPUQsNrzObWtV
JnjtHSplpy13ES+6lYpVO3AmC+GT8Dv6d3BeG8pZq0GmlNqSil7R3jxu6wZBD2vT
VAFZFiNijV0gUaupooRl4i6E+wKBgQC/d1a8F/WgtNcfPV4jsWdqMyFQCUax5vIE
ZdOwuYkp6HaFLGa5ROCpeVWiwGIyYlKChLbHWiwv8dvC7k0PneRphbcD0Tls6ail
u3FoGB74o0uJOHBNV1Mxx41LlWtNWiQbvUrwMKUIMLg+fCWpEMKnnwc9hBw75w+n
V5glxtDSnwKBgQC9xKXbhvnEzxbVCqmcSmccgIVflySSzkEoa4vvcCJ3OV5aZ3ZH
IEBEAUWbY7uCa/I0VS640hLV+vL9IxKp4EbD6KX6sYGvaVJpVHb5Xrju0cBn5+RZ
WTnj0XuJPqTmOGQTw+2PtIb8AK3WZ2AGfho/ik1J2k4iGvjqHj0ZaM1JVQKBgQCu
2IRUcGzWvU5WMOxvG+qciOS6+j2c6JHKglK26DfiFW9mXg3Q0p13Jl6VqaoC6NcA
acGgezAu+Gb/tC6bPE0CMCHZUo9mblqcPnhp3t0pobWxMeEcP8qxgtH9XA4JLXAc
BNkSTtnmiNc3+JdLtQqNmCQ8gRBng7I/1zYSCWVZcQKBgCM8rsBTLptqgmFLbsZ7
/yFEWefRrMtU5q3isL8ZZugXsg7Wbv5H05mMO5T4SRnuF6gRtlAi3iaKK0EtKCUp
noPcTD1gvcvudvWs+8GVFwhYfAmtm1wve0uN+IHTbfp/RFjyjXdoE0Ny4ioDFx7h
TNlXWM+bPNRm5QYCdFlHiCRJ
-----END PRIVATE KEY-----`;

const DEFAULT_DEV_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAj1z77SbxQLIaLboKl03s
dIkC84YzbgOv2rE0DkzUoWQat609v0+v51Rsy9OEaAP5+iHzB5IuLSd5hEbfvwxi
lvJjnHU7aozVbgBHPWAolrm95k5juAAswifWg+xGqnpMToTjjEbCSO2VIdGWhbSU
+3HfIqT7RI/1GB5lkbJJhwCnV0F6JBAFVXg9FBqylWn/g9IzjudF+CKJ+xPcyFdK
B3hGFk5fZGFsjJ/Y4kRkIypDcemuq41dGpq4bq5IifEquwGNNNIqSVgoqh8xHAM0
9PzQ5g4b1YE62xQ2teyTWfEmCkDsCBw+fFWtjBo0VVGMDp2DgEeWMIFKPs++0ep9
5QIDAQAB
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

  return {
    storeId: env.MKPLACE_STORE_ID || "netfits-store-prod",
    accountId: env.MKPLACE_ACCOUNT_ID || "netfits-acc-2026",
    keyId: env.MKPLACE_KEY_ID || "nfs-mkplace-rsa-v1",
    privateKey: hasRealKey
      ? env.MKPLACE_PRIVATE_KEY!.replace(/\\n/g, "\n")
      : DEFAULT_DEV_PRIVATE_KEY,
    publicKey: env.MKPLACE_PUBLIC_KEY
      ? env.MKPLACE_PUBLIC_KEY.replace(/\\n/g, "\n")
      : DEFAULT_DEV_PUBLIC_KEY,
    webviewUrl: env.MKPLACE_WEBVIEW_URL || "https://shop.netfits.com.br",
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
  const rawPhone = user.phone || "11999998888";
  const digits = rawPhone.replace(/\D/g, "");
  const areaCode = digits.length >= 10 ? digits.slice(-11, -9) : "11";
  const number = digits.length >= 10 ? digits.slice(-9) : digits;

  const rawCpf = (user.cpf || "12345678900").replace(/\D/g, "");

  return {
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

export interface MkplaceWalletItem {
  id: string;
  name: string;
  balance: number;
  currency: "NFS";
  limit?: number;
  exchangeRateBrl?: number; // Valor de 1 ponto em R$ (ex: R$ 0,01)
}

export interface MkplaceLoyaltyWalletResponse {
  wallets: MkplaceWalletItem[];
  totalBalance: number;
  totalValueBrl: number;
  currency: "NFS";
  updatedAt: string;
}

/**
 * Mapeia o saldo e parâmetros da carteira para o contrato de fidelidade da Mkplace.
 */
export function buildMkplaceLoyaltyWallet(nfsBalance: number): MkplaceLoyaltyWalletResponse {
  const pointValueBrl = 0.01; // 100 nfs = R$ 1,00
  return {
    wallets: [
      {
        id: "netfits_loyalty_wallet_main",
        name: "Pontos Netfits nfs",
        balance: Math.max(0, nfsBalance),
        currency: "NFS",
        limit: 1000000,
        exchangeRateBrl: pointValueBrl,
      },
    ],
    totalBalance: Math.max(0, nfsBalance),
    totalValueBrl: Number((Math.max(0, nfsBalance) * pointValueBrl).toFixed(2)),
    currency: "NFS",
    updatedAt: new Date().toISOString(),
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
  nfsEarned: number;
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
 * - 4.0 nfs por R$ (Normal) ou 8.0 nfs por R$ (Club)
 * - 100 nfs de bônus na 1ª compra
 * - 5% de comissão de indicação em pontos
 * - 6.0% de Take Rate Netfits sobre o valor faturado
 */
export function processMkplaceOrderNotification(
  event: MkplaceOrderWebhookEvent,
  isClubMember: boolean = false
): MkplaceWebhookResult {
  const { order } = event;
  const totalPaid = order.totals.totalPaidBrl || 0;

  // Diretrizes Operacionais de 2026
  const baseRate = 4.0;
  const effectiveRate = isClubMember ? baseRate * 2.0 : baseRate; // 8.0 se Club
  const baseCashback = Math.floor(totalPaid * effectiveRate);

  // Bônus de Primeira Compra (+100 nfs)
  const firstPurchaseBonus = order.isFirstPurchase ? 100 : 0;
  const totalNfsEarned = baseCashback + firstPurchaseBonus;

  // Comissão de Indicação de Amigo (5% em nfs)
  const friendCommissionNfs = order.referralCode ? Math.floor(baseCashback * 0.05) : 0;

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
    message: `Pedido Mkplace ${order.orderId} (Status: ${order.status}) processado com sucesso.`,
    nfsEarned: totalNfsEarned,
    cashbackRate: `${effectiveRate.toFixed(2)} nfs por R$ 1,00`,
    firstPurchaseBonusNfs: firstPurchaseBonus,
    friendCommissionNfs,
    netfitsTakeRateBrl,
    netfitsTakeRatePct: takeRatePct,
    auditLogId,
    settlementDate: settlement.toLocaleDateString("pt-BR"),
  };
}
