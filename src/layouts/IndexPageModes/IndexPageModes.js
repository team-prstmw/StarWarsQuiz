import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import Rules from '../../components/rules/rules';

import './styles.css';

class IndexPageModes {
  render() {
    const container = document.createElement('section');

    container.innerHTML = '';
    container.classList.add('index-page__container');

    const containerElement1 = new Container(['main__header-container'], 'div');
    const headerElement1 = new Header('MODE: Who is this character?', ['main__header'], 'h2');

    const modesContainerElement = new Container(['main__modes-container'], 'div');
    const modesContainerElementRendered = modesContainerElement.render();

    const rules = new Rules().render();
    modesContainerElementRendered.appendChild(rules);

    const containerElement1Rendered = containerElement1.render();
    containerElement1Rendered.appendChild(headerElement1.render());

    container.appendChild(containerElement1Rendered);
    container.appendChild(modesContainerElementRendered);

    return container;
  }
}

export default IndexPageModes;
