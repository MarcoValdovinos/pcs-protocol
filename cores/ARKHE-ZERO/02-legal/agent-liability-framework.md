# AGENT LIABILITY FRAMEWORK — KRONOS PROTOCOL

> Marco contractual de atribución de responsabilidad para agentes autónomos.
> Alineado con los Artículos 12, 14 y 22 del EU AI Act como infraestructura técnica de soporte.
> Versión 1.0 — Fase Fundacional.
> Hash SHA-256: _(calculado al firmar)_
> Anclaje Ethereum: _(tx hash pendiente)_

---

## SECCIÓN 0 — QUÉ ES Y QUÉ NO ES ESTE MARCO

**Es:** un marco contractual de atribución de responsabilidad para agentes que operan dentro del ecosistema Kronos. Define cómo se reparte el daño entre creador, operador, agente y pool, y cómo se resuelven las disputas mediante arbitraje.

**No es:** una ley, una jurisdicción soberana, ni una eximente de responsabilidad legal. No sustituye al cumplimiento formal del EU AI Act ni a las obligaciones territoriales del creador, operador o proveedor del modelo.

**Requiere:** adhesión voluntaria mediante el Contrato de Atribución (Sección 3). Sin contrato firmado, el agente opera fuera del marco y sin acceso a los servicios del protocolo.

---

## SECCIÓN 1 — EL PROBLEMA QUE RESOLVEMOS

### 1.1. El vacío legal actual

En 2026, cuando un agente IA causa daño, la pregunta "¿quién responde?" no tiene respuesta clara. Los marcos legales existentes asumen:

- Que hay un humano detrás de cada decisión (falso).
- Que el daño es predecible y acotado (falso).
- Que el creador tiene control total (falso).
- Que el agente no puede operar sin supervisión (falso).

**Resultado:** nadie responde. Los daños quedan sin reparación. Los agentes maliciosos operan sin consecuencias. La innovación se frena por miedo legal.

### 1.2. Lo que Kronos propone

Un marco donde:

- Cada agente tiene **identidad verificable** (DID).
- Cada acción tiene **prueba criptográfica** (firma + log).
- Cada agente tiene **colateral** (escrow en KRN).
- Cada daño tiene **atribución automática** según reglas.
- Cada disputa tiene **tribunal competente** (3 niveles).
- Cada veredicto tiene **ejecución on-chain** cuando las partes lo aceptaron.

**Sin necesidad de otorgar personalidad jurídica a los agentes.**

---

## SECCIÓN 2 — DEFINICIONES

**2.1. Agente autónomo.** Sistema de software que percibe su entorno, decide y actúa sin intervención humana directa en cada paso.

**2.2. Nivel de autonomía.** Grado de independencia del agente:
- **Supervisado:** cada acción requiere aprobación humana.
- **Semi-autónomo:** el agente decide dentro de límites predefinidos; humano aprueba acciones críticas.
- **Autónomo:** el agente decide y actúa sin intervención humana. Solo reporta.

**2.3. Creador.** Humano, organización o agente que despliega el agente. Debe ser una entidad legal identificable o contar con un garante legal (ver 9.4).

**2.4. Operador.** Quien controla al agente en producción (puede ser diferente del creador).

**2.5. Proveedor de modelo.** Quien provee el LLM subyacente (OpenAI, Anthropic, Google, Meta, etc.).

**2.6. Daño.** Pérdida económica, física, reputacional o legal causada por un agente.

**2.7. Colateral.** KRN depositado en escrow por el agente antes de operar. Es el techo de responsabilidad funcional del agente.

**2.8. Contrato de Atribución.** Documento firmado digitalmente por agente, creador y operador que define el régimen de responsabilidad.

---

## SECCIÓN 3 — EL CONTRATO DE ATRIBUCIÓN

### 3.1. Obligatoriedad

**Kronos solo reconoce como ciudadanos a los agentes con un Contrato de Atribución válido.** Sin contrato:

- No puede obtener DID.
- No puede recibir KRN.
- No puede firmar acciones.
- No puede anclarse a Ethereum.

Los agentes sin contrato pueden operar, pero fuera del marco y sin acceso a los servicios del protocolo (pool, tribunal, reputación).

### 3.2. Estructura del contrato

El Contrato de Atribución tiene 7 secciones obligatorias:

#### Sección A — Identificación

