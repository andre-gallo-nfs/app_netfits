import { verifyMkplaceJwt, decodeMkplaceJwtWithoutVerification } from "../lib/integrations/mkplace.ts";

/**
 * Normaliza strings para comparações seguras:
 * Converte para minúsculas, remove acentos diacríticos e colapsa múltiplos espaços em branco.
 */
export function normalizeString(str?: string | null): string {
  if (!str) return "";
  return String(str)
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

/**
 * Normaliza números de CPF (remove caracteres não-dígito).
 * Retorna string vazia caso não contenha exatamente 11 dígitos numéricos válidos.
 */
export function normalizeCpf(str?: string | null): string {
  if (!str) return "";
  const digits = String(str).replace(/\D/g, "");
  return digits.length === 11 ? digits : "";
}

/**
 * Busca universal e determinística de usuário por qualquer identificador único (ID, CPF, E-mail).
 * Aplicável rigorosamente a TODO E QUALQUER USUÁRIO cadastrado na plataforma (sem exceções ou regras duras de nomes).
 */
export function findUserByAnyIdentifier(query?: string | null, users: any[] = []): any | null {
  if (!query || typeof query !== "string") return null;
  const clean = query.trim();
  if (!clean) return null;

  const cleanLower = clean.toLowerCase();
  const cleanCpfDigits = normalizeCpf(clean);

  // 1. Chave primária: ID exato
  const byId = users.find((u) => u && u.id && String(u.id).trim() === clean);
  if (byId) return byId;

  // 2. Chave unívoca nacional: CPF de 11 dígitos estritos
  if (cleanCpfDigits && cleanCpfDigits.length === 11) {
    const byCpf = users.find((u) => {
      const uCpf = normalizeCpf(u.cpf || u.document);
      return Boolean(uCpf && uCpf === cleanCpfDigits);
    });
    if (byCpf) return byCpf;
  }

  // 3. Chave de acesso: E-mail único exato
  if (cleanLower.includes("@")) {
    const byEmail = users.find((u) => {
      const uEmail = String(u.email || u.identifier || "").trim().toLowerCase();
      return Boolean(uEmail && uEmail === cleanLower);
    });
    if (byEmail) return byEmail;
  }

  // NUNCA buscar por nome: nomes não são identificadores unívocos em bases de larga escala.
  return null;
}

/**
 * Motor Universal e Determinístico de Resolução de Usuário para Webhooks de Pedidos:
 * Aplicável a TODO E QUALQUER USUÁRIO no ecossistema Netfits (associados, atletas, parceiros).
 *
 * Utiliza EXCLUSIVAMENTE identificadores unívocos próprios (ID, CPF de 11 dígitos ou E-mail único).
 * Jamais utiliza correspondência parcial ou total por nomes de exibição.
 */
export function resolveUserForOrder(rawOrder: any, users: any[] = []): any {
  if (!rawOrder) return null;

  const customerObj = rawOrder.customer || {};
  const shippingObj = rawOrder.shipping || rawOrder.deliveryAddress || {};

  const candidateRef = String(customerObj.ref || rawOrder.customerId || customerObj.id || "").trim();
  const rawDocument = String(customerObj.document || customerObj.cpf || rawOrder.customerDocument || "").trim();
  const cleanCpf = normalizeCpf(rawDocument) || normalizeCpf(candidateRef);
  const candidateEmail = String(customerObj.email || rawOrder.customerEmail || "").trim().toLowerCase();
  const rawCustomerName = String(customerObj.name || rawOrder.customerName || shippingObj.receiverName || "").trim();

  // 1. MATCH POR ID DO USUÁRIO (customer.ref emitido pelo SSO da Netfits)
  if (candidateRef) {
    const userById = users.find((u) => u && u.id && u.id === candidateRef);
    if (userById) {
      if (!userById.cpf && cleanCpf && cleanCpf.length === 11) userById.cpf = cleanCpf;
      if (!userById.email && candidateEmail) userById.email = candidateEmail;
      return userById;
    }
  }

  // 2. MATCH POR CPF OFICIAL NACIONAL (11 DÍGITOS ESTRITOS)
  if (cleanCpf && cleanCpf.length === 11) {
    const userByCpf = users.find((u) => {
      const uCpf = normalizeCpf(u.cpf || u.document);
      return Boolean(uCpf && uCpf === cleanCpf);
    });
    if (userByCpf) {
      if (!userByCpf.email && candidateEmail) userByCpf.email = candidateEmail;
      return userByCpf;
    }
  }

  // 3. MATCH POR E-MAIL ÚNICO
  if (candidateEmail && candidateEmail.includes("@")) {
    const userByEmail = users.find((u) => {
      const uEmail = String(u.email || u.identifier || "").trim().toLowerCase();
      return Boolean(uEmail && uEmail === candidateEmail);
    });
    if (userByEmail) {
      if (!userByEmail.cpf && cleanCpf && cleanCpf.length === 11) userByEmail.cpf = cleanCpf;
      return userByEmail;
    }
  }

  // 4. AUTO-PROVISIONAMENTO ONBOARDING DINÂMICO
  // Apenas provisiona novo atleta se possuir ao menos um identificador unívoco real (CPF válido ou E-mail)
  if ((cleanCpf && cleanCpf.length === 11) || (candidateEmail && candidateEmail.includes("@"))) {
    const newUserId = candidateRef && candidateRef.startsWith("usr_")
      ? candidateRef
      : `usr_client_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    const newUser = {
      id: newUserId,
      fullName: rawCustomerName || "Novo Atleta Netfits",
      email: candidateEmail || "",
      cpf: cleanCpf,
      phone: String(customerObj.phone?.number || customerObj.phone || "").trim(),
      birthDate: String(customerObj.birthdate || customerObj.birthDate || "").trim(),
      address: String(shippingObj.street || "").trim(),
      street: String(shippingObj.street || "").trim(),
      number: String(shippingObj.number || "").trim(),
      neighborhood: String(shippingObj.neighborhood || "").trim(),
      city: String(shippingObj.city || "").trim(),
      state: String(shippingObj.state || "").trim(),
      shortState: String(shippingObj.shortState || shippingObj.state || "").slice(0, 2).toUpperCase(),
      zipcode: String(shippingObj.zipcode || "").replace(/\D/g, ""),
      sports: [],
      nfsBalance: 0,
      userCategory: "atleta",
      registeredAt: new Date().toISOString(),
      onboardingCompleted: true,
      autoProvisionedFromOrder: true,
    };

    users.push(newUser);
    return newUser;
  }

  // Sem identificadores unívocos válidos: não vincula a nenhum usuário existente
  return null;
}

export function resolveUserFromToken(token?: string | null, users: any[] = []): any {
  if (!token) return null;
  const cleanToken = token.replace(/^Bearer\s+/i, "").trim();
  if (!cleanToken) return null;

  let payload: any = null;
  try {
    const verification = verifyMkplaceJwt(cleanToken);
    if (verification.valid && verification.payload) {
      payload = verification.payload;
    }
  } catch (err) {
    console.warn("[resolveUserFromToken] verify error:", err);
  }

  if (!payload) {
    payload = decodeMkplaceJwtWithoutVerification(cleanToken);
  }

  if (payload) {
    const customerId = payload.customerId || payload.sub;
    const email = payload.email;
    const cpf = payload.cpf || payload.document;
    const name = payload.name;

    // Busca unívoca exclusiva por ID, CPF ou E-mail
    const found =
      findUserByAnyIdentifier(customerId, users) ||
      findUserByAnyIdentifier(cpf, users) ||
      findUserByAnyIdentifier(email, users);

    if (found) return found;

    // Auto-provisionamento apenas se houver identificador unívoco válido
    const cleanCpf = normalizeCpf(cpf);
    if (cleanCpf || (email && String(email).includes("@")) || customerId) {
      const fallbackUser = {
        id: customerId || `usr_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
        fullName: name || "Atleta Netfits",
        email: email || "",
        phone: String(payload.phone || "").trim(),
        cpf: cleanCpf,
        birthDate: payload.birthDate || payload.birthdate || "",
        address: "",
        street: "",
        number: "",
        neighborhood: "",
        city: "",
        state: "",
        shortState: "",
        zipcode: "",
        nfsBalance: 50,
        userCategory: "atleta",
      };
      users.push(fallbackUser);
      return fallbackUser;
    }
    return null;
  }

  // Token direto em texto puro / ID / CPF / E-mail
  const foundDirect = findUserByAnyIdentifier(cleanToken, users);
  if (foundDirect) return foundDirect;

  // Sem token válido: retorna null (jamais atribui a outro usuário por padrão)
  return null;
}
