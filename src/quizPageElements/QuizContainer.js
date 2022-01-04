import Question from './Question';
import Answer from './Answer';
import './quizContainer.css';

export default class QuizContainer {
  constructor(questionText, answersList) {
    this.container = document.createElement('div');
    this.container.id = 'quiz-container';
    this.container.className = 'quiz-container content-container';

    this.questionText = questionText;
    this.answersList = answersList;
  }

  render() {
    const question = new Question(this.questionText).render();
    this.container.appendChild(question);

    const answerContainer = document.createElement('div');
    answerContainer.className = 'answer-container';
    for (let i = 0; i < this.answersList.length; i += 1) {
      const answer = new Answer(this.answersList[i]).render();
      answerContainer.appendChild(answer);
      answer.id = `answer-${i + 1}`;
    }
    this.container.appendChild(answerContainer);
    return this.container;
  }
}
