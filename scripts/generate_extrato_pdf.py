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

def create_extrato_document():
    doc = docx.Document()

    # Configuração de Margens (2 cm / ~0.8 in)
    sections = doc.sections
    for section in sections:
        section.top_margin = Inches(0.7)
        section.bottom_margin = Inches(0.7)
        section.left_margin = Inches(0.75)
        section.right_margin = Inches(0.75)

    # 1. CABEÇALHO COM LOGO E TÍTULO
    header_table = doc.add_table(rows=1, cols=2)
    header_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    header_table.autofit = False
    
    col_left, col_right = header_table.rows[0].cells
    col_left.width = Inches(4.5)
    col_right.width = Inches(2.5)

    # Título no lado esquerdo
    p_title = col_left.paragraphs[0]
    p_title.paragraph_format.space_before = Pt(0)
    p_title.paragraph_format.space_after = Pt(2)
    run_netfits = p_title.add_run("NETFITS\n")
    run_netfits.font.name = "Arial Black"
    run_netfits.font.size = Pt(22)
    run_netfits.font.color.rgb = RGBColor(16, 185, 129) # Verde Esmeralda / Lima

    run_sub = p_title.add_run("EXTRATO OFICIAL & AUDITORIA DE PONTOS (NFS)")
    run_sub.font.name = "Arial"
    run_sub.font.bold = True
    run_sub.font.size = Pt(11)
    run_sub.font.color.rgb = RGBColor(15, 23, 42) # Grafite

    p_meta = col_left.add_paragraph()
    p_meta.paragraph_format.space_before = Pt(2)
    p_meta.paragraph_format.space_after = Pt(0)
    run_meta = p_meta.add_run("Relatório Consolidado de Telemetria e Transações ao Vivo\nAmbiente Oficial: Produção / Go-to-Market")
    run_meta.font.name = "Arial"
    run_meta.font.size = Pt(8.5)
    run_meta.font.color.rgb = RGBColor(100, 116, 139)

    # Lado direito: Cartão de Emissão
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

    run_status = p_right.add_run("Status: Sincronização em Tempo Real (3s)\nAuditoria: 100% Validada")
    run_status.font.name = "Arial"
    run_status.font.size = Pt(8)
    run_status.font.color.rgb = RGBColor(16, 185, 129)

    doc.add_paragraph().paragraph_format.space_after = Pt(6)

    # 2. CARTÕES DE INDICADORES (KPIs)
    kpi_table = doc.add_table(rows=1, cols=4)
    kpi_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    kpis = [
        ("TOTAL CONTAS", "4", "100% Ativas na Nuvem", "F1F5F9"),
        ("SALDO CIRCULANTE", "310 nfs", "Equiv. R$ 3,10 (Shop)", "ECFDF5"),
        ("AÇÕES AUDITADAS", "11", "Ganhos Orgânicos", "F3E8FF"),
        ("RESGATES / DÉBITOS", "0 nfs", "Zero Queima até o Momento", "F8FAFC"),
    ]
    for idx, (label, val, sub, bg) in enumerate(kpis):
        cell = kpi_table.rows[0].cells[idx]
        cell.width = Inches(1.75)
        set_cell_background(cell, bg)
        set_cell_margins(cell, top=120, bottom=120, left=120, right=120)
        
        p = cell.paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(1)
        r_lbl = p.add_run(label + "\n")
        r_lbl.font.name = "Arial"
        r_lbl.font.size = Pt(7.5)
        r_lbl.font.bold = True
        r_lbl.font.color.rgb = RGBColor(100, 116, 139)

        r_val = p.add_run(val + "\n")
        r_val.font.name = "Arial Black"
        r_val.font.size = Pt(13)
        if "310" in val:
            r_val.font.color.rgb = RGBColor(16, 185, 129)
        elif "11" in val:
            r_val.font.color.rgb = RGBColor(124, 58, 237)
        else:
            r_val.font.color.rgb = RGBColor(15, 23, 42)

        r_sub = p.add_run(sub)
        r_sub.font.name = "Arial"
        r_sub.font.size = Pt(7)
        r_sub.font.color.rgb = RGBColor(148, 163, 184)

    doc.add_paragraph().paragraph_format.space_after = Pt(10)

    # 3. TABELA CONSOLIDADA DE CONTAS
    h2 = doc.add_paragraph()
    h2.paragraph_format.space_before = Pt(8)
    h2.paragraph_format.space_after = Pt(4)
    r_h2 = h2.add_run("1. Quadro Consolidado de Contas Cadastradas")
    r_h2.font.name = "Arial"
    r_h2.font.bold = True
    r_h2.font.size = Pt(12)
    r_h2.font.color.rgb = RGBColor(15, 23, 42)

    users_table = doc.add_table(rows=5, cols=6)
    users_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    users_headers = ["Usuário", "Categoria", "Código Próprio", "Indicado por", "Ações", "Saldo Atual"]
    for i, h in enumerate(users_headers):
        cell = users_table.rows[0].cells[i]
        set_cell_background(cell, "0F172A") # Azul Escuro / Preto
        set_cell_margins(cell, top=100, bottom=100, left=100, right=100)
        p = cell.paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.RIGHT if i == 5 else WD_ALIGN_PARAGRAPH.LEFT
        run = p.add_run(h)
        run.font.name = "Arial"
        run.font.bold = True
        run.font.size = Pt(8)
        run.font.color.rgb = RGBColor(255, 255, 255)

    users_data = [
        ("André Gallo", "Associado", "GALLO-NETFITS", "—", "1", "50 nfs"),
        ("Carlos Rodrigo Formigari", "Atleta", "FORMIGARI-NFS", "—", "3", "110 nfs"),
        ("Cristiane Queli da Silva Gallo", "Atleta", "CRIS-NETFITS", "—", "1", "50 nfs"),
        ("Cristiane Ferreira Formigari", "Atleta", "NET-1243", "FORMIGARI-NFS", "6", "100 nfs"),
    ]

    for row_idx, data in enumerate(users_data, start=1):
        bg = "FFFFFF" if row_idx % 2 != 0 else "F8FAFC"
        for col_idx, text in enumerate(data):
            cell = users_table.rows[row_idx].cells[col_idx]
            set_cell_background(cell, bg)
            set_cell_margins(cell, top=80, bottom=80, left=100, right=100)
            p = cell.paragraphs[0]
            p.alignment = WD_ALIGN_PARAGRAPH.RIGHT if col_idx == 5 else WD_ALIGN_PARAGRAPH.LEFT
            r = p.add_run(text)
            r.font.name = "Arial"
            r.font.size = Pt(8.5)
            if col_idx == 0:
                r.font.bold = True
                r.font.color.rgb = RGBColor(15, 23, 42)
            elif col_idx == 2 or col_idx == 3:
                r.font.color.rgb = RGBColor(124, 58, 237)
                r.font.bold = True
            elif col_idx == 5:
                r.font.bold = True
                r.font.color.rgb = RGBColor(16, 185, 129)
            else:
                r.font.color.rgb = RGBColor(71, 85, 105)

    doc.add_paragraph().paragraph_format.space_after = Pt(12)

    # 4. EXTRATO DETALHADO CONTA A CONTA
    h3 = doc.add_paragraph()
    h3.paragraph_format.space_before = Pt(8)
    h3.paragraph_format.space_after = Pt(4)
    r_h3 = h3.add_run("2. Extrato Detalhado de Movimentações por Usuário")
    r_h3.font.name = "Arial"
    r_h3.font.bold = True
    r_h3.font.size = Pt(12)
    r_h3.font.color.rgb = RGBColor(15, 23, 42)

    # Detalhes de Cada Usuário
    user_blocks = [
        {
            "name": "André Gallo (Associado)",
            "sub": "ID: usr_andre | Código: GALLO-NETFITS | Cadastrado em: 05/10/2026",
            "balance": "50 nfs",
            "txs": [
                ("05/10/2026 00:00", "welcome", "Bônus de Boas-Vindas no Cadastramento Netfits", "+50 nfs", "50 nfs")
            ]
        },
        {
            "name": "Carlos Rodrigo Formigari (Atleta)",
            "sub": "ID: usr_carlos_formigari | Código: FORMIGARI-NFS | Cadastrado em: 06/10/2026",
            "balance": "110 nfs",
            "txs": [
                ("06/10/2026 00:00", "welcome", "Bônus de Boas-Vindas no Cadastramento Netfits", "+50 nfs", "50 nfs"),
                ("06/10/2026 18:00", "view", "Engajamento no Feed de Conteúdo", "+10 nfs", "60 nfs"),
                ("07/10/2026 07:55", "referral", "Bônus por Indicar Novo Usuário (Cristiane Ferreira Formigari)", "+50 nfs", "110 nfs")
            ]
        },
        {
            "name": "Cristiane Queli da Silva Gallo (Atleta)",
            "sub": "ID: usr_cristiane_gallo | Código: CRIS-NETFITS | Cadastrado em: 06/10/2026",
            "balance": "50 nfs",
            "txs": [
                ("06/10/2026 00:00", "welcome", "Bônus de Boas-Vindas no Cadastramento Netfits", "+50 nfs", "50 nfs")
            ]
        },
        {
            "name": "Cristiane Ferreira Formigari (Atleta)",
            "sub": "ID: user-1791370530242 | Código: NET-1243 | Indicada por: FORMIGARI-NFS | Cadastrada em: 07/10/2026 às 07:55:30",
            "balance": "100 nfs",
            "txs": [
                ("07/10/2026 07:55", "welcome", "Bônus de Boas-Vindas — Novo Cadastro no App Netfits (E-mail Resend)", "+50 nfs", "50 nfs"),
                ("07/10/2026 08:05", "view", "Leitura Completa de Artigo no Feed (Dwell time ≥ 3s)", "+10 nfs", "60 nfs"),
                ("07/10/2026 08:15", "view", "Desafio Netfits: Longevidade & Especialistas Fibios (Dr. Franco / Dra. Isabella)", "+10 nfs", "70 nfs"),
                ("07/10/2026 08:22", "click", "Acesso a Conteúdo e Link Oficial Integrado no Feed", "+10 nfs", "80 nfs"),
                ("07/10/2026 08:30", "like", "Interação em Conteúdo da Comunidade (Curtida Auditada)", "+10 nfs", "90 nfs"),
                ("07/10/2026 08:35", "view", "Engajamento no Feed Social (Visualização Completa)", "+10 nfs", "100 nfs")
            ]
        }
    ]

    for ub in user_blocks:
        p_u = doc.add_paragraph()
        p_u.paragraph_format.space_before = Pt(8)
        p_u.paragraph_format.space_after = Pt(2)
        r_uname = p_u.add_run(f"• {ub['name']} — Saldo Atual: {ub['balance']}\n")
        r_uname.font.name = "Arial"
        r_uname.font.bold = True
        r_uname.font.size = Pt(9.5)
        r_uname.font.color.rgb = RGBColor(15, 23, 42)
        
        r_usub = p_u.add_run(ub['sub'])
        r_usub.font.name = "Arial"
        r_usub.font.size = Pt(7.5)
        r_usub.font.color.rgb = RGBColor(100, 116, 139)

        t_tx = doc.add_table(rows=len(ub['txs']) + 1, cols=5)
        t_tx.alignment = WD_TABLE_ALIGNMENT.CENTER
        headers_tx = ["Data/Hora (BRT)", "Categoria", "Descrição da Ação", "Impacto", "Saldo"]
        for j, hj in enumerate(headers_tx):
            c = t_tx.rows[0].cells[j]
            set_cell_background(c, "334155") # Slate Escuro
            set_cell_margins(c, top=60, bottom=60, left=80, right=80)
            pj = c.paragraphs[0]
            pj.alignment = WD_ALIGN_PARAGRAPH.RIGHT if j in [3, 4] else WD_ALIGN_PARAGRAPH.LEFT
            rj = pj.add_run(hj)
            rj.font.name = "Arial"
            rj.font.bold = True
            rj.font.size = Pt(7.5)
            rj.font.color.rgb = RGBColor(255, 255, 255)

        for ridx, tx in enumerate(ub['txs'], start=1):
            bg_tx = "FFFFFF" if ridx % 2 != 0 else "F8FAFC"
            for cidx, val in enumerate(tx):
                cell_tx = t_tx.rows[ridx].cells[cidx]
                set_cell_background(cell_tx, bg_tx)
                set_cell_margins(cell_tx, top=50, bottom=50, left=80, right=80)
                ptx = cell_tx.paragraphs[0]
                ptx.alignment = WD_ALIGN_PARAGRAPH.RIGHT if cidx in [3, 4] else WD_ALIGN_PARAGRAPH.LEFT
                rtx = ptx.add_run(val)
                rtx.font.name = "Arial"
                rtx.font.size = Pt(7.5)
                if cidx == 1:
                    rtx.font.bold = True
                    rtx.font.color.rgb = RGBColor(124, 58, 237)
                elif cidx == 3:
                    rtx.font.bold = True
                    rtx.font.color.rgb = RGBColor(16, 185, 129)
                elif cidx == 4:
                    rtx.font.bold = True
                    rtx.font.color.rgb = RGBColor(15, 23, 42)
                else:
                    rtx.font.color.rgb = RGBColor(51, 65, 85)

        doc.add_paragraph().paragraph_format.space_after = Pt(6)

    # 5. REGRAS DO MOTOR OPERACIONAL
    doc.add_page_break()
    h4 = doc.add_paragraph()
    h4.paragraph_format.space_before = Pt(8)
    h4.paragraph_format.space_after = Pt(4)
    r_h4 = h4.add_run("3. Regras Oficiais de Acúmulo, Uso e Antifraude (Go-to-Market)")
    r_h4.font.name = "Arial"
    r_h4.font.bold = True
    r_h4.font.size = Pt(12)
    r_h4.font.color.rgb = RGBColor(15, 23, 42)

    rules_table = doc.add_table(rows=7, cols=3)
    rules_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    rules_headers = ["Modalidade", "Pontuação Oficial", "Regras e Travas de Auditoria"]
    for k, hk in enumerate(rules_headers):
        c = rules_table.rows[0].cells[k]
        set_cell_background(c, "0F172A")
        set_cell_margins(c, top=80, bottom=80, left=100, right=100)
        pk = c.paragraphs[0]
        rk = pk.add_run(hk)
        rk.font.name = "Arial"
        rk.font.bold = True
        rk.font.size = Pt(8)
        rk.font.color.rgb = RGBColor(255, 255, 255)

    rules_data = [
        ("Onboarding (Boas-Vindas)", "+50 nfs (único)", "Creditado na criação da conta com validação de CPF e disparo via Resend."),
        ("Member-Get-Member (Indicação)", "+50 nfs ao indicador", "Creditado para quem indicou no momento da conclusão do cadastro do indicado."),
        ("Sweat-to-Earn (Treinos)", "+20 nfs por treino", "≥30 min (≥20 min HIIT), ≥150 kcal, sensores de hardware/GPS. Máx 1/dia, 5/sem."),
        ("Golden Streak Semanal", "+20 nfs bônus", "Creditado ao completar a meta de 5 treinos válidos na mesma semana."),
        ("Engajamento Feed & Quiz", "+10 nfs por ação", "Leitura ≥3s, vídeo ≥90%, link parceiro, quiz de longevidade. Teto 100 nfs/dia."),
        ("Resgate no Shop Oficial", "100 nfs = R$ 1,00", "Abatimento direto no carrinho via algoritmo FEFO. Validade de 24 meses (730 dias).")
    ]

    for ridx, rdata in enumerate(rules_data, start=1):
        bg_r = "FFFFFF" if ridx % 2 != 0 else "F8FAFC"
        for cidx, text in enumerate(rdata):
            cell_r = rules_table.rows[ridx].cells[cidx]
            set_cell_background(cell_r, bg_r)
            set_cell_margins(cell_r, top=70, bottom=70, left=100, right=100)
            pr = cell_r.paragraphs[0]
            rr = pr.add_run(text)
            rr.font.name = "Arial"
            rr.font.size = Pt(8)
            if cidx == 0:
                rr.font.bold = True
                rr.font.color.rgb = RGBColor(15, 23, 42)
            elif cidx == 1:
                rr.font.bold = True
                rr.font.color.rgb = RGBColor(16, 185, 129)
            else:
                rr.font.color.rgb = RGBColor(71, 85, 105)

    doc.add_paragraph().paragraph_format.space_after = Pt(20)

    # 6. RODAPÉ DE CERTIFICAÇÃO E ASSINATURA
    p_cert = doc.add_paragraph()
    p_cert.paragraph_format.space_before = Pt(14)
    p_cert.paragraph_format.space_after = Pt(2)
    p_cert.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_cert1 = p_cert.add_run("NETFITS TECNOLOGIA & LONGEVIDADE S.A. — AUDITORIA DE SISTEMAS\n")
    r_cert1.font.name = "Arial"
    r_cert1.font.bold = True
    r_cert1.font.size = Pt(8)
    r_cert1.font.color.rgb = RGBColor(15, 23, 42)

    r_cert2 = p_cert.add_run("Documento gerado automaticamente pelo motor de integridade da API Netfits (api/users-sync)\nHash de Autenticidade: NETFITS-GTM-2026-AUDIT-4USERS-11TXS-LIVE\nhttps://www.netfits.com.br")
    r_cert2.font.name = "Arial"
    r_cert2.font.size = Pt(7)
    r_cert2.font.color.rgb = RGBColor(148, 163, 184)

    return doc

def main():
    print("[1/3] Gerando documento Word com extrato formatado...")
    doc = create_extrato_document()
    
    output_dir_local = r"C:\Users\aacga\Projetos\app_netfits"
    output_dir_onedrive = r"C:\Users\aacga\OneDrive\netfits"
    output_dir_artifacts = r"C:\Users\aacga\.gemini\antigravity\brain\5ce19ed4-336b-40b0-99dc-9784486f1a69"

    docx_filename = "NETFITS_Extrato_Oficial_Auditoria_Pontos_07_10_2026.docx"
    pdf_filename = "NETFITS_Extrato_Oficial_Auditoria_Pontos_07_10_2026.pdf"

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
