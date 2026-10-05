import fs from 'fs';

const filePath = 'c:/Users/aacga/Projetos/app_netfits/src/lib/shared-sandbox-store.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Replace STORAGE_KEY, DEVICE_SESSION_KEY, SYNC_CHANNEL and INITIAL_USERS
const initialUsersRegex = /const STORAGE_KEY = "netfits_shared_sandbox_db_v2";[\s\S]*?const INITIAL_PARTNERS: SandboxPartner\[] = \[/;

const replacementUsers = `const STORAGE_KEY = "netfits_production_db_v1";
const DEVICE_SESSION_KEY = "netfits_production_active_user_v1";
const SYNC_CHANNEL = "netfits_production_sync_channel";

// Base Definitiva de Usuários em Produção (Go-Live)
const INITIAL_USERS: SandboxUser[] = [
  {
    id: "usr_andre",
    identifier: "aacgallo@hotmail.com.br",
    email: "aacgallo@hotmail.com.br",
    phone: "(11) 98765-4321",
    cpf: "987.654.321-11",
    birthDate: "1980-05-15",
    fullName: "André Gallo",
    type: "admin",
    nfsBalance: 50, // Saldo inicial oficial de 50 nfs pelo cadastramento
    referralCode: "GALLO-NETFITS",
    registeredAt: "2026-10-05T00:00:00Z",
  },
];

const INITIAL_PARTNERS: SandboxPartner[] = [`;

if (!initialUsersRegex.test(content)) {
  console.error("initialUsersRegex did not match!");
  process.exit(1);
}
content = content.replace(initialUsersRegex, replacementUsers);

// Replace INITIAL_TRANSACTIONS, INITIAL_TICKETS, INITIAL_ORDERS
const txRegex = /const INITIAL_TRANSACTIONS: SandboxTransaction\[] = \[[\s\S]*?const INITIAL_INTERACTIONS: SandboxInteraction\[] = \[/;

const replacementTx = `const INITIAL_TRANSACTIONS: SandboxTransaction[] = [
  {
    id: "tx-welcome-andre",
    userId: "usr_andre",
    userName: "André Gallo",
    amount: 50,
    description: "🎉 Bônus de Boas-Vindas no Cadastramento Netfits",
    category: "welcome",
    timestamp: "2026-10-05T00:00:00Z",
  },
];

const INITIAL_TICKETS: SandboxTicket[] = [];

const INITIAL_ORDERS: SandboxOrder[] = [];

const INITIAL_INTERACTIONS: SandboxInteraction[] = [`;

if (!txRegex.test(content)) {
  console.error("txRegex did not match!");
  process.exit(1);
}
content = content.replace(txRegex, replacementTx);

// Replace activeUserId default in loadFromStorage
content = content.replaceAll('"user-athlete-1"', '"usr_andre"');

// Add cleanup of old legacy storage keys in loadFromStorage
const cleanupTarget = `try {\n      const raw = localStorage.getItem(STORAGE_KEY);`;
const cleanupReplacement = `try {
      localStorage.removeItem("netfits_shared_sandbox_db_v2");
      localStorage.removeItem("netfits_device_active_user_id_v2");
      const raw = localStorage.getItem(STORAGE_KEY);`;

content = content.replace(cleanupTarget, cleanupReplacement);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully updated shared-sandbox-store.ts to production clean state!");
