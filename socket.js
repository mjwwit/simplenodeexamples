var net = require('net');
var i = 0;
var server = net.createServer(function(connection){
    connection.write('Hello Server', function(){
    	console.log('Connection No.: ', i++)
    });

});

server.on('connection', function( str){
	console.log("Connection is Made" );
});



server.listen(3001);

