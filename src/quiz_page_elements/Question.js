export default class Question {
  constructor(questionText) {
    this.p = document.createElement('p');
    this.p.innerHTML = `${questionText}`;
  }

  render() {
    return this.p;
  }
}
