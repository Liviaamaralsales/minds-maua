import { GrammarTopic } from '../../types';

export const doMakeTopic: GrammarTopic = {
  id: 'do-make',
  slug: 'do-x-make',
  title: 'Do x Make',
  shortDescription: 'Aprenda quando usar Do (ações e tarefas) ou Make (criar e produzir).',
  level: 'A1 - Básico',
  iconName: 'Hammer',
  a1Explanation: {
    quickGoldenRule: 'DO = Tarefas, rotinas e ações em andamento. MAKE = Criar, construir ou produzir algo novo do zero!',
    simpleConcept: 'Pense assim: se você está realizando um trabalho, dever ou tarefa que não cria um objeto físico novo, use DO. Se você vai cozinhar, construir, fabricar ou criar um resultado palpável (ou uma decisão), use MAKE.',
    rules: [
      {
        title: 'Quando usar "DO"',
        description: 'Usamos para atividades gerais, tarefas de casa, trabalho e coisas não especificadas.',
        bullets: [
          'Tarefas de casa e trabalho: do homework (dever de casa), do the dishes (lavar louça), do the laundry (lavar roupa).',
          'Ações com sufixo -ing: do the shopping (fazer compras), do some cleaning.',
          'Palavras indefinidas: do something (fazer algo), do anything, do nothing, do everything.',
          'Fazer o seu melhor / um favor: do your best, do me a favor.'
        ]
      },
      {
        title: 'Quando usar "MAKE"',
        description: 'Usamos quando você cria, produz, constrói, prepara comida ou causa uma reação.',
        bullets: [
          'Comidas e bebidas: make coffee (fazer café), make breakfast (preparar café da manhã), make a cake (fazer bolo).',
          'Construção e criação: make a dress, make a list, make a plan.',
          'Decisões e sons: make a decision (tomar decisão), make a phone call (fazer ligação), make noise (fazer barulho).',
          'Relacionamentos e dinheiro: make friends (fazer amigos), make money (ganhar dinheiro), make a mistake (cometer um erro).'
        ]
      }
    ],
    memoryTip: 'Dica Mnemônica: "DO" é o trabalho dos seus braços (tarefas diárias). "MAKE" é a mágica das suas mãos (criação e comida)!',
    comparisonTable: {
      col1Title: 'DO (Tarefas / Ações)',
      col2Title: 'MAKE (Criação / Produção)',
      rows: [
        { col1: 'do homework (fazer lição de casa)', col2: 'make a cake (fazer um bolo)', note: 'Bolo é criado; lição é executada.' },
        { col1: 'do the dishes (lavar a louça)', col2: 'make dinner (fazer o jantar)', note: 'Lavar é tarefa; cozinhar é produzir.' },
        { col1: 'do exercise (fazer exercícios)', col2: 'make a decision (tomar uma decisão)', note: 'Decisão é uma escolha criada.' },
        { col1: 'do a favor (fazer um favor)', col2: 'make a mistake (cometer um erro)', note: 'Erro é produzido.' },
        { col1: 'do business (fazer negócios)', col2: 'make money (ganhar dinheiro)', note: 'Money é o fruto gerado.' }
      ]
    }
  },
  pronunciationVideo: {
    title: 'Pronúncia & Uso Real: DO vs MAKE',
    youtubeId: 'qN34XzGv0B8',
    channelName: 'Minds Pronunciation Lab & Oxford English',
    duration: '6:45',
    description: 'Aprenda a pronúncia correta dos fonemas /duː/ e /meɪk/, a redução de artigos e o linking sound ao falar naturalmente.',
    ipaGuides: [
      { word: 'Do', ipa: '/duː/', soundNote: 'Vogal longa "u:", boca arredondada sem som de "w" forte.' },
      { word: 'Make', ipa: '/meɪk/', soundNote: 'Ditongo "eɪ" fechando em "k" seco sem vogal de apoio no final.' },
      { word: 'Make a...', ipa: '/ˈmeɪ.kə/', soundNote: 'Linking sound: o som do "k" conecta diretamente com a vogal seguinte.' },
    ],
    keyTimestamps: [
      { label: 'Fonema /duː/ & /meɪk/', time: '0:45' },
      { label: 'Linking Sounds (Make a decision)', time: '2:15' },
      { label: 'Exemplos em Conversa Real', time: '4:30' },
    ]
  },
  examples: [
    {
      english: 'I always do my homework before dinner.',
      portuguese: 'Eu sempre faço meu dever de casa antes do jantar.',
      highlight: 'do my homework',
      note: 'Dever de casa é uma tarefa/obrigação.'
    },
    {
      english: 'Can you make a cup of coffee for me, please?',
      portuguese: 'Você pode fazer uma xícara de café para mim, por favor?',
      highlight: 'make a cup of coffee',
      note: 'Preparar bebida é criar algo para consumir.'
    },
    {
      english: 'Don\'t worry, everybody makes mistakes.',
      portuguese: 'Não se preocupe, todo mundo comete erros.',
      highlight: 'makes mistakes',
      note: 'Em inglês, cometer erros é sempre com make.'
    },
    {
      english: 'Could you do me a favor tomorrow?',
      portuguese: 'Você poderia me fazer um favor amanhã?',
      highlight: 'do me a favor',
      note: 'Fazer favor é uma ação/serviço.'
    }
  ],
  quiz: [
    {
      id: 1,
      sentence: 'I need to _______ my homework before playing video games.',
      sentenceTranslation: 'Eu preciso fazer meu dever de casa antes de jogar videogame.',
      options: [
        { id: 'a', label: 'A', text: 'do', isCorrect: true, explanation: 'Correto! "Homework" é uma tarefa/dever de estudo, portanto usamos "do homework".' },
        { id: 'b', label: 'B', text: 'make', isCorrect: false, explanation: 'Incorreto. "Make" é criar/produzir algo novo. Lição de casa é uma tarefa a ser executada ("do").' },
        { id: 'c', label: 'C', text: 'does', isCorrect: false, explanation: 'Incorreto. Após o infinitivo "to" usamos o verbo na forma base "do", não "does".' },
        { id: 'd', label: 'D', text: 'makes', isCorrect: false, explanation: 'Incorreto. Além de "make" ser o verbo errado para homework, a 3ª pessoa com "s" não cabe após "to".' },
        { id: 'e', label: 'E', text: 'doing', isCorrect: false, explanation: 'Incorreto. Após "need to" usamos o verbo na forma infinitiva sem -ing.' }
      ],
      correctExplanation: 'Usamos "do" para tarefas e deveres escolares (do homework).'
    },
    {
      id: 2,
      sentence: 'My mom is going to _______ a delicious chocolate cake for my birthday.',
      sentenceTranslation: 'Minha mãe vai fazer um bolo de chocolate delicioso para o meu aniversário.',
      options: [
        { id: 'a', label: 'A', text: 'do', isCorrect: false, explanation: 'Incorreto. Não usamos "do" para preparar alimentos e receitas culinárias.' },
        { id: 'b', label: 'B', text: 'make', isCorrect: true, explanation: 'Correto! Preparar comida e receitas culinárias é criar algo do zero, logo usamos "make a cake".' },
        { id: 'c', label: 'C', text: 'makes', isCorrect: false, explanation: 'Incorreto. Após "is going to", o verbo deve estar no infinitivo base ("make").' },
        { id: 'd', label: 'D', text: 'does', isCorrect: false, explanation: 'Incorreto. "Does" é forma conjugada de "do", que não se aplica a bolos.' },
        { id: 'e', label: 'E', text: 'making', isCorrect: false, explanation: 'Incorreto. Não usamos gerúndio (-ing) logo após a estrutura "going to".' }
      ],
      correctExplanation: 'Culinária e preparação de alimentos usam o verbo "make" (make a cake, make dinner).'
    },
    {
      id: 3,
      sentence: 'Could you please _______ the dishes after eating?',
      sentenceTranslation: 'Você poderia por favor lavar a louça depois de comer?',
      options: [
        { id: 'a', label: 'A', text: 'make', isCorrect: false, explanation: 'Incorreto. "Make the dishes" significaria fabricar pratos de cerâmica do zero!' },
        { id: 'b', label: 'B', text: 'do', isCorrect: true, explanation: 'Correto! "Do the dishes" é a expressão natural em inglês para lavar a louça.' },
        { id: 'c', label: 'C', text: 'does', isCorrect: false, explanation: 'Incorreto. Após o verbo modal "could", o verbo deve estar na forma base sem "s".' },
        { id: 'd', label: 'D', text: 'makes', isCorrect: false, explanation: 'Incorreto. Não usamos "makes" após modal "could" e nem com a tarefa da louça.' },
        { id: 'e', label: 'E', text: 'doing', isCorrect: false, explanation: 'Incorreto. Após "could you please" usamos o verbo na forma base.' }
      ],
      correctExplanation: 'Para tarefas domésticas usamos "do" (do the dishes = lavar a louça).'
    },
    {
      id: 4,
      sentence: 'It is okay to _______ mistakes when you are learning English.',
      sentenceTranslation: 'Tudo bem cometer erros quando você está aprendendo inglês.',
      options: [
        { id: 'a', label: 'A', text: 'do', isCorrect: false, explanation: 'Incorreto. Não se diz "do mistakes" em inglês. É uma combinação fixa com "make".' },
        { id: 'b', label: 'B', text: 'make', isCorrect: true, explanation: 'Correto! A expressão padrão e natural em inglês é "make a mistake" / "make mistakes".' },
        { id: 'c', label: 'C', text: 'makes', isCorrect: false, explanation: 'Incorreto. Após o "to" usamos a forma base sem "s".' },
        { id: 'd', label: 'D', text: 'does', isCorrect: false, explanation: 'Incorreto. "Does" não combina com mistakes nem cabe após "to".' },
        { id: 'e', label: 'E', text: 'making', isCorrect: false, explanation: 'Incorreto. Após "to" usamos a forma base "make".' }
      ],
      correctExplanation: '"Make a mistake" é a combinação fixa padrão em inglês para cometer um erro.'
    },
    {
      id: 5,
      sentence: 'Can you _______ me a favor and close the door?',
      sentenceTranslation: 'Você pode me fazer um favor e fechar a porta?',
      options: [
        { id: 'a', label: 'A', text: 'make', isCorrect: false, explanation: 'Incorreto. "Make a favor" não existe em inglês.' },
        { id: 'b', label: 'B', text: 'do', isCorrect: true, explanation: 'Correto! A expressão correta para fazer um favor é sempre "do someone a favor".' },
        { id: 'c', label: 'C', text: 'does', isCorrect: false, explanation: 'Incorreto. Após "can you" usamos a forma base "do".' },
        { id: 'd', label: 'D', text: 'makes', isCorrect: false, explanation: 'Incorreto. "Makes" não combina com favor e não cabe após "can".' },
        { id: 'e', label: 'E', text: 'did', isCorrect: false, explanation: 'Incorreto. A frase é um pedido no presente, logo usamos a forma base "do".' }
      ],
      correctExplanation: 'Prestação de auxílio ou favores sempre leva "do" (do a favor).'
    },
    {
      id: 6,
      sentence: 'She wants to _______ more friends at her new school.',
      sentenceTranslation: 'Ela quer fazer mais amigos na sua escola nova.',
      options: [
        { id: 'a', label: 'A', text: 'do', isCorrect: false, explanation: 'Incorreto. "Do friends" está gramaticalmente incorreto.' },
        { id: 'b', label: 'B', text: 'make', isCorrect: true, explanation: 'Correto! Fazer amizades é criar novos laços sociais, portanto "make friends".' },
        { id: 'c', label: 'C', text: 'makes', isCorrect: false, explanation: 'Incorreto. Após "wants to" o verbo deve vir na forma base "make".' },
        { id: 'd', label: 'D', text: 'does', isCorrect: false, explanation: 'Incorreto. "Does" não combina com friends.' },
        { id: 'e', label: 'E', text: 'making', isCorrect: false, explanation: 'Incorreto. Após "to" usamos o infinitivo base.' }
      ],
      correctExplanation: 'Construir laços de amizade sempre usa "make" (make friends).'
    },
    {
      id: 7,
      sentence: 'I must _______ a phone call to my doctor right now.',
      sentenceTranslation: 'Eu preciso fazer uma ligação telefônica para o meu médico agora.',
      options: [
        { id: 'a', label: 'A', text: 'make', isCorrect: true, explanation: 'Correto! Comunicações e chamadas sonoras usam "make a phone call" / "make a call".' },
        { id: 'b', label: 'B', text: 'do', isCorrect: false, explanation: 'Incorreto. Não se diz "do a phone call".' },
        { id: 'c', label: 'C', text: 'makes', isCorrect: false, explanation: 'Incorreto. Após o verbo modal "must" usamos a forma base sem "s".' },
        { id: 'd', label: 'D', text: 'does', isCorrect: false, explanation: 'Incorreto. "Does" não combina com ligações.' },
        { id: 'e', label: 'E', text: 'making', isCorrect: false, explanation: 'Incorreto. Após o modal "must" usamos o verbo na forma base.' }
      ],
      correctExplanation: 'Realizar chamadas e produzir sons usa "make" (make a call / make a phone call).'
    },
    {
      id: 8,
      sentence: 'Doctors say that we should _______ exercise at least three times a week.',
      sentenceTranslation: 'Médicos dizem que devemos fazer exercícios pelo menos três vezes por semana.',
      options: [
        { id: 'a', label: 'A', text: 'make', isCorrect: false, explanation: 'Incorreto. "Make exercise" significaria inventar a ginástica. Praticar exercício é "do exercise".' },
        { id: 'b', label: 'B', text: 'do', isCorrect: true, explanation: 'Correto! Atividade física e esportes gerais usam "do exercise".' },
        { id: 'c', label: 'C', text: 'does', isCorrect: false, explanation: 'Incorreto. Após o modal "should" usamos a forma base sem "s".' },
        { id: 'd', label: 'D', text: 'makes', isCorrect: false, explanation: 'Incorreto. "Makes" não combina com exercise.' },
        { id: 'e', label: 'E', text: 'doing', isCorrect: false, explanation: 'Incorreto. Após modal "should" usamos a forma base "do".' }
      ],
      correctExplanation: 'Praticar exercícios físicos é uma atividade corporal, por isso usa-se "do exercise".'
    },
    {
      id: 9,
      sentence: 'Please don\'t _______ so much noise, the baby is sleeping!',
      sentenceTranslation: 'Por favor não faça tanto barulho, o bebê está dormindo!',
      options: [
        { id: 'a', label: 'A', text: 'do', isCorrect: false, explanation: 'Incorreto. "Do noise" não existe em inglês.' },
        { id: 'b', label: 'B', text: 'make', isCorrect: true, explanation: 'Correto! Sons e ruídos produzidos usam sempre "make noise" / "make a sound".' },
        { id: 'c', label: 'C', text: 'makes', isCorrect: false, explanation: 'Incorreto. No imperativo negativo ("don\'t") usamos a forma base sem "s".' },
        { id: 'd', label: 'D', text: 'does', isCorrect: false, explanation: 'Incorreto. "Does" não combina com noise.' },
        { id: 'e', label: 'E', text: 'made', isCorrect: false, explanation: 'Incorreto. A frase é um pedido no presente, logo não usamos passado.' }
      ],
      correctExplanation: 'Produção de sons e ruídos utiliza "make" (make noise).'
    },
    {
      id: 10,
      sentence: 'We have to _______ a decision before five o\'clock today.',
      sentenceTranslation: 'Nós temos que tomar uma decisão antes das cinco horas hoje.',
      options: [
        { id: 'a', label: 'A', text: 'do', isCorrect: false, explanation: 'Incorreto. Não usamos "do a decision".' },
        { id: 'b', label: 'B', text: 'make', isCorrect: true, explanation: 'Correto! A expressão consagrada em inglês para tomar uma decisão é "make a decision".' },
        { id: 'c', label: 'C', text: 'does', isCorrect: false, explanation: 'Incorreto. "Does" não combina com decision.' },
        { id: 'd', label: 'D', text: 'makes', isCorrect: false, explanation: 'Incorreto. Após "have to" usamos o infinitivo base sem "s".' },
        { id: 'e', label: 'E', text: 'made', isCorrect: false, explanation: 'Incorreto. Após "have to" usamos o presente base.' }
      ],
      correctExplanation: '"Make a decision" é o padrão consagrado em inglês para tomar uma decisão.'
    }
  ]
};
