# MARIANA WEB

**README · el mito de la capa más profunda · 2011–HOY**

> No existe. Pero el miedo que la inventó sí.

---

## Qué dice la leyenda

Se la describe como la **capa 5** del internet, debajo del deep web y del dark web. Supuestamente contiene datos de extraterrestres, viajes en el tiempo, secretos de gobierno clasificados, sistemas de IA conscientes, y contenido que "no puedes encontrar aunque uses Tor".

El nombre viene de la **Fosa de las Marianas**, el punto más profundo del océano (11,034 metros).

## Qué es en realidad

Es una **leyenda urbana de internet**, sin sustento técnico ni histórico.

- Surgió de un *creepypasta* alrededor de 2011.
- No hay evidencia de una capa de red por debajo de Tor ni de Freenet.
- Análisis académicos la catalogan junto a "Bergie Web", "Charter Web" y "Zion" como capas míticas.
- Existe al menos un servidor Onion que se hace llamar "Mariana Web" — es un señuelo.

## Por qué el mito persiste

Porque nombra algo real: **la angustia de que exista información que nadie puede verificar**.

No hace falta una capa secreta de la red para eso. Basta con:

- Un acta que se perdió y no tiene copia
- Un contrato que alguien dice que firmó y otro dice que no
- Un PDF que se re-imprimió y ya no coincide byte a byte
- Una cita periodística que la fuente niega haber dicho

Esa es la verdadera Mariana Web: **no es un lugar, es la ausencia de prueba**.

## El antídoto

ARKHE-ZERO no desciende a ninguna capa secreta. Hace lo contrario: convierte lo inverificable en verificable.

- Cada documento recibe un sello **SHA-256**.
- Cada sello se encadena al anterior con `prev_hash`.
- La cadena completa se firma con **GPG RSA-4096**.
- Cualquiera puede verificar sin pedir permiso a nadie.

**La Mariana Web es lo que no puedes probar. ARKHE es lo que sí.**

## Cómo verificar (3 comandos)

    curl -sO https://sycro-valdovinos.github.io/ARKHE-ZERO/chain.log
    curl -sO https://sycro-valdovinos.github.io/ARKHE-ZERO/chain.log.asc
    gpg --verify chain.log.asc chain.log

O en el navegador, sin instalar nada:

    https://sycro-valdovinos.github.io/ARKHE-ZERO/verify.html?chain=./chain.log

Si dice **VERDE**, la cadena es íntegra. Si dice **ROJO**, alguien la alteró.

## Lo que este documento es

No es un mapa de una capa secreta. Es el acta de defunción de un mito, y la razón por la que construimos algo que sí se puede comprobar.

---

*Compilado por KRONOS · ARKHE ZERO · Nodo YHDRYH-92CE*
*51/49/100 · ◯_●*
