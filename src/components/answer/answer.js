import HtmlElement from '../htmlElement/HtmlElement';
import './styles.css';

class Answer extends HtmlElement {
  constructor(answer = {}) {
    super(['answer-container'], 'div');
    this.answer = answer;
  }

  render() {
    const tableRow = document.createElement('tr');
    const imageTd = document.createElement('td');
    const userAnswerTd = document.createElement('td');
    const correctAnswerTd = document.createElement('td');
    const image = document.createElement('img');
    const userAnswer = document.createElement('p');
    const correctAnswer = document.createElement('p');

    tableRow.className = 'answer-container';
    imageTd.className = 'answer-image-td';
    image.className = 'answer-image';
    userAnswer.classList = ['answer'];
    userAnswerTd.className = 'user-answer-td';
    correctAnswerTd.className = 'correct-answer-td';
    

    if (this.answer.userAnswer !== this.answer.correctAnswer) {
      userAnswer.classList.add('answer-incorrect');
    } else {
      userAnswer.classList.add('answer-correct')
    }
    correctAnswer.className = 'answer';

    image.src = this.answer.image;
    userAnswer.innerText = this.answer.userAnswer;
    correctAnswer.innerText = this.answer.correctAnswer;

    imageTd.appendChild(image);
    userAnswerTd.appendChild(userAnswer);
    correctAnswerTd.appendChild(correctAnswer);
    tableRow.appendChild(imageTd);
    tableRow.appendChild(userAnswerTd);
    tableRow.appendChild(correctAnswerTd);

    return tableRow;
  }
}

export default Answer;
