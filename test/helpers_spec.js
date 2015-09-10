// test helper functions
var assert = require('assert');
var h = require('../src/helpers.js');

describe('Helper functions', function() {
  describe('makePowersOf', function() {
    var makePowersOf = h.makePowersOf;
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
      assert.deepEqual(
        powersOf2,
        [1,2,4,8,16,32]
      );
      assert.deepEqual(
        powersOf8,
        [1,8,64,512,4096,32768]
      );
      assert.deepEqual(
        powersOf10,
        [1,10,100,1000,10000,100000]
      );
      assert.deepEqual(
        powersOf16,
        [1,16,256,4096,65536,1048576]
      );
    });
  });

  describe('getExponent', function() {
    var getExponent = h.getExponent;
    it("should return the exponent which would give you power of 2 closest or equal to num but not higher than num", function() {
      assert.equal(getExponent(2, 511), 8);
      assert.equal(getExponent(2, 512), 9);
      assert.equal(getExponent(2, 513), 9);
      assert.equal(getExponent(2, 600), 9);
    });
  });

  describe('genPowersArray', function() {
    var genPowersArray = h.genPowersArray;
    var num = 156;
    var powersOf2 = genPowersArray(2, num);
    var last = powersOf2[powersOf2.length - 1];
  
    it("should return an array of powers of 2", function() {
      assert.deepEqual(
        powersOf2,
        [1,2,4,8,16,32,64,128]
      );
    });
    it("highest value of this returned array is a power of 2, closest to or equal to num but not higher than num", function() {
      assert.equal(last <= num, true);
      assert.equal(last, 128);
    });
  });

  describe('reverseString', function() {
    var reverseString = h.reverseString;
    it("should return a string, reversed", function() {
      assert.equal(
        reverseString('skconk ohw eno eht ma I'),
        'I am the one who knocks'
      );
      assert.equal(reverseString('racecar'), 'racecar');
    });
  });

  describe('scan', function() {
    var scan = h.scan;
    it('should return a split-string array', function() {
      assert.deepEqual(
        scan('101010', 2),
        ['10', '10', '10']
      );
      assert.deepEqual(
        scan('heisenberg', 2),
        ['he','is','en','be','rg']
      );
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
      assert(checkLength(scan('polymorphism', m), m));
      assert(checkLength(scan('polymorphism', n), n));
      assert(checkLength(scan('polymorphism', o), o));
    });

    it('should pad remaining values w/ zeros to fulfill specified length', function () {
      assert.equal('0bit', scan('bit', 4));
      assert.equal('0001', scan('1', 4));
    });
  });
});
