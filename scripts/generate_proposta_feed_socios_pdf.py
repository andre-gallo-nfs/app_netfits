import os
import sys
import shutil
import subprocess
from datetime import datetime
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import parse_xml
from docx.oxml.ns import nsdecls

def set_cell_background(cell, hex_color):
    shading_elm = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{hex_color}"/>')
    cell._tc.get_or_add_tcPr().append(shading_elm)

def set_cell_margins(cell, top=120, bottom=120, left=160, right=160):
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
    run_badge.font.size = Pt(10)
    run_badge.font.color.rgb = RGBColor.from_string(color_hex)
    
    run_text = p.add_run(text)
    run_text.font.name = "Arial Black"
    run_text.font.size = Pt(12)
    run_text.font.color.rgb = RGBColor(15, 23, 42)

def add_callout(doc, text, title="DIRETRIZ ESTRATÉGICA", bg_hex="F8FAFC", border_hex="3B82F6"):
    tbl = doc.add_table(rows=1, cols=1)
    tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl.autofit = False
    cell = tbl.rows[0].cells[0]
    cell.width = Inches(7.1)
    set_cell_background(cell, bg_hex)
    set_cell_margins(cell, top=140, bottom=140, left=180, right=180)
    
    borders = parse_xml(
        f'<w:tcBorders {nsdecls("w")}>'
        f'<w:top w:val="none"/>'
        f'<w:left w:val="single" w:sz="24" w:space="0" w:color="{border_hex}"/>'
        f'<w:bottom w:val="none"/>'
        f'<w:right w:val="none"/>'
        f'</w:tcBorders>'
    )
    cell._tc.get_or_add_tcPr().append(borders)
    
    p = cell.paragraphs[0]
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(2)
    
    r_title = p.add_run(f"• {title}: ")
    r_title.font.name = "Arial"
    r_title.font.bold = True
    r_title.font.size = Pt(9.5)
    r_title.font.color.rgb = RGBColor.from_string(border_hex)
    
    r_body = p.add_run(text)
    r_body.font.name = "Arial"
    r_body.font.size = Pt(9.5)
    r_body.font.color.rgb = RGBColor(51, 65, 85)

