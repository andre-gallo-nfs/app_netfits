import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import pg from "pg";

const { Pool } = pg;

export interface DatabaseConfig {
  env: "staging" | "production";
  databaseUrl?: string;
  directDatabaseUrl?: string;
  supabaseUrl?: string;
  supabaseAnonKey?: string;
  supabaseServiceRoleKey?: string;
}

function getDatabaseConfig(): DatabaseConfig {
  const isProd =
    (typeof process !== "undefined" && process.env?.NODE_ENV === "production") ||
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_APP_ENV === "production");

  const env = isProd ? "production" : "staging";

  if (typeof process !== "undefined") {
    return {
      env,
      databaseUrl: process.env?.DATABASE_URL || (isProd ? process.env?.DATABASE_URL_PRODUCTION : process.env?.DATABASE_URL_STAGING),
      directDatabaseUrl: process.env?.DIRECT_DATABASE_URL || (isProd ? process.env?.DIRECT_DATABASE_URL_PRODUCTION : process.env?.DIRECT_DATABASE_URL_STAGING),
      supabaseUrl: process.env?.SUPABASE_URL || (typeof import.meta !== "undefined" ? import.meta.env?.VITE_SUPABASE_URL : undefined),
      supabaseAnonKey: process.env?.SUPABASE_ANON_KEY || (typeof import.meta !== "undefined" ? import.meta.env?.VITE_SUPABASE_ANON_KEY : undefined),
      supabaseServiceRoleKey: process.env?.SUPABASE_SERVICE_ROLE_KEY,
    };
  }

  return {
    env,
    supabaseUrl: typeof import.meta !== "undefined" ? import.meta.env?.VITE_SUPABASE_URL : undefined,
    supabaseAnonKey: typeof import.meta !== "undefined" ? import.meta.env?.VITE_SUPABASE_ANON_KEY : undefined,
  };
}

let cachedPool: pg.Pool | null = null;
let cachedSupabaseClient: SupabaseClient | null = null;

/**
 * Retorna o Pool de conexões PostgreSQL para operações transacionais diretas no servidor.
 */
export function getPostgresPool(): pg.Pool | null {
  const config = getDatabaseConfig();
  if (!config.databaseUrl) {
    return null;
  }

  if (!cachedPool) {
    cachedPool = new Pool({
      connectionString: config.databaseUrl,
      ssl: {
        rejectUnauthorized: false, // Compatível com Supabase / Cloud SQL / PgBouncer
      },
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    });

    cachedPool.on("error", (err) => {
      console.error("[PostgreSQL Pool] Erro inesperado no cliente de conexão:", err);
    });
  }

  return cachedPool;
}

/**
 * Retorna o cliente Supabase para consultas via API REST, autenticação ou tempo real.
 */
export function getSupabaseClient(): SupabaseClient | null {
  const config = getDatabaseConfig();
  if (!config.supabaseUrl || !config.supabaseAnonKey) {
    return null;
  }

  if (!cachedSupabaseClient) {
    cachedSupabaseClient = createClient(config.supabaseUrl, config.supabaseAnonKey, {
      auth: {
        persistSession: false,
      },
    });
  }

  return cachedSupabaseClient;
}

/**
 * Diagnóstico de integridade e conectividade do banco de dados relacional.
 */
export async function checkDatabaseHealth(): Promise<{
  connected: boolean;
  environment: "staging" | "production";
  provider: "postgresql" | "supabase" | "fallback_local";
  latencyMs: number;
  message: string;
}> {
  const config = getDatabaseConfig();
  const startTime = Date.now();

  const pool = getPostgresPool();
  if (pool) {
    try {
      const client = await pool.connect();
      try {
        const res = await client.query("SELECT NOW() as current_time, current_database() as db_name;");
        const latencyMs = Date.now() - startTime;
        return {
          connected: true,
          environment: config.env,
          provider: "postgresql",
          latencyMs,
          message: `Conectado com sucesso ao PostgreSQL (${res.rows[0]?.db_name}) em ${latencyMs}ms`,
        };
      } finally {
        client.release();
      }
    } catch (err: any) {
      return {
        connected: false,
        environment: config.env,
        provider: "postgresql",
        latencyMs: Date.now() - startTime,
        message: `Falha ao conectar no PostgreSQL: ${err?.message || err}`,
      };
    }
  }

  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      const { data, error } = await supabase.from("system_parameters").select("id").limit(1);
      const latencyMs = Date.now() - startTime;
      if (error) {
        return {
          connected: false,
          environment: config.env,
          provider: "supabase",
          latencyMs,
          message: `Erro na consulta Supabase: ${error.message}`,
        };
      }
      return {
        connected: true,
        environment: config.env,
        provider: "supabase",
        latencyMs,
        message: `Conectado com sucesso ao Supabase em ${latencyMs}ms`,
      };
    } catch (err: any) {
      return {
        connected: false,
        environment: config.env,
        provider: "supabase",
        latencyMs: Date.now() - startTime,
        message: `Falha de rede ao conectar no Supabase: ${err?.message || err}`,
      };
    }
  }

  return {
    connected: true,
    environment: config.env,
    provider: "fallback_local",
    latencyMs: 0,
    message: "Operando em modo de resiliência local (aguardando injeção de DATABASE_URL em nuvem)",
  };
}
