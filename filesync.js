var fs = require("fs");

try {
	var file = fs.readFileSync("my.tx1t", "utf-8");
}
catch(ex)
{
	console.log("Failed to read the file using readFileSync");
	console.log(ex);
}

console.log("<--- File --->");

if (file){
	console.log(file);
}