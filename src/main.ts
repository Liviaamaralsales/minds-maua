import './index.css';
import { allGrammarTopics, findTopicById } from './data/grammarData';
import { GrammarTopic } from './types';

// =============================================================================
// 📌 CONFIGURAÇÃO DOS ARQUIVOS DE IMAGEM DA LOGO (ASSETS DE MARCA)
// =============================================================================
// 
// Para alterar ou substituir as imagens da logo Minds English School,
// você pode colocar seus arquivos na pasta pública `/public/` e alterar as
// constantes abaixo, ou simplesmente substituir os arquivos correspondentes:
//
// 1. LOGO_NAVBAR_SRC: Imagem da logo exibida na Barra Superior (Navbar).
//    Arquivo padrão: "/minds-logo.svg" (ou "/minds-logo.png", "/minds-logo.jpg")
//
// 2. LOGO_HERO_TOP_SRC: Imagem da logo exibida no Cartão de Destaque antes dos módulos.
//    Arquivo padrão: "/minds-logo.svg"
//
// 3. LOGO_FOOTER_SRC: Imagem da logo exibida no Rodapé da página.
//    Arquivo padrão: "/minds-logo.svg"
//
// DICA: No Vite, arquivos salvos dentro da pasta `/public` são servidos
// diretamente na raiz (ex: `/public/minha-logo.png` -> `src="/minha-logo.png"`).
// =============================================================================

export const BRAND_ASSETS = {
  // Local do arquivo de imagem da logo na Navbar (Barra de Navegação)
  navbarLogo: '/minds-logo.svg',

  // Local do arquivo de imagem da logo no Banner Superior (Topo antes dos Módulos)
  heroTopLogo: '/minds-logo.svg',

  // Local do arquivo de imagem da logo no Rodapé (Footer)
  footerLogo: '/minds-logo.svg',
};

// =============================================================================
// 🗄️ GERENCIAMENTO DE ESTADO DA APLICAÇÃO (STATE MANAGEMENT)
// =============================================================================
/**
 * Interface que define toda a estrutura de estado da aplicação:
 * - selectedTopicId: ID do módulo de gramática atualmente selecionado (ex: 'do-make').
 * - viewMode: 'study' (tela de explicação e exemplos) ou 'quiz' (ambiente isolado de teste).
 * - currentQuestionIndex: Índice da questão atual exibida no quiz (0 a 9).
 * - userAnswers: Mapeamento aninhado com as respostas do usuário [topicId][questionId] -> optionId.
 */
interface AppState {
  selectedTopicId: string;
  viewMode: 'study' | 'quiz';
  currentQuestionIndex: number;
  userAnswers: Record<string, Record<number, string>>;
}

// Chave utilizada para salvar e persistir as respostas no LocalStorage do navegador
const STORAGE_KEY = 'minds_grammar_quiz_v2';

/**
 * Carrega as respostas salvas do LocalStorage.
 * Caso não existam dados ou ocorra erro de parse, retorna um objeto vazio.
 */
function loadAnswersFromStorage(): Record<string, Record<number, string>> {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Erro ao carregar respostas do LocalStorage:', e);
    return {};
  }
}

/**
 * Salva o estado atual de respostas do usuário no LocalStorage.
 */
function saveAnswersToStorage(answers: Record<string, Record<number, string>>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  } catch (e) {
    console.error('Erro ao salvar respostas no LocalStorage:', e);
  }
}

// Objeto de estado reativo inicial
const state: AppState = {
  selectedTopicId: allGrammarTopics[0]?.id || 'do-make',
  viewMode: 'study',
  currentQuestionIndex: 0,
  userAnswers: loadAnswersFromStorage(),
};

// =============================================================================
// 🎨 ÍCONES DOS MÓDULOS DE GRAMÁTICA
// =============================================================================
// Ícone padrão de caderno (fa-solid fa-book-bookmark) padronizado para todos os tópicos
const NOTEBOOK_ICON = 'fa-solid fa-book-bookmark';

// Mapeamento dos 10 tópicos para o ícone de caderno
const topicFaIcons: Record<string, string> = {
  'do-make': NOTEBOOK_ICON,
  'much-a-lot-of': NOTEBOOK_ICON,
  'prefer-would-rather': NOTEBOOK_ICON,
  'prefer-would-rather-would-prefer': NOTEBOOK_ICON,
  'presently-currently-actually': NOTEBOOK_ICON,
  'farther-further': NOTEBOOK_ICON,
  'everyday-every-day': NOTEBOOK_ICON,
  'have-take': NOTEBOOK_ICON,
  'gerund-infinitive': NOTEBOOK_ICON,
  'transition-words': NOTEBOOK_ICON,
  'phrasal-verbs': NOTEBOOK_ICON,
};

// =============================================================================
// 📊 CÁLCULO DE MÉTRICAS E ESTATÍSTICAS (PROGRESSO DO ALUNO)
// =============================================================================