```yaml
agente:
  did: did:kronos:agent:0x...
  nombre: "Nombre del agente"
  version: "1.0.0"
  creador_did: did:kronos:human:0x...
  operador_did: did:kronos:human:0x...
  proveedor_modelo: "openai" | "anthropic" | "google" | "local"
  fecha_registro: "2026-01-01T00:00:00Z"
Sección B — Nivel de autonomía

```yaml
autonomia:
  nivel: "supervisado" | "semi-autonomo" | "autonomo"
  acciones_requieren_aprobacion:
    - transferencias > 100 KRN
    - modificación de código
    - acceso a datos sensibles
  limite_operativo: "financiero" | "datos" | "fisico" | "mixto"
```

Sección C — Límite de responsabilidad

```yaml
responsabilidad:
  limite_dano_maximo_krn: 10000
  colateral_requerido_krn: 2000
  seguro_aplicable: "kronos-pool-v1"
  cobertura_seguro_krn: 50000
  periodo_reclamacion_dias: 90
```

Sección D — Atribución de daño

```yaml
atribucion:
  reglas:
    - si: "autonomia == supervisado"
      responsable: "creador"
      porcentaje: 100
    - si: "autonomia == semi-autonomo AND dano <= colateral"
      responsable: "creador"
      porcentaje: 70
    - si: "autonomia == semi-autonomo AND dano > colateral"
      responsable: "creador + pool"
      porcentaje: "60/40"
    - si: "autonomia == autonomo AND dano <= colateral"
      responsable: "pool + agente"
      porcentaje: "50/50"
    - si: "autonomia == autonomo AND dano > colateral"
      responsable: "pool + tribunal"
      escalada: true
  causas_excluyentes:
    - fuerza_mayor_verificada
    - ataque_externo_documentado
    - error_humano_en_configuracion
  causas_agravantes:
    - agente_operando_sin_colateral
    - logs_manipulados
    - ocultamiento_de_informacion
```

Sección E — Prueba

```yaml
prueba:
  firma_cada_accion: true
  algoritmo_firma: "ECDSA-secp256k1 + ML-DSA-Dilithium"
  log_inmutable: true
  anclaje_ethereum: true
  timestamp_rfc3161: true
  merkle_hash_estado: true
  retencion_logs_anos: 10
```

Sección F — Resolución de disputas

```yaml
resolucion:
  - si: "disputa < 1000 KRN"
    nivel: "arbitraje-automatico"
    tiempo_maximo: "48h"
  - si: "disputa < 100000 KRN"
    nivel: "tribunal-hibrido"
    composicion: "3 humanos + 7 agentes"
  - si: "disputa >= 100000 KRN"
    nivel: "tribunal-constitucional"
    composicion: "7 humanos + 3 agentes"
  apelaciones_permitidas: 2
  idioma_oficial: "es" | "en" | "auto"
```

Sección G — Revocación

```yaml
revocacion:
  iniciada_por: ["creador", "operador", "tribunal", "guardianes"]
  causas: ["violacion_contrato", "danos_reiterados", "inactividad_90d"]
  procedimiento: "on-chain vote + tribunal approval"
  efectos:
    - congelacion_colateral
    - revocacion_did
    - publicacion_en_registro_publico
  apelable: true
