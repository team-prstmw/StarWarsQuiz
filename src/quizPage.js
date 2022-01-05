import QuizContainer from './quizPageElements/QuizContainer';
import MainPhoto from './components/mainPhoto/MainPhoto';
import fetchStarWarsData from './fetch';
import all_Images from './components/mainPhoto/all_Images';
import shuffle from './utils/shuffle';

document.correctAnswers = [];

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
const quiz = new QuizContainer(modeDesc, ['', '', '', '']);
document.getElementById('main-grid-container').appendChild(quiz.render());

const splitted = document.getElementById('main-photo').src.split('/');
const imageID = splitted[splitted.length - 1].split('.')[0];
let correctAnswerId = document.mode + '/' + imageID;
document.setOfQuestion.splice(document.setOfQuestion.indexOf(correctAnswerId), 1);

correctAnswerId = popRandomQuestion(correctAnswerId);

quizLogic();

document.addEventListener('click', function (e) {
  let correctAnswer;
  if (e.target.className === 'quiz-answer') {
    const answerElements = document.querySelectorAll('.quiz-answer');
    if (e.target.innerHTML === document.correctAnswer) {
      e.target.style.background = 'green';
      correctAnswer = e.target.innerHTML;
    } else {
      e.target.style.background = 'red';
      for (let i = 0; i < answerElements.length; i++)
        if (answerElements[i].innerHTML === document.correctAnswer) {
          answerElements[i].style.background = 'green';
          correctAnswer = answerElements[i].innerHTML;
        }
    }
    document.correctAnswers.push([this.getElementById('main-photo').src, e.target.innerHTML, correctAnswer]);
    setTimeout(() => {
      for (let i = 0; i < answerElements.length; i++) answerElements[i].style.background = 'var(--starwars-yellow)';
      quizLogic();
    }, 1000);
  }
});

function getImage(id) {
  return `../../../images/modes/${id}.jpg`;
}

function popRandomQuestion(correctAnswer = '') {
  const randomQuestion = correctAnswer
    ? correctAnswer
    : document.setOfQuestion[Math.floor(Math.random() * document.setOfQuestion.length)];
  document.setOfQuestion.splice(document.setOfQuestion.indexOf(randomQuestion), 1);
  return randomQuestion;
}

function displayAnswers(answers = ['a', 'b', 'c', 'd']) {
  const answerElements = document.querySelectorAll('.quiz-answer');
  for (let i = 0; i < answerElements.length; ++i) {
    answerElements[i].innerHTML = answers[i];
  }
}

function quizLogic() {
  correctAnswerId = popRandomQuestion();

  fetchStarWarsData(correctAnswerId).then((data) => {
    document.correctAnswer = data.name;
    fetchStarWarsData(document.mode).then(async (data) => {
      const indexesToFetch = [];
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
      let allAnswers = [document.correctAnswer, ...wrongAnswers];
      allAnswers = shuffle(allAnswers);
      displayAnswers(allAnswers);
      document.getElementById('main-photo').src = getImage(correctAnswerId);
      console.log(document.correctAnswers);
    });
  });
}

// collecting answers
