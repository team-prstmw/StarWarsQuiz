import './styles.css';

class Button {
  constructor({ label = '', onClick = undefined, type = 'default', imageSrc = null, id, width = 'auto' }) {
    this.is = id;
    this.label = label;
    this.onClick = onClick;
    this.type = type;
    this.imageSrc = imageSrc;
    this.width = width;
  }

  render() {
    const btn = document.createElement(`button`);
    const img = document.createElement(`img`);
    img.src = this.imageSrc;
    btn.appendChild(img);
    btn.innerText = this.label;

    if (this.type === 'default') {
      btn.className = 'button default';
    }
    if (this.type === 'hof') {
      btn.className = 'button hof';
    }
    if (this.type === 'ptg') {
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
    btn.addEventListener('click', () => this.onClick());

    return btn;
  }
}

export default Button;
