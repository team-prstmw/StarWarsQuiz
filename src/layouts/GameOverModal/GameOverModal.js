import './styles.css';
import Button from '../../components/button/Button';
import AnswersList from '../../components/answersList/answersList';

class GameOverModal {
  constructor(onDone = () => {}) {
    this.onDone = onDone;
    this.inputValue = '';
    this.container = document.createElement('div');
  }

  open() {
    this.container.classList.remove('hidden');
  }

  close() {
    // this.container.classList.add('hidden'); // backup

    this.container.remove();
    document.location.reload();
  }

  handleDone() {
    if (this.inputValue.length > 0) {
      this.close();

      return this.onDone(this.inputValue);
    }

    return null;
  }

  render() {
    let playerCorrectAnswersCount = 0;

    this.container.classList = ['modal-container'];

    const overlay = document.createElement('div');
    const modal = document.createElement('div');
    const modalHeader = document.createElement('h1');
    const modalSummary = document.createElement('p');
    const modalMain = document.createElement('div');
    const modalAnswers = document.createElement('div');
    const modalAnswersHeader = document.createElement('h4');
    const yodaImage = document.createElement('img');
    const inputContainer = document.createElement('div');
    const modalInput = document.createElement('input');
    const modalInputDescription = document.createElement('p');
    const modalButtonContainer = document.createElement('div');
    const modalButton = new Button({
      label: 'MAY THE FORCE BE WITH YOU!',
      width: 'full',
      buttonType: 'ptg',
      onClick: () => this.handleDone(),
    });
    const closeModalButtonContainer = document.createElement('div');
    const closeModalButton = new Button({
      label: 'x',
      width: 'full',
      onClick: () => this.close(),
      buttonType: 'vanilla',
    });
    modalAnswersHeader.innerText = 'Detailed answers';

    let answers = [];

    if (!document.correctAnswers || document.correctAnswers.length === 0) {
      answers = [
        {
          image: 'images/modes/people/1.jpg',
          userAnswer: 'Luke Skywalker',
          correctAnswer: 'Luke Skywalker',
        },
        {
          image: 'images/modes/people/2.jpg',
          userAnswer: 'Han Solo',
          correctAnswer: 'C-3PO',
        },
        {
          image: 'images/modes/people/3.jpg',
          userAnswer: 'R2-D2',
          correctAnswer: 'R2-D2',
        },
        {
          image: 'images/modes/people/4.jpg',
          userAnswer: 'Darth Wiadro',
          correctAnswer: 'Darth Vader',
        },
        {
          image: 'images/modes/people/5.jpg',
          userAnswer: 'Leia',
          correctAnswer: 'Leia',
        },
      ];
    } else {
      answers = document.correctAnswers.map((arr) => ({ image: arr[0], userAnswer: arr[1], correctAnswer: arr[2] }));
    }

    playerCorrectAnswersCount = answers.filter((ans) => ans.userAnswer === ans.correctAnswer).length;

    const answersContainer = new AnswersList(answers);

    overlay.className = 'modal-container__overlay';
    modal.className = 'modal-container__game-over-modal';
    modalHeader.className = 'modal-container__header';
    modalSummary.className = 'modal-container__summary';
    modalMain.className = 'modal-container__main';
    modalAnswersHeader.className = 'modal-container__answers__header';
    modalAnswers.className = 'modal-container__answers';
    yodaImage.className = 'modal-container__yoda-image';
    inputContainer.className = 'modal-container__input-container';
    modalInput.className = 'modal-container__input';
    modalInputDescription.className = 'modal-container__input-description';
    modalButtonContainer.className = 'modal-container__button';
    closeModalButtonContainer.className = 'modal-container__close-button-container';

    modalHeader.innerText = 'game over';
    modalSummary.innerText = `The force is strong in you, Padawan! During 1 minute you have answered ${playerCorrectAnswersCount} questions.`;
    modalInputDescription.innerText = 'Please, fill your name in order to receive eternal glory in whole Galaxy!';
    yodaImage.src = '/images/Yoda.png';

    modalInput.onchange = (e) => {
      this.inputValue = e.target.value;
    };

    this.container.appendChild(overlay);
    this.container.appendChild(modal);
    modal.appendChild(modalHeader);
    modal.appendChild(modalSummary);
    modal.appendChild(modalMain);
    modal.appendChild(closeModalButtonContainer);
    closeModalButtonContainer.appendChild(closeModalButton.render());
    modalAnswers.appendChild(modalAnswersHeader);
    modalAnswers.appendChild(answersContainer.render());
    modalMain.appendChild(modalAnswers);
    modalMain.appendChild(yodaImage);
    modal.appendChild(inputContainer);
    inputContainer.appendChild(modalInput);
    inputContainer.appendChild(modalInputDescription);
    modal.appendChild(modalButtonContainer);
    modalButtonContainer.appendChild(modalButton.render());

    return this.container;
  }
}

export default GameOverModal;

document.getElementById('main-grid-container');
