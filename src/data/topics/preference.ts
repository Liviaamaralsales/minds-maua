import { GrammarTopic } from '../../types';

export const preferenceTopic: GrammarTopic = {
  id: 'prefer-would-rather-would-prefer',
  slug: 'prefer-x-would-rather-x-would-prefer',
  title: 'Prefer x Would rather x Would prefer',
  shortDescription: 'Domine as 3 formas de expressar preferências e suas preposições certas (to / than / rather than).',
  level: 'A1/A2',
  iconName: 'HeartHandshake',
  a1Explanation: {
    quickGoldenRule: 'PREFER usa "TO" (I prefer coffee to tea). WOULD RATHER vai sem "to" e usa "THAN" (I would rather sleep than eat). WOULD PREFER leva "TO" (I would prefer to stay).',
    simpleConcept: 'Todos os três servem para dizer o que você prefere. O segredo que todo mundo confunde está na palavrinha de ligação: PREFER combina com TO, WOULD RATHER combina com THAN, e depois de RATHER o verbo nunca tem "to"!',
    rules: [
      {
        title: '1. PREFER (Preferência geral da vida)',
        description: 'Usado para preferências habituais. Estrutura: PREFER + coisa/ação(-ing) + TO + outra coisa/ação(-ing).',
        bullets: [
          'Com substantivos: "I prefer cats to dogs." (Prefiro gatos a cachorros).',
          'Com verbos (-ing): "She prefers swimming to running." (Ela prefere nadar a correr).',
          'Atenção: NUNCA use "than" com prefer! Use sempre "to".'
        ]
      },
      {
        title: '2. WOULD RATHER (Prefiro em uma situação específica)',
        description: 'Significa "preferiria / prefiro agora". Estrutura: WOULD RATHER + verbo puro (sem TO) + THAN.',
        bullets: [
          'Verbo pelado (sem to): "I would rather stay home." (Prefiro ficar em casa).',
          'Comparando duas opções: "I would rather eat pizza than pasta." (Prefiro comer pizza a macarrão).',
          'Forma curta comum: "I\'d rather..."'
        ]
      },
      {
        title: '3. WOULD PREFER (Mais formal com "TO")',
        description: 'Significa "preferiria". Estrutura: WOULD PREFER + TO + verbo + RATHER THAN.',
        bullets: [
          'Com infinitivo: "I would prefer to drink tea." (Eu preferiria beber chá).',
          'Comparação completa: "I would prefer to go by train rather than fly."'
        ]
      }
    ],
    memoryTip: 'Macete infalível:\n• PREFER ➔ TO\n• WOULD RATHER ➔ Verbo puro + THAN\n• WOULD PREFER ➔ TO + Verbo',
    comparisonTable: {
      col1Title: 'Expressão',
      col2Title: 'Estrutura e Exemplo',
      rows: [
        { col1: 'prefer ... to ...', col2: 'I prefer tea to coffee.', note: 'Usa TO (nunca than)' },
        { col1: 'prefer ...ing to ...ing', col2: 'I prefer reading to watching TV.', note: 'Dois verbos com -ing' },
        { col1: 'would rather + verb + than', col2: 'I would rather drive than walk.', note: 'Verbo base sem TO' },
        { col1: 'would prefer to + verb', col2: 'I would prefer to stay here.', note: 'Leva a partícula TO' }
      ]
    }
  },
  pronunciationVideo: {
    title: 'Pronúncia: PREFER, WOULD RATHER & Contrações',
    youtubeId: 'L0dF0w_B3aE',
    channelName: 'Minds Pronunciation Lab & Learn English',
    duration: '6:15',
    description: 'Aprenda a entonação correta de "Prefer", o "L" mudo em "Would" e a contração ultra-rápida "I\'d rather".',
    ipaGuides: [
      { word: 'Prefer', ipa: '/prɪˈfɜːr/', soundNote: 'Acento na 2ª sílaba "-fer", primeira sílaba reduzida /prɪ/.' },
      { word: 'Would rather', ipa: '/wʊd ˈræð.ər/', soundNote: 'O "L" de "would" é 100% mudo. O "th" de rather é vocalizado /ð/.' },
      { word: "I'd rather", ipa: '/aɪd ˈræð.ər/', soundNote: 'Contração rápida conectando o som de "d" ao "r".' },
    ],
    keyTimestamps: [
      { label: 'Sílaba tônica de "Prefer"', time: '0:40' },
      { label: 'O "L" mudo em Would / Could', time: '1:50' },
      { label: 'Contração I\'d rather em conversa', time: '3:30' },
    ]
  },
  examples: [
    {
      english: 'I prefer summer to winter because I love sunny days.',
      portuguese: 'Eu prefiro o verão ao inverno porque eu amo dias ensolarados.',
      highlight: 'prefer summer to winter',
      note: 'Preferência geral com a preposição "to".'
    },
    {
      english: 'I would rather watch a movie tonight than study grammar.',
      portuguese: 'Eu preferiria assistir a um filme hoje à noite a estudar gramática.',
      highlight: 'would rather watch ... than',
      note: 'Would rather + verbo sem to + than.'
    },
    {
      english: 'We would prefer to sit near the window, please.',
      portuguese: 'Nós preferiríamos sentar perto da janela, por favor.',
      highlight: 'would prefer to sit',
      note: 'Would prefer + to + verbo.'
    },
    {
      english: 'Do you prefer dogs or cats?',
      portuguese: 'Você prefere cachorros ou gatos?',
      highlight: 'prefer dogs or cats',
      note: 'Pergunta de escolha simples.'
    }
  ],
  quiz: [
    {
      id: 1,
      sentence: 'I prefer drinking orange juice _______ drinking soda.',
      sentenceTranslation: 'Eu prefiro beber suco de laranja a beber refrigerante.',
      options: [
        { id: 'a', label: 'A', text: 'than', isCorrect: false, explanation: 'Incorreto. Com o verbo "prefer", a comparação exige "to", nunca "than".' },
        { id: 'b', label: 'B', text: 'to', isCorrect: true, explanation: 'Correto! A regra de ouro é: "prefer X to Y".' },
        { id: 'c', label: 'C', text: 'from', isCorrect: false, explanation: 'Incorreto. "From" indica origem, não preferência.' },
        { id: 'd', label: 'D', text: 'instead', isCorrect: false, explanation: 'Incorreto. Faltaria "instead of", e mesmo assim a forma padrão com prefer é "to".' },
        { id: 'e', label: 'E', text: 'more than', isCorrect: false, explanation: 'Incorreto. Não usamos "more than" diretamente ligado a "prefer".' }
      ],
      correctExplanation: 'O verbo "prefer" sempre faz par com a preposição "to" (prefer X to Y).'
    },
    {
      id: 2,
      sentence: 'I would rather _______ at home tonight because it is raining.',
      sentenceTranslation: 'Eu preferiria ficar em casa hoje à noite porque está chovendo.',
      options: [
        { id: 'a', label: 'A', text: 'to stay', isCorrect: false, explanation: 'Incorreto. Após "would rather", o verbo fica puro (bare infinitive), SEM a partícula "to".' },
        { id: 'b', label: 'B', text: 'staying', isCorrect: false, explanation: 'Incorreto. Não se usa forma com -ing logo após "would rather".' },
        { id: 'c', label: 'C', text: 'stay', isCorrect: true, explanation: 'Correto! Após "would rather", o verbo vem na forma base simples sem "to" (stay).' },
        { id: 'd', label: 'D', text: 'stayed', isCorrect: false, explanation: 'Incorreto. "Stayed" está no passado simples.' },
        { id: 'e', label: 'E', text: 'to staying', isCorrect: false, explanation: 'Incorreto. Estrutura gramaticalmente inexistente.' }
      ],
      correctExplanation: 'Após "would rather", usamos o verbo na sua forma base sem "to" (would rather stay).'
    },
    {
      id: 3,
      sentence: 'She would prefer _______ a taxi instead of walking in the dark.',
      sentenceTranslation: 'Ela preferiria pegar um táxi em vez de andar no escuro.',
      options: [
        { id: 'a', label: 'A', text: 'take', isCorrect: false, explanation: 'Incorreto. "Would prefer" exige o infinitivo completo com "to" (to take).' },
        { id: 'b', label: 'B', text: 'to take', isCorrect: true, explanation: 'Correto! Diferente de "would rather", a expressão "would prefer" pede "TO + verbo" (would prefer to take).' },
        { id: 'c', label: 'C', text: 'taking', isCorrect: false, explanation: 'Incorreto. Não se usa gerúndio após "would prefer".' },
        { id: 'd', label: 'D', text: 'took', isCorrect: false, explanation: 'Incorreto. Forma de passado não é usada nesta estrutura.' },
        { id: 'e', label: 'E', text: 'taken', isCorrect: false, explanation: 'Incorreto. Particípio não é usado aqui.' }
      ],
      correctExplanation: '"Would prefer" sempre é seguido de "to + verbo" (would prefer to take).'
    },
    {
      id: 4,
      sentence: 'He would rather buy a laptop _______ a new smartphone.',
      sentenceTranslation: 'Ele preferiria comprar um notebook a um novo smartphone.',
      options: [
        { id: 'a', label: 'A', text: 'to', isCorrect: false, explanation: 'Incorreto. "To" é usado com "prefer", mas "would rather" usa "than".' },
        { id: 'b', label: 'B', text: 'than', isCorrect: true, explanation: 'Correto! A estrutura de comparação de "would rather" é sempre "would rather X than Y".' },
        { id: 'c', label: 'C', text: 'then', isCorrect: false, explanation: 'Incorreto. "Then" (com e) significa "então / depois", enquanto "than" (com a) é para comparação.' },
        { id: 'd', label: 'D', text: 'instead', isCorrect: false, explanation: 'Incorreto. Falta "of", e a regra de "would rather" pede "than".' },
        { id: 'e', label: 'E', text: 'as', isCorrect: false, explanation: 'Incorreto. "As" significa como/conforme.' }
      ],
      correctExplanation: 'A comparação com "would rather" sempre utiliza "than" (would rather X than Y).'
    },
    {
      id: 5,
      sentence: 'My sister prefers Italian food _______ Japanese food.',
      sentenceTranslation: 'Minha irmã prefere comida italiana a comida japonesa.',
      options: [
        { id: 'a', label: 'A', text: 'than', isCorrect: false, explanation: 'Incorreto. Não usamos "than" com "prefer". O correto é "to".' },
        { id: 'b', label: 'B', text: 'over than', isCorrect: false, explanation: 'Incorreto. Combinação redundante e errada.' },
        { id: 'c', label: 'C', text: 'to', isCorrect: true, explanation: 'Correto! A regra de "prefer" com dois substantivos é "prefer X to Y".' },
        { id: 'd', label: 'D', text: 'of', isCorrect: false, explanation: 'Incorreto. "Prefer of" não existe.' },
        { id: 'e', label: 'E', text: 'against', isCorrect: false, explanation: 'Incorreto. "Against" significa contra.' }
      ],
      correctExplanation: 'Usamos "to" para conectar os itens que estamos comparando com o verbo "prefer".'
    },
    {
      id: 6,
      sentence: 'I\'d rather _______ by train than drive in the storm.',
      sentenceTranslation: 'Eu preferiria viajar de trem a dirigir na tempestade.',
      options: [
        { id: 'a', label: 'A', text: 'travel', isCorrect: true, explanation: 'Correto! "I\'d rather" (abreviação de I would rather) recebe verbo base sem "to" (travel).' },
        { id: 'b', label: 'B', text: 'to travel', isCorrect: false, explanation: 'Incorreto. Não se coloca "to" após "would rather".' },
        { id: 'c', label: 'C', text: 'travelling', isCorrect: false, explanation: 'Incorreto. Não se usa gerúndio aqui.' },
        { id: 'd', label: 'D', text: 'travelled', isCorrect: false, explanation: 'Incorreto. Forma de passado simples.' },
        { id: 'e', label: 'E', text: 'to travelling', isCorrect: false, explanation: 'Incorreto. Estrutura inexistente.' }
      ],
      correctExplanation: '"Would rather" é um modal e exige o infinitivo sem "to" (travel).'
    },
    {
      id: 7,
      sentence: 'Would you prefer _______ outside or inside the restaurant?',
      sentenceTranslation: 'Você preferiria sentar do lado de fora ou dentro do restaurante?',
      options: [
        { id: 'a', label: 'A', text: 'sit', isCorrect: false, explanation: 'Incorreto. Com "would prefer" precisamos do "to sit".' },
        { id: 'b', label: 'B', text: 'to sit', isCorrect: true, explanation: 'Correto! A pergunta com "would prefer" exige "to + verbo" (to sit).' },
        { id: 'c', label: 'C', text: 'sitting', isCorrect: false, explanation: 'Incorreto. Não se usa terminação -ing com "would prefer".' },
        { id: 'd', label: 'D', text: 'sat', isCorrect: false, explanation: 'Incorreto. "Sat" é a forma do passado.' },
        { id: 'e', label: 'E', text: 'to sitting', isCorrect: false, explanation: 'Incorreto. Estrutura errada.' }
      ],
      correctExplanation: 'A estrutura interrogativa de "would prefer" requer "to + verbo" (would you prefer to sit).'
    },
    {
      id: 8,
      sentence: 'She prefers _______ to watching television in the evening.',
      sentenceTranslation: 'Ela prefere ler a assistir televisão à noite.',
      options: [
        { id: 'a', label: 'A', text: 'reading', isCorrect: true, explanation: 'Correto! Quando usamos "prefer" com verbos de ação para hábitos, usamos o padrão "-ing to -ing" (reading to watching).' },
        { id: 'b', label: 'B', text: 'read', isCorrect: false, explanation: 'Incorreto. Para manter o paralelismo com "watching", usamos "reading".' },
        { id: 'c', label: 'C', text: 'to read', isCorrect: false, explanation: 'Incorreto. Não combina bem com a preposição "to watching" que vem logo depois.' },
        { id: 'd', label: 'D', text: 'reads', isCorrect: false, explanation: 'Incorreto. "Reads" é terceira pessoa conjugada.' },
        { id: 'e', label: 'E', text: 'have read', isCorrect: false, explanation: 'Incorreto. Tempo perfeito sem sentido aqui.' }
      ],
      correctExplanation: 'O paralelismo com "prefer" é "verb-ing TO verb-ing" (prefer reading to watching).'
    },
    {
      id: 9,
      sentence: 'I would rather not _______ about that problem right now.',
      sentenceTranslation: 'Eu preferiria não falar sobre esse problema agora.',
      options: [
        { id: 'a', label: 'A', text: 'talk', isCorrect: true, explanation: 'Correto! A forma negativa é "would rather not + verbo base" (would rather not talk).' },
        { id: 'b', label: 'B', text: 'to talk', isCorrect: false, explanation: 'Incorreto. Mesmo na negativa com "not", não usamos "to" após rather.' },
        { id: 'c', label: 'C', text: 'talking', isCorrect: false, explanation: 'Incorreto. "Would rather not talking" está errado.' },
        { id: 'd', label: 'D', text: 'talked', isCorrect: false, explanation: 'Incorreto. Forma de passado incorreta.' },
        { id: 'e', label: 'E', text: 'to talking', isCorrect: false, explanation: 'Incorreto. Estrutura incorreta.' }
      ],
      correctExplanation: 'A negativa de "would rather" é formada com "would rather not + verbo simples".'
    },
    {
      id: 10,
      sentence: 'They would rather drink water _______ drink soda.',
      sentenceTranslation: 'Eles prefeririam beber água a beber refrigerante.',
      options: [
        { id: 'a', label: 'A', text: 'to', isCorrect: false, explanation: 'Incorreto. "To" é com o verbo "prefer", não com "would rather".' },
        { id: 'b', label: 'B', text: 'than', isCorrect: true, explanation: 'Correto! "Would rather" se conecta à segunda opção usando "than".' },
        { id: 'c', label: 'C', text: 'that', isCorrect: false, explanation: 'Incorreto. "That" significa "que / aquele".' },
        { id: 'd', label: 'D', text: 'of', isCorrect: false, explanation: 'Incorreto. Preposição inadequada.' },
        { id: 'e', label: 'E', text: 'from', isCorrect: false, explanation: 'Incorreto. "From" não serve para preferência.' }
      ],
      correctExplanation: 'A estrutura comparativa de "would rather" usa sempre a palavra "than".'
    }
  ]
};
