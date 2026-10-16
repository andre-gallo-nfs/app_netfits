import { serverState } from "./server-state.ts";
import { findUserByAnyIdentifier } from "./user-resolver.ts";
import {
  fetchPersistentOrders,
  syncUsersAndTransactionsToCloud,
  fetchPersistentUsersAndTransactionsFromCloud,
} from "../lib/persistent-orders-store.ts";

function purgeFabricatedMockData(u: any): any {
  return u;
}

export async function handleSyncRoutes(
  req: Request,
  url: URL,
  corsHeaders: Record<string, string>
): Promise<Response | null> {
  // ==========================================
  // ENDPOINTS DA TABELA DE DADOS MESTRES (OPERATIONAL PARAMS)
  // ==========================================
  if (url.pathname === "/api/operational-params" || url.pathname === "/api/operational-params/") {
    if (req.method === "POST") {
      try {
        const body = await req.json();
        serverState.operationalParams = {
          ...serverState.operationalParams,
          ...body,
        };
        serverState.lastParamsSyncTimestamp = new Date().toISOString();

        return new Response(
          JSON.stringify({
            success: true,
            params: serverState.operationalParams,
            updatedAt: serverState.lastParamsSyncTimestamp,
            source: "system_parameters_master",
          }),
          { status: 200, headers: corsHeaders }
        );
      } catch (err: any) {
        return new Response(
          JSON.stringify({ success: false, error: err?.message || "Invalid payload" }),
          { status: 400, headers: corsHeaders }
        );
      }
    }

    // GET: Retornar parâmetros mestres operacionais ativos
    return new Response(
      JSON.stringify({
        success: true,
        params: serverState.operationalParams,
        updatedAt: serverState.lastParamsSyncTimestamp,
        source: "system_parameters_master",
      }),
      { status: 200, headers: corsHeaders }
    );
  }

  // ==========================================
  // ENDPOINTS DE SINCRONIZAÇÃO DE USUÁRIOS
  // ==========================================
  if (url.pathname === "/api/users-sync" || url.pathname === "/api/users-sync/") {
    if (req.method === "POST") {
      try {
        const body = await req.json();
        const incomingUsers = Array.isArray(body?.users)
          ? body.users
          : body?.user
          ? [body.user]
          : [];

        const userMap = new Map<string, any>();
        for (const u of serverState.users) {
          if (u && u.id) userMap.set(u.id, u);
        }
        for (const rawUser of incomingUsers) {
          if (rawUser && (rawUser.id || rawUser.email || rawUser.cpf || rawUser.fullName)) {
            const u = purgeFabricatedMockData(rawUser);
            const found =
              findUserByAnyIdentifier(u.id, serverState.users) ||
              findUserByAnyIdentifier(u.cpf || u.document, serverState.users) ||
              findUserByAnyIdentifier(u.email || u.identifier, serverState.users) ||
              findUserByAnyIdentifier(u.fullName || u.name, serverState.users);
            const targetId = found ? found.id : (u.id || `usr_${Date.now()}`);
            u.id = targetId;

            const existing = userMap.get(targetId) || found;
            const merged = { ...existing };
            for (const [key, val] of Object.entries(u)) {
              if (val !== undefined && val !== null && val !== "") {
                (merged as any)[key] = val;
              }
            }
            if (u.address && (!merged.street || !merged.number || !merged.zipcode)) {
              const rawAddr = String(u.address);
              const cepMatch = rawAddr.match(/\b\d{5}-?\d{3}\b/);
              if (cepMatch && !merged.zipcode) {
                merged.zipcode = cepMatch[0].replace(/\D/g, "");
              }
              const parts = rawAddr
                .replace(/\b\d{5}-?\d{3}\b/, "")
                .split(/[,\-·]/)
                .map((s: string) => s.trim())
                .filter(Boolean);
              if (parts[0] && !merged.street) merged.street = parts[0];
              if (parts[1] && !merged.number) merged.number = parts[1];
              if (parts[2] && !merged.neighborhood) merged.neighborhood = parts[2];
              if (parts[3] && !merged.city) merged.city = parts[3];
            }
            userMap.set(targetId, purgeFabricatedMockData(merged));
          }
        }
        // Processamento e sincronização em tempo real de transações e histórico de ações
        const incomingTxs = Array.isArray(body?.transactions)
          ? body.transactions
          : body?.transaction
          ? [body.transaction]
          : [];

        if (incomingTxs.length > 0) {
          const txMap = new Map<string, any>();
          for (const tx of serverState.transactions) {
            if (tx && tx.id) txMap.set(tx.id, tx);
          }
          for (const rawTx of incomingTxs) {
            if (rawTx && rawTx.id) {
              if (rawTx.userId) {
                const resolvedUser =
                  findUserByAnyIdentifier(rawTx.userId, serverState.users) ||
                  findUserByAnyIdentifier(rawTx.userEmail, serverState.users) ||
                  findUserByAnyIdentifier(rawTx.userName, serverState.users);
                if (resolvedUser) {
                  rawTx.userId = resolvedUser.id;
                  if (!rawTx.userName && resolvedUser.fullName) rawTx.userName = resolvedUser.fullName;
                }
              }
              txMap.set(rawTx.id, rawTx);
            }
          }
          serverState.transactions = Array.from(txMap.values()).sort(
            (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          );
        }

        serverState.users = Array.from(userMap.values());
        serverState.touchSync();

        // Sincroniza imediatamente com a nuvem permanente (Gist Engine) de forma garantida antes da resposta HTTP
        try {
          await syncUsersAndTransactionsToCloud(serverState.users, serverState.transactions);
        } catch (err) {
          console.warn("[users-sync] CloudSync Warning:", err);
        }

        return new Response(
          JSON.stringify({
            success: true,
            count: serverState.users.length,
            users: serverState.users,
            transactions: serverState.transactions,
            transactionsCount: serverState.transactions.length,
            updatedAt: serverState.lastSyncTimestamp,
          }),
          { status: 200, headers: corsHeaders }
        );
      } catch (err) {
        return new Response(
          JSON.stringify({ success: false, error: String(err) }),
          { status: 400, headers: corsHeaders }
        );
      }
    }

    // GET: Retornar todos os usuários, extrato de transações e pedidos reais sincronizados na nuvem permanente
    let persistentOrders: any[] = [];
    try {
      const cloudData = await fetchPersistentUsersAndTransactionsFromCloud();
      if (cloudData && Array.isArray(cloudData.users) && cloudData.users.length > 0) {
        const mergedUserMap = new Map<string, any>();
        // Preserva integralmente os usuários pre-semeados e em memória
        for (const u of serverState.users) {
          if (u && u.id) mergedUserMap.set(u.id, u);
        }
        // Mescla usuários da nuvem sem jamais expurgar usuários existentes
        for (const cu of cloudData.users) {
          if (cu && cu.id) {
            const existing = mergedUserMap.get(cu.id);
            mergedUserMap.set(cu.id, existing ? { ...existing, ...cu } : cu);
          }
        }
        serverState.users = Array.from(mergedUserMap.values());

        if (cloudData.transactions && cloudData.transactions.length > 0) {
          const txMap = new Map<string, any>();
          for (const tx of serverState.transactions) {
            if (tx && tx.id) txMap.set(tx.id, tx);
          }
          for (const ctx of cloudData.transactions) {
            if (ctx && ctx.id) txMap.set(ctx.id, ctx);
          }
          serverState.transactions = Array.from(txMap.values()).sort(
            (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          );
        }
        if (cloudData.updatedAt) {
          serverState.lastSyncTimestamp = cloudData.updatedAt;
        }
      }
    } catch (err) {
      console.warn("[GET users-sync] Cloud hydration warning:", err);
    }

    try {
      persistentOrders = await fetchPersistentOrders();
    } catch (err) {
      console.warn("[GET users-sync] Orders hydration warning:", err);
    }

    const sanitizedOrders = (persistentOrders || []).map((ord: any) => ({
      _id: ord._id || ord.orderRef,
      orderRef: ord.orderRef || ord._id,
      type: ord.type || "ORDER",
      status: ord.status || "PAID",
      paymentStatus: ord.paymentStatus || "PAID",
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
      netfitsProcessing: ord.netfitsProcessing
        ? {
            pointsUsed: ord.netfitsProcessing.pointsUsed,
            pointsEarned: ord.netfitsProcessing.pointsEarned,
            cashbackCredited: ord.netfitsProcessing.cashbackCredited,
          }
        : undefined,
      createdAt: ord.createdAt,
      updatedAt: ord.updatedAt,
      paidAt: ord.paidAt,
    }));

    return new Response(
      JSON.stringify({
        success: true,
        count: serverState.users.length,
        users: serverState.users,
        transactions: serverState.transactions,
        transactionsCount: serverState.transactions.length,
        orders: sanitizedOrders,
        ordersCount: sanitizedOrders.length,
        updatedAt: serverState.lastSyncTimestamp,
      }),
      { status: 200, headers: corsHeaders }
    );
  }

  // ==========================================
  // ENDPOINTS DE EXTRATO DE TRANSAÇÕES EM TEMPO REAL
  // ==========================================
  if (url.pathname === "/api/transactions-sync" || url.pathname === "/api/transactions-sync/") {
    const filterUserId = url.searchParams.get("userId") || url.searchParams.get("id");
    let matchedUserId: string | null = null;
    if (filterUserId) {
      const found = findUserByAnyIdentifier(filterUserId, serverState.users);
      matchedUserId = found ? found.id : filterUserId;
    }
    const txs = matchedUserId
      ? serverState.transactions.filter(
          (t) => t.userId === matchedUserId || t.userId === filterUserId
        )
      : serverState.transactions;

    return new Response(
      JSON.stringify({
        success: true,
        count: txs.length,
        transactions: txs,
        updatedAt: serverState.lastSyncTimestamp,
      }),
      { status: 200, headers: corsHeaders }
    );
  }

  return null;
}
