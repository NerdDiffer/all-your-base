var assert = require('assert');
var convert = require('../src/convert.js');

describe('binToDec', function() {
  var binToDec = convert.binToDec;
  it("should convert a binary number to a decimal number", function() {
    assert.equal(155, binToDec(10011011));
    assert.equal(173, binToDec(10101101));
    assert.equal(156, binToDec(10011100));
    assert.equal(298, binToDec(100101010));
    assert.equal(55, binToDec(110111));
    assert.equal(11, binToDec(1011));
  });
});

describe('binToHex', function() {
  var binToHex = convert.binToHex;
  it("should convert a binary number to a hexadecimal number", function() {
    assert.equal('57', binToHex('01010111'));
    assert.equal('EC', binToHex('11101100'));
    assert.equal('76', binToHex('1110110'));
    assert.equal('F6', binToHex('11110110'));
  });
});

describe('decToBin', function() {
  var decToBin = convert.decToBin;
  it("should convert a decimal number to a binary number", function() {
    assert.equal('10011100', decToBin(156));
    assert.equal('100101010', decToBin(298));
    assert.equal('110111', decToBin(55));
    assert.equal('1011', decToBin(11));
  });
});

describe('decToHex', function() {
  var decToHex = convert.decToHex;
  it("should convert a decimal number to a hexadecimal number", function() {
    assert.equal('4D86B', decToHex(317547));
    assert.equal('2A5', decToHex(677));
    assert.equal('4F', decToHex(79));
    assert.equal('78', decToHex(120));
    assert.equal('6C0', decToHex(1728));
    assert.equal('512', decToHex(1298));
    assert.equal('100', decToHex(256));
    assert.equal('9C4', decToHex(2500));
  });
});

describe('hexToDec', function() {
  var hexToDec = convert.hexToDec;
  it("should accept lower-case letters without error", function() {
    assert.equal(44689, hexToDec('ae91'));
    assert.equal(2014, hexToDec('7de'));
    assert.equal(2500, hexToDec('9c4'));
    assert.equal(16711709, hexToDec('ff001d'));
  });
  it("should convert a hexadecimal number to a decimal number", function() {
    assert.equal(5462, hexToDec('1556'));
    assert.equal(44689, hexToDec('AE91'));
    assert.equal(1298, hexToDec('512'));
    assert.equal(2014, hexToDec('7DE'));
    assert.equal(32, hexToDec('20'));
    assert.equal(2500, hexToDec('9C4'));
    assert.equal(16711709, hexToDec('FF001D'));
  });
});

describe('hexToBin', function() {
  var hexToBin = convert.hexToBin;
  it("should accept lower-case letters without error", function() {
    assert.equal('11110', hexToBin('1e'));
    assert.equal('100111000100', hexToBin('9c4'));
    assert.equal('1010111010010001', hexToBin('ae91'));
  });
  it("should convert a hexadecimal number to a binary number", function() {
    assert.equal('11110', hexToBin('1E'));
    assert.equal('100111000100', hexToBin('9C4'));
    assert.equal('1010111010010001', hexToBin('AE91'));
  });
});

describe('binToOct', function() {
  var binToOct = convert.binToOct;
  it('should convert binary to octal', function() {
    assert.equal('0614', binToOct('00110001100'));
  });
});

describe('decToOct', function() {
  var decToOct = convert.decToOct;
  it('should convert decimal to octal', function() {
    assert.equal('1573', decToOct(891));
    assert.equal('143', decToOct(99));
    assert.equal('553', decToOct(363));
    assert.equal('12132', decToOct(5210));
  });
});

describe('octToDec', function() {
  var octToDec = convert.octToDec;
  it('should convert octal to decimal', function() {
    assert.equal('315', octToDec('473'));
  });
});

describe('hexToOct', function() {
  var hexToOct = convert.hexToOct;
  it("should accept lower-case letters without error", function() {
    assert.equal('77763', hexToOct('7ff3'));
    assert.equal('121336', hexToOct('a2de'));
  });
  it('should convert hexadecimal to octal', function() {
    assert.equal('77763', hexToOct('7FF3'));
    assert.equal('121336', hexToOct('A2DE'));
  });
});

describe('octToBin', function() {
  var octToBin = convert.octToBin;
  it('should convert octal to binary', function() {
    assert.equal('1100100', octToBin('144'));
  });
});

describe('octToHex', function() {
  var octToHex = convert.octToHex;
  it('should convert octal to hexadecimal', function() {
    assert.equal('E5', octToHex('345'));
  });
});
