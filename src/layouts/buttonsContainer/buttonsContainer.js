import Button from '../../components/button/Button';
import './styles.css';

export class ButtonsContainer {
  constructor() {
    this.container = null;
  }

  render() {
    if (!this.container) {
      this.container = document.createElement('section');
      this.container.className = 'container';
    }

    // const ButtonSettings = new Button({ label: 'Settings', type: 'default', width: 'full' });
    const buttonHof = new Button({
      label: 'Hall of fame',
      type: 'hof',
      width: 'half',
    });
    const buttonPtg = new Button({
      label: 'PLAY THE GAME',
      type: 'ptg',
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
