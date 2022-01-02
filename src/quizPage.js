import QuizContainer from './quizPageElements/QuizContainer';
import MainPhoto from './components/mainPhoto/MainPhoto';

document.MODES = {
  people: 'Who is this character?',
  vehicles: 'What kind of vehicle is this?',
  starships: 'What kind of starship is this?',
};

const MODES_ARRAY = ['people', 'vehicles', 'starships'];
const modeName = MODES_ARRAY[Math.floor(Math.random() * MODES_ARRAY.length)];
console.log(modeName);
const modeDesc = document.MODES[modeName];

const mainPhoto = new MainPhoto();
document.getElementById('main-grid-container').appendChild(mainPhoto.render());
const splitted = document.getElementById('main-photo').src.split('/');
document.mode = splitted[splitted.length - 2];
// const modeDesc = document.MODES[document.mode];

const fetchedAnswersList = ['answer A', 'answer B', 'answer C', 'answer D'];

const quiz = new QuizContainer(modeDesc, fetchedAnswersList);

document.getElementById('main-grid-container').appendChild(quiz.render());
