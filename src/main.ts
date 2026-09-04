// =============================================================================
// 📘 MINDS ENGLISH SCHOOL - PLATAFORMA DE GRAMÁTICA A1 & QUIZZES (JS/TS)
// =============================================================================
// Código em JavaScript/TypeScript padrão (Vanilla JS com tipagem segura).
// Utiliza HTML semântico e CSS normal (definido em /src/index.css).
// 
// ✨ RECURSO: Gerenciamento e troca fácil de fotos da Logo e da Barra de Navegação
// Você pode trocar as imagens diretamente no código abaixo OU através do botão
// "Personalizar Fotos / Logos" na barra superior da aplicação!
// =============================================================================

import './index.css';
import { allGrammarTopics, findTopicById } from './data/grammarData';
import { GrammarTopic } from './types';

// =============================================================================
// 📌 1. CONFIGURAÇÃO DE IMAGENS PADRÃO (DEFAULT BRAND ASSETS)
// =============================================================================
/**
 * ONDE COLOCAR SEUS ARQUIVOS DE IMAGEM:
 * -----------------------------------------------------------------------------
 * 1. Coloque seus arquivos na pasta pública do projeto: `/public/`
 *    Exemplo: 
 *      /public/minha-logo-navbar.png
 *      /public/meu-banner-hero.jpg
 *      /public/minha-logo-footer.svg
 * 
 * 2. Atualize os caminhos abaixo ou utilize o botão visual "Alterar Fotos" na interface.
 *    No Vite, arquivos em `/public/` são acessíveis via `/nome-do-arquivo.extensao`.
 * -----------------------------------------------------------------------------
 */
export const DEFAULT_IMAGES = {
  // Logo exibida dentro da Barra de Navegação superior (fundo branco)
  navbarLogo: '/minds-logo.svg',

  // Logo / Banner principal exibido no topo (antes dos 10 módulos de gramática)
  heroLogo: '/minds-logo.svg',

  // Logo exibida no rodapé (footer) da página
  footerLogo: '/minds-logo.svg',
};

// Chaves de armazenamento no LocalStorage do navegador
const STORAGE_KEYS = {
  answers: 'minds_grammar_quiz_answers_v3',
  customImages: 'minds_custom_brand_images_v3',
};

// =============================================================================
// 🖼️ 2. GERENCIADOR DE IMAGENS CUSTOMIZADAS (LOCALSTORAGE + FALLBACK)
// =============================================================================
interface BrandImages {
  navbarLogo: string;
  heroLogo: string;
  footerLogo: string;
}

/**
 * Carrega as imagens configuradas (ou as salvas pelo usuário no LocalStorage).
 */
function loadBrandImages(): BrandImages {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.customImages);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        navbarLogo: parsed.navbarLogo || DEFAULT_IMAGES.navbarLogo,
        heroLogo: parsed.heroLogo || DEFAULT_IMAGES.heroLogo,
        footerLogo: parsed.footerLogo || DEFAULT_IMAGES.footerLogo,
      };
    }
  } catch (error) {
    console.error('Erro ao carregar imagens do LocalStorage:', error);
  }
  return { ...DEFAULT_IMAGES };
}

/**
 * Salva as imagens customizadas no LocalStorage.
 */
function saveBrandImages(images: BrandImages) {
  try {
    localStorage.setItem(STORAGE_KEYS.customImages, JSON.stringify(images));
  } catch (error) {
    console.error('Erro ao salvar imagens no LocalStorage:', error);
  }
}

// Imagens ativas na aplicação
let currentImages: BrandImages = loadBrandImages();

// =============================================================================
// 🗄️ 3. ESTADO GLOBAL DA APLICAÇÃO (STATE MANAGEMENT)
// =============================================================================
interface AppState {
  selectedTopicId: string;
  viewMode: 'study' | 'quiz';
  currentQuestionIndex: number;
  userAnswers: Record<string, Record<number, string>>;
  isImageModalOpen: boolean;
}

/**
 * Carrega as respostas dos testes salvas no navegador.
 */
function loadUserAnswers(): Record<string, Record<number, string>> {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.answers);
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.error('Erro ao carregar respostas do usuário:', error);
    return {};
  }
}

/**
 * Salva as respostas dos testes no LocalStorage.
 */
function saveUserAnswers(answers: Record<string, Record<number, string>>) {
  try {
    localStorage.setItem(STORAGE_KEYS.answers, JSON.stringify(answers));
  } catch (error) {
    console.error('Erro ao persistir respostas:', error);
  }
}

