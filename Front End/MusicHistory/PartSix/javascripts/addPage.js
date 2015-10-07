define(function(){
  return{
    newSong: function(song){
      $.ajax({
        url: "https://nsscohort10.firebaseio.com/music-history/songs.json",
        method: "POST",
        data: JSON.stringify(song)
      }).done(function(data){
      });
    }
  };
});