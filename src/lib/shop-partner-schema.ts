/**
 * Netfits Shop — Specification & Schema for Merchant & Affiliate Fulfillment Partners
 * Ready for webhook integration with external partners (Centauro, Netshoes, Decathlon, Nike, etc.)
 */

export type FulfillmentType = "AFFILIATE_OUTBOUND" | "PARTNER_DROPSHIP_API" | "DIRECT_VENDOR";

export type PartnerMerchant = {
  id: string;
  name: string;
  logoUrl?: string;
  initials: string;
  rating: number;
  fulfillmentType: FulfillmentType;
  avgDeliveryDays: string;
  returnPolicyDays: number;
  apiWebhookEndpoint?: string;
};

export const PARTNER_MERCHANTS: Record<string, PartnerMerchant> = {
  centauro: {
    id: "centauro",
    name: "Centauro Oficial",
    initials: "CT",
    rating: 4.9,
    fulfillmentType: "AFFILIATE_OUTBOUND",
    avgDeliveryDays: "2 a 4 dias úteis",
    returnPolicyDays: 30,
    apiWebhookEndpoint: "https://api.centauro.com.br/v1/netfits/orders",
  },
  netshoes: {
    id: "netshoes",
    name: "Netshoes Direct",
    initials: "NS",
    rating: 4.8,
    fulfillmentType: "PARTNER_DROPSHIP_API",
    avgDeliveryDays: "1 a 3 dias úteis",
    returnPolicyDays: 30,
    apiWebhookEndpoint: "https://api.netshoes.com.br/v1/netfits/orders",
  },
  decathlon: {
    id: "decathlon",
    name: "Decathlon Brasil",
    initials: "DC",
    rating: 4.9,
    fulfillmentType: "AFFILIATE_OUTBOUND",
    avgDeliveryDays: "3 a 5 dias úteis",
    returnPolicyDays: 30,
    apiWebhookEndpoint: "https://api.decathlon.com.br/v1/netfits/orders",
  },
  nike: {
    id: "nike",
    name: "Nike Store Brasil",
    initials: "NK",
    rating: 5.0,
    fulfillmentType: "AFFILIATE_OUTBOUND",
    avgDeliveryDays: "2 a 4 dias úteis",
    returnPolicyDays: 30,
    apiWebhookEndpoint: "https://api.nike.com.br/v1/netfits/orders",
  },
  garmin: {
    id: "garmin",
    name: "Garmin Brasil",
    initials: "GM",
    rating: 4.9,
    fulfillmentType: "DIRECT_VENDOR",
    avgDeliveryDays: "1 a 2 dias úteis",
    returnPolicyDays: 30,
    apiWebhookEndpoint: "https://api.garmin.com.br/v1/netfits/orders",
  },
};

export type FulfillmentOrderPayload = {
  netfitsOrderId: string;
  partnerMerchantId: string;
  userEmail: string;
  userReferralLink?: string;
  items: {
    productId: string;
    productTitle: string;
    quantity: number;
    priceNum: number;
  }[];
  trackingUtm: {
    source: "netfits_app";
    medium: "affiliate_shop";
    campaign: "etapa1_fulfillment";
    userId: string;
  };
  rewardNfsEarned: number;
  createdAt: string;
};

/**
 * Helper to generate partner deep-link tracking URL
 */
export function generatePartnerAffiliateUrl(
  partnerId: string,
  productTitle: string,
  basePrice: string
): string {
  const cleanTitle = encodeURIComponent(productTitle.toLowerCase().replace(/[^a-z0-9]/g, "-"));
  return `https://www.${partnerId}.com.br/p/${cleanTitle}?utm_source=netfits&utm_medium=affiliate_shop&utm_campaign=cashback_nfs&netfits_ref=user_123`;
}
