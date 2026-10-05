import fs from "node:fs";
import crypto from "node:crypto";

const prodPublicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmwcVSdrZNby6NTk+L5By
xEcOOcs2yANm/IkpwxbisPHdS6ezwl2eKULYQ5cECG8JZhk5R1JwCOjyJzndOYeT
TjcVsVgPm12AQ9HISjn/hpaMqiwDHfL85Nwt9DZPee1cDbS73jelZOpwBomcMND3
hfv2cZpjcWPy3Wh3jlDcNp1pRUl0dKFqd9oHn0n8bw1vgczCrt6Cn7kDslQeAYvR
dblspNChtGYWvUxzT1fdy3sPw3sA+nQ42VQqS6A+yCttkUo4FNhifaHhLhYkGIUv
HmAWesE/4ucr63KmJa/9IgNiQ8VrC7vZr42SEFm9Kw+UtcSq/B8TY2aF5sn4rLh8
PwIDAQAB
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
const signatureBuf = Buffer.from(parts[2], "base64url");

const verifier = crypto.createVerify("RSA-SHA256");
verifier.update(dataToVerify);
verifier.end();

const isValidProd = verifier.verify(prodPublicKey, signatureBuf);

console.log("Validação com a Chave de PRODUÇÃO (docx):", isValidProd ? "✅ 100% VÁLIDO! Essa é a chave configurada na Vercel!" : "❌ Não");
