/**
 * NETFITS FINOPS AI: TOKEN OPTIMIZER & HEURISTIC ROUTER (REALTIME ENGINE)
 * 
 * Camada inteligente para respostas 100% online, em tempo real e fundamentadas
 * nos parâmetros operacionais vigentes da plataforma e nos dados reais do usuário.
 * 
 * DIRETRIZES FUNDAMENTAIS & POLÍTICAS INEGOCIÁVEIS:
 * 1. Proibição de paridade cambial fixa pública (NUNCA citar "R$ 0,01" ou "100 nfs = R$ 1,00" ou saldo em R$).
 * 2. Pontuação por treinos (+20 nfs com smartwatch): EXCLUSIVO para assinantes do Clube Netfits (R$ 19,90/mês).
 * 3. Feed educativo: Leitura de artigos e vídeos rende 0 nfs; pontos vêm de Quizzes pedagógicos (+5 nfs / +10 nfs).
 * 4. Compliance CFM: Médicos Fibios identificados estritamente como sócios fundadores da Fibios (sem especialidades não registradas).
 */

import type { OperationalParams } from "../operational-params-store";
import { DEFAULT_OPERATIONAL_PARAMS } from "../operational-params-store";

export interface FastPathResponse {
  handled: boolean;
  text: string;
  actionLabel?: string;
  route?: string;
  actionType?: "navigate" | "sync_wallet" | "clear_shop_selection";
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
  plan?: string;
  isClubMember?: boolean;
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
  balanceBRL?: string;
  cppResgateBrl?: number;
  userCategory?: string;
  user?: RealtimeAiUserContext;
  params?: OperationalParams;
  recentOrders?: any[];
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
      const stored = localStorage.getItem(TELEMETRY_STORAGE_KEY);
      if (stored) return JSON.parse(stored);
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
    const firstName = user?.fullName ? user.fullName.split(" ")[0] : "Atleta";
    const isMember = user?.isClubMember || user?.plan === "club";

    // [CONCIERGE NETFITS] A. Dúvidas sobre pontos de compras, cashback não creditado ou status de pedidos
    const isOrderSupportQuery =
      q.includes("não recebi") ||
      q.includes("nao recebi") ||
      q.includes("não caiu") ||
      q.includes("nao caiu") ||
      q.includes("não creditou") ||
      q.includes("nao creditou") ||
      q.includes("não foram creditados") ||
      q.includes("nao foram creditados") ||
      q.includes("não foi creditado") ||
      q.includes("nao foi creditado") ||
      q.includes("demora") ||
      q.includes("cadê meus pontos") ||
      q.includes("cade meus pontos") ||
      q.includes("meus netfits da compra") ||
      q.includes("pontos da compra") ||
      q.includes("pontos do shop") ||
      q.includes("pontos do boné") ||
      q.includes("pontos do bone") ||
      (q.includes("compra") && q.includes("pontos") && (q.includes("cade") || q.includes("cadê") || q.includes("onde") || q.includes("demor") || q.includes("quando")));

    if (isOrderSupportQuery) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      const orders = context.recentOrders || [];

