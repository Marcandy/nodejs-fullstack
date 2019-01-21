var fs = require('fs');

// asynchronous reading 
fs.readFile('message.txt', (err, data) => {
    if(err)
        throw err;

    console.log("Content : " + data)
});


// synchronous reading
var fs = require('fs');
var filename = 'content.txt';
var content = fs.readFileSync(filename);
console.log('Content : ' + content);
