export const hideStarWarsIntro = () => {
  const introContainer = document.querySelector('.intro__container');
  document.body.style.overflow = 'auto';
  introContainer.remove();
};

export const findLastElementPosition = () => {
  if (document.querySelector('.intro__container')) {
    //   const introDescriptionContainer = document.querySelector('.description__container');
    //   const hidingElement = document.querySelector('.slider__container', '::after');
    const sliderCont = document.querySelector('.slider__container');
    const desccont = document.querySelector('.description__container');
    //   const slidercontdist = sliderCont.getBoundingClientRect().height + sliderCont.pageYOffset;
    const elDistanceToTop = window.pageYOffset + sliderCont.getBoundingClientRect().top;
    const descDistanceToTop = desccont.getBoundingClientRect().top;

    //   const lastDescription = introDescriptionContainer.lastChild;
    //   //   console.log(lastDescription);
    //   const hidingElementHeight = hidingElement.getBoundingClientRect().height;
    //   const hidingElementTop = hidingElement.getBoundingClientRect().top;
    //   const hiderDistanceToTop = window.pageYOffset + hidingElement.getBoundingClientRect().top;
    //   const elDistanceToTop = window.pageYOffset + hidingElement.getBoundingClientRect().top;

    //   const lastDescriptionHeight = lastDescription.getBoundingClientRect().bottom;
    //   console.log(lastDescriptionHeight);
    //   console.log(hidingElementHeight);
    console.log(elDistanceToTop, descDistanceToTop);
    //   hideStarWarsIntro();
  }
};

export default findLastElementPosition;
