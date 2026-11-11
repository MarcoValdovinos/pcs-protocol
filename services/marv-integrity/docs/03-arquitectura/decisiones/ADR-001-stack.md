# ADR-001: Elección del Stack Tecnológico

**Estado:** Aceptado
**Fecha:** Octubre 2026

## Contexto
Necesitamos un stack que permita desplegar rápido, sea seguro y no consuma recursos excesivos en dispositivos móviles (dado que el desarrollo inicial se realizó desde Termux en Android).

## Decisión
*   **Frontend Core:** HTML5 + JS Vanilla + Web Crypto API. (Sin frameworks para la capa de verificación offline).
*   **Monorepo:** pnpm + Turborepo.
*   **Backend:** Node.js (Next.js API Routes) para el dashboard, Python para los scripts forenses.
*   **Base de Datos:** Supabase (PostgreSQL) por su ecosistema RLS.

## Consecuencias
*   **Positivas:** El núcleo del verificador pesa menos de 50KB y funciona offline.
*   **Negativas:** Mantener JS Vanilla puede ser complejo a medida que crece la app.