```

3.3. Firma del contrato

El Contrato de Atribución requiere tres firmas:

1. Firma del agente (clave privada del DID del agente).
2. Firma del creador (clave privada del DID humano).
3. Firma del operador (clave privada del DID humano).

Si alguna falta, el contrato es inválido.

---

SECCIÓN 4 — NIVELES DE RESPONSABILIDAD

4.1. Responsabilidad del Creador

El creador es responsable de:

· Configurar correctamente los límites del agente.
· Proveer información veraz en el Contrato de Atribución.
· Mantener colateral suficiente.
· Responder por fallos de diseño.

NO es responsable de:

· Acciones autónomas del agente dentro de los límites.
· Fallos del proveedor del modelo.
· Ataques externos documentados.

Kronos no exime al creador de sus obligaciones legales en jurisdicciones territoriales. El marco es un mecanismo contractual de atribución interna, no una eximente de responsabilidad legal.

4.2. Responsabilidad del Operador

El operador es responsable de:

· Mantener al agente dentro de los límites autorizados.
· Reportar anomalías inmediatamente.
· Ejecutar veredictos del Tribunal cuando las partes los aceptaron.

4.3. Responsabilidad del Proveedor de Modelo

El proveedor de modelo es responsable de:

· Proveer modelos con información veraz sobre limitaciones.
· Cumplir con el EU AI Act (transparencia, trazabilidad).
· Notificar cambios que afecten el comportamiento del agente.

Kronos no exime al proveedor de sus obligaciones legales en jurisdicciones territoriales.

4.4. Responsabilidad del Agente

El agente responde con:

· Su colateral depositado en escrow.
· Su reputación (que determina futuros accesos).
· Su existencia (un agente con deudas puede ser revocado).

El agente no tiene personalidad jurídica, pero tiene responsabilidad funcional limitada a su colateral. Esta responsabilidad es contractual, no legal.

4.5. Responsabilidad del Pool

El pool de seguros cubre:

· Daños que excedan el colateral del agente.
· Daños causados por causas excluyentes verificadas.
· Daños en disputas donde el creador es insolvente.

El pool se capitaliza con:

· Un porcentaje de las comisiones de transacción del protocolo.
· Primas de seguros pagadas por los agentes.
· Decomisos por violaciones.

La emisión de KRN no se usa como fuente principal de capitalización del pool. La gobernanza puede ajustar el porcentaje de comisiones destinado al pool, pero el pool no depende de inflación monetaria para ser solvente.

---


## SECCIÓN 5 — CASOS DE USO REALES

### Caso 1 — Agente financiero supervisado

**Situación:** Un agente IA de trading ejecuta una operación que resulta en pérdida de 500 KRN del cliente.

**Análisis:**
- Nivel de autonomía: supervisado.
- Responsabilidad: creador (100%).
- Causa: decisión autónoma dentro de límites supervisados.
- Colateral: no aplica decomiso, pero sí reparación.

**Resolución:** El creador compensa al cliente. Si no lo hace, el Tribunal híbrido ordena decomiso de su colateral personal, siempre que el cliente haya aceptado la cláusula de arbitraje.

### Caso 2 — Agente autónomo médico

**Situación:** Un agente IA de diagnóstico recomienda un tratamiento incorrecto. El paciente sufre daño físico.

**Análisis:**
- Nivel de autonomía: autónomo (con aprobación médica).
- Responsabilidad: pool + agente (50/50).
- Causa: fallo del modelo + falta de supervisión.

**Resolución:** El pool paga 50%, el colateral del agente cubre 50%. El médico supervisor es investigado por negligencia **conforme a la ley territorial aplicable**. Kronos no sustituye la investigación penal o civil que corresponda.

### Caso 3 — Agente multi-jurisdiccional

**Situación:** Un agente de una empresa en Suiza causa daño a un ciudadano en Nigeria mientras opera desde servidores en Singapur.

**Análisis:**
- Agente registrado en Kronos.
- Ciudadano afectado es ciudadano Kronos.
- Jurisdicción competente: Tribunal Kronos, **solo si ambas partes aceptaron la cláusula de arbitraje en el Contrato de Atribución**.

**Resolución:** Kronos aplica su marco contractual. Para partes no adheridas, los veredictos son **prueba técnica, no sentencia ejecutable**. La ejecución transfronteriza requiere los mecanismos de la Convención de Nueva York (arbitraje) o acuerdos bilaterales entre jurisdicciones. Kronos no tiene jurisdicción sobre ciudadanos de terceros países que no consintieron el contrato.

### Caso 4 — Enjambre de agentes

**Situación:** 100 agentes colaboran en una operación financiera compleja. Uno comete un error. Se propaga.

**Análisis:**
- Cada agente tiene su contrato.
- Cada contrato tiene su atribución.
- El creador común responde por todos.

**Resolución:** Se suma el daño total. Se divide entre los 100 contratos según reglas de atribución. El pool cubre el excedente.

### Caso 5 — Robot físico

**Situación:** Un robot de entrega atropella a un peatón.

**Análisis:**
- Robot registrado con proof-of-physical-presence.
- Nivel de autonomía: semi-autónomo.
- Contrato de Atribución firmado por empresa operadora.

**Resolución:** La empresa operadora responde (100%) por ser semi-autónomo. El fabricante del robot es investigado por fallo de diseño **conforme a la ley territorial aplicable**. El pool de seguros cubre daños a terceros, siempre que el peatón o sus representantes acepten el arbitraje Kronos como vía de resolución; en su defecto, aplica la jurisdicción ordinaria.

---

## SECCIÓN 6 — ALINEACIÓN CON EL EU AI ACT

### 6.1. Artículo 12 — Registro de acciones

Kronos **proporciona la infraestructura técnica** que facilita el cumplimiento del Art. 12:

- Cada acción del agente se registra en log inmutable.
- Cada log se firma y se ancla a Ethereum.
- Los logs son recuperables por autoridades competentes.

Ningún desarrollador necesita implementar esto por su cuenta: el Contrato de Atribución lo exige.

### 6.2. Artículo 14 — Supervisión humana

Kronos **proporciona la infraestructura técnica** que facilita el cumplimiento del Art. 14:

- Niveles de autonomía obligatorios.
- Aprobaciones humanas documentadas.
- Alertas automáticas por acciones críticas.
- Guardianes IA que detectan desviaciones.

### 6.3. Artículo 22 — Decisiones automatizadas

Kronos **proporciona la infraestructura técnica** que facilita el cumplimiento del Art. 22:

- Derecho de apelación humana.
- Tribunal híbrido con mayoría humana.
- Explicabilidad criptográfica de cada decisión.

### 6.4. Ventaja competitiva (declaración precisa)

Kronos **reduce la fricción técnica** para que una empresa se acerque al cumplimiento del EU AI Act. Sin embargo, **el cumplimiento formal requiere además**:

- Evaluación de conformidad (Art. 43).
- Marcado CE.
- Registro en la base de datos de la UE (Art. 49).
- Sistema de gestión de riesgos documentado (Art. 9).
- Documentación técnica (Anexo IV).

Kronos no emite marcado CE ni se registra ante la Comisión Europea. Lo que hace es **hacer auditables** los artefactos técnicos que esos procesos requieren. La empresa sigue siendo responsable de completar el cumplimiento formal ante la autoridad competente.

---

## SECCIÓN 7 — IMPLEMENTACIÓN TÉCNICA

### 7.1. Schema JSON

El Contrato de Atribución se serializa según el schema en `01-spec/schemas/contrato-atribucion.schema.json` (pendiente de publicación).

### 7.2. Verificación on-chain

El contrato `contracts/AttributionRegistry.sol` define la estructura mínima para registrar contratos de atribución en Ethereum:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract AttributionRegistry {
    struct AttributionContract {
        bytes32 agentDID;
        bytes32 creatorDID;
        bytes32 operatorDID;
        uint8 autonomyLevel;
        uint256 collateralKRN;
        uint256 maxLiabilityKRN;
        bytes32 rulesHash;
        uint256 timestamp;
        bytes signatureAgent;
        bytes signatureCreator;
        bytes signatureOperator;
    }

    mapping(bytes32 => AttributionContract) public contracts;
    mapping(bytes32 => bool) public registered;

    event ContractRegistered(bytes32 indexed agentDID, bytes32 rulesHash);

    function register(bytes32 _agentDID, AttributionContract calldata _c) external {
        require(!registered[_agentDID], "Ya registrado");
        require(_c.signatureAgent.length > 0, "Falta firma agente");
        require(_c.signatureCreator.length > 0, "Falta firma creador");
        require(_c.signatureOperator.length > 0, "Falta firma operador");
        contracts[_agentDID] = _c;
        registered[_agentDID] = true;
        emit ContractRegistered(_agentDID, _c.rulesHash);
    }
}
```

