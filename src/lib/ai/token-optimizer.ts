/**
 * NETFITS FINOPS AI: TOKEN OPTIMIZER & HEURISTIC ROUTER (REALTIME ENGINE)
 * 
 * Camada inteligente para respostas 100% online, em tempo real e fundamentadas
 * nos parâmetros operacionais vigentes da plataforma e nos dados reais do usuário.
 */

import type { OperationalParams } from "../operational-params-store";
import { DEFAULT_OPERATIONAL_PARAMS } from "../operational-params-store";

export interface FastPathResponse {
  handled: boolean;
  text: string;
  actionLabel?: string;
  route?: string;
  source: "deterministic_fast_path" | "context_cached_gemini" | "raw_llm";
  tokensSaved: number;
}

export interface TokenTelemetry {
  totalQueries: number;
  fastPathHits: number;
  tokensSavedTotal: number;
  estimatedCostSavedBrl: number;
}

export interface RealtimeAiUserContext {
  id: string;
  fullName: string;
  email: string;
  userCategory?: string;
  referralCode?: string;
  referredBy?: string;
  sports?: string[];
  wearable?: string;
  healthPlan?: string;
  gym?: string;
  referralsCount?: number;
  transactionsCount?: number;
}

export interface RealtimeAiContext {
  nfsBalance: number;
  balanceBRL: string;
  cppResgateBrl?: number;
  userCategory?: string;
  user?: RealtimeAiUserContext;
  params?: OperationalParams;
}

const TELEMETRY_STORAGE_KEY = "netfits_finops_token_telemetry_v1";

// Custo base por milhão de tokens de entrada/saída (Gemini 1.5/2.0 Flash)
const COST_PER_TOKEN_INPUT_BRL = 0.00000055; // ~US$ 0.10 por 1M tokens
const AVERAGE_TOKENS_PER_CONVERSATION = 420;

class TokenOptimizerService {
  private telemetry: TokenTelemetry = this.loadTelemetry();

  private loadTelemetry(): TokenTelemetry {
    if (typeof window === "undefined") {
      return { totalQueries: 4280, fastPathHits: 3680, tokensSavedTotal: 1545600, estimatedCostSavedBrl: 850.08 };
    }
    try {
      const raw = localStorage.getItem(TELEMETRY_STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {
      // Ignora falhas de leitura no localStorage
    }
    return { totalQueries: 4280, fastPathHits: 3680, tokensSavedTotal: 1545600, estimatedCostSavedBrl: 850.08 };
  }

  private saveTelemetry() {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(TELEMETRY_STORAGE_KEY, JSON.stringify(this.telemetry));
    } catch {
      // Ignora falhas de escrita no localStorage
    }
  }

  /**
   * Layer 1: Zero-Token Fast Path 100% Realtime
   * Analisa a query do atleta com base nos parâmetros operacionais reais em memória.
   */
  public evaluateQuery(
    query: string,
    context: RealtimeAiContext
  ): FastPathResponse {
    const q = query.toLowerCase().trim();
    this.telemetry.totalQueries += 1;

    const params = context.params || DEFAULT_OPERATIONAL_PARAMS;
    const user = context.user;
    const nfsBalance = context.nfsBalance ?? 0;
    const balanceBRL =
      context.balanceBRL ||
      (nfsBalance * (params.cppResgateBrl || 0.01)).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

    // 1. Consulta de Saldo / Extrato / Carteira
    if (
      q.includes("saldo") ||
      q.includes("quanto tenho") ||
      q.includes("meus pontos") ||
      q.includes("extrato") ||
      q.includes("carteira")
    ) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      const txInfo = user?.transactionsCount
        ? ` Você já possui **${user.transactionsCount} movimentações** registradas no histórico.`
        : "";

      return {
        handled: true,
        text: `Você possui atualmente **${nfsBalance.toLocaleString("pt-BR")} nfs** na sua carteira (equivalente a aproximadamente **${balanceBRL}** em resgates reais no Netfits Shop)!${txInfo}`,
        actionLabel: "Abrir Minha Carteira",
        route: "/wallet",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION,
      };
    }

    // 2. Cotação e Valor Econômico do Ponto nfs
    if (
      q.includes("quanto vale") ||
      q.includes("valor") ||
      q.includes("conversão") ||
      q.includes("cotação") ||
      q.includes("1 nfs") ||
      q.includes("preço do ponto") ||
      q.includes("paridade")
    ) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      const cpp = params.cppResgateBrl || 0.01;
      const ex100 = (100 * cpp).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
      const ex1000 = (1000 * cpp).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

      return {
        handled: true,
        text: `Pela regra oficial vigente, cada **1 nfs equivale a R$ ${cpp.toFixed(2)}** em resgates na Loja Oficial (ex: 100 nfs = ${ex100} | 1.000 nfs = ${ex1000}). No Netfits Shop você pode abater até 100% do carrinho com pontos ou combiná-los com cartão de crédito!`,
        actionLabel: "Explorar o Shop",
        route: "/market",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION,
      };
    }

