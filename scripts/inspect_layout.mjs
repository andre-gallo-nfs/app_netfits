async function inspectLayout() {
  const url = "https://netfits-ruddy.vercel.app/_next/static/chunks/app/t/%5Btenant%5D/layout-6d76f18fa19775f8.js";
  const res = await fetch(url);
  const code = await res.text();
  
  const idx = code.indexOf("customerProfile");
  console.log("Snippet around customerProfile:\n");
  console.log(code.slice(Math.max(0, idx - 300), idx + 500));
}
inspectLayout().catch(console.error);
