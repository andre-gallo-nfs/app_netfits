const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// =========================================================================
// 1. UPDATE ScheduledFeedCard.tsx
// =========================================================================
const sPath = path.join(rootDir, 'src', 'components', 'ScheduledFeedCard.tsx');
let sContent = fs.readFileSync(sPath, 'utf8');

// Normalize line endings for replacement
const sIsCRLF = sContent.includes('\r\n');
sContent = sContent.replace(/\r\n/g, '\n');

if (!sContent.includes('const isNetfitsAuthor')) {
  sContent = sContent.replace(
    'const isDailyChallenge = post.isDailyChallenge === true;',
    'const isDailyChallenge = post.isDailyChallenge === true;\n  const isNetfitsAuthor = post.authorAvatar === "netfits" || post.author.toLowerCase().includes("netfits");'
  );
}

// Replace avatar block
const oldAvatarPattern = /<div\s+onClick=\{handleOpenContent\}\s+className="size-11 rounded-full ring-2 ring-\[#6B2AD9\]\/30 flex items-center justify-center cursor-pointer hover:ring-\[#6B2AD9\] transition-all bg-card overflow-hidden shadow-sm shrink-0"\s*>\s*<img src=\{getAvatarSrc\(\)\} alt=\{post\.author\} className="w-full h-full object-cover" \/>\s*<\/div>/;

const newAvatarBlock = `<div
              onClick={handleOpenContent}
              className={\`size-11 rounded-full flex items-center justify-center cursor-pointer shadow-md shrink-0 transition-all \${
                isNetfitsAuthor
                  ? "bg-black border-2 border-[#C8F135] p-2 hover:scale-105"
                  : "ring-2 ring-[#6B2AD9]/30 hover:ring-[#6B2AD9] bg-card overflow-hidden"
              }\`}
            >
              <img
                src={getAvatarSrc()}
                alt={post.author}
                className={isNetfitsAuthor ? "w-full h-full object-contain" : "w-full h-full object-cover"}
              />
            </div>`;

if (oldAvatarPattern.test(sContent)) {
  sContent = sContent.replace(oldAvatarPattern, newAvatarBlock);
  console.log('✅ ScheduledFeedCard.tsx: Avatar atualizado com padrão canônico preto + borda verde-limão');
} else {
  console.log('⚠️ ScheduledFeedCard.tsx: oldAvatarPattern não casou');
}

// Remove duplicate logo on right side
const oldRightLogoPattern = /<div className="flex items-center gap-2">\s*<div className="h-6 w-auto bg-black rounded-lg px-2 py-0\.5 flex items-center justify-center border border-zinc-800 shadow-xs">\s*<img src=\{netfitsLogoDark\} alt="Netfits" className="h-3\.5 w-auto object-contain" \/>\s*<\/div>\s*<button/g;

if (oldRightLogoPattern.test(sContent)) {
  sContent = sContent.replace(oldRightLogoPattern, '<div className="flex items-center gap-2">\n            <button');
  console.log('✅ ScheduledFeedCard.tsx: Logo duplicado do lado direito removido');
} else {
  console.log('⚠️ ScheduledFeedCard.tsx: oldRightLogoPattern não casou');
}

if (sIsCRLF) {
  sContent = sContent.replace(/\n/g, '\r\n');
}
fs.writeFileSync(sPath, sContent, 'utf8');

