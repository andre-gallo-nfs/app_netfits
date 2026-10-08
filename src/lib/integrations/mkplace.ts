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

const DEFAULT_PROD_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmwcVSdrZNby6NTk+L5By
xEcOOcs2yANm/IkpwxbisPHdS6ezwl2eKULYQ5cECG8JZhk5R1JwCOjyJzndOYeT
TjcVsVgPm12AQ9HISjn/hpaMqiwDHfL85Nwt9DZPee1cDbS73jelZOpwBomcMND3
hfv2cZpjcWPy3Wh3jlDcNp1pRUl0dKFqd9oHn0n8bw1vgczCrt6Cn7kDslQeAYvR
dblspNChtGYWvUxzT1fdy3sPw3sA+nQ42VQqS6A+yCttkUo4FNhifaHhLhYkGIUv
HmAWesE/4ucr63KmJa/9IgNiQ8VrC7vZr42SEFm9Kw+UtcSq/B8TY2aF5sn4rLh8
PwIDAQAB
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

export function formatPemKey(rawKey: string, type: "PRIVATE KEY" | "PUBLIC KEY" = "PRIVATE KEY"): string {
  if (!rawKey) return rawKey;
  let key = rawKey.trim();
  if ((key.startsWith('"') && key.endsWith('"')) || (key.startsWith("'") && key.endsWith("'"))) {
    key = key.slice(1, -1);
  }
  key = key.replace(/\\r\\n/g, "\n").replace(/\\n/g, "\n").replace(/\r\n/g, "\n");
  const headerMatch = key.match(/(-----BEGIN[^-]+-----)/);
  const footerMatch = key.match(/(-----END[^-]+-----)/);
  if (headerMatch && footerMatch) {
    const header = headerMatch[1];
    const footer = footerMatch[1];
    const body = key.replace(header, "").replace(footer, "").replace(/\s+/g, "");
    const formattedBody = body.match(/.{1,64}/g)?.join("\n") || body;
    return `${header}\n${formattedBody}\n${footer}`;
  }
  const body = key.replace(/\s+/g, "");
  const formattedBody = body.match(/.{1,64}/g)?.join("\n") || body;
  return `-----BEGIN ${type}-----\n${formattedBody}\n-----END ${type}-----`;
}

export function getMkplaceConfig(): MkplaceConfig {
  const env = typeof process !== "undefined" && process.env ? process.env : {};
  const hasRealKey = Boolean(env.MKPLACE_PRIVATE_KEY && env.MKPLACE_PRIVATE_KEY.length > 50);
  const privateKey = hasRealKey
    ? formatPemKey(env.MKPLACE_PRIVATE_KEY!, "PRIVATE KEY")
    : DEFAULT_DEV_PRIVATE_KEY;

  // Auto-detecta o KID correto com base no par de chaves RSA utilizado
  let detectedKeyId = "mulOAaj5iTIAWtzvYBstH24efBhTbD7tISvBTVJCvBA"; // Default: Staging
  let defaultPublicKey = DEFAULT_DEV_PUBLIC_KEY;

  if (privateKey.includes("MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCbBxVJ2tk1vLo1")) {
    detectedKeyId = "PUQ4cwt2n3Czt4aiW-DaXHttZIYebVUmhJVfZK1zgDw"; // Chave de Produção Oficial
    defaultPublicKey = DEFAULT_PROD_PUBLIC_KEY;
  } else if (privateKey.includes("MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCbjuornMIroe1d")) {
    detectedKeyId = "mulOAaj5iTIAWtzvYBstH24efBhTbD7tISvBTVJCvBA"; // Chave de Homologação (Staging)
    defaultPublicKey = DEFAULT_DEV_PUBLIC_KEY;
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
      ? formatPemKey(env.MKPLACE_PUBLIC_KEY, "PUBLIC KEY")
      : defaultPublicKey,
    webviewUrl:
      env.MKPLACE_WEBVIEW_URL && !env.MKPLACE_WEBVIEW_URL.includes("vercel.app")
        ? env.MKPLACE_WEBVIEW_URL
        : "https://loja.netfits.com.br",
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
  document?: string;
  cpf?: string;
  phone?: string;
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
  const rawCpf = (user.cpf || (user as any).document || "").replace(/\D/g, "");
  const rawPhone = (user.phone || "").replace(/\D/g, "");

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
    ...(rawCpf ? { document: rawCpf, cpf: rawCpf } : {}),
    ...(rawPhone ? { phone: rawPhone } : {}),
  };

  const headerEncoded = base64UrlEncode(JSON.stringify(header));
  const payloadEncoded = base64UrlEncode(JSON.stringify(payload));
  const signingInput = `${headerEncoded}.${payloadEncoded}`;

  // Assinatura com suporte a Node.js e Cloudflare Workers (workerd / WebCrypto / nodejs_compat)
  let signature: Buffer;
  try {
    const signer = crypto.createSign("SHA256");
    signer.update(signingInput);
    signer.end();
    signature = signer.sign(config.privateKey);
  } catch {
    try {
      const signer = crypto.createSign("RSA-SHA256");
      signer.update(signingInput);
      signer.end();
      signature = signer.sign(config.privateKey);
    } catch {
      // Fallback via one-shot crypto.sign
      signature = crypto.sign("SHA256", Buffer.from(signingInput), config.privateKey);
    }
  }

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
    const dataToVerify = `${headerB64}.${payloadB64}`;
    const signatureBuf = Buffer.from(signatureB64.replace(/-/g, "+").replace(/_/g, "/"), "base64");

    let isSignatureValid = false;
    try {
      const verifier = crypto.createVerify("SHA256");
      verifier.update(dataToVerify);
      verifier.end();
      isSignatureValid = verifier.verify(config.publicKey, signatureBuf);
    } catch {
      try {
        const verifier = crypto.createVerify("RSA-SHA256");
        verifier.update(dataToVerify);
        verifier.end();
        isSignatureValid = verifier.verify(config.publicKey, signatureBuf);
      } catch {
        isSignatureValid = crypto.verify("SHA256", Buffer.from(dataToVerify), config.publicKey, signatureBuf);
      }
    }

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
  return `${baseUrl}/?token=${encodeURIComponent(token)}`;
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
  verifyToken?: string;
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
  newsletter?: boolean | null;
  isFirstBuy?: boolean | null;
  birthdate?: string | null;
  birthDate?: string | null;
  metadata?: Record<string, any>;
  verifyToken: string;
}

