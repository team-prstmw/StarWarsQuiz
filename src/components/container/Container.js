import HtmlElement from '../htmlElement/HtmlElement';
import './styles.css';

export class Container extends HtmlElement {
  constructor(classList = [], htmlTag) {
    super(classList, htmlTag);
  }
}

export default Container;
