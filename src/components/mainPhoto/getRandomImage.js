import IMAGES_IDs from './all_Images';

function getRandomImage(category = '', imagesCollection = []) {
  const photosInCategory = !imagesCollection.length ? IMAGES_IDs[category] : imagesCollection;
  const randomImageID = photosInCategory[Math.floor(Math.random() * photosInCategory.length)];
  const source = `/modes/${randomImageID}.jpg`;
  // const source = `../../../images/modes/${randomImageID}.jpg`;
  return source;
}
export default getRandomImage;
