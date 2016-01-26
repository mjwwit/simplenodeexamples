var net = require('net');

var server = net.createServer(function (socket) {
    socket.setEncoding('utf-8');
    socket.pipe(socket);
});

server.on('connection', function () {
    console.log('Connection is Made\n');
});


server.listen(3001);

