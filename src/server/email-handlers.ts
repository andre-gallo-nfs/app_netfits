import {
  sendWelcomeEmail,
  sendPasswordResetEmail,
  sendPointsCreditedEmail,
  sendShopOrderConfirmedEmail,
  sendNpsSurveyEmail,
  sendClubSubscriptionEmail,
  sendReferralCompletedEmail,
} from "../lib/emails/email-service.ts";
import { serverState } from "./server-state.ts";
import { findUserByAnyIdentifier } from "./user-resolver.ts";

export async function handleEmailRoutes(
  req: Request,
  url: URL,
  corsHeaders: Record<string, string>
): Promise<Response | null> {
  // 1. E-mail de Boas-Vindas Oficial (Dinâmico com Dados do Usuário no Banco)
  if (url.pathname === "/api/email/welcome" || url.pathname === "/api/email/welcome/") {
    if (req.method === "POST") {
      try {
        const body = await req.json();
        const to = body.to || body.email;
        if (!to) {
          return new Response(JSON.stringify({ error: "Campo 'to' é obrigatório" }), { status: 400, headers: corsHeaders });
        }

        // Consulta de enriquecimento de dados no banco de usuários
        const matchedUser = findUserByAnyIdentifier(to, serverState.users);
        const nomeUsuario = body.nomeUsuario || body.fullName || matchedUser?.fullName || "Atleta";
        const bonusCadastroNfs = body.bonusCadastroNfs ?? serverState.operationalParams.newUserRegistrationBonusNfs ?? 50;
        const saldoConsolidadoNfs = body.saldoConsolidadoNfs ?? matchedUser?.nfsBalance ?? bonusCadastroNfs;
        const referralCode = body.referralCode || matchedUser?.referralCode || "";
        const referralLink = body.referralLink || matchedUser?.exclusiveReferralLink || "";
        const pontosPorReal = body.pontosPorReal ?? serverState.operationalParams.nfsEarnedPerBrlSpent ?? 4.0;
        const validadeMeses = body.validadeMeses ?? serverState.operationalParams.pointsValidityMonths ?? 24;

        const result = await sendWelcomeEmail({
          to,
          nomeUsuario,
          bonusCadastroNfs,
          saldoConsolidadoNfs,
          referralCode,
          referralLink,
          pontosPorReal,
          validadeMeses,
          appUrl: body.appUrl || "https://www.netfits.com.br",
        });

        return new Response(JSON.stringify({ success: true, result }), { status: 200, headers: corsHeaders });
      } catch (err: any) {
        console.error("[api/email/welcome] Erro:", err);
        return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: corsHeaders });
      }
    }
  }

  // 2. E-mail de Redefinição de Senha
  if (url.pathname === "/api/email/reset-password" || url.pathname === "/api/email/reset-password/") {
    if (req.method === "POST") {
      try {
        const body = await req.json();
        const to = body.to || body.email;
        if (!to) {
          return new Response(JSON.stringify({ error: "Campo 'to' é obrigatório" }), { status: 400, headers: corsHeaders });
        }

        const matchedUser = findUserByAnyIdentifier(to, serverState.users);
        const nomeUsuario = body.nomeUsuario || body.fullName || matchedUser?.fullName || "Atleta";
        const maskedEmail = body.maskedEmail || to;
        const resetLink = body.resetLink || "https://www.netfits.com.br/auth?action=reset";

        const result = await sendPasswordResetEmail({ to, nomeUsuario, maskedEmail, resetLink });
        return new Response(JSON.stringify({ success: true, result }), { status: 200, headers: corsHeaders });
      } catch (err: any) {
        console.error("[api/email/reset-password] Erro:", err);
        return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: corsHeaders });
      }
    }
  }

  // 3. E-mail de Pontos Creditados (+X nfs com Lote e Validade FEFO)
  if (url.pathname === "/api/email/points-credited" || url.pathname === "/api/email/points-credited/") {
    if (req.method === "POST") {
      try {
        const body = await req.json();
        const to = body.to || body.email;
        if (!to) {
          return new Response(JSON.stringify({ error: "Campo 'to' é obrigatório" }), { status: 400, headers: corsHeaders });
        }
        const pontos = body.pontos;
        if (pontos === undefined || pontos === null) {
          return new Response(JSON.stringify({ error: "Campo 'pontos' é obrigatório" }), { status: 400, headers: corsHeaders });
        }

        const matchedUser = findUserByAnyIdentifier(to, serverState.users);
        const nomeUsuario = body.nomeUsuario || body.fullName || matchedUser?.fullName || "Atleta";
        const origem = body.origem || "Atividade no App";
        const saldoTotal = body.saldoTotal ?? matchedUser?.nfsBalance ?? pontos;
        const dataHora = body.dataHora || new Date().toLocaleString("pt-BR");
        const categoria = body.categoria;
        const validadeMeses = body.validadeMeses ?? serverState.operationalParams.pointsValidityMonths ?? 24;
        const transacaoId = body.transacaoId;

        const result = await sendPointsCreditedEmail({
          to,
          nomeUsuario,
          pontos,
          origem,
          saldoTotal,
          dataHora,
          categoria,
          validadeMeses,
          transacaoId,
          appUrl: body.appUrl || "https://www.netfits.com.br",
        });

        return new Response(JSON.stringify({ success: true, result }), { status: 200, headers: corsHeaders });
      } catch (err: any) {
        console.error("[api/email/points-credited] Erro:", err);
        return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: corsHeaders });
      }
    }
  }

  // 4. E-mail de Pedido Confirmado no Shop (Com Demonstrativo Financeiro Completo)
  if (url.pathname === "/api/email/order-confirmed" || url.pathname === "/api/email/order-confirmed/") {
    if (req.method === "POST") {
      try {
        const body = await req.json();
        const to = body.to || body.email;
        const numeroPedido = body.numeroPedido || body.orderId || body.orderRef;
        if (!to || !numeroPedido) {
          return new Response(JSON.stringify({ error: "Campos 'to' e 'numeroPedido' são obrigatórios" }), { status: 400, headers: corsHeaders });
        }

        const matchedUser = findUserByAnyIdentifier(to, serverState.users);
        const nomeUsuario = body.nomeUsuario || body.fullName || matchedUser?.fullName || "Atleta";
        const saldoRestante = body.saldoRestante ?? matchedUser?.nfsBalance;
        const enderecoEntrega = body.enderecoEntrega || matchedUser?.address || "Endereço cadastrado no app";

        const result = await sendShopOrderConfirmedEmail({
          to,
          nomeUsuario,
          numeroPedido,
          produto: body.produto || "Produtos Netfits Shop",
          parceiro: body.parceiro || body.loja || "Netfits Shop",
          quantidade: body.quantidade || 1,
          valorSubtotal: body.valorSubtotal,
          pontosUtilizados: body.pontosUtilizados || 0,
          valorDescontoPontos: body.valorDescontoPontos,
          valorFrete: body.valorFrete || "Grátis",
          formaPagamento: body.formaPagamento || "Cartão de Crédito",
          valorTotalPago: body.valorTotalPago,
          saldoRestante,
          cashbackGerado: body.cashbackGerado,
          corStatusCashback: body.corStatusCashback,
          textoStatusCashback: body.textoStatusCashback,
          previsaoEntrega: body.previsaoEntrega || "03 a 05 dias úteis",
          enderecoEntrega,
          dataCompra: body.dataCompra || new Date().toLocaleDateString("pt-BR"),
          appUrl: body.appUrl || "https://www.netfits.com.br",
        });

        return new Response(JSON.stringify({ success: true, result }), { status: 200, headers: corsHeaders });
      } catch (err: any) {
        console.error("[api/email/order-confirmed] Erro:", err);
        return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: corsHeaders });
      }
    }
  }

  // 5. E-mail de Pesquisa de Satisfação NPS
  if (url.pathname === "/api/email/nps-survey" || url.pathname === "/api/email/nps-survey/") {
    if (req.method === "POST") {
      try {
        const body = await req.json();
        const to = body.to || body.email;
        if (!to) {
          return new Response(JSON.stringify({ error: "Campo 'to' é obrigatório" }), { status: 400, headers: corsHeaders });
        }

        const matchedUser = findUserByAnyIdentifier(to, serverState.users);
        const nomeUsuario = body.nomeUsuario || body.fullName || matchedUser?.fullName || "Atleta";

        const result = await sendNpsSurveyEmail({
          to,
          nomeUsuario,
          tipoPesquisa: body.tipoPesquisa || "experiencia_geral",
          numeroPedido: body.numeroPedido || body.orderId,
          produto: body.produto,
          appUrl: body.appUrl || "https://www.netfits.com.br",
        });

        return new Response(JSON.stringify({ success: true, result }), { status: 200, headers: corsHeaders });
      } catch (err: any) {
        console.error("[api/email/nps-survey] Erro:", err);
        return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: corsHeaders });
      }
    }
  }

  // 6. E-mail de Assinatura do Clube Netfits (NOVO)
  if (url.pathname === "/api/email/club-subscription" || url.pathname === "/api/email/club-subscription/") {
    if (req.method === "POST") {
      try {
        const body = await req.json();
        const to = body.to || body.email;
        if (!to) {
          return new Response(JSON.stringify({ error: "Campo 'to' é obrigatório" }), { status: 400, headers: corsHeaders });
        }

        const matchedUser = findUserByAnyIdentifier(to, serverState.users);
        const nomeUsuario = body.nomeUsuario || body.fullName || matchedUser?.fullName || "Assinante VIP";
        const pontosAdesao = body.pontosAdesao ?? 250;
        const pontosPorTreino = body.pontosPorTreino ?? serverState.operationalParams.nfsPerWorkout ?? 25;
        const valorMensalidadeBrl = body.valorMensalidadeBrl ?? serverState.operationalParams.netfitsClubMonthlyFeeBrl ?? 19.90;
        const saldoTotal = body.saldoTotal ?? matchedUser?.nfsBalance;

        const result = await sendClubSubscriptionEmail({
          to,
          nomeUsuario,
          planoNome: body.planoNome || "Clube Netfits Oficial",
          valorMensalidadeBrl,
          pontosAdesao,
          pontosPorTreino,
          saldoTotal,
          vigenciaFim: body.vigenciaFim,
          appUrl: body.appUrl || "https://www.netfits.com.br",
        });

        return new Response(JSON.stringify({ success: true, result }), { status: 200, headers: corsHeaders });
      } catch (err: any) {
        console.error("[api/email/club-subscription] Erro:", err);
        return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: corsHeaders });
      }
    }
  }

  // 7. E-mail de Indicação Concluída MGM (NOVO)
  if (url.pathname === "/api/email/referral-completed" || url.pathname === "/api/email/referral-completed/") {
    if (req.method === "POST") {
      try {
        const body = await req.json();
        const to = body.to || body.email;
        if (!to) {
          return new Response(JSON.stringify({ error: "Campo 'to' é obrigatório" }), { status: 400, headers: corsHeaders });
        }

        const matchedUser = findUserByAnyIdentifier(to, serverState.users);
        const nomeUsuario = body.nomeUsuario || body.fullName || matchedUser?.fullName || "Atleta";
        const pontosCreditados = body.pontosCreditados ?? serverState.operationalParams.normalUserNewReferralBonusNfs ?? 50;
        const saldoAtual = body.saldoAtual ?? matchedUser?.nfsBalance;
        const referralCode = body.referralCode || matchedUser?.referralCode;

        const result = await sendReferralCompletedEmail({
          to,
          nomeUsuario,
          nomeAmigoIndicado: body.nomeAmigoIndicado || "Seu amigo",
          pontosCreditados,
          saldoAtual,
          referralCode,
          appUrl: body.appUrl || "https://www.netfits.com.br",
        });

        return new Response(JSON.stringify({ success: true, result }), { status: 200, headers: corsHeaders });
      } catch (err: any) {
        console.error("[api/email/referral-completed] Erro:", err);
        return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: corsHeaders });
      }
    }
  }

  return null;
}
