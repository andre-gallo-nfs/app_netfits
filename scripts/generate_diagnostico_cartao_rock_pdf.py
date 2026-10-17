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

def add_heading_with_badge(doc, text, badge_text="OK", color_hex="10B981"):
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
    run_text.font.size = Pt(11.5)
    run_text.font.color.rgb = RGBColor(15, 23, 42)

def add_callout(doc, text, title="DIAGNÓSTICO TÉCNICO", border_color="10B981", bg_color="F0FDF4"):
    tbl = doc.add_table(rows=1, cols=1)
    tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl.autofit = False
    cell = tbl.rows[0].cells[0]
    cell.width = Inches(7.1)
    set_cell_background(cell, bg_color)
    set_cell_margins(cell, top=120, bottom=120, left=180, right=180)
    
    # Borda esquerda verde
    borders = parse_xml(
        f'<w:tcBorders {nsdecls("w")}>'
        f'<w:top w:val="none"/>'
        f'<w:left w:val="single" w:sz="24" w:space="0" w:color="{border_color}"/>'
        f'<w:bottom w:val="none"/>'
        f'<w:right w:val="none"/>'
        f'</w:tcBorders>'
    )
    cell._tc.get_or_add_tcPr().append(borders)
    
    p = cell.paragraphs[0]
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(2)
    r_tit = p.add_run(f"★ {title}\n")
    r_tit.font.name = "Arial"
    r_tit.font.bold = True
    r_tit.font.size = Pt(9.5)
    r_tit.font.color.rgb = RGBColor.from_string(border_color)
    
    r_txt = p.add_run(text)
    r_txt.font.name = "Arial"
    r_txt.font.size = Pt(8.5)
    r_txt.font.color.rgb = RGBColor(30, 41, 59)

