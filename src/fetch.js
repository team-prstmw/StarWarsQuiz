const fetchStarWarsData = async (type) => {
  try {
    const response = await fetch(`https://swapi.dev/api/${type}`);
    if (response.status !== 200) {
      throw new Error("can't fetch the data");
    }

    const data = await response.json();
    data.category = type;

    return data;
  } catch (e) {
    console.log('Error', e);
  }
};

export default fetchStarWarsData;
