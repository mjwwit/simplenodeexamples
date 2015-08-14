/*
Read a file using a call back and
*/

var fs = require('fs');
var filename = './my.txt';
fs.readFile(filename, 'utf-8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
  console.log('Done reading file : ' + filename);
});
console.log('Done Program Async');
