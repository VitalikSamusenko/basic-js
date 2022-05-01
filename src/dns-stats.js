const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let domainsObj = {};
  let s, arr;

  for (let d of domains) {

    arr = d.split('.').reverse()

    for (let i = 0; i < arr.length; i++) {

      s = '.' + arr.slice(0, i + 1).join('.')
      if (domainsObj[s]) {
        domainsObj[s]++;
      }else {
        domainsObj[s] = 1;
      }

    }
  }
  return domainsObj;
}

module.exports = {
  getDNSStats
};
