import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import Description from '../../components/description/Description';
import './styles.css';

class StarWarsIntro {
  render() {
    const container = document.createElement('section');

    container.innerHTML = '';
    container.classList.add('intro__container');

    const containerElement1 = new Container(['intro'], 'div');

    const introHeader1 = new Header(`A long time ago, in a a galaxy far,<br> far away....`, ['intro__header'], 'h2');

    const logoContainer = new Container(['intro__logo-container'], 'div');
    const logoImage = document.createElement('img');
    logoImage.src = '/images/starwars_logo.png';
    logoImage.alt = 'Star Wars logo';

    const sliderContainer = new Container(['slider__container'], 'div');
    const descriptionContainer = new Container(['description__container'], 'div');

    const descriptionElement1 = new Description(
      'It is a period of Coders Wars in the galaxy. A brave group of underground young programmers has challenged the tyranny and oppression of the awesome PROGRAMMERS COMMUNITY.',
      ['slider__description'],
      'p'
    );
    const descriptionElement2 = new Description(
      'Striking from a fortress hidden among the few houses in Poland, rebel programmers have won their first victory in a battle with the difficult Trello Tasks. The COMMUNITY fears that another defeat could bring a thousand more motivated people into the market, and Seniors control over the galaxy would be lost forever.',
      ['slider__description'],
      'p'
    );
    const descriptionElement3 = new Description(
      'To crush the newbies once and for all, the COMMUNITY is constructing a sinister new battle task. Powerful enough to destroy an entire planet, its incompletion spells certain doom for the champions of keyboards.',
      ['slider__description'],
      'p'
    );

    const containerElement1Rendered = containerElement1.render();
    const logoContainerRendered = logoContainer.render();
    const sliderContainerRendered = sliderContainer.render();
    const descriptionContainerRendered = descriptionContainer.render();

    const descriptionElement1Rendered = descriptionElement1.render();
    const descriptionElement2Rendered = descriptionElement2.render();
    const descriptionElement3Rendered = descriptionElement3.render();

    containerElement1Rendered.appendChild(introHeader1.render());

    logoContainerRendered.appendChild(logoImage);

    descriptionContainerRendered.append(
      descriptionElement1Rendered,
      document.createElement('br'),
      descriptionElement2Rendered,
      document.createElement('br'),
      descriptionElement3Rendered
    );

    sliderContainerRendered.appendChild(descriptionContainerRendered);

    container.append(containerElement1Rendered, logoContainerRendered, sliderContainerRendered);

    return container;
  }
}

export default StarWarsIntro;
