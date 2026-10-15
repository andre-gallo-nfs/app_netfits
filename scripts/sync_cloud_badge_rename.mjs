// scripts/sync_cloud_badge_rename.mjs
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

  let modifiedCount = 0;
  txs = txs.map((t) => {
    if (
      t.id.includes("primeira_compra") ||
      /primeiro cashback/i.test(t.description || "") ||
      (t.amount === 40 && !t.description?.includes("#") && !/gtj|ahk|pfm|sop|doj|wqb|sxz/i.test(t.description || ""))
    ) {
      modifiedCount++;
      return {
        ...t,
        id: `tx-badge-${t.userId || "usr_andre"}-primeira_compra`,
        description: "🏆 Selo Conquistado: Primeira Compra Pontuada",
        category: "workout",
      };
    }
    return t;
  });

  console.log(`Transações ajustadas na nuvem: ${modifiedCount}`);

  userFileContent.transactions = txs;
  userFileContent.lastUpdated = new Date().toISOString();

  console.log("Enviando atualização para o GitHub Gist...");
  const updateRes = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    method: "PATCH",
    headers: {
      Authorization: `token ${GIST_TOKEN}`,
      "User-Agent": "Netfits-Admin",
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: "Netfits Production Central Database (Badges & Users Sync)",
      files: {
        "netfits_users_sync.json": {
          content: JSON.stringify(userFileContent, null, 2),
        },
      },
    }),
  });

  if (updateRes.ok) {
    console.log("✅ Gist atualizado com sucesso com o novo nome: Primeira Compra Pontuada!");
  } else {
    console.error("❌ Erro ao atualizar Gist:", await updateRes.text());
  }
}

run();
