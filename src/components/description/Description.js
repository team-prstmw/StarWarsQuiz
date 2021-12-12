import HtmlElement from '../htmlElement/HtmlElement';
import './styles.css';

export class Description extends HtmlElement {
  constructor(label = '', classList = [], htmlTag = 'p') {
    super(classList, htmlTag);
    this.label = label;
  }

  show() {
    const descriptionElement = this.render();
    descriptionElement.innerText = this.label;
    return descriptionElement;
  }
}

export default Description;
