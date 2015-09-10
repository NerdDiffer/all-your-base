##convert from one base to another
supported bases:

| base/radix | name        | module's abbr. |
|:-----------|:------------|:---------------|
| base 2     | binary      | `bin`          |
| base 8     | octal       | `oct`          |
| base 10    | decimal     | `dec`          |
| base 16    | hexadecimal | `hex`          |

common utility functions & tables stored in `./src/x.js` and `./src/tables.js`

###how to use:

####examples

`decToBin(22);`  
`hexToDec('10000');`  

####choosing an operation:
`[old]To[New]`  
where `[old]` is the first three letters of the base you are converting from
and   
`[New]` is the first three letters of the base to convert to.  
Notice, the function is lowerCamelCased.

####parameter data types
to convert from decimal, pass in a non-negative integer  
to convert from any base *except for* decimal, pass in the value as a string

###helpful links:

Learn more about different bases.  

* [binary to decimal](http://www.wikihow.com/Convert-Binary-to-Decimal)
* [binary to hexadecimal](http://www.wikihow.com/Convert-Binary-to-Hexadecimal)
* [decimal to binary](http://www.wikihow.com/Convert-from-Decimal-to-Binary)
* [decimal to hexadecimal](http://www.wikihow.com/Convert-from-Decimal-to-Hexadecimal)
* [hexadecimal to binary or decimal](http://www.wikihow.com/Convert-Hexadecimal-to-Binary-or-Decimal)
* [how to understand hexadecimal](http://www.wikihow.com/Understand-Hexadecimal)
