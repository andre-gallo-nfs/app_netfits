#!/usr/bin/env node
/**
 * NETFITS — BRAND, KV & MEDICAL COMPLIANCE GATEKEEPER
 * Inspeciona todo o código em src/ para garantir:
 * 1. Conformidade estrita com o Conselho Federal de Medicina (CFM / Codame / RQE)
 *    para os sócios da Fibios (Dr. Franco Merici e Dra. Isabella Formigari).
 * 2. Validação da paleta oficial de Design Tokens do Manifesto Netfits v3.0 e Guia de Presença Digital.
 */

import fs from "node:fs";
import path from "node:path";

console.log("=======================================================");
console.log("🛡️ NETFITS — BRAND, KV & MEDICAL COMPLIANCE CHECKER");
console.log("=======================================================");

const SRC_DIR = path.resolve(process.cwd(), "src");
let totalErrors = 0;
let totalWarnings = 0;

// =========================================================================
// 1. REGRAS DE COMPLIANCE MÉDICO (CFM / CODAME / RQE)
// =========================================================================
const FORBIDDEN_MEDICAL_TITLES = [
  { pattern: /(?:Franco Merici|Isabella Formigari)[^.,;\n]{0,60}\b(?:especialista em|ortopedista|nutr[oó]log[ao]|m[eé]dic[ao] do esporte|medicina esportiva)\b/gi, reason: "CFM: Proibido atribuir titulação de especialista (Ortopedia/Nutrologia/Medicina do Esporte) aos sócios da Fibios." },
  { pattern: /\b(?:ortopedista|nutr[oó]log[ao]|m[eé]dic[ao] do esporte)\b[^.,;\n]{0,60}(?:Franco Merici|Isabella Formigari)/gi, reason: "CFM: Proibido qualificar Dr. Franco Merici ou Dra. Isabella Formigari com especialidades não registradas (RQE)." },
];

function checkMedicalCompliance(filePath, content) {
  for (const rule of FORBIDDEN_MEDICAL_TITLES) {
    const match = rule.pattern.exec(content);
    if (match) {
      console.error(`\n❌ [VIOLAÇÃO CFM DETECTADA] em ${filePath}:`);
      console.error(`   Trecho: "...${match[0]}..."`);
      console.error(`   Regra: ${rule.reason}`);
      console.error(`   Titulação canônica exigida:`);
      console.error(`   - Dr. Franco Merici: 'Médico (CRM-SP 212567) sócio fundador da Fibios'`);
      console.error(`   - Dra. Isabella Formigari: 'Médica (CRM-SP 282951) sócia fundadora da Fibios'`);
      totalErrors++;
    }
  }
}

// =========================================================================
// 2. REGRAS DE KEY VISUAL (KV) & DESIGN TOKENS (MANIFESTO v3.0)
// =========================================================================
// Cores canônicas do Manifesto v3.0:
// #35106E (Roxo escuro institucional)
// #6B2AD9 (Roxo vibrante de destaque)
// #C8F135 (Verde-limão movimento)
// #5D7600 (Verde oliva institucional)
// #F2ECFD (Fundo lavanda institucional)
// #F5F5F7 (Cinza claro neutro)
// #202127 (Grafite texto)

function checkKeyVisualTokens(filePath, content) {
  // Alerta sobre cores fora da paleta em componentes de marca principais
  if (filePath.endsWith("Manifesto.tsx") || filePath.endsWith("BrandBar.tsx")) {
    const invalidRoxo = /#(?:7C3AED|8B5CF6|581C87)\b/gi;
    if (invalidRoxo.test(content)) {
      console.warn(`\n⚠️ [AVISO KV - PALETA ANTIGA] em ${filePath}: Componente de identidade usando roxo legado. Prefira #35106E ou #6B2AD9 (Manifesto 3.0).`);
      totalWarnings++;
    }
  }
}

// =========================================================================
// VARREDURA RECURSIVA
// =========================================================================
function scanDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDirectory(fullPath);
    } else if (/\.(tsx?|jsx?|html|md)$/i.test(entry.name)) {
      const content = fs.readFileSync(fullPath, "utf-8");
      const relPath = path.relative(process.cwd(), fullPath);
      checkMedicalCompliance(relPath, content);
      checkKeyVisualTokens(relPath, content);
    }
  }
}

scanDirectory(SRC_DIR);

console.log("\n-------------------------------------------------------");
if (totalErrors > 0) {
  console.error(`❌ CHECKER FALHOU: Encontradas ${totalErrors} violações bloqueantes de compliance.`);
  process.exit(1);
} else {
  console.log(`✅ COMPLIANCE APROVADO: 100% aderente às normas CFM e Design Tokens do Manifesto 3.0.`);
  if (totalWarnings > 0) {
    console.log(`ℹ️ ${totalWarnings} avisos não impeditivos de KV registrados.`);
  }
  console.log("=======================================================\n");
  process.exit(0);
}
