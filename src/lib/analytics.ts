/**
 * Google Analytics 4 (GA4) Global Tracking Engine — Netfits Ltda.
 * Suporte completo a rastreamento de visualização de páginas (SPA routing),
 * eventos de conversão e-commerce, credenciamento B2B, downloads e engajamento.
 */

import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

// ID Padrão do Google Analytics 4 (pode ser sobrescrito via env VITE_GA_MEASUREMENT_ID)
export const GA_MEASUREMENT_ID =
  (typeof import.meta !== "undefined" && import.meta.env && (import.meta.env.VITE_GA4_MEASUREMENT_ID || import.meta.env.VITE_GA_MEASUREMENT_ID)) ||
  "G-VGQNVVW7GL";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * Inicializa os scripts do Google Analytics 4 no <head> dinamicamente
 */
export function initGA4() {
  if (typeof window === "undefined") return;

  // Evita reinjeção dupla do script
  if (document.getElementById("ga4-script")) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false, // Desativado envio automático para termos controle total das rotas do TanStack Router
    anonymize_ip: true,
    cookie_flags: "SameSite=None;Secure",
  });

  // Inject Script
  const script = document.createElement("script");
  script.id = "ga4-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  console.log(`[GA4 Engine] Google Analytics 4 ativo com ID: ${GA_MEASUREMENT_ID}`);
}

/**
 * Dispara evento de visualização de página no GA4
 */
export function trackPageView(pathname: string, pageTitle?: string) {
  if (typeof window === "undefined" || !window.gtag) return;

  const title = pageTitle || document.title || "Netfits";
  window.gtag("event", "page_view", {
    page_path: pathname,
    page_title: title,
    page_location: window.location.href,
  });
  console.log(`[GA4 Track] PageView: ${pathname} (${title})`);
}

/**
 * Dispara eventos customizados genéricos no GA4
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
  }

  window.gtag("event", eventName, {
    send_to: GA_MEASUREMENT_ID,
    ...params,
  });
  console.log(`[GA4 Event Dispatched] ${eventName}:`, params);
}

export function trackEcommercePurchase(
  transactionId: string,
  valueBrl: number,
  nfsPointsSpent: number,
  items: { id: string; name: string; category?: string; priceBrl: number; quantity: number }[]
) {
  trackEvent("purchase", {
    transaction_id: transactionId,
    value: valueBrl,
    currency: "BRL",
    nfs_points_spent: nfsPointsSpent,
    items: items.map((item) => ({
      item_id: item.id,
      item_name: item.name,
      item_category: item.category || "Shop",
      price: item.priceBrl,
      quantity: item.quantity,
    })),
  });
}

/**
 * Rastreamento de Credenciamento B2B de Parceiros Comerciais
 */
export function trackPartnerRegistration(tradeName: string, category: string, cnpjVerified: boolean) {
  trackEvent("partner_registration_submit", {
    partner_trade_name: tradeName,
    partner_category: category,
    cnpj_verified: cnpjVerified,
    registration_fee: 0, // Credenciamento 100% Gratuito
  });
}

/**
 * Rastreamento de Abertura de Ticket de Suporte / Ouvidoria
 */
export function trackSupportTicket(protocol: string, subject: string) {
  trackEvent("support_ticket_created", {
    ticket_protocol: protocol,
    ticket_subject: subject,
  });
}

/**
 * Rastreamento de Download do App (iOS App Store / Google Play / Web PWA)
 */
export function trackAppDownload(platform: "ios" | "android" | "pwa") {
  trackEvent("app_download_click", {
    target_platform: platform,
  });
}

/**
 * Rastreamento de Treinos e Atividades de Wearables (Garmin, Strava, Apple)
 */
export function trackWorkoutSynced(source: string, nfsEarned: number) {
  trackEvent("workout_logged", {
    wearable_source: source,
    nfs_earned: nfsEarned,
  });
}

/**
 * Rastreamento de Download de XMLs Contábeis no Painel Admin
 */
export function trackXmlDownload(xmlType: string) {
  trackEvent("xml_accounting_download", {
    xml_type: xmlType,
  });
}


