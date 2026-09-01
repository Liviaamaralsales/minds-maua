import { GrammarTopic } from '../../types';

export const phrasalVerbsTopic: GrammarTopic = {
  id: 'phrasal-verbs',
  slug: 'phrasal-verbs',
  title: 'Phrasal Verbs',
  shortDescription: 'Descubra os verbos compostos mais usados no dia a dia e seus significados reais.',
  level: 'Essencial',
  iconName: 'Sparkles',
  a1Explanation: {
    quickGoldenRule: 'Phrasal Verb = Verbo normal + Preposição/Advérbio juntos criando um NOVO SIGNIFICADO que não dá para traduzir palavra por palavra!',
    simpleConcept: 'Pense neles como combos mágicos do videogame: "Give" é dar, mas "Give up" vira DESISTIR! "Look" é olhar, mas "Look for" vira PROCURAR! Você não precisa ter medo: aprenda os principais como palavras normais do vocabulário.',
    rules: [
      {
        title: '1. O que são e como funcionam',
        description: 'São blocos de vocabulário formados por um verbo base + partícula (up, on, off, out, for, after).',
        bullets: [
          'Give (dar) + up (cima) = GIVE UP (desistir).',
          'Look (olhar) + for (para) = LOOK FOR (procurar).',
          'Turn (virar) + on / off = TURN ON (ligar) / TURN OFF (desligar).'
        ]
      },
      {
        title: '2. Os 6 Phrasal Verbs mais famosos do dia a dia',
        description: 'Memorize estes seis para falar com naturalidade:',
        bullets: [
          'WAKE UP (despertar/acordar) & GET UP (levantar-se da cama).',
          'LOOK AFTER (cuidar de alguém / animais / crianças).',
          'RUN OUT OF (ficar sem algo, ex: dinheiro, café, gasolina).',
          'FIND OUT (descobrir uma informação nova).',
          'PUT OFF (adiar um compromisso para depois).',
          'TAKE OFF (decolar o avião ou tirar casaco/sapatos).'
        ]
      }
    ],
    memoryTip: 'Dica Minds: Nunca traduza ao pé da letra! Aprenda sempre o bloco de palavras junto com seu significado completo, como "Never give up!" (Nunca desista!).',
    comparisonTable: {
      col1Title: 'Phrasal Verb',
      col2Title: 'Significado em Português e Exemplo',
      rows: [
        { col1: 'Give up', col2: 'Desistir ➔ "Never give up on your dreams."', note: 'Combinação clássica' },
        { col1: 'Look for', col2: 'Procurar ➔ "I am looking for my keys."', note: 'Buscar objeto/pessoa' },
        { col1: 'Look after', col2: 'Cuidar ➔ "She looks after her baby sister."', note: 'Zelar por alguém' },
        { col1: 'Turn off', col2: 'Desligar ➔ "Please turn off the lights."', note: 'Aparelhos e luzes' },
        { col1: 'Run out of', col2: 'Ficar sem ➔ "We ran out of milk."', note: 'Acabar o estoque' }
      ]
    }
  },
  pronunciationVideo: {
    title: 'Pronúncia: Stress & Linking em Phrasal Verbs',
    youtubeId: 'K9z-81_p02Y',
    channelName: 'Minds Pronunciation Lab & Rachel\'s English',
    duration: '7:40',
    description: 'Descubra como a preposição em phrasal verbs recebe a maior ênfase (give UP, turn OFF) e como ligar a consoante à vogal seguinte.',
    ipaGuides: [
      { word: 'Give up', ipa: '/ɡɪv ˈʌp/', soundNote: 'O som "v" conecta com o "u" virando "gi-vup". Acento forte em UP.' },
      { word: 'Turn off', ipa: '/tɜːrn ˈɔːf/', soundNote: 'O "n" conecta com o "o" virando "tur-noff". Acento forte em OFF.' },
      { word: 'Look after', ipa: '/lʊk ˈæf.tər/', soundNote: 'O "k" junta com a vogal virando "lu-kafter".' },
    ],
    keyTimestamps: [
      { label: 'Acento tônico na partícula (Preposição)', time: '0:50' },
      { label: 'Linking Sounds (Giv-up, Turn-off)', time: '2:30' },
      { label: 'Exemplos em filmes e séries', time: '5:00' },
    ]
  },
  examples: [
    {
      english: 'Never give up on learning English; with practice you will succeed!',
      portuguese: 'Nunca desista de aprender inglês; com prática você terá sucesso!',
      highlight: 'give up',
      note: 'Phrasal verb que significa desistir.'
    },
    {
      english: 'I am looking for my glasses. Have you seen them anywhere?',
      portuguese: 'Eu estou procurando meus óculos. Você os viu em algum lugar?',
      highlight: 'looking for',
      note: 'Significa procurar/buscar algo perdido.'
    },
    {
      english: 'Please turn off the lights when you leave the room.',
      portuguese: 'Por favor desligue as luzes quando sair do quarto.',
      highlight: 'turn off',
      note: 'Desligar energia/luzes/eletrônicos.'
    },
    {
      english: 'We ran out of coffee, so I need to go to the grocery store.',
      portuguese: 'Nós ficamos sem café, então preciso ir ao mercado.',
      highlight: 'ran out of',
      note: 'Passado de "run out of" = ficar sem.'
    }
  ],
  quiz: [
    {
      id: 1,
      sentence: 'Don\'t _______ your dreams; keep studying and working hard!',
      sentenceTranslation: 'Não desista dos seus sonhos; continue estudando e trabalhando duro!',
      options: [
        { id: 'a', label: 'A', text: 'give up', isCorrect: true, explanation: 'Correto! "Give up" significa "desistir", perfeito para a mensagem motivacional.' },
        { id: 'b', label: 'B', text: 'give in', isCorrect: false, explanation: 'Incorreto. "Give in" significa ceder à pressão/render-se.' },
        { id: 'c', label: 'C', text: 'give out', isCorrect: false, explanation: 'Incorreto. "Give out" significa distribuir ou falhar.' },
        { id: 'd', label: 'D', text: 'take off', isCorrect: false, explanation: 'Incorreto. "Take off" é decolar ou tirar roupa.' },
        { id: 'e', label: 'E', text: 'look out', isCorrect: false, explanation: 'Incorreto. "Look out" significa ter cuidado/prestar atenção.' }
      ],
      correctExplanation: '"Give up" é o phrasal verb consagrado para "desistir".'
    },
    {
      id: 2,
      sentence: 'I lost my car keys and I have been _______ them all morning.',
      sentenceTranslation: 'Perdi as chaves do meu carro e estive procurando por elas a manhã toda.',
      options: [
        { id: 'a', label: 'A', text: 'looking after', isCorrect: false, explanation: 'Incorreto. "Look after" significa cuidar/zelar (ex: cuidar de crianças).' },
        { id: 'b', label: 'B', text: 'looking for', isCorrect: true, explanation: 'Correto! "Look for" significa "procurar / buscar algo que está perdido".' },
        { id: 'c', label: 'C', text: 'looking into', isCorrect: false, explanation: 'Incorreto. "Look into" significa investigar um crime/problema.' },
        { id: 'd', label: 'D', text: 'looking up to', isCorrect: false, explanation: 'Incorreto. "Look up to" significa admirar alguém.' },
        { id: 'e', label: 'E', text: 'looking forward', isCorrect: false, explanation: 'Incorreto. Significa ansiar por algo futuro.' }
      ],
      correctExplanation: '"Look for" significa procurar por algo ou alguém.'
    },
    {
      id: 3,
      sentence: 'Please _______ your computer before you leave the office.',
      sentenceTranslation: 'Por favor desligue o seu computador antes de sair do escritório.',
      options: [
        { id: 'a', label: 'A', text: 'turn off', isCorrect: true, explanation: 'Correto! "Turn off" é o phrasal verb para desligar aparelhos elétricos e eletrônicos.' },
        { id: 'b', label: 'B', text: 'turn down', isCorrect: false, explanation: 'Incorreto. "Turn down" significa abaixar o volume ou recusar uma oferta.' },
        { id: 'c', label: 'C', text: 'turn in', isCorrect: false, explanation: 'Incorreto. "Turn in" significa entregar um trabalho ou ir para a cama.' },
        { id: 'd', label: 'D', text: 'turn on', isCorrect: false, explanation: 'Incorreto. "Turn on" significa ligar, o oposto de desligar.' },
        { id: 'e', label: 'E', text: 'turn up', isCorrect: false, explanation: 'Incorreto. "Turn up" significa aumentar o volume ou aparecer de repente.' }
      ],
      correctExplanation: '"Turn off" significa desligar aparelhos, telas e luzes.'
    },
    {
      id: 4,
      sentence: 'Can you _______ my cat while I am on vacation this weekend?',
      sentenceTranslation: 'Você pode cuidar do meu gato enquanto estou de férias neste fim de semana?',
      options: [
        { id: 'a', label: 'A', text: 'look for', isCorrect: false, explanation: 'Incorreto. "Look for" é procurar o gato se ele estiver perdido.' },
        { id: 'b', label: 'B', text: 'look after', isCorrect: true, explanation: 'Correto! "Look after" significa cuidar / zelar pelo bem-estar de alguém ou de animais.' },
        { id: 'c', label: 'C', text: 'look at', isCorrect: false, explanation: 'Incorreto. "Look at" é apenas olhar fisicamente com os olhos.' },
        { id: 'd', label: 'D', text: 'look up', isCorrect: false, explanation: 'Incorreto. "Look up" significa buscar uma palavra no dicionário.' },
        { id: 'e', label: 'E', text: 'look through', isCorrect: false, explanation: 'Incorreto. "Look through" significa folhear ou examinar rapidamente.' }
      ],
      correctExplanation: '"Look after" é o phrasal verb para cuidar (take care of).'
    },
    {
      id: 5,
      sentence: 'We _______ gas on our road trip, so we had to call for help.',
      sentenceTranslation: 'Nós ficamos sem gasolina na nossa viagem de carro, então tivemos que chamar ajuda.',
      options: [
        { id: 'a', label: 'A', text: 'ran out of', isCorrect: true, explanation: 'Correto! "Run out of" (passado: ran out of) significa esgotar o estoque ou ficar completamente sem algo.' },
        { id: 'b', label: 'B', text: 'ran away', isCorrect: false, explanation: 'Incorreto. "Run away" significa fugir/escapar.' },
        { id: 'c', label: 'C', text: 'ran into', isCorrect: false, explanation: 'Incorreto. "Run into" significa esbarrar por acaso em alguém na rua.' },
        { id: 'd', label: 'D', text: 'ran over', isCorrect: false, explanation: 'Incorreto. "Run over" significa atropelar ou transbordar.' },
        { id: 'e', label: 'E', text: 'ran off', isCorrect: false, explanation: 'Incorreto. "Ran off" significa fugir repentinamente.' }
      ],
      correctExplanation: '"Run out of" é o phrasal verb para ficar desprovido de algo (ficar sem).'
    },
    {
      id: 6,
      sentence: 'The airplane will _______ at 3:00 PM from terminal 2.',
      sentenceTranslation: 'O avião vai decolar às 15h do terminal 2.',
      options: [
        { id: 'a', label: 'A', text: 'take off', isCorrect: true, explanation: 'Correto! "Take off" significa a decolagem do avião ao sair da pista e subir aos céus.' },
        { id: 'b', label: 'B', text: 'take on', isCorrect: false, explanation: 'Incorreto. "Take on" significa assumir uma responsabilidade.' },
        { id: 'c', label: 'C', text: 'take in', isCorrect: false, explanation: 'Incorreto. "Take in" significa absorver ou acolher.' },
        { id: 'd', label: 'D', text: 'take up', isCorrect: false, explanation: 'Incorreto. "Take up" significa começar um novo hobby ou ocupar espaço.' },
        { id: 'e', label: 'E', text: 'take back', isCorrect: false, explanation: 'Incorreto. "Take back" significa devolver algo ou retirar o que disse.' }
      ],
      correctExplanation: '"Take off" é o termo específico em aviação para a decolagem da aeronave.'
    },
    {
      id: 7,
      sentence: 'The boss decided to _______ the meeting until next Monday.',
      sentenceTranslation: 'O chefe decidiu adiar a reunião até a próxima segunda-feira.',
      options: [
        { id: 'a', label: 'A', text: 'put off', isCorrect: true, explanation: 'Correto! "Put off" é o phrasal verb para "adiar / postergar" (postpone).' },
        { id: 'b', label: 'B', text: 'put on', isCorrect: false, explanation: 'Incorreto. "Put on" significa vestir roupas ou colocar maquiagem/música.' },
        { id: 'c', label: 'C', text: 'put out', isCorrect: false, explanation: 'Incorreto. "Put out" significa apagar fogo/incêndio.' },
        { id: 'd', label: 'D', text: 'put away', isCorrect: false, explanation: 'Incorreto. "Put away" significa guardar itens no seu devido lugar.' },
        { id: 'e', label: 'E', text: 'put through', isCorrect: false, explanation: 'Incorreto. "Put through" significa transferir uma chamada telefônica.' }
      ],
      correctExplanation: '"Put off" significa adiar uma data ou evento para mais tarde.'
    },
    {
      id: 8,
      sentence: 'I need to _______ the truth about what happened at school.',
      sentenceTranslation: 'Eu preciso descobrir a verdade sobre o que aconteceu na escola.',
      options: [
        { id: 'a', label: 'A', text: 'find out', isCorrect: true, explanation: 'Correto! "Find out" significa descobrir informações novas que você não sabia.' },
        { id: 'b', label: 'B', text: 'find in', isCorrect: false, explanation: 'Incorreto. "Find in" não é um phrasal verb comum para descobrir.' },
        { id: 'c', label: 'C', text: 'look down', isCorrect: false, explanation: 'Incorreto. "Look down on" significa menosprezar.' },
        { id: 'd', label: 'D', text: 'give away', isCorrect: false, explanation: 'Incorreto. "Give away" significa doar ou entregar um segredo.' },
        { id: 'e', label: 'E', text: 'make up', isCorrect: false, explanation: 'Incorreto. "Make up" significa inventar uma história.' }
      ],
      correctExplanation: '"Find out" é o phrasal verb para "descobrir" ou tomar ciência de algo.'
    },
    {
      id: 9,
      sentence: 'I _______ at 6:30 AM, but I only get out of bed at 7:00 AM.',
      sentenceTranslation: 'Eu acordo às 6h30, mas só levanto da cama às 7h.',
      options: [
        { id: 'a', label: 'A', text: 'wake up', isCorrect: true, explanation: 'Correto! "Wake up" significa abrir os olhos e acordar (enquanto get up é levantar o corpo da cama).' },
        { id: 'b', label: 'B', text: 'stand up', isCorrect: false, explanation: 'Incorreto. "Stand up" é levantar-se de pé.' },
        { id: 'c', label: 'C', text: 'give up', isCorrect: false, explanation: 'Incorreto. "Give up" significa desistir.' },
        { id: 'd', label: 'D', text: 'turn up', isCorrect: false, explanation: 'Incorreto. "Turn up" significa aparecer/aumentar o som.' },
        { id: 'e', label: 'E', text: 'set up', isCorrect: false, explanation: 'Incorreto. "Set up" significa configurar ou montar.' }
      ],
      correctExplanation: '"Wake up" é a ação biológica de acordar/despertar do sono.'
    },
    {
      id: 10,
      sentence: 'Do you _______ well with your coworkers at your job?',
      sentenceTranslation: 'Você se dá bem / tem um bom relacionamento com seus colegas no trabalho?',
      options: [
        { id: 'a', label: 'A', text: 'get along', isCorrect: true, explanation: 'Correto! "Get along (with)" significa conviver em harmonia / dar-se bem com alguém.' },
        { id: 'b', label: 'B', text: 'get off', isCorrect: false, explanation: 'Incorreto. "Get off" significa descer de um ônibus/trem.' },
        { id: 'c', label: 'C', text: 'get away', isCorrect: false, explanation: 'Incorreto. "Get away" significa fugir ou tirar férias.' },
        { id: 'd', label: 'D', text: 'get over', isCorrect: false, explanation: 'Incorreto. "Get over" significa superar uma doença ou término.' },
        { id: 'e', label: 'E', text: 'get through', isCorrect: false, explanation: 'Incorreto. "Get through" significa atravessar uma dificuldade.' }
      ],
      correctExplanation: '"Get along with" é a expressão usada para relacionar-se amigavelmente.'
    }
  ]
};
