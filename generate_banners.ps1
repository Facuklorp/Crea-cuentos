Add-Type -AssemblyName System.Drawing

$width = 1024
$height = 500

function Create-Banner {
    param([string]$text, [string]$filename)
    
    $bmp = New-Object System.Drawing.Bitmap($width, $height)
    $gfx = [System.Drawing.Graphics]::FromImage($bmp)
    
    # Enable high quality rendering
    $gfx.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $gfx.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias
    
    # Create dark magical background
    $rect = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
    $startColor = [System.Drawing.Color]::FromArgb(255, 37, 21, 82)
    $endColor = [System.Drawing.Color]::FromArgb(255, 60, 100, 200)
    $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $startColor, $endColor, 45)
    $gfx.FillRectangle($brush, $rect)
    
    # Draw some shiny yellow stars
    $starBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 230, 100))
    $random = New-Object System.Random
    for ($i = 0; $i -lt 80; $i++) {
        $x = $random.Next(0, $width)
        $y = $random.Next(0, $height)
        $size = $random.Next(2, 6)
        $gfx.FillEllipse($starBrush, $x, $y, $size, $size)
    }
    
    # Optional: Draw a "moon" in the corner
    $moonBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 214, 102))
    $gfx.FillEllipse($moonBrush, 850, 50, 120, 120)
    # Mask to make it a crescent
    $shadowBrush = New-Object System.Drawing.SolidBrush($endColor)
    $gfx.FillEllipse($shadowBrush, 820, 30, 120, 120)

    # Text rendering
    $font = New-Object System.Drawing.Font("Trebuchet MS", 65, [System.Drawing.FontStyle]::Bold)
    $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    
    # Soft drop shadow for text
    $shadowFormat = New-Object System.Drawing.StringFormat
    $shadowFormat.Alignment = [System.Drawing.StringAlignment]::Center
    $shadowFormat.LineAlignment = [System.Drawing.StringAlignment]::Center
    
    # Use RectangleF instead of Rectangle for DrawString
    $rectF = New-Object System.Drawing.RectangleF(0, 0, $width, $height)
    $shadowRectF = New-Object System.Drawing.RectangleF(5, 5, $width, $height)
    
    $blackBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(150, 0, 0, 0))
    $gfx.DrawString($text, $font, $blackBrush, $shadowRectF, $shadowFormat)
    
    # Main white text
    $format = New-Object System.Drawing.StringFormat
    $format.Alignment = [System.Drawing.StringAlignment]::Center
    $format.LineAlignment = [System.Drawing.StringAlignment]::Center
    $gfx.DrawString($text, $font, $textBrush, $rectF, $format)
    
    $savePath = Join-Path (Get-Location).Path $filename
    $bmp.Save($savePath, [System.Drawing.Imaging.ImageFormat]::Png)
    
    $gfx.Dispose()
    $bmp.Dispose()
    $brush.Dispose()
    $starBrush.Dispose()
    $moonBrush.Dispose()
    $textBrush.Dispose()
    $shadowBrush.Dispose()
    $blackBrush.Dispose()
    $font.Dispose()
}

Create-Banner -text "Crea Cuentos" -filename "banner_es.png"
Create-Banner -text "Story Maker" -filename "banner_en.png"
Create-Banner -text "Cr$([char]0x00E9)ateur d'Histoires" -filename "banner_fr.png"
Create-Banner -text "Geschichtenmacher" -filename "banner_de.png"
Create-Banner -text "Criar Hist$([char]0x00F3)rias" -filename "banner_pt.png"
Create-Banner -text "Crea Storie" -filename "banner_it.png"

Write-Output "Banners created successfully!"