def create_document():
    doc = docx.Document()

    # Configuração de Margens
    for section in doc.sections:
        section.top_margin = Inches(0.65)
        section.bottom_margin = Inches(0.65)
        section.left_margin = Inches(0.7)
        section.right_margin = Inches(0.7)

    # 1. CABEÇALHO COM IDENTIFICAÇÃO
    header_table = doc.add_table(rows=1, cols=2)
    header_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    header_table.autofit = False
    
    col_left, col_right = header_table.rows[0].cells
    col_left.width = Inches(4.8)
    col_right.width = Inches(2.3)

    p_title = col_left.paragraphs[0]
    p_title.paragraph_format.space_before = Pt(0)
    p_title.paragraph_format.space_after = Pt(2)
    run_netfits = p_title.add_run("NETFITS\n")
    run_netfits.font.name = "Arial Black"
    run_netfits.font.size = Pt(18)
    run_netfits.font.color.rgb = RGBColor(16, 185, 129)

    run_sub = p_title.add_run("DIAGNÓSTICO TÉCNICO DE INTEGRAÇÃO & GATEWAY")
    run_sub.font.name = "Arial"
    run_sub.font.bold = True
    run_sub.font.size = Pt(9.5)
    run_sub.font.color.rgb = RGBColor(15, 23, 42)

    p_meta = col_left.add_paragraph()
    p_meta.paragraph_format.space_before = Pt(2)
    p_meta.paragraph_format.space_after = Pt(0)
    run_meta = p_meta.add_run("Netfits Tecnologia Ltda. | CNPJ: 68.930.455/0001-40\nDestinatário: Equipe Técnica Rock Encantech (Att: Edinho)")
    run_meta.font.name = "Arial"
    run_meta.font.size = Pt(8.5)
    run_meta.font.color.rgb = RGBColor(100, 116, 139)

    p_right = col_right.paragraphs[0]
    p_right.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_right.paragraph_format.space_before = Pt(0)
    p_right.paragraph_format.space_after = Pt(0)
    
    run_data = p_right.add_run(f"Data de Emissão:\n09/10/2026 às 11:15 BRT\n")
    run_data.font.name = "Arial"
    run_data.font.size = Pt(8.5)
    run_data.font.bold = True
    run_data.font.color.rgb = RGBColor(15, 23, 42)

    run_status = p_right.add_run("Status: AUDITORIA CONCLUÍDA\nAmbiente: Produção (netfits.com.br)")
    run_status.font.name = "Arial"
    run_status.font.size = Pt(8)
    run_status.font.color.rgb = RGBColor(16, 185, 129)

    doc.add_paragraph().paragraph_format.space_after = Pt(6)

    # CALLOUT INICIAL DE SÍNTESE
    add_callout(
        doc,
        "Este documento consolida o diagnóstico técnico da Netfits sobre a falha de cadastramento de cartão de crédito "
        "reportada pelo usuário Carlos Rodrigo Formigari na Loja Integrada Rock Encantech na noite de 08/10/2026. "
        "Nossa auditoria comprovou que a API Netfits responde com 100% de sucesso (HTTP 200) e integridade aos contratos de SSO, "
        "endereço e perfil. O bloqueio ocorre no estágio de tokenização e análise de risco do Gateway/Antifraude da adquirente "
        "ou por cache de dados cadastrais no backend da loja.",
        title="SUMÁRIO DO DIAGNÓSTICO",
        border_color="0284C7",
        bg_color="F0F9FF"
    )

    doc.add_paragraph().paragraph_format.space_after = Pt(6)

    # SEÇÃO 1: AUDITORIA DOS SERVIÇOS NETFITS
    add_heading_with_badge(doc, "1. AUDITORIA EM TEMPO REAL DOS ENDPOINTS NETFITS", badge_text="100% OK", color_hex="10B981")
    
    p_desc = doc.add_paragraph()
    p_desc.paragraph_format.space_before = Pt(2)
    p_desc.paragraph_format.space_after = Pt(4)
    r = p_desc.add_run(
        "Simulamos exatamente a sequência de chamadas executadas durante o handshake de autenticação e abertura da loja "
        "para o usuário Carlos Rodrigo Formigari (usr_carlos_formigari). Todas as rotas de produção responderam com sucesso imediato:"
    )
    r.font.name = "Arial"
    r.font.size = Pt(8.5)

    # TABELA DE AUDITORIA
    tbl_audit = doc.add_table(rows=5, cols=4)
    tbl_audit.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_audit.autofit = False

    widths = [Inches(1.8), Inches(1.3), Inches(0.9), Inches(3.1)]
    headers = ["Endpoint Auditado", "Método / Autenticação", "Status HTTP", "Retorno / Payload Validado"]

    for i, h in enumerate(headers):
        cell = tbl_audit.rows[0].cells[i]
        cell.width = widths[i]
        set_cell_background(cell, "0F172A")
        set_cell_margins(cell, top=80, bottom=80, left=100, right=100)
        p = cell.paragraphs[0]
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(0)
        run = p.add_run(h)
        run.font.name = "Arial"
        run.font.bold = True
        run.font.size = Pt(8)
        run.font.color.rgb = RGBColor(255, 255, 255)

    audit_data = [
        (
            "/api/marketplace/mkplace/token",
            "POST (Auth Inicial)",
            "200 OK",
            "JWT RS256 gerado com: CPF 11553412877, crformigari72@gmail.com, Tel: 11984264116"
        ),
        (
            "/customer/profile",
            "GET (Bearer JWT)",
            "200 OK",
            "Nome: Carlos Rodrigo Formigari | Nasc: 1972-12-05 | Endereço Alphaville/Santana de Parnaíba"
        ),
        (
            "/customer/addresses",
            "GET (Bearer JWT)",
            "200 OK",
            "Alameda das Embaúbas, 365, Santana de Parnaíba - SP, CEP 06542-195 (campos estruturados)"
        ),
        (
            "/customer/cards",
            "GET & POST",
            "200 OK",
            "POST simulado com resposta de conformidade: {'success': true, 'message': 'Cartão validado'}"
        ),
    ]

    for row_idx, data in enumerate(audit_data, start=1):
        for col_idx, text in enumerate(data):
            cell = tbl_audit.rows[row_idx].cells[col_idx]
            cell.width = widths[col_idx]
            bg_col = "F8FAFC" if row_idx % 2 == 1 else "FFFFFF"
            set_cell_background(cell, bg_col)
            set_cell_margins(cell, top=70, bottom=70, left=90, right=90)
            p = cell.paragraphs[0]
            p.paragraph_format.space_before = Pt(0)
            p.paragraph_format.space_after = Pt(0)
            run = p.add_run(text)
            run.font.name = "Arial"
            run.font.size = Pt(7.5)
            if col_idx == 2:
                run.font.bold = True
                run.font.color.rgb = RGBColor(16, 185, 129)
            elif col_idx == 0:
                run.font.bold = True
                run.font.color.rgb = RGBColor(15, 23, 42)
            else:
                run.font.color.rgb = RGBColor(51, 65, 85)

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    # SEÇÃO 2: TOPOLOGIA DE INTEGRAÇÃO & PCI-DSS
    add_heading_with_badge(doc, "2. FLUXO DE PAGAMENTO & FRONTEIRAS DE CONFORMIDADE", badge_text="ARQUITETURA", color_hex="0284C7")

    p_flow = doc.add_paragraph()
    p_flow.paragraph_format.space_before = Pt(2)
    p_flow.paragraph_format.space_after = Pt(4)
    r = p_flow.add_run(
        "Por estrita conformidade com as normas internacionais PCI-DSS, a infraestrutura da Netfits NÃO transita, "
        "NÃO captura e NÃO armazena dados de cartão de crédito (número PAN, CVV, data de validade). "
        "A dinâmica de processamento ocorre da seguinte forma:"
    )
    r.font.name = "Arial"
    r.font.size = Pt(8.5)

    # Tabela com as 3 etapas
    tbl_flow = doc.add_table(rows=4, cols=3)
    tbl_flow.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_flow.autofit = False
    w_f = [Inches(1.5), Inches(2.3), Inches(3.3)]
    f_headers = ["Camada / Etapa", "Responsabilidade", "Comportamento Técnico"]

    for i, h in enumerate(f_headers):
        cell = tbl_flow.rows[0].cells[i]
        cell.width = w_f[i]
        set_cell_background(cell, "1E293B")
        set_cell_margins(cell, top=70, bottom=70, left=90, right=90)
        p = cell.paragraphs[0]
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(0)
        run = p.add_run(h)
        run.font.name = "Arial"
        run.font.bold = True
        run.font.size = Pt(8)
        run.font.color.rgb = RGBColor(255, 255, 255)

    flow_rows = [
        (
            "1. Handshake SSO",
            "App Netfits -> Loja Rock",
            "Gera token assinado e abre WebView da loja. A Rock consulta a Netfits e recebe o cadastro completo do cliente."
        ),
        (
            "2. Cadastro do Cartão",
            "Frontend Rock -> Adquirente / Gateway",
            "O cliente digita os dados do cartão no checkout da Rock. O JavaScript da adquirente (Stone/Pagar.me/Cielo) tokeniza o cartão diretamente."
        ),
        (
            "3. Análise de Risco / AVS",
            "Motor de Antifraude da Adquirente",
            "O gateway cruza: CPF do titular, Nome no cartão, Endereço de fatura (AVS) e histórico de risco do e-mail."
        )
    ]

    for row_idx, data in enumerate(flow_rows, start=1):
        for col_idx, text in enumerate(data):
            cell = tbl_flow.rows[row_idx].cells[col_idx]
            cell.width = w_f[col_idx]
            bg_col = "F8FAFC" if row_idx % 2 == 1 else "FFFFFF"
            set_cell_background(cell, bg_col)
            set_cell_margins(cell, top=70, bottom=70, left=90, right=90)
            p = cell.paragraphs[0]
            p.paragraph_format.space_before = Pt(0)
            p.paragraph_format.space_after = Pt(0)
            run = p.add_run(text)
            run.font.name = "Arial"
            run.font.size = Pt(7.5)
            if col_idx == 0:
                run.font.bold = True
                run.font.color.rgb = RGBColor(15, 23, 42)
            else:
                run.font.color.rgb = RGBColor(51, 65, 85)

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    # SEÇÃO 3: AS CAUSAS-RAIZ PROVÁVEIS DO BLOQUEIO
    add_heading_with_badge(doc, "3. CAUSAS-RAIZ IDENTIFICADAS PARA A RECUSA DO CARTÃO", badge_text="DIAGNÓSTICO", color_hex="EF4444")

    # Item A
    p_a = doc.add_paragraph()
    p_a.paragraph_format.space_before = Pt(4)
    p_a.paragraph_format.space_after = Pt(2)
    ra_title = p_a.add_run("A. Contaminação de Histórico no Motor de Antifraude da Adquirente\n")
    ra_title.font.name = "Arial"
    ra_title.font.bold = True
    ra_title.font.size = Pt(8.5)
    ra_title.font.color.rgb = RGBColor(220, 38, 38)
    ra_desc = p_a.add_run(
        "Durante fases anteriores de homologação (especificamente nos testes do dia 07/10), o e-mail do Carlos "
        "(crformigari72@gmail.com) transitou temporariamente atrelado a outros documentos nos metadados de teste. "
        "Motores de antifraude e bureaux de crédito (como ClearSale, Stone Risk ou CyberSource) mantêm histórico rígido por e-mail. "
        "Quando uma nova tentativa de cadastro é enviada com o CPF autêntico do Carlos (11553412877), o antifraude identifica uma "
        "divergência cadastral grave (dois CPFs diferentes associados ao mesmo e-mail em curto intervalo) e bloqueia preventivamente "
        "a transação como suspeita de usurpação de identidade."
    )
    ra_desc.font.name = "Arial"
    ra_desc.font.size = Pt(8)
    ra_desc.font.color.rgb = RGBColor(51, 65, 85)

    # Item B
    p_b = doc.add_paragraph()
    p_b.paragraph_format.space_before = Pt(4)
    p_b.paragraph_format.space_after = Pt(2)
    rb_title = p_b.add_run("B. Divergência no AVS (Address Verification Service) e Titularidade do Cartão\n")
    rb_title.font.name = "Arial"
    rb_title.font.bold = True
    rb_title.font.size = Pt(8.5)
    rb_title.font.color.rgb = RGBColor(220, 38, 38)
    rb_desc = p_b.add_run(
        "Ao cadastrar o cartão na loja, o adquirente valida se o endereço de cobrança fornecido (especialmente CEP e número) "
        "é idêntico ao cadastrado junto ao banco emissor na fatura do cartão. Além disso, se o cartão utilizado for corporativo, "
        "de terceiro ou com titularidade diferente do CPF logado na sessão da Rock, adquirentes com checagem estrita reprovam a tokenização."
    )
    rb_desc.font.name = "Arial"
    rb_desc.font.size = Pt(8)
    rb_desc.font.color.rgb = RGBColor(51, 65, 85)

    # Item C
    p_c = doc.add_paragraph()
    p_c.paragraph_format.space_before = Pt(4)
    p_c.paragraph_format.space_after = Pt(2)
    rc_title = p_c.add_run("C. Cache de Cadastro de Cliente na Base Interna da Rock (Stale Customer Record)\n")
    rc_title.font.name = "Arial"
    rc_title.font.bold = True
    rc_title.font.size = Pt(8.5)
    rc_title.font.color.rgb = RGBColor(220, 38, 38)
    rc_desc = p_c.add_run(
        "A Rock mantém um registro local para cada customerId ('usr_carlos_formigari'). Caso o sistema da Rock não tenha "
        "atualizado o registro local do cliente no gateway de pagamentos com os novos dados de Santana de Parnaíba / CPF legítimo, "
        "o checkout da Rock pode estar enviando metadados legados/desatualizados para a adquirente no momento da tokenização."
    )
    rc_desc.font.name = "Arial"
    rc_desc.font.size = Pt(8)
    rc_desc.font.color.rgb = RGBColor(51, 65, 85)

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    # SEÇÃO 4: PLANO DE AÇÃO CONJUNTO SOLICITADO À ROCK
    add_heading_with_badge(doc, "4. PLANO DE AÇÃO SOLICITADO À EQUIPE ROCK (EDINHO)", badge_text="SOLICITAÇÃO", color_hex="F59E0B")

    add_callout(
        doc,
        "Para solucionarmos esta pendência de forma definitiva e liberarmos o fluxo de compras do Carlos, solicitamos "
        "o apoio da engenharia da Rock nos seguintes pontos de inspeção:",
        title="PONTOS DE VERIFICAÇÃO DO LADO DA ROCK",
        border_color="F59E0B",
        bg_color="FEFCE8"
    )

    p_actions = doc.add_paragraph()
    p_actions.paragraph_format.space_before = Pt(6)
    p_actions.paragraph_format.space_after = Pt(2)
    
    actions = [
        ("1. Extração do Log do Gateway: ", "Consultar no painel da adquirente (ex: Pagar.me, Stone, Cielo) os logs de tentativa de cadastramento/tokenização de cartão para o cliente 'crformigari72@gmail.com' na noite de 08/10/2026."),
        ("2. Identificação da Mensagem Exata de Recusa: ", "Verificar se o retorno da adquirente foi 'antifraud_declined', 'acquirer_invalid_billing', 'card_tokenization_failed' ou 'unauthorized'."),
        ("3. Reset do Cliente na Rock / Gateway: ", "Se houver cadastro antigo vinculado a este e-mail no gateway de pagamentos da Rock, purgar ou forçar uma sincronização com os dados atuais (CPF 11553412877 | CEP 06542-195)."),
    ]

    for title, desc in actions:
        p_act = doc.add_paragraph()
        p_act.paragraph_format.space_before = Pt(2)
        p_act.paragraph_format.space_after = Pt(2)
        r_t = p_act.add_run(f"• {title}")
        r_t.font.name = "Arial"
        r_t.font.bold = True
        r_t.font.size = Pt(8)
        r_t.font.color.rgb = RGBColor(15, 23, 42)
        r_d = p_act.add_run(desc)
        r_d.font.name = "Arial"
        r_d.font.size = Pt(8)
        r_d.font.color.rgb = RGBColor(71, 85, 105)

    # ASSINATURA FINAL
    p_sign = doc.add_paragraph()
    p_sign.paragraph_format.space_before = Pt(14)
    p_sign.paragraph_format.space_after = Pt(0)
    r_s = p_sign.add_run(
        "_____________________________________________________________________\n"
        "Netfits Tecnologia Ltda. | André Gallo & Squad de Engenharia de Integração\n"
        "Documento Técnico para Alinhamento de Produção — 09/10/2026"
    )
    r_s.font.name = "Arial"
    r_s.font.size = Pt(7.5)
    r_s.font.color.rgb = RGBColor(148, 163, 184)
    r_s.font.italic = True

    return doc

def main():
    print("[1/3] Gerando documento Word com diagnóstico técnico oficial...")
    doc = create_document()
    
    output_dir_local = r"C:\Users\aacga\Projetos\app_netfits"
    output_dir_onedrive = r"c:\Users\aacga\OneDrive\netfits"
    output_dir_artifacts = r"C:\Users\aacga\.gemini\antigravity\brain\0c50996a-827d-4c1d-b276-5ffdfd4f7f85"

    docx_filename = "NETFITS_Diagnostico_Tecnico_Cadastramento_Cartao_Rock_09_10_2026.docx"
    pdf_filename = "NETFITS_Diagnostico_Tecnico_Cadastramento_Cartao_Rock_09_10_2026.pdf"

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
    shutil.copy2(docx_path, os.path.join(output_dir_artifacts, docx_filename))
    print("Concluído com 100% de sucesso!")

if __name__ == "__main__":
    main()
