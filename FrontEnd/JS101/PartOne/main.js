$(document).ready(function(){

function hoursPerYear() {
	return 24*365 + " hours";
}

function minutesPerDecade() {
	return 60*24*365*10 + " minutes";
}

function checkAge(diff) {
	if(diff > 2500000000) {
		$('#seconds-old').append("Dang, you are aging well...");
	}
	else {
		$('#seconds-old').append("You're still a spring chicken, eh?");
	}
}

function secondsOld() {
	var input = Date.parse(prompt("Enter your birthday in the following format mm/dd/yyyy."));
	var currentDate = new Date();
	var diff = (currentDate - input)/1000;
	checkAge(diff);
	return "<br>" + diff + " seconds";
}

function incrementTen() {
	var outputStr = '';
	for(var i = 0; i < 100+1; i+=10) {
		if(i < 100) {
			outputStr += i + ", ";
		} else {
			outputStr += i;
		}
	}
	return outputStr;
}

function decrementTwo() {
	var outputStr = '';
	for(var i = 1024; i > 1; i/=2) {
		if(i > 2) {
			outputStr += i + ", ";
		} else {
			outputStr += i;
		}
	}
	return outputStr;
}

function decrementTwoArr() {
	var outputArr = [];
	for(var i = 1024; i > 1; i/=2) {
		outputArr.push(i);
	}
	return "[" + outputArr.slice(0, outputArr.count).join(", ") + "]";
}

function decrementOne() {
	var outputArr = [];
	for(var i = 100; i > 0; i--){
		if(i % 2 === 0) {
			outputArr.unshift(i);
		} else {
			outputArr.push(i);
		}
	}
	return "[" + outputArr.slice(0, outputArr.count).join(", ") + "]";
}

	var hrsYr = hoursPerYear();
	$('#hours-in-year').append(hrsYr);
	var minDec = minutesPerDecade();
	$('#minutes-in-decade').append(minDec);
	var secOld = secondsOld();
	$('#seconds-old').append(secOld);
	var incTen = incrementTen();
	$('#increment-by-10').append(incTen);
	var decTwo = decrementTwo();
	$('#increment-by-div-2').append(decTwo);
	var decTwoArr = decrementTwoArr();
	$('#insert-to-array').append(decTwoArr);
	var decOne = decrementOne();
	$('#even-odd-array span').append(decOne);
})