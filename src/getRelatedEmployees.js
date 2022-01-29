const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((manager) => manager.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees
    .filter((filterManager) => filterManager.managers
      .find((findManager) => findManager === managerId))
    .map((mapManager) =>
      `${mapManager.firstName} ${mapManager.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
