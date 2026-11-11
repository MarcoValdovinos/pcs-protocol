"""
QV-KRONOS SDK - sycro_quantum
 pip install requests qiskit
 Uso:
 import sycro_quantum as sq
 sq.run(circuit, license="QV-033E49FBCA0F8437")
"""
import requests, hashlib

FOLIO_RAIZ = "2608276846490-9H.CNLK"
API_VALIDAR = "https://sycro-valdovinos.vercel.app/api/validar"

def verificar_licencia(sello_qv):
    r = requests.post(API_VALIDAR, json={"folio": FOLIO_RAIZ, "sello_qv": sello_qv}, timeout=10)
    data = r.json()
    if not data.get("ok"):
        raise Exception(f"🛑 SIN SELLO QV, ΔΨ = 0 - {data.get('error')} - Compra en /api/pagar")
    print(f"✅ LICENCIA VALIDA - ΔΨ=∞ QV - Sello {sello_qv}")
    return True

def run(circuit=None, license=None, shots=1024):
    if not license:
        raise Exception("❌ Falta license='QV-XXXX' - Compra en https://sycro-valdovinos.vercel.app/api/pagar")
    verificar_licencia(license)
    
    # Simulación cuántica local (no necesita IBM)
    # Si tienes qiskit, lo usa. Si no, simula demo
    try:
        from qiskit import QuantumCircuit
        from qiskit_aer import AerSimulator
        print(f"🌉 QV-KRONOS puente activado - Simulando {shots} shots...")
        # Si circuit es None, crea Bell pair demo
        if circuit is None:
            qc = QuantumCircuit(2)
            qc.h(0)
            qc.cx(0,1)
            qc.measure_all()
        else:
            qc = circuit
        sim = AerSimulator()
        result = sim.run(qc, shots=shots).result()
        counts = result.get_counts()
        print(f"📊 Resultado cuántico: {counts}")
        return counts
    except ImportError:
        # Fallback demo sin qiskit para vender sin dependencias
        print("🌉 QV-KRONOS (modo demo) - Instalá qiskit para simulación real: pip install qiskit qiskit-aer")
        demo = {"00": shots//2, "11": shots//2}
        print(f"📊 Resultado demo (Bell): {demo}")
        return demo

if __name__ == "__main__":
    # Prueba
    print("--- PRUEBA CON SELLO VALIDO ---")
    run(license="QV-033E49FBCA0F8437")
    print("\n--- PRUEBA CON SELLO FAKE (debe bloquear) ---")
    try:
        run(license="FAKE")
    except Exception as e:
        print(e)