/**
 * Calcula as estatísticas de um tópico específico:
 * - Quantidade de questões respondidas
 * - Quantidade de acertos
 * - Total de questões no quiz
 * - Se o módulo foi 100% concluído
 */
function getTopicStats(topic: GrammarTopic) {
  const answers = state.userAnswers[topic.id] || {};
  const answeredCount = Object.keys(answers).length;
  let correctCount = 0;

  topic.quiz.forEach((q) => {
    const chosenOptionId = answers[q.id];
    if (chosenOptionId) {
      const option = q.options.find((o) => o.id === chosenOptionId);
      if (option?.isCorrect) {
        correctCount++;
      }
    }
  });

  const isCompleted = answeredCount === topic.quiz.length;
  return { answeredCount, correctCount, totalQuestions: topic.quiz.length, isCompleted };
}

/**
 * Calcula as estatísticas globais acumuladas de todos os 10 módulos de gramática.
 */
function getGlobalStats() {
  let totalScore = 0;
  let completedTopics = 0;
  let totalAnswered = 0;
  const totalQuestions = allGrammarTopics.reduce((acc, t) => acc + t.quiz.length, 0);

  allGrammarTopics.forEach((t) => {
    const stats = getTopicStats(t);
    totalScore += stats.correctCount;
    totalAnswered += stats.answeredCount;
    if (stats.isCompleted) completedTopics++;
  });

  return { totalScore, completedTopics, totalAnswered, totalQuestions };
}

// =============================================================================
// 🖥️ COMPONENTES DE RENDERIZAÇÃO (HTML BUILDERS)
// =============================================================================

/**
 * Renderiza o cabeçalho fixo superior (Navbar).
 * Contém a logo em fundo branco, indicador de nível A1 e métricas de progresso.
 */
function renderHeader(): string {
  const global = getGlobalStats();
  const isQuizMode = state.viewMode === 'quiz';

  return `
    <header class="bg-[#001940] text-white border-b-4 border-[#fb1504] sticky top-0 z-40 shadow-xl">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        
        <!-- ============================================================= -->
        <!-- 📍 LOCAL 1: IMAGEM DA LOGO NA BARRA SUPERIOR (NAVBAR)         -->
        <!-- Arquivo referenciado via BRAND_ASSETS.navbarLogo              -->
        <!-- ============================================================= -->
        <div class="flex items-center gap-3 cursor-pointer select-none" id="brand-logo-btn" title="Minds English School - Início">
          <div class="bg-white rounded-xl px-3 py-1.5 shadow-md flex items-center justify-center border border-white/30 hover:bg-slate-50 transition-colors">
            <img 
              src="${BRAND_ASSETS.navbarLogo}" 
              alt="Minds English School Logo" 
              class="h-8 sm:h-9 w-auto object-contain"
              referrerpolicy="no-referrer"
            />
          </div>
          <div class="hidden sm:flex flex-col justify-center border-l border-white/20 pl-3">
            <span class="text-[10px] font-black uppercase bg-[#fb1504] text-white px-2 py-0.5 rounded tracking-wider self-start">
              A1 Essential
            </span>
            <span class="text-[11px] text-[#d7d9dd]/80 font-semibold mt-0.5">Gramática & Quizzes</span>
          </div>
        </div>

        <!-- Indicador de Modo Ativo (Estudo vs Quiz) & Progresso Geral -->
        <div class="flex items-center gap-3">
          ${isQuizMode ? `
            <div class="bg-[#fb1504]/20 border border-[#fb1504]/40 px-3.5 py-1.5 rounded-xl flex items-center gap-2 text-white">
              <span class="w-2 h-2 rounded-full bg-[#fb1504] animate-pulse"></span>
              <span class="text-xs font-black uppercase tracking-wider text-[#fb1504]">Modo Quiz Ativo</span>
            </div>
          ` : `
            <div class="bg-white/5 border border-white/10 rounded-xl px-3.5 py-1.5 hidden sm:flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <i class="fa-solid fa-trophy text-xs"></i>
              </div>
              <div>
                <span class="text-[10px] uppercase font-bold text-[#d7d9dd]/70 block leading-tight">Progresso Geral</span>
                <span class="text-xs font-extrabold text-white leading-tight">${global.completedTopics}/${allGrammarTopics.length} Módulos (${global.totalScore} pts)</span>
              </div>
            </div>
          `}
        </div>

      </div>
    </header>
  `;
}

/**
 * Renderiza a grade de seleção dos 10 tópicos de gramática A1.
 * Exibe o status de conclusão e o ícone padronizado de cada módulo.
 */
