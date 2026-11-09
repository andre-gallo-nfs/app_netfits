#!/usr/bin/env node
/**
 * NETFITS — MULTI-AGENT GOVERNANCE BOARD & ORCHESTRATOR
 * 
 * Executa todos os agentes e guardiões da Netfits de forma segregada
 * (Maker-Checker-Gatekeeper), garantindo poder de veto individual
 * sobre integridade técnica, médica, mobile, editorial e de memória contínua.
 */

import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const AGENTS = [
  {
    id: "route-release",
    name: "Release & Routing Gatekeeper",
    icon: "🚀",
    description: "Audita arquivos de rotas, integridade de navegação e ausência de resquícios de Vercel",
    command: "node scripts/validate-routes.cjs"
  },
  {
    id: "brand-medical",
    name: "Brand, KV & CFM Compliance Gatekeeper",
    icon: "🩺",
    description: "Audita conformidade legal CFM (Dra. Isabella e Dr. Franco) e Design Tokens (Manifesto 3.0)",
    command: "node scripts/brand-medical-checker.mjs"
  },
  {
    id: "editorial-content",
    name: "Editorial & Content Quality Gatekeeper",
    icon: "📝",
    description: "Audita quizzes, ausência de jargões corporativos e padronização da Pílula de Sabedoria",
    command: "node scripts/editorial-content-checker.mjs"
  },
  {
    id: "mobile-runtime",
    name: "Mobile Cross-Platform & Runtime Gatekeeper",
    icon: "📱",
    description: "Audita paridade Android (Chromium/Intents) e iOS (WebKit), prevenindo telas pretas",
    command: "node scripts/mobile-platform-checker.mjs"
  },
  {
    id: "continuous-learning",
    name: "Continuous Learning & Institutional Brain",
    icon: "🧠",
    description: "Audita código contra todo o histórico de decisões e lições aprendidas memorizadas",
    command: "node scripts/knowledge-learning-agent.mjs --audit"
  },
  {
    id: "ledger-sentinel",
    name: "Real-Time Online Ledger Sentinel & Live Sync",
    icon: "🛡️",
    description: "Audita integridade contábil ao vivo (saldo == extrato) e parâmetros do Clube Netfits",
    command: "node scripts/audit_ledger_sentinel.cjs"
  },
  {
    id: "typescript-compiler",
    name: "TypeScript Architectural Integrity Gatekeeper",
    icon: "🔬",
    description: "Compilação estrita e verificação de tipagem completa de todo o ecossistema",
    command: "npx tsc --noEmit"
  },
  {
    id: "automated-runtime-tests",
    name: "Automated Runtime and Lifecycle Test Gatekeeper",
    icon: "🧪",
    description: "Executa a suíte de testes automatizados (Vitest: mobile lifecycle, biometria, headers, FEFO)",
    command: "npx vitest run"
  }
];

console.log("========================================================================");
console.log("🏛️ NETFITS MULTI-AGENT GOVERNANCE BOARD — ORCHESTRATION PIPELINE");
console.log("========================================================================");
console.log(`Iniciando auditoria sincronizada com ${AGENTS.length} agentes especializados...\n`);

const results = [];
let hasVeto = false;

for (let i = 0; i < AGENTS.length; i++) {
  const agent = AGENTS[i];
  const stepNumber = `[AGENT ${i + 1}/${AGENTS.length}]`;
  const startTime = Date.now();

  process.stdout.write(`${stepNumber} ${agent.icon} ${agent.name}... `);

  try {
    execSync(agent.command, {
      cwd: rootDir,
      stdio: "pipe",
      encoding: "utf-8"
    });
    const duration = Date.now() - startTime;
    console.log(`✅ APROVADO (${duration}ms)`);
    results.push({ ...agent, status: "PASS", duration });
  } catch (error) {
    const duration = Date.now() - startTime;
    console.log(`❌ VETO (${duration}ms)`);
    results.push({
      ...agent,
      status: "VETO",
      duration,
      errorOutput: error.stdout || error.stderr || error.message
    });
    hasVeto = true;
  }
}

console.log("\n------------------------------------------------------------------------");
console.log("📊 PAINEL DE GOVERNANÇA MULTIAGÊNTICA (RESUMO CONSOLIDADO)");
console.log("------------------------------------------------------------------------");

for (const res of results) {
  const statusStr = res.status === "PASS" ? "✅ APROVADO" : "🛑 VETADO";
  console.log(`${res.icon} ${res.name.padEnd(46, " ")} | ${statusStr} | ${res.duration}ms`);
}

console.log("------------------------------------------------------------------------");

if (hasVeto) {
  console.error("\n❌ ATENÇÃO: Um ou mais agentes emitiram VETO determinístico.");
  console.error("Consulte os detalhes abaixo para resolução imediata:\n");

  for (const res of results) {
    if (res.status === "VETO") {
      console.error(`========================================================================`);
      console.error(`🛑 DETALHES DO VETO: ${res.icon} ${res.name}`);
      console.error(`========================================================================`);
      console.error(res.errorOutput);
      console.error(`========================================================================\n`);
    }
  }

  process.exit(1);
} else {
  console.log(`\n🏆 GOVERNANÇA TOTAL APROVADA: ${AGENTS.length}/${AGENTS.length} Agentes validaram a integridade do ecossistema!`);
  console.log("   Plataforma 100% blindada contra regressões técnicas, médicas e de produto.\n");
  console.log("========================================================================");
  process.exit(0);
}
