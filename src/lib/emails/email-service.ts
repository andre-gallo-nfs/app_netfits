/**
 * Serviço de E-mails Transacionais Netfits
 * Envio via API Oficial Resend (https://resend.com)
 * Domínio validado com SPF/DKIM: netfits.com.br
 */

import {
  renderWelcomeEmail,
  renderPasswordResetEmail,
  renderPointsCreditedEmail,
  renderShopOrderEmail,
  type WelcomeEmailData,
  type PasswordResetEmailData,
  type PointsCreditedEmailData,
  type ShopOrderEmailData,
} from "./templates";

function getResendApiKey(): string {
  if (typeof process !== "undefined" && process.env?.RESEND_API_KEY) {
    return process.env.RESEND_API_KEY;
  }
  if (typeof import.meta !== "undefined" && (import.meta as any).env?.VITE_RESEND_API_KEY) {
    return (import.meta as any).env.VITE_RESEND_API_KEY;
  }
  try {
    const encoded = "cmVfSGEycWZuS0RfTkJ1UHBQWGNaMXlja3N1S1dKUjFRS24x";
    if (typeof atob === "function") return atob(encoded);
    if (typeof Buffer !== "undefined") return Buffer.from(encoded, "base64").toString("utf-8");
  } catch {}
  return "";
}

export const RESEND_API_KEY = getResendApiKey();

export interface SendEmailPayload {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
  apiKey?: string;
}

export async function sendViaResend(options: SendEmailPayload) {
  const key = options.apiKey || RESEND_API_KEY;
  if (!key) {
    throw new Error("Chave RESEND_API_KEY não configurada.");
  }

  const payload = {
    from: options.from || "Netfits <boasvindas@netfits.com.br>",
    to: Array.isArray(options.to) ? options.to : [options.to],
    subject: options.subject,
    html: options.html,
  };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Erro Resend (${response.status}): ${JSON.stringify(data)}`);
  }
  return data;
}

/**
 * 1. E-mail de Boas-Vindas Oficial (+50 nfs)
 */
export async function sendWelcomeEmail(params: { to: string; nomeUsuario: string; appUrl?: string }) {
  const html = renderWelcomeEmail({
    nomeUsuario: params.nomeUsuario,
    appUrl: params.appUrl,
  });

  return sendViaResend({
    to: params.to,
    subject: "Bem-vindo à Netfits! Seus +50 nfs bônus já estão na sua conta 🚀",
    html,
    from: "Netfits <boasvindas@netfits.com.br>",
  });
}

/**
 * 2. E-mail de Redefinição de Senha & Segurança
 */
export async function sendPasswordResetEmail(params: {
  to: string;
  nomeUsuario: string;
  maskedEmail: string;
  resetLink: string;
}) {
  const html = renderPasswordResetEmail({
    nomeUsuario: params.nomeUsuario,
    maskedEmail: params.maskedEmail,
    resetLink: params.resetLink,
  });

  return sendViaResend({
    to: params.to,
    subject: "Recuperação de Acesso - Netfits 🔒",
    html,
    from: "Netfits Segurança <seguranca@netfits.com.br>",
  });
}

/**
 * 3. E-mail de Pontos Creditados (+X nfs)
 */
export async function sendPointsCreditedEmail(params: PointsCreditedEmailData & { to: string }) {
  const html = renderPointsCreditedEmail(params);

  return sendViaResend({
    to: params.to,
    subject: `Boa notícia! Você acabou de receber +${params.pontos} nfs na Netfits 🎯`,
    html,
    from: "Netfits Carteira <extrato@netfits.com.br>",
  });
}

/**
 * 4. E-mail de Pedido Confirmado no Shop
 */
export async function sendShopOrderConfirmedEmail(params: ShopOrderEmailData & { to: string }) {
  const html = renderShopOrderEmail(params);

  return sendViaResend({
    to: params.to,
    subject: `Pedido Confirmado! Sua compra no Netfits Shop foi aprovada (${params.numeroPedido}) 🛍️`,
    html,
    from: "Netfits Shop <pedidos@netfits.com.br>",
  });
}

/**
 * Dispatcher assíncrono à prova de falhas para o App Mobile / Web (Cadastro)
 */
export async function dispatchWelcomeEmailSafe(to: string, nomeUsuario: string) {
  try {
    // 1. Tenta chamar o endpoint de backend do app
    const res = await fetch("/api/email/welcome", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to, nomeUsuario }),
    });
    if (res.ok) return await res.json();
  } catch (err) {
    console.warn("[dispatchWelcomeEmailSafe] Backend fetch falhou, tentando envio direto Resend:", err);
  }

  // 2. Fallback direto se o app estiver rodando estático no Capacitor / WebView
  try {
    return await sendWelcomeEmail({ to, nomeUsuario });
  } catch (err) {
    console.error("[dispatchWelcomeEmailSafe] Falha no disparo do e-mail de boas-vindas:", err);
    return null;
  }
}

/**
 * Dispatcher assíncrono à prova de falhas para Recuperação de Senha
 */
export async function dispatchPasswordResetEmailSafe(
  to: string,
  nomeUsuario: string,
  maskedEmail: string,
  resetLink: string
) {
  try {
    const res = await fetch("/api/email/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to, nomeUsuario, maskedEmail, resetLink }),
    });
    if (res.ok) return await res.json();
  } catch (err) {
    console.warn("[dispatchPasswordResetEmailSafe] Backend fetch falhou, tentando envio direto Resend:", err);
  }

  try {
    return await sendPasswordResetEmail({ to, nomeUsuario, maskedEmail, resetLink });
  } catch (err) {
    console.error("[dispatchPasswordResetEmailSafe] Falha no disparo de redefinição de senha:", err);
    return null;
  }
}
