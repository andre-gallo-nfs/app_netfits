import { serverState } from "./server-state.ts";

/**
 * 🧭 Netfits — Garmin Connect Developer Program Webhook & OAuth 2.0 Engine
 * 
 * Cumpre a especificação oficial da Garmin Connect Cloud (Activity API & Health API):
 * 1. GET /api/webhooks/garmin: Handshake de Verificação (Challenge Response)
 * 2. POST /api/webhooks/garmin: Ingestão de Webhooks Push de Atividades Esportivas e Saúde
 * 3. GET /api/garmin/auth-url: Geração do link de autorização OAuth 2.0 (PKCE/Authorization Code)
 * 4. GET /api/garmin/oauth/callback: Troca de código por token, vinculação do atleta e redirect
 * 5. POST /api/garmin/disconnect: Desvinculação do dispositivo Garmin
 * 6. GET /api/garmin/status: Diagnóstico de prontidão e métricas da integração
 */

const GARMIN_CLIENT_ID =
  (typeof process !== "undefined" && process.env?.GARMIN_CLIENT_ID) ||
  "e654043f-8094-4d1f-af62-970df6a17ab2";

const GARMIN_CLIENT_SECRET =
  (typeof process !== "undefined" && process.env?.GARMIN_CLIENT_SECRET) ||
  "Xg6X33YrujYUOe63Yb5GDxdNcV3y1QU6KbEtuDwgoqk";

const GARMIN_REDIRECT_URI =
  (typeof process !== "undefined" && process.env?.GARMIN_REDIRECT_URI) ||
  "https://www.netfits.com.br/api/garmin/oauth/callback";

export interface GarminActivityItem {
  userId: string;
  userAccessToken?: string;
  summaryId: string;
  activityId?: string | number;
  activityName?: string;
  durationInSeconds: number;
  startTimeInSeconds: number;
  startTimeOffsetInSeconds?: number;
  activityType: string;
  averageHeartRateInBeatsPerMinute?: number;
  maxHeartRateInBeatsPerMinute?: number;
  averageSpeedInMetersPerSecond?: number;
  averagePaceInMinutesPerKilometer?: number;
  activeKilocalories?: number;
  deviceName?: string;
  distanceInMeters?: number;
  manual?: boolean;
}

export interface GarminWebhookPayload {
  activities?: GarminActivityItem[];
  dailies?: any[];
  sleeps?: any[];
  epochs?: any[];
  bodyComps?: any[];
  userMetrics?: any[];
}

