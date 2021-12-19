import './question.css';
import HtmlElement from '../components/htmlElement/HtmlElement';

export default class Question extends HtmlElement {
  constructor(questionText) {
    super(['question-text'], 'div', questionText);
  }
}
