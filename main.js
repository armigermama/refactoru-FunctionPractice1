
//1.
//Write a function called 'tripleFive' which loops three times using a for loop. 
//Each iteration of the loop, output 'Five!' using console.log.

var tripleFive = function (){
	for (var a=0;a<3;a++) {
		console.log('Five!');
	}
};

tripleFive();

//2.
//Write a function called 'lastLetter' which takes a single string argument and 
//returns the last character in the string.

var lastLetter = function (string){
	return string.charAt(string.length-1);
};

console.log(lastLetter('hello'));
console.log(lastLetter('island'));

//3.
//Write a function called 'square' which takes a single argument which is a number, 
//and returns number * number.

var square = function (num){
	return num*num;
};

console.log(square(3));

//4.
//Write a function called 'negate' which takes a single number argument and 
//returns the negative of that number.

var negate = function (num) {
	return 0-num;
};

console.log(negate(5));
console.log(negate(-8));