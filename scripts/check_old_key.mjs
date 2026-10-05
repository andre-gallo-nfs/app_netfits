import fs from "node:fs";
import crypto from "node:crypto";

// The old dev public key that was previously in mkplace.ts
const oldPublicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAj1z77SbxQLIaLboKl03s
dIkC84YzbgOv2rE0DkzUoWQat609v0+v51Rsy9OEaAP5+iHzB5IuLSd5hEbfvwxi
lvJjnHU7aozVbgBHPWAolrm95k5juAAswifWg+xGqnpMToTjjEbCSO2VIdGWhbSU
+3HfIqT7RI/1GB5lkbJJhwCnV0F6JBAFVXg9FBqylWn/g9IzjudF+CKJ+xPcyFdK
B3hGFk5fZGFsjJ/Y4kRkIypDcemuq41dGpq4bq5IifEquwGNNNIqSVgoqh8xHAM0
9PzQ5g4b1YE62xQ2teyTWfEmCkDsCBw+fFWtjBo0VVGMDp2DgEeWMIFKPs++0ep9
5QIDAQAB
-----END PUBLIC KEY-----`;

// Fetch live token from vercel
const res = await fetch("https://app-netfits.vercel.app/api/marketplace/mkplace/token", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ userId: "usr_102" })
});
const data = await res.json();
const token = data.token;

const parts = token.split(".");
const dataToVerify = `${parts[0]}.${parts[1]}`;
const signatureBuf = Buffer.from(parts[2].replace(/-/g, "+").replace(/_/g, "/"), "base64");

const verifier = crypto.createVerify("RSA-SHA256");
verifier.update(dataToVerify);
verifier.end();

const isValidOld = verifier.verify(oldPublicKey, signatureBuf);

console.log("Validação contra a Chave Antiga de Produção que estava na Vercel:", isValidOld ? "✅ BINGO! Vercel ainda está usando a chave anterior!" : "❌ Não");
