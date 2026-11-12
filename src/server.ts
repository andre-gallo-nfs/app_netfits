import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/react-start/server";
import { serverState } from "./server/server-state.ts";
import { handleRockRoutes } from "./server/rock-handlers.ts";
import { handleSyncRoutes } from "./server/sync-handlers.ts";
import { handleEmailRoutes } from "./server/email-handlers.ts";
import {
  handleFinopsRoutes,
  type ColdTierStatus,
  globalColdTierStatus,
} from "./server/finops-handlers.ts";
import { handleClubSubscriptionRoutes } from "./server/club-subscription-handlers.ts";
import { handleGarminRoutes } from "./server/garmin-handlers.ts";
import { handleVitalRoutes } from "./server/vital-handlers.ts";
import { handleStravaRoutes } from "./server/strava-handlers.ts";
import { handleFeedModerationRoutes } from "./server/feed-moderation-handlers.ts";
import {
  normalizeString,
  normalizeCpf,
  findUserByAnyIdentifier,
  resolveUserForOrder,
} from "./server/user-resolver.ts";

// Re-export core utility functions and types for backwards compatibility
export {
  normalizeString,
  normalizeCpf,
  findUserByAnyIdentifier,
  resolveUserForOrder,
  type ColdTierStatus,
  globalColdTierStatus,
};

const handler = createStartHandler(defaultStreamHandler);

export default {
  async fetch(req: Request, env?: any, ctx?: any): Promise<Response> {
    // Injeção de dependência do Cloudflare D1
    if (env && env.DB) {
      serverState.db = env.DB;
    }

    const url = new URL(req.url);

    // Redirecionamento Canônico de Host e Protocolo (Google Search Console & SEO)
    const host = url.hostname;
    const isLocal =
      host === "localhost" ||
      host === "127.0.0.1" ||
      host.endsWith(".workers.dev") ||
      host.endsWith(".trycloudflare.com");

    if (!isLocal) {
      const isHttp = url.protocol === "http:";
      const isApex = host === "netfits.com.br";
      if (isHttp || isApex) {
        const canonicalUrl = new URL(req.url);
        canonicalUrl.protocol = "https:";
        canonicalUrl.hostname = "www.netfits.com.br";
        return Response.redirect(canonicalUrl.toString(), 301);
      }
    }

    // Redirecionamento Canônico de /home para /
    if (url.pathname === "/home" || url.pathname === "/home/") {
      const canonicalHome = new URL("/", req.url);
      canonicalHome.search = url.search;
      return Response.redirect(canonicalHome.toString(), 301);
    }

    const corsHeaders = serverState.getCorsHeaders();

    if (req.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    // 1. Rock Encantech / Mkplace Routes (/customer/*, /loyalty/*, /points/*, /orders, /api/marketplace/mkplace/*)
    const rockRes = await handleRockRoutes(req, url, corsHeaders);
    if (rockRes) return rockRes;

    // 2. Data Sync Routes (/api/operational-params, /api/users-sync, /api/transactions-sync, /api/wallet/credit)
    const syncRes = await handleSyncRoutes(req, url, corsHeaders);
    if (syncRes) return syncRes;

    // 3. Transactional Email Routes (/api/email/*)
    const emailRes = await handleEmailRoutes(req, url, corsHeaders);
    if (emailRes) return emailRes;

    // 4. FinOps & Cold Data Tiering Routes (/api/finops/*, /api/wallet/debit-fefo)
    const finopsRes = await handleFinopsRoutes(req, url, corsHeaders);
    if (finopsRes) return finopsRes;

    // 5. Clube Netfits Subscription Lifecycle Routes (/api/club/*)
    const clubRes = await handleClubSubscriptionRoutes(req, url, corsHeaders);
    if (clubRes) return clubRes;

    // 6. Garmin Connect Developer Program Webhook Routes (/api/webhooks/garmin, /api/garmin/*)
    const garminRes = await handleGarminRoutes(req, url, corsHeaders);
    if (garminRes) return garminRes;

    // 7. Vital API (Junction) Wearable Aggregator Routes (/api/vital/*, /api/webhooks/vital)
    const vitalRes = await handleVitalRoutes(req, url, corsHeaders);
    if (vitalRes) return vitalRes;

    // 8. Strava API Direct Integration Routes (/api/strava/*, /api/webhooks/strava)
    const stravaRes = await handleStravaRoutes(req, url, corsHeaders);
    if (stravaRes) return stravaRes;

    // 9. AI Feed Content Moderation Routes (/api/feed/moderate)
    const moderationRes = await handleFeedModerationRoutes(req, url, corsHeaders);
    if (moderationRes) return moderationRes;

    // 8. Fallback to TanStack React Start SSR Handler
    const res = await handler(req);

    // Blindagem de Cache para rotas HTML e navegação no app móvel (WKWebView / Chromium)
    const contentType = res.headers.get("content-type") || "";
    if (contentType.includes("text/html")) {
      const headers = new Headers(res.headers);
      headers.set("Cache-Control", "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0");
      headers.set("Pragma", "no-cache");
      headers.set("Expires", "0");
      return new Response(res.body, {
        status: res.status,
        statusText: res.statusText,
        headers,
      });
    }

    return res;
  },
};
