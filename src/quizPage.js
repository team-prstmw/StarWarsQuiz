import QuizContainer from './quizPageElements/QuizContainer';
import MainPhoto from './components/mainPhoto/MainPhoto';
import fetchStarWarsData from './fetch';
import all_Images from './components/mainPhoto/all_Images';
import shuffle from './utils/shuffle';

document.MODES = {
  people: 'Who is this character?',
  vehicles: 'What kind of vehicle is this?',
  starships: 'What kind of starship is this?',
};

const MODES_ARRAY = ['people', 'vehicles', 'starships'];
const category = MODES_ARRAY[Math.floor(Math.random() * MODES_ARRAY.length)];
const modeDesc = document.MODES[category];

document.setOfQuestion = all_Images[category];

const mainPhoto = new MainPhoto(category);
document.getElementById('main-grid-container').appendChild(mainPhoto.render());
const splitted = document.getElementById('main-photo').src.split('/');
document.mode = splitted[splitted.length - 2];

const answerInternalID = splitted[splitted.length - 1].split('.')[0];
const correctAnswerId = document.mode + '/' + answerInternalID;

fetchStarWarsData(correctAnswerId).then((data) => {
  document.answer = data.name;
  fetchStarWarsData(document.mode).then(async (data) => {
    const indexesToFetch = [];
    while (indexesToFetch.length < 3) {
      const randomArrayIndex = Math.floor(Math.random() * data.count);
      if (indexesToFetch.indexOf(randomArrayIndex) < 0) {
        indexesToFetch.push(randomArrayIndex);
      }
    }
    const fakes = await Promise.all(
      indexesToFetch.map(async (index) => {
        const pageNr = Math.floor(index / 10) + 1;
        const indexNr = index % 10;
        const source = `${document.mode}/?page=${pageNr}`;
        return await fetchStarWarsData(source).then((data) => data.results[indexNr].name);
      })
    );
    document.fetchedAnswersList = [document.answer, ...fakes];
    const quiz = new QuizContainer(modeDesc, document.fetchedAnswersList);
    document.getElementById('main-grid-container').appendChild(quiz.render());
  });
});
// handleSetOfQuestions();
// randomize answers order
// collecting answers
// showCorrectAnswer()
