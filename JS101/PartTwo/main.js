var header = document.getElementById('header');
var section = document.getElementById('section');
var footer = document.getElementById('footer');

header.innerHTML = "<h1>JavaScript Exercises</h1>"

//Reindeer Exercise//
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var hohohoElement = document.getElementById("reindeer");

function runRunReindeer() {
	for(var i = 0; i < reindeer.length; i++) {
		for(var j = 0; j < colors.length; j++) {
			if(i === j){
				hohohoElement.innerHTML += "<p>" + colors[j] + ' ' + reindeer[i] + "</p>";
			}
		}
	}
}
runRunReindeer();

//Bands & Veggies Exercise//
var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "New Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
// var loopCount = 5;
var currentBand = "";
var currentVeggie = "";
var bandElement = document.getElementById('boy-bands');
var veggieElement = document.getElementById('vegetables');

function bandsAndVeggies(){
	for (var i = 0; i < bands.length; i += 1) {
	  currentBand = bands[i];
		if(i + 1 < bands.length) {
		  bandElement.innerHTML += currentBand + ", ";
		} else {
			bandElement.innerHTML += currentBand;
		}
	}
	for (var i = 0; i < vegetables.length; i += 1) {
		currentVeggie = vegetables[i];
		if(i + 1 < vegetables.length) {
			veggieElement.innerHTML += currentVeggie + ", ";
		} else {
			veggieElement.innerHTML += currentVeggie;
		}
	}
}
bandsAndVeggies();