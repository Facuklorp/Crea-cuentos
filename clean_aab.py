import zipfile
import shutil
import sys
import os

def remove_signature_from_aab(input_aab_path, output_aab_path):
    print(f"Borrando la firma de WebIntoApp de {input_aab_path}...")
    with zipfile.ZipFile(input_aab_path, 'r') as z_in:
        with zipfile.ZipFile(output_aab_path, 'w', compression=zipfile.ZIP_DEFLATED) as z_out:
            for item in z_in.infolist():
                if not item.filename.startswith('META-INF/'):
                    z_out.writestr(item, z_in.read(item.filename))
    print(f"AAB limpio y preparado en {output_aab_path}")

input_zip = r"C:\Users\tecno\Downloads\Crea Cuentos 2.1.zip"
temp_extract_dir = r"C:\Users\tecno\Downloads\temp_aab_extract"

if not os.path.exists(temp_extract_dir):
    os.makedirs(temp_extract_dir)

print("Extrayendo AAB del ZIP de la v2.1...")
with zipfile.ZipFile(input_zip, 'r') as z:
    z.extract("android/app-release.aab", temp_extract_dir)

extracted_aab = os.path.join(temp_extract_dir, "android", "app-release.aab")
output_aab = r"C:\Users\tecno\OneDrive\Documentos\Hola\crea-cuentos\app-release-unsigned.aab"

remove_signature_from_aab(extracted_aab, output_aab)
