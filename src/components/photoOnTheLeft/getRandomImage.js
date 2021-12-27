import fetchStarWarsData from '../../fetch';

const PHOTO_CATEGORIES = ['starships', 'vehicles', 'people'];
const randomCategory = PHOTO_CATEGORIES[Math.floor(Math.random() * PHOTO_CATEGORIES.length)];

const fetchURLFromArray = async (source, index) => {
  const response = await fetch(source);
  const data = await response.json();
  return data.results[index].url;
};

function getUrlPattern(data) {
  const randomArrayIndex = Math.floor(Math.random() * data.count).toString();
  const indexToFetch = parseInt(randomArrayIndex.slice(-1), 10);
  const pageNr = randomArrayIndex.length > 1 ? parseInt(randomArrayIndex.slice(0, -1), 10) + 1 : 1;
  const source = `https://swapi.dev/api/${data.category}/?page=${pageNr}`;
  return fetchURLFromArray(source, indexToFetch);
}

function getLinkToImage(url) {
  const urlSuffix = url.replace('https://swapi.dev/api/', '').slice(0, -1);
  const imgScr = `https://raw.githubusercontent.com/nowakprojects/CodersCamp2020.Project.JavaScript.StarWarsQuiz/develop/static/assets/img/modes/${urlSuffix}.jpg`;
  return imgScr;
}

const getRandomImgSrc = () => {
  return fetchStarWarsData(randomCategory)
    .then((data) => getUrlPattern(data))
    .then((url) => getLinkToImage(url))
    .then((imgScr) => {
      return imgScr;
    });
};

export default getRandomImgSrc;
