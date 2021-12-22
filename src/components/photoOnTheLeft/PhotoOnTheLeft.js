import HtmlElement from '../htmlElement/HtmlElement';
import './photoOnTheLeft.css';
import data from './getRandomImage';

const mode = 'people';
const id = '2';

const BASE_URL = `https://raw.githubusercontent.com/nowakprojects/CodersCamp2020.Project.JavaScript.StarWarsQuiz/develop/static/assets/img/modes/${mode}/${id}.jpg`;
export default class MainPhoto extends HtmlElement {
  constructor() {
    super(['photo-on-the-left'], 'img', 'Picture should be here', {
      // src: `images/${getRandomImage()}.jpg`,
      src: BASE_URL,
      id: 'photo-on-the-left',
    });
  }
}
