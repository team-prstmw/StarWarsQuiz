import Header from '../header/Header';
import Container from '../container/Container';
import Description from '../description/Description';
import schoolIcon from '/school_24px.svg';

export default class Rules {
  render() {
    const container = document.createElement('div');
    const headerElement2 = new Header('Mode Rules', ['main__subheader'], 'h3');
    const descriptionElement = new Description(
      'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select who from Star Wars is showed on the left (Jar Jar Binks right now) from available options.',
      ['main__description']
    );

    const HeaderContainerElement = new Container(['main__subheader-container'], 'div');
    const HeaderContainerElementRendered = HeaderContainerElement.render();

    const graduationCapImage = document.createElement('img');
    graduationCapImage.src = schoolIcon;

    HeaderContainerElementRendered.appendChild(graduationCapImage);
    HeaderContainerElementRendered.appendChild(headerElement2.render());

    container.append(HeaderContainerElementRendered);
    container.append(descriptionElement.render());
    return container;
  }
}
