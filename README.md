# 👑 Ensino Soberano Kids (Anime Edition) 🌸

> **Plataforma Pedagógica e Cognitiva Infantil • Atividades & Apostilas Imprimíveis A4**  
> Desenvolvida com arquitetura modular client-side (Zero Dependência de Backend), permitindo execução 100% offline ou hospedagem estática escalável em qualquer CDN (Cloudflare Pages, Vercel, Netlify ou GitHub Pages).

---

## 🌟 Visão Geral

O **Ensino Soberano Kids** é uma suíte educacional completa para professores, coordenadores pedagógicos e famílias. A plataforma combina estética lúdica *Anime Chibi*, rigor curricular alinhado à **BNCC (Base Nacional Comum Curricular)** e tecnologias interativas para sala de aula.

---

## 🚀 Principais Módulos e Recursos (33 Módulos Integrados)

### 1. 🏛️ Alinhamento Curricular BNCC & Filtro por Faixa Etária
- Mapeamento dinâmico de códigos e competências oficiais da BNCC para cada atividade:
  - **Educação Infantil (4 a 5 anos)**: Códigos `EI03ET07`, `EI03EO01`, `EI03CG05`, `EI03EO03`.
  - **1º Ano Fundamental (6 a 7 anos)**: Códigos `EF01LP02`, `EF01LP08`, `EF01MA01`, `EF01MA06`, `EF01MA09`, `EF01MA12`.
  - **2º Ano Fundamental (7 a 8 anos)**: Códigos `EF02MA06`, `EF02LP04`, `EF02MA05`.
  - **3º ao 5º Ano Fundamental (8 a 11 anos)**: Fatos avançados de multiplicação, frações e geometria.
- Indicador visual animado no menu recomendando as atividades ideais para a série selecionada.
- Código BNCC impresso discretamente no rodapé de cada folha A4.

### 2. 🧩 Puzzles Cognitivos & Desafios de Raciocínio
- **Sudoku Kids**: Modos 4x4 e 6x6, permitindo jogar com números ou emojis lúdicos.
- **Criptograma Ninja**: Tabela de substituição simbólica para decifrar mensagens secretas inspiradoras.
- **Pinte por Matemática**: Mosaicos geométricos numerados onde o aluno calcula e colore de acordo com a legenda.
- **Probleminhas Contextualizados**: Histórias do cotidiano com 3 campos estruturados (*desenho de estratégia, cálculo matemático e resposta completa*).
- **Labirintos Vetoriais (DFS)**: Algoritmo de geração procedural com garantia de caminho único.
- **Tabela Pitagórica**: Modos com lacunas para preencher, completa para estudo ou vazia para desafio.

### 3. 🏫 Sistema Institucional White-label Escolar
- Personalização visual completa para escolas parceiras:
  - Upload de logotipo escolar (armazenado em Base64 local).
  - Configuração de Cores Primária e Secundária da instituição.
  - Campos de identificação: Nome da Escola, Unidade/Campus, Cidade, CNPJ e Telefone.
  - Multi-perfis com persistência em `localStorage` para alternar entre diferentes escolas ou filiais em 1 clique.

### 4. 📚 Construtor de Mega Apostilas em Lote (30 a 50 Páginas)
- Gerador assíncrono de workbooks completos:
  - Presets inteligentes de **30 páginas** e **50 páginas**, além de modo 100% personalizado.
  - Capa colorida ilustrada com o logotipo da escola parceira.
  - Sumário automatizado com paginação dinâmica.
  - Caderno de Gabaritos no final da apostila com soluções completas.
  - Barra de progresso assíncrona que não trava a interface do navegador.

### 5. 📋 Ficha de Avaliação Diagnóstica & Mapeamento BNCC
- Instrumento oficial de sondagem bimestral com 4 eixos pedagógicos:
  1. *Linguagem, Letramento & Alfabetização*.
  2. *Pensamento Lógico-Matemático*.
  3. *Raciocínio Espacial, Lógica & Foco*.
  4. *Autonomia & Desenvolvimento Socioemocional*.
- Gráfico Radar de Competências em SVG vetorial puro.
- Parecer descritivo e linhas oficiais para homologação e assinaturas.

