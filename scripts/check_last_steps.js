const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({ input: fs.createReadStream('C:/Users/aacga/.gemini/antigravity/brain/54b2dabf-7dd2-4d06-8b93-2c26c254277c/.system_generated/logs/transcript.jsonl') });

const items = [];
rl.on('line', line => {
  if (line.includes('USER_INPUT')) {
    try {
      const obj = JSON.parse(line);
      items.push({ step: obj.step_index, content: obj.content });
    } catch(e) {}
  }
});

rl.on('close', () => {
  console.log(JSON.stringify(items.slice(-10), null, 2));
});
