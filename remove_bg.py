from PIL import Image, ImageDraw
import sys

def remove_white_corners(img_path):
    print(f"Modificando {img_path}...")
    try:
        img = Image.open(img_path).convert('RGBA')
        
        # Color temporal fucsia para el relleno (asumiendo que el logo no tiene este color exacto en los bordes)
        temp_color = (255, 0, 255, 255)
        
        # Rellenamos desde las 4 esquinas buscando color blanco o cercano al blanco
        width, height = img.size
        ImageDraw.floodfill(img, (0, 0), temp_color, thresh=30)
        ImageDraw.floodfill(img, (width - 1, 0), temp_color, thresh=30)
        ImageDraw.floodfill(img, (0, height - 1), temp_color, thresh=30)
        ImageDraw.floodfill(img, (width - 1, height - 1), temp_color, thresh=30)
        
        # Ahora convertimos ese color temporal a transparente
        datas = img.getdata()
        newData = []
        for item in datas:
            if item[0] == 255 and item[1] == 0 and item[2] == 255 and item[3] == 255:
                # Hacerlo transparente
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
                
        img.putdata(newData)
        
        # Guardar la imagen sobreescribiendo la actual
        img.save(img_path, "PNG")
        print(f"¡Listo! {img_path} ahora tiene fondo transparente.")
    except Exception as e:
        print(f"Error procesando {img_path}: {e}")

if __name__ == '__main__':
    remove_white_corners("icon-192.png")
    remove_white_corners("icon-512.png")
