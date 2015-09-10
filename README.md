Convert from one base to another

#####Supported bases

| base/radix | name        | module's abbr. |
|:-----------|:------------|:---------------|
| base 2     | binary      | `bin`          |
| base 8     | octal       | `oct`          |
| base 10    | decimal     | `dec`          |
| base 16    | hexadecimal | `hex`          |

##Installation

`npm install all-your-base`

##Usage

Use this in your own scripts and/or as a stand-alone command-line tool.

###From a script

`decToBin(22);`  
`hexToDec('10000');`  

#####Parameter data types

to convert from decimal, pass in a non-negative integer  
to convert from any base *except for* decimal, pass in the value as a string

###As command line tool

#####Install as command line tool

`npm link` from your local repo's root. The executable is named `ayb`.

#####From command line

`ayb decToBin 65536`  
`ayb hexToDec FF001D`  

---

###List of all operations

Here's an exhaustive list for your reference.

From binary
* `binToDec`
* `binToHex`
* `binToOct`

From octal
* `octToDec`
* `octToBin`
* `octToHex`

From decimal
* `decToBin`
* `decToHex`
* `decToOct`

From hexadecimal
* `hexToDec`
* `hexToBin`
* `hexToOct`

The pattern: `[old]To[New]`  
`[old]` is the first three letters of the base you are converting from.  
`[New]` is the first three letters of the base to convert to.

Notice, the function name is lowerCamelCased.

---

###Helpful links

Learn more about different bases.  

* [binary to decimal](http://www.wikihow.com/Convert-Binary-to-Decimal)
* [binary to hexadecimal](http://www.wikihow.com/Convert-Binary-to-Hexadecimal)
* [decimal to binary](http://www.wikihow.com/Convert-from-Decimal-to-Binary)
* [decimal to hexadecimal](http://www.wikihow.com/Convert-from-Decimal-to-Hexadecimal)
* [hexadecimal to binary or decimal](http://www.wikihow.com/Convert-Hexadecimal-to-Binary-or-Decimal)
* [how to understand hexadecimal](http://www.wikihow.com/Understand-Hexadecimal)
