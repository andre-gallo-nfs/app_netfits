/**
 * Aplica o Padrão Canônico do Logo Netfits e Correções de UI/UX:
 * 1. Logo verde em fundo preto circular com borda verde-limão (#C8F135) no lado esquerdo dos posts.
 * 2. Remoção do logo duplicado no lado direito dos posts do feed.
 * 3. Correção de rolagem lateral (anti-wobble no CSS e remoção de min-w excessivos).
 * 4. Fixação consistente de Header e Footer.
 * 5. Purgar jargões técnicos expostos ao usuário (como "FEFO").
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// =========================================================================
// 1. ATUALIZAR ScheduledFeedCard.tsx
// =========================================================================
const scheduledCardPath = path.join(rootDir, 'src', 'components', 'ScheduledFeedCard.tsx');
let scheduledContent = fs.readFileSync(scheduledCardPath, 'utf8');

// Identifica se o autor é Netfits
const authorCheckCode = `  const isNetfitsAuthor = post.authorType === "netfits" || post.author.toLowerCase().includes("netfits");`;

if (!scheduledContent.includes('const isNetfitsAuthor')) {
  scheduledContent = scheduledContent.replace(
    'const isDailyChallenge = post.isDailyChallenge === true;',
    'const isDailyChallenge = post.isDailyChallenge === true;\n  const isNetfitsAuthor = post.authorType === "netfits" || post.author.toLowerCase().includes("netfits");'
  );
}

// Atualizar avatar no header: fundo preto circular com borda verde-limão
const oldAvatarBlock = `            <div
              onClick={handleOpenContent}
              className="size-11 rounded-full ring-2 ring-[#6B2AD9]/30 flex items-center justify-center cursor-pointer hover:ring-[#6B2AD9] transition-all bg-card overflow-hidden shadow-sm shrink-0"
            >
              <img src={getAvatarSrc()} alt={post.author} className="w-full h-full object-cover" />
            </div>`;

const newAvatarBlock = `            <div
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

if (scheduledContent.includes(oldAvatarBlock)) {
  scheduledContent = scheduledContent.replace(oldAvatarBlock, newAvatarBlock);
  console.log('✅ Avatar com logo verde em fundo preto e borda verde-limão aplicado em ScheduledFeedCard.tsx');
} else {
  console.warn('⚠️ oldAvatarBlock não encontrado em ScheduledFeedCard.tsx');
}

// Remover o logo duplicado no lado direito do header do post
const oldRightSideLogo = `          <div className="flex items-center gap-2">
            <div className="h-6 w-auto bg-black rounded-lg px-2 py-0.5 flex items-center justify-center border border-zinc-800 shadow-xs">
              <img src={netfitsLogoDark} alt="Netfits" className="h-3.5 w-auto object-contain" />
            </div>
            <button`;

const newRightSideLogo = `          <div className="flex items-center gap-2">
            <button`;

if (scheduledContent.includes(oldRightSideLogo)) {
  scheduledContent = scheduledContent.replace(oldRightSideLogo, newRightSideLogo);
  console.log('✅ Logo duplicado do lado direito removido de ScheduledFeedCard.tsx');
} else {
  console.warn('⚠️ oldRightSideLogo não encontrado em ScheduledFeedCard.tsx');
}

fs.writeFileSync(scheduledCardPath, scheduledContent, 'utf8');

// =========================================================================
// 2. ATUALIZAR NetfitsEducationalCard.tsx
// =========================================================================
const eduCardPath = path.join(rootDir, 'src', 'components', 'NetfitsEducationalCard.tsx');
let eduContent = fs.readFileSync(eduCardPath, 'utf8');

const oldEduAvatar = `            <div 
              onClick={() => setArticleOpen(true)}
              className="size-11 rounded-full bg-purple-950/80 border border-purple-500/30 flex items-center justify-center p-1.5 ring-2 ring-purple-500/20 cursor-pointer shadow-sm"
            >
              <img
                src={netfitsMark}
                alt="Netfits"
                className="w-full h-full object-contain"
              />
            </div>`;

const newEduAvatar = `            <div 
              onClick={() => setArticleOpen(true)}
              className="size-11 rounded-full bg-black border-2 border-[#C8F135] p-2 flex items-center justify-center cursor-pointer shadow-md shrink-0 hover:scale-105 transition-all"
            >
              <img
                src={netfitsMark}
                alt="Netfits"
                className="w-full h-full object-contain"
              />
            </div>`;

if (eduContent.includes(oldEduAvatar)) {
  eduContent = eduContent.replace(oldEduAvatar, newEduAvatar);
  console.log('✅ Avatar padrão circular preto com borda verde-limão aplicado em NetfitsEducationalCard.tsx');
}

const oldEduRightLogo = `          <div className="flex items-center gap-2">
            <div className="h-6 w-auto bg-black rounded-lg px-2 py-0.5 flex items-center justify-center border border-zinc-800 shadow-xs">
              <img src={netfitsLogoDark} alt="Netfits" className="h-3.5 w-auto object-contain" />
            </div>
            <button`;

const newEduRightLogo = `          <div className="flex items-center gap-2">
            <button`;

if (eduContent.includes(oldEduRightLogo)) {
  eduContent = eduContent.replace(oldEduRightLogo, newEduRightLogo);
  console.log('✅ Logo duplicado do lado direito removido de NetfitsEducationalCard.tsx');
}

fs.writeFileSync(eduCardPath, eduContent, 'utf8');

// =========================================================================
// 3. REMOVER LOGOS DUPLICADOS DO LADO DIREITO EM OUTROS CARDS
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
  if (c.includes(oldRightSideLogo)) {
    c = c.replace(oldRightSideLogo, newRightSideLogo);
    fs.writeFileSync(filePath, c, 'utf8');
    console.log(`✅ Logo duplicado do lado direito removido de ${rel}`);
  }
});

// =========================================================================
// 4. ATUALIZAR InviteFriendsCard.tsx (Padrão Canônico do Logo)
// =========================================================================
const invitePath = path.join(rootDir, 'src', 'components', 'InviteFriendsCard.tsx');
let inviteContent = fs.readFileSync(invitePath, 'utf8');

const oldInviteLogo = `            <img
              src={netfitsMark}
              alt=""
              className="ml-auto w-9 h-9 object-contain rounded-lg bg-background/10 p-1 opacity-80"
            />`;

const newInviteLogo = `            <div className="ml-auto size-9 rounded-full bg-black border-2 border-[#C8F135] p-1.5 flex items-center justify-center shadow-md shrink-0">
              <img
                src={netfitsMark}
                alt="Netfits"
                className="w-full h-full object-contain"
              />
            </div>`;

if (inviteContent.includes(oldInviteLogo)) {
  inviteContent = inviteContent.replace(oldInviteLogo, newInviteLogo);
  fs.writeFileSync(invitePath, inviteContent, 'utf8');
  console.log('✅ Logo canônico preto + verde-limão aplicado em InviteFriendsCard.tsx');
}

// =========================================================================
// 5. ATUALIZAR AuthLegalModals.tsx (Purgar Jargão FEFO)
// =========================================================================
const authLegalPath = path.join(rootDir, 'src', 'components', 'auth', 'AuthLegalModals.tsx');
if (fs.existsSync(authLegalPath)) {
  let legalContent = fs.readFileSync(authLegalPath, 'utf8');
  const oldFefoText = `Os pontos <b>nfs</b> possuem validade de 24 meses sob o sistema FEFO.`;
  const newFefoText = `Os pontos <b>nfs</b> possuem validade de 24 meses. Ao utilizá-los, a Netfits consome sempre os pontos mais antigos primeiro, protegendo a sua pontuação.`;
  if (legalContent.includes(oldFefoText)) {
    legalContent = legalContent.replace(oldFefoText, newFefoText);
    fs.writeFileSync(authLegalPath, legalContent, 'utf8');
    console.log('✅ Jargão FEFO substituído por explicação humanizada em AuthLegalModals.tsx');
  }
}

// =========================================================================
// 6. BLINDAGEM ANTI-WOBBLE NO styles.css
// =========================================================================
const stylesPath = path.join(rootDir, 'src', 'styles.css');
let stylesContent = fs.readFileSync(stylesPath, 'utf8');

if (!stylesContent.includes('overscroll-behavior-x: none')) {
  stylesContent = stylesContent.replace(
    '  overflow-x: hidden !important;',
    '  overflow-x: hidden !important;\n  overscroll-behavior-x: none !important;\n  touch-action: pan-y;'
  );
  fs.writeFileSync(stylesPath, stylesContent, 'utf8');
  console.log('✅ Trava anti-wobble (overscroll-behavior-x e touch-action) adicionada ao styles.css');
}

// =========================================================================
// 7. FIXAR HEADER NA TELA DE PERFIL (profile.tsx)
// =========================================================================
const profilePath = path.join(rootDir, 'src', 'routes', 'profile.tsx');
let profileContent = fs.readFileSync(profilePath, 'utf8');

const oldProfileHeader = `<header className="bg-foreground text-background px-4 pt-[calc(env(safe-area-inset-top,0px)+1rem)] pb-4 flex items-center justify-between">`;
const newProfileHeader = `<header className="sticky top-0 z-30 bg-foreground text-background px-4 pt-[calc(env(safe-area-inset-top,0px)+1rem)] pb-3 flex items-center justify-between shadow-md">`;

if (profileContent.includes(oldProfileHeader)) {
  profileContent = profileContent.replace(oldProfileHeader, newProfileHeader);
  fs.writeFileSync(profilePath, profileContent, 'utf8');
  console.log('✅ Header da tela de Perfil fixado com sticky top-0 e z-30 em profile.tsx');
}

// =========================================================================
// 8. CORRIGIR min-w-[320px] EM associados.tsx (Eliminar estouro lateral)
// =========================================================================
const associadosPath = path.join(rootDir, 'src', 'routes', 'associados.tsx');
if (fs.existsSync(associadosPath)) {
  let assocContent = fs.readFileSync(associadosPath, 'utf8');
  if (assocContent.includes('min-w-[320px]')) {
    assocContent = assocContent.replace(/min-w-\[320px\]/g, 'min-w-0 w-full');
    fs.writeFileSync(associadosPath, assocContent, 'utf8');
    console.log('✅ min-w-[320px] corrigido para min-w-0 w-full em associados.tsx');
  }
}

console.log('\n🏁 Todas as correções canônicas de Logo, Header/Footer e Usabilidade foram aplicadas com sucesso!');
