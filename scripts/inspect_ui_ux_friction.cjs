/**
 * Scanner de Auditoria de UX/UI, Usabilidade, Rolagem Lateral e Contraste
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

const routes = [
  'src/components/AppShell.tsx',
  'src/routes/feed.tsx',
  'src/routes/market.tsx',
  'src/routes/club.tsx',
  'src/routes/wallet.tsx',
  'src/routes/profile.tsx',
  'src/routes/auth.tsx',
  'src/routes/levels.tsx',
  'src/components/ScheduledFeedCard.tsx',
  'src/components/DrFrancoQuizCard.tsx',
  'src/components/DraIsabellaQuizCard.tsx',
  'src/components/DrIsabellaCard.tsx',
  'src/components/NetfitsEducationalCard.tsx',
  'src/components/MizunoArticleFeedCard.tsx',
  'src/components/InviteFriendsCard.tsx',
  'src/components/FeedSocialActions.tsx',
  'src/components/NetfitAiAssistant.tsx'
];

console.log('=== AUDITORIA CIRÚRGICA DE USABILIDADE E UX (NETFITS APP) ===\n');

routes.forEach(relPath => {
  const fullPath = path.join(rootDir, relPath);
  if (!fs.existsSync(fullPath)) return;
  const content = fs.readFileSync(fullPath, 'utf8');

  console.log(`📄 Arquivo: ${relPath}`);

  // 1. Riscos de Rolagem Lateral (Overflow-X)
  const fixedWidths = content.match(/w-\[\d{3,}px\]/g) || [];
  const minWidths = content.match(/min-w-\[\d{3,}px\]/g) || [];
  const wScreen = content.match(/w-screen/g) || [];
  const negMargins = content.match(/-mx-(3|4|5|6|8)/g) || [];
  
  if (fixedWidths.length || minWidths.length || wScreen.length || negMargins.length) {
    console.log(`  ⚠️ Risco de Rolagem Lateral:`);
    if (fixedWidths.length) console.log(`     - Larguras fixas: ${[...new Set(fixedWidths)].join(', ')}`);
    if (minWidths.length) console.log(`     - Larguras mínimas: ${[...new Set(minWidths)].join(', ')}`);
    if (wScreen.length) console.log(`     - w-screen detectado (${wScreen.length}x) -> pode estourar container max-w-md!`);
    if (negMargins.length) console.log(`     - Margens negativas: ${[...new Set(negMargins)].join(', ')}`);
  } else {
    console.log(`  ✅ Sem riscos críticos de overflow horizontal direto.`);
  }

  // 2. Header & Footer (Fixação, Safe Area e Z-Index)
  const fixedHeader = content.match(/fixed\s+top-0|sticky\s+top-0/g) || [];
  const fixedFooter = content.match(/fixed\s+bottom-0/g) || [];
  const safeAreaTop = content.match(/safe-area-inset-top/g) || [];
  const safeAreaBottom = content.match(/safe-area-inset-bottom/g) || [];
  console.log(`  🧭 Posicionamento: fixed/sticky top (${fixedHeader.length}), fixed bottom (${fixedFooter.length}), safe-top (${safeAreaTop.length}), safe-bottom (${safeAreaBottom.length})`);

  // 3. Tipografia e Legibilidade (Fontes minúsculas < 11px)
  const tinyFonts = content.match(/text-\[(8|9|10)px\]/g) || [];
  if (tinyFonts.length > 0) {
    console.log(`  🔍 Textos Minúsculos (<11px): ${tinyFonts.length} ocorrências (${[...new Set(tinyFonts)].join(', ')})`);
  }

  // 4. Jargões e Linguagem Inadequada ao Usuário Final
  const jargons = content.match(/\b(FEFO|breakage|minting|backend|sandbox|payload|endpoint|mock|API key|localStorage|cache-busting|token|HMAC|webhook)\b/gi) || [];
  const userFacingJargons = jargons.filter(j => !['token'].includes(j.toLowerCase()));
  if (userFacingJargons.length > 0) {
    console.log(`  🗣️ Jargões Técnicos em Tela: ${[...new Set(userFacingJargons)].join(', ')}`);
  }

  console.log('');
});
