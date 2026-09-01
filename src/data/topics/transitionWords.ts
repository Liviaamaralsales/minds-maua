import { GrammarTopic } from '../../types';

export const transitionWordsTopic: GrammarTopic = {
  id: 'transition-words',
  slug: 'transition-words',
  title: 'Transition Words',
  shortDescription: 'Conecte frases e ideias como um nativo usando palavras de adição, contraste, causa e conclusão.',
  level: 'A1/A2',
  iconName: 'GitBranch',
  a1Explanation: {
    quickGoldenRule: 'Palavras de transição são pontes entre frases! CONTRASTE = However (No entanto), Although (Embora). CAUSA/EFEITO = Therefore (Portanto), Because (Porque). ADIÇÃO = Furthermore / In addition (Além disso).',
    simpleConcept: 'Imagine que suas frases são blocos soltos. As "transition words" são o cimento que liga um bloco ao outro com lógica. Se você quer mostrar o lado oposto, use "However". Se quer mostrar o resultado de algo, use "Therefore" ou "So".',
    rules: [
      {
        title: '1. Contraste e Oposição (Ideias contrárias)',
        description: 'Mostram que algo inesperado ou oposto aconteceu.',
        bullets: [
          'However (No entanto / Porém): "I studied hard. However, the exam was difficult."',
          'Although / Even though (Embora): "Although it was raining, we went to the beach."',
          'On the other hand (Por outro lado): "The car is expensive. On the other hand, it is very fast."'
        ]
      },
      {
        title: '2. Causa, Efeito e Conclusão',
        description: 'Explicam o motivo de algo ou a consequência final.',
        bullets: [
          'Therefore (Portanto / Por isso): "He was late. Therefore, he missed the train."',
          'Because (Porque / Pois): "She is smiling because she passed the test."',
          'As a result (Como resultado): "He didn\'t sleep. As a result, he was tired."'
        ]
      },
      {
        title: '3. Adição e Exemplos',
        description: 'Adicionam mais informações ou dão exemplos práticos.',
        bullets: [
          'Furthermore / In addition (Além disso / Ademais): "The hotel is clean. Furthermore, it is cheap."',
          'For example / For instance (Por exemplo): "I love fruits, for example apples and bananas."'
        ]
      }
    ],
    memoryTip: 'Guia Rápido dos Conectivos: Porém / No entanto ➔ HOWEVER. Portanto / Por isso ➔ THEREFORE. Além disso ➔ FURTHERMORE / IN ADDITION. Por exemplo ➔ FOR EXAMPLE.',
    comparisonTable: {
      col1Title: 'Tipo de Conector',
      col2Title: 'Palavras-Chave e Significado',
      rows: [
        { col1: 'Contraste (Oposição)', col2: 'However (No entanto), Although (Embora)', note: 'Muda a direção do pensamento' },
        { col1: 'Causa e Efeito', col2: 'Therefore (Portanto), Because (Porque)', note: 'Mostra o motivo ou a consequência' },
        { col1: 'Adição de Ideias', col2: 'Furthermore (Além disso), In addition (Ademais)', note: 'Soma um argumento novo' },
        { col1: 'Exemplificação', col2: 'For example, For instance (Por exemplo)', note: 'Ilustra o que foi dito' }
      ]
    }
  },
  pronunciationVideo: {
    title: 'Pronúncia & Pausas: HOWEVER, ALTHOUGH & THEREFORE',
    youtubeId: 'rL4-9z_X20M',
    channelName: 'Minds Pronunciation Lab & Oxford English',
    duration: '6:00',
    description: 'Aprenda a entonação de pausas com vírgula após conectivos, o som suave de /ð/ em "Although" e a ênfase silábica em "However".',
    ipaGuides: [
      { word: 'However', ipa: '/haʊˈev.ər/', soundNote: 'Acento na 2ª sílaba "-ev-", seguido de pausa natural.' },
      { word: 'Although', ipa: '/ɔːlˈðoʊ/', soundNote: 'Som /ð/ suave conectando a vogal longa /ɔːl/ com o ditongo /oʊ/.' },
      { word: 'Therefore', ipa: '/ˈðer.fɔːr/', soundNote: 'Acento na 1ª sílaba "There", som sonoro /ð/.' },
    ],
    keyTimestamps: [
      { label: 'Pausas e ritmo de frases com conectivos', time: '0:45' },
      { label: 'Pronúncia de Although vs Though', time: '2:15' },
      { label: 'Modelos de oratórias e apresentações', time: '4:00' },
    ]
  },
  examples: [
    {
      english: 'I wanted to go out. However, it started to rain heavily.',
      portuguese: 'Eu queria sair. No entanto, começou a chover forte.',
      highlight: 'However',
      note: 'Conector de contraste seguido por vírgula.'
    },
    {
      english: 'He practiced every day; therefore, he passed his driving test.',
      portuguese: 'Ele praticou todos os dias; portanto, ele passou no exame de direção.',
      highlight: 'therefore',
      note: 'Conector de conclusão e resultado.'
    },
    {
      english: 'The course is free. Furthermore, all books are included.',
      portuguese: 'O curso é gratuito. Além disso, todos os livros estão inclusos.',
      highlight: 'Furthermore',
      note: 'Conector de adição de informação positiva.'
    },
    {
      english: 'Although he was very tired, he finished all his homework.',
      portuguese: 'Embora ele estivesse muito cansado, ele terminou toda a sua lição de casa.',
      highlight: 'Although',
      note: 'Conector de concessão no início da frase.'
    }
  ],
  quiz: [
    {
      id: 1,
      sentence: 'She studied for three weeks. _______, she got an A+ on the exam.',
      sentenceTranslation: 'Ela estudou durante três semanas. Portanto / Como resultado, ela tirou nota máxima na prova.',
      options: [
        { id: 'a', label: 'A', text: 'Therefore', isCorrect: true, explanation: 'Correto! "Therefore" expressa o resultado/consequência lógica do estudo: "Portanto / Consequentemente tirou nota máxima".' },
        { id: 'b', label: 'B', text: 'However', isCorrect: false, explanation: 'Incorreto. "However" indica contraste (porém), mas tirar nota alta após estudar é um resultado natural, não uma contradição.' },
        { id: 'c', label: 'C', text: 'Although', isCorrect: false, explanation: 'Incorreto. "Although" significa "embora" e liga duas orações na mesma frase, não uma frase solta assim com ponto.' },
        { id: 'd', label: 'D', text: 'Despite', isCorrect: false, explanation: 'Incorreto. "Despite" significa "apesar de" e pede substantivo.' },
        { id: 'e', label: 'E', text: 'Because of', isCorrect: false, explanation: 'Incorreto. "Because of" deve ser seguido diretamente por um substantivo.' }
      ],
      correctExplanation: '"Therefore" conecta uma causa ao seu resultado lógico positivo.'
    },
    {
      id: 2,
      sentence: 'I really love that jacket. _______, it is too expensive for my budget.',
      sentenceTranslation: 'Eu realmente amo aquela jaqueta. No entanto / Porém, é cara demais para o meu orçamento.',
      options: [
        { id: 'a', label: 'A', text: 'Therefore', isCorrect: false, explanation: 'Incorreto. Ser cara demais contraria o desejo de comprar, então precisamos de contraste.' },
        { id: 'b', label: 'B', text: 'Furthermore', isCorrect: false, explanation: 'Incorreto. "Furthermore" adiciona mais um ponto no mesmo sentido, não uma oposição.' },
        { id: 'c', label: 'C', text: 'However', isCorrect: true, explanation: 'Correto! "However" (No entanto / Porém) expressa perfeitamente o contraste entre amar a jaqueta e o fato de ser cara.' },
        { id: 'd', label: 'D', text: 'For example', isCorrect: false, explanation: 'Incorreto. "For example" é para dar exemplos.' },
        { id: 'e', label: 'E', text: 'Because', isCorrect: false, explanation: 'Incorreto. Não se inicia uma frase isolada com ponto seguida de vírgula com "Because".' }
      ],
      correctExplanation: '"However" é a palavra de transição perfeita para expressar oposição e contraste.'
    },
    {
      id: 3,
      sentence: 'The house has five large bedrooms. _______, it has a beautiful swimming pool.',
      sentenceTranslation: 'A casa tem cinco quartos grandes. Além disso, tem uma bela piscina.',
      options: [
        { id: 'a', label: 'A', text: 'However', isCorrect: false, explanation: 'Incorreto. A piscina é outro benefício adicional, não uma contradição com os quartos.' },
        { id: 'b', label: 'B', text: 'In addition', isCorrect: true, explanation: 'Correto! "In addition" (Além disso) é usado para somar mais uma qualidade positiva à descrição da casa.' },
        { id: 'c', label: 'C', text: 'Although', isCorrect: false, explanation: 'Incorreto. "Although" significa "embora".' },
        { id: 'd', label: 'D', text: 'Instead', isCorrect: false, explanation: 'Incorreto. "Instead" significa "em vez disso".' },
        { id: 'e', label: 'E', text: 'Unless', isCorrect: false, explanation: 'Incorreto. "Unless" significa "a não ser que / a menos que".' }
      ],
      correctExplanation: '"In addition" é utilizado para acrescentar uma informação complementar.'
    },
    {
      id: 4,
      sentence: '_______ it was raining, the children played happily in the backyard.',
      sentenceTranslation: 'Embora estivesse chovendo, as crianças brincaram alegremente no quintal.',
      options: [
        { id: 'a', label: 'A', text: 'Because', isCorrect: false, explanation: 'Incorreto. Dizer "porque estava chovendo" faria parecer que a chuva foi o motivo da alegria.' },
        { id: 'b', label: 'B', text: 'Although', isCorrect: true, explanation: 'Correto! "Although" (Embora) introduz a ideia de que a chuva não impediu as crianças de brincarem.' },
        { id: 'c', label: 'C', text: 'However', isCorrect: false, explanation: 'Incorreto. "However" não pode iniciar a oração subordinada desse jeito ligando as duas partes com vírgula.' },
        { id: 'd', label: 'D', text: 'Therefore', isCorrect: false, explanation: 'Incorreto. "Therefore" significa portanto.' },
        { id: 'e', label: 'E', text: 'In spite', isCorrect: false, explanation: 'Incorreto. Faltaria "of" ("In spite of the rain"), e não pode ser seguido por sujeito + verbo diretamente.' }
      ],
      correctExplanation: '"Although" introduz uma oração concessiva (embora estivesse chovendo).'
    },
    {
      id: 5,
      sentence: 'He enjoys many outdoor sports, _______ soccer, tennis, and basketball.',
      sentenceTranslation: 'Ele gosta de muitos esportes ao ar livre, por exemplo futebol, tênis e basquete.',
      options: [
        { id: 'a', label: 'A', text: 'for example', isCorrect: true, explanation: 'Correto! "For example" introduz a lista de esportes como exemplos concretos.' },
        { id: 'b', label: 'B', text: 'however', isCorrect: false, explanation: 'Incorreto. "However" indica oposição, não lista de exemplos.' },
        { id: 'c', label: 'C', text: 'therefore', isCorrect: false, explanation: 'Incorreto. "Therefore" indica conclusão.' },
        { id: 'd', label: 'D', text: 'furthermore', isCorrect: false, explanation: 'Incorreto. "Furthermore" adiciona uma frase inteira e não introduz itens diretos dessa forma.' },
        { id: 'e', label: 'E', text: 'although', isCorrect: false, explanation: 'Incorreto. "Although" significa embora.' }
      ],
      correctExplanation: '"For example" é a locução padrão para apresentar exemplos ilustrativos.'
    },
    {
      id: 6,
      sentence: 'The flights were cancelled _______ the severe snowstorm.',
      sentenceTranslation: 'Os voos foram cancelados por causa da forte tempestade de neve.',
      options: [
        { id: 'a', label: 'A', text: 'because of', isCorrect: true, explanation: 'Correto! "Because of" é seguido por um substantivo/frase nominal ("the severe snowstorm") para indicar o motivo.' },
        { id: 'b', label: 'B', text: 'because', isCorrect: false, explanation: 'Incorreto. "Because" precisa ser seguido por uma oração com sujeito e verbo (ex: because it was snowing).' },
        { id: 'c', label: 'C', text: 'however', isCorrect: false, explanation: 'Incorreto. "However" significa porém.' },
        { id: 'd', label: 'D', text: 'although', isCorrect: false, explanation: 'Incorreto. "Although" significa embora e exige verbo.' },
        { id: 'e', label: 'E', text: 'in order to', isCorrect: false, explanation: 'Incorreto. "In order to" indica finalidade com verbo (a fim de).' }
      ],
      correctExplanation: '"Because of" é seguido diretamente por um substantivo para explicar a causa.'
    },
    {
      id: 7,
      sentence: 'The laptop is lightweight and powerful. _______, its battery lasts over 15 hours.',
      sentenceTranslation: 'O notebook é leve e potente. Além disso / Ademais, sua bateria dura mais de 15 horas.',
      options: [
        { id: 'a', label: 'A', text: 'Furthermore', isCorrect: true, explanation: 'Correto! "Furthermore" (Além disso) acrescenta um argumento positivo extra para enriquecer o texto.' },
        { id: 'b', label: 'B', text: 'On the contrary', isCorrect: false, explanation: 'Incorreto. "On the contrary" é usado para negar o que foi dito antes.' },
        { id: 'c', label: 'C', text: 'However', isCorrect: false, explanation: 'Incorreto. A longa duração da bateria é uma vantagem, não uma desvantagem.' },
        { id: 'd', label: 'D', text: 'Even though', isCorrect: false, explanation: 'Incorreto. "Even though" significa mesmo que / embora.' },
        { id: 'e', label: 'E', text: 'Nevertheless', isCorrect: false, explanation: 'Incorreto. "Nevertheless" indica contraste (não obstante).' }
      ],
      correctExplanation: '"Furthermore" é excelente para adicionar uma nova vantagem ao argumento.'
    },
    {
      id: 8,
      sentence: 'City life is exciting. _______, country life is peaceful and relaxing.',
      sentenceTranslation: 'A vida na cidade é empolgante. Por outro lado, a vida no campo é pacífica e relaxante.',
      options: [
        { id: 'a', label: 'A', text: 'On the other hand', isCorrect: true, explanation: 'Correto! "On the other hand" (Por outro lado) compara duas realidades diferentes de forma balanceada.' },
        { id: 'b', label: 'B', text: 'Because of', isCorrect: false, explanation: 'Incorreto. Incompatível com a pontuação e sentido.' },
        { id: 'c', label: 'C', text: 'For example', isCorrect: false, explanation: 'Incorreto. O campo não é um exemplo de vida urbana.' },
        { id: 'd', label: 'D', text: 'Therefore', isCorrect: false, explanation: 'Incorreto. A paz do campo não é consequência da agitação da cidade.' },
        { id: 'e', label: 'E', text: 'Since', isCorrect: false, explanation: 'Incorreto. "Since" significa já que / desde.' }
      ],
      correctExplanation: '"On the other hand" é o conector ideal para apresentar o outro lado de uma moeda.'
    },
    {
      id: 9,
      sentence: 'I didn\'t set my alarm clock last night. _______, I woke up late this morning.',
      sentenceTranslation: 'Eu não programei meu despertador ontem à noite. Como resultado / Por isso, acordei tarde hoje de manhã.',
      options: [
        { id: 'a', label: 'A', text: 'As a result', isCorrect: true, explanation: 'Correto! "As a result" (Como resultado / Consequentemente) liga a causa (não despertar) ao efeito (acordar tarde).' },
        { id: 'b', label: 'B', text: 'Although', isCorrect: false, explanation: 'Incorreto. "Although" significa embora.' },
        { id: 'c', label: 'C', text: 'In spite of', isCorrect: false, explanation: 'Incorreto. Falta substantivo e não cabe com ponto e vírgula.' },
        { id: 'd', label: 'D', text: 'Besides', isCorrect: false, explanation: 'Incorreto. "Besides" significa além do mais.' },
        { id: 'e', label: 'E', text: 'Meanwhile', isCorrect: false, explanation: 'Incorreto. "Meanwhile" significa enquanto isso (tempo).' }
      ],
      correctExplanation: '"As a result" indica claramente o efeito decorrente de uma ação anterior.'
    },
    {
      id: 10,
      sentence: 'We will go for a picnic on Saturday _______ it rains.',
      sentenceTranslation: 'Nós iremos a um piquenique no sábado a não ser que / a menos que chova.',
      options: [
        { id: 'a', label: 'A', text: 'unless', isCorrect: true, explanation: 'Correto! "Unless" significa "a não ser que / a menos que" (if it doesn\'t rain).' },
        { id: 'b', label: 'B', text: 'however', isCorrect: false, explanation: 'Incorreto. "However" não atua como conjunção condicional no meio da frase.' },
        { id: 'c', label: 'C', text: 'furthermore', isCorrect: false, explanation: 'Incorreto. "Furthermore" significa além disso.' },
        { id: 'd', label: 'D', text: 'therefore', isCorrect: false, explanation: 'Incorreto. "Therefore" significa portanto.' },
        { id: 'e', label: 'E', text: 'instead of', isCorrect: false, explanation: 'Incorreto. "Instead of" exige substantivo ou verbo com -ing.' }
      ],
      correctExplanation: '"Unless" introduz uma condição negativa ("a menos que chova").'
    }
  ]
};
