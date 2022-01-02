import IMAGES_IDs from './all_Images';

function getRandomImage(category = '') {
  if (!category) {
    // return random from all pictures in IMAGES_IDs
    source = '../../../images/Yoda.png';
    return '../../../images/Yoda.png';
  }

  const photosInCategory = IMAGES_IDs[category];
  const randomImageID = photosInCategory[Math.floor(Math.random() * photosInCategory.length)];
  const source = `../../../images/modes/${randomImageID}.jpg`;
  return source;
}
export default getRandomImage;
