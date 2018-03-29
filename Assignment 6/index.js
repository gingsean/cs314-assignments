"use strict";

//Number 4
 function questionOne(){
 	let userChoice = confirm("True or False?");
 	if (userChoice == true) {
 		console.log(true);
 	}
 	else{
 		console.log(false);
 	}
 }

 questionOne();

//Number 5
 function questionTwo(){	
 	let userChoice_2 = confirm("True or False?") ? "true" : "false";
 	console.log(userChoice_2);
 }

 questionTwo();

//Number 7
 function questionThree(){
 	let userEntry = prompt("What is your age");
 	if(userEntry === ""){
 		alert("Nothing was entered.");
 		questionThree();
 	}
 	else if(isNaN(userEntry)){
 		alert("Entry was not a number.");
 		questionThree();
 	}
 	else if(userEntry == null){
 		alert("You canceled");
 	}
 	else{
 		alert(userEntry + " " + "years old");
 	}
 }

 questionThree();

//Number 9
function Car(brand, year, color){
	this.brand = brand;
	this.year = year;
	this.color = color;
	this.changeColor = function(newColor){
		this.color = newColor;
	};
}

//Number 10
let clonedCar;
function copier(clonedObject, price){
	clonedCar = Object.assign({}, clonedObject);
	clonedCar.price = price;
}

//Number 11
let carOne = new Car("Toyota", 1996, "Green");

//Number 12
copier(carOne, "$2000");

//Number 13
console.log("Object 1", carOne);
console.log("Object 2", clonedCar);

//Number 14
carOne.changeColor("Blue");
console.log("New Object 1", carOne);
clonedCar.changeColor("Purple");
console.log("New Object 2", clonedCar);

//Number 15
function stringFunctionOne(stringOne, stringTwo, stringThree = "rainbow"){
	let result = stringOne + " " + stringTwo + " " + stringThree;
	console.log(result);
}

stringFunctionOne("Favorite", "color:");

//Number 16
let stringFunctionTwo = function(stringFour, stringFive, stringSix = "everything"){
	return stringFour + " " + stringFive + " " + stringSix;
}

console.log(stringFunctionTwo("Favorite", "food:"));

//Number 17
let stringFunctionThree = (stringSeven, stringEight, stringNine = "earth") => stringSeven + " " + stringEight + " " + stringNine;

console.log(stringFunctionThree("Favorite", "place:"));