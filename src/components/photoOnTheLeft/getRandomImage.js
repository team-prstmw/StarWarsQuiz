import fetchStarWarsData from '../../fetch';

const PHOTO_CATEGORIES = ['starships', 'vehicles', 'people'];
const randomCategory = PHOTO_CATEGORIES[Math.floor(Math.random() * PHOTO_CATEGORIES.length)];

const fetchURLFromArray = async (source, index, category) => {
  const response = await fetch(source);
  const data = await response.json();
  return [data.results[index].url, category];
};

function getUrlPattern(data) {
  const objectsCountInCategory = data.category === 'people' ? data.count : 20;
  const randomArrayIndex = Math.floor(Math.random() * objectsCountInCategory).toString();
  const indexToFetch = parseInt(randomArrayIndex.slice(-1), 10);
  const pageNr = randomArrayIndex.length > 1 ? parseInt(randomArrayIndex.slice(0, -1), 10) + 1 : 1;
  const source = `https://swapi.dev/api/${data.category}/?page=${pageNr}`;
  return fetchURLFromArray(source, indexToFetch, data.category);
}

function getLinkToImage(urlCategory) {
  const urlSuffix = urlCategory[0].replace('https://swapi.dev/api/', '').slice(0, -1);
  return {
    src: `https://raw.githubusercontent.com/nowakprojects/CodersCamp2020.Project.JavaScript.StarWarsQuiz/develop/static/assets/img/modes/${urlSuffix}.jpg`,
    category: urlCategory[1],
  };
}

const getRandomImgSrc = () => {
  return fetchStarWarsData(randomCategory)
    .then((data) => getUrlPattern(data))
    .then((urlCategory) => getLinkToImage(urlCategory))
    .then((imgScr) => {
      return imgScr;
    });
};

export default getRandomImgSrc;
