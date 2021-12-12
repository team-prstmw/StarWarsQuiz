import QuizContainer from './quiz_page';

// eslint-disable-next-line prefer-const
let fetchedQuestion = 'Who is this character?';

// eslint-disable-next-line prefer-const
let fetchedAnswersList = ['answer A', 'answer B', 'answer C', 'answer D'];

const quiz = new QuizContainer(fetchedQuestion, fetchedAnswersList);

document.getElementById('main-grid-container').appendChild(quiz.render());