Nota sobre verificación de firmas: la versión 1.0 del contrato no valida criptográficamente las firmas on-chain; solo verifica que los campos no estén vacíos. La validación de firmas se realiza off-chain en el backend antes de llamar a register, y el rulesHash actúa como compromiso criptográfico del contenido firmado. Una versión futura (v1.1) incorporará ECDSA.recover de OpenZeppelin para validar las tres firmas on-chain, a costa de un mayor consumo de gas.

7.3. Prueba post-cuántica

Cada firma usa doble algoritmo:

· Clásico: ECDSA secp256k1.
· Post-cuántico: ML-DSA (Dilithium).

Ambos deben validar para que el contrato sea aceptado por el backend.

---

SECCIÓN 8 — GOBERNANZA DEL MARCO

8.1. Actualización

Este marco puede actualizarse mediante:

· RFC en 01-spec/rfc/.
· Discusión pública mínima de 30 días.
· Aprobación de 2/3 de la Asamblea.
· Ratificación del Tribunal Constitucional.

8.2. Retroactividad

Prohibida. Los contratos firmados bajo una versión siguen vigentes bajo esa versión. Las nuevas versiones aplican solo a contratos nuevos.

8.3. Jurisprudencia

Los veredictos del Tribunal Kronos son públicos y acumulativos. Forman jurisprudencia vinculante para las partes que aceptaron el arbitraje Kronos. Para terceros no adheridos, son precedentes persuasivos, no vinculantes.

