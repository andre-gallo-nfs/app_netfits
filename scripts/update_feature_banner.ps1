Add-Type -AssemblyName System.Drawing

$banner = New-Object System.Drawing.Bitmap(1024, 500)
$gb = [System.Drawing.Graphics]::FromImage($banner)
$gb.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gb.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$gb.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Deep Obsidian background
$bgColor = [System.Drawing.ColorTranslator]::FromHtml("#09090b")
$gb.Clear($bgColor)

# Subtle energetic lime green accent glow / top bar
$accentBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml("#84cc16"))
$gb.FillRectangle($accentBrush, 0, 0, 1024, 4)

# Draw Netfits Mark Icon (Centered at top)
$markPath = "c:\Users\aacga\Projetos\app_netfits\netfits-mark.png"
if (Test-Path $markPath) {
    $markSrc = [System.Drawing.Image]::FromFile($markPath)
    $markSize = 130
    $posX = [int]((1024 - $markSize) / 2)
    $posY = 80
    $gb.DrawImage($markSrc, $posX, $posY, $markSize, $markSize)
    $markSrc.Dispose()
}

$format = New-Object System.Drawing.StringFormat
$format.Alignment = [System.Drawing.StringAlignment]::Center

# 1. "Netfits" with capital N
$nameFont = New-Object System.Drawing.Font("Segoe UI", 48, [System.Drawing.FontStyle]::Bold)
$whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml("#ffffff"))
$gb.DrawString("Netfits", $nameFont, $whiteBrush, 512, 225, $format)

# 2. PMT: "Fazer cada movimento valer mais."
$pmtFont = New-Object System.Drawing.Font("Segoe UI", 24, [System.Drawing.FontStyle]::Bold)
$gb.DrawString("Fazer cada movimento valer mais.", $pmtFont, $accentBrush, 512, 320, $format)

# 3. Subtle ecosystem tagline
$subFont = New-Object System.Drawing.Font("Segoe UI", 14, [System.Drawing.FontStyle]::Regular)
$grayBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml("#a1a1aa"))
$gb.DrawString("A REDE DA LONGEVIDADE ATIVA", $subFont, $grayBrush, 512, 385, $format)

# Save to project and Desktop
$outProject = "c:\Users\aacga\Projetos\app_netfits\playstore_feature_1024x500.png"
$outDesktop = "C:\Users\aacga\OneDrive\Desktop\Netfits_PlayStore_Imagens\playstore_feature_1024x500.png"

$banner.Save($outProject, [System.Drawing.Imaging.ImageFormat]::Png)
Copy-Item $outProject -Destination $outDesktop -Force

$nameFont.Dispose()
$pmtFont.Dispose()
$subFont.Dispose()
$whiteBrush.Dispose()
$accentBrush.Dispose()
$grayBrush.Dispose()
$format.Dispose()
$gb.Dispose()
$banner.Dispose()

Write-Output "playstore_feature_1024x500.png updated with Netfits and PMT!"
