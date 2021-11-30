const fetchStarWarsData = async (type) => {
  const response = await fetch("https://swapi.dev/api/" + type).catch((err) => {
    console.log("rejected:", err.message);
    return { error: err.message };
  });
  if (response.status !== 200) {
    throw new Error("can't fetch the data");
  }

  const data = await response.json();

  return data;
};

// fetchStarWarsData("people"); // przykład

export default fetchStarWarsData;
