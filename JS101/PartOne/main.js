function hoursPerYear() {
	return 24*365 + " hours";
}

function minutesPerDecade() {
	return 60*24*365*10 + " minutes";
}

function secondsOld() {
	var input = Date.parse(prompt("Enter your birthday in the following format mm/dd/yyyy."));
	var currentDate = new Date();
	return (currentDate - input)/1000 + " seconds";
}

$(document).ready(function(){
	var hrsYr = hoursPerYear();
	$('#hours-in-year').append(hrsYr);
	var minDec = minutesPerDecade();
	$('#minutes-in-decade').append(minDec)
	var secOld = secondsOld();
	$('#seconds-old').append(secOld);
})