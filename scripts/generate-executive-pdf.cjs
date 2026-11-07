const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDirOneDrive = 'C:\\Users\\aacga\\OneDrive\\netfits';
const outputDirEstrategia = 'C:\\Users\\aacga\\OneDrive\\netfits\\01_Estrategia_e_Negocios';
const outputDirLocal = 'C:\\Users\\aacga\\Projetos\\app_netfits';

const pdfFilename = 'NETFITS_Relatorio_Executivo_Submissao_Lojas_Producao_20261104.pdf';
const outPdf1 = path.join(outputDirOneDrive, pdfFilename);
const outPdf2 = path.join(outputDirEstrategia, pdfFilename);
const outPdf3 = path.join(outputDirLocal, pdfFilename);

const htmlContent = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>NETFITS — Relatório Executivo de Submissão de Lojas</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
    
    @page {
      size: A4;
      margin: 18mm 16mm 18mm 16mm;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #1F242D;
      background: #FFFFFF;
      font-size: 11pt;
      line-height: 1.5;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    
    /* Header Block */
    .header {
      background: linear-gradient(135deg, #35106E 0%, #1A0738 100%);
      color: #FFFFFF;
      padding: 24px 28px;
      border-radius: 14px;
      margin-bottom: 24px;
      position: relative;
      overflow: hidden;
      border-bottom: 4px solid #C8F135;
    }
    
    .bipartite-bar {
      width: 120px;
      height: 5px;
      display: flex;
      border-radius: 3px;
      overflow: hidden;
      margin-bottom: 12px;
    }
    .bipartite-bar .purple { flex: 1; background: #6B2AD9; }
    .bipartite-bar .lime { flex: 1; background: #C8F135; }
    
    .brand-tag {
      font-size: 9pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #C8F135;
      margin-bottom: 6px;
    }
    
    .title {
      font-size: 19pt;
      font-weight: 900;
      letter-spacing: -0.5px;
      line-height: 1.2;
      margin-bottom: 8px;
    }
    
    .subtitle {
      font-size: 10pt;
      color: #D3C7EE;
      font-weight: 400;
    }
    
    .meta-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      margin-top: 16px;
      padding-top: 14px;
      border-top: 1px solid rgba(255, 255, 255, 0.15);
      font-size: 8.5pt;
    }
    
    .meta-item strong {
      display: block;
      color: #C8F135;
      font-size: 7.5pt;
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }
    
    /* Highlight Status Box */
    .status-banner {
      background: #F4FAF0;
      border: 1.5px solid #70B84D;
      border-left: 6px solid #5D7600;
      padding: 14px 18px;
      border-radius: 10px;
      margin-bottom: 22px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .status-text h3 {
      font-size: 12pt;
      font-weight: 800;
      color: #2D5215;
      margin-bottom: 2px;
    }
    .status-text p {
      font-size: 9pt;
      color: #3C6622;
    }
    
    .status-badge {
      background: #5D7600;
      color: #C8F135;
      font-weight: 800;
      font-size: 9pt;
      padding: 6px 14px;
      border-radius: 20px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      white-space: nowrap;
    }
    
    /* Section Headings */
    h2 {
      font-size: 12.5pt;
      font-weight: 800;
      color: #35106E;
      margin-top: 20px;
      margin-bottom: 10px;
      padding-bottom: 4px;
      border-bottom: 1.5px solid #EBE6F5;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    p {
      margin-bottom: 10px;
      font-size: 9.5pt;
      color: #3A3F4A;
      text-align: justify;
    }
    
    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 12px 0 18px 0;
      font-size: 8.5pt;
    }
    
    th {
      background: #35106E;
      color: #FFFFFF;
      font-weight: 700;
      text-align: left;
      padding: 8px 10px;
      font-size: 8pt;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    td {
      padding: 8px 10px;
      border-bottom: 1px solid #E5E1EE;
      vertical-align: top;
      color: #2D313A;
    }
    
    tr:nth-child(even) td {
      background: #F9F7FC;
    }
    
    .badge-ok {
      display: inline-block;
      background: #E8F8D8;
      color: #3F6E1B;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 7.5pt;
      border: 1px solid #9FD46B;
    }
    
    /* Grid cards */
    .card-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin: 12px 0 18px 0;
    }
    
    .card {
      background: #FBF9FE;
      border: 1px solid #DED7ED;
      border-radius: 10px;
      padding: 12px 14px;
      border-top: 3px solid #6B2AD9;
    }
    
    .card h4 {
      font-size: 9.5pt;
      font-weight: 700;
      color: #35106E;
      margin-bottom: 6px;
    }
    
    .card p {
      font-size: 8.5pt;
      color: #555A66;
      margin: 0;
      line-height: 1.4;
    }
    
    /* Key Highlights / Compliance */
    .compliance-box {
      background: #FFFBF0;
      border: 1px solid #F0DAA2;
      border-left: 4px solid #D9822B;
      padding: 10px 14px;
      border-radius: 6px;
      font-size: 8.5pt;
      color: #634311;
      margin-top: 10px;
      margin-bottom: 16px;
    }
    
    /* Footer */
    .footer {
      margin-top: 24px;
      padding-top: 12px;
      border-top: 1px solid #E2DDF0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 7.5pt;
      color: #7A8090;
    }
    
    .signatures {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin-top: 28px;
      padding-top: 10px;
      page-break-inside: avoid;
    }
    
    .sig-line {
      border-top: 1px solid #202127;
      padding-top: 6px;
      text-align: center;
      font-size: 8.5pt;
      color: #202127;
    }
    
    .sig-line strong {
      display: block;
      font-size: 9.5pt;
      color: #35106E;
    }
  </style>
</head>
<body>

  <!-- Header -->
  <div class="header">
    <div class="bipartite-bar">
      <div class="purple"></div>
      <div class="lime"></div>
    </div>
    <div class="brand-tag">Relatório Executivo Oficial de Governança</div>
    <h1 class="title">NETFITS — Submissão às Lojas de Aplicativos</h1>
    <div class="subtitle">Conclusão de Auditoria Técnica, Homologação e Envio de Produção (iOS & Android)</div>
    
    <div class="meta-grid">
      <div class="meta-item">
        <strong>Data da Submissão</strong>
        04 de Novembro de 2026
      </div>
      <div class="meta-item">
        <strong>Data do Go-Live Oficial</strong>
        14 de Novembro de 2026
      </div>
      <div class="meta-item">
        <strong>Bundle ID Oficial</strong>
        br.com.netfits.app
      </div>
      <div class="meta-item">
        <strong>Versão de Produção</strong>
        v1.0 (Build 5 / 1.0.4)
      </div>
    </div>
  </div>

  <!-- Status Banner -->
  <div class="status-banner">
    <div class="status-text">
      <h3>STATUS: 100% SUBMETIDO EM ANÁLISE DE PRODUÇÃO</h3>
      <p>Apple App Store e Google Play Store com travas de lançamento ativadas para liberação manual conjunta.</p>
    </div>
    <div class="status-badge">Pronto para o Dia 14</div>
  </div>

  <!-- 1. Sumário Executivo -->
  <h2>1. Sumário Executivo para os Administradores</h2>
  <p>
    Comunicamos formalmente à diretoria executiva e ao conselho de administração que o aplicativo <strong>Netfits</strong> concluiu com êxito todas as etapas de homologação técnica, adequação de segurança e conformidade regulatória. Nesta data (04/11/2026), ambas as compilações oficiais de <strong>Produção</strong> foram despachadas para as equipes de análise da <strong>Apple (Cupertino)</strong> e do <strong>Google (Mountain View)</strong>.
  </p>
  <p>
    Para garantir a sincronia e o impacto estratégico do evento de lançamento em <strong>14 de Novembro de 2026</strong>, foram acionados os mecanismos de contenção de release: <strong>Publicação Gerenciada (Google Play)</strong> e <strong>Liberação Manual (Apple App Store)</strong>. Os aplicativos serão aprovados pelas lojas previamente e permanecerão travados até o comando conjunto de publicação.
  </p>

  <!-- 2. Matriz de Submissão -->
  <h2>2. Matriz de Prontidão e Submissão das Lojas</h2>
  <table>
    <thead>
      <tr>
        <th>Loja / Plataforma</th>
        <th>Versão Submetida</th>
        <th>Status Atual</th>
        <th>Mecanismo de Liberação</th>
        <th>Previsão de Homologação</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Apple App Store (iOS)</strong><br><span style="font-size:7.5pt;color:#666;">iPhone 16/15 Pro, iPadOS</span></td>
        <td>v1.0 (Build 1.0)</td>
        <td><span class="badge-ok">Aguardando Revisão</span></td>
        <td><strong>Liberação Manual</strong><br>(Pendente pelo Desenvolvedor)</td>
        <td>24 a 48 horas úteis</td>
      </tr>
      <tr>
        <td><strong>Google Play Store (Android)</strong><br><span style="font-size:7.5pt;color:#666;">Smartphones, Wear OS, Tablets</span></td>
        <td>v1.0.4 (Código da Versão 5)</td>
        <td><span class="badge-ok">Em Análise (Produção)</span></td>
        <td><strong>Publicação Gerenciada</strong><br>(Pronto para Publicar)</td>
        <td>2 a 4 dias úteis</td>
      </tr>
    </tbody>
  </table>

  <!-- 3. Pilares Técnicos & Regulatórios Validados -->
  <h2>3. Pilares Técnicos, Segurança e Compliance Validados</h2>
  <div class="card-grid">
    <div class="card">
      <h4>Conformidade Médica e Ética CFM (Codame)</h4>
      <p>
        Assinaturas médicas institucionais 100% auditadas em conformidade estrita com o CFM: <em>Dr. Franco Merici (CRM-SP 212567)</em> e <em>Dra. Isabella Formigari (CRM-SP 282951)</em> identificados como médicos sócios fundadores da Fibios.
      </p>
    </div>
    <div class="card">
      <h4>Infraestrutura Cloudflare Workers (Edge)</h4>
      <p>
        Hospedagem de alta disponibilidade no Cloudflare (www.netfits.com.br), garantindo tempo de resposta inferior a 25ms em território nacional, proteção anti-DDoS e escalabilidade para o tráfego da rodada de lançamento.
      </p>
    </div>
    <div class="card">
      <h4>Netfits Guard v1.2 & Segurança Biométrica</h4>
      <p>
        Bloqueio automático por inatividade de 5 minutos, desbloqueio estrito por Face ID / Touch ID / Senha cadastrada, eliminação de travas no WebKit e credenciais de demonstração (demo@netfits.com.br) configuradas.
      </p>
    </div>
    <div class="card">
      <h4>Active Loyalty & Integração de Wearables</h4>
      <p>
        Middleware Terra API homologado para integração transparente com Apple Watch, Garmin e Strava. Motor de acúmulo de pontos nfs (4 nfs / R$ 1,00, FEFO 24 meses e Quizzes Fibios) em total aderência ao Business Case.
      </p>
    </div>
  </div>

  <!-- 4. Cronograma Oficial até o Go-Live -->
  <h2>4. Cronograma Operacional de Lançamento (04 a 14 de Novembro)</h2>
  <table>
    <thead>
      <tr>
        <th>Data</th>
        <th>Marco / Atividade Operacional</th>
        <th>Responsável</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>04/Nov (Hoje)</strong></td>
        <td>Submissão formal dos pacotes de Produção na Apple e Google Play com capturas nativas reais de tela.</td>
        <td>André Gallo / Squad Técnico</td>
        <td><span class="badge-ok">Concluído</span></td>
      </tr>
      <tr>
        <td><strong>05 a 08/Nov</strong></td>
        <td>Janela de análise técnica e homologação das equipes de engenharia da Apple e Google.</td>
        <td>App Review & Google Play Team</td>
        <td><em>Em Andamento</em></td>
      </tr>
      <tr>
        <td><strong>09 a 12/Nov</strong></td>
        <td>Confirmação dos status "Aprovado / Pendente de Liberação" em ambos os consoles.</td>
        <td>Squad Técnico Netfits</td>
        <td><em>Planejado</em></td>
      </tr>
      <tr>
        <td><strong>13/Nov (Véspera)</strong></td>
        <td>Checklist final de banco de dados, estoque de produtos no Shopping e testes de sanity em staging.</td>
        <td>Time de Operações & TI</td>
        <td><em>Planejado</em></td>
      </tr>
      <tr>
        <td><strong>14/Nov (Sábado)</strong></td>
        <td><strong>GO-LIVE OFICIAL:</strong> Disparo simultâneo dos botões de publicação pública nas duas lojas.</td>
        <td>Diretoria Executiva Netfits</td>
        <td><em>Marco Decisivo</em></td>
      </tr>
    </tbody>
  </table>

  <!-- Assinaturas -->
  <div class="signatures">
    <div class="sig-line">
      <strong>André Gallo</strong>
      Fundador & Diretor Executivo (CEO) — Netfits
    </div>
    <div class="sig-line">
      <strong>Antigravity Engineering Squad</strong>
      Lead Software Architecture & Release Governance
    </div>
  </div>

  <!-- Footer -->
  <div class="footer">
    <span>Netfits Tecnologia Ltda · CNPJ 57.082.029/0001-40 · www.netfits.com.br</span>
    <span>Documento Confidencial · Uso Interno Exclusivo da Administração</span>
  </div>

</body>
</html>
`;

const tempHtmlPath = path.resolve('temp_relatorio_executivo.html');
fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

console.log('Generating Executive PDF...');
const cmd = `"${chromePath}" --headless --disable-gpu --print-to-pdf="${outPdf1}" --no-pdf-header-footer "file:///${tempHtmlPath.replace(/\\\\/g, '/')}"`;
execSync(cmd);

// Copy to Strategy folder and local workspace
fs.copyFileSync(outPdf1, outPdf2);
fs.copyFileSync(outPdf1, outPdf3);

// Clean temp html
fs.unlinkSync(tempHtmlPath);

console.log('✅ PDF generated successfully:');
console.log('1. ' + outPdf1);
console.log('2. ' + outPdf2);
console.log('3. ' + outPdf3);
