import HtmlElement from '../htmlElement/HtmlElement';
import getRandomImage from './getRandomImage';
import './mainPhoto.css';

class MainPhoto extends HtmlElement {
  constructor() {
    super(['main-photo'], 'img', 'randomPicture', {
      id: 'main-photo',
      src: '../../../images/modes/' + getRandomImage() + '.jpg',
    });
  }
}
export default MainPhoto;
