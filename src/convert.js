var h = require('./helpers.js');
var tables = require('./tables.js');

var makePowersOf = h.makePowersOf;
var genPowersArray = h.genPowersArray;
var zeroPadding = h.zeroPadding;
var scan = h.scan;

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
    if (/[a-z]/.test(val)) {
      val = val.replace(/[a-z]/, val.toUpperCase());
    }
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
 * depends on decToBin & hexToDec
 * @param hex string the hexadecimal value
 * @return string the binary equivalent as a string
 */
var hexToBin = function(hex) {
  // convert from hexadecimal to decimal
  // then convert from decimal to binary
  return decToBin(hexToDec(hex));
};

/**
 * convert binary value to an octal value
 * @param bin string the binary value
 * @return integer the octal value
 */
var binToOct = function(bin) {
  // group binary number into groups of 3
  bin = scan(bin, 3);
  // use binToOct table to convert each 3-part binary value to octal equivalent
  return bin.map(function(val) {
    return tables.binToOctTable[val];
  }).join('');
};

/**
 * convert decimal value to a octal value
 * @param dec string the decimal value
 * @return string the octal equivalent value as a string
 */
var decToOct = function(dec) {
  var octArr = [];
  var octVal;
  while (dec > 0) {
    // get modulus of dec & 16
    // save it to hexadecimal notation
    // add that to beginning of array
    octArr.unshift(tables.decToHexTable[dec % 8]);
    // get quotient of num and 16
    dec = Math.floor(dec / 8);
  }
  return octArr.join('');
};

/**
 * convert hexadecimal value to a octal value
 * depends on binToOct & hexToBin
 * @param hex string the hexadecimal value
 * @return string the octal equivalent as a string
 */
var hexToOct = function(hex) {
  // convert hexadecimal to binary
  // then convert binary to octal
  return binToOct(hexToBin(hex));
};

/**
 * convert octal value to a decimal value
 * @param oct string the octal value
 * @return integer the decimal equivalent
 */
var octToDec = function(oct) {
  // create an array of decimal equivalents
  var octs = oct.split('').map(function(val) {
    return parseInt(tables.hexToDecTable[val]);
  });
  // create array of the powers of base 8
  var powers = makePowersOf(8, octs.length -1);
  // for each value, multiply by the corresponding power of 8
  // accumulate & return sum
  return octs.reverse().reduce(function(sum, val, index) {
    return sum + (powers[index] * val);
  }, 0);
};

/**
 * convert octal value to a binary value
 * depends on decToBin & octToDec
 * @param oct string the octal value
 * @return string the binary equivalent as a string
 */
var octToBin = function(oct) {
  // convert octal to decimal
  // then convert decimal to binary
  return decToBin(octToDec(oct));
};

/**
 * convert octal value to a hexadecimal value
 * depends on binToHex & octToBin
 * @param oct string the octal value
 * @return string the hexadecimal equivalent as a string
 */
var octToHex = function(oct) {
  // convert octal to binary
  // then convert binary to hexadecimal
  return binToHex(octToBin(oct));
};

module.exports = {
  binToDec: binToDec,
  binToHex: binToHex,
  binToOct: binToOct,
  decToBin: decToBin,
  decToHex: decToHex,
  decToOct: decToOct,
  hexToDec: hexToDec,
  hexToBin: hexToBin,
  hexToOct: hexToOct,
  octToDec: octToDec,
  octToBin: octToBin,
  octToHex: octToHex,
};
