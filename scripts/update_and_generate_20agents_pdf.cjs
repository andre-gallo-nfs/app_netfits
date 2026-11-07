/**
 * Atualiza o gerador de PDF para 20 Agentes e gera o novo documento oficial.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const scriptPath = path.join(__dirname, 'generate-multiagent-architecture-pdf.cjs');
let content = fs.readFileSync(scriptPath, 'utf8');

// 1. Substituir referências a 19 Agentes por 20 Agentes
content = content.replace(/19 Agentes/g, '20 Agentes');
content = content.replace(/19 agentes/g, '20 agentes');
content = content.replace(/Os 7 Agentes Transacionais em Runtime/g, 'Os 8 Agentes Transacionais e Sentinelas em Runtime');

// 2. Na Página 3, organizar os 8 agentes de runtime com um grid balanceado
const oldPage3Header = `<div class="title" style="font-size: 12.5pt; margin-bottom: 2px;">Os 8 Agentes Transacionais e Sentinelas em Runtime</div>
        <div class="subtitle" style="font-size: 8pt;">Sentinelas autônomas em execução no backend, APIs e nuvem mantendo a integridade contábil e de segurança</div>
      </div>`;

// Verificar se o Agente 20 já está presente
if (!content.includes('[AGENTE 20]')) {
  const agent20Box = `
      <div class="agent-box lime-border">
        <div class="agent-header">
          <div class="agent-name"><span>🛡️ [AGENTE 20]</span> Real-Time Online Ledger Sentinel & Live Sync Agent</div>
          <div class="agent-badge badge-runtime">SENTINELA ONLINE 24/7</div>
        </div>
        <div class="agent-desc">
          Audita e intercepta toda transação de pontos em tempo real no ato da criação. 
          <strong>Garante rigorosamente os benefícios do Clube Netfits</strong>: 250 nfs garantidos na adesão e a cada renovação mensal, 
          20 nfs por treino validado com relógios/sensores (Terra API), multiplicador de 4,8 nfs por R$ 1,00 no Shop (+20% mais pontos) 
          e 10% de comissão MGM sobre compras de indicados. Audita a integridade de 100% dos saldos e sincroniza o extrato ao vivo no celular do cliente.
        </div>
        <div class="agent-meta">
          <span><strong>Módulo:</strong> <code>src/server/ledger-sentinel.ts</code></span> · 
          <span><strong>Endpoint Watchdog:</strong> <code>/api/ledger/sentinel-check</code></span> · 
          <span><strong>Live Sync:</strong> <code>refetchInterval: 5000</code></span>
        </div>
      </div>`;

  // Inserir Agente 20 logo após Agente 14 na página 3
  const targetAfterAgente14 = `<span><strong>Meta de Custo:</strong> &lt; R$ 0,02 de TI por usuário ativo mensal</span>
        </div>
      </div>`;
  
  if (content.includes(targetAfterAgente14)) {
    content = content.replace(targetAfterAgente14, targetAfterAgente14 + agent20Box);
    console.log('✅ Bloco do Agente 20 inserido no gerador de PDF');
  } else {
    console.warn('⚠️ targetAfterAgente14 não localizado exatamente');
  }
}

// 3. Adicionar LL-011 na tabela da Página 4
if (!content.includes('LL-011')) {
  const targetTableEnd = `<tr>
            <td><strong>LL-010</strong></td>
            <td>Parâmetros Clube</td>
            <td>R$ 19,90/mês, 250 nfs/mês, 20 nfs/treino, 4,8 nfs/R$ 1 Shop, 10% MGM Clube.</td>
            <td><strong style="color: #991B1B;">HIGH</strong></td>
          </tr>
        </tbody>`;

  const newTableEnd = `<tr>
            <td><strong>LL-010</strong></td>
            <td>Parâmetros Clube</td>
            <td>R$ 19,90/mês, 250 nfs/mês, 20 nfs/treino, 4,8 nfs/R$ 1 Shop, 10% MGM Clube.</td>
            <td><strong style="color: #991B1B;">HIGH</strong></td>
          </tr>
          <tr>
            <td><strong>LL-011</strong></td>
            <td>Atomicidade & Ledger</td>
            <td>Proibição de mutação client-side de terceiros; atomicidade de cadastro/MGM no backend; persistência antes do e-mail.</td>
            <td><strong style="color: #991B1B;">BLOCKER</strong></td>
          </tr>
        </tbody>`;

  content = content.replace(targetTableEnd, newTableEnd);
  console.log('✅ LL-011 adicionada à tabela de lições aprendidas no gerador de PDF');
}

fs.writeFileSync(scriptPath, content, 'utf8');

// Executar o script para regerar o PDF oficial
console.log('🚀 Executando geração do novo PDF de 20 Agentes...');
try {
  const out = execSync('node scripts/generate-multiagent-architecture-pdf.cjs', { encoding: 'utf8' });
  console.log(out);
} catch (e) {
  console.error('Erro ao gerar PDF:', e.message);
}
