import serverHandler from "../src/server.js";

async function simulateAllWebhooksReplay() {
  console.log("=== SIMULAÇÃO COMPLETA DE REENVIO DE TODOS OS 3 PEDIDOS DA ROCK ===");

  const fetchUsers = async () => {
    const res = await serverHandler.fetch(new Request("https://www.netfits.com.br/api/sync/users-transactions"));
    const data = await res.json();
    return data.users;
  };

  const usersBefore = await fetchUsers();
  const getBalance = (users, id) => {
    const u = users.find((x) => x.id === id);
    return u ? u.nfsBalance : null;
  };

  const initialBalances = {
    andre: getBalance(usersBefore, "usr_andre"),
    carlos: getBalance(usersBefore, "usr_carlos_formigari"),
    cristiane: getBalance(usersBefore, "user-1791370530242"),
  };

  console.log("Saldos ANTES do Replay da Rock:", initialBalances);

  const payloads = [
    {
      _id: "GTJ0522372096",
      orderRef: "GTJ0522372096",
      type: "ORDER",
      status: "PAID",
      paymentStatus: "PAID",
      storeId: "RhOFkbZJIN",
      summary: { items: 1, total: 250, finalPrice: 270, points: { amount: 0, currencyAmount: 0 } },
      customer: { ref: "usr_andre", name: "André Gallo", email: "aacgallo@hotmail.com" }
    },
    {
      _id: "PFM0610443019",
      orderRef: "PFM0610443019",
      type: "ORDER",
      status: "PAID",
      paymentStatus: "PAID",
      storeId: "RhOFkbZJIN",
      summary: { items: 1, total: 180, finalPrice: 195, points: { amount: 0, currencyAmount: 0 } },
      customer: { ref: "usr_carlos_formigari", name: "Carlos Rodrigo Formigari", email: "crformigari72@gmail.com" }
    },
    {
      _id: "SOP0711045469",
      orderRef: "SOP0711045469",
      type: "ORDER",
      status: "PAID",
      paymentStatus: "PAID",
      storeId: "RhOFkbZJIN",
      summary: { items: 1, total: 109.9, finalPrice: 129.11, points: { amount: 50, currencyAmount: 0.5 } },
      customer: { ref: "user-1791370530242", name: "Cristiane Ferreira Formigari", email: "cristiane.formigari@amantikira.com.br", document: "11001624882" }
    }
  ];

  for (const payload of payloads) {
    const req = new Request("https://www.netfits.com.br/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "sec_nfs_mkplace_default_2026"
      },
      body: JSON.stringify(payload)
    });

    const res = await serverHandler.fetch(req);
    const data = await res.json();
    console.log(`Replay Pedido #${payload._id}: HTTP ${res.status} | Persisted: ${data.persisted}`);
  }

  const usersAfter = await fetchUsers();
  const finalBalances = {
    andre: getBalance(usersAfter, "usr_andre"),
    carlos: getBalance(usersAfter, "usr_carlos_formigari"),
    cristiane: getBalance(usersAfter, "user-1791370530242"),
  };

  console.log("\nSaldos DEPOIS do Replay da Rock:", finalBalances);

  let success = true;
  for (const key of ["andre", "carlos", "cristiane"]) {
    if (initialBalances[key] !== finalBalances[key]) {
      console.error(`❌ FALHA: O saldo de ${key} mudou de ${initialBalances[key]} para ${finalBalances[key]}!`);
      success = false;
    } else {
      console.log(`✅ [PROVA DE IMUNIDADE] Saldo de ${key} permaneceu exatamente ${finalBalances[key]} nfs (0 duplicações)!`);
    }
  }

  if (success) {
    console.log("\n🎉 TESTE DE REPLAY COMPLETO: IDEMPOTÊNCIA 100% GARANTIDA!");
  } else {
    process.exit(1);
  }
}

simulateAllWebhooksReplay().catch((err) => {
  console.error(err);
  process.exit(1);
});
