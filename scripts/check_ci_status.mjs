async function checkStatus() {
  const commits = ['d16a975', '94a1402', '15eadb3'];
  for (const sha of commits) {
    try {
      console.log(`\n=== Commit ${sha} ===`);
      const statusesRes = await fetch(`https://api.github.com/repos/andre-gallo-nfs/app_netfits/commits/${sha}/statuses`, {
        headers: { 'User-Agent': 'NetfitsBot' }
      });
      const statuses = await statusesRes.json();
      if (Array.isArray(statuses) && statuses.length > 0) {
        statuses.forEach(s => {
          console.log(`  - [Status] ${s.context}: ${s.state} | ${s.description} | Target: ${s.target_url}`);
        });
      } else {
        console.log("  Nenhum status encontrado.");
      }
    } catch (e) {
      console.error(e);
    }
  }
}
checkStatus();
