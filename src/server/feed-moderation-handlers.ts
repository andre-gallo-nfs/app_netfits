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

  return null;
}
