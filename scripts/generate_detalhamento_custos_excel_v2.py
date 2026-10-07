import os
import sys
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

def build_excel():
    source_path = r"C:\Users\aacga\OneDrive\netfits\Detalhamento_Custos_Tecnologia_e_FinOps_2026_2030.xlsx"
    dest_path = r"C:\Users\aacga\OneDrive\netfits\Detalhamento_Custos_Tecnologia_e_FinOps_2026_2030.xlsx"
    dest_local = r"C:\Users\aacga\Projetos\app_netfits\Detalhamento_Custos_Tecnologia_e_FinOps_2026_2030.xlsx"
    dest_artifacts = r"C:\Users\aacga\.gemini\antigravity\brain\5ce19ed4-336b-40b0-99dc-9784486f1a69\Detalhamento_Custos_Tecnologia_e_FinOps_2026_2030.xlsx"

    # Carrega dados originais do mês
    src_wb = openpyxl.load_workbook(source_path, data_only=True)
    src_month = src_wb.worksheets[1] # Projeção Mensal

    # Coleta meses (colunas 2 a 52)
    months = [src_month.cell(3, c).value for c in range(2, 53)] # 51 meses
    num_months = len(months)

    # Extrai todas as linhas de dados do mês original
    monthly_data = {}
    for r in range(4, src_month.max_row + 1):
        label = src_month.cell(r, 1).value
        if label:
            vals = [src_month.cell(r, c).value for c in range(2, 53)]
            monthly_data[label.strip()] = vals

    # Cria novo workbook estilizado
    wb = openpyxl.Workbook()
    wb.remove(wb.active) # Remove default sheet

    # Paleta de Cores Executiva Netfits
    c_navy_dark = "0F172A"   # Slate 900
    c_navy_med = "1E293B"    # Slate 800
    c_emerald = "10B981"     # Emerald 500
    c_emerald_dark = "047857"# Emerald 700
    c_emerald_light = "ECFDF5"# Emerald 50
    c_mint = "DCFCE7"        # Green 100
    c_blue_dark = "1D4ED8"   # Blue 700
    c_blue_light = "EFF6FF"  # Blue 50
    c_gray_header = "F1F5F9" # Slate 100
    c_gray_alt = "F8FAFC"    # Slate 50
    c_gray_border = "CBD5E1" # Slate 300
    c_text_dark = "0F172A"

    font_title = Font(name="Segoe UI", size=15, bold=True, color="FFFFFF")
    font_sub = Font(name="Segoe UI", size=10, italic=True, color="94A3B8")
    font_sec = Font(name="Segoe UI", size=11, bold=True, color="0F172A")
    font_th = Font(name="Segoe UI", size=9, bold=True, color="FFFFFF")
    font_bold = Font(name="Segoe UI", size=8.5, bold=True, color=c_text_dark)
    font_regular = Font(name="Segoe UI", size=8.5, color="334155")
    font_small = Font(name="Segoe UI", size=8, color="64748B")
    font_total = Font(name="Segoe UI", size=9, bold=True, color="064E3B")

    fill_dark_header = PatternFill(start_color=c_navy_dark, end_color=c_navy_dark, fill_type="solid")
    fill_sub_header = PatternFill(start_color=c_navy_med, end_color=c_navy_med, fill_type="solid")
    fill_emerald_header = PatternFill(start_color=c_emerald_dark, end_color=c_emerald_dark, fill_type="solid")
    fill_blue_header = PatternFill(start_color=c_blue_dark, end_color=c_blue_dark, fill_type="solid")
    fill_total_row = PatternFill(start_color=c_mint, end_color=c_mint, fill_type="solid")
    fill_kpi_row = PatternFill(start_color=c_blue_light, end_color=c_blue_light, fill_type="solid")
    fill_alt = PatternFill(start_color=c_gray_alt, end_color=c_gray_alt, fill_type="solid")
    fill_subsidy = PatternFill(start_color="FEF3C7", end_color="FEF3C7", fill_type="solid") # Amber light

    bd_thin = Side(style='thin', color="E2E8F0")
    bd_thick = Side(style='medium', color="94A3B8")
    bd_double = Side(style='double', color="064E3B")

    border_cell = Border(left=bd_thin, right=bd_thin, top=bd_thin, bottom=bd_thin)
    border_total = Border(left=bd_thin, right=bd_thin, top=bd_thin, bottom=bd_double)
    border_header = Border(left=bd_thin, right=bd_thin, top=bd_thick, bottom=bd_thick)

    align_center = Alignment(horizontal="center", vertical="center")
    align_left = Alignment(horizontal="left", vertical="center")
    align_right = Alignment(horizontal="right", vertical="center")

    num_fmt_curr = '"R$ "#,##0.00'
    num_fmt_int = '#,##0'
    num_fmt_pct = '0.00%'
    num_fmt_unit = '"R$ "0.000'

    # =========================================================================
    # 1. ABA: DETALHAMENTO MENSAL (51 MESES)
    # =========================================================================
    ws_m = wb.create_sheet(title="Projeção Mensal (51 Meses)")
    ws_m.views.sheetView[0].showGridLines = True

    # Banner
    ws_m.merge_cells("A1:BA1")
    ws_m.cell(1, 1).value = "NETFITS PLATAFORMA DIGITAL S.A. — DETALHAMENTO MENSAL DE CUSTOS DE TECNOLOGIA & FINOPS (OUT/26 A DEZ/30)"
    ws_m.cell(1, 1).font = font_title
    ws_m.cell(1, 1).fill = fill_dark_header
    ws_m.cell(1, 1).alignment = align_left
    ws_m.row_dimensions[1].height = 36

    ws_m.merge_cells("A2:BA2")
    ws_m.cell(2, 1).value = "Modelagem Financeira de Hiperescala (51 Meses) · Google Cloud Startup Program · Idempotência de Webhooks · Teto de Badges 50 NFs"
    ws_m.cell(2, 1).font = font_sub
    ws_m.cell(2, 1).fill = fill_dark_header
    ws_m.cell(2, 1).alignment = align_left
    ws_m.row_dimensions[2].height = 20

    # Headers de Colunas (Linha 4)
    ws_m.cell(4, 1).value = "Conta DRE / Família FinOps"
    ws_m.cell(4, 1).font = font_th
    ws_m.cell(4, 1).fill = fill_sub_header
    ws_m.cell(4, 1).alignment = align_left
    ws_m.cell(4, 1).border = border_header

    for idx, m in enumerate(months, start=2):
        cell = ws_m.cell(4, idx)
        cell.value = m
        cell.font = font_th
        cell.fill = fill_sub_header
        cell.alignment = align_center
        cell.border = border_header

    # Coluna Total e Média
    c_tot = num_months + 2 # Col 53
    c_avg = num_months + 3 # Col 54

    ws_m.cell(4, c_tot).value = "TOTAL (51M)"
    ws_m.cell(4, c_tot).font = font_th
    ws_m.cell(4, c_tot).fill = fill_emerald_header
    ws_m.cell(4, c_tot).alignment = align_center
    ws_m.cell(4, c_tot).border = border_header

    ws_m.cell(4, c_avg).value = "MÉDIA MENSAL"
    ws_m.cell(4, c_avg).font = font_th
    ws_m.cell(4, c_avg).fill = fill_blue_header
    ws_m.cell(4, c_avg).alignment = align_center
    ws_m.cell(4, c_avg).border = border_header
    ws_m.row_dimensions[4].height = 26

    # Linhas de Volume Operacional (Linhas 5, 6, 7)
    vol_specs = [
        ("Base de Usuários Cadastrados", "Base Usuários Cadastrados", num_fmt_int, False),
        ("Usuários Ativos Mensais (MAU Estimado)", "Usuários Ativos Mensais (MAU Estimado)", num_fmt_int, False),
        ("Receita Bruta Projetada (R$)", "Receita Bruta Projetada (R$)", num_fmt_curr, True),
    ]

    cur_row = 5
    for label_disp, label_src, fmt, is_bold in vol_specs:
        ws_m.cell(cur_row, 1).value = label_disp
        ws_m.cell(cur_row, 1).font = font_bold if is_bold else font_regular
        ws_m.cell(cur_row, 1).border = border_cell
        ws_m.cell(cur_row, 1).fill = fill_kpi_row

        vals = monthly_data.get(label_src, [0]*num_months)
        for idx, val in enumerate(vals, start=2):
            cell = ws_m.cell(cur_row, idx)
            cell.value = val
            cell.font = font_bold if is_bold else font_regular
            cell.number_format = fmt
            cell.alignment = align_right
            cell.border = border_cell
            cell.fill = fill_kpi_row

        # Fórmulas de Total e Média
        start_col_let = get_column_letter(2)
        end_col_let = get_column_letter(num_months + 1)
        
        if "Receita" in label_disp:
            ws_m.cell(cur_row, c_tot).value = f"=SUM({start_col_let}{cur_row}:{end_col_let}{cur_row})"
            ws_m.cell(cur_row, c_avg).value = f"=AVERAGE({start_col_let}{cur_row}:{end_col_let}{cur_row})"
        else:
            ws_m.cell(cur_row, c_tot).value = f"={end_col_let}{cur_row}" # Pico no final
            ws_m.cell(cur_row, c_avg).value = f"=AVERAGE({start_col_let}{cur_row}:{end_col_let}{cur_row})"

        for c_dest in [c_tot, c_avg]:
            ws_m.cell(cur_row, c_dest).font = font_bold
            ws_m.cell(cur_row, c_dest).number_format = fmt
            ws_m.cell(cur_row, c_dest).alignment = align_right
            ws_m.cell(cur_row, c_dest).border = border_cell
            ws_m.cell(cur_row, c_dest).fill = fill_kpi_row

        ws_m.row_dimensions[cur_row].height = 20
        cur_row += 1

    # Espaçador
    ws_m.row_dimensions[cur_row].height = 10
    cur_row += 1

    # Estrutura das 5 Famílias e suas Subcontas
    families_structure = [
        {
            "header": "1. Squad de Agentes de IA Autônomos (8 Agentes)",
            "subitems": [
                ("  1.1 Shop Recommender (Gemini Flash)", "1.1 Shop Recommender (Gemini Flash)"),
                ("  1.2 Algorithmic Feed Curator (Gemini Lite)", "1.2 Algorithmic Feed Curator (Gemini Lite)"),
                ("  1.3 Sentinel Fraud Shield (Gemini Flash)", "1.3 Sentinel Fraud Shield (Gemini Flash)"),
                ("  1.4 Accounting & Tax DRE Audit (Gemini Pro)", "1.4 Accounting & Tax DRE Audit (Gemini Pro)"),
                ("  1.5 Omnichannel CS Concierge (Gemini Flash)", "1.5 Omnichannel CS Concierge (Gemini Flash)"),
                ("  1.6 Partner & VIP Co-Pilot (Gemini Flash)", "1.6 Partner & VIP Co-Pilot (Gemini Flash)"),
                ("  1.7 Wearables Telemetry & Sensor AI (Lite)", "1.7 Wearables Telemetry & Sensor AI (Lite)"),
                ("  1.8 Executive BI & Insights Miner (Gemini Pro)", "1.8 Executive BI & Insights Miner (Gemini Pro)"),
            ]
        },
        {
            "header": "2. Infraestrutura de TI & Cloud (Compute & Edge)",
            "subitems": [
                ("  2.1 Compute Serverless & Containers (Cloud Run CUD)", "2.1 Compute Serverless & Containers (Cloud Run CUD)"),
                ("  2.2 Edge Computing, CDN & WAF (Cloudflare + GCS)", "2.2 Edge Computing, CDN & WAF (Cloudflare + GCS)"),
                ("  2.3 API Gateways, LB & DNS (Google Cloud LB)", "2.3 API Gateways, LB & DNS (Google Cloud LB)"),
            ]
        },
        {
            "header": "3. Estrutura de Dados, Ledger & Analytics",
            "subitems": [
                ("  3.1 Banco Relacional OLTP & Ledger (AlloyDB + PgBouncer)", "3.1 Banco Relacional OLTP & Ledger (AlloyDB + PgBouncer)"),
                ("  3.2 Cache In-Memory & Redis (Upstash Redis)", "3.2 Cache In-Memory & Redis (Upstash Redis)"),
                ("  3.3 Data Warehouse & Lakehouse (BigQuery / Iceberg)", "3.3 Data Warehouse & Lakehouse (BigQuery / Iceberg)"),
                ("  3.4 Vector Database & Embeddings (Pgvector)", "3.4 Vector Database & Embeddings (Pgvector)"),
            ]
        },
        {
            "header": "4. CRM, Comunicação & Mensageria Omnichannel",
            "subitems": [
                ("  4.1 WhatsApp Business API Transacional (Meta API)", "4.1 WhatsApp Business API Transacional (Meta API)"),
                ("  4.2 Push Notifications & Email (FCM + SendGrid)", "4.2 Push Notifications & Email (FCM + SendGrid)"),
                ("  4.3 Autenticação 2FA & SMS (Twilio + Firebase Auth)", "4.3 Autenticação 2FA & SMS (Twilio + Firebase Auth)"),
            ]
        },
        {
            "header": "5. Segurança, Observabilidade & Ferramentas FinOps",
            "subitems": [
                ("  5.1 Observabilidade & APM (OpenTelemetry / Datadog)", "5.1 Observabilidade & APM (OpenTelemetry / Datadog)"),
                ("  5.2 Segurança, SSL, WAF & SecOps (Security Cmd Center)", "5.2 Segurança, SSL, WAF & SecOps (Security Cmd Center)"),
            ]
        }
    ]

    family_header_rows = []

    for fam in families_structure:
        f_head_row = cur_row
        family_header_rows.append(f_head_row)
        
        # Linha Pai da Família (será fórmula de soma dos filhos)
        ws_m.cell(f_head_row, 1).value = fam["header"]
        ws_m.cell(f_head_row, 1).font = font_bold
        ws_m.cell(f_head_row, 1).border = border_cell
        ws_m.cell(f_head_row, 1).fill = PatternFill(start_color="F1F5F9", end_color="F1F5F9", fill_type="solid")
        ws_m.row_dimensions[f_head_row].height = 22

        cur_row += 1
        sub_start_row = cur_row

        for sub_label, sub_src_key in fam["subitems"]:
            ws_m.cell(cur_row, 1).value = sub_label
            ws_m.cell(cur_row, 1).font = font_regular
            ws_m.cell(cur_row, 1).border = border_cell
            
            # Procura dados no dicionário original
            found_vals = None
            for k, v in monthly_data.items():
                if sub_src_key.strip() in k or k in sub_src_key.strip():
                    found_vals = v
                    break
            if not found_vals:
                found_vals = [0]*num_months

            for idx, val in enumerate(found_vals, start=2):
                cell = ws_m.cell(cur_row, idx)
                cell.value = float(val) if val is not None else 0.0
                cell.font = font_regular
                cell.number_format = num_fmt_curr
                cell.alignment = align_right
                cell.border = border_cell

            # Fórmulas de Total e Média do Subitem
            start_col_let = get_column_letter(2)
            end_col_let = get_column_letter(num_months + 1)
            ws_m.cell(cur_row, c_tot).value = f"=SUM({start_col_let}{cur_row}:{end_col_let}{cur_row})"
            ws_m.cell(cur_row, c_avg).value = f"=AVERAGE({start_col_let}{cur_row}:{end_col_let}{cur_row})"
            for c_dest in [c_tot, c_avg]:
                ws_m.cell(cur_row, c_dest).font = font_regular
                ws_m.cell(cur_row, c_dest).number_format = num_fmt_curr
                ws_m.cell(cur_row, c_dest).alignment = align_right
                ws_m.cell(cur_row, c_dest).border = border_cell

            ws_m.row_dimensions[cur_row].height = 19
            cur_row += 1

        sub_end_row = cur_row - 1

        # Insere fórmulas na Linha Pai da Família
        for col_idx in range(2, c_avg + 1):
            col_let = get_column_letter(col_idx)
            cell_p = ws_m.cell(f_head_row, col_idx)
            cell_p.value = f"=SUM({col_let}{sub_start_row}:{col_let}{sub_end_row})"
            cell_p.font = font_bold
            cell_p.number_format = num_fmt_curr
            cell_p.alignment = align_right
            cell_p.border = border_cell
            cell_p.fill = PatternFill(start_color="F1F5F9", end_color="F1F5F9", fill_type="solid")

    # Linha de TOTAL BRUTO DE TI & FINOPS
    row_total_ti = cur_row
    ws_m.cell(row_total_ti, 1).value = "💰 TOTAL OPEX BRUTO DE TECNOLOGIA & FINOPS"
    ws_m.cell(row_total_ti, 1).font = font_total
    ws_m.cell(row_total_ti, 1).fill = fill_total_row
    ws_m.cell(row_total_ti, 1).border = border_total
    ws_m.row_dimensions[row_total_ti].height = 24

    for col_idx in range(2, c_avg + 1):
        col_let = get_column_letter(col_idx)
        cell = ws_m.cell(row_total_ti, col_idx)
        terms = [f"{col_let}{r}" for r in family_header_rows]
        cell.value = f"={'+'.join(terms)}"
        cell.font = font_total
        cell.number_format = num_fmt_curr
        cell.alignment = align_right
        cell.fill = fill_total_row
        cell.border = border_total

    cur_row += 1

    # Linha de Subsídios Google Cloud Startup Program
    row_subsidy = cur_row
    ws_m.cell(row_subsidy, 1).value = "(-) Créditos Google Cloud Startup Program (Subsídio de Nuvem & IA)"
    ws_m.cell(row_subsidy, 1).font = Font(name="Segoe UI", size=8.5, bold=True, color="B45309")
    ws_m.cell(row_subsidy, 1).fill = fill_subsidy
    ws_m.cell(row_subsidy, 1).border = border_cell

    for col_idx in range(2, num_months + 2):
        col_let = get_column_letter(col_idx)
        # Cobre integralmente os meses de Out/26 a Dez/27 (colunas 2 a 16)
        cell = ws_m.cell(row_subsidy, col_idx)
        if col_idx <= 16: # Primeiros 15 meses subsidiados
            cell.value = f"=-{col_let}{row_total_ti}"
        else:
            cell.value = 0.0
        cell.font = Font(name="Segoe UI", size=8.5, bold=True, color="B45309")
        cell.number_format = num_fmt_curr
        cell.alignment = align_right
        cell.fill = fill_subsidy
        cell.border = border_cell

    start_col_let = get_column_letter(2)
    end_col_let = get_column_letter(num_months + 1)
    ws_m.cell(row_subsidy, c_tot).value = f"=SUM({start_col_let}{row_subsidy}:{end_col_let}{row_subsidy})"
    ws_m.cell(row_subsidy, c_avg).value = f"=AVERAGE({start_col_let}{row_subsidy}:{end_col_let}{row_subsidy})"
    for c_dest in [c_tot, c_avg]:
        ws_m.cell(row_subsidy, c_dest).font = Font(name="Segoe UI", size=8.5, bold=True, color="B45309")
        ws_m.cell(row_subsidy, c_dest).number_format = num_fmt_curr
        ws_m.cell(row_subsidy, c_dest).alignment = align_right
        ws_m.cell(row_subsidy, c_dest).fill = fill_subsidy
        ws_m.cell(row_subsidy, c_dest).border = border_cell

    ws_m.row_dimensions[row_subsidy].height = 20
    cur_row += 1

    # Linha de DESEMBOLSO LÍQUIDO EFETIVO DE CAIXA
    row_net_cash = cur_row
    ws_m.cell(row_net_cash, 1).value = "💵 DESEMBOLSO LÍQUIDO EFETIVO DE CAIXA (NET CASH OPEX)"
    ws_m.cell(row_net_cash, 1).font = Font(name="Segoe UI", size=9, bold=True, color="1E3A8A")
    ws_m.cell(row_net_cash, 1).fill = fill_kpi_row
    ws_m.cell(row_net_cash, 1).border = border_total
    ws_m.row_dimensions[row_net_cash].height = 24

    for col_idx in range(2, c_avg + 1):
        col_let = get_column_letter(col_idx)
        cell = ws_m.cell(row_net_cash, col_idx)
        cell.value = f"=MAX(0, {col_let}{row_total_ti} + {col_let}{row_subsidy})"
        cell.font = Font(name="Segoe UI", size=9, bold=True, color="1E3A8A")
        cell.number_format = num_fmt_curr
        cell.alignment = align_right
        cell.fill = fill_kpi_row
        cell.border = border_total

    cur_row += 1

    # Espaçador
    ws_m.row_dimensions[cur_row].height = 12
    cur_row += 1

    # Indicadores Chave de Eficiência (Unit Economics)
    row_cost_mau = cur_row
    ws_m.cell(row_cost_mau, 1).value = "📊 Custo de TI por Usuário Ativo (R$ / MAU / mês)"
    ws_m.cell(row_cost_mau, 1).font = font_bold
    ws_m.cell(row_cost_mau, 1).border = border_cell
    for col_idx in range(2, num_months + 2):
        col_let = get_column_letter(col_idx)
        cell = ws_m.cell(row_cost_mau, col_idx)
        cell.value = f"={col_let}{row_total_ti}/{col_let}6" # linha 6 é MAU
        cell.font = font_bold
        cell.number_format = num_fmt_unit
        cell.alignment = align_right
        cell.border = border_cell

    ws_m.cell(row_cost_mau, c_tot).value = f"={get_column_letter(c_tot)}{row_total_ti}/{get_column_letter(c_tot)}6"
    ws_m.cell(row_cost_mau, c_avg).value = f"=AVERAGE({get_column_letter(2)}{row_cost_mau}:{get_column_letter(num_months+1)}{row_cost_mau})"
    for c_dest in [c_tot, c_avg]:
        ws_m.cell(row_cost_mau, c_dest).font = font_bold
        ws_m.cell(row_cost_mau, c_dest).number_format = num_fmt_unit
        ws_m.cell(row_cost_mau, c_dest).alignment = align_right
        ws_m.cell(row_cost_mau, c_dest).border = border_cell
    ws_m.row_dimensions[row_cost_mau].height = 20
    cur_row += 1

    row_pct_rev = cur_row
    ws_m.cell(row_pct_rev, 1).value = "📈 Custo de TI sobre a Receita Bruta (%)"
    ws_m.cell(row_pct_rev, 1).font = font_bold
    ws_m.cell(row_pct_rev, 1).border = border_cell
    for col_idx in range(2, num_months + 2):
        col_let = get_column_letter(col_idx)
        cell = ws_m.cell(row_pct_rev, col_idx)
        cell.value = f"={col_let}{row_total_ti}/{col_let}7" # linha 7 é Receita Bruta
        cell.font = font_bold
        cell.number_format = num_fmt_pct
        cell.alignment = align_right
        cell.border = border_cell

    ws_m.cell(row_pct_rev, c_tot).value = f"={get_column_letter(c_tot)}{row_total_ti}/{get_column_letter(c_tot)}7"
    ws_m.cell(row_pct_rev, c_avg).value = f"=AVERAGE({get_column_letter(2)}{row_pct_rev}:{get_column_letter(num_months+1)}{row_pct_rev})"
    for c_dest in [c_tot, c_avg]:
        ws_m.cell(row_pct_rev, c_dest).font = font_bold
        ws_m.cell(row_pct_rev, c_dest).number_format = num_fmt_pct
        ws_m.cell(row_pct_rev, c_dest).alignment = align_right
        ws_m.cell(row_pct_rev, c_dest).border = border_cell
    ws_m.row_dimensions[row_pct_rev].height = 20

    # Larguras de Colunas na Projeção Mensal
    ws_m.column_dimensions['A'].width = 52
    for c in range(2, c_avg + 1):
        col_let = get_column_letter(c)
        ws_m.column_dimensions[col_let].width = 13.5

    # Congela painéis para navegação suave (linha 5 e coluna B)
    ws_m.freeze_panes = "B5"


    # =========================================================================
    # 2. ABA: RESUMO ANUAL CONSOLIDADO (DRE PLURIANUAL)
    # =========================================================================
    ws_a = wb.create_sheet(title="Resumo Anual Consolidado", index=0)
    ws_a.views.sheetView[0].showGridLines = True

    # Banner
    ws_a.merge_cells("A1:I1")
    ws_a.cell(1, 1).value = "NETFITS PLATAFORMA DIGITAL S.A. — ESTUDO DE CUSTOS DE TECNOLOGIA & FINOPS (2026 - 2030)"
    ws_a.cell(1, 1).font = font_title
    ws_a.cell(1, 1).fill = fill_dark_header
    ws_a.cell(1, 1).alignment = align_left
    ws_a.row_dimensions[1].height = 36

    ws_a.merge_cells("A2:I2")
    ws_a.cell(2, 1).value = "Consolidado por Exercício Social (Out/26 a Dez/30 · 51 Meses de Operação) · Eficiência de Capital e FinOps"
    ws_a.cell(2, 1).font = font_sub
    ws_a.cell(2, 1).fill = fill_dark_header
    ws_a.cell(2, 1).alignment = align_left
    ws_a.row_dimensions[2].height = 20

    headers_a = [
        "Conta DRE / Família de Tecnologia & FinOps",
        "2026 (3 meses)",
        "2027 (12 meses)",
        "2028 (12 meses)",
        "2029 (12 meses)",
        "2030 (12 meses)",
        "TOTAL ACUMULADO (51M)",
        "% da Receita Bruta",
        "Economia FinOps vs. Tradicional"
    ]

    for col_idx, th_text in enumerate(headers_a, start=1):
        cell = ws_a.cell(4, col_idx)
        cell.value = th_text
        cell.font = font_th
        cell.fill = fill_sub_header
        cell.alignment = align_left if col_idx == 1 else align_center
        cell.border = border_header
    ws_a.row_dimensions[4].height = 26

    # Dados Anuais com Fórmulas referenciando a aba Mensal
    # 2026 = B a D (cols 2 a 4)
    # 2027 = E a P (cols 5 a 16)
    # 2028 = Q a AB (cols 17 a 28)
    # 2029 = AC a AN (cols 29 a 40)
    # 2030 = AO a AZ (cols 41 a 52)
    # Total = BA (col 53)

    # Coleta mapeamento de linhas da aba mensal
    # Vamos gerar linhas consolidadas perfeitas
    annual_rows_def = [
        # (Label, Mensal_Row, is_parent, Economia)
        ("1. Squad de Agentes de IA Autônomos (8 Agentes)", 9, True, 5961395.42),
        ("  1.1 Shop Recommender (Gemini Flash)", 10, False, "-"),
        ("  1.2 Algorithmic Feed Curator (Gemini Lite)", 11, False, "-"),
        ("  1.3 Sentinel Fraud Shield (Gemini Flash)", 12, False, "-"),
        ("  1.4 Accounting & Tax DRE Audit (Gemini Pro)", 13, False, "-"),
        ("  1.5 Omnichannel CS Concierge (Gemini Flash)", 14, False, "-"),
        ("  1.6 Partner & VIP Co-Pilot (Gemini Flash)", 15, False, "-"),
        ("  1.7 Wearables Telemetry & Sensor AI (Lite)", 16, False, "-"),
        ("  1.8 Executive BI & Insights Miner (Gemini Pro)", 17, False, "-"),
        ("2. Infraestrutura de TI & Cloud (Compute & Edge)", 18, True, 598467.00),
        ("  2.1 Compute Serverless & Containers (Cloud Run CUD)", 19, False, "-"),
        ("  2.2 Edge Computing, CDN & WAF (Cloudflare + GCS)", 20, False, "-"),
        ("  2.3 API Gateways, LB & DNS (Google Cloud LB)", 21, False, "-"),
        ("3. Estrutura de Dados, Ledger & Analytics", 22, True, 505139.77),
        ("  3.1 Banco Relacional OLTP & Ledger (AlloyDB + PgBouncer)", 23, False, "-"),
        ("  3.2 Cache In-Memory & Redis (Upstash Redis)", 24, False, "-"),
        ("  3.3 Data Warehouse & Lakehouse (BigQuery / Iceberg)", 25, False, "-"),
        ("  3.4 Vector Database & Embeddings (Pgvector)", 26, False, "-"),
        ("4. CRM, Comunicação & Mensageria Omnichannel", 27, True, 193625.67),
        ("  4.1 WhatsApp Business API Transacional (Meta API)", 28, False, "-"),
        ("  4.2 Push Notifications & Email (FCM + SendGrid)", 29, False, "-"),
        ("  4.3 Autenticação 2FA & SMS (Twilio + Firebase Auth)", 30, False, "-"),
        ("5. Segurança, Observabilidade & Ferramentas FinOps", 31, True, 184767.11),
        ("  5.1 Observabilidade & APM (OpenTelemetry / Datadog)", 32, False, "-"),
        ("  5.2 Segurança, SSL, WAF & SecOps (Security Cmd Center)", 33, False, "-"),
    ]

    r_a = 5
    for label, m_row, is_parent, econ in annual_rows_def:
        ws_a.cell(r_a, 1).value = label
        ws_a.cell(r_a, 1).font = font_bold if is_parent else font_regular
        ws_a.cell(r_a, 1).border = border_cell
        if is_parent:
            ws_a.cell(r_a, 1).fill = PatternFill(start_color="F1F5F9", end_color="F1F5F9", fill_type="solid")

        # Fórmulas que somam da aba mensal
        ws_a.cell(r_a, 2).value = f"=SUM('Projeção Mensal (51 Meses)'!B{m_row}:D{m_row})"   # 2026 (Out-Dez)
        ws_a.cell(r_a, 3).value = f"=SUM('Projeção Mensal (51 Meses)'!E{m_row}:P{m_row})"   # 2027 (Jan-Dez)
        ws_a.cell(r_a, 4).value = f"=SUM('Projeção Mensal (51 Meses)'!Q{m_row}:AB{m_row})"  # 2028 (Jan-Dez)
        ws_a.cell(r_a, 5).value = f"=SUM('Projeção Mensal (51 Meses)'!AC{m_row}:AN{m_row})" # 2029 (Jan-Dez)
        ws_a.cell(r_a, 6).value = f"=SUM('Projeção Mensal (51 Meses)'!AO{m_row}:AZ{m_row})" # 2030 (Jan-Dez)
        ws_a.cell(r_a, 7).value = f"=SUM(B{r_a}:F{r_a})"                                     # Total 51M
        ws_a.cell(r_a, 8).value = f"=G{r_a}/$G$36"                                           # % Receita
        
        if econ != "-":
            ws_a.cell(r_a, 9).value = econ
            ws_a.cell(r_a, 9).number_format = num_fmt_curr
        else:
            ws_a.cell(r_a, 9).value = "-"
            ws_a.cell(r_a, 9).alignment = align_center

        for col_idx in range(2, 8):
            cell = ws_a.cell(r_a, col_idx)
            cell.font = font_bold if is_parent else font_regular
            cell.number_format = num_fmt_curr
            cell.alignment = align_right
            cell.border = border_cell
            if is_parent:
                cell.fill = PatternFill(start_color="F1F5F9", end_color="F1F5F9", fill_type="solid")

        ws_a.cell(r_a, 8).font = font_bold if is_parent else font_regular
        ws_a.cell(r_a, 8).number_format = num_fmt_pct
        ws_a.cell(r_a, 8).alignment = align_right
        ws_a.cell(r_a, 8).border = border_cell

        ws_a.cell(r_a, 9).font = font_bold if is_parent else font_regular
        ws_a.cell(r_a, 9).alignment = align_right if econ != "-" else align_center
        ws_a.cell(r_a, 9).border = border_cell

        ws_a.row_dimensions[r_a].height = 20
        r_a += 1

    # Linha TOTAL OPEX TECNOLOGIA & FINOPS
    row_tot_a = r_a
    ws_a.cell(row_tot_a, 1).value = "💰 TOTAL TECNOLOGIA & FINOPS NETFITS"
    ws_a.cell(row_tot_a, 1).font = font_total
    ws_a.cell(row_tot_a, 1).fill = fill_total_row
    ws_a.cell(row_tot_a, 1).border = border_total

    # Soma das famílias 1, 2, 3, 4, 5
    fam_rows_a = [5, 14, 18, 23, 27] # linhas dos pais na aba anual
    for col_idx in range(2, 8):
        col_let = get_column_letter(col_idx)
        cell = ws_a.cell(row_tot_a, col_idx)
        cell.value = f"={'+'.join([f'{col_let}{fr}' for fr in fam_rows_a])}"
        cell.font = font_total
        cell.number_format = num_fmt_curr
        cell.alignment = align_right
        cell.fill = fill_total_row
        cell.border = border_total

    ws_a.cell(row_tot_a, 8).value = f"=G{row_tot_a}/$G$36"
    ws_a.cell(row_tot_a, 8).font = font_total
    ws_a.cell(row_tot_a, 8).number_format = num_fmt_pct
    ws_a.cell(row_tot_a, 8).alignment = align_right
    ws_a.cell(row_tot_a, 8).fill = fill_total_row
    ws_a.cell(row_tot_a, 8).border = border_total

    ws_a.cell(row_tot_a, 9).value = "=SUM(I5, I14, I18, I23, I27) + 1100000" # Inclui créditos Google Cloud
    ws_a.cell(row_tot_a, 9).font = font_total
    ws_a.cell(row_tot_a, 9).number_format = num_fmt_curr
    ws_a.cell(row_tot_a, 9).alignment = align_right
    ws_a.cell(row_tot_a, 9).fill = fill_total_row
    ws_a.cell(row_tot_a, 9).border = border_total
    ws_a.row_dimensions[row_tot_a].height = 24
    r_a += 1

    # Linha Subsídios Google Cloud Startup Program
    row_sub_a = r_a
    ws_a.cell(row_sub_a, 1).value = "(-) Subsídios Google Cloud Startup Program (Créditos de Nuvem & IA)"
    ws_a.cell(row_sub_a, 1).font = Font(name="Segoe UI", size=8.5, bold=True, color="B45309")
    ws_a.cell(row_sub_a, 1).fill = fill_subsidy
    ws_a.cell(row_sub_a, 1).border = border_cell

    ws_a.cell(row_sub_a, 2).value = f"=-B{row_tot_a}" # 100% subsidiado 2026
    ws_a.cell(row_sub_a, 3).value = f"=-C{row_tot_a}" # 100% subsidiado 2027
    ws_a.cell(row_sub_a, 4).value = 0.0
    ws_a.cell(row_sub_a, 5).value = 0.0
    ws_a.cell(row_sub_a, 6).value = 0.0
    ws_a.cell(row_sub_a, 7).value = f"=SUM(B{row_sub_a}:F{row_sub_a})"
    ws_a.cell(row_sub_a, 8).value = f"=G{row_sub_a}/$G$36"
    ws_a.cell(row_sub_a, 9).value = 1100000.0 # R$ 1,1M em créditos disponíveis

    for col_idx in range(2, 8):
        cell = ws_a.cell(row_sub_a, col_idx)
        cell.font = Font(name="Segoe UI", size=8.5, bold=True, color="B45309")
        cell.number_format = num_fmt_curr
        cell.alignment = align_right
        cell.fill = fill_subsidy
        cell.border = border_cell

    ws_a.cell(row_sub_a, 8).font = Font(name="Segoe UI", size=8.5, bold=True, color="B45309")
    ws_a.cell(row_sub_a, 8).number_format = num_fmt_pct
    ws_a.cell(row_sub_a, 8).alignment = align_right
    ws_a.cell(row_sub_a, 8).fill = fill_subsidy
    ws_a.cell(row_sub_a, 8).border = border_cell

    ws_a.cell(row_sub_a, 9).font = Font(name="Segoe UI", size=8.5, bold=True, color="B45309")
    ws_a.cell(row_sub_a, 9).number_format = num_fmt_curr
    ws_a.cell(row_sub_a, 9).alignment = align_right
    ws_a.cell(row_sub_a, 9).fill = fill_subsidy
    ws_a.cell(row_sub_a, 9).border = border_cell
    ws_a.row_dimensions[row_sub_a].height = 20
    r_a += 1

    # Linha DESEMBOLSO LÍQUIDO EFETIVO DE CAIXA
    row_liq_a = r_a
    ws_a.cell(row_liq_a, 1).value = "💵 DESEMBOLSO LÍQUIDO EFETIVO DE CAIXA (NET CASH OPEX)"
    ws_a.cell(row_liq_a, 1).font = Font(name="Segoe UI", size=9, bold=True, color="1E3A8A")
    ws_a.cell(row_liq_a, 1).fill = fill_kpi_row
    ws_a.cell(row_liq_a, 1).border = border_total
    ws_a.row_dimensions[row_liq_a].height = 24

    for col_idx in range(2, 7):
        col_let = get_column_letter(col_idx)
        cell = ws_a.cell(row_liq_a, col_idx)
        cell.value = f"=MAX(0, {col_let}{row_tot_a} + {col_let}{row_sub_a})"
        cell.font = Font(name="Segoe UI", size=9, bold=True, color="1E3A8A")
        cell.number_format = num_fmt_curr
        cell.alignment = align_right
        cell.fill = fill_kpi_row
        cell.border = border_total

    ws_a.cell(row_liq_a, 7).value = f"=SUM(B{row_liq_a}:F{row_liq_a})"
    ws_a.cell(row_liq_a, 7).font = Font(name="Segoe UI", size=9, bold=True, color="1E3A8A")
    ws_a.cell(row_liq_a, 7).number_format = num_fmt_curr
    ws_a.cell(row_liq_a, 7).alignment = align_right
    ws_a.cell(row_liq_a, 7).fill = fill_kpi_row
    ws_a.cell(row_liq_a, 7).border = border_total

    ws_a.cell(row_liq_a, 8).value = f"=G{row_liq_a}/$G$36"
    ws_a.cell(row_liq_a, 8).font = Font(name="Segoe UI", size=9, bold=True, color="1E3A8A")
    ws_a.cell(row_liq_a, 8).number_format = num_fmt_pct
    ws_a.cell(row_liq_a, 8).alignment = align_right
    ws_a.cell(row_liq_a, 8).fill = fill_kpi_row
    ws_a.cell(row_liq_a, 8).border = border_total

    ws_a.cell(row_liq_a, 9).value = "=I30" # Economia total
    ws_a.cell(row_liq_a, 9).font = Font(name="Segoe UI", size=9, bold=True, color="1E3A8A")
    ws_a.cell(row_liq_a, 9).number_format = num_fmt_curr
    ws_a.cell(row_liq_a, 9).alignment = align_right
    ws_a.cell(row_liq_a, 9).fill = fill_kpi_row
    ws_a.cell(row_liq_a, 9).border = border_total
    r_a += 1

    # Espaçador
    ws_a.row_dimensions[r_a].height = 12
    r_a += 1

    # Linhas de Indicadores Operacionais
    ind_specs = [
        ("Base de Usuários Cadastrados (Pico do Exercício)", [35000, 550000, 1500000, 2400000, 3000000], num_fmt_int, "3.000.000"),
        ("Usuários Ativos Mensais (MAU Médio)", [5600, 88000, 240000, 384000, 480000], num_fmt_int, "288.000"),
        ("Receita Bruta Projetada (R$)", [451848, 29467545, 74015420, 103456890, 131058716], num_fmt_curr, "=SUM(B36:F36)"),
        ("Custo Médio Mensal de TI (R$ / mês)", [f"=B{row_tot_a}/3", f"=C{row_tot_a}/12", f"=D{row_tot_a}/12", f"=E{row_tot_a}/12", f"=F{row_tot_a}/12"], num_fmt_curr, f"=G{row_tot_a}/51"),
        ("Custo Unitário de TI por Usuário Ativo (R$ / MAU / mês)", [f"=B37/B35", f"=C37/C35", f"=D37/D35", f"=E37/E35", f"=F37/F35"], num_fmt_unit, f"=G37/G35"),
        ("Custo de TI sobre a Receita Bruta (%)", [f"=B{row_tot_a}/B36", f"=C{row_tot_a}/C36", f"=D{row_tot_a}/D36", f"=E{row_tot_a}/E36", f"=F{row_tot_a}/F36"], num_fmt_pct, f"=G{row_tot_a}/G36"),
    ]

    for label_i, vals_i, fmt_i, tot_i in ind_specs:
        ws_a.cell(r_a, 1).value = label_i
        ws_a.cell(r_a, 1).font = font_bold
        ws_a.cell(r_a, 1).border = border_cell
        ws_a.cell(r_a, 1).fill = fill_alt

        for idx, vi in enumerate(vals_i, start=2):
            cell = ws_a.cell(r_a, idx)
            cell.value = vi
            cell.font = font_bold
            cell.number_format = fmt_i
            cell.alignment = align_right
            cell.border = border_cell
            cell.fill = fill_alt

        cell_tot = ws_a.cell(r_a, 7)
        cell_tot.value = tot_i if isinstance(tot_i, (int, float)) or str(tot_i).startswith("=") else int(tot_i.replace(".", ""))
        cell_tot.font = font_bold
        cell_tot.number_format = fmt_i
        cell_tot.alignment = align_right
        cell_tot.border = border_cell
        cell_tot.fill = fill_alt

        ws_a.cell(r_a, 8).value = "-"
        ws_a.cell(r_a, 8).alignment = align_center
        ws_a.cell(r_a, 8).border = border_cell
        ws_a.cell(r_a, 8).fill = fill_alt

        ws_a.cell(r_a, 9).value = "-"
        ws_a.cell(r_a, 9).alignment = align_center
        ws_a.cell(r_a, 9).border = border_cell
        ws_a.cell(r_a, 9).fill = fill_alt

        ws_a.row_dimensions[r_a].height = 20
        r_a += 1

    # Larguras de Colunas no Resumo Anual
    ws_a.column_dimensions['A'].width = 54
    ws_a.column_dimensions['B'].width = 16
    ws_a.column_dimensions['C'].width = 17
    ws_a.column_dimensions['D'].width = 17
    ws_a.column_dimensions['E'].width = 17
    ws_a.column_dimensions['F'].width = 17
    ws_a.column_dimensions['G'].width = 24
    ws_a.column_dimensions['H'].width = 18
    ws_a.column_dimensions['I'].width = 28

    # =========================================================================
    # 3. ABA: PREMISSAS & ARQUITETURA FINOPS
    # =========================================================================
    ws_p = wb.create_sheet(title="Premissas & Arquitetura FinOps")
    ws_p.views.sheetView[0].showGridLines = True

    ws_p.merge_cells("A1:B1")
    ws_p.cell(1, 1).value = "NETFITS PLATAFORMA DIGITAL S.A. — PREMISSAS TÉCNICAS E DIRETRIZES FINOPS (2026 - 2030)"
    ws_p.cell(1, 1).font = font_title
    ws_p.cell(1, 1).fill = fill_dark_header
    ws_p.cell(1, 1).alignment = align_left
    ws_p.row_dimensions[1].height = 36

    premissas_content = [
        ("1. Google Cloud Startup Program & Subsídios de Aceleração (2026 - 2027)", [
            "A Netfits é credenciada no Google Cloud Startup Program com pacote de até US$ 200.000 (R$ 1,1 Milhão) em créditos.",
            "Desembolso efetivo de caixa em infraestrutura de nuvem é R$ 0,00 nos exercícios de 2026 e 2027.",
            "Preserva 100% do capital de giro inicial para aquisição de usuários, parcerias e expansão comercial.",
            "Acesso direto a especialistas de arquitetura do Google para validação de escalabilidade e segurança."
        ]),
        ("2. Idempotência Criptográfica de Webhooks Rock Encantech / MKPlace (/api/orders)", [
            "Validação de assinatura em tempo constante (crypto.timingSafeEqual) prevenindo timing attacks.",
            "Upsert idempotente baseado no _id único do pedido com flag isReplay para ignorar notificações repetidas.",
            "Cada transação física gera estritamente um crédito de cashback, prevenindo duplicidades em reenvios de status.",
            "Reduz em mais de 60% as escritas no banco relacional e processamento serverless em picos de checkout."
        ]),
        ("3. Blindagem Atuarial do Passivo de Pontos (CPC 30 / IFRS 15) & Teto de Badges", [
            "Teto operacional rigoroso de 50 NFs para todas as conquistas e badges do aplicativo.",
            "Eliminação de bonificações anteriores desproporcionais (ex.: 1.080 NFs na primeira compra), contendo o passivo circulante.",
            "Motor feed-antifraud.ts audita retenção ativa (Dwell Time) em artigos e 90%+ em vídeos antes de liberar pontos.",
            "Comissões de compras sobre indicados (MGM) suspensas até o lançamento do clube de assinantes, blindando a margem da loja."
        ]),
        ("4. Squad Multiagêntico de IA (8 Agentes Autônomos com Gemini 2.5)", [
            "Substitui equipe tradicional de 17 analistas de suporte, risco, contabilidade e moderação que custaria R$ 119.200,00/mês.",
            "Roteamento de modelos: Gemini 2.5 Flash para tarefas em tempo real (Shop Recommender, Concierge, Fraud Shield).",
            "Gemini 2.5 Flash-Lite para ranqueamento leve do feed comunitário e ingestão de telemetria de sensores.",
            "Gemini 2.5 Pro reservado para conciliação contábil mensal, escrituração tributária e BI executivo.",
            "Economia acumulada de mais de R$ 5,96 Milhões em folha e encargos em 51 meses de operação."
        ]),
        ("5. Infraestrutura Compute & Edge Serverless (Cloud Run + Cloudflare)", [
            "Google Cloud Run com Contratos de Uso Comprometido (CUD) de 3 Anos, garantindo 52% de desconto no custo por vCPU/RAM.",
            "Arquitetura Edge-First com Cloudflare Workers: 70% das requisições estáticas e assets são respondidas na borda.",
            "Eliminação total de servidores ociosos: contêineres escalam a zero durante a madrugada e sobem sob demanda."
        ]),
        ("6. Estrutura de Dados, Ledger & Analytics (AlloyDB + PgBouncer + BigQuery)", [
            "AlloyDB / Cloud SQL PostgreSQL HA como ledger imutável de saldo e extrato com complexidade O(1).",
            "PgBouncer multiplexa milhares de conexões em pool estável, evitando sobrecarga de conexões no banco.",
            "Upstash Redis para cache sub-5ms de vitrines e sessões com TTL dinâmico.",
            "BigQuery operando queries analíticas pesadas e auditorias de conciliação isoladas da loja transacional."
        ]),
        ("7. Mensageria 'Push-First' & Governança WhatsApp", [
            "Notificações diárias sobre treinos e acúmulo de pontos via Firebase Cloud Messaging (FCM) a custo zero.",
            "WhatsApp Business API restrito estritamente a 2FA, recuperação de senha crítica e saques de alta pontuação."
        ])
    ]

    r_p = 3
    for sec_title, items in premissas_content:
        ws_p.cell(r_p, 1).value = sec_title
        ws_p.cell(r_p, 1).font = font_sec
        ws_p.cell(r_p, 1).fill = PatternFill(start_color="F1F5F9", end_color="F1F5F9", fill_type="solid")
        ws_p.row_dimensions[r_p].height = 24
        r_p += 1

        for it in items:
            ws_p.cell(r_p, 1).value = f"  • {it}"
            ws_p.cell(r_p, 1).font = font_regular
            ws_p.row_dimensions[r_p].height = 18
            r_p += 1
        
        ws_p.row_dimensions[r_p].height = 8
        r_p += 1

    ws_p.column_dimensions['A'].width = 120

    # Salva arquivos
    print(f"Salvando Excel atualizado em: {dest_path}")
    wb.save(dest_path)
    wb.save(dest_local)
    wb.save(dest_artifacts)
    print("Planilha Excel gerada e replicada com 100% de sucesso!")

if __name__ == "__main__":
    build_excel()
