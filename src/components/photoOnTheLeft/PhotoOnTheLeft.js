import HtmlElement from '../htmlElement/HtmlElement';
import './photoOnTheLeft.css';
import getRandomImgSrc from './getRandomImage';

class MainPhoto extends HtmlElement {
  constructor() {
    super(['photo-on-the-left'], 'img', 'Picture should be here', {
      id: 'photo-on-the-left',
      src: getRandomImgSrc().then((data) => data.src),
      category: getRandomImgSrc().then((data) => data.category),
    });
  }
}

export default MainPhoto;
