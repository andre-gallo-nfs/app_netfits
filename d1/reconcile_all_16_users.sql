-- ==============================================================
-- RECONCILIAÇÃO INTEGRAL DE TODOS OS 16 USUÁRIOS NO CLOUDFLARE D1
-- ==============================================================

-- 1. INSERIR OU ATUALIZAR USUÁRIOS
INSERT INTO users (id, email, cpf, fullName, phone, nfsBalance, clubStatus, clubPlanId, referralCode, referredBy, createdAt, updatedAt, metadata)
VALUES ('usr_apple_review', 'demo@netfits.com.br', '000.000.000-00', 'Avaliador Netfits (Apple Review)', '(11) 90000-0000', 1500, 'active', NULL, 'REVIEW-NETFITS', NULL, '2026-10-20T00:00:00.000Z', '2026-11-08T01:50:00.000Z', '{"userCategory": "atleta", "isClubMember": true}')
ON CONFLICT(id) DO UPDATE SET
  email = excluded.email,
  fullName = excluded.fullName,
  nfsBalance = excluded.nfsBalance,
  clubStatus = excluded.clubStatus,
  referralCode = COALESCE(excluded.referralCode, users.referralCode),
  referredBy = COALESCE(excluded.referredBy, users.referredBy),
  updatedAt = excluded.updatedAt,
  metadata = excluded.metadata;
INSERT INTO users (id, email, cpf, fullName, phone, nfsBalance, clubStatus, clubPlanId, referralCode, referredBy, createdAt, updatedAt, metadata)
VALUES ('usr_andre', 'aacgallo@hotmail.com', '256.647.308-03', 'André Gallo', '(11) 99535-1513', 1466, 'inactive', NULL, 'GALLO-NETFITS', NULL, '2026-10-05T00:00:00Z', '2026-11-08T01:50:00.000Z', '{"userCategory": "associado", "isClubMember": false}')
ON CONFLICT(id) DO UPDATE SET
  email = excluded.email,
  fullName = excluded.fullName,
  nfsBalance = excluded.nfsBalance,
  clubStatus = excluded.clubStatus,
  referralCode = COALESCE(excluded.referralCode, users.referralCode),
  referredBy = COALESCE(excluded.referredBy, users.referredBy),
  updatedAt = excluded.updatedAt,
  metadata = excluded.metadata;
INSERT INTO users (id, email, cpf, fullName, phone, nfsBalance, clubStatus, clubPlanId, referralCode, referredBy, createdAt, updatedAt, metadata)
VALUES ('usr_carlos_formigari', 'crformigari72@gmail.com', '11553412877', 'Carlos Rodrigo Formigari', '(11) 98426-4116', 497, 'inactive', NULL, 'FORMIGARI-NFS', NULL, '2026-10-06T00:00:00Z', '2026-11-08T01:50:00.000Z', '{"userCategory": "atleta", "isClubMember": false}')
ON CONFLICT(id) DO UPDATE SET
  email = excluded.email,
  fullName = excluded.fullName,
  nfsBalance = excluded.nfsBalance,
  clubStatus = excluded.clubStatus,
  referralCode = COALESCE(excluded.referralCode, users.referralCode),
  referredBy = COALESCE(excluded.referredBy, users.referredBy),
  updatedAt = excluded.updatedAt,
  metadata = excluded.metadata;
INSERT INTO users (id, email, cpf, fullName, phone, nfsBalance, clubStatus, clubPlanId, referralCode, referredBy, createdAt, updatedAt, metadata)
VALUES ('user-1791370530242', 'cristiane.formigari@amantikira.com.br', '11001624882', 'Cristiane Ferreira Formigari', '(11) 98381-7390', 594, 'inactive', NULL, 'NET-1243', 'FORMIGARI-NFS', '2026-10-07T10:55:30.242Z', '2026-11-08T01:50:00.000Z', '{"userCategory": "atleta", "isClubMember": false}')
ON CONFLICT(id) DO UPDATE SET
  email = excluded.email,
  fullName = excluded.fullName,
  nfsBalance = excluded.nfsBalance,
  clubStatus = excluded.clubStatus,
  referralCode = COALESCE(excluded.referralCode, users.referralCode),
  referredBy = COALESCE(excluded.referredBy, users.referredBy),
  updatedAt = excluded.updatedAt,
  metadata = excluded.metadata;
