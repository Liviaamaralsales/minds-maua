import { GrammarTopic } from '../../types';

export const muchALotOfTopic: GrammarTopic = {
  id: 'much-a-lot-of',
  slug: 'much-x-a-lot-of',
  title: 'Much x A lot of',
  shortDescription: 'Descubra a diferença de quantidade para coisas incontáveis, negativas e afirmativas.',
  level: 'A1 - Básico',
  iconName: 'Coins',
  a1Explanation: {
    quickGoldenRule: 'MUCH = Coisas incontáveis (água, tempo, dinheiro), usado quase sempre em perguntas e frases negativas. A LOT OF = Serve para tudo e é o rei das frases afirmativas (+)!',
    simpleConcept: 'No inglês do dia a dia, é raro dizer "I have much money" (+). Em vez disso, dizemos "I have a lot of money". Deixamos o "much" para quando falta algo ("I don\'t have much money") ou para perguntar ("Do you have much time?").',
    rules: [
      {
        title: 'Quando usar "MUCH"',
        description: 'Usado exclusivamente com substantivos incontáveis (uncountable) e prioritariamente em frases negativas (-) e perguntas (?).',
        bullets: [
          'Incontáveis: time (tempo), money (dinheiro), water (água), sugar (açúcar), information (informação).',
          'Frases negativas: "I don\'t drink much coffee." (Eu não bebo muito café).',
          'Perguntas: "Do you have much luggage?" (Você tem muita bagagem?).',
          'Intensificadores: "too much" (demais) ou "so much" (tanto/tanta).'
        ]
      },
      {
        title: 'Quando usar "A LOT OF" (ou "LOTS OF")',
        description: 'É a expressão mais natural e amigável do inglês! Funciona com coisas contáveis (amigos, livros) e incontáveis (água, paciência), especialmente em frases afirmativas (+).',
        bullets: [
          'Afirmativa com incontáveis: "She drinks a lot of water." (Ela bebe muita água).',
          'Afirmativa com contáveis: "They have a lot of friends." (Eles têm muitos amigos).',
          'Super natural: Se você estiver em dúvida em uma frase positiva, use "a lot of"!'
        ]
      }
    ],
    memoryTip: 'Dica de Ouro: Frase positiva (+) feliz? Vá de "A LOT OF". Frase negativa (-) ou dúvida (?) com coisas que não dá para contar no dedo? Chame o "MUCH"!',
    comparisonTable: {
      col1Title: 'MUCH (Incontável / Negativa / Dúvida)',
      col2Title: 'A LOT OF (Coringa / Afirmativas)',
      rows: [
        { col1: 'I don\'t have much time. (-)', col2: 'I have a lot of time. (+)', note: 'Time é incontável; positiva pede a lot of.' },
        { col1: 'Do you drink much tea? (?)', col2: 'I drink a lot of tea. (+)', note: 'Pergunta aceita much; afirmativa prefere a lot of.' },
        { col1: 'There isn\'t much milk left. (-)', col2: 'There is a lot of milk in the fridge. (+)', note: 'Ambos com substantivo incontável (leite).' },
        { col1: 'How much does it cost? (?)', col2: 'It costs a lot of money. (+)', note: 'How much para perguntar valor.' }
      ]
    }
  },
  pronunciationVideo: {
    title: 'Pronúncia & Reduções: MUCH vs A LOT OF',
    youtubeId: 'Z19_ePZgY3E',
    channelName: 'Minds Pronunciation Lab & BBC Learning English',
    duration: '5:20',
    description: 'Domine a pronúncia do fonema /tʃ/ em "much" e a redução nativa de "a lot of" para "/ə ˈlɑː.t̬əv/".',
    ipaGuides: [
      { word: 'Much', ipa: '/mʌtʃ/', soundNote: 'Vogal central relaxada /ʌ/ e terminação africada forte /tʃ/.' },
      { word: 'A lot of', ipa: '/ə ˈlɑː.t̬əv/', soundNote: 'Flap T no inglês americano: o "t" soa como "r" brando e o "of" vira /əv/.' },
    ],
    keyTimestamps: [
      { label: 'O som de "Much"', time: '0:30' },
      { label: 'Flap T e redução de "A lot of"', time: '1:45' },
      { label: 'Treino de ritmo e velocidade', time: '3:10' },
    ]
  },
  examples: [
    {
      english: 'I don\'t have much money in my wallet today.',
      portuguese: 'Eu não tenho muito dinheiro na minha carteira hoje.',
      highlight: 'don\'t have much money',
      note: 'Frase negativa (-) com "money" (incontável).'
    },
    {
      english: 'We have a lot of fun together every weekend.',
      portuguese: 'Nós nos divertimos muito juntos todo fim de semana.',
      highlight: 'a lot of fun',
      note: 'Frase afirmativa (+) usando a lot of.'
    },
    {
      english: 'Is there much traffic in the city center right now?',
      portuguese: 'Tem muito trânsito no centro da cidade agora?',
      highlight: 'Is there much traffic',
      note: 'Pergunta (?) sobre trânsito (incontável).'
    },
    {
      english: 'She has a lot of books in her bedroom.',
      portuguese: 'Ela tem muitos livros no quarto dela.',
      highlight: 'a lot of books',
      note: 'Afirmativa com plural contável.'
    }
  ],
  quiz: [
    {
      id: 1,
      sentence: 'I don\'t have _______ time to finish this project today.',
      sentenceTranslation: 'Eu não tenho muito tempo para terminar este projeto hoje.',
      options: [
        { id: 'a', label: 'A', text: 'many', isCorrect: false, explanation: 'Incorreto. "Many" só é usado com substantivos contáveis no plural (ex: many hours, many days). "Time" é incontável.' },
        { id: 'b', label: 'B', text: 'much', isCorrect: true, explanation: 'Correto! Frase negativa (-) com substantivo incontável ("time") pede "much".' },
        { id: 'c', label: 'C', text: 'a lot', isCorrect: false, explanation: 'Incorreto. "A lot" sem a preposição "of" só pode ser usado no final de frases como advérbio.' },
        { id: 'd', label: 'D', text: 'lots', isCorrect: false, explanation: 'Incorreto. Falta a preposição "of" ("lots of time").' },
        { id: 'e', label: 'E', text: 'a much', isCorrect: false, explanation: 'Incorreto. "A much" não existe em inglês.' }
      ],
      correctExplanation: 'Usamos "much" em frases negativas com substantivos incontáveis como "time".'
    },
    {
      id: 2,
      sentence: 'She drinks _______ water after running in the morning.',
      sentenceTranslation: 'Ela bebe muita água depois de correr pela manhã.',
      options: [
        { id: 'a', label: 'A', text: 'a lot of', isCorrect: true, explanation: 'Correto! Em frases afirmativas (+), "a lot of" é a forma mais natural para indicar grande quantidade de água.' },
        { id: 'b', label: 'B', text: 'many', isCorrect: false, explanation: 'Incorreto. "Water" é incontável (líquido), portanto não aceita "many".' },
        { id: 'c', label: 'C', text: 'much', isCorrect: false, explanation: 'Incorreto. Em frases afirmativas comuns (+), "much" soa antinatural em inglês moderno; preferimos "a lot of".' },
        { id: 'd', label: 'D', text: 'a lot', isCorrect: false, explanation: 'Incorreto. Antes de substantivo precisamos de "a lot of", não apenas "a lot".' },
        { id: 'e', label: 'E', text: 'lots', isCorrect: false, explanation: 'Incorreto. Falta a preposição "of" ("lots of").' }
      ],
      correctExplanation: 'Em orações afirmativas, "a lot of" é a opção padrão para expressar "muito/muita".'
    },
    {
      id: 3,
      sentence: 'Do you have _______ homework to do tonight?',
      sentenceTranslation: 'Você tem muito dever de casa para fazer hoje à noite?',
      options: [
        { id: 'a', label: 'A', text: 'many', isCorrect: false, explanation: 'Incorreto. "Homework" é incontável em inglês (nunca vai para o plural), então não aceita "many".' },
        { id: 'b', label: 'B', text: 'a lot', isCorrect: false, explanation: 'Incorreto. Falta o "of" antes do substantivo "homework".' },
        { id: 'c', label: 'C', text: 'much', isCorrect: true, explanation: 'Correto! Em perguntas (?) sobre substantivos incontáveis ("homework"), usamos "much".' },
        { id: 'd', label: 'D', text: 'lots', isCorrect: false, explanation: 'Incorreto. "Lots" sozinho sem "of" não acompanha substantivos.' },
        { id: 'e', label: 'E', text: 'many of', isCorrect: false, explanation: 'Incorreto. "Homework" é incontável e não aceita many.' }
      ],
      correctExplanation: 'Em perguntas com substantivos incontáveis (homework), usamos "much".'
    },
    {
      id: 4,
      sentence: 'There are _______ tourists in Paris during the summer.',
      sentenceTranslation: 'Há muitos turistas em Paris durante o verão.',
      options: [
        { id: 'a', label: 'A', text: 'much', isCorrect: false, explanation: 'Incorreto. "Tourists" está no plural contável (turistas), portanto não aceita "much".' },
        { id: 'b', label: 'B', text: 'a lot of', isCorrect: true, explanation: 'Correto! "A lot of" funciona perfeitamente com substantivos contáveis no plural em frases afirmativas.' },
        { id: 'c', label: 'C', text: 'a lot', isCorrect: false, explanation: 'Incorreto. "A lot" sem "of" não pode anteceder diretamente um substantivo.' },
        { id: 'd', label: 'D', text: 'much of', isCorrect: false, explanation: 'Incorreto. "Much" não é usado com plurais contáveis.' },
        { id: 'e', label: 'E', text: 'lots', isCorrect: false, explanation: 'Incorreto. Falta o "of" ("lots of tourists").' }
      ],
      correctExplanation: '"A lot of" combina com contáveis no plural em frases afirmativas.'
    },
    {
      id: 5,
      sentence: 'We don\'t have _______ sugar left to bake the pie.',
      sentenceTranslation: 'Nós não temos muito açúcar sobrando para assar a torta.',
      options: [
        { id: 'a', label: 'A', text: 'many', isCorrect: false, explanation: 'Incorreto. Açúcar ("sugar") é incontável, logo não se usa "many".' },
        { id: 'b', label: 'B', text: 'much', isCorrect: true, explanation: 'Correto! Frase negativa (-) com incontável ("sugar") pede "much".' },
        { id: 'c', label: 'C', text: 'a lot', isCorrect: false, explanation: 'Incorreto. Sem a preposição "of", "a lot" não qualifica substantivos.' },
        { id: 'd', label: 'D', text: 'lots', isCorrect: false, explanation: 'Incorreto. Falta a preposição "of".' },
        { id: 'e', label: 'E', text: 'many of', isCorrect: false, explanation: 'Incorreto. "Sugar" é incontável.' }
      ],
      correctExplanation: 'Para coisas incontáveis em orações negativas (don\'t have), usamos "much".'
    },
    {
      id: 6,
      sentence: 'He made _______ new friends at the language club.',
      sentenceTranslation: 'Ele fez muitos amigos novos no clube de idiomas.',
      options: [
        { id: 'a', label: 'A', text: 'much', isCorrect: false, explanation: 'Incorreto. "Friends" é contável e está no plural, não se usa "much".' },
        { id: 'b', label: 'B', text: 'a lot of', isCorrect: true, explanation: 'Correto! "A lot of new friends" é a forma afirmativa mais comum e natural.' },
        { id: 'c', label: 'C', text: 'a much', isCorrect: false, explanation: 'Incorreto. "A much" não existe em inglês.' },
        { id: 'd', label: 'D', text: 'a lot', isCorrect: false, explanation: 'Incorreto. Falta "of" antes de "new friends".' },
        { id: 'e', label: 'E', text: 'lots', isCorrect: false, explanation: 'Incorreto. Falta a preposição "of".' }
      ],
      correctExplanation: '"A lot of" é usado para grande quantidade com substantivos no plural.'
    },
    {
      id: 7,
      sentence: 'How _______ milk do we need for the pancake recipe?',
      sentenceTranslation: 'Quanto leite nós precisamos para a receita de panqueca?',
      options: [
        { id: 'a', label: 'A', text: 'many', isCorrect: false, explanation: 'Incorreto. "How many" é para contáveis (quantos ovos, quantas maçãs).' },
        { id: 'b', label: 'B', text: 'much', isCorrect: true, explanation: 'Correto! A pergunta para saber a quantidade de algo incontável (leite) é "How much".' },
        { id: 'c', label: 'C', text: 'a lot of', isCorrect: false, explanation: 'Incorreto. Para iniciar a pergunta de quantidade dizemos "How much", não "How a lot of".' },
        { id: 'd', label: 'D', text: 'lots', isCorrect: false, explanation: 'Incorreto. "How lots" não existe.' },
        { id: 'e', label: 'E', text: 'a lot', isCorrect: false, explanation: 'Incorreto. "How a lot" não faz sentido gramatical.' }
      ],
      correctExplanation: 'Para perguntar "quanto/quanta" de itens líquidos/incontáveis usamos "How much".'
    },
    {
      id: 8,
      sentence: 'My grandfather has _______ great stories from his youth.',
      sentenceTranslation: 'Meu avô tem muitas histórias ótimas da sua juventude.',
      options: [
        { id: 'a', label: 'A', text: 'much', isCorrect: false, explanation: 'Incorreto. "Stories" é substantivo contável no plural, não se usa "much".' },
        { id: 'b', label: 'B', text: 'a lot of', isCorrect: true, explanation: 'Correto! Em frases afirmativas, "a lot of" soa perfeitamente natural com contáveis.' },
        { id: 'c', label: 'C', text: 'a lot', isCorrect: false, explanation: 'Incorreto. Falta o "of" antes de "great stories".' },
        { id: 'd', label: 'D', text: 'much of', isCorrect: false, explanation: 'Incorreto. "Much of" não se usa com substantivo plural simples.' },
        { id: 'e', label: 'E', text: 'lots', isCorrect: false, explanation: 'Incorreto. Falta "of" para conectar com o substantivo.' }
      ],
      correctExplanation: 'Substantivo plural contável em oração afirmativa pede "a lot of" (ou "many").'
    },
    {
      id: 9,
      sentence: 'There isn\'t _______ noise in the library, it is very peaceful.',
      sentenceTranslation: 'Não há muito barulho na biblioteca, é muito tranquilo.',
      options: [
        { id: 'a', label: 'A', text: 'many', isCorrect: false, explanation: 'Incorreto. "Noise" aqui é incontável (barulho no sentido geral).' },
        { id: 'b', label: 'B', text: 'much', isCorrect: true, explanation: 'Correto! Frase negativa ("isn\'t") com substantivo incontável ("noise") pede "much".' },
        { id: 'c', label: 'C', text: 'a lot', isCorrect: false, explanation: 'Incorreto. Sem a preposição "of", não pode acompanhar o substantivo "noise".' },
        { id: 'd', label: 'D', text: 'lots', isCorrect: false, explanation: 'Incorreto. Falta a preposição "of".' },
        { id: 'e', label: 'E', text: 'many of', isCorrect: false, explanation: 'Incorreto. "Noise" é incontável.' }
      ],
      correctExplanation: 'Frase negativa + incontável (noise) = "much".'
    },
    {
      id: 10,
      sentence: 'Lucas received _______ emails on his first day at work.',
      sentenceTranslation: 'Lucas recebeu muitos e-mails no seu primeiro dia de trabalho.',
      options: [
        { id: 'a', label: 'A', text: 'much', isCorrect: false, explanation: 'Incorreto. "Emails" é contável no plural, não se usa "much".' },
        { id: 'b', label: 'B', text: 'a lot of', isCorrect: true, explanation: 'Correto! "A lot of emails" é a expressão ideal para afirmativas no plural.' },
        { id: 'c', label: 'C', text: 'a lot', isCorrect: false, explanation: 'Incorreto. Falta a preposição "of" ("a lot of emails").' },
        { id: 'd', label: 'D', text: 'much of', isCorrect: false, explanation: 'Incorreto. Não se usa "much of" aqui.' },
        { id: 'e', label: 'E', text: 'lots', isCorrect: false, explanation: 'Incorreto. Falta o "of" ("lots of emails").' }
      ],
      correctExplanation: 'Para indicar abundância de itens contáveis em afirmativas, usamos "a lot of".'
    }
  ]
};
