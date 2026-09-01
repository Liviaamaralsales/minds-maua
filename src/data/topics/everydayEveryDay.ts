import { GrammarTopic } from '../../types';

export const everydayEveryDayTopic: GrammarTopic = {
  id: 'everyday-every-day',
  slug: 'everyday-x-every-day',
  title: 'Everyday x Every day',
  shortDescription: 'Uma palavra junta é adjetivo (comum/do dia a dia); duas palavras separadas significa "todo dia".',
  level: 'A1 - Básico',
  iconName: 'Calendar',
  a1Explanation: {
    quickGoldenRule: 'EVERYDAY (junto) = Adjetivo que significa "comum / casual" (fica antes de um nome: everyday shoes). EVERY DAY (separado) = "Todo dia / Diariamente" (frequência de tempo: I run every day).',
    simpleConcept: 'O truque do "cada dia": Se você puder trocar por "each day" (cada dia), escreva separado: "EVERY DAY". Se estiver qualificando um objeto ("roupas do dia a dia"), escreva junto: "EVERYDAY".',
    rules: [
      {
        title: '1. EVERYDAY (Uma palavra só = Adjetivo)',
        description: 'Funciona como adjetivo para descrever coisas normais, comuns e rotineiras. Vem SEMPRE colado antes de um substantivo.',
        bullets: [
          '"These are my everyday shoes." (Estes são meus sapatos do dia a dia).',
          '"Stress is part of everyday life." (O estresse faz parte da vida cotidiana).',
          '"Everyday English" (Inglês do dia a dia).'
        ]
      },
      {
        title: '2. EVERY DAY (Duas palavras separadas = Advérbio de Frequência)',
        description: 'Significa "todos os dias", "diariamente", "cada dia". Responde à pergunta: "Com que frequência você faz isso?".',
        bullets: [
          '"I study English every day." (Eu estudo inglês todos os dias).',
          '"She brushes her teeth every day." (Ela escova os dentes todo dia).',
          'Dica: Fica quase sempre no finalzinho da frase!'
        ]
      }
    ],
    memoryTip: 'Teste Mental do Espaço: Se você pode substituir por "each day", use separado: "EVERY DAY" (Todo dia). Se qualifica um objeto como comum/casual, use junto: "EVERYDAY" (Do dia a dia).',
    comparisonTable: {
      col1Title: 'EVERYDAY (Junto - Adjetivo)',
      col2Title: 'EVERY DAY (Separado - Frequência)',
      rows: [
        { col1: 'everyday clothes (roupas casuais)', col2: 'I wash clothes every day. (Lavo todo dia)', note: 'Junto antes do nome; separado no fim' },
        { col1: 'everyday routine (rotina diária)', col2: 'I wake up at 7 AM every day.', note: 'Everyday qualifica; every day indica tempo' },
        { col1: 'everyday problems (problemas comuns)', col2: 'We practice every day.', note: 'Everyday = normal; every day = cada dia' }
      ]
    }
  },
  pronunciationVideo: {
    title: 'Pronúncia & Entonação: EVERYDAY vs EVERY DAY',
    youtubeId: '5b8G7t_y9z8',
    channelName: 'Minds Pronunciation Lab & Oxford English',
    duration: '4:50',
    description: 'Descubra como a ênfase silábica muda completamente o significado: "EV-eryday" (adjetivo) vs "every DAY" (tempo/frequência).',
    ipaGuides: [
      { word: 'Everyday (junto)', ipa: '/ˈev.ri.deɪ/', soundNote: 'Acento forte na 1ª sílaba "EV", a palavra flui junta como um bloco.' },
      { word: 'Every day (separado)', ipa: '/ˌev.ri ˈdeɪ/', soundNote: 'Acento principal na 2ª palavra "DAY", com micro-pausa intermediária.' },
    ],
    keyTimestamps: [
      { label: 'Acento tônico no adjetivo', time: '0:35' },
      { label: 'Ênfase em "DAY" para frequência', time: '1:40' },
      { label: 'Exercícios práticos de repetição', time: '3:00' },
    ]
  },
  examples: [
    {
      english: 'I drink two liters of water every day.',
      portuguese: 'Eu bebo dois litros de água todos os dias.',
      highlight: 'every day',
      note: 'Frequência de tempo (duas palavras separadas).'
    },
    {
      english: 'Jeans and sneakers are my everyday clothes.',
      portuguese: 'Calça jeans e tênis são minhas roupas do dia a dia.',
      highlight: 'everyday clothes',
      note: 'Adjetivo qualificando "clothes" (uma palavra junta).'
    },
    {
      english: 'He practices the guitar every day for thirty minutes.',
      portuguese: 'Ele pratica violão todo dia durante trinta minutos.',
      highlight: 'practices ... every day',
      note: 'Ação repetida diariamente.'
    },
    {
      english: 'Learning everyday vocabulary will help you communicate easily.',
      portuguese: 'Aprender vocabulário do dia a dia vai te ajudar a se comunicar facilmente.',
      highlight: 'everyday vocabulary',
      note: 'Adjetivo qualificando o vocabulário.'
    }
  ],
  quiz: [
    {
      id: 1,
      sentence: 'I practice speaking English _______ to improve my fluency.',
      sentenceTranslation: 'Eu pratico falar inglês todos os dias para melhorar minha fluência.',
      options: [
        { id: 'a', label: 'A', text: 'everyday', isCorrect: false, explanation: 'Incorreto. "Everyday" (junto) é um adjetivo para qualificar nomes (ex: everyday shoes). Aqui estamos indicando frequência de tempo, logo deve ser separado.' },
        { id: 'b', label: 'B', text: 'every day', isCorrect: true, explanation: 'Correto! "Every day" (duas palavras separadas) significa "todos os dias" / "diariamente".' },
        { id: 'c', label: 'C', text: 'all days', isCorrect: false, explanation: 'Incorreto. "All days" é tradução literal do português; em inglês natural dizemos "every day".' },
        { id: 'd', label: 'D', text: 'each of days', isCorrect: false, explanation: 'Incorreto. Estrutura não utilizada em inglês.' },
        { id: 'e', label: 'E', text: 'everydays', isCorrect: false, explanation: 'Incorreto. Não existe "everydays" no plural.' }
      ],
      correctExplanation: 'Para indicar a frequência com que fazemos uma ação ("diariamente"), usamos "every day" separado.'
    },
    {
      id: 2,
      sentence: 'Smartphones are now part of _______ life for millions of people.',
      sentenceTranslation: 'Os smartphones agora fazem parte da vida cotidiana de milhões de pessoas.',
      options: [
        { id: 'a', label: 'A', text: 'every day', isCorrect: false, explanation: 'Incorreto. "Every day" (separado) é advérbio de tempo. Antes do substantivo "life", precisamos do adjetivo junto.' },
        { id: 'b', label: 'B', text: 'everyday', isCorrect: true, explanation: 'Correto! "Everyday" (junto) funciona como adjetivo e qualifica o substantivo "life" (vida cotidiana / do dia a dia).' },
        { id: 'c', label: 'C', text: 'every-days', isCorrect: false, explanation: 'Incorreto. Essa forma com hífen e plural não existe.' },
        { id: 'd', label: 'D', text: 'daily day', isCorrect: false, explanation: 'Incorreto. Redundante e incorreto.' },
        { id: 'e', label: 'E', text: 'everday', isCorrect: false, explanation: 'Incorreto. Erro de grafia.' }
      ],
      correctExplanation: 'Quando a palavra vem antes de um substantivo (life) para significar "cotidiano", usa-se "everyday" (junto).'
    },
    {
      id: 3,
      sentence: 'She goes for a walk in the park _______ with her dog.',
      sentenceTranslation: 'Ela vai passear no parque todo dia com o cachorro dela.',
      options: [
        { id: 'a', label: 'A', text: 'every day', isCorrect: true, explanation: 'Correto! Indica a frequência temporal da caminhada ("a cada dia / todo dia"), portanto duas palavras separadas.' },
        { id: 'b', label: 'B', text: 'everyday', isCorrect: false, explanation: 'Incorreto. "Everyday" junto só pode vir antes de um substantivo (ex: everyday shoes).' },
        { id: 'c', label: 'C', text: 'all the day', isCorrect: false, explanation: 'Incorreto. "All the day" significa o dia todo continuamente, não todo dia repetido.' },
        { id: 'd', label: 'D', text: 'everydays', isCorrect: false, explanation: 'Incorreto. Não existe essa palavra.' },
        { id: 'e', label: 'E', text: 'day every', isCorrect: false, explanation: 'Incorreto. Ordem invertida incorreta.' }
      ],
      correctExplanation: 'Indicação de rotina diária no fim da oração é sempre "every day" (separado).'
    },
    {
      id: 4,
      sentence: 'You do not need to wear a suit; just wear your _______ clothes.',
      sentenceTranslation: 'Você não precisa usar terno; apenas use suas roupas do dia a dia.',
      options: [
        { id: 'a', label: 'A', text: 'every day', isCorrect: false, explanation: 'Incorreto. Não se usa a forma separada como adjetivo antes de "clothes".' },
        { id: 'b', label: 'B', text: 'everyday', isCorrect: true, explanation: 'Correto! "Everyday clothes" significa "roupas comuns / do dia a dia / casuais".' },
        { id: 'c', label: 'C', text: 'all days', isCorrect: false, explanation: 'Incorreto. "All days clothes" não existe.' },
        { id: 'd', label: 'D', text: 'ever day', isCorrect: false, explanation: 'Incorreto. Grafia errada.' },
        { id: 'e', label: 'E', text: 'day by day', isCorrect: false, explanation: 'Incorreto. "Day by day" significa dia após dia / gradualmente.' }
      ],
      correctExplanation: '"Everyday" junto funciona como adjetivo caracterizando o tipo de roupas (everyday clothes).'
    },
    {
      id: 5,
      sentence: 'The English teacher told us to read five pages _______ before bed.',
      sentenceTranslation: 'O professor de inglês nos disse para ler cinco páginas todos os dias antes de dormir.',
      options: [
        { id: 'a', label: 'A', text: 'every day', isCorrect: true, explanation: 'Correto! Refere-se à frequência da leitura (cada dia), logo duas palavras separadas.' },
        { id: 'b', label: 'B', text: 'everyday', isCorrect: false, explanation: 'Incorreto. "Everyday" junto é adjetivo e não advérbio de frequência.' },
        { id: 'c', label: 'C', text: 'all daily', isCorrect: false, explanation: 'Incorreto. Combinação errada.' },
        { id: 'd', label: 'D', text: 'day all', isCorrect: false, explanation: 'Incorreto. Não faz sentido em inglês.' },
        { id: 'e', label: 'E', text: 'everying day', isCorrect: false, explanation: 'Incorreto. Palavra inexistente.' }
      ],
      correctExplanation: 'Para indicar a periodicidade de uma tarefa (ler todo dia), usa-se "every day".'
    },
    {
      id: 6,
      sentence: 'Cooking dinner is an _______ activity in our home.',
      sentenceTranslation: 'Cozinhar o jantar é uma atividade rotineira / do dia a dia em nossa casa.',
      options: [
        { id: 'a', label: 'A', text: 'every day', isCorrect: false, explanation: 'Incorreto. Faltaria concordância e forma adjetiva antes de "activity".' },
        { id: 'b', label: 'B', text: 'everyday', isCorrect: true, explanation: 'Correto! "An everyday activity" (uma atividade cotidiana/rotineira) usa o adjetivo junto.' },
        { id: 'c', label: 'C', text: 'everydays', isCorrect: false, explanation: 'Incorreto. Não aceita plural.' },
        { id: 'd', label: 'D', text: 'daily everyday', isCorrect: false, explanation: 'Incorreto. Redundante.' },
        { id: 'e', label: 'E', text: 'each day of', isCorrect: false, explanation: 'Incorreto. Incorreto antes do substantivo.' }
      ],
      correctExplanation: 'Antes do substantivo "activity", usamos o adjetivo "everyday".'
    },
    {
      id: 7,
      sentence: 'Do you take the subway to work _______?',
      sentenceTranslation: 'Você pega o metrô para o trabalho todos os dias?',
      options: [
        { id: 'a', label: 'A', text: 'every day', isCorrect: true, explanation: 'Correto! Pergunta de frequência (diariamente), logo duas palavras separadas.' },
        { id: 'b', label: 'B', text: 'everyday', isCorrect: false, explanation: 'Incorreto. "Everyday" no final de pergunta sem substantivo está incorreto.' },
        { id: 'c', label: 'C', text: 'all days long', isCorrect: false, explanation: 'Incorreto. "All day long" significa o dia inteiro sem parar.' },
        { id: 'd', label: 'D', text: 'every of day', isCorrect: false, explanation: 'Incorreto. Estrutura errada.' },
        { id: 'e', label: 'E', text: 'day every day', isCorrect: false, explanation: 'Incorreto. Redundância confusa.' }
      ],
      correctExplanation: 'Perguntas sobre hábitos e frequência usam "every day" (separado).'
    },
    {
      id: 8,
      sentence: 'Simple problems like traffic jams are an _______ headache for drivers.',
      sentenceTranslation: 'Problemas simples como engarrafamentos são uma dor de cabeça cotidiana para os motoristas.',
      options: [
        { id: 'a', label: 'A', text: 'everyday', isCorrect: true, explanation: 'Correto! Modifica "headache" (uma dor de cabeça corriqueira/do dia a dia), portanto é adjetivo junto.' },
        { id: 'b', label: 'B', text: 'every day', isCorrect: false, explanation: 'Incorreto. Após o artigo "an" precisamos de um adjetivo junto.' },
        { id: 'c', label: 'C', text: 'all days', isCorrect: false, explanation: 'Incorreto. Gramática incorreta.' },
        { id: 'd', label: 'D', text: 'everydays', isCorrect: false, explanation: 'Incorreto. Não existe.' },
        { id: 'e', label: 'E', text: 'daily each', isCorrect: false, explanation: 'Incorreto. Incorreto.' }
      ],
      correctExplanation: 'O adjetivo "everyday" qualifica o substantivo "headache".'
    },
    {
      id: 9,
      sentence: '_______ is a new opportunity to learn something exciting.',
      sentenceTranslation: 'Cada dia / Todo dia é uma nova oportunidade de aprender algo empolgante.',
      options: [
        { id: 'a', label: 'A', text: 'Every day', isCorrect: true, explanation: 'Correto! Aqui "Every day" atua como sujeito (cada dia em particular), logo deve ser escrito em duas palavras separadas.' },
        { id: 'b', label: 'B', text: 'Everyday', isCorrect: false, explanation: 'Incorreto. "Everyday" junto é adjetivo e não pode ser o sujeito da frase sozinho.' },
        { id: 'c', label: 'C', text: 'Everydays', isCorrect: false, explanation: 'Incorreto. Palavra inexistente.' },
        { id: 'd', label: 'D', text: 'All day', isCorrect: false, explanation: 'Incorreto. "All day" refere-se à duração contínua de 24h de um dia só.' },
        { id: 'e', label: 'E', text: 'Ever day', isCorrect: false, explanation: 'Incorreto. Erro ortográfico.' }
      ],
      correctExplanation: 'Como sujeito com o sentido de "cada dia", escreve-se "Every day" separado.'
    },
    {
      id: 10,
      sentence: 'These dishes are not for special parties; they are for _______ use.',
      sentenceTranslation: 'Estes pratos não são para festas especiais; eles são para uso cotidiano / do dia a dia.',
      options: [
        { id: 'a', label: 'A', text: 'everyday', isCorrect: true, explanation: 'Correto! "Everyday use" (uso diário/cotidiano) emprega o adjetivo junto antes do substantivo "use".' },
        { id: 'b', label: 'B', text: 'every day', isCorrect: false, explanation: 'Incorreto. A forma separada não é adjetivo para qualificar "use".' },
        { id: 'c', label: 'C', text: 'each day of', isCorrect: false, explanation: 'Incorreto. Estrutura errada.' },
        { id: 'd', label: 'D', text: 'all days', isCorrect: false, explanation: 'Incorreto. Incorreto.' },
        { id: 'e', label: 'E', text: 'daily day', isCorrect: false, explanation: 'Incorreto. Redundante.' }
      ],
      correctExplanation: '"Everyday use" é a expressão correta para indicar "uso diário/comum".'
    }
  ]
};
