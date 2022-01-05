import HtmlElement from '../htmlElement/HtmlElement';
import './styles.css';

export class Description extends HtmlElement {
  constructor(label = '', classList = [], htmlTag = 'p') {
    super(
      classList,
      htmlTag,
      label
    );
  }
}

export default Description;

// `You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select ${label}`