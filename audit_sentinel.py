"""
Audit Sentinel - Simbiose Jev (System 1) + Gemini (System 2)
Ensino Soberano Kids
"""
import os
import time
import json
import urllib.request
from typesafe_sdk import TypeSafeClient, Choice, Score, Noul

def audit_activity_with_jev(activity_type: str, data: dict, grade_level: str = "2ano"):
    """
    Camada 1: Jev (System 1 - Snap Judgment)
    Avalia em paralelo com latência ultra-baixa (<500ms) sem gerar texto desnecessário.
    """
    start = time.time()
    with TypeSafeClient() as client:
        # Montar estado mínimo e perguntas baseadas no tipo de atividade
        state = {
            "tipo_atividade": activity_type,
            "ano_escolar": grade_level,
            "dados": data
        }

        # Perguntas atômicas estruturadas para o Jev
        questions = {
            "adequacao_pedagogica": Noul(
                instructions="Os dados da atividade respeitam as diretrizes pedagógicas e regras matemáticas escolares para o ano indicado?"
            ),
            "nivel_bncc": Choice(
                instructions="Qual a adequação do nível de dificuldade desta atividade ao ano escolar?",
                criteria={
                    "adequado": "Nível correto e alinhado aos objetivos pedagógicos da faixa etária",
                    "muito_dificil": "Conteúdo complexo demais para o ano escolar informado",
                    "muito_facil": "Conteúdo elementar demais que não desafia o aluno"
                }
            ),
            "densidade_exercicios": Score(
                instructions="Avalie a quantidade e organização das tarefas para uma folha de exercícios A4",
                criteria=[
                    "Insuficiente ou vazio",
                    "Ideal e equilibrado para folha A4",
                    "Excessivo ou sobrecarregado visualmente"
                ]
            )
        }

        # Se for multiplicação, adicionar pergunta cirúrgica sobre a regra dos 2 fatores
        if activity_type == "multiplication":
            questions["estritamente_dois_fatores"] = Noul(
                instructions="Todas as contas de multiplicação utilizam estritamente dois fatores (multiplicando e multiplicador em 2 linhas) sem parcelas adicionais empilhadas?"
            )

        resp = client.system_one(state=state, questions=questions)
        duration_ms = int((time.time() - start) * 1000)

        results = {
            "model": resp.model,
            "latency_ms": duration_ms,
            "tokens": resp.usage.input_tokens + resp.usage.output_tokens if resp.usage else 0,
            "answers": {}
        }

        for q_id, ans in resp.answers.items():
            if ans.type == "noul":
                results["answers"][q_id] = {
                    "type": "noul",
                    "value": ans.noul,
                    "approved": ans.noul >= 0.70
                }
            elif ans.type == "choice":
                results["answers"][q_id] = {
                    "type": "choice",
                    "choice": ans.choice,
                    "confidence": ans.confidence,
                    "probabilities": ans.probabilities
                }
            elif ans.type == "score":
                results["answers"][q_id] = {
                    "type": "score",
                    "score": ans.score,
                    "confidence": ans.confidence
                }

        # Avaliar se precisa de escalonamento para o Gemini
        needs_escalation = False
        escalation_reason = ""

        if "estritamente_dois_fatores" in results["answers"]:
            if not results["answers"]["estritamente_dois_fatores"]["approved"]:
                needs_escalation = True
                escalation_reason = "Possível violação da regra de 2 fatores em multiplicação."

        if not results["answers"]["adequacao_pedagogica"]["approved"]:
            needs_escalation = True
            escalation_reason = "Alerta de adequação pedagógica abaixo do limiar (Noul < 0.70)."

        if results["answers"]["nivel_bncc"]["confidence"] < 0.65:
            needs_escalation = True
            escalation_reason = "Baixa confiança na classificação do nível BNCC."

        results["needs_escalation"] = needs_escalation
        results["escalation_reason"] = escalation_reason

        return results

