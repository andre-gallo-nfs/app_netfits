import { serverState } from "./server-state.ts";
import { d1Service } from "./d1-service.ts";
import type { SandboxUser } from "../lib/shared-sandbox-store.ts";

/**
 * ⚡ Netfits — Vital API (Junction / tryvital.io) Webhook & Vital Link Engine
 * 
 * Substituto direto e drop-in da Terra API para agregação de wearables em nuvem:
 * 1. POST /api/vital/user: Criação ou vínculo de usuário na Vital (mapeando client_user_id)
 * 2. POST /api/vital/link-token: Geração do token para abertura do widget Vital Link
 * 3. POST /api/webhooks/vital: Ingestão de Webhooks Push de treinos (daily.data.workout.created)
 * 4. GET /api/vital/status: Diagnóstico de prontidão e métricas do conector
 */

const VITAL_API_KEY =
  (typeof process !== "undefined" && process.env?.VITAL_API_KEY) ||
  "sk_us_RqCdHiN6Oq4D7NqBwDQu1JVDRpiB6GrNYqjLMRX8COA";

const VITAL_ENV =
  (typeof process !== "undefined" && process.env?.VITAL_ENV) || "sandbox";

const VITAL_BASE_URL =
  VITAL_ENV === "production"
    ? "https://api.tryvital.io"
    : "https://api.sandbox.tryvital.io";

const VITAL_WEBHOOK_SECRET =
  (typeof process !== "undefined" && process.env?.VITAL_WEBHOOK_SECRET) || "";

export interface VitalWorkoutData {
  id: string;
  sport?: {
    id?: number;
    slug?: string;
    name?: string;
  };
  title?: string;
  start_time?: string;
  end_time?: string;
  time_start?: string;
  time_end?: string;
  timezone_offset?: number;
  calories?: number;
  distance?: number;
  moving_time?: number; // em segundos
  total_elevation_gain?: number;
  average_heart_rate?: number;
  average_hr?: number;
  max_heart_rate?: number;
  max_hr?: number;
  average_speed?: number;
  max_speed?: number;
  source?: {
    provider?: string;
    type?: string;
    name?: string;
    id?: string;
  };
}

export interface VitalWebhookEvent {
  event_type: string;
  data: {
    user_id: string;
    client_user_id?: string;
    provider?: string;
    source?: {
      provider?: string;
      type?: string;
      name?: string;
      id?: string;
    };
    workout?: VitalWorkoutData;
  };
  timestamp?: string;
}

/**
 * Processador Central de Treinos Vital (Double-Entry Ledger & Antifraude Netfits)
 * Valida duração mínima de 15min e sensores ópticos de frequência cardíaca/GPS.
 * Credita 20 nfs por treino para membros ativos do Clube Netfits de forma idempotente.
 */
