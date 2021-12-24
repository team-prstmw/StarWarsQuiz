import HallOfFame from '../components/hallOfFame/hallOfFame';
import Rules from '../components/rules/rules';

const changeModeDetail = (isHallOfFame) => {
  const leftButton = document.querySelector('section.container button');
  const mainContainer = document.querySelector('.main__modes-container');
  const img = document.createElement('img');

  if (isHallOfFame) {
    leftButton.innerText = 'Hall of Fame';
    img.src = '/hall_of_fame.svg';
    leftButton.appendChild(img);

    const rules = new Rules().render();
    mainContainer.innerHTML = rules.outerHTML;
  } else {
    leftButton.innerText = 'Rules';
    img.src = '/school_24px.svg';
    leftButton.appendChild(img);

    const hallOfFame = new HallOfFame(document.mode).render();
    mainContainer.innerHTML = hallOfFame.outerHTML;
  }

  leftButton.removeEventListener('click', () => changeModeDetail(isHallOfFame), { once: true });
  leftButton.addEventListener('click', () => changeModeDetail(!isHallOfFame), { once: true });
};

export default changeModeDetail;
