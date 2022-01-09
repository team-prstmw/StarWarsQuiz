import Button from '../../components/button/Button';
import changeModeDetail from '../../utils/changeModeDetail';
import { removeElement } from '../../utils/changePages';
import { quiz } from '../../quizPage';
import Time from '../../components/timeSabarCounter/saberTime';
import './styles.css';
import hallOfFameIcon from '/public/hall_of_fame.svg';

class ButtonsContainer {
  constructor() {
    this.container = null;
  }

  render() {
    this.container = document.createElement('section');
    this.container.className = 'container';

    // const ButtonSettings = new Button({ label: 'Settings', type: 'default', width: 'full' });
    const buttonLeft = new Button({
      label: 'Hall of fame',
      buttonType: 'hof',
      width: 'half',
    });
    const buttonPtg = new Button({
      label: 'PLAY THE GAME',
      buttonType: 'ptg',
      width: 'half',
    });

    // const ButtonSettingsRendered = ButtonSettings.render();
    const ButtonLeftRendered = buttonLeft.render();
    const ButtonPtgRendered = buttonPtg.render();

    const hallOfFameImage = document.createElement('img');
    hallOfFameImage.src = hallOfFameIcon;
    ButtonLeftRendered.appendChild(hallOfFameImage);
    ButtonLeftRendered.addEventListener('click', () => changeModeDetail(false), { once: true });

    const time = new Time();

    const addElement = (parentContainer, ElementToCreate, classOfElementToCreate) => {
      const container = document.querySelector(parentContainer);
      if (container.querySelector(classOfElementToCreate)) return;
      container.appendChild(ElementToCreate);
    };

    ButtonPtgRendered.addEventListener('click', () => {
      const quiz1 = document.querySelector('.quiz-container');
      console.log(quiz1);
      quiz1.classList.add('show');
    });

    ButtonPtgRendered.addEventListener('click', () => {
      removeElement('.index-page__container');
      addElement('#main-grid-container', time.setTime(), '.lightSabreProgresBar');
    });

    // this.container.appendChild(ButtonSettingsRendered);
    this.container.appendChild(ButtonLeftRendered);
    this.container.appendChild(ButtonPtgRendered);

    return this.container;
  }
}

export default ButtonsContainer;
