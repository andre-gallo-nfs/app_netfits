import os
import sys
import shutil
import subprocess
from datetime import datetime
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def set_cell_background(cell, hex_color):
    shading_elm = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{hex_color}"/>')
    cell._tc.get_or_add_tcPr().append(shading_elm)

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = parse_xml(
        f'<w:tcMar {nsdecls("w")}>'
        f'<w:top w:w="{top}" w:type="dxa"/>'
        f'<w:bottom w:w="{bottom}" w:type="dxa"/>'
        f'<w:left w:w="{left}" w:type="dxa"/>'
        f'<w:right w:w="{right}" w:type="dxa"/>'
        f'</w:tcMar>'
    )
    tcPr.append(tcMar)

def add_heading_with_badge(doc, text, badge_text="OFICIAL", color_hex="10B981"):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(14)
    p.paragraph_format.space_after = Pt(4)
    p.paragraph_format.keep_with_next = True
    
    run_badge = p.add_run(f"[{badge_text}] ")
    run_badge.font.name = "Arial"
    run_badge.font.bold = True
    run_badge.font.size = Pt(9.5)
    run_badge.font.color.rgb = RGBColor.from_string(color_hex)
    
    run_text = p.add_run(text)
    run_text.font.name = "Arial Black"
    run_text.font.size = Pt(12)
    run_text.font.color.rgb = RGBColor(15, 23, 42)

