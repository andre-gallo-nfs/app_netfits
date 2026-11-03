#!/usr/bin/env node
/**
 * NETFITS — EDITORIAL & CONTENT QUALITY GATEKEEPER
 * Inspeciona todo o conteúdo de posts agendados e componentes de cards para garantir:
 * 1. Nomenclatura universal obrigatória do Quiz: "QUIZZ NETFITS" (100% dos cards).
 * 2. Proibição absoluta de jargões técnicos corporativos (FEFO, partidas dobradas, FinOps, etc.).
 * 3. Integridade do Quiz: exatamente 4 opções, feedbacks pedagógicos em todas as alternativas.
 * 4. Distribuição aleatória e balanceada da alternativa correta (proíbe concentração na Opção A).
 */

import fs from "node:fs";
import path from "node:path";

console.log("=======================================================");
console.log("📝 NETFITS — EDITORIAL & CONTENT QUALITY GATEKEEPER");
console.log("=======================================================");

let totalErrors = 0;
let totalWarnings = 0;

// =========================================================================
// 1. VERIFICAÇÃO DO BANCO DE POSTS (scheduled-posts-data.json)
// =========================================================================
const POSTS_JSON_PATH = path.resolve(process.cwd(), "src/lib/scheduled-posts-data.json");

if (!fs.existsSync(POSTS_JSON_PATH)) {
  console.error(`❌ Arquivo de posts não encontrado em: ${POSTS_JSON_PATH}`);
  process.exit(1);
}

const posts = JSON.parse(fs.readFileSync(POSTS_JSON_PATH, "utf-8"));
console.log(`🔍 Auditando ${posts.length} posts do calendário oficial...`);

// Lista de jargões corporativos proibidos no texto do usuário final
const FORBIDDEN_JARGONS = [
  { pattern: /\bFEFO\b/i, term: "FEFO (substitua por 'pontos mais antigos primeiro' ou 'vencimento mais próximo')" },
  { pattern: /\bLIFO\b/i, term: "LIFO (jargão de contabilidade/estoque)" },
  { pattern: /\bpartidas dobradas\b/i, term: "partidas dobradas (jargão contábil interno)" },
  { pattern: /\bfinops\b/i, term: "finops (termo corporativo interno)" },
  { pattern: /\bminting\b/i, term: "minting (jargão cripto/loyalty)" },
  { pattern: /\bdwell time\b/i, term: "dwell time (termo técnico interno de antifraude)" },
  { pattern: /\bantifraude\b/i, term: "antifraude (comunique apenas requisitos de leitura ou visualização)" },
  { pattern: /\bledger\b/i, term: "ledger (use 'extrato' ou 'carteira')" },
];

function checkTextForJargons(postId, fieldName, text) {
  if (!text) return;
  const content = typeof text === "string" ? text : JSON.stringify(text);
  for (const jargon of FORBIDDEN_JARGONS) {
    if (jargon.pattern.test(content)) {
      console.error(`\n❌ [JARGÃO CORPORATIVO PROIBIDO]`);
      console.error(`   Post ID: ${postId}`);
      console.error(`   Campo: ${fieldName}`);
      console.error(`   Termo proibido: ${jargon.term}`);
      totalErrors++;
    }
  }
}

const correctPositionsCount = { A: 0, B: 0, C: 0, D: 0 };

posts.forEach((post, index) => {
  const pId = post.id || `post-idx-${index}`;

  // 1.1 Checagem de jargões em todos os campos de texto
  checkTextForJargons(pId, "title", post.title);
  checkTextForJargons(pId, "subtitle", post.subtitle);
  checkTextForJargons(pId, "pillText", post.pillText);
  checkTextForJargons(pId, "takeaway", post.takeaway);
  if (Array.isArray(post.articleContent)) {
    post.articleContent.forEach((p, pIdx) => checkTextForJargons(pId, `articleContent[${pIdx}]`, p));
  }
  checkTextForJargons(pId, "quizQuestion", post.quizQuestion);

  // 1.2 Integridade do Quiz
  if (!Array.isArray(post.quizOptions) || post.quizOptions.length !== 4) {
    console.error(`\n❌ [QUIZ INCOMPLETO] Post ${pId} possui ${post.quizOptions?.length || 0} opções (obrigatório: exatamente 4 opções).`);
    totalErrors++;
    return;
  }

  const correctOptions = post.quizOptions.filter(o => o.isCorrect);
  if (correctOptions.length !== 1) {
    console.error(`\n❌ [RESPOSTA CORRETA INVÁLIDA] Post ${pId} possui ${correctOptions.length} opções marcadas como corretas (obrigatório: exatamente 1).`);
    totalErrors++;
  }

  // 1.3 Contagem de posição da alternativa correta
  const correctIdx = post.quizOptions.findIndex(o => o.isCorrect);
  if (correctIdx >= 0 && correctIdx < 4) {
    const letter = String.fromCharCode(65 + correctIdx);
    correctPositionsCount[letter]++;
  }

  // 1.4 Verificação de feedbacks pedagógicos em todas as opções
  post.quizOptions.forEach((opt, optIdx) => {
    checkTextForJargons(pId, `quizOptions[${optIdx}].text`, opt.text);
    checkTextForJargons(pId, `quizOptions[${optIdx}].feedback`, opt.feedback);

    if (!opt.feedback || opt.feedback.trim().length < 10) {
      console.error(`\n❌ [FEEDBACK AUSENTE/CURTO] Post ${pId}, opção ${optIdx} não possui feedback pedagógico adequado.`);
      totalErrors++;
    }
  });
});

