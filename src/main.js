import IndexPageModes from './layouts/IndexPageModes/IndexPageModes';
import ButtonsContainer from './layouts/buttonsContainer/buttonsContainer';
import StarWarsIntro from './layouts/StarWarsIntro/StarWarsIntro';
import { hideStarWarsIntro } from './utils/hideStarWarsIntro';
import { tapHandler } from './utils/doubleTapHandler';
import changeGameMode from './utils/changeGameMode';

const indexPage = new IndexPageModes();
const starWarsIntro = new StarWarsIntro();

const buttonsContainer = new ButtonsContainer();

document.body.appendChild(starWarsIntro.render());

document.getElementById('main-grid-container').appendChild(indexPage.render()).appendChild(buttonsContainer.render());

if (window.innerWidth < 768) {
  setTimeout(function () {
    hideStarWarsIntro();
  }, 59000);
} else if (window.innerWidth < 1024) {
  setTimeout(function () {
    hideStarWarsIntro();
  }, 85000);
} else if (window.innerWidth < 1396) {
  if (window.innerHeight > window.innerWidth) {
    setTimeout(function () {
      hideStarWarsIntro();
    }, 100000);
  } else {
    setTimeout(function () {
      hideStarWarsIntro();
    }, 88000);
  }
} else {
  setTimeout(function () {
    hideStarWarsIntro();
  }, 79000);
}

document.addEventListener(
  'keydown',
  (event) => {
    if (document.querySelector('.intro__container') && event.key === 'Escape') {
      hideStarWarsIntro();
    }
  },
  { once: true }
);

document.addEventListener(
  'touchstart',
  (e) => {
    if (document.querySelector('.intro__container')) {
      tapHandler(e);
    }
  },
  { passive: false }
);

document.MODES = {
  characters: {
    header: 'Who is this character?',
    description: 'who from Star Wars is showed on the left (Jar Jar Binks right now) from available options.',
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
document.mode = 'characters';
document.querySelector('.quiz-main-menu').addEventListener('click', changeGameMode);