function renderTopicSelector(): string {
  return `
    <div class="bg-white rounded-2xl p-4 sm:p-5 shadow-md border border-[#253955]/10 space-y-4">
      <div>
        <h2 class="text-base sm:text-lg font-black text-[#001940] flex items-center gap-2">
          <i class="fa-solid fa-book-open text-[#fb1504]"></i>
          <span>Selecione um Módulo para Estudar</span>
        </h2>
        <p class="text-xs text-[#253955]/80 font-medium">10 tópicos essenciais de gramática A1 com explicações práticas e diretas</p>
      </div>

      <!-- Grade responsiva com os 10 tópicos -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        ${allGrammarTopics.map((topic, index) => {
          const isSelected = topic.id === state.selectedTopicId;
          const stats = getTopicStats(topic);
          const iconClass = topicFaIcons[topic.id] || NOTEBOOK_ICON;

          return `
            <button
              data-topic-id="${topic.id}"
              class="topic-select-btn p-3 rounded-xl text-left flex flex-col justify-between gap-2 border transition-all cursor-pointer relative overflow-hidden ${
                isSelected
                  ? 'bg-[#001940] text-white border-[#fb1504] shadow-md ring-2 ring-[#fb1504]/30'
                  : 'bg-[#f8f9fa] hover:bg-white text-[#001940] border-[#253955]/15 hover:border-[#fb1504]'
              }"
            >
              <div class="flex items-center justify-between w-full">
                <!-- Ícone de caderno do módulo -->
                <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs ${
                  isSelected ? 'bg-[#fb1504] text-white' : 'bg-[#001940] text-white'
                }">
                  <i class="${iconClass}"></i>
                </div>
                ${stats.isCompleted ? `
                  <span class="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded flex items-center gap-1">
                    <i class="fa-solid fa-check"></i> ${stats.correctCount}/10
                  </span>
                ` : `
                  <span class="text-[10px] font-extrabold ${isSelected ? 'text-[#fb1504]' : 'text-[#253955]/60'}">#${index + 1}</span>
                `}
              </div>

              <div>
                <h4 class="font-extrabold text-xs sm:text-sm leading-snug line-clamp-1 ${isSelected ? 'text-white' : 'text-[#001940]'}">
                  ${topic.title}
                </h4>
                <p class="text-[11px] font-medium line-clamp-1 mt-0.5 ${isSelected ? 'text-[#d7d9dd]/80' : 'text-[#253955]/70'}">
                  ${topic.shortDescription}
                </p>
              </div>
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

/**
 * Renderiza o painel didático completo do módulo selecionado (Modo Estudo):
 * - Banner com título e botão para iniciar o Quiz
 * - Regra de Ouro (Golden Rule)
 * - Blocos estruturais de regras
 * - Macetes mentais (Memory Tip)
 * - Quadro comparativo
 * - Exemplos práticos com tradução
 */
