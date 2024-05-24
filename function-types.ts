function add(n1: number, n2: number) {
	return n1 + n2;
}

function printResult(num: number): void {
	console.log(`Result: ` + num);
}
//let someValue: undefined;
printResult(add(5, 12));

//Syntax:
let combineVals: (a: number, b: number) => number;
/* 
☝🏻Function type. Now it says that 'combineVals' is a 
1) function 
2) Takes 2 arguments as "numbers" 
) The return value is a number 
*/
//! combineVals = 5; ⚠️ Type 'number' is not assignable to type 'Function'.
//! combineVals = printResult; ⚠️ Error! As structure does not match

//Function Types & CallBacks
function addAndHandle(n1: number, n2: number, cbfx: (num: number) => void) {
	const result = n1 + n2;
	cbfx(result);
}

combineVals = add;
console.log(combineVals(8, 4));
addAndHandle(10, 20, (res) => {
	console.log(res); //no need to define 'res' as already defined in the cbfx()
});
