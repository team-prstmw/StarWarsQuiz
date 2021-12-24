export const createAudioTag = (url) => {
  const audioElement = document.createElement('audio');
  audioElement.classList.add('background-audio');
  audioElement.src = url;
  audioElement.loop = true;
  document.querySelector('body').appendChild(audioElement);
};

export const playBackgroundMusic = (url) => {
  createAudioTag(url);
  document.querySelector('.background-audio').play();
};

export default playBackgroundMusic;
