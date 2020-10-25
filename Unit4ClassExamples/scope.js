/*This file shows how variables and 
scope works. */

//the following block of code will cause an error


var x;
var y;

function assign() {
	x = 0;
	y = 1;
}

function addAssign(){
	console.log(x + y);
}


assign();
addAssign();


// if we move the variables to become globale variables, it will work.
