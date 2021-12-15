import Button from '../components/button/Button';

export class ButtonsContainer {
  constructor() {
    this.container = null;
  }

  render() {
    if (!this.container) {
      this.container = document.createElement('section');
    }
    this.container.innerHTML = '';
    this.container.classList.add('buttons__container');
    this.container.style.gridArea = 'buttons';
    this.container.style.margin = '1rem 0';
    this.container.style.alignSelf = 'start';
    this.container.style.minWidth = '100%';
    this.container.style.gap = '10px';
    this.container.style.display = 'flex';
    this.container.style.justifyContent = 'space-between';

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
