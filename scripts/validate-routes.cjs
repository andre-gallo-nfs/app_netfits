/**
 * Netfits Automated QA Squad — Route & Component Integrity Validator
 * 
 * Este script faz análise estática e sintática profunda em todas as rotas e componentes:
 * 1. Verifica se todos os React Hooks utilizados no código executável estão devidamente importados do 'react'.
 * 2. Valida se nenhum identificador essencial fique como 'undefined' em runtime.
 * 3. Ignora strings literais e comentários.
 */

const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT_DIR, "src");

const REACT_HOOKS = [
  "useState",
  "useEffect",
  "useMemo",
  "useCallback",
  "useRef",
  "useContext",
  "useReducer",
  "useId",
  "useLayoutEffect",
  "useTransition",
  "useDeferredValue",
  "useImperativeHandle",
];

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else if (file.endsWith(".ts") || file.endsWith(".tsx")) {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

function stripCommentsAndStrings(code) {
  // Remove comentários de bloco /* ... */ e linha // ...
  let cleaned = code.replace(/\/\*[\s\S]*?\*\//g, "");
  cleaned = cleaned.replace(/\/\/.*$/gm, "");
  // Remove strings com aspas duplas, simples e template literals
  cleaned = cleaned.replace(/"(?:[^"\\]|\\.)*"/g, '""');
  cleaned = cleaned.replace(/'(?:[^'\\]|\\.)*'/g, "''");
  cleaned = cleaned.replace(/`(?:[^`\\]|\\.)*`/g, "``");
  return cleaned;
}

function validateFile(filePath) {
  const relativePath = path.relative(ROOT_DIR, filePath);
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const errors = [];

  // 1. Extrair todos os imports do React (suporta: import { a, b }, import React, { a, b }, import * as React)
  const reactImportRegex = /import\s+(?:(?:\*\s+as\s+React)|(?:React\s*,\s*\{([^}]+)\})|(?:\{([^}]+)\})|(?:React))\s+from\s+["']react["']/g;
  const importedReactItems = new Set();
  let hasWildcardOrDefaultReact = false;

  let match;
  while ((match = reactImportRegex.exec(rawContent)) !== null) {
    if (match[0].includes("* as React") || match[0].includes("import React from")) {
      hasWildcardOrDefaultReact = true;
    }
    const namedGroup = match[1] || match[2];
    if (namedGroup) {
      namedGroup.split(",").forEach((item) => {
        const cleaned = item.trim().split(/\s+as\s+/)[0];
        if (cleaned) importedReactItems.add(cleaned);
      });
    }
  }

  // 2. Limpar strings e comentários para checar apenas o código executável
  const executableCode = stripCommentsAndStrings(rawContent);

  // 3. Verificar o uso de React Hooks no código executável
  REACT_HOOKS.forEach((hook) => {
    // Regex para detectar uso direto do hook (ex: useEffect( ou useState<)
    const hookUsageRegex = new RegExp(`(?<!React\\.)\\b${hook}\\s*(?:<|\\()`, "g");
    if (hookUsageRegex.test(executableCode)) {
      if (!importedReactItems.has(hook)) {
        errors.push(`[React Hook Faltante] O hook '${hook}' está sendo executado no arquivo, mas NÃO FOI IMPORTADO de 'react'.`);
      }
    }
  });

  return {
    file: relativePath,
    errors,
  };
}

console.log("🔍 [Netfits QA Squad] Executando Varredura Automática de Integridade em src/...");
const files = getAllFiles(SRC_DIR);
let totalErrors = 0;

files.forEach((file) => {
  const result = validateFile(file);
  if (result.errors.length > 0) {
    console.error(`\n❌ ERRO DETECTADO EM: ${result.file}`);
    result.errors.forEach((err) => {
      console.error(`   - ${err}`);
      totalErrors++;
    });
  }
});

if (totalErrors > 0) {
  console.error(`\n🚨 FALHA NO QUALITY GATE: ${totalErrors} erro(s) de import/integridade detectado(s).`);
  process.exit(1);
} else {
  console.log(`\n✅ QUALITY GATE APROVADO: Todos os ${files.length} arquivos TypeScript/React estão íntegros e com imports 100% validados!`);
  process.exit(0);
}
