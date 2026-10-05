import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/aacga/.gemini/antigravity/brain/54b2dabf-7dd2-4d06-8b93-2c26c254277c/.system_generated/logs/transcript.jsonl')
});

rl.on('line', line => {
  try {
    const obj = JSON.parse(line);
    if (obj.step_index >= 5610 && obj.step_index <= 5670 && (obj.source === 'USER_EXPLICIT' || (obj.source === 'MODEL' && obj.content))) {
      console.log('--- Step ' + obj.step_index + ' (' + obj.source + ') ---');
      console.log(obj.content);
      console.log('\n');
    }
  } catch(e) {}
});
