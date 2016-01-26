var fs = require('fs');

fs.watch('watched.txt', function (event) {
    console.log(typeof event);
});

console.log('Watching the changes');