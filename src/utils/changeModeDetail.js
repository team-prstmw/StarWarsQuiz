import HallOfFame from '../components/hallOfFame/hallOfFame';
import Rules from '../components/rules/rules';
import hallOfFameIcon from '/public/school_24px.svg';

const changeModeDetail = (isHallOfFame) => {
  const leftButton = document.querySelector('section.container button');
  const mainContainer = document.querySelector('.main__modes-container');
  const img = document.createElement('img');

  if (isHallOfFame) {
    leftButton.innerText = 'Hall of Fame';
    img.src = hallOfFameIcon;
    leftButton.appendChild(img);

    const rules = new Rules().render();
    mainContainer.innerHTML = rules.outerHTML;
  } else {
    leftButton.innerText = 'Rules';
    img.src = hallOfFameIcon;
    leftButton.appendChild(img);

    const hallOfFame = new HallOfFame(document.mode).render();
    mainContainer.innerHTML = hallOfFame.outerHTML;
  }

  leftButton.removeEventListener('click', () => changeModeDetail(isHallOfFame), { once: true });
  leftButton.addEventListener('click', () => changeModeDetail(!isHallOfFame), { once: true });
};

export default changeModeDetail;
