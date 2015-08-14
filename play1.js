var f = function foo()
{
	var inx = 0;
	console.log("foo()")
	
	return b = function bar()
	{
	 	return inx++;
	}
}


var x = new f();
console.log(typeof x);
console.log(x);
console.log(x());
console.log(x());
console.log(x());

