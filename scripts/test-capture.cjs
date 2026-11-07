const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputPath = path.resolve('appstore_feed_test.png');

// 1290 x 2796 is the exact iPhone 6.7" resolution required by Apple
const cmd = `"${chromePath}" --headless --disable-gpu --screenshot="${outputPath}" --window-size=1290,2796 --hide-scrollbars --user-agent="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148" https://www.netfits.com.br/feed`;

console.log('Running capture...');
execSync(cmd);
console.log('File generated:', fs.existsSync(outputPath), 'Size:', fs.statSync(outputPath).size);
