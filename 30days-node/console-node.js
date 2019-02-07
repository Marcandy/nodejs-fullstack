// many use with console.log() one of them is replacing a string wit
// % with a string

console.log('5: %s', 'will be replaced by that');

// creating a new consoleg
var ws = require('fs');
const { Console } = require('console');
const output = ws.createWriteStream('./stdout.log');
const errOutput = ws.createWriteStream('./stderr.log');

console.time('boom');
const print = new Console(output, errOutput);
var roll = '0232309';
print.log('roll: %d', roll);

console.timeEnd('boom');
// start an