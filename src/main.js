import indexPageModes from "./layouts/indexPageModes"
import changeGameMode from "./changeGameMode"

const indexPage = new indexPageModes()

document.getElementById("main-grid-container").appendChild(indexPage.render())

const btnChar = document.querySelector('.btn-characters')
btnChar.addEventListener('click', ()=> changeGameMode('.main__header', '.main__description',"MODE: Who is this character?", 'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select who from Star Wars is showed on the left (Jar Jar Binks right now) from available options.'))

const btnVehicles = document.querySelector('.btn-vehicles')
btnVehicles.addEventListener('click', ()=> changeGameMode('.main__header','.main__description',"MODE: What kind of vehicle is this?", "You have one minute (1m) to answer as many questions as possible. During the game you need to select what vehicle from Star Wars is showed in the picture."))

const btnStarships = document.querySelector('.btn-starships')
btnStarships.addEventListener('click', ()=> changeGameMode('.main__header','.main__description',"MODE: What kind of starship is this?", "You have one minute (1m) to answer as many questions as possible. During the game you need to select what starship from Star Wars is showed in the picture."))

