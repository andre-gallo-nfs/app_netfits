/**
 * Netfits — Utilitário Canônico de Códigos de Indicação (Member-Get-Member / MGM)
 * 
 * Gera códigos pessoais, elegantes e unívocos no padrão oficial aprovado:
 * [PRIMEIRO_NOME]-[SOBRENOME]-[3_CARACTERES_ALFA]-[NFS]
 * Exemplo: ANDRE-GALLO-7K2-NFS, CLAUDIA-NOCE-9B4-NFS
 */

export function generatePersonalReferralCode(
  fullName: string,
  existingCodes: (string | null | undefined)[] = []
): string {
  // 1. Sanitização do nome: remove acentos, cedilhas e caracteres especiais
  const normalized = (fullName || "ATLETA")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/[^A-Z\s]/g, " ")
    .trim();

  // 2. Extrai primeiro e último nome, ignorando preposições comuns
  const stopWords = new Set(["DA", "DE", "DO", "DAS", "DOS", "E", "DEL"]);
  const parts = normalized.split(/\s+/).filter((p) => p.length > 0 && !stopWords.has(p));

  const firstName = parts[0] || "ATLETA";
  const lastName = parts.length > 1 ? parts[parts.length - 1] : "";

  // 3. Monta a base nominal
  let baseName = firstName;
  if (lastName && lastName !== firstName) {
    baseName = `${firstName}-${lastName}`;
  }

  // Limite seguro na base nominal para garantir que o código total caiba em telas móveis
  if (baseName.length > 16) {
    baseName = baseName.slice(0, 16).replace(/-$/, "");
  }

  // 4. Caracteres alfanuméricos legíveis (sem ambiguidade: sem 0/O, 1/I)
  const CHARS = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";

  const upperExisting = new Set(
    existingCodes.filter(Boolean).map((c) => String(c).trim().toUpperCase())
  );

  // 5. Gera sufixo alfanumérico de 3 caracteres garantindo unicidade
  for (let attempt = 0; attempt < 100; attempt++) {
    let suffix = "";
    for (let i = 0; i < 3; i++) {
      suffix += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }
    const candidate = `${baseName}-${suffix}-NFS`;
    if (!upperExisting.has(candidate)) {
      return candidate;
    }
  }

  // Fallback determinístico caso haja 100 colisões sucessivas (probabilidade virtualmente nula)
  const fallbackNum = Math.floor(100 + Math.random() * 900);
  return `${baseName}-${fallbackNum}-NFS`;
}
