import playSound from '../../playSound';
import IMAGES_IDs from './all_Images';
import SOUNDS_IDs from './allSounds';

function getRandomImage(category = '') {
  // if (!category) {
  //   // return random from all pictures in IMAGES_IDs
  //   source = '../../../images/Yoda.png';
  //   return '../../../images/Yoda.png';
  // }

  const photosInCategory = IMAGES_IDs[category];
  const randomImageID = photosInCategory[Math.floor(Math.random() * photosInCategory.length)];
  let source = `../../../images/modes/${randomImageID}.jpg`;

  // TO TEST PLAY CHARACTERS VOICES PLEASE UNCOMMENT CODE BELOW AND COMMENT ALL 2 LINES ABOVE
  // const randomImageID = 'people/1';
  // let source = `../../../images/modes/people/1.jpg`;

  if (SOUNDS_IDs.includes(randomImageID)) {
    playSound(`/assets/sounds/charactersVoices/${randomImageID}.mp3`);
  }

  return source;
}
export default getRandomImage;
