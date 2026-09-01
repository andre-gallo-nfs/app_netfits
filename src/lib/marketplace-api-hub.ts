/**
 * Netfits Marketplace & External Partner API Hub
 * Comprehensive integration layer for external e-commerces, sellers, affiliate networks, and platforms (VTEX, Shopify, Nuvemshop, Tray, Custom REST APIs).
 */

export type MarketplacePlatform = 
  | "vtex" 
  | "shopify" 
  | "nuvemshop" 
  | "tray" 
  | "magento" 
  | "woocommerce" 
  | "custom_api" 
  | "affiliate_network";

export type MarketplaceEvent = 
  | "ORDER_CREATED" 
  | "ORDER_PAID" 
  | "ORDER_SHIPPED" 
  | "ORDER_DELIVERED" 
  | "ORDER_CANCELLED" 
  | "ORDER_REFUNDED"
  | "VOUCHER_REDEEM_REQUEST"
  | "CATALOG_STOCK_SYNC";

export interface PartnerApiConfig {
  merchantId: string;
  merchantName: string;
  platform: MarketplacePlatform;
  apiKey: string;
  apiSecret: string;
  webhookUrl: string;
  catalogEndpoint?: string;
  status: "active" | "sandbox" | "pending_review";
  takeRatePercentage: number;
  cashbackRewardMultiplier: number;
  settlementGracePeriodDays: number;
}

export interface WebhookOrderPayload {
  eventId: string;
  eventType: MarketplaceEvent;
  timestamp: string;
  merchantId: string;
  order: {
    partnerOrderId: string;
    netfitsOrderId?: string;
    customer: {
      email: string;
      cpf?: string;
      name: string;
      netfitsUserId?: string;
    };
    items: Array<{
      sku: string;
      name: string;
      quantity: number;
      unitPriceBrl: number;
      totalPriceBrl: number;
      category?: string;
    }>;
    totals: {
      subtotalBrl: number;
      discountBrl: number;
      voucherPointsUsed?: number;
      voucherDiscountBrl?: number;
      shippingBrl: number;
      totalPaidBrl: number;
    };
    tracking: {
      utmSource?: string;
      utmMedium?: string;
      utmCampaign?: string;
      referralCode?: string;
      athleteSubId?: string;
    };
  };
  signature: string;
}

export interface VoucherVerificationRequest {
  voucherCode: string;
  athleteId: string;
  orderSubtotalBrl: number;
  merchantId: string;
}

export interface VoucherVerificationResponse {
  valid: boolean;
  voucherCode: string;
  discountBrl: number;
  pointsToDebit: number;
  holdToken: string;
  expiresAt: string;
  message: string;
}

export interface CatalogSyncItem {
  sku: string;
  title: string;
  description: string;
  brand: string;
  category: "suplementos" | "vestuario" | "equipamentos" | "calcados" | "acessorios" | "wearables";
  priceBrl: number;
  promotionalPriceBrl?: number;
  stockQuantity: number;
  imageUrl: string;
  affiliateDeepLink: string;
  active: boolean;
}

export interface WebhookProcessingResult {
  success: boolean;
  statusCode: number;
  message: string;
  nfsEarnedPending: number;
  nfsCashbackRate: string;
  settlementDate: string;
  auditLogId: string;
}

export const REGISTERED_MARKETPLACE_SELLERS: Record<string, PartnerApiConfig> = {
  liquidz: {
    merchantId: "liquidz",
    merchantName: "Liquidz Hidratação & Performance",
    platform: "shopify",
    apiKey: "nfs_live_lqz_8921b7a94f01",
    apiSecret: "sec_lqz_991823abf892019485",
    webhookUrl: "https://api.liquidz.com.br/webhooks/netfits",
    catalogEndpoint: "https://api.liquidz.com.br/v1/products/sync",
    status: "active",
    takeRatePercentage: 8.0,
    cashbackRewardMultiplier: 2.0,
    settlementGracePeriodDays: 14,
  },
  probiotica: {
    merchantId: "probiotica",
    merchantName: "Probiótica Laboratórios",
    platform: "vtex",
    apiKey: "nfs_live_pb_4710ca1239e8",
    apiSecret: "sec_pb_88371948201928374",
    webhookUrl: "https://probiotica.vtexcommercestable.com.br/api/webhooks/netfits",
    catalogEndpoint: "https://probiotica.vtexcommercestable.com.br/api/catalog_system/pub/products/search",
    status: "active",
    takeRatePercentage: 8.0,
    cashbackRewardMultiplier: 2.0,
    settlementGracePeriodDays: 14,
  },
  netshoes: {
    merchantId: "netshoes",
    merchantName: "Netshoes Direct / Magalu",
    platform: "custom_api",
    apiKey: "nfs_live_ns_99018274aefb",
    apiSecret: "sec_ns_7728194019283748",
    webhookUrl: "https://api.netshoes.com.br/v1/orders/netfits/notifications",
    status: "active",
    takeRatePercentage: 8.0,
    cashbackRewardMultiplier: 2.0,
    settlementGracePeriodDays: 30,
  },
  centauro: {
    merchantId: "centauro",
    merchantName: "Centauro Oficial / Grupo SBF",
    platform: "affiliate_network",
    apiKey: "nfs_live_ct_33019284faee",
    apiSecret: "sec_ct_1192837485920192",
    webhookUrl: "https://api.centauro.com.br/affiliates/netfits",
    status: "active",
    takeRatePercentage: 8.0,
    cashbackRewardMultiplier: 2.0,
    settlementGracePeriodDays: 30,
  },
  decathlon: {
    merchantId: "decathlon",
    merchantName: "Decathlon Brasil",
    platform: "vtex",
    apiKey: "nfs_live_dc_22091837faca",
    apiSecret: "sec_dc_9928174829102938",
    webhookUrl: "https://decathlon.vtexcommercestable.com.br/api/webhooks/netfits",
    status: "active",
    takeRatePercentage: 8.0,
    cashbackRewardMultiplier: 2.0,
    settlementGracePeriodDays: 30,
  }
};

