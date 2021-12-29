import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import Button from '../../components/button/Button';
import redirectToTheHomepage from '../../utils/redirectToTheHomepage';

class ErrorPage {
  render() {
    const container = new Container(['index-page__container'], 'section');
    const containerRendered = container.render();
    // const container = document.createElement('section');

    // container.innerHTML = '';
    // container.classList.add('index-page__container');

    // const yodaImage = new Image(['yoda-image'], 'img', '../../images/yoda');
    const yodaImage = document.createElement('img');
    yodaImage.src = '/images/yoda.svg';
    yodaImage.style.fill = 'white';
    yodaImage.style.width = '200px';
    // const yodaImageRendered = yodaImage.render();

    const containerElement = new Container(['error-page__container'], 'div');
    const headerElement1 = new Header('occurred a 404 error has.', ['error-page__header'], 'h1');

    const headerElement2 = new Header('How embarrassing...', ['error-page__subheader'], 'h2');

    const button = new Button({
      label: 'Go to Homepage',
      buttonType: 'error-page__button',
      onClick: redirectToTheHomepage,
    });

    const containerElementRendered = containerElement.render();

    containerElementRendered.appendChild(yodaImage);
    containerElementRendered.appendChild(headerElement1.render());
    containerElementRendered.appendChild(headerElement2.render());
    containerElementRendered.appendChild(button.render());

    containerRendered.appendChild(containerElementRendered);

    return containerRendered;
  }
}

export default ErrorPage;
