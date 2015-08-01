var http = require('http');
var fs = require('fs');
var filename = './my.html';

var requestListener = function (req, res) {
  	res.writeHead(200);
  	// var filename = './my.htm';
  	var filename = './pushclient.html'
	fs.readFile(filename, 'utf-8', function (err,data) {
  	if (err) {
    	return console.log(err);
  	}
	  	console.log(data);
	  	console.log('Done reading file : ' + filename);
	  	res.write(data, 'utf8')
	    res.end();
	});  
 
}

var server = http.createServer(requestListener);
server.listen(3000);