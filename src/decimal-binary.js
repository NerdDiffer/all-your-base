var makePowersOf2 = function(n) {
  var i = 0;
  var arr = [];
  while (i <= n) {
    arr.push(Math.pow(2, i)); 
    i++;  
  }
  return arr;
};

var getExponent = function(num) {
  var i = 0;
  while (Math.pow(2, i) <= num) {
    i++;
  }
  return i-1;
};

var genPowersArray = function(num) {
  return makePowersOf2(getExponent(num));  
};

var main = function(num) {
  var binary = '';
  var powersOf2 = genPowersArray(num); 

  while (powersOf2.length) {
    var popped = powersOf2.pop();
    var bit = num >= popped ? '1' : '0';
    binary += bit;
    if (bit === '1') {
      num -= popped;
    }
  }
  return binary;
};

exports.makePowersOf2 = makePowersOf2;
exports.getExponent = getExponent;
exports.genPowersArray = genPowersArray;
exports.main = main;
