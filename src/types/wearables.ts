export type SportCategory =
  | "running"
  | "cycling"
  | "swimming"
  | "strength_training"
  | "walking"
  | "triathlon"
  | "hiit"
  | "other";

export interface NormalizedWorkout {
  id: string; // UUID único do HealthKit, Health Connect ou Open Wearables
  sourceDevice: string; // Ex: "Garmin Forerunner 965", "Apple Watch Series 9", "Polar Vantage V3"
  sourceApp: string; // Ex: "com.garmin.connect.mobile", "com.apple.health", "com.strava"
  sourceChannel: "caminho_1_local" | "caminho_2_cloud"; // Identifica a origem da telemetria
  sport: SportCategory;
  sportLabel: string; // Ex: "Corrida de Rua", "Treino de Força", "Ciclismo Outdoor"
  startTime: string; // ISO 8601
  endTime: string; // ISO 8601
  durationMinutes: number; // Duração líquida em movimento
  activeCalories: number; // Calorias ativas de esforço
  distanceMeters?: number; // Metros percorridos
  avgHeartRate?: number; // Frequência cardíaca média (bpm)
  maxHeartRate?: number; // Frequência cardíaca máxima (bpm)

  // 🛡️ Banderas de Auditoria & Antifraude
  isManualEntry: boolean; // TRUE se foi digitado manualmente sem sensores
  hasHardwareSensors: boolean; // TRUE se comprovado sensor óptico de FC ou GPS
  isDeviceVerified: boolean; // TRUE se validado por hardware oficial
  fingerprintHash: string; // SHA-256 para desduplicação idempotente
}

export interface WorkoutValidationResult {
  success: boolean;
  status: "approved" | "rejected_antifraud" | "rejected_duplicate" | "rejected_daily_limit" | "rejected_club_only";
  message: string;
  pointsAwarded: number;
  workout?: NormalizedWorkout;
  validatedAt?: string;
  recoveryTip?: string; // Dica Netfits de recuperação baseada no esforço
  fibiosInsight?: string;
}

export interface WearableDeviceOption {
  id: string;
  name: string;
  brand: string;
  icon: string;
  channel: "caminho_1_nativo" | "caminho_2_cloud" | "hibrido";
  status: "connected" | "disconnected" | "syncing";
}
