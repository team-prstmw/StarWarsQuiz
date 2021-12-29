import HtmlElement from '../htmlElement/HtmlElement';
import './mainPhoto.css';

class MainPhoto extends HtmlElement {
  constructor() {
    super(['main-photo'], 'img','randomPicture',{
      id: 'main-photo',
      src: '',
    });
  }
}

export default MainPhoto;
