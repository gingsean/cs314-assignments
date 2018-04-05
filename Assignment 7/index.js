"use strict";

//Task One "Char Swap"
function taskOne(){
	let userEntryOne = prompt("Char Swap: Enter any string.");
	if(userEntryOne === ""){
 		alert("Nothing was entered.");
 		taskOne();
 	}
 	else if(userEntryOne == null){
 		alert("You canceled");
 	}
 	else if(!isNaN(userEntryOne)){
 		alert("Entry was not a word.");
 		taskOne();
 	}
 	else{
 		charSwap(userEntryOne);
 	}
}

function charSwap(userEntry){
	let swapArray = userEntry.split('');
	let endValue = swapArray[swapArray.length - 1];
	swapArray[swapArray.length - 1] = swapArray[0];
	swapArray[0] = endValue;
	let newString = swapArray.join('');
	console.log(newString);
	alert("First letter swapped with last letter: " + newString);
}

taskOne();


//Task Two "Hi String"
function taskTwo(){
	let userEntryTwo = prompt("Hi String: Enter any string of words.");
	if(userEntryTwo === ""){
 		alert("Nothing was entered.");
 		taskTwo();
 	}
 	else if(userEntryTwo == null){
 		alert("You canceled");
 	}
 	else if(!isNaN(userEntryTwo)){
 		alert("Entry was not words.");
 		taskTwo();
 	}
 	else{
 		hiFunction(userEntryTwo);
 	}
}

function hiFunction(newEntry){
	let testArray = newEntry.split(" ");
	if(testArray[0] === "Hi"||testArray[0] === "hi"){
		alert(newEntry);
		console.log(newEntry);
	}
	else{
		alert("Hi " + newEntry);
		console.log("Hi " + newEntry);
	}
}

taskTwo();


//Task Three "Three Chars to Front"
function taskThree(){
	let userEntryThree = prompt("Three Chars to Front: Enter a string of at least three characters.");
	if(userEntryThree === ""){
 		alert("Nothing was entered.");
 		taskThree();
 	}
 	else if(userEntryThree == null){
 		alert("You canceled");
 	}
 	else if(userEntryThree.split('').length < 3){
 		alert("Entry was not long enough.");
 		taskThree();
 	}
 	else{
 		addFunction(userEntryThree);
 	}
}

function addFunction(newestEntry){
	let addArray = newestEntry.split('');
	addArray.unshift(addArray[addArray.length - 1]);
	addArray.unshift(addArray[addArray.length - 2]);
	addArray.unshift(addArray[addArray.length - 3]);
	addArray.pop();
	addArray.pop();
	addArray.pop();
	let thisString = addArray.join('');
	alert(thisString);
	console.log(thisString);
}

taskThree();


//Task Four "Strings to Sentence"
function taskFour(){
	let userEntryFour = prompt("Strings to Sentence: Separate with commas:\nFavorite color, favorite pet, and favorite food.");
	if(userEntryFour === ""){
 		alert("Nothing was entered.");
 		taskFour();
 	}
 	else if(userEntryFour == null){
 		alert("You canceled");
 	}
 	else if(!isNaN(userEntryFour)){
 		alert("Entry was not words.");
 		taskFour();
 	}
 	else{
 		sentenceCreator(userEntryFour);
 	}
}

function sentenceCreator(newerEntry){
	let lenghtTest = newerEntry.split(',');
	if (lenghtTest.length < 3 || lenghtTest.length > 3){
		alert("Incorrect entry format or incorrect number of entries.");
		taskFour();
	}
	else{
		alert(`My favorite color is ${lenghtTest[0]}, I want to have a ${lenghtTest[1]} as a pet, and I love eating ${lenghtTest[2]}.`);
		console.log(`My favorite color is ${lenghtTest[0]}, I want to have a ${lenghtTest[1]} as a pet, and I love eating ${lenghtTest[2]}.`);
	}
}

taskFour();


//Task Five "Upper or Lower"
function taskFive(){
	let userEntryFive = prompt("Upper or Lower: Enter a string of letters.");
	if(userEntryFive === ""){
 		alert("Nothing was entered.");
 		taskFive();
 	}
 	else if(userEntryFive == null){
 		alert("You canceled");
 	}
 	else if(!isNaN(userEntryFive)){
 		alert("Entry was not letters.");
 		taskFive();
 	}
 	else{
 		caseEditor(userEntryFive);
 	}
}

function caseEditor(userEntryFive){
	let lengthCounter = userEntryFive.split('');
	if (lengthCounter.length === 2){
		lengthCounter[0] = lengthCounter[0].toUpperCase();
		lengthCounter[1] = lengthCounter[1].toUpperCase();
		let shortStringTwo = lengthCounter.join('');
		alert(shortStringTwo);
		console.log(shortStringTwo);
	}
	else if(lengthCounter.length === 1){
		lengthCounter[0] = lengthCounter[0].toUpperCase();
		let shortStringOne = lengthCounter.join('');
		alert(shortStringOne);
		console.log(shortStringOne);
	}
	else{
		lengthCounter[0] = lengthCounter[0].toLowerCase();
		lengthCounter[1] = lengthCounter[1].toLowerCase();
		lengthCounter[2] = lengthCounter[2].toLowerCase();
		let longString = lengthCounter.join('');
		alert(longString);
		console.log(longString);
	}
}

