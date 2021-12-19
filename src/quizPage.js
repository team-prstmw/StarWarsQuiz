import QuizContainer from './quizPageElements/QuizContainer';

const fetchedQuestion = 'Who is this character?';

const fetchedAnswersList = ['answer A', 'answer B', 'answer C', 'answer D'];

const quiz = new QuizContainer(fetchedQuestion, fetchedAnswersList);

document.getElementById('main-grid-container').appendChild(quiz.render());