// =========================================================================
// 2. UPDATE NetfitsEducationalCard.tsx
// =========================================================================
const eduPath = path.join(rootDir, 'src', 'components', 'NetfitsEducationalCard.tsx');
if (fs.existsSync(eduPath)) {
  let eduContent = fs.readFileSync(eduPath, 'utf8');
  const isCRLF = eduContent.includes('\r\n');
  eduContent = eduContent.replace(/\r\n/g, '\n');

  // Ensure right logo is removed
  const eduRightLogoPattern = /<div className="flex items-center gap-2">\s*<div className="h-6 w-auto bg-black rounded-lg px-2 py-0\.5 flex items-center justify-center border border-zinc-800 shadow-xs">\s*<img src=\{netfitsLogoDark\} alt="Netfits" className="h-3\.5 w-auto object-contain" \/>\s*<\/div>\s*<button/g;
  if (eduRightLogoPattern.test(eduContent)) {
    eduContent = eduContent.replace(eduRightLogoPattern, '<div className="flex items-center gap-2">\n            <button');
    console.log('✅ NetfitsEducationalCard.tsx: Logo duplicado removido');
  }

  // Ensure avatar is black with lime border
  eduContent = eduContent.replace(
    /className="size-11 rounded-full bg-purple-950\/80 border border-purple-500\/30 flex items-center justify-center p-1\.5 ring-2 ring-purple-500\/20 cursor-pointer shadow-sm"/,
    'className="size-11 rounded-full bg-black border-2 border-[#C8F135] p-2 flex items-center justify-center cursor-pointer shadow-md shrink-0 hover:scale-105 transition-all"'
  );

  if (isCRLF) eduContent = eduContent.replace(/\n/g, '\r\n');
  fs.writeFileSync(eduPath, eduContent, 'utf8');
  console.log('✅ NetfitsEducationalCard.tsx verificado e salvo');
}

// =========================================================================
// 3. REMOVE DUPLICATE LOGOS IN OTHER CARDS
// =========================================================================
const otherCards = [
  'src/components/DrFrancoQuizCard.tsx',
  'src/components/DraIsabellaQuizCard.tsx',
  'src/components/DrIsabellaCard.tsx',
  'src/components/MizunoArticleFeedCard.tsx'
];

otherCards.forEach(rel => {
  const filePath = path.join(rootDir, rel);
  if (!fs.existsSync(filePath)) return;
  let c = fs.readFileSync(filePath, 'utf8');
  const isCRLF = c.includes('\r\n');
  c = c.replace(/\r\n/g, '\n');

  const pattern = /<div className="h-6 w-auto bg-black rounded-lg px-2 py-0\.5 flex items-center justify-center border border-zinc-800 shadow-xs">\s*<img src=\{netfitsLogoDark\} alt="Netfits" className="h-3\.5 w-auto object-contain" \/>\s*<\/div>\s*/g;
  if (pattern.test(c)) {
    c = c.replace(pattern, '');
    console.log(`✅ ${rel}: Logo duplicado do lado direito removido`);
  }

  if (isCRLF) c = c.replace(/\n/g, '\r\n');
  fs.writeFileSync(filePath, c, 'utf8');
});

// =========================================================================
// 4. UPDATE NetfitAiAssistant.tsx (Trigger Button com Fundo Preto e Borda Verde-Limão)
// =========================================================================
const aiPath = path.join(rootDir, 'src', 'components', 'NetfitAiAssistant.tsx');
if (fs.existsSync(aiPath)) {
  let aiContent = fs.readFileSync(aiPath, 'utf8');
  const isCRLF = aiContent.includes('\r\n');
  aiContent = aiContent.replace(/\r\n/g, '\n');

  // Update floating trigger button
  aiContent = aiContent.replace(
    /className="fixed bottom-\[calc\(env\(safe-area-inset-bottom,0px\)\+4\.75rem\)\] right-4 z-50 bg-gradient-to-tr from-purple-700 to-purple-600 text-white p-3\.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 ring-2 ring-lime-400\/80 group cursor-pointer"/,
    'className="fixed bottom-[calc(env(safe-area-inset-bottom,0px)+4.75rem)] right-4 z-50 bg-black text-white p-3.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border-2 border-[#C8F135] group cursor-pointer"'
  );

  aiContent = aiContent.replace(
    /ring-2 ring-purple-900 animate-pulse/,
    'ring-2 ring-black animate-pulse'
  );

  if (isCRLF) aiContent = aiContent.replace(/\n/g, '\r\n');
  fs.writeFileSync(aiPath, aiContent, 'utf8');
  console.log('✅ NetfitAiAssistant.tsx: Botão flutuante atualizado para fundo preto com borda verde-limão');
}