INSERT INTO users (id, email, cpf, fullName, phone, nfsBalance, clubStatus, clubPlanId, referralCode, referredBy, createdAt, updatedAt, metadata)
VALUES ('user-1791568907378', 'edsonsilvafilho@gmail.com', '04905769400', 'Edson Silva Filho', '(81) 98541-0874', 125, 'inactive', NULL, 'NET-1431', NULL, '2026-10-09T18:01:47.378Z', '2026-11-08T01:50:00.000Z', '{"userCategory": "atleta", "isClubMember": false}')
ON CONFLICT(id) DO UPDATE SET
  email = excluded.email,
  fullName = excluded.fullName,
  nfsBalance = excluded.nfsBalance,
  clubStatus = excluded.clubStatus,
  referralCode = COALESCE(excluded.referralCode, users.referralCode),
  referredBy = COALESCE(excluded.referredBy, users.referredBy),
  updatedAt = excluded.updatedAt,
  metadata = excluded.metadata;
INSERT INTO users (id, email, cpf, fullName, phone, nfsBalance, clubStatus, clubPlanId, referralCode, referredBy, createdAt, updatedAt, metadata)
VALUES ('user-1792090334266', 'c.queligallo@gmail.com', '129.044.128-67', 'Cristiane Queli da Silva Gallo', '(11) 98210-9997', 50, 'inactive', NULL, 'NET-1520', NULL, '2026-10-15T18:52:14.266Z', '2026-11-08T01:50:00.000Z', '{"userCategory": "athlete", "isClubMember": false}')
ON CONFLICT(id) DO UPDATE SET
  email = excluded.email,
  fullName = excluded.fullName,
  nfsBalance = excluded.nfsBalance,
  clubStatus = excluded.clubStatus,
  referralCode = COALESCE(excluded.referralCode, users.referralCode),
  referredBy = COALESCE(excluded.referredBy, users.referredBy),
  updatedAt = excluded.updatedAt,
  metadata = excluded.metadata;
INSERT INTO users (id, email, cpf, fullName, phone, nfsBalance, clubStatus, clubPlanId, referralCode, referredBy, createdAt, updatedAt, metadata)
VALUES ('user-1794018495670', 'claudia.noce@icloud.com', '15743014892', 'Claudia Noce Soares', '11952228851', 192, 'inactive', NULL, NULL, NULL, '2026-10-15T00:00:00.000Z', '2026-11-08T01:50:00.000Z', '{"userCategory": "atleta", "isClubMember": false}')
ON CONFLICT(id) DO UPDATE SET
  email = excluded.email,
  fullName = excluded.fullName,
  nfsBalance = excluded.nfsBalance,
  clubStatus = excluded.clubStatus,
  referralCode = COALESCE(excluded.referralCode, users.referralCode),
  referredBy = COALESCE(excluded.referredBy, users.referredBy),
  updatedAt = excluded.updatedAt,
  metadata = excluded.metadata;
INSERT INTO users (id, email, cpf, fullName, phone, nfsBalance, clubStatus, clubPlanId, referralCode, referredBy, createdAt, updatedAt, metadata)
VALUES ('user-1793578988883', 'luisa.formigari@netfits.com.br', '539.263.148-77', 'Luisa Ferreira Formigari', '(11) 97699-6293', 80, 'inactive', NULL, 'NET-8584', NULL, '2026-11-02T00:23:08.883Z', '2026-11-08T01:50:00.000Z', '{"userCategory": "atleta", "isClubMember": false}')
ON CONFLICT(id) DO UPDATE SET
  email = excluded.email,
  fullName = excluded.fullName,
  nfsBalance = excluded.nfsBalance,
  clubStatus = excluded.clubStatus,
  referralCode = COALESCE(excluded.referralCode, users.referralCode),
  referredBy = COALESCE(excluded.referredBy, users.referredBy),
  updatedAt = excluded.updatedAt,
  metadata = excluded.metadata;
INSERT INTO users (id, email, cpf, fullName, phone, nfsBalance, clubStatus, clubPlanId, referralCode, referredBy, createdAt, updatedAt, metadata)
VALUES ('user-1793802322018', 'maripizone@gmail.com', '285.031.348-37', 'Mariana Fernanda Pizone', '(11) 98231-6517', 50, 'inactive', NULL, 'NET-8302', NULL, '2026-11-04T14:25:22.018Z', '2026-11-08T01:50:00.000Z', '{"userCategory": "athlete", "isClubMember": false}')
ON CONFLICT(id) DO UPDATE SET
  email = excluded.email,
  fullName = excluded.fullName,
  nfsBalance = excluded.nfsBalance,
  clubStatus = excluded.clubStatus,
  referralCode = COALESCE(excluded.referralCode, users.referralCode),
  referredBy = COALESCE(excluded.referredBy, users.referredBy),
  updatedAt = excluded.updatedAt,
  metadata = excluded.metadata;
