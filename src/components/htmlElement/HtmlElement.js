export class HtmlElement {
  constructor(classList = [], htmlTag = null, label = '') {
    this.classList = classList;
    this.htmlTag = htmlTag;
    this.label = label;
  }

  render() {
    const htmlElement = document.createElement(this.htmlTag);

    if (Array.isArray(this.classList)) {
      this.classList.forEach((element) => {
        htmlElement.classList.add(element);
      });
    }

    if (this.label) htmlElement.innerText = this.label;

    return htmlElement;
  }
}

export default HtmlElement;
