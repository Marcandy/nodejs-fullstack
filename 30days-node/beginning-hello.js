var http = require('http');

var host = '127.0.0.1';
var port = 3000;

var server = http.createServer((request, respone) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    console.log("server working");
    response.end('Server Working Success');
});


server.listen(port, host, (error) => {
    if (error) {
        return console.log('Error occured : ', error);
    }

    console.log('Server is listening on ' + host + ':' + port);
});

// serving HTML
http.createServer(function (req, res) {
	console.log("Port Number : 3000");
	// change the MIME type from 'text/plain' to 'text/html'
    res.writeHead(200, {'Content-Type': 'text/html'});
	//reading the content file
	fs.readFile('index.html', (err, data) => {
		//checking for errors
		if (err) 
			throw err;
		console.log("Operation Success");
		//sending the response
		res.end(data);
	});
}).listen(3000);
