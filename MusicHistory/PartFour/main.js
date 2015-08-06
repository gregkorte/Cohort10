$(document).ready(function(){
	var counter = 0;

	$.ajax({
		url: "songs.json"
	}).done(function(data){
		var output = '';
		json = $.parseJSON(data)
		for(var i = 0; i < json.songs.length; i++){
			output += "<section><header class='song-title'><h1>"
			+ json.songs[i].title
			+ "</h1></header><ul><li>"
			+ json.songs[i].artist
			+ "</li><li>"
			+ json.songs[i].album
			+ "</li><li>"
			+ json.songs[i].year
			+ "</li><li><button class='deletebtn'>x</button></li></ul></section>"
		}
		$('#content').prepend(output);
	});

	function getMore(){
		$.ajax({
			url: "songs2.json"
		}).done(function(data){
			var output = '';
			json = $.parseJSON(data)
			for(var i = 0; i < json.songs.length; i++){
				output += "<section><header class='song-title'><h1>"
				+ json.songs[i].title
				+ "</h1></header><ul><li>"
				+ json.songs[i].artist
				+ "</li><li>"
				+ json.songs[i].album
				+ "</li><li>"
				+ json.songs[i].year
				+ "</li><li><button class='deletebtn'>x</button></li></ul></section>"
			}
			$('.more').before(output);
		});
	}

	$('#content').on('click', '.more', function(){
		counter++
		if(counter > 1) {
			return;
		} else {
			getMore();
		}
	});

	$('#content').on('click', '.deletebtn', function(){
			$(this).closest('section').remove();
	});

});