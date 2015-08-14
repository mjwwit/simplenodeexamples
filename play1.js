var f = function foo()
{
	var inx = 0;
	console.log("foo()")
	return b = function bar()
	{
	 	return inx++;
	}
}


var x =  f();
console.log(x);
console.log(x());
console.log(x());
console.log(x());

