import { fetchPersistentUsersAndTransactionsFromCloud, fetchPersistentOrders } from "../src/lib/persistent-orders-store.ts";
import { DEFAULT_PRESEEDED_USERS, DEFAULT_PRESEEDED_TRANSACTIONS } from "../src/server/mock-seed-data.ts";
import { DEFAULT_OPERATIONAL_PARAMS } from "../src/lib/operational-params-store.ts";
import fs from "node:fs";
import path from "node:path";

function escapeSql(val) {
  if (val === null || val === undefined) return "NULL";
  if (typeof val === "number" || typeof val === "boolean") return val;
  const str = String(val).replace(/'/g, "''");
  return `'${str}'`;
}

async function main() {
  console.log("Iniciando extração de dados para migração ao Cloudflare D1...");
  const cloudData = await fetchPersistentUsersAndTransactionsFromCloud();
  const cloudOrders = await fetchPersistentOrders();

  const userMap = new Map();
  for (const u of DEFAULT_PRESEEDED_USERS) {
    if (u && u.id) userMap.set(u.id, u);
  }
  if (cloudData && Array.isArray(cloudData.users)) {
    for (const u of cloudData.users) {
      if (u && u.id) {
        const existing = userMap.get(u.id);
        userMap.set(u.id, existing ? { ...existing, ...u } : u);
      }
    }
  }

  const txMap = new Map();
  for (const t of DEFAULT_PRESEEDED_TRANSACTIONS) {
    if (t && t.id) txMap.set(t.id, t);
  }
  if (cloudData && Array.isArray(cloudData.transactions)) {
    for (const t of cloudData.transactions) {
      if (t && t.id) txMap.set(t.id, t);
    }
  }

  const sqlStatements = [];
  sqlStatements.push("-- SEED DE USUÁRIOS");
  for (const u of userMap.values()) {
    const id = escapeSql(u.id);
    const email = escapeSql(u.email || null);
    const cpf = escapeSql(u.cpf || u.document || null);
    const fullName = escapeSql(u.fullName || u.name || "Usuário Netfits");
    const phone = escapeSql(u.phone || null);
    const nfsBalance = Number(u.nfsBalance || 0);
    const clubStatus = escapeSql(u.clubStatus || "inactive");
    const clubPlanId = escapeSql(u.clubPlanId || null);
    const clubSubId = escapeSql(u.clubSubscriptionId || null);
    const refCode = escapeSql(u.referralCode || null);
    const refBy = escapeSql(u.referredBy || null);
    const address = escapeSql(u.address || null);
    const zipcode = escapeSql(u.zipcode || u.cep || null);
    const street = escapeSql(u.street || null);
    const number = escapeSql(u.number || null);
    const neighborhood = escapeSql(u.neighborhood || u.bairro || null);
    const city = escapeSql(u.city || null);
    const state = escapeSql(u.state || u.uf || null);
    const createdAt = escapeSql(u.createdAt || new Date().toISOString());
    const updatedAt = escapeSql(new Date().toISOString());
    const metadata = escapeSql(JSON.stringify(u));

    sqlStatements.push(
      `INSERT OR REPLACE INTO users (id, email, cpf, fullName, phone, nfsBalance, clubStatus, clubPlanId, clubSubscriptionId, referralCode, referredBy, address, zipcode, street, number, neighborhood, city, state, createdAt, updatedAt, metadata) VALUES (${id}, ${email}, ${cpf}, ${fullName}, ${phone}, ${nfsBalance}, ${clubStatus}, ${clubPlanId}, ${clubSubId}, ${refCode}, ${refBy}, ${address}, ${zipcode}, ${street}, ${number}, ${neighborhood}, ${city}, ${state}, ${createdAt}, ${updatedAt}, ${metadata});`
    );
  }

  sqlStatements.push("\n-- SEED DE TRANSAÇÕES");
  for (const t of txMap.values()) {
    const id = escapeSql(t.id);
    const userId = escapeSql(t.userId);
    const userName = escapeSql(t.userName || null);
    const amount = Number(t.amount || 0);
    const description = escapeSql(t.description || "Transação");
    const category = escapeSql(t.category || "activity");
    const timestamp = escapeSql(t.timestamp || new Date().toISOString());
    const orderRef = escapeSql(t.orderRef || null);
    const metadata = escapeSql(JSON.stringify(t));

    sqlStatements.push(
      `INSERT OR REPLACE INTO transactions (id, userId, userName, amount, description, category, timestamp, orderRef, metadata) VALUES (${id}, ${userId}, ${userName}, ${amount}, ${description}, ${category}, ${timestamp}, ${orderRef}, ${metadata});`
    );
  }

  sqlStatements.push("\n-- SEED DE PEDIDOS DA ROCK");
  if (Array.isArray(cloudOrders)) {
    for (const ord of cloudOrders) {
      const id = escapeSql(ord._id || ord.orderRef);
      const orderRef = escapeSql(ord.orderRef || ord._id);
      const type = escapeSql(ord.type || "ORDER");
      const status = escapeSql(ord.status || "CONFIRMED");
      const paymentStatus = escapeSql(ord.paymentStatus || "PAID");
      const storeId = escapeSql(ord.storeId || null);
      const custId = escapeSql(ord.customerId || null);
      const custCpf = escapeSql(ord.customerCpf || null);
      const custEmail = escapeSql(ord.customerEmail || null);
      const custName = escapeSql(ord.customerName || null);
      const totalBrl = Number(ord.totalBrl || ord.orderTotal || 0);
      const finalPrice = Number(ord.finalPrice || 0);
      const pointsDiscountBrl = Number(ord.points?.currencyAmount || 0);
      const pointsRedeemed = Number(ord.points?.amount || 0);
      const cashbackNfs = Number(ord.cashbackNfs || 0);
      const rawPayload = escapeSql(JSON.stringify(ord));
      const createdAt = escapeSql(ord.createdAt || new Date().toISOString());
      const updatedAt = escapeSql(ord.updatedAt || new Date().toISOString());

      sqlStatements.push(
        `INSERT OR REPLACE INTO orders (id, orderRef, type, status, paymentStatus, storeId, customerId, customerCpf, customerEmail, customerName, totalBrl, finalPrice, pointsDiscountBrl, pointsRedeemed, cashbackNfs, rawPayload, createdAt, updatedAt) VALUES (${id}, ${orderRef}, ${type}, ${status}, ${paymentStatus}, ${storeId}, ${custId}, ${custCpf}, ${custEmail}, ${custName}, ${totalBrl}, ${finalPrice}, ${pointsDiscountBrl}, ${pointsRedeemed}, ${cashbackNfs}, ${rawPayload}, ${createdAt}, ${updatedAt});`
      );
    }
  }

  sqlStatements.push("\n-- SEED DE PARÂMETROS OPERACIONAIS");
  for (const [key, val] of Object.entries(DEFAULT_OPERATIONAL_PARAMS)) {
    sqlStatements.push(
      `INSERT OR REPLACE INTO operational_params (key, value, updatedAt) VALUES (${escapeSql(key)}, ${escapeSql(JSON.stringify(val))}, ${escapeSql(new Date().toISOString())});`
    );
  }

  const seedFile = path.resolve(process.cwd(), "d1/seed_data.sql");
  fs.writeFileSync(seedFile, sqlStatements.join("\n"), "utf-8");
  console.log(`Gerado seed com ${sqlStatements.length} instruções SQL em: ${seedFile}`);
}

main().catch((err) => {
  console.error("Erro na geração do seed:", err);
  process.exit(1);
});