taskFive();


//Task Six "Integer Swap"
function taskSix(){
	let userEntrySix = prompt("Integer Swap: Enter a list of integers separated by commas.");
	if(userEntrySix == null){
 		alert("You canceled");
 	}
 	else if(userEntrySix === ""){
 		alert("Nothing was entered.");
 		taskSix();
 	}
 	else{
 		numberSwitch(userEntrySix);
 	}
}

function numberSwitch(userEntrySix){
	let integerSwapArray = userEntrySix.split(",");
	let letterTest = userEntrySix.split(",");
	let i = 0;
	let letters = true;
	while (i < letterTest.length){
		if(isNaN(letterTest[i])){
			letters = false;
			i = letterTest.length;
		}
		else{
			i++;
		}
	}
	if(letters === false){
 		alert("At least one entry was not a number.");
 		taskSix();
 	}
	else if (integerSwapArray.length === 1){
		alert(userEntrySix);
		console.log(userEntrySix);
	}
	else{
		let endValue = integerSwapArray[integerSwapArray.length - 1];
		let startValue = integerSwapArray[0];
		integerSwapArray.pop();
		integerSwapArray.shift();
		integerSwapArray.push(startValue);
		integerSwapArray.unshift(endValue);
		let newEntrySix = integerSwapArray.join(",");
		alert(`User Entry: ${userEntrySix}\nNew Entry: ${newEntrySix}`);
		console.log(userEntrySix);
		console.log(newEntrySix);
	}
}

taskSix();


//Task Seven "Longest String"
function taskSeven(){
	let userEntrySeven = prompt("Longest String: Enter a list of strings separated by commas.");
	if (userEntrySeven == null){
		alert("You canceled.");
	}
	else if (userEntrySeven === ""){
		alert("Nothing was entered.");
		taskSeven();
	}
	else{
		longestString(userEntrySeven);
	}
}

function longestString(userEntrySeven){
	let printLongest = userEntrySeven.split(",");
	let numberTest = userEntrySeven.split(",");
	let i = 0;
	let numbers = true;
	while (i < numberTest.length){
		if(!isNaN(numberTest[i])){
			numbers = false;
			i = numberTest.length;
		}
		else{
			i++;
		}
	}
	if(numbers === false){
 		alert("At least one entry was not a word.");
 		taskSix();
 	}
 	else{
 		let longest = printLongest[0];
 		for(let n = 1; n < printLongest.length; n++){
 			let temp = printLongest[n];
 			if(longest.split('').length < temp.split('').length){
 				longest = temp;
 			}
 		}
 		alert("Longest string in list: " + longest);
 		console.log(longest);
 	}
}

taskSeven();


//Task Eight "Largest Even Number"
function taskEight(){
	let userEntryEight = prompt("Largest Even Number: Enter a list of integers separated by commas.");
	if(userEntryEight == null){
		alert("You canceled.");
	}
	else if(userEntryEight === ""){
		alert("Nothing was entered.");
		taskEight();
	}
	else{
		largestEven(userEntryEight);
	}
}

function largestEven(userEntryEight){
	let printLargest = userEntryEight.split(",");
	let letterTest = userEntryEight.split(",");
	let i = 0, j = 0;
	let letters = true;
	let even = false;
	while (i < letterTest.length){
		if(isNaN(letterTest[i])){
			letters = false;
			i = letterTest.length;
		}
		else{
			i++;
		}
	}
	while (j < letterTest.length){
		if(letterTest[j] % 2 == 0){
			even = true;
			j = letterTest.length;
		}
		else{
			j++;
		}
	}
	if(letters === false){
 		alert("At least one entry was not a number.");
 		taskEight();
 	}
 	else if(even === false){
 		alert("No even numbers were included.");
 		taskEight();
 	}
 	else{
 		let largest = 0;
 		for(let m = 0; m < printLargest.length; m++){
 			let temp = printLargest[m];
 			if(largest < temp && temp % 2 === 0){
 				largest = printLargest[m];
 			}
 		}
 		alert("The largest even integer: " + largest);
 		console.log(userEntryEight);
 		console.log(largest);
 	}
}

taskEight();


//Task Nine "Current Day Time"
function taskNine(){
	let today = new Date();
	let day;
	let hour;
	let minutes;
	let timeOfDay;
	switch(today.getDay()){
		case 0:
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
		case 5:
			day = "Friday";
			break;
		case 6:
			day = "Saturday";
			break;
	}
	if(today.getHours() > 12){
		hour = today.getHours() % 12;
		timeOfDay = "PM";
	}
	else if(today.getHours() === 12){
		hour = 12;
		timeOfDay = "PM";
	}
	else if(today.getHours() === 0){
		hour = 12;
		timeOfDay = "AM";
	}
	else{
		hour = today.getHours();
		timeOfDay = "AM";
	}
	if(today.getMinutes() < 10){
		minutes = 0 + today.getMinutes();
	}
	else{
		minutes = today.getMinutes();
	}
	alert(`Today is ${day}.\nIt is ${hour}:${minutes}${timeOfDay}`)
}

taskNine();


//Task Ten "Unlimited Function"
function taskTen(...args){
	alert(args.join(''));
}

taskTen("This", "Task", 10, "Is", "Working");