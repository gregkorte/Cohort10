function hoursPerYear() {
	return 24*365 + " hours";
}

function minutesPerDecade() {
	return 60*24*365*10 + " minutes";
}

$(document).ready(function(){
	var hrsYr = hoursPerYear();
	$('#hours-in-year').append(hrsYr);
	var minDec = minutesPerDecade();
	$('#minutes-in-decade').append(minDec)
})