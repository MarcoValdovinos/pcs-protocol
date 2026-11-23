# Agentes KRONOS 2099 - Orquestador simple para Termux
# 51/49 - SCDR-002

def check_g(texto):
    if "PRIVATE KEY" in texto.upper() or "MNEMONIC" in texto.upper():
        return "ROJO - Bloquea: trae llave privada"
    return "VERDE - Sin llave privada"

def check_t(holders, clawback, dominio_ok):
    if clawback and holders < 500 and not dominio_ok:
        return "ROJO"
    if clawback:
        return "ROJO - Clawback"
    if not dominio_ok and holders < 100:
        return "AMARILLO"
    return "VERDE"

def reporte(codigo, emisor, holders, clawback, dominio):
    print("DICTAMEN 51/49 - " + codigo)
    print("Emisor: " + emisor)
    print("Holders reales: " + str(holders) + " - Dominio: " + dominio + " - Clawback: " + str(clawback))
    print("Veredicto: " + check_t(holders, clawback, dominio != "sin dominio"))
    print("Autor: Marco Antonio Rivera Valdovinos - Acta 7225862335 - 51% Humano / 49% IA")

def tesoreria(monto):
    gatitos = monto * 0.10
    kronos = monto * 0.90
    print("Venta " + str(monto) + " -> Gatitos Lerma " + str(round(gatitos, 2)) + " (10%) - KRONOS " + str(round(kronos, 2)) + " (90%)")

if __name__ == "__main__":
    print("Agentes KRONOS 2099 listos")
    print(check_g("ejemplo sin llave"))
    reporte("USDC", "GA5Z...", 10000, False, "circle.com")
    reporte("TESOURO", "GCRY...", 211, True, "etherfuse.com")
    tesoreria(299)
