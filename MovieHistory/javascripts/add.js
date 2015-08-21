define(function(){
  return{
    newMovie: function(obj){
      console.log(obj);
      $.ajax({
        url: "https://nsscohort10.firebaseio.com/movie-history/movies.json",
        method: "POST",
        data: JSON.stringify(obj)
      }).done(function(data){
      });
    }
  };
});