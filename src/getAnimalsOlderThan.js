const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const nameAnimal = species.find((nAnimal) => (nAnimal.name === animal));

  return nameAnimal.residents.every((ageAnimal) => (ageAnimal.age >= age));
}

console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
