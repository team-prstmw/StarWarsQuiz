import Header from '../components/header/Header';
import Container from '../components/container/Container';
import Description from '../components/description/Description';

export class IndexPageModes {
  render() {
    const container = document.createElement('section');

    container.innerHTML = '';
    container.classList.add('index-page__container');

    container.style.gridArea = 'mode-description';
    container.style.margin = '0 3rem';
    container.style.alignSelf = 'start';

    const containerElement1 = new Container(['main__header-container'], 'div');
    const headerElement1 = new Header('MODE: Who is this character?', ['main__header'], 'h2');

    const modesContainerElement = new Container(['main__modes-container'], 'div');
    const headerElement2 = new Header('Mode Rules', ['main__subheader'], 'h3');
    const descriptionElement = new Description(
      'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select who from Star Wars is showed on the left (Jar Jar Binks right now) from available options.',
      ['main__description']
    );

    const HeaderContainerElement = new Container(['main__subheader-container']);
    const HeaderContainerElementRendered = HeaderContainerElement.render();

    const containerElement1Rendered = containerElement1.render();
    containerElement1Rendered.appendChild(headerElement1.show());

    const modesContainerElementRendered = modesContainerElement.render();

    const graduationCapImage = document.createElement('img');
    graduationCapImage.src = '/school_24px.svg';

    HeaderContainerElementRendered.appendChild(graduationCapImage);
    HeaderContainerElementRendered.appendChild(headerElement2.show());

    modesContainerElementRendered.appendChild(HeaderContainerElementRendered);
    modesContainerElementRendered.appendChild(descriptionElement.show());

    container.appendChild(containerElement1Rendered);
    container.appendChild(modesContainerElementRendered);

    return container;
  }
}

export default IndexPageModes;
