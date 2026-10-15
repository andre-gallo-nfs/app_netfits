import { sharedSandboxStore } from "../src/lib/shared-sandbox-store.ts";

const user = sharedSandboxStore.getUsers().find((u) => u.id === "usr_andre");
console.log("=== USUÁRIO ANDRÉ NO STORE LOCAL ===");
console.log("Nome:", user?.fullName);
console.log("Saldo no User:", user?.nfsBalance);

const txs = sharedSandboxStore.getUserTransactions("usr_andre");
console.log("Total de Transações encontradas:", txs.length);

let totalPoints = 0;
txs.forEach((t, i) => {
  totalPoints += t.amount || 0;
  console.log(`${i + 1}. [${t.category}] ${t.amount > 0 ? "+" : ""}${t.amount} nfs | ${t.description} (${t.id}) | ${t.timestamp}`);
});

console.log("Soma de todas as transações:", totalPoints, "nfs");

const badgeTx = txs.find((t) => t.id === "tx-badge-usr_andre-primeira_compra");
const ahkTx = txs.find((t) => t.id === "tx-mkp-earn-AHK0918295258");

import { formatFriendlyTx } from "../src/lib/wallet-store.ts";

console.log("\n--- TESTE DO BADGE 40 NFS ---");
console.log("Descrição:", badgeTx?.description);
if (badgeTx) {
  console.log("Formatado:", formatFriendlyTx(badgeTx));
}

console.log("\n--- TESTE DO PEDIDO EDINHO (AHK) ---");
console.log("Descrição:", ahkTx?.description);
console.log("Valor:", ahkTx?.amount);
if (ahkTx) {
  console.log("Formatado:", formatFriendlyTx(ahkTx));
}

