Add-Type -AssemblyName System.Drawing
$files = @("icon-192.png", "icon-512.png")

foreach ($file in $files) {
    $path = Join-Path -Path (Get-Location).Path -ChildPath $file
    if (Test-Path $path) {
        # Cargamos la imagen
        $img = [System.Drawing.Bitmap]::FromFile($path)
        
        # Obtenemos el color exacto de la esquina superior izquierda
        $bgColor = $img.GetPixel(0, 0)
        Write-Host "Procesando $file - Color de fondo detectado: $($bgColor.Name)"
        
        # Hacemos transparente ese color en toda la imagen
        $img.MakeTransparent($bgColor)
        
        # Guardamos como un archivo temporal (porque el original está en uso por Bitmap)
        $tempPath = $path + ".tmp.png"
        $img.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
        
        # Liberamos memoria y archivo
        $img.Dispose()
        
        # Reemplazamos el original
        Move-Item -Path $tempPath -Destination $path -Force
        Write-Host "¡Fondo transparente aplicado en $file!"
    } else {
        Write-Host "Archivo no encontrado: $file"
    }
}
