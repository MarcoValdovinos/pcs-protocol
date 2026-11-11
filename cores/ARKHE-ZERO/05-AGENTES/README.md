<!--
╔══════════════════════════════════════════════════════════════════════════╗
║  ▓▒░ 05-AGENTES · OFICIOS NUMERADOS · ARKHÉ ZERO ░▒▓                     ║
║  [ 090-095 ]  [ producción ]  [ auditoría ]  [ 51/49/100 ]               ║
╚══════════════════════════════════════════════════════════════════════════╝
-->

# 🏗️ 05-AGENTES · Los 6 Oficios Numerados

```bash
┌─(kali㉿arkhe-zero)-[~/kronos/05-AGENTES]
└─$ ls -la

drwxr-xr-x  _base/                # Clase base común (Python)
drwxr-xr-x  090-arquitecto/       # Diseño de sistema + modularidad
drwxr-xr-x  091-contralor/        # Control interno + financiero
drwxr-xr-x  092-auditor-externo/  # Auditoría independiente + forense
drwxr-xr-x  093-relator/          # Documentación + actas
drwxr-xr-x  094-bibliotecario/    # Índice + catálogo + búsqueda
drwxr-xr-x  095-cartografo/       # Mapa + grafo de dependencias

[ ✓✓ ] 6 OFICIOS · listos para operar · ◯_● · 51/49/100
```

## 🜂 Los 6 Oficios

| #   | Oficio             | Rol                                     |
|-----|--------------------|-----------------------------------------|
| 090 | 🏗️ Arquitecto      | Diseña la estructura del sistema        |
| 091 | 📊 Contralor       | Control interno y financiero            |
| 092 | 🔍 Auditor Externo | Auditoría independiente + forense       |
| 093 | 📜 Relator         | Documentación, actas, comunicación      |
| 094 | 📖 Bibliotecario   | Índice, catálogo, búsqueda semántica    |
| 095 | 🗺️ Cartógrafo      | Mapa del sistema, grafo de dependencias |

## 🜃 Uso

```python
from _base.agente_base import AgenteBase

arquitecto = AgenteBase.from_registry('090-arquitecto')
resultado = arquitecto.ejecutar({
    'tarea': 'diseñar-módulo',
    'contexto': 'capa-3-operativa'
})
```

---

`◯_● · 51/49/100 · KRONOS · 05-AGENTES/`