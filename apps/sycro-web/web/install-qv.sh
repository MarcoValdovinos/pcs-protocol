#!/bin/bash
echo "🔱 Instalando QV-KRONOS Binarios..."
pip install requests qiskit qiskit-aer qiskit-ibm-runtime pycryptodome pqcrypto
echo "Probando QV-033E49FBCA0F8437..."
python3 -c "
import requests
r=requests.post('https://sycro-valdovinos.vercel.app/api/validar', json={'folio':'2608276846490-9H.CNLK','sello_qv':'QV-033E49FBCA0F8437'})
print('API validar:', r.json())
"
echo "✅ Listo. Ahora corre: python3 sycro_quantum.py"
