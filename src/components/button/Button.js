import HtmlElement from '../htmlElement/HtmlElement';
import './styles.css';

class Button extends HtmlElement {
  constructor({ label = '', onClick = null, buttonType = 'default', imageSrc = null, id, width = 'auto' }) {
    super(['button'], 'button', label);
    this.id = id;
    this.onClick = onClick;
    this.buttonType = buttonType;
    this.imageSrc = imageSrc;
    this.width = width;
  }

  render() {
    const btn = super.render();
    if (this.imageSrc) {
      const img = document.createElement(`img`);
      img.src = this.imageSrc;
      btn.appendChild(img);
    }

    if (this.buttonType === 'default') {
      btn.classList.add('default');
    }
    if (this.buttonType === 'hof') {
      btn.classList.add('hof');
    }
    if (this.buttonType === 'ptg') {
      btn.classList.add('ptg');
    }
    if (this.buttonType === 'error-page__button') {
      btn.classList.add('error-page__button');
    }
    if (this.width === 'auto') {
      btn.style.width = 'auto';
    }
    if (this.width === 'full') {
      btn.style.width = '100%';
    }
    if (this.width === 'half') {
      btn.style.width = '50%';
    }
    btn.addEventListener('click', this.onClick);

    return btn;
  }
}

export default Button;
