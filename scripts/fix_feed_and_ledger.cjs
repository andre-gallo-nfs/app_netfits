const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. Corrigir feed.tsx
const feedPath = path.join(rootDir, 'src', 'routes', 'feed.tsx');
let feedContent = fs.readFileSync(feedPath, 'utf8');
const isCRLF = feedContent.includes('\r\n');
feedContent = feedContent.replace(/\r\n/g, '\n');

const bannerStart = feedContent.indexOf('{((typeof import.meta');
const bannerDiv = feedContent.indexOf('<div className="mx-1 p-3');

if (bannerStart !== -1 && bannerDiv !== -1 && bannerStart < bannerDiv) {
  const oldHeader = feedContent.substring(bannerStart, bannerDiv);
  feedContent = feedContent.replace(oldHeader, '{typeof window !== "undefined" && window.location.search.includes("dev=true") && (\n            ');
  console.log('✅ feed.tsx: Expressão condicional simplificada com sucesso!');
} else {
  console.log('⚠️ feed.tsx: bannerStart ou bannerDiv não localizados');
}

if (isCRLF) feedContent = feedContent.replace(/\n/g, '\r\n');
fs.writeFileSync(feedPath, feedContent, 'utf8');

// 1.5 Corrigir ScheduledFeedCard.tsx
const sPath = path.join(rootDir, 'src', 'components', 'ScheduledFeedCard.tsx');
let sContent = fs.readFileSync(sPath, 'utf8');
const sIsCRLF = sContent.includes('\r\n');
sContent = sContent.replace(/\r\n/g, '\n');

if (!sContent.includes('const isNetfitsAuthor = post.authorAvatar')) {
  sContent = sContent.replace(
    'export function ScheduledFeedCard({ post, isDailyChallenge = true }: ScheduledFeedCardProps) {',
    'export function ScheduledFeedCard({ post, isDailyChallenge = true }: ScheduledFeedCardProps) {\n  const isNetfitsAuthor = post.authorAvatar === "netfits" || post.author.toLowerCase().includes("netfits");'
  );
  if (sIsCRLF) sContent = sContent.replace(/\n/g, '\r\n');
  fs.writeFileSync(sPath, sContent, 'utf8');
  console.log('✅ ScheduledFeedCard.tsx: isNetfitsAuthor adicionado dentro do componente!');
}
async function checkLedger() {
  const { realTimeLedgerSentinel } = await import('../src/server/ledger-sentinel.ts');
  const res = await realTimeLedgerSentinel.runFullAudit(false);
  console.log('\n--- DIAGNÓSTICO DO LEDGER SENTINEL ---');
  console.log('Total usuários:', res.totalUsersAudited);
  console.log('Total transações:', res.totalTransactionsAudited);
  console.log('Discrepâncias:', res.discrepanciesCount);
  console.log('Detalhes discrepâncias:', JSON.stringify(res.discrepancies, null, 2));

  if (res.discrepanciesCount > 0) {
    console.log('\nExecutando autoHeal no Sentinel...');
    const healedRes = await realTimeLedgerSentinel.runFullAudit(true);
    console.log('Resultado pós-heal - Discrepâncias:', healedRes.discrepanciesCount);
    console.log('Total corrigidos:', healedRes.selfHealedCount);
  }
}

checkLedger().catch(console.error);
