define(['templates', 'filter'], function(hbs, filt){
  return{
    getInitMovies: function(){
      var fb = new Firebase("https://nsscohort10.firebaseio.com/movie-history/");
      // console.log('1. getInitSongs running');
      $.ajax({
        url: "https://nsscohort10.firebaseio.com/movie-history/"
      }).done(function(data){
        fb.child('movies').on('value', function(snapshot) {
          moviesObj = snapshot.val();
          var yearObj = filt.dupes('Year', moviesObj);
          var actorObj = filt.dupes('Actors', moviesObj);
          var ratingObj = filt.dupes('Rated', moviesObj);
          var filterObj = {
            Year: yearObj,
            Actors: actorObj,
            Rating: ratingObj
          };
          hbs.getTemp(filterObj, 'filter');
          hbs.getTemp(moviesObj, 'movieMain');
        });
      });
    }
  };
});