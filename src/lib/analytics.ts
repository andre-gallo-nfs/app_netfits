/**
 * Google Analytics 4 (GA4) Global Tracking Engine — Netfits Tecnologia Ltda.
 * Suporte completo a rastreamento de visualização de páginas (SPA routing),
 * eventos de conversão e-commerce, credenciamento B2B, downloads e engajamento.
 */

import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

// ID Padrão do Google Analytics 4 (pode ser sobrescrito via env VITE_GA_MEASUREMENT_ID)
export const GA_MEASUREMENT_ID =
  (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_GA_MEASUREMENT_ID) ||
  "G-NETFITS2026";

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
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
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
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", eventName, {
    timestamp: new Date().toISOString(),
    ...params,
  });
  console.log(`[GA4 Event] ${eventName}:`, params);
}

/**
 * Rastreamento de E-Commerce (Compras no Netfits Shop / Resgate de Pontos)
 */
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
