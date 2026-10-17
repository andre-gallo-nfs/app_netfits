import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";

describe("Database Security & PostgreSQL Hardening (schema.sql)", () => {
  const schemaPath = path.resolve(process.cwd(), "schema.sql");
  const schemaSql = fs.readFileSync(schemaPath, "utf-8");

  const expectedTables = [
    "users",
    "user_consent_logs",
    "wallet_transactions",
    "point_batches",
    "system_parameters",
    "system_parameters_history",
    "orders",
    "wallet_transactions_archive",
    "cold_tier_runs",
  ];

  it("should have compulsory ROW LEVEL SECURITY (RLS) enabled on 100% of tables", () => {
    for (const table of expectedTables) {
      const rlsRegex = new RegExp(`ALTER\\s+TABLE\\s+${table}\\s+ENABLE\\s+ROW\\s+LEVEL\\s+SECURITY;`, "i");
      expect(
        rlsRegex.test(schemaSql),
        `Table "${table}" must have ENABLE ROW LEVEL SECURITY in schema.sql`
      ).toBe(true);
    }
  });

  it("should define point_batches table with FEFO partial index", () => {
    expect(schemaSql).toContain("CREATE TABLE IF NOT EXISTS point_batches");
    expect(schemaSql).toContain("expires_at TIMESTAMP WITH TIME ZONE NOT NULL");
    expect(schemaSql).toContain("current_balance INTEGER NOT NULL CHECK (current_balance >= 0)");
    
    // Check partial index on unexpired, active batches
    const idxRegex = /CREATE\s+INDEX\s+IF\s+NOT\s+EXISTS\s+idx_point_batches_fefo\s+ON\s+point_batches\s*\(\s*user_id,\s*expires_at\s+ASC\s*\)\s*WHERE\s+current_balance\s*>\s*0;/i;
    expect(idxRegex.test(schemaSql)).toBe(true);
  });

  it("should contain trigger preventing direct balance forgery on users table", () => {
    expect(schemaSql).toContain("CREATE OR REPLACE FUNCTION prevent_direct_balance_mutation()");
    expect(schemaSql).toContain("CREATE TRIGGER trg_protect_wallet_balance");
    expect(schemaSql).toContain("BEFORE UPDATE ON users");
    expect(schemaSql).toContain("Fraude bloqueada: a alteração direta do saldo de pontos");
  });

  it("should protect rpc_credit_points to only allow service_role execution", () => {
    expect(schemaSql).toContain("CREATE OR REPLACE FUNCTION rpc_credit_points");
    expect(schemaSql).toContain("auth.jwt() ->> 'role' <> 'service_role'");
    expect(schemaSql).toContain("REVOKE EXECUTE ON FUNCTION rpc_credit_points");
    expect(schemaSql).toContain("GRANT EXECUTE ON FUNCTION rpc_credit_points(UUID, INTEGER, VARCHAR, VARCHAR) TO service_role;");
  });

  it("should protect rpc_debit_points_fefo to validate caller ownership and allow authenticated", () => {
    expect(schemaSql).toContain("CREATE OR REPLACE FUNCTION rpc_debit_points_fefo");
    expect(schemaSql).toContain("v_caller_id <> p_user_id AND auth.jwt() ->> 'role' <> 'service_role'");
    expect(schemaSql).toContain("REVOKE EXECUTE ON FUNCTION rpc_debit_points_fefo");
    expect(schemaSql).toContain("GRANT EXECUTE ON FUNCTION rpc_debit_points_fefo(UUID, INTEGER, VARCHAR, VARCHAR) TO authenticated, service_role;");
  });

  it("should strictly reflect business parameters in schema defaults", () => {
    // Breakage: 5.00%
    expect(schemaSql).toContain("target_breakage_pct NUMERIC(5,2) NOT NULL DEFAULT 5.00");
    // CPP Acúmulo: 0.0150
    expect(schemaSql).toContain("cpp_acumulo_brl NUMERIC(6,4) NOT NULL DEFAULT 0.0150");
    // Workout points: club only & pending board approval
    expect(schemaSql).toContain("workout_reward_club_only BOOLEAN NOT NULL DEFAULT TRUE");
    expect(schemaSql).toContain("workout_reward_board_approved BOOLEAN NOT NULL DEFAULT FALSE");
  });
});
