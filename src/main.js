import IndexPageModes from './layouts/IndexPageModes/IndexPageModes';
import ButtonsContainer from './layouts/buttonsContainer/buttonsContainer';
// import GameOverModal from './layouts/GameOverModal/GameOverModal';
import changeGameMode from './utils/changeGameMode';
import ErrorPage from './layouts/errorPage/ErrorPage'

const indexPage = new IndexPageModes();
const errorPage = new ErrorPage();

const buttonsContainer = new ButtonsContainer();

// const gameOverModal = new GameOverModal();

document.getElementById('main-grid-container').appendChild(indexPage.render()).appendChild(buttonsContainer.render());
// .appendChild(gameOverModal.render());
// document.body.appendChild(errorPage.render());

document.MODES = {
  characters: {
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
document.mode = 'characters';
document.querySelector('.quiz-main-menu').addEventListener('click', changeGameMode);
