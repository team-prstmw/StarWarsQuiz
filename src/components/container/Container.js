import './styles.css';

export class Container {
  constructor(classList = []) {
    this.classList = classList;
  }

  render() {
    const container = document.createElement('div');

    if (Array.isArray(this.classList)) {
      this.classList.forEach((element) => {
        container.classList.add(element);
      });
    }

    return container;
  }
}

export default Container;
