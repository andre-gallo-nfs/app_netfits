const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = 'C:\\Users\\aacga\\OneDrive\\netfits\\06_Design_Identidade_e_Midia\\AppStore_Screenshots_Oficiais';

const outPath = path.join(outputDir, '01_tela_real_ipad_13pol_2048x2732.png');
console.log('Capturing real iPad screen 2048x2732...');
const cmd = `"${chromePath}" --headless --disable-gpu --force-device-scale-factor=2 --window-size=1024,1366 --virtual-time-budget=6000 --hide-scrollbars --screenshot="${outPath}" "https://www.netfits.com.br/feed"`;
execSync(cmd);
const b = fs.readFileSync(outPath);
console.log(`Saved iPad 13": ${b.readUInt32BE(16)}x${b.readUInt32BE(20)} (${Math.round(b.length / 1024)} KB)`);
