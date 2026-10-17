async function test() {
  const res = await fetch('http://localhost:3000/node_modules/@tanstack/react-start/dist/plugin/default-entry/client.tsx');
  console.log('client.tsx status:', res.status);
  const text = await res.text();
  console.log('client.tsx content:\n', text);
  
  const routerRes = await fetch('http://localhost:3000/src/router.tsx');
  console.log('router.tsx status:', routerRes.status);
  
  const walletRes = await fetch('http://localhost:3000/src/routes/wallet.tsx?tsr-split=component');
  console.log('wallet component status:', walletRes.status);
  const walletText = await walletRes.text();
  console.log('wallet component length:', walletText.length);
  if (walletRes.status !== 200) {
    console.error('wallet component error:', walletText);
  }
}
test().catch(console.error);
