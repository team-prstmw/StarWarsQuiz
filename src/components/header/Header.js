import HtmlElement from '../htmlElement/HtmlElement';
import './styles.css';

export class Header extends HtmlElement {
  constructor(label = '', classList = [], htmlTag = null) {
    super(classList, htmlTag);
    this.label = label;
  }

  show() {
    const headerElement = this.render();
    headerElement.innerText = this.label;
    return headerElement;
  }
}

export default Header;
