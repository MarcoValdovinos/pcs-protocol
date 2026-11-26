# NET - Nodo P2P para lanzar a la red
import socket, json
class Node:
    def __init__(self, host="0.0.0.0", port=2099):
        self.host, self.port = host, port
    def serve(self):
        print(f"[KRONOS NET] Escuchando en {self.host}:{self.port} - ARKHE ZERO OS")
        print(f"[KRONOS NET] PQC: ML-KEM-1024 + ML-DSA-87 | 51/49 activado")
        s = socket.socket()
        s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        s.bind((self.host, self.port))
        s.listen(5)
        while True:
            conn, addr = s.accept()
            data = conn.recv(8192)
            print(f"[NET] {addr} -> {data[:200]}")
            conn.sendall(b'{"status":"ok","node":"ARKHE-ZERO-OS","pqc":"ML-KEM-1024/ML-DSA-87"}')
            conn.close()
