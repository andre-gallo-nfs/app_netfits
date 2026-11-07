const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = 'C:\\Users\\aacga\\OneDrive\\netfits\\06_Design_Identidade_e_Midia\\AppStore_Screenshots_Oficiais';
fs.mkdirSync(outputDir, { recursive: true });

const pages = [
  { name: '01_tela_real_feed_1179x2556.png', url: 'https://www.netfits.com.br/feed' },
  { name: '02_tela_real_market_1179x2556.png', url: 'https://www.netfits.com.br/market' },
  { name: '03_tela_real_wallet_1179x2556.png', url: 'https://www.netfits.com.br/wallet' },
  { name: '04_tela_real_perfil_1179x2556.png', url: 'https://www.netfits.com.br/profile' }
];

pages.forEach((p, idx) => {
  const outPath = path.join(outputDir, p.name);
  console.log(`Capturing real screen ${idx + 1}/4: ${p.url}...`);
  const cmd = `"${chromePath}" --headless --disable-gpu --force-device-scale-factor=3 --window-size=393,852 --virtual-time-budget=6000 --hide-scrollbars --screenshot="${outPath}" "${p.url}"`;
  execSync(cmd);
  const b = fs.readFileSync(outPath);
  console.log(`Saved: ${p.name} -> ${b.readUInt32BE(16)}x${b.readUInt32BE(20)} (${Math.round(b.length / 1024)} KB)`);
});

console.log('✅ All 4 real app screens captured at exact 1179x2556 resolution!');