// 1.5 Auditoria de Vício de Posição (Equilíbrio Editorial)
const totalQuizzes = posts.length;
console.log("\n📊 Distribuição da alternativa correta no calendário oficial:");
Object.entries(correctPositionsCount).forEach(([letter, count]) => {
  const pct = ((count / totalQuizzes) * 100).toFixed(1);
  console.log(`   - Alternativa ${letter}: ${count} quizzes (${pct}%)`);
  if (count / totalQuizzes > 0.45) {
    console.error(`\n❌ [VÍCIO DE POSIÇÃO NO QUIZ] A Alternativa ${letter} concentra ${pct}% das respostas corretas (> 45% do total).`);
    console.error(`   É obrigatória a distribuição aleatória e equilibrada entre A, B, C e D.`);
    totalErrors++;
  }
});

// =========================================================================
// 2. AUDITORIA DOS CARDS DE FEED (src/components/)
// =========================================================================
const FEED_CARD_FILES = [
  "src/components/ScheduledFeedCard.tsx",
  "src/components/DrFrancoQuizCard.tsx",
  "src/components/DraIsabellaQuizCard.tsx",
  "src/components/DrIsabellaCard.tsx",
  "src/components/NetfitsEducationalCard.tsx",
  "src/components/MizunoArticleFeedCard.tsx",
  "src/components/RetailMediaVideoShowcase.tsx",
];

const FORBIDDEN_QUIZ_HEADERS = [
  "DESAFIO FIBIOS & NETFITS",
  "Desafio de Bem-Estar",
  "Desafio Técnico Mizuno",
  "Desafio Técnico Patrocinado",
];

console.log("\n🔍 Auditando cabeçalho padronizado do Quiz nos componentes React...");

FEED_CARD_FILES.forEach(relPath => {
  const fullPath = path.resolve(process.cwd(), relPath);
  if (!fs.existsSync(fullPath)) return;

  const content = fs.readFileSync(fullPath, "utf-8");

  // 2.1 Verifica se usa nomes legados proibidos
  for (const forbidden of FORBIDDEN_QUIZ_HEADERS) {
    if (content.includes(forbidden)) {
      console.error(`\n❌ [NOME LEGADO DE QUIZ DETECTADO] em ${relPath}:`);
      console.error(`   Encontrado: "${forbidden}"`);
      console.error(`   Padrão único obrigatório: "QUIZZ NETFITS"`);
      totalErrors++;
    }
  }

  // 2.2 Garante que o card contém o cabeçalho canônico QUIZZ NETFITS
  if (!content.includes("QUIZZ NETFITS")) {
    console.error(`\n❌ [CABEÇALHO QUIZZ NETFITS AUSENTE] em ${relPath}. O card deve conter "QUIZZ NETFITS".`);
    totalErrors++;
  }
});

// =========================================================================
// 3. RESULTADO DA AUDITORIA
// =========================================================================
console.log("\n-------------------------------------------------------");
if (totalErrors > 0) {
  console.error(`❌ CHECKER EDITORIAL FALHOU: ${totalErrors} violações detectadas.`);
  console.error(`   Corrija as inconsistências editoriais antes de prosseguir com o build.`);
  console.log("=======================================================\n");
  process.exit(1);
} else {
  console.log(`✅ CHECKER EDITORIAL APROVADO: 100% aderente ao padrão QUIZZ NETFITS, sem jargões corporativos e com opções balanceadas.`);
  console.log("=======================================================\n");
  process.exit(0);
}
