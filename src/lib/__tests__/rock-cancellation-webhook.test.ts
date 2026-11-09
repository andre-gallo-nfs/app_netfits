import { describe, it, expect, beforeEach } from "vitest";
import { handleRockRoutes } from "../../server/rock-handlers.ts";
import { serverState } from "../../server/server-state.ts";

describe("Rock Encantech Webhook - Cancellation & Refund Flow", () => {
  const TEST_API_KEY = "sec_nfs_mkplace_default_2026";
  const TEST_USER_ID = "usr_cancel_test";

  beforeEach(() => {
    // Configura usuário de teste com saldo inicial de 1000 nfs
    serverState.users = [
      {
        id: TEST_USER_ID,
        fullName: "Atleta Cancelamento Teste",
        email: "atleta.cancel@netfits.com.br",
        cpf: "11122233344",
        nfsBalance: 1000,
        isClubMember: false,
      },
    ];
    serverState.transactions = [];
    serverState.receivedOrders = [];
  });

  it("deve processar o faturamento de um pedido e creditar cashback", async () => {
    const orderId = `ORD-EARN-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const payload = {
      _id: orderId,
      orderRef: orderId,
      type: "ORDER",
      status: "PAID",
      paymentStatus: "PAID",
      customer: {
        ref: TEST_USER_ID,
        name: "Atleta Cancelamento Teste",
        email: "atleta.cancel@netfits.com.br",
        document: "11122233344",
      },
      summary: {
        total: 100.0, // R$ 100 em produtos
        finalPrice: 100.0,
      },
      items: [
        {
          id: "item-1",
          name: "Camiseta Dry-Fit",
          finalPrice: 100.0,
          quantity: 1,
        },
      ],
    };

    const req = new Request("https://www.netfits.com.br/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": TEST_API_KEY,
      },
      body: JSON.stringify(payload),
    });

    const res = await handleRockRoutes(req, new URL(req.url), serverState.getCorsHeaders());
    expect(res).not.toBeNull();
    expect(res?.status).toBe(200);

    const user = serverState.users.find((u) => u.id === TEST_USER_ID);
    // R$ 100 * 4 nfs/R$ = 400 nfs de cashback
    expect(user?.nfsBalance).toBe(1400);

    const earnTx = serverState.transactions.find((t) => t.id === `tx-mkp-earn-${orderId}`);
    expect(earnTx).toBeDefined();
    expect(earnTx?.amount).toBe(400);
  });

  it("deve processar o webhook de cancelamento e estornar o cashback organicamente", async () => {
    const orderId = `ORD-CANCEL-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    // 1. Simula pedido faturado anteriormente
    const initialUser = serverState.users.find((u) => u.id === TEST_USER_ID)!;
    initialUser.nfsBalance = 1400; // já com 400 nfs de cashback
    serverState.transactions.push({
      id: `tx-mkp-earn-${orderId}`,
      userId: TEST_USER_ID,
      userName: initialUser.fullName,
      amount: 400,
      description: `✨ Cashback compra Mkplace Pedido #${orderId}`,
      category: "shop",
      timestamp: "2026-10-05T12:00:00Z",
    });

    // 2. Dispara webhook oficial da Rock notificando cancelamento (CANCELED)
    const cancelPayload = {
      _id: orderId,
      orderRef: orderId,
      type: "ORDER",
      status: "CANCELED",
      paymentStatus: "CANCELED",
      customer: {
        ref: TEST_USER_ID,
        name: "Atleta Cancelamento Teste",
        email: "atleta.cancel@netfits.com.br",
        document: "11122233344",
      },
      summary: {
        total: 100.0,
        finalPrice: 100.0,
      },
    };

    const req = new Request("https://www.netfits.com.br/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": TEST_API_KEY,
      },
      body: JSON.stringify(cancelPayload),
    });

    const res = await handleRockRoutes(req, new URL(req.url), serverState.getCorsHeaders());
    expect(res).not.toBeNull();
    expect(res?.status).toBe(200);

    // 3. Valida se o saldo retornou para 1000 nfs
    const updatedUser = serverState.users.find((u) => u.id === TEST_USER_ID);
    expect(updatedUser?.nfsBalance).toBe(1000);

    // 4. Valida se a transação de estorno foi inserida no livro-razão
    const refundTx = serverState.transactions.find((t) => t.id === `tx-mkp-cb-refund-${orderId}`);
    expect(refundTx).toBeDefined();
    expect(refundTx?.amount).toBe(-400);
    expect(refundTx?.description).toContain("Estorno de cashback");
  });

  it("não deve estornar em duplicidade se o webhook de cancelamento for reenviado (idempotência)", async () => {
    const orderId = `ORD-IDEMP-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const initialUser = serverState.users.find((u) => u.id === TEST_USER_ID)!;
    initialUser.nfsBalance = 1000;
    serverState.transactions.push({
      id: `tx-mkp-earn-${orderId}`,
      userId: TEST_USER_ID,
      userName: initialUser.fullName,
      amount: 400,
      description: `✨ Cashback compra Mkplace Pedido #${orderId}`,
      category: "shop",
      timestamp: "2026-10-05T12:00:00Z",
    });
    serverState.transactions.push({
      id: `tx-mkp-cb-refund-${orderId}`,
      userId: TEST_USER_ID,
      userName: initialUser.fullName,
      amount: -400,
      description: `↩️ Estorno de cashback - Pedido cancelado #${orderId}`,
      category: "shop",
      timestamp: "2026-11-09T18:00:00Z",
    });

    // Reenvio do cancelamento
    const cancelPayload = {
      _id: orderId,
      orderRef: orderId,
      status: "CANCELED",
      customer: { ref: TEST_USER_ID },
    };

    const req = new Request("https://www.netfits.com.br/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": TEST_API_KEY,
      },
      body: JSON.stringify(cancelPayload),
    });

    const res = await handleRockRoutes(req, new URL(req.url), serverState.getCorsHeaders());
    expect(res?.status).toBe(200);

    // Saldo não pode ter sido debitado novamente
    const user = serverState.users.find((u) => u.id === TEST_USER_ID);
    expect(user?.nfsBalance).toBe(1000);

    // Não pode haver mais de uma transação de estorno para o mesmo pedido
    const refunds = serverState.transactions.filter((t) => t.id === `tx-mkp-cb-refund-${orderId}`);
    expect(refunds.length).toBe(1);
  });
});
