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
