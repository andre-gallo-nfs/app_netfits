const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputPath = path.resolve('test_real_feed.png');
const cmd = `"${chromePath}" --headless --disable-gpu --force-device-scale-factor=3 --window-size=393,852 --hide-scrollbars --screenshot="${outputPath}" https://www.netfits.com.br/feed`;

execSync(cmd);
const b = fs.readFileSync(outputPath);
console.log('Real app capture dimensions:', b.readUInt32BE(16), 'x', b.readUInt32BE(20), 'Bytes:', b.length);
