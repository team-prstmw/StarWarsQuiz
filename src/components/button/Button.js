import './styles.css';

class Button {
  constructor({ label = '', onClick = null, buttonType = 'default', imageSrc = null, id, width = 'auto' }) {
    this.id = id;
    this.label = label;
    this.onClick = onClick;
    this.buttonType = buttonType;
    this.imageSrc = imageSrc;
    this.width = width;
    this.className = 'button';
  }

  render() {
    const btn = document.createElement(`button`);
    const img = document.createElement(`img`);
    img.src = this.imageSrc;
    btn.appendChild(img);
    btn.innerText = this.label;
    btn.className = this.className;

    if (this.buttonType === 'default') {
      btn.className = `${this.className} default`;
    }
    if (this.buttonType === 'hof') {
      btn.className = `${this.className} hof`;
    }
    if (this.buttonType === 'ptg') {
      btn.className = `${this.className} ptg`;
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
