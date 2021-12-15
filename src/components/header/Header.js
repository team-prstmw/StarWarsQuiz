import HtmlElement from '../htmlElement/HtmlElement';
import './styles.css';

export class Header extends HtmlElement {
  constructor(label = '', classList = [], htmlTag = null) {
    super(classList, htmlTag, label);
  }
}

export default Header;
