const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === '' || ids === undefined) {
    return [];
  }
  return species.filter((animal) => ids.includes(animal.id));
}

module.exports = getSpeciesByIds;
