import QuizContainer from './quizPageElements/QuizContainer';
import MainPhoto from './components/mainPhoto/MainPhoto';
import fetchStarWarsData from './fetch';

document.MODES = {
  people: 'Who is this character?',
  vehicles: 'What kind of vehicle is this?',
  starships: 'What kind of starship is this?',
};

const MODES_ARRAY = ['people', 'vehicles', 'starships'];
const category = MODES_ARRAY[Math.floor(Math.random() * MODES_ARRAY.length)];
const modeDesc = document.MODES[category];

const mainPhoto = new MainPhoto(category);
document.getElementById('main-grid-container').appendChild(mainPhoto.render());
const splitted = document.getElementById('main-photo').src.split('/');
document.mode = splitted[splitted.length - 2];

const correctAnswerId = document.mode + '/' + splitted[splitted.length - 1].split('.')[0];
fetchStarWarsData(correctAnswerId).then((data) => console.log(data.name));

const fetchedAnswersList = ['answer A', 'answer B', 'answer C', 'answer D'];

const quiz = new QuizContainer(modeDesc, fetchedAnswersList);

document.getElementById('main-grid-container').appendChild(quiz.render());