/**
 * Rastreamento de Leitura de Artigo
 */
export function trackArticleRead(articleId: string, title: string, dwellTimeSeconds: number) {
  trackEvent("article_read", {
    article_id: articleId,
    article_title: title,
    dwell_time_seconds: dwellTimeSeconds,
  });
}

/**
 * Rastreamento de Habilitação de Quizz (após dwell time / scroll)
 */
export function trackQuizUnlocked(quizId: string, title: string, isSponsored: boolean) {
  trackEvent("quiz_unlocked", {
    quiz_id: quizId,
    quiz_title: title,
    is_sponsored: isSponsored,
  });
}

/**
 * Rastreamento de Resposta e Conclusão de Quizz
 */
export function trackQuizCompleted(
  quizId: string,
  title: string,
  isCorrect: boolean,
  pointsEarned: number,
  isSponsored: boolean
) {
  trackEvent("quiz_completed", {
    quiz_id: quizId,
    quiz_title: title,
    is_correct: isCorrect,
    points_earned: pointsEarned,
    is_sponsored: isSponsored,
  });
}

/**
 * Rastreamento de Visualização de Vídeo (Retail Media / Feed)
 */
export function trackVideoView(videoId: string, brandName: string, progressPct: number, durationSec: number) {
  trackEvent("video_view", {
    video_id: videoId,
    brand_name: brandName,
    progress_percent: progressPct,
    duration_seconds: durationSec,
  });
}

/**
 * Rastreamento de Navegação no Shop / Marketplace
 */
export function trackShopView(category?: string) {
  trackEvent("shop_view", {
    shop_category: category || "all",
  });
}

/**
 * Rastreamento de Seleção e Abertura de Detalhe de Produto
 */
export function trackProductSelect(productId: string, productName: string, price: string, seller?: string) {
  trackEvent("select_item", {
    item_id: productId,
    item_name: productName,
    price: price,
    item_brand: seller || "Netfits Partner",
  });
}

/**
 * Rastreamento de Adição ao Carrinho / Abertura de Checkout
 */
export function trackAddToCart(productId: string, productName: string, price: string, pointsCashback?: string) {
  trackEvent("add_to_cart", {
    item_id: productId,
    item_name: productName,
    price: price,
    cashback_points: pointsCashback || "0",
  });
}

/**
 * Rastreamento de Seleção do Meio de Pagamento (Cartão, Pix, Pontos)
 */
export function trackPaymentMethodSelect(method: "card" | "pix" | "points", useNfs: boolean, nfsAmount: number) {
  trackEvent("add_payment_info", {
    payment_type: method,
    use_nfs_discount: useNfs,
    nfs_points_applied: nfsAmount,
  });
}

/**
 * Rastreamento de Conquista / Desbloqueio de Badge
 */
export function trackBadgeUnlocked(badgeId: string, badgeTitle: string, rewardNfs: number, category: string) {
  trackEvent("badge_unlocked", {
    badge_id: badgeId,
    badge_title: badgeTitle,
    reward_nfs: rewardNfs,
    badge_category: category,
  });
}

/**
 * Rastreamento de Visualização da Página de Badges
 */
export function trackBadgesPageView(filterCategory: string) {
  trackEvent("badges_page_view", {
    category_filter: filterCategory,
  });
}

/**
 * Rastreamento de Visualização da Carteira de Pontos
 */
export function trackWalletView(balanceNfs: number) {
  trackEvent("wallet_view", {
    balance_nfs: balanceNfs,
  });
}

/**
 * Rastreamento de Clique em Linha de Extrato de Pontos
 */
export function trackStatementClick(transactionId: string, type: string, amount: number, description: string) {
  trackEvent("statement_item_click", {
    transaction_id: transactionId,
    transaction_type: type,
    nfs_amount: amount,
    description: description,
  });
}

/**
 * Rastreamento de Acesso ao Cadastro / Registro
 */
export function trackRegistrationAccess(source?: string) {
  trackEvent("registration_access", {
    access_source: source || "direct",
  });
}

/**
 * Componente de Rastreamento Automático de Rotas para TanStack Router
 */
export function GA4RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    initGA4();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return null;
}
