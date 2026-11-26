================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


# 📦 Deployment Guide

```bash
┌─(kali㉿arkhe-zero)-[~/docs/architecture]
└─$ ./architecture --deploy

[ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%
```

## 🜂 Opciones de deploy

### 1 · Docker (recomendado)

```bash
docker-compose up -d
docker-compose logs -f
```

### 2 · GitHub Pages

```bash
git push origin main
# Activa GitHub Pages en Settings
```

### 3 · Netlify

```bash
netlify deploy --prod
```

### 4 · Railway

```bash
railway up
```

## 🜃 Estructura de deploy

```text
╔══════════════════════════════════════════════════════════════════════════╗
║                    ARQUITECTURA DE DEPLOY                                ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                          ║
║   [ Nginx / Caddy ]  ───────▶  [ Web hub ]                               ║
║         │                                                                ║
║         ▼                                                                ║
║   [ Docker Compose ]  ─────▶  [ MCP server ]                             ║
║         │                                                                ║
║         ▼                                                                ║
║   [ K8s / Terraform ]  ────▶  [ Infra distribuida ]                      ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

## 🜄 Ambientes

| Ambiente   | URL                  | Uso           |
| ---------- | -------------------- | ------------- |
| Producción | arkhe.zero           | Público       |
| Staging    | staging.arkhe.zero   | Pre-deploy    |
| Desarrollo | localhost:8080       | Local         |
| Testnet    | sepolia.etherscan.io | Ethereum test |

---

`◯_● · 51/49/100 · ARCH · Deploy`
