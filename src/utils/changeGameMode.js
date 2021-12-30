export const changeGameMode = (btn) => {
  window.mode = btn.target.innerText.toLowerCase();
  const modeObject = document.MODES[window.mode];
  document.querySelector('.main__header').innerHTML = `MODE: ${modeObject.header}`;
  document.querySelector(
    '.main__description'
  ).innerHTML = `You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select ${modeObject.description}`;
};

export default changeGameMode;
