import HtmlElement from '../htmlElement/HtmlElement';
import getRandomImage from './getRandomImage';
import './mainPhoto.css';

class MainPhoto extends HtmlElement {
  constructor(category = '') {
    super(['main-photo'], 'img', 'randomPicture', {
      id: 'main-photo',
      // src: getRandomImage(category),
    });
  }
}
export default MainPhoto;
