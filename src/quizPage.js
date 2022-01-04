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

//SETTING INITIAL STATE FOR TESTING PURPOSE
const MODES_ARRAY = ['people', 'vehicles', 'starships'];
document.mode = MODES_ARRAY[Math.floor(Math.random() * MODES_ARRAY.length)];
const modeDesc = document.MODES[document.mode];

const mainPhoto = new MainPhoto(document.mode);
document.getElementById('main-grid-container').appendChild(mainPhoto.render());
document.setOfQuestion = all_Images[document.mode];

const splitted = document.getElementById('main-photo').src.split('/');
const imageID = splitted[splitted.length - 1].split('.')[0];

const correctAnswerId = document.mode + '/' + imageID;
document.setOfQuestion.splice(document.setOfQuestion.indexOf(correctAnswerId));

function popRandomQuestion(array) {
  return [Math.floor(Math.random() * array.length)];
}

fetchStarWarsData(correctAnswerId).then((data) => {
  document.correctAnswer = data.name;
  fetchStarWarsData(document.mode).then(async (data) => {
    const indexesToFetch = [];
    // document.setOfQuestion.splice(document.setOfQuestion)
    while (indexesToFetch.length < 3) {
      const randomArrayIndex = Math.floor(Math.random() * data.count);
      if (indexesToFetch.indexOf(randomArrayIndex) < 0) {
        indexesToFetch.push(randomArrayIndex);
      }
    }
    const wrongAnswers = await Promise.all(
      indexesToFetch.map(async (index) => {
        const pageNr = Math.floor(index / 10) + 1;
        const indexNr = index % 10;
        const source = `${document.mode}/?page=${pageNr}`;
        return await fetchStarWarsData(source).then((data) => data.results[indexNr].name);
      })
    );

    document.allAnswers = [document.correctAnswer, ...wrongAnswers];
    const quiz = new QuizContainer(modeDesc, document.allAnswers);
    document.getElementById('main-grid-container').appendChild(quiz.render());
  });
});
// handleSetOfQuestions();
// randomize answers order
// collecting answers
// showCorrectAnswer()
