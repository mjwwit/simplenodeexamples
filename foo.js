var x = function foo(num) {
    var bar;
    var quux = num;

    console.log('Entered and leaving foo()' + quux);

    return function () {
        //var quux;
        bar = true;
        console.log('In zip' + quux++);
    };
};

var newObj = x(100);
newObj();
newObj();

var newObj1 = x(1);
newObj1();
newObj1();
newObj1();
newObj();

// z1 = new foo();

// z1();
// z1();
// z1();