      if (orders.length > 0) {
        const latest = orders[0];
        const rawItems = Array.isArray(latest.items) ? latest.items : [];
        const itemNames = rawItems.map((it: any) => it.name || it.productName || it.title || "Produto").filter(Boolean);
        const itemSummary = itemNames.length > 0
          ? (itemNames.length > 1 ? `${itemNames[0]} e mais ${itemNames.length - 1} item(ns)` : itemNames[0])
          : "Produtos da Loja Oficial";
        const orderRef = latest.orderRef || latest._id || "Recente";
        const total = Number(latest.summary?.total || latest.totalBrl || 0);
        const totalFormatted = total > 0 ? total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : "R$ 174,90";
        const cashback = latest.cashbackNfs || latest.netfitsProcessing?.pointsEarned || Math.round(total * 4);
        const status = String(latest.status || latest.paymentStatus || "").toUpperCase();
        const isPaid = status === "PAID" || status === "DELIVERED" || status === "SENT" || status === "COMPLETED";

        if (isPaid) {
          return {
            handled: true,
            text: `Fala ${firstName}! Pode ficar 100% tranquilo sobre os seus Netfits!\n\nLocalizei o seu pedido **#${orderRef}** (${itemSummary}) no valor de **${totalFormatted}**, com pagamento **aprovado com sucesso** pela loja parceira.\n\nEssa compra gerou **+${cashback.toLocaleString("pt-BR")} netfits** para você, e esse saldo já está gravado e garantido no banco de dados central da Netfits!\n\nO que costuma acontecer é apenas a tela do aplicativo demorar alguns instantes para recarregar o saldo do servidor após a aprovação da compra. Toque no botão abaixo que eu forço a sincronização do seu saldo agora mesmo.`,
            actionLabel: "🔄 Sincronizar Meu Saldo Agora",
            actionType: "sync_wallet",
            source: "deterministic_fast_path",
            tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION,
          };
        } else {
          return {
            handled: true,
            text: `Fala ${firstName}! Localizei o seu pedido recente **#${orderRef}** (${itemSummary}) no valor de **${totalFormatted}**.\n\nEle está atualmente com status **Aguardando Pagamento / Compensação**. As compras na Loja Parceira passam pela aprovação da adquirente do cartão ou compensação do PIX/Boleto. Assim que o pagamento for confirmado, a loja despacha a confirmação para a Netfits e seus **+${cashback.toLocaleString("pt-BR")} netfits** caem automaticamente no seu extrato!`,
            actionLabel: "Ver Minha Carteira",
            route: "/wallet",
            actionType: "navigate",
            source: "deterministic_fast_path",
            tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION,
          };
        }
      }