INSERT INTO users (id, email, cpf, fullName, phone, nfsBalance, clubStatus, clubPlanId, referralCode, referredBy, createdAt, updatedAt, metadata)
VALUES ('usr_isabella_formigari', 'isaformigari99@gmail.com', NULL, 'Dra. Isabella Formigari', NULL, 200, 'inactive', NULL, 'ISABELLA-NFS', NULL, '2026-11-02T17:07:56.000Z', '2026-11-08T01:50:00.000Z', '{"userCategory": "atleta", "isClubMember": false}')
ON CONFLICT(id) DO UPDATE SET
  email = excluded.email,
  fullName = excluded.fullName,
  nfsBalance = excluded.nfsBalance,
  clubStatus = excluded.clubStatus,
  referralCode = COALESCE(excluded.referralCode, users.referralCode),
  referredBy = COALESCE(excluded.referredBy, users.referredBy),
  updatedAt = excluded.updatedAt,
  metadata = excluded.metadata;
INSERT INTO users (id, email, cpf, fullName, phone, nfsBalance, clubStatus, clubPlanId, referralCode, referredBy, createdAt, updatedAt, metadata)
VALUES ('usr_alcides', 'Alcidesln@gmail.com', NULL, 'Alcides', NULL, 50, 'inactive', NULL, 'ALCIDES-NFS', NULL, '2026-11-06T09:39:14.000Z', '2026-11-08T01:50:00.000Z', '{"userCategory": "atleta", "isClubMember": false}')
ON CONFLICT(id) DO UPDATE SET
  email = excluded.email,
  fullName = excluded.fullName,
  nfsBalance = excluded.nfsBalance,
  clubStatus = excluded.clubStatus,
  referralCode = COALESCE(excluded.referralCode, users.referralCode),
  referredBy = COALESCE(excluded.referredBy, users.referredBy),
  updatedAt = excluded.updatedAt,
  metadata = excluded.metadata;
INSERT INTO users (id, email, cpf, fullName, phone, nfsBalance, clubStatus, clubPlanId, referralCode, referredBy, createdAt, updatedAt, metadata)
VALUES ('usr_eduardo_ferreira', 'dumanga_maguerbes@yahoo.com.br', NULL, 'Eduardo Ferreira dos Santos', NULL, 50, 'inactive', NULL, 'EDUARDO-NFS', 'FORMIGARI-NFS', '2026-11-05T23:17:39.000Z', '2026-11-08T01:50:00.000Z', '{"userCategory": "atleta", "isClubMember": false}')
ON CONFLICT(id) DO UPDATE SET
  email = excluded.email,
  fullName = excluded.fullName,
  nfsBalance = excluded.nfsBalance,
  clubStatus = excluded.clubStatus,
  referralCode = COALESCE(excluded.referralCode, users.referralCode),
  referredBy = COALESCE(excluded.referredBy, users.referredBy),
  updatedAt = excluded.updatedAt,
  metadata = excluded.metadata;
INSERT INTO users (id, email, cpf, fullName, phone, nfsBalance, clubStatus, clubPlanId, referralCode, referredBy, createdAt, updatedAt, metadata)
VALUES ('usr_franco_merici_gmail', 'Francomerici007@gmail.com', NULL, 'Dr. Franco Merici', NULL, 50, 'inactive', NULL, 'FRANCO-MERICI-NFS', 'ISABELLA-NFS', '2026-11-02T18:07:25.000Z', '2026-11-08T01:50:00.000Z', '{"userCategory": "atleta", "isClubMember": false}')
ON CONFLICT(id) DO UPDATE SET
  email = excluded.email,
  fullName = excluded.fullName,
  nfsBalance = excluded.nfsBalance,
  clubStatus = excluded.clubStatus,
  referralCode = COALESCE(excluded.referralCode, users.referralCode),
  referredBy = COALESCE(excluded.referredBy, users.referredBy),
  updatedAt = excluded.updatedAt,
  metadata = excluded.metadata;
