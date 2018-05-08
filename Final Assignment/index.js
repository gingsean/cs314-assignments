'use strict';

function buttonPush(name){
	if(name == 1){
		document.getElementById("one").scrollIntoView({behavior: "smooth", block: "start"});
	}
	else if(name == 2){
		document.getElementById("two").scrollIntoView({behavior: "smooth", block: "start"});
	}
	else{
		document.getElementById("three").scrollIntoView({behavior: "smooth", block: "start"});
	}
}

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

let map;
      function initMap() {
      	let beths = {lat: 47.682077, lng: -122.344734};
      	let rhino = {lat: 47.615061, lng: -122.318344};
      	let gum = {lat: 47.608418, lng: -122.340354}
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 47.611092, lng: -122.326966},
          zoom: 11,
          styles: [
			  {
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#ebe3cd"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#523735"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      {
			        "color": "#f5f1e6"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative",
			    "elementType": "geometry.stroke",
			    "stylers": [
			      {
			        "color": "#c9b2a6"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.land_parcel",
			    "elementType": "geometry.stroke",
			    "stylers": [
			      {
			        "color": "#dcd2be"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.land_parcel",
			    "elementType": "labels",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.land_parcel",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#ae9e90"
			      }
			    ]
			  },
			  {
			    "featureType": "landscape.natural",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#dfd2ae"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#dfd2ae"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "labels.text",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#93817c"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "geometry.fill",
			    "stylers": [
			      {
			        "color": "#a5b076"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#447530"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#f5f1e6"
			      }
			    ]
			  },
			  {
			    "featureType": "road.arterial",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#fdfcf8"
			      }
			    ]
			  },
			  {
			    "featureType": "road.arterial",
			    "elementType": "labels",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#f8c967"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "geometry.stroke",
			    "stylers": [
			      {
			        "color": "#e9bc62"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "labels",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway.controlled_access",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#e98d58"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway.controlled_access",
			    "elementType": "geometry.stroke",
			    "stylers": [
			      {
			        "color": "#db8555"
			      }
			    ]
			  },
			  {
			    "featureType": "road.local",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "road.local",
			    "elementType": "labels",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "road.local",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#806b63"
			      }
			    ]
			  },
			  {
			    "featureType": "transit.line",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#dfd2ae"
			      }
			    ]
			  },
			  {
			    "featureType": "transit.line",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#8f7d77"
			      }
			    ]
			  },
			  {
			    "featureType": "transit.line",
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      {
			        "color": "#ebe3cd"
			      }
			    ]
			  },
			  {
			    "featureType": "transit.station",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#dfd2ae"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "geometry.fill",
			    "stylers": [
			      {
			        "color": "#0000ff"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#92998d"
			      }
			    ]
			  }
			]
        });
        let bethInfo = new google.maps.InfoWindow({
          content: '<h5>Beth\'s Cafe</h5>'
        });
        let bethsMarker = new google.maps.Marker({
        	position: beths,
        	map: map
        });
        bethsMarker.addListener('click', function() {
          bethInfo.open(map, bethsMarker);
        });

        let rhinoInfo = new google.maps.InfoWindow({
          content: '<h5>Rhino Room</h5>'
        });
        let rhinoMarker = new google.maps.Marker({
        	position: rhino,
        	map: map
        });
        rhinoMarker.addListener('click', function() {
          rhinoInfo.open(map, rhinoMarker);
        });

        let gumInfo = new google.maps.InfoWindow({
          content: '<h5>Gum Wall</h5>'
        });
        let gumMarker = new google.maps.Marker({
        	position: gum,
        	map: map
        });
        gumMarker.addListener('click', function() {
          gumInfo.open(map, gumMarker);
        });
      }