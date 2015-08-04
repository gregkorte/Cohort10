var header = document.getElementById('header');
var section = document.getElementById('section');
var footer = document.getElementById('footer');

header.innerHTML = "<h1>JavaScript Exercises</h1>"

//Reindeer Exercise//
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("reindeer");

function runRunReindeer() {
	console.log(hohohoElement)
	for(var i = 0; i < reindeer.length; i++) {
		for(var j = 0; j < colors.length; j++) {
			if(i === j){
				hohohoElement.innerHTML += "<p>" + colors[j] + ' ' + reindeer[i] + "</p>";
			}
		}
	}
}

runRunReindeer();