### 6. 🎲 Jogos de Tabuleiro Pedagógicos A4 com 4 Temas
- Tabuleiro de 24 casas ilustradas dispostas em malha lúdica:
  - **Trilha da Sabedoria Ninja**: Portais de fumaça, shurikens matemáticas e pergaminhos.
  - **A Jornada pelo Reino Encantado**: Castelos, poções de voo, tochas e dragões.
  - **Missão Cósmica: Rumo às Estrelas**: Base de lançamento, dobra espacial e constelações.
  - **Grande Safári: Expedição Selvagem**: Jipe na savana, rios com canoa e animais silvestres.
- Seção de recorte com 4 peões de personagens e molde para montagem de dado 3D de 6 faces.

### 7. 🎮 Modo Quiz Interativo & Game Show na Lousa Digital
- Ambiente gamificado para projetores, lousas digitais e tablets em sala de aula:
  - Banco multidisciplinar de perguntas (Matemática, Português, Ciências e Charadas).
  - Temporizador de 20s com contagem regressiva e efeitos sonoros via **Web Audio API** (`playTickSound`, `playCorrectSound`, `playWrongSound`).
  - Suporte total a atalhos de teclado (`1`, `2`, `3`, `4` e `Enter`).
  - Chuva de confetes digitais e mascote comemorativo reativo.

### 8. 👥 Mala Direta Escolar / Turma em Massa
- Geração em massa de documentos personalizados com 1 clique:
  - Cole a lista de chamada da turma (1 nome por linha).
  - Emite Diplomas de Mérito, Passaportes de Aprendizado, Fichas de Avaliação Diagnóstica ou Capas de Caderno para todos os alunos em um único PDF A4 paginado.

### 9. 📱 Tecnologia Híbrida & Offline
- **Smart QR Code A4 Offline**: Vetor SVG puro impresso em cada atividade, direcionando para a Central do Aluno sem necessidade de conexão externa para validação.
- **Lousa Digital / Modo Tablet**: Permite à criança resolver qualquer atividade na tela com lápis grafite, caneta azul, caneta vermelha, marca-texto, borracha e leitura falada com Web Speech API em pt-BR.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend Core**: HTML5 Semântico, CSS3 Moderno, JavaScript ES6+ Modular (Universal UMD/Vanilla).
- **Estilização**: Tailwind CSS (via CDN) + Estilos customizados para impressão vetorial A4 de alta fidelidade (`print`).
- **Áudio & Voz**: Web Audio API (sintetizador de ondas senoidais, triangulares e arpeggios sem arquivos externos de áudio) + Web Speech API (`pt-BR`).
- **Geração de Documentos**: `html2pdf.js`, SVG vetorial inline e Canvas API nativo.
- **Biblioteca de Ícones**: Lucide Icons.

---

## 💻 Como Executar Localmente

Como a aplicação é 100% estática e não requer compiladores nem banco de dados:

1. Clone o repositório:
   ```bash
   git clone https://github.com/Camposoberano/ensino-soberano-kids.git
   ```
2. Abra a pasta do projeto e dê um duplo clique no arquivo `index.html` (ou execute `iniciar.bat`).
3. Para rodar com um servidor local leve:
   ```bash
   npx serve .
   ```

---

## 🧪 Testes Automatizados de Verificação

Para executar a auditoria headless de todos os 33 módulos em ambiente Node.js:
```bash
node test_verification.js
```
Saída esperada:
```
=== TODOS OS 33 MÓDULOS FORAM VERIFICADOS COM ÊXITO (EXIT CODE 0) ===
```

---

## 🌐 Publicação em Produção

O projeto está pronto para deploy instantâneo em:
- **Cloudflare Pages**: Conecte o repositório no painel do Cloudflare (Build command: vazio, Output directory: `/`).
- **Vercel / Netlify**: Importe o repositório com 1 clique.
- **GitHub Pages**: Vá em *Settings* $\rightarrow$ *Pages* $\rightarrow$ selecione o branch `master` e raiz `/`.

---

## 📄 Licença

Propriedade do ecossistema **Ensino Soberano**. Todos os direitos reservados.
