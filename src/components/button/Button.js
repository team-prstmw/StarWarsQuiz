import './styles.css';

class Button {
  constructor({ label = '', onClick = null, buttonType = 'default', imageSrc = null, id, width = 'auto' }) {
    this.id = id;
    this.label = label;
    this.onClick = onClick;
    this.buttonType = buttonType;
    this.imageSrc = imageSrc;
    this.width = width;
  }

  render() {
    const btn = document.createElement(`button`);
    const img = document.createElement(`img`);
    img.src = this.imageSrc;
    btn.appendChild(img);
    btn.innerText = this.label;

    if (this.buttonType === 'default') {
      btn.className = 'button default';
    }
    if (this.buttonType === 'hof') {
      btn.className = 'button hof';
    }
    if (this.buttonType === 'ptg') {
      btn.className = 'button ptg';
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
