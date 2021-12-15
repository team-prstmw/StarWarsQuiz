import HtmlElement from '../htmlElement/HtmlElement';
import './styles.css';

export class Description extends HtmlElement {
  constructor(label = '', classList = [], htmlTag = 'p') {
    super(classList, htmlTag, label);
  }
}

export default Description;
