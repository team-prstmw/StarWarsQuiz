import { hideStarWarsIntro } from './hideStarWarsIntro';

let tapedTwice = false;

function tapHandler(event) {
  if (!tapedTwice) {
    tapedTwice = true;
    setTimeout(() => {
      tapedTwice = false;
    }, 300);
    return false;
  }
  event.preventDefault();
  return hideStarWarsIntro();
}

export default tapHandler;
