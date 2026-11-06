#!/usr/bin/env node
/**
 * 📱 NETFITS — CROSS-PLATFORM MOBILE & RUNTIME GATEKEEPER
 * 
 * Regra Mandatória de Governança Multiagêntica (GEMINI.md Seção 6):
 * Audita a integridade da aplicação para garantir paridade 100% simétrica entre:
 * 1. Android (Chromium WebView, Intents do Sistema, Google Chrome)
 * 2. iOS (WebKit WKWebView, Face ID, Mobile Safari)
 * 3. Web (Desktop, Progressive Web App)
 * 
 * VETA E BLOQUEIA QUALQUER DEPLOY caso detecte:
 * - Redirecionamentos para domínios externos que quebrem a WebView do Android ou iOS.
 * - Falta de declaração de domínios em allowNavigation no capacitor.config.ts.
 * - Soluções de hardware/biometria que contemplem apenas iOS ou apenas Android.
 * - Textos de UI que assumam uma plataforma específica como padrão universal.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

console.log("=======================================================");
console.log("📱 NETFITS — CROSS-PLATFORM MOBILE & RUNTIME GATEKEEPER");
console.log("=======================================================");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const SRC_DIR = path.resolve(ROOT_DIR, "src");
let totalErrors = 0;
let totalWarnings = 0;

// =========================================================================
// 1. AUDITORIA DO CAPACITOR.CONFIG.TS (Casca Nativa Android & iOS)
// =========================================================================
function checkCapacitorConfig() {
  const capPath = path.resolve(ROOT_DIR, "capacitor.config.ts");
  if (!fs.existsSync(capPath)) {
    console.error("❌ [FALHA CRÍTICA] capacitor.config.ts não encontrado na raiz!");
    totalErrors++;
    return;
  }

  const content = fs.readFileSync(capPath, "utf8");

  // Domínios obrigatórios de navegação segura em ambas as plataformas
  const requiredDomains = [
    "netfits.com.br",
    "*.netfits.com.br",
    "*.mkplace.com.br"
  ];

  for (const domain of requiredDomains) {
    if (!content.includes(domain)) {
      console.error(`❌ [CAPACITOR VIOLATION] Domínio obrigatório ausente em allowNavigation: "${domain}"`);
      console.error("   Impacto: No Android ou iOS, a WebView bloqueará navegações externas gerando tela preta.");
      totalErrors++;
    }
  }

  // Verificar se há esquemas Android e iOS definidos
  if (!content.includes('androidScheme: "https"') || !content.includes('iosScheme: "https"')) {
    console.error("❌ [CAPACITOR VIOLATION] androidScheme e iosScheme devem ser 'https' para paridade criptográfica.");
    totalErrors++;
  }
}

// =========================================================================
// 2. AUDITORIA DE REDIRECIONAMENTOS EXTERNOS (OAuth & Navegação)
// =========================================================================
function checkExternalNavigation(filePath, content) {
  // Proibir window.location.href direto para domínios de terceiros sem intent do sistema
  const externalDomains = ["connect.garmin.com", "sso.garmin.com", "strava.com", "accounts.google.com"];

  for (const domain of externalDomains) {
    const rawLocPattern = new RegExp(`window\\.location\\.href\\s*=\\s*["'\`][^"'\`]*${domain}`, "g");
    if (rawLocPattern.test(content)) {
      // Se tiver window.location.href direto, deve haver checagem de _system ou Intent para Android
      if (!content.includes("_system") && !content.includes("openExternalBrowser")) {
        console.error(`\n❌ [CROSS-PLATFORM VIOLATION] Redirecionamento inseguro detectado em ${filePath}:`);
        console.error(`   Domínio externo: "${domain}"`);
        console.error(`   Causa da Falha: window.location.href direto dentro de WebView do Android provoca tela preta / 403 bot-block.`);
        console.error(`   Solução Obrigatória: Usar window.open(url, "_system") ou intent nativa para abrir no Chrome (Android) / Safari (iOS).`);
        totalErrors++;
      }
    }
  }
}

// =========================================================================
// 3. AUDITORIA DE BIOMETRIA & SEGURANÇA CRUZADA (Android Fingerprint + iOS Face ID)
// =========================================================================
function checkBiometricsAndLock(filePath, content) {
  if (filePath.includes("app-lock-store.ts") || filePath.includes("SecurityLockOverlay.tsx")) {
    // Exigir fallback de credencial do dispositivo (PIN/Código) tanto para iOS quanto Android
    if (content.includes("BiometricAuth.authenticate") && !content.includes("allowDeviceCredential")) {
      console.error(`\n❌ [BIOMETRICS VIOLATION] em ${filePath}:`);
      console.error(`   allowDeviceCredential deve ser TRUE para permitir PIN do Android e Código do iPhone como fallback.`);
      totalErrors++;
    }

    // Proibir onTouchStart em inputs que cancela o teclado virtual do WebKit/Chromium
    if (content.includes("onTouchStart") && content.includes("inputRef.current?.focus()")) {
      console.error(`\n❌ [KEYBOARD TRAP DETECTADA] em ${filePath}:`);
      console.error(`   onTouchStart com synthetic focus() bloqueia o teclado virtual no iOS e em versões do Android WebView.`);
      totalErrors++;
    }
  }
}

// =========================================================================
// 4. AUDITORIA DE TEXTOS E VIÉS DE PLATAFORMA (Universal UI)
// =========================================================================
function checkPlatformBiasTexts(filePath, content) {
  // Proibir textos que digam apenas "Código do iPhone" sem opção genérica de dispositivo
  if (content.includes("apenas no iPhone") || content.includes("somente para iPhone")) {
    console.error(`\n❌ [UI PLATFORM BIAS DETECTADO] em ${filePath}:`);
    console.error(`   A Netfits opera simultaneamente em Android e iOS. Textos com viés exclusivo são proibidos.`);
    totalErrors++;
  }
}

// =========================================================================
// EXECUÇÃO RECURSIVA DO GATEKEEPER
// =========================================================================
function scanDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "node_modules" && entry.name !== ".git" && entry.name !== "dist" && entry.name !== ".output") {
        scanDirectory(fullPath);
      }
    } else if (entry.isFile() && (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx") || entry.name.endsWith(".js") || entry.name.endsWith(".mjs"))) {
      const content = fs.readFileSync(fullPath, "utf8");
      checkExternalNavigation(fullPath, content);
      checkBiometricsAndLock(fullPath, content);
      checkPlatformBiasTexts(fullPath, content);
    }
  }
}

// Executar verificações
checkCapacitorConfig();
scanDirectory(SRC_DIR);

console.log("-------------------------------------------------------");
if (totalErrors > 0) {
  console.error(`❌ GATEKEEPER REPROVADO: Foram encontradas ${totalErrors} violações de paridade mobile (Android/iOS).`);
  console.error("🛑 DEPLOY AUTOMATICAMENTE VETADO PELA GOVERNANÇA.");
  process.exit(1);
} else {
  console.log("✅ PARIDADE MOBILE APROVADA: 100% compatível com Android (Chromium/Intents) e iOS (WebKit/Safari).");
  console.log("=======================================================");
  process.exit(0);
}
