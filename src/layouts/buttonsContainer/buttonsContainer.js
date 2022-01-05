import Button from '../../components/button/Button';
import changeModeDetail from '../../utils/changeModeDetail';
import changePages from '../../utils/changePages';
import QuizPage from '../../quizPage';
import Time from '../../components/timeSabarCounter/saberTime'
import './styles.css';

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
    hallOfFameImage.src = '/hall_of_fame.svg';
    ButtonLeftRendered.appendChild(hallOfFameImage);
    ButtonLeftRendered.addEventListener('click', () => changeModeDetail(false), { once: true });

    const time = new Time();

    ButtonPtgRendered.addEventListener('click', () => changePages('.index-page__container', '#main-grid-container', QuizPage ,'.quiz-container'))
    ButtonPtgRendered.addEventListener('click', () => changePages('.index-page__container', '#main-grid-container', time.setTime() ,'.lightSabreProgresBar'))

    // this.container.appendChild(ButtonSettingsRendered);
    this.container.appendChild(ButtonLeftRendered);
    this.container.appendChild(ButtonPtgRendered);

    return this.container;
  }
}

export default ButtonsContainer;
