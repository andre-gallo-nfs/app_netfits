async function scanForDomains() {
  const res = await fetch("https://netfits-ruddy.vercel.app");
  const html = await res.text();
  const scriptMatches = [...html.matchAll(/src="([^"]+)"/g)].map(m => m[1]);
  console.log(`Scanning ${scriptMatches.length} scripts...`);

  for (const src of scriptMatches) {
    const scriptUrl = src.startsWith("http") ? src : "https://netfits-ruddy.vercel.app" + src;
    try {
      const sRes = await fetch(scriptUrl);
      const code = await sRes.text();
      
      const targets = ["app-netfits", "netfits.com.br", "12523", "mkplace.com.br/lojas", "mkplace.com.br/api"];
      for (const t of targets) {
        if (code.includes(t)) {
          const i = code.indexOf(t);
          console.log(`[${src}] found "${t}":\n`, code.slice(Math.max(0, i - 120), i + 120), "\n---");
        }
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}
scanForDomains().catch(console.error);
