Add-Type -AssemblyName System.Drawing

$width = 1024
$height = 500
$basePath = (Get-Location).Path
$iconPath = Join-Path $basePath "icon-512.png"

$iconImage = $null
if (Test-Path $iconPath) {
    $iconImage = [System.Drawing.Image]::FromFile($iconPath)
}

function Create-Banner {
    param([string]$text, [string]$filename)
    
    $bmp = New-Object System.Drawing.Bitmap($width, $height)
    $gfx = [System.Drawing.Graphics]::FromImage($bmp)
    
    $gfx.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $gfx.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias
    $gfx.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    
    # Gradient background
    $rect = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
    $startColor = [System.Drawing.Color]::FromArgb(255, 20, 15, 50)
    $endColor = [System.Drawing.Color]::FromArgb(255, 60, 30, 120)
    $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $startColor, $endColor, 45)
    $gfx.FillRectangle($brush, $rect)
    
    # Magical Stars
    $starBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(220, 255, 255, 180))
    $random = New-Object System.Random
    for ($i = 0; $i -lt 120; $i++) {
        $x = $random.Next(0, $width)
        $y = $random.Next(0, $height)
        $size = $random.Next(2, 7)
        $gfx.FillEllipse($starBrush, $x, $y, $size, $size)
    }
    
    # Draw magical glowing orbs in background
    $glowBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(40, 200, 150, 255))
    $gfx.FillEllipse($glowBrush, -100, -100, 400, 400)
    $gfx.FillEllipse($glowBrush, 800, 300, 300, 300)

    [float]$tx = 0
    [float]$tw = $width
    
    if ($iconImage -ne $null) {
        $iconRect = New-Object System.Drawing.Rectangle(60, 70, 360, 360)
        
        # Clip to circle
        $path = New-Object System.Drawing.Drawing2D.GraphicsPath
        $path.AddEllipse($iconRect)
        $gfx.SetClip($path)
        
        $gfx.DrawImage($iconImage, $iconRect)
        $gfx.ResetClip()
        
        # Golden magical frame
        $ringPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 255, 220, 100), 10)
        $gfx.DrawEllipse($ringPen, $iconRect)
        
        $tx = 450
        $tw = 550
    }
    
    # Determine Font Size
    $fontSize = 75
    if ($text.Length -gt 15) { $fontSize = 60 }
    if ($text.Length -gt 25) { $fontSize = 45 }
    
    # Magical Storybook Font (Georgia Italic is very fairy-tale)
    $fontStyle = [System.Drawing.FontStyle]::Bold -bor [System.Drawing.FontStyle]::Italic
    $font = New-Object System.Drawing.Font("Georgia", $fontSize, $fontStyle)
    
    $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    
    $shadowFormat = New-Object System.Drawing.StringFormat
    $shadowFormat.Alignment = [System.Drawing.StringAlignment]::Center
    $shadowFormat.LineAlignment = [System.Drawing.StringAlignment]::Center
    
    $zero = [float]0
    $txF  = [float]$tx
    $twF  = [float]$tw
    $hF   = [float]$height
    $tx5F = [float]($tx + 5)
    $fiveF = [float]5
    
    $rectF = New-Object System.Drawing.RectangleF($txF, $zero, $twF, $hF)
    $shadowRectF = New-Object System.Drawing.RectangleF($tx5F, $fiveF, $twF, $hF)
    
    # Drop shadow
    $blackBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(180, 0, 0, 0))
    $gfx.DrawString($text, $font, $blackBrush, $shadowRectF, $shadowFormat)
    
    # Main text
    $gfx.DrawString($text, $font, $textBrush, $rectF, $shadowFormat)
    
    $savePath = Join-Path $basePath $filename
    $bmp.Save($savePath, [System.Drawing.Imaging.ImageFormat]::Png)
    
    $gfx.Dispose()
    $bmp.Dispose()
    $brush.Dispose()
    $starBrush.Dispose()
    $glowBrush.Dispose()
    if ($iconImage -ne $null) { $ringPen.Dispose(); $path.Dispose() }
    $textBrush.Dispose()
    $blackBrush.Dispose()
    $font.Dispose()
}

Create-Banner -text "Crea Cuentos" -filename "banner_es.png"
Create-Banner -text "Story Maker" -filename "banner_en.png"
Create-Banner -text "Cr$([char]0x00E9)ateur d'Histoires" -filename "banner_fr.png"
Create-Banner -text "Geschichtenmacher" -filename "banner_de.png"
Create-Banner -text "Criar Hist$([char]0x00F3)rias" -filename "banner_pt.png"
Create-Banner -text "Crea Storie" -filename "banner_it.png"

if ($iconImage -ne $null) { $iconImage.Dispose() }
Write-Output "Banners with magical font and round logo created successfully!"
