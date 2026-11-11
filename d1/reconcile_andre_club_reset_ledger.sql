-- ======================================================================
-- RECONCILIAÇÃO CANÔNICA DE ANDRÉ GALLO E DESATIVAÇÃO GERAL DO CLUBE
-- DATA: 2026-11-10T23:45:00-03:00
-- GOVERNANÇA: LL-012, LL-013, LL-017
-- SALDO CONCILIADO: 854 nfs (17 entradas reais = +1.895 nfs, 2 estornos cancelamento = -1.041 nfs)
-- ======================================================================

-- 1. DESATIVAÇÃO GERAL DO CLUBE E LIQUIDAÇÃO DE SALDO
UPDATE users SET 
  clubStatus = 'inactive', 
  clubPlanId = NULL, 
  clubSubscriptionId = NULL,
  nfsBalance = 854,
  updatedAt = '2026-11-11T02:45:00.000Z',
  metadata = '{"id":"usr_andre","fullName":"André Gallo","email":"aacgallo@hotmail.com","phone":"(11) 99535-1513","cpf":"256.647.308-03","birthDate":"13/11/1975","address":"Rua Carlos Steinen, 193 (Apto 121) - Paraíso, São Paulo · SP","street":"Rua Carlos Steinen","number":"193","complement":"Apto 121","neighborhood":"Paraíso","city":"São Paulo","state":"São Paulo","shortState":"SP","zipcode":"04004011","sports":["Corrida de rua","Trail running","Maratona","Triathlon","Ciclismo","Natação","Musculação"],"healthPlan":"Sem plano","gym":"Academia local / Independente","coaching":"Limite Team","wearable":"Garmin Connect","garminUserId":"garmin_usr_andre","wearableConnectedAt":"2026-11-06T00:00:00Z","nfsBalance":854,"userCategory":"atleta","plan":"free","isClubMember":false,"isClubSubscriber":false,"registeredAt":"2026-10-05T00:00:00Z","identifier":"aacgallo@hotmail.com","type":"admin","referralCode":"GALLO-NETFITS"}'
WHERE id = 'usr_andre';

UPDATE users SET 
  clubStatus = 'inactive', 
  clubPlanId = NULL, 
  clubSubscriptionId = NULL,
  updatedAt = '2026-11-11T02:45:00.000Z'
WHERE id = 'usr_apple_review';

-- 2. TRANSAÇÕES OFICIAIS DO LIVRO-RAZÃO DE ANDRÉ GALLO (PARIDADE 1:1)

-- 2.1. Boas-vindas e Cadastro
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef, metadata) 
VALUES ('tx-welcome-andre', 'usr_andre', 'André Gallo', 50, '🎉 Bônus de Boas-Vindas no Cadastramento Netfits', 'welcome', '2026-10-05T00:00:00Z', NULL, '{}')
ON CONFLICT(id) DO UPDATE SET amount = excluded.amount, description = excluded.description, category = excluded.category, timestamp = excluded.timestamp, orderRef = excluded.orderRef, metadata = excluded.metadata;

-- 2.2. Selos Oficiais de Conquista
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef, metadata) 
VALUES ('tx-badge-usr_andre-pioneiro', 'usr_andre', 'André Gallo', 25, '🏆 Selo Conquistado: Pioneiro Netfits', 'badge', '2026-10-05T00:00:00Z', NULL, '{}')
ON CONFLICT(id) DO UPDATE SET amount = excluded.amount, description = excluded.description, category = excluded.category, timestamp = excluded.timestamp, orderRef = excluded.orderRef, metadata = excluded.metadata;

INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef, metadata) 
VALUES ('tx-badge-usr_andre-perfil_verificado', 'usr_andre', 'André Gallo', 30, '🏆 Selo Conquistado: Perfil Verificado', 'badge', '2026-10-05T00:00:00Z', NULL, '{}')
ON CONFLICT(id) DO UPDATE SET amount = excluded.amount, description = excluded.description, category = excluded.category, timestamp = excluded.timestamp, orderRef = excluded.orderRef, metadata = excluded.metadata;

INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef, metadata) 
VALUES ('tx-badge-usr_andre-colecionador_pontos', 'usr_andre', 'André Gallo', 20, '🏆 Selo Conquistado: Colecionador de Pontos', 'badge', '2026-10-05T00:00:00Z', NULL, '{}')
ON CONFLICT(id) DO UPDATE SET amount = excluded.amount, description = excluded.description, category = excluded.category, timestamp = excluded.timestamp, orderRef = excluded.orderRef, metadata = excluded.metadata;

INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef, metadata) 
VALUES ('tx-badge-usr_andre-atleta_conectado', 'usr_andre', 'André Gallo', 30, '🏆 Selo Conquistado: Atleta de Alta Performance', 'badge', '2026-10-05T00:00:00Z', NULL, '{}')
ON CONFLICT(id) DO UPDATE SET amount = excluded.amount, description = excluded.description, category = excluded.category, timestamp = excluded.timestamp, orderRef = excluded.orderRef, metadata = excluded.metadata;

INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef, metadata) 
VALUES ('tx-badge-usr_andre-explorador_shop', 'usr_andre', 'André Gallo', 10, '🏆 Selo Conquistado: Explorador do Shop', 'badge', '2026-10-05T22:00:00Z', NULL, '{}')
ON CONFLICT(id) DO UPDATE SET amount = excluded.amount, description = excluded.description, category = excluded.category, timestamp = excluded.timestamp, orderRef = excluded.orderRef, metadata = excluded.metadata;

INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef, metadata) 
VALUES ('tx-badge-usr_andre-primeira_compra', 'usr_andre', 'André Gallo', 40, '🏆 Selo Conquistado: Primeiro Cashback', 'badge', '2026-10-05T22:38:35Z', NULL, '{}')
ON CONFLICT(id) DO UPDATE SET amount = excluded.amount, description = excluded.description, category = excluded.category, timestamp = excluded.timestamp, orderRef = excluded.orderRef, metadata = excluded.metadata;

INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef, metadata) 
VALUES ('tx-badge-usr_andre-voz_da_tribo', 'usr_andre', 'André Gallo', 25, '🏆 Selo Conquistado: Voz da Tribo', 'badge', '2026-10-07T23:18:55.742Z', NULL, '{}')
ON CONFLICT(id) DO UPDATE SET amount = excluded.amount, description = excluded.description, category = excluded.category, timestamp = excluded.timestamp, orderRef = excluded.orderRef, metadata = excluded.metadata;

INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef, metadata) 
VALUES ('tx-badge-usr_andre-mestre_cashback', 'usr_andre', 'André Gallo', 45, '🏆 Selo Conquistado: Mestre do Acúmulo', 'badge', '2026-10-15T20:31:01.012Z', NULL, '{}')
ON CONFLICT(id) DO UPDATE SET amount = excluded.amount, description = excluded.description, category = excluded.category, timestamp = excluded.timestamp, orderRef = excluded.orderRef, metadata = excluded.metadata;

-- 2.3. Pedidos Faturados na Rock Encantech
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef, metadata) 
VALUES ('tx-mkp-earn-GTJ0522372096', 'usr_andre', 'André Gallo', 814, '✨ Cashback compra Mkplace Pedido #GTJ0522372096 (R$ 203,50)', 'shop', '2026-10-05T22:38:35Z', 'GTJ0522372096', '{}')
ON CONFLICT(id) DO UPDATE SET amount = excluded.amount, description = excluded.description, category = excluded.category, timestamp = excluded.timestamp, orderRef = excluded.orderRef, metadata = excluded.metadata;

INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef, metadata) 
VALUES ('tx-mkp-earn-PFM0610443019', 'usr_andre', 'André Gallo', 227, '✨ Cashback compra Mkplace Pedido #PFM0610443019 (R$ 56,85)', 'shop', '2026-10-06T10:45:38Z', 'PFM0610443019', '{}')
ON CONFLICT(id) DO UPDATE SET amount = excluded.amount, description = excluded.description, category = excluded.category, timestamp = excluded.timestamp, orderRef = excluded.orderRef, metadata = excluded.metadata;

INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef, metadata) 
VALUES ('tx-mkp-earn-AHK0918295258', 'usr_andre', 'André Gallo', 130, '✨ Cashback compra Mkplace Pedido #AHK0918295258 (R$ 42,52) — Meia Puma', 'shop', '2026-10-15T13:20:00Z', 'AHK0918295258', '{}')
ON CONFLICT(id) DO UPDATE SET amount = excluded.amount, description = excluded.description, category = excluded.category, timestamp = excluded.timestamp, orderRef = excluded.orderRef, metadata = excluded.metadata;

INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef, metadata) 
VALUES ('tx-mkp-earn-FFP2716595769', 'usr_andre', 'André Gallo', 359, '✨ Cashback compra Mkplace Pedido #FFP2716595769 (R$ 89,99) — Boné Mizuno Run Sky', 'shop', '2026-10-27T16:59:48.251Z', 'FFP2716595769', '{}')
ON CONFLICT(id) DO UPDATE SET amount = excluded.amount, description = excluded.description, category = excluded.category, timestamp = excluded.timestamp, orderRef = excluded.orderRef, metadata = excluded.metadata;

-- 2.4. Feed & Interações
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef, metadata) 
VALUES ('tx-1791415135742', 'usr_andre', 'André Gallo', 10, 'Compartilhamento pós-visualização: Fibios Medicina e Saúde', 'feed', '2026-10-07T23:18:55.742Z', NULL, '{}')
ON CONFLICT(id) DO UPDATE SET amount = excluded.amount, description = excluded.description, category = excluded.category, timestamp = excluded.timestamp, orderRef = excluded.orderRef, metadata = excluded.metadata;

INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef, metadata) 
VALUES ('tx-1792096282278-190', 'usr_andre', 'André Gallo', 5, 'Leitura Completa de Artigo: Força & Longevidade (Dr. Franco Merici)', 'feed', '2026-10-15T20:31:22.278Z', NULL, '{}')
ON CONFLICT(id) DO UPDATE SET amount = excluded.amount, description = excluded.description, category = excluded.category, timestamp = excluded.timestamp, orderRef = excluded.orderRef, metadata = excluded.metadata;

INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef, metadata) 
VALUES ('tx-1792096301675-472', 'usr_andre', 'André Gallo', 5, 'Desafio Netfits: Força & Longevidade (Dr. Franco Merici — Fibios)', 'feed', '2026-10-15T20:31:41.675Z', NULL, '{}')
ON CONFLICT(id) DO UPDATE SET amount = excluded.amount, description = excluded.description, category = excluded.category, timestamp = excluded.timestamp, orderRef = excluded.orderRef, metadata = excluded.metadata;

-- 2.5. Indicação MGM
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef, metadata) 
VALUES ('tx-referral-cristiane-queli', 'usr_andre', 'André Gallo', 50, 'Bônus por Indicar Novo Usuário (Cristiane Queli da Silva Gallo) — MGM', 'referral', '2026-10-15T18:52:14.266Z', NULL, '{}')
ON CONFLICT(id) DO UPDATE SET amount = excluded.amount, description = excluded.description, category = excluded.category, timestamp = excluded.timestamp, orderRef = excluded.orderRef, metadata = excluded.metadata;

-- 2.6. Treino Garmin Validado
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef, metadata) 
VALUES ('tx_garmin_1794361702539_uqyaqqf', 'usr_andre', 'André Gallo', 20, 'Treino Garmin Validado no Clube: Treino Físico Garmin (+20 nfs)', 'workout', '2026-11-10T22:48:22.423Z', 'pw_garmin_andre_today', '{}')
ON CONFLICT(id) DO UPDATE SET amount = excluded.amount, description = excluded.description, category = excluded.category, timestamp = excluded.timestamp, orderRef = excluded.orderRef, metadata = excluded.metadata;

-- 2.7. Estornos por Cancelamento na Rock Encantech (09/11/2026)
INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef, metadata) 
VALUES ('tx-mkp-refund-GTJ0522372096', 'usr_andre', 'André Gallo', -814, 'Estorno de Cashback: Pedido Cancelado na Rock #GTJ0522372096', 'shop_refund', '2026-11-09T18:00:00.000Z', 'GTJ0522372096', '{"refund":true,"reason":"order_cancelled_rock"}')
ON CONFLICT(id) DO UPDATE SET amount = excluded.amount, description = excluded.description, category = excluded.category, timestamp = excluded.timestamp, orderRef = excluded.orderRef, metadata = excluded.metadata;

INSERT INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef, metadata) 
VALUES ('tx-mkp-refund-PFM0610443019', 'usr_andre', 'André Gallo', -227, 'Estorno de Cashback: Pedido Cancelado na Rock #PFM0610443019', 'shop_refund', '2026-11-09T18:01:00.000Z', 'PFM0610443019', '{"refund":true,"reason":"order_cancelled_rock"}')
ON CONFLICT(id) DO UPDATE SET amount = excluded.amount, description = excluded.description, category = excluded.category, timestamp = excluded.timestamp, orderRef = excluded.orderRef, metadata = excluded.metadata;
