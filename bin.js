#!/usr/bin/env node
var hash = require(".")

var hostname = process.argv[2]
var from = parseInt(process.argv[3])
var to = parseInt(process.argv[4])

console.log(hash(hostname, from, to))
