param([int]$MaximumSize = 384)

$siteRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$assetRoot = (Resolve-Path (Join-Path $siteRoot 'assets\stargate')).Path
$icons = @(
  'amethyst-powder.png',
  'calcined-naquadah.png',
  'catalytic-flux.png',
  'chevron.png',
  'crystalline-matrix.png',
  'cryostabilized-crystal.png',
  'dormant-ingot.png',
  'impure-powder.png',
  'incomplete-billet.png',
  'naquadah-plate.png',
  'purified-granules.png',
  'raw-briquette.png',
  'refractory-briquette.png',
  'ring-segment.png',
  'stabilized-billet.png',
  'unstable-slag.png'
)

Add-Type -AssemblyName System.Drawing

foreach ($name in $icons) {
  $target = [System.IO.Path]::GetFullPath((Join-Path $assetRoot $name))
  if (-not $target.StartsWith($assetRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "Chemin d'asset invalide : $target"
  }
  if (-not (Test-Path -LiteralPath $target)) {
    throw "Icône absente : $target"
  }

  $source = [System.Drawing.Image]::FromFile($target)
  try {
    $scale = [Math]::Min([double]1, [double]$MaximumSize / [Math]::Max($source.Width, $source.Height))
    if ($scale -ge 1) { continue }

    $width = [Math]::Max(1, [Math]::Round($source.Width * $scale))
    $height = [Math]::Max(1, [Math]::Round($source.Height * $scale))
    $bitmap = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    try {
      $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
      try {
        $graphics.Clear([System.Drawing.Color]::Transparent)
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.DrawImage($source, 0, 0, $width, $height)
      } finally {
        $graphics.Dispose()
      }

      $temporary = "$target.optimized.png"
      $bitmap.Save($temporary, [System.Drawing.Imaging.ImageFormat]::Png)
    } finally {
      $bitmap.Dispose()
    }
  } finally {
    $source.Dispose()
  }

  Move-Item -LiteralPath $temporary -Destination $target -Force
  Write-Host "$name -> ${width}x${height}"
}
