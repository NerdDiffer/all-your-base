#! /usr/bin/env node

var parseRad = require('../').parseRad;

var fn_and_args = process.argv.slice(2);
var val  = fn_and_args[0];
var from = fn_and_args[1];
var to   = fn_and_args[2];

var result = parseRad(val, from, to);

console.log(result);