// =========================================================================
// 5. UPDATE InviteFriendsCard.tsx
// =========================================================================
const invitePath = path.join(rootDir, 'src', 'components', 'InviteFriendsCard.tsx');
if (fs.existsSync(invitePath)) {
  let invContent = fs.readFileSync(invitePath, 'utf8');
  const isCRLF = invContent.includes('\r\n');
  invContent = invContent.replace(/\r\n/g, '\n');

  invContent = invContent.replace(
    /<img\s+src=\{netfitsMark\}\s+alt=""\s+className="ml-auto w-9 h-9 object-contain rounded-lg bg-background\/10 p-1 opacity-80"\s*\/>/,
    `<div className="ml-auto size-9 rounded-full bg-black border-2 border-[#C8F135] p-1.5 flex items-center justify-center shadow-md shrink-0">
              <img
                src={netfitsMark}
                alt="Netfits"
                className="w-full h-full object-contain"
              />
            </div>`
  );

  if (isCRLF) invContent = invContent.replace(/\n/g, '\r\n');
  fs.writeFileSync(invitePath, invContent, 'utf8');
  console.log('✅ InviteFriendsCard.tsx: Logo atualizado para fundo preto com borda verde-limão');
}

// =========================================================================
// 6. UPDATE levels.tsx & wallet.tsx (Padrão Canônico do Logo)
// =========================================================================
const levelsPath = path.join(rootDir, 'src', 'routes', 'levels.tsx');
if (fs.existsSync(levelsPath)) {
  let lContent = fs.readFileSync(levelsPath, 'utf8');
  lContent = lContent.replace(
    /className="w-5 h-5 object-contain rounded bg-foreground p-0\.5"/,
    'className="size-6 object-contain rounded-full bg-black border border-[#C8F135] p-1 shadow-sm"'
  );
  fs.writeFileSync(levelsPath, lContent, 'utf8');
  console.log('✅ levels.tsx: Logo atualizado para fundo preto com borda verde-limão');
}

const walletPath = path.join(rootDir, 'src', 'routes', 'wallet.tsx');
if (fs.existsSync(walletPath)) {
  let wContent = fs.readFileSync(walletPath, 'utf8');
  wContent = wContent.replace(
    /className="absolute top-4 right-4 w-8 h-8 object-contain rounded-md bg-background\/10 p-0\.5 opacity-70 pointer-events-none"/,
    'className="absolute top-4 right-4 size-8 object-contain rounded-full bg-black border border-[#C8F135]/60 p-1 opacity-95 pointer-events-none shadow-sm"'
  );
  fs.writeFileSync(walletPath, wContent, 'utf8');
  console.log('✅ wallet.tsx: Logo no card de saldo atualizado para fundo preto com borda verde-limão');
}

// =========================================================================
// 7. FEED: Proteger Banner Staging (apenas com dev=true)
// =========================================================================
const feedRoutePath = path.join(rootDir, 'src', 'routes', 'feed.tsx');
if (fs.existsSync(feedRoutePath)) {
  let fContent = fs.readFileSync(feedRoutePath, 'utf8');
  const isCRLF = fContent.includes('\r\n');
  fContent = fContent.replace(/\r\n/g, '\n');

  fContent = fContent.replace(
    'window.location.port === "3000")))',
    'window.location.port === "3000") && (typeof window !== "undefined" && window.location.search.includes("dev=true")))'
  );

  if (isCRLF) fContent = fContent.replace(/\n/g, '\r\n');
  fs.writeFileSync(feedRoutePath, fContent, 'utf8');
  console.log('✅ feed.tsx: Banner staging protegido para nunca poluir a experiência do usuário');
}

console.log('\n🏁 Script de refinamento visual e de marca finalizado!');
