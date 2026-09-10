-- ============================================================
-- NETFITS ECOSYSTEM DATABASE SCHEMA (v2.0)
-- PostgreSQL / Supabase / Cloudflare D1
-- ============================================================

-- Table: Users (Cadastro de Atletas / Netfiters)
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(30),
    birth_date DATE,
    address TEXT,
    
    -- Dados de perfil esportivo
    sports TEXT[] DEFAULT '{}',
    health_plan VARCHAR(100) DEFAULT 'Sem plano',
    gym VARCHAR(100) DEFAULT 'Não frequento',
    wearable VARCHAR(100) DEFAULT 'Não uso',
    coaching VARCHAR(255),
    
    -- Origem do Cadastro & Indicação (Tribo)
    referral_code VARCHAR(20) UNIQUE,
    referred_by_user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    
    -- Categoria de Usuário (Novo: ASSOCIADOS para captação massiva via link exclusivo)
    user_category VARCHAR(30) DEFAULT 'atleta' CHECK (user_category IN ('atleta', 'associado', 'especialista', 'parceiro')),
    exclusive_referral_link VARCHAR(255) UNIQUE,
    
    -- Saldo de Netfits & Nível de Fidelidade
    wallet_balance_nfs INTEGER DEFAULT 0 CHECK (wallet_balance_nfs >= 0),
    level VARCHAR(20) DEFAULT 'starter' CHECK (level IN ('starter', 'pro', 'prime', 'elite')),
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: User Consent Log (LGPD / Consentimento como Produto - Manifesto v2.0)
CREATE TABLE IF NOT EXISTS user_consent_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    terms_accepted BOOLEAN NOT NULL DEFAULT TRUE,
    wearable_data_consent BOOLEAN NOT NULL DEFAULT FALSE,
    partners_offers_consent BOOLEAN NOT NULL DEFAULT TRUE,
    ip_address VARCHAR(45),
    user_agent TEXT,
    consent_timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: Wallet Transactions (Extrato de NFS)
CREATE TABLE IF NOT EXISTS wallet_transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    amount_nfs INTEGER NOT NULL, -- Valores positivos (ganho) ou negativos (gasto)
    multiplier NUMERIC(3,2) DEFAULT 1.00,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indices para Performance de Consulta
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_referral_code ON users(referral_code);
CREATE INDEX IF NOT EXISTS idx_wallet_transactions_user ON wallet_transactions(user_id, created_at DESC);

-- ============================================================
-- TABELA DE DADOS MESTRES DA OPERAÇÃO (GOVERNANÇA & REALTIME)
-- ============================================================

-- Table: System Parameters (Tabela de Dados Mestres da Operação Netfits)
-- Ponto central de cadastramento e controle: qualquer alteração no Cockpit /admin reflete aqui em tempo real.
CREATE TABLE IF NOT EXISTS system_parameters (
    id VARCHAR(50) PRIMARY KEY DEFAULT 'master_config',
    
    -- 1. Recompensas de Conteúdo Próprio
    nfs_per_video_post INTEGER NOT NULL DEFAULT 15,
    nfs_per_text_post INTEGER NOT NULL DEFAULT 10,
    daily_rewarded_post_limit INTEGER NOT NULL DEFAULT 1,
    weekly_rewarded_post_limit INTEGER NOT NULL DEFAULT 7,

    -- 2. Interações em Conteúdo de Terceiros
    nfs_per_post_view INTEGER NOT NULL DEFAULT 5,
    nfs_per_like INTEGER NOT NULL DEFAULT 5,
    nfs_per_save INTEGER NOT NULL DEFAULT 10,
    nfs_per_share INTEGER NOT NULL DEFAULT 10,
    daily_third_party_interactions_limit INTEGER NOT NULL DEFAULT 10,
    daily_max_points_third_party_interactions INTEGER NOT NULL DEFAULT 50,

    -- 3. Travas de Segurança Antifraude & Moderação
    block_self_engagement_rewards BOOLEAN NOT NULL DEFAULT TRUE,
    min_dwell_time_seconds_for_view INTEGER NOT NULL DEFAULT 3,
    require_full_video_completion_for_reward BOOLEAN NOT NULL DEFAULT TRUE,
    max_interactions_per_minute INTEGER NOT NULL DEFAULT 10,
    duplicate_media_filter_active BOOLEAN NOT NULL DEFAULT TRUE,

    -- 4. Hábitos e Treinos
    nfs_per_workout INTEGER NOT NULL DEFAULT 25,
    nfs_per_loyalty_declaration INTEGER NOT NULL DEFAULT 20,

    -- 5. Economia & Revenue Share
    netfits_take_rate_pct_from_gmv NUMERIC(5,2) NOT NULL DEFAULT 6.00,
    associado_share_of_netfits_revenue_pct NUMERIC(5,2) NOT NULL DEFAULT 10.00,
    normal_user_referral_share_pct NUMERIC(5,2) NOT NULL DEFAULT 5.00,
    normal_user_new_referral_bonus_nfs INTEGER NOT NULL DEFAULT 50,

    -- 6. Economia dos Pontos & CPC 30
    cpp_acumulo_brl NUMERIC(6,4) NOT NULL DEFAULT 0.0200,
    cpp_resgate_brl NUMERIC(6,4) NOT NULL DEFAULT 0.0100,
    cost_per_provisioned_point_brl NUMERIC(6,4) NOT NULL DEFAULT 0.0100,
    netfits_club_monthly_fee_brl NUMERIC(6,2) NOT NULL DEFAULT 19.90,
    nfs_earned_per_brl_spent NUMERIC(5,2) NOT NULL DEFAULT 4.00,
    nfs_earned_per_brl_spent_double NUMERIC(5,2) NOT NULL DEFAULT 8.00,
    shop_first_purchase_bonus_nfs INTEGER NOT NULL DEFAULT 100,
    points_validity_months INTEGER NOT NULL DEFAULT 24,
    target_breakage_pct NUMERIC(5,2) NOT NULL DEFAULT 12.00,
    redemption_policy VARCHAR(20) NOT NULL DEFAULT 'FEFO',
    redemption_policy_name VARCHAR(255) NOT NULL DEFAULT 'FEFO — First-Expiring, First-Out',

    -- 7. FinOps TI
    cloud_infra_monthly_cost_brl NUMERIC(10,2) NOT NULL DEFAULT 7260.00,
    fin_ops_savings_pct NUMERIC(5,2) NOT NULL DEFAULT 61.50,
    fin_ops_annual_gain_brl NUMERIC(10,2) NOT NULL DEFAULT 138930.00,

    -- Auditoria e Timestamp
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_by_user_id VARCHAR(100) DEFAULT 'admin_master'
);

