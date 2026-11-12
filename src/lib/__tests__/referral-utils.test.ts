import { describe, it, expect } from "vitest";
import { generatePersonalReferralCode } from "../referral-utils";

describe("MGM Referral Code Generator — [NOME]-[SOBRENOME]-[3_ALFA]-[NFS]", () => {
  it("deve gerar código no padrão correto para André Gallo", () => {
    const code = generatePersonalReferralCode("André Gallo");
    expect(code).toMatch(/^ANDRE-GALLO-[2-9A-Z]{3}-NFS$/);
  });

  it("deve gerar código no padrão correto para Claudia Noce", () => {
    const code = generatePersonalReferralCode("Cláudia Noce");
    expect(code).toMatch(/^CLAUDIA-NOCE-[2-9A-Z]{3}-NFS$/);
  });

  it("deve ignorar preposições como 'da', 'de', 'do', 'dos', 'e'", () => {
    const code = generatePersonalReferralCode("Cristiane Queli da Silva Gallo");
    // Primeiro nome: CRISTIANE, último sobrenome: GALLO
    expect(code).toMatch(/^CRISTIANE-GALLO-[2-9A-Z]{3}-NFS$/);
  });

  it("deve remover acentos e caracteres especiais corretamente", () => {
    const code = generatePersonalReferralCode("João Gonçalves Conceição");
    expect(code).toMatch(/^JOAO-CONCEICAO-[2-9A-Z]{3}-NFS$/);
  });

  it("deve lidar com nome de uma única palavra", () => {
    const code = generatePersonalReferralCode("Atleta");
    expect(code).toMatch(/^ATLETA-[2-9A-Z]{3}-NFS$/);
  });

  it("deve evitar colisão quando o código base já existir na lista", () => {
    const existing: string[] = [];
    const code1 = generatePersonalReferralCode("Gabriel Silva", existing);
    existing.push(code1);

    const code2 = generatePersonalReferralCode("Gabriel Silva", existing);
    expect(code1).not.toBe(code2);
    expect(code2).toMatch(/^GABRIEL-SILVA-[2-9A-Z]{3}-NFS$/);
  });
});
