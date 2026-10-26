import asyncio
import os
import sys
import subprocess
import edge_tts
from PIL import Image, ImageDraw, ImageFont

sys.stdout.reconfigure(encoding="utf-8")

FFMPEG = r"C:\Users\aacga\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0.2-full_build\bin\ffmpeg.exe"
OUTPUT_DIR = r"C:\Users\aacga\Projetos\app_netfits\public\videos"
TEMP_DIR = r"C:\Users\aacga\Projetos\app_netfits\scripts\temp_video_build"
LOGO_PATH = r"C:\Users\aacga\Projetos\app_netfits\public\assets\netfits-logo-green.png"

FONT_REGULAR = r"C:\Windows\Fonts\segoeui.ttf"
FONT_BOLD = r"C:\Windows\Fonts\segoeuib.ttf"
FONT_SEMIBOLD = r"C:\Windows\Fonts\segoeuisl.ttf"

VIDEOS = [
    {
        "id": "netfits-shop-cashback",
        "title": "Como Comprar no Shop Gera Netfits: 4 netfits por R$ 1 no Extrato",
        "output_file": os.path.join(OUTPUT_DIR, "netfits-shop-cashback.mp4"),
        "scenes": [
            {
                "scene_num": 1,
                "badge": "CENA 1 / 4 · SHOP & CONSUMO INTELIGENTE",
                "headline": "O Consumo do Atleta Consciente",
                "tagline": "Treinos, vestuário, suplementação e rotina saudável",
                "narration": "Você já parou para calcular quanto gasta todo mês para manter seus treinos e sua alimentação equilibrada? Esse consumo faz parte da sua longevidade.",
                "visual_type": "cards",
                "cards": [
                    ("👟 VESTUÁRIO & TÊNIS", "Marcas parceiras oficiais de alta performance"),
                    ("🧪 SUPLEMENTAÇÃO", "Creatina, whey protein e nutrientes certificados"),
                    ("⚡ EQUIPAMENTOS", "Acessórios e tecnologia para seu ritmo diário"),
                ],
                "metric_label": "OBJETIVO",
                "metric_val": "Transformar consumo essencial em saldo de netfits na carteira"
            },
            {
                "scene_num": 2,
                "badge": "CENA 2 / 4 · A REGRA DE OURO",
                "headline": "A Fórmula Oficial de Acúmulo",
                "tagline": "Cashback direto em netfits a cada real investido",
                "narration": "No Shop Netfits, cada compra em marcas parceiras devolve valor para você: a cada um real gasto, você ganha automaticamente 4 netfits na sua carteira!",
                "visual_type": "highlight_formula",
                "formula_left": "R$ 1,00 GASTO",
                "formula_arrow": "➔",
                "formula_right": "4 NETFITS GERADOS",
                "cards": [
                    ("🛡️ Sem Pegadinhas", "Saldo com valor auditado e transparente"),
                    ("⚡ Crédito Rápido", "Lançamento assim que o pedido é faturado"),
                    ("🏆 Catálogo Integrado", "Parceria oficial Rock Encantech e marcas de ponta")
                ],
                "metric_label": "MULTIPLICADOR OFICIAL",
                "metric_val": "4 netfits para cada R$ 1,00 gasto no marketplace"
            },
            {
                "scene_num": 3,
                "badge": "CENA 3 / 4 · SIMULAÇÃO PRÁTICA",
                "headline": "Exemplo Real de Compra no Shop",
                "tagline": "Veja como funciona na ponta do lápis",
                "narration": "Comprou 250 reais em suplementos certificados? São 1.000 netfits direto para a sua conta, creditados assim que o pedido é faturado.",
                "visual_type": "receipt",
                "receipt_title": "PEDIDO DE SUPLEMENTAÇÃO · SIMULAÇÃO",
                "receipt_rows": [
                    ("Itens do Pedido", "Creatina Creapure + Whey Isolado"),
                    ("Valor Total Faturado", "R$ 250,00"),
                    ("Regra de Conversão", "4 netfits / R$ 1,00"),
                ],
                "receipt_total": "+1.000 NETFITS CREDITADOS NA CARTEIRA",
                "cards": [
                    ("✔ Faturamento Confirmado", "Identificação imediata da compra no extrato"),
                    ("🔒 Segurança Transacional", "Conexão criptografada ponta a ponta")
                ],
                "metric_label": "SALDO GERADO",
                "metric_val": "+1.000 netfits para resgatar benefícios e experiências"
            },
            {
                "scene_num": 4,
                "badge": "CENA 4 / 4 · CONCLUSÃO & QUIZ",
                "headline": "Economia da Saúde na Prática",
                "tagline": "Consumir bem é investir na sua longevidade",
                "narration": "Economia da saúde na prática: consumir bem é investir em você. Assista até o fim e responda ao Quiz para somar mais 5 netfits agora mesmo!",
                "visual_type": "conclusion",
                "cards": [
                    ("📅 Validade de 24 Meses", "Algoritmo FEFO protege seus netfits mais antigos"),
                    ("🛡️ Trava de 90% Concluída", "Assista ao vídeo e libere o Quiz do Dia"),
                    ("🎁 Ganhe +5 netfits", "Responda à pergunta do desafio logo abaixo do vídeo")
                ],
                "metric_label": "PRÓXIMO PASSO",
                "metric_val": "Responda ao Quiz abaixo para garantir seus +5 netfits de hoje!"
            }
        ]
    },
    {
        "id": "netfits-tour-app",
        "title": "Tour Completo pelo App Netfits: Como Navegar e Ganhar Netfits em 60 Segundos",
        "output_file": os.path.join(OUTPUT_DIR, "netfits-tour-app.mp4"),
        "scenes": [
            {
                "scene_num": 1,
                "badge": "CENA 1 / 5 · BOAS-VINDAS À NETFITS",
                "headline": "A Vida em Movimento Vale Mais",
                "tagline": "Conheça o ecossistema que recompensa seu estilo de vida",
                "narration": "Bem-vindo à Netfits! Aqui, cada escolha que você faz para cuidar da sua saúde gera valor real. Vamos conhecer o seu novo app?",
                "visual_type": "tour_welcome",
                "cards": [
                    ("🏃 Para Esportistas Amadores", "Corrida, natação, ciclismo, musculação e tênis"),
                    ("🩺 Medicina do Estilo de Vida", "Artigos e curadoria médica com Fibios"),
                    ("🎁 Moeda Digital de Saúde", "Seus netfits auditados e protegidos")
                ],
                "metric_label": "MISSÃO NETFITS",
                "metric_val": "Transformar hábitos saudáveis em inteligência e saldo de netfits"
            },
            {
                "scene_num": 2,
                "badge": "CENA 2 / 5 · ABA FEED & QUIZZES",
                "headline": "Aprenda, Treine e Pontue Diariamente",
                "tagline": "Conteúdo de alta performance com atenção plena",
                "narration": "Na aba Feed, você encontra artigos rápidos sobre longevidade e hábitos saudáveis. Ao ler e responder ao Quiz diário, você acumula seus primeiros netfits.",
                "visual_type": "cards",
                "cards": [
                    ("📖 Artigos Rápidos & Diretos", "Estudos clínicos sobre recuperação e nutrição"),
                    ("⏱️ Trava Antifraude de 10s", "Leitura consciente com retenção auditada"),
                    ("🎯 Quiz Diário: +5 netfits", "Pontuação concentrada no acerto do desafio")
                ],
                "metric_label": "DESAFIO DIÁRIO",
                "metric_val": "+5 netfits em quizzes próprios e +10 netfits em patrocinados"
            },
            {
                "scene_num": 3,
                "badge": "CENA 3 / 5 · ABA SHOP & CASHBACK",
                "headline": "Suas Compras Viram Cashback em netfits",
                "tagline": "Vitrine curada com as melhores marcas esportivas",
                "narration": "No Shop, suas compras em marcas parceiras viram cashback: a cada 1 real investido na sua saúde, você ganha 4 netfits na sua carteira.",
                "visual_type": "highlight_formula",
                "formula_left": "R$ 1,00 INVESTIDO",
                "formula_arrow": "➔",
                "formula_right": "4 NETFITS NA CARTEIRA",
                "cards": [
                    ("👟 Equipamentos & Vestuário", "Marcas líderes selecionadas para você"),
                    ("⚡ Netfits Reais no Extrato", "Sem cupom de desconto temporário que expira"),
                    ("📦 Entrega & Garantia", "Marketplace integrado de ponta a ponta")
                ],
                "metric_label": "CASHBACK INTEGRADO",
                "metric_val": "4 netfits por real gasto em qualquer compra do Shop"
            },
            {
                "scene_num": 4,
                "badge": "CENA 4 / 5 · EXTRATO & PERFIL",
                "headline": "Transparência Total e Bônus de Amigos",
                "tagline": "Gestão segura com algoritmo FEFO de 24 meses",
                "narration": "No Extrato, você confere seus netfits com transparência total. E no Perfil, você gerencia seus dados e convida amigos ganhando 50 netfits por indicação.",
                "visual_type": "cards",
                "cards": [
                    ("📊 Extrato Auditado", "Origem de cada crédito e validade de 24 meses"),
                    ("🔄 Algoritmo FEFO", "Netfits mais antigos debitados primeiro"),
                    ("👥 Indicação Amigos (MGM)", "Ganhe +50 netfits por cada amigo que cadastrar")
                ],
                "metric_label": "BÔNUS DE INDICAÇÃO",
                "metric_val": "+50 netfits por indicação concluída com sucesso"
            },
            {
                "scene_num": 5,
                "badge": "CENA 5 / 5 · ENCERRAMENTO",
                "headline": "Pronto para Começar sua Jornada?",
                "tagline": "Valide seu vídeo e desbloqueie o primeiro Quiz",
                "narration": "Pronto para começar? Complete este vídeo, responda ao desafio abaixo e garanta seus primeiros netfits de hoje!",
                "visual_type": "conclusion",
                "cards": [
                    ("🛡️ Retenção de 90% Auditada", "Assista ao vídeo para destravar o botão"),
                    ("🎯 Quiz de Boas-Vindas", "Pergunta rápida sobre a barra de navegação"),
                    ("⭐ Seus Primeiros Netfits", "+5 netfits creditados imediatamente na carteira")
                ],
                "metric_label": "DESTRAVE AGORA",
                "metric_val": "Responda à pergunta do Quiz abaixo e garanta seus +5 netfits!"
            }
        ]
    }
]

