export default class Answer {
  constructor(text) {
    this.li = document.createElement('li');
    this.li.innerHTML = text;
  }

  render() {
    return this.li;
  }
}
