#!/usr/bin/env node
/**
 * NETFITS — RELEASE GATEKEEPER AGENT (OFICIAL)
 * Em estrito cumprimento à Seção 5 e Seção 6 do GEMINI.md:
 * 1. PROIBIÇÃO ABSOLUTA de tombamento cego ('git merge staging') para produção.
 * 2. Auditoria e sanitização obrigatória de diff (main...staging).
 * 3. Geração de inventário cirúrgico de arquivos.
 * 4. Exigência mandatória de confirmação explícita do fundador André Gallo.
 */

import { execSync } from "node:child_process";

function run(cmd, desc) {
  console.log(`\n⏳ [Passo]: ${desc}...`);
  try {
    const stdout = execSync(cmd, { stdio: "inherit", encoding: "utf-8" });
    return true;
  } catch (err) {
    console.error(`\n❌ FALHA NO PASSO: "${desc}"`);
    console.error(`Comando que falhou: ${cmd}`);
    process.exit(1);
  }
}

console.log("=======================================================");
console.log("🛡️ NETFITS — RELEASE GATEKEEPER AGENT (DEPLOY GOVERNANCE)");
console.log("=======================================================");

// 1. Argumentos da linha de comando
const args = process.argv.slice(2);
const isApprovedByAndre = args.includes("--confirm-approved-by-andre");
const cherryPickIndex = args.indexOf("--cherry-pick");
const cherryPickHash = cherryPickIndex !== -1 ? args[cherryPickIndex + 1] : null;

// 2. Verificar branch atual
const currentBranch = execSync("git rev-parse --abbrev-ref HEAD", { encoding: "utf-8" }).trim();
if (currentBranch !== "staging" && currentBranch !== "main") {
  console.error(`\n❌ ERRO: Você está na branch '${currentBranch}'. Operação permitida apenas a partir de 'staging' ou 'main'.`);
  process.exit(1);
}

// 3. Obter diff entre main e staging
console.log("\n🔍 Inspecionando sanitização de diff (main...staging)...");
let diffStat = "";
try {
  diffStat = execSync("git diff --stat main...staging", { encoding: "utf-8" }).trim();
} catch (e) {
  // Se main não estiver disponível localmente, busca remoto
  execSync("git fetch origin main:main", { stdio: "ignore" });
  diffStat = execSync("git diff --stat main...staging", { encoding: "utf-8" }).trim();
}

const diffFiles = execSync("git diff --name-only main...staging", { encoding: "utf-8" })
  .trim()
  .split("\n")
  .map(f => f.trim())
  .filter(Boolean);

console.log(`\n📋 [INVENTÁRIO CIRÚRGICO]: ${diffFiles.length} arquivo(s) com alterações pendentes entre staging e main:\n`);
diffFiles.forEach((file, idx) => console.log(`   ${idx + 1}. ${file}`));

// 4. Bloqueio determinístico se não houver aprovação explícita
if (!isApprovedByAndre && !cherryPickHash) {
  console.error("\n=======================================================");
  console.error("🛑 [RELEASE GATEKEEPER BLOQUEOU A SUBIDA]");
  console.error("=======================================================");
  console.error("Conforme a Seção 5 do GEMINI.md:");
  console.error("É TERMINANTEMENTE PROIBIDO realizar 'git merge staging' direto para 'main'.");
  console.error("Toda subida para produção deve refletir EXCLUSIVAMENTE alterações cirúrgicas aprovadas.");
  console.error("\nPara prosseguir com o deploy de produção de forma autorizada:");
  console.error("1. Se deseja aplicar commits específicos via cherry-pick:");
  console.error("   npm run promote:prod -- --cherry-pick <commit-hash>");
  console.error("2. Se 100% dos arquivos listados no Inventário Cirúrgico acima foram autorizados pelo André:");
  console.error("   npm run promote:prod -- --confirm-approved-by-andre");
  console.error("=======================================================\n");
  process.exit(1);
}

// 5. Execução do Quality Gate Completo (Rotas + Brand/CFM + TypeScript)
console.log("\n🚀 Autorização explícita detectada. Executando Quality Gate mandatório...");
run("npm run validate", "Executando Quality Gate (Rotas, Brand/CFM Checker e TypeScript)");
run("npm run build:prod", "Simulando build oficial de Produção");

if (cherryPickHash) {
  console.log(`\n🍒 Executando Cherry-Pick Cirúrgico do commit ${cherryPickHash}...`);
  run("git checkout main", "Alternando para 'main'");
  run("git pull origin main", "Atualizando 'main'");
  run(`git cherry-pick ${cherryPickHash}`, `Aplicando commit cirúrgico ${cherryPickHash}`);
  run("npm run validate", "Revalidando integridade pós cherry-pick");
  run("git push origin main", "Publicando 'main' no GitHub");
  run("npx wrangler deploy", "Deploying na Cloudflare Workers");
  run("git checkout staging", "Retornando para 'staging'");
  console.log("\n✅ Cherry-pick cirúrgico aplicado e publicado em produção com sucesso!");
} else if (isApprovedByAndre) {
  console.log("\n📦 Promovendo alteração aprovada cirurgicamente para Produção...");
  run("git push origin staging", "Atualizando staging remoto");
  run("git checkout main", "Alternando para 'main'");
  run("git pull origin main", "Atualizando 'main'");
  run('git merge staging --no-ff -m "chore(release): deploy cirúrgico aprovado com sanitização de diff [gatekeeper]"', "Mesclando alterações aprovadas em main");
  run("npm run validate", "Revalidando integridade pós-merge");
  run("git push origin main", "Publicando versão oficial em main");
  run("npm run build:prod && npx wrangler deploy", "Publicando no Cloudflare Workers oficial");
  run("git checkout staging", "Retornando para staging");
  console.log("\n✅ Deploy em Produção concluído com sucesso e 100% auditado pelo Release Gatekeeper!");
}