def create_document():
    doc = docx.Document()

    for section in doc.sections:
        section.top_margin = Inches(0.6)
        section.bottom_margin = Inches(0.6)
        section.left_margin = Inches(0.7)
        section.right_margin = Inches(0.7)

    # 1. Header Institucional
    header_table = doc.add_table(rows=1, cols=2)
    header_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    header_table.autofit = False
    
    col_left, col_right = header_table.rows[0].cells
    col_left.width = Inches(4.8)
    col_right.width = Inches(2.3)

    p_title = col_left.paragraphs[0]
    p_title.paragraph_format.space_before = Pt(0)
    p_title.paragraph_format.space_after = Pt(2)
    run_netfits = p_title.add_run("NETFITS PLATAFORMA DIGITAL S.A.\n")
    run_netfits.font.name = "Arial Black"
    run_netfits.font.size = Pt(17)
    run_netfits.font.color.rgb = RGBColor(147, 51, 234) # Roxo Netfits Brand

    run_sub = p_title.add_run("Proposta Executiva para os Sócios-Fundadores & Conselho")
    run_sub.font.name = "Arial"
    run_sub.font.size = Pt(10)
    run_sub.font.bold = True
    run_sub.font.color.rgb = RGBColor(100, 116, 139)

    p_meta = col_right.paragraphs[0]
    p_meta.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_meta.paragraph_format.space_before = Pt(0)
    p_meta.paragraph_format.space_after = Pt(2)
    r_meta = p_meta.add_run(
        "DOC REF: NFS-DIR-2026-004\n"
        "DATA: 09/10/2026\n"
        "VERSÃO: 1.0 EXECUTIVA\n"
        "STATUS: PROPOSTA SÓCIOS"
    )
    r_meta.font.name = "Courier New"
    r_meta.font.size = Pt(8.5)
    r_meta.font.color.rgb = RGBColor(71, 85, 105)

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    # Título Principal
    p_doc_title = doc.add_paragraph()
    p_doc_title.paragraph_format.space_before = Pt(6)
    p_doc_title.paragraph_format.space_after = Pt(4)
    run_main_title = p_doc_title.add_run("ARQUITETURA DO FEED DE CONTEÚDO: AUTORIDADE MÉDICA FIBIOS, PROPÓSITO DE LONGEVIDADE E ENGAJAMENTO DIÁRIO (DAU)")
    run_main_title.font.name = "Arial Black"
    run_main_title.font.size = Pt(13.5)
    run_main_title.font.color.rgb = RGBColor(15, 23, 42)

    # Subtítulo Executivo
    p_doc_sub = doc.add_paragraph()
    p_doc_sub.paragraph_format.space_before = Pt(0)
    p_doc_sub.paragraph_format.space_after = Pt(8)
    run_main_sub = p_doc_sub.add_run(
        "Proposta de esteira de engajamento diário baseada em Feed Único no aplicativo, alimentado por 2 Studios de Criação "
        "independentes nos bastidores, protocolo de zero fricção para a Fibios (Dr. Franco e Dra. Isabella) e congelamento tático de Retail Media."
    )
    run_main_sub.font.name = "Arial"
    run_main_sub.font.size = Pt(9.5)
    run_main_sub.font.italic = True
    run_main_sub.font.color.rgb = RGBColor(71, 85, 105)

    add_callout(
        doc,
        "O Feed no aplicativo do atleta é ÚNICO, FLUIDO e INTEGRADO. O que opera de forma segregada são os dois Studios de Criação "
        "nos bastidores: o Studio 1 (Fibios - Medicina do Esporte e Longevidade) e o Studio 2 (Netfits - Propósito, Bem-Estar e Plataforma). "
        "As ofertas de produtos e o Shop estão explicitamente pausados nesta fase inicial para priorizar 100% a autoridade médica e a retenção orgânica dos atletas.",
        title="TESE CENTRAL DA PROPOSTA",
        bg_hex="FAF5FF",
        border_hex="9333EA"
    )

    # SEÇÃO 1
    add_heading_with_badge(doc, "1. CONTEXTO ESTRATÉGICO & O DESAFIO DO ENGAJAMENTO DIÁRIO", "CONTEXTO", "2563EB")
    
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(5)
    p.add_run(
        "A retenção e o valor de mercado de qualquer ecossistema esportivo moderno dependem diretamente do indicador de "
        "Usuários Ativos Diários (Daily Active Users - DAU). O atleta precisa ter um motivo autêntico e de alto valor para abrir o aplicativo "
        "do Netfits todas as manhãs, mesmo nos dias de descanso ou recuperação."
    )
    
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(6)
    p.add_run(
        "Identificamos, contudo, dois desafios estruturais que precisam ser superados:\n"
        "1. Desafio de Tempo dos Médicos Parceiros: O Dr. Franco Merici e a Dra. Isabella Formigari possuem rotinas pesadas de consultório, "
        "cirurgias e procedimentos ambulatoriais. Qualquer modelo que dependa de eles redigirem artigos semanais falhará por falta de tempo.\n"
        "2. Ruído Comercial Precoce: Tentar vender produtos de e-commerce e suplementos (Retail Media/Shop) antes de construir autoridade médica "
        "e educar o usuário sobre o valor da moeda nfs degrada a percepção de valor da marca Netfits, transformando um ecossistema de longevidade em um catálogo de vendas comum."
    )

    # SEÇÃO 2
    add_heading_with_badge(doc, "2. A SOLUÇÃO: FEED ÚNICO NO APP COM 2 STUDIOS DE CRIAÇÃO NOS BASTIDORES", "ARQUITETURA", "10B981")

    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(6)
    p.add_run(
        "A arquitetura proposta desenha uma separação cirúrgica entre a Experiência do Usuário (Front-End) e os Motores de Produção (Backstage):"
    )

    tbl_amb = doc.add_table(rows=6, cols=3)
    tbl_amb.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_amb.autofit = False

    headers = ["Dimensão de Negócio", "🩺 Studio 1: Criador Fibios", "🌟 Studio 2: Propósito & Netfits"]
    widths = [Inches(1.8), Inches(2.6), Inches(2.7)]

    hdr_row = tbl_amb.rows[0]
    for i, title in enumerate(headers):
        cell = hdr_row.cells[i]
        cell.width = widths[i]
        set_cell_background(cell, "1E293B")
        set_cell_margins(cell, top=100, bottom=100, left=120, right=120)
        p = cell.paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        run = p.add_run(title)
        run.font.name = "Arial"
        run.font.bold = True
        run.font.size = Pt(8.5)
        run.font.color.rgb = RGBColor(255, 255, 255)

    data = [
        ("Responsáveis Humanos", "Dr. Franco Merici & Dra. Isabella Formigari", "André Gallo & Time de Produto Netfits"),
        ("Foco Editorial", "Medicina do esporte, ortopedia, fisiologia, sono, biomarcadores e longevidade ativa.", "Manifesto de longevidade, consistência sem burnout, o valor do suor e uso do app."),
        ("Insumos de Entrada", "2 a 3 áudios curtos de WhatsApp (1 a 2 min) gravados na sexta com dúvidas de pacientes.", "Diretrizes estratégicas, manifesto da marca e regras operacionais da plataforma."),
        ("Tempo Exigido do Médico", "Máximo de 15 minutos por semana (gravação e aprovação em 60s via WhatsApp).", "Governança editorial e alinhamento estratégico."),
        ("Experiência no Feed", "Post de autoridade clínica com CRM, Dwell Time auditado e Quiz médico de +10 nfs.", "Reflexões de propósito, guias didáticos de sincronia de relógios e Quiz de +10 nfs.")
    ]

    for row_idx, (col1, col2, col3) in enumerate(data, start=1):
        row = tbl_amb.rows[row_idx]
        bg_color = "F8FAFC" if row_idx % 2 == 1 else "FFFFFF"
        for col_idx, text in enumerate([col1, col2, col3]):
            cell = row.cells[col_idx]
            cell.width = widths[col_idx]
            set_cell_background(cell, bg_color)
            set_cell_margins(cell, top=80, bottom=80, left=100, right=100)
            p = cell.paragraphs[0]
            p.paragraph_format.space_before = Pt(2)
            p.paragraph_format.space_after = Pt(2)
            run = p.add_run(text)
            run.font.name = "Arial"
            run.font.size = Pt(8.5)
            if col_idx == 0:
                run.font.bold = True
                run.font.color.rgb = RGBColor(15, 23, 42)
            else:
                run.font.color.rgb = RGBColor(51, 65, 85)

    doc.add_paragraph().paragraph_format.space_after = Pt(6)

    # SEÇÃO 3
    add_heading_with_badge(doc, "3. PROTOCOLO SEMANAL ZERO FRICÇÃO PARA A FIBIOS", "MÉDICOS", "9333EA")

    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(5)
    p.add_run(
        "Para garantir que a Dra. Isabella e o Dr. Franco participem sem sobrecarga operacional, estabelecemos o Protocolo 15 Minutos/Semana:\n"
        "• Sexta-feira até às 19h: Os médicos enviam 2 a 3 áudios no grupo de WhatsApp com dúvidas reais ouvidas nos consultórios.\n"
        "• Processamento Agêntico: A IA do Studio Fibios transcreve o material, sintetiza a fundamentação médica com base em evidências e gera os 7 cards semanais.\n"
        "• Banco de Imagens Permanente: Uma sessão única de 45 minutos de fotos no consultório gera 20 imagens neutras profissionais (com jaleco, estetoscópio e ambiente clínico), eliminando a necessidade de produzir fotos novas toda semana.\n"
        "• Aprovação em 60 segundos: O agente envia na sexta-feira à noite o PDF/preview no WhatsApp. Os médicos apenas respondem 'Aprovado' ou enviam um áudio pontual de ajuste.\n"
        "• Conformidade Ética CFM: Rigorosa observância das normas do Conselho Federal de Medicina (proibição de promessas de cura, caráter 100% educativo e inclusão mandatória de CRM)."
    )

    # Tabela Grade Semanal
    add_heading_with_badge(doc, "Grade Semanal de 7 Dias Fibios (1 Post Diário às 06h00)", "GRADE", "059669")

    tbl_grade = doc.add_table(rows=8, cols=4)
    tbl_grade.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_grade.autofit = False

    grade_hdrs = ["Dia", "Especialista", "Eixo Temático", "Foco do Desafio / Quiz (+10 nfs)"]
    grade_w = [Inches(0.9), Inches(1.5), Inches(2.2), Inches(2.5)]

    for i, title in enumerate(grade_hdrs):
        cell = tbl_grade.rows[0].cells[i]
        cell.width = grade_w[i]
        set_cell_background(cell, "047857")
        set_cell_margins(cell, top=80, bottom=80, left=100, right=100)
        p = cell.paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        run = p.add_run(title)
        run.font.name = "Arial"
        run.font.bold = True
        run.font.size = Pt(8.5)
        run.font.color.rgb = RGBColor(255, 255, 255)

    grade_data = [
        ("Segunda", "Dr. Franco", "Força & Sarcopenia", "Qual hábito preserva a autonomia e ossos na longevidade?"),
        ("Terça", "Dra. Isabella", "Biomarcadores & Sangue", "Qual exame é chave na queda de rendimento esportivo?"),
        ("Quarta", "Dr. Franco", "Coração & Zona 2", "O que o treino aeróbico leve faz com as mitocôndrias?"),
        ("Quinta", "Dra. Isabella", "Sono & Recovery", "O custo biológico de descansar menos de 6h para o músculo."),
        ("Sexta", "Dr. Franco", "Prevenção de Lesões", "Por que o tendão precisa de estímulo de carga progressiva?"),
        ("Sábado", "Dra. Isabella", "Hidratação & Eletrólitos", "Quando repor sais minerais além de apenas beber água pura?"),
        ("Domingo", "Fibios Dupla", "Masterclass Longevidade", "Qual a combinação de hábitos mais ligada ao Healthspan?")
    ]

    for row_idx, (c1, c2, c3, c4) in enumerate(grade_data, start=1):
        row = tbl_grade.rows[row_idx]
        bg = "F0FDF4" if row_idx % 2 == 1 else "FFFFFF"
        for c_idx, text in enumerate([c1, c2, c3, c4]):
            cell = row.cells[c_idx]
            cell.width = grade_w[c_idx]
            set_cell_background(cell, bg)
            set_cell_margins(cell, top=70, bottom=70, left=90, right=90)
            p = cell.paragraphs[0]
            p.paragraph_format.space_before = Pt(2)
            p.paragraph_format.space_after = Pt(2)
            run = p.add_run(text)
            run.font.name = "Arial"
            run.font.size = Pt(8.0)
            if c_idx == 0:
                run.font.bold = True

    doc.add_paragraph().paragraph_format.space_after = Pt(6)

    # SEÇÃO 4
    add_heading_with_badge(doc, "4. STUDIO DE PROPÓSITO, BEM-ESTAR & PLATAFORMA NETFITS", "PROPÓSITO", "D97706")

    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(5)
    p.add_run(
        "Enquanto a Fibios fornece a autoridade da medicina de ponta, o Studio Netfits comunica a essência da marca e a nossa "
        "filosofia de saúde integral através de três pilares inegociáveis:\n"
        "1. Healthspan > Lifespan: Ensinamos que o objetivo não é apenas adicionar anos à vida, mas adicionar vida aos anos. O treino de hoje "
        "não é uma questão de vaidade para o próximo verão, mas a garantia de poder brincar com os netos e viajar aos 80 anos com independência física e lucidez.\n"
        "2. Abordagem de Consistência sem Burnout: O Netfits combate a cultura destrutiva do esgotamento ('no pain, no gain'). O corpo floresce na constância: "
        "premiamos a meta semanal de 5 treinos regulares de 30 minutos (Meta 5/5), que é o padrão com maior evidência científica de longevidade cardiovascular.\n"
        "3. O Valor Real do Suor (Proof of Sweat): Mostramos que o ponto nfs possui lastro real em esforço biológico. Ao auditar dados de frequência cardíaca "
        "e GPS de relógios Garmin, Apple Watch, Strava e Samsung, garantimos que a moeda da comunidade seja sustentável e tenha poder real de troca em saúde."
    )

    # SEÇÃO 5
    add_heading_with_badge(doc, "5. DECISÃO TÁTICA: CONGELAMENTO TEMPORÁRIO DE RETAIL MEDIA & SHOP", "DECISÃO", "DC2626")

    add_callout(
        doc,
        "Decisão unânime de governança: o pilar de Retail Media e ofertas de marketplace do Shop está 100% PAUSADO no feed durante a fase de lançamento. "
        "O atleta precisa primeiro se apaixonar pela rotina diária de saúde e acumular saldo com seu suor. Apresentar ofertas comerciais prematuramente "
        "geraria poluição visual e descaracterizaria o posicionamento do Netfits como a plataforma definitiva de longevidade.",
        title="PAUSA ESTRATÉGICA DO SHOP",
        bg_hex="FEF2F2",
        border_hex="EF4444"
    )

    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(6)
    p.add_run(
        "Benefícios imediatos do congelamento do Shop:\n"
        "• Experiência Editorial Premium: O feed permanece limpo, fluido e inspirador, com cara de clube de longevidade e medicina avançada.\n"
        "• Foco no Loop Diário: 100% da atenção do usuário é direcionada para responder ao Quiz do dia (+10 nfs), ler o artigo clínico e registrar seu treino.\n"
        "• Valorização Futura do Shop: Quando o Shop for reativado no momento oportuno, os atletas já terão saldo substancial de nfs e entenderão com clareza o poder de compra do seu cashback."
    )

    # SEÇÃO 6
    add_heading_with_badge(doc, "6. MATRIZ DE PONTUAÇÃO & TRAVAS ANTIFRAUDE DO FEED", "SEGURANÇA", "0284C7")

    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(5)
    p.add_run(
        "Todas as interações do feed operam sob a tabela oficial unificada e estão blindadas pelo módulo central de antifraude:\n"
        "• Leitura de Artigos Clínicos / Guias: +10 nfs mediante Dwell Time auditado de no mínimo 3 segundos contínuos em tela.\n"
        "• Desafios Diários (Quizzes Fibios e Netfits): +10 nfs por resposta correta (1x por dia, com idempotência absoluta registrada no banco).\n"
        "• Vídeos dos Especialistas: +10 nfs condicionados à retenção mínima obrigatória de 90% da duração do vídeo (saída antecipada cancela a recompensa com 0 nfs).\n"
        "• Teto Diário de Segurança: Limite de no máximo 10 interações pontuáveis por dia (teto de 100 nfs/dia no feed).\n"
        "• Bloqueio de Auto-Engajamento & Rate Limit: Trava sistêmica que impede usuários de pontuarem em posts próprios e limita ações a 10 requisições por minuto contra robôs."
    )

    # SEÇÃO 7
    add_heading_with_badge(doc, "7. PLANO DE AÇÃO & PRÓXIMOS PASSOS IMEDIATOS", "ROADMAP", "4F46E5")

    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(6)
    p.add_run(
        "1. Alinhamento com a Fibios: Apresentar este documento executivo ao Dr. Franco e à Dra. Isabella, formalizando o protocolo dos áudios de sexta-feira.\n"
        "2. Sessão de Fotos Neutras: Agendar 45 minutos no consultório da Fibios para geração do banco permanente de 20 poses de jaleco e ambiente clínico.\n"
        "3. Ciclo Piloto em Homologação: Rodar a primeira semana de 7 posts em ambiente de Staging para auditoria e aprovação da Diretoria.\n"
        "4. Go-to-Market Oficial: Disponibilizar a experiência no aplicativo oficial para os atletas cadastrados."
    )

    # Assinatura
    doc.add_paragraph().paragraph_format.space_after = Pt(12)
    p_sig = doc.add_paragraph()
    p_sig.paragraph_format.space_before = Pt(16)
    p_sig.paragraph_format.keep_with_next = True
    
    r_sig = p_sig.add_run(
        "_____________________________________________________________________\n"
        "André Gallo | Fundador & Diretor Executivo (CEO)\n"
        "Netfits Plataforma Digital S.A. | Estratégia de Conteúdo & Produto 2026"
    )
    r_sig.font.name = "Arial"
    r_sig.font.bold = True
    r_sig.font.size = Pt(9.5)
    r_sig.font.color.rgb = RGBColor(15, 23, 42)

    return doc

def main():
    print("[1/3] Gerando Documento Word (.docx) da Proposta para os Sócios...")
    output_dir_local = "C:/Users/aacga/Projetos/app_netfits"
    output_dir_onedrive = "c:/Users/aacga/OneDrive/netfits"
    output_dir_artifacts = "C:/Users/aacga/.gemini/antigravity/brain/c4ce5b61-d82c-40cd-beac-fac84a0961b1"

    doc = create_document()
    
    docx_filename = "NETFITS_Proposta_Estrategica_Feed_e_Agentes_Conteudo_09_10_2026.docx"
    pdf_filename = "NETFITS_Proposta_Estrategica_Feed_e_Agentes_Conteudo_09_10_2026.pdf"

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