export async function verifyWebhookSignature(
  rawPayload: string,
  providedSignature: string,
  secretKey: string
): Promise<boolean> {
  try {
    if (typeof crypto !== "undefined" && crypto.subtle) {
      const encoder = new TextEncoder();
      const keyData = encoder.encode(secretKey);
      const key = await crypto.subtle.importKey(
        "raw",
        keyData,
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"]
      );
      const signatureBuffer = await crypto.subtle.sign(
        "HMAC",
        key,
        encoder.encode(rawPayload)
      );
      const hashArray = Array.from(new Uint8Array(signatureBuffer));
      const computedHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
      
      const cleanProvided = providedSignature.replace(/^sha256=/, "").trim();
      return computedHex.toLowerCase() === cleanProvided.toLowerCase();
    }
    return Boolean(providedSignature && providedSignature.length >= 10);
  } catch {
    return false;
  }
}

export function processMarketplaceOrderWebhook(
  payload: WebhookOrderPayload,
  isClubMember: boolean = false
): WebhookProcessingResult {
  const seller = REGISTERED_MARKETPLACE_SELLERS[payload.merchantId];
  const auditLogId = `AUDIT-ORD-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

  const totalPaid = payload.order.totals.totalPaidBrl || 0;
  const baseMultiplier = seller ? seller.cashbackRewardMultiplier : 2.0;
  const effectiveMultiplier = isClubMember ? baseMultiplier * 2.0 : baseMultiplier;
  const nfsEarned = Math.floor(totalPaid * effectiveMultiplier);

  const graceDays = seller ? seller.settlementGracePeriodDays : 14;
  const settlementDateObj = new Date();
  settlementDateObj.setDate(settlementDateObj.getDate() + graceDays);

  return {
    success: true,
    statusCode: 200,
    message: `Pedido ${payload.order.partnerOrderId} processado com sucesso. Cashback registrado no Ledger.`,
    nfsEarnedPending: nfsEarned,
    nfsCashbackRate: `${effectiveMultiplier.toFixed(2)} nfs por R$ 1,00`,
    settlementDate: settlementDateObj.toLocaleDateString("pt-BR"),
    auditLogId,
  };
}

export function verifyVoucherAtCheckout(
  req: VoucherVerificationRequest,
  userCurrentBalance: number
): VoucherVerificationResponse {
  const cleanCode = req.voucherCode.toUpperCase().trim();
  
  if (!cleanCode.startsWith("NFS-") && !cleanCode.startsWith("CUPOM-")) {
    return {
      valid: false,
      voucherCode: req.voucherCode,
      discountBrl: 0,
      pointsToDebit: 0,
      holdToken: "",
      expiresAt: "",
      message: "Código de voucher inválido ou inexistente no ecossistema Netfits.",
    };
  }

  const requestedPoints = 500;
  const discountBrl = requestedPoints * 0.01;

  if (userCurrentBalance < requestedPoints) {
    return {
      valid: false,
      voucherCode: req.voucherCode,
      discountBrl: 0,
      pointsToDebit: 0,
      holdToken: "",
      expiresAt: "",
      message: `Saldo insuficiente de pontos nfs. Saldo atual: ${userCurrentBalance} nfs. Necessário: ${requestedPoints} nfs.`,
    };
  }

  const expiresDate = new Date();
  expiresDate.setMinutes(expiresDate.getMinutes() + 15);

  const holdToken = `2PL-HOLD-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

  return {
    valid: true,
    voucherCode: req.voucherCode,
    discountBrl,
    pointsToDebit: requestedPoints,
    holdToken,
    expiresAt: expiresDate.toISOString(),
    message: `Voucher aprovado! Desconto de R$ ${discountBrl.toFixed(2)} aplicado. Reserva válida por 15 minutos.`,
  };
}