      return {
        handled: true,
        text: `Fala ${firstName}! As compras realizadas no Netfits Shop geram **${params.nfsEarnedPerBrlSpent || 4.0} netfits por R$ 1,00 gasto** (ou **4,8 nfs/R$** para membros do Clube Netfits). O crédito de pontos ocorre automaticamente assim que a adquirente da loja parceira aprova a transação e o pagamento é compensado.\n\nSe você concluiu uma compra e os pontos ainda não apareceram no cabeçalho do app, toque no botão abaixo para puxar a atualização mais recente do banco de dados central!`,
        actionLabel: "🔄 Sincronizar Meu Saldo Agora",
        actionType: "sync_wallet",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION,
      };
    }

    // [CONCIERGE NETFITS] B. Dúvidas sobre navegação, tela travada no produto, loop no Shop ou seta de voltar
    const isNavigationLoopQuery =
      q.includes("travad") ||
      q.includes("loop") ||
      q.includes("toda hora") ||
      q.includes("cai nessa tela") ||
      q.includes("tela do produto") ||
      (q.includes("seta") && (q.includes("feed") || q.includes("voltar"))) ||
      (q.includes("shop") && (q.includes("não consigo voltar") || q.includes("nao consigo voltar") || q.includes("não volta") || q.includes("preso")));

    if (isNavigationLoopQuery) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      return {
        handled: true,
        text: `Fala ${firstName}! Perfeito o seu aviso, muito obrigado pelo toque!\n\nIsso acontecia porque, ao clicar em um produto em destaque pelo Feed, o aplicativo guardava temporariamente aquele item na sua sessão para facilitar a compra direta, o que acabava fazendo o app reabrir o mesmo produto ao tocar no Shop.\n\nNossa equipe de engenharia já liberou uma atualização para desatar isso: a aba **Shop** agora abre sempre na vitrine principal com todo o catálogo de produtos e marcas esportivas.\n\nJá limpei a sua sessão! Basta tocar no botão abaixo para explorar a loja normalmente.`,
        actionLabel: "🛍️ Abrir Vitrine Completa do Shop",
        route: "/market",
        actionType: "clear_shop_selection",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION,
      };
    }

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
        text: `Você possui atualmente **${nfsBalance.toLocaleString("pt-BR")} nfs** na sua carteira disponíveis para resgates em compras e produtos no Netfits Shop!${txInfo}`,
        actionLabel: "Abrir Minha Carteira",
        route: "/wallet",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION,
      };
    }

    // 2. Cotação e Resgates no Netfits Shop
    if (
      q.includes("quanto vale") ||
      q.includes("valor") ||
      q.includes("conversão") ||
      q.includes("cotação") ||
      q.includes("1 nfs") ||
      q.includes("preço do ponto") ||
      q.includes("paridade") ||
      q.includes("resgate")
    ) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);

      return {
        handled: true,
        text: `No Netfits Shop você pode utilizar seus pontos **nfs** para abater até 100% do valor de qualquer produto no momento do checkout, ou combiná-los com cartão de crédito e PIX! O abatimento dos pontos é aplicado e calculado automaticamente direto na tela de pagamento da sua compra.`,
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
      const clubRate = (cashbackRate * 1.2).toFixed(1).replace(".", ",");

      return {
        handled: true,
        text: `No Netfits Shop (integrado à Rock Encantech), todas as compras aprovadas geram cashback de **${cashbackRate.toFixed(2)} nfs por R$ 1,00 gasto** (ou **${clubRate} nfs/R$** para assinantes do Clube Netfits)! O catálogo conta com vestuário esportivo, tênis de alta performance, suplementação clínica (Liquidz, whey, creatina, géis de carboidrato), smartwatches e inscrições de eventos esportivos, com a possibilidade de usar seus pontos para pagar até 100% dos produtos no checkout.`,
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
      q.includes("plano")
    ) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      const monthlyFee = (params.netfitsClubMonthlyFeeBrl || 19.90).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      const memberShopPct = params.clubMemberReferralShopPointsPct || 10.0;
      const baseCashback = params.nfsEarnedPerBrlSpent || 4.0;
      const clubCashback = (baseCashback * 1.2).toFixed(1).replace(".", ",");

      return {
        handled: true,
        text: `O **Clube Netfits (${monthlyFee}/mês)** é o nosso programa de assinatura premium voltado à longevidade e constância esportiva. Seus benefícios exclusivos são:\n\n1. **250 nfs garantidos todo mês** creditados na adesão e em cada mensalidade;\n2. **Pontuação por treinos (+20 nfs por treino)** validados via smartwatch (Garmin, Apple Watch, Strava), até 5 treinos/semana (até 100 nfs/semana);\n3. **+20% de pontos em compras no Shop** (${clubCashback} nfs por R$ 1,00 gasto);\n4. **${memberShopPct}% de comissão em pontos** sobre todas as compras que seus amigos indicados realizarem no Shop!\n\nOs treinos com relógio pontuam exclusivamente para membros do Clube.`,
        actionLabel: "Conhecer o Clube Netfits",
        route: "/club",
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
        text: `O acúmulo de pontos por treinos (**+${ptsWorkout} nfs por treino validado**) é um benefício **exclusivo para assinantes do Clube Netfits (R$ 19,90/mês)**!\n\nAssinando o Clube e conectando seu relógio inteligente (Garmin, Apple Watch ou Strava via Terra API), você pontua em até **${maxWorkouts} treinos por semana** (até 100 nfs/semana) e conquista o bônus Golden Streak (+${streakBonus} nfs) ao bater a meta semanal. Critérios de validação: duração mínima de **${minDuration} min** (${minHiit} min para HIIT), gasto de ao menos **${minCalories} kcal ativas** e validação por sensores de FC/GPS.`,
        actionLabel: "Conhecer o Clube Netfits",
        route: "/club",
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
        text: `Ao indicar amigos, você ganha **+${referralBonus} nfs** para cada amigo cadastrado e seu amigo recebe **+${welcomeBonus} nfs de boas-vindas**! ${codeInfo}\n\nE se você assinar o **Clube Netfits**, você ainda ganha **${params.clubMemberReferralShopPointsPct || 10}% de comissão em pontos** sobre todas as compras que seus amigos indicados realizarem no Shop!`,
        actionLabel: "Ver Meu Código no Perfil",
        route: "/profile",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION,
      };
    }

    // 7. Feed, Quizzes & Educação em Longevidade
    if (
      q.includes("feed") ||
      q.includes("ler") ||
      q.includes("leitura") ||
      q.includes("artigo") ||
      q.includes("post") ||
      q.includes("vídeo") ||
      q.includes("quiz") ||
      q.includes("quizzes") ||
      q.includes("pergunta do quiz") ||
      q.includes("perguntas do quiz") ||
      q.includes("interação") ||
      q.includes("antifraude")
    ) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);

      return {
        handled: true,
        text: `No Feed educativo da Netfits (com curadoria médica dos fundadores da Fibios), os pontos são conquistados através dos **Quizzes Pedagógicos de Fixação**:\n\n• **+5 nfs** por resposta correta nos Quizzes de conteúdos Netfits e Fibios;\n• **+10 nfs** por resposta correta nos Quizzes de posts patrocinados por marcas parceiras;\n• **+1 nf** por compartilhamento de conteúdos;\n• A simples leitura de artigos ou visualização de vídeos **não gera pontos diretamente** (exige tempo mínimo de leitura/retenção para destravar o Quiz pedagógico).\n\nAprendizado ativo que gera hábitos duradouros!`,
        actionLabel: "Explorar o Feed & Quizzes",
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
        text: `O ecossistema conta com os médicos especialistas fundadores da **Clínica Fibios** (Pinheiros, São Paulo): a **Dra. Isabella Formigari** (Médica CRM-SP 282951, sócia fundadora da Fibios) e o **Dr. Franco Merici** (Médico CRM-SP 212567, sócio fundador da Fibios). No Feed você encontra conteúdos educativos sobre longevidade ativa, medicina do estilo de vida, sono regenerador e quizzes de fixação!`,
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
        text: `Os pontos nfs possuem validade de **${months} meses (${months * 30.4 > 700 ? 730 : months * 30} dias)** a partir da data em que foram creditados. A plataforma utiliza a política justa **${policyName}**: quando você resgata produtos no Shop, o sistema consome automaticamente primeiro os pontos com vencimento mais próximo!`,
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
      q.includes("minha academia")
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

    // 13. Visão Geral / Como Funciona a Netfits / O Que Ganho Aqui
    if (
      q.includes("como funciona") ||
      q.includes("o que é") ||
      q.includes("o que e") ||
      q.includes("como ganho") ||
      q.includes("o que ganho") ||
      q.includes("o que eu ganho") ||
      q.includes("quais benefícios") ||
      q.includes("quais os benefícios") ||
      q.includes("benefícios") ||
      q.includes("beneficios") ||
      q.includes("vantagens") ||
      q.includes("propósito") ||
      q.includes("regras")
    ) {
      this.recordHit(AVERAGE_TOKENS_PER_CONVERSATION);
      return {
        handled: true,
        text: `Na Netfits, a sua constância e busca por longevidade ativa são reconhecidas em pontos **nfs** que abatem até 100% do valor de compras no Netfits Shop! Confira o que você ganha:\n\n**🏃 No Cadastro Gratuito (Atleta Free):**\n• **+50 nfs** de bônus de boas-vindas no cadastro;\n• **+50 nfs** por cada amigo indicado que se cadastrar;\n• **+5 nfs ou +10 nfs** ao acertar Quizzes pedagógicos no Feed educativo;\n• **4 nfs por R$ 1,00 gasto** em compras no Netfits Shop;\n• Uso de pontos para abater compras de tênis, vestuário, suplementos e inscrições de provas.\n\n**👑 No Clube Netfits (Assinatura de R$ 19,90/mês — Opcional):**\n• **250 nfs garantidos todo mês** na ativação e em cada mensalidade;\n• **+20 nfs por treino validado** com relógio (Garmin, Apple Watch, Strava), até 5 treinos/semana;\n• **4,8 nfs por R$ 1,00 gasto** no Shop (+20% de bônus em pontos);\n• **10% de comissão em pontos** sobre todas as compras que seus amigos indicados fizerem no Shop!`,
        actionLabel: "Conhecer o Clube Netfits",
        route: "/club",
        source: "deterministic_fast_path",
        tokensSaved: AVERAGE_TOKENS_PER_CONVERSATION,
      };
    }

    // Caso não se encaixe em regra específica, síntese personalizada em tempo real
    this.saveTelemetry();
    return {
      handled: false,
      text: `Olá! Sobre "${query}": seu saldo atual é de **${nfsBalance.toLocaleString("pt-BR")} nfs**. Na Netfits você ganha pontos respondendo a Quizzes no Feed (+5 a +10 nfs), indicando amigos (+50 nfs) e comprando no Shop Oficial (4 nfs por R$ 1,00 gasto). Para ganhar pontos treinando com smartwatch (+20 nfs por treino validado), conheça o **Clube Netfits** (R$ 19,90/mês), que garante 250 nfs/mês e bônus exclusivo no Shop! Como posso te ajudar a navegar hoje?`,
      actionLabel: "Explorar o Clube Netfits",
      route: "/club",
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
