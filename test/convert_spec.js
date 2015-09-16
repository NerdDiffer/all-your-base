var assert = require('assert');
var convert = require('../src/convert.js');

describe('Conversion functions', function() {
  describe('binToDec', function() {
    var binToDec = convert.binToDec;
    it("should convert a binary number to a decimal number", function() {
      assert.equal(binToDec(10011011), 155);
      assert.equal(binToDec(10101101), 173);
      assert.equal(binToDec(10011100), 156);
      assert.equal(binToDec(100101010), 298);
      assert.equal(binToDec(110111), 55);
      assert.equal(binToDec(1011), 11);
    });
  });

  describe('binToHex', function() {
    var binToHex = convert.binToHex;
    it("should convert a binary number to a hexadecimal number", function() {
      assert.equal(binToHex('01010111'), '57');
      assert.equal(binToHex('11101100'), 'EC');
      assert.equal(binToHex('1110110'),  '76');
      assert.equal(binToHex('11110110'), 'F6');
    });
  });

  describe('decToBin', function() {
    var decToBin = convert.decToBin;
    it("should convert a decimal number to a binary number", function() {
      assert.equal(decToBin(156), '10011100');
      assert.equal(decToBin(298), '100101010');
      assert.equal(decToBin(55),  '110111');
      assert.equal(decToBin(11),  '1011');
    });
    it('also accepts a string as an argument', function() {
      assert.equal(decToBin('156'), '10011100');
      assert.equal(decToBin('298'), '100101010');
      assert.equal(decToBin('55'),  '110111');
      assert.equal(decToBin('11'),  '1011');
    });
  });

  describe('decToHex', function() {
    var decToHex = convert.decToHex;
    it("should convert a decimal number to a hexadecimal number", function() {
      assert.equal(decToHex(317547), '4D86B');
      assert.equal(decToHex(677), '2A5');
      assert.equal(decToHex(79), '4F');
      assert.equal(decToHex(120), '78');
      assert.equal(decToHex(1728), '6C0');
      assert.equal(decToHex(1298), '512');
      assert.equal(decToHex(256), '100');
      assert.equal(decToHex(2500), '9C4');
    });
    it('also accepts a string as an argument', function() {
      assert.equal(decToHex('317547'), '4D86B');
      assert.equal(decToHex('677'), '2A5');
      assert.equal(decToHex('79'), '4F');
      assert.equal(decToHex('120'), '78');
      assert.equal(decToHex('1728'), '6C0');
      assert.equal(decToHex('1298'), '512');
      assert.equal(decToHex('256'), '100');
      assert.equal(decToHex('2500'), '9C4');
    });
  });

  describe('hexToDec', function() {
    var hexToDec = convert.hexToDec;
    it("should accept lower-case letters without error", function() {
      assert.doesNotThrow(function() { hexToDec('abcdef'); });
    });
    it("should convert a hexadecimal number to a decimal number", function() {
      assert.equal(hexToDec('1556'), 5462);
      assert.equal(hexToDec('AE91'), 44689);
      assert.equal(hexToDec('512'), 1298);
      assert.equal(hexToDec('7DE'), 2014);
      assert.equal(hexToDec('20'), 32);
      assert.equal(hexToDec('9C4'), 2500);
      assert.equal(hexToDec('FF001D'), 16711709);
    });
  });

  describe('hexToBin', function() {
    var hexToBin = convert.hexToBin;
    it("should accept lower-case letters without error", function() {
      assert.doesNotThrow(function() { hexToBin('abcdef'); });
    });
    it("should convert a hexadecimal number to a binary number", function() {
      assert.equal(hexToBin('1E'), '11110');
      assert.equal(hexToBin('9C4'), '100111000100');
      assert.equal(hexToBin('AE91'), '1010111010010001');
    });
  });

  describe('binToOct', function() {
    var binToOct = convert.binToOct;
    it('should convert binary to octal', function() {
      assert.equal(binToOct('00110001100'), '0614');
    });
  });

  describe('decToOct', function() {
    var decToOct = convert.decToOct;
    it('should convert decimal to octal', function() {
      assert.equal(decToOct(891), '1573');
      assert.equal(decToOct(99), '143');
      assert.equal(decToOct(363), '553');
      assert.equal(decToOct(5210), '12132');
    });
    it('also accepts a string as an argument', function() {
      assert.equal(decToOct('891'), '1573');
      assert.equal(decToOct('99'), '143');
      assert.equal(decToOct('363'), '553');
      assert.equal(decToOct('5210'), '12132');
    });
  });

  describe('octToDec', function() {
    var octToDec = convert.octToDec;
    it('should convert octal to decimal', function() {
      assert.equal(octToDec('473'), '315');
    });
  });

  describe('hexToOct', function() {
    var hexToOct = convert.hexToOct;
    it("should accept lower-case letters without error", function() {
      assert.doesNotThrow(function() { hexToOct('abcd'); });
    });
    it('should convert hexadecimal to octal', function() {
      assert.equal(hexToOct('7FF3'), '77763');
      assert.equal(hexToOct('A2DE'), '121336');
    });
  });

  describe('octToBin', function() {
    var octToBin = convert.octToBin;
    it('should convert octal to binary', function() {
      assert.equal(octToBin('144'), '1100100');
    });
  });

  describe('octToHex', function() {
    var octToHex = convert.octToHex;
    it('should convert octal to hexadecimal', function() {
      assert.equal(octToHex('345'), 'E5');
    });
  });
});
