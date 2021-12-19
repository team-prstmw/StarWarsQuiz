import './question.css';

export default class Question {
  constructor(questionText) {
    this.div = document.createElement('div');
    this.div.innerHTML = `${questionText}`;
    this.div.className = 'question-text';
  }

  render() {
    return this.div;
  }
}
