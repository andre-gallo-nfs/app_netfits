/**
 * Registra formalmente a Lição LL-011 no LESSONS_LEARNED.json e no LESSONS_LEARNED.md
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const jsonPath = path.join(rootDir, 'src', 'lib', 'knowledge', 'LESSONS_LEARNED.json');
const mdPath = path.join(rootDir, 'src', 'lib', 'knowledge', 'LESSONS_LEARNED.md');

const lessons = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const newLesson = {
  id: "LL-011",
  title: "Atomicidade Transacional Distribuída e Proibição de Mutação de Carteira Client-Side",
  category: "architecture_ledger",
  severity: "CRITICAL",
  learnedAt: "2026-11-07",
  context: "Incidentes em produção de usuários cadastrados sem persistência no banco e padrinhos que não receberam bônus MGM (+50 nfs) ocorreram porque o navegador do novo membro tentava mutar o saldo do padrinho em seu localStorage local, e a sincronização com o banco era chamada sem await/keepalive antes de redirecionar a tela.",
  rule: "1) Toda bonificação de indicação (MGM) ou de boas-vindas DEVE ser processada de forma atômica no servidor central (/api/users-sync), NUNCA no navegador de outro usuário. 2) O envio de e-mails transacionais com promessa de pontos SÓ PODE ser disparado após confirmação atômica de gravação no banco de dados. 3) Qualquer sincronização de dados de cadastro deve usar await e keepalive: true para não ser cancelada por navegações de tela em dispositivos móveis.",
  antiPattern: [
    "referrer.nfsBalance +=",
    "referrer.nfsBalance = (referrer.nfsBalance",
    "fetch(\"/api/users-sync\", { method: \"POST\" }).catch"
  ],
  enforcedBy: "scripts/knowledge-learning-agent.mjs"
};

const exists = lessons.some(l => l.id === newLesson.id);
if (!exists) {
  lessons.push(newLesson);
  fs.writeFileSync(jsonPath, JSON.stringify(lessons, null, 2), 'utf8');
  console.log('✅ Lição LL-011 adicionada com sucesso ao LESSONS_LEARNED.json!');
} else {
  console.log('ℹ️ Lição LL-011 já existia em LESSONS_LEARNED.json.');
}

// Atualizar LESSONS_LEARNED.md
let mdContent = fs.readFileSync(mdPath, 'utf8');
if (!mdContent.includes('LL-011')) {
  const mdLessonBlock = `
---

### 🛡️ LIÇÃO LL-011: ATOMICIDADE TRANSACIONAL DISTRIBUÍDA & PROIBIÇÃO DE MUTAÇÃO CLIENT-SIDE
* **ID Canônico**: \`LL-011\`
* **Gravidade**: \`CRITICAL\` (Poder de Veto Imediato)
* **Origem**: Auditoria de Produção de 07/11/2026 — Reconciliação de Pontos e MGM
* **Contexto**: Incidentes em produção de usuários cadastrados sem persistência no banco e padrinhos que não receberam bônus MGM (+50 nfs) ocorreram porque o navegador do novo membro tentava mutar o saldo do padrinho em seu localStorage local, e a sincronização com o banco era chamada sem await/keepalive antes de redirecionar a tela.
* **Regras Inegociáveis**:
  1. **Proibição de Mutação de Terceiros no Client-Side**: É terminantemente proibido calcular ou somar pontos para qualquer outro usuário que não seja o usuário ativo daquela sessão no dispositivo local. Bonificações de padrinho (MGM) DEVEM ser processadas e creditadas exclusivamente no servidor central (\`/api/users-sync\`).
  2. **Persistência Antes do E-mail**: E-mails transacionais que comemoram créditos de pontos (boas-vindas, indicações) SÓ PODEM ser disparados após o banco de dados confirmar a gravação atômica da conta e da transação no ledger.
  3. **Transporte Resiliente (Keepalive & Await)**: Chamadas de sincronização de cadastro e transações na nuvem DEVEM utilizar \`await\` obrigatório e flag \`keepalive: true\` no \`fetch()\` para blindar contra cancelamentos abruptos por troca de página ou fechamento de abas móveis.
* **Anti-patterns Proibidos**: \`referrer.nfsBalance +=\`, chamadas de sync sem \`await\` antes de \`navigate()\`.
`;
  mdContent += mdLessonBlock;
  fs.writeFileSync(mdPath, mdContent, 'utf8');
  console.log('✅ Lição LL-011 documentada em LESSONS_LEARNED.md!');
}
