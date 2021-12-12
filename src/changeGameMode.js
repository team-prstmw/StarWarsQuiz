export const changeGameMode = (htmlElementQuestion, htmlElementQuestionDescription, text, description) => {
  document.querySelector(htmlElementQuestion).innerHTML = `MODE: ${text}`;
  document.querySelector(
    htmlElementQuestionDescription
  ).innerHTML = `You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select ${description}`;
};

export const addListenerToButtons = (
  btnArr = [],
  htmlElementQuestion,
  htmlElementQuestionDescription,
  text,
  description
) => {
  btnArr.forEach((btnClass, index) => {
    const btn = document.querySelector(btnClass);
    btn.addEventListener('click', () =>
      changeGameMode(htmlElementQuestion, htmlElementQuestionDescription, text[index], description[index])
    );
  });
};

export default changeGameMode;
