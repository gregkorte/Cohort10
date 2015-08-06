$(document).ready(function(){
	var output = '';
	$.ajax({
		url: "songs.json"
	}).done(function(data){
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
								+ "</li></ul></section>"
		}
		$('#content').append(output);
	});
});