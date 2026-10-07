# Especificação: auditoria automática do Jev

**Projeto:** Ensino Soberano Kids

**Data:** 07/10/2026

**Estado:** desenho aprovado pelo usuário; aguardando revisão desta especificação antes do plano de implementação.

## Objetivo

Executar uma auditoria real do Jev automaticamente após cada nova atividade pedagógica ser gerada, cobrindo os módulos de atividade da aplicação. A auditoria informa conformidade ou alerta sem atrasar nem impedir a geração da folha.

Jev atua como validador estruturado. Ele não reescreve nem altera automaticamente a atividade. O professor continua decidindo como tratar os alertas.

## Estado atual

- `js/ai-sentinel.js` chama `/api/audit/fast` somente quando o modal de auditoria é aberto.
- Em caso de falha, o front-end cria um resultado local fixo com aprovação e métricas aparentes de Jev.
- `js/app.js` coordena a geração, mas vários modos especiais não preenchem `currentData`.
- `server.py` serve os arquivos e as rotas de auditoria no mesmo processo. Atualmente escuta em todas as interfaces de rede.
- O `Dockerfile` e o Nginx servem apenas arquivos estáticos; não há encaminhamento de `/api` para Python.
- O SDK Python está disponível localmente na versão `0.7.2`. O acesso oficial usa `TYPESAFE_API_KEY`, mantida no servidor, conforme o [repositório oficial do SDK](https://github.com/typesafe-ai/typesafe-sdk-python).

## Escopo

### Incluído

1. Auditoria real para cada nova geração dos modos pedagógicos da aplicação, incluindo a renderização inicial, a troca para outra atividade e alterações de parâmetros que gerem novos exercícios.
2. Cobertura dos modos especiais de atividade renderizados fora do artigo padrão, incluindo certificado/passaporte, avaliação diagnóstica, tabuleiro e puzzle interativo, com adaptadores próprios quando necessário.
3. Um ponto de integração centralizado que receba o tipo e a série da atividade e um estado pedagógico normalizado, sem reutilizar acidentalmente os dados da atividade anterior.
4. Requisição assíncrona e não bloqueante. Uma nova geração substitui o estado visual da auditoria anterior; respostas atrasadas não podem marcar a atividade atual.
5. Deduplicação em memória por impressão digital do tipo, série e dados enviados, para evitar cobrança repetida em re-renderizações sem novo conteúdo. O botão de auditoria manual pode forçar uma nova chamada.
6. Indicadores verdadeiros de estado: aguardando, aprovada, alerta ou não auditada. Mostrar latência e uso somente se retornados pela API.
7. Manter o modal manual como forma de consultar detalhes e solicitar o parecer Gemini, que continua sob demanda.
8. Execução local pelo `server.py` e suporte a deploy Docker com a rota `/api` encaminhada pelo Nginx ao backend Python em rede interna.

### Fora do escopo

- Enviar uma chamada Jev em respostas, impressão, mudança de zoom, redimensionamento ou outra atualização puramente visual.
- Chamar Gemini automaticamente ou alterar conteúdo aprovado/reprovado sem decisão do professor.
- Expor chaves TypeSafe ou OpenRouter ao JavaScript do navegador.
- Fazer a auditoria depender da disponibilidade da rede. Sem backend ou serviço Jev, a atividade continua utilizável e aparece como não auditada.
- Garantir auditoria em hospedagem estática que não forneça um endpoint de backend seguro. Nessas hospedagens, o status informa que o serviço não está configurado.

## Arquitetura e fluxo

1. Cada caminho que conclui a geração de uma atividade pedagógica emite um evento central com identificador do módulo, série e estado normalizado.
2. Adaptadores por tipo de atividade montam dados de domínio. Para os módulos que ainda não expõem dados em `currentData`, o adaptador extrai parâmetros estruturados do formulário ou do modelo gerado, sem serializar a página inteira.
3. Antes do envio, o cliente remove nomes de alunos, escola, telefone, CNPJ, logotipos e outros dados de identificação. Envia somente o mínimo necessário para avaliar a atividade e sua série.
4. `js/ai-sentinel.js` agenda a chamada de `/api/audit/fast` sem bloquear a folha e atualiza o badge e o painel da auditoria com o resultado verdadeiro.
5. `server.py` mantém a chave TypeSafe no processo servidor e chama a SDK oficial. O backend local deve escutar em `127.0.0.1`; em container, escuta na interface interna necessária ao Nginx, sem publicar a porta de IA na rede externa.
6. O deploy Docker usa um serviço Nginx e um serviço Python dedicado, ligado a ambos por uma rede interna sem porta pública. `Dockerfile.api` produz a imagem do backend, `docker-compose.yml` declara os dois serviços e o workflow Docker publica as imagens de frontend e API para o stack. O Nginx encaminha `/api/audit/fast` e `/api/audit/deep` ao backend pelo nome de serviço privado. `TYPESAFE_API_KEY` é fornecida como segredo de runtime.

## Tratamento de falhas e segurança

- Falha de rede, timeout, chave ausente, limite da API ou resposta inválida resulta em estado “não auditada”, com motivo resumido para o professor.
- Nenhuma resposta local fixa pode ser rotulada como Jev ou como aprovação.
- A criação da atividade não espera a auditoria e permanece disponível mesmo se o serviço estiver indisponível.
- Limitar tamanho dos dados enviados, definir timeout e evitar gravar payloads pedagógicos ou segredos em logs.
- Restringir o backend local ao loopback. O serviço em container não recebe porta pública; apenas o Nginx pode acessá-lo.
- A interface não deve afirmar “zero alucinação” ou certeza absoluta. Resultado estruturado limita o formato, mas não elimina erro de julgamento.

## Comportamento visível

- O badge superior reflete o estado da geração atual, em vez de iniciar verde com “Jev ativo” antes de qualquer resposta.
- A atividade aparece imediatamente; o indicador pode mostrar “Aguardando Jev” enquanto a chamada ocorre.
- Resultado aprovado mostra resposta e métricas retornadas pelo serviço.
- Resultado com alerta destaca o critério que precisa de atenção e preserva o conteúdo para revisão docente.
- Indisponibilidade mostra “Não auditada” e um motivo útil, sem aprovação presumida.
- O modal mantém os detalhes da última auditoria e o botão para executar uma nova auditoria manual.

## Arquivos esperados

- `js/app.js`: sinalizar geração nova e integrar todos os caminhos de atividade.
- `js/ai-sentinel.js`: fila/deduplicação, proteção contra respostas obsoletas e estados visuais reais.
- `audit_sentinel.py`: chamada tipada Jev, tratamento de erro e configuração explícita da chave.
- `server.py`: binding e encaminhamento seguros, timeout e respostas consistentes.
- `index.html`: texto e indicador de estado do Jev.
- `nginx.conf`, `Dockerfile`, `Dockerfile.api`, `docker-compose.yml`, workflow de publicação e `requirements.txt`: backend de IA acessível somente pela rede interna e imagem API publicada junto da aplicação.
- `AGENTS.md`, `CLAUDE.md`, `README.md` e `docs/HANDOFF.md`: refletir o comportamento depois de implementado.

## Critérios de aceitação

1. Uma geração nova em cada modo de atividade elegível aciona no máximo uma auditoria real para seu estado normalizado.
2. Re-renderização visual sem mudança do estado pedagógico não dispara cobrança adicional.
3. Respostas atrasadas não sobrescrevem o indicador de uma atividade gerada depois.
4. Todo dado encaminhado exclui informações pessoais e dados institucionais desnecessários.
5. Um resultado “aprovado” só aparece quando veio de uma resposta válida da API Jev.
6. Falhas do Jev deixam a atividade disponível e a marcam como “não auditada”.
7. O uso local e o caminho Docker documentado alcançam o backend sem expor a chave no cliente ou a porta Python publicamente.
8. Gemini continua sob demanda.

## Premissas e limites

- Cada auditoria real pode gerar uso e cobrança do serviço TypeSafe. A deduplicação reduz chamadas repetidas, mas uma nova atividade com conteúdo diferente gera uma nova chamada.
- Hospedagens exclusivamente estáticas continuam sem auditoria real até disponibilizarem um backend seguro na mesma origem.
- A interface não deve converter probabilidades em uma garantia pedagógica absoluta; o parecer permanece apoio ao professor.
- Esta especificação define o comportamento desejado; ainda não descreve a sequência de edição nem confirma a implementação.
