/**
 * Aplica a blindagem definitiva em src/server/sync-handlers.ts e src/routes/auth.tsx
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. Atualizar src/server/sync-handlers.ts
const syncHandlersPath = path.join(rootDir, 'src', 'server', 'sync-handlers.ts');
let syncContent = fs.readFileSync(syncHandlersPath, 'utf8');

// Identifica o bloco do POST /api/users-sync
const oldPostStart = `    if (req.method === "POST") {
      try {
        const body = await req.json();
        const incomingUsers = Array.isArray(body?.users)
          ? body.users
          : body?.user
          ? [body.user]
          : [];

        const userMap = new Map<string, any>();`;

const newPostStart = `    if (req.method === "POST") {
      try {
        const body = await req.json();
        const incomingUsers = Array.isArray(body?.users)
          ? body.users
          : body?.user
          ? [body.user]
          : [];

        // 1. BLINDAGEM DISTRIBUÍDA: Sempre recarrega o estado mais recente da nuvem (Gist)
        // para evitar trabalhar sobre instâncias frias (cold starts) com memória defasada.
        try {
          const freshCloud = await fetchPersistentUsersAndTransactionsFromCloud();
          if (freshCloud && Array.isArray(freshCloud.users) && freshCloud.users.length > 0) {
            const baseMap = new Map<string, any>();
            for (const u of freshCloud.users) {
              if (u && u.id) baseMap.set(u.id, u);
            }
            for (const u of serverState.users) {
              if (u && u.id && !baseMap.has(u.id)) {
                baseMap.set(u.id, u);
              }
            }
            serverState.users = Array.from(baseMap.values());

            if (Array.isArray(freshCloud.transactions) && freshCloud.transactions.length > 0) {
              const baseTxMap = new Map<string, any>();
              for (const tx of freshCloud.transactions) {
                if (tx && tx.id) baseTxMap.set(tx.id, tx);
              }
              for (const tx of serverState.transactions) {
                if (tx && tx.id && !baseTxMap.has(tx.id)) {
                  baseTxMap.set(tx.id, tx);
                }
              }
              serverState.transactions = Array.from(baseTxMap.values());
            }
          }
        } catch (cloudErr) {
          console.warn("[users-sync] Aviso ao atualizar dados prévios da nuvem:", cloudErr);
        }

        const userMap = new Map<string, any>();`;

// Normalizar CRLF para LF para substituição confiável
const isCrlf = syncContent.includes('\r\n');
let normSyncContent = syncContent.replace(/\r\n/g, '\n');

if (normSyncContent.includes(oldPostStart.replace(/\r\n/g, '\n'))) {
  normSyncContent = normSyncContent.replace(oldPostStart.replace(/\r\n/g, '\n'), newPostStart.replace(/\r\n/g, '\n'));
  console.log('✅ Sincronização prévia de cloud adicionada em sync-handlers.ts');
} else {
  console.warn('⚠️ Bloco oldPostStart não localizado exatamente em sync-handlers.ts');
}

// Bloco de atomicidade MGM server-side antes de salvar
const oldSaveBlock = `        serverState.users = Array.from(userMap.values());
        serverState.touchSync();

        // Sincroniza imediatamente com a nuvem permanente (Gist Engine) de forma garantida antes da resposta HTTP
        try {
          await syncUsersAndTransactionsToCloud(serverState.users, serverState.transactions);
        } catch (err) {
          console.warn("[users-sync] CloudSync Warning:", err);
        }`;

const newSaveBlock = `        // 2. ATOMICIDADE MGM SERVER-SIDE: Creditar o padrinho no servidor central
        for (const rawUser of incomingUsers) {
          if (rawUser && (rawUser.referredBy || rawUser.referralCodeUsed)) {
            const refCode = String(rawUser.referredBy || rawUser.referralCodeUsed).trim().toUpperCase();
            const referrer = Array.from(userMap.values()).find(
              (u: any) => u.referralCode && u.referralCode.trim().toUpperCase() === refCode
            );
            if (referrer) {
              const alreadyCredited = serverState.transactions.some(
                (t: any) =>
                  t.userId === referrer.id &&
                  t.category === "referral" &&
                  t.description &&
                  t.description.includes(rawUser.fullName || rawUser.email || rawUser.id)
              );
              if (!alreadyCredited) {
                const referralBonus = 50;
                referrer.nfsBalance = (referrer.nfsBalance || 0) + referralBonus;
                userMap.set(referrer.id, referrer);
                const refTx = {
                  id: \`tx-referral-\${Date.now()}-\${referrer.id}\`,
                  userId: referrer.id,
                  userName: referrer.fullName || "Padrinho Netfits",
                  amount: referralBonus,
                  description: \`Bônus por Indicar Novo Usuário (\${rawUser.fullName || "Novo Membro"}) — MGM Oficial\`,
                  category: "referral",
                  timestamp: new Date().toISOString(),
                };
                serverState.transactions.unshift(refTx);
                console.log(\`[MGM Backend] +\${referralBonus} nfs creditados para \${referrer.fullName} pela indicação de \${rawUser.fullName}\`);
              }
            }
          }
        }

        serverState.users = Array.from(userMap.values());
        serverState.touchSync();

        // 3. PERSISTÊNCIA GARANTIDA NO GIST ANTES DA RESPOSTA HTTP
        try {
          await syncUsersAndTransactionsToCloud(serverState.users, serverState.transactions);
        } catch (err) {
          console.warn("[users-sync] CloudSync Warning:", err);
        }`;

if (normSyncContent.includes(oldSaveBlock.replace(/\r\n/g, '\n'))) {
  normSyncContent = normSyncContent.replace(oldSaveBlock.replace(/\r\n/g, '\n'), newSaveBlock.replace(/\r\n/g, '\n'));
  console.log('✅ Atomicidade MGM server-side adicionada em sync-handlers.ts');
} else {
  console.warn('⚠️ Bloco oldSaveBlock não localizado exatamente em sync-handlers.ts');
}

fs.writeFileSync(syncHandlersPath, isCrlf ? normSyncContent.replace(/\n/g, '\r\n') : normSyncContent, 'utf8');

// 2. Atualizar src/routes/auth.tsx para garantir await e envio de welcome transaction
const authPath = path.join(rootDir, 'src', 'routes', 'auth.tsx');
let authContent = fs.readFileSync(authPath, 'utf8');
const isAuthCrlf = authContent.includes('\r\n');
let normAuthContent = authContent.replace(/\r\n/g, '\n');

const oldAuthSync = `      // Sincronização imediata garantida do novo usuário no servidor de produção
      fetch("/api/users-sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: res.user }),
      }).catch((err) => console.warn("[Register Cloud Sync Warning]", err));
    }

    // Disparo imediato do E-mail Oficial de Boas-Vindas (+50 nfs) via Resend com dados reais
    const recipientEmail = (res.user?.email || email).trim();
    const recipientName = (res.user?.fullName || fullName).trim();
    dispatchWelcomeEmailSafe(recipientEmail, recipientName, {
      bonusCadastroNfs: res.user?.nfsBalance ?? 50,
      saldoConsolidadoNfs: res.user?.nfsBalance ?? 50,
      referralCode: res.user?.referralCode || "",
      referralLink: res.user?.referralCode
        ? \`https://www.netfits.com.br/cadastro?ref=\${res.user.referralCode}\`
        : "https://www.netfits.com.br",
    });

    toast.success("🚀 Cadastro efetuado com sucesso! Bem-vindo ao Netfits.");
    badgesStore.evaluate(res.user);
    appLockStore.setUnlocked(true);
    navigate({ to: "/feed" });`;

const newAuthSync = `      // Sincronização atômica OBRIGATÓRIA antes de qualquer navegação
      try {
        const welcomeTx = sharedSandboxStore.getTransactions().find(t => t.userId === res.user?.id && t.category === "welcome");
        await fetch("/api/users-sync", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          keepalive: true,
          body: JSON.stringify({ 
            user: res.user,
            transactions: welcomeTx ? [welcomeTx] : []
          }),
        });
      } catch (err) {
        console.warn("[Register Cloud Sync Warning]", err);
      }
    }

    // Disparo do E-mail Oficial de Boas-Vindas (+50 nfs) via Resend APÓS persistência
    const recipientEmail = (res.user?.email || email).trim();
    const recipientName = (res.user?.fullName || fullName).trim();
    dispatchWelcomeEmailSafe(recipientEmail, recipientName, {
      bonusCadastroNfs: res.user?.nfsBalance ?? 50,
      saldoConsolidadoNfs: res.user?.nfsBalance ?? 50,
      referralCode: res.user?.referralCode || "",
      referralLink: res.user?.referralCode
        ? \`https://www.netfits.com.br/cadastro?ref=\${res.user.referralCode}\`
        : "https://www.netfits.com.br",
    });

    toast.success("🚀 Cadastro efetuado com sucesso! Bem-vindo ao Netfits.");
    badgesStore.evaluate(res.user);
    appLockStore.setUnlocked(true);
    navigate({ to: "/feed" });`;

if (normAuthContent.includes(oldAuthSync.replace(/\r\n/g, '\n'))) {
  normAuthContent = normAuthContent.replace(oldAuthSync.replace(/\r\n/g, '\n'), newAuthSync.replace(/\r\n/g, '\n'));
  console.log('✅ Await obrigatório, keepalive e welcomeTx adicionados em auth.tsx');
} else {
  console.warn('⚠️ Bloco oldAuthSync não localizado exatamente em auth.tsx');
}

fs.writeFileSync(authPath, isAuthCrlf ? normAuthContent.replace(/\n/g, '\r\n') : normAuthContent, 'utf8');

// 3. Atualizar src/lib/shared-sandbox-store.ts para keepalive no syncToCloud
const storePath = path.join(rootDir, 'src', 'lib', 'shared-sandbox-store.ts');
let storeContent = fs.readFileSync(storePath, 'utf8');
const isStoreCrlf = storeContent.includes('\r\n');
let normStoreContent = storeContent.replace(/\r\n/g, '\n');

const oldFetchSync = `      await fetch("/api/users-sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });`;

const newFetchSync = `      await fetch("/api/users-sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        body: JSON.stringify(payload),
      });`;

if (normStoreContent.includes(oldFetchSync.replace(/\r\n/g, '\n'))) {
  normStoreContent = normStoreContent.replace(oldFetchSync.replace(/\r\n/g, '\n'), newFetchSync.replace(/\r\n/g, '\n'));
  console.log('✅ keepalive: true adicionado em shared-sandbox-store.ts');
}

fs.writeFileSync(storePath, isStoreCrlf ? normStoreContent.replace(/\n/g, '\r\n') : normStoreContent, 'utf8');

console.log('\n🏁 Blindagem definitiva do backend e client-side concluída com sucesso!');
