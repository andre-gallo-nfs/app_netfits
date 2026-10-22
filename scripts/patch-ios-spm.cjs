const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'node_modules', '@capacitor', 'app', 'ios', 'Sources', 'AppPlugin', 'AppPlugin.swift');

if (fs.existsSync(file)) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('call.reject("Unable to get App Info")')) {
    content = content.replace('call.reject("Unable to get App Info")', 'call.resolve([:])');
    fs.writeFileSync(file, content, 'utf8');
    console.log('✅ [patch-ios-spm] AppPlugin.swift patched successfully for Swift 6 compatibility');
  } else {
    console.log('ℹ️ [patch-ios-spm] AppPlugin.swift already patched or does not contain target string');
  }
} else {
  console.log('⚠️ [patch-ios-spm] File not found:', file);
}
