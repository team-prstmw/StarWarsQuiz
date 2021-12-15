import './saberTime.css';

function createHTML() {
  const divOuter = document.createElement('div');
  divOuter.id = 'lightSaberProgresBar';

  const image = document.createElement('img');
  image.src = './images/sabre.png';
  image.alt = 'Saber shaft';

  const divProgresBar = document.createElement('div');
  divProgresBar.classList = 'progresBar';

  const divSaber = document.createElement('div');
  divSaber.classList = 'saber';

  const divTimer = document.createElement('div');
  divTimer.classList = 'timer';
  divTimer.innerHTML = 'Time Left: ';

  const spanTime = document.createElement('span');
  spanTime.classList = 'time';

  document.body.appendChild(divOuter);

  divOuter.appendChild(image);
  divOuter.appendChild(divProgresBar);
  divOuter.appendChild(divTimer);

  divProgresBar.appendChild(divSaber);
  divTimer.appendChild(spanTime);

  return divOuter;
}

export default createHTML;
