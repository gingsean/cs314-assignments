'use strict';

$.ajax({
	url:"https://api.punkapi.com/v2/beers",
	type:"GET",
	dataType:"json"
})
.done(function(json){
	displayBeers(json);
})
.fail(function(status, errorThrown){
	console.log("Error: ", errorThrown);
	console.log("StatusL ", status);
})
.always(function(){
	console.log("The request is complete");
});

function displayBeers(data){
	let descriptionTest = false;
	let foodTest = false;
	let section = document.createElement('section');
	section.setAttribute("id", "beers");
	document.body.append(section);
	for(let beer of data){
		let beerContainer = document.createElement('div');
		beerContainer.id = beer.id;
		beerContainer.classList.add("content");
		if(beerContainer.id %2 == 0){
			beerContainer.classList.add("dark-bg");
		}
		else{
			beerContainer.classList.add("light-bg");
		}
		let beerName = document.createElement('h3');
		beerName.innerHTML = "Beer: " + beer.name;
		beerName.className = 'beers-name';
		let beerTagline = document.createElement('h5');
		beerTagline.innerHTML = "Tagline: " + beer.tagline;
		beerTagline.className = 'beers-tagline';
		let descriptionButton = document.createElement('button');
		descriptionButton.innerHTML = "Description";
		descriptionButton.id = `description-${beer.id}`;
		descriptionButton.className = 'buttons';
		$(descriptionButton).click(() => {
			let descriptionContainer = document.createElement('div');
			descriptionContainer.id = beer.id;
			descriptionContainer.classList.add("descriptionContent");
			let description = document.createElement('p');
			description.innerHTML = "Description: " + beer.description;
			description.classList.add('descriptions');
			description.classList.add(`descriptions-${beer.id}`);
			if(document.querySelector(`.descriptions-${beer.id}`) === null){
				$(`#${beer.id}`).append(description);
				$(`.food-${beer.id}`).hide();
			}
			else{
				$(`.descriptions-${beer.id}`).toggle();
				$(`.food-${beer.id}`).hide();
			}
		});
		let foodButton = document.createElement('button');
		foodButton.innerHTML = "Food Complements";
		foodButton.id = `food-${beer.id}`;
		foodButton.className = 'buttons';
		$(foodButton).click(() => {
			let foodContainer = document.createElement('div');
			foodContainer.id = beer.id;
			foodContainer.classList.add("foodContent");
			let foodComplements = document.createElement('p');
			foodComplements.innerHTML = "Food Complements: " + beer.food_pairing;
			foodComplements.classList.add('foods');
			foodComplements.classList.add(`food-${beer.id}`);
			if(document.querySelector(`.food-${beer.id}`) === null){
				$(`#${beer.id}`).append(foodComplements);
				$(`.descriptions-${beer.id}`).hide();
			}
		 	else{
		 		$(`.food-${beer.id}`).toggle();
		 		$(`.descriptions-${beer.id}`).hide();
		 	}
		});
		console.log($('#beers'));
		$('#beers').append(beerContainer);
		$(`#${beer.id}`).append(beerName);
		$(`#${beer.id}`).append(beerTagline);
		$(`#${beer.id}`).append(descriptionButton);
		$(`#${beer.id}`).append(foodButton);
	}
}