import urllib.request
from urllib.parse import urljoin
from bs4 import BeautifulSoup
import hashlib
import json
import os

base_url = 'https://vault.fbi.gov'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0'}

os.makedirs('vault_downloads', exist_ok=True)
registro = []

try:
    req = urllib.request.Request(base_url, headers=headers)
    html = urllib.request.urlopen(req).read()
    soup = BeautifulSoup(html, 'html.parser')

    for link in soup.find_all('a', href=True):
        texto = link.get_text(strip=True)
        if texto and ('Part' in texto or 'Final' in texto):
            doc_url = urljoin(base_url, link['href']) # Termina en /view
            
            # CONSTRUIMOS LA URL DE DESCARGA DIRECTA DE PLONE
            download_url = doc_url.replace('/view', '/@@download/file')
            print(f"[+] Analizando: {texto[:30]}...")
            print(f"    -> URL Descarga: {download_url}")
            
            try:
                req_pdf = urllib.request.Request(download_url, headers=headers)
                pdf_data = urllib.request.urlopen(req_pdf).read()
                
                # VERIFICACIÓN: ¿Es un PDF real?
                if pdf_data.startswith(b'%PDF'):
                    nombre = f"vault_downloads/{texto[:20].replace(' ', '_')}.pdf"
                    with open(nombre, 'wb') as f:
                        f.write(pdf_data)
                        
                    h = hashlib.sha256(pdf_data).hexdigest()
                    registro.append({'titulo': texto, 'archivo': nombre, 'sha256': h})
                    print(f"  -> ✅ PDF REAL: {h[:16]}... ({len(pdf_data)//1024} KB)")
                else:
                    print(f"  -> ⚠️ Sigue siendo HTML, no PDF.")
            except Exception as e:
                print(f"  -> ❌ Error: {e}")
                
    with open('arkhe_vault_pdfs.json', 'w') as f:
        json.dump({'total': len(registro), 'documentos': registro}, f, indent=2)
    print(f"\n[OK] Terminado. {len(registro)} PDFs reales descargados.")

except Exception as e:
    print(f"[ERROR GLOBAL] {e}")