export interface MkplaceUpdateProfileRequest {
  name: string;
  phones?: MkplacePhone[];
  addresses?: MkplaceAddress[];
  gender?: string | null;
  birthdate?: string | null;
  metadata?: Record<string, any>;
}

/**
 * Mapeia um usuário Netfits para o contrato oficial da Mkplace de Perfil do Cliente.
 * Em conformidade estrita com a especificação OpenAPI (lojas-perfil.json) e requisitos
 * dos gateways de pagamento para registro e tokenização de cartão de crédito.
 */
export function buildMkplaceProfile(user: any): MkplaceCustomerProfile {
  const config = getMkplaceConfig();

  // Tratamento do documento (CPF): exatamente 11 dígitos limpos
  const rawCpf = String(user.cpf || user.document || "").replace(/\D/g, "");

  // Tratamento do telefone celular: DDD (2 dígitos) e número (8 ou 9 dígitos)
  const rawPhone = String(user.phone || "").replace(/\D/g, "");
  let areaCode = "11";
  let phoneNum = "999998888";
  if (rawPhone.length >= 10) {
    areaCode = rawPhone.slice(0, 2);
    phoneNum = rawPhone.slice(2);
  } else if (rawPhone.length >= 8) {
    phoneNum = rawPhone;
  }

  // Tratamento da data de nascimento: formato AAAA-MM-DD
  let birthdate: string | null = null;
  const rawBirth = String(user.birthDate || user.birthdate || "").trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(rawBirth)) {
    birthdate = rawBirth;
  } else if (/^\d{2}\/\d{2}\/\d{4}$/.test(rawBirth)) {
    const [d, m, y] = rawBirth.split("/");
    birthdate = `${y}-${m}-${d}`;
  }

  // Tratamento de endereço: formata o endereço real do usuário para o contrato oficial da Mkplace.
  let street = (user.street || "").trim();
  let number = (user.number || "").trim();
  let complement = (user.complement || "").trim();
  let neighborhood = (user.neighborhood || "").trim();
  let city = (user.city || "").trim();
  let state = (user.state || "").trim();
  let shortState = (user.shortState || "").trim().toUpperCase();
  let zipcode = String(user.zipcode || "").replace(/\D/g, "");

  // Extração por regex caso o usuário tenha preenchido o endereço em linha única no Netfits
  if (user.address && (!street || !number || !city || !zipcode)) {
    const rawAddr = String(user.address);
    const cepMatch = rawAddr.match(/\b\d{5}-?\d{3}\b/);
    if (cepMatch && !zipcode) {
      zipcode = cepMatch[0].replace(/\D/g, "");
    }
    const parts = rawAddr
      .replace(/\b\d{5}-?\d{3}\b/, "")
      .split(/[,\-·]/)
      .map((s) => s.trim())
      .filter(Boolean);
    if (parts[0] && !street) street = parts[0];
    if (parts[1] && !number) number = parts[1];
    if (parts[2] && !neighborhood) neighborhood = parts[2];
    if (parts[3] && !city) city = parts[3];
  }

  const receiverName = user.fullName || "Atleta Netfits";
  const hasAddress = Boolean(street || user.address || zipcode);
  let addresses: MkplaceAddress[] = [];

  if (hasAddress) {
    if (!number) number = "S/N";
    if (!shortState && state && state.length === 2) shortState = state.toUpperCase();
    if (!state) state = shortState || "SP";
    if (!shortState) shortState = state.length === 2 ? state.toUpperCase() : "SP";

    const cleanZipcode = (zipcode || "").replace(/\D/g, "");
    const addrVerifyHash = crypto
      .createHash("sha256")
      .update(String(user.id || "") + street + number + cleanZipcode)
      .digest("hex")
      .slice(0, 16);

    addresses = [
      {
        isPrimary: true,
        receiverName,
        street: street || "Endereço",
        number,
        complement: complement || null,
        neighborhood: neighborhood || "",
        city: city || "",
        state,
        shortState: shortState.toUpperCase().slice(0, 2),
        zipcode: cleanZipcode,
        countryCode: "BR",
        type: "residential",
        verifyToken: `vrf_addr_${addrVerifyHash}`,
      },
    ];
  }

  return {
    _id: String(user.id || "usr_101"),
    storeId: config.storeId,
    name: receiverName,
    email: user.email || "atleta@netfits.com.br",
    document: rawCpf,
    type: "individual",
    addresses,
    phones: [
      {
        countryCode: "55",
        areaCode: areaCode || "11",
        number: phoneNum || "999998888",
        isWhatsapp: true,
      },
    ],
    gender: user.gender || null,
    newsletter: user.newsletter ?? true,
    isFirstBuy: user.isFirstBuy ?? null,
    birthdate,
    birthDate: birthdate,
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
    rawOrder?.totalAmount ??
    rawOrder?.total ??
    rawOrder?.amount ??
    0
  );

  const pointsUsed = Number(
    rawOrder?.summary?.points?.amount ??
    rawOrder?.points?.[0]?.amount ??
    rawOrder?.totals?.pointsUsed ??
    rawOrder?.pointsUsed ??
    0
  );

  const pointsUsedDiscountBrl = Number(
    rawOrder?.summary?.points?.currencyAmount ??
    (pointsUsed * 0.01)
  );

  // Regra Operacional Netfits: Cálculo de cashback estritamente sobre produtos (exclui frete e taxas)
  const shippingCost = Number(
    rawOrder?.summary?.totalShippingCost ??
    rawOrder?.shippingCost ??
    rawOrder?.totals?.shippingBrl ??
    0
  );

  const productTotal = Number(
    rawOrder?.summary?.total ??
    (rawOrder?.items && Array.isArray(rawOrder.items) && rawOrder.items.length > 0
      ? rawOrder.items.reduce((acc: number, it: any) => acc + (Number(it.finalPrice ?? it.price ?? 0) * (Number(it.quantity) || 1)), 0)
      : Math.max(0, totalPaid - shippingCost))
  );

  const cleanProductTotal = Math.max(0, productTotal);

  // Valor líquido de produtos quitado em moeda corrente (Pix/Cartão), descontando pontos usados
  const cashPaidProductsBrl = Math.max(0, cleanProductTotal - pointsUsedDiscountBrl);

  // Diretrizes Operacionais de 2026
  const baseRate = customParams?.baseRate ?? 4.0;
  const clubMultiplier = isClubMember ? (customParams?.clubMultiplier ?? 1.0) : 1.0;
  const effectiveRate = baseRate * clubMultiplier;

  // Trava de Proteção de Margem: se uso de pontos >= 10% do valor de produtos, cashback é 0 nfs
  const isPointsOver10Pct = cleanProductTotal > 0 && (pointsUsedDiscountBrl / cleanProductTotal) >= 0.10;

  const baseCashback = isPointsOver10Pct
    ? 0
    : Math.floor(cashPaidProductsBrl * effectiveRate);

  // Bônus de Primeira Compra (inicialmente 0 nfs)
  const isFirstBuy = Boolean(rawOrder?.isFirstBuy ?? rawOrder?.isFirstPurchase ?? rawOrder?.customer?.isFirstBuy);
  const firstPurchaseBonus = isFirstBuy ? (customParams?.firstPurchaseBonus ?? 0) : 0;
  const totalNfsEarned = baseCashback + firstPurchaseBonus;

  // Comissão de Indicação de Amigo (MGM sobre compras):
  // DESATIVADA: Somente os pontos de indicação efetivada no cadastro estão implantados.
  // A comissão sobre compras valerá no futuro exclusivamente para assinantes do clube.
  const friendCommissionNfs = 0;

  // Take Rate Netfits de 6.0% sobre o valor dos produtos
  const takeRatePct = customParams?.takeRatePct ?? 6.0;
  const netfitsTakeRateBrl = Number((cleanProductTotal * (takeRatePct / 100)).toFixed(2));

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
