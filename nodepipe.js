var fs = require('fs');

// Set both readable and writable in constructor.
var UpperStream = function () {
    this.readable = true;
    this.writable = true;
};

// Inherit from base stream class.
require('util').inherits(UpperStream, require('stream'));

UpperStream.prototype.write = function (data) {
    data = data ? data.toString() : ''; // convert bytes to string
    this.emit('data', data.replace('I', 'We'));
};

UpperStream.prototype.end = function () {
    this.emit('end');
};

var readableStream = fs.createReadStream('u2.txt');

readableStream.pipe(new UpperStream()).pipe(process.stdout);