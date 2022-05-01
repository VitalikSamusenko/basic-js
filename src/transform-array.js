const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) 
    throw new Error("'arr' parameter must be an instance of the Array!");

  if (arr.length == 0) 
    return [];

  let rezult = [];

  for (let i = 0; i < arr.length; i++) {

  if (arr[i] == '--discard-next') {
    if (arr[i++] == '--discard-prev' || arr[i++] == '--double-prev');
  } 
  else if (arr[i] == '--discard-prev') {
    rezult.pop();
  } 
  else if (arr[i] == '--double-next') { 
    rezult.push(arr[i+1]);
  } 
  else if (arr[i] == '--double-prev' && i != 0) {
    rezult.push(rezult[rezult.length-1]);
  }  
  else if(arr[i] == '--double-prev' && i == 0){
  }
  else  rezult.push(arr[i]);
}
if (typeof rezult[rezult.length - 1] === 'undefined') rezult.pop();

  return rezult;
}

module.exports = {
  transform
};
