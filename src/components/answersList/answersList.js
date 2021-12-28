import HtmlElement from '../htmlElement/HtmlElement';
import './styles.css';
import Answer from '../answer/answer';

class AnswersList extends HtmlElement {
  constructor( answers = []) {
    super(['answers-list-container'], 'div');
    this.answers = answers;
  }

  render() {
    const container = document.createElement('div');

    container.className = 'answers-list-container';

    const header = document.createElement('div')
header.className = 'header'

    const youHeader = document.createElement('h2')
    const answerHeader = document.createElement('h2')

    youHeader.innerText = 'you'
    answerHeader.innerText = 'answer'

    header.appendChild(youHeader)
    header.appendChild(answerHeader)
    container.appendChild(header)

    this.answers.forEach(({ image, userAnswer, correctAnswer }) => {
      const answer = new Answer({ image, userAnswer, correctAnswer });

      container.appendChild(answer.render());
    });
    return container;
  }
}

export default AnswersList;
