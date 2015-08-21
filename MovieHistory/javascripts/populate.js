define(['templates'], function(hbs){
  return{
    getInitMovies: function(){
      var fb = new Firebase("https://nsscohort10.firebaseio.com/movie-history/");
      // console.log('1. getInitSongs running');
      $.ajax({
        url: "https://nsscohort10.firebaseio.com/movie-history/"
      }).done(function(data){
        fb.child('movies').on('value', function(snapshot) {
          moviesObj = snapshot.val();
          hbs.getTemp(moviesObj, 'filter');
          hbs.getTemp(moviesObj, 'movieMain');
        });
      });
    }
  };
});