// set of common utility functions used by this module

/**
 * use a prototype method of a native-JS object as a general utility method
 * thanks to Leland Richardson for this method. See this blog post:
 * http://tech.pro/tutorial/2010/functional-javascript-part-3-apply-call-and-the-arguments-object
 * @param fn Function the function to transform. 
 *   pass in as <Object>.prototype.<method>
 *   ie: var split = demethodize(String.prototype.split);
 *   ie: var forEach = demethodize(Array.prototype.forEach);
 * @return Function returns a function
 */
var demethodize = function(fn) {
  return function() {
    var args = [].slice.call(arguments, 1);
    return fn.apply(arguments[0], args);
  };
};

/**
 * return an array whose
 *   indices can be thought of as an exponent
 *   and corresponding values are the powers of the passed-in base & exponent
 *   from powers 0 through n. inclusive
 * @param base integer which base should each value be?
 * @param n integer the highest power in the array
 * @return array of the powers (0..n) of base
 */
var makePowersOf = function(base, n) {
  var i = 0;
  var arr = [];
  while (i <= n) {
    arr.push(Math.pow(base, i)); 
    i++;  
  }
  return arr;
};

/**
 * returns the exponent which would give you the highest value less than num
 * @param base integer, the base with which you are working
 * @param num integer, the number which should not be surpassed
 * @return integer, the exponent which would produce the highest power via Math.power(base, exponent) less than num
 */
var getExponent = function(base, num) {
  var i = 0;
  while (Math.pow(base, i) <= num) {
    i++;
  }
  return i-1;
};

/**
 * generate an array whose values are powers less than a specified number
 * @param base integer the base with which you are working
 * @param num integer, upper limit
 * @return array an array
 */
var genPowersArray = function(base, num) {
  return makePowersOf(base, getExponent(base, num));
};

/**
 * pass in a string and return a copy of it, reversed
 * depends on demethodize()
 * @param str String the string to reverse
 * @return string reversed
 */
var reverseString = function(str) {
  return demethodize(Array.prototype.reverse)(str.split('')).join('');
};

/**
 * pad a value with zeros. zeros go on left-hand size of original values
 * @param val integer/string  the value you want to pad
 * @param width integer how many characters wide you want the value to ultimately be
 * @return string padded with zeros from left side
*/
var zeroPadding = function(val, width) {
  var s = val.toString();
  while (s.length < width) {
    s = '0' + s;
  }
  return s;
};

/**
 * split a string into an array
 * then group the array values into groups of n-length
 *
 * like a digraph or a trigraph, but n is any integer
 * remainders are padded with zeros from the left-hand side
 * @param str String the string to split up
 * @param n integer how to group array. default value is 2
 * @return array
 */
var scan = function(str, n) {
  n = n || 2;
  var arr = str.split('');
  if (arr.length % n > 0) {
    for (var i = 0; i < arr.length % n; i++) {
      arr.unshift(0); 
    }
  }
  var chopped = [];
  while (arr.length) {
    chopped.push(arr.splice(0, n).join('')); 
  }
  return chopped;
};

module.exports = {
  makePowersOf: makePowersOf,
  getExponent: getExponent,
  genPowersArray: genPowersArray,
  reverseString: reverseString,
  zeroPadding: zeroPadding,
  scan: scan
};
