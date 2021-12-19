import Button from '../../components/button/Button';
import './styles.css';

class ButtonsContainer {
  constructor() {
    this.container = null;
  }

  render() {
    this.container = document.createElement('section');
    this.container.className = 'container';

    // const ButtonSettings = new Button({ label: 'Settings', type: 'default', width: 'full' });
    const buttonHof = new Button({
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
    const ButtonHofRendered = buttonHof.render();
    const ButtonPtgRendered = buttonPtg.render();

    const hallOfFameImage = document.createElement('img');
    hallOfFameImage.src = '/hall_of_fame.svg';
    ButtonHofRendered.appendChild(hallOfFameImage);

    // this.container.appendChild(ButtonSettingsRendered);
    this.container.appendChild(ButtonHofRendered);
    this.container.appendChild(ButtonPtgRendered);

    return this.container;
  }
}

export default ButtonsContainer;
