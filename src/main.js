import IndexPageModes from './layouts/IndexPageModes/IndexPageModes';
import { addListenerToButtons } from './utils/changeGameMode';
import ButtonsContainer from './layouts/buttonsContainer/buttonsContainer';
import StarWarsIntro from './layouts/StarWarsIntro/StarWarsIntro';
import { findLastElementPosition, hideStarWarsIntro } from './utils/hideStarWarsIntro';
import tapHandler from './utils/doubleTapHandler';

const indexPage = new IndexPageModes();
const starWarsIntro = new StarWarsIntro();

const buttonsContainer = new ButtonsContainer();

document.body.appendChild(starWarsIntro.render());

document.getElementById('main-grid-container').appendChild(indexPage.render()).appendChild(buttonsContainer.render());

document.addListenerToButtons = addListenerToButtons(
  ['.btn-characters', '.btn-vehicles', '.btn-starships'],
  ['Who is this character?', 'What kind of vehicle is this?', 'What kind of starship is this?'],
  [
    'who from Star Wars is showed on the left (Jar Jar Binks right now) from available options.',
    'what vehicle from Star Wars is showed in the picture.',
    'what starship from Star Wars is showed in the picture.',
  ]
);

const intervalId = setInterval(() => {
  findLastElementPosition();
}, 1000);

document.addEventListener('keydown', (event) => {
  if (document.querySelector('.intro__container') && event.key === 'Escape') {
    hideStarWarsIntro();
    clearInterval(intervalId);
  }
});

document.addEventListener(
  'touchstart',
  (e) => {
    if (document.querySelector('.intro__container')) {
      tapHandler(e);
      clearInterval(intervalId);
    }
  },
  { passive: false }
);
