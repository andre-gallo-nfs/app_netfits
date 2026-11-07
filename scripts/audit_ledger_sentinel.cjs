/**
 * Script de Auditoria do Real-Time Ledger Sentinel para o Orchestrator
 */
const { execSync } = require('child_process');

async function run() {
  const { realTimeLedgerSentinel } = await import('../src/server/ledger-sentinel.ts');
  let res = await realTimeLedgerSentinel.runFullAudit(true);

  if (res.discrepanciesCount > 0 && res.selfHealedCount > 0) {
    console.log(`[Ledger Sentinel] 🛡️ Auto-Heal acionado: ${res.selfHealedCount} saldos foram reconciliados automaticamente com o extrato.`);
    res = await realTimeLedgerSentinel.runFullAudit(false);
  }

  console.log(`[Ledger Sentinel] Usuários auditados: ${res.totalUsersAudited}`);
  console.log(`[Ledger Sentinel] Transações auditadas: ${res.totalTransactionsAudited}`);
  console.log(`[Ledger Sentinel] Balanço contábil duplo: ${res.isFullyBalanced ? '100% EQUILIBRADO' : 'DESEQUILÍBRIO'}`);
  console.log(`[Ledger Sentinel] Assinantes do Clube ativos: ${res.clubMetrics.activeSubscribers}`);
  console.log(`[Ledger Sentinel] Pontos do Clube auditados: ${res.clubMetrics.totalClubPointsAttributed} nfs`);

  if (!res.isFullyBalanced || res.discrepanciesCount > 0) {
    console.error(`❌ VETO: Foram detectadas ${res.discrepanciesCount} discrepâncias no ledger!`);
    console.error('Detalhes das discrepâncias:', JSON.stringify(res.discrepancies, null, 2));
    process.exit(1);
  }

  console.log('✅ SUCESSO: Ledger Sentinel validou 100% de integridade contábil em tempo real.');
}

run().catch(e => {
  console.error('❌ ERRO NO SENTINEL:', e);
  process.exit(1);
});