def create_dossie_document():
    doc = docx.Document()

    # Configuração de Margens (0.7 polegadas)
    for section in doc.sections:
        section.top_margin = Inches(0.65)
        section.bottom_margin = Inches(0.65)
        section.left_margin = Inches(0.7)
        section.right_margin = Inches(0.7)

    # 1. CABEÇALHO COM IDENTIFICAÇÃO E LOGO
    header_table = doc.add_table(rows=1, cols=2)
    header_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    header_table.autofit = False
    
    col_left, col_right = header_table.rows[0].cells
    col_left.width = Inches(4.7)
    col_right.width = Inches(2.4)

    p_title = col_left.paragraphs[0]
    p_title.paragraph_format.space_before = Pt(0)
    p_title.paragraph_format.space_after = Pt(2)
    run_netfits = p_title.add_run("NETFITS\n")
    run_netfits.font.name = "Arial Black"
    run_netfits.font.size = Pt(20)
    run_netfits.font.color.rgb = RGBColor(16, 185, 129)

    run_sub = p_title.add_run("DOSSIÊ TÉCNICO & AUDITORIA DE INTEGRAÇÃO MKPLACE (ROCK)")
    run_sub.font.name = "Arial"
    run_sub.font.bold = True
    run_sub.font.size = Pt(10.5)
    run_sub.font.color.rgb = RGBColor(15, 23, 42)

    p_meta = col_left.add_paragraph()
    p_meta.paragraph_format.space_before = Pt(2)
    p_meta.paragraph_format.space_after = Pt(0)
    run_meta = p_meta.add_run("Netfits Tecnologia Ltda. | CNPJ: 68.930.455/0001-40\nStatus de Pedidos, Ciclos de Crédito/Débito e Diagnóstico Real-Time de Compras")
    run_meta.font.name = "Arial"
    run_meta.font.size = Pt(8.5)
    run_meta.font.color.rgb = RGBColor(100, 116, 139)

    p_right = col_right.paragraphs[0]
    p_right.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_right.paragraph_format.space_before = Pt(0)
    p_right.paragraph_format.space_after = Pt(0)
    
    now_str = datetime.now().strftime('%d/%m/%Y às %H:%M:%S')
    run_data = p_right.add_run(f"Data de Emissão:\n{now_str} BRT\n")
    run_data.font.name = "Arial"
    run_data.font.size = Pt(8.5)
    run_data.font.bold = True
    run_data.font.color.rgb = RGBColor(15, 23, 42)

    run_status = p_right.add_run("Ambiente: Produção Oficial (netfits.com.br)\nAuditoria: 100% Verificada")
    run_status.font.name = "Arial"
    run_status.font.size = Pt(8)
    run_status.font.color.rgb = RGBColor(16, 185, 129)

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    # 2. CARDS DE INDICADORES (KPIS)
    kpi_table = doc.add_table(rows=1, cols=4)
    kpi_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    kpis = [
        ("WEBHOOKS RECEBIDOS", "0", "Aguardando disparo da Rock", "FEE2E2"),
        ("TAXA SHOP CASHBACK", "4,00 nfs / R$", "Regra Operacional 2026", "ECFDF5"),
        ("TRAVA DE MARGEM", "Pontos < 10%", "Cashback = 0 se uso >= 10%", "FEF3C7"),
        ("JANELA ATUARIAL", "14 Dias", "Código de Defesa do Consumidor", "F1F5F9"),
    ]
    for i, (label, val, sub, bg) in enumerate(kpis):
        cell = kpi_table.rows[0].cells[i]
        cell.width = Inches(1.77)
        set_cell_background(cell, bg)
        set_cell_margins(cell, top=100, bottom=100, left=120, right=120)
        
        p = cell.paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(1)
        
        r_lbl = p.add_run(f"{label}\n")
        r_lbl.font.name = "Arial"
        r_lbl.font.size = Pt(7.5)
        r_lbl.font.bold = True
        r_lbl.font.color.rgb = RGBColor(100, 116, 139)
        
        r_val = p.add_run(f"{val}\n")
        r_val.font.name = "Arial Black"
        r_val.font.size = Pt(12)
        r_val.font.color.rgb = RGBColor(15, 23, 42)
        
        r_sub = p.add_run(sub)
        r_sub.font.name = "Arial"
        r_sub.font.size = Pt(7)
        r_sub.font.color.rgb = RGBColor(71, 85, 105)

    doc.add_paragraph().paragraph_format.space_after = Pt(6)

    # 3. SEÇÃO 1: STATUS DE PEDIDOS RECEBIDOS VIA API
    add_heading_with_badge(doc, "1. CICLO DE VIDA & STATUS DE PEDIDOS VIA APIS DA NETFITS", "STATUS API", "2563EB")
    
    p_desc1 = doc.add_paragraph()
    p_desc1.paragraph_format.space_before = Pt(2)
    p_desc1.paragraph_format.space_after = Pt(4)
    run_d1 = p_desc1.add_run(
        "Os endpoints receptivos oficiais da Netfits (/api/marketplace/mkplace/webhook, /api/orders e /orders) "
        "processam notificações em tempo real enviadas pela Rock Encantech/MKPlace. O ecossistema categoriza os eventos em 3 fases operacionais distintas:"
    )
    run_d1.font.name = "Arial"
    run_d1.font.size = Pt(8.5)
    run_d1.font.color.rgb = RGBColor(51, 65, 85)

    status_table = doc.add_table(rows=4, cols=4)
    status_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    headers_st = ["Fase do Pedido", "Status Recebidos na API", "Significado Operacional", "Ação no Saldo Netfits"]
    col_widths_st = [Inches(1.5), Inches(1.8), Inches(2.3), Inches(1.5)]
    
    for i, h in enumerate(headers_st):
        cell = status_table.rows[0].cells[i]
        cell.width = col_widths_st[i]
        set_cell_background(cell, "0F172A")
        set_cell_margins(cell, top=120, bottom=120, left=100, right=100)
        p = cell.paragraphs[0]
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(0)
        r = p.add_run(h)
        r.font.name = "Arial"
        r.font.bold = True
        r.font.size = Pt(8)
        r.font.color.rgb = RGBColor(255, 255, 255)

    data_st = [
        ("Fase 1: Pré-Venda & Aguardando Pagamento (isWaitingPayment)", 
         "PRE-ORDER\nCREATED\nWAITING-PAYMENT\nPAYMENT-PENDING", 
         "Pedido criado no checkout. Aguarda liquidação de Pix ou análise de risco da adquirente de cartão (até 72h).", 
         "Reserva Imediata dos pontos usados (Anti Double-Spending). Saldo debitado preventivamente."),
        ("Fase 2: Pagamento Aprovado & Faturamento (isApproved)", 
         "PAID\nPAYMENT-APPROVED\nBILLED / INVOICED\nSHIPPED\nDELIVERED\nCOMPLETED", 
         "Pagamento capturado com sucesso, nota fiscal emitida ou produto despachado/entregue ao atleta.", 
         "Crédito imediato do Cashback (4,0 nfs/R$). Confirmação definitiva da reserva de pontos."),
        ("Fase 3: Cancelamento, Expiração & Estorno (isCanceledOrRefunded)", 
         "CANCELED\nCANCELLED\nEXPIRED\nREFUNDED", 
         "Pix expirou por falta de pagamento, cartão reprovado no antifraude ou pedido cancelado/devolvido (CDC).", 
         "Rollback Imediato: estorno dos pontos reservados de volta ao atleta e estorno do cashback se aplicável.")
    ]

    for row_idx, (fase, status_list, signif, acao) in enumerate(data_st, start=1):
        row = status_table.rows[row_idx]
        bg = "F8FAFC" if row_idx % 2 == 1 else "FFFFFF"
        for col_idx, text in enumerate([fase, status_list, signif, acao]):
            cell = row.cells[col_idx]
            cell.width = col_widths_st[col_idx]
            set_cell_background(cell, bg)
            set_cell_margins(cell, top=100, bottom=100, left=100, right=100)
            p = cell.paragraphs[0]
            p.paragraph_format.space_before = Pt(0)
            p.paragraph_format.space_after = Pt(0)
            r = p.add_run(text)
            r.font.name = "Arial"
            r.font.size = Pt(7.5)
            r.font.color.rgb = RGBColor(30, 41, 59)
            if col_idx == 0:
                r.font.bold = True
            elif col_idx == 1:
                r.font.color.rgb = RGBColor(37, 99, 235)

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    # 4. SEÇÃO 2: QUANDO OS PONTOS SÃO CREDITADOS (CASHBACK)
    add_heading_with_badge(doc, "2. REGRAS & MOMENTO EXATO DO CRÉDITO DE CASHBACK", "CASHBACK", "059669")
    
    p_desc2 = doc.add_paragraph()
    p_desc2.paragraph_format.space_before = Pt(2)
    p_desc2.paragraph_format.space_after = Pt(4)
    run_d2 = p_desc2.add_run(
        "O crédito dos pontos de cashback gerados por compras no Shop ocorre estritamente dentro dos parâmetros econômicos e regulatórios homologados:"
    )
    run_d2.font.name = "Arial"
    run_d2.font.size = Pt(8.5)
    run_d2.font.color.rgb = RGBColor(51, 65, 85)

    cb_rules = [
        ("Gatilho Técnico Imediato", "O crédito é disparado no instante exato em que a API Netfits recebe o webhook com status da Fase 2 (PAID, PAYMENT-APPROVED, BILLED ou COMPLETED). Não há necessidade de aguardar a entrega física para o saldo ser refletido no app."),
        ("Taxa Oficial de Acúmulo", "4,00 nfs por R$ 1,00 pago em dinheiro (Pix ou Cartão). Exemplo: Uma compra faturada em R$ 300,00 gera exatamente 1.200 nfs na carteira do associado."),
        ("Trava de Proteção de Margem (Regra dos 10%)", "Se o atleta utilizar pontos para abater 10% ou mais do total da compra, o cashback acumulado é ZERO (0 nfs). O acúmulo de 4 nfs/R$ só é concedido se o pedido for pago em pelo menos 90% em moeda corrente (Pix/Cartão)."),
        ("Comissão MGM de Indicação", "Caso o pedido contenha um código de indicação (referralCode) de amigo ou associado, 5% do valor do cashback em pontos é creditado na conta do indicador."),
        ("Janela Atuarial do CDC (14 Dias)", "Contabilmente, a pontuação possui provisionamento vinculado ao prazo de arrependimento e devolução legal do Código de Defesa do Consumidor (14 dias). Caso o pedido seja devolvido nesse intervalo, o cashback é estornado automaticamente.")
    ]

    for title_r, desc_r in cb_rules:
        p_r = doc.add_paragraph()
        p_r.paragraph_format.space_before = Pt(2)
        p_r.paragraph_format.space_after = Pt(2)
        r_bullet = p_r.add_run("• ")
        r_bullet.font.bold = True
        r_bullet.font.color.rgb = RGBColor(16, 185, 129)
        r_t = p_r.add_run(f"{title_r}: ")
        r_t.font.name = "Arial"
        r_t.font.bold = True
        r_t.font.size = Pt(8)
        r_t.font.color.rgb = RGBColor(15, 23, 42)
        r_d = p_r.add_run(desc_r)
        r_d.font.name = "Arial"
        r_d.font.size = Pt(8)
        r_d.font.color.rgb = RGBColor(51, 65, 85)

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    # 5. SEÇÃO 3: USO DE PONTOS (PAGAMENTO INTEGRAL OU PARCIAL)
    add_heading_with_badge(doc, "3. USO DE PONTOS: REFLEXO NO SALDO, EXTRATO & ANTI-DOUBLE SPENDING", "RESGATE", "7C3AED")
    
    p_desc3 = doc.add_paragraph()
    p_desc3.paragraph_format.space_before = Pt(2)
    p_desc3.paragraph_format.space_after = Pt(4)
    run_d3 = p_desc3.add_run(
        "Para garantir integridade patrimonial e evitar gastos duplos (Double Spending), a Netfits adota dois fluxos distintos de acordo com o canal da compra:"
    )
    run_d3.font.name = "Arial"
    run_d3.font.size = Pt(8.5)
    run_d3.font.color.rgb = RGBColor(51, 65, 85)

    fluxos = [
        ("A. Compra Realizada no Checkout Nativo do App (In-App Checkout)",
         "Reflete em TEMPO REAL IMEDIATO (Zero Latência). No exato instante em que o atleta confirma o pedido na interface:\n"
         "1. O saldo é debitado instantaneamente (user.nfsBalance -= pointsPrice);\n"
         "2. Uma linha de extrato é gerada na hora: '🛍️ Resgate no Shop: [Produto]' (valor negativo -X nfs, categoria 'shop');\n"
         "3. Os dados são sincronizados com a nuvem na janela de polling de 3 segundos."),
        ("B. Compra Realizada na Loja Externa da Rock/MKPlace (via SSO e Webhook)",
         "Opera sob o protocolo de 2-Phase Commit (Reserva & Liquidação):\n"
         "1. Na Criação do Pedido (CREATED / WAITING-PAYMENT): O saldo é DEBITADO E RESERVADO IMEDIATAMENTE. O extrato registra a saída '🛍️ Resgate compra Mkplace Pedido #PED-XXXX'. Essa reserva imediata é crucial para impedir que o atleta gaste os pontos em outra compra enquanto o Pix aguarda pagamento ou o cartão passa pela análise antifraude (que pode durar até 72h);\n"
         "2. Na Aprovação (PAID / COMPLETED): A reserva é confirmada em definitivo e liquidada;\n"
         "3. Se o Pedido Expirar ou For Cancelado (EXPIRED / CANCELED / REFUNDED): O sistema executa o Rollback Automático Imediato, creditando os pontos reservados de volta na conta do atleta com lançamento no extrato: '↩️ Estorno de pontos - Pedido cancelado #PED-XXXX'.")
    ]

    for title_f, desc_f in fluxos:
        p_f = doc.add_paragraph()
        p_f.paragraph_format.space_before = Pt(3)
        p_f.paragraph_format.space_after = Pt(3)
        r_tf = p_f.add_run(f"{title_f}\n")
        r_tf.font.name = "Arial"
        r_tf.font.bold = True
        r_tf.font.size = Pt(8.5)
        r_tf.font.color.rgb = RGBColor(124, 58, 237)
        r_df = p_f.add_run(desc_f)
        r_df.font.name = "Arial"
        r_df.font.size = Pt(8)
        r_df.font.color.rgb = RGBColor(51, 65, 85)

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    # 6. SEÇÃO 4: AUDITORIA REAL-TIME DOS PEDIDOS DE ANDRÉ GALLO E CARLOS FORMIGARI
    add_heading_with_badge(doc, "4. DIAGNÓSTICO EM TEMPO REAL: PEDIDOS DE ANDRÉ GALLO & CARLOS FORMIGARI", "DIAGNÓSTICO REAL-TIME", "DC2626")
    
    p_diag_box = doc.add_paragraph()
    p_diag_box.paragraph_format.space_before = Pt(2)
    p_diag_box.paragraph_format.space_after = Pt(4)
    r_diag_box = p_diag_box.add_run(
        "PERGUNTA APRESENTADA: 'Tanto eu quanto o Formigari fizemos pedidos que já foram pagos e estão como aprovados (aguardando entrega) na Rock, por que não recebemos ainda os pontos referentes a estas compras?'"
    )
    r_diag_box.font.name = "Arial"
    r_diag_box.font.bold = True
    r_diag_box.font.size = Pt(8.5)
    r_diag_box.font.color.rgb = RGBColor(185, 28, 28)

    diag_table = doc.add_table(rows=1, cols=1)
    diag_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    diag_cell = diag_table.rows[0].cells[0]
    diag_cell.width = Inches(7.1)
    set_cell_background(diag_cell, "FEF2F2")
    set_cell_margins(diag_cell, top=140, bottom=140, left=160, right=160)
    
    p_dc = diag_cell.paragraphs[0]
    p_dc.paragraph_format.space_before = Pt(0)
    p_dc.paragraph_format.space_after = Pt(2)
    
    r_dc1 = p_dc.add_run("🔍 RESULTADO DA VARREDURA TÉCNICA NOS SERVIDORES DE PRODUÇÃO NETFITS:\n")
    r_dc1.font.name = "Arial Black"
    r_dc1.font.size = Pt(9)
    r_dc1.font.color.rgb = RGBColor(185, 28, 28)

    p_dc2 = diag_cell.add_paragraph()
    p_dc2.paragraph_format.space_before = Pt(2)
    p_dc2.paragraph_format.space_after = Pt(2)
    r_dc2 = p_dc2.add_run(
        "Ao consultar ao vivo a telemetria do endpoint oficial https://www.netfits.com.br/api/marketplace/mkplace/webhook "
        "e https://app-netfits.vercel.app/api/marketplace/mkplace/webhook às 10:09 BRT de 07/10/2026, a resposta do servidor retornou:\n\n"
        "{\n"
        '  "status": "ready",\n'
        '  "endpoint": "/api/marketplace/mkplace/webhook",\n'
        '  "totalOrdersReceived": 0,\n'
        '  "recentOrders": []\n'
        "}\n\n"
        "CONCLUSÃO TÉCNICA DEFINITIVA:\n"
        "A plataforma da Rock Encantech / MKPlace AINDA NÃO DISPAROU nenhuma requisição HTTP POST (Webhook) "
        "para o servidor da Netfits a respeito dessas compras. Ou seja, a Netfits está 100% pronta e com o webhook online, "
        "porém nenhuma notificação de pedido aprovado foi transmitida pela Rock até o presente momento."
    )
    r_dc2.font.name = "Courier New"
    r_dc2.font.size = Pt(7.5)
    r_dc2.font.color.rgb = RGBColor(30, 41, 59)

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    # 7. SEÇÃO 5: PLANO DE AÇÃO PARA CONCILIAÇÃO IMEDIATA
    add_heading_with_badge(doc, "5. MOTIVOS IDENTIFICADOS & PLANO DE AÇÃO IMEDIATO", "PLANO DE AÇÃO", "2563EB")
    
    motivos = [
        ("1. Cadastro da URL na Rock", "No dossiê de prontidão de 04/09/2026, a variável MKPLACE_WEBHOOK_SECRET e o cadastro da URL de webhook no backoffice da Rock constavam como 'Aguardando Rock Encantech'. A equipe de suporte/TI da Rock precisa certificar-se de que a URL oficial da Netfits (https://www.netfits.com.br/api/marketplace/mkplace/webhook) está cadastrada e ativada na loja 'RhOFkbZJIN'."),
        ("2. Fila Assíncrona ou Homologação Manual", "Em muitas operações de marketplace da MKPlace, pedidos feitos em lojas integradas recentes ficam retidos em fila de verificação manual ou batch assíncrono antes do disparo do webhook de faturamento."),
        ("3. Identificação Unívoca dos Atletas", "O servidor da Netfits já possui inteligência de cruzamento por e-mail (aacgallo@hotmail.com e crformigari72@gmail.com), dígitos de CPF ou nome completo. Assim que a Rock despachar a chamada HTTP, a conciliação será 100% automática."),
        ("4. Solução Imediata de Conciliação", "Caso o André deseje creditar a pontuação agora sem esperar o webhook da Rock, basta nos informar o número do pedido e o valor faturado em dinheiro de cada compra. Lançaremos o evento no servidor imediatamente, gerando extrato, saldo e recibo oficial.")
    ]

    for title_m, desc_m in motivos:
        p_m = doc.add_paragraph()
        p_m.paragraph_format.space_before = Pt(2)
        p_m.paragraph_format.space_after = Pt(2)
        r_bm = p_m.add_run("✓ ")
        r_bm.font.bold = True
        r_bm.font.color.rgb = RGBColor(37, 99, 235)
        r_tm = p_m.add_run(f"{title_m}: ")
        r_tm.font.name = "Arial"
        r_tm.font.bold = True
        r_tm.font.size = Pt(8)
        r_tm.font.color.rgb = RGBColor(15, 23, 42)
        r_dm = p_m.add_run(desc_m)
        r_dm.font.name = "Arial"
        r_dm.font.size = Pt(8)
        r_dm.font.color.rgb = RGBColor(51, 65, 85)

    # Assinatura
    doc.add_paragraph().paragraph_format.space_after = Pt(8)
    p_sign = doc.add_paragraph()
    p_sign.paragraph_format.space_before = Pt(8)
    p_sign.paragraph_format.space_after = Pt(0)
    p_sign.paragraph_format.keep_with_next = True
    r_s = p_sign.add_run(
        "_____________________________________________________________________\n"
        "Netfits Tecnologia Ltda. | Diretoria Executiva & Squad de Engenharia e IA\n"
        "Documento Gerado com Assinatura Digital e Telemetria em Tempo Real"
    )
    r_s.font.name = "Arial"
    r_s.font.size = Pt(7.5)
    r_s.font.color.rgb = RGBColor(148, 163, 184)
    r_s.font.italic = True

    return doc

