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
	bandElement.innerHTML += "<p>";
	for (var i = 0; i < bands.length; i += 1) {
	  currentBand = bands[i];
		if(i + 1 < bands.length) {
		  bandElement.innerHTML += currentBand + ", ";
		} else {
			bandElement.innerHTML += currentBand + "</p>";
		}
	}
	veggieElement.innerHTML += "<p>";
	for (var i = 0; i < vegetables.length; i += 1) {
		currentVeggie = vegetables[i];
		if(i + 1 < vegetables.length) {
			veggieElement.innerHTML += currentVeggie + ", ";
		} else {
			veggieElement.innerHTML += currentVeggie + "</p>";
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

//No Remainder//
// var primes = [2, 3, 5, 7];
// var lowDivNum = 1;

// function findPrimes(nums){
// 	for(var i = 1; i < 10; i++){
// 		if(i % 7 === 0){
// 			lowDivNum *= i;
// 		} else if(i % 5 === 0)
// 		} else if(i % 5 === 0) {
// 			lowDivNum *= i;
// 		}
// 	}
// }
// 1 = 1
// 2 = 2
// 3 = 3
// 4 = 2*2
// 5 = 5
// 6 = 3*2
// 7 = 7
// 8 = 2*2*2
// 9 = 3*3
// 10 = 5*2

// 1*2*3*2*5*7*2*3

//Fibonacci Generator//
var target = document.getElementById('fibonacci');
var output = "<p>";
var seq = [];
seq[0] = 0;
seq[1] = 1;

function fibCount() {
	for(var i = 2; i < 15; i++) {
		seq[i] = seq[i-1] + seq[i-2];
	}
	for(var i = 0; i < seq.length; i++) {
		if(i < seq.length - 1){
			output += seq[i] + ", "
		} else {
			output += seq[i]
		}
	}
	target.innerHTML = output;
}
fibCount();

//Sum of squares minus square of sums//
var natNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var sumSquares = 0;
var squareSums = 0;
var output = document.getElementById('sum-squares');

function getSumSquares(natnums) {
	for(var i = 0; i < natNums.length; i++){
		sumSquares += Math.pow(natNums[i], 2)
	}
}

function getSquareSums(natNums) {
	for (var i = 0; i < natNums.length; i++) {
		squareSums += natNums[i];
	}
	squareSums = Math.pow(squareSums, 2);
}

function getDiff(sumSquares, squareSums) {
	output.innerHTML = (sumSquares - squareSums)
}

getSumSquares(natNums);
getSquareSums(natNums);
getDiff(sumSquares, squareSums);