/*two ways to create a function */

//function declaration
function foo(){
	console.log("Hello");
} //because this is a declaration, there is no semi colon after the }.

//function statement
var bar = function () {
	console.log("world!"); 
}  // because this is a statement, notice teh semicolon after the }.

//nothing will happen after we declare the function until we call the functions.


foo();
bar();
