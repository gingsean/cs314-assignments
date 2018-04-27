'use strict';

let todoTrue = false;
let albumTrue = false;

function displayUsers(data){
	let section = document.createElement('section');
	section.setAttribute("id", "users");
	document.body.append(section);
	for(let user of data){
		console.log(user);
		let userContainer = document.createElement('div');
		userContainer.id = user.id;
		userContainer.classList.add("content");
		if(userContainer.id %2 == 0){
			userContainer.classList.add("light-bg");
		}
		else{
			userContainer.classList.add("dark-bg");
		}
		let userName = document.createElement('h3');
		userName.innerHTML = user.name;
		userName.className = 'users-name';
		let userEmail = document.createElement('h5');
		userEmail.innerHTML = "Email: " + user.email;
		userEmail.className = 'users-email';
		let userCompany = document.createElement('h5');
		userCompany.innerHTML = "Company: " + user.company.name;
		userCompany.className = 'users-company';
		let todoButton = document.createElement('button');
		todoButton.innerHTML = "Todos";
		todoButton.id = `todo-${user.id}`;
		todoButton.className = 'buttons';
		$(todoButton).click(() => {
			if(document.querySelector(`.todo-items-${user.id}`) === null){
				$.ajax({
					url:`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`,
					type: "GET",
					dataType:"json"
				})
				.done(function(json){
					$(`.album-titles-${user.id}`).hide();
					displayTodos(json);
				})
				.fail(function(status, errorThrown){
					console.log("Error: ", errorThrown);
					console.log("Status ", status);
				})
				.always(function(){
					console.log("The request is complete");
				});
				todoTrue = true;
			}
			else{
				$(`.todo-items-${user.id}`).toggle();
				$(`.album-titles-${user.id}`).hide();
			}
		});
		let albumButton = document.createElement('button');
		albumButton.innerHTML = "Albums";
		albumButton.id = `album-${user.id}`;
		albumButton.className = 'buttons';
		$(albumButton).click(() => {
			if(document.querySelector(`.album-titles-${user.id}`) === null){
				$.ajax({
					url:`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`,
					type: "GET",
					dataType:"json"
				})
				.done(function(json){
					$(`.todo-items-${user.id}`).hide();
					displayAlbums(json);
				})
				.fail(function(status, errorThrown){
					console.log("Error: ", errorThrown);
					console.log("StatusL ", status);
				})
				.always(function(){
					console.log("The request is complete");
				});
				albumTrue = true;
			}
			else{
				$(`.album-titles-${user.id}`).toggle();
				$(`.todo-items-${user.id}`).hide();
			}
		});
		console.log($('#users'));
		$('#users').append(userContainer);
		$(`#${user.id}`).append(userName);
		$(`#${user.id}`).append(userEmail);
		$(`#${user.id}`).append(userCompany);
		$(`#${user.id}`).append(todoButton);
		$(`#${user.id}`).append(albumButton);
	}
}

function displayTodos(data){
	for(let todoItems of data){
		let todoContainer = document.createElement('div');
		todoContainer.id = todoItems.id;
		todoContainer.classList.add("todoContent");
		let todoTitle = document.createElement('p');
		if(todoItems.completed){
			todoTitle.innerHTML = todoItems.title + ' <i class="fas fa-check-circle" color="green"></i>';
		}
		else{
			todoTitle.innerHTML = todoItems.title + ' <i class="fas fa-times" color="red"></i>';
		}
		todoTitle.classList.add('todo-titles');
		todoTitle.classList.add(`todo-items-${todoItems.userId}`);
		$(`#${todoItems.userId}`).append(todoTitle);
	}
}

function displayAlbums(data){
	for(let albumItems of data){
		let albumContainer = document.createElement('div');
		albumContainer.id = albumItems.id;
		albumContainer.classList.add("albumContent");
		let albumTitle = document.createElement('p');
		albumTitle.innerHTML = albumItems.title;
		albumTitle.classList.add(`album-titles-${albumItems.userId}`);
		albumTitle.classList.add("album-titles");
		$(`#${albumItems.userId}`).append(albumTitle);
	}
}

$.ajax({
	url:"https://jsonplaceholder.typicode.com/users",
	type: "GET",
	dataType:"json"
})
.done(function(json){
	displayUsers(json);
})
.fail(function(status, errorThrown){
	console.log("Error: ", errorThrown);
	console.log("StatusL ", status);
})
.always(function(){
	console.log("The request is complete");
});