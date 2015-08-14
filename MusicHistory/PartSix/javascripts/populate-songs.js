define(function(){
	return{
		getInitSongs: function(prepend, to){
			$.ajax({
				url: "https://nsscohort10.firebaseio.com/music-history/"
			}).done(function(data){
			  var fb = new Firebase("https://nsscohort10.firebaseio.com/music-history/");
				// var json = $.parseJSON(data);
				fb.on("value", function(snapshot) {
				  console.log(snapshot.val());
				  var json = snapshot.val();
				  prepend(json.songs);
					var output = '';
					for(var i = 0; i < json.songs.length; i++){
					output += "<section><header class='song-title'><h1>" + json.songs[i].title + "</h1></header><ul><li>" + json.songs[i].artist + "</li><li>" + json.songs[i].album + "</li><li>" + json.songs[i].year + "</li><li><button class='deletebtn'>x</button></li></ul></section>";
				}
				to.prepend(output);
				}, function (errorObject) {
				  console.log("The read failed: " + errorObject.code);
				});
			});
		}
	};
});