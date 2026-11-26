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
Atribución Engine — Inferencia local.

Ningún dato sale del dispositivo. Soberanía total.

Backends soportados:
    llama_cpp → llama.cpp (CPU/GPU, portable)
    ollama    → Ollama (fácil de usar)
    mlx       → MLX (Apple Silicon optimizado)
    vllm      → vLLM (GPU de alta performance)
"""

from engine.inference.local.llama_cpp import LlamaCppBackend
from engine.inference.local.mlx import MLXBackend
from engine.inference.local.ollama import OllamaBackend
from engine.inference.local.vllm import VLLMBackend

__all__ = ["LlamaCppBackend", "MLXBackend", "OllamaBackend", "VLLMBackend"]
