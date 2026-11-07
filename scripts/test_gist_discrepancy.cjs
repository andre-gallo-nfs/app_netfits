const path = require('path');
const rootDir = path.resolve(__dirname, '..');

async function testGist() {
  const { fetchPersistentUsersAndTransactionsFromCloud } = await import('../src/lib/persistent-orders-store.ts');
  const data = await fetchPersistentUsersAndTransactionsFromCloud();
  console.log('--- GIST DATA ---');
  if (!data) {
    console.log('No data from Gist');
    return;
  }
  console.log('Users count:', data.users.length);
  console.log('Transactions count:', data.transactions.length);

  for (const u of data.users) {
    const uTxs = data.transactions.filter(t => t.userId === u.id);
    const sum = uTxs.reduce((acc, t) => acc + (t.amount || 0), 0);
    const balance = Number(u.nfsBalance) || 0;
    if (balance !== sum) {
      console.log(`DISCREPANCY for ${u.fullName} (${u.email}): Balance=${balance}, TxSum=${sum}, Diff=${balance - sum}`);
    }
  }
}

testGist().catch(console.error);
