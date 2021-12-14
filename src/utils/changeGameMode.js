export const changeGameMode = (text, description) => {
  document.querySelector('.main__header').innerHTML = `MODE: ${text}`;
  document.querySelector(
    '.main__description'
  ).innerHTML = `You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select ${description}`;
};

export const addListenerToButtons = (btnArr = [], text, description) => {
  btnArr.forEach((btnClass, index) => {
    const btn = document.querySelector(btnClass);
    btn.addEventListener('click', () => changeGameMode(text[index], description[index]));
  });
};

export default changeGameMode;