INSERT INTO users (id, email, cpf, fullName, phone, nfsBalance, clubStatus, clubPlanId, referralCode, referredBy, createdAt, updatedAt, metadata)
VALUES ('usr_ana_merici_yahoo', 'anamerici@yahoo.com.br', NULL, 'Ana Merici', NULL, 50, 'inactive', NULL, 'ANA-MERICI-NFS', 'ISABELLA-NFS', '2026-11-02T17:22:18.000Z', '2026-11-08T01:50:00.000Z', '{"userCategory": "atleta", "isClubMember": false}')
ON CONFLICT(id) DO UPDATE SET
  email = excluded.email,
  fullName = excluded.fullName,
  nfsBalance = excluded.nfsBalance,
  clubStatus = excluded.clubStatus,
  referralCode = COALESCE(excluded.referralCode, users.referralCode),
  referredBy = COALESCE(excluded.referredBy, users.referredBy),
  updatedAt = excluded.updatedAt,
  metadata = excluded.metadata;
INSERT INTO users (id, email, cpf, fullName, phone, nfsBalance, clubStatus, clubPlanId, referralCode, referredBy, createdAt, updatedAt, metadata)
VALUES ('usr_yuri_bezerra', 'yuribezerra1000@hotmail.com', NULL, 'Yuri Bezerra', NULL, 50, 'inactive', NULL, 'YURI-BEZERRA-NFS', 'ISABELLA-NFS', '2026-11-02T17:20:17.000Z', '2026-11-08T01:50:00.000Z', '{"userCategory": "atleta", "isClubMember": false}')
ON CONFLICT(id) DO UPDATE SET
  email = excluded.email,
  fullName = excluded.fullName,
  nfsBalance = excluded.nfsBalance,
  clubStatus = excluded.clubStatus,
  referralCode = COALESCE(excluded.referralCode, users.referralCode),
  referredBy = COALESCE(excluded.referredBy, users.referredBy),
  updatedAt = excluded.updatedAt,
  metadata = excluded.metadata;
INSERT INTO users (id, email, cpf, fullName, phone, nfsBalance, clubStatus, clubPlanId, referralCode, referredBy, createdAt, updatedAt, metadata)
VALUES ('usr_jorge_miyane', 'jorgemiyane@hotmail.com', NULL, 'Jorge Miyane', NULL, 50, 'inactive', NULL, 'JORGE-MIYANE-NFS', NULL, '2026-10-27T22:23:54.000Z', '2026-11-08T01:50:00.000Z', '{"userCategory": "atleta", "isClubMember": false}')
ON CONFLICT(id) DO UPDATE SET
  email = excluded.email,
  fullName = excluded.fullName,
  nfsBalance = excluded.nfsBalance,
  clubStatus = excluded.clubStatus,
  referralCode = COALESCE(excluded.referralCode, users.referralCode),
  referredBy = COALESCE(excluded.referredBy, users.referredBy),
  updatedAt = excluded.updatedAt,
  metadata = excluded.metadata;

