export class HtmlElement {
  constructor(classList = [], htmlTag = null) {
    this.classList = classList;
    this.htmlTag = htmlTag;
  }

  render() {
    const htmlElement = document.createElement(this.htmlTag);

    if (Array.isArray(this.classList)) {
      this.classList.forEach((element) => {
        htmlElement.classList.add(element);
      });
    }

    return htmlElement;
  }
}

export default HtmlElement;
