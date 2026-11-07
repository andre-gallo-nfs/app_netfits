/**
 * Integração do RealTimeLedgerSentinel no Backend e Frontend
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. Atualizar src/server/sync-handlers.ts
const syncPath = path.join(rootDir, 'src', 'server', 'sync-handlers.ts');
let syncContent = fs.readFileSync(syncPath, 'utf8');
const isSyncCrlf = syncContent.includes('\r\n');
let normSync = syncContent.replace(/\r\n/g, '\n');

if (!normSync.includes('realTimeLedgerSentinel')) {
  normSync = normSync.replace(
    'import { findUserByAnyIdentifier } from "./user-resolver.ts";',
    'import { findUserByAnyIdentifier } from "./user-resolver.ts";\nimport { realTimeLedgerSentinel } from "./ledger-sentinel.ts";'
  );
}

const sentinelRouteBlock = `  // ==========================================
  // AGENTE 20: ENDPOINT DO REAL-TIME LEDGER SENTINEL
  // ==========================================
  if (url.pathname === "/api/ledger/sentinel-check" || url.pathname === "/api/ledger/sentinel-check/") {
    const autoHeal = url.searchParams.get("autoHeal") === "true" || req.method === "POST";
    const auditResult = await realTimeLedgerSentinel.runFullAudit(autoHeal);

    return new Response(
      JSON.stringify({
        success: true,
        agent: "Real-Time Online Ledger Sentinel & Live Sync Agent (Agente 20)",
        status: auditResult.isFullyBalanced ? "HEALTHY" : "DISCREPANCY_DETECTED",
        audit: auditResult,
      }),
      { status: 200, headers: corsHeaders }
    );
  }
`;

if (!normSync.includes('/api/ledger/sentinel-check')) {
  normSync = normSync.replace(
    '  // ==========================================\n  // ENDPOINTS DE EXTRATO DE TRANSAÇÕES EM TEMPO REAL',
    sentinelRouteBlock + '\n  // ==========================================\n  // ENDPOINTS DE EXTRATO DE TRANSAÇÕES EM TEMPO REAL'
  );
  console.log('✅ Rota /api/ledger/sentinel-check adicionada em sync-handlers.ts');
}

fs.writeFileSync(syncPath, isSyncCrlf ? normSync.replace(/\n/g, '\r\n') : normSync, 'utf8');

// 2. Atualizar src/server/club-subscription-handlers.ts
const clubPath = path.join(rootDir, 'src', 'server', 'club-subscription-handlers.ts');
let clubContent = fs.readFileSync(clubPath, 'utf8');
const isClubCrlf = clubContent.includes('\r\n');
let normClub = clubContent.replace(/\r\n/g, '\n');

if (!normClub.includes('realTimeLedgerSentinel')) {
  normClub = normClub.replace(
    'import { serverState } from "./server-state.ts";',
    'import { serverState } from "./server-state.ts";\nimport { realTimeLedgerSentinel } from "./ledger-sentinel.ts";'
  );
}

const oldClubPointsBlock = `        // Registrar evento de auditoria no ledger (amount: 0 — pontuação bloqueada até o Go-Live com gateway e Terra API)
        serverState.transactions.unshift({
          id: \`tx-club-sub-\${Date.now()}\`,
          userId: user.id,
          userName: user.fullName || "Assinante Clube Netfits",
          amount: 0,
          description: \`👑 Ativação/Renovação Clube Netfits (\${body.planName || "Plano Oficial"}) [Pontuação Retida até Go-Live 14/Nov]\`,
          category: "general",
          timestamp: requestTimestamp,
        });`;

const newClubPointsBlock = `        // Atribuição oficial e auditada dos 250 nfs pelo Real-Time Ledger Sentinel
        realTimeLedgerSentinel.attributeClubSubscriptionPoints(user.id, body.planName || "Plano Mensal Oficial");`;

if (normClub.includes(oldClubPointsBlock)) {
  normClub = normClub.replace(oldClubPointsBlock, newClubPointsBlock);
  console.log('✅ Atribuição auditada dos 250 nfs do Clube conectada ao Sentinel em club-subscription-handlers.ts');
}

fs.writeFileSync(clubPath, isClubCrlf ? normClub.replace(/\n/g, '\r\n') : normClub, 'utf8');

// 3. Atualizar src/lib/queries/user-queries.ts para refetchInterval (Live Extrato Sync)
const queriesPath = path.join(rootDir, 'src', 'lib', 'queries', 'user-queries.ts');
let queriesContent = fs.readFileSync(queriesPath, 'utf8');
const isQueriesCrlf = queriesContent.includes('\r\n');
let normQueries = queriesContent.replace(/\r\n/g, '\n');

if (!normQueries.includes('refetchInterval: 5000')) {
  normQueries = normQueries.replace(
    '    queryKey: ["walletData", targetUserId],',
    '    queryKey: ["walletData", targetUserId],\n    refetchInterval: 5000,\n    refetchOnWindowFocus: true,'
  );
  console.log('✅ refetchInterval: 5000 (Live Sync) adicionado em user-queries.ts');
}

fs.writeFileSync(queriesPath, isQueriesCrlf ? normQueries.replace(/\n/g, '\r\n') : normQueries, 'utf8');
console.log('🏁 Sentinel integrado com sucesso no Backend e Frontend!');
