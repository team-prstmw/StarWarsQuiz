export class HtmlElement {
  constructor(classList = [], htmlTag = null, label = '', props = {}) {
    this.classList = classList;
    this.htmlTag = htmlTag;
    this.label = label;
    this.props = props;
  }

  render() {
    const htmlElement = document.createElement(this.htmlTag);

    if (Array.isArray(this.classList)) {
      this.classList.forEach((element) => {
        htmlElement.classList.add(element);
      });
    }

    if (this.label) htmlElement.innerText = this.label;

    for (const [key, value] of Object.entries(this.props)) {
      htmlElement.setAttribute(key, value);
    }

    return htmlElement;
  }
}

export default HtmlElement;
