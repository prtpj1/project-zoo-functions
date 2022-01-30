const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const allAnimals = () => {
  const animals = {};
  species.forEach((elemAnimal) => {
    const eachOne = `${elemAnimal.name}`;
    animals[eachOne] = elemAnimal.residents.length;
  });
  return animals;
};

const countByName = (specie) => species
  .find((elemAnimal) => elemAnimal.name === specie).residents.length;

const countBySex = (specie, sex) =>
  species.find((eleAnimal) => specie === eleAnimal.name)
    .residents.filter((eleAnimal) => eleAnimal.sex === sex).length;
// const total = allAnimals.residents.filter((element) => sex === element.sex)

function countAnimals(animal) {
  if (animal === undefined) {
    return allAnimals();
  }
  const { specie, sex } = animal;
  if (sex === undefined) {
    return countByName(specie);
  }

  return countBySex(specie, sex);
}

countAnimals({ specie: 'penguins' });
module.exports = countAnimals;

/*
Esta função é responsável por contabilizar a quantidade de animais de cada espécie.

Observações técnicas

Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor; {species.name: total numerico}

Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;

Com o argumento { specie: 'giraffes', sex: 'female' }, retorna um número, a quantidade de girafas do sexo feminino.

O que será avaliado

Sem parâmetros, retorna as espécies e sua quantidade;
Recebendo como parâmetro um objeto com a chave specie, retorna um número, a quantidade de animais daquela espécie;
Recebendo como parâmetro um objeto com a chave specie e sex, retorna um número, a quantidade de animais daquela espécie, no sexo selecionado. */
