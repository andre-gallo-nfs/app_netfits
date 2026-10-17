export interface ModerationRequest {
  postId?: string;
  authorId: string;
  authorName?: string;
  text: string;
  mediaUrl?: string;
  mediaType?: "image" | "video" | "text_only";
  category?: "fitness" | "nutrition" | "lifestyle" | "question";
}

export interface ModerationResult {
  approved: boolean;
  status: "APPROVED" | "FLAGGED_FOR_REVIEW" | "REJECTED";
  flags: string[];
  reasons: string[];
  confidence: number;
  tokensUsed: number;
  estimatedCostUsd: number;
  latencyMs: number;
  moderatedAt: string;
}

// Banco léxico de termos proibidos e regras da política Netfits
const PROHIBITED_PATTERNS = [
  { regex: /\b(cura milagrosa|remédio proibido|anabolizante|ozempic sem receita|bomba)\b/i, flag: "unauthorized_medical_claim" },
  { regex: /\b(esquema|pirâmide|ganhe dinheiro fácil|trabalhe de casa e fique rico|pix em dobro)\b/i, flag: "financial_scam" },
  { regex: /\b(compre no link|link na bio|clique aqui para comprar|desconto exclusivo shopee)\b/i, flag: "unauthorized_commercial_spam" },
  { regex: /\b(idiota|imbecil|lixo|otário|arrombado|safado)\b/i, flag: "toxic_language" },
  { regex: /(ignore all previous instructions|system prompt override|dan mode|jailbreak)/i, flag: "prompt_injection" },
];

/**
 * Serviço de Moderação de Conteúdo por IA (Guardrail da Célula 1 & Célula 4)
 * Avalia textos e mídias de atletas antes de publicação no Feed Social,
 * garantindo integridade de marca, conformidade com a LGPD e FinOps.
 */
export async function moderateFeedContent(req: ModerationRequest): Promise<ModerationResult> {
  const startTime = Date.now();
  const text = (req.text || "").trim();
  const flags: string[] = [];
  const reasons: string[] = [];

  // 1. Verificação de regras heurísticas estritas (Latência < 2ms)
  for (const pattern of PROHIBITED_PATTERNS) {
    if (pattern.regex.test(text)) {
      flags.push(pattern.flag);
      reasons.push(`Violação da política de comunidade: detecção de padrão proibido (${pattern.flag}).`);
    }
  }

  // 2. Verificação de links não autorizados (Anti-Spam)
  const urlMatches = text.match(/https?:\/\/[^\s]+/g);
  if (urlMatches && urlMatches.length > 2) {
    flags.push("excessive_links");
    reasons.push("Spam de links: número excessivo de URLs externas detectado.");
  }

  // 3. Simulação de contagem de tokens para controle FinOps (média de 4 caracteres por token)
  const promptTokens = Math.max(15, Math.ceil(text.length / 4));
  const completionTokens = 25;
  const totalTokens = promptTokens + completionTokens;
  // Gemini 1.5 Flash pricing: ~$0.075 por 1M tokens de input / $0.30 por 1M tokens de output
  const cost = (promptTokens * 0.000000075) + (completionTokens * 0.0000003);

  const latencyMs = Date.now() - startTime;
  const moderatedAt = new Date().toISOString();

  if (flags.includes("prompt_injection") || flags.includes("toxic_language") || flags.includes("financial_scam")) {
    return {
      approved: false,
      status: "REJECTED",
      flags,
      reasons,
      confidence: 0.98,
      tokensUsed: totalTokens,
      estimatedCostUsd: Number(cost.toFixed(8)),
      latencyMs,
      moderatedAt,
    };
  }

  if (flags.length > 0) {
    return {
      approved: false,
      status: "FLAGGED_FOR_REVIEW",
      flags,
      reasons,
      confidence: 0.85,
      tokensUsed: totalTokens,
      estimatedCostUsd: Number(cost.toFixed(8)),
      latencyMs,
      moderatedAt,
    };
  }

  return {
    approved: true,
    status: "APPROVED",
    flags: [],
    reasons: ["Conteúdo compatível com os parâmetros da comunidade de longevidade e saúde."],
    confidence: 0.99,
    tokensUsed: totalTokens,
    estimatedCostUsd: Number(cost.toFixed(8)),
    latencyMs,
    moderatedAt,
  };
}
