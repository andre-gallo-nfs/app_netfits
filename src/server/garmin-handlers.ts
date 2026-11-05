import { serverState } from "./server-state.ts";

/**
 * 🧭 Netfits — Garmin Connect Developer Program Webhook & Handshake Handlers
 * 
 * Cumpre os requisitos oficiais de integração com Garmin Connect Cloud (Activity API & Health API):
 * 1. GET: Handshake de Verificação (Challenge Response) para cadastro no Garmin Developer Portal.
 * 2. POST: Ingestão de Webhooks de Atividades Esportivas e Métricas Diárias de Saúde.
 * 3. GET /status: Endpoint de verificação de prontidão da integração Garmin.
 */

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
      // Resposta oficial ao teste de validação do portal Garmin
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
  // 2. Recepção de Webhook Push de Treinos da Garmin (POST /api/webhooks/garmin)
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

      // Notificação de sucesso à Garmin (200 OK imediato para evitar retransmissões)
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
  // 3. Status da Integração Garmin (GET /api/garmin/status)
  // =========================================================================
  if (isGarminStatus) {
    return new Response(
      JSON.stringify({
        status: "ready",
        program: "Garmin Connect Developer Program",
        tier: "Starter Access (Business)",
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
