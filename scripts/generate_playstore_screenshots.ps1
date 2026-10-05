Add-Type -AssemblyName System.Drawing

function Create-MobileMockup {
    param(
        [string]$outputPath,
        [string]$headline,
        [string]$subheadline,
        [string]$imagePath,
        [string]$badgeText,
        [string[]]$stats
    )

    $w = 1080
    $h = 1920
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias

    # Background
    $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml("#09090b"))
    $g.FillRectangle($bgBrush, 0, 0, $w, $h)

    # Top Brand Header
    $brandFont = New-Object System.Drawing.Font("Arial", 28, [System.Drawing.FontStyle]::Bold)
    $brandBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml("#ffffff"))
    $accentBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml("#84cc16"))
    $textMutedBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml("#a1a1aa"))
    $cardBgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml("#18181b"))
    $cardBorderPen = New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml("#27272a"), 3)

    # Netfits Logo in Top Bar
    $logoPath = "c:\Users\aacga\Projetos\app_netfits\netfits-logo.png"
    if (Test-Path $logoPath) {
        $logo = [System.Drawing.Image]::FromFile($logoPath)
        $lw = 320
        $lh = [int]($logo.Height * ($lw / $logo.Width))
        $g.DrawImage($logo, 60, 60, $lw, $lh)
        $logo.Dispose()
    }

    # Badge Pill
    $badgeFont = New-Object System.Drawing.Font("Arial", 16, [System.Drawing.FontStyle]::Bold)
    $badgeBgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(40, 132, 204, 22))
    $g.FillRectangle($badgeBgBrush, 60, 160, 360, 50)
    $g.DrawString($badgeText.ToUpper(), $badgeFont, $accentBrush, 80, 172)

    # Headline
    $headFont = New-Object System.Drawing.Font("Arial", 46, [System.Drawing.FontStyle]::Bold)
    $g.DrawString($headline, $headFont, $brandBrush, 60, 240)

    # Subheadline
    $subFont = New-Object System.Drawing.Font("Arial", 24, [System.Drawing.FontStyle]::Regular)
    $g.DrawString($subheadline, $subFont, $textMutedBrush, 60, 350)

    # Main Card Container
    $cardX = 60
    $cardY = 440
    $cardW = 960
    $cardH = 1380
    $g.FillRectangle($cardBgBrush, $cardX, $cardY, $cardW, $cardH)
    $g.DrawRectangle($cardBorderPen, $cardX, $cardY, $cardW, $cardH)

    # Inside Card: Image preview if available
    if ($imagePath -and (Test-Path $imagePath)) {
        $innerImg = [System.Drawing.Image]::FromFile($imagePath)
        $imgW = $cardW - 40
        $imgH = 680
        $g.DrawImage($innerImg, ($cardX + 20), ($cardY + 20), $imgW, $imgH)
        $innerImg.Dispose()
    }

    # Stats / Key Info inside Card
    $statStartY = $cardY + 730
    $statFontTitle = New-Object System.Drawing.Font("Arial", 26, [System.Drawing.FontStyle]::Bold)
    $statFontVal = New-Object System.Drawing.Font("Arial", 32, [System.Drawing.FontStyle]::Bold)
    $statFontSub = New-Object System.Drawing.Font("Arial", 20, [System.Drawing.FontStyle]::Regular)

    $boxY = $statStartY
    foreach ($item in $stats) {
        $parts = $item.Split("|")
        $sTitle = $parts[0]
        $sVal = $parts[1]
        $sSub = $parts[2]

        $statBoxBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml("#27272a"))
        $g.FillRectangle($statBoxBrush, ($cardX + 30), $boxY, ($cardW - 60), 160)

        $g.DrawString($sTitle, $statFontSub, $textMutedBrush, ($cardX + 60), ($boxY + 20))
        $g.DrawString($sVal, $statFontVal, $accentBrush, ($cardX + 60), ($boxY + 55))
        $g.DrawString($sSub, $statFontSub, $brandBrush, ($cardX + 60), ($boxY + 110))

        $statBoxBrush.Dispose()
        $boxY += 190
    }

    $bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bgBrush.Dispose()
    $brandBrush.Dispose()
    $accentBrush.Dispose()
    $textMutedBrush.Dispose()
    $cardBgBrush.Dispose()
    $cardBorderPen.Dispose()
    $badgeBgBrush.Dispose()
    $brandFont.Dispose()
    $badgeFont.Dispose()
    $headFont.Dispose()
    $subFont.Dispose()
    $statFontTitle.Dispose()
    $statFontVal.Dispose()
    $statFontSub.Dispose()
    $g.Dispose()
    $bmp.Dispose()
    Write-Output "Generated: $outputPath"
}

# 1. Screenshot Treinos & Longevidade
Create-MobileMockup -outputPath "c:\Users\aacga\Projetos\app_netfits\playstore_screen_1.png" `
    -badgeText "Longevidade Ativa" `
    -headline "Transforme seu treino`nem longevidade e saúde" `
    -subheadline "Acompanhe passos, treinos e frequência com telemetria." `
    -imagePath "c:\Users\aacga\Projetos\app_netfits\feed-runner.jpg" `
    -stats @(
        "TREINO CONCLUÍDO|Corrida 5.2 km · 28 min|Zona 3 aeróbica · 380 kcal ativas",
        "RECOMPENSA NETFITS|+50 Moedas Acumuladas|Saldo pronto para resgate no shopping",
        "PROGRESSÃO DE NÍVEL|Nível Prata (72%)|Faltam 280 pts para o Nível Ouro"
    )

# 2. Screenshot Feed da Comunidade
Create-MobileMockup -outputPath "c:\Users\aacga\Projetos\app_netfits\playstore_screen_2.png" `
    -badgeText "Comunidade Esportiva" `
    -headline "Inspire e seja inspirado`npela sua rede de atletas" `
    -subheadline "Compartilhe fotos de treinos, metas e evolução sem toxidade." `
    -imagePath "c:\Users\aacga\Projetos\app_netfits\feed-cyclist.jpg" `
    -stats @(
        "FEED ATIVO|Pedal na Serra · 42 km|84 curtidas · 16 comentários na comunidade",
        "DESAFIO DO MÊS|Meta 100k Concluída|Medalha de consistência desbloqueada",
        "REDE DE SUPERAÇÃO|Atletas & Praticantes|Ambiente saudável focado em bem-estar"
    )

# 3. Screenshot Marketplace & Benefícios
Create-MobileMockup -outputPath "c:\Users\aacga\Projetos\app_netfits\playstore_screen_3.png" `
    -badgeText "Marketplace Exclusivo" `
    -headline "Resgate produtos e vantagens`ncom o seu esforço" `
    -subheadline "Suplementos, roupas esportivas, academias e consultas." `
    -imagePath "c:\Users\aacga\Projetos\app_netfits\product-liquidz.jpg" `
    -stats @(
        "NUTRIÇÃO ESPORTIVA|Whey Protein & Eletrólitos|Desconto imediato com moedas Netfits",
        "REDE DE PARCEIROS|Smart Fit & Clínicas|Vouchers homologados para você e família",
        "CARTEIRA DIGITAL|Saldo Transparente|Sem mensalidades ocultas ou taxas bancárias"
    )

Write-Output "All 3 screenshots successfully created!"
