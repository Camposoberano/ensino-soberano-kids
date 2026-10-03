/**
 * Módulo de Inteligência Pedagógica & Alinhamento à BNCC
 * Base Nacional Comum Curricular (Brasil) - Ensino Soberano Kids
 */
window.BNCCModule = (function () {

  const LEVELS = [
    { id: "all", nome: "Livre / Todos os Níveis", faixa: "Todas as idades", icone: "sparkles" },
    { id: "infantil", nome: "Educação Infantil", faixa: "4 a 5 anos", icone: "baby" },
    { id: "1ano", nome: "1º Ano Fundamental", faixa: "6 a 7 anos", icone: "backpack" },
    { id: "2ano", nome: "2º Ano Fundamental", faixa: "7 a 8 anos", icone: "rocket" },
    { id: "3ano_5ano", nome: "3º ao 5º Ano Fundamental", faixa: "8 a 11 anos", icone: "crown" }
  ];

  /**
   * Banco de Competências e Habilidades Oficiais da BNCC por atividade e nível
   */
  const BNCC_DATABASE = {
    // ── LÍNGUA PORTUGUESA & ALFABETIZAÇÃO ──
    wordsearch: {
      infantil: { code: "EI03EF09", desc: "Levantar hipóteses em relação à linguagem escrita e reconhecer palavras familiares." },
      "1ano": { code: "EF01LP02", desc: "Escrever palavras com correspondência fonema-grafema regular." },
      "2ano": { code: "EF02LP04", desc: "Ler e escrever corretamente palavras com sílabas complexas." },
      "3ano_5ano": { code: "EF03LP05", desc: "Identificar o número de sílabas e classificação tônica das palavras." }
    },
    scramble: {
      infantil: { code: "EI03EF09", desc: "Conhecer diferentes letras do alfabeto e explorar ordenação de sons." },
      "1ano": { code: "EF01LP07", desc: "Identificar fonemas e grafemas e sua ordenação na formação de palavras." },
      "2ano": { code: "EF02LP08", desc: "Segmentar corretamente as palavras ao escrever e formar vocábulos." },
      "3ano_5ano": { code: "EF03LP02", desc: "Escrever palavras utilizando regras ortográficas com autonomia." }
    },
    tracing: {
      infantil: { code: "EI03CG05", desc: "Coordenar suas habilidades manuais no traçado de grafismos e letras." },
      "1ano": { code: "EF01LP10", desc: "Nomear as letras do alfabeto e recitá-lo na ordem das letras." },
      "2ano": { code: "EF02LP01", desc: "Utilizar pauta caligráfica para aprimorar legibilidade e traçado." },
      "3ano_5ano": { code: "EF35LP07", desc: "Desenvolver fluência e caligrafia legível em produções textuais." }
    },

    // ── MATEMÁTICA & OPERAÇÕES ──
    addition: {
      infantil: { code: "EI03ET07", desc: "Relacionar números às suas respectivas quantidades e juntar coleções." },
      "1ano": { code: "EF01MA06", desc: "Construir fatos básicos da adição e utilizá-los no cálculo mental ou escrito." },
      "2ano": { code: "EF02MA05", desc: "Construir e aplicar fatos básicos de adição com agrupamento e cálculo." },
      "3ano_5ano": { code: "EF03MA05", desc: "Utilizar diferentes procedimentos de cálculo com números naturais." }
    },
    subtraction: {
      infantil: { code: "EI03ET07", desc: "Compreender a ideia de retirar itens de um conjunto de objetos." },
      "1ano": { code: "EF01MA08", desc: "Resolver problemas de subtração envolvendo situações de tirar e comparar." },
      "2ano": { code: "EF02MA06", desc: "Resolver problemas de subtração com significados de tirar, comparar e completar." },
      "3ano_5ano": { code: "EF03MA06", desc: "Resolver e elaborar problemas de adição e subtração com apoio visual." }
    },
    multiplication: {
      infantil: { code: "EI03ET07", desc: "Introdução à ideia de repetição de conjuntos e quantidades." },
      "1ano": { code: "EF01MA06", desc: "Compreender adição repetida de parcelas iguais." },
      "2ano": { code: "EF02MA07", desc: "Construir fatos básicos da multiplicação (dobro, triplo, quádruplo)." },
      "3ano_5ano": { code: "EF03MA03", desc: "Construir e utilizar fatos fundamentais da multiplicação e divisão." }
    },
    division: {
      infantil: { code: "EI03ET07", desc: "Experiências práticas de repartir objetos igualmente entre amigos." },
      "1ano": { code: "EF01MA08", desc: "Compreender a divisão lúdica por partição e metade." },
      "2ano": { code: "EF02MA08", desc: "Resolver problemas de partição e cálculo de metade." },
      "3ano_5ano": { code: "EF03MA07", desc: "Resolver problemas de divisão com significado de repartição equitativa." }
    },
    multichart: {
      infantil: { code: "EI03ET07", desc: "Exploração de tabelas visuais e regularidades numéricas." },
      "1ano": { code: "EF01MA04", desc: "Contar a partir de qualquer número em escalas ascendentes." },
      "2ano": { code: "EF02MA08", desc: "Organização retangular e regularidades na tabuada de multiplicação." },
      "3ano_5ano": { code: "EF03MA03", desc: "Dominar a Tabela Pitagórica e identificar propriedades comutativas." }
    },
    storyproblems: {
      infantil: { code: "EI03ET07", desc: "Interpretar pequenas situações-problema orais com apoio de ilustrações." },
      "1ano": { code: "EF01MA08", desc: "Resolver problemas do cotidiano envolvendo ações de juntar, separar e desenhar." },
      "2ano": { code: "EF02MA06", desc: "Interpretar texto e formular estratégias pessoais de cálculo com resposta." },
      "3ano_5ano": { code: "EF04MA05", desc: "Resolver situações-problema de múltiplas etapas com formulação textual." }
    },

    // ── RACIOCÍNIO LÓGICO, MEDIDAS & FORMAS ──
    time: {
      infantil: { code: "EI03ET06", desc: "Relatar fatos e organizar sequências temporais (manhã, tarde, noite)." },
      "1ano": { code: "EF01MA16", desc: "Reconhecer e ler horas em relógios digitais e analógicos." },
      "2ano": { code: "EF02MA19", desc: "Medir a duração de intervalos de tempo e ler horas exatas e meias horas." },
      "3ano_5ano": { code: "EF03MA22", desc: "Ler e registrar horas em horas, minutos e segundos em relógios." }
    },
    patterns: {
      infantil: { code: "EI03ET05", desc: "Classificar objetos e identificar repetições de atributos visuais." },
      "1ano": { code: "EF01MA09", desc: "Organizar e ordenar objetos familiares ou figuras em sequências lógicas." },
      "2ano": { code: "EF02MA09", desc: "Construir sequências de números naturais em ordem crescente e decrescente." },
      "3ano_5ano": { code: "EF03MA10", desc: "Identificar regularidades em sequências numéricas e antecipar termos." }
    },
    shapes: {
      infantil: { code: "EI03ET05", desc: "Classificar figuras considerando tamanho, cor e forma geométrica." },
      "1ano": { code: "EF01MA14", desc: "Identificar e nomear figuras geométricas planas (círculo, quadrado, triângulo)." },
      "2ano": { code: "EF02MA15", desc: "Reconhecer e contar lados e vértices de figuras geométricas planas." },
      "3ano_5ano": { code: "EF03MA15", desc: "Classificar figuras geométricas planas segundo seus lados e eixos." }
    },
    counting: {
      infantil: { code: "EI03ET07", desc: "Relacionar números às suas respectivas quantidades em conjuntos lúdicos." },
      "1ano": { code: "EF01MA01", desc: "Utilizar números naturais como indicador de quantidade de elementos." },
      "2ano": { code: "EF02MA01", desc: "Comparar e ordenar quantidades de elementos até a centena." },
      "3ano_5ano": { code: "EF03MA01", desc: "Ler, escrever e comparar números naturais de várias ordens." }
    },
    matching: {
      infantil: { code: "EI03ET01", desc: "Estabelecer relações de comparação entre objetos e atributos." },
      "1ano": { code: "EF01LP08", desc: "Relacionar elementos correspondentes (antônimos, letras e palavras)." },
      "2ano": { code: "EF02LP04", desc: "Associar conceitos, vocábulos e significados correlatos." },
      "3ano_5ano": { code: "EF03LP09", desc: "Compreender relações semânticas entre palavras e categorias." }
    },
    maze: {
      infantil: { code: "EI03CG02", desc: "Demonstrar controle corporal e coordenação viso-motora em trajetos." },
      "1ano": { code: "EF01MA12", desc: "Descrever a localização de pessoas e objetos no espaço e trajetos." },
      "2ano": { code: "EF02MA12", desc: "Identificar e registrar trajetos em malhas quadriculadas e mapas." },
      "3ano_5ano": { code: "EF03MA12", desc: "Descrever e representar trajetórias e localização de pontos." }
    },

    // ── CONHECIMENTOS GERAIS, ARTES & CIÊNCIAS ──
    body: {
      infantil: { code: "EI03CG01", desc: "Reconhecer as partes do corpo e valorizar sensações e cuidados." },
      "1ano": { code: "EF01CI02", desc: "Localizar, nomear e representar graficamente partes do corpo humano." },
      "2ano": { code: "EF01CI04", desc: "Comparar características físicas e identificar os cinco sentidos humanos." },
      "3ano_5ano": { code: "EF04CI08", desc: "Compreender a integração dos sistemas corporais e sentidos humanos." }
    },
    flashcards: {
      infantil: { code: "EI03EF01", desc: "Expressar ideias sobre vivências por meio de cartões ilustrativos." },
      "1ano": { code: "EF01LP05", desc: "Reconhecer o sistema de escrita alfabética através de memória visual." },
      "2ano": { code: "EF02LP04", desc: "Memorizar vocabulário e ortografia com uso de cartões de estudo." },
      "3ano_5ano": { code: "EF03LP01", desc: "Autonomia de estudo e memorização ativa de conceitos." }
    },
    origami: {
      infantil: { code: "EI03TS02", desc: "Expressar-se por meio de colagem, dobradura e artes manuais." },
      "1ano": { code: "EF15AR04", desc: "Experimentar diferentes formas de expressão artística tridimensional." },
      "2ano": { code: "EF15AR05", desc: "Explorar a criação artística com materiais diversos e dobraduras de papel." },
      "3ano_5ano": { code: "EF15AR06", desc: "Desenvolver processos de criação em artes visuais e técnicas mistas." }
    },
    coloring: {
      infantil: { code: "EI03TS02", desc: "Expressar-se livremente por meio de desenho, pintura e uso de cores." },
      "1ano": { code: "EF15AR04", desc: "Experimentar pintura e desenho com controle de preenchimento e traço." },
      "2ano": { code: "EF15AR04", desc: "Desenvolver percepção estética e harmonização cromática." },
      "3ano_5ano": { code: "EF15AR05", desc: "Criação visual com apreciação de traços, luzes e contrastes." }
    },
    drawing: {
      infantil: { code: "EI03TS02", desc: "Expressar-se livremente por meio de desenho, traçado geométrico e uso de cores." },
      "1ano": { code: "EF15AR04", desc: "Experimentar técnicas de desenho passo a passo, cópia por grade e controle motor." },
      "2ano": { code: "EF15AR05", desc: "Desenvolver percepção espacial, proporção, transposição por malha e pintura." },
      "3ano_5ano": { code: "EF15AR06", desc: "Criação visual com noções de escala, coordenadas cartesianas e estilização artística." }
    },
    slidingpuzzle: {
      infantil: { code: "EI03ET05", desc: "Classificar e ordenar peças desenvolvendo noções espaciais." },
      "1ano": { code: "EF01MA09", desc: "Desenvolver planejamento e antecipação de movimentos em jogos lógicos." },
      "2ano": { code: "EF02MA09", desc: "Raciocínio heurístico e ordenação numérica em malha 3x3." },
      "3ano_5ano": { code: "EF03MA10", desc: "Estratégias de resolução de problemas e algoritmos de permutação." }
    },
    certificate: {
      infantil: { code: "EI03EO04", desc: "Comunicar suas conquistas e sentimentos de sucesso no aprendizado." },
      "1ano": { code: "EF15AR01", desc: "Valorizar o percurso individual e coletivo de aprendizagem escolar." },
      "2ano": { code: "EF15AR01", desc: "Reconhecimento do mérito, foco e determinação pedagógica." },
      "3ano_5ano": { code: "EF15AR01", desc: "Certificação formal de dedicação e autonomia acadêmica." }
    },
    sudoku: {
      infantil: { code: "EI03ET05", desc: "Classificar objetos desenvolvendo noções de não-repetição em linhas e colunas." },
      "1ano": { code: "EF01MA09", desc: "Identificar padrões e completar sequências sem elementos repetidos." },
      "2ano": { code: "EF02MA09", desc: "Raciocínio dedutivo e preenchimento de matrizes lógicas 4x4." },
      "3ano_5ano": { code: "EF03MA10", desc: "Dedução lógica formal e eliminação de hipóteses em grades 6x6." }
    },
    cryptogram: {
      infantil: { code: "EI03EF09", desc: "Associação entre símbolos e letras do alfabeto com apoio lúdico." },
      "1ano": { code: "EF01LP07", desc: "Correspondência entre símbolos e grafemas para decifrar palavras." },
      "2ano": { code: "EF02LP08", desc: "Decodificação de frases completas com segmentação e reflexão linguística." },
      "3ano_5ano": { code: "EF03LP02", desc: "Decifração e interpretação de provérbios e mensagens temáticas." }
    },
    colorbymath: {
      infantil: { code: "EI03ET07", desc: "Relacionar contagem e numerais ao preenchimento de cores." },
      "1ano": { code: "EF01MA06", desc: "Aplicar fatos básicos de adição associados a legendas cromáticas." },
      "2ano": { code: "EF02MA05", desc: "Resolução de operações aritméticas com representação visual em mosaico." },
      "3ano_5ano": { code: "EF03MA05", desc: "Cálculo mental e preenchimento de matriz geométrica por resultados." }
    }
  };

  /**
   * Recomendações de atividades por faixa etária
   */
  const RECOMMENDED_TABS = {
    infantil: ["counting", "shapes", "body", "coloring", "drawing", "origami", "tracing", "matching", "sudoku"],
    "1ano": ["wordsearch", "addition", "subtraction", "scramble", "tracing", "drawing", "time", "patterns", "shapes", "counting", "storyproblems", "sudoku", "cryptogram", "colorbymath"],
    "2ano": ["wordsearch", "addition", "subtraction", "multiplication", "drawing", "time", "patterns", "storyproblems", "flashcards", "sudoku", "cryptogram", "colorbymath"],
    "3ano_5ano": ["multiplication", "division", "multichart", "drawing", "storyproblems", "time", "patterns", "slidingpuzzle", "sudoku", "cryptogram", "colorbymath"]
  };

  /**
   * Obtém a habilidade da BNCC para a atividade e nível selecionados
   */
  function getSkill(activityKey, levelKey) {
    const act = BNCC_DATABASE[activityKey];
    if (!act) {
      return { code: "BNCC", desc: "Atividade de desenvolvimento cognitivo e raciocínio lógico." };
    }
    const lvl = (levelKey && levelKey !== "all") ? levelKey : "1ano";
    return act[lvl] || act["1ano"] || Object.values(act)[0];
  }

  return {
    LEVELS: LEVELS,
    DATABASE: BNCC_DATABASE,
    RECOMMENDED_TABS: RECOMMENDED_TABS,
    getSkill: getSkill
  };
})();
