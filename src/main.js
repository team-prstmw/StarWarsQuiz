import IndexPageModes from './layouts/IndexPageModes/IndexPageModes';
import ButtonsContainer from './layouts/buttonsContainer/buttonsContainer';
import GameOverModal from './layouts/GameOverModal/GameOverModal';
import StarWarsIntro from './layouts/StarWarsIntro/StarWarsIntro';
import { hideStarWarsIntro } from './utils/hideStarWarsIntro';
import { tapHandler } from './utils/doubleTapHandler';
import changeGameMode from './utils/changeGameMode';
import ErrorPage from './layouts/errorPage/ErrorPage';
import MainPhoto from './components/mainPhoto/MainPhoto';

const indexPage = new IndexPageModes();
const errorPage = new ErrorPage();

// const buttonsContainer = new ButtonsContainer();

// const gameOverModal = new GameOverModal();

// .appendChild(gameOverModal.render());
// document.body.appendChild(errorPage.render());
const starWarsIntro = new StarWarsIntro();

const buttonsContainer = new ButtonsContainer();

document.body.appendChild(starWarsIntro.render());

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
  people: {
    header: 'Who is this character?',
    description: 'who from Star Wars is showed on the left from available options.',
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

const mainPhoto = new MainPhoto();
document.getElementById('main-grid-container').appendChild(mainPhoto.render());

document.getElementById('main-grid-container').appendChild(indexPage.render()).appendChild(buttonsContainer.render());
const splitted = document.getElementById('main-photo').src.split('/');
document.mode = splitted[splitted.length - 2];

const modeDesc = `MODE: ${document.MODES[document.mode].header}`;

document.querySelector('h2.main__header').innerText = modeDesc;

document.mode = 'characters';
document.querySelector('.quiz-main-menu').addEventListener('click', changeGameMode);