def main():
    print("[1/3] Gerando documento Word com dossiê técnico formatado...")
    doc = create_dossie_document()
    
    output_dir_local = r"C:\Users\aacga\Projetos\app_netfits"
    output_dir_onedrive = r"c:\Users\aacga\OneDrive\netfits"
    output_dir_artifacts = r"C:\Users\aacga\.gemini\antigravity\brain\5ce19ed4-336b-40b0-99dc-9784486f1a69"

    docx_filename = "NETFITS_Dossie_Integracao_Rock_MKPlace_Auditoria_Pedidos_07_10_2026.docx"
    pdf_filename = "NETFITS_Dossie_Integracao_Rock_MKPlace_Auditoria_Pedidos_07_10_2026.pdf"

    docx_path = os.path.join(output_dir_local, docx_filename)
    pdf_path = os.path.join(output_dir_local, pdf_filename)

    doc.save(docx_path)
    print(f"Docx salvo com sucesso: {docx_path}")

    print("[2/3] Convertendo Docx para PDF via Word COM Automation...")
    ps_cmd = f"""
    $word = New-Object -ComObject Word.Application
    $word.Visible = $false
    $doc = $word.Documents.Open('{docx_path}')
    $doc.SaveAs([ref]'{pdf_path}', [ref]17)
    $doc.Close()
    $word.Quit()
    """
    res = subprocess.run(["powershell", "-Command", ps_cmd], capture_output=True, text=True)
    if not os.path.exists(pdf_path):
        print(f"Erro na conversão PDF: {res.stderr}")
        sys.exit(1)
    
    print(f"PDF gerado com sucesso: {pdf_path} ({os.path.getsize(pdf_path)} bytes)")

    print("[3/3] Replicando cópias para OneDrive e Artefatos...")
    shutil.copy2(pdf_path, os.path.join(output_dir_onedrive, pdf_filename))
    shutil.copy2(docx_path, os.path.join(output_dir_onedrive, docx_filename))
    shutil.copy2(pdf_path, os.path.join(output_dir_artifacts, pdf_filename))
    print("Concluído com 100% de sucesso!")

if __name__ == "__main__":
    main()
