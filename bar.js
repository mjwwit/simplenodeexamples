var foo1 = function foo() {
    var bar = 512;
    quux = 1;
    var z = function zip() {
        quux = 4;
        console.log('Leaving zip() ' + bar);
    };
    console.log('Leaving foo() ' + quux * quux * quux);
    return z;
};
//var z1 = new foo()

// Let's check if the return type is function
// otherwise display that it is not a function

console.log(typeof foo1);
var f1 = foo1();
var f2 = foo1();
f1();
f2();
//console.log(typeof z1);
if (typeof z1 === 'function') {
    z1();
} else {
    console.log('Not a function');
}
