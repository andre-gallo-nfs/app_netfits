# scripts/staging_tunnel_keepalive.ps1
param(
  [int]$LocalPort = 3000
)

$urlFile = Join-Path $PSScriptRoot "staging_url.txt"

function Run-TunnelOnce {
  Write-Host "[Tunnel] Iniciando túnel SSH com localhost.run..."
  $processInfo = New-Object System.Diagnostics.ProcessStartInfo
  $processInfo.FileName = "ssh"
  $processInfo.Arguments = "-R 80:localhost:$LocalPort -o StrictHostKeyChecking=no -o ServerAliveInterval=15 -o ServerAliveCountMax=4 nokey@localhost.run"
  $processInfo.RedirectStandardOutput = $true
  $processInfo.RedirectStandardError = $true
  $processInfo.UseShellExecute = $false
  $processInfo.CreateNoWindow = $true

  $process = New-Object System.Diagnostics.Process
  $process.StartInfo = $processInfo
  $process.Start() | Out-Null

  $tunnelUrl = $null
  $sw = [System.Diagnostics.Stopwatch]::StartNew()

  while (-not $process.HasExited -and $sw.ElapsedMilliseconds -lt 25000) {
    $line = $process.StandardOutput.ReadLine()
    if ($line -match "https://([a-zA-Z0-9]+\.lhr\.life)") {
      $tunnelUrl = $matches[0]
      Write-Host "[Tunnel] URL detectada: $tunnelUrl"
      Set-Content -Path $urlFile -Value $tunnelUrl -Encoding UTF8
      break
    }
  }

  if (-not $tunnelUrl) {
    Write-Host "[Tunnel] Nao foi possivel capturar a URL em 25s."
    try { $process.Kill() } catch {}
    return
  }

  Write-Host "[Tunnel] Ativo em $tunnelUrl. Mantendo heartbeat a cada 45 segundos..."
  while (-not $process.HasExited) {
    Start-Sleep -Seconds 45
    if ($tunnelUrl -and -not $process.HasExited) {
      try {
        $null = Invoke-WebRequest -Uri "$tunnelUrl/feed" -UseBasicParsing -TimeoutSec 10 -Method Head
      } catch {}
    }
  }

  Write-Host "[Tunnel] Conexao SSH finalizada."
  try { $process.Kill() } catch {}
}

while ($true) {
  Run-TunnelOnce
  Write-Host "[Tunnel] Reiniciando conexao em 5 segundos..."
  Start-Sleep -Seconds 5
}
