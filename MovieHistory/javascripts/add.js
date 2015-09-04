define(function(){
  return{
    newMovie: function(obj){
      console.log(obj);
      obj = {
        Actors: obj.Actors.split(', '),
        Awards: obj.Awards,
        Director: obj.Director,
        Genre: obj.Genre,
        Plot: obj.Plot,
        Poster: obj.Poster,
        Rated: obj.Rated,
        Runtime: obj.Runtime,
        Title: obj.Title,
        Type: obj.Type,
        Year: obj.Year,
        imdbID: obj.imdbID,
        watched: false,
        rating: ''
      };
      $.ajax({
        url: "https://nsscohort10.firebaseio.com/movie-history/movies.json",
        method: "POST",
        data: JSON.stringify(obj)
      }).done(function(data){
        console.log(data);
      });
    },
    watched: function(btn){
      var fb = new Firebase('https://nsscohort10.firebaseio.com/movie-history');
      key = btn.closest('section').attr('id');
      fb.child('movies').child(key).update({watched: true});
    },
    rating: function(btn, rating){
      var fb = new Firebase('https://nsscohort10.firebaseio.com/movie-history');
      key = btn.closest('section').attr('id');
      fb.child('movies').child(key).update({rating: rating});
    }
  };
});