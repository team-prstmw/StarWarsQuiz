import HtmlElement from '../htmlElement/HtmlElement';
import './styles.css';

class Answer extends HtmlElement {
  constructor(answer = {}) {
    super(['answer-container'], 'div');
    this.answer = answer;
  }

  render() {
    const container = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const userAnswer = document.createElement('p');
    const correctAnswer = document.createElement('p');

    container.className = 'answer-container';
    imageContainer.className = 'answer-image-container';
    image.className = 'answer-image';
    userAnswer.classList = ['answer'];

    if (this.answer.userAnswer !== this.answer.correctAnswer) {
      userAnswer.classList.add('answer-incorrect');
    } else {
      userAnswer.classList.add('answer-correct')
    }
    correctAnswer.className = 'answer';

    image.src = this.answer.image;
    userAnswer.innerText = this.answer.userAnswer;
    correctAnswer.innerText = this.answer.correctAnswer;

    imageContainer.appendChild(image)
    container.appendChild(imageContainer);
    container.appendChild(userAnswer);
    container.appendChild(correctAnswer);

    return container;
  }
}

export default Answer;

// {
//   image: '',
//   userAnswer: '',
//   correctAnswer: ''
// }
