import './styles.css';
import Button from '../../components/button/Button';
import AnswersList from '../../components/answersList/answersList';

class GameOverModal {
  constructor(playerAnsweredCount = 0, questionsCount = 0, onDone = () => {}) {
    this.playerAnsweredCount = playerAnsweredCount;
    this.questionsCount = questionsCount;
    this.onDone = onDone;
    this.inputValue = '';
    this.container = document.createElement('div');
  }

  open() {
    this.container.classList.remove('hidden');
  }

  close() {
    this.container.classList.add('hidden');
  }

  handleDone() {
    if (this.inputValue.length > 0) {
      this.close();

      return this.onDone(this.inputValue);
    }

    return null;
  }

  render() {
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
    modalAnswersHeader.innerText = 'Detailed answers'

// const answersContainer = new AnswersList(
//   [
//     {
//       image: '',
//   userAnswer: '',
//   correctAnswer: ''
//     },
//   ]
// );

    overlay.className = 'modal-container__overlay';
    modal.className = 'modal-container__game-over-modal';
    modalHeader.className = 'modal-container__header';
    modalSummary.className = 'modal-container__summary';
    modalMain.className = 'modal-container__main';
    modalAnswersHeader.className = 'modal-container__answers__header'
    // modalAnswers.className = 'modal-container__answers';
    yodaImage.className = 'modal-container__yoda-image';
    inputContainer.className = 'modal-container__input-container';
    modalInput.className = 'modal-container__input';
    modalInputDescription.className = 'modal-container__input-description';
    modalButtonContainer.className = 'modal-container__button';
    closeModalButtonContainer.className = 'modal-container__close-button-container';

    modalHeader.innerText = 'game over';
    modalSummary.innerText = `The force is strong in you, Padawan! During 1 minute you have answered ${this.playerAnsweredCount} questions.`;
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
    modalAnswers.appendChild(modalAnswersHeader)
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
