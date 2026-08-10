import { z } from "zod";

/**
 * Schema Zod para validação rigorosa de dados de cadastro de usuários (Netfiters)
 * Alinhado às diretrizes de integridade de dados e LGPD / Manifesto Netfits v2.0.
 */
export const UserSignupSchema = z.object({
  id: z.string().uuid("ID de usuário inválido"),
  fullName: z
    .string()
    .min(3, "Nome deve conter no mínimo 3 caracteres")
    .max(100, "Nome muito longo"),
  email: z.string().email("Endereço de e-mail inválido"),
  phone: z
    .string()
    .regex(/^\+55\s\d{2}\s9?\d{4}-\d{4}$/, "Telefone deve estar no formato +55 11 98765-4321"),
  birthDate: z
    .string()
    .refine((dateStr) => !isNaN(Date.parse(dateStr)), {
      message: "Data de nascimento inválida",
    }),
  address: z.string().min(5, "Endereço deve conter rua, número e cidade"),

  // Dados do Ecossistema Esportivo
  sports: z.array(z.string()).min(1, "Selecione ao menos 1 esporte de preferência"),
  healthPlan: z.string().default("Sem plano"),
  gym: z.string().default("Não frequento"),
  wearable: z.string().default("Não uso"),
  coaching: z.string().optional(),

  // Origem do Cadastro & Indicação (Tribo)
  referralCode: z.string().optional(),
  referredByUserId: z.string().uuid().optional(),

  // Consentimento como Produto (LGPD & Manifesto Netfits v2.0)
  consentTermsAccepted: z.literal(true, {
    errorMap: () => ({ message: "É necessário aceitar os termos de uso da Netfits" }),
  }),
  consentWearablesData: z.boolean().default(false),
  consentPartnersOffers: z.boolean().default(true),
  consentTimestamp: z.string().default(() => new Date().toISOString()),

  // Categoria de Usuário (Novo: ASSOCIADOS)
  userCategory: z.enum(["atleta", "associado", "especialista", "parceiro"]).default("atleta"),
  exclusiveReferralLink: z.string().optional(),
  associadoStats: z
    .object({
      capturedUsersCount: z.number().default(0),
      activeUsersCount: z.number().default(0),
      totalCommissionNfs: z.number().default(0),
    })
    .optional(),

  // Saldo e Nível de Fidelidade
  walletBalanceNfs: z.number().int().nonnegative().default(0),
  level: z.enum(["starter", "pro", "prime", "elite"]).default("starter"),
  createdAt: z.string().default(() => new Date().toISOString()),
  updatedAt: z.string().default(() => new Date().toISOString()),
});

export type UserSignupData = z.infer<typeof UserSignupSchema>;

/**
 * Função de verificação e higienização de integridade dos dados de cadastro
 */
export function validateUserData(data: unknown) {
  const result = UserSignupSchema.safeParse(data);
  if (!result.success) {
    return {
      isValid: false,
      errors: result.error.flatten().fieldErrors,
      sanitizedData: null,
    };
  }
  return {
    isValid: true,
    errors: null,
    sanitizedData: result.data,
  };
}
