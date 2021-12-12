import Question from './quiz_page_elements/Question';
import Answer from './quiz_page_elements/Answer';

export default class QuizContainer {
  constructor(questionText, answersList) {
    this.div = document.createElement('div');
    this.div.id = 'quiz-container';
    this.div.className = 'quiz-container';

    this.questionText = questionText;
    this.answersList = answersList;
  }

  render() {
    this.div.style.background = 'red';

    const question = new Question(this.questionText).render();
    for (let i = 0; i < this.answersList.length; i++) {
      const answer = new Answer(this.answersList[i]).render();
      question.appendChild(answer);

      this.div.appendChild(question);
      this.ul = this.div.querySelector('ul');
    }

    return this.div;
  }
}
