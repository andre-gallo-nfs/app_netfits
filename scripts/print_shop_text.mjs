async function printShopText() {
  const tRes = await fetch("https://netfits-ruddy.vercel.app");
  const html = await tRes.text();
  
  // Extract visible text from body
  const bodyText = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
    
  console.log("Visible text:\n", bodyText.slice(0, 1000));
}
printShopText().catch(console.error);
