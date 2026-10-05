async function inspectShop() {
  const res = await fetch("https://netfits-ruddy.vercel.app");
  const html = await res.text();
  
  console.log("HTML length:", html.length);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  console.log("Title:", title);

  // Search for API host or endpoints
  const apiMatches = html.match(/https?:\/\/[a-zA-Z0-9.-]+\.com\.br[^\s"']*/g) || [];
  console.log("Found .com.br URLs:", [...new Set(apiMatches)]);
  
  const vercelMatches = html.match(/https?:\/\/[a-zA-Z0-9.-]+\.vercel\.app[^\s"']*/g) || [];
  console.log("Found vercel URLs:", [...new Set(vercelMatches)]);

  const mkplaceMatches = html.match(/https?:\/\/[a-zA-Z0-9.-]+\.mkplace\.com\.br[^\s"']*/g) || [];
  console.log("Found mkplace URLs:", [...new Set(mkplaceMatches)].slice(0, 5));
}

inspectShop().catch(console.error);
