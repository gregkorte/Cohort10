function hoursPerYear() {
	return 24*365;
}


$(document).ready(function(){
	var hrsYr = hoursPerYear();
	$('#hours-in-year').append(hrsYr);
})