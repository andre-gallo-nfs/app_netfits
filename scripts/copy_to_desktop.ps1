$target = "C:\Users\aacga\OneDrive\Desktop\Netfits_PlayStore_Imagens"
if (Test-Path $target) { Remove-Item $target -Recurse -Force }
New-Item -ItemType Directory -Path $target -Force

$files = @(
    "c:\Users\aacga\Projetos\app_netfits\playstore_icon_512.png",
    "c:\Users\aacga\Projetos\app_netfits\playstore_feature_1024x500.png",
    "c:\Users\aacga\Projetos\app_netfits\playstore_screen_1.png",
    "c:\Users\aacga\Projetos\app_netfits\playstore_screen_2.png",
    "c:\Users\aacga\Projetos\app_netfits\playstore_screen_3.png"
)

foreach ($f in $files) {
    Copy-Item $f -Destination $target -Force
}

Get-ChildItem $target | Select-Object Name, Length
