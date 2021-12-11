import Button from '../components/button/Button';

export class Buttons {
  constructor() {
    this.buttons = null;
  }

  render() {
    if (!this.buttons) {
      this.buttons = document.createElement('section');
    }
    this.buttons.innerHTML = '';
    this.buttons.classList.add('buttons__container');
    this.buttons.style.gridArea = 'buttons';
    this.buttons.style.margin = '1rem 0';
    this.buttons.style.alignSelf = 'start';
    this.buttons.style.minWidth = '100%';
    this.buttons.style.gap = '10px';
    this.buttons.style.display = 'flex';
    this.buttons.style.justifyContent = 'space-between';

    // const ButtonSettings = new Button({ label: 'Settings', type: 'default', width: 'full' });
    const ButtonHof = new Button({
      label: 'Hall of fame',
      type: 'hof',
      width: 'half',
    });
    const ButtonPtg = new Button({
      label: 'PLAY THE GAME',
      type: 'ptg',
      width: 'half',
    });

    // const ButtonSettingsRendered = ButtonSettings.render();
    const ButtonHofRendered = ButtonHof.render();
    const ButtonPtgRendered = ButtonPtg.render();

    const hallOfFame_img = document.createElement('img');
    hallOfFame_img.src = '/hall_of_fame.svg';
    ButtonHofRendered.appendChild(hallOfFame_img);

    // this.container.appendChild(ButtonSettingsRendered);
    this.buttons.appendChild(ButtonHofRendered);
    this.buttons.appendChild(ButtonPtgRendered);

    return this.buttons;
  }
}

export default Buttons;
