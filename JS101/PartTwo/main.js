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

//Grade sorting//
var g = document.getElementById("grades");
var l = document.getElementById("low");
var h = document.getElementById("high");
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var a = [];
var b = [];
var c = [];
var d = [];
var f = [];
var aCount;
var bCount;
var cCount;
var dCount;
var fCount;

function sortGrades(scores) {
	for(var i = 0; i < scores.length; i++){
		var s = scores[i];
		if(s >= 91) {
			a.push(s);
		} else if(s >= 81) {
			b.push(s);
		} else if(s >= 71) {
			c.push(s);
		} else if(s >= 61) {
			d.push(s);
		} else {
			f.push(s);
		}
	}
	aCount = a.length;
	bCount = b.length;
	cCount = c.length;
	dCount = d.length;
	fCount = f.length;
	g.innerHTML = "<p>" + aCount + " A's</p>" +
							"<p>" + bCount + " B's</p>" +
							"<p>" + cCount + " C's</p>" +
							"<p>" + dCount + " D's</p>" +
							"<p>" + fCount + " F's</p>"
}
sortGrades(scores)

function getLowest(f) {
	f.sort();
	l.innerHTML = "<p>The lowest score is: " + f[0] + "</p>"
}
getLowest(f);

function getHighest(a) {
	a.sort();
	h.innerHTML = "<p>The highest score is: " + a[a.length -1] + "</p>"
}
getHighest(a);