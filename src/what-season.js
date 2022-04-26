const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (date === undefined) return "Unable to determine the time of year!";
  try {
    date.getTime();
  }catch{
    throw new Error("Invalid date!");
  }

  let month = date.getMonth();
  let season;

  if (month > 1 && month < 5) {
    return (season = "spring");
  } else if (month > 4 && month < 8) {
    return (season = "summer");
  } else if (month > 7 && month < 11) {
    return (season = "autumn");
  } else if (month == 0 || month == 1 || month == 11) {
    return (season = "winter");
  } else {
    throw new Error("Invalid date!");
  }

}

module.exports = {
  getSeason
};
