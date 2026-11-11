#!/usr/bin/env python3
"""Valida el Contrato de Atribución KRONOS contra el schema JSON."""
import json
import sys
from pathlib import Path

try:
    import jsonschema
except ImportError:
    print("❌ Falta jsonschema. Instala con: pip install jsonschema")
    sys.exit(1)

ROOT = Path(__file__).parent.parent
SCHEMA = ROOT / "01-spec/schemas/contrato-atribucion.schema.json"
EJEMPLO = ROOT / "01-spec/schemas/ejemplo-contrato-atribucion.json"


def main() -> int:
    print("=== Validación del Contrato de Atribución KRONOS ===")

    # Test 1: schema y ejemplo cargan como JSON
    try:
        schema = json.loads(SCHEMA.read_text(encoding="utf-8"))
        ejemplo = json.loads(EJEMPLO.read_text(encoding="utf-8"))
    except json.JSONDecodeError as e:
        print(f"❌ JSON inválido: {e}")
        return 1
    print("[PASS] Schema y ejemplo cargan como JSON")

    # Test 2: ejemplo válido pasa la validación
    try:
        jsonschema.validate(instance=ejemplo, schema=schema)
        print("[PASS] Ejemplo válido contra el schema")
    except jsonschema.ValidationError as e:
        print(f"❌ Ejemplo inválido: {e.message}")
        print(f"   Path: {list(e.absolute_path)}")
        return 1

    # Test 3: ejemplo con autonomía inválida falla
    invalido = json.loads(json.dumps(ejemplo))
    invalido["autonomia"] = {"nivel": "magico", "acciones_requieren_aprobacion": [], "limite_operativo": "datos"}
    try:
        jsonschema.validate(instance=invalido, schema=schema)
        print("❌ Error: autonomía inválida pasó la validación")
        return 1
    except jsonschema.ValidationError:
        print("[PASS] Autonomía inválida detectada")

    # Test 4: ejemplo con DID mal formado falla
    invalido2 = json.loads(json.dumps(ejemplo))
    invalido2["agente"]["did"] = "no-es-un-did"
    try:
        jsonschema.validate(instance=invalido2, schema=schema)
        print("❌ Error: DID inválido pasó la validación")
        return 1
    except jsonschema.ValidationError:
        print("[PASS] DID inválido detectado")

    # Test 5: ejemplo sin garante_legal falla
    invalido3 = json.loads(json.dumps(ejemplo))
    del invalido3["garante_legal"]
    try:
        jsonschema.validate(instance=invalido3, schema=schema)
        print("❌ Error: contrato sin garante_legal pasó la validación")
        return 1
    except jsonschema.ValidationError:
        print("[PASS] Falta de garante_legal detectada")

    print("\n✅ Todos los tests pasaron")
    return 0


if __name__ == "__main__":
    sys.exit(main())
