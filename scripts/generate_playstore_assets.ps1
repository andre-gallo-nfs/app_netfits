Add-Type -AssemblyName System.Drawing

# 1. Generate 512x512 Icon
$markPath = "c:\Users\aacga\Projetos\app_netfits\netfits-mark.png"
$src = [System.Drawing.Image]::FromFile($markPath)
$icon = New-Object System.Drawing.Bitmap(512, 512)
$g = [System.Drawing.Graphics]::FromImage($icon)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($src, 0, 0, 512, 512)
$icon.Save("c:\Users\aacga\Projetos\app_netfits\playstore_icon_512.png", [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$icon.Dispose()
$src.Dispose()
Write-Output "playstore_icon_512.png created!"

# 2. Generate 1024x500 Feature Graphic (Banner)
# Netfits dark theme background (#09090b) with centered netfits-logo or netfits-mark
$banner = New-Object System.Drawing.Bitmap(1024, 500)
$gb = [System.Drawing.Graphics]::FromImage($banner)
$gb.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$bgColor = [System.Drawing.ColorTranslator]::FromHtml("#09090b")
$gb.Clear($bgColor)

# Draw Logo
$logoPath = "c:\Users\aacga\Projetos\app_netfits\netfits-logo.png"
if (Test-Path $logoPath) {
    $logoSrc = [System.Drawing.Image]::FromFile($logoPath)
    # netfits-logo is 1699x608. Scale to fit comfortably (e.g. width 500, height 179)
    $targetWidth = 520
    $targetHeight = [int]($logoSrc.Height * ($targetWidth / $logoSrc.Width))
    $posX = [int]((1024 - $targetWidth) / 2)
    $posY = [int]((500 - $targetHeight) / 2) - 20
    $gb.DrawImage($logoSrc, $posX, $posY, $targetWidth, $targetHeight)
    $logoSrc.Dispose()
}

# Subtitle text
$font = New-Object System.Drawing.Font("Arial", 16, [System.Drawing.FontStyle]::Bold)
$brush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml("#84cc16"))
$format = New-Object System.Drawing.StringFormat
$format.Alignment = [System.Drawing.StringAlignment]::Center
$gb.DrawString("A REDE DA LONGEVIDADE ATIVA", $font, $brush, 512, 340, $format)

$fontSub = New-Object System.Drawing.Font("Arial", 11, [System.Drawing.FontStyle]::Regular)
$brushSub = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml("#a1a1aa"))
$gb.DrawString("Treine · Acumule Moedas · Resgate Benefícios", $fontSub, $brushSub, 512, 375, $format)

$banner.Save("c:\Users\aacga\Projetos\app_netfits\playstore_feature_1024x500.png", [System.Drawing.Imaging.ImageFormat]::Png)
$font.Dispose()
$fontSub.Dispose()
$brush.Dispose()
$brushSub.Dispose()
$gb.Dispose()
$banner.Dispose()
Write-Output "playstore_feature_1024x500.png created!"
