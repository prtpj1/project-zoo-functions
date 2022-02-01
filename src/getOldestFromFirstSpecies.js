const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const idFunc = employees.find((elemId) => elemId.id === id)
    .responsibleFor.find((elemAnimal) => elemAnimal);

  const getSpecie = species.find((eleSpecie) => eleSpecie.id === idFunc)
    .residents;

  const sortResidents = getSpecie.sort((a, b) => a.age - b.age);
  const getOld = sortResidents[sortResidents.length - 1];
  const oldest = Object.keys(getOld).map((key) => (getOld[key]));
  return oldest;
}

getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
module.exports = getOldestFromFirstSpecies;