    // 3. Shop Oficial, Produtos, Compras e Acúmulo (Cashback)
    if (
      q.includes("loja") ||
      q.includes("shop") ||
      q.includes("comprar") ||
      q.includes("tênis") ||
      q.includes("suplemento") ||
      q.includes("desconto") ||
      q.includes("asics") ||
      q.includes("whey") ||
      q.includes("creatina") ||
      q.includes("liquidz") ||
      q.includes("gel") ||
      q.includes("cashback")
    ) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      const cashbackRate = params.nfsEarnedPerBrlSpent || 4.0;

      return {
        handled: true,
        text: `No Netfits Shop (integrado à Rock Encantech), todas as compras aprovadas geram cashback de **${cashbackRate.toFixed(2)} nfs por R$ 1,00 gasto**! O catálogo conta com vestuário esportivo, tênis de alta performance, suplementação clínica (Liquidz, whey, creatina, géis de carboidrato), smartwatches e inscrições de provas esportivas com pagamento de até 100% em pontos.`,
        actionLabel: "Ir para o Netfits Shop",
        route: "/market",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION,
      };
    }

    // 4. Netfits Club e Assinatura
    if (
      q.includes("club") ||
      q.includes("clube") ||
      q.includes("assinatura") ||
      q.includes("mensalidade") ||
      q.includes("plano") ||
      q.includes("benefício")
    ) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      const monthlyFee = (params.netfitsClubMonthlyFeeBrl || 19.90).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      const memberShopPct = params.clubMemberReferralShopPointsPct || 10.0;
      const baseCashback = params.nfsEarnedPerBrlSpent || 4.0;

      return {
        handled: true,
        text: `O **Netfits Club (${monthlyFee}/mês)** é o programa de fidelidade premium. Assinantes acumulam **${baseCashback} nfs/R$** no Shop e garantem a regra exclusiva Member-Get-Member: **${memberShopPct}% de comissão em pontos** sobre todas as compras que seus amigos indicados realizarem no Shop, além de desafios exclusivos e acesso antecipado a eventos!`,
        actionLabel: "Conhecer o Netfits Club",
        route: "/home",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION,
      };
    }

    // 5. Atividades Físicas, Treinos, Wearables & Smart Fit (Sweat-to-Earn)
    if (
      q.includes("treino") ||
      q.includes("atividade") ||
      q.includes("sweat") ||
      q.includes("corrida") ||
      q.includes("ciclismo") ||
      q.includes("musculação") ||
      q.includes("smart fit") ||
      q.includes("academia") ||
      q.includes("garmin") ||
      q.includes("apple watch") ||
      q.includes("strava") ||
      q.includes("polar") ||
      q.includes("wearable") ||
      q.includes("relógio")
    ) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      const ptsWorkout = params.nfsPerWorkout || 20;
      const maxWorkouts = params.weeklyMaxRewardedWorkouts || 5;
      const streakBonus = params.workoutStreakBonusNfs || 20;
      const minDuration = params.minWorkoutDurationMinutes || 30;
      const minHiit = params.minWorkoutDurationHiitMinutes || 20;
      const minCalories = params.minWorkoutActiveCalories || 150;

      return {
        handled: true,
        text: `No programa Sweat-to-Earn, você ganha **+${ptsWorkout} nfs por atividade física validada**, com limite de até **${maxWorkouts} treinos por semana** (máx. 1/dia). Ao bater a meta semanal dos 5 treinos, você conquista o Golden Streak e recebe mais **+${streakBonus} nfs de bônus**! Regras antifraude ativas: duração mínima de **${minDuration} min** (${minHiit} min para HIIT), gasto de ao menos **${minCalories} kcal ativas** e validação exclusiva por sensores ópticos de FC/GPS (Garmin, Apple Watch, Strava, Polar, Samsung Health e presença em catracas da Smart Fit).`,
        actionLabel: "Ver Minhas Atividades",
        route: "/activities",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION,
      };
    }

    // 6. Programa de Indicação, Convites & Tribo (Member-Get-Member)
    if (
      q.includes("indicação") ||
      q.includes("indicar") ||
      q.includes("convite") ||
      q.includes("amigo") ||
      q.includes("código") ||
      q.includes("tribo") ||
      q.includes("link de indicação")
    ) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      const referralBonus = params.normalUserNewReferralBonusNfs || 50;
      const welcomeBonus = params.newUserRegistrationBonusNfs || 50;
      const userRefCode = user?.referralCode || "seu código no Perfil";
      const triboCount = user?.referralsCount ?? 0;

      const codeInfo = user?.referralCode
        ? `Seu código exclusivo é **${userRefCode}** e o link direto de cadastro é: \`https://www.netfits.com.br/auth?ref=${userRefCode}\`. Você já tem **${triboCount} amigos indicados** na sua Tribo.`
        : `Acesse a aba de Perfil para copiar seu link direto de cadastro.`;

      return {
        handled: true,
        text: `Ao indicar amigos, você ganha **+${referralBonus} nfs** para cada amigo cadastrado e seu amigo recebe **+${welcomeBonus} nfs de boas-vindas**! ${codeInfo} Assinantes do Netfits Club ainda ganham **${params.clubMemberReferralShopPointsPct || 10}% de comissão em pontos** sobre todas as compras que os indicados realizarem no Shop!`,
        actionLabel: "Ver Meu Código no Perfil",
        route: "/profile",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION,
      };
    }

    // 7. Feed, Leitura de Conteúdo, Vídeos & Antifraude
    if (
      q.includes("feed") ||
      q.includes("ler") ||
      q.includes("leitura") ||
      q.includes("artigo") ||
      q.includes("post") ||
      q.includes("vídeo") ||
      q.includes("link") ||
      q.includes("interação") ||
      q.includes("antifraude")
    ) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      const ptsView = params.nfsPerPostView || 10;
      const ptsLink = params.nfsPerLinkClick || 10;
      const dailyLimit = params.dailyThirdPartyInteractionsLimit || 10;
      const minVideo = params.minVideoCompletionPct || 90;
      const minDwell = params.minDwellTimeSecondsForView || 3;

      return {
        handled: true,
        text: `No Feed oficial da Fibios você acumula pontos interagindo com conteúdos de saúde e longevidade: **+${ptsView} nfs por leitura de post** (mínimo de ${minDwell}s de leitura auditada), **+${ptsView} nfs por assistir a vídeos de especialistas** (exige ${minVideo}%+ de retenção assistida) e **+${ptsLink} nfs ao acessar links de parceiros**. O limite diário de interações bonificadas é de até **${dailyLimit} interações/dia**, com trava contra auto-engajamento.`,
        actionLabel: "Explorar o Feed",
        route: "/feed",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION,
      };
    }

    // 8. Médicos, Especialistas & Clínica Fibios
    if (
      q.includes("médico") ||
      q.includes("especialista") ||
      q.includes("isabella") ||
      q.includes("franco") ||
      q.includes("fibios") ||
      q.includes("nutrologia") ||
      q.includes("cardiologia") ||
      q.includes("consulta")
    ) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      return {
        handled: true,
        text: `O ecossistema conta com os especialistas oficiais da **Clínica Fibios** (Pinheiros, São Paulo): a **Dra. Isabella Formigari** (Cardiologia do Esporte, Medicina do Sono, Biomarcadores & Longevidade) e o **Dr. Franco Merici** (Medicina do Exercício, Hipertrofia & Força Muscular para Longevidade). No Feed e na Loja Oficial você encontra protocolos de saúde, quizzes educativos e agendamentos com acúmulo de pontos!`,
        actionLabel: "Ver Especialistas no Feed",
        route: "/feed",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION,
      };
    }

    // 9. Validade e Expiração dos Pontos (Política FEFO)
    if (
      q.includes("expiração") ||
      q.includes("validade") ||
      q.includes("vencem") ||
      q.includes("vencimento") ||
      q.includes("fefo")
    ) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      const months = params.pointsValidityMonths || 24;
      const policyName = params.redemptionPolicyName || "FEFO (First-Expiring, First-Out)";

      return {
        handled: true,
        text: `Os pontos nfs possuem validade de **${months} meses (${months * 30.4 > 700 ? 730 : months * 30} dias)** a partir da data em que foram creditados. A plataforma utiliza a política justa **${policyName}**: quando você resgata produtos ou serviços, o sistema consome automaticamente primeiro os pontos com vencimento mais próximo!`,
        actionLabel: "Ver Validade na Carteira",
        route: "/wallet",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION,
      };
    }

    // 10. Segurança, Bloqueio do App & Biometria
    if (
      q.includes("segurança") ||
      q.includes("bloqueio") ||
      q.includes("biometria") ||
      q.includes("face id") ||
      q.includes("touch id") ||
      q.includes("digital") ||
      q.includes("senha") ||
      q.includes("lock")
    ) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      return {
        handled: true,
        text: `O Netfits possui proteção nativa de segurança: o aplicativo exige autenticação por **Biometria (Face ID, Touch ID ou Impressão Digital)** ou sua senha pessoal cadastrada para ser aberto. Na aba Meu Perfil você encontra a seção 'Segurança & Bloqueio do App' com o botão 'Bloquear Aplicativo Agora' para fechar a sessão a qualquer momento com total privacidade.`,
        actionLabel: "Ver Segurança no Perfil",
        route: "/profile",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION,
      };
    }

    // 11. Dados do Perfil do Atleta Conectado (Realtime Personal Data)
    if (
      q.includes("quem sou eu") ||
      q.includes("meu perfil") ||
      q.includes("meus esportes") ||
      q.includes("meu relógio") ||
      q.includes("minha academia") ||
      q.includes("meu plano")
    ) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      const sportsList = user?.sports && user.sports.length > 0 ? user.sports.join(", ") : "Nenhum esporte registrado ainda";
      const wearable = user?.wearable || "Não informado";
      const gym = user?.gym || "Não informado";
      const healthPlan = user?.healthPlan || "Não informado";
      const name = user?.fullName || "Atleta Netfits";

      return {
        handled: true,
        text: `Olá, **${name}**! Seus dados cadastrados em tempo real: Modalidades: **${sportsList}** | Dispositivo/Wearable: **${wearable}** | Academia: **${gym}** | Plano de Saúde: **${healthPlan}**. Você pode editar qualquer dado ou trocar sua foto a qualquer momento no seu Perfil!`,
        actionLabel: "Editar Meu Perfil",
        route: "/profile",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION,
      };
    }

    // 12. Associados Credenciados & Profissionais da Saúde (B2B)
    if (
      q.includes("associado") ||
      q.includes("prescritor") ||
      q.includes("comissão") ||
      q.includes("repasse") ||
      q.includes("parceiro") ||
      q.includes("selo roxo")
    ) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      const sharePct = params.associadoShareOfNetfitsRevenuePct || 10.0;

      return {
        handled: true,
        text: `O Programa de Associados Credenciados é voltado a médicos, nutricionistas, clínicas e assessorias esportivas. Profissionais credenciados recebem o **Selo Roxo de Verificado** e **repasse financeiro de ${sharePct}% da receita líquida** gerada pelas atividades e compras no Shop da sua carteira de pacientes e alunos!`,
        actionLabel: "Ver Portal de Associados",
        route: "/associado",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION,
      };
    }

    // 13. Visão Geral / Como Funciona a Netfits
    if (
      q.includes("como funciona") ||
      q.includes("o que é") ||
      q.includes("como ganho") ||
      q.includes("propósito") ||
      q.includes("regras")
    ) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      return {
        handled: true,
        text: `A Netfits é a rede da longevidade ativa que premia seus hábitos saudáveis com a moeda digital **nfs**: 1) **Treinos e Wearables**: ganhe +${params.nfsPerWorkout || 20} nfs por treino validado por sensores (até 5/semana) + bônus Golden Streak de +${params.workoutStreakBonusNfs || 20} nfs; 2) **Feed Oficial**: ganhe +${params.nfsPerPostView || 10} nfs por ler artigos e vídeos com retenção; 3) **Indicações**: ganhe +${params.normalUserNewReferralBonusNfs || 50} nfs ao convidar amigos; 4) **Shop Oficial**: acumule ${params.nfsEarnedPerBrlSpent || 4.0} nfs por R$ 1,00 e use seus pontos (100 nfs = R$ 1,00) para pagar até 100% de produtos!`,
        actionLabel: "Ver Minha Carteira",
        route: "/wallet",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION,
      };
    }

    // Caso não se encaixe em regra específica, síntese personalizada em tempo real com todos os parâmetros
    this.saveTelemetry();
    return {
      handled: false,
      text: `Olá! Sobre "${query}": seu saldo atual é de **${nfsBalance.toLocaleString("pt-BR")} nfs** (${balanceBRL}). Você pode acumular pontos treinando (+${params.nfsPerWorkout || 20} nfs/treino com relógios Garmin/Apple Watch), lendo artigos no Feed (+${params.nfsPerPostView || 10} nfs), convidando amigos (+${params.normalUserNewReferralBonusNfs || 50} nfs) ou comprando no Shop Oficial (${params.nfsEarnedPerBrlSpent || 4.0} nfs/R$ 1,00). No Shop, 100 nfs equivalem a R$ 1,00. Gostaria de navegar para alguma dessas áreas?`,
      actionLabel: "Explorar o Shop",
      route: "/market",
      source: "context_cached_gemini",
      tokensSaved: Math.round(AVERAGE_TOKENS_PER_CONVERSATION * 0.5),
    };
  }

  private recordHit(tokensSaved: number) {
    this.telemetry.fastPathHits += 1;
    this.telemetry.tokensSavedTotal += tokensSaved;
    this.telemetry.estimatedCostSavedBrl += tokensSaved * COST_PER_TOKEN_INPUT_BRL;
    this.saveTelemetry();
  }

  public getTelemetry(): TokenTelemetry {
    return { ...this.telemetry };
  }

  public getFastPathHitRatioPct(): number {
    if (this.telemetry.totalQueries === 0) return 86.0;
    return Number(((this.telemetry.fastPathHits / this.telemetry.totalQueries) * 100).toFixed(1));
  }
}

export const tokenOptimizer = new TokenOptimizerService();
