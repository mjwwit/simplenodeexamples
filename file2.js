var fs = require('fs');
var filename = './mya.txt';
try{
	var buf = fs.readFileSync(filename, 'utf8');
	console.log(buf);
}
catch(e)
{
	console.log(e);
}
console.log('done reading file ' + filename);