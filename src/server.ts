import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/react-start/server";

// Cache de Sincronização em Nuvem / Servidor para Testes Multi-Dispositivo
let globalServerUsers: any[] = [];
let lastSyncTimestamp = new Date().toISOString();

const handler = createStartHandler(defaultStreamHandler);

export default {
  async fetch(req: Request) {
    const url = new URL(req.url);

    // Endpoint de Sincronização Global de Usuários de Teste (/api/users-sync)
    if (url.pathname === "/api/users-sync" || url.pathname === "/api/users-sync/") {
      const corsHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
      };

      if (req.method === "OPTIONS") {
        return new Response(null, { status: 204, headers: corsHeaders });
      }

      if (req.method === "POST") {
        try {
          const body = await req.json();
          const incomingUsers = Array.isArray(body?.users)
            ? body.users
            : body?.user
            ? [body.user]
            : [];

          const userMap = new Map<string, any>();
          for (const u of globalServerUsers) {
            if (u && u.id) userMap.set(u.id, u);
          }
          for (const u of incomingUsers) {
            if (u && u.id) {
              const existing = userMap.get(u.id);
              userMap.set(u.id, { ...existing, ...u });
            }
          }
          globalServerUsers = Array.from(userMap.values());
          lastSyncTimestamp = new Date().toISOString();

          return new Response(
            JSON.stringify({
              success: true,
              count: globalServerUsers.length,
              users: globalServerUsers,
              updatedAt: lastSyncTimestamp,
            }),
            { status: 200, headers: corsHeaders }
          );
        } catch (err) {
          return new Response(
            JSON.stringify({ success: false, error: String(err) }),
            { status: 400, headers: corsHeaders }
          );
        }
      }

      // GET: Retornar todos os usuários sincronizados no servidor
      return new Response(
        JSON.stringify({
          success: true,
          count: globalServerUsers.length,
          users: globalServerUsers,
          updatedAt: lastSyncTimestamp,
        }),
        { status: 200, headers: corsHeaders }
      );
    }

    return handler(req);
  },
};