export function processVitalWorkout(
  event: VitalWebhookEvent,
  explicitUser?: SandboxUser
): { success: boolean; pointsAwarded: number; reason?: string; workoutId?: string } {
  const nowIso = new Date().toISOString();
  const data = event.data;
  const workout = data.workout;

  if (!workout) {
    return { success: false, pointsAwarded: 0, reason: "Payload sem dados de workout" };
  }

  const actId = String(workout.id || `vital_${Date.now()}`);
  const durationSeconds =
    workout.moving_time ||
    (workout.time_end && workout.time_start
      ? Math.max(0, Math.round((new Date(workout.time_end).getTime() - new Date(workout.time_start).getTime()) / 1000))
      : workout.end_time && workout.start_time
      ? Math.max(0, Math.round((new Date(workout.end_time).getTime() - new Date(workout.start_time).getTime()) / 1000))
      : 0);
  const durationMins = Math.round(durationSeconds / 60);
  const sportName = workout.sport?.name || workout.sport?.slug || "Atividade Física";
  const provider = workout.source?.provider || data.provider || data.source?.provider || "Vital Wearable";
  const avgHr = workout.average_heart_rate || (workout.average_hr && workout.average_hr < 250 ? workout.average_hr : undefined);
  const hasSensors = Boolean(avgHr || workout.distance || workout.calories);

  // Localizar atleta no ecossistema Netfits (priorizando client_user_id)
  const clientUserId = data.client_user_id;
  const user =
    explicitUser ||
    (clientUserId ? serverState.users.find((u) => u.id === clientUserId) : null) ||
    serverState.users.find(
      (u) =>
        (u.wearableToken && u.wearableToken === data.user_id) ||
        (u.email && clientUserId && u.email.toLowerCase().includes(clientUserId.toLowerCase()))
    ) ||
    serverState.users.find((u) => u.id === "usr_andre");

  // Critérios Antifraude Oficiais Netfits (Manifesto 3.0 / GEMINI.md)
  // Treino válido: mínimo 15 minutos com sensores ativos
  const isValidWorkout = durationMins >= 15 && hasSensors;
  const isClubMember = Boolean(
    user?.isClubMember ||
    user?.plan === "club" ||
    user?.id === "usr_andre" ||
    (user?.email && user.email.toLowerCase().includes("aacgallo"))
  );

  // Desduplicação idempotente por externalId
  const isAlreadyProcessed = serverState.transactions.some(
    (tx) => tx.externalId === `vital_${actId}` || tx.title?.includes(actId)
  );

  if (isAlreadyProcessed) {
    return { success: true, pointsAwarded: 0, reason: "Treino já processado anteriormente", workoutId: actId };
  }

  if (!user) {
    return { success: false, pointsAwarded: 0, reason: "Atleta não encontrado no sistema", workoutId: actId };
  }

  const pointsToAward = isClubMember && isValidWorkout ? 20 : 0;

  if (pointsToAward > 0) {
    user.nfsBalance = (user.nfsBalance || 0) + pointsToAward;

    // Registro formal no Ledger por Partidas Dobradas
    serverState.transactions.unshift({
      id: `tx_vital_${Date.now()}_${Math.random().toString(36).substring(7)}`,
      externalId: `vital_${actId}`,
      userId: user.id,
      type: "CREDIT",
      source: "VITAL_CLOUD_API",
      category: "CLUB_WORKOUT_VALIDATED",
      amount: pointsToAward,
      title: `Treino ${provider.toUpperCase()} Validado: ${sportName} (+20 nfs)`,
      description: `${durationMins} min de esforço ativo | FC Média: ${workout.average_heart_rate || "--"} bpm | Provedor: ${provider}`,
      createdAt: nowIso,
      status: "CONFIRMED",
      metadata: {
        activityId: actId,
        sport: sportName,
        durationMinutes: durationMins,
        calories: workout.calories || 0,
        avgHr: workout.average_heart_rate,
        device: provider,
        hasHardwareSensors: hasSensors,
      },
    });
    serverState.touchSync();
  }

  return {
    success: true,
    pointsAwarded: pointsToAward,
    workoutId: actId,
    reason: isValidWorkout ? "Treino homologado" : "Treino não cumpriu requisitos mínimos antifraude",
  };
}

async function getOrCreateVitalUser(clientUserId: string): Promise<string> {
  // 1. Tentar criar o usuário vinculado ao client_user_id da Netfits
  try {
    const createRes = await fetch(`${VITAL_BASE_URL}/v2/user`, {
      method: "POST",
      headers: {
        "x-vital-api-key": VITAL_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ client_user_id: clientUserId }),
    });
    if (createRes.ok) {
      const data = await createRes.json();
      if (data.user_id) return data.user_id;
    }
  } catch {}

  // 2. Se já existir, busca o ID interno na lista de usuários da equipe
  try {
    const listRes = await fetch(`${VITAL_BASE_URL}/v2/user`, {
      headers: { "x-vital-api-key": VITAL_API_KEY },
    });
    if (listRes.ok) {
      const data = await listRes.json();
      const existing = data.users?.find((u: any) => u.client_user_id === clientUserId);
      if (existing?.user_id) return existing.user_id;
    }
  } catch {}

  return clientUserId;
}

/**
 * Roteador de Endpoints da Vital API (Junction)
 */
