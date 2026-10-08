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

def set_cell_margins(cell, top=100, bottom=100, left=140, right=140):
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
    run_text.font.size = Pt(12)
    run_text.font.color.rgb = RGBColor(15, 23, 42)

def add_callout(doc, text, title="NOTA DE GOVERNANÇA", bg_hex="F8FAFC", border_hex="3B82F6"):
    tbl = doc.add_table(rows=1, cols=1)
    tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl.autofit = False
    cell = tbl.rows[0].cells[0]
    cell.width = Inches(7.1)
    set_cell_background(cell, bg_hex)
    set_cell_margins(cell, top=120, bottom=120, left=160, right=160)
    
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
    r_title.font.size = Pt(9)
    r_title.font.color.rgb = RGBColor.from_string(border_hex)
    
    r_body = p.add_run(text)
    r_body.font.name = "Arial"
    r_body.font.size = Pt(9)
    r_body.font.color.rgb = RGBColor(51, 65, 85)

def create_document():
    doc = docx.Document()

    for section in doc.sections:
        section.top_margin = Inches(0.55)
        section.bottom_margin = Inches(0.55)
        section.left_margin = Inches(0.7)
        section.right_margin = Inches(0.7)

    # Header Table
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
    run_netfits.font.color.rgb = RGBColor(16, 185, 129)

    run_sub = p_title.add_run("Arquitetura de Dados, Dicionário Relacional & Estudo de Caso de Badges")
    run_sub.font.name = "Arial"
    run_sub.font.size = Pt(9.5)
    run_sub.font.bold = True
    run_sub.font.color.rgb = RGBColor(100, 116, 139)

    p_meta = col_right.paragraphs[0]
    p_meta.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_meta.paragraph_format.space_before = Pt(0)
    p_meta.paragraph_format.space_after = Pt(2)
    r_meta = p_meta.add_run(
        "DOC REF: NFS-DAT-2026-002\n"
        "DATA: 08/10/2026\n"
        "VERSÃO: 1.0 OFICIAL\n"
        "CLASSIFICAÇÃO: TÉCNICO & EXECUTIVO"
    )
    r_meta.font.name = "Courier New"
    r_meta.font.size = Pt(8)
    r_meta.font.color.rgb = RGBColor(71, 85, 105)

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    # Main Title
    p_doc_title = doc.add_paragraph()
    p_doc_title.paragraph_format.space_before = Pt(6)
    p_doc_title.paragraph_format.space_after = Pt(3)
    run_main_title = p_doc_title.add_run("MODELO DE DADOS CONSOLIDADO, FLUXO DE INGESTÃO & ESTUDO DE CASO PRÁTICO DE GAMIFICAÇÃO")
    run_main_title.font.name = "Arial Black"
    run_main_title.font.size = Pt(13)
    run_main_title.font.color.rgb = RGBColor(15, 23, 42)

    # Subtitle
    p_doc_sub = doc.add_paragraph()
    p_doc_sub.paragraph_format.space_before = Pt(0)
    p_doc_sub.paragraph_format.space_after = Pt(8)
    run_main_sub = p_doc_sub.add_run(
        "Documentação técnica exaustiva contemplando a modelagem relacional de entidades, chaves primárias e estrangeiras, "
        "gatilhos de novas observações e simulação ponta a ponta de compra de R$ 1.000,00 no shop e seus reflexos contábeis e de badges."
    )
    run_main_sub.font.name = "Arial"
    run_main_sub.font.size = Pt(9.5)
    run_main_sub.font.italic = True
    run_main_sub.font.color.rgb = RGBColor(71, 85, 105)

    add_callout(
        doc,
        "A estrutura de dados da Netfits foi modelada com isolamento estrito entre o Ledger Quente (latência < 5ms) "
        "e o Arquivo a Frio FinOps (> 24 meses), assegurando integridade com o CPC 30 / IFRS 15, rastreabilidade LGPD "
        "e resposta em tempo real aos webhooks da Rock Encantech.",
        title="DIRETRIZ DE ARQUITETURA DE DADOS",
        bg_hex="ECFDF5",
        border_hex="059669"
    )

    # SEÇÃO 1
    add_heading_with_badge(doc, "1. O ECOSSISTEMA DE TABELAS DO BANCO DE DADOS", "ENTIDADES", "2563EB")
    
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(4)
    p.add_run(
        "O banco de dados relacional oficial da Netfits (implementado em schema.sql e operacionalizado via server.ts) "
        "é composto por 8 entidades centrais distribuídas em camadas de serviço:"
    )

    # Tabela de Entidades
    tbl_ent = doc.add_table(rows=9, cols=4)
    tbl_ent.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_ent.autofit = False

    headers_ent = ["Entidade / Tabela", "Finalidade de Negócio", "Chave Primária (PK)", "Camada FinOps"]
    widths_ent = [Inches(1.8), Inches(2.7), Inches(1.3), Inches(1.3)]
    
    for i, h in enumerate(headers_ent):
        cell = tbl_ent.rows[0].cells[i]
        cell.width = widths_ent[i]
        set_cell_background(cell, "1E293B")
        set_cell_margins(cell, top=80, bottom=80, left=100, right=100)
        p = cell.paragraphs[0]
        r = p.add_run(h)
        r.font.name = "Arial"
        r.font.bold = True
        r.font.size = Pt(8.5)
        r.font.color.rgb = RGBColor(255, 255, 255)

    entities_data = [
        ("users", "Cadastro mestre de atletas, associados, especialistas e admins", "id (UUID)", "Hot (PostgreSQL)"),
        ("user_consent_logs", "Trilha imutável de aceite de termos e consentimento de dados (LGPD)", "id (UUID)", "Hot / Legal"),
        ("wallet_transactions", "Ledger contábil das movimentações de pontos NFS (extrato)", "id (UUID / String)", "Hot (< 5ms)"),
        ("wallet_transactions_archive", "Repositório histórico de transações com mais de 24 meses", "id (UUID)", "Cold (R2 / Glacier)"),
        ("cold_tier_runs", "Registro de governança das execuções do expurgo automático FinOps", "id (UUID)", "Hot / Logs"),
        ("persistent_orders", "Espelho permanente dos pedidos e webhooks da Rock Encantech", "_id (String Rock)", "Hot (PostgreSQL)"),
        ("system_parameters", "Dados mestres de governança operacional e financeira (Cockpit)", "id ('master_config')", "Hot (Singleton)"),
        ("system_parameters_history", "Trilha imutável de auditoria de alterações de parâmetros pelo Admin", "id (UUID)", "Hot / Governança")
    ]

    for idx, row_data in enumerate(entities_data, start=1):
        row = tbl_ent.rows[idx]
        bg = "F8FAFC" if idx % 2 == 1 else "FFFFFF"
        for c_idx, val in enumerate(row_data):
            cell = row.cells[c_idx]
            cell.width = widths_ent[c_idx]
            set_cell_background(cell, bg)
            set_cell_margins(cell, top=60, bottom=60, left=100, right=100)
            p = cell.paragraphs[0]
            r = p.add_run(val)
            r.font.name = "Arial"
            r.font.size = Pt(8)
            if c_idx == 0:
                r.font.bold = True
                r.font.color.rgb = RGBColor(15, 23, 42)
            else:
                r.font.color.rgb = RGBColor(51, 65, 85)

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    # SEÇÃO 2
    add_heading_with_badge(doc, "2. CHAVES DE LIGAÇÃO E RELACIONAMENTOS (PK & FK)", "RELACIONAMENTOS", "10B981")
    
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(4)
    p.add_run(
        "A integridade referencial do sistema gira em torno de 4 chaves mestras fundamentais que amarram todas as entidades:\n\n"
        "1. users.id (UUID) ➔ A Chave Universal do Cidadão Netfits: É a Foreign Key que conecta o usuário às tabelas "
        "'user_consent_logs' (1:N), 'wallet_transactions' (1:N), 'wallet_transactions_archive' (1:N) e 'user_badges' (1:N). "
        "A soma de 'amount_nfs' em 'wallet_transactions' amarrada a um 'user_id' resulta deterministicamente no campo 'users.wallet_balance_nfs'.\n\n"
        "2. users.referred_by_user_id ➔ Auto-Relacionamento MGM (Tribo): Campo reflexivo que aponta para o 'id' de outro usuário da tabela 'users'. "
        "Permite que o motor de fidelidade rastreie quem indicou o atleta, viabilizando o repasse de comissões aos Associados e bônus de tribo.\n\n"
        "3. persistent_orders.customer.document / email ➔ Chave Lógica Comercial: Como a Rock Encantech envia pedidos a partir de seu checkout externo, "
        "o motor de liquidação da Netfits utiliza o CPF (11 dígitos limpos) e o e-mail para localizar o 'users.id' correspondente e gravar no campo "
        "'netfitsProcessing.userMatchedId'.\n\n"
        "4. system_parameters_history.changed_by_user_id ➔ Auditoria de Governança: Identifica o usuário administrativo responsável "
        "por qualquer mutação de parâmetros econômicos ou antifraude."
    )

    # SEÇÃO 3
    add_heading_with_badge(doc, "3. CANAIS DE INGESTÃO E GATILHOS DE NOVAS OBSERVAÇÕES", "INGESTÃO", "8B5CF6")
    
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(4)
    p.add_run(
        "Cada linha nova em nosso banco possui uma causa real estrita. Abaixo discriminamos o canal de entrada e o gatilho de cada tabela:"
    )

    triggers_data = [
        ("users", "Formulário de Cadastro (/auth) ou Link de Associado", 
         "Criação de nova conta pelo atleta, preenchimento de onboarding de associado ou registro de parceiro comercial."),
        ("user_consent_logs", "Clique de Aceite dos Termos de Uso no Cadastro", 
         "Captura do endereço IP, User-Agent e carimbo de data/hora no exato momento da submissão do termo LGPD."),
        ("wallet_transactions", "Ações do Atleta (Treino, Feed) ou Webhook Rock", 
         "Conclusão de treino Sweat-to-Earn (+25 nfs), consumo de conteúdo do Feed (>3s = +5 nfs), cashback de compra no Shop (+nfs) ou resgate de pontos (-nfs)."),
        ("persistent_orders", "Webhook Externo da Rock Encantech (POST /api/orders)", 
         "A Rock Encantech notifica a realização de uma venda na loja (ex: SOP0711045469), mudança de status de pagamento ou cancelamento."),
        ("system_parameters_history", "Gravação no Cockpit Administrativo (/admin)", 
         "O André altera uma taxa, take-rate ou pontuação. O sistema congela o estado anterior (JSON), o novo estado (JSON) e a justificativa."),
        ("cold_tier_runs", "Cron Job Mensal de Otimização FinOps", 
         "Rotina que expurga do banco quente transações de pontos com mais de 24 meses, gerando log com MBs liberados e quantidade de registros transferidos.")
    ]

    tbl_trg = doc.add_table(rows=7, cols=3)
    tbl_trg.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_trg.autofit = False
    widths_trg = [Inches(1.8), Inches(2.2), Inches(3.1)]

    headers_trg = ["Tabela Afetada", "Canal de Ingestão", "O que gera uma Nova Observação (Trigger)"]
    for i, h in enumerate(headers_trg):
        cell = tbl_trg.rows[0].cells[i]
        cell.width = widths_trg[i]
        set_cell_background(cell, "1E293B")
        set_cell_margins(cell, top=80, bottom=80, left=100, right=100)
        p = cell.paragraphs[0]
        r = p.add_run(h)
        r.font.name = "Arial"
        r.font.bold = True
        r.font.size = Pt(8.5)
        r.font.color.rgb = RGBColor(255, 255, 255)

    for idx, (t, c, g) in enumerate(triggers_data, start=1):
        row = tbl_trg.rows[idx]
        bg = "F8FAFC" if idx % 2 == 1 else "FFFFFF"
        for c_idx, val in enumerate([t, c, g]):
            cell = row.cells[c_idx]
            cell.width = widths_trg[c_idx]
            set_cell_background(cell, bg)
            set_cell_margins(cell, top=60, bottom=60, left=100, right=100)
            p = cell.paragraphs[0]
            r = p.add_run(val)
            r.font.name = "Arial"
            r.font.size = Pt(8)
            if c_idx == 0:
                r.font.bold = True
                r.font.color.rgb = RGBColor(15, 23, 42)
            else:
                r.font.color.rgb = RGBColor(51, 65, 85)

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    # SEÇÃO 4
    add_heading_with_badge(doc, "4. ESTUDO DE CASO PRÁTICO: PRIMEIRA COMPRA DE R$ 1.000,00 NO SHOP", "ESTUDO DE CASO", "D97706")
    
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(4)
    p.add_run(
        "Para compreender a engenharia de dados em funcionamento, simulamos a compra realizada pelo atleta Carlos Formigari "
        "(ID: 'usr_carlos_formigari', CPF: 25664730803). Ele realiza sua 1ª compra no Netfits Shop através do catálogo da Rock Encantech, "
        "no valor de R$ 1.000,00, paga via PIX ou Cartão."
    )

    add_callout(
        doc,
        "No instante em que a Rock Encantech emite o webhook oficial HTTP POST /api/orders com status 'PAID', "
        "o motor da Netfits aciona 4 tabelas, liquida comissões, credita o cashback, atualiza o saldo e desbloqueia "
        "a badge de primeiro cashback em tempo real.",
        title="DISPARO DO EVENTO",
        bg_hex="FFFBEB",
        border_hex="F59E0B"
    )

    # 4.1 Reações em Cadeia
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(6)
    p.paragraph_format.space_after = Pt(2)
    r_sub = p.add_run("4.1 Todas as Novas Observações Geradas pela Compra de R$ 1.000,00:")
    r_sub.font.name = "Arial Black"
    r_sub.font.size = Pt(10)
    r_sub.font.color.rgb = RGBColor(15, 23, 42)

    case_observations = [
        ("1. Tabela persistent_orders (Nova Linha):", 
         "Armazena o espelho do pedido. Grava _id='SOP0711045469', status='PAID', finalPrice=1000.00, customer.document='25664730803', "
         "userMatchedId='usr_carlos_formigari', Take-Rate apurado da Netfits = R$ 60,00 (6,00%), cashbackCredited=true, "
         "pointsEarned = 4.100 NFS (4.000 da taxa base de 4 nfs/R$ + 100 nfs de bônus de 1ª compra)."),
        ("2. Tabela wallet_transactions (Nova Linha de Extrato):", 
         "Insere linha contábil com id='tx-mkp-earn-SOP0711045469', user_id='usr_carlos_formigari', title='✨ Cashback compra Mkplace Pedido #SOP0711045469', "
         "amount_nfs = +4.100, category='shop', multiplier=1.00, timestamp da liquidação."),
        ("3. Tabela users (Mutação de Linha - UPDATE):", 
         "O registro do Carlos sofre alteração: wallet_balance_nfs é incrementado em +4.100 pontos. O motor de níveis reavalia se a pontuação "
         "promove o atleta de 'Starter' para 'Pro' ou 'Prime'. O campo updated_at é atualizado."),
        ("4. Tabela wallet_transactions (Comissão de Associado MGM - Se aplicável):", 
         "Se o Carlos foi cadastrado via link de um Associado (ex: André Gallo), e o Clube estiver ativo, gera uma nova linha na carteira do associador: "
         "amount_nfs = +600 nfs (10% sobre o Take-Rate de R$ 60,00 da Netfits), category='associado_bonus'."),
        ("5. Comunicação Transacional:", 
         "Disparo imediato de e-mail de confirmação do pedido detalhando itens, valor e extrato de cashback em pontos creditados.")
    ]

    for title, desc in case_observations:
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(2)
        p.paragraph_format.space_after = Pt(2)
        r_t = p.add_run(f"{title} ")
        r_t.font.name = "Arial"
        r_t.font.bold = True
        r_t.font.size = Pt(8.5)
        r_t.font.color.rgb = RGBColor(30, 41, 59)
        r_d = p.add_run(desc)
        r_d.font.name = "Arial"
        r_d.font.size = Pt(8.5)
        r_d.font.color.rgb = RGBColor(71, 85, 105)

    # 4.2 Geração da Badge
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(8)
    p.paragraph_format.space_after = Pt(2)
    r_sub = p.add_run("4.2 Atribuição da Badge 'Primeiro Cashback' (primeira_compra):")
    r_sub.font.name = "Arial Black"
    r_sub.font.size = Pt(10)
    r_sub.font.color.rgb = RGBColor(15, 23, 42)

    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(4)
    p.add_run(
        "A compra qualifica instantaneamente o atleta para a Badge Oficial 'Primeiro Cashback':\n"
        "• Código / ID da Badge: 'primeira_compra' (Categoria: 'shop').\n"
        "• Título e Ícone: 🏷️ 'Primeiro Cashback'.\n"
        "• Descrição: 'Realizou sua primeira compra confirmada em um lojista parceiro do Netfits Shop.'\n"
        "• Recompensa Adicional: +40 NFS creditados na carteira pelo desbloqueio da conquista.\n"
        "• Progresso: Salta de 0/1 para 1/1 (100% Concluído).\n"
        "• Efeito Colateral na Badge Seguinte: A badge 'Mestre do Acúmulo' (mestre_cashback), que exige 3 compras, "
        "tem seu contador de progresso avançado de 0/3 para 1/3."
    )

    # 4.3 Onde fica armazenada
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(6)
    p.paragraph_format.space_after = Pt(2)
    r_sub = p.add_run("4.3 Onde a Informação da Badge Fica Armazenada?")
    r_sub.font.name = "Arial Black"
    r_sub.font.size = Pt(10)
    r_sub.font.color.rgb = RGBColor(15, 23, 42)

    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(4)
    p.add_run(
        "A informação reside em arquitetura bivalente sincronizada:\n"
        "1. No Banco de Dados Central (Tabela user_badges): Armazena user_id, badge_id, unlocked=true, unlocked_at (timestamp) "
        "e reward_claimed=true, garantindo governança e persistência permanente em nuvem.\n"
        "2. No Cache do Dispositivo do Atleta (LocalStorage com chave isolada): 'netfits_user_badges_v4_{user_id}'. "
        "Permite que o aplicativo nativo renderize a galeria de medalhas na aba /levels em menos de 1ms, mesmo que o atleta "
        "esteja sem conexão de dados (modo offline)."
    )

    # 4.4 Perda de Badges e Histórico
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(6)
    p.paragraph_format.space_after = Pt(2)
    r_sub = p.add_run("4.4 Ele Pode Perder a Badge no Futuro? Onde Fica o Histórico?")
    r_sub.font.name = "Arial Black"
    r_sub.font.size = Pt(10)
    r_sub.font.color.rgb = RGBColor(15, 23, 42)

    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(4)
    p.add_run(
        "No ecossistema Netfits, as conquistas dividem-se em duas naturezas jurídicas e de produto:\n\n"
        "• Badges de Marco Histórico (VITALÍCIAS): Exemplos: 'primeira_compra', 'pioneiro' e 'perfil_verificado'. "
        "O atleta NUNCA as perde, pois registram um fato histórico consumado. Mesmo que ele fique 2 anos sem comprar, "
        "a medalha permanece no seu perfil. (A única exceção técnica é em caso de estorno/cancelamento de pedido ou chargeback fraudulento).\n\n"
        "• Badges de Hábito Recorrente (DEGRADÁVEIS / TEMPORAIS): Exemplos: 'streak_7_dias' (7 dias seguidos de treino), "
        "'semana_imbativel' (5 treinos na semana) ou 'top_spender_trimestre'. Estas badges operam sob o modelo de Janela Deslizante (Sliding Window). "
        "Se o atleta cessar a prática esportiva ou ficar inativo por mais de 15 dias, a badge expira e retorna ao estado 'bloqueado', "
        "incentivando o reengajamento contínuo.\n\n"
        "• Onde Guardamos o Histórico de Perda ou Expiração? Uma badge expirada NUNCA é deletada (DELETE) do banco de dados. "
        "Ela gera uma nova observação na tabela imutável 'user_badges_history' com os campos: user_id, badge_id, action='EXPIRED' (ou 'REVOKED'), "
        "previous_state='unlocked', new_state='locked', reason='Inatividade superior a 15 dias na janela deslizante' e event_timestamp. "
        "Isso viabiliza o 'Hall da Fama' no app (mostrando quantas vezes o atleta já bateu aquela marca) e blinda a auditoria contábil dos pontos concedidos."
    )

    # SEÇÃO 5
    add_heading_with_badge(doc, "5. CONCLUSÃO E CERTIFICAÇÃO TÉCNICA", "CERTIFICAÇÃO", "10B981")
    
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(4)
    p.add_run(
        "O ecossistema de dados da Netfits opera sob padrões internacionais de escalabilidade, separando dados quentes de alta frequência "
        "de dados frios de governança. O modelo assegura que cada centavo movimentado em pontos NFS possua contrapartida contábil exata, "
        "garantindo uma experiência gamificada, transparente e altamente rentável para a companhia e seus parceiros."
    )

    doc.add_paragraph().paragraph_format.space_after = Pt(10)

    # Assinatura
    p_sign = doc.add_paragraph()
    p_sign.paragraph_format.space_before = Pt(12)
    p_sign.paragraph_format.space_after = Pt(0)
    r_s = p_sign.add_run(
        "_____________________________________________________________________\n"
        "André Gallo | Diretor Executivo & Fundador (CEO / Owner)\n"
        "Antigravity AI | Engenharia de Software, Arquitetura de Dados & FinOps\n"
        "Netfits Plataforma Digital S.A. — Certificação de Produção 2026"
    )
    r_s.font.name = "Arial"
    r_s.font.size = Pt(8)
    r_s.font.color.rgb = RGBColor(100, 116, 139)
    r_s.font.italic = True

    return doc

def main():
    print("[1/3] Gerando documento Word com a Estrutura de Dados e Estudo de Caso...")
    doc = create_document()
    
    output_dir_local = r"C:\Users\aacga\Projetos\app_netfits"
    output_dir_onedrive = r"c:\Users\aacga\OneDrive\netfits"
    output_dir_artifacts = r"C:\Users\aacga\.gemini\antigravity\brain\0c50996a-827d-4c1d-b276-5ffdfd4f7f85"

    docx_filename = "NETFITS_Dossie_Tecnico_Estrutura_de_Dados_e_Estudo_de_Caso_Badges_08_10_2026.docx"
    pdf_filename = "NETFITS_Dossie_Tecnico_Estrutura_de_Dados_e_Estudo_de_Caso_Badges_08_10_2026.pdf"

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
