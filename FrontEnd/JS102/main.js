var outputStr = '';
greaterArr = [];

function check25(arr){
	for(var i = 0; i < arr.length; i++){
		if(Number(arr[i]) > 25){
			greaterArr.push(arr[i]);
		}
	}
}

function sortArr(arr){
	console.log("sortarr running")
	return arr.sort();
}

function output(arr){
	console.log("output running")
	for(var i = 0; i < arr.length; i++){
		outputStr += '<div class="number">' + arr[i] + '</div>';
	}
}

$(document).ready(function(){
	$('#btn').click(function(){
		var inputVal = $('#input').val();
		var arr = inputVal.split(',');
		console.log(arr)
		var firstArr = check25(arr);
		console.log(greaterArr)
		var sortedArr = sortArr(greaterArr);
		output(sortedArr);
		$('#output').append(outputStr)
	})
})

/* 
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

// Use the map method to create a new array where the first letter of each planet is capitalized

// Use the filter method to create a new array that contains planets with the letter 'e'

// Use the reduce method to create a sentence from the words in the following array

//Planets//
var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var el = document.getElementById("planets");




//REDUCE//
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
