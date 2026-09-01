import { GrammarTopic } from '../../types';

export const presentlyCurrentlyActuallyTopic: GrammarTopic = {
  id: 'presently-currently-actually',
  slug: 'presently-x-currently-x-actually',
  title: 'Presently x Currently x Actually',
  shortDescription: 'Cuidado com o maior falso cognato do inglês! Aprenda o uso exato de cada termo.',
  level: 'A1 - Básico',
  iconName: 'Clock',
  a1Explanation: {
    quickGoldenRule: 'ACTUALLY = "Na verdade / Realmente" (NÃO é atualmente!). CURRENTLY = "Atualmente / Neste momento". PRESENTLY = "Em breve / Logo mais".',
    simpleConcept: 'A maior pegadinha para brasileiros: "Actually" parece "atualmente", mas significa "na verdade"! Se você quer dizer o que faz hoje em dia na sua vida, a palavra certa é "CURRENTLY".',
    rules: [
      {
        title: '1. ACTUALLY (Falso Amigo / Falso Cognato)',
        description: 'Significa "na verdade", "de fato" ou "realmente". Usamos para corrigir uma informação ou enfatizar um fato surpreendente.',
        bullets: [
          '"Actually, my name is John, not James." (Na verdade, meu nome é John).',
          '"I actually love spicy food!" (Eu realmente amo comida apimentada!).',
          'NUNCA use actually para dizer "nos dias de hoje"!'
        ]
      },
      {
        title: '2. CURRENTLY (O verdadeiro "Atualmente")',
        description: 'Significa "atualmente", "no momento presente", "hoje em dia".',
        bullets: [
          '"I am currently living in São Paulo." (Atualmente estou morando em São Paulo).',
          '"She is currently working on a new project." (Ela está atualmente trabalhando em um novo projeto).',
          'Dica: Troque mentalmente por "at the moment" ou "right now".'
        ]
      },
      {
        title: '3. PRESENTLY ("Em breve" / "Logo mais")',
        description: 'No inglês do dia a dia, significa "soon" (em breve / daqui a pouco / dentro de instantes).',
        bullets: [
          '"Please wait here, the doctor will see you presently." (Por favor espere aqui, o médico vai atendê-lo em breve).',
          '"Dinner will be served presently." (O jantar será servido logo mais).'
        ]
      }
    ],
    memoryTip: 'Lembre-se sempre: Actually NÃO é atualmente (Actually = Na verdade). Currently = Atualmente (Right now). Presently = Em breve (Soon).',
    comparisonTable: {
      col1Title: 'Palavra em Inglês',
      col2Title: 'Significado Real e Exemplo',
      rows: [
        { col1: 'Actually', col2: '"Na verdade" ➔ "Actually, I am 25 years old."', note: 'Corrige ou reforça uma verdade.' },
        { col1: 'Currently', col2: '"Atualmente" ➔ "He is currently unemployed."', note: 'Situação no tempo presente.' },
        { col1: 'Presently', col2: '"Em breve / Logo" ➔ "She will arrive presently."', note: 'Ação que acontecerá em instantes.' }
      ]
    }
  },
  pronunciationVideo: {
    title: 'Pronúncia: ACTUALLY, CURRENTLY & Falsos Cognatos',
    youtubeId: 'XG8X4_z4b8g',
    channelName: 'Minds Pronunciation Lab & Rachel\'s English',
    duration: '7:10',
    description: 'Evite o erro comum dos brasileiros ao pronunciar "Actually" (/ˈæk.tʃu.ə.li/) e aprenda a pronúncia do "tʃ" sem soar artificial.',
    ipaGuides: [
      { word: 'Actually', ipa: '/ˈæk.tʃu.ə.li/', soundNote: 'O som "ct" produz um "tʃ" suave e a terminação "-ly" é átona.' },
      { word: 'Currently', ipa: '/ˈkɜːr.ənt.li/', soundNote: 'O som inicial é /kɜːr/ com o "r" americano bem posicionado no céu da boca.' },
      { word: 'Presently', ipa: '/ˈprez.ənt.li/', soundNote: 'O "s" tem som de "z" vibrante /z/.' },
    ],
    keyTimestamps: [
      { label: 'Como pronunciar "Actually" corretamente', time: '0:55' },
      { label: 'O fonema /kɜːr/ em Currently', time: '2:40' },
      { label: 'Entonação de advérbios de início de frase', time: '4:20' },
    ]
  },
  examples: [
    {
      english: 'Actually, I don\'t drink coffee; I prefer green tea.',
      portuguese: 'Na verdade, eu não bebo café; eu prefiro chá verde.',
      highlight: 'Actually',
      note: 'Usado para esclarecer ou corrigir ("na verdade").'
    },
    {
      english: 'She is currently studying for her English exam.',
      portuguese: 'Ela está atualmente estudando para o seu exame de inglês.',
      highlight: 'currently studying',
      note: 'Ação que está ocorrendo no período presente ("atualmente").'
    },
    {
      english: 'Please take a seat; Mr. Davis will be with you presently.',
      portuguese: 'Por favor sente-se; o Sr. Davis estará com você em breve.',
      highlight: 'presently',
      note: 'Significa "daqui a pouco / em breve".'
    },
    {
      english: 'People think he is French, but he is actually Canadian.',
      portuguese: 'As pessoas acham que ele é francês, mas ele é na verdade canadense.',
      highlight: 'actually Canadian',
      note: 'Revelando a verdade de um fato.'
    }
  ],
  quiz: [
    {
      id: 1,
      sentence: 'I thought the test was tomorrow, but _______ it is next week.',
      sentenceTranslation: 'Eu pensei que a prova era amanhã, mas na verdade é na semana que vem.',
      options: [
        { id: 'a', label: 'A', text: 'currently', isCorrect: false, explanation: 'Incorreto. "Currently" significa "atualmente no tempo presente", não "na verdade".' },
        { id: 'b', label: 'B', text: 'actually', isCorrect: true, explanation: 'Correto! "Actually" significa "na verdade / de fato", perfeito para retificar uma informação.' },
        { id: 'c', label: 'C', text: 'presently', isCorrect: false, explanation: 'Incorreto. "Presently" significa "em breve / logo mais".' },
        { id: 'd', label: 'D', text: 'nowadays', isCorrect: false, explanation: 'Incorreto. "Nowadays" significa "hoje em dia".' },
        { id: 'e', label: 'E', text: 'timely', isCorrect: false, explanation: 'Incorreto. "Timely" significa pontual/oportuno.' }
      ],
      correctExplanation: 'Usamos "actually" quando queremos dizer "na verdade" para corrigir uma suposição.'
    },
    {
      id: 2,
      sentence: 'Our company is _______ hiring ten new software developers.',
      sentenceTranslation: 'Nossa empresa está atualmente contratando dez novos desenvolvedores de software.',
      options: [
        { id: 'a', label: 'A', text: 'actually', isCorrect: false, explanation: 'Incorreto. "Actually" significa "na verdade", o que mudaria o sentido da frase.' },
        { id: 'b', label: 'B', text: 'currently', isCorrect: true, explanation: 'Correto! "Currently" é a palavra perfeita para expressar o que está acontecendo "atualmente / no momento presente".' },
        { id: 'c', label: 'C', text: 'actual', isCorrect: false, explanation: 'Incorreto. "Actual" é um adjetivo que significa "real/verdadeiro".' },
        { id: 'd', label: 'D', text: 'truthfully', isCorrect: false, explanation: 'Incorreto. "Truthfully" significa com sinceridade.' },
        { id: 'e', label: 'E', text: 'hardly', isCorrect: false, explanation: 'Incorreto. "Hardly" significa quase nunca / malmente.' }
      ],
      correctExplanation: 'Para indicar uma situação que ocorre "atualmente", o termo correto em inglês é "currently".'
    },
    {
      id: 3,
      sentence: 'Have a seat in the waiting room; the manager will join you _______.',
      sentenceTranslation: 'Sente-se na sala de espera; o gerente se juntará a você em breve.',
      options: [
        { id: 'a', label: 'A', text: 'presently', isCorrect: true, explanation: 'Correto! "Presently" é comumente usado para dizer que algo vai acontecer "em breve / dentro de instantes".' },
        { id: 'b', label: 'B', text: 'actually', isCorrect: false, explanation: 'Incorreto. "Actually" significa "na verdade".' },
        { id: 'c', label: 'C', text: 'currently', isCorrect: false, explanation: 'Incorreto. "Currently" é para o momento presente, mas a frase indica uma ação futura que acontecerá em instantes.' },
        { id: 'd', label: 'D', text: 'actual', isCorrect: false, explanation: 'Incorreto. "Actual" é adjetivo (real).' },
        { id: 'e', label: 'E', text: 'current', isCorrect: false, explanation: 'Incorreto. "Current" é adjetivo (atual).' }
      ],
      correctExplanation: '"Presently" indica que algo acontecerá logo em seguida / em breve (soon).'
    },
    {
      id: 4,
      sentence: 'People think I am from Spain, but _______ I was born in Brazil.',
      sentenceTranslation: 'As pessoas pensam que sou da Espanha, mas na verdade nasci no Brasil.',
      options: [
        { id: 'a', label: 'A', text: 'currently', isCorrect: false, explanation: 'Incorreto. "Currently" é "atualmente", não cabe para contradizer um mito sobre o nascimento.' },
        { id: 'b', label: 'B', text: 'nowadays', isCorrect: false, explanation: 'Incorreto. "Nowadays" significa "hoje em dia".' },
        { id: 'c', label: 'C', text: 'actually', isCorrect: true, explanation: 'Correto! "Actually" expressa a realidade dos fatos: "na verdade nasci no Brasil".' },
        { id: 'd', label: 'D', text: 'presently', isCorrect: false, explanation: 'Incorreto. "Presently" é "em breve".' },
        { id: 'e', label: 'E', text: 'lately', isCorrect: false, explanation: 'Incorreto. "Lately" significa ultimamente.' }
      ],
      correctExplanation: '"Actually" é o equivalente em inglês para "na verdade / de fato".'
    },
    {
      id: 5,
      sentence: 'She is _______ reading the third book of the Harry Potter series.',
      sentenceTranslation: 'Ela está atualmente lendo o terceiro livro da série Harry Potter.',
      options: [
        { id: 'a', label: 'A', text: 'currently', isCorrect: true, explanation: 'Correto! Indica o que ela está fazendo no período atual (at the moment / currently).' },
        { id: 'b', label: 'B', text: 'actually', isCorrect: false, explanation: 'Incorreto. "Actually" significaria "na verdade".' },
        { id: 'c', label: 'C', text: 'eventually', isCorrect: false, explanation: 'Incorreto. "Eventually" significa com o tempo / no final das contas.' },
        { id: 'd', label: 'D', text: 'present', isCorrect: false, explanation: 'Incorreto. "Present" é adjetivo/substantivo, aqui precisamos de um advérbio.' },
        { id: 'e', label: 'E', text: 'rarely', isCorrect: false, explanation: 'Incorreto. "Rarely" significa raramente.' }
      ],
      correctExplanation: '"Currently" descreve uma ação que está em andamento no presente momento.'
    },
    {
      id: 6,
      sentence: 'Did you know that tomatoes are _______ fruits, not vegetables?',
      sentenceTranslation: 'Você sabia que tomates são na verdade frutas, e não vegetais?',
      options: [
        { id: 'a', label: 'A', text: 'currently', isCorrect: false, explanation: 'Incorreto. O tomate não virou fruta temporariamente hoje em dia!' },
        { id: 'b', label: 'B', text: 'actually', isCorrect: true, explanation: 'Correto! "Actually" revela um fato real e surpreendente: "são na verdade frutas".' },
        { id: 'c', label: 'C', text: 'presently', isCorrect: false, explanation: 'Incorreto. "Presently" significa em breve.' },
        { id: 'd', label: 'D', text: 'momentarily', isCorrect: false, explanation: 'Incorreto. "Momentarily" é por um momento.' },
        { id: 'e', label: 'E', text: 'mostly', isCorrect: false, explanation: 'Incorreto. "Mostly" significa na sua maioria.' }
      ],
      correctExplanation: '"Actually" é usado para expor a verdade biológica ou real sobre algo.'
    },
    {
      id: 7,
      sentence: 'I am _______ living in London, but I will move to New York next month.',
      sentenceTranslation: 'Eu estou atualmente morando em Londres, mas vou me mudar para Nova York mês que vem.',
      options: [
        { id: 'a', label: 'A', text: 'actually', isCorrect: false, explanation: 'Incorreto. Não estamos corrigindo uma mentira, mas sim indicando onde moro neste momento.' },
        { id: 'b', label: 'B', text: 'currently', isCorrect: true, explanation: 'Correto! "Currently living" indica moradia atual no momento presente.' },
        { id: 'c', label: 'C', text: 'presently', isCorrect: false, explanation: 'Incorreto. "Presently" é para ações que ocorrerão em breve.' },
        { id: 'd', label: 'D', text: 'factually', isCorrect: false, explanation: 'Incorreto. "Factually" não é natural nesta posição de tempo.' },
        { id: 'e', label: 'E', text: 'seldom', isCorrect: false, explanation: 'Incorreto. "Seldom" significa quase nunca.' }
      ],
      correctExplanation: 'Para indicar a residência ou atividade no presente momento, usamos "currently".'
    },
    {
      id: 8,
      sentence: 'The train will arrive _______, so please prepare your tickets.',
      sentenceTranslation: 'O trem chegará em breve, então por favor preparem suas passagens.',
      options: [
        { id: 'a', label: 'A', text: 'presently', isCorrect: true, explanation: 'Correto! "Presently" expressa que o trem chegará dentro de pouco tempo (soon).' },
        { id: 'b', label: 'B', text: 'actually', isCorrect: false, explanation: 'Incorreto. "Actually" significa na verdade.' },
        { id: 'c', label: 'C', text: 'currently', isCorrect: false, explanation: 'Incorreto. "Currently" não se aplica com o verbo no futuro "will arrive".' },
        { id: 'd', label: 'D', text: 'lately', isCorrect: false, explanation: 'Incorreto. "Lately" significa ultimamente.' },
        { id: 'e', label: 'E', text: 'already', isCorrect: false, explanation: 'Incorreto. "Already" é já, e não combina com o futuro "will arrive".' }
      ],
      correctExplanation: '"Presently" é usado para eventos que vão se concretizar em breve.'
    },
    {
      id: 9,
      sentence: 'A: "You must be very tired!" B: "_______, I feel completely energized!"',
      sentenceTranslation: 'A: "Você deve estar muito cansado!" B: "Na verdade, eu me sinto totalmente energizado!"',
      options: [
        { id: 'a', label: 'A', text: 'Currently', isCorrect: false, explanation: 'Incorreto. "Currently" significa atualmente, o que não responderia à surpresa de A.' },
        { id: 'b', label: 'B', text: 'Presently', isCorrect: false, explanation: 'Incorreto. "Presently" significa em breve.' },
        { id: 'c', label: 'C', text: 'Actually', isCorrect: true, explanation: 'Correto! B usa "Actually" para dizer "Na verdade não estou cansado, sinto-me com energia!".' },
        { id: 'd', label: 'D', text: 'Daily', isCorrect: false, explanation: 'Incorreto. "Daily" significa diariamente.' },
        { id: 'e', label: 'E', text: 'Hardly', isCorrect: false, explanation: 'Incorreto. "Hardly" significa mal/dificilmente.' }
      ],
      correctExplanation: '"Actually" introduz uma resposta sincera que contraria o que o interlocutor supôs.'
    },
    {
      id: 10,
      sentence: 'What is your _______ job position at the company?',
      sentenceTranslation: 'Qual é o seu cargo atual na empresa?',
      options: [
        { id: 'a', label: 'A', text: 'actual', isCorrect: false, explanation: 'Incorreto. "Actual" significa real/verdadeiro, não "atual".' },
        { id: 'b', label: 'B', text: 'currently', isCorrect: false, explanation: 'Incorreto. "Currently" é um advérbio. Antes do substantivo "job position", precisamos do adjetivo "current".' },
        { id: 'c', label: 'C', text: 'current', isCorrect: true, explanation: 'Correto! "Current" é o adjetivo para "atual" (current job, current address).' },
        { id: 'd', label: 'D', text: 'presently', isCorrect: false, explanation: 'Incorreto. "Presently" é um advérbio que significa em breve.' },
        { id: 'e', label: 'E', text: 'actualized', isCorrect: false, explanation: 'Incorreto. "Actualized" significa concretizado.' }
      ],
      correctExplanation: 'O adjetivo para "atual" é "current" (enquanto "currently" é o advérbio "atualmente").'
    }
  ]
};
