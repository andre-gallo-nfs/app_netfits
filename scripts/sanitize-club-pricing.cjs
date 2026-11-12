const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. Sanitize src/routes/club.tsx
{
  const filePath = path.join(rootDir, 'src/routes/club.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace price with "Adesão VIP" / "Em Breve"
  content = content.replace(
    /<span className="text-3xl font-black text-\[#202127\]">R\$ 19,90<\/span>\s*<span className="text-xs font-semibold text-\[#5F6270\]">\/ mês<\/span>/g,
    `<span className="text-2xl font-black text-[#202127]">Adesão VIP</span>\n                <span className="text-xs font-bold text-[#6B2AD9] px-2 py-0.5 rounded-full bg-[#F2ECFD]">Em Breve</span>`
  );

  content = content.replace('Sem carência ou fidelidade', 'Programa de incentivo ao movimento');

  // Modal Price
  content = content.replace(
    /<span className="text-xs font-bold text-\[#5F6270\]">Valor da Mensalidade:<\/span>\s*<span className="text-base font-black text-\[#202127\]">R\$ 19,90 \/ mês<\/span>/g,
    `<span className="text-xs font-bold text-[#5F6270]">Status da Adesão:</span>\n                <span className="text-base font-black text-[#202127]">Em Breve</span>`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('src/routes/club.tsx sanitized regex successfully');
}

// 2. Sanitize src/components/ClubMembershipModal.tsx
{
  const filePath = path.join(rootDir, 'src/components/ClubMembershipModal.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(
    /<span className="text-2xl font-black text-white">R\$ 19,90<\/span>\s*<span className="text-xs text-zinc-400">\/ mês<\/span>/g,
    `<span className="text-2xl font-black text-white">Adesão VIP</span>\n                  <span className="text-xs text-amber-300 font-bold ml-1">(Em Breve)</span>`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('src/components/ClubMembershipModal.tsx sanitized regex successfully');
}

console.log('Done regex pass!');
