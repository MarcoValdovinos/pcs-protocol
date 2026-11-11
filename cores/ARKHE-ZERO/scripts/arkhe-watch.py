#!/usr/bin/env python3
import urllib.request
from bs4 import BeautifulSoup
import hashlib
import json
from datetime import datetime

def sellar_vault():
    print('[ARKHE-ZERO] Escaneando FBI Vault...')
    url = 'https://vault.fbi.gov'
    
    # AÑADIMOS HEADERS DE NAVEGADOR REAL PARA EVITAR EL 403
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1'
    }
    
    req = urllib.request.Request(url, headers=headers)
    
    try:
        html = urllib.request.urlopen(req).read()
        soup = BeautifulSoup(html, 'html.parser')
        
        sellos = []
        # Buscamos los enlaces de la sección Recently Added
        for link in soup.find_all('a', href=True):
            texto = link.get_text(strip=True)
            # Filtramos para obtener solo los títulos de los documentos
            if texto and len(texto) > 10 and 'Part' in texto or 'Final' in texto:
                hash_obj = hashlib.sha256(texto.encode('utf-8')).hexdigest()
                sellos.append({'titulo': texto, 'hash': hash_obj[:16] + '...'})
        
        sello_final = {
            'timestamp': datetime.now().isoformat(),
            'fuente': url,
            'total_registros': len(sellos),
            'sellos': sellos[:5]
        }
        
        with open('arkhe_vault_seal.json', 'w') as f:
            json.dump(sello_final, f, indent=2)
            
        print('[OK] Sello generado con exito en arkhe_vault_seal.json')
        for s in sello_final['sellos']:
            print(f"  - {s['titulo'][:50]} -> {s['hash']}")
            
    except Exception as e:
        print(f'[ERROR] {e}')

if __name__ == '__main__':
    sellar_vault()
