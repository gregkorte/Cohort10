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