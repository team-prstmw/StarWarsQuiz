import fetchStarWarsData from '../../fetch';

const PHOTO_CATEGORIES = ['starships', 'vehicles', 'people'];

const randomCategory = PHOTO_CATEGORIES[Math.floor(Math.random() * PHOTO_CATEGORIES.length)];

const item = fetchStarWarsData(randomCategory, '').then((data) => {
  for (let i = 0; i < data.count; i++) console.log(data.results[i]);
  return data;
});

const printItem = () => {
  item.then((a) => {
    console.log(a);
  });
};

printItem();

// const randomId = Math.floor(Math.random() * 20);

const getRandomModeAndId = () => {
  return `${PHOTO_CATEGORIES[Math.floor(Math.random() * PHOTO_CATEGORIES.length)]}/${randomId}`;
};

export default getRandomModeAndId;

// export default data;
