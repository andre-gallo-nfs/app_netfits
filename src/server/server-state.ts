import { DEFAULT_OPERATIONAL_PARAMS, type OperationalParams } from "../lib/operational-params-store.ts";
import { DEFAULT_PRESEEDED_USERS, DEFAULT_PRESEEDED_TRANSACTIONS } from "./mock-seed-data.ts";
import type { PersistentOrderRecord } from "../lib/persistent-orders-store.ts";

export interface ReceivedOrderRecord {
  id: string;
  receivedAt: string;
  sourceIp?: string | null;
  userAgent?: string | null;
  authHeader?: string | null;
  apiKey?: string | null;
  rawPayload: any;
  processedResult: any;
  userMatched: string | null;
}

export interface OrderReservationState {
  orderId: string;
  customerId: string;
  pointsReserved: number;
  cashbackCredited: number;
  status: string;
  updatedAt: string;
}

class ServerState {
  users: any[] = [...DEFAULT_PRESEEDED_USERS];
  transactions: any[] = [...DEFAULT_PRESEEDED_TRANSACTIONS];
  operationalParams: OperationalParams = { ...DEFAULT_OPERATIONAL_PARAMS };
  lastSyncTimestamp: string = new Date().toISOString();
  lastParamsSyncTimestamp: string = new Date().toISOString();
  receivedOrders: ReceivedOrderRecord[] = [];
  orderReservations = new Map<string, OrderReservationState>();

  getCorsHeaders(): Record<string, string> {
    return {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, X-Netfits-Signature, X-Netfits-Merchant-Id, Idempotency-Key, x-api-key, X-API-KEY, x-webhook-secret",
      "Content-Type": "application/json",
    };
  }

  touchSync() {
    this.lastSyncTimestamp = new Date().toISOString();
  }
}

export const serverState = new ServerState();