// Estado reativo da aplicação
const state: AppState = {
  selectedTopicId: allGrammarTopics[0]?.id || 'do-make',
  viewMode: 'study',
  currentQuestionIndex: 0,
  userAnswers: loadUserAnswers(),
  isImageModalOpen: false,
};

// Ícone padrão padronizado (caderno de estudos) para todos os módulos
const NOTEBOOK_ICON = 'fa-solid fa-book-bookmark';

// =============================================================================
// 📊 4. CÁLCULO DE ESTATÍSTICAS E PROGRESSO
// =============================================================================
/**
 * Retorna as estatísticas de um tópico específico.
 */
function getTopicStats(topic: GrammarTopic) {
  const topicAnswers = state.userAnswers[topic.id] || {};
  const answeredCount = Object.keys(topicAnswers).length;
  let correctCount = 0;

  topic.quiz.forEach((question) => {
    const selectedOptionId = topicAnswers[question.id];
    if (selectedOptionId) {
      const option = question.options.find((opt) => opt.id === selectedOptionId);
      if (option?.isCorrect) {
        correctCount++;
      }
    }
  });

  const isCompleted = answeredCount === topic.quiz.length;
  return { answeredCount, correctCount, totalQuestions: topic.quiz.length, isCompleted };
}

/**
 * Retorna o progresso geral somando os 10 módulos.
 */
function getGlobalStats() {
  let totalScore = 0;
  let completedTopics = 0;
  let totalAnswered = 0;
  const totalQuestions = allGrammarTopics.reduce((acc, topic) => acc + topic.quiz.length, 0);

  allGrammarTopics.forEach((topic) => {
    const stats = getTopicStats(topic);
    totalScore += stats.correctCount;
    totalAnswered += stats.answeredCount;
    if (stats.isCompleted) completedTopics++;
  });

  return { totalScore, completedTopics, totalAnswered, totalQuestions };
}

// =============================================================================
// 🖥️ 5. RENDERIZADORES DE INTERFACE (HTML NORMAL COM CLASSES CSS PADRÃO)
// =============================================================================

/**
 * Renderiza a Barra de Navegação Superior (Navbar).
 */
function renderNavbar(): string {
  const global = getGlobalStats();
  const isQuiz = state.viewMode === 'quiz';

  return `
    <header class="minds-navbar">
      <div class="navbar-inner">
        
        <!-- Logo e Marca Minds -->
        <div class="brand-wrapper" id="nav-brand-btn" title="Voltar ao início">
          <div class="navbar-logo-badge">
            <img 
              src="${currentImages.navbarLogo}" 
              alt="Minds English School" 
              class="navbar-logo-img" 
              id="rendered-navbar-logo"
            />
          </div>
          <div class="brand-details">
            <span class="brand-level-pill">A1 Essential</span>
            <span class="brand-subtitle">Gramática & Quizzes</span>
          </div>
        </div>

        <!-- Ações e Indicadores -->
        <div class="navbar-actions">
          ${isQuiz ? `
            <div class="progress-pill" style="border-color: rgba(251, 21, 4, 0.4);">
              <div class="progress-pill-icon" style="background-color: rgba(251, 21, 4, 0.2); color: #fb1504;">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <div>
                <span class="progress-pill-label" style="color: #fb1504;">Modo Ativo</span>
                <span class="progress-pill-value">Quiz do Módulo</span>
              </div>
            </div>
          ` : `
            <div class="progress-pill">
              <div class="progress-pill-icon">
                <i class="fa-solid fa-trophy"></i>
              </div>
              <div>
                <span class="progress-pill-label">Progresso Geral</span>
                <span class="progress-pill-value">${global.completedTopics}/${allGrammarTopics.length} Módulos (${global.totalScore} pts)</span>
              </div>
            </div>
          `}

          <!-- Botão para abrir modal de troca de imagens da Logo e Navbar -->
          <button class="btn-customize-images" id="btn-open-image-modal" title="Alterar as fotos da Navbar e da Logo">
            <i class="fa-solid fa-images"></i>
            <span>Alterar Fotos</span>
          </button>
        </div>

      </div>
    </header>
  `;
}

/**
 * Renderiza o Banner de Topo com a Logo Principal (Hero Banner).
 */
