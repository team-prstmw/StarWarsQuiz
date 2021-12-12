export default class Question {
  constructor(questionText) {
    this.ul = document.createElement('ul');
    this.ul.innerHTML = `${questionText}`;
  }

  render() {
    return this.ul;
  }
}
