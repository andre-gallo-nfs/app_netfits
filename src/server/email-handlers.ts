import {
  sendWelcomeEmail,
  sendPasswordResetEmail,
  sendPointsCreditedEmail,
  sendShopOrderConfirmedEmail,
  sendNpsSurveyEmail,
} from "../lib/emails/email-service.ts";

export async function handleEmailRoutes(req: Request, url: URL, corsHeaders: Record<string, string>): Promise<Response | null> {
  if (url.pathname === "/api/email/welcome" || url.pathname === "/api/email/welcome/") {
    if (req.method === "POST") {
      try {
        const body = await req.json();
        const to = body.to || body.email;
        const nomeUsuario = body.nomeUsuario || body.fullName || "Atleta";
        if (!to) {
          return new Response(JSON.stringify({ error: "Campo 'to' é obrigatório" }), { status: 400, headers: corsHeaders });
        }
        const result = await sendWelcomeEmail({ to, nomeUsuario });
        return new Response(JSON.stringify({ success: true, result }), { status: 200, headers: corsHeaders });
      } catch (err: any) {
        console.error("[api/email/welcome] Erro:", err);
        return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: corsHeaders });
      }
    }
  }

  if (url.pathname === "/api/email/reset-password" || url.pathname === "/api/email/reset-password/") {
    if (req.method === "POST") {
      try {
        const body = await req.json();
        const to = body.to || body.email;
        const nomeUsuario = body.nomeUsuario || body.fullName || "Atleta";
        const maskedEmail = body.maskedEmail || to;
        const resetLink = body.resetLink || "https://www.netfits.com.br/auth?action=reset";
        if (!to) {
          return new Response(JSON.stringify({ error: "Campo 'to' é obrigatório" }), { status: 400, headers: corsHeaders });
        }
        const result = await sendPasswordResetEmail({ to, nomeUsuario, maskedEmail, resetLink });
        return new Response(JSON.stringify({ success: true, result }), { status: 200, headers: corsHeaders });
      } catch (err: any) {
        console.error("[api/email/reset-password] Erro:", err);
        return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: corsHeaders });
      }
    }
  }

  if (url.pathname === "/api/email/points-credited" || url.pathname === "/api/email/points-credited/") {
    if (req.method === "POST") {
      try {
        const body = await req.json();
        const to = body.to || body.email;
        const nomeUsuario = body.nomeUsuario || body.fullName || "Atleta";
        const pontos = body.pontos;
        const origem = body.origem || "Atividade no App";
        const saldoTotal = body.saldoTotal ?? pontos;
        const dataHora = body.dataHora;
        if (!to) {
          return new Response(JSON.stringify({ error: "Campo 'to' é obrigatório" }), { status: 400, headers: corsHeaders });
        }
        if (pontos === undefined || pontos === null) {
          return new Response(JSON.stringify({ error: "Campo 'pontos' é obrigatório" }), { status: 400, headers: corsHeaders });
        }
        const result = await sendPointsCreditedEmail({ to, nomeUsuario, pontos, origem, saldoTotal, dataHora });
        return new Response(JSON.stringify({ success: true, result }), { status: 200, headers: corsHeaders });
      } catch (err: any) {
        console.error("[api/email/points-credited] Erro:", err);
        return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: corsHeaders });
      }
    }
  }

  if (url.pathname === "/api/email/order-confirmed" || url.pathname === "/api/email/order-confirmed/") {
    if (req.method === "POST") {
      try {
        const body = await req.json();
        const to = body.to || body.email;
        const numeroPedido = body.numeroPedido || body.orderId || body.orderRef;
        if (!to || !numeroPedido) {
          return new Response(JSON.stringify({ error: "Campos 'to' e 'numeroPedido' são obrigatórios" }), { status: 400, headers: corsHeaders });
        }
        const result = await sendShopOrderConfirmedEmail({
          to,
          nomeUsuario: body.nomeUsuario || body.fullName || "Atleta",
          numeroPedido,
          produto: body.produto || "Produtos Netfits Shop",
          parceiro: body.parceiro || body.loja || "Netfits Shop",
          quantidade: body.quantidade || 1,
          valorSubtotal: body.valorSubtotal,
          pontosUtilizados: body.pontosUtilizados || 0,
          valorDescontoPontos: body.valorDescontoPontos,
          valorFrete: body.valorFrete,
          formaPagamento: body.formaPagamento,
          valorTotalPago: body.valorTotalPago,
          saldoRestante: body.saldoRestante,
          corStatusCashback: body.corStatusCashback,
          textoStatusCashback: body.textoStatusCashback,
          previsaoEntrega: body.previsaoEntrega,
          enderecoEntrega: body.enderecoEntrega,
          dataCompra: body.dataCompra,
        });
        return new Response(JSON.stringify({ success: true, result }), { status: 200, headers: corsHeaders });
      } catch (err: any) {
        console.error("[api/email/order-confirmed] Erro:", err);
        return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: corsHeaders });
      }
    }
  }

  if (url.pathname === "/api/email/nps-survey" || url.pathname === "/api/email/nps-survey/") {
    if (req.method === "POST") {
      try {
        const body = await req.json();
        const to = body.to || body.email;
        if (!to) {
          return new Response(JSON.stringify({ error: "Campo 'to' é obrigatório" }), { status: 400, headers: corsHeaders });
        }
        const result = await sendNpsSurveyEmail({
          to,
          nomeUsuario: body.nomeUsuario || body.fullName || "Atleta",
          tipoPesquisa: body.tipoPesquisa || "experiencia_geral",
          numeroPedido: body.numeroPedido || body.orderId,
          produto: body.produto,
          appUrl: body.appUrl,
        });
        return new Response(JSON.stringify({ success: true, result }), { status: 200, headers: corsHeaders });
      } catch (err: any) {
        console.error("[api/email/nps-survey] Erro:", err);
        return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: corsHeaders });
      }
    }
  }

  return null;
}
