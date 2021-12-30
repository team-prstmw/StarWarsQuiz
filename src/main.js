import IndexPageModes from './layouts/IndexPageModes/IndexPageModes';
import ButtonsContainer from './layouts/buttonsContainer/buttonsContainer';
import MainPhoto from './components/mainPhoto/MainPhoto';
import { doc } from 'prettier';

document.MODES = {
  people: {
    header: 'Who is this character?',
    description: 'Who from Star Wars is showed on the left (Jar Jar Binks right now) from available options.',
  },
  vehicles: {
    header: 'What kind of vehicle is this?',
    description: 'what vehicle from Star Wars is showed in the picture.',
  },
  starships: {
    header: 'What kind of starship is this?',
    description: 'what starship from Star Wars is showed in the picture.',
  },
};

const indexPage = new IndexPageModes();

const mainPhoto = new MainPhoto();
document.getElementById('main-grid-container').appendChild(mainPhoto.render());

const buttonsContainer = new ButtonsContainer();

document.getElementById('main-grid-container').appendChild(indexPage.render()).appendChild(buttonsContainer.render());
const splitted = document.getElementById('main-photo').src.split('/');
document.mode = splitted[splitted.length - 2];
const modeDesc = document.MODES[document.mode].header;
document.querySelector('h2.main__header').innerHTML = modeDesc;

// getRandomImgSrc().then((res) => {
//   console.log(res)
//   document.getElementById('main-photo').src = res.src;
//   document.mode = res.category;
//   const modeDesc = document.MODES[document.mode].header
//   document.querySelector('h2.main__header').innerHTML = modeDesc
// });

// document.addListenerToButtons = addListenerToButtons(
//   ['.btn-characters', '.btn-vehicles', '.btn-starships'],
//   ['Who is this character?', 'What kind of vehicle is this?', 'What kind of starship is this?'],
//   [
//     'who from Star Wars is showed on the left (Jar Jar Binks right now) from available options.',
//     'what vehicle from Star Wars is showed in the picture.',
//     'what starship from Star Wars is showed in the picture.',
//   ]
// );
