var assert = require('assert');
var bd = require('../src/binary-decimal.js');

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
