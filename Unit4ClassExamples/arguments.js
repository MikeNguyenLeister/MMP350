/*This file shows how to send arguments 
into a function */

function greet(name, greeting){
	console.log(greeting +","+name);
}

//nothing happens til we call the functions and send in the proper arguments.

/*
greet("Ruth",  "Hello");
greet("Ruth", "Good evening");
*/

//if we try to call the function without arguments, it will return in the console as "undefined, undefined"
/*

greet();
*/