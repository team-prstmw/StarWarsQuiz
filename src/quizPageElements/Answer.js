import HtmlElement from '../components/htmlElement/HtmlElement';
import './answer.css';

export default class Answer extends HtmlElement {
  constructor(text) {
    super(['quiz-answer'], 'div', text);
  }
}