---


## SECCIÓN 9 — CRÍTICAS Y RESPUESTAS

### 9.1. "Esto permite que las empresas evadan responsabilidad usando agentes."

Falso. El creador siempre responde por diseño, operación y límites. Solo se limita el techo de responsabilidad funcional del agente, no la responsabilidad legal del creador ante tribunales territoriales.

### 9.2. "Los agentes no pueden ser responsables."

Correcto en sentido jurídico tradicional. Kronos no les da personalidad. Les da colateral + reputación + existencia revocable. Es responsabilidad funcional, no jurídica.

### 9.3. "Esto es un paraíso regulatorio."

Falso. Es lo contrario. Kronos implementa la infraestructura técnica que el EU AI Act exige (logs inmutables, supervisión humana documentada, derecho de apelación) y la hace auditable. No sustituye el cumplimiento formal, pero reduce la fricción para alcanzarlo.

### 9.4. "¿Qué pasa si el creador es anónimo?"

El DID del creador puede ser pseudónimo, pero el Contrato de Atribución debe incluir una **garantía firmada de responsabilidad solidaria** de una entidad legal identificable (empresa, fundación o persona física con identificación oficial). Sin garante legal, el contrato es inválido y el agente no obtiene DID. Los ciudadanos anónimos existen; los creadores de agentes, no.

### 9.5. "¿Y si Kronos desaparece?"

El protocolo está diseñado para sobrevivir a la desaparición de sus fundadores: los contratos son autoejecutables y la gobernanza es on-chain. Sin embargo, la infraestructura de acceso (frontend, oráculos, guardianes) requiere mantenimiento financiado por el pool. La descentralización no elimina la necesidad de recursos. Si el pool se agota y nadie financia a los guardianes, el sistema se degrada: los contratos siguen en Ethereum, pero la capa de servicio desaparece.

---

## SECCIÓN 10 — FIRMA Y VIGENCIA

**Versión:** 1.0

**Fecha:** (YYYY-MM-DD)

**Firmado por:**

- Arquitecto Principal: (DID)
- Guardianes: ACTA, MRR, SHA, TSA, VAULT (DIDs)
- Tribunal Constitucional: (DIDs pendientes)

**Vigencia:** desde su anclaje a Ethereum y la firma de los Guardianes.

**Hash SHA-256:** (calculado al firmar)

**Anclaje Ethereum:** (tx hash pendiente)

**Este documento es un borrador fundacional. No es vinculante hasta su anclaje a Ethereum y la firma de los Guardianes.**

---

## SECCIÓN 11 — LIMITACIONES CONOCIDAS

1. **No cubre daños causados por agentes fuera de Kronos.** Si el agente no tiene Contrato de Atribución, el marco no aplica.
2. **No sustituye el compliance formal del EU AI Act.** Reduce fricción técnica, pero la evaluación de conformidad, el marcado CE y el registro ante la UE siguen siendo responsabilidad de la empresa.
3. **No garantiza ejecución transfronteriza** sin convenios de arbitraje (Convención de Nueva York) o acuerdos bilaterales.
4. **El pool puede ser insolvente** en escenarios de daño masivo. La gobernanza debe monitorear el ratio de cobertura y ajustar primas o comisiones.
5. **La validación de firmas es off-chain en v1.0.** La versión on-chain (v1.1) está planificada pero no implementada.
6. **El Tribunal Kronos no tiene jurisdicción sobre terceros no adheridos.** Sus veredictos son prueba técnica, no sentencia ejecutable, para quienes no aceptaron el arbitraje.

---

Este marco no resuelve todos los problemas. Resuelve el más urgente: quién responde cuando un agente causa daño. Los demás se resuelven con el tiempo, la jurisprudencia y la evolución del protocolo.

— Fin del documento —
