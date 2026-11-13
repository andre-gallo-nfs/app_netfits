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
