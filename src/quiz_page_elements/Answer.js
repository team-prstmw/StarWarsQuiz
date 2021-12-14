import './answer.css';

export default class Answer {
  constructor(text) {
    this.div = document.createElement('div');
    this.div.innerHTML = text;
  }

  render() {
    return this.div;
  }
}
