const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const nameAnimal = species.find((nAnimal) => (nAnimal.name === animal));
  // console.log(nameAnimal);
  return nameAnimal.residents.every((ageAnimal) => (ageAnimal.age >= age));
}

console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;

/*
Pegar o nome em species
Pegar a idade em species.residents

Definir o nome e idade minima
Verificar se TODOS tem a idade minima (.every)
Retornar true ou false

Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.

Observações técnicas

Deve retornar um valor booleano.
O que será avaliado

Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada. */
