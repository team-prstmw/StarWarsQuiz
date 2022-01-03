import IMAGES_IDs from './all_Images';

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * IMAGES_IDs.length);
  return IMAGES_IDs[randomIndex];
}

export default getRandomImage;
