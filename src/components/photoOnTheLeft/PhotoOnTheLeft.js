import HtmlElement from '../htmlElement/HtmlElement';
import './photoOnTheLeft.css';

export default class MainPhoto extends HtmlElement {
  constructor() {
    super(['photo-on-the-left'], 'img', 'Picture should be here', {
      src: 'images/QuestionPhoto1.png',
      id: 'photo-on-the-left',
    });
  }
}
