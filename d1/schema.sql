-- ==============================================================================
-- NETFITS CLOUDFLARE D1 RELATIONAL DATABASE SCHEMA (netfits-db)
-- Versão 1.0 - Em conformidade estrita com GEMINI.md e Manifesto Netfits 3.0
-- ==============================================================================

-- 1. TABELA DE USUÁRIOS
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE,
  cpf TEXT,
  fullName TEXT,
  phone TEXT,
  nfsBalance INTEGER NOT NULL DEFAULT 0,
  clubStatus TEXT NOT NULL DEFAULT 'inactive',
  clubPlanId TEXT,
  clubSubscriptionId TEXT,
  referralCode TEXT UNIQUE,
  referredBy TEXT,
  address TEXT,
  zipcode TEXT,
  street TEXT,
  number TEXT,
  neighborhood TEXT,
  city TEXT,
  state TEXT,
  createdAt TEXT NOT NULL,
  updatedAt TEXT NOT NULL,
  metadata TEXT
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_cpf ON users(cpf);
CREATE INDEX IF NOT EXISTS idx_users_referralCode ON users(referralCode);

-- 2. TABELA DE TRANSAÇÕES (LEDGER CONTÁBIL DE PARTIDAS DOBRADAS)
CREATE TABLE IF NOT EXISTS transactions (
  id TEXT PRIMARY KEY,
  userId TEXT NOT NULL,
  userName TEXT,
  amount INTEGER NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  timestamp TEXT NOT NULL,
  orderRef TEXT,
  metadata TEXT,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_transactions_userId ON transactions(userId);
CREATE INDEX IF NOT EXISTS idx_transactions_timestamp ON transactions(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_transactions_orderRef ON transactions(orderRef);

-- 3. TABELA DE QUIZZES & AÇÕES DO FEED (IDEMPOTÊNCIA CONTRA PONTUAÇÃO DUPLA)
CREATE TABLE IF NOT EXISTS quiz_completions (
  id TEXT PRIMARY KEY,
  userId TEXT NOT NULL,
  quizId TEXT NOT NULL,
  postTitle TEXT,
  pointsAwarded INTEGER NOT NULL DEFAULT 5,
  completedAt TEXT NOT NULL,
  metadata TEXT,
  UNIQUE(userId, quizId),
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_quiz_completions_user ON quiz_completions(userId);

-- 4. TABELA DE PEDIDOS DA LOJA ROCK ENCANTECH
CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  orderRef TEXT UNIQUE NOT NULL,
  type TEXT DEFAULT 'ORDER',
  status TEXT NOT NULL,
  paymentStatus TEXT NOT NULL,
  storeId TEXT,
  customerId TEXT,
  customerCpf TEXT,
  customerEmail TEXT,
  customerName TEXT,
  totalBrl REAL DEFAULT 0,
  finalPrice REAL DEFAULT 0,
  pointsDiscountBrl REAL DEFAULT 0,
  pointsRedeemed INTEGER DEFAULT 0,
  cashbackNfs INTEGER DEFAULT 0,
  rawPayload TEXT,
  createdAt TEXT NOT NULL,
  updatedAt TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_orders_orderRef ON orders(orderRef);
CREATE INDEX IF NOT EXISTS idx_orders_customerEmail ON orders(customerEmail);

-- 5. TABELA DE TREINOS PENDENTES DE VALIDAÇÃO (CLUBE NETFITS / GARMIN / WEARABLES)
CREATE TABLE IF NOT EXISTS pending_workouts (
  id TEXT PRIMARY KEY,
  userId TEXT NOT NULL,
  garminActivityId TEXT UNIQUE,
  sport TEXT NOT NULL,
  durationMinutes INTEGER NOT NULL,
  calories INTEGER DEFAULT 0,
  avgHr INTEGER,
  maxHr INTEGER,
  distanceMeters REAL,
  device TEXT,
  hasSensors INTEGER DEFAULT 1,
  status TEXT NOT NULL DEFAULT 'PENDING_CLAIM',
  pointsToAward INTEGER NOT NULL DEFAULT 20,
  createdAt TEXT NOT NULL,
  claimedAt TEXT,
  rawPayload TEXT,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_pending_workouts_user ON pending_workouts(userId, status);

-- 6. TABELA DE PARÂMETROS OPERACIONAIS E GOVERNANÇA
CREATE TABLE IF NOT EXISTS operational_params (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updatedAt TEXT NOT NULL
);

-- 7. TABELA DE SELOS & CONQUISTAS DO USUÁRIO (BADGES PERSISTIDOS NA NUVEM - SSOT D1)
CREATE TABLE IF NOT EXISTS user_badges (
  id TEXT PRIMARY KEY,
  userId TEXT NOT NULL,
  badgeId TEXT NOT NULL,
  unlockedAt TEXT NOT NULL,
  rewardNfs INTEGER NOT NULL DEFAULT 0,
  metadata TEXT,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE(userId, badgeId)
);

CREATE INDEX IF NOT EXISTS idx_user_badges_user ON user_badges(userId);

-- 8. TABELA DE LEITURAS E VÍDEOS DE CONTEÚDO AUDITADOS (FEED READ RECEIPTS - SSOT D1)
CREATE TABLE IF NOT EXISTS feed_read_receipts (
  id TEXT PRIMARY KEY,
  userId TEXT NOT NULL,
  postId TEXT NOT NULL,
  action TEXT NOT NULL DEFAULT 'read',
  dwellTimeSeconds INTEGER NOT NULL DEFAULT 0,
  completedAt TEXT NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE(userId, postId, action)
);

CREATE INDEX IF NOT EXISTS idx_feed_read_receipts_user ON feed_read_receipts(userId);

