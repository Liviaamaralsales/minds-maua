// =============================================================================
// 📚 DEFINIÇÕES DE TIPOS TYPESCRIPT (INTERFACES DE DADOS)
// =============================================================================

/**
 * Representa uma única opção de resposta dentro de uma questão do Quiz.
 */
export interface QuizOption {
  /** Identificador único da opção (ex: 'dm-1-a', 'dm-1-b') */
  id: string;
  /** Letra indicativa da alternativa: 'A', 'B', 'C', 'D' ou 'E' */
  label: string;
  /** Texto da alternativa em inglês */
  text: string;
  /** Indica se esta é a alternativa correta da questão */
  isCorrect: boolean;
  /** Explicação detalhada de por que esta opção está certa ou errada */
  explanation: string;
}

/**
 * Representa uma questão completa de avaliação do Quiz.
 */
export interface QuizQuestion {
  /** Número identificador da questão (1 a 10) */
  id: number;
  /** Frase em inglês contendo uma lacuna a ser preenchida */
  sentence: string;
  /** Tradução da frase para o português */
  sentenceTranslation: string;
  /** Lista com as 5 alternativas da questão */
  options: QuizOption[];
  /** Justificativa resumida do gabarito */
  correctExplanation: string;
  /** Dica gramatical opcional */
  generalTip?: string;
}

/**
 * Exemplo prático de frase em inglês com tradução para estudo.
 */
export interface GrammarExample {
  /** Frase em inglês */
  english: string;
  /** Tradução em português */
  portuguese: string;
  /** Trecho em destaque */
  highlight?: string;
  /** Observação didática opcional */
  note?: string;
}

/**
 * Bloco de regra ou estrutura gramatical.
 */
export interface GrammarRuleBlock {
  /** Título da regra (ex: "Uso do DO") */
  title: string;
  /** Descrição explicativa para alunos iniciantes */
  description: string;
  /** Selo ou etiqueta visual (ex: "Ações / Rotinas") */
  badge?: string;
  /** Tópicos adicionais com marcadores */
  bullets?: string[];
}

/**
 * Estrutura opcional de vídeo de pronúncia e fonética.
 */
export interface PronunciationVideo {
  title: string;
  youtubeId: string;
  channelName: string;
  duration: string;
  description: string;
  ipaGuides: Array<{
    word: string;
    ipa: string;
    soundNote: string;
  }>;
  keyTimestamps?: Array<{
    label: string;
    time: string;
  }>;
}

/**
 * Estrutura de dados de um módulo completo de gramática A1.
 */
export interface GrammarTopic {
  /** Identificador único (ex: 'do-make') */
  id: string;
  /** Slug amigável para URLs ou identificação */
  slug: string;
  /** Título principal do módulo (ex: 'DO vs MAKE') */
  title: string;
  /** Resumo em uma linha para cards e seletores */
  shortDescription: string;
  /** Nível de proficiência do módulo */
  level: 'A1 - Básico' | 'A1/A2' | 'Essencial';
  /** Nome do ícone associado */
  iconName: string;
  /** Conteúdo didático simplificado no método Minds */
  a1Explanation: {
    /** Regra de Ouro em 1 frase de alto impacto */
    quickGoldenRule: string;
    /** Conceito explicado em linguagem simples para iniciantes */
    simpleConcept: string;
    /** Blocos detalhados de regras estruturais */
    rules: GrammarRuleBlock[];
    /** Macete mnemônico para memorização rápida */
    memoryTip: string;
    /** Tabela ou quadro comparativo opcional */
    comparisonTable?: {
      col1Title: string;
      col2Title: string;
      rows: Array<{
        col1: string;
        col2: string;
        note?: string;
      }>;
    };
  };
  /** Vídeo de pronúncia complementar (opcional) */
  pronunciationVideo?: PronunciationVideo;
  /** Lista de exemplos práticos do dia a dia */
  examples: GrammarExample[];
  /** As 10 questões do quiz deste módulo */
  quiz: QuizQuestion[];
}
