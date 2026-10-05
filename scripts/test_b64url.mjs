import fs from "node:fs";
import crypto from "node:crypto";

const publicKeyPath = "C:\\Users\\aacga\\OneDrive\\netfits\\Rock\\homolog\\rsa-generated.public.pem";
const publicKey = fs.readFileSync(publicKeyPath, "utf8");

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

const isValid = verifier.verify(publicKey, signatureBuf);

console.log("Validação usando base64url:", isValid ? "✅ VÁLIDO!" : "❌ INVÁLIDO");
