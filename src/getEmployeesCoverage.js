const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

const employeeProfile = (empProfile) => {
  let profile = {};
  profile = employees
    .find((empSelect) => empSelect.firstName === empProfile.name
      || empSelect.lastName === empProfile.name
      || empSelect.id === empProfile.id);
  const { id: empId, firstName: empFName, lastName: empLName } = profile;
  return ({
    id: `${empId}`,
    fullName: `${empFName} ${empLName}`,
    species: profile.responsibleFor
      .map((responsibleIds) => species
        .find((specieId) => specieId.id === responsibleIds))
      .map((specieName) => specieName.name),
    locations: profile.responsibleFor
      .map((responsibleIds) => species
        .find((specieId) => specieId.id === responsibleIds))
      .map((specieName) => specieName.location),
  });
};

const noParameters = () => employees.map((employee) => ({
  id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: (employee.responsibleFor
    .map((responsibleIds) => species
      .find((specieId) => specieId.id === responsibleIds)))
    .map((specieName) => specieName.name),
  locations: (employee.responsibleFor
    .map((responsibleIds) => species
      .find((specie) => specie.id === responsibleIds)))
    .map((specie) => specie.location),
}));

function getEmployeesCoverage(employee) {
  try {
    if (employee === undefined) {
      return noParameters();
    }
    return employeeProfile(employee);
  } catch (error) {
    throw new Error('Informações inválidas');
  }
}

getEmployeesCoverage();

module.exports = getEmployeesCoverage;

/*
{
  id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
  fullName: 'Sharonda Spry',
  species: [ 'otters', 'frogs' ],
  locations: [ 'SE', 'SW' ],
}
*/
