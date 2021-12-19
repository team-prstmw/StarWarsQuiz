import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import Description from '../../components/description/Description';
import './styles.css';

class IndexPageModes {
  render() {
    const container = document.createElement('section');

    container.innerHTML = '';
    container.classList.add('index-page__container');

    const containerElement1 = new Container(['main__header-container'], 'div');
    const headerElement1 = new Header('MODE: Who is this character?', ['main__header'], 'h2');

    const modesContainerElement = new Container(['main__modes-container'], 'div');
    const headerElement2 = new Header('Mode Rules', ['main__subheader'], 'h3');
    const descriptionElement = new Description(
      'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select who from Star Wars is showed on the left (Jar Jar Binks right now) from available options.',
      ['main__description']
    );

    const HeaderContainerElement = new Container(['main__subheader-container'], 'div');
    const HeaderContainerElementRendered = HeaderContainerElement.render();

    const containerElement1Rendered = containerElement1.render();
    containerElement1Rendered.appendChild(headerElement1.render());

    const modesContainerElementRendered = modesContainerElement.render();

    const graduationCapImage = document.createElement('img');
    graduationCapImage.src = '/school_24px.svg';

    HeaderContainerElementRendered.appendChild(graduationCapImage);
    HeaderContainerElementRendered.appendChild(headerElement2.render());

    modesContainerElementRendered.appendChild(HeaderContainerElementRendered);
    modesContainerElementRendered.appendChild(descriptionElement.render());

    container.appendChild(containerElement1Rendered);
    container.appendChild(modesContainerElementRendered);

    return container;
  }
}

export default IndexPageModes;
