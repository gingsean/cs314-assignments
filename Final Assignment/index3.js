'use strict';

function submitButton(){
	checkTextArea();
	if(document.getElementById("reason").style.borderColor == "red"){
		alert("Fill in all the information");
		return false;
	}
	else{
		let section2 = document.createElement('section');
		section2.setAttribute("id", "contactInformation");
		document.body.append(section2);
		let contactInfo = document.createElement('div');
		contactInfo.id = "newContact";
		contactInfo.classList.add("contactClass");
		let userName = document.createElement('h2');
		userName.innerHTML = "Name: " + document.getElementById("textinput").value + " " + document.getElementById("textinput2").value;
		userName.classList.add("contactName");
		let userEmail = document.createElement('p');
		userEmail.innerHTML = "Email: " + document.getElementById("emailaddress").value;
		userEmail.classList.add("contactEmail");
		let userNumber = document.createElement('p');
		userNumber.innerHTML = "Phone Number: " + document.getElementById("phone").value;
		userNumber.classList.add("contactNumber");
		let userBest = document.createElement('p');
		userBest.innerHTML = "Best Method: " + document.getElementById("contact").value;
		userBest.classList.add("contactBest");
		let userMessage = document.createElement('p');
		userMessage.innerHTML = "Message: " + document.getElementById("reason").value;
		userMessage.classList.add("contactMessage");
		$('#contactInformation').append(contactInfo);
		$(`#newContact`).append(userName);
		$(`#newContact`).append(userEmail);
		$(`#newContact`).append(userNumber);
		$(`#newContact`).append(userBest);
		$(`#newContact`).append(userMessage);
		document.getElementById("textinput").value = "Enter your first name.";
		document.getElementById("textinput2").value = "Enter your last name.";
		document.getElementById("emailaddress").value = "Enter your email address.";
		document.getElementById("phone").value = "Enter your phone number.";
		document.getElementById("reason").value = "Why would you like to contact me?";
		return false;
	}
}

function checkTextArea(){
	let textMessage = document.forms["thisForm"]["textarea"].value;
	if(textMessage == '' || textMessage == "Why would you like to contact me?"){
		document.getElementById("reason").style.borderColor = "red";
	}
	else{
		document.getElementById("reason").style.borderColor = "transparent";
	}
}