async function findBaseUrl() {
  const res = await fetch("https://netfits-ruddy.vercel.app");
  const html = await res.text();
  const scriptMatches = [...html.matchAll(/src="([^"]+)"/g)].map(m => m[1]);
  
  for (const src of scriptMatches) {
    const scriptUrl = src.startsWith("http") ? src : "https://netfits-ruddy.vercel.app" + src;
    const sRes = await fetch(scriptUrl);
    const code = await sRes.text();
    
    // Look for baseUrl assignment or retrieval
    if (code.includes("baseUrl:") || code.includes("baseUrl=")) {
      const matches = code.match(/[a-zA-Z0-9_]+(?:\.baseUrl|baseUrl\s*[:=]\s*[^,;}]+)/g) || [];
      console.log(`[${src}] found:`, matches.slice(0, 10));
    }
    if (code.includes("customerProfile") && code.includes("get(")) {
      console.log(`[${src}] has customerProfile get!`);
    }
  }
}
findBaseUrl().catch(console.error);
