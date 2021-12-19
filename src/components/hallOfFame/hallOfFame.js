import Header from '../header/Header';
import HtmlElement from '../htmlElement/HtmlElement';
import Container from '../container/Container';
import './styles.css';

function nth(n) {
  return ['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th';
}

export default class HallOfFame {
  constructor(mode) {
    this.leaderBoardMode = JSON.parse(localStorage.getItem('hallOfFame'))?.[mode];
  }

  render() {
    const container = new HtmlElement(['container-hof'], 'div').render();

    const headerElement2 = new Header('Hall Of Fame', ['main__subheader'], 'h3');
    const HeaderContainerElement = new Container(['main__subheader-container'], 'div');
    const HeaderContainerElementRendered = HeaderContainerElement.render();

    const graduationCapImage = document.createElement('img');
    graduationCapImage.src = '/school_24px.svg';

    HeaderContainerElementRendered.appendChild(graduationCapImage);
    HeaderContainerElementRendered.appendChild(headerElement2.render());

    container.appendChild(HeaderContainerElementRendered);

    if (this.leaderBoardMode === undefined) {
      const message = new HtmlElement(['message'], 'p', 'Leaderboard empty.').render();
      container.appendChild(message);
      return container;
    }

    const leaderBoardHTML = new HtmlElement(['leaderboard'], 'ol').render();

    let item = new HtmlElement(['item'], 'li').render();
    let leaderBoardId = new HtmlElement(['bold'], 'p', 'Place').render();
    let leaderBoardName = new HtmlElement(['bold'], 'p', 'Name').render();
    let leaderBoardAnswered = new HtmlElement(['bold'], 'p', 'Score').render();
    item.innerHTML += leaderBoardId.outerHTML + leaderBoardName.outerHTML + leaderBoardAnswered.outerHTML;
    leaderBoardHTML.appendChild(item);

    this.leaderBoardMode.forEach((el, id) => {
      id += 1;
      item = new HtmlElement(['item'], 'li').render();

      leaderBoardId = new HtmlElement([], 'p', id + nth(id)).render();
      leaderBoardName = new HtmlElement([], 'p', el.name).render();
      leaderBoardAnswered = new HtmlElement([], 'p', `${el.questions.correct} / ${el.questions.all}`).render();

      item.innerHTML += leaderBoardId.outerHTML + leaderBoardName.outerHTML + leaderBoardAnswered.outerHTML;
      leaderBoardHTML.appendChild(item);
    });
    container.appendChild(leaderBoardHTML);
    return container;
  }
}
