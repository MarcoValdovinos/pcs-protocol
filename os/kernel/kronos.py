# KRONOS KERNEL - Tiempo + Gobernanza 51/49 + Hash Chain
import time, hashlib, hmac, json
class KronosKernel:
    def __init__(self, hmac_key: bytes):
        self.key = hmac_key
        self.chain = []
        self.prev_hmac = "0"*64
    def tick(self, actor: str, action: str, payload: dict, human_approved: bool = True):
        # Regla 51/49: humano siempre tiene 51%
        if not human_approved:
            raise PermissionError("51/49: humano debe aprobar")
        event = {
            "ts": time.time_ns(),
            "actor": actor,
            "action": action,
            "payload": payload,
            "prev_hmac": self.prev_hmac,
            "human_share": 51,
            "ai_share": 49,
        }
        body = json.dumps(event, sort_keys=True).encode()
        event["hmac_sha256"] = hmac.new(self.key, body, hashlib.sha256).hexdigest()
        self.prev_hmac = event["hmac_sha256"]
        self.chain.append(event)
        return event
    def verify(self) -> bool:
        prev = "0"*64
        for e in self.chain:
            if e["prev_hmac"] != prev: return False
            mac = e.pop("hmac_sha256")
            body = json.dumps(e, sort_keys=True).encode()
            exp = hmac.new(self.key, body, hashlib.sha256).hexdigest()
            e["hmac_sha256"] = mac
            if not hmac.compare_digest(exp, mac): return False
            prev = mac
        return True
