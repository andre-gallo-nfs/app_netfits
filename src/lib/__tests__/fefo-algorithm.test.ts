import { describe, it, expect } from "vitest";
import { deductPointsFEFO, type PointBatch } from "@/lib/operational-params-store";

describe("Algoritmo FEFO (First-Expiring, First-Out) de Consumo de Pontos", () => {
  it("deve ordenar e consumir prioritariamente o lote mais próximo da expiração", () => {
    const batches: PointBatch[] = [
      {
        id: "batch-newer-180d",
        source: "Cashback Shop",
        amount: 500,
        earnedDate: "2026-06-01",
        expirationDate: "2026-12-01",
        daysRemaining: 180,
      },
      {
        id: "batch-expiring-first-15d",
        source: "Campanha Boas-Vindas",
        amount: 200,
        earnedDate: "2024-10-15",
        expirationDate: "2026-10-31",
        daysRemaining: 15,
      },
      {
        id: "batch-medium-60d",
        source: "Indicação Amigo",
        amount: 300,
        earnedDate: "2025-12-01",
        expirationDate: "2026-12-15",
        daysRemaining: 60,
      },
    ];

    // Dedução de 350 pontos:
    // Deve consumir 200 do batch-expiring-first-15d (esgota)
    // Deve consumir 150 do batch-medium-60d (sobram 150)
    // batch-newer-180d não deve ser tocado (permanece 500)
    const { updatedBatches, deductedLog } = deductPointsFEFO(batches, 350);

    expect(deductedLog).toHaveLength(2);
    expect(deductedLog[0]).toEqual({
      batchId: "batch-expiring-first-15d",
      source: "Campanha Boas-Vindas",
      amountDeducted: 200,
    });
    expect(deductedLog[1]).toEqual({
      batchId: "batch-medium-60d",
      source: "Indicação Amigo",
      amountDeducted: 150,
    });

    // Batches atualizados: apenas lotes com saldo > 0 permanecem
    expect(updatedBatches).toHaveLength(2);

    const remainingMedium = updatedBatches.find((b) => b.id === "batch-medium-60d");
    expect(remainingMedium).toBeDefined();
    expect(remainingMedium?.amount).toBe(150);

    const remainingNewer = updatedBatches.find((b) => b.id === "batch-newer-180d");
    expect(remainingNewer).toBeDefined();
    expect(remainingNewer?.amount).toBe(500);

    const depletedBatch = updatedBatches.find((b) => b.id === "batch-expiring-first-15d");
    expect(depletedBatch).toBeUndefined();
  });

  it("deve realizar dedução parcial sem remover o lote quando o saldo cobre o resgate", () => {
    const batches: PointBatch[] = [
      {
        id: "batch-single",
        source: "Shop Netfits",
        amount: 1000,
        earnedDate: "2026-01-01",
        expirationDate: "2028-01-01",
        daysRemaining: 400,
      },
    ];

    const { updatedBatches, deductedLog } = deductPointsFEFO(batches, 250);

    expect(deductedLog).toEqual([
      {
        batchId: "batch-single",
        source: "Shop Netfits",
        amountDeducted: 250,
      },
    ]);
    expect(updatedBatches).toHaveLength(1);
    expect(updatedBatches[0].amount).toBe(750);
  });

  it("deve lidar corretamente com solicitação de 0 pontos sem alterar os lotes", () => {
    const batches: PointBatch[] = [
      {
        id: "batch-1",
        source: "Treino Club",
        amount: 100,
        earnedDate: "2026-01-01",
        expirationDate: "2028-01-01",
        daysRemaining: 700,
      },
    ];

    const { updatedBatches, deductedLog } = deductPointsFEFO(batches, 0);

    expect(deductedLog).toHaveLength(0);
    expect(updatedBatches).toHaveLength(1);
    expect(updatedBatches[0].amount).toBe(100);
  });

  it("deve esgotar todos os lotes se a dedução solicitada for maior que o saldo total disponível", () => {
    const batches: PointBatch[] = [
      {
        id: "batch-a",
        source: "Quiz",
        amount: 50,
        earnedDate: "2026-01-01",
        expirationDate: "2027-01-01",
        daysRemaining: 100,
      },
      {
        id: "batch-b",
        source: "Feed",
        amount: 30,
        earnedDate: "2026-01-01",
        expirationDate: "2027-06-01",
        daysRemaining: 250,
      },
    ];

    const { updatedBatches, deductedLog } = deductPointsFEFO(batches, 200);

    expect(deductedLog).toHaveLength(2);
    expect(deductedLog[0].amountDeducted).toBe(50);
    expect(deductedLog[1].amountDeducted).toBe(30);
    expect(updatedBatches).toHaveLength(0); // Todos esgotados
  });
});
