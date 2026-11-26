================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


"""═══════════════════════════════════════════════════════
  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
  ◯_●                                                 ◯_●
 
  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 
  "El legado no se hereda. Se firma."
 ═══════════════════════════════════════════════════════"""

"""
Atribución Engine — Inferencia.

Soberanía computacional: el motor corre en el nodo del ciudadano.
Local-first, con fallback a APIs remotas solo si el usuario lo autoriza.

Módulos:
    local/     → llama.cpp, Ollama, MLX, vLLM
    fallback/  → OpenAI, Anthropic, Gemini (solo si se autoriza)
    router.py  → Decide local vs remoto según política
    quantize.py → Cuantización de modelos

Uso:
    from engine.inference import InferenceRouter, InferenceConfig

    router = InferenceRouter(InferenceConfig(policy="local-first"))
    response = await router.generate("Hola, ¿cómo estás?")
"""

from engine.inference.router import InferenceConfig, InferenceRouter, InferencePolicy

__version__ = "0.1.0"

__all__ = ["InferenceConfig", "InferenceRouter", "InferencePolicy"]
