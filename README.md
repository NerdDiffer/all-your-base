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
####choosing an operation:
`[old]To[New]`
where `[old]` is the first three letters of the base you are converting from
and `[New]` is the first three letters of the base to convert to

####parameter data types
to convert from decimal, pass in a non-negative integer
to convert from any base *except for* decimal, pass in the value as a string

---

###todo:
####type-checking

function converting from decimal should accept integers
all other functions should accept parameters as strings

####alphabetical case
normalize case for values a-f. should be upper-case

####planned bases to support

| base/radix | name             | module's abbr. |
|:-----------|:-----------------|:---------------|
| base 12    | duodecimal       | `b12`          |
| base 24    | tetravigesimal   | `b24`          |
| base 26    | hexavigesimal    | `b26`          |
| base 32    | duotrigesimal    | `b32`          |
| base 36    | hexatrigesimal   | `b36`          |
| base 60    | sexagesimal      | `b60`          |
| base 62    | duosexigesimal   | `b62`          |
| base 64    | tetrasexagesimal | `b64`          |

---

###good links:
[how to understand hexadecimal](http://www.wikihow.com/Understand-Hexadecimal)
[binary to hexadecimal](http://www.wikihow.com/Convert-Binary-to-Hexadecimal)
[binary to decimal](http://www.wikihow.com/Convert-Binary-to-Decimal)
[decimal to hexadecimal](http://www.wikihow.com/Convert-from-Decimal-to-Hexadecimal)
[decimal to binary](http://www.wikihow.com/Convert-from-Decimal-to-Binary)
[hexadecimal to binary or decimal](http://www.wikihow.com/Convert-Hexadecimal-to-Binary-or-Decimal)
