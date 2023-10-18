let name = document.getElementById("name");
let password = document.getElementById("password");
let submitButton = document.getElementById("submitBut");
let title = document.getElementById("title");
let signUpButton = document.getElementById("signupbutton");
let isSignUp = false;
let form = document.getElementById("form");

let db = [];

signUpButton.addEventListener("click", () => {
	isSignUp = !isSignUp;
	if (isSignUp) {title.innerText = "Sign up"; signUpButton.innerText = "Log In";} else {title.innerText = "Log in"; signUpButton.innerText = "Sign Up";}
	name.value = "";
	password.value = "";
});

submitButton.addEventListener("click", () => {
	if (isSignUp) {
		db.push({"name": name.value, "password": password.value});
	} else {
		for (let i = 0; i < db.length; i++) {
			console.log(`User number ${i}: name: ${db[i].name} password: ${db[i].password}`); 
			if (db[i].name == name.value && db[i].password == password.value) {
				alert("Access granted");
				window.location.replace("./sla.html");
				return;
			}
		}
		alert("Username or password is incorrect");
	}
});
