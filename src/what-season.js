const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 12, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date || !(date instanceof Date)) {
    return 'Unable to determine the time of year!';
  } else if (isNaN(date)) {
    throw new Error('Invalid date!');
  }
  
  const month = date.getMonth();
  if (month === 11 || month <= 1) {
    return 'winter';
  } else if (month >= 2 && month <= 4) {
    return 'spring';
  } else if (month >= 5 && month <= 7) {
    return 'summer';
  } else {
    return 'autumn';
  }
}
console.log(getSeason(new Date(2019, 11, 22, 23, 45, 11, 500)) )
module.exports = {
  getSeason
};
