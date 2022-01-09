import Header from '/src/components/header/Header';
import Container from '/src/components/container/Container';
import Description from '/src/components/description/Description';
import './styles.css';
import starWarsLogo from '/images/starwars_logo.png';

class StarWarsIntro {
  render() {
    const mainIntroContainer = new Container(['intro__container'], 'section');
    const mainIntroContainerRendered = mainIntroContainer.render();

    const introContainer = new Container(['intro'], 'div');

    const introHeader = new Header(`A long time ago, in a a galaxy far,<br> far away....`, ['intro__header'], 'h2');

    const logoContainer = new Container(['intro__logo-container'], 'div');
    const logoImage = document.createElement('img');
    logoImage.src = starWarsLogo;
    logoImage.alt = 'Star Wars logo';

    const sliderContainer = new Container(['slider__container'], 'div');
    const descriptionContainer = new Container(['description__container'], 'div');

    const firstParagraph = new Description(
      'It is a period of Coders Wars in the galaxy. A brave group of underground young programmers has challenged the tyranny and oppression of the awesome PROGRAMMERS COMMUNITY.',
      ['slider__description'],
      'p'
    );
    const secondParagraph = new Description(
      'Striking from a fortress hidden among the few houses in Poland, rebel programmers have won their first victory in a battle with the difficult Trello Tasks. The COMMUNITY fears that another defeat could bring a thousand more motivated people into the market, and Seniors control over the galaxy would be lost forever.',
      ['slider__description'],
      'p'
    );
    const thirdParagraph = new Description(
      'To crush the newbies once and for all, the COMMUNITY is constructing a sinister new battle task. Powerful enough to destroy an entire planet, its incompletion spells certain doom for the champions of keyboards.',
      ['slider__description'],
      'p'
    );

    const introContainerRendered = introContainer.render();
    const logoContainerRendered = logoContainer.render();
    const sliderContainerRendered = sliderContainer.render();
    const descriptionContainerRendered = descriptionContainer.render();

    const firstParagraphRendered = firstParagraph.render();
    const secondParagraphRendered = secondParagraph.render();
    const thirdParagraphRendered = thirdParagraph.render();

    introContainerRendered.appendChild(introHeader.render());

    logoContainerRendered.appendChild(logoImage);

    descriptionContainerRendered.append(
      firstParagraphRendered,
      document.createElement('br'),
      secondParagraphRendered,
      document.createElement('br'),
      thirdParagraphRendered
    );

    sliderContainerRendered.appendChild(descriptionContainerRendered);

    mainIntroContainerRendered.append(introContainerRendered, logoContainerRendered, sliderContainerRendered);

    return mainIntroContainerRendered;
  }
}

export default StarWarsIntro;
