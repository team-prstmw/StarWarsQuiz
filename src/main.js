import IndexPageModes from './layouts/IndexPageModes/IndexPageModes';
import ButtonsContainer from './layouts/buttonsContainer/buttonsContainer';
import MainPhoto from './components/photoOnTheLeft/PhotoOnTheLeft';
import textRelatedtoPhotoCategory from './components/photoOnTheLeft/textRelatedToPhotoCategory';
import getRandomImgSrc from './components/photoOnTheLeft/getRandomImage';

const indexPage = new IndexPageModes();

const buttonsContainer = new ButtonsContainer();

const mainPhoto = new MainPhoto();

document.getElementById('main-grid-container').appendChild(mainPhoto.render());

document.getElementById('main-grid-container').appendChild(indexPage.render()).appendChild(buttonsContainer.render());

getRandomImgSrc().then((res) => {
  document.getElementById('photo-on-the-left').src = res.src;
  document.getElementById('photo-on-the-left').category = res.category;
});

const { category } = document.querySelector('.photo-on-the-left').category;

document.querySelector('h2.main__header').innerHTML = textRelatedtoPhotoCategory[category];

document.addListenerToButtons = addListenerToButtons(
  ['.btn-characters', '.btn-vehicles', '.btn-starships'],
  ['Who is this character?', 'What kind of vehicle is this?', 'What kind of starship is this?'],
  [
    'who from Star Wars is showed on the left (Jar Jar Binks right now) from available options.',
    'what vehicle from Star Wars is showed in the picture.',
    'what starship from Star Wars is showed in the picture.',
  ]
);
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
