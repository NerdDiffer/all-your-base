var convert = require('./src/convert.js');

module.exports = {
  binToDec: convert.binToDec,
  binToHex: convert.binToHex,
  binToOct: convert.binToOct,
  decToBin: convert.decToBin,
  decToHex: convert.decToHex,
  decToOct: convert.decToOct,
  hexToDec: convert.hexToDec,
  hexToBin: convert.hexToBin,
  hexToOct: convert.hexToOct,
  octToDec: convert.octToDec,
  octToBin: convert.octToBin,
  octToHex: convert.octToHex,
  parseRad: parseRad
};

/**
 * A buffed-up version of the standard `parseInt`
 * @param str
 * @param from
 * @param to
 * @return
 */
function parseRad(str, from, to) {
  var fn = assignFn(from, to);
  return convert[fn](str);
}

// Assign a method, depending on which two bases are passed in
function assignFn(from, to) {
  from = setDefault(10, from);
  to   = setDefault(10, to);

  from = numToWord(from);
  to   = capitalize(numToWord(to));

  return from + 'To' + to;

  // return a copy of a string with its first letter capitalized
  function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  // translate a number to its correlating module-specific namespace
  function numToWord(num) {
    num += '';
    switch(num) {
      case '2':
        return 'bin';
      case '8':
        return 'oct';
      case '10':
        return 'dec';
      case '16':
        return 'hex';
      default:
        throw new Error('Unfortunately, base "' + num + '" is not supported');
    }
  }

  // if `arg` is not provided, return a default value
  function setDefault(defaultVal, arg) {
    return (typeof arg === 'undefined' ? defaultVal : arg);
  }
}
