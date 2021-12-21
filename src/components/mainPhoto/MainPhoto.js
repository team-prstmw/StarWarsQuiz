import HtmlElement from '../htmlElement/HtmlElement';

export default class MainPhoto extends HtmlElement {
  constructor(id = 'main-photo', imageSrc = 'images/QuestionPhoto1.png', width = '200px', height = '250px') {
    super(['main-photo'], 'img', "It's main image");
    this.id = id;
    this.imageSrc = imageSrc;
    this.width = width;
    this.height = height;
  }

  render() {
    const img = super.render();

    return img;
  }
}
