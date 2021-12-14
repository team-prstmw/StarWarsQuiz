import Question from './Question';
import Answer from './Answer';
import './quizContainer.css';

export default class QuizContainer {
  constructor(questionText, answersList) {
    this.div = document.createElement('div');
    this.div.id = 'quiz-container';
    this.div.className = 'quiz-container content-container';

    this.questionText = questionText;
    this.answersList = answersList;
  }

  render() {
    const question = new Question(this.questionText).render();
    this.div.appendChild(question);
    const div = document.createElement('div');

    for (let i = 0; i < this.answersList.length; i += 1) {
      const answer = new Answer(this.answersList[i]).render();
      div.appendChild(answer);
    }
    this.div.appendChild(div);

    return this.div;
  }
}
