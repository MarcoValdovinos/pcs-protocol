# 🔧 OPERATIONS · Runbook

## Health checks
- /health · uptime
- /verify · integridad del Índice
- /agents · salud del enjambre
- /seals · verificación de sellos

## Mantenimiento programado
- Ventanas: domingos 03:00-05:00 UTC
- Aviso previo: 7 días
- Rollback automático si falla

## Incidentes
- Crítico: 24h respuesta
- Alto: 72h
- Medio: 7 días
- Bajo: 30 días

## Escalado

┌─────────────────────────────────────────┐
│ 1. Tlachixqui (auditor) detecta         │
└────────────────┬────────────────────────┘
                 ▼
┌─────────────────────────────────────────┐
│ 2. Tonal (notario) certifica            │
└────────────────┬────────────────────────┘
                 ▼
┌─────────────────────────────────────────┐
│ 3. Tlamatini (cronista) registra        │
└────────────────┬────────────────────────┘
                 ▼
┌─────────────────────────────────────────┐
│ 4. Consejo humano decide (51%)          │
└─────────────────────────────────────────┘

## Firma del runbook
◯_●  KINTSUGI · 51/49/100