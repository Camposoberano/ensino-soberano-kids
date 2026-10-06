"""
Servidor Híbrido Ensino Soberano Kids
Serve a aplicação estática e provê a Simbiose de IA:
- Jev (Sistema 1): Validação paramétrica ultrarrápida (<500ms)
- Gemini (Sistema 2): Parecer pedagógico profundo e raciocínio BNCC
"""
import os
import json
import time
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from audit_sentinel import audit_activity_with_jev, audit_deep_with_gemini

PORT = 8085

class HybridAIServerHandler(SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == "/api/audit/fast":
            self.handle_jev_audit()
        elif self.path == "/api/audit/deep":
            self.handle_gemini_audit()
        else:
            self.send_error(404, "Endpoint não encontrado")

    def _read_json_payload(self):
        content_length = int(self.headers.get("Content-Length", 0))
        if content_length <= 0:
            return {}
        raw = self.rfile.read(content_length)
        try:
            body = raw.decode("utf-8")
        except UnicodeDecodeError:
            body = raw.decode("latin-1", errors="replace")
        return json.loads(body) if body.strip() else {}

    def handle_jev_audit(self):
        try:
            payload = self._read_json_payload()
            activity_type = payload.get("activityType") or payload.get("activity_type") or "math"
            data = payload.get("data") or payload
            grade_level = payload.get("gradeLevel") or payload.get("grade_level") or payload.get("grade") or "2ano"

            result = audit_activity_with_jev(activity_type, data, grade_level)
            self._send_json(200, result)
        except Exception as e:
            self._send_json(500, {"error": str(e), "provider": "Jev"})

    def handle_gemini_audit(self):
        try:
            payload = self._read_json_payload()
            activity_type = payload.get("activityType") or payload.get("activity_type") or "math"
            data = payload.get("data") or payload
            grade_level = payload.get("gradeLevel") or payload.get("grade_level") or payload.get("grade") or "2ano"
            jev_results = payload.get("jevResults") or payload.get("jev_results")

            result = audit_deep_with_gemini(activity_type, data, grade_level, jev_results, request_pedagogical_report=True)
            self._send_json(200, result)
        except Exception as e:
            self._send_json(500, {"error": str(e), "provider": "Gemini"})

    def _send_json(self, status_code, data):
        response_bytes = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(response_bytes)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        self.wfile.write(response_bytes)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

def run_server():
    server_address = ("", PORT)
    httpd = ThreadingHTTPServer(server_address, HybridAIServerHandler)
    print(f"Servidor Híbrido Ativo em http://localhost:{PORT}")
    print("Endpoints de IA Ativos:")
    print(" - POST /api/audit/fast -> Jev 1.13 (Sistema 1)")
    print(" - POST /api/audit/deep -> Gemini 2.5 Flash (Sistema 2)")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor finalizado com sucesso.")

if __name__ == "__main__":
    run_server()
