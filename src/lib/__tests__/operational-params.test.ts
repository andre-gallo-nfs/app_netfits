import { describe, it, expect, beforeEach } from "vitest";
import {
  DEFAULT_OPERATIONAL_PARAMS,
  getOperationalParams,
  updateOperationalParams,
  resetOperationalParams,
  subscribeOperationalParams,
} from "@/lib/operational-params-store";

describe("Parâmetros Operacionais e Regras de Negócio Netfits", () => {
  beforeEach(() => {
    resetOperationalParams();
  });

  describe("Parâmetros Financeiros e Atuariais Oficiais", () => {
    it("deve manter estritamente a taxa esperada de breakage em 5.0% (e NUNCA 12%)", () => {
      const params = getOperationalParams();
      expect(params.targetBreakagePct).toBe(5.0);
      expect(DEFAULT_OPERATIONAL_PARAMS.targetBreakagePct).toBe(5.0);
      expect(params.targetBreakagePct).not.toBe(12.0);
    });

    it("deve manter o Custo por Ponto (CPP) de acúmulo em R$ 0,0150 (R$ 15,00 a cada 1.000 nfs, e NUNCA R$ 0,020)", () => {
      const params = getOperationalParams();
      expect(params.cppAcumuloBrl).toBe(0.015);
      expect(DEFAULT_OPERATIONAL_PARAMS.cppAcumuloBrl).toBe(0.015);
      // R$ 15,00 / 1000 = 0.015
      const costPerThousand = params.cppAcumuloBrl * 1000;
      expect(costPerThousand).toBe(15.0);
      expect(costPerThousand).not.toBe(20.0);
    });

    it("deve definir a política de resgate como FEFO (First-Expiring, First-Out) com validade de 24 meses", () => {
      const params = getOperationalParams();
      expect(params.redemptionPolicy).toBe("FEFO");
      expect(params.pointsValidityMonths).toBe(24);
    });
  });

  describe("Governança de Recompensas de Treino", () => {
    it("deve restringir pontuação de treino exclusivamente a membros do clube e manter status pendente de aprovação da diretoria", () => {
      const params = getOperationalParams();
      expect(params.workoutRewardClubOnly).toBe(true);
      expect(params.workoutRewardBoardApproved).toBe(false);
    });

    it("deve permitir que a diretoria aprove a pontuação dinamicamente via updateOperationalParams sem hardcoding", () => {
      let notified = false;
      const unsubscribe = subscribeOperationalParams(() => {
        notified = true;
      });

      updateOperationalParams({ workoutRewardBoardApproved: true });

      const updated = getOperationalParams();
      expect(updated.workoutRewardBoardApproved).toBe(true);
      expect(notified).toBe(true);

      unsubscribe();
    });
  });

  describe("Gestão Reativa de Parâmetros", () => {
    it("deve atualizar parâmetros dinamicamente e notificar os inscritos", () => {
      let callCount = 0;
      const unsubscribe = subscribeOperationalParams(() => {
        callCount++;
      });

      updateOperationalParams({ netfitsTakeRatePctFromGmv: 7.5 });

      expect(getOperationalParams().netfitsTakeRatePctFromGmv).toBe(7.5);
      expect(callCount).toBe(1);

      unsubscribe();
    });

    it("deve restaurar parâmetros padrão ao invocar resetOperationalParams", () => {
      updateOperationalParams({ targetBreakagePct: 6.5 });
      expect(getOperationalParams().targetBreakagePct).toBe(6.5);

      resetOperationalParams();
      expect(getOperationalParams().targetBreakagePct).toBe(5.0);
    });
  });
});
