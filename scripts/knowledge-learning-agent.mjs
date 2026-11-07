#!/usr/bin/env node
/**
 * NETFITS — CONTINUOUS LEARNING & KNOWLEDGE GATEKEEPER AGENT
 * 
 * Este agente lê a base viva de memória (LESSONS_LEARNED.json) e
 * executa varreduras de anti-regressão em todo o código-fonte da Netfits,
 * garantindo que decisões do fundador e lições de incidentes passados
 * nunca mais sejam esquecidas ou violadas por novos desenvolvimentos.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const KNOWLEDGE_JSON = path.join(rootDir, "src", "lib", "knowledge", "LESSONS_LEARNED.json");
const KNOWLEDGE_MD = path.join(rootDir, "src", "lib", "knowledge", "LESSONS_LEARNED.md");

function loadKnowledge() {
  if (!fs.existsSync(KNOWLEDGE_JSON)) {
    console.error(`❌ Base de conhecimento não encontrada em ${KNOWLEDGE_JSON}`);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(KNOWLEDGE_JSON, "utf-8"));
}

function getAllSourceFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (
      file === "node_modules" || 
      file === ".output" || 
      file === ".wrangler" || 
      file === "dist" || 
      file === ".git" ||
      file.includes(".test.") ||
      file.includes("checker") ||
      file.includes("LESSONS_LEARNED")
    ) {
      continue;
    }
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllSourceFiles(fullPath, fileList);
    } else if (/\.(tsx|ts|jsx|js|json|md)$/.test(file)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

export function runKnowledgeAudit() {
  console.log("=======================================================");
  console.log("🧠 NETFITS — CONTINUOUS LEARNING & KNOWLEDGE GATEKEEPER");
  console.log("=======================================================");

  const lessons = loadKnowledge();
  console.log(`🔍 Auditando código contra ${lessons.length} lições aprendidas memorizadas...\n`);

  const files = getAllSourceFiles(path.join(rootDir, "src"));
  const violations = [];

  for (const lesson of lessons) {
    // 1. Anti-patterns simples em arquivos de código
    if (lesson.antiPattern && Array.isArray(lesson.antiPattern)) {
      for (const pattern of lesson.antiPattern) {
        for (const file of files) {
          const relativePath = path.relative(rootDir, file).replace(/\\/g, "/");

          // Escopo para LL-011: Proibição de Mutação de Carteira Client-Side
          // Aplica-se a arquivos client-side (src/components/, src/routes/, src/lib/).
          // No backend (src/server/), o servidor tem a obrigação legítima de creditar o padrinho atomicamente.
          if (lesson.id === "LL-011") {
            if (relativePath.startsWith("src/server/")) continue;
          }

          // Escopo cirúrgico para Jargões de UI (LL-005):
          // Aplica-se exclusivamente a textos visíveis para o usuário final no Feed, cards e posts agendados.
          // O backend (server/), administração (admin/) e serviços internos (fefo-service.ts) usam FEFO como termo técnico de engenharia.
          if (lesson.id === "LL-005") {
            const isUserFacing = 
              relativePath.includes("components/ScheduledFeedCard") ||
              relativePath.includes("components/DrFrancoQuizCard") ||
              relativePath.includes("components/DraIsabellaQuizCard") ||
              relativePath.includes("components/DrIsabellaCard") ||
              relativePath.includes("components/NetfitsEducationalCard") ||
              relativePath.includes("components/MizunoArticleFeedCard") ||
              relativePath.includes("lib/scheduled-posts-data.json");
            
            if (!isUserFacing) continue;
          }

          const content = fs.readFileSync(file, "utf-8");
          if (content.includes(pattern)) {
            violations.push({
              lessonId: lesson.id,
              title: lesson.title,
              severity: lesson.severity,
              file: relativePath,
              foundPattern: pattern,
              rule: lesson.rule
            });
          }
        }
      }
    }
  }

  // 2. Verificação de Integridade das 4 Abas Canônicas (LL-008)
  const appShellFile = path.join(rootDir, "src", "components", "AppShell.tsx");
  if (fs.existsSync(appShellFile)) {
    const appShellContent = fs.readFileSync(appShellFile, "utf-8");
    const hasFeed = appShellContent.includes('/feed');
    const hasShop = appShellContent.includes('/market');
    const hasClub = appShellContent.includes('/club');
    const hasWallet = appShellContent.includes('/wallet');

    if (!hasFeed || !hasShop || !hasClub || !hasWallet) {
      violations.push({
        lessonId: "LL-008",
        title: "Arquitetura das 4 Abas Estruturais da Barra Inferior",
        severity: "CRITICAL",
        file: "src/components/AppShell.tsx",
        foundPattern: "Abas estruturais ausentes ou alteradas",
        rule: "A navegação inferior DEVE conter Feed, Shop, Clube e Carteira."
      });
    }
  }

  // 3. Verificação de Quiz Locking (LL-007)
  const feedCardFile = path.join(rootDir, "src", "components", "ScheduledFeedCard.tsx");
  if (fs.existsSync(feedCardFile)) {
    const content = fs.readFileSync(feedCardFile, "utf-8");
    if (!content.includes("!readClaimed") || !content.includes("Bloqueado")) {
      violations.push({
        lessonId: "LL-007",
        title: "Blindagem de Quiz-Locking e Travas Antifraude",
        severity: "CRITICAL",
        file: "src/components/ScheduledFeedCard.tsx",
        foundPattern: "Quiz desprotegido contra leitura",
        rule: "O Quiz deve permanecer bloqueado até que a leitura ou vídeo sejam auditados."
      });
    }
  }

  // Relatório Final
  if (violations.length === 0) {
    console.log("-------------------------------------------------------");
    console.log(`✅ MEMÓRIA INSTITUCIONAL APROVADA: Score 100/100.`);
    console.log(`   Nenhuma das ${lessons.length} decisões históricas foi violada ou esquecida.`);
    console.log("=======================================================\n");
    return true;
  } else {
    console.error("-------------------------------------------------------");
    console.error(`❌ REGRESSÃO DE CONHECIMENTO DETECTADA (${violations.length} violações):\n`);
    for (const v of violations) {
      console.error(`[${v.severity}] Lição ${v.lessonId}: ${v.title}`);
      console.error(`  Arquivo: ${v.file}`);
      console.error(`  Padrão proibido: "${v.foundPattern}"`);
      console.error(`  Regra Memorizada: ${v.rule}\n`);
    }
    console.error("=======================================================");
    console.error("🛑 O Continuous Learning Agent vetou a continuidade.");
    console.error("   Corrija as regressões acima para respeitar o aprendizado acumulado.");
    console.error("=======================================================\n");
    return false;
  }
}

// Execução direta via CLI
const args = process.argv.slice(2);
if (args.includes("--audit") || args.length === 0) {
  const ok = runKnowledgeAudit();
  if (!ok) process.exit(1);
}
