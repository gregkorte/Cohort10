define(function(){
  return{
    newSong: function(movie){
      $.ajax({
        url: "https://nsscohort10.firebaseio.com/movie-history/movies.json",
        method: "POST",
        data: JSON.stringify(movie)
      }).done(function(data){
      });
    }
  };
});