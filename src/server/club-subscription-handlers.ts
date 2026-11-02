import { sendClubSubscriptionEmail } from "../lib/emails/email-service.ts";
import { serverState } from "./server-state.ts";

export interface ClubSubscriptionPayload {
  event: "subscription.created" | "subscription.renewed" | "subscription.past_due" | "subscription.canceled";
  subscriptionId: string;
  userId?: string;
  email?: string;
  cpf?: string;
  planId: "club_monthly" | "club_annual" | "club_vip";
  planName: string;
  amountBrl: number;
  status: "active" | "past_due" | "canceled";
  currentPeriodEnd: string;
  gateway?: "stripe" | "asaas" | "rock_encantech";
}

export async function handleClubSubscriptionRoutes(
  req: Request,
  url: URL,
  corsHeaders: Record<string, string>
): Promise<Response | null> {
  // Webhook de Notificação do Gateway de Pagamento
  if (url.pathname === "/api/club/subscription-webhook" || url.pathname === "/api/club/subscription-webhook/") {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method Not Allowed", message: "Use POST" }), {
        status: 405,
        headers: corsHeaders,
      });
    }

    try {
      const body: ClubSubscriptionPayload = await req.json();
      const requestTimestamp = new Date().toISOString();

      if (!body.event || !body.subscriptionId) {
        return new Response(
          JSON.stringify({ error: "Bad Request", message: "Missing required fields 'event' or 'subscriptionId'" }),
          { status: 400, headers: corsHeaders }
        );
      }

      // Localizar o usuário por ID, e-mail ou CPF
      const user = serverState.users.find(
        (u) =>
          (body.userId && u.id === body.userId) ||
          (body.email && u.email?.toLowerCase() === body.email.toLowerCase()) ||
          (body.cpf && u.cpf?.replace(/\D/g, "") === body.cpf.replace(/\D/g, ""))
      );

      if (!user) {
        return new Response(
          JSON.stringify({
            success: false,
            message: `Usuário associado à assinatura ${body.subscriptionId} não foi encontrado no sistema.`,
          }),
          { status: 404, headers: corsHeaders }
        );
      }

      const isActivating = body.event === "subscription.created" || body.event === "subscription.renewed";
      const isDeactivating = body.event === "subscription.past_due" || body.event === "subscription.canceled";

      if (isActivating) {
        const pontosAdesao = 250; // Regra GEMINI.md: 250 nfs na assinatura e a cada mensalidade
        user.isClubMember = true;
        user.userCategory = "associado";
        user.nfsBalance = (Number(user.nfsBalance) || 0) + pontosAdesao;

        // Registrar evento de auditoria no ledger oficial com os 250 nfs
        serverState.transactions.unshift({
          id: `tx-club-sub-${Date.now()}`,
          userId: user.id,
          userName: user.fullName || "Assinante Clube Netfits",
          amount: pontosAdesao,
          description: `👑 Adesão/Mensalidade Clube Netfits VIP (+${pontosAdesao} nfs)`,
          category: "general",
          timestamp: requestTimestamp,
        });

        serverState.touchSync();

        // Disparo imediato do E-mail Transacional de Boas-Vindas ao Clube
        if (user.email && user.email.includes("@")) {
          sendClubSubscriptionEmail({
            to: user.email,
            nomeUsuario: user.fullName || "Assinante VIP",
            planoNome: body.planName || "Clube Netfits Oficial",
            valorMensalidadeBrl: body.amountBrl || 19.90,
            pontosAdesao,
            pontosPorTreino: serverState.operationalParams.nfsPerWorkout || 25,
            saldoTotal: user.nfsBalance,
            vigenciaFim: body.currentPeriodEnd,
          }).catch((err) => console.warn("[Club Email] Falha no disparo de confirmação do clube:", err));
        }

        return new Response(
          JSON.stringify({
            success: true,
            message: "Assinatura do Clube Netfits confirmada, +250 nfs creditados e benefícios ativados.",
            userId: user.id,
            isClubMember: true,
            userCategory: "associado",
            pointsCredited: pontosAdesao,
            currentBalance: user.nfsBalance,
            currentPeriodEnd: body.currentPeriodEnd,
          }),
          { status: 200, headers: corsHeaders }
        );
      }

      if (isDeactivating) {
        user.isClubMember = false;
        user.userCategory = "atleta"; // Reverte para perfil padrão

        serverState.transactions.unshift({
          id: `tx-club-cancel-${Date.now()}`,
          userId: user.id,
          userName: user.fullName || "Ex-Assinante Clube Netfits",
          amount: 0,
          description: `⚠️ Suspensão de benefícios do Clube Netfits: ${body.event}`,
          category: "general",
          timestamp: requestTimestamp,
        });

        serverState.touchSync();

        return new Response(
          JSON.stringify({
            success: true,
            message: "Benefícios do Clube Netfits suspensos com sucesso.",
            userId: user.id,
            isClubMember: false,
            userCategory: "atleta",
            reason: body.event,
          }),
          { status: 200, headers: corsHeaders }
        );
      }

      return new Response(
        JSON.stringify({ success: true, message: `Evento ${body.event} recebido sem ação necessária.` }),
        { status: 200, headers: corsHeaders }
      );
    } catch (err: any) {
      return new Response(
        JSON.stringify({ error: "Internal Server Error", message: err?.message }),
        { status: 500, headers: corsHeaders }
      );
    }
  }

  // Consulta de Status de Assinatura do Atleta
  if (url.pathname === "/api/club/subscription-status" || url.pathname === "/api/club/subscription-status/") {
    const userId = url.searchParams.get("userId") || url.searchParams.get("id");
    if (!userId) {
      return new Response(JSON.stringify({ error: "Bad Request", message: "Param 'userId' is required" }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const user = serverState.users.find((u) => u.id === userId || u.email === userId);
    if (!user) {
      return new Response(JSON.stringify({ error: "Not Found", message: "User not found" }), {
        status: 404,
        headers: corsHeaders,
      });
    }

    const isClub = user.isClubMember === true || user.userCategory === "associado";

    return new Response(
      JSON.stringify({
        userId: user.id,
        fullName: user.fullName,
        isClubMember: isClub,
        userCategory: user.userCategory,
        workoutRewardsEligible: isClub && serverState.operationalParams.workoutRewardClubOnly === true,
        commissionRatePct: isClub ? 10.0 : 0.0,
      }),
      { status: 200, headers: corsHeaders }
    );
  }

  return null;
}
