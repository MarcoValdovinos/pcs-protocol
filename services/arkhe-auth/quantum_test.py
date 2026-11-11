from dilithium_py.ml_dsa import ML_DSA_87
import time

print('🌀 INICIANDO PRUEBA DE CIBERSEGURIDAD POST-CUÁNTICA (ML-DSA-87)')
print('=' * 60)

# 1. Generar par de llaves (Pública y Privada)
inicio = time.time()
pk, sk = ML_DSA_87.keygen()
print(f'✅ Llaves generadas en {time.time() - inicio:.4f} segundos')
print(f'   Llave Pública (primeros 40 hex): {pk.hex()[:40]}...')

# 2. Firmar un mensaje (Simulando una acción de la IA)
mensaje = b'Accion: transferir 1000 ARKHE. Timestamp: 2026-10-25T12:00:00Z'
inicio = time.time()
firma = ML_DSA_87.sign(sk, mensaje)
print(f'\n✅ Mensaje firmado en {time.time() - inicio:.4f} segundos')
print(f'   Firma (primeros 40 hex): {firma.hex()[:40]}...')

# 3. Verificar la firma (El sistema de ARKHE Sentinel)
inicio = time.time()
es_valida = ML_DSA_87.verify(pk, mensaje, firma)
print(f'\n✅ Verificación completada en {time.time() - inicio:.4f} segundos')
print(f'   ¿Es válida la firma? {"SÍ ✅" if es_valida else "NO ❌"}')

# 4. Intentar falsificar la firma (Simulando a un hacker)
mensaje_alterado = b'Accion: transferir 1000000 ARKHE. Timestamp: 2026-10-25T12:00:00Z'
es_valida_alterada = ML_DSA_87.verify(pk, mensaje_alterado, firma)
print(f'\n🚨 Intentando verificar mensaje ALTERADO...')
if es_valida_alterada:
    print('   ¿Es válida la firma alterada? SÍ ❌ (PELIGRO)')
else:
    print('   ¿Es válida la firma alterada? NO ✅ (ATAQUE BLOQUEADO)')

print('=' * 60)
print('🌀 PRUEBA CUÁNTICA COMPLETADA EXITOSAMENTE')
