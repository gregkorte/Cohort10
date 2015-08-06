$(document).ready(function(){
	var output = '';
	$.ajax({
		url: "songs.json"
	}).done(function(data){
		for(var i = 0; i < data.songs.length; i++){
			console.log(data.songs.length)
			output += "<section><header class='song-title'><h1>" 
								+ data.songs[i].title
								+ "</h1></header><ul><li>"
								+ data.songs[i].artist
								+ "</li><li>"
								+ data.songs[i].album
								+ "</li><li>"
								+ data.songs[i].year
								+ "</li></ul></section>"
		}
		$('#content').append(output);
	});
});