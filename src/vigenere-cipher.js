const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (direction) {
    this.direction = direction;
  }

 encrypt(str, key) {
    if (str == undefined || key == undefined) {
      throw new Error ('Incorrect arguments!');
    }
      let klstr = "";
      let res = "";
      let amount = 0;
      let count = 0;

      for (let i = 0; i < str.length; i++) {
        if (str.toUpperCase().charCodeAt(i) > 64 && str.toUpperCase().charCodeAt(i) < 91) {
          if ((i - count - (key.length * amount)) === key.length) 
          {
            amount++;
          }
          klstr += key.toUpperCase()[i - count - key.length * amount];
        } else {
          klstr += " ";
          count++;          
        }
      }
      for (let i = 0; i < str.length; i++) {
        if (str.toUpperCase().charCodeAt(i) > 64 && str.toUpperCase().charCodeAt(i) < 91) {
          let index = str.toUpperCase().charCodeAt(i) + klstr.charCodeAt(i) - 65;
          if (index > 90) {
            index -= 26;
          }
          res += String.fromCharCode(index);
        } else res += str.toUpperCase()[i];
      }
      if (this.direction === false) {
        return res.split('').reverse().join('');
      }
      return res;
    }

 decrypt(str, key) {
      if (str == undefined || key == undefined) {
        throw new Error ('Incorrect arguments!');
      }
      let klstr = "";
      let res = "";
      let amount = 0;
      let count = 0;

      for (let i = 0; i < str.length; i++) {
        if (str.toUpperCase().charCodeAt(i) >= 65 && str.toUpperCase().charCodeAt(i) <= 90) {
          if ((i - count - key.length * amount) === key.length) {
            amount++;
          }
          klstr += key.toUpperCase()[(i - count) - key.length * amount];
        } else {
          klstr += " ";
          count++;
        }
      }
      for (let i = 0; i < str.length; i++) {
        if (str.toUpperCase().charCodeAt(i) >= 65 && str.toUpperCase().charCodeAt(i) <= 90) {
          let index = str.toUpperCase().charCodeAt(i) - klstr.charCodeAt(i) + 65;
          if (index < 65) {
            index += 26;
          }
          res += String.fromCharCode(index);
        } else res += str.toUpperCase()[i];
      }
      if (this.direction === false) {
        return res.split('').reverse().join('');
      }
      return res;
    }
}

module.exports = {
  VigenereCipheringMachine
};
