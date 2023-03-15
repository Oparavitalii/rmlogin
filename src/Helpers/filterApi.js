const filterApi = (data) => {
  return data.map((character) => {
    return {
      gender: character.gender,
      id: character.id,
      image: character.image,
      name: character.name,
      origin: character.origin.name,
      species: character.species,
      status: character.status,
      type: character.type,
    };
  });
};

const filterNames = (data) => {
 return data.filter((character) => character.name).sort((a, b) => a.name.localeCompare(b.name));
}

const composeFilters = (data) => {
  return filterApi(filterNames(data));
}

export { composeFilters }; 
