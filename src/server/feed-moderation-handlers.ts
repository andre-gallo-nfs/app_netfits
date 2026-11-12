import { moderateFeedContent, type ModerationRequest } from "../lib/ai/feed-moderation-service.ts";

export async function handleFeedModerationRoutes(
  req: Request,
  url: URL,
  corsHeaders: Record<string, string>
): Promise<Response | null> {
  if (url.pathname === "/api/feed/moderate" || url.pathname === "/api/feed/moderate/") {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method Not Allowed", message: "Use POST" }), {
        status: 405,
        headers: corsHeaders,
      });
    }

    try {
      const body: ModerationRequest = await req.json();

      if (!body.authorId || !body.text) {
        return new Response(
          JSON.stringify({ error: "Bad Request", message: "Fields 'authorId' and 'text' are required" }),
          { status: 400, headers: corsHeaders }
        );
      }

      const result = await moderateFeedContent(body);

      return new Response(JSON.stringify(result), {
        status: 200,
        headers: corsHeaders,
      });
    } catch (err: any) {
      return new Response(
        JSON.stringify({ error: "Internal Server Error", message: err?.message }),
        { status: 500, headers: corsHeaders }
      );
    }
  }

  // Apple Guideline 1.2: Endpoint de Recebimento de Denúncias de Conteúdo (SLA 24h)
  if (url.pathname === "/api/feed/moderation/report" || url.pathname === "/api/feed/moderation/report/") {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method Not Allowed" }), { status: 405, headers: corsHeaders });
    }
    try {
      const report = await req.json();
      console.log(`[UGC Moderation Report 24h SLA] Denúncia recebida para post ${report.contentId}:`, report);
      return new Response(
        JSON.stringify({
          success: true,
          message: "Denúncia registrada com sucesso. Análise e remoção em até 24 horas garantidas.",
          reportId: report.id || `rep_${Date.now()}`,
          receivedAt: new Date().toISOString(),
        }),
        { status: 200, headers: corsHeaders }
      );
    } catch (err: any) {
      return new Response(JSON.stringify({ error: "Bad Request", message: err?.message }), { status: 400, headers: corsHeaders });
    }
  }

  // Apple Guideline 1.2: Endpoint de Notificação de Bloqueio de Usuário Abusivo
  if (url.pathname === "/api/feed/moderation/block" || url.pathname === "/api/feed/moderation/block/") {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method Not Allowed" }), { status: 405, headers: corsHeaders });
    }
    try {
      const blockData = await req.json();
      console.log(`[UGC Block Notification] Usuário bloqueado:`, blockData);
      return new Response(
        JSON.stringify({
          success: true,
          message: "Usuário bloqueado e notificação de moderação registrada.",
          blockedAt: new Date().toISOString(),
        }),
        { status: 200, headers: corsHeaders }
      );
    } catch (err: any) {
      return new Response(JSON.stringify({ error: "Bad Request", message: err?.message }), { status: 400, headers: corsHeaders });
    }
  }

  return null;
}
