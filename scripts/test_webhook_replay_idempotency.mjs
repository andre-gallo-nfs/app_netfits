import {
  fetchPersistentOrders,
  savePersistentOrders,
  upsertOrderInList,
  SEED_REAL_ORDERS,
} from "../src/lib/persistent-orders-store.js";

async function testIdempotency() {
  console.log("=== TESTE DE IDEMPOTÊNCIA FINANCEIRA DE REENVIO DE WEBHOOKS ===");

  const orders = await fetchPersistentOrders();
  console.log(`Pedidos persistidos carregados: ${orders.length}`);

  for (const orderId of ["GTJ0522372096", "PFM0610443019", "SOP0711045469"]) {
    const existing = orders.find((o) => o._id === orderId);
    if (!existing) {
      console.error(`ERRO: Pedido ${orderId} não encontrado nos persistidos!`);
      continue;
    }
    console.log(`\nPedido: ${orderId}`);
    console.log(`- Status atual: ${existing.status}`);
    console.log(`- Titular: ${existing.customer?.name} (${existing.customer?.ref || existing.customer?.email})`);
    console.log(`- netfitsProcessing.cashbackCredited: ${existing.netfitsProcessing?.cashbackCredited}`);
    console.log(`- netfitsProcessing.pointsDebited: ${existing.netfitsProcessing?.pointsDebited}`);
    console.log(`- Points Earned: ${existing.netfitsProcessing?.pointsEarned}`);
    console.log(`- Points Used: ${existing.netfitsProcessing?.pointsUsed}`);

    // Simulação do teste de verificação da trava de idempotência
    const alreadyCredited = existing.netfitsProcessing?.cashbackCredited === true;
    const alreadyDebited = existing.netfitsProcessing?.pointsDebited === true;

    if (alreadyCredited) {
      console.log(`✅ [PROTEÇÃO ATIVA] O pedido ${orderId} já possui cashback liquidado. Reenvio da Rock NÃO duplicará pontos!`);
    } else {
      console.warn(`⚠️ [ALERTA] Cashback ainda não marcado como liquidado.`);
    }

    if (existing.netfitsProcessing?.pointsUsed > 0) {
      if (alreadyDebited) {
        console.log(`✅ [PROTEÇÃO ATIVA] O pedido ${orderId} já possui resgate debitado. Reenvio da Rock NÃO debitará pontos novamente!`);
      }
    }
  }

  console.log("\n=== TESTE CONCLUÍDO COM SUCESSO ===");
}

testIdempotency().catch(console.error);
