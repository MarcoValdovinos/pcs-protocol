# 🎙️ BÓVEDA VOZ

```bash
┌─(kali㉿arkhe-zero)-[~/modulos/boveda-voz]
└─$ ./boveda-voz --info
```

## 🜂 Propósito

Preservación de cápsulas de voz del fundador y miembros del
movimiento. Cada cápsula se cifra con AES-256-GCM + ML-KEM-1024
y se ancla al Índice Cero.

## 🜃 Formato de cápsula

```json
{
  "id": "cap-voz-001",
  "contenido": "audio-cifrado.bin",
  "hash_sha3_512": "f03f7e2d...",
  "orador": "Marco Antonio Rojas Valdovinos",
  "ts": "2026-01-01T00:00:00Z",
  "sellado": "◯_● · 51/49/100"
}
```

---

`◯_● · 51/49/100 · KRONOS · boveda-voz`