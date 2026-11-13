INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef, metadata)
VALUES (
  'tx-referral-andre-queli',
  'usr_andre',
  'André Gallo',
  50,
  '🤝 Bônus por Indicar Novo Usuário (Cristiane Queli da Silva Gallo)',
  'referral',
  '2026-10-15T18:52:14.266Z',
  NULL,
  '{}'
) ON CONFLICT(id) DO UPDATE SET
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp,
  metadata = excluded.metadata;

UPDATE users SET 
  nfsBalance = 461,
  updatedAt = datetime('now')
WHERE id = 'usr_andre';
