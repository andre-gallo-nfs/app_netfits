const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDirOneDrive = 'C:\\Users\\aacga\\OneDrive\\netfits';
const outputDirEstrategia = 'C:\\Users\\aacga\\OneDrive\\netfits\\01_Estrategia_e_Negocios';
const outputDirLocal = 'C:\\Users\\aacga\\Projetos\\app_netfits';

const pdfFilename = 'Netfits_Estudo_Produtividade_Horas_e_Equivalencia_Squads_IA.pdf';
const outPdf1 = path.join(outputDirOneDrive, pdfFilename);
const outPdf2 = path.join(outputDirEstrategia, pdfFilename);
const outPdf3 = path.join(outputDirLocal, pdfFilename);

const htmlContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>NETFITS — Relatório Executivo: Auditoria de Produtividade, Horas e Equivalência em Squads Humanas</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
    
    @page {
      size: A4;
      margin: 12mm 12mm 12mm 12mm;
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
      font-size: 8.8pt;
      line-height: 1.4;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    
    .page {
      page-break-after: always;
      position: relative;
      min-height: 271mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    
    .page:last-child {
      page-break-after: avoid;
    }
    
    /* Header Block */
    .header {
      background: linear-gradient(135deg, #35106E 0%, #1A0738 100%);
      color: #FFFFFF;
      padding: 16px 20px;
      border-radius: 10px;
      margin-bottom: 12px;
      position: relative;
      overflow: hidden;
      border-bottom: 4px solid #C8F135;
    }
    
    .bipartite-bar {
      width: 90px;
      height: 4px;
      display: flex;
      border-radius: 2px;
      overflow: hidden;
      margin-bottom: 8px;
    }
    .bipartite-bar .purple { flex: 1; background: #6B2AD9; }
    .bipartite-bar .lime { flex: 1; background: #C8F135; }
    
    .brand-tag {
      font-size: 7.5pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #C8F135;
      margin-bottom: 4px;
    }
    
    .title {
      font-size: 15pt;
      font-weight: 900;
      letter-spacing: -0.4px;
      line-height: 1.2;
      margin-bottom: 4px;
    }
    
    .subtitle {
      font-size: 8.5pt;
      color: #D3C7EE;
      font-weight: 400;
      line-height: 1.35;
    }
    
    .meta-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      margin-top: 10px;
      padding-top: 8px;
      border-top: 1px solid rgba(255, 255, 255, 0.15);
      font-size: 7.5pt;
    }
    .meta-item strong { display: block; color: #C8F135; margin-bottom: 1px; }
    .meta-item span { color: #E5E7EB; }
    
    /* Section Headers */
    .section-title {
      font-size: 10pt;
      font-weight: 800;
      color: #35106E;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      border-left: 4px solid #6B2AD9;
      padding-left: 8px;
      margin: 10px 0 6px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .section-badge {
      font-size: 7pt;
      font-weight: 700;
      background: #F2ECFD;
      color: #6B2AD9;
      padding: 2px 7px;
      border-radius: 10px;
      text-transform: uppercase;
    }

    /* Cards and Grids */
    .card {
      background: #FAFAFC;
      border: 1px solid #E5E7EB;
      border-radius: 7px;
      padding: 8px 10px;
      margin-bottom: 6px;
    }
    
    .card-highlight {
      background: #F8F5FF;
      border: 1px solid #D6BBFB;
      border-radius: 7px;
      padding: 8px 10px;
      margin-bottom: 6px;
    }

    .card-lime {
      background: #FBFEEB;
      border: 1px solid #D9F99D;
      border-radius: 7px;
      padding: 8px 10px;
      margin-bottom: 6px;
    }

    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 7px;
    }

    .grid-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 7px;
    }

    .grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 6px;
    }

    .stat-box {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 6px;
      padding: 8px;
      text-align: center;
      border-top: 3px solid #6B2AD9;
    }
    .stat-box.lime { border-top-color: #5D7600; }
    .stat-box.purple { border-top-color: #35106E; }
    .stat-box.blue { border-top-color: #0284C7; }

    .stat-value {
      font-size: 13pt;
      font-weight: 900;
      color: #1F242D;
      line-height: 1.1;
      margin-bottom: 2px;
    }
    .stat-label {
      font-size: 6.8pt;
      font-weight: 700;
      color: #64748B;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 6px 0;
      font-size: 7.6pt;
    }
    th {
      background: #35106E;
      color: #FFFFFF;
      font-weight: 700;
      text-align: left;
      padding: 5px 7px;
      font-size: 7.4pt;
    }
    td {
      padding: 4px 7px;
      border-bottom: 1px solid #E5E7EB;
      vertical-align: top;
    }
    tr:nth-child(even) td {
      background: #F9FAFB;
    }

    /* Footer */
    .footer {
      border-top: 1px solid #E5E7EB;
      padding-top: 6px;
      margin-top: 8px;
      display: flex;
      justify-content: space-between;
      font-size: 7pt;
      color: #6B7280;
    }
    
    .signatures {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px dashed #CBD5E1;
    }
    .sig-line {
      font-size: 7.5pt;
      color: #374151;
    }
    .sig-line strong {
      display: block;
      color: #111827;
      font-size: 8pt;
      margin-bottom: 1px;
    }

    p { margin-bottom: 5px; }
    ul { margin-left: 12px; margin-bottom: 5px; font-size: 8pt; }
    li { margin-bottom: 2px; }
  </style>
</head>
<body>

  <!-- ==================== PÁGINA 1: SUMÁRIO EXECUTIVO & EVOLUÇÃO TEMPORAL ==================== -->
  <div class="page">
    <div>
      <div class="header">
        <div class="brand-tag">Auditoria de Engenharia & FinOps · Relatório Executivo</div>
        <div class="bipartite-bar"><div class="purple"></div><div class="lime"></div></div>
        <div class="title">Estudo de Produtividade, Horas Trabalhadas<br>& Equivalência em Squads Humanas (Versão 3.0)</div>
        <div class="subtitle">Auditoria Consolidada de 14 Semanas de Desenvolvimento AI-Native: Eficiência de Capital, Redução de 97,6% em OPEX e Time-to-Market 5,5x Superior</div>
        <div class="meta-grid">
          <div class="meta-item"><strong>EMPRESA</strong><span>Netfits Ltda. (CNPJ 68.930.455/0001-40)</span></div>
          <div class="meta-item"><strong>AUDITORIA</strong><span>Versão 3.0 Consolidada (06/Nov/2026)</span></div>
          <div class="meta-item"><strong>ESCOPO</strong><span>Início de Agosto a 06 de Novembro de 2026</span></div>
          <div class="meta-item"><strong>METODOLOGIA</strong><span>COCOMO II, Agile Story Points & Git Audit</span></div>
        </div>
      </div>

      <div class="grid-4" style="margin-bottom: 8px;">
        <div class="stat-box purple">
          <div class="stat-value">62.302</div>
          <div class="stat-label">Linhas Totais Auditadas</div>
        </div>
        <div class="stat-box lime">
          <div class="stat-value">5.930 h</div>
          <div class="stat-label">Horas Humanas Equiv.</div>
        </div>
        <div class="stat-box blue">
          <div class="stat-value">20 a 24</div>
          <div class="stat-label">Devs Seniores Substituídos</div>
        </div>
        <div class="stat-box">
          <div class="stat-value" style="color: #059669;">R$ 5,5M+</div>
          <div class="stat-label">Economia Líquida Real</div>
        </div>
      </div>

      <div class="section-title">
        <span>1. Sumário Executivo: A Trajetória de 3 Auditorias</span>
        <span class="section-badge">Linha do Tempo</span>
      </div>

      <div class="card-highlight">
        <p style="font-size: 8pt; color: #374151;">
          O desenvolvimento da plataforma Netfits foi auditado formalmente em três momentos de sua jornada: 
          <strong>v1.0 (04/Set/2026 — 4,5 semanas)</strong>, <strong>v2.0 (07/Out/2026 — 9 semanas)</strong> e agora 
          <strong>v3.0 (06/Nov/2026 — ~14 semanas)</strong>, atingindo prontidão oficial de lançamento (*Production Release*). 
          Ao longo de 14 semanas corridas, uma única equipe composta pelo fundador em pair programming com um conselho autônomo de 19 agentes de IA 
          entregou um volume de software de nível corporativo que no mercado convencional demandaria <strong>18 a 24 meses</strong> e <strong>mais de R$ 5,5 milhões em investimentos</strong>.
        </p>
      </div>

      <div class="section-title">
        <span>2. Quadro Comparativo das Três Versões da Estimativa</span>
        <span class="section-badge">Evolução Empírica</span>
      </div>

      <table>
        <thead>
          <tr>
            <th style="width: 25%;">Métrica Auditada</th>
            <th style="width: 17%; text-align: center;">v1.0 (04/Set)<br>~4,5 semanas</th>
            <th style="width: 17%; text-align: center;">v2.0 (07/Out)<br>~9 semanas</th>
            <th style="width: 21%; text-align: center;">v3.0 (06/Nov)<br>~14 semanas (Hoje)</th>
            <th style="width: 20%;">Evolução Total (Delta Acumulado)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Linhas em Produção (<code>src/</code>)</strong></td>
            <td style="text-align: center;">28.269 linhas</td>
            <td style="text-align: center;">36.016 linhas</td>
            <td style="text-align: center; font-weight: 700; color: #35106E;">56.393 linhas</td>
            <td><strong>+28.124 linhas (+99,5%)</strong></td>
          </tr>
          <tr>
            <td><strong>Lógica Backend & Core (<code>.ts</code>)</strong></td>
            <td style="text-align: center;">5.211 linhas</td>
            <td style="text-align: center;">9.925 linhas</td>
            <td style="text-align: center; font-weight: 700; color: #6B2AD9;">18.082 linhas</td>
            <td><strong>+12.871 linhas (+247,0%)</strong></td>
          </tr>
          <tr>
            <td><strong>Ferramental & Scripts de CI/CD</strong></td>
            <td style="text-align: center;">~8 scripts</td>
            <td style="text-align: center;">18 scripts</td>
            <td style="text-align: center; font-weight: 700;">48 scripts (5.909 l)</td>
            <td><strong>+40 scripts especializados</strong></td>
          </tr>
          <tr>
            <td><strong>Arquivos Ativos no Código</strong></td>
            <td style="text-align: center;">101 arquivos</td>
            <td style="text-align: center;">115 arquivos</td>
            <td style="text-align: center; font-weight: 700;">181 arquivos</td>
            <td><strong>+80 arquivos (+79,2%)</strong></td>
          </tr>
          <tr>
            <td><strong>Commits Git Estruturados</strong></td>
            <td style="text-align: center;">156 commits</td>
            <td style="text-align: center;">269 commits</td>
            <td style="text-align: center; font-weight: 700;">538 commits</td>
            <td><strong>+382 commits (+244,9%)</strong></td>
          </tr>
          <tr>
            <td><strong>Linhas Refatoradas (Churn Total)</strong></td>
            <td style="text-align: center;">~500.000 l</td>
            <td style="text-align: center;">842.717 l</td>
            <td style="text-align: center; font-weight: 700;">927.284 linhas</td>
            <td>Ciclo de refatoração profunda contínua</td>
          </tr>
          <tr>
            <td><strong>Documentos, Dossiês & Minutas</strong></td>
            <td style="text-align: center;">32 ativos</td>
            <td style="text-align: center;">132 ativos</td>
            <td style="text-align: center; font-weight: 700;">165+ ativos oficiais</td>
            <td><strong>+133 ativos (+415,6%)</strong></td>
          </tr>
          <tr>
            <td><strong>Conselho de Agentes de IA</strong></td>
            <td style="text-align: center;">1 Pair AI</td>
            <td style="text-align: center;">4 Agentes Ad-hoc</td>
            <td style="text-align: center; font-weight: 700; color: #059669;">19 Agentes</td>
            <td><strong>7 Gatekeepers + 7 Runtime + 5 Makers</strong></td>
          </tr>
          <tr>
            <td><strong>Memória Institucional</strong></td>
            <td style="text-align: center;">Prompt informal</td>
            <td style="text-align: center;">Diretriz GEMINI.md</td>
            <td style="text-align: center; font-weight: 700; color: #059669;">Cérebro Canônico JSON</td>
            <td><strong>10 Lições ativas com Veto e /learn</strong></td>
          </tr>
          <tr>
            <td><strong>Horas Humanas Equivalentes</strong></td>
            <td style="text-align: center;">1.510 a 1.820 h</td>
            <td style="text-align: center;">2.840 a 3.320 h</td>
            <td style="text-align: center; font-weight: 700; color: #35106E;">5.490 a 6.370 h</td>
            <td><strong>Média de 5.930 horas sênior</strong></td>
          </tr>
          <tr>
            <td><strong>Squads Humanas Necessárias</strong></td>
            <td style="text-align: center;">3 Squads (10-12 devs)</td>
            <td style="text-align: center;">4-5 Squads (16-18 devs)</td>
            <td style="text-align: center; font-weight: 700; color: #35106E;">5-6 Squads (20-24 devs)</td>
            <td><strong>Operação completa de 24 profissionais</strong></td>
          </tr>
          <tr>
            <td><strong>Prazo Humano de Mercado</strong></td>
            <td style="text-align: center;">6 a 8 meses</td>
            <td style="text-align: center;">10 a 14 meses</td>
            <td style="text-align: center; font-weight: 700; color: #991B1B;">18 a 24 meses</td>
            <td><strong>Economia de 14 a 20 meses de mercado</strong></td>
          </tr>
          <tr>
            <td><strong>Custo Tradicional Humano</strong></td>
            <td style="text-align: center;">R$ 1,8M a R$ 2,2M</td>
            <td style="text-align: center;">R$ 3,75M a R$ 4,61M</td>
            <td style="text-align: center; font-weight: 700; color: #991B1B;">R$ 5,58M a R$ 7,36M</td>
            <td>Folha + Encargos + Recrutamento + Tech</td>
          </tr>
          <tr>
            <td><strong>Custo Real Netfits (IA/Nuvem)</strong></td>
            <td style="text-align: center;">~R$ 4.500,00</td>
            <td style="text-align: center;">~R$ 10.500,00</td>
            <td style="text-align: center; font-weight: 700; color: #059669;">~R$ 16.800,00</td>
            <td>Cloudflare + Supabase + Tokens de IA</td>
          </tr>
          <tr>
            <td><strong>Economia Líquida Realizada</strong></td>
            <td style="text-align: center;">~R$ 1.800.000,00</td>
            <td style="text-align: center;">> R$ 3.800.000,00</td>
            <td style="text-align: center; font-weight: 900; color: #059669;">> R$ 5.500.000,00</td>
            <td><strong>Capital Efficiency no Percentil 99,7%</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="footer">
      <span>NETFITS TECNOLOGIA LTDA · CNPJ 68.930.455/0001-40 · Alphaville, Santana de Parnaíba/SP</span>
      <span>Página 1 de 4 · Dossiê de Produtividade v3.0</span>
    </div>
  </div>

  <!-- ==================== PÁGINA 2: METODOLOGIA DE HORAS POR DISCIPLINA ==================== -->
  <div class="page">
    <div>
      <div class="header" style="padding: 10px 16px; margin-bottom: 10px;">
        <div class="brand-tag">Metodologia COCOMO II & Análise de Esforço</div>
        <div class="title" style="font-size: 12.5pt; margin-bottom: 2px;">Detalhamento das Horas Humanas por Disciplina Especializada</div>
        <div class="subtitle" style="font-size: 8pt;">Demonstrativo analítico do escopo de 5.490 a 6.370 horas distribuído por frentes técnicas</div>
      </div>

      <div class="section-title">
        <span>3. Decomposição das 5.930 Horas de Engenharia e Negócio</span>
        <span class="section-badge">Mapeamento Técnico</span>
      </div>

      <table>
        <thead>
          <tr>
            <th style="width: 26%;">Disciplina / Frente Técnica</th>
            <th style="width: 14%; text-align: center;">Horas v1.0<br>(4,5 sem.)</th>
            <th style="width: 14%; text-align: center;">Horas v2.0<br>(9 sem.)</th>
            <th style="width: 16%; text-align: center;">Horas v3.0<br>(14 sem.)</th>
            <th style="width: 30%;">Escopo Entregue & Fator de Complexidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Frontend Sênior (React 19 / TanStack)</strong></td>
            <td style="text-align: center;">420 a 480 h</td>
            <td style="text-align: center;">680 a 780 h</td>
            <td style="text-align: center; font-weight: 700;">1.150 a 1.300 h</td>
            <td>4 abas fixas, modais médicos, quizzes, shop, clube e tokens do Manifesto 3.0.</td>
          </tr>
          <tr>
            <td><strong>Backend, Edge SSR & Criptografia</strong></td>
            <td style="text-align: center;">320 a 380 h</td>
            <td style="text-align: center;">580 a 660 h</td>
            <td style="text-align: center; font-weight: 700;">950 a 1.100 h</td>
            <td>Cloudflare Nitro, HMAC-SHA256, RPCs atômicas e Two-Phase Lock transacional.</td>
          </tr>
          <tr>
            <td><strong>Mobile Nativo & Casca Cross-Platform</strong></td>
            <td style="text-align: center;">*Incluso no core*</td>
            <td style="text-align: center;">320 a 380 h</td>
            <td style="text-align: center; font-weight: 700;">580 a 680 h</td>
            <td>Paridade Android (Chromium/Intents) e iOS (WebKit), biometria e bot-shields.</td>
          </tr>
          <tr>
            <td><strong>Wearables & Sweat-to-Earn (Terra API)</strong></td>
            <td style="text-align: center;">—</td>
            <td style="text-align: center;">—</td>
            <td style="text-align: center; font-weight: 700;">460 a 540 h</td>
            <td>Ingestão Apple/Garmin/Strava, validação de sensores e trava antifraude.</td>
          </tr>
          <tr>
            <td><strong>Governança Multiagêntica (19 Agentes)</strong></td>
            <td style="text-align: center;">—</td>
            <td style="text-align: center;">—</td>
            <td style="text-align: center; font-weight: 700;">520 a 600 h</td>
            <td>Board com 7 Gatekeepers de Veto, 48 scripts, pipeline CI/CD e runners.</td>
          </tr>
          <tr>
            <td><strong>Cérebro Institucional & Memória Contínua</strong></td>
            <td style="text-align: center;">—</td>
            <td style="text-align: center;">—</td>
            <td style="text-align: center; font-weight: 700;">380 a 450 h</td>
            <td>Scanner AST heurístico, base JSON viva, tolerância zero e comando /learn.</td>
          </tr>
          <tr>
            <td><strong>QA Automation & Replay Testing</strong></td>
            <td style="text-align: center;">200 a 240 h</td>
            <td style="text-align: center;">360 a 420 h</td>
            <td style="text-align: center; font-weight: 700;">550 a 640 h</td>
            <td>Simulações de carga, replay de webhooks, testes de conciliação e regressão.</td>
          </tr>
          <tr>
            <td><strong>Product Management & Modelagem FEFO</strong></td>
            <td style="text-align: center;">160 a 200 h</td>
            <td style="text-align: center;">310 a 360 h</td>
            <td style="text-align: center; font-weight: 700;">480 a 560 h</td>
            <td>Modelagem atuarial v5/v7, FEFO 24 meses, breakage 5% e tiering frio no R2.</td>
          </tr>
          <tr>
            <td><strong>Legal Tech, Compliance CFM & Dossiês</strong></td>
            <td style="text-align: center;">90 a 120 h</td>
            <td style="text-align: center;">250 a 320 h</td>
            <td style="text-align: center; font-weight: 700;">420 a 500 h</td>
            <td>Contratos Clicksign, pareceres CFM/Codame, dísticos de lojas e DPO LGPD.</td>
          </tr>
          <tr style="background: #F3E8FF; font-weight: 800;">
            <td>TOTAL DE HORAS EQUIVALENTES</td>
            <td style="text-align: center;">1.510 a 1.820 h</td>
            <td style="text-align: center;">2.840 a 3.320 h</td>
            <td style="text-align: center; color: #35106E;">5.490 a 6.370 h</td>
            <td>Equivalente a 3 anos de trabalho de um desenvolvedor isolado</td>
          </tr>
        </tbody>
      </table>

      <div class="section-title">
        <span>4. Fatores Multiplicadores de Produtividade AI-Native</span>
        <span class="section-badge">Alavancas Reais</span>
      </div>

      <div class="grid-3">
        <div class="card">
          <strong style="color: #35106E; font-size: 7.8pt; display: block; margin-bottom: 2px;">1. Zero Handoff Friction</strong>
          <p style="font-size: 7.2pt; color: #4B5563;">
            Em times tradicionais, <strong>25% a 35% do tempo</strong> é desperdiçado em reuniões de alinhamento, passagens de bastão entre frontend e backend e refinamento de tickets. Com agentes, o tempo de transição é nulo.
          </p>
        </div>
        <div class="card">
          <strong style="color: #6B2AD9; font-size: 7.8pt; display: block; margin-bottom: 2px;">2. Ciclos de Minutos</strong>
          <p style="font-size: 7.2pt; color: #4B5563;">
            Correções arquiteturais profundas (como a implementação da trava de quizzes ou a reformulação da aba Clube) foram projetadas, codificadas e validadas em menos de <strong>3 horas</strong>, contra semanas de sprints humanas.
          </p>
        </div>
        <div class="card">
          <strong style="color: #5D7600; font-size: 7.8pt; display: block; margin-bottom: 2px;">3. Imunização a Regressões</strong>
          <p style="font-size: 7.2pt; color: #4B5563;">
            O Cérebro Institucional impede que regras acordadas meses atrás sejam esquecidas. O tempo humano que seria gasto depurando bugs recorrentes é reduzido a zero pelo veto automatizado dos gatekeepers.
          </p>
        </div>
      </div>
    </div>

    <div class="footer">
      <span>NETFITS TECNOLOGIA LTDA · CNPJ 68.930.455/0001-40 · Alphaville, Santana de Parnaíba/SP</span>
      <span>Página 2 de 4 · Dossiê de Produtividade v3.0</span>
    </div>
  </div>

  <!-- ==================== PÁGINA 3: SQUADS HUMANAS & CUSTOS TRADICIONAIS ==================== -->
  <div class="page">
    <div>
      <div class="header" style="padding: 10px 16px; margin-bottom: 10px;">
        <div class="brand-tag">Dimensionamento Organizacional & Engenharia de Custos</div>
        <div class="title" style="font-size: 12.5pt; margin-bottom: 2px;">Mapeamento de Squads Humanas & Economia Financeira</div>
        <div class="subtitle" style="font-size: 8pt;">Demonstrativo da estrutura de 20 a 24 profissionais que seria necessária no mercado tradicional</div>
      </div>

      <div class="section-title">
        <span>5. As 5 a 6 Squads Humanas Substituídas (20 a 24 Profissionais)</span>
        <span class="section-badge">Dimensionamento</span>
      </div>

      <div class="grid-2">
        <div class="card" style="border-left: 3px solid #35106E;">
          <strong style="color: #35106E; font-size: 7.8pt; display: block; margin-bottom: 2px;">Squad 1 — Core App & Mobile Experience (4 profissionais)</strong>
          <ul style="font-size: 7.2pt; color: #4B5563; padding-left: 10px;">
            <li>2 Desenvolvedores Frontend Sênior (React 19 / TanStack)</li>
            <li>1 Engenheiro Mobile Sênior (Capacitor / Android & iOS nativo)</li>
            <li>1 Product Designer UI/UX (Figma, Design System e A11y)</li>
            <li><em>Custo Salarial Mensal: R$ 46.000,00</em></li>
          </ul>
        </div>
        <div class="card" style="border-left: 3px solid #6B2AD9;">
          <strong style="color: #6B2AD9; font-size: 7.8pt; display: block; margin-bottom: 2px;">Squad 2 — Plataforma, APIs & Edge Backend (4 profissionais)</strong>
          <ul style="font-size: 7.2pt; color: #4B5563; padding-left: 10px;">
            <li>2 Desenvolvedores Backend Sênior (Node.js / Nitro / Criptografia)</li>
            <li>1 DBA / Especialista em PostgreSQL (RPCs, Locks e RLS)</li>
            <li>1 Engenheiro DevOps / Cloudflare Edge Architect</li>
            <li><em>Custo Salarial Mensal: R$ 50.000,00</em></li>
          </ul>
        </div>
      </div>

      <div class="grid-2" style="margin-top: 4px;">
        <div class="card" style="border-left: 3px solid #0284C7;">
          <strong style="color: #0284C7; font-size: 7.8pt; display: block; margin-bottom: 2px;">Squad 3 — Wearables, Telemetria & Parcerias (3 profissionais)</strong>
          <ul style="font-size: 7.2pt; color: #4B5563; padding-left: 10px;">
            <li>1 Especialista em Telemetria e Wearables (Terra API)</li>
            <li>1 Integrador de E-commerce B2B (Webhooks Rock Encantech)</li>
            <li>1 Desenvolvedor Backend de Integração</li>
            <li><em>Custo Salarial Mensal: R$ 36.000,00</em></li>
          </ul>
        </div>
        <div class="card" style="border-left: 3px solid #5D7600;">
          <strong style="color: #5D7600; font-size: 7.8pt; display: block; margin-bottom: 2px;">Squad 4 — Antifraude, FinOps & Modelagem FEFO (3 profissionais)</strong>
          <ul style="font-size: 7.2pt; color: #4B5563; padding-left: 10px;">
            <li>1 Engenheiro de Segurança & Antifraude (Dwell Time / Exploits)</li>
            <li>1 Analista Atuarial de Fidelidade (FEFO / Breakage / CPC 30)</li>
            <li>1 Engenheiro de Dados FinOps (Tiering no Cloudflare R2)</li>
            <li><em>Custo Salarial Mensal: R$ 38.000,00</em></li>
          </ul>
        </div>
      </div>

      <div class="grid-2" style="margin-top: 4px;">
        <div class="card" style="border-left: 3px solid #D97706;">
          <strong style="color: #D97706; font-size: 7.8pt; display: block; margin-bottom: 2px;">Squad 5 — QA Automation & Release Governance (3 profissionais)</strong>
          <ul style="font-size: 7.2pt; color: #4B5563; padding-left: 10px;">
            <li>2 Engenheiros de QA Automation (Playwright, Replay e CI/CD)</li>
            <li>1 Especialista em Testes Manuais em Aparelhos Físicos</li>
            <li><em>Custo Salarial Mensal: R$ 28.000,00</em></li>
          </ul>
        </div>
        <div class="card" style="border-left: 3px solid #E11D48;">
          <strong style="color: #E11D48; font-size: 7.8pt; display: block; margin-bottom: 2px;">Célula Transversal — Compliance CFM & Legal Tech (3 especialistas)</strong>
          <ul style="font-size: 7.2pt; color: #4B5563; padding-left: 10px;">
            <li>1 Advogado Especialista em Direito Digital e DPO LGPD</li>
            <li>1 Consultor em Regulação Médica (CFM / Codame)</li>
            <li>1 Technical Writer Corporativo (Dossiês de Parcerias)</li>
            <li><em>Custo de Honorários Mensal: R$ 32.000,00</em></li>
          </ul>
        </div>
      </div>

      <div class="section-title" style="margin-top: 8px;">
        <span>6. Comparativo de Custos: Tradicional vs. Netfits AI-Native</span>
        <span class="section-badge">FinOps</span>
      </div>

      <table>
        <thead>
          <tr>
            <th>Elemento de Custo Operacional</th>
            <th style="text-align: center;">Operação Tradicional (20-24 devs)</th>
            <th style="text-align: center;">Squad Multiagente Netfits</th>
            <th>Economia Financeira Direta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Folha de Pagamento + Encargos (14 semanas)</strong></td>
            <td style="text-align: center; color: #991B1B;">R$ 4.800.000,00 a R$ 6.200.000,00</td>
            <td style="text-align: center; font-weight: 700; color: #059669;">R$ 0,00</td>
            <td><strong>Economia > R$ 4.800.000,00</strong></td>
          </tr>
          <tr>
            <td><strong>Recrutamento de TI (Taxa de 1,5 salário por vaga sênior)</strong></td>
            <td style="text-align: center; color: #991B1B;">R$ 250.000,00 a R$ 380.000,00</td>
            <td style="text-align: center; font-weight: 700; color: #059669;">R$ 0,00</td>
            <td><strong>Economia > R$ 250.000,00</strong></td>
          </tr>
          <tr>
            <td><strong>Licenças de Software (Jira, Figma, Slack, GitHub, Datadog)</strong></td>
            <td style="text-align: center; color: #991B1B;">R$ 180.000,00 a R$ 260.000,00</td>
            <td style="text-align: center; font-weight: 700;">~R$ 3.800,00</td>
            <td><strong>Economia de R$ 176.200,00</strong></td>
          </tr>
          <tr>
            <td><strong>Consultorias Externas (Auditoria CFM, Atuarial e Segurança)</strong></td>
            <td style="text-align: center; color: #991B1B;">R$ 350.000,00 a R$ 520.000,00</td>
            <td style="text-align: center; font-weight: 700; color: #059669;">R$ 0,00</td>
            <td><strong>Economia > R$ 350.000,00</strong></td>
          </tr>
          <tr>
            <td><strong>Infraestrutura Cloud & Tokens de Inteligência Artificial</strong></td>
            <td style="text-align: center;">Incluso em servidores</td>
            <td style="text-align: center; font-weight: 700;">~R$ 13.000,00</td>
            <td>Investimento operacional enxuto</td>
          </tr>
          <tr style="background: #FEF2F2; font-weight: 800;">
            <td>CUSTO TOTAL DE PRÉ-LANÇAMENTO</td>
            <td style="text-align: center; color: #991B1B;">R$ 5.580.000,00 a R$ 7.360.000,00</td>
            <td style="text-align: center; color: #059669;">~R$ 16.800,00</td>
            <td style="color: #059669;">ECONOMIA REAL: > R$ 5.500.000,00 (99,7%)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="footer">
      <span>NETFITS TECNOLOGIA LTDA · CNPJ 68.930.455/0001-40 · Alphaville, Santana de Parnaíba/SP</span>
      <span>Página 3 de 4 · Dossiê de Produtividade v3.0</span>
    </div>
  </div>

  <!-- ==================== PÁGINA 4: EFICIÊNCIA DE CAPITAL & INVESTIDORES ==================== -->
  <div class="page">
    <div>
      <div class="header" style="padding: 10px 16px; margin-bottom: 10px;">
        <div class="brand-tag">Impacto nos Investimentos · Capital Efficiency & Moat</div>
        <div class="title" style="font-size: 12.5pt; margin-bottom: 2px;">Eficiência de Capital, Extensão de Runway & Termo de Auditoria</div>
        <div class="subtitle" style="font-size: 8pt;">Como a preservação de capital viabiliza crescimento acelerado sem diluição excessiva dos fundadores</div>
      </div>

      <div class="section-title">
        <span>7. O Impacto Estratégico da Economia nos Unit Economics</span>
        <span class="section-badge">Tese de Investimento</span>
      </div>

      <div class="grid-3">
        <div class="stat-box purple">
          <div class="stat-value">5,5x</div>
          <div class="stat-label">Aceleração de Entrega</div>
          <p style="font-size: 6.8pt; color: #64748B; margin-top: 3px;">14 semanas vs. 18-24 meses de mercado.</p>
        </div>
        <div class="stat-box lime">
          <div class="stat-value">4,2x</div>
          <div class="stat-label">Extensão de Runway</div>
          <p style="font-size: 6.8pt; color: #64748B; margin-top: 3px;">Aporte dura 4,2x mais por OPEX ultra-enxuto.</p>
        </div>
        <div class="stat-box blue">
          <div class="stat-value">> 20x</div>
          <div class="stat-label">Relação LTV / CAC</div>
          <p style="font-size: 6.8pt; color: #64748B; margin-top: 3px;">LTV R$ 380 vs. CAC R$ 18,50 via MGM.</p>
        </div>
      </div>

      <div class="card-lime" style="margin-top: 8px;">
        <strong style="color: #3F6212; font-size: 8pt; display: block; margin-bottom: 2px;">Por que o Investidor da Rodada Seed se Beneficia Dessa Eficiência?</strong>
        <p style="font-size: 7.5pt; color: #365314;">
          Nas rodadas Seed tradicionais, <strong>60% a 70% dos recursos captados</strong> são consumidos em folha de pagamento de squads de engenharia, antes mesmo da tração comercial. 
          Na Netfits, como a plataforma completa já está construída, testada e homologada com 19 agentes de IA, 
          <strong>100% do aporte de R$ 4,0M a R$ 8,0M pode ser canalizado para crescimento real</strong>: ativação de comunidades, aquisição de atletas amadores (MGM), 
          patrocínios de provas de rua e funding atuarial de pontos.
        </p>
      </div>

      <div class="section-title" style="margin-top: 8px;">
        <span>8. Síntese Comparativa de Eficiência de Capital</span>
        <span class="section-badge">Quadro Resumo</span>
      </div>

      <table>
        <thead>
          <tr>
            <th>Dimensão Analisada</th>
            <th style="text-align: center;">Time Humano de Mercado</th>
            <th style="text-align: center;">Netfits AI-Native</th>
            <th>Vantagem Concorrencial Netfits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Velocidade de Time-to-Market</strong></td>
            <td style="text-align: center;">18 a 24 meses</td>
            <td style="text-align: center; font-weight: 700; color: #059669;">~14 semanas corridas</td>
            <td><strong>Chegada ao mercado 1,5 ano antes</strong></td>
          </tr>
          <tr>
            <td><strong>Desembolso de Capital Pré-Launch</strong></td>
            <td style="text-align: center;">R$ 5,58M a R$ 7,36M</td>
            <td style="text-align: center; font-weight: 700; color: #059669;">R$ 16.800,00</td>
            <td><strong>Preservação de 99,7% do caixa</strong></td>
          </tr>
          <tr>
            <td><strong>Tolerância a Regressões e Falhas</strong></td>
            <td style="text-align: center;">Frequente (turnover humano)</td>
            <td style="text-align: center; font-weight: 700; color: #059669;">Zero (Cérebro Institucional)</td>
            <td><strong>Imunidade perpétua a erros do passado</strong></td>
          </tr>
          <tr>
            <td><strong>Flexibilidade de Ajuste / Pivot</strong></td>
            <td style="text-align: center;">Semanas de refinamento ágil</td>
            <td style="text-align: center; font-weight: 700; color: #059669;">Horas (pair programming)</td>
            <td><strong>Agilidade decisória sem fricção burocrática</strong></td>
          </tr>
          <tr>
            <td><strong>Custo Fixo Mensal de TI pós-Launch</strong></td>
            <td style="text-align: center;">R$ 180k a R$ 220k/mês</td>
            <td style="text-align: center; font-weight: 700; color: #059669;">&lt; R$ 3.000,00/mês</td>
            <td><strong>Break-even garantido no Ano 1 (2027)</strong></td>
          </tr>
        </tbody>
      </table>

      <div class="signatures">
        <div class="sig-line">
          <strong>André Gallo</strong>
          Diretor Executivo & Fundador — Netfits Ltda.<br>
          CNPJ: 68.930.455/0001-40 · Alphaville, Santana de Parnaíba/SP
        </div>
        <div class="sig-line">
          <strong>Conselho Multiagêntico & Squad de Engenharia IA</strong><br>
          Lead Software Architecture, FinOps, QA & Regulatory Compliance<br>
          Production Release 2026
        </div>
      </div>
    </div>

    <div class="footer">
      <span>NETFITS TECNOLOGIA LTDA · CNPJ 68.930.455/0001-40 · Alphaville, Santana de Parnaíba/SP</span>
      <span>Página 4 de 4 · Dossiê de Produtividade v3.0</span>
    </div>
  </div>

</body>
</html>
`;

const tempHtmlPath = path.resolve('temp_produtividade_pdf.html');
fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

console.log('Generating Productivity Audit PDF via Chrome Headless...');
const cmd = `"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${outPdf1}" --no-pdf-header-footer "file:///${tempHtmlPath.replace(/\\\\/g, '/')}"`;
execSync(cmd);

// Copy to Strategy and local workspace
fs.copyFileSync(outPdf1, outPdf2);
fs.copyFileSync(outPdf1, outPdf3);

// Clean up temp file
fs.unlinkSync(tempHtmlPath);

console.log('✅ Productivity Audit PDF generated successfully:');
console.log('1. ' + outPdf1);
console.log('2. ' + outPdf2);
console.log('3. ' + outPdf3);
