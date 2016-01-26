var hfv = function () {
    console.log('Hello, 1 hr Node');
    var i = 0;

    return function () {
        i++;
        console.log(i + '.  to People');
    };
};

console.log(typeof hfv);

var i = new hfv();

console.log(typeof i);
i();
i();
i();
i();