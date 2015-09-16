#! /usr/bin/env node

var main = require('../index.js');
var fn_and_args = process.argv.slice(2);
var fn = main[fn_and_args.shift()];
var result = fn.apply(null, fn_and_args);

console.log(result);
