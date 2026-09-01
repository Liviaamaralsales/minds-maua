import { GrammarTopic } from '../../types';

export const haveTakeTopic: GrammarTopic = {
  id: 'have-take',
  slug: 'have-x-take',
  title: 'Have x Take',
  shortDescription: 'Domine as combinações fixas (collocations) de refeições, transportes, fotos e descanso.',
  level: 'A1 - Básico',
  iconName: 'Coffee',
  a1Explanation: {
    quickGoldenRule: 'HAVE = Refeições (have lunch) e experiências sociais (have fun). TAKE = Transportes (take a bus), fotos (take a photo), remédios (take medicine) e pausas (take a break).',
    simpleConcept: 'Em inglês, "have" e "take" formam parcerias fixas com certas palavras. Em português dizemos "tomar café da manhã", mas em inglês NUNCA dizemos "take breakfast" — dizemos sempre "HAVE breakfast"!',
    rules: [
      {
        title: '1. Parcerias com "HAVE"',
        description: 'Usado para todas as refeições do dia, bebidas consumidas e momentos de diversão/conversa.',
        bullets: [
          'Refeições: have breakfast (tomar café da manhã), have lunch (almoçar), have dinner (jantar), have a snack.',
          'Bebidas: have a cup of coffee, have a drink, have a glass of water.',
          'Experiências e sentimentos: have fun (divertir-se), have a good time, have a chat (bater papo), have a baby.',
          'Olhar rápido: have a look (dar uma olhada).'
        ]
      },
      {
        title: '2. Parcerias com "TAKE"',
        description: 'Usado para meios de transporte, medicamentos, fotografia, pausas e atitudes físicas.',
        bullets: [
          'Transportes: take a bus (pegar ônibus), take a train, take a taxi, take the subway.',
          'Remédios: take medicine (tomar remédio), take an aspirin, take vitamins.',
          'Registros e anotações: take a photo / picture (tirar foto), take notes (fazer anotações).',
          'Pausas e tempo: take a break (fazer uma pausa), take a seat (sentar-se), take your time (não tenha pressa).'
        ]
      }
    ],
    memoryTip: 'Cuidado com a Pegadinha Brasileira: Tomar café / almoçar ➔ HAVE breakfast / lunch (não use take!). Tomar remédio ➔ TAKE medicine. Pegar ônibus / Tirar foto ➔ TAKE a bus / TAKE a photo.',
    comparisonTable: {
      col1Title: 'Expressões com HAVE',
      col2Title: 'Expressões com TAKE',
      rows: [
        { col1: 'have breakfast (tomar café da manhã)', col2: 'take medicine (tomar remédio)', note: 'Comida = have; Remédio = take' },
        { col1: 'have lunch / dinner (almoçar / jantar)', col2: 'take a bus / taxi (pegar transporte)', note: 'Refeição = have; Veículo = take' },
        { col1: 'have fun (divertir-se)', col2: 'take a break (fazer um intervalo)', note: 'Emoção = have; Ação de parar = take' },
        { col1: 'have a chat (bater papo)', col2: 'take a photo (tirar foto)', note: 'Social = have; Câmera = take' },
        { col1: 'have a rest (descansar)', col2: 'take a seat (sentar-se)', note: 'Ambos muito usados no dia a dia' }
      ]
    }
  },
  pronunciationVideo: {
    title: 'Pronúncia: HAVE vs TAKE & Collocations Naturais',
    youtubeId: 'mD7E9_b9L2g',
    channelName: 'Minds Pronunciation Lab & BBC Learning English',
    duration: '6:10',
    description: 'Aprenda a pronúncia do som suave /v/ em "have", o "k" explosivo em "take" e o linking sound em "have a / take a".',
    ipaGuides: [
      { word: 'Have a...', ipa: '/ˈhæv.ə/', soundNote: 'O som /v/ conecta suavemente com a vogal /ə/ ("hév-a").' },
      { word: 'Take a...', ipa: '/ˈteɪ.kə/', soundNote: 'O "k" final junta-se com o artigo ("téi-ka").' },
    ],
    keyTimestamps: [
      { label: 'Linking de "Have a..." e "Take a..."', time: '0:50' },
      { label: 'Collocations de refeições e remédios', time: '2:15' },
      { label: 'Prática de diálogo rápido', time: '4:10' },
    ]
  },
  examples: [
    {
      english: 'I always have breakfast at 7:30 AM with my family.',
      portuguese: 'Eu sempre tomo café da manhã às 7h30 com a minha família.',
      highlight: 'have breakfast',
      note: 'Refeições sempre usam o verbo "have".'
    },
    {
      english: 'You should take an aspirin for your headache.',
      portuguese: 'Você deveria tomar uma aspirina para a sua dor de cabeça.',
      highlight: 'take an aspirin',
      note: 'Medicamentos sempre usam o verbo "take".'
    },
    {
      english: 'Can you take a picture of us in front of the monument?',
      portuguese: 'Você pode tirar uma foto nossa na frente do monumento?',
      highlight: 'take a picture',
      note: 'Tirar fotos usa "take".'
    },
    {
      english: 'We had so much fun at the beach last Saturday!',
      portuguese: 'Nós nos divertimos tanto na praia no último sábado!',
      highlight: 'had so much fun',
      note: 'Passado de have: "had fun" (divertir-se).'
    }
  ],
  quiz: [
    {
      id: 1,
      sentence: 'I usually _______ breakfast at seven in the morning.',
      sentenceTranslation: 'Eu geralmente tomo café da manhã às sete da manhã.',
      options: [
        { id: 'a', label: 'A', text: 'take', isCorrect: false, explanation: 'Incorreto. Em português dizemos "tomar café", mas em inglês refeições NUNCA usam "take". Usamos sempre "have".' },
        { id: 'b', label: 'B', text: 'have', isCorrect: true, explanation: 'Correto! Para todas as refeições (breakfast, lunch, dinner) usamos o verbo "have".' },
        { id: 'c', label: 'C', text: 'takes', isCorrect: false, explanation: 'Incorreto. "Takes" não combina com refeições e a 1ª pessoa "I" não aceita "s".' },
        { id: 'd', label: 'D', text: 'has', isCorrect: false, explanation: 'Incorreto. Com o sujeito "I" usamos "have", não "has".' },
        { id: 'e', label: 'E', text: 'taking', isCorrect: false, explanation: 'Incorreto. A frase descreve hábito no presente simples ("usually"), sem gerúndio.' }
      ],
      correctExplanation: 'Em inglês, refeições são consumidas com o verbo "have" (have breakfast, have lunch).'
    },
    {
      id: 2,
      sentence: 'You look sick; you should _______ this medicine right now.',
      sentenceTranslation: 'Você parece doente; você deveria tomar este remédio agora mesmo.',
      options: [
        { id: 'a', label: 'A', text: 'have', isCorrect: false, explanation: 'Incorreto. "Have medicine" não expressa a ação de ingerir o remédio; usamos "take".' },
        { id: 'b', label: 'B', text: 'take', isCorrect: true, explanation: 'Correto! Ingerir medicamentos, pílulas e xaropes usa sempre o verbo "take" (take medicine).' },
        { id: 'c', label: 'C', text: 'takes', isCorrect: false, explanation: 'Incorreto. Após o modal "should", o verbo fica na forma base sem "s".' },
        { id: 'd', label: 'D', text: 'has', isCorrect: false, explanation: 'Incorreto. Após modal "should" usa-se a forma base.' },
        { id: 'e', label: 'E', text: 'taking', isCorrect: false, explanation: 'Incorreto. Após modal "should" usamos a forma base "take".' }
      ],
      correctExplanation: 'Medicamentos são ingeridos com o verbo "take" (take medicine).'
    },
    {
      id: 3,
      sentence: 'Excuse me, could you _______ a picture of our family, please?',
      sentenceTranslation: 'Com licença, você poderia tirar uma foto da nossa família, por favor?',
      options: [
        { id: 'a', label: 'A', text: 'have', isCorrect: false, explanation: 'Incorreto. "Have a picture" significa possuir uma foto, não tirá-la com a câmera.' },
        { id: 'b', label: 'B', text: 'has', isCorrect: false, explanation: 'Incorreto. "Has" não cabe após o modal "could" e não é o verbo para tirar fotos.' },
        { id: 'c', label: 'C', text: 'take', isCorrect: true, explanation: 'Correto! A expressão consagrada em inglês para fotografar é "take a picture" ou "take a photo".' },
        { id: 'd', label: 'D', text: 'takes', isCorrect: false, explanation: 'Incorreto. Após o modal "could you" usamos a forma base sem "s".' },
        { id: 'e', label: 'E', text: 'taking', isCorrect: false, explanation: 'Incorreto. Após modal "could" usamos o infinitivo base.' }
      ],
      correctExplanation: '"Take a picture / photo" é a combinação certa para registrar fotos.'
    },
    {
      id: 4,
      sentence: 'We need to _______ a bus to get to the downtown museum.',
      sentenceTranslation: 'Nós precisamos pegar um ônibus para chegar ao museu no centro.',
      options: [
        { id: 'a', label: 'A', text: 'have', isCorrect: false, explanation: 'Incorreto. "Have a bus" significaria ser dono do ônibus!' },
        { id: 'b', label: 'B', text: 'take', isCorrect: true, explanation: 'Correto! Para utilizar meios de transporte público dizemos "take a bus / train / taxi / subway".' },
        { id: 'c', label: 'C', text: 'takes', isCorrect: false, explanation: 'Incorreto. Após "need to" usamos o infinitivo base sem "s".' },
        { id: 'd', label: 'D', text: 'has', isCorrect: false, explanation: 'Incorreto. Não usamos "has" após a partícula "to".' },
        { id: 'e', label: 'E', text: 'taking', isCorrect: false, explanation: 'Incorreto. Após "need to" usamos a forma base "take".' }
      ],
      correctExplanation: 'Para embarcar e usar transporte público, usamos "take" (take a bus).'
    },
    {
      id: 5,
      sentence: 'Have a safe flight and _______ fun at the music festival!',
      sentenceTranslation: 'Tenha um bom voo e divirta-se no festival de música!',
      options: [
        { id: 'a', label: 'A', text: 'take', isCorrect: false, explanation: 'Incorreto. "Take fun" não existe em inglês.' },
        { id: 'b', label: 'B', text: 'takes', isCorrect: false, explanation: 'Incorreto. "Takes" não cabe no imperativo.' },
        { id: 'c', label: 'C', text: 'have', isCorrect: true, explanation: 'Correto! A expressão consagrada em inglês para divertir-se é "have fun" / "have a good time".' },
        { id: 'd', label: 'D', text: 'has', isCorrect: false, explanation: 'Incorreto. No imperativo afirmativo usamos a forma base "have".' },
        { id: 'e', label: 'E', text: 'had', isCorrect: false, explanation: 'Incorreto. Estamos desejando diversão no momento/futuro, não no passado.' }
      ],
      correctExplanation: '"Have fun" é a expressão natural em inglês para divertir-se.'
    },
    {
      id: 6,
      sentence: 'You have been studying for four hours; you should _______ a break.',
      sentenceTranslation: 'Você está estudando há quatro horas; você deveria fazer uma pausa.',
      options: [
        { id: 'a', label: 'A', text: 'take', isCorrect: true, explanation: 'Correto! A expressão clássica para fazer um intervalo no trabalho/estudo é "take a break".' },
        { id: 'b', label: 'B', text: 'have', isCorrect: false, explanation: 'Incorreto. Embora "have a break" seja usado no inglês britânico informal, "take a break" é o padrão internacional e mais ensinado.' },
        { id: 'c', label: 'C', text: 'takes', isCorrect: false, explanation: 'Incorreto. Após modal "should" o verbo fica na forma base sem "s".' },
        { id: 'd', label: 'D', text: 'has', isCorrect: false, explanation: 'Incorreto. Após modal "should" usa-se a forma base.' },
        { id: 'e', label: 'E', text: 'taking', isCorrect: false, explanation: 'Incorreto. Após "should" usamos a forma base.' }
      ],
      correctExplanation: 'Fazer uma pausa ou intervalo no trabalho usa "take a break".'
    },
    {
      id: 7,
      sentence: 'Let\'s _______ lunch together at that new Italian restaurant.',
      sentenceTranslation: 'Vamos almoçar juntos naquele restaurante italiano novo.',
      options: [
        { id: 'a', label: 'A', text: 'take', isCorrect: false, explanation: 'Incorreto. Não se usa "take" para refeições em inglês.' },
        { id: 'b', label: 'B', text: 'have', isCorrect: true, explanation: 'Correto! "Have lunch" é a forma padrão para "almoçar".' },
        { id: 'c', label: 'C', text: 'has', isCorrect: false, explanation: 'Incorreto. Após "let\'s" usamos o verbo na forma base "have".' },
        { id: 'd', label: 'D', text: 'takes', isCorrect: false, explanation: 'Incorreto. Não cabe após "let\'s" nem combina com almoço.' },
        { id: 'e', label: 'E', text: 'having', isCorrect: false, explanation: 'Incorreto. Após "let\'s" usamos o infinitivo sem to / forma base.' }
      ],
      correctExplanation: '"Have lunch" é a forma padrão em inglês para almoçar.'
    },
    {
      id: 8,
      sentence: 'Please come in and _______ a seat; the interview will start shortly.',
      sentenceTranslation: 'Por favor entre e sente-se; a entrevista começará em breve.',
      options: [
        { id: 'a', label: 'A', text: 'take', isCorrect: true, explanation: 'Correto! "Take a seat" é a maneira educada clássica de convidar alguém a se sentar.' },
        { id: 'b', label: 'B', text: 'have', isCorrect: false, explanation: 'Incorreto. "Take a seat" é a colocação verbal mais comum e consagrada para o convite a sentar-se.' },
        { id: 'c', label: 'C', text: 'takes', isCorrect: false, explanation: 'Incorreto. No imperativo usamos a forma base sem "s".' },
        { id: 'd', label: 'D', text: 'has', isCorrect: false, explanation: 'Incorreto. Forma com "s" não é usada em comandos ou convites imperativos.' },
        { id: 'e', label: 'E', text: 'took', isCorrect: false, explanation: 'Incorreto. A frase é um convite no presente, não no passado.' }
      ],
      correctExplanation: '"Take a seat" é a expressão de boas-vindas para convidar a sentar.'
    },
    {
      id: 9,
      sentence: 'I always _______ a cup of hot green tea before going to sleep.',
      sentenceTranslation: 'Eu sempre tomo uma xícara de chá verde quente antes de ir dormir.',
      options: [
        { id: 'a', label: 'A', text: 'take', isCorrect: false, explanation: 'Incorreto. Não se usa "take" para bebidas alimentares.' },
        { id: 'b', label: 'B', text: 'have', isCorrect: true, explanation: 'Correto! "Have a cup of tea / coffee" é o modo mais comum e elegante em inglês.' },
        { id: 'c', label: 'C', text: 'has', isCorrect: false, explanation: 'Incorreto. Com o sujeito "I" usamos "have".' },
        { id: 'd', label: 'D', text: 'takes', isCorrect: false, explanation: 'Incorreto. Não combina com bebidas e não cabe com "I".' },
        { id: 'e', label: 'E', text: 'had', isCorrect: false, explanation: 'Incorreto. O advérbio "always" indica rotina habitual no presente.' }
      ],
      correctExplanation: 'Consumir bebidas utiliza "have a cup of tea / coffee / water".'
    },
    {
      id: 10,
      sentence: 'Don\'t rush; _______ your time to complete the test carefully.',
      sentenceTranslation: 'Não tenha pressa; leve o tempo que precisar para completar a prova com cuidado.',
      options: [
        { id: 'a', label: 'A', text: 'have', isCorrect: false, explanation: 'Incorreto. "Have your time" não é a expressão correta.' },
        { id: 'b', label: 'B', text: 'take', isCorrect: true, explanation: 'Correto! "Take your time" é a expressão idiomática para "não tenha pressa / leve o tempo que precisar".' },
        { id: 'c', label: 'C', text: 'takes', isCorrect: false, explanation: 'Incorreto. No imperativo usamos a forma base "take".' },
        { id: 'd', label: 'D', text: 'has', isCorrect: false, explanation: 'Incorreto. Não cabe no imperativo.' },
        { id: 'e', label: 'E', text: 'taking', isCorrect: false, explanation: 'Incorreto. No imperativo não se usa gerúndio.' }
      ],
      correctExplanation: '"Take your time" é a expressão padrão para orientar alguém a fazer algo sem pressa.'
    }
  ]
};