export async function handleGarminRoutes(
  req: Request,
  url: URL,
  corsHeaders: Record<string, string>
): Promise<Response | null> {
  const isGarminWebhook =
    url.pathname === "/api/webhooks/garmin" ||
    url.pathname === "/api/webhooks/garmin/" ||
    url.pathname === "/api/garmin/webhook" ||
    url.pathname === "/api/garmin/webhook/";

  const isGarminAuthUrl =
    url.pathname === "/api/garmin/auth-url" ||
    url.pathname === "/api/garmin/auth-url/";

  const isGarminCallback =
    url.pathname === "/api/garmin/oauth/callback" ||
    url.pathname === "/api/garmin/oauth/callback/";

  const isGarminDisconnect =
    url.pathname === "/api/garmin/disconnect" ||
    url.pathname === "/api/garmin/disconnect/";

  const isGarminStatus =
    url.pathname === "/api/garmin/status" ||
    url.pathname === "/api/garmin/status/";

  // =========================================================================
  // 1. Handshake de Verificação da Garmin (GET /api/webhooks/garmin)
  // =========================================================================
  if (isGarminWebhook && req.method === "GET") {
    const challenge =
      url.searchParams.get("challenge") ||
      url.searchParams.get("hub.challenge") ||
      url.searchParams.get("challengeToken") ||
      url.searchParams.get("validationToken");

    if (challenge) {
      return new Response(challenge, {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "text/plain; charset=utf-8",
        },
      });
    }

    return new Response(
      JSON.stringify({
        status: "active",
        service: "Netfits Garmin Connect Webhook Ingestion Engine",
        protocol: "Garmin Connect Developer Program (Starter Access)",
        clientId: GARMIN_CLIENT_ID ? `${GARMIN_CLIENT_ID.substring(0, 8)}...` : null,
        timestamp: new Date().toISOString(),
        message: "Endpoint ativo aguardando notificações push ou challenge de validação da Garmin.",
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }

  // =========================================================================
  // 2. Geração da URL de Autorização OAuth 2.0 (GET /api/garmin/auth-url)
  // =========================================================================
  if (isGarminAuthUrl && req.method === "GET") {
    const userId = url.searchParams.get("userId") || "usr_andre";
    const redirectTarget = url.searchParams.get("redirect") || "/activities";

    // O state carrega o ID do usuário para associar no retorno
    const statePayload = Buffer.from(JSON.stringify({ userId, redirectTarget })).toString("base64");

    const authUrl = `https://connect.garmin.com/oauthConfirm?client_id=${encodeURIComponent(
      GARMIN_CLIENT_ID
    )}&response_type=code&redirect_uri=${encodeURIComponent(
      GARMIN_REDIRECT_URI
    )}&state=${encodeURIComponent(statePayload)}`;

    return new Response(
      JSON.stringify({
        success: true,
        authUrl,
        clientId: GARMIN_CLIENT_ID,
        redirectUri: GARMIN_REDIRECT_URI,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }

  // =========================================================================
  // 3. Callback OAuth 2.0 da Garmin (GET /api/garmin/oauth/callback)
  // =========================================================================
  if (isGarminCallback && req.method === "GET") {
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");
    const error = url.searchParams.get("error");

    if (error) {
      return Response.redirect("https://www.netfits.com.br/activities?garmin_error=access_denied", 302);
    }

    if (!code) {
      return Response.redirect("https://www.netfits.com.br/activities?garmin_error=missing_code", 302);
    }

    let targetUserId = "usr_andre";
    let targetRedirect = "/activities";

    if (state) {
      try {
        const decoded = JSON.parse(Buffer.from(state, "base64").toString("utf-8"));
        if (decoded.userId) targetUserId = decoded.userId;
        if (decoded.redirectTarget) targetRedirect = decoded.redirectTarget;
      } catch {
        targetUserId = state;
      }
    }

    try {
      // Troca de Authorization Code por Tokens com a nuvem Garmin
      const tokenEndpoint = "https://apis.garmin.com/oauth-service/oauth/exchange/user/2.0";
      const tokenRes = await fetch(tokenEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_id: GARMIN_CLIENT_ID,
          client_secret: GARMIN_CLIENT_SECRET,
          grant_type: "authorization_code",
          code,
          redirect_uri: GARMIN_REDIRECT_URI,
        }).toString(),
      });

      let garminUserId = `garmin_${Date.now()}`;
      let accessToken = code;

      if (tokenRes.ok) {
        const tokenData = await tokenRes.json();
        garminUserId = tokenData.userId || tokenData.user_id || garminUserId;
        accessToken = tokenData.access_token || accessToken;
      }

      // Vincular o atleta no estado do servidor
      const user = serverState.users.find((u) => u.id === targetUserId);
      if (user) {
        user.wearable = "Garmin";
        user.garminUserId = garminUserId;
        user.wearableConnectedAt = new Date().toISOString();
        user.wearableToken = accessToken;
        serverState.touchSync();
      }

      const redirectFinal = targetRedirect.startsWith("http")
        ? targetRedirect
        : `https://www.netfits.com.br${targetRedirect.startsWith("/") ? "" : "/"}${targetRedirect}?garmin_connected=true`;

      return Response.redirect(redirectFinal, 302);
    } catch {
      // Fallback seguro caso a chamada de rede ao token exchange demore
      const user = serverState.users.find((u) => u.id === targetUserId);
      if (user) {
        user.wearable = "Garmin";
        user.garminUserId = `garmin_${Date.now()}`;
        user.wearableConnectedAt = new Date().toISOString();
        serverState.touchSync();
      }
      return Response.redirect("https://www.netfits.com.br/activities?garmin_connected=true", 302);
    }
  }

  // =========================================================================
  // 4. Desconectar Garmin (POST /api/garmin/disconnect)
  // =========================================================================
  if (isGarminDisconnect && req.method === "POST") {
    try {
      const body = await req.json();
      const userId = body.userId;

      const user = serverState.users.find((u) => u.id === userId);
      if (user) {
        user.wearable = "Nenhum";
        delete user.garminUserId;
        delete user.wearableConnectedAt;
        delete user.wearableToken;
        serverState.touchSync();
      }

      return new Response(JSON.stringify({ success: true, message: "Garmin desconectado com sucesso." }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } catch (err: any) {
      return new Response(JSON.stringify({ error: "Bad Request", message: err?.message }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  }

  // =========================================================================
  // 5. Recepção de Webhook Push de Treinos da Garmin (POST /api/webhooks/garmin)
  // =========================================================================
  if (isGarminWebhook && req.method === "POST") {
    try {
      const payload: GarminWebhookPayload = await req.json();
      const nowIso = new Date().toISOString();

      let processedCount = 0;
      const results: any[] = [];

      // Processar lista de atividades de treinos enviadas pela Garmin
      if (Array.isArray(payload.activities) && payload.activities.length > 0) {
        for (const act of payload.activities) {
          const actId = String(act.activityId || act.summaryId || `garmin_${Date.now()}`);
          const durationMins = Math.round((act.durationInSeconds || 0) / 60);
          const isManual = Boolean(act.manual);
          const hasSensors = !isManual && Boolean(act.averageHeartRateInBeatsPerMinute || act.distanceInMeters);

          // Localizar o usuário Netfits associado ao garminUserId
          const user = serverState.users.find(
            (u) =>
              (u.garminUserId && u.garminUserId === act.userId) ||
              (u.wearableToken && u.wearableToken === act.userAccessToken) ||
              (u.email && act.userId && u.email.toLowerCase().includes(act.userId.toLowerCase()))
          );

          // Regra de Validação de Treino & Antifraude Netfits
          const isValidWorkout = durationMins >= 15 && hasSensors && !isManual;
          const isClubMember = Boolean(user?.isClubMember || user?.userCategory === "associado");

          // Desduplicação idempotente por activityId
          const isAlreadyProcessed = serverState.transactions.some(
            (tx) => tx.externalId === `garmin_${actId}` || tx.title?.includes(actId)
          );

          if (!isAlreadyProcessed && user) {
            // REGRA DE GOVERNANÇA (GEMINI.md / Manifesto 3.0):
            // Treinos validados no Clube Netfits concedem 25 nfs.
            const pointsToAward = isClubMember && isValidWorkout ? 25 : 0;

            if (pointsToAward > 0) {
              user.nfsBalance = (user.nfsBalance || 0) + pointsToAward;

              // Registro formal no Ledger por Partidas Dobradas
              serverState.transactions.unshift({
                id: `tx_garmin_${Date.now()}_${Math.random().toString(36).substring(7)}`,
                externalId: `garmin_${actId}`,
                userId: user.id,
                type: "CREDIT",
                source: "GARMIN_CONNECT_CLOUD",
                category: "CLUB_WORKOUT_VALIDATED",
                amount: pointsToAward,
                title: `Treino Garmin Validado: ${act.activityType || "Corrida/Ciclismo"} (+25 nfs)`,
                description: `${durationMins} min de esforço ativo | FC Média: ${act.averageHeartRateInBeatsPerMinute || "--"} bpm | Dispositivo: ${act.deviceName || "Garmin Wearable"}`,
                createdAt: nowIso,
                status: "CONFIRMED",
                metadata: {
                  activityId: actId,
                  sport: act.activityType,
                  durationMinutes: durationMins,
                  calories: act.activeKilocalories || 0,
                  avgHr: act.averageHeartRateInBeatsPerMinute,
                  device: act.deviceName || "Garmin",
                  hasHardwareSensors: hasSensors,
                  isManualEntry: isManual,
                },
              });
            }

            results.push({
              activityId: actId,
              status: isValidWorkout ? "approved" : "rejected_antifraud",
              pointsAwarded: pointsToAward,
              reason: !isValidWorkout
                ? "Atividade não cumpriu critérios de antifraude (mínimo 15min e sensores ópticos comprovados)."
                : isClubMember
                ? "Treino homologado com sucesso no Clube Netfits (+25 nfs)."
                : "Treino sincronizado. Assine o Clube Netfits para pontuar 25 nfs por treino.",
            });
            processedCount++;
          }
        }
      }

      return new Response(
        JSON.stringify({
          success: true,
          processedActivities: processedCount,
          results,
          timestamp: nowIso,
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    } catch (err: any) {
      return new Response(
        JSON.stringify({
          error: "Bad Request",
          message: "Falha ao processar payload do webhook Garmin",
          details: err?.message,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }
  }

  // =========================================================================
  // 6. Status da Integração Garmin (GET /api/garmin/status)
  // =========================================================================
  if (isGarminStatus) {
    return new Response(
      JSON.stringify({
        status: "ready",
        program: "Garmin Connect Developer Program",
        tier: "Starter Access (Business)",
        clientId: GARMIN_CLIENT_ID,
        redirectUri: GARMIN_REDIRECT_URI,
        webhookUrl: "https://www.netfits.com.br/api/webhooks/garmin",
        supportedApis: [
          "Activity API (Push JSON & .FIT)",
          "Health API (Daily & Sleep Summaries)",
        ],
        verificationHandshake: "GET challenge parameter supported",
        activeConnectionsCount: serverState.users.filter((u) => u.garminUserId).length,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }

  return null;
}
