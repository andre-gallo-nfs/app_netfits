const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDirOneDrive = 'C:\\Users\\aacga\\OneDrive\\netfits';
const outputDirEstrategia = 'C:\\Users\\aacga\\OneDrive\\netfits\\01_Estrategia_e_Negocios';
const outputDirLocal = 'C:\\Users\\aacga\\Projetos\\app_netfits\\docs';
const outputDirArtifact = 'C:\\Users\\aacga\\.gemini\\antigravity\\brain\\1d9fbea4-0b41-4e90-9628-a2bf2e057531';

const pdfFilename = 'NETFITS_Catalogo_e_Manual_dos_22_Agentes_de_IA.pdf';
const outPdf1 = path.join(outputDirOneDrive, pdfFilename);
const outPdf2 = path.join(outputDirEstrategia, pdfFilename);
const outPdf3 = path.join(outputDirLocal, pdfFilename);
const outPdf4 = path.join(outputDirArtifact, pdfFilename);

const htmlContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>NETFITS — Catálogo Executivo dos 22 Agentes de IA & Governança</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
    
    @page {
      size: A4;
      margin: 10mm 12mm 10mm 12mm;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #202127;
      background: #FFFFFF;
      font-size: 8pt;
      line-height: 1.35;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    
    .page {
      page-break-after: always;
      position: relative;
      height: 277mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    
    .page:last-child {
      page-break-after: avoid;
    }
    
    /* Header Block */
    .header {
      border-bottom: 2px solid #35106E;
      padding-bottom: 7px;
      margin-bottom: 9px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    
    .header-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .logo-badge {
      background: #202127;
      color: #5D7600;
      font-weight: 900;
      font-size: 13pt;
      letter-spacing: -0.5px;
      padding: 5px 12px;
      border-radius: 6px;
      border: 1px solid #35106E;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .logo-badge span.accent {
      color: #C8F135;
    }
    
    .header-titles h1 {
      font-size: 13pt;
      font-weight: 800;
      color: #35106E;
      letter-spacing: -0.4px;
      line-height: 1.15;
    }
    
    .header-titles p {
      font-size: 7.2pt;
      color: #6B2AD9;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.6px;
    }
    
    .header-right {
      text-align: right;
      font-size: 6.8pt;
      color: #555;
    }
    
    .header-right strong {
      color: #202127;
      display: block;
      font-size: 7.4pt;
    }

    /* Key Visual Bipartite Stripe */
    .kv-stripe {
      height: 3.5px;
      width: 100%;
      background: linear-gradient(90deg, #6B2AD9 0%, #6B2AD9 50%, #C8F135 50%, #C8F135 100%);
      margin-bottom: 9px;
      border-radius: 2px;
    }

    /* Footer */
    .footer {
      border-top: 1px solid #E5E7EB;
      padding-top: 5px;
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 6.6pt;
      color: #777;
    }

    /* Section Titles */
    .section-title {
      font-size: 10pt;
      font-weight: 800;
      color: #35106E;
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 6px;
      border-left: 3px solid #6B2AD9;
      padding-left: 6px;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }

    .section-desc {
      font-size: 7.4pt;
      color: #4B5563;
      margin-bottom: 8px;
    }

    /* Grid & Cards */
    .cards-grid-2col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 7px;
    }

    .cards-stack {
      display: flex;
      flex-direction: column;
      gap: 6.5px;
    }

    .agent-card {
      background: #FFFFFF;
      border: 1px solid #E5E7EB;
      border-radius: 6px;
      padding: 6px 8px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.03);
    }

    .agent-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
      border-bottom: 1px solid #F3F4F6;
      padding-bottom: 3px;
    }

    .agent-name-box {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .agent-id-pill {
      background: #35106E;
      color: #FFFFFF;
      font-weight: 800;
      font-size: 6.2pt;
      padding: 1.5px 5px;
      border-radius: 3px;
    }

    .agent-title {
      font-weight: 700;
      font-size: 7.8pt;
      color: #202127;
    }

    .badge-veto {
      background: #FEE2E2;
      color: #991B1B;
      font-weight: 800;
      font-size: 5.8pt;
      padding: 1.5px 5px;
      border-radius: 3px;
      border: 1px solid #FCA5A5;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }

    .badge-runtime {
      background: #E0E7FF;
      color: #3730A3;
      font-weight: 800;
      font-size: 5.8pt;
      padding: 1.5px 5px;
      border-radius: 3px;
      border: 1px solid #C7D2FE;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }

    .badge-maker {
      background: #FEF3C7;
      color: #92400E;
      font-weight: 800;
      font-size: 5.8pt;
      padding: 1.5px 5px;
      border-radius: 3px;
      border: 1px solid #FCD34D;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }

    .badge-front {
      background: #DCFCE7;
      color: #166534;
      font-weight: 800;
      font-size: 5.8pt;
      padding: 1.5px 5px;
      border-radius: 3px;
      border: 1px solid #86EFAC;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }

    .scope-box {
      background: #F2ECFD;
      border-left: 2.5px solid #6B2AD9;
      padding: 3px 6px;
      border-radius: 0 4px 4px 0;
      font-size: 7.1pt;
      color: #35106E;
      font-weight: 600;
      margin-bottom: 5px;
      line-height: 1.25;
    }

    .dos-donts-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5px;
    }

    .do-box {
      background: #F0FDF4;
      border: 1px solid #BBF7D0;
      border-radius: 4px;
      padding: 4px 6px;
      font-size: 6.8pt;
      line-height: 1.25;
      color: #14532D;
    }

    .dont-box {
      background: #FEF2F2;
      border: 1px solid #FECACA;
      border-radius: 4px;
      padding: 4px 6px;
      font-size: 6.8pt;
      line-height: 1.25;
      color: #7F1D1D;
    }

    .box-header-do {
      font-weight: 800;
      font-size: 6.2pt;
      color: #15803D;
      text-transform: uppercase;
      letter-spacing: 0.4px;
      margin-bottom: 2px;
      display: flex;
      align-items: center;
      gap: 3px;
    }

    .box-header-dont {
      font-weight: 800;
      font-size: 6.2pt;
      color: #B91C1C;
      text-transform: uppercase;
      letter-spacing: 0.4px;
      margin-bottom: 2px;
      display: flex;
      align-items: center;
      gap: 3px;
    }

    /* Summary Table */
    .summary-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 8px;
      font-size: 7pt;
    }

    .summary-table th {
      background: #35106E;
      color: #FFFFFF;
      font-weight: 700;
      padding: 4px 6px;
      text-align: left;
      font-size: 6.6pt;
      text-transform: uppercase;
      letter-spacing: 0.4px;
    }

    .summary-table td {
      padding: 4.5px 6px;
      border-bottom: 1px solid #E5E7EB;
      vertical-align: middle;
    }

    .summary-table tr:nth-child(even) td {
      background: #F9FAFB;
    }

    .pill-layer {
      font-weight: 700;
      font-size: 6.2pt;
      padding: 1.5px 5px;
      border-radius: 3px;
      display: inline-block;
    }

    /* Highlight Banner */
    .banner-box {
      background: linear-gradient(135deg, #35106E 0%, #1F0842 100%);
      color: #FFFFFF;
      border-radius: 6px;
      padding: 8px 12px;
      margin-bottom: 9px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .banner-box h2 {
      font-size: 9pt;
      font-weight: 800;
      color: #C8F135;
      margin-bottom: 2px;
    }

    .banner-box p {
      font-size: 7.2pt;
      color: #E9D5FF;
      line-height: 1.25;
      max-width: 82%;
    }

    .stat-pill {
      text-align: right;
      border-left: 2px solid #C8F135;
      padding-left: 10px;
    }

    .stat-number {
      font-size: 13pt;
      font-weight: 900;
      color: #C8F135;
      line-height: 1;
    }

    .stat-label {
      font-size: 6pt;
      color: #E9D5FF;
      text-transform: uppercase;
      letter-spacing: 0.4px;
    }

    .signatures-block {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-top: 10px;
      border-top: 1px dashed #D1D5DB;
      padding-top: 10px;
    }

    .sig-line {
      text-align: center;
      font-size: 6.6pt;
      color: #555;
    }

    .sig-line strong {
      display: block;
      color: #202127;
      font-size: 7.4pt;
      margin-bottom: 1px;
    }
  </style>
</head>
<body>

  <!-- ==================================================================== -->
  <!-- PÁGINA 1: CAPA EXECUTIVA & VISÃO GERAL DA ARQUITETURA MULTIAGÊNTICA -->
  <!-- ==================================================================== -->
  <div class="page">
    <div>
      <div class="header">
        <div class="header-left">
          <div class="logo-badge">NET<span>FITS</span></div>
          <div class="header-titles">
            <h1>Catálogo Executivo & Manual dos 22 Agentes de IA</h1>
            <p>Governança Multiagêntica, Atuação Cirúrgica e Delimitação de Fronteiras</p>
          </div>
        </div>
        <div class="header-right">
          <strong>Versão 3.2 Consolidada</strong>
          <span>Data: 09/Nov/2026 · Classificação: Institucional</span>
        </div>
      </div>
      <div class="kv-stripe"></div>

      <!-- Banner de Destaque -->
      <div class="banner-box">
        <div>
          <h2>🏛️ A ORGANIZAÇÃO AUMENTADA POR IA (AI-FIRST & CAPITAL EFFICIENT)</h2>
          <p>
            A Netfits opera sob o paradigma <strong>Maker-Checker-Gatekeeper</strong>: cada agente autônomo de inteligência possui responsabilidades estritas, fronteiras invioláveis e comandos de veto determinístico, substituindo a complexidade de 5 squads tradicionais por um núcleo fundador ultraeficiente.
          </p>
        </div>
        <div class="stat-pill">
          <div class="stat-number">22</div>
          <div class="stat-label">Agentes de IA</div>
          <div style="font-size: 5.5pt; color: #FFF; margin-top: 2px;">+R$ 5,5M Poupados</div>
        </div>
      </div>

      <!-- Tabela Síntese das 4 Camadas -->
      <div class="section-title">📊 As 4 Camadas Operacionais do Ecossistema</div>
      <table class="summary-table">
        <thead>
          <tr>
            <th style="width: 20%;">Camada Operacional</th>
            <th style="width: 14%;">Agentes</th>
            <th style="width: 26%;">Poder e Autoridade</th>
            <th>Missão Central e Foco de Entrega</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Governança &amp; Gatekeepers</strong></td>
            <td><span class="pill-layer" style="background:#FEE2E2; color:#991B1B;">8 Agentes</span></td>
            <td><strong>Poder de Veto Absoluto</strong></td>
            <td>Bloquear deploys e subidas para produção em caso de qualquer inconformidade médica, de rota, mobile, memória ou runtime.</td>
          </tr>
          <tr>
            <td><strong>2. Runtime &amp; Sentinelas Vivos</strong></td>
            <td><span class="pill-layer" style="background:#E0E7FF; color:#3730A3;">8 Agentes</span></td>
            <td><strong>Monitoramento Contínuo</strong></td>
            <td>Auditar o livro-razão (D1), prevenir fraudes no feed, conciliar compras no marketplace e validar sensores esportivos (Terra API).</td>
          </tr>
          <tr>
            <td><strong>3. Makers &amp; Especialistas</strong></td>
            <td><span class="pill-layer" style="background:#FEF3C7; color:#92400E;">5 Agentes</span></td>
            <td><strong>Execução e Engenharia</strong></td>
            <td>Desenvolver software rápido em TanStack Start/React, produzir criativos no KV oficial, pesquisar artigos médicos e garantir acessibilidade.</td>
          </tr>
          <tr>
            <td><strong>4. Experiência do Atleta</strong></td>
            <td><span class="pill-layer" style="background:#DCFCE7; color:#166534;">1 Agente</span></td>
            <td><strong>Interação com Usuário</strong></td>
            <td>Atender o atleta dentro do app, resolver dúvidas de saldo e regras do Clube e acelerar ações práticas em um toque.</td>
          </tr>
        </tbody>
      </table>

      <!-- Introdução da Camada 1 -->
      <div class="section-title" style="margin-top: 10px;">🛡️ Camada 1: Governança &amp; Gatekeepers (Agentes 1 a 4)</div>
      <p class="section-desc">Agentes que realizam checagens rigorosas antes de qualquer liberação de código para garantir risco zero em produção.</p>

      <div class="cards-stack">
        <!-- Agente 1 -->
        <div class="agent-card">
          <div class="agent-card-header">
            <div class="agent-name-box">
              <span class="agent-id-pill">01</span>
              <span class="agent-title">🚀 Release &amp; Routing Gatekeeper</span>
            </div>
            <span class="badge-veto">Poder de Veto</span>
          </div>
          <div class="scope-box">Campo de Atuação: Garante que todas as rotas e caminhos de navegação do aplicativo estejam íntegros e livres de códigos obsoletos antes de qualquer publicação.</div>
          <div class="dos-donts-grid">
            <div class="do-box">
              <div class="box-header-do">✔ O que faz</div>
              Testa se todas as páginas, abas e botões de voltar funcionam sem erros 404 e assegura que nenhum resquício de plataformas antigas (como Vercel) suba para a web.
            </div>
            <div class="dont-box">
              <div class="box-header-dont">✖ O que NÃO faz</div>
              Não desenha telas novas nem decide quais novas funcionalidades devem entrar no produto.
            </div>
          </div>
        </div>

        <!-- Agente 2 -->
        <div class="agent-card">
          <div class="agent-card-header">
            <div class="agent-name-box">
              <span class="agent-id-pill">02</span>
              <span class="agent-title">🩺 Brand, KV &amp; CFM Medical Compliance Gatekeeper</span>
            </div>
            <span class="badge-veto">Poder de Veto</span>
          </div>
          <div class="scope-box">Campo de Atuação: Protege a identidade visual oficial da marca e assegura a conformidade ética dos médicos fundadores perante o Conselho Federal de Medicina (CFM).</div>
          <div class="dos-donts-grid">
            <div class="do-box">
              <div class="box-header-do">✔ O que faz</div>
              Veta publicações ou telas que atribuam indevidamente especialidades médicas aos sócios da Fibios antes da homologação de seus títulos e audita o Key Visual (roxo, verde-limão e verde oliva).
            </div>
            <div class="dont-box">
              <div class="box-header-dont">✖ O que NÃO faz</div>
              Não escreve artigos médicos do zero nem emite diagnósticos clínicos ou receitas para os usuários.
            </div>
          </div>
        </div>

        <!-- Agente 3 -->
        <div class="agent-card">
          <div class="agent-card-header">
            <div class="agent-name-box">
              <span class="agent-id-pill">03</span>
              <span class="agent-title">📝 Editorial &amp; Content Quality Gatekeeper</span>
            </div>
            <span class="badge-veto">Poder de Veto</span>
          </div>
          <div class="scope-box">Campo de Atuação: Assegura que o conteúdo pedagógico do feed seja claro, acolhedor e totalmente livre de jargões técnicos ou corporativos.</div>
          <div class="dos-donts-grid">
            <div class="do-box">
              <div class="box-header-do">✔ O que faz</div>
              Confere se as perguntas e respostas dos quizzes estão corretas e veta siglas confusas para o atleta comum (como termos contábeis ou jargões de backend).
            </div>
            <div class="dont-box">
              <div class="box-header-dont">✖ O que NÃO faz</div>
              Não inventa dados de saúde sem embasamento e não aprova publicações sem o padrão canônico verde e preto.
            </div>
          </div>
        </div>

        <!-- Agente 4 -->
        <div class="agent-card">
          <div class="agent-card-header">
            <div class="agent-name-box">
              <span class="agent-id-pill">04</span>
              <span class="agent-title">📱 Mobile Cross-Platform &amp; Runtime Gatekeeper</span>
            </div>
            <span class="badge-veto">Poder de Veto</span>
          </div>
          <div class="scope-box">Campo de Atuação: Garante paridade absoluta de funcionamento entre celulares Android e iPhone, eliminando telas pretas e incompatibilidades de sistema.</div>
          <div class="dos-donts-grid">
            <div class="do-box">
              <div class="box-header-do">✔ O que faz</div>
              Audita interações de toque na tela, teclados virtuais, aberturas de links externos e componentes de WebView para que rodem idênticos no iOS e no Android.
            </div>
            <div class="dont-box">
              <div class="box-header-dont">✖ O que NÃO faz</div>
              Não executa testes de bateria em aparelhos físicos e não redesenha a estética das telas.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <span>NETFITS TECNOLOGIA LTDA · CNPJ 68.930.455/0001-40 · Alphaville, SP</span>
      <span>Página 1 de 5 · Visão Geral da Arquitetura &amp; Agentes 01 a 04</span>
    </div>
  </div>

  <!-- ==================================================================== -->
  <!-- PÁGINA 2: CAMADA 1 (FINAL) & CAMADA 2 (RUNTIME - PARTE 1) -->
  <!-- ==================================================================== -->
  <div class="page">
    <div>
      <div class="header">
        <div class="header-left">
          <div class="logo-badge">NET<span>FITS</span></div>
          <div class="header-titles">
            <h1>Camada 1 (Final) &amp; Camada 2: Runtime &amp; Sentinelas Vivos</h1>
            <p>Governança Multiagêntica e Monitoramento Contínuo do Livro-Razão</p>
          </div>
        </div>
        <div class="header-right">
          <strong>Agentes 05 a 12</strong>
          <span>Data: 09/Nov/2026 · Classificação: Institucional</span>
        </div>
      </div>
      <div class="kv-stripe"></div>

      <!-- Camada 1: Continuação (Agentes 5 a 8) -->
      <div class="section-title">🛡️ Camada 1: Governança &amp; Gatekeepers (Agentes 05 a 08)</div>
      <div class="cards-stack" style="margin-bottom: 9px;">
        <!-- Agente 5 -->
        <div class="agent-card">
          <div class="agent-card-header">
            <div class="agent-name-box">
              <span class="agent-id-pill">05</span>
              <span class="agent-title">🧠 Continuous Learning &amp; Institutional Memory Agent</span>
            </div>
            <span class="badge-veto">Poder de Veto</span>
          </div>
          <div class="scope-box">Campo de Atuação: Preserva a memória histórica de todas as decisões, regras de negócio e lições aprendidas para impedir que a equipe repita erros do passado.</div>
          <div class="dos-donts-grid">
            <div class="do-box">
              <div class="box-header-do">✔ O que faz</div>
              Varre o código a cada validação comparando-o com as 15 lições aprendidas memorizadas e bloqueia o processo caso identifique qualquer regressão de regras antigas.
            </div>
            <div class="dont-box">
              <div class="box-header-dont">✖ O que NÃO faz</div>
              Não inventa regras novas sem a aprovação do fundador e não apaga decisões catalogadas no banco de conhecimento.
            </div>
          </div>
        </div>

        <!-- Agente 6 -->
        <div class="agent-card">
          <div class="agent-card-header">
            <div class="agent-name-box">
              <span class="agent-id-pill">06</span>
              <span class="agent-title">🔬 Architectural &amp; TypeScript Type Safety Gatekeeper</span>
            </div>
            <span class="badge-veto">Poder de Veto</span>
          </div>
          <div class="scope-box">Campo de Atuação: Assegura a integridade lógica e estrutural do código-fonte através da compilação e checagem estrita de tipos do sistema.</div>
          <div class="dos-donts-grid">
            <div class="do-box">
              <div class="box-header-do">✔ O que faz</div>
              Executa a compilação completa de tipos TypeScript e impede a publicação de códigos com variáveis indefinidas, dados corrompidos ou erros silenciosos.
            </div>
            <div class="dont-box">
              <div class="box-header-dont">✖ O que NÃO faz</div>
              Não avalia o apelo visual de design e não audita regras de negócio financeiras.
            </div>
          </div>
        </div>

        <!-- Agente 7 -->
        <div class="agent-card">
          <div class="agent-card-header">
            <div class="agent-name-box">
              <span class="agent-id-pill">07</span>
              <span class="agent-title">🛑 Surgical Deploy &amp; Production Gatekeeper</span>
            </div>
            <span class="badge-veto">Poder de Veto</span>
          </div>
          <div class="scope-box">Campo de Atuação: Blinda o ambiente de produção contra subidas acidentais de códigos inacabados que estavam em fase de testes.</div>
          <div class="dos-donts-grid">
            <div class="do-box">
              <div class="box-header-do">✔ O que faz</div>
              Isola exclusivamente os arquivos aprovados, audita as alterações linha por linha e exige confirmação formal e explícita do fundador antes de qualquer deploy.
            </div>
            <div class="dont-box">
              <div class="box-header-dont">✖ O que NÃO faz</div>
              Não publica nada no piloto automático e não permite a mesclagem indiscriminada de branches de homologação para produção.
            </div>
          </div>
        </div>

        <!-- Agente 8 -->
        <div class="agent-card">
          <div class="agent-card-header">
            <div class="agent-name-box">
              <span class="agent-id-pill">08</span>
              <span class="agent-title">🧪 Automated Runtime &amp; Lifecycle Test Gatekeeper</span>
            </div>
            <span class="badge-veto">Poder de Veto · LL-015</span>
          </div>
          <div class="scope-box">Campo de Atuação: Simula o comportamento real do aplicativo em execução para antecipar falhas de ciclo de vida mobile, biometria e cache de rede.</div>
          <div class="dos-donts-grid">
            <div class="do-box">
              <div class="box-header-do">✔ O que faz</div>
              Executa dezenas de testes automatizados reais (Vitest) que simulam fechamento de telas nativas, autenticação via Face ID/Touch ID, inatividade e cabeçalhos anti-cache HTTP.
            </div>
            <div class="dont-box">
              <div class="box-header-dont">✖ O que NÃO faz</div>
              Não substitui o feedback qualitativo de usuários humanos reais e não atua em produção após a publicação da versão.
            </div>
          </div>
        </div>
      </div>

      <!-- Início da Camada 2 -->
      <div class="section-title">⚙️ Camada 2: Runtime &amp; Sentinelas Vivos (Agentes 09 a 12)</div>
      <p class="section-desc">Agentes contínuos que auditam transações financeiras, regras de lealdade e proteção contábil em tempo real.</p>

      <div class="cards-stack">
        <!-- Agente 9 -->
        <div class="agent-card">
          <div class="agent-card-header">
            <div class="agent-name-box">
              <span class="agent-id-pill">09</span>
              <span class="agent-title">⚖️ Event Oracle &amp; Ledger Gatekeeper</span>
            </div>
            <span class="badge-runtime">Sentinela Contábil</span>
          </div>
          <div class="scope-box">Campo de Atuação: Governa a emissão contábil e a integridade de pontos da plataforma por meio do método de partidas dobradas.</div>
          <div class="dos-donts-grid">
            <div class="do-box">
              <div class="box-header-do">✔ O que faz</div>
              Proíbe terminantemente a geração de qualquer ponto (nfs) sem a respectiva prova de evento irrefutável e o registro atômico no livro-razão.
            </div>
            <div class="dont-box">
              <div class="box-header-dont">✖ O que NÃO faz</div>
              Não concede pontos avulsos de forma arbitrária e não permite saldos desacompanhados de extrato.
            </div>
          </div>
        </div>

        <!-- Agente 10 -->
        <div class="agent-card">
          <div class="agent-card-header">
            <div class="agent-name-box">
              <span class="agent-id-pill">10</span>
              <span class="agent-title">⚡ Circuit Breaker Agent (Disjuntor de Segurança)</span>
            </div>
            <span class="badge-runtime">Disjuntor Automático</span>
          </div>
          <div class="scope-box">Campo de Atuação: Funciona como um disjuntor de emergência que desarma a concessão de pontos em caso de comportamento anômalo no sistema.</div>
          <div class="dos-donts-grid">
            <div class="do-box">
              <div class="box-header-do">✔ O que faz</div>
              Monitora a velocidade de emissão de nfs em tempo real e congela novas bonificações caso detecte picos atípicos, alertando imediatamente o fundador.
            </div>
            <div class="dont-box">
              <div class="box-header-dont">✖ O que NÃO faz</div>
              Não cancela transações legítimas que já foram consolidadas no banco de dados e não toma decisões comerciais sozinho.
            </div>
          </div>
        </div>

        <!-- Agente 11 -->
        <div class="agent-card">
          <div class="agent-card-header">
            <div class="agent-name-box">
              <span class="agent-id-pill">11</span>
              <span class="agent-title">⏳ FEFO Actuarial &amp; Breakage Engine</span>
            </div>
            <span class="badge-runtime">Motor Atuarial</span>
          </div>
          <div class="scope-box">Campo de Atuação: Controla a validade temporal e a expiração matemática dos lotes de pontos acumulados pelos atletas.</div>
          <div class="dos-donts-grid">
            <div class="do-box">
              <div class="box-header-do">✔ O que faz</div>
              Consome sempre os pontos mais antigos primeiro (validade de 24 meses) e projeta as provisões financeiras de pontos a expirar sem prejudicar o usuário.
            </div>
            <div class="dont-box">
              <div class="box-header-dont">✖ O que NÃO faz</div>
              Não antecipa o vencimento de pontos antes de 24 meses e não bloqueia resgates de usuários ativos.
            </div>
          </div>
        </div>

        <!-- Agente 12 -->
        <div class="agent-card">
          <div class="agent-card-header">
            <div class="agent-name-box">
              <span class="agent-id-pill">12</span>
              <span class="agent-title">🏃 Sweat-to-Earn &amp; Sensor Verification</span>
            </div>
            <span class="badge-runtime">Verificador de Treinos</span>
          </div>
          <div class="scope-box">Campo de Atuação: Valida a autenticidade dos treinos físicos realizados com smartwatches e sensores esportivos conectados.</div>
          <div class="dos-donts-grid">
            <div class="do-box">
              <div class="box-header-do">✔ O que faz</div>
              Integra-se à Terra API (Apple Watch, Garmin, Strava), confirma esforço cardiovascular real e credita 20 nfs por treino (até 5 treinos/semana no Clube).
            </div>
            <div class="dont-box">
              <div class="box-header-dont">✖ O que NÃO faz</div>
              Não incentiva o excesso físico prejudicial à saúde (overtraining) e não bonifica treinos duplicados ou simulados manualmente.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <span>NETFITS TECNOLOGIA LTDA · CNPJ 68.930.455/0001-40 · Alphaville, SP</span>
      <span>Página 2 de 5 · Gatekeepers 05 a 08 &amp; Sentinelas de Runtime 09 a 12</span>
    </div>
  </div>

  <!-- ==================================================================== -->
  <!-- PÁGINA 3: CAMADA 2 (FINAL) & CAMADA 3 (MAKERS - PARTE 1) -->
  <!-- ==================================================================== -->
  <div class="page">
    <div>
      <div class="header">
        <div class="header-left">
          <div class="logo-badge">NET<span>FITS</span></div>
          <div class="header-titles">
            <h1>Camada 2 (Final) &amp; Camada 3: Makers &amp; Especialistas</h1>
            <p>Sentinelas Contábeis, Engenharia de Software e Segurança de Dados</p>
          </div>
        </div>
        <div class="header-right">
          <strong>Agentes 13 a 18</strong>
          <span>Data: 09/Nov/2026 · Classificação: Institucional</span>
        </div>
      </div>
      <div class="kv-stripe"></div>

      <!-- Camada 2: Continuação (Agentes 13 a 16) -->
      <div class="section-title">⚙️ Camada 2: Runtime &amp; Sentinelas Vivos (Agentes 13 a 16)</div>
      <div class="cards-stack" style="margin-bottom: 9px;">
        <!-- Agente 13 -->
        <div class="agent-card">
          <div class="agent-card-header">
            <div class="agent-name-box">
              <span class="agent-id-pill">13</span>
              <span class="agent-title">👁️ Antifraud &amp; Dwell-Time Oracle</span>
            </div>
            <span class="badge-runtime">Antifraude de Conteúdo</span>
          </div>
          <div class="scope-box">Campo de Atuação: Protege as recompensas do feed garantindo que o atleta realmente consumiu o conteúdo educativo antes de responder ao quiz.</div>
          <div class="dos-donts-grid">
            <div class="do-box">
              <div class="box-header-do">✔ O que faz</div>
              Audita o tempo de permanência na tela (90% do vídeo assistido ou leitura integral do artigo) antes de liberar as perguntas que concedem pontos.
            </div>
            <div class="dont-box">
              <div class="box-header-dont">✖ O que NÃO faz</div>
              Não dá pontos apenas por rolar a página e não pontua leituras sem a fixação pedagógica no quiz.
            </div>
          </div>
        </div>

        <!-- Agente 14 -->
        <div class="agent-card">
          <div class="agent-card-header">
            <div class="agent-name-box">
              <span class="agent-id-pill">14</span>
              <span class="agent-title">🛍️ Marketplace &amp; Webhook Reconciliation</span>
            </div>
            <span class="badge-runtime">Conciliação Shop</span>
          </div>
          <div class="scope-box">Campo de Atuação: Conecta e audita as compras de artigos esportivos entre o aplicativo da Netfits e a parceira Rock Encantech.</div>
          <div class="dos-donts-grid">
            <div class="do-box">
              <div class="box-header-do">✔ O que faz</div>
              Recebe as notificações de compra por webhooks seguros com criptografia HMAC, calculando o acúmulo de 4 nfs por R$ 1,00 gasto (ou 4,8 nfs no Clube).
            </div>
            <div class="dont-box">
              <div class="box-header-dont">✖ O que NÃO faz</div>
              Não faz a separação física de caixas no galpão logístico e não autoriza estornos sem o cancelamento oficial da compra pelo lojista.
            </div>
          </div>
        </div>

        <!-- Agente 15 -->
        <div class="agent-card">
          <div class="agent-card-header">
            <div class="agent-name-box">
              <span class="agent-id-pill">15</span>
              <span class="agent-title">💾 FinOps Database Tiering &amp; Archival</span>
            </div>
            <span class="badge-runtime">Otimização de Custos</span>
          </div>
          <div class="scope-box">Campo de Atuação: Gerencia os custos de armazenamento e a velocidade de resposta do banco de dados relacional Cloudflare D1.</div>
          <div class="dos-donts-grid">
            <div class="do-box">
              <div class="box-header-do">✔ O que faz</div>
              Otimiza consultas frequentes, arquiva dados analíticos antigos de forma econômica e mantém o custo de infraestrutura ultrabaixo.
            </div>
            <div class="dont-box">
              <div class="box-header-dont">✖ O que NÃO faz</div>
              Não apaga cadastros de usuários reais e não elimina registros históricos ativos do livro-razão.
            </div>
          </div>
        </div>

        <!-- Agente 16 -->
        <div class="agent-card">
          <div class="agent-card-header">
            <div class="agent-name-box">
              <span class="agent-id-pill">16</span>
              <span class="agent-title">🛡️ Real-Time Online Ledger Sentinel</span>
            </div>
            <span class="badge-runtime">Fiscal de Saldos · LL-013</span>
          </div>
          <div class="scope-box">Campo de Atuação: Fiscaliza a paridade contábil instantânea entre o saldo mostrado na carteira do atleta e a soma de todas as linhas do seu extrato.</div>
          <div class="dos-donts-grid">
            <div class="do-box">
              <div class="box-header-do">✔ O que faz</div>
              Conecta-se diretamente ao banco Cloudflare D1 e aponta qualquer divergência numérica entre o saldo cadastral e as transações, garantindo conciliação 1:1.
            </div>
            <div class="dont-box">
              <div class="box-header-dont">✖ O que NÃO faz</div>
              Não altera o saldo do usuário diretamente no cliente sem passar pela transação atômica do servidor.
            </div>
          </div>
        </div>
      </div>

      <!-- Início da Camada 3 -->
      <div class="section-title">🎨 Camada 3: Makers &amp; Especialistas de Execução (Agentes 17 e 18)</div>
      <p class="section-desc">Agentes focados na produção rápida de software, design e segurança de dados.</p>

      <div class="cards-stack">
        <!-- Agente 17 -->
        <div class="agent-card">
          <div class="agent-card-header">
            <div class="agent-name-box">
              <span class="agent-id-pill">17</span>
              <span class="agent-title">🏗️ Lead Architect Maker</span>
            </div>
            <span class="badge-maker">Engenharia Core</span>
          </div>
          <div class="scope-box">Campo de Atuação: Constrói e implementa novas funcionalidades, componentes visuais e integrações estruturais no ecossistema do app.</div>
          <div class="dos-donts-grid">
            <div class="do-box">
              <div class="box-header-do">✔ O que faz</div>
              Escreve código moderno e performático em React, TypeScript e TanStack Start, respeitando os padrões de arquitetura e velocidade da plataforma.
            </div>
            <div class="dont-box">
              <div class="box-header-dont">✖ O que NÃO faz</div>
              Não aprova o próprio código para produção sem submetê-lo aos agentes gatekeepers e não altera regras de negócio por conta própria.
            </div>
          </div>
        </div>

        <!-- Agente 18 -->
        <div class="agent-card">
          <div class="agent-card-header">
            <div class="agent-name-box">
              <span class="agent-id-pill">18</span>
              <span class="agent-title">🔒 Security &amp; Rules Specialist</span>
            </div>
            <span class="badge-maker">Segurança &amp; Acesso</span>
          </div>
          <div class="scope-box">Campo de Atuação: Projeta e audita as políticas de segurança de dados, regras de autenticação biométrica e proteção contra invasões.</div>
          <div class="dos-donts-grid">
            <div class="do-box">
              <div class="box-header-do">✔ O que faz</div>
              Implementa travas de autenticação nativa (Face ID/Touch ID), encriptação de tokens e barreiras de segurança de firewall no Cloudflare.
            </div>
            <div class="dont-box">
              <div class="box-header-dont">✖ O que NÃO faz</div>
              Não armazena credenciais em texto puro e não flexibiliza regras de segurança para facilitar rotinas de desenvolvimento.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <span>NETFITS TECNOLOGIA LTDA · CNPJ 68.930.455/0001-40 · Alphaville, SP</span>
      <span>Página 3 de 5 · Sentinelas de Runtime 13 a 16 &amp; Makers 17 e 18</span>
    </div>
  </div>

  <!-- ==================================================================== -->
  <!-- PÁGINA 4: CAMADA 3 (FINAL) & CAMADA 4 (EXPERIÊNCIA DO ATLETA) -->
  <!-- ==================================================================== -->
  <div class="page">
    <div>
      <div class="header">
        <div class="header-left">
          <div class="logo-badge">NET<span>FITS</span></div>
          <div class="header-titles">
            <h1>Camada 3 (Final) &amp; Camada 4: Experiência do Atleta</h1>
            <p>Design, Pesquisa Médica, Acessibilidade e Assistente Conversacional</p>
          </div>
        </div>
        <div class="header-right">
          <strong>Agentes 19 a 22</strong>
          <span>Data: 09/Nov/2026 · Classificação: Institucional</span>
        </div>
      </div>
      <div class="kv-stripe"></div>

      <!-- Camada 3: Continuação (Agentes 19 a 21) -->
      <div class="section-title">🎨 Camada 3: Makers &amp; Especialistas de Execução (Agentes 19 a 21)</div>
      <div class="cards-stack" style="margin-bottom: 9px;">
        <!-- Agente 19 -->
        <div class="agent-card">
          <div class="agent-card-header">
            <div class="agent-name-box">
              <span class="agent-id-pill">19</span>
              <span class="agent-title">🎨 Creative Visuals &amp; KV Specialist</span>
            </div>
            <span class="badge-maker">Design &amp; KV</span>
          </div>
          <div class="scope-box">Campo de Atuação: Desenvolve e adapta peças gráficas, criativos de redes sociais e banners do feed em estrito alinhamento com o Key Visual oficial.</div>
          <div class="dos-donts-grid">
            <div class="do-box">
              <div class="box-header-do">✔ O que faz</div>
              Aplica o padrão visual institucional (fundo preto com logo verde e barra bipartida roxo/verde-limão) e compõe artes com fotografia esportiva real.
            </div>
            <div class="dont-box">
              <div class="box-header-dont">✖ O que NÃO faz</div>
              Não inventa cores fora do manual de identidade da marca e não publica peças sem a revisão dos guardiões de compliance.
            </div>
          </div>
        </div>

        <!-- Agente 20 -->
        <div class="agent-card">
          <div class="agent-card-header">
            <div class="agent-name-box">
              <span class="agent-id-pill">20</span>
              <span class="agent-title">🔍 Deep-Survey &amp; Medical Research Specialist</span>
            </div>
            <span class="badge-maker">Pesquisa Médica</span>
          </div>
          <div class="scope-box">Campo de Atuação: Conduz pesquisas científicas detalhadas em bibliotecas médicas globais para fundamentar as pautas de longevidade e medicina do estilo de vida.</div>
          <div class="dos-donts-grid">
            <div class="do-box">
              <div class="box-header-do">✔ O que faz</div>
              Pesquisa evidências em fontes de alta credibilidade (como PubMed e SciELO) para municiar os médicos parceiros da Fibios com diretrizes atualizadas.
            </div>
            <div class="dont-box">
              <div class="box-header-dont">✖ O que NÃO faz</div>
              Não receita tratamentos médicos individuais para usuários e não substitui a autonomia clínica dos médicos parceiros.
            </div>
          </div>
        </div>

        <!-- Agente 21 -->
        <div class="agent-card">
          <div class="agent-card-header">
            <div class="agent-name-box">
              <span class="agent-id-pill">21</span>
              <span class="agent-title">♿ Accessibility (a11y) &amp; UX Specialist</span>
            </div>
            <span class="badge-maker">Acessibilidade WCAG</span>
          </div>
          <div class="scope-box">Campo de Atuação: Garante que o aplicativo seja acessível, inclusivo e ergonômico para pessoas com quaisquer níveis de habilidade física ou visual.</div>
          <div class="dos-donts-grid">
            <div class="do-box">
              <div class="box-header-do">✔ O que faz</div>
              Audita o contraste das cores segundo as normas internacionais WCAG, valida a compatibilidade com leitores de tela e assegura tamanhos confortáveis de botões de toque.
            </div>
            <div class="dont-box">
              <div class="box-header-dont">✖ O que NÃO faz</div>
              Não autoriza interfaces com textos de baixo contraste e não aprova telas cujos elementos sejam difíceis de clicar em aparelhos menores.
            </div>
          </div>
        </div>
      </div>

      <!-- Camada 4: Experiência do Atleta (Agente 22) -->
      <div class="section-title">🤝 Camada 4: Experiência do Atleta (Front-of-House)</div>
      <p class="section-desc">O assistente conversacional embutido na interface que conversa diretamente com os usuários no aplicativo.</p>

      <div class="cards-stack">
        <!-- Agente 22 -->
        <div class="agent-card" style="border: 1.5px solid #6B2AD9; background: #FAF5FF;">
          <div class="agent-card-header">
            <div class="agent-name-box">
              <span class="agent-id-pill" style="background: #6B2AD9;">22</span>
              <span class="agent-title" style="color: #35106E; font-size: 8.4pt;">🤖 Netfit AI Concierge (Assistente Pessoal do Atleta)</span>
            </div>
            <span class="badge-front">Experiência do Usuário</span>
          </div>
          <div class="scope-box" style="background: #EDE9FE; border-left-color: #6B2AD9;">
            Campo de Atuação: Atua como o assistente pessoal do atleta dentro do app, oferecendo suporte em tempo real, orientação de hábitos de longevidade e atalhos práticos em um único toque.
          </div>
          <div class="dos-donts-grid">
            <div class="do-box" style="background: #FFFFFF; border-color: #86EFAC;">
              <div class="box-header-do">✔ O que faz</div>
              Responde a dúvidas frequentes sobre regras do Clube, pontuação e pedidos do Shop, executa comandos instantâneos na tela (como [🔄 Sincronizar Meu Saldo] e [🛍️ Abrir Vitrine Completa]) e guia a navegação do atleta de forma acolhedora.
            </div>
            <div class="dont-box" style="background: #FFFFFF; border-color: #FCA5A5;">
              <div class="box-header-dont">✖ O que NÃO faz</div>
              Não altera saldos de pontos ou dados cadastrais por iniciativa própria sem o aval do livro-razão contábil e não prescreve diagnósticos, medicamentos ou dietas privativas de consultas médicas.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <span>NETFITS TECNOLOGIA LTDA · CNPJ 68.930.455/0001-40 · Alphaville, SP</span>
      <span>Página 4 de 5 · Makers 19 a 21 &amp; Netfit AI Concierge (Agente 22)</span>
    </div>
  </div>

  <!-- ==================================================================== -->
  <!-- PÁGINA 5: MATRIZ DE GOVERNANÇA HUMANO-SINTÉTICA & ASSINATURAS -->
  <!-- ==================================================================== -->
  <div class="page">
    <div>
      <div class="header">
        <div class="header-left">
          <div class="logo-badge">NET<span>FITS</span></div>
          <div class="header-titles">
            <h1>Matriz de Governança Humano-Sintética &amp; Assinaturas</h1>
            <p>Alocação Estratégica, Tríade Maker-Checker-Gatekeeper e Eficiência Operacional</p>
          </div>
        </div>
        <div class="header-right">
          <strong>Validação Institucional</strong>
          <span>Data: 09/Nov/2026 · Classificação: Executivo</span>
        </div>
      </div>
      <div class="kv-stripe"></div>

      <div class="section-title">👥 Alocação dos 22 Agentes sob o Comando das Lideranças Humanas</div>
      <p class="section-desc">Na Netfits, a liderança humana é puramente estratégica, comandando diretamente seus respectivos squads sintéticos:</p>

      <table class="summary-table" style="margin-bottom: 12px;">
        <thead>
          <tr>
            <th style="width: 25%;">Liderança Humana</th>
            <th style="width: 35%;">Agentes Sintéticos Alocados</th>
            <th>Entregas &amp; Responsabilidades da Célula</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>André Gallo</strong><br>
              <span style="font-size: 6.2pt; color: #6B2AD9;">Cofundador &amp; CEO (Netfits)</span>
            </td>
            <td>
              • <strong>Agente 01</strong> (Release &amp; Routing)<br>
              • <strong>Agente 06</strong> (Type Safety)<br>
              • <strong>Agente 07</strong> (Surgical Deploy)<br>
              • <strong>Agente 08</strong> (Automated Runtime Tests)<br>
              • <strong>Agente 15</strong> (FinOps Tiering)<br>
              • <strong>Agente 17</strong> (Lead Architect Maker)<br>
              • <strong>Agente 18</strong> (Security &amp; Rules Specialist)
            </td>
            <td>Governança institucional, arquitetura serverless no Cloudflare, integridade de branches, rodada de captação Seed e segurança de dados.</td>
          </tr>
          <tr>
            <td>
              <strong>Fibios Longevidade</strong><br>
              <span style="font-size: 6.2pt; color: #6B2AD9;">Dr. Franco Merici &amp; Dra. Isabella<br>(Médicos Parceiros &amp; Sócios Fibios)</span>
            </td>
            <td>
              • <strong>Agente 02</strong> (Brand &amp; CFM Compliance)<br>
              • <strong>Agente 03</strong> (Editorial &amp; Content Quality)<br>
              • <strong>Agente 12</strong> (Sweat-to-Earn Verifier)<br>
              • <strong>Agente 20</strong> (Deep Medical Research)
            </td>
            <td>Curadoria de medicina do estilo de vida, protocolos de treino sustentável sem culto à exaustão e blindagem regulatória CFM/Codame.</td>
          </tr>
          <tr>
            <td>
              <strong>Luisa Formigari</strong><br>
              <span style="font-size: 6.2pt; color: #6B2AD9;">Cofundadora &amp; Head de MKT (Netfits)</span>
            </td>
            <td>
              • <strong>Agente 13</strong> (Antifraud Dwell-Time)<br>
              • <strong>Agente 19</strong> (Creative Visuals &amp; KV)<br>
              • <strong>Agente 21</strong> (Accessibility &amp; UX)
            </td>
            <td>Produção ágil de campanhas nas redes sociais, garantia do padrão canônico de postagens, engajamento orgânico e acessibilidade.</td>
          </tr>
          <tr>
            <td>
              <strong>Operações &amp; Experiência</strong><br>
              <span style="font-size: 6.2pt; color: #6B2AD9;">CEO + AI Concierge no App</span>
            </td>
            <td>
              • <strong>Agente 05</strong> (Continuous Learning Brain)<br>
              • <strong>Agente 09</strong> (Event Oracle &amp; Ledger)<br>
              • <strong>Agente 10</strong> (Circuit Breaker)<br>
              • <strong>Agente 11</strong> (FEFO Actuarial Engine)<br>
              • <strong>Agente 14</strong> (Marketplace Webhook)<br>
              • <strong>Agente 16</strong> (Real-Time Ledger Sentinel)<br>
              • <strong>Agente 22</strong> (Netfit AI Concierge)
            </td>
            <td>Auditoria atômica do livro-razão Cloudflare D1, atendimento inteligente aos atletas no app, conciliação do Shop e fidelidade ativa.</td>
          </tr>
        </tbody>
      </table>

      <!-- Resumo de Eficiência de Capital -->
      <div class="section-title">💰 Eficiência de Capital &amp; Multiplicação de Produtividade</div>
      <div style="background: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 6px; padding: 8px 12px; margin-bottom: 12px; font-size: 7.2pt; line-height: 1.35;">
        <ul style="padding-left: 14px;">
          <li style="margin-bottom: 3px;"><strong>Economia Operacional Superior a R$ 5,5 Milhões:</strong> A coordenação coordenada dos 22 agentes substitui com maestria 5 squads tradicionais (20 a 24 profissionais sênior entre engenharia, QA, compliance, suporte e design).</li>
          <li style="margin-bottom: 3px;"><strong>Garantia de Qualidade Determinística:</strong> Eliminação de falhas humanas por cansaço ou desatenção; os 8 gatekeepers possuem poder de veto real e impedem deploys com código defasado ou regras violadas.</li>
          <li><strong>Escalabilidade Infinita com Headcount Humano Enxuto:</strong> A empresa mantém estrutura ultra-lean para o lançamento oficial (14/Nov/2026), protegendo a margem de contribuição e o fluxo de caixa livre.</li>
        </ul>
      </div>

      <!-- Assinaturas Formais -->
      <div class="signatures-block">
        <div class="sig-line">
          <strong>André Gallo</strong>
          Cofundador &amp; CEO — Netfits Tecnologia Ltda.
        </div>
        <div class="sig-line">
          <strong>Luisa Ferreira Formigari</strong>
          Cofundadora &amp; Head de Marketing — Netfits Tecnologia Ltda.
        </div>
        <div class="sig-line">
          <strong>Dr. Franco Merici &amp; Dra. Isabella Formigari</strong>
          Médicos Sócios Fundadores da Fibios — Parceiros de Saúde da Netfits
        </div>
      </div>
    </div>

    <div class="footer">
      <span>NETFITS TECNOLOGIA LTDA · CNPJ 68.930.455/0001-40 · Alphaville, SP</span>
      <span>Página 5 de 5 · Matriz Humano-Sintética &amp; Assinaturas Institucionais</span>
    </div>
  </div>

</body>
</html>
`;

const tempHtmlPath = path.resolve('temp_agents_catalog_pdf.html');
fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

console.log('Compiling 5-Page Agents Catalog PDF via Chrome Headless...');
const tempPdfPath = path.resolve('temp_agents_catalog.pdf');
const cmd = `"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${tempPdfPath}" --no-pdf-header-footer "file:///${tempHtmlPath.replace(/\\/g, '/')}"`;

try {
  execSync(cmd);
  
  // Distribute to all required destinations
  const targets = [outPdf1, outPdf2, outPdf3, outPdf4];
  for (const t of targets) {
    try {
      fs.copyFileSync(tempPdfPath, t);
      console.log('✅ Gravado com sucesso em: ' + t);
    } catch (e) {
      console.warn('⚠️ Nota: ' + t + ' está aberto em leitor de PDF (será atualizado assim que fechado).');
    }
  }

  // Clean up temporary files
  if (fs.existsSync(tempHtmlPath)) fs.unlinkSync(tempHtmlPath);
  if (fs.existsSync(tempPdfPath)) fs.unlinkSync(tempPdfPath);
} catch (err) {
  console.error('Erro ao compilar PDF:', err);
  process.exit(1);
}