function renderGrammarView(topic: GrammarTopic): string {
  const iconClass = topicFaIcons[topic.id] || NOTEBOOK_ICON;

  return `
    <div class="space-y-6">
      
      <!-- Cabeçalho do Tópico com Botão CTA para o Quiz -->
      <div class="bg-[#001940] text-white rounded-2xl p-6 sm:p-8 shadow-xl border-t-4 border-[#fb1504] relative overflow-hidden">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex items-start sm:items-center gap-3.5">
            <div class="w-12 h-12 rounded-2xl bg-[#fb1504] text-white flex items-center justify-center text-xl shadow-lg shrink-0">
              <i class="${iconClass}"></i>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="bg-white/15 text-[#d7d9dd] text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wider">
                  Nível ${topic.level}
                </span>
                <span class="text-xs text-[#d7d9dd]/70 font-semibold">• 10 Questões Disponíveis</span>
              </div>
              <h1 class="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
                ${topic.title}
              </h1>
            </div>
          </div>

          <!-- Botão Direto para Iniciar o Quiz do Módulo -->
          <button 
            id="start-quiz-top-btn"
            class="px-6 py-3.5 rounded-xl bg-[#fb1504] hover:bg-[#b92c21] text-white font-extrabold text-sm shadow-lg flex items-center justify-center gap-2.5 transition-all cursor-pointer group"
          >
            <i class="fa-solid fa-graduation-cap group-hover:scale-110 transition-transform"></i>
            <span>Fazer Quiz do Módulo (10 Questões)</span>
            <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>
      </div>

      <!-- Cartão Principal com Conteúdo Didático -->
      <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#253955]/10 space-y-6">
        
        <!-- 1. Regra de Ouro Minds -->
        <div class="p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center text-lg shrink-0 shadow-sm">
            <i class="fa-solid fa-lightbulb"></i>
          </div>
          <div>
            <span class="text-[11px] font-black text-amber-700 uppercase tracking-wider block">Regra de Ouro Minds</span>
            <p class="text-base sm:text-lg font-extrabold text-[#001940] mt-0.5">
              ${topic.a1Explanation.quickGoldenRule}
            </p>
            <p class="text-xs sm:text-sm text-[#253955]/90 mt-1 font-medium leading-relaxed">
              ${topic.a1Explanation.simpleConcept}
            </p>
          </div>
        </div>

        <!-- 2. Estrutura e Como Usar (Regras) -->
        <div class="space-y-3">
          <h3 class="text-sm sm:text-base font-bold text-[#001940] uppercase tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-list-check text-[#fb1504]"></i>
            <span>Estrutura e Como Usar</span>
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${topic.a1Explanation.rules.map((rule) => `
              <div class="p-5 rounded-xl bg-[#f8f9fa] border border-[#253955]/10 flex flex-col justify-between gap-3">
                <div>
                  <div class="flex items-center justify-between gap-2 mb-1.5">
                    <h4 class="font-extrabold text-sm sm:text-base text-[#001940]">${rule.title}</h4>
                    ${rule.badge ? `<span class="text-[10px] font-bold px-2 py-0.5 rounded bg-[#001940] text-white">${rule.badge}</span>` : ''}
                  </div>
                  <p class="text-xs sm:text-sm text-[#253955]/90 leading-relaxed font-medium">
                    ${rule.description}
                  </p>
                </div>

                ${rule.bullets ? `
                  <ul class="space-y-1.5 pt-2 border-t border-[#253955]/10 text-xs text-[#253955] font-semibold">
                    ${rule.bullets.map(b => `<li class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#fb1504] text-[11px] shrink-0"></i> <span>${b}</span></li>`).join('')}
                  </ul>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 3. Macete Mental Minds -->
        ${topic.a1Explanation.memoryTip ? `
          <div class="p-4 sm:p-5 rounded-xl bg-[#001940] text-white flex items-start gap-3.5 shadow-md">
            <div class="w-8 h-8 rounded-lg bg-[#fb1504] text-white flex items-center justify-center text-sm shrink-0">
              <i class="fa-solid fa-brain"></i>
            </div>
            <div>
              <span class="text-[10px] font-black text-[#fb1504] uppercase tracking-wider block">Macete Mental Minds</span>
              <p class="text-xs sm:text-sm text-white font-bold mt-0.5 leading-relaxed whitespace-pre-line">
                ${topic.a1Explanation.memoryTip}
              </p>
            </div>
          </div>
        ` : ''}

        <!-- 4. Quadro Comparativo -->
        ${topic.a1Explanation.comparisonTable ? `
          <div class="space-y-3">
            <h3 class="text-sm sm:text-base font-bold text-[#001940] uppercase tracking-wider flex items-center gap-2">
              <i class="fa-solid fa-table-columns text-[#fb1504]"></i>
              <span>Quadro Comparativo</span>
            </h3>

            <div class="overflow-x-auto rounded-xl border border-[#253955]/15 shadow-sm">
              <table class="w-full text-left text-xs sm:text-sm">
                <thead class="bg-[#001940] text-white font-extrabold uppercase text-[11px] tracking-wider">
                  <tr>
                    <th class="p-3 sm:p-4 border-r border-white/10">${topic.a1Explanation.comparisonTable.col1Title}</th>
                    <th class="p-3 sm:p-4">${topic.a1Explanation.comparisonTable.col2Title}</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#253955]/10 bg-white">
                  ${topic.a1Explanation.comparisonTable.rows.map(row => `
                    <tr class="hover:bg-[#f8f9fa] transition-colors">
                      <td class="p-3 sm:p-4 font-bold text-[#001940] border-r border-[#253955]/10 bg-[#f8f9fa]/50">${row.col1}</td>
                      <td class="p-3 sm:p-4 text-[#253955] font-medium">
                        ${row.col2}
                        ${row.note ? `<span class="flex items-center gap-1 text-[11px] text-[#b92c21] font-normal mt-1"><i class="fa-solid fa-circle-info text-[#fb1504]"></i> ${row.note}</span>` : ''}
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        ` : ''}

        <!-- 5. Exemplos Práticos do Dia a Dia -->
        <div class="space-y-3">
          <h3 class="text-sm sm:text-base font-bold text-[#001940] uppercase tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-comments text-[#fb1504]"></i>
            <span>Exemplos Práticos do Dia a Dia</span>
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${topic.examples.map(ex => `
              <div class="p-4 rounded-xl bg-[#f8f9fa] border-l-4 border-l-[#253955] hover:border-l-[#fb1504] border-t border-r border-b border-[#253955]/10 flex flex-col justify-between gap-1.5 transition-all">
                <p class="text-sm sm:text-base font-bold text-[#001940]">${ex.english}</p>
                <p class="text-xs text-[#253955]/90 italic font-medium">${ex.portuguese}</p>
                ${ex.note ? `<p class="text-[11px] text-[#b92c21] font-semibold pt-0.5">• ${ex.note}</p>` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 6. Botão Final de Chamada para Ação -->
        <div class="pt-6 border-t border-[#253955]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span class="font-extrabold text-sm sm:text-base text-[#001940] block">Pronto para testar seus conhecimentos?</span>
            <p class="text-xs text-[#253955]/80 font-medium">Ao iniciar o quiz, o conteúdo de estudo ficará oculto para avaliar sua fixação real.</p>
          </div>
          <button 
            id="start-quiz-bottom-btn"
            class="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#001940] hover:bg-[#253955] text-white font-extrabold text-sm shadow-md flex items-center justify-center gap-2.5 transition-all cursor-pointer"
          >
            <i class="fa-solid fa-play text-[#fb1504]"></i>
            <span>Iniciar Quiz (10 Questões)</span>
          </button>
        </div>

      </div>
    </div>
  `;
}

/**
 * Renderiza a visualização do Quiz (Ambiente isolado de avaliação):
 * - Oculta as regras de estudo para garantir avaliação real
 * - Barra de progresso com 10 bolinhas (stepper)
 * - Exibição da frase com lacuna e tradução
 * - 5 alternativas interativas
 * - Feedback instantâneo após a escolha (explicação detalhada)
 * - Painel de conclusão ao finalizar as 10 perguntas
 */
function renderQuizView(topic: GrammarTopic): string {
  const currentQIndex = state.currentQuestionIndex;
  const questions = topic.quiz;
  const currentQ = questions[currentQIndex];
  const answers = state.userAnswers[topic.id] || {};
  const selectedOptionId = answers[currentQ.id];
  const isAnswered = Boolean(selectedOptionId);
  const correctOption = currentQ.options.find(o => o.isCorrect);
  const selectedOption = currentQ.options.find(o => o.id === selectedOptionId);
  const isCorrect = selectedOption?.isCorrect ?? false;
  const stats = getTopicStats(topic);
  const isAllAnswered = Object.keys(answers).length === questions.length;

  return `
    <div class="space-y-6">
      
      <!-- Cabeçalho do Quiz Isolado -->
      <div class="bg-[#001940] text-white rounded-2xl p-5 sm:p-6 shadow-xl border-t-4 border-[#fb1504]">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          <div class="flex items-center gap-3">
            <button 
              id="exit-quiz-btn"
              class="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer border border-white/15"
              title="Sair do Quiz e voltar para o conteúdo didático"
            >
              <i class="fa-solid fa-arrow-left"></i>
              <span>Sair do Quiz</span>
            </button>

            <div>
              <div class="flex items-center gap-2">
                <span class="text-[10px] font-extrabold uppercase bg-[#fb1504] px-2 py-0.5 rounded text-white tracking-wider">
                  <i class="fa-solid fa-lock text-[9px] mr-1"></i> Quiz em Andamento
                </span>
                <span class="text-xs text-[#d7d9dd]/70 font-semibold">• Conteúdo Oculto</span>
              </div>
              <h2 class="text-xl sm:text-2xl font-black text-white mt-0.5">${topic.title}</h2>
            </div>
          </div>

          <!-- Placar de Acertos e Botão Reiniciar -->
          <div class="flex items-center gap-3">
            <div class="bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10 text-right">
              <span class="text-[10px] uppercase font-bold text-[#d7d9dd]/70 block">Acertos</span>
              <span class="text-sm font-extrabold text-white">${stats.correctCount} / ${questions.length}</span>
            </div>
            
            <button 
              id="reset-topic-quiz-btn"
              class="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-[#d7d9dd] hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
              title="Reiniciar respostas deste quiz"
            >
              <i class="fa-solid fa-rotate-left"></i>
              <span class="hidden sm:inline">Reiniciar</span>
            </button>
          </div>

        </div>

        <!-- Barra de Progresso com as 10 Questões (Stepper) -->
        <div class="mt-5 pt-4 border-t border-white/10 space-y-2">
          <div class="flex items-center justify-between text-xs font-bold text-[#d7d9dd]">
            <span>Questão ${currentQIndex + 1} de ${questions.length}</span>
            <span>${Math.round(((currentQIndex + 1) / questions.length) * 100)}%</span>
          </div>
          
          <div class="grid grid-cols-10 gap-1.5">
            ${questions.map((q, idx) => {
              const qAns = answers[q.id];
              const qCorrect = q.options.find(o => o.id === qAns)?.isCorrect;
              let dotColor = 'bg-white/20';
              if (qAns) {
                dotColor = qCorrect ? 'bg-emerald-500' : 'bg-[#fb1504]';
              }
              if (idx === currentQIndex) {
                dotColor += ' ring-2 ring-white scale-110';
              }

              return `
                <button 
                  data-jump-question="${idx}"
                  class="h-2.5 rounded-full transition-all cursor-pointer ${dotColor}"
                  title="Ir para questão ${idx + 1}"
                ></button>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <!-- Caixa da Pergunta Ativa -->
      <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#253955]/10 space-y-6">
        
        <!-- Enunciado da Frase -->
        <div class="p-5 sm:p-6 rounded-2xl bg-[#001940] text-white shadow-inner">
          <span class="text-[10px] font-black text-[#fb1504] uppercase tracking-wider block mb-1">Preencha a lacuna com a opção correta:</span>
          <p class="text-xl sm:text-2xl font-black text-white leading-relaxed">
            ${currentQ.sentence}
          </p>
          <p class="text-xs sm:text-sm text-[#d7d9dd]/80 italic mt-2.5 font-medium flex items-center gap-1.5">
            <i class="fa-solid fa-language text-[#fb1504]"></i>
            <span>${currentQ.sentenceTranslation}</span>
          </p>
        </div>

        <!-- Grade com as Alternativas -->
        <div class="space-y-2.5">
          <span class="text-xs font-bold text-[#253955] uppercase tracking-wider block">Escolha uma alternativa:</span>
          
          <div class="grid grid-cols-1 gap-2.5">
            ${currentQ.options.map((option) => {
              const isThisSelected = selectedOptionId === option.id;
              let btnStyle = 'bg-[#f8f9fa] hover:bg-[#d7d9dd]/50 text-[#001940] border-[#253955]/20';
              let badgeStyle = 'bg-[#001940] text-white';

              if (isAnswered) {
                if (option.isCorrect) {
                  btnStyle = 'bg-emerald-50 text-emerald-950 border-emerald-500 ring-2 ring-emerald-500/20 font-bold';
                  badgeStyle = 'bg-emerald-600 text-white';
                } else if (isThisSelected && !option.isCorrect) {
                  btnStyle = 'bg-red-50 text-red-950 border-[#fb1504] ring-2 ring-[#fb1504]/20 font-bold';
                  badgeStyle = 'bg-[#fb1504] text-white';
                } else {
                  btnStyle = 'opacity-50 bg-[#f8f9fa] border-gray-200 text-gray-400';
                  badgeStyle = 'bg-gray-400 text-white';
                }
              }

              return `
                <button
                  data-option-id="${option.id}"
                  ${isAnswered ? 'disabled' : ''}
                  class="quiz-option-btn w-full p-4 rounded-xl text-left border flex items-center justify-between gap-3 transition-all cursor-pointer ${btnStyle}"
                >
                  <div class="flex items-center gap-3">
                    <span class="w-7 h-7 rounded-lg font-black text-xs flex items-center justify-center shrink-0 ${badgeStyle}">
                      ${option.label}
                    </span>
                    <span class="text-sm sm:text-base font-extrabold">${option.text}</span>
                  </div>

                  ${isAnswered ? `
                    ${option.isCorrect ? '<i class="fa-solid fa-circle-check text-emerald-600 text-lg"></i>' : ''}
                    ${isThisSelected && !option.isCorrect ? '<i class="fa-solid fa-circle-xmark text-[#fb1504] text-lg"></i>' : ''}
                  ` : ''}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Caixa de Feedback Instantâneo após Resposta -->
        ${isAnswered ? `
          <div class="p-5 rounded-xl border animate-fadeIn space-y-2 ${
            isCorrect ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-red-500/10 border-red-500/30'
          }">
            <div class="flex items-center justify-between">
              <span class="text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                isCorrect ? 'text-emerald-700' : 'text-[#fb1504]'
              }">
                <i class="${isCorrect ? 'fa-solid fa-circle-check' : 'fa-solid fa-triangle-exclamation'}"></i>
                <span>${isCorrect ? 'Resposta Correta!' : 'Resposta Incorreta'}</span>
              </span>
              <span class="text-xs font-bold text-[#001940]">
                Gabarito: (${correctOption?.label}) ${correctOption?.text}
              </span>
            </div>

            <p class="text-xs sm:text-sm text-[#001940] font-medium leading-relaxed">
              ${selectedOption?.explanation || currentQ.correctExplanation}
            </p>

            ${currentQ.generalTip ? `
              <div class="text-[11px] text-[#253955] font-semibold pt-1 border-t border-black/10 flex items-center gap-1.5">
                <i class="fa-solid fa-lightbulb text-amber-600"></i>
                <span>${currentQ.generalTip}</span>
              </div>
            ` : ''}
          </div>
        ` : ''}

        <!-- Botões de Navegação Entre Questões -->
        <div class="pt-4 border-t border-[#253955]/15 flex items-center justify-between gap-3">
          <button
            id="prev-question-btn"
            ${currentQIndex === 0 ? 'disabled class="opacity-40 cursor-not-allowed"' : 'class="cursor-pointer"'}
            class="px-4 py-2.5 rounded-xl border border-[#253955]/20 font-bold text-xs text-[#001940] hover:bg-[#d7d9dd]/50 flex items-center gap-2 transition-colors"
          >
            <i class="fa-solid fa-arrow-left"></i>
            <span>Anterior</span>
          </button>

          ${currentQIndex < questions.length - 1 ? `
            <button
              id="next-question-btn"
              class="px-5 py-2.5 rounded-xl bg-[#001940] hover:bg-[#253955] text-white font-extrabold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <span>Próxima Questão</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          ` : `
            <button
              id="finish-quiz-btn"
              class="px-6 py-2.5 rounded-xl bg-[#fb1504] hover:bg-[#b92c21] text-white font-extrabold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <i class="fa-solid fa-trophy"></i>
              <span>Ver Resultado Final</span>
            </button>
          `}
        </div>

      </div>

      <!-- Painel de Conclusão do Módulo (Exibido ao responder as 10 perguntas) -->
      ${isAllAnswered ? `
        <div class="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#001940] to-[#253955] text-white shadow-xl text-center space-y-4">
          <div class="w-16 h-16 rounded-full bg-[#fb1504] text-white flex items-center justify-center text-3xl mx-auto shadow-lg">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <div>
            <h3 class="text-2xl font-black text-white">Quiz Concluído!</h3>
            <p class="text-sm text-[#d7d9dd]/90 mt-1 font-medium">
              Você acertou <strong class="text-white">${stats.correctCount}</strong> de <strong class="text-white">${questions.length}</strong> questões (${Math.round((stats.correctCount / questions.length) * 100)}%).
            </p>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button 
              id="review-content-summary-btn"
              class="px-5 py-2.5 rounded-xl bg-white text-[#001940] hover:bg-[#d7d9dd] font-extrabold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <i class="fa-solid fa-book-open text-[#fb1504]"></i>
              <span>Revisar Conteúdo do Módulo</span>
            </button>
            <button 
              id="restart-quiz-summary-btn"
              class="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
            >
              <i class="fa-solid fa-rotate-left"></i>
              <span>Refazer este Quiz</span>
            </button>
            <button 
              id="next-topic-summary-btn"
              class="px-5 py-2.5 rounded-xl bg-[#fb1504] hover:bg-[#b92c21] text-white font-extrabold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <span>Próximo Módulo</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      ` : ''}

    </div>
  `;
}

/**
 * Renderiza o Rodapé da página (Footer).
 */
function renderFooter(): string {
  return `
    <footer class="bg-[#001940] text-white border-t border-[#253955]/30 mt-16 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#d7d9dd]/70">
        
        <!-- ============================================================= -->
        <!-- 📍 LOCAL 3: IMAGEM DA LOGO NO RODAPÉ (FOOTER)                 -->
        <!-- Arquivo referenciado via BRAND_ASSETS.footerLogo              -->
        <!-- ============================================================= -->
        <div class="flex items-center gap-3">
          <div class="bg-white rounded-lg px-2.5 py-1 shadow-sm flex items-center justify-center">
            <img 
              src="${BRAND_ASSETS.footerLogo}" 
              alt="Minds English School Logo" 
              class="h-6 w-auto object-contain"
              referrerpolicy="no-referrer"
            />
          </div>
          <span class="text-[#d7d9dd]/80 font-medium hidden sm:inline">• Método Direto & Dinâmico</span>
        </div>
        <p class="font-medium text-center sm:text-right">10 Módulos de Gramática A1 com 100 Questões Práticas</p>
      </div>
    </footer>
  `;
}

// =============================================================================
// 🚀 MONTAGEM PRINCIPAL E VINCULAÇÃO DE EVENTOS DO DOM
// =============================================================================

/**
 * Função principal de renderização que reconstrói a árvore do DOM
 * de acordo com as alterações de estado da aplicação.
 */
function renderApp() {
  const root = document.getElementById('app');
  if (!root) return;

  const currentTopic = findTopicById(state.selectedTopicId) || allGrammarTopics[0];

  const html = `
    <div class="min-h-screen flex flex-col bg-[#d7d9dd] text-[#001940]">
      ${renderHeader()}

      <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        
        <!-- ============================================================= -->
        <!-- 📍 LOCAL 2: IMAGEM DA LOGO NO TOPO (HERO ANTES DOS MÓDULOS)   -->
        <!-- Arquivo referenciado via BRAND_ASSETS.heroTopLogo             -->
        <!-- ============================================================= -->
        <div class="w-full rounded-2xl overflow-hidden shadow-md border border-[#253955]/15 bg-white flex flex-col items-center justify-center py-6 px-4 sm:py-8 sm:px-6 text-center">
          <img 
            src="${BRAND_ASSETS.heroTopLogo}" 
            alt="Minds English School" 
            class="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
            referrerpolicy="no-referrer"
          />
        </div>

        <!-- Se estiver em Modo Estudo: mostra o seletor de módulos e as regras -->
        ${state.viewMode === 'study' ? `
          <!-- Barra de Seleção de Módulos -->
          ${renderTopicSelector()}

          <!-- Visualização Didática do Tópico -->
          <div id="view-container">
            ${renderGrammarView(currentTopic)}
          </div>
        ` : `
          <!-- Se estiver em Modo Quiz: tela isolada de perguntas -->
          <div id="view-container">
            ${renderQuizView(currentTopic)}
          </div>
        `}

      </main>

      ${renderFooter()}
    </div>
  `;

  root.innerHTML = html;
  bindEvents();
}

/**
 * Vincula todos os ouvintes de eventos interativos (cliques, seleções e navegação).
 */
function bindEvents() {
  // Clique no botão da logo na Navbar: Retorna ao primeiro módulo em modo estudo
  document.getElementById('brand-logo-btn')?.addEventListener('click', () => {
    state.selectedTopicId = allGrammarTopics[0].id;
    state.viewMode = 'study';
    state.currentQuestionIndex = 0;
    renderApp();
  });

  // Botões de seleção de tópicos na grade
  document.querySelectorAll('.topic-select-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const topicId = (e.currentTarget as HTMLElement).dataset.topicId;
      if (topicId) {
        state.selectedTopicId = topicId;
        state.currentQuestionIndex = 0;
        state.viewMode = 'study';
        renderApp();
      }
    });
  });

  // Entrar no Modo Quiz (Botão do topo e botão do final da página)
  document.getElementById('start-quiz-top-btn')?.addEventListener('click', () => {
    state.viewMode = 'quiz';
    renderApp();
  });

  document.getElementById('start-quiz-bottom-btn')?.addEventListener('click', () => {
    state.viewMode = 'quiz';
    renderApp();
  });

  // Sair do Modo Quiz (Voltar para o conteúdo didático)
  document.getElementById('exit-quiz-btn')?.addEventListener('click', () => {
    state.viewMode = 'study';
    renderApp();
  });

  // Revisar conteúdo a partir do card de conclusão
  document.getElementById('review-content-summary-btn')?.addEventListener('click', () => {
    state.viewMode = 'study';
    renderApp();
  });

  // Reiniciar quiz do tópico atual
  document.getElementById('reset-topic-quiz-btn')?.addEventListener('click', () => {
    if (confirm('Deseja reiniciar as respostas deste quiz?')) {
      delete state.userAnswers[state.selectedTopicId];
      saveAnswersToStorage(state.userAnswers);
      state.currentQuestionIndex = 0;
      renderApp();
    }
  });

  // Clique em uma alternativa do Quiz
  document.querySelectorAll('.quiz-option-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const optionId = (e.currentTarget as HTMLElement).dataset.optionId;
      if (!optionId) return;

      const currentTopic = findTopicById(state.selectedTopicId);
      if (!currentTopic) return;

      const currentQ = currentTopic.quiz[state.currentQuestionIndex];
      if (!currentQ) return;

      if (!state.userAnswers[state.selectedTopicId]) {
        state.userAnswers[state.selectedTopicId] = {};
      }

      state.userAnswers[state.selectedTopicId][currentQ.id] = optionId;
      saveAnswersToStorage(state.userAnswers);
      renderApp();
    });
  });

  // Clique nas bolinhas de progresso (Stepper) para saltar para uma pergunta
  document.querySelectorAll('[data-jump-question]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const qIdx = parseInt((e.currentTarget as HTMLElement).dataset.jumpQuestion || '0', 10);
      state.currentQuestionIndex = qIdx;
      renderApp();
    });
  });

  // Botão de pergunta anterior
  document.getElementById('prev-question-btn')?.addEventListener('click', () => {
    if (state.currentQuestionIndex > 0) {
      state.currentQuestionIndex--;
      renderApp();
    }
  });

  // Botão de próxima pergunta
  document.getElementById('next-question-btn')?.addEventListener('click', () => {
    const currentTopic = findTopicById(state.selectedTopicId);
    if (currentTopic && state.currentQuestionIndex < currentTopic.quiz.length - 1) {
      state.currentQuestionIndex++;
      renderApp();
    }
  });

  // Botão de ver resultado final
  document.getElementById('finish-quiz-btn')?.addEventListener('click', () => {
    renderApp();
  });

  // Botão de refazer quiz a partir do painel de conclusão
  document.getElementById('restart-quiz-summary-btn')?.addEventListener('click', () => {
    delete state.userAnswers[state.selectedTopicId];
    saveAnswersToStorage(state.userAnswers);
    state.currentQuestionIndex = 0;
    renderApp();
  });

  // Botão de avançar para o próximo módulo de gramática
  document.getElementById('next-topic-summary-btn')?.addEventListener('click', () => {
    const currentIndex = allGrammarTopics.findIndex(t => t.id === state.selectedTopicId);
    const nextTopic = allGrammarTopics[(currentIndex + 1) % allGrammarTopics.length];
    state.selectedTopicId = nextTopic.id;
    state.currentQuestionIndex = 0;
    state.viewMode = 'study';
    renderApp();
  });
}

// Inicialização da aplicação ao carregar o documento
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
renderApp();
