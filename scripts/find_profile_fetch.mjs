async function findCustomerProfileFetch() {
  const res = await fetch("https://netfits-ruddy.vercel.app");
  const html = await res.text();
  const scriptMatches = [...html.matchAll(/src="([^"]+)"/g)].map(m => m[1]);

  for (const src of scriptMatches) {
    const scriptUrl = src.startsWith("http") ? src : "https://netfits-ruddy.vercel.app" + src;
    const sRes = await fetch(scriptUrl);
    const code = await sRes.text();
    
    if (code.includes("setCustomerProfile(") && !code.includes("customerProfile:s")) {
      console.log(`[${src}] calls setCustomerProfile!`);
      const i = code.indexOf("setCustomerProfile(");
      console.log(code.slice(Math.max(0, i - 200), i + 400));
    }
  }
}
findCustomerProfileFetch().catch(console.error);
