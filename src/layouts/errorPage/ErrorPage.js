import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import Button from '../../components/button/Button';
import redirectToTheHomepage from '../../utils/redirectToTheHomepage';

class ErrorPage {
  render() {
    const container = document.createElement('section');

    container.innerHTML = '';
    container.classList.add('index-page__container');

    const yodaImage = document.createElement('img');
    yodaImage.src = '../../images/yoda.svg';
    yodaImage.style.fill = 'white';
    yodaImage.style.width = '200px';

    const containerElement1 = new Container(['error-page__container'], 'div');
    const headerElement1 = new Header('occurred a 404 error has.', ['error-page__header'], 'h1');

    const headerElement2 = new Header('How embarrassing...', ['error-page__subheader'], 'h2');

    const button = new Button({
      label: 'Go to Homepage',
      buttonType: 'error-page__button',
      onClick: redirectToTheHomepage,
    });

    const containerElement1Rendered = containerElement1.render();

    containerElement1Rendered.appendChild(yodaImage);
    containerElement1Rendered.appendChild(headerElement1.render());
    containerElement1Rendered.appendChild(headerElement2.render());
    containerElement1Rendered.appendChild(button.render());

    container.appendChild(containerElement1Rendered);

    return container;
  }
}

export default ErrorPage;
