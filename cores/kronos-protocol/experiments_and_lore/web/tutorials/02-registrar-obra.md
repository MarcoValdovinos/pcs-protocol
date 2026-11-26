================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


# 🎓 Tutorial 02 · Registrar Obra

```bash
┌─(kali㉿arkhe-zero)-[~/docs/tutorials]
└─$ ./tutorial 02
```

## 🜂 Requisitos

- Navegador moderno
- Acceso a `apps/registrar.html`
- Contenido a firmar

## 🜃 Pasos

### 1 · Abrir el formulario

```bash
┌─(kali㉿arkhe-zero)-[~/]
└─$ open http://localhost:8080/apps/registrar.html
```

### 2 · Completar datos

- **Título**: nombre de la obra
- **Tipo**: acta · obra · decisión
- **Contenido**: texto a firmar
- **Algoritmo**: ML-DSA-87 (recomendado)

### 3 · Firmar

Presiona `▶ FIRMAR Y REGISTRAR`. El sistema:

1. Calcula SHA3-512
2. Prepara firma ML-DSA-87
3. Genera certificado VC 2.0
4. Prepara anclaje a Ethereum

### 4 · Verificar

Copia el hash y verifícalo en `apps/verificar.html`.

---

`◯_● · 51/49/100 · TUTORIAL 02`
