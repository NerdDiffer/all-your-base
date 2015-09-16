var assert = require('assert');
var index = require('..');

describe('parseInt', function() {
  // the way I'm generating the method names is prone to error,
  // so my testing here is exhaustive
  describe('calling correct method', function() {
    it('gets same results as calling binToDec', function() {
      var n = '10011100';
      assert.equal(index.parseInt(n, 2, 10), index.binToDec(n));
    });
    it('gets same results as calling binToHex', function() {
      var n = '11110110';
      assert.equal(index.parseInt(n, 2, 16), index.binToHex(n));
    });
    it('gets same results as calling binToOct', function() {
      var n = '00110001100';
      assert.equal(index.parseInt(n, 2, 8), index.binToOct(n));
    });
    it('gets same results as calling octToDec', function() {
      var n = '473';
      assert.equal(index.parseInt(n, 8, 10), index.octToDec(n));
    });
    it('gets same results as calling octToBin', function() {
      var n = '144';
      assert.equal(index.parseInt(n, 8, 2), index.octToBin(n));
    });
    it('gets same results as calling octToHex', function() {
      var n = '345';
      assert.equal(index.parseInt(n, 8, 16), index.octToHex(n));
    });
    it('gets same results as calling decToBin', function() {
      var n = '298';
      assert.equal(index.parseInt(n, 10, 2), index.decToBin(n));
    });
    it('gets same results as calling decToHex', function() {
      var n = '317547';
      assert.equal(index.parseInt(n, 10, 16), index.decToHex(n));
    });
    it('gets same results as calling decToOct', function() {
      var n = '5210';
      assert.equal(index.parseInt(n, 10, 8), index.decToOct(n));
    });
    it('gets same results as calling hexToBin', function() {
      var n = 'ae91';
      assert.equal(index.parseInt(n, 16, 2), index.hexToBin(n));
    });
    it('gets same results as calling hexToOct', function() {
      var n = '7ff3';
      assert.equal(index.parseInt(n, 16, 8), index.hexToOct(n));
    });
    it('gets same results as calling hexToDec', function() {
      var n = 'ff001d';
      assert.equal(index.parseInt(n, 16, 10), index.hexToDec(n));
    });
  });

  describe('passing in undefined', function() {
    context('for the 2nd parameter', function() {
      it('it assumes you mean to convert from base 10', function() {
        assert.equal(index.parseInt(256, undefined, 16), 100);
      });
    });
    context('when leaving out the 3rd parameter altogether', function() {
      it('it assumes you mean to convert to base 10', function() {
        assert.equal(index.parseInt(1100100, 2), 100);
      });
    });
  });
});