def draw_rounded_rect(draw, bbox, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(bbox, radius=radius, fill=fill, outline=outline, width=width)

def render_scene_image(scene, video_title, total_scenes, out_png):
    width, height = 1280, 720
    img = Image.new("RGB", (width, height), color=(10, 10, 15))
    draw = ImageDraw.Draw(img)

    font_huge = ImageFont.truetype(FONT_BOLD, 40)
    font_large = ImageFont.truetype(FONT_BOLD, 28)
    font_med = ImageFont.truetype(FONT_BOLD, 22)
    font_text = ImageFont.truetype(FONT_REGULAR, 20)
    font_small = ImageFont.truetype(FONT_REGULAR, 16)
    font_badge = ImageFont.truetype(FONT_BOLD, 15)

    # 1. Subtle Background Gradients / Borders
    draw.rectangle([(0, 0), (width, 8)], fill=(16, 185, 129)) # Emerald Netfits
    
    # 2. Header Area
    # Netfits Brand Pill
    draw_rounded_rect(draw, (40, 25, 230, 65), radius=12, fill=(16, 185, 129, 40), outline=(16, 185, 129), width=2)
    draw.text((55, 33), "NETFITS OFICIAL", font=font_badge, fill=(52, 211, 153))

    # Scene Badge Pill
    draw_rounded_rect(draw, (245, 25, 680, 65), radius=12, fill=(24, 24, 32), outline=(63, 63, 70), width=1)
    draw.text((260, 33), scene["badge"], font=font_badge, fill=(228, 228, 231))

    # Progress pill (right)
    draw_rounded_rect(draw, (width - 240, 25, width - 40, 65), radius=12, fill=(39, 39, 42), outline=(82, 82, 91), width=1)
    progress_text = f"CENA {scene['scene_num']} DE {total_scenes}"
    draw.text((width - 220, 33), progress_text, font=font_badge, fill=(161, 161, 170))

    # 3. Main Title & Tagline
    draw.text((40, 90), scene["headline"], font=font_huge, fill=(255, 255, 255))
    draw.text((40, 145), scene["tagline"], font=font_text, fill=(161, 161, 170))

    # 4. Central Graphic Box
    if scene.get("visual_type") == "highlight_formula":
        # Left side cards
        card_y = 195
        for title, desc in scene["cards"]:
            draw_rounded_rect(draw, (40, card_y, 590, card_y + 80), radius=16, fill=(24, 24, 32), outline=(39, 39, 42), width=1)
            draw.text((60, card_y + 14), title, font=font_med, fill=(52, 211, 153))
            draw.text((60, card_y + 44), desc, font=font_small, fill=(212, 212, 216))
            card_y += 95

        # Right side big formula showcase
        draw_rounded_rect(draw, (620, 195, width - 40, 470), radius=24, fill=(16, 28, 24), outline=(16, 185, 129), width=3)
        draw.text((650, 225), "REGRA MATEMÁTICA INEGOCIÁVEL", font=font_badge, fill=(52, 211, 153))
        
        # Left formula part
        draw_rounded_rect(draw, (650, 265, 870, 360), radius=16, fill=(24, 24, 32), outline=(63, 63, 70), width=2)
        draw.text((670, 285), "R$ 1,00 GASTO", font=font_large, fill=(255, 255, 255))
        draw.text((670, 325), "no Shop Netfits", font=font_small, fill=(161, 161, 170))

        # Arrow
        draw.text((890, 290), "➔", font=font_huge, fill=(52, 211, 153))

        # Right formula part
        draw_rounded_rect(draw, (935, 265, width - 60, 360), radius=16, fill=(5, 46, 22), outline=(16, 185, 129), width=2)
        draw.text((950, 285), "+4 netfits", font=font_large, fill=(52, 211, 153))
        draw.text((950, 328), "na sua Carteira", font=font_small, fill=(167, 243, 208))

        draw_rounded_rect(draw, (650, 385, width - 60, 445), radius=12, fill=(24, 24, 32), outline=(39, 39, 42), width=1)
        draw.text((670, 403), "✨ 4 netfits para cada R$ 1,00 em todas as compras", font=font_text, fill=(250, 204, 21))

    elif scene.get("visual_type") == "receipt":
        # Left Receipt Card
        draw_rounded_rect(draw, (40, 195, 620, 470), radius=20, fill=(24, 24, 32), outline=(63, 63, 70), width=2)
        draw_rounded_rect(draw, (40, 195, 620, 245), radius=20, fill=(39, 39, 42))
        draw.text((65, 208), scene["receipt_title"], font=font_badge, fill=(255, 255, 255))

        ry = 265
        for label, val in scene["receipt_rows"]:
            draw.text((65, ry), label, font=font_small, fill=(161, 161, 170))
            draw.text((370, ry), val, font=font_med, fill=(255, 255, 255))
            ry += 40

        draw.line([(65, 380), (595, 380)], fill=(63, 63, 70), width=1)
        draw_rounded_rect(draw, (65, 395, 595, 450), radius=12, fill=(5, 46, 22), outline=(16, 185, 129), width=2)
        draw.text((85, 410), scene["receipt_total"], font=font_med, fill=(52, 211, 153))

        # Right side cards
        card_y = 195
        for title, desc in scene["cards"]:
            draw_rounded_rect(draw, (650, card_y, width - 40, card_y + 115), radius=16, fill=(24, 24, 32), outline=(39, 39, 42), width=1)
            draw.text((680, card_y + 24), title, font=font_large, fill=(52, 211, 153))
            draw.text((680, card_y + 68), desc, font=font_text, fill=(212, 212, 216))
            card_y += 135

    else:
        # Standard 3 cards layout
        card_y = 195
        for title, desc in scene["cards"]:
            draw_rounded_rect(draw, (40, card_y, width - 40, card_y + 75), radius=16, fill=(24, 24, 32), outline=(39, 39, 42), width=1)
            draw.text((65, card_y + 12), title, font=font_med, fill=(52, 211, 153))
            draw.text((65, card_y + 42), desc, font=font_text, fill=(212, 212, 216))
            card_y += 90

    # 5. Bottom Subtitle & Narration Box
    sub_y = 485
    draw_rounded_rect(draw, (40, sub_y, width - 40, sub_y + 175), radius=20, fill=(15, 23, 42), outline=(59, 130, 246), width=2)
    
    # Narration header
    draw_rounded_rect(draw, (60, sub_y + 15, 310, sub_y + 45), radius=8, fill=(30, 58, 138))
    draw.text((75, sub_y + 20), "🎙️ LOCUÇÃO OFICIAL (VOICEOVER)", font=font_badge, fill=(147, 197, 253))
    
    # Narration text (wrapped)
    narration = scene["narration"]
    words = narration.split()
    line1 = ""
    line2 = ""
    for w in words:
        if len(line1 + " " + w) < 70 and not line2:
            line1 += (" " if line1 else "") + w
        else:
            line2 += (" " if line2 else "") + w

    draw.text((65, sub_y + 58), f'"{line1}', font=font_med, fill=(255, 255, 255))
    if line2:
        draw.text((65, sub_y + 92), f'{line2}"', font=font_med, fill=(255, 255, 255))
    else:
        draw.text((65, sub_y + 58), f'"{line1}"', font=font_med, fill=(255, 255, 255))

    # Metric Banner
    draw_rounded_rect(draw, (60, sub_y + 130, width - 60, sub_y + 162), radius=6, fill=(24, 24, 27))
    draw.text((75, sub_y + 137), f"📌 {scene['metric_label']}: {scene['metric_val']}", font=font_small, fill=(52, 211, 153))

    # 6. Bottom Progress Bar
    pct = (scene["scene_num"]) / total_scenes
    bar_w = int(width * pct)
    draw.rectangle([(0, height - 10), (width, height)], fill=(39, 39, 42))
    draw.rectangle([(0, height - 10), (bar_w, height)], fill=(16, 185, 129))

    img.save(out_png, "PNG")

async def generate_scene_audio(text, out_mp3):
    communicate = edge_tts.Communicate(text, "pt-BR-AntonioNeural", rate="+6%")
    await communicate.save(out_mp3)

def get_audio_duration(mp3_path):
    cmd = [
        FFMPEG.replace("ffmpeg.exe", "ffprobe.exe"),
        "-v", "error",
        "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1",
        mp3_path
    ]
    res = subprocess.run(cmd, capture_output=True, text=True, check=True)
    return float(res.stdout.strip())

async def build_single_video(video_def):
    print(f"\n==========================================")
    print(f"🎬 GERANDO VÍDEO: {video_def['title']}")
    print(f"==========================================")
    
    vid_id = video_def["id"]
    vid_temp = os.path.join(TEMP_DIR, vid_id)
    os.makedirs(vid_temp, exist_ok=True)

    scenes = video_def["scenes"]
    total_scenes = len(scenes)
    scene_mp4s = []

    for sc in scenes:
        idx = sc["scene_num"]
        print(f"--- Processando Cena {idx}/{total_scenes}: {sc['headline']} ---")
        
        # 1. Audio
        audio_path = os.path.join(vid_temp, f"scene_{idx}.mp3")
        await generate_scene_audio(sc["narration"], audio_path)
        dur = get_audio_duration(audio_path)
        target_dur = max(dur + 1.2, 5.0)
        print(f"  Áudio gerado: {dur:.2f}s (duração total da cena: {target_dur:.2f}s)")

        # 2. Image
        img_path = os.path.join(vid_temp, f"scene_{idx}.png")
        render_scene_image(sc, video_def["title"], total_scenes, img_path)

        # 3. Create MP4 with padded audio
        scene_mp4 = os.path.join(vid_temp, f"scene_{idx}.mp4")
        cmd = [
            FFMPEG, "-y",
            "-loop", "1", "-i", img_path,
            "-i", audio_path,
            "-c:v", "libx264", "-tune", "stillimage",
            "-c:a", "aac", "-b:a", "192k",
            "-pix_fmt", "yuv420p",
            "-t", str(target_dur),
            "-shortest",
            scene_mp4
        ]
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
        scene_mp4s.append(scene_mp4)
        print(f"  Cena {idx} renderizada em MP4: {scene_mp4}")

    # 4. Concatenate all scenes into final video
    concat_list_path = os.path.join(vid_temp, "concat_list.txt")
    with open(concat_list_path, "w", encoding="utf-8") as f:
        for p in scene_mp4s:
            f.write(f"file '{p.replace('\\', '/')}'\n")

    print(f"--- Concatenando {len(scene_mp4s)} cenas no arquivo final... ---")
    final_output = video_def["output_file"]
    os.makedirs(os.path.dirname(final_output), exist_ok=True)

    cmd_concat = [
        FFMPEG, "-y",
        "-f", "concat",
        "-safe", "0",
        "-i", concat_list_path,
        "-c", "copy",
        final_output
    ]
    subprocess.run(cmd_concat, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)

    final_dur = get_audio_duration(final_output)
    size_mb = os.path.getsize(final_output) / (1024 * 1024)
    print(f"✅ VÍDEO CONCLUÍDO COM SUCESSO!")
    print(f"📁 Arquivo: {final_output}")
    print(f"⏱️ Duração: {final_dur:.2f}s | Tamanho: {size_mb:.2f} MB\n")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    os.makedirs(TEMP_DIR, exist_ok=True)
    for v in VIDEOS:
        await build_single_video(v)

if __name__ == "__main__":
    asyncio.run(main())
