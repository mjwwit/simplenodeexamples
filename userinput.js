var prompt = require('prompt');

prompt.start();

// prompt.get(['age'], function (err, result) {
//     console.log('Your age is ' + result.age);
// });


var schema = {
    properties: {
        name: {
            pattern: /^[a-zA-Z\s\-]+$/,
            message: 'Name must be only letters, spaces, or dashes',
            required: true
        },
            password: {
            hidden: true
        }
    }
};

prompt.get(schema, function (err, result) {
    console.log('Name is: ' + result.name);
    console.log('password is: ' + result.password);
});