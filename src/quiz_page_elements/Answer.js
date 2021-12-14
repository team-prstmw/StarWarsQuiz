import './answer.css';

export default class Answer {
  constructor(text) {
    this.div = document.createElement('div');
    this.div.innerHTML = text;
    this.div.className = 'quiz-answer';
  }

  render() {
    return this.div;
  }
}
