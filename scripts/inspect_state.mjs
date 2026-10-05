async function inspectInitialState() {
  const res = await fetch("https://netfits-ruddy.vercel.app");
  const html = await res.text();
  
  // Find all JSON / state chunks
  const jsonChunks = [...html.matchAll(/self\.__next_f\.push\(\[1,"([^"]+)"\]\)/g)].map(m => m[1]);
  console.log(`Found ${jsonChunks.length} chunks`);
  
  for (const chunk of jsonChunks) {
    const unescaped = chunk.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    if (unescaped.includes("baseUrl") || unescaped.includes("url") || unescaped.includes("http")) {
      const urls = unescaped.match(/https?:\/\/[^\s"',\\]+/g) || [];
      const interesting = urls.filter(u => !u.includes("storage.main.mkplace") && !u.includes("w3.org"));
      if (interesting.length > 0) {
        console.log("Interesting URLs in chunk:", interesting);
      }
    }
  }
}
inspectInitialState().catch(console.error);
