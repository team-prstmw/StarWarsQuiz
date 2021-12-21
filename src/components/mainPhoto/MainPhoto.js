import HtmlElement from '../htmlElement/HtmlElement';

export default class MainPhoto extends HtmlElement {
  constructor(id = 'main-photo') {
    super(['main-photo'], 'img', "It's main image", {
      src: 'images/QuestionPhoto1.png',
      width: '200px',
      height: '250px',
    });
    this.id = id;
  }
}
