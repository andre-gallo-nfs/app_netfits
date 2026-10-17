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
  async fetch(req: Request): Promise<Response> {
    const url = new URL(req.url);
    const corsHeaders = serverState.getCorsHeaders();

    if (req.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    // 1. Rock Encantech / Mkplace Routes (/customer/*, /loyalty/*, /points/*, /orders, /api/marketplace/mkplace/*)
    const rockRes = await handleRockRoutes(req, url, corsHeaders);
    if (rockRes) return rockRes;

    // 2. Data Sync Routes (/api/operational-params, /api/users-sync, /api/transactions-sync)
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

    // 6. AI Feed Content Moderation Routes (/api/feed/moderate)
    const moderationRes = await handleFeedModerationRoutes(req, url, corsHeaders);
    if (moderationRes) return moderationRes;

    // 7. Fallback to TanStack React Start SSR Handler
    return handler(req);
  },
};
