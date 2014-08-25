var assert = require('assert');
var db = require('../src/decimal-binary.js');
var makePowersOf2 = db.makePowersOf2;
var getExponent = db.getExponent;
var genPowersArray = db.genPowersArray;
var main = db.main;

describe('makePowersOf2', function() {
  var powersOf2 = makePowersOf2(5);
  it("should return an array", function() {
    assert.equal(true, Array.isArray(powersOf2));
  });
  it("should return an array with 6 indices", function() {
    assert.equal(6, powersOf2.length);
  });
  it("each index should correspond to its power of 2", function() {
    assert.equal([1,2,4,8,16,32].toString(), powersOf2.toString());
  });
});

describe('getExponent', function() {
  it("should return the exponent which would give you power of 2 closest or equal to num but not higher than num", function() {
    assert.equal(8, getExponent(511));
    assert.equal(9, getExponent(512));
    assert.equal(9, getExponent(513));
    assert.equal(9, getExponent(600));
  });
});

describe('genPowersArray', function() {
  var num = 156;
  var powersOf2 = genPowersArray(num);
  var last = powersOf2[powersOf2.length - 1];

  it("should return an array of powers of 2", function() {
    assert.equal([1,2,4,8,16,32,64,128].toString(), powersOf2.toString());
  });
  it("highest value of this returned array is a power of 2, closest to or equal to num but not higher than num", function() {
    assert.equal(true, last <= num); 
    assert.equal(128, last);
  });
});

describe('main', function() {
  var num = 156;
  it("should convert a decimal number to a binary number", function() {
    assert.equal('10011100', main(156));
    assert.equal('100101010', main(298));
    assert.equal('110111', main(55));
    assert.equal('1011', main(11));
  });
});
