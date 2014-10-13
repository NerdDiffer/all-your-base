var convert = require('./src/convert.js');
var x = require('./src/x.js');

module.exports = {
  // export base conversion functions
  binToDec: convert.binToDec,
  binToHex: convert.binToHex,
  decToBin: convert.decToBin,
  decToHex: convert.decToHex,
  hexToDec: convert.hexToDec,
  hexToBin: convert.hexToBin,
  // export 'x' utility functions
  makePowersOf: x.makePowersOf,
  getExponent: x.getExponent,
  genPowersArray: x.genPowersArray,
  reverseString: x.reverseString,
  zeroPadding: x.zeroPadding,
  scan: x.scan
};
