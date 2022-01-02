import { hideStarWarsIntro } from './hideStarWarsIntro';

let tapedTwice = false;

export function tapHandler(event) {
  if (!tapedTwice) {
    tapedTwice = true;
    setTimeout(() => {
      tapedTwice = false;
    }, 300);
    return false;
  }
  event.preventDefault();

  document.removeEventListener(
    'touchstart',
    (e) => {
      if (document.querySelector('.intro__container')) {
        tapHandler(e);
      }
    },
    false
  );
  return hideStarWarsIntro();
}

export default tapHandler;