def audit_deep_with_gemini(activity_type: str, data: dict, grade_level: str, jev_results: dict = None, request_pedagogical_report: bool = False):
    """
    Camada 2: Gemini (System 2 - Reasoning & Narrative)
    Acionado em caso de escalonamento pelo Jev ou a pedido do professor para gerar parecer.
    """
    start = time.time()
    api_key = os.environ.get("OPENROUTER_API_KEY")
    if not api_key:
        return {"error": "OPENROUTER_API_KEY não configurada."}

    context_prompt = f"""Você é o Consultor Pedagógico Sênior do Ensino Soberano Kids.
Analise a seguinte atividade escolar:
- Tipo: {activity_type}
- Ano Escolar: {grade_level}
- Amostra dos Dados gerados: {json.dumps(data, ensure_ascii=False)[:1200]}
"""

    if jev_results and jev_results.get("needs_escalation"):
        context_prompt += f"""
O Sentinela Jev (Sistema 1) sinalizou um alerta:
- Motivo: {jev_results.get('escalation_reason')}
- Métricas: {json.dumps(jev_results.get('answers'), ensure_ascii=False)}

Por favor, faça um diagnóstico técnico e pedagógico imediato:
1. Houve real violação pedagógica ou foi um caso limítrofe?
2. Como ajustar os parâmetros para garantir conformidade total?
"""
    else:
        context_prompt += """
Elabore um Parecer Pedagógico formal e conciso (máximo 3 parágrafos) para o professor e coordenação:
1. Habilidades da BNCC trabalhadas nesta atividade.
2. Benefícios cognitivos para a faixa etária.
3. Sugestão prática de mediação em sala de aula.
"""

    req = urllib.request.Request(
        "https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        },
        data=json.dumps({
            "model": "google/gemini-2.5-flash",
            "messages": [
                {"role": "system", "content": "Você é um especialista pedagógico em BNCC e design instrucional infantil."},
                {"role": "user", "content": context_prompt}
            ],
            "temperature": 0.3
        }).encode("utf-8")
    )

    try:
        with urllib.request.urlopen(req) as resp:
            res_data = json.loads(resp.read().decode("utf-8"))
            duration_ms = int((time.time() - start) * 1000)
            content = res_data["choices"][0]["message"]["content"]
            usage = res_data.get("usage", {})
            return {
                "model": "google/gemini-2.5-flash",
                "latency_ms": duration_ms,
                "tokens": usage.get("total_tokens", 0),
                "report": content
            }
    except Exception as e:
        return {"error": str(e), "latency_ms": int((time.time() - start) * 1000)}

if __name__ == "__main__":
    print("=== TESTE DA SIMBIOSE: JEV (SISTEMA 1) + GEMINI (SISTEMA 2) ===")
    
    # Exemplo: Atividade de Multiplicação de 2º Ano com 2 Fatores
    amostra_multiplicacao = {
        "operacao": "×",
        "contas": [
            {"num1": 4, "num2": 3, "resposta": 12, "linhas": 2},
            {"num1": 5, "num2": 6, "resposta": 30, "linhas": 2},
            {"num1": 7, "num2": 2, "resposta": 14, "linhas": 2}
        ]
    }
    
    print("\n1. Executando Sentinela Rápido com Jev...")
    resultado_jev = audit_activity_with_jev("multiplication", amostra_multiplicacao, "2ano")
    print(f" -> Modelo: {resultado_jev['model']}")
    print(f" -> Latência: {resultado_jev['latency_ms']}ms")
    print(f" -> Tokens: {resultado_jev['tokens']}")
    print(f" -> Aprovação Pedagógica: {resultado_jev['answers']['adequacao_pedagogica']['approved']}")
    print(f" -> Regra Estrita de 2 Fatores: {resultado_jev['answers']['estritamente_dois_fatores']['approved']}")
    print(f" -> Nível BNCC: {resultado_jev['answers']['nivel_bncc']['choice']} (Confiança: {resultado_jev['answers']['nivel_bncc']['confidence']})")
    print(f" -> Precisa escalonar para Gemini? {resultado_jev['needs_escalation']}")

    print("\n2. Solicitando Parecer Pedagógico Avançado com Gemini 2.5 Flash...")
    resultado_gemini = audit_deep_with_gemini("multiplication", amostra_multiplicacao, "2ano", resultado_jev, request_pedagogical_report=True)
    print(f" -> Modelo: {resultado_gemini['model']}")
    print(f" -> Latência: {resultado_gemini['latency_ms']}ms")
    print(f" -> Tokens: {resultado_gemini['tokens']}")
    print("\n--- PARECER DO GEMINI ---")
    print(resultado_gemini.get("report"))
    print("-------------------------")
