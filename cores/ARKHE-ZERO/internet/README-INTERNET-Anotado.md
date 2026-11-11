# README DEL INTERNET - RFC 1 (1969) // Versión Anotada 2026

**Autor original:** Steve Crocker, 21 años, UCLA
**Fecha:** 7 de Abril de 1969
**Contexto:** 4 computadoras conectadas. Eso era todo internet.

---

## NOTA DEL AUTOR ORIGINAL

> "Muy poco de lo que hay aquí es firme y se esperan reacciones."

**Anotación 2026:** Imagina subir tu proyecto a GitHub y poner "no sé si esto sirve". Ese nivel de humildad inventó internet.

---

## 1. ¿Qué es un mensaje?

**1969:**

> Un mensaje es cualquier flujo de no más de 8080 bits, junto con su encabezado de 16 bits. Destino (5 bits), Link (8 bits), Trace (1 bit), Spare (2 bits).

**Traducción moderna:**
Un paquete de máximo 1010 bytes. El encabezado decía a dónde iba.

**¿Sobrevivió?**
✅ Sí, pero evolucionó. Hoy es IP. 8080 bits era minúsculo (1KB). Hoy mandamos gigabytes. La idea de "Destino + Link" es exactamente lo que hace una IP + Puerto.

El bit "Spare" (reserva) es la mejor decisión de diseño: dejaron espacio para el futuro sin saber para qué.

---

## 2. Los 32 Links y el RFNM

**1969:**

> Entre cada par de HOSTs hay 32 conexiones lógicas full-duplex. Ningún HOST puede mandar dos mensajes seguidos por el mismo link antes de que el otro responda con un RFNM (Request For Next Message). Esto limita la congestión.

**Traducción moderna:**
Inventaron el control de flujo. Es un "espera, no me satures".

**¿Sobrevivió?**
✅ Sí, totalmente. Es el abuelo de TCP. El RFNM es hoy el ACK (acknowledgment) de TCP. La idea de "no te mando más hasta que me digas que recibiste" es la base de todo WhatsApp, Netflix, juegos online.

❌ Lo de "siempre hay 32 links, se usen o no" murió rápido. Era un desperdicio de memoria. Hoy las conexiones se crean y destruyen dinámicamente.

---

## 3. Uso Simple vs Uso Profundo

**1969:**

> Uso simple: usar una computadora remota como si fuera una máquina de escribir (TTY) conectada por teléfono.
> Uso profundo: usar consolas gráficas sofisticadas aunque haya un retraso de "medio segundo o así, no importa qué tan simple sea".

**Anotación 2026:**
Ese "medio segundo" los tenía obsesionados. Es el lag. En 1969, 500ms era lo mínimo por la distancia física. Hoy nos quejamos si un juego tiene 50ms.

Aquí predicen el futuro sin querer. El "uso simple" es hoy SSH / telnet. El "uso profundo" es hoy Figma, Google Docs, juegos en la nube.

---

## 4. La idea más loca: DEL

**1969:**

> Proponemos crear un lenguaje llamado DEL para control de consola. El HOST remoto enviaría el programa en DEL que controla la consola, y este programa sería compilado localmente. Así, las respuestas triviales (como borrar un carácter) se manejan localmente.

**Traducción moderna:**
¿Y si en lugar de mandar cada tecla que presionas al servidor, le mandamos al cliente un programita que sabe cómo borrar letras y mover el cursor?

**¿Sobrevivió?**
✅ ¡ES JAVASCRIPT! Literalmente.

Crocker inventó la idea del frontend en 1969. Mandar código al borde para no saturar la red. Es exactamente lo que hace tu navegador cuando cargas una página. El servidor te manda el código (JS) y tu máquina ejecuta lo trivial.

No lo llamaron JavaScript, lo llamaron DEL y nunca lo terminaron, pero la idea es idéntica.

---

## 5. Las preguntas abiertas del final

**1969:**

> ¿Por qué damos 8 bits para links si solo usamos 32?
> ¿Cómo hace un HOST para mandar mensajes a su IMP?
> ¿Puede un HOST controlar los RFNMs?
> ¿Los IMPs harán conversión de código?

**Anotación 2026:**
Todas se respondieron en los siguientes 2 años. La 1 es graciosa: dejaron 8 bits (256 valores) por si necesitaban más, pero el hardware solo aguantaba 32. Es el YAGNI (You Aren't Gonna Need It) antes de que existiera el término.

---

## TL;DR - ¿Qué queda de este README en 2026?

| Idea de 1969 | Hoy |
|---|---|
| Mensaje de 8080 bits | Paquete IP |
| Link + RFNM | TCP + ACK |
| Link 0 para sistema | Puerto de control / handshake |
| DEL (código en el borde) | JavaScript, WASM |
| Medio segundo de retraso | Seguimos luchando contra el lag |

**Lección final de Crocker:**
No diseñes internet como una catedral perfecta. Diseña 4 computadoras que hablen, deja 2 bits de "spare" por si acaso, y pide opiniones. El resto lo arregla la gente después.

---

Si quieres el original sin anotaciones, está en [`rfc1.txt`](./rfc1.txt) en esta misma carpeta.

---

*Compilado por KRONOS · ARKHE ZERO · Nodo YHDRYH-92CE · 51/49/100*
