var x = require('./x.js');
var tables = require('./tables.js');

var makePowersOf = x.makePowersOf;
var genPowersArray = x.genPowersArray;
var zeroPadding = x.zeroPadding;
var scan = x.scan;

/**
 * convert binary value to a decimal value
 * @param bin string the binary value
 * @return integer the decimal value
 */
var binToDec = function(bin) {
  // ensure bin is a string
  bin += ''; 
  // convert bin to an array & reverse it
  bin = bin.split('').reverse();
  // generate an array of powersOf2, equal to length of bin array minus 1
  // this array will be used in parallel with bin array to get multiples
  var powersOf2 = makePowersOf(2, bin.length - 1); 
  // use reduce to get the sum of each bit in bin multiplied against powersOf2 array
  return bin.reduce(function(sum, bit, index) {
    return sum + (powersOf2[index] * bit);
  }, 0);
};

/**
 * convert binary value to a hexadecimal value
 * @param bin string the binary value
 * @return integer the decimal value
 */
var binToHex = function(bin) {
  // divide binary number into sets of 4 digits
  // build a hex-string by comparing each value to a key in a table
  return scan(bin, 4).reduce(function(hex, val) { 
    return hex + tables.binToHexTable[val];
  }, '');
};

/**
 * convert decimal value to a binary value
 * @param dec string the decimal value
 * @return bin the binary equivalent value as a string
 */
var decToBin = function(dec) {
  var bin = '';
  var powersOf2 = genPowersArray(2, dec); 
  while (powersOf2.length) {
    var popped = powersOf2.pop();
    var bit = dec >= popped ? '1' : '0';
    bin += bit;
    if (bit === '1') {
      dec -= popped;
    }
  }
  return bin;
};

/**
 * convert decimal value to a hexadecimal value
 * @param dec string the decimal value
 * @return string the hexadecimal equivalent value as a string
 */
var decToHex = function(dec) {
  var hexArr = [];
  var hexVal;
  while (dec > 0) {
    // get modulus of dec & 16
    // save it to hexadecimal notation
    // add that to beginning of array
    hexArr.unshift(tables.decToHexTable[dec % 16]);
    // get quotient of num and 16
    dec = Math.floor(dec / 16);
  }
  return hexArr.join('');
};

/**
 * convert hexadecimal value to a decimal value
 * @param hex string the hexadecimal value
 * @return integer the decimal equivalent
 */
var hexToDec = function(hex) {
  // create an array of decimal equivalents
  var decs = hex.split('').map(function(val) {
    return parseInt(tables.hexToDecTable[val]);
  });
  // create array of the powers of base 16
  var powers = makePowersOf(16, decs.length -1);
  // for each value, multiply by the corresponding power of 16.
  // accumulate & return sum
  return decs.reverse().reduce(function(sum, val, index) {
    return sum + (powers[index] * val);
  }, 0);
};

/**
 * convert hexadecimal value to a binary value
 * @param hex string the hexadecimal value
 * @return string the binary equivalent as a string
 */
var hexToBin = function(hex) {
  // 1) convert from hexadecimal to decimal
  // 2) convert from decimal to binary
  return decToBin(hexToDec(hex));
};

module.exports = {
  binToDec: binToDec,
  binToHex: binToHex,
  decToBin: decToBin,
  decToHex: decToHex,
  hexToDec: hexToDec,
  hexToBin: hexToBin
};