-- 2. INSERIR TRANSAÇÕES CONCILIADAS
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-mkp-earn-JVV0717378181', 'user-1794018495670', 'Claudia Noce Soares', 139, '✨ Cashback compra Mkplace Pedido #JVV0717378181', 'shop', '2026-11-07T17:37:59.111Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1794056068710-908', 'user-1793578988883', 'Luisa Ferreira Formigari', 5, 'Quiz Diário: Cadastro 100% Completo: Segurança LGPD e +50 netfits Imediatos (Time Netfits)', 'feed', '2026-11-07T12:54:28.710Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1794055590993-243', 'user-1793578988883', 'Luisa Ferreira Formigari', 5, 'Quiz Diário: Hidratação Inteligente: Eletrólitos e o Risco Real da Hiponatremia (Dra. Isabella Formigari)', 'feed', '2026-11-07T12:46:30.993Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1794055125395-8', 'user-1793578988883', 'Luisa Ferreira Formigari', 5, 'Quiz Diário: Consistência sem Burnout: A Ciência da Frequência Sustentável (Time Netfits)', 'feed', '2026-11-07T12:38:45.395Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1794018495670-welcome', 'user-1794018495670', 'Claudia Noce Soares', 50, 'Bônus de Boas-Vindas — Novo Cadastro no App Netfits', 'welcome', '2026-11-07T02:28:15.670Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-reconcile-welcome-alcides', 'usr_alcides', 'Alcides', 50, 'Bônus de Boas-Vindas no Cadastramento Netfits — Reconciliação Oficial', 'welcome', '2026-11-06T09:39:14.000Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-reconcile-welcome-eduardo-ferreira', 'usr_eduardo_ferreira', 'Eduardo Ferreira dos Santos', 50, 'Bônus de Boas-Vindas no Cadastramento Netfits — Reconciliação Oficial', 'welcome', '2026-11-05T23:17:39.000Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-reconcile-referral-eduardo-ferreira', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 50, 'Bônus por Indicar Novo Usuário (Eduardo Ferreira dos Santos) — Reconciliação MGM', 'referral', '2026-11-05T23:17:39.000Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1793912848722-299', 'user-1794018495670', 'Claudia Noce Soares', 5, 'Quiz Diário: Consistência sem Burnout: A Ciência da Frequência Sustentável (Time Netfits)', 'feed', '2026-11-05T21:07:28.722Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1793912830906-754', 'user-1794018495670', 'Claudia Noce Soares', 5, 'Quiz Diário: Overtraining: 4 Sinais Biológicos de Sobrecarga e Fadiga Crônica (Dr. Franco Merici)', 'feed', '2026-11-05T21:07:10.906Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1793911210214-896', 'user-1794018495670', 'Claudia Noce Soares', 5, 'Quiz Diário: Cadastro 100% Completo: Segurança LGPD e +50 netfits Imediatos (Time Netfits)', 'feed', '2026-11-05T20:40:10.214Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1793911181535-410', 'user-1794018495670', 'Claudia Noce Soares', 10, 'Quiz Patrocinado: Mizuno Running', 'feed', '2026-11-05T20:39:41.535Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-reconcile-welcome-claudia-noce', 'user-1794018495670', 'Claudia Noce Soares', 50, 'Bônus de Boas-Vindas no Cadastramento Netfits — Reconciliação Oficial', 'welcome', '2026-11-05T20:30:00.000Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1793896767349-311', 'user-1793578988883', 'Luisa Ferreira Formigari', 5, 'Quiz Diário: Overtraining: 4 Sinais Biológicos de Sobrecarga e Fadiga Crônica (Dr. Franco Merici)', 'feed', '2026-11-05T16:39:27.350Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1793884365611-119', 'user-1793578988883', 'Luisa Ferreira Formigari', 10, 'Quiz Patrocinado: Mizuno Running', 'feed', '2026-11-05T13:12:45.611Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1793838671148-180', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 5, 'Quiz Diário: Síndrome REDs: O Perigo Invisível da Baixa Disponibilidade Energética (Fibios Medicina & Saúde)', 'feed', '2026-11-05T00:31:11.148Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1793838579922-553', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 5, 'Quiz Diário: A Origem da Netfits: O Suor do Fundador que Virou Moeda (Time Netfits)', 'feed', '2026-11-05T00:29:39.922Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1793838428165-561', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 5, 'Quiz Diário: Acompanhe sua Evolução: Rituais Diários, Sequências e Selos (Time Netfits)', 'badge', '2026-11-05T00:27:08.165Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1793838320746-621', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 5, 'Quiz Diário: Como Acompanhar Seus Pontos no Dia a Dia: Simples, Transparente e Sem Pegadinhas (Time Netfits)', 'feed', '2026-11-05T00:25:20.746Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-reconcile-welcome-mariana-pizone', 'user-1793802322018', 'Mariana Fernanda Pizone', 50, 'Bônus de Boas-Vindas no Cadastramento Netfits — Reconciliação Oficial', 'welcome', '2026-11-04T14:25:22.000Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-reconcile-welcome-franco-merici', 'usr_franco_merici_gmail', 'Dr. Franco Merici', 50, 'Bônus de Boas-Vindas no Cadastramento Netfits — Reconciliação Oficial', 'welcome', '2026-11-02T18:07:25.000Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-reconcile-referral-isabella-franco', 'usr_isabella_formigari', 'Dra. Isabella Formigari', 50, 'Bônus por Indicar Novo Usuário (Dr. Franco Merici) — MGM', 'referral', '2026-11-02T18:07:25.000Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-reconcile-welcome-ana-merici', 'usr_ana_merici_yahoo', 'Ana Merici', 50, 'Bônus de Boas-Vindas no Cadastramento Netfits — Reconciliação Oficial', 'welcome', '2026-11-02T17:22:18.000Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-reconcile-referral-isabella-ana', 'usr_isabella_formigari', 'Dra. Isabella Formigari', 50, 'Bônus por Indicar Novo Usuário (Ana Merici) — MGM', 'referral', '2026-11-02T17:22:18.000Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-reconcile-welcome-yuri-bezerra', 'usr_yuri_bezerra', 'Yuri Bezerra', 50, 'Bônus de Boas-Vindas no Cadastramento Netfits — Reconciliação Oficial', 'welcome', '2026-11-02T17:20:17.000Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-reconcile-referral-isabella-yuri', 'usr_isabella_formigari', 'Dra. Isabella Formigari', 50, 'Bônus por Indicar Novo Usuário (Yuri Bezerra) — MGM', 'referral', '2026-11-02T17:20:17.000Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-reconcile-welcome-isabella-formigari', 'usr_isabella_formigari', 'Dra. Isabella Formigari', 50, 'Bônus de Boas-Vindas no Cadastramento Netfits — Reconciliação Oficial', 'welcome', '2026-11-02T17:07:56.000Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-reconcile-welcome-luisa-formigari', 'user-1793578988883', 'Luisa Ferreira Formigari', 50, 'Bônus de Boas-Vindas no Cadastramento Netfits — Reconciliação Oficial', 'welcome', '2026-11-01T02:40:00.000Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-apple-review-shop', 'usr_apple_review', 'Avaliador Netfits (Apple Review)', 395, 'Cashback Shopping Netfits: Compra Pontuada', 'shop', '2026-10-24T10:20:00.000Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-apple-review-referral', 'usr_apple_review', 'Avaliador Netfits (Apple Review)', 50, 'Indicação de Amigo: Bônus MGM Concluído', 'referral', '2026-10-24T10:15:00.000Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-apple-review-feed', 'usr_apple_review', 'Avaliador Netfits (Apple Review)', 5, 'Desafio Netfits: Força & Longevidade (Dr. Franco Merici — Fibios)', 'feed', '2026-10-24T10:10:00.000Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-apple-review-club', 'usr_apple_review', 'Avaliador Netfits (Apple Review)', 1000, 'Mensalidade Clube Netfits: Pontuação Recorrente', 'associado_bonus', '2026-10-24T10:05:00.000Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-apple-review-welcome', 'usr_apple_review', 'Avaliador Netfits (Apple Review)', 50, 'Boas-vindas à Netfits! Bônus de Cadastro Inicial', 'welcome', '2026-10-24T10:00:00.000Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1792096301675-472', 'usr_andre', 'André Gallo', 5, 'Desafio Netfits: Força & Longevidade (Dr. Franco Merici — Fibios)', 'feed', '2026-10-15T20:31:41.675Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1792096282278-190', 'usr_andre', 'André Gallo', 5, 'Leitura Completa de Artigo: Força & Longevidade (Dr. Franco Merici)', 'feed', '2026-10-15T20:31:22.278Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-badge-usr_andre-mestre_cashback', 'usr_andre', 'André Gallo', 45, '🏆 Selo Conquistado: Mestre do Acúmulo', 'badge', '2026-10-15T20:31:01.012Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1792090334272-welcome', 'user-1792090334266', 'Cristiane Queli da Silva Gallo', 50, 'Bônus de Boas-Vindas — Novo Cadastro no App Netfits', 'welcome', '2026-10-15T18:52:14.272Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-badge-usr_carlos_formigari-embaixador_netfits', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 35, '🏆 Selo Conquistado: Embaixador Netfits', 'badge', '2026-10-15T18:39:27.222Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-badge-usr_carlos_formigari-voz_da_tribo', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 25, '🏆 Selo Conquistado: Voz da Tribo', 'badge', '2026-10-15T18:39:27.219Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-badge-usr_carlos_formigari-primeira_compra', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 40, '🏆 Selo Conquistado: Primeiro Cashback', 'badge', '2026-10-15T18:39:27.217Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-badge-usr_carlos_formigari-explorador_shop', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 10, '🏆 Selo Conquistado: Explorador do Shop', 'badge', '2026-10-15T18:39:27.213Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-badge-usr_carlos_formigari-atleta_conectado', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 30, '🏆 Selo Conquistado: Atleta de Alta Performance', 'badge', '2026-10-15T18:39:27.209Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-badge-usr_carlos_formigari-colecionador_pontos', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 20, '🏆 Selo Conquistado: Colecionador de Pontos', 'badge', '2026-10-15T18:39:27.206Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-badge-usr_carlos_formigari-perfil_verificado', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 30, '🏆 Selo Conquistado: Perfil Verificado', 'badge', '2026-10-15T18:39:27.202Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-badge-usr_carlos_formigari-pioneiro', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 25, '🏆 Selo Conquistado: Pioneiro Netfits', 'badge', '2026-10-15T18:39:27.195Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-badge-user-1791568907378-colecionador_pontos', 'user-1791568907378', 'Edson Silva Filho', 20, '🏆 Selo Conquistado: Colecionador de Pontos', 'badge', '2026-10-15T17:48:07.464Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-badge-user-1791568907378-perfil_verificado', 'user-1791568907378', 'Edson Silva Filho', 30, '🏆 Selo Conquistado: Perfil Verificado', 'badge', '2026-10-15T17:48:07.461Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-badge-user-1791568907378-pioneiro', 'user-1791568907378', 'Edson Silva Filho', 25, '🏆 Selo Conquistado: Pioneiro Netfits', 'badge', '2026-10-15T17:48:07.453Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-mkp-earn-AHK0918295258', 'usr_andre', 'André Gallo', 130, '✨ Cashback compra Mkplace Pedido #AHK0918295258 (R$ 42,52)', 'shop', '2026-10-15T13:20:00Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1792017877174', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 5, 'Leitura: O Propósito Netfits — Longevidade, Saúde & Bem-Estar', 'feed', '2026-10-14T22:44:37.174Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1791932328762', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 1, 'Compartilhamento pós-visualização: Dra. Isabella Formigari', 'feed', '2026-10-13T22:58:48.762Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1791932297313', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 1, 'Compartilhamento pós-visualização: Netfits — O Propósito: Longevidade, Saúde & Bem-Estar', 'feed', '2026-10-13T22:58:17.313Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1791932291663', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 5, 'Desafio Netfits: Propósito, Longevidade & Bem-Estar', 'feed', '2026-10-13T22:58:11.663Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1791568907385-welcome', 'user-1791568907378', 'Edson Silva Filho', 50, '🎉 Bônus de Boas-Vindas — Novo Cadastro no App Netfits', 'welcome', '2026-10-09T18:01:47.385Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1791506834859', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 10, 'Curtida no conteúdo: Fibios Medicina e Saúde', 'feed', '2026-10-09T00:47:14.859Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1791506831871', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 10, 'Curtida no conteúdo: Dra. Isabella Formigari', 'feed', '2026-10-09T00:47:11.871Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1791478306897', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 10, 'Compartilhamento pós-visualização: Fibios Medicina e Saúde', 'feed', '2026-10-08T16:51:46.897Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1791415135742', 'usr_andre', 'André Aparecido da Cruz Gallo', 10, 'Compartilhamento pós-visualização: Fibios Medicina e Saúde', 'feed', '2026-10-07T23:18:55.742Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-badge-usr_andre-voz_da_tribo', 'usr_andre', 'André Gallo', 25, '🏆 Selo Conquistado: Voz da Tribo', 'badge', '2026-10-07T23:18:55.742Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-feed-cristiane-5', 'user-1791370530242', 'Cristiane Ferreira Formigari', 10, '📱 Engajamento no Feed Social', 'feed', '2026-10-07T11:35:40Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1791372862436', 'user-1791370530242', 'Cristiane Ferreira Formigari', 10, 'Leitura Completa de Artigo: Força & Longevidade (Dr. Franco Merici)', 'feed', '2026-10-07T11:34:22.436Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1791372848341', 'user-1791370530242', 'Cristiane Ferreira Formigari', 10, 'Visualização completa: Fibios Medicina e Saúde', 'feed', '2026-10-07T11:34:08.341Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-feed-cristiane-4', 'user-1791370530242', 'Cristiane Ferreira Formigari', 10, '❤️ Interação em Conteúdo da Comunidade', 'like', '2026-10-07T11:30:00Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-feed-cristiane-3', 'user-1791370530242', 'Cristiane Ferreira Formigari', 10, '🔗 Acesso a Conteúdo e Link Oficial', 'click', '2026-10-07T11:22:00Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-feed-cristiane-2', 'user-1791370530242', 'Cristiane Ferreira Formigari', 10, '🧠 Desafio Netfits: Longevidade & Especialistas Fibios', 'feed', '2026-10-07T11:15:00Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1791371235640', 'user-1791370530242', 'Cristiane Ferreira Formigari', 10, 'Desafio Netfits: Biomarcadores & Sono (Dra. Isabella Formigari — Fibios)', 'feed', '2026-10-07T11:07:15.640Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-mkp-earn-SOP0711045469', 'user-1791370530242', 'Cristiane Ferreira Formigari', 514, '✨ Cashback compra Mkplace Pedido #SOP0711045469', 'shop', '2026-10-07T11:05:34Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-feed-cristiane-1', 'user-1791370530242', 'Cristiane Ferreira Formigari', 10, '📱 Leitura Completa de Artigo no Feed', 'feed', '2026-10-07T11:05:00Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-mkp-spend-SOP0711045469', 'user-1791370530242', 'Cristiane Ferreira Formigari', -50, '🛍️ Resgate compra Mkplace Pedido #SOP0711045469', 'shop', '2026-10-07T11:04:47Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-referral-carlos', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 50, '🤝 Bônus por Indicar Novo Usuário (Cristiane Ferreira Formigari)', 'referral', '2026-10-07T10:55:30.242Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-welcome-cristiane-formigari', 'user-1791370530242', 'Cristiane Ferreira Formigari', 50, '🎉 Bônus de Boas-Vindas — Novo Cadastro no App Netfits', 'welcome', '2026-10-07T10:55:30.242Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1791369574465', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 10, 'Curtida no conteúdo: Dra. Isabella Formigari', 'feed', '2026-10-07T10:39:34.465Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1791329715167', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 10, 'Visualização completa: Dra. Isabella Formigari', 'feed', '2026-10-06T23:35:15.167Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1791327993374', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 10, 'Leitura Completa de Artigo: Força & Longevidade (Dr. Franco Merici)', 'feed', '2026-10-06T23:06:33.374Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1791326430420', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 10, 'Visualização de Vídeo (90%+ de Retenção): Longevidade & Biomarcadores — Dra. Isabella', 'feed', '2026-10-06T22:40:30.420Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1791326401867', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 10, 'Leitura Completa de Artigo: Biomarcadores & Sono (Dra. Isabella Formigari)', 'feed', '2026-10-06T22:40:01.867Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-1791326380851', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 10, 'Desafio Netfits: Força & Longevidade (Dr. Franco Merici — Fibios)', 'feed', '2026-10-06T22:39:40.851Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-feed-carlos', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 10, '📱 Engajamento no Feed de Conteúdo', 'feed', '2026-10-06T18:00:00Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-mkp-earn-PFM0610443019', 'usr_andre', 'André Gallo', 227, '✨ Cashback compra Mkplace Pedido #PFM0610443019 (R$ 56,85)', 'shop', '2026-10-06T10:45:38Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-welcome-carlos', 'usr_carlos_formigari', 'Carlos Rodrigo Formigari', 50, '🎉 Bônus de Boas-Vindas no Cadastramento Netfits', 'welcome', '2026-10-06T00:00:00Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-badge-usr_andre-primeira_compra', 'usr_andre', 'André Gallo', 40, '🏆 Selo Conquistado: Primeiro Cashback', 'badge', '2026-10-05T22:38:35Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-mkp-earn-GTJ0522372096', 'usr_andre', 'André Gallo', 814, '✨ Cashback compra Mkplace Pedido #GTJ0522372096 (R$ 203,50)', 'shop', '2026-10-05T22:38:35Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-badge-usr_andre-explorador_shop', 'usr_andre', 'André Gallo', 10, '🏆 Selo Conquistado: Explorador do Shop', 'badge', '2026-10-05T22:00:00Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-welcome-andre', 'usr_andre', 'André Gallo', 50, '🎉 Bônus de Boas-Vindas no Cadastramento Netfits', 'welcome', '2026-10-05T00:00:00Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-badge-usr_andre-pioneiro', 'usr_andre', 'André Gallo', 25, '🏆 Selo Conquistado: Pioneiro Netfits', 'badge', '2026-10-05T00:00:00Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-badge-usr_andre-perfil_verificado', 'usr_andre', 'André Gallo', 30, '🏆 Selo Conquistado: Perfil Verificado', 'badge', '2026-10-05T00:00:00Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-badge-usr_andre-colecionador_pontos', 'usr_andre', 'André Gallo', 20, '🏆 Selo Conquistado: Colecionador de Pontos', 'badge', '2026-10-05T00:00:00Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-badge-usr_andre-atleta_conectado', 'usr_andre', 'André Gallo', 30, '🏆 Selo Conquistado: Atleta de Alta Performance', 'badge', '2026-10-05T00:00:00Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef)
VALUES ('tx-welcome-jorge-miyane', 'usr_jorge_miyane', 'Jorge Miyane', 50, 'Bônus de Boas-Vindas no Cadastramento Netfits', 'welcome', '2026-10-27T22:23:54.000Z', NULL)
ON CONFLICT(id) DO UPDATE SET
  userId = excluded.userId,
  userName = excluded.userName,
  amount = excluded.amount,
  description = excluded.description,
  category = excluded.category,
  timestamp = excluded.timestamp;