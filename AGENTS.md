# 🤖 AGENTS.md — Diretrizes e Persistência do Repositório

Este arquivo é a fonte compartilhada de verdade entre diferentes IAs, chats e sessões de trabalho para o projeto **Ensino Soberano Kids**. Toda LLM ou agente que entrar neste repositório DEVE ler e seguir estritamente as instruções abaixo.

---

## 📌 1. Persistência
- **O repositório Git é a única fonte compartilhada de verdade entre LLMs e sessões**: Nenhuma instrução, aprendizado ou correção pode ficar retido apenas na memória volátil do chat ou no log de ferramentas temporárias.
- **Sobrevivência entre trocas de IA**: O que precisa sobreviver à troca de LLM/chat **mora obrigatoriamente em arquivo versionado** no Git.
- **Regra Fixa de Atualização Imediata**: Toda correção importante ou decisão solicitada pelo usuário deve ser registrada em arquivo versionado **NA HORA**, e **NUNCA apenas no handoff final**.

---

## 🔒 2. Decisões Travadas (Correções que NÃO se repetem)

> **Regra**: Esta seção armazena decisões imutáveis e correções já efetuadas. Toda vez que o usuário pedir uma correção estrutural, pedagógica ou arquitetural, ela DEVE ser registrada aqui imediatamente com o contexto e o porquê.

| Data | Decisão Travada | Contexto & Porquê | Arquivos Impactados |
|---|---|---|---|
| 06/10/2026 | **Autonomia Offline (Vendor Local com Fallback)** | As 4 bibliotecas front-end (Tailwind, Lucide, html2pdf, Confetti) residem localmente em `vendor/` para garantir execução offline em escolas e laboratórios, com script de fallback CDN caso o recurso local falhe. | `vendor/*`, `index.html` |
| 06/10/2026 | **Expansão de Vocabulário BNCC & Ortografia Estrita** | Categorias ampliadas com "Profissões & Trabalhadores", "Emoções & Sentimentos" e "Meio Ambiente & Ecologia". Correção ortográfica permanente de anatomia (`"CABECA"` sem desvios). | `js/categories.js`, `test_verification.js` |
| 06/10/2026 | **Simbiose de IA: Jev (Sistema 1) + Gemini (Sistema 2)** | Validação híbrida: Jev atua como sentinela ultrarrápido (<500ms, snap judgment sem alucinação) e Gemini 2.5 Flash atua sob demanda ou escalonamento para emitir parecer pedagógico formal alinhado à BNCC, com persistência local e impressão oficial. | `server.py`, `audit_sentinel.py`, `js/ai-sentinel.js`, `index.html` |
| 04/10/2026 | **Multiplicação opera ESTRITAMENTE com 2 fatores** | Na matemática escolar do Ensino Fundamental (BNCC), a multiplicação possui apenas 2 fatores (multiplicando × multiplicador em 2 linhas). **Não utiliza 3 parcelas/linhas empilhadas** ($A \times B \times C$). Múltiplas parcelas (2 e 3 parcelas) são recurso exclusivo da Adição. | `js/math.js`, `js/app.js`, `index.html`, `test_verification.js` |
| 04/10/2026 | **Geometria estrita de impressão A4 (210mm × 297mm)** | A folha individual de atividade não pode sofrer quebra de página para uma 2ª folha em branco ou cortada. `margin: 0` no `@page` e container travado em `210mm x 297mm` com padding equilibrado (7mm 9mm). Apostilas (`.booklet-page`) e Mala Direta (`.batch-student-page`) mantêm `page-break-after: always`. | `css/worksheet.css`, `js/app.js`, `js/booklet.js`, `js/batch-students.js` |
| 04/10/2026 | **Acervo de 355 desenhos vetoriais SEM duplicações** | Todos os 355 itens do `DrawingDatabase` possuem geometria vetorial SVG autêntica e representativa da figura real. Proibido reutilizar silhuetas genéricas repetidas apenas trocando rótulo. | `js/drawing-database.js`, `js/step-by-step-drawing.js` |
| 04/10/2026 | **Top Header Minimalista + Menu Hambúrguer Categorizado** | O cabeçalho superior deve ser limpo e focado no essencial (Gabarito, Lousa, Imprimir). Configurações institucionais, mala direta, apostila e as categorias de atividades ficam no Drawer hambúrguer agrupadas por área de conhecimento. | `index.html`, `js/app.js` |
| 01/10/2026 | **Drive E é a raiz mandatória do workspace** | Todo código, repositório e script deste projeto deve residir estritamente em `E:\Projetos_Novos\gerador-atividades-infantis`, nunca no drive `C:\`. | Workspace global |

*(Novas correções solicitadas pelo usuário devem ser inseridas nesta tabela imediatamente no momento do pedido).*

---

## ⚡ 3. Comando: "salva tudo"

Quando o usuário disser **"salva tudo"**, **"handoff"** ou **"encerra sessão"**, o agente DEVE executar rigorosamente o seguinte checklist de 4 passos:

### Checklist de Execução do "salva tudo":
1. **Decisões travadas $\to$ `AGENTS.md` (+ `CLAUDE.md`)**:
   - Consolidar e registrar quaisquer novas correções, regras ou decisões arquiteturais tomadas durante a conversa na tabela da seção 2 deste arquivo.
2. **Handoff $\to$ `docs/HANDOFF.md`**:
   - Atualizar `docs/HANDOFF.md` com o estado exato do repositório, contendo:
     - **Estado Atual**: panorama funcional e operacional da aplicação;
     - **O Que Foi Feito**: lista cirúrgica de entregas e arquivos alterados na sessão;
     - **Pendente**: backlog imediato para a próxima sessão;
     - **Dúvidas & Decisões em Aberto**: pontos que dependem de alinhamento com o usuário;
     - **Bloqueios**: impedimentos técnicos atuais e como mitigá-los;
     - **Comandos de Verificação**: status de testes (`node test_verification.js`).
3. **Git Commit do que falta (PUSH SÓ COM O OK DO USUÁRIO)**:
   - Rodar `git status` e `git diff --stat` para auditoria de higiene;
   - Fazer `git add` dos arquivos tocados e gerar commit com mensagem no padrão Conventional Commits;
   - **ATENÇÃO**: O `git push` **NUNCA** é feito automaticamente no "salva tudo" — somente após o **OK explícito do usuário**.
4. **Relatório + Pontas Soltas**:
   - Apresentar ao usuário um resumo claro, objetivo e sem enrolação do que foi salvo, indicando que o repositório está pronto para troca de LLM/chat e listando as eventuais pontas soltas.

---

## 🚨 4. Proatividade ao Encerrar
Sempre que o usuário sinalizar que vai encerrar a sessão (ex: *"por hoje é só"*, *"vou sair"*, *"depois continuo"*, *"terminamos por aqui"*), a IA DEVE **oferecer proativamente a execução do "salva tudo"** antes de se despedir.
