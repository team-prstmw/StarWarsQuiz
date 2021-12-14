import HtmlElement from '../htmlElement/HtmlElement';
import './styles.css';

export class Header extends HtmlElement {
  constructor(label = '', classList = [], htmlTag = null) {
    super(classList, htmlTag, label);
  }

  show() {
    const headerElement = this.render();
    return headerElement;
  }
}

export default Header;
