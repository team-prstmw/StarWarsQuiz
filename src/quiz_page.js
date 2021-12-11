import Question from './quiz_page_elements/Question';
import Answer from './quiz_page_elements/Answer';

export default class QuizContainer {
  constructor() {
    this.div = document.createElement('div');
    this.div.id = 'quiz-container';
    this.div.className = 'quiz-container';
    this.div.innerHTML = 'CONTAINER';
  }

  render() {
    return this.div;
  }
}
