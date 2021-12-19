import HallOfFame from '../components/hallOfFame/hallOfFame';
import Rules from '../components/rules/rules';

const changeModeDetail = (isHallOfFame) => {
  const leftButton = document.querySelector('section.container button');
  const mainContainer = document.querySelector('.main__modes-container');

  if (isHallOfFame) {
    leftButton.innerText = 'Hall of Fame';
    leftButton.removeEventListener('click', changeModeDetail, true);
    leftButton.addEventListener('click', changeModeDetail, false);

    const rules = new Rules().render();
    mainContainer.innerHTML = rules.outerHTML;
  } else {
    leftButton.innerText = 'Rules';
    leftButton.removeEventListener('click', changeModeDetail, false);
    leftButton.addEventListener('click', changeModeDetail, true);

    const hallOfFame = new HallOfFame(document.mode).render();
    mainContainer.innerHTML = hallOfFame.outerHTML;
  }
};

export default changeModeDetail;
