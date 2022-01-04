import './saberTime.css';

function createHTML() {
  const divOuter = document.createElement('div');
  divOuter.id = 'lightSabreProgresBar';

  const sabreContainer = document.createElement('div');
  sabreContainer.classList = 'sabreCont';

  const image = document.createElement('img');
  image.src = 'images/sabre.png';
  image.alt = 'Saber shaft';

  const divProgresBar = document.createElement('div');
  divProgresBar.classList = 'progresBar';

  const divSabre = document.createElement('div');
  divSabre.classList = 'sabre';

  const divTimer = document.createElement('div');
  divTimer.classList = 'timer';
  divTimer.innerHTML = 'Time Left:';

  const spanTime = document.createElement('span');
  spanTime.classList = 'time';

  document.body.appendChild(divOuter);

  sabreContainer.appendChild(image);
  sabreContainer.appendChild(divProgresBar);
  divOuter.appendChild(sabreContainer);
  divOuter.appendChild(divTimer);

  divProgresBar.appendChild(divSabre);
  divTimer.appendChild(spanTime);

  document.getElementById('main-grid-container').appendChild(divOuter);
}

export default createHTML;
