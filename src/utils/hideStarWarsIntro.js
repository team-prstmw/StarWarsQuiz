export const hideStarWarsIntro = () => {
  const introContainer = document.querySelector('.intro__container');
  document.body.style.overflow = 'auto';
  introContainer.remove();
};

export default hideStarWarsIntro;
