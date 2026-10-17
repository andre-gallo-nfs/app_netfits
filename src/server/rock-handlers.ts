import { serverState } from "./server-state.ts";
import {
  findUserByAnyIdentifier,
  resolveUserForOrder,
  resolveUserFromToken,
  normalizeCpf,
} from "./user-resolver.ts";
import {
  generateMkplaceJwt,
  buildMkplaceProfile,
  buildMkplaceLoyaltyWallet,
  processMkplaceOrderNotification,
  getMkplaceConfig,
  getMkplaceWebviewUrl,
} from "../lib/integrations/mkplace.ts";
import {
  fetchPersistentOrders,
  savePersistentOrders,
  upsertOrderInList,
  validateWebhookApiKey,
  extractWebhookApiKey,
  syncUsersAndTransactionsToCloud,
  type PersistentOrderRecord,
} from "../lib/persistent-orders-store.ts";
import {
  sendPointsCreditedEmail,
  sendShopOrderConfirmedEmail,
  sendNpsSurveyEmail,
} from "../lib/emails/email-service.ts";
import { executeDebitPointsFEFO } from "../lib/fefo-service.ts";

export async function handleRockRoutes(
  req: Request,
  url: URL,
  corsHeaders: Record<string, string>
): Promise<Response | null> {
  // ==========================================
  // 1. Perfil do Cliente (GET/PUT /customer/profile e aliases)
  // ==========================================
  const isProfileEndpoint =
    url.pathname === "/customer/profile" ||
    url.pathname === "/customer/profile/" ||
    url.pathname === "/api/customer/profile" ||
    url.pathname === "/api/customer/profile/" ||
    url.pathname === "/customer" ||
    url.pathname === "/customer/" ||
    url.pathname === "/api/customer" ||
    url.pathname === "/api/customer/" ||
    url.pathname.startsWith("/customer/profile/") ||
    url.pathname.startsWith("/api/customer/profile/") ||
    url.pathname.startsWith("/customer/") ||
    url.pathname.startsWith("/api/customer/");

  if (isProfileEndpoint) {
    const authHeader =
      req.headers.get("Authorization") ||
      req.headers.get("x-api-key") ||
      req.headers.get("x-customer-token") ||
      url.searchParams.get("token") ||
      url.searchParams.get("customerToken");

    const user = resolveUserFromToken(authHeader, serverState.users);
    if (!user) {
      return new Response(
        JSON.stringify({ error: "Unauthorized", message: "Token de autenticação ausente ou inválido" }),
        { status: 401, headers: corsHeaders }
      );
    }

    if (req.method === "GET") {
      if (url.pathname.includes("/addresses") || url.pathname.endsWith("/addresses")) {
        const profile = buildMkplaceProfile(user);
        return new Response(JSON.stringify(profile.addresses), { status: 200, headers: corsHeaders });
      }
      if (url.pathname.includes("/cards") || url.pathname.endsWith("/cards") || url.pathname.includes("/payment-methods")) {
        return new Response(JSON.stringify([]), { status: 200, headers: corsHeaders });
      }
      const profile = buildMkplaceProfile(user);
      return new Response(JSON.stringify(profile), { status: 200, headers: corsHeaders });
    }

    if (req.method === "PUT" || req.method === "POST" || req.method === "PATCH") {
      try {
        if (url.pathname.includes("/cards") || url.pathname.endsWith("/cards") || url.pathname.includes("/payment-methods")) {
          return new Response(
            JSON.stringify({ success: true, message: "Cartão validado com sucesso" }),
            { status: 200, headers: corsHeaders }
          );
        }

        const body = await req.json();
        if (body.name || body.fullName) user.fullName = String(body.name || body.fullName).trim();
        if (body.document || body.cpf) {
          user.cpf = String(body.document || body.cpf).replace(/\D/g, "");
        }
        if (body.birthdate || body.birthDate) {
          user.birthDate = String(body.birthdate || body.birthDate).trim();
        }
        if (body.gender !== undefined) user.gender = body.gender;

        if (Array.isArray(body.phones) && body.phones[0]?.number) {
          user.phone = `${body.phones[0].areaCode || "11"}${body.phones[0].number}`;
        } else if (body.phone) {
          if (typeof body.phone === "object" && body.phone.number) {
            user.phone = `${body.phone.areaCode || "11"}${body.phone.number}`;
          } else {
            user.phone = String(body.phone).trim();
          }
        }

        const incomingAddr =
          (Array.isArray(body.addresses) && body.addresses[0]) ||
          body.address ||
          body.billingAddress ||
          body.shippingAddress ||
          null;

        if (incomingAddr && typeof incomingAddr === "object") {
          if (incomingAddr.street) user.street = String(incomingAddr.street).trim();
          if (incomingAddr.number) user.number = String(incomingAddr.number).trim();
          if (incomingAddr.complement !== undefined) user.complement = String(incomingAddr.complement || "").trim();
          if (incomingAddr.neighborhood) user.neighborhood = String(incomingAddr.neighborhood).trim();
          if (incomingAddr.city) user.city = String(incomingAddr.city).trim();
          if (incomingAddr.state) user.state = String(incomingAddr.state).trim();
          if (incomingAddr.shortState) user.shortState = String(incomingAddr.shortState).trim().toUpperCase();
          if (incomingAddr.zipcode) user.zipcode = String(incomingAddr.zipcode).replace(/\D/g, "");
          user.address = `${user.street || ""}, ${user.number || ""}`.trim();
        }

        serverState.touchSync();
        const updatedProfile = buildMkplaceProfile(user);
        return new Response(JSON.stringify(updatedProfile), { status: 200, headers: corsHeaders });
      } catch (err: any) {
        return new Response(
          JSON.stringify({ exceptionType: "BadRequestError", message: err.message || "Invalid payload" }),
          { status: 400, headers: corsHeaders }
        );
      }
    }
  }

  // ==========================================
  // 2. Carteira de Fidelidade (GET /loyalty/wallet e aliases)
  // ==========================================
  const isWalletEndpoint =
    url.pathname === "/loyalty/wallet" ||
    url.pathname === "/loyalty/wallet/" ||
    url.pathname === "/api/loyalty/wallet" ||
    url.pathname === "/api/loyalty/wallet/" ||
    url.pathname === "/loyalty" ||
    url.pathname === "/loyalty/" ||
    url.pathname === "/api/loyalty" ||
    url.pathname === "/api/loyalty/" ||
    url.pathname.startsWith("/loyalty/wallet/") ||
    url.pathname.startsWith("/api/loyalty/wallet/") ||
    url.pathname.startsWith("/loyalty/") ||
    url.pathname.startsWith("/api/loyalty/");

  if (isWalletEndpoint) {
    const authHeader =
      req.headers.get("Authorization") ||
      req.headers.get("x-api-key") ||
      url.searchParams.get("token");

    const user = resolveUserFromToken(authHeader, serverState.users);
    if (!user) {
      return new Response(
        JSON.stringify({ error: "Unauthorized", message: "Token de autenticação ausente ou inválido" }),
        { status: 401, headers: corsHeaders }
      );
    }
    const balance = user.nfsBalance ?? 0;
    const walletResponse = buildMkplaceLoyaltyWallet(balance, user.id);
    return new Response(JSON.stringify(walletResponse), { status: 200, headers: corsHeaders });
  }

  // ==========================================
  // 2.1. Reserva ou Débito Direto de Pontos (/points/reserve, /points/debit)
  // ==========================================
  const isPointsEndpoint =
    url.pathname === "/points/reserve" ||
    url.pathname === "/points/reserve/" ||
    url.pathname === "/api/points/reserve" ||
    url.pathname === "/api/points/reserve/" ||
    url.pathname === "/points/debit" ||
    url.pathname === "/points/debit/" ||
    url.pathname === "/api/points/debit" ||
    url.pathname === "/api/points/debit/";

  if (isPointsEndpoint) {
    const authHeader = req.headers.get("Authorization") || url.searchParams.get("token");
    const user = resolveUserFromToken(authHeader, serverState.users);
    if (!user) {
      return new Response(
        JSON.stringify({ error: "Unauthorized", message: "Token de autenticação ausente ou inválido" }),
        { status: 401, headers: corsHeaders }
      );
    }
    return new Response(
      JSON.stringify({
        success: true,
        status: "RESERVED",
        customerId: user.id,
        balance: user.nfsBalance ?? 0,
        timestamp: new Date().toISOString(),
      }),
      { status: 200, headers: corsHeaders }
    );
  }

  // ==========================================
  // 3. Endpoint de Recebimento de Pedidos da Mkplace (/api/orders, /orders, /api/marketplace/mkplace/webhook, /api/marketplace/mkplace/orders)
  // ==========================================
  const isOrdersEndpoint =
    url.pathname === "/api/orders" || url.pathname === "/api/orders/" ||
    url.pathname === "/orders" || url.pathname === "/orders/" ||
    url.pathname === "/api/marketplace/mkplace/webhook" || url.pathname === "/api/marketplace/mkplace/webhook/" ||
    url.pathname === "/api/marketplace/mkplace/orders" || url.pathname === "/api/marketplace/mkplace/orders/" ||
    url.pathname === "/checkout" || url.pathname === "/checkout/" ||
    url.pathname === "/api/checkout" || url.pathname === "/api/checkout/" ||
    url.pathname.startsWith("/orders/") ||
    url.pathname.startsWith("/api/orders/");

  if (isOrdersEndpoint) {
    if (req.method === "HEAD") {
      return new Response(null, { status: 200, headers: corsHeaders });
    }

    if (req.method === "GET") {
      const apiKey = extractWebhookApiKey(req.headers);

      if (!validateWebhookApiKey(apiKey)) {
        return new Response(
          JSON.stringify({
            error: "Unauthorized",
            message: "Missing or invalid x-api-key header for orders endpoint",
          }),
          { status: 401, headers: corsHeaders }
        );
      }

      const persistedOrders = await fetchPersistentOrders();

      const sanitizedOrders = persistedOrders.map((ord: any) => ({
        _id: ord._id,
        orderRef: ord.orderRef,
        type: ord.type,
        status: ord.status,
        paymentStatus: ord.paymentStatus,
        substatus: ord.substatus,
        summary: ord.summary,
        customer: ord.customer
          ? {
              ref: ord.customer.ref,
              name: ord.customer.name,
            }
          : undefined,
        items: ord.items || [],
        metadata: ord.metadata || {},
        paymentMethod: ord.metadata?.paymentMethod || ord.paymentMethod,
        shipping: ord.shipping || {},
        carrier: ord.shipping?.carrier || ord.carrier,
        trackingCode: ord.shipping?.trackingCode || ord.trackingCode,
        slaDays: ord.shipping?.slaDays || ord.slaDays,
        sellerName: ord.sellerName || ord.items?.[0]?.sellerName,
        sellerId: ord.sellerId || ord.items?.[0]?.sellerId,
        productName: ord.productName || ord.items?.[0]?.name,
        brand: ord.brand || ord.items?.[0]?.brand,
        category: ord.category || ord.items?.[0]?.category,
        cashbackEarned: ord.cashbackEarned || ord.netfitsProcessing?.pointsEarned,
        createdAt: ord.createdAt,
        updatedAt: ord.updatedAt,
        paidAt: ord.paidAt,
      }));

      return new Response(
        JSON.stringify({
          status: "ready",
          message: "Netfits Orders Webhook Endpoint is online and persistent",
          endpoint: url.pathname,
          totalOrdersReceived: persistedOrders.length,
          recentOrders: sanitizedOrders,
          acceptedAuth: ["x-api-key"],
          storeId: "RhOFkbZJIN",
          accountId: "RhOFkbZJIN",
          serverTime: new Date().toISOString(),
        }),
        { status: 200, headers: corsHeaders }
      );
    }

    if (req.method === "POST") {
      const requestTimestamp = new Date().toISOString();
      const apiKey = extractWebhookApiKey(req.headers);

      if (!validateWebhookApiKey(apiKey)) {
        console.warn(`[MKPlace Webhook Log] ${requestTimestamp} | UNKNOWN | REJECTED | HTTP 401`);
        return new Response(
          JSON.stringify({
            error: "Unauthorized",
            message: "Missing or invalid x-api-key header",
          }),
          { status: 401, headers: corsHeaders }
        );
      }

      let body: any;
      try {
        const rawText = await req.text();
        if (!rawText || !rawText.trim()) {
          console.warn(`[MKPlace Webhook Log] ${requestTimestamp} | EMPTY_BODY | BAD_REQUEST | HTTP 400`);
          return new Response(
            JSON.stringify({ error: "Bad Request", message: "Empty request body" }),
            { status: 400, headers: corsHeaders }
          );
        }
        body = JSON.parse(rawText);
      } catch (parseErr: any) {
        console.warn(`[MKPlace Webhook Log] ${requestTimestamp} | INVALID_JSON | BAD_REQUEST | HTTP 400`);
        return new Response(
          JSON.stringify({ error: "Bad Request", message: "Malformed JSON payload", details: parseErr?.message }),
          { status: 400, headers: corsHeaders }
        );
      }

      const rawOrder = body?.order ? body.order : body;
      const orderId = String(rawOrder?._id || rawOrder?.orderRef || rawOrder?.id || "").trim();

      if (!orderId) {
        console.warn(`[MKPlace Webhook Log] ${requestTimestamp} | MISSING_ID | BAD_REQUEST | HTTP 400`);
        return new Response(
          JSON.stringify({ error: "Bad Request", message: "Field '_id' is required" }),
          { status: 400, headers: corsHeaders }
        );
      }

      const incomingStatus = String(rawOrder?.status || rawOrder?.paymentStatus || "WAITING-PAYMENT").toUpperCase().replace(/_/g, "-");

      try {
        const user = resolveUserForOrder(rawOrder, serverState.users);
        const isClubMember = user?.userCategory === "associado" || user?.isClubMember === true;

        const result = processMkplaceOrderNotification(rawOrder, isClubMember, {
          baseRate: serverState.operationalParams.nfsEarnedPerBrlSpent || 4.0,
          clubMultiplier: serverState.operationalParams.clubShopPointsMultiplier ?? 1.0,
          firstPurchaseBonus: serverState.operationalParams.shopFirstPurchaseBonusNfs ?? 0,
          takeRatePct: serverState.operationalParams.netfitsTakeRatePctFromGmv || 6.0,
        });

        const isWaitingPayment =
          incomingStatus === "WAITING-PAYMENT" ||
          incomingStatus === "PAYMENT-PENDING" ||
          incomingStatus === "PRE-ORDER" ||
          incomingStatus === "CREATED";

        const isApproved =
          incomingStatus === "PAID" ||
          incomingStatus === "BILLED" ||
          incomingStatus === "SENT" ||
          incomingStatus === "SHIPPED" ||
          incomingStatus === "PARTIALLY-DELIVERED" ||
          incomingStatus === "DELIVERED" ||
          incomingStatus === "PAYMENT-APPROVED" ||
          incomingStatus === "COMPLETED";

        const isCanceledOrRefunded =
          incomingStatus === "CANCELED" ||
          incomingStatus === "CANCELLED" ||
          incomingStatus === "REFUNDED" ||
          incomingStatus === "EXPIRED";

        const currentPersistentOrders = await fetchPersistentOrders();
        const existingOrder = currentPersistentOrders.find((o) => o._id === orderId);

        const alreadyCreditedCashback = Boolean(
          existingOrder?.netfitsProcessing?.cashbackCredited === true ||
          serverState.transactions.some((t) => t.id === `tx-mkp-earn-${orderId}`)
        );

        const alreadyDebitedPoints = Boolean(
          existingOrder?.netfitsProcessing?.pointsDebited === true ||
          serverState.transactions.some((t) => t.id === `tx-mkp-spend-${orderId}`)
        );

        let pointsDebited = alreadyDebitedPoints;
        let cashbackCredited = alreadyCreditedCashback;
        let isReplay = false;

        if (user) {
          if (isWaitingPayment) {
            if (result.pointsUsed > 0 && !alreadyDebitedPoints) {
              try {
                await executeDebitPointsFEFO({
                  userId: user.id,
                  amount: result.pointsUsed,
                  title: `🛍️ Resgate compra Mkplace Pedido #${orderId}`,
                  orderId,
                  actorRole: "service_role",
                });
                pointsDebited = true;
              } catch (debitErr: any) {
                console.warn(`[Order Debit] Falha na RPC FEFO, aplicando fallback: ${debitErr?.message}`);
                user.nfsBalance = Math.max(0, (user.nfsBalance || 0) - result.pointsUsed);
                pointsDebited = true;
                serverState.transactions.unshift({
                  id: `tx-mkp-spend-${orderId}`,
                  userId: user.id,
                  userName: user.fullName || "Atleta Netfits",
                  amount: -result.pointsUsed,
                  description: `🛍️ Resgate compra Mkplace Pedido #${orderId}`,
                  category: "shop",
                  timestamp: requestTimestamp,
                });
              }
              serverState.touchSync();
            }
          } else if (isApproved) {
            if (result.pointsUsed > 0 && !alreadyDebitedPoints) {
              try {
                await executeDebitPointsFEFO({
                  userId: user.id,
                  amount: result.pointsUsed,
                  title: `🛍️ Resgate compra Mkplace Pedido #${orderId}`,
                  orderId,
                  actorRole: "service_role",
                });
                pointsDebited = true;
              } catch (debitErr: any) {
                console.warn(`[Order Debit] Falha na RPC FEFO, aplicando fallback: ${debitErr?.message}`);
                user.nfsBalance = Math.max(0, (user.nfsBalance || 0) - result.pointsUsed);
                pointsDebited = true;
                serverState.transactions.unshift({
                  id: `tx-mkp-spend-${orderId}`,
                  userId: user.id,
                  userName: user.fullName || "Atleta Netfits",
                  amount: -result.pointsUsed,
                  description: `🛍️ Resgate compra Mkplace Pedido #${orderId}`,
                  category: "shop",
                  timestamp: requestTimestamp,
                });
              }
            }

            if (result.nfsEarned > 0 && !alreadyCreditedCashback) {
              user.nfsBalance = (user.nfsBalance || 0) + result.nfsEarned;
              cashbackCredited = true;

              serverState.transactions.unshift({
                id: `tx-mkp-earn-${orderId}`,
                userId: user.id,
                userName: user.fullName || "Atleta Netfits",
                amount: result.nfsEarned,
                description: `✨ Cashback compra Mkplace Pedido #${orderId}`,
                category: "shop",
                timestamp: requestTimestamp,
              });

              serverState.touchSync();
            } else if (alreadyCreditedCashback) {
              isReplay = true;
            }
          } else if (isCanceledOrRefunded) {
            if (alreadyDebitedPoints) {
              user.nfsBalance = (user.nfsBalance || 0) + result.pointsUsed;
              serverState.transactions.unshift({
                id: `tx-mkp-refund-${orderId}`,
                userId: user.id,
                userName: user.fullName || "Atleta Netfits",
                amount: result.pointsUsed,
                description: `↩️ Estorno de pontos - Pedido cancelado #${orderId}`,
                category: "shop",
                timestamp: requestTimestamp,
              });
              pointsDebited = false;
            }
            if (alreadyCreditedCashback) {
              user.nfsBalance = Math.max(0, (user.nfsBalance || 0) - result.nfsEarned);
              serverState.transactions.unshift({
                id: `tx-mkp-cb-refund-${orderId}`,
                userId: user.id,
                userName: user.fullName || "Atleta Netfits",
                amount: -result.nfsEarned,
                description: `↩️ Estorno de cashback - Pedido cancelado #${orderId}`,
                category: "shop",
                timestamp: requestTimestamp,
              });
              cashbackCredited = false;
            }
            serverState.touchSync();
          }
        }

        const orderRecord: PersistentOrderRecord = {
          _id: orderId,
          orderRef: String(rawOrder?.orderRef || orderId),
          type: rawOrder?.type || "ORDER",
          status: incomingStatus,
          paymentStatus: rawOrder?.paymentStatus || incomingStatus,
          substatus: rawOrder?.substatus,
          storeId: rawOrder?.storeId || "RhOFkbZJIN",
          accountId: rawOrder?.accountId || "RhOFkbZJIN",
          createdAt: rawOrder?.createdAt || requestTimestamp,
          updatedAt: rawOrder?.updatedAt || requestTimestamp,
          paidAt: rawOrder?.paidAt || (isApproved ? requestTimestamp : undefined),
          metadata: rawOrder?.metadata,
          summary: rawOrder?.summary,
          customer: rawOrder?.customer,
          items: rawOrder?.items,
          netfitsProcessing: {
            processedAt: requestTimestamp,
            pointsUsed: result.pointsUsed,
            pointsEarned: result.nfsEarned,
            userMatchedId: user?.id || null,
            userMatchedName: user?.fullName || null,
            userMatchedEmail: user?.email || null,
            cashbackCredited,
            pointsDebited,
            httpStatusReturned: 200,
          },
          rawPayload: body,
        };

        const { updatedList, finalOrder } = upsertOrderInList(currentPersistentOrders, orderRecord);
        serverState.receivedOrders = [...updatedList] as any;

        const persistOk = await savePersistentOrders(updatedList);
        if (!persistOk) {
          console.error(`[MKPlace Webhook Log] ${requestTimestamp} | ${orderId} | ${incomingStatus} | HTTP 500 Persistent Storage Error`);
          return new Response(
            JSON.stringify({
              error: "Internal Server Error",
              message: "Failed to persist order in cloud database",
              orderId,
              status: incomingStatus,
            }),
            { status: 500, headers: corsHeaders }
          );
        }

        syncUsersAndTransactionsToCloud(serverState.users, serverState.transactions).catch((err) => {
          console.warn("[syncUsersAndTransactionsToCloud] Warning:", err);
        });

        const targetRecipientEmail = user?.email || rawOrder?.customerEmail || rawOrder?.customer?.email || "";
        const targetRecipientName = user?.fullName || rawOrder?.customer?.name || "Atleta Netfits";

        if (targetRecipientEmail && targetRecipientEmail.includes("@") && !isReplay) {
          const rawItems = Array.isArray(finalOrder?.items) ? finalOrder.items : [];
          const itemsSummary = rawItems.length > 0
            ? rawItems.map((it: any) => `${it.name || it.title || "Item"} (x${it.quantity || 1})`).join(", ")
            : "Produtos Netfits Shop";
          const firstItem = rawItems[0] || {};
          const storeName = (rawOrder as any)?.storeName || firstItem?.sellerName || "Netfits Shop";

          if (isApproved) {
            sendShopOrderConfirmedEmail({
              to: targetRecipientEmail,
              nomeUsuario: targetRecipientName,
              numeroPedido: String(finalOrder.orderRef || orderId),
              produto: itemsSummary,
              parceiro: storeName,
              quantidade: rawItems.reduce((acc: number, it: any) => acc + (Number(it.quantity) || 1), 0) || 1,
              valorSubtotal: (finalOrder?.summary as any)?.total ?? (finalOrder?.summary as any)?.subtotal,
              pontosUtilizados: result.pointsUsed || 0,
              valorDescontoPontos: (result.pointsUsed || 0) > 0 ? ((result.pointsUsed || 0) * 0.25).toFixed(2) : undefined,
              valorFrete: (finalOrder?.summary as any)?.totalShippingCost ? String((finalOrder?.summary as any)?.totalShippingCost) : undefined,
              formaPagamento: (finalOrder as any)?.paymentMethod || rawOrder?.paymentMethod || "Cartão de Crédito",
              valorTotalPago: (finalOrder?.summary as any)?.finalPrice ?? (finalOrder?.summary as any)?.total,
              saldoRestante: user ? user.nfsBalance : undefined,
              dataCompra: new Date().toLocaleDateString("pt-BR"),
            }).catch((err) => {
              console.warn("[MKPlace Order Email] Falha no disparo de confirmação:", err);
            });
          }

          if (cashbackCredited && result.nfsEarned > 0) {
            sendPointsCreditedEmail({
              to: targetRecipientEmail,
              nomeUsuario: targetRecipientName,
              pontos: result.nfsEarned,
              origem: `Cashback da Compra no Shop #${orderId}`,
              saldoTotal: user ? user.nfsBalance : result.nfsEarned,
              dataHora: new Date().toLocaleString("pt-BR"),
            }).catch((err) => {
              console.warn("[MKPlace Cashback Email] Falha no disparo de cashback:", err);
            });
          }

          const isDelivered = ["DELIVERED", "COMPLETED", "ENTREGUE"].includes(String(incomingStatus).toUpperCase());
          if (isDelivered) {
            sendNpsSurveyEmail({
              to: targetRecipientEmail,
              nomeUsuario: targetRecipientName,
              tipoPesquisa: "compra",
              numeroPedido: String(finalOrder.orderRef || orderId),
              produto: itemsSummary,
            }).catch((err) => {
              console.warn("[MKPlace NPS Email] Falha no disparo de pesquisa NPS:", err);
            });
          }
        }

        console.log(`[MKPlace Webhook Log] ${requestTimestamp} | ${orderId} | ${incomingStatus} | HTTP 200`);

        return new Response(
          JSON.stringify({
            success: true,
            _id: orderId,
            orderRef: finalOrder.orderRef,
            status: finalOrder.status,
            pointsUsed: result.pointsUsed,
            nfsEarned: result.nfsEarned,
            isReplay,
            persisted: true,
            totalOrdersCount: updatedList.length,
            timestamp: requestTimestamp,
          }),
          { status: 200, headers: corsHeaders }
        );
      } catch (processErr: any) {
        console.error(`[MKPlace Webhook Log] ${requestTimestamp} | ${orderId} | ERROR | HTTP 500`, processErr);
        return new Response(
          JSON.stringify({
            error: "Internal Server Error",
            message: processErr?.message || "Erro no processamento do pedido",
            orderId,
          }),
          { status: 500, headers: corsHeaders }
        );
      }
    }
  }

  // ==========================================
  // 4. Emissor de Token SSO Mkplace (/api/marketplace/mkplace/token)
  // ==========================================
  if (url.pathname === "/api/marketplace/mkplace/token" || url.pathname === "/api/marketplace/mkplace/token/") {
    try {
      let targetUser: any = null;
      let customExpires: number | undefined;

      if (req.method === "POST") {
        try {
          const body = await req.json();
          const lookupId = body?.userId || body?.id;
          const lookupEmail = body?.email || body?.identifier;
          const lookupCpf = body?.cpf || body?.document;

          if (lookupId || lookupEmail || lookupCpf) {
            const found =
              findUserByAnyIdentifier(lookupId, serverState.users) ||
              findUserByAnyIdentifier(lookupCpf, serverState.users) ||
              findUserByAnyIdentifier(lookupEmail, serverState.users);
            if (found) {
              targetUser = found;
            } else {
              targetUser = {
                id: lookupId || `usr_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
                fullName: body?.fullName || body?.name || "Atleta Netfits",
                email: lookupEmail || "",
                cpf: normalizeCpf(lookupCpf) || undefined,
                nfsBalance: 50,
                userCategory: "atleta",
              };
              serverState.users.push(targetUser);
            }
          }

          if (targetUser) {
            if (body?.cpf) targetUser.cpf = String(body.cpf).replace(/\D/g, "");
            if (body?.document) targetUser.cpf = String(body.document).replace(/\D/g, "");
            if (body?.phone) targetUser.phone = String(body.phone).trim();
            if (body?.address) targetUser.address = String(body.address).trim();
            if (body?.street) targetUser.street = String(body.street).trim();
            if (body?.number) targetUser.number = String(body.number).trim();
            if (body?.complement !== undefined) targetUser.complement = String(body.complement).trim();
            if (body?.neighborhood) targetUser.neighborhood = String(body.neighborhood).trim();
            if (body?.city) targetUser.city = String(body.city).trim();
            if (body?.state) targetUser.state = String(body.state).trim();
            if (body?.shortState) targetUser.shortState = String(body.shortState).trim();
            if (body?.zipcode) targetUser.zipcode = String(body.zipcode).trim();
            if (body?.birthDate) targetUser.birthDate = String(body.birthDate).trim();
            if (body?.gender !== undefined) targetUser.gender = body.gender;
            if (body?.fullName && (!targetUser.fullName || targetUser.fullName === "Atleta Netfits")) {
              targetUser.fullName = String(body.fullName).trim();
            }

            if (targetUser.address && (!targetUser.street || !targetUser.number)) {
              const parts = String(targetUser.address).split(/[,\-·]/).map((s: string) => s.trim()).filter(Boolean);
              if (parts[0] && !targetUser.street) targetUser.street = parts[0];
              if (parts[1] && !targetUser.number) targetUser.number = parts[1];
              if (parts[2] && !targetUser.neighborhood) targetUser.neighborhood = parts[2];
              if (parts[3] && !targetUser.city) targetUser.city = parts[3];
            }
          }

          if (body?.expiresInSeconds) {
            customExpires = Number(body.expiresInSeconds);
          }
        } catch {
          // Empty or invalid body
        }
      } else if (req.method === "GET") {
        const userId = url.searchParams.get("userId") || url.searchParams.get("id");
        const email = url.searchParams.get("email");
        const cpf = url.searchParams.get("cpf") || url.searchParams.get("document");

        if (userId || email || cpf) {
          const found =
            findUserByAnyIdentifier(userId, serverState.users) ||
            findUserByAnyIdentifier(cpf, serverState.users) ||
            findUserByAnyIdentifier(email, serverState.users);
          if (found) {
            targetUser = found;
          } else {
            targetUser = {
              id: userId || `usr_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
              fullName: url.searchParams.get("fullName") || url.searchParams.get("name") || "Atleta Netfits",
              email: email || "",
              cpf: normalizeCpf(cpf) || undefined,
              nfsBalance: 50,
              userCategory: "atleta",
            };
            serverState.users.push(targetUser);
          }

          const getCpf = cpf;
          if (getCpf) targetUser.cpf = normalizeCpf(getCpf) || targetUser.cpf;
          const getPhone = url.searchParams.get("phone");
          if (getPhone) targetUser.phone = getPhone.trim();
          const getAddress = url.searchParams.get("address");
          if (getAddress) targetUser.address = getAddress.trim();
        }
        const expParam = url.searchParams.get("expiresInSeconds") || url.searchParams.get("exp");
        if (expParam) {
          customExpires = Number(expParam);
        }
      }

      if (!targetUser) {
        return new Response(
          JSON.stringify({
            error: "BadRequest",
            message: "Identificador unívoco do usuário (userId, cpf ou email) é obrigatório para emissão de token",
          }),
          { status: 400, headers: corsHeaders }
        );
      }

      const expiresInSeconds = customExpires && customExpires > 0 ? customExpires : 86400;
      const token = generateMkplaceJwt(targetUser, expiresInSeconds);
      const webviewUrl = getMkplaceWebviewUrl(targetUser);
      const config = getMkplaceConfig();

      return new Response(
        JSON.stringify({
          success: true,
          user: {
            id: targetUser.id,
            fullName: targetUser.fullName,
            email: targetUser.email,
          },
          token,
          webviewUrl,
          expiresInSeconds,
          keyId: config.keyId,
          storeId: config.storeId,
          accountId: config.accountId,
          isMock: config.isMock,
        }),
        { status: 200, headers: corsHeaders }
      );
    } catch (err: any) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Failed to generate Mkplace token",
          details: err?.message || String(err),
        }),
        { status: 500, headers: corsHeaders }
      );
    }
  }

  // ==========================================
  // 5. Diagnóstico de Prontidão da Mkplace (/api/marketplace/mkplace/status)
  // ==========================================
  if (url.pathname === "/api/marketplace/mkplace/status" || url.pathname === "/api/marketplace/mkplace/status/") {
    const config = getMkplaceConfig();
    return new Response(
      JSON.stringify({
        status: "ready",
        partner: "Rock Encantech / Mkplace",
        mode: config.isMock ? "sandbox_mock_keys" : "live_credentials",
        config: {
          storeId: config.storeId,
          accountId: config.accountId,
          keyId: config.keyId,
          webviewUrl: config.webviewUrl,
        },
        endpoints: [
          { method: "GET", path: "/customer/profile", description: "Obter perfil do cliente (Bearer RS256)" },
          { method: "PUT", path: "/customer/profile", description: "Atualizar perfil do cliente (Bearer RS256)" },
          { method: "GET", path: "/loyalty/wallet", description: "Consultar carteira de pontos (Bearer RS256)" },
          { method: "POST", path: "/api/marketplace/mkplace/webhook", description: "Recebimento de webhooks de pedidos/pagamentos" },
          { method: "POST", path: "/api/marketplace/mkplace/token", description: "Emissão interna de token SSO para Webview" },
        ],
        operationalRules: {
          cashbackNormalNfsPerBrl: serverState.operationalParams.nfsEarnedPerBrlSpent || 4.0,
          clubShopMultiplier: serverState.operationalParams.clubShopPointsMultiplier ?? 1.0,
          cashbackClubNfsPerBrl: (serverState.operationalParams.nfsEarnedPerBrlSpent || 4.0) * (serverState.operationalParams.clubShopPointsMultiplier ?? 1.0),
          firstPurchaseBonusNfs: serverState.operationalParams.shopFirstPurchaseBonusNfs ?? 0,
          newUserRegistrationBonusNfs: serverState.operationalParams.newUserRegistrationBonusNfs ?? 50,
          cppAcumuloBrl: serverState.operationalParams.cppAcumuloBrl ?? 0.015,
          cppResgateBrl: serverState.operationalParams.cppResgateBrl ?? 0.01,
          friendCommissionPct: 0.0,
          netfitsTakeRatePct: serverState.operationalParams.netfitsTakeRatePctFromGmv || 6.0,
          settlementPeriodDays: 14,
        },
      }),
      { status: 200, headers: corsHeaders }
    );
  }

  return null;
}