function renderHeroBanner(): string {
  return `
    <section class="hero-banner-card">
      <button class="hero-change-btn" id="hero-quick-change-btn" title="Alterar esta foto da Logo">
        <i class="fa-solid fa-camera"></i>
        <span>Trocar Foto</span>
      </button>

      <img 
        src="${currentImages.heroLogo}" 
        alt="Minds English School" 
        class="hero-logo-img"
        id="rendered-hero-logo"
      />
    </section>
  `;
}

/**
 * Renderiza o Seletor de Tópicos com os 10 módulos de gramática A1.
 */
function renderTopicSelector(): string {
  return `
    <section class="topic-selector-card">
      <div class="topic-selector-header">
        <h2>
          <i class="fa-solid fa-book-open"></i>
          <span>Selecione um Módulo para Estudar</span>
        </h2>
        <p>10 tópicos fundamentais da metodologia Minds com regras simples e testes práticos</p>
      </div>

      <div class="topic-grid">
        ${allGrammarTopics.map((topic, index) => {
          const isSelected = topic.id === state.selectedTopicId;
          const stats = getTopicStats(topic);

          return `
            <button 
              class="topic-btn ${isSelected ? 'active' : ''}" 
              data-topic-id="${topic.id}"
            >
              <div class="topic-btn-top">
                <div class="topic-icon-badge">
                  <i class="${NOTEBOOK_ICON}"></i>
                </div>
                ${stats.isCompleted ? `
                  <span class="topic-done-tag">
                    <i class="fa-solid fa-check"></i> ${stats.correctCount}/10
                  </span>
                ` : `
                  <span class="topic-num-tag">#${index + 1}</span>
                `}
              </div>

              <div>
                <div class="topic-title">${topic.title}</div>
                <div class="topic-desc">${topic.shortDescription}</div>
              </div>
            </button>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

/**
 * Renderiza a Tela de Estudo Didático (Study View) do tópico selecionado.
 */
function renderStudyView(topic: GrammarTopic): string {
  return `
    <div class="study-container">
      
      <!-- Cabeçalho do Módulo com Botão para Iniciar Quiz -->
      <div class="study-header-card">
        <div class="study-header-info">
          <div class="study-header-icon">
            <i class="${NOTEBOOK_ICON}"></i>
          </div>
          <div>
            <span class="study-level-badge">Nível ${topic.level} • 10 Questões</span>
            <h1 class="study-header-title">${topic.title}</h1>
          </div>
        </div>

        <button class="btn-start-quiz" id="btn-start-quiz-top">
          <i class="fa-solid fa-graduation-cap"></i>
          <span>Fazer Quiz do Módulo (10 Questões)</span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <!-- Cartão com as Regras de Estudo -->
      <div class="study-card">
        
        <!-- 1. Regra de Ouro Minds -->
        <div class="golden-rule-box">
          <div class="golden-rule-icon">
            <i class="fa-solid fa-lightbulb"></i>
          </div>
          <div>
            <span class="golden-rule-tag">Regra de Ouro Minds</span>
            <div class="golden-rule-title">${topic.a1Explanation.quickGoldenRule}</div>
            <div class="golden-rule-desc">${topic.a1Explanation.simpleConcept}</div>
          </div>
        </div>

        <!-- 2. Regras Estruturais e Como Usar -->
        <div>
          <div class="section-heading">
            <i class="fa-solid fa-list-check"></i>
            <span>Estrutura e Como Usar</span>
          </div>

          <div class="rules-grid">
            ${topic.a1Explanation.rules.map((rule) => `
              <div class="rule-box">
                <div>
                  <div class="rule-box-header">
                    <span class="rule-title">${rule.title}</span>
                    ${rule.badge ? `<span class="rule-badge">${rule.badge}</span>` : ''}
                  </div>
                  <p class="rule-desc">${rule.description}</p>
                </div>

                ${rule.bullets ? `
                  <ul class="rule-bullets">
                    ${rule.bullets.map(bullet => `
                      <li>
                        <i class="fa-solid fa-circle-check"></i>
                        <span>${bullet}</span>
                      </li>
                    `).join('')}
                  </ul>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 3. Macete Mental Minds -->
        ${topic.a1Explanation.memoryTip ? `
          <div class="memory-tip-card">
            <div class="memory-tip-icon">
              <i class="fa-solid fa-brain"></i>
            </div>
            <div>
              <span class="memory-tip-tag">Macete Mental Minds</span>
              <div class="memory-tip-text">${topic.a1Explanation.memoryTip}</div>
            </div>
          </div>
        ` : ''}

        <!-- 4. Quadro Comparativo -->
        ${topic.a1Explanation.comparisonTable ? `
          <div>
            <div class="section-heading">
              <i class="fa-solid fa-table-columns"></i>
              <span>Quadro Comparativo</span>
            </div>

            <div class="comparison-table-wrap">
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>${topic.a1Explanation.comparisonTable.col1Title}</th>
                    <th>${topic.a1Explanation.comparisonTable.col2Title}</th>
                  </tr>
                </thead>
                <tbody>
                  ${topic.a1Explanation.comparisonTable.rows.map(row => `
                    <tr>
                      <td>${row.col1}</td>
                      <td>
                        ${row.col2}
                        ${row.note ? `<span class="table-note">• ${row.note}</span>` : ''}
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        ` : ''}

        <!-- 5. Exemplos do Dia a Dia -->
        <div>
          <div class="section-heading">
            <i class="fa-solid fa-comments"></i>
            <span>Exemplos Práticos do Dia a Dia</span>
          </div>

          <div class="examples-grid">
            ${topic.examples.map(ex => `
              <div class="example-box">
                <div class="example-en">${ex.english}</div>
                <div class="example-pt">${ex.portuguese}</div>
                ${ex.note ? `<div class="example-note">• ${ex.note}</div>` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 6. Chamada Inferior para o Quiz -->
        <div class="study-cta-footer">
          <div class="study-cta-text">
            <h4>Pronto para testar seus conhecimentos?</h4>
            <p>Ao iniciar o quiz, o conteúdo teórico ficará oculto para você testar sua fixação real.</p>
          </div>
          <button class="btn-start-quiz" id="btn-start-quiz-bottom">
            <i class="fa-solid fa-play"></i>
            <span>Iniciar Quiz (10 Questões)</span>
          </button>
        </div>

      </div>
    </div>
  `;
}

/**
 * Renderiza o Ambiente de Quiz Isolado (Quiz View).
 */
function renderQuizView(topic: GrammarTopic): string {
  const currentIdx = state.currentQuestionIndex;
  const questions = topic.quiz;
  const currentQ = questions[currentIdx];
  const topicAnswers = state.userAnswers[topic.id] || {};
  const selectedOptionId = topicAnswers[currentQ.id];
  const isAnswered = Boolean(selectedOptionId);
  const correctOption = currentQ.options.find(o => o.isCorrect);
  const selectedOption = currentQ.options.find(o => o.id === selectedOptionId);
  const isCorrect = selectedOption?.isCorrect ?? false;
  const stats = getTopicStats(topic);
  const isCompleted = Object.keys(topicAnswers).length === questions.length;

  return `
    <div class="quiz-container">
      
      <!-- Cabeçalho do Quiz com Navegação e Pontuação -->
      <div class="quiz-header-card">
        <div class="quiz-header-top">
          <button class="btn-exit-quiz" id="btn-exit-quiz">
            <i class="fa-solid fa-arrow-left"></i>
            <span>Sair do Quiz</span>
          </button>

          <div class="quiz-title-wrap">
            <span class="quiz-status-tag">
              <i class="fa-solid fa-lock" style="font-size: 9px; margin-right: 4px;"></i> Quiz Ativo (Modo Avaliação)
            </span>
            <h2>${topic.title}</h2>
          </div>

          <div style="display: flex; align-items: center; gap: 10px;">
            <div class="quiz-score-badge">
              <span class="quiz-score-label">Acertos</span>
              <span class="quiz-score-num">${stats.correctCount} / ${questions.length}</span>
            </div>

            <button class="btn-exit-quiz" id="btn-reset-quiz" title="Limpar respostas deste tópico">
              <i class="fa-solid fa-rotate-left"></i>
              <span>Reiniciar</span>
            </button>
          </div>
        </div>

        <!-- Stepper de 10 Questões -->
        <div class="stepper-wrap">
          <div class="stepper-header">
            <span>Questão ${currentIdx + 1} de ${questions.length}</span>
            <span>${Math.round(((currentIdx + 1) / questions.length) * 100)}%</span>
          </div>

          <div class="stepper-dots-grid">
            ${questions.map((q, idx) => {
              const qAns = topicAnswers[q.id];
              const qCorrect = q.options.find(o => o.id === qAns)?.isCorrect;
              let dotClass = 'stepper-dot-btn';
              if (idx === currentIdx) dotClass += ' current';
              if (qAns) {
                dotClass += qCorrect ? ' correct' : ' wrong';
              }
              return `
                <button 
                  class="${dotClass}" 
                  data-jump-idx="${idx}" 
                  title="Pular para a questão ${idx + 1}"
                ></button>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <!-- Cartão da Questão Atual -->
      <div class="question-card">
        
        <!-- Frase em Destaque -->
        <div class="sentence-display-box">
          <span class="sentence-instruction">Complete a lacuna com a opção correta:</span>
          <div class="sentence-text">${currentQ.sentence}</div>
          <div class="sentence-trans">
            <i class="fa-solid fa-language"></i>
            <span>${currentQ.sentenceTranslation}</span>
          </div>
        </div>

        <!-- Lista de Alternativas (A, B, C, D, E) -->
        <div class="options-list">
          <span class="options-label">Selecione uma resposta:</span>

          ${currentQ.options.map((option) => {
            const isThisSelected = selectedOptionId === option.id;
            let optionClass = 'option-btn';

            if (isAnswered) {
              if (option.isCorrect) {
                optionClass += ' correct-choice';
              } else if (isThisSelected && !option.isCorrect) {
                optionClass += ' wrong-choice';
              } else {
                optionClass += ' dimmed';
              }
            }

            return `
              <button 
                class="${optionClass}" 
                data-option-id="${option.id}" 
                ${isAnswered ? 'disabled' : ''}
              >
                <div class="option-left">
                  <div class="option-letter-badge">${option.label}</div>
                  <div class="option-text">${option.text}</div>
                </div>

                ${isAnswered ? `
                  ${option.isCorrect ? '<i class="fa-solid fa-circle-check" style="color: #059669; font-size: 18px;"></i>' : ''}
                  ${isThisSelected && !option.isCorrect ? '<i class="fa-solid fa-circle-xmark" style="color: #fb1504; font-size: 18px;"></i>' : ''}
                ` : ''}
              </button>
            `;
          }).join('')}
        </div>

        <!-- Feedback Instantâneo após Responder -->
        ${isAnswered ? `
          <div class="feedback-box ${isCorrect ? 'correct' : 'wrong'}">
            <div class="feedback-top-row">
              <span class="feedback-status">
                <i class="${isCorrect ? 'fa-solid fa-circle-check' : 'fa-solid fa-triangle-exclamation'}"></i>
                <span>${isCorrect ? 'Resposta Correta!' : 'Resposta Incorreta'}</span>
              </span>
              <span class="feedback-answer-tag">
                Gabarito: (${correctOption?.label}) ${correctOption?.text}
              </span>
            </div>

            <div class="feedback-explanation">
              ${selectedOption?.explanation || currentQ.correctExplanation}
            </div>

            ${currentQ.generalTip ? `
              <div class="feedback-tip">
                <i class="fa-solid fa-lightbulb"></i>
                <span>Dica Minds: ${currentQ.generalTip}</span>
              </div>
            ` : ''}
          </div>
        ` : ''}

        <!-- Botões de Navegação entre Questões -->
        <div class="quiz-nav-row">
          <button 
            class="btn-nav-prev" 
            id="btn-nav-prev" 
            ${currentIdx === 0 ? 'disabled' : ''}
          >
            <i class="fa-solid fa-arrow-left"></i>
            <span>Anterior</span>
          </button>

          ${currentIdx < questions.length - 1 ? `
            <button class="btn-nav-next" id="btn-nav-next">
              <span>Próxima Questão</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          ` : `
            <button class="btn-nav-finish" id="btn-nav-finish">
              <i class="fa-solid fa-trophy"></i>
              <span>Ver Resultado Final</span>
            </button>
          `}
        </div>

      </div>

      <!-- Banner de Conclusão ao responder todas as 10 questões -->
      ${isCompleted ? `
        <div class="completion-banner">
          <div class="completion-trophy">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <div>
            <div class="completion-title">Quiz Concluído com Sucesso!</div>
            <p class="completion-desc">
              Você acertou <strong>${stats.correctCount}</strong> de <strong>${questions.length}</strong> questões (${Math.round((stats.correctCount / questions.length) * 100)}%).
            </p>
          </div>
          <div class="completion-actions">
            <button class="btn-completion-white" id="btn-completion-study">
              <i class="fa-solid fa-book-open" style="color: #fb1504;"></i>
              <span>Revisar Conteúdo Teórico</span>
            </button>
            <button class="btn-completion-ghost" id="btn-completion-retry">
              <i class="fa-solid fa-rotate-left"></i>
              <span>Refazer este Quiz</span>
            </button>
            <button class="btn-completion-red" id="btn-completion-next">
              <span>Ir para o Próximo Módulo</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      ` : ''}

    </div>
  `;
}

/**
 * Renderiza o Rodapé (Footer).
 */
function renderFooter(): string {
  return `
    <footer class="minds-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="footer-logo-badge">
            <img 
              src="${currentImages.footerLogo}" 
              alt="Minds English School" 
              class="footer-logo-img" 
              id="rendered-footer-logo"
            />
          </div>
          <span>• Método Direto, Dinâmico & Prático</span>
        </div>
        <div>
          <span>10 Módulos de Gramática A1 • 100 Exercícios com Gabarito Comentado</span>
        </div>
      </div>
    </footer>
  `;
}

/**
 * Renderiza o Modal de Personalização de Imagens (Navbar, Hero e Footer).
 */
function renderImageModal(): string {
  if (!state.isImageModalOpen) return '';

  return `
    <div class="modal-overlay open" id="image-modal-overlay">
      <div class="modal-dialog">
        
        <!-- Cabeçalho do Modal -->
        <div class="modal-header">
          <h3>
            <i class="fa-solid fa-images" style="color: #fb1504;"></i>
            <span>Personalizar Fotos da Logo e Navbar</span>
          </h3>
          <button class="modal-close-btn" id="btn-modal-close" title="Fechar modal">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <!-- Conteúdo do Modal -->
        <div class="modal-body">
          <div class="modal-instructions">
            Você pode escolher uma foto do seu computador (PNG, JPG, SVG, WebP) ou digitar o caminho/URL da imagem. As fotos ficam salvas no seu navegador.
          </div>

          <!-- 1. Logo da Barra de Navegação -->
          <div class="image-config-section">
            <div class="image-config-title">
              <i class="fa-solid fa-window-maximize" style="color: #001940;"></i>
              <span>1. Foto da Logo na Navbar (Barra Superior)</span>
            </div>
            <div class="image-preview-row">
              <div class="image-preview-box">
                <img src="${currentImages.navbarLogo}" id="preview-modal-navbar" alt="Navbar Preview" />
              </div>
              <div class="image-inputs-col">
                <label class="file-upload-btn-label">
                  <i class="fa-solid fa-upload"></i>
                  <span>Subir foto do computador</span>
                  <input type="file" accept="image/*" class="file-upload-input" id="input-file-navbar" />
                </label>
                <input 
                  type="text" 
                  class="url-text-input" 
                  id="input-url-navbar" 
                  placeholder="Ou digite o caminho/URL (ex: /minds-logo.svg)" 
                  value="${currentImages.navbarLogo}" 
                />
              </div>
            </div>
          </div>

          <!-- 2. Logo / Banner do Topo (Hero) -->
          <div class="image-config-section">
            <div class="image-config-title">
              <i class="fa-solid fa-image" style="color: #001940;"></i>
              <span>2. Foto da Logo / Banner do Topo (Hero)</span>
            </div>
            <div class="image-preview-row">
              <div class="image-preview-box">
                <img src="${currentImages.heroLogo}" id="preview-modal-hero" alt="Hero Preview" />
              </div>
              <div class="image-inputs-col">
                <label class="file-upload-btn-label">
                  <i class="fa-solid fa-upload"></i>
                  <span>Subir foto do computador</span>
                  <input type="file" accept="image/*" class="file-upload-input" id="input-file-hero" />
                </label>
                <input 
                  type="text" 
                  class="url-text-input" 
                  id="input-url-hero" 
                  placeholder="Ou digite o caminho/URL (ex: /minds-logo.svg)" 
                  value="${currentImages.heroLogo}" 
                />
              </div>
            </div>
          </div>

          <!-- 3. Logo do Rodapé -->
          <div class="image-config-section">
            <div class="image-config-title">
              <i class="fa-solid fa-shoe-prints" style="color: #001940;"></i>
              <span>3. Foto da Logo no Rodapé (Footer)</span>
            </div>
            <div class="image-preview-row">
              <div class="image-preview-box">
                <img src="${currentImages.footerLogo}" id="preview-modal-footer" alt="Footer Preview" />
              </div>
              <div class="image-inputs-col">
                <label class="file-upload-btn-label">
                  <i class="fa-solid fa-upload"></i>
                  <span>Subir foto do computador</span>
                  <input type="file" accept="image/*" class="file-upload-input" id="input-file-footer" />
                </label>
                <input 
                  type="text" 
                  class="url-text-input" 
                  id="input-url-footer" 
                  placeholder="Ou digite o caminho/URL (ex: /minds-logo.svg)" 
                  value="${currentImages.footerLogo}" 
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Rodapé do Modal -->
        <div class="modal-footer">
          <button class="btn-modal-reset" id="btn-modal-reset-defaults">
            <i class="fa-solid fa-rotate-left"></i>
            <span>Restaurar Padrão Minds</span>
          </button>

          <button class="btn-modal-save" id="btn-modal-save-changes">
            <i class="fa-solid fa-check"></i>
            <span>Salvar Alterações</span>
          </button>
        </div>

      </div>
    </div>
  `;
}

// =============================================================================
// 🚀 6. MONTAGEM DO APLICATIVO E EVENT LISTENERS DO DOM
// =============================================================================

/**
 * Função central de renderização do aplicativo.
 * Reconstrói a árvore do DOM com HTML e CSS padronizados.
 */
function renderApp() {
  const root = document.getElementById('app');
  if (!root) return;

  const currentTopic = findTopicById(state.selectedTopicId) || allGrammarTopics[0];

  const html = `
    <div class="app-container">
      ${renderNavbar()}

      <main class="main-content">
        <!-- Banner Hero com a Logo Principal -->
        ${renderHeroBanner()}

        <!-- Se estiver em modo Estudo: exibe Seletor e Conteúdo Didático -->
        ${state.viewMode === 'study' ? `
          ${renderTopicSelector()}
          <div id="view-content-area">
            ${renderStudyView(currentTopic)}
          </div>
        ` : `
          <!-- Se estiver em modo Quiz: tela de avaliação focada -->
          <div id="view-content-area">
            ${renderQuizView(currentTopic)}
          </div>
        `}
      </main>

      ${renderFooter()}

      <!-- Modal de troca de fotos -->
      ${renderImageModal()}
    </div>
  `;

  root.innerHTML = html;
  bindEventListeners();
}

/**
 * Conecta todos os eventos do DOM (Cliques, Seleções, Uploads de Arquivo).
 */
function bindEventListeners() {
  // 1. Clique na Logo da Navbar: Volta para a Home em modo estudo
  document.getElementById('nav-brand-btn')?.addEventListener('click', () => {
    state.selectedTopicId = allGrammarTopics[0].id;
    state.viewMode = 'study';
    state.currentQuestionIndex = 0;
    renderApp();
  });

  // 2. Abertura do Modal de Personalização de Imagens
  document.getElementById('btn-open-image-modal')?.addEventListener('click', () => {
    state.isImageModalOpen = true;
    renderApp();
  });

  document.getElementById('hero-quick-change-btn')?.addEventListener('click', () => {
    state.isImageModalOpen = true;
    renderApp();
  });

  // 3. Fechamento do Modal de Imagens
  document.getElementById('btn-modal-close')?.addEventListener('click', () => {
    state.isImageModalOpen = false;
    renderApp();
  });

  document.getElementById('image-modal-overlay')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      state.isImageModalOpen = false;
      renderApp();
    }
  });

  // 4. Manipuladores de Upload de Arquivos de Imagem (Leitura como Base64 / Data URL)
  function handleFileInput(inputElementId: string, previewImgId: string, urlInputId: string, targetKey: keyof BrandImages) {
    const fileInput = document.getElementById(inputElementId) as HTMLInputElement;
    fileInput?.addEventListener('change', (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target?.result as string;
          if (result) {
            currentImages[targetKey] = result;
            const preview = document.getElementById(previewImgId) as HTMLImageElement;
            const urlInput = document.getElementById(urlInputId) as HTMLInputElement;
            if (preview) preview.src = result;
            if (urlInput) urlInput.value = '(Arquivo local carregado)';
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }

  handleFileInput('input-file-navbar', 'preview-modal-navbar', 'input-url-navbar', 'navbarLogo');
  handleFileInput('input-file-hero', 'preview-modal-hero', 'input-url-hero', 'heroLogo');
  handleFileInput('input-file-footer', 'preview-modal-footer', 'input-url-footer', 'footerLogo');

  // 5. Salvar Alterações de Imagens do Modal
  document.getElementById('btn-modal-save-changes')?.addEventListener('click', () => {
    const navUrl = (document.getElementById('input-url-navbar') as HTMLInputElement)?.value;
    const heroUrl = (document.getElementById('input-url-hero') as HTMLInputElement)?.value;
    const footerUrl = (document.getElementById('input-url-footer') as HTMLInputElement)?.value;

    if (navUrl && !navUrl.startsWith('(Arquivo local')) currentImages.navbarLogo = navUrl;
    if (heroUrl && !heroUrl.startsWith('(Arquivo local')) currentImages.heroLogo = heroUrl;
    if (footerUrl && !footerUrl.startsWith('(Arquivo local')) currentImages.footerLogo = footerUrl;

    saveBrandImages(currentImages);
    state.isImageModalOpen = false;
    renderApp();
  });

  // 6. Restaurar Imagens Padrão Minds
  document.getElementById('btn-modal-reset-defaults')?.addEventListener('click', () => {
    if (confirm('Deseja restaurar as imagens originais da Minds English School?')) {
      currentImages = { ...DEFAULT_IMAGES };
      saveBrandImages(currentImages);
      state.isImageModalOpen = false;
      renderApp();
    }
  });

  // 7. Seleção de Tópicos na Grade
  document.querySelectorAll('.topic-btn').forEach((btn) => {
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

  // 8. Botões para Iniciar o Quiz
  document.getElementById('btn-start-quiz-top')?.addEventListener('click', () => {
    state.viewMode = 'quiz';
    renderApp();
  });

  document.getElementById('btn-start-quiz-bottom')?.addEventListener('click', () => {
    state.viewMode = 'quiz';
    renderApp();
  });

  // 9. Botão de Sair do Quiz
  document.getElementById('btn-exit-quiz')?.addEventListener('click', () => {
    state.viewMode = 'study';
    renderApp();
  });

  // 10. Reiniciar Respostas do Tópico
  document.getElementById('btn-reset-quiz')?.addEventListener('click', () => {
    if (confirm('Deseja reiniciar as respostas deste quiz?')) {
      delete state.userAnswers[state.selectedTopicId];
      saveUserAnswers(state.userAnswers);
      state.currentQuestionIndex = 0;
      renderApp();
    }
  });

  // 11. Resposta em uma Alternativa do Quiz
  document.querySelectorAll('.option-btn').forEach((btn) => {
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
      saveUserAnswers(state.userAnswers);
      renderApp();
    });
  });

  // 12. Pular para Questão pelo Stepper
  document.querySelectorAll('[data-jump-idx]').forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const idx = parseInt((e.currentTarget as HTMLElement).dataset.jumpIdx || '0', 10);
      state.currentQuestionIndex = idx;
      renderApp();
    });
  });

  // 13. Navegação: Anterior, Próxima e Ver Resultado
  document.getElementById('btn-nav-prev')?.addEventListener('click', () => {
    if (state.currentQuestionIndex > 0) {
      state.currentQuestionIndex--;
      renderApp();
    }
  });

  document.getElementById('btn-nav-next')?.addEventListener('click', () => {
    const currentTopic = findTopicById(state.selectedTopicId);
    if (currentTopic && state.currentQuestionIndex < currentTopic.quiz.length - 1) {
      state.currentQuestionIndex++;
      renderApp();
    }
  });

  document.getElementById('btn-nav-finish')?.addEventListener('click', () => {
    renderApp();
  });

  // 14. Ações da Conclusão do Quiz
  document.getElementById('btn-completion-study')?.addEventListener('click', () => {
    state.viewMode = 'study';
    renderApp();
  });

  document.getElementById('btn-completion-retry')?.addEventListener('click', () => {
    delete state.userAnswers[state.selectedTopicId];
    saveUserAnswers(state.userAnswers);
    state.currentQuestionIndex = 0;
    renderApp();
  });

  document.getElementById('btn-completion-next')?.addEventListener('click', () => {
    const currentIndex = allGrammarTopics.findIndex(t => t.id === state.selectedTopicId);
    const nextTopic = allGrammarTopics[(currentIndex + 1) % allGrammarTopics.length];
    state.selectedTopicId = nextTopic.id;
    state.currentQuestionIndex = 0;
    state.viewMode = 'study';
    renderApp();
  });
}

// Inicialização automática
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
renderApp();
