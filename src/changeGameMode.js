export const changeGameMode = (htmlElementQuestion, htmlElementQuestionDescription, text, description) =>{    
    document.querySelector(htmlElementQuestion).innerHTML = text;
    document.querySelector(htmlElementQuestionDescription).innerHTML = description;
}

export default changeGameMode