// =============================================================================
// 📚 BASE DE DADOS DOS 10 MÓDULOS DE GRAMÁTICA A1 - MINDS ENGLISH SCHOOL
// =============================================================================

import { GrammarTopic } from '../types';
import { doMakeTopic } from './topics/doMake';
import { muchALotOfTopic } from './topics/muchALotOf';
import { preferenceTopic } from './topics/preference';
import { presentlyCurrentlyActuallyTopic } from './topics/presentlyCurrentlyActually';
import { fartherFurtherTopic } from './topics/fartherFurther';
import { everydayEveryDayTopic } from './topics/everydayEveryDay';
import { haveTakeTopic } from './topics/haveTake';
import { gerundInfinitiveTopic } from './topics/gerundInfinitive';
import { transitionWordsTopic } from './topics/transitionWords';
import { phrasalVerbsTopic } from './topics/phrasalVerbs';

/**
 * Lista consolidada contendo todos os 10 tópicos de gramática e seus respectivos quizzes.
 * Cada tópico contém 10 questões, totalizando 100 exercícios práticos com feedback detalhado.
 */
export const allGrammarTopics: GrammarTopic[] = [
  doMakeTopic,
  muchALotOfTopic,
  preferenceTopic,
  presentlyCurrentlyActuallyTopic,
  fartherFurtherTopic,
  everydayEveryDayTopic,
  haveTakeTopic,
  gerundInfinitiveTopic,
  transitionWordsTopic,
  phrasalVerbsTopic,
];

/**
 * Helper para buscar um módulo de gramática pelo seu identificador único (ID).
 * @param id Identificador do tópico (ex: 'do-make', 'much-a-lot-of')
 * @returns O objeto do tópico correspondente ou `undefined` caso não seja encontrado.
 */
export const findTopicById = (id: string): GrammarTopic | undefined => {
  return allGrammarTopics.find((topic) => topic.id === id);
};
