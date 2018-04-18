function taskOne(name){
	if(name == 1){
		document.getElementById("one").scrollIntoView({behavior: "smooth", block: "start"});
	}
	else if(name == 2){
		document.getElementById("two").scrollIntoView({behavior: "smooth", block: "start"});
	}
	else if(name == 3){
		document.getElementById("three").scrollIntoView({behavior: "smooth", block: "start"});
	}
	else if(name == 4){
		document.getElementById("four").scrollIntoView({behavior: "smooth", block: "start"});
	}
	else{
		document.getElementById("five").scrollIntoView({behavior: "smooth", block: "start"});
	}
}

function taskTwo(element){
	let checker = element;
	if(checker == 1){
		document.getElementById("one").style.backgroundColor = "blue";
	}
	else{
		document.getElementById("one").style.backgroundColor = "green";
	}
}

function taskThree(){
	if(document.getElementById("two").style.backgroundColor == "orange" || document.getElementById("two").style.backgroundColor != "pink"){
		document.getElementById("two").style.backgroundColor = "pink";
		document.getElementById("switch").innerText = "Click for orange.";
	}
	else{
		document.getElementById("two").style.backgroundColor = "orange";
		document.getElementById("switch").innerText = "Click for pink.";
	}
}

function taskFour(){
	let newList = document.createElement("li");
	let newItem = document.createTextNode(document.getElementById("textInput").value);
	newList.appendChild(newItem);
	document.getElementById("thisList").appendChild(newList);
	document.getElementById("textInput").value = "";
}

function taskFive(number){
	if(number == 1){
		document.getElementById("itemOne").remove();
		
	}
	else if(number == 2){
		document.getElementById("itemTwo").remove();
	}
	else if(number == 3){
		document.getElementById("itemThree").remove();
	}
	else{
		document.getElementById("itemFour").remove();
	}
}

function taskSix(number){
	if(number == 1){
		document.getElementById("oneItem").style.backgroundColor = "lightblue";
		document.getElementById("twoItem").style.backgroundColor = "transparent";
		document.getElementById("threeItem").style.backgroundColor = "transparent";
		document.getElementById("fourItem").style.backgroundColor = "transparent";
	}
	else if(number == 2){
		document.getElementById("twoItem").style.backgroundColor = "lightblue";
		document.getElementById("oneItem").style.backgroundColor = "transparent";
		document.getElementById("threeItem").style.backgroundColor = "transparent";
		document.getElementById("fourItem").style.backgroundColor = "transparent";
	}
	else if(number == 3){
		document.getElementById("threeItem").style.backgroundColor = "lightblue";
		document.getElementById("oneItem").style.backgroundColor = "transparent";
		document.getElementById("twoItem").style.backgroundColor = "transparent";
		document.getElementById("fourItem").style.backgroundColor = "transparent";
	}
	else{
		document.getElementById("fourItem").style.backgroundColor = "lightblue";
		document.getElementById("oneItem").style.backgroundColor = "transparent";
		document.getElementById("twoItem").style.backgroundColor = "transparent";
		document.getElementById("threeItem").style.backgroundColor = "transparent";
	}
}