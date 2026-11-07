/**
 * Atualiza shared-sandbox-store.ts e sync-handlers.ts para centralizar o MGM no servidor
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. Atualizar shared-sandbox-store.ts
const storePath = path.join(rootDir, 'src', 'lib', 'shared-sandbox-store.ts');
let storeContent = fs.readFileSync(storePath, 'utf8');
const isStoreCrlf = storeContent.includes('\r\n');
let normStore = storeContent.replace(/\r\n/g, '\n');

const oldReferrerBlock = `    // Se houve indicação válida, creditar o indicador (+50 nfs / normalUserNewReferralBonusNfs)
    if (referrer) {
      const referralBonus = operationalParamsStore.getParams().normalUserNewReferralBonusNfs ?? 50;
      referrer.nfsBalance += referralBonus;
      const refTxId = \`tx-\${Date.now()}-referrer\`;
      this.state.transactions.unshift({
        id: refTxId,
        userId: referrer.id,
        userName: referrer.fullName,
        amount: referralBonus,
        description: \`Bônus por Indicar Novo Usuário (\${newUser.fullName})\`,
        category: "referral",
        timestamp: new Date().toISOString(),
      });

      if (referrer.email && referrer.email.includes("@")) {
        dispatchReferralCompletedEmailSafe(referrer.email, {
          nomeUsuario: referrer.fullName,
          nomeAmigoIndicado: newUser.fullName,
          pontosCreditados: referralBonus,
          saldoAtual: referrer.nfsBalance,
          referralCode: referrer.referralCode,
          referralLink: \`https://www.netfits.com.br/cadastro?ref=\${referrer.referralCode}\`,
        }).catch((err) => console.warn("[registerAthlete] Falha ao notificar indicação:", err));
      }
    }`;

const newReferrerBlock = `    // Se houve indicação válida, registrar vínculo oficial (o crédito atômico e notificação do padrinho são geridos pelo servidor central)
    if (referrer) {
      console.log(\`[registerAthlete] Indicação vinculada: \${newUser.fullName} indicado por \${referrer.fullName} (\${referrer.referralCode})\`);
    }`;

if (normStore.includes(oldReferrerBlock)) {
  normStore = normStore.replace(oldReferrerBlock, newReferrerBlock);
  console.log('✅ Mutação client-side de referrer.nfsBalance removida de shared-sandbox-store.ts');
} else {
  console.warn('⚠️ Bloco oldReferrerBlock não localizado em shared-sandbox-store.ts');
}

fs.writeFileSync(storePath, isStoreCrlf ? normStore.replace(/\n/g, '\r\n') : normStore, 'utf8');

// 2. Atualizar sync-handlers.ts para disparar o e-mail do padrinho do backend
const syncPath = path.join(rootDir, 'src', 'server', 'sync-handlers.ts');
let syncContent = fs.readFileSync(syncPath, 'utf8');
const isSyncCrlf = syncContent.includes('\r\n');
let normSync = syncContent.replace(/\r\n/g, '\n');

if (!normSync.includes('sendReferralCompletedEmail')) {
  normSync = normSync.replace(
    'import { findUserByAnyIdentifier } from "./user-resolver.ts";',
    'import { findUserByAnyIdentifier } from "./user-resolver.ts";\nimport { sendReferralCompletedEmail } from "../lib/emails/email-service.ts";'
  );
}

const oldBackendMgmLog = `console.log(\`[MGM Backend] +\${referralBonus} nfs creditados para \${referrer.fullName} pela indicação de \${rawUser.fullName}\`);`;
const newBackendMgmLog = `console.log(\`[MGM Backend] +\${referralBonus} nfs creditados para \${referrer.fullName} pela indicação de \${rawUser.fullName}\`);
                if (referrer.email && referrer.email.includes("@")) {
                  sendReferralCompletedEmail({
                    to: referrer.email,
                    nomeUsuario: referrer.fullName,
                    nomeAmigoIndicado: rawUser.fullName || "Novo Atleta",
                    pontosCreditados: referralBonus,
                    saldoAtual: referrer.nfsBalance,
                    referralCode: referrer.referralCode,
                    referralLink: \`https://www.netfits.com.br/cadastro?ref=\${referrer.referralCode}\`,
                  }).catch((emailErr: any) => console.warn("[MGM Email] Aviso ao enviar e-mail de indicação:", emailErr));
                }`;

if (normSync.includes(oldBackendMgmLog) && !normSync.includes('sendReferralCompletedEmail({')) {
  normSync = normSync.replace(oldBackendMgmLog, newBackendMgmLog);
  console.log('✅ Disparo seguro de e-mail de indicação via backend adicionado em sync-handlers.ts');
}

fs.writeFileSync(syncPath, isSyncCrlf ? normSync.replace(/\n/g, '\r\n') : normSync, 'utf8');
console.log('🏁 Centralização e atomicidade finalizadas!');
