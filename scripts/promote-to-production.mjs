#!/usr/bin/env node
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
console.log("🚀 NETFITS — PROTOCOLO DE TOMBAMENTO: STAGING ➔ PRODUÇÃO");
console.log("=======================================================");

// 1. Verificar branch atual
const currentBranch = execSync("git rev-parse --abbrev-ref HEAD", { encoding: "utf-8" }).trim();
if (currentBranch !== "staging") {
  console.error(`\n❌ ERRO: Você está na branch '${currentBranch}'. O tombamento deve partir obrigatoriamente da branch 'staging'.`);
  process.exit(1);
}

// 2. Verificar se há alterações não comitadas
const statusOutput = execSync("git status --porcelain", { encoding: "utf-8" }).trim();
const trackedModified = statusOutput
  .split("\n")
  .map(l => l.trim())
  .filter(l => l && !l.startsWith("??")); // Ignora arquivos untracked de relatórios/docs se houver

if (trackedModified.length > 0) {
  console.error("\n❌ ERRO: Existem alterações rastreadas não comitadas na branch staging:");
  console.error(trackedModified.join("\n"));
  console.error("Por favor, comite ou descarte essas alterações antes de tombar para produção.");
  process.exit(1);
}

// 3. Rodar Quality Gate em Staging antes de qualquer ação
run("npm run validate", "Executando Quality Gate (Rotas e TypeScript)");
run("npm run build:prod", "Simulando build oficial de Produção");

// 4. Sincronizar staging com o repositório remoto
run("git push origin staging", "Garantindo que 'staging' remoto está atualizado");

// 5. Mudar para main e atualizar
run("git checkout main", "Alternando para a branch 'main' (Produção)");
run("git pull origin main --rebase || git pull origin main", "Atualizando 'main' com o repositório remoto");

// 6. Fazer o merge explícito de staging para main
run('git merge staging --no-ff -m "chore(release): tombar homologacao para producao [aprovado]"', "Mesclando staging em main (Merge Commit Oficial)");

// 7. Revalidar main com o build final
run("npm run validate", "Validando integridade pós-merge na branch main");

// 8. Publicar no GitHub (dispara deploy de produção)
run("git push origin main", "Publicando versão oficial de Produção no GitHub");

// 9. Voltar para a branch de trabalho (staging)
run("git checkout staging", "Retornando para a branch 'staging' (Segurança de Desenvolvimento)");

console.log("\n=======================================================");
console.log("✅ TOMBAMENTO CONCLUÍDO COM SUCESSO!");
console.log("1. A versão validada em Homologação foi promovida para Produção ('main').");
console.log("2. O deploy de Produção foi disparado automaticamente.");
console.log("3. Seu ambiente de trabalho já voltou para 'staging' com segurança.");
console.log("=======================================================\n");
