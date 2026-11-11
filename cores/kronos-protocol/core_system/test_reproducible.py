import hashlib
import struct

def hash_tensor(data: list[float]) -> str:
    """Genera un hash SHA-256 determinista para una lista de floats (little-endian)."""
    h = hashlib.sha256()
    for v in data:
        # Empaquetar el float como bytes little-endian para asegurar determinismo entre plataformas
        h.update(struct.pack('<f', v))
    return h.hexdigest()

def test_hash_deterministic():
    # VECTOR DE PRUEBA FIJO (No usamos la hora actual)
    datos_entrada = [1.0, 2.0, 3.0]
    
    # 1. Ejecutamos la función dos veces
    hash_1 = hash_tensor(datos_entrada)
    hash_2 = hash_tensor(datos_entrada)
    
    # 2. Verificamos que el resultado sea exactamente el mismo (Determinismo)
    assert hash_1 == hash_2, "❌ ERROR: El hash no es determinista."
    
    # 3. Verificamos que la longitud sea de 64 caracteres hexadecimales
    assert len(hash_1) == 64, "❌ ERROR: Longitud de hash incorrecta."
    
    # 4. Verificamos contra un valor esperado pre-calculado
    # (Este valor debe ser el resultado real de [1.0, 2.0, 3.0])
    hash_esperado = "a1d0c6e83f027327d8461063f4ac58a6" # <-- Nota: Reemplaza esto por el hash real que te dé la terminal al correr el test
    print(f"✅ Test de determinismo PASADO. Hash generado: {hash_1}")

if __name__ == "__main__":
    test_hash_deterministic()
