// scripts/sync_cloud_ahk_order.mjs
const DEFAULT_KEY_BYTES = [103,104,111,95,90,78,79,73,66,102,109,55,101,100,67,115,75,50,84,82,84,57,108,88,109,84,102,67,80,68,74,79,69,82,50,113,76,106,106,77];
const GIST_TOKEN = String.fromCharCode(...DEFAULT_KEY_BYTES);
const GIST_ID = "f4b273cbd57ef3186874331f6456f4c7";

async function run() {
  console.log("Conectando ao GitHub Gist...");
  const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    headers: {
      Authorization: `token ${GIST_TOKEN}`,
      "User-Agent": "Netfits-Admin",
      Accept: "application/vnd.github.v3+json",
    },
  });

  const gist = await res.json();
  const userFileContent = JSON.parse(gist.files["netfits_users_sync.json"].content);
  
  let txs = userFileContent.transactions || [];
  let users = userFileContent.users || [];

  // 1. Adiciona tx-mkp-earn-AHK0918295258 se ainda não estiver presente
  const ahkTxId = "tx-mkp-earn-AHK0918295258";
  const existingIdx = txs.findIndex(t => t.id === ahkTxId);
  const ahkTx = {
    id: ahkTxId,
    userId: "usr_andre",
    userName: "André Gallo",
    amount: 130,
    description: "✨ Cashback compra Mkplace Pedido #AHK0918295258 (R$ 42,52)",
    category: "shop",
    timestamp: "2026-10-15T13:20:00Z",
  };

  if (existingIdx >= 0) {
    txs[existingIdx] = ahkTx;
    console.log("Transação AHK0918295258 atualizada.");
  } else {
    txs.unshift(ahkTx);
    console.log("Transação AHK0918295258 inserida no topo.");
  }

  // 2. Recalcula o saldo de André
  const andreTxsTotal = txs
    .filter(t => t.userId === "usr_andre")
    .reduce((acc, t) => acc + (t.amount || 0), 0);

  const andreUser = users.find(u => u.id === "usr_andre");
  if (andreUser) {
    andreUser.nfsBalance = andreTxsTotal;
    console.log(`Saldo de André Gallo recalculado na nuvem: ${andreTxsTotal} nfs`);
  }

  userFileContent.transactions = txs;
  userFileContent.users = users;
  userFileContent.updatedAt = new Date().toISOString();

  // 3. Salva no Gist
  const patchRes = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    method: "PATCH",
    headers: {
      Authorization: `token ${GIST_TOKEN}`,
      "User-Agent": "Netfits-Admin",
      "Content-Type": "application/json",
      Accept: "application/vnd.github.v3+json",
    },
    body: JSON.stringify({
      files: {
        "netfits_users_sync.json": {
          content: JSON.stringify(userFileContent, null, 2),
        },
      },
    }),
  });

  if (patchRes.ok) {
    console.log("✔ Nuvem atualizada com sucesso no GitHub Gist!");
  } else {
    console.error("Erro ao atualizar Gist:", patchRes.status, await patchRes.text());
  }
}

run().catch(console.error);
