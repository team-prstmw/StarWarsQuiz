import IndexPageModes from './layouts/IndexPageModes/IndexPageModes';
import { addListenerToButtons } from './utils/changeGameMode';
import ButtonsContainer from './layouts/buttonsContainer/buttonsContainer';
import MainPhoto from './components/mainPhoto/MainPhoto';

const indexPage = new IndexPageModes();

const buttonsContainer = new ButtonsContainer();

const mainPhoto = new MainPhoto();

document.getElementById('main-grid-container').appendChild(indexPage.render()).appendChild(buttonsContainer.render());
document.getElementById('main-grid-container').appendChild(mainPhoto.render());

document.addListenerToButtons = addListenerToButtons(
  ['.btn-characters', '.btn-vehicles', '.btn-starships'],
  ['Who is this character?', 'What kind of vehicle is this?', 'What kind of starship is this?'],
  [
    'who from Star Wars is showed on the left (Jar Jar Binks right now) from available options.',
    'what vehicle from Star Wars is showed in the picture.',
    'what starship from Star Wars is showed in the picture.',
  ]
);
