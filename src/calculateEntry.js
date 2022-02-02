const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, cur) => {
    if (cur.age < 18) {
      console.log(cur.age);
      acc.child += 1;
    }

    if (cur.age >= 18 && cur.age < 50) {
      acc.adult += 1;
    }

    if (cur.age >= 50) {
      acc.senior += 1;
    }
    return acc;
  }, { adult: 0, child: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }

  const { adult, child, senior } = countEntrants(entrants);
  const { adult: adultTicket, child: childTicket, senior: seniorTicket } = prices;

  return ((adultTicket * adult) + (childTicket * child) + (seniorTicket * senior));
}
module.exports = { calculateEntry, countEntrants };
