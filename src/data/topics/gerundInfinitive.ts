import { GrammarTopic } from '../../types';

export const gerundInfinitiveTopic: GrammarTopic = {
  id: 'gerund-infinitive',
  slug: 'gerund-x-infinitive',
  title: 'Gerund x Infinitive',
  shortDescription: 'Descubra quando usar o verbo com -ING (Gerund) ou com TO (Infinitive).',
  level: 'A1/A2',
  iconName: 'BookOpen',
  a1Explanation: {
    quickGoldenRule: 'GERUND (-ING) = Usado após verbos como ENJOY, FINISH, AVOID e depois de QUALQUER preposição (in, on, at, about). INFINITIVE (TO + Verbo) = Usado após verbos de desejo e futuro como WANT, NEED, DECIDE, HOPE, WOULD LIKE.',
    simpleConcept: 'Quando juntamos dois verbos em inglês, o segundo precisa mudar de roupa! O primeiro verbo é quem manda: verbos de plano/futuro (want, decide) chamam o "TO", enquanto verbos de prazer e preposições chamam o "-ING".',
    rules: [
      {
        title: '1. Quando usar GERUND (-ING)',
        description: 'Colocamos "-ing" no verbo seguinte nos seguintes casos:',
        bullets: [
          'Verbos de gosto e hábito: enjoy (apreciar), avoid (evitar), finish (terminar), practice (praticar), mind (importar-se), keep (continuar).',
          'Regra de Ouro das Preposições: Sempre que houver uma preposição (about, at, in, of, for, before, after, without), o verbo seguinte DEVE ter -ing! Ex: "Thank you for coming.", "I am good at swimming."',
          'Como sujeito da frase: "Learning English is fun!" (Aprender inglês é divertido!).'
        ]
      },
      {
        title: '2. Quando usar INFINITIVE (TO + Verbo)',
        description: 'Usamos "to + verbo base" quando o verbo principal expressa intenção, plano ou decisão futura.',
        bullets: [
          'Verbos de intenção e desejo: want to (querer), need to (precisar), decide to (decidir), hope to (esperar), plan to (planejar), promise to (prometer), learn to (aprender a).',
          'Expressão de polidez: would like to (gostaria de).',
          'Depois de adjetivos: "It is easy to learn." (É fácil aprender).'
        ]
      }
    ],
    memoryTip: 'Duas Regras Mágicas: 1. Tem preposição (in, on, at, for, about)? O verbo seguinte ganha -ING na hora! 2. O verbo é WANT, NEED ou DECIDE? Chame o "TO" imediatamente!',
    comparisonTable: {
      col1Title: 'Verbos com GERUND (-ING)',
      col2Title: 'Verbos com INFINITIVE (TO)',
      rows: [
        { col1: 'enjoy swimming (gostar de nadar)', col2: 'want to swim (querer nadar)', note: 'Enjoy pede -ing; Want pede to' },
        { col1: 'finish working (terminar de trabalhar)', col2: 'need to work (precisar trabalhar)', note: 'Finish pede -ing; Need pede to' },
        { col1: 'avoid eating sugar (evitar comer)', col2: 'decide to eat healthy (decidir comer)', note: 'Avoid pede -ing; Decide pede to' },
        { col1: 'good at speaking (bom em falar)', col2: 'easy to speak (fácil de falar)', note: 'Preposição "at" = -ing; Adjetivo "easy" = to' }
      ]
    }
  },
  pronunciationVideo: {
    title: 'Pronúncia: Terminação -ING & Partícula "TO"',
    youtubeId: 'q7E01z-9w5Y',
    channelName: 'Minds Pronunciation Lab & Oxford English',
    duration: '6:30',
    description: 'Aprenda a não pronunciar o "G" forte no final de "-ing" (/ɪŋ/) e como o "to" reduz para /tə/ na fala conectada.',
    ipaGuides: [
      { word: '-ing ending', ipa: '/-ɪŋ/', soundNote: 'Som nasal com a parte de trás da língua tocando o palato mole, sem soltar som de "G" duro.' },
      { word: 'want to...', ipa: '/ˈwɑːn.tə/ (wanna)', soundNote: 'Redução natural na fala fluente do dia a dia.' },
    ],
    keyTimestamps: [
      { label: 'O som nasal /ŋ/', time: '0:40' },
      { label: 'Redução de "to" para /tə/', time: '2:10' },
      { label: 'Treino de fluência com pares de verbos', time: '3:45' },
    ]
  },
  examples: [
    {
      english: 'I want to travel to Canada next summer.',
      portuguese: 'Eu quero viajar para o Canadá no próximo verão.',
      highlight: 'want to travel',
      note: 'O verbo "want" sempre exige "to + verbo".'
    },
    {
      english: 'She really enjoys listening to pop music.',
      portuguese: 'Ela realmente gosta de ouvir música pop.',
      highlight: 'enjoys listening',
      note: 'O verbo "enjoy" sempre exige "-ing".'
    },
    {
      english: 'Thank you for helping me with the project.',
      portuguese: 'Obrigado por me ajudar com o projeto.',
      highlight: 'for helping',
      note: 'Após a preposição "for", o verbo recebe "-ing".'
    },
    {
      english: 'We decided to buy a new computer yesterday.',
      portuguese: 'Nós decidimos comprar um computador novo ontem.',
      highlight: 'decided to buy',
      note: 'O verbo "decide" é seguido de "to + verbo".'
    }
  ],
  quiz: [
    {
      id: 1,
      sentence: 'I enjoy _______ books in the quiet library on Sundays.',
      sentenceTranslation: 'Eu gosto de ler livros na biblioteca silenciosa aos domingos.',
      options: [
        { id: 'a', label: 'A', text: 'to read', isCorrect: false, explanation: 'Incorreto. O verbo "enjoy" nunca aceita infinitivo com "to".' },
        { id: 'b', label: 'B', text: 'reading', isCorrect: true, explanation: 'Correto! O verbo "enjoy" exige obrigatoriamente a forma do gerúndio (-ing).' },
        { id: 'c', label: 'C', text: 'read', isCorrect: false, explanation: 'Incorreto. Falta a terminação -ing após "enjoy".' },
        { id: 'd', label: 'D', text: 'for reading', isCorrect: false, explanation: 'Incorreto. Não se usa "for reading" logo após enjoy.' },
        { id: 'e', label: 'E', text: 'to reading', isCorrect: false, explanation: 'Incorreto. Estrutura errada.' }
      ],
      correctExplanation: 'O verbo "enjoy" é sempre acompanhado de um verbo terminado em "-ing".'
    },
    {
      id: 2,
      sentence: 'She wants _______ a doctor when she grows up.',
      sentenceTranslation: 'Ela quer se tornar / ser uma médica quando crescer.',
      options: [
        { id: 'a', label: 'A', text: 'becoming', isCorrect: false, explanation: 'Incorreto. O verbo "want" não é seguido de -ing.' },
        { id: 'b', label: 'B', text: 'to become', isCorrect: true, explanation: 'Correto! O verbo "want" sempre pede o infinitivo completo com "to" (want to become).' },
        { id: 'c', label: 'C', text: 'become', isCorrect: false, explanation: 'Incorreto. Falta a partícula "to" após o verbo want.' },
        { id: 'd', label: 'D', text: 'for become', isCorrect: false, explanation: 'Incorreto. Não se usa "for become".' },
        { id: 'e', label: 'E', text: 'became', isCorrect: false, explanation: 'Incorreto. "Became" é forma de passado.' }
      ],
      correctExplanation: 'O verbo "want" é seguido por infinitivo com "to" (want to become).'
    },
    {
      id: 3,
      sentence: 'He is very good at _______ English with native speakers.',
      sentenceTranslation: 'Ele é muito bom em falar inglês com falantes nativos.',
      options: [
        { id: 'a', label: 'A', text: 'speak', isCorrect: false, explanation: 'Incorreto. Após a preposição "at", o verbo deve levar -ing.' },
        { id: 'b', label: 'B', text: 'to speak', isCorrect: false, explanation: 'Incorreto. Nunca usamos "to + verbo" logo após uma preposição como "at".' },
        { id: 'c', label: 'C', text: 'speaking', isCorrect: true, explanation: 'Correto! Regra fundamental do inglês: depois de preposição ("at"), o verbo SEMPRE vai com "-ing" (speaking).' },
        { id: 'd', label: 'D', text: 'spoke', isCorrect: false, explanation: 'Incorreto. Forma de passado.' },
        { id: 'e', label: 'E', text: 'spoken', isCorrect: false, explanation: 'Incorreto. Particípio passado.' }
      ],
      correctExplanation: 'Qualquer verbo posicionado imediatamente após uma preposição (at, in, of, for) recebe "-ing".'
    },
    {
      id: 4,
      sentence: 'They decided _______ to a new apartment downtown.',
      sentenceTranslation: 'Eles decidiram se mudar para um apartamento novo no centro.',
      options: [
        { id: 'a', label: 'A', text: 'to move', isCorrect: true, explanation: 'Correto! O verbo "decide" exige "to + verbo" (decide to move).' },
        { id: 'b', label: 'B', text: 'moving', isCorrect: false, explanation: 'Incorreto. "Decide" não aceita gerúndio (-ing).' },
        { id: 'c', label: 'C', text: 'move', isCorrect: false, explanation: 'Incorreto. Falta o "to".' },
        { id: 'd', label: 'D', text: 'for moving', isCorrect: false, explanation: 'Incorreto. Não se usa "for moving" com o verbo decide.' },
        { id: 'e', label: 'E', text: 'to moving', isCorrect: false, explanation: 'Incorreto. Estrutura incorreta.' }
      ],
      correctExplanation: 'O verbo "decide" requer infinitivo com "to" (decided to move).'
    },
    {
      id: 5,
      sentence: 'Please avoid _______ while driving on the highway.',
      sentenceTranslation: 'Por favor evite mandar mensagens enquanto dirige na rodovia.',
      options: [
        { id: 'a', label: 'A', text: 'to text', isCorrect: false, explanation: 'Incorreto. O verbo "avoid" (evitar) não aceita "to + verbo".' },
        { id: 'b', label: 'B', text: 'texting', isCorrect: true, explanation: 'Correto! O verbo "avoid" sempre é seguido de gerúndio com "-ing" (avoid texting).' },
        { id: 'c', label: 'C', text: 'text', isCorrect: false, explanation: 'Incorreto. Falta a terminação -ing após avoid.' },
        { id: 'd', label: 'D', text: 'texted', isCorrect: false, explanation: 'Incorreto. Forma de passado.' },
        { id: 'e', label: 'E', text: 'for texting', isCorrect: false, explanation: 'Incorreto. Não se usa preposição "for" após avoid.' }
      ],
      correctExplanation: 'O verbo "avoid" é sempre seguido por gerúndio (avoid texting).'
    },
    {
      id: 6,
      sentence: 'I would like _______ a cup of black coffee, please.',
      sentenceTranslation: 'Eu gostaria de pedir uma xícara de café preto, por favor.',
      options: [
        { id: 'a', label: 'A', text: 'ordering', isCorrect: false, explanation: 'Incorreto. "Would like" pede "to + verbo".' },
        { id: 'b', label: 'B', text: 'to order', isCorrect: true, explanation: 'Correto! A expressão de cortesia "would like" sempre pede "to + verbo" (would like to order).' },
        { id: 'c', label: 'C', text: 'order', isCorrect: false, explanation: 'Incorreto. Falta a partícula "to".' },
        { id: 'd', label: 'D', text: 'to ordering', isCorrect: false, explanation: 'Incorreto. Estrutura errada.' },
        { id: 'e', label: 'E', text: 'for order', isCorrect: false, explanation: 'Incorreto. "For order" não existe.' }
      ],
      correctExplanation: '"Would like" exige infinitivo com "to" (would like to order).'
    },
    {
      id: 7,
      sentence: 'Thank you for _______ me with my English exercises.',
      sentenceTranslation: 'Obrigado por me ajudar com meus exercícios de inglês.',
      options: [
        { id: 'a', label: 'A', text: 'help', isCorrect: false, explanation: 'Incorreto. Após a preposição "for", o verbo deve ter -ing.' },
        { id: 'b', label: 'B', text: 'to help', isCorrect: false, explanation: 'Incorreto. Não se usa "to" após a preposição "for".' },
        { id: 'c', label: 'C', text: 'helping', isCorrect: true, explanation: 'Correto! Após a preposição "for", o verbo recebe obrigatoriamente a terminação "-ing" (for helping).' },
        { id: 'd', label: 'D', text: 'helped', isCorrect: false, explanation: 'Incorreto. Passado.' },
        { id: 'e', label: 'E', text: 'to helping', isCorrect: false, explanation: 'Incorreto. Estrutura errada.' }
      ],
      correctExplanation: 'A preposição "for" exige o verbo seguinte na forma "-ing" (thank you for helping).'
    },
    {
      id: 8,
      sentence: 'We hope _______ our grandparents during Christmas vacation.',
      sentenceTranslation: 'Nós esperamos visitar nossos avós durante as férias de Natal.',
      options: [
        { id: 'a', label: 'A', text: 'to visit', isCorrect: true, explanation: 'Correto! O verbo "hope" (esperar com esperança) é seguido de "to + verbo" (hope to visit).' },
        { id: 'b', label: 'B', text: 'visiting', isCorrect: false, explanation: 'Incorreto. "Hope" não aceita a terminação -ing para a ação pretendida.' },
        { id: 'c', label: 'C', text: 'visit', isCorrect: false, explanation: 'Incorreto. Falta a partícula "to".' },
        { id: 'd', label: 'D', text: 'for visit', isCorrect: false, explanation: 'Incorreto. "For visit" está errado.' },
        { id: 'e', label: 'E', text: 'to visiting', isCorrect: false, explanation: 'Incorreto. Incorreto.' }
      ],
      correctExplanation: 'O verbo "hope" é seguido por "to + verbo" (hope to visit).'
    },
    {
      id: 9,
      sentence: '_______ English every single day is the best way to get fluent.',
      sentenceTranslation: 'Praticar inglês todo santo dia é a melhor maneira de ficar fluente.',
      options: [
        { id: 'a', label: 'A', text: 'Practicing', isCorrect: true, explanation: 'Correto! Quando um verbo inicia a oração funcionando como sujeito da frase, usamos a forma com "-ing" (Practicing English).' },
        { id: 'b', label: 'B', text: 'Practice', isCorrect: false, explanation: 'Incorreto. O verbo no imperativo/base não funciona como sujeito da frase afirmativa.' },
        { id: 'c', label: 'C', text: 'For practice', isCorrect: false, explanation: 'Incorreto. Não se inicia o sujeito com "For practice".' },
        { id: 'd', label: 'D', text: 'Practiced', isCorrect: false, explanation: 'Incorreto. Forma de passado.' },
        { id: 'e', label: 'E', text: 'To practicing', isCorrect: false, explanation: 'Incorreto. Estrutura errada.' }
      ],
      correctExplanation: 'Verbos atuando como sujeito no início da frase recebem "-ing" (Practicing English is...).'
    },
    {
      id: 10,
      sentence: 'I am looking forward to _______ you again next week.',
      sentenceTranslation: 'Estou ansioso para ver / encontrar você novamente na próxima semana.',
      options: [
        { id: 'a', label: 'A', text: 'see', isCorrect: false, explanation: 'Incorreto. O "to" em "looking forward to" é uma preposição, logo exige o verbo seguinte com -ing.' },
        { id: 'b', label: 'B', text: 'seeing', isCorrect: true, explanation: 'Correto! Em "look forward to", a palavra "to" é preposição, por isso o verbo que a segue ganha "-ing" (looking forward to seeing you).' },
        { id: 'c', label: 'C', text: 'saw', isCorrect: false, explanation: 'Incorreto. "Saw" é passado simples.' },
        { id: 'd', label: 'D', text: 'seen', isCorrect: false, explanation: 'Incorreto. Particípio passado.' },
        { id: 'e', label: 'E', text: 'to see', isCorrect: false, explanation: 'Incorreto. Já existe o "to" na frase anterior (ficaria to to see).' }
      ],
      correctExplanation: 'Na expressão "look forward to", o "to" é preposição e exige a forma "-ing" (seeing).'
    }
  ]
};
