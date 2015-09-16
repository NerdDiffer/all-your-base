# All your base

Convert from one base to another

## Installation

`npm install all-your-base`

#### Install as command line tool

`npm link` from your local repo's root. The executable is named `ayb`.

## Usage

Use this in your own scripts and/or as a quick stand-alone command-line tool.

#### From a script

```javascript
var ayb = require('all-your-base');

// convert 'abcdef', from base-16 to base-2
ayb.parseInt('abcdef', 16, 2)

// Or directly call the conversion methods
ayb.decToBin(22);
ayb.hexToDec('10000');
```

#### From command line

First, type `npm link` from your local repo's root directory. The executable
is named `ayb`. Name a method & space separate your arguments.

```bash
$ ayb parseInt 65536 10 16
10000
$ ayb hexToDec 10000
65536
```

---

### Supported bases

| base/radix | name        | module's abbr. |
|:-----------|:------------|:---------------|
| base 2     | binary      | `bin`          |
| base 8     | octal       | `oct`          |
| base 10    | decimal     | `dec`          |
| base 16    | hexadecimal | `hex`          |

### List of all operations

Here's an exhaustive list for your reference.

#### `parseInt`

The native `parseInt` method will let you convert another base to base-10.
But the one provided in this module will let you convert to another base. It's
merely a wrapper for the other conversion methods.

* `ayb.parseInt(value, fromBase, toBase)`
  * `value`, String. The value in the base you want to convert.
  * `fromBase`, Number. Specify the base you are converting from.
    * If you are using a script & pass in `undefined`, then it is assumed you
      are converting from base-10
  * `toBase`, Number.Specify the base you are converting to.
    * If you don't pass in anything, then it is assumed you are converting
      from base-10.

For the following methods, pass in a numerical as a string.

##### From binary

* `binToDec`
* `binToHex`
* `binToOct`

##### From octal

* `octToDec`
* `octToBin`
* `octToHex`

##### From decimal

* `decToBin`
* `decToHex`
* `decToOct`

##### From hexadecimal

* `hexToDec`
* `hexToBin`
* `hexToOct`

The pattern: `[old]To[New]`  
`[old]` is the first three letters of the base you are converting from.  
`[New]` is the first three letters of the base to convert to.

Notice, the function name is lowerCamelCased.

---

### Helpful links

Learn more about different bases.  

* [binary to decimal](http://www.wikihow.com/Convert-Binary-to-Decimal)
* [binary to hexadecimal](http://www.wikihow.com/Convert-Binary-to-Hexadecimal)
* [decimal to binary](http://www.wikihow.com/Convert-from-Decimal-to-Binary)
* [decimal to hexadecimal](http://www.wikihow.com/Convert-from-Decimal-to-Hexadecimal)
* [hexadecimal to binary or decimal](http://www.wikihow.com/Convert-Hexadecimal-to-Binary-or-Decimal)
* [how to understand hexadecimal](http://www.wikihow.com/Understand-Hexadecimal)
