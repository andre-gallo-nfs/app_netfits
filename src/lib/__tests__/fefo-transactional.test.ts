import { describe, it, expect, beforeEach } from "vitest";
import { executeDebitPointsFEFO } from "../fefo-service.ts";
import { serverState } from "../../server/server-state.ts";

describe("FEFO Transactional Service (executeDebitPointsFEFO)", () => {
  beforeEach(() => {
    // Reset serverState users to known state
    serverState.users = [
      {
        id: "usr_athlete_fefo_test",
        email: "athlete.fefo@netfits.com.br",
        cpf: "11122233344",
        fullName: "Atleta FEFO Teste",
        nfsBalance: 500,
        userCategory: "atleta",
      },
    ];
    serverState.transactions = [];
  });

  it("deve debitar pontos com sucesso quando o saldo for suficiente", async () => {
    const res = await executeDebitPointsFEFO({
      userId: "usr_athlete_fefo_test",
      amount: 150,
      title: "Resgate Vale-Compras Netfits",
      orderId: "ORD-99988",
    });

    expect(res.success).toBe(true);
    expect(res.debitedAmount).toBe(150);
    expect(res.newBalance).toBe(350);
    expect(res.transactionId).toBeDefined();

    // Verifica se a transação foi registrada no ledger
    const tx = serverState.transactions.find((t) => t.amount === -150);
    expect(tx).toBeDefined();
    expect(tx?.description).toBe("Resgate Vale-Compras Netfits");

    // Verifica saldo do usuário atualizado
    const user = serverState.users.find((u) => u.id === "usr_athlete_fefo_test");
    expect(user?.nfsBalance).toBe(350);
  });

  it("deve rejeitar débito quando o saldo for insuficiente", async () => {
    await expect(
      executeDebitPointsFEFO({
        userId: "usr_athlete_fefo_test",
        amount: 800,
        title: "Tentativa de resgate acima do saldo",
      })
    ).rejects.toThrow(/Saldo insuficiente/i);

    // Saldo deve permanecer inalterado
    const user = serverState.users.find((u) => u.id === "usr_athlete_fefo_test");
    expect(user?.nfsBalance).toBe(500);
  });

  it("deve rejeitar valores de débito inválidos (zero ou negativos)", async () => {
    await expect(
      executeDebitPointsFEFO({
        userId: "usr_athlete_fefo_test",
        amount: 0,
        title: "Débito zerado",
      })
    ).rejects.toThrow(/Valor de débito inválido/i);

    await expect(
      executeDebitPointsFEFO({
        userId: "usr_athlete_fefo_test",
        amount: -50,
        title: "Débito negativo",
      })
    ).rejects.toThrow(/Valor de débito inválido/i);
  });

  it("deve rejeitar requisição sem userId válido", async () => {
    await expect(
      executeDebitPointsFEFO({
        userId: "",
        amount: 50,
        title: "Sem ID",
      })
    ).rejects.toThrow(/Parâmetro 'userId' inválido/i);
  });
});
