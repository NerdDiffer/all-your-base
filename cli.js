#! /usr/bin/env node

var main = require('./index.js');

var fn_and_args = process.argv.slice(2);
var fnName = fn_and_args[0];
var param  = fn_and_args[1];

var result = main[fnName](param);

console.log(result);