-- Table: System Parameters History (Trilha de Auditoria Imutável de Governança)
CREATE TABLE IF NOT EXISTS system_parameters_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    changed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    changed_by_user_id VARCHAR(100) DEFAULT 'admin_master',
    previous_state JSONB NOT NULL,
    new_state JSONB NOT NULL,
    change_reason VARCHAR(255) DEFAULT 'Ajuste operacional via Cockpit /admin'
);

-- Inserção do Registro Mestre Padrão (Initial Seed)
INSERT INTO system_parameters (id) 
VALUES ('master_config')
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- FINOPS DATABASE COLD DATA TIERING (POSTGRESQL + R2 / GLACIER)
-- Mantém latência do ledger < 10ms e evita inchaço de RAM/IOPS
-- ============================================================

-- Table: Wallet Transactions Archive (Cold Storage Tier)
CREATE TABLE IF NOT EXISTS wallet_transactions_archive (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL,
    title VARCHAR(255) NOT NULL,
    amount_nfs INTEGER NOT NULL,
    multiplier NUMERIC(3,2) DEFAULT 1.00,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL,
    archived_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    storage_tier VARCHAR(30) DEFAULT 'cold_r2' CHECK (storage_tier IN ('cold_r2', 'glacier', 'compressed_blob')),
    compressed_payload JSONB
);

CREATE INDEX IF NOT EXISTS idx_wallet_transactions_archive_user ON wallet_transactions_archive(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_wallet_transactions_archive_date ON wallet_transactions_archive(archived_at DESC);

-- Table: Cold Tier Runs (Histórico de Execuções FinOps de Arquivamento)
CREATE TABLE IF NOT EXISTS cold_tier_runs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    executed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    cutoff_date TIMESTAMP WITH TIME ZONE NOT NULL,
    rows_archived INTEGER NOT NULL DEFAULT 0,
    storage_freed_mb NUMERIC(8,2) NOT NULL DEFAULT 0.00,
    executed_by VARCHAR(100) DEFAULT 'finops_cron_job',
    status VARCHAR(30) DEFAULT 'success',
    notes TEXT
);

-- Procedure / Function: Executar expurgo e arquivamento a frio de transações > 24 meses
CREATE OR REPLACE FUNCTION archive_expired_wallet_transactions(cutoff_interval INTERVAL DEFAULT INTERVAL '24 months')
RETURNS TABLE(archived_count INTEGER, freed_mb NUMERIC) AS $$
DECLARE
    v_cutoff TIMESTAMP WITH TIME ZONE := CURRENT_TIMESTAMP - cutoff_interval;
    v_count INTEGER := 0;
    v_freed NUMERIC := 0.00;
BEGIN
    -- 1. Copiar registros antigos para a tabela de arquivamento a frio (Tier R2)
    WITH moved_rows AS (
        DELETE FROM wallet_transactions
        WHERE created_at < v_cutoff
        RETURNING id, user_id, title, amount_nfs, multiplier, created_at
    )
    INSERT INTO wallet_transactions_archive (id, user_id, title, amount_nfs, multiplier, created_at, storage_tier)
    SELECT id, user_id, title, amount_nfs, multiplier, created_at, 'cold_r2'
    FROM moved_rows;

    GET DIAGNOSTICS v_count = ROW_COUNT;
    -- Estimativa média de 1.2 KB por registro no PostgreSQL incluindo índices
    v_freed := ROUND((v_count * 1.2) / 1024.0, 2);

    -- 2. Registrar no log de governança FinOps
    INSERT INTO cold_tier_runs (cutoff_date, rows_archived, storage_freed_mb, executed_by, status, notes)
    VALUES (v_cutoff, v_count, v_freed, 'finops_automated_policy', 'success', 'Arquivamento histórico de transações concluído com sucesso.');

    RETURN QUERY SELECT v_count, v_freed;
END;
$$ LANGUAGE plpgsql;

