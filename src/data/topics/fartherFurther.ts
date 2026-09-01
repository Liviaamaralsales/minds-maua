import { GrammarTopic } from '../../types';

export const fartherFurtherTopic: GrammarTopic = {
  id: 'farther-further',
  slug: 'farther-x-further',
  title: 'Farther x Further',
  shortDescription: 'Entenda a diferença entre distância física com régua (Farther) e distância figurativa ou adicional (Further).',
  level: 'A1/A2',
  iconName: 'Navigation',
  a1Explanation: {
    quickGoldenRule: 'FARTHER = Distância física real (metros, km, passos). FURTHER = Distância figurativa, grau ou "adicional / mais informações".',
    simpleConcept: 'Dica do olho: "FARTHER" começa com a palavra "FAR" (longe). Se você pode medir com uma fita métrica ou GPS de carro, use FARTHER. Se você quer falar de "mais detalhes", "ir além em uma conversa" ou "mais estudo", use FURTHER.',
    rules: [
      {
        title: '1. FARTHER (Distância Física)',
        description: 'Usado exclusivamente para espaço físico, distância geográfica ou quilômetros.',
        bullets: [
          '"My house is farther from the beach than yours." (Minha casa é mais longe da praia do que a sua).',
          '"Can you run any farther?" (Você consegue correr mais longe?).',
          'Dica: Dá para medir com GPS? ➔ Farther.'
        ]
      },
      {
        title: '2. FURTHER (Figurativo / Adicional / Grau)',
        description: 'Usado para progresso abstrato, profundidade de discussão e como sinônimo de "more / additional" (adicional).',
        bullets: [
          '"For further information, visit our website." (Para mais informações / informações adicionais, visite nosso site).',
          '"We need to discuss this matter further." (Precisamos discutir esse assunto mais a fundo).',
          '"Without further delay..." (Sem mais delongas...).'
        ]
      }
    ],
    memoryTip: 'Lembre-se da raiz: FARther tem "FAR" (Longe físico / GPS). FURther significa "Adicional / A fundo" (Further information).',
    comparisonTable: {
      col1Title: 'FARTHER (Físico / GPS)',
      col2Title: 'FURTHER (Abstrato / Adicional)',
      rows: [
        { col1: 'He walked two miles farther.', col2: 'We need further study on this topic.', note: 'Milhas = físico; Estudo = adicional' },
        { col1: 'Which city is farther north?', col2: 'Are there any further questions?', note: 'Norte = geografia; Perguntas = adicionais' },
        { col1: 'I can\'t throw the ball any farther.', col2: 'Nothing could be further from the truth.', note: 'Arremesso = distância; Verdade = conceito' }
      ]
    }
  },
  pronunciationVideo: {
    title: 'Pronúncia: FARTHER vs FURTHER & O som do "TH"',
    youtubeId: 'hH_E01y3hY8',
    channelName: 'Minds Pronunciation Lab & BBC Learning English',
    duration: '5:40',
    description: 'Diferenciação clara entre a vogal aberta /ɑːr/ de "Farther" e a vogal central /ɜːr/ de "Further", com a posição correta da língua para o som /ð/.',
    ipaGuides: [
      { word: 'Farther', ipa: '/ˈfɑːr.ðər/', soundNote: 'Vogal aberta /ɑːr/ com boca mais relaxada e "th" sonoro com a ponta da língua nos dentes.' },
      { word: 'Further', ipa: '/ˈfɜːr.ðər/', soundNote: 'Vogal fechada /ɜːr/ com lábios neutros e "r" retroflexo.' },
    ],
    keyTimestamps: [
      { label: 'Posição da língua no som /ð/', time: '0:45' },
      { label: 'Contraste acústico /ɑːr/ vs /ɜːr/', time: '2:10' },
      { label: 'Treino de frases em velocidade nativa', time: '3:50' },
    ]
  },
  examples: [
    {
      english: 'The supermarket is farther than the bakery.',
      portuguese: 'O supermercado é mais longe do que a padaria.',
      highlight: 'farther than',
      note: 'Distância física entre dois pontos na rua.'
    },
    {
      english: 'Please contact us if you need further assistance.',
      portuguese: 'Por favor entre em contato se você precisar de ajuda adicional.',
      highlight: 'further assistance',
      note: 'Significa ajuda extra/adicional.'
    },
    {
      english: 'How much farther do we have to walk?',
      portuguese: 'Quanto mais longe nós temos que caminhar?',
      highlight: 'much farther',
      note: 'Caminhada física.'
    },
    {
      english: 'Let\'s analyze the problem further before deciding.',
      portuguese: 'Vamos analisar o problema mais a fundo antes de decidir.',
      highlight: 'analyze the problem further',
      note: 'Aprofundamento de análise.'
    }
  ],
  quiz: [
    {
      id: 1,
      sentence: 'For _______ information about our English courses, visit our reception desk.',
      sentenceTranslation: 'Para mais informações sobre nossos cursos de inglês, visite nossa recepção.',
      options: [
        { id: 'a', label: 'A', text: 'farther', isCorrect: false, explanation: 'Incorreto. "Farther" é para distância física (quilômetros). Informações adicionais exigem "further".' },
        { id: 'b', label: 'B', text: 'further', isCorrect: true, explanation: 'Correto! "Further information" é a expressão consagrada para "informações adicionais".' },
        { id: 'c', label: 'C', text: 'farthest', isCorrect: false, explanation: 'Incorreto. "Farthest" é superlativo (o mais distante fisicamente).' },
        { id: 'd', label: 'D', text: 'far', isCorrect: false, explanation: 'Incorreto. "Far information" não existe.' },
        { id: 'e', label: 'E', text: 'furthermore', isCorrect: false, explanation: 'Incorreto. "Furthermore" é um conectivo de transição (além disso).' }
      ],
      correctExplanation: 'Usamos "further" como sinônimo de "additional" (informações adicionais).'
    },
    {
      id: 2,
      sentence: 'The gas station is 5 kilometers _______ down this road.',
      sentenceTranslation: 'O posto de gasolina fica 5 quilômetros mais à frente nesta estrada.',
      options: [
        { id: 'a', label: 'A', text: 'farther', isCorrect: true, explanation: 'Correto! Quilômetros e estrada indicam distância física mensurável, logo usamos "farther".' },
        { id: 'b', label: 'B', text: 'furthermore', isCorrect: false, explanation: 'Incorreto. "Furthermore" significa além disso.' },
        { id: 'c', label: 'C', text: 'furthest of', isCorrect: false, explanation: 'Incorreto. Não se usa com distância específica.' },
        { id: 'd', label: 'D', text: 'farthermore', isCorrect: false, explanation: 'Incorreto. Essa palavra não existe em inglês.' },
        { id: 'e', label: 'E', text: 'deeply', isCorrect: false, explanation: 'Incorreto. "Deeply" significa profundamente.' }
      ],
      correctExplanation: 'Distância física mensurável em quilômetros usa "farther".'
    },
    {
      id: 3,
      sentence: 'If you have any _______ questions, please feel free to ask the teacher.',
      sentenceTranslation: 'Se você tiver quaisquer perguntas adicionais, sinta-se à vontade para perguntar ao professor.',
      options: [
        { id: 'a', label: 'A', text: 'farther', isCorrect: false, explanation: 'Incorreto. Perguntas não têm distância física em metros.' },
        { id: 'b', label: 'B', text: 'further', isCorrect: true, explanation: 'Correto! "Further questions" significa "perguntas adicionais / outras dúvidas".' },
        { id: 'c', label: 'C', text: 'far', isCorrect: false, explanation: 'Incorreto. "Far questions" não faz sentido.' },
        { id: 'd', label: 'D', text: 'farthest', isCorrect: false, explanation: 'Incorreto. Superlativo incorreto.' },
        { id: 'e', label: 'E', text: 'furthering', isCorrect: false, explanation: 'Incorreto. Forma verbal inadequada.' }
      ],
      correctExplanation: '"Further questions" é o termo correto para dúvidas adicionais.'
    },
    {
      id: 4,
      sentence: 'Who can throw the baseball _______, John or Michael?',
      sentenceTranslation: 'Quem consegue arremessar a bola de beisebol mais longe, John ou Michael?',
      options: [
        { id: 'a', label: 'A', text: 'furthermore', isCorrect: false, explanation: 'Incorreto. Conectivo inadequado.' },
        { id: 'b', label: 'B', text: 'farther', isCorrect: true, explanation: 'Correto! O arremesso da bola envolve distância física mensurável em metros, portanto "farther".' },
        { id: 'c', label: 'C', text: 'furthest', isCorrect: false, explanation: 'Incorreto. Na comparação entre duas pessoas (John ou Michael), usa-se comparativo e não superlativo.' },
        { id: 'd', label: 'D', text: 'more far', isCorrect: false, explanation: 'Incorreto. "More far" é gramaticalmente incorreto em inglês.' },
        { id: 'e', label: 'E', text: 'furthermost', isCorrect: false, explanation: 'Incorreto. Significa o mais extremo.' }
      ],
      correctExplanation: 'Arremesso e trajetória física no ar utilizam o comparativo "farther".'
    },
    {
      id: 5,
      sentence: 'We will discuss this topic in _______ detail during tomorrow\'s class.',
      sentenceTranslation: 'Nós discutiremos este tópico com mais detalhes durante a aula de amanhã.',
      options: [
        { id: 'a', label: 'A', text: 'further', isCorrect: true, explanation: 'Correto! "In further detail" é uma locução que significa "com maior profundidade / detalhes adicionais".' },
        { id: 'b', label: 'B', text: 'farther', isCorrect: false, explanation: 'Incorreto. Não se trata de distância geográfica.' },
        { id: 'c', label: 'C', text: 'far', isCorrect: false, explanation: 'Incorreto. "In far detail" não existe.' },
        { id: 'd', label: 'D', text: 'farthest', isCorrect: false, explanation: 'Incorreto. Superlativo inadequado.' },
        { id: 'e', label: 'E', text: 'furtherly', isCorrect: false, explanation: 'Incorreto. Essa palavra não existe.' }
      ],
      correctExplanation: 'Para indicar aprofundamento e detalhes extras usamos "further".'
    },
    {
      id: 6,
      sentence: 'My new office is much _______ away from my house than my old one.',
      sentenceTranslation: 'Meu escritório novo é muito mais longe da minha casa do que o antigo.',
      options: [
        { id: 'a', label: 'A', text: 'farther', isCorrect: true, explanation: 'Correto! A distância entre duas construções físicas no mapa usa "farther away".' },
        { id: 'b', label: 'B', text: 'furthermore', isCorrect: false, explanation: 'Incorreto. Conectivo de transição.' },
        { id: 'c', label: 'C', text: 'furthermost', isCorrect: false, explanation: 'Incorreto. Significa o ponto mais extremo.' },
        { id: 'd', label: 'D', text: 'farthest away', isCorrect: false, explanation: 'Incorreto. Há uma comparação ("than my old one"), então usamos comparativo, não superlativo.' },
        { id: 'e', label: 'E', text: 'more far', isCorrect: false, explanation: 'Incorreto. "More far" é incorreto.' }
      ],
      correctExplanation: 'Deslocamento físico entre locais geográficos usa "farther".'
    },
    {
      id: 7,
      sentence: 'Without _______ delay, let us start our English presentation.',
      sentenceTranslation: 'Sem mais delongas, vamos começar nossa apresentação de inglês.',
      options: [
        { id: 'a', label: 'A', text: 'farther', isCorrect: false, explanation: 'Incorreto. "Farther delay" está incorreto porque tempo/demora é abstrato.' },
        { id: 'b', label: 'B', text: 'further', isCorrect: true, explanation: 'Correto! "Without further delay" é a expressão idiomática clássica em inglês para "sem mais delongas".' },
        { id: 'c', label: 'C', text: 'farthest', isCorrect: false, explanation: 'Incorreto. Superlativo não se aplica aqui.' },
        { id: 'd', label: 'D', text: 'more farther', isCorrect: false, explanation: 'Incorreto. Redundância incorreta.' },
        { id: 'e', label: 'E', text: 'furthermore', isCorrect: false, explanation: 'Incorreto. Conector de adição.' }
      ],
      correctExplanation: '"Without further delay" é uma expressão fixa tradicional em inglês.'
    },
    {
      id: 8,
      sentence: 'The hiker couldn\'t walk any _______ because his legs were hurting.',
      sentenceTranslation: 'O trilheiro não conseguiu caminhar mais longe porque suas pernas estavam doendo.',
      options: [
        { id: 'a', label: 'A', text: 'farther', isCorrect: true, explanation: 'Correto! Caminhada física na trilha usa "farther".' },
        { id: 'b', label: 'B', text: 'furthermore', isCorrect: false, explanation: 'Incorreto. Advérbio de ligação.' },
        { id: 'c', label: 'C', text: 'farthest', isCorrect: false, explanation: 'Incorreto. Não se usa superlativo com "any".' },
        { id: 'd', label: 'D', text: 'more far', isCorrect: false, explanation: 'Incorreto. Forma errada.' },
        { id: 'e', label: 'E', text: 'deeply', isCorrect: false, explanation: 'Incorreto. "Deeply" é profundamente.' }
      ],
      correctExplanation: 'Progresso de caminhada física pelo espaço utiliza "farther".'
    },
    {
      id: 9,
      sentence: 'The scientists decided to conduct _______ research on the new vaccine.',
      sentenceTranslation: 'Os cientistas decidiram conduzir pesquisas adicionais sobre a nova vacina.',
      options: [
        { id: 'a', label: 'A', text: 'farther', isCorrect: false, explanation: 'Incorreto. Pesquisa científica não é uma distância física com fita métrica.' },
        { id: 'b', label: 'B', text: 'further', isCorrect: true, explanation: 'Correto! "Further research" significa "pesquisas adicionais / aprofundadas".' },
        { id: 'c', label: 'C', text: 'far', isCorrect: false, explanation: 'Incorreto. "Far research" não faz sentido.' },
        { id: 'd', label: 'D', text: 'farthest', isCorrect: false, explanation: 'Incorreto. Superlativo inadequado.' },
        { id: 'e', label: 'E', text: 'furthest out', isCorrect: false, explanation: 'Incorreto. Expressão não aplicável.' }
      ],
      correctExplanation: 'Estudos e pesquisas adicionais são chamados de "further research".'
    },
    {
      id: 10,
      sentence: 'Which star is _______ from the Earth, Alpha Centauri or Betelgeuse?',
      sentenceTranslation: 'Qual estrela é mais distante da Terra, Alpha Centauri ou Betelgeuse?',
      options: [
        { id: 'a', label: 'A', text: 'farther', isCorrect: true, explanation: 'Correto! Distância astronômica no espaço físico entre corpos celestes é mensurável, logo "farther".' },
        { id: 'b', label: 'B', text: 'furthermore', isCorrect: false, explanation: 'Incorreto. Conector de adição.' },
        { id: 'c', label: 'C', text: 'furthermost', isCorrect: false, explanation: 'Incorreto. Não se usa na comparação direta de duas estrelas com "from".' },
        { id: 'd', label: 'D', text: 'more far', isCorrect: false, explanation: 'Incorreto. Gramática incorreta.' },
        { id: 'e', label: 'E', text: 'deepest', isCorrect: false, explanation: 'Incorreto. "Deepest" é mais profundo.' }
      ],
      correctExplanation: 'Distância física no espaço (anos-luz/km) requer "farther".'
    }
  ]
};
