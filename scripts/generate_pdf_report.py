import subprocess
import os

html_content = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>NETFITS — Relatório Executivo e Plano de Ação dos Feedbacks do MVP</title>
  <style>
    @page {
      size: A4;
      margin: 18mm 16mm 18mm 16mm;
      @bottom-right {
        content: counter(page) " de " counter(pages);
        font-size: 8pt;
        color: #71717a;
      }
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #18181b;
      line-height: 1.5;
      font-size: 9.5pt;
      background: #ffffff;
    }
    
    .header {
      border-bottom: 2px solid #84cc16;
      padding-bottom: 12px;
      margin-bottom: 18px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    
    .brand-title {
      font-size: 20pt;
      font-weight: 900;
      letter-spacing: -0.5px;
      color: #09090b;
      line-height: 1;
    }
    
    .brand-title span {
      color: #65a30d;
    }
    
    .brand-subtitle {
      font-size: 9pt;
      font-weight: 600;
      color: #71717a;
      margin-top: 4px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .meta-box {
      text-align: right;
      font-size: 8pt;
      color: #52525b;
      line-height: 1.35;
    }
    
    .meta-box strong {
      color: #09090b;
    }
    
    .badge {
      display: inline-block;
      padding: 2px 7px;
      border-radius: 4px;
      font-size: 7.5pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.4px;
    }
    
    .badge-primary { background: #f4f4f5; color: #18181b; border: 1px solid #e4e4e7; }
    .badge-success { background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; }
    .badge-warning { background: #fefce8; color: #a16207; border: 1px solid #fef08a; }
    .badge-purple { background: #faf5ff; color: #6b21a8; border: 1px solid #e9d5ff; }
    
    .executive-summary {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-left: 4px solid #84cc16;
      padding: 12px 14px;
      border-radius: 6px;
      margin-bottom: 18px;
    }
    
    .executive-summary h3 {
      font-size: 10.5pt;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 5px;
    }
    
    .executive-summary p {
      font-size: 8.8pt;
      color: #334155;
      line-height: 1.45;
    }
    
    h2 {
      font-size: 12pt;
      font-weight: 800;
      color: #09090b;
      margin-top: 18px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
      border-bottom: 1px solid #f4f4f5;
      padding-bottom: 4px;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 10px 0 16px 0;
      font-size: 8.5pt;
    }
    
    th {
      background: #f4f4f5;
      color: #27272a;
      font-weight: 800;
      text-align: left;
      padding: 6px 8px;
      border: 1px solid #e4e4e7;
      text-transform: uppercase;
      font-size: 7.5pt;
      letter-spacing: 0.3px;
    }
    
    td {
      padding: 6px 8px;
      border: 1px solid #e4e4e7;
      color: #3f3f46;
      vertical-align: top;
    }
    
    tr:nth-child(even) td {
      background: #fafafa;
    }
    
    .card-item {
      background: #ffffff;
      border: 1px solid #e4e4e7;
      border-radius: 6px;
      padding: 9px 12px;
      margin-bottom: 9px;
      page-break-inside: avoid;
    }
    
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
    }
    
    .card-title {
      font-size: 9.5pt;
      font-weight: 800;
      color: #18181b;
    }
    
    .card-body {
      font-size: 8.5pt;
      color: #4b5563;
      line-height: 1.4;
    }
    
    .card-diag {
      margin-bottom: 4px;
    }
    
    .card-sol {
      color: #0f172a;
      font-weight: 600;
      background: #f8fafc;
      padding: 4px 6px;
      border-radius: 4px;
      border-left: 3px solid #84cc16;
      margin-top: 4px;
    }
    
    .flow-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #18181b;
      color: #ffffff;
      padding: 10px 16px;
      border-radius: 6px;
      margin: 12px 0 16px 0;
      text-align: center;
    }
    
    .flow-step {
      flex: 1;
    }
    
    .flow-step strong {
      display: block;
      color: #a3e635;
      font-size: 9.5pt;
    }
    
    .flow-step span {
      font-size: 7.5pt;
      color: #a1a1aa;
    }
    
    .flow-arrow {
      color: #71717a;
      font-size: 14pt;
      padding: 0 8px;
    }
    
    .footer-sign {
      margin-top: 24px;
      padding-top: 12px;
      border-top: 1px solid #e4e4e7;
      display: flex;
      justify-content: space-between;
      font-size: 8pt;
      color: #71717a;
      page-break-inside: avoid;
    }
    
    .page-break {
      page-break-before: always;
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <div class="header">
    <div>
      <div class="brand-title">NETFITS<span>.</span></div>
      <div class="brand-subtitle">Relatório Executivo &middot; Consolidação de Feedbacks e Plano do MVP</div>
    </div>
    <div class="meta-box">
      <div><strong>Data da Avaliação:</strong> 06 de Outubro de 2026</div>
      <div><strong>Versão:</strong> MVP Release Candidate 1.0</div>
      <div><strong>Classificação:</strong> Estratégico / Governança</div>
    </div>
  </div>

  <!-- SUMÁRIO EXECUTIVO -->
  <div class="executive-summary">
    <h3>DIRETRIZ GERAL DO PRODUTO</h3>
    <p>
      <em>"O MVP não precisa mostrar tudo o que a Netfits pretende ser. Precisa fazer muito bem o que já está disponível: menos elementos sem função, menos interrupções e mais fluidez em <strong>Cadastro &rarr; Feed &rarr; Conteúdo &rarr; Shop &rarr; Checkout &rarr; Compra</strong>."</em>
    </p>
    <p style="margin-top: 5px;">
      Este documento sintetiza a análise técnica e operacional dos 9 apontamentos realizados pelos testadores e sócios fundadores, estabelecendo a matriz de priorização e o roteiro de execução em 3 Ondas.
    </p>
  </div>

  <!-- FLUXO SIMPLIFICADO -->
  <div class="flow-box">
    <div class="flow-step">
      <strong>1. GANHA NETFITS</strong>
      <span>Leitura, quizzes e bônus de boas-vindas</span>
    </div>
    <div class="flow-arrow">&rarr;</div>
    <div class="flow-step">
      <strong>2. ACUMULA NETFITS</strong>
      <span>Saldo claro e seguro na carteira nfs</span>
    </div>
    <div class="flow-arrow">&rarr;</div>
    <div class="flow-step">
      <strong>3. USA NETFITS</strong>
      <span>Abatimento direto no checkout da Loja</span>
    </div>
  </div>

  <!-- TABELA CONSOLIDADA -->
  <h2>1. Matriz de Priorização das Entregas</h2>
  <table>
    <thead>
      <tr>
        <th style="width: 6%;">Item</th>
        <th style="width: 38%;">Apontamento do Feedback</th>
        <th style="width: 26%;">Componente Afetado</th>
        <th style="width: 14%;">Frente</th>
        <th style="width: 16%;">Prioridade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>01</strong></td>
        <td>Data de Nascimento: digitação direta (sem calendário)</td>
        <td><code>src/routes/auth.tsx</code></td>
        <td>App Netfits</td>
        <td><span class="badge badge-success">Onda 1 (Imediata)</span></td>
      </tr>
      <tr>
        <td><strong>08</strong></td>
        <td>Retirada da Aba "Atividades" da barra de navegação</td>
        <td><code>src/components/AppShell.tsx</code></td>
        <td>App Netfits</td>
        <td><span class="badge badge-success">Onda 1 (Imediata)</span></td>
      </tr>
      <tr>
        <td><strong>06</strong></td>
        <td>Janela de sessão ao copiar cartão (sem re-bloqueio)</td>
        <td><code>src/lib/app-lock-store.ts</code></td>
        <td>App Netfits</td>
        <td><span class="badge badge-success">Onda 1 (Imediata)</span></td>
      </tr>
      <tr>
        <td><strong>04</strong></td>
        <td>Endereço no checkout: eliminar endereços fantasmas</td>
        <td><code>src/lib/integrations/mkplace.ts</code></td>
        <td>SSO / Backend</td>
        <td><span class="badge badge-success">Onda 1 (Imediata)</span></td>
      </tr>
      <tr>
        <td><strong>09</strong></td>
        <td>Nomenclatura: usar "Use seus Netfits" (eliminar Gift Back)</td>
        <td>App / Checkout ROCK</td>
        <td>App + Parceiro</td>
        <td><span class="badge badge-success">Onda 1 (Imediata)</span></td>
      </tr>
      <tr>
        <td><strong>07</strong></td>
        <td>Badge "Completar cadastro" com checklist acionável</td>
        <td><code>src/routes/levels.tsx</code></td>
        <td>App Netfits</td>
        <td><span class="badge badge-warning">Onda 2 (Curto Prazo)</span></td>
      </tr>
      <tr>
        <td><strong>02</strong></td>
        <td>Revisão dos Termos e Consentimento LGPD</td>
        <td><code>src/routes/auth.tsx</code>, <code>faq.tsx</code></td>
        <td>Jurídico / App</td>
        <td><span class="badge badge-warning">Onda 2 (Curto Prazo)</span></td>
      </tr>
      <tr>
        <td><strong>03</strong></td>
        <td>Feed Central: conteúdo recorrente e ponte com Shop</td>
        <td><code>src/routes/feed.tsx</code></td>
        <td>Conteúdo / App</td>
        <td><span class="badge badge-warning">Onda 2 (Curto Prazo)</span></td>
      </tr>
      <tr>
        <td><strong>05</strong></td>
        <td>Curadoria de preços da ROCK (ex: creatina R$ 999)</td>
        <td>Catálogo ROCK Encantech</td>
        <td>Parceiro ROCK</td>
        <td><span class="badge badge-purple">Onda 3 (Alinhamento)</span></td>
      </tr>
    </tbody>
  </table>

  <!-- PÁGINA 2: DETALHAMENTO TÉCNICO -->
  <div class="page-break"></div>

  <h2>2. Diagnóstico e Plano Detalhado por Ponto</h2>

  <div class="card-item">
    <div class="card-header">
      <div class="card-title">Item 01 &middot; Cadastro / Data de Nascimento: Digitação Direta</div>
      <span class="badge badge-success">Onda 1 &middot; Imediata</span>
    </div>
    <div class="card-body">
      <div class="card-diag"><strong>Diagnóstico:</strong> O input <code>type="date"</code> nativo abre o calendário do sistema móvel fixado em 2026, obrigando o usuário a rolar dezenas de anos num carrossel lento e desgastante.</div>
      <div class="card-sol"><strong>Solução Onda 1:</strong> Campo numérico formatado <code>DD/MM/AAAA</code> com máscara automática, teclado numérico direto (<code>inputMode="numeric"</code>) e validação matemática de data sem invocar calendário nativo. Digitação completa em 2 segundos.</div>
    </div>
  </div>

  <div class="card-item">
    <div class="card-header">
      <div class="card-title">Item 08 &middot; Aba "Atividades": Retirada da Barra Inferior</div>
      <span class="badge badge-success">Onda 1 &middot; Imediata</span>
    </div>
    <div class="card-body">
      <div class="card-diag"><strong>Diagnóstico:</strong> A aba de atividades sem integração ativa de hardware causava frustração e ruído de experiência (como o histórico de cliques confundido com treinos).</div>
      <div class="card-sol"><strong>Solução Onda 1:</strong> Remoção de <code>/activities</code> das abas inferiores no <code>AppShell.tsx</code>. A navegação passa a ter 4 abas maduras e fluidas: <strong>Feed</strong>, <strong>Shop</strong>, <strong>Badges</strong> e <strong>Carteira</strong>. A sincronização de smartwatches permanece preservada para lançamento oficial com APIs homologadas.</div>
    </div>
  </div>

  <div class="card-item">
    <div class="card-header">
      <div class="card-title">Item 06 &middot; Checkout: Cartão e Tolerância de Biometria</div>
      <span class="badge badge-success">Onda 1 &middot; Imediata</span>
    </div>
    <div class="card-body">
      <div class="card-diag"><strong>Diagnóstico:</strong> O timeout de segundo plano do <code>app-lock-store.ts</code> estava em apenas 15 segundos. Ao minimizar o app para buscar o número do cartão no banco, o app voltava bloqueado por biometria, resetando a jornada do checkout.</div>
      <div class="card-sol"><strong>Solução Onda 1:</strong> Elevação do timeout padrão para <strong>5 minutos</strong> e implementação de guarda de sessão protegida durante o checkout (tolerância de até 10 minutos sem lock), preservando exatamente o ponto da compra.</div>
    </div>
  </div>

  <div class="card-item">
    <div class="card-header">
      <div class="card-title">Item 04 &middot; Checkout: Eliminar Endereços Fantasmas</div>
      <span class="badge badge-success">Onda 1 &middot; Imediata</span>
    </div>
    <div class="card-body">
      <div class="card-diag"><strong>Diagnóstico:</strong> Na função <code>buildMkplaceProfile</code>, usuários sem endereço cadastrado recebiam fallback de <code>city: "São Paulo"</code> e <code>number: "S/N"</code>, fazendo a Rock mostrar um endereço desconhecido.</div>
      <div class="card-sol"><strong>Solução Onda 1:</strong> Se o atleta não possui endereço cadastrado no perfil, o payload envia <code>addresses: []</code>. Isso força a tela nativa de endereço da Rock a solicitar o endereço real e persistir no perfil na confirmação.</div>
    </div>
  </div>

  <div class="card-item">
    <div class="card-header">
      <div class="card-title">Item 09 &middot; Nomenclatura: "Use seus Netfits" (Fim do Gift Back)</div>
      <span class="badge badge-success">Onda 1 &middot; Imediata</span>
    </div>
    <div class="card-body">
      <div class="card-diag"><strong>Diagnóstico:</strong> Expressões como "Gift Back" e referências dispersas de "cashback" geravam confusão conceitual.</div>
      <div class="card-sol"><strong>Solução Onda 1:</strong> Higienização de textos no app para <strong>"Use seus Netfits"</strong> e <strong>"Ganhe Netfits"</strong>. Solicitação formal concomitante para que a ROCK altere o texto no componente de checkout deles.</div>
    </div>
  </div>

  <div class="card-item">
    <div class="card-header">
      <div class="card-title">Itens 02, 03, 05 e 07 &middot; Ondas 2 e 3 (Curto Prazo e Alinhamento ROCK)</div>
      <span class="badge badge-warning">Ondas 2 e 3</span>
    </div>
    <div class="card-body">
      <div class="card-diag"><strong>Planejamento:</strong>
        <br>&bull; <strong>Item 07:</strong> Badge com lista do que falta (Endereço, Fidelidade, Esportes) com link direto para completar no perfil;
        <br>&bull; <strong>Item 02:</strong> Revisão dos Termos LGPD alinhando personalização e longevidade;
        <br>&bull; <strong>Item 03:</strong> Pílulas de conteúdo do Feed com conexão a produtos do Shop da Rock;
        <br>&bull; <strong>Item 05:</strong> Comunicação com a equipe da ROCK Encantech para higienização dos preços dos sellers integrados.
      </div>
    </div>
  </div>

  <!-- ASSINATURAS E RASTREABILIDADE -->
  <div class="footer-sign">
    <div>
      <strong>Netfits Fidelidade Ltda.</strong> &middot; CNPJ 68.930.455/0001-40<br>
      Santana de Parnaíba / SP &middot; Relatório Gerado em 06/10/2026
    </div>
    <div style="text-align: right;">
      Ponto de Backup Criado: <code>backup-pre-onda-1-20261006</code><br>
      Status: <strong>Onda 1 Aprovada para Aplicação Imediata</strong>
    </div>
  </div>

</body>
</html>
"""

html_path = r"C:\Users\aacga\Projetos\app_netfits\scripts\relatorio_feedbacks.html"
pdf_path_workspace = r"C:\Users\aacga\OneDrive\netfits\NETFITS_Relatorio_Executivo_Plano_Acao_Feedbacks_MVP_06_10_2026.pdf"
pdf_path_artifacts = r"C:\Users\aacga\.gemini\antigravity\brain\54b2dabf-7dd2-4d06-8b93-2c26c254277c\NETFITS_Relatorio_Executivo_Plano_Acao_Feedbacks_MVP_06_10_2026.pdf"

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html_content)

chrome_exe = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
cmd = [
    chrome_exe,
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    f"--print-to-pdf={pdf_path_workspace}",
    html_path
]

res = subprocess.run(cmd, capture_output=True, text=True)
if res.returncode == 0:
    import shutil
    shutil.copyfile(pdf_path_workspace, pdf_path_artifacts)
    print(f"PDF gerado com sucesso em:\n- {pdf_path_workspace}\n- {pdf_path_artifacts}")
else:
    print(f"Erro ao gerar PDF: {res.stderr}")
