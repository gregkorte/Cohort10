define(function(){
	return{
		getInitSongs: function(prepend, to){
			$.ajax({
				url: "./javascripts/songs.json"
			}).done(function(data){
				json = $.parseJSON(data);
				prepend(json.songs);
					var output = '';
					for(var i = 0; i < json.songs.length; i++){
					output += "<section><header class='song-title'><h1>" + json.songs[i].title + "</h1></header><ul><li>" + json.songs[i].artist + "</li><li>" + json.songs[i].album + "</li><li>" + json.songs[i].year + "</li><li><button class='deletebtn'>x</button></li></ul></section>";
				}
				to.prepend(output);
			});
		}
	};
});