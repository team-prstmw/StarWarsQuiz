import IndexPageModes from './layouts/IndexPageModes/IndexPageModes';
import ButtonsContainer from './layouts/buttonsContainer/buttonsContainer';
import changeGameMode from './utils/changeGameMode';

const indexPage = new IndexPageModes();

const buttonsContainer = new ButtonsContainer();

document.getElementById('main-grid-container').appendChild(indexPage.render()).appendChild(buttonsContainer.render());

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
