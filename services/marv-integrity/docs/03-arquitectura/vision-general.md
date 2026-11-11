# 🏗️ Visión General de la Arquitectura

KRONOS SUPERIOR es un **Monorepo** gestionado con `pnpm` y `Turborepo`. Está diseñado bajo una arquitectura de microservicios y *Edge Computing*.

## Capas del Sistema
1.  **Capa de Presentación (apps/):** Interfaces de usuario en HTML5 vanilla (para máxima velocidad) y Next.js (para el dashboard).
2.  **Capa de Negocio (services/):** APIs en Node.js/Python desplegadas en Vercel.
3.  **Capa de Datos (database/):** PostgreSQL (Supabase) con políticas de Row Level Security (RLS).
4.  **Capa de Confianza (contracts/):** Anclaje inmutable de hashes en la red Polygon (Blockchain).
5.  **Capa Forense (ai/):** Modelos locales de detección de anomalías y firmas de ransomware.

## Flujo de Datos de Verificación
`Usuario sube archivo -> JS calcula SHA-256 -> Se compara con Base de Datos -> Se retorna MATCH/NO MATCH -> (Opcional) Se registra en Blockchain.`
