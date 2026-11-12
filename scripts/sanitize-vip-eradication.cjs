const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\aacga\\Projetos\\app_netfits';

const replacements = [
  {
    file: 'src/routes/club.tsx',
    subs: [
      ['Clube Netfits — Experiência VIP & Longevidade Ativa', 'Clube Netfits — Longevidade Ativa & Saúde Integrada'],
      ['Clube Netfits — Experiência VIP', 'Clube Netfits — Longevidade Ativa'],
      ['{isMember ? "Assinatura VIP Ativa" : "Plano Oficial"}', '{isMember ? "Assinatura do Clube Ativa" : "Plano Oficial"}'],
      ['<span className="text-2xl font-black text-[#202127]">Adesão VIP</span>', '<span className="text-2xl font-black text-[#202127]">Adesão ao Clube</span>'],
      ['Benefícios VIP Ativos', 'Benefícios do Clube Ativos'],
      ['Lista VIP do Clube Netfits', 'Lista de Espera do Clube Netfits'],
      ['Multiplicador VIP no Shop', 'Multiplicador do Clube no Shop'],
      ['Ativar Clube Netfits VIP', 'Ativar Clube Netfits'],
      ['benefícios VIP no Shop', 'benefícios exclusivos no Shop'],
      ['Lista VIP do Clube!', 'Lista de Espera do Clube!'],
      ['Entrar na Lista VIP (Aguardando Lançamento)', 'Entrar na Lista de Espera (Aguardando Lançamento)'],
      ['Entrar na Lista VIP (Em Breve)', 'Entrar na Lista de Espera (Em Breve)'],
      ['Lista VIP', 'Lista de Espera'],
    ]
  },
  {
    file: 'src/components/ClubMembershipModal.tsx',
    subs: [
      ['Lista VIP do Clube Netfits', 'Lista de Espera do Clube Netfits'],
      ['Experiência VIP', 'Experiência do Clube'],
      ['Adesão VIP', 'Adesão ao Clube'],
      ['Entrar na Lista VIP do Clube (Em Breve)', 'Entrar na Lista de Espera do Clube (Em Breve)'],
    ]
  },
  {
    file: 'src/routes/download.tsx',
    subs: [
      ['Lista VIP de Lançamento', 'Lista de Notificação de Lançamento'],
      ['Entrar na Lista VIP (iOS)', 'Notificar no Lançamento (iOS)'],
      ['Entrar na Lista VIP (Android)', 'Notificar no Lançamento (Android)'],
      ['Entrar na Lista VIP', 'Notificar no Lançamento'],
    ]
  },
  {
    file: 'src/routes/home.tsx',
    subs: [
      ['acessos VIP a eventos e corridas de rua', 'acessos especiais a eventos e corridas de rua'],
    ]
  },
  {
    file: 'src/lib/badges-store.ts',
    subs: [
      ['title: "Associado VIP"', 'title: "Associado Embaixador"'],
      ['// 8. Indicações (Embaixador & Associado VIP)', '// 8. Indicações (Embaixador & Associado Master)'],
      ['const isAssociadoVip = referralCount >= 10;', 'const isAssociadoVip = referralCount >= 10;'],
    ]
  },
  {
    file: 'src/lib/emails/email-service.ts',
    subs: [
      ['Assinatura Confirmada! Bem-vindo ao Clube Netfits VIP', 'Assinatura Confirmada! Bem-vindo ao Clube Netfits'],
    ]
  },
  {
    file: 'src/lib/emails/templates.ts',
    subs: [
      ['const nome = data.nomeUsuario || "Assinante VIP";', 'const nome = data.nomeUsuario || "Membro do Clube";'],
      ['CLUBE VIP', 'CLUBE NETFITS'],
    ]
  },
  {
    file: 'src/server/club-subscription-handlers.ts',
    subs: [
      ['planId: "club_monthly" | "club_annual" | "club_vip";', 'planId: "club_monthly" | "club_annual" | "club_pro";'],
    ]
  },
  {
    file: 'src/server/email-handlers.ts',
    subs: [
      ['matchedUser?.fullName || "Assinante VIP";', 'matchedUser?.fullName || "Membro do Clube";'],
    ]
  },
  {
    file: 'src/components/admin/AdminAssociadosTab.tsx',
    subs: [
      ['Influenciador VIP', 'Influenciador Oficial'],
    ]
  },
  {
    file: 'src/components/admin/AdminDreFinOpsTab.tsx',
    subs: [
      ['👑 6. Partner & VIP Co-Pilot', '👑 6. Partner & Co-Pilot'],
      ['Associados VIP', 'Associados Parceiros'],
    ]
  },
  {
    file: 'src/components/admin/AdminInteractionsTab.tsx',
    subs: [
      ['Associados VIP', 'Associados Parceiros'],
      ['👑 Associados VIP', '👑 Associados Parceiros'],
    ]
  },
  {
    file: 'src/components/admin/AdminOverviewTab.tsx',
    subs: [
      ['OKR 2: Rede de ASSOCIADOS VIP & Eficiência de CAC', 'OKR 2: Rede de ASSOCIADOS EMBAIXADORES & Eficiência de CAC'],
      ['Associados VIP ativos', 'Associados Parceiros ativos'],
    ]
  },
  {
    file: 'src/components/admin/AdminPartnersTab.tsx',
    subs: [
      ['SMARTFIT_NETFITS_VIP', 'SMARTFIT_NETFITS_PRO'],
    ]
  }
];

let totalCount = 0;
for (const item of replacements) {
  const filePath = path.join(rootDir, item.file);
  if (!fs.existsSync(filePath)) {
    console.log(`[SKIP] Arquivo não encontrado: ${filePath}`);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  let fileChanges = 0;
  for (const [target, replacement] of item.subs) {
    if (content.includes(target)) {
      content = content.split(target).join(replacement);
      fileChanges++;
      totalCount++;
    }
  }
  if (fileChanges > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[OK] ${item.file}: ${fileChanges} substituições realizadas.`);
  } else {
    console.log(`[INFO] ${item.file}: Nenhuma ocorrência encontrada.`);
  }
}

console.log(`Total de substituições de termos VIP: ${totalCount}`);
