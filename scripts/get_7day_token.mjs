async function get7DayToken() {
  const res = await fetch("https://app-netfits.vercel.app/api/marketplace/mkplace/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: "usr_102",
      expiresInSeconds: 604800 // 7 days (7 * 24 * 3600)
    })
  });

  const data = await res.json();
  const token = data.token;
  const parts = token.split(".");
  const header = JSON.parse(Buffer.from(parts[0], "base64url").toString());
  const payload = JSON.parse(Buffer.from(parts[1], "base64url").toString());

  console.log("=== TOKEN 7 DIAS ===");
  console.log("Status:", res.status);
  console.log("Expires In (seconds):", data.expiresInSeconds);
  console.log("Header:", JSON.stringify(header));
  console.log("Payload:", JSON.stringify(payload, null, 2));
  console.log("IAT:", new Date(payload.iat * 1000).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }));
  console.log("EXP:", new Date(payload.exp * 1000).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }));
  console.log("\nRAW TOKEN:\n" + token);
}

get7DayToken();
