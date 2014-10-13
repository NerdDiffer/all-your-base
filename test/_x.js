// test utility functions
var assert = require('assert');
var x = require('../src/x.js');

describe('makePowersOf', function() {
  var makePowersOf = x.makePowersOf;
  var powersOf2 = makePowersOf(2, 5);
  var powersOf8 = makePowersOf(8, 5);
  var powersOf10 = makePowersOf(10, 5);
  var powersOf16 = makePowersOf(16, 5);
  it("should return an array", function() {
    assert.equal(true, Array.isArray(powersOf2));
  });
  it("should return an array with 6 indices", function() {
    assert.equal(6, powersOf2.length);
  });
  it("each index should correspond to its passed-in power", function() {
    assert.equal([1,2,4,8,16,32].toString(), powersOf2.toString());
    assert.equal([1,8,64,512,4096,32768].toString(), powersOf8.toString());
    assert.equal([1,10,100,1000,10000,100000].toString(), powersOf10.toString());
    assert.equal([1,16,256,4096,65536,1048576].toString(), powersOf16.toString());
  });
});

describe('getExponent', function() {
  var getExponent = x.getExponent;
  it("should return the exponent which would give you power of 2 closest or equal to num but not higher than num", function() {
    assert.equal(8, getExponent(2, 511));
    assert.equal(9, getExponent(2, 512));
    assert.equal(9, getExponent(2, 513));
    assert.equal(9, getExponent(2, 600));
  });
});

describe('genPowersArray', function() {
  var genPowersArray = x.genPowersArray;
  var num = 156;
  var powersOf2 = genPowersArray(2, num);
  var last = powersOf2[powersOf2.length - 1];

  it("should return an array of powers of 2", function() {
    assert.equal([1,2,4,8,16,32,64,128].toString(), powersOf2.toString());
  });
  it("highest value of this returned array is a power of 2, closest to or equal to num but not higher than num", function() {
    assert.equal(true, last <= num); 
    assert.equal(128, last);
  });
});

describe('reverseString', function() {
  var reverseString = x.reverseString;
  it("should return a string, reversed", function() {
    assert.equal('NancySinatraWasHot', reverseString('toHsaWartaniSycnaN'));
    assert.equal('racecar', reverseString('racecar'));
  });
});

describe('scan', function() {
  var scan = x.scan;
  var word = 'polymorphism';
  it('should return a split-string array', function() {
    assert.equal(['10', '10', '10'].toString(), scan('101010', 2).toString());
    assert.equal(['po','ly','mo','rp','hi','sm'].toString(), scan(word, 2).toString());
  });

  it('each value in returned array should be of specified length', function () {
    var checkLength = function(array, n) {
      return array.every(function(val) {
        return val.length === n; 
      });
    };
    var m = 1;
    var n = 2;
    var o = 3;
    assert.equal(true, checkLength(scan('polymorphism', m), m));
    assert.equal(true, checkLength(scan('polymorphism', n), n));
    assert.equal(true, checkLength(scan('polymorphism', o), o));
  });

  it('should pad remaining values w/ zeros to fulfill specified length', function () {
    assert.equal('0bit', scan('bit', 4).toString());
    assert.equal('0001', scan('1', 4).toString());
  });
});