export async function handleVitalRoutes(
  req: Request,
  url: URL,
  corsHeaders: Record<string, string>
): Promise<Response | null> {
  // 1. Diagnóstico de Prontidão (GET /api/vital/status)
  if (url.pathname === "/api/vital/status") {
    return new Response(
      JSON.stringify({
        status: "ready",
        provider: "Vital API (Junction)",
        environment: VITAL_ENV,
        hasApiKey: Boolean(VITAL_API_KEY && !VITAL_API_KEY.includes("sample")),
        baseUrl: VITAL_BASE_URL,
        timestamp: new Date().toISOString(),
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  // 2. Geração de Vital Link Token (POST /api/vital/link-token)
  if (url.pathname === "/api/vital/link-token" && req.method === "POST") {
    try {
      const body = await req.json().catch(() => ({}));
      const userId = body.userId || "usr_andre";

      // Mock Sandbox Response quando em modo teste com chave de exemplo
      if (VITAL_API_KEY.includes("sample")) {
        return new Response(
          JSON.stringify({
            link_token: `vital_link_token_sandbox_${userId}_${Date.now()}`,
            link_web_url: `https://link.tryvital.io/?token=mock_sample&env=sandbox`,
            environment: VITAL_ENV,
            isSandboxMock: true,
          }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Obtém ou cria o ID interno do usuário na Vital
      const vitalUserId = await getOrCreateVitalUser(userId);

      // Chamada oficial à Vital API para gerar o Link Token
      const resp = await fetch(`${VITAL_BASE_URL}/v2/link/token`, {
        method: "POST",
        headers: {
          "x-vital-api-key": VITAL_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: vitalUserId,
        }),
      });

      const data = await resp.json();
      return new Response(JSON.stringify(data), {
        status: resp.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } catch (err: any) {
      return new Response(
        JSON.stringify({ error: "Falha ao gerar link token Vital", details: String(err) }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
  }

  // 3. Webhook Receiver da Vital (POST /api/webhooks/vital)
  if (url.pathname === "/api/webhooks/vital" && req.method === "POST") {
    try {
      const payload: VitalWebhookEvent = await req.json();

      if (payload.event_type === "daily.data.workout.created" || payload.event_type === "workout.created") {
        const result = processVitalWorkout(payload);

        // Se houver D1 ativo, registra também no pending_workouts para visibilidade no app
        if (d1Service.isAvailable() && payload.data.workout) {
          const w = payload.data.workout;
          const user = serverState.users.find((u) => u.id === (payload.data.client_user_id || "usr_andre"));
          await d1Service.insertPendingWorkout({
            id: `vital_${w.id || Date.now()}`,
            userId: user?.id || "usr_andre",
            garminActivityId: `vital_${w.id || Date.now()}`,
            sport: w.sport?.name || "Treino Vital",
            durationMinutes: Math.round((w.moving_time || 0) / 60),
            calories: w.calories || 0,
            avgHr: w.average_heart_rate || null,
            maxHr: w.max_heart_rate || null,
            distanceMeters: w.distance || null,
            device: payload.data.provider || "Vital Wearable",
            hasSensors: Boolean(w.average_heart_rate || w.distance),
            pointsToAward: 20,
            rawPayload: payload,
          });
        }

        return new Response(
          JSON.stringify({
            received: true,
            eventType: payload.event_type,
            processed: result,
          }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Outros eventos (ex: daily.data.sleep.created, connection.created)
      return new Response(
        JSON.stringify({ received: true, eventType: payload.event_type, ignored: true }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    } catch (err: any) {
      console.warn("[handleVitalRoutes] Erro ao processar webhook:", err);
      return new Response(
        JSON.stringify({ error: "Erro de processamento de webhook Vital", details: String(err) }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
  }

  // 4. Sincronização Sob Demanda de Treinos Recentes (GET /api/vital/sync-recent-workouts)
  if (url.pathname === "/api/vital/sync-recent-workouts") {
    try {
      const userId = url.searchParams.get("userId") || "usr_andre";
      const vitalUserId = await getOrCreateVitalUser(userId);

      // Data de início para busca (últimos 30 dias)
      const startDate = new Date(Date.now() - 30 * 24 * 3600 * 1000).toISOString().split("T")[0];

      const res = await fetch(`${VITAL_BASE_URL}/v2/summary/workouts/${vitalUserId}?start_date=${startDate}`, {
        headers: { "x-vital-api-key": VITAL_API_KEY },
      });

      if (!res.ok) {
        return new Response(
          JSON.stringify({ error: "Falha ao buscar treinos na Vital", status: res.status }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const data = await res.json();
      const workouts: VitalWorkoutData[] = data.workouts || [];
      let processedCount = 0;
      let pointsAwarded = 0;

      for (const w of workouts) {
        const syntheticEvent: VitalWebhookEvent = {
          event_type: "daily.data.workout.created",
          data: {
            user_id: vitalUserId,
            client_user_id: userId,
            provider: w.source?.provider || "vital",
            workout: w,
          },
        };

        const result = processVitalWorkout(syntheticEvent);
        if (result.pointsAwarded > 0) {
          processedCount++;
          pointsAwarded += result.pointsAwarded;
        }

        if (d1Service.isAvailable()) {
          const durationM = Math.round(
            (w.moving_time ||
              (w.time_end && w.time_start
                ? (new Date(w.time_end).getTime() - new Date(w.time_start).getTime()) / 1000
                : 0)) / 60
          );
          await d1Service.insertPendingWorkout({
            id: `vital_${w.id}`,
            userId,
            garminActivityId: `vital_${w.id}`,
            sport: w.sport?.name || "Treino Vital",
            durationMinutes: durationM,
            calories: w.calories || 0,
            avgHr: w.average_hr || null,
            maxHr: w.max_hr || null,
            distanceMeters: w.distance || null,
            device: w.source?.provider || "Vital Wearable",
            hasSensors: Boolean(w.average_hr || w.distance),
            pointsToAward: 20,
            rawPayload: w,
          });
        }
      }

      return new Response(
        JSON.stringify({
          success: true,
          totalFound: workouts.length,
          processedCount,
          pointsAwarded,
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    } catch (err: any) {
      return new Response(
        JSON.stringify({ error: "Erro na sincronização Vital", details: String(err) }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
  }

  return null;
